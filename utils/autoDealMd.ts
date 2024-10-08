import { DefaultTheme } from 'doc-theme-323'
import { readFileSync } from "fs";

/**
 * 版本配置信息
 */
export interface VersionConfig {
  /** 版本号，缩写。后面显示的时候会拼接一些内容 */
  text: string,
  /** 版本跳转链接 */
  link: string,
  /** 是否为测试版本。测试版本会显示Beta的字样 */
  isBetaVersion?: boolean,
  /** ToDo：不知道啥作用 */
  path?: boolean,
}

/**
 * 目录分组配置信息
 */
export interface GroupsConfigV2 {
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

/**
 * 从json中解析版本信息
 * @returns 版本数组，0为当前版本
 */
export function parseVersionConfig(): VersionConfig[] {
  return JSON.parse(
    readFileSync('./docs/configs/version.json', { encoding: 'utf-8' })
  ) as VersionConfig[]
}

/** 根据配置文件生成对应的侧边栏 - 多级目录版本 */
export function dealConfigSidebarV2() {
  const json = JSON.parse(
    readFileSync('./docs/configs/groups.json', { encoding: 'utf-8' })
  ) as GroupsConfigV2
  return configToSidebarGroup(json)
}

/** 根据config生成侧边栏目录，按照字母递增排序 */
export function configToSidebarGroup(configs: GroupsConfigV2) {
  const arr: DefaultTheme.SidebarGroup[] = []
  Object.entries(configs).sort((a, b): number => {
    return a[0].localeCompare(b[0]);
  }).forEach(([key, value]) => {
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

/** 获取用于显示的版本信息 */
export function getDisplayVersionText(version: string, isBetaVersion: boolean): string {
  if (isBetaVersion) {
    return `${version}(Beta)`;
  } else {
    return `${version}`
  }
}
