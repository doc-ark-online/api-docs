[Gameplay](../modules/Gameplay.Gameplay.md) / Character

# Character <Badge type="tip" text="Class" /> 

**`Description`**

Character拥有CharacterBase的所有功能，并且额外附带了CameraSystem，是由玩家控制的角色，通常被内置的输入系统所操作
             Character无法被用户主动实例化，根据当前Player的数量由世界自动生成，你可以在Player上获取Character，通过getAllPlayers可以获取到
             你可以在场景的Player面板中修改Character的初始化配置

::: warning Precautions

从019版本开始，Character的移动逻辑会受到客户端玩家的控制，尽量不要在服务器上去设置玩家角色的位置、角度，这导致会多一次RPC的调用，并且多出一次网络帧的延迟
             后续版本会提供更多可选择的移动逻辑，你可以根据不同游戏的特性来选择这些

:::

## Hierarchy

- [`CharacterBase`](Gameplay.CharacterBase.md)

  ↳ **`Character`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[isV1](Gameplay.CharacterBase.md#isv1)**: `any` <br> 判断当前角色是否是V1版本|
| **[onLoadAppearanceDataAllCompleted](Gameplay.CharacterBase.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑API成功后的回调|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 玩家对象|
:::


| Accessors |
| :-----|
| **[cameraSystem](Gameplay.Character.md#camerasystem)**(): [`CameraSystem`](Gameplay.CameraSystem.md) <br> 获得摄像机系统|
| **[onSkill1Triggered](Gameplay.Character.md#onskill1triggered)**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 技能1触发时调用委托|
| **[onSkill2Triggered](Gameplay.Character.md#onskill2triggered)**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 技能2触发时调用委托|
| **[onSkill3Triggered](Gameplay.Character.md#onskill3triggered)**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 技能3触发时调用委托|
| **[onSkill4Triggered](Gameplay.Character.md#onskill4triggered)**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 技能4触发时调用委托|
| **[onSkill5Triggered](Gameplay.Character.md#onskill5triggered)**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 技能5触发时调用委托|


::: details 点击查看继承
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
| **[forceUpdateMovement](Gameplay.CharacterBase.md#forceupdatemovement)**(`boolean` |): `void` <br> 启用/禁用强制更新移动|
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
:::


| Methods |
| :-----|


::: details 点击查看继承
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
| **[getDecorations](Gameplay.CharacterBase.md#getdecorations)**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <br> 获取当前挂件实例化对象的GUID|
| **[getHeadUIWidget](Gameplay.CharacterBase.md#getheaduiwidget)**(): [`UIWidget`](Gameplay.UIWidget.md) <br> 获取头顶UIWidget|
| **[getSlotName](Gameplay.CharacterBase.md#getslotname)**([`SlotType`](../enums/Gameplay.SlotType.md)): `string` <br> 获取对应插槽名称|
| **[isPlayingAnimation](Gameplay.CharacterBase.md#isplayinganimation)**(): `boolean` <br> 是否正在播放动画|
| **[jump](Gameplay.CharacterBase.md#jump)**(): `void` <br> 跳跃|
| **[loadAnimation](Gameplay.CharacterBase.md#loadanimation)**(`string`, `boolean`): [`Animation`](Gameplay.Animation.md) <br> 加载动画,获取到动画对象|
| **[loadDecoration](Gameplay.CharacterBase.md#loaddecoration)**(`string`, [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback)): `void` <br> 加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力|
| **[loadSlotAndEditorDataByGuid](Gameplay.CharacterBase.md#loadslotandeditordatabyguid)**(`string`): `void` <br> 通过GUID加载插槽跟角色编辑数据|
| **[loadSlotAndEditorDataByPath](Gameplay.CharacterBase.md#loadslotandeditordatabypath)**(`string`): `void` <br> 通过路径加载插槽跟角色编辑数据|
| **[loadStance](Gameplay.CharacterBase.md#loadstance)**(`string`, `boolean`): [`SubStance`](Gameplay.SubStance.md) <br> 创建一个二级姿态对象并返回|
| **[lookAt](Gameplay.CharacterBase.md#lookat)**([`Vector`](Type.Vector.md)): `void` <br> 角色面朝目标点|
| **[playAnimation](Gameplay.CharacterBase.md#playanimation)**(`string`, `number`, `number`): [`Animation`](Gameplay.Animation.md) <br> 播放动画,同时获取到动画对象,Animation对象接口是同步的|
| **[playAnimationLocally](Gameplay.CharacterBase.md#playanimationlocally)**(`string`, `number`, `number`): `void` <br> since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(GUID,false) instead.|
| **[setAppearance](Gameplay.CharacterBase.md#setappearance)**<extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> |\>([`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\>): extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> | <br> 设置外观修改功能|
| **[setCollisionShapeAndExtent](Gameplay.CharacterBase.md#setcollisionshapeandextent)**([`CustomShapeType`](../enums/Gameplay.CustomShapeType.md), [`Vector`](Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体|
| **[setLocallyVisibility](Gameplay.CharacterBase.md#setlocallyvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(本地生效)|
| **[stopAnimation](Gameplay.CharacterBase.md#stopanimation)**(`string`): `void` <br> since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"|
| **[stopStance](Gameplay.CharacterBase.md#stopstance)**(`boolean`): `void` <br> 停止任何正在播放的姿态|
| **[swimmingDown](Gameplay.CharacterBase.md#swimmingdown)**(`number`): `void` <br> 水中下潜|
| **[swimmingUp](Gameplay.CharacterBase.md#swimmingup)**(`number`): `void` <br> 水中上浮|
| **[switchToFlying](Gameplay.CharacterBase.md#switchtoflying)**(): `void` <br> 切换为飞行状态|
| **[switchToWalking](Gameplay.CharacterBase.md#switchtowalking)**(): `void` <br> 切换为行走状态|
:::


## Properties

## Accessors

### cameraSystem  

• `get` **cameraSystem**(): [`CameraSystem`](Gameplay.CameraSystem.md)

**`Description`**

获得摄像机系统

#### Returns

[`CameraSystem`](Gameplay.CameraSystem.md)


### onSkill1Triggered  

• `get` **onSkill1Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能1触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

___

### onSkill2Triggered  

• `get` **onSkill2Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能2触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

___

### onSkill3Triggered  

• `get` **onSkill3Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能3触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

___

### onSkill4Triggered  

• `get` **onSkill4Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能4触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

___

### onSkill5Triggered  

• `get` **onSkill5Triggered**(): [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

技能5触发时调用委托

#### Returns

[`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>


## Methods