[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Canvas

# Class: Canvas

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Canvas

**`Author`**

wujie

**`Description`**

可挂载叶子节点的根节点，以及提供各种自动布局功能

**`Network Status`**

usage:客户端

## Hierarchy

- [`PanelWidget`](UI.UI.PanelWidget.md)

  ↳ **`Canvas`**

## Table of contents

### Constructors

- [constructor](UI.UI.Canvas.md#constructor)

### Accessors

- [autoLayoutContainerRule](UI.UI.Canvas.md#autolayoutcontainerrule)
- [autoLayoutHugContent](UI.UI.Canvas.md#autolayouthugcontent)
- [autoLayoutPacketRule](UI.UI.Canvas.md#autolayoutpacketrule)
- [autoLayoutPadding](UI.UI.Canvas.md#autolayoutpadding)
- [autoLayoutRule](UI.UI.Canvas.md#autolayoutrule)
- [autoLayoutSpacing](UI.UI.Canvas.md#autolayoutspacing)
- [cachedGeometry](UI.UI.Canvas.md#cachedgeometry)
- [desiredSize](UI.UI.Canvas.md#desiredsize)
- [enableAutoLayout](UI.UI.Canvas.md#enableautolayout)
- [enableClip](UI.UI.Canvas.md#enableclip)
- [guid](UI.UI.Canvas.md#guid)
- [isAutoLayoutEnabled](UI.UI.Canvas.md#isautolayoutenabled)
- [isClipEnabled](UI.UI.Canvas.md#isclipenabled)
- [isEnabled](UI.UI.Canvas.md#isenabled)
- [isHovered](UI.UI.Canvas.md#ishovered)
- [name](UI.UI.Canvas.md#name)
- [paintSpaceGeometry](UI.UI.Canvas.md#paintspacegeometry)
- [parent](UI.UI.Canvas.md#parent)
- [renderOpacity](UI.UI.Canvas.md#renderopacity)
- [renderScale](UI.UI.Canvas.md#renderscale)
- [renderShear](UI.UI.Canvas.md#rendershear)
- [renderTransformAngle](UI.UI.Canvas.md#rendertransformangle)
- [renderTransformPivot](UI.UI.Canvas.md#rendertransformpivot)
- [size](UI.UI.Canvas.md#size)
- [slot](UI.UI.Canvas.md#slot)
- [tickSpaceGeometry](UI.UI.Canvas.md#tickspacegeometry)
- [visibility](UI.UI.Canvas.md#visibility)
- [visible](UI.UI.Canvas.md#visible)

### Methods

- [addChild](UI.UI.Canvas.md#addchild)
- [destroyObject](UI.UI.Canvas.md#destroyobject)
- [equal](UI.UI.Canvas.md#equal)
- [findChildByPath](UI.UI.Canvas.md#findchildbypath)
- [getChildAt](UI.UI.Canvas.md#getchildat)
- [getChildByName](UI.UI.Canvas.md#getchildbyname)
- [getChildrenCount](UI.UI.Canvas.md#getchildrencount)
- [invalidateLayoutAndVolatility](UI.UI.Canvas.md#invalidatelayoutandvolatility)
- [removeAllChildren](UI.UI.Canvas.md#removeallchildren)
- [removeChild](UI.UI.Canvas.md#removechild)
- [removeChildAt](UI.UI.Canvas.md#removechildat)
- [newObject](UI.UI.Canvas.md#newobject)

## Constructors

### constructor

• **new Canvas**()

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[constructor](UI.UI.PanelWidget.md#constructor)

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

#### Defined in

UI/index.d.ts:406

• `set` **autoLayoutContainerRule**(`inRule`): `void`

**`Description`**

设置自动布局规则(Figma布局)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutType`](../enums/UI.UI.UILayoutType.md) | usage:自动布局规则 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:400

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

#### Defined in

UI/index.d.ts:466

• `set` **autoLayoutHugContent**(`inRule`): `void`

**`Description`**

设置宽高随内容大小还是固定大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UIHugContent`](UI.UI.UIHugContent.md) | usage:宽高大小规则 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:460

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

#### Defined in

UI/index.d.ts:430

• `set` **autoLayoutPacketRule**(`inRule`): `void`

**`Description`**

设置自动排版规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | usage:自动排版规则 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:424

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

#### Defined in

UI/index.d.ts:442

• `set` **autoLayoutPadding**(`inPadding`): `void`

**`Description`**

设置边缘间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPadding` | [`Margin`](UI.UI.Margin.md) | usage:填充 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:436

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

#### Defined in

UI/index.d.ts:454

• `set` **autoLayoutRule**(`layout`): `void`

**`Description`**

设置完整的布局规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | [`UILayout`](UI.UI.UILayout.md) | usage:布局规则 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:448

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

#### Defined in

UI/index.d.ts:418

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void`

**`Description`**

设置自动布局间隔

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSpaceInItem` | `number` | usage:自动布局间隔 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:412

___

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

UI/index.d.ts:4893

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

#### Inherited from

PanelWidget.desiredSize

#### Defined in

UI/index.d.ts:4827

___

### enableAutoLayout

• `set` **enableAutoLayout**(`inAutoLayout`): `void`

**`Description`**

设置是否自动布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoLayout` | `boolean` | usage:是否自动布局 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:388

___

### enableClip

• `set` **enableClip**(`clip`): `void`

**`Description`**

设置是否裁剪

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `boolean` | usage:是否裁剪 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:376

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

#### Inherited from

PanelWidget.guid

#### Defined in

UI/index.d.ts:4911

___

### isAutoLayoutEnabled

• `get` **isAutoLayoutEnabled**(): `boolean`

**`Description`**

获取是否时自动布局

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动布局

#### Defined in

UI/index.d.ts:394

___

### isClipEnabled

• `get` **isClipEnabled**(): `boolean`

**`Description`**

获取是否裁剪

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否裁剪

#### Defined in

UI/index.d.ts:382

___

### isEnabled

• `get` **isEnabled**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

PanelWidget.isEnabled

#### Defined in

UI/index.d.ts:4797

• `set` **isEnabled**(`enable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | usage:可用性boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

PanelWidget.isEnabled

#### Defined in

UI/index.d.ts:4804

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

#### Inherited from

PanelWidget.isHovered

#### Defined in

UI/index.d.ts:4816

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

#### Inherited from

PanelWidget.name

#### Defined in

UI/index.d.ts:4773

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`void`

#### Inherited from

PanelWidget.name

#### Defined in

UI/index.d.ts:4767

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

#### Inherited from

PanelWidget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4905

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

#### Inherited from

PanelWidget.parent

#### Defined in

UI/index.d.ts:4755

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

#### Inherited from

PanelWidget.renderOpacity

#### Defined in

UI/index.d.ts:4887

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderOpacity

#### Defined in

UI/index.d.ts:4881

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

#### Inherited from

PanelWidget.renderScale

#### Defined in

UI/index.d.ts:4875

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderScale

#### Defined in

UI/index.d.ts:4869

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

#### Inherited from

PanelWidget.renderShear

#### Defined in

UI/index.d.ts:4863

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderShear

#### Defined in

UI/index.d.ts:4857

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

#### Inherited from

PanelWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4839

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4833

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

#### Inherited from

PanelWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4851

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

PanelWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4845

___

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取控件实际大小，需要在添加后才能使用

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

控件大小

#### Inherited from

PanelWidget.size

#### Defined in

UI/index.d.ts:4810

___

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Description`**

获取Slot槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回Slot槽

#### Inherited from

PanelWidget.slot

#### Defined in

UI/index.d.ts:4761

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

#### Inherited from

PanelWidget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4899

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

#### Inherited from

PanelWidget.visibility

#### Defined in

UI/index.d.ts:4785

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

PanelWidget.visibility

#### Defined in

UI/index.d.ts:4779

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

#### Inherited from

PanelWidget.visible

#### Defined in

UI/index.d.ts:4791

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
| `child` | [`Widget`](UI.UI.Widget.md) | usage:子控件 |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[addChild](UI.UI.PanelWidget.md#addchild)

#### Defined in

UI/index.d.ts:1135

___

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

UI/index.d.ts:4742

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
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[equal](UI.UI.PanelWidget.md#equal)

#### Defined in

UI/index.d.ts:4749

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
| `inPath` | `string` | usage:查找路径 |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[findChildByPath](UI.UI.PanelWidget.md#findchildbypath)

#### Defined in

UI/index.d.ts:1115

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
| `index` | `number` | usage:下标 |

#### Returns

[`Widget`](UI.UI.Widget.md)

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildAt](UI.UI.PanelWidget.md#getchildat)

#### Defined in

UI/index.d.ts:1129

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
| `name` | `string` | usage:名字 |

#### Returns

`T`

找到的控件

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildByName](UI.UI.PanelWidget.md#getchildbyname)

#### Defined in

UI/index.d.ts:1122

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

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[getChildrenCount](UI.UI.PanelWidget.md#getchildrencount)

#### Defined in

UI/index.d.ts:1158

___

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

UI/index.d.ts:4821

___

### removeAllChildren

▸ **removeAllChildren**(): `void`

**`Description`**

清除所有子节点,会销毁UI无法再使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeAllChildren](UI.UI.PanelWidget.md#removeallchildren)

#### Defined in

UI/index.d.ts:1152

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
| `child` | [`Widget`](UI.UI.Widget.md) | usage:需要移除的子控件 |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeChild](UI.UI.PanelWidget.md#removechild)

#### Defined in

UI/index.d.ts:1141

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
| `index` | `number` | usage:下标 |

#### Returns

`void`

#### Inherited from

[PanelWidget](UI.UI.PanelWidget.md).[removeChildAt](UI.UI.PanelWidget.md#removechildat)

#### Defined in

UI/index.d.ts:1147

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
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外parent对象 default:null |
| `inName?` | `string` | usage:创建控件的名称 default:null |

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回创建的对象

#### Defined in

UI/index.d.ts:370
