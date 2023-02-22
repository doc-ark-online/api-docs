Gameplay

# Gameplay <Badge type="tip" text="Groups" /> <Score text="Gameplay" />

## Table of contents
| Classes |
| :-----|
| [GameInitializer](../classes/Extension.GameInitializer.md) <br> 游戏初始化 |
| [AbilityObject](../classes/Gameplay.AbilityObject.md) <br> 能力对象，提供角色按指定一系列的能力序列进行动画自动切换的功能。 |
| [AbilityState](../classes/Gameplay.AbilityState.md) <br> 能力状态，用于读取/配置能力对象的能力相关的属性 |
| [Anchor](../classes/Gameplay.Anchor.md) <br> 空锚点，用于位置标识，打组使用时可做作为根节点，可以对一组物体整体进行位移、旋转、缩放。动态生成无实际使用意义，不推荐。 |
| [BlockingArea](../classes/Gameplay.BlockingArea.md) <br> 禁行区，用于控制个角色是否可以进出此区域，默认阻挡，角色可站立 |
| [BlockingAreaManager](../classes/Gameplay.BlockingAreaManager.md) <br> 禁行区管理类,用于调用禁行区的全局方法 |
| [CameraSystem](../classes/Gameplay.CameraSystem.md) <br> 摄像机系统，是依托于角色，作为角色的组件存在，在此组件下还有一个用来确定视口位置的摄像机组件 |
| [EffectLogical](../classes/Gameplay.EffectLogical.md) <br> 区域效果是一个可以播放特效并带有范围判定的一个对象。开发者可以自定义范围的形状，然后获取该范围内的角色。该对象在游戏开放中常用于释放带变化范围判定的特效技能，例如蓄力重击和蔓延伤害技能 |
| [Equipment](../classes/Gameplay.Equipment.md) <br> 装备对象，无自带模型，有三种状态判定（无装备，有装备收起状态，有装备持有状态），动态生成需自行配置各状态的动作姿态及绑定插槽。 |
| [FireDataInfoForMultiple](../classes/Gameplay.FireDataInfoForMultiple.md) <br> 热武器逻辑组件专用的临时类， |
| [GameObject](../classes/Gameplay.GameObject.md) <br> GameObject的基类 |
| [HitResult](../classes/Gameplay.HitResult.md) <br> 命中结果 |
| [HotWeapon](../classes/Gameplay.HotWeapon.md) <br> 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 |
| [HotWeaponAccuracyOfFireComponent](../classes/Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 |
| [HotWeaponAimComponent](../classes/Gameplay.HotWeaponAimComponent.md) <br> 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 |
| [HotWeaponFireComponent](../classes/Gameplay.HotWeaponFireComponent.md) <br> 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 |
| [HotWeaponLoadComponent](../classes/Gameplay.HotWeaponLoadComponent.md) <br> 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 |
| [HotWeaponRecoilForceComponent](../classes/Gameplay.HotWeaponRecoilForceComponent.md) <br> 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） |
| [HotWeaponReloadComponent](../classes/Gameplay.HotWeaponReloadComponent.md) <br> 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 |
| [InstanceStaticMesh](../classes/Gameplay.InstanceStaticMesh.md) <br> InstanceStaticMesh |
| [InteractiveObject](../classes/Gameplay.InteractiveObject.md) <br> 交互物功能对象 V2 |
| [Interactor](../classes/Gameplay.Interactor.md) <br> 交互物功能对象，提供角色与场景中物体的交互功能，交互即将角色切换到特定姿态、位置并绑定到交互物上的过程。此对象常用于场景中椅子，沙发，器材等位置。 |
| [NavModifierVolume](../classes/Gameplay.NavModifierVolume.md) <br> 提供基础寻路数据 |
| [Player](../classes/Gameplay.Player.md) <br> 角色控制 |
| [PlayerStart](../classes/Gameplay.PlayerStart.md) <br> 玩家起始 |
| [Prefab](../classes/Gameplay.Prefab.md) <br> 预制体 |
| [Projectile](../classes/Gameplay.Projectile.md) <br> 投掷物逻辑对象 |
| [ProjectileInst](../classes/Gameplay.ProjectileInst.md) <br> 投掷物 v2 实例 |
| [ProjectileLauncher](../classes/Gameplay.ProjectileLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 |
| [SkeletalMesh](../classes/Gameplay.SkeletalMesh.md) <br> 骨骼模型逻辑对象。用于对骨骼模型进行操作。 |
| [SmoothSync](../classes/Gameplay.SmoothSync.md) <br> 平滑组件 |
| [SomatotypeBase](../classes/Gameplay.SomatotypeBase.md) <br> 体型基类 |
| [StaticMesh](../classes/Gameplay.StaticMesh.md) <br> StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口 |
| [SwimmingVolume](../classes/Gameplay.SwimmingVolume.md) <br> 游泳区域 |
| [Trigger](../classes/Gameplay.Trigger.md) <br> 触发器，对进入/离开触发器范围的事件进行响应 |
| [Union](../classes/Gameplay.Union.md) <br> 合并对象 |
| [VehicleCameraSetting](../classes/Gameplay.VehicleCameraSetting.md) <br> 载具摄像机，对应编辑器对象管理器中载具下挂载的摄像机对象 |
| [WheeledVehicle4W](../classes/Gameplay.WheeledVehicle4W.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |
| [Gizmo](../classes/MobileEditor.Gizmo.md) <br> Gizmo |
| [ConvertScreenResult](../classes/Type.ConvertScreenResult.md) <br> 屏幕坐标转换结果 |


| Enums |
| :-----|
| [AbilityStateControlType](../enums/Gameplay.AbilityStateControlType.md) <br> 技能状态控制枚举 |
| [AreaClass](../enums/Gameplay.AreaClass.md) <br> 寻路区域屏障寻路计算类型 |
| [CameraLocationMode](../enums/Gameplay.CameraLocationMode.md) <br> 摄像机位置模式 |
| [CameraMode](../enums/Gameplay.CameraMode.md) <br> 摄像机模式 |
| [CameraProjectionMode](../enums/Gameplay.CameraProjectionMode.md) <br> 摄像机镜头模式 |
| [CameraRotationMode](../enums/Gameplay.CameraRotationMode.md) <br> 摄像机旋转模式 |
| [EquipmentStatus](../enums/Gameplay.EquipmentStatus.md) <br> 装备状态 |
| [HotWeaponAimMode](../enums/Gameplay.HotWeaponAimMode.md) <br> 热武器瞄准模式 |
| [HotWeaponCrossHairType](../enums/Gameplay.HotWeaponCrossHairType.md) <br> 热武器准心类型 |
| [HotWeaponFireMode](../enums/Gameplay.HotWeaponFireMode.md) <br> 热武器开火模式 |
| [HotWeaponState](../enums/Gameplay.HotWeaponState.md) <br> 热武器状态 |
| [InteractiveSlot](../enums/Gameplay.InteractiveSlot.md) <br> 交互物支持的插槽 |
| [ProjectileAccelerationEnableMode](../enums/Gameplay.ProjectileAccelerationEnableMode.md) <br> 投掷物加速启用模式 |
| [ProjectileCollisionMode](../enums/Gameplay.ProjectileCollisionMode.md) <br> 投掷物碰撞反馈模式 |
| [ProjectileLineStyle](../enums/Gameplay.ProjectileLineStyle.md) <br> 投掷物轨迹绘制的显示风格 |
| [VehicleDriveMode4W](../enums/Gameplay.VehicleDriveMode4W.md) <br> 四轮载具驱动模式 |
| [VehicleWheelPosition4W](../enums/Gameplay.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置 |
| [HttpRequestType](../enums/Network.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举 |
| [HttpRequestURL](../enums/Network.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应 |


| Interfaces |
| :-----|
| [RequestInit](../interfaces/Network.RequestInit.md) <br> HTTP请求信息的对象 |
| [Response](../interfaces/Network.Response.md) <br> HTTP响应信息的对象 |
| [SpawnInfo](../interfaces/Type.SpawnInfo.md) <br> 构建物体的信息 |


| Modules Type Aliases |
| :-----|
| **[CameraShakeData](../modules/Gameplay.Gameplay.md#camerashakedata)**: `Object` <br> 空的回调函数类型|
| **[CameraSystemData](../modules/Gameplay.Gameplay.md#camerasystemdata)**: `Object` <br> 空的回调函数类型|
| **[Oscillator](../modules/Gameplay.Gameplay.md#oscillator)**: `Object` <br> 设置编辑数据完成的回调|
| **[VehicleGearData](../modules/Gameplay.Gameplay.md#vehiclegeardata)**: `Object` <br> 角色身上GUID切换成功回调|
| **[VehicleWheelData](../modules/Gameplay.Gameplay.md#vehiclewheeldata)**: `Object` <br> 角色身上GUID切换成功回调|
| **[HttpResponse](../modules/Network.Network.md#httpresponse)**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void` <br> Http请求的回调消息格式|
| **[TransactionType](../modules/Network.Network.md#transactiontype)**: (`isSuccess`: `boolean`, `content`: `string`) => `void` <br> 商城通信回调消息格式|


| Modules Functions |
| :-----|
| **[addOutlineEffect](../modules/Gameplay.Gameplay.md#addoutlineeffect)**(`obj`: `GameObject`, `OutlineColor?`: [`LinearColor`](../classes/Type.Type.LinearColor.md), `OutlineWidth?`: `number`, `OutlineDepthOffset?`: `number`, `OutlineClampValue?`: `number`, `considerCameraPosition?`: `boolean`, `outlineSilhouetteOnly?`: `boolean`): `void` <br> 为目标物体添加描边效果,不需要后处理，描边效果会被其他物体遮挡|
| **[angleCheck](../modules/Gameplay.Gameplay.md#anglecheck)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `StartDirection`: [`Vector`](../classes/Type.Type.Vector.md), `TargetLocation`: [`Vector`](../classes/Type.Type.Vector.md), `Angle`: `number`): `boolean` <br> 角度检查|
| **[asyncFindPathToLocation](../modules/Gameplay.Gameplay.md#asyncfindpathtolocation)**(`startPos`: [`Vector`](../classes/Type.Type.Vector.md), `endPos`: [`Vector`](../classes/Type.Type.Vector.md)): [`Vector`](../classes/Type.Type.Vector.md)[] <br> 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|
| **[asyncGetCurrentPlayer](../modules/Gameplay.Gameplay.md#asyncgetcurrentplayer)**(): `Promise`<[`Player`](../classes/Gameplay.Gameplay.Player.md)\> <br> 异步获取当前玩家|
| **[asyncGetPlayer](../modules/Gameplay.Gameplay.md#asyncgetplayer)**(`playerId`: `number`): `Promise`<[`Player`](../classes/Gameplay.Gameplay.Player.md)\> <br> 异步根据playerId获取Player|
| **[boxOverlap](../modules/Gameplay.Gameplay.md#boxoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `EndLocation`: [`Vector`](../classes/Type.Type.Vector.md), `Width`: `number`, `Height`: `number`, `debug`: `boolean`): `Core.GameObject`[] <br> 矩形范围检测|
| **[clearMoveTo](../modules/Gameplay.Gameplay.md#clearmoveto)**(`player`: [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md)): `void` <br> 导航停止|
| **[cylinderOverlap](../modules/Gameplay.Gameplay.md#cylinderoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `Radius`: `number`, `Height`: `number`, `debug`: `boolean`): `Core.GameObject`[] <br> 圆柱范围检测|
| **[getAllPlayers](../modules/Gameplay.Gameplay.md#getallplayers)**(): [`Player`](../classes/Gameplay.Gameplay.Player.md)[] <br> 当前所有Player|
| **[getClickGameObjectByScene](../modules/Gameplay.Gameplay.md#getclickgameobjectbyscene)**(`SceneX`: `number`, `SceneY`: `number`, `Distance`: `number`, `multiTrace`: `boolean`, `onRay`: `boolean`): [`HitResult`](../classes/Gameplay.Gameplay.HitResult.md)[] <br> 获取点击屏幕位置的物体|
| **[getCurrentPlayer](../modules/Gameplay.Gameplay.md#getcurrentplayer)**(): [`Player`](../classes/Gameplay.Gameplay.Player.md) <br> 获取当前玩家|
| **[getPlayer](../modules/Gameplay.Gameplay.md#getplayer)**(`playerId`: `number`): [`Player`](../classes/Gameplay.Gameplay.Player.md) <br> 获取玩家|
| **[getShootDir](../modules/Gameplay.Gameplay.md#getshootdir)**(`character`: [`Character`](../classes/Gameplay.Gameplay.Character.md), `startLoc`: [`Vector`](../classes/Type.Type.Vector.md), `distance?`: `number`): [`Vector`](../classes/Type.Type.Vector.md) <br> 获取某位置指向屏幕中心瞄准位置的向量|
| **[lineTrace](../modules/Gameplay.Gameplay.md#linetrace)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `EndLocation`: [`Vector`](../classes/Type.Type.Vector.md), `multiTrace`: `boolean`, `debug`: `boolean`): [`HitResult`](../classes/Gameplay.Gameplay.HitResult.md)[] <br> 射线检测|
| **[moveTo](../modules/Gameplay.Gameplay.md#moveto)**(`player`: [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md), `Location`: [`Vector`](../classes/Type.Type.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 寻路移动|
| **[parabolicTrace](../modules/Gameplay.Gameplay.md#parabolictrace)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `Direction`: [`Vector`](../classes/Type.Type.Vector.md), `InitSpeed`: `number`, `Range`: `number`, `CapsuleRadius`: `number`, `IgnoreObjectTypes`: [`ObjectTypeQuery`](../enums/Gameplay.Gameplay.ObjectTypeQuery.md)[], `debug`: `boolean`): [`HitResult`](../classes/Gameplay.Gameplay.HitResult.md) <br> 抛物线检测|
| **[removeOutlineEffect](../modules/Gameplay.Gameplay.md#removeoutlineeffect)**(`obj`: `GameObject`): `void` <br> 移除描边效果|
| **[setGlobalAsyncTimeout](../modules/Gameplay.Gameplay.md#setglobalasynctimeout)**(`overtime`: `number`): `void` <br> 设置异步回调超时时间，单位毫秒，默认5000|
| **[setGlobalTimeDilation](../modules/Gameplay.Gameplay.md#setglobaltimedilation)**(`Time`: `number`): `void` <br> 设置世界整体膨胀时间速度|
| **[setPlayerPassableForAllArea](../modules/Gameplay.Gameplay.md#setplayerpassableforallarea)**(`character`: [`Character`](../classes/Gameplay.Gameplay.Character.md), `canPass`: `boolean`): `void` <br> 设置某个玩家对所有禁行区的通过权限|
| **[setStaticMeshColor](../modules/Gameplay.Gameplay.md#setstaticmeshcolor)**(`staticMesh`: [`StaticMesh`](../classes/Gameplay.Gameplay.StaticMesh.md), `color`: [`LinearColor`](../classes/Type.Type.LinearColor.md)): `void` <br> 设置物体静态网格材质颜色|
| **[sphereOverlap](../modules/Gameplay.Gameplay.md#sphereoverlap)**(`StartLocation`: [`Vector`](../classes/Type.Type.Vector.md), `Radius`: `number`, `debug`: `boolean`): `Core.GameObject`[] <br> 圆形范围检测|
| **[vibrate](../modules/Gameplay.Gameplay.md#vibrate)**(`enable`: `boolean`): `void` <br> 振动开关|
| **[fetch](../modules/Network.Network.md#fetch)**(`url`: `string`, `init?`: [`RequestInit`](../interfaces/Network.Network.RequestInit.md)): `Promise`<[`Response`](../interfaces/Network.Network.Response.md)\> <br> HTTP请求|
| **[generalHttpRequest](../modules/Network.Network.md#generalhttprequest)**(`response`: [`HttpResponse`](Network.Network.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/Network.Network.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getUrlParameter](../modules/Network.Network.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string` <br> 获取url参数|
| **[httpRequestTransmitData](../modules/Network.Network.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Network.Network.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/Network.Network.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[urlDecode](../modules/Network.Network.md#urldecode)**(`str`: `string`): `string` <br> url解码|
| **[urlEncode](../modules/Network.Network.md#urlencode)**(`str`: `string`): `string` <br> url转码|
| **[getCurrentEnv](../modules/Util.Util.SystemUtil.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getDefaultGraphicsCPULevel](../modules/Util.Util.SystemUtil.md#getdefaultgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取默认CPU画质等级|
| **[getDefaultGraphicsGPULevel](../modules/Util.Util.SystemUtil.md#getdefaultgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取默认GPU画质等级|
| **[getEditorVersion](../modules/Util.Util.SystemUtil.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](../modules/Util.Util.SystemUtil.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](../modules/Util.Util.SystemUtil.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getGraphicsCPULevel](../modules/Util.Util.SystemUtil.md#getgraphicscpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取当前CPU画质等级|
| **[getGraphicsGPULevel](../modules/Util.Util.SystemUtil.md#getgraphicsgpulevel)**(): [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md) <br> 获取当前GPU画质等级|
| **[getVersion](../modules/Util.Util.SystemUtil.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[isClient](../modules/Util.Util.SystemUtil.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](../modules/Util.Util.SystemUtil.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](../modules/Util.Util.SystemUtil.md#isserver)**(): `boolean` <br> 是否服务器运行|
| **[setGraphicsCPULevel](../modules/Util.Util.SystemUtil.md#setgraphicscpulevel)**(`CPULevel`: [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)): `void` <br> 设置当前CPU画质等级|
| **[setGraphicsGPULevel](../modules/Util.Util.SystemUtil.md#setgraphicsgpulevel)**(`GPULevel`: [`GraphicsLevel`](../enums/Type.Type.GraphicsLevel.md)): `void` <br> 设置当前GPU画质等级|
| **[getViewportSize](../modules/Util.Util.WindowUtil.md#getviewportsize)**(): [`Vector2`](../classes/Type.Type.Vector2.md) <br> 获取当前游戏窗口尺寸|

