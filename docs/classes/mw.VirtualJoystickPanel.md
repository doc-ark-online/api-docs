[UI](../groups/Core.UI.md) / VirtualJoystickPanel

# VirtualJoystickPanel <Badge type="tip" text="Class" /> <Score text="VirtualJoystickPanel" />

摇杆

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`VirtualJoystickPanel`**

## Table of contents

| Accessors |
| :-----|
| **[activeOpacity](mw.VirtualJoystickPanel.md#activeopacity)**(): `number` <br> 返回激活时的透明度|
| **[backgroundDisabledImageId](mw.VirtualJoystickPanel.md#backgrounddisabledimageid)**(): `string` <br> 返回背景图片禁用状态图片id|
| **[backgroundImageDesigner](mw.VirtualJoystickPanel.md#backgroundimagedesigner)**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <br> 返回输入的背景贴图设置，包括 普通的 点击的  不启用的|
| **[backgroundImageId](mw.VirtualJoystickPanel.md#backgroundimageid)**(): `string` <br> 返回中心图片普通状态图片id|
| **[backgroundImageSize](mw.VirtualJoystickPanel.md#backgroundimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 摇杆背景图片大小|
| **[backgroundTouchImageId](mw.VirtualJoystickPanel.md#backgroundtouchimageid)**(): `string` <br> 返回背景图片按压状态图片id|
| **[center](mw.VirtualJoystickPanel.md#center)**(): [`Vector2`](mw.Vector2.md) <br> 返回输入的是摇杆中心位置，  不符合预期会返回默认值|
| **[centerDisableImageId](mw.VirtualJoystickPanel.md#centerdisableimageid)**(): `string` <br> 返回中心图片禁用状态图片id|
| **[centerImageDesigner](mw.VirtualJoystickPanel.md#centerimagedesigner)**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <br> 返回输入的中心贴图设置，包括 普通的 点击的  不启用的|
| **[centerImageId](mw.VirtualJoystickPanel.md#centerimageid)**(): `string` <br> 返回中心图片普通状态图片id|
| **[centerImageSize](mw.VirtualJoystickPanel.md#centerimagesize)**(): [`Vector2`](mw.Vector2.md) <br> 摇杆按钮图片大小|
| **[centerTouchImage](mw.VirtualJoystickPanel.md#centertouchimage)**(): `string` <br> 返回中心图片按压状态图片id|
| **[controlByMouseEnable](mw.VirtualJoystickPanel.md#controlbymouseenable)**(): `boolean` <br> 获取是否被鼠标控制，只作用于PC端|
| **[controlType](mw.VirtualJoystickPanel.md#controltype)**(): [`CameraControlType`](../enums/mw.CameraControlType.md) <br> 返回输入的是摇杆类型，  不符合预期会返回默认值|
| **[inActiveOpacity](mw.VirtualJoystickPanel.md#inactiveopacity)**(): `number` <br> 返回未激活时的透明度|
| **[inputScale](mw.VirtualJoystickPanel.md#inputscale)**(): [`Vector2`](mw.Vector2.md) <br> 返回输入的输入比例|
| **[isLocationFixed](mw.VirtualJoystickPanel.md#islocationfixed)**(): `boolean` <br> 拖动后，是否固定摇杆位置|
| **[onInputDir](mw.VirtualJoystickPanel.md#oninputdir)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\> <br> 输入移动事件|
| **[onJoyStickDown](mw.VirtualJoystickPanel.md#onjoystickdown)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 摇杆按下事件的代理|
| **[onJoyStickUp](mw.VirtualJoystickPanel.md#onjoystickup)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 摇杆抬起事件的代理|
| **[timeUntilInactive](mw.VirtualJoystickPanel.md#timeuntilinactive)**(): `number` <br> 进入未激活状态的时间|
| **[timeUntilReset](mw.VirtualJoystickPanel.md#timeuntilreset)**(): `number` <br> 释放摇杆后的复位时间|


::: details 点击查看继承
| Accessors |
| :-----|
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md) <br> 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](mw.Widget.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <br> 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md) <br> 获取渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md) <br> 获取大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <br> 获取可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[resetJoyStick](mw.VirtualJoystickPanel.md#resetjoystick)**(): `void` <br> 强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置|
| **[setVisibility](mw.VirtualJoystickPanel.md#setvisibility)**(`Visibility`: [`SlateVisibility`](../enums/mw.SlateVisibility.md)): `void` <br> 设置可见性|
| **[newObject](mw.VirtualJoystickPanel.md#newobject)**(`Outer?`: [`Widget`](mw.Widget.md), `InName?`: `string`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <br> 创建 VirtualJoystickPanelDesigner 控件|
| **[newObjectAndAdd](mw.VirtualJoystickPanel.md#newobjectandadd)**(`InCanvas?`: [`Canvas`](mw.Canvas.md), `Outer?`: [`Widget`](mw.Widget.md), `InName?`: `string`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <br> 创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### activeOpacity <Score text="activeOpacity" /> 

• `get` **activeOpacity**(): `number` <Badge type="tip" text="client" />

返回激活时的透明度


#### Returns

`number`

返回激活时的透明度

• `set` **activeOpacity**(`Value`): `void` <Badge type="tip" text="client" />

设置激活时的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |


___

### backgroundDisabledImageId <Score text="backgroundDisabledImageId" /> 

• `get` **backgroundDisabledImageId**(): `string` <Badge type="tip" text="client" />

返回背景图片禁用状态图片id


#### Returns

`string`

返回背景图片禁用状态图片id

• `set` **backgroundDisabledImageId**(`id`): `void` <Badge type="tip" text="client" />

设置背景图片禁用状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### backgroundImageDesigner <Score text="backgroundImageDesigner" /> 

• `get` **backgroundImageDesigner**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <Badge type="tip" text="client" />

返回输入的背景贴图设置，包括 普通的 点击的  不启用的


#### Returns

[`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md)

返回输入的背景贴图设置，包括 普通的 点击的  不启用的

• `set` **backgroundImageDesigner**(`inImage`): `void` <Badge type="tip" text="client" />

设置输入的背景贴图设置，包括 普通的 点击的 不启用的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 背景贴图设置 |


___

### backgroundImageId <Score text="backgroundImageId" /> 

• `get` **backgroundImageId**(): `string` <Badge type="tip" text="client" />

返回中心图片普通状态图片id


#### Returns

`string`

返回中心图片普通状态图片id

• `set` **backgroundImageId**(`id`): `void` <Badge type="tip" text="client" />

设置背景图片普通状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### backgroundImageSize <Score text="backgroundImageSize" /> 

• `get` **backgroundImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

摇杆背景图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

摇杆背景图片大小

• `set` **backgroundImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

摇杆背景图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 摇杆背景图片大小 |


___

### backgroundTouchImageId <Score text="backgroundTouchImageId" /> 

• `get` **backgroundTouchImageId**(): `string` <Badge type="tip" text="client" />

返回背景图片按压状态图片id


#### Returns

`string`

返回背景图片按压状态图片id

• `set` **backgroundTouchImageId**(`id`): `void` <Badge type="tip" text="client" />

设置背景图片按压状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### center <Score text="center" /> 

• `get` **center**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

返回输入的是摇杆中心位置，  不符合预期会返回默认值


#### Returns

[`Vector2`](mw.Vector2.md)

回输入的是摇杆中心位置，  不符合预期会返回默认值

• `set` **center**(`inValue`): `void` <Badge type="tip" text="client" />

设置输入的中心位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inValue` | [`Vector2`](mw.Vector2.md) | 新的中心位置 |


___

### centerDisableImageId <Score text="centerDisableImageId" /> 

• `get` **centerDisableImageId**(): `string` <Badge type="tip" text="client" />

返回中心图片禁用状态图片id


#### Returns

`string`

返回中心图片禁用状态图片id

• `set` **centerDisableImageId**(`id`): `void` <Badge type="tip" text="client" />

设置中心图片禁用状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### centerImageDesigner <Score text="centerImageDesigner" /> 

• `get` **centerImageDesigner**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <Badge type="tip" text="client" />

返回输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Returns

[`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md)

返回中心贴图设置

• `set` **centerImageDesigner**(`inImage`): `void` <Badge type="tip" text="client" />

设置输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inImage` | [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 中心贴图设置 |


___

### centerImageId <Score text="centerImageId" /> 

• `get` **centerImageId**(): `string` <Badge type="tip" text="client" />

返回中心图片普通状态图片id


#### Returns

`string`

返回中心图片普通状态图片id

• `set` **centerImageId**(`id`): `void` <Badge type="tip" text="client" />

设置中心图片普通状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### centerImageSize <Score text="centerImageSize" /> 

• `get` **centerImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

摇杆按钮图片大小


#### Returns

[`Vector2`](mw.Vector2.md)

摇杆按钮图片大小

• `set` **centerImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

摇杆按钮图片大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](mw.Vector2.md) | 摇杆按钮图片大小 |


___

### centerTouchImage <Score text="centerTouchImage" /> 

• `get` **centerTouchImage**(): `string` <Badge type="tip" text="client" />

返回中心图片按压状态图片id


#### Returns

`string`

返回中心图片按压状态图片id

• `set` **centerTouchImage**(`id`): `void` <Badge type="tip" text="client" />

置中心图片按压状态图片id


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | 资源id |


___

### controlByMouseEnable <Score text="controlByMouseEnable" /> 

• `get` **controlByMouseEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否被鼠标控制，只作用于PC端


#### Returns

`boolean`

是否被鼠标控制

• `set` **controlByMouseEnable**(`controlByMouse`): `void` <Badge type="tip" text="client" />

设置是否被鼠标控制，只作用于PC端


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlByMouse` | `boolean` |  是否被鼠标控制 |


___

### controlType <Score text="controlType" /> 

• `get` **controlType**(): [`CameraControlType`](../enums/mw.CameraControlType.md) <Badge type="tip" text="client" />

返回输入的是摇杆类型，  不符合预期会返回默认值


#### Returns

[`CameraControlType`](../enums/mw.CameraControlType.md)

返回输入的摇杆类型

• `set` **controlType**(`NewControlType`): `void` <Badge type="tip" text="client" />

设置输入的摇杆类型，人物的移动和技能摇杆的移动类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewControlType` | [`CameraControlType`](../enums/mw.CameraControlType.md) | 摇杆类型 |


___

### inActiveOpacity <Score text="inActiveOpacity" /> 

• `get` **inActiveOpacity**(): `number` <Badge type="tip" text="client" />

返回未激活时的透明度


#### Returns

`number`

返回未激活时的透明度

• `set` **inActiveOpacity**(`Value`): `void` <Badge type="tip" text="client" />

设置未激活时的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 透明度 |


___

### inputScale <Score text="inputScale" /> 

• `get` **inputScale**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

返回输入的输入比例


#### Returns

[`Vector2`](mw.Vector2.md)

返回输入的输入比例

• `set` **inputScale**(`inScale`): `void` <Badge type="tip" text="client" />

设置输入的输入比例


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector2`](mw.Vector2.md) | 新的输入比例 |


___

### isLocationFixed <Score text="isLocationFixed" /> 

• `get` **isLocationFixed**(): `boolean` <Badge type="tip" text="client" />

拖动后，是否固定摇杆位置


#### Returns

`boolean`

boolean

• `set` **isLocationFixed**(`enable`): `void` <Badge type="tip" text="client" />

拖动后，是否固定摇杆位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 是否固定摇杆位置 |


___

### onInputDir <Score text="onInputDir" /> 

• `get` **onInputDir**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

输入移动事件


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\>

输入移动事件

___

### onJoyStickDown <Score text="onJoyStickDown" /> 

• `get` **onJoyStickDown**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

摇杆按下事件的代理


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

按下摇杆事件的代理

___

### onJoyStickUp <Score text="onJoyStickUp" /> 

• `get` **onJoyStickUp**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

摇杆抬起事件的代理


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

抬起摇杆事件的代理

___

### timeUntilInactive <Score text="timeUntilInactive" /> 

• `get` **timeUntilInactive**(): `number` <Badge type="tip" text="client" />

进入未激活状态的时间


#### Returns

`number`

进入未激活状态的时间，以秒为单位

• `set` **timeUntilInactive**(`Value`): `void` <Badge type="tip" text="client" />

进入未激活状态的时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 进入未激活状态的时间，以秒为单位 |


___

### timeUntilReset <Score text="timeUntilReset" /> 

• `get` **timeUntilReset**(): `number` <Badge type="tip" text="client" />

释放摇杆后的复位时间


#### Returns

`number`

复位时间  以秒为单位

• `set` **timeUntilReset**(`Value`): `void` <Badge type="tip" text="client" />

释放摇杆后的复位时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 复位时间 以秒为单位 |



## Methods
___

### resetJoyStick <Score text="resetJoyStick" /> 

• **resetJoyStick**(): `void` <Badge type="tip" text="client" />

强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置



___

### setVisibility <Score text="setVisibility" /> 

• **setVisibility**(`Visibility`): `void` <Badge type="tip" text="client" />

设置可见性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 可见性 |


___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <Badge type="tip" text="client" />

创建 VirtualJoystickPanelDesigner 控件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Outer?` | [`Widget`](mw.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md)

返回创建的控件

___

### newObjectAndAdd <Score text="newObjectAndAdd" /> 

• `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <Badge type="tip" text="client" />

创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InCanvas?` | [`Canvas`](mw.Canvas.md) | 父节点 default:null |
| `Outer?` | [`Widget`](mw.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` |  创建控件的名称 default: null |

#### Returns

[`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md)

返回创建的对象
