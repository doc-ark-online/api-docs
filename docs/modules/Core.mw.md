mw

# mw <Badge type="tip" text="Namespace" /> <Score text="mw" />

在调用DataStorage相关接口时，每一个Key的对应值在后端数据服务器的读取和修改都有频率、间隔限制，主要表现在：
1. 【总频率限制】接口调用时至一分钟前的时间区间内，某个Key的对应值在后端数据服务器上被获取Get、改写Set、删除Remove的总次数不能超过 (60+游戏设定的最大人数×10)次，不管它是在哪个ds服务器被操作的；如果时间区间内超限，请求会失败，然后Set、Remove会返回 FREQUENCY_OVERRUN(操作失败：请求频率超限) 而Get会catch到error timeout。
2. 【改写间隔限制】对于某个Key的对应值，在后端数据服务器上进行了1次改写Set 或 删除Remove操作后，该Key的对应值将会被锁定6s，在这6s内将无法再被Set、remove，尝试将会返回 FREQUENCY_OVERRUN(操作失败：请求频率超限)，直到6s过去解锁后才可修改。
::: warning Precautions
1. 这些限制是后端数据服务器层面针对单个Key来的，每个Key之间的限制互相独立，和DS服务器无关。
2. Player相关的接口其实也算是一个Key，只不过是和玩家信息强相关的Key，也会受到上述限制；建议用 asyncSetCustomData(属性名+玩家id+其他描述, 要存的值) 代替asyncSetPlayerData(玩家, 要存的值) 来分存玩家相关的需要经常存取数据，以免堵塞。
3. 对于玩家相关的信息，建议在ts层建立数据缓存，进行一定的数据托管；即通过ts脚本逻辑让DS服务器临时缓存玩家数据，只在初始化的时候进行get，在离线或其他必要时set，以减轻对后端数据服务器的压力，保证稳定性
:::

## Table of contents

