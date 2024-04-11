mw

# mw <Badge type="tip" text="Namespace" /> <Score text="mw" />

在调用DataStorage相关接口时，每一个Key的对应值在数据服务器的读取和修改都有频率限制，主要表现在：接口调用时至一分钟前的时间区间内，某个Key的对应值在后端数据服务器上被获取Get、改写Set、删除Remove的总次数不能超过 (60+游戏设定的最大人数×10)次，不管它是在哪个服务器被操作的；如果时间区间内超限，请求会失败，然后Set、Remove会返回 FREQUENCY_OVERRUN(操作失败：请求频率超限) 而Get会catch到error timeout。
::: warning Precautions
1. 这些限制是数据服务器层面针对单个Key来的，每个Key之间的限制互相独立，和游戏服务器无关。
2. Player相关的接口其实也算是一个Key，只不过是和玩家信息强相关的Key，也会受到上述限制；建议用 asyncSetData(属性名+玩家id+其他描述, 要存的值)来分存玩家相关的需要经常存取数据，以免堵塞。
3. 对于玩家相关的信息，建议在ts层建立数据缓存，进行一定的数据托管；即通过ts脚本逻辑让DS服务器临时缓存玩家数据，只在初始化的时候进行get，在离线或其他必要时set，以减轻对后端数据服务器的压力，保证稳定性
:::

## Table of contents

### Enumerations <Score text="Enumerations" /> 
| [AdsState](../enums/mw.AdsState.md)  |
| :-----|
| 广告状态，调用show方法的时候可能返回的广告状态|
| [AdsType](../enums/mw.AdsType.md)  |
| 广告类型|
| [AnimSlot](../enums/mw.AnimSlot.md)  |
| 动画插槽|
| [AnimationMode](../enums/mw.AnimationMode.md)  |
| 动画模式|
| [AppearanceType](../enums/mw.AppearanceType.md)  |
| 形象类型|
| [AssetNonHumanoidSlotType](../enums/mw.AssetNonHumanoidSlotType.md)  |
| 非人形角色插槽类型|
| [AssetType](../enums/mw.AssetType.md)  |
| 资源类型|
| [AttenuationDistanceModel](../enums/mw.AttenuationDistanceModel.md)  |
| 音效衰减函数模型|
| [AttenuationShape](../enums/mw.AttenuationShape.md)  |
| 音效衰减形状|
| [BasicStanceType](../enums/mw.BasicStanceType.md)  |
| 基础姿态风格|
| [BodyPartTypeV1](../enums/mw.BodyPartTypeV1.md)  |
| V1角色部位|
| [ButtonClickMethod](../enums/mw.ButtonClickMethod.md)  |
| 按钮点击响应规则|
| [ButtonPressMethod](../enums/mw.ButtonPressMethod.md)  |
| 按钮按压响应规则|
| [ButtonTouchMethod](../enums/mw.ButtonTouchMethod.md)  |
| 按钮触摸响应规则|
| [CameraControlType](../enums/mw.CameraControlType.md)  |
| 相机控制模式|
| [CameraPositionMode](../enums/mw.CameraPositionMode.md)  |
| 摄像机位置模式|
| [CameraPreset](../enums/mw.CameraPreset.md)  |
| 摄像机模式|
| [CameraProjectionMode](../enums/mw.CameraProjectionMode.md)  |
| 摄像机镜头模式|
| [CameraRotationMode](../enums/mw.CameraRotationMode.md)  |
| 摄像机旋转模式|
| [CameraSwitchBlendFunction](../enums/mw.CameraSwitchBlendFunction.md)  |
| 切换摄像机时运用的混合函数|
| [CharacterStateType](../enums/mw.CharacterStateType.md)  |
| 角色状态|
| [CharacterTemplate](../enums/mw.CharacterTemplate.md)  |
| 角色体型|
| [CharacterType](../enums/mw.CharacterType.md)  |
| 形象类型|
| [CheckBoxState](../enums/mw.CheckBoxState.md)  |
| 选中规则|
| [CollisionStatus](../enums/mw.CollisionStatus.md)  |
| 碰撞属性状态|
| [CollisionType](../enums/mw.CollisionType.md)  |
| 碰撞类型|
| [CustomShapeType](../enums/mw.CustomShapeType.md)  |
| 碰撞体形状类型|
| [DataStorageResultCode](../enums/mw.DataStorageResultCode.md)  |
| 数据储存返回代码|
| [DispatchEventResult](../enums/mw.DispatchEventResult.md)  |
| 事件发送的结果|
| [DragPivot](../enums/mw.DragPivot.md)  |
| 拖拽的锚点|
| [ExpressionType](../enums/mw.ExpressionType.md)  |
| 表情类型|
| [FogPreset](../enums/mw.FogPreset.md)  |
| 环境雾预设枚举|
| [GizmoCoordinateType](../enums/mw.GizmoCoordinateType.md)  |
| gizmo坐标轴类型|
| [GizmoModeType](../enums/mw.GizmoModeType.md)  |
| gizmo模式|
| [GizmoSpaceType](../enums/mw.GizmoSpaceType.md)  |
| gizmo空间|
| [GraphicsLevel](../enums/mw.GraphicsLevel.md)  |
| 画质等级|
| [GravityMode](../enums/mw.GravityMode.md)  |
| 重力模式|
| [HideInEditorState](../enums/mw.HideInEditorState.md)  |
| :----- |
| [HotWeaponAimMode](../enums/mw.HotWeaponAimMode.md)  |
| 热武器瞄准模式|
| [HotWeaponFireMode](../enums/mw.HotWeaponFireMode.md)  |
| 热武器开火模式|
| [HotWeaponState](../enums/mw.HotWeaponState.md)  |
| 热武器状态|
| [HttpRequestType](../enums/mw.HttpRequestType.md)  |
| 开发给用户用的Http请求类型枚举|
| [HttpRequestURL](../enums/mw.HttpRequestURL.md)  |
| 开发给用户用的URL枚举，需要与C++层的枚举对应|
| [HumanoidSlotType](../enums/mw.HumanoidSlotType.md)  |
| 人形角色插槽类型|
| [ImpulseForceType](../enums/mw.ImpulseForceType.md)  |
| 冲量力类型|
| [ImpulseType](../enums/mw.ImpulseType.md)  |
| 冲量的应用方式|
| [InitialOscillatorOffset](../enums/mw.InitialOscillatorOffset.md)  |
| 定义如何开始(从零开始，或者从随机值开始)|
| [InputTextLimit](../enums/mw.InputTextLimit.md)  |
| 输入框限制|
| [Keys](../enums/mw.Keys.md)  |
| 按键Key值|
| [LanguageType](../enums/mw.LanguageType.md)  |
| 游戏语言|
| [LogLevel](../enums/mw.LogLevel.md)  |
| 日志等级|
| [MaskButtonType](../enums/mw.MaskButtonType.md)  |
| 遮罩类型|
| [MessageChannelReceiver](../enums/mw.MessageChannelReceiver.md)  |
| 枚举各个通道的使用与接收方|
| [MessageState](../enums/mw.MessageState.md)  |
| 发送消息的状态|
| [MessageType](../enums/mw.MessageType.md)  |
| 发送消息的类型|
| [MotionAxis](../enums/mw.MotionAxis.md)  |
| 运动坐标系|
| [MouseLockMode](../enums/mw.MouseLockMode.md)  |
| 鼠标锁定模式|
| [MoveControlMode](../enums/mw.MoveControlMode.md)  |
| 移动控制模式|
| [MoveFacingDirection](../enums/mw.MoveFacingDirection.md)  |
| 运动时面朝方向|
| [MovementDirection](../enums/mw.MovementDirection.md)  |
| 运动时依据的正方向|
| [MovementMode](../enums/mw.MovementMode.md)  |
| 角色状态|
| [NavModifierType](../enums/mw.NavModifierType.md)  |
| 寻路动态修饰区类型，不同类型在寻路计算中成本不同，影响寻路结果|
| [NetStatus](../enums/mw.NetStatus.md)  |
| 同步状态|
| [NonHumanoidSlotType](../enums/mw.NonHumanoidSlotType.md)  |
| 非人形角色插槽类型|
| [ObjectTypeQuery](../enums/mw.ObjectTypeQuery.md)  |
| 碰撞检测通道|
| [Orientation](../enums/mw.Orientation.md)  |
| 滚动框类型|
| [OscillatorWaveform](../enums/mw.OscillatorWaveform.md)  |
| 振荡器波形|
| [PostProcessPreset](../enums/mw.PostProcessPreset.md)  |
| 后处理预设枚举|
| [PrefabStatus](../enums/mw.PrefabStatus.md)  |
| 预制体审核状态|
| [ProgressBarFillType](../enums/mw.ProgressBarFillType.md)  |
| 进度条填充规则|
| [ProjectileMovementStatus](../enums/mw.ProjectileMovementStatus.md)  |
| 投掷物移动状态|
| [PropertyStatus](../enums/mw.PropertyStatus.md)  |
| 属性状态|
| [ReleaseStatus](../enums/mw.ReleaseStatus.md)  |
| UGC 发布的状态|
| [RuntimePlatform](../enums/mw.RuntimePlatform.md)  |
| 运行平台|
| [ScrollBarDefaultLocation](../enums/mw.ScrollBarDefaultLocation.md)  |
| 滚动条默认位置|
| [SelectInfo](../enums/mw.SelectInfo.md)  |
| 列表视图选择来源信息|
| [SelectTapType](../enums/mw.SelectTapType.md)  |
| UGC 选中的单选或者多选|
| [SelectionMode](../enums/mw.SelectionMode.md)  |
| 列表视图选择模式|
| [SkyPreset](../enums/mw.SkyPreset.md)  |
| 天空盒预设枚举|
| [SlateBrushDrawType](../enums/mw.SlateBrushDrawType.md)  |
| 图片画刷绘制模式|
| [SlateBrushTileType](../enums/mw.SlateBrushTileType.md)  |
| 图片画刷填充模式|
| [SlateColorStylingMode](../enums/mw.SlateColorStylingMode.md)  |
| UI颜色应用模式|
| [SlateVisibility](../enums/mw.SlateVisibility.md)  |
| UI节点显示规则|
| [SlideMethod](../enums/mw.SlideMethod.md)  |
| 进度条滑动的方式|
| [SomatotypeV1](../enums/mw.SomatotypeV1.md)  |
| V1角色体型|
| [SomatotypeV2](../enums/mw.SomatotypeV2.md)  |
| 角色体型|
| [SoundPlayState](../enums/mw.SoundPlayState.md)  |
| 音效播放状态|
| [StanceBlendMode](../enums/mw.StanceBlendMode.md)  |
| 姿态混合模式|
| [TeleportStatus](../enums/mw.TeleportStatus.md)  |
| 传送状态|
| [TextCommit](../enums/mw.TextCommit.md)  |
| 输入提交模式|
| [TextJustify](../enums/mw.TextJustify.md)  |
| 文本排列对齐规则|
| [TextVerticalJustify](../enums/mw.TextVerticalJustify.md)  |
| 文本排列垂直对齐规则|
| [TouchInputType](../enums/mw.TouchInputType.md)  |
| 触摸类型|
| [TriggerShapeType](../enums/mw.TriggerShapeType.md)  |
| 碰撞形状|
| [UIConstraintHorizontal](../enums/mw.UIConstraintHorizontal.md)  |
| 对齐策略水平规则|
| [UIConstraintVertical](../enums/mw.UIConstraintVertical.md)  |
| 对齐策略垂直规则|
| [UIFontGlyph](../enums/mw.UIFontGlyph.md)  |
| 字体类型|
| [UIHorizontalCollation](../enums/mw.UIHorizontalCollation.md)  |
| 自动布局子项布局排序 - 水平排序|
| [UIHugContentHorizontally](../enums/mw.UIHugContentHorizontally.md)  |
| 自动布局容器水平适应规则|
| [UIHugContentVertically](../enums/mw.UIHugContentVertically.md)  |
| 自动布局容器垂直适应规则|
| [UILayoutPacket](../enums/mw.UILayoutPacket.md)  |
| 自动布局排版规则-排列规则|
| [UILayoutType](../enums/mw.UILayoutType.md)  |
| 自动布局排版规则-容器类型|
| [UIScrollBoxAnimationType](../enums/mw.UIScrollBoxAnimationType.md)  |
| 滚动框动画类型|
| [UITextHorizontalLayout](../enums/mw.UITextHorizontalLayout.md)  |
| 文本框规则显示规则限制|
| [UIVerticalCollation](../enums/mw.UIVerticalCollation.md)  |
| 自动布局子项布局排序 - 垂直排序|
| [UploadPrefabResultType](../enums/mw.UploadPrefabResultType.md)  |
| 移动编辑器上传预制体返回状态|
| [VehicleDriveMode4WNew](../enums/mw.VehicleDriveMode4WNew.md)  |
| 四轮载具驱动模式|
| [VehicleWheelPosition4WNew](../enums/mw.VehicleWheelPosition4WNew.md)  |
| 四轮载具车轮位置|
| [WidgetGeometryMode](../enums/mw.WidgetGeometryMode.md)  |
| UI形状枚举|
| [WidgetSpaceMode](../enums/mw.WidgetSpaceMode.md)  |
| UI空间位置枚举|
| [consumeKeyStatus](../enums/mw.consumeKeyStatus.md)  |
| 大会员扣除钥匙订单返回状态信息|

