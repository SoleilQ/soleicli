import { Server } from "http";
import path from "path";
import { AppData } from "./appData";
import glob from "glob";
import { build } from "esbuild";

function cleanRequireCache(absMockPath: string) {
  Object.keys(require.cache).forEach((file) => {
    if (file.indexOf(absMockPath) > -1) {
      delete require.cache[absMockPath];
    }
  });
}

function normalizeConfig(config: any) {
  return Object.keys(config).reduce((memo: any, key) => {
    const handler = config[key];
    const type = typeof handler;

    if (type !== "function" && type !== "object") {
      return memo;
    }
    const req = key.split(" ");
    const method = req[0];
    const url = req[1];
    if (!memo[method]) memo[method] = {};
    memo[method][url] = handler;
    return memo;
  }, {});
}

export const getMockConfig = ({
  appData,
  soleiServe,
}: {
  appData: AppData;
  soleiServe: Server;
}) => {
  return new Promise(async (reslove: (value: any) => void, reject) => {
    let config = {};
    const mockDir = path.resolve(appData.paths.cwd, "mock");
    const mockFiles = glob.sync("**/*.ts", {
      cwd: mockDir,
    });
    const ret = mockFiles.map((memo) => path.join(mockDir, memo));
    console.log(mockFiles);

    const mockoutDir = path.resolve(appData.paths.absTmpPath, "mock");
    await build({
      format: "cjs",
      logLevel: "error",
      outdir: mockoutDir,
      bundle: true,
      watch: {
        onRebuild(err, res) {
          if (err) {
            console.error(JSON.stringify(err));
            return;
          }
          soleiServe.emit("REBUILD", { appData });
        },
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
      external: ["esbuild"],
      entryPoints: ret,
    });
    try {
      const outMockFiles = glob.sync("**/*.js", { cwd: mockoutDir });
      cleanRequireCache(mockoutDir);
      config = outMockFiles.reduce((memo, mockFile) => {
        memo = {
          ...memo,
          ...require(path.resolve(mockoutDir, mockFile)).default,
        };
        console.log(memo);
        return memo;
      }, {});
    } catch (error) {}
    reslove(normalizeConfig(config));
  });
};
