[Service](../modules/Service.Service.md) / MessageChannelService

# MessageChannelService <Badge type="tip" text="Class" /> 

**`Instance`**

**`Description`**

支持各端的通信，233、MW引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码

::: warning Precautions

单例类，请使用getInstance获取对象。TS端想要收到某消息并执行回调函数需要提前
             调用registerAction进行绑定。消息需要是Json格式的字符串并包含“action”字段
             否则无法被通道转发。在PIE下无法连接到233、Web端。
             如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。

:::

**`Example`**

使用示例:通道的注册、发送的使用示例
```ts
// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调
Service.MessageChannelService.getInstance().registerAction("ts.test.myaction", this, OnCall);
// 发送message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"到通道上，所有注册了该消息中action的端才可以收到该消息
Service.MessageChannelService.getInstance().send("{\"action\":\"ts.test.myaction\",\"data\":{}}");
// 指定一个目标端toWhom发送消息message，对方无需提前注册就可以收到该消息
Service.MessageChannelService.getInstance().sendTo(toWhom, message);
```

## Table of contents

| Methods |
| :-----|
| **[registerAction](Service.MessageChannelService.md#registeraction)**(`string`, `any`, (`data`: `string`) => `void`): `void` <br> 注册需要收到消息的action以及对应要调用的回调函数|
| **[send](Service.MessageChannelService.md#send)**(`string`): `void` <br> 发送消息到通道上|
| **[sendTo](Service.MessageChannelService.md#sendto)**([`MessageChannelReceiver`](../enums/Service.MessageChannelReceiver.md), `string`): `void` <br> 发送消息给指定对象|
| **[getInstance](Service.MessageChannelService.md#getinstance)**(): [`MessageChannelService`](Service.MessageChannelService.md) <br> 获取API实例进行调用|

## Methods

### registerAction  

▸ **registerAction**(`action`, `caller`, `onCall`): `void`

**`Description`**

注册需要收到消息的action以及对应要调用的回调函数

通道会识别包含该action的消息并调用对应的回调函数

::: warning Precautions

未被注册的消息不会被TS层接收，哪怕对方指定目标是TS也不会调用回调函数（未注册）
             注册action需要在收到消息之前，请保证注册时机足够早

:::

**`Example`**

使用示例:通道注册action
```ts
// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调
Service.MessageChannelService.getInstance().registerAction("ts.test.myaction", this, OnCall); <Badge type="tip" text="other" />
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `string` | 需要被注册的action，通道收到该action的消息会调用对应回调 |
| `caller` | `any` | 调用者，一般传this |
| `onCall` | (`data`: `string`) => `void` | 通道收到消息后应该执行的对应的回调函数 |


___

### send  

▸ **send**(`message`): `void`

**`Description`**

发送消息到通道上

将消息发送到通道，所有注册了该消息action的端才能收到该消息

::: warning Precautions

如果通道上没有端注册了该消息的action则这条消息不会发送给任何对象
             如果通道上有多个端注册了该消息的action则所有注册者都能收到该消息
             发送消息的时机要晚于对方注册的时机
             消息需要是Json格式的字符串，包含"action"字段

:::

**`Example`**

使用示例:通道广播消息
```ts
// 发送message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"到通道上，所有注册了该消息中action的端才可以收到该消息
Service.MessageChannelService.getInstance().send("{\"action\":\"ts.test.myaction\",\"data\":{}}"); <Badge type="tip" text="other" />
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | 需要发送的消息 |


___

### sendTo  

▸ **sendTo**(`toWhom`, `message`): `void`

**`Description`**

发送消息给指定对象

将消息发送给指定对象，对方无需提前注册

::: warning Precautions

如果通道上有多个端注册了该消息，仍只会发给指定的对象
             消息需要是Json格式的字符串，包含"action"字段

:::

**`Example`**

使用示例:通道私发消息
```ts
// 指定一个目标端toWhom:Client发送消息message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"，对方无需提前注册就可以收到该消息
Service.MessageChannelService.getInstance().sendTo(Service.MessageChannelReceiver.Client, "{\"action\":\"ts.test.myaction\",\"data\":{}}"); <Badge type="tip" text="other" />
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toWhom` | [`MessageChannelReceiver`](../enums/Service.MessageChannelReceiver.md) | 指定的对象，使用枚举值MessageChannelReceiver |
| `message` | `string` | 需要发送的消息 |


___

### getInstance  

▸ `Static` **getInstance**(): [`MessageChannelService`](Service.MessageChannelService.md)

**`Description`**

获取API实例进行调用

获取API实例进行调用

::: warning Precautions

无

:::

**`Example`**

使用示例:通道发送消息
```ts
// 通过实例调用函数发送消息
Service.MessageChannelService.getInstance().send(message); <Badge type="tip" text="other" />
```

#### Returns

[`MessageChannelService`](Service.MessageChannelService.md)

返回API实例用以调用相关功能函数
