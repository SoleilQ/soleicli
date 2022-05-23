import express from "express";
import path from "path";
import fs from "fs";
import portfinder from "portfinder";
import { createServer } from "http";
import { build } from "esbuild";
import {
  DEFAULT_ENTRY_POINT,
  DEFAULT_FRAMEWORK_NAME,
  DEFAULT_HOST,
  DEFAULT_OUTDIR,
  DEFAULT_PLATFORM,
  DEFAULT_PORT,
} from "./constants";
import { createWebSocketServer } from "./server";
import { generateHtml } from "./html";
import { style } from "./styles";
import { AppData, getAppData } from "./appData";
import { getRoutes } from "./routes";
import { getUserConfig } from "./config";
import { generateEntry } from "./entry";
import { createProxyMiddleware } from "http-proxy-middleware";
import { getMockConfig } from "./mock";

export const dev = async () => {
  const app = express();
  const port = await portfinder.getPortPromise({
    port: DEFAULT_PORT,
  });
  const cwd = process.cwd();
  const output = path.resolve(cwd, DEFAULT_OUTDIR);

  app.get("/", async (req, res, next) => {
    res.set("Content-Type", "text/html");
    const htmlPath = path.join(output, "index.html");
    if (fs.existsSync(htmlPath)) {
      fs.createReadStream(htmlPath).on("error", next).pipe(res);
    } else {
      next();
    }
  });

  app.use(`/${DEFAULT_OUTDIR}`, express.static(output));
  app.use("/solei", express.static(path.resolve(__dirname, "client")));

  const soleiServe = createServer(app);
  const ws = createWebSocketServer(soleiServe);

  function sendMessage(type: string, data?: any) {
    ws.send(JSON.stringify({ type, data }));
  }

  const buildMain = async ({ appData }: { appData: AppData }) => {
    // 获取用户数据
    const userConfig = await getUserConfig({ appData, soleiServe });

    const mockConfig = await getMockConfig({ appData, soleiServe });

    app.use((req, res, next) => {
      const result = mockConfig?.[req.method]?.[req.url];
      if (
        Object.prototype.toString.call(result) === "[object String]" ||
        Object.prototype.toString.call(result) === "[object Object]"
      ) {
        res.json(result);
      } else if (
        Object.prototype.toString.call(result) === "[object Function]"
      ) {
        result();
      } else {
        next();
      }
    });
    // 获取routes 配置
    const routes = await getRoutes({ appData });
    // 生成项目主入口
    await generateEntry({ appData, routes, userConfig });
    // 生成 Html
    await generateHtml({ appData, userConfig });

    if (userConfig.proxy) {
      Object.keys(userConfig.proxy).forEach((key) => {
        const proxyConfig = userConfig.proxy![key];
        const target = proxyConfig.target;
        if (target) {
          app.use(key, createProxyMiddleware(key, userConfig.proxy![key]));
        }
      });
    }
  };

  soleiServe.on("REBUILD", async ({ appData }) => {
    await buildMain({ appData });
    sendMessage("reload");
  });

  soleiServe.listen(port, async () => {
    console.log(`App listening at port http://${DEFAULT_HOST}:${port}`);

    const appData = await getAppData({
      cwd,
      port,
    });
    await buildMain({ appData });
    try {
      await build({
        format: "iife",
        outdir: appData.paths.absOutputPath,
        logLevel: "error",
        platform: DEFAULT_PLATFORM,
        bundle: true,
        watch: {
          onRebuild: (err, res) => {
            if (err) {
              console.error(JSON.stringify(err));
              return;
            }
            sendMessage("reload");
          },
        },
        define: {
          "process.env.NODE_ENV": JSON.stringify("development"),
        },
        external: ["esbuild", "solei"],
        plugins: [style()],
        entryPoints: [appData.paths.absEntryPath],
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });

  return soleiServe;
};
