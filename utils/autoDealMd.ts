import { readdirSync } from "fs";
import * as path from "path";

function typeToNamespace(paths: string[]) {
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
