[Gameplay](../modules/Gameplay.Gameplay.md) / WheeledVehicle4W

# WheeledVehicle4W <Badge type="tip" text="Class" />

**`Description`**

四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。

**`Precautions`**

注意事项
1. 在未设置有效的Driver之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由setDriver时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在5个以内。

## Hierarchy

- `GameObject`

  ↳ **`WheeledVehicle4W`**

## Table of contents

| Accessors |
| :-----|
| **[brakingTorque](Gameplay.Gameplay.WheeledVehicle4W.md#brakingtorque)**(): `number` <br> 获取制动力矩。单位：牛*米（N*m）|
| **[currentGearLevel](Gameplay.Gameplay.WheeledVehicle4W.md#currentgearlevel)**(): `number` <br> 获取当前档位级别|
| **[driveMode](Gameplay.Gameplay.WheeledVehicle4W.md#drivemode)**(): [`VehicleDriveMode4W`](../enums/Gameplay.Gameplay.VehicleDriveMode4W.md) <br> 获取载具驱动模式|
| **[forwardVector](Gameplay.Gameplay.WheeledVehicle4W.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[friction](Gameplay.Gameplay.WheeledVehicle4W.md#friction)**(): `number` <br> 获取载具摩擦力系数|
| **[guid](Gameplay.Gameplay.WheeledVehicle4W.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[handbrakeInputEnable](Gameplay.Gameplay.WheeledVehicle4W.md#handbrakeinputenable)**(`boolean`): `void` <br> 手刹。|
| **[lockStatus](Gameplay.Gameplay.WheeledVehicle4W.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[mass](Gameplay.Gameplay.WheeledVehicle4W.md#mass)**(): `number` <br> 获取载具质量。单位：千克（kg）|
| **[maxEngineRPM](Gameplay.Gameplay.WheeledVehicle4W.md#maxenginerpm)**(): `number` <br> 获取最大发动机转速。单位：转/分（r/min）|
| **[maxGearLevel](Gameplay.Gameplay.WheeledVehicle4W.md#maxgearlevel)**(): `number` <br> 获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。|
| **[name](Gameplay.Gameplay.WheeledVehicle4W.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.WheeledVehicle4W.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Gameplay.WheeledVehicle4W.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.WheeledVehicle4W.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.Gameplay.WheeledVehicle4W.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.WheeledVehicle4W.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.WheeledVehicle4W.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.WheeledVehicle4W.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.WheeledVehicle4W.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[velocity](Gameplay.Gameplay.WheeledVehicle4W.md#velocity)**(): `number` <br> 获取当前行驶速度。单位：米/秒（m/s）|
| **[visible](Gameplay.Gameplay.WheeledVehicle4W.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[wheelNum](Gameplay.Gameplay.WheeledVehicle4W.md#wheelnum)**(): `number` <br> 获取车轮数量|
| **[worldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.WheeledVehicle4W.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.WheeledVehicle4W.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.WheeledVehicle4W.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Gameplay.WheeledVehicle4W.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Gameplay.WheeledVehicle4W.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.WheeledVehicle4W.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[gearDown](Gameplay.Gameplay.WheeledVehicle4W.md#geardown)**(): `void` <br> 降档，立即切换。|
| **[gearUp](Gameplay.Gameplay.WheeledVehicle4W.md#gearup)**(): `void` <br> 升档，立即切换。|
| **[getBoundingBoxSize](Gameplay.Gameplay.WheeledVehicle4W.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.WheeledVehicle4W.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.WheeledVehicle4W.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.WheeledVehicle4W.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.WheeledVehicle4W.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.WheeledVehicle4W.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Gameplay.WheeledVehicle4W.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getGearRatio](Gameplay.Gameplay.WheeledVehicle4W.md#getgearratio)**(`number`): [`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata) <br> 获取指定档位属性|
| **[getRelativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.WheeledVehicle4W.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.WheeledVehicle4W.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.WheeledVehicle4W.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.WheeledVehicle4W.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Gameplay.WheeledVehicle4W.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.WheeledVehicle4W.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWheelData](Gameplay.Gameplay.WheeledVehicle4W.md#getwheeldata)**(`number`): [`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata) <br> 获取车轮属性|
| **[getWheelMaxSteerAngle](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelmaxsteerangle)**(`number`): `number` <br> 获取车轮最大转向角度。单位：度（°）|
| **[getWheelPosition](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelposition)**(`number`): [`VehicleWheelPosition4W`](../enums/Gameplay.Gameplay.VehicleWheelPosition4W.md) <br> 获取车轮位置，前轮或者后轮|
| **[getWheelRadius](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelradius)**(`number`): `number` <br> 获取车轮半径。单位：厘米（cm）|
| **[getWorldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.WheeledVehicle4W.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.WheeledVehicle4W.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Gameplay.WheeledVehicle4W.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.WheeledVehicle4W.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.WheeledVehicle4W.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Gameplay.WheeledVehicle4W.md#ready)**(): `Promise`<[`WheeledVehicle4W`](Gameplay.Gameplay.WheeledVehicle4W.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.Gameplay.WheeledVehicle4W.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setCullDistance](Gameplay.Gameplay.WheeledVehicle4W.md#setculldistance)**(`number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setDriver](Gameplay.Gameplay.WheeledVehicle4W.md#setdriver)**([`Player`](Gameplay.Gameplay.Player.md)): `void` <br> 设置载具驾驶员。只有驾驶员才可以操作载具|
| **[setLocationAndRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setSteeringInput](Gameplay.Gameplay.WheeledVehicle4W.md#setsteeringinput)**(`number`): `void` <br> 控制载具左/右转向。|
| **[setThrottleInput](Gameplay.Gameplay.WheeledVehicle4W.md#setthrottleinput)**(`number`): `void` <br> 控制载具前进/后退。|
| **[setTransform](Gameplay.Gameplay.WheeledVehicle4W.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.WheeledVehicle4W.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.WheeledVehicle4W.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[switchCamera](Gameplay.Gameplay.WheeledVehicle4W.md#switchcamera)**(`boolean`): `void` <br> 在载具和角色之间切换摄像机。|
| **[asyncFind](Gameplay.Gameplay.WheeledVehicle4W.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.WheeledVehicle4W.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.WheeledVehicle4W.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.WheeledVehicle4W.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.WheeledVehicle4W.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Accessors

### brakingTorque

• `get` **brakingTorque**(): `number`

**`Description`**

获取制动力矩。单位：牛*米（N*m）

**`Effect`**

调用端生效

#### Returns

`number`

当前制动力矩

___

### currentGearLevel

• `get` **currentGearLevel**(): `number`

**`Description`**

获取当前档位级别

**`Effect`**

调用端生效

#### Returns

`number`

当前档位级别

• `set` **currentGearLevel**(`level`): `void`

**`Description`**

设置载具档位(直接变换档位到某一档)。

**`Effect`**

只在客户端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。
2. 设置与当前车速不匹配的档位，会自动调整到匹配的档位。如当前车速适应1档，直接设置3档，会逐级（3-2-1）降到1档。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` |  档位 Min = -1(倒车)， Max = 设定的最大档位 |

#### Returns

`void`

___

### driveMode

• `get` **driveMode**(): [`VehicleDriveMode4W`](../enums/Gameplay.Gameplay.VehicleDriveMode4W.md)

**`Description`**

获取载具驱动模式

**`Effect`**

调用端生效

#### Returns

[`VehicleDriveMode4W`](../enums/Gameplay.Gameplay.VehicleDriveMode4W.md)

载具驱动模式

___

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### friction

• `get` **friction**(): `number`

**`Description`**

获取载具摩擦力系数

**`Effect`**

调用端生效

#### Returns

`number`

载具摩擦力系数

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

### handbrakeInputEnable

• `set` **handbrakeInputEnable**(`useHandbrake`): `void`

**`Description`**

手刹。

**`Effect`**

只在客户端调用生效

**`Precautions`**

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useHandbrake` | `boolean` |  是否进行手刹，true-进行制动, false-取消制动。 |

#### Returns

`void`

___

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### mass

• `get` **mass**(): `number`

**`Description`**

获取载具质量。单位：千克（kg）

**`Effect`**

调用端生效

#### Returns

`number`

载具质量

• `set` **mass**(`mass`): `void`

**`Description`**

设置载具质量。单位：千克（kg）

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。设置较小的质量，会出现载具抖动等非预期表现。
2. 运行时设置质量，会重新初始化载具，清除任何运行状态。如载具在行驶，设置质量后会停在原地。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mass` | `number` |  新的质量 |

#### Returns

`void`

___

### maxEngineRPM

• `get` **maxEngineRPM**(): `number`

**`Description`**

获取最大发动机转速。单位：转/分（r/min）

**`Effect`**

调用端生效

#### Returns

`number`

载具发动机转速

___

### maxGearLevel

• `get` **maxGearLevel**(): `number`

**`Description`**

获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

**`Precautions`**

最大可切换到的档位。如获取当前档位，请使用getCurrentGearLevel

**`Effect`**

调用端生效

#### Returns

`number`

最大档位级别

___

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

___

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

___

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |

#### Returns

`void`

___

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Overrides

Core.GameObject.relativeLocation

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

#### Overrides

Core.GameObject.relativeLocation

___

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Overrides

Core.GameObject.relativeRotation

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

#### Overrides

Core.GameObject.relativeRotation

___

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放 |

#### Returns

`void`

___

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |

#### Returns

`void`

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Overrides

Core.GameObject.transform

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的transform |

#### Returns

`void`

#### Overrides

Core.GameObject.transform

___

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### velocity

• `get` **velocity**(): `number`

**`Description`**

获取当前行驶速度。单位：米/秒（m/s）

**`Effect`**

调用端生效

#### Returns

`number`

当前行驶速度

___

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### wheelNum

• `get` **wheelNum**(): `number`

**`Description`**

获取车轮数量

**`Effect`**

调用端生效

#### Returns

`number`

车轮数量

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Overrides

Core.GameObject.worldLocation

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Overrides

Core.GameObject.worldLocation

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Overrides

Core.GameObject.worldRotation

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

#### Overrides

Core.GameObject.worldRotation

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |

#### Returns

`void`

___

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

___

### gearDown

▸ **gearDown**(): `void`

**`Description`**

降档，立即切换。

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### gearUp

▸ **gearUp**(): `void`

**`Description`**

升档，立即切换。

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取GameObject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |

#### Returns

`void`

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`GameObject`

查找的物体

___

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getGearRatio

▸ **getGearRatio**(`gearLevel`): [`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata)

**`Description`**

获取指定档位属性

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearLevel` | `number` |  指定档位级别 |

#### Returns

[`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata)

指定档位属性

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`Script`

Script

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取GameObject是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### getWheelData

▸ **getWheelData**(`wheelId`): [`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata)

**`Description`**

获取车轮属性

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata)

指定车轮属性

___

### getWheelMaxSteerAngle

▸ **getWheelMaxSteerAngle**(`wheelId`): `number`

**`Description`**

获取车轮最大转向角度。单位：度（°）

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮最大转向角度

___

### getWheelPosition

▸ **getWheelPosition**(`wheelId`): [`VehicleWheelPosition4W`](../enums/Gameplay.Gameplay.VehicleWheelPosition4W.md)

**`Description`**

获取车轮位置，前轮或者后轮

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

[`VehicleWheelPosition4W`](../enums/Gameplay.Gameplay.VehicleWheelPosition4W.md)

指定车轮位置

___

### getWheelRadius

▸ **getWheelRadius**(`wheelId`): `number`

**`Description`**

获取车轮半径。单位：厘米（cm）

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮半径

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

___

### ready

▸ **ready**(): `Promise`<[`WheeledVehicle4W`](Gameplay.Gameplay.WheeledVehicle4W.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`WheeledVehicle4W`](Gameplay.Gameplay.WheeledVehicle4W.md)\>

准备好的对象

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |

#### Returns

`void`

___

### setCullDistance

▸ **setCullDistance**(`inCullDistance`): `void`

**`Description`**

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

**`Effect`**

只在客户端调用生效

**`Precautions`**

最终的裁剪距离会和画质等级有关

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |

#### Returns

`void`

___

### setDriver

▸ **setDriver**(`inDriver`): `void`

**`Description`**

设置载具驾驶员。只有驾驶员才可以操作载具

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDriver` | [`Player`](Gameplay.Gameplay.Player.md) |  驾驶员的Player |

#### Returns

`void`

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转 |

#### Returns

`void`

#### Overrides

Core.GameObject.setLocationAndRotation

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

#### Overrides

Core.GameObject.setRelativeLocation

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

#### Overrides

Core.GameObject.setRelativeRotation

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

___

### setSteeringInput

▸ **setSteeringInput**(`newInput`): `void`

**`Description`**

控制载具左/右转向。

**`Effect`**

只在客户端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。 |

#### Returns

`void`

___

### setThrottleInput

▸ **setThrottleInput**(`newInput`): `void`

**`Description`**

控制载具前进/后退。

**`Effect`**

只在客户端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newInput` | `number` |  油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。 |

#### Returns

`void`

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform |

#### Returns

`void`

#### Overrides

Core.GameObject.setTransform

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置GameObject是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |

#### Returns

`void`

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |  要设置的世界坐标 |

#### Returns

`void`

#### Overrides

Core.GameObject.setWorldLocation

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

#### Overrides

Core.GameObject.setWorldRotation

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

___

### switchCamera

▸ **switchCamera**(`useVehicleCamera`): `void`

**`Description`**

在载具和角色之间切换摄像机。

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useVehicleCamera` | `boolean` |  是否使用载具的摄像机 |

#### Returns

`void`

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的guid |

#### Returns

`Promise`<`GameObject`\>

Guid对应的物体

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的GameObject

___

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过Guid查找GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的Guid |

#### Returns

`GameObject`

Guid对应的物体

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
