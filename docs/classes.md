Classes


# Classes <Badge type="tip" text="Groups" /> <Score text="Classes" />


## A
| Name | Description | Groups |
| :-----| :-----| :-----|
| [AccountService](classes/mw.AccountService.md) | 用户账号信息管理相关服务 | [Social](groups/Social.Social.md) |
| [Action](classes/mw.Action.md) | 任意参数的代理 | [Datatype](groups/Datatype.Datatype.md) |
| [Action1](classes/mw.Action1.md) | 一个参数的代理 | [Datatype](groups/Datatype.Datatype.md) |
| [Action2](classes/mw.Action2.md) | 两个参数的代理 | [Datatype](groups/Datatype.Datatype.md) |
| [Action3](classes/mw.Action3.md) | 三个参数的代理 | [Datatype](groups/Datatype.Datatype.md) |
| [AdsService](classes/mw.AdsService.md) | 广告服务，支持激励/插屏类型 | [Monetization](groups/Monetization.Monetization.md) |
| [AdvancedVehicle](classes/mw.AdvancedVehicle.md) | 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [AnalogInputEvent](classes/mw.AnalogInputEvent.md) | 轴输入事件 | [Gui](groups/Gui.Gui.md) |
| [AnalyticsService](classes/mw.AnalyticsService.md) | 分析服务 | [Debugging](groups/Debugging.Debugging.md) |
| [Animation](classes/mw.Animation.md) | 动画类 | [Animations](groups/Animations.Animations.md) |
| [AssetIconData](classes/mw.AssetIconData.md) | 资源ICON信息 | [Gui](groups/Gui.Gui.md) |
| [AttachmentArray](classes/mw.AttachmentArray.md) | 单个插槽对应的挂件物体数组 | [Avatar](groups/Avatar.Avatar.md) |
| [AvatarSettings](classes/mw.AvatarSettings.md) | 控制一些优化项的开启关闭 | [Settings](groups/Settings.Settings.md) |


## B
| Name | Description | Groups |
| :-----| :-----| :-----|
| [BasePanel](classes/mw.BasePanel.md) | 面板类的基类，可用于控制一个界面 | [Gui](groups/Gui.Gui.md) |
| [BaseView](classes/mw.BaseView.md) | 界面类的基类 | [Gui](groups/Gui.Gui.md) |
| [BasicStance](classes/mw.BasicStance.md) | 基础姿态 | [Animations](groups/Animations.Animations.md) |
| [BlockingVolume](classes/mw.BlockingVolume.md) | 禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Button](classes/mw.Button.md) | 按钮,无默认text | [Gui](groups/Gui.Gui.md) |


