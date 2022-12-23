[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsPrism

# Class: PhysicsPrism

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).PhysicsPrism

**`Author`**

ZhangHexuan

**`Description`**

物理棱柱组件

**`Network Status`**

usage:双端

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsPrism`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.PhysicsPrism.md#constructor)

### Accessors

- [constraintTarget1](Gameplay.Gameplay.PhysicsPrism.md#constrainttarget1)
- [constraintTarget2](Gameplay.Gameplay.PhysicsPrism.md#constrainttarget2)
- [enable](Gameplay.Gameplay.PhysicsPrism.md#enable)
- [forwardVector](Gameplay.Gameplay.PhysicsPrism.md#forwardvector)
- [guid](Gameplay.Gameplay.PhysicsPrism.md#guid)
- [isVisible](Gameplay.Gameplay.PhysicsPrism.md#isvisible)
- [linearLimit](Gameplay.Gameplay.PhysicsPrism.md#linearlimit)
- [linearVelocity](Gameplay.Gameplay.PhysicsPrism.md#linearvelocity)
- [lockState](Gameplay.Gameplay.PhysicsPrism.md#lockstate)
- [name](Gameplay.Gameplay.PhysicsPrism.md#name)
- [netStatus](Gameplay.Gameplay.PhysicsPrism.md#netstatus)
- [parent](Gameplay.Gameplay.PhysicsPrism.md#parent)
- [relativeLocation](Gameplay.Gameplay.PhysicsPrism.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.PhysicsPrism.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.PhysicsPrism.md#relativescale)
- [restitution](Gameplay.Gameplay.PhysicsPrism.md#restitution)
- [rightVector](Gameplay.Gameplay.PhysicsPrism.md#rightvector)
- [staticStatus](Gameplay.Gameplay.PhysicsPrism.md#staticstatus)
- [strength](Gameplay.Gameplay.PhysicsPrism.md#strength)
- [tag](Gameplay.Gameplay.PhysicsPrism.md#tag)
- [transform](Gameplay.Gameplay.PhysicsPrism.md#transform)
- [upVector](Gameplay.Gameplay.PhysicsPrism.md#upvector)
- [useUpdate](Gameplay.Gameplay.PhysicsPrism.md#useupdate)
- [worldLocation](Gameplay.Gameplay.PhysicsPrism.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.PhysicsPrism.md#worldrotation)
- [worldScale](Gameplay.Gameplay.PhysicsPrism.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.PhysicsPrism.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.PhysicsPrism.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.PhysicsPrism.md#attachtogameobject)
- [clone](Gameplay.Gameplay.PhysicsPrism.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.PhysicsPrism.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.PhysicsPrism.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.PhysicsPrism.md#detachfromgameobject)
- [getAxisXLinearType](Gameplay.Gameplay.PhysicsPrism.md#getaxisxlineartype)
- [getAxisYLinearType](Gameplay.Gameplay.PhysicsPrism.md#getaxisylineartype)
- [getAxisZLinearType](Gameplay.Gameplay.PhysicsPrism.md#getaxiszlineartype)
- [getBoundingBoxSize](Gameplay.Gameplay.PhysicsPrism.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.PhysicsPrism.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.PhysicsPrism.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.PhysicsPrism.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.PhysicsPrism.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.PhysicsPrism.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.PhysicsPrism.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.PhysicsPrism.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.PhysicsPrism.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.PhysicsPrism.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.PhysicsPrism.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.PhysicsPrism.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.PhysicsPrism.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.PhysicsPrism.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.PhysicsPrism.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.PhysicsPrism.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.PhysicsPrism.md#gettransform)
- [getUpVector](Gameplay.Gameplay.PhysicsPrism.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.PhysicsPrism.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.PhysicsPrism.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.PhysicsPrism.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.PhysicsPrism.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.PhysicsPrism.md#ondestroy)
- [onStart](Gameplay.Gameplay.PhysicsPrism.md#onstart)
- [onUpdate](Gameplay.Gameplay.PhysicsPrism.md#onupdate)
- [ready](Gameplay.Gameplay.PhysicsPrism.md#ready)
- [setAxisXLinearType](Gameplay.Gameplay.PhysicsPrism.md#setaxisxlineartype)
- [setAxisYLinearType](Gameplay.Gameplay.PhysicsPrism.md#setaxisylineartype)
- [setAxisZLinearType](Gameplay.Gameplay.PhysicsPrism.md#setaxiszlineartype)
- [setCollision](Gameplay.Gameplay.PhysicsPrism.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.PhysicsPrism.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.PhysicsPrism.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.PhysicsPrism.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.PhysicsPrism.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.PhysicsPrism.md#settransform)
- [setVisibility](Gameplay.Gameplay.PhysicsPrism.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.PhysicsPrism.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.PhysicsPrism.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.PhysicsPrism.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.PhysicsPrism.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.PhysicsPrism.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.PhysicsPrism.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.PhysicsPrism.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.PhysicsPrism.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.PhysicsPrism.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.PhysicsPrism.md#spawngameobject)

## Constructors

### constructor

• **new PhysicsPrism**()

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[constructor](Gameplay.Gameplay.PhysicsConstraintBase.md#constructor)

## Accessors

### constraintTarget1

• `get` **constraintTarget1**(): `string`

**`Description`**

获取约束对象 1

#### Returns

`string`

#### Inherited from

PhysicsConstraintBase.constraintTarget1

#### Defined in

Gameplay/index.d.ts:12498

• `set` **constraintTarget1**(`guid`): `void`

**`Description`**

设置约束对象 1

**`Effect`**

自动同步

#### Parameters

| Name   | Type     | Description              |
| :----- | :------- | :----------------------- |
| `guid` | `string` | usage:约束对象 1 的 GUID |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.constraintTarget1

#### Defined in

Gameplay/index.d.ts:12504

---

### constraintTarget2

• `get` **constraintTarget2**(): `string`

**`Description`**

获取约束对象 2

#### Returns

`string`

#### Inherited from

PhysicsConstraintBase.constraintTarget2

#### Defined in

Gameplay/index.d.ts:12508

• `set` **constraintTarget2**(`guid`): `void`

**`Description`**

设置约束对象 2

**`Effect`**

自动同步

#### Parameters

| Name   | Type     | Description              |
| :----- | :------- | :----------------------- |
| `guid` | `string` | usage:约束对象 2 的 GUID |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.constraintTarget2

#### Defined in

Gameplay/index.d.ts:12514

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取激活状态

#### Returns

`boolean`

激活状态

#### Defined in

Gameplay/index.d.ts:12717

• `set` **enable**(`EnableState`): `void`

**`Description`**

设置激活状态

#### Parameters

| Name          | Type      | Description    |
| :------------ | :-------- | :------------- |
| `EnableState` | `boolean` | usage:激活状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12712

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

PhysicsConstraintBase.forwardVector

#### Defined in

Core/index.d.ts:405

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

PhysicsConstraintBase.guid

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

PhysicsConstraintBase.isVisible

#### Defined in

Core/index.d.ts:496

---

### linearLimit

• `get` **linearLimit**(): `number`

**`Description`**

获取限制距离

#### Returns

`number`

限制距离

#### Defined in

Gameplay/index.d.ts:12763

• `set` **linearLimit**(`Limit`): `void`

**`Description`**

设置限制距离

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `Limit` | `number` | usage:限制距离 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12758

---

### linearVelocity

• `get` **linearVelocity**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取最大速度

#### Returns

[`Vector`](Type.Type.Vector.md)

最大速度

#### Defined in

Gameplay/index.d.ts:12783

• `set` **linearVelocity**(`Velocity`): `void`

**`Description`**

设置最大速度

#### Parameters

| Name       | Type                            | Description    |
| :--------- | :------------------------------ | :------------- |
| `Velocity` | [`Vector`](Type.Type.Vector.md) | usage:最大速度 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12778

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

PhysicsConstraintBase.lockState

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

PhysicsConstraintBase.lockState

#### Defined in

Core/index.d.ts:447

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

PhysicsConstraintBase.name

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

PhysicsConstraintBase.name

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

PhysicsConstraintBase.netStatus

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

PhysicsConstraintBase.parent

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

PhysicsConstraintBase.parent

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

PhysicsConstraintBase.relativeLocation

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

PhysicsConstraintBase.relativeLocation

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

PhysicsConstraintBase.relativeRotation

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

PhysicsConstraintBase.relativeRotation

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

PhysicsConstraintBase.relativeScale

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

PhysicsConstraintBase.relativeScale

#### Defined in

Core/index.d.ts:362

---

### restitution

• `get` **restitution**(): `number`

**`Description`**

获取反弹力

#### Returns

`number`

反弹力

#### Defined in

Gameplay/index.d.ts:12773

• `set` **restitution**(`restitution`): `void`

**`Description`**

设置反弹力

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `restitution` | `number` | usage:反弹力 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12768

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

PhysicsConstraintBase.rightVector

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

PhysicsConstraintBase.staticStatus

#### Defined in

Core/index.d.ts:442

---

### strength

• `get` **strength**(): `number`

**`Description`**

获取加速度

#### Returns

`number`

加速度

#### Defined in

Gameplay/index.d.ts:12793

• `set` **strength**(`strength`): `void`

**`Description`**

设置加速度

#### Parameters

| Name       | Type     | Description  |
| :--------- | :------- | :----------- |
| `strength` | `number` | usage:加速度 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12788

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

PhysicsConstraintBase.tag

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

PhysicsConstraintBase.tag

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

PhysicsConstraintBase.transform

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

PhysicsConstraintBase.transform

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

PhysicsConstraintBase.upVector

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

PhysicsConstraintBase.useUpdate

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

PhysicsConstraintBase.useUpdate

#### Defined in

Core/index.d.ts:432

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

PhysicsConstraintBase.worldLocation

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

PhysicsConstraintBase.worldLocation

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

PhysicsConstraintBase.worldRotation

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

PhysicsConstraintBase.worldRotation

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

PhysicsConstraintBase.worldScale

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

PhysicsConstraintBase.worldScale

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[addDestroyCallback](Gameplay.Gameplay.PhysicsConstraintBase.md#adddestroycallback)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncGetScriptByName](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncgetscriptbyname)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[attachToGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#attachtogameobject)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[clone](Gameplay.Gameplay.PhysicsConstraintBase.md#clone)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[deleteDestroyCallback](Gameplay.Gameplay.PhysicsConstraintBase.md#deletedestroycallback)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[destroy](Gameplay.Gameplay.PhysicsConstraintBase.md#destroy)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[detachFromGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

---

### getAxisXLinearType

▸ **getAxisXLinearType**(): [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

**`Description`**

获取 X 轴滑动类型

**`Effect`**

调用端生效

#### Returns

[`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

