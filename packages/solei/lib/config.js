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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/config.ts
var config_exports = {};
__export(config_exports, {
  getUserConfig: () => getUserConfig
});
module.exports = __toCommonJS(config_exports);
var import_esbuild = require("esbuild");
var import_fs = require("fs");
var import_path = __toESM(require("path"));

// src/constants.ts
var DEFAULT_CONFIG_FILE = "config.ts";

// src/config.ts
var getUserConfig = ({
  appData,
  soleiServe
}) => {
  return new Promise((resolve, reject) => __async(void 0, null, function* () {
    let config = {};
    const configFile = import_path.default.resolve(appData.paths.cwd, DEFAULT_CONFIG_FILE);
    if ((0, import_fs.existsSync)(configFile)) {
      yield (0, import_esbuild.build)({
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
          }
        },
        define: {
          "process.env.NODE_ENV": JSON.stringify("development")
        },
        external: ["esbuild"],
        entryPoints: [configFile]
      });
      try {
        config = require(import_path.default.resolve(appData.paths.absOutputPath, "config.js")).default;
      } catch (error) {
        console.log("getUserConfig error", error);
        reject(error);
      }
    }
    console.log(config);
    resolve(config);
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getUserConfig
});
