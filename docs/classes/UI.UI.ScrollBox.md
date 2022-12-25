[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / ScrollBox

# Class: ScrollBox

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).ScrollBox

**`Author`**

jie.wu

**`Description`**

滑动框

**`Network Status`**

usage:客户端

## Hierarchy

- [`PanelWidget`](UI.UI.PanelWidget.md)

  ↳ **`ScrollBox`**

## Table of contents

### Constructors

- [constructor](UI.UI.ScrollBox.md#constructor)

### Properties

- [brushMargin](UI.UI.ScrollBox.md#brushmargin)
- [tempUEMargin](UI.UI.ScrollBox.md#tempuemargin)

### Accessors

- [allowOverscroll](UI.UI.ScrollBox.md#allowoverscroll)
- [alwaysShowScrollBar](UI.UI.ScrollBox.md#alwaysshowscrollbar)
- [animationType](UI.UI.ScrollBox.md#animationtype)
- [autoSizeEnable](UI.UI.ScrollBox.md#autosizeenable)
- [cachedGeometry](UI.UI.ScrollBox.md#cachedgeometry)
- [constraints](UI.UI.ScrollBox.md#constraints)
- [defaultLocation](UI.UI.ScrollBox.md#defaultlocation)
- [desiredSize](UI.UI.ScrollBox.md#desiredsize)
- [elasticMultiplier](UI.UI.ScrollBox.md#elasticmultiplier)
- [enable](UI.UI.ScrollBox.md#enable)
- [guid](UI.UI.ScrollBox.md#guid)
- [isHovered](UI.UI.ScrollBox.md#ishovered)
- [isScrollBarAlwaysShown](UI.UI.ScrollBox.md#isscrollbaralwaysshown)
- [name](UI.UI.ScrollBox.md#name)
- [onScrollEnd](UI.UI.ScrollBox.md#onscrollend)
- [onUserScrolled](UI.UI.ScrollBox.md#onuserscrolled)
- [orientation](UI.UI.ScrollBox.md#orientation)
- [paintSpaceGeometry](UI.UI.ScrollBox.md#paintspacegeometry)
- [parent](UI.UI.ScrollBox.md#parent)
- [position](UI.UI.ScrollBox.md#position)
- [renderOpacity](UI.UI.ScrollBox.md#renderopacity)
- [renderScale](UI.UI.ScrollBox.md#renderscale)
- [renderShear](UI.UI.ScrollBox.md#rendershear)
- [renderTransformAngle](UI.UI.ScrollBox.md#rendertransformangle)
- [renderTransformPivot](UI.UI.ScrollBox.md#rendertransformpivot)
- [scrollAxisBrushDrawType](UI.UI.ScrollBox.md#scrollaxisbrushdrawtype)
- [scrollAxisBrushGuid](UI.UI.ScrollBox.md#scrollaxisbrushguid)
- [scrollAxisBrushMargin](UI.UI.ScrollBox.md#scrollaxisbrushmargin)
- [scrollAxisColor](UI.UI.ScrollBox.md#scrollaxiscolor)
- [scrollBarVisibility](UI.UI.ScrollBox.md#scrollbarvisibility)
- [scrollOffset](UI.UI.ScrollBox.md#scrolloffset)
- [scrollOffsetFraction](UI.UI.ScrollBox.md#scrolloffsetfraction)
- [scrollOffsetOfEnd](UI.UI.ScrollBox.md#scrolloffsetofend)
- [scrollWheelMultiplier](UI.UI.ScrollBox.md#scrollwheelmultiplier)
- [scrollbarPadding](UI.UI.ScrollBox.md#scrollbarpadding)
- [scrollbarThickness](UI.UI.ScrollBox.md#scrollbarthickness)
- [shadowVisibility](UI.UI.ScrollBox.md#shadowvisibility)
- [size](UI.UI.ScrollBox.md#size)
- [slot](UI.UI.ScrollBox.md#slot)
- [smoothScrollingEnable](UI.UI.ScrollBox.md#smoothscrollingenable)
- [supportElastic](UI.UI.ScrollBox.md#supportelastic)
- [tickSpaceGeometry](UI.UI.ScrollBox.md#tickspacegeometry)
- [transform](UI.UI.ScrollBox.md#transform)
- [visibility](UI.UI.ScrollBox.md#visibility)
- [visible](UI.UI.ScrollBox.md#visible)
- [zOrder](UI.UI.ScrollBox.md#zorder)

### Methods

- [addChild](UI.UI.ScrollBox.md#addchild)
- [destroyObject](UI.UI.ScrollBox.md#destroyobject)
- [endInertialScrolling](UI.UI.ScrollBox.md#endinertialscrolling)
- [equal](UI.UI.ScrollBox.md#equal)
- [findChildByPath](UI.UI.ScrollBox.md#findchildbypath)
- [getChildAt](UI.UI.ScrollBox.md#getchildat)
- [getChildByName](UI.UI.ScrollBox.md#getchildbyname)
- [getChildrenCount](UI.UI.ScrollBox.md#getchildrencount)
- [invalidateLayoutAndVolatility](UI.UI.ScrollBox.md#invalidatelayoutandvolatility)
- [removeAllChildren](UI.UI.ScrollBox.md#removeallchildren)
- [removeChild](UI.UI.ScrollBox.md#removechild)
- [removeChildAt](UI.UI.ScrollBox.md#removechildat)
- [scrollToEnd](UI.UI.ScrollBox.md#scrolltoend)
- [scrollToStart](UI.UI.ScrollBox.md#scrolltostart)
- [newObject](UI.UI.ScrollBox.md#newobject)

## Constructors

### constructor

• **new ScrollBox**()

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[constructor](UI.UI.PanelWidget.md#constructor)

## Properties

### brushMargin

• `Private` **brushMargin**: `any`

**`Description`**

临时变量

#### Defined in

UI/index.d.ts:1678

---

### tempUEMargin

• `Private` **tempUEMargin**: `any`

**`Description`**

临时变量

#### Defined in

UI/index.d.ts:1682

## Accessors

### allowOverscroll

• `set` **allowOverscroll**(`isAllowOverscroll`): `void`

**`Description`**

设置允许滚动超过滚动框大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description                  |
| :------------------ | :-------- | :--------------------------- |
| `isAllowOverscroll` | `boolean` | usage:允许滚动超过滚动框大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1534

---

### alwaysShowScrollBar

• `set` **alwaysShowScrollBar**(`isScrollBarAlwaysShown`): `void`

**`Description`**

设置是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                     | Type      | Description              |
| :----------------------- | :-------- | :----------------------- |
| `isScrollBarAlwaysShown` | `boolean` | usage:是否一直显示滚动条 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1522

---

### animationType

• `get` **animationType**(): [`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md)

**`Description`**

获取动画类型

**`Effect`**

只在客户端调用生效

#### Returns

[`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md)

动画类型

#### Defined in

UI/index.d.ts:1604

• `set` **animationType**(`inAnimationType`): `void`

**`Description`**

设定动画类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                                     | Description |
| :---------------- | :----------------------------------------------------------------------- | :---------- |
| `inAnimationType` | [`UIScrollBoxAnimationType`](../enums/UI.UI.UIScrollBoxAnimationType.md) | usage:类型  |

#### Returns

`void`

动画类型

#### Defined in

UI/index.d.ts:1611

---

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Inherited from

PanelWidget.autoSizeEnable

#### Defined in

UI/index.d.ts:4987

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Inherited from

PanelWidget.autoSizeEnable

#### Defined in

UI/index.d.ts:4981

---

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的 GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

#### Inherited from

PanelWidget.cachedGeometry

#### Defined in

UI/index.d.ts:4897

---

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

#### Inherited from

PanelWidget.constraints

#### Defined in

UI/index.d.ts:4939

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description      |
| :---------------- | :---------------------------------------------------- | :--------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:控件的布局 |

#### Returns

`void`

#### Inherited from

PanelWidget.constraints

#### Defined in

UI/index.d.ts:4933

---

### defaultLocation

• `get` **defaultLocation**(): [`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md)

**`Description`**

返回滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Returns

[`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md)

返回滚动条的默认位置(类型，非具体坐标)

#### Defined in

UI/index.d.ts:1598

• `set` **defaultLocation**(`NewDefaultLocation`): `void`

**`Description`**

设置滚动条的默认位置(类型，非具体坐标)

**`Effect`**

没有操作滚动条的情况下滚动条的默认位置

#### Parameters

| Name                 | Type                                                                     | Description                            |
| :------------------- | :----------------------------------------------------------------------- | :------------------------------------- |
| `NewDefaultLocation` | [`ScrollBarDefaultLocation`](../enums/UI.UI.ScrollBarDefaultLocation.md) | usage:滚动条默认位置(类型，非具体坐标) |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1592

---

### desiredSize

• `get` **desiredSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取期望大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回期望大小

#### Inherited from

PanelWidget.desiredSize

#### Defined in

UI/index.d.ts:4831

---

### elasticMultiplier

• `get` **elasticMultiplier**(): `number`

**`Description`**

获取弹性系数

**`Effect`**

只在客户端调用生效

#### Returns

`number`

弹性系数

#### Defined in

UI/index.d.ts:1617

• `set` **elasticMultiplier**(`inElasticMultiplier`): `void`

**`Description`**

设定弹性系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                  | Type     | Description |
| :-------------------- | :------- | :---------- |
| `inElasticMultiplier` | `number` | usage:系数  |

#### Returns

`void`

弹性系数

#### Defined in

UI/index.d.ts:1624

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

PanelWidget.enable

#### Defined in

UI/index.d.ts:4807

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description          |
| :--------- | :-------- | :------------------- |
| `isEnable` | `boolean` | usage:可用性 boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

PanelWidget.enable

#### Defined in

UI/index.d.ts:4814

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件 GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件 GUID

#### Inherited from

PanelWidget.guid

#### Defined in

UI/index.d.ts:4915

---

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是 hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

PanelWidget.isHovered

#### Defined in

UI/index.d.ts:4820

---

### isScrollBarAlwaysShown

• `get` **isScrollBarAlwaysShown**(): `boolean`

**`Description`**

获取是否一直显示滚动条

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否一直显示滚动条

#### Defined in

UI/index.d.ts:1528

---

### name

• `get` **name**(): `string`

**`Description`**

获取名字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回名字

#### Inherited from

PanelWidget.name

#### Defined in

UI/index.d.ts:4783

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`void`

#### Inherited from

PanelWidget.name

#### Defined in

UI/index.d.ts:4777

---

### onScrollEnd

• `get` **onScrollEnd**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

滚动结束事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

滚动结束事件

#### Defined in

UI/index.d.ts:1479

---

### onUserScrolled

• `get` **onUserScrolled**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

**`Description`**

滚动事件

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`currentOffset`: `number`) => `void`\>

滚动事件

#### Defined in

UI/index.d.ts:1471

---

### orientation

• `get` **orientation**(): [`Orientation`](../enums/UI.UI.Orientation.md)

**`Description`**

获取滚动方向

**`Effect`**

只在客户端调用生效

#### Returns

[`Orientation`](../enums/UI.UI.Orientation.md)

滚动方向

#### Defined in

UI/index.d.ts:1492

• `set` **orientation**(`inOrientation`): `void`

**`Description`**

设置滚动方向

**`Effect`**

只在客户端调用生效

#### Parameters

| Name            | Type                                           | Description |
| :-------------- | :--------------------------------------------- | :---------- |
| `inOrientation` | [`Orientation`](../enums/UI.UI.Orientation.md) | usage:方向  |

#### Returns

`void`

滚动方向

#### Defined in

UI/index.d.ts:1486

---

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染 Widget 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染 Widget 的几何信息

#### Inherited from

PanelWidget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4909

---

### parent

• `get` **parent**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取父节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

返回父节点

#### Inherited from

PanelWidget.parent

#### Defined in

UI/index.d.ts:4764

---

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

#### Inherited from

PanelWidget.position

#### Defined in

UI/index.d.ts:4951

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description      |
| :---------------- | :-------------------------------- | :--------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:控件的位置 |

#### Returns

`void`

#### Inherited from

PanelWidget.position

#### Defined in

UI/index.d.ts:4945

---

### renderOpacity

• `get` **renderOpacity**(): `number`

**`Description`**

获取渲染透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染透明度

#### Inherited from

PanelWidget.renderOpacity

#### Defined in

UI/index.d.ts:4891

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderOpacity

#### Defined in

UI/index.d.ts:4885

---

### renderScale

• `get` **renderScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染缩放

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染缩放

#### Inherited from

PanelWidget.renderScale

#### Defined in

UI/index.d.ts:4879

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderScale

#### Defined in

UI/index.d.ts:4873

---

### renderShear

• `get` **renderShear**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染错切形变

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染错切形变

#### Inherited from

PanelWidget.renderShear

#### Defined in

UI/index.d.ts:4867

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description        |
| :------ | :-------------------------------- | :----------------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderShear

#### Defined in

UI/index.d.ts:4861

---

### renderTransformAngle

• `get` **renderTransformAngle**(): `number`

**`Description`**

获取渲染的角度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染角度

#### Inherited from

PanelWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4843

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `o`  | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4837

---

### renderTransformPivot

• `get` **renderTransformPivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染锚点

#### Inherited from

PanelWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4855

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4849

---

### scrollAxisBrushDrawType

• `get` **scrollAxisBrushDrawType**(): [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

**`Description`**

获取滚动条图片绘制类型

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md)

图片绘制类型

#### Defined in

UI/index.d.ts:1674

• `set` **scrollAxisBrushDrawType**(`InDrawAs`): `void`

**`Description`**

设置图片绘制类型

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                         | Description        |
| :--------- | :----------------------------------------------------------- | :----------------- |
| `InDrawAs` | [`SlateBrushDrawType`](../enums/UI.UI.SlateBrushDrawType.md) | usage:图片绘制类型 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1668

---

### scrollAxisBrushGuid

• `get` **scrollAxisBrushGuid**(): `string`

**`Description`**

获取滚动条图片 ID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

滚动条图片 ID

#### Defined in

UI/index.d.ts:1656

• `set` **scrollAxisBrushGuid**(`InGUID`): `void`

**`Description`**

设置滚动条图片 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description   |
| :------- | :------- | :------------ |
| `InGUID` | `string` | usage:图片 ID |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1662

---

### scrollAxisBrushMargin

• `get` **scrollAxisBrushMargin**(): [`Margin`](UI.UI.Margin.md)

**`Description`**

获取滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Returns

[`Margin`](UI.UI.Margin.md)

滚动条图片边距

#### Defined in

UI/index.d.ts:1694

• `set` **scrollAxisBrushMargin**(`InMargin`): `void`

**`Description`**

设置滚动条图片边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                        | Description          |
| :--------- | :-------------------------- | :------------------- |
| `InMargin` | [`Margin`](UI.UI.Margin.md) | usage:滚动条图片边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1688

---

### scrollAxisColor

• `get` **scrollAxisColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

滚动条图片颜色，Type.LinearColor 类型，数据范围 0~1

#### Defined in

UI/index.d.ts:1706

• `set` **scrollAxisColor**(`InColor`): `void`

**`Description`**

设置滚动条图片颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                                      | Description                                               |
| :-------- | :---------------------------------------- | :-------------------------------------------------------- |
| `InColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:滚动条图片颜色，Type.LinearColor 类型，数据范围 0~1 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1700

---

### scrollBarVisibility

• `get` **scrollBarVisibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取滚动条的显示于隐藏

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

滚动条的显示于隐藏

#### Defined in

UI/index.d.ts:1504

• `set` **scrollBarVisibility**(`inScrollBarVisibility`): `void`

**`Description`**

设置滚动条是否可见,必须是在 SetAlwaysShowScrollbar 为 false 才生效

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                    | Type                                                   | Description          |
| :---------------------- | :----------------------------------------------------- | :------------------- |
| `inScrollBarVisibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:滚动条是否可见 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1498

---

### scrollOffset

• `get` **scrollOffset**(): `number`

**`Description`**

获取滚动框偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

#### Defined in

UI/index.d.ts:1564

• `set` **scrollOffset**(`inScrollOffset`): `void`

**`Description`**

设定滚动框滚动偏移

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type     | Description    |
| :--------------- | :------- | :------------- |
| `inScrollOffset` | `number` | usage:滚动偏移 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1558

---

### scrollOffsetFraction

• `get` **scrollOffsetFraction**(): `number`

**`Description`**

获取滚动框距离底部的偏移比例

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移比例

#### Defined in

UI/index.d.ts:1576

---

### scrollOffsetOfEnd

• `get` **scrollOffsetOfEnd**(): `number`

**`Description`**

获取滚动框距离底部的偏移

**`Effect`**

只在客户端调用生效

#### Returns

`number`

滚动框偏移

#### Defined in

UI/index.d.ts:1570

---

### scrollWheelMultiplier

• `set` **scrollWheelMultiplier**(`inScrollWheelMultiplier`): `void`

**`Description`**

设置鼠标滚轮系数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                      | Type     | Description |
| :------------------------ | :------- | :---------- |
| `inScrollWheelMultiplier` | `number` | usage:系数  |

#### Returns

`void`

鼠标滚轮系数

#### Defined in

UI/index.d.ts:1547

---

### scrollbarPadding

• `set` **scrollbarPadding**(`inScrollbarPadding`): `void`

**`Description`**

设置滚动条边距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                 | Type                        | Description      |
| :------------------- | :-------------------------- | :--------------- |
| `inScrollbarPadding` | [`Margin`](UI.UI.Margin.md) | usage:滚动条边距 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1516

---

### scrollbarThickness

• `set` **scrollbarThickness**(`inScrollbarThickness`): `void`

**`Description`**

设置滚动条粗细

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                   | Type     | Description      |
| :--------------------- | :------- | :--------------- |
| `inScrollbarThickness` | `number` | usage:滚动条粗细 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1510

---

### shadowVisibility

• `get` **shadowVisibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取阴影显示

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

阴影显示

#### Defined in

UI/index.d.ts:1650

• `set` **shadowVisibility**(`inVisibility`): `void`

**`Description`**

设定阴影显示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name           | Type                                                   | Description     |
| :------------- | :----------------------------------------------------- | :-------------- |
| `inVisibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage: 阴影显示 |

#### Returns

`void`

阴影显示

#### Defined in

UI/index.d.ts:1644

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Inherited from

PanelWidget.size

#### Defined in

UI/index.d.ts:4963

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:输入大小 |

#### Returns

`void`

#### Inherited from

PanelWidget.size

#### Defined in

UI/index.d.ts:4957

---

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

#### Inherited from

PanelWidget.slot

#### Defined in

UI/index.d.ts:4771

---

### smoothScrollingEnable

• `set` **smoothScrollingEnable**(`isSmoothScrolling`): `void`

**`Description`**

设定鼠标滚动时，滚动速度是否插值运算,限制滚动速度更平滑

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                | Type      | Description                            |
| :------------------ | :-------- | :------------------------------------- |
| `isSmoothScrolling` | `boolean` | usage:鼠标滚动时，滚动速度是否插值运算 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:1540

---

### supportElastic

• `get` **supportElastic**(): `boolean`

**`Description`**

判断是否支持惯性

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否支持惯性

#### Defined in

UI/index.d.ts:1630

• `set` **supportElastic**(`inSupportElastic`): `void`

**`Description`**

设定是否支持惯性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type      | Description |
| :----------------- | :-------- | :---------- |
| `inSupportElastic` | `boolean` | usage:惯性  |

#### Returns

`void`

是否支持惯性

#### Defined in

UI/index.d.ts:1637

---

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动 Widget Tick 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动 Widget Tick 的几何信息

#### Inherited from

PanelWidget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4903

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

#### Inherited from

PanelWidget.transform

#### Defined in

UI/index.d.ts:4927

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Inherited from

PanelWidget.transform

#### Defined in

UI/index.d.ts:4921

---

### visibility

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取可见性

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

返回可见性

#### Inherited from

PanelWidget.visibility

#### Defined in

UI/index.d.ts:4795

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

PanelWidget.visibility

#### Defined in

UI/index.d.ts:4789

---

### visible

• `get` **visible**(): `boolean`

**`Description`**

是否可见

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

PanelWidget.visible

#### Defined in

UI/index.d.ts:4801

---

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取 zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

#### Inherited from

PanelWidget.zOrder

#### Defined in

UI/index.d.ts:4975

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Inherited from

PanelWidget.zOrder

#### Defined in

UI/index.d.ts:4969

## Methods

### addChild

▸ **addChild**(`child`): `void`

**`Description`**

添加子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                        | Description  |
| :------ | :-------------------------- | :----------- |
| `child` | [`Widget`](UI.UI.Widget.md) | usage:子控件 |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[addChild](UI.UI.PanelWidget.md#addchild)

#### Defined in

UI/index.d.ts:1135

---

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[destroyObject](UI.UI.PanelWidget.md#destroyobject)

#### Defined in

UI/index.d.ts:4751

---

### endInertialScrolling

▸ **endInertialScrolling**(): `void`

**`Description`**

立刻停止滚动

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:1552

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description                  |
| :----- | :-------------------------- | :--------------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[equal](UI.UI.PanelWidget.md#equal)

#### Defined in

UI/index.d.ts:4758

---

### findChildByPath

▸ **findChildByPath**(`inPath`): [`Widget`](UI.UI.Widget.md)

**`Description`**

通过相对路径查找节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `inPath` | `string` | usage:查找路径 |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[findChildByPath](UI.UI.PanelWidget.md#findchildbypath)

#### Defined in

UI/index.d.ts:1115

---

### getChildAt

▸ **getChildAt**(`index`): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取第几位子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:下标  |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildAt](UI.UI.PanelWidget.md#getchildat)

#### Defined in

UI/index.d.ts:1129

---

### getChildByName

▸ **getChildByName**<`T`\>(`name`): `T`

**`Description`**

通过名字查找节点

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | extends [`Widget`](UI.UI.Widget.md)<`T`\> |

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`T`

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildByName](UI.UI.PanelWidget.md#getchildbyname)

#### Defined in

UI/index.d.ts:1122

---

### getChildrenCount

▸ **getChildrenCount**(): `number`

**`Description`**

获取子节点数量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

子节点数量

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildrenCount](UI.UI.PanelWidget.md#getchildrencount)

#### Defined in

UI/index.d.ts:1158

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[invalidateLayoutAndVolatility](UI.UI.PanelWidget.md#invalidatelayoutandvolatility)

#### Defined in

UI/index.d.ts:4825

---

### removeAllChildren

▸ **removeAllChildren**(): `void`

**`Description`**

清除所有子节点,会销毁 UI 无法再使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeAllChildren](UI.UI.PanelWidget.md#removeallchildren)

#### Defined in

UI/index.d.ts:1152

---

### removeChild

▸ **removeChild**(`child`): `void`

**`Description`**

移除节点,会销毁 UI 无法在使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                        | Description            |
| :------ | :-------------------------- | :--------------------- |
| `child` | [`Widget`](UI.UI.Widget.md) | usage:需要移除的子控件 |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeChild](UI.UI.PanelWidget.md#removechild)

#### Defined in

UI/index.d.ts:1141

---

### removeChildAt

▸ **removeChildAt**(`index`): `void`

**`Description`**

移除第几个节点,会销毁 UI 无法再使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:下标  |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeChildAt](UI.UI.PanelWidget.md#removechildat)

#### Defined in

UI/index.d.ts:1147

---

### scrollToEnd

▸ **scrollToEnd**(): `void`

**`Description`**

滚动到底部

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:1586

---

### scrollToStart

▸ **scrollToStart**(): `void`

**`Description`**

滚动到开始位置

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

UI/index.d.ts:1581

---

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`ScrollBox`](UI.UI.ScrollBox.md)

**`Description`**

创建 ScrollBox 控件，当 parent 和 inName 与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                 |
| :-------- | :-------------------------- | :------------------------------------------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 parent 对象 default:null |
| `inName?` | `string`                    | usage:创建控件的名称 default:null           |

#### Returns

[`ScrollBox`](UI.UI.ScrollBox.md)

创建的对象

#### Defined in

UI/index.d.ts:1465
