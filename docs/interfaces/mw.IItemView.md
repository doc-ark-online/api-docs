[Utility](../groups/Core.Utility.md) / IItemView

# IItemView <Badge type="tip" text="Interface" /> <Score text="IItemView" />

一条数据的View接口

## Hierarchy

- [`UIBehavior`](../classes/mw.UIBehavior.md)

  ↳ **`IItemView`**

## Table of contents

| Properties |
| :-----|
| **[mContent](mw.IItemView.md#mcontent)**: [`Canvas`](../classes/mw.Canvas.md) <br> 内容画布|

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[canUpdate](mw.UIBehavior.md#canupdate)**(): `boolean` <br> 是否能触发onUpdate函数|
| **[fullScreen](mw.UIBehavior.md#fullscreen)**(`inFull`: `boolean`): `void` <br> 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](mw.UIBehavior.md#layer)**(): `number` <br> 获取UI的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，|
| **[rootCanvas](mw.UIBehavior.md#rootcanvas)**(): [`Canvas`](mw.Canvas.md) <br> 获取UI的根Canvas节点|
| **[uiObject](mw.UIBehavior.md#uiobject)**(): [`Widget`](mw.Widget.md) <br> 获取脚本挂载的UI对象|
| **[uiWidgetBase](mw.UIBehavior.md#uiwidgetbase)**(): [`UserWidget`](mw.UserWidget.md) <br> 转化UIObject 为指定UserWidget对象|
| **[visible](mw.UIBehavior.md#visible)**(): `boolean` <br> 获取UI是否显示|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroy](mw.UIBehavior.md#destroy)**(): `void` <br> 销毁UI对象|
| **[detectDrag](mw.UIBehavior.md#detectdrag)**(`dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <br> 触发DragDrop事件的检测|
| **[detectDragIfPressed](mw.UIBehavior.md#detectdragifpressed)**(`inPointEvent`: [`PointerEvent`](mw.PointerEvent.md), `dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <br> 如果事件检测通过就触发DragDrop事件的回复|
| **[newDragDrop](mw.UIBehavior.md#newdragdrop)**(`inVisualWidget`: [`Widget`](mw.Widget.md), `inTag?`: `string`, `inPayLoad?`: `any`, `inPivot?`: [`DragPivot`](../enums/mw.DragPivot.md), `inOffset?`: [`Vector2`](mw.Vector2.md)): [`DragDropOperation`](mw.DragDropOperation.md) <br> 创建DragDrop事件|
| **[remove](mw.UIBehavior.md#remove)**(): `void` <br> 移除UI对象|
| **[setVisible](mw.UIBehavior.md#setvisible)**(`inVisible`: `boolean` \, `...params`: `any`[]): `void` <br> 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数|
| **[addBehavior](mw.UIBehavior.md#addbehavior)**(`key`: `string`, `value`: `any`): `void` <br> 添加一个全局的行为记录|
| **[clearBehavior](mw.UIBehavior.md#clearbehavior)**(): `void` <br> 清空全局的行为记录|
| **[getBehavior](mw.UIBehavior.md#getbehavior)**(`key`: `string`): `any` <br> 获取一个全局的行为记录|
| **[removeBehavior](mw.UIBehavior.md#removebehavior)**(`key`: `string`): `void` <br> 移除一个全局的行为记录|
:::


## Properties

### mContent <Score text="mContent" /> 

• **mContent**: [`Canvas`](../classes/mw.Canvas.md)

内容画布

## Accessors

## Methods