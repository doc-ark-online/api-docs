import type { DefaultTheme } from '../../viteTheme/shared'
import { typeToNamespace, pathToSideBar } from '../../utils'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  ...pathToSideBar(['test']),
  {
    text: 'Index',
    collapsible: true,
    // collapsed: true,
    items: [
      { text: 'Events', link: '/modules/Events.Events' },
      { text: 'Extension', link: '/modules/Extension.Extension' },
      { text: 'Gameplay', link: '/modules/Gameplay.Gameplay' },
      { text: 'MobileEditor', link: '/modules/MobileEditor.MobileEditor' },
      { text: 'Type', link: '/modules/Type.Type' },
      { text: 'UI', link: '/modules/UI.UI' },
      { text: 'Util', link: '/modules/Util.Util' },
      { text: 'DataStorage', link: '/modules/DataStorage.DataStorage' },
      { text: 'Network', link: '/modules/Network.Network' }
    ]
  },
  ...typeToNamespace(['classes', 'enums', 'interfaces']),
  {
    text: 'Util',
    collapsible: true,
    collapsed: true,
    items: [
      { text: 'AssetUtil', link: '/modules/Util.AssetUtil.md' },
      { text: 'InputUtil', link: '/modules/Util.InputUtil.md' },
      { text: 'LocaleUtil', link: '/modules/Util.LocaleUtil.md' },
      { text: 'MathUtil', link: '/modules/Util.MathUtil.md' },
      { text: 'NFTUtil', link: '/modules/Util.NFTUtil.md' },
      { text: 'StringUtil', link: '/modules/Util.StringUtil.md' },
      { text: 'SystemUtil', link: '/modules/Util.SystemUtil.md' },
      { text: 'TimeUtil', link: '/modules/Util.TimeUtil.md' },
      { text: 'TweenUtil', link: '/modules/Util.TweenUtil.md' },
      { text: 'WindowUtil', link: '/modules/Util.WindowUtil.md' }
    ]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: 'API',
  description: '口袋方舟 编辑器的 Api 文档',
  // base: "/api-docs/",
  outDir: '../dist',
  themeConfig: {
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech'
    },
    siteTitle: 'API',
    nav: [
      {
        text: '020 版本',
        items: [
          { text: '021 预发', link: '/item-1' },
          { text: '019 版本', link: '/item-2' },
          { text: '018 版本', link: '/item-3' }
        ]
      },
      {
        text: '语言',
        items: [
          { text: '中文', link: '/item-1' },
          { text: '英文', link: '/item-2' }
        ]
      }
    ],
    sidebar,
    outline: [2, 3],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/api-docs/tree/main/docs/:path',
      text: '到 github 上进行修改'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
})
