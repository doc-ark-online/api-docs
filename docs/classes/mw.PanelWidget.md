[界面](../groups/界面.界面.md) / PanelWidget

# PanelWidget <Badge type="tip" text="Class" /> <Score text="PanelWidget" />

UI 控件中，可以挂载子控件的父类。

---------------------

注：029版本会更新，此类会废弃，所有的控件均可挂载子控件。029之前的版本只允许 ScrollBox、Canvas、Button挂载子控件。

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`PanelWidget`**

  ↳↳ [`Button`](mw.Button.md)

  ↳↳ [`Canvas`](mw.Canvas.md)

  ↳↳ [`ScrollBox`](mw.ScrollBox.md)

## Table of contents

### Accessors <Score text="Accessors" /> 


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
| **[addChild](mw.PanelWidget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 添加子节点|
| **[findChildByPath](mw.PanelWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 通过相对路径查找节点|
| **[getChildAt](mw.PanelWidget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取第几位子节点|
| **[getChildByName](mw.PanelWidget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\> <Badge type="tip" text="client" />  |
| 通过名字查找节点|
| **[getChildrenCount](mw.PanelWidget.md#getchildrencount)**(): `number` <Badge type="tip" text="client" />  |
| 获取子节点数量|
| **[removeAllChildren](mw.PanelWidget.md#removeallchildren)**(): `void` <Badge type="tip" text="client" />  |
| 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.PanelWidget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.PanelWidget.md#removechildat)**(`index`: `number`): `void` <Badge type="tip" text="client" />  |
| 移除第几个节点,会销毁UI无法再使用|


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

## Methods

### addChild <Score text="addChild" /> 

• **addChild**(`child`): `void` <Badge type="tip" text="client" />

添加子节点

#### Parameters

| `child` [`Widget`](mw.Widget.md) | 子控件 |
| :------ | :------ |


___

### findChildByPath <Score text="findChildByPath" /> 

• **findChildByPath**(`inPath`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

通过相对路径查找节点

#### Parameters

| `inPath` `string` | 查找路径 |
| :------ | :------ |

#### Returns

| [`Widget`](mw.Widget.md) | 找到的控件 |
| :------ | :------ |

___

### getChildAt <Score text="getChildAt" /> 

• **getChildAt**(`index`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

获取第几位子节点

#### Parameters

| `index` `number` | 下标 |
| :------ | :------ |

#### Returns

| [`Widget`](mw.Widget.md) | 找到的控件 |
| :------ | :------ |

___

### getChildByName <Score text="getChildByName" /> 

• **getChildByName**<`T`\>(`name`): `T` <Badge type="tip" text="client" />

通过名字查找节点

#### Parameters

| `name` `string` | 名字 |
| :------ | :------ |

#### Returns

| `T` | 找到的控件 |
| :------ | :------ |

#### Type parameters

| `T` | extends [`Widget`](mw.Widget.md)<`T`\> |
| :------ | :------ |

___

### getChildrenCount <Score text="getChildrenCount" /> 

• **getChildrenCount**(): `number` <Badge type="tip" text="client" />

获取子节点数量

#### Returns

| `number` | 子节点数量 |
| :------ | :------ |

___

### removeAllChildren <Score text="removeAllChildren" /> 

• **removeAllChildren**(): `void` <Badge type="tip" text="client" />

清除所有子节点,会销毁UI无法再使用


___

### removeChild <Score text="removeChild" /> 

• **removeChild**(`child`): `void` <Badge type="tip" text="client" />

移除节点,会销毁UI无法在使用

#### Parameters

| `child` [`Widget`](mw.Widget.md) | 需要移除的子控件 |
| :------ | :------ |


___

### removeChildAt <Score text="removeChildAt" /> 

• **removeChildAt**(`index`): `void` <Badge type="tip" text="client" />

移除第几个节点,会销毁UI无法再使用

#### Parameters

| `index` `number` | 下标 |
| :------ | :------ |

