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
  appearance: false,
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
    // algolia: {
    //   appId: 'I2PHYUBLCN',
    //   apiKey: '62ee775311415d26549e0e30fef5aa38',
    //   indexName: 'api-docs_prodigytech'
    // },
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
        text: '021 版本',
        items: [{ text: '020 预发', link: 'https://api-docs.ark.online/' }]
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
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
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
