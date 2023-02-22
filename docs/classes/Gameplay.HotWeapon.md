[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeapon

# HotWeapon <Badge type="tip" text="Class" /> <Score text="HotWeapon" />

热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。

**`Groups`**

GAMEPLAY

::: warning Precautions

当装备上玩家时，此对象的功能才能生效。

:::

使用示例: 如下示例展示热武器使用的基本流程
```ts
// 构造
const hotWeapon = Core.GameObject.spawnGameObject("HotWeapon") as Gameplay.HotWeapon;
// 装备
hotWeapon.equipment(player.character, "Right_Hand");
// 设置参数
hotWeapon.fireComponent.animationGuid = "4172";
hotWeapon.onEquippedServer.add((owner) => {
 // 热武器装备好了后会在服务器端触发回调
})
// 开始执行操作
hotWeapon.startFire();
```

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`HotWeapon`**

## Table of contents

| Properties |
| :-----|
| **[accuracyOfFireComponent](Gameplay.HotWeapon.md#accuracyoffirecomponent)**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 是否开启了射击精度组件|
| **[aimComponent](Gameplay.HotWeapon.md#aimcomponent)**: [`HotWeaponAimComponent`](Gameplay.HotWeaponAimComponent.md) <br> 是否开启了射击精度组件|
| **[fireComponent](Gameplay.HotWeapon.md#firecomponent)**: [`HotWeaponFireComponent`](Gameplay.HotWeaponFireComponent.md) <br> 是否开启了射击精度组件|
| **[loadComponent](Gameplay.HotWeapon.md#loadcomponent)**: [`HotWeaponLoadComponent`](Gameplay.HotWeaponLoadComponent.md) <br> 是否开启了射击精度组件|
| **[onEquippedClient](Gameplay.HotWeapon.md#onequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 是否开启了射击精度组件|
| **[onEquippedServer](Gameplay.HotWeapon.md#onequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 是否开启了射击精度组件|
| **[onUnequippedClient](Gameplay.HotWeapon.md#onunequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 是否开启了射击精度组件|
| **[onUnequippedServer](Gameplay.HotWeapon.md#onunequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 是否开启了射击精度组件|
| **[recoilForceComponent](Gameplay.HotWeapon.md#recoilforcecomponent)**: [`HotWeaponRecoilForceComponent`](Gameplay.HotWeaponRecoilForceComponent.md) <br> 是否开启了射击精度组件|
| **[reloadComponent](Gameplay.HotWeapon.md#reloadcomponent)**: [`HotWeaponReloadComponent`](Gameplay.HotWeaponReloadComponent.md) <br> 是否开启了射击精度组件|

| Accessors |
| :-----|
| **[accuracyOfFireEnable](Gameplay.HotWeapon.md#accuracyoffireenable)**(): `boolean` <br> 是否开启了射击精度组件|
| **[aimEnable](Gameplay.HotWeapon.md#aimenable)**(): `boolean` <br> 是否开启了瞄准组件|
| **[loadEnable](Gameplay.HotWeapon.md#loadenable)**(): `boolean` <br> 是否开启了上膛组件|
| **[recoilForceEnable](Gameplay.HotWeapon.md#recoilforceenable)**(): `boolean` <br> 是否开启了后坐力组件|
| **[reloadEnable](Gameplay.HotWeapon.md#reloadenable)**(): `boolean` <br> 是否开启了换弹组件|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[breakLoad](Gameplay.HotWeapon.md#breakload)**(): `void` <br> 打断上膛|
| **[breakReload](Gameplay.HotWeapon.md#breakreload)**(): `void` <br> 打断换弹|
| **[cloneComponentsData](Gameplay.HotWeapon.md#clonecomponentsdata)**(`otherHotWeapon`: [`HotWeapon`](Gameplay.HotWeapon.md)): `void` <br> 从传入的热武器逻辑对象中拷贝所有组件数据|
| **[equipment](Gameplay.HotWeapon.md#equipment)**(`character`: [`Character`](Gameplay.Character.md), `slotName`: `string`): `void` <br> 装备热武器到目标角色的指定插槽位置|
| **[getBulletLocWhileSpawnOnScreenCenter](Gameplay.HotWeapon.md#getbulletlocwhilespawnonscreencenter)**(): [`Vector`](Type.Vector.md) <br> 使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location|
| **[getCurrentOwner](Gameplay.HotWeapon.md#getcurrentowner)**(): [`Character`](Gameplay.Character.md) <br> 获取当前热武器的所有者|
| **[getCurrentState](Gameplay.HotWeapon.md#getcurrentstate)**(): [`HotWeaponState`](../enums/Gameplay.HotWeaponState.md) <br> 获取当前热武器状态|
| **[getDefaultCrossHairSize](Gameplay.HotWeapon.md#getdefaultcrosshairsize)**(`maxShootRange`: `number`): `number` <br> 传入Player和最大射程，获取默认准星大小|
| **[getShootDirWithDispersion](Gameplay.HotWeapon.md#getshootdirwithdispersion)**(`StartLoc`: [`Vector`](Type.Vector.md), `ShootRange`: `number`): [`Vector`](Type.Vector.md) <br> 非屏幕中心生成子弹模式下，获取子弹飞行方向|
| **[getTransformForFire](Gameplay.HotWeapon.md#gettransformforfire)**(`ShootRange`: `number`): [`Transform`](Type.Transform.md) <br> 获取开火的Transform|
| **[load](Gameplay.HotWeapon.md#load)**(): `void` <br> 上膛|
| **[reload](Gameplay.HotWeapon.md#reload)**(`bulletSize`: `number`): `void` <br> 换弹|
| **[setCurrentFireModel](Gameplay.HotWeapon.md#setcurrentfiremodel)**(`FireMode`: [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)): `void` <br> 切换设置当前开火模式|
| **[startFire](Gameplay.HotWeapon.md#startfire)**(): `void` <br> 开火|
| **[stopFire](Gameplay.HotWeapon.md#stopfire)**(): `void` <br> 停止开火|
| **[unequipHotWeapon](Gameplay.HotWeapon.md#unequiphotweapon)**(): `void` <br> 卸载热武器|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
:::


## Properties

### accuracyOfFireComponent <Score text="accuracyOfFireComponent" /> 

• **accuracyOfFireComponent**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.HotWeaponAccuracyOfFireComponent.md)

射击精度功能

___

### aimComponent <Score text="aimComponent" /> 

• **aimComponent**: [`HotWeaponAimComponent`](Gameplay.HotWeaponAimComponent.md)

瞄准功能

___

### fireComponent <Score text="fireComponent" /> 

• **fireComponent**: [`HotWeaponFireComponent`](Gameplay.HotWeaponFireComponent.md)

射击功能

___

### loadComponent <Score text="loadComponent" /> 

• **loadComponent**: [`HotWeaponLoadComponent`](Gameplay.HotWeaponLoadComponent.md)

上膛功能

___

### onEquippedClient <Score text="onEquippedClient" /> 

• **onEquippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

客户端装备时执行绑定函数

___

### onEquippedServer <Score text="onEquippedServer" /> 

• **onEquippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

服务器装备时执行绑定函数

___

### onUnequippedClient <Score text="onUnequippedClient" /> 

• **onUnequippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端卸载时执行绑定函数

___

### onUnequippedServer <Score text="onUnequippedServer" /> 

• **onUnequippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器卸载时执行绑定函数

___

### recoilForceComponent <Score text="recoilForceComponent" /> 

• **recoilForceComponent**: [`HotWeaponRecoilForceComponent`](Gameplay.HotWeaponRecoilForceComponent.md)

后坐力功能

___

### reloadComponent <Score text="reloadComponent" /> 

• **reloadComponent**: [`HotWeaponReloadComponent`](Gameplay.HotWeaponReloadComponent.md)

换弹功能

## Accessors

### accuracyOfFireEnable <Score text="accuracyOfFireEnable" /> 

• `get` **accuracyOfFireEnable**(): `boolean` 

是否开启了射击精度组件

是否开启了射击精度组件


#### Returns

`boolean`

是否开启了射击精度组件

• `set` **accuracyOfFireEnable**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启射击精度组件

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  射击精度组件启用状态 |


___

### aimEnable <Score text="aimEnable" /> 

• `get` **aimEnable**(): `boolean` 

是否开启了瞄准组件


#### Returns

`boolean`

是否开启了瞄准组件

• `set` **aimEnable**(`value`): `void` <Badge type="tip" text="server" />

设置是否开启瞄准组件

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  瞄准组件启用状态 |



### loadEnable <Score text="loadEnable" /> 

• `get` **loadEnable**(): `boolean` 

是否开启了上膛组件

是否开启了上膛组件


#### Returns

`boolean`

是否开启了上膛组件

• `set` **loadEnable**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启上膛组件

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  上膛组件启用状态 |



### recoilForceEnable <Score text="recoilForceEnable" /> 

• `get` **recoilForceEnable**(): `boolean` 

是否开启了后坐力组件


#### Returns

`boolean`

是否开启了后坐力组件

• `set` **recoilForceEnable**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启后座力组件

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  后座力组件启用状态 |



### reloadEnable <Score text="reloadEnable" /> 

• `get` **reloadEnable**(): `boolean` 

是否开启了换弹组件


#### Returns

`boolean`

是否开启了换弹组件

• `set` **reloadEnable**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启换弹组件

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  换弹组件启用状态 |



## Methods

### breakLoad <Score text="breakLoad" /> 

• **breakLoad**(): `void` <Badge type="tip" text="other" />

打断上膛

调用端自动广播


___

### breakReload <Score text="breakReload" /> 

• **breakReload**(): `void` <Badge type="tip" text="other" />

打断换弹

调用端自动广播



### cloneComponentsData <Score text="cloneComponentsData" /> 

• **cloneComponentsData**(`otherHotWeapon`): `void` <Badge type="tip" text="server" />

从传入的热武器逻辑对象中拷贝所有组件数据


::: warning Precautions

无法拷贝代理委托绑定事件，完成拷贝后，数据同步到客户端有较短延迟

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherHotWeapon` | [`HotWeapon`](Gameplay.HotWeapon.md) |  数据源 |



### equipment <Score text="equipment" /> 

• **equipment**(`character`, `slotName`): `void` <Badge type="tip" text="other" />

装备热武器到目标角色的指定插槽位置

调用端自动广播

::: warning Precautions

- S端调用可完成整个装备流程
 - C端调用主要目的是刷新热武器TS层对象中关于持有者的数据
 - 请确保TS层热武器构造完成之后再调用该函数，否则可能出现C端没有成功获取到持有者数据的问题
 - 热武器GameObject加载完毕后会有回调，请在客户端能异步获取新构造的热武器后，在Ready()这个异步方法中填写后续逻辑

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](Gameplay.Character.md) |  该武器的装备对象 default: |
| `slotName` | `string` |  要装备的插槽名称 default: |



### getBulletLocWhileSpawnOnScreenCenter <Score text="getBulletLocWhileSpawnOnScreenCenter" /> 

• **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="client" />

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location


::: warning Precautions

服务器没有角色相机组件

:::

#### Returns

[`Vector`](Type.Vector.md)

子弹投掷物生成的location


### getCurrentOwner <Score text="getCurrentOwner" /> 

• **getCurrentOwner**(): [`Character`](Gameplay.Character.md) 

获取当前热武器的所有者


#### Returns

[`Character`](Gameplay.Character.md)

当前热武器的所有者

___

### getCurrentState <Score text="getCurrentState" /> 

• **getCurrentState**(): [`HotWeaponState`](../enums/Gameplay.HotWeaponState.md) 

获取当前热武器状态


#### Returns

[`HotWeaponState`](../enums/Gameplay.HotWeaponState.md)

当前热武器状态

___

### getDefaultCrossHairSize <Score text="getDefaultCrossHairSize" /> 

• **getDefaultCrossHairSize**(`maxShootRange`): `number` <Badge type="tip" text="client" />

传入Player和最大射程，获取默认准星大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxShootRange` | `number` |  最大射程 default: |

#### Returns

`number`

默认准星大小(射击精度半角值)


### getShootDirWithDispersion <Score text="getShootDirWithDispersion" /> 

• **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](Type.Vector.md) <Badge type="tip" text="client" />

非屏幕中心生成子弹模式下，获取子弹飞行方向

::: warning Precautions

该函数可传入经偏移了的屏幕中心发出的射线方向

:::


::: warning Precautions

服务器没有角色相机组件

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLoc` | [`Vector`](Type.Vector.md) |  子弹生成位置 default: |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Vector`](Type.Vector.md)

子弹的实际飞行方向


### getTransformForFire <Score text="getTransformForFire" /> 

• **getTransformForFire**(`ShootRange`): [`Transform`](Type.Transform.md) <Badge type="tip" text="client" />

获取开火的Transform


::: warning Precautions

todo Need Completed

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Transform`](Type.Transform.md)

生成子弹的Transform


### load <Score text="load" /> 

• **load**(): `void` <Badge type="tip" text="other" />

上膛

调用端自动广播



### reload <Score text="reload" /> 

• **reload**(`bulletSize`): `void` <Badge type="tip" text="other" />

换弹

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bulletSize` | `number` |  子弹数 |



### setCurrentFireModel <Score text="setCurrentFireModel" /> 

• **setCurrentFireModel**(`FireMode`): `void` 

切换设置当前开火模式


::: warning Precautions

装备前只能在服务器调用，装备后可在客户端调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FireMode` | [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) |  新的热武器开火模式 |



### startFire <Score text="startFire" /> 

• **startFire**(): `void` <Badge type="tip" text="other" />

开火

调用端自动广播


___

### stopFire <Score text="stopFire" /> 

• **stopFire**(): `void` <Badge type="tip" text="other" />

停止开火

调用端自动广播


___

### unequipHotWeapon <Score text="unequipHotWeapon" /> 

• **unequipHotWeapon**(): `void` <Badge type="tip" text="other" />

卸载热武器

调用端自动广播