## C
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Camera](classes/mw.Camera.md) | 摄像机 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Canvas](classes/mw.Canvas.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [Gui](groups/Gui.Gui.md) |
| [Character](classes/mw.Character.md) | 角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动. | [Avatar](groups/Avatar.Avatar.md) |
| [CharacterEvent](classes/mw.CharacterEvent.md) | 角色输入事件 | [Gui](groups/Gui.Gui.md) |
| [ChatService](classes/mw.ChatService.md) | 是一个用于实现聊天功能的类，它可以管理用户之间的交流并提供相关的服务。 | [Social](groups/Social.Social.md) |
| [ColorPick](classes/mw.ColorPick.md) | 颜色选择器 | [Gui](groups/Gui.Gui.md) |
| [ConvertScreenResult](classes/mw.ConvertScreenResult.md) | 屏幕坐标转换结果 | [Datatype](groups/Datatype.Datatype.md) |


## D
| Name | Description | Groups |
| :-----| :-----| :-----|
| [DataCenterC](classes/mw.DataCenterC.md) | 客户端数据中心，里面存放着当前玩家的数据 | [Data](groups/Data.Data.md) |
| [DataCenterS](classes/mw.DataCenterS.md) | 服务端数据中心，管理所有玩家的数据 | [Data](groups/Data.Data.md) |
| [DebugService](classes/mw.DebugService.md) | debug调试服务 | [Debugging](groups/Debugging.Debugging.md) |
| [Delegate](classes/mw.Delegate.md) | 委托 | [Datatype](groups/Datatype.Datatype.md) |
| [DirectionalLight](classes/mw.DirectionalLight.md) | 平行光 | [Lighting](groups/Lighting.Lighting.md) |
| [DragDropOperation](classes/mw.DragDropOperation.md) | UI 拖拽事件 | [Gui](groups/Gui.Gui.md) |
| [DragDropPayLoad](classes/mw.DragDropPayLoad.md) | 拖拽事件数据传递类 | [Gui](groups/Gui.Gui.md) |


## E
| Name | Description | Groups |
| :-----| :-----| :-----|
| [EditorMode](classes/mw.EditorMode.md) | 移动编辑器模式切换 | [Scripting](groups/Scripting.Scripting.md) |
| [Effect](classes/mw.Effect.md) | 特效对象,通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。如需精确控制特效的播放与停止，请使用play()和stop()。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。 | [Effects](groups/Effects.Effects.md) |
| [EffectService](classes/mw.EffectService.md) | 特效服务 | [Utility](groups/Utility.Utility.md) |
| [EnvironmentSettings](classes/mw.EnvironmentSettings.md) | 环境设置 | [Settings](groups/Settings.Settings.md) |
| [Event](classes/mw.Event.md) | 事件 | [Scripting](groups/Scripting.Scripting.md) |
| [EventListener](classes/mw.EventListener.md) | 事件监听器 | [Scripting](groups/Scripting.Scripting.md) |
| [EventReply](classes/mw.EventReply.md) | 事件回复 | [Gui](groups/Gui.Gui.md) |
| [ExponentialHeightFog](classes/mw.ExponentialHeightFog.md) | 环境雾 | [Lighting](groups/Lighting.Lighting.md) |


## F
| Name | Description | Groups |
| :-----| :-----| :-----|
| [FireDataInfoForMultiple](classes/mw.FireDataInfoForMultiple.md) | 热武器逻辑组件专用的临时类， | [Gameplay](groups/Gameplay.Gameplay.md) |
| [FocusEvent](classes/mw.FocusEvent.md) | 焦点事件 | [Gui](groups/Gui.Gui.md) |


## G
| Name | Description | Groups |
| :-----| :-----| :-----|
| [GameInitializer](classes/mw.GameInitializer.md) | 游戏初始化 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [GameObjPool](classes/mw.GameObjPool.md) | GameObject对象池 | [Utility](groups/Utility.Utility.md) |
| [GameObject](classes/mw.GameObject.md) | GameObject的基类 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Geometry](classes/mw.Geometry.md) | 几何坐标信息 | [Gui](groups/Gui.Gui.md) |
| [GestureDelegate](classes/mw.GestureDelegate.md) | 手势代理类 | [Scripting](groups/Scripting.Scripting.md) |
| [Gizmo](classes/mw.Gizmo.md) | Gizmo | [Gameplay](groups/Gameplay.Gameplay.md) |
| [GraphicsSettings](classes/mw.GraphicsSettings.md) | 图片画质设置 | [Settings](groups/Settings.Settings.md) |
| [Group](classes/Core.mw.TweenUtil.Group.md) | 补间组，用于同时控制多个补间对象 | [Utility](groups/Utility.Utility.md) |


## H
| Name | Description | Groups |
| :-----| :-----| :-----|
| [HitResult](classes/mw.HitResult.md) | 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。 | [Datatype](groups/Datatype.Datatype.md) |
| [HotWeapon](classes/mw.HotWeapon.md) | 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponAccuracyOfFireComponent](classes/mw.HotWeaponAccuracyOfFireComponent.md) | 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponAimComponent](classes/mw.HotWeaponAimComponent.md) | 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponFireComponent](classes/mw.HotWeaponFireComponent.md) | 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponLoadComponent](classes/mw.HotWeaponLoadComponent.md) | 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponRecoilForceComponent](classes/mw.HotWeaponRecoilForceComponent.md) | 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） | [Gameplay](groups/Gameplay.Gameplay.md) |
| [HotWeaponReloadComponent](classes/mw.HotWeaponReloadComponent.md) | 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 | [Gameplay](groups/Gameplay.Gameplay.md) |


## I
| Name | Description | Groups |
| :-----| :-----| :-----|
| [IStanceBase](classes/mw.IStanceBase.md) | 姿态 | [Animations](groups/Animations.Animations.md) |
| [Image](classes/mw.Image.md) | UI 图片 | [Gui](groups/Gui.Gui.md) |
| [Impulse](classes/mw.Impulse.md) | 冲量对象 | [Physics](groups/Physics.Physics.md) |
| [InputBox](classes/mw.InputBox.md) | UI的输入框 | [Gui](groups/Gui.Gui.md) |
| [InputEvent](classes/mw.InputEvent.md) | 输入事件 | [Gui](groups/Gui.Gui.md) |
| [InputUtil](classes/mw.InputUtil.md) |  | [Utility](groups/Utility.Utility.md) |
| [IntegratedMover](classes/mw.IntegratedMover.md) | 运动器组件 | [Physics](groups/Physics.Physics.md) |
| [Interactor](classes/mw.Interactor.md) | 交互物功能对象 V2 | [Gameplay](groups/Gameplay.Gameplay.md) |


