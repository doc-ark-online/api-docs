- 删除（也可以删除前三级）：[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) /[Service](../modules/Service.Service.md) / MessageChannelService

- 一级标题自动生成 badge（非高优），用来区分不同类型：<Badge type="tip" text="^Class" />

- 删除 Author：**`Author`** zifei.wu

- 删除 Instance：**`Instance`**

- 删除 Description：**`Description`**

- 删除 Network Status 下的 usage：

- precautions 转化为 block（非高优）：

::: warning Precautions
单例类，请使用 getInstance 获取对象。TS 端想要收到某消息并执行回调函数需要提前调用 registerAction 进行绑定。消息需要是 Json 格式的字符串并包含“action”字段否则无法被通道转发。在 PIE 下无法连接到 233、Web 端。如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。
:::

- 代码全部加 ts 用以识别

- table 下的三级标题转为四级，收缩一下空间，同时 constructor 后加构造函数、其他后加 description；

- 删除：## Constructors

- 删除定义：#### Defined inService/index.d.ts:330

- 删除： 无&上面的@XXX
