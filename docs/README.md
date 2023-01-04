步骤：

1. 首次 Typing 文件编码是 UTF16 LE 的，需要修改编码 -> npm run encoding （只需要第一次执行，因为后续编码格式就没问题了）
2. 文件有些格式不对需要用 prettier 进行修复 -> npm run typing:fix
3. 生成 out.json 文件: npm run doc
4. 将 out.json 文件分解成需要的文件: npm run menu [这里是一个可选参数，用于控制生成的文件夹的名字]
5. 将文件上传到 cdn: npm run cdn

组合命令:
yarn doc:all: 针对于首次执行，可以一步到位
yarn doc:first: 针对于首次执行，可以将 Typing 解析到位