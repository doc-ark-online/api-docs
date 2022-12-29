[Gameplay](../modules/Gameplay.Gameplay.md) / StaticMesh

# StaticMesh <Badge type="tip" text="Class" />

**`Description`**

StaticMeshActor相关接口主为要物理参数设置接口与材质参数设置接口

**`Precautions`**

物理相关接口目前版本不支持证多端同步

## Hierarchy

- `GameObject`

  ↳ **`StaticMesh`**

## Table of contents

| Accessors |
| :-----|
| **[angularDamping](Gameplay.Gameplay.StaticMesh.md#angulardamping)**(): `number` <br> 角阻尼|
| **[applyImpulseOnDamage](Gameplay.Gameplay.StaticMesh.md#applyimpulseondamage)**(): `boolean` <br> 在伤害上应用冲量|
| **[forwardVector](Gameplay.Gameplay.StaticMesh.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[gravityEnable](Gameplay.Gameplay.StaticMesh.md#gravityenable)**(): `boolean` <br> 获取是否启用重力|
| **[guid](Gameplay.Gameplay.StaticMesh.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[ignoreRadialForce](Gameplay.Gameplay.StaticMesh.md#ignoreradialforce)**(): `boolean` <br> 获取是否忽视径向力|
| **[ignoreRadialImpulse](Gameplay.Gameplay.StaticMesh.md#ignoreradialimpulse)**(): `boolean` <br> 获取是否忽视径向冲量|
| **[isSimulatingPhysics](Gameplay.Gameplay.StaticMesh.md#issimulatingphysics)**(): `boolean` <br> 获取是否模拟物理|
| **[linerDamping](Gameplay.Gameplay.StaticMesh.md#linerdamping)**(): `number` <br> 获取线性阻尼|
| **[lockPositionX](Gameplay.Gameplay.StaticMesh.md#lockpositionx)**(): `boolean` <br> 获取是否约束位置X|
| **[lockPositionY](Gameplay.Gameplay.StaticMesh.md#lockpositiony)**(): `boolean` <br> 获取是否约束位置Y|
| **[lockPositionZ](Gameplay.Gameplay.StaticMesh.md#lockpositionz)**(): `boolean` <br> 获取是否约束位置Z|
| **[lockRotationX](Gameplay.Gameplay.StaticMesh.md#lockrotationx)**(): `boolean` <br> 获取是否约束旋转X|
| **[lockRotationY](Gameplay.Gameplay.StaticMesh.md#lockrotationy)**(): `boolean` <br> 获取是否约束旋转Y|
| **[lockRotationZ](Gameplay.Gameplay.StaticMesh.md#lockrotationz)**(): `boolean` <br> 获取是否约束旋转Z|
| **[lockStatus](Gameplay.Gameplay.StaticMesh.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[massEnable](Gameplay.Gameplay.StaticMesh.md#massenable)**(): `boolean` <br> 获取是否使用质量|
| **[massInKg](Gameplay.Gameplay.StaticMesh.md#massinkg)**(): `number` <br> 获取质量大小|
| **[name](Gameplay.Gameplay.StaticMesh.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.StaticMesh.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Gameplay.StaticMesh.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.Gameplay.StaticMesh.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.StaticMesh.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.StaticMesh.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.StaticMesh.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.Gameplay.StaticMesh.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.StaticMesh.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.StaticMesh.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.StaticMesh.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.StaticMesh.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Gameplay.StaticMesh.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.Gameplay.StaticMesh.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.StaticMesh.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.StaticMesh.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.StaticMesh.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.StaticMesh.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.StaticMesh.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Gameplay.StaticMesh.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[createMaterialInstance](Gameplay.Gameplay.StaticMesh.md#creatematerialinstance)**(`number`): `void` <br> 创建材质实例|
| **[deleteDestroyCallback](Gameplay.Gameplay.StaticMesh.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.StaticMesh.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.StaticMesh.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.Gameplay.StaticMesh.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.StaticMesh.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.StaticMesh.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.StaticMesh.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.StaticMesh.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.StaticMesh.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.StaticMesh.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Gameplay.StaticMesh.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getMaterialColor](Gameplay.Gameplay.StaticMesh.md#getmaterialcolor)**(`number`): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败|
| **[getRelativeLocation](Gameplay.Gameplay.StaticMesh.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.StaticMesh.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.StaticMesh.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.StaticMesh.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.StaticMesh.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.StaticMesh.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.StaticMesh.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Gameplay.StaticMesh.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.StaticMesh.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Gameplay.StaticMesh.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.StaticMesh.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.StaticMesh.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.StaticMesh.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.StaticMesh.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.StaticMesh.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Gameplay.StaticMesh.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.StaticMesh.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.StaticMesh.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Gameplay.StaticMesh.md#ready)**(): `Promise`<[`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)\> <br> GameObject准备好后返回|
| **[resetMaterial](Gameplay.Gameplay.StaticMesh.md#resetmaterial)**(): `void` <br> 还原物体材质|
| **[setCollision](Gameplay.Gameplay.StaticMesh.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setCullDistance](Gameplay.Gameplay.StaticMesh.md#setculldistance)**(`number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setLocationAndRotation](Gameplay.Gameplay.StaticMesh.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setMaterial](Gameplay.Gameplay.StaticMesh.md#setmaterial)**(`string`): `void` <br> 设置物体材质|
| **[setMaterialColor](Gameplay.Gameplay.StaticMesh.md#setmaterialcolor)**(`number`, [`LinearColor`](Type.Type.LinearColor.md)): `void` <br> 设置材质颜色|
| **[setOutlineAndColor](Gameplay.Gameplay.StaticMesh.md#setoutlineandcolor)**(`boolean`, `number`): `void` <br> 设置对象描边及描边颜色，需要场景中存在后处理对象。|
| **[setRelativeLocation](Gameplay.Gameplay.StaticMesh.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.StaticMesh.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.StaticMesh.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setStaticMeshAsset](Gameplay.Gameplay.StaticMesh.md#setstaticmeshasset)**(`string`): `void` <br> 设置静态网格资源|
| **[setTransform](Gameplay.Gameplay.StaticMesh.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.StaticMesh.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.StaticMesh.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.StaticMesh.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.StaticMesh.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.Gameplay.StaticMesh.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.StaticMesh.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.StaticMesh.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.StaticMesh.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.StaticMesh.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.StaticMesh.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.StaticMesh.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Accessors

### angularDamping

• `get` **angularDamping**(): `number`

**`Description`**

角阻尼

#### Returns

`number`

• `set` **angularDamping**(`value`): `void`

**`Description`**

设置角阻尼

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### applyImpulseOnDamage

• `get` **applyImpulseOnDamage**(): `boolean`

**`Description`**

在伤害上应用冲量

#### Returns

`boolean`

• `set` **applyImpulseOnDamage**(`value`): `void`

**`Description`**

在伤害上应用冲量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

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

### gravityEnable

• `get` **gravityEnable**(): `boolean`

**`Description`**

获取是否启用重力

#### Returns

`boolean`

• `set` **gravityEnable**(`value`): `void`

**`Description`**

是否启用重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

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

### ignoreRadialForce

• `get` **ignoreRadialForce**(): `boolean`

**`Description`**

获取是否忽视径向力

#### Returns

`boolean`

• `set` **ignoreRadialForce**(`value`): `void`

**`Description`**

设置是否忽视径向力

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### ignoreRadialImpulse

• `get` **ignoreRadialImpulse**(): `boolean`

**`Description`**

获取是否忽视径向冲量

#### Returns

`boolean`

• `set` **ignoreRadialImpulse**(`value`): `void`

**`Description`**

忽视径向冲量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### isSimulatingPhysics

• `get` **isSimulatingPhysics**(): `boolean`

**`Description`**

获取是否模拟物理

#### Returns

`boolean`

• `set` **isSimulatingPhysics**(`value`): `void`

**`Description`**

设置模拟物理状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### linerDamping

• `get` **linerDamping**(): `number`

**`Description`**

获取线性阻尼

#### Returns

`number`

• `set` **linerDamping**(`value`): `void`

**`Description`**

设置线性阻尼

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### lockPositionX

• `get` **lockPositionX**(): `boolean`

**`Description`**

获取是否约束位置X

#### Returns

`boolean`

• `set` **lockPositionX**(`value`): `void`

**`Description`**

设置是否约束位置X

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockPositionY

• `get` **lockPositionY**(): `boolean`

**`Description`**

获取是否约束位置Y

#### Returns

`boolean`

• `set` **lockPositionY**(`value`): `void`

**`Description`**

设置是否约束位置Y

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockPositionZ

• `get` **lockPositionZ**(): `boolean`

**`Description`**

获取是否约束位置Z

#### Returns

`boolean`

• `set` **lockPositionZ**(`value`): `void`

**`Description`**

设置是否约束位置Z

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationX

• `get` **lockRotationX**(): `boolean`

**`Description`**

获取是否约束旋转X

#### Returns

`boolean`

• `set` **lockRotationX**(`value`): `void`

**`Description`**

设置是否约束旋转X

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationY

• `get` **lockRotationY**(): `boolean`

**`Description`**

获取是否约束旋转Y

#### Returns

`boolean`

• `set` **lockRotationY**(`value`): `void`

**`Description`**

设置是否约束旋转Y

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### lockRotationZ

• `get` **lockRotationZ**(): `boolean`

**`Description`**

获取是否约束旋转Z

#### Returns

`boolean`

• `set` **lockRotationZ**(`value`): `void`

**`Description`**

约束旋转Z

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

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

### massEnable

• `get` **massEnable**(): `boolean`

**`Description`**

获取是否使用质量

#### Returns

`boolean`

• `set` **massEnable**(`value`): `void`

**`Description`**

是否启用质量

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### massInKg

• `get` **massInKg**(): `number`

**`Description`**

获取质量大小

#### Returns

`number`

• `set` **massInKg**(`value`): `void`

**`Description`**

设置质量大小

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

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

### createMaterialInstance

▸ **createMaterialInstance**(`Index`): `void`

**`Description`**

创建材质实例

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |

#### Returns

`void`

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

### getMaterialColor

▸ **getMaterialColor**(`Index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取材质颜色,暂时注释材质颜色问题后续有待解决,当前版本获取会失败

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

获取的颜色

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

▸ **ready**(): `Promise`<[`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)\>

准备好的对象

___

### resetMaterial

▸ **resetMaterial**(): `void`

**`Description`**

还原物体材质

**`Effect`**

调用端生效

#### Returns

`void`

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

___

### setMaterial

▸ **setMaterial**(`MaterialGUID`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID default: |

#### Returns

`void`

▸ **setMaterial**(`MaterialGUID`, `Transparency`, `isTransparent`): `void`

**`Description`**

设置物体材质

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MaterialGUID` | `string` |  材质ID |
| `Transparency` | `number` |  透明度 default: 0.8 |
| `isTransparent` | `boolean` |  是否透明 default: false |

#### Returns

`void`

___

### setMaterialColor

▸ **setMaterialColor**(`Index`, `InColor`): `void`

**`Description`**

设置材质颜色

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 第几个材质 |
| `InColor` | [`LinearColor`](Type.Type.LinearColor.md) | 要赋值的颜色 |

#### Returns

`void`

___

### setOutlineAndColor

▸ **setOutlineAndColor**(`Enable`, `ColorIndex`): `void`

**`Description`**

设置对象描边及描边颜色，需要场景中存在后处理对象。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Enable` | `boolean` |  是否开启描边 default: |
| `ColorIndex` | `number` |  设置描边颜色，与后处理中颜色Index对应，-1为无颜色 default: |

#### Returns

`void`

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

### setStaticMeshAsset

▸ **setStaticMeshAsset**(`InAssetGuid`): `void`

**`Description`**

设置静态网格资源

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetGuid` | `string` |  资源GUID default: |

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
