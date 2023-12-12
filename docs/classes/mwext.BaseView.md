[界面](../groups/Extension.界面.md) / BaseView

# BaseView <Badge type="tip" text="Class" /> <Score text="BaseView" />

界面类的基类

## Hierarchy

- [`UIScript`](mw.UIScript.md)

  ↳ **`BaseView`**

  ↳↳ [`BasePanel`](mwext.BasePanel.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[holdBackTouch](mwext.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void`  |
| :-----|
| 是否阻挡场景点击|
| **[isShow](mwext.BaseView.md#isshow)**(): `boolean`  |
| 判断界面是否处于显示状态|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[canUpdate](mw.UIScript.md#canupdate)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 设置是否能触发 UI 中 onUpdate 生命周期函数|
| **[fullScreen](mw.UIScript.md#fullscreen)**(`inFull`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](mw.UIScript.md#layer)**(): `number` <Badge type="tip" text="client" />  |
| 显示可能会影响到 zOrder，使用 UIService 显示 UI 时，会根据 Layer 层级动态设置 zOrder，每一次调用都会重新计算当前 layer 的新 zOrder，确保 UI 位于当前层级的顶端。|
| **[rootCanvas](mw.UIScript.md#rootcanvas)**(): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />  |
| 获取 UI 的根 Canvas 节点|
| **[uiObject](mw.UIScript.md#uiobject)**(): [`Widget`](mw.Widget.md)  |
| 获取 UI 顶层控件对象|
| **[uiWidgetBase](mw.UIScript.md#uiwidgetbase)**(): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />  |
| 获取 UI 顶层控件对象|
| **[visible](mw.UIScript.md#visible)**(): `boolean` <Badge type="tip" text="client" />  |
| 会触发绑定的脚本生命周期中 OnShow/OnHide 事件，需要传递参数的可以使用 setVisible 方法。|
:::


### Methods <Score text="Methods" /> 
| **[getCanvasChildren](mwext.BaseView.md#getcanvaschildren)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`canvas`: [`Canvas`](mw.Canvas.md), `getType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>): `T`: extends [`Widget`](mw.Widget.md)<`T`\>[] <Badge type="tip" text="client" />  |
| :-----|
| 根据类型获取画布下子对象序列|
| **[hide](mwext.BaseView.md#hide)**(): `void` <Badge type="tip" text="client" />  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show)**(`...params`: `any`[]): `void` <Badge type="tip" text="client" />  |
| 显示全局唯一界面|
| **[create](mwext.BaseView.md#create)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <Badge type="tip" text="client" />  |
| 创建界面|
| **[hide](mwext.BaseView.md#hide-1)**(): `void` <Badge type="tip" text="client" />  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show-1)**(`...params`: `any`[]): `void` <Badge type="tip" text="client" />  |
| 显示全局唯一界面|


::: details 点击查看继承
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
| 会触发绑定的脚本的 OnShow/OnHide 事件，可以传递参数。|
| **[addBehavior](mw.UIScript.md#addbehavior)**(`key`: `string`, `value`: `any`): `void` <Badge type="tip" text="client" />  |
| UI 事件通信的一种更加简便的方式。|
| **[clearBehavior](mw.UIScript.md#clearbehavior)**(): `void` <Badge type="tip" text="client" />  |
| 清空全局一个行为|
| **[getBehavior](mw.UIScript.md#getbehavior)**(`key`: `string`): `any` <Badge type="tip" text="client" />  |
| 执行一个全局的行为|
| **[removeBehavior](mw.UIScript.md#removebehavior)**(`key`: `string`): `void` <Badge type="tip" text="client" />  |
| 移除全局一个行为|
:::


## Accessors

___

### holdBackTouch <Score text="holdBackTouch" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `set` **holdBackTouch**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否阻挡场景点击

#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isShow <Score text="isShow" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isShow**(): `boolean`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


判断界面是否处于显示状态

#### Returns

</td>
</tr></tbody>
</table>

| `boolean` |  |
| :------ | :------ |

## Methods

___

### getCanvasChildren <Score text="getCanvasChildren" /> 

• `Protected` **getCanvasChildren**<`T`\>(`canvas`, `getType`): `T`[] <Badge type="tip" text="client" />

根据类型获取画布下子对象序列

#### Parameters

| `canvas` [`Canvas`](mw.Canvas.md) |  当前组件 |
| :------ | :------ |
| `getType` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  想要获取的类型 |

#### Returns

| `T`[] | 所有符合类型的子对象 |
| :------ | :------ |

#### Type parameters

| `T` | extends [`Widget`](mw.Widget.md)<`T`\> |
| :------ | :------ |

___

### hide <Score text="hide" /> 

• **hide**(): `void` <Badge type="tip" text="client" />

关闭界面


___

### show <Score text="show" /> 

• **show**(`...params`): `void` <Badge type="tip" text="client" />

显示界面

#### Parameters

| `...params` `any`[] |  参数序列,参数会传到界面的onShow生命周期方法中 |
| :------ | :------ |


#### Parameters

| `...params` `any`[] |  参数序列,参数会传到界面的onShow生命周期方法中 |
| :------ | :------ |
___

### create <Score text="create" /> 

• `Static` **create**<`T`\>(): `T` <Badge type="tip" text="client" />

创建界面

#### Returns

| `T` | 界面对象 |
| :------ | :------ |

#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

___

### hide <Score text="hide" /> 

• `Static` **hide**(): `void` <Badge type="tip" text="client" />

关闭全局唯一界面


___

### show <Score text="show" /> 

• `Static` **show**(`...params`): `void` <Badge type="tip" text="client" />

显示全局唯一界面

::: warning Precautions

这种方式会先创建一个全局唯一界面

:::

#### Parameters

| `...params` `any`[] |  参数序列,参数会传到界面的onShow生命周期方法中 |
| :------ | :------ |

