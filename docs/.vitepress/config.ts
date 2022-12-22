import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Api",
  description: "Metaapp 编辑器的 Api 文档",
  themeConfig: {
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    siteTitle: "Api",
    nav: [
      {
        text: "018 版本",
        items: [
          { text: "017 版本", link: "/item-1" },
          { text: "016 版本", link: "/item-2" },
          { text: "015 版本", link: "/item-3" },
        ],
      },
      {
        text: "语言",
        items: [
          { text: "中文", link: "/item-1" },
          { text: "英文", link: "/item-2" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Core",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Base", link: "/core" },
          { text: "Game Play", link: "/game-play" },
          { text: "GameObject", link: "/GameObject" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/Metaworld2021/api-docs/tree/main/docs/:path",
      text: "到 github 上进行修改",
    },
    lastUpdatedText: "Updated Date",
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
  },
});
