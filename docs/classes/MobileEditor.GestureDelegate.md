[MobileEditor](../modules/MobileEditor.MobileEditor.md) / GestureDelegate

# GestureDelegate <Badge type="tip" text="Class" /> <Score text="GestureDelegate" />

**`Groups`**

SCRIPITING

手势代理类

## Table of contents

| Properties |
| :-----|
| **[oneFingerMoveGestureDelegate](MobileEditor.GestureDelegate.md#onefingermovegesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`location`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 双指滑动代理|
| **[pinchGestureDelegate](MobileEditor.GestureDelegate.md#pinchgesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <br> 双指滑动代理|
| **[tapGestureDelegate](MobileEditor.GestureDelegate.md#tapgesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 双指滑动代理|
| **[touchBeganGestureDelegate](MobileEditor.GestureDelegate.md#touchbegangesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 双指滑动代理|
| **[touchEndGestureDelegate](MobileEditor.GestureDelegate.md#touchendgesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <br> 双指滑动代理|
| **[touchMoveGestureDelegate](MobileEditor.GestureDelegate.md#touchmovegesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 双指滑动代理|
| **[twoFingerMoveGestureDelegate](MobileEditor.GestureDelegate.md#twofingermovegesturedelegate)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`location`: [`Vector2`](Type.Vector2.md)) => `void`\> <br> 双指滑动代理|

## Properties

### oneFingerMoveGestureDelegate <Score text="oneFingerMoveGestureDelegate" /> 

▪ `Static` **oneFingerMoveGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`location`: [`Vector2`](Type.Vector2.md)) => `void`\>

单指滑动代理

___

### pinchGestureDelegate <Score text="pinchGestureDelegate" /> 

▪ `Static` **pinchGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

挤压手势代理

___

### tapGestureDelegate <Score text="tapGestureDelegate" /> 

▪ `Static` **tapGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](Type.Vector2.md)) => `void`\>

点击事件代理

___

### touchBeganGestureDelegate <Score text="touchBeganGestureDelegate" /> 

▪ `Static` **touchBeganGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](Type.Vector2.md)) => `void`\>

手指按下代理

___

### touchEndGestureDelegate <Score text="touchEndGestureDelegate" /> 

▪ `Static` **touchEndGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

手指抬起代理

___

### touchMoveGestureDelegate <Score text="touchMoveGestureDelegate" /> 

▪ `Static` **touchMoveGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](Type.Vector2.md)) => `void`\>

手指滑动代理

___

### twoFingerMoveGestureDelegate <Score text="twoFingerMoveGestureDelegate" /> 

▪ `Static` **twoFingerMoveGestureDelegate**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`location`: [`Vector2`](Type.Vector2.md)) => `void`\>

双指滑动代理
