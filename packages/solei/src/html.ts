import FS from "fs";
import path from "path";
import { DEFAULT_FRAMEWORK_NAME, DEFAULT_OUTDIR } from "./constants";

export const generateHtml = () => {
  return new Promise((resolve, reject) => {
    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Solei</title>
      </head>
      
      <body>
        <div id="solei">
          <span>loading...</span>
        </div>
        <script src="/${DEFAULT_OUTDIR}/${DEFAULT_FRAMEWORK_NAME}/index.js"></script>
        <script src="/${DEFAULT_FRAMEWORK_NAME}/client.js"></script>
      </body>
      </html>`;
    try {
      const htmlPath = path.resolve(DEFAULT_OUTDIR, "index.html");
      FS.mkdir(path.dirname(htmlPath), { recursive: true }, (err) => {
        if (err) {
          reject(err);
        }
        FS.writeFileSync(htmlPath, content, "utf-8");
        resolve({});
      });
    } catch (error) {
      reject({});
    }
  });
};
