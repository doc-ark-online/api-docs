[Gameplay](../modules/Gameplay.Gameplay.md) / Humanoid

# Humanoid <Badge type="tip" text="Class" /> <Score text="Humanoid" />

**`Groups`**

AVATAR

**`Deprecated`**

since:021 reason:功能迭代,请使用NPC对象 replacement:NPC

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
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色在空中时, 控制水平方向移动的灵活度|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 角色在空中时, 控制水平方向移动的灵活度|
:::


| Accessors |
| :-----|


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