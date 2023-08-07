Classes


# Classes <Badge type="tip" text="Groups" /> <Score text="Classes" />


## A
| Name | Description | Groups |
| :-----| :-----| :-----|
| [AccountService](classes/Service.AccountService.md) | 用户账号信息管理相关服务 | [SOCIAL](groups/SOCIAL.SOCIAL.md) |
| [Action](classes/Type.Action.md) | 任意参数的代理 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Action1](classes/Type.Action1.md) | 一个参数的代理 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Action2](classes/Type.Action2.md) | 两个参数的代理 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Action3](classes/Type.Action3.md) | 三个参数的代理 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [AdsService](classes/Service.AdsService.md) | 广告服务，支持激励/插屏类型 | [MONETIZATION](groups/MONETIZATION.MONETIZATION.md) |
| [AdvancedVehicle](classes/Gameplay.AdvancedVehicle.md) | 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [AnalogInputEvent](classes/UI.AnalogInputEvent.md) | 轴输入事件 | [GUI](groups/GUI.GUI.md) |
| [AnalyticsService](classes/Service.AnalyticsService.md) | 分析服务 | [DEBUGGING](groups/DEBUGGING.DEBUGGING.md) |
| [Animation](classes/Gameplay.Animation.md) | 动画类 | [ANIMATIONS](groups/ANIMATIONS.ANIMATIONS.md) |
| [AssetIconData](classes/UI.AssetIconData.md) | 资源ICON信息 | [GUI](groups/GUI.GUI.md) |
| [AvatarSettings](classes/Settings.AvatarSettings.md) | 控制一些优化项的开启关闭 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |


## B
| Name | Description | Groups |
| :-----| :-----| :-----|
| [BasePanel](classes/Extension.BasePanel.md) | 面板类的基类，可用于控制一个界面 | [GUI](groups/GUI.GUI.md) |
| [BaseView](classes/Extension.BaseView.md) | 界面类的基类 | [GUI](groups/GUI.GUI.md) |
| [BlockingVolume](classes/Gameplay.BlockingVolume.md) | 禁行区，用于控制个角色是否可以进出此区域，默认阻挡，角色可站立 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Button](classes/UI.Button.md) | 按钮,无默认text | [GUI](groups/GUI.GUI.md) |


