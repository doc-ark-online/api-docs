[UI](../modules/UI.UI.md) / VirtualJoystickPanel

# VirtualJoystickPanel <Badge type="tip" text="Class" />

**`Description`**

摇杆

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`VirtualJoystickPanel`**

## Table of contents

| Accessors |
| :-----|
| **[activeOpacity](UI.VirtualJoystickPanel.md#activeopacity)**(): `number` <br> 返回激活时的透明度|
| **[backgroundDisabledImageId](UI.VirtualJoystickPanel.md#backgrounddisabledimageid)**(): `string` <br> 返回背景图片禁用状态图片id|
| **[backgroundImageDesigner](UI.VirtualJoystickPanel.md#backgroundimagedesigner)**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) <br> 返回输入的背景贴图设置，包括 普通的 点击的  不启用的|
| **[backgroundImageId](UI.VirtualJoystickPanel.md#backgroundimageid)**(): `string` <br> 返回中心图片普通状态图片id|
| **[backgroundImageSize](UI.VirtualJoystickPanel.md#backgroundimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 摇杆背景图片大小|
| **[backgroundTouchImageId](UI.VirtualJoystickPanel.md#backgroundtouchimageid)**(): `string` <br> 返回背景图片按压状态图片id|
| **[center](UI.VirtualJoystickPanel.md#center)**(): [`Vector2`](Type.Vector2.md) <br> 返回输入的是摇杆中心位置，  不符合预期会返回默认值|
| **[centerDisableImageId](UI.VirtualJoystickPanel.md#centerdisableimageid)**(): `string` <br> 返回中心图片禁用状态图片id|
| **[centerImageDesigner](UI.VirtualJoystickPanel.md#centerimagedesigner)**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) <br> 返回输入的中心贴图设置，包括 普通的 点击的  不启用的|
| **[centerImageId](UI.VirtualJoystickPanel.md#centerimageid)**(): `string` <br> 返回中心图片普通状态图片id|
| **[centerImageSize](UI.VirtualJoystickPanel.md#centerimagesize)**(): [`Vector2`](Type.Vector2.md) <br> 摇杆按钮图片大小|
| **[centerTouchImage](UI.VirtualJoystickPanel.md#centertouchimage)**(): `string` <br> 返回中心图片按压状态图片id|
| **[controlByMouseEnable](UI.VirtualJoystickPanel.md#controlbymouseenable)**(): `boolean` <br> 获取是否被鼠标控制，只作用于PC端|
| **[controlType](UI.VirtualJoystickPanel.md#controltype)**(): [`CameraControlType`](../enums/UI.CameraControlType.md) <br> 返回输入的是摇杆类型，  不符合预期会返回默认值|
| **[inActiveOpacity](UI.VirtualJoystickPanel.md#inactiveopacity)**(): `number` <br> 返回未激活时的透明度|
| **[inputScale](UI.VirtualJoystickPanel.md#inputscale)**(): [`Vector2`](Type.Vector2.md) <br> 返回输入的输入比例|
| **[isLocationFixed](UI.VirtualJoystickPanel.md#islocationfixed)**(): `boolean` <br> 拖动后，是否固定摇杆位置|
| **[onInputDir](UI.VirtualJoystickPanel.md#oninputdir)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 输入移动事件|
| **[onJoyStickDown](UI.VirtualJoystickPanel.md#onjoystickdown)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 摇杆按下事件的代理|
| **[onJoyStickUp](UI.VirtualJoystickPanel.md#onjoystickup)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 摇杆抬起事件的代理|
| **[timeUntilInactive](UI.VirtualJoystickPanel.md#timeuntilinactive)**(): `number` <br> 进入未激活状态的时间|
| **[timeUntilReset](UI.VirtualJoystickPanel.md#timeuntilreset)**(): `number` <br> 释放摇杆后的复位时间|

| Methods |
| :-----|
| **[resetJoyStick](UI.VirtualJoystickPanel.md#resetjoystick)**(): `void` <br> 强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置|
| **[setVisibility](UI.VirtualJoystickPanel.md#setvisibility)**([`SlateVisibility`](../enums/UI.SlateVisibility.md)): `void` <br> 设置可见性|
| **[newObject](UI.VirtualJoystickPanel.md#newobject)**([`Widget`](UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <br> 创建 MWVirtualJoystickPanelDesigner 控件|
| **[newObjectAndAdd](UI.VirtualJoystickPanel.md#newobjectandadd)**([`Canvas`](UI.Canvas.md), [`Widget`](UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <br> 创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### activeOpacity

• `get` **activeOpacity**(): `number`

**`Description`**

返回激活时的透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回激活时的透明度

• `set` **activeOpacity**(`Value`): `void`

**`Description`**

设置激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |

#### Returns

`void`


### backgroundDisabledImageId

• `get` **backgroundDisabledImageId**(): `string`

**`Description`**

返回背景图片禁用状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回背景图片禁用状态图片id

• `set` **backgroundDisabledImageId**(`id`): `void`

**`Description`**

设置背景图片禁用状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`

___

### backgroundImageDesigner

• `get` **backgroundImageDesigner**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

**`Description`**

返回输入的背景贴图设置，包括 普通的 点击的  不启用的

**`Effect`**

只在客户端调用生效

#### Returns

[`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

返回输入的背景贴图设置，包括 普通的 点击的  不启用的

• `set` **backgroundImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的背景贴图设置，包括 普通的 点击的 不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) | 背景贴图设置 |

#### Returns

`void`

___

### backgroundImageId

• `get` **backgroundImageId**(): `string`

**`Description`**

返回中心图片普通状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片普通状态图片id

• `set` **backgroundImageId**(`id`): `void`

**`Description`**

设置背景图片普通状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`

___

### backgroundImageSize

• `get` **backgroundImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

摇杆背景图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

摇杆背景图片大小

• `set` **backgroundImageSize**(`inSize`): `void`

**`Description`**

摇杆背景图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 摇杆背景图片大小 |

#### Returns

`void`

___

### backgroundTouchImageId

• `get` **backgroundTouchImageId**(): `string`

**`Description`**

返回背景图片按压状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回背景图片按压状态图片id

• `set` **backgroundTouchImageId**(`id`): `void`

**`Description`**

设置背景图片按压状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`


### center

• `get` **center**(): [`Vector2`](Type.Vector2.md)

**`Description`**

返回输入的是摇杆中心位置，  不符合预期会返回默认值

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

回输入的是摇杆中心位置，  不符合预期会返回默认值

• `set` **center**(`inValue`): `void`

**`Description`**

设置输入的中心位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | [`Vector2`](Type.Vector2.md) | 新的中心位置 |

#### Returns

`void`

___

### centerDisableImageId

• `get` **centerDisableImageId**(): `string`

**`Description`**

返回中心图片禁用状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片禁用状态图片id

• `set` **centerDisableImageId**(`id`): `void`

**`Description`**

设置中心图片禁用状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`

___

### centerImageDesigner

• `get` **centerImageDesigner**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

**`Description`**

返回输入的中心贴图设置，包括 普通的 点击的  不启用的

**`Effect`**

只在客户端调用生效

#### Returns

[`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

返回中心贴图设置

• `set` **centerImageDesigner**(`inImage`): `void`

**`Description`**

设置输入的中心贴图设置，包括 普通的 点击的  不启用的

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) | 中心贴图设置 |

#### Returns

`void`

___

### centerImageId

• `get` **centerImageId**(): `string`

**`Description`**

返回中心图片普通状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片普通状态图片id

• `set` **centerImageId**(`id`): `void`

**`Description`**

设置中心图片普通状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`

___

### centerImageSize

• `get` **centerImageSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

摇杆按钮图片大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

摇杆按钮图片大小

• `set` **centerImageSize**(`inSize`): `void`

**`Description`**

摇杆按钮图片大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 摇杆按钮图片大小 |

#### Returns

`void`

___

### centerTouchImage

• `get` **centerTouchImage**(): `string`

**`Description`**

返回中心图片按压状态图片id

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回中心图片按压状态图片id

• `set` **centerTouchImage**(`id`): `void`

**`Description`**

置中心图片按压状态图片id

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |

#### Returns

`void`


### controlByMouseEnable

• `get` **controlByMouseEnable**(): `boolean`

**`Description`**

获取是否被鼠标控制，只作用于PC端

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否被鼠标控制

• `set` **controlByMouseEnable**(`controlByMouse`): `void`

**`Description`**

设置是否被鼠标控制，只作用于PC端

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlByMouse` | `boolean` |  是否被鼠标控制 |

#### Returns

`void`

___

### controlType

• `get` **controlType**(): [`CameraControlType`](../enums/UI.CameraControlType.md)

**`Description`**

返回输入的是摇杆类型，  不符合预期会返回默认值

**`Effect`**

只在客户端调用生效

#### Returns

[`CameraControlType`](../enums/UI.CameraControlType.md)

返回输入的摇杆类型

• `set` **controlType**(`NewControlType`): `void`

**`Description`**

设置输入的摇杆类型，人物的移动和技能摇杆的移动类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewControlType` | [`CameraControlType`](../enums/UI.CameraControlType.md) | 摇杆类型 |

#### Returns

`void`


### inActiveOpacity

• `get` **inActiveOpacity**(): `number`

**`Description`**

返回未激活时的透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回未激活时的透明度

• `set` **inActiveOpacity**(`Value`): `void`

**`Description`**

设置未激活时的透明度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |

#### Returns

`void`

___

### inputScale

• `get` **inputScale**(): [`Vector2`](Type.Vector2.md)

**`Description`**

返回输入的输入比例

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Vector2.md)

返回输入的输入比例

• `set` **inputScale**(`inScale`): `void`

**`Description`**

设置输入的输入比例

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector2`](Type.Vector2.md) | 新的输入比例 |

#### Returns

`void`


### isLocationFixed

• `get` **isLocationFixed**(): `boolean`

**`Description`**

拖动后，是否固定摇杆位置

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

• `set` **isLocationFixed**(`enable`): `void`

**`Description`**

拖动后，是否固定摇杆位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 是否固定摇杆位置 |

#### Returns

`void`


### onInputDir

• `get` **onInputDir**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Vector2.md)) => `void`\>

**`Description`**

输入移动事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Vector2.md)) => `void`\>

输入移动事件

___

### onJoyStickDown

• `get` **onJoyStickDown**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

摇杆按下事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

按下摇杆事件的代理

___

### onJoyStickUp

• `get` **onJoyStickUp**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

摇杆抬起事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

抬起摇杆事件的代理


### timeUntilInactive

• `get` **timeUntilInactive**(): `number`

**`Description`**

进入未激活状态的时间

**`Effect`**

只在客户端调用生效

#### Returns

`number`

进入未激活状态的时间，以秒为单位

• `set` **timeUntilInactive**(`Value`): `void`

**`Description`**

进入未激活状态的时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 进入未激活状态的时间，以秒为单位 |

#### Returns

`void`

___

### timeUntilReset

• `get` **timeUntilReset**(): `number`

**`Description`**

释放摇杆后的复位时间

**`Effect`**

只在客户端调用生效

#### Returns

`number`

复位时间  以秒为单位

• `set` **timeUntilReset**(`Value`): `void`

**`Description`**

释放摇杆后的复位时间

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 复位时间 以秒为单位 |

#### Returns

`void`


## Methods

### resetJoyStick

▸ **resetJoyStick**(): `void`

**`Description`**

强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### setVisibility

▸ **setVisibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.SlateVisibility.md) | 可见性 |

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

**`Description`**

创建 MWVirtualJoystickPanelDesigner 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Outer?` | [`Widget`](UI.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

返回创建的控件

___

### newObjectAndAdd

▸ `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

**`Description`**

创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InCanvas?` | [`Canvas`](UI.Canvas.md) | 父节点 default:null |
| `Outer?` | [`Widget`](UI.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` |  创建控件的名称 default: null |

#### Returns

[`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

返回创建的对象