## J
| Name | Description | Groups |
| :-----| :-----| :-----|
| [JoystickStyleDesigner](classes/mw.JoystickStyleDesigner.md) | 摇杆信息 | [Gui](groups/Gui.Gui.md) |


## K
| Name | Description | Groups |
| :-----| :-----| :-----|
| [KeyEvent](classes/mw.KeyEvent.md) | 按键事件 | [Gui](groups/Gui.Gui.md) |


## L
| Name | Description | Groups |
| :-----| :-----| :-----|
| [LeaderboardItemPanelBase](classes/mw.LeaderboardItemPanelBase.md) | 排行榜主界面中的子UI，用来显示一条记录 | [Utility](groups/Utility.Utility.md) |
| [LeaderboardMainPaneBase](classes/mw.LeaderboardMainPaneBase.md) | 排行榜主界面 | [Utility](groups/Utility.Utility.md) |
| [LeaderboardModule](classes/mw.LeaderboardModule.md) | 编辑器内置排行榜 | [Utility](groups/Utility.Utility.md) |
| [LeaderboardModuleBaseC](classes/mw.LeaderboardModuleBaseC.md) | 排行榜模块-客户端 | [Utility](groups/Utility.Utility.md) |
| [LeaderboardModuleBaseS](classes/mw.LeaderboardModuleBaseS.md) | 排行榜模块-服务端 | [Utility](groups/Utility.Utility.md) |
| [LinearColor](classes/mw.LinearColor.md) | 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0 | [Datatype](groups/Datatype.Datatype.md) |


## M
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Margin](classes/mw.Margin.md) | 基础的边距，提供4个方向的数值修改 | [Gui](groups/Gui.Gui.md) |
| [MaskButton](classes/mw.MaskButton.md) | 遮罩 | [Gui](groups/Gui.Gui.md) |
| [MaterialInstance](classes/mw.MaterialInstance.md) | 材质实例类 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Matrix3x3](classes/mw.Matrix3x3.md) | 三维矩阵 | [Datatype](groups/Datatype.Datatype.md) |
| [Matrix4x4](classes/mw.Matrix4x4.md) | 四维矩阵 | [Datatype](groups/Datatype.Datatype.md) |
| [MessageChannelService](classes/mw.MessageChannelService.md) | 支持各端的通信，233、引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码 | [Scripting](groups/Scripting.Scripting.md) |
| [MobileSensors](classes/mw.MobileSensors.md) | 移动传感器 | [Input](groups/Input.Input.md) |
| [Model](classes/mw.Model.md) | 接口主要为物理参数设置接口与材质参数设置接口 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [ModuleC](classes/mw.ModuleC.md) | 客户端模块的基类 | [Utility](groups/Utility.Utility.md) |
| [ModuleManager](classes/mw.ModuleManager.md) | 模块管理 | [Utility](groups/Utility.Utility.md) |
| [ModuleS](classes/mw.ModuleS.md) | 服务端模块的基类 | [Utility](groups/Utility.Utility.md) |
| [MulticastDelegate](classes/mw.MulticastDelegate.md) | 多播委托接口 | [Datatype](groups/Datatype.Datatype.md) |
| [MulticastGameObjectDelegate](classes/mw.MulticastGameObjectDelegate.md) | 广播代理 | [Datatype](groups/Datatype.Datatype.md) |


## N
| Name | Description | Groups |
| :-----| :-----| :-----|
| [NavModifierVolume](classes/mw.NavModifierVolume.md) | 寻路动态修饰区 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [NetObject](classes/mw.NetObject.md) | 网络对象 | [Utility](groups/Utility.Utility.md) |
| [NetObjectC](classes/mw.NetObjectC.md) | 客户端的网络对象 | [Utility](groups/Utility.Utility.md) |
| [NetObjectS](classes/mw.NetObjectS.md) | 服务端的网络对象 | [Utility](groups/Utility.Utility.md) |


