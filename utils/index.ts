import { readdirSync } from "fs";
import * as path from "path";
import { DefaultTheme } from "vitepress";

/** 根据文件夹生成侧边栏路径 */
export function pathToSideBar(paths: string[]) {
  let sidebar: DefaultTheme.SidebarGroup[] = [];
  paths.forEach((item) => {
    const dirs = readdirSync(path.join(process.cwd(), `./docs/${item}`));
    sidebar.push({
      text: item,
      collapsible: true,
      collapsed: true,
      items: dirs.map((s) => {
        return {
          text: s,
          link: `/${item}/${s}`,
        };
      }),
    });
  });
  // sidebar.forEach((side) => {
  //   side.items.forEach((s) => {
  //     console.log(s.link);
  //   });
  // });
  return sidebar;
}

/** 将目录从类型分类改为根据命名空间分类 */
export function typeToNamespace(paths: string[]) {
  interface Info {
    fullName: string;
    link: string;
    name: string;
    namespace: string;
  }
  const targetObjArr = paths
    .map((p) => {
      const dirs = readdirSync(path.join(process.cwd(), `./docs/${p}`));
      return dirs.map((name) => {
        const info = getMdNameInfo(name);
        return {
          ...info,
          fullName: name,
          link: `/${p}/${name}`,
        };
      });
    })
    .flat(2);
  let namespaceType: Record<string, typeof targetObjArr | undefined> = {};
  targetObjArr.forEach((obj) => {
    if (namespaceType[obj.namespace]) {
      namespaceType[obj.namespace]!.push(obj);
    } else {
      namespaceType[obj.namespace] = [obj];
    }
  });
  let sidebar: DefaultTheme.SidebarGroup[] = [];
  Object.keys(namespaceType).forEach((key) => {
    const value = namespaceType[key];
    if (value)
      sidebar.push({
        text: key,
        collapsible: true,
        collapsed: true,
        items: value.map((s) => {
          return {
            text: s.name,
            link: s.link,
          };
        }),
      });
  });
  return sidebar;
}
/**
 * 根据 md 名字包含的信息变成一下格式
 * Core.Core.Base.md
 * ```ts
 * {
 *    name: 'Base',
 *    namespace: 'Core',
 * }
 * ```
 */
function getMdNameInfo(mdName: string) {
  const infos = mdName.split(".");
  return {
    name: infos.at(-2)!,
    namespace: infos.at(0)!,
  };
}
