[UI](../modules/UI.UI.md) / PanelWidget

# PanelWidget <Badge type="tip" text="Class" /> <Score text="PanelWidget" />

UI的PanelWidget可以挂载子节点

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`PanelWidget`**

  ↳↳ [`Canvas`](UI.Canvas.md)

  ↳↳ [`ScrollBox`](UI.ScrollBox.md)

## Table of contents

| Accessors |
| :-----|


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
| **[addChild](UI.PanelWidget.md#addchild)**([`Widget`](UI.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](UI.PanelWidget.md#findchildbypath)**(`string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.PanelWidget.md#getchildat)**(`number`): [`Widget`](UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.PanelWidget.md#getchildbyname)**<extends [`Widget`](UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](UI.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.PanelWidget.md#removechild)**([`Widget`](UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.PanelWidget.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**([`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
:::


## Accessors

## Methods

### addChild <Score text="addChild" /> 

▸ **addChild**(`child`): `void` <Badge type="tip" text="other" />

添加子节点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.Widget.md) | 子控件 |



### findChildByPath <Score text="findChildByPath" /> 

▸ **findChildByPath**(`inPath`): [`Widget`](UI.Widget.md) <Badge type="tip" text="other" />

通过相对路径查找节点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 查找路径 |

#### Returns

[`Widget`](UI.Widget.md)

找到的控件

___

### getChildAt <Score text="getChildAt" /> 

▸ **getChildAt**(`index`): [`Widget`](UI.Widget.md) <Badge type="tip" text="other" />

获取第几位子节点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

#### Returns

[`Widget`](UI.Widget.md)

找到的控件

___

### getChildByName <Score text="getChildByName" /> 

▸ **getChildByName**<`T`\>(`name`): `T` <Badge type="tip" text="other" />

通过名字查找节点


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Widget`](UI.Widget.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`T`

找到的控件

___

### getChildrenCount <Score text="getChildrenCount" /> 

▸ **getChildrenCount**(): `number` <Badge type="tip" text="other" />

获取子节点数量


#### Returns

`number`

子节点数量


### removeAllChildren <Score text="removeAllChildren" /> 

▸ **removeAllChildren**(): `void` <Badge type="tip" text="other" />

清除所有子节点,会销毁UI无法再使用



___

### removeChild <Score text="removeChild" /> 

▸ **removeChild**(`child`): `void` <Badge type="tip" text="other" />

移除节点,会销毁UI无法在使用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.Widget.md) | 需要移除的子控件 |


___

### removeChildAt <Score text="removeChildAt" /> 

▸ **removeChildAt**(`index`): `void` <Badge type="tip" text="other" />

移除第几个节点,会销毁UI无法再使用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

