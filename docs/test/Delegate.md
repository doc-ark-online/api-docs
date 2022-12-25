- 删除（也可以删除前三级）：[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) /[Service](../modules/Service.Service.md) / MessageChannelService

- 一级标题自动生成badge（非高优），用来区分不同类型：<Badge type="tip" text="^Class" />

- 删除Author：**`Author`**  zifei.wu

- 删除Instance：**`Instance`**

- 删除Description：**`Description`**

- 删除Network Status下的usage：

- precautions转化为block（非高优）：

::: warning Precautions
单例类，请使用getInstance获取对象。TS端想要收到某消息并执行回调函数需要提前调用registerAction进行绑定。消息需要是Json格式的字符串并包含“action”字段否则无法被通道转发。在PIE下无法连接到233、Web端。如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。
:::

- 代码全部加ts用以识别

- table下的三级标题转为四级，收缩一下空间，同时constructor后加构造函数、其他后加description；

- 删除：## Constructors

- 删除定义：#### Defined inService/index.d.ts:330

- 删除： 无&上面的@XXX
