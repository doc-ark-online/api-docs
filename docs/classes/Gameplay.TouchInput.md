[Gameplay](../modules/Gameplay.Gameplay.md) / TouchInput

# TouchInput <Badge type="tip" text="Class" /> <Score text="TouchInput" />

**`Groups`**

INPUT

玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开)

## Table of contents

| Properties |
| :-----|
| **[onTouch](Gameplay.TouchInput.md#ontouch)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 获取屏幕手指数的数组|
| **[onTouchBegin](Gameplay.TouchInput.md#ontouchbegin)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 获取屏幕手指数的数组|
| **[onTouchEnd](Gameplay.TouchInput.md#ontouchend)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 获取屏幕手指数的数组|
| **[onTouchMove](Gameplay.TouchInput.md#ontouchmove)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 获取屏幕手指数的数组|

| Methods |
| :-----|
| **[getTouchVectorArray](Gameplay.TouchInput.md#gettouchvectorarray)**(): [`Vector`](Type.Vector.md)[] <br> 获取屏幕手指数的数组|
| **[setPlayerController](Gameplay.TouchInput.md#setplayercontroller)**(): `void` <br> 设置玩家控制器，使用前需调用一次|

## Properties

### onTouch <Score text="onTouch" /> 

• **onTouch**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

触摸事件

___

### onTouchBegin <Score text="onTouchBegin" /> 

• **onTouchBegin**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

触摸开始事件

___

### onTouchEnd <Score text="onTouchEnd" /> 

• **onTouchEnd**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

触摸结束事件

___

### onTouchMove <Score text="onTouchMove" /> 

• **onTouchMove**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

触摸移动事件

## Methods

### getTouchVectorArray <Score text="getTouchVectorArray" /> 

• **getTouchVectorArray**(): [`Vector`](Type.Vector.md)[] <Badge type="tip" text="client" />

获取屏幕手指数的数组


#### Returns

[`Vector`](Type.Vector.md)[]

当前Touch数组

___

### setPlayerController <Score text="setPlayerController" /> 

• **setPlayerController**(): `void` <Badge type="tip" text="client" />

设置玩家控制器，使用前需调用一次


