[界面](../groups/界面.界面.md) / MenuAnchor

# MenuAnchor <Badge type="tip" text="Class" /> <Score text="MenuAnchor" />

菜单锚点

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`MenuAnchor`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[contentPadding](mw.MenuAnchor.md#contentpadding)**(): [`Margin`](mw.Margin.md)  |
| :----- |
| **[isFitInWindow](mw.MenuAnchor.md#isfitinwindow)**(): `boolean` |
| **[isRightOpenMenu](mw.MenuAnchor.md#isrightopenmenu)**(): `boolean` |
| **[itemPadding](mw.MenuAnchor.md#itempadding)**(): [`Margin`](mw.Margin.md) |
| **[itemStyle](mw.MenuAnchor.md#itemstyle)**(): [`ButtonStyle`](mw.ButtonStyle.md) |
| **[maxListHeight](mw.MenuAnchor.md#maxlistheight)**(): `number` |
| **[menuBorderBrush](mw.MenuAnchor.md#menuborderbrush)**(): [`ImageInfo`](mw.ImageInfo.md) |
| **[onClickMenuItemEvent](mw.MenuAnchor.md#onclickmenuitemevent)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`menuId`: `string`) => `void`\> |
| **[placement](mw.MenuAnchor.md#placement)**(): [`MenuPlacement`](../enums/mw.MenuPlacement.md) |
| **[scrollBarPadding](mw.MenuAnchor.md#scrollbarpadding)**(): [`Margin`](mw.Margin.md) |
| **[scrollBarStyle](mw.MenuAnchor.md#scrollbarstyle)**(): [`ScrollbarStyle`](mw.ScrollbarStyle.md) |
| **[scrollBarThickness](mw.MenuAnchor.md#scrollbarthickness)**(): `number` |


::: details click
### Accessors <Score text="Accessors" /> 
| **[alignPosition](mw.Widget.md#alignposition)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\> <Badge type="tip" text="client" />  |
| :-----|
| 获取控件的对齐位置,在对齐方式为靠右对齐、靠下对齐、中心对齐时，alignPosition的值与positon不同；|
| **[autoSizeHorizontalEnable](mw.Widget.md#autosizehorizontalenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否自动水平设置大小|
| **[autoSizeVerticalEnable](mw.Widget.md#autosizeverticalenable)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否自动垂直设置大小|
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
| **[mouseCursor](mw.Widget.md#mousecursor)**(): [`MouseCursor`](../enums/mw.MouseCursor.md) <Badge type="tip" text="client" />  |
| 获取控件上光标类型|
| **[name](mw.Widget.md#name)**(): `string` <Badge type="tip" text="client" />  |
| 获取名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取父节点|
| **[pivot](mw.Widget.md#pivot)**(): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取控件锚点位置,这个属性决定了控件图形与锚点的相对位置；(0,0)时，锚点位于控件左上角；(0.5,0.5)时，锚点位于控件正中心|
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
| **[addMenuItem](mw.MenuAnchor.md#addmenuitem)**(`info`: [`MenuItemInfo`](mw.MenuItemInfo.md)): `void`  |
| :----- |
| **[addMenuItems](mw.MenuAnchor.md#addmenuitems)**(`info`: [`MenuItemInfo`](mw.MenuItemInfo.md)[]): `void` |
| **[open](mw.MenuAnchor.md#open)**(`focusMenu?`: `boolean`): `void` |
| **[toggleOpen](mw.MenuAnchor.md#toggleopen)**(`focusOnOpen?`: `boolean`): `void` |


::: details click
### Methods <Score text="Methods" /> 
| **[addChild](mw.Widget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 添加子节点|
| **[clone](mw.Widget.md#clone)**(`position`: [`Vector2`](mw.Vector2.md), `Parent?`: `any`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 克隆UI控件及其子节点到指定父控件位置（默认到其父节点）|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <Badge type="tip" text="client" />  |
| 判断是不是同一个对象|
| **[findChildByPath](mw.Widget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 通过相对路径查找节点|
| **[getChildAt](mw.Widget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 获取第几位子节点|
| **[getChildByName](mw.Widget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\> <Badge type="tip" text="client" />  |
| 通过名字查找节点|
| **[getChildrenCount](mw.Widget.md#getchildrencount)**(): `number` <Badge type="tip" text="client" />  |
| 获取子节点数量|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <Badge type="tip" text="client" />  |
| 立刻触发重新渲染的和排布计算|
| **[removeAllChildren](mw.Widget.md#removeallchildren)**(): `void` <Badge type="tip" text="client" />  |
| 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.Widget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.Widget.md#removechildat)**(`index`: `number`): `void` <Badge type="tip" text="client" />  |
| 移除第几个节点,会销毁UI无法再使用|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <Badge type="tip" text="client" />  |
| 立刻移除并添加到根节点 可以再使用|
| **[serialize](mw.Widget.md#serialize)**(): `string` <Badge type="tip" text="client" />  |
| 序列化UI控件|
| **[deserialize](mw.Widget.md#deserialize)**(`Data`: `string`, `Parent?`: [`Widget`](mw.Widget.md)): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 反序列化UI|
:::


## Accessors

___

### contentPadding <Score text="contentPadding" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **contentPadding**(): [`Margin`](mw.Margin.md)

</th>
<th style="text-align: left">

• `set` **contentPadding**(`inPadding`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


菜单内容边距

#### Returns

| [`Margin`](mw.Margin.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


菜单内容边距

#### Parameters

| `inPadding` | [`Margin`](mw.Margin.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isFitInWindow <Score text="isFitInWindow" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isFitInWindow**(): `boolean`

</th>
<th style="text-align: left">

• `set` **isFitInWindow**(`isFit`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `isFit` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isRightOpenMenu <Score text="isRightOpenMenu" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isRightOpenMenu**(): `boolean`

</th>
<th style="text-align: left">

• `set` **isRightOpenMenu**(`isOpen`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `isOpen` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### itemPadding <Score text="itemPadding" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **itemPadding**(): [`Margin`](mw.Margin.md)

</th>
<th style="text-align: left">

• `set` **itemPadding**(`inPadding`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`Margin`](mw.Margin.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `inPadding` | [`Margin`](mw.Margin.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### itemStyle <Score text="itemStyle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **itemStyle**(): [`ButtonStyle`](mw.ButtonStyle.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


菜单项样式

#### Returns

| [`ButtonStyle`](mw.ButtonStyle.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### maxListHeight <Score text="maxListHeight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxListHeight**(): `number`

</th>
<th style="text-align: left">

• `set` **maxListHeight**(`inHeight`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `inHeight` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### menuBorderBrush <Score text="menuBorderBrush" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **menuBorderBrush**(): [`ImageInfo`](mw.ImageInfo.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


菜单背景图

#### Returns

| [`ImageInfo`](mw.ImageInfo.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onClickMenuItemEvent <Score text="onClickMenuItemEvent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **onClickMenuItemEvent**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`menuId`: `string`) => `void`\>

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`menuId`: `string`) => `void`\> |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### placement <Score text="placement" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **placement**(): [`MenuPlacement`](../enums/mw.MenuPlacement.md)

</th>
<th style="text-align: left">

• `set` **placement**(`inType`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`MenuPlacement`](../enums/mw.MenuPlacement.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `inType` | [`MenuPlacement`](../enums/mw.MenuPlacement.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollBarPadding <Score text="scrollBarPadding" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollBarPadding**(): [`Margin`](mw.Margin.md)

</th>
<th style="text-align: left">

• `set` **scrollBarPadding**(`inPadding`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`Margin`](mw.Margin.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `inPadding` | [`Margin`](mw.Margin.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scrollBarStyle <Score text="scrollBarStyle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollBarStyle**(): [`ScrollbarStyle`](mw.ScrollbarStyle.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


滚动条样式

#### Returns

| [`ScrollbarStyle`](mw.ScrollbarStyle.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### scrollBarThickness <Score text="scrollBarThickness" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scrollBarThickness**(): `number`

</th>
<th style="text-align: left">

• `set` **scrollBarThickness**(`inThickness`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `inThickness` | `number` |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### addMenuItem <Score text="addMenuItem" /> 

• **addMenuItem**(`info`): `void`

#### Parameters

| `info` | [`MenuItemInfo`](mw.MenuItemInfo.md) |
| :------ | :------ |


___

### addMenuItems <Score text="addMenuItems" /> 

• **addMenuItems**(`info`): `void`

#### Parameters

| `info` | [`MenuItemInfo`](mw.MenuItemInfo.md)[] |
| :------ | :------ |


___

### open <Score text="open" /> 

• **open**(`focusMenu?`): `void`

#### Parameters

| `focusMenu?` | `boolean` |
| :------ | :------ |


___

### toggleOpen <Score text="toggleOpen" /> 

• **toggleOpen**(`focusOnOpen?`): `void`

#### Parameters

| `focusOnOpen?` | `boolean` |
| :------ | :------ |

