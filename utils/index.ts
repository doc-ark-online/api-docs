import { DefaultTheme } from 'doc-theme-323'
import { readFileSync } from 'fs'

interface GroupsConfigV2 {
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

function configToSidebarGroup(configs: GroupsConfigV2) {
  const arr: DefaultTheme.SidebarGroup[] = []
  Object.entries(configs).forEach(([key, value]) => {
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
