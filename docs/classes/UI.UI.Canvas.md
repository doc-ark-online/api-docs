[UI](../modules/UI.UI.md) / Canvas

# Canvas <Badge type="tip" text="Class" />

**`Description`**

可挂载叶子节点的根节点，以及提供各种自动布局功能

## Hierarchy

- [`PanelWidget`](UI.UI.PanelWidget.md)

  ↳ **`Canvas`**

## Table of contents

| Accessors |
| :-----|
| **[autoLayoutContainerRule](UI.UI.Canvas.md#autolayoutcontainerrule)**(): [`UILayoutType`](../enums/UI.UI.UILayoutType.md) <br> 获取自动布局规则(Figma布局)|
| **[autoLayoutEnable](UI.UI.Canvas.md#autolayoutenable)**(): `boolean` <br> 获取是否时自动布局|
| **[autoLayoutHugContent](UI.UI.Canvas.md#autolayouthugcontent)**(): [`UIHugContent`](UI.UI.UIHugContent.md) <br> 获取宽高随内容大小还是固定大小|
| **[autoLayoutPacketRule](UI.UI.Canvas.md#autolayoutpacketrule)**(): [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) <br> 获取自动排版规则|
| **[autoLayoutPadding](UI.UI.Canvas.md#autolayoutpadding)**(): `Readonly`<[`Margin`](UI.UI.Margin.md)\> <br> 获取边缘间距|
| **[autoLayoutRule](UI.UI.Canvas.md#autolayoutrule)**(): [`UILayout`](UI.UI.UILayout.md) <br> 获取完整的布局规则|
| **[autoLayoutSpacing](UI.UI.Canvas.md#autolayoutspacing)**(): `number` <br> 获取自动布局间隔|
| **[autoSizeEnable](UI.UI.Canvas.md#autosizeenable)**(): `boolean` <br> 获取是否自动设置大小|
| **[cachedGeometry](UI.UI.Canvas.md#cachedgeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取上一次的GetTickSpaceGeometry|
| **[clipEnable](UI.UI.Canvas.md#clipenable)**(): `boolean` <br> 获取是否裁剪|
| **[constraints](UI.UI.Canvas.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\> <br> 获取控件的布局|
| **[desiredSize](UI.UI.Canvas.md#desiredsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取期望大小|
| **[enable](UI.UI.Canvas.md#enable)**(): `boolean` <br> 是否可用|
| **[guid](UI.UI.Canvas.md#guid)**(): `string` <br> 获取控件GUID|
| **[isHovered](UI.UI.Canvas.md#ishovered)**(): `boolean` <br> 是否是hovered|
| **[name](UI.UI.Canvas.md#name)**(): `string` <br> 获取名字|
| **[paintSpaceGeometry](UI.UI.Canvas.md#paintspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于渲染Widget的几何信息|
| **[parent](UI.UI.Canvas.md#parent)**(): [`Widget`](UI.UI.Widget.md) <br> 获取父节点|
| **[position](UI.UI.Canvas.md#position)**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\> <br> 获取控件的位置|
| **[renderOpacity](UI.UI.Canvas.md#renderopacity)**(): `number` <br> 获取渲染透明度|
| **[renderScale](UI.UI.Canvas.md#renderscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染缩放|
| **[renderShear](UI.UI.Canvas.md#rendershear)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染错切形变|
| **[renderTransformAngle](UI.UI.Canvas.md#rendertransformangle)**(): `number` <br> 获取渲染的角度|
| **[renderTransformPivot](UI.UI.Canvas.md#rendertransformpivot)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取渲染锚点|
| **[size](UI.UI.Canvas.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取大小|
| **[slot](UI.UI.Canvas.md#slot)**(): [`UISlot`](UI.UI.UISlot.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息|
| **[tickSpaceGeometry](UI.UI.Canvas.md#tickspacegeometry)**(): [`Geometry`](UI.UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.UI.Canvas.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.UI.Canvas.md#visibility)**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.UI.Canvas.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.UI.Canvas.md#zorder)**(): `number` <br> 获取zorder|

| Methods |
| :-----|
| **[addChild](UI.UI.Canvas.md#addchild)**([`Widget`](UI.UI.Widget.md)): `void` <br> 添加子节点|
| **[destroyObject](UI.UI.Canvas.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.UI.Canvas.md#equal)**([`Widget`](UI.UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[findChildByPath](UI.UI.Canvas.md#findchildbypath)**(`string`): [`Widget`](UI.UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.UI.Canvas.md#getchildat)**(`number`): [`Widget`](UI.UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.UI.Canvas.md#getchildbyname)**<extends [`Widget`](UI.UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.UI.Canvas.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[invalidateLayoutAndVolatility](UI.UI.Canvas.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeAllChildren](UI.UI.Canvas.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.UI.Canvas.md#removechild)**([`Widget`](UI.UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.UI.Canvas.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
| **[newObject](UI.UI.Canvas.md#newobject)**([`Canvas`](UI.UI.Canvas.md), `string`): [`Canvas`](UI.UI.Canvas.md) <br> 创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### autoLayoutContainerRule

• `get` **autoLayoutContainerRule**(): [`UILayoutType`](../enums/UI.UI.UILayoutType.md)

**`Description`**

获取自动布局规则(Figma布局)

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayoutType`](../enums/UI.UI.UILayoutType.md)

自动布局规则

• `set` **autoLayoutContainerRule**(`inRule`): `void`

**`Description`**

设置自动布局规则(Figma布局)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutType`](../enums/UI.UI.UILayoutType.md) | 自动布局规则 |

#### Returns

`void`

___

### autoLayoutEnable

• `get` **autoLayoutEnable**(): `boolean`

**`Description`**

获取是否时自动布局

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动布局

• `set` **autoLayoutEnable**(`inAutoLayout`): `void`

**`Description`**

设置是否自动布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoLayout` | `boolean` | 是否自动布局 |

#### Returns

`void`

___

### autoLayoutHugContent

• `get` **autoLayoutHugContent**(): [`UIHugContent`](UI.UI.UIHugContent.md)

**`Description`**

获取宽高随内容大小还是固定大小

**`Effect`**

只在客户端调用生效

#### Returns

[`UIHugContent`](UI.UI.UIHugContent.md)

宽高大小规则

• `set` **autoLayoutHugContent**(`inRule`): `void`

**`Description`**

设置宽高随内容大小还是固定大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UIHugContent`](UI.UI.UIHugContent.md) | 宽高大小规则 |

#### Returns

`void`

___

### autoLayoutPacketRule

• `get` **autoLayoutPacketRule**(): [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md)

**`Description`**

获取自动排版规则

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md)

自动排版规则

• `set` **autoLayoutPacketRule**(`inRule`): `void`

**`Description`**

设置自动排版规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | 自动排版规则 |

#### Returns

`void`

___

### autoLayoutPadding

• `get` **autoLayoutPadding**(): `Readonly`<[`Margin`](UI.UI.Margin.md)\>

**`Description`**

获取边缘间距

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Margin`](UI.UI.Margin.md)\>

获取填充

• `set` **autoLayoutPadding**(`inPadding`): `void`

**`Description`**

设置边缘间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPadding` | [`Margin`](UI.UI.Margin.md) | 填充 |

#### Returns

`void`

___

### autoLayoutRule

• `get` **autoLayoutRule**(): [`UILayout`](UI.UI.UILayout.md)

**`Description`**

获取完整的布局规则

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayout`](UI.UI.UILayout.md)

布局规则

• `set` **autoLayoutRule**(`layout`): `void`

**`Description`**

设置完整的布局规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | [`UILayout`](UI.UI.UILayout.md) | 布局规则 |

#### Returns

`void`

___

### autoLayoutSpacing

• `get` **autoLayoutSpacing**(): `number`

**`Description`**

获取自动布局间隔

**`Effect`**

只在客户端调用生效

#### Returns

`number`

自动布局间隔

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void`

**`Description`**

设置自动布局间隔

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSpaceInItem` | `number` | 自动布局间隔 |

#### Returns

`void`

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

### clipEnable

• `get` **clipEnable**(): `boolean`

**`Description`**

获取是否裁剪

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否裁剪

• `set` **clipEnable**(`clip`): `void`

**`Description`**

设置是否裁剪

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `boolean` | 是否裁剪 |

#### Returns

`void`

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

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回创建的对象
