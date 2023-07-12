[INPUT](../groups/Core.INPUT.md) / TouchInput

# TouchInput <Badge type="tip" text="Class" /> <Score text="TouchInput" />

玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开)

## Table of contents

| Properties |
| :-----|
| **[onTouch](mw.TouchInput.md#ontouch)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\> <br> 触摸事件|
| **[onTouchBegin](mw.TouchInput.md#ontouchbegin)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\> <br> 触摸开始事件|
| **[onTouchEnd](mw.TouchInput.md#ontouchend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\> <br> 触摸结束事件|
| **[onTouchMove](mw.TouchInput.md#ontouchmove)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\> <br> 触摸移动事件|

| Methods |
| :-----|
| **[getTouchVectorArray](mw.TouchInput.md#gettouchvectorarray)**(): [`Vector`](mw.Vector.md)[] <br> 获取屏幕手指数的数组|

## Properties

### onTouch <Score text="onTouch" /> 

• **onTouch**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸事件

___

### onTouchBegin <Score text="onTouchBegin" /> 

• **onTouchBegin**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸开始事件

___

### onTouchEnd <Score text="onTouchEnd" /> 

• **onTouchEnd**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸结束事件

___

### onTouchMove <Score text="onTouchMove" /> 

• **onTouchMove**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`\>

触摸移动事件

## Methods

### getTouchVectorArray <Score text="getTouchVectorArray" /> 

• **getTouchVectorArray**(): [`Vector`](mw.Vector.md)[] <Badge type="tip" text="client" />

获取屏幕手指数的数组


#### Returns

[`Vector`](mw.Vector.md)[]

当前Touch数组
