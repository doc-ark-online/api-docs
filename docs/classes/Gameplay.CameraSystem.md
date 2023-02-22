[Gameplay](../modules/Gameplay.Gameplay.md) / CameraSystem

# CameraSystem <Badge type="tip" text="Class" /> <Score text="CameraSystem" />

**`Groups`**

GAMEPLAY

摄像机系统，是依托于角色，作为角色的组件存在，在此组件下还有一个用来确定视口位置的摄像机组件
             摄像机系统是摄像机基本属性以及功能效果扩展的管理者
             基本属性包括这两个组件的位置旋转，投影模式、Fov、角度限制等
             主要扩展的功能效果包含:弹簧臂收缩、跟随观察、锁定自瞄、遮挡透明、屏幕振荡等
             更有不同预设模式的切换:第一人称、第三人称、俯视角等

::: warning Precautions

使用character.cameraSystem进行调用

:::

## Table of contents

| Properties |
| :-----|
| **[occludeCameraActor](Gameplay.CameraSystem.md#occludecameraactor)**: `any` <br> 获取是否开启摄像机碰撞|

| Accessors |
| :-----|
| **[usePawnControlRotation](Gameplay.CameraSystem.md#usepawncontrolrotation)**(): `boolean` <br> 获取当前是否使用控制器控制摄像机旋转|

| Methods |
| :-----|

## Properties

### occludeCameraActor <Score text="occludeCameraActor" /> 

• **occludeCameraActor**: `any`

**`Deprecated`**

since:021 reason:没有使用场景不暴露 replacement:

摄像机与角色之间的物体

## Accessors

### cameraCollisionEnable <Score text="cameraCollisionEnable" /> 

• `get` **cameraCollisionEnable**(): `boolean`

获取是否开启摄像机碰撞

#### Returns

`boolean`

• `get` **cameraDownLimitAngle**(): `number`

获取摄像机向下角度限制

#### Returns

`number`

• `get` **cameraFOV**(): `number`

获取当前摄像机FOV

#### Returns

`number`

• `get` **cameraFocusEnable**(): `boolean`

获取是否开启摄像机聚焦

#### Returns

`boolean`

• `get` **cameraLocationLagEnable**(): `boolean`

获取当前是否开启摄像机位置延迟

#### Returns

`boolean`

• `get` **cameraLocationLagSpeed**(): `number`

获取当前摄像机位置延迟速度

#### Returns

`number`

• `get` **cameraLocationMode**(): [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md)

获取摄像机位置模式

#### Returns

[`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md)

• `get` **cameraProjectionMode**(): [`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md)

获取当前摄像机投影模式

#### Returns

[`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md)

• `get` **cameraRelativeTransform**(): [`Transform`](Type.Transform.md)

获取当前摄像机相对Transform

#### Returns

[`Transform`](Type.Transform.md)

• `get` **cameraRotationLagEnable**(): `boolean`

获取当前是否开启摄像机旋转延迟

#### Returns

`boolean`

• `get` **cameraRotationLagSpeed**(): `number`

获取当前摄像机旋转延迟速度

#### Returns

`number`

• `get` **cameraRotationMode**(): [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md)

获取摄像机旋转模式

#### Returns

[`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md)

• `get` **cameraSystemRelativeTransform**(): [`Transform`](Type.Transform.md)

获取当前摄像机系统相对Transform,即弹簧臂的相对transform，cameraSystemRelativeTransform.location是弹簧臂挂点的相对位置

#### Returns

[`Transform`](Type.Transform.md)

• `get` **cameraSystemWorldTransform**(): [`Transform`](Type.Transform.md)

获取当前摄像机系统世界Transform,即弹簧臂的世界transform

#### Returns

[`Transform`](Type.Transform.md)

• `get` **cameraUpLimitAngle**(): `number`

获取摄像机向上角度限制

#### Returns

`number`

• `get` **cameraWorldTransform**(): [`Transform`](Type.Transform.md)

获取当前摄像机世界Transform

#### Returns

[`Transform`](Type.Transform.md)

• `get` **enableMovementCollisionDetection**(): `boolean`

获取是否开启运动碰撞检测,启用后大于最小增量的位置改变会使摄像机忽视碰撞,默认启用

#### Returns

`boolean`

• `get` **fadeEffectEnable**(): `boolean`

获取是否开启透明效果

#### Returns

`boolean`

• `get` **fadeEffectValue**(): `number`

获取透明效果的透明度

#### Returns

`number`

• `get` **fixedCameraZAxis**(): `boolean`

获取是否固定摄像机Z轴

#### Returns

`boolean`

• `get` **followTargetEnable**(): `boolean`

获取是否开启跟随目标功能

#### Returns

`boolean`

• `get` **followTargetInterpSpeed**(): `number`

获取跟随目标时的插值速度

#### Returns

`number`

• `get` **lockTargetOffset**(): [`Vector`](Type.Vector.md)

获取锁定目标的偏移

#### Returns

[`Vector`](Type.Vector.md)

• `get` **movementCollisionDuration**(): `number`

获取停止运动后运动碰撞的持续时间

#### Returns

`number`

• `get` **movementCollisionMinLocationDelta**(): `number`

获取启用运动碰撞的最小位置增量

#### Returns

`number`

• `get` **occlusionDetectionEnable**(): `boolean`

获取是否开启遮挡检测

#### Returns

`boolean`

• `get` **orthoFarClipPlane**(): `number`

获取正交视图的远平面距离(以世界单位表示)

#### Returns

`number`

• `get` **orthoNearClipPlane**(): `number`

获取正交视图的近平面距离(以世界单位表示)

#### Returns

`number`

• `get` **orthoWidth**(): `number`

获取正交宽度

#### Returns

`number`

• `get` **raiseCameraEnable**(): `boolean`

获取是否开启抬高摄像机效果

#### Returns

`boolean`

• `get` **raiseCameraHeight**(): `number`

获取摄像机抬高高度

#### Returns

`number`

• `get` **slotOffset**(): [`Vector`](Type.Vector.md)

**`Deprecated`**

since:019 reason:功能重合 replacement:cameraRelativeTransform

获取摄像机位置偏移

#### Returns

[`Vector`](Type.Vector.md)

• `get` **targetArmLength**(): `number`

获取当前摄像机弹簧臂长度

#### Returns

`number`

• `get` **targetOffset**(): [`Vector`](Type.Vector.md)

**`Deprecated`**

since:019 reason:功能重合 replacement:cameraSystemTransform

获取挂点位置偏移

#### Returns

[`Vector`](Type.Vector.md)

• `get` **usePawnControlRotation**(): `boolean`

获取当前是否使用控制器控制摄像机旋转

#### Returns

`boolean`

• `set` **usePawnControlRotation**(`bUsePawnControlRotation`): `void`

设置当前是否使用控制器控制摄像机旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `bUsePawnControlRotation` | `boolean` |


## Methods