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

// src/entry.ts
var entry_exports = {};
__export(entry_exports, {
  generateEntry: () => generateEntry
});
module.exports = __toCommonJS(entry_exports);
var import_fs = require("fs");
var import_path = __toESM(require("path"));
var count = 1;
var getRouteStr = (routes) => {
  let routesStr = "";
  let importStr = "";
  routes.forEach((route) => {
    count += 1;
    importStr += `import A${count} from '${route.element}';
`;
    routesStr += `
<Route path='${route.path}' element={<A${count} />}>`;
    if (route.routes) {
      const { routesStr: rs, importStr: is } = getRouteStr(route.routes);
      routesStr += rs;
      importStr += is;
    }
    routesStr += "</Route>\n";
  });
  return { routesStr, importStr };
};
var configStringify = (config) => {
  return config.map((item) => {
    if (item instanceof RegExp) {
      return item;
    }
    return `'${item}'`;
  });
};
var generateEntry = ({
  appData,
  routes,
  userConfig
}) => {
  return new Promise((resolve, reject) => {
    var _a;
    count = 0;
    const { routesStr, importStr } = getRouteStr(routes);
    const content = `
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import {HashRouter, Routes, Route} from 'react-router-dom';
      import KeepAliveLayout from '@soleijs/keepalive';    
      import '${import_path.default.resolve(__dirname, "hd")}';  
      ${importStr}

      const App = () => {
        return (
          <KeepAliveLayout keepalive={[${configStringify((_a = userConfig.keepalive) != null ? _a : [])}]}>
            <HashRouter>
              <Routes>
                ${routesStr}
              </Routes>
            </HashRouter>
          </KeepAliveLayout>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('solei'));
      root.render(React.createElement(App));
    `;
    try {
      (0, import_fs.mkdir)(import_path.default.dirname(appData.paths.absEntryPath), { recursive: true }, (err) => {
        if (err) {
          reject(err);
        }
        (0, import_fs.writeFileSync)(appData.paths.absEntryPath, content, "utf8");
        resolve({});
      });
    } catch (err) {
      reject({});
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateEntry
});