## C
| Name | Description | Groups |
| :-----| :-----| :-----|
| [CameraShake](classes/Gameplay.CameraShake.md) | 摄像机振荡 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [CameraSystem](classes/Gameplay.CameraSystem.md) | 摄像机系统，是依托于角色，作为角色的组件存在，在此组件下还有一个用来确定视口位置的摄像机组件 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Canvas](classes/UI.Canvas.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [GUI](groups/GUI.GUI.md) |
| [Character](classes/Gameplay.Character.md) | 在CharacterBase上派生的玩家操控对象,该对象是玩家加入游戏之后,在服务器上根据配置生成,并同步到客户端的. | [AVATAR](groups/AVATAR.AVATAR.md) |
| [CharacterBase](classes/Gameplay.CharacterBase.md) | 角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动. | [AVATAR](groups/AVATAR.AVATAR.md) |
| [CharacterEvent](classes/UI.CharacterEvent.md) | 角色输入事件 | [GUI](groups/GUI.GUI.md) |
| [ChatService](classes/Service.ChatService.md) | 是一个用于实现聊天功能的类，它可以管理用户之间的交流并提供相关的服务。 | [SOCIAL](groups/SOCIAL.SOCIAL.md) |
| [ColorPick](classes/UI.ColorPick.md) | 颜色选择器 | [GUI](groups/GUI.GUI.md) |
| [ConvertScreenResult](classes/Type.ConvertScreenResult.md) | 屏幕坐标转换结果 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |


## D
| Name | Description | Groups |
| :-----| :-----| :-----|
| [DataCenterC](classes/Extension.DataCenterC.md) | 客户端数据中心，里面存放着当前玩家的数据 | [DATA](groups/DATA.DATA.md) |
| [DataCenterS](classes/Extension.DataCenterS.md) | 服务端数据中心，管理所有玩家的数据 | [DATA](groups/DATA.DATA.md) |
| [DebugService](classes/Service.DebugService.md) | debug调试服务 | [DEBUGGING](groups/DEBUGGING.DEBUGGING.md) |
| [Decoration](classes/Gameplay.Decoration.md) | 平台形象特有的挂件数据格式 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [DefaultData](classes/Gameplay.DefaultData.md) | 角色数据类型 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [Delegate](classes/Type.Delegate.md) | 委托 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [DirectionalLight](classes/Gameplay.DirectionalLight.md) | 平行光 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [DragDropOperation](classes/UI.DragDropOperation.md) | UI 拖拽事件 | [GUI](groups/GUI.GUI.md) |
| [DragDropPayLoad](classes/UI.DragDropPayLoad.md) | 拖拽事件数据传递类 | [GUI](groups/GUI.GUI.md) |


## E
| Name | Description | Groups |
| :-----| :-----| :-----|
| [EditorMode](classes/MobileEditor.EditorMode.md) | 移动编辑器模式切换 | [SCRIPTING](groups/SCRIPTING.SCRIPTING.md) |
| [EffectService](classes/Service.EffectService.md) | 特效服务 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [EnvironmentSettings](classes/Settings.EnvironmentSettings.md) | 环境设置 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |
| [EventListener](classes/Events.EventListener.md) | 事件监听器 | [SCRIPTING](groups/SCRIPTING.SCRIPTING.md) |
| [EventReply](classes/UI.EventReply.md) | 事件回复 | [GUI](groups/GUI.GUI.md) |
| [ExponentialHeightFog](classes/Gameplay.ExponentialHeightFog.md) | 环境雾 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |


## F
| Name | Description | Groups |
| :-----| :-----| :-----|
| [FireDataInfoForMultiple](classes/Gameplay.FireDataInfoForMultiple.md) | 热武器逻辑组件专用的临时类， | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [FocusEvent](classes/UI.FocusEvent.md) | 焦点事件 | [GUI](groups/GUI.GUI.md) |
| [FourFootStandard](classes/Gameplay.FourFootStandard.md) | 四足外观形象对象,用于四足外观的设置. | [AVATAR](groups/AVATAR.AVATAR.md) |


## G
| Name | Description | Groups |
| :-----| :-----| :-----|
| [GameInitializer](classes/Extension.GameInitializer.md) | 游戏初始化 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [GameObjPool](classes/Extension.GameObjPool.md) | GameObject对象池 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [GameObject](classes/Gameplay.GameObject.md) | GameObject的基类 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Geometry](classes/UI.Geometry.md) | 几何坐标信息 | [GUI](groups/GUI.GUI.md) |
| [GestureDelegate](classes/MobileEditor.GestureDelegate.md) | 手势代理类 | [SCRIPTING](groups/SCRIPTING.SCRIPTING.md) |
| [Gizmo](classes/MobileEditor.Gizmo.md) | Gizmo | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [GraphicsSettings](classes/Settings.GraphicsSettings.md) | 图片画质设置 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |
| [Group](classes/Util.Util.TweenUtil.Group.md) | 补间组，用于同时控制多个补间对象 | [UTILITY](groups/UTILITY.UTILITY.md) |


## H
| Name | Description | Groups |
| :-----| :-----| :-----|
| [HitResult](classes/Gameplay.HitResult.md) | 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [HotWeapon](classes/Gameplay.HotWeapon.md) | 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponAccuracyOfFireComponent](classes/Gameplay.HotWeaponAccuracyOfFireComponent.md) | 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponAimComponent](classes/Gameplay.HotWeaponAimComponent.md) | 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponFireComponent](classes/Gameplay.HotWeaponFireComponent.md) | 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponLoadComponent](classes/Gameplay.HotWeaponLoadComponent.md) | 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponRecoilForceComponent](classes/Gameplay.HotWeaponRecoilForceComponent.md) | 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HotWeaponReloadComponent](classes/Gameplay.HotWeaponReloadComponent.md) | 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [HumanoidV1](classes/Gameplay.HumanoidV1.md) | 人形外观形象对象,用于基础人形外观的设置. | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV1Face](classes/Gameplay.HumanoidV1Face.md) | 人形对象V1脸部接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV1Hair](classes/Gameplay.HumanoidV1Hair.md) | 人形对象V1头发接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV1Part](classes/Gameplay.HumanoidV1Part.md) | 人形对象V1头发接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV1Trunk](classes/Gameplay.HumanoidV1Trunk.md) | 人形对象V1身体接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2](classes/Gameplay.HumanoidV2.md) | 人形外观形象对象,用于高级人形外观的设置. | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2BehindHairPart](classes/Gameplay.HumanoidV2BehindHairPart.md) | 人形对象V2后发部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2ClothPart](classes/Gameplay.HumanoidV2ClothPart.md) | 人形对象V2上衣部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2FrontHairPart](classes/Gameplay.HumanoidV2FrontHairPart.md) | 人形对象V2前发部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2GlovesPart](classes/Gameplay.HumanoidV2GlovesPart.md) | 人形对象V2手套部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2HairPart](classes/Gameplay.HumanoidV2HairPart.md) | 人形对象V2前发部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2HeadPart](classes/Gameplay.HumanoidV2HeadPart.md) | 人形对象V2头部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2LowerClothPart](classes/Gameplay.HumanoidV2LowerClothPart.md) | 人形对象V2下衣部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2Shape](classes/Gameplay.HumanoidV2Shape.md) | 人形对象V2体型 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2ShoePart](classes/Gameplay.HumanoidV2ShoePart.md) | 人形对象V2鞋子部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |
| [HumanoidV2UpperClothPart](classes/Gameplay.HumanoidV2UpperClothPart.md) | 人形对象V2上衣部位接口 | [AVATAR](groups/AVATAR.AVATAR.md) |


