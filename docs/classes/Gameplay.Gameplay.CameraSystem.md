[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / CameraSystem

# Class: CameraSystem

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).CameraSystem

**`Author`**

廖云浩

**`Description`**

摄像机系统

**`Network Status`**

usage:客户端

**`Precautions`**

使用character.cameraSystem进行调用

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.CameraSystem.md#constructor)

### Properties

- [enableFadeEffect](Gameplay.Gameplay.CameraSystem.md#enablefadeeffect)
- [occludeCameraActor](Gameplay.Gameplay.CameraSystem.md#occludecameraactor)

### Accessors

- [cameraDownLimitAngle](Gameplay.Gameplay.CameraSystem.md#cameradownlimitangle)
- [cameraFOV](Gameplay.Gameplay.CameraSystem.md#camerafov)
- [cameraLocationLagSpeed](Gameplay.Gameplay.CameraSystem.md#cameralocationlagspeed)
- [cameraLocationMode](Gameplay.Gameplay.CameraSystem.md#cameralocationmode)
- [cameraProjectionMode](Gameplay.Gameplay.CameraSystem.md#cameraprojectionmode)
- [cameraRelativeTransform](Gameplay.Gameplay.CameraSystem.md#camerarelativetransform)
- [cameraRotationLagSpeed](Gameplay.Gameplay.CameraSystem.md#camerarotationlagspeed)
- [cameraRotationMode](Gameplay.Gameplay.CameraSystem.md#camerarotationmode)
- [cameraSystemRelativeTransform](Gameplay.Gameplay.CameraSystem.md#camerasystemrelativetransform)
- [cameraSystemWorldTransform](Gameplay.Gameplay.CameraSystem.md#camerasystemworldtransform)
- [cameraUpLimitAngle](Gameplay.Gameplay.CameraSystem.md#camerauplimitangle)
- [cameraWorldTransform](Gameplay.Gameplay.CameraSystem.md#cameraworldtransform)
- [canCameraFocusing](Gameplay.Gameplay.CameraSystem.md#cancamerafocusing)
- [enableCameraCollision](Gameplay.Gameplay.CameraSystem.md#enablecameracollision)
- [enableCameraLocationLag](Gameplay.Gameplay.CameraSystem.md#enablecameralocationlag)
- [enableCameraRotationLag](Gameplay.Gameplay.CameraSystem.md#enablecamerarotationlag)
- [enableFollowTarget](Gameplay.Gameplay.CameraSystem.md#enablefollowtarget)
- [enableOcclusionDetection](Gameplay.Gameplay.CameraSystem.md#enableocclusiondetection)
- [enableRaiseCamera](Gameplay.Gameplay.CameraSystem.md#enableraisecamera)
- [enableRealEffect](Gameplay.Gameplay.CameraSystem.md#enablerealeffect)
- [fadeEffectValue](Gameplay.Gameplay.CameraSystem.md#fadeeffectvalue)
- [fixedCameraZAxis](Gameplay.Gameplay.CameraSystem.md#fixedcamerazaxis)
- [followTargetInterpSpeed](Gameplay.Gameplay.CameraSystem.md#followtargetinterpspeed)
- [lockTargetOffset](Gameplay.Gameplay.CameraSystem.md#locktargetoffset)
- [orthoFarClipPlane](Gameplay.Gameplay.CameraSystem.md#orthofarclipplane)
- [orthoNearClipPlane](Gameplay.Gameplay.CameraSystem.md#orthonearclipplane)
- [orthoWidth](Gameplay.Gameplay.CameraSystem.md#orthowidth)
- [raiseCameraHeight](Gameplay.Gameplay.CameraSystem.md#raisecameraheight)
- [socketOffset](Gameplay.Gameplay.CameraSystem.md#socketoffset)
- [targetArmLength](Gameplay.Gameplay.CameraSystem.md#targetarmlength)
- [targetOffset](Gameplay.Gameplay.CameraSystem.md#targetoffset)
- [transform](Gameplay.Gameplay.CameraSystem.md#transform)
- [usePawnControlRotation](Gameplay.Gameplay.CameraSystem.md#usepawncontrolrotation)

### Methods

- [applySettings](Gameplay.Gameplay.CameraSystem.md#applysettings)
- [attachCameraToCharacterCapsuleSlot](Gameplay.Gameplay.CameraSystem.md#attachcameratocharactercapsuleslot)
- [attachCameraToCharacterMeshSlot](Gameplay.Gameplay.CameraSystem.md#attachcameratocharactermeshslot)
- [attachToGameObject](Gameplay.Gameplay.CameraSystem.md#attachtogameobject)
- [cameraFocusing](Gameplay.Gameplay.CameraSystem.md#camerafocusing)
- [cameraLockTarget](Gameplay.Gameplay.CameraSystem.md#cameralocktarget)
- [cancelCameraFollowTarget](Gameplay.Gameplay.CameraSystem.md#cancelcamerafollowtarget)
- [cancelCameraLockTarget](Gameplay.Gameplay.CameraSystem.md#cancelcameralocktarget)
- [getCurrentSettings](Gameplay.Gameplay.CameraSystem.md#getcurrentsettings)
- [getDefaultCameraShakeData](Gameplay.Gameplay.CameraSystem.md#getdefaultcamerashakedata)
- [moveByPath](Gameplay.Gameplay.CameraSystem.md#movebypath)
- [resetOverrideCameraRotation](Gameplay.Gameplay.CameraSystem.md#resetoverridecamerarotation)
- [screenShock](Gameplay.Gameplay.CameraSystem.md#screenshock)
- [setCameraFollowTarget](Gameplay.Gameplay.CameraSystem.md#setcamerafollowtarget)
- [setCameraLockTarget](Gameplay.Gameplay.CameraSystem.md#setcameralocktarget)
- [setOverrideCameraRotation](Gameplay.Gameplay.CameraSystem.md#setoverridecamerarotation)
- [startCameraShake](Gameplay.Gameplay.CameraSystem.md#startcamerashake)
- [stopCameraShake](Gameplay.Gameplay.CameraSystem.md#stopcamerashake)
- [switchCameraMode](Gameplay.Gameplay.CameraSystem.md#switchcameramode)

## Constructors

### constructor

• **new CameraSystem**()

## Properties

### enableFadeEffect

• **enableFadeEffect**: `boolean`

**`Description`**

设置是否开启透明效果

#### Defined in

Gameplay/index.d.ts:148

___

### occludeCameraActor

• **occludeCameraActor**: `any`

**`Description`**

摄像机与角色之间的物体

#### Defined in

Gameplay/index.d.ts:152

## Accessors

### cameraDownLimitAngle

• `get` **cameraDownLimitAngle**(): `number`

**`Description`**

获取摄像机向下角度限制

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:324

• `set` **cameraDownLimitAngle**(`newDownLimitAngle`): `void`

**`Description`**

设置摄像机向下角度限制

#### Parameters

| Name | Type |
| :------ | :------ |
| `newDownLimitAngle` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:328

___

### cameraFOV

• `get` **cameraFOV**(): `number`

**`Description`**

获取当前摄像机FOV

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:268

• `set` **cameraFOV**(`fovNum`): `void`

**`Description`**

设置当前摄像机FOV

#### Parameters

| Name | Type |
| :------ | :------ |
| `fovNum` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:272

___

### cameraLocationLagSpeed

• `get` **cameraLocationLagSpeed**(): `number`

**`Description`**

获取当前摄像机位置延迟速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:252

• `set` **cameraLocationLagSpeed**(`newCameraLocationLagSpeed`): `void`

**`Description`**

设置当前摄像机位置延迟速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraLocationLagSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:256

___

### cameraLocationMode

• `get` **cameraLocationMode**(): [`CameraLocationMode`](../enums/Gameplay.Gameplay.CameraLocationMode.md)

**`Description`**

获取摄像机位置模式

#### Returns

[`CameraLocationMode`](../enums/Gameplay.Gameplay.CameraLocationMode.md)

#### Defined in

Gameplay/index.d.ts:276

• `set` **cameraLocationMode**(`newCameraLocationMode`): `void`

**`Description`**

设置摄像机位置模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraLocationMode` | [`CameraLocationMode`](../enums/Gameplay.Gameplay.CameraLocationMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:280

___

### cameraProjectionMode

• `get` **cameraProjectionMode**(): [`CameraProjectionMode`](../enums/Gameplay.Gameplay.CameraProjectionMode.md)

**`Description`**

获取当前摄像机投影模式

#### Returns

[`CameraProjectionMode`](../enums/Gameplay.Gameplay.CameraProjectionMode.md)

#### Defined in

Gameplay/index.d.ts:188

• `set` **cameraProjectionMode**(`newCameraProjectionMode`): `void`

**`Description`**

设置当前摄像机投影模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraProjectionMode` | [`CameraProjectionMode`](../enums/Gameplay.Gameplay.CameraProjectionMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:192

___

### cameraRelativeTransform

• `get` **cameraRelativeTransform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取当前摄像机相对Transform

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Gameplay/index.d.ts:172

• `set` **cameraRelativeTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机相对Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Type.Transform.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:176

___

### cameraRotationLagSpeed

• `get` **cameraRotationLagSpeed**(): `number`

**`Description`**

获取当前摄像机旋转延迟速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:260

• `set` **cameraRotationLagSpeed**(`newCameraRotationLagSpeed`): `void`

**`Description`**

设置当前摄像机旋转延迟速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraRotationLagSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:264

___

### cameraRotationMode

• `get` **cameraRotationMode**(): [`CameraRotationMode`](../enums/Gameplay.Gameplay.CameraRotationMode.md)

**`Description`**

获取摄像机旋转模式

#### Returns

[`CameraRotationMode`](../enums/Gameplay.Gameplay.CameraRotationMode.md)

#### Defined in

Gameplay/index.d.ts:284

• `set` **cameraRotationMode**(`newCameraRotationMode`): `void`

**`Description`**

设置摄像机旋转模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCameraRotationMode` | [`CameraRotationMode`](../enums/Gameplay.Gameplay.CameraRotationMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:288

___

### cameraSystemRelativeTransform

• `get` **cameraSystemRelativeTransform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取当前摄像机系统相对Transform

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Gameplay/index.d.ts:156

• `set` **cameraSystemRelativeTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机系统相对Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Type.Transform.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:160

___

### cameraSystemWorldTransform

• `get` **cameraSystemWorldTransform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取当前摄像机系统世界Transform

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Gameplay/index.d.ts:164

• `set` **cameraSystemWorldTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机系统世界Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Type.Transform.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:168

___

### cameraUpLimitAngle

• `get` **cameraUpLimitAngle**(): `number`

**`Description`**

获取摄像机向上角度限制

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:316

• `set` **cameraUpLimitAngle**(`newUpLimitAngle`): `void`

**`Description`**

设置摄像机向上角度限制

#### Parameters

| Name | Type |
| :------ | :------ |
| `newUpLimitAngle` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:320

___

### cameraWorldTransform

• `get` **cameraWorldTransform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取当前摄像机世界Transform

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Gameplay/index.d.ts:180

• `set` **cameraWorldTransform**(`newTransform`): `void`

**`Description`**

设置当前摄像机世界Transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTransform` | [`Transform`](Type.Type.Transform.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:184

___

### canCameraFocusing

• `get` **canCameraFocusing**(): `boolean`

**`Description`**

获取是否开启摄像机聚焦

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:388

• `set` **canCameraFocusing**(`canCameraFocus`): `void`

**`Description`**

设置是否开启摄像机聚焦

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCameraFocus` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:392

___

### enableCameraCollision

• `get` **enableCameraCollision**(): `boolean`

**`Description`**

获取是否开启摄像机碰撞

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:292

• `set` **enableCameraCollision**(`bEnableCameraCollision`): `void`

**`Description`**

设置是否开启摄像机碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraCollision` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:296

___

### enableCameraLocationLag

• `get` **enableCameraLocationLag**(): `boolean`

**`Description`**

获取当前是否开启摄像机位置延迟

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:236

• `set` **enableCameraLocationLag**(`bEnableCameraLocationLag`): `void`

**`Description`**

设置当前是否开启摄像机位置延迟

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraLocationLag` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:240

___

### enableCameraRotationLag

• `get` **enableCameraRotationLag**(): `boolean`

**`Description`**

获取当前是否开启摄像机旋转延迟

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:244

• `set` **enableCameraRotationLag**(`bEnableCameraRotationLag`): `void`

**`Description`**

设置当前是否开启摄像机旋转延迟

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableCameraRotationLag` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:248

___

### enableFollowTarget

• `get` **enableFollowTarget**(): `boolean`

**`Description`**

获取是否开启跟随目标功能

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:364

• `set` **enableFollowTarget**(`bIsEnableFollowTarget`): `void`

**`Description`**

设置是否开启跟随目标功能

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsEnableFollowTarget` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:368

___

### enableOcclusionDetection

• `get` **enableOcclusionDetection**(): `boolean`

**`Description`**

获取是否开启透明效果

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:332

• `set` **enableOcclusionDetection**(`bEnableOcclusionDetection`): `void`

**`Description`**

设置是否开启透明效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `bEnableOcclusionDetection` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:336

___

### enableRaiseCamera

• `get` **enableRaiseCamera**(): `boolean`

**`Description`**

获取是否开启抬高摄像机效果

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:348

• `set` **enableRaiseCamera**(`bIsEnableRaiseCamera`): `void`

**`Description`**

设置是否开启抬高摄像机效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsEnableRaiseCamera` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:352

___

### enableRealEffect

• `set` **enableRealEffect**(`value`): `void`

**`Description`**

启用/禁用真实效果

**`Precautions`**

只在客户端调用生效, 目前真实效果启用后只会把摄像机附加到角色的Eyes插槽上模拟第一人称真实效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:503

___

### fadeEffectValue

• `get` **fadeEffectValue**(): `number`

**`Description`**

获取透明效果的透明度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:340

• `set` **fadeEffectValue**(`newFadeEffectValue`): `void`

**`Description`**

设置透明效果的透明度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newFadeEffectValue` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:344

___

### fixedCameraZAxis

• `get` **fixedCameraZAxis**(): `boolean`

**`Description`**

获取是否固定摄像机Z轴

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:396

• `set` **fixedCameraZAxis**(`bIsFixedZAxis`): `void`

**`Description`**

设置是否固定摄像机Z轴

#### Parameters

| Name | Type |
| :------ | :------ |
| `bIsFixedZAxis` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:400

___

### followTargetInterpSpeed

• `get` **followTargetInterpSpeed**(): `number`

**`Description`**

获取跟随目标时的插值速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:372

• `set` **followTargetInterpSpeed**(`newInterpSpeed`): `void`

**`Description`**

设置跟随目标时的插值速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newInterpSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:376

___

### lockTargetOffset

• `get` **lockTargetOffset**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取锁定目标的偏移

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:380

• `set` **lockTargetOffset**(`newLockTargetOffset`): `void`

**`Description`**

设置锁定目标的偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLockTargetOffset` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:384

___

### orthoFarClipPlane

• `get` **orthoFarClipPlane**(): `number`

**`Description`**

获取正交视图的远平面距离(以世界单位表示)

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:212

• `set` **orthoFarClipPlane**(`newOrthoFarClipPlane`): `void`

**`Description`**

设置正交视图的远平面距离(以世界单位表示)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoFarClipPlane` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:216

___

### orthoNearClipPlane

• `get` **orthoNearClipPlane**(): `number`

**`Description`**

获取正交视图的近平面距离(以世界单位表示)

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:204

• `set` **orthoNearClipPlane**(`newOrthoNearClipPlane`): `void`

**`Description`**

设置正交视图的近平面距离(以世界单位表示)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoNearClipPlane` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:208

___

### orthoWidth

• `get` **orthoWidth**(): `number`

**`Description`**

获取正交宽度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:196

• `set` **orthoWidth**(`newOrthoWidth`): `void`

**`Description`**

设置正交宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOrthoWidth` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:200

___

### raiseCameraHeight

• `get` **raiseCameraHeight**(): `number`

**`Description`**

获取摄像机抬高高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:356

• `set` **raiseCameraHeight**(`newRaiseCameraHeight`): `void`

**`Description`**

设置摄像机抬高高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRaiseCameraHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:360

___

### socketOffset

• `get` **socketOffset**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取摄像机位置偏移

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:308

• `set` **socketOffset**(`newSocketOffset`): `void`

**`Description`**

设置摄像机位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newSocketOffset` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:312

___

### targetArmLength

• `get` **targetArmLength**(): `number`

**`Description`**

获取当前摄像机弹簧臂长度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:220

• `set` **targetArmLength**(`newTargetArmLength`): `void`

**`Description`**

设置当前摄像机弹簧臂长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTargetArmLength` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:224

___

### targetOffset

• `get` **targetOffset**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取挂点位置偏移

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:300

• `set` **targetOffset**(`newTargetOffset`): `void`

**`Description`**

设置挂点位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTargetOffset` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:304

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

摄像机的transform

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Gameplay/index.d.ts:555

___

### usePawnControlRotation

• `get` **usePawnControlRotation**(): `boolean`

**`Description`**

获取当前是否使用控制器控制摄像机旋转

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:228

• `set` **usePawnControlRotation**(`bUsePawnControlRotaion`): `void`

**`Description`**

设置当前是否使用控制器控制摄像机旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `bUsePawnControlRotaion` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:232

## Methods

### applySettings

▸ **applySettings**(`CameraSetting`): `void`

**`Description`**

应用摄像机系统数据

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `CameraSetting` | [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata) | usage:摄像机系统数据 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:487

___

### attachCameraToCharacterCapsuleSlot

▸ **attachCameraToCharacterCapsuleSlot**(): `void`

**`Description`**

附加摄像机到角色的胶囊体插槽上

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:498

___

### attachCameraToCharacterMeshSlot

▸ **attachCameraToCharacterMeshSlot**(`socket`): `void`

**`Description`**

附加摄像机到角色的模型插槽上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `socket` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽名 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:493

___

### attachToGameObject

▸ **attachToGameObject**(`target`): `void`

**`Description`**

相机附加至目标物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](Core.Core.GameObject.md) | usage:目标物体 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:440

___

### cameraFocusing

▸ **cameraFocusing**(`targetArmLength`, `targetOffset`, `timeInterval?`): `void`

**`Description`**

摄像机聚焦

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetArmLength` | `number` | usage:目标距离 |
| `targetOffset` | [`Vector`](Type.Type.Vector.md) | usage:目标偏移 |
| `timeInterval?` | `number` | usage:聚焦间隔,越小越快 default:20 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:408

___

### cameraLockTarget

▸ **cameraLockTarget**(`target`, `lockInterval?`, `lockSpeed?`, `lockRange?`, `lockDistance?`, `lockOffset?`, `bPause?`): `void`

**`Description`**

相机锁定目标(相比setCameraLockTarget多了更多复杂的设置)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](Core.Core.GameObject.md) | usage:目标物体 |
| `lockInterval?` | `number` | usage:锁定间隔(间隔多少秒暂停/恢复锁定) default:0 |
| `lockSpeed?` | `number` | usage:锁定速度(决定摄像机多久旋转至目标朝向，参数值越大越快,范围0-5，但0是直接旋转至目标朝向) default:1.3 |
| `lockRange?` | `number` | usage:锁定范围(以屏幕坐标中心为圆心，这个值表示半径) default:100 |
| `lockDistance?` | `number` | usage:锁定距离(目标到摄像机的距离) default:1000 |
| `lockOffset?` | [`Vector`](Type.Type.Vector.md) | usage:锁定偏移 default:Type.Vector.zero |
| `bPause?` | `boolean` | usage:决定超出范围/距离后锁定是暂停/取消，为true是暂停 default:true |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:452

___

### cancelCameraFollowTarget

▸ **cancelCameraFollowTarget**(): `void`

**`Description`**

取消跟随物体

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:434

___

### cancelCameraLockTarget

▸ **cancelCameraLockTarget**(): `void`

**`Description`**

取消锁定物体

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:423

___

### getCurrentSettings

▸ **getCurrentSettings**(): [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)

**`Description`**

获取当前的摄像机系统数据

**`Effect`**

只在客户端调用生效

#### Returns

[`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)

当前的摄像机系统数据

#### Defined in

Gameplay/index.d.ts:481

___

### getDefaultCameraShakeData

▸ **getDefaultCameraShakeData**(): [`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata)

**`Description`**

获取默认的摄像机震动数据

**`Effect`**

只在客户端调用生效

#### Returns

[`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata)

默认的摄像机震动数据

#### Defined in

Gameplay/index.d.ts:519

___

### moveByPath

▸ **moveByPath**(`path`, `completeCallback`): `void`

**`Description`**

镜头移动

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | { `location`: [`Vector`](Type.Type.Vector.md) ; `rotation`: [`Vector`](Type.Type.Vector.md) ; `time`: `number`  }[] | usage:路径数据 |
| `completeCallback` | () => `void` | usage:完成回调 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:546

___

### resetOverrideCameraRotation

▸ **resetOverrideCameraRotation**(): `void`

**`Description`**

取消旋转覆盖

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:475

___

### screenShock

▸ **screenShock**(`maxRange?`, `decay?`, `speed?`): `void`

**`Description`**

震屏

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxRange?` | `number` | usage: 最大幅度 default: 60 |
| `decay?` | `number` | usage: 每个周期的衰减 default: 0.5 |
| `speed?` | `number` | usage: 速度 default: 3000 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:539

___

### setCameraFollowTarget

▸ **setCameraFollowTarget**(`target`): `void`

**`Description`**

相机跟随物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](Core.Core.GameObject.md) | usage:目标物体 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:429

___

### setCameraLockTarget

▸ **setCameraLockTarget**(`target`): `void`

**`Description`**

相机锁定物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](Core.Core.GameObject.md) | usage:目标物体 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:418

___

### setOverrideCameraRotation

▸ **setOverrideCameraRotation**(`newOverrideRotation`, `clampByCameraModeRotationLimits?`): `void`

**`Description`**

覆盖摄像机旋转，从控制器传入值处截断

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOverrideRotation` | [`Rotation`](Type.Type.Rotation.md) | usage:新的旋转值 |
| `clampByCameraModeRotationLimits?` | `boolean` | usage:是否应用摄像机模式旋转限制 default:false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:467

___

### startCameraShake

▸ **startCameraShake**(`cameraShakeData`): `void`

**`Description`**

开始摄像机震动

**`Effect`**

只在客户端调用生效

**`Precautions`**

该方法参数通过cameraSystem.getDefaultCameraShakeData获取,多次调用震动效果会叠加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraShakeData` | [`CameraShakeData`](../modules/Gameplay.Gameplay.md#camerashakedata) | usage:摄像机震动数据 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:526

___

### stopCameraShake

▸ **stopCameraShake**(): `void`

**`Description`**

停止摄像机震动

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:531

___

### switchCameraMode

▸ **switchCameraMode**(`newCameraMode`, `enableRealEffect?`): `void`

**`Description`**

切换摄像机模式(第一人称、第三人称、俯视角、过肩视角...)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newCameraMode` | [`CameraMode`](../enums/Gameplay.Gameplay.CameraMode.md) | usage:新的摄像机模式 |
| `enableRealEffect?` | `boolean` | usage:是否开启真实模拟效果 default:false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:510
