[Gameplay](../modules/Gameplay.Gameplay.md) / CharacterBase

# CharacterBase <Badge type="tip" text="Class" /> <Score text="CharacterBase" />

CharacterBase是一个具有外观和动画表现，且内置移动逻辑的GameObject，具备GameObject的所有功能。
             CharacterBase是玩家角色和非玩家角色的基类，可以在场景中行走、跳跃、飞行和游泳，可与世界中的所有物理效果交互
             CharacterBase通常会有默认的形象，你也可以对不同的形象进行编辑，以及选择设置为无形象
             你无法对CharacterBase进行实例化，它只用于提供玩家角色和非玩家角色的通用功能

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


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


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


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### isV1 <Score text="isV" /> 

• `Private` **isV1**: `any` <Badge type="tip" text="other" />

判断当前角色是否是V1版本

调用端调用生效

___

### onLoadAppearanceDataAllCompleted <Score text="onLoadAppearanceDataAllCompleted" /> 

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

加载完角色形象数据后的回调

___

### onMeshChanged <Score text="onMeshChanged" /> 

• **onMeshChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

角色模型切换成功广播

___

### onMovementStateChanged <Score text="onMovementStateChanged" /> 

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

移动状态切换时的回调

___

### onSetAppearanceDataCompleted <Score text="onSetAppearanceDataCompleted" /> 

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

设置一个角色编辑API成功后的回调

___

### onTextureChanged <Score text="onTextureChanged" /> 

• **onTextureChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

角色贴图切换成功广播

___

### player <Score text="player" /> 

• **player**: [`Player`](Gameplay.Player.md)

玩家对象

## Accessors

### airControl <Score text="airControl" /> 

• `get` **airControl**(): `number`

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

#### Returns

`number`

• `set` **airControl**(`InAirControl`): `void`

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions

范围:0~1, 0表示不能控制, 1表示能按地面最大移动速率完全控制

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControl` | `number` |


___

### airControlBoostMultiplier <Score text="airControlBoostMultiplier" /> 

• `get` **airControlBoostMultiplier**(): `number`

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

::: warning Precautions

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

#### Returns

`number`

• `set` **airControlBoostMultiplier**(`InAirControlBoostMultiplier`): `void`

当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数

::: warning Precautions

范围:大于等于0的数字, 取0时, 不会对airControl效果加倍, 无论取值多大, airControl最大值都被限制为1

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostMultiplier` | `number` |


___

### airControlBoostVelocityThreshold <Score text="airControlBoostVelocityThreshold" /> 

• `get` **airControlBoostVelocityThreshold**(): `number`

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

::: warning Precautions

范围: 大于等于0

:::

#### Returns

`number`

• `set` **airControlBoostVelocityThreshold**(`InAirControlBoostVelocityThreshold`): `void`

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍

::: warning Precautions

范围: 大于等于0

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InAirControlBoostVelocityThreshold` | `number` |


___

### animationMode <Score text="animationMode" /> 

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md)

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.AnimationMode.md)

• `set` **animationMode**(`mode`): `void`

动画播放模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`AnimationMode`](../enums/Gameplay.AnimationMode.md) |


___

### animationStance <Score text="animationStance" /> 

• `get` **animationStance**(): `string`

动画姿态

::: warning Precautions

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的GUID进行动画姿态的切换, 传入空字符串时, 清除动画姿态

:::

#### Returns

`string`

• `set` **animationStance**(`StanceGUID`): `void`

动画姿态

::: warning Precautions

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的GUID进行动画姿态的切换, 传入空字符串时, 清除动画姿态

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `StanceGUID` | `string` |


___

### appearance <Score text="appearance" /> 

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.SomatotypeBase.md)

___

### baseShadowLocationOffset <Score text="baseShadowLocationOffset" /> 

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Vector2.md)

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowLocationOffset**(`InLocationOffset`): `void`

模拟阴影相对于角色脚底中心的位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InLocationOffset` | [`Vector2`](Type.Vector2.md) |


___

### baseShadowMaxVisibleHeight <Score text="baseShadowMaxVisibleHeight" /> 

• `get` **baseShadowMaxVisibleHeight**(): `number`

