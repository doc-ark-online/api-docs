typing-md / [Exports](modules.md)

# 注意

1. 本地 server/utils/index 的 cacheDir 的路径是根据系统类型判断的。在苹果电脑上缓存路径可能是 /usr/local/docker-web/zip
2. 单独添加了 eslint-plugin-vue@8 的依赖，因为 @nuxtjs/eslint-plugin-typescript 的依赖有问题，使用 pnpm 安装好使