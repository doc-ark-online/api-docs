[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Humanoid

# Class: Humanoid

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Humanoid

**`Author`**

宋成浩,邓洪兵

**`Description`**

人形对象 V2

**`Network Status`**

usage:双端

## Hierarchy

- [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)

  ↳ **`Humanoid`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Humanoid.md#constructor)

### Properties

- [loadAppearanceDataAllCompletedDelegate](Gameplay.Gameplay.Humanoid.md#loadappearancedataallcompleteddelegate)
- [onMeshChanged](Gameplay.Gameplay.Humanoid.md#onmeshchanged)
- [onTextureChanged](Gameplay.Gameplay.Humanoid.md#ontexturechanged)
- [player](Gameplay.Gameplay.Humanoid.md#player)
- [setAppearanceDataCompletedDelegate](Gameplay.Gameplay.Humanoid.md#setappearancedatacompleteddelegate)

### Accessors

- [airControl](Gameplay.Gameplay.Humanoid.md#aircontrol)
- [airControlBoostMultiplier](Gameplay.Gameplay.Humanoid.md#aircontrolboostmultiplier)
- [airControlBoostVelocityThreshold](Gameplay.Gameplay.Humanoid.md#aircontrolboostvelocitythreshold)
- [animationMode](Gameplay.Gameplay.Humanoid.md#animationmode)
- [animationStance](Gameplay.Gameplay.Humanoid.md#animationstance)
- [appearance](Gameplay.Gameplay.Humanoid.md#appearance)
- [baseShadowLocationOffset](Gameplay.Gameplay.Humanoid.md#baseshadowlocationoffset)
- [baseShadowMaxVisibleHeight](Gameplay.Gameplay.Humanoid.md#baseshadowmaxvisibleheight)
- [baseShadowScale](Gameplay.Gameplay.Humanoid.md#baseshadowscale)
- [basicStance](Gameplay.Gameplay.Humanoid.md#basicstance)
- [brakingDecelerationFalling](Gameplay.Gameplay.Humanoid.md#brakingdecelerationfalling)
- [brakingDecelerationFlying](Gameplay.Gameplay.Humanoid.md#brakingdecelerationflying)
- [brakingDecelerationSwimming](Gameplay.Gameplay.Humanoid.md#brakingdecelerationswimming)
- [brakingDecelerationWalking](Gameplay.Gameplay.Humanoid.md#brakingdecelerationwalking)
- [canSetAppearanceData](Gameplay.Gameplay.Humanoid.md#cansetappearancedata)
- [capsuleHalfHeight](Gameplay.Gameplay.Humanoid.md#capsulehalfheight)
- [capsuleRadius](Gameplay.Gameplay.Humanoid.md#capsuleradius)
- [characterName](Gameplay.Gameplay.Humanoid.md#charactername)
- [crouchedHeight](Gameplay.Gameplay.Humanoid.md#crouchedheight)
- [enableBasicStanceAimOffset](Gameplay.Gameplay.Humanoid.md#enablebasicstanceaimoffset)
- [enableCollision](Gameplay.Gameplay.Humanoid.md#enablecollision)
- [enableCollisionWithOtherCharacter](Gameplay.Gameplay.Humanoid.md#enablecollisionwithothercharacter)
- [enableCrouch](Gameplay.Gameplay.Humanoid.md#enablecrouch)
- [enableJump](Gameplay.Gameplay.Humanoid.md#enablejump)
- [enableJumpingOutOfWater](Gameplay.Gameplay.Humanoid.md#enablejumpingoutofwater)
- [enableMove](Gameplay.Gameplay.Humanoid.md#enablemove)
- [enableRagdoll](Gameplay.Gameplay.Humanoid.md#enableragdoll)
- [enableServerCalculate](Gameplay.Gameplay.Humanoid.md#enableservercalculate)
- [forwardVector](Gameplay.Gameplay.Humanoid.md#forwardvector)
- [gravityScale](Gameplay.Gameplay.Humanoid.md#gravityscale)
- [groundFriction](Gameplay.Gameplay.Humanoid.md#groundfriction)
- [guid](Gameplay.Gameplay.Humanoid.md#guid)
- [headUIVisibleRange](Gameplay.Gameplay.Humanoid.md#headuivisiblerange)
- [isCrouching](Gameplay.Gameplay.Humanoid.md#iscrouching)
- [isHeadUIVisible](Gameplay.Gameplay.Humanoid.md#isheaduivisible)
- [isVisible](Gameplay.Gameplay.Humanoid.md#isvisible)
- [isVisibleLocally](Gameplay.Gameplay.Humanoid.md#isvisiblelocally)
- [jumpMaxCount](Gameplay.Gameplay.Humanoid.md#jumpmaxcount)
- [lockState](Gameplay.Gameplay.Humanoid.md#lockstate)
- [maxAcceleration](Gameplay.Gameplay.Humanoid.md#maxacceleration)
- [maxFallingSpeed](Gameplay.Gameplay.Humanoid.md#maxfallingspeed)
- [maxFlySpeed](Gameplay.Gameplay.Humanoid.md#maxflyspeed)
- [maxJumpHeight](Gameplay.Gameplay.Humanoid.md#maxjumpheight)
- [maxStepHeight](Gameplay.Gameplay.Humanoid.md#maxstepheight)
- [maxSwimSpeed](Gameplay.Gameplay.Humanoid.md#maxswimspeed)
- [maxWalkSpeed](Gameplay.Gameplay.Humanoid.md#maxwalkspeed)
- [maxWalkSpeedCrouched](Gameplay.Gameplay.Humanoid.md#maxwalkspeedcrouched)
- [moveFacingDirection](Gameplay.Gameplay.Humanoid.md#movefacingdirection)
- [movementAxisDirection](Gameplay.Gameplay.Humanoid.md#movementaxisdirection)
- [movementDirection](Gameplay.Gameplay.Humanoid.md#movementdirection)
- [movementState](Gameplay.Gameplay.Humanoid.md#movementstate)
- [name](Gameplay.Gameplay.Humanoid.md#name)
- [netStatus](Gameplay.Gameplay.Humanoid.md#netstatus)
- [outOfWaterZ](Gameplay.Gameplay.Humanoid.md#outofwaterz)
- [parent](Gameplay.Gameplay.Humanoid.md#parent)
- [relativeLocation](Gameplay.Gameplay.Humanoid.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.Humanoid.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.Humanoid.md#relativescale)
- [rightVector](Gameplay.Gameplay.Humanoid.md#rightvector)
- [rotateRate](Gameplay.Gameplay.Humanoid.md#rotaterate)
- [scale](Gameplay.Gameplay.Humanoid.md#scale)
- [staticStatus](Gameplay.Gameplay.Humanoid.md#staticstatus)
- [tag](Gameplay.Gameplay.Humanoid.md#tag)
- [transform](Gameplay.Gameplay.Humanoid.md#transform)
- [upVector](Gameplay.Gameplay.Humanoid.md#upvector)
- [useSeparateBrakingFriction](Gameplay.Gameplay.Humanoid.md#useseparatebrakingfriction)
- [useUpdate](Gameplay.Gameplay.Humanoid.md#useupdate)
- [usedCapsuleCorrection](Gameplay.Gameplay.Humanoid.md#usedcapsulecorrection)
- [velocity](Gameplay.Gameplay.Humanoid.md#velocity)
- [walkableFloorAngle](Gameplay.Gameplay.Humanoid.md#walkablefloorangle)
- [worldLocation](Gameplay.Gameplay.Humanoid.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.Humanoid.md#worldrotation)
- [worldScale](Gameplay.Gameplay.Humanoid.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.Humanoid.md#adddestroycallback)
- [addImpulse](Gameplay.Gameplay.Humanoid.md#addimpulse)
- [addMoveInput](Gameplay.Gameplay.Humanoid.md#addmoveinput)
- [appearanceReady](Gameplay.Gameplay.Humanoid.md#appearanceready)
- [asyncGetScriptByName](Gameplay.Gameplay.Humanoid.md#asyncgetscriptbyname)
- [attach](Gameplay.Gameplay.Humanoid.md#attach)
- [attachToGameObject](Gameplay.Gameplay.Humanoid.md#attachtogameobject)
- [cleanDecorations](Gameplay.Gameplay.Humanoid.md#cleandecorations)
- [cleanOneDecoration](Gameplay.Gameplay.Humanoid.md#cleanonedecoration)
- [clone](Gameplay.Gameplay.Humanoid.md#clone)
- [crouch](Gameplay.Gameplay.Humanoid.md#crouch)
- [deleteDestroyCallback](Gameplay.Gameplay.Humanoid.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.Humanoid.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.Humanoid.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.Humanoid.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.Humanoid.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.Humanoid.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.Humanoid.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.Humanoid.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.Humanoid.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.Humanoid.md#getcollision)
- [getControlRotator](Gameplay.Gameplay.Humanoid.md#getcontrolrotator)
- [getDecorations](Gameplay.Gameplay.Humanoid.md#getdecorations)
- [getForwardVector](Gameplay.Gameplay.Humanoid.md#getforwardvector)
- [getHeadUIWidget](Gameplay.Gameplay.Humanoid.md#getheaduiwidget)
- [getRelativeLocation](Gameplay.Gameplay.Humanoid.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.Humanoid.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.Humanoid.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.Humanoid.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.Humanoid.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.Humanoid.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.Humanoid.md#getscripts)
- [getSlotName](Gameplay.Gameplay.Humanoid.md#getslotname)
- [getSourceAssetGuid](Gameplay.Gameplay.Humanoid.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.Humanoid.md#gettransform)
- [getUpVector](Gameplay.Gameplay.Humanoid.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.Humanoid.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.Humanoid.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.Humanoid.md#getworldscale)
- [isPlayingAnimation](Gameplay.Gameplay.Humanoid.md#isplayinganimation)
- [isRunningClient](Gameplay.Gameplay.Humanoid.md#isrunningclient)
- [jump](Gameplay.Gameplay.Humanoid.md#jump)
- [loadAnimation](Gameplay.Gameplay.Humanoid.md#loadanimation)
- [loadOneDecoration](Gameplay.Gameplay.Humanoid.md#loadonedecoration)
- [loadSlotAndEditorDataByGuid](Gameplay.Gameplay.Humanoid.md#loadslotandeditordatabyguid)
- [loadSlotAndEditorDataByPath](Gameplay.Gameplay.Humanoid.md#loadslotandeditordatabypath)
- [loadSlotByGuid](Gameplay.Gameplay.Humanoid.md#loadslotbyguid)
- [loadSlotByPath](Gameplay.Gameplay.Humanoid.md#loadslotbypath)
- [loadStance](Gameplay.Gameplay.Humanoid.md#loadstance)
- [lookAt](Gameplay.Gameplay.Humanoid.md#lookat)
- [onDestroy](Gameplay.Gameplay.Humanoid.md#ondestroy)
- [onStart](Gameplay.Gameplay.Humanoid.md#onstart)
- [onUpdate](Gameplay.Gameplay.Humanoid.md#onupdate)
- [playAnimation](Gameplay.Gameplay.Humanoid.md#playanimation)
- [playAnimationLocally](Gameplay.Gameplay.Humanoid.md#playanimationlocally)
- [ready](Gameplay.Gameplay.Humanoid.md#ready)
- [setAppearance](Gameplay.Gameplay.Humanoid.md#setappearance)
- [setCollision](Gameplay.Gameplay.Humanoid.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.Humanoid.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.Humanoid.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.Humanoid.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.Humanoid.md#setrelativescale)
- [setServerMovementEnable](Gameplay.Gameplay.Humanoid.md#setservermovementenable)
- [setTransform](Gameplay.Gameplay.Humanoid.md#settransform)
- [setVisibility](Gameplay.Gameplay.Humanoid.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.Humanoid.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.Humanoid.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.Humanoid.md#setworldscale)
- [stopAnimation](Gameplay.Gameplay.Humanoid.md#stopanimation)
- [stopStance](Gameplay.Gameplay.Humanoid.md#stopstance)
- [swimmingDown](Gameplay.Gameplay.Humanoid.md#swimmingdown)
- [swimmingUp](Gameplay.Gameplay.Humanoid.md#swimmingup)
- [switchToFlying](Gameplay.Gameplay.Humanoid.md#switchtoflying)
- [switchToWalking](Gameplay.Gameplay.Humanoid.md#switchtowalking)
- [asyncFind](Gameplay.Gameplay.Humanoid.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.Humanoid.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.Humanoid.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.Humanoid.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.Humanoid.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.Humanoid.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.Humanoid.md#spawngameobject)

## Constructors

### constructor

• **new Humanoid**()

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[constructor](Gameplay.Gameplay.CharacterBase.md#constructor)

## Properties

### loadAppearanceDataAllCompletedDelegate

• **loadAppearanceDataAllCompletedDelegate**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadAppearanceDataAllCompletedDelegate](Gameplay.Gameplay.CharacterBase.md#loadappearancedataallcompleteddelegate)

#### Defined in

Gameplay/index.d.ts:752

---

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onMeshChanged](Gameplay.Gameplay.CharacterBase.md#onmeshchanged)

#### Defined in

Gameplay/index.d.ts:740

---

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onTextureChanged](Gameplay.Gameplay.CharacterBase.md#ontexturechanged)

#### Defined in

Gameplay/index.d.ts:744

---

### player

• **player**: [`Player`](Gameplay.Gameplay.Player.md)

**`Description`**

玩家对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[player](Gameplay.Gameplay.CharacterBase.md#player)

#### Defined in

Gameplay/index.d.ts:773

---

### setAppearanceDataCompletedDelegate

• **setAppearanceDataCompletedDelegate**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑 API 成功后的回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setAppearanceDataCompletedDelegate](Gameplay.Gameplay.CharacterBase.md#setappearancedatacompleteddelegate)

#### Defined in

Gameplay/index.d.ts:748

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

Gameplay/index.d.ts:983

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

Gameplay/index.d.ts:988

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

Gameplay/index.d.ts:993

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

Gameplay/index.d.ts:998

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

Gameplay/index.d.ts:1003

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

Gameplay/index.d.ts:1008

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

Gameplay/index.d.ts:1354

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

Gameplay/index.d.ts:1358

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

Gameplay/index.d.ts:1066

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

Gameplay/index.d.ts:1071

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

Gameplay/index.d.ts:1318

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

Gameplay/index.d.ts:1215

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

Gameplay/index.d.ts:1219

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

Gameplay/index.d.ts:1223

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

Gameplay/index.d.ts:1227

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

Gameplay/index.d.ts:1207

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

Gameplay/index.d.ts:1211

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

Gameplay/index.d.ts:1056

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

Gameplay/index.d.ts:1061

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

Gameplay/index.d.ts:1039

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

Gameplay/index.d.ts:1043

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

Gameplay/index.d.ts:1023

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

Gameplay/index.d.ts:1027

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

Gameplay/index.d.ts:1047

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

Gameplay/index.d.ts:1051

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

Gameplay/index.d.ts:1031

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

Gameplay/index.d.ts:1035

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

Gameplay/index.d.ts:736

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

Gameplay/index.d.ts:966

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

Gameplay/index.d.ts:970

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

Gameplay/index.d.ts:974

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

Gameplay/index.d.ts:978

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

Gameplay/index.d.ts:778

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

Gameplay/index.d.ts:783

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

Gameplay/index.d.ts:926

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

Gameplay/index.d.ts:930

---

### enableBasicStanceAimOffset

• `get` **enableBasicStanceAimOffset**(): `boolean`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableBasicStanceAimOffset

#### Defined in

Gameplay/index.d.ts:1185

• `set` **enableBasicStanceAimOffset**(`InbEnableAimOffset`): `void`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableAimOffset` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableBasicStanceAimOffset

#### Defined in

Gameplay/index.d.ts:1189

---

### enableCollision

• `get` **enableCollision**(): `boolean`

**`Description`**

是否开启碰撞

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableCollision

#### Defined in

Gameplay/index.d.ts:1177

• `set` **enableCollision**(`InbEnableCollision`): `void`

**`Description`**

是否开启碰撞

#### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableCollision` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableCollision

#### Defined in

Gameplay/index.d.ts:1181

---

### enableCollisionWithOtherCharacter

• `get` **enableCollisionWithOtherCharacter**(): `boolean`

**`Description`**

能否与其他角色发生碰撞

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableCollisionWithOtherCharacter

#### Defined in

Gameplay/index.d.ts:1282

• `set` **enableCollisionWithOtherCharacter**(`value`): `void`

**`Description`**

能否与其他角色发生碰撞

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableCollisionWithOtherCharacter

#### Defined in

Gameplay/index.d.ts:1286

---

### enableCrouch

• `get` **enableCrouch**(): `boolean`

**`Description`**

启用/禁用下蹲能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableCrouch

#### Defined in

Gameplay/index.d.ts:831

• `set` **enableCrouch**(`canCrouch`): `void`

**`Description`**

启用/禁用下蹲能力

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `canCrouch` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableCrouch

#### Defined in

Gameplay/index.d.ts:835

---

### enableJump

• `get` **enableJump**(): `boolean`

**`Description`**

启用/禁用跳跃能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableJump

#### Defined in

Gameplay/index.d.ts:799

• `set` **enableJump**(`value`): `void`

**`Description`**

启用/禁用跳跃能力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableJump

#### Defined in

Gameplay/index.d.ts:803

---

### enableJumpingOutOfWater

• `get` **enableJumpingOutOfWater**(): `boolean`

**`Description`**

是否可以跳出水面

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableJumpingOutOfWater

#### Defined in

Gameplay/index.d.ts:1298

• `set` **enableJumpingOutOfWater**(`value`): `void`

**`Description`**

是否可以跳出水面

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableJumpingOutOfWater

#### Defined in

Gameplay/index.d.ts:1302

---

### enableMove

• `get` **enableMove**(): `boolean`

**`Description`**

启用/禁用移动能力

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableMove

#### Defined in

Gameplay/index.d.ts:791

• `set` **enableMove**(`value`): `void`

**`Description`**

启用/禁用移动能力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableMove

#### Defined in

Gameplay/index.d.ts:795

---

### enableRagdoll

• `get` **enableRagdoll**(): `boolean`

**`Description`**

启用/禁用布娃娃状态

#### Returns

`boolean`

#### Inherited from

CharacterBase.enableRagdoll

#### Defined in

Gameplay/index.d.ts:1147

• `set` **enableRagdoll**(`value`): `void`

**`Description`**

启用/禁用布娃娃状态

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.enableRagdoll

#### Defined in

Gameplay/index.d.ts:1151

---

### enableServerCalculate

• `set` **enableServerCalculate**(`enable`): `void`

**`Description`**

同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算

**`Effect`**

可双端直接调用

**`Precautions`**

针对处于静默状态的 ai 调用用于降低暂时不必要的计算带来的性能消耗，如果 ai 角色需要参与到游戏中请开启

#### Parameters

| Name     | Type      | Description                                 |
| :------- | :-------- | :------------------------------------------ |
| `enable` | `boolean` | usage: true 开启角色计算 flase 关闭角色计算 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1790

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

Core/index.d.ts:405

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

Gameplay/index.d.ts:1015

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

Gameplay/index.d.ts:1019

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

Gameplay/index.d.ts:894

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

Gameplay/index.d.ts:898

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

Core/index.d.ts:38

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

Gameplay/index.d.ts:1231

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

Gameplay/index.d.ts:1235

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

Gameplay/index.d.ts:1089

---

### isHeadUIVisible

• `get` **isHeadUIVisible**(): `boolean`

**`Description`**

头顶 UI 是否可见

#### Returns

`boolean`

#### Inherited from

CharacterBase.isHeadUIVisible

#### Defined in

Gameplay/index.d.ts:1199

• `set` **isHeadUIVisible**(`isVisible`): `void`

**`Description`**

头顶 UI 是否可见

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.isHeadUIVisible

#### Defined in

Gameplay/index.d.ts:1203

---

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

是否可见

#### Returns

`boolean`

#### Inherited from

CharacterBase.isVisible

#### Defined in

Gameplay/index.d.ts:1097

• `set` **isVisible**(`inIsVisible`): `void`

**`Description`**

是否可见

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `inIsVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.isVisible

#### Defined in

Gameplay/index.d.ts:1101

---

### isVisibleLocally

• `get` **isVisibleLocally**(): `boolean`

**`Description`**

是否可见(本地设置)

#### Returns

`boolean`

#### Inherited from

CharacterBase.isVisibleLocally

#### Defined in

Gameplay/index.d.ts:1105

• `set` **isVisibleLocally**(`inIsVisible`): `void`

**`Description`**

是否可见(本地设置)

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `inIsVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.isVisibleLocally

#### Defined in

Gameplay/index.d.ts:1109

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

Gameplay/index.d.ts:918

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

Gameplay/index.d.ts:922

---

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

CharacterBase.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.lockState

#### Defined in

Core/index.d.ts:447

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

Gameplay/index.d.ts:860

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

Gameplay/index.d.ts:864

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

Gameplay/index.d.ts:839

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

Gameplay/index.d.ts:843

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

Gameplay/index.d.ts:815

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

Gameplay/index.d.ts:819

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

Gameplay/index.d.ts:910

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

Gameplay/index.d.ts:914

---

### maxStepHeight

• `get` **maxStepHeight**(): `number`

**`Description`**

不可跨越高度

#### Returns

`number`

#### Inherited from

CharacterBase.maxStepHeight

#### Defined in

Gameplay/index.d.ts:868

• `set` **maxStepHeight**(`InMaxStepHeight`): `void`

**`Description`**

不可跨越高度

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `InMaxStepHeight` | `number` |

#### Returns

`void`

#### Inherited from

CharacterBase.maxStepHeight

#### Defined in

Gameplay/index.d.ts:872

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

Gameplay/index.d.ts:823

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

Gameplay/index.d.ts:827

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

Gameplay/index.d.ts:807

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

Gameplay/index.d.ts:811

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

Gameplay/index.d.ts:847

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

Gameplay/index.d.ts:851

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

Gameplay/index.d.ts:942

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

Gameplay/index.d.ts:946

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

Gameplay/index.d.ts:934

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

Gameplay/index.d.ts:938

---

### movementDirection

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

**`Description`**

运动时依据的正方向

#### Returns

[`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

#### Inherited from

CharacterBase.movementDirection

#### Defined in

Gameplay/index.d.ts:950

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

Gameplay/index.d.ts:954

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

Gameplay/index.d.ts:787

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

Core/index.d.ts:167

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

Core/index.d.ts:173

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

Core/index.d.ts:502

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

Gameplay/index.d.ts:1294

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

Gameplay/index.d.ts:1290

---

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

CharacterBase.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                    |
| :---------- | :-------------------------------------- |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

CharacterBase.parent

#### Defined in

Core/index.d.ts:463

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

Core/index.d.ts:304

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

Core/index.d.ts:310

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

Core/index.d.ts:330

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

Core/index.d.ts:336

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

Core/index.d.ts:356

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

Core/index.d.ts:362

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

Core/index.d.ts:419

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

Gameplay/index.d.ts:885

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

Gameplay/index.d.ts:890

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

Gameplay/index.d.ts:1169

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

Gameplay/index.d.ts:1173

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

CharacterBase.staticStatus

#### Defined in

Core/index.d.ts:442

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

Core/index.d.ts:185

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

Core/index.d.ts:179

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

Core/index.d.ts:205

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

Core/index.d.ts:211

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

Core/index.d.ts:392

---

### useSeparateBrakingFriction

• `get` **useSeparateBrakingFriction**(): `boolean`

**`Description`**

使用单独制动摩擦

#### Returns

`boolean`

#### Inherited from

CharacterBase.useSeparateBrakingFriction

#### Defined in

Gameplay/index.d.ts:902

• `set` **useSeparateBrakingFriction**(`used`): `void`

**`Description`**

使用单独制动摩擦

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `used` | `boolean` |

#### Returns

`void`

#### Inherited from

CharacterBase.useSeparateBrakingFriction

#### Defined in

Gameplay/index.d.ts:906

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

CharacterBase.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

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

Core/index.d.ts:432

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

Gameplay/index.d.ts:958

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

Gameplay/index.d.ts:962

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

Gameplay/index.d.ts:1093

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

Gameplay/index.d.ts:876

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

Gameplay/index.d.ts:880

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

Core/index.d.ts:230

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

Core/index.d.ts:235

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

Core/index.d.ts:254

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

Core/index.d.ts:260

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

Core/index.d.ts:279

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

Core/index.d.ts:284

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

Core/index.d.ts:616

---

### addImpulse

▸ **addImpulse**(`Vector`, `VelocityChange?`): `void`

**`Description`**

添加冲量

**`Effect`**

服务端调用生效

#### Parameters

| Name              | Type                            | Description                      |
| :---------------- | :------------------------------ | :------------------------------- |
| `Vector`          | [`Vector`](Type.Type.Vector.md) | usage:应用的冲量                 |
| `VelocityChange?` | `boolean`                       | usage:速度是否改变 default:false |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addImpulse](Gameplay.Gameplay.CharacterBase.md#addimpulse)

#### Defined in

Gameplay/index.d.ts:1143

---

### addMoveInput

▸ **addMoveInput**(`Invector`): `void`

**`Description`**

沿着给定的方向向量添加移动输入

**`Effect`**

调用端调用生效

#### Parameters

| Name       | Type                            | Description      |
| :--------- | :------------------------------ | :--------------- |
| `Invector` | [`Vector`](Type.Type.Vector.md) | usage:输入的方向 |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addMoveInput](Gameplay.Gameplay.CharacterBase.md#addmoveinput)

#### Defined in

Gameplay/index.d.ts:1136

---

### appearanceReady

▸ **appearanceReady**(): `Promise`<`void`\>

**`Description`**

在外观数据准备好后返回,在设置角色外观形象之前，可以用做这个判断

**`Effect`**

客户端

#### Returns

`Promise`<`void`\>

异步回调

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[appearanceReady](Gameplay.Gameplay.CharacterBase.md#appearanceready)

#### Defined in

Gameplay/index.d.ts:758

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

Core/index.d.ts:563

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
| `gameObject` | [`GameObject`](Core.Core.GameObject.md)              | usage:物体     |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽类型 |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[attach](Gameplay.Gameplay.CharacterBase.md#attach)

#### Defined in

Gameplay/index.d.ts:1158

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                    | Description |
| :---- | :-------------------------------------- | :---------- |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体  |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[attachToGameObject](Gameplay.Gameplay.CharacterBase.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

---

### cleanDecorations

▸ **cleanDecorations**(): `void`

**`Description`**

清空所有挂件数据

**`Effect`**

客户端

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[cleanDecorations](Gameplay.Gameplay.CharacterBase.md#cleandecorations)

#### Defined in

Gameplay/index.d.ts:1330

---

### cleanOneDecoration

▸ **cleanOneDecoration**(`guid`): `void`

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[cleanOneDecoration](Gameplay.Gameplay.CharacterBase.md#cleanonedecoration)

#### Defined in

Gameplay/index.d.ts:1343

---

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[clone](Gameplay.Gameplay.CharacterBase.md#clone)

#### Defined in

Core/index.d.ts:543

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

Gameplay/index.d.ts:1130

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

Core/index.d.ts:622

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Overrides

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[destroy](Gameplay.Gameplay.CharacterBase.md#destroy)

#### Defined in

Gameplay/index.d.ts:1776

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

Gameplay/index.d.ts:856

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

Core/index.d.ts:598

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 Gameobject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getBounds](Gameplay.Gameplay.CharacterBase.md#getbounds)

#### Defined in

Core/index.d.ts:194

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildByGuid](Gameplay.Gameplay.CharacterBase.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

---

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildByName](Gameplay.Gameplay.CharacterBase.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

---

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取 Children 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getChildren](Gameplay.Gameplay.CharacterBase.md#getchildren)

#### Defined in

Core/index.d.ts:522

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

Core/index.d.ts:610

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

Core/index.d.ts:480

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

Gameplay/index.d.ts:1248

---

### getDecorations

▸ **getDecorations**(): [`DecorationTule`](../modules/Gameplay.Gameplay.md#decorationtule)[]

**`Description`**

获取当前挂件实例化对象的 Guid

**`Effect`**

客户端

#### Returns

[`DecorationTule`](../modules/Gameplay.Gameplay.md#decorationtule)[]

guid 数组

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getDecorations](Gameplay.Gameplay.CharacterBase.md#getdecorations)

#### Defined in

Gameplay/index.d.ts:1349

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

Core/index.d.ts:413

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

Gameplay/index.d.ts:1195

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

Core/index.d.ts:318

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

Gameplay/index.d.ts:1350

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

Core/index.d.ts:370

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

Core/index.d.ts:427

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

Core/index.d.ts:570

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

Core/index.d.ts:556

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array\<Script\>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getScripts](Gameplay.Gameplay.CharacterBase.md#getscripts)

#### Defined in

Core/index.d.ts:549

---

### getSlotName

▸ **getSlotName**(`SocketType`): `string`

**`Description`**

获取对应插槽名称

**`Effect`**

调用端调用生效

#### Parameters

| Name         | Type                                                 | Description    |
| :----------- | :--------------------------------------------------- | :------------- |
| `SocketType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽类型 |

#### Returns

`string`

插槽名称(string)

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getSlotName](Gameplay.Gameplay.CharacterBase.md#getslotname)

#### Defined in

Gameplay/index.d.ts:1165

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

Core/index.d.ts:628

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

Core/index.d.ts:219

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

Core/index.d.ts:399

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

Core/index.d.ts:243

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

Core/index.d.ts:268

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

Core/index.d.ts:292

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

Gameplay/index.d.ts:1364

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

Core/index.d.ts:49

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

Gameplay/index.d.ts:1124

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

Gameplay/index.d.ts:1394

---

### loadOneDecoration

▸ **loadOneDecoration**(`decorationString`, `callback`): `void`

**`Description`**

加载一个挂件数据

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

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadOneDecoration](Gameplay.Gameplay.CharacterBase.md#loadonedecoration)

#### Defined in

Gameplay/index.d.ts:1337

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

Gameplay/index.d.ts:1260

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

Gameplay/index.d.ts:1254

---

### loadSlotByGuid

▸ **loadSlotByGuid**(`guid`): `void`

**`Description`**

通过 Guid 加载数据

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `guid` | `string` | usage:Slot Guid |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadSlotByGuid](Gameplay.Gameplay.CharacterBase.md#loadslotbyguid)

#### Defined in

Gameplay/index.d.ts:1272

---

### loadSlotByPath

▸ **loadSlotByPath**(`relativePath`): `void`

**`Description`**

通过路径加载数据

**`Effect`**

调用端调用生效

#### Parameters

| Name           | Type     | Description    |
| :------------- | :------- | :------------- |
| `relativePath` | `string` | usage:相对路径 |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadSlotByPath](Gameplay.Gameplay.CharacterBase.md#loadslotbypath)

#### Defined in

Gameplay/index.d.ts:1266

---

### loadStance

▸ **loadStance**(`guid`, `sync?`): [`SubStance`](Gameplay.Gameplay.SubStance.md)

**`Description`**

创建一个二级姿态对象

**`Effect`**

调用端生效

#### Parameters

| Name    | Type      | Description                              |
| :------ | :-------- | :--------------------------------------- |
| `guid`  | `string`  | usage: 预制姿态资源 guid 或动画资源 guid |
| `sync?` | `boolean` | usage: 是否自动同步 default:true         |

#### Returns

[`SubStance`](Gameplay.Gameplay.SubStance.md)

二级姿态对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[loadStance](Gameplay.Gameplay.CharacterBase.md#loadstance)

#### Defined in

Gameplay/index.d.ts:1079

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

Gameplay/index.d.ts:1241

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

onDestroy 生命周期函数

**`Effect`**

自动调用

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[onDestroy](Gameplay.Gameplay.CharacterBase.md#ondestroy)

#### Defined in

Gameplay/index.d.ts:769

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

Core/index.d.ts:12

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

Gameplay/index.d.ts:764

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

Gameplay/index.d.ts:1373

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

Gameplay/index.d.ts:1382

---

### ready

▸ **ready**(): `Promise`<[`Humanoid`](Gameplay.Gameplay.Humanoid.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`Humanoid`](Gameplay.Gameplay.Humanoid.md)\>

准备好的对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[ready](Gameplay.Gameplay.CharacterBase.md#ready)

#### Defined in

Core/index.d.ts:122

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

Gameplay/index.d.ts:1325

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

Core/index.d.ts:471

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

Core/index.d.ts:383

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

Core/index.d.ts:324

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

Core/index.d.ts:350

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

Core/index.d.ts:376

---

### setServerMovementEnable

▸ **setServerMovementEnable**(`value`): `void`

**`Description`**

开关角色的移动计算

**`Effect`**

可双端直接调用

**`Precautions`**

针对处于静默状态的 ai 调用用于降低移动计算带来的性能消耗，如果 ai 角色需要参与到游戏中请开启移动计算

#### Parameters

| Name    | Type      | Description                                         |
| :------ | :-------- | :-------------------------------------------------- |
| `value` | `boolean` | usage: true 开启角色移动计算 flase 关闭角色移动计算 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1783

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

Core/index.d.ts:225

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[setVisibility](Gameplay.Gameplay.CharacterBase.md#setvisibility)

#### Defined in

Core/index.d.ts:487

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

Core/index.d.ts:249

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

Core/index.d.ts:274

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

Core/index.d.ts:298

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

Gameplay/index.d.ts:1401

---

### stopStance

▸ **stopStance**(`sync?`): `void`

**`Description`**

停止正在播放的姿态

**`Effect`**

可选同步

#### Parameters

| Name    | Type      | Description                      |
| :------ | :-------- | :------------------------------- |
| `sync?` | `boolean` | usage: 是否自动同步 default:true |

#### Returns

`void`

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[stopStance](Gameplay.Gameplay.CharacterBase.md#stopstance)

#### Defined in

Gameplay/index.d.ts:1085

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

Gameplay/index.d.ts:1314

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

Gameplay/index.d.ts:1308

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

Gameplay/index.d.ts:1114

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

Gameplay/index.d.ts:1119

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过 guid 异步查找 Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid 对应的物体

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[asyncFind](Gameplay.Gameplay.CharacterBase.md#asyncfind)

#### Defined in

Core/index.d.ts:161

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

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

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的 GameObject

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[asyncSpawnGameObject](Gameplay.Gameplay.CharacterBase.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

---

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过 Guid 查找 Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid 对应的物体

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[find](Gameplay.Gameplay.CharacterBase.md#find)

#### Defined in

Core/index.d.ts:153

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[findGameObjectByTag](Gameplay.Gameplay.CharacterBase.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getGameObjectByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[getGameObjectsByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

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

[`GameObject`](Core.Core.GameObject.md)

构造的 GameObject

#### Inherited from

[CharacterBase](Gameplay.Gameplay.CharacterBase.md).[spawnGameObject](Gameplay.Gameplay.CharacterBase.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