模拟阴影可见的最大离地高度

#### Returns

`number`

• `set` **baseShadowMaxVisibleHeight**(`InHeight`): `void`

模拟阴影可见的最大离地高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InHeight` | `number` |


___

### baseShadowScale <Score text="baseShadowScale" /> 

• `get` **baseShadowScale**(): [`Vector2`](Type.Vector2.md)

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Vector2.md)

• `set` **baseShadowScale**(`InScale`): `void`

模拟阴影的缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `InScale` | [`Vector2`](Type.Vector2.md) |


___

### basicStance <Score text="basicStance" /> 

• `get` **basicStance**(): `string`

基础姿态

::: warning Precautions

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的GUID进行基础姿态的切换

:::

#### Returns

`string`

• `set` **basicStance**(`InBasicStance`): `void`

基础姿态

::: warning Precautions

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的GUID进行基础姿态的切换

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBasicStance` | `string` |


___

### basicStanceAimOffsetEnable <Score text="basicStanceAimOffsetEnable" /> 

• `get` **basicStanceAimOffsetEnable**(): `boolean`

是否基础姿态的开启瞄准偏移

#### Returns

`boolean`

• `set` **basicStanceAimOffsetEnable**(`InbEnableAimOffset`): `void`

是否基础姿态的开启瞄准偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableAimOffset` | `boolean` |


___

### brakingDecelerationFalling <Score text="brakingDecelerationFalling" /> 

• `get` **brakingDecelerationFalling**(): `number`

下落制动速率

#### Returns

`number`

• `set` **brakingDecelerationFalling**(`InBrakingDecelerationFalling`): `void`

下落制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFalling` | `number` |


___

### brakingDecelerationFlying <Score text="brakingDecelerationFlying" /> 

• `get` **brakingDecelerationFlying**(): `number`

飞行制动速率

#### Returns

`number`

• `set` **brakingDecelerationFlying**(`InBrakingDecelerationFlying`): `void`

飞行制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationFlying` | `number` |


___

### brakingDecelerationSwimming <Score text="brakingDecelerationSwimming" /> 

• `get` **brakingDecelerationSwimming**(): `number`

游泳制动速率

#### Returns

`number`

• `set` **brakingDecelerationSwimming**(`InBrakingDecelerationSwimming`): `void`

游泳制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationSwimming` | `number` |


___

### brakingDecelerationWalking <Score text="brakingDecelerationWalking" /> 

• `get` **brakingDecelerationWalking**(): `number`

行走制动速率

#### Returns

`number`

• `set` **brakingDecelerationWalking**(`InBrakingDecelerationWalking`): `void`

行走制动速率

#### Parameters

| Name | Type |
| :------ | :------ |
| `InBrakingDecelerationWalking` | `number` |


___

### canSetAppearanceData <Score text="canSetAppearanceData" /> 

• `get` **canSetAppearanceData**(): `boolean`

是否可以设置角色形象数据

#### Returns

`boolean`

___

### canStepUpOn <Score text="canStepUpOn" /> 

• `get` **canStepUpOn**(): `boolean` <Badge type="tip" text="other" />

获取组件是否可以被玩家站立

调用端调用生效

#### Returns

`boolean`

true 其他角色可以站到玩家头上  false 其他角色不可以站到玩家头上

• `set` **canStepUpOn**(`CanStepUpOn`): `void` <Badge type="tip" text="other" />

设置组件是否可以被玩家站立

服务端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `CanStepUpOn` | `boolean` |


___

### capsuleHalfHeight <Score text="capsuleHalfHeight" /> 

• `get` **capsuleHalfHeight**(): `number`

胶囊体半高

#### Returns

`number`

• `set` **capsuleHalfHeight**(`InCapsuleHalfHeight`): `void`

胶囊体半高

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleHalfHeight` | `number` |


___

### capsuleRadius <Score text="capsuleRadius" /> 

• `get` **capsuleRadius**(): `number`

胶囊体半径

#### Returns

`number`

• `set` **capsuleRadius**(`InCapsuleRadius`): `void`

胶囊体半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCapsuleRadius` | `number` |


___

