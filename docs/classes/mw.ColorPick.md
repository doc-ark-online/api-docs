[Ui](../groups/Core.Ui.md) / ColorPick

# ColorPick <Badge type="tip" text="Class" /> <Score text="ColorPick" />

颜色选择器

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`ColorPick`**

## Table of contents

| Accessors |
| :-----|
| **[color](mw.ColorPick.md#color)**(`inColor`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 设置color picker的颜色|
| **[imageGuid](mw.ColorPick.md#imageguid)**(`inGuid`: `string`): `void` <br> 设置color picker 的图片|
| **[onColorChangeFinished](mw.ColorPick.md#oncolorchangefinished)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <br> 颜色改变完成时触发的函数代理|
| **[onColorChanged](mw.ColorPick.md#oncolorchanged)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <br> 颜色改变时触发的代理|
| **[onTouchFinished](mw.ColorPick.md#ontouchfinished)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <br> 点击完成时触发的代理函数|
| **[onTouchStart](mw.ColorPick.md#ontouchstart)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <br> 点击时触发的代理|


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
| **[newObject](mw.ColorPick.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`ColorPick`](mw.ColorPick.md) <br> 创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### color <Score text="color" /> 

• `set` **color**(`inColor`): `void` <Badge type="tip" text="client" />

设置color picker的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inColor` | [`LinearColor`](mw.LinearColor.md) | 输入的颜色，Type.LinearColor类型，数据范围0~1 |


___

### imageGuid <Score text="imageGuid" /> 

• `set` **imageGuid**(`inGuid`): `void` <Badge type="tip" text="client" />

设置color picker 的图片


#### Parameters

| Name | Type |
| :------ | :------ |
| `inGuid` | `string` |


___

### onColorChangeFinished <Score text="onColorChangeFinished" /> 

• `get` **onColorChangeFinished**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <Badge type="tip" text="client" />

颜色改变完成时触发的函数代理


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\>

返回事件的代理

___

### onColorChanged <Score text="onColorChanged" /> 

• `get` **onColorChanged**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <Badge type="tip" text="client" />

颜色改变时触发的代理


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchFinished <Score text="onTouchFinished" /> 

• `get` **onTouchFinished**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <Badge type="tip" text="client" />

点击完成时触发的代理函数


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\>

返回事件的代理

___

### onTouchStart <Score text="onTouchStart" /> 

• `get` **onTouchStart**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\> <Badge type="tip" text="client" />

点击时触发的代理


#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`LinearColor`](mw.LinearColor.md)) => `void`\>

返回事件的代理


## Methods
___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`ColorPick`](mw.ColorPick.md) <Badge type="tip" text="client" />

创建 ColorPick 控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ColorPick`](mw.ColorPick.md)

返回创建的对象
