var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/html.ts
var html_exports = {};
__export(html_exports, {
  generateHtml: () => generateHtml
});
module.exports = __toCommonJS(html_exports);
var import_fs = require("fs");
var import_path = __toESM(require("path"));

// src/constants.ts
var DEFAULT_OUTDIR = "dist";
var DEFAULT_FRAMEWORK_NAME = "solei";

// src/html.ts
var generateHtml = ({ appData, userConfig }) => {
  return new Promise((resolve, reject) => {
    var _a, _b;
    const title = (_b = (_a = userConfig.title) != null ? _a : appData.pkg.name) != null ? _b : "Solei";
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
        <script src="/${DEFAULT_OUTDIR}/${DEFAULT_FRAMEWORK_NAME}.js"><\/script>
        <script src="/${DEFAULT_FRAMEWORK_NAME}/client.js"><\/script>
      </body>
      </html>`;
    try {
      const htmlPath = import_path.default.resolve(DEFAULT_OUTDIR, "index.html");
      (0, import_fs.mkdir)(import_path.default.dirname(htmlPath), { recursive: true }, (err) => {
        if (err) {
          reject(err);
        }
        (0, import_fs.writeFileSync)(htmlPath, content, "utf-8");
        resolve({});
      });
    } catch (error) {
      reject({});
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateHtml
});
