Classes


# Classes <Badge type="tip" text="Groups" /> <Score text="Classes" />


## A
| Name | Description | Groups |
| :-----| :-----| :-----|
| [AICharacter](classes/Gameplay.AICharacter.md) | 在CharacterBase上派生的人形非玩家对象,限定了形象是人形,该对象通常被用户用于实现拥有自主功能的角色对象. | [Avatar](groups/Avatar.Avatar.md) |
| [AbilityObject](classes/Gameplay.AbilityObject.md) | 能力对象，提供角色按指定一系列的能力序列进行动画自动切换的功能。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [AbilityState](classes/Gameplay.AbilityState.md) | 能力状态，用于读取/配置能力对象的能力相关的属性 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [AccountService](classes/Service.AccountService.md) | 用户账号信息管理相关服务 | [Social](groups/Social.Social.md) |
| [Action](classes/Type.Action.md) | 任意参数的代理 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [Action1](classes/Type.Action1.md) | 一个参数的代理 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [Action2](classes/Type.Action2.md) | 两个参数的代理 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [Action3](classes/Type.Action3.md) | 三个参数的代理 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [AdsService](classes/Service.AdsService.md) | 广告服务，支持激励/插屏类型 | [Monetization](groups/Monetization.Monetization.md) |
| [AnalogInputEvent](classes/UI.AnalogInputEvent.md) | 轴输入事件 | [Gui](groups/Gui.Gui.md) |
| [AnalyticsService](classes/Service.AnalyticsService.md) | 分析服务 | [Debugging](groups/Debugging.Debugging.md) |
| [Anchor](classes/Gameplay.Anchor.md) | 空锚点，用于位置标识，打组使用时可做作为根节点，可以对一组物体整体进行位移、旋转、缩放。动态生成无实际使用意义，不推荐。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Animation](classes/Gameplay.Animation.md) | 动画类 | [Animations](groups/Animations.Animations.md) |
| [AssetIconData](classes/UI.AssetIconData.md) | 资源ICON信息 | [Gui](groups/Gui.Gui.md) |


## B
| Name | Description | Groups |
| :-----| :-----| :-----|
| [BasePanel](classes/Extension.BasePanel.md) | 面板类的基类，可用于控制一个界面 | [Gui](groups/Gui.Gui.md) |
| [BaseView](classes/Extension.BaseView.md) | 界面类的基类 | [Gui](groups/Gui.Gui.md) |
| [BlockingArea](classes/Gameplay.BlockingArea.md) | 禁行区，用于控制个角色是否可以进出此区域，默认阻挡，角色可站立 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [BlockingAreaManager](classes/Gameplay.BlockingAreaManager.md) | 禁行区管理类,用于调用禁行区的全局方法 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Button](classes/UI.Button.md) | 按钮,无默认text | [Gui](groups/Gui.Gui.md) |


