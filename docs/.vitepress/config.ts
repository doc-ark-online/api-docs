import { defineConfig, DefaultTheme } from "vitepress";
import { pathToSideBar, typeToNamespace } from "../../utils";

export default defineConfig({
  ignoreDeadLinks: true,
  title: "API",
  description: "口袋方舟 编辑器的 Api 文档",
  // base: "/api-docs/",
  outDir: "../dist",
  themeConfig: {
    algolia: {
      appId: "I2PHYUBLCN",
      apiKey: "62ee775311415d26549e0e30fef5aa38",
      indexName: "api-docs_prodigytech",
    },
    siteTitle: "API",
    nav: [
      {
        text: "020 版本",
        items: [
          { text: "021 预发", link: "/item-1" },
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
        collapsible: false,
        collapsed: false,
        items: [
          { text: "给用户看的demo", link: "/test/Base" },
          { text: "可用的写法", link: "/test/Class" },
          { text: "可自动化的点", link: "/test/Delegate" },
          { text: "自动化后的demo", link: "/test/interface" },
        ],
      },
      {
        text: "Index",
        collapsible: false,
        collapsed: false,
        items: [
          { text: "Events", link: "/modules/Events.Events" },
          { text: "Extension", link: "/modules/Extension.Extension" },
          { text: "Gameplay", link: "/modules/Gameplay.Gameplay" },
          { text: "MobileEditor", link: "/modules/MobileEditor.MobileEditor" },
          { text: "Type", link: "/modules/Type.Type" },
          { text: "UI", link: "/modules/UI.UI" },
          { text: "Util", link: "/modules/Util.Util" },
          { text: "DataStorage", link: "/modules/DataStorage.DataStorage" },
          { text: "Network", link: "/modules/Network.Network" },
        ],
      },
      ...typeToNamespace(["classes", "enums", "interfaces"]),
      // ...pathToSideBar(["classes", "enums", "interfaces", "modules"]),
      {
        text: 'Util',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'AssetUtil', link: '/modules/Util.Util.AssetUtil.md' },
          { text: 'InputUtil', link: '/modules/Util.Util.InputUtil.md' },
          { text: 'LocaleUtil', link: '/modules/Util.Util.LocaleUtil.md' },
          { text: 'MathUtil', link: '/modules/Util.Util.MathUtil.md' },
          { text: 'NFTUtil', link: '/modules/Util.Util.NFTUtil.md' },
          { text: 'StringUtil', link: '/modules/Util.Util.StringUtil.md' },
          { text: 'SystemUtil', link: '/modules/Util.Util.SystemUtil.md' },
          { text: 'TimeUtil', link: '/modules/Util.Util.TimeUtil.md' },
          { text: 'TweenUtil', link: '/modules/Util.Util.TweenUtil.md' },
          { text: 'WindowUtil', link: '/modules/Util.Util.WindowUtil.md' },
        ]
      }
    ],
    editLink: {
      pattern:
        "https://github.com/prodigytech-doc/api-docs/tree/main/docs/:path",
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
