import type { DefaultTheme } from '../../viteTheme/shared'
import { typeToNamespace, pathToSideBar } from '../../utils'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    collapsible: false,
    // collapsed: false,
    items: [
      { text: 'Events', link: '/modules/Events.Events' },
      { text: 'Extension', link: '/modules/Extension.Extension' },
      { text: 'Gameplay', link: '/modules/Gameplay.Gameplay' },
      { text: 'MobileEditor', link: '/modules/MobileEditor.MobileEditor' },
      { text: ' Service', link: '/modules/Service.Service' },
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
  head: [
    ['link', { rel: 'icon', href: '/favicon_kd.ico' }],
    [
      'script',
      {},
      `
            var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5629eb7e7272f7af14f1b8ef288c5f57";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    `
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech'
    },
    siteTitle: 'API',
    nav: [
      {
        text: '官方教程',
        link: 'https://meta.feishu.cn/wiki/wikcnmY0MQweLdbnlywkJJiDucd'
      },
      {
        text: '产品手册',
        link: 'https://meta.feishu.cn/wiki/wikcnmFHMSugP9ozHw5PAkcEwYd'
      },
      {
        text: '论坛',
        link: 'https://forums.ark.online/#/'
      },
      {
        text: '020 版本',
        items: [
          { text: '021 预发', link: '/item-1' },
          { text: '019 版本', link: '/item-2' },
          { text: '018 版本', link: '/item-3' }
        ]
      }
      // {
      //   text: '语言',
      //   items: [
      //     { text: '中文', link: '/item-1' },
      //     { text: '英文', link: '/item-2' }
      //   ]
      // }
    ],
    socialLinks: [
      { link: 'https://github.com/prodigytech-doc/api-docs', icon: 'github' },
      {
        link: 'https://wenjuan.feishu.cn/m/cfm?t=sEJP3cVJZ3Ii-ewdc',
        icon: {
          svg: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="10" fill="#676D77"/>
<path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
<path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
<path d="M10 11V10.4C10 10.1791 10.1822 10.0052 10.3953 9.94698C10.5503 9.90464 10.6983 9.83744 10.8334 9.74721C11.08 9.58238 11.2723 9.34812 11.3858 9.07403C11.4994 8.79994 11.5291 8.49834 11.4712 8.20737C11.4133 7.91639 11.2704 7.64912 11.0607 7.43934C10.8509 7.22956 10.5836 7.0867 10.2926 7.02882C10.0017 6.97094 9.70006 7.00065 9.42597 7.11418C9.15189 7.22771 8.91762 7.41997 8.7528 7.66665C8.58797 7.91332 8.5 8.20333 8.5 8.5" stroke="#676D77" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        `
        }
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
