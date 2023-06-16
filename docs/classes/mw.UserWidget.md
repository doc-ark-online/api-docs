[Gui](../groups/Core.Gui.md) / UserWidget

# UserWidget <Badge type="tip" text="Class" /> <Score text="UserWidget" />

UI控件的集合,预制体UI

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`UserWidget`**

  ↳↳ [`UserWidgetPrefab`](mw.UserWidgetPrefab.md)

## Table of contents

| Accessors |
| :-----|
| **[focusable](mw.UserWidget.md#focusable)**(): `boolean` <br> 获取是否响应键盘焦点事件|
| **[rootContent](mw.UserWidget.md#rootcontent)**(): [`Canvas`](mw.Canvas.md) <br> 获取根Canvas|


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
| **[addToViewport](mw.UserWidget.md#addtoviewport)**(`zOrder`: `number`): `void` <br> 添加到屏幕上|
| **[findChildByPath](mw.UserWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <br> 通过相对路径查找节点|
| **[removeRootContent](mw.UserWidget.md#removerootcontent)**(): `void` <br> 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](mw.UserWidget.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md)): [`UserWidget`](mw.UserWidget.md) <br> 创建 UserWidget 控件|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](mw.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](mw.Widget.md#equal)**(`that`: [`Widget`](mw.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](mw.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


### focusable <Score text="focusable" /> 

• `get` **focusable**(): `boolean` <Badge type="tip" text="client" />

获取是否响应键盘焦点事件


#### Returns

`boolean`

返回相应键盘的焦点事件

• `set` **focusable**(`isFocus`): `void` <Badge type="tip" text="client" />

设置是否响应键盘焦点事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isFocus` | `boolean` | 是否相应 |


___

### rootContent <Score text="rootContent" /> 

• `get` **rootContent**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

获取根Canvas


#### Returns

[`Canvas`](mw.Canvas.md)

返回根Canvas

• `set` **rootContent**(`content`): `void` <Badge type="tip" text="client" />

设置UI的根Canvas


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`Canvas`](mw.Canvas.md) | 根UI的内容 |



## Methods

### addToViewport <Score text="addToViewport" /> 

• **addToViewport**(`zOrder`): `void` <Badge type="tip" text="client" />

添加到屏幕上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zOrder` | `number` | 添加到屏幕的层级关系 |


___

### findChildByPath <Score text="findChildByPath" /> 

• **findChildByPath**(`inPath`): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

通过相对路径查找节点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 路径 |

#### Returns

[`Widget`](mw.Widget.md)

返回查找节点结果

___

### removeRootContent <Score text="removeRootContent" /> 

• **removeRootContent**(): `void` <Badge type="tip" text="client" />

移除根Canvas,会销毁根Canvas，无法再次使用



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />

创建 UserWidget 控件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外Outer对象 default:null |

#### Returns

[`UserWidget`](mw.UserWidget.md)

返回创建的控件
