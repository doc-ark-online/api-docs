[Gui](../groups/Core.Gui.md) / BasePanel

# BasePanel<T\> <Badge type="tip" text="Class" /> <Score text="BasePanel<T\>" />

面板类的基类，可用于控制一个界面

::: warning Precautions

注意：如子类重写onAwake，onAdded方法，请调用super的对应方法

:::

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md) |

## Hierarchy

- [`BaseView`](mw.BaseView.md)

  ↳ **`BasePanel`**

  ↳↳ [`LeaderboardItemPanelBase`](mw.LeaderboardItemPanelBase.md)

  ↳↳ [`LeaderboardMainPaneBase`](mw.LeaderboardMainPaneBase.md)

## Table of contents

| Accessors |
| :-----|
| **[size](mw.BasePanel.md#size)**(): [`Vector2`](mw.Vector2.md) <br> 面板尺寸|
| **[view](mw.BasePanel.md#view)**(): `T` <br> 面板所控制的界面|


::: details 点击查看继承
| Accessors |
| :-----|
| **[holdBackTouch](mw.BaseView.md#holdbacktouch)**(`value`: `boolean`): `void` <br> 是否阻挡场景点击|
| **[isShow](mw.BaseView.md#isshow)**(): `boolean` <br> 判断界面是否处于显示状态|
:::


| Methods |
| :-----|
| **[onAdded](mw.BasePanel.md#onadded)**(): `void` <br> 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](mw.BasePanel.md#onawake)**(): `void` <br> 生命周期方法-构建面板自动触发，只会调用一次|


::: details 点击查看继承
| Methods |
| :-----|
| **[getCanvasChildren](mw.BaseView.md#getcanvaschildren)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`canvas`: [`Canvas`](mw.Canvas.md), `getType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`\>): `T`: extends [`Widget`](mw.Widget.md)<`T`\>[] <br> 根据类型获取画布下子对象序列|
| **[hide](mw.BaseView.md#hide)**(): `void` <br> 关闭全局唯一界面|
| **[show](mw.BaseView.md#show)**(`...params`: `any`[]): `void` <br> 显示全局唯一界面|
| **[create](mw.BaseView.md#create)**<`T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\>\>(): `T`: extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> <br> 创建界面|
| **[hide](mw.BaseView.md#hide-1)**(): `void` <br> 关闭全局唯一界面|
| **[show](mw.BaseView.md#show-1)**(`...params`: `any`[]): `void` <br> 显示全局唯一界面|
:::


构造方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](mw.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewClass` | [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  界面类 |

#### Overrides

[BaseView](mw.BaseView.md).[constructor](mw.BaseView.md#constructor)

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


