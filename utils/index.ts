import { readdirSync, readJSONSync } from 'fs-extra'
import * as path from 'path'
import { DefaultTheme } from 'vitepress'

/**根据文件夹生成对应的子类 */
export function dealItem(dir: string) {
  const p = `./docs/${dir}`
  const paths = readdirSync(p)
  return paths.map((name) => {
    return { text: getMdNameInfo(name).name, link: `/groups/${name}` }
  })
}

interface GroupsItem {
  file_name: string
  file_path: string
  name: string
}
interface GroupsConfig {
  [key: string]: {
    [key: string]: GroupsItem[]
  }
}

/** 根据配置文件生成对应的侧边栏 */
export function dealConfigSidebar() {
  const json = readJSONSync(`./docs/configs/groups.json`) as GroupsConfig
  const arr: DefaultTheme.SidebarGroup[] = []
  let num = 0
  for (const typeObj in json) {
    const items: DefaultTheme.SidebarItem[] = []
    for (const key in json[typeObj]) {
      if (
        ['Modules Functions', 'Modules Type Aliases', 'Enums'].includes(key)
      ) {
        continue
      }
      const item = json[typeObj][key]
      items.push(
        ...item.map((item) => {
          num += 1
          return {
            text: item.name,
            link: '/' + item.file_path
          }
        })
      )
    }
    if (items.length > 0) {
      arr.push({
        text: typeObj,
        collapsible: true,
        collapsed: true,
        items: items
      })
    }
  }
  console.log('数量', num)
  arr.forEach((item) => {
    item.items.sort((a, b) => a.text.localeCompare(b.text))
  })
  arr.sort((a, b) => (a.text ?? '').localeCompare(b.text ?? ''))
  return arr
}

/** 将目录从类型分类改为根据命名空间分类 */
export function typeToNamespace(paths: string[]) {
  const targetObjArr = paths
    .map((p) => {
      const dirs = readdirSync(path.join(process.cwd(), `./docs/${p}`))
      return dirs.map((name) => {
        const info = getMdNameInfo(name)
        return {
          ...info,
          fullName: name,
          link: `/${p}/${name}`
        }
      })
    })
    .flat(2)
  let namespaceType: Record<string, typeof targetObjArr | undefined> = {}
  targetObjArr.forEach((obj) => {
    if (namespaceType[obj.namespace]) {
      namespaceType[obj.namespace]!.push(obj)
    } else {
      namespaceType[obj.namespace] = [obj]
    }
  })
  let sidebar: DefaultTheme.SidebarGroup[] = []
  Object.keys(namespaceType).forEach((key) => {
    const value = namespaceType[key]
    if (value)
      sidebar.push({
        text: key,
        collapsible: true,
        collapsed: true,
        items: value.map((s) => {
          return {
            text: s.name,
            link: s.link
          }
        })
      })
  })
  sidebar = sidebar.filter((item) => item.text !== 'Util')
  return sidebar
}
/**
 * 根据 md 名字包含的信息变成一下格式
 * Core.Core.Base.md
 * ```ts
 * {
 *    name: 'Base',
 *    namespace: 'Core',
 * }
 * ```
 */
function getMdNameInfo(mdName: string) {
  const infos = mdName.split('.')
  return {
    name: infos.at(-2)!,
    namespace: infos.at(0)!
  }
}
