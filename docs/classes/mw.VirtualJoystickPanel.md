[UI](../groups/Core.UI.md) / VirtualJoystickPanel

# VirtualJoystickPanel <Badge type="tip" text="Class" /> <Score text="VirtualJoystickPanel" />

<p class="content-big"> 摇杆 </p>

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`VirtualJoystickPanel`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new Widget**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[activeOpacity](mw.VirtualJoystickPanel.md#activeopacity)**(): `number`  |
| :-----|
| 设置激活时的透明度|
| **[backgroundDisabledImageId](mw.VirtualJoystickPanel.md#backgrounddisabledimageid)**(): `string`  |
| 设置背景图片禁用状态图片id|
| **[backgroundImageDesigner](mw.VirtualJoystickPanel.md#backgroundimagedesigner)**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md)  |
| 设置输入的背景贴图设置，包括 普通的 点击的 不启用的|
| **[backgroundImageId](mw.VirtualJoystickPanel.md#backgroundimageid)**(): `string`  |
| 设置背景图片普通状态图片id|
| **[backgroundImageSize](mw.VirtualJoystickPanel.md#backgroundimagesize)**(): [`Vector2`](mw.Vector2.md)  |
| 摇杆背景图片大小|
| **[backgroundTouchImageId](mw.VirtualJoystickPanel.md#backgroundtouchimageid)**(): `string`  |
| 设置背景图片按压状态图片id|
| **[center](mw.VirtualJoystickPanel.md#center)**(): [`Vector2`](mw.Vector2.md)  |
| 设置输入的中心位置|
| **[centerDisableImageId](mw.VirtualJoystickPanel.md#centerdisableimageid)**(): `string`  |
| 设置中心图片禁用状态图片id|
| **[centerImageDesigner](mw.VirtualJoystickPanel.md#centerimagedesigner)**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md)  |
| 设置输入的中心贴图设置，包括 普通的 点击的  不启用的|
| **[centerImageId](mw.VirtualJoystickPanel.md#centerimageid)**(): `string`  |
| 设置中心图片普通状态图片id|
| **[centerImageSize](mw.VirtualJoystickPanel.md#centerimagesize)**(): [`Vector2`](mw.Vector2.md)  |
| 摇杆按钮图片大小|
| **[centerTouchImage](mw.VirtualJoystickPanel.md#centertouchimage)**(): `string`  |
| 置中心图片按压状态图片id|
| **[controlByMouseEnable](mw.VirtualJoystickPanel.md#controlbymouseenable)**(): `boolean`  |
| 设置是否被鼠标控制，只作用于PC端|
| **[controlType](mw.VirtualJoystickPanel.md#controltype)**(): [`CameraControlType`](../enums/mw.CameraControlType.md)  |
| 设置输入的摇杆类型，人物的移动和技能摇杆的移动类型|
| **[inActiveOpacity](mw.VirtualJoystickPanel.md#inactiveopacity)**(): `number`  |
| 设置未激活时的透明度|
| **[inputScale](mw.VirtualJoystickPanel.md#inputscale)**(): [`Vector2`](mw.Vector2.md)  |
| 设置输入的输入比例|
| **[isLocationFixed](mw.VirtualJoystickPanel.md#islocationfixed)**(): `boolean`  |
| 拖动后，是否固定摇杆位置|
| **[onInputDir](mw.VirtualJoystickPanel.md#oninputdir)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\>  |
| 输入移动事件|
| **[onJoyStickDown](mw.VirtualJoystickPanel.md#onjoystickdown)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 摇杆按下事件的代理|
| **[onJoyStickUp](mw.VirtualJoystickPanel.md#onjoystickup)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 摇杆抬起事件的代理|
| **[timeUntilInactive](mw.VirtualJoystickPanel.md#timeuntilinactive)**(): `number`  |
| 进入未激活状态的时间|
| **[timeUntilReset](mw.VirtualJoystickPanel.md#timeuntilreset)**(): `number`  |
| 释放摇杆后的复位时间|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean`  |
| :-----|
| 设置是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\>  |
| 设置控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md)  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean`  |
| 设置可用性|
| **[guid](mw.Widget.md#guid)**(): `string`  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean`  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string`  |
| 设定名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md)  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\>  |
| 设置控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number`  |
| 设置渲染透明度 0 ~ 1|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number`  |
| 设置渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| 设置控件的大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\>  |
| 设置控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md)  |
| 设置可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean`  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number`  |
| 设置zoder|
:::


### Methods <Score text="Methods" /> 
| **[resetJoyStick](mw.VirtualJoystickPanel.md#resetjoystick)**(): `void`  |
| :-----|
| 强制重置摇杆 - 例如在操控摇杆的时候隐藏其父类节点,这时候摇杆重新显示后无法成功重置|
| **[setVisibility](mw.VirtualJoystickPanel.md#setvisibility)**(`Visibility`: [`SlateVisibility`](../enums/mw.SlateVisibility.md)): `void`  |
| 设置可见性|
| **[newObject](mw.VirtualJoystickPanel.md#newobject)**(`Outer?`: [`Widget`](mw.Widget.md), `InName?`: `string`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md)  |
| 创建 VirtualJoystickPanelDesigner 控件|
| **[newObjectAndAdd](mw.VirtualJoystickPanel.md#newobjectandadd)**(`InCanvas?`: [`Canvas`](mw.Canvas.md), `Outer?`: [`Widget`](mw.Widget.md), `InName?`: `string`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md)  |
| 创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void`  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean`  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void`  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void`  |
| 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

### activeOpacity <Score text="activeOpacity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **activeOpacity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **activeOpacity**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回激活时的透明度


#### Returns

| `number` | 返回激活时的透明度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置激活时的透明度


#### Parameters

| `Value` `number` | 透明度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### backgroundDisabledImageId <Score text="backgroundDisabledImageId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **backgroundDisabledImageId**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **backgroundDisabledImageId**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回背景图片禁用状态图片id


#### Returns

| `string` | 返回背景图片禁用状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置背景图片禁用状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### backgroundImageDesigner <Score text="backgroundImageDesigner" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **backgroundImageDesigner**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **backgroundImageDesigner**(`inImage`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回输入的背景贴图设置，包括 普通的 点击的  不启用的


#### Returns

| [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 返回输入的背景贴图设置，包括 普通的 点击的  不启用的 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置输入的背景贴图设置，包括 普通的 点击的 不启用的


#### Parameters

| `inImage` [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 背景贴图设置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### backgroundImageId <Score text="backgroundImageId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **backgroundImageId**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **backgroundImageId**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回中心图片普通状态图片id


#### Returns

| `string` | 返回中心图片普通状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置背景图片普通状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### backgroundImageSize <Score text="backgroundImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **backgroundImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **backgroundImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


摇杆背景图片大小


#### Returns

| [`Vector2`](mw.Vector2.md) | 摇杆背景图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


摇杆背景图片大小


#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 摇杆背景图片大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### backgroundTouchImageId <Score text="backgroundTouchImageId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **backgroundTouchImageId**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **backgroundTouchImageId**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回背景图片按压状态图片id


#### Returns

| `string` | 返回背景图片按压状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置背景图片按压状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### center <Score text="center" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **center**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **center**(`inValue`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回输入的是摇杆中心位置，  不符合预期会返回默认值


#### Returns

| [`Vector2`](mw.Vector2.md) | 回输入的是摇杆中心位置，  不符合预期会返回默认值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置输入的中心位置


#### Parameters

| `inValue` [`Vector2`](mw.Vector2.md) | 新的中心位置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### centerDisableImageId <Score text="centerDisableImageId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **centerDisableImageId**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **centerDisableImageId**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回中心图片禁用状态图片id


#### Returns

| `string` | 返回中心图片禁用状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置中心图片禁用状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### centerImageDesigner <Score text="centerImageDesigner" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **centerImageDesigner**(): [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **centerImageDesigner**(`inImage`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Returns

| [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 返回中心贴图设置 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置输入的中心贴图设置，包括 普通的 点击的  不启用的


#### Parameters

| `inImage` [`JoystickStyleDesigner`](mw.JoystickStyleDesigner.md) | 中心贴图设置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### centerImageId <Score text="centerImageId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **centerImageId**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **centerImageId**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回中心图片普通状态图片id


#### Returns

| `string` | 返回中心图片普通状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


设置中心图片普通状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### centerImageSize <Score text="centerImageSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **centerImageSize**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **centerImageSize**(`inSize`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


摇杆按钮图片大小


#### Returns

| [`Vector2`](mw.Vector2.md) | 摇杆按钮图片大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


摇杆按钮图片大小


#### Parameters

| `inSize` [`Vector2`](mw.Vector2.md) | 摇杆按钮图片大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### centerTouchImage <Score text="centerTouchImage" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **centerTouchImage**(): `string` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **centerTouchImage**(`id`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回中心图片按压状态图片id


#### Returns

| `string` | 返回中心图片按压状态图片id |
| :------ | :------ |


</td>
<td style="text-align: left">


置中心图片按压状态图片id


#### Parameters

| `id` `string` | 资源id |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### controlByMouseEnable <Score text="controlByMouseEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **controlByMouseEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **controlByMouseEnable**(`controlByMouse`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否被鼠标控制，只作用于PC端


#### Returns

| `boolean` | 是否被鼠标控制 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否被鼠标控制，只作用于PC端


#### Parameters

| `controlByMouse` `boolean` |  是否被鼠标控制 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### controlType <Score text="controlType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **controlType**(): [`CameraControlType`](../enums/mw.CameraControlType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **controlType**(`NewControlType`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回输入的是摇杆类型，  不符合预期会返回默认值


#### Returns

| [`CameraControlType`](../enums/mw.CameraControlType.md) | 返回输入的摇杆类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置输入的摇杆类型，人物的移动和技能摇杆的移动类型


#### Parameters

| `NewControlType` [`CameraControlType`](../enums/mw.CameraControlType.md) | 摇杆类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### inActiveOpacity <Score text="inActiveOpacity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **inActiveOpacity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **inActiveOpacity**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回未激活时的透明度


#### Returns

| `number` | 返回未激活时的透明度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置未激活时的透明度


#### Parameters

| `Value` `number` | 透明度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### inputScale <Score text="inputScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **inputScale**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **inputScale**(`inScale`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回输入的输入比例


#### Returns

| [`Vector2`](mw.Vector2.md) | 返回输入的输入比例 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置输入的输入比例


#### Parameters

| `inScale` [`Vector2`](mw.Vector2.md) | 新的输入比例 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isLocationFixed <Score text="isLocationFixed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isLocationFixed**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **isLocationFixed**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


拖动后，是否固定摇杆位置


#### Returns

| `boolean` | boolean |
| :------ | :------ |


</td>
<td style="text-align: left">


拖动后，是否固定摇杆位置


#### Parameters

| `enable` `boolean` | 是否固定摇杆位置 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### onInputDir <Score text="onInputDir" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onInputDir**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


输入移动事件


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`vec`: [`Vector2`](mw.Vector2.md)) => `void`\> | 输入移动事件 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onJoyStickDown <Score text="onJoyStickDown" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onJoyStickDown**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


摇杆按下事件的代理


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 按下摇杆事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onJoyStickUp <Score text="onJoyStickUp" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onJoyStickUp**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


摇杆抬起事件的代理


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 抬起摇杆事件的代理 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### timeUntilInactive <Score text="timeUntilInactive" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **timeUntilInactive**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **timeUntilInactive**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


进入未激活状态的时间


#### Returns

| `number` | 进入未激活状态的时间，以秒为单位 |
| :------ | :------ |


</td>
<td style="text-align: left">


进入未激活状态的时间


#### Parameters

| `Value` `number` | 进入未激活状态的时间，以秒为单位 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### timeUntilReset <Score text="timeUntilReset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **timeUntilReset**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **timeUntilReset**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


释放摇杆后的复位时间


#### Returns

| `number` | 复位时间  以秒为单位 |
| :------ | :------ |


</td>
<td style="text-align: left">


释放摇杆后的复位时间


#### Parameters

| `Value` `number` | 复位时间 以秒为单位 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



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

| `Visibility` [`SlateVisibility`](../enums/mw.SlateVisibility.md) | 可见性 |
| :------ | :------ |



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`Outer?`, `InName?`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <Badge type="tip" text="client" />

创建 VirtualJoystickPanelDesigner 控件

#### Parameters

| `Outer?` [`Widget`](mw.Widget.md) | 创建控件的外Outer对象 default:null |
| :------ | :------ |
| `InName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) | 返回创建的控件 |
| :------ | :------ |


___

### newObjectAndAdd <Score text="newObjectAndAdd" /> 

• `Static` **newObjectAndAdd**(`InCanvas?`, `Outer?`, `InName?`): [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) <Badge type="tip" text="client" />

创建TouchPad控件 当Outer和InName与已有的对象相同时，旧的对象会被销毁

#### Parameters

| `InCanvas?` [`Canvas`](mw.Canvas.md) | 父节点 default:null |
| :------ | :------ |
| `Outer?` [`Widget`](mw.Widget.md) | 创建控件的外Outer对象 default:null |
| `InName?` `string` |  创建控件的名称 default: null |

#### Returns

| [`VirtualJoystickPanel`](mw.VirtualJoystickPanel.md) | 返回创建的对象 |
| :------ | :------ |

