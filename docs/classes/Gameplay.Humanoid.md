[Avatar](../groups/Avatar.Avatar.md) / Humanoid

# Humanoid <Badge type="tip" text="Class" /> <Score text="Humanoid" />

::: danger Deprecated

since:021 reason:功能迭代,请使用NPC对象 replacement:NPC

:::

在CharacterBase上派生的人形非玩家对象,限定了形象是人形,该对象通常被用户用于实现拥有自主功能的角色对象.
             生成方式:可以通过将人形对象(Humanoid_V2)放置在场景中,由场景反序列化生成对象,也可以通过代码动态生成:Core.GameObject.spawnGameObject;

::: warning Precautions

该对象目前耦合了形象和角色对象.建议开发者更换新的非玩家对象(NPC)实现功能
             后续人形对象(Humanoid)将不再为维护.

:::

## Hierarchy

- [`CharacterBase`](Gameplay.CharacterBase.md)

  ↳ **`Humanoid`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onLoadAppearanceDataAllCompleted](Gameplay.CharacterBase.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onLoadDecorationsAllCompleted](Gameplay.CharacterBase.md#onloaddecorationsallcompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadDecorationsAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loaddecorationsallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑API成功后的回调|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 玩家对象|
:::


| Accessors |
| :-----|
| **[serverCalculateEnable](Gameplay.Humanoid.md#servercalculateenable)**(`enable`: `boolean`): `void` <br> 开/关 npc的功能,现包含(角色的网络同步，角色移动)未来可能会添加其他计算|
| **[serverMovementEnable](Gameplay.Humanoid.md#servermovementenable)**(`value`: `boolean`): `void` <br> 开关角色的移动计算|


::: details 点击查看继承
| Accessors |
| :-----|
| **[airControl](Gameplay.CharacterBase.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[airControlBoostMultiplier](Gameplay.CharacterBase.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数|
| **[airControlBoostVelocityThreshold](Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍|
| **[animationMode](Gameplay.CharacterBase.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[animationStance](Gameplay.CharacterBase.md#animationstance)**(): `string` <br> 动画姿态|
| **[appearance](Gameplay.CharacterBase.md#appearance)**(): [`SomatotypeBase`](Gameplay.SomatotypeBase.md) <br> 当前外观修改对象|
| **[appearanceType](Gameplay.CharacterBase.md#appearancetype)**(): [`AppearanceType`](../enums/Gameplay.AppearanceType.md) <br> 形象类型|
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
| **[forceUpdateMovement](Gameplay.CharacterBase.md#forceupdatemovement)**(`value`: `boolean`): `void` <br> 启用/禁用强制更新移动|
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
| **[locallyVisible](Gameplay.CharacterBase.md#locallyvisible)**(): `boolean` <br> 是否可见(本地设置)|
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
| **[ondestroy](Gameplay.Humanoid.md#ondestroy-1)**(): `void` <br> 删除对象|


::: details 点击查看继承
| Methods |
| :-----|
| **[addImpulse](Gameplay.CharacterBase.md#addimpulse)**(`Vector`: [`Vector`](Type.Vector.md), `ignoreMass?`: `boolean`): `void` <br> 添加冲量|
| **[addMoveInput](Gameplay.CharacterBase.md#addmoveinput)**(`direction`: [`Vector`](Type.Vector.md)): `void` <br> 沿着给定的方向向量添加移动输入|
| **[appearanceReady](Gameplay.CharacterBase.md#appearanceready)**(): `Promise`<`void`\> <br> 在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断|
| **[attach](Gameplay.CharacterBase.md#attach)**(`gameObject`: `GameObject`, `slotName`: [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到人物角色的指定插槽|
| **[clearAppearance](Gameplay.CharacterBase.md#clearappearance)**(): `void` <br> 清空角色形象数据|
| **[clearDecorations](Gameplay.CharacterBase.md#cleardecorations)**(): `void` <br> 清空所有挂件数据|
| **[clearOneDecoration](Gameplay.CharacterBase.md#clearonedecoration)**(`GUID`: `string`): `void` <br> 删除一个挂件|
| **[crouch](Gameplay.CharacterBase.md#crouch)**(`isCrouch`: `boolean`): `void` <br> 下蹲|
| **[getAppearance](Gameplay.CharacterBase.md#getappearance)**<`T`: extends [`HumanoidV1`](Gameplay.HumanoidV1.md) \\>(): `T`: extends [`HumanoidV1`](Gameplay.HumanoidV1.md) \ <br> 设置外观修改功能|
| **[getControlRotator](Gameplay.CharacterBase.md#getcontrolrotator)**(`Out?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取控制器的旋转|
| **[getDecorations](Gameplay.CharacterBase.md#getdecorations)**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <br> 获取当前挂件实例化对象的GUID|
| **[getHeadUIWidget](Gameplay.CharacterBase.md#getheaduiwidget)**(): [`UIWidget`](Gameplay.UIWidget.md) <br> 获取头顶UIWidget|
| **[getSlotName](Gameplay.CharacterBase.md#getslotname)**(`slotType`: [`SlotType`](../enums/Gameplay.SlotType.md)): `string` <br> 获取对应插槽名称|
| **[isPlayingAnimation](Gameplay.CharacterBase.md#isplayinganimation)**(): `boolean` <br> 是否正在播放动画|
| **[jump](Gameplay.CharacterBase.md#jump)**(): `void` <br> 跳跃|
| **[loadAnimation](Gameplay.CharacterBase.md#loadanimation)**(`GUID`: `string`, `sync?`: `boolean`): [`Animation`](Gameplay.Animation.md) <br> 加载动画,获取到动画对象，playAnimation是个快速实现功能的接口,可配置参数有限。loadAnimation可以返回动画,以进行更加精细的动画控制，获取到对象后需用户自己配置参数，手动调用play接口动画才会播放。|
| **[loadDecoration](Gameplay.CharacterBase.md#loaddecoration)**(`decorationString`: `string`, `callback`: [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback)): `void` <br> 加载挂件,给移动角色编辑器提供的能力|
| **[loadSlotAndEditorDataByGuid](Gameplay.CharacterBase.md#loadslotandeditordatabyguid)**(`GUID`: `string`): `void` <br> 通过GUID加载插槽跟角色编辑数据|
| **[loadSlotAndEditorDataByPath](Gameplay.CharacterBase.md#loadslotandeditordatabypath)**(`relativePath`: `string`): `void` <br> 通过路径加载插槽跟角色编辑数据|
| **[loadStance](Gameplay.CharacterBase.md#loadstance)**(`GUID`: `string`, `sync?`: `boolean`): [`SubStance`](Gameplay.SubStance.md) <br> 创建一个二级姿态对象并返回|
| **[lookAt](Gameplay.CharacterBase.md#lookat)**(`TargetPoint`: [`Vector`](Type.Vector.md)): `void` <br> 角色面朝目标点|
| **[playAnimation](Gameplay.CharacterBase.md#playanimation)**(`GUID`: `string`, `loopCount?`: `number`, `rate?`: `number`): [`Animation`](Gameplay.Animation.md) <br> 播放动画,同时获取到动画对象,Animation对象接口默认是同步的，playanimation是个快速实现功能的接口,可配置参数有限，loadanimation 可以返回动画,以进行更加精细的动画控制。|
| **[playAnimationLocally](Gameplay.CharacterBase.md#playanimationlocally)**(`AnimationGuid`: `string`, `AnimationLength?`: `number`, `LoopCount?`: `number`): `void` <br> 本地播放动画|
| **[setAppearance](Gameplay.CharacterBase.md#setappearance)**<`T`: extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\>\>(`clz`: [`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\>): `T`: extends [`SomatotypeBase`](Gameplay.SomatotypeBase.md)<`T`\> <br> 设置外观修改功能|
| **[setCollisionShapeAndExtent](Gameplay.CharacterBase.md#setcollisionshapeandextent)**(`ShapeType`: [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md), `CollisionExtent`: [`Vector`](Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体|
| **[setLocallyVisibility](Gameplay.CharacterBase.md#setlocallyvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置是否被显示(本地生效)|
| **[stopAnimation](Gameplay.CharacterBase.md#stopanimation)**(`InAnimationGuid`: `string`): `void` <br> 停止播放动画|
| **[stopStance](Gameplay.CharacterBase.md#stopstance)**(`sync?`: `boolean`): `void` <br> 停止任何正在播放的姿态|
| **[swimmingDown](Gameplay.CharacterBase.md#swimmingdown)**(`speed`: `number`): `void` <br> 水中下潜|
| **[swimmingUp](Gameplay.CharacterBase.md#swimmingup)**(`speed`: `number`): `void` <br> 水中上浮|
| **[switchToFlying](Gameplay.CharacterBase.md#switchtoflying)**(): `void` <br> 切换为飞行状态|
| **[switchToSwimming](Gameplay.CharacterBase.md#switchtoswimming)**(): `void` <br> 切换为游泳状态|
| **[switchToWalking](Gameplay.CharacterBase.md#switchtowalking)**(): `void` <br> 切换为行走状态|
:::


## Properties

## Accessors

### serverCalculateEnable <Score text="serverCalculateEnable" /> 

• `set` **serverCalculateEnable**(`enable`): `void` 

开/关 npc的功能,现包含(角色的网络同步，角色移动)未来可能会添加其他计算


::: warning Precautions

如果场景中存在大量闲置NPC,暂时不会参与到游戏中，可使用设置false节约一些额外的性能消耗，当NPC需要参与到游戏中时设置true开启对应的功能。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |


___

### serverMovementEnable <Score text="serverMovementEnable" /> 

• `set` **serverMovementEnable**(`value`): `void` <Badge type="tip" text="other" />

开关角色的移动计算

调用端自动广播

::: warning Precautions

针对处于静默状态的ai调用用于降低移动计算带来的性能消耗，如果ai角色需要参与到游戏中请开启移动计算

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  true 开启角色移动计算 false 关闭角色移动计算 |



## Methods

### ondestroy <Score text="ondestroy" /> 

• **ondestroy**(): `void` 

删除对象


