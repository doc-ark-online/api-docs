import { defineConfig, DefaultTheme } from "vitepress";
import { pathToSideBar } from "../../utils";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "API",
  description: "Metaapp 编辑器的 Api 文档",
  themeConfig: {
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    siteTitle: "一些自带的Markdown写法",
    nav: [
      {
        text: "020 版本",
        items: [
          { text: "021 版本", link: "/item-1" },
          { text: "019 版本", link: "/item-2" },
          { text: "018 版本", link: "/item-3" },
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
        text: "示例",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "CharacterAnimation示例一", link: "/test/Base" },
          { text: "CharacterAnimation示例二", link: "/test/interface" },
          { text: "CharacterAnimation示例三", link: "/test/Delegate" },
          { text: "CharacterAnimation初始", link: "/test/Class" },
          { text: "AICharacter", link: "/test/Variable" },
          { text: "AICharacter初始", link: "/test/Type" },
          { text: "enums索引示例", link: "/test/enums" },
          { text: "其他教程示例", link: "/test/function" },
        ],        
      },
            {
        text: "Events",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "CharacterAnimation示例一", link: "/test/Base" },
          { text: "CharacterAnimation示例二", link: "/test/interface" },
          { text: "CharacterAnimation示例三", link: "/test/Delegate" },
          { text: "CharacterAnimation初始", link: "/test/Class" },
          { text: "AICharacter", link: "/test/Variable" },
          { text: "AICharacter初始", link: "/test/Type" },
          { text: "enums索引示例", link: "/test/enums" },
          { text: "其他教程示例", link: "/test/function" },
        ],        
      },
            {
        text: "Extension",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "CharacterAnimation示例一", link: "/test/Base" },
          { text: "CharacterAnimation示例二", link: "/test/interface" },
          { text: "CharacterAnimation示例三", link: "/test/Delegate" },
          { text: "CharacterAnimation初始", link: "/test/Class" },
          { text: "AICharacter", link: "/test/Variable" },
          { text: "AICharacter初始", link: "/test/Type" },
          { text: "enums索引示例", link: "/test/enums" },
          { text: "其他教程示例", link: "/test/function" },
        ],        
      },
            {
        text: "Gameplay",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "CharacterAnimation示例一", link: "/test/Base" },
          { text: "CharacterAnimation示例二", link: "/test/interface" },
          { text: "CharacterAnimation示例三", link: "/test/Delegate" },
          { text: "CharacterAnimation初始", link: "/test/Class" },
          { text: "AICharacter", link: "/test/Variable" },
          { text: "AICharacter初始", link: "/test/Type" },
          { text: "enums索引示例", link: "/test/enums" },
          { text: "其他教程示例", link: "/test/function" },
        ],        
      },
      

      ...pathToSideBar(["classes", "enums", "interfaces", "modules"]),
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
    outline: [2, 3],
  },
});

function otherSidebar() {
  return [
    {
      text: "自动化生成",
      collapsible: true,
      collapsed: true,
      items: [{ text: "enums", link: "/auto/enums" }],
    },
    {
      text: "Common",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Delegate", link: "/common/Delegate" },
        { text: "DelegateInterface", link: "/common/DelegateInterface" },
        { text: "MulticastDelegate", link: "/common/MulticastDelegate" },
        {
          text: "MulticastDelegateInterface",
          link: "/common/MulticastDelegateInterface",
        },
      ],
    },
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
    {
      text: "DataStorage",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Events",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Extension",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Gameplay",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "Global",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "GoogleAnalytics",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "KeyboardSimulation",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MathLibrary",
      collapsible: true,
      collapsed: true,
      items: [],
    },
    {
      text: "MobileEditor",
      collapsible: true,
      collapsed: true,
      items: [],
    },
  ];
}
