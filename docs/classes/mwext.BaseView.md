[拓展](../groups/Extension.拓展.md) / BaseView

# BaseView <Badge type="tip" text="Class" /> <Score text="BaseView" />

界面类的基类

## Hierarchy

- `UIScript`

  ↳ **`BaseView`**

  ↳↳ [`BasePanel`](mwext.BasePanel.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[holdBackTouch](mwext.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void`  |
| :-----|
| 是否阻挡场景点击|
| **[isShow](mwext.BaseView.md#isshow)**(): `boolean`  |
| 判断界面是否处于显示状态|

### Methods <Score text="Methods" /> 
| **[getCanvasChildren](mwext.BaseView.md#getcanvaschildren)**<`T`: extends `Widget`<`T`\>\>(`canvas`: `Canvas`, `getType`: `TypeName`<`T`: extends `Widget`<`T`\>\>): `T`: extends `Widget`<`T`\>[] <Badge type="tip" text="client" />  |
| :-----|
| 根据类型获取画布下子对象序列|
| **[hide](mwext.BaseView.md#hide)**(): `void` <Badge type="tip" text="client" />  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show)**(`...params`: `any`[]): `void` <Badge type="tip" text="client" />  |
| 显示全局唯一界面|
| **[create](mwext.BaseView.md#create)**<`T`: extends `UIScript`<`T`\>\>(): `T`: extends `UIScript`<`T`\> <Badge type="tip" text="client" />  |
| 创建界面|
| **[hide](mwext.BaseView.md#hide-1)**(): `void` <Badge type="tip" text="client" />  |
| 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show-1)**(`...params`: `any`[]): `void` <Badge type="tip" text="client" />  |
| 显示全局唯一界面|

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

| `canvas` `Canvas` |  当前组件 |
| :------ | :------ |
| `getType` `TypeName`<`T`\> |  想要获取的类型 |

#### Returns

| `T`[] | 所有符合类型的子对象 |
| :------ | :------ |

#### Type parameters

| `T` | extends `Widget`<`T`\> |
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

| `T` | extends `UIScript`<`T`\> |
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

