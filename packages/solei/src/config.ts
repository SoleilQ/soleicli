import { build } from "esbuild";
import { existsSync } from "fs";
import { Server } from "http";
import path from "path";
import { AppData } from "./appData";
import { DEFAULT_CONFIG_FILE } from "./constants";
import type { Options as ProxyOptions } from "http-proxy-middleware";

export interface UserConfig {
  title?: string;
  keepalive?: any[];
  proxy?: { [key: string]: ProxyOptions };
}

export const getUserConfig = ({
  appData,
  soleiServe,
}: {
  appData: AppData;
  soleiServe: Server;
}) => {
  return new Promise(async (resolve: (value: UserConfig) => void, reject) => {
    let config = {};
    const configFile = path.resolve(appData.paths.cwd, DEFAULT_CONFIG_FILE);
    
    if (existsSync(configFile)) {
      await build({
        format: "cjs",
        logLevel: "error",
        outdir: appData.paths.absOutputPath,
        bundle: true,
        watch: {
          onRebuild: (err, res) => {
            if (err) {
              console.log(JSON.stringify(err));
              return;
            }
            soleiServe.emit("REBUILD", { appData });
          },
        },
        define: {
          "process.env.NODE_ENV": JSON.stringify("development"),
        },
        external: ["esbuild"],
        entryPoints: [configFile],
      });
      try {
        config = require(path.resolve(
          appData.paths.absOutputPath,
          "config.js"
        )).default;
      } catch (error) {
        console.log("getUserConfig error", error);
        reject(error);
      }
    }
    console.log(config)
    resolve(config);
  });
};
