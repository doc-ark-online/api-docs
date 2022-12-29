[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeapon

# HotWeapon <Badge type="tip" text="Class" />

**`Description`**

热武器

## Hierarchy

- `GameObject`

  ↳ **`HotWeapon`**

## Table of contents

| Properties |
| :-----|
| **[accuracyOfFireComponent](Gameplay.Gameplay.HotWeapon.md#accuracyoffirecomponent)**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 射击精度功能|
| **[aimComponent](Gameplay.Gameplay.HotWeapon.md#aimcomponent)**: [`HotWeaponAimComponent`](Gameplay.Gameplay.HotWeaponAimComponent.md) <br> 瞄准功能|
| **[fireComponent](Gameplay.Gameplay.HotWeapon.md#firecomponent)**: [`HotWeaponFireComponent`](Gameplay.Gameplay.HotWeaponFireComponent.md) <br> 射击功能|
| **[loadComponent](Gameplay.Gameplay.HotWeapon.md#loadcomponent)**: [`HotWeaponLoadComponent`](Gameplay.Gameplay.HotWeaponLoadComponent.md) <br> 上膛功能|
| **[onEquippedClient](Gameplay.Gameplay.HotWeapon.md#onequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 客户端装备时执行绑定函数|
| **[onEquippedServer](Gameplay.Gameplay.HotWeapon.md#onequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 服务器装备时执行绑定函数|
| **[onUnequippedClient](Gameplay.Gameplay.HotWeapon.md#onunequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端卸载时执行绑定函数|
| **[onUnequippedServer](Gameplay.Gameplay.HotWeapon.md#onunequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器卸载时执行绑定函数|
| **[recoilForceComponent](Gameplay.Gameplay.HotWeapon.md#recoilforcecomponent)**: [`HotWeaponRecoilForceComponent`](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md) <br> 后坐力功能|
| **[reloadComponent](Gameplay.Gameplay.HotWeapon.md#reloadcomponent)**: [`HotWeaponReloadComponent`](Gameplay.Gameplay.HotWeaponReloadComponent.md) <br> 换弹功能|

| Accessors |
| :-----|
| **[accuracyOfFireEnable](Gameplay.Gameplay.HotWeapon.md#accuracyoffireenable)**(): `boolean` <br> **`Description`**|
| **[aimEnable](Gameplay.Gameplay.HotWeapon.md#aimenable)**(): `boolean` <br> 是否开启了瞄准组件|
| **[forwardVector](Gameplay.Gameplay.HotWeapon.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.Gameplay.HotWeapon.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[loadEnable](Gameplay.Gameplay.HotWeapon.md#loadenable)**(): `boolean` <br> **`Description`**|
| **[lockStatus](Gameplay.Gameplay.HotWeapon.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.Gameplay.HotWeapon.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.HotWeapon.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Gameplay.HotWeapon.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[recoilForceEnable](Gameplay.Gameplay.HotWeapon.md#recoilforceenable)**(): `boolean` <br> 是否开启了后坐力组件|
| **[relativeLocation](Gameplay.Gameplay.HotWeapon.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.HotWeapon.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.HotWeapon.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[reloadEnable](Gameplay.Gameplay.HotWeapon.md#reloadenable)**(): `boolean` <br> 是否开启了换弹组件|
| **[rightVector](Gameplay.Gameplay.HotWeapon.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.Gameplay.HotWeapon.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.Gameplay.HotWeapon.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.HotWeapon.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.HotWeapon.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.HotWeapon.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Gameplay.HotWeapon.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.Gameplay.HotWeapon.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.HotWeapon.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.HotWeapon.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.HotWeapon.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.HotWeapon.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.HotWeapon.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[breakLoad](Gameplay.Gameplay.HotWeapon.md#breakload)**(): `void` <br> 打断上膛|
| **[breakReload](Gameplay.Gameplay.HotWeapon.md#breakreload)**(): `void` <br> 打断换弹|
| **[clone](Gameplay.Gameplay.HotWeapon.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[cloneComponentsData](Gameplay.Gameplay.HotWeapon.md#clonecomponentsdata)**([`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)): `void` <br> 从传入的热武器逻辑对象中拷贝所有组件数据|
| **[deleteDestroyCallback](Gameplay.Gameplay.HotWeapon.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.HotWeapon.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.HotWeapon.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[equipment](Gameplay.Gameplay.HotWeapon.md#equipment)**([`Character`](Gameplay.Gameplay.Character.md), `string`): `void` <br> 装备热武器到目标角色的指定插槽位置|
| **[getBoundingBoxSize](Gameplay.Gameplay.HotWeapon.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.HotWeapon.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getBulletLocWhileSpawnOnScreenCenter](Gameplay.Gameplay.HotWeapon.md#getbulletlocwhilespawnonscreencenter)**(): [`Vector`](Type.Type.Vector.md) <br> 使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location|
| **[getChildByGuid](Gameplay.Gameplay.HotWeapon.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.HotWeapon.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.HotWeapon.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.HotWeapon.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.HotWeapon.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getCurrentOwner](Gameplay.Gameplay.HotWeapon.md#getcurrentowner)**(): [`Character`](Gameplay.Gameplay.Character.md) <br> 获取当前热武器的所有者|
| **[getCurrentState](Gameplay.Gameplay.HotWeapon.md#getcurrentstate)**(): [`HotWeaponState`](../enums/Gameplay.Gameplay.HotWeaponState.md) <br> 获取当前热武器状态|
| **[getDefaultCrossHairSize](Gameplay.Gameplay.HotWeapon.md#getdefaultcrosshairsize)**(`number`): `number` <br> 传入Player和最大射程，获取默认准星大小|
| **[getForwardVector](Gameplay.Gameplay.HotWeapon.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.Gameplay.HotWeapon.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.HotWeapon.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.HotWeapon.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.HotWeapon.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.HotWeapon.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.HotWeapon.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.HotWeapon.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getShootDirWithDispersion](Gameplay.Gameplay.HotWeapon.md#getshootdirwithdispersion)**([`Vector`](Type.Type.Vector.md), `number`): [`Vector`](Type.Type.Vector.md) <br> 非屏幕中心生成子弹模式下，获取子弹飞行方向|
| **[getSourceAssetGuid](Gameplay.Gameplay.HotWeapon.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.HotWeapon.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getTransformForFire](Gameplay.Gameplay.HotWeapon.md#gettransformforfire)**(`number`): [`Transform`](Type.Type.Transform.md) <br> 获取开火的Transform|
| **[getUpVector](Gameplay.Gameplay.HotWeapon.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.HotWeapon.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.HotWeapon.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.HotWeapon.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.HotWeapon.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.HotWeapon.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[load](Gameplay.Gameplay.HotWeapon.md#load)**(): `void` <br> 上膛|
| **[onDestroy](Gameplay.Gameplay.HotWeapon.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.HotWeapon.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.HotWeapon.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Gameplay.HotWeapon.md#ready)**(): `Promise`<[`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)\> <br> GameObject准备好后返回|
| **[reload](Gameplay.Gameplay.HotWeapon.md#reload)**(`number`): `void` <br> 换弹|
| **[setCollision](Gameplay.Gameplay.HotWeapon.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setCurrentFireModel](Gameplay.Gameplay.HotWeapon.md#setcurrentfiremodel)**([`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md)): `void` <br> 切换设置当前开火模式|
| **[setLocationAndRotation](Gameplay.Gameplay.HotWeapon.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.HotWeapon.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.HotWeapon.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.HotWeapon.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.Gameplay.HotWeapon.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.HotWeapon.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.HotWeapon.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.HotWeapon.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.HotWeapon.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[startFire](Gameplay.Gameplay.HotWeapon.md#startfire)**(): `void` <br> 开火|
| **[stopFire](Gameplay.Gameplay.HotWeapon.md#stopfire)**(): `void` <br> 停止开火|
| **[unequipHotWeapon](Gameplay.Gameplay.HotWeapon.md#unequiphotweapon)**(): `void` <br> 卸载热武器|
| **[asyncFind](Gameplay.Gameplay.HotWeapon.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.HotWeapon.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.HotWeapon.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.HotWeapon.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.HotWeapon.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.HotWeapon.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.HotWeapon.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Properties

### accuracyOfFireComponent

• **accuracyOfFireComponent**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md)

**`Description`**

射击精度功能

___

### aimComponent

• **aimComponent**: [`HotWeaponAimComponent`](Gameplay.Gameplay.HotWeaponAimComponent.md)

**`Description`**

瞄准功能

___

### fireComponent

• **fireComponent**: [`HotWeaponFireComponent`](Gameplay.Gameplay.HotWeaponFireComponent.md)

**`Description`**

射击功能

___

### loadComponent

• **loadComponent**: [`HotWeaponLoadComponent`](Gameplay.Gameplay.HotWeaponLoadComponent.md)

**`Description`**

上膛功能

___

### onEquippedClient

• **onEquippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

客户端装备时执行绑定函数

___

### onEquippedServer

• **onEquippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

服务器装备时执行绑定函数

___

### onUnequippedClient

• **onUnequippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端卸载时执行绑定函数

___

### onUnequippedServer

• **onUnequippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器卸载时执行绑定函数

___

### recoilForceComponent

• **recoilForceComponent**: [`HotWeaponRecoilForceComponent`](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md)

**`Description`**

后坐力功能

___

### reloadComponent

• **reloadComponent**: [`HotWeaponReloadComponent`](Gameplay.Gameplay.HotWeaponReloadComponent.md)

**`Description`**

换弹功能

## Accessors

### accuracyOfFireEnable

• `get` **accuracyOfFireEnable**(): `boolean`

是否开启了射击精度组件

**`Description`**

是否开启了射击精度组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了射击精度组件

• `set` **accuracyOfFireEnable**(`isEnabled`): `void`

**`Description`**

设置是否开启射击精度组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  射击精度组件启用状态 |

#### Returns

`void`

___

### aimEnable

• `get` **aimEnable**(): `boolean`

**`Description`**

是否开启了瞄准组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了瞄准组件

• `set` **aimEnable**(`value`): `void`

**`Description`**

设置是否开启瞄准组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  瞄准组件启用状态 |

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

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

### loadEnable

• `get` **loadEnable**(): `boolean`

是否开启了上膛组件

**`Description`**

是否开启了上膛组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了上膛组件

• `set` **loadEnable**(`isEnabled`): `void`

**`Description`**

设置是否开启上膛组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  上膛组件启用状态 |

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

### recoilForceEnable

• `get` **recoilForceEnable**(): `boolean`

**`Description`**

是否开启了后坐力组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了后坐力组件

• `set` **recoilForceEnable**(`isEnabled`): `void`

**`Description`**

设置是否开启后座力组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  后座力组件启用状态 |

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

### reloadEnable

• `get` **reloadEnable**(): `boolean`

**`Description`**

是否开启了换弹组件

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启了换弹组件

• `set` **reloadEnable**(`isEnabled`): `void`

**`Description`**

设置是否开启换弹组件

**`Precautions`**

默认开启

**`Effect`**

在服务器调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  换弹组件启用状态 |

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

### breakLoad

▸ **breakLoad**(): `void`

**`Description`**

打断上膛

**`Effect`**

客户端调用自动广播

#### Returns

`void`

___

### breakReload

▸ **breakReload**(): `void`

**`Description`**

打断换弹

**`Effect`**

客户端调用自动广播

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

### cloneComponentsData

▸ **cloneComponentsData**(`otherHotWeapon`): `void`

**`Description`**

从传入的热武器逻辑对象中拷贝所有组件数据

**`Effect`**

在服务器调用

**`Precautions`**

无法拷贝代理委托绑定事件，完成拷贝后，数据同步到客户端有较短延迟

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherHotWeapon` | [`HotWeapon`](Gameplay.Gameplay.HotWeapon.md) |  数据源 |

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

### equipment

▸ **equipment**(`character`, `slotName`): `void`

**`Description`**

装备热武器到目标角色的指定插槽位置

**`Effect`**

客户端调用自动广播

**`Precautions`**

- S端调用可完成整个装备流程
 - C端调用主要目的是刷新热武器TS层对象中关于持有者的数据
 - 请确保TS层热武器构造完成之后再调用该函数，否则可能出现C端没有成功获取到持有者数据的问题
 - 热武器GameObject加载完毕后会有回调，请在客户端能异步获取新构造的热武器后，在Ready()这个异步方法中填写后续逻辑

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](Gameplay.Gameplay.Character.md) |  该武器的装备对象 default: |
| `slotName` | `string` |  要装备的插槽名称 default: |

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

### getBulletLocWhileSpawnOnScreenCenter

▸ **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Returns

[`Vector`](Type.Type.Vector.md)

子弹投掷物生成的location

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

### getCurrentOwner

▸ **getCurrentOwner**(): [`Character`](Gameplay.Gameplay.Character.md)

**`Description`**

获取当前热武器的所有者

**`Effect`**

调用端生效

#### Returns

[`Character`](Gameplay.Gameplay.Character.md)

当前热武器的所有者

___

### getCurrentState

▸ **getCurrentState**(): [`HotWeaponState`](../enums/Gameplay.Gameplay.HotWeaponState.md)

**`Description`**

获取当前热武器状态

**`Effect`**

调用端生效

#### Returns

[`HotWeaponState`](../enums/Gameplay.Gameplay.HotWeaponState.md)

当前热武器状态

___

### getDefaultCrossHairSize

▸ **getDefaultCrossHairSize**(`maxShootRange`): `number`

**`Description`**

传入Player和最大射程，获取默认准星大小

**`Effect`**

仅客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxShootRange` | `number` |  最大射程 default: |

#### Returns

`number`

默认准星大小(射击精度半角值)

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

### getShootDirWithDispersion

▸ **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](Type.Type.Vector.md)

**`Description`**

非屏幕中心生成子弹模式下，获取子弹飞行方向

**`Precautions`**

该函数可传入经偏移了的屏幕中心发出的射线方向

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLoc` | [`Vector`](Type.Type.Vector.md) |  子弹生成位置 default: |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Vector`](Type.Type.Vector.md)

子弹的实际飞行方向

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

### getTransformForFire

▸ **getTransformForFire**(`ShootRange`): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取开火的Transform

**`Effect`**

仅客户端调用

**`Precautions`**

todo Need Completed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Transform`](Type.Type.Transform.md)

生成子弹的Transform

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

### load

▸ **load**(): `void`

**`Description`**

上膛

**`Effect`**

客户端调用自动广播

#### Returns

`void`

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

▸ **ready**(): `Promise`<[`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`HotWeapon`](Gameplay.Gameplay.HotWeapon.md)\>

准备好的对象

___

### reload

▸ **reload**(`bulletSize`): `void`

**`Description`**

换弹

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bulletSize` | `number` |  子弹数 |

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

### setCurrentFireModel

▸ **setCurrentFireModel**(`FireMode`): `void`

**`Description`**

切换设置当前开火模式

**`Effect`**

调用端生效

**`Precautions`**

装备前只能在服务器调用，装备后可在客户端调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FireMode` | [`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md) |  新的热武器开火模式 |

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

### startFire

▸ **startFire**(): `void`

**`Description`**

开火

**`Effect`**

客户端调用自动广播

#### Returns

`void`

___

### stopFire

▸ **stopFire**(): `void`

**`Description`**

停止开火

**`Effect`**

客户端调用自动广播

#### Returns

`void`

___

### unequipHotWeapon

▸ **unequipHotWeapon**(): `void`

**`Description`**

卸载热武器

**`Effect`**

客户端调用自动广播

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
