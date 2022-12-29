[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsAngularMotor

# PhysicsAngularMotor <Badge type="tip" text="Class" />

**`Description`**

物理力矩发动机

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsAngularMotor`**

## Table of contents

| Accessors                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **[constraintTarget1](Gameplay.Gameplay.PhysicsAngularMotor.md#constrainttarget1)**(): `string` <br> 获取约束对象 1                             |
| **[constraintTarget2](Gameplay.Gameplay.PhysicsAngularMotor.md#constrainttarget2)**(): `string` <br> 获取约束对象 2                             |
| **[enable](Gameplay.Gameplay.PhysicsAngularMotor.md#enable)**(): `boolean` <br> 获取激活状态                                                    |
| **[forwardVector](Gameplay.Gameplay.PhysicsAngularMotor.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量      |
| **[guid](Gameplay.Gameplay.PhysicsAngularMotor.md#guid)**(): `string` <br> 获取对象的 guid（唯一标识一个对象的字符串）。                        |
| **[lockStatus](Gameplay.Gameplay.PhysicsAngularMotor.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定                                        |
| **[name](Gameplay.Gameplay.PhysicsAngularMotor.md#name)**(): `string` <br> 返回当前物体名称                                                     |
| **[netStatus](Gameplay.Gameplay.PhysicsAngularMotor.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态 |
| **[parent](Gameplay.Gameplay.PhysicsAngularMotor.md#parent)**(): `GameObject` <br> 获取当前父物体                                               |
| **[relativeLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置          |
| **[relativeRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转      |
| **[relativeScale](Gameplay.Gameplay.PhysicsAngularMotor.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                |
| **[rightVector](Gameplay.Gameplay.PhysicsAngularMotor.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量          |
| **[staticStatus](Gameplay.Gameplay.PhysicsAngularMotor.md#staticstatus)**(): `boolean` <br> 获取对象是否静态                                    |
| **[tag](Gameplay.Gameplay.PhysicsAngularMotor.md#tag)**(): `string` <br> 获取当前物体的 Tag                                                     |
| **[torque](Gameplay.Gameplay.PhysicsAngularMotor.md#torque)**(): [`Vector`](Type.Type.Vector.md) <br> 获取旋转最大速度                          |
| **[torqueStrength](Gameplay.Gameplay.PhysicsAngularMotor.md#torquestrength)**(): `number` <br> 获取加速度                                       |
| **[transform](Gameplay.Gameplay.PhysicsAngularMotor.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 transform        |
| **[upVector](Gameplay.Gameplay.PhysicsAngularMotor.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                |
| **[useUpdate](Gameplay.Gameplay.PhysicsAngularMotor.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新                                      |
| **[visible](Gameplay.Gameplay.PhysicsAngularMotor.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api 重构 replacement:getVisibility()     |
| **[worldLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标          |
| **[worldRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转      |
| **[worldScale](Gameplay.Gameplay.PhysicsAngularMotor.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                |

| Methods                                                                                                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addDestroyCallback](Gameplay.Gameplay.PhysicsAngularMotor.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体 Destroy 事件回调                                                                   |
| **[asyncGetScriptByName](Gameplay.Gameplay.PhysicsAngularMotor.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系                                                  |
| **[attachToGameObject](Gameplay.Gameplay.PhysicsAngularMotor.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上                                                                                           |
| **[clone](Gameplay.Gameplay.PhysicsAngularMotor.md#clone)**(`boolean`): `GameObject` <br> 复制对象                                                                                                                                |
| **[deleteDestroyCallback](Gameplay.Gameplay.PhysicsAngularMotor.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体 Destroy 事件回调                                                             |
| **[destroy](Gameplay.Gameplay.PhysicsAngularMotor.md#destroy)**(): `void` <br> 删除对象                                                                                                                                           |
| **[detachFromGameObject](Gameplay.Gameplay.PhysicsAngularMotor.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离                                                                                             |
| **[getBoundingBoxSize](Gameplay.Gameplay.PhysicsAngularMotor.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小                             |
| **[getBounds](Gameplay.Gameplay.PhysicsAngularMotor.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取 GameObject 边界                                     |
| **[getChildByGuid](Gameplay.Gameplay.PhysicsAngularMotor.md#getchildbyguid)**(`string`): `GameObject` <br> 根据 Guid 查找子物体                                                                                                   |
| **[getChildByName](Gameplay.Gameplay.PhysicsAngularMotor.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体                                                                                                     |
| **[getChildren](Gameplay.Gameplay.PhysicsAngularMotor.md#getchildren)**(): `GameObject`[] <br> 获取 Children，客户端不维系父子关系。推荐使用 Find 替代                                                                            |
| **[getChildrenBoxCenter](Gameplay.Gameplay.PhysicsAngularMotor.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0]) |
| **[getCollision](Gameplay.Gameplay.PhysicsAngularMotor.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态             |
| **[getForwardVector](Gameplay.Gameplay.PhysicsAngularMotor.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                   |
| **[getRelativeLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                       |
| **[getRelativeRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                               |
| **[getRelativeScale](Gameplay.Gameplay.PhysicsAngularMotor.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                             |
| **[getRightVector](Gameplay.Gameplay.PhysicsAngularMotor.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                       |
| **[getScriptByGuid](Gameplay.Gameplay.PhysicsAngularMotor.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScriptByName](Gameplay.Gameplay.PhysicsAngularMotor.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScripts](Gameplay.Gameplay.PhysicsAngularMotor.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                         |
| **[getSourceAssetGuid](Gameplay.Gameplay.PhysicsAngularMotor.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的 GUID                                                                                                |
| **[getTransform](Gameplay.Gameplay.PhysicsAngularMotor.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 Transform                                               |
| **[getUpVector](Gameplay.Gameplay.PhysicsAngularMotor.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                             |
| **[getVisibility](Gameplay.Gameplay.PhysicsAngularMotor.md#getvisibility)**(): `boolean` <br> 获取 GameObject 是否被显示                                                                                                          |
| **[getWorldLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                       |
| **[getWorldRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                               |
| **[getWorldScale](Gameplay.Gameplay.PhysicsAngularMotor.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                             |
| **[isRunningClient](Gameplay.Gameplay.PhysicsAngularMotor.md#isrunningclient)**(): `boolean` <br> 是否为客户端                                                                                                                    |
| **[onDestroy](Gameplay.Gameplay.PhysicsAngularMotor.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用                                                                                                                          |
| **[onStart](Gameplay.Gameplay.PhysicsAngularMotor.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用                                                                                                                        |
| **[onUpdate](Gameplay.Gameplay.PhysicsAngularMotor.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行                                                                       |
| **[ready](Gameplay.Gameplay.PhysicsAngularMotor.md#ready)**(): `Promise`<[`PhysicsAngularMotor`](Gameplay.Gameplay.PhysicsAngularMotor.md)\> <br> GameObject 准备好后返回                                                         |
| **[setCollision](Gameplay.Gameplay.PhysicsAngularMotor.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态                                                        |
| **[setLocationAndRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转                     |
| **[setRelativeLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置                                                                                |
| **[setRelativeRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转                                                                            |
| **[setRelativeScale](Gameplay.Gameplay.PhysicsAngularMotor.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放                                                                                      |
| **[setTransform](Gameplay.Gameplay.PhysicsAngularMotor.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体 transform                                                                              |
| **[setVisibility](Gameplay.Gameplay.PhysicsAngularMotor.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置 GameObject 是否被显示                                          |
| **[setWorldLocation](Gameplay.Gameplay.PhysicsAngularMotor.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标                                                                                |
| **[setWorldRotation](Gameplay.Gameplay.PhysicsAngularMotor.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转                                                                            |
| **[setWorldScale](Gameplay.Gameplay.PhysicsAngularMotor.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放                                                                                      |
| **[asyncFind](Gameplay.Gameplay.PhysicsAngularMotor.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);                                |
| **[asyncSpawnGameObject](Gameplay.Gameplay.PhysicsAngularMotor.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建                            |
| **[find](Gameplay.Gameplay.PhysicsAngularMotor.md#find)**(`string`): `GameObject` <br> 通过 Guid 查找 GameObject                                                                                                                  |
| **[findGameObjectByTag](Gameplay.Gameplay.PhysicsAngularMotor.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义 Tag 获取 GameObject                                                                             |
| **[getGameObjectByName](Gameplay.Gameplay.PhysicsAngularMotor.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体                                                                                             |
| **[getGameObjectsByName](Gameplay.Gameplay.PhysicsAngularMotor.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体                                                                                         |
| **[spawnGameObject](Gameplay.Gameplay.PhysicsAngularMotor.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject                                                                                       |

## Accessors

### constraintTarget1

• `get` **constraintTarget1**(): `string`

**`Description`**

获取约束对象 1

#### Returns

`string`

• `set` **constraintTarget1**(`guid`): `void`

**`Description`**

设置约束对象 1

**`Effect`**

自动同步

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `guid` | `string` | 约束对象 1 的 GUID |

#### Returns

`void`

---

### constraintTarget2

• `get` **constraintTarget2**(): `string`

**`Description`**

获取约束对象 2

#### Returns

`string`

• `set` **constraintTarget2**(`guid`): `void`

**`Description`**

设置约束对象 2

**`Effect`**

自动同步

#### Parameters

| Name   | Type     | Description        |
| :----- | :------- | :----------------- |
| `guid` | `string` | 约束对象 2 的 GUID |

#### Returns

`void`

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取激活状态

**`Effect`**

调用端生效

#### Returns

`boolean`

激活状态

• `set` **enable**(`EnableState`): `void`

**`Description`**

设置激活状态

**`Effect`**

自动同步

#### Parameters

| Name          | Type      | Description |
| :------------ | :-------- | :---------- |
| `EnableState` | `boolean` | 激活状态    |

#### Returns

`void`

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

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

---

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

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

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

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

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

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

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

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放        |

#### Returns

`void`

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

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

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

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | Tag         |

#### Returns

`void`

---

### torque

• `get` **torque**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取旋转最大速度

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

旋转最大速度

• `set` **torque**(`vector`): `void`

**`Description`**

设置旋转最大速度

**`Effect`**

自动同步

#### Parameters

| Name     | Type                            | Description  |
| :------- | :------------------------------ | :----------- |
| `vector` | [`Vector`](Type.Type.Vector.md) | 旋转最大速度 |

#### Returns

`void`

---

### torqueStrength

• `get` **torqueStrength**(): `number`

**`Description`**

获取加速度

**`Effect`**

调用端生效

#### Returns

`number`

加速度

• `set` **torqueStrength**(`strength`): `void`

**`Description`**

设置加速度

**`Effect`**

调用端生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `strength` | `number` | 加速度      |

#### Returns

`void`

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

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description        |
| :---------- | :------------------------------------ | :----------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的 transform |

#### Returns

`void`

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

---

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

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

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

---

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

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

---

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

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

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

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
| `name` | `string` | 名字        |

#### Returns

`Promise`<`Script`\>

Script

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
| `obj` | `GameObject` | 物体        |

#### Returns

`void`

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description           |
| :-------------- | :-------- | :-------------------- |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description |
| :--------- | :-------------------------------- | :---------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件    |

#### Returns

`void`

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

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

| Name                      | Type                            | Description                                  |
| :------------------------ | :------------------------------ | :------------------------------------------- |
| `nonColliding?`           | `boolean`                       | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | 如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                |
| :------------------------ | :------------------------------ | :----------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | 是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | 是否递归包含子物体 default:undefined       |

#### Returns

`void`

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
| `guid` | `string` | guid        |

#### Returns

`GameObject`

查找的物体

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
| `name` | `string` | 名称        |

#### Returns

`GameObject`

查找的物体

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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
| `guid` | `string` | guid        |

#### Returns

`Script`

Script

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
| `name` | `string` | 名字        |

#### Returns

`Script`

Script

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

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

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

| Name     | Type                                | Description                               |
| :------- | :---------------------------------- | :---------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

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

| Name     | Type                            | Description                             |
| :------- | :------------------------------ | :-------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

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

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description            |
| :--- | :------- | :--------------------- |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

---

### ready

▸ **ready**(): `Promise`<[`PhysicsAngularMotor`](Gameplay.Gameplay.PhysicsAngularMotor.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`PhysicsAngularMotor`](Gameplay.Gameplay.PhysicsAngularMotor.md)\>

准备好的对象

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

| Name                   | Type                                                                                                                   | Description                                               |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | 是否传递给子节点 default: false                           |

#### Returns

`void`

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | 世界位置    |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转    |

#### Returns

`void`

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
| `location` | [`Vector`](Type.Type.Vector.md) | 位置        |

#### Returns

`void`

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转        |

#### Returns

`void`

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description      |
| :------ | :------------------------------ | :--------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description |
| :---------- | :------------------------------------ | :---------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform   |

#### Returns

`void`

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                  |
| :--------------------- | :------------------------------------------------------- | :--------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态                         |
| `propagateToChildren?` | `boolean`                                                | 是否设置子物体 default:false |

#### Returns

`void`

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界坐标 |

#### Returns

`void`

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description      |
| :--------- | :---------------------------------- | :--------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description      |
| :--- | :------------------------------ | :--------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | 物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `InTag` | `string` | 自定义 Tag  |

#### Returns

`GameObject`[]

Array`<GameObject>`

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | 物体名字    |

#### Returns

`GameObject`[]

返回所有查找到的对象

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `assetId`       | `string`  | 资源的 GUID                     |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject
