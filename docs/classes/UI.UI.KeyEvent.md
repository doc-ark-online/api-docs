[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / KeyEvent

# Class: KeyEvent

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).KeyEvent

**`Author`**

wujie

**`Description`**

按键事件

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.KeyEvent.md#constructor)

### Methods

- [getKey](UI.UI.KeyEvent.md#getkey)
- [getUserIndex](UI.UI.KeyEvent.md#getuserindex)
- [toInputEvent](UI.UI.KeyEvent.md#toinputevent)

## Constructors

### constructor

• `Private` **new KeyEvent**()

**`Description`**

默认构造

#### Defined in

UI/index.d.ts:4102

## Methods

### getKey

▸ **getKey**(): [`KeyEvent`](UI.UI.KeyEvent.md)

**`Description`**

获取按下的键

**`Effect`**

只在客户端调用生效

#### Returns

[`KeyEvent`](UI.UI.KeyEvent.md)

返回按下的键

#### Defined in

UI/index.d.ts:4120

___

### getUserIndex

▸ **getUserIndex**(): `number`

**`Description`**

获取事件触发玩家index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回事件触发玩家index

#### Defined in

UI/index.d.ts:4114

___

### toInputEvent

▸ **toInputEvent**(): [`InputEvent`](UI.UI.InputEvent.md)

**`Description`**

转化为 InputEvent*

**`Effect`**

只在客户端调用生效

#### Returns

[`InputEvent`](UI.UI.InputEvent.md)

返回转化后 InputEvent

#### Defined in

UI/index.d.ts:4108