### Classes <Score text="Classes" /> 
| [AccountService](../classes/mw.AccountService.md)  |
| :-----|
| 用户账号信息管理服务|
| [Action](../classes/mw.Action.md)  |
| 代理|
| [Action1](../classes/mw.Action1.md)  |
| 一个参数的代理|
| [Action2](../classes/mw.Action2.md)  |
| 两个参数的代理|
| [Action3](../classes/mw.Action3.md)  |
| 三个参数的代理|
| [AdsService](../classes/mw.AdsService.md)  |
| 广告服务，支持激励/插屏类型|
| [AdvancedVehicle](../classes/mw.AdvancedVehicle.md)  |
| 四轮载具|
| [Animation](../classes/mw.Animation.md)  |
| 动画|
| [AssetIconData](../classes/mw.AssetIconData.md)  |
| 资源 icon 信息|
| [AssetUtil](../classes/mw.AssetUtil.md)  |
| 资源管理工具|
| [AvatarSettings](../classes/mw.AvatarSettings.md)  |
| 控制一些优化项的开启关闭|
| [BlockingVolume](../classes/mw.BlockingVolume.md)  |
| 禁行区|
| [Button](../classes/mw.Button.md)  |
| 按钮|
| [Camera](../classes/mw.Camera.md)  |
| 摄像机|
| [Canvas](../classes/mw.Canvas.md)  |
| 容器|
| [Character](../classes/mw.Character.md)  |
| 角色|
| [CharacterDecoration](../classes/mw.CharacterDecoration.md)  |
| 角色挂件插槽|
| [CharacterDescription](../classes/mw.CharacterDescription.md)  |
| 人形外观配置|
| [CharacterEvent](../classes/mw.CharacterEvent.md)  |
| 角色输入事件|
| [ChatBubble](../classes/mw.ChatBubble.md)  |
| 聊天头顶气泡|
| [ChatService](../classes/mw.ChatService.md)  |
| 聊天服务|
| [ColorPick](../classes/mw.ColorPick.md)  |
| 调色板|
| [Component](../classes/mw.Component.md)  |
| :----- |
| [ConvertScreenResult](../classes/mw.ConvertScreenResult.md)  |
| 屏幕坐标转换结果|
| [DataStorage](../classes/mw.DataStorage.md)  |
| 数据存储|
| [DebugService](../classes/mw.DebugService.md)  |
| debug调试服务|
| [DebugUtil](../classes/mw.DebugUtil.md)  |
| 游戏性能数据，辅助 Debug 和性能优化|
| [Delegate](../classes/mw.Delegate.md)  |
| 委托|
| [DragDropOperation](../classes/mw.DragDropOperation.md)  |
| UI 拖拽事件|
| [DragDropPayLoad](../classes/mw.DragDropPayLoad.md)  |
| 拖拽事件数据传递类|
| [Effect](../classes/mw.Effect.md)  |
| 特效|
| [EffectService](../classes/mw.EffectService.md)  |
| 特效管理器|
| [EnvironmentSettings](../classes/mw.EnvironmentSettings.md)  |
| 环境设置|
| [Event](../classes/mw.Event.md)  |
| 事件|
| [EventListener](../classes/mw.EventListener.md)  |
| 事件监听器|
| [EventReply](../classes/mw.EventReply.md)  |
| 事件回复|
| [Fog](../classes/mw.Fog.md)  |
| 环境雾|
| [GameObject](../classes/mw.GameObject.md)  |
| 场景中所有实体的基类|
| [Geometry](../classes/mw.Geometry.md)  |
| 几何坐标信息|
| [GestureDelegate](../classes/mw.GestureDelegate.md)  |
| 手势代理类|
| [GraphicsSettings](../classes/mw.GraphicsSettings.md)  |
| 图片画质设置|
| [HitResult](../classes/mw.HitResult.md)  |
| 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。|
| [HotWeapon](../classes/mw.HotWeapon.md)  |
| 热武器|
| [HotWeaponAccuracyOfFireComponent](../classes/mw.HotWeaponAccuracyOfFireComponent.md)  |
| 热武器射击精度组件|
| [HotWeaponAimComponent](../classes/mw.HotWeaponAimComponent.md)  |
| 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近|
| [HotWeaponFireComponent](../classes/mw.HotWeaponFireComponent.md)  |
| 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑|
| [HotWeaponLoadComponent](../classes/mw.HotWeaponLoadComponent.md)  |
| 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑|
| [HotWeaponRecoilForceComponent](../classes/mw.HotWeaponRecoilForceComponent.md)  |
| 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复）|
| [HotWeaponReloadComponent](../classes/mw.HotWeaponReloadComponent.md)  |
| 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑|
| [Image](../classes/mw.Image.md)  |
| 图片|
| [Impulse](../classes/mw.Impulse.md)  |
| 冲量|
| [InputBox](../classes/mw.InputBox.md)  |
| 输入框|
| [InputUtil](../classes/mw.InputUtil.md)  |
| 输入事件工具|
| [IntegratedMover](../classes/mw.IntegratedMover.md)  |
| 运动器组件|
| [Interactor](../classes/mw.Interactor.md)  |
| 交互物，请保证交互前动画资源已加载，否则可能导致位置错误或者其他不可预料的表现|
| [JoystickBindKeyType](../classes/mw.JoystickBindKeyType.md)  |
| 摇杆按键绑定|
| [JoystickStyleDesigner](../classes/mw.JoystickStyleDesigner.md)  |
| 摇杆信息|
| [KeyEvent](../classes/mw.KeyEvent.md)  |
| 按键事件|
| [LanguageUtil](../classes/mw.LanguageUtil.md)  |
| 多语言工具|
| [Lighting](../classes/mw.Lighting.md)  |
| 光照|
| [LinearColor](../classes/mw.LinearColor.md)  |
| 线性RGBA颜色，r, g, b颜色值的有效范围是float的精度|
| [LocaleUtil](../classes/mw.LocaleUtil.md)  |
| 本地化工具|
| [Margin](../classes/mw.Margin.md)  |
| 基础的边距，提供4个方向的数值修改|
| [MaskButton](../classes/mw.MaskButton.md)  |
| 遮罩按钮|
| [MaterialInstance](../classes/mw.MaterialInstance.md)  |
| 材质实例类|
| [MathUtil](../classes/mw.MathUtil.md)  |
| 数学库工具|
| [Matrix3x3](../classes/mw.Matrix3x3.md)  |
| 三维矩阵|
| [Matrix4x4](../classes/mw.Matrix4x4.md)  |
| 四维矩阵|
| [Model](../classes/mw.Model.md)  |
| 物理模拟与材质设置|
| [MulticastDelegate](../classes/mw.MulticastDelegate.md)  |
| 多播委托接口|
| [MulticastGameObjectDelegate](../classes/mw.MulticastGameObjectDelegate.md)  |
| 广播代理|
| [NavModifierVolume](../classes/mw.NavModifierVolume.md)  |
| 寻路动态修饰区|
| [Navigation](../classes/mw.Navigation.md)  |
| 寻路|
| [ObjectLauncher](../classes/mw.ObjectLauncher.md)  |
| 投掷物发射器|
| [PanelWidget](../classes/Core.mw.PanelWidget.md) |
| [Pawn](../classes/mw.Pawn.md)  |
| Pawn作为玩家角色和非对象玩家角色的基类，是一个可以通过玩家控制器或者逻辑脚本控制的游戏对象。|
| [PhysicsService](../classes/mw.PhysicsService.md)  |
| 碰撞组|
| [PhysicsThruster](../classes/mw.PhysicsThruster.md)  |
| 推进器|
| [Player](../classes/mw.Player.md)  |
| 角色管理器|
| [PlayerState](../classes/mw.PlayerState.md)  |
| PlayerState基类|
| [PointerEvent](../classes/mw.PointerEvent.md)  |
| 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类|
| [PostProcess](../classes/mw.PostProcess.md)  |
| 后处理|
| [PostProcessConfig](../classes/mw.PostProcessConfig.md)  |
| 后处理对象属性配置|
| [ProgressBar](../classes/mw.ProgressBar.md)  |
| 进度条|
| [ProjectileInst](../classes/mw.ProjectileInst.md)  |
| 投掷物发射器专用实例对象|
| [ProjectileMovement](../classes/mw.ProjectileMovement.md)  |
| 投掷物移动功能类|
| [PurchaseService](../classes/mw.PurchaseService.md)  |
| 应用内购服务|
| [Quaternion](../classes/mw.Quaternion.md)  |
| 四元数|
| [QueryUtil](../classes/mw.QueryUtil.md)  |
| 射线检测工具|
| [RoomService](../classes/mw.RoomService.md)  |
| MGS以及玩家信息、数据、头像等相关API。|
| [RoomSettings](../classes/mw.RoomSettings.md)  |
| 房间设置|
| [Rotation](../classes/mw.Rotation.md)  |
| 欧拉角|
| [RouteService](../classes/mw.RouteService.md)  |
| 游戏管理器|
| [ScreenUtil](../classes/mw.ScreenUtil.md)  |
| 屏幕视口工具|
| [Script](../classes/mw.Script.md)  |
| 脚本的基类|
| [ScriptingSettings](../classes/mw.ScriptingSettings.md)  |
| 全局的脚本配置信息|
| [ScrollBox](../classes/mw.ScrollBox.md)  |
| 滑动框|
| [SelectionUtil](../classes/mw.SelectionUtil.md)  |
| 描边绘制工具|
| [Skybox](../classes/mw.Skybox.md)  |
| 天空盒|
| [SlateColor](../classes/mw.SlateColor.md)  |
| 颜色管理|
| [Sound](../classes/mw.Sound.md)  |
| 音效|
| [SoundService](../classes/mw.SoundService.md)  |
| 音效管理器|
| [SpringArm](../classes/mw.SpringArm.md)  |
| 弹簧臂|
| [StaleButton](../classes/mw.StaleButton.md)  |
| 文本按钮|
| [Stance](../classes/mw.Stance.md)  |
| 基础姿态|
| [StringUtil](../classes/mw.StringUtil.md)  |
| 字符串工具|
| [SubStance](../classes/mw.SubStance.md)  |
| 二级姿态|
| [SwimmingVolume](../classes/mw.SwimmingVolume.md)  |
| 游泳区域|
| [SystemUtil](../classes/mw.SystemUtil.md)  |
| 状态信息获取工具|
| [TabGroup](../classes/mw.TabGroup.md)  |
| 选项卡组|
| [TeleportService](../classes/mw.TeleportService.md)  |
| 多场景和传送服务|
| [TextBlock](../classes/mw.TextBlock.md)  |
| 文本|
| [TimeUtil](../classes/mw.TimeUtil.md)  |
| 时间工具|
| [TouchPad](../classes/mw.TouchPad.md)  |
| 摄像机滑动区|
| [Transform](../classes/mw.Transform.md)  |
| 三维变换|
| [Trigger](../classes/mw.Trigger.md)  |
| 触发器|
| [Tween](../classes/mw.Tween.md)  |
| 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。|
| [TweenGroup](../classes/mw.TweenGroup.md)  |
| 补间组，用于同时控制多个补间对象|
| [TweenSequence](../classes/mw.TweenSequence.md)  |
| 序列工具类，主要用于获取连续的ID|
| [TweenUtil](../classes/mw.TweenUtil.md)  |
| 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。|
| [UIChildCollation](../classes/mw.UIChildCollation.md)  |
| 容器自动布局子项排序规则|
| [UIConstraintAnchors](../classes/mw.UIConstraintAnchors.md)  |
| 节点对齐规则|
| [UIFontInfo](../classes/mw.UIFontInfo.md)  |
| 字体信息|
| [UIHugContent](../classes/Core.mw.UIHugContent.md) |
| [UILayout](../classes/mw.UILayout.md)  |
| 容器自动布局规则|
| [UIObject](../classes/mw.UIObject.md)  |
| UI 对象|
| [UIScript](../classes/mw.UIScript.md)  |
| UI 的驱动脚本基类|
| [UIService](../classes/mw.UIService.md)  |
| UI 管理类|
| [UITransform](../classes/mw.UITransform.md)  |
| 节点Transform|
| [UIWidget](../classes/mw.UIWidget.md)  |
| 世界 UI|
| [UserWidget](../classes/mw.UserWidget.md)  |
| 自定义控件|
| [Vector](../classes/mw.Vector.md)  |
| 三维向量|
| [Vector2](../classes/mw.Vector2.md)  |
| 二维向量|
| [Vector4](../classes/mw.Vector4.md)  |
| 齐次向量|
| [VirtualJoystickPanel](../classes/mw.VirtualJoystickPanel.md)  |
| 摇杆|
| [Widget](../classes/mw.Widget.md)  |
| 控件的基类|
| [WindowUtil](../classes/mw.WindowUtil.md)  |
| 窗口设置工具。|

### Interfaces <Score text="Interfaces" /> 
| [CameraShakeInfo](../interfaces/mw.CameraShakeInfo.md)  |
| :-----|
| 抖动数据|
| [DataStorageResult](../interfaces/mw.DataStorageResult.md)  |
| 数据储存返回值|
| [GameObjectInfo](../interfaces/mw.GameObjectInfo.md)  |
| 构建物体的信息|
| [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md)  |
| 投掷物配置类型|
| [RequestInit](../interfaces/mw.RequestInit.md)  |
| HTTP请求信息的对象|
| [Response](../interfaces/mw.Response.md)  |
| HTTP响应信息的对象|
| [RoomInfo](../interfaces/mw.RoomInfo.md)  |
| 玩家所在的房间信息|
| [TeleportOptions](../interfaces/mw.TeleportOptions.md)  |
| 传送时可额外提供的信息|
| [TeleportResult](../interfaces/mw.TeleportResult.md)  |
| 传送请求的结果|
| [TypeName](../interfaces/mw.TypeName.md)  |
| 类定义，使用这个可以省去类参数繁琐的类型声明    如:fun`<T>`(c:`{new():T}`) 可以写成 fun`<T>`(c:Class`<T>`)|

### Type Aliases <Score text="Type" /> 
| **[BoolResponse](Core.mw.md#boolresponse)**: (`success`: `boolean`) => `void`  |
| :-----|
| 返回bool的回调|
| **[BroadcastMessageResult](Core.mw.md#broadcastmessageresult)**: `Object`  |
| 发送消息的结果|
| **[ChatEvent](Core.mw.md#chatevent)**: (`jsonData`: `string`) => `void`  |
| 收到MGS事件调用|
| **[DelegateFuncType](Core.mw.md#delegatefunctype)**: (...`arg`: `unknown`[]) => `unknown` <Badge type="tip" text="other" />  |
| 代理回调函数签名|
| **[DownloadDataResponse](Core.mw.md#downloaddataresponse)**: () => `void`  |
| 下载角色形象的回调，无参数|
| **[EmptyCallback](Core.mw.md#emptycallback)**: () => `void`  |
| 空的回调函数类型|
| **[HttpResponse](Core.mw.md#httpresponse)**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void`  |
| Http请求的回调消息格式|
| **[LoadAppearanceDataAllCompletedCallback](Core.mw.md#loadappearancedataallcompletedcallback)**: () => `void`  |
| 角色编辑器数据加载完成后的回调|
| **[LocalUGCGameInfo](Core.mw.md#localugcgameinfo)**: `Object`  |
| 本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。|
| **[MGSEvent](Core.mw.md#mgsevent)**: (`jsonData`: `string`) => `void`  |
| 收到MGS事件调用|
| **[MGSResponse](Core.mw.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`  |
| 收到233回复|
| **[MyPrefabsResult](Core.mw.md#myprefabsresult)**: `Object`  |
| 移动编辑器获取自己上传的所有预制体资源信息|
| **[MyPrefabsResultInfo](Core.mw.md#myprefabsresultinfo)**: `Object`  |
| 移动编辑器上传预制体资源信息|
| **[OnArkBalanceUpdated](Core.mw.md#onarkbalanceupdated)**: (`amount`: `number`) => `void`  |
| 客户端接收余额更新的消息格式|
| **[OnDescriptionChange](Core.mw.md#ondescriptionchange)**: (`operationCode`: `number`, `index`: `number`, `value`: `unknown`) => `void`  |
| 外观加载细节变化委托|
| **[OnDescriptionComplete](Core.mw.md#ondescriptioncomplete)**: (`character`: [`Character`](../classes/mw.Character.md)) => `void`  |
| 外观加载完成委托|
| **[OnKeyConsume](Core.mw.md#onkeyconsume)**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`  |
| 大会员钥匙扣除服务端接收发货通知的消息格式|
| **[OnMovementModeChange](Core.mw.md#onmovementmodechange)**: (`mode`: [`MovementMode`](../enums/mw.MovementMode.md)) => `void`  |
| 移动状态切换委托|
| **[OnOrderDelivered](Core.mw.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`  |
| 服务端接收发货通知的消息格式|
| **[OnRecvChatMessage](Core.mw.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void`  |
| 接收聊天信息回调方法类型|
| **[OnViewLayoutSwitched](Core.mw.md#onviewlayoutswitched)**: (`newState`: `number`) => `void`  |
| 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](Core.mw.md#onviewrefreshed)**: () => `void`  |
| 233中窗口刷新的消息格式|
| **[PublishedUGCGameInfo](Core.mw.md#publishedugcgameinfo)**: `Object`  |
| 发布成功的UGC消费态游戏信息|
| **[RedeemResponse](Core.mw.md#redeemresponse)**: `Object`  |
| status : 兑换状态。|
| **[ReleaseGameData](Core.mw.md#releasegamedata)**: `Object`  |
| 已发布的游戏数据，用于继承服务器数据。|
| **[SetAppearanceDataCallback](Core.mw.md#setappearancedatacallback)**: (`APIName`: `string`) => `void`  |
| 设置编辑数据完成的回调|
| **[StringCallback](Core.mw.md#stringcallback)**: (`str`: `string`) => `void`  |
| 返回String的回调|
| **[StringResponse](Core.mw.md#stringresponse)**: (`dataString`: `string`) => `void`  |
| 返回string的回调|
| **[TabGroupOnClickedProps](Core.mw.md#tabgrouponclickedprops)**: `Object`  |
| 选项卡组-点击事件type|
| **[TeamMatchFailureInfo](Core.mw.md#teammatchfailureinfo)**: `Object`  |
| 组队跳游戏请求失败回调|
| **[TeleportData](Core.mw.md#teleportdata)**: `string`  `string`[]  `Record`<`string`, `any`\>  `Record`<`string`, `any`\>[]  |
| 传送时可携带的数据类型|
| **[TransactionType](Core.mw.md#transactiontype)**: (`isSuccess`: `boolean`, `content`: `string`) => `void`  |
| 商城通信回调消息格式|
| **[TweenEasingFunction](Core.mw.md#tweeneasingfunction)**: (`amount`: `number`) => `number`  |
| 缓动函数的类型定义|
| **[TweenInterpolationFunction](Core.mw.md#tweeninterpolationfunction)**: (`v`: `number`[], `k`: `number`) => `number`  |
| 插值函数的类型定义|
| **[TweenUnknownProps](Core.mw.md#tweenunknownprops)**: `Record`<`string`, `any`\>  |
| 补间属性的定义，用户可以自由扩展|
| **[UGCTemplateInfo](Core.mw.md#ugctemplateinfo)**: `Object`  |
| UGC模板信息|
| **[UploadDataResponse](Core.mw.md#uploaddataresponse)**: (`success`: `boolean`) => `void`  |
| 下载角色形象的回调消息格式|
| **[UploadPrefabResult](Core.mw.md#uploadprefabresult)**: `Object`  |
| 移动编辑器上传预制体返回结果|
| **[VehicleGearDataNew](Core.mw.md#vehiclegeardatanew)**: `Object`  |
| 四轮载具挡位属性|
| **[VehicleWheelDataNew](Core.mw.md#vehiclewheeldatanew)**: `Object`  |
| 四轮载具车轮属性|
| **[VoidResponse](Core.mw.md#voidresponse)**: () => `void`  |
| 返回无参数的回调|
| **[downloadCharacterDataStringCallback](Core.mw.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void`  |
| 下载平台数据回调|
| **[keyUsageInfo](Core.mw.md#keyusageinfo)**: `Object`  |
| 大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳|
| **[maskWordCheckResult](Core.mw.md#maskwordcheckresult)**: `Object`  |
| 屏蔽字检测的结果|
| **[onAppearanceDataChanged](Core.mw.md#onappearancedatachanged)**: (`GUID`: `string`) => `void`  |
| 角色身上GUID切换成功回调|

### Variables <Score text="Variables" /> 
| **[Client](Core.mw.md#client)**: `FunctionOption`   |
| :-----|
| 客户端|
| **[Multicast](Core.mw.md#multicast)**: `FunctionOption`   |
| 多播|
| **[Server](Core.mw.md#server)**: `FunctionOption`   |
| 服务端|
| **[UILayerBottom](Core.mw.md#uilayerbottom)**: ``1``  |
| 底层 zOrder开始于100000|
| **[UILayerDialog](Core.mw.md#uilayerdialog)**: ``5``  |
| 对话 zOrder开始于500000|
| **[UILayerError](Core.mw.md#uilayererror)**: ``7``  |
| 错误 这个层级不可以使用，需要增加层级可以使用addUILayerMap zOrder开始于700000|
| **[UILayerMiddle](Core.mw.md#uilayermiddle)**: ``2``  |
| 中层 zOrder开始于200000|
| **[UILayerOwn](Core.mw.md#uilayerown)**: ``3``  |
| 独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000|
| **[UILayerScene](Core.mw.md#uilayerscene)**: ``0``  |
| 场景 zOrder开始于0|
| **[UILayerSystem](Core.mw.md#uilayersystem)**: ``6``  |
| 系统 zOrder开始于600000|
| **[UILayerTop](Core.mw.md#uilayertop)**: ``4``  |
| 顶层 zOrder开始于400000|

### Functions <Score text="Functions" /> 
| **[Property](Core.mw.md#property)**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void`   |
| :-----|
| 属性支持同步|
| **[RemoteFunction](Core.mw.md#remotefunction)**(`...options`): (`target`: `unknown`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void`   |
| 函数支持Rpc调用|
| **[Serializable](Core.mw.md#serializable)**<`T`: extends `ConstructorType`\>(`type`: `T`): `T`: extends `ConstructorType`   |
| 类型支持属性同步|
| **[absoluteToLocal](Core.mw.md#absolutetolocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absolutePosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 转化绝对坐标到相对坐标|
| **[absoluteToViewport](Core.mw.md#absolutetoviewport)**(`absoluteDesktopPosition`: [`Vector2`](../classes/mw.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/mw.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/mw.Vector2.md)): `void` <Badge type="tip" text="client" />  |
| 将桌面空间中几何图形的绝对坐标转换为本地视口坐标|
| **[assetIDChangeIconUrlRequest](Core.mw.md#assetidchangeiconurlrequest)**(`assets`: `string`[]): `Promise`<`void`\> <Badge type="tip" text="client" />  |
| 异步请求资源的ICON信息|
| **[asyncCaptureAvatar](Core.mw.md#asynccaptureavatar)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`): `Promise`<`string`\> <Badge type="tip" text="client" />  |
| 异步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[asyncCaptureAvatarMSAA](Core.mw.md#asynccaptureavatarmsaa)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `SampleCount`: `number`, `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`): `Promise`<`string`\> <Badge type="tip" text="client" />  |
| 异步对指定虚拟角色进行截取(开启MSAA)，截图保存在本地固定路径下|
| **[asyncGetQualityGameList](Core.mw.md#asyncgetqualitygamelist)**(`resourceId`: `number`, `pageIndex`: `number`): `Promise`<`string`\> <Badge type="tip" text="client" />  |
| 获取优质作品列表|
| **[asyncGetReleaseGameData](Core.mw.md#asyncgetreleasegamedata)**(`gameId`: `string`, `version?`: `string`, `bDownload?`: `boolean`): `Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\> <Badge type="tip" text="client" />  |
| 通过指定的消费态游戏ID和版本号获取已发布的游戏数据|
| **[asyncGetResourceList](Core.mw.md#asyncgetresourcelist)**(`classification`: `number`, `lastID`: `number`, `pageSize`: `number`): `Promise`<`string`\> <Badge type="tip" text="client" />  |
| 获取资源列表|
| **[asyncSaveProject](Core.mw.md#asyncsaveproject)**(): `Promise`<`boolean`\>   |
| 保存当前游戏项目|
| **[beginActorPropertiesChange](Core.mw.md#beginactorpropertieschange)**(`target`: `Base`): `void` <Badge type="tip" text="client" />  |
| 开始记录撤销恢复的actor属性|
| **[beginActorTransformChange](Core.mw.md#beginactortransformchange)**(`target`: `Base`): `void` <Badge type="tip" text="client" />  |
| 开始记录actor的transform属性|
| **[calculateActorEqualScale](Core.mw.md#calculateactorequalscale)**(`currentScale`: [`Vector`](../classes/mw.Vector.md), `deltaScale`: [`Vector`](../classes/mw.Vector.md)): [`Vector`](../classes/mw.Vector.md) <Badge type="tip" text="client" />  |
| 计算actor的等比缩放|
| **[cancelDragDrop](Core.mw.md#canceldragdrop)**(): `void` <Badge type="tip" text="client" />  |
| 中断所有的DragDrop|
| **[captureAvatar](Core.mw.md#captureavatar)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <Badge type="tip" text="client" />  |
| 同步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[captureAvatarMSAA](Core.mw.md#captureavatarmsaa)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `SampleCount`: `number`, `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <Badge type="tip" text="client" />  |
| 模拟MSAA对指定虚拟角色截取图像，截图保存在本地固定路径下|
| **[clearUselessLocalMaterials](Core.mw.md#clearuselesslocalmaterials)**(`IgnoreMatGuids?`: `string`[]): `void`   |
| 清除项目中没有引用的本地材质资源|
| **[convertScreenLocationToWorldSpace](Core.mw.md#convertscreenlocationtoworldspace)**(`ScreenX`: `number`, `ScreenY`: `number`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md)   |
| 将二维屏幕位置转换为世界空间三维位置和方向|
| **[createUI](Core.mw.md#createui)**<`T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\>\>(`UIPrefabName`: `string`, `panelClass`: () => `T`): `T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> <Badge type="tip" text="client" />  |
| 创建UIPrefab|
| **[createUIByName](Core.mw.md#createuibyname)**(`UIPrefabName`: `string`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />  |
| 创建UIPrefab|
| **[createUIByPath](Core.mw.md#createuibypath)**(`UIPath`: `string`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />  |
| 创建UIPrefab|
| **[createUIOnlyClass](Core.mw.md#createuionlyclass)**<`T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\>\>(`panelClass`: () => `T`): `T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> <Badge type="tip" text="client" />  |
| 创建空的UI|
| **[endActorPropertiesChange](Core.mw.md#endactorpropertieschange)**(`target`: `Base`): `void` <Badge type="tip" text="client" />  |
| 结束记录actor属性的撤销恢复|
| **[endActorTransformChange](Core.mw.md#endactortransformchange)**(`target`: `Base`, `bIsGizmoActor?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 结束记录actor的transform|
| **[endDragDrop](Core.mw.md#enddragdrop)**(`InReply`: [`EventReply`](../classes/mw.EventReply.md)): `void` <Badge type="tip" text="client" />  |
| 中断一个拖拽事件, 传入一个操作的事件|
| **[executiveCommand](Core.mw.md#executivecommand)**(`cmd`: `string`): `void` <Badge type="tip" text="client" />  |
| 执行命令|
| **[fetch](Core.mw.md#fetch)**(`url`: `string`, `init?`: [`RequestInit`](../interfaces/mw.RequestInit.md)): `Promise`<[`Response`](../interfaces/mw.Response.md)\>   |
| HTTP请求|
| **[findUIScript](Core.mw.md#finduiscript)**(`UI`: [`Widget`](../classes/mw.Widget.md)): [`UIScript`](../classes/mw.UIScript.md) <Badge type="tip" text="client" />  |
| 获取UI脚本|
| **[generalHttpRequest](Core.mw.md#generalhttprequest)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/mw.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean`   |
| 通用Http请求|
| **[getAbsoluteSize](Core.mw.md#getabsolutesize)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 返回绝对空间中几何图形的大小|
| **[getAssetIconDataByAssetID](Core.mw.md#getasseticondatabyassetid)**(`asset`: `string`): [`AssetIconData`](../classes/mw.AssetIconData.md) <Badge type="tip" text="client" />  |
| 获取资源的ICON信息|
| **[getCurrentMousePosition](Core.mw.md#getcurrentmouseposition)**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取当前鼠标所在的绝对位置|
| **[getDragDroppingContent](Core.mw.md#getdragdroppingcontent)**(): [`DragDropOperation`](../classes/mw.DragDropOperation.md) <Badge type="tip" text="client" />  |
| 获取当前的DragDrop事件|
| **[getGameTransmissionData](Core.mw.md#getgametransmissiondata)**(): `string` <Badge type="tip" text="client" />  |
| 蓝军自定义启动参数，每个游戏可以是不一样的，推荐使用一个JSON字符串|
| **[getGizmo](Core.mw.md#getgizmo)**(): `mw.Gizmo` <Badge type="tip" text="client" />  |
| 获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[getHeadSculpture](Core.mw.md#getheadsculpture)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <Badge type="tip" text="client" />  |
| 对指定虚拟角色进行截取后上传到服务器|
| **[getLastMousePosition](Core.mw.md#getlastmouseposition)**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取上一次鼠标所在的绝对位置|
| **[getLocalMaterialsCount](Core.mw.md#getlocalmaterialscount)**(): `number`   |
| 获取创建的本地材质数量|
| **[getLocalSize](Core.mw.md#getlocalsize)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 返回局部空间中几何图形的大小|
| **[getLocalTopLeft](Core.mw.md#getlocaltopleft)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 返回局部空间中几何图形的局部顶部/左侧|
| **[getMousePositionOnPlatform](Core.mw.md#getmousepositiononplatform)**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取平台的鼠标光标位置。这是鼠标的绝对桌面位置。|
| **[getMousePositionOnViewport](Core.mw.md#getmousepositiononviewport)**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取平台的鼠标光标在视口控件的本地空间中的位置。|
| **[getMyPrefabs](Core.mw.md#getmyprefabs)**(`lastId`: `number`, `size`: `number`): `Promise`<[`MyPrefabsResult`](Core.mw.md#myprefabsresult)\> <Badge type="tip" text="other" />  |
| 移动编辑器获取自己上传的所有预制体资源Id和状态|
| **[getOneFingerMoveGestureDelegate](Core.mw.md#getonefingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取单指滑动的代理|
| **[getPinchGestureDelegate](Core.mw.md#getpinchgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <Badge type="tip" text="client" />  |
| 获取挤压手势的代理|
| **[getPlayerScreenWidgetGeometry](Core.mw.md#getplayerscreenwidgetgeometry)**(`player`: [`Player`](../classes/mw.Player.md)): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取包含添加到“player screen”的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[getResolutionChanged](Core.mw.md#getresolutionchanged)**(`Delegate`: [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`x`: `number`, `y`: `number`) => `void`\>): `void` <Badge type="tip" text="client" />  |
| 分辨率改变时的回调|
| **[getSavedDir](Core.mw.md#getsaveddir)**(): `string` <Badge type="tip" text="client" />  |
| 获取截图的保存路径|
| **[getTapGestureDelegate](Core.mw.md#gettapgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取点击事件的代理|
| **[getTouchBeganGestureDelegate](Core.mw.md#gettouchbegangesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指按下代理|
| **[getTouchData](Core.mw.md#gettouchdata)**(): [`Vector`](../classes/mw.Vector.md)[] <Badge type="tip" text="client" />  |
| 获取touch的数组|
| **[getTouchEndGestureDelegate](Core.mw.md#gettouchendgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指抬起代理|
| **[getTouchMoveGestureDelegate](Core.mw.md#gettouchmovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指滑动代理|
| **[getTwoFingerMoveGestureDelegate](Core.mw.md#gettwofingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取双指滑动的代理|
| **[getUrlParameter](Core.mw.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string`   |
| 获取url参数|
| **[getViewportScale](Core.mw.md#getviewportscale)**(): `number` <Badge type="tip" text="client" />  |
| 获取应用于视口和所有小部件的当前DPI Scale。|
| **[getViewportSize](Core.mw.md#getviewportsize)**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 获取游戏视口的大小。|
| **[getViewportWidgetGeometry](Core.mw.md#getviewportwidgetgeometry)**(): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />  |
| 获取包含添加到“视口”中的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[httpRequestTransmitData](Core.mw.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean`   |
| Http请求接口|
| **[isDragDropping](Core.mw.md#isdragdropping)**(): `boolean` <Badge type="tip" text="client" />  |
| 判断当前是否有一个DragDrop事件|
| **[isUnderLocation](Core.mw.md#isunderlocation)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absolutePosition`: [`Vector2`](../classes/mw.Vector2.md)): `boolean` <Badge type="tip" text="client" />  |
| 判定给定坐标是否在geometry下|
| **[localToAbsolute](Core.mw.md#localtoabsolute)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localPosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 将局部坐标转换为绝对坐标,绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根所在的空间。|
| **[localToViewport](Core.mw.md#localtoviewport)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localPosition`: [`Vector2`](../classes/mw.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/mw.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/mw.Vector2.md)): `void` <Badge type="tip" text="client" />  |
| 将几何体的局部坐标转换为局部视口坐标。|
| **[markActorRenderStateDirty](Core.mw.md#markactorrenderstatedirty)**(`target`: `Base`): `void` <Badge type="tip" text="client" />  |
| 标记Actor所有组件的渲染状态为脏|
| **[mobileReleaseGame](Core.mw.md#mobilereleasegame)**(`InGameName`: `string`, `InExtraData?`: `string`): `Promise`<`number`\>   |
| 移动端编辑器发布游戏|
| **[projectWorldPositionToWidgetPosition](Core.mw.md#projectworldpositiontowidgetposition)**(`worldLocation`: [`Vector`](../classes/mw.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md)   |
| 获取角色在世界中的位置，投射到屏幕上|
| **[pushShippingLog](Core.mw.md#pushshippinglog)**(`logLevel`: [`LogLevel`](../enums/mw.LogLevel.md), `log`: `string`): `void`  |
| 移动编辑器推送shipping下的日志|
| **[recordingCharacterGif](Core.mw.md#recordingcharactergif)**(`Character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `picNum`: `number`, `recordingTime`: `number`): `void` <Badge type="tip" text="client" />  |
| 连续截图，生成GIF素材发送给服务器|
| **[redo](Core.mw.md#redo)**(): `void` <Badge type="tip" text="client" />  |
| 执行恢复操作|
| **[releaseAssetIconTextureFromCache](Core.mw.md#releaseasseticontexturefromcache)**(`asset`: `string`): `void` <Badge type="tip" text="client" />  |
| 尝试标记资源的ICON图为待释放的等待释放|
| **[saveProject](Core.mw.md#saveproject)**(): `void`   |
| 保存当前游戏项目|
| **[screenShot](Core.mw.md#screenshot)**(`Resolution`: [`Vector2`](../classes/mw.Vector2.md), `StartPoint`: [`Vector2`](../classes/mw.Vector2.md), `Width`: `number`, `Height`: `number`, `callback`: (`dataString`: `string`) => `void`, `bShowUI?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 屏幕指定区域截图|
| **[screenShotExist](Core.mw.md#screenshotexist)**(`absPath`: `string`): `boolean` <Badge type="tip" text="client" />  |
| 验证绝对路径下截图是否存在|
| **[screenToViewport](Core.mw.md#screentoviewport)**(`screenPosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 将屏幕位置(以像素为单位)转换为视口控件的本地空间。|
| **[screenToWidgetAbsolute](Core.mw.md#screentowidgetabsolute)**(`screenPosition`: [`Vector2`](../classes/mw.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 将屏幕位置(像素)转换为绝对桌面程序坐标。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[screenToWidgetLocal](Core.mw.md#screentowidgetlocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `screenPosition`: [`Vector2`](../classes/mw.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 将屏幕位置(以像素为单位)转换为具有给定几何形状的小部件的本地空间。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[sendShareId](Core.mw.md#sendshareid)**(`absPath`: `string`, `shareId`: `string`, `bShowUuid`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 将角色数据ID连同角色截图一同发给MGS|
| **[setButtonDisableImageByURL](Core.mw.md#setbuttondisableimagebyurl)**(`button`: [`Button`](../classes/mw.Button.md), `url`: `string`): `void` <Badge type="tip" text="other" />  |
| 通过URL设置按钮控件不可以图片|
| **[setButtonNormalImageByURL](Core.mw.md#setbuttonnormalimagebyurl)**(`button`: [`Button`](../classes/mw.Button.md), `url`: `string`): `void` <Badge type="tip" text="other" />  |
| 通过URL设置按钮控件普通图片|
| **[setButtonPressedImageByURL](Core.mw.md#setbuttonpressedimagebyurl)**(`button`: [`Button`](../classes/mw.Button.md), `url`: `string`): `void` <Badge type="tip" text="other" />  |
| 通过URL设置按钮控件按下图片|
| **[setFocusToGameViewport](Core.mw.md#setfocustogameviewport)**(): `void` <Badge type="tip" text="client" />  |
| 设置关注游戏窗口|
| **[setImageImageByURL](Core.mw.md#setimageimagebyurl)**(`image`: [`Image`](../classes/mw.Image.md), `url`: `string`): `void` <Badge type="tip" text="other" />  |
| 通过URL设置图片控件图片|
| **[setInputModeGameAndUI](Core.mw.md#setinputmodegameandui)**(`InWidgetToFocus?`: [`Widget`](../classes/mw.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/mw.MouseLockMode.md), `hideCursorDuringCapture?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 设置一个输入模式，只允许UI响应用户输入，如果UI不处理它，玩家输入/玩家控制器就有机会|
| **[setInputModeGameOnly](Core.mw.md#setinputmodegameonly)**(): `void` <Badge type="tip" text="client" />  |
| 设置一个输入模式，只允许玩家输入/玩家控制器响应用户输入|
| **[setInputModeUIOnly](Core.mw.md#setinputmodeuionly)**(`InWidgetToFocus?`: [`Widget`](../classes/mw.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/mw.MouseLockMode.md)): `void` <Badge type="tip" text="client" />  |
| 设置只允许UI响应用户输入的输入模式。|
| **[setMultiSwipeTime](Core.mw.md#setmultiswipetime)**(`time`: `number`): `void` <Badge type="tip" text="client" />  |
| 双指移动的时间- 必须大于这个时间才执行双指移动事件|
| **[setPinchAngleTolerance](Core.mw.md#setpinchangletolerance)**(`time`: `number`): `void` <Badge type="tip" text="client" />  |
| 挤压手势的偏差角度|
| **[setSingleSwipeTime](Core.mw.md#setsingleswipetime)**(`time`: `number`): `void` <Badge type="tip" text="client" />  |
| 单指移动的时间- 必须大于这个时间才会开始执行单指移动|
| **[setSwipeTolerance](Core.mw.md#setswipetolerance)**(`time`: `number`): `void` <Badge type="tip" text="client" />  |
| 双指移动的偏差量- 值越大误差则可以越大|
| **[setTapTime](Core.mw.md#settaptime)**(`time`: `number`): `void` <Badge type="tip" text="client" />  |
| tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move|
| **[startRecord](Core.mw.md#startrecord)**(`screenX`: `number`, `screenY`: `number`, `screenW`: `number`, `screenH`: `number`): `string` <Badge type="tip" text="client" />  |
| 录屏|
| **[stopRecord](Core.mw.md#stoprecord)**(): `void` <Badge type="tip" text="client" />  |
| 停止录屏|
| **[transformVectorAbsoluteToLocal](Core.mw.md#transformvectorabsolutetolocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absoluteVector`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 转化绝对空间下矢量到局部空间下|
| **[transformVectorLocalToAbsolute](Core.mw.md#transformvectorlocaltoabsolute)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localVector`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />  |
| 转化局部空间下矢量到绝对空间下|
| **[undo](Core.mw.md#undo)**(): `void` <Badge type="tip" text="client" />  |
| 执行撤销操作|
| **[uploadPrefab](Core.mw.md#uploadprefab)**(`assetId`: `string`, `name`: `string`, `imagePath`: `string`): `Promise`<[`UploadPrefabResult`](Core.mw.md#uploadprefabresult)\> <Badge type="tip" text="other" />  |
| 移动编辑器上传预制体|
| **[uploadScreenShot](Core.mw.md#uploadscreenshot)**(`filePath`: `string`, `fileType`: `number`, `callbackURL?`: (`responseURL`: `string`) => `void`): `void` <Badge type="tip" text="client" />  |
| 上传角色头像或全身照到服务器后发送到MGS|
| **[uploadScreenShots](Core.mw.md#uploadscreenshots)**(`gender`: `number`, `portraitPath`: `string`, `fullPicPath`: `string`, `callbackURL?`: (`porURL`: `string`, `bodyURL`: `string`) => `void`): `void` <Badge type="tip" text="client" />  |
| 上传角色头像及全身照到服务器后发送到MGS|
| **[uploadShippingLog](Core.mw.md#uploadshippinglog)**(`uploadCurrentLog`: `boolean`): `Promise`<`string`\>  |
| 移动编辑器推送shipping下的日志|
| **[urlDecode](Core.mw.md#urldecode)**(`str`: `string`): `string`   |
| url解码|
| **[urlEncode](Core.mw.md#urlencode)**(`str`: `string`): `string`   |
| url转码|
| **[vibrate](Core.mw.md#vibrate)**(`enable`: `boolean`): `void` <Badge type="tip" text="client" />  |
| 振动开关|

## Type Aliases

### BoolResponse <Score text="BoolResponse" /> 

Ƭ **BoolResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

返回bool的回调

##### Parameters

| `success` | `boolean` |
| :------ | :------ |

##### Returns

`void`

___

### BroadcastMessageResult <Score text="BroadcastMessageResult" /> 

Ƭ **BroadcastMessageResult**: `Object`

发送消息的结果

#### Type declaration

| `code` [`MessageState`](../enums/mw.MessageState.md) | 发送消息的状态 |
| :------ | :------ |
| `message` `string` | 详细信息 |

___

### ChatEvent <Score text="ChatEvent" /> 

Ƭ **ChatEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

##### Parameters

| `jsonData` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### DelegateFuncType <Score text="DelegateFuncType" /> 

Ƭ **DelegateFuncType**: (...`arg`: `unknown`[]) => `unknown` <Badge type="tip" text="other" />

#### Type declaration

• (`...arg`): `unknown`

代理回调函数签名

___

### DownloadDataResponse <Score text="DownloadDataResponse" /> 

Ƭ **DownloadDataResponse**: () => `void`

#### Type declaration

• (): `void`

下载角色形象的回调，无参数

##### Returns

`void`

___

### EmptyCallback <Score text="EmptyCallback" /> 

Ƭ **EmptyCallback**: () => `void`

#### Type declaration

• (): `void`

空的回调函数类型

##### Returns

`void`

___

### HttpResponse <Score text="HttpResponse" /> 

Ƭ **HttpResponse**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void`

#### Type declaration

• (`result`, `content`, `responseCode`): `void`

Http请求的回调消息格式

::: warning Precautions

无需主动销毁，生命周期由UObject管理

:::

##### Parameters

| `result` `boolean` |  请求否成功 |
| :------ | :------ |
| `content` `string` |  消息内容 |
| `responseCode` `number` |  状态码 |

##### Returns

`void`

___

### LoadAppearanceDataAllCompletedCallback <Score text="LoadAppearanceDataAllCompletedCallback" /> 

Ƭ **LoadAppearanceDataAllCompletedCallback**: () => `void`

#### Type declaration

• (): `void`

角色编辑器数据加载完成后的回调

##### Returns

`void`

___

### LocalUGCGameInfo <Score text="LocalUGCGameInfo" /> 

Ƭ **LocalUGCGameInfo**: `Object`

本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。

#### Type declaration

| `gameId` `string` | UGC消费态游戏的MW侧gameId，"U_xxx" 格式 |
| :------ | :------ |
| `parentId` `string` | 父模板游戏的内容库gameId |
| `path` `string` | 本地工程路径，不需要做拼接，直接传给其他接口即可 |

___

### MGSEvent <Score text="MGSEvent" /> 

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

##### Parameters

| `jsonData` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### MGSResponse <Score text="MGSResponse" /> 

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `jsonData`): `void`

收到233回复

##### Parameters

| `isSuccess` | `boolean` |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`

___

### MyPrefabsResult <Score text="MyPrefabsResult" /> 

Ƭ **MyPrefabsResult**: `Object`

移动编辑器获取自己上传的所有预制体资源信息

**`Param`**

usage: 尾部Id

**`Param`**

usage: 移动编辑器上传预制体资源信息

#### Type declaration

| `lastId` | `number` |
| :------ | :------ |
| `prefabInfos` | [`MyPrefabsResultInfo`](Core.mw.md#myprefabsresultinfo)[] |

___

### MyPrefabsResultInfo <Score text="MyPrefabsResultInfo" /> 

Ƭ **MyPrefabsResultInfo**: `Object`

移动编辑器上传预制体资源信息

**`Param`**

usage: id

**`Param`**

usage: 资源id入库前为空

**`Param`**

usage: 入库前的唯一标识

**`Param`**

usage: 资源状态

#### Type declaration

| `guid` | `string` |
| :------ | :------ |
| `id` | `number` |
| `prefabStatus` | [`PrefabStatus`](../enums/mw.PrefabStatus.md) |
| `uuid` | `string` |

___

### OnArkBalanceUpdated <Score text="OnArkBalanceUpdated" /> 

Ƭ **OnArkBalanceUpdated**: (`amount`: `number`) => `void`

#### Type declaration

• (`amount`): `void`

客户端接收余额更新的消息格式

##### Parameters

| `amount` `number` |  新的余额 |
| :------ | :------ |

##### Returns

`void`

___

### OnDescriptionChange <Score text="OnDescriptionChange" /> 

Ƭ **OnDescriptionChange**: (`operationCode`: `number`, `index`: `number`, `value`: `unknown`) => `void`

#### Type declaration

• (`operationCode`, `index`, `value`): `void`

外观加载细节变化委托

##### Parameters

| `operationCode` | `number` |
| :------ | :------ |
| `index` | `number` |
| `value` | `unknown` |

##### Returns

`void`

___

### OnDescriptionComplete <Score text="OnDescriptionComplete" /> 

Ƭ **OnDescriptionComplete**: (`character`: [`Character`](../classes/mw.Character.md)) => `void`

#### Type declaration

• (`character`): `void`

外观加载完成委托

::: warning Precautions

当角色外观加载完成时执行绑定函数

:::

##### Parameters

| `character` | [`Character`](../classes/mw.Character.md) |
| :------ | :------ |

##### Returns

`void`

___

### OnKeyConsume <Score text="OnKeyConsume" /> 

Ƭ **OnKeyConsume**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`player`, `orderId`, `boxId`, `amount`, `confirmOrder`): `void`

大会员钥匙扣除服务端接收发货通知的消息格式

##### Parameters

| `player` [`Player`](../classes/mw.Player.md) |  下单的玩家Player |
| :------ | :------ |
| `orderId` `string` |  订单Id |
| `boxId` `string` |  宝箱Id |
| `amount` `number` |  数量 |
| `confirmOrder` (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

___

### OnMovementModeChange <Score text="OnMovementModeChange" /> 

Ƭ **OnMovementModeChange**: (`mode`: [`MovementMode`](../enums/mw.MovementMode.md)) => `void`

#### Type declaration

• (`mode`): `void`

移动状态切换委托

##### Parameters

| `mode` | [`MovementMode`](../enums/mw.MovementMode.md) |
| :------ | :------ |

##### Returns

`void`

___

### OnOrderDelivered <Score text="OnOrderDelivered" /> 

Ƭ **OnOrderDelivered**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`playerId`, `orderId`, `commodityId`, `amount`, `confirmOrder`): `void`

服务端接收发货通知的消息格式

##### Parameters

| `playerId` `number` |  下单的玩家playerId |
| :------ | :------ |
| `orderId` `string` |  订单Id |
| `commodityId` `string` |  商品Id |
| `amount` `number` |  数量 |
| `confirmOrder` (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

___

### OnRecvChatMessage <Score text="OnRecvChatMessage" /> 

Ƭ **OnRecvChatMessage**: (`nCount`: `number`, `ChatContent`: `string`) => `void`

#### Type declaration

• (`nCount`, `ChatContent`): `void`

接收聊天信息回调方法类型

##### Parameters

| `nCount` | `number` |
| :------ | :------ |
| `ChatContent` | `string` |

##### Returns

`void`

___

### OnViewLayoutSwitched <Score text="OnViewLayoutSwitched" /> 

Ƭ **OnViewLayoutSwitched**: (`newState`: `number`) => `void`

#### Type declaration

• (`newState`): `void`

233中窗口显示模式切换的消息格式

##### Parameters

| `newState` `number` |  新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |
| :------ | :------ |

##### Returns

`void`

___

### OnViewRefreshed <Score text="OnViewRefreshed" /> 

Ƭ **OnViewRefreshed**: () => `void`

#### Type declaration

• (): `void`

233中窗口刷新的消息格式

##### Returns

`void`

___

### PublishedUGCGameInfo <Score text="PublishedUGCGameInfo" /> 

Ƭ **PublishedUGCGameInfo**: `Object`

发布成功的UGC消费态游戏信息

#### Type declaration

| `end` `boolean` | 接口data为空/网络请求失败时，end会返回true |
| :------ | :------ |
| `games` [`{ `banner`: `string` ; `id`: `string` ; `likeIt`: `boolean` ; `loveQuantity`: `number` ; `packageName`: `string` ; `ugcGameName`: `string`  }`] | 接口data为空/网络请求失败时，games会返回空列表 |

___

### RedeemResponse <Score text="RedeemResponse" /> 

Ƭ **RedeemResponse**: `Object`

status : 兑换状态。

01 ： 兑换成功

02 ： 兑换失败（兑换码不存在）

03 ： 兑换失败（兑换码不在使用期限内）

04 ： 兑换失败（兑换码已使用）

05 ： 兑换失败（兑换超时）

06 ： 兑换失败（礼包库存不足）

07 ： 兑换失败（超出兑换次数）

message : 兑换信息

当兑换状态为成功时：兑换信息为礼包内容道具详情。

当兑换状态为失败时：兑换信息为失败详情，例如：兑换码不存在。

#### Type declaration

| `message` | `string` |
| :------ | :------ |
| `status` | `number` |

___

### ReleaseGameData <Score text="ReleaseGameData" /> 

Ƭ **ReleaseGameData**: `Object`

已发布的游戏数据，用于继承服务器数据。

#### Type declaration

| `bDownloaded` `boolean` | 是否已下载到本地 |
| :------ | :------ |
| `gameCover` `string` | (bDownloaded=true:本地文件路径bDownloaded=false:服务器URL) |
| `gameName` `string` | 游戏名称 |

___

### SetAppearanceDataCallback <Score text="SetAppearanceDataCallback" /> 

Ƭ **SetAppearanceDataCallback**: (`APIName`: `string`) => `void`

#### Type declaration

• (`APIName`): `void`

设置编辑数据完成的回调

##### Parameters

| `APIName` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### StringCallback <Score text="StringCallback" /> 

Ƭ **StringCallback**: (`str`: `string`) => `void`

#### Type declaration

• (`str`): `void`

返回String的回调

##### Parameters

| `str` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### StringResponse <Score text="StringResponse" /> 

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

返回string的回调

##### Parameters

| `dataString` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### TabGroupOnClickedProps <Score text="TabGroupOnClickedProps" /> 

Ƭ **TabGroupOnClickedProps**: `Object`

选项卡组-点击事件type

___

### TeamMatchFailureInfo <Score text="TeamMatchFailureInfo" /> 

Ƭ **TeamMatchFailureInfo**: `Object`

组队跳游戏请求失败回调

#### Type declaration

| `failedReason` `string` | 失败原因 |
| :------ | :------ |
| `playerIds` `number`[] | 组队玩家的playerId数组 |

___

### TeleportData <Score text="TeleportData" /> 

Ƭ **TeleportData**: `string`  `string`[]  `Record`<`string`, `any`\>  `Record`<`string`, `any`\>[]

传送时可携带的数据类型

___

### TransactionType <Score text="TransactionType" /> 

Ƭ **TransactionType**: (`isSuccess`: `boolean`, `content`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `content`): `void`

商城通信回调消息格式

##### Parameters

| `isSuccess` `boolean` |  通信结果 |
| :------ | :------ |
| `content` `string` |  消息内容 |

##### Returns

`void`

___

### TweenEasingFunction <Score text="TweenEasingFunction" /> 

Ƭ **TweenEasingFunction**: (`amount`: `number`) => `number`

#### Type declaration

• (`amount`): `number`

缓动函数的类型定义

##### Parameters

| `amount` | `number` |
| :------ | :------ |

##### Returns

`number`

___

### TweenInterpolationFunction <Score text="TweenInterpolationFunction" /> 

Ƭ **TweenInterpolationFunction**: (`v`: `number`[], `k`: `number`) => `number`

#### Type declaration

• (`v`, `k`): `number`

插值函数的类型定义

##### Parameters

| `v` | `number`[] |
| :------ | :------ |
| `k` | `number` |

##### Returns

`number`

___

### TweenUnknownProps <Score text="TweenUnknownProps" /> 

Ƭ **TweenUnknownProps**: `Record`<`string`, `any`\>

补间属性的定义，用户可以自由扩展

___

### UGCTemplateInfo <Score text="UGCTemplateInfo" /> 

Ƭ **UGCTemplateInfo**: `Object`

UGC模板信息

#### Type declaration

| `fileUrl` `{ `assetDataListUrl`: `string` ; `zipUrl`: `string`  }` | 下载链接 |
| :------ | :------ |
| `fileUrl.assetDataListUrl` `string` | 模板assetDataList文件下载链接 |
| `fileUrl.zipUrl` `string` | 模板工程下载链接 |
| `gameIdentity` `string` | MW侧gameId |
| `gid` `string` | 内容库gameId |
| `icon` `string` | 模板Icon下载链接 |
| `id` `number` | 分页用的id |
| `name` `string` | 模板名称 |
| `packageName` `string` | 模板包名 |
| `version` `string` | 模板版本号 |

___

### UploadDataResponse <Score text="UploadDataResponse" /> 

Ƭ **UploadDataResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

下载角色形象的回调消息格式

##### Parameters

| `success` `boolean` |  上传是否成功 |
| :------ | :------ |

##### Returns

`void`

___

### UploadPrefabResult <Score text="UploadPrefabResult" /> 

Ƭ **UploadPrefabResult**: `Object`

移动编辑器上传预制体返回结果

**`Param`**

usage: 移动编辑器上传预制体返回状态

**`Param`**

usage: 资源标识

#### Type declaration

| `assetId` | `string` |
| :------ | :------ |
| `uploadPrefabResultType` | [`UploadPrefabResultType`](../enums/mw.UploadPrefabResultType.md) |

___

### VehicleGearDataNew <Score text="VehicleGearDataNew" /> 

Ƭ **VehicleGearDataNew**: `Object`

四轮载具挡位属性

#### Type declaration

| `gearDownRatio` `number` | 下齿比值 |
| :------ | :------ |
| `gearLevel` `number` | 挡位级别 |
| `gearRatio` `number` | 齿比值 |
| `gearUpRatio` `number` | 上齿比值 |

___

### VehicleWheelDataNew <Score text="VehicleWheelDataNew" /> 

Ƭ **VehicleWheelDataNew**: `Object`

四轮载具车轮属性

#### Type declaration

| `wheelAngle` `number` | 车轮最大转向角度 |
| :------ | :------ |
| `wheelModel` `string` | 车轮绑定对象ID |
| `wheelRadius` `number` | 车轮半径 |

___

### VoidResponse <Score text="VoidResponse" /> 

Ƭ **VoidResponse**: () => `void`

#### Type declaration

• (): `void`

返回无参数的回调

##### Returns

`void`

___

### downloadCharacterDataStringCallback <Score text="downloadCharacterDataStringCallback" /> 

Ƭ **downloadCharacterDataStringCallback**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

下载平台数据回调

##### Parameters

| `dataString` | `string` |
| :------ | :------ |

##### Returns

`void`

___

### keyUsageInfo <Score text="keyUsageInfo" /> 

Ƭ **keyUsageInfo**: `Object`

大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳

#### Type declaration

| `boxId` | `string` |
| :------ | :------ |
| `consumeTime` | `number` |
| `number` | `number` |
| `orderId` | `string` |

___

### maskWordCheckResult <Score text="maskWordCheckResult" /> 

Ƭ **maskWordCheckResult**: `Object`

屏蔽字检测的结果

#### Type declaration

| `hits` `string`[] | 命中的文本，如果通过检测则为空 |
| :------ | :------ |
| `result` `boolean` | 是否通过，true - 通过、false - 不通过 |

___

### onAppearanceDataChanged <Score text="onAppearanceDataChanged" /> 

Ƭ **onAppearanceDataChanged**: (`GUID`: `string`) => `void`

#### Type declaration

• (`GUID`): `void`

角色身上GUID切换成功回调

##### Parameters

| `GUID` | `string` |
| :------ | :------ |

##### Returns

`void`

## Variables

### Client <Score text="Client" /> 

• `Const` **Client**: `FunctionOption` 

客户端

___

### Multicast <Score text="Multicast" /> 

• `Const` **Multicast**: `FunctionOption` 

多播

___

### Server <Score text="Server" /> 

• `Const` **Server**: `FunctionOption` 

服务端

___

### UILayerBottom <Score text="UILayerBottom" /> 

• `Const` **UILayerBottom**: ``1``

底层 zOrder开始于100000

___

### UILayerDialog <Score text="UILayerDialog" /> 

• `Const` **UILayerDialog**: ``5``

对话 zOrder开始于500000

___

### UILayerError <Score text="UILayerError" /> 

• `Const` **UILayerError**: ``7``

错误 这个层级不可以使用，需要增加层级可以使用addUILayerMap zOrder开始于700000

___

### UILayerMiddle <Score text="UILayerMiddle" /> 

• `Const` **UILayerMiddle**: ``2``

中层 zOrder开始于200000

___

### UILayerOwn <Score text="UILayerOwn" /> 

• `Const` **UILayerOwn**: ``3``

独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000

___

### UILayerScene <Score text="UILayerScene" /> 

• `Const` **UILayerScene**: ``0``

场景 zOrder开始于0

___

### UILayerSystem <Score text="UILayerSystem" /> 

• `Const` **UILayerSystem**: ``6``

系统 zOrder开始于600000

___

### UILayerTop <Score text="UILayerTop" /> 

• `Const` **UILayerTop**: ``4``

顶层 zOrder开始于400000

## Functions

### Property <Score text="Property" /> 

• **Property**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void` 

属性支持同步

#### Parameters

| `option?` `IPropertyOptions` | 配置 default:配置 |
| :------ | :------ |

#### Returns

| `fn` | `void` |
| :------ | :------ |

___

### RemoteFunction <Score text="RemoteFunction" /> 

• **RemoteFunction**(`...options`): (`target`: `unknown`, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void` 

函数支持Rpc调用

#### Parameters

| `...options` `FunctionOption`[] | Rpc调用方式 |
| :------ | :------ |

#### Returns

| `fn` | `void` |
| :------ | :------ |

___

### Serializable <Score text="Serializable" /> 

• **Serializable**<`T`\>(`type`): `T` 

类型支持属性同步

#### Type parameters

| `T` | extends `ConstructorType` |
| :------ | :------ |

#### Parameters

| `type` `T` | 自定义类 |
| :------ | :------ |

#### Returns

| `T` | 自定义类 |
| :------ | :------ |

___

### absoluteToLocal <Score text="absoluteToLocal" /> 

• **absoluteToLocal**(`geometry`, `absolutePosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化绝对坐标到相对坐标

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `absolutePosition` [`Vector2`](../classes/mw.Vector2.md) | 绝对坐标 |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 相对坐标 |
| :------ | :------ |

___

### absoluteToViewport <Score text="absoluteToViewport" /> 

• **absoluteToViewport**(`absoluteDesktopPosition`, `outPixelPosition`, `outViewportPosition`): `void` <Badge type="tip" text="client" />

将桌面空间中几何图形的绝对坐标转换为本地视口坐标

#### Parameters

| `absoluteDesktopPosition` [`Vector2`](../classes/mw.Vector2.md) | 绝对桌面坐标 |
| :------ | :------ |
| `outPixelPosition` [`Vector2`](../classes/mw.Vector2.md) | 可用于线的轨迹和其他用途，你需要在视口分辨率单位的空间坐标 |
| `outViewportPosition` [`Vector2`](../classes/mw.Vector2.md) | 如果你想添加另一个小部件到视口空间相同的位置 |


___

### assetIDChangeIconUrlRequest <Score text="assetIDChangeIconUrlRequest" /> 

• **assetIDChangeIconUrlRequest**(`assets`): `Promise`<`void`\> <Badge type="tip" text="client" />

异步请求资源的ICON信息

#### Parameters

| `assets` `string`[] | 指定资源的id数组 |
| :------ | :------ |

#### Returns

| `Promise`<`void`\> | 异步回调 |
| :------ | :------ |

___

### asyncCaptureAvatar <Score text="asyncCaptureAvatar" /> 

• **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\> <Badge type="tip" text="client" />

异步对指定虚拟角色进行截取，截图保存在本地固定路径下

#### Parameters

| `character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  视场; |
| `fileName` `string` |  文件名 |

#### Returns

| `Promise`<`string`\> | 生成的截图的本地绝对路径 |
| :------ | :------ |

___

### asyncCaptureAvatarMSAA <Score text="asyncCaptureAvatarMSAA" /> 

• **asyncCaptureAvatarMSAA**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `SampleCount`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\> <Badge type="tip" text="client" />

异步对指定虚拟角色进行截取(开启MSAA)，截图保存在本地固定路径下

#### Parameters

| `character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `SampleCount` `number` |  MSAA采样, 推荐设置为4(移动)或8(桌面) |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  视场; |
| `fileName` `string` |  文件名 |

#### Returns

| `Promise`<`string`\> | 生成的截图的本地绝对路径 |
| :------ | :------ |

___

### asyncGetQualityGameList <Score text="asyncGetQualityGameList" /> 

• **asyncGetQualityGameList**(`resourceId`, `pageIndex`): `Promise`<`string`\> <Badge type="tip" text="client" />

获取优质作品列表

#### Parameters

| `resourceId` `number` | T台Id |
| :------ | :------ |
| `pageIndex` `number` | 分页索引 |

#### Returns

| `Promise`<`string`\> | 请求结果(Json字符串) |
| :------ | :------ |

___

### asyncGetReleaseGameData <Score text="asyncGetReleaseGameData" /> 

• **asyncGetReleaseGameData**(`gameId`, `version?`, `bDownload?`): `Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\> <Badge type="tip" text="client" />

通过指定的消费态游戏ID和版本号获取已发布的游戏数据

#### Parameters

| `gameId` `string` | 消费态游戏Id |
| :------ | :------ |
| `version?` `string` | 消费态游戏版本号 default:"" |
| `bDownload?` `boolean` | 是否下载到本地 default:true |

#### Returns

| `Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\> | 请求结果(结构体对象：`{gameName:游戏名称, gameCover:(bDownloaded=true:本地文件路径|bDownloaded=false:服务器URL), bDownloaded:是否已下载到本地}`) |
| :------ | :------ |

___

### asyncGetResourceList <Score text="asyncGetResourceList" /> 

• **asyncGetResourceList**(`classification`, `lastID`, `pageSize`): `Promise`<`string`\> <Badge type="tip" text="client" />

获取资源列表

#### Parameters

| `classification` `number` | 分类id |
| :------ | :------ |
| `lastID` `number` | 查询偏移量 |
| `pageSize` `number` | 每页查询大小 |

#### Returns

| `Promise`<`string`\> | 请求结果(Json字符串) |
| :------ | :------ |

___

### asyncSaveProject <Score text="asyncSaveProject" /> 

• **asyncSaveProject**(): `Promise`<`boolean`\> 

保存当前游戏项目

::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

#### Returns

| `Promise`<`boolean`\> | 保存成功或失败 |
| :------ | :------ |

___

### beginActorPropertiesChange <Score text="beginActorPropertiesChange" /> 

• **beginActorPropertiesChange**(`target`): `void` <Badge type="tip" text="client" />

开始记录撤销恢复的actor属性

#### Parameters

| `target` `Base` | 记录的对象 |
| :------ | :------ |


___

### beginActorTransformChange <Score text="beginActorTransformChange" /> 

• **beginActorTransformChange**(`target`): `void` <Badge type="tip" text="client" />

开始记录actor的transform属性

#### Parameters

| `target` `Base` | 记录的对象 |
| :------ | :------ |


___

### calculateActorEqualScale <Score text="calculateActorEqualScale" /> 

• **calculateActorEqualScale**(`currentScale`, `deltaScale`): [`Vector`](../classes/mw.Vector.md) <Badge type="tip" text="client" />

计算actor的等比缩放

#### Parameters

| `currentScale` [`Vector`](../classes/mw.Vector.md) | 当前缩放值 |
| :------ | :------ |
| `deltaScale` [`Vector`](../classes/mw.Vector.md) | 缩放值增量 |

#### Returns

| [`Vector`](../classes/mw.Vector.md) | 计算后的缩放值 |
| :------ | :------ |

___

### cancelDragDrop <Score text="cancelDragDrop" /> 

• **cancelDragDrop**(): `void` <Badge type="tip" text="client" />

中断所有的DragDrop


___

### captureAvatar <Score text="captureAvatar" /> 

• **captureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

同步对指定虚拟角色进行截取，截图保存在本地固定路径下

#### Parameters

| `character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  视场; |
| `fileName` `string` |  文件名 |
| `callback` (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |


___

### captureAvatarMSAA <Score text="captureAvatarMSAA" /> 

• **captureAvatarMSAA**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `SampleCount`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

模拟MSAA对指定虚拟角色截取图像，截图保存在本地固定路径下

::: warning Precautions

后处理(曝光，色调映射等)对抗锯齿截图效果影响较大

:::

#### Parameters

| `character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `SampleCount` `number` |  MSAA采样, 推荐设置为4(移动)或8(桌面) |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  视场; |
| `fileName` `string` |  文件名 |
| `callback` (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |


___

### clearUselessLocalMaterials <Score text="clearUselessLocalMaterials" /> 

• **clearUselessLocalMaterials**(`IgnoreMatGuids?`): `void` 

清除项目中没有引用的本地材质资源

::: warning Precautions

只在MobileEditor模式下调用生效

:::

#### Parameters

| `IgnoreMatGuids?` `string`[] | 清除时即使未使用也不清除的材质资源Guid default:[] |
| :------ | :------ |


___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• **convertScreenLocationToWorldSpace**(`ScreenX`, `ScreenY`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向

#### Parameters

| `ScreenX` `number` |  屏幕X轴坐标值 default: |
| :------ | :------ |
| `ScreenY` `number` |  屏幕Y轴坐标值 |

#### Returns

| [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) | 屏幕坐标转换结果 |
| :------ | :------ |

___

### createUI <Score text="createUI" /> 

• **createUI**<`T`\>(`UIPrefabName`, `panelClass`): `T` <Badge type="tip" text="client" />

创建UIPrefab

#### Type parameters

| `T` | extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `UIPrefabName` `string` | 指定UI自定义控件的相对于工程的路径或则相对于UI目录的路径,为空的话等于createUIOnlyClass |
| :------ | :------ |
| `panelClass` () => `T` | 继承至UI身上脚本的派生类 |

#### Returns

| `T` | 对应的UI |
| :------ | :------ |

___

### createUIByName <Score text="createUIByName" /> 

• **createUIByName**(`UIPrefabName`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />

创建UIPrefab

#### Parameters

| `UIPrefabName` `string` | 指定UI自定义控件的相对于工程的路径或则相对于UI目录的路径 |
| :------ | :------ |

#### Returns

| [`UserWidget`](../classes/mw.UserWidget.md) | 对应的UI |
| :------ | :------ |

___

### createUIByPath <Score text="createUIByPath" /> 

• **createUIByPath**(`UIPath`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />

创建UIPrefab

#### Parameters

| `UIPath` `string` | 创建UI 的完整路径 |
| :------ | :------ |

#### Returns

| [`UserWidget`](../classes/mw.UserWidget.md) | 对应的UI |
| :------ | :------ |

___

### createUIOnlyClass <Score text="createUIOnlyClass" /> 

• **createUIOnlyClass**<`T`\>(`panelClass`): `T` <Badge type="tip" text="client" />

创建空的UI

#### Type parameters

| `T` | extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `panelClass` () => `T` | 指定UI控件身上的行为脚本 |
| :------ | :------ |

#### Returns

| `T` | 对应的UI |
| :------ | :------ |

___

### endActorPropertiesChange <Score text="endActorPropertiesChange" /> 

• **endActorPropertiesChange**(`target`): `void` <Badge type="tip" text="client" />

结束记录actor属性的撤销恢复

#### Parameters

| `target` `Base` | 记录的对象 |
| :------ | :------ |


___

### endActorTransformChange <Score text="endActorTransformChange" /> 

• **endActorTransformChange**(`target`, `bIsGizmoActor?`): `void` <Badge type="tip" text="client" />

结束记录actor的transform

#### Parameters

| `target` `Base` | 记录的对象 |
| :------ | :------ |
| `bIsGizmoActor?` `boolean` | 是否是gizmo actor default:false |


___

### endDragDrop <Score text="endDragDrop" /> 

• **endDragDrop**(`InReply`): `void` <Badge type="tip" text="client" />

中断一个拖拽事件, 传入一个操作的事件

#### Parameters

| `InReply` [`EventReply`](../classes/mw.EventReply.md) | 事件 |
| :------ | :------ |


___

### executiveCommand <Score text="executiveCommand" /> 

• **executiveCommand**(`cmd`): `void` <Badge type="tip" text="client" />

执行命令

#### Parameters

| `cmd` `string` | 命令字符串 |
| :------ | :------ |


___

### fetch <Score text="fetch" /> 

• **fetch**(`url`, `init?`): `Promise`<[`Response`](../interfaces/mw.Response.md)\> 

HTTP请求

#### Parameters

| `url` `string` | url |
| :------ | :------ |
| `init?` [`RequestInit`](../interfaces/mw.RequestInit.md) | 请求信息 default:请求信息 |

#### Returns

| `Promise`<[`Response`](../interfaces/mw.Response.md)\> | 响应信息 |
| :------ | :------ |

___

### findUIScript <Score text="findUIScript" /> 

• **findUIScript**(`UI`): [`UIScript`](../classes/mw.UIScript.md) <Badge type="tip" text="client" />

获取UI脚本

#### Parameters

| `UI` [`Widget`](../classes/mw.Widget.md) | UI控件 |
| :------ | :------ |

#### Returns

| [`UIScript`](../classes/mw.UIScript.md) | UI绑定的脚本 |
| :------ | :------ |

___

### generalHttpRequest <Score text="generalHttpRequest" /> 

• **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean` 

通用Http请求

<span style="font-size: 14px;">
使用示例:发送Http请求
</span>

```ts
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| `response` [`HttpResponse`](Core.mw.md#httpresponse) | OnHttpResponse |
| :------ | :------ |
| `requestUrl` [`HttpRequestURL`](../enums/mw.HttpRequestURL.md) | EHttpRequestURL |
| `param` `string` | string |
| `jsonContent` `any` | any |
| `requestType` [`HttpRequestType`](../enums/mw.HttpRequestType.md) | 0是Get 1是Post |

#### Returns

| `boolean` | bool |
| :------ | :------ |

___

### getAbsoluteSize <Score text="getAbsoluteSize" /> 

• **getAbsoluteSize**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回绝对空间中几何图形的大小

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回Size |
| :------ | :------ |

___

### getAssetIconDataByAssetID <Score text="getAssetIconDataByAssetID" /> 

• **getAssetIconDataByAssetID**(`asset`): [`AssetIconData`](../classes/mw.AssetIconData.md) <Badge type="tip" text="client" />

获取资源的ICON信息

#### Parameters

| `asset` `string` | 指定资源的id |
| :------ | :------ |

#### Returns

| [`AssetIconData`](../classes/mw.AssetIconData.md) | 资源的ICON信息 |
| :------ | :------ |

___

### getCurrentMousePosition <Score text="getCurrentMousePosition" /> 

• **getCurrentMousePosition**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取当前鼠标所在的绝对位置

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 绝对位置 |
| :------ | :------ |

___

### getDragDroppingContent <Score text="getDragDroppingContent" /> 

• **getDragDroppingContent**(): [`DragDropOperation`](../classes/mw.DragDropOperation.md) <Badge type="tip" text="client" />

获取当前的DragDrop事件

#### Returns

| [`DragDropOperation`](../classes/mw.DragDropOperation.md) | 返回当前的DragDrop事件 |
| :------ | :------ |

___

### getGameTransmissionData <Score text="getGameTransmissionData" /> 

• **getGameTransmissionData**(): `string` <Badge type="tip" text="client" />

蓝军自定义启动参数，每个游戏可以是不一样的，推荐使用一个JSON字符串

#### Returns

| `string` | 自定义启动参数的字符串形式 |
| :------ | :------ |

___

### getGizmo <Score text="getGizmo" /> 

• **getGizmo**(): `mw.Gizmo` <Badge type="tip" text="client" />

获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空

#### Returns

| `mw.Gizmo` | 返回编辑态的坐标轴 |
| :------ | :------ |

___

### getHeadSculpture <Score text="getHeadSculpture" /> 

• **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

对指定虚拟角色进行截取后上传到服务器

#### Parameters

| `character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  视场; |
| `fileName` `string` |  文件名 |
| `callback` (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |


___

### getLastMousePosition <Score text="getLastMousePosition" /> 

• **getLastMousePosition**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取上一次鼠标所在的绝对位置

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 绝对位置 |
| :------ | :------ |

___

### getLocalMaterialsCount <Score text="getLocalMaterialsCount" /> 

• **getLocalMaterialsCount**(): `number` 

获取创建的本地材质数量

::: warning Precautions

只在MobileEditor模式下调用生效

:::

#### Returns

| `number` | 本地材质数量 |
| :------ | :------ |

___

### getLocalSize <Score text="getLocalSize" /> 

• **getLocalSize**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回局部空间中几何图形的大小

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回Size |
| :------ | :------ |

___

### getLocalTopLeft <Score text="getLocalTopLeft" /> 

• **getLocalTopLeft**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回局部空间中几何图形的局部顶部/左侧

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回LeftTop |
| :------ | :------ |

___

### getMousePositionOnPlatform <Score text="getMousePositionOnPlatform" /> 

• **getMousePositionOnPlatform**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取平台的鼠标光标位置。这是鼠标的绝对桌面位置。

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回平台的鼠标光标位置。这是鼠标的绝对桌面位置。 |
| :------ | :------ |

___

### getMousePositionOnViewport <Score text="getMousePositionOnViewport" /> 

• **getMousePositionOnViewport**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取平台的鼠标光标在视口控件的本地空间中的位置。

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回平台的鼠标光标在视口控件的本地空间中的位置。 |
| :------ | :------ |

___

### getMyPrefabs <Score text="getMyPrefabs" /> 

• **getMyPrefabs**(`lastId`, `size`): `Promise`<[`MyPrefabsResult`](Core.mw.md#myprefabsresult)\> <Badge type="tip" text="other" />

移动编辑器获取自己上传的所有预制体资源Id和状态

::: warning Precautions

只在MobileEditor模式下调用生效；异步请求；滚动分页接口请求

:::

<span style="font-size: 14px;">
使用示例:调用方法 新建一个脚本 NewScript
</span>

```ts
@Component
export default class NewScript extends Script {
  //当脚本被实例后，会在第一帧更新前调用此函数
  protected onStart(): void {
    //获取当前用户上传的所有的预制体
    mw.getMyPrefabs(0,20).then(item =>{
      for (let Index: number = 0;
Index < item.PrefabInfos.length;
++Index) {
        console.log(item.PrefabInfos[Index].Guid);
      }
    });
  }
}
```

#### Parameters

| `lastId` `number` | 尾部Id |
| :------ | :------ |
| `size` `number` | 每页数量 |

#### Returns

| `Promise`<[`MyPrefabsResult`](Core.mw.md#myprefabsresult)\> | 移动编辑器获取自己上传的所有预制体资源信息 |
| :------ | :------ |

___

### getOneFingerMoveGestureDelegate <Score text="getOneFingerMoveGestureDelegate" /> 

• **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取单指滑动的代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> | 返回单指滑动的代理 |
| :------ | :------ |

___

### getPinchGestureDelegate <Score text="getPinchGestureDelegate" /> 

• **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <Badge type="tip" text="client" />

获取挤压手势的代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> | 返回挤压手势的代理 |
| :------ | :------ |

___

### getPlayerScreenWidgetGeometry <Score text="getPlayerScreenWidgetGeometry" /> 

• **getPlayerScreenWidgetGeometry**(`player`): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />

获取包含添加到“player screen”的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。

#### Parameters

| `player` [`Player`](../classes/mw.Player.md) | 玩家在游戏世界中的位置投射到屏幕上的控制器 |
| :------ | :------ |

#### Returns

| [`Geometry`](../classes/mw.Geometry.md) | 返回所有控件的控件的几何形状 |
| :------ | :------ |

___

### getResolutionChanged <Score text="getResolutionChanged" /> 

• **getResolutionChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

分辨率改变时的回调

#### Parameters

| `Delegate` [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`x`: `number`, `y`: `number`) => `void`\> | 传入回调函数 |
| :------ | :------ |


___

### getSavedDir <Score text="getSavedDir" /> 

• **getSavedDir**(): `string` <Badge type="tip" text="client" />

获取截图的保存路径

#### Returns

| `string` | 保存路径的绝对路径 |
| :------ | :------ |

___

### getTapGestureDelegate <Score text="getTapGestureDelegate" /> 

• **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取点击事件的代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> | 返回的代理 |
| :------ | :------ |

___

### getTouchBeganGestureDelegate <Score text="getTouchBeganGestureDelegate" /> 

• **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指按下代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> | 返回手指按下时的代理 |
| :------ | :------ |

___

### getTouchData <Score text="getTouchData" /> 

• **getTouchData**(): [`Vector`](../classes/mw.Vector.md)[] <Badge type="tip" text="client" />

获取touch的数组

#### Returns

| [`Vector`](../classes/mw.Vector.md)[] | 返回一个10维数组Vector, x,y点击的位置,z代表点击的状态 只会出现0,1的情况 |
| :------ | :------ |

___

### getTouchEndGestureDelegate <Score text="getTouchEndGestureDelegate" /> 

• **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />

获取手指抬起代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> | 返回抬起手指时候的代理 |
| :------ | :------ |

___

### getTouchMoveGestureDelegate <Score text="getTouchMoveGestureDelegate" /> 

• **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指滑动代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> | 返回手指滑动的代理 |
| :------ | :------ |

___

### getTwoFingerMoveGestureDelegate <Score text="getTwoFingerMoveGestureDelegate" /> 

• **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取双指滑动的代理

#### Returns

| [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> | 返回双指滑动的代理 |
| :------ | :------ |

___

### getUrlParameter <Score text="getUrlParameter" /> 

• **getUrlParameter**(`url`, `parameterName`): `string` 

获取url参数

#### Parameters

| `url` `string` | url |
| :------ | :------ |
| `parameterName` `string` | 参数名 |

#### Returns

| `string` | 参数值 |
| :------ | :------ |

___

### getViewportScale <Score text="getViewportScale" /> 

• **getViewportScale**(): `number` <Badge type="tip" text="client" />

获取应用于视口和所有小部件的当前DPI Scale。

#### Returns

| `number` | 返回应用于视口和所有小部件的当前DPI Scale。 |
| :------ | :------ |

___

### getViewportSize <Score text="getViewportSize" /> 

• **getViewportSize**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取游戏视口的大小。

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 返回游戏视口的大小。 |
| :------ | :------ |

___

### getViewportWidgetGeometry <Score text="getViewportWidgetGeometry" /> 

• **getViewportWidgetGeometry**(): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />

获取包含添加到“视口”中的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。

#### Returns

| [`Geometry`](../classes/mw.Geometry.md) | 返回所有控件的控件的几何形状 |
| :------ | :------ |

___

### httpRequestTransmitData <Score text="httpRequestTransmitData" /> 

• **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType`): `boolean` 

Http请求接口

#### Parameters

| `response` [`HttpResponse`](Core.mw.md#httpresponse) |  请求的回调 |
| :------ | :------ |
| `paramUrl` `string` |  请求的参数和值 |
| `jsonContent` `string` |  请求数据内容，json格式 |
| `requestType` [`HttpRequestType`](../enums/mw.HttpRequestType.md) |  请求类型。HttpRequestType枚举值 |

#### Returns

| `boolean` | 请求是否发送成功 |
| :------ | :------ |

___

### isDragDropping <Score text="isDragDropping" /> 

• **isDragDropping**(): `boolean` <Badge type="tip" text="client" />

判断当前是否有一个DragDrop事件

#### Returns

| `boolean` | boolean |
| :------ | :------ |

___

### isUnderLocation <Score text="isUnderLocation" /> 

• **isUnderLocation**(`geometry`, `absolutePosition`): `boolean` <Badge type="tip" text="client" />

判定给定坐标是否在geometry下

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `absolutePosition` [`Vector2`](../classes/mw.Vector2.md) | 绝对坐标 |

#### Returns

| `boolean` | 坐标是否在geometry下 |
| :------ | :------ |

___

### localToAbsolute <Score text="localToAbsolute" /> 

• **localToAbsolute**(`geometry`, `localPosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将局部坐标转换为绝对坐标,绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根所在的空间。

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `localPosition` [`Vector2`](../classes/mw.Vector2.md) | 相对坐标 |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 绝对坐标 |
| :------ | :------ |

___

### localToViewport <Score text="localToViewport" /> 

• **localToViewport**(`geometry`, `localPosition`, `outPixelPosition`, `outViewportPosition`): `void` <Badge type="tip" text="client" />

将几何体的局部坐标转换为局部视口坐标。

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `localPosition` [`Vector2`](../classes/mw.Vector2.md) | 局部坐标 |
| `outPixelPosition` [`Vector2`](../classes/mw.Vector2.md) | 可用于线的轨迹和其他用途，你需要在视口分辨率单位的空间坐标。 |
| `outViewportPosition` [`Vector2`](../classes/mw.Vector2.md) | 如果你想添加另一个控件到视口空间相同的位置 |


___

### markActorRenderStateDirty <Score text="markActorRenderStateDirty" /> 

• **markActorRenderStateDirty**(`target`): `void` <Badge type="tip" text="client" />

标记Actor所有组件的渲染状态为脏

#### Parameters

| `target` `Base` | 标记的对象 |
| :------ | :------ |


___

### mobileReleaseGame <Score text="mobileReleaseGame" /> 

• **mobileReleaseGame**(`InGameName`, `InExtraData?`): `Promise`<`number`\> 

移动端编辑器发布游戏

::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用,发布游戏会自动保存一次工程

:::

#### Parameters

| `InGameName` `string` | 游戏名称 |
| :------ | :------ |
| `InExtraData?` `string` | 游戏扩展数据 default:"" |

#### Returns

| `Promise`<`number`\> | 保存成功或失败 |
| :------ | :------ |

___

### projectWorldPositionToWidgetPosition <Score text="projectWorldPositionToWidgetPosition" /> 

• **projectWorldPositionToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上

#### Parameters

| `worldLocation` [`Vector`](../classes/mw.Vector.md) |  世界坐标 |
| :------ | :------ |
| `playerViewportRelative?` `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

| [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) | 屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO |
| :------ | :------ |

___

### pushShippingLog <Score text="pushShippingLog" /> 

• **pushShippingLog**(`logLevel`, `log`): `void`

移动编辑器推送shipping下的日志

#### Parameters

| `logLevel` [`LogLevel`](../enums/mw.LogLevel.md) |  日志等级 |
| :------ | :------ |
| `log` `string` |  日志内容 |


___

### recordingCharacterGif <Score text="recordingCharacterGif" /> 

• **recordingCharacterGif**(`Character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `picNum`, `recordingTime`): `void` <Badge type="tip" text="client" />

连续截图，生成GIF素材发送给服务器

::: warning Precautions

Playza定制接口

:::

#### Parameters

| `Character` [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| :------ | :------ |
| `relativeLocation` [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0) |
| `resolution` [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` `number` |  镜头FOV值 |
| `picNum` `number` |  截取图像张数 |
| `recordingTime` `number` |  截取持续时长 |


___

### redo <Score text="redo" /> 

• **redo**(): `void` <Badge type="tip" text="client" />

执行恢复操作


___

### releaseAssetIconTextureFromCache <Score text="releaseAssetIconTextureFromCache" /> 

• **releaseAssetIconTextureFromCache**(`asset`): `void` <Badge type="tip" text="client" />

尝试标记资源的ICON图为待释放的等待释放

#### Parameters

| `asset` `string` | 指定资源的id |
| :------ | :------ |


___

### saveProject <Score text="saveProject" /> 

• **saveProject**(): `void` 

保存当前游戏项目

::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::


___

### screenShot <Score text="screenShot" /> 

• **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`, `bShowUI?`): `void` <Badge type="tip" text="client" />

屏幕指定区域截图

#### Parameters

| `Resolution` [`Vector2`](../classes/mw.Vector2.md) | 分辨率 |
| :------ | :------ |
| `StartPoint` [`Vector2`](../classes/mw.Vector2.md) | 截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
| `Width` `number` | 截图区域的宽度 |
| `Height` `number` | 截图区域的高度 |
| `callback` (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |
| `bShowUI?` `boolean` | 是否包含UI |


___

### screenShotExist <Score text="screenShotExist" /> 

• **screenShotExist**(`absPath`): `boolean` <Badge type="tip" text="client" />

验证绝对路径下截图是否存在

#### Parameters

| `absPath` `string` |  图片的绝对路径 |
| :------ | :------ |

#### Returns

| `boolean` | 该文件是否存在 |
| :------ | :------ |

___

### screenToViewport <Score text="screenToViewport" /> 

• **screenToViewport**(`screenPosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(以像素为单位)转换为视口控件的本地空间。

#### Parameters

| `screenPosition` [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |
| :------ | :------ |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 本地位置 |
| :------ | :------ |

___

### screenToWidgetAbsolute <Score text="screenToWidgetAbsolute" /> 

• **screenToWidgetAbsolute**(`screenPosition`, `isIncludeWindowPosition?`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(像素)转换为绝对桌面程序坐标。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。

#### Parameters

| `screenPosition` [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |
| :------ | :------ |
| `isIncludeWindowPosition?` `boolean` | 是否移除游戏窗口位置(在窗口模式下有用) default:false |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 绝对桌面程序坐标 |
| :------ | :------ |

___

### screenToWidgetLocal <Score text="screenToWidgetLocal" /> 

• **screenToWidgetLocal**(`geometry`, `screenPosition`, `isIncludeWindowPosition?`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(以像素为单位)转换为具有给定几何形状的小部件的本地空间。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 集合体 |
| :------ | :------ |
| `screenPosition` [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |
| `isIncludeWindowPosition?` `boolean` | 是否移除游戏窗口位置(在窗口模式下有用) default: false |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 控件的本地位置 |
| :------ | :------ |

___

### sendShareId <Score text="sendShareId" /> 

• **sendShareId**(`absPath`, `shareId`, `bShowUuid`): `void` <Badge type="tip" text="client" />

将角色数据ID连同角色截图一同发给MGS

::: warning Precautions

Playza定制接口

:::

#### Parameters

| `absPath` `string` |  分享截图的绝对路径 |
| :------ | :------ |
| `shareId` `string` |  分享的角色数据id,可为空 |
| `bShowUuid` `boolean` |  是否在显示账户的Uuid |


___

### setButtonDisableImageByURL <Score text="setButtonDisableImageByURL" /> 

• **setButtonDisableImageByURL**(`button`, `url`): `void` <Badge type="tip" text="other" />

通过URL设置按钮控件不可以图片

#### Parameters

| `button` [`Button`](../classes/mw.Button.md) | 按钮控件 |
| :------ | :------ |
| `url` `string` | 图片链接 |


是否设置成功

___

### setButtonNormalImageByURL <Score text="setButtonNormalImageByURL" /> 

• **setButtonNormalImageByURL**(`button`, `url`): `void` <Badge type="tip" text="other" />

通过URL设置按钮控件普通图片

#### Parameters

| `button` [`Button`](../classes/mw.Button.md) | 按钮控件 |
| :------ | :------ |
| `url` `string` | 图片链接 |


是否设置成功

___

### setButtonPressedImageByURL <Score text="setButtonPressedImageByURL" /> 

• **setButtonPressedImageByURL**(`button`, `url`): `void` <Badge type="tip" text="other" />

通过URL设置按钮控件按下图片

#### Parameters

| `button` [`Button`](../classes/mw.Button.md) | 按钮控件 |
| :------ | :------ |
| `url` `string` | 图片链接 |


是否设置成功

___

### setFocusToGameViewport <Score text="setFocusToGameViewport" /> 

• **setFocusToGameViewport**(): `void` <Badge type="tip" text="client" />

设置关注游戏窗口


___

### setImageImageByURL <Score text="setImageImageByURL" /> 

• **setImageImageByURL**(`image`, `url`): `void` <Badge type="tip" text="other" />

通过URL设置图片控件图片

#### Parameters

| `image` [`Image`](../classes/mw.Image.md) | 图片控件 |
| :------ | :------ |
| `url` `string` | 图片链接 |


是否设置成功

___

### setInputModeGameAndUI <Score text="setInputModeGameAndUI" /> 

• **setInputModeGameAndUI**(`InWidgetToFocus?`, `InMouseLockMode?`, `hideCursorDuringCapture?`): `void` <Badge type="tip" text="client" />

设置一个输入模式，只允许UI响应用户输入，如果UI不处理它，玩家输入/玩家控制器就有机会

#### Parameters

| `InWidgetToFocus?` [`Widget`](../classes/mw.Widget.md) | 响应输入模式的widget default:null |
| :------ | :------ |
| `InMouseLockMode?` [`MouseLockMode`](../enums/mw.MouseLockMode.md) | 鼠标锁定的输入模式 default:UIType.MouseLockMode.DoNotLock |
| `hideCursorDuringCapture?` `boolean` | 是否隐藏光标 default:true |


___

### setInputModeGameOnly <Score text="setInputModeGameOnly" /> 

• **setInputModeGameOnly**(): `void` <Badge type="tip" text="client" />

设置一个输入模式，只允许玩家输入/玩家控制器响应用户输入


___

### setInputModeUIOnly <Score text="setInputModeUIOnly" /> 

• **setInputModeUIOnly**(`InWidgetToFocus?`, `InMouseLockMode?`): `void` <Badge type="tip" text="client" />

设置只允许UI响应用户输入的输入模式。

#### Parameters

| `InWidgetToFocus?` [`Widget`](../classes/mw.Widget.md) | 响应输入模式的widget default:null |
| :------ | :------ |
| `InMouseLockMode?` [`MouseLockMode`](../enums/mw.MouseLockMode.md) | 鼠标锁定的输入模式 default:UIType.MouseLockMode.DoNotLock |


___

### setMultiSwipeTime <Score text="setMultiSwipeTime" /> 

• **setMultiSwipeTime**(`time`): `void` <Badge type="tip" text="client" />

双指移动的时间- 必须大于这个时间才执行双指移动事件

#### Parameters

| `time` `number` |  双指移动限定的时间 |
| :------ | :------ |


___

### setPinchAngleTolerance <Score text="setPinchAngleTolerance" /> 

• **setPinchAngleTolerance**(`time`): `void` <Badge type="tip" text="client" />

挤压手势的偏差角度

#### Parameters

| `time` `number` |  偏差角度 |
| :------ | :------ |


___

### setSingleSwipeTime <Score text="setSingleSwipeTime" /> 

• **setSingleSwipeTime**(`time`): `void` <Badge type="tip" text="client" />

单指移动的时间- 必须大于这个时间才会开始执行单指移动

#### Parameters

| `time` `number` |  单指移动的限定时间 |
| :------ | :------ |


___

### setSwipeTolerance <Score text="setSwipeTolerance" /> 

• **setSwipeTolerance**(`time`): `void` <Badge type="tip" text="client" />

双指移动的偏差量- 值越大误差则可以越大

#### Parameters

| `time` `number` |  偏差值 |
| :------ | :------ |


___

### setTapTime <Score text="setTapTime" /> 

• **setTapTime**(`time`): `void` <Badge type="tip" text="client" />

tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move

#### Parameters

| `time` `number` |  tap限定的时间 |
| :------ | :------ |


___

### startRecord <Score text="startRecord" /> 

• **startRecord**(`screenX`, `screenY`, `screenW`, `screenH`): `string` <Badge type="tip" text="client" />

录屏

#### Parameters

| `screenX` `number` | 屏幕左上角x值 |
| :------ | :------ |
| `screenY` `number` | 屏幕左上角Y值 |
| `screenW` `number` | 录制图像宽度 |
| `screenH` `number` | 录制图像高度 |

#### Returns

| `string` |  |
| :------ | :------ |

___

### stopRecord <Score text="stopRecord" /> 

• **stopRecord**(): `void` <Badge type="tip" text="client" />

停止录屏


___

### transformVectorAbsoluteToLocal <Score text="transformVectorAbsoluteToLocal" /> 

• **transformVectorAbsoluteToLocal**(`geometry`, `absoluteVector`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化绝对空间下矢量到局部空间下

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `absoluteVector` [`Vector2`](../classes/mw.Vector2.md) | 绝对空间矢量 |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 局部空间下矢量 |
| :------ | :------ |

___

### transformVectorLocalToAbsolute <Score text="transformVectorLocalToAbsolute" /> 

• **transformVectorLocalToAbsolute**(`geometry`, `localVector`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化局部空间下矢量到绝对空间下

#### Parameters

| `geometry` [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| :------ | :------ |
| `localVector` [`Vector2`](../classes/mw.Vector2.md) | 局部空间下矢量 |

#### Returns

| [`Vector2`](../classes/mw.Vector2.md) | 绝对空间矢量 |
| :------ | :------ |

___

### undo <Score text="undo" /> 

• **undo**(): `void` <Badge type="tip" text="client" />

执行撤销操作


___

### uploadPrefab <Score text="uploadPrefab" /> 

• **uploadPrefab**(`assetId`, `name`, `imagePath`): `Promise`<[`UploadPrefabResult`](Core.mw.md#uploadprefabresult)\> <Badge type="tip" text="other" />

移动编辑器上传预制体

::: warning Precautions

只在MobileEditor模式下调用生效；异步请求

:::

<span style="font-size: 14px;">
使用示例:调用方法 新建一个脚本 NewScript
</span>

```ts
@Component
export default class NewScript extends Script {
  //当脚本被实例后，会在第一帧更新前调用此函数
  protected onStart(): void {
    //把guid='23C1ED241027B9E0'的预制体上传到服务器上，预制体的名字=我的预制体，缩略图=C:/icon.png
    mw.uploadPrefab('23C1ED241027B9E0','我的预制体','C:/icon.png').then(item =>{
       console.log(item.AssetId)
    });
  }
}
```

#### Parameters

| `assetId` `string` | 预制体资源Id |
| :------ | :------ |
| `name` `string` | 名字 |
| `imagePath` `string` | 512*512的透明png缩略图 |

#### Returns

| `Promise`<[`UploadPrefabResult`](Core.mw.md#uploadprefabresult)\> | 移动编辑器上传预制体返回结果 |
| :------ | :------ |

___

### uploadScreenShot <Score text="uploadScreenShot" /> 

• **uploadScreenShot**(`filePath`, `fileType`, `callbackURL?`): `void` <Badge type="tip" text="client" />

上传角色头像或全身照到服务器后发送到MGS

::: warning Precautions

Playza定制接口

:::

#### Parameters

| `filePath` `string` | 图片路径 |
| :------ | :------ |
| `fileType` `number` | 图片类型 default:0-全身照,1-男性头像 2-女性头像 |
| `callbackURL?` (`responseURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |


___

### uploadScreenShots <Score text="uploadScreenShots" /> 

• **uploadScreenShots**(`gender`, `portraitPath`, `fullPicPath`, `callbackURL?`): `void` <Badge type="tip" text="client" />

上传角色头像及全身照到服务器后发送到MGS

::: warning Precautions

Playza定制接口

:::

#### Parameters

| `gender` `number` | 角色性别，1-男 2-女 0-未知 |
| :------ | :------ |
| `portraitPath` `string` | 头像照路径 |
| `fullPicPath` `string` | 全身照路径 |
| `callbackURL?` (`porURL`: `string`, `bodyURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |


___

### uploadShippingLog <Score text="uploadShippingLog" /> 

• **uploadShippingLog**(`uploadCurrentLog`): `Promise`<`string`\>

移动编辑器推送shipping下的日志

#### Parameters

| `uploadCurrentLog` `boolean` |  true 上传当前的log false 上传备份log |
| :------ | :------ |

#### Returns

| `Promise`<`string`\> |  |
| :------ | :------ |

___

### urlDecode <Score text="urlDecode" /> 

• **urlDecode**(`str`): `string` 

url解码

#### Parameters

| `str` `string` | 内容 |
| :------ | :------ |

#### Returns

| `string` | 解码后的内容 |
| :------ | :------ |

___

### urlEncode <Score text="urlEncode" /> 

• **urlEncode**(`str`): `string` 

url转码

#### Parameters

| `str` `string` | 内容 |
| :------ | :------ |

#### Returns

| `string` | 转码后的内容 |
| :------ | :------ |

___

### vibrate <Score text="vibrate" /> 

• **vibrate**(`enable`): `void` <Badge type="tip" text="client" />

振动开关

#### Parameters

| `enable` `boolean` | -true:开启震动，-false:关闭震动 |
| :------ | :------ |

