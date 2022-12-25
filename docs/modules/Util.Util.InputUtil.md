[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / InputUtil

# Namespace: InputUtil

[Util](Util.md).[Util](Util.Util.md).InputUtil

## Table of contents

### Functions

- [convertScreenLocationToWorldSpace](Util.Util.InputUtil.md#convertscreenlocationtoworldspace)
- [enableCursorInteractWithUI](Util.Util.InputUtil.md#enablecursorinteractwithui)
- [enableCursorLock](Util.Util.InputUtil.md#enablecursorlock)
- [isCursorInteractiveWithUI](Util.Util.InputUtil.md#iscursorinteractivewithui)
- [isCursorLockEnabled](Util.Util.InputUtil.md#iscursorlockenabled)
- [isCursorLocked](Util.Util.InputUtil.md#iscursorlocked)
- [isCursorVisible](Util.Util.InputUtil.md#iscursorvisible)
- [onKeyDown](Util.Util.InputUtil.md#onkeydown)
- [onKeyPress](Util.Util.InputUtil.md#onkeypress)
- [onKeyUp](Util.Util.InputUtil.md#onkeyup)
- [projectWorldLocationToWidgetPosition](Util.Util.InputUtil.md#projectworldlocationtowidgetposition)
- [setCursorLocked](Util.Util.InputUtil.md#setcursorlocked)
- [setCursorVisible](Util.Util.InputUtil.md#setcursorvisible)

## Functions

### convertScreenLocationToWorldSpace

▸ **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](../classes/Type.Type.ConvertScreenResult.md)

**`Description`**

将二维屏幕位置转换为世界空间三维位置和方向

**`Effect`**

调用端生效

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `screenX` | `number` | usage: 屏幕 X 轴坐标值 default: |
| `screenY` | `number` | usage: 屏幕 Y 轴坐标值          |

#### Returns

[`ConvertScreenResult`](../classes/Type.Type.ConvertScreenResult.md)

屏幕坐标转换结果

#### Defined in

Util/index.d.ts:124

---

### enableCursorInteractWithUI

▸ **enableCursorInteractWithUI**(`canInteract`): `void`

**`Description`**

设置鼠标指针是否能与 UI 交互

**`Effect`**

客户端生效

#### Parameters

| Name          | Type      | Description  |
| :------------ | :-------- | :----------- |
| `canInteract` | `boolean` | usage:可交互 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:110

---

### enableCursorLock

▸ **enableCursorLock**(`isEnableMouseLock`): `void`

**`Description`**

设置是开启光标锁功能，开启后可以按 shift 键切换光标是否显示。

**`Effect`**

客户端生效

#### Parameters

| Name                | Type      | Description      |
| :------------------ | :-------- | :--------------- |
| `isEnableMouseLock` | `boolean` | usage:是否可切换 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:74

---

### isCursorInteractiveWithUI

▸ **isCursorInteractiveWithUI**(): `boolean`

**`Description`**

获取鼠标指针是否能与 UI 交互

**`Effect`**

客户端生效

#### Returns

`boolean`

是否能与 UI 交互

#### Defined in

Util/index.d.ts:116

---

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

---

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

---

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

---

### onKeyDown

▸ **onKeyDown**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-点击

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                 | Description    |
| :--------- | :----------------------------------- | :------------- |
| `Key`      | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值   |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:43

---

### onKeyPress

▸ **onKeyPress**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-按压

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                 | Description    |
| :--------- | :----------------------------------- | :------------- |
| `Key`      | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值   |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:65

---

### onKeyUp

▸ **onKeyUp**(`Key`, `listener`): [`EventListener`](../classes/Events.Events.EventListener.md)

**`Description`**

键盘输入事件-抬起

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                 | Description    |
| :--------- | :----------------------------------- | :------------- |
| `Key`      | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键值   |
| `listener` | (...`params`: `unknown`[]) => `void` | usage:监听回调 |

#### Returns

[`EventListener`](../classes/Events.Events.EventListener.md)

返回一个事件监听器

#### Defined in

Util/index.d.ts:54

---

### projectWorldLocationToWidgetPosition

▸ **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/Type.Type.ConvertScreenResult.md)

**`Description`**

获取角色在世界中的位置，投射到屏幕上

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                                       | Description                                                                                                  |
| :------------------------ | :----------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| `worldLocation`           | [`Vector`](../classes/Type.Type.Vector.md) | usage: 世界坐标                                                                                              |
| `playerViewportRelative?` | `boolean`                                  | usage: 这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/Type.Type.ConvertScreenResult.md)

屏幕坐标转换结果，无 WorldDirection，为默认值 Type.Vector.ZERO

#### Defined in

Util/index.d.ts:135

---

### setCursorLocked

▸ **setCursorLocked**(`isLock`): `void`

**`Description`**

设置鼠标指针是否锁定

**`Effect`**

客户端生效

#### Parameters

| Name     | Type      | Description    |
| :------- | :-------- | :------------- |
| `isLock` | `boolean` | usage:是否锁定 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:98

---

### setCursorVisible

▸ **setCursorVisible**(`isVisible`): `void`

**`Description`**

设置鼠标指针是否可见

**`Effect`**

客户端生效

#### Parameters

| Name        | Type      | Description    |
| :---------- | :-------- | :------------- |
| `isVisible` | `boolean` | usage:是否可见 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:86
