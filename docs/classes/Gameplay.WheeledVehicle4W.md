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

• `get` **driveMode**(): [`VehicleDriveMode4W`](../enums/Gameplay.VehicleDriveMode4W.md)

**`Description`**

获取载具驱动模式

**`Effect`**

调用端生效

#### Returns

[`VehicleDriveMode4W`](../enums/Gameplay.VehicleDriveMode4W.md)

载具驱动模式


### friction

• `get` **friction**(): `number`

**`Description`**

获取载具摩擦力系数

**`Effect`**

调用端生效

#### Returns

`number`

载具摩擦力系数


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


### velocity

• `get` **velocity**(): `number`

**`Description`**

获取当前行驶速度。单位：米/秒（m/s）

**`Effect`**

调用端生效

#### Returns

`number`

当前行驶速度


### wheelNum

• `get` **wheelNum**(): `number`

**`Description`**

获取车轮数量

**`Effect`**

调用端生效

#### Returns

`number`

车轮数量


## Methods

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

▸ **getWheelPosition**(`wheelId`): [`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md)

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

[`VehicleWheelPosition4W`](../enums/Gameplay.VehicleWheelPosition4W.md)

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
| `inDriver` | [`Player`](Gameplay.Player.md) |  驾驶员的Player |

#### Returns

`void`


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
