[GUI](../groups/GUI.GUI.md) / TouchPad

# TouchPad <Badge type="tip" text="Class" /> <Score text="TouchPad" />

摄像机滑动区

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`TouchPad`**

## Table of contents

| Accessors |
| :-----|
| **[controlByMouseEnable](UI.TouchPad.md#controlbymouseenable)**(): `boolean` <br> 获取是否被鼠标控制，只作用于PC端|
| **[inputScale](UI.TouchPad.md#inputscale)**(): [`Vector2`](Type.Vector2.md) <br> 获取移动touchPad的delta的缩放值|


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
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[newObject](UI.TouchPad.md#newobject)**(`parent?`: [`Canvas`](UI.Canvas.md), `InName?`: `string`): [`TouchPad`](UI.TouchPad.md) <br> 创建 TouchPad 控件,当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**(`that`: [`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


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

### inputScale <Score text="inputScale" /> 

• `get` **inputScale**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取移动touchPad的delta的缩放值


#### Returns

[`Vector2`](Type.Vector2.md)

返回移动touchPad的delta的缩放值

• `set` **inputScale**(`inScale`): `void` <Badge type="tip" text="client" />

设置移动touchPad的delta的缩放值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScale` | [`Vector2`](Type.Vector2.md) | 缩放值 |



## Methods
___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `InName?`): [`TouchPad`](UI.TouchPad.md) <Badge type="tip" text="client" />

创建 TouchPad 控件,当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Outer对象 default:null |
| `InName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`TouchPad`](UI.TouchPad.md)

返回创建的控件
