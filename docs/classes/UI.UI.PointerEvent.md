[UI](../modules/UI.UI.md) / PointerEvent

# PointerEvent <Badge type="tip" text="Class" />

**`Description`**

点击或者滑动的时候传递 mobile touch,鼠标,键盘信息的类

## Table of contents

| Accessors                                                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[effectingButton](UI.UI.PointerEvent.md#effectingbutton)**(): [`KeyEvent`](UI.UI.KeyEvent.md) <br> 获取响应的事件 key                           |
| **[isTouchEvent](UI.UI.PointerEvent.md#istouchevent)**(): `boolean` <br> 判断是不是触摸事件                                                       |
| **[lastScreenSpacePosition](UI.UI.PointerEvent.md#lastscreenspaceposition)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取该事件上一次的屏幕位置 |
| **[mouseWheelDelta](UI.UI.PointerEvent.md#mousewheeldelta)**(): `number` <br> 获取鼠标滚轮滑动的距离                                              |
| **[pointerIndex](UI.UI.PointerEvent.md#pointerindex)**(): `number` <br> 返回该事件的唯一标识 index                                                |
| **[screenSpacePosition](UI.UI.PointerEvent.md#screenspaceposition)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取触发的屏幕位置                 |
| **[touchPadIndex](UI.UI.PointerEvent.md#touchpadindex)**(): `number` <br> 获取触摸事件 index                                                      |
| **[userIndex](UI.UI.PointerEvent.md#userindex)**(): `number` <br> 获取事件触发玩家的 index                                                        |

| Methods                                                                                                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **[isMouseButtonDown](UI.UI.PointerEvent.md#ismousebuttondown)**([`Keys`](../enums/Type.Type.Keys.md)): `boolean` <br> 判断是不是鼠标按键事件 |
| **[toInputEvent](UI.UI.PointerEvent.md#toinputevent)**(): [`InputEvent`](UI.UI.InputEvent.md) <br> 转化为 InputEvent                          |

**`Description`**

默认构造

## Accessors

### effectingButton

• `get` **effectingButton**(): [`KeyEvent`](UI.UI.KeyEvent.md)

**`Description`**

获取响应的事件 key

**`Effect`**

只在客户端调用生效

#### Returns

[`KeyEvent`](UI.UI.KeyEvent.md)

返回响应的事件 key

---

### isTouchEvent

• `get` **isTouchEvent**(): `boolean`

**`Description`**

判断是不是触摸事件

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回是否是触摸事件

---

### lastScreenSpacePosition

• `get` **lastScreenSpacePosition**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取该事件上一次的屏幕位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回该事件上一次的屏幕位置

---

### mouseWheelDelta

• `get` **mouseWheelDelta**(): `number`

**`Description`**

获取鼠标滚轮滑动的距离

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回鼠标滚轮滑动距离

---

### pointerIndex

• `get` **pointerIndex**(): `number`

**`Description`**

返回该事件的唯一标识 index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回该事件的唯一标识 index

---

### screenSpacePosition

• `get` **screenSpacePosition**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取触发的屏幕位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回触发的屏幕位置

---

### touchPadIndex

• `get` **touchPadIndex**(): `number`

**`Description`**

获取触摸事件 index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回触摸事件的 index

---

### userIndex

• `get` **userIndex**(): `number`

**`Description`**

获取事件触发玩家的 index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回事件触发玩家的 index

## Methods

### isMouseButtonDown

▸ **isMouseButtonDown**(`MouseButton`): `boolean`

**`Description`**

判断是不是鼠标按键事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                 | Description |
| :------------ | :----------------------------------- | :---------- |
| `MouseButton` | [`Keys`](../enums/Type.Type.Keys.md) | 按键事件    |

#### Returns

`boolean`

返回是不是鼠标按键事件

---

### toInputEvent

▸ **toInputEvent**(): [`InputEvent`](UI.UI.InputEvent.md)

**`Description`**

转化为 InputEvent

**`Effect`**

只在客户端调用生效

#### Returns

[`InputEvent`](UI.UI.InputEvent.md)

返回转化后 InputEvent
