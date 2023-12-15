typing-md / [Exports](modules.md)

# 注意

1. 本地 server/utils/index 的 cacheDir 的路径是根据系统类型判断的。在苹果电脑上缓存路径可能是 /usr/local/docker-web/zip
2. 单独添加了 eslint-plugin-vue@8 的依赖，因为 @nuxtjs/eslint-plugin-typescript 的依赖有问题，使用 pnpm 安装好使

# 新版本处理

1. 上传 Typing 压缩包
2. 删除 zip1
3. 通过 node 命令处理 zip 包
4. 通过下面的命令拿到 new_docs.zip

curl -F "zip_file=@docs.zip" http://spidergamecheck.233leyuan.com:6002/common/api_convert -v --output new_docs.zip
