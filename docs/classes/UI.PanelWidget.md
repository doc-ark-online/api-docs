[UI](../modules/UI.UI.md) / PanelWidget

# PanelWidget <Badge type="tip" text="Class" />

**`Description`**

UI的PanelWidget可以挂载子节点

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`PanelWidget`**

  ↳↳ [`Canvas`](UI.Canvas.md)

  ↳↳ [`ScrollBox`](UI.ScrollBox.md)

## Table of contents

| Accessors |
| :-----|

| Methods |
| :-----|
| **[addChild](UI.PanelWidget.md#addchild)**([`Widget`](UI.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](UI.PanelWidget.md#findchildbypath)**(`string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.PanelWidget.md#getchildat)**(`number`): [`Widget`](UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.PanelWidget.md#getchildbyname)**<extends [`Widget`](UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](UI.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.PanelWidget.md#removechild)**([`Widget`](UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.PanelWidget.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|

## Accessors

## Methods

### addChild

▸ **addChild**(`child`): `void`

**`Description`**

添加子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.Widget.md) | 子控件 |

#### Returns

`void`


### findChildByPath

▸ **findChildByPath**(`inPath`): [`Widget`](UI.Widget.md)

**`Description`**

通过相对路径查找节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPath` | `string` | 查找路径 |

#### Returns

[`Widget`](UI.Widget.md)

找到的控件

___

### getChildAt

▸ **getChildAt**(`index`): [`Widget`](UI.Widget.md)

**`Description`**

获取第几位子节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

#### Returns

[`Widget`](UI.Widget.md)

找到的控件

___

### getChildByName

▸ **getChildByName**<`T`\>(`name`): `T`

**`Description`**

通过名字查找节点

**`Effect`**

只在客户端调用生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Widget`](UI.Widget.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`T`

找到的控件

___

### getChildrenCount

▸ **getChildrenCount**(): `number`

**`Description`**

获取子节点数量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

子节点数量


### removeAllChildren

▸ **removeAllChildren**(): `void`

**`Description`**

清除所有子节点,会销毁UI无法再使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### removeChild

▸ **removeChild**(`child`): `void`

**`Description`**

移除节点,会销毁UI无法在使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Widget`](UI.Widget.md) | 需要移除的子控件 |

#### Returns

`void`

___

### removeChildAt

▸ **removeChildAt**(`index`): `void`

**`Description`**

移除第几个节点,会销毁UI无法再使用

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 下标 |

#### Returns

`void`
