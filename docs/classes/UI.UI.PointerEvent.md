[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / PointerEvent

# Class: PointerEvent

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).PointerEvent

**`Author`**

wujie

**`Description`**

点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.PointerEvent.md#constructor)

### Accessors

- [effectingButton](UI.UI.PointerEvent.md#effectingbutton)
- [isTouchEvent](UI.UI.PointerEvent.md#istouchevent)
- [lastScreenSpacePosition](UI.UI.PointerEvent.md#lastscreenspaceposition)
- [mouseWheelDelta](UI.UI.PointerEvent.md#mousewheeldelta)
- [pointerIndex](UI.UI.PointerEvent.md#pointerindex)
- [screenSpacePosition](UI.UI.PointerEvent.md#screenspaceposition)
- [touchPadIndex](UI.UI.PointerEvent.md#touchpadindex)
- [userIndex](UI.UI.PointerEvent.md#userindex)

### Methods

- [isMouseButtonDown](UI.UI.PointerEvent.md#ismousebuttondown)
- [toInputEvent](UI.UI.PointerEvent.md#toinputevent)

## Constructors

### constructor

• `Private` **new PointerEvent**()

**`Description`**

默认构造

#### Defined in

UI/index.d.ts:4144

## Accessors

### effectingButton

• `get` **effectingButton**(): [`KeyEvent`](UI.UI.KeyEvent.md)

**`Description`**

获取响应的事件key

**`Effect`**

只在客户端调用生效

#### Returns

[`KeyEvent`](UI.UI.KeyEvent.md)

返回响应的事件key

#### Defined in

UI/index.d.ts:4205

___

### isTouchEvent

• `get` **isTouchEvent**(): `boolean`

**`Description`**

判断是不是触摸事件

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回是否是触摸事件

#### Defined in

UI/index.d.ts:4156

___

### lastScreenSpacePosition

• `get` **lastScreenSpacePosition**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取该事件上一次的屏幕位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回该事件上一次的屏幕位置

#### Defined in

UI/index.d.ts:4192

___

### mouseWheelDelta

• `get` **mouseWheelDelta**(): `number`

**`Description`**

获取鼠标滚轮滑动的距离

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回鼠标滚轮滑动距离

#### Defined in

UI/index.d.ts:4162

___

### pointerIndex

• `get` **pointerIndex**(): `number`

**`Description`**

返回该事件的唯一标识index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回该事件的唯一标识index

#### Defined in

UI/index.d.ts:4186

___

### screenSpacePosition

• `get` **screenSpacePosition**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取触发的屏幕位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回触发的屏幕位置

#### Defined in

UI/index.d.ts:4180

___

### touchPadIndex

• `get` **touchPadIndex**(): `number`

**`Description`**

获取触摸事件index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回触摸事件的index

#### Defined in

UI/index.d.ts:4174

___

### userIndex

• `get` **userIndex**(): `number`

**`Description`**

获取事件触发玩家的index

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回事件触发玩家的index

#### Defined in

UI/index.d.ts:4168

## Methods

### isMouseButtonDown

▸ **isMouseButtonDown**(`MouseButton`): `boolean`

**`Description`**

判断是不是鼠标按键事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MouseButton` | [`Keys`](../enums/Type.Type.Keys.md) | usage:按键事件 |

#### Returns

`boolean`

返回是不是鼠标按键事件

#### Defined in

UI/index.d.ts:4199

___

### toInputEvent

▸ **toInputEvent**(): [`InputEvent`](UI.UI.InputEvent.md)

**`Description`**

转化为 InputEvent

**`Effect`**

只在客户端调用生效

#### Returns

[`InputEvent`](UI.UI.InputEvent.md)

返回转化后 InputEvent

#### Defined in

UI/index.d.ts:4150