## O
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ObjPool](classes/mw.ObjPool.md) | 对象池 | [Utility](groups/Utility.Utility.md) |
| [Optimization](classes/mw.Optimization.md) | 控制一些优化项的开启关闭 | [Settings](groups/Settings.Settings.md) |


## P
| Name | Description | Groups |
| :-----| :-----| :-----|
| [PanelWidget](classes/mw.PanelWidget.md) | UI的PanelWidget可以挂载子节点 | [Gui](groups/Gui.Gui.md) |
| [Pawn](classes/mw.Pawn.md) | 可以被玩家和AI控制的对象的基类 | [Avatar](groups/Avatar.Avatar.md) |
| [PhysicsFulcrum](classes/mw.PhysicsFulcrum.md) | 物理支撑点组件 | [Physics](groups/Physics.Physics.md) |
| [PhysicsThruster](classes/mw.PhysicsThruster.md) | 推进器 | [Physics](groups/Physics.Physics.md) |
| [Player](classes/mw.Player.md) | 角色控制 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [PointLight](classes/mw.PointLight.md) | 点光源 | [Lighting](groups/Lighting.Lighting.md) |
| [PointerEvent](classes/mw.PointerEvent.md) | 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类 | [Gui](groups/Gui.Gui.md) |
| [PostProcess](classes/mw.PostProcess.md) | 后处理对象 | [Lighting](groups/Lighting.Lighting.md) |
| [PostProcessConfig](classes/mw.PostProcessConfig.md) | 后处理对象属性配置 | [Lighting](groups/Lighting.Lighting.md) |
| [ProgressBar](classes/mw.ProgressBar.md) | UI进度条 | [Gui](groups/Gui.Gui.md) |
| [ProjectileInst](classes/mw.ProjectileInst.md) | 投掷物 v2 实例 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [ProjectileLauncher](classes/mw.ProjectileLauncher.md) | 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [PurchaseService](classes/mw.PurchaseService.md) | 应用内购服务 | [Monetization](groups/Monetization.Monetization.md) |


## Q
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Quaternion](classes/mw.Quaternion.md) | 四元数 | [Datatype](groups/Datatype.Datatype.md) |


## R
| Name | Description | Groups |
| :-----| :-----| :-----|
| [RoomService](classes/mw.RoomService.md) | MGS以及玩家信息、数据、头像等相关API | [Social](groups/Social.Social.md) |
| [RoomSettings](classes/mw.RoomSettings.md) | 房间设置 | [Settings](groups/Settings.Settings.md) |
| [Rotation](classes/mw.Rotation.md) | 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 | [Datatype](groups/Datatype.Datatype.md) |
| [RouteService](classes/mw.RouteService.md) | 游戏管理器 | [Social](groups/Social.Social.md) |


## S
| Name | Description | Groups |
| :-----| :-----| :-----|
| [ScrollBox](classes/mw.ScrollBox.md) | 滑动框 | [Gui](groups/Gui.Gui.md) |
| [Sequence](classes/Core.mw.TweenUtil.Sequence.md) | 序列工具类，主要用于获取连续的ID | [Utility](groups/Utility.Utility.md) |
| [SkyBox](classes/mw.SkyBox.md) | 天空球 | [Lighting](groups/Lighting.Lighting.md) |
| [SkyLight](classes/mw.SkyLight.md) | 环境光 | [Lighting](groups/Lighting.Lighting.md) |
| [SlateBrushWithGuid](classes/mw.SlateBrushWithGuid.md) | 贴图信息 | [Gui](groups/Gui.Gui.md) |
| [SlateColor](classes/mw.SlateColor.md) | UI颜色管理 | [Gui](groups/Gui.Gui.md) |
| [Sound](classes/mw.Sound.md) | 音效组件 | [Others](groups/Others.Others.md) |
| [SoundService](classes/mw.SoundService.md) | 音效管理器 | [Utility](groups/Utility.Utility.md) |
| [SpringArm](classes/mw.SpringArm.md) | 弹簧臂 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [StaleButton](classes/mw.StaleButton.md) | 按钮 | [Gui](groups/Gui.Gui.md) |
| [Stance](classes/mw.Stance.md) | 二级姿态 | [Animations](groups/Animations.Animations.md) |
| [StyleConfig](classes/mw.StyleConfig.md) | 人形外观配置类 | [Avatar](groups/Avatar.Avatar.md) |
| [Subdata](classes/mw.Subdata.md) | 数据控制类的基类 | [Data](groups/Data.Data.md) |
| [SwimmingVolume](classes/mw.SwimmingVolume.md) | 游泳区域 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [SystemUtil](classes/Core.mw.SystemUtil.SystemUtil.md) | 系统设置 | [Scripting](groups/Scripting.Scripting.md) |


