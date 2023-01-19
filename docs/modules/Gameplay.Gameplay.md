# Gameplay <Badge type="tip" text="Namespace" /> 

## Table of contents

| Enumerations |
| :-----|
| [AbilityStateControlType](../enums/Gameplay.AbilityStateControlType.md) <br> 技能状态控制枚举|
| [AnimationMode](../enums/Gameplay.AnimationMode.md) <br> 动画模式|
| [AreaClass](../enums/Gameplay.AreaClass.md) <br> 寻路区域屏障寻路计算类型|
| [AttenuationDistanceModel](../enums/Gameplay.AttenuationDistanceModel.md) <br> 音效衰减函数模型|
| [AttenuationShape](../enums/Gameplay.AttenuationShape.md) <br> 音效衰减形状|
| [AxisType](../enums/Gameplay.AxisType.md) <br> 轴标记|
| [BasicStanceType](../enums/Gameplay.BasicStanceType.md) <br> 基础姿态风格|
| [BodyPartTypeV1](../enums/Gameplay.BodyPartTypeV1.md) <br> V1角色部位|
| [CameraLocationMode](../enums/Gameplay.CameraLocationMode.md) <br> 摄像机位置模式|
| [CameraMode](../enums/Gameplay.CameraMode.md) <br> 摄像机模式|
| [CameraProjectionMode](../enums/Gameplay.CameraProjectionMode.md) <br> 摄像机镜头模式|
| [CameraRotationMode](../enums/Gameplay.CameraRotationMode.md) <br> 摄像机旋转模式|
| [CollisionType](../enums/Gameplay.CollisionType.md) <br> 碰撞类型|
| [CustomShapeType](../enums/Gameplay.CustomShapeType.md) <br> 碰撞体形状类型*|
| [EInitialOscillatorOffset](../enums/Gameplay.EInitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始)|
| [EOscillatorWaveform](../enums/Gameplay.EOscillatorWaveform.md) <br> 振荡器波形|
| [EffectRangeShape2D](../enums/Gameplay.EffectRangeShape2D.md) <br> 效果范围形状|
| [EffectRangeShape3D](../enums/Gameplay.EffectRangeShape3D.md) <br> 3D效果范围形状|
| [EffectRangeType](../enums/Gameplay.EffectRangeType.md) <br> 效果范围类型|
| [EquipmentStatus](../enums/Gameplay.EquipmentStatus.md) <br> 装备状态|
| [ExpressionType](../enums/Gameplay.ExpressionType.md) <br> 表情类型|
| [HotWeaponAimMode](../enums/Gameplay.HotWeaponAimMode.md) <br> 热武器瞄准模式|
| [HotWeaponCrossHairType](../enums/Gameplay.HotWeaponCrossHairType.md) <br> 热武器准心类型|
| [HotWeaponFireMode](../enums/Gameplay.HotWeaponFireMode.md) <br> 热武器开火模式|
| [HotWeaponState](../enums/Gameplay.HotWeaponState.md) <br> 热武器状态|
| [ImpulseForceType](../enums/Gameplay.ImpulseForceType.md) <br> 冲量力类型|
| [ImpulseType](../enums/Gameplay.ImpulseType.md) <br> 冲量的应用方式|
| [LimitType](../enums/Gameplay.LimitType.md) <br> 限制类型|
| [MoveControlMode](../enums/Gameplay.MoveControlMode.md) <br> 移动控制模式|
| [MoveFacingDirection](../enums/Gameplay.MoveFacingDirection.md) <br> 运动时面朝方向|
| [MovementDirection](../enums/Gameplay.MovementDirection.md) <br> 运动时依据的正方向|
| [MovementMode](../enums/Gameplay.MovementMode.md) <br> 角色状态|
| [ObjectTypeQuery](../enums/Gameplay.ObjectTypeQuery.md) <br> 碰撞检测通道|
| [ProjectileAccelerationEnableMode](../enums/Gameplay.ProjectileAccelerationEnableMode.md) <br> 投掷物加速启用模式|
| [ProjectileCollisionMode](../enums/Gameplay.ProjectileCollisionMode.md) <br> 投掷物碰撞反馈模式|
| [ProjectileLineStyle](../enums/Gameplay.ProjectileLineStyle.md) <br> 投掷物轨迹绘制的显示风格|
| [SkyPreset](../enums/Gameplay.SkyPreset.md) <br> 天空球预设枚举|
| [SlotType](../enums/Gameplay.SlotType.md) <br> 人形角色插槽类型|
| [SomatotypeV2](../enums/Gameplay.SomatotypeV2.md) <br> 角色体型|
| [StanceBlendMode](../enums/Gameplay.StanceBlendMode.md) <br> 姿态混合模式|
| [TouchInputType](../enums/Gameplay.TouchInputType.md) <br> 触摸类型|
| [VehicleDriveMode4W](../enums/Gameplay.VehicleDriveMode4W.md) <br> 四轮载具驱动模式|
| [VehicleWheelPosition4W](../enums/Gameplay.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置|
| [WidgetGeometryMode](../enums/Gameplay.WidgetGeometryMode.md) <br> UI形状枚举|
| [WidgetSpaceMode](../enums/Gameplay.WidgetSpaceMode.md) <br> UI空间位置枚举|

| Classes |
| :-----|
| [AICharacter](../classes/Gameplay.AICharacter.md) <br> 人形对象|
| [AbilityObject](../classes/Gameplay.AbilityObject.md) <br> 技能|
| [AbilityState](../classes/Gameplay.AbilityState.md) <br> 技能状态|
| [Anchor](../classes/Gameplay.Anchor.md) <br> 空锚点，可以用作根节点|
| [Animation](../classes/Gameplay.Animation.md) <br> 动画类|
| [BlockingArea](../classes/Gameplay.BlockingArea.md) <br> 禁行区|
| [BlockingAreaManager](../classes/Gameplay.BlockingAreaManager.md) <br> 禁行区管理类,用于调用禁行区的全局方法|
| [CameraSystem](../classes/Gameplay.CameraSystem.md) <br> 摄像机系统|
| [Character](../classes/Gameplay.Character.md) <br> Character拥有CharacterBase的所有功能，并且额外附带了CameraSystem，是由玩家控制的角色，通常被内置的输入系统所操作|
| [CharacterBase](../classes/Gameplay.CharacterBase.md) <br> CharacterBase是一个具有外观和动画表现，且内置移动逻辑的GameObject，具备GameObject的所有功能。|
| [Decoration](../classes/Gameplay.Decoration.md) <br> 挂件数据|
| [DirectionalLight](../classes/Gameplay.DirectionalLight.md) <br> 平行光|
| [EffectLogical](../classes/Gameplay.EffectLogical.md) <br> 效果逻辑对象|
| [Equipment](../classes/Gameplay.Equipment.md) <br> 装备对象|
| [FireDataInfoForMultiple](../classes/Gameplay.FireDataInfoForMultiple.md) <br> 获取开火时生成投掷物的着弹点位置、飞行距离、打击面圆的前/上/右单位向量、打击面圆的最大半径|
| [GameObject](../classes/Gameplay.GameObject.md) <br> GameObject的基类|
| [HitResult](../classes/Gameplay.HitResult.md) <br> 命中结果|
| [HotWeapon](../classes/Gameplay.HotWeapon.md) <br> 热武器|
| [HotWeaponAccuracyOfFireComponent](../classes/Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 热武器射击精度组件|
| [HotWeaponAimComponent](../classes/Gameplay.HotWeaponAimComponent.md) <br> 热武器瞄准组件|
| [HotWeaponFireComponent](../classes/Gameplay.HotWeaponFireComponent.md) <br> 热武器开火组件|
| [HotWeaponLoadComponent](../classes/Gameplay.HotWeaponLoadComponent.md) <br> 热武器上膛组件|
| [HotWeaponRecoilForceComponent](../classes/Gameplay.HotWeaponRecoilForceComponent.md) <br> 热武器 - 后坐力组件|
| [HotWeaponReloadComponent](../classes/Gameplay.HotWeaponReloadComponent.md) <br> 热武器换弹组件|
| [Humanoid](../classes/Gameplay.Humanoid.md) <br> Humanoid拥有CharacterBase的所有功能，与Character不同的是，它通常被用户自己实现AI逻辑操作|
| [HumanoidV1](../classes/Gameplay.HumanoidV1.md) <br> 人形对象V1接口|
| [HumanoidV1Face](../classes/Gameplay.HumanoidV1Face.md) <br> 人形对象V1脸部接口|
| [HumanoidV1Hair](../classes/Gameplay.HumanoidV1Hair.md) <br> 人形对象V1头发接口|
| [HumanoidV1Trunk](../classes/Gameplay.HumanoidV1Trunk.md) <br> 人形对象V1身体接口|
| [HumanoidV2](../classes/Gameplay.HumanoidV2.md) <br> 人形对象V2接口|
| [HumanoidV2BehindHairPart](../classes/Gameplay.HumanoidV2BehindHairPart.md) <br> 人形对象V2后发部位接口|
| [HumanoidV2FrontHairPart](../classes/Gameplay.HumanoidV2FrontHairPart.md) <br> 人形对象V2前发部位接口|
| [HumanoidV2GlovesPart](../classes/Gameplay.HumanoidV2GlovesPart.md) <br> 人形对象V2手套部位接口|
| [HumanoidV2HeadPart](../classes/Gameplay.HumanoidV2HeadPart.md) <br> 人形对象V2头部位接口|
| [HumanoidV2LowerClothPart](../classes/Gameplay.HumanoidV2LowerClothPart.md) <br> 人形对象V2下衣部位接口|
| [HumanoidV2Shape](../classes/Gameplay.HumanoidV2Shape.md) <br> 人形对象V2体型|
| [HumanoidV2ShoePart](../classes/Gameplay.HumanoidV2ShoePart.md) <br> 人形对象V2鞋子部位接口|
| [HumanoidV2UpperClothPart](../classes/Gameplay.HumanoidV2UpperClothPart.md) <br> 人形对象V2上衣部位接口|
| [InstanceStaticMesh](../classes/Gameplay.InstanceStaticMesh.md) <br> InstanceStaticMesh|
| [Interactor](../classes/Gameplay.Interactor.md) <br> 交互物功能对象，正重新改版，新交互物 InteractiveObject|
| [Optimization](../classes/Gameplay.Optimization.md) <br> 控制一些优化项的开启关闭|
| [Particle](../classes/Gameplay.Particle.md) <br> 特效对象|
| [PhysicsAngularMotor](../classes/Gameplay.PhysicsAngularMotor.md) <br> 物理力矩发动机|
| [PhysicsCable](../classes/Gameplay.PhysicsCable.md) <br> 物理绳组件|
| [PhysicsConstraintBase](../classes/Gameplay.PhysicsConstraintBase.md) <br> 物理约束基类对象|
| [PhysicsCylinder](../classes/Gameplay.PhysicsCylinder.md) <br> 物理圆柱组件|
| [PhysicsFulcrum](../classes/Gameplay.PhysicsFulcrum.md) <br> 物理支撑点组件|
| [PhysicsImpulse](../classes/Gameplay.PhysicsImpulse.md) <br> 冲量对象|
| [PhysicsIntegratedMover](../classes/Gameplay.PhysicsIntegratedMover.md) <br> 运动器组件|
| [PhysicsLinearMotor](../classes/Gameplay.PhysicsLinearMotor.md) <br> 物理线性发动机组件|
| [PhysicsPrism](../classes/Gameplay.PhysicsPrism.md) <br> 物理棱柱组件|
| [PhysicsRotation](../classes/Gameplay.PhysicsRotation.md) <br> 物理旋转轴|
| [PhysicsRotator](../classes/Gameplay.PhysicsRotator.md) <br> 旋转轴|
| [PhysicsSpring](../classes/Gameplay.PhysicsSpring.md) <br> 物理弹簧组件|
| [PhysicsStick](../classes/Gameplay.PhysicsStick.md) <br> 物理杆组件|
| [PhysicsThruster](../classes/Gameplay.PhysicsThruster.md) <br> 推进器|
| [Player](../classes/Gameplay.Player.md) <br> 角色控制|
| [PlayerStart](../classes/Gameplay.PlayerStart.md) <br> 玩家起始|
| [PointLight](../classes/Gameplay.PointLight.md) <br> 点光源|
| [PostProcess](../classes/Gameplay.PostProcess.md) <br> 后处理对象|
| [Prefab](../classes/Gameplay.Prefab.md) <br> 预制体|
| [Projectile](../classes/Gameplay.Projectile.md) <br> 投掷物逻辑对象|
| [ProjectileInst](../classes/Gameplay.ProjectileInst.md) <br> 投掷物 v2 实例|
| [ProjectileLauncher](../classes/Gameplay.ProjectileLauncher.md) <br> 投掷物 v2|
| [SkeletalMesh](../classes/Gameplay.SkeletalMesh.md) <br> 骨骼模型逻辑对象。用于对骨骼模型进行操作。|
| [SkyBox](../classes/Gameplay.SkyBox.md) <br> 天空球|
| [SkyLight](../classes/Gameplay.SkyLight.md) <br> 环境光|
| [SmoothSync](../classes/Gameplay.SmoothSync.md) <br> 平滑组件|
| [SomatotypeBase](../classes/Gameplay.SomatotypeBase.md) <br> 体型基类|
| [Sound](../classes/Gameplay.Sound.md) <br> 音效组件|
| [Stance](../classes/Gameplay.Stance.md) <br> 姿态|
| [StaticMesh](../classes/Gameplay.StaticMesh.md) <br> StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口|
| [SubStance](../classes/Gameplay.SubStance.md) <br> 二级姿态|
| [SwimmingVolume](../classes/Gameplay.SwimmingVolume.md) <br> 游泳区域|
| [TouchInput](../classes/Gameplay.TouchInput.md) <br> 玩家从可触摸设备获取的数据信息|
| [Trigger](../classes/Gameplay.Trigger.md) <br> 触发器|
| [UIWidget](../classes/Gameplay.UIWidget.md) <br> 世界UI组件|
| [Union](../classes/Gameplay.Union.md) <br> 合并对象|
| [VehicleCameraSetting](../classes/Gameplay.VehicleCameraSetting.md) <br> 载具摄像机|
| [WheeledVehicle4W](../classes/Gameplay.WheeledVehicle4W.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。|
| [modifierVolume](../classes/Gameplay.modifierVolume.md) <br> 提供基础寻路数据|

| Interfaces |
| :-----|
| [IHumanoidV1Part](../interfaces/Gameplay.IHumanoidV1Part.md) <br> 人形对象V1部位|
| [IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md) <br> 人形对象V2插槽和外形加载|
| [IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md) <br> 人形对象V2部位|
| [IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md) <br> 人形对象V2部位|
| [IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md) <br> 人形对象V2部位|
| [IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md) <br> 人形对象V2材质风格|
| [IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md) <br> 人形对象V2形体修改|
| [IPart](../interfaces/Gameplay.IPart.md) <br> 部位基类|

| Type Aliases |
| :-----|
| **[CameraShakeData](Gameplay.Gameplay.md#camerashakedata)**: `Object` <br> 摄像机震动数据|
| **[CameraSystemData](Gameplay.Gameplay.md#camerasystemdata)**: `Object` <br> 摄像机属性数据|
| **[Constructor](Gameplay.Gameplay.md#constructor)**<`T`\>: (...`args`: `any`[]) => `T` <br> 角色形象修改构造类型 |
| **[DecorationTuple](Gameplay.Gameplay.md#decorationtuple)**:  [`string`, [`Decoration`](../classes/Gameplay.Decoration.md), `Core.GameObject`] <br> 运行时态角色身上的挂件数据|
| **[EmptyCallback](Gameplay.Gameplay.md#emptycallback)**: () => `void` <br> 空的回调函数类型 |
| **[LoadAppearanceDataAllCompletedCallback](Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)**: () => `void` <br> 角色编辑器数据加载完成后的回调|
| **[OnMovementStateChanged](Gameplay.Gameplay.md#onmovementstatechanged)**: (`mode`: [`MovementMode`](../enums/Gameplay.MovementMode.md)) => `void` <br> 移动状态切换回调|
| **[OnRecvChatMessage](Gameplay.Gameplay.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[Oscillator](Gameplay.Gameplay.md#oscillator)**: `Object` <br> 震动数值|
| **[SetAppearanceDataCallback](Gameplay.Gameplay.md#setappearancedatacallback)**: (`APIName`: `string`) => `void` <br> 设置编辑数据完成的回调 |
| **[StringCallback](Gameplay.Gameplay.md#stringcallback)**: (`str`: `string`) => `void` <br> 返回String的回调|
| **[VehicleGearData](Gameplay.Gameplay.md#vehiclegeardata)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelData](Gameplay.Gameplay.md#vehiclewheeldata)**: `Object` <br> 四轮载具车轮属性|
| **[onAppearanceDataChanged](Gameplay.Gameplay.md#onappearancedatachanged)**: (`GUID`: `string`) => `void` <br> 角色身上GUID切换成功回调|

| Functions |
| :-----|
| **[addOutlineEffect](Gameplay.Gameplay.md#addoutlineeffect)**(`GameObject`, [`LinearColor`](../classes/Type.LinearColor.md), `number`, `number`, `number`, `boolean`, `boolean`): `void` <br> 添加描边效果|
| **[angleCheck](Gameplay.Gameplay.md#anglecheck)**([`Vector`](../classes/Type.Vector.md), [`Vector`](../classes/Type.Vector.md), [`Vector`](../classes/Type.Vector.md), `number`): `boolean` <br> 角度检查|
| **[asyncGetCurrentPlayer](Gameplay.Gameplay.md#asyncgetcurrentplayer)**(): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <br> 异步获取当前玩家|
| **[asyncGetPlayer](Gameplay.Gameplay.md#asyncgetplayer)**(`number`): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <br> 异步根据playerId获取Player|
| **[boxOverlapInLevel](Gameplay.Gameplay.md#boxoverlapinlevel)**([`Vector`](../classes/Type.Vector.md), [`Vector`](../classes/Type.Vector.md), `number`, `number`, `boolean`): `Core.GameObject`[] <br> 矩形范围检测|
| **[clearMoveTo](Gameplay.Gameplay.md#clearmoveto)**([`CharacterBase`](../classes/Gameplay.CharacterBase.md)): `void` <br> 导航停止|
| **[cylinderOverlap](Gameplay.Gameplay.md#cylinderoverlap)**([`Vector`](../classes/Type.Vector.md), `number`, `number`, `boolean`): `Core.GameObject`[] <br> 圆柱范围检测|
| **[getAllPlayers](Gameplay.Gameplay.md#getallplayers)**(): [`Player`](../classes/Gameplay.Player.md)[] <br> 当前所有Player|
| **[getClickGameObjectByScene](Gameplay.Gameplay.md#getclickgameobjectbyscene)**(`number`, `number`, `number`, `boolean`, `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取点击屏幕位置的物体|
| **[getCurrentPlayer](Gameplay.Gameplay.md#getcurrentplayer)**(): [`Player`](../classes/Gameplay.Player.md) <br> 获取当前玩家|
| **[getPlayer](Gameplay.Gameplay.md#getplayer)**(`number`): [`Player`](../classes/Gameplay.Player.md) <br> 获取玩家|
| **[getShootDir](Gameplay.Gameplay.md#getshootdir)**([`Character`](../classes/Gameplay.Character.md), [`Vector`](../classes/Type.Vector.md), `number`): [`Vector`](../classes/Type.Vector.md) <br> 获取某位置指向屏幕中心瞄准位置的向量|
| **[isDynamicVibration](Gameplay.Gameplay.md#isdynamicvibration)**(`boolean`): `void` <br> 振动开关|
| **[lineTrace](Gameplay.Gameplay.md#linetrace)**([`Vector`](../classes/Type.Vector.md), [`Vector`](../classes/Type.Vector.md), `boolean`, `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 射线检测|
| **[moveTo](Gameplay.Gameplay.md#moveto)**([`CharacterBase`](../classes/Gameplay.CharacterBase.md), [`Vector`](../classes/Type.Vector.md), `number`, () => `void`, () => `void`): `void` <br> 寻路移动|
| **[parabolicTrace](Gameplay.Gameplay.md#parabolictrace)**([`Vector`](../classes/Type.Vector.md), [`Vector`](../classes/Type.Vector.md), `number`, `number`, `number`, [`ObjectTypeQuery`](../enums/Gameplay.ObjectTypeQuery.md)[], `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md) <br> 抛物线检测|
| **[playDynamicForceFeedbackStart](Gameplay.Gameplay.md#playdynamicforcefeedbackstart)**(`number`, `number`): `void` <br> 播放震动|
| **[playDynamicForceFeedbackStop](Gameplay.Gameplay.md#playdynamicforcefeedbackstop)**(): `void` <br> 停止震动|
| **[removeOutlineEffect](Gameplay.Gameplay.md#removeoutlineeffect)**(`GameObject`): `void` <br> 移除描边效果|
| **[setGlobalAsyncTimeout](Gameplay.Gameplay.md#setglobalasynctimeout)**(`number`): `void` <br> 设置异步回调超时时间，单位毫秒，默认5000|
| **[setGlobalTimeDilation](Gameplay.Gameplay.md#setglobaltimedilation)**(`number`): `void` <br> 设置世界整体膨胀时间速度|
| **[setPlayerPassableForAllArea](Gameplay.Gameplay.md#setplayerpassableforallarea)**(`GameObject`, `boolean`): `void` <br> 设置所有禁行区对某个玩家的通过权限|
| **[setStaticMeshMaterialColor](Gameplay.Gameplay.md#setstaticmeshmaterialcolor)**(`GameObject`, [`LinearColor`](../classes/Type.LinearColor.md)): `void` <br> 设置物体静态网格材质颜色|
| **[spawnNewParticle](Gameplay.Gameplay.md#spawnnewparticle)**([`Particle`](../classes/Gameplay.Particle.md), [`Transform`](../classes/Type.Transform.md), `boolean`): `void` <br> 动态生成特效|
| **[spawnNewSound](Gameplay.Gameplay.md#spawnnewsound)**([`Sound`](../classes/Gameplay.Sound.md), [`Vector`](../classes/Type.Vector.md)): `void` <br> 动态生成音效|
| **[sphereOverlap](Gameplay.Gameplay.md#sphereoverlap)**([`Vector`](../classes/Type.Vector.md), `number`, `boolean`): `Core.GameObject`[] <br> 圆形范围检测|

## Type Aliases

### CameraShakeData <Score text="CameraShakeData" /> 

Ƭ **CameraShakeData**: `Object`

摄像机震动数据

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fovOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | FOV振荡 |
| `locXOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 位置X轴振荡 |
| `locYOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 位置Y轴振荡 |
| `locZOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 位置Z轴振荡 |
| `rotPitchOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 旋转Pitch轴振荡 |
| `rotRollOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 旋转Roll轴振荡 |
| `rotYawOscillation?` | [`Oscillator`](Gameplay.Gameplay.md#oscillator) | 旋转Yaw轴振荡 |

___

### CameraSystemData <Score text="CameraSystemData" /> 

Ƭ **CameraSystemData**: `Object`

摄像机属性数据

::: warning Precautions

主要给载具摄像机使用

:::

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraDownLimitAngle?` | `number` | 向下限制角度 |
| `cameraFOV?` | `number` | 视场 |
| `cameraLocationLagSpeed?` | `number` | 摄像机位置延迟速度 |
| `cameraLocationMode?` | [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) | 摄像机位置模式 |
| `cameraProjectionMode?` | [`CameraProjectionMode`](../enums/Gameplay.CameraProjectionMode.md) | 投影模式 |
| `cameraRelativeTransform?` | [`Transform`](../classes/Type.Transform.md) | 摄像机相对Transform |
| `cameraRotationLagSpeed?` | `number` | 摄像机旋转延迟速度 |
| `cameraRotationMode?` | [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) | 摄像机朝向模式 |
| `cameraUpLimitAngle?` | `number` | 向上限制角度 |
| `cameraWorldTransform?` | [`Transform`](../classes/Type.Transform.md) | 摄像机世界Transform |
| `enableCameraCollision?` | `boolean` | 是否有摄像机碰撞 |
| `enableCameraLocationLag?` | `boolean` | 开启摄像机位置延迟 |
| `enableCameraRotationLag?` | `boolean` | 开启摄像机旋转延迟 |
| `enableFadeEffect?` | `boolean` | 是否开启物体透明 |
| `enableRaiseCamera?` | `boolean` | 开启碰撞抬高 |
| `fadeEffectValue?` | `number` | 物体透明度 |
| `orthoFarClipPlane?` | `number` | 正交视图远平面距离 |
| `orthoNearClipPlane?` | `number` | 正交视图近平面距离 |
| `orthoWidth?` | `number` | 正交宽度 |
| `raiseCameraHeight?` | `number` | 抬高高度 |
| `slotOffset?` | [`Vector`](../classes/Type.Vector.md) | 摄像机位置偏移 |
| `targetArmLength?` | `number` | 距离调整 |
| `targetOffset?` | [`Vector`](../classes/Type.Vector.md) | 挂点位置偏移 |

___

### Constructor <Score text="Constructor" /> 

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SomatotypeBase`](../classes/Gameplay.SomatotypeBase.md) |

角色形象修改构造类型

___

### DecorationTuple <Score text="DecorationTuple" /> 

Ƭ **DecorationTuple**: [`string`, [`Decoration`](../classes/Gameplay.Decoration.md), `Core.GameObject`]

运行时态角色身上的挂件数据

___

### EmptyCallback <Score text="EmptyCallback" /> 

Ƭ **EmptyCallback**: () => `void`

空的回调函数类型

___

### LoadAppearanceDataAllCompletedCallback <Score text="LoadAppearanceDataAllCompletedCallback" /> 

Ƭ **LoadAppearanceDataAllCompletedCallback**: () => `void`

角色编辑器数据加载完成后的回调

___

### OnMovementStateChanged <Score text="OnMovementStateChanged" /> 

Ƭ **OnMovementStateChanged**: (`mode`: [`MovementMode`](../enums/Gameplay.MovementMode.md)) => `void`

移动状态切换回调

___

### OnRecvChatMessage <Score text="OnRecvChatMessage" /> 

Ƭ **OnRecvChatMessage**: (`nCount`: `number`, `ChatContent`: `string`) => `void`

接收聊天信息回调方法类型

___

### Oscillator <Score text="Oscillator" /> 

Ƭ **Oscillator**: `Object`

震动数值

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amplitude?` | `number` | 正弦振荡的幅度 |
| `frequency?` | `number` | 正弦振荡的频率 |
| `waveform?` | [`EOscillatorWaveform`](../enums/Gameplay.EOscillatorWaveform.md) | 用于振荡的波形类型 |

___

### SetAppearanceDataCallback <Score text="SetAppearanceDataCallback" /> 

Ƭ **SetAppearanceDataCallback**: (`APIName`: `string`) => `void`

设置编辑数据完成的回调

___

### StringCallback <Score text="StringCallback" /> 

Ƭ **StringCallback**: (`str`: `string`) => `void`

返回String的回调

___

### VehicleGearData <Score text="VehicleGearData" /> 

Ƭ **VehicleGearData**: `Object`

四轮载具挡位属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearDownRatio` | `number` | 下齿比值 |
| `gearLevel` | `number` | 挡位级别 |
| `gearRatio` | `number` | 齿比值 |
| `gearUpRatio` | `number` | 上齿比值 |

___

### VehicleWheelData <Score text="VehicleWheelData" /> 

Ƭ **VehicleWheelData**: `Object`

四轮载具车轮属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelAngle` | `number` | 车轮最大转向角度 |
| `wheelPosition` | [`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md) | 车轮位置 |
| `wheelRadius` | `number` | 车轮半径 |

___

### onAppearanceDataChanged <Score text="onAppearanceDataChanged" /> 

Ƭ **onAppearanceDataChanged**: (`GUID`: `string`) => `void`

角色身上GUID切换成功回调


## Functions

### addOutlineEffect <Score text="addOutlineEffect" /> 

▸ **addOutlineEffect**(`obj`, `OutlineColor?`, `OutlineWidth?`, `OutlineDepthOffset?`, `OutlineClampValue?`, `considerCameraPosition?`, `outlineSilhouetteOnly?`): `void` <Badge type="tip" text="other" />

添加描边效果

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 需要操作的物体 |
| `OutlineColor?` | [`LinearColor`](../classes/Type.LinearColor.md) | 描边颜色 default:Type.LinearColor.black |
| `OutlineWidth?` | `number` | 描边宽度 default:2 |
| `OutlineDepthOffset?` | `number` | 描边深度偏移 default:0 范围：-25 - 25 |
| `OutlineClampValue?` | `number` | 描边范围 default:0.93 范围：0 - 1 |
| `considerCameraPosition?` | `boolean` | 是否考虑相机位置 default:false |
| `outlineSilhouetteOnly?` | `boolean` | 是否仅轮廓描边 default:true |


___

### angleCheck <Score text="angleCheck" /> 

▸ **angleCheck**(`StartLocation`, `StartDirection`, `TargetLocation`, `Angle`): `boolean` <Badge type="tip" text="other" />

角度检查


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `StartDirection` | [`Vector`](../classes/Type.Vector.md) | 起始方向 |
| `TargetLocation` | [`Vector`](../classes/Type.Vector.md) | 目标位置 |
| `Angle` | `number` | 检测角 |

#### Returns

`boolean`

true，在角度范围内

___

### asyncGetCurrentPlayer <Score text="asyncGetCurrentPlayer" /> 

▸ **asyncGetCurrentPlayer**(): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <Badge type="tip" text="other" />

异步获取当前玩家


#### Returns

`Promise`<[`Player`](../classes/Gameplay.Player.md)\>

当前玩家

___

### asyncGetPlayer <Score text="asyncGetPlayer" /> 

▸ **asyncGetPlayer**(`playerId`): `Promise`<[`Player`](../classes/Gameplay.Player.md)\> <Badge type="tip" text="other" />

异步根据playerId获取Player


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` | playerId |

#### Returns

`Promise`<[`Player`](../classes/Gameplay.Player.md)\>

playerId对应的玩家

___

### boxOverlapInLevel <Score text="boxOverlapInLevel" /> 

▸ **boxOverlapInLevel**(`StartLocation`, `EndLocation`, `Width`, `Height`, `debug`): `Core.GameObject`[] <Badge type="tip" text="other" />

矩形范围检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `EndLocation` | [`Vector`](../classes/Type.Vector.md) | 结束位置 |
| `Width` | `number` | 检测宽度 |
| `Height` | `number` | 检测高度 |
| `debug` | `boolean` | 是否可视化绘制 |

#### Returns

`Core.GameObject`[]

GameObject数组

___

### clearMoveTo <Score text="clearMoveTo" /> 

▸ **clearMoveTo**(`player`): `void` <Badge type="tip" text="other" />

导航停止

双端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) | 角色对象 |


___

### cylinderOverlap <Score text="cylinderOverlap" /> 

▸ **cylinderOverlap**(`StartLocation`, `Radius`, `Height`, `debug`): `Core.GameObject`[] <Badge type="tip" text="other" />

圆柱范围检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Radius` | `number` | 检测半径 |
| `Height` | `number` | 检测高度 |
| `debug` | `boolean` | 是否可视化绘制 |

#### Returns

`Core.GameObject`[]

GameObject数组

___

### getAllPlayers <Score text="getAllPlayers" /> 

▸ **getAllPlayers**(): [`Player`](../classes/Gameplay.Player.md)[] <Badge type="tip" text="other" />

当前所有Player


#### Returns

[`Player`](../classes/Gameplay.Player.md)[]

当前所有Player

___

### getClickGameObjectByScene <Score text="getClickGameObjectByScene" /> 

▸ **getClickGameObjectByScene**(`SceneX`, `SceneY`, `Distance`, `multiTrace`, `onRay`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="other" />

获取点击屏幕位置的物体

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SceneX` | `number` | 视口坐标X |
| `SceneY` | `number` | 视口坐标Y |
| `Distance` | `number` | 检测距离 |
| `multiTrace` | `boolean` | 是否获取多个GameObject |
| `onRay` | `boolean` | 是否开启射线显示效果 |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

点击位置的物体

___

### getCurrentPlayer <Score text="getCurrentPlayer" /> 

▸ **getCurrentPlayer**(): [`Player`](../classes/Gameplay.Player.md) <Badge type="tip" text="other" />

获取当前玩家


#### Returns

[`Player`](../classes/Gameplay.Player.md)

当前玩家

___

### getPlayer <Score text="getPlayer" /> 

▸ **getPlayer**(`playerId`): [`Player`](../classes/Gameplay.Player.md) <Badge type="tip" text="other" />

获取玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` | playerId |

#### Returns

[`Player`](../classes/Gameplay.Player.md)

当前玩家

___

### getShootDir <Score text="getShootDir" /> 

▸ **getShootDir**(`character`, `startLoc`, `distance?`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="other" />

获取某位置指向屏幕中心瞄准位置的向量

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/Gameplay.Character.md) | 角色 |
| `startLoc` | [`Vector`](../classes/Type.Vector.md) | 发射位置 |
| `distance?` | `number` | 有效距离 default:1000mm |

#### Returns

[`Vector`](../classes/Type.Vector.md)

指向屏幕中心瞄准位置的向量

___

### isDynamicVibration <Score text="isDynamicVibration" /> 

▸ **isDynamicVibration**(`value`): `void` <Badge type="tip" text="other" />

振动开关

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | -true:开启震动，-false:关闭震动 |


___

### lineTrace <Score text="lineTrace" /> 

▸ **lineTrace**(`StartLocation`, `EndLocation`, `multiTrace`, `debug`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="other" />

射线检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `EndLocation` | [`Vector`](../classes/Type.Vector.md) | 结束位置 |
| `multiTrace` | `boolean` | 是否穿透检测 |
| `debug` | `boolean` | 是否可视化绘制 |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

HitResult数组

___

### moveTo <Score text="moveTo" /> 

▸ **moveTo**(`player`, `Location`, `Radius?`, `OnSuccess?`, `OnFail?`): `void` <Badge type="tip" text="other" />

寻路移动

双端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) | 移动角色 |
| `Location` | [`Vector`](../classes/Type.Vector.md) | 目标位置 |
| `Radius?` | `number` | 距目标半径 default:0 |
| `OnSuccess?` | () => `void` | 成功回调 default:null |
| `OnFail?` | () => `void` | 失败回调 default:null |


___

### parabolicTrace <Score text="parabolicTrace" /> 

▸ **parabolicTrace**(`StartLocation`, `Direction`, `InitSpeed`, `Range`, `CapsuleRadius`, `IgnoreObjectTypes`, `debug`): [`HitResult`](../classes/Gameplay.HitResult.md) <Badge type="tip" text="other" />

抛物线检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Direction` | [`Vector`](../classes/Type.Vector.md) | 投掷方向 |
| `InitSpeed` | `number` | 初始速度 |
| `Range` | `number` | 距离 |
| `CapsuleRadius` | `number` | 胶囊半径 |
| `IgnoreObjectTypes` | [`ObjectTypeQuery`](../enums/Gameplay.ObjectTypeQuery.md)[] | 忽略Object类型 |
| `debug` | `boolean` | 是否可视化绘制 |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)

HitResult

___

### playDynamicForceFeedbackStart <Score text="playDynamicForceFeedbackStart" /> 

▸ **playDynamicForceFeedbackStart**(`Intensity?`, `Duration?`): `void` <Badge type="tip" text="other" />

播放震动

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Intensity?` | `number` | 强度 default:1 |
| `Duration?` | `number` | 周期 -1 是一直震动 default:-1 |


___

### playDynamicForceFeedbackStop <Score text="playDynamicForceFeedbackStop" /> 

▸ **playDynamicForceFeedbackStop**(): `void` <Badge type="tip" text="other" />

停止震动

客户端生效


___

### removeOutlineEffect <Score text="removeOutlineEffect" /> 

▸ **removeOutlineEffect**(`obj`): `void` <Badge type="tip" text="other" />

移除描边效果

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 需要操作的物体 |


___

### setGlobalAsyncTimeout <Score text="setGlobalAsyncTimeout" /> 

▸ **setGlobalAsyncTimeout**(`overtime`): `void` <Badge type="tip" text="other" />

设置异步回调超时时间，单位毫秒，默认5000


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `overtime` | `number` | 超时时间 |


___

### setGlobalTimeDilation <Score text="setGlobalTimeDilation" /> 

▸ **setGlobalTimeDilation**(`Time`): `void` <Badge type="tip" text="other" />

设置世界整体膨胀时间速度


::: warning Precautions

世界整体膨胀时间速度默认为1，当膨胀时间速度设置小于1时，世界中所有对象的整体运行时间会开始变慢。膨胀时间速度最小值为0.2。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` | 膨胀时间速度 |


___

### setPlayerPassableForAllArea <Score text="setPlayerPassableForAllArea" /> 

▸ **setPlayerPassableForAllArea**(`Target`, `CanPass`): `void` <Badge type="tip" text="other" />

设置所有禁行区对某个玩家的通过权限


使用示例:设置所有禁行区对某个玩家的通过权限,安全的版本
```ts
setPassableBlockingAreaActor(player,true)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | `GameObject` | 目标玩家 |
| `CanPass` | `boolean` | 是否允许通过 |


___

### setStaticMeshMaterialColor <Score text="setStaticMeshMaterialColor" /> 

▸ **setStaticMeshMaterialColor**(`obj`, `color`): `void` <Badge type="tip" text="other" />

设置物体静态网格材质颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |


___

### spawnNewParticle <Score text="spawnNewParticle" /> 

▸ **spawnNewParticle**(`template`, `trans`, `bloop?`): `void` <Badge type="tip" text="other" />

动态生成特效

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | [`Particle`](../classes/Gameplay.Particle.md) | 特效模板 |
| `trans` | [`Transform`](../classes/Type.Transform.md) | 生成位置 |
| `bloop?` | `boolean` | 是否循环 default:false |


___

### spawnNewSound <Score text="spawnNewSound" /> 

▸ **spawnNewSound**(`template`, `location`): `void` <Badge type="tip" text="other" />

动态生成音效

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | [`Sound`](../classes/Gameplay.Sound.md) | 音效模板 |
| `location` | [`Vector`](../classes/Type.Vector.md) | 位置 |


___

### sphereOverlap <Score text="sphereOverlap" /> 

▸ **sphereOverlap**(`StartLocation`, `Radius`, `debug`): `Core.GameObject`[] <Badge type="tip" text="other" />

圆形范围检测


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/Type.Vector.md) | 起始位置 |
| `Radius` | `number` | 检测半径 |
| `debug` | `boolean` | 是否可视化绘制 |

#### Returns

`Core.GameObject`[]

GameObject数组
