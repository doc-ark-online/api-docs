import { DefaultTheme } from 'doc-theme-323'
import { readdirSync, readFileSync } from "fs";
import * as path from "path";


// export function typeToNamespace(paths: string[]) {
//   const targetObjArr = paths
//     .map((p) => {
//       const dirs = readdirSync(path.join(process.cwd(), `./docs/${p}`));
//       return dirs.map((name) => {
//         const info = getMdNameInfo(name);
//         return {
//           ...info,
//           fullName: name,
//           link: `/${p}/${name}`,
//         };
//       });
//     })
//     .flat(2);
//   let namespaceType: Record<string, typeof targetObjArr | undefined> = {};
//   targetObjArr.forEach((obj) => {
//     if (namespaceType[obj.namespace]) {
//       namespaceType[obj.namespace]!.push(obj);
//     } else {
//       namespaceType[obj.namespace] = [obj];
//     }
//   });
//   let sidebar: DefaultTheme.SidebarGroup[] = [];
//   Object.keys(namespaceType).forEach((key) => {
//     const value = namespaceType[key];
//     if (value)
//       sidebar.push({
//         text: key,
//         collapsible: true,
//         collapsed: true,
//         items: value.map((s) => {
//           return {
//             text: s.name,
//             link: s.link,
//           };
//         }),
//       });
//   });
//   return sidebar;
// }


export interface GroupsConfigV2 {
  [key: string]: {
    file?: {
      file_name: string
      file_path: string
      name: string
    }
    children?: GroupsConfigV2
    no_children_files?: GroupsConfigV2
  }
}

/** 根据配置文件生成对应的侧边栏 - 多级目录版本 */
export function dealConfigSidebarV2() {
  const json = JSON.parse(
    readFileSync('./docs/configs/groups.json', { encoding: 'utf-8' })
  ) as GroupsConfigV2
  return configToSidebarGroup(json)
}

/** 根据config生成侧边栏目录，按照字母递增排序 */
export function configToSidebarGroup(configs: GroupsConfigV2) {
  const arr: DefaultTheme.SidebarGroup[] = []
  Object.entries(configs).sort((a, b): number => {
    return a[0].localeCompare(b[0]);
  }).forEach(([key, value]) => {
    arr.push({
      text: key,
      collapsed: true,
      collapsible: true,
      link: value.file?.file_path,
      items: [
        ...configToSidebarGroup(value.children ?? {}),
        ...Object.entries(value.no_children_files ?? {}).map(([key, value]) => {
          return {
            text: key,
            link: value.file?.file_path,
            collapsed: false,
            collapsible: false
          }
        })
      ]
    })
  })
  return arr
}

/** 获取用于显示的版本信息 */
export function getDisplayVersionText(version: string, isBetaVersion: boolean): string {
  if (isBetaVersion) {
    return `Beta版本(${version})`;
  } else {
    return `主版本(${version})`
  }
}
