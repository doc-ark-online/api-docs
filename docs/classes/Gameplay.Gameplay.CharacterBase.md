[Gameplay](../modules/Gameplay.Gameplay.md) / CharacterBase

# CharacterBase <Badge type="tip" text="Class" />

**`Description`**

角色基类

## Hierarchy

- `GameObject`

  ↳ **`CharacterBase`**

  ↳↳ [`AICharacter`](Gameplay.Gameplay.AICharacter.md)

  ↳↳ [`Character`](Gameplay.Gameplay.Character.md)

  ↳↳ [`Humanoid`](Gameplay.Gameplay.Humanoid.md)

## Table of contents

| Properties                                                                                                                                                                                                                                                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[isV1](Gameplay.Gameplay.CharacterBase.md#isv1)**: `any` <br> 判断当前角色是否是 V1 版本                                                                                                                                                                                                                              |
| **[onLoadAppearanceDataAllCompleted](Gameplay.Gameplay.CharacterBase.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调 |
| **[onMeshChanged](Gameplay.Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播                                                                           |
| **[onMovementStateChanged](Gameplay.Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调                                                                                                                   |
| **[onSetAppearanceDataCompleted](Gameplay.Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑 API 成功后的回调                            |
| **[onTextureChanged](Gameplay.Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播                                                                     |
| **[player](Gameplay.Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Gameplay.Player.md) <br> 玩家对象                                                                                                                                                                                                          |

| Accessors                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[airControl](Gameplay.Gameplay.CharacterBase.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度                                                                                                                                  |
| **[airControlBoostMultiplier](Gameplay.Gameplay.CharacterBase.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比 airControlBoostVelocityThreshold 小时, 对 airControl 效果加倍的倍数                                              |
| **[airControlBoostVelocityThreshold](Gameplay.Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照 airControlBoostMultiplier 的值对 airControl 效果进行加倍 |
| **[animationMode](Gameplay.Gameplay.CharacterBase.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md) <br> 动画播放模式                                                                                                |
| **[animationStance](Gameplay.Gameplay.CharacterBase.md#animationstance)**(): `string` <br> 动画姿态                                                                                                                                                      |
| **[appearance](Gameplay.Gameplay.CharacterBase.md#appearance)**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md) <br> 当前外观修改对象                                                                                                         |
| **[baseShadowLocationOffset](Gameplay.Gameplay.CharacterBase.md#baseshadowlocationoffset)**(): [`Vector2`](Type.Type.Vector2.md) <br> 模拟阴影相对于角色脚底中心的位置偏移                                                                               |
| **[baseShadowMaxVisibleHeight](Gameplay.Gameplay.CharacterBase.md#baseshadowmaxvisibleheight)**(): `number` <br> 模拟阴影可见的最大离地高度                                                                                                              |
| **[baseShadowScale](Gameplay.Gameplay.CharacterBase.md#baseshadowscale)**(): [`Vector2`](Type.Type.Vector2.md) <br> 模拟阴影的缩放                                                                                                                       |
| **[basicStance](Gameplay.Gameplay.CharacterBase.md#basicstance)**(): `string` <br> 基础姿态                                                                                                                                                              |
| **[basicStanceAimOffsetEnable](Gameplay.Gameplay.CharacterBase.md#basicstanceaimoffsetenable)**(): `boolean` <br> 是否基础姿态的开启瞄准偏移                                                                                                             |
| **[brakingDecelerationFalling](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationfalling)**(): `number` <br> 下落制动速率                                                                                                                            |
| **[brakingDecelerationFlying](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationflying)**(): `number` <br> 飞行制动速率                                                                                                                              |
| **[brakingDecelerationSwimming](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationswimming)**(): `number` <br> 游泳制动速率                                                                                                                          |
| **[brakingDecelerationWalking](Gameplay.Gameplay.CharacterBase.md#brakingdecelerationwalking)**(): `number` <br> 行走制动速率                                                                                                                            |
| **[canSetAppearanceData](Gameplay.Gameplay.CharacterBase.md#cansetappearancedata)**(): `boolean` <br> 是否可以设置角色形象数据                                                                                                                           |
| **[canStepUpOn](Gameplay.Gameplay.CharacterBase.md#canstepupon)**(): `boolean` <br> 获取组件是否可以被玩家站立                                                                                                                                           |
| **[capsuleHalfHeight](Gameplay.Gameplay.CharacterBase.md#capsulehalfheight)**(): `number` <br> 胶囊体半高                                                                                                                                                |
| **[capsuleRadius](Gameplay.Gameplay.CharacterBase.md#capsuleradius)**(): `number` <br> 胶囊体半径                                                                                                                                                        |
| **[characterName](Gameplay.Gameplay.CharacterBase.md#charactername)**(): `string` <br> 角色名称                                                                                                                                                          |
| **[collisionEnable](Gameplay.Gameplay.CharacterBase.md#collisionenable)**(): `boolean` <br> 是否开启碰撞                                                                                                                                                 |
| **[collisionExtent](Gameplay.Gameplay.CharacterBase.md#collisionextent)**(): [`Vector`](Type.Type.Vector.md) <br> 碰撞形状的大小                                                                                                                         |
| **[collisionShape](Gameplay.Gameplay.CharacterBase.md#collisionshape)**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md) <br> 碰撞形状                                                                                              |
| **[collisionWithOtherCharacterEnable](Gameplay.Gameplay.CharacterBase.md#collisionwithothercharacterenable)**(): `boolean` <br> 能否与其他角色发生碰撞                                                                                                   |
| **[crouchEnable](Gameplay.Gameplay.CharacterBase.md#crouchenable)**(): `boolean` <br> 启用/禁用下蹲能力                                                                                                                                                  |
| **[crouchedHeight](Gameplay.Gameplay.CharacterBase.md#crouchedheight)**(): `number` <br> 下蹲时胶囊体的高度                                                                                                                                              |
| **[forwardVector](Gameplay.Gameplay.CharacterBase.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                                                                                     |
| **[gravityScale](Gameplay.Gameplay.CharacterBase.md#gravityscale)**(): `number` <br> 重力倍率                                                                                                                                                            |
| **[groundFriction](Gameplay.Gameplay.CharacterBase.md#groundfriction)**(): `number` <br> 地面摩檫力                                                                                                                                                      |
| **[guid](Gameplay.Gameplay.CharacterBase.md#guid)**(): `string` <br> 获取对象的 guid（唯一标识一个对象的字符串）。                                                                                                                                       |
| **[headUIVisible](Gameplay.Gameplay.CharacterBase.md#headuivisible)**(): `boolean` <br> 头顶 UI 是否可见                                                                                                                                                 |
| **[headUIVisibleRange](Gameplay.Gameplay.CharacterBase.md#headuivisiblerange)**(): `number` <br> 头顶 UI 可见距离                                                                                                                                        |
| **[isCrouching](Gameplay.Gameplay.CharacterBase.md#iscrouching)**(): `boolean` <br> 是否处于下蹲状态                                                                                                                                                     |
| **[isJumping](Gameplay.Gameplay.CharacterBase.md#isjumping)**(): `boolean` <br> 是否正在跳跃                                                                                                                                                             |
| **[isMoving](Gameplay.Gameplay.CharacterBase.md#ismoving)**(): `boolean` <br> 是否正在移动                                                                                                                                                               |
| **[jumpEnable](Gameplay.Gameplay.CharacterBase.md#jumpenable)**(): `boolean` <br> 启用/禁用跳跃能力                                                                                                                                                      |
| **[jumpMaxCount](Gameplay.Gameplay.CharacterBase.md#jumpmaxcount)**(): `number` <br> 最大可跳跃次数                                                                                                                                                      |
| **[jumpingOutOfWaterEnable](Gameplay.Gameplay.CharacterBase.md#jumpingoutofwaterenable)**(): `boolean` <br> 是否可以跳出水面                                                                                                                             |
| **[locallyVisible](Gameplay.Gameplay.CharacterBase.md#locallyvisible)**(): `boolean` <br> since:v0.20.0 reason:api 重构 replacement:getVisibility()                                                                                                      |
| **[lockStatus](Gameplay.Gameplay.CharacterBase.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定                                                                                                                                                       |
| **[maxAcceleration](Gameplay.Gameplay.CharacterBase.md#maxacceleration)**(): `number` <br> 最大加速度                                                                                                                                                    |
| **[maxFallingSpeed](Gameplay.Gameplay.CharacterBase.md#maxfallingspeed)**(): `number` <br> 最大下落速度                                                                                                                                                  |
| **[maxFlySpeed](Gameplay.Gameplay.CharacterBase.md#maxflyspeed)**(): `number` <br> 最大飞行速度                                                                                                                                                          |
| **[maxJumpHeight](Gameplay.Gameplay.CharacterBase.md#maxjumpheight)**(): `number` <br> 最大跳跃高度                                                                                                                                                      |
| **[maxStepHeight](Gameplay.Gameplay.CharacterBase.md#maxstepheight)**(): `number` <br> 获取角色最大可跨越高度                                                                                                                                            |
| **[maxSwimSpeed](Gameplay.Gameplay.CharacterBase.md#maxswimspeed)**(): `number` <br> 最大游泳速度                                                                                                                                                        |
| **[maxWalkSpeed](Gameplay.Gameplay.CharacterBase.md#maxwalkspeed)**(): `number` <br> 地面最大速度                                                                                                                                                        |
| **[maxWalkSpeedCrouched](Gameplay.Gameplay.CharacterBase.md#maxwalkspeedcrouched)**(): `number` <br> 地面蹲伏行走时的最大移动速度                                                                                                                        |
| **[moveEnable](Gameplay.Gameplay.CharacterBase.md#moveenable)**(): `boolean` <br> 启用/禁用移动能力                                                                                                                                                      |
| **[moveFacingDirection](Gameplay.Gameplay.CharacterBase.md#movefacingdirection)**(): [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md) <br> 运动面朝方向                                                                        |
| **[movementAxisDirection](Gameplay.Gameplay.CharacterBase.md#movementaxisdirection)**(): [`Vector`](Type.Type.Vector.md) <br> 运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效                                                   |
| **[movementDirection](Gameplay.Gameplay.CharacterBase.md#movementdirection)**(): [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md) <br> 运动时依据的正方向                                                                          |
| **[movementState](Gameplay.Gameplay.CharacterBase.md#movementstate)**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md) <br> 当前角色运动状态                                                                                              |
| **[name](Gameplay.Gameplay.CharacterBase.md#name)**(): `string` <br> 返回当前物体名称                                                                                                                                                                    |
| **[netStatus](Gameplay.Gameplay.CharacterBase.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态                                                                                                                |
| **[outOfWaterZ](Gameplay.Gameplay.CharacterBase.md#outofwaterz)**(): `number` <br> 出水时 Z 轴方向上的速度                                                                                                                                               |
| **[parent](Gameplay.Gameplay.CharacterBase.md#parent)**(): `GameObject` <br> 获取当前父物体                                                                                                                                                              |
| **[ragdollEnable](Gameplay.Gameplay.CharacterBase.md#ragdollenable)**(): `boolean` <br> 启用/禁用布娃娃状态                                                                                                                                              |
| **[relativeLocation](Gameplay.Gameplay.CharacterBase.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                                                                                         |
| **[relativeRotation](Gameplay.Gameplay.CharacterBase.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                                                                                                     |
| **[relativeScale](Gameplay.Gameplay.CharacterBase.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                                                                                               |
| **[rightVector](Gameplay.Gameplay.CharacterBase.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                                                                                         |
| **[rotateRate](Gameplay.Gameplay.CharacterBase.md#rotaterate)**(): `number` <br> 最大转向速度                                                                                                                                                            |
| **[scale](Gameplay.Gameplay.CharacterBase.md#scale)**(): [`Vector`](Type.Type.Vector.md) <br> 角色胶囊体的缩放, 自动同步                                                                                                                                 |
| **[separateBrakingFrictionEnable](Gameplay.Gameplay.CharacterBase.md#separatebrakingfrictionenable)**(): `boolean` <br> 使用单独制动摩擦                                                                                                                 |
| **[staticStatus](Gameplay.Gameplay.CharacterBase.md#staticstatus)**(): `boolean` <br> 获取对象是否静态                                                                                                                                                   |
| **[tag](Gameplay.Gameplay.CharacterBase.md#tag)**(): `string` <br> 获取当前物体的 Tag                                                                                                                                                                    |
| **[transform](Gameplay.Gameplay.CharacterBase.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 transform                                                                                                                       |
| **[upVector](Gameplay.Gameplay.CharacterBase.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                                                                                               |
| **[useUpdate](Gameplay.Gameplay.CharacterBase.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新                                                                                                                                                     |
| **[usedCapsuleCorrection](Gameplay.Gameplay.CharacterBase.md#usedcapsulecorrection)**(): `boolean` <br> 使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。             |
| **[velocity](Gameplay.Gameplay.CharacterBase.md#velocity)**(): [`Vector`](Type.Type.Vector.md) <br> 当前移动速度                                                                                                                                         |
| **[visible](Gameplay.Gameplay.CharacterBase.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api 重构 replacement:getVisibility()                                                                                                                    |
| **[walkableFloorAngle](Gameplay.Gameplay.CharacterBase.md#walkablefloorangle)**(): `number` <br> 可行走的最大角度                                                                                                                                        |
| **[worldLocation](Gameplay.Gameplay.CharacterBase.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                                                                                         |
| **[worldRotation](Gameplay.Gameplay.CharacterBase.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                                                                                                     |
| **[worldScale](Gameplay.Gameplay.CharacterBase.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                                                                                               |

| Methods                                                                                                                                                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **[addDestroyCallback](Gameplay.Gameplay.CharacterBase.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体 Destroy 事件回调                                                                                                                     |
| **[addImpulse](Gameplay.Gameplay.CharacterBase.md#addimpulse)**([`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 添加冲量                                                                                                                                             |
| **[addMoveInput](Gameplay.Gameplay.CharacterBase.md#addmoveinput)**([`Vector`](Type.Type.Vector.md)): `void` <br> 沿着给定的方向向量添加移动输入                                                                                                                              |
| **[appearanceReady](Gameplay.Gameplay.CharacterBase.md#appearanceready)**(): `Promise`<`void`\> <br> 在外观数据准备好后返回并执行已绑定的函数，保证当前角色换装表现和数据是正确的。在设置角色外观形象之前，可以用做这个判断                                                   |
| **[asyncGetScriptByName](Gameplay.Gameplay.CharacterBase.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系                                                                                                    |
| **[attach](Gameplay.Gameplay.CharacterBase.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `void` <br> 将物体附着到人物角色的指定插槽                                                                                                       |
| **[attachToGameObject](Gameplay.Gameplay.CharacterBase.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上                                                                                                                                             |
| **[clearDecorations](Gameplay.Gameplay.CharacterBase.md#cleardecorations)**(): `void` <br> 清空所有挂件数据                                                                                                                                                                   |
| **[clearOneDecoration](Gameplay.Gameplay.CharacterBase.md#clearonedecoration)**(`string`): `void` <br> 删除一个挂件                                                                                                                                                           |
| **[clone](Gameplay.Gameplay.CharacterBase.md#clone)**(`boolean`): `GameObject` <br> 复制对象                                                                                                                                                                                  |
| **[crouch](Gameplay.Gameplay.CharacterBase.md#crouch)**(`boolean`): `void` <br> 下蹲                                                                                                                                                                                          |
| **[deleteDestroyCallback](Gameplay.Gameplay.CharacterBase.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体 Destroy 事件回调                                                                                                               |
| **[destroy](Gameplay.Gameplay.CharacterBase.md#destroy)**(): `void` <br> 删除对象                                                                                                                                                                                             |
| **[detachFromGameObject](Gameplay.Gameplay.CharacterBase.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离                                                                                                                                               |
| **[getBoundingBoxSize](Gameplay.Gameplay.CharacterBase.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小                                                                               |
| **[getBounds](Gameplay.Gameplay.CharacterBase.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取 GameObject 边界                                                                                       |
| **[getChildByGuid](Gameplay.Gameplay.CharacterBase.md#getchildbyguid)**(`string`): `GameObject` <br> 根据 Guid 查找子物体                                                                                                                                                     |
| **[getChildByName](Gameplay.Gameplay.CharacterBase.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体                                                                                                                                                       |
| **[getChildren](Gameplay.Gameplay.CharacterBase.md#getchildren)**(): `GameObject`[] <br> 获取 Children，客户端不维系父子关系。推荐使用 Find 替代                                                                                                                              |
| **[getChildrenBoxCenter](Gameplay.Gameplay.CharacterBase.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])                                                   |
| **[getCollision](Gameplay.Gameplay.CharacterBase.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态                                                               |
| **[getControlRotator](Gameplay.Gameplay.CharacterBase.md#getcontrolrotator)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取控制器的旋转                                                                                                 |
| **[getDecorations](Gameplay.Gameplay.CharacterBase.md#getdecorations)**(): [`DecorationTuple`](../modules/Gameplay.Gameplay.md#decorationtuple)[] <br> 获取当前挂件实例化对象的 Guid                                                                                          |
| **[getForwardVector](Gameplay.Gameplay.CharacterBase.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                                                                     |
| **[getHeadUIWidget](Gameplay.Gameplay.CharacterBase.md#getheaduiwidget)**(): [`UIWidget`](Gameplay.Gameplay.UIWidget.md) <br> 获取头顶 UIWidget                                                                                                                               |
| **[getRelativeLocation](Gameplay.Gameplay.CharacterBase.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                                                                         |
| **[getRelativeRotation](Gameplay.Gameplay.CharacterBase.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                                                                                 |
| **[getRelativeScale](Gameplay.Gameplay.CharacterBase.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                                                                               |
| **[getRightVector](Gameplay.Gameplay.CharacterBase.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                                                                         |
| **[getScriptByGuid](Gameplay.Gameplay.CharacterBase.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                                                           |
| **[getScriptByName](Gameplay.Gameplay.CharacterBase.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                                                           |
| **[getScripts](Gameplay.Gameplay.CharacterBase.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                                                                           |
| **[getSlotName](Gameplay.Gameplay.CharacterBase.md#getslotname)**([`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `string` <br> 获取对应插槽名称                                                                                                                       |
| **[getSourceAssetGuid](Gameplay.Gameplay.CharacterBase.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的 GUID                                                                                                                                                  |
| **[getTransform](Gameplay.Gameplay.CharacterBase.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 Transform                                                                                                 |
| **[getUpVector](Gameplay.Gameplay.CharacterBase.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                                                                               |
| **[getVisibility](Gameplay.Gameplay.CharacterBase.md#getvisibility)**(): `boolean` <br> 获取是否被显示                                                                                                                                                                        |
| **[getWorldLocation](Gameplay.Gameplay.CharacterBase.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                                                                         |
| **[getWorldRotation](Gameplay.Gameplay.CharacterBase.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                                                                                 |
| **[getWorldScale](Gameplay.Gameplay.CharacterBase.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                                                                               |
| **[isPlayingAnimation](Gameplay.Gameplay.CharacterBase.md#isplayinganimation)**(): `boolean` <br> 是否正在播放动画                                                                                                                                                            |
| **[isRunningClient](Gameplay.Gameplay.CharacterBase.md#isrunningclient)**(): `boolean` <br> 是否为客户端                                                                                                                                                                      |
| **[jump](Gameplay.Gameplay.CharacterBase.md#jump)**(): `void` <br> 跳跃                                                                                                                                                                                                       |
| **[loadAnimation](Gameplay.Gameplay.CharacterBase.md#loadanimation)**(`string`, `boolean`): [`Animation`](Gameplay.Gameplay.Animation.md) <br> 加载动画,获取到动画对象                                                                                                        |
| **[loadDecoration](Gameplay.Gameplay.CharacterBase.md#loaddecoration)**(`string`, [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback)): `void` <br> 加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0                                                     | 0,-90,0                                                                                                                                       | 1,1,1",给移动角色编辑器提供的能力 |
| **[loadSlotAndEditorDataByGuid](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabyguid)**(`string`): `void` <br> 通过 Guid 加载插槽跟角色编辑数据                                                                                                                     |
| **[loadSlotAndEditorDataByPath](Gameplay.Gameplay.CharacterBase.md#loadslotandeditordatabypath)**(`string`): `void` <br> 通过路径加载插槽跟角色编辑数据                                                                                                                       |
| **[loadStance](Gameplay.Gameplay.CharacterBase.md#loadstance)**(`string`, `boolean`): [`SubStance`](Gameplay.Gameplay.SubStance.md) <br> 创建一个二级姿态对象并返回                                                                                                           |
| **[lookAt](Gameplay.Gameplay.CharacterBase.md#lookat)**([`Vector`](Type.Type.Vector.md)): `void` <br> 角色面朝目标点                                                                                                                                                          |
| **[onDestroy](Gameplay.Gameplay.CharacterBase.md#ondestroy)**(): `void` <br> onDestroy 生命周期函数                                                                                                                                                                           |
| **[onStart](Gameplay.Gameplay.CharacterBase.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用                                                                                                                                                                          |
| **[onUpdate](Gameplay.Gameplay.CharacterBase.md#onupdate)**(`number`): `void` <br> onUpdate 生命周期函数                                                                                                                                                                      |
| **[playAnimation](Gameplay.Gameplay.CharacterBase.md#playanimation)**(`string`, `number`, `number`): [`Animation`](Gameplay.Gameplay.Animation.md) <br> 播放动画,同时获取到动画对象,Animation 对象接口是同步的                                                                |
| **[playAnimationLocally](Gameplay.Gameplay.CharacterBase.md#playanimationlocally)**(`string`, `number`, `number`): `void` <br> since:v0.18 reason:有新接口，后期旧接口如果出问题不会维护 replacement:This method is deprecated. Please use loadAnimation(guid,false) instead. |
| **[ready](Gameplay.Gameplay.CharacterBase.md#ready)**(): `Promise`<[`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)\> <br> GameObject 准备好后返回                                                                                                                       |
| **[setAppearance](Gameplay.Gameplay.CharacterBase.md#setappearance)**<extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\>                                                                                                                                   | \>([`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\>): extends [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)<`T`\> | <br> 设置外观修改功能             |
| **[setCollision](Gameplay.Gameplay.CharacterBase.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态                                                                                                          |
| **[setCollisionShapeAndExtent](Gameplay.Gameplay.CharacterBase.md#setcollisionshapeandextent)**([`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md), [`Vector`](Type.Type.Vector.md)): `void` <br> 设置不同形状不同大小的碰撞体                                |
| **[setLocallyVisibility](Gameplay.Gameplay.CharacterBase.md#setlocallyvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(本地生效)                                                                                |
| **[setLocationAndRotation](Gameplay.Gameplay.CharacterBase.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转                                                                       |
| **[setRelativeLocation](Gameplay.Gameplay.CharacterBase.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置                                                                                                                                  |
| **[setRelativeRotation](Gameplay.Gameplay.CharacterBase.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转                                                                                                                              |
| **[setRelativeScale](Gameplay.Gameplay.CharacterBase.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放                                                                                                                                        |
| **[setTransform](Gameplay.Gameplay.CharacterBase.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体 transform                                                                                                                                |
| **[setVisibility](Gameplay.Gameplay.CharacterBase.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置是否被显示(自动同步)                                                                                              |
| **[setWorldLocation](Gameplay.Gameplay.CharacterBase.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标                                                                                                                                  |
| **[setWorldRotation](Gameplay.Gameplay.CharacterBase.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转                                                                                                                              |
| **[setWorldScale](Gameplay.Gameplay.CharacterBase.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放                                                                                                                                        |
| **[stopAnimation](Gameplay.Gameplay.CharacterBase.md#stopanimation)**(`string`): `void` <br> since:v0.18 reason:使用新接口 replacement:"Gameplay.Animation.stop"                                                                                                              |
| **[stopStance](Gameplay.Gameplay.CharacterBase.md#stopstance)**(`boolean`): `void` <br> 停止任何正在播放的姿态                                                                                                                                                                |
| **[swimmingDown](Gameplay.Gameplay.CharacterBase.md#swimmingdown)**(`number`): `void` <br> 水中下潜                                                                                                                                                                           |
| **[swimmingUp](Gameplay.Gameplay.CharacterBase.md#swimmingup)**(`number`): `void` <br> 水中上浮                                                                                                                                                                               |
| **[switchToFlying](Gameplay.Gameplay.CharacterBase.md#switchtoflying)**(): `void` <br> 切换为飞行状态                                                                                                                                                                         |
| **[switchToWalking](Gameplay.Gameplay.CharacterBase.md#switchtowalking)**(): `void` <br> 切换为行走状态                                                                                                                                                                       |
| **[asyncFind](Gameplay.Gameplay.CharacterBase.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);                                                                                  |
| **[asyncSpawnGameObject](Gameplay.Gameplay.CharacterBase.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建                                                                              |
| **[find](Gameplay.Gameplay.CharacterBase.md#find)**(`string`): `GameObject` <br> 通过 Guid 查找 GameObject                                                                                                                                                                    |
| **[findGameObjectByTag](Gameplay.Gameplay.CharacterBase.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义 Tag 获取 GameObject                                                                                                                               |
| **[getGameObjectByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体                                                                                                                                               |
| **[getGameObjectsByName](Gameplay.Gameplay.CharacterBase.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体                                                                                                                                           |
| **[spawnGameObject](Gameplay.Gameplay.CharacterBase.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject                                                                                                                                         |

## Properties

### isV1

• `Private` **isV1**: `any`

**`Description`**

判断当前角色是否是 V1 版本

**`Effect`**

调用端调用生效

---

### onLoadAppearanceDataAllCompleted

• **onLoadAppearanceDataAllCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\>

**`Description`**

加载完角色形象数据后的回调

---

### onMeshChanged

• **onMeshChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色模型切换成功广播

---

### onMovementStateChanged

• **onMovementStateChanged**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged)

**`Description`**

移动状态切换时的回调

---

### onSetAppearanceDataCompleted

• **onSetAppearanceDataCompleted**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\>

**`Description`**

设置一个角色编辑 API 成功后的回调

---

### onTextureChanged

• **onTextureChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\>

**`Description`**

角色贴图切换成功广播

---

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

范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制

#### Returns

`number`

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

---

### airControlBoostMultiplier

• `get` **airControlBoostMultiplier**(): `number`

**`Description`**

当角色空中水平移动速率比 airControlBoostVelocityThreshold 小时, 对 airControl 效果加倍的倍数

**`Precautions`**

范围:大于等于 0 的数字, 取 0 时, 不会对 airControl 效果加倍, 无论取值多大, airControl 最大值都被限制为 1

#### Returns

`number`

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

---

### airControlBoostVelocityThreshold

• `get` **airControlBoostVelocityThreshold**(): `number`

**`Description`**

下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照 airControlBoostMultiplier 的值对 airControl 效果进行加倍

**`Precautions`**

范围: 大于等于 0

#### Returns

`number`

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

---

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

| Name   | Type                                                           |
| :----- | :------------------------------------------------------------- |
| `mode` | [`AnimationMode`](../enums/Gameplay.Gameplay.AnimationMode.md) |

#### Returns

`void`

---

### animationStance

• `get` **animationStance**(): `string`

**`Description`**

动画姿态

**`Precautions`**

动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态

#### Returns

`string`

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

---

### appearance

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

**`Description`**

当前外观修改对象

#### Returns

[`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

---

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

| Name               | Type                              |
| :----------------- | :-------------------------------- |
| `InLocationOffset` | [`Vector2`](Type.Type.Vector2.md) |

#### Returns

`void`

---

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

| Name       | Type     |
| :--------- | :------- |
| `InHeight` | `number` |

#### Returns

`void`

---

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

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `InScale` | [`Vector2`](Type.Type.Vector2.md) |

#### Returns

`void`

---

### basicStance

• `get` **basicStance**(): `string`

**`Description`**

基础姿态

**`Precautions`**

基础姿态是一个预制的基本动画状态机, 包含行走, 跳跃, 飞行等基本动画, 传入基础姿态资源的 guid 进行基础姿态的切换

#### Returns

`string`

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

---

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

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableAimOffset` | `boolean` |

#### Returns

`void`

---

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

| Name                           | Type     |
| :----------------------------- | :------- |
| `InBrakingDecelerationFalling` | `number` |

#### Returns

`void`

---

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

| Name                          | Type     |
| :---------------------------- | :------- |
| `InBrakingDecelerationFlying` | `number` |

#### Returns

`void`

---

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

| Name                            | Type     |
| :------------------------------ | :------- |
| `InBrakingDecelerationSwimming` | `number` |

#### Returns

`void`

---

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

| Name                           | Type     |
| :----------------------------- | :------- |
| `InBrakingDecelerationWalking` | `number` |

#### Returns

`void`

---

### canSetAppearanceData

• `get` **canSetAppearanceData**(): `boolean`

**`Description`**

是否可以设置角色形象数据

#### Returns

`boolean`

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

---

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

| Name                  | Type     |
| :-------------------- | :------- |
| `InCapsuleHalfHeight` | `number` |

#### Returns

`void`

---

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

| Name              | Type     |
| :---------------- | :------- |
| `InCapsuleRadius` | `number` |

#### Returns

`void`

---

### characterName

• `get` **characterName**(): `string`

**`Description`**

角色名称

**`Precautions`**

会显示在角色头顶 UI 上

#### Returns

`string`

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

---

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

| Name                 | Type      |
| :------------------- | :-------- |
| `InbEnableCollision` | `boolean` |

#### Returns

`void`

---

### collisionExtent

• `get` **collisionExtent**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

碰撞形状的大小

#### Returns

[`Vector`](Type.Type.Vector.md)

---

### collisionShape

• `get` **collisionShape**(): [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

**`Description`**

碰撞形状

#### Returns

[`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md)

---

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

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

---

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

| Name        | Type      |
| :---------- | :-------- |
| `canCrouch` | `boolean` |

#### Returns

`void`

---

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

| Name               | Type     |
| :----------------- | :------- |
| `InCrouchedHeight` | `number` |

#### Returns

`void`

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

---

### gravityScale

• `get` **gravityScale**(): `number`

**`Description`**

重力倍率

**`Precautions`**

范围 0~10, 过大和过小的值都会被限制

#### Returns

`number`

• `set` **gravityScale**(`newGravityScale`): `void`

**`Description`**

重力倍率

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `newGravityScale` | `number` |

#### Returns

`void`

---

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

| Name               | Type     |
| :----------------- | :------- |
| `inGroundFriction` | `number` |

#### Returns

`void`

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

---

### headUIVisible

• `get` **headUIVisible**(): `boolean`

**`Description`**

头顶 UI 是否可见

#### Returns

`boolean`

• `set` **headUIVisible**(`isVisible`): `void`

**`Description`**

头顶 UI 是否可见

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `isVisible` | `boolean` |

#### Returns

`void`

---

### headUIVisibleRange

• `get` **headUIVisibleRange**(): `number`

**`Description`**

头顶 UI 可见距离

#### Returns

`number`

• `set` **headUIVisibleRange**(`VisibleDistance`): `void`

**`Description`**

头顶 UI 可见距离

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `VisibleDistance` | `number` |

#### Returns

`void`

---

### isCrouching

• `get` **isCrouching**(): `boolean`

**`Description`**

是否处于下蹲状态

#### Returns

`boolean`

---

### isJumping

• `get` **isJumping**(): `boolean`

**`Description`**

是否正在跳跃

#### Returns

`boolean`

---

### isMoving

• `get` **isMoving**(): `boolean`

**`Description`**

是否正在移动

#### Returns

`boolean`

---

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

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

---

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

| Name             | Type     |
| :--------------- | :------- |
| `InJumpMaxCount` | `number` |

#### Returns

`void`

---

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

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

---

### locallyVisible

• `get` **locallyVisible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

是否可见(本地设置)

#### Returns

`boolean`

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

---

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

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

---

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

| Name                | Type     |
| :------------------ | :------- |
| `InMaxAcceleration` | `number` |

#### Returns

`void`

---

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

| Name    | Type     |
| :------ | :------- |
| `speed` | `number` |

#### Returns

`void`

---

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

| Name            | Type     |
| :-------------- | :------- |
| `InMaxFlySpeed` | `number` |

#### Returns

`void`

---

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

| Name              | Type     |
| :---------------- | :------- |
| `InMaxJumpHeight` | `number` |

#### Returns

`void`

---

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

| Name              | Type     |
| :---------------- | :------- |
| `InMaxStepHeight` | `number` |

#### Returns

`void`

---

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

| Name             | Type     |
| :--------------- | :------- |
| `InMaxSwimSpeed` | `number` |

#### Returns

`void`

---

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

| Name             | Type     |
| :--------------- | :------- |
| `InMaxWalkSpeed` | `number` |

#### Returns

`void`

---

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

| Name       | Type     |
| :--------- | :------- |
| `maxSpeed` | `number` |

#### Returns

`void`

---

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

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

---

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

| Name                    | Type                                                                       |
| :---------------------- | :------------------------------------------------------------------------- |
| `InMoveFacingDirection` | [`MoveFacingDirection`](../enums/Gameplay.Gameplay.MoveFacingDirection.md) |

#### Returns

`void`

---

### movementAxisDirection

• `get` **movementAxisDirection**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **movementAxisDirection**(`InMovementAxisDirection`): `void`

**`Description`**

运动时依据的轴方向, 只有当前的 MovementDirection 为 AxisDirection 时有效

#### Parameters

| Name                      | Type                            |
| :------------------------ | :------------------------------ |
| `InMovementAxisDirection` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

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

• `set` **movementDirection**(`InMovementDirection`): `void`

**`Description`**

运动时依据的正方向

#### Parameters

| Name                  | Type                                                                   |
| :-------------------- | :--------------------------------------------------------------------- |
| `InMovementDirection` | [`MovementDirection`](../enums/Gameplay.Gameplay.MovementDirection.md) |

#### Returns

`void`

---

### movementState

• `get` **movementState**(): [`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

**`Description`**

当前角色运动状态

#### Returns

[`MovementMode`](../enums/Gameplay.Gameplay.MovementMode.md)

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

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

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

---

### outOfWaterZ

• `get` **outOfWaterZ**(): `number`

**`Description`**

出水时 Z 轴方向上的速度

#### Returns

`number`

• `set` **outOfWaterZ**(`value`): `void`

**`Description`**

出水时 Z 轴方向上的速度

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

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

---

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

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

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

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

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

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放        |

#### Returns

`void`

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

---

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

| Name           | Type     |
| :------------- | :------- |
| `InRotateRate` | `number` |

#### Returns

`void`

---

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

| Name               | Type                            |
| :----------------- | :------------------------------ |
| `InCharacterScale` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

---

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

| Name   | Type      |
| :----- | :-------- |
| `used` | `boolean` |

#### Returns

`void`

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

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

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | Tag         |

#### Returns

`void`

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

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description        |
| :---------- | :------------------------------------ | :----------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的 transform |

#### Returns

`void`

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

---

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

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

---

### usedCapsuleCorrection

• `get` **usedCapsuleCorrection**(): `boolean`

**`Description`**

使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Returns

`boolean`

• `set` **usedCapsuleCorrection**(`usedCapsuleCorrection`): `void`

**`Description`**

使用胶囊体修正 true 代表应用角色编辑中的数据自动计算胶囊体大小。false 代表应用"capsuleHalfHeight"和"capsuleRadius"设置胶囊体的大小。

#### Parameters

| Name                    | Type      |
| :---------------------- | :-------- |
| `usedCapsuleCorrection` | `boolean` |

#### Returns

`void`

---

### velocity

• `get` **velocity**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前移动速度

#### Returns

[`Vector`](Type.Type.Vector.md)

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

---

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

| Name                   | Type     |
| :--------------------- | :------- |
| `InWalkableFloorAngle` | `number` |

#### Returns

`void`

---

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

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

---

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

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

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

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

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

| Name          | Type                            | Description                            |
| :------------ | :------------------------------ | :------------------------------------- |
| `Vector`      | [`Vector`](Type.Type.Vector.md) | 应用的冲量                             |
| `ignoreMass?` | `boolean`                       | 是否忽略质量对冲量的影响 default:false |

#### Returns

`void`

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

| Name        | Type                            | Description |
| :---------- | :------------------------------ | :---------- |
| `direction` | [`Vector`](Type.Type.Vector.md) | 输入的方向  |

#### Returns

`void`

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
| `name` | `string` | 名字        |

#### Returns

`Promise`<`Script`\>

Script

---

### attach

▸ **attach**(`gameObject`, `slotName`): `void`

**`Description`**

将物体附着到人物角色的指定插槽

**`Effect`**

调用端调用生效

#### Parameters

| Name         | Type                                                 | Description |
| :----------- | :--------------------------------------------------- | :---------- |
| `gameObject` | `GameObject`                                         | 物体        |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽类型    |

#### Returns

`void`

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
| `obj` | `GameObject` | 物体        |

#### Returns

`void`

---

### clearDecorations

▸ **clearDecorations**(): `void`

**`Description`**

清空所有挂件数据

**`Effect`**

客户端

#### Returns

`void`

---

### clearOneDecoration

▸ **clearOneDecoration**(`guid`): `void`

**`Description`**

删除一个挂件

**`Effect`**

客户端

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `guid` | `string` | 实例化后的挂件对象 Guid |

#### Returns

`void`

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description           |
| :-------------- | :-------- | :-------------------- |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

---

### crouch

▸ **crouch**(`isCrouch`): `void`

**`Description`**

下蹲

**`Effect`**

调用端调用生效

#### Parameters

| Name       | Type      | Description |
| :--------- | :-------- | :---------- |
| `isCrouch` | `boolean` | 是否下蹲    |

#### Returns

`void`

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

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

| Name                      | Type                            | Description                                  |
| :------------------------ | :------------------------------ | :------------------------------------------- |
| `nonColliding?`           | `boolean`                       | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | 如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                |
| :------------------------ | :------------------------------ | :----------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | 是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | 是否递归包含子物体 default:undefined       |

#### Returns

`void`

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
| `guid` | `string` | guid        |

#### Returns

`GameObject`

查找的物体

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
| `name` | `string` | 名称        |

#### Returns

`GameObject`

查找的物体

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

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

---

### getControlRotator

▸ **getControlRotator**(`Out?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取控制器的旋转

**`Effect`**

调用端调用生效

#### Parameters

| Name   | Type                                | Description                           |
| :----- | :---------------------------------- | :------------------------------------ |
| `Out?` | [`Rotation`](Type.Type.Rotation.md) | 获取控制器旋转 default:出参，可选参数 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

控制器的旋转

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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
| `guid` | `string` | guid        |

#### Returns

`Script`

Script

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
| `name` | `string` | 名字        |

#### Returns

`Script`

Script

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

---

### getSlotName

▸ **getSlotName**(`slotType`): `string`

**`Description`**

获取对应插槽名称

**`Effect`**

调用端调用生效

#### Parameters

| Name       | Type                                                 | Description |
| :--------- | :--------------------------------------------------- | :---------- |
| `slotType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽类型    |

#### Returns

`string`

插槽名称(string)

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

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

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

---

### jump

▸ **jump**(): `void`

**`Description`**

跳跃

**`Effect`**

调用端调用生效

#### Returns

`void`

---

### loadAnimation

▸ **loadAnimation**(`guid`, `sync?`): [`Animation`](Gameplay.Gameplay.Animation.md)

**`Description`**

加载动画,获取到动画对象

**`Effect`**

调用端调用生效

#### Parameters

| Name    | Type      | Description                         |
| :------ | :-------- | :---------------------------------- |
| `guid`  | `string`  | 动画 GUID                           |
| `sync?` | `boolean` | Animation 对象是否同步 default:true |

#### Returns

[`Animation`](Gameplay.Gameplay.Animation.md)

Animation 对象

---

### loadDecoration

▸ **loadDecoration**(`decorationString`, `callback`): `void`

**`Description`**

加载挂件,数据格式为："MW_Skeleton#112801#Glasses#0,0,0|0,-90,0|1,1,1",给移动角色编辑器提供的能力

**`Effect`**

客户端

#### Parameters

| Name               | Type                                                               | Description     |
| :----------------- | :----------------------------------------------------------------- | :-------------- |
| `decorationString` | `string`                                                           | 一个挂件数据    |
| `callback`         | [`StringCallback`](../modules/Gameplay.Gameplay.md#stringcallback) | 挂件对象的 Guid |

#### Returns

`void`

---

### loadSlotAndEditorDataByGuid

▸ **loadSlotAndEditorDataByGuid**(`guid`): `void`

**`Description`**

通过 Guid 加载插槽跟角色编辑数据

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | Slot Guid   |

#### Returns

`void`

---

### loadSlotAndEditorDataByPath

▸ **loadSlotAndEditorDataByPath**(`relativePath`): `void`

**`Description`**

通过路径加载插槽跟角色编辑数据

**`Effect`**

调用端调用生效

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `relativePath` | `string` | 相对路径    |

#### Returns

`void`

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

| Name    | Type      | Description                               |
| :------ | :-------- | :---------------------------------------- |
| `guid`  | `string`  | 预制姿态资源 guid 或动画资源 guid         |
| `sync?` | `boolean` | 对姿态对象的操作是否自动同步 default:true |

#### Returns

[`SubStance`](Gameplay.Gameplay.SubStance.md)

二级姿态对象

---

### lookAt

▸ **lookAt**(`TargetPoint`): `void`

**`Description`**

角色面朝目标点

**`Effect`**

调用端调用生效

#### Parameters

| Name          | Type                            | Description |
| :------------ | :------------------------------ | :---------- |
| `TargetPoint` | [`Vector`](Type.Type.Vector.md) | 目标点      |

#### Returns

`void`

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

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

onUpdate 生命周期函数

**`Effect`**

自动调用

#### Parameters

| Name | Type     | Description  |
| :--- | :------- | :----------- |
| `dt` | `number` | 函数调用间隔 |

#### Returns

`void`

#### Overrides

Core.GameObject.onUpdate

---

### playAnimation

▸ **playAnimation**(`guid`, `loopCount?`, `rate?`): [`Animation`](Gameplay.Gameplay.Animation.md)

**`Description`**

播放动画,同时获取到动画对象,Animation 对象接口是同步的

**`Effect`**

调用端调用生效

#### Parameters

| Name         | Type     | Description                                                    |
| :----------- | :------- | :------------------------------------------------------------- |
| `guid`       | `string` | 动画 GUID                                                      |
| `loopCount?` | `number` | 循环播放次数, 范围 0~2147483647, 设置为 0 时无限循环 default:1 |
| `rate?`      | `number` | 播放速率，1 表示正常速率 default:1                             |

#### Returns

[`Animation`](Gameplay.Gameplay.Animation.md)

Animation 对象

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

| Name               | Type     | Description                                                    |
| :----------------- | :------- | :------------------------------------------------------------- |
| `AnimationGuid`    | `string` | 动画 GUID                                                      |
| `AnimationLength?` | `number` | 播放时长 default:0                                             |
| `LoopCount?`       | `number` | 循环播放次数, 范围 0~2147483647, 设置为 0 时无限循环 default:1 |

#### Returns

`void`

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

| Name  | Type                                                               | Description        |
| :---- | :----------------------------------------------------------------- | :----------------- |
| `clz` | [`Constructor`](../modules/Gameplay.Gameplay.md#constructor)<`T`\> | 外观修改接口类类型 |

#### Returns

`T`

外观修改对象

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

| Name                   | Type                                                                                                                   | Description                                               |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | 是否传递给子节点 default: false                           |

#### Returns

`void`

---

### setCollisionShapeAndExtent

▸ **setCollisionShapeAndExtent**(`ShapeType`, `CollisionExtent`): `void`

**`Description`**

设置不同形状不同大小的碰撞体

**`Effect`**

调用端调用生效

#### Parameters

| Name              | Type                                                               | Description    |
| :---------------- | :----------------------------------------------------------------- | :------------- |
| `ShapeType`       | [`CustomShapeType`](../enums/Gameplay.Gameplay.CustomShapeType.md) | 启用的碰撞形状 |
| `CollisionExtent` | [`Vector`](Type.Type.Vector.md)                                    | 启用的碰撞形状 |

#### Returns

`void`

---

### setLocallyVisibility

▸ **setLocallyVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(本地生效)

**`Effect`**

客户端生效

#### Parameters

| Name                   | Type                                                     | Description                 |
| :--------------------- | :------------------------------------------------------- | :-------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态                        |
| `propagateToChildren?` | `boolean`                                                | 是否设置子物体 default:true |

#### Returns

`void`

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | 世界位置    |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转    |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description      |
| :------ | :------------------------------ | :--------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description |
| :---------- | :------------------------------------ | :---------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform   |

#### Returns

`void`

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置是否被显示(自动同步)

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                 |
| :--------------------- | :------------------------------------------------------- | :-------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态                        |
| `propagateToChildren?` | `boolean`                                                | 是否设置子物体 default:true |

#### Returns

`void`

#### Overrides

Core.GameObject.setVisibility

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界坐标 |

#### Returns

`void`

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

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

| Name              | Type     | Description           |
| :---------------- | :------- | :-------------------- |
| `InAnimationGuid` | `string` | 停止播放的动画的 Guid |

#### Returns

`void`

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

| Name    | Type      | Description               |
| :------ | :-------- | :------------------------ |
| `sync?` | `boolean` | 是否自动同步 default:true |

#### Returns

`void`

---

### swimmingDown

▸ **swimmingDown**(`speed`): `void`

**`Description`**

水中下潜

**`Effect`**

双端

#### Parameters

| Name    | Type     | Description                                 |
| :------ | :------- | :------------------------------------------ |
| `speed` | `number` | 下潜速度不能超过 MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

---

### swimmingUp

▸ **swimmingUp**(`speed`): `void`

**`Description`**

水中上浮

**`Effect`**

双端

#### Parameters

| Name    | Type     | Description                                 |
| :------ | :------- | :------------------------------------------ |
| `speed` | `number` | 上浮速度不能超过 MaxSwimSpeed(游泳最大速度) |

#### Returns

`void`

---

### switchToFlying

▸ **switchToFlying**(): `void`

**`Description`**

切换为飞行状态

**`Effect`**

调用端调用生效

#### Returns

`void`

---

### switchToWalking

▸ **switchToWalking**(): `void`

**`Description`**

切换为行走状态

**`Effect`**

调用端调用生效

#### Returns

`void`

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `InTag` | `string` | 自定义 Tag  |

#### Returns

`GameObject`[]

Array`<GameObject>`

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`[]

返回所有查找到的对象

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject
