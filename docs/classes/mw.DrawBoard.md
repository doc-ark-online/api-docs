[界面](../groups/界面.界面.md) / DrawBoard

# DrawBoard <Badge type="tip" text="Class" /> <Score text="DrawBoard" />

UI 画板

## Hierarchy

- [`Widget`](mw.Widget.md)

  ↳ **`DrawBoard`**

## Table of contents

### Properties <Score text="Properties" /> 


::: details click
### Properties <Score text="Properties" /> 
| **[onCustomPropertyChange](mw.Widget.md#oncustompropertychange)**: `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="client" />  |
| :-----|
| 监听自定义属性同步事件|
:::


### Accessors <Score text="Accessors" /> 
| **[canRedo](mw.DrawBoard.md#canredo)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取当前是否可以恢复上次的撤销|
| **[canUndo](mw.DrawBoard.md#canundo)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取当前是否可以撤销一次事务|
| **[maxTransactionSize](mw.DrawBoard.md#maxtransactionsize)**(): `number` <Badge type="tip" text="client" />  |
| 最大撤销恢复的数据栈内存大小，单位字节，默认20MB，必须在有绘制操作前才能生效|


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
| **[addTransaction](mw.DrawBoard.md#addtransaction)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 提交一次撤销恢复的事务，会把之前的数据和当前数据进行比较，完成一次撤销恢复事务|
| **[clearDraws](mw.DrawBoard.md#cleardraws)**(): `void` <Badge type="tip" text="client" />  |
| 清除全部绘制|
| **[drawCustom](mw.DrawBoard.md#drawcustom)**(`vertex`: [`UIDrawCustomVertex`](mw.UIDrawCustomVertex.md)[], `index`: `number`[], `assetId?`: `string`, `drawLayerId?`: `number`): `number` <Badge type="tip" text="client" />  |
| 自定义绘制图元|
| **[drawLines](mw.DrawBoard.md#drawlines)**(`points`: [`Vector2`](mw.Vector2.md)[], `lineData?`: [`DrawDataBase`](mw.DrawDataBase.md)): `number` <Badge type="tip" text="client" />  |
| 画多段线|
| **[drawText](mw.DrawBoard.md#drawtext)**(`text`: `string`, `position`: [`Vector2`](mw.Vector2.md), `fontSize`: `number`, `fontColor`: [`LinearColor`](mw.LinearColor.md), `drawLayerId?`: `number`): `number` <Badge type="tip" text="client" />  |
| 画文字|
| **[exportSaveData](mw.DrawBoard.md#exportsavedata)**(`name`: `string`): `boolean` <Badge type="tip" text="client" />  |
| 导出当前画布信息到缓存文件|
| **[fillCircle](mw.DrawBoard.md#fillcircle)**(`center`: [`Vector2`](mw.Vector2.md), `radius`: `number`, `color`: [`LinearColor`](mw.LinearColor.md)): `void` <Badge type="tip" text="client" />  |
| 填充自定圆形区域内的像素颜色|
| **[importSaveData](mw.DrawBoard.md#importsavedata)**(`name`: `string`): `boolean` <Badge type="tip" text="client" />  |
| 导入缓存文件到当前画布|
| **[redo](mw.DrawBoard.md#redo)**(): `boolean` <Badge type="tip" text="client" />  |
| 恢复一次上次的撤销|
| **[undo](mw.DrawBoard.md#undo)**(): `boolean` <Badge type="tip" text="client" />  |
| 撤销一次事务|
| **[newObject](mw.DrawBoard.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`DrawBoard`](mw.DrawBoard.md) <Badge type="tip" text="client" />  |
| 创建绘画控件|


::: details click
### Methods <Score text="Methods" /> 
| **[addChild](mw.Widget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 添加子节点|
| **[clone](mw.Widget.md#clone)**(`position`: [`Vector2`](mw.Vector2.md), `Parent?`: [`Widget`](mw.Widget.md)): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
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
| **[getCustomProperties](mw.Widget.md#getcustomproperties)**(): `string`[] <Badge type="tip" text="client" />  |
| 获取所有自定义属性|
| **[getCustomProperty](mw.Widget.md#getcustomproperty)**<`T`: extends [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype)\>(`propertyName`: `string`): `T`: extends [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype) <Badge type="tip" text="client" />  |
| 获取自定义属性|
| **[getCustomPropertyChangeDelegate](mw.Widget.md#getcustompropertychangedelegate)**(`property`): `Readonly`<[`MulticastDelegate`](mw.MulticastDelegate.md)<(`path`: `string`, `value`: `unknown`, `oldValue`: `unknown`) => `void`\>\> <Badge type="tip" text="client" />  |
| 给定对象属性修改时触发的事件代理|
| **[invalidateLayoutAndVolatility](mw.Widget.md#invalidatelayoutandvolatility)**(): `void` <Badge type="tip" text="client" />  |
| 立刻触发重新渲染的和排布计算|
| **[isValid](mw.Widget.md#isvalid)**(): `boolean` <Badge type="tip" text="client" />  |
| 判断控件有没有被销毁，是否是有效的控件|
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
| **[setCustomProperty](mw.Widget.md#setcustomproperty)**(`propertyName`: `string`, `value`: `undefined`  [`CustomPropertyType`](../modules/Core.mw.md#custompropertytype)): `void` <Badge type="tip" text="client" />  |
| 设置自定义属性|
| **[deserialize](mw.Widget.md#deserialize)**(`Data`: `string`, `Parent?`: [`Widget`](mw.Widget.md)): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 反序列化UI|
:::


## Properties

## Accessors

___

### canRedo <Score text="canRedo" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **canRedo**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前是否可以恢复上次的撤销

#### Returns

| `boolean` | 返回撤销恢复是否可执行 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### canUndo <Score text="canUndo" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **canUndo**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前是否可以撤销一次事务

#### Returns

| `boolean` | 返回撤销恢复是否可执行 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### maxTransactionSize <Score text="maxTransactionSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxTransactionSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **maxTransactionSize**(`count`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


最大撤销恢复的数据栈内存大小，单位字节，默认20MB，必须在有绘制操作前才能生效

#### Returns

| `number` | 返回最大撤销恢复的数据栈内存大小 |
| :------ | :------ |


</td>
<td style="text-align: left">


最大撤销恢复的数据栈内存大小，单位字节，默认20MB，必须在有绘制操作前才能生效

#### Parameters

| `count` `number` | 字节大小 count: >0 type: 整形 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

返回最大撤销恢复的数据栈内存大小

## Methods

___

### addTransaction <Score text="addTransaction" /> 

• **addTransaction**(): `void` <Badge type="tip" text="client" />

提交一次撤销恢复的事务，会把之前的数据和当前数据进行比较，完成一次撤销恢复事务


___

### clearDraws <Score text="clearDraws" /> 

• **clearDraws**(): `void` <Badge type="tip" text="client" />

清除全部绘制


___

### drawCustom <Score text="drawCustom" /> 

• **drawCustom**(`vertex`, `index`, `assetId?`, `drawLayerId?`): `number` <Badge type="tip" text="client" />

自定义绘制图元

#### Parameters

| `vertex` [`UIDrawCustomVertex`](mw.UIDrawCustomVertex.md)[] | 顶点图元数据信息 |
| :------ | :------ |
| `index` `number`[] | 顶点图元索引信息 |
| `assetId?` `string` | UI贴图资源 default: "" range: 无 |
| `drawLayerId?` `number` | 绘制层级 default: 0 range: 无 type: 整形 |

#### Returns

| `number` | 返回drawId |
| :------ | :------ |

___

### drawLines <Score text="drawLines" /> 

• **drawLines**(`points`, `lineData?`): `number` <Badge type="tip" text="client" />

画多段线

#### Parameters

| `points` [`Vector2`](mw.Vector2.md)[] | 线的各个点坐标 |
| :------ | :------ |
| `lineData?` [`DrawDataBase`](mw.DrawDataBase.md) | 绘制图元信息 default: new DrawDataBase() |

#### Returns

| `number` | 返回drawId |
| :------ | :------ |

___

### drawText <Score text="drawText" /> 

• **drawText**(`text`, `position`, `fontSize`, `fontColor`, `drawLayerId?`): `number` <Badge type="tip" text="client" />

画文字

#### Parameters

| `text` `string` | 要绘制的文本 range: 无 |
| :------ | :------ |
| `position` [`Vector2`](mw.Vector2.md) | 位置 |
| `fontSize` `number` | 字体大小 type: 整形 range: 无 |
| `fontColor` [`LinearColor`](mw.LinearColor.md) | 颜色 |
| `drawLayerId?` `number` | 绘制层级 default: 0 range: 无 type: 整形 |

#### Returns

| `number` | 返回drawId |
| :------ | :------ |

___

### exportSaveData <Score text="exportSaveData" /> 

• **exportSaveData**(`name`): `boolean` <Badge type="tip" text="client" />

导出当前画布信息到缓存文件

#### Parameters

| `name` `string` | 导出文件名字 range: 无 |
| :------ | :------ |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |

___

### fillCircle <Score text="fillCircle" /> 

• **fillCircle**(`center`, `radius`, `color`): `void` <Badge type="tip" text="client" />

填充自定圆形区域内的像素颜色

#### Parameters

| `center` [`Vector2`](mw.Vector2.md) | 圆中心 |
| :------ | :------ |
| `radius` `number` | 圆半径 range: >0 type: 整形 |
| `color` [`LinearColor`](mw.LinearColor.md) | 填充颜色 |


___

### importSaveData <Score text="importSaveData" /> 

• **importSaveData**(`name`): `boolean` <Badge type="tip" text="client" />

导入缓存文件到当前画布

#### Parameters

| `name` `string` | 导出文件名字 range: 无 |
| :------ | :------ |

#### Returns

| `boolean` | 是否成功 |
| :------ | :------ |

___

### redo <Score text="redo" /> 

• **redo**(): `boolean` <Badge type="tip" text="client" />

恢复一次上次的撤销

#### Returns

| `boolean` | 返回撤销恢复是否成功 |
| :------ | :------ |

___

### undo <Score text="undo" /> 

• **undo**(): `boolean` <Badge type="tip" text="client" />

撤销一次事务

#### Returns

| `boolean` | 返回撤销恢复是否成功 |
| :------ | :------ |

___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`DrawBoard`](mw.DrawBoard.md) <Badge type="tip" text="client" />

创建绘画控件

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default: null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null range:设置合理的名称即可 |

#### Returns

| [`DrawBoard`](mw.DrawBoard.md) | 返回创建的对象 |
| :------ | :------ |

当parent和inName与已有的对象相同时，旧的对象会被销毁
