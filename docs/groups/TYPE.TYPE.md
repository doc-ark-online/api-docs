TYPE

# TYPE <Badge type="tip" text="Groups" /> <Score text="TYPE" />

## Table of contents
| Classes |
| :-----|
| [Action](../classes/mw.Action.md) <br> 任意参数的代理 |
| [Action1](../classes/mw.Action1.md) <br> 一个参数的代理 |
| [Action2](../classes/mw.Action2.md) <br> 两个参数的代理 |
| [Action3](../classes/mw.Action3.md) <br> 三个参数的代理 |
| [ConvertScreenResult](../classes/mw.ConvertScreenResult.md) <br> 屏幕坐标转换结果 |
| [Delegate](../classes/mw.Delegate.md) <br> 委托 |
| [HitResult](../classes/mw.HitResult.md) <br> 命中结果，包含关于轨迹的一次命中的信息，例如撞击点和该点的表面法线。 |
| [LinearColor](../classes/mw.LinearColor.md) <br> 线性RGBA颜色，r, g, b颜色值的有效范围是 0.0 <= value <= 1.0 |
| [Matrix3x3](../classes/mw.Matrix3x3.md) <br> 三维矩阵 |
| [Matrix4x4](../classes/mw.Matrix4x4.md) <br> 四维矩阵 |
| [MulticastDelegate](../classes/mw.MulticastDelegate.md) <br> 多播委托接口 |
| [MulticastGameObjectDelegate](../classes/mw.MulticastGameObjectDelegate.md) <br> 广播代理 |
| [Quaternion](../classes/mw.Quaternion.md) <br> 四元数 |
| [Rotation](../classes/mw.Rotation.md) <br> 由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。 |
| [Transform](../classes/mw.Transform.md) <br> Transform 由缩放、旋转和平移组成 |
| [Vector](../classes/mw.Vector.md) <br> 由分量 (x,y,z) 组成的三维空间中的向量 |
| [Vector2](../classes/mw.Vector2.md) <br> 由分量 (x,y) 组成的二维空间中的向量 |
| [Vector4](../classes/mw.Vector4.md) <br> 由分量 (x,y,z,w) 组成的4D齐次向量 |


| Enums |
| :-----|
| [AssetType](../enums/mw.AssetType.md) <br> 资源类型 |
| [CollisionStatus](../enums/mw.CollisionStatus.md) <br> 碰撞属性状态 |
| [GraphicsLevel](../enums/mw.GraphicsLevel.md) <br> 画质等级 |
| [Keys](../enums/mw.Keys.md) <br> 按键Key值 |
| [LanguageType](../enums/mw.LanguageType.md) <br> 游戏语言 |
| [MessageState](../enums/mw.MessageState.md) <br> 发送消息的状态 |
| [MessageType](../enums/mw.MessageType.md) <br> 发送消息的类型 |
| [NetStatus](../enums/mw.NetStatus.md) <br> 同步状态 |
| [PropertyStatus](../enums/mw.PropertyStatus.md) <br> 属性状态 |
| [RuntimePlatform](../enums/mw.RuntimePlatform.md) <br> 运行平台 |


| Interfaces |
| :-----|
| [GameObjectInfo](../interfaces/mw.GameObjectInfo.md) <br> 构建物体的信息 |
| [TypeName](../interfaces/mw.TypeName.md) <br> 类定义，使用这个可以省去类参数繁琐的类型声明    如:fun`<T>`(c:{new():T}) 可以写成 fun`<T>`(c:Class`<T>`) |


