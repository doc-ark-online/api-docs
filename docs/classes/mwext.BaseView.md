[EXTENSION](../groups/Extension.EXTENSION.md) / BaseView

# BaseView <Badge type="tip" text="Class" /> <Score text="BaseView" />

<p class="content-big"> 界面类的基类 </p>

## Hierarchy

- [`UIScript`](mw.UIScript.md)

  ↳ **`BaseView`**

  ↳↳ [`BasePanel`](mwext.BasePanel.md)

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new UIScript**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 
| **[holdBackTouch](mwext.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void`  |
| :-----|
| 是否阻挡场景点击|
| **[isShow](mwext.BaseView.md#isshow)**(): `boolean`  |
| 判断界面是否处于显示状态|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[canUpdate](mw.UIScript.md#canupdate)**(): `boolean`  |
| :-----|
| 设置是否能触发onUpdate函数|
| **[fullScreen](mw.UIScript.md#fullscreen)**(`inFull`: `boolean`): `void`  |
| 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](mw.UIScript.md#layer)**(): `number`  |
| 设置UI的所在的Layer层级,显示可能会影响到zOrder,使用UIService显示UI时，|
| **[rootCanvas](mw.UIScript.md#rootcanvas)**(): [`Canvas`](mw.Canvas.md)  |
| 获取UI的根Canvas节点|
| **[uiObject](mw.UIScript.md#uiobject)**(): [`Widget`](mw.Widget.md)  |
| 获取脚本挂载的UI对象|
| **[uiWidgetBase](mw.UIScript.md#uiwidgetbase)**(): [`UserWidget`](mw.UserWidget.md)  |
| 转化UIObject 为指定UserWidget对象|
| **[visible](mw.UIScript.md#visible)**(): `boolean`  |
| 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，需要传递参数的可以使用setVisible方法|
:::


### Methods <Score text="Methods" /> 
| **[getCanvasChildren](mwext.BaseView.md#getcanvaschildren)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`canvas`: [`Canvas`](mw.Canvas.md), `getType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>): `T`: extends [`Widget`](mw.Widget.md)<`T`\>[]  |
| :-----|
| 根据类型获取画布下子对象序列|
| **[hide](mwext.BaseView.md#hide)**(): `void`  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show)**(`...params`: `any`[]): `void`  |
| 显示全局唯一界面|
| **[create](mwext.BaseView.md#create)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\>  |
| 创建界面|
| **[hide](mwext.BaseView.md#hide-1)**(): `void`  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show-1)**(`...params`: `any`[]): `void`  |
| 显示全局唯一界面|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[destroy](mw.UIScript.md#destroy)**(): `void`  |
| :-----|
| 销毁UI对象|
| **[detectDrag](mw.UIScript.md#detectdrag)**(`dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md)  |
| 触发DragDrop事件的检测|
| **[detectDragIfPressed](mw.UIScript.md#detectdragifpressed)**(`inPointEvent`: [`PointerEvent`](mw.PointerEvent.md), `dragKey`: [`Keys`](../enums/mw.Keys.md)): [`EventReply`](mw.EventReply.md)  |
| 如果事件检测通过就触发DragDrop事件的回复|
| **[newDragDrop](mw.UIScript.md#newdragdrop)**(`inVisualWidget`: [`Widget`](mw.Widget.md), `inTag?`: `string`, `inPayLoad?`: `any`, `inPivot?`: [`DragPivot`](../enums/mw.DragPivot.md), `inOffset?`: [`Vector2`](mw.Vector2.md)): [`DragDropOperation`](mw.DragDropOperation.md)  |
| 创建DragDrop事件|
| **[remove](mw.UIScript.md#remove)**(): `void`  |
| 移除UI对象|
| **[setVisible](mw.UIScript.md#setvisible)**(`inVisible`: `boolean` \, `...params`: `any`[]): `void`  |
| 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数|
| **[addBehavior](mw.UIScript.md#addbehavior)**(`key`: `string`, `value`: `any`): `void`  |
| 添加一个全局的行为记录|
| **[clearBehavior](mw.UIScript.md#clearbehavior)**(): `void`  |
| 清空全局的行为记录|
| **[getBehavior](mw.UIScript.md#getbehavior)**(`key`: `string`): `any`  |
| 获取一个全局的行为记录|
| **[removeBehavior](mw.UIScript.md#removebehavior)**(`key`: `string`): `void`  |
| 移除一个全局的行为记录|
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

