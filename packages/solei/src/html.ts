import { mkdir, writeFileSync } from "fs";
import path from "path";
import { AppData } from "./appData";
import { UserConfig } from "./config";
import { DEFAULT_FRAMEWORK_NAME, DEFAULT_OUTDIR } from "./constants";

export const generateHtml = ({ appData, userConfig }: { appData: AppData; userConfig: UserConfig}) => {
  return new Promise((resolve, reject) => {
    const title = userConfig.title ?? appData.pkg.name ?? 'Solei'
    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no, viewport-fit=cover" />
        <title>${title}</title>
      </head>
      
      <body>
        <div id="solei">
          <span>loading...</span>
        </div>
        <script src="/${DEFAULT_OUTDIR}/${DEFAULT_FRAMEWORK_NAME}.js"></script>
        <script src="/${DEFAULT_FRAMEWORK_NAME}/client.js"></script>
      </body>
      </html>`;
    try {
      const htmlPath = path.resolve(DEFAULT_OUTDIR, "index.html");
      mkdir(path.dirname(htmlPath), { recursive: true }, (err) => {
        if (err) {
          reject(err);
        }
        writeFileSync(htmlPath, content, "utf-8");
        resolve({});
      });
    } catch (error) {
      reject({});
    }
  });
};