## T
| Name | Description | Groups |
| :-----| :-----| :-----|
| [TabGroup](classes/mw.TabGroup.md) | 选项卡组 | [Gui](groups/Gui.Gui.md) |
| [TextBlock](classes/mw.TextBlock.md) | UI文本 | [Gui](groups/Gui.Gui.md) |
| [TouchInput](classes/mw.TouchInput.md) | 玩家从可触摸设备获取的数据信息，包含触摸手指数量，触摸位置(屏幕像素)和当前触摸状态(点击/滑动/离开) | [Input](groups/Input.Input.md) |
| [TouchPad](classes/mw.TouchPad.md) | 摄像机滑动区 | [Gui](groups/Gui.Gui.md) |
| [Transform](classes/mw.Transform.md) | Transform 由缩放、旋转和平移组成 | [Datatype](groups/Datatype.Datatype.md) |
| [Trigger](classes/mw.Trigger.md) | 触发器，对进入/离开触发器范围的事件进行响应 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Tween](classes/Core.mw.TweenUtil.Tween.md) | 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 | [Utility](groups/Utility.Utility.md) |


## U
| Name | Description | Groups |
| :-----| :-----| :-----|
| [UGCService](classes/mw.UGCService.md) | 用户建造服务 | [Scripting](groups/Scripting.Scripting.md) |
| [UIBehavior](classes/mw.UIBehavior.md) | UI的驱动脚本基类 | [Gui](groups/Gui.Gui.md) |
| [UIChildCollation](classes/mw.UIChildCollation.md) | 容器自动布局子项排序规则 | [Gui](groups/Gui.Gui.md) |
| [UIConstraintAnchors](classes/mw.UIConstraintAnchors.md) | 节点对齐规则 | [Gui](groups/Gui.Gui.md) |
| [UIFontInfo](classes/mw.UIFontInfo.md) | 字体信息 | [Gui](groups/Gui.Gui.md) |
| [UIHugContent](classes/mw.UIHugContent.md) | 容器自动布局大小适应规则 | [Gui](groups/Gui.Gui.md) |
| [UILayout](classes/mw.UILayout.md) | 容器自动布局规则 | [Gui](groups/Gui.Gui.md) |
| [UIManager](classes/mw.UIManager.md) | UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。 | [Gui](groups/Gui.Gui.md) |
| [UIObject](classes/mw.UIObject.md) | UI对象组件 | [Gui](groups/Gui.Gui.md) |
| [UITransform](classes/mw.UITransform.md) | 节点Transform | [Gui](groups/Gui.Gui.md) |
| [UIWidget](classes/mw.UIWidget.md) | 世界UI组件 | [Gui](groups/Gui.Gui.md) |
| [UserWidget](classes/mw.UserWidget.md) | UI控件的集合,预制体UI | [Gui](groups/Gui.Gui.md) |
| [UserWidgetPrefab](classes/mw.UserWidgetPrefab.md) | ui预制体 | [Gui](groups/Gui.Gui.md) |


## V
| Name | Description | Groups |
| :-----| :-----| :-----|
| [Vector](classes/mw.Vector.md) | 由分量 (x,y,z) 组成的三维空间中的向量 | [Datatype](groups/Datatype.Datatype.md) |
| [Vector2](classes/mw.Vector2.md) | 由分量 (x,y) 组成的二维空间中的向量 | [Datatype](groups/Datatype.Datatype.md) |
| [Vector4](classes/mw.Vector4.md) | 由分量 (x,y,z,w) 组成的4D齐次向量 | [Datatype](groups/Datatype.Datatype.md) |
| [VirtualJoystickPanel](classes/mw.VirtualJoystickPanel.md) | 摇杆 | [Gui](groups/Gui.Gui.md) |


## W
| Name | Description | Groups |
| :-----| :-----| :-----|
| [WheeledVehicle4W](classes/mw.WheeledVehicle4W.md) | 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 | [Gameplay](groups/Gameplay.Gameplay.md) |
| [Widget](classes/mw.Widget.md) | 可挂载叶子节点的根节点，以及提供各种自动布局功能 | [Gui](groups/Gui.Gui.md) |
| [WindowUtil](classes/mw.WindowUtil.md) | 窗口设置 | [Scripting](groups/Scripting.Scripting.md) |