## C
| Name | Description | Groups |
| :-----| :-----| :-----|
| [CameraSystem](classes/Gameplay.CameraSystem.md) | 摄像机系统，是依托于角色，作为角色的组件存在，在此组件下还有一个用来确定视口位置的摄像机组件 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Canvas](classes/UI.Canvas.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [Gui](groups/Gui.Gui.md) |
| [Character](classes/Gameplay.Character.md) | 在CharacterBase上派生的玩家操控对象,该对象是玩家加入游戏之后,在服务器上根据配置生成,并同步到客户端的. | [Avatar](groups/Avatar.Avatar.md) |
| [CharacterBase](classes/Gameplay.CharacterBase.md) | 角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动. | [Avatar](groups/Avatar.Avatar.md) |
| [CharacterEvent](classes/UI.CharacterEvent.md) | 角色输入事件 | [Gui](groups/Gui.Gui.md) |
| [ColorPick](classes/UI.ColorPick.md) | 颜色选择器 | [Gui](groups/Gui.Gui.md) |
| [ConvertScreenResult](classes/Type.ConvertScreenResult.md) | 屏幕坐标转换结果 | [Gameplay](groups/Gameplay.Gameplay.md) |


## D
| Name | Description | Groups |
| :-----| :-----| :-----|
| [DataCenterC](classes/Extension.DataCenterC.md) | 客户端数据中心，里面存放着当前玩家的数据 | [Data](groups/Data.Data.md) |
| [DataCenterS](classes/Extension.DataCenterS.md) | 服务端数据中心，管理所有玩家的数据 | [Data](groups/Data.Data.md) |
| [DebugService](classes/Service.DebugService.md) | debug调试服务 | [Debugging](groups/Debugging.Debugging.md) |
| [Decoration](classes/Gameplay.Decoration.md) | 平台形象特有的挂件数据格式 | [Avatar](groups/Avatar.Avatar.md) |
| [DefaultData](classes/Gameplay.DefaultData.md) | 角色数据类型 | [Avatar](groups/Avatar.Avatar.md) |
| [Delegate](classes/Type.Delegate.md) | 委托 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [DirectionalLight](classes/Gameplay.DirectionalLight.md) | 平行光 | [Lighting](groups/Lighting.Lighting.md) |
| [DragDropOperation](classes/UI.DragDropOperation.md) | UI 拖拽事件 | [Gui](groups/Gui.Gui.md) |
| [DragDropPayLoad](classes/UI.DragDropPayLoad.md) | 拖拽事件数据传递类 | [Gui](groups/Gui.Gui.md) |


## E
| Name | Description | Groups |
| :-----| :-----| :-----|
| [EditorMode](classes/MobileEditor.EditorMode.md) | 移动编辑器模式切换 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [EffectLogical](classes/Gameplay.EffectLogical.md) | 区域效果是一个可以播放特效并带有范围判定的一个对象。开发者可以自定义范围的形状，然后获取该范围内的角色。该对象在游戏开放中常用于释放带变化范围判定的特效技能，例如蓄力重击和蔓延伤害技能 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [EffectService](classes/Service.EffectService.md) | 特效服务 | [Utility](groups/Utility.Utility.md) |
| [Equipment](classes/Gameplay.Equipment.md) | 装备对象，无自带模型，有三种状态判定（无装备，有装备收起状态，有装备持有状态），动态生成需自行配置各状态的动作姿态及绑定插槽。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [EventListener](classes/Events.EventListener.md) | 事件监听器 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [EventReply](classes/UI.EventReply.md) | 事件回复 | [Gui](groups/Gui.Gui.md) |


## F
| Name | Description | Groups |
| :-----| :-----| :-----|
| [FireDataInfoForMultiple](classes/Gameplay.FireDataInfoForMultiple.md) | 热武器逻辑组件专用的临时类， | [Gameplay](groups/Gameplay.Gameplay.md) |
| [FocusEvent](classes/UI.FocusEvent.md) | 焦点事件 | [Gui](groups/Gui.Gui.md) |
| [FourFootStandard](classes/Gameplay.FourFootStandard.md) | 四足外观形象对象,用于四足外观的设置. | [Avatar](groups/Avatar.Avatar.md) |


## G
| Name | Description | Groups |
| :-----| :-----| :-----|
| [GameInitializer](classes/Extension.GameInitializer.md) | 游戏初始化 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [GameObjPool](classes/Extension.GameObjPool.md) | GameObject对象池 | [Utility](groups/Utility.Utility.md) |
| [GameObject](classes/Gameplay.GameObject.md) | GameObject的基类 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Geometry](classes/UI.Geometry.md) | 几何坐标信息 | [Gui](groups/Gui.Gui.md) |
| [GestureDelegate](classes/MobileEditor.GestureDelegate.md) | 手势代理类 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [Gizmo](classes/MobileEditor.Gizmo.md) | Gizmo | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Group](classes/Util.Util.TweenUtil.Group.md) | 补间组，用于同时控制多个补间对象 | [Utility](groups/Utility.Utility.md) |


