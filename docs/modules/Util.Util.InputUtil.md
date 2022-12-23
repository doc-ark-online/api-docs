[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / InputUtil

# Namespace: InputUtil

[Util](Util.md).[Util](Util.Util.md).InputUtil

## Table of contents

### Functions

- [enableCursorInteractWithUI](Util.Util.InputUtil.md#enablecursorinteractwithui)
- [enableCursorLock](Util.Util.InputUtil.md#enablecursorlock)
- [isCursorInteractiveWithUI](Util.Util.InputUtil.md#iscursorinteractivewithui)
- [isCursorLockEnabled](Util.Util.InputUtil.md#iscursorlockenabled)
- [isCursorLocked](Util.Util.InputUtil.md#iscursorlocked)
- [isCursorVisible](Util.Util.InputUtil.md#iscursorvisible)
- [onKeyDown](Util.Util.InputUtil.md#onkeydown)
- [onKeyPress](Util.Util.InputUtil.md#onkeypress)
- [onKeyUp](Util.Util.InputUtil.md#onkeyup)
- [setCursorLocked](Util.Util.InputUtil.md#setcursorlocked)
- [setCursorVisible](Util.Util.InputUtil.md#setcursorvisible)

## Functions

### enableCursorInteractWithUI

▸ **enableCursorInteractWithUI**(`canInteract`): `void`

**`Description`**

设置鼠标指针是否能与UI交互

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canInteract` | `boolean` | usage:可交互 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:110

___

### enableCursorLock

▸ **enableCursorLock**(`isEnableMouseLock`): `void`

**`Description`**

设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnableMouseLock` | `boolean` | usage:是否可切换 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:74

___

### isCursorInteractiveWithUI

▸ **isCursorInteractiveWithUI**(): `boolean`

**`Description`**

获取鼠标指针是否能与UI交互

**`Effect`**

客户端生效

#### Returns

`boolean`

是否能与UI交互

#### Defined in

Util/index.d.ts:116

___

### isCursorLockEnabled

▸ **isCursorLockEnabled**(): `boolean`

**`Description`**

获取是否允许通过快捷方式切换鼠标的使用组合模式

**`Effect`**

客户端生效

#### Returns

`boolean`

是否可切换

#### Defined in

Util/index.d.ts:80

___

### isCursorLocked

▸ **isCursorLocked**(): `boolean`

**`Description`**

获取鼠标指针是否锁定

**`Effect`**

客户端生效

#### Returns

`boolean`

是否锁定

#### Defined in

Util/index.d.ts:104

___

### isCursorVisible

▸ **isCursorVisible**(): `boolean`

**`Description`**

获取鼠标指针是否可见

**`Effect`**

客户端生效

#### Returns

`boolean`

是否可见

#### Defined in

Util/index.d.ts:92

___

### onKeyDown

▸ **onKeyDown**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-点击

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:43

___

### onKeyPress

▸ **onKeyPress**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-按压

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:65

___

### onKeyUp

▸ **onKeyUp**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-抬起

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:54

___

### setCursorLocked

▸ **setCursorLocked**(`isLock`): `void`

**`Description`**

设置鼠标指针是否锁定

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLock` | `boolean` | usage:是否锁定 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:98

___

### setCursorVisible

▸ **setCursorVisible**(`isVisible`): `void`

**`Description`**

设置鼠标指针是否可见

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isVisible` | `boolean` | usage:是否可见 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:86
