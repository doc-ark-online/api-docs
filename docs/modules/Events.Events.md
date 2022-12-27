[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Events](Events.md) / Events

# Namespace: Events

[Events](Events.md).Events, hi

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
- [addOnPauseListener](Events.Events.md#addonpauselistener)
- [addOnResumeListener](Events.Events.md#addonresumelistener)
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

| Name        | Type                                                                                               | Description                                            |
| :---------- | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `eventName` | `string`                                                                                           | usage:事件名                                           |
| `listener`  | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md), ...`params`: `unknown`[]) => `void` | usage:监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:63

---

### addExitListener

▸ **addExitListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加退出游戏时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 233 悬浮球退出和 PIE 关闭窗口时生效。

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

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:221

---

### addFocusListener

▸ **addFocusListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加窗口聚焦时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 PIE 模式下生效。

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

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:151

---

### addLocalListener

▸ **addLocalListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听本地事件

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                 | Description    |
| :---------- | :----------------------------------- | :------------- |
| `eventName` | `string`                             | usage:事件名   |
| `listener`  | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:40

---

### addOnPauseListener

▸ **addOnPauseListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加 OnPause 开始时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 Android 和 IOS 生效。触发时机有切入后台、息屏和播广告。

**`Example`**

使用示例:调用方法

```
let listener = Events.addOnPauseListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:185

---

### addOnResumeListener

▸ **addOnResumeListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加 OnPause 结束时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 Android 和 IOS 生效。触发时机有切入后台、息屏和播广告后回到游戏。

**`Example`**

使用示例:调用方法

```
let listener = Events.addOnResumeListener(this.testFunction);
public testFunction(leaveDuration: number) {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name       | Type                                  | Description                                                 |
| :--------- | :------------------------------------ | :---------------------------------------------------------- |
| `callback` | (`leaveDuration`: `number`) => `void` | usage:需要触发的回调函数，leaveDuration 指 OnPause 持续时长 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:202

---

### addPlayerJoinedListener

▸ **addPlayerJoinedListener**(`listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听玩家进入 room 事件

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                                                     | Description    |
| :--------- | :----------------------------------------------------------------------- | :------------- |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:123

---

### addPlayerLeftListener

▸ **addPlayerLeftListener**(`listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

监听玩家离开 room 事件

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                                                     | Description    |
| :--------- | :----------------------------------------------------------------------- | :------------- |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Gameplay.Player.md)) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:132

---

### addServerListener

▸ **addServerListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

客户端监听服务器事件

**`Effect`**

只在客户端调用生效

**`Precautions`**

应在客户端逻辑里调用

#### Parameters

| Name        | Type                                 | Description                    |
| :---------- | :----------------------------------- | :----------------------------- |
| `eventName` | `string`                             | usage:事件名                   |
| `listener`  | (...`params`: `unknown`[]) => `void` | usage:监听回调 params 事件内容 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:87

---

### addUnfocusedListener

▸ **addUnfocusedListener**(`callback`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

添加窗口失焦时执行的回调函数

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在 PIE 模式下生效。

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

| Name       | Type         | Description              |
| :--------- | :----------- | :----------------------- |
| `callback` | () => `void` | usage:需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Events/index.d.ts:168

---

### dispatchLocal

▸ **dispatchLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

发送本地事件

**`Effect`**

调用端生效

#### Parameters

| Name        | Type        | Description    |
| :---------- | :---------- | :------------- |
| `eventName` | `string`    | usage:事件名   |
| `...params` | `unknown`[] | usage:事件内容 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回发送本地事件的结果

#### Defined in

Events/index.d.ts:51

---

### dispatchToAllClient

▸ **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

服务器发送事件给所有客户端

**`Effect`**

只在服务端调用生效

**`Precautions`**

应在服务器逻辑里调用

#### Parameters

| Name        | Type        | Description      |
| :---------- | :---------- | :--------------- |
| `eventName` | `string`    | usage:事件名     |
| `...params` | `unknown`[] | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:113

---

### dispatchToClient

▸ **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

服务器发送事件给指定客户端

**`Effect`**

只在服务端调用生效

**`Precautions`**

应在服务器逻辑里调用

#### Parameters

| Name        | Type                                               | Description      |
| :---------- | :------------------------------------------------- | :--------------- |
| `player`    | [`Player`](../classes/Gameplay.Gameplay.Player.md) | usage:客户端     |
| `eventName` | `string`                                           | usage:事件名     |
| `...params` | `unknown`[]                                        | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:100

---

### dispatchToServer

▸ **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

**`Description`**

客户端发送事件给服务器

**`Effect`**

只在客户端调用生效

**`Precautions`**

应在客户端逻辑里面调用

#### Parameters

| Name        | Type        | Description      |
| :---------- | :---------- | :--------------- |
| `eventName` | `string`    | usage:事件名     |
| `...params` | `unknown`[] | usage:可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.Events.DispatchEventResult.md)

返回事件发送结果

#### Defined in

Events/index.d.ts:75
