[拓展](../groups/Extension.拓展.md) / BagUI

# BagUI <Badge type="tip" text="Class" /> <Score text="BagUI" />

背包界面父类,继承这个类来实现自己的背包界面，使用BagModule.skin来指定皮肤

## Hierarchy

- [`UIScript`](mw.UIScript.md)

  ↳ **`BagUI`**

## Implements

- [`IBagSkin`](mwext.IBagSkin.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[closeBtn](mwext.BagUI.md#closebtn)**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />  |
| :-----|
| 关闭按钮|
| **[content](mwext.BagUI.md#content)**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />  |
| 背包格子的容器|
| **[filterBox](mwext.BagUI.md#filterbox)**(): [`InputBox`](mw.InputBox.md) <Badge type="tip" text="client" />  |
| 过滤输入框|
| **[filterCanvas](mwext.BagUI.md#filtercanvas)**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />  |
| 搜索框所在容易,打开/关闭搜索功能隐藏/显示该容器|


::: details click
### Accessors <Score text="Accessors" /> 
| **[canUpdate](mw.UIScript.md#canupdate)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取是否能触发 UI 中 onUpdate 生命周期函数|
| **[fullScreen](mw.UIScript.md#fullscreen)**(`inFull`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](mw.UIScript.md#layer)**(): `number` <Badge type="tip" text="client" />  |
| 获取 UI 的 Layer 层级|
| **[rootCanvas](mw.UIScript.md#rootcanvas)**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />  |
| 获取 UI 的根 Canvas 节点|
| **[uiObject](mw.UIScript.md#uiobject)**(): [`Widget`](mw.Widget.md)  |
| 获取 UI 顶层控件对象|
| **[uiWidgetBase](mw.UIScript.md#uiwidgetbase)**(): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />  |
| 获取 UI 顶层控件对象|
| **[visible](mw.UIScript.md#visible)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取 UI 是否显示|
:::


### Methods <Score text="Methods" /> 


::: details click
### Methods <Score text="Methods" /> 
| **[destroy](mw.UIScript.md#destroy)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 销毁 UI 对象|
| **[detectDrag](mw.UIScript.md#detectdrag)**(`dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <Badge type="tip" text="client" />  |
| 触发 DragDrop 事件的检测|
| **[detectDragIfPressed](mw.UIScript.md#detectdragifpressed)**(`inPointEvent`: [`PointerEvent`](mw.PointerEvent.md), `dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <Badge type="tip" text="client" />  |
| 事件检测通过，触发 DragDrop 事件的回复。|
| **[newDragDrop](mw.UIScript.md#newdragdrop)**(`inVisualWidget`: [`Widget`](mw.Widget.md), `inTag?`: `string`, `inPayLoad?`: `any`, `inPivot?`: [`DragPivot`](../enums/mw.DragPivot.md), `inOffset?`: [`Vector2`](mw.Vector2.md)): [`DragDropOperation`](mw.DragDropOperation.md) <Badge type="tip" text="client" />  |
| 创建 DragDrop 事件|
| **[remove](mw.UIScript.md#remove)**(): `void` <Badge type="tip" text="client" />  |
| 移除 UI 对象|
| **[setVisible](mw.UIScript.md#setvisible)**(`inVisible`: `boolean`  [`SlateVisibility`](../enums/mw.SlateVisibility.md), `...params`: `any`[]): `void` <Badge type="tip" text="client" />  |
| 设置 UI 是否显示|
| **[addBehavior](mw.UIScript.md#addbehavior)**(`key`: `string`, `value`: `any`): `void` <Badge type="tip" text="client" />  |
| 添加一个全局行为|
| **[clearBehavior](mw.UIScript.md#clearbehavior)**(): `void` <Badge type="tip" text="client" />  |
| 清空全局一个行为|
| **[getBehavior](mw.UIScript.md#getbehavior)**(`key`: `string`): `any` <Badge type="tip" text="client" />  |
| 执行一个全局的行为|
| **[removeBehavior](mw.UIScript.md#removebehavior)**(`key`: `string`): `void` <Badge type="tip" text="client" />  |
| 移除全局一个行为|
:::


## Accessors

___

### closeBtn <Score text="closeBtn" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **closeBtn**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


关闭按钮

#### Returns

| [`StaleButton`](mw.StaleButton.md) | [IBagSkin](mwext.IBagSkin.md).[closeBtn](mwext.IBagSkin.md#closebtn) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### content <Score text="content" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **content**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


背包格子的容器

#### Returns

| [`Canvas`](mw.Canvas.md) | [IBagSkin](mwext.IBagSkin.md).[content](mwext.IBagSkin.md#content) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### filterBox <Score text="filterBox" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **filterBox**(): [`InputBox`](mw.InputBox.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


过滤输入框

#### Returns

| [`InputBox`](mw.InputBox.md) | [IBagSkin](mwext.IBagSkin.md).[filterBox](mwext.IBagSkin.md#filterbox) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### filterCanvas <Score text="filterCanvas" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **filterCanvas**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


搜索框所在容易,打开/关闭搜索功能隐藏/显示该容器

#### Returns

</td>
</tr></tbody>
</table>

| [`Canvas`](mw.Canvas.md) | [IBagSkin](mwext.IBagSkin.md).[filterCanvas](mwext.IBagSkin.md#filtercanvas) |
| :------ | :------ |

## Methods
