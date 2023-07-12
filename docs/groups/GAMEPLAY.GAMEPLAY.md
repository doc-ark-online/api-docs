GAMEPLAY

# GAMEPLAY <Badge type="tip" text="Groups" /> <Score text="GAMEPLAY" />

## Table of contents
| Classes |
| :-----|
| [AdvancedVehicle](../classes/mw.AdvancedVehicle.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |
| [BlockingVolume](../classes/mw.BlockingVolume.md) <br> 禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡 |
| [Camera](../classes/mw.Camera.md) <br> 摄像机 |
| [GameObject](../classes/mw.GameObject.md) <br> GameObject的基类 |
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
| [NavigationUtil](../classes/mw.NavigationUtil.md) <br> 路径查询。 |
| [Player](../classes/mw.Player.md) <br> 角色控制 |
| [ProjectileInst](../classes/mw.ProjectileInst.md) <br> 投掷物 v2 实例 |
| [ProjectileLauncher](../classes/mw.ProjectileLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 |
| [QueryUtil](../classes/mw.QueryUtil.md) <br> 射线检测范围 |
| [ScreenUtil](../classes/mw.ScreenUtil.md) <br> 屏幕视口设置相关的接口 |
| [SpringArm](../classes/mw.SpringArm.md) <br> 弹簧臂 |
| [SwimmingVolume](../classes/mw.SwimmingVolume.md) <br> 游泳区域 |
| [Trigger](../classes/mw.Trigger.md) <br> 触发器，对进入/离开触发器范围的事件进行响应 |
| [WheeledVehicle4W](../classes/mw.WheeledVehicle4W.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |


| Enums |
| :-----|
| [AreaClass](../enums/mw.AreaClass.md) <br> 寻路区域屏障寻路计算类型 |
| [CameraLocationMode](../enums/mw.CameraLocationMode.md) <br> 摄像机位置模式 |
| [CameraPreset](../enums/mw.CameraPreset.md) <br> 摄像机模式 |
| [CameraProjectionMode](../enums/mw.CameraProjectionMode.md) <br> 摄像机镜头模式 |
| [CameraRotationMode](../enums/mw.CameraRotationMode.md) <br> 摄像机旋转模式 |
| [HotWeaponAimMode](../enums/mw.HotWeaponAimMode.md) <br> 热武器瞄准模式 |
| [HotWeaponFireMode](../enums/mw.HotWeaponFireMode.md) <br> 热武器开火模式 |
| [HotWeaponState](../enums/mw.HotWeaponState.md) <br> 热武器状态 |
| [HttpRequestType](../enums/mw.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举 |
| [HttpRequestURL](../enums/mw.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应 |
| [InitialOscillatorOffset](../enums/mw.InitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始) |
| [OscillatorWaveform](../enums/mw.OscillatorWaveform.md) <br> 振荡器波形 |
| [ProjectileAccelerationEnableMode](../enums/mw.ProjectileAccelerationEnableMode.md) <br> 投掷物加速启用模式 |
| [ProjectileCollisionMode](../enums/mw.ProjectileCollisionMode.md) <br> 投掷物碰撞反馈模式 |
| [ProjectileLineStyle](../enums/mw.ProjectileLineStyle.md) <br> 投掷物轨迹绘制的显示风格 |
| [SwitchCameraBlendFunction](../enums/mw.SwitchCameraBlendFunction.md) <br> 切换摄像机时运用的混合函数 |
| [VehicleDriveMode4W](../enums/mw.VehicleDriveMode4W.md) <br> 四轮载具驱动模式 |
| [VehicleDriveMode4WNew](../enums/mw.VehicleDriveMode4WNew.md) <br> 四轮载具驱动模式 |
| [VehicleWheelPosition4W](../enums/mw.VehicleWheelPosition4W.md) <br> 四轮载具车轮位置 |
| [VehicleWheelPosition4WNew](../enums/mw.VehicleWheelPosition4WNew.md) <br> 四轮载具车轮位置 |


| Interfaces |
| :-----|
| [ShakeData](../interfaces/mw.ShakeData.md) <br> 抖动数据 |


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
| **[CameraShakeData](GAMEPLAY.GAMEPLAY.md#camerashakedata)**: `Object` <br> 摄像机震动数据|
| **[CameraSystemData](GAMEPLAY.GAMEPLAY.md#camerasystemdata)**: `Object` <br> 摄像机属性数据|
| **[Oscillator](GAMEPLAY.GAMEPLAY.md#oscillator)**: `Object` <br> 震动数值|
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

### CameraShakeData <Score text="CameraShakeData" /> 

Ƭ **CameraShakeData**: `Object`

**`Deprecated`**

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:027 reason:API重构 replacement:

摄像机震动数据

::: warning Precautions

摄像机震动数据

:::

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fovOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | FOV振荡 |
| `locXOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 位置X轴振荡 |
| `locYOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 位置Y轴振荡 |
| `locZOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 位置Z轴振荡 |
| `rotPitchOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 旋转Pitch轴振荡 |
| `rotRollOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 旋转Roll轴振荡 |
| `rotYawOscillation?` | [`Oscillator`](Core.mw.md#oscillator) | 旋转Yaw轴振荡 |
___

### CameraSystemData <Score text="CameraSystemData" /> 

Ƭ **CameraSystemData**: `Object`

**`Deprecated`**

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:027 reason:API重构 replacement:

摄像机属性数据

::: warning Precautions

主要给载具摄像机使用

:::

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraDownLimitAngle?` | `number` | **`Description`** 向下限制角度 |
| `cameraFOV?` | `number` | **`Description`** 视场 |
| `cameraLocationLagSpeed?` | `number` | **`Description`** 摄像机位置延迟速度 |
| `cameraLocationMode?` | [`CameraLocationMode`](../enums/mw.CameraLocationMode.md) | **`Description`** 摄像机位置模式 |
| `cameraProjectionMode?` | [`CameraProjectionMode`](../enums/mw.CameraProjectionMode.md) | **`Description`** 投影模式 |
| `cameraRelativeTransform?` | [`Transform`](../classes/mw.Transform.md) | **`Description`** 摄像机相对Transform |
| `cameraRotationLagSpeed?` | `number` | **`Description`** 摄像机旋转延迟速度 |
| `cameraRotationMode?` | [`CameraRotationMode`](../enums/mw.CameraRotationMode.md) | **`Description`** 摄像机朝向模式 |
| `cameraUpLimitAngle?` | `number` | **`Description`** 向上限制角度 |
| `cameraWorldTransform?` | [`Transform`](../classes/mw.Transform.md) | **`Description`** 摄像机世界Transform |
| `enableCameraCollision?` | `boolean` | **`Description`** 是否有摄像机碰撞 |
| `enableCameraLocationLag?` | `boolean` | **`Description`** 开启摄像机位置延迟 |
| `enableCameraRotationLag?` | `boolean` | **`Description`** 开启摄像机旋转延迟 |
| `enableFadeEffect?` | `boolean` | **`Description`** 是否开启物体透明 |
| `enableRaiseCamera?` | `boolean` | **`Description`** 开启碰撞抬高 |
| `fadeEffectValue?` | `number` | **`Description`** 物体透明度 |
| `orthoFarClipPlane?` | `number` | **`Description`** 正交视图远平面距离 |
| `orthoNearClipPlane?` | `number` | **`Description`** 正交视图近平面距离 |
| `orthoWidth?` | `number` | **`Description`** 正交宽度 |
| `raiseCameraHeight?` | `number` | **`Description`** 抬高高度 |
| `slotOffset?` | [`Vector`](../classes/mw.Vector.md) | **`Description`** 摄像机位置偏移 |
| `targetArmLength?` | `number` | **`Description`** 距离调整 |
| `targetOffset?` | [`Vector`](../classes/mw.Vector.md) | **`Description`** 挂点位置偏移 |
___

### Oscillator <Score text="Oscillator" /> 

Ƭ **Oscillator**: `Object`

**`Deprecated`**

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:027 reason:API重构 replacement:

震动数值

::: warning Precautions

震动数值

:::

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `amplitude?` | `number` | 正弦振荡的幅度 |
| `frequency?` | `number` | 正弦振荡的频率 |
| `waveform?` | [`OscillatorWaveform`](../enums/mw.OscillatorWaveform.md) | 用于振荡的波形类型 |
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