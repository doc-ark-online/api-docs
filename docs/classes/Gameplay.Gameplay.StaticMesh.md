[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / StaticMesh

# Class: StaticMesh

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).StaticMesh

**`Author`**

haifeng.yuan

**`Description`**

StaticMeshActor 相关接口主为要物理参数设置接口与材质参数设置接口

**`Network Status`**

usage:双端

**`Precautions`**

物理相关接口目前版本不支持证多端同步

## Hierarchy

- `GameObject`

  ↳ **`StaticMesh`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.StaticMesh.md#constructor)

### Accessors

- [angularDamping](Gameplay.Gameplay.StaticMesh.md#angulardamping)
- [applyImpulseOnDamage](Gameplay.Gameplay.StaticMesh.md#applyimpulseondamage)
- [forwardVector](Gameplay.Gameplay.StaticMesh.md#forwardvector)
- [gravityEnable](Gameplay.Gameplay.StaticMesh.md#gravityenable)
- [guid](Gameplay.Gameplay.StaticMesh.md#guid)
- [ignoreRadialForce](Gameplay.Gameplay.StaticMesh.md#ignoreradialforce)
- [ignoreRadialImpulse](Gameplay.Gameplay.StaticMesh.md#ignoreradialimpulse)
- [isSimulatingPhysics](Gameplay.Gameplay.StaticMesh.md#issimulatingphysics)
- [linerDamping](Gameplay.Gameplay.StaticMesh.md#linerdamping)
- [lockPositionX](Gameplay.Gameplay.StaticMesh.md#lockpositionx)
- [lockPositionY](Gameplay.Gameplay.StaticMesh.md#lockpositiony)
- [lockPositionZ](Gameplay.Gameplay.StaticMesh.md#lockpositionz)
- [lockRotationX](Gameplay.Gameplay.StaticMesh.md#lockrotationx)
- [lockRotationY](Gameplay.Gameplay.StaticMesh.md#lockrotationy)
- [lockRotationZ](Gameplay.Gameplay.StaticMesh.md#lockrotationz)
- [lockStatus](Gameplay.Gameplay.StaticMesh.md#lockstatus)
- [massEnable](Gameplay.Gameplay.StaticMesh.md#massenable)
- [massInKg](Gameplay.Gameplay.StaticMesh.md#massinkg)
- [name](Gameplay.Gameplay.StaticMesh.md#name)
- [netStatus](Gameplay.Gameplay.StaticMesh.md#netstatus)
- [parent](Gameplay.Gameplay.StaticMesh.md#parent)
- [relativeLocation](Gameplay.Gameplay.StaticMesh.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.StaticMesh.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.StaticMesh.md#relativescale)
- [rightVector](Gameplay.Gameplay.StaticMesh.md#rightvector)
- [staticStatus](Gameplay.Gameplay.StaticMesh.md#staticstatus)
- [tag](Gameplay.Gameplay.StaticMesh.md#tag)
- [transform](Gameplay.Gameplay.StaticMesh.md#transform)
- [upVector](Gameplay.Gameplay.StaticMesh.md#upvector)
- [useUpdate](Gameplay.Gameplay.StaticMesh.md#useupdate)
- [visible](Gameplay.Gameplay.StaticMesh.md#visible)
- [worldLocation](Gameplay.Gameplay.StaticMesh.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.StaticMesh.md#worldrotation)
- [worldScale](Gameplay.Gameplay.StaticMesh.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.StaticMesh.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.StaticMesh.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.StaticMesh.md#attachtogameobject)
- [clone](Gameplay.Gameplay.StaticMesh.md#clone)
- [createMaterialInstance](Gameplay.Gameplay.StaticMesh.md#creatematerialinstance)
- [deleteDestroyCallback](Gameplay.Gameplay.StaticMesh.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.StaticMesh.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.StaticMesh.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.StaticMesh.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.StaticMesh.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.StaticMesh.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.StaticMesh.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.StaticMesh.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.StaticMesh.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.StaticMesh.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.StaticMesh.md#getforwardvector)
- [getMaterialColor](Gameplay.Gameplay.StaticMesh.md#getmaterialcolor)
- [getRelativeLocation](Gameplay.Gameplay.StaticMesh.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.StaticMesh.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.StaticMesh.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.StaticMesh.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.StaticMesh.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.StaticMesh.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.StaticMesh.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.StaticMesh.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.StaticMesh.md#gettransform)
- [getUpVector](Gameplay.Gameplay.StaticMesh.md#getupvector)
- [getVisibility](Gameplay.Gameplay.StaticMesh.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.StaticMesh.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.StaticMesh.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.StaticMesh.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.StaticMesh.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.StaticMesh.md#ondestroy)
- [onStart](Gameplay.Gameplay.StaticMesh.md#onstart)
- [onUpdate](Gameplay.Gameplay.StaticMesh.md#onupdate)
- [ready](Gameplay.Gameplay.StaticMesh.md#ready)
- [resetMaterial](Gameplay.Gameplay.StaticMesh.md#resetmaterial)
- [setCollision](Gameplay.Gameplay.StaticMesh.md#setcollision)
- [setCullDistance](Gameplay.Gameplay.StaticMesh.md#setculldistance)
- [setLocationAndRotation](Gameplay.Gameplay.StaticMesh.md#setlocationandrotation)
- [setMaterial](Gameplay.Gameplay.StaticMesh.md#setmaterial)
- [setMaterialColor](Gameplay.Gameplay.StaticMesh.md#setmaterialcolor)
- [setOutlineAndColor](Gameplay.Gameplay.StaticMesh.md#setoutlineandcolor)
- [setRelativeLocation](Gameplay.Gameplay.StaticMesh.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.StaticMesh.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.StaticMesh.md#setrelativescale)
- [setStaticMeshAsset](Gameplay.Gameplay.StaticMesh.md#setstaticmeshasset)
- [setTransform](Gameplay.Gameplay.StaticMesh.md#settransform)
- [setVisibility](Gameplay.Gameplay.StaticMesh.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.StaticMesh.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.StaticMesh.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.StaticMesh.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.StaticMesh.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.StaticMesh.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.StaticMesh.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.StaticMesh.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.StaticMesh.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.StaticMesh.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.StaticMesh.md#spawngameobject)

## Constructors

### constructor

• **new StaticMesh**()

#### Inherited from

Core.GameObject.constructor

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

**`Description`**

角阻尼

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:2236

• `set` **angularDamping**(`value`): `void`

**`Description`**

设置角阻尼

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2240

---

### applyImpulseOnDamage

• `get` **applyImpulseOnDamage**(): `boolean`

**`Description`**

在伤害上应用冲量

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2212

• `set` **applyImpulseOnDamage**(`value`): `void`

**`Description`**

在伤害上应用冲量

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2216

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

Core/index.d.ts:409

---

### gravityEnable

• `get` **gravityEnable**(): `boolean`

**`Description`**

获取是否启用重力

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2188

• `set` **gravityEnable**(`value`): `void`

**`Description`**

是否启用重力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2192

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

Core/index.d.ts:39

---

### ignoreRadialForce

• `get` **ignoreRadialForce**(): `boolean`

**`Description`**

获取是否忽视径向力

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2204

• `set` **ignoreRadialForce**(`value`): `void`

**`Description`**

设置是否忽视径向力

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2208

---

### ignoreRadialImpulse

• `get` **ignoreRadialImpulse**(): `boolean`

**`Description`**

获取是否忽视径向冲量

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2196

• `set` **ignoreRadialImpulse**(`value`): `void`

**`Description`**

忽视径向冲量

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2200

---

### isSimulatingPhysics

• `get` **isSimulatingPhysics**(): `boolean`

**`Description`**

获取是否模拟物理

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2172

• `set` **isSimulatingPhysics**(`value`): `void`

**`Description`**

设置模拟物理状态

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2176

---

### linerDamping

• `get` **linerDamping**(): `number`

**`Description`**

获取线性阻尼

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:2228

• `set` **linerDamping**(`value`): `void`

**`Description`**

设置线性阻尼

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2232

---

### lockPositionX

• `get` **lockPositionX**(): `boolean`

**`Description`**

获取是否约束位置 X

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2244

• `set` **lockPositionX**(`value`): `void`

**`Description`**

设置是否约束位置 X

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2248

---

### lockPositionY

• `get` **lockPositionY**(): `boolean`

**`Description`**

获取是否约束位置 Y

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2252

• `set` **lockPositionY**(`value`): `void`

**`Description`**

设置是否约束位置 Y

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2256

---

### lockPositionZ

• `get` **lockPositionZ**(): `boolean`

**`Description`**

获取是否约束位置 Z

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2260

• `set` **lockPositionZ**(`value`): `void`

**`Description`**

设置是否约束位置 Z

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2264

---

### lockRotationX

• `get` **lockRotationX**(): `boolean`

**`Description`**

获取是否约束旋转 X

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2268

• `set` **lockRotationX**(`value`): `void`

**`Description`**

设置是否约束旋转 X

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2272

---

### lockRotationY

• `get` **lockRotationY**(): `boolean`

**`Description`**

获取是否约束旋转 Y

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2276

• `set` **lockRotationY**(`value`): `void`

**`Description`**

设置是否约束旋转 Y

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2280

---

### lockRotationZ

• `get` **lockRotationZ**(): `boolean`

**`Description`**

获取是否约束旋转 Z

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2284

• `set` **lockRotationZ**(`value`): `void`

**`Description`**

约束旋转 Z

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2288

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:456

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:451

---

### massEnable

• `get` **massEnable**(): `boolean`

**`Description`**

获取是否使用质量

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:2180

• `set` **massEnable**(`value`): `void`

**`Description`**

是否启用质量

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2184

---

### massInKg

• `get` **massInKg**(): `number`

**`Description`**

获取质量大小

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:2220

• `set` **massInKg**(`value`): `void`

**`Description`**

设置质量大小

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2224

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

Core/index.d.ts:171

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

Core/index.d.ts:177

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

Core/index.d.ts:513

---

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:462

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newParent` | `GameObject` |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:467

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

Core/index.d.ts:308

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

Core/index.d.ts:314

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

Core/index.d.ts:334

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

Core/index.d.ts:340

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

Core/index.d.ts:360

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

Core/index.d.ts:366

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

Core/index.d.ts:423

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:446

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

Core/index.d.ts:189

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

Core/index.d.ts:183

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

Core/index.d.ts:209

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

Core/index.d.ts:215

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

Core/index.d.ts:396

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:441

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

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

Core/index.d.ts:436

---

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.visible

#### Defined in

Core/index.d.ts:507

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

Core/index.d.ts:234

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

Core/index.d.ts:239

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

Core/index.d.ts:258

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

Core/index.d.ts:264

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

Core/index.d.ts:283

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

Core/index.d.ts:288

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

Core.GameObject.addDestroyCallback

#### Defined in

Core/index.d.ts:627

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

Core.GameObject.asyncGetScriptByName

#### Defined in

Core/index.d.ts:574

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| `obj` | `GameObject` | usage:物体  |

#### Returns

`void`

#### Inherited from

Core.GameObject.attachToGameObject

#### Defined in

Core/index.d.ts:594

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

#### Inherited from

Core.GameObject.clone

#### Defined in

Core/index.d.ts:554

---

### createMaterialInstance

▸ **createMaterialInstance**(`Index`): `void`

**`Description`**

创建材质实例

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `Index` | `number` | usage:第几个材质 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2344

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

Core.GameObject.deleteDestroyCallback

#### Defined in

Core/index.d.ts:633

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

Core.GameObject.destroy

#### Defined in

Core/index.d.ts:150

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

Core.GameObject.detachFromGameObject

#### Defined in

Core/index.d.ts:599

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

Core.GameObject.getBoundingBoxSize

#### Defined in

Core/index.d.ts:609

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

Core.GameObject.getBounds

#### Defined in

Core/index.d.ts:198

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByGuid

#### Defined in

Core/index.d.ts:547

---

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByName

#### Defined in

Core/index.d.ts:540

---

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取 Children，客户端不维系父子关系。推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.getChildren

#### Defined in

Core/index.d.ts:533

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

Core.GameObject.getChildrenBoxCenter

#### Defined in

Core/index.d.ts:621

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

Core.GameObject.getCollision

#### Defined in

Core/index.d.ts:484

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

Core.GameObject.getForwardVector

#### Defined in

Core/index.d.ts:417

---

### getMaterialColor

▸ **getMaterialColor**(`Index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `Index` | `number` | usage:第几个材质 |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

获取的颜色

#### Defined in

Gameplay/index.d.ts:2338

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

Core.GameObject.getRelativeLocation

#### Defined in

Core/index.d.ts:322

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

Core.GameObject.getRelativeRotation

#### Defined in

Core/index.d.ts:348

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

Core.GameObject.getRelativeScale

#### Defined in

Core/index.d.ts:374

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

Core.GameObject.getRightVector

#### Defined in

Core/index.d.ts:431

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

Core.GameObject.getScriptByGuid

#### Defined in

Core/index.d.ts:581

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

Core.GameObject.getScriptByName

#### Defined in

Core/index.d.ts:567

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

#### Inherited from

Core.GameObject.getScripts

#### Defined in

Core/index.d.ts:560

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

Core.GameObject.getSourceAssetGuid

#### Defined in

Core/index.d.ts:639

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

Core.GameObject.getTransform

#### Defined in

Core/index.d.ts:223

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

Core.GameObject.getUpVector

#### Defined in

Core/index.d.ts:403

---

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取 GameObject 是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.getVisibility

#### Defined in

Core/index.d.ts:490

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

Core.GameObject.getWorldLocation

#### Defined in

Core/index.d.ts:247

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

Core.GameObject.getWorldRotation

#### Defined in

Core/index.d.ts:272

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

Core.GameObject.getWorldScale

#### Defined in

Core/index.d.ts:296

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

Core.GameObject.isRunningClient

#### Defined in

Core/index.d.ts:50

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

Core.GameObject.onDestroy

#### Defined in

Core/index.d.ts:18

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

Core.GameObject.onStart

#### Defined in

Core/index.d.ts:13

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

Core.GameObject.onUpdate

#### Defined in

Core/index.d.ts:24

---

### ready

▸ **ready**(): `Promise`<[`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)\>

准备好的对象

#### Inherited from

Core.GameObject.ready

#### Defined in

Core/index.d.ts:126

---

### resetMaterial

▸ **resetMaterial**(): `void`

**`Description`**

还原物体材质

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2306

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

Core.GameObject.setCollision

#### Defined in

Core/index.d.ts:475

---

### setCullDistance

▸ **setCullDistance**(`inCullDistance`): `void`

**`Description`**

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性 ≤0 时，裁剪距离会根据对象尺寸自动调整(自动启用 CullDistanceVolume 功能)

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

Gameplay/index.d.ts:2351

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

Core.GameObject.setLocationAndRotation

#### Defined in

Core/index.d.ts:387

---

### setMaterial

▸ **setMaterial**(`MaterialGUID`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name           | Type     | Description             |
| :------------- | :------- | :---------------------- |
| `MaterialGUID` | `string` | usage: 材质 ID default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2312

▸ **setMaterial**(`MaterialGUID`, `Transparency`, `isTransparent`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                    |
| :-------------- | :-------- | :----------------------------- |
| `MaterialGUID`  | `string`  | usage: 材质 ID                 |
| `Transparency`  | `number`  | usage: 透明度 default: 0.8     |
| `isTransparent` | `boolean` | usage: 是否透明 default: false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2320

---

### setMaterialColor

▸ **setMaterialColor**(`Index`, `InColor`): `void`

**`Description`**

设置材质颜色

**`Effect`**

调用端生效

#### Parameters

| Name      | Type                                      | Description        |
| :-------- | :---------------------------------------- | :----------------- |
| `Index`   | `number`                                  | usage:第几个材质   |
| `InColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:要赋值的颜色 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2331

---

### setOutlineAndColor

▸ **setOutlineAndColor**(`Enable`, `ColorIndex`): `void`

**`Description`**

设置对象描边及描边颜色，需要场景中存在后处理对象。

**`Effect`**

调用端生效

#### Parameters

| Name         | Type      | Description                                                          |
| :----------- | :-------- | :------------------------------------------------------------------- |
| `Enable`     | `boolean` | usage: 是否开启描边 default:                                         |
| `ColorIndex` | `number`  | usage: 设置描边颜色，与后处理中颜色 Index 对应，-1 为无颜色 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2295

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

Core.GameObject.setRelativeLocation

#### Defined in

Core/index.d.ts:328

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

Core.GameObject.setRelativeRotation

#### Defined in

Core/index.d.ts:354

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

Core.GameObject.setRelativeScale

#### Defined in

Core/index.d.ts:380

---

### setStaticMeshAsset

▸ **setStaticMeshAsset**(`InAssetGuid`): `void`

**`Description`**

设置静态网格资源

**`Effect`**

调用端生效

#### Parameters

| Name          | Type     | Description               |
| :------------ | :------- | :------------------------ |
| `InAssetGuid` | `string` | usage: 资源 GUID default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2301

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

Core.GameObject.setTransform

#### Defined in

Core/index.d.ts:229

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

Core.GameObject.setVisibility

#### Defined in

Core/index.d.ts:497

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

Core.GameObject.setWorldLocation

#### Defined in

Core/index.d.ts:253

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

Core.GameObject.setWorldRotation

#### Defined in

Core/index.d.ts:278

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

Core.GameObject.setWorldScale

#### Defined in

Core/index.d.ts:302

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

#### Inherited from

Core.GameObject.asyncFind

#### Defined in

Core/index.d.ts:165

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

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

`Promise`<`GameObject`\>

构造的 GameObject

#### Inherited from

Core.GameObject.asyncSpawnGameObject

#### Defined in

Core/index.d.ts:142

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

#### Inherited from

Core.GameObject.find

#### Defined in

Core/index.d.ts:157

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.findGameObjectByTag

#### Defined in

Core/index.d.ts:588

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

Core.GameObject.getGameObjectByName

#### Defined in

Core/index.d.ts:527

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

#### Inherited from

Core.GameObject.getGameObjectsByName

#### Defined in

Core/index.d.ts:520

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

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

`GameObject`

构造的 GameObject

#### Inherited from

Core.GameObject.spawnGameObject

#### Defined in

Core/index.d.ts:134
