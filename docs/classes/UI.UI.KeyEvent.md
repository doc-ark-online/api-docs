[UI](../modules/UI.UI.md) / KeyEvent

# KeyEvent <Badge type="tip" text="Class" />

**`Description`**

按键事件

## Table of contents

| Methods                                                                                                            |
| :----------------------------------------------------------------------------------------------------------------- |
| **[getKey](UI.UI.KeyEvent.md#getkey)**(): [`KeyEvent`](UI.UI.KeyEvent.md) <br> 获取按下的键                        |
| **[getUserIndex](UI.UI.KeyEvent.md#getuserindex)**(): `number` <br> 获取事件触发玩家 index                         |
| **[toInputEvent](UI.UI.KeyEvent.md#toinputevent)**(): [`InputEvent`](UI.UI.InputEvent.md) <br> 转化为 InputEvent\* |

**`Description`**

默认构造

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

---

### getUserIndex

▸ **getUserIndex**(): `number`

**`Description`**

获取事件触发玩家 index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回事件触发玩家 index

---

### toInputEvent

▸ **toInputEvent**(): [`InputEvent`](UI.UI.InputEvent.md)

**`Description`**

转化为 InputEvent\*

**`Effect`**

只在客户端调用生效

#### Returns

[`InputEvent`](UI.UI.InputEvent.md)

返回转化后 InputEvent
