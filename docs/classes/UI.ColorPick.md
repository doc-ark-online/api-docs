[UI](../modules/UI.UI.md) / ColorPick

# ColorPick <Badge type="tip" text="Class" /> 

**`Description`**

颜色选择器

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`ColorPick`**

## Table of contents

| Accessors |
| :-----|
| **[color](UI.ColorPick.md#color)**([`LinearColor`](Type.LinearColor.md)): `void` <br> 设置color picker的颜色|
| **[imageGuid](UI.ColorPick.md#imageguid)**(`string` |): `void` <br> 设置color picker 的图片|
| **[onColorChangeFinished](UI.ColorPick.md#oncolorchangefinished)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 颜色改变完成时触发的函数代理|
| **[onColorChanged](UI.ColorPick.md#oncolorchanged)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 颜色改变时触发的代理|
| **[onTouchFinished](UI.ColorPick.md#ontouchfinished)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 点击完成时触发的代理函数|
| **[onTouchStart](UI.ColorPick.md#ontouchstart)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <br> 点击时触发的代理|


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
| **[newObject](UI.ColorPick.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`ColorPick`](UI.ColorPick.md) <br> 创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
:::


## Accessors

### color  

• `set` **color**(`inColor`): `void`

**`Description`**

设置color picker的颜色 <Badge type="tip" text="other" />


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](Type.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |



### imageGuid  

• `set` **imageGuid**(`inGuid`): `void` <Badge type="tip" text="other" />

**`Description`**

设置color picker 的图片


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |



### onColorChangeFinished  

• `get` **onColorChangeFinished**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <Badge type="tip" text="other" />

**`Description`**

颜色改变完成时触发的函数代理


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onColorChanged  

• `get` **onColorChanged**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <Badge type="tip" text="other" />

**`Description`**

颜色改变时触发的代理


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchFinished  

• `get` **onTouchFinished**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <Badge type="tip" text="other" />

**`Description`**

点击完成时触发的代理函数


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchStart  

• `get` **onTouchStart**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\> <Badge type="tip" text="other" />

**`Description`**

点击时触发的代理


#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: [`LinearColor`](Type.LinearColor.md)) => `void`\>

返回事件的代理


## Methods

### newObject  

▸ `Static` **newObject**(`parent?`, `inName?`): [`ColorPick`](UI.ColorPick.md) <Badge type="tip" text="other" />

**`Description`**

创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ColorPick`](UI.ColorPick.md)

返回创建的对象
