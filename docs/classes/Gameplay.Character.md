[Gameplay](../modules/Gameplay.Gameplay.md) / Character

# Character <Badge type="tip" text="Class" /> <Score text="Character" />

**`Groups`**

AVATAR

在CharacterBase上派生的玩家操控对象,该对象是玩家加入游戏之后,在服务器上根据配置生成,并同步到客户端的.
             玩家对象的初始值在编辑器的Player面板进行编辑.
             运行时通过Player对象获取Character.
             获取当前控制的玩家的角色对象:Gameplay.getCurrentPlayer().character
             获取当前所有玩家:Gameplay.getAllPlayers()

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
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 角色在空中时, 控制水平方向移动的灵活度|
:::


| Accessors |
| :-----|
| **[cameraSystem](Gameplay.Character.md#camerasystem)**(): [`CameraSystem`](Gameplay.CameraSystem.md) <br> 获得摄像机系统|


::: details 点击查看继承
| Accessors |
| :-----|
| **[airControl](Gameplay.CharacterBase.md#aircontrol)**(): `number` <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[airControlBoostMultiplier](Gameplay.CharacterBase.md#aircontrolboostmultiplier)**(): `number` <br> 当角色空中水平移动速率比airControlBoostVelocityThreshold小时, 对airControl效果加倍的倍数|
| **[airControlBoostVelocityThreshold](Gameplay.CharacterBase.md#aircontrolboostvelocitythreshold)**(): `number` <br> 下落控制提升速率阈值, 当角色在空中时水平移动速率小于此值, 就会依照airControlBoostMultiplier的值对airControl效果进行加倍|
| **[animationMode](Gameplay.CharacterBase.md#animationmode)**(): [`AnimationMode`](../enums/Gameplay.AnimationMode.md) <br> 动画播放模式|
| **[animationStance](Gameplay.CharacterBase.md#animationstance)**(): `string` <br> 动画姿态|
| [appearance](Gameplay.CharacterBase.md#appearance) |
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
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
:::


## Properties

## Accessors

### cameraSystem <Score text="cameraSystem" /> 

• `get` **cameraSystem**(): [`CameraSystem`](Gameplay.CameraSystem.md)

获得摄像机系统

#### Returns

[`CameraSystem`](Gameplay.CameraSystem.md)
