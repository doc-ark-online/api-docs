[SCRIPTING](../groups/Core.SCRIPTING.md) / Event

# Event <Badge type="tip" text="Class" /> <Score text="Event" />

<span class="content-big">

事件

</span>

<span class="content-big">

MW编辑器支持多种类型的事件。

</span>

<span class="content-big">

在实现逻辑时，您可以将函数连接到编辑器触发的内置事件以响应它们。还可以创建触发并响应自定义事件。此外，您可以使用网络事件来允许跨客户端-服务器边界进行事件驱动的通信。

</span>

<span class="content-big">

许多对象都具有由其 API 提供的内置事件，这些事件会自动响应与这些对象相关的特定操作或更改。例如： HotWeapon 中装备上武器会触发 onEquip 事件。

</span>

<span class="content-big">

Event 类提供了本地、客户端和服务器之间通信的事件。

</span>

<span class="content-big">

本地、客户端和服务器之间是如何通信的呢 ？

</span>

<span class="content-big">

- 本地 ：指当前主机。

</span>

<span class="content-big">

- 服务器 ：MW编辑器多人游戏基于客户端-服务器模式。也就是说，会有一个服务器担当游戏状态的主控者，而连接的客户端将保持近似复本。服务器可以看作傀儡师，客户端则为傀儡师控制的牵线木偶们。

</span>

<span class="content-big">

- 客户端 ：连接到服务器的一个或多个“木偶”。

</span>

<span class="content-big">

本地、客户端和服务器之间通信时如同打开开关，屋子里的灯就会亮。当我在某地执行事件（打开开关），添加完的事件就会触发（安装好的灯泡就会亮）。

</span>

## Table of contents