### characterName <Score text="characterName" /> 

• `get` **characterName**(): `string`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Returns

`string`

• `set` **characterName**(`inCharacterName`): `void`

角色名称

::: warning Precautions

会显示在角色头顶UI上

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCharacterName` | `string` |


___

### collisionEnable <Score text="collisionEnable" /> 

• `get` **collisionEnable**(): `boolean`

是否开启碰撞

#### Returns

`boolean`

• `set` **collisionEnable**(`InbEnableCollision`): `void`

是否开启碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `InbEnableCollision` | `boolean` |


___

### collisionExtent <Score text="collisionExtent" /> 

• `get` **collisionExtent**(): [`Vector`](Type.Vector.md)

碰撞形状的大小

#### Returns

[`Vector`](Type.Vector.md)

___

### collisionShape <Score text="collisionShape" /> 

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.CustomShapeType.md)

___

### collisionWithOtherCharacterEnable <Score text="collisionWithOtherCharacterEnable" /> 

• `get` **collisionWithOtherCharacterEnable**(): `boolean`

能否与其他角色发生碰撞

#### Returns

`boolean`

• `set` **collisionWithOtherCharacterEnable**(`value`): `void`

能否与其他角色发生碰撞

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### crouchEnable <Score text="crouchEnable" /> 

• `get` **crouchEnable**(): `boolean`

启用/禁用下蹲能力

#### Returns

`boolean`

• `set` **crouchEnable**(`canCrouch`): `void`

启用/禁用下蹲能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `canCrouch` | `boolean` |


___

### crouchedHeight <Score text="crouchedHeight" /> 

• `get` **crouchedHeight**(): `number`

下蹲时胶囊体的高度

#### Returns

`number`

• `set` **crouchedHeight**(`InCrouchedHeight`): `void`

下蹲时胶囊体的高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCrouchedHeight` | `number` |


___

### forceUpdateMovement <Score text="forceUpdateMovement" /> 

• `set` **forceUpdateMovement**(`value`): `void` <Badge type="tip" text="other" />

启用/禁用强制更新移动


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### gravityScale <Score text="gravityScale" /> 

• `get` **gravityScale**(): `number`

重力倍率

::: warning Precautions

范围0~10, 过大和过小的值都会被限制

:::

#### Returns

`number`

• `set` **gravityScale**(`newGravityScale`): `void`

重力倍率

#### Parameters

| Name | Type |
| :------ | :------ |
| `newGravityScale` | `number` |


___

### groundFriction <Score text="groundFriction" /> 

• `get` **groundFriction**(): `number`

地面摩檫力

#### Returns

`number`

• `set` **groundFriction**(`inGroundFriction`): `void`

地面摩檫力

#### Parameters

| Name | Type |
| :------ | :------ |
| `inGroundFriction` | `number` |



### headUIVisible <Score text="headUIVisible" /> 

• `get` **headUIVisible**(): `boolean`

头顶UI是否可见

#### Returns

`boolean`

• `set` **headUIVisible**(`isVisible`): `void`

头顶UI是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `isVisible` | `boolean` |


___

### headUIVisibleRange <Score text="headUIVisibleRange" /> 

• `get` **headUIVisibleRange**(): `number`

头顶UI可见距离

#### Returns

`number`

• `set` **headUIVisibleRange**(`VisibleDistance`): `void`

头顶UI可见距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `VisibleDistance` | `number` |


___

### isCrouching <Score text="isCrouching" /> 

• `get` **isCrouching**(): `boolean`

是否处于下蹲状态

#### Returns

`boolean`

___

### isJumping <Score text="isJumping" /> 

• `get` **isJumping**(): `boolean`

是否正在跳跃

#### Returns

`boolean`

___

### isMoving <Score text="isMoving" /> 

• `get` **isMoving**(): `boolean`

是否正在移动

#### Returns

`boolean`

___

### jumpEnable <Score text="jumpEnable" /> 

• `get` **jumpEnable**(): `boolean`

启用/禁用跳跃能力

#### Returns

`boolean`

• `set` **jumpEnable**(`value`): `void`

启用/禁用跳跃能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### jumpMaxCount <Score text="jumpMaxCount" /> 

