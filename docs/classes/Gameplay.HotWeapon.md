[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeapon

# HotWeapon <Badge type="tip" text="Class" />

**`Description`**

热武器

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`HotWeapon`**

## Table of contents

| Properties |
| :-----|
| **[accuracyOfFireComponent](Gameplay.HotWeapon.md#accuracyoffirecomponent)**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.HotWeaponAccuracyOfFireComponent.md) <br> 射击精度功能|
| **[aimComponent](Gameplay.HotWeapon.md#aimcomponent)**: [`HotWeaponAimComponent`](Gameplay.HotWeaponAimComponent.md) <br> 瞄准功能|
| **[fireComponent](Gameplay.HotWeapon.md#firecomponent)**: [`HotWeaponFireComponent`](Gameplay.HotWeaponFireComponent.md) <br> 射击功能|
| **[loadComponent](Gameplay.HotWeapon.md#loadcomponent)**: [`HotWeaponLoadComponent`](Gameplay.HotWeaponLoadComponent.md) <br> 上膛功能|
| **[onEquippedClient](Gameplay.HotWeapon.md#onequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 客户端装备时执行绑定函数|
| **[onEquippedServer](Gameplay.HotWeapon.md#onequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 服务器装备时执行绑定函数|
| **[onUnequippedClient](Gameplay.HotWeapon.md#onunequippedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端卸载时执行绑定函数|
| **[onUnequippedServer](Gameplay.HotWeapon.md#onunequippedserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器卸载时执行绑定函数|
| **[recoilForceComponent](Gameplay.HotWeapon.md#recoilforcecomponent)**: [`HotWeaponRecoilForceComponent`](Gameplay.HotWeaponRecoilForceComponent.md) <br> 后坐力功能|
| **[reloadComponent](Gameplay.HotWeapon.md#reloadcomponent)**: [`HotWeaponReloadComponent`](Gameplay.HotWeaponReloadComponent.md) <br> 换弹功能|

| Accessors |
| :-----|
| **[accuracyOfFireEnable](Gameplay.HotWeapon.md#accuracyoffireenable)**(): `boolean` <br> **`Description`**|
| **[aimEnable](Gameplay.HotWeapon.md#aimenable)**(): `boolean` <br> 是否开启了瞄准组件|
| **[loadEnable](Gameplay.HotWeapon.md#loadenable)**(): `boolean` <br> **`Description`**|
| **[recoilForceEnable](Gameplay.HotWeapon.md#recoilforceenable)**(): `boolean` <br> 是否开启了后坐力组件|
| **[reloadEnable](Gameplay.HotWeapon.md#reloadenable)**(): `boolean` <br> 是否开启了换弹组件|

| Methods |
| :-----|
| **[breakLoad](Gameplay.HotWeapon.md#breakload)**(): `void` <br> 打断上膛|
| **[breakReload](Gameplay.HotWeapon.md#breakreload)**(): `void` <br> 打断换弹|
| **[cloneComponentsData](Gameplay.HotWeapon.md#clonecomponentsdata)**([`HotWeapon`](Gameplay.HotWeapon.md)): `void` <br> 从传入的热武器逻辑对象中拷贝所有组件数据|
| **[equipment](Gameplay.HotWeapon.md#equipment)**([`Character`](Gameplay.Character.md), `string`): `void` <br> 装备热武器到目标角色的指定插槽位置|
| **[getBulletLocWhileSpawnOnScreenCenter](Gameplay.HotWeapon.md#getbulletlocwhilespawnonscreencenter)**(): [`Vector`](Type.Vector.md) <br> 使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location|
| **[getCurrentOwner](Gameplay.HotWeapon.md#getcurrentowner)**(): [`Character`](Gameplay.Character.md) <br> 获取当前热武器的所有者|
| **[getCurrentState](Gameplay.HotWeapon.md#getcurrentstate)**(): [`HotWeaponState`](../enums/Gameplay.HotWeaponState.md) <br> 获取当前热武器状态|
| **[getDefaultCrossHairSize](Gameplay.HotWeapon.md#getdefaultcrosshairsize)**(`number`): `number` <br> 传入Player和最大射程，获取默认准星大小|
| **[getShootDirWithDispersion](Gameplay.HotWeapon.md#getshootdirwithdispersion)**([`Vector`](Type.Vector.md), `number`): [`Vector`](Type.Vector.md) <br> 非屏幕中心生成子弹模式下，获取子弹飞行方向|
| **[getTransformForFire](Gameplay.HotWeapon.md#gettransformforfire)**(`number`): [`Transform`](Type.Transform.md) <br> 获取开火的Transform|
| **[load](Gameplay.HotWeapon.md#load)**(): `void` <br> 上膛|
| **[reload](Gameplay.HotWeapon.md#reload)**(`number`): `void` <br> 换弹|
| **[setCurrentFireModel](Gameplay.HotWeapon.md#setcurrentfiremodel)**([`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)): `void` <br> 切换设置当前开火模式|
| **[startFire](Gameplay.HotWeapon.md#startfire)**(): `void` <br> 开火|
| **[stopFire](Gameplay.HotWeapon.md#stopfire)**(): `void` <br> 停止开火|
| **[unequipHotWeapon](Gameplay.HotWeapon.md#unequiphotweapon)**(): `void` <br> 卸载热武器|

## Properties

### accuracyOfFireComponent

• **accuracyOfFireComponent**: [`HotWeaponAccuracyOfFireComponent`](Gameplay.HotWeaponAccuracyOfFireComponent.md)

**`Description`**

射击精度功能

___

### aimComponent

• **aimComponent**: [`HotWeaponAimComponent`](Gameplay.HotWeaponAimComponent.md)

**`Description`**

瞄准功能

___

### fireComponent

• **fireComponent**: [`HotWeaponFireComponent`](Gameplay.HotWeaponFireComponent.md)

**`Description`**

射击功能

___

### loadComponent

• **loadComponent**: [`HotWeaponLoadComponent`](Gameplay.HotWeaponLoadComponent.md)

**`Description`**

上膛功能

___

### onEquippedClient

• **onEquippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

客户端装备时执行绑定函数

___

### onEquippedServer

• **onEquippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

**`Description`**

服务器装备时执行绑定函数

___

### onUnequippedClient

• **onUnequippedClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端卸载时执行绑定函数

___

### onUnequippedServer

• **onUnequippedServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器卸载时执行绑定函数

___

### recoilForceComponent

• **recoilForceComponent**: [`HotWeaponRecoilForceComponent`](Gameplay.HotWeaponRecoilForceComponent.md)

**`Description`**

后坐力功能

___

### reloadComponent

• **reloadComponent**: [`HotWeaponReloadComponent`](Gameplay.HotWeaponReloadComponent.md)

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


## Methods

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
| `otherHotWeapon` | [`HotWeapon`](Gameplay.HotWeapon.md) |  数据源 |

#### Returns

`void`


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
| `character` | [`Character`](Gameplay.Character.md) |  该武器的装备对象 default: |
| `slotName` | `string` |  要装备的插槽名称 default: |

#### Returns

`void`


### getBulletLocWhileSpawnOnScreenCenter

▸ **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](Type.Vector.md)

**`Description`**

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Returns

[`Vector`](Type.Vector.md)

子弹投掷物生成的location


### getCurrentOwner

▸ **getCurrentOwner**(): [`Character`](Gameplay.Character.md)

**`Description`**

获取当前热武器的所有者

**`Effect`**

调用端生效

#### Returns

[`Character`](Gameplay.Character.md)

当前热武器的所有者

___

### getCurrentState

▸ **getCurrentState**(): [`HotWeaponState`](../enums/Gameplay.HotWeaponState.md)

**`Description`**

获取当前热武器状态

**`Effect`**

调用端生效

#### Returns

[`HotWeaponState`](../enums/Gameplay.HotWeaponState.md)

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


### getShootDirWithDispersion

▸ **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](Type.Vector.md)

**`Description`**

非屏幕中心生成子弹模式下，获取子弹飞行方向

**`Precautions`**

该函数可传入经偏移了的屏幕中心发出的射线方向

**`Effect`**

只在客户端调用，因为服务器没有角色相机组件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLoc` | [`Vector`](Type.Vector.md) |  子弹生成位置 default: |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Vector`](Type.Vector.md)

子弹的实际飞行方向


### getTransformForFire

▸ **getTransformForFire**(`ShootRange`): [`Transform`](Type.Transform.md)

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

[`Transform`](Type.Transform.md)

生成子弹的Transform


### load

▸ **load**(): `void`

**`Description`**

上膛

**`Effect`**

客户端调用自动广播

#### Returns

`void`


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
| `FireMode` | [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) |  新的热武器开火模式 |

#### Returns

`void`


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
