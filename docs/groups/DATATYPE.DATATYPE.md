DATATYPE

# DATATYPE <Badge type="tip" text="Groups" /> <Score text="DATATYPE" />

## Table of contents
| Classes |
| :-----|
| [Action](../classes/Type.Action.md) <br> 任意参数的代理 |
| [Action1](../classes/Type.Action1.md) <br> 一个参数的代理 |
| [Action2](../classes/Type.Action2.md) <br> 两个参数的代理 |
| [Action3](../classes/Type.Action3.md) <br> 三个参数的代理 |
| [ConvertScreenResult](../classes/Type.ConvertScreenResult.md) <br> 屏幕坐标转换结果 |
| [Delegate](../classes/Type.Delegate.md) <br> 委托 |
| [HitResult](../classes/Gameplay.HitResult.md) <br> 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。 |
| [LinearColor](../classes/Type.LinearColor.md) <br> 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0 |
| [Matrix3x3](../classes/Type.Matrix3x3.md) <br> 三维矩阵 |
| [Matrix4x4](../classes/Type.Matrix4x4.md) <br> 四维矩阵 |
| [MulticastDelegate](../classes/Type.MulticastDelegate.md) <br> 多播委托接口 |
| [MulticastGameObjectDelegate](../classes/Type.MulticastGameObjectDelegate.md) <br> 广播代理 |
| [Quaternion](../classes/Type.Quaternion.md) <br> 四元数 |
| [Rotation](../classes/Type.Rotation.md) <br> 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 |
| [Transform](../classes/Type.Transform.md) <br> Transform 由缩放、旋转和平移组成 |
| [Vector](../classes/Type.Vector.md) <br> 由分量 (x,y,z) 组成的三维空间中的向量 |
| [Vector2](../classes/Type.Vector2.md) <br> 由分量 (x,y) 组成的二维空间中的向量 |
| [Vector4](../classes/Type.Vector4.md) <br> 由分量 (x,y,z,w) 组成的4D齐次向量 |


| Enums |
| :-----|
| [AssetType](../enums/Type.AssetType.md) <br> 资源类型 |
| [CollisionStatus](../enums/Type.CollisionStatus.md) <br> 碰撞属性状态 |
| [GraphicsLevel](../enums/Type.GraphicsLevel.md) <br> 画质等级 |
| [Keys](../enums/Type.Keys.md) <br> 按键Key值 |
| [LanguageType](../enums/Type.LanguageType.md) <br> 游戏语言 |
| [MessageState](../enums/Service.MessageState.md) <br> 发送消息的状态 |
| [MessageType](../enums/Service.MessageType.md) <br> 发送消息的类型 |
| [NetStatus](../enums/Type.NetStatus.md) <br> 同步状态 |
| [PropertyStatus](../enums/Type.PropertyStatus.md) <br> 属性状态 |
| [RuntimePlatform](../enums/Type.RuntimePlatform.md) <br> 运行平台 |


| Interfaces |
| :-----|
| [DelegateInterface](../interfaces/Type.DelegateInterface.md) <br> 委托接口 |
| [MulticastDelegateInterface](../interfaces/Type.MulticastDelegateInterface.md) <br> 多播委托接口 |
| [SpawnInfo](../interfaces/Type.SpawnInfo.md) <br> 构建物体的信息 |
| [TypeName](../interfaces/Type.TypeName.md) <br> 类定义，使用这个可以省去类参数繁琐的类型声明    如:fun`<T>`(c:{new():T}) 可以写成 fun`<T>`(c:Class`<T>`) |


