# Events <Badge type="tip" text="Namespace" />

## Table of contents

| Enumerations |
| :-----|
| [DispatchEventResult](../enums/Events.DispatchEventResult.md) <br> 事件发送的结果|

| Classes |
| :-----|
| [EventListener](../classes/Events.EventListener.md) <br> 事件监听器|

| Functions |
| :-----|
| **[addClientListener](Events.Events.md#addclientlistener)**(`string`, (`player`: [`Player`](../classes/Gameplay.Player.md), ...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 服务器监听客户端发来的事件|
| **[addExitListener](Events.Events.md#addexitlistener)**(() => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加退出游戏时执行的回调函数|
| **[addFocusListener](Events.Events.md#addfocuslistener)**(() => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加窗口聚焦时执行的回调函数|
| **[addLocalListener](Events.Events.md#addlocallistener)**(`string`, (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听本地事件|
| **[addOnPauseListener](Events.Events.md#addonpauselistener)**(() => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加OnPause开始时执行的回调函数|
| **[addOnResumeListener](Events.Events.md#addonresumelistener)**((`leaveDuration`: `number`) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加OnPause结束时执行的回调函数|
| **[addPlayerJoinedListener](Events.Events.md#addplayerjoinedlistener)**((`player`: [`Player`](../classes/Gameplay.Player.md)) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听玩家进入room事件|
| **[addPlayerLeftListener](Events.Events.md#addplayerleftlistener)**((`player`: [`Player`](../classes/Gameplay.Player.md)) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听玩家离开room事件|
| **[addServerListener](Events.Events.md#addserverlistener)**(`string`, (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 客户端监听服务器事件|
| **[addUnfocusedListener](Events.Events.md#addunfocusedlistener)**(() => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加窗口失焦时执行的回调函数|
| **[dispatchLocal](Events.Events.md#dispatchlocal)**(`string`, `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 发送本地事件|
| **[dispatchToAllClient](Events.Events.md#dispatchtoallclient)**(`string`, `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 服务器发送事件给所有客户端|
| **[dispatchToClient](Events.Events.md#dispatchtoclient)**([`Player`](../classes/Gameplay.Player.md), `string`, `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 服务器发送事件给指定客户端|
| **[dispatchToServer](Events.Events.md#dispatchtoserver)**(`string`, `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 客户端发送事件给服务器|

## Functions

### addClientListener <Score text="addClientListener" /> 

▸ **addClientListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

服务器监听客户端发来的事件


::: warning Precautions

应该在服务器端的逻辑里面使用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md), ...`params`: `unknown`[]) => `void` | 监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addExitListener <Score text="addExitListener" /> 

▸ **addExitListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

添加退出游戏时执行的回调函数


::: warning Precautions

只在233悬浮球退出和PIE关闭窗口时生效。

:::

使用示例:调用方法
```ts
let listener = Events.addExitListener(this.testFunction); 
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addFocusListener <Score text="addFocusListener" /> 

▸ **addFocusListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

添加窗口聚焦时执行的回调函数


::: warning Precautions

只在PIE模式下生效。

:::

使用示例:调用方法
```ts
let listener = Events.addFocusListener(this.testFunction); 
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addLocalListener <Score text="addLocalListener" /> 

▸ **addLocalListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

监听本地事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addOnPauseListener <Score text="addOnPauseListener" /> 

▸ **addOnPauseListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

添加OnPause开始时执行的回调函数


::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

使用示例:调用方法
```ts
let listener = Events.addOnPauseListener(this.testFunction); 
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addOnResumeListener <Score text="addOnResumeListener" /> 

▸ **addOnResumeListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

添加OnPause结束时执行的回调函数


::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告后回到游戏。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

使用示例:调用方法
```ts
let listener = Events.addOnResumeListener(this.testFunction); 
public testFunction(leaveDuration: number) {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`leaveDuration`: `number`) => `void` | 需要触发的回调函数，leaveDuration指OnPause持续时长 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addPlayerJoinedListener <Score text="addPlayerJoinedListener" /> 

▸ **addPlayerJoinedListener**(`listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

监听玩家进入room事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addPlayerLeftListener <Score text="addPlayerLeftListener" /> 

▸ **addPlayerLeftListener**(`listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

监听玩家离开room事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addServerListener <Score text="addServerListener" /> 

▸ **addServerListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

客户端监听服务器事件


::: warning Precautions

应在客户端逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 params 事件内容 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### addUnfocusedListener <Score text="addUnfocusedListener" /> 

▸ **addUnfocusedListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md)  <Badge type="tip" text="other" />

添加窗口失焦时执行的回调函数


::: warning Precautions

只在PIE模式下生效。

:::

使用示例:调用方法
```ts
let listener = Events.addUnfocusedListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### dispatchLocal <Score text="dispatchLocal" /> 

▸ **dispatchLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="other" />

发送本地事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 事件内容 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回发送本地事件的结果

___

### dispatchToAllClient <Score text="dispatchToAllClient" /> 

▸ **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="other" />

服务器发送事件给所有客户端


::: warning Precautions

应在服务器逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回事件发送结果

___

### dispatchToClient <Score text="dispatchToClient" /> 

▸ **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="other" />

服务器发送事件给指定客户端


::: warning Precautions

应在服务器逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 客户端 |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回事件发送结果

___

### dispatchToServer <Score text="dispatchToServer" /> 

▸ **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="other" />

客户端发送事件给服务器


::: warning Precautions

应在客户端逻辑里面调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回事件发送结果
