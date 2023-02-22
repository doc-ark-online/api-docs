[UI](../modules/UI.UI.md) / UserWidget

# UserWidget <Badge type="tip" text="Class" /> <Score text="UserWidget" />

**`Groups`**

GUI

UI控件的集合,预制体UI

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`UserWidget`**

  ↳↳ [`UserWidgetPrefab`](UI.UserWidgetPrefab.md)

## Table of contents

| Accessors |
| :-----|
| **[focusable](UI.UserWidget.md#focusable)**(): `boolean` <br> 获取是否响应键盘焦点事件|
| **[rootContent](UI.UserWidget.md#rootcontent)**(): [`Canvas`](UI.Canvas.md) <br> 获取根Canvas|


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
| **[tickSpaceGeometry](UI.Widget.md#tickspacegeometry)**(): [`Geometry`](UI.Geometry.md) <br> 获取最后一次用于驱动Widget Tick的几何信息|
| **[transform](UI.Widget.md#transform)**(): `Readonly`<[`UITransform`](UI.UITransform.md)\> <br> 得到控件的大小和位置|
| **[visibility](UI.Widget.md#visibility)**(): [`SlateVisibility`](../enums/UI.SlateVisibility.md) <br> 获取可见性|
| **[visible](UI.Widget.md#visible)**(): `boolean` <br> 是否可见|
| **[zOrder](UI.Widget.md#zorder)**(): `number` <br> 获取zorder|
:::


| Methods |
| :-----|
| **[addToViewport](UI.UserWidget.md#addtoviewport)**(`zOrder`: `number`): `void` <br> 添加到屏幕上|
| **[findChildByPath](UI.UserWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[removeRootContent](UI.UserWidget.md#removerootcontent)**(): `void` <br> 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](UI.UserWidget.md#newobject)**(`parent?`: [`Canvas`](UI.Canvas.md)): [`UserWidget`](UI.UserWidget.md) <br> 创建 UserWidget 控件|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroyObject](UI.Widget.md#destroyobject)**(): `void` <br> 立刻移除并销毁 不可以在使用|
| **[equal](UI.Widget.md#equal)**(`that`: [`Widget`](UI.Widget.md)): `boolean` <br> 判断是不是同一个对象|
| **[invalidateLayoutAndVolatility](UI.Widget.md#invalidatelayoutandvolatility)**(): `void` <br> 立刻触发重新渲染的和排布计算|
| **[removeObject](UI.Widget.md#removeobject)**(): `void` <br> 立刻移除并添加到根节点 可以再使用|
:::


## Accessors

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



### rootContent <Score text="rootContent" /> 

• `get` **rootContent**(): [`Canvas`](UI.Canvas.md) <Badge type="tip" text="client" />

获取根Canvas


#### Returns

[`Canvas`](UI.Canvas.md)

返回根Canvas

• `set` **rootContent**(`content`): `void` <Badge type="tip" text="client" />

设置UI的根Canvas


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`Canvas`](UI.Canvas.md) | 根UI的内容 |



## Methods

### addToViewport <Score text="addToViewport" /> 

• **addToViewport**(`zOrder`): `void` <Badge type="tip" text="client" />

添加到屏幕上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zOrder` | `number` | 添加到屏幕的层级关系 |



### findChildByPath <Score text="findChildByPath" /> 

• **findChildByPath**(`inPath`): [`Widget`](UI.Widget.md) <Badge type="tip" text="client" />

通过相对路径查找节点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 路径 |

#### Returns

[`Widget`](UI.Widget.md)

返回查找节点结果


### removeRootContent <Score text="removeRootContent" /> 

• **removeRootContent**(): `void` <Badge type="tip" text="client" />

移除根Canvas,会销毁根Canvas，无法再次使用



___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`): [`UserWidget`](UI.UserWidget.md) <Badge type="tip" text="client" />

创建 UserWidget 控件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Outer对象 default:null |

#### Returns

[`UserWidget`](UI.UserWidget.md)

返回创建的控件
