[Gameplay](../modules/Gameplay.Gameplay.md) / CharacterBase

# CharacterBase <Badge type="tip" text="Class" />

**`Description`**

- CharacterBase是一个具有外观和动画表现，且内置移动逻辑的GameObject，具备GameObject的所有功能。
- CharacterBase是玩家角色和非玩家角色的基类，可以在场景中行走、跳跃、飞行和游泳，可与世界中的所有物理效果交互
- CharacterBase通常会有默认的形象，你也可以对不同的形象进行编辑，以及选择设置为无形象
- 在MW的世界中，无法对CharacterBase进行实例化，它只用于提供玩家角色和非玩家角色的通用功能

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`CharacterBase`**

  ↳↳ [`AICharacter`](Gameplay.AICharacter.md)

  ↳↳ [`Character`](Gameplay.Character.md)

  ↳↳ [`Humanoid`](Gameplay.Humanoid.md)

## Table of contents

| Properties |
| :-----|
| **[isV1](Gameplay.CharacterBase.md#isv1)**: `any` <br> 判断当前角色是否是V1版本|
| **[onLoadAppearanceDataAllCompleted](Gameplay.CharacterBase.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑API成功后的回调|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 玩家对象|

| Accessors |
| :-----|
| **[airControl](Gameplay.CharacterBase.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[airControlBoostMultiplier](Gameplay.CharacterBase.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数|
| **[airControlBoostVelocityThreshold](Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍|
| **[animationMode](Gameplay.CharacterBase.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[animationStance](Gameplay.CharacterBase.md#animationstance)**(): `string` <br> 动画姿态|
| **[appearance](Gameplay.CharacterBase.md#appearance)**(): [`SomatotypeBase`](Gameplay.SomatotypeBase.md) <br> 当前外观修改对象|
| **[baseShadowLocationOffset](Gameplay.CharacterBase.md#baseshadowlocationoffset)**(): [`Vector2`](Type.Vector2.md) <br> 模拟阴影相对于角色脚底中心的位置偏移|
| **[baseShadowMaxVisibleHeight](Gameplay.CharacterBase.md#baseshadowmaxvisibleheight)**(): `number` <br> 模拟阴影可见的最大离地高度|
| **[baseShadowScale](Gameplay.CharacterBase.md#baseshadowscale)**(): [`Vector2`](Type.Vector2.md) <br> 模拟阴影的缩放|
| **[basicStance](Gameplay.CharacterBase.md#basicstance)**(): `string` <br> 基础姿态|
| **[basicStanceAimOffsetEnable](Gameplay.CharacterBase.md#basicstanceaimoffsetenable)**(): `boolean` <br> 是否基础姿态的开启瞄准偏移|
| **[brakingDecelerationFalling](Gameplay.CharacterBase.md#brakingdecelerationfalling)**(): `number` <br> 下落制动速率|
| **[brakingDecelerationFlying](Gameplay.CharacterBase.md#brakingdecelerationflying)**(): `number` <br> 飞行制动速率|
| **[brakingDecelerationSwimming](Gameplay.CharacterBase.md#brakingdecelerationswimming)**(): `number` <br> 游泳制动速率|
| **[brakingDecelerationWalking](Gameplay.CharacterBase.md#brakingdecelerationwalking)**(): `number` <br> 行走制动速率|
| **[canSetAppearanceData](Gameplay.CharacterBase.md#cansetappearancedata)**(): `boolean` <br> 是否可以设置角色形象数据|
| **[canStepUpOn](Gameplay.CharacterBase.md#canstepupon)**(): `boolean` <br> 获取组件是否可以被玩家站立|
| **[capsuleHalfHeight](Gameplay.CharacterBase.md#capsulehalfheight)**(): `number` <br> 胶囊体半高|
| **[capsuleRadius](Gameplay.CharacterBase.md#capsuleradius)**(): `number` <br> 胶囊体半径|
| **[characterName](Gameplay.CharacterBase.md#charactername)**(): `string` <br> 角色名称|
| **[collisionEnable](Gameplay.CharacterBase.md#collisionenable)**(): `boolean` <br> 是否开启碰撞|
| **[collisionExtent](Gameplay.CharacterBase.md#collisionextent)**(): [`Vector`](Type.Vector.md) <br> 碰撞形状的大小|
| **[collisionShape](Gameplay.CharacterBase.md#collisionshape)**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) <br> 碰撞形状|
| **[collisionWithOtherCharacterEnable](Gameplay.CharacterBase.md#collisionwithothercharacterenable)**(): `boolean` <br> 能否与其他角色发生碰撞|
| **[crouchEnable](Gameplay.CharacterBase.md#crouchenable)**(): `boolean` <br> 启用/禁用下蹲能力|
| **[crouchedHeight](Gameplay.CharacterBase.md#crouchedheight)**(): `number` <br> 下蹲时胶囊体的高度|
| **[gravityScale](Gameplay.CharacterBase.md#gravityscale)**(): `number` <br> 重力倍率|
| **[groundFriction](Gameplay.CharacterBase.md#groundfriction)**(): `number` <br> 地面摩檫力|
| **[headUIVisible](Gameplay.CharacterBase.md#headuivisible)**(): `boolean` <br> 头顶UI是否可见|
| **[headUIVisibleRange](Gameplay.CharacterBase.md#headuivisiblerange)**(): `number` <br> 头顶UI可见距离|
| **[isCrouching](Gameplay.CharacterBase.md#iscrouching)**(): `boolean` <br> 是否处于下蹲状态|
| **[isJumping](Gameplay.CharacterBase.md#isjumping)**(): `boolean` <br> 是否正在跳跃|
| **[isMoving](Gameplay.CharacterBase.md#ismoving)**(): `boolean` <br> 是否正在移动|
| **[jumpEnable](Gameplay.CharacterBase.md#jumpenable)**(): `boolean` <br> 启用/禁用跳跃能力|
| **[jumpMaxCount](Gameplay.CharacterBase.md#jumpmaxcount)**(): `number` <br> 最大可跳跃次数|
| **[jumpingOutOfWaterEnable](Gameplay.CharacterBase.md#jumpingoutofwaterenable)**(): `boolean` <br> 是否可以跳出水面|
| **[locallyVisible](Gameplay.CharacterBase.md#locallyvisible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[maxAcceleration](Gameplay.CharacterBase.md#maxacceleration)**(): `number` <br> 最大加速度|
| **[maxFallingSpeed](Gameplay.CharacterBase.md#maxfallingspeed)**(): `number` <br> 最大下落速度|
| **[maxFlySpeed](Gameplay.CharacterBase.md#maxflyspeed)**(): `number` <br> 最大飞行速度|
| **[maxJumpHeight](Gameplay.CharacterBase.md#maxjumpheight)**(): `number` <br> 最大跳跃高度|
| **[maxStepHeight](Gameplay.CharacterBase.md#maxstepheight)**(): `number` <br> 获取角色最大可跨越高度|
| **[maxSwimSpeed](Gameplay.CharacterBase.md#maxswimspeed)**(): `number` <br> 最大游泳速度|
| **[maxWalkSpeed](Gameplay.CharacterBase.md#maxwalkspeed)**(): `number` <br> 地面最大速度|
| **[maxWalkSpeedCrouched](Gameplay.CharacterBase.md#maxwalkspeedcrouched)**(): `number` <br> 地面蹲伏行走时的最大移动速度|
| **[moveEnable](Gameplay.CharacterBase.md#moveenable)**(): `boolean` <br> 启用/禁用移动能力|
| **[moveFacingDirection](Gameplay.CharacterBase.md#movefacingdirection)**(): [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) <br> 运动面朝方向|
| **[movementAxisDirection](Gameplay.CharacterBase.md#movementaxisdirection)**(): [`Vector`](Type.Vector.md) <br> 运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效|
| **[movementDirection](Gameplay.CharacterBase.md#movementdirection)**(): [`MovementDirection`](../enums/Gameplay.MovementDirection.md) <br> 运动时依据的正方向|
| **[movementState](Gameplay.CharacterBase.md#movementstate)**(): [`MovementMode`](../enums/Gameplay.MovementMode.md) <br> 当前角色运动状态|
| **[outOfWaterZ](Gameplay.CharacterBase.md#outofwaterz)**(): `number` <br> 出水时Z轴方向上的速度|
| **[ragdollEnable](Gameplay.CharacterBase.md#ragdollenable)**(): `boolean` <br> 启用/禁用布娃娃状态|
| **[rotateRate](Gameplay.CharacterBase.md#rotaterate)**(): `number` <br> 最大转向速度|
| **[scale](Gameplay.CharacterBase.md#scale)**(): [`Vector`](Type.Vector.md) <br> 角色胶囊体的缩放, 自动同步|
| **[separateBrakingFrictionEnable](Gameplay.CharacterBase.md#separatebrakingfrictionenable)**(): `boolean` <br> 使用单独制动摩擦|
| **[usedCapsuleCorrection](Gameplay.CharacterBase.md#usedcapsulecorrection)**(): `boolean` <br> 使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。|
| **[velocity](Gameplay.CharacterBase.md#velocity)**(): [`Vector`](Type.Vector.md) <br> 当前移动速度|
| **[walkableFloorAngle](Gameplay.CharacterBase.md#walkablefloorangle)**(): `number` <br> 可行走的最大角度|

| Methods |
| :-----|
| **[addImpulse](Gameplay.CharacterBase.md#addimpulse)**([`Vector`](Type.Vector.md), `boolean`): `void` <br> 添加冲量|
| **[addMoveInput](Gameplay.CharacterBase.md#addmoveinput)**([`Vector`](Type.Vector.md)): `void` <br> 沿着给定的方向向量添加移动输入|
| **[appearanceReady](Gameplay.CharacterBase.md#appearanceready)**(): `Promise`<`void`\> <br> 在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断|
| **[attach](Gameplay.CharacterBase.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到人物角色的指定插槽|
| **[clearDecorations](Gameplay.CharacterBase.md#cleardecorations)**(): `void` <br> 清空所有挂件数据|
| **[clearOneDecoration](Gameplay.CharacterBase.md#clearonedecoration)**(`string`): `void` <br> 删除一个挂件|
| **[crouch](Gameplay.CharacterBase.md#crouch)**(`boolean`): `void` <br> 下蹲|
| **[getControlRotator](Gameplay.CharacterBase.md#getcontrolrotator)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取控制器的旋转|
| **[getDecorations](Gameplay.CharacterBase.md#getdecorations)**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <br> 获取当前挂件实例化对象的Guid|
| **[getHeadUIWidget](Gameplay.CharacterBase.md#getheaduiwidget)**(): [`UIWidget`](Gameplay.UIWidget.md) <br> 获取头顶UIWidget|
| **[getSlotName](Gameplay.CharacterBase.md#getslotname)**([`SlotType`](../enums/Gameplay.SlotType.md)): `string` <br> 获取对应插槽名称|
| **[isPlayingAnimation](Gameplay.CharacterBase.md#isplayinganimation)**(): `boolean` <br> 是否正在播放动画|
| **[jump](Gameplay.CharacterBase.md#jump)**(): `void` <br> 跳跃|
| **[loadAnimation](Gameplay.CharacterBase.md#loadanimation)**(`string`, `boolean`): [`Animation`](Gameplay.Animation.md) <br> 加载动画,获取到动画对象|
| **[loadDecoration](Gameplay.CharacterBase.md#loaddecoration)**(`string`, [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback)): `void` <br> 加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力|
| **[loadSlotAndEditorDataByGuid](Gameplay.CharacterBase.md#loadslotandeditordatabyguid)**(`string`): `void` <br> 通过Guid加载插槽跟角色编辑数据|
| **[loadSlotAndEditorDataByPath](Gameplay.CharacterBase.md#loadslotandeditordatabypath)**(`string`): `void` <br> 通过路径加载插槽跟角色编辑数据|
| **[loadStance](Gameplay.CharacterBase.md#loadstance)**(`string`, `boolean`): [`SubStance`](Gameplay.SubStance.md) <br> 创建一个二级姿态对象并返回|
| **[lookAt](Gameplay.CharacterBase.md#lookat)**([`Vector`](Type.Vector.md)): `void` <br> 角色面朝目标点|
| **[playAnimation](Gameplay.CharacterBase.md#playanimation)**(`string`, `number`, `number`): [`Animation`](Gameplay.Animation.md) <br> 播放动画,同时获取到动画对象,Animation对象接口是同步的|
| **[playAnimationLocally](Gameplay.CharacterBase.md#playanimationlocally)**(`string`, `number`, `number`): `void` <br> since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(guid,false) instead.|
| **[setAppearance](Gameplay.CharacterBase.md#setappearance)**<extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> |\>([`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\>): extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> | <br> 设置外观修改功能|
| **[setCollisionShapeAndExtent](Gameplay.CharacterBase.md#setcollisionshapeandextent)**([`CustomShapeType`](../enums/Gameplay.CustomShapeType.md), [`Vector`](Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体|
| **[setLocallyVisibility](Gameplay.CharacterBase.md#setlocallyvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(本地生效)|
| **[stopAnimation](Gameplay.CharacterBase.md#stopanimation)**(`string`): `void` <br> since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"|
| **[stopStance](Gameplay.CharacterBase.md#stopstance)**(`boolean`): `void` <br> 停止任何正在播放的姿态|
| **[swimmingDown](Gameplay.CharacterBase.md#swimmingdown)**(`number`): `void` <br> 水中下潜|
| **[swimmingUp](Gameplay.CharacterBase.md#swimmingup)**(`number`): `void` <br> 水中上浮|
| **[switchToFlying](Gameplay.CharacterBase.md#switchtoflying)**(): `void` <br> 切换为飞行状态|
| **[switchToWalking](Gameplay.CharacterBase.md#switchtowalking)**(): `void` <br> 切换为行走状态|

## Properties

### isV1

• `Private` **isV1**: `any`

**`Description`**

判断当前角色是否是V1版本

**`Effect`**

调用端调用生效

___

### onLoadAppearanceDataAllCompleted

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

___

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

___

### onMovementStateChanged

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

**`Description`**

移动状态切换时的回调

___

### onSetAppearanceDataCompleted

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑API成功后的回调

___

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

___

### player

• **player**: [`Player`](Gameplay.Player.md)

**`Description`**

玩家对象

## Accessors

### airControl

• `get` **airControl**(): `number`

**`Description`**

角色在空中时, 控制水平方向移动的灵活度

**`Precautions`**

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

#### Returns

`number`

• `set` **airControl**(`InAirControl`): `void`

**`Description`**

角色在空中时, 控制水平方向移动的灵活度

**`Precautions`**

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControl` | `number` |

#### Returns

`void`

___

### airControlBoostMultiplier

• `get` **airControlBoostMultiplier**(): `number`

**`Description`**

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

**`Precautions`**

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

#### Returns

`number`

• `set` **airControlBoostMultiplier**(`InAirControlBoostMultiplier`): `void`

**`Description`**

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

**`Precautions`**

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostMultiplier` | `number` |

#### Returns

`void`

___

### airControlBoostVelocityThreshold

• `get` **airControlBoostVelocityThreshold**(): `number`

**`Description`**

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

**`Precautions`**

范围: 大于等于0

#### Returns

`number`

• `set` **airControlBoostVelocityThreshold**(`InAirControlBoostVelocityThreshold`): `void`

**`Description`**

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

**`Precautions`**

范围: 大于等于0

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostVelocityThreshold` | `number` |

#### Returns

`void`

___

### animationMode

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md)

**`Description`**

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.AnimationMode.md)

• `set` **animationMode**(`mode`): `void`

**`Description`**

动画播放模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`AnimationMode`](../enums/Gameplay.AnimationMode.md) |

#### Returns

`void`

___

### animationStance

• `get` **animationStance**(): `string`

**`Description`**

动画姿态

**`Precautions`**

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的guid进行动画姿态的切换, 传入空字符串时, 清除动画姿态

#### Returns

`string`

• `set` **animationStance**(`StanceGuid`): `void`

**`Description`**

动画姿态

**`Precautions`**

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的guid进行动画姿态的切换, 传入空字符串时, 清除动画姿态

#### Parameters

| Name | Type |
| :------ | :------ |
| `StanceGuid` | `string` |

#### Returns

`void`

___

### appearance

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

**`Description`**

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.SomatotypeBase.md)

___

### baseShadowLocationOffset

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Vector2.md)

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowLocationOffset**(`InLocationOffset`): `void`

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InLocationOffset` | [`Vector2`](Type.Vector2.md) |

#### Returns

`void`

___

### baseShadowMaxVisibleHeight

• `get` **baseShadowMaxVisibleHeight**(): `number`

**`Description`**

模拟阴影可见的最大离地高度

#### Returns

`number`

• `set` **baseShadowMaxVisibleHeight**(`InHeight`): `void`

**`Description`**

模拟阴影可见的最大离地高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InHeight` | `number` |

#### Returns

`void`

___

### baseShadowScale

• `get` **baseShadowScale**(): [`Vector2`](Type.Vector2.md)

**`Description`**

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowScale**(`InScale`): `void`

**`Description`**

模拟阴影的缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `InScale` | [`Vector2`](Type.Vector2.md) |

#### Returns

`void`

___

### basicStance

• `get` **basicStance**(): `string`

**`Description`**

基础姿态

**`Precautions`**

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的guid进行基础姿态的切换

#### Returns

`string`

• `set` **basicStance**(`InBasicStance`): `void`

**`Description`**

基础姿态

**`Precautions`**

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的guid进行基础姿态的切换

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBasicStance` | `string` |

#### Returns

`void`

___

### basicStanceAimOffsetEnable

• `get` **basicStanceAimOffsetEnable**(): `boolean`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

• `set` **basicStanceAimOffsetEnable**(`InbEnableAimOffset`): `void`

**`Description`**

是否基础姿态的开启瞄准偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableAimOffset` | `boolean` |

#### Returns

`void`

___

### brakingDecelerationFalling

• `get` **brakingDecelerationFalling**(): `number`

**`Description`**

下落制动速率

#### Returns

`number`

• `set` **brakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void`

**`Description`**

下落制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFalling` | `number` |

#### Returns

`void`

___

### brakingDecelerationFlying

• `get` **brakingDecelerationFlying**(): `number`

**`Description`**

飞行制动速率

#### Returns

`number`

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void`

**`Description`**

飞行制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFlying` | `number` |

#### Returns

`void`

___

### brakingDecelerationSwimming

• `get` **brakingDecelerationSwimming**(): `number`

**`Description`**

游泳制动速率

#### Returns

`number`

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void`

**`Description`**

游泳制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationSwimming` | `number` |

#### Returns

`void`

___

### brakingDecelerationWalking

• `get` **brakingDecelerationWalking**(): `number`

**`Description`**

行走制动速率

#### Returns

`number`

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void`

**`Description`**

行走制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationWalking` | `number` |

#### Returns

`void`

___

### canSetAppearanceData

• `get` **canSetAppearanceData**(): `boolean`

**`Description`**

是否可以设置角色形象数据

#### Returns

`boolean`

___

### canStepUpOn

• `get` **canStepUpOn**(): `boolean`

**`Description`**

获取组件是否可以被玩家站立

**`Effect`**

调用端调用生效

#### Returns

`boolean`

true 其他角色可以站到玩家头上  false 其他角色不可以站到玩家头上

• `set` **canStepUpOn**(`CanStepUpOn`): `void`

**`Description`**

设置组件是否可以被玩家站立

**`Effect`**

服务端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `CanStepUpOn` | `boolean` |

#### Returns

`void`

___

### capsuleHalfHeight

• `get` **capsuleHalfHeight**(): `number`

**`Description`**

胶囊体半高

#### Returns

`number`

• `set` **capsuleHalfHeight**(`InCapsuleHalfHeight`): `void`

**`Description`**

胶囊体半高

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleHalfHeight` | `number` |

#### Returns

`void`

___

### capsuleRadius

• `get` **capsuleRadius**(): `number`

**`Description`**

胶囊体半径

#### Returns

`number`

• `set` **capsuleRadius**(`InCapsuleRadius`): `void`

**`Description`**

胶囊体半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleRadius` | `number` |

#### Returns

`void`

___

### characterName

• `get` **characterName**(): `string`

**`Description`**

角色名称

**`Precautions`**

会显示在角色头顶UI上

#### Returns

`string`

• `set` **characterName**(`inCharacterName`): `void`

**`Description`**

角色名称

**`Precautions`**

会显示在角色头顶UI上

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCharacterName` | `string` |

#### Returns

`void`

___

### collisionEnable

• `get` **collisionEnable**(): `boolean`

**`Description`**

是否开启碰撞

#### Returns

`boolean`

• `set` **collisionEnable**(`InbEnableCollision`): `void`

**`Description`**

是否开启碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableCollision` | `boolean` |

#### Returns

`void`

___

### collisionExtent

• `get` **collisionExtent**(): [`Vector`](Type.Vector.md)

**`Description`**

碰撞形状的大小

#### Returns

[`Vector`](Type.Vector.md)

___

### collisionShape

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

**`Description`**

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

___

### collisionWithOtherCharacterEnable

• `get` **collisionWithOtherCharacterEnable**(): `boolean`

**`Description`**

能否与其他角色发生碰撞

#### Returns

`boolean`

• `set` **collisionWithOtherCharacterEnable**(`value`): `void`

**`Description`**

能否与其他角色发生碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### crouchEnable

• `get` **crouchEnable**(): `boolean`

**`Description`**

启用/禁用下蹲能力

#### Returns

`boolean`

• `set` **crouchEnable**(`canCrouch`): `void`

**`Description`**

启用/禁用下蹲能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCrouch` | `boolean` |

#### Returns

`void`

___

### crouchedHeight

• `get` **crouchedHeight**(): `number`

**`Description`**

下蹲时胶囊体的高度

#### Returns

`number`

• `set` **crouchedHeight**(`InCrouchedHeight`): `void`

**`Description`**

下蹲时胶囊体的高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCrouchedHeight` | `number` |

#### Returns

`void`


### gravityScale

• `get` **gravityScale**(): `number`

**`Description`**

重力倍率

**`Precautions`**

范围0~10, 过大和过小的值都会被限制

#### Returns

`number`

• `set` **gravityScale**(`newGravityScale`): `void`

**`Description`**

重力倍率

#### Parameters

| Name | Type |
| :------ | :------ |
| `newGravityScale` | `number` |

#### Returns

`void`

___

### groundFriction

• `get` **groundFriction**(): `number`

**`Description`**

地面摩檫力

#### Returns

`number`

• `set` **groundFriction**(`inGroundFriction`): `void`

**`Description`**

地面摩檫力

#### Parameters

| Name | Type |
| :------ | :------ |
| `inGroundFriction` | `number` |

#### Returns

`void`


### headUIVisible

• `get` **headUIVisible**(): `boolean`

**`Description`**

头顶UI是否可见

#### Returns

`boolean`

• `set` **headUIVisible**(`isVisible`): `void`

**`Description`**

头顶UI是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `isVisible` | `boolean` |

#### Returns

`void`

___

### headUIVisibleRange

• `get` **headUIVisibleRange**(): `number`

**`Description`**

头顶UI可见距离

#### Returns

`number`

• `set` **headUIVisibleRange**(`VisibleDistance`): `void`

**`Description`**

头顶UI可见距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `VisibleDistance` | `number` |

#### Returns

`void`

___

### isCrouching

• `get` **isCrouching**(): `boolean`

**`Description`**

是否处于下蹲状态

#### Returns

`boolean`

___

### isJumping

• `get` **isJumping**(): `boolean`

**`Description`**

是否正在跳跃

#### Returns

`boolean`

___

### isMoving

• `get` **isMoving**(): `boolean`

**`Description`**

是否正在移动

#### Returns

`boolean`

___

### jumpEnable

• `get` **jumpEnable**(): `boolean`

**`Description`**

启用/禁用跳跃能力

#### Returns

`boolean`

• `set` **jumpEnable**(`value`): `void`

**`Description`**

启用/禁用跳跃能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### jumpMaxCount

• `get` **jumpMaxCount**(): `number`

**`Description`**

最大可跳跃次数

#### Returns

`number`

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void`

**`Description`**

最大可跳跃次数

#### Parameters

| Name | Type |
| :------ | :------ |
| `InJumpMaxCount` | `number` |

#### Returns

`void`

___

### jumpingOutOfWaterEnable

• `get` **jumpingOutOfWaterEnable**(): `boolean`

**`Description`**

是否可以跳出水面

#### Returns

`boolean`

• `set` **jumpingOutOfWaterEnable**(`value`): `void`

**`Description`**

是否可以跳出水面

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### locallyVisible

• `get` **locallyVisible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

是否可见(本地设置)

#### Returns

`boolean`

• `set` **locallyVisible**(`inIsVisible`): `void`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:setVisibilityLocally()

**`Description`**

是否可见(本地设置)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inIsVisible` | `boolean` |

#### Returns

`void`


### maxAcceleration

• `get` **maxAcceleration**(): `number`

**`Description`**

最大加速度

#### Returns

`number`

• `set` **maxAcceleration**(`InMaxAcceleration`): `void`

**`Description`**

最大加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxAcceleration` | `number` |

#### Returns

`void`

___

### maxFallingSpeed

• `get` **maxFallingSpeed**(): `number`

**`Description`**

最大下落速度

#### Returns

`number`

• `set` **maxFallingSpeed**(`speed`): `void`

**`Description`**

最大下落速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `speed` | `number` |

#### Returns

`void`

___

### maxFlySpeed

• `get` **maxFlySpeed**(): `number`

**`Description`**

最大飞行速度

#### Returns

`number`

• `set` **maxFlySpeed**(`InMaxFlySpeed`): `void`

**`Description`**

最大飞行速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxFlySpeed` | `number` |

#### Returns

`void`

___

### maxJumpHeight

• `get` **maxJumpHeight**(): `number`

**`Description`**

最大跳跃高度

#### Returns

`number`

• `set` **maxJumpHeight**(`InMaxJumpHeight`): `void`

**`Description`**

最大跳跃高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxJumpHeight` | `number` |

#### Returns

`void`

___

### maxStepHeight

• `get` **maxStepHeight**(): `number`

**`Description`**

获取角色最大可跨越高度

#### Returns

`number`

• `set` **maxStepHeight**(`InMaxStepHeight`): `void`

**`Description`**

设置角色最大可跨越高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxStepHeight` | `number` |

#### Returns

`void`

___

### maxSwimSpeed

• `get` **maxSwimSpeed**(): `number`

**`Description`**

最大游泳速度

#### Returns

`number`

• `set` **maxSwimSpeed**(`InMaxSwimSpeed`): `void`

**`Description`**

最大游泳速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxSwimSpeed` | `number` |

#### Returns

`void`

___

### maxWalkSpeed

• `get` **maxWalkSpeed**(): `number`

**`Description`**

地面最大速度

#### Returns

`number`

• `set` **maxWalkSpeed**(`InMaxWalkSpeed`): `void`

**`Description`**

地面最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxWalkSpeed` | `number` |

#### Returns

`void`

___

### maxWalkSpeedCrouched

• `get` **maxWalkSpeedCrouched**(): `number`

**`Description`**

地面蹲伏行走时的最大移动速度

#### Returns

`number`

• `set` **maxWalkSpeedCrouched**(`maxSpeed`): `void`

**`Description`**

地面蹲伏行走时的最大移动速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSpeed` | `number` |

#### Returns

`void`

___

### moveEnable

• `get` **moveEnable**(): `boolean`

**`Description`**

启用/禁用移动能力

#### Returns

`boolean`

• `set` **moveEnable**(`value`): `void`

**`Description`**

启用/禁用移动能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### moveFacingDirection

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md)

**`Description`**

运动面朝方向

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md)

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void`

**`Description`**

运动面朝方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) |

#### Returns

`void`

___

### movementAxisDirection

• `get` **movementAxisDirection**(): [`Vector`](Type.Vector.md)

**`Description`**

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Returns

[`Vector`](Type.Vector.md)

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void`

**`Description`**

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementAxisDirection` | [`Vector`](Type.Vector.md) |

#### Returns

`void`

___

### movementDirection

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.MovementDirection.md)

**`Description`**

运动时依据的正方向

**`Precautions`**

如果是控制器方向, 就以控制器坐标系为轴;
如果是定轴方向，就以世界坐标系为轴;
如果是视线方向, 就以相机坐标系为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致.

#### Returns

[`MovementDirection`](../enums/Gameplay.MovementDirection.md)

• `set` **movementDirection**(`InMovementDirection`): `void`

**`Description`**

运动时依据的正方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.MovementDirection.md) |

#### Returns

`void`

___

### movementState

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.MovementMode.md)

**`Description`**

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.MovementMode.md)


### outOfWaterZ

• `get` **outOfWaterZ**(): `number`

**`Description`**

出水时Z轴方向上的速度

#### Returns

`number`

• `set` **outOfWaterZ**(`value`): `void`

**`Description`**

出水时Z轴方向上的速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`


### ragdollEnable

• `get` **ragdollEnable**(): `boolean`

**`Description`**

启用/禁用布娃娃状态

#### Returns

`boolean`

• `set` **ragdollEnable**(`value`): `void`

**`Description`**

启用/禁用布娃娃状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`


### rotateRate

• `get` **rotateRate**(): `number`

**`Description`**

最大转向速度

**`Precautions`**

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

#### Returns

`number`

• `set` **rotateRate**(`InRotateRate`): `void`

**`Description`**

最大转向速度

**`Precautions`**

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InRotateRate` | `number` |

#### Returns

`void`

___

### scale

• `get` **scale**(): [`Vector`](Type.Vector.md)

**`Description`**

角色胶囊体的缩放, 自动同步

#### Returns

[`Vector`](Type.Vector.md)

• `set` **scale**(`InCharacterScale`): `void`

**`Description`**

角色胶囊体的缩放, 自动同步

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCharacterScale` | [`Vector`](Type.Vector.md) |

#### Returns

`void`

___

### separateBrakingFrictionEnable

• `get` **separateBrakingFrictionEnable**(): `boolean`

**`Description`**

使用单独制动摩擦

#### Returns

`boolean`

• `set` **separateBrakingFrictionEnable**(`used`): `void`

**`Description`**

使用单独制动摩擦

#### Parameters

| Name | Type |
| :------ | :------ |
| `used` | `boolean` |

#### Returns

`void`


### usedCapsuleCorrection

• `get` **usedCapsuleCorrection**(): `boolean`

**`Description`**

使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Returns

`boolean`

• `set` **usedCapsuleCorrection**(`usedCapsuleCorrection`): `void`

**`Description`**

使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Parameters

| Name | Type |
| :------ | :------ |
| `usedCapsuleCorrection` | `boolean` |

#### Returns

`void`

___

### velocity

• `get` **velocity**(): [`Vector`](Type.Vector.md)

**`Description`**

当前移动速度

#### Returns

[`Vector`](Type.Vector.md)


### walkableFloorAngle

• `get` **walkableFloorAngle**(): `number`

**`Description`**

可行走的最大角度

#### Returns

`number`

• `set` **walkableFloorAngle**(`InWalkableFloorAngle`): `void`

**`Description`**

可行走的最大角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InWalkableFloorAngle` | `number` |

#### Returns

`void`


## Methods

### addImpulse

▸ **addImpulse**(`Vector`, `ignoreMass?`): `void`

**`Description`**

添加冲量

**`Effect`**

服务端调用生效

**`Precautions`**

质量固定为100, 受质量影响的算法为: 冲量按位除以质量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Vector` | [`Vector`](Type.Vector.md) | 应用的冲量 |
| `ignoreMass?` | `boolean` | 是否忽略质量对冲量的影响 default:false |

#### Returns

`void`

___

### addMoveInput

▸ **addMoveInput**(`direction`): `void`

**`Description`**

沿着给定的方向向量添加移动输入

**`Effect`**

调用端调用生效

**`Precautions`**

效果受movementDirection属性影响

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [`Vector`](Type.Vector.md) | 输入的方向 |

#### Returns

`void`

___

### appearanceReady

▸ **appearanceReady**(): `Promise`<`void`\>

**`Description`**

在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断

**`Effect`**

客户端

#### Returns

`Promise`<`void`\>

异步回调


### attach

▸ **attach**(`gameObject`, `slotName`): `void`

**`Description`**

将物体附着到人物角色的指定插槽

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体 |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽类型 |

#### Returns

`void`


### clearDecorations

▸ **clearDecorations**(): `void`

**`Description`**

清空所有挂件数据

**`Effect`**

客户端

#### Returns

`void`

___

### clearOneDecoration

▸ **clearOneDecoration**(`guid`): `void`

**`Description`**

删除一个挂件

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  实例化后的挂件对象Guid |

#### Returns

`void`


### crouch

▸ **crouch**(`isCrouch`): `void`

**`Description`**

下蹲

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isCrouch` | `boolean` | 是否下蹲 |

#### Returns

`void`


### getControlRotator

▸ **getControlRotator**(`Out?`): [`Rotation`](Type.Rotation.md)

**`Description`**

获取控制器的旋转

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Out?` | [`Rotation`](Type.Rotation.md) | 获取控制器旋转 default:出参，可选参数 |

#### Returns

[`Rotation`](Type.Rotation.md)

控制器的旋转

___

### getDecorations

▸ **getDecorations**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[]

**`Description`**

获取当前挂件实例化对象的Guid

**`Effect`**

客户端

#### Returns

[`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[]

guid数组


### getHeadUIWidget

▸ **getHeadUIWidget**(): [`UIWidget`](Gameplay.UIWidget.md)

**`Description`**

获取头顶UIWidget

**`Effect`**

调用端调用生效

#### Returns

[`UIWidget`](Gameplay.UIWidget.md)

头顶UIWidget对象


### getSlotName

▸ **getSlotName**(`slotType`): `string`

**`Description`**

获取对应插槽名称

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotType` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽类型 |

#### Returns

`string`

插槽名称(string)


### isPlayingAnimation

▸ **isPlayingAnimation**(): `boolean`

**`Description`**

是否正在播放动画

**`Effect`**

客户端调用生效

#### Returns

`boolean`

是否正在播放动画


### jump

▸ **jump**(): `void`

**`Description`**

跳跃

**`Effect`**

调用端调用生效

#### Returns

`void`

___

### loadAnimation

▸ **loadAnimation**(`guid`, `sync?`): [`Animation`](Gameplay.Animation.md)

**`Description`**

加载动画,获取到动画对象

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 动画GUID |
| `sync?` | `boolean` | Animation对象是否同步 default:true |

#### Returns

[`Animation`](Gameplay.Animation.md)

Animation 对象

___

### loadDecoration

▸ **loadDecoration**(`decorationString`, `callback`): `void`

**`Description`**

加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力

**`Effect`**

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorationString` | `string` |  一个挂件数据 |
| `callback` | [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback) |  挂件对象的Guid |

#### Returns

`void`

___

### loadSlotAndEditorDataByGuid

▸ **loadSlotAndEditorDataByGuid**(`guid`): `void`

**`Description`**

通过Guid加载插槽跟角色编辑数据

**`Effect`**

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | Slot Guid |

#### Returns

`void`

___

### loadSlotAndEditorDataByPath

▸ **loadSlotAndEditorDataByPath**(`relativePath`): `void`

**`Description`**

通过路径加载插槽跟角色编辑数据

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relativePath` | `string` | 相对路径 |

#### Returns

`void`

___

### loadStance

▸ **loadStance**(`guid`, `sync?`): [`SubStance`](Gameplay.SubStance.md)

**`Description`**

创建一个二级姿态对象并返回

**`Effect`**

任意端调用生效

**`Precautions`**

guid参数传入预制姿态资源GUID时, 会直接创建对应姿态;
传入动画资源GUID时, 会创建单动画姿态模板, 并将模板的动画槽位设置为指定的动画资源(动态创建单动画姿态).
即使在服务器上调用loadStance(), 如果sync参数置为false, 也不会同步操作到客户端.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  预制姿态资源guid或动画资源guid |
| `sync?` | `boolean` |  对姿态对象的操作是否自动同步 default:true |

#### Returns

[`SubStance`](Gameplay.SubStance.md)

二级姿态对象

___

### lookAt

▸ **lookAt**(`TargetPoint`): `void`

**`Description`**

角色面朝目标点

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TargetPoint` | [`Vector`](Type.Vector.md) | 目标点 |

#### Returns

`void`


### playAnimation

▸ **playAnimation**(`guid`, `loopCount?`, `rate?`): [`Animation`](Gameplay.Animation.md)

**`Description`**

播放动画,同时获取到动画对象,Animation对象接口是同步的

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 动画GUID |
| `loopCount?` | `number` | 循环播放次数, 范围0~2147483647, 设置为0时无限循环 default:1 |
| `rate?` | `number` | 播放速率，1表示正常速率 default:1 |

#### Returns

[`Animation`](Gameplay.Animation.md)

Animation 对象

___

### playAnimationLocally

▸ **playAnimationLocally**(`AnimationGuid`, `AnimationLength?`, `LoopCount?`): `void`

**`Deprecated`**

since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(guid,false) instead.

**`Description`**

本地播放动画

**`Effect`**

客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AnimationGuid` | `string` | 动画GUID |
| `AnimationLength?` | `number` | 播放时长 default:0 |
| `LoopCount?` | `number` | 循环播放次数, 范围0~2147483647, 设置为0时无限循环 default:1 |

#### Returns

`void`


### setAppearance

▸ **setAppearance**<`T`\>(`clz`): `T`

**`Description`**

设置外观修改功能

**`Effect`**

双端

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clz` | [`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\> | 外观修改接口类类型 |

#### Returns

`T`

外观修改对象


### setCollisionShapeAndExtent

▸ **setCollisionShapeAndExtent**(`ShapeType`, `CollisionExtent`): `void`

**`Description`**

设置不同形状不同大小的碰撞体

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShapeType` | [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) | 启用的碰撞形状 |
| `CollisionExtent` | [`Vector`](Type.Vector.md) | 启用的碰撞形状 |

#### Returns

`void`

___

### setLocallyVisibility

▸ **setLocallyVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(本地生效)

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:true |

#### Returns

`void`


### stopAnimation

▸ **stopAnimation**(`InAnimationGuid`): `void`

**`Deprecated`**

since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"

**`Description`**

停止播放动画

**`Effect`**

服务端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAnimationGuid` | `string` | 停止播放的动画的Guid |

#### Returns

`void`

___

### stopStance

▸ **stopStance**(`sync?`): `void`

**`Description`**

停止任何正在播放的姿态

**`Effect`**

可选同步

**`Precautions`**

当你不想保存执行play()后的姿态对象时, 可以直接调用这个方法停止姿态. 对单端对象操作时需要把它置为false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sync?` | `boolean` |  是否自动同步 default:true |

#### Returns

`void`

___

### swimmingDown

▸ **swimmingDown**(`speed`): `void`

**`Description`**

水中下潜

**`Effect`**

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 下潜速度不能超过MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

___

### swimmingUp

▸ **swimmingUp**(`speed`): `void`

**`Description`**

水中上浮

**`Effect`**

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 上浮速度不能超过MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

___

### switchToFlying

▸ **switchToFlying**(): `void`

**`Description`**

切换为飞行状态

**`Effect`**

调用端调用生效

#### Returns

`void`

___

### switchToWalking

▸ **switchToWalking**(): `void`

**`Description`**

切换为行走状态

**`Effect`**

调用端调用生效

#### Returns

`void`