| Modules Type Aliases |
| :-----|
| **[BoolResponse](TYPE.TYPE.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[BroadcastMessageResult](TYPE.TYPE.md#broadcastmessageresult)**: `Object` <br> 发送消息的结果|
| **[DelegateFuncType](TYPE.TYPE.md#delegatefunctype)**: (...`arg`: `unknown`[]) => `unknown` <br> 代理回调函数签名|
| **[DownloadDataResponse](TYPE.TYPE.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[EmptyCallback](TYPE.TYPE.md#emptycallback)**: () => `void` <br> 空的回调函数类型|
| **[HttpResponse](TYPE.TYPE.md#httpresponse)**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void` <br> Http请求的回调消息格式|
| **[LoadAppearanceDataAllCompletedCallback](TYPE.TYPE.md#loadappearancedataallcompletedcallback)**: () => `void` <br> 角色编辑器数据加载完成后的回调|
| **[MGSEvent](TYPE.TYPE.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](TYPE.TYPE.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnArkBalanceUpdated](TYPE.TYPE.md#onarkbalanceupdated)**: (`amount`: `number`) => `void` <br> 客户端接收余额更新的消息格式|
| **[OnDescriptionChange](TYPE.TYPE.md#ondescriptionchange)**: (`operationCode`: `number`, `index`: `number`, `value`: `unknown`) => `void` <br> 外观加载细节变化委托|
| **[OnDescriptionComplete](TYPE.TYPE.md#ondescriptioncomplete)**: (`character`: [`Character`](../classes/mw.Character.md)) => `void` <br> 外观加载完成委托|
| **[OnMovementModeChange](TYPE.TYPE.md#onmovementmodechange)**: (`mode`: [`MovementMode`](../enums/mw.MovementMode.md)) => `void` <br> 移动状态切换委托|
| **[OnOrderDelivered](TYPE.TYPE.md#onorderdelivered)**: (`playerId`: `number`, `orderId`: `string`, `commodityId`: `string`, `amount`: `number`, `confirmOrder`: (`bReceived`: `boolean`) => `void`) => `void` <br> 服务端接收发货通知的消息格式|
| **[OnRecvChatMessage](TYPE.TYPE.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[OnViewLayoutSwitched](TYPE.TYPE.md#onviewlayoutswitched)**: (`newState`: `number`) => `void` <br> 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](TYPE.TYPE.md#onviewrefreshed)**: () => `void` <br> 233中窗口刷新的消息格式|
| **[SetAppearanceDataCallback](TYPE.TYPE.md#setappearancedatacallback)**: (`APIName`: `string`) => `void` <br> 设置编辑数据完成的回调|
| **[StringCallback](TYPE.TYPE.md#stringcallback)**: (`str`: `string`) => `void` <br> 返回String的回调|
| **[StringResponse](TYPE.TYPE.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TeamMatchFailureInfo](TYPE.TYPE.md#teammatchfailureinfo)**: `Object` <br> 组队跳游戏请求失败回调|
| **[TransactionType](TYPE.TYPE.md#transactiontype)**: (`isSuccess`: `boolean`, `content`: `string`) => `void` <br> 商城通信回调消息格式|
| **[TweenEasingFunction](TYPE.TYPE.md#tweeneasingfunction)**: (`amount`: `number`) => `number` <br> 缓动函数的类型定义|
| **[TweenInterpolationFunction](TYPE.TYPE.md#tweeninterpolationfunction)**: (`v`: `number`[], `k`: `number`) => `number` <br> 插值函数的类型定义|
| **[TweenUnknownProps](TYPE.TYPE.md#tweenunknownprops)**: `Record`<`string`, `any`\> <br> 补间属性的定义，用户可以自由扩展|
| **[UploadDataResponse](TYPE.TYPE.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VehicleGearData](TYPE.TYPE.md#vehiclegeardata)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelData](TYPE.TYPE.md#vehiclewheeldata)**: `Object` <br> 四轮载具车轮属性|
| **[VoidResponse](TYPE.TYPE.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](TYPE.TYPE.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|
| **[maskWordCheckResult](TYPE.TYPE.md#maskwordcheckresult)**: `Object` <br> 屏蔽字检测的结果|
| **[onAppearanceDataChanged](TYPE.TYPE.md#onappearancedatachanged)**: (`GUID`: `string`) => `void` <br> 角色身上GUID切换成功回调|


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
| `code` | [`MessageState`](../enums/mw.MessageState.md) | 发送消息的状态 |
| `message` | `string` | 详细信息 |
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
| `wheelPosition` | [`VehicleWheelPosition4W`](../enums/mw.VehicleWheelPosition4W.md) | 车轮位置 |
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