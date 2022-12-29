[UI](../modules/UI.UI.md) / ScrollBox

# ScrollBox <Badge type="tip" text="Class" />

**`Description`**

滑动框

## Hierarchy

- [`PanelWidget`](UI.UI.PanelWidget.md)

  ↳ **`ScrollBox`**

## Table of contents

| Properties |
| :-----|
| **[brushMargin](UI.UI.ScrollBox.md#brushmargin)**: `any` <br> 临时变量|
| **[tempUEMargin](UI.UI.ScrollBox.md#tempuemargin)**: `any` <br> 临时变量|

| Accessors |
| :-----|
| **[allowOverscroll](UI.UI.ScrollBox.md#allowoverscroll)**(`boolean`): `void` <br> 设置允许滚动超过滚动框大小|
| **[alwaysShowScrollBar](UI.UI.ScrollBox.md#alwaysshowscrollbar)**(`boolean`): `void` <br> 设置是否一直显示滚动条|
| **[animationType](UI.UI.ScrollBox.md#animationtype)**(): [`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md) <br> 获取动画类型|
| **[autoSizeEnable](UI.UI.ScrollBox.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.UI.ScrollBox.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[constraints](UI.UI.ScrollBox.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[defaultLocation](UI.UI.ScrollBox.md#defaultlocation)**(): [`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md) <br> 返回滚动条的默认位置(类型，非具体坐标)|
| **[desiredSize](UI.UI.ScrollBox.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小|
| **[elasticMultiplier](UI.UI.ScrollBox.md#elasticmultiplier)**(): `number` <br> 获取弹性系数|
| **[enable](UI.UI.ScrollBox.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](UI.UI.ScrollBox.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.UI.ScrollBox.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[isScrollBarAlwaysShown](UI.UI.ScrollBox.md#isscrollbaralwaysshown)**(): `boolean` <br> 获取是否一直显示滚动条|
| **[name](UI.UI.ScrollBox.md#name)**(): `string` <br> 获取名字|
| **[onScrollEnd](UI.UI.ScrollBox.md#onscrollend)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 滚动结束事件|
| **[onUserScrolled](UI.UI.ScrollBox.md#onuserscrolled)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\> <br> 滚动事件|
| **[orientation](UI.UI.ScrollBox.md#orientation)**(): [`Orientation`](../enums/UI.UI.Orientation.md) <br> 获取滚动方向|
| **[paintSpaceGeometry](UI.UI.ScrollBox.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.UI.ScrollBox.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点|
| **[position](UI.UI.ScrollBox.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.UI.ScrollBox.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.UI.ScrollBox.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.UI.ScrollBox.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.UI.ScrollBox.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.UI.ScrollBox.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点|
| **[scrollAxisBrushDrawType](UI.UI.ScrollBox.md#scrollaxisbrushdrawtype)**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) <br> 获取滚动条图片绘制类型|
| **[scrollAxisBrushGuid](UI.UI.ScrollBox.md#scrollaxisbrushguid)**(): `string` <br> 获取滚动条图片ID|
| **[scrollAxisBrushMargin](UI.UI.ScrollBox.md#scrollaxisbrushmargin)**(): [`Margin`](UI.UI.Margin.md) <br> 获取滚动条图片边距|
| **[scrollAxisColor](UI.UI.ScrollBox.md#scrollaxiscolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取滚动条图片颜色|
| **[scrollBarVisibility](UI.UI.ScrollBox.md#scrollbarvisibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取滚动条的显示于隐藏|
| **[scrollOffset](UI.UI.ScrollBox.md#scrolloffset)**(): `number` <br> 获取滚动框偏移|
| **[scrollOffsetFraction](UI.UI.ScrollBox.md#scrolloffsetfraction)**(): `number` <br> 获取滚动框距离底部的偏移比例|
| **[scrollOffsetOfEnd](UI.UI.ScrollBox.md#scrolloffsetofend)**(): `number` <br> 获取滚动框距离底部的偏移|
| **[scrollWheelMultiplier](UI.UI.ScrollBox.md#scrollwheelmultiplier)**(`number`): `void` <br> 设置鼠标滚轮系数|
| **[scrollbarPadding](UI.UI.ScrollBox.md#scrollbarpadding)**([`Margin`](UI.UI.Margin.md)): `void` <br> 设置滚动条边距|
| **[scrollbarThickness](UI.UI.ScrollBox.md#scrollbarthickness)**(`number`): `void` <br> 设置滚动条粗细|
| **[shadowVisibility](UI.UI.ScrollBox.md#shadowvisibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取阴影显示|
| **[size](UI.UI.ScrollBox.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小|
| **[slot](UI.UI.ScrollBox.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[smoothScrollingEnable](UI.UI.ScrollBox.md#smoothscrollingenable)**(`boolean`): `void` <br> 设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑|
| **[supportElastic](UI.UI.ScrollBox.md#supportelastic)**(): `boolean` <br> 判断是否支持惯性|
| **[tickSpaceGeometry](UI.UI.ScrollBox.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.UI.ScrollBox.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.UI.ScrollBox.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.UI.ScrollBox.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.UI.ScrollBox.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[addChild](UI.UI.ScrollBox.md#addchild)**([`Widget`](UI.UI.Widget.md)): `void` <br> 添加子节点|
| **[destroyObject](UI.UI.ScrollBox.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[endInertialScrolling](UI.UI.ScrollBox.md#endinertialscrolling)**(): `void` <br> 立刻停止滚动|
| **[equal](UI.UI.ScrollBox.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[findChildByPath](UI.UI.ScrollBox.md#findchildbypath)**(`string`): [`Widget`](UI.UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.UI.ScrollBox.md#getchildat)**(`number`): [`Widget`](UI.UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.UI.ScrollBox.md#getchildbyname)**<extends [`Widget`](UI.UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.UI.ScrollBox.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[invalidateLayoutAndVolatility](UI.UI.ScrollBox.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeAllChildren](UI.UI.ScrollBox.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.UI.ScrollBox.md#removechild)**([`Widget`](UI.UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.UI.ScrollBox.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
| **[scrollToEnd](UI.UI.ScrollBox.md#scrolltoend)**(): `void` <br> 滚动到底部|
| **[scrollToStart](UI.UI.ScrollBox.md#scrolltostart)**(): `void` <br> 滚动到开始位置|
| **[newObject](UI.UI.ScrollBox.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`ScrollBox`](UI.UI.ScrollBox.md) <br> 创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Properties

### brushMargin

• `Private` **brushMargin**: `any`

**`Description`**

临时变量

___

### tempUEMargin

• `Private` **tempUEMargin**: `any`

**`Description`**

临时变量

## Accessors

### allowOverscroll

• `set` **allowOverscroll**(`isAllowOverscroll`): `void`

**`Description`**

设置允许滚动超过滚动框大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isAllowOverscroll` | `boolean` | 允许滚动超过滚动框大小 |

#### Returns

`void`

___

### alwaysShowScrollBar

• `set` **alwaysShowScrollBar**(`isScrollBarAlwaysShown`): `void`

**`Description`**

设置是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isScrollBarAlwaysShown` | `boolean` | 是否一直显示滚动条 |

#### Returns

`void`

___

### animationType

• `get` **animationType**(): [`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md)

**`Description`**

获取动画类型

**`Effect`**

只在客户端调用生效

#### Returns

[`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md)

动画类型

• `set` **animationType**(`inAnimationType`): `void`

**`Description`**

设定动画类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAnimationType` | [`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md) | 类型 |

#### Returns

`void`

动画类型

___

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

___

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

___

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | 控件的布局 |

#### Returns

`void`

___

### defaultLocation

• `get` **defaultLocation**(): [`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md)

**`Description`**

返回滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Returns

[`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md)

返回滚动条的默认位置(类型，非具体坐标)

• `set` **defaultLocation**(`NewDefaultLocation`): `void`

**`Description`**

设置滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewDefaultLocation` | [`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md) | 滚动条默认位置(类型，非具体坐标) |

#### Returns

`void`

___

### desiredSize

• `get` **desiredSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取期望大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回期望大小

___

### elasticMultiplier

• `get` **elasticMultiplier**(): `number`

**`Description`**

获取弹性系数

**`Effect`**

只在客户端调用生效

#### Returns

`number`

弹性系数

• `set` **elasticMultiplier**(`inElasticMultiplier`): `void`

**`Description`**

设定弹性系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inElasticMultiplier` | `number` | 系数 |

#### Returns

`void`

弹性系数

___

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | 可用性boolean |

#### Returns

`void`

返回设置结果

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件GUID

___

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

___

### isScrollBarAlwaysShown

• `get` **isScrollBarAlwaysShown**(): `boolean`

**`Description`**

获取是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否一直显示滚动条

___

### name

• `get` **name**(): `string`

**`Description`**

获取名字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回名字

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`void`

___

### onScrollEnd

• `get` **onScrollEnd**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

滚动结束事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

滚动结束事件

___

### onUserScrolled

• `get` **onUserScrolled**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

**`Description`**

滚动事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

滚动事件

___

### orientation

• `get` **orientation**(): [`Orientation`](../enums/UI.UI.Orientation.md)

**`Description`**

获取滚动方向

**`Effect`**

只在客户端调用生效

#### Returns

[`Orientation`](../enums/UI.UI.Orientation.md)

滚动方向

• `set` **orientation**(`inOrientation`): `void`

**`Description`**

设置滚动方向

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inOrientation` | [`Orientation`](../enums/UI.UI.Orientation.md) | 方向 |

#### Returns

`void`

滚动方向

___

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染Widget的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染Widget的几何信息

___

### parent

• `get` **parent**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取父节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

返回父节点

___

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | 控件的位置 |

#### Returns

`void`

___

### renderOpacity

• `get` **renderOpacity**(): `number`

**`Description`**

获取渲染透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染透明度

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | 透明度 |

#### Returns

`void`

___

### renderScale

• `get` **renderScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染缩放

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染缩放

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | 渲染缩放 |

#### Returns

`void`

___

### renderShear

• `get` **renderShear**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染错切形变

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染错切形变

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | 渲染错切形变 |

#### Returns

`void`

___

### renderTransformAngle

• `get` **renderTransformAngle**(): `number`

**`Description`**

获取渲染的角度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染角度

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | 渲染角度 |

#### Returns

`void`

___

### renderTransformPivot

• `get` **renderTransformPivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染锚点

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | 渲染锚点 |

#### Returns

`void`

___

### scrollAxisBrushDrawType

• `get` **scrollAxisBrushDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取滚动条图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

图片绘制类型

• `set` **scrollAxisBrushDrawType**(`InDrawAs`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDrawAs` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | 图片绘制类型 |

#### Returns

`void`

___

### scrollAxisBrushGuid

• `get` **scrollAxisBrushGuid**(): `string`

**`Description`**

获取滚动条图片ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

滚动条图片ID

• `set` **scrollAxisBrushGuid**(`InGUID`): `void`

**`Description`**

设置滚动条图片ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGUID` | `string` | 图片ID |

#### Returns

`void`

___

### scrollAxisBrushMargin

• `get` **scrollAxisBrushMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

滚动条图片边距

• `set` **scrollAxisBrushMargin**(`InMargin`): `void`

**`Description`**

设置滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InMargin` | [`Margin`](UI.UI.Margin.md) | 滚动条图片边距 |

#### Returns

`void`

___

### scrollAxisColor

• `get` **scrollAxisColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

滚动条图片颜色，Type.LinearColor类型，数据范围0~1

• `set` **scrollAxisColor**(`InColor`): `void`

**`Description`**

设置滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InColor` | [`LinearColor`](Type.Type.LinearColor.md) | 滚动条图片颜色，Type.LinearColor类型，数据范围0~1 |

#### Returns

`void`

___

### scrollBarVisibility

• `get` **scrollBarVisibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取滚动条的显示于隐藏

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

滚动条的显示于隐藏

• `set` **scrollBarVisibility**(`inScrollBarVisibility`): `void`

**`Description`**

设置滚动条是否可见,必须是在SetAlwaysShowScrollbar 为false才生效

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollBarVisibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 滚动条是否可见 |

#### Returns

`void`

___

### scrollOffset

• `get` **scrollOffset**(): `number`

**`Description`**

获取滚动框偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

• `set` **scrollOffset**(`inScrollOffset`): `void`

**`Description`**

设定滚动框滚动偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollOffset` | `number` | 滚动偏移 |

#### Returns

`void`

___

### scrollOffsetFraction

• `get` **scrollOffsetFraction**(): `number`

**`Description`**

获取滚动框距离底部的偏移比例

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移比例

___

### scrollOffsetOfEnd

• `get` **scrollOffsetOfEnd**(): `number`

**`Description`**

获取滚动框距离底部的偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

___

### scrollWheelMultiplier

• `set` **scrollWheelMultiplier**(`inScrollWheelMultiplier`): `void`

**`Description`**

设置鼠标滚轮系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollWheelMultiplier` | `number` | 系数 |

#### Returns

`void`

鼠标滚轮系数

___

### scrollbarPadding

• `set` **scrollbarPadding**(`inScrollbarPadding`): `void`

**`Description`**

设置滚动条边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarPadding` | [`Margin`](UI.UI.Margin.md) | 滚动条边距 |

#### Returns

`void`

___

### scrollbarThickness

• `set` **scrollbarThickness**(`inScrollbarThickness`): `void`

**`Description`**

设置滚动条粗细

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inScrollbarThickness` | `number` | 滚动条粗细 |

#### Returns

`void`

___

### shadowVisibility

• `get` **shadowVisibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取阴影显示

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

阴影显示

• `set` **shadowVisibility**(`inVisibility`): `void`

**`Description`**

设定阴影显示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) |  阴影显示 |

#### Returns

`void`

阴影显示

___

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | 输入大小 |

#### Returns

`void`

___

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取插槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回插槽

___

### smoothScrollingEnable

• `set` **smoothScrollingEnable**(`isSmoothScrolling`): `void`

**`Description`**

设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSmoothScrolling` | `boolean` | 鼠标滚动时，滚动速度是否插值运算 |

#### Returns

`void`

___

### supportElastic

• `get` **supportElastic**(): `boolean`

**`Description`**

判断是否支持惯性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否支持惯性

• `set` **supportElastic**(`inSupportElastic`): `void`

**`Description`**

设定是否支持惯性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSupportElastic` | `boolean` | 惯性 |

#### Returns

`void`

是否支持惯性

___

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动Widget Tick的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动Widget Tick的几何信息

___

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置 |

#### Returns

`void`

___

### visibility

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取可见性

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

返回可见性

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | 可见性 |

#### Returns

`void`

___

### visible

• `get` **visible**(): `boolean`

**`Description`**

是否可见

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

___

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | 值越大在越上层 |

#### Returns

`void`

## Methods

### addChild

▸ **addChild**(`child`): `void`

**`Description`**

添加子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.UI.Widget.md) | 子控件 |

#### Returns

`void`

___

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### endInertialScrolling

▸ **endInertialScrolling**(): `void`

**`Description`**

立刻停止滚动

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`Widget`](UI.UI.Widget.md) | 需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

___

### findChildByPath

▸ **findChildByPath**(`inPath`): [`Widget`](UI.UI.Widget.md)

**`Description`**

通过相对路径查找节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 查找路径 |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

___

### getChildAt

▸ **getChildAt**(`index`): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取第几位子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

___

### getChildByName

▸ **getChildByName**<`T`\>(`name`): `T`

**`Description`**

通过名字查找节点

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Widget`](UI.UI.Widget.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`T`

找到的控件

___

### getChildrenCount

▸ **getChildrenCount**(): `number`

**`Description`**

获取子节点数量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

子节点数量

___

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### removeAllChildren

▸ **removeAllChildren**(): `void`

**`Description`**

清除所有子节点,会销毁UI无法再使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### removeChild

▸ **removeChild**(`child`): `void`

**`Description`**

移除节点,会销毁UI无法在使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.UI.Widget.md) | 需要移除的子控件 |

#### Returns

`void`

___

### removeChildAt

▸ **removeChildAt**(`index`): `void`

**`Description`**

移除第几个节点,会销毁UI无法再使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

#### Returns

`void`

___

### scrollToEnd

▸ **scrollToEnd**(): `void`

**`Description`**

滚动到底部

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### scrollToStart

▸ **scrollToStart**(): `void`

**`Description`**

滚动到开始位置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ScrollBox`](UI.UI.ScrollBox.md)

**`Description`**

创建 ScrollBox 控件，当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`ScrollBox`](UI.UI.ScrollBox.md)

创建的对象
