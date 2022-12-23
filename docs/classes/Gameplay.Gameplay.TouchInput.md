[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / TouchInput

# Class: TouchInput

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).TouchInput

**`Author`**

Litengxiao

**`Description`**

玩家从可触摸设备获取的数据信息

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.TouchInput.md#constructor)

### Properties

- [onTouch](Gameplay.Gameplay.TouchInput.md#ontouch)
- [onTouchBegin](Gameplay.Gameplay.TouchInput.md#ontouchbegin)
- [onTouchEnd](Gameplay.Gameplay.TouchInput.md#ontouchend)
- [onTouchMove](Gameplay.Gameplay.TouchInput.md#ontouchmove)

### Methods

- [getTouchVectorArray](Gameplay.Gameplay.TouchInput.md#gettouchvectorarray)
- [setPlayerController](Gameplay.Gameplay.TouchInput.md#setplayercontroller)

## Constructors

### constructor

• **new TouchInput**()

## Properties

### onTouch

• **onTouch**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸事件

#### Defined in

Gameplay/index.d.ts:10059

___

### onTouchBegin

• **onTouchBegin**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸开始事件

#### Defined in

Gameplay/index.d.ts:10065

___

### onTouchEnd

• **onTouchEnd**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸结束事件

#### Defined in

Gameplay/index.d.ts:10077

___

### onTouchMove

• **onTouchMove**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`index`: `number`, `location`: [`Vector2`](Type.Type.Vector2.md), `touchType`: [`TouchInputType`](../enums/Gameplay.Gameplay.TouchInputType.md)) => `void`\>

**`Description`**

触摸移动事件

#### Defined in

Gameplay/index.d.ts:10071

## Methods

### getTouchVectorArray

▸ **getTouchVectorArray**(): [`Vector`](Type.Type.Vector.md)[]

**`Description`**

获取屏幕手指数的数组

**`Effect`**

客户端生效

#### Returns

[`Vector`](Type.Type.Vector.md)[]

当前Touch数组

#### Defined in

Gameplay/index.d.ts:10090

___

### setPlayerController

▸ **setPlayerController**(): `void`

**`Description`**

设置玩家控制器，使用前需调用一次

**`Effect`**

客户端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10084
