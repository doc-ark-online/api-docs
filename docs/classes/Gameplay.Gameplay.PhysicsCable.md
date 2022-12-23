[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsCable

# Class: PhysicsCable

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).PhysicsCable

**`Author`**

Hanbaoqiang

**`Description`**

物理绳组件

**`Network Status`**

usage:双端

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsCable`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.PhysicsCable.md#constructor)

### Accessors

- [constraintTarget1](Gameplay.Gameplay.PhysicsCable.md#constrainttarget1)
- [constraintTarget2](Gameplay.Gameplay.PhysicsCable.md#constrainttarget2)
- [currentLength](Gameplay.Gameplay.PhysicsCable.md#currentlength)
- [enableCollision](Gameplay.Gameplay.PhysicsCable.md#enablecollision)
- [forwardVector](Gameplay.Gameplay.PhysicsCable.md#forwardvector)
- [guid](Gameplay.Gameplay.PhysicsCable.md#guid)
- [isVisible](Gameplay.Gameplay.PhysicsCable.md#isvisible)
- [lockState](Gameplay.Gameplay.PhysicsCable.md#lockstate)
- [maxLength](Gameplay.Gameplay.PhysicsCable.md#maxlength)
- [name](Gameplay.Gameplay.PhysicsCable.md#name)
- [netStatus](Gameplay.Gameplay.PhysicsCable.md#netstatus)
- [parent](Gameplay.Gameplay.PhysicsCable.md#parent)
- [relativeLocation](Gameplay.Gameplay.PhysicsCable.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.PhysicsCable.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.PhysicsCable.md#relativescale)
- [rightVector](Gameplay.Gameplay.PhysicsCable.md#rightvector)
- [staticStatus](Gameplay.Gameplay.PhysicsCable.md#staticstatus)
- [tag](Gameplay.Gameplay.PhysicsCable.md#tag)
- [transform](Gameplay.Gameplay.PhysicsCable.md#transform)
- [upVector](Gameplay.Gameplay.PhysicsCable.md#upvector)
- [useUpdate](Gameplay.Gameplay.PhysicsCable.md#useupdate)
- [worldLocation](Gameplay.Gameplay.PhysicsCable.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.PhysicsCable.md#worldrotation)
- [worldScale](Gameplay.Gameplay.PhysicsCable.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.PhysicsCable.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.PhysicsCable.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.PhysicsCable.md#attachtogameobject)
- [clone](Gameplay.Gameplay.PhysicsCable.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.PhysicsCable.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.PhysicsCable.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.PhysicsCable.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.PhysicsCable.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.PhysicsCable.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.PhysicsCable.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.PhysicsCable.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.PhysicsCable.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.PhysicsCable.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.PhysicsCable.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.PhysicsCable.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.PhysicsCable.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.PhysicsCable.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.PhysicsCable.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.PhysicsCable.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.PhysicsCable.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.PhysicsCable.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.PhysicsCable.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.PhysicsCable.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.PhysicsCable.md#gettransform)
- [getUpVector](Gameplay.Gameplay.PhysicsCable.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.PhysicsCable.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.PhysicsCable.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.PhysicsCable.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.PhysicsCable.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.PhysicsCable.md#ondestroy)
- [onStart](Gameplay.Gameplay.PhysicsCable.md#onstart)
- [onUpdate](Gameplay.Gameplay.PhysicsCable.md#onupdate)
- [ready](Gameplay.Gameplay.PhysicsCable.md#ready)
- [setCollision](Gameplay.Gameplay.PhysicsCable.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.PhysicsCable.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.PhysicsCable.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.PhysicsCable.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.PhysicsCable.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.PhysicsCable.md#settransform)
- [setVisibility](Gameplay.Gameplay.PhysicsCable.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.PhysicsCable.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.PhysicsCable.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.PhysicsCable.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.PhysicsCable.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.PhysicsCable.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.PhysicsCable.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.PhysicsCable.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.PhysicsCable.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.PhysicsCable.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.PhysicsCable.md#spawngameobject)

## Constructors

### constructor

• **new PhysicsCable**()

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[constructor](Gameplay.Gameplay.PhysicsConstraintBase.md#constructor)

## Accessors

### constraintTarget1

• `get` **constraintTarget1**(): `string`

**`Description`**

获取约束对象1

#### Returns

`string`

#### Inherited from

PhysicsConstraintBase.constraintTarget1

#### Defined in

Gameplay/index.d.ts:12498

• `set` **constraintTarget1**(`guid`): `void`

**`Description`**

设置约束对象1

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:约束对象1的GUID |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.constraintTarget1

#### Defined in

Gameplay/index.d.ts:12504

___

### constraintTarget2

• `get` **constraintTarget2**(): `string`

**`Description`**

获取约束对象2

#### Returns

`string`

#### Inherited from

PhysicsConstraintBase.constraintTarget2

#### Defined in

Gameplay/index.d.ts:12508

• `set` **constraintTarget2**(`guid`): `void`

**`Description`**

设置约束对象2

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:约束对象2的GUID |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.constraintTarget2

#### Defined in

Gameplay/index.d.ts:12514

___

### currentLength

• `get` **currentLength**(): `number`

**`Description`**

获取绳子当前长度

#### Returns

`number`

当前长度

#### Defined in

Gameplay/index.d.ts:12550

___

### enableCollision

• `get` **enableCollision**(): `boolean`

**`Description`**

获取禁用碰撞

#### Returns

`boolean`

是否禁用碰撞

#### Defined in

Gameplay/index.d.ts:12528

• `set` **enableCollision**(`value`): `void`

**`Description`**

设置禁用碰撞

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否禁用碰撞 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12534

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

#### Inherited from

PhysicsConstraintBase.forwardVector

#### Defined in

Core/index.d.ts:405

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

PhysicsConstraintBase.guid

#### Defined in

Core/index.d.ts:38

___

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

___

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

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.lockState

#### Defined in

Core/index.d.ts:447

___

### maxLength

• `get` **maxLength**(): `number`

**`Description`**

获取绳子最大长度

#### Returns

`number`

最大长度

#### Defined in

Gameplay/index.d.ts:12539

• `set` **maxLength**(`value`): `void`

**`Description`**

设置绳子最大长度

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:最大长度 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12545

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.name

#### Defined in

Core/index.d.ts:173

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

#### Inherited from

PhysicsConstraintBase.netStatus

#### Defined in

Core/index.d.ts:502

___

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

| Name | Type |
| :------ | :------ |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.parent

#### Defined in

Core/index.d.ts:463

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.relativeLocation

#### Defined in

Core/index.d.ts:310

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.relativeRotation

#### Defined in

Core/index.d.ts:336

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放 |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.relativeScale

#### Defined in

Core/index.d.ts:362

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

#### Inherited from

PhysicsConstraintBase.rightVector

#### Defined in

Core/index.d.ts:419

___

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

#### Inherited from

PhysicsConstraintBase.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | usage:Tag |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.tag

#### Defined in

Core/index.d.ts:179

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

#### Inherited from

PhysicsConstraintBase.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的transform |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.transform

#### Defined in

Core/index.d.ts:211

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

#### Inherited from

PhysicsConstraintBase.upVector

#### Defined in

Core/index.d.ts:392

___

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

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.useUpdate

#### Defined in

Core/index.d.ts:432

___

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

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.worldLocation

#### Defined in

Core/index.d.ts:235

___

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

PhysicsConstraintBase.worldRotation

#### Defined in

Core/index.d.ts:260

___

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

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

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

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[addDestroyCallback](Gameplay.Gameplay.PhysicsConstraintBase.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

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
| `name` | `string` | usage:名字 |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncGetScriptByName](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

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
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[attachToGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

___

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[clone](Gameplay.Gameplay.PhysicsConstraintBase.md#clone)

#### Defined in

Core/index.d.ts:543

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
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[deleteDestroyCallback](Gameplay.Gameplay.PhysicsConstraintBase.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

___

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

___

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
| `nonColliding?` | `boolean` | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | usage:如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getBoundingBoxSize](Gameplay.Gameplay.PhysicsConstraintBase.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取Gameobject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | usage:是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | usage:是否递归包含子物体 default:undefined |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getBounds](Gameplay.Gameplay.PhysicsConstraintBase.md#getbounds)

#### Defined in

Core/index.d.ts:194

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildByGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

___

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名称 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

___

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取Children 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildren](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildren)

#### Defined in

Core/index.d.ts:522

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getChildrenBoxCenter](Gameplay.Gameplay.PhysicsConstraintBase.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

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

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getCollision](Gameplay.Gameplay.PhysicsConstraintBase.md#getcollision)

#### Defined in

Core/index.d.ts:480

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getForwardVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRelativeScale](Gameplay.Gameplay.PhysicsConstraintBase.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getRightVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getrightvector)

#### Defined in

Core/index.d.ts:427

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
| `guid` | `string` | usage:guid |

#### Returns

`Script`

Script

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScriptByGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

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
| `name` | `string` | usage:名字 |

#### Returns

`Script`

Script

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScriptByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array<Script>

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getScripts](Gameplay.Gameplay.PhysicsConstraintBase.md#getscripts)

#### Defined in

Core/index.d.ts:549

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

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getSourceAssetGuid](Gameplay.Gameplay.PhysicsConstraintBase.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

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
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getTransform](Gameplay.Gameplay.PhysicsConstraintBase.md#gettransform)

#### Defined in

Core/index.d.ts:219

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getUpVector](Gameplay.Gameplay.PhysicsConstraintBase.md#getupvector)

#### Defined in

Core/index.d.ts:399

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getWorldScale](Gameplay.Gameplay.PhysicsConstraintBase.md#getworldscale)

#### Defined in

Core/index.d.ts:292

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

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[isRunningClient](Gameplay.Gameplay.PhysicsConstraintBase.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

___

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

___

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
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[onUpdate](Gameplay.Gameplay.PhysicsConstraintBase.md#onupdate)

#### Defined in

Core/index.d.ts:23

___

### ready

▸ **ready**(): `Promise`<[`PhysicsCable`](Gameplay.Gameplay.PhysicsCable.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`PhysicsCable`](Gameplay.Gameplay.PhysicsCable.md)\>

准备好的对象

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[ready](Gameplay.Gameplay.PhysicsConstraintBase.md#ready)

#### Defined in

Core/index.d.ts:122

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` | usage: 是否传递给子节点 default: false |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setCollision](Gameplay.Gameplay.PhysicsConstraintBase.md#setcollision)

#### Defined in

Core/index.d.ts:471

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
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setLocationAndRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

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
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

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
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setRelativeScale](Gameplay.Gameplay.PhysicsConstraintBase.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

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
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setTransform](Gameplay.Gameplay.PhysicsConstraintBase.md#settransform)

#### Defined in

Core/index.d.ts:225

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态 |
| `propagateToChildren?` | `boolean` | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setVisibility](Gameplay.Gameplay.PhysicsConstraintBase.md#setvisibility)

#### Defined in

Core/index.d.ts:487

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldLocation](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldRotation](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[setWorldScale](Gameplay.Gameplay.PhysicsConstraintBase.md#setworldscale)

#### Defined in

Core/index.d.ts:298

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过guid异步查找Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid对应的物体

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncFind](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncfind)

#### Defined in

Core/index.d.ts:161

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的GameObject

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[asyncSpawnGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

___

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过Guid查找Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid对应的物体

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[find](Gameplay.Gameplay.PhysicsConstraintBase.md#find)

#### Defined in

Core/index.d.ts:153

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | usage:自定义Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[findGameObjectByTag](Gameplay.Gameplay.PhysicsConstraintBase.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getGameObjectByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[getGameObjectsByName](Gameplay.Gameplay.PhysicsConstraintBase.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的GameObject

#### Inherited from

[PhysicsConstraintBase](Gameplay.Gameplay.PhysicsConstraintBase.md).[spawnGameObject](Gameplay.Gameplay.PhysicsConstraintBase.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
