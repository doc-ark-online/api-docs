[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponOld

# Class: HotWeaponOld

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponOld

**`Description`**

热武器逻辑功能对象

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`HotWeaponOld`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponOld.md#constructor)

### Properties

- [configData](Gameplay.Gameplay.HotWeaponOld.md#configdata)
- [configLocal](Gameplay.Gameplay.HotWeaponOld.md#configlocal)
- [onEquipClient](Gameplay.Gameplay.HotWeaponOld.md#onequipclient)
- [onEquipServer](Gameplay.Gameplay.HotWeaponOld.md#onequipserver)
- [onLoadStartClient](Gameplay.Gameplay.HotWeaponOld.md#onloadstartclient)
- [onLoadStartServer](Gameplay.Gameplay.HotWeaponOld.md#onloadstartserver)
- [onLoadSuccessClient](Gameplay.Gameplay.HotWeaponOld.md#onloadsuccessclient)
- [onLoadSuccessServer](Gameplay.Gameplay.HotWeaponOld.md#onloadsuccessserver)
- [onPrimaryShootClient](Gameplay.Gameplay.HotWeaponOld.md#onprimaryshootclient)
- [onPrimaryShootEndClient](Gameplay.Gameplay.HotWeaponOld.md#onprimaryshootendclient)
- [onPrimaryShootEndServer](Gameplay.Gameplay.HotWeaponOld.md#onprimaryshootendserver)
- [onPrimaryShootServer](Gameplay.Gameplay.HotWeaponOld.md#onprimaryshootserver)
- [onReloadStartClient](Gameplay.Gameplay.HotWeaponOld.md#onreloadstartclient)
- [onReloadStartServer](Gameplay.Gameplay.HotWeaponOld.md#onreloadstartserver)
- [onReloadSuccessClient](Gameplay.Gameplay.HotWeaponOld.md#onreloadsuccessclient)
- [onReloadSuccessServer](Gameplay.Gameplay.HotWeaponOld.md#onreloadsuccessserver)
- [onSecondaryShootClient](Gameplay.Gameplay.HotWeaponOld.md#onsecondaryshootclient)
- [onSecondaryShootServer](Gameplay.Gameplay.HotWeaponOld.md#onsecondaryshootserver)
- [onTargetsHit](Gameplay.Gameplay.HotWeaponOld.md#ontargetshit)
- [onUnEquipClient](Gameplay.Gameplay.HotWeaponOld.md#onunequipclient)
- [onUnEquipServer](Gameplay.Gameplay.HotWeaponOld.md#onunequipserver)
- [shootTransformLocal](Gameplay.Gameplay.HotWeaponOld.md#shoottransformlocal)
- [slotButtStock](Gameplay.Gameplay.HotWeaponOld.md#slotbuttstock)
- [slotClip](Gameplay.Gameplay.HotWeaponOld.md#slotclip)
- [slotGrip](Gameplay.Gameplay.HotWeaponOld.md#slotgrip)
- [slotMuzzle](Gameplay.Gameplay.HotWeaponOld.md#slotmuzzle)
- [slotScope](Gameplay.Gameplay.HotWeaponOld.md#slotscope)

### Accessors

- [fireMode](Gameplay.Gameplay.HotWeaponOld.md#firemode)
- [forwardVector](Gameplay.Gameplay.HotWeaponOld.md#forwardvector)
- [guid](Gameplay.Gameplay.HotWeaponOld.md#guid)
- [isVisible](Gameplay.Gameplay.HotWeaponOld.md#isvisible)
- [lockState](Gameplay.Gameplay.HotWeaponOld.md#lockstate)
- [name](Gameplay.Gameplay.HotWeaponOld.md#name)
- [netStatus](Gameplay.Gameplay.HotWeaponOld.md#netstatus)
- [parent](Gameplay.Gameplay.HotWeaponOld.md#parent)
- [relativeLocation](Gameplay.Gameplay.HotWeaponOld.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.HotWeaponOld.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.HotWeaponOld.md#relativescale)
- [rightVector](Gameplay.Gameplay.HotWeaponOld.md#rightvector)
- [staticStatus](Gameplay.Gameplay.HotWeaponOld.md#staticstatus)
- [tag](Gameplay.Gameplay.HotWeaponOld.md#tag)
- [transform](Gameplay.Gameplay.HotWeaponOld.md#transform)
- [upVector](Gameplay.Gameplay.HotWeaponOld.md#upvector)
- [useUpdate](Gameplay.Gameplay.HotWeaponOld.md#useupdate)
- [worldLocation](Gameplay.Gameplay.HotWeaponOld.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.HotWeaponOld.md#worldrotation)
- [worldScale](Gameplay.Gameplay.HotWeaponOld.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.HotWeaponOld.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.HotWeaponOld.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.HotWeaponOld.md#attachtogameobject)
- [breakReload](Gameplay.Gameplay.HotWeaponOld.md#breakreload)
- [canPrimaryShoot](Gameplay.Gameplay.HotWeaponOld.md#canprimaryshoot)
- [clone](Gameplay.Gameplay.HotWeaponOld.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.HotWeaponOld.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.HotWeaponOld.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.HotWeaponOld.md#detachfromgameobject)
- [equip](Gameplay.Gameplay.HotWeaponOld.md#equip)
- [getBoundingBoxSize](Gameplay.Gameplay.HotWeaponOld.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.HotWeaponOld.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.HotWeaponOld.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.HotWeaponOld.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.HotWeaponOld.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.HotWeaponOld.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.HotWeaponOld.md#getcollision)
- [getCurrentSpread](Gameplay.Gameplay.HotWeaponOld.md#getcurrentspread)
- [getForwardVector](Gameplay.Gameplay.HotWeaponOld.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.HotWeaponOld.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.HotWeaponOld.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.HotWeaponOld.md#getrelativescale)
- [getRemainingClipAmmo](Gameplay.Gameplay.HotWeaponOld.md#getremainingclipammo)
- [getRightVector](Gameplay.Gameplay.HotWeaponOld.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.HotWeaponOld.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.HotWeaponOld.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.HotWeaponOld.md#getscripts)
- [getShootTransform](Gameplay.Gameplay.HotWeaponOld.md#getshoottransform)
- [getSourceAssetGuid](Gameplay.Gameplay.HotWeaponOld.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.HotWeaponOld.md#gettransform)
- [getUpVector](Gameplay.Gameplay.HotWeaponOld.md#getupvector)
- [getWeaponOwner](Gameplay.Gameplay.HotWeaponOld.md#getweaponowner)
- [getWorldLocation](Gameplay.Gameplay.HotWeaponOld.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.HotWeaponOld.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.HotWeaponOld.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.HotWeaponOld.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.HotWeaponOld.md#ondestroy)
- [onStart](Gameplay.Gameplay.HotWeaponOld.md#onstart)
- [onUpdate](Gameplay.Gameplay.HotWeaponOld.md#onupdate)
- [ready](Gameplay.Gameplay.HotWeaponOld.md#ready)
- [reload](Gameplay.Gameplay.HotWeaponOld.md#reload)
- [secondaryShoot](Gameplay.Gameplay.HotWeaponOld.md#secondaryshoot)
- [setAiming](Gameplay.Gameplay.HotWeaponOld.md#setaiming)
- [setCollision](Gameplay.Gameplay.HotWeaponOld.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.HotWeaponOld.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.HotWeaponOld.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.HotWeaponOld.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.HotWeaponOld.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.HotWeaponOld.md#settransform)
- [setVisibility](Gameplay.Gameplay.HotWeaponOld.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.HotWeaponOld.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.HotWeaponOld.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.HotWeaponOld.md#setworldscale)
- [setup](Gameplay.Gameplay.HotWeaponOld.md#setup)
- [startPrimaryShoot](Gameplay.Gameplay.HotWeaponOld.md#startprimaryshoot)
- [stopPrimaryShoot](Gameplay.Gameplay.HotWeaponOld.md#stopprimaryshoot)
- [unEquip](Gameplay.Gameplay.HotWeaponOld.md#unequip)
- [asyncFind](Gameplay.Gameplay.HotWeaponOld.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.HotWeaponOld.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.HotWeaponOld.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.HotWeaponOld.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.HotWeaponOld.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.HotWeaponOld.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.HotWeaponOld.md#spawngameobject)

## Constructors

### constructor

• **new HotWeaponOld**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Properties

### configData

• **configData**: [`HotWeaponConfigData`](Gameplay.Gameplay.HotWeaponConfigData.md)

**`Description`**

热武器配置数据

#### Defined in

Gameplay/index.d.ts:10710

___

### configLocal

• **configLocal**: [`HotWeaponConfigData`](Gameplay.Gameplay.HotWeaponConfigData.md)

**`Description`**

本地配置

#### Defined in

Gameplay/index.d.ts:10910

___

### onEquipClient

• **onEquipClient**: [`MulticastGameObjectDelegate`](Type.Type.MulticastGameObjectDelegate.md)

**`Description`**

[客户端] [自定义] 装备热武器时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10774

___

### onEquipServer

• **onEquipServer**: [`MulticastGameObjectDelegate`](Type.Type.MulticastGameObjectDelegate.md)

**`Description`**

[服务器] [自定义] 装备热武器时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10770

___

### onLoadStartClient

• **onLoadStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 上膛开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10758

___

### onLoadStartServer

• **onLoadStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 上膛开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10754

___

### onLoadSuccessClient

• **onLoadSuccessClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 上膛成功时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10766

___

### onLoadSuccessServer

• **onLoadSuccessServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 上膛成功时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10762

___

### onPrimaryShootClient

• **onPrimaryShootClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [主] 开火开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10718

___

### onPrimaryShootEndClient

• **onPrimaryShootEndClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [主] 开火结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10726

___

### onPrimaryShootEndServer

• **onPrimaryShootEndServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [主] 开火结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10722

___

### onPrimaryShootServer

• **onPrimaryShootServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [主] 开火开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10714

___

### onReloadStartClient

• **onReloadStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 换弹开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10742

___

### onReloadStartServer

• **onReloadStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 换弹开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10738

___

### onReloadSuccessClient

• **onReloadSuccessClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 换弹成功时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10750

___

### onReloadSuccessServer

• **onReloadSuccessServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 换弹成功时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10746

___

### onSecondaryShootClient

• **onSecondaryShootClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 开火开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10734

___

### onSecondaryShootServer

• **onSecondaryShootServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 开火开始时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10730

___

### onTargetsHit

• **onTargetsHit**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`HitResults`: `TArray`<`HitResult`\>) => `void`\>

**`Description`**

击中目标时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10786

___

### onUnEquipClient

• **onUnEquipClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] [自定义] 卸载热武器时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10782

___

### onUnEquipServer

• **onUnEquipServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务器] [自定义] 卸载热武器时执行绑定函数

#### Defined in

Gameplay/index.d.ts:10778

___

### shootTransformLocal

• **shootTransformLocal**: [`Transform`](Type.Type.Transform.md)

**`Description`**

当前的射击点

#### Defined in

Gameplay/index.d.ts:10894

___

### slotButtStock

• **slotButtStock**: [`HotWeaponSlotOld`](Gameplay.Gameplay.HotWeaponSlotOld.md)

**`Description`**

ButtStock 枪托插槽

#### Defined in

Gameplay/index.d.ts:10800

___

### slotClip

• **slotClip**: [`HotWeaponSlotOld`](Gameplay.Gameplay.HotWeaponSlotOld.md)

**`Description`**

clip 弹夹插槽

#### Defined in

Gameplay/index.d.ts:10796

___

### slotGrip

• **slotGrip**: [`HotWeaponSlotOld`](Gameplay.Gameplay.HotWeaponSlotOld.md)

**`Description`**

Grip 握把插槽

#### Defined in

Gameplay/index.d.ts:10804

___

### slotMuzzle

• **slotMuzzle**: [`HotWeaponSlotOld`](Gameplay.Gameplay.HotWeaponSlotOld.md)

**`Description`**

Muzzle 枪嘴插槽

#### Defined in

Gameplay/index.d.ts:10808

___

### slotScope

• **slotScope**: [`HotWeaponSlotOld`](Gameplay.Gameplay.HotWeaponSlotOld.md)

**`Description`**

scope 倍镜插槽

#### Defined in

Gameplay/index.d.ts:10792

## Accessors

### fireMode

• `get` **fireMode**(): [`HotWeaponFireModeOld`](../enums/Gameplay.Gameplay.HotWeaponFireModeOld.md)

**`Description`**

获取当前开火模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponFireModeOld`](../enums/Gameplay.Gameplay.HotWeaponFireModeOld.md)

当前开火模式

#### Defined in

Gameplay/index.d.ts:10854

• `set` **fireMode**(`NewFireMode`): `void`

**`Description`**

设置开火模式

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewFireMode` | [`HotWeaponFireModeOld`](../enums/Gameplay.Gameplay.HotWeaponFireModeOld.md) | usage: 新的开火模式 default: undefined |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10860

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

Core.GameObject.forwardVector

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

Core.GameObject.guid

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

Core.GameObject.isVisible

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

Core.GameObject.lockState

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

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:447

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

Core.GameObject.name

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

Core.GameObject.name

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

Core.GameObject.netStatus

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

Core.GameObject.parent

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

Core.GameObject.parent

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

Core.GameObject.relativeLocation

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

Core.GameObject.relativeLocation

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

Core.GameObject.relativeRotation

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

Core.GameObject.relativeRotation

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

Core.GameObject.relativeScale

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

Core.GameObject.relativeScale

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

Core.GameObject.rightVector

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

Core.GameObject.staticStatus

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

Core.GameObject.tag

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

Core.GameObject.tag

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

Core.GameObject.transform

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

Core.GameObject.transform

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

Core.GameObject.upVector

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

Core.GameObject.useUpdate

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

Core.GameObject.useUpdate

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

Core.GameObject.worldLocation

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

Core.GameObject.worldLocation

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

Core.GameObject.worldRotation

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

Core.GameObject.worldRotation

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

Core.GameObject.worldScale

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

Core.GameObject.worldScale

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

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

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

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

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

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

___

### breakReload

▸ **breakReload**(): `void`

**`Description`**

停止装弹

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10848

___

### canPrimaryShoot

▸ **canPrimaryShoot**(): `boolean`

**`Description`**

是否可以进行基础射击

**`Effect`**

调用端生效

#### Returns

`boolean`

True-可以射击，False-不可射击

#### Defined in

Gameplay/index.d.ts:10866

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

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

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

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

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

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

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

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

___

### equip

▸ **equip**(`character`, `slotName`): `void`

**`Description`**

装备热武器到目标角色的指定插槽位置

**`Precautions`**

目前装备热武器不再更换Character的 第一/第三 人称视角

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](Gameplay.Gameplay.Character.md) | usage: 该武器的装备对象 default: undefined |
| `slotName` | `string` | usage: 要装备的插槽名称 default: undefined |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10816

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

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

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

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

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

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

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

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

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

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

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

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

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

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

___

### getCurrentSpread

▸ **getCurrentSpread**(): `number`

**`Description`**

获取当前射击范围

**`Effect`**

调用端生效

#### Returns

`number`

当前射击范围，角度

#### Defined in

Gameplay/index.d.ts:10890

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

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

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

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

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

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

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

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

___

### getRemainingClipAmmo

▸ **getRemainingClipAmmo**(): `number`

**`Description`**

获取弹夹中剩余子弹数量

**`Effect`**

调用端生效

#### Returns

`number`

弹夹中剩余子弹数量

#### Defined in

Gameplay/index.d.ts:10878

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

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

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

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

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

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

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

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

___

### getShootTransform

▸ **getShootTransform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取当前的射击点姿态信息，依发射点设置而变化。且应用了射击范围的影响

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

当前的射击点姿态信息

#### Defined in

Gameplay/index.d.ts:10900

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

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

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

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

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

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

___

### getWeaponOwner

▸ **getWeaponOwner**(): [`Character`](Gameplay.Gameplay.Character.md)

**`Description`**

获取武器持有者

**`Effect`**

调用端生效

#### Returns

[`Character`](Gameplay.Gameplay.Character.md)

当前持有该武器的角色

#### Defined in

Gameplay/index.d.ts:10884

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

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

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

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

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

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

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

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

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

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

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

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

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

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

___

### ready

▸ **ready**(): `Promise`<[`HotWeaponOld`](Gameplay.Gameplay.HotWeaponOld.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`HotWeaponOld`](Gameplay.Gameplay.HotWeaponOld.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

___

### reload

▸ **reload**(): `void`

**`Description`**

开始装弹

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10843

___

### secondaryShoot

▸ **secondaryShoot**(): `void`

**`Description`**

备选射击

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10838

___

### setAiming

▸ **setAiming**(`NewAim`): `void`

**`Description`**

切换瞄准状态

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAim` | `boolean` | usage: 新的瞄准状态 default: undefined |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10872

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

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

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

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

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

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

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

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

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

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

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

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

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

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

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

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

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

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

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

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

___

### setup

▸ **setup**(`ConfigData`): `void`

**`Description`**

配置热武器的属性

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ConfigData` | [`HotWeaponConfigData`](Gameplay.Gameplay.HotWeaponConfigData.md) | usage: 新的配置数据 default: undefined |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10906

___

### startPrimaryShoot

▸ **startPrimaryShoot**(): `void`

**`Description`**

开始普通射击

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10828

___

### stopPrimaryShoot

▸ **stopPrimaryShoot**(): `void`

**`Description`**

停止普通射击

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10833

___

### unEquip

▸ **unEquip**(): `void`

**`Description`**

卸下热武器

**`Precautions`**

WIP：卸下的功能尚未完善
卸载热武器后，由于不确定拾取热武器前人物的姿态，建议开发者通过代理委托绑定OnUnEquipClient的方式来设置卸载热武器后的姿态，或者直接在卸载热武器后调用切换姿态的函数

**`Effect`**

客户端调用自动广播

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:10823

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

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

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

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

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

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

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

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

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

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

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

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

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

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
