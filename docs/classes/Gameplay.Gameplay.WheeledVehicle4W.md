[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / WheeledVehicle4W

# Class: WheeledVehicle4W

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).WheeledVehicle4W

**`Author`**

huipeng.jia

**`Description`**

四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。

**`Network Status`**

usage: 双端

**`Precautions`**

注意事项

1. 在未设置有效的 Driver 之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由 setDriver 时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在 5 个以内。

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`WheeledVehicle4W`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.WheeledVehicle4W.md#constructor)

### Accessors

- [brakingTorque](Gameplay.Gameplay.WheeledVehicle4W.md#brakingtorque)
- [currentGearLevel](Gameplay.Gameplay.WheeledVehicle4W.md#currentgearlevel)
- [driveMode](Gameplay.Gameplay.WheeledVehicle4W.md#drivemode)
- [forwardVector](Gameplay.Gameplay.WheeledVehicle4W.md#forwardvector)
- [friction](Gameplay.Gameplay.WheeledVehicle4W.md#friction)
- [guid](Gameplay.Gameplay.WheeledVehicle4W.md#guid)
- [isVisible](Gameplay.Gameplay.WheeledVehicle4W.md#isvisible)
- [lockState](Gameplay.Gameplay.WheeledVehicle4W.md#lockstate)
- [mass](Gameplay.Gameplay.WheeledVehicle4W.md#mass)
- [maxEngineRPM](Gameplay.Gameplay.WheeledVehicle4W.md#maxenginerpm)
- [maxGearLevel](Gameplay.Gameplay.WheeledVehicle4W.md#maxgearlevel)
- [name](Gameplay.Gameplay.WheeledVehicle4W.md#name)
- [netStatus](Gameplay.Gameplay.WheeledVehicle4W.md#netstatus)
- [parent](Gameplay.Gameplay.WheeledVehicle4W.md#parent)
- [relativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#relativescale)
- [rightVector](Gameplay.Gameplay.WheeledVehicle4W.md#rightvector)
- [staticStatus](Gameplay.Gameplay.WheeledVehicle4W.md#staticstatus)
- [tag](Gameplay.Gameplay.WheeledVehicle4W.md#tag)
- [transform](Gameplay.Gameplay.WheeledVehicle4W.md#transform)
- [upVector](Gameplay.Gameplay.WheeledVehicle4W.md#upvector)
- [useUpdate](Gameplay.Gameplay.WheeledVehicle4W.md#useupdate)
- [velocity](Gameplay.Gameplay.WheeledVehicle4W.md#velocity)
- [wheelNum](Gameplay.Gameplay.WheeledVehicle4W.md#wheelnum)
- [worldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#worldrotation)
- [worldScale](Gameplay.Gameplay.WheeledVehicle4W.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.WheeledVehicle4W.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.WheeledVehicle4W.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#attachtogameobject)
- [clone](Gameplay.Gameplay.WheeledVehicle4W.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.WheeledVehicle4W.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.WheeledVehicle4W.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#detachfromgameobject)
- [gearDown](Gameplay.Gameplay.WheeledVehicle4W.md#geardown)
- [gearUp](Gameplay.Gameplay.WheeledVehicle4W.md#gearup)
- [getBoundingBoxSize](Gameplay.Gameplay.WheeledVehicle4W.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.WheeledVehicle4W.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.WheeledVehicle4W.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.WheeledVehicle4W.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.WheeledVehicle4W.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.WheeledVehicle4W.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.WheeledVehicle4W.md#getforwardvector)
- [getGearRatio](Gameplay.Gameplay.WheeledVehicle4W.md#getgearratio)
- [getRelativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.WheeledVehicle4W.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.WheeledVehicle4W.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.WheeledVehicle4W.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.WheeledVehicle4W.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.WheeledVehicle4W.md#gettransform)
- [getUpVector](Gameplay.Gameplay.WheeledVehicle4W.md#getupvector)
- [getWheelData](Gameplay.Gameplay.WheeledVehicle4W.md#getwheeldata)
- [getWheelMaxSteerAngle](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelmaxsteerangle)
- [getWheelPosition](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelposition)
- [getWheelRadius](Gameplay.Gameplay.WheeledVehicle4W.md#getwheelradius)
- [getWorldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.WheeledVehicle4W.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.WheeledVehicle4W.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.WheeledVehicle4W.md#ondestroy)
- [onStart](Gameplay.Gameplay.WheeledVehicle4W.md#onstart)
- [onUpdate](Gameplay.Gameplay.WheeledVehicle4W.md#onupdate)
- [ready](Gameplay.Gameplay.WheeledVehicle4W.md#ready)
- [setCollision](Gameplay.Gameplay.WheeledVehicle4W.md#setcollision)
- [setCullDistance](Gameplay.Gameplay.WheeledVehicle4W.md#setculldistance)
- [setDriver](Gameplay.Gameplay.WheeledVehicle4W.md#setdriver)
- [setHandbrakeInput](Gameplay.Gameplay.WheeledVehicle4W.md#sethandbrakeinput)
- [setLocationAndRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.WheeledVehicle4W.md#setrelativescale)
- [setSteeringInput](Gameplay.Gameplay.WheeledVehicle4W.md#setsteeringinput)
- [setThrottleInput](Gameplay.Gameplay.WheeledVehicle4W.md#setthrottleinput)
- [setTransform](Gameplay.Gameplay.WheeledVehicle4W.md#settransform)
- [setVisibility](Gameplay.Gameplay.WheeledVehicle4W.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.WheeledVehicle4W.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.WheeledVehicle4W.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.WheeledVehicle4W.md#setworldscale)
- [switchCamera](Gameplay.Gameplay.WheeledVehicle4W.md#switchcamera)
- [asyncFind](Gameplay.Gameplay.WheeledVehicle4W.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.WheeledVehicle4W.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.WheeledVehicle4W.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.WheeledVehicle4W.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.WheeledVehicle4W.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.WheeledVehicle4W.md#spawngameobject)

## Constructors

### constructor

• **new WheeledVehicle4W**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

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

#### Defined in

Gameplay/index.d.ts:10526

---

### currentGearLevel

• `get` **currentGearLevel**(): `number`

**`Description`**

获取当前档位级别

**`Effect`**

调用端生效

#### Returns

`number`

当前档位级别

#### Defined in

Gameplay/index.d.ts:10474

• `set` **currentGearLevel**(`level`): `void`

**`Description`**

设置载具档位(直接变换档位到某一档)。

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。
2. 设置与当前车速不匹配的档位，会自动调整到匹配的档位。如当前车速适应 1 档，直接设置 3 档，会逐级（3-2-1）降到 1 档。

#### Parameters

| Name    | Type     | Description                                       |
| :------ | :------- | :------------------------------------------------ |
| `level` | `number` | usage: 档位 Min = -1(倒车)， Max = 设定的最大档位 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10468

---

### driveMode

• `get` **driveMode**(): [`VehicleDriveMode4W`](../enums/Gameplay.Gameplay.VehicleDriveMode4W.md)

**`Description`**

获取载具驱动模式

**`Effect`**

调用端生效

#### Returns

[`VehicleDriveMode4W`](../enums/Gameplay.Gameplay.VehicleDriveMode4W.md)

载具驱动模式

#### Defined in

Gameplay/index.d.ts:10501

---

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:405

---

### friction

• `get` **friction**(): `number`

**`Description`**

获取载具摩擦力系数

**`Effect`**

调用端生效

#### Returns

`number`

载具摩擦力系数

#### Defined in

Gameplay/index.d.ts:10495

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:38

---

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.isVisible

#### Defined in

Core/index.d.ts:496

---

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:447

---

### mass

• `get` **mass**(): `number`

**`Description`**

获取载具质量。单位：千克（kg）

**`Effect`**

调用端生效

#### Returns

`number`

载具质量

#### Defined in

Gameplay/index.d.ts:10489

• `set` **mass**(`mass`): `void`

**`Description`**

设置载具质量。单位：千克（kg）

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。设置较小的质量，会出现载具抖动等非预期表现。
2. 运行时设置质量，会重新初始化载具，清除任何运行状态。如载具在行驶，设置质量后会停在原地。

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `mass` | `number` | usage: 新的质量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10483

---

### maxEngineRPM

• `get` **maxEngineRPM**(): `number`

**`Description`**

获取最大发动机转速。单位：转/分（r/min）

**`Effect`**

调用端生效

#### Returns

`number`

载具发动机转速

#### Defined in

Gameplay/index.d.ts:10507

---

### maxGearLevel

• `get` **maxGearLevel**(): `number`

**`Description`**

获取最大档位级别。如返回值为 4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

**`Precautions`**

最大可切换到的档位。如获取当前档位，请使用 getCurrentGearLevel

**`Effect`**

调用端生效

#### Returns

`number`

最大档位级别

#### Defined in

Gameplay/index.d.ts:10514

---

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:173

---

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:502

---

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                    |
| :---------- | :-------------------------------------- |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:463

---

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:310

---

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:336

---

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:362

---

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:419

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:442

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:179

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:211

---

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:392

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:432

---

### velocity

• `get` **velocity**(): `number`

**`Description`**

获取当前行驶速度。单位：米/秒（m/s）

**`Effect`**

调用端生效

#### Returns

`number`

当前行驶速度

#### Defined in

Gameplay/index.d.ts:10520

---

### wheelNum

• `get` **wheelNum**(): `number`

**`Description`**

获取车轮数量

**`Effect`**

调用端生效

#### Returns

`number`

车轮数量

#### Defined in

Gameplay/index.d.ts:10532

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:230

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:235

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:260

---

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:279

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:284

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                    | Description |
| :---- | :-------------------------------------- | :---------- |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

---

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

#### Defined in

Core/index.d.ts:543

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

#### Defined in

Core/index.d.ts:146

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

---

### gearDown

▸ **gearDown**(): `void`

**`Description`**

降档，立即切换。

**`Effect`**

只在服务端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10459

---

### gearUp

▸ **gearUp**(): `void`

**`Description`**

升档，立即切换。

**`Effect`**

只在服务端调用生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10454

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 Gameobject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 Gameobject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

#### Defined in

Core/index.d.ts:194

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

---

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

---

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取 Children 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

#### Defined in

Core/index.d.ts:522

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

---

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

---

### getGearRatio

▸ **getGearRatio**(`gearLevel`): [`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata)

**`Description`**

获取指定档位属性

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围

#### Parameters

| Name        | Type     | Description         |
| :---------- | :------- | :------------------ |
| `gearLevel` | `number` | usage: 指定档位级别 |

#### Returns

[`VehicleGearData`](../modules/Gameplay.Gameplay.md#vehiclegeardata)

指定档位属性

#### Defined in

Gameplay/index.d.ts:10540

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

#### Defined in

Core/index.d.ts:427

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array\<Script\>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

#### Defined in

Core/index.d.ts:219

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

---

### getWheelData

▸ **getWheelData**(`wheelId`): [`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata)

**`Description`**

获取车轮属性

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `wheelId` | `number` | usage: 根据序号指定车轮 |

#### Returns

[`VehicleWheelData`](../modules/Gameplay.Gameplay.md#vehiclewheeldata)

指定车轮属性

#### Defined in

Gameplay/index.d.ts:10548

---

### getWheelMaxSteerAngle

▸ **getWheelMaxSteerAngle**(`wheelId`): `number`

**`Description`**

获取车轮最大转向角度。单位：度（°）

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `wheelId` | `number` | usage: 根据序号指定车轮 |

#### Returns

`number`

指定车轮最大转向角度

#### Defined in

Gameplay/index.d.ts:10564

---

### getWheelPosition

▸ **getWheelPosition**(`wheelId`): [`VehicleWheelPosition4W`](../enums/Gameplay.Gameplay.VehicleWheelPosition4W.md)

**`Description`**

获取车轮位置，前轮或者后轮

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `wheelId` | `number` | usage: 根据序号指定车轮 |

#### Returns

[`VehicleWheelPosition4W`](../enums/Gameplay.Gameplay.VehicleWheelPosition4W.md)

指定车轮位置

#### Defined in

Gameplay/index.d.ts:10556

---

### getWheelRadius

▸ **getWheelRadius**(`wheelId`): `number`

**`Description`**

获取车轮半径。单位：厘米（cm）

**`Effect`**

调用端生效

**`Precautions`**

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `wheelId` | `number` | usage: 根据序号指定车轮 |

#### Returns

`number`

指定车轮半径

#### Defined in

Gameplay/index.d.ts:10572

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

#### Defined in

Core/index.d.ts:292

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

#### Defined in

Core/index.d.ts:17

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

#### Defined in

Core/index.d.ts:12

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

---

### ready

▸ **ready**(): `Promise`<[`WheeledVehicle4W`](Gameplay.Gameplay.WheeledVehicle4W.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`WheeledVehicle4W`](Gameplay.Gameplay.WheeledVehicle4W.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

#### Defined in

Core/index.d.ts:471

---

### setCullDistance

▸ **setCullDistance**(`inCullDistance`): `void`

**`Description`**

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性 ≤0 时，裁剪距离会根据对象尺寸自动调整(自动启用 CullDistanceVolum 功能)

**`Effect`**

只在客户端调用生效

**`Precautions`**

最终的裁剪距离会和画质等级有关

#### Parameters

| Name             | Type     | Description    |
| :--------------- | :------- | :------------- |
| `inCullDistance` | `number` | usage:裁剪距离 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10579

---

### setDriver

▸ **setDriver**(`inDriver`): `void`

**`Description`**

设置载具驾驶员。只有驾驶员才可以操作载具

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                    | Description            |
| :--------- | :-------------------------------------- | :--------------------- |
| `inDriver` | [`Player`](Gameplay.Gameplay.Player.md) | usage: 驾驶员的 Player |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10417

---

### setHandbrakeInput

▸ **setHandbrakeInput**(`useHandbrake`): `void`

**`Description`**

手刹。

**`Effect`**

只在服务端调用生效

**`Precautions`**

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name           | Type      | Description                                          |
| :------------- | :-------- | :--------------------------------------------------- |
| `useHandbrake` | `boolean` | usage: 是否进行手刹，true-进行制动, false-取消制动。 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10449

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

---

### setSteeringInput

▸ **setSteeringInput**(`newInput`): `void`

**`Description`**

控制载具左/右转向。

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。输入 100 和 1 没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name       | Type     | Description                                                     |
| :--------- | :------- | :-------------------------------------------------------------- |
| `newInput` | `number` | usage: 转向幅度，取值范围[-1,1]，大于 0 时右转，小于 0 则左转。 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10441

---

### setThrottleInput

▸ **setThrottleInput**(`newInput`): `void`

**`Description`**

控制载具前进/后退。

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 注意输入参数的取值范围。输入 100 和 1 没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

#### Parameters

| Name       | Type     | Description                                                     |
| :--------- | :------- | :-------------------------------------------------------------- |
| `newInput` | `number` | usage: 油门大小，取值范围[-1,1]，大于 0 时加速，小于 0 则减速。 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10432

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

#### Defined in

Core/index.d.ts:225

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

#### Defined in

Core/index.d.ts:487

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

---

### switchCamera

▸ **switchCamera**(`useVehicleCamera`): `void`

**`Description`**

在载具和角色之间切换摄像机。

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type      | Description                 |
| :----------------- | :-------- | :-------------------------- |
| `useVehicleCamera` | `boolean` | usage: 是否使用载具的摄像机 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10423

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过 guid 异步查找 Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid 对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

#### Defined in

Core/index.d.ts:161

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的 GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

---

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过 Guid 查找 Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid 对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

#### Defined in

Core/index.d.ts:153

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array\<GameObject\>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的 GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
