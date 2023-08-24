[EXTENSION](../groups/Extension.EXTENSION.md) / BasePanel

# BasePanel<T\> <Badge type="tip" text="Class" /> <Score text="BasePanel<T\>" />

面板类的基类，可用于控制一个界面

::: warning Precautions

注意：如子类重写onAwake，onAdded方法，请调用super的对应方法

:::

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md) |

## Hierarchy

- [`BaseView`](mwext.BaseView.md)

  ↳ **`BasePanel`**

  ↳↳ [`LeaderboardItemPanelBase`](mwext.LeaderboardItemPanelBase.md)

  ↳↳ [`LeaderboardMainPanelBase`](mwext.LeaderboardMainPanelBase.md)

## Table of contents

| Accessors |
| :-----|
| **[size](mwext.BasePanel.md#size)**(): [`Vector2`](mw.Vector2.md) <br> 面板尺寸|
| **[view](mwext.BasePanel.md#view)**(): `T` <br> 面板所控制的界面|


::: details 点击查看继承
| Accessors |
| :-----|
| **[holdBackTouch](mwext.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void` <br> 是否阻挡场景点击|
| **[isShow](mwext.BaseView.md#isshow)**(): `boolean` <br> 判断界面是否处于显示状态|
:::


| Methods |
| :-----|
| **[onAdded](mwext.BasePanel.md#onadded)**(): `void` <br> 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](mwext.BasePanel.md#onawake)**(): `void` <br> 生命周期方法-构建面板自动触发，只会调用一次|


::: details 点击查看继承
| Methods |
| :-----|
| **[getCanvasChildren](mwext.BaseView.md#getcanvaschildren)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`canvas`: [`Canvas`](mw.Canvas.md), `getType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`\>): `T`: extends [`Widget`](mw.Widget.md)<`T`\>[] <br> 根据类型获取画布下子对象序列|
| **[hide](mwext.BaseView.md#hide)**(): `void` <br> 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show)**(`...params`: `any`[]): `void` <br> 显示全局唯一界面|
| **[create](mwext.BaseView.md#create)**<`T`: extends [`UIScript`](mw.UIScript.md)<`T`\>\>(): `T`: extends [`UIScript`](mw.UIScript.md)<`T`\> <br> 创建界面|
| **[hide](mwext.BaseView.md#hide-1)**(): `void` <br> 关闭全局唯一界面|
| **[show](mwext.BaseView.md#show-1)**(`...params`: `any`[]): `void` <br> 显示全局唯一界面|
:::


构造方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewClass` | [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  界面类 |

#### Overrides

[BaseView](mwext.BaseView.md).[constructor](mwext.BaseView.md#constructor)

## Accessors
___

### size <Score text="size" /> 

• `get` **size**(): [`Vector2`](mw.Vector2.md)

面板尺寸

#### Returns

[`Vector2`](mw.Vector2.md)

• `set` **size**(`value`): `void`

面板尺寸

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](mw.Vector2.md) |


___

### view <Score text="view" /> 

• `Protected` `get` **view**(): `T`

面板所控制的界面

#### Returns

`T`


## Methods
___

### onAdded <Score text="onAdded" /> 

• `Protected` **onAdded**(): `void` <Badge type="tip" text="client" />

生命周期-被添加到父节点时候触发，可能会多次调用



___

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="client" />

生命周期方法-构建面板自动触发，只会调用一次


