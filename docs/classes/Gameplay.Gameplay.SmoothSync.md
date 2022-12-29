[Gameplay](../modules/Gameplay.Gameplay.md) / SmoothSync

# SmoothSync <Badge type="tip" text="Class" />

**`Description`**

平滑组件

## Hierarchy

- `GameObject`

  ↳ **`SmoothSync`**

## Table of contents

| Accessors                                                                                                                                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[extrapolationTimeLint](Gameplay.Gameplay.SmoothSync.md#extrapolationtimelint)**(): `number` <br> 获取一个非拥有的对象可以推测到未来多长时间                                                            |
| **[forwardVector](Gameplay.Gameplay.SmoothSync.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                                         |
| **[guid](Gameplay.Gameplay.SmoothSync.md#guid)**(): `string` <br> 获取对象的 guid（唯一标识一个对象的字符串）。                                                                                           |
| **[lockStatus](Gameplay.Gameplay.SmoothSync.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定                                                                                                           |
| **[name](Gameplay.Gameplay.SmoothSync.md#name)**(): `string` <br> 返回当前物体名称                                                                                                                        |
| **[netStatus](Gameplay.Gameplay.SmoothSync.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态                                                                    |
| **[parent](Gameplay.Gameplay.SmoothSync.md#parent)**(): `GameObject` <br> 获取当前父物体                                                                                                                  |
| **[positionSnapThreshold](Gameplay.Gameplay.SmoothSync.md#positionsnapthreshold)**(): `number` <br> 如果一个同步对象的位置超过目标位置的 positionSnapThreshold 单位，它将立即跳到目标位置而不是线性插值。 |
| **[relativeLocation](Gameplay.Gameplay.SmoothSync.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                                             |
| **[relativeRotation](Gameplay.Gameplay.SmoothSync.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                                                         |
| **[relativeScale](Gameplay.Gameplay.SmoothSync.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                                                   |
| **[rightVector](Gameplay.Gameplay.SmoothSync.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                                             |
| **[rotationSnapThreshold](Gameplay.Gameplay.SmoothSync.md#rotationsnapthreshold)**(): `number` <br> 如果一个同步对象的旋转大于目标旋转的 rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值      |
| **[scaleSnapThreshold](Gameplay.Gameplay.SmoothSync.md#scalesnapthreshold)**(): `number` <br> 如果一个同步对象的规模超过目标规模的 scaleSnapThreshold 单位，它将立即跳转到目标规模而不是线性插值。        |
| **[sceneComponentToSync](Gameplay.Gameplay.SmoothSync.md#scenecomponenttosync)**(`GameObject`): `void` <br> 设置在平滑同步上要同步的物体                                                                  |
| **[sendRate](Gameplay.Gameplay.SmoothSync.md#sendrate)**(): `number` <br> 获取每秒发送网络更新的次数                                                                                                      |
| **[staticStatus](Gameplay.Gameplay.SmoothSync.md#staticstatus)**(): `boolean` <br> 获取对象是否静态                                                                                                       |
| **[syncPositionEnable](Gameplay.Gameplay.SmoothSync.md#syncpositionenable)**(): `boolean` <br> 获取是否同步位置                                                                                           |
| **[syncRotationEnable](Gameplay.Gameplay.SmoothSync.md#syncrotationenable)**(): `boolean` <br> 获取是否同步旋转                                                                                           |
| **[syncScaleEnable](Gameplay.Gameplay.SmoothSync.md#syncscaleenable)**(): `boolean` <br> 获取是否同步缩放                                                                                                 |
| **[tag](Gameplay.Gameplay.SmoothSync.md#tag)**(): `string` <br> 获取当前物体的 Tag                                                                                                                        |
| **[timeSmoothing](Gameplay.Gameplay.SmoothSync.md#timesmoothing)**(): `number` <br> 获取要花多少时间才能使所有者平滑                                                                                      |
| **[transform](Gameplay.Gameplay.SmoothSync.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 transform                                                                           |
| **[upVector](Gameplay.Gameplay.SmoothSync.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                                                   |
| **[useUpdate](Gameplay.Gameplay.SmoothSync.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新                                                                                                         |
| **[visible](Gameplay.Gameplay.SmoothSync.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api 重构 replacement:getVisibility()                                                                        |
| **[worldLocation](Gameplay.Gameplay.SmoothSync.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                                             |
| **[worldRotation](Gameplay.Gameplay.SmoothSync.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                                                         |
| **[worldScale](Gameplay.Gameplay.SmoothSync.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                                                   |

| Methods                                                                                                                                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addDestroyCallback](Gameplay.Gameplay.SmoothSync.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体 Destroy 事件回调                                                                   |
| **[asyncGetScriptByName](Gameplay.Gameplay.SmoothSync.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系                                                  |
| **[attachToGameObject](Gameplay.Gameplay.SmoothSync.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上                                                                                           |
| **[clone](Gameplay.Gameplay.SmoothSync.md#clone)**(`boolean`): `GameObject` <br> 复制对象                                                                                                                                |
| **[deleteDestroyCallback](Gameplay.Gameplay.SmoothSync.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体 Destroy 事件回调                                                             |
| **[destroy](Gameplay.Gameplay.SmoothSync.md#destroy)**(): `void` <br> 删除对象                                                                                                                                           |
| **[detachFromGameObject](Gameplay.Gameplay.SmoothSync.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离                                                                                             |
| **[getBoundingBoxSize](Gameplay.Gameplay.SmoothSync.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小                             |
| **[getBounds](Gameplay.Gameplay.SmoothSync.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取 GameObject 边界                                     |
| **[getChildByGuid](Gameplay.Gameplay.SmoothSync.md#getchildbyguid)**(`string`): `GameObject` <br> 根据 Guid 查找子物体                                                                                                   |
| **[getChildByName](Gameplay.Gameplay.SmoothSync.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体                                                                                                     |
| **[getChildren](Gameplay.Gameplay.SmoothSync.md#getchildren)**(): `GameObject`[] <br> 获取 Children，客户端不维系父子关系。推荐使用 Find 替代                                                                            |
| **[getChildrenBoxCenter](Gameplay.Gameplay.SmoothSync.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0]) |
| **[getCollision](Gameplay.Gameplay.SmoothSync.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态             |
| **[getForwardVector](Gameplay.Gameplay.SmoothSync.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量                                                   |
| **[getRelativeLocation](Gameplay.Gameplay.SmoothSync.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置                                                       |
| **[getRelativeRotation](Gameplay.Gameplay.SmoothSync.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转                                               |
| **[getRelativeScale](Gameplay.Gameplay.SmoothSync.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放                                                             |
| **[getRightVector](Gameplay.Gameplay.SmoothSync.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量                                                       |
| **[getScriptByGuid](Gameplay.Gameplay.SmoothSync.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScriptByName](Gameplay.Gameplay.SmoothSync.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代                                                         |
| **[getScripts](Gameplay.Gameplay.SmoothSync.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代                                                                         |
| **[getSourceAssetGuid](Gameplay.Gameplay.SmoothSync.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的 GUID                                                                                                |
| **[getTransform](Gameplay.Gameplay.SmoothSync.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体 Transform                                               |
| **[getUpVector](Gameplay.Gameplay.SmoothSync.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量                                                             |
| **[getVisibility](Gameplay.Gameplay.SmoothSync.md#getvisibility)**(): `boolean` <br> 获取 GameObject 是否被显示                                                                                                          |
| **[getWorldLocation](Gameplay.Gameplay.SmoothSync.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标                                                       |
| **[getWorldRotation](Gameplay.Gameplay.SmoothSync.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转                                               |
| **[getWorldScale](Gameplay.Gameplay.SmoothSync.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放                                                             |
| **[isRunningClient](Gameplay.Gameplay.SmoothSync.md#isrunningclient)**(): `boolean` <br> 是否为客户端                                                                                                                    |
| **[onDestroy](Gameplay.Gameplay.SmoothSync.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用                                                                                                                          |
| **[onStart](Gameplay.Gameplay.SmoothSync.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用                                                                                                                        |
| **[onUpdate](Gameplay.Gameplay.SmoothSync.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行                                                                       |
| **[ready](Gameplay.Gameplay.SmoothSync.md#ready)**(): `Promise`<[`SmoothSync`](Gameplay.Gameplay.SmoothSync.md)\> <br> GameObject 准备好后返回                                                                           |
| **[setCollision](Gameplay.Gameplay.SmoothSync.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态                                                        |
| **[setLocationAndRotation](Gameplay.Gameplay.SmoothSync.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转                     |
| **[setRelativeLocation](Gameplay.Gameplay.SmoothSync.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置                                                                                |
| **[setRelativeRotation](Gameplay.Gameplay.SmoothSync.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转                                                                            |
| **[setRelativeScale](Gameplay.Gameplay.SmoothSync.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放                                                                                      |
| **[setTransform](Gameplay.Gameplay.SmoothSync.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体 transform                                                                              |
| **[setVisibility](Gameplay.Gameplay.SmoothSync.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置 GameObject 是否被显示                                          |
| **[setWorldLocation](Gameplay.Gameplay.SmoothSync.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标                                                                                |
| **[setWorldRotation](Gameplay.Gameplay.SmoothSync.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转                                                                            |
| **[setWorldScale](Gameplay.Gameplay.SmoothSync.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放                                                                                      |
| **[asyncFind](Gameplay.Gameplay.SmoothSync.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);                                |
| **[asyncSpawnGameObject](Gameplay.Gameplay.SmoothSync.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建                            |
| **[find](Gameplay.Gameplay.SmoothSync.md#find)**(`string`): `GameObject` <br> 通过 Guid 查找 GameObject                                                                                                                  |
| **[findGameObjectByTag](Gameplay.Gameplay.SmoothSync.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义 Tag 获取 GameObject                                                                             |
| **[getGameObjectByName](Gameplay.Gameplay.SmoothSync.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体                                                                                             |
| **[getGameObjectsByName](Gameplay.Gameplay.SmoothSync.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体                                                                                         |
| **[spawnGameObject](Gameplay.Gameplay.SmoothSync.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject                                                                                       |

## Accessors

### extrapolationTimeLint

• `get` **extrapolationTimeLint**(): `number`

**`Description`**

获取一个非拥有的对象可以推测到未来多长时间

**`Effect`**

调用端生效

#### Returns

`number`

extrapolationTimeLint

• `set` **extrapolationTimeLint**(`value`): `void`

**`Description`**

设置一个非拥有的对象可以推测到未来多长时间

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `value` | `number` | 时间        |

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

### positionSnapThreshold

• `get` **positionSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的位置超过目标位置的 positionSnapThreshold 单位，它将立即跳到目标位置而不是线性插值。

**`Effect`**

调用端生效

#### Returns

`number`

positionSnapThreshold

• `set` **positionSnapThreshold**(`value`): `void`

**`Description`**

设置 positionSnapThreshold 值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description                   |
| :------ | :------- | :---------------------------- |
| `value` | `number` | 设置 positionSnapThreshold 值 |

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

### rotationSnapThreshold

• `get` **rotationSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的旋转大于目标旋转的 rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值

**`Effect`**

调用端生效

#### Returns

`number`

rotationSnapThreshold

• `set` **rotationSnapThreshold**(`value`): `void`

**`Description`**

设置 RotationSnapThreshold 值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description                   |
| :------ | :------- | :---------------------------- |
| `value` | `number` | 设置 RotationSnapThreshold 值 |

#### Returns

`void`

---

### scaleSnapThreshold

• `get` **scaleSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的规模超过目标规模的 scaleSnapThreshold 单位，它将立即跳转到目标规模而不是线性插值。

**`Effect`**

调用端生效

#### Returns

`number`

scaleSnapThreshold 值

• `set` **scaleSnapThreshold**(`value`): `void`

**`Description`**

设置 ScaleSnapThreshold 值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description                |
| :------ | :------- | :------------------------- |
| `value` | `number` | 设置 ScaleSnapThreshold 值 |

#### Returns

`void`

---

### sceneComponentToSync

• `set` **sceneComponentToSync**(`object`): `void`

**`Description`**

设置在平滑同步上要同步的物体

**`Effect`**

调用端生效

#### Parameters

| Name     | Type         | Description        |
| :------- | :----------- | :----------------- |
| `object` | `GameObject` | 使用平滑组件的物体 |

#### Returns

`void`

---

### sendRate

• `get` **sendRate**(): `number`

**`Description`**

获取每秒发送网络更新的次数

**`Effect`**

调用端生效

#### Returns

`number`

每秒发送网络更新的次数

• `set` **sendRate**(`value`): `void`

**`Description`**

设置每秒发送网络更新的次数

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description                |
| :------ | :------- | :------------------------- |
| `value` | `number` | 设置每秒发送网络更新的次数 |

#### Returns

`void`

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

### syncPositionEnable

• `get` **syncPositionEnable**(): `boolean`

**`Description`**

获取是否同步位置

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步位置

false : 不同步位置

• `set` **syncPositionEnable**(`value`): `void`

**`Description`**

设置是否同步位置

**`Effect`**

调用端生效

#### Parameters

| Name    | Type      | Description  |
| :------ | :-------- | :----------- |
| `value` | `boolean` | 是否同步位置 |

#### Returns

`void`

---

### syncRotationEnable

• `get` **syncRotationEnable**(): `boolean`

**`Description`**

获取是否同步旋转

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步旋转，false : 不同步旋转

• `set` **syncRotationEnable**(`value`): `void`

**`Description`**

设置是否同步旋转

**`Effect`**

调用端生效

#### Parameters

| Name    | Type      | Description      |
| :------ | :-------- | :--------------- |
| `value` | `boolean` | 设置是否同步旋转 |

#### Returns

`void`

---

### syncScaleEnable

• `get` **syncScaleEnable**(): `boolean`

**`Description`**

获取是否同步缩放

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步缩放

false : 不同步缩放

• `set` **syncScaleEnable**(`value`): `void`

**`Description`**

设置是否同步缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type      | Description      |
| :------ | :-------- | :--------------- |
| `value` | `boolean` | 设置是否同步缩放 |

#### Returns

`void`

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

### timeSmoothing

• `get` **timeSmoothing**(): `number`

**`Description`**

获取要花多少时间才能使所有者平滑

**`Effect`**

调用端生效

#### Returns

`number`

要花费的时间

• `set` **timeSmoothing**(`value`): `void`

**`Description`**

设置 timeSmoothing 值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | 设置 timeSmoothing 值 |

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

▸ **ready**(): `Promise`<[`SmoothSync`](Gameplay.Gameplay.SmoothSync.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`SmoothSync`](Gameplay.Gameplay.SmoothSync.md)\>

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
