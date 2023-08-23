[SCRIPTING](../groups/Core.SCRIPTING.md) / Event

# Event <Badge type="tip" text="Class" /> <Score text="Event" />

事件

## Table of contents

| Methods |
| :-----|
| **[addClientListener](mw.Event.md#addclientlistener)**(`eventName`: `string`, `listener`: (`player`: [`Player`](mw.Player.md), ...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md) <br> 服务器监听客户端发来的事件|
| **[addLocalListener](mw.Event.md#addlocallistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md) <br> 添加本地事件的监听，添加成功可以使用dispatchEventToxxx方法执行添加的事件。|
| **[addServerListener](mw.Event.md#addserverlistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](mw.EventListener.md) <br> 客户端监听服务器事件|
| **[dispatchToAllClient](mw.Event.md#dispatchtoallclient)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <br> 服务器发送事件给所有客户端|
| **[dispatchToClient](mw.Event.md#dispatchtoclient)**(`player`: [`Player`](mw.Player.md), `eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <br> 服务器发送事件给指定客户端|
| **[dispatchToLocal](mw.Event.md#dispatchtolocal)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <br> 执行已添加的本地事件，通常与addxxxListener成对出现。|
| **[dispatchToServer](mw.Event.md#dispatchtoserver)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <br> 客户端发送事件给服务器|
| **[removeListener](mw.Event.md#removelistener)**(`event`: [`EventListener`](mw.EventListener.md)): `void` <br> 移除事件监听器|

## Methods

### addClientListener <Score text="addClientListener" /> 

• `Static` **addClientListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="server" />

服务器监听客户端发来的事件


::: warning Precautions

应该在服务器端的逻辑里面使用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (`player`: [`Player`](mw.Player.md), ...`params`: `unknown`[]) => `void` | 监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### addLocalListener <Score text="addLocalListener" /> 

• `Static` **addLocalListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) 

添加本地事件的监听，添加成功可以使用dispatchEventToxxx方法执行添加的事件。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### addServerListener <Score text="addServerListener" /> 

• `Static` **addServerListener**(`eventName`, `listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

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

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### dispatchToAllClient <Score text="dispatchToAllClient" /> 

• `Static` **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="server" />

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

[`DispatchEventResult`](../enums/mw.DispatchEventResult.md)

返回事件发送结果

___

### dispatchToClient <Score text="dispatchToClient" /> 

• `Static` **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="server" />

服务器发送事件给指定客户端


::: warning Precautions

应在服务器逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](mw.Player.md) | 客户端 |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/mw.DispatchEventResult.md)

返回事件发送结果

___

### dispatchToLocal <Score text="dispatchToLocal" /> 

• `Static` **dispatchToLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) 

执行已添加的本地事件，通常与addxxxListener成对出现。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 事件内容 |

#### Returns

[`DispatchEventResult`](../enums/mw.DispatchEventResult.md)

返回发送本地事件的结果

___

### dispatchToServer <Score text="dispatchToServer" /> 

• `Static` **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/mw.DispatchEventResult.md) <Badge type="tip" text="client" />

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

[`DispatchEventResult`](../enums/mw.DispatchEventResult.md)

返回事件发送结果

___

### removeListener <Score text="removeListener" /> 

• `Static` **removeListener**(`event`): `void` 

移除事件监听器


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventListener`](mw.EventListener.md) | 监听器 |

