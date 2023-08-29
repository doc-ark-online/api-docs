[UTILITY](../groups/UTILITY.UTILITY.md) / IPanelView

# IPanelView <Badge type="tip" text="Interface" /> <Score text="IPanelView" />

主面板View接口

## Hierarchy

- [`UIBehavior`](../classes/UI.UIBehavior.md)

  ↳ **`IPanelView`**

## Table of contents

| Properties |
| :-----|
| **[mClose\_btn](Extension.IPanelView.md#mclose_btn)**: [`StaleButton`](../classes/UI.StaleButton.md) <br> 关闭按钮|
| **[mContent](Extension.IPanelView.md#mcontent)**: [`Canvas`](../classes/UI.Canvas.md) <br> 显示条目节点画布|
| **[mFieldName](Extension.IPanelView.md#mfieldname)**: [`Canvas`](../classes/UI.Canvas.md) <br> 字段名节点画布|
| **[mSelfList](Extension.IPanelView.md#mselflist)**: [`Canvas`](../classes/UI.Canvas.md) <br> 自己排行信息节点画布|
| **[mTitle\_txt](Extension.IPanelView.md#mtitle_txt)**: [`TextBlock`](../classes/UI.TextBlock.md) <br> 标题|

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

### mClose\_btn <Score text="mClose" /> 

• **mClose\_btn**: [`StaleButton`](../classes/UI.StaleButton.md)

关闭按钮

___

### mContent <Score text="mContent" /> 

• **mContent**: [`Canvas`](../classes/UI.Canvas.md)

显示条目节点画布

___

### mFieldName <Score text="mFieldName" /> 

• **mFieldName**: [`Canvas`](../classes/UI.Canvas.md)

字段名节点画布

___

### mSelfList <Score text="mSelfList" /> 

• **mSelfList**: [`Canvas`](../classes/UI.Canvas.md)

自己排行信息节点画布

___

### mTitle\_txt <Score text="mTitle" /> 

• **mTitle\_txt**: [`TextBlock`](../classes/UI.TextBlock.md)

标题

## Accessors

## Methods