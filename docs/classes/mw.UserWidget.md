[UI](../groups/Core.UI.md) / UserWidget

# UserWidget <Badge type="tip" text="Class" /> <Score text="UserWidget" />

<span class="content-big">

UI控件的集合,预制体UI

</span>

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`UserWidget`**

  ↳↳ [`UserWidgetPrefab`](mw.UserWidgetPrefab.md)

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new Widget**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[focusable](mw.UserWidget.md#focusable)**(): `boolean`  |
| :-----|
| 设置是否响应键盘焦点事件|
| **[rootContent](mw.UserWidget.md#rootcontent)**(): [`Canvas`](mw.Canvas.md)  |
| 设置UI的根Canvas|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[autoSizeEnable](mw.Widget.md#autosizeenable)**(): `boolean`  |
| :-----|
| 设置是否自动设置大小|
| **[cachedGeometry](mw.Widget.md#cachedgeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取上一次的GetTickSpaceGeometry|
| **[constraints](mw.Widget.md#constraints)**(): `Readonly`<[`UIConstraintAnchors`](mw.UIConstraintAnchors.md)\>  |
| 设置控件的布局|
| **[desiredSize](mw.Widget.md#desiredsize)**(): [`Vector2`](mw.Vector2.md)  |
| 获取期望大小|
| **[enable](mw.Widget.md#enable)**(): `boolean`  |
| 设置可用性|
| **[guid](mw.Widget.md#guid)**(): `string`  |
| 获取控件GUID|
| **[isHovered](mw.Widget.md#ishovered)**(): `boolean`  |
| 是否是hovered|
| **[name](mw.Widget.md#name)**(): `string`  |
| 设定名字|
| **[paintSpaceGeometry](mw.Widget.md#paintspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于渲染Widget的几何信息|
| **[parent](mw.Widget.md#parent)**(): [`Widget`](mw.Widget.md)  |
| 获取父节点|
| **[position](mw.Widget.md#position)**(): `Readonly`<[`Vector2`](mw.Vector2.md)\>  |
| 设置控件的位置|
| **[renderOpacity](mw.Widget.md#renderopacity)**(): `number`  |
| 设置渲染透明度 0 ~ 1|
| **[renderScale](mw.Widget.md#renderscale)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染缩放|
| **[renderShear](mw.Widget.md#rendershear)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染错切形变|
| **[renderTransformAngle](mw.Widget.md#rendertransformangle)**(): `number`  |
| 设置渲染的角度|
| **[renderTransformPivot](mw.Widget.md#rendertransformpivot)**(): [`Vector2`](mw.Vector2.md)  |
| 设置渲染锚点|
| **[size](mw.Widget.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| 设置控件的大小|
| **[tickSpaceGeometry](mw.Widget.md#tickspacegeometry)**(): [`Geometry`](mw.Geometry.md)  |
| 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](mw.Widget.md#transform)**(): `Readonly`<[`UITransform`](mw.UITransform.md)\>  |
| 设置控件的大小和位置|
| **[visibility](mw.Widget.md#visibility)**(): [`SlateVisibility`](../enums/mw.SlateVisibility.md)  |
| 设置可见性|
| **[visible](mw.Widget.md#visible)**(): `boolean`  |
| 是否可见|
| **[zOrder](mw.Widget.md#zorder)**(): `number`  |
| 设置zoder|
:::


### Methods <Score text="Methods" /> 
| **[addToViewport](mw.UserWidget.md#addtoviewport)**(`zOrder`: `number`): `void`  |
| :-----|
| 添加到屏幕上|
| **[findChildByPath](mw.UserWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md)  |
| 通过相对路径查找节点|
| **[removeRootContent](mw.UserWidget.md#removerootcontent)**(): `void`  |
| 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](mw.UserWidget.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md)): [`UserWidget`](mw.UserWidget.md)  |
| 创建 UserWidget 控件|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void`  |
| :-----|
| 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean`  |
| 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void`  |
| 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void`  |
| 立刻移除并添加到根节点 可以再使用|
:::


## Accessors
___

### focusable <Score text="focusable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **focusable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **focusable**(`isFocus`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否响应键盘焦点事件


#### Returns

| `boolean` | 返回相应键盘的焦点事件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否响应键盘焦点事件


#### Parameters

| `isFocus` `boolean` | 是否相应 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rootContent <Score text="rootContent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rootContent**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **rootContent**(`content`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取根Canvas


#### Returns

| [`Canvas`](mw.Canvas.md) | 返回根Canvas |
| :------ | :------ |


</td>
<td style="text-align: left">


设置UI的根Canvas


#### Parameters

| `content` [`Canvas`](mw.Canvas.md) | 根UI的内容 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods

### addToViewport <Score text="addToViewport" /> 

• **addToViewport**(`zOrder`): `void` <Badge type="tip" text="client" />

添加到屏幕上

#### Parameters

| `zOrder` `number` | 添加到屏幕的层级关系 |
| :------ | :------ |



___

### findChildByPath <Score text="findChildByPath" /> 

• **findChildByPath**(`inPath`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

通过相对路径查找节点

#### Parameters

| `inPath` `string` | 路径 |
| :------ | :------ |

#### Returns

| [`Widget`](mw.Widget.md) | 返回查找节点结果 |
| :------ | :------ |


___

### removeRootContent <Score text="removeRootContent" /> 

• **removeRootContent**(): `void` <Badge type="tip" text="client" />

移除根Canvas,会销毁根Canvas，无法再次使用



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />

创建 UserWidget 控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外Outer对象 default:null |
| :------ | :------ |

#### Returns

| [`UserWidget`](mw.UserWidget.md) | 返回创建的控件 |
| :------ | :------ |

