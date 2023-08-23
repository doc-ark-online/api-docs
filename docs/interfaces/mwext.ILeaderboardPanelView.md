[UTILITY](../groups/Extension.UTILITY.md) / ILeaderboardPanelView

# ILeaderboardPanelView <Badge type="tip" text="Interface" /> <Score text="ILeaderboardPanelView" />

主面板View接口

## Hierarchy

- [`UIScript`](../classes/mw.UIScript.md)

  ↳ **`ILeaderboardPanelView`**

## Table of contents

| Properties |
| :-----|
| **[mClose\_btn](mwext.ILeaderboardPanelView.md#mclose_btn)**: [`StaleButton`](../classes/mw.StaleButton.md) <br> 关闭按钮|
| **[mContent](mwext.ILeaderboardPanelView.md#mcontent)**: [`Canvas`](../classes/mw.Canvas.md) <br> 显示条目节点画布|
| **[mFieldName](mwext.ILeaderboardPanelView.md#mfieldname)**: [`Canvas`](../classes/mw.Canvas.md) <br> 字段名节点画布|
| **[mSelfList](mwext.ILeaderboardPanelView.md#mselflist)**: [`Canvas`](../classes/mw.Canvas.md) <br> 自己排行信息节点画布|
| **[mTitle\_txt](mwext.ILeaderboardPanelView.md#mtitle_txt)**: [`TextBlock`](../classes/mw.TextBlock.md) <br> 标题|

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[canUpdate](mw.UIScript.md#canupdate)**(): `boolean` <br> 是否能触发onUpdate函数|
| **[fullScreen](mw.UIScript.md#fullscreen)**(`inFull`: `boolean`): `void` <br> 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](mw.UIScript.md#layer)**(): `number` <br> 获取UI的Layer层级,显示可能会影响到zOrder,使用UIService显示UI时，|
| **[rootCanvas](mw.UIScript.md#rootcanvas)**(): [`Canvas`](mw.Canvas.md) <br> 获取UI的根Canvas节点|
| **[uiObject](mw.UIScript.md#uiobject)**(): [`Widget`](mw.Widget.md) <br> 获取脚本挂载的UI对象|
| **[uiWidgetBase](mw.UIScript.md#uiwidgetbase)**(): [`UserWidget`](mw.UserWidget.md) <br> 转化UIObject 为指定UserWidget对象|
| **[visible](mw.UIScript.md#visible)**(): `boolean` <br> 获取UI是否显示|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[destroy](mw.UIScript.md#destroy)**(): `void` <br> 销毁UI对象|
| **[detectDrag](mw.UIScript.md#detectdrag)**(`dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <br> 触发DragDrop事件的检测|
| **[detectDragIfPressed](mw.UIScript.md#detectdragifpressed)**(`inPointEvent`: [`PointerEvent`](mw.PointerEvent.md), `dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md) <br> 如果事件检测通过就触发DragDrop事件的回复|
| **[newDragDrop](mw.UIScript.md#newdragdrop)**(`inVisualWidget`: [`Widget`](mw.Widget.md), `inTag?`: `string`, `inPayLoad?`: `any`, `inPivot?`: [`DragPivot`](../enums/mw.DragPivot.md), `inOffset?`: [`Vector2`](mw.Vector2.md)): [`DragDropOperation`](mw.DragDropOperation.md) <br> 创建DragDrop事件|
| **[remove](mw.UIScript.md#remove)**(): `void` <br> 移除UI对象|
| **[setVisible](mw.UIScript.md#setvisible)**(`inVisible`: `boolean` \, `...params`: `any`[]): `void` <br> 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数|
| **[addBehavior](mw.UIScript.md#addbehavior)**(`key`: `string`, `value`: `any`): `void` <br> 添加一个全局的行为记录|
| **[clearBehavior](mw.UIScript.md#clearbehavior)**(): `void` <br> 清空全局的行为记录|
| **[getBehavior](mw.UIScript.md#getbehavior)**(`key`: `string`): `any` <br> 获取一个全局的行为记录|
| **[removeBehavior](mw.UIScript.md#removebehavior)**(`key`: `string`): `void` <br> 移除一个全局的行为记录|
:::


## Properties

### mClose\_btn <Score text="mClose" /> 

• **mClose\_btn**: [`StaleButton`](../classes/mw.StaleButton.md)

关闭按钮

___

### mContent <Score text="mContent" /> 

• **mContent**: [`Canvas`](../classes/mw.Canvas.md)

显示条目节点画布

___

### mFieldName <Score text="mFieldName" /> 

• **mFieldName**: [`Canvas`](../classes/mw.Canvas.md)

字段名节点画布

___

### mSelfList <Score text="mSelfList" /> 

• **mSelfList**: [`Canvas`](../classes/mw.Canvas.md)

自己排行信息节点画布

___

### mTitle\_txt <Score text="mTitle" /> 

• **mTitle\_txt**: [`TextBlock`](../classes/mw.TextBlock.md)

标题

## Accessors

## Methods