• `get` **jumpMaxCount**(): `number`

最大可跳跃次数

#### Returns

`number`

• `set` **jumpMaxCount**(`InJumpMaxCount`): `void`

最大可跳跃次数

#### Parameters

| Name | Type |
| :------ | :------ |
| `InJumpMaxCount` | `number` |


___

### jumpingOutOfWaterEnable <Score text="jumpingOutOfWaterEnable" /> 

• `get` **jumpingOutOfWaterEnable**(): `boolean`

是否可以跳出水面

#### Returns

`boolean`

• `set` **jumpingOutOfWaterEnable**(`value`): `void`

是否可以跳出水面

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### locallyVisible <Score text="locallyVisible" /> 

• `get` **locallyVisible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

是否可见(本地设置)

#### Returns

`boolean`

• `set` **locallyVisible**(`inIsVisible`): `void`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:setVisibilityLocally()

是否可见(本地设置)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inIsVisible` | `boolean` |



### maxAcceleration <Score text="maxAcceleration" /> 

• `get` **maxAcceleration**(): `number`

最大加速度

#### Returns

`number`

• `set` **maxAcceleration**(`InMaxAcceleration`): `void`

最大加速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxAcceleration` | `number` |


___

### maxFallingSpeed <Score text="maxFallingSpeed" /> 

• `get` **maxFallingSpeed**(): `number`

最大下落速度

#### Returns

`number`

• `set` **maxFallingSpeed**(`speed`): `void`

最大下落速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `speed` | `number` |


___

### maxFlySpeed <Score text="maxFlySpeed" /> 

• `get` **maxFlySpeed**(): `number`

最大飞行速度

#### Returns

`number`

• `set` **maxFlySpeed**(`InMaxFlySpeed`): `void`

最大飞行速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxFlySpeed` | `number` |


___

### maxJumpHeight <Score text="maxJumpHeight" /> 

• `get` **maxJumpHeight**(): `number`

最大跳跃高度

#### Returns

`number`

• `set` **maxJumpHeight**(`InMaxJumpHeight`): `void`

最大跳跃高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxJumpHeight` | `number` |


___

### maxStepHeight <Score text="maxStepHeight" /> 

• `get` **maxStepHeight**(): `number`

获取角色最大可跨越高度

#### Returns

`number`

• `set` **maxStepHeight**(`InMaxStepHeight`): `void`

设置角色最大可跨越高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxStepHeight` | `number` |


___

### maxSwimSpeed <Score text="maxSwimSpeed" /> 

• `get` **maxSwimSpeed**(): `number`

最大游泳速度

#### Returns

`number`

• `set` **maxSwimSpeed**(`InMaxSwimSpeed`): `void`

最大游泳速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxSwimSpeed` | `number` |


___

### maxWalkSpeed <Score text="maxWalkSpeed" /> 

• `get` **maxWalkSpeed**(): `number`

地面最大速度

#### Returns

`number`

• `set` **maxWalkSpeed**(`InMaxWalkSpeed`): `void`

地面最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMaxWalkSpeed` | `number` |


___

### maxWalkSpeedCrouched <Score text="maxWalkSpeedCrouched" /> 

• `get` **maxWalkSpeedCrouched**(): `number`

地面蹲伏行走时的最大移动速度

#### Returns

`number`

• `set` **maxWalkSpeedCrouched**(`maxSpeed`): `void`

地面蹲伏行走时的最大移动速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSpeed` | `number` |


___

### moveEnable <Score text="moveEnable" /> 

• `get` **moveEnable**(): `boolean`

启用/禁用移动能力

#### Returns

`boolean`

• `set` **moveEnable**(`value`): `void`

启用/禁用移动能力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### moveFacingDirection <Score text="moveFacingDirection" /> 

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md)