## H
| Name | Description | Groups |
| :-----| :-----| :-----|
| [HitResult](classes/Gameplay.HitResult.md) | 命中结果 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeapon](classes/Gameplay.HotWeapon.md) | 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponAccuracyOfFireComponent](classes/Gameplay.HotWeaponAccuracyOfFireComponent.md) | 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponAimComponent](classes/Gameplay.HotWeaponAimComponent.md) | 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponFireComponent](classes/Gameplay.HotWeaponFireComponent.md) | 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponLoadComponent](classes/Gameplay.HotWeaponLoadComponent.md) | 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponRecoilForceComponent](classes/Gameplay.HotWeaponRecoilForceComponent.md) | 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponReloadComponent](classes/Gameplay.HotWeaponReloadComponent.md) | 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Humanoid](classes/Gameplay.Humanoid.md) | 在CharacterBase上派生的人形非玩家对象,限定了形象是人形,该对象通常被用户用于实现拥有自主功能的角色对象. | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV1](classes/Gameplay.HumanoidV1.md) | 人形外观形象对象,用于基础人形外观的设置. | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV1Face](classes/Gameplay.HumanoidV1Face.md) | 人形对象V1脸部接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV1Hair](classes/Gameplay.HumanoidV1Hair.md) | 人形对象V1头发接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV1Part](classes/Gameplay.HumanoidV1Part.md) | 人形对象V1头发接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV1Trunk](classes/Gameplay.HumanoidV1Trunk.md) | 人形对象V1身体接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2](classes/Gameplay.HumanoidV2.md) | 人形外观形象对象,用于高级人形外观的设置. | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2BehindHairPart](classes/Gameplay.HumanoidV2BehindHairPart.md) | 人形对象V2后发部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2ClothPart](classes/Gameplay.HumanoidV2ClothPart.md) | 人形对象V2上衣部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2FrontHairPart](classes/Gameplay.HumanoidV2FrontHairPart.md) | 人形对象V2前发部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2GlovesPart](classes/Gameplay.HumanoidV2GlovesPart.md) | 人形对象V2手套部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2HairPart](classes/Gameplay.HumanoidV2HairPart.md) | 人形对象V2前发部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2HeadPart](classes/Gameplay.HumanoidV2HeadPart.md) | 人形对象V2头部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2LowerClothPart](classes/Gameplay.HumanoidV2LowerClothPart.md) | 人形对象V2下衣部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2Shape](classes/Gameplay.HumanoidV2Shape.md) | 人形对象V2体型 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2ShoePart](classes/Gameplay.HumanoidV2ShoePart.md) | 人形对象V2鞋子部位接口 | [Avatar](groups/Avatar.Avatar.md) |
| [HumanoidV2UpperClothPart](classes/Gameplay.HumanoidV2UpperClothPart.md) | 人形对象V2上衣部位接口 | [Avatar](groups/Avatar.Avatar.md) |


## I
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Image](classes/UI.Image.md) | UI 图片 | [Gui](groups/Gui.Gui.md) |
| [Impulse](classes/Gameplay.Impulse.md) | 冲量对象 | [Physics](groups/Physics.Physics.md) |
| [InputBox](classes/UI.InputBox.md) | UI的输入框 | [Gui](groups/Gui.Gui.md) |
| [InputEvent](classes/UI.InputEvent.md) | 输入事件 | [Gui](groups/Gui.Gui.md) |
| [InstanceStaticMesh](classes/Gameplay.InstanceStaticMesh.md) | InstanceStaticMesh | [Gameplay](groups/Gameplay.Gameplay.md) |
| [IntegratedMover](classes/Gameplay.IntegratedMover.md) | 运动器组件 | [Physics](groups/Physics.Physics.md) |
| [InteractiveObject](classes/Gameplay.InteractiveObject.md) | 交互物功能对象 V2 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Interactor](classes/Gameplay.Interactor.md) | 交互物功能对象，提供角色与场景中物体的交互功能，交互即将角色切换到特定姿态、位置并绑定到交互物上的过程。此对象常用于场景中椅子，沙发，器材等位置。 | [Gameplay](groups/Gameplay.Gameplay.md) |


## J
| Name | Description | Groups |
| :-----| :-----| :-----|
| [JoystickStyleDesigner](classes/UI.JoystickStyleDesigner.md) | 摇杆信息 | [Gui](groups/Gui.Gui.md) |


## K
| Name | Description | Groups |
| :-----| :-----| :-----|
| [KeyEvent](classes/UI.KeyEvent.md) | 按键事件 | [Gui](groups/Gui.Gui.md) |


## L
| Name | Description | Groups |
| :-----| :-----| :-----|
| [LinearColor](classes/Type.LinearColor.md) | 线性RGBA颜色 | [Data](groups/Data.Data.md) |