## I
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Image](classes/UI.Image.md) | UI 图片 | [GUI](groups/GUI.GUI.md) |
| [Impulse](classes/Gameplay.Impulse.md) | 冲量对象 | [PHYSICS](groups/PHYSICS.PHYSICS.md) |
| [InputBox](classes/UI.InputBox.md) | UI的输入框 | [GUI](groups/GUI.GUI.md) |
| [InputEvent](classes/UI.InputEvent.md) | 输入事件 | [GUI](groups/GUI.GUI.md) |
| [IntegratedMover](classes/Gameplay.IntegratedMover.md) | 运动器组件 | [PHYSICS](groups/PHYSICS.PHYSICS.md) |
| [Interactor](classes/Gameplay.Interactor.md) | 交互物功能对象 V2 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |


## J
| Name | Description | Groups |
| :-----| :-----| :-----|
| [JoystickStyleDesigner](classes/UI.JoystickStyleDesigner.md) | 摇杆信息 | [GUI](groups/GUI.GUI.md) |


## K
| Name | Description | Groups |
| :-----| :-----| :-----|
| [KeyEvent](classes/UI.KeyEvent.md) | 按键事件 | [GUI](groups/GUI.GUI.md) |


## L
| Name | Description | Groups |
| :-----| :-----| :-----|
| [LeaderboardItemPanelBase](classes/Extension.LeaderboardItemPanelBase.md) | 排行榜主界面中的子UI，用来显示一条记录 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [LeaderboardMainPaneBase](classes/Extension.LeaderboardMainPaneBase.md) | 排行榜主界面 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [LeaderboardModule](classes/Extension.LeaderboardModule.md) | 编辑器内置排行榜 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [LeaderboardModuleBaseC](classes/Extension.LeaderboardModuleBaseC.md) | 排行榜模块-客户端 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [LeaderboardModuleBaseS](classes/Extension.LeaderboardModuleBaseS.md) | 排行榜模块-服务端 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [LinearColor](classes/Type.LinearColor.md) | 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |


## M
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Margin](classes/UI.Margin.md) | 基础的边距，提供4个方向的数值修改 | [GUI](groups/GUI.GUI.md) |
| [MaskButton](classes/UI.MaskButton.md) | 遮罩 | [GUI](groups/GUI.GUI.md) |
| [MaterialInstance](classes/Gameplay.MaterialInstance.md) | 材质实例类 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Matrix3x3](classes/Type.Matrix3x3.md) | 三维矩阵 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Matrix4x4](classes/Type.Matrix4x4.md) | 四维矩阵 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Mesh](classes/Gameplay.Mesh.md) | StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [MessageChannelService](classes/Service.MessageChannelService.md) | 支持各端的通信，233、引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码 | [SCRIPTING](groups/SCRIPTING.SCRIPTING.md) |
| [MobileSensors](classes/Gameplay.MobileSensors.md) | 移动传感器 | [INPUT](groups/INPUT.INPUT.md) |
| [ModuleC](classes/Extension.ModuleC.md) | 客户端模块的基类 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [ModuleManager](classes/Extension.ModuleManager.md) | 模块管理 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [ModuleS](classes/Extension.ModuleS.md) | 服务端模块的基类 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [MulticastDelegate](classes/Type.MulticastDelegate.md) | 多播委托接口 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [MulticastGameObjectDelegate](classes/Type.MulticastGameObjectDelegate.md) | 广播代理 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |


## N
| Name | Description | Groups |
| :-----| :-----| :-----|
| [NPC](classes/Gameplay.NPC.md) | NPC 是在CharacterBase上派生的非玩家对象,不限定形象的角色对象,该对象通常被用户用于实现拥有自主功能的角色对象.生成方式:可以通过将非玩家对象(NPC)放置在场景中,由场景反序列化生成对象,也可以通过代码动态生成:Core.GameObject.spawnGameObject("NPC") as NPC; | [AVATAR](groups/AVATAR.AVATAR.md) |
| [NavModifierVolume](classes/Gameplay.NavModifierVolume.md) | 寻路动态修饰区 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [NetObject](classes/Extension.NetObject.md) | 网络对象 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [NetObjectC](classes/Extension.NetObjectC.md) | 客户端的网络对象 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [NetObjectS](classes/Extension.NetObjectS.md) | 服务端的网络对象 | [UTILITY](groups/UTILITY.UTILITY.md) |


## O
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ObjPool](classes/Extension.ObjPool.md) | 对象池 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [Optimization](classes/Gameplay.Optimization.md) | 控制一些优化项的开启关闭 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |


## P
| Name | Description | Groups |
| :-----| :-----| :-----|
| [PanelWidget](classes/UI.PanelWidget.md) | UI的PanelWidget可以挂载子节点 | [GUI](groups/GUI.GUI.md) |
| [Particle](classes/Gameplay.Particle.md) | 特效对象,通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。如需精确控制特效的播放与停止，请使用play()和stop()。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。 | [EFFECTS](groups/EFFECTS.EFFECTS.md) |
| [PhysicsFulcrum](classes/Gameplay.PhysicsFulcrum.md) | 物理支撑点组件 | [PHYSICS](groups/PHYSICS.PHYSICS.md) |
| [PhysicsThruster](classes/Gameplay.PhysicsThruster.md) | 推进器 | [PHYSICS](groups/PHYSICS.PHYSICS.md) |
| [Player](classes/Gameplay.Player.md) | 角色控制 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [PointLight](classes/Gameplay.PointLight.md) | 点光源 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [PointerEvent](classes/UI.PointerEvent.md) | 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类 | [GUI](groups/GUI.GUI.md) |
| [PostProcess](classes/Gameplay.PostProcess.md) | 后处理对象 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [PostProcessConfig](classes/Gameplay.PostProcessConfig.md) | 后处理对象属性配置 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [ProgressBar](classes/UI.ProgressBar.md) | UI进度条 | [GUI](groups/GUI.GUI.md) |
| [ProjectileInst](classes/Gameplay.ProjectileInst.md) | 投掷物 v2 实例 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [ProjectileLauncher](classes/Gameplay.ProjectileLauncher.md) | 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [PurchaseService](classes/Service.PurchaseService.md) | 应用内购服务 | [MONETIZATION](groups/MONETIZATION.MONETIZATION.md) |


## Q
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Quaternion](classes/Type.Quaternion.md) | 四元数 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |


## R
| Name | Description | Groups |
| :-----| :-----| :-----|
| [RoomService](classes/Service.RoomService.md) | MGS以及玩家信息、数据、头像等相关API | [SOCIAL](groups/SOCIAL.SOCIAL.md) |
| [RoomSettings](classes/Setting.RoomSettings.md) | 房间设置 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |
| [RoomSettings](classes/Settings.RoomSettings.md) | 房间设置 | [SETTINGS](groups/SETTINGS.SETTINGS.md) |
| [Rotation](classes/Type.Rotation.md) | 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [RouteService](classes/Service.RouteService.md) | 游戏管理器 | [SOCIAL](groups/SOCIAL.SOCIAL.md) |


## S
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ScrollBox](classes/UI.ScrollBox.md) | 滑动框 | [GUI](groups/GUI.GUI.md) |
| [Sequence](classes/Util.Util.TweenUtil.Sequence.md) | 序列工具类，主要用于获取连续的ID | [UTILITY](groups/UTILITY.UTILITY.md) |
| [SkyBox](classes/Gameplay.SkyBox.md) | 天空球 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [SkyLight](classes/Gameplay.SkyLight.md) | 环境光 | [LIGHTING](groups/LIGHTING.LIGHTING.md) |
| [SlateBrushWithGuid](classes/UI.SlateBrushWithGuid.md) | 贴图信息 | [GUI](groups/GUI.GUI.md) |
| [SlateColor](classes/UI.SlateColor.md) | UI颜色管理 | [GUI](groups/GUI.GUI.md) |
| [SomatotypeBase](classes/Gameplay.SomatotypeBase.md) | 体型基类 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Sound](classes/Gameplay.Sound.md) | 音效组件 | [OTHERS](groups/OTHERS.OTHERS.md) |
| [SoundService](classes/Service.SoundService.md) | 音效管理器 | [UTILITY](groups/UTILITY.UTILITY.md) |
| [StaleButton](classes/UI.StaleButton.md) | 按钮 | [GUI](groups/GUI.GUI.md) |
| [Stance](classes/Gameplay.Stance.md) | 姿态 | [ANIMATIONS](groups/ANIMATIONS.ANIMATIONS.md) |
| [SubStance](classes/Gameplay.SubStance.md) | 二级姿态 | [ANIMATIONS](groups/ANIMATIONS.ANIMATIONS.md) |
| [Subdata](classes/Extension.Subdata.md) | 数据控制类的基类 | [DATA](groups/DATA.DATA.md) |
| [SwimmingVolume](classes/Gameplay.SwimmingVolume.md) | 游泳区域 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |


## T
| Name | Description | Groups |
| :-----| :-----| :-----|
| [TabGroup](classes/UI.TabGroup.md) | 选项卡组 | [GUI](groups/GUI.GUI.md) |
| [TextBlock](classes/UI.TextBlock.md) | UI文本 | [GUI](groups/GUI.GUI.md) |
| [TouchInput](classes/Gameplay.TouchInput.md) | 玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开) | [INPUT](groups/INPUT.INPUT.md) |
| [TouchPad](classes/UI.TouchPad.md) | 摄像机滑动区 | [GUI](groups/GUI.GUI.md) |
| [Transform](classes/Type.Transform.md) | Transform 由缩放、旋转和平移组成 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Trigger](classes/Gameplay.Trigger.md) | 触发器，对进入/离开触发器范围的事件进行响应 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Tween](classes/Util.Util.TweenUtil.Tween.md) | 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 | [UTILITY](groups/UTILITY.UTILITY.md) |


## U
| Name | Description | Groups |
| :-----| :-----| :-----|
| [UGCService](classes/Service.UGCService.md) | 用户建造服务 | [SCRIPTING](groups/SCRIPTING.SCRIPTING.md) |
| [UIBehavior](classes/UI.UIBehavior.md) | UI的驱动脚本基类 | [GUI](groups/GUI.GUI.md) |
| [UIChildCollation](classes/UI.UIChildCollation.md) | 容器自动布局子项排序规则 | [GUI](groups/GUI.GUI.md) |
| [UIConstraintAnchors](classes/UI.UIConstraintAnchors.md) | 节点对齐规则 | [GUI](groups/GUI.GUI.md) |
| [UIFontInfo](classes/UI.UIFontInfo.md) | 字体信息 | [GUI](groups/GUI.GUI.md) |
| [UIHugContent](classes/UI.UIHugContent.md) | 容器自动布局大小适应规则 | [GUI](groups/GUI.GUI.md) |
| [UILayout](classes/UI.UILayout.md) | 容器自动布局规则 | [GUI](groups/GUI.GUI.md) |
| [UIManager](classes/UI.UIManager.md) | UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。 | [GUI](groups/GUI.GUI.md) |
| [UIObject](classes/UI.UIObject.md) | UI对象组件 | [GUI](groups/GUI.GUI.md) |
| [UITransform](classes/UI.UITransform.md) | 节点Transform | [GUI](groups/GUI.GUI.md) |
| [UIWidget](classes/Gameplay.UIWidget.md) | 世界UI组件 | [GUI](groups/GUI.GUI.md) |
| [UserWidget](classes/UI.UserWidget.md) | UI控件的集合,预制体UI | [GUI](groups/GUI.GUI.md) |
| [UserWidgetPrefab](classes/UI.UserWidgetPrefab.md) | ui预制体 | [GUI](groups/GUI.GUI.md) |


## V
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Vector](classes/Type.Vector.md) | 由分量 (x,y,z) 组成的三维空间中的向量 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Vector2](classes/Type.Vector2.md) | 由分量 (x,y) 组成的二维空间中的向量 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [Vector4](classes/Type.Vector4.md) | 由分量 (x,y,z,w) 组成的4D齐次向量 | [DATATYPE](groups/DATATYPE.DATATYPE.md) |
| [VehicleCameraSetting](classes/Gameplay.VehicleCameraSetting.md) | 载具摄像机，对应编辑器对象管理器中载具下挂载的摄像机对象 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [VirtualJoystickPanel](classes/UI.VirtualJoystickPanel.md) | 摇杆 | [GUI](groups/GUI.GUI.md) |


## W
| Name | Description | Groups |
| :-----| :-----| :-----|
| [WheeledVehicle4W](classes/Gameplay.WheeledVehicle4W.md) | 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 | [GAMEPLAY](groups/GAMEPLAY.GAMEPLAY.md) |
| [Widget](classes/UI.Widget.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [GUI](groups/GUI.GUI.md) |