运动面朝方向

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md)

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void`

运动面朝方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.MoveFacingDirection.md) |


___

### movementAxisDirection <Score text="movementAxisDirection" /> 

• `get` **movementAxisDirection**(): [`Vector`](Type.Vector.md)

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Returns

[`Vector`](Type.Vector.md)

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void`

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementAxisDirection` | [`Vector`](Type.Vector.md) |


___

### movementDirection <Score text="movementDirection" /> 

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.MovementDirection.md)

运动时依据的正方向

::: warning Precautions

如果是控制器方向, 就以控制器坐标系为轴;
如果是定轴方向，就以世界坐标系为轴;
如果是视线方向, 就以相机坐标系为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致.

:::

#### Returns

[`MovementDirection`](../enums/Gameplay.MovementDirection.md)

• `set` **movementDirection**(`InMovementDirection`): `void`

运动时依据的正方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.MovementDirection.md) |


___

### movementState <Score text="movementState" /> 

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.MovementMode.md)

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.MovementMode.md)


### outOfWaterZ <Score text="outOfWaterZ" /> 

• `get` **outOfWaterZ**(): `number`

出水时Z轴方向上的速度

#### Returns

`number`

• `set` **outOfWaterZ**(`value`): `void`

出水时Z轴方向上的速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



### ragdollEnable <Score text="ragdollEnable" /> 

• `get` **ragdollEnable**(): `boolean`

启用/禁用布娃娃状态

#### Returns

`boolean`

• `set` **ragdollEnable**(`value`): `void`

启用/禁用布娃娃状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |



### rotateRate <Score text="rotateRate" /> 

• `get` **rotateRate**(): `number`

最大转向速度

::: warning Precautions

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

:::

#### Returns

`number`

• `set` **rotateRate**(`InRotateRate`): `void`

最大转向速度

::: warning Precautions

设置为负值时, 转向速度被视为无限大, 可以瞬间转向

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `InRotateRate` | `number` |


___

### scale <Score text="scale" /> 

• `get` **scale**(): [`Vector`](Type.Vector.md)

角色胶囊体的缩放, 自动同步

#### Returns

[`Vector`](Type.Vector.md)

• `set` **scale**(`InCharacterScale`): `void`

角色胶囊体的缩放, 自动同步

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCharacterScale` | [`Vector`](Type.Vector.md) |


___

### separateBrakingFrictionEnable <Score text="separateBrakingFrictionEnable" /> 

• `get` **separateBrakingFrictionEnable**(): `boolean`

使用单独制动摩擦

#### Returns

`boolean`

• `set` **separateBrakingFrictionEnable**(`used`): `void`

使用单独制动摩擦

#### Parameters

| Name | Type |
| :------ | :------ |
| `used` | `boolean` |



### usedCapsuleCorrection <Score text="usedCapsuleCorrection" /> 

• `get` **usedCapsuleCorrection**(): `boolean`

使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Returns

`boolean`

• `set` **usedCapsuleCorrection**(`usedCapsuleCorrection`): `void`

使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Parameters

| Name | Type |
| :------ | :------ |
| `usedCapsuleCorrection` | `boolean` |


___

### velocity <Score text="velocity" /> 

• `get` **velocity**(): [`Vector`](Type.Vector.md)

当前移动速度

#### Returns

[`Vector`](Type.Vector.md)


### walkableFloorAngle <Score text="walkableFloorAngle" /> 

• `get` **walkableFloorAngle**(): `number`

可行走的最大角度

#### Returns

`number`

• `set` **walkableFloorAngle**(`InWalkableFloorAngle`): `void`

可行走的最大角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `InWalkableFloorAngle` | `number` |



## Methods

### addImpulse <Score text="addImpulse" /> 

▸ **addImpulse**(`Vector`, `ignoreMass?`): `void` <Badge type="tip" text="other" />

添加冲量

服务端调用生效

::: warning Precautions

