import Koa, { Context } from "koa";
import Router from "koa-router";
import Static from "koa-static";
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

export const dev = async () => {
  const app = express();
  const router = new Router();
  const port = await portfinder.getPortPromise({
    port: DEFAULT_PORT,
  });
  const cwd = process.cwd();
  const output = path.resolve(cwd, DEFAULT_OUTDIR);

  app.get("/", async (req, res) => {
    res.set("Content-Type", "text/html");
    // const htmlPath = path.join(output, "index.html");
    // if (fs.existsSync(htmlPath)) {
    //   fs.createReadStream(htmlPath)
    //     .on("error", next)
    //     // .pipe(ctx.response as any);
    // } else {
    //   next();
    // }
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Solei123</title>
    </head>
    
    <body>
      <div id="solei">
        <span>loading...</span>
      </div>
      <script src="/${DEFAULT_OUTDIR}/index.js"></script>
      <script src="/solei/client.js"></script>
    </body>
    </html>`);
  });
  // router.get(`/${DEFAULT_OUTDIR}`, (ctx, next) => {
  //   ctx.body = fs.readdirSync(output)
  // });
  // app.use(router.routes()).use(router.allowedMethods());
  // app.use(historyApiFallback());
  // app.use(Static(output));
  // app.use(Static(path.resolve(__dirname, "client")))
  // router.get('/solei', );

  app.use(`/${DEFAULT_OUTDIR}`, express.static(output));
  app.use('/solei', express.static(path.resolve(__dirname, 'client')))

  const soleiServe = createServer(app);
  const ws = createWebSocketServer(soleiServe);

  function sendMessage(type: string, data?: any) {
    ws.send(JSON.stringify({ type, data }));
  }

  // await generateHtml();
  soleiServe.listen(DEFAULT_PORT, async () => {
    console.log(`App listening at port http://${DEFAULT_HOST}:${DEFAULT_PORT}`);
    try {
      await build({
        format: 'iife',
        outdir: output,
        logLevel: 'error',
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
        external: ['esbuild'],
        entryPoints: [path.resolve(cwd, DEFAULT_ENTRY_POINT)]
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });

  return soleiServe;
};
