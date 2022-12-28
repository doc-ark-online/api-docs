[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / CharacterBase

# Class: CharacterBase

<br>**`简介`**

* CharacterBase是一个具有外观和动画表现，且内置移动逻辑的GameObject，具备GameObject的所有功能。
* CharacterBase是玩家角色和非玩家角色的基类，可以在场景中行走、跳跃、飞行和游泳，可与世界中的所有物理效果交互
* CharacterBase通常会有默认的形象，你也可以对不同的形象进行编辑，以及选择设置为无形象
* 在MW的世界中，无法对CharacterBase进行实例化，它只用于提供玩家角色和非玩家角色的通用功能

## Hierarchy

- `GameObject`

  ↳ **`CharacterBase`**

  ↳↳ [`AICharacter`](Gameplay.Gameplay.AICharacter.md)

  ↳↳ [`Character`](Gameplay.Gameplay.Character.md)

  ↳↳ [`Humanoid`](Gameplay.Gameplay.Humanoid.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.CharacterBase.md#constructor)

### Properties

- [isV1](Gameplay.Gameplay.CharacterBase.md#isv1)
- [onLoadAppearanceDataAllCompleted](Gameplay.Gameplay.CharacterBase.md#onloadappearancedataallcompleted)
- [onMeshChanged](Gameplay.Gameplay.CharacterBase.md#onmeshchanged)
- [onMovementStateChanged](Gameplay.Gameplay.CharacterBase.md#onmovementstatechanged)
- [onSetAppearanceDataCompleted](Gameplay.Gameplay.CharacterBase.md#onsetappearancedatacompleted)
- [onTextureChanged](Gameplay.Gameplay.CharacterBase.md#ontexturechanged)
- [player](Gameplay.Gameplay.CharacterBase.md#player)

### Accessors

- [airControl](Gameplay.Gameplay.CharacterBase.md#aircontrol)
- [airControlBoostMultiplier](Gameplay.Gameplay.CharacterBase.md#aircontrolboostmultiplier)
- [airControlBoostVelocityThreshold](Gameplay.Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)
- [animationMode](Gameplay.Gameplay.CharacterBase.md#animationmode)
- [animationStance](Gameplay.Gameplay.CharacterBase.md#animationstance)
- [appearance](Gameplay.Gameplay.CharacterBase.md#appearance)
- [baseShadowLocationOffset](Gameplay.Gameplay.CharacterBase.md#baseshadowlocationoffset)
- [baseShadowMaxVisibleHeight](Gameplay.Gameplay.CharacterBase.md#baseshadowmaxvisibleheight)
- [baseShadowScale](Gameplay.Gameplay.CharacterBase.md#baseshadowscale)
- [basicStance](Gameplay.Gameplay.CharacterBase.md#basicstance)
- [basicStanceAimOffsetEnable](Gameplay.Gameplay.CharacterBase.md#basicstanceaimoffsetenable)
- [brakingDecelerationFalling](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationfalling)
- [brakingDecelerationFlying](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationflying)
- [brakingDecelerationSwimming](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationswimming)
- [brakingDecelerationWalking](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationwalking)
- [canSetAppearanceData](Gameplay.Gameplay.CharacterBase.md#cansetappearancedata)
- [canStepUpOn](Gameplay.Gameplay.CharacterBase.md#canstepupon)
- [capsuleHalfHeight](Gameplay.Gameplay.CharacterBase.md#capsulehalfheight)
- [capsuleRadius](Gameplay.Gameplay.CharacterBase.md#capsuleradius)
- [characterName](Gameplay.Gameplay.CharacterBase.md#charactername)
- [collisionEnable](Gameplay.Gameplay.CharacterBase.md#collisionenable)
- [collisionExtent](Gameplay.Gameplay.CharacterBase.md#collisionextent)
- [collisionShape](Gameplay.Gameplay.CharacterBase.md#collisionshape)
- [collisionWithOtherCharacterEnable](Gameplay.Gameplay.CharacterBase.md#collisionwithothercharacterenable)
- [crouchEnable](Gameplay.Gameplay.CharacterBase.md#crouchenable)
- [crouchedHeight](Gameplay.Gameplay.CharacterBase.md#crouchedheight)
- [forwardVector](Gameplay.Gameplay.CharacterBase.md#forwardvector)
- [gravityScale](Gameplay.Gameplay.CharacterBase.md#gravityscale)
- [groundFriction](Gameplay.Gameplay.CharacterBase.md#groundfriction)
- [guid](Gameplay.Gameplay.CharacterBase.md#guid)
- [headUIVisible](Gameplay.Gameplay.CharacterBase.md#headuivisible)
- [headUIVisibleRange](Gameplay.Gameplay.CharacterBase.md#headuivisiblerange)
- [isCrouching](Gameplay.Gameplay.CharacterBase.md#iscrouching)
- [isJumping](Gameplay.Gameplay.CharacterBase.md#isjumping)
- [isMoving](Gameplay.Gameplay.CharacterBase.md#ismoving)
- [jumpEnable](Gameplay.Gameplay.CharacterBase.md#jumpenable)
- [jumpMaxCount](Gameplay.Gameplay.CharacterBase.md#jumpmaxcount)
- [jumpingOutOfWaterEnable](Gameplay.Gameplay.CharacterBase.md#jumpingoutofwaterenable)
- [locallyVisible](Gameplay.Gameplay.CharacterBase.md#locallyvisible)
- [lockStatus](Gameplay.Gameplay.CharacterBase.md#lockstatus)
- [maxAcceleration](Gameplay.Gameplay.CharacterBase.md#maxacceleration)
- [maxFallingSpeed](Gameplay.Gameplay.CharacterBase.md#maxfallingspeed)
- [maxFlySpeed](Gameplay.Gameplay.CharacterBase.md#maxflyspeed)
- [maxJumpHeight](Gameplay.Gameplay.CharacterBase.md#maxjumpheight)
- [maxStepHeight](Gameplay.Gameplay.CharacterBase.md#maxstepheight)
- [maxSwimSpeed](Gameplay.Gameplay.CharacterBase.md#maxswimspeed)
- [maxWalkSpeed](Gameplay.Gameplay.CharacterBase.md#maxwalkspeed)
- [maxWalkSpeedCrouched](Gameplay.Gameplay.CharacterBase.md#maxwalkspeedcrouched)
- [moveEnable](Gameplay.Gameplay.CharacterBase.md#moveenable)
- [moveFacingDirection](Gameplay.Gameplay.CharacterBase.md#movefacingdirection)
- [movementAxisDirection](Gameplay.Gameplay.CharacterBase.md#movementaxisdirection)
- [movementDirection](Gameplay.Gameplay.CharacterBase.md#movementdirection)
- [movementState](Gameplay.Gameplay.CharacterBase.md#movementstate)
- [name](Gameplay.Gameplay.CharacterBase.md#name)
- [netStatus](Gameplay.Gameplay.CharacterBase.md#netstatus)
- [outOfWaterZ](Gameplay.Gameplay.CharacterBase.md#outofwaterz)
- [parent](Gameplay.Gameplay.CharacterBase.md#parent)
- [ragdollEnable](Gameplay.Gameplay.CharacterBase.md#ragdollenable)
- [relativeLocation](Gameplay.Gameplay.CharacterBase.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.CharacterBase.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.CharacterBase.md#relativescale)
- [rightVector](Gameplay.Gameplay.CharacterBase.md#rightvector)
- [rotateRate](Gameplay.Gameplay.CharacterBase.md#rotaterate)
- [scale](Gameplay.Gameplay.CharacterBase.md#scale)
- [separateBrakingFrictionEnable](Gameplay.Gameplay.CharacterBase.md#separatebrakingfrictionenable)
- [staticStatus](Gameplay.Gameplay.CharacterBase.md#staticstatus)
- [tag](Gameplay.Gameplay.CharacterBase.md#tag)
- [transform](Gameplay.Gameplay.CharacterBase.md#transform)
- [upVector](Gameplay.Gameplay.CharacterBase.md#upvector)
- [useUpdate](Gameplay.Gameplay.CharacterBase.md#useupdate)
- [usedCapsuleCorrection](Gameplay.Gameplay.CharacterBase.md#usedcapsulecorrection)
- [velocity](Gameplay.Gameplay.CharacterBase.md#velocity)
- [visible](Gameplay.Gameplay.CharacterBase.md#visible)
- [walkableFloorAngle](Gameplay.Gameplay.CharacterBase.md#walkablefloorangle)
- [worldLocation](Gameplay.Gameplay.CharacterBase.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.CharacterBase.md#worldrotation)
- [worldScale](Gameplay.Gameplay.CharacterBase.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.CharacterBase.md#adddestroycallback)
- [addImpulse](Gameplay.Gameplay.CharacterBase.md#addimpulse)
- [addMoveInput](Gameplay.Gameplay.CharacterBase.md#addmoveinput)
- [appearanceReady](Gameplay.Gameplay.CharacterBase.md#appearanceready)
- [asyncGetScriptByName](Gameplay.Gameplay.CharacterBase.md#asyncgetscriptbyname)
- [attach](Gameplay.Gameplay.CharacterBase.md#attach)
- [attachToGameObject](Gameplay.Gameplay.CharacterBase.md#attachtogameobject)
- [clearDecorations](Gameplay.Gameplay.CharacterBase.md#cleardecorations)
- [clearOneDecoration](Gameplay.Gameplay.CharacterBase.md#clearonedecoration)
- [clone](Gameplay.Gameplay.CharacterBase.md#clone)
- [crouch](Gameplay.Gameplay.CharacterBase.md#crouch)
- [deleteDestroyCallback](Gameplay.Gameplay.CharacterBase.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.CharacterBase.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.CharacterBase.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.CharacterBase.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.CharacterBase.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.CharacterBase.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.CharacterBase.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.CharacterBase.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.CharacterBase.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.CharacterBase.md#getcollision)
- [getControlRotator](Gameplay.Gameplay.CharacterBase.md#getcontrolrotator)
- [getDecorations](Gameplay.Gameplay.CharacterBase.md#getdecorations)
- [getForwardVector](Gameplay.Gameplay.CharacterBase.md#getforwardvector)
- [getHeadUIWidget](Gameplay.Gameplay.CharacterBase.md#getheaduiwidget)
- [getRelativeLocation](Gameplay.Gameplay.CharacterBase.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.CharacterBase.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.CharacterBase.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.CharacterBase.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.CharacterBase.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.CharacterBase.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.CharacterBase.md#getscripts)
- [getSlotName](Gameplay.Gameplay.CharacterBase.md#getslotname)
- [getSourceAssetGuid](Gameplay.Gameplay.CharacterBase.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.CharacterBase.md#gettransform)
- [getUpVector](Gameplay.Gameplay.CharacterBase.md#getupvector)
- [getVisibility](Gameplay.Gameplay.CharacterBase.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.CharacterBase.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.CharacterBase.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.CharacterBase.md#getworldscale)
- [isPlayingAnimation](Gameplay.Gameplay.CharacterBase.md#isplayinganimation)
- [isRunningClient](Gameplay.Gameplay.CharacterBase.md#isrunningclient)
- [jump](Gameplay.Gameplay.CharacterBase.md#jump)
- [loadAnimation](Gameplay.Gameplay.CharacterBase.md#loadanimation)
- [loadDecoration](Gameplay.Gameplay.CharacterBase.md#loaddecoration)
- [loadSlotAndEditorDataByGuid](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabyguid)
- [loadSlotAndEditorDataByPath](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabypath)
- [loadStance](Gameplay.Gameplay.CharacterBase.md#loadstance)
- [lookAt](Gameplay.Gameplay.CharacterBase.md#lookat)
- [onDestroy](Gameplay.Gameplay.CharacterBase.md#ondestroy)
- [onStart](Gameplay.Gameplay.CharacterBase.md#onstart)
- [onUpdate](Gameplay.Gameplay.CharacterBase.md#onupdate)
- [playAnimation](Gameplay.Gameplay.CharacterBase.md#playanimation)
- [playAnimationLocally](Gameplay.Gameplay.CharacterBase.md#playanimationlocally)
- [ready](Gameplay.Gameplay.CharacterBase.md#ready)
- [setAppearance](Gameplay.Gameplay.CharacterBase.md#setappearance)
- [setCollision](Gameplay.Gameplay.CharacterBase.md#setcollision)
- [setCollisionShapeAndExtent](Gameplay.Gameplay.CharacterBase.md#setcollisionshapeandextent)
- [setLocallyVisibility](Gameplay.Gameplay.CharacterBase.md#setlocallyvisibility)
- [setLocationAndRotation](Gameplay.Gameplay.CharacterBase.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.CharacterBase.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.CharacterBase.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.CharacterBase.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.CharacterBase.md#settransform)
- [setVisibility](Gameplay.Gameplay.CharacterBase.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.CharacterBase.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.CharacterBase.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.CharacterBase.md#setworldscale)
- [stopAnimation](Gameplay.Gameplay.CharacterBase.md#stopanimation)
- [stopStance](Gameplay.Gameplay.CharacterBase.md#stopstance)
- [swimmingDown](Gameplay.Gameplay.CharacterBase.md#swimmingdown)
- [swimmingUp](Gameplay.Gameplay.CharacterBase.md#swimmingup)
- [switchToFlying](Gameplay.Gameplay.CharacterBase.md#switchtoflying)
- [switchToWalking](Gameplay.Gameplay.CharacterBase.md#switchtowalking)
- [asyncFind](Gameplay.Gameplay.CharacterBase.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.CharacterBase.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.CharacterBase.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.CharacterBase.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.CharacterBase.md#spawngameobject)

## Constructors

### constructor

• **new CharacterBase**()

#### Inherited from

Core.GameObject.constructor

## Properties

### isV1

• `Private` **isV1**: `any`

**`Description`**

判断当前角色是否是 V1 版本

**`Effect`**

调用端调用生效

#### Defined in

Gameplay/index.d.ts:1423

---

### onLoadAppearanceDataAllCompleted

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

#### Defined in

Gameplay/index.d.ts:841

---

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

#### Defined in

Gameplay/index.d.ts:829

---

### onMovementStateChanged

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

**`Description`**

移动状态切换时的回调

#### Defined in

Gameplay/index.d.ts:821

---

### onSetAppearanceDataCompleted

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑 API 成功后的回调

#### Defined in

Gameplay/index.d.ts:837

---

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

#### Defined in

Gameplay/index.d.ts:833

---

### player

• **player**: [`Player`](Gameplay.Gameplay.Player.md)

**`Description`**

玩家对象

#### Defined in

Gameplay/index.d.ts:862

## Accessors

### airControl

• `get` **airControl**(): `number`

**`Description`**

角色在空中时, 控制水平方向移动的灵活度

**`Precautions`**

范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1075

• `set` **airControl**(`InAirControl`): `void`

**`Description`**

角色在空中时, 控制水平方向移动的灵活度

**`Precautions`**

范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `InAirControl` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1080

---

### airControlBoostMultiplier

• `get` **airControlBoostMultiplier**(): `number`

**`Description`**

当角色空中水平移动速率比 airControlBoostVelocityThreshold 小时, 对 airControl 效果加倍的倍数

**`Precautions`**

范围:大于等于 0 的数字, 取 0 时, 不会对 airControl 效果加倍, 无论取值多大, airControl 最大值都被限制为 1

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1085

• `set` **airControlBoostMultiplier**(`InAirControlBoostMultiplier`): `void`

**`Description`**

当角色空中水平移动速率比 airControlBoostVelocityThreshold 小时, 对 airControl 效果加倍的倍数

**`Precautions`**

范围:大于等于 0 的数字, 取 0 时, 不会对 airControl 效果加倍, 无论取值多大, airControl 最大值都被限制为 1

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `InAirControlBoostMultiplier` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1090

---

### airControlBoostVelocityThreshold

• `get` **airControlBoostVelocityThreshold**(): `number`

**`Description`**

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照 airControlBoostMultiplier 的值对 airControl 效果进行加倍

**`Precautions`**

范围: 大于等于 0

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1095

• `set` **airControlBoostVelocityThreshold**(`InAirControlBoostVelocityThreshold`): `void`

**`Description`**

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照 airControlBoostMultiplier 的值对 airControl 效果进行加倍

**`Precautions`**

范围: 大于等于 0

#### Parameters

| Name                                 | Type     |
| :----------------------------------- | :------- |
| `InAirControlBoostVelocityThreshold` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1100

---

### animationMode

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

**`Description`**

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

#### Defined in

Gameplay/index.d.ts:1506

• `set` **animationMode**(`mode`): `void`

**`Description`**

动画播放模式

#### Parameters

| Name   | Type                                                           |
| :----- | :------------------------------------------------------------- |
| `mode` | [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1510

---

### animationStance

• `get` **animationStance**(): `string`

**`Description`**

动画姿态

**`Precautions`**

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态

#### Returns

`string`

#### Defined in

Gameplay/index.d.ts:1158

• `set` **animationStance**(`StanceGuid`): `void`

**`Description`**

动画姿态

**`Precautions`**

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `StanceGuid` | `string` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1163

---

### appearance

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

**`Description`**

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

#### Defined in

Gameplay/index.d.ts:1463

---

### baseShadowLocationOffset

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Gameplay/index.d.ts:1351

• `set` **baseShadowLocationOffset**(`InLocationOffset`): `void`

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Parameters

| Name               | Type                              |
| :----------------- | :-------------------------------- |
| `InLocationOffset` | [`Vector2`](Type.Type.Vector2.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1355

---

### baseShadowMaxVisibleHeight

• `get` **baseShadowMaxVisibleHeight**(): `number`

**`Description`**

模拟阴影可见的最大离地高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1359

• `set` **baseShadowMaxVisibleHeight**(`InHeight`): `void`

**`Description`**

模拟阴影可见的最大离地高度

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `InHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1363

---

### baseShadowScale

• `get` **baseShadowScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Gameplay/index.d.ts:1343

• `set` **baseShadowScale**(`InScale`): `void`

**`Description`**

模拟阴影的缩放

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `InScale` | [`Vector2`](Type.Type.Vector2.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1347

---

### basicStance

• `get` **basicStance**(): `string`

**`Description`**

基础姿态

**`Precautions`**

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的 guid 进行基础姿态的切换

#### Returns

`string`

#### Defined in

Gameplay/index.d.ts:1148

• `set` **basicStance**(`InBasicStance`): `void`

**`Description`**

基础姿态

**`Precautions`**

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的 guid 进行基础姿态的切换

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `InBasicStance` | `string` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1153

---

### basicStanceAimOffsetEnable

• `get` **basicStanceAimOffsetEnable**(): `boolean`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1321

• `set` **basicStanceAimOffsetEnable**(`InbEnableAimOffset`): `void`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableAimOffset` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1325

---

### brakingDecelerationFalling

• `get` **brakingDecelerationFalling**(): `number`

**`Description`**

下落制动速率

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1131

• `set` **brakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void`

**`Description`**

下落制动速率

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `InBrakingDecelerationFalling` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1135

---

### brakingDecelerationFlying

• `get` **brakingDecelerationFlying**(): `number`

**`Description`**

飞行制动速率

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1115

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void`

**`Description`**

飞行制动速率

#### Parameters

| Name                          | Type     |
| :---------------------------- | :------- |
| `InBrakingDecelerationFlying` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1119

---

### brakingDecelerationSwimming

• `get` **brakingDecelerationSwimming**(): `number`

**`Description`**

游泳制动速率

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1139

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void`

**`Description`**

游泳制动速率

#### Parameters

| Name                            | Type     |
| :------------------------------ | :------- |
| `InBrakingDecelerationSwimming` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1143

---

### brakingDecelerationWalking

• `get` **brakingDecelerationWalking**(): `number`

**`Description`**

行走制动速率

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1123

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void`

**`Description`**

行走制动速率

#### Parameters

| Name                           | Type     |
| :----------------------------- | :------- |
| `InBrakingDecelerationWalking` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1127

---

### canSetAppearanceData

• `get` **canSetAppearanceData**(): `boolean`

**`Description`**

是否可以设置角色形象数据

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:825

---

### canStepUpOn

• `get` **canStepUpOn**(): `boolean`

**`Description`**

获取组件是否可以被玩家站立

**`Effect`**

调用端调用生效

#### Returns

`boolean`

true 其他角色可以站到玩家头上 false 其他角色不可以站到玩家头上

#### Defined in

Gameplay/index.d.ts:1400

• `set` **canStepUpOn**(`CanStepUpOn`): `void`

**`Description`**

设置组件是否可以被玩家站立

**`Effect`**

服务端生效

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `CanStepUpOn` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1405

---

### capsuleHalfHeight

• `get` **capsuleHalfHeight**(): `number`

**`Description`**

胶囊体半高

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1058

• `set` **capsuleHalfHeight**(`InCapsuleHalfHeight`): `void`

**`Description`**

胶囊体半高

#### Parameters

| Name                  | Type     |
| :-------------------- | :------- |
| `InCapsuleHalfHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1062

---

### capsuleRadius

• `get` **capsuleRadius**(): `number`

**`Description`**

胶囊体半径

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1066

• `set` **capsuleRadius**(`InCapsuleRadius`): `void`

**`Description`**

胶囊体半径

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `InCapsuleRadius` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1070

---

### characterName

• `get` **characterName**(): `string`

**`Description`**

角色名称

**`Precautions`**

会显示在角色头顶 UI 上

#### Returns

`string`

#### Defined in

Gameplay/index.d.ts:867

• `set` **characterName**(`inCharacterName`): `void`

**`Description`**

角色名称

**`Precautions`**

会显示在角色头顶 UI 上

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `inCharacterName` | `string` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:872

---

### collisionEnable

• `get` **collisionEnable**(): `boolean`

**`Description`**

是否开启碰撞

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1313

• `set` **collisionEnable**(`InbEnableCollision`): `void`

**`Description`**

是否开启碰撞

#### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableCollision` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1317

---

### collisionExtent

• `get` **collisionExtent**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞形状的大小

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:1502

---

### collisionShape

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

**`Description`**

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

#### Defined in

Gameplay/index.d.ts:1498

---

### collisionWithOtherCharacterEnable

• `get` **collisionWithOtherCharacterEnable**(): `boolean`

**`Description`**

能否与其他角色发生碰撞

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1427

• `set` **collisionWithOtherCharacterEnable**(`value`): `void`

**`Description`**

能否与其他角色发生碰撞

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1431

---

### crouchEnable

• `get` **crouchEnable**(): `boolean`

**`Description`**

启用/禁用下蹲能力

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:920

• `set` **crouchEnable**(`canCrouch`): `void`

**`Description`**

启用/禁用下蹲能力

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `canCrouch` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:924

---

### crouchedHeight

• `get` **crouchedHeight**(): `number`

**`Description`**

下蹲时胶囊体的高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1015

• `set` **crouchedHeight**(`InCrouchedHeight`): `void`

**`Description`**

下蹲时胶囊体的高度

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `InCrouchedHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1019

---

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:409

---

### gravityScale

• `get` **gravityScale**(): `number`

**`Description`**

重力倍率

**`Precautions`**

范围 0~10, 过大和过小的值都会被限制

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1107

• `set` **gravityScale**(`newGravityScale`): `void`

**`Description`**

重力倍率

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `newGravityScale` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1111

---

### groundFriction

• `get` **groundFriction**(): `number`

**`Description`**

地面摩檫力

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:983

• `set` **groundFriction**(`inGroundFriction`): `void`

**`Description`**

地面摩檫力

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `inGroundFriction` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:987

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:39

---

### headUIVisible

• `get` **headUIVisible**(): `boolean`

**`Description`**

头顶 UI 是否可见

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1335

• `set` **headUIVisible**(`isVisible`): `void`

**`Description`**

头顶 UI 是否可见

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isVisible` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1339

---

### headUIVisibleRange

• `get` **headUIVisibleRange**(): `number`

**`Description`**

头顶 UI 可见距离

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1367

• `set` **headUIVisibleRange**(`VisibleDistance`): `void`

**`Description`**

头顶 UI 可见距离

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `VisibleDistance` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1371

---

### isCrouching

• `get` **isCrouching**(): `boolean`

**`Description`**

是否处于下蹲状态

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1185

---

### isJumping

• `get` **isJumping**(): `boolean`

**`Description`**

是否正在跳跃

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1249

---

### isMoving

• `get` **isMoving**(): `boolean`

**`Description`**

是否正在移动

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1253

---

### jumpEnable

• `get` **jumpEnable**(): `boolean`

**`Description`**

启用/禁用跳跃能力

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:888

• `set` **jumpEnable**(`value`): `void`

**`Description`**

启用/禁用跳跃能力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:892

---

### jumpMaxCount

• `get` **jumpMaxCount**(): `number`

**`Description`**

最大可跳跃次数

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1007

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void`

**`Description`**

最大可跳跃次数

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `InJumpMaxCount` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1011

---

### jumpingOutOfWaterEnable

• `get` **jumpingOutOfWaterEnable**(): `boolean`

**`Description`**

是否可以跳出水面

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1443

• `set` **jumpingOutOfWaterEnable**(`value`): `void`

**`Description`**

是否可以跳出水面

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1447

---

### locallyVisible

• `get` **locallyVisible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

是否可见(本地设置)

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1204

• `set` **locallyVisible**(`inIsVisible`): `void`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:setVisibilityLocally()

**`Description`**

是否可见(本地设置)

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `inIsVisible` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1209

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:456

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:451

---

### maxAcceleration

• `get` **maxAcceleration**(): `number`

**`Description`**

最大加速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:949

• `set` **maxAcceleration**(`InMaxAcceleration`): `void`

**`Description`**

最大加速度

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `InMaxAcceleration` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:953

---

### maxFallingSpeed

• `get` **maxFallingSpeed**(): `number`

**`Description`**

最大下落速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:928

• `set` **maxFallingSpeed**(`speed`): `void`

**`Description`**

最大下落速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `speed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:932

---

### maxFlySpeed

• `get` **maxFlySpeed**(): `number`

**`Description`**

最大飞行速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:904

• `set` **maxFlySpeed**(`InMaxFlySpeed`): `void`

**`Description`**

最大飞行速度

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `InMaxFlySpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:908

---

### maxJumpHeight

• `get` **maxJumpHeight**(): `number`

**`Description`**

最大跳跃高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:999

• `set` **maxJumpHeight**(`InMaxJumpHeight`): `void`

**`Description`**

最大跳跃高度

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `InMaxJumpHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1003

---

### maxStepHeight

• `get` **maxStepHeight**(): `number`

**`Description`**

获取角色最大可跨越高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:957

• `set` **maxStepHeight**(`InMaxStepHeight`): `void`

**`Description`**

设置角色最大可跨越高度

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `InMaxStepHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:961

---

### maxSwimSpeed

• `get` **maxSwimSpeed**(): `number`

**`Description`**

最大游泳速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:912

• `set` **maxSwimSpeed**(`InMaxSwimSpeed`): `void`

**`Description`**

最大游泳速度

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `InMaxSwimSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:916

---

### maxWalkSpeed

• `get` **maxWalkSpeed**(): `number`

**`Description`**

地面最大速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:896

• `set` **maxWalkSpeed**(`InMaxWalkSpeed`): `void`

**`Description`**

地面最大速度

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `InMaxWalkSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:900

---

### maxWalkSpeedCrouched

• `get` **maxWalkSpeedCrouched**(): `number`

**`Description`**

地面蹲伏行走时的最大移动速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:936

• `set` **maxWalkSpeedCrouched**(`maxSpeed`): `void`

**`Description`**

地面蹲伏行走时的最大移动速度

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `maxSpeed` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:940

---

### moveEnable

• `get` **moveEnable**(): `boolean`

**`Description`**

启用/禁用移动能力

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:880

• `set` **moveEnable**(`value`): `void`

**`Description`**

启用/禁用移动能力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:884

---

### moveFacingDirection

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

**`Description`**

运动面朝方向

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

#### Defined in

Gameplay/index.d.ts:1031

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void`

**`Description`**

运动面朝方向

#### Parameters

| Name                    | Type                                                                       |
| :---------------------- | :------------------------------------------------------------------------- |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1035

---

### movementAxisDirection

• `get` **movementAxisDirection**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:1023

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void`

**`Description`**

运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效

#### Parameters

| Name                      | Type                            |
| :------------------------ | :------------------------------ |
| `InMovementAxisDirection` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1027

---

### movementDirection

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

**`Description`**

运动时依据的正方向

**`Precautions`**

如果是控制器方向, 就以控制器坐标系为轴;
如果是定轴方向，就以世界坐标系为轴;
如果是视线方向, 就以相机坐标系为轴. 在玩家相机不存在 Z 轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致.

#### Returns

[`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

#### Defined in

Gameplay/index.d.ts:1042

• `set` **movementDirection**(`InMovementDirection`): `void`

**`Description`**

运动时依据的正方向

#### Parameters

| Name                  | Type                                                                   |
| :-------------------- | :--------------------------------------------------------------------- |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1046

---

### movementState

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

**`Description`**

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

#### Defined in

Gameplay/index.d.ts:876

---

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:171

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:177

---

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:513

---

### outOfWaterZ

• `get` **outOfWaterZ**(): `number`

**`Description`**

出水时 Z 轴方向上的速度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:1439

• `set` **outOfWaterZ**(`value`): `void`

**`Description`**

出水时 Z 轴方向上的速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1435

---

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:462

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newParent` | `GameObject` |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:467

---

### ragdollEnable

• `get` **ragdollEnable**(): `boolean`

**`Description`**

启用/禁用布娃娃状态

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1283

• `set` **ragdollEnable**(`value`): `void`

**`Description`**

启用/禁用布娃娃状态

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1287

---

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:308

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:314

---

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:334

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:340

---

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:360

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:366

---

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:423

---

### rotateRate

• `get` **rotateRate**(): `number`

**`Description`**

最大转向速度

**`Precautions`**

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:974

• `set` **rotateRate**(`InRotateRate`): `void`

**`Description`**

最大转向速度

**`Precautions`**

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `InRotateRate` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:979

---

### scale

• `get` **scale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

角色胶囊体的缩放, 自动同步

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:1305

• `set` **scale**(`InCharacterScale`): `void`

**`Description`**

角色胶囊体的缩放, 自动同步

#### Parameters

| Name               | Type                            |
| :----------------- | :------------------------------ |
| `InCharacterScale` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1309

---

### separateBrakingFrictionEnable

• `get` **separateBrakingFrictionEnable**(): `boolean`

**`Description`**

使用单独制动摩擦

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:991

• `set` **separateBrakingFrictionEnable**(`used`): `void`

**`Description`**

使用单独制动摩擦

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `used` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:995

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:446

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:189

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:183

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:209

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:215

---

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:396

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:441

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:436

---

### usedCapsuleCorrection

• `get` **usedCapsuleCorrection**(): `boolean`

**`Description`**

使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:1050

• `set` **usedCapsuleCorrection**(`usedCapsuleCorrection`): `void`

**`Description`**

使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Parameters

| Name                    | Type      |
| :---------------------- | :-------- |
| `usedCapsuleCorrection` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1054

---

### velocity

• `get` **velocity**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前移动速度

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Gameplay/index.d.ts:1189

---

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

是否可见

#### Returns

`boolean`

#### Overrides

Core.GameObject.visible

#### Defined in

Gameplay/index.d.ts:1194

• `set` **visible**(`inIsVisible`): `void`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:setVisibility()

**`Description`**

是否可见

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `inIsVisible` | `boolean` |

#### Returns

`void`

#### Overrides

Core.GameObject.visible

#### Defined in

Gameplay/index.d.ts:1199

---

### walkableFloorAngle

• `get` **walkableFloorAngle**(): `number`

**`Description`**

可行走的最大角度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:965

• `set` **walkableFloorAngle**(`InWalkableFloorAngle`): `void`

**`Description`**

可行走的最大角度

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `InWalkableFloorAngle` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:969

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:234

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:239

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:258

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:264

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:283

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:288

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.addDestroyCallback

#### Defined in

Core/index.d.ts:627

---

### addImpulse

▸ **addImpulse**(`Vector`, `ignoreMass?`): `void`

**`Description`**

添加冲量

**`Effect`**

服务端调用生效

**`Precautions`**

质量固定为 100, 受质量影响的算法为: 冲量按位除以质量

#### Parameters

| Name          | Type                            | Description                                  |
| :------------ | :------------------------------ | :------------------------------------------- |
| `Vector`      | [`Vector`](Type.Type.Vector.md) | usage:应用的冲量                             |
| `ignoreMass?` | `boolean`                       | usage:是否忽略质量对冲量的影响 default:false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1279

---

### addMoveInput

▸ **addMoveInput**(`direction`): `void`

**`Description`**

沿着给定的方向向量添加移动输入

**`Effect`**

调用端调用生效

**`Precautions`**

效果受 movementDirection 属性影响

#### Parameters

| Name        | Type                            | Description      |
| :---------- | :------------------------------ | :--------------- |
| `direction` | [`Vector`](Type.Type.Vector.md) | usage:输入的方向 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1271

---

### appearanceReady

▸ **appearanceReady**(): `Promise`<`void`\>

**`Description`**

在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断

**`Effect`**

客户端

#### Returns

`Promise`<`void`\>

异步回调

#### Defined in

Gameplay/index.d.ts:847

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

Core.GameObject.asyncGetScriptByName

#### Defined in

Core/index.d.ts:574

---

### attach

▸ **attach**(`gameObject`, `slotName`): `void`

**`Description`**

将物体附着到人物角色的指定插槽

**`Effect`**

调用端调用生效

#### Parameters

| Name         | Type                                                 | Description    |
| :----------- | :--------------------------------------------------- | :------------- |
| `gameObject` | `GameObject`                                         | usage:物体     |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽类型 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1294

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| `obj` | `GameObject` | usage:物体  |

#### Returns

`void`

#### Inherited from

Core.GameObject.attachToGameObject

#### Defined in

Core/index.d.ts:594

---

### clearDecorations

▸ **clearDecorations**(): `void`

**`Description`**

清空所有挂件数据

**`Effect`**

客户端

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1475

---

### clearOneDecoration

▸ **clearOneDecoration**(`guid`): `void`

**`Description`**

删除一个挂件

**`Effect`**

客户端

#### Parameters

| Name   | Type     | Description                    |
| :----- | :------- | :----------------------------- |
| `guid` | `string` | usage: 实例化后的挂件对象 Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1488

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

#### Inherited from

Core.GameObject.clone

#### Defined in

Core/index.d.ts:554

---

### crouch

▸ **crouch**(`isCrouch`): `void`

**`Description`**

下蹲

**`Effect`**

调用端调用生效

#### Parameters

| Name       | Type      | Description    |
| :--------- | :-------- | :------------- |
| `isCrouch` | `boolean` | usage:是否下蹲 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1264

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.deleteDestroyCallback

#### Defined in

Core/index.d.ts:633

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.destroy

#### Defined in

Core/index.d.ts:150

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Overrides

Core.GameObject.detachFromGameObject

#### Defined in

Gameplay/index.d.ts:945

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getBoundingBoxSize

#### Defined in

Core/index.d.ts:609

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

Core.GameObject.getBounds

#### Defined in

Core/index.d.ts:198

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByGuid

#### Defined in

Core/index.d.ts:547

---

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByName

#### Defined in

Core/index.d.ts:540

---

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取 Children，客户端不维系父子关系。推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.getChildren

#### Defined in

Core/index.d.ts:533

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getChildrenBoxCenter

#### Defined in

Core/index.d.ts:621

---

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

Core.GameObject.getCollision

#### Defined in

Core/index.d.ts:484

---

### getControlRotator

▸ **getControlRotator**(`Out?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取控制器的旋转

**`Effect`**

调用端调用生效

#### Parameters

| Name   | Type                                | Description                                 |
| :----- | :---------------------------------- | :------------------------------------------ |
| `Out?` | [`Rotation`](Type.Type.Rotation.md) | usage:获取控制器旋转 default:出参，可选参数 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

控制器的旋转

#### Defined in

Gameplay/index.d.ts:1384

---

### getDecorations

▸ **getDecorations**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[]

**`Description`**

获取当前挂件实例化对象的 Guid

**`Effect`**

客户端

#### Returns

[`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[]

guid 数组

#### Defined in

Gameplay/index.d.ts:1494

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getForwardVector

#### Defined in

Core/index.d.ts:417

---

### getHeadUIWidget

▸ **getHeadUIWidget**(): [`UIWidget`](Gameplay.Gameplay.UIWidget.md)

**`Description`**

获取头顶 UIWidget

**`Effect`**

调用端调用生效

#### Returns

[`UIWidget`](Gameplay.Gameplay.UIWidget.md)

头顶 UIWidget 对象

#### Defined in

Gameplay/index.d.ts:1331

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.getRelativeLocation

#### Defined in

Core/index.d.ts:322

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.getRelativeRotation

#### Defined in

Core/index.d.ts:348

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.getRelativeScale

#### Defined in

Core/index.d.ts:374

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getRightVector

#### Defined in

Core/index.d.ts:431

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByGuid

#### Defined in

Core/index.d.ts:581

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByName

#### Defined in

Core/index.d.ts:567

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

#### Inherited from

Core.GameObject.getScripts

#### Defined in

Core/index.d.ts:560

---

### getSlotName

▸ **getSlotName**(`slotType`): `string`

**`Description`**

获取对应插槽名称

**`Effect`**

调用端调用生效

#### Parameters

| Name       | Type                                                 | Description    |
| :--------- | :--------------------------------------------------- | :------------- |
| `slotType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽类型 |

#### Returns

`string`

插槽名称(string)

#### Defined in

Gameplay/index.d.ts:1301

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

Core.GameObject.getSourceAssetGuid

#### Defined in

Core/index.d.ts:639

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

Core.GameObject.getTransform

#### Defined in

Core/index.d.ts:223

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getUpVector

#### Defined in

Core/index.d.ts:403

---

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Overrides

Core.GameObject.getVisibility

#### Defined in

Gameplay/index.d.ts:1215

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

Core.GameObject.getWorldLocation

#### Defined in

Core/index.d.ts:247

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

Core.GameObject.getWorldRotation

#### Defined in

Core/index.d.ts:272

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

Core.GameObject.getWorldScale

#### Defined in

Core/index.d.ts:296

---

### isPlayingAnimation

▸ **isPlayingAnimation**(): `boolean`

**`Description`**

是否正在播放动画

**`Effect`**

客户端调用生效

#### Returns

`boolean`

是否正在播放动画

#### Defined in

Gameplay/index.d.ts:1516

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

Core.GameObject.isRunningClient

#### Defined in

Core/index.d.ts:50

---

### jump

▸ **jump**(): `void`

**`Description`**

跳跃

**`Effect`**

调用端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1258

---

### loadAnimation

▸ **loadAnimation**(`guid`, `sync?`): [`Animation`](Gameplay.Gameplay.Animation.md)

**`Description`**

加载动画,获取到动画对象

**`Effect`**

调用端调用生效

#### Parameters

| Name    | Type      | Description                               |
| :------ | :-------- | :---------------------------------------- |
| `guid`  | `string`  | usage:动画 GUID                           |
| `sync?` | `boolean` | usage:Animation 对象是否同步 default:true |

#### Returns

[`Animation`](Gameplay.Gameplay.Animation.md)

Animation 对象

#### Defined in

Gameplay/index.d.ts:1546

---

### loadDecoration

▸ **loadDecoration**(`decorationString`, `callback`): `void`

**`Description`**

加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力

**`Effect`**

客户端

#### Parameters

| Name               | Type                                                               | Description            |
| :----------------- | :----------------------------------------------------------------- | :--------------------- |
| `decorationString` | `string`                                                           | usage: 一个挂件数据    |
| `callback`         | [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback) | usage: 挂件对象的 Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1482

---

### loadSlotAndEditorDataByGuid

▸ **loadSlotAndEditorDataByGuid**(`guid`): `void`

**`Description`**

通过 Guid 加载插槽跟角色编辑数据

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `guid` | `string` | usage:Slot Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1417

---

### loadSlotAndEditorDataByPath

▸ **loadSlotAndEditorDataByPath**(`relativePath`): `void`

**`Description`**

通过路径加载插槽跟角色编辑数据

**`Effect`**

调用端调用生效

#### Parameters

| Name           | Type     | Description    |
| :------------- | :------- | :------------- |
| `relativePath` | `string` | usage:相对路径 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1411

---

### loadStance

▸ **loadStance**(`guid`, `sync?`): [`SubStance`](Gameplay.Gameplay.SubStance.md)

**`Description`**

创建一个二级姿态对象并返回

**`Effect`**

任意端调用生效

**`Precautions`**

guid 参数传入预制姿态资源 GUID 时, 会直接创建对应姿态;
传入动画资源 GUID 时, 会创建单动画姿态模板, 并将模板的动画槽位设置为指定的动画资源(动态创建单动画姿态).
即使在服务器上调用 loadStance(), 如果 sync 参数置为 false, 也不会同步操作到客户端.

#### Parameters

| Name    | Type      | Description                                      |
| :------ | :-------- | :----------------------------------------------- |
| `guid`  | `string`  | usage: 预制姿态资源 guid 或动画资源 guid         |
| `sync?` | `boolean` | usage: 对姿态对象的操作是否自动同步 default:true |

#### Returns

[`SubStance`](Gameplay.Gameplay.SubStance.md)

二级姿态对象

#### Defined in

Gameplay/index.d.ts:1174

---

### lookAt

▸ **lookAt**(`TargetPoint`): `void`

**`Description`**

角色面朝目标点

**`Effect`**

调用端调用生效

#### Parameters

| Name          | Type                            | Description  |
| :------------ | :------------------------------ | :----------- |
| `TargetPoint` | [`Vector`](Type.Type.Vector.md) | usage:目标点 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1377

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

onDestroy 生命周期函数

**`Effect`**

自动调用

#### Returns

`void`

#### Overrides

Core.GameObject.onDestroy

#### Defined in

Gameplay/index.d.ts:858

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.onStart

#### Defined in

Core/index.d.ts:13

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

onUpdate 生命周期函数

**`Effect`**

自动调用

#### Parameters

| Name | Type     | Description        |
| :--- | :------- | :----------------- |
| `dt` | `number` | usage:函数调用间隔 |

#### Returns

`void`

#### Overrides

Core.GameObject.onUpdate

#### Defined in

Gameplay/index.d.ts:853

---

### playAnimation

▸ **playAnimation**(`guid`, `loopCount?`, `rate?`): [`Animation`](Gameplay.Gameplay.Animation.md)

**`Description`**

播放动画,同时获取到动画对象,Animation 对象接口是同步的

**`Effect`**

调用端调用生效

#### Parameters

| Name         | Type     | Description                                                          |
| :----------- | :------- | :------------------------------------------------------------------- |
| `guid`       | `string` | usage:动画 GUID                                                      |
| `loopCount?` | `number` | usage:循环播放次数, 范围 0~2147483647, 设置为 0 时无限循环 default:1 |
| `rate?`      | `number` | usage:播放速率，1 表示正常速率 default:1                             |

#### Returns

[`Animation`](Gameplay.Gameplay.Animation.md)

Animation 对象

#### Defined in

Gameplay/index.d.ts:1525

---

### playAnimationLocally

▸ **playAnimationLocally**(`AnimationGuid`, `AnimationLength?`, `LoopCount?`): `void`

**`Deprecated`**

since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(guid,false) instead.

**`Description`**

本地播放动画

**`Effect`**

客户端调用生效

#### Parameters

| Name               | Type     | Description                                                          |
| :----------------- | :------- | :------------------------------------------------------------------- |
| `AnimationGuid`    | `string` | usage:动画 GUID                                                      |
| `AnimationLength?` | `number` | usage:播放时长 default:0                                             |
| `LoopCount?`       | `number` | usage:循环播放次数, 范围 0~2147483647, 设置为 0 时无限循环 default:1 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1534

---

### ready

▸ **ready**(): `Promise`<[`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)\>

准备好的对象

#### Inherited from

Core.GameObject.ready

#### Defined in

Core/index.d.ts:126

---

### setAppearance

▸ **setAppearance**<`T`\>(`clz`): `T`

**`Description`**

设置外观修改功能

**`Effect`**

双端

#### Type parameters

| Name | Type                                                                  |
| :--- | :-------------------------------------------------------------------- |
| `T`  | extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\> |

#### Parameters

| Name  | Type                                                               | Description              |
| :---- | :----------------------------------------------------------------- | :----------------------- |
| `clz` | [`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\> | usage:外观修改接口类类型 |

#### Returns

`T`

外观修改对象

#### Defined in

Gameplay/index.d.ts:1470

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

Core.GameObject.setCollision

#### Defined in

Core/index.d.ts:475

---

### setCollisionShapeAndExtent

▸ **setCollisionShapeAndExtent**(`ShapeType`, `CollisionExtent`): `void`

**`Description`**

设置不同形状不同大小的碰撞体

**`Effect`**

调用端调用生效

#### Parameters

| Name              | Type                                                               | Description          |
| :---------------- | :----------------------------------------------------------------- | :------------------- |
| `ShapeType`       | [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md) | usage:启用的碰撞形状 |
| `CollisionExtent` | [`Vector`](Type.Type.Vector.md)                                    | usage:启用的碰撞形状 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1391

---

### setLocallyVisibility

▸ **setLocallyVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(本地生效)

**`Effect`**

客户端生效

#### Parameters

| Name                   | Type                                                     | Description                        |
| :--------------------- | :------------------------------------------------------- | :--------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                         |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:true |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1232

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setLocationAndRotation

#### Defined in

Core/index.d.ts:387

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeLocation

#### Defined in

Core/index.d.ts:328

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeRotation

#### Defined in

Core/index.d.ts:354

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeScale

#### Defined in

Core/index.d.ts:380

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.setTransform

#### Defined in

Core/index.d.ts:229

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(自动同步)

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                        |
| :--------------------- | :------------------------------------------------------- | :--------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                         |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:true |

#### Returns

`void`

#### Overrides

Core.GameObject.setVisibility

#### Defined in

Gameplay/index.d.ts:1222

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldLocation

#### Defined in

Core/index.d.ts:253

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldRotation

#### Defined in

Core/index.d.ts:278

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldScale

#### Defined in

Core/index.d.ts:302

---

### stopAnimation

▸ **stopAnimation**(`InAnimationGuid`): `void`

**`Deprecated`**

since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"

**`Description`**

停止播放动画

**`Effect`**

服务端生效

#### Parameters

| Name              | Type     | Description                 |
| :---------------- | :------- | :-------------------------- |
| `InAnimationGuid` | `string` | usage:停止播放的动画的 Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1553

---

### stopStance

▸ **stopStance**(`sync?`): `void`

**`Description`**

停止任何正在播放的姿态

**`Effect`**

可选同步

**`Precautions`**

当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态. 对单端对象操作时需要把它置为 false.

#### Parameters

| Name    | Type      | Description                      |
| :------ | :-------- | :------------------------------- |
| `sync?` | `boolean` | usage: 是否自动同步 default:true |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1181

---

### swimmingDown

▸ **swimmingDown**(`speed`): `void`

**`Description`**

水中下潜

**`Effect`**

双端

#### Parameters

| Name    | Type     | Description                                       |
| :------ | :------- | :------------------------------------------------ |
| `speed` | `number` | usage:下潜速度不能超过 MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1459

---

### swimmingUp

▸ **swimmingUp**(`speed`): `void`

**`Description`**

水中上浮

**`Effect`**

双端

#### Parameters

| Name    | Type     | Description                                       |
| :------ | :------- | :------------------------------------------------ |
| `speed` | `number` | usage:上浮速度不能超过 MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1453

---

### switchToFlying

▸ **switchToFlying**(): `void`

**`Description`**

切换为飞行状态

**`Effect`**

调用端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1240

---

### switchToWalking

▸ **switchToWalking**(): `void`

**`Description`**

切换为行走状态

**`Effect`**

调用端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1245

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

#### Inherited from

Core.GameObject.asyncFind

#### Defined in

Core/index.d.ts:165

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

#### Inherited from

Core.GameObject.asyncSpawnGameObject

#### Defined in

Core/index.d.ts:142

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

#### Inherited from

Core.GameObject.find

#### Defined in

Core/index.d.ts:157

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.findGameObjectByTag

#### Defined in

Core/index.d.ts:588

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

Core.GameObject.getGameObjectByName

#### Defined in

Core/index.d.ts:527

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

#### Inherited from

Core.GameObject.getGameObjectsByName

#### Defined in

Core/index.d.ts:520

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject

#### Inherited from

Core.GameObject.spawnGameObject

#### Defined in

Core/index.d.ts:134
