[Gameplay](../modules/Gameplay.Gameplay.md) / TouchInput

# TouchInput <Badge type="tip" text="Class" />

**`Description`**

玩家从可触摸设备获取的数据信息

## Table of contents

| Properties |
| :-----|
| **[onTouch](Gameplay.TouchInput.md#ontouch)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 触摸事件|
| **[onTouchBegin](Gameplay.TouchInput.md#ontouchbegin)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 触摸开始事件|
| **[onTouchEnd](Gameplay.TouchInput.md#ontouchend)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 触摸结束事件|
| **[onTouchMove](Gameplay.TouchInput.md#ontouchmove)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\> <br> 触摸移动事件|

| Methods |
| :-----|
| **[getTouchVectorArray](Gameplay.TouchInput.md#gettouchvectorarray)**(): [`Vector`](Type.Vector.md)[] <br> 获取屏幕手指数的数组|
| **[setPlayerController](Gameplay.TouchInput.md#setplayercontroller)**(): `void` <br> 设置玩家控制器，使用前需调用一次|

## Properties

### onTouch

• **onTouch**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸事件

___

### onTouchBegin

• **onTouchBegin**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸开始事件

___

### onTouchEnd

• **onTouchEnd**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸结束事件

___

### onTouchMove

• **onTouchMove**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸移动事件

## Methods

### getTouchVectorArray

▸ **getTouchVectorArray**(): [`Vector`](Type.Vector.md)[]

**`Description`**

获取屏幕手指数的数组

**`Effect`**

客户端生效

#### Returns

[`Vector`](Type.Vector.md)[]

当前Touch数组

___

### setPlayerController

▸ **setPlayerController**(): `void`

**`Description`**

设置玩家控制器，使用前需调用一次

**`Effect`**

客户端生效

#### Returns

`void`
