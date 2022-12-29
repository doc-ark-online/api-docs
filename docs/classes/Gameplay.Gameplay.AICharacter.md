[Gameplay](../modules/Gameplay.Gameplay.md) / AICharacter

# AICharacter <Badge type="tip" text="Class" />

**`Description`**

人形对象

## Hierarchy

- [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)

  ↳ **`AICharacter`**

## Table of contents

| Properties |
| :-----|
| **[onLoadAppearanceDataAllCompleted](Gameplay.Gameplay.AICharacter.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onMeshChanged](Gameplay.Gameplay.AICharacter.md#onmeshchanged)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播|
| **[onMovementStateChanged](Gameplay.Gameplay.AICharacter.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onSetAppearanceDataCompleted](Gameplay.Gameplay.AICharacter.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑API成功后的回调|
| **[onTextureChanged](Gameplay.Gameplay.AICharacter.md#ontexturechanged)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播|
| **[player](Gameplay.Gameplay.AICharacter.md#player)**: [`Player`](Gameplay.Gameplay.Player.md) <br> 玩家对象|

| Accessors |
| :-----|
| **[airControl](Gameplay.Gameplay.AICharacter.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[airControlBoostMultiplier](Gameplay.Gameplay.AICharacter.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数|
| **[airControlBoostVelocityThreshold](Gameplay.Gameplay.AICharacter.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍|
| **[animationMode](Gameplay.Gameplay.AICharacter.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[animationStance](Gameplay.Gameplay.AICharacter.md#animationstance)**(): `string` <br> 动画姿态|
| **[appearance](Gameplay.Gameplay.AICharacter.md#appearance)**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md) <br> 当前外观修改对象|
| **[baseShadowLocationOffset](Gameplay.Gameplay.AICharacter.md#baseshadowlocationoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 模拟阴影相对于角色脚底中心的位置偏移|
| **[baseShadowMaxVisibleHeight](Gameplay.Gameplay.AICharacter.md#baseshadowmaxvisibleheight)**(): `number` <br> 模拟阴影可见的最大离地高度|
| **[baseShadowScale](Gameplay.Gameplay.AICharacter.md#baseshadowscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 模拟阴影的缩放|
| **[basicStance](Gameplay.Gameplay.AICharacter.md#basicstance)**(): `string` <br> 基础姿态|
| **[basicStanceAimOffsetEnable](Gameplay.Gameplay.AICharacter.md#basicstanceaimoffsetenable)**(): `boolean` <br> 是否基础姿态的开启瞄准偏移|
| **[brakingDecelerationFalling](Gameplay.Gameplay.AICharacter.md#brakingdecelerationfalling)**(): `number` <br> 下落制动速率|
| **[brakingDecelerationFlying](Gameplay.Gameplay.AICharacter.md#brakingdecelerationflying)**(): `number` <br> 飞行制动速率|
| **[brakingDecelerationSwimming](Gameplay.Gameplay.AICharacter.md#brakingdecelerationswimming)**(): `number` <br> 游泳制动速率|
| **[brakingDecelerationWalking](Gameplay.Gameplay.AICharacter.md#brakingdecelerationwalking)**(): `number` <br> 行走制动速率|
| **[canSetAppearanceData](Gameplay.Gameplay.AICharacter.md#cansetappearancedata)**(): `boolean` <br> 是否可以设置角色形象数据|
| **[canStepUpOn](Gameplay.Gameplay.AICharacter.md#canstepupon)**(): `boolean` <br> 获取组件是否可以被玩家站立|
| **[capsuleHalfHeight](Gameplay.Gameplay.AICharacter.md#capsulehalfheight)**(): `number` <br> 胶囊体半高|
| **[capsuleRadius](Gameplay.Gameplay.AICharacter.md#capsuleradius)**(): `number` <br> 胶囊体半径|
| **[characterName](Gameplay.Gameplay.AICharacter.md#charactername)**(): `string` <br> 角色名称|
| **[collisionEnable](Gameplay.Gameplay.AICharacter.md#collisionenable)**(): `boolean` <br> 是否开启碰撞|
| **[collisionExtent](Gameplay.Gameplay.AICharacter.md#collisionextent)**(): [`Vector`](Type.Type.Vector.md) <br> 碰撞形状的大小|
| **[collisionShape](Gameplay.Gameplay.AICharacter.md#collisionshape)**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md) <br> 碰撞形状|
| **[collisionWithOtherCharacterEnable](Gameplay.Gameplay.AICharacter.md#collisionwithothercharacterenable)**(): `boolean` <br> 能否与其他角色发生碰撞|
| **[crouchEnable](Gameplay.Gameplay.AICharacter.md#crouchenable)**(): `boolean` <br> 启用/禁用下蹲能力|
| **[crouchedHeight](Gameplay.Gameplay.AICharacter.md#crouchedheight)**(): `number` <br> 下蹲时胶囊体的高度|
| **[forwardVector](Gameplay.Gameplay.AICharacter.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[gravityScale](Gameplay.Gameplay.AICharacter.md#gravityscale)**(): `number` <br> 重力倍率|
| **[groundFriction](Gameplay.Gameplay.AICharacter.md#groundfriction)**(): `number` <br> 地面摩檫力|
| **[guid](Gameplay.Gameplay.AICharacter.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[headUIVisible](Gameplay.Gameplay.AICharacter.md#headuivisible)**(): `boolean` <br> 头顶UI是否可见|
| **[headUIVisibleRange](Gameplay.Gameplay.AICharacter.md#headuivisiblerange)**(): `number` <br> 头顶UI可见距离|
| **[isCrouching](Gameplay.Gameplay.AICharacter.md#iscrouching)**(): `boolean` <br> 是否处于下蹲状态|
| **[isJumping](Gameplay.Gameplay.AICharacter.md#isjumping)**(): `boolean` <br> 是否正在跳跃|
| **[isMoving](Gameplay.Gameplay.AICharacter.md#ismoving)**(): `boolean` <br> 是否正在移动|
| **[jumpEnable](Gameplay.Gameplay.AICharacter.md#jumpenable)**(): `boolean` <br> 启用/禁用跳跃能力|
| **[jumpMaxCount](Gameplay.Gameplay.AICharacter.md#jumpmaxcount)**(): `number` <br> 最大可跳跃次数|
| **[jumpingOutOfWaterEnable](Gameplay.Gameplay.AICharacter.md#jumpingoutofwaterenable)**(): `boolean` <br> 是否可以跳出水面|
| **[locallyVisible](Gameplay.Gameplay.AICharacter.md#locallyvisible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[lockStatus](Gameplay.Gameplay.AICharacter.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[maxAcceleration](Gameplay.Gameplay.AICharacter.md#maxacceleration)**(): `number` <br> 最大加速度|
| **[maxFallingSpeed](Gameplay.Gameplay.AICharacter.md#maxfallingspeed)**(): `number` <br> 最大下落速度|
| **[maxFlySpeed](Gameplay.Gameplay.AICharacter.md#maxflyspeed)**(): `number` <br> 最大飞行速度|
| **[maxJumpHeight](Gameplay.Gameplay.AICharacter.md#maxjumpheight)**(): `number` <br> 最大跳跃高度|
| **[maxStepHeight](Gameplay.Gameplay.AICharacter.md#maxstepheight)**(): `number` <br> 获取角色最大可跨越高度|
| **[maxSwimSpeed](Gameplay.Gameplay.AICharacter.md#maxswimspeed)**(): `number` <br> 最大游泳速度|
| **[maxWalkSpeed](Gameplay.Gameplay.AICharacter.md#maxwalkspeed)**(): `number` <br> 地面最大速度|
| **[maxWalkSpeedCrouched](Gameplay.Gameplay.AICharacter.md#maxwalkspeedcrouched)**(): `number` <br> 地面蹲伏行走时的最大移动速度|
| **[moveEnable](Gameplay.Gameplay.AICharacter.md#moveenable)**(): `boolean` <br> 启用/禁用移动能力|
| **[moveFacingDirection](Gameplay.Gameplay.AICharacter.md#movefacingdirection)**(): [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md) <br> 运动面朝方向|
| **[movementAxisDirection](Gameplay.Gameplay.AICharacter.md#movementaxisdirection)**(): [`Vector`](Type.Type.Vector.md) <br> 运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效|
| **[movementDirection](Gameplay.Gameplay.AICharacter.md#movementdirection)**(): [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md) <br> 运动时依据的正方向|
| **[movementState](Gameplay.Gameplay.AICharacter.md#movementstate)**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md) <br> 当前角色运动状态|
| **[name](Gameplay.Gameplay.AICharacter.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.AICharacter.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[outOfWaterZ](Gameplay.Gameplay.AICharacter.md#outofwaterz)**(): `number` <br> 出水时Z轴方向上的速度|
| **[parent](Gameplay.Gameplay.AICharacter.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[ragdollEnable](Gameplay.Gameplay.AICharacter.md#ragdollenable)**(): `boolean` <br> 启用/禁用布娃娃状态|
| **[relativeLocation](Gameplay.Gameplay.AICharacter.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.AICharacter.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.AICharacter.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.AICharacter.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[rotateRate](Gameplay.Gameplay.AICharacter.md#rotaterate)**(): `number` <br> 最大转向速度|
| **[scale](Gameplay.Gameplay.AICharacter.md#scale)**(): [`Vector`](Type.Type.Vector.md) <br> 角色胶囊体的缩放, 自动同步|
| **[separateBrakingFrictionEnable](Gameplay.Gameplay.AICharacter.md#separatebrakingfrictionenable)**(): `boolean` <br> 使用单独制动摩擦|
| **[serverCalculateEnable](Gameplay.Gameplay.AICharacter.md#servercalculateenable)**(`boolean`): `void` <br> 同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算|
| **[staticStatus](Gameplay.Gameplay.AICharacter.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.AICharacter.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.AICharacter.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.AICharacter.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.AICharacter.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[usedCapsuleCorrection](Gameplay.Gameplay.AICharacter.md#usedcapsulecorrection)**(): `boolean` <br> 使用胶囊体修正 true代表应用角色编辑中的数据自动计算胶囊体大小。false代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。|
| **[velocity](Gameplay.Gameplay.AICharacter.md#velocity)**(): [`Vector`](Type.Type.Vector.md) <br> 当前移动速度|
| **[visible](Gameplay.Gameplay.AICharacter.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[walkableFloorAngle](Gameplay.Gameplay.AICharacter.md#walkablefloorangle)**(): `number` <br> 可行走的最大角度|
| **[worldLocation](Gameplay.Gameplay.AICharacter.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.AICharacter.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.AICharacter.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.AICharacter.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[addImpulse](Gameplay.Gameplay.AICharacter.md#addimpulse)**([`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 添加冲量|
| **[addMoveInput](Gameplay.Gameplay.AICharacter.md#addmoveinput)**([`Vector`](Type.Type.Vector.md)): `void` <br> 沿着给定的方向向量添加移动输入|
| **[appearanceReady](Gameplay.Gameplay.AICharacter.md#appearanceready)**(): `Promise`<`void`\> <br> 在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断|
| **[asyncGetScriptByName](Gameplay.Gameplay.AICharacter.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attach](Gameplay.Gameplay.AICharacter.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `void` <br> 将物体附着到人物角色的指定插槽|
| **[attachToGameObject](Gameplay.Gameplay.AICharacter.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clearDecorations](Gameplay.Gameplay.AICharacter.md#cleardecorations)**(): `void` <br> 清空所有挂件数据|
| **[clearOneDecoration](Gameplay.Gameplay.AICharacter.md#clearonedecoration)**(`string`): `void` <br> 删除一个挂件|
| **[clone](Gameplay.Gameplay.AICharacter.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[crouch](Gameplay.Gameplay.AICharacter.md#crouch)**(`boolean`): `void` <br> 下蹲|
| **[deleteDestroyCallback](Gameplay.Gameplay.AICharacter.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.AICharacter.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.AICharacter.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.Gameplay.AICharacter.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.AICharacter.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.AICharacter.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.AICharacter.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.AICharacter.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.AICharacter.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.AICharacter.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getControlRotator](Gameplay.Gameplay.AICharacter.md#getcontrolrotator)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取控制器的旋转|
| **[getDecorations](Gameplay.Gameplay.AICharacter.md#getdecorations)**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <br> 获取当前挂件实例化对象的Guid|
| **[getForwardVector](Gameplay.Gameplay.AICharacter.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getHeadUIWidget](Gameplay.Gameplay.AICharacter.md#getheaduiwidget)**(): [`UIWidget`](Gameplay.Gameplay.UIWidget.md) <br> 获取头顶UIWidget|
| **[getRelativeLocation](Gameplay.Gameplay.AICharacter.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.AICharacter.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.AICharacter.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.AICharacter.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.AICharacter.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.AICharacter.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.AICharacter.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSlotName](Gameplay.Gameplay.AICharacter.md#getslotname)**([`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `string` <br> 获取对应插槽名称|
| **[getSourceAssetGuid](Gameplay.Gameplay.AICharacter.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.AICharacter.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Gameplay.AICharacter.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.AICharacter.md#getvisibility)**(): `boolean` <br> 获取是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.AICharacter.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.AICharacter.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.AICharacter.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isPlayingAnimation](Gameplay.Gameplay.AICharacter.md#isplayinganimation)**(): `boolean` <br> 是否正在播放动画|
| **[isRunningClient](Gameplay.Gameplay.AICharacter.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[jump](Gameplay.Gameplay.AICharacter.md#jump)**(): `void` <br> 跳跃|
| **[loadAnimation](Gameplay.Gameplay.AICharacter.md#loadanimation)**(`string`, `boolean`): [`Animation`](Gameplay.Gameplay.Animation.md) <br> 加载动画,获取到动画对象|
| **[loadDecoration](Gameplay.Gameplay.AICharacter.md#loaddecoration)**(`string`, [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback)): `void` <br> 加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力|
| **[loadSlotAndEditorDataByGuid](Gameplay.Gameplay.AICharacter.md#loadslotandeditordatabyguid)**(`string`): `void` <br> 通过Guid加载插槽跟角色编辑数据|
| **[loadSlotAndEditorDataByPath](Gameplay.Gameplay.AICharacter.md#loadslotandeditordatabypath)**(`string`): `void` <br> 通过路径加载插槽跟角色编辑数据|
| **[loadStance](Gameplay.Gameplay.AICharacter.md#loadstance)**(`string`, `boolean`): [`SubStance`](Gameplay.Gameplay.SubStance.md) <br> 创建一个二级姿态对象并返回|
| **[lookAt](Gameplay.Gameplay.AICharacter.md#lookat)**([`Vector`](Type.Type.Vector.md)): `void` <br> 角色面朝目标点|
| **[onDestroy](Gameplay.Gameplay.AICharacter.md#ondestroy)**(): `void` <br> onDestroy 生命周期函数|
| **[onStart](Gameplay.Gameplay.AICharacter.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.AICharacter.md#onupdate)**(`number`): `void` <br> onUpdate 生命周期函数|
| **[playAnimation](Gameplay.Gameplay.AICharacter.md#playanimation)**(`string`, `number`, `number`): [`Animation`](Gameplay.Gameplay.Animation.md) <br> 播放动画,同时获取到动画对象,Animation对象接口是同步的|
| **[playAnimationLocally](Gameplay.Gameplay.AICharacter.md#playanimationlocally)**(`string`, `number`, `number`): `void` <br> since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(guid,false) instead.|
| **[ready](Gameplay.Gameplay.AICharacter.md#ready)**(): `Promise`<[`AICharacter`](Gameplay.Gameplay.AICharacter.md)\> <br> GameObject准备好后返回|
| **[setAppearance](Gameplay.Gameplay.AICharacter.md#setappearance)**<extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\> |\>([`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\>): extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\> | <br> 设置外观修改功能|
| **[setCollision](Gameplay.Gameplay.AICharacter.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setCollisionShapeAndExtent](Gameplay.Gameplay.AICharacter.md#setcollisionshapeandextent)**([`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md), [`Vector`](Type.Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体|
| **[setLocallyVisibility](Gameplay.Gameplay.AICharacter.md#setlocallyvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(本地生效)|
| **[setLocationAndRotation](Gameplay.Gameplay.AICharacter.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.AICharacter.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.AICharacter.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.AICharacter.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setServerMovementEnable](Gameplay.Gameplay.AICharacter.md#setservermovementenable)**(`boolean`): `void` <br> 开关角色的移动计算|
| **[setTransform](Gameplay.Gameplay.AICharacter.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.AICharacter.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(自动同步)|
| **[setWorldLocation](Gameplay.Gameplay.AICharacter.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.AICharacter.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.AICharacter.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[stopAnimation](Gameplay.Gameplay.AICharacter.md#stopanimation)**(`string`): `void` <br> since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"|
| **[stopStance](Gameplay.Gameplay.AICharacter.md#stopstance)**(`boolean`): `void` <br> 停止任何正在播放的姿态|
| **[swimmingDown](Gameplay.Gameplay.AICharacter.md#swimmingdown)**(`number`): `void` <br> 水中下潜|
| **[swimmingUp](Gameplay.Gameplay.AICharacter.md#swimmingup)**(`number`): `void` <br> 水中上浮|
| **[switchToFlying](Gameplay.Gameplay.AICharacter.md#switchtoflying)**(): `void` <br> 切换为飞行状态|
| **[switchToWalking](Gameplay.Gameplay.AICharacter.md#switchtowalking)**(): `void` <br> 切换为行走状态|
| **[asyncFind](Gameplay.Gameplay.AICharacter.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.AICharacter.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.AICharacter.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.AICharacter.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.AICharacter.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.AICharacter.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.AICharacter.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Properties

### onLoadAppearanceDataAllCompleted

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

___

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

___

### onMovementStateChanged

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

**`Description`**

移动状态切换时的回调

___

### onSetAppearanceDataCompleted

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑API成功后的回调

___

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

___

### player

• **player**: [`Player`](Gameplay.Gameplay.Player.md)

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

• `get` **animationMode**(): [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

**`Description`**

动画播放模式

#### Returns

[`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md)

• `set` **animationMode**(`mode`): `void`

**`Description`**

动画播放模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md) |

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

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

**`Description`**

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

___

### baseShadowLocationOffset

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Returns

[`Vector2`](Type.Type.Vector2.md)

• `set` **baseShadowLocationOffset**(`InLocationOffset`): `void`

**`Description`**

模拟阴影相对于角色脚底中心的位置偏移

#### Parameters

| Name | Type |
| :------ | :------ |
| `InLocationOffset` | [`Vector2`](Type.Type.Vector2.md) |

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

• `get` **baseShadowScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

模拟阴影的缩放

#### Returns

[`Vector2`](Type.Type.Vector2.md)

• `set` **baseShadowScale**(`InScale`): `void`

**`Description`**

模拟阴影的缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `InScale` | [`Vector2`](Type.Type.Vector2.md) |

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

• `get` **collisionExtent**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞形状的大小

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### collisionShape

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

**`Description`**

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

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

___

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

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

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

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

___

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

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

• `get` **moveFacingDirection**(): [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

**`Description`**

运动面朝方向

#### Returns

[`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md)

• `set` **moveFacingDirection**(`InMoveFacingDirection`): `void`

**`Description`**

运动面朝方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md) |

#### Returns

`void`

___

### movementAxisDirection

• `get` **movementAxisDirection**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void`

**`Description`**

运动时依据的轴方向, 只有当前的MovementDirection为AxisDirection时有效

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementAxisDirection` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

### movementDirection

• `get` **movementDirection**(): [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

**`Description`**

运动时依据的正方向

**`Precautions`**

如果是控制器方向, 就以控制器坐标系为轴;
如果是定轴方向，就以世界坐标系为轴;
如果是视线方向, 就以相机坐标系为轴. 在玩家相机不存在Z轴旋转时, 控制器方向和视线方向效果一致, 人形对象的控制器方向和视线方向效果永远一致.

#### Returns

[`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md)

• `set` **movementDirection**(`InMovementDirection`): `void`

**`Description`**

运动时依据的正方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md) |

#### Returns

`void`

___

### movementState

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

**`Description`**

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

___

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

___

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

___

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

___

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |

#### Returns

`void`

___

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

___

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放 |

#### Returns

`void`

___

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

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

• `get` **scale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

角色胶囊体的缩放, 自动同步

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **scale**(`InCharacterScale`): `void`

**`Description`**

角色胶囊体的缩放, 自动同步

#### Parameters

| Name | Type |
| :------ | :------ |
| `InCharacterScale` | [`Vector`](Type.Type.Vector.md) |

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

___

### serverCalculateEnable

• `set` **serverCalculateEnable**(`enable`): `void`

**`Description`**

同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算

**`Effect`**

可双端直接调用

**`Precautions`**

针对处于静默状态的ai调用用于降低暂时不必要的计算带来的性能消耗，如果ai角色需要参与到游戏中请开启

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |

#### Returns

`void`

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |

#### Returns

`void`

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的transform |

#### Returns

`void`

___

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

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

• `get` **velocity**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前移动速度

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

是否可见

#### Returns

`boolean`

• `set` **visible**(`inIsVisible`): `void`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:setVisibility()

**`Description`**

是否可见

#### Parameters

| Name | Type |
| :------ | :------ |
| `inIsVisible` | `boolean` |

#### Returns

`void`

___

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

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

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
| `Vector` | [`Vector`](Type.Type.Vector.md) | 应用的冲量 |
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
| `direction` | [`Vector`](Type.Type.Vector.md) | 输入的方向 |

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

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

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
| `slotName` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽类型 |

#### Returns

`void`

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |

#### Returns

`void`

___

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

___

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

___

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

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取GameObject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |

#### Returns

`void`

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`GameObject`

查找的物体

___

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

___

### getControlRotator

▸ **getControlRotator**(`Out?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取控制器的旋转

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Out?` | [`Rotation`](Type.Type.Rotation.md) | 获取控制器旋转 default:出参，可选参数 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

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

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getHeadUIWidget

▸ **getHeadUIWidget**(): [`UIWidget`](Gameplay.Gameplay.UIWidget.md)

**`Description`**

获取头顶UIWidget

**`Effect`**

调用端调用生效

#### Returns

[`UIWidget`](Gameplay.Gameplay.UIWidget.md)

头顶UIWidget对象

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`Script`

Script

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

___

### getSlotName

▸ **getSlotName**(`slotType`): `string`

**`Description`**

获取对应插槽名称

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽类型 |

#### Returns

`string`

插槽名称(string)

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

___

### isPlayingAnimation

▸ **isPlayingAnimation**(): `boolean`

**`Description`**

是否正在播放动画

**`Effect`**

客户端调用生效

#### Returns

`boolean`

是否正在播放动画

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

___

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

▸ **loadAnimation**(`guid`, `sync?`): [`Animation`](Gameplay.Gameplay.Animation.md)

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

[`Animation`](Gameplay.Gameplay.Animation.md)

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

▸ **loadStance**(`guid`, `sync?`): [`SubStance`](Gameplay.Gameplay.SubStance.md)

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

[`SubStance`](Gameplay.Gameplay.SubStance.md)

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
| `TargetPoint` | [`Vector`](Type.Type.Vector.md) | 目标点 |

#### Returns

`void`

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

onDestroy 生命周期函数

**`Effect`**

自动调用

#### Returns

`void`

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

onUpdate 生命周期函数

**`Effect`**

自动调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 函数调用间隔 |

#### Returns

`void`

___

### playAnimation

▸ **playAnimation**(`guid`, `loopCount?`, `rate?`): [`Animation`](Gameplay.Gameplay.Animation.md)

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

[`Animation`](Gameplay.Gameplay.Animation.md)

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

___

### ready

▸ **ready**(): `Promise`<[`AICharacter`](Gameplay.Gameplay.AICharacter.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`AICharacter`](Gameplay.Gameplay.AICharacter.md)\>

准备好的对象

___

### setAppearance

▸ **setAppearance**<`T`\>(`clz`): `T`

**`Description`**

设置外观修改功能

**`Effect`**

双端

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clz` | [`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\> | 外观修改接口类类型 |

#### Returns

`T`

外观修改对象

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |

#### Returns

`void`

___

### setCollisionShapeAndExtent

▸ **setCollisionShapeAndExtent**(`ShapeType`, `CollisionExtent`): `void`

**`Description`**

设置不同形状不同大小的碰撞体

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShapeType` | [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md) | 启用的碰撞形状 |
| `CollisionExtent` | [`Vector`](Type.Type.Vector.md) | 启用的碰撞形状 |

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:true |

#### Returns

`void`

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转 |

#### Returns

`void`

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

___

### setServerMovementEnable

▸ **setServerMovementEnable**(`value`): `void`

**`Description`**

开关角色的移动计算

**`Effect`**

可双端直接调用

**`Precautions`**

针对处于静默状态的ai调用用于降低移动计算带来的性能消耗，如果ai角色需要参与到游戏中请开启移动计算

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  true 开启角色移动计算 false 关闭角色移动计算 |

#### Returns

`void`

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform |

#### Returns

`void`

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(自动同步)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:true |

#### Returns

`void`

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |  要设置的世界坐标 |

#### Returns

`void`

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

___

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

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的guid |

#### Returns

`Promise`<`GameObject`\>

Guid对应的物体

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的GameObject

___

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过Guid查找GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的Guid |

#### Returns

`GameObject`

Guid对应的物体

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
