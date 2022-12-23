[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeapon

# Class: HotWeapon

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeapon

**`Description`**

热武器

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`HotWeapon`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeapon.md#constructor)

### Properties

- [accuracyOfFireComponent](Gameplay.Gameplay.HotWeapon.md#accuracyoffirecomponent)
- [aimComponent](Gameplay.Gameplay.HotWeapon.md#aimcomponent)
- [constVal](Gameplay.Gameplay.HotWeapon.md#constval)
- [delegateEquipOnClient](Gameplay.Gameplay.HotWeapon.md#delegateequiponclient)
- [delegateEquipOnServer](Gameplay.Gameplay.HotWeapon.md#delegateequiponserver)
- [delegateUnEquipOnClient](Gameplay.Gameplay.HotWeapon.md#delegateunequiponclient)
- [delegateUnEquipOnServer](Gameplay.Gameplay.HotWeapon.md#delegateunequiponserver)
- [fireComponent](Gameplay.Gameplay.HotWeapon.md#firecomponent)
- [loadComponent](Gameplay.Gameplay.HotWeapon.md#loadcomponent)
- [recoilForceComponent](Gameplay.Gameplay.HotWeapon.md#recoilforcecomponent)
- [reloadComponent](Gameplay.Gameplay.HotWeapon.md#reloadcomponent)
- [setVal](Gameplay.Gameplay.HotWeapon.md#setval)
- [tempLoc](Gameplay.Gameplay.HotWeapon.md#temploc)
- [tempRot](Gameplay.Gameplay.HotWeapon.md#temprot)
- [tmpTrans](Gameplay.Gameplay.HotWeapon.md#tmptrans)
- [trans](Gameplay.Gameplay.HotWeapon.md#trans)

### Accessors

- [forwardVector](Gameplay.Gameplay.HotWeapon.md#forwardvector)
- [guid](Gameplay.Gameplay.HotWeapon.md#guid)
- [isEnabledAccuracyOfFire](Gameplay.Gameplay.HotWeapon.md#isenabledaccuracyoffire)
- [isEnabledAim](Gameplay.Gameplay.HotWeapon.md#isenabledaim)
- [isEnabledLoad](Gameplay.Gameplay.HotWeapon.md#isenabledload)
- [isEnabledRecoilForce](Gameplay.Gameplay.HotWeapon.md#isenabledrecoilforce)
- [isEnabledReload](Gameplay.Gameplay.HotWeapon.md#isenabledreload)
- [isVisible](Gameplay.Gameplay.HotWeapon.md#isvisible)
- [lockState](Gameplay.Gameplay.HotWeapon.md#lockstate)
- [name](Gameplay.Gameplay.HotWeapon.md#name)
- [netStatus](Gameplay.Gameplay.HotWeapon.md#netstatus)
- [parent](Gameplay.Gameplay.HotWeapon.md#parent)
- [relativeLocation](Gameplay.Gameplay.HotWeapon.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.HotWeapon.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.HotWeapon.md#relativescale)
- [rightVector](Gameplay.Gameplay.HotWeapon.md#rightvector)
- [staticStatus](Gameplay.Gameplay.HotWeapon.md#staticstatus)
- [tag](Gameplay.Gameplay.HotWeapon.md#tag)
- [transform](Gameplay.Gameplay.HotWeapon.md#transform)
- [upVector](Gameplay.Gameplay.HotWeapon.md#upvector)
- [useUpdate](Gameplay.Gameplay.HotWeapon.md#useupdate)
- [worldLocation](Gameplay.Gameplay.HotWeapon.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.HotWeapon.md#worldrotation)
- [worldScale](Gameplay.Gameplay.HotWeapon.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.HotWeapon.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.HotWeapon.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.HotWeapon.md#attachtogameobject)
- [breakLoad](Gameplay.Gameplay.HotWeapon.md#breakload)
- [breakReload](Gameplay.Gameplay.HotWeapon.md#breakreload)
- [clone](Gameplay.Gameplay.HotWeapon.md#clone)
- [cloneComponentsData](Gameplay.Gameplay.HotWeapon.md#clonecomponentsdata)
- [deleteDestroyCallback](Gameplay.Gameplay.HotWeapon.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.HotWeapon.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.HotWeapon.md#detachfromgameobject)
- [equipment](Gameplay.Gameplay.HotWeapon.md#equipment)
- [getBoundingBoxSize](Gameplay.Gameplay.HotWeapon.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.HotWeapon.md#getbounds)
- [getBulletLocWhileSpawnOnScreenCenter](Gameplay.Gameplay.HotWeapon.md#getbulletlocwhilespawnonscreencenter)
- [getChildByGuid](Gameplay.Gameplay.HotWeapon.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.HotWeapon.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.HotWeapon.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.HotWeapon.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.HotWeapon.md#getcollision)
- [getCurrentOwner](Gameplay.Gameplay.HotWeapon.md#getcurrentowner)
- [getCurrentState](Gameplay.Gameplay.HotWeapon.md#getcurrentstate)
- [getDefaultCrossHairSize](Gameplay.Gameplay.HotWeapon.md#getdefaultcrosshairsize)
- [getForwardVector](Gameplay.Gameplay.HotWeapon.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.HotWeapon.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.HotWeapon.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.HotWeapon.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.HotWeapon.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.HotWeapon.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.HotWeapon.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.HotWeapon.md#getscripts)
- [getShootDirWithDispersion](Gameplay.Gameplay.HotWeapon.md#getshootdirwithdispersion)
- [getSourceAssetGuid](Gameplay.Gameplay.HotWeapon.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.HotWeapon.md#gettransform)
- [getTransformForFire](Gameplay.Gameplay.HotWeapon.md#gettransformforfire)
- [getUpVector](Gameplay.Gameplay.HotWeapon.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.HotWeapon.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.HotWeapon.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.HotWeapon.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.HotWeapon.md#isrunningclient)
- [load](Gameplay.Gameplay.HotWeapon.md#load)
- [onDestroy](Gameplay.Gameplay.HotWeapon.md#ondestroy)
- [onStart](Gameplay.Gameplay.HotWeapon.md#onstart)
- [onUpdate](Gameplay.Gameplay.HotWeapon.md#onupdate)
- [ready](Gameplay.Gameplay.HotWeapon.md#ready)
- [reload](Gameplay.Gameplay.HotWeapon.md#reload)
- [setCollision](Gameplay.Gameplay.HotWeapon.md#setcollision)
- [setCurrentFireModel](Gameplay.Gameplay.HotWeapon.md#setcurrentfiremodel)
- [setLocationAndRotation](Gameplay.Gameplay.HotWeapon.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.HotWeapon.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.HotWeapon.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.HotWeapon.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.HotWeapon.md#settransform)
- [setVisibility](Gameplay.Gameplay.HotWeapon.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.HotWeapon.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.HotWeapon.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.HotWeapon.md#setworldscale)
- [startFire](Gameplay.Gameplay.HotWeapon.md#startfire)
- [stopFire](Gameplay.Gameplay.HotWeapon.md#stopfire)
- [unEquipment](Gameplay.Gameplay.HotWeapon.md#unequipment)
- [asyncFind](Gameplay.Gameplay.HotWeapon.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.HotWeapon.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.HotWeapon.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.HotWeapon.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.HotWeapon.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.HotWeapon.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.HotWeapon.md#spawngameobject)

## Constructors

### constructor

• **new HotWeapon**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Properties

### accuracyOfFireComponent

• **accuracyOfFireComponent**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md)

**`Description`**

射击精度功能

#### Defined in

Gameplay/index.d.ts:11328

---

### aimComponent

• **aimComponent**: [`HotWeaponAimComponent`](Gameplay.Gameplay.HotWeaponAimComponent.md)

**`Description`**

瞄准功能

#### Defined in

Gameplay/index.d.ts:11332

---

### constVal

• **constVal**: [`Transform`](Type.Type.Transform.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11426

---

### delegateEquipOnClient

• **delegateEquipOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

客户端装备时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11314

---

### delegateEquipOnServer

• **delegateEquipOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

服务器装备时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11308

---

### delegateUnEquipOnClient

• **delegateUnEquipOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端卸载时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11324

---

### delegateUnEquipOnServer

• **delegateUnEquipOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器卸载时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11320

---

### fireComponent

• **fireComponent**: [`HotWeaponFireComponent`](Gameplay.Gameplay.HotWeaponFireComponent.md)

**`Description`**

射击功能

#### Defined in

Gameplay/index.d.ts:11336

---

### loadComponent

• **loadComponent**: [`HotWeaponLoadComponent`](Gameplay.Gameplay.HotWeaponLoadComponent.md)

**`Description`**

上膛功能

#### Defined in

Gameplay/index.d.ts:11340

---

### recoilForceComponent

• **recoilForceComponent**: [`HotWeaponRecoilForceComponent`](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md)

**`Description`**

后坐力功能

#### Defined in

Gameplay/index.d.ts:11348

---

### reloadComponent

• **reloadComponent**: [`HotWeaponReloadComponent`](Gameplay.Gameplay.HotWeaponReloadComponent.md)

**`Description`**

换弹功能

#### Defined in

Gameplay/index.d.ts:11344

---

### setVal

• **setVal**: [`Transform`](Type.Type.Transform.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11430

---

### tempLoc

• **tempLoc**: [`Vector`](Type.Type.Vector.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11442

---

### tempRot

• **tempRot**: [`Rotation`](Type.Type.Rotation.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11446

---

### tmpTrans

• **tmpTrans**: [`Transform`](Type.Type.Transform.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11454

---

### trans

• **trans**: [`Transform`](Type.Type.Transform.md)

**`Description`**

TODO

#### Defined in

Gameplay/index.d.ts:11450

## Accessors

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

### isEnabledAccuracyOfFire

• `get` **isEnabledAccuracyOfFire**(): `boolean`

是否开启了射击精度组件

**`Description`**

是否开启了射击精度组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了射击精度组件

#### Defined in

Gameplay/index.d.ts:11402

• `set` **isEnabledAccuracyOfFire**(`isEnabled`): `void`

**`Description`**

设置是否开启射击精度组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name        | Type      | Description                 |
| :---------- | :-------- | :-------------------------- |
| `isEnabled` | `boolean` | usage: 射击精度组件启用状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11409

---

### isEnabledAim

• `get` **isEnabledAim**(): `boolean`

**`Description`**

是否开启了瞄准组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了瞄准组件

#### Defined in

Gameplay/index.d.ts:11415

• `set` **isEnabledAim**(`Inval`): `void`

**`Description`**

设置是否开启瞄准组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `Inval` | `boolean` | usage: 瞄准组件启用状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11422

---

### isEnabledLoad

• `get` **isEnabledLoad**(): `boolean`

是否开启了上膛组件

**`Description`**

是否开启了上膛组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了上膛组件

#### Defined in

Gameplay/index.d.ts:11388

• `set` **isEnabledLoad**(`isEnabled`): `void`

**`Description`**

设置是否开启上膛组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name        | Type      | Description             |
| :---------- | :-------- | :---------------------- |
| `isEnabled` | `boolean` | usage: 上膛组件启用状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11395

---

### isEnabledRecoilForce

• `get` **isEnabledRecoilForce**(): `boolean`

**`Description`**

是否开启了后坐力组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了后坐力组件

#### Defined in

Gameplay/index.d.ts:11361

• `set` **isEnabledRecoilForce**(`isEnabled`): `void`

**`Description`**

设置是否开启后座力组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name        | Type      | Description               |
| :---------- | :-------- | :------------------------ |
| `isEnabled` | `boolean` | usage: 后座力组件启用状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11368

---

### isEnabledReload

• `get` **isEnabledReload**(): `boolean`

**`Description`**

是否开启了换弹组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了换弹组件

#### Defined in

Gameplay/index.d.ts:11374

• `set` **isEnabledReload**(`isEnabled`): `void`

**`Description`**

设置是否开启换弹组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name        | Type      | Description             |
| :---------- | :-------- | :---------------------- |
| `isEnabled` | `boolean` | usage: 换弹组件启用状态 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11381

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

### breakLoad

▸ **breakLoad**(): `void`

**`Description`**

打断上膛

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11533

---

### breakReload

▸ **breakReload**(): `void`

**`Description`**

打断换弹

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11523

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

### cloneComponentsData

▸ **cloneComponentsData**(`otherHotWeapon`): `void`

**`Description`**

从传入的热武器逻辑对象中拷贝所有组件数据

**`Effect`**

在服务器调用

**`Precautions`**

无法拷贝代理委托绑定事件，完成拷贝后，数据同步到客户端有较短延迟

#### Parameters

| Name             | Type                                          | Description   |
| :--------------- | :-------------------------------------------- | :------------ |
| `otherHotWeapon` | [`HotWeapon`](Gameplay.Gameplay.HotWeapon.md) | usage: 数据源 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11546

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

### equipment

▸ **equipment**(`character`, `slotName`): `void`

**`Description`**

装备热武器到目标角色的指定插槽位置

**`Effect`**

客户端调用自动广播

**`Precautions`**

- S 端调用可完成整个装备流程
- C 端调用主要目的是刷新热武器 TS 层对象中关于持有者的数据
- 请确保 TS 层热武器构造完成之后再调用该函数，否则可能出现 C 端没有成功获取到持有者数据的问题
- 热武器 GameObject 加载完毕后会有回调，请在客户端能异步获取新构造的热武器后，在 Ready()这个异步方法中填写后续逻辑

#### Parameters

| Name        | Type                                          | Description                      |
| :---------- | :-------------------------------------------- | :------------------------------- |
| `character` | [`Character`](Gameplay.Gameplay.Character.md) | usage: 该武器的装备对象 default: |
| `slotName`  | `string`                                      | usage: 要装备的插槽名称 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11490

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

### getBulletLocWhileSpawnOnScreenCenter

▸ **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的 location

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Returns

[`Vector`](Type.Type.Vector.md)

子弹投掷物生成的 location

#### Defined in

Gameplay/index.d.ts:11460

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

### getCurrentOwner

▸ **getCurrentOwner**(): [`Character`](Gameplay.Gameplay.Character.md)

**`Description`**

获取当前热武器的所有者

**`Effect`**

调用端生效

#### Returns

[`Character`](Gameplay.Gameplay.Character.md)

当前热武器的所有者

#### Defined in

Gameplay/index.d.ts:11478

---

### getCurrentState

▸ **getCurrentState**(): [`HotWeaponState`](../enums/Gameplay.Gameplay.HotWeaponState.md)

**`Description`**

获取当前热武器状态

**`Effect`**

调用端生效

#### Returns

[`HotWeaponState`](../enums/Gameplay.Gameplay.HotWeaponState.md)

当前热武器状态

#### Defined in

Gameplay/index.d.ts:11539

---

### getDefaultCrossHairSize

▸ **getDefaultCrossHairSize**(`maxShootRange`): `number`

**`Description`**

传入 Player 和最大射程，获取默认准星大小

**`Effect`**

仅客户端调用

#### Parameters

| Name            | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `maxShootRange` | `number` | usage: 最大射程 default: |

#### Returns

`number`

默认准星大小(射击精度半角值)

#### Defined in

Gameplay/index.d.ts:11355

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

### getShootDirWithDispersion

▸ **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](Type.Type.Vector.md)

**`Description`**

非屏幕中心生成子弹模式下，获取子弹飞行方向

**`Precautions`**

该函数可传入经偏移了的屏幕中心发出的射线方向

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Parameters

| Name         | Type                            | Description                  |
| :----------- | :------------------------------ | :--------------------------- |
| `StartLoc`   | [`Vector`](Type.Type.Vector.md) | usage: 子弹生成位置 default: |
| `ShootRange` | `number`                        | usage: 最大射程 default:     |

#### Returns

[`Vector`](Type.Type.Vector.md)

子弹的实际飞行方向

#### Defined in

Gameplay/index.d.ts:11469

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

### getTransformForFire

▸ **getTransformForFire**(`ShootRange`): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取开火的 Transform

**`Effect`**

仅客户端调用

**`Precautions`**

todo Need Completed

#### Parameters

| Name         | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `ShootRange` | `number` | usage: 最大射程 default: |

#### Returns

[`Transform`](Type.Type.Transform.md)

生成子弹的 Transform

#### Defined in

Gameplay/index.d.ts:11438

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

### load

▸ **load**(): `void`

**`Description`**

上膛

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11528

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

▸ **ready**(): `Promise`<[`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

---

### reload

▸ **reload**(`bulletSize`): `void`

**`Description`**

换弹

**`Effect`**

客户端调用自动广播

#### Parameters

| Name         | Type     | Description   |
| :----------- | :------- | :------------ |
| `bulletSize` | `number` | usage: 子弹数 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11518

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

### setCurrentFireModel

▸ **setCurrentFireModel**(`FireMode`): `void`

**`Description`**

切换设置当前开火模式

**`Effect`**

调用端生效

**`Precautions`**

装备前只能在服务器调用，装备后可在客户端调用

#### Parameters

| Name       | Type                                                                   | Description               |
| :--------- | :--------------------------------------------------------------------- | :------------------------ |
| `FireMode` | [`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md) | usage: 新的热武器开火模式 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11502

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

### startFire

▸ **startFire**(): `void`

**`Description`**

开火

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11507

---

### stopFire

▸ **stopFire**(): `void`

**`Description`**

停止开火

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11512

---

### unEquipment

▸ **unEquipment**(): `void`

**`Description`**

卸载热武器

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11495

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
