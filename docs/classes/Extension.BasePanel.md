[Extension](../modules/Extension.Extension.md) / BasePanel

# BasePanel<T\> <Badge type="tip" text="Class" /> <Score text="BasePanel<T\>" />

面板类的基类，可用于控制一个界面

::: warning Precautions

注意：如子类重写onAwake，onAdded方法，请调用super的对应方法

:::

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](UI.UIBehavior.md) |

## Hierarchy

- [`BaseView`](Extension.BaseView.md)

  ↳ **`BasePanel`**

## Table of contents

| Accessors |
| :-----|
| **[size](Extension.BasePanel.md#size)**(): [`Vector2`](Type.Vector2.md) <br> 面板尺寸|
| **[view](Extension.BasePanel.md#view)**(): `T` <br> 面板所控制的界面|


::: details 点击查看继承
| Accessors |
| :-----|
| **[holdBackTouch](Extension.BaseView.md#holdbacktouch)**(`boolean` |): `void` <br> 是否阻挡场景点击|
| **[isShow](Extension.BaseView.md#isshow)**(): `boolean` <br> 判断界面是否处于显示状态|
:::


| Methods |
| :-----|
| **[onAdded](Extension.BasePanel.md#onadded)**(): `void` <br> 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](Extension.BasePanel.md#onawake)**(): `void` <br> 生命周期方法-构建面板自动触发，只会调用一次|


::: details 点击查看继承
| Methods |
| :-----|
| **[getCanvasChildren](Extension.BaseView.md#getcanvaschildren)**<extends [`Widget`](UI.Widget.md)<`T`\> |\>([`Canvas`](UI.Canvas.md), [`Class`](../interfaces/Type.Class.md)<`T`\>): extends [`Widget`](UI.Widget.md)<`T`\> |[] <br> 根据类型获取画布下子对象序列|
| **[hide](Extension.BaseView.md#hide)**(): `void` <br> 关闭全局唯一界面|
| **[show](Extension.BaseView.md#show)**(`any`[]): `void` <br> 显示全局唯一界面|
| **[create](Extension.BaseView.md#create)**<extends [`UIBehavior`](UI.UIBehavior.md)<`T`\> |\>(): extends [`UIBehavior`](UI.UIBehavior.md)<`T`\> | <br> 创建界面|
| **[hide](Extension.BaseView.md#hide-1)**(): `void` <br> 关闭全局唯一界面|
| **[show](Extension.BaseView.md#show-1)**(`any`[]): `void` <br> 显示全局唯一界面|
:::


构造方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIBehavior`](UI.UIBehavior.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewClass` | [`Class`](../interfaces/Type.Class.md)<`T`\> |  界面类 |

#### Overrides

[BaseView](Extension.BaseView.md).[constructor](Extension.BaseView.md#constructor)

## Accessors

### size <Score text="size" /> 

• `get` **size**(): [`Vector2`](Type.Vector2.md)

面板尺寸

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **size**(`value`): `void`

面板尺寸

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Type.Vector2.md) |



### view <Score text="view" /> 

• `Protected` `get` **view**(): `T`

面板所控制的界面

#### Returns

`T`


## Methods

### onAdded <Score text="onAdded" /> 

• `Protected` **onAdded**(): `void` <Badge type="tip" text="other" />

生命周期-被添加到父节点时候触发，可能会多次调用



___

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="other" />

生命周期方法-构建面板自动触发，只会调用一次


