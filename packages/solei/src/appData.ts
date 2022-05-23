import path from "path";
import {
  DEFAULT_ENTRY_POINT,
  DEFAULT_OUTDIR,
  DEFAULT_PLATFORM,
  DEFAULT_TEMPLATE,
} from "./constants";

interface Options {
  cwd: string;
  port: number;
}

export interface AppData {
  paths: {
    cwd: string; // 当前路径
    absSrcPath: string; //src目录绝对路径
    absPagesPath: string; // pages 目录绝对路径
    absTmpPath: string; //临时目录绝对路径
    absOutputPath: string; // 输出目录绝对路径
    absEntryPath: string; //主入口文件的绝对路径
    absNodeModulesPath: string; // node_modules 目录绝对路径
  };
  pkg: any;
}

export const getAppData = ({ cwd, port }: Options) => {
  return new Promise((resolve: (value: AppData) => void, reject) => {
    const absSrcPath = path.resolve(cwd, "src");
    const absPagesPath = path.resolve(absSrcPath, "pages");
    const absNodeModulesPath = path.resolve(cwd, "node_modules");
    const absTmpPath = path.resolve(absNodeModulesPath, DEFAULT_TEMPLATE);
    const absOutputPath = path.resolve(cwd, DEFAULT_OUTDIR);
    const absEntryPath = path.resolve(absTmpPath, DEFAULT_ENTRY_POINT);

    const paths = {
      cwd,
      port,
      absSrcPath,
      absPagesPath,
      absNodeModulesPath,
      absTmpPath,
      absOutputPath,
      absEntryPath,
    };

    const pkg = require(path.resolve(cwd, "package.json"));
    resolve({ paths, pkg });
  });
};
