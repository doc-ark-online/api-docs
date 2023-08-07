[INPUT](../groups/INPUT.INPUT.md) / MobileSensors

# MobileSensors <Badge type="tip" text="Class" /> <Score text="MobileSensors" />

移动传感器

## Table of contents

| Properties |
| :-----|
| **[accelerationMulticastDelegate](Gameplay.MobileSensors.md#accelerationmulticastdelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`accelerationValue`: [`Vector`](Type.Vector.md)) => `void`\> <br> 声加速度计|
| **[gravityMulticastDelegate](Gameplay.MobileSensors.md#gravitymulticastdelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`gravityValue`: [`Vector`](Type.Vector.md)) => `void`\> <br> 重力计|
| **[rotationRateMulticastDelegate](Gameplay.MobileSensors.md#rotationratemulticastdelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`rotationRateValue`: [`Vector`](Type.Vector.md)) => `void`\> <br> 旋转速率|
| **[tiltMulticastDelegate](Gameplay.MobileSensors.md#tiltmulticastdelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`tiltValue`: [`Vector`](Type.Vector.md)) => `void`\> <br> 倾斜|

| Methods |
| :-----|
| **[setPlayerController](Gameplay.MobileSensors.md#setplayercontroller)**(): `void` <br> 设置玩家控制器，使用前需调用一次|

## Properties

### accelerationMulticastDelegate <Score text="accelerationMulticastDelegate" /> 

• **accelerationMulticastDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`accelerationValue`: [`Vector`](Type.Vector.md)) => `void`\>

声加速度计

___

### gravityMulticastDelegate <Score text="gravityMulticastDelegate" /> 

• **gravityMulticastDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`gravityValue`: [`Vector`](Type.Vector.md)) => `void`\>

重力计

___

### rotationRateMulticastDelegate <Score text="rotationRateMulticastDelegate" /> 

• **rotationRateMulticastDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`rotationRateValue`: [`Vector`](Type.Vector.md)) => `void`\>

旋转速率

___

### tiltMulticastDelegate <Score text="tiltMulticastDelegate" /> 

• **tiltMulticastDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`tiltValue`: [`Vector`](Type.Vector.md)) => `void`\>

倾斜

## Methods

### setPlayerController <Score text="setPlayerController" /> 

• **setPlayerController**(): `void` <Badge type="tip" text="client" />

设置玩家控制器，使用前需调用一次