| Modules Type Aliases |
| :-----|
| **[BoolResponse](DATATYPE.DATATYPE.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[BroadcastMessageResult](DATATYPE.DATATYPE.md#broadcastmessageresult)**: `Object` <br> 发送消息的结果|
| **[CameraShakeData](DATATYPE.DATATYPE.md#camerashakedata)**: `Object` <br> 摄像机震动数据|
| **[CameraSystemData](DATATYPE.DATATYPE.md#camerasystemdata)**: `Object` <br> 摄像机属性数据|
| **[DecorationTuple](DATATYPE.DATATYPE.md#decorationtuple)**: [`string`, [`Decoration`](../classes/Gameplay.Decoration.md), `Core.GameObject`] <br> 运行时态角色身上的挂件数据|
| **[DownloadDataResponse](DATATYPE.DATATYPE.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[EasingFunction](DATATYPE.DATATYPE.md#easingfunction)**: (`amount`: `number`) => `number` <br> 缓动函数的类型定义|
| **[EmptyCallback](DATATYPE.DATATYPE.md#emptycallback)**: () => `void` <br> 空的回调函数类型|
| **[HttpResponse](DATATYPE.DATATYPE.md#httpresponse)**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void` <br> Http请求的回调消息格式|
| **[InterpolationFunction](DATATYPE.DATATYPE.md#interpolationfunction)**: (`v`: `number`[], `k`: `number`) => `number` <br> 插值函数的类型定义|
| **[LoadAppearanceDataAllCompletedCallback](DATATYPE.DATATYPE.md#loadappearancedataallcompletedcallback)**: () => `void` <br> 角色编辑器数据加载完成后的回调|
| **[LoadDecorationsAllCompletedCallback](DATATYPE.DATATYPE.md#loaddecorationsallcompletedcallback)**: (`data`: [`DecorationTuple`](Gameplay.Gameplay.md#decorationtuple)[]) => `void` <br> 移动角色编辑器挂件加载完成后的回调|
| **[MGSEvent](DATATYPE.DATATYPE.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](DATATYPE.DATATYPE.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnArkBalanceUpdated](DATATYPE.DATATYPE.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnMovementStateChanged](DATATYPE.DATATYPE.md#onmovementstatechanged)**: (`mode`: [`MovementMode`](../enums/Gameplay.MovementMode.md)) => `void` <br> 移动状态切换回调|
| **[OnOrderDelivered](DATATYPE.DATATYPE.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|
| **[OnRecvChatMessage](DATATYPE.DATATYPE.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[Oscillator](DATATYPE.DATATYPE.md#oscillator)**: `Object` <br> 震动数值|
| **[ReleaseGameData](DATATYPE.DATATYPE.md#releasegamedata)**: `Object` <br> 已发布的游戏数据，用于继承服务器数据。|
| **[SetAppearanceDataCallback](DATATYPE.DATATYPE.md#setappearancedatacallback)**: (`APIName`: `string`) => `void` <br> 设置编辑数据完成的回调|
| **[StringCallback](DATATYPE.DATATYPE.md#stringcallback)**: (`str`: `string`) => `void` <br> 返回String的回调|
| **[StringResponse](DATATYPE.DATATYPE.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TeamMatchFailureInfo](DATATYPE.DATATYPE.md#teammatchfailureinfo)**: `Object` <br> 组队跳游戏请求失败回调|
| **[TransactionType](DATATYPE.DATATYPE.md#transactiontype)**: (`isSuccess`: `boolean`, `content`: `string`) => `void` <br> 商城通信回调消息格式|
| **[UnknownProps](DATATYPE.DATATYPE.md#unknownprops)**: `Record`<`string`, `any`\> <br> 补间属性的定义，用户可以自由扩展|
| **[UploadDataResponse](DATATYPE.DATATYPE.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VehicleGearData](DATATYPE.DATATYPE.md#vehiclegeardata)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelData](DATATYPE.DATATYPE.md#vehiclewheeldata)**: `Object` <br> 四轮载具车轮属性|
| **[VoidResponse](DATATYPE.DATATYPE.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](DATATYPE.DATATYPE.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|
| **[maskWordCheckResult](DATATYPE.DATATYPE.md#maskwordcheckresult)**: `Object` <br> 屏蔽字检测的结果|
| **[onAppearanceDataChanged](DATATYPE.DATATYPE.md#onappearancedatachanged)**: (`GUID`: `string`) => `void` <br> 角色身上GUID切换成功回调|


## Modules Type Aliases


___

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
| `code` | [`MessageState`](../enums/Service.MessageState.md) | 发送消息的状态 |
| `message` | `string` | 详细信息 |
___

### CameraShakeData <Score text="CameraShakeData" /> 

Ƭ **CameraShakeData**: `Object`

**`Deprecated`**

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:025 reason:接口废弃 replacement:

摄像机震动数据

::: warning Precautions

摄像机震动数据

:::

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

### DecorationTuple <Score text="DecorationTuple" /> 

Ƭ **DecorationTuple**: [`string`, [`Decoration`](../classes/Gameplay.Decoration.md), `Core.GameObject`]

运行时态角色身上的挂件数据

___

### DownloadDataResponse <Score text="DownloadDataResponse" /> 

Ƭ **DownloadDataResponse**: () => `void`

#### Type declaration

• (): `void`

下载角色形象的回调，无参数

##### Returns

`void`
___

### EasingFunction <Score text="EasingFunction" /> 

Ƭ **EasingFunction**: (`amount`: `number`) => `number`

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

### InterpolationFunction <Score text="InterpolationFunction" /> 

Ƭ **InterpolationFunction**: (`v`: `number`[], `k`: `number`) => `number`

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

### LoadAppearanceDataAllCompletedCallback <Score text="LoadAppearanceDataAllCompletedCallback" /> 

Ƭ **LoadAppearanceDataAllCompletedCallback**: () => `void`

#### Type declaration

• (): `void`

角色编辑器数据加载完成后的回调

##### Returns

`void`
___

### LoadDecorationsAllCompletedCallback <Score text="LoadDecorationsAllCompletedCallback" /> 

Ƭ **LoadDecorationsAllCompletedCallback**: (`data`: [`DecorationTuple`](Gameplay.Gameplay.md#decorationtuple)[]) => `void`

#### Type declaration

• (`data`): `void`

移动角色编辑器挂件加载完成后的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DecorationTuple`](Gameplay.Gameplay.md#decorationtuple)[] |

##### Returns

`void`
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

### OnMovementStateChanged <Score text="OnMovementStateChanged" /> 

Ƭ **OnMovementStateChanged**: (`mode`: [`MovementMode`](../enums/Gameplay.MovementMode.md)) => `void`

#### Type declaration

• (`mode`): `void`

移动状态切换回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`MovementMode`](../enums/Gameplay.MovementMode.md) |

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

### Oscillator <Score text="Oscillator" /> 

Ƭ **Oscillator**: `Object`

**`Deprecated`**

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:025 reason:接口废弃 replacement:

震动数值

::: warning Precautions

震动数值

:::

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amplitude?` | `number` | 正弦振荡的幅度 |
| `frequency?` | `number` | 正弦振荡的频率 |
| `waveform?` | [`EOscillatorWaveform`](../enums/Gameplay.EOscillatorWaveform.md) | 用于振荡的波形类型 |
___

### ReleaseGameData <Score text="ReleaseGameData" /> 

Ƭ **ReleaseGameData**: `Object`

已发布的游戏数据，用于继承服务器数据。

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameCover` | `string` | 已发布的游戏封面路径（存放于'项目目录/Pictures'下） |
| `gameName` | `string` | 已发布的游戏名称 |
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

### UnknownProps <Score text="UnknownProps" /> 

Ƭ **UnknownProps**: `Record`<`string`, `any`\>

补间属性的定义，用户可以自由扩展

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