| Enumerations |
| :-----|
| [AdsState](../enums/mw.AdsState.md) <br> 广告状态，调用show方法的时候可能返回的广告状态|
| [AdsType](../enums/mw.AdsType.md) <br> 广告类型|
| [AnimSlot](../enums/mw.AnimSlot.md) <br> 动画插槽|
| [AnimationMode](../enums/mw.AnimationMode.md) <br> 动画模式|
| [AppearanceType](../enums/mw.AppearanceType.md) <br> 形象类型|
| [AssetType](../enums/mw.AssetType.md) <br> 资源类型|
| [AttenuationDistanceModel](../enums/mw.AttenuationDistanceModel.md) <br> 音效衰减函数模型|
| [AttenuationShape](../enums/mw.AttenuationShape.md) <br> 音效衰减形状|
| [BasicStanceType](../enums/mw.BasicStanceType.md) <br> 基础姿态风格|
| [BodyPartTypeV1](../enums/mw.BodyPartTypeV1.md) <br> V1角色部位|
| [ButtonClickMethod](../enums/mw.ButtonClickMethod.md) <br> 按钮点击响应规则|
| [ButtonPressMethod](../enums/mw.ButtonPressMethod.md) <br> 按钮按压响应规则|
| [ButtonTouchMethod](../enums/mw.ButtonTouchMethod.md) <br> 按钮触摸响应规则|
| [CameraControlType](../enums/mw.CameraControlType.md) <br> 相机控制模式|
| [CameraPositionMode](../enums/mw.CameraPositionMode.md) <br> 摄像机位置模式|
| [CameraPreset](../enums/mw.CameraPreset.md) <br> 摄像机模式|
| [CameraProjectionMode](../enums/mw.CameraProjectionMode.md) <br> 摄像机镜头模式|
| [CameraRotationMode](../enums/mw.CameraRotationMode.md) <br> 摄像机旋转模式|
| [CameraSwitchBlendFunction](../enums/mw.CameraSwitchBlendFunction.md) <br> 切换摄像机时运用的混合函数|
| [CharacterTemplate](../enums/mw.CharacterTemplate.md) <br> 角色体型|
| [CharacterType](../enums/mw.CharacterType.md) <br> 形象类型|
| [CollisionStatus](../enums/mw.CollisionStatus.md) <br> 碰撞属性状态|
| [CollisionType](../enums/mw.CollisionType.md) <br> 碰撞类型|
| [CustomShapeType](../enums/mw.CustomShapeType.md) <br> 碰撞体形状类型|
| [DataStorageResultCode](../enums/mw.DataStorageResultCode.md) <br> 数据储存返回代码|
| [DispatchEventResult](../enums/mw.DispatchEventResult.md) <br> 事件发送的结果|
| [DragPivot](../enums/mw.DragPivot.md) <br> 拖拽的锚点|
| [ExpressionType](../enums/mw.ExpressionType.md) <br> 表情类型|
| [FogPreset](../enums/mw.FogPreset.md) <br> 环境雾预设枚举|
| [GraphicsLevel](../enums/mw.GraphicsLevel.md) <br> 画质等级|
| [GravityMode](../enums/mw.GravityMode.md) <br> 重力模式|
| [HideInEditorState](../enums/mw.HideInEditorState.md) |
| [HotWeaponAimMode](../enums/mw.HotWeaponAimMode.md) <br> 热武器瞄准模式|
| [HotWeaponFireMode](../enums/mw.HotWeaponFireMode.md) <br> 热武器开火模式|
| [HotWeaponState](../enums/mw.HotWeaponState.md) <br> 热武器状态|
| [HttpRequestType](../enums/mw.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举|
| [HttpRequestURL](../enums/mw.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应|
| [HumanoidSlotType](../enums/mw.HumanoidSlotType.md) <br> 人形角色插槽类型|
| [ImpulseForceType](../enums/mw.ImpulseForceType.md) <br> 冲量力类型|
| [ImpulseType](../enums/mw.ImpulseType.md) <br> 冲量的应用方式|
| [InitialOscillatorOffset](../enums/mw.InitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始)|
| [InputTextLimit](../enums/mw.InputTextLimit.md) <br> 输入框限制|
| [Keys](../enums/mw.Keys.md) <br> 按键Key值|
| [LanguageType](../enums/mw.LanguageType.md) <br> 游戏语言|
| [MaskButtonType](../enums/mw.MaskButtonType.md) <br> 遮罩类型|
| [MessageChannelReceiver](../enums/mw.MessageChannelReceiver.md) <br> 枚举各个通道的使用与接收方|
| [MessageState](../enums/mw.MessageState.md) <br> 发送消息的状态|
| [MessageType](../enums/mw.MessageType.md) <br> 发送消息的类型|
| [MotionAxis](../enums/mw.MotionAxis.md) <br> 运动坐标系|
| [MouseLockMode](../enums/mw.MouseLockMode.md) <br> 鼠标锁定模式|
| [MoveControlMode](../enums/mw.MoveControlMode.md) <br> 移动控制模式|
| [MoveFacingDirection](../enums/mw.MoveFacingDirection.md) <br> 运动时面朝方向|
| [MovementDirection](../enums/mw.MovementDirection.md) <br> 运动时依据的正方向|
| [MovementMode](../enums/mw.MovementMode.md) <br> 角色状态|
| [NavModifierType](../enums/mw.NavModifierType.md) <br> 寻路动态修饰区类型，不同类型在寻路计算中成本不同，影响寻路结果|
| [NetStatus](../enums/mw.NetStatus.md) <br> 同步状态|
| [ObjectTypeQuery](../enums/mw.ObjectTypeQuery.md) <br> 碰撞检测通道|
| [Orientation](../enums/mw.Orientation.md) <br> 滚动框类型|
| [OscillatorWaveform](../enums/mw.OscillatorWaveform.md) <br> 振荡器波形|
| [PostProcessPreset](../enums/mw.PostProcessPreset.md) <br> 后处理预设枚举|
| [ProgressBarFillType](../enums/mw.ProgressBarFillType.md) <br> 进度条填充规则|
| [ProjectileMovementStatus](../enums/mw.ProjectileMovementStatus.md) <br> 投掷物移动状态|
| [PropertyStatus](../enums/mw.PropertyStatus.md) <br> 属性状态|
| [RuntimePlatform](../enums/mw.RuntimePlatform.md) <br> 运行平台|
| [ScrollBarDefaultLocation](../enums/mw.ScrollBarDefaultLocation.md) <br> 滚动条默认位置|
| [SkyPreset](../enums/mw.SkyPreset.md) <br> 天空盒预设枚举|
| [SlateBrushDrawType](../enums/mw.SlateBrushDrawType.md) <br> 图片画刷绘制模式|
| [SlateBrushTileType](../enums/mw.SlateBrushTileType.md) <br> 图片画刷填充模式|
| [SlateColorStylingMode](../enums/mw.SlateColorStylingMode.md) <br> UI颜色应用模式|
| [SlateVisibility](../enums/mw.SlateVisibility.md) <br> UI节点显示规则|
| [SlideMethod](../enums/mw.SlideMethod.md) <br> 进度条滑动的方式|
| [SomatotypeV1](../enums/mw.SomatotypeV1.md) <br> V1角色体型|
| [SomatotypeV2](../enums/mw.SomatotypeV2.md) <br> 角色体型|
| [SoundPlayState](../enums/mw.SoundPlayState.md) <br> 音效播放状态|
| [StanceBlendMode](../enums/mw.StanceBlendMode.md) <br> 姿态混合模式|
| [TextCommit](../enums/mw.TextCommit.md) <br> 输入提交模式|
| [TextJustify](../enums/mw.TextJustify.md) <br> 文本排列对齐规则|
| [TextVerticalJustify](../enums/mw.TextVerticalJustify.md) <br> 文本排列垂直对齐规则|
| [TouchInputType](../enums/mw.TouchInputType.md) <br> 触摸类型|
| [TriggerShapeType](../enums/mw.TriggerShapeType.md) <br> 碰撞形状|
| [UIConstraintHorizontal](../enums/mw.UIConstraintHorizontal.md) <br> 对齐策略水平规则|
| [UIConstraintVertical](../enums/mw.UIConstraintVertical.md) <br> 对齐策略垂直规则|
| [UIFontGlyph](../enums/mw.UIFontGlyph.md) <br> 字体类型|
| [UIHorizontalCollation](../enums/mw.UIHorizontalCollation.md) <br> 自动布局子项布局排序 - 水平排序|
| [UIHugContentHorizontally](../enums/mw.UIHugContentHorizontally.md) <br> 自动布局容器水平适应规则|
| [UIHugContentVertically](../enums/mw.UIHugContentVertically.md) <br> 自动布局容器垂直适应规则|
| [UILayoutPacket](../enums/mw.UILayoutPacket.md) <br> 自动布局排版规则-排列规则|
| [UILayoutType](../enums/mw.UILayoutType.md) <br> 自动布局排版规则-容器类型|
| [UIScrollBoxAnimationType](../enums/mw.UIScrollBoxAnimationType.md) <br> 滚动框动画类型|
| [UITextHorizontalLayout](../enums/mw.UITextHorizontalLayout.md) <br> 文本框规则显示规则限制|
| [UIVerticalCollation](../enums/mw.UIVerticalCollation.md) <br> 自动布局子项布局排序 - 垂直排序|
| [VehicleDriveMode4W](../enums/mw.VehicleDriveMode4W.md) <br> 四轮载具驱动模式|
| [VehicleDriveMode4WNew](../enums/mw.VehicleDriveMode4WNew.md) <br> 四轮载具驱动模式|
| [VehicleWheelPosition4W](../enums/mw.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置|
| [VehicleWheelPosition4WNew](../enums/mw.VehicleWheelPosition4WNew.md) <br> 四轮载具车轮位置|
| [WidgetGeometryMode](../enums/mw.WidgetGeometryMode.md) <br> UI形状枚举|
| [WidgetSpaceMode](../enums/mw.WidgetSpaceMode.md) <br> UI空间位置枚举|
| [consumeKeyStatus](../enums/mw.consumeKeyStatus.md) <br> 大会员扣除钥匙订单返回状态信息|

| Classes |
| :-----|
| [AccountService](../classes/mw.AccountService.md) <br> 用户账号信息管理相关服务|
| [Action](../classes/mw.Action.md) <br> 任意参数的代理|
| [Action1](../classes/mw.Action1.md) <br> 一个参数的代理|
| [Action2](../classes/mw.Action2.md) <br> 两个参数的代理|
| [Action3](../classes/mw.Action3.md) <br> 三个参数的代理|
| [AdsService](../classes/mw.AdsService.md) <br> 广告服务，支持激励/插屏类型|
| [AdvancedVehicle](../classes/mw.AdvancedVehicle.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。|
| [AnalogInputEvent](../classes/mw.AnalogInputEvent.md) <br> 轴输入事件|
| [Animation](../classes/mw.Animation.md) <br> 动画类。可以控制动画的播放暂停结束；获取动画的资源ID，动画长度，播放速率等信息。|
| [AssetIconData](../classes/mw.AssetIconData.md) <br> 资源ICON信息|
| [AssetUtil](../classes/mw.AssetUtil.md) <br> 资源工具类|
| [AvatarSettings](../classes/mw.AvatarSettings.md) <br> 控制一些优化项的开启关闭|
| [BlockingVolume](../classes/mw.BlockingVolume.md) <br> 禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡|
| [Button](../classes/mw.Button.md) <br> 按钮,无默认text|
| [Camera](../classes/mw.Camera.md) <br> 摄像机|
| [Canvas](../classes/mw.Canvas.md) <br> 可挂载叶子节点的根节点，以及提供各种自动布局功能|
| [Character](../classes/mw.Character.md) <br> Character是一个特殊的受控制对象，代表场景中玩家角色和非玩家角色。Character具备移动能力，可以在场景中行走、跑动、跳跃、飞行和游泳。此外Character带有骨架，可播放使用骨架的高级动画或者姿态。Character还可以通过CharacterDescription去设置自身外观形象。|
| [CharacterDecoration](../classes/mw.CharacterDecoration.md) <br> 单个插槽对应的挂件物体数组|
| [CharacterDescription](../classes/mw.CharacterDescription.md) <br> 人形外观配置类|
| [CharacterEvent](../classes/mw.CharacterEvent.md) <br> 角色输入事件|
| [ChatService](../classes/mw.ChatService.md) <br> 是一个用于实现聊天功能的类，它可以管理用户之间的交流并提供相关的服务。|
| [ColorPick](../classes/mw.ColorPick.md) <br> 颜色选择器|
| [ConvertScreenResult](../classes/mw.ConvertScreenResult.md) <br> 屏幕坐标转换结果|
| [DataStorage](../classes/mw.DataStorage.md) <br> 数据存储|
| [DebugService](../classes/mw.DebugService.md) <br> debug调试服务|
| [Delegate](../classes/mw.Delegate.md) <br> 委托|
| [DragDropOperation](../classes/mw.DragDropOperation.md) <br> UI 拖拽事件|
| [DragDropPayLoad](../classes/mw.DragDropPayLoad.md) <br> 拖拽事件数据传递类|
| [Effect](../classes/mw.Effect.md) <br> 特效对象,通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。如需精确控制特效的播放与停止，请使用play()和stop()。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。|
| [EffectService](../classes/mw.EffectService.md) <br> 特效服务|
| [EnvironmentSettings](../classes/mw.EnvironmentSettings.md) <br> 环境设置|
| [Event](../classes/mw.Event.md) <br> 事件|
| [EventListener](../classes/mw.EventListener.md) <br> 事件监听器|
| [EventReply](../classes/mw.EventReply.md) <br> 事件回复|
| [Fog](../classes/mw.Fog.md) <br> 环境雾|
| [GameObject](../classes/mw.GameObject.md) <br> pawn、camera、hotweapon、sound等都继承自GameObject，GameObject为基类。提供复制删除物体，查找获取物体、子物体、脚本等功能。|
| [Geometry](../classes/mw.Geometry.md) <br> 几何坐标信息|
| [GraphicsSettings](../classes/mw.GraphicsSettings.md) <br> 图片画质设置|
| [HitResult](../classes/mw.HitResult.md) <br> 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。|
| [HotWeapon](../classes/mw.HotWeapon.md) <br> 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。|
| [HotWeaponAccuracyOfFireComponent](../classes/mw.HotWeaponAccuracyOfFireComponent.md) <br> 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度|
| [HotWeaponAimComponent](../classes/mw.HotWeaponAimComponent.md) <br> 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近|
| [HotWeaponFireComponent](../classes/mw.HotWeaponFireComponent.md) <br> 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑|
| [HotWeaponLoadComponent](../classes/mw.HotWeaponLoadComponent.md) <br> 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑|
| [HotWeaponRecoilForceComponent](../classes/mw.HotWeaponRecoilForceComponent.md) <br> 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复）|
| [HotWeaponReloadComponent](../classes/mw.HotWeaponReloadComponent.md) <br> 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑|
| [Image](../classes/mw.Image.md) <br> UI 图片|
| [Impulse](../classes/mw.Impulse.md) <br> 冲量对象|
| [InputBox](../classes/mw.InputBox.md) <br> UI的输入框|
| [InputEvent](../classes/mw.InputEvent.md) <br> 输入事件|
| [InputUtil](../classes/mw.InputUtil.md) <br> 输入事件工具|
| [IntegratedMover](../classes/mw.IntegratedMover.md) <br> 运动器组件|
| [Interactor](../classes/mw.Interactor.md) <br> 交互物功能对象 V2|
| [JoystickStyleDesigner](../classes/mw.JoystickStyleDesigner.md) <br> 摇杆信息|
| [KeyEvent](../classes/mw.KeyEvent.md) <br> 按键事件|
| [LanguageUtil](../classes/mw.LanguageUtil.md) <br> 多语言工具类|
| [Lighting](../classes/mw.Lighting.md) <br> 光照|
| [LinearColor](../classes/mw.LinearColor.md) <br> 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0|
| [LocaleUtil](../classes/mw.LocaleUtil.md) <br> 地区本地化工具类|
| [Margin](../classes/mw.Margin.md) <br> 基础的边距，提供4个方向的数值修改|
| [MaskButton](../classes/mw.MaskButton.md) <br> 遮罩|
| [MaterialInstance](../classes/mw.MaterialInstance.md) <br> 材质实例类|
| [MathUtil](../classes/mw.MathUtil.md) <br> 数学库工具类|
| [Matrix3x3](../classes/mw.Matrix3x3.md) <br> 三维矩阵|
| [Matrix4x4](../classes/mw.Matrix4x4.md) <br> 四维矩阵|
| [Model](../classes/mw.Model.md) <br> 接口主要为物理参数设置接口与材质参数设置接口|
| [MulticastDelegate](../classes/mw.MulticastDelegate.md) <br> 多播委托接口|
| [MulticastGameObjectDelegate](../classes/mw.MulticastGameObjectDelegate.md) <br> 广播代理|
| [NavModifierVolume](../classes/mw.NavModifierVolume.md) <br> 寻路动态修饰区|
| [Navigation](../classes/mw.Navigation.md) <br> 路径查询。|
| [ObjectLauncher](../classes/mw.ObjectLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主|
| [PanelWidget](../classes/mw.PanelWidget.md) <br> UI的PanelWidget可以挂载子节点|
| [Pawn](../classes/mw.Pawn.md) <br> Pawn作为玩家角色和非对象玩家角色的基类，是一个可以通过玩家控制器或者逻辑脚本控制的游戏对象|
| [PhysicsThruster](../classes/mw.PhysicsThruster.md) <br> 推进器|
| [Player](../classes/mw.Player.md) <br> 角色控制|
| [PlayerState](../classes/mw.PlayerState.md) <br> PlayerState基类|
| [PointLight](../classes/mw.PointLight.md) <br> 点光源|
| [PointerEvent](../classes/mw.PointerEvent.md) <br> 点击或者滑动的时候传递mobile touch,鼠标,键盘信息的类|
| [PostProcess](../classes/mw.PostProcess.md) <br> 后处理|
| [PostProcessConfig](../classes/mw.PostProcessConfig.md) <br> 后处理对象属性配置|
| [ProgressBar](../classes/mw.ProgressBar.md) <br> UI进度条|
| [ProjectileInst](../classes/mw.ProjectileInst.md) <br> 投掷物发射器专用实例对象|
| [ProjectileMovement](../classes/mw.ProjectileMovement.md) <br> 投掷物功能类，绑定的逻辑对象请自行关闭物理模拟，运动过程中会忽略相机、禁行区、功能类不考虑移动同步|
| [PurchaseService](../classes/mw.PurchaseService.md) <br> 应用内购服务|
| [Quaternion](../classes/mw.Quaternion.md) <br> 四元数|
| [QueryUtil](../classes/mw.QueryUtil.md) <br> 射线检测范围|
| [RoomService](../classes/mw.RoomService.md) <br> MGS以及玩家信息、数据、头像等相关API。|
| [RoomSettings](../classes/mw.RoomSettings.md) <br> 房间设置|
| [Rotation](../classes/mw.Rotation.md) <br> 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。|
| [RouteService](../classes/mw.RouteService.md) <br> 游戏管理器|
| [ScreenUtil](../classes/mw.ScreenUtil.md) <br> 屏幕视口设置相关的接口|
| [Script](../classes/mw.Script.md) <br> 脚本管理|
| [ScriptingSettings](../classes/mw.ScriptingSettings.md) <br> 全局的脚本配置信息|
| [ScrollBox](../classes/mw.ScrollBox.md) <br> 滑动框|
| [SelectionUtil](../classes/mw.SelectionUtil.md) <br> 选择物体时，描边绘制相关功能|
| [Skybox](../classes/mw.Skybox.md) <br> 天空盒|
| [SlateBrushWithGuid](../classes/mw.SlateBrushWithGuid.md) <br> 贴图信息|
| [SlateColor](../classes/mw.SlateColor.md) <br> UI颜色管理|
| [Sound](../classes/mw.Sound.md) <br> 音效组件|
| [SoundService](../classes/mw.SoundService.md) <br> 音效管理器|
| [SpringArm](../classes/mw.SpringArm.md) <br> 弹簧臂|
| [StaleButton](../classes/mw.StaleButton.md) <br> 按钮|
| [Stance](../classes/mw.Stance.md) <br> 基础姿态的控制，提供播放停止姿态，获取ID等功能.|
| [StringUtil](../classes/mw.StringUtil.md) <br> 字符串工具|
| [SubStance](../classes/mw.SubStance.md) <br> 二级姿态|
| [SwimmingVolume](../classes/mw.SwimmingVolume.md) <br> 游泳区域|
| [SystemUtil](../classes/mw.SystemUtil.md) <br> 状态信息获取或设置。判断当前环境状态是否是客户端、服务端、移动端。获取版本号等信息|
| [TabGroup](../classes/mw.TabGroup.md) <br> 选项卡组|
| [TextBlock](../classes/mw.TextBlock.md) <br> UI文本|
| [TimeUtil](../classes/mw.TimeUtil.md) <br> 时间工具|
| [TouchPad](../classes/mw.TouchPad.md) <br> 摄像机滑动区|
| [Transform](../classes/mw.Transform.md) <br> Transform 由缩放、旋转和平移组成|
| [Trigger](../classes/mw.Trigger.md) <br> 触发器，对进入/离开触发器范围的事件进行响应|
| [Tween](../classes/mw.Tween.md) <br> 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。|
| [TweenGroup](../classes/mw.TweenGroup.md) <br> 补间组，用于同时控制多个补间对象|
| [TweenSequence](../classes/mw.TweenSequence.md) <br> 序列工具类，主要用于获取连续的ID|
| [TweenUtil](../classes/mw.TweenUtil.md) <br> 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。|
| [UIChildCollation](../classes/mw.UIChildCollation.md) <br> 容器自动布局子项排序规则|
| [UIConstraintAnchors](../classes/mw.UIConstraintAnchors.md) <br> 节点对齐规则|
| [UIFontInfo](../classes/mw.UIFontInfo.md) <br> 字体信息|
| [UIHugContent](../classes/mw.UIHugContent.md) <br> 容器自动布局大小适应规则|
| [UILayout](../classes/mw.UILayout.md) <br> 容器自动布局规则|
| [UIObject](../classes/mw.UIObject.md) <br> UI对象组件|
| [UIScript](../classes/mw.UIScript.md) <br> UI的驱动脚本基类|
| [UIService](../classes/mw.UIService.md) <br> UI管理类，可以继承此类，自带一个全局UI作为UI的总节点。|
| [UITransform](../classes/mw.UITransform.md) <br> 节点Transform|
| [UIWidget](../classes/mw.UIWidget.md) <br> 世界UI组件|
| [UserWidget](../classes/mw.UserWidget.md) <br> UI控件的集合,预制体UI|
| [UserWidgetPrefab](../classes/mw.UserWidgetPrefab.md) <br> ui预制体|
| [Vector](../classes/mw.Vector.md) <br> 由分量 (x,y,z) 组成的三维空间中的向量|
| [Vector2](../classes/mw.Vector2.md) <br> 由分量 (x,y) 组成的二维空间中的向量|
| [Vector4](../classes/mw.Vector4.md) <br> 由分量 (x,y,z,w) 组成的4D齐次向量|
| [VirtualJoystickPanel](../classes/mw.VirtualJoystickPanel.md) <br> 摇杆|
| [Widget](../classes/mw.Widget.md) <br> 可挂载叶子节点的根节点，以及提供各种自动布局功能|
| [WindowUtil](../classes/mw.WindowUtil.md) <br> 窗口设置。可设置窗口聚焦失焦时触发某种行为，获取分辨率等功能。|

| Interfaces |
| :-----|
| [CameraShakeInfo](../interfaces/mw.CameraShakeInfo.md) <br> 抖动数据|
| [DataStorageResult](../interfaces/mw.DataStorageResult.md) <br> 数据储存返回值|
| [GameObjectInfo](../interfaces/mw.GameObjectInfo.md) <br> 构建物体的信息|
| [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md) <br> 投掷物配置类型|
| [TypeName](../interfaces/mw.TypeName.md) <br> 类定义，使用这个可以省去类参数繁琐的类型声明    如:fun`<T>`(c:`{new():T}`) 可以写成 fun`<T>`(c:Class`<T>`)|

| Type Aliases |
| :-----|
| **[BoolResponse](Core.mw.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[BroadcastMessageResult](Core.mw.md#broadcastmessageresult)**: `Object` <br> 发送消息的结果|
| **[ChatEvent](Core.mw.md#chatevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[DelegateFuncType](Core.mw.md#delegatefunctype)**: (...`arg`: `unknown`[]) => `unknown` <br> 代理回调函数签名|
| **[DownloadDataResponse](Core.mw.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[EmptyCallback](Core.mw.md#emptycallback)**: () => `void` <br> 空的回调函数类型|
| **[HttpResponse](Core.mw.md#httpresponse)**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void` <br> Http请求的回调消息格式|
| **[LoadAppearanceDataAllCompletedCallback](Core.mw.md#loadappearancedataallcompletedcallback)**: () => `void` <br> 角色编辑器数据加载完成后的回调|
| **[LocalUGCGameInfo](Core.mw.md#localugcgameinfo)**: `Object` <br> 本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。|
| **[MGSEvent](Core.mw.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](Core.mw.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnArkBalanceUpdated](Core.mw.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnDescriptionChange](Core.mw.md#ondescriptionchange)**: (`operationCode`: `number`, `index`: `number`, `value`: `unknown`) => `void` <br> 外观加载细节变化委托|
| **[OnDescriptionComplete](Core.mw.md#ondescriptioncomplete)**: (`character`: [`Character`](../classes/mw.Character.md)) => `void` <br> 外观加载完成委托|
| **[OnKeyConsume](Core.mw.md#onkeyconsume)**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 大会员钥匙扣除服务端接收发货通知的消息格式|
| **[OnMovementModeChange](Core.mw.md#onmovementmodechange)**: (`mode`: [`MovementMode`](../enums/mw.MovementMode.md)) => `void` <br> 移动状态切换委托|
| **[OnOrderDelivered](Core.mw.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|
| **[OnRecvChatMessage](Core.mw.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[OnViewLayoutSwitched](Core.mw.md#onviewlayoutswitched)**: (`newState`: `number`) => `void` <br> 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](Core.mw.md#onviewrefreshed)**: () => `void` <br> 233中窗口刷新的消息格式|
| **[PublishedUGCGameInfo](Core.mw.md#publishedugcgameinfo)**: `Object` <br> 发布成功的UGC消费态游戏信息|
| **[SetAppearanceDataCallback](Core.mw.md#setappearancedatacallback)**: (`APIName`: `string`) => `void` <br> 设置编辑数据完成的回调|
| **[StringCallback](Core.mw.md#stringcallback)**: (`str`: `string`) => `void` <br> 返回String的回调|
| **[StringResponse](Core.mw.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TabGroupOnClickedProps](Core.mw.md#tabgrouponclickedprops)**: `Object` <br> 选项卡组-点击事件type|
| **[TeamMatchFailureInfo](Core.mw.md#teammatchfailureinfo)**: `Object` <br> 组队跳游戏请求失败回调|
| **[TransactionType](Core.mw.md#transactiontype)**: (`isSuccess`: `boolean`, `content`: `string`) => `void` <br> 商城通信回调消息格式|
| **[TweenEasingFunction](Core.mw.md#tweeneasingfunction)**: (`amount`: `number`) => `number` <br> 缓动函数的类型定义|
| **[TweenInterpolationFunction](Core.mw.md#tweeninterpolationfunction)**: (`v`: `number`[], `k`: `number`) => `number` <br> 插值函数的类型定义|
| **[TweenUnknownProps](Core.mw.md#tweenunknownprops)**: `Record`<`string`, `any`\> <br> 补间属性的定义，用户可以自由扩展|
| **[UGCTemplateInfo](Core.mw.md#ugctemplateinfo)**: `Object` <br> UGC模板信息|
| **[UploadDataResponse](Core.mw.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VehicleGearData](Core.mw.md#vehiclegeardata)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleGearDataNew](Core.mw.md#vehiclegeardatanew)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelData](Core.mw.md#vehiclewheeldata)**: `Object` <br> 四轮载具车轮属性|
| **[VehicleWheelDataNew](Core.mw.md#vehiclewheeldatanew)**: `Object` <br> 四轮载具车轮属性|
| **[VoidResponse](Core.mw.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](Core.mw.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|
| **[keyUsageInfo](Core.mw.md#keyusageinfo)**: `Object` <br> 大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳|
| **[maskWordCheckResult](Core.mw.md#maskwordcheckresult)**: `Object` <br> 屏蔽字检测的结果|
| **[onAppearanceDataChanged](Core.mw.md#onappearancedatachanged)**: (`GUID`: `string`) => `void` <br> 角色身上GUID切换成功回调|

| Variables |
| :-----|
| **[Client](Core.mw.md#client)**: `FunctionOption` <br> 客户端|
| **[Multicast](Core.mw.md#multicast)**: `FunctionOption` <br> 多播|
| **[Server](Core.mw.md#server)**: `FunctionOption` <br> 服务端|
| **[UILayerBottom](Core.mw.md#uilayerbottom)**: ``1`` <br> 底层 zOrder开始于100000|
| **[UILayerDialog](Core.mw.md#uilayerdialog)**: ``5`` <br> 对话 zOrder开始于500000|
| **[UILayerError](Core.mw.md#uilayererror)**: ``7`` <br> 错误 这个层级不可以使用，需要增加层级可以使用addUILayerMap zOrder开始于700000|
| **[UILayerMiddle](Core.mw.md#uilayermiddle)**: ``2`` <br> 中层 zOrder开始于200000|
| **[UILayerOwn](Core.mw.md#uilayerown)**: ``3`` <br> 独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000|
| **[UILayerScene](Core.mw.md#uilayerscene)**: ``0`` <br> 场景 zOrder开始于0|
| **[UILayerSystem](Core.mw.md#uilayersystem)**: ``6`` <br> 系统 zOrder开始于600000|
| **[UILayerTop](Core.mw.md#uilayertop)**: ``4`` <br> 顶层 zOrder开始于400000|

| Functions |
| :-----|
| **[Property](Core.mw.md#property)**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void` <br> 属性支持同步|
| **[RemoteFunction](Core.mw.md#remotefunction)**(`...options`): (`target`: `unknown`, `propertyKey`: `string`) => `void` <br> 函数支持Rpc调用|
| **[Serializable](Core.mw.md#serializable)**<`T`: extends `ConstructorType`\>(`type`: `T`): `T`: extends `ConstructorType` <br> 类型支持属性同步|
| **[absoluteToLocal](Core.mw.md#absolutetolocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absolutePosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 转化绝对坐标到相对坐标|
| **[absoluteToViewport](Core.mw.md#absolutetoviewport)**(`absoluteDesktopPosition`: [`Vector2`](../classes/mw.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/mw.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/mw.Vector2.md)): `void` <br> 将桌面空间中几何图形的绝对坐标转换为本地视口坐标|
| **[assetIDChangeIconUrlRequest](Core.mw.md#assetidchangeiconurlrequest)**(`assets`: `string`[]): `Promise`<`void`\> <br> 异步请求资源的ICON信息|
| **[cancelDragDrop](Core.mw.md#canceldragdrop)**(): `void` <br> 中断所有的DragDrop|
| **[createUI](Core.mw.md#createui)**<`T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\>\>(`UIPrefabName`: `string`, `panelClass`: () => `T`): `T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> <br> 创建UIPrefab|
| **[createUIByName](Core.mw.md#createuibyname)**(`UIPrefabName`: `string`): [`UserWidget`](../classes/mw.UserWidget.md) <br> 创建UIPrefab|
| **[createUIByPath](Core.mw.md#createuibypath)**(`UIPath`: `string`): [`UserWidget`](../classes/mw.UserWidget.md) <br> 创建UIPrefab|
| **[createUIOnlyClass](Core.mw.md#createuionlyclass)**<`T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\>\>(`panelClass`: () => `T`): `T`: extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> <br> 创建空的UI|
| **[endDragDrop](Core.mw.md#enddragdrop)**(`InReply`: [`EventReply`](../classes/mw.EventReply.md)): `void` <br> 中断一个拖拽事件, 传入一个操作的事件|
| **[fetch](Core.mw.md#fetch)**(`url`: `string`, `init?`: `RequestInit`): `Promise`<`Response`\> <br> HTTP请求|
| **[findUIScript](Core.mw.md#finduiscript)**(`UI`: [`Widget`](../classes/mw.Widget.md)): [`UIScript`](../classes/mw.UIScript.md) <br> 获取UI脚本|
| **[generalHttpRequest](Core.mw.md#generalhttprequest)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/mw.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getAbsoluteSize](Core.mw.md#getabsolutesize)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 返回绝对空间中几何图形的大小|
| **[getAssetIconDataByAssetID](Core.mw.md#getasseticondatabyassetid)**(`asset`: `string`): [`AssetIconData`](../classes/mw.AssetIconData.md) <br> 获取资源的ICON信息|
| **[getCurrentMousePosition](Core.mw.md#getcurrentmouseposition)**(): [`Vector2`](../classes/mw.Vector2.md) <br> 获取当前鼠标所在的绝对位置|
| **[getDragDroppingContent](Core.mw.md#getdragdroppingcontent)**(): [`DragDropOperation`](../classes/mw.DragDropOperation.md) <br> 获取当前的DragDrop事件|
| **[getLastMousePosition](Core.mw.md#getlastmouseposition)**(): [`Vector2`](../classes/mw.Vector2.md) <br> 获取上一次鼠标所在的绝对位置|
| **[getLocalSize](Core.mw.md#getlocalsize)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 返回局部空间中几何图形的大小|
| **[getLocalTopLeft](Core.mw.md#getlocaltopleft)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 返回局部空间中几何图形的局部顶部/左侧|
| **[getMousePositionOnPlatform](Core.mw.md#getmousepositiononplatform)**(): [`Vector2`](../classes/mw.Vector2.md) <br> 获取平台的鼠标光标位置。这是鼠标的绝对桌面位置。|
| **[getMousePositionOnViewport](Core.mw.md#getmousepositiononviewport)**(): [`Vector2`](../classes/mw.Vector2.md) <br> 获取平台的鼠标光标在视口控件的本地空间中的位置。|
| **[getPlayerScreenWidgetGeometry](Core.mw.md#getplayerscreenwidgetgeometry)**(`player`: [`Player`](../classes/mw.Player.md)): [`Geometry`](../classes/mw.Geometry.md) <br> 获取包含添加到“player screen”的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[getResolutionChanged](Core.mw.md#getresolutionchanged)**(`Delegate`: [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`x`: `number`, `y`: `number`) => `void`\>): `void` <br> 分辨率改变时的回调|
| **[getUrlParameter](Core.mw.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string` <br> 获取url参数|
| **[getViewportScale](Core.mw.md#getviewportscale)**(): `number` <br> 获取应用于视口和所有小部件的当前DPI Scale。|
| **[getViewportSize](Core.mw.md#getviewportsize)**(): [`Vector2`](../classes/mw.Vector2.md) <br> 获取游戏视口的大小。|
| **[getViewportWidgetGeometry](Core.mw.md#getviewportwidgetgeometry)**(): [`Geometry`](../classes/mw.Geometry.md) <br> 获取包含添加到“视口”中的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。|
| **[httpRequestTransmitData](Core.mw.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[isDragDropping](Core.mw.md#isdragdropping)**(): `boolean` <br> 判断当前是否有一个DragDrop事件|
| **[isUnderLocation](Core.mw.md#isunderlocation)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absolutePosition`: [`Vector2`](../classes/mw.Vector2.md)): `boolean` <br> 判定给定坐标是否在geometry下|
| **[localToAbsolute](Core.mw.md#localtoabsolute)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localPosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 将局部坐标转换为绝对坐标,绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根所在的空间。|
| **[localToViewport](Core.mw.md#localtoviewport)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localPosition`: [`Vector2`](../classes/mw.Vector2.md), `outPixelPosition`: [`Vector2`](../classes/mw.Vector2.md), `outViewportPosition`: [`Vector2`](../classes/mw.Vector2.md)): `void` <br> 将几何体的局部坐标转换为局部视口坐标。|
| **[screenToViewport](Core.mw.md#screentoviewport)**(`screenPosition`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 将屏幕位置(以像素为单位)转换为视口控件的本地空间。|
| **[screenToWidgetAbsolute](Core.mw.md#screentowidgetabsolute)**(`screenPosition`: [`Vector2`](../classes/mw.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/mw.Vector2.md) <br> 将屏幕位置(像素)转换为绝对桌面程序坐标。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[screenToWidgetLocal](Core.mw.md#screentowidgetlocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `screenPosition`: [`Vector2`](../classes/mw.Vector2.md), `isIncludeWindowPosition?`: `boolean`): [`Vector2`](../classes/mw.Vector2.md) <br> 将屏幕位置(以像素为单位)转换为具有给定几何形状的小部件的本地空间。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。|
| **[setFocusToGameViewport](Core.mw.md#setfocustogameviewport)**(): `void` <br> 设置关注游戏窗口|
| **[setInputModeGameAndUI](Core.mw.md#setinputmodegameandui)**(`InWidgetToFocus?`: [`Widget`](../classes/mw.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/mw.MouseLockMode.md), `hideCursorDuringCapture?`: `boolean`): `void` <br> 设置一个输入模式，只允许UI响应用户输入，如果UI不处理它，玩家输入/玩家控制器就有机会|
| **[setInputModeGameOnly](Core.mw.md#setinputmodegameonly)**(): `void` <br> 设置一个输入模式，只允许玩家输入/玩家控制器响应用户输入|
| **[setInputModeUIOnly](Core.mw.md#setinputmodeuionly)**(`InWidgetToFocus?`: [`Widget`](../classes/mw.Widget.md), `InMouseLockMode?`: [`MouseLockMode`](../enums/mw.MouseLockMode.md)): `void` <br> 设置只允许UI响应用户输入的输入模式。|
| **[transformVectorAbsoluteToLocal](Core.mw.md#transformvectorabsolutetolocal)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `absoluteVector`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 转化绝对空间下矢量到局部空间下|
| **[transformVectorLocalToAbsolute](Core.mw.md#transformvectorlocaltoabsolute)**(`geometry`: [`Geometry`](../classes/mw.Geometry.md), `localVector`: [`Vector2`](../classes/mw.Vector2.md)): [`Vector2`](../classes/mw.Vector2.md) <br> 转化局部空间下矢量到绝对空间下|
| **[urlDecode](Core.mw.md#urldecode)**(`str`: `string`): `string` <br> url解码|
| **[urlEncode](Core.mw.md#urlencode)**(`str`: `string`): `string` <br> url转码|
| **[vibrate](Core.mw.md#vibrate)**(`enable`: `boolean`): `void` <br> 振动开关|

## Type Aliases

### BoolResponse <Score text="BoolResponse" /> 

Ƭ **BoolResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

返回bool的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `success` | `boolean` |

##### Returns

`void`

___

### BroadcastMessageResult <Score text="BroadcastMessageResult" /> 

Ƭ **BroadcastMessageResult**: `Object`

发送消息的结果

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | [`MessageState`](../enums/mw.MessageState.md) | 发送消息的状态 |
| `message` | `string` | 详细信息 |

___

### ChatEvent <Score text="ChatEvent" /> 

Ƭ **ChatEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`

___

### DelegateFuncType <Score text="DelegateFuncType" /> 

Ƭ **DelegateFuncType**: (...`arg`: `unknown`[]) => `unknown` <Badge type="tip" text="other" />

#### Type declaration

• (`...arg`): `unknown`

代理回调函数签名


##### Parameters

| Name | Type |
| :------ | :------ |
| `...arg` | `unknown`[] |

##### Returns

`unknown`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `boolean` |  请求否成功 |
| `content` | `string` |  消息内容 |
| `responseCode` | `number` |  状态码 |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | UGC消费态游戏的MW侧gameId，"U_xxx" 格式 |
| `parentId` | `string` | 父模板游戏的内容库gameId |
| `path` | `string` | 本地工程路径，不需要做拼接，直接传给其他接口即可 |

___

### MGSEvent <Score text="MGSEvent" /> 

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`

___

### MGSResponse <Score text="MGSResponse" /> 

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `jsonData`): `void`

收到233回复

##### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |
| `jsonData` | `string` |

##### Returns

`void`

___

### OnArkBalanceUpdated <Score text="OnArkBalanceUpdated" /> 

Ƭ **OnArkBalanceUpdated**: (`amount`: `number`) => `void`

#### Type declaration

• (`amount`): `void`

客户端接收余额更新的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` |  新的余额 |

##### Returns

`void`

___

### OnDescriptionChange <Score text="OnDescriptionChange" /> 

Ƭ **OnDescriptionChange**: (`operationCode`: `number`, `index`: `number`, `value`: `unknown`) => `void`

#### Type declaration

• (`operationCode`, `index`, `value`): `void`

外观加载细节变化委托

##### Parameters

| Name | Type |
| :------ | :------ |
| `operationCode` | `number` |
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

| Name | Type |
| :------ | :------ |
| `character` | [`Character`](../classes/mw.Character.md) |

##### Returns

`void`

___

### OnKeyConsume <Score text="OnKeyConsume" /> 

Ƭ **OnKeyConsume**: (`player`: [`Player`](../classes/mw.Player.md), `orderId`: `string`, `boxId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`player`, `orderId`, `boxId`, `amount`, `confirmOrder`): `void`

大会员钥匙扣除服务端接收发货通知的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/mw.Player.md) |  下单的玩家Player |
| `orderId` | `string` |  订单Id |
| `boxId` | `string` |  宝箱Id |
| `amount` | `number` |  数量 |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

___

### OnMovementModeChange <Score text="OnMovementModeChange" /> 

Ƭ **OnMovementModeChange**: (`mode`: [`MovementMode`](../enums/mw.MovementMode.md)) => `void`

#### Type declaration

• (`mode`): `void`

移动状态切换委托

##### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`MovementMode`](../enums/mw.MovementMode.md) |

##### Returns

`void`

___

### OnOrderDelivered <Score text="OnOrderDelivered" /> 

Ƭ **OnOrderDelivered**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void`

#### Type declaration

• (`playerId`, `orderId`, `commodityId`, `amount`, `confirmOrder`): `void`

服务端接收发货通知的消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerId` | `number` |  下单的玩家playerId |
| `orderId` | `string` |  订单Id |
| `commodityId` | `string` |  商品Id |
| `amount` | `number` |  数量 |
| `confirmOrder` | (`bReceived`: `boolean`) => `void` |  是否收到货的回调，会发给订单服务器。如果回调false，服务器会认定未收到货，下次玩家进入游戏，还会收到该通知 |

##### Returns

`void`

___

### OnRecvChatMessage <Score text="OnRecvChatMessage" /> 

Ƭ **OnRecvChatMessage**: (`nCount`: `number`, `ChatContent`: `string`) => `void`

#### Type declaration

• (`nCount`, `ChatContent`): `void`

接收聊天信息回调方法类型

##### Parameters

| Name | Type |
| :------ | :------ |
| `nCount` | `number` |
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `boolean` | 接口data为空/网络请求失败时，end会返回true |
| `games` | [`{ `banner`: `string` ; `id`: `string` ; `likeIt`: `boolean` ; `loveQuantity`: `number` ; `packageName`: `string` ; `ugcGameName`: `string`  }`] | 接口data为空/网络请求失败时，games会返回空列表 |

___

### SetAppearanceDataCallback <Score text="SetAppearanceDataCallback" /> 

Ƭ **SetAppearanceDataCallback**: (`APIName`: `string`) => `void`

#### Type declaration

• (`APIName`): `void`

设置编辑数据完成的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `APIName` | `string` |

##### Returns

`void`

___

### StringCallback <Score text="StringCallback" /> 

Ƭ **StringCallback**: (`str`: `string`) => `void`

#### Type declaration

• (`str`): `void`

返回String的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

##### Returns

`void`

___

### StringResponse <Score text="StringResponse" /> 

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

返回string的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedReason` | `string` | 失败原因 |
| `playerIds` | `number`[] | 组队玩家的playerId数组 |

___

### TransactionType <Score text="TransactionType" /> 

Ƭ **TransactionType**: (`isSuccess`: `boolean`, `content`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `content`): `void`

商城通信回调消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSuccess` | `boolean` |  通信结果 |
| `content` | `string` |  消息内容 |

##### Returns

`void`

___

### TweenEasingFunction <Score text="TweenEasingFunction" /> 

Ƭ **TweenEasingFunction**: (`amount`: `number`) => `number`

#### Type declaration

• (`amount`): `number`

缓动函数的类型定义

##### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `number` |

##### Returns

`number`

___

### TweenInterpolationFunction <Score text="TweenInterpolationFunction" /> 

Ƭ **TweenInterpolationFunction**: (`v`: `number`[], `k`: `number`) => `number`

#### Type declaration

• (`v`, `k`): `number`

插值函数的类型定义

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number`[] |
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

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileUrl` | `{ `assetDataListUrl`: `string` ; `zipUrl`: `string`  }` | 下载链接 |
| `fileUrl.assetDataListUrl` | `string` | 模板assetDataList文件下载链接 |
| `fileUrl.zipUrl` | `string` | 模板工程下载链接 |
| `gameIdentity` | `string` | MW侧gameId |
| `gid` | `string` | 内容库gameId |
| `icon` | `string` | 模板Icon下载链接 |
| `id` | `number` | 分页用的id |
| `name` | `string` | 模板名称 |
| `packageName` | `string` | 模板包名 |
| `version` | `string` | 模板版本号 |

___

### UploadDataResponse <Score text="UploadDataResponse" /> 

Ƭ **UploadDataResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

下载角色形象的回调消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `success` | `boolean` |  上传是否成功 |

##### Returns

`void`

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

### VehicleGearDataNew <Score text="VehicleGearDataNew" /> 

Ƭ **VehicleGearDataNew**: `Object`

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
| `wheelPosition` | [`VehicleWheelPosition4W`](../enums/mw.VehicleWheelPosition4W.md) | 车轮位置 |
| `wheelRadius` | `number` | 车轮半径 |

___

### VehicleWheelDataNew <Score text="VehicleWheelDataNew" /> 

Ƭ **VehicleWheelDataNew**: `Object`

四轮载具车轮属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelAngle` | `number` | 车轮最大转向角度 |
| `wheelModel` | `string` | 车轮绑定对象ID |
| `wheelRadius` | `number` | 车轮半径 |

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

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`

___

### keyUsageInfo <Score text="keyUsageInfo" /> 

Ƭ **keyUsageInfo**: `Object`

大会员消费钥匙订单。orderId：订单ID，boxId：宝箱ID，number：购买宝箱数量，shipTime：发货时间，毫秒级时间戳

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boxId` | `string` |
| `consumeTime` | `number` |
| `number` | `number` |
| `orderId` | `string` |

___

### maskWordCheckResult <Score text="maskWordCheckResult" /> 

Ƭ **maskWordCheckResult**: `Object`

屏蔽字检测的结果

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hits` | `string`[] | 命中的文本，如果通过检测则为空 |
| `result` | `boolean` | 是否通过，true - 通过、false - 不通过 |

___

### onAppearanceDataChanged <Score text="onAppearanceDataChanged" /> 

Ƭ **onAppearanceDataChanged**: (`GUID`: `string`) => `void`

#### Type declaration

• (`GUID`): `void`

角色身上GUID切换成功回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `GUID` | `string` |

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `IPropertyOptions` | 配置 default:配置 |

#### Returns

`fn`

自定义属性

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`

___

### RemoteFunction <Score text="RemoteFunction" /> 

• **RemoteFunction**(`...options`): (`target`: `unknown`, `propertyKey`: `string`) => `void` 

函数支持Rpc调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | `FunctionOption`[] | Rpc调用方式 |

#### Returns

`fn`

自定义函数

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`

___

### Serializable <Score text="Serializable" /> 

• **Serializable**<`T`\>(`type`): `T` 

类型支持属性同步


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ConstructorType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | 自定义类 |

#### Returns

`T`

自定义类

___

### absoluteToLocal <Score text="absoluteToLocal" /> 

• **absoluteToLocal**(`geometry`, `absolutePosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化绝对坐标到相对坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `absolutePosition` | [`Vector2`](../classes/mw.Vector2.md) | 绝对坐标 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

相对坐标

___

### absoluteToViewport <Score text="absoluteToViewport" /> 

• **absoluteToViewport**(`absoluteDesktopPosition`, `outPixelPosition`, `outViewportPosition`): `void` <Badge type="tip" text="client" />

将桌面空间中几何图形的绝对坐标转换为本地视口坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absoluteDesktopPosition` | [`Vector2`](../classes/mw.Vector2.md) | 绝对桌面坐标 |
| `outPixelPosition` | [`Vector2`](../classes/mw.Vector2.md) | 可用于线的轨迹和其他用途，你需要在视口分辨率单位的空间坐标 |
| `outViewportPosition` | [`Vector2`](../classes/mw.Vector2.md) | 如果你想添加另一个小部件到视口空间相同的位置 |


___

### assetIDChangeIconUrlRequest <Score text="assetIDChangeIconUrlRequest" /> 

• **assetIDChangeIconUrlRequest**(`assets`): `Promise`<`void`\> <Badge type="tip" text="client" />

异步请求资源的ICON信息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assets` | `string`[] | 指定资源的id数组 |

#### Returns

`Promise`<`void`\>

异步回调

___

### cancelDragDrop <Score text="cancelDragDrop" /> 

• **cancelDragDrop**(): `void` <Badge type="tip" text="client" />

中断所有的DragDrop



___

### createUI <Score text="createUI" /> 

• **createUI**<`T`\>(`UIPrefabName`, `panelClass`): `T` <Badge type="tip" text="client" />

创建UIPrefab


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIPrefabName` | `string` | 指定UI自定义控件的相对于工程的路径或则相对于UI目录的路径,为空的话等于createUIOnlyClass |
| `panelClass` | () => `T` | 继承至UI身上脚本的派生类 |

#### Returns

`T`

对应的UI

___

### createUIByName <Score text="createUIByName" /> 

• **createUIByName**(`UIPrefabName`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />

创建UIPrefab


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIPrefabName` | `string` | 指定UI自定义控件的相对于工程的路径或则相对于UI目录的路径 |

#### Returns

[`UserWidget`](../classes/mw.UserWidget.md)

对应的UI

___

### createUIByPath <Score text="createUIByPath" /> 

• **createUIByPath**(`UIPath`): [`UserWidget`](../classes/mw.UserWidget.md) <Badge type="tip" text="client" />

创建UIPrefab


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UIPath` | `string` | 创建UI 的完整路径 |

#### Returns

[`UserWidget`](../classes/mw.UserWidget.md)

对应的UI

___

### createUIOnlyClass <Score text="createUIOnlyClass" /> 

• **createUIOnlyClass**<`T`\>(`panelClass`): `T` <Badge type="tip" text="client" />

创建空的UI


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UIScript`](../classes/mw.UIScript.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `panelClass` | () => `T` | 指定UI控件身上的行为脚本 |

#### Returns

`T`

对应的UI

___

### endDragDrop <Score text="endDragDrop" /> 

• **endDragDrop**(`InReply`): `void` <Badge type="tip" text="client" />

中断一个拖拽事件, 传入一个操作的事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InReply` | [`EventReply`](../classes/mw.EventReply.md) | 事件 |


___

### fetch <Score text="fetch" /> 

• **fetch**(`url`, `init?`): `Promise`<`Response`\> 

HTTP请求


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `init?` | `RequestInit` | 请求信息 default:请求信息 |

#### Returns

`Promise`<`Response`\>

响应信息

___

### findUIScript <Score text="findUIScript" /> 

• **findUIScript**(`UI`): [`UIScript`](../classes/mw.UIScript.md) <Badge type="tip" text="client" />

获取UI脚本


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UI` | [`Widget`](../classes/mw.Widget.md) | UI控件 |

#### Returns

[`UIScript`](../classes/mw.UIScript.md)

UI绑定的脚本

___

### generalHttpRequest <Score text="generalHttpRequest" /> 

• **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean` 

通用Http请求


使用示例:发送Http请求
```ts
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Core.mw.md#httpresponse) | OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/mw.HttpRequestURL.md) | EHttpRequestURL |
| `param` | `string` | string |
| `jsonContent` | `any` | any |
| `requestType` | [`HttpRequestType`](../enums/mw.HttpRequestType.md) | 0是Get 1是Post |

#### Returns

`boolean`

bool

___

### getAbsoluteSize <Score text="getAbsoluteSize" /> 

• **getAbsoluteSize**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回绝对空间中几何图形的大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回Size

___

### getAssetIconDataByAssetID <Score text="getAssetIconDataByAssetID" /> 

• **getAssetIconDataByAssetID**(`asset`): [`AssetIconData`](../classes/mw.AssetIconData.md) <Badge type="tip" text="client" />

获取资源的ICON信息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `string` | 指定资源的id |

#### Returns

[`AssetIconData`](../classes/mw.AssetIconData.md)

资源的ICON信息

___

### getCurrentMousePosition <Score text="getCurrentMousePosition" /> 

• **getCurrentMousePosition**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取当前鼠标所在的绝对位置


#### Returns

[`Vector2`](../classes/mw.Vector2.md)

绝对位置

___

### getDragDroppingContent <Score text="getDragDroppingContent" /> 

• **getDragDroppingContent**(): [`DragDropOperation`](../classes/mw.DragDropOperation.md) <Badge type="tip" text="client" />

获取当前的DragDrop事件


#### Returns

[`DragDropOperation`](../classes/mw.DragDropOperation.md)

返回当前的DragDrop事件

___

### getLastMousePosition <Score text="getLastMousePosition" /> 

• **getLastMousePosition**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取上一次鼠标所在的绝对位置


#### Returns

[`Vector2`](../classes/mw.Vector2.md)

绝对位置

___

### getLocalSize <Score text="getLocalSize" /> 

• **getLocalSize**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回局部空间中几何图形的大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回Size

___

### getLocalTopLeft <Score text="getLocalTopLeft" /> 

• **getLocalTopLeft**(`geometry`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

返回局部空间中几何图形的局部顶部/左侧


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回LeftTop

___

### getMousePositionOnPlatform <Score text="getMousePositionOnPlatform" /> 

• **getMousePositionOnPlatform**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取平台的鼠标光标位置。这是鼠标的绝对桌面位置。


#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回平台的鼠标光标位置。这是鼠标的绝对桌面位置。

___

### getMousePositionOnViewport <Score text="getMousePositionOnViewport" /> 

• **getMousePositionOnViewport**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取平台的鼠标光标在视口控件的本地空间中的位置。


#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回平台的鼠标光标在视口控件的本地空间中的位置。

___

### getPlayerScreenWidgetGeometry <Score text="getPlayerScreenWidgetGeometry" /> 

• **getPlayerScreenWidgetGeometry**(`player`): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />

获取包含添加到“player screen”的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/mw.Player.md) | 玩家在游戏世界中的位置投射到屏幕上的控制器 |

#### Returns

[`Geometry`](../classes/mw.Geometry.md)

返回所有控件的控件的几何形状

___

### getResolutionChanged <Score text="getResolutionChanged" /> 

• **getResolutionChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

分辨率改变时的回调


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`x`: `number`, `y`: `number`) => `void`\> | 传入回调函数 |


___

### getUrlParameter <Score text="getUrlParameter" /> 

• **getUrlParameter**(`url`, `parameterName`): `string` 

获取url参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `parameterName` | `string` | 参数名 |

#### Returns

`string`

参数值

___

### getViewportScale <Score text="getViewportScale" /> 

• **getViewportScale**(): `number` <Badge type="tip" text="client" />

获取应用于视口和所有小部件的当前DPI Scale。


#### Returns

`number`

返回应用于视口和所有小部件的当前DPI Scale。

___

### getViewportSize <Score text="getViewportSize" /> 

• **getViewportSize**(): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

获取游戏视口的大小。


#### Returns

[`Vector2`](../classes/mw.Vector2.md)

返回游戏视口的大小。

___

### getViewportWidgetGeometry <Score text="getViewportWidgetGeometry" /> 

• **getViewportWidgetGeometry**(): [`Geometry`](../classes/mw.Geometry.md) <Badge type="tip" text="client" />

获取包含添加到“视口”中的所有控件的控件的几何形状。你可以使用这个几何图形在绝对和本地空间的控件之间转换控件。


#### Returns

[`Geometry`](../classes/mw.Geometry.md)

返回所有控件的控件的几何形状

___

### httpRequestTransmitData <Score text="httpRequestTransmitData" /> 

• **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType`): `boolean` 

Http请求接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Core.mw.md#httpresponse) |  请求的回调 |
| `paramUrl` | `string` |  请求的参数和值 |
| `jsonContent` | `string` |  请求数据内容，json格式 |
| `requestType` | [`HttpRequestType`](../enums/mw.HttpRequestType.md) |  请求类型。HttpRequestType枚举值 |

#### Returns

`boolean`

请求是否发送成功

___

### isDragDropping <Score text="isDragDropping" /> 

• **isDragDropping**(): `boolean` <Badge type="tip" text="client" />

判断当前是否有一个DragDrop事件


#### Returns

`boolean`

boolean

___

### isUnderLocation <Score text="isUnderLocation" /> 

• **isUnderLocation**(`geometry`, `absolutePosition`): `boolean` <Badge type="tip" text="client" />

判定给定坐标是否在geometry下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `absolutePosition` | [`Vector2`](../classes/mw.Vector2.md) | 绝对坐标 |

#### Returns

`boolean`

坐标是否在geometry下

___

### localToAbsolute <Score text="localToAbsolute" /> 

• **localToAbsolute**(`geometry`, `localPosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将局部坐标转换为绝对坐标,绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根所在的空间。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `localPosition` | [`Vector2`](../classes/mw.Vector2.md) | 相对坐标 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

绝对坐标

___

### localToViewport <Score text="localToViewport" /> 

• **localToViewport**(`geometry`, `localPosition`, `outPixelPosition`, `outViewportPosition`): `void` <Badge type="tip" text="client" />

将几何体的局部坐标转换为局部视口坐标。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `localPosition` | [`Vector2`](../classes/mw.Vector2.md) | 局部坐标 |
| `outPixelPosition` | [`Vector2`](../classes/mw.Vector2.md) | 可用于线的轨迹和其他用途，你需要在视口分辨率单位的空间坐标。 |
| `outViewportPosition` | [`Vector2`](../classes/mw.Vector2.md) | 如果你想添加另一个控件到视口空间相同的位置 |


___

### screenToViewport <Score text="screenToViewport" /> 

• **screenToViewport**(`screenPosition`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(以像素为单位)转换为视口控件的本地空间。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPosition` | [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

本地位置

___

### screenToWidgetAbsolute <Score text="screenToWidgetAbsolute" /> 

• **screenToWidgetAbsolute**(`screenPosition`, `isIncludeWindowPosition?`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(像素)转换为绝对桌面程序坐标。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenPosition` | [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |
| `isIncludeWindowPosition?` | `boolean` | 是否移除游戏窗口位置(在窗口模式下有用) default:false |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

绝对桌面程序坐标

___

### screenToWidgetLocal <Score text="screenToWidgetLocal" /> 

• **screenToWidgetLocal**(`geometry`, `screenPosition`, `isIncludeWindowPosition?`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

将屏幕位置(以像素为单位)转换为具有给定几何形状的小部件的本地空间。如果bIncludeWindowPosition为真，那么这个方法也将移除游戏窗口的位置(在窗口模式下有用)。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 集合体 |
| `screenPosition` | [`Vector2`](../classes/mw.Vector2.md) | 屏幕位置 |
| `isIncludeWindowPosition?` | `boolean` | 是否移除游戏窗口位置(在窗口模式下有用) default: false |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

控件的本地位置

___

### setFocusToGameViewport <Score text="setFocusToGameViewport" /> 

• **setFocusToGameViewport**(): `void` <Badge type="tip" text="client" />

设置关注游戏窗口



___

### setInputModeGameAndUI <Score text="setInputModeGameAndUI" /> 

• **setInputModeGameAndUI**(`InWidgetToFocus?`, `InMouseLockMode?`, `hideCursorDuringCapture?`): `void` <Badge type="tip" text="client" />

设置一个输入模式，只允许UI响应用户输入，如果UI不处理它，玩家输入/玩家控制器就有机会


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InWidgetToFocus?` | [`Widget`](../classes/mw.Widget.md) | 响应输入模式的widget default:null |
| `InMouseLockMode?` | [`MouseLockMode`](../enums/mw.MouseLockMode.md) | 鼠标锁定的输入模式 default:UIType.MouseLockMode.DoNotLock |
| `hideCursorDuringCapture?` | `boolean` | 是否隐藏光标 default:true |


___

### setInputModeGameOnly <Score text="setInputModeGameOnly" /> 

• **setInputModeGameOnly**(): `void` <Badge type="tip" text="client" />

设置一个输入模式，只允许玩家输入/玩家控制器响应用户输入



___

### setInputModeUIOnly <Score text="setInputModeUIOnly" /> 

• **setInputModeUIOnly**(`InWidgetToFocus?`, `InMouseLockMode?`): `void` <Badge type="tip" text="client" />

设置只允许UI响应用户输入的输入模式。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InWidgetToFocus?` | [`Widget`](../classes/mw.Widget.md) | 响应输入模式的widget default:null |
| `InMouseLockMode?` | [`MouseLockMode`](../enums/mw.MouseLockMode.md) | 鼠标锁定的输入模式 default:UIType.MouseLockMode.DoNotLock |


___

### transformVectorAbsoluteToLocal <Score text="transformVectorAbsoluteToLocal" /> 

• **transformVectorAbsoluteToLocal**(`geometry`, `absoluteVector`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化绝对空间下矢量到局部空间下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `absoluteVector` | [`Vector2`](../classes/mw.Vector2.md) | 绝对空间矢量 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

局部空间下矢量

___

### transformVectorLocalToAbsolute <Score text="transformVectorLocalToAbsolute" /> 

• **transformVectorLocalToAbsolute**(`geometry`, `localVector`): [`Vector2`](../classes/mw.Vector2.md) <Badge type="tip" text="client" />

转化局部空间下矢量到绝对空间下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](../classes/mw.Geometry.md) | 几何体 |
| `localVector` | [`Vector2`](../classes/mw.Vector2.md) | 局部空间下矢量 |

#### Returns

[`Vector2`](../classes/mw.Vector2.md)

绝对空间矢量

___

### urlDecode <Score text="urlDecode" /> 

• **urlDecode**(`str`): `string` 

url解码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

解码后的内容

___

### urlEncode <Score text="urlEncode" /> 

• **urlEncode**(`str`): `string` 

url转码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

转码后的内容

___

### vibrate <Score text="vibrate" /> 

• **vibrate**(`enable`): `void` <Badge type="tip" text="client" />

振动开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | -true:开启震动，-false:关闭震动 |
