[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Events](Events.md) / Events

# Namespace: Events

[Events](Events.md).Events

## Table of contents

### Enumerations

- [DispatchEventResult](../enums/Events.Events.DispatchEventResult.md)

### Classes

- [EventListener](../classes/Events.Events.EventListener.md)

### Functions

- [addClientListener](Events.Events.md#addclientlistener)
- [addExitListener](Events.Events.md#addexitlistener)
- [addFocusListener](Events.Events.md#addfocuslistener)
- [addLocalListener](Events.Events.md#addlocallistener)
- [addOnPauseBeginListener](Events.Events.md#addonpausebeginlistener)
- [addOnPauseEndListener](Events.Events.md#addonpauseendlistener)
- [addPlayerJoinedListener](Events.Events.md#addplayerjoinedlistener)
- [addPlayerLeftListener](Events.Events.md#addplayerleftlistener)
- [addServerListener](Events.Events.md#addserverlistener)
- [addUnfocusedListener](Events.Events.md#addunfocusedlistener)
- [dispatchLocal](Events.Events.md#dispatchlocal)
- [dispatchToAllClient](Events.Events.md#dispatchtoallclient)
- [dispatchToClient](Events.Events.md#dispatchtoclient)
- [dispatchToServer](Events.Events.md#dispatchtoserver)

## Functions

### addClientListener

▸ **addClientListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

服务器监听客户端发来的事件

**`Effect`**

只在服务端调用生效

**`Precautions`**

应该在服务器端的逻辑里面使用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md), ...`params`: `unknown`[]) => `void` | usage:监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:63

___

### addExitListener

▸ **addExitListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加退出游戏时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在233悬浮球退出和PIE关闭窗口时生效。

**`Example`**

使用示例:调用方法
```
let listener = Events.addExitListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:221

___

### addFocusListener

▸ **addFocusListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加窗口聚焦时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在PIE模式下生效。

**`Example`**

使用示例:调用方法
```
let listener = Events.addFocusListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:151

___

### addLocalListener

▸ **addLocalListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听本地事件

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:40

___

### addOnPauseBeginListener

▸ **addOnPauseBeginListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加OnPause开始时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在Android和IOS生效。触发时机有切入后台、息屏和播广告。

**`Example`**

使用示例:调用方法
```
let listener = Events.addOnPauseBeginListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:185

___

### addOnPauseEndListener

▸ **addOnPauseEndListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加OnPause结束时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在Android和IOS生效。触发时机有切入后台、息屏和播广告后回到游戏。

**`Example`**

使用示例:调用方法
```
let listener = Events.addOnPauseEndListener(this.testFunction);
public testFunction(lastTime: number) {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`lastTime`: `any`) => `void` | usage:需要触发的回调函数，lastTime指OnPause持续时长 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:202

___

### addPlayerJoinedListener

▸ **addPlayerJoinedListener**(`listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听玩家进入room事件

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:123

___

### addPlayerLeftListener

▸ **addPlayerLeftListener**(`listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听玩家离开room事件

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:132

___

### addServerListener

▸ **addServerListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

客户端监听服务器事件

**`Effect`**

只在客户端调用生效

**`Precautions`**

应在客户端逻辑里调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 params 事件内容 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:87

___

### addUnfocusedListener

▸ **addUnfocusedListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加窗口失焦时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在PIE模式下生效。

**`Example`**

使用示例:调用方法
```
let listener = Events.addUnfocusedListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:168

___

### dispatchLocal

▸ **dispatchLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

发送本地事件

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `...params` | `unknown`[] | usage:事件内容 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回发送本地事件的结果

#### Defined in

Events/index.d.ts:51

___

### dispatchToAllClient

▸ **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

服务器发送事件给所有客户端

**`Effect`**

只在服务端调用生效

**`Precautions`**

应在服务器逻辑里调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `...params` | `unknown`[] | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:113

___

### dispatchToClient

▸ **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

服务器发送事件给指定客户端

**`Effect`**

只在服务端调用生效

**`Precautions`**

应在服务器逻辑里调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | usage:客户端 |
| `eventName` | `string` | usage:事件名 |
| `...params` | `unknown`[] | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:100

___

### dispatchToServer

▸ **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

客户端发送事件给服务器

**`Effect`**

只在客户端调用生效

**`Precautions`**

应在客户端逻辑里面调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | usage:事件名 |
| `...params` | `unknown`[] | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:75
