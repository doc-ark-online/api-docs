[界面](../groups/Extension.界面.md) / BasePanel

# BasePanel<T\> <Badge type="tip" text="Class" /> <Score text="BasePanel<T\>" />

面板类的基类，可用于控制一个界面

::: warning Precautions

注意：如子类重写onAwake，onAdded方法，请调用super的对应方法

:::

## Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md) |
| :------ | :------ |

## Hierarchy

- [`BaseView`](mwext.BaseView.md)

  ↳ **`BasePanel`**

  ↳↳ [`LeaderboardItemPanelBase`](mwext.LeaderboardItemPanelBase.md)

  ↳↳ [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[size](mwext.BasePanel.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| :-----|
| 面板尺寸|
| **[view](mwext.BasePanel.md#view)**(): `T`  |
| 面板所控制的界面|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[holdBackTouch](mwext.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void`  |
| :-----|
| 是否阻挡场景点击|
| **[isShow](mwext.BaseView.md#isshow)**(): `boolean`  |
| 判断界面是否处于显示状态|
:::


### Methods <Score text="Methods" /> 
| **[onAdded](mwext.BasePanel.md#onadded)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](mwext.BasePanel.md#onawake)**(): `void` <Badge type="tip" text="client" />  |
| 生命周期方法-构建面板自动触发，只会调用一次|


::: details 点击查看继承
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
:::


构造方法

#### Type parameters

| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `viewClass` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  界面类 |
| :------ | :------ |

#### Overrides

[BaseView](mwext.BaseView.md).[constructor](mwext.BaseView.md#constructor)

## Accessors

___

### size <Score text="size" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **size**(): [`Vector2`](mw.Vector2.md)

</th>
<th style="text-align: left">

• `set` **size**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


面板尺寸

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


面板尺寸

#### Parameters

| `value` | [`Vector2`](mw.Vector2.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### view <Score text="view" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **view**(): `T`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


面板所控制的界面

#### Returns

</td>
</tr></tbody>
</table>

| `T` |  |
| :------ | :------ |

## Methods

___

### onAdded <Score text="onAdded" /> 

• `Protected` **onAdded**(): `void` <Badge type="tip" text="client" />

生命周期-被添加到父节点时候触发，可能会多次调用


___

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="client" />

生命周期方法-构建面板自动触发，只会调用一次

