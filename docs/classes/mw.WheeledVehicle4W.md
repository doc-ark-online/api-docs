[GAMEPLAY](../groups/Core.GAMEPLAY.md) / WheeledVehicle4W

# WheeledVehicle4W <Badge type="tip" text="Class" /> <Score text="WheeledVehicle4W" />

四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。

::: warning Precautions

注意事项
1. 在未设置有效的Driver之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由setDriver时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在5个以内。

:::

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`WheeledVehicle4W`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[brakingTorque](mw.WheeledVehicle4W.md#brakingtorque)**(): `number` <br> 获取制动力矩。单位：牛*米（N*m）|
| **[currentGearLevel](mw.WheeledVehicle4W.md#currentgearlevel)**(): `number` <br> 获取当前档位级别|
| **[driveMode](mw.WheeledVehicle4W.md#drivemode)**(): [`VehicleDriveMode4W`](../enums/mw.VehicleDriveMode4W.md) <br> 获取载具驱动模式|
| **[friction](mw.WheeledVehicle4W.md#friction)**(): `number` <br> 获取载具摩擦力系数|
| **[handbrakeInputEnable](mw.WheeledVehicle4W.md#handbrakeinputenable)**(`useHandbrake`: `boolean`): `void` <br> 手刹。|
| **[mass](mw.WheeledVehicle4W.md#mass)**(): `number` <br> 获取载具质量。单位：千克（kg）|
| **[maxEngineRPM](mw.WheeledVehicle4W.md#maxenginerpm)**(): `number` <br> 获取最大发动机转速。单位：转/分（r/min）|
| **[maxGearLevel](mw.WheeledVehicle4W.md#maxgearlevel)**(): `number` <br> 获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。|
| **[velocity](mw.WheeledVehicle4W.md#velocity)**(): `number` <br> 获取当前行驶速度。单位：米/秒（m/s）|
| **[wheelNum](mw.WheeledVehicle4W.md#wheelnum)**(): `number` <br> 获取车轮数量|


::: details 点击查看继承
| Accessors |
| :-----|
| **[guid](mw.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isLocked](mw.GameObject.md#islocked)**(): `boolean` <br> 获取对象是否锁定|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[isStatic](mw.GameObject.md#isstatic)**(): `boolean` <br> 获取对象是否静态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[sourceAssetGuid](mw.GameObject.md#sourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[useUpdate](mw.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[gearDown](mw.WheeledVehicle4W.md#geardown)**(): `void` <br> 降档，立即切换。|
| **[gearUp](mw.WheeledVehicle4W.md#gearup)**(): `void` <br> 升档，立即切换。|
| **[getGearRatio](mw.WheeledVehicle4W.md#getgearratio)**(`gearLevel`: `number`): [`VehicleGearData`](../modules/Core.mw.md#vehiclegeardata) <br> 获取指定档位属性|
| **[getWheelData](mw.WheeledVehicle4W.md#getwheeldata)**(`wheelId`: `number`): [`VehicleWheelData`](../modules/Core.mw.md#vehiclewheeldata) <br> 获取车轮属性|
| **[getWheelMaxSteerAngle](mw.WheeledVehicle4W.md#getwheelmaxsteerangle)**(`wheelId`: `number`): `number` <br> 获取车轮最大转向角度。单位：度（°）|
| **[getWheelPosition](mw.WheeledVehicle4W.md#getwheelposition)**(`wheelId`: `number`): [`VehicleWheelPosition4W`](../enums/mw.VehicleWheelPosition4W.md) <br> 获取车轮位置，前轮或者后轮|
| **[getWheelRadius](mw.WheeledVehicle4W.md#getwheelradius)**(`wheelId`: `number`): `number` <br> 获取车轮半径。单位：厘米（cm）|
| **[setCullDistance](mw.WheeledVehicle4W.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setDriver](mw.WheeledVehicle4W.md#setdriver)**(`inDriver`: [`Player`](mw.Player.md)): `void` <br> 设置载具驾驶员。只有驾驶员才可以操作载具|
| **[setSimulatePhysics](mw.WheeledVehicle4W.md#setsimulatephysics)**(`shouldSimulate`: `boolean`): `void` <br> 设置四轮载具是否开启物理模拟计算，需要在客户端调用。|
| **[setSteeringInput](mw.WheeledVehicle4W.md#setsteeringinput)**(`newInput`: `number`): `void` <br> 控制载具左/右转向。|
| **[setThrottleInput](mw.WheeledVehicle4W.md#setthrottleinput)**(`newInput`: `number`): `void` <br> 控制载具前进/后退。|
| **[switchCamera](mw.WheeledVehicle4W.md#switchcamera)**(`useVehicleCamera`: `boolean`): `void` <br> 在载具和角色之间切换摄像机。|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](mw.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](mw.Vector.md), `BoxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](mw.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): `undefined` \| [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoxCenter](mw.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScriptByGuid](mw.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`guid`: `string`, `position?`: [`Vector`](mw.Vector.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


## Accessors

### brakingTorque <Score text="brakingTorque" /> 

• `get` **brakingTorque**(): `number` 

获取制动力矩。单位：牛*米（N*m）


#### Returns

`number`

当前制动力矩

___

### currentGearLevel <Score text="currentGearLevel" /> 

• `get` **currentGearLevel**(): `number` 

获取当前档位级别


#### Returns

`number`

当前档位级别

• `set` **currentGearLevel**(`level`): `void` <Badge type="tip" text="client" />

设置载具档位(直接变换档位到某一档)。


::: warning Precautions

1. 注意输入参数的取值范围。
2. 设置与当前车速不匹配的档位，会自动调整到匹配的档位。如当前车速适应1档，直接设置3档，会逐级（3-2-1）降到1档。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` |  档位 Min = -1(倒车)， Max = 设定的最大档位 |


___

### driveMode <Score text="driveMode" /> 

• `get` **driveMode**(): [`VehicleDriveMode4W`](../enums/mw.VehicleDriveMode4W.md) 

获取载具驱动模式


#### Returns

[`VehicleDriveMode4W`](../enums/mw.VehicleDriveMode4W.md)

载具驱动模式

___

### friction <Score text="friction" /> 

• `get` **friction**(): `number` 

获取载具摩擦力系数


#### Returns

`number`

载具摩擦力系数

___

### handbrakeInputEnable <Score text="handbrakeInputEnable" /> 

• `set` **handbrakeInputEnable**(`useHandbrake`): `void` <Badge type="tip" text="client" />

手刹。


::: warning Precautions

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useHandbrake` | `boolean` |  是否进行手刹，true-进行制动, false-取消制动。 |


___

### mass <Score text="mass" /> 

• `get` **mass**(): `number` 

获取载具质量。单位：千克（kg）


#### Returns

`number`

载具质量

• `set` **mass**(`mass`): `void` <Badge type="tip" text="server" />

设置载具质量。单位：千克（kg）


::: warning Precautions

1. 注意输入参数的取值范围。设置较小的质量，会出现载具抖动等非预期表现。
2. 运行时设置质量，会重新初始化载具，清除任何运行状态。如载具在行驶，设置质量后会停在原地。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mass` | `number` |  新的质量 |


___

### maxEngineRPM <Score text="maxEngineRPM" /> 

• `get` **maxEngineRPM**(): `number` 

获取最大发动机转速。单位：转/分（r/min）


#### Returns

`number`

载具发动机转速

___

### maxGearLevel <Score text="maxGearLevel" /> 

• `get` **maxGearLevel**(): `number` 

获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

::: warning Precautions

最大可切换到的档位。如获取当前档位，请使用getCurrentGearLevel

:::


#### Returns

`number`

最大档位级别

___

### velocity <Score text="velocity" /> 

• `get` **velocity**(): `number` 

获取当前行驶速度。单位：米/秒（m/s）


#### Returns

`number`

当前行驶速度

___

### wheelNum <Score text="wheelNum" /> 

• `get` **wheelNum**(): `number` 

获取车轮数量


#### Returns

`number`

车轮数量


## Methods
___

### gearDown <Score text="gearDown" /> 

• **gearDown**(): `void` <Badge type="tip" text="client" />

降档，立即切换。



___

### gearUp <Score text="gearUp" /> 

• **gearUp**(): `void` <Badge type="tip" text="client" />

升档，立即切换。



___

### getGearRatio <Score text="getGearRatio" /> 

• **getGearRatio**(`gearLevel`): [`VehicleGearData`](../modules/Core.mw.md#vehiclegeardata) 

获取指定档位属性


::: warning Precautions

注意输入参数的取值范围

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearLevel` | `number` |  指定档位级别 |

#### Returns

[`VehicleGearData`](../modules/Core.mw.md#vehiclegeardata)

指定档位属性

___

### getWheelData <Score text="getWheelData" /> 

• **getWheelData**(`wheelId`): [`VehicleWheelData`](../modules/Core.mw.md#vehiclewheeldata) 

获取车轮属性


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelData`](../modules/Core.mw.md#vehiclewheeldata)

指定车轮属性

___

### getWheelMaxSteerAngle <Score text="getWheelMaxSteerAngle" /> 

• **getWheelMaxSteerAngle**(`wheelId`): `number` 

获取车轮最大转向角度。单位：度（°）


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮最大转向角度

___

### getWheelPosition <Score text="getWheelPosition" /> 

• **getWheelPosition**(`wheelId`): [`VehicleWheelPosition4W`](../enums/mw.VehicleWheelPosition4W.md) 

获取车轮位置，前轮或者后轮


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelPosition4W`](../enums/mw.VehicleWheelPosition4W.md)

指定车轮位置

___

### getWheelRadius <Score text="getWheelRadius" /> 

• **getWheelRadius**(`wheelId`): `number` 

获取车轮半径。单位：厘米（cm）


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮半径

___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)


::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |


___

### setDriver <Score text="setDriver" /> 

• **setDriver**(`inDriver`): `void` <Badge type="tip" text="client" />

设置载具驾驶员。只有驾驶员才可以操作载具


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDriver` | [`Player`](mw.Player.md) |  驾驶员的Player |


___

### setSimulatePhysics <Score text="setSimulatePhysics" /> 

• **setSimulatePhysics**(`shouldSimulate`): `void` <Badge type="tip" text="client" />

设置四轮载具是否开启物理模拟计算，需要在客户端调用。


::: warning Precautions

四轮载具只在setDriver()成功后才会进行物理模拟，此时关闭物理模拟将无法继续驱动载具移动。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldSimulate` | `boolean` |  是否启用物理模拟。true-启用，false-不启用 |


___

### setSteeringInput <Score text="setSteeringInput" /> 

• **setSteeringInput**(`newInput`): `void` <Badge type="tip" text="client" />

控制载具左/右转向。


::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

使用示例: 用按钮和摇杆控制载具
```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.setThrottleInput(1);
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.setThrottleInput(0);
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: mw.Vector2) => {
       // 控制油门
       vehicle.setThrottleInput(vec.y);
       // 控制转向
       vehicle.setSteeringInput(vec.x);
   })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。 |


___

### setThrottleInput <Score text="setThrottleInput" /> 

• **setThrottleInput**(`newInput`): `void` <Badge type="tip" text="client" />

控制载具前进/后退。


::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

使用示例: 用按钮和摇杆控制载具
```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.setThrottleInput(1);
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.setThrottleInput(0);
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: mw.Vector2) => {
       // 控制油门
       vehicle.setThrottleInput(vec.y);
       // 控制转向
       vehicle.setSteeringInput(vec.x);
   })
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。 |


___

### switchCamera <Score text="switchCamera" /> 

• **switchCamera**(`useVehicleCamera`): `void` <Badge type="tip" text="client" />

在载具和角色之间切换摄像机。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useVehicleCamera` | `boolean` |  是否使用载具的摄像机 |