## M
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Margin](classes/UI.Margin.md) | 基础的边距，提供4个方向的数值修改 | [Gui](groups/Gui.Gui.md) |
| [MaskButton](classes/UI.MaskButton.md) | 遮罩 | [Gui](groups/Gui.Gui.md) |
| [Matrix3x3](classes/Type.Matrix3x3.md) | 三维矩阵 | [Data](groups/Data.Data.md) |
| [Matrix4x4](classes/Type.Matrix4x4.md) | 四维矩阵 | [Data](groups/Data.Data.md) |
| [MessageChannelService](classes/Service.MessageChannelService.md) | 支持各端的通信，233、引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [ModuleC](classes/Extension.ModuleC.md) | 客户端模块的基类 | [Utility](groups/Utility.Utility.md) |
| [ModuleManager](classes/Extension.ModuleManager.md) | 模块管理 | [Utility](groups/Utility.Utility.md) |
| [ModuleS](classes/Extension.ModuleS.md) | 服务端模块的基类 | [Utility](groups/Utility.Utility.md) |
| [MulticastDelegate](classes/Type.MulticastDelegate.md) | 多播委托接口 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [MulticastGameObjectDelegate](classes/Type.MulticastGameObjectDelegate.md) | 广播代理 | [Scripiting](groups/Scripiting.Scripiting.md) |


## N
| Name | Description | Groups |
| :-----| :-----| :-----|
| [NPC](classes/Gameplay.NPC.md) | NPC 是在CharacterBase上派生的非玩家对象,不限定形象的角色对象,该对象通常被用户用于实现拥有自主功能的角色对象.生成方式:可以通过将非玩家对象(NPC)放置在场景中,由场景反序列化生成对象,也可以通过代码动态生成:Core.GameObject.spawnGameObject("NPC") as NPC; | [Avatar](groups/Avatar.Avatar.md) |
| [NavModifierVolume](classes/Gameplay.NavModifierVolume.md) | 提供基础寻路数据 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [NetObject](classes/Extension.NetObject.md) | 网络对象 | [Utility](groups/Utility.Utility.md) |
| [NetObjectC](classes/Extension.NetObjectC.md) | 客户端的网络对象 | [Utility](groups/Utility.Utility.md) |
| [NetObjectS](classes/Extension.NetObjectS.md) | 服务端的网络对象 | [Utility](groups/Utility.Utility.md) |


## O
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ObjPool](classes/Extension.ObjPool.md) | 对象池 | [Utility](groups/Utility.Utility.md) |
| [Optimization](classes/Gameplay.Optimization.md) | 控制一些优化项的开启关闭 | [Settings](groups/Settings.Settings.md) |


