[EXTENSION](../groups/Extension.EXTENSION.md) / ItemDeleteUI

# ItemDeleteUI <Badge type="tip" text="Class" /> <Score text="ItemDeleteUI" />

背包删除界面父类,继承这个类来实现自己的道具删除界面，使用BagModule.skin来指定皮肤

## Hierarchy

- [`UIScript`](mw.UIScript.md)

  ↳ **`ItemDeleteUI`**

## Implements

- [`IItemDeleteSkin`](../interfaces/mwext.IItemDeleteSkin.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[cancelButton](mwext.ItemDeleteUI.md#cancelbutton)**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />  |
| :-----|
| 取消按钮|
| **[closeButton](mwext.ItemDeleteUI.md#closebutton)**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />  |
| 关闭按钮|
| **[itemIcon](mwext.ItemDeleteUI.md#itemicon)**(): [`Image`](mw.Image.md) <Badge type="tip" text="client" />  |
| 物品图标|
| **[nameText](mwext.ItemDeleteUI.md#nametext)**(): [`TextBlock`](mw.TextBlock.md) <Badge type="tip" text="client" />  |
| 物品名字标签|
| **[okButton](mwext.ItemDeleteUI.md#okbutton)**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />  |
| 确认按钮|


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
| **[onItemShow](mwext.ItemDeleteUI.md#onitemshow)**(`cfg`: [`ItemConfig`](../interfaces/mwext.ItemConfig.md)): `void` <Badge type="tip" text="client" />  |
| :-----|
| 当显示道具时调用|


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

### cancelButton <Score text="cancelButton" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **cancelButton**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


取消按钮

**`Optional`**

可选参数

#### Returns

| [`StaleButton`](mw.StaleButton.md) | [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md).[cancelButton](../interfaces/mwext.IItemDeleteSkin.md#cancelbutton) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### closeButton <Score text="closeButton" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **closeButton**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


关闭按钮

#### Returns

| [`StaleButton`](mw.StaleButton.md) | [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md).[closeButton](../interfaces/mwext.IItemDeleteSkin.md#closebutton) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### itemIcon <Score text="itemIcon" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **itemIcon**(): [`Image`](mw.Image.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


物品图标

**`Optional`**

可选参数

#### Returns

| [`Image`](mw.Image.md) | [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md).[itemIcon](../interfaces/mwext.IItemDeleteSkin.md#itemicon) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### nameText <Score text="nameText" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **nameText**(): [`TextBlock`](mw.TextBlock.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


物品名字标签

**`Optional`**

可选参数

#### Returns

| [`TextBlock`](mw.TextBlock.md) | [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md).[nameText](../interfaces/mwext.IItemDeleteSkin.md#nametext) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### okButton <Score text="okButton" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Abstract` `get` **okButton**(): [`StaleButton`](mw.StaleButton.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


确认按钮

#### Returns

</td>
</tr></tbody>
</table>

| [`StaleButton`](mw.StaleButton.md) | [IItemDeleteSkin](../interfaces/mwext.IItemDeleteSkin.md).[okButton](../interfaces/mwext.IItemDeleteSkin.md#okbutton) |
| :------ | :------ |

## Methods

___

### onItemShow <Score text="onItemShow" /> 

• `Abstract` **onItemShow**(`cfg`): `void` <Badge type="tip" text="client" />

当显示道具时调用

#### Parameters

| `cfg` [`ItemConfig`](../interfaces/mwext.ItemConfig.md) | 道具配置 |
| :------ | :------ |

