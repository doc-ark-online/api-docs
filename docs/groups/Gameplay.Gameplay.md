Gameplay

# Gameplay <Badge type="tip" text="Groups" /> <Score text="Gameplay" />

## Table of contents
| Classes |
| :-----|
| [AdvancedVehicle](../classes/mw.AdvancedVehicle.md) <br> 四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。 |
| [BlockingVolume](../classes/mw.BlockingVolume.md) <br> 禁行区，用于控制个角色是否可以进出此区域，角色可站立，默认阻挡 |
| [Camera](../classes/mw.Camera.md) <br> 摄像机 |
| [FireDataInfoForMultiple](../classes/mw.FireDataInfoForMultiple.md) <br> 热武器逻辑组件专用的临时类， |
| [GameInitializer](../classes/mw.GameInitializer.md) <br> 游戏初始化 |
| [GameObject](../classes/mw.GameObject.md) <br> GameObject的基类 |
| [Gizmo](../classes/mw.Gizmo.md) <br> Gizmo |
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
| [Player](../classes/mw.Player.md) <br> 角色控制 |
| [ProjectileInst](../classes/mw.ProjectileInst.md) <br> 投掷物 v2 实例 |
| [ProjectileLauncher](../classes/mw.ProjectileLauncher.md) <br> 投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主 |
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
| [HotWeaponCrossHairType](../enums/mw.HotWeaponCrossHairType.md) <br> 热武器准心类型 |
| [HotWeaponFireMode](../enums/mw.HotWeaponFireMode.md) <br> 热武器开火模式 |
| [HotWeaponState](../enums/mw.HotWeaponState.md) <br> 热武器状态 |
| [HttpRequestType](../enums/mw.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举 |
| [HttpRequestURL](../enums/mw.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应 |
| [InitialOscillatorOffset](../enums/mw.InitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始) |
| [InteractiveSlot](../enums/mw.InteractiveSlot.md) <br> 交互物支持的插槽 |
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
| **[angleCheck](Gameplay.Gameplay.md#anglecheck)**(`StartLocation`: [`Vector`](../classes/mw.Vector.md), `StartDirection`: [`Vector`](../classes/mw.Vector.md), `TargetLocation`: [`Vector`](../classes/mw.Vector.md), `Angle`: `number`): `boolean` <br> 判断终点位置是否处于起点位置在某一方向的一定角度内|
| **[boxOverlap](Gameplay.Gameplay.md#boxoverlap)**(`boxCenter`: [`Vector`](../classes/mw.Vector.md), `boxExtent`: [`Vector`](../classes/mw.Vector.md), `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 矩形范围检测|
| **[capsuleOverlap](Gameplay.Gameplay.md#capsuleoverlap)**(`capsuleCenter`: [`Vector`](../classes/mw.Vector.md), `capsuleRadius`: `number`, `halfHeight`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 胶囊体范围检测|
| **[fetch](Gameplay.Gameplay.md#fetch)**(`url`: `string`, `init?`: `RequestInit`): `Promise`<`Response`\> <br> HTTP请求|
| **[findPath](Gameplay.Gameplay.md#findpath)**(`startPos`: [`Vector`](../classes/mw.Vector.md), `endPos`: [`Vector`](../classes/mw.Vector.md)): [`Vector`](../classes/mw.Vector.md)[] <br> 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|
| **[generalHttpRequest](Gameplay.Gameplay.md#generalhttprequest)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `requestUrl`: [`HttpRequestURL`](../enums/mw.HttpRequestURL.md), `param`: `string`, `jsonContent`: `any`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getCurrentEnv](Gameplay.Gameplay.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getEditorVersion](Gameplay.Gameplay.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](Gameplay.Gameplay.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](Gameplay.Gameplay.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getGameObjectByScreenPosition](Gameplay.Gameplay.md#getgameobjectbyscreenposition)**(`SceneX`: `number`, `SceneY`: `number`, `Distance?`: `number`, `multiTrace?`: `boolean`, `onRay?`: `boolean`): [`HitResult`](../classes/mw.HitResult.md)[] <br> 获取视口相应位置的物体|
| **[getSightBeadLocation](Gameplay.Gameplay.md#getsightbeadlocation)**(): [`Vector`](../classes/mw.Vector.md) <br> 获取相机中心点所瞄准的世界位置|
| **[getUrlParameter](Gameplay.Gameplay.md#geturlparameter)**(`url`: `string`, `parameterName`: `string`): `string` <br> 获取url参数|
| **[getVersion](Gameplay.Gameplay.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[httpRequestTransmitData](Gameplay.Gameplay.md#httprequesttransmitdata)**(`response`: [`HttpResponse`](Core.mw.md#httpresponse), `paramUrl`: `string`, `jsonContent`: `string`, `requestType`: [`HttpRequestType`](../enums/mw.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[isClient](Gameplay.Gameplay.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](Gameplay.Gameplay.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](Gameplay.Gameplay.md#isserver)**(): `boolean` <br> 是否服务器运行|
| **[lineTrace](Gameplay.Gameplay.md#linetrace)**(`start`: [`Vector`](../classes/mw.Vector.md), `end`: [`Vector`](../classes/mw.Vector.md), `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `traceSkeletonOnly?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`HitResult`](../classes/mw.HitResult.md)[] <br> 射线检测|
| **[sphereOverlap](Gameplay.Gameplay.md#sphereoverlap)**(`sphereCenter`: [`Vector`](../classes/mw.Vector.md), `sphereRadius`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 球形范围检测|
| **[urlDecode](Gameplay.Gameplay.md#urldecode)**(`str`: `string`): `string` <br> url解码|
| **[urlEncode](Gameplay.Gameplay.md#urlencode)**(`str`: `string`): `string` <br> url转码|
| **[vibrate](Gameplay.Gameplay.md#vibrate)**(`enable`: `boolean`): `void` <br> 振动开关|


| Modules Type Aliases |
| :-----|
| **[CameraShakeData](Gameplay.Gameplay.md#camerashakedata)**: `Object` <br> 摄像机震动数据|
| **[CameraSystemData](Gameplay.Gameplay.md#camerasystemdata)**: `Object` <br> 摄像机属性数据|
| **[Oscillator](Gameplay.Gameplay.md#oscillator)**: `Object` <br> 震动数值|
| **[VehicleGearDataNew](Gameplay.Gameplay.md#vehiclegeardatanew)**: `Object` <br> 四轮载具挡位属性|
| **[VehicleWheelDataNew](Gameplay.Gameplay.md#vehiclewheeldatanew)**: `Object` <br> 四轮载具车轮属性|


## Modules Functions


___

### angleCheck <Score text="angleCheck" /> 

• **angleCheck**(`StartLocation`, `StartDirection`, `TargetLocation`, `Angle`): `boolean` 

判断终点位置是否处于起点位置在某一方向的一定角度内


使用示例: 如下示例原点X方向进行60度角的检测基本流程，假设目标位置（100,20,20）
```ts
if(angleCheck(new Vector(0,0,0), new Vector(1,0,0), new Vector(100,20,20), 60)) {
// 在范围内
}
else {
// 不在范围内
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLocation` | [`Vector`](../classes/mw.Vector.md) | 起始位置 |
| `StartDirection` | [`Vector`](../classes/mw.Vector.md) | 起始方向 |
| `TargetLocation` | [`Vector`](../classes/mw.Vector.md) | 目标位置 |
| `Angle` | `number` | 检测角度 |

#### Returns

`boolean`

true，在角度范围内
___

### boxOverlap <Score text="boxOverlap" /> 

• **boxOverlap**(`boxCenter`, `boxExtent`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

矩形范围检测


使用示例: 如下示例展示使用矩形范围检测的基本流程
```ts
const goList = boxOverlap(new Vector(0,0,0), new Vector(1000,0,0), 10, 10, true);
for (const item of goList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boxCenter` | [`Vector`](../classes/mw.Vector.md) | 矩形中心位置 |
| `boxExtent` | [`Vector`](../classes/mw.Vector.md) | 结束位置 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

GameObject数组
___

### capsuleOverlap <Score text="capsuleOverlap" /> 

• **capsuleOverlap**(`capsuleCenter`, `capsuleRadius`, `halfHeight`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

胶囊体范围检测


使用示例: 如下示例展示使用圆柱范围检测的基本流程
```ts
const ResultList = capsuleOverlap(new Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `capsuleCenter` | [`Vector`](../classes/mw.Vector.md) | 胶囊体中心位置 |
| `capsuleRadius` | `number` | 胶囊体半径 |
| `halfHeight` | `number` | 胶囊体半高 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

GameObject数组
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

### findPath <Score text="findPath" /> 

• **findPath**(`startPos`, `endPos`): [`Vector`](../classes/mw.Vector.md)[] 

查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点


使用示例: 创建一个名为"findPath"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，你将会在编辑器日志窗口中看到打印（注：此接口需要配合寻路区域使用，即statPos和endPos都需要在寻路区域内）
```ts
@Core.Class
export default class findPath extends Script {

    protected onStart(): void {
        let startPos = new Vector(-100,-100,0);
        let endPos = new Vector(0,0,0);
        console.log(NavigationUtil.findPath(startPos,endPos));
    }

    protected onUpdate(dt: number): void {

    }

    protected onDestroy(): void {

    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPos` | [`Vector`](../classes/mw.Vector.md) | 起点 |
| `endPos` | [`Vector`](../classes/mw.Vector.md) | 终点 |

#### Returns

[`Vector`](../classes/mw.Vector.md)[]

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

### getCurrentEnv <Score text="getCurrentEnv" /> 

• **getCurrentEnv**(): `string` 

获取当前环境


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前环境", SystemUtil.getCurrentEnv())
    }

}
```

#### Returns

`string`

当前环境,返回值包含(Dev/Test/Meta/Pre/Online/dev-oversea/test-oversea/pre-oversea/online-oversea/tc-sa-saopaulo-playza)
___

### getEditorVersion <Score text="getEditorVersion" /> 

• **getEditorVersion**(): `string` 

获取编辑器版本号


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前编辑器版本号打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前编辑器版本号", SystemUtil.getEditorVersion())
    }

}
```

#### Returns

`string`

当前编辑器版本号
___

### getFullEditorVersion <Score text="getFullEditorVersion" /> 

• **getFullEditorVersion**(): `string` 

获取完整编辑器版本号


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前完整编辑器版本号打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前完整编辑器版本号", SystemUtil.getFullEditorVersion())
    }

}
```

#### Returns

`string`

当前完整编辑器版本号
___

### getGameId <Score text="getGameId" /> 

• **getGameId**(): `string` 

获取当前游戏GameId


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏GameId pc端输出为空，移动端输出为游戏GameId
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        const gameId = SystemUtil.getGameId();
        console.log(`gameId: ${gameId}`);
    }

}
```

#### Returns

`string`

当前游戏GameId
___

### getGameObjectByScreenPosition <Score text="getGameObjectByScreenPosition" /> 

• **getGameObjectByScreenPosition**(`SceneX`, `SceneY`, `Distance?`, `multiTrace?`, `onRay?`): [`HitResult`](../classes/mw.HitResult.md)[] <Badge type="tip" text="client" />

获取视口相应位置的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SceneX` | `number` | 视口坐标X |
| `SceneY` | `number` | 视口坐标Y |
| `Distance?` | `number` | 检测距离 default:100000 |
| `multiTrace?` | `boolean` | 是否获取多个GameObject default:false |
| `onRay?` | `boolean` | 是否开启射线显示效果 default:false |

#### Returns

[`HitResult`](../classes/mw.HitResult.md)[]

点击位置的物体
___

### getSightBeadLocation <Score text="getSightBeadLocation" /> 

• **getSightBeadLocation**(): [`Vector`](../classes/mw.Vector.md) <Badge type="tip" text="client" />

获取相机中心点所瞄准的世界位置


#### Returns

[`Vector`](../classes/mw.Vector.md)

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

### getVersion <Score text="getVersion" /> 

• **getVersion**(): `string` 

获取当前游戏版本


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏版本 pc端输出为空，移动端输出为游戏版本
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        const version = SystemUtil.getVersion();
        console.log(`version: ${version}`);
    }

}
```

#### Returns

`string`

当前游戏版本
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

### isClient <Score text="isClient" /> 

• **isClient**(): `boolean` 

是否客户端运行


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```

#### Returns

`boolean`

是否客户端运行
___

### isMobile <Score text="isMobile" /> 

• **isMobile**(): `boolean` 

判断当前是否是移动端


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前是否是移动端打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前是否是移动端", SystemUtil.isMobile())
    }

}
```

#### Returns

`boolean`

是否是移动端
___

### isServer <Score text="isServer" /> 

• **isServer**(): `boolean` 

是否服务器运行


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```

#### Returns

`boolean`

___

### lineTrace <Score text="lineTrace" /> 

• **lineTrace**(`start`, `end`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `traceSkeletonOnly?`, `source?`): [`HitResult`](../classes/mw.HitResult.md)[] 

射线检测


使用示例: 如下示例展示使用射线检测的基本流程
```ts
const ResultList = lineTrace(new Vector(0,0,0), new Vector(300,0,0), true, false, [], false, gameObject, false);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Vector`](../classes/mw.Vector.md) | 起始位置 |
| `end` | [`Vector`](../classes/mw.Vector.md) | 结束位置 |
| `multiTrace?` | `boolean` | 是否穿透检测 default:false |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `traceSkeletonOnly?` | `boolean` | 是否进行具体部位的检测 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`HitResult`](../classes/mw.HitResult.md)[]

HitResult数组
___

### sphereOverlap <Score text="sphereOverlap" /> 

• **sphereOverlap**(`sphereCenter`, `sphereRadius`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

球形范围检测


使用示例: 如下示例展示使用球形范围检测的基本流程
```ts
const ResultList = sphereOverlap(new Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sphereCenter` | [`Vector`](../classes/mw.Vector.md) | 球体中心位置 |
| `sphereRadius` | `number` | 球体半径 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

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