## P
| Name | Description | Groups |
| :-----| :-----| :-----|
| [PanelWidget](classes/UI.PanelWidget.md) | UI的PanelWidget可以挂载子节点 | [Gui](groups/Gui.Gui.md) |
| [Particle](classes/Gameplay.Particle.md) | 特效对象 | [Effects](groups/Effects.Effects.md) |
| [PhysicsAngularMotor](classes/Gameplay.PhysicsAngularMotor.md) | 物理力矩发动机 | [Physics](groups/Physics.Physics.md) |
| [PhysicsCable](classes/Gameplay.PhysicsCable.md) | 物理绳组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsConstraintBase](classes/Gameplay.PhysicsConstraintBase.md) | 物理约束基类对象 | [Physics](groups/Physics.Physics.md) |
| [PhysicsCylinder](classes/Gameplay.PhysicsCylinder.md) | 物理圆柱组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsFulcrum](classes/Gameplay.PhysicsFulcrum.md) | 物理支撑点组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsLinearMotor](classes/Gameplay.PhysicsLinearMotor.md) | 物理线性发动机组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsPrism](classes/Gameplay.PhysicsPrism.md) | 物理棱柱组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsRotation](classes/Gameplay.PhysicsRotation.md) | 物理旋转轴 | [Physics](groups/Physics.Physics.md) |
| [PhysicsRotator](classes/Gameplay.PhysicsRotator.md) | 旋转轴 | [Physics](groups/Physics.Physics.md) |
| [PhysicsSpring](classes/Gameplay.PhysicsSpring.md) | 物理弹簧组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsStick](classes/Gameplay.PhysicsStick.md) | 物理杆组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsThruster](classes/Gameplay.PhysicsThruster.md) | 推进器 | [Physics](groups/Physics.Physics.md) |
| [Player](classes/Gameplay.Player.md) | 角色控制 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [PlayerStart](classes/Gameplay.PlayerStart.md) | 玩家起始 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [PointLight](classes/Gameplay.PointLight.md) | 点光源 | [Lighting](groups/Lighting.Lighting.md) |
| [PointerEvent](classes/UI.PointerEvent.md) | 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类 | [Gui](groups/Gui.Gui.md) |
| [PostProcess](classes/Gameplay.PostProcess.md) | 后处理对象 | [Lighting](groups/Lighting.Lighting.md) |
| [Prefab](classes/Gameplay.Prefab.md) | 预制体 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [ProgressBar](classes/UI.ProgressBar.md) | UI进度条 | [Gui](groups/Gui.Gui.md) |
| [Projectile](classes/Gameplay.Projectile.md) | 投掷物逻辑对象 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [ProjectileInst](classes/Gameplay.ProjectileInst.md) | 投掷物 v2 实例 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [ProjectileLauncher](classes/Gameplay.ProjectileLauncher.md) | 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [PurchaseService](classes/Service.PurchaseService.md) | 应用内购服务 | [Monetization](groups/Monetization.Monetization.md) |


## Q
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Quaternion](classes/Type.Quaternion.md) | 四元数 | [Data](groups/Data.Data.md) |


## R
| Name | Description | Groups |
| :-----| :-----| :-----|
| [RoomService](classes/Service.RoomService.md) | MGS以及玩家信息、数据、头像等相关API | [Social](groups/Social.Social.md) |
| [Rotation](classes/Type.Rotation.md) | 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 | [Data](groups/Data.Data.md) |
| [RouteService](classes/Service.RouteService.md) | 游戏管理器 | [Social](groups/Social.Social.md) |


## S
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ScrollBox](classes/UI.ScrollBox.md) | 滑动框 | [Gui](groups/Gui.Gui.md) |
| [Sequence](classes/Util.Util.TweenUtil.Sequence.md) | 序列工具类，主要用于获取连续的ID | [Utility](groups/Utility.Utility.md) |
| [SkeletalMesh](classes/Gameplay.SkeletalMesh.md) | 骨骼模型逻辑对象。用于对骨骼模型进行操作。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [SkyBox](classes/Gameplay.SkyBox.md) | 天空球 | [Lighting](groups/Lighting.Lighting.md) |
| [SkyLight](classes/Gameplay.SkyLight.md) | 环境光 | [Lighting](groups/Lighting.Lighting.md) |
| [SlateBrushWithGuid](classes/UI.SlateBrushWithGuid.md) | 贴图信息 | [Gui](groups/Gui.Gui.md) |
| [SlateColor](classes/UI.SlateColor.md) | UI颜色管理 | [Gui](groups/Gui.Gui.md) |
| [SmoothSync](classes/Gameplay.SmoothSync.md) | 平滑组件 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [SomatotypeBase](classes/Gameplay.SomatotypeBase.md) | 体型基类 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Sound](classes/Gameplay.Sound.md) | 音效组件 | [Sounds](groups/Sounds.Sounds.md) |
| [SoundService](classes/Service.SoundService.md) | 音效管理器 | [Utility](groups/Utility.Utility.md) |
| [StaleButton](classes/UI.StaleButton.md) | 按钮 | [Gui](groups/Gui.Gui.md) |
| [Stance](classes/Gameplay.Stance.md) | 姿态 | [Animations](groups/Animations.Animations.md) |
| [StaticMesh](classes/Gameplay.StaticMesh.md) | StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [SubStance](classes/Gameplay.SubStance.md) | 二级姿态 | [Animations](groups/Animations.Animations.md) |
| [Subdata](classes/Extension.Subdata.md) | 数据控制类的基类 | [Data](groups/Data.Data.md) |
| [SwimmingVolume](classes/Gameplay.SwimmingVolume.md) | 游泳区域 | [Gameplay](groups/Gameplay.Gameplay.md) |


