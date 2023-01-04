[UI](../modules/UI.UI.md) / KeyEvent

# KeyEvent <Badge type="tip" text="Class" />

**`Description`**

按键事件

## Table of contents

| Methods |
| :-----|
| **[getKey](UI.KeyEvent.md#getkey)**(): [`KeyEvent`](UI.KeyEvent.md) <br> 获取按下的键|
| **[getUserIndex](UI.KeyEvent.md#getuserindex)**(): `number` <br> 获取事件触发玩家index|
| **[toInputEvent](UI.KeyEvent.md#toinputevent)**(): [`InputEvent`](UI.InputEvent.md) <br> 转化为 InputEvent*|

**`Description`**

默认构造

## Methods

### getKey

▸ **getKey**(): [`KeyEvent`](UI.KeyEvent.md)

**`Description`**

获取按下的键

**`Effect`**

只在客户端调用生效

#### Returns

[`KeyEvent`](UI.KeyEvent.md)

返回按下的键

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

___

### toInputEvent

▸ **toInputEvent**(): [`InputEvent`](UI.InputEvent.md)

**`Description`**

转化为 InputEvent*

**`Effect`**

只在客户端调用生效

#### Returns

[`InputEvent`](UI.InputEvent.md)

返回转化后 InputEvent