质量固定为100, 受质量影响的算法为: 冲量按位除以质量

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Vector` | [`Vector`](Type.Vector.md) | 应用的冲量 |
| `ignoreMass?` | `boolean` | 是否忽略质量对冲量的影响 default:false |


___

### addMoveInput <Score text="addMoveInput" /> 

▸ **addMoveInput**(`direction`): `void` <Badge type="tip" text="other" />

沿着给定的方向向量添加移动输入

调用端调用生效

::: warning Precautions

效果受movementDirection属性影响

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [`Vector`](Type.Vector.md) | 输入的方向 |


___

### appearanceReady <Score text="appearanceReady" /> 

▸ **appearanceReady**(): `Promise`<`void`\> <Badge type="tip" text="other" />

在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断

客户端

#### Returns

`Promise`<`void`\>

异步回调


### attach <Score text="attach" /> 

▸ **attach**(`gameObject`, `slotName`): `void` <Badge type="tip" text="other" />

将物体附着到人物角色的指定插槽

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体 |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽类型 |



### clearDecorations <Score text="clearDecorations" /> 

▸ **clearDecorations**(): `void` <Badge type="tip" text="other" />

清空所有挂件数据

客户端


___

### clearOneDecoration <Score text="clearOneDecoration" /> 

▸ **clearOneDecoration**(`GUID`): `void` <Badge type="tip" text="other" />

删除一个挂件

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  实例化后的挂件对象GUID |



### crouch <Score text="crouch" /> 

▸ **crouch**(`isCrouch`): `void` <Badge type="tip" text="other" />

下蹲

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isCrouch` | `boolean` | 是否下蹲 |



### getControlRotator <Score text="getControlRotator" /> 

