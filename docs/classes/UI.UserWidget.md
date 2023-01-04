[UI](../modules/UI.UI.md) / UserWidget

# UserWidget <Badge type="tip" text="Class" />

**`Description`**

UI控件的集合,预制体UI

## Hierarchy

- [`Widget`](UI.Widget.md)

  ↳ **`UserWidget`**

  ↳↳ [`UserWidgetPrefab`](UI.UserWidgetPrefab.md)

## Table of contents

| Accessors |
| :-----|
| **[focusable](UI.UserWidget.md#focusable)**(): `boolean` <br> 获取是否响应键盘焦点事件|
| **[rootContent](UI.UserWidget.md#rootcontent)**(): [`Canvas`](UI.Canvas.md) <br> 获取根Canvas|

| Methods |
| :-----|
| **[addToViewport](UI.UserWidget.md#addtoviewport)**(`number`): `void` <br> 添加到屏幕上|
| **[findChildByPath](UI.UserWidget.md#findchildbypath)**(`string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[removeRootContent](UI.UserWidget.md#removerootcontent)**(): `void` <br> 移除根Canvas,会销毁根Canvas，无法再次使用|
| **[newObject](UI.UserWidget.md#newobject)**([`Canvas`](UI.Canvas.md)): [`UserWidget`](UI.UserWidget.md) <br> 创建 UserWidget 控件|

## Accessors

### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回相应键盘的焦点事件

• `set` **focusable**(`isFocus`): `void`

**`Description`**

设置是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isFocus` | `boolean` | 是否相应 |

#### Returns

`void`


### rootContent

• `get` **rootContent**(): [`Canvas`](UI.Canvas.md)

**`Description`**

获取根Canvas

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.Canvas.md)

返回根Canvas

• `set` **rootContent**(`content`): `void`

**`Description`**

设置UI的根Canvas

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | [`Canvas`](UI.Canvas.md) | 根UI的内容 |

#### Returns

`void`


## Methods

### addToViewport

▸ **addToViewport**(`zOrder`): `void`

**`Description`**

添加到屏幕上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zOrder` | `number` | 添加到屏幕的层级关系 |

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
| `inPath` | `string` | 路径 |

#### Returns

[`Widget`](UI.Widget.md)

返回查找节点结果


### removeRootContent

▸ **removeRootContent**(): `void`

**`Description`**

移除根Canvas,会销毁根Canvas，无法再次使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### newObject

▸ `Static` **newObject**(`parent?`): [`UserWidget`](UI.UserWidget.md)

**`Description`**

创建 UserWidget 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外Outer对象 default:null |

#### Returns

[`UserWidget`](UI.UserWidget.md)

返回创建的控件
