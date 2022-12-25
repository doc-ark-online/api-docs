[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Character

# Class: Character

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Character

**`Author`**

songcheng.hao

**`Description`**

角色类承载与技能相关功能

**`Network Status`**

usage:双端

## Hierarchy

- [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)

  ↳ **`Character`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Character.md#constructor)

### Properties

- [onLoadAppearanceDataAllCompleted](Gameplay.Gameplay.Character.md#onloadappearancedataallcompleted)
- [onMeshChanged](Gameplay.Gameplay.Character.md#onmeshchanged)
- [onMovementStateChanged](Gameplay.Gameplay.Character.md#onmovementstatechanged)
- [onSetAppearanceDataCompleted](Gameplay.Gameplay.Character.md#onsetappearancedatacompleted)
- [onTextureChanged](Gameplay.Gameplay.Character.md#ontexturechanged)
- [player](Gameplay.Gameplay.Character.md#player)

### Accessors

- [airControl](Gameplay.Gameplay.Character.md#aircontrol)
- [airControlBoostMultiplier](Gameplay.Gameplay.Character.md#aircontrolboostmultiplier)
- [airControlBoostVelocityThreshold](Gameplay.Gameplay.Character.md#aircontrolboostvelocitythreshold)
- [animationMode](Gameplay.Gameplay.Character.md#animationmode)
- [animationStance](Gameplay.Gameplay.Character.md#animationstance)
- [appearance](Gameplay.Gameplay.Character.md#appearance)
- [baseShadowLocationOffset](Gameplay.Gameplay.Character.md#baseshadowlocationoffset)
- [baseShadowMaxVisibleHeight](Gameplay.Gameplay.Character.md#baseshadowmaxvisibleheight)
- [baseShadowScale](Gameplay.Gameplay.Character.md#baseshadowscale)
- [basicStance](Gameplay.Gameplay.Character.md#basicstance)
- [basicStanceAimOffsetEnable](Gameplay.Gameplay.Character.md#basicstanceaimoffsetenable)
- [brakingDecelerationFalling](Gameplay.Gameplay.Character.md#brakingdecelerationfalling)
- [brakingDecelerationFlying](Gameplay.Gameplay.Character.md#brakingdecelerationflying)
- [brakingDecelerationSwimming](Gameplay.Gameplay.Character.md#brakingdecelerationswimming)
- [brakingDecelerationWalking](Gameplay.Gameplay.Character.md#brakingdecelerationwalking)
- [cameraSystem](Gameplay.Gameplay.Character.md#camerasystem)
- [canSetAppearanceData](Gameplay.Gameplay.Character.md#cansetappearancedata)
- [canStepUpOn](Gameplay.Gameplay.Character.md#canstepupon)
- [capsuleHalfHeight](Gameplay.Gameplay.Character.md#capsulehalfheight)
- [capsuleRadius](Gameplay.Gameplay.Character.md#capsuleradius)
- [characterName](Gameplay.Gameplay.Character.md#charactername)
- [collisionEnable](Gameplay.Gameplay.Character.md#collisionenable)
- [collisionExtent](Gameplay.Gameplay.Character.md#collisionextent)
- [collisionShape](Gameplay.Gameplay.Character.md#collisionshape)
- [collisionWithOtherCharacterEnable](Gameplay.Gameplay.Character.md#collisionwithothercharacterenable)
- [crouchEnable](Gameplay.Gameplay.Character.md#crouchenable)
- [crouchedHeight](Gameplay.Gameplay.Character.md#crouchedheight)
- [forwardVector](Gameplay.Gameplay.Character.md#forwardvector)
- [gravityScale](Gameplay.Gameplay.Character.md#gravityscale)
- [groundFriction](Gameplay.Gameplay.Character.md#groundfriction)
- [guid](Gameplay.Gameplay.Character.md#guid)
- [headUIVisible](Gameplay.Gameplay.Character.md#headuivisible)
- [headUIVisibleRange](Gameplay.Gameplay.Character.md#headuivisiblerange)
- [isCrouching](Gameplay.Gameplay.Character.md#iscrouching)
- [isJumping](Gameplay.Gameplay.Character.md#isjumping)
- [isMoving](Gameplay.Gameplay.Character.md#ismoving)
- [jumpEnable](Gameplay.Gameplay.Character.md#jumpenable)
- [jumpMaxCount](Gameplay.Gameplay.Character.md#jumpmaxcount)
- [jumpingOutOfWaterEnable](Gameplay.Gameplay.Character.md#jumpingoutofwaterenable)
- [locallyVisible](Gameplay.Gameplay.Character.md#locallyvisible)
- [lockStatus](Gameplay.Gameplay.Character.md#lockstatus)
- [maxAcceleration](Gameplay.Gameplay.Character.md#maxacceleration)
- [maxFallingSpeed](Gameplay.Gameplay.Character.md#maxfallingspeed)
- [maxFlySpeed](Gameplay.Gameplay.Character.md#maxflyspeed)
- [maxJumpHeight](Gameplay.Gameplay.Character.md#maxjumpheight)
- [maxStepHeight](Gameplay.Gameplay.Character.md#maxstepheight)
- [maxSwimSpeed](Gameplay.Gameplay.Character.md#maxswimspeed)
- [maxWalkSpeed](Gameplay.Gameplay.Character.md#maxwalkspeed)
- [maxWalkSpeedCrouched](Gameplay.Gameplay.Character.md#maxwalkspeedcrouched)
- [moveEnable](Gameplay.Gameplay.Character.md#moveenable)
- [moveFacingDirection](Gameplay.Gameplay.Character.md#movefacingdirection)
- [movementAxisDirection](Gameplay.Gameplay.Character.md#movementaxisdirection)
- [movementDirection](Gameplay.Gameplay.Character.md#movementdirection)
- [movementState](Gameplay.Gameplay.Character.md#movementstate)
- [name](Gameplay.Gameplay.Character.md#name)
- [netStatus](Gameplay.Gameplay.Character.md#netstatus)
- [onSkill1Triggered](Gameplay.Gameplay.Character.md#onskill1triggered)
- [onSkill2Triggered](Gameplay.Gameplay.Character.md#onskill2triggered)
- [onSkill3Triggered](Gameplay.Gameplay.Character.md#onskill3triggered)
- [onSkill4Triggered](Gameplay.Gameplay.Character.md#onskill4triggered)
- [onSkill5Triggered](Gameplay.Gameplay.Character.md#onskill5triggered)
- [outOfWaterZ](Gameplay.Gameplay.Character.md#outofwaterz)
- [parent](Gameplay.Gameplay.Character.md#parent)
- [ragdollEnable](Gameplay.Gameplay.Character.md#ragdollenable)
- [relativeLocation](Gameplay.Gameplay.Character.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.Character.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.Character.md#relativescale)
- [rightVector](Gameplay.Gameplay.Character.md#rightvector)
- [rotateRate](Gameplay.Gameplay.Character.md#rotaterate)
- [scale](Gameplay.Gameplay.Character.md#scale)
- [separateBrakingFrictionEnable](Gameplay.Gameplay.Character.md#separatebrakingfrictionenable)
- [staticStatus](Gameplay.Gameplay.Character.md#staticstatus)
- [tag](Gameplay.Gameplay.Character.md#tag)
- [transform](Gameplay.Gameplay.Character.md#transform)
- [upVector](Gameplay.Gameplay.Character.md#upvector)
- [useUpdate](Gameplay.Gameplay.Character.md#useupdate)
- [usedCapsuleCorrection](Gameplay.Gameplay.Character.md#usedcapsulecorrection)
- [velocity](Gameplay.Gameplay.Character.md#velocity)
- [visible](Gameplay.Gameplay.Character.md#visible)
- [walkableFloorAngle](Gameplay.Gameplay.Character.md#walkablefloorangle)
- [worldLocation](Gameplay.Gameplay.Character.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.Character.md#worldrotation)
- [worldScale](Gameplay.Gameplay.Character.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.Character.md#adddestroycallback)
- [addImpulse](Gameplay.Gameplay.Character.md#addimpulse)
- [addMoveInput](Gameplay.Gameplay.Character.md#addmoveinput)
- [appearanceReady](Gameplay.Gameplay.Character.md#appearanceready)
- [asyncGetScriptByName](Gameplay.Gameplay.Character.md#asyncgetscriptbyname)
- [attach](Gameplay.Gameplay.Character.md#attach)
- [attachToGameObject](Gameplay.Gameplay.Character.md#attachtogameobject)
- [clearDecorations](Gameplay.Gameplay.Character.md#cleardecorations)
- [clearOneDecoration](Gameplay.Gameplay.Character.md#clearonedecoration)
- [clone](Gameplay.Gameplay.Character.md#clone)
- [crouch](Gameplay.Gameplay.Character.md#crouch)
- [deleteDestroyCallback](Gameplay.Gameplay.Character.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.Character.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.Character.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.Character.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.Character.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.Character.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.Character.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.Character.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.Character.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.Character.md#getcollision)
- [getControlRotator](Gameplay.Gameplay.Character.md#getcontrolrotator)
- [getDecorations](Gameplay.Gameplay.Character.md#getdecorations)
- [getForwardVector](Gameplay.Gameplay.Character.md#getforwardvector)
- [getHeadUIWidget](Gameplay.Gameplay.Character.md#getheaduiwidget)
- [getRelativeLocation](Gameplay.Gameplay.Character.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.Character.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.Character.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.Character.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.Character.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.Character.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.Character.md#getscripts)
- [getSlotName](Gameplay.Gameplay.Character.md#getslotname)
- [getSourceAssetGuid](Gameplay.Gameplay.Character.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.Character.md#gettransform)
- [getUpVector](Gameplay.Gameplay.Character.md#getupvector)
- [getVisibility](Gameplay.Gameplay.Character.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.Character.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.Character.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.Character.md#getworldscale)
- [isPlayingAnimation](Gameplay.Gameplay.Character.md#isplayinganimation)
- [isRunningClient](Gameplay.Gameplay.Character.md#isrunningclient)
- [jump](Gameplay.Gameplay.Character.md#jump)
- [loadAnimation](Gameplay.Gameplay.Character.md#loadanimation)
- [loadDecoration](Gameplay.Gameplay.Character.md#loaddecoration)
- [loadSlotAndEditorDataByGuid](Gameplay.Gameplay.Character.md#loadslotandeditordatabyguid)
- [loadSlotAndEditorDataByPath](Gameplay.Gameplay.Character.md#loadslotandeditordatabypath)
- [loadStance](Gameplay.Gameplay.Character.md#loadstance)
- [lookAt](Gameplay.Gameplay.Character.md#lookat)
- [onDestroy](Gameplay.Gameplay.Character.md#ondestroy)
- [onStart](Gameplay.Gameplay.Character.md#onstart)
- [onUpdate](Gameplay.Gameplay.Character.md#onupdate)
- [playAnimation](Gameplay.Gameplay.Character.md#playanimation)
- [playAnimationLocally](Gameplay.Gameplay.Character.md#playanimationlocally)
- [ready](Gameplay.Gameplay.Character.md#ready)
- [setAppearance](Gameplay.Gameplay.Character.md#setappearance)
- [setCollision](Gameplay.Gameplay.Character.md#setcollision)
- [setCollisionShapeAndExtent](Gameplay.Gameplay.Character.md#setcollisionshapeandextent)
- [setLocallyVisibility](Gameplay.Gameplay.Character.md#setlocallyvisibility)
- [setLocationAndRotation](Gameplay.Gameplay.Character.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.Character.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.Character.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.Character.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.Character.md#settransform)
- [setVisibility](Gameplay.Gameplay.Character.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.Character.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.Character.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.Character.md#setworldscale)
- [stopAnimation](Gameplay.Gameplay.Character.md#stopanimation)
- [stopStance](Gameplay.Gameplay.Character.md#stopstance)
- [swimmingDown](Gameplay.Gameplay.Character.md#swimmingdown)
- [swimmingUp](Gameplay.Gameplay.Character.md#swimmingup)
- [switchToFlying](Gameplay.Gameplay.Character.md#switchtoflying)
- [switchToWalking](Gameplay.Gameplay.Character.md#switchtowalking)
- [asyncFind](Gameplay.Gameplay.Character.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.Character.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.Character.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.Character.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.Character.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.Character.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.Character.md#spawngameobject)

## Constructors

### constructor

• **new Character**()

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[constructor](Gameplay.Gameplay.CharacterBase.md#constructor)

## Properties

### onLoadAppearanceDataAllCompleted

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onLoadAppearanceDataAllCompleted](Gameplay.Gameplay.CharacterBase.md#onloadappearancedataallcompleted)

#### Defined in

Gameplay/index.d.ts:841

---

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onMeshChanged](Gameplay.Gameplay.CharacterBase.md#onmeshchanged)

#### Defined in

Gameplay/index.d.ts:829

---

### onMovementStateChanged

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

**`Description`**

移动状态切换时的回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onMovementStateChanged](Gameplay.Gameplay.CharacterBase.md#onmovementstatechanged)

#### Defined in

Gameplay/index.d.ts:821

---

### onSetAppearanceDataCompleted

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑 API 成功后的回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onSetAppearanceDataCompleted](Gameplay.Gameplay.CharacterBase.md#onsetappearancedatacompleted)

#### Defined in

Gameplay/index.d.ts:837

---

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onTextureChanged](Gameplay.Gameplay.CharacterBase.md#ontexturechanged)

#### Defined in

Gameplay/index.d.ts:833

---

### player

• **player**: [`Player`](Gameplay.Gameplay.Player.md)

**`Description`**

玩家对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[player](Gameplay.Gameplay.CharacterBase.md#player)

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

#### Inherited from

CharacterBase.airControl

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

#### Inherited from

CharacterBase.airControl

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

#### Inherited from

CharacterBase.airControlBoostMultiplier

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

#### Inherited from

CharacterBase.airControlBoostMultiplier

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

#### Inherited from

CharacterBase.airControlBoostVelocityThreshold

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

#### Inherited from

CharacterBase.airControlBoostVelocityThreshold

#### Defined in

Gameplay/index.d.ts:1100

---

### animationMode

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

**`Description`**

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

#### Inherited from

CharacterBase.animationMode

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

#### Inherited from

CharacterBase.animationMode

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

#### Inherited from

CharacterBase.animationStance

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

#### Inherited from

CharacterBase.animationStance

#### Defined in

Gameplay/index.d.ts:1163

---

### appearance

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

**`Description`**

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

#### Inherited from

CharacterBase.appearance

#### Defined in

Gameplay/index.d.ts:1463

---

### baseShadowLocationOffset

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Inherited from

CharacterBase.baseShadowLocationOffset

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

#### Inherited from

CharacterBase.baseShadowLocationOffset

#### Defined in

Gameplay/index.d.ts:1355

---

### baseShadowMaxVisibleHeight

• `get` **baseShadowMaxVisibleHeight**(): `number`

**`Description`**

模拟阴影可见的最大离地高度

#### Returns

`number`

#### Inherited from

CharacterBase.baseShadowMaxVisibleHeight

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

#### Inherited from

CharacterBase.baseShadowMaxVisibleHeight

#### Defined in

Gameplay/index.d.ts:1363

---

### baseShadowScale

• `get` **baseShadowScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Inherited from

CharacterBase.baseShadowScale

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

#### Inherited from

CharacterBase.baseShadowScale

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

#### Inherited from

CharacterBase.basicStance

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

#### Inherited from

CharacterBase.basicStance

#### Defined in

Gameplay/index.d.ts:1153

---

### basicStanceAimOffsetEnable

• `get` **basicStanceAimOffsetEnable**(): `boolean`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

#### Inherited from

CharacterBase.basicStanceAimOffsetEnable

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

#### Inherited from

CharacterBase.basicStanceAimOffsetEnable

#### Defined in

Gameplay/index.d.ts:1325

---

### brakingDecelerationFalling

• `get` **brakingDecelerationFalling**(): `number`

**`Description`**

下落制动速率

#### Returns

`number`

#### Inherited from

CharacterBase.brakingDecelerationFalling

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

#### Inherited from

CharacterBase.brakingDecelerationFalling

#### Defined in

Gameplay/index.d.ts:1135

---

### brakingDecelerationFlying

• `get` **brakingDecelerationFlying**(): `number`

**`Description`**

飞行制动速率

#### Returns

`number`

#### Inherited from

CharacterBase.brakingDecelerationFlying

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

#### Inherited from

CharacterBase.brakingDecelerationFlying

#### Defined in

Gameplay/index.d.ts:1119

---

### brakingDecelerationSwimming

• `get` **brakingDecelerationSwimming**(): `number`

**`Description`**

游泳制动速率

#### Returns

`number`

#### Inherited from

CharacterBase.brakingDecelerationSwimming

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

#### Inherited from

CharacterBase.brakingDecelerationSwimming

#### Defined in

Gameplay/index.d.ts:1143

---

### brakingDecelerationWalking

• `get` **brakingDecelerationWalking**(): `number`

**`Description`**

行走制动速率

#### Returns

`number`

#### Inherited from

CharacterBase.brakingDecelerationWalking

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

#### Inherited from

CharacterBase.brakingDecelerationWalking

#### Defined in

Gameplay/index.d.ts:1127

---

### cameraSystem

• `get` **cameraSystem**(): [`CameraSystem`](Gameplay.Gameplay.CameraSystem.md)

**`Description`**

获得摄像机系统

#### Returns

[`CameraSystem`](Gameplay.Gameplay.CameraSystem.md)

#### Defined in

Gameplay/index.d.ts:625

---

### canSetAppearanceData

• `get` **canSetAppearanceData**(): `boolean`

**`Description`**

是否可以设置角色形象数据

#### Returns

`boolean`

#### Inherited from

CharacterBase.canSetAppearanceData

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

#### Inherited from

CharacterBase.canStepUpOn

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

#### Inherited from

CharacterBase.canStepUpOn

#### Defined in

Gameplay/index.d.ts:1405

---

### capsuleHalfHeight

• `get` **capsuleHalfHeight**(): `number`

**`Description`**

胶囊体半高

#### Returns

`number`

#### Inherited from

CharacterBase.capsuleHalfHeight

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

#### Inherited from

CharacterBase.capsuleHalfHeight

#### Defined in

Gameplay/index.d.ts:1062

---

### capsuleRadius

• `get` **capsuleRadius**(): `number`

**`Description`**

胶囊体半径

#### Returns

`number`

#### Inherited from

CharacterBase.capsuleRadius

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

#### Inherited from

CharacterBase.capsuleRadius

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

#### Inherited from

CharacterBase.characterName

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

#### Inherited from

CharacterBase.characterName

#### Defined in

Gameplay/index.d.ts:872

---

### collisionEnable

• `get` **collisionEnable**(): `boolean`

**`Description`**

是否开启碰撞

#### Returns

`boolean`

#### Inherited from

CharacterBase.collisionEnable

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

#### Inherited from

CharacterBase.collisionEnable

#### Defined in

Gameplay/index.d.ts:1317

---

### collisionExtent

• `get` **collisionExtent**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞形状的大小

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

CharacterBase.collisionExtent

#### Defined in

Gameplay/index.d.ts:1502

---

### collisionShape

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

**`Description`**

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

#### Inherited from

CharacterBase.collisionShape

#### Defined in

Gameplay/index.d.ts:1498

---

### collisionWithOtherCharacterEnable

• `get` **collisionWithOtherCharacterEnable**(): `boolean`

**`Description`**

能否与其他角色发生碰撞

#### Returns

`boolean`

#### Inherited from

CharacterBase.collisionWithOtherCharacterEnable

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

#### Inherited from

CharacterBase.collisionWithOtherCharacterEnable

#### Defined in

Gameplay/index.d.ts:1431

---

### crouchEnable

• `get` **crouchEnable**(): `boolean`

**`Description`**

启用/禁用下蹲能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.crouchEnable

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

#### Inherited from

CharacterBase.crouchEnable

#### Defined in

Gameplay/index.d.ts:924

---

### crouchedHeight

• `get` **crouchedHeight**(): `number`

**`Description`**

下蹲时胶囊体的高度

#### Returns

`number`

#### Inherited from

CharacterBase.crouchedHeight

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

#### Inherited from

CharacterBase.crouchedHeight

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

CharacterBase.forwardVector

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

#### Inherited from

CharacterBase.gravityScale

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

#### Inherited from

CharacterBase.gravityScale

#### Defined in

Gameplay/index.d.ts:1111

---

### groundFriction

• `get` **groundFriction**(): `number`

**`Description`**

地面摩檫力

#### Returns

`number`

#### Inherited from

CharacterBase.groundFriction

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

#### Inherited from

CharacterBase.groundFriction

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

CharacterBase.guid

#### Defined in

Core/index.d.ts:39

---

### headUIVisible

• `get` **headUIVisible**(): `boolean`

**`Description`**

头顶 UI 是否可见

#### Returns

`boolean`

#### Inherited from

CharacterBase.headUIVisible

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

#### Inherited from

CharacterBase.headUIVisible

#### Defined in

Gameplay/index.d.ts:1339

---

### headUIVisibleRange

• `get` **headUIVisibleRange**(): `number`

**`Description`**

头顶 UI 可见距离

#### Returns

`number`

#### Inherited from

CharacterBase.headUIVisibleRange

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

#### Inherited from

CharacterBase.headUIVisibleRange

#### Defined in

Gameplay/index.d.ts:1371

---

### isCrouching

• `get` **isCrouching**(): `boolean`

**`Description`**

是否处于下蹲状态

#### Returns

`boolean`

#### Inherited from

CharacterBase.isCrouching

#### Defined in

Gameplay/index.d.ts:1185

---

### isJumping

• `get` **isJumping**(): `boolean`

**`Description`**

是否正在跳跃

#### Returns

`boolean`

#### Inherited from

CharacterBase.isJumping

#### Defined in

Gameplay/index.d.ts:1249

---

### isMoving

• `get` **isMoving**(): `boolean`

**`Description`**

是否正在移动

#### Returns

`boolean`

#### Inherited from

CharacterBase.isMoving

#### Defined in

Gameplay/index.d.ts:1253

---

### jumpEnable

• `get` **jumpEnable**(): `boolean`

**`Description`**

启用/禁用跳跃能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.jumpEnable

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

#### Inherited from

CharacterBase.jumpEnable

#### Defined in

Gameplay/index.d.ts:892

---

### jumpMaxCount

• `get` **jumpMaxCount**(): `number`

**`Description`**

最大可跳跃次数

#### Returns

`number`

#### Inherited from

CharacterBase.jumpMaxCount

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

#### Inherited from

CharacterBase.jumpMaxCount

#### Defined in

Gameplay/index.d.ts:1011

---

### jumpingOutOfWaterEnable

• `get` **jumpingOutOfWaterEnable**(): `boolean`

**`Description`**

是否可以跳出水面

#### Returns

`boolean`

#### Inherited from

CharacterBase.jumpingOutOfWaterEnable

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

#### Inherited from

CharacterBase.jumpingOutOfWaterEnable

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

#### Inherited from

CharacterBase.locallyVisible

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

#### Inherited from

CharacterBase.locallyVisible

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

CharacterBase.lockStatus

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

CharacterBase.lockStatus

#### Defined in

Core/index.d.ts:451

---

### maxAcceleration

• `get` **maxAcceleration**(): `number`

**`Description`**

最大加速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxAcceleration

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

#### Inherited from

CharacterBase.maxAcceleration

#### Defined in

Gameplay/index.d.ts:953

---

### maxFallingSpeed

• `get` **maxFallingSpeed**(): `number`

**`Description`**

最大下落速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxFallingSpeed

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

#### Inherited from

CharacterBase.maxFallingSpeed

#### Defined in

Gameplay/index.d.ts:932

---

### maxFlySpeed

• `get` **maxFlySpeed**(): `number`

**`Description`**

最大飞行速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxFlySpeed

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

#### Inherited from

CharacterBase.maxFlySpeed

#### Defined in

Gameplay/index.d.ts:908

---

### maxJumpHeight

• `get` **maxJumpHeight**(): `number`

**`Description`**

最大跳跃高度

#### Returns

`number`

#### Inherited from

CharacterBase.maxJumpHeight

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

#### Inherited from

CharacterBase.maxJumpHeight

#### Defined in

Gameplay/index.d.ts:1003

---

### maxStepHeight

• `get` **maxStepHeight**(): `number`

**`Description`**

获取角色最大可跨越高度

#### Returns

`number`

#### Inherited from

CharacterBase.maxStepHeight

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

#### Inherited from

CharacterBase.maxStepHeight

#### Defined in

Gameplay/index.d.ts:961

---

### maxSwimSpeed

• `get` **maxSwimSpeed**(): `number`

**`Description`**

最大游泳速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxSwimSpeed

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

#### Inherited from

CharacterBase.maxSwimSpeed

#### Defined in

Gameplay/index.d.ts:916

---

### maxWalkSpeed

• `get` **maxWalkSpeed**(): `number`

**`Description`**

地面最大速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxWalkSpeed

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

#### Inherited from

CharacterBase.maxWalkSpeed

#### Defined in

Gameplay/index.d.ts:900

---

### maxWalkSpeedCrouched

• `get` **maxWalkSpeedCrouched**(): `number`

**`Description`**

地面蹲伏行走时的最大移动速度

#### Returns

`number`

#### Inherited from

CharacterBase.maxWalkSpeedCrouched

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

#### Inherited from

CharacterBase.maxWalkSpeedCrouched

#### Defined in

Gameplay/index.d.ts:940

---

### moveEnable

• `get` **moveEnable**(): `boolean`

**`Description`**

启用/禁用移动能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.moveEnable

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

#### Inherited from

CharacterBase.moveEnable

#### Defined in

Gameplay/index.d.ts:884

---

### moveFacingDirection

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

**`Description`**

运动面朝方向

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

#### Inherited from

CharacterBase.moveFacingDirection

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

#### Inherited from

CharacterBase.moveFacingDirection

#### Defined in

Gameplay/index.d.ts:1035

---

### movementAxisDirection

• `get` **movementAxisDirection**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

CharacterBase.movementAxisDirection

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

#### Inherited from

CharacterBase.movementAxisDirection

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

#### Inherited from

CharacterBase.movementDirection

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

#### Inherited from

CharacterBase.movementDirection

#### Defined in

Gameplay/index.d.ts:1046

---

### movementState

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

**`Description`**

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

#### Inherited from

CharacterBase.movementState

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

CharacterBase.name

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

CharacterBase.name

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

CharacterBase.netStatus

#### Defined in

Core/index.d.ts:513

---

### onSkill1Triggered

• `get` **onSkill1Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能 1 触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:600

---

### onSkill2Triggered

• `get` **onSkill2Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能 2 触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:604

---

### onSkill3Triggered

• `get` **onSkill3Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能 3 触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:608

---

### onSkill4Triggered

• `get` **onSkill4Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能 4 触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:612

---

### onSkill5Triggered

• `get` **onSkill5Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能 5 触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:616

---

### outOfWaterZ

• `get` **outOfWaterZ**(): `number`

**`Description`**

出水时 Z 轴方向上的速度

#### Returns

`number`

#### Inherited from

CharacterBase.outOfWaterZ

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

#### Inherited from

CharacterBase.outOfWaterZ

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

CharacterBase.parent

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

CharacterBase.parent

#### Defined in

Core/index.d.ts:467

---

### ragdollEnable

• `get` **ragdollEnable**(): `boolean`

**`Description`**

启用/禁用布娃娃状态

#### Returns

`boolean`

#### Inherited from

CharacterBase.ragdollEnable

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

#### Inherited from

CharacterBase.ragdollEnable

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

CharacterBase.relativeLocation

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

CharacterBase.relativeLocation

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

CharacterBase.relativeRotation

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

CharacterBase.relativeRotation

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

CharacterBase.relativeScale

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

CharacterBase.relativeScale

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

CharacterBase.rightVector

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

#### Inherited from

CharacterBase.rotateRate

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

#### Inherited from

CharacterBase.rotateRate

#### Defined in

Gameplay/index.d.ts:979

---

### scale

• `get` **scale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

角色胶囊体的缩放, 自动同步

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

CharacterBase.scale

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

#### Inherited from

CharacterBase.scale

#### Defined in

Gameplay/index.d.ts:1309

---

### separateBrakingFrictionEnable

• `get` **separateBrakingFrictionEnable**(): `boolean`

**`Description`**

使用单独制动摩擦

#### Returns

`boolean`

#### Inherited from

CharacterBase.separateBrakingFrictionEnable

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

#### Inherited from

CharacterBase.separateBrakingFrictionEnable

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

CharacterBase.staticStatus

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

CharacterBase.tag

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

CharacterBase.tag

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

CharacterBase.transform

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

CharacterBase.transform

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

CharacterBase.upVector

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

CharacterBase.useUpdate

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

CharacterBase.useUpdate

#### Defined in

Core/index.d.ts:436

---

### usedCapsuleCorrection

• `get` **usedCapsuleCorrection**(): `boolean`

**`Description`**

使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Returns

`boolean`

#### Inherited from

CharacterBase.usedCapsuleCorrection

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

#### Inherited from

CharacterBase.usedCapsuleCorrection

#### Defined in

Gameplay/index.d.ts:1054

---

### velocity

• `get` **velocity**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前移动速度

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

CharacterBase.velocity

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

#### Inherited from

CharacterBase.visible

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

#### Inherited from

CharacterBase.visible

#### Defined in

Gameplay/index.d.ts:1199

---

### walkableFloorAngle

• `get` **walkableFloorAngle**(): `number`

**`Description`**

可行走的最大角度

#### Returns

`number`

#### Inherited from

CharacterBase.walkableFloorAngle

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

#### Inherited from

CharacterBase.walkableFloorAngle

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

CharacterBase.worldLocation

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

CharacterBase.worldLocation

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

CharacterBase.worldRotation

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

CharacterBase.worldRotation

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

CharacterBase.worldScale

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

CharacterBase.worldScale

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addDestroyCallback](Gameplay.Gameplay.CharacterBase.md#adddestroycallback)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addImpulse](Gameplay.Gameplay.CharacterBase.md#addimpulse)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addMoveInput](Gameplay.Gameplay.CharacterBase.md#addmoveinput)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[appearanceReady](Gameplay.Gameplay.CharacterBase.md#appearanceready)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[asyncGetScriptByName](Gameplay.Gameplay.CharacterBase.md#asyncgetscriptbyname)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[attach](Gameplay.Gameplay.CharacterBase.md#attach)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[attachToGameObject](Gameplay.Gameplay.CharacterBase.md#attachtogameobject)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[clearDecorations](Gameplay.Gameplay.CharacterBase.md#cleardecorations)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[clearOneDecoration](Gameplay.Gameplay.CharacterBase.md#clearonedecoration)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[clone](Gameplay.Gameplay.CharacterBase.md#clone)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[crouch](Gameplay.Gameplay.CharacterBase.md#crouch)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[deleteDestroyCallback](Gameplay.Gameplay.CharacterBase.md#deletedestroycallback)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[destroy](Gameplay.Gameplay.CharacterBase.md#destroy)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[detachFromGameObject](Gameplay.Gameplay.CharacterBase.md#detachfromgameobject)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getBoundingBoxSize](Gameplay.Gameplay.CharacterBase.md#getboundingboxsize)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getBounds](Gameplay.Gameplay.CharacterBase.md#getbounds)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildByGuid](Gameplay.Gameplay.CharacterBase.md#getchildbyguid)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildByName](Gameplay.Gameplay.CharacterBase.md#getchildbyname)

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

Array<GameObject>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildren](Gameplay.Gameplay.CharacterBase.md#getchildren)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildrenBoxCenter](Gameplay.Gameplay.CharacterBase.md#getchildrenboxcenter)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getCollision](Gameplay.Gameplay.CharacterBase.md#getcollision)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getControlRotator](Gameplay.Gameplay.CharacterBase.md#getcontrolrotator)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getDecorations](Gameplay.Gameplay.CharacterBase.md#getdecorations)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getForwardVector](Gameplay.Gameplay.CharacterBase.md#getforwardvector)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getHeadUIWidget](Gameplay.Gameplay.CharacterBase.md#getheaduiwidget)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getRelativeLocation](Gameplay.Gameplay.CharacterBase.md#getrelativelocation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getRelativeRotation](Gameplay.Gameplay.CharacterBase.md#getrelativerotation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getRelativeScale](Gameplay.Gameplay.CharacterBase.md#getrelativescale)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getRightVector](Gameplay.Gameplay.CharacterBase.md#getrightvector)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getScriptByGuid](Gameplay.Gameplay.CharacterBase.md#getscriptbyguid)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getScriptByName](Gameplay.Gameplay.CharacterBase.md#getscriptbyname)

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

Array<Script>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getScripts](Gameplay.Gameplay.CharacterBase.md#getscripts)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getSlotName](Gameplay.Gameplay.CharacterBase.md#getslotname)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getSourceAssetGuid](Gameplay.Gameplay.CharacterBase.md#getsourceassetguid)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getTransform](Gameplay.Gameplay.CharacterBase.md#gettransform)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getUpVector](Gameplay.Gameplay.CharacterBase.md#getupvector)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getVisibility](Gameplay.Gameplay.CharacterBase.md#getvisibility)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getWorldLocation](Gameplay.Gameplay.CharacterBase.md#getworldlocation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getWorldRotation](Gameplay.Gameplay.CharacterBase.md#getworldrotation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getWorldScale](Gameplay.Gameplay.CharacterBase.md#getworldscale)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[isPlayingAnimation](Gameplay.Gameplay.CharacterBase.md#isplayinganimation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[isRunningClient](Gameplay.Gameplay.CharacterBase.md#isrunningclient)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[jump](Gameplay.Gameplay.CharacterBase.md#jump)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadAnimation](Gameplay.Gameplay.CharacterBase.md#loadanimation)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadDecoration](Gameplay.Gameplay.CharacterBase.md#loaddecoration)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadSlotAndEditorDataByGuid](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabyguid)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadSlotAndEditorDataByPath](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabypath)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadStance](Gameplay.Gameplay.CharacterBase.md#loadstance)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[lookAt](Gameplay.Gameplay.CharacterBase.md#lookat)

#### Defined in

Gameplay/index.d.ts:1377

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

销毁时 删除玩家

**`Effect`**

自动调用

#### Returns

`void`

#### Overrides

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onDestroy](Gameplay.Gameplay.CharacterBase.md#ondestroy)

#### Defined in

Gameplay/index.d.ts:621

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onStart](Gameplay.Gameplay.CharacterBase.md#onstart)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onUpdate](Gameplay.Gameplay.CharacterBase.md#onupdate)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[playAnimation](Gameplay.Gameplay.CharacterBase.md#playanimation)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[playAnimationLocally](Gameplay.Gameplay.CharacterBase.md#playanimationlocally)

#### Defined in

Gameplay/index.d.ts:1534

---

### ready

▸ **ready**(): `Promise`<[`Character`](Gameplay.Gameplay.Character.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`Character`](Gameplay.Gameplay.Character.md)\>

准备好的对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[ready](Gameplay.Gameplay.CharacterBase.md#ready)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setAppearance](Gameplay.Gameplay.CharacterBase.md#setappearance)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setCollision](Gameplay.Gameplay.CharacterBase.md#setcollision)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setCollisionShapeAndExtent](Gameplay.Gameplay.CharacterBase.md#setcollisionshapeandextent)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setLocallyVisibility](Gameplay.Gameplay.CharacterBase.md#setlocallyvisibility)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setLocationAndRotation](Gameplay.Gameplay.CharacterBase.md#setlocationandrotation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setRelativeLocation](Gameplay.Gameplay.CharacterBase.md#setrelativelocation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setRelativeRotation](Gameplay.Gameplay.CharacterBase.md#setrelativerotation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setRelativeScale](Gameplay.Gameplay.CharacterBase.md#setrelativescale)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setTransform](Gameplay.Gameplay.CharacterBase.md#settransform)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setVisibility](Gameplay.Gameplay.CharacterBase.md#setvisibility)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setWorldLocation](Gameplay.Gameplay.CharacterBase.md#setworldlocation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setWorldRotation](Gameplay.Gameplay.CharacterBase.md#setworldrotation)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setWorldScale](Gameplay.Gameplay.CharacterBase.md#setworldscale)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[stopAnimation](Gameplay.Gameplay.CharacterBase.md#stopanimation)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[stopStance](Gameplay.Gameplay.CharacterBase.md#stopstance)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[swimmingDown](Gameplay.Gameplay.CharacterBase.md#swimmingdown)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[swimmingUp](Gameplay.Gameplay.CharacterBase.md#swimmingup)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[switchToFlying](Gameplay.Gameplay.CharacterBase.md#switchtoflying)

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

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[switchToWalking](Gameplay.Gameplay.CharacterBase.md#switchtowalking)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[asyncFind](Gameplay.Gameplay.CharacterBase.md#asyncfind)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[asyncSpawnGameObject](Gameplay.Gameplay.CharacterBase.md#asyncspawngameobject)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[find](Gameplay.Gameplay.CharacterBase.md#find)

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

Array<GameObject>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[findGameObjectByTag](Gameplay.Gameplay.CharacterBase.md#findgameobjectbytag)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getGameObjectByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectbyname)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getGameObjectsByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectsbyname)

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[spawnGameObject](Gameplay.Gameplay.CharacterBase.md#spawngameobject)

#### Defined in

Core/index.d.ts:134