▸ **getControlRotator**(`Out?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

获取控制器的旋转

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Out?` | [`Rotation`](Type.Rotation.md) | 获取控制器旋转 default:出参，可选参数 |

#### Returns

[`Rotation`](Type.Rotation.md)

控制器的旋转

___

### getDecorations <Score text="getDecorations" /> 

▸ **getDecorations**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <Badge type="tip" text="other" />

获取当前挂件实例化对象的GUID

客户端

#### Returns

[`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[]

GUID数组


### getHeadUIWidget <Score text="getHeadUIWidget" /> 

▸ **getHeadUIWidget**(): [`UIWidget`](Gameplay.UIWidget.md) <Badge type="tip" text="other" />

获取头顶UIWidget

调用端调用生效

#### Returns

[`UIWidget`](Gameplay.UIWidget.md)

头顶UIWidget对象


### getSlotName <Score text="getSlotName" /> 

▸ **getSlotName**(`slotType`): `string` <Badge type="tip" text="other" />

获取对应插槽名称

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotType` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽类型 |

#### Returns

`string`

插槽名称(string)


### isPlayingAnimation <Score text="isPlayingAnimation" /> 

▸ **isPlayingAnimation**(): `boolean` <Badge type="tip" text="other" />

是否正在播放动画

客户端调用生效

#### Returns

`boolean`

是否正在播放动画


### jump <Score text="jump" /> 

▸ **jump**(): `void` <Badge type="tip" text="other" />

跳跃

调用端调用生效


___

### loadAnimation <Score text="loadAnimation" /> 

▸ **loadAnimation**(`GUID`, `sync?`): [`Animation`](Gameplay.Animation.md) <Badge type="tip" text="other" />

加载动画,获取到动画对象

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 动画GUID |
| `sync?` | `boolean` | Animation对象是否同步 default:true |

#### Returns

[`Animation`](Gameplay.Animation.md)

Animation 对象

___

### loadDecoration <Score text="loadDecoration" /> 

▸ **loadDecoration**(`decorationString`, `callback`): `void` <Badge type="tip" text="other" />

加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorationString` | `string` |  一个挂件数据 |
| `callback` | [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback) |  挂件对象的GUID |


___

### loadSlotAndEditorDataByGuid <Score text="loadSlotAndEditorDataByGuid" /> 

▸ **loadSlotAndEditorDataByGuid**(`GUID`): `void` <Badge type="tip" text="other" />

通过GUID加载插槽跟角色编辑数据

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |


___

### loadSlotAndEditorDataByPath <Score text="loadSlotAndEditorDataByPath" /> 

▸ **loadSlotAndEditorDataByPath**(`relativePath`): `void` <Badge type="tip" text="other" />

通过路径加载插槽跟角色编辑数据

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relativePath` | `string` | 相对路径 |


___

### loadStance <Score text="loadStance" /> 

▸ **loadStance**(`GUID`, `sync?`): [`SubStance`](Gameplay.SubStance.md)

创建一个二级姿态对象并返回

任意端调用生效

::: warning Precautions

即使在服务器上调用loadStance(), 如果sync参数置为false, 也不会同步操作到客户端. <Badge type="tip" text="other" />

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  预制姿态资源GUID或动画资源GUID |
| `sync?` | `boolean` |  对姿态对象的操作是否自动同步 default:true |

#### Returns

[`SubStance`](Gameplay.SubStance.md)

二级姿态对象

___

### lookAt <Score text="lookAt" /> 

▸ **lookAt**(`TargetPoint`): `void` <Badge type="tip" text="other" />

角色面朝目标点

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TargetPoint` | [`Vector`](Type.Vector.md) | 目标点 |



### playAnimation <Score text="playAnimation" /> 

▸ **playAnimation**(`GUID`, `loopCount?`, `rate?`): [`Animation`](Gameplay.Animation.md) <Badge type="tip" text="other" />

播放动画,同时获取到动画对象,Animation对象接口是同步的

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 动画GUID |
| `loopCount?` | `number` | 循环播放次数, 范围0~2147483647, 设置为0时无限循环 default:1 |
| `rate?` | `number` | 播放速率，1表示正常速率 default:1 |

#### Returns

[`Animation`](Gameplay.Animation.md)

Animation 对象

___

### playAnimationLocally <Score text="playAnimationLocally" /> 

▸ **playAnimationLocally**(`AnimationGuid`, `AnimationLength?`, `LoopCount?`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(GUID,false) instead.

本地播放动画

客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AnimationGuid` | `string` | 动画GUID |
| `AnimationLength?` | `number` | 播放时长 default:0 |
| `LoopCount?` | `number` | 循环播放次数, 范围0~2147483647, 设置为0时无限循环 default:1 |



### setAppearance <Score text="setAppearance" /> 

▸ **setAppearance**<`T`\>(`clz`): `T` <Badge type="tip" text="other" />

设置外观修改功能

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


### setCollisionShapeAndExtent <Score text="setCollisionShapeAndExtent" /> 

▸ **setCollisionShapeAndExtent**(`ShapeType`, `CollisionExtent`): `void` <Badge type="tip" text="other" />

设置不同形状不同大小的碰撞体

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShapeType` | [`CustomShapeType`](../enums/Gameplay.CustomShapeType.md) | 启用的碰撞形状 |
| `CollisionExtent` | [`Vector`](Type.Vector.md) | 启用的碰撞形状 |


___

### setLocallyVisibility <Score text="setLocallyVisibility" /> 

▸ **setLocallyVisibility**(`status`, `propagateToChildren?`): `void` <Badge type="tip" text="other" />

设置是否被显示(本地生效)

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:true |



### stopAnimation <Score text="stopAnimation" /> 

▸ **stopAnimation**(`InAnimationGuid`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"

停止播放动画

服务端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAnimationGuid` | `string` | 停止播放的动画的GUID |


___

### stopStance <Score text="stopStance" /> 

▸ **stopStance**(`sync?`): `void` <Badge type="tip" text="other" />

停止任何正在播放的姿态

可选同步

::: warning Precautions

当你不想保存执行play()后的姿态对象时, 可以直接调用这个方法停止姿态. 对单端对象操作时需要把sync参数置为false.

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sync?` | `boolean` |  是否自动同步 default:true |


___

### swimmingDown <Score text="swimmingDown" /> 

▸ **swimmingDown**(`speed`): `void` <Badge type="tip" text="other" />

水中下潜

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 下潜速度不能超过MaxSwimSpeed(游泳最大速度) |


___

### swimmingUp <Score text="swimmingUp" /> 

▸ **swimmingUp**(`speed`): `void` <Badge type="tip" text="other" />

水中上浮

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `speed` | `number` | 上浮速度不能超过MaxSwimSpeed(游泳最大速度) |


___

### switchToFlying <Score text="switchToFlying" /> 

▸ **switchToFlying**(): `void` <Badge type="tip" text="other" />

切换为飞行状态

调用端调用生效


___

### switchToWalking <Score text="switchToWalking" /> 

▸ **switchToWalking**(): `void` <Badge type="tip" text="other" />

切换为行走状态

调用端调用生效

