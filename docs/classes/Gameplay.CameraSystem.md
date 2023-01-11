[Gameplay](../modules/Gameplay.Gameplay.md) / CameraSystem

# CameraSystem <Badge type="tip" text="Class" /> <Score text="CameraSystem" />

**`Description`**

摄像机系统

::: warning Precautions

使用character.cameraSystem进行调用

:::

## Table of contents

| Properties |
| :-----|
| **[enableFadeEffect](Gameplay.CameraSystem.md#enablefadeeffect)**: `boolean` <br> 设置是否开启透明效果|
| **[occludeCameraActor](Gameplay.CameraSystem.md#occludecameraactor)**: `any` <br> 摄像机与角色之间的物体|

| Accessors |
| :-----|
| **[cameraCollisionEnable](Gameplay.CameraSystem.md#cameracollisionenable)**(): `boolean` <br> 获取是否开启摄像机碰撞|
| **[cameraDownLimitAngle](Gameplay.CameraSystem.md#cameradownlimitangle)**(): `number` <br> 获取摄像机向下角度限制|
| **[cameraFOV](Gameplay.CameraSystem.md#camerafov)**(): `number` <br> 获取当前摄像机FOV|
| **[cameraFocusEnable](Gameplay.CameraSystem.md#camerafocusenable)**(): `boolean` <br> 获取是否开启摄像机聚焦|
| **[cameraLocationLagEnable](Gameplay.CameraSystem.md#cameralocationlagenable)**(): `boolean` <br> 获取当前是否开启摄像机位置延迟|
| **[cameraLocationLagSpeed](Gameplay.CameraSystem.md#cameralocationlagspeed)**(): `number` <br> 获取当前摄像机位置延迟速度|
| **[cameraLocationMode](Gameplay.CameraSystem.md#cameralocationmode)**(): [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) <br> 获取摄像机位置模式|
| **[cameraProjectionMode](Gameplay.CameraSystem.md#cameraprojectionmode)**(): [`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md) <br> 获取当前摄像机投影模式|
| **[cameraRelativeTransform](Gameplay.CameraSystem.md#camerarelativetransform)**(): [`Transform`](Type.Transform.md) <br> 获取当前摄像机相对Transform|
| **[cameraRotationLagEnable](Gameplay.CameraSystem.md#camerarotationlagenable)**(): `boolean` <br> 获取当前是否开启摄像机旋转延迟|
| **[cameraRotationLagSpeed](Gameplay.CameraSystem.md#camerarotationlagspeed)**(): `number` <br> 获取当前摄像机旋转延迟速度|
| **[cameraRotationMode](Gameplay.CameraSystem.md#camerarotationmode)**(): [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) <br> 获取摄像机旋转模式|
| **[cameraSystemRelativeTransform](Gameplay.CameraSystem.md#camerasystemrelativetransform)**(): [`Transform`](Type.Transform.md) <br> 获取当前摄像机系统相对Transform,即弹簧臂的相对transform，cameraSystemRelativeTransform.location是弹簧臂挂点的相对位置|
| **[cameraSystemWorldTransform](Gameplay.CameraSystem.md#camerasystemworldtransform)**(): [`Transform`](Type.Transform.md) <br> 获取当前摄像机系统世界Transform,即弹簧臂的世界transform|
| **[cameraUpLimitAngle](Gameplay.CameraSystem.md#camerauplimitangle)**(): `number` <br> 获取摄像机向上角度限制|
| **[cameraWorldTransform](Gameplay.CameraSystem.md#cameraworldtransform)**(): [`Transform`](Type.Transform.md) <br> 获取当前摄像机世界Transform|
| **[enableMovementCollisionDetection](Gameplay.CameraSystem.md#enablemovementcollisiondetection)**(): `boolean` <br> 获取是否开启运动碰撞检测,启用后大于最小增量的位置改变会使摄像机忽视碰撞,默认启用|
| **[fadeEffectValue](Gameplay.CameraSystem.md#fadeeffectvalue)**(): `number` <br> 获取透明效果的透明度|
| **[fixedCameraZAxis](Gameplay.CameraSystem.md#fixedcamerazaxis)**(): `boolean` <br> 获取是否固定摄像机Z轴|
| **[followTargetEnable](Gameplay.CameraSystem.md#followtargetenable)**(): `boolean` <br> 获取是否开启跟随目标功能|
| **[followTargetInterpSpeed](Gameplay.CameraSystem.md#followtargetinterpspeed)**(): `number` <br> 获取跟随目标时的插值速度|
| **[lockTargetOffset](Gameplay.CameraSystem.md#locktargetoffset)**(): [`Vector`](Type.Vector.md) <br> 获取锁定目标的偏移|
| **[movementCollisionDuration](Gameplay.CameraSystem.md#movementcollisionduration)**(): `number` <br> 获取停止运动后运动碰撞的持续时间|
| **[movementCollisionMinLocationDelta](Gameplay.CameraSystem.md#movementcollisionminlocationdelta)**(): `number` <br> 获取启用运动碰撞的最小位置增量|
| **[occlusionDetectionEnable](Gameplay.CameraSystem.md#occlusiondetectionenable)**(): `boolean` <br> 获取是否开启透明效果|
| **[orthoFarClipPlane](Gameplay.CameraSystem.md#orthofarclipplane)**(): `number` <br> 获取正交视图的远平面距离(以世界单位表示)|
| **[orthoNearClipPlane](Gameplay.CameraSystem.md#orthonearclipplane)**(): `number` <br> 获取正交视图的近平面距离(以世界单位表示)|
| **[orthoWidth](Gameplay.CameraSystem.md#orthowidth)**(): `number` <br> 获取正交宽度|
| **[raiseCameraEnable](Gameplay.CameraSystem.md#raisecameraenable)**(): `boolean` <br> 获取是否开启抬高摄像机效果|
| **[raiseCameraHeight](Gameplay.CameraSystem.md#raisecameraheight)**(): `number` <br> 获取摄像机抬高高度|
| **[realEffectEnable](Gameplay.CameraSystem.md#realeffectenable)**(`boolean` |): `void` <br> 启用/禁用真实效果|
| **[slotOffset](Gameplay.CameraSystem.md#slotoffset)**(): [`Vector`](Type.Vector.md) <br> since:v0.19.0.0 reason:功能重合 replacement:cameraRelativeTransform|
| **[targetArmLength](Gameplay.CameraSystem.md#targetarmlength)**(): `number` <br> 获取当前摄像机弹簧臂长度|
| **[targetOffset](Gameplay.CameraSystem.md#targetoffset)**(): [`Vector`](Type.Vector.md) <br> since:v0.19.0.0 reason:功能重合 replacement:cameraSystemTransform|
| **[transform](Gameplay.CameraSystem.md#transform)**(): [`Transform`](Type.Transform.md) <br> 摄像机的transform|
| **[usePawnControlRotation](Gameplay.CameraSystem.md#usepawncontrolrotation)**(): `boolean` <br> 获取当前是否使用控制器控制摄像机旋转|

| Methods |
| :-----|
| **[applySettings](Gameplay.CameraSystem.md#applysettings)**([`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)): `void` <br> 应用摄像机系统数据|
| **[attachCameraToCharacterCapsuleSlot](Gameplay.CameraSystem.md#attachcameratocharactercapsuleslot)**(): `void` <br> 附加摄像机到角色的胶囊体插槽上|
| **[attachCameraToCharacterMeshSlot](Gameplay.CameraSystem.md#attachcameratocharactermeshslot)**([`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 附加摄像机到角色的模型插槽上|
| **[attachToGameObject](Gameplay.CameraSystem.md#attachtogameobject)**(`GameObject`): `void` <br> 相机附加至目标物体|
| **[cameraFocusing](Gameplay.CameraSystem.md#camerafocusing)**(`number`, [`Vector`](Type.Vector.md), `number`): `void` <br> 摄像机聚焦|
| **[cameraLockTarget](Gameplay.CameraSystem.md#cameralocktarget)**(`GameObject`, `number`, `number`, `number`, `number`, [`Vector`](Type.Vector.md), `boolean`): `void` <br> 相机锁定目标(相比setCameraLockTarget多了更多复杂的设置)|
| **[cancelCameraFollowTarget](Gameplay.CameraSystem.md#cancelcamerafollowtarget)**(): `void` <br> 取消跟随物体|
| **[cancelCameraLockTarget](Gameplay.CameraSystem.md#cancelcameralocktarget)**(): `void` <br> 取消锁定物体|
| **[getCurrentSettings](Gameplay.CameraSystem.md#getcurrentsettings)**(): [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata) <br> 获取当前的摄像机系统数据|
| **[getDefaultCameraShakeData](Gameplay.CameraSystem.md#getdefaultcamerashakedata)**(): [`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata) <br> 获取默认的摄像机震动数据|
| **[moveByPath](Gameplay.CameraSystem.md#movebypath)**(`{ `location`: [`Vector`](Type.Vector.md) ; `rotation`: [`Vector`](Type.Vector.md) ; `time`: `number`  }`[], () => `void`): `void` <br> 镜头移动|
| **[resetOverrideCameraRotation](Gameplay.CameraSystem.md#resetoverridecamerarotation)**(): `void` <br> 取消旋转覆盖|
| **[screenShock](Gameplay.CameraSystem.md#screenshock)**(`number`, `number`, `number`): `void` <br> 震屏|
| **[setCameraFollowTarget](Gameplay.CameraSystem.md#setcamerafollowtarget)**(`GameObject`): `void` <br> 相机跟随物体|
| **[setCameraLockTarget](Gameplay.CameraSystem.md#setcameralocktarget)**(`GameObject`): `void` <br> 相机锁定物体|
| **[setOverrideCameraRotation](Gameplay.CameraSystem.md#setoverridecamerarotation)**([`Rotation`](Type.Rotation.md), `boolean`): `void` <br> 覆盖摄像机旋转，从控制器传入值处截断|
| **[startCameraShake](Gameplay.CameraSystem.md#startcamerashake)**([`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata)): `void` <br> 开始摄像机震动|
| **[stopCameraShake](Gameplay.CameraSystem.md#stopcamerashake)**(): `void` <br> 停止摄像机震动|
| **[switchCameraMode](Gameplay.CameraSystem.md#switchcameramode)**([`CameraMode`](../enums/Gameplay.CameraMode.md), `boolean`): `void` <br> 切换摄像机模式(第一人称、第三人称、俯视角、过肩视角...)|

## Properties

### enableFadeEffect <Score text="enableFadeEffect" /> 

• **enableFadeEffect**: `boolean`

**`Description`**

设置是否开启透明效果

___

### occludeCameraActor <Score text="occludeCameraActor" /> 

• **occludeCameraActor**: `any`

**`Description`**

摄像机与角色之间的物体

## Accessors

### cameraCollisionEnable <Score text="cameraCollisionEnable" /> 

• `get` **cameraCollisionEnable**(): `boolean`

**`Description`**

获取是否开启摄像机碰撞

#### Returns

`boolean`

• `set` **cameraCollisionEnable**(`bEnableCameraCollision`): `void`

**`Description`**

设置是否开启摄像机碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraCollision` | `boolean` |


___

### cameraDownLimitAngle <Score text="cameraDownLimitAngle" /> 

• `get` **cameraDownLimitAngle**(): `number`

**`Description`**

获取摄像机向下角度限制

#### Returns

`number`

• `set` **cameraDownLimitAngle**(`newDownLimitAngle`): `void`

**`Description`**

设置摄像机向下角度限制

#### Parameters

| Name | Type |
| :------ | :------ |
| `newDownLimitAngle` | `number` |


___

### cameraFOV <Score text="cameraFOV" /> 

• `get` **cameraFOV**(): `number`

**`Description`**

获取当前摄像机FOV

#### Returns

`number`

• `set` **cameraFOV**(`fovNum`): `void`

**`Description`**

设置当前摄像机FOV

#### Parameters

| Name | Type |
| :------ | :------ |
| `fovNum` | `number` |


___

### cameraFocusEnable <Score text="cameraFocusEnable" /> 

• `get` **cameraFocusEnable**(): `boolean`

**`Description`**

获取是否开启摄像机聚焦

#### Returns

`boolean`

• `set` **cameraFocusEnable**(`canCameraFocus`): `void`

**`Description`**

设置是否开启摄像机聚焦

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCameraFocus` | `boolean` |


___

### cameraLocationLagEnable <Score text="cameraLocationLagEnable" /> 

• `get` **cameraLocationLagEnable**(): `boolean`

**`Description`**

获取当前是否开启摄像机位置延迟

#### Returns

`boolean`

• `set` **cameraLocationLagEnable**(`bEnableCameraLocationLag`): `void`

**`Description`**

设置当前是否开启摄像机位置延迟

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraLocationLag` | `boolean` |


___

### cameraLocationLagSpeed <Score text="cameraLocationLagSpeed" /> 

• `get` **cameraLocationLagSpeed**(): `number`

**`Description`**

获取当前摄像机位置延迟速度

#### Returns

`number`

• `set` **cameraLocationLagSpeed**(`newCameraLocationLagSpeed`): `void`

**`Description`**

设置当前摄像机位置延迟速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraLocationLagSpeed` | `number` |


___

### cameraLocationMode <Score text="cameraLocationMode" /> 

• `get` **cameraLocationMode**(): [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md)

**`Description`**

获取摄像机位置模式

#### Returns

[`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md)

• `set` **cameraLocationMode**(`newCameraLocationMode`): `void`

**`Description`**

设置摄像机位置模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraLocationMode` | [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) |


___

### cameraProjectionMode <Score text="cameraProjectionMode" /> 

• `get` **cameraProjectionMode**(): [`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md)

**`Description`**

获取当前摄像机投影模式

#### Returns

[`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md)

• `set` **cameraProjectionMode**(`newCameraProjectionMode`): `void`

**`Description`**

设置当前摄像机投影模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraProjectionMode` | [`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md) |


___

### cameraRelativeTransform <Score text="cameraRelativeTransform" /> 

• `get` **cameraRelativeTransform**(): [`Transform`](Type.Transform.md)

**`Description`**

获取当前摄像机相对Transform

#### Returns

[`Transform`](Type.Transform.md)

• `set` **cameraRelativeTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机相对Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Transform.md) |


___

### cameraRotationLagEnable <Score text="cameraRotationLagEnable" /> 

• `get` **cameraRotationLagEnable**(): `boolean`

**`Description`**

获取当前是否开启摄像机旋转延迟

#### Returns

`boolean`

• `set` **cameraRotationLagEnable**(`bEnableCameraRotationLag`): `void`

**`Description`**

设置当前是否开启摄像机旋转延迟

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraRotationLag` | `boolean` |


___

### cameraRotationLagSpeed <Score text="cameraRotationLagSpeed" /> 

• `get` **cameraRotationLagSpeed**(): `number`

**`Description`**

获取当前摄像机旋转延迟速度

#### Returns

`number`

• `set` **cameraRotationLagSpeed**(`newCameraRotationLagSpeed`): `void`

**`Description`**

设置当前摄像机旋转延迟速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraRotationLagSpeed` | `number` |


___

### cameraRotationMode <Score text="cameraRotationMode" /> 

• `get` **cameraRotationMode**(): [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md)

**`Description`**

获取摄像机旋转模式

#### Returns

[`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md)

• `set` **cameraRotationMode**(`newCameraRotationMode`): `void`

**`Description`**

设置摄像机旋转模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraRotationMode` | [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) |


___

### cameraSystemRelativeTransform <Score text="cameraSystemRelativeTransform" /> 

• `get` **cameraSystemRelativeTransform**(): [`Transform`](Type.Transform.md)

**`Description`**

获取当前摄像机系统相对Transform,即弹簧臂的相对transform，cameraSystemRelativeTransform.location是弹簧臂挂点的相对位置

#### Returns

[`Transform`](Type.Transform.md)

• `set` **cameraSystemRelativeTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机系统相对Transform,即弹簧臂的相对transform，cameraSystemRelativeTransform.location是弹簧臂挂点的相对位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Transform.md) |


___

### cameraSystemWorldTransform <Score text="cameraSystemWorldTransform" /> 

• `get` **cameraSystemWorldTransform**(): [`Transform`](Type.Transform.md)

**`Description`**

获取当前摄像机系统世界Transform,即弹簧臂的世界transform

#### Returns

[`Transform`](Type.Transform.md)

• `set` **cameraSystemWorldTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机系统世界Transform,即弹簧臂的世界transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Transform.md) |


___

### cameraUpLimitAngle <Score text="cameraUpLimitAngle" /> 

• `get` **cameraUpLimitAngle**(): `number`

**`Description`**

获取摄像机向上角度限制

#### Returns

`number`

• `set` **cameraUpLimitAngle**(`newUpLimitAngle`): `void`

**`Description`**

设置摄像机向上角度限制

#### Parameters

| Name | Type |
| :------ | :------ |
| `newUpLimitAngle` | `number` |


___

### cameraWorldTransform <Score text="cameraWorldTransform" /> 

• `get` **cameraWorldTransform**(): [`Transform`](Type.Transform.md)

**`Description`**

获取当前摄像机世界Transform

#### Returns

[`Transform`](Type.Transform.md)

• `set` **cameraWorldTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机世界Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Transform.md) |


___

### enableMovementCollisionDetection <Score text="enableMovementCollisionDetection" /> 

• `get` **enableMovementCollisionDetection**(): `boolean`

**`Description`**

获取是否开启运动碰撞检测,启用后大于最小增量的位置改变会使摄像机忽视碰撞,默认启用

#### Returns

`boolean`

• `set` **enableMovementCollisionDetection**(`bIsEnableMovementCollision`): `void`

**`Description`**

设置是否开启运动碰撞检测,启用后大于最小增量的位置改变会使摄像机忽视碰撞,默认启用

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsEnableMovementCollision` | `boolean` |


___

### fadeEffectValue <Score text="fadeEffectValue" /> 

• `get` **fadeEffectValue**(): `number`

**`Description`**

获取透明效果的透明度

#### Returns

`number`

• `set` **fadeEffectValue**(`newFadeEffectValue`): `void`

**`Description`**

设置透明效果的透明度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newFadeEffectValue` | `number` |


___

### fixedCameraZAxis <Score text="fixedCameraZAxis" /> 

• `get` **fixedCameraZAxis**(): `boolean`

**`Description`**

获取是否固定摄像机Z轴

#### Returns

`boolean`

• `set` **fixedCameraZAxis**(`bIsFixedZAxis`): `void`

**`Description`**

设置是否固定摄像机Z轴

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsFixedZAxis` | `boolean` |


___

### followTargetEnable <Score text="followTargetEnable" /> 

• `get` **followTargetEnable**(): `boolean`

**`Description`**

获取是否开启跟随目标功能

#### Returns

`boolean`

• `set` **followTargetEnable**(`bIsEnableFollowTarget`): `void`

**`Description`**

设置是否开启跟随目标功能

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsEnableFollowTarget` | `boolean` |


___

### followTargetInterpSpeed <Score text="followTargetInterpSpeed" /> 

• `get` **followTargetInterpSpeed**(): `number`

**`Description`**

获取跟随目标时的插值速度

#### Returns

`number`

• `set` **followTargetInterpSpeed**(`newInterpSpeed`): `void`

**`Description`**

设置跟随目标时的插值速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newInterpSpeed` | `number` |


___

### lockTargetOffset <Score text="lockTargetOffset" /> 

• `get` **lockTargetOffset**(): [`Vector`](Type.Vector.md)

**`Description`**

获取锁定目标的偏移

#### Returns

[`Vector`](Type.Vector.md)

• `set` **lockTargetOffset**(`newLockTargetOffset`): `void`

**`Description`**

设置锁定目标的偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLockTargetOffset` | [`Vector`](Type.Vector.md) |


___

### movementCollisionDuration <Score text="movementCollisionDuration" /> 

• `get` **movementCollisionDuration**(): `number`

**`Description`**

获取停止运动后运动碰撞的持续时间

#### Returns

`number`

• `set` **movementCollisionDuration**(`Delta`): `void`

**`Description`**

设置停止运动后运动碰撞的持续时间

#### Parameters

| Name | Type |
| :------ | :------ |
| `Delta` | `number` |


___

### movementCollisionMinLocationDelta <Score text="movementCollisionMinLocationDelta" /> 

• `get` **movementCollisionMinLocationDelta**(): `number`

**`Description`**

获取启用运动碰撞的最小位置增量

#### Returns

`number`

• `set` **movementCollisionMinLocationDelta**(`Delta`): `void`

**`Description`**

设置启用运动碰撞的最小位置增量

#### Parameters

| Name | Type |
| :------ | :------ |
| `Delta` | `number` |


___

### occlusionDetectionEnable <Score text="occlusionDetectionEnable" /> 

• `get` **occlusionDetectionEnable**(): `boolean`

**`Description`**

获取是否开启透明效果

#### Returns

`boolean`

• `set` **occlusionDetectionEnable**(`bEnableOcclusionDetection`): `void`

**`Description`**

设置是否开启透明效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableOcclusionDetection` | `boolean` |


___

### orthoFarClipPlane <Score text="orthoFarClipPlane" /> 

• `get` **orthoFarClipPlane**(): `number`

**`Description`**

获取正交视图的远平面距离(以世界单位表示)

#### Returns

`number`

• `set` **orthoFarClipPlane**(`newOrthoFarClipPlane`): `void`

**`Description`**

设置正交视图的远平面距离(以世界单位表示)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoFarClipPlane` | `number` |


___

### orthoNearClipPlane <Score text="orthoNearClipPlane" /> 

• `get` **orthoNearClipPlane**(): `number`

**`Description`**

获取正交视图的近平面距离(以世界单位表示)

#### Returns

`number`

• `set` **orthoNearClipPlane**(`newOrthoNearClipPlane`): `void`

**`Description`**

设置正交视图的近平面距离(以世界单位表示)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoNearClipPlane` | `number` |


___

### orthoWidth <Score text="orthoWidth" /> 

• `get` **orthoWidth**(): `number`

**`Description`**

获取正交宽度

#### Returns

`number`

• `set` **orthoWidth**(`newOrthoWidth`): `void`

**`Description`**

设置正交宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoWidth` | `number` |


___

### raiseCameraEnable <Score text="raiseCameraEnable" /> 

• `get` **raiseCameraEnable**(): `boolean`

**`Description`**

获取是否开启抬高摄像机效果

#### Returns

`boolean`

• `set` **raiseCameraEnable**(`bIsEnableRaiseCamera`): `void`

**`Description`**

设置是否开启抬高摄像机效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsEnableRaiseCamera` | `boolean` |


___

### raiseCameraHeight <Score text="raiseCameraHeight" /> 

• `get` **raiseCameraHeight**(): `number`

**`Description`**

获取摄像机抬高高度

#### Returns

`number`

• `set` **raiseCameraHeight**(`newRaiseCameraHeight`): `void`

**`Description`**

设置摄像机抬高高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRaiseCameraHeight` | `number` |


___

### realEffectEnable <Score text="realEffectEnable" /> 

• `set` **realEffectEnable**(`value`): `void`

**`Description`**

启用/禁用真实效果

::: warning Precautions

只在客户端调用生效, 目前真实效果是第一人称模式下镜头会随着人物走动而晃动

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### slotOffset <Score text="slotOffset" /> 

• `get` **slotOffset**(): [`Vector`](Type.Vector.md)

**`Deprecated`**

since:v0.19.0.0 reason:功能重合 replacement:cameraRelativeTransform

**`Description`**

获取摄像机位置偏移

#### Returns

[`Vector`](Type.Vector.md)

• `set` **slotOffset**(`newSlotOffset`): `void`

**`Deprecated`**

since:v0.19.0.0 reason:功能重合 replacement:cameraRelativeTransform

**`Description`**

设置摄像机位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newSlotOffset` | [`Vector`](Type.Vector.md) |


___

### targetArmLength <Score text="targetArmLength" /> 

• `get` **targetArmLength**(): `number`

**`Description`**

获取当前摄像机弹簧臂长度

#### Returns

`number`

• `set` **targetArmLength**(`newTargetArmLength`): `void`

**`Description`**

设置当前摄像机弹簧臂长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTargetArmLength` | `number` |


___

### targetOffset <Score text="targetOffset" /> 

• `get` **targetOffset**(): [`Vector`](Type.Vector.md)

**`Deprecated`**

since:v0.19.0.0 reason:功能重合 replacement:cameraSystemTransform

**`Description`**

获取挂点位置偏移

#### Returns

[`Vector`](Type.Vector.md)

• `set` **targetOffset**(`newTargetOffset`): `void`

**`Deprecated`**

since:v0.19.0.0 reason:功能重合 replacement:cameraSystemRelativeTransform

**`Description`**

设置挂点位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTargetOffset` | [`Vector`](Type.Vector.md) |


___

### transform <Score text="transform" /> 

• `get` **transform**(): [`Transform`](Type.Transform.md)

**`Description`**

摄像机的transform

#### Returns

[`Transform`](Type.Transform.md)

___

### usePawnControlRotation <Score text="usePawnControlRotation" /> 

• `get` **usePawnControlRotation**(): `boolean`

**`Description`**

获取当前是否使用控制器控制摄像机旋转

#### Returns

`boolean`

• `set` **usePawnControlRotation**(`bUsePawnControlRotation`): `void`

**`Description`**

设置当前是否使用控制器控制摄像机旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `bUsePawnControlRotation` | `boolean` |


## Methods

### applySettings <Score text="applySettings" /> 

▸ **applySettings**(`CameraSetting`): `void` <Badge type="tip" text="other" />

**`Description`**

应用摄像机系统数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CameraSetting` | [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata) | 摄像机系统数据 |


___

### attachCameraToCharacterCapsuleSlot <Score text="attachCameraToCharacterCapsuleSlot" /> 

▸ **attachCameraToCharacterCapsuleSlot**(): `void` <Badge type="tip" text="other" />

**`Description`**

附加摄像机到角色的胶囊体插槽上



___

### attachCameraToCharacterMeshSlot <Score text="attachCameraToCharacterMeshSlot" /> 

▸ **attachCameraToCharacterMeshSlot**(`slot`): `void` <Badge type="tip" text="other" />

**`Description`**

附加摄像机到角色的模型插槽上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名 |


___

### attachToGameObject <Score text="attachToGameObject" /> 

▸ **attachToGameObject**(`target`): `void` <Badge type="tip" text="other" />

**`Description`**

相机附加至目标物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `GameObject` | 目标物体 |


___

### cameraFocusing <Score text="cameraFocusing" /> 

▸ **cameraFocusing**(`targetArmLength`, `targetOffset`, `timeInterval?`): `void` <Badge type="tip" text="other" />

**`Description`**

摄像机聚焦


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetArmLength` | `number` | 目标距离 |
| `targetOffset` | [`Vector`](Type.Vector.md) | 目标偏移 |
| `timeInterval?` | `number` | 聚焦间隔,越小越快 default:20 |


___

### cameraLockTarget <Score text="cameraLockTarget" /> 

▸ **cameraLockTarget**(`target`, `lockInterval?`, `lockSpeed?`, `lockRange?`, `lockDistance?`, `lockOffset?`, `bPause?`): `void` <Badge type="tip" text="other" />

**`Description`**

相机锁定目标(相比setCameraLockTarget多了更多复杂的设置)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `GameObject` | 目标物体 |
| `lockInterval?` | `number` | 锁定间隔(间隔多少秒暂停/恢复锁定) default:0 |
| `lockSpeed?` | `number` | 锁定速度(决定摄像机多久旋转至目标朝向，参数值越大越快,范围0-5，但0是直接旋转至目标朝向) default:1.3 |
| `lockRange?` | `number` | 锁定范围(以屏幕坐标中心为圆心，这个值表示半径) default:100 |
| `lockDistance?` | `number` | 锁定距离(目标到摄像机的距离) default:1000 |
| `lockOffset?` | [`Vector`](Type.Vector.md) | 锁定偏移 default:Type.Vector.zero |
| `bPause?` | `boolean` | 决定超出范围/距离后锁定是暂停/取消，为true是暂停 default:true |


___

### cancelCameraFollowTarget <Score text="cancelCameraFollowTarget" /> 

▸ **cancelCameraFollowTarget**(): `void` <Badge type="tip" text="other" />

**`Description`**

取消跟随物体



___

### cancelCameraLockTarget <Score text="cancelCameraLockTarget" /> 

▸ **cancelCameraLockTarget**(): `void` <Badge type="tip" text="other" />

**`Description`**

取消锁定物体



___

### getCurrentSettings <Score text="getCurrentSettings" /> 

▸ **getCurrentSettings**(): [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata) <Badge type="tip" text="other" />

**`Description`**

获取当前的摄像机系统数据


#### Returns

[`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)

当前的摄像机系统数据

___

### getDefaultCameraShakeData <Score text="getDefaultCameraShakeData" /> 

▸ **getDefaultCameraShakeData**(): [`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata) <Badge type="tip" text="other" />

**`Description`**

获取默认的摄像机震动数据


#### Returns

[`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata)

默认的摄像机震动数据

___

### moveByPath <Score text="moveByPath" /> 

▸ **moveByPath**(`path`, `completeCallback`): `void` <Badge type="tip" text="other" />

**`Description`**

镜头移动


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `{ `location`: [`Vector`](Type.Vector.md) ; `rotation`: [`Vector`](Type.Vector.md) ; `time`: `number`  }`[] | 路径数据 |
| `completeCallback` | () => `void` | 完成回调 |


___

### resetOverrideCameraRotation <Score text="resetOverrideCameraRotation" /> 

▸ **resetOverrideCameraRotation**(): `void` <Badge type="tip" text="other" />

**`Description`**

取消旋转覆盖



___

### screenShock <Score text="screenShock" /> 

▸ **screenShock**(`maxRange?`, `decay?`, `speed?`): `void` <Badge type="tip" text="other" />

**`Description`**

震屏


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxRange?` | `number` |  最大幅度 default: 60 |
| `decay?` | `number` |  每个周期的衰减 default: 0.5 |
| `speed?` | `number` |  速度 default: 3000 |


___

### setCameraFollowTarget <Score text="setCameraFollowTarget" /> 

▸ **setCameraFollowTarget**(`target`): `void` <Badge type="tip" text="other" />

**`Description`**

相机跟随物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `GameObject` | 目标物体 |


___

### setCameraLockTarget <Score text="setCameraLockTarget" /> 

▸ **setCameraLockTarget**(`target`): `void` <Badge type="tip" text="other" />

**`Description`**

相机锁定物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `GameObject` | 目标物体 |


___

### setOverrideCameraRotation <Score text="setOverrideCameraRotation" /> 

▸ **setOverrideCameraRotation**(`newOverrideRotation`, `clampByCameraModeRotationLimits?`): `void` <Badge type="tip" text="other" />

**`Description`**

覆盖摄像机旋转，从控制器传入值处截断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOverrideRotation` | [`Rotation`](Type.Rotation.md) | 新的旋转值 |
| `clampByCameraModeRotationLimits?` | `boolean` | 是否应用摄像机模式旋转限制 default:false |


___

### startCameraShake <Score text="startCameraShake" /> 

▸ **startCameraShake**(`cameraShakeData`): `void` <Badge type="tip" text="other" />

**`Description`**

开始摄像机震动


::: warning Precautions

该方法参数通过cameraSystem.getDefaultCameraShakeData获取,多次调用震动效果会叠加

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraShakeData` | [`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata) | 摄像机震动数据 |


___

### stopCameraShake <Score text="stopCameraShake" /> 

▸ **stopCameraShake**(): `void` <Badge type="tip" text="other" />

**`Description`**

停止摄像机震动



___

### switchCameraMode <Score text="switchCameraMode" /> 

▸ **switchCameraMode**(`newCameraMode`, `enableRealEffect?`): `void` <Badge type="tip" text="other" />

**`Description`**

切换摄像机模式(第一人称、第三人称、俯视角、过肩视角...)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newCameraMode` | [`CameraMode`](../enums/Gameplay.CameraMode.md) | 新的摄像机模式 |
| `enableRealEffect?` | `boolean` | 是否开启真实模拟效果 default:false |