### Methods <Score text="Methods" /> 
| **[addClientListener](mw.Event.md#addclientlistener)**(`eventName`: `string`, `listener`: (`player`: [`Player`](mw.Player.md), ...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md)  |
| :-----|
| 服务器监听客户端发来的事件|
| **[addLocalListener](mw.Event.md#addlocallistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md)  |
| 添加本地事件。|
| **[addServerListener](mw.Event.md#addserverlistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md)  |
| 客户端监听服务器事件|
| **[dispatchToAllClient](mw.Event.md#dispatchtoallclient)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md)  |
| 服务器发送事件给所有客户端|
| **[dispatchToClient](mw.Event.md#dispatchtoclient)**(`player`: [`Player`](mw.Player.md), `eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md)  |
| 服务器发送事件给指定客户端|
| **[dispatchToLocal](mw.Event.md#dispatchtolocal)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md)  |
| 执行已添加的本地事件。|
| **[dispatchToServer](mw.Event.md#dispatchtoserver)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md)  |
| 客户端发送事件给服务器|
| **[removeListener](mw.Event.md#removelistener)**(`event`: [`EventListener`](mw.EventListener.md)): `void`  |
| 移除事件监听器|

## Methods

### addClientListener <Score text="addClientListener" /> 

• `Static` **addClientListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="server" />

服务器监听客户端发来的事件

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `listener` (`player`: [`Player`](mw.Player.md), ...`params`: `unknown`[]) => `void` | 监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


::: warning Precautions

应该在服务器端的逻辑里面使用

:::

<span style="font-size: 14px;">

使用示例:创建一个名为"EventSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在客户端中看到每帧打印ok,代码如下:

</span>

```ts
 @Component
 export default class InteractorSample extends Script {
     protected async onStart(): Promise<void> {
         this.useUpdate = true;
         // 客户端向服务器发送 eventOne 事件
         // 客户端发送 eventOne 事件可以看作灯的开关
         if(SystemUtil.isClient()){
             Event.dispatchToServer("eventOne");
         }
         // 在服务器执行客户端发来的 eventOne 事件,并在服务器执行传入的函数逻辑
         // 服务器执行 eventOne 事件，传入的函数开始执行可以看作灯泡亮了
         if (SystemUtil.isServer()){
             Event.addClientListener("eventOne" ,()=>{console.log("ok")});
         }
     }
 }
```

___

### addLocalListener <Score text="addLocalListener" /> 

• `Static` **addLocalListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) 

添加本地事件。

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `listener` (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


___

### addServerListener <Score text="addServerListener" /> 

• `Static` **addServerListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

客户端监听服务器事件

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `listener` (...`params`: `unknown`[]) => `void` | 监听回调 params 事件内容 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


::: warning Precautions

应在客户端逻辑里调用

:::

<span style="font-size: 14px;">

使用示例:创建一个名为"EventSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在客户端中看到每帧打印ok,代码如下:

</span>

```ts
@Component
 export default class InteractorSample extends Script {
     protected async onStart(): Promise<void> {
         this.useUpdate = true;
         // 在客户端执行服务器发来的 eventOne 事件,并在客户端执行传入的函数逻辑
         // 客户端执行 eventOne 事件，传入的函数开始执行可以看作灯泡亮了
         if(SystemUtil.isClient()){
             Event.addServerListener("eventOne",()=>{console.log("ok")});
         }
     }
     protected onUpdate(dt: number): void {
         // 服务器每帧对所有客户端发送 eventOne 事件
         // 服务端发送 eventOne 事件可以看作灯的开关，每帧打开一次灯泡的开关
         if (SystemUtil.isServer()){
             Event.dispatchToAllClient("eventOne");
         }
     }
 }
```

___

### dispatchToAllClient <Score text="dispatchToAllClient" /> 

• `Static` **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="server" />

服务器发送事件给所有客户端

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `...params` `unknown`[] | 可变长参数 |

#### Returns

| [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) | 返回事件发送结果 |
| :------ | :------ |


::: warning Precautions

应在服务器逻辑里调用

:::

<span style="font-size: 14px;">

使用示例:创建一个名为"EventSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在客户端中看到每帧打印ok,代码如下:

</span>

```ts
@Component
 export default class InteractorSample extends Script {
     protected async onStart(): Promise<void> {
         this.useUpdate = true;
         // 在客户端执行服务器发来的 eventOne 事件,并在客户端执行传入的函数逻辑
         // 客户端执行 eventOne 事件，传入的函数开始执行可以看作灯泡亮了
         if(SystemUtil.isClient()){
             Event.addServerListener("eventOne",()=>{console.log("ok")});
         }
     }
     protected onUpdate(dt: number): void {
         // 服务器每帧对所有客户端发送 eventOne 事件
         // 服务端发送 eventOne 事件可以看作灯的开关，每帧打开一次灯泡的开关
         if (SystemUtil.isServer()){
             Event.dispatchToAllClient("eventOne");
         }
     }
 }
```

___

### dispatchToClient <Score text="dispatchToClient" /> 

• `Static` **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="server" />

服务器发送事件给指定客户端

#### Parameters

| `player` [`Player`](mw.Player.md) | 客户端 |
| :------ | :------ |
| `eventName` `string` | 事件名 |
| `...params` `unknown`[] | 可变长参数 |

#### Returns

| [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) | 返回事件发送结果 |
| :------ | :------ |


::: warning Precautions

应在服务器逻辑里调用

:::

___

### dispatchToLocal <Score text="dispatchToLocal" /> 

• `Static` **dispatchToLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) 

执行已添加的本地事件。

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `...params` `unknown`[] | 事件内容 |

#### Returns

| [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) | 返回发送本地事件的结果 |
| :------ | :------ |


___

### dispatchToServer <Score text="dispatchToServer" /> 

• `Static` **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="client" />

客户端发送事件给服务器

#### Parameters

| `eventName` `string` | 事件名 |
| :------ | :------ |
| `...params` `unknown`[] | 可变长参数 |

#### Returns

| [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) | 返回事件发送结果 |
| :------ | :------ |


::: warning Precautions

应在客户端逻辑里面调用

:::

<span style="font-size: 14px;">

使用示例:创建一个名为"EventSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在客户端中看到每帧打印ok,代码如下:

</span>

```ts
 @Component
 export default class InteractorSample extends Script {
     protected async onStart(): Promise<void> {
         this.useUpdate = true;
         // 客户端向服务器发送 eventOne 事件
         // 客户端发送 eventOne 事件可以看作灯的开关
         if(SystemUtil.isClient()){
             Event.dispatchToServer("eventOne");
         }
         // 在服务器执行客户端发来的 eventOne 事件,并在服务器执行传入的函数逻辑
         // 服务器执行 eventOne 事件，传入的函数开始执行可以看作灯泡亮了
         if (SystemUtil.isServer()){
             Event.addClientListener("eventOne" ,()=>{console.log("ok")});
         }
     }
 }
```

___

### removeListener <Score text="removeListener" /> 

• `Static` **removeListener**(`event`): `void` 

移除事件监听器

#### Parameters

| `event` [`EventListener`](mw.EventListener.md) | 监听器 |
| :------ | :------ |


