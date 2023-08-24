GAMEPLAY

# GAMEPLAY <Badge type="tip" text="Groups" /> <Score text="GAMEPLAY" />

## Table of contents
| Classes |
| :-----|
| [AdvancedVehicle](../classes/mw.AdvancedVehicle.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |
| [BlockingVolume](../classes/mw.BlockingVolume.md) <br> 禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡 |
| [Camera](../classes/mw.Camera.md) <br> 摄像机 |
| [GameObject](../classes/mw.GameObject.md) <br> pawn、camera、hotweapon、sound等都继承自GameObject，GameObject为基类。提供复制删除物体，查找获取物体、子物体、脚本等功能。 |
| [HotWeapon](../classes/mw.HotWeapon.md) <br> 热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。 |
| [HotWeaponAccuracyOfFireComponent](../classes/mw.HotWeaponAccuracyOfFireComponent.md) <br> 热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度 |
| [HotWeaponAimComponent](../classes/mw.HotWeaponAimComponent.md) <br> 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 |
| [HotWeaponFireComponent](../classes/mw.HotWeaponFireComponent.md) <br> 热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑 |
| [HotWeaponLoadComponent](../classes/mw.HotWeaponLoadComponent.md) <br> 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 |
| [HotWeaponRecoilForceComponent](../classes/mw.HotWeaponRecoilForceComponent.md) <br> 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） |
| [HotWeaponReloadComponent](../classes/mw.HotWeaponReloadComponent.md) <br> 热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑 |
| [Interactor](../classes/mw.Interactor.md) <br> 交互物功能对象 V2 |
| [MaterialInstance](../classes/mw.MaterialInstance.md) <br> 材质实例类 |
| [Model](../classes/mw.Model.md) <br> 接口主要为物理参数设置接口与材质参数设置接口 |
| [NavModifierVolume](../classes/mw.NavModifierVolume.md) <br> 寻路动态修饰区 |
| [Navigation](../classes/mw.Navigation.md) <br> 路径查询。 |
| [ObjectLauncher](../classes/mw.ObjectLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 |
| [Player](../classes/mw.Player.md) <br> 角色控制 |
| [ProjectileInst](../classes/mw.ProjectileInst.md) <br> 投掷物发射器专用实例对象 |
| [ProjectileMovement](../classes/mw.ProjectileMovement.md) <br> 投掷物功能类，绑定的逻辑对象请自行关闭物理模拟，运动过程中会忽略相机、禁行区、功能类不考虑移动同步 |
| [ScreenUtil](../classes/mw.ScreenUtil.md) <br> 屏幕视口设置相关的接口 |
| [SpringArm](../classes/mw.SpringArm.md) <br> 弹簧臂 |
| [SwimmingVolume](../classes/mw.SwimmingVolume.md) <br> 游泳区域 |
| [Trigger](../classes/mw.Trigger.md) <br> 触发器，对进入/离开触发器范围的事件进行响应 |


| Enums |
| :-----|
| [CameraPositionMode](../enums/mw.CameraPositionMode.md) <br> 摄像机位置模式 |
| [CameraPreset](../enums/mw.CameraPreset.md) <br> 摄像机模式 |
| [CameraProjectionMode](../enums/mw.CameraProjectionMode.md) <br> 摄像机镜头模式 |
| [CameraRotationMode](../enums/mw.CameraRotationMode.md) <br> 摄像机旋转模式 |
| [CameraSwitchBlendFunction](../enums/mw.CameraSwitchBlendFunction.md) <br> 切换摄像机时运用的混合函数 |
| [HotWeaponAimMode](../enums/mw.HotWeaponAimMode.md) <br> 热武器瞄准模式 |
| [HotWeaponFireMode](../enums/mw.HotWeaponFireMode.md) <br> 热武器开火模式 |
| [HotWeaponState](../enums/mw.HotWeaponState.md) <br> 热武器状态 |
| [HttpRequestType](../enums/mw.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举 |
| [HttpRequestURL](../enums/mw.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应 |
| [InitialOscillatorOffset](../enums/mw.InitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始) |
| [NavModifierType](../enums/mw.NavModifierType.md) <br> 寻路动态修饰区类型，不同类型在寻路计算中成本不同，影响寻路结果 |
| [OscillatorWaveform](../enums/mw.OscillatorWaveform.md) <br> 振荡器波形 |
| [ProjectileMovementStatus](../enums/mw.ProjectileMovementStatus.md) <br> 投掷物移动状态 |
| [VehicleDriveMode4W](../enums/mw.VehicleDriveMode4W.md) <br> 四轮载具驱动模式 |
| [VehicleDriveMode4WNew](../enums/mw.VehicleDriveMode4WNew.md) <br> 四轮载具驱动模式 |
| [VehicleWheelPosition4W](../enums/mw.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置 |
| [VehicleWheelPosition4WNew](../enums/mw.VehicleWheelPosition4WNew.md) <br> 四轮载具车轮位置 |


| Interfaces |
| :-----|
| [CameraShakeInfo](../interfaces/mw.CameraShakeInfo.md) <br> 抖动数据 |
| [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md) <br> 投掷物配置类型 |


| Modules Functions |
| :-----|
| **[fetch](GAMEPLAY.GAMEPLAY.md#fetch)**(`url`: `string`, `init?`: `RequestInit`): `Promise`<`Response`\> <br> HTTP请求|
| **[generalHttpRequest](GAMEPLAY.GAMEPLAY.md#generalhttprequest)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/mw.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getUrlParameter](GAMEPLAY.GAMEPLAY.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string` <br> 获取url参数|
| **[httpRequestTransmitData](GAMEPLAY.GAMEPLAY.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[urlDecode](GAMEPLAY.GAMEPLAY.md#urldecode)**(`str`: `string`): `string` <br> url解码|
| **[urlEncode](GAMEPLAY.GAMEPLAY.md#urlencode)**(`str`: `string`): `string` <br> url转码|
| **[vibrate](GAMEPLAY.GAMEPLAY.md#vibrate)**(`enable`: `boolean`): `void` <br> 振动开关|


| Modules Type Aliases |
| :-----|
| **[VehicleGearDataNew](GAMEPLAY.GAMEPLAY.md#vehiclegeardatanew)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelDataNew](GAMEPLAY.GAMEPLAY.md#vehiclewheeldatanew)**: `Object` <br> 四轮载具车轮属性|


## Modules Functions


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
## Modules Type Aliases


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

### VehicleWheelDataNew <Score text="VehicleWheelDataNew" /> 

Ƭ **VehicleWheelDataNew**: `Object`

四轮载具车轮属性

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelAngle` | `number` | 车轮最大转向角度 |
| `wheelModel` | `string` | 车轮绑定对象ID |
| `wheelRadius` | `number` | 车轮半径 |