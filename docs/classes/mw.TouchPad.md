[界面](../groups/界面.界面.md) / TouchPad

# TouchPad <Badge type="tip" text="Class" /> <Score text="TouchPad" />

摄像机滑动区

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`TouchPad`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[controlByMouseEnable](mw.TouchPad.md#controlbymouseenable)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取是否被鼠标控制，只作用于PC端|
| **[inputScale](mw.TouchPad.md#inputscale)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取移动touchPad的delta的缩放值|


::: details click
### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\> <Badge type="tip" text="client" />  |
| 获取控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否可用|
| **[guid](mw.Widget.md#guid)**(): `string` <Badge type="tip" text="client" />  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string` <Badge type="tip" text="client" />  |
| 获取名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| 获取控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number` <Badge type="tip" text="client" />  |
| 获取渲染透明度|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number` <Badge type="tip" text="client" />  |
| 获取渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\> <Badge type="tip" text="client" />  |
| 得到控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md) <Badge type="tip" text="client" />  |
| 获取可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean` <Badge type="tip" text="client" />  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number` <Badge type="tip" text="client" />  |
| 获取zorder|
:::


### Methods <Score text="Methods" /> 
| **[newObject](mw.TouchPad.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `InName?`: `string`): [`TouchPad`](mw.TouchPad.md) <Badge type="tip" text="client" />  |
| :-----|
| 创建 TouchPad 控件|


::: details click
### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <Badge type="tip" text="client" />  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <Badge type="tip" text="client" />  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

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


获取移动touchPad的delta的缩放值

#### Returns

| [`Vector2`](mw.Vector2.md) | 返回移动touchPad的delta的缩放值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置移动touchPad的delta的缩放值

#### Parameters

| `inScale` [`Vector2`](mw.Vector2.md) | 缩放值 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `InName?`): [`TouchPad`](mw.TouchPad.md) <Badge type="tip" text="client" />

创建 TouchPad 控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外Outer对象 default:null |
| :------ | :------ |
| `InName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`TouchPad`](mw.TouchPad.md) | 返回创建的控件 |
| :------ | :------ |

当parent和inName与已有的对象相同时，旧的对象会被销毁
