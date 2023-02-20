[UI](../modules/UI.UI.md) / VirtualJoystickPanel

# VirtualJoystickPanel <Badge type="tip" text="Class" /> <Score text="VirtualJoystickPanel" />

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


::: details 点击查看继承
| Accessors |
| :-----|
| **[autoSizeEnable](UI.Widget.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.Widget.md#cachedgeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](UI.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](UI.Widget.md#desiredsize)**(): [`Vector2`](Type.Vector2.md) <br> 获取期望大小|
| **[enable](UI.Widget.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](UI.Widget.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.Widget.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](UI.Widget.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](UI.Widget.md#paintspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.Widget.md#parent)**(): [`Widget`](UI.Widget.md) <br> 获取父节点|
| **[position](UI.Widget.md#position)**(): `Readonly`<[`Vector2`](Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.Widget.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.Widget.md#renderscale)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.Widget.md#rendershear)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.Widget.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.Widget.md#rendertransformpivot)**(): [`Vector2`](Type.Vector2.md) <br> 获取渲染锚点|
| **[size](UI.Widget.md#size)**(): [`Vector2`](Type.Vector2.md) <br> 获取大小|
| **[slot](UI.Widget.md#slot)**(): [`UISlot`](UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[resetJoyStick](UI.VirtualJoystickPanel.md#resetjoystick)**(): `void` <br> 强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置|
| **[setVisibility](UI.VirtualJoystickPanel.md#setvisibility)**([`SlateVisibility`](../enums/UI.SlateVisibility.md)): `void` <br> 设置可见性|
| **[newObject](UI.VirtualJoystickPanel.md#newobject)**([`Widget`](UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <br> 创建 MWVirtualJoystickPanelDesigner 控件|
| **[newObjectAndAdd](UI.VirtualJoystickPanel.md#newobjectandadd)**([`Canvas`](UI.Canvas.md), [`Widget`](UI.Widget.md), `string`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <br> 创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
:::


## Accessors

### activeOpacity <Score text="activeOpacity" /> 

• `get` **activeOpacity**(): `number` <Badge type="tip" text="other" />

返回激活时的透明度


#### Returns

`number`

返回激活时的透明度

• `set` **activeOpacity**(`Value`): `void` <Badge type="tip" text="other" />

设置激活时的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |



### backgroundDisabledImageId <Score text="backgroundDisabledImageId" /> 

• `get` **backgroundDisabledImageId**(): `string` <Badge type="tip" text="other" />

返回背景图片禁用状态图片id


#### Returns

`string`

返回背景图片禁用状态图片id

• `set` **backgroundDisabledImageId**(`id`): `void` <Badge type="tip" text="other" />

设置背景图片禁用状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### backgroundImageDesigner <Score text="backgroundImageDesigner" /> 

• `get` **backgroundImageDesigner**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) <Badge type="tip" text="other" />

返回输入的背景贴图设置，包括 普通的 点击的  不启用的


#### Returns

[`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

返回输入的背景贴图设置，包括 普通的 点击的  不启用的

• `set` **backgroundImageDesigner**(`inImage`): `void` <Badge type="tip" text="other" />

设置输入的背景贴图设置，包括 普通的 点击的 不启用的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) | 背景贴图设置 |


___

### backgroundImageId <Score text="backgroundImageId" /> 

• `get` **backgroundImageId**(): `string` <Badge type="tip" text="other" />

返回中心图片普通状态图片id


#### Returns

`string`

返回中心图片普通状态图片id

• `set` **backgroundImageId**(`id`): `void` <Badge type="tip" text="other" />

设置背景图片普通状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### backgroundImageSize <Score text="backgroundImageSize" /> 

• `get` **backgroundImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

摇杆背景图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

摇杆背景图片大小

• `set` **backgroundImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

摇杆背景图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 摇杆背景图片大小 |


___

### backgroundTouchImageId <Score text="backgroundTouchImageId" /> 

• `get` **backgroundTouchImageId**(): `string` <Badge type="tip" text="other" />

返回背景图片按压状态图片id


#### Returns

`string`

返回背景图片按压状态图片id

• `set` **backgroundTouchImageId**(`id`): `void` <Badge type="tip" text="other" />

设置背景图片按压状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |



### center <Score text="center" /> 

• `get` **center**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

返回输入的是摇杆中心位置，  不符合预期会返回默认值


#### Returns

[`Vector2`](Type.Vector2.md)

回输入的是摇杆中心位置，  不符合预期会返回默认值

• `set` **center**(`inValue`): `void` <Badge type="tip" text="other" />

设置输入的中心位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | [`Vector2`](Type.Vector2.md) | 新的中心位置 |


___

### centerDisableImageId <Score text="centerDisableImageId" /> 

• `get` **centerDisableImageId**(): `string` <Badge type="tip" text="other" />

返回中心图片禁用状态图片id


#### Returns

`string`

返回中心图片禁用状态图片id

• `set` **centerDisableImageId**(`id`): `void` <Badge type="tip" text="other" />

设置中心图片禁用状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### centerImageDesigner <Score text="centerImageDesigner" /> 

• `get` **centerImageDesigner**(): [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) <Badge type="tip" text="other" />

返回输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Returns

[`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md)

返回中心贴图设置

• `set` **centerImageDesigner**(`inImage`): `void` <Badge type="tip" text="other" />

设置输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](UI.JoystickStyleDesigner.md) | 中心贴图设置 |


___

### centerImageId <Score text="centerImageId" /> 

• `get` **centerImageId**(): `string` <Badge type="tip" text="other" />

返回中心图片普通状态图片id


#### Returns

`string`

返回中心图片普通状态图片id

• `set` **centerImageId**(`id`): `void` <Badge type="tip" text="other" />

设置中心图片普通状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### centerImageSize <Score text="centerImageSize" /> 

• `get` **centerImageSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

摇杆按钮图片大小


#### Returns

[`Vector2`](Type.Vector2.md)

摇杆按钮图片大小

• `set` **centerImageSize**(`inSize`): `void` <Badge type="tip" text="other" />

摇杆按钮图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Vector2.md) | 摇杆按钮图片大小 |


___

### centerTouchImage <Score text="centerTouchImage" /> 

• `get` **centerTouchImage**(): `string` <Badge type="tip" text="other" />

返回中心图片按压状态图片id


#### Returns

`string`

返回中心图片按压状态图片id

• `set` **centerTouchImage**(`id`): `void` <Badge type="tip" text="other" />

置中心图片按压状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |



### controlByMouseEnable <Score text="controlByMouseEnable" /> 

• `get` **controlByMouseEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否被鼠标控制，只作用于PC端


#### Returns

`boolean`

是否被鼠标控制

• `set` **controlByMouseEnable**(`controlByMouse`): `void` <Badge type="tip" text="other" />

设置是否被鼠标控制，只作用于PC端


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlByMouse` | `boolean` |  是否被鼠标控制 |


___

### controlType <Score text="controlType" /> 

• `get` **controlType**(): [`CameraControlType`](../enums/UI.CameraControlType.md) <Badge type="tip" text="other" />

返回输入的是摇杆类型，  不符合预期会返回默认值


#### Returns

[`CameraControlType`](../enums/UI.CameraControlType.md)

返回输入的摇杆类型

• `set` **controlType**(`NewControlType`): `void` <Badge type="tip" text="other" />

设置输入的摇杆类型，人物的移动和技能摇杆的移动类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewControlType` | [`CameraControlType`](../enums/UI.CameraControlType.md) | 摇杆类型 |



### inActiveOpacity <Score text="inActiveOpacity" /> 

• `get` **inActiveOpacity**(): `number` <Badge type="tip" text="other" />

返回未激活时的透明度


#### Returns

`number`

返回未激活时的透明度

• `set` **inActiveOpacity**(`Value`): `void` <Badge type="tip" text="other" />

设置未激活时的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |


___

### inputScale <Score text="inputScale" /> 

• `get` **inputScale**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

返回输入的输入比例


#### Returns

[`Vector2`](Type.Vector2.md)

返回输入的输入比例

• `set` **inputScale**(`inScale`): `void` <Badge type="tip" text="other" />

设置输入的输入比例


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector2`](Type.Vector2.md) | 新的输入比例 |



### isLocationFixed <Score text="isLocationFixed" /> 

• `get` **isLocationFixed**(): `boolean` <Badge type="tip" text="other" />

拖动后，是否固定摇杆位置


#### Returns

`boolean`

boolean

• `set` **isLocationFixed**(`enable`): `void` <Badge type="tip" text="other" />

拖动后，是否固定摇杆位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 是否固定摇杆位置 |



### onInputDir <Score text="onInputDir" /> 

• `get` **onInputDir**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Vector2.md)) => `void`\> <Badge type="tip" text="other" />

输入移动事件


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`vec`: [`Vector2`](Type.Vector2.md)) => `void`\>

输入移动事件

___

### onJoyStickDown <Score text="onJoyStickDown" /> 

• `get` **onJoyStickDown**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

摇杆按下事件的代理


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

按下摇杆事件的代理

___

### onJoyStickUp <Score text="onJoyStickUp" /> 

• `get` **onJoyStickUp**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="other" />

摇杆抬起事件的代理


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

抬起摇杆事件的代理


### timeUntilInactive <Score text="timeUntilInactive" /> 

• `get` **timeUntilInactive**(): `number` <Badge type="tip" text="other" />

进入未激活状态的时间


#### Returns

`number`

进入未激活状态的时间，以秒为单位

• `set` **timeUntilInactive**(`Value`): `void` <Badge type="tip" text="other" />

进入未激活状态的时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 进入未激活状态的时间，以秒为单位 |


___

### timeUntilReset <Score text="timeUntilReset" /> 

• `get` **timeUntilReset**(): `number` <Badge type="tip" text="other" />

释放摇杆后的复位时间


#### Returns

`number`

复位时间  以秒为单位

• `set` **timeUntilReset**(`Value`): `void` <Badge type="tip" text="other" />

释放摇杆后的复位时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 复位时间 以秒为单位 |



## Methods

### resetJoyStick <Score text="resetJoyStick" /> 

• **resetJoyStick**(): `void` <Badge type="tip" text="other" />

强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置



___

### setVisibility <Score text="setVisibility" /> 

• **setVisibility**(`Visibility`): `void` <Badge type="tip" text="other" />

设置可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.SlateVisibility.md) | 可见性 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <Badge type="tip" text="other" />

创建 MWVirtualJoystickPanelDesigner 控件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Outer?` | [`Widget`](UI.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

返回创建的控件

___

### newObjectAndAdd <Score text="newObjectAndAdd" /> 

• `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md) <Badge type="tip" text="other" />

创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InCanvas?` | [`Canvas`](UI.Canvas.md) | 父节点 default:null |
| `Outer?` | [`Widget`](UI.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` |  创建控件的名称 default: null |

#### Returns

[`VirtualJoystickPanel`](UI.VirtualJoystickPanel.md)

返回创建的对象
