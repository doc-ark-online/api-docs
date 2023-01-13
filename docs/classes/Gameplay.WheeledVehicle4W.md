[Gameplay](../modules/Gameplay.Gameplay.md) / WheeledVehicle4W

# WheeledVehicle4W <Badge type="tip" text="Class" /> <Score text="WheeledVehicle4W" />

四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。

::: warning Precautions

注意事项
1. 在未设置有效的Driver之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由setDriver时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在5个以内。

:::

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`WheeledVehicle4W`**

## Table of contents

| Accessors |
| :-----|
| **[brakingTorque](Gameplay.WheeledVehicle4W.md#brakingtorque)**(): `number` <br> 获取制动力矩。单位：牛*米（N*m）|
| **[currentGearLevel](Gameplay.WheeledVehicle4W.md#currentgearlevel)**(): `number` <br> 获取当前档位级别|
| **[driveMode](Gameplay.WheeledVehicle4W.md#drivemode)**(): [`VehicleDriveMode4W`](../enums/Gameplay.VehicleDriveMode4W.md) <br> 获取载具驱动模式|
| **[friction](Gameplay.WheeledVehicle4W.md#friction)**(): `number` <br> 获取载具摩擦力系数|
| **[handbrakeInputEnable](Gameplay.WheeledVehicle4W.md#handbrakeinputenable)**(`boolean`): `void` <br> 手刹。|
| **[mass](Gameplay.WheeledVehicle4W.md#mass)**(): `number` <br> 获取载具质量。单位：千克（kg）|
| **[maxEngineRPM](Gameplay.WheeledVehicle4W.md#maxenginerpm)**(): `number` <br> 获取最大发动机转速。单位：转/分（r/min）|
| **[maxGearLevel](Gameplay.WheeledVehicle4W.md#maxgearlevel)**(): `number` <br> 获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。|
| **[velocity](Gameplay.WheeledVehicle4W.md#velocity)**(): `number` <br> 获取当前行驶速度。单位：米/秒（m/s）|
| **[wheelNum](Gameplay.WheeledVehicle4W.md#wheelnum)**(): `number` <br> 获取车轮数量|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[gearDown](Gameplay.WheeledVehicle4W.md#geardown)**(): `void` <br> 降档，立即切换。|
| **[gearUp](Gameplay.WheeledVehicle4W.md#gearup)**(): `void` <br> 升档，立即切换。|
| **[getGearRatio](Gameplay.WheeledVehicle4W.md#getgearratio)**(`number`): [`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata) <br> 获取指定档位属性|
| **[getWheelData](Gameplay.WheeledVehicle4W.md#getwheeldata)**(`number`): [`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata) <br> 获取车轮属性|
| **[getWheelMaxSteerAngle](Gameplay.WheeledVehicle4W.md#getwheelmaxsteerangle)**(`number`): `number` <br> 获取车轮最大转向角度。单位：度（°）|
| **[getWheelPosition](Gameplay.WheeledVehicle4W.md#getwheelposition)**(`number`): [`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md) <br> 获取车轮位置，前轮或者后轮|
| **[getWheelRadius](Gameplay.WheeledVehicle4W.md#getwheelradius)**(`number`): `number` <br> 获取车轮半径。单位：厘米（cm）|
| **[setCullDistance](Gameplay.WheeledVehicle4W.md#setculldistance)**(`number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setDriver](Gameplay.WheeledVehicle4W.md#setdriver)**([`Player`](Gameplay.Player.md)): `void` <br> 设置载具驾驶员。只有驾驶员才可以操作载具|
| **[setSteeringInput](Gameplay.WheeledVehicle4W.md#setsteeringinput)**(`number`): `void` <br> 控制载具左/右转向。|
| **[setThrottleInput](Gameplay.WheeledVehicle4W.md#setthrottleinput)**(`number`): `void` <br> 控制载具前进/后退。|
| **[switchCamera](Gameplay.WheeledVehicle4W.md#switchcamera)**(`boolean`): `void` <br> 在载具和角色之间切换摄像机。|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|
:::


## Accessors

### brakingTorque <Score text="brakingTorque" /> 

• `get` **brakingTorque**(): `number` <Badge type="tip" text="other" />

获取制动力矩。单位：牛*米（N*m）


#### Returns

`number`

当前制动力矩

___

### currentGearLevel <Score text="currentGearLevel" /> 

• `get` **currentGearLevel**(): `number` <Badge type="tip" text="other" />

获取当前档位级别


#### Returns

`number`

当前档位级别

• `set` **currentGearLevel**(`level`): `void` <Badge type="tip" text="other" />

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

• `get` **driveMode**(): [`VehicleDriveMode4W`](../enums/Gameplay.VehicleDriveMode4W.md) <Badge type="tip" text="other" />

获取载具驱动模式


#### Returns

[`VehicleDriveMode4W`](../enums/Gameplay.VehicleDriveMode4W.md)

载具驱动模式


### friction <Score text="friction" /> 

• `get` **friction**(): `number` <Badge type="tip" text="other" />

获取载具摩擦力系数


#### Returns

`number`

载具摩擦力系数


### handbrakeInputEnable <Score text="handbrakeInputEnable" /> 

• `set` **handbrakeInputEnable**(`useHandbrake`): `void` <Badge type="tip" text="other" />

手刹。


::: warning Precautions

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useHandbrake` | `boolean` |  是否进行手刹，true-进行制动, false-取消制动。 |



### mass <Score text="mass" /> 

• `get` **mass**(): `number` <Badge type="tip" text="other" />

获取载具质量。单位：千克（kg）


#### Returns

`number`

载具质量

• `set` **mass**(`mass`): `void` <Badge type="tip" text="other" />

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

• `get` **maxEngineRPM**(): `number` <Badge type="tip" text="other" />

获取最大发动机转速。单位：转/分（r/min）


#### Returns

`number`

载具发动机转速

___

### maxGearLevel <Score text="maxGearLevel" /> 

• `get` **maxGearLevel**(): `number` <Badge type="tip" text="other" />

获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

::: warning Precautions

最大可切换到的档位。如获取当前档位，请使用getCurrentGearLevel

:::


#### Returns

`number`

最大档位级别


### velocity <Score text="velocity" /> 

• `get` **velocity**(): `number` <Badge type="tip" text="other" />

获取当前行驶速度。单位：米/秒（m/s）


#### Returns

`number`

当前行驶速度


### wheelNum <Score text="wheelNum" /> 

• `get` **wheelNum**(): `number` <Badge type="tip" text="other" />

获取车轮数量


#### Returns

`number`

车轮数量


## Methods

### gearDown <Score text="gearDown" /> 

▸ **gearDown**(): `void` <Badge type="tip" text="other" />

降档，立即切换。



___

### gearUp <Score text="gearUp" /> 

▸ **gearUp**(): `void` <Badge type="tip" text="other" />

升档，立即切换。




### getGearRatio <Score text="getGearRatio" /> 

▸ **getGearRatio**(`gearLevel`): [`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata) <Badge type="tip" text="other" />

获取指定档位属性


::: warning Precautions

注意输入参数的取值范围

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearLevel` | `number` |  指定档位级别 |

#### Returns

[`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata)

指定档位属性


### getWheelData <Score text="getWheelData" /> 

▸ **getWheelData**(`wheelId`): [`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata) <Badge type="tip" text="other" />

获取车轮属性


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata)

指定车轮属性

___

### getWheelMaxSteerAngle <Score text="getWheelMaxSteerAngle" /> 

▸ **getWheelMaxSteerAngle**(`wheelId`): `number` <Badge type="tip" text="other" />

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

▸ **getWheelPosition**(`wheelId`): [`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md) <Badge type="tip" text="other" />

获取车轮位置，前轮或者后轮


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md)

指定车轮位置

___

### getWheelRadius <Score text="getWheelRadius" /> 

▸ **getWheelRadius**(`wheelId`): `number` <Badge type="tip" text="other" />

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


### setCullDistance <Score text="setCullDistance" /> 

▸ **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="other" />

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

▸ **setDriver**(`inDriver`): `void` <Badge type="tip" text="other" />

设置载具驾驶员。只有驾驶员才可以操作载具


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDriver` | [`Player`](Gameplay.Player.md) |  驾驶员的Player |



### setSteeringInput <Score text="setSteeringInput" /> 

▸ **setSteeringInput**(`newInput`): `void` <Badge type="tip" text="other" />

控制载具左/右转向。


::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。 |


___

### setThrottleInput <Score text="setThrottleInput" /> 

▸ **setThrottleInput**(`newInput`): `void` <Badge type="tip" text="other" />

控制载具前进/后退。


::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。 |



### switchCamera <Score text="switchCamera" /> 

▸ **switchCamera**(`useVehicleCamera`): `void` <Badge type="tip" text="other" />

在载具和角色之间切换摄像机。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useVehicleCamera` | `boolean` |  是否使用载具的摄像机 |