X 轴滑动类型

#### Defined in

Gameplay/index.d.ts:12741

---

### getAxisYLinearType

▸ **getAxisYLinearType**(): [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

**`Description`**

获取 Y 轴滑动类型

**`Effect`**

调用端生效

#### Returns

[`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

Y 轴滑动类型

#### Defined in

Gameplay/index.d.ts:12747

---

### getAxisZLinearType

▸ **getAxisZLinearType**(): [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

**`Description`**

获取 Z 轴滑动类型

**`Effect`**

调用端生效

#### Returns

[`LimitType`](../enums/Gameplay.Gameplay.LimitType.md)

Z 轴滑动类型

#### Defined in

Gameplay/index.d.ts:12753

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getBoundingBoxSize](Gameplay.Gameplay.PhysicsConstraintBase.md#getboundingboxsize)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getBounds](Gameplay.Gameplay.PhysicsConstraintBase.md#getbounds)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildByGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildbyguid)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildbyname)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildren](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildren)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildrenBoxCenter](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildrenboxcenter)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getCollision](Gameplay.Gameplay.PhysicsConstraintBase.md#getcollision)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getForwardVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativelocation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativerotation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeScale](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativescale)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRightVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getrightvector)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScriptByGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getscriptbyguid)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScriptByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getscriptbyname)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScripts](Gameplay.Gameplay.PhysicsConstraintBase.md#getscripts)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getSourceAssetGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getsourceassetguid)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getTransform](Gameplay.Gameplay.PhysicsConstraintBase.md#gettransform)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getUpVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getupvector)

#### Defined in

Core/index.d.ts:399

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldlocation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldrotation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldScale](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldscale)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[isRunningClient](Gameplay.Gameplay.PhysicsConstraintBase.md#isrunningclient)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[onDestroy](Gameplay.Gameplay.PhysicsConstraintBase.md#ondestroy)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[onStart](Gameplay.Gameplay.PhysicsConstraintBase.md#onstart)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[onUpdate](Gameplay.Gameplay.PhysicsConstraintBase.md#onupdate)

#### Defined in

Core/index.d.ts:23

---

### ready

▸ **ready**(): `Promise`<[`PhysicsPrism`](Gameplay.Gameplay.PhysicsPrism.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`PhysicsPrism`](Gameplay.Gameplay.PhysicsPrism.md)\>

准备好的对象

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[ready](Gameplay.Gameplay.PhysicsConstraintBase.md#ready)

#### Defined in

Core/index.d.ts:122

---

### setAxisXLinearType

▸ **setAxisXLinearType**(`LimitType`): `void`

**`Description`**

设置 X 轴滑动类型

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                                   | Description        |
| :---------- | :----------------------------------------------------- | :----------------- |
| `LimitType` | [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md) | usage:X 轴滑动类型 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12723

---

### setAxisYLinearType

▸ **setAxisYLinearType**(`LimitType`): `void`

**`Description`**

设置 Y 轴滑动类型

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                                   | Description        |
| :---------- | :----------------------------------------------------- | :----------------- |
| `LimitType` | [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md) | usage:Y 轴滑动类型 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12729

---

### setAxisZLinearType

▸ **setAxisZLinearType**(`LimitType`): `void`

**`Description`**

设置 Z 轴滑动类型

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                                   | Description        |
| :---------- | :----------------------------------------------------- | :----------------- |
| `LimitType` | [`LimitType`](../enums/Gameplay.Gameplay.LimitType.md) | usage:Z 轴滑动类型 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12735

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setCollision](Gameplay.Gameplay.PhysicsConstraintBase.md#setcollision)

#### Defined in

Core/index.d.ts:471

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setLocationAndRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setlocationandrotation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativelocation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativerotation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeScale](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setTransform](Gameplay.Gameplay.PhysicsConstraintBase.md#settransform)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setVisibility](Gameplay.Gameplay.PhysicsConstraintBase.md#setvisibility)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldlocation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldrotation)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldScale](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldscale)

#### Defined in

Core/index.d.ts:298

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncFind](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncfind)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncSpawnGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncspawngameobject)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[find](Gameplay.Gameplay.PhysicsConstraintBase.md#find)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[findGameObjectByTag](Gameplay.Gameplay.PhysicsConstraintBase.md#findgameobjectbytag)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getGameObjectByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getgameobjectbyname)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getGameObjectsByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getgameobjectsbyname)

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

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[spawnGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
