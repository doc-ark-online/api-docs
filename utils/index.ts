import { readdirSync } from "fs";
import * as path from "path";
import { DefaultTheme } from "vitepress";

export function pathToSideBar(paths: string[]) {
  // let obj: Record<string, DefaultTheme.SidebarGroup> = {};
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
  sidebar.forEach((side) => {
    side.items.forEach((s) => {
      console.log(s.link);
    });
  });
  return sidebar;
}
