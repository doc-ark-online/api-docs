[UTILITY](../groups/UTILITY.UTILITY.md) / IItemView

# IItemView <Badge type="tip" text="Interface" /> <Score text="IItemView" />

一条数据的View接口

## Hierarchy

- [`UIBehavior`](../classes/UI.UIBehavior.md)

  ↳ **`IItemView`**

## Table of contents

| Properties |
| :-----|
| **[mContent](Extension.IItemView.md#mcontent)**: [`Canvas`](../classes/UI.Canvas.md) <br> 内容画布|

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[canUpdate](UI.UIBehavior.md#canupdate)**(): `boolean` <br> 是否能触发onUpdate函数|
| **[fullScreen](UI.UIBehavior.md#fullscreen)**(`inFull`: `boolean`): `void` <br> 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](UI.UIBehavior.md#layer)**(): `number` <br> 获取UI的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，|
| **[rootCanvas](UI.UIBehavior.md#rootcanvas)**(): [`Canvas`](UI.Canvas.md) <br> 获取UI的根Canvas节点|
| **[uiObject](UI.UIBehavior.md#uiobject)**(): [`Widget`](UI.Widget.md) <br> 获取脚本挂载的UI对象|
| **[uiWidgetBase](UI.UIBehavior.md#uiwidgetbase)**(): [`UserWidget`](UI.UserWidget.md) <br> 转化UIObject 为指定UserWidget对象|
| **[visible](UI.UIBehavior.md#visible)**(): `boolean` <br> 获取UI是否显示|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroy](UI.UIBehavior.md#destroy)**(): `void` <br> 销毁UI对象|
| **[detectDrag](UI.UIBehavior.md#detectdrag)**(`dragKey`: [`Keys`](../enums/Type.Keys.md)): [`EventReply`](UI.EventReply.md) <br> 触发DragDrop事件的检测|
| **[detectDragIfPressed](UI.UIBehavior.md#detectdragifpressed)**(`inPointEvent`: [`PointerEvent`](UI.PointerEvent.md), `dragKey`: [`Keys`](../enums/Type.Keys.md)): [`EventReply`](UI.EventReply.md) <br> 如果事件检测通过就触发DragDrop事件的回复|
| **[newDragDrop](UI.UIBehavior.md#newdragdrop)**(`inVisualWidget`: [`Widget`](UI.Widget.md), `inTag?`: `string`, `inPayLoad?`: `any`, `inPivot?`: [`DragPivot`](../enums/UI.DragPivot.md), `inOffset?`: [`Vector2`](Type.Vector2.md)): [`DragDropOperation`](UI.DragDropOperation.md) <br> 创建DragDrop事件|
| **[remove](UI.UIBehavior.md#remove)**(): `void` <br> 移除UI对象|
| **[setVisible](UI.UIBehavior.md#setvisible)**(`inVisible`: `boolean` \, `...params`: `any`[]): `void` <br> 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数|
| **[addBehavior](UI.UIBehavior.md#addbehavior)**(`key`: `string`, `value`: `any`): `void` <br> 添加一个全局的行为记录|
| **[clearBehavior](UI.UIBehavior.md#clearbehavior)**(): `void` <br> 清空全局的行为记录|
| **[getBehavior](UI.UIBehavior.md#getbehavior)**(`key`: `string`): `any` <br> 获取一个全局的行为记录|
| **[removeBehavior](UI.UIBehavior.md#removebehavior)**(`key`: `string`): `void` <br> 移除一个全局的行为记录|
:::


## Properties

### mContent <Score text="mContent" /> 

• **mContent**: [`Canvas`](../classes/UI.Canvas.md)

内容画布

## Accessors

## Methods