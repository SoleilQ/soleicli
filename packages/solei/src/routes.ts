import { existsSync, readdirSync, statSync } from "fs";
import path from "path";
import type { AppData } from "./appData";
import { DEFAULT_GLOBAL_LAYOUTS } from "./constants";

const getFiles = (root: string) => {
  if (!existsSync(root)) return [];
  return readdirSync(root).filter((file) => {
    const absFile = path.join(root, file);
    // 获取文件信息状态
    const fileStat = statSync(absFile);
    const isFile = fileStat.isFile();
    if (isFile) {
      if (!/\.tsx?$/.test(file)) return false;
    }
    return true;
  });
};

const fileToRoutes = (files: string[], pagesPath: string): IRoute[] => {
  return files.map((file) => {
    // basename 用于'/'隔开的最后一部分 相当于文件名
    // extname 返回文件扩展名
    let pagePath = path.basename(file, path.extname(file));
    const element = path.resolve(pagesPath, pagePath);
    if (pagePath === "home") pagePath = "";
    return {
      path: `/${pagePath}`,
      element,
    };
  });
};

export interface IRoute {
  element: any;
  path: string;
  routes?: IRoute[];
}

export const getRoutes = ({ appData }: { appData: AppData }) => {
  return new Promise((resolve: (value: IRoute[]) => void) => {
    const files = getFiles(appData.paths.absPagesPath);
    const routes = fileToRoutes(files, appData.paths.absPagesPath);
    const layoutPath = path.resolve(
      appData.paths.absPagesPath,
      DEFAULT_GLOBAL_LAYOUTS
    );
    // 如果不存在全局 layout 那就直接返回路由配置信息
    if (!existsSync(layoutPath)) {
      resolve(routes);
    } else {
      resolve([
        {
          path: "/",
          element: layoutPath.replace(path.extname(layoutPath), ""),
          routes: routes,
        },
      ]);
    }
  });
};
