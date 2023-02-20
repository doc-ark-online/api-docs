[Util](Util.Util.md) / InputUtil

# InputUtil <Badge type="tip" text="Namespace" /> <Score text="InputUtil" />

## Table of contents

| Functions |
| :-----|
| **[bindButton](Util.InputUtil.md#bindbutton)**([`Keys`](../enums/Type.Keys.md), [`Button`](../classes/UI.Button.md) \): `void` <br> 绑定按键|
| **[convertScreenLocationToWorldSpace](Util.InputUtil.md#convertscreenlocationtoworldspace)**(`number`, `number`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[enableCursorInteractWithUI](Util.InputUtil.md#enablecursorinteractwithui)**(`boolean`): `void` <br> 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](Util.InputUtil.md#enablecursorlock)**(`boolean`): `void` <br> 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[isCursorInteractiveWithUI](Util.InputUtil.md#iscursorinteractivewithui)**(): `boolean` <br> 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](Util.InputUtil.md#iscursorlockenabled)**(): `boolean` <br> 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](Util.InputUtil.md#iscursorlocked)**(): `boolean` <br> 获取鼠标指针是否锁定|
| **[isCursorVisible](Util.InputUtil.md#iscursorvisible)**(): `boolean` <br> 获取鼠标指针是否可见|
| **[onKeyDown](Util.InputUtil.md#onkeydown)**([`Keys`](../enums/Type.Keys.md), (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-点击|
| **[onKeyPress](Util.InputUtil.md#onkeypress)**([`Keys`](../enums/Type.Keys.md), (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-按压|
| **[onKeyUp](Util.InputUtil.md#onkeyup)**([`Keys`](../enums/Type.Keys.md), (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-抬起|
| **[projectWorldLocationToWidgetPosition](Util.InputUtil.md#projectworldlocationtowidgetposition)**([`Vector`](../classes/Type.Vector.md), `boolean`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[setCursorLocked](Util.InputUtil.md#setcursorlocked)**(`boolean`): `void` <br> 设置鼠标指针是否锁定|
| **[setCursorVisible](Util.InputUtil.md#setcursorvisible)**(`boolean`): `void` <br> 设置鼠标指针是否可见|
| **[setMouseLockable](Util.InputUtil.md#setmouselockable)**(`boolean`): `void` <br> 设置是否可以锁定鼠标|
| **[unbindButton](Util.InputUtil.md#unbindbutton)**([`Keys`](../enums/Type.Keys.md)): `void` <br> 此操作只会解绑动态绑定的按键无法解除editor下绑定的按键|

## Functions

### bindButton <Score text="bindButton" /> 

• **bindButton**(`key`, `Widget`): `void` <Badge type="tip" text="other" />

绑定按键

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 按键 |
| `Widget` | [`Button`](../classes/UI.Button.md) \| [`StaleButton`](../classes/UI.StaleButton.md) | 绑定的button |


___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <Badge type="tip" text="other" />

将二维屏幕位置转换为世界空间三维位置和方向

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenX` | `number` |  屏幕X轴坐标值 default: |
| `screenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果

___

### enableCursorInteractWithUI <Score text="enableCursorInteractWithUI" /> 

• **enableCursorInteractWithUI**(`canInteract`): `void` <Badge type="tip" text="other" />

设置鼠标指针是否能与UI交互

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canInteract` | `boolean` | 可交互 |


___

### enableCursorLock <Score text="enableCursorLock" /> 

• **enableCursorLock**(`isEnableMouseLock`): `void` <Badge type="tip" text="other" />

设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnableMouseLock` | `boolean` | 是否开始shift键功能,此函数不会直接设置鼠标状态 |


___

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

• **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="other" />

获取鼠标指针是否能与UI交互

**`Groups`**

UTILITY


#### Returns

`boolean`

是否能与UI交互

___

### isCursorLockEnabled <Score text="isCursorLockEnabled" /> 

• **isCursorLockEnabled**(): `boolean` <Badge type="tip" text="other" />

获取是否允许通过快捷方式切换鼠标的使用组合模式

**`Groups`**

UTILITY


#### Returns

`boolean`

是否可切换

___

### isCursorLocked <Score text="isCursorLocked" /> 

• **isCursorLocked**(): `boolean` <Badge type="tip" text="other" />

获取鼠标指针是否锁定

**`Groups`**

UTILITY


#### Returns

`boolean`

是否锁定

___

### isCursorVisible <Score text="isCursorVisible" /> 

• **isCursorVisible**(): `boolean` <Badge type="tip" text="other" />

获取鼠标指针是否可见

**`Groups`**

UTILITY


#### Returns

`boolean`

是否可见

___

### onKeyDown <Score text="onKeyDown" /> 

• **onKeyDown**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

键盘输入事件-点击

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### onKeyPress <Score text="onKeyPress" /> 

• **onKeyPress**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

键盘输入事件-按压

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### onKeyUp <Score text="onKeyUp" /> 

• **onKeyUp**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="other" />

键盘输入事件-抬起

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器

___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <Badge type="tip" text="other" />

获取角色在世界中的位置，投射到屏幕上

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldLocation` | [`Vector`](../classes/Type.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO

___

### setCursorLocked <Score text="setCursorLocked" /> 

• **setCursorLocked**(`isLock`): `void` <Badge type="tip" text="other" />

设置鼠标指针是否锁定

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLock` | `boolean` | 是否锁定 |


___

### setCursorVisible <Score text="setCursorVisible" /> 

• **setCursorVisible**(`isVisible`): `void` <Badge type="tip" text="other" />

设置鼠标指针是否可见

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isVisible` | `boolean` | 是否可见 |


___

### setMouseLockable <Score text="setMouseLockable" /> 

• **setMouseLockable**(`can`): `void` <Badge type="tip" text="other" />

设置是否可以锁定鼠标

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `can` | `boolean` | 是否可以锁定鼠标 |


___

### unbindButton <Score text="unbindButton" /> 

• **unbindButton**(`key`): `void` <Badge type="tip" text="other" />

此操作只会解绑动态绑定的按键无法解除editor下绑定的按键

**`Groups`**

UTILITY


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 解除绑定的按键 |