## T
| Name | Description | Groups |
| :-----| :-----| :-----|
| [TabGroup](classes/UI.TabGroup.md) | 选项卡组 | [Gui](groups/Gui.Gui.md) |
| [TextBlock](classes/UI.TextBlock.md) | UI文本 | [Gui](groups/Gui.Gui.md) |
| [TouchInput](classes/Gameplay.TouchInput.md) | 玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开) | [Input](groups/Input.Input.md) |
| [TouchPad](classes/UI.TouchPad.md) | 摄像机滑动区 | [Gui](groups/Gui.Gui.md) |
| [Transform](classes/Type.Transform.md) | Transform 由缩放、旋转和平移组成 | [Data](groups/Data.Data.md) |
| [Trigger](classes/Gameplay.Trigger.md) | 触发器，对进入/离开触发器范围的事件进行响应 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Tween](classes/Util.Util.TweenUtil.Tween.md) | 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 | [Utility](groups/Utility.Utility.md) |


## U
| Name | Description | Groups |
| :-----| :-----| :-----|
| [UGCService](classes/Service.UGCService.md) | 用户建造服务 | [Scripiting](groups/Scripiting.Scripiting.md) |
| [UIBehavior](classes/UI.UIBehavior.md) | UI的驱动脚本基类 | [Gui](groups/Gui.Gui.md) |
| [UIChildCollation](classes/UI.UIChildCollation.md) | 容器自动布局子项排序规则 | [Gui](groups/Gui.Gui.md) |
| [UIConstraintAnchors](classes/UI.UIConstraintAnchors.md) | 节点对齐规则 | [Gui](groups/Gui.Gui.md) |
| [UIFontInfo](classes/UI.UIFontInfo.md) | 字体信息 | [Gui](groups/Gui.Gui.md) |
| [UIHugContent](classes/UI.UIHugContent.md) | 容器自动布局大小适应规则 | [Gui](groups/Gui.Gui.md) |
| [UILayout](classes/UI.UILayout.md) | 容器自动布局规则 | [Gui](groups/Gui.Gui.md) |
| [UIManager](classes/UI.UIManager.md) | UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。 | [Gui](groups/Gui.Gui.md) |
| [UIObject](classes/UI.UIObject.md) | UI对象组件 | [Gui](groups/Gui.Gui.md) |
| [UISlot](classes/UI.UISlot.md) | UI插槽 | [Gui](groups/Gui.Gui.md) |
| [UITransform](classes/UI.UITransform.md) | 节点Transform | [Gui](groups/Gui.Gui.md) |
| [UIWidget](classes/Gameplay.UIWidget.md) | 世界UI组件 | [Gui](groups/Gui.Gui.md) |
| [Union](classes/Gameplay.Union.md) | 合并对象 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [UserWidget](classes/UI.UserWidget.md) | UI控件的集合,预制体UI | [Gui](groups/Gui.Gui.md) |
| [UserWidgetPrefab](classes/UI.UserWidgetPrefab.md) | ui预制体 | [Gui](groups/Gui.Gui.md) |


## V
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Vector](classes/Type.Vector.md) | 由分量 (x,y,z) 组成的三维空间中的向量 | [Data](groups/Data.Data.md) |
| [Vector2](classes/Type.Vector2.md) | 由分量 (x,y) 组成的二维空间中的向量 | [Data](groups/Data.Data.md) |
| [Vector4](classes/Type.Vector4.md) | 由分量 (x,y,z,w) 组成的4D齐次向量 | [Data](groups/Data.Data.md) |
| [VehicleCameraSetting](classes/Gameplay.VehicleCameraSetting.md) | 载具摄像机，对应编辑器对象管理器中载具下挂载的摄像机对象 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [VirtualJoystickPanel](classes/UI.VirtualJoystickPanel.md) | 摇杆 | [Gui](groups/Gui.Gui.md) |


## W
| Name | Description | Groups |
| :-----| :-----| :-----|
| [WheeledVehicle4W](classes/Gameplay.WheeledVehicle4W.md) | 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Widget](classes/UI.Widget.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [Gui](groups/Gui.Gui.md) |

