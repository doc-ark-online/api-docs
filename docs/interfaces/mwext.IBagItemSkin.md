[拓展](../groups/Extension.拓展.md) / IBagItemSkin

# IBagItemSkin <Badge type="tip" text="Interface" /> <Score text="IBagItemSkin" />

格子皮肤

## Hierarchy

- [`UIScript`](../classes/mw.UIScript.md)

  ↳ **`IBagItemSkin`**

## Implemented by

- [`BagItemUI`](../classes/mwext.BagItemUI.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[countText](mwext.IBagItemSkin.md#counttext)**: [`TextBlock`](../classes/mw.TextBlock.md) <Badge type="tip" text="client" />  |
| :-----|
| 物品数量文本|
| **[iconButton](mwext.IBagItemSkin.md#iconbutton)**: [`Button`](../classes/mw.Button.md) <Badge type="tip" text="client" />  |
| 物品图标按钮|
| **[nameText](mwext.IBagItemSkin.md#nametext)**: [`TextBlock`](../classes/mw.TextBlock.md) <Badge type="tip" text="client" />  |
| 物品名称文本|

### Accessors <Score text="Accessors" /> 


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


## Properties

### countText <Score text="countText" /> 

• **countText**: [`TextBlock`](../classes/mw.TextBlock.md) <Badge type="tip" text="client" />

物品数量文本

___

### iconButton <Score text="iconButton" /> 

• **iconButton**: [`Button`](../classes/mw.Button.md) <Badge type="tip" text="client" />

物品图标按钮

___

### nameText <Score text="nameText" /> 

• **nameText**: [`TextBlock`](../classes/mw.TextBlock.md) <Badge type="tip" text="client" />

物品名称文本

## Accessors

## Methods
