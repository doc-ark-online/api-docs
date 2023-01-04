[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponFireComponent

# HotWeaponFireComponent <Badge type="tip" text="Class" />

**`Description`**

热武器开火组件

## Table of contents

| Properties |
| :-----|
| **[onEndContinuousFireServer](Gameplay.HotWeaponFireComponent.md#onendcontinuousfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器完成一次连发射击周期时执行绑定函数|
| **[onEndFireClient](Gameplay.HotWeaponFireComponent.md#onendfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端停止开火时执行绑定函数|
| **[onEndFireServer](Gameplay.HotWeaponFireComponent.md#onendfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器停止开火时执行绑定函数|
| **[onStartFireClient](Gameplay.HotWeaponFireComponent.md#onstartfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始开火时执行绑定函数|
| **[onStartFireServer](Gameplay.HotWeaponFireComponent.md#onstartfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始开火时执行绑定函数|

| Accessors |
| :-----|
| **[animationGuid](Gameplay.HotWeaponFireComponent.md#animationguid)**(): `string` <br> 绑定的动画GUID|
| **[currentBulletSize](Gameplay.HotWeaponFireComponent.md#currentbulletsize)**(): `number` <br> 获取当前弹夹中子弹数量|
| **[currentClipSize](Gameplay.HotWeaponFireComponent.md#currentclipsize)**(): `number` <br> 获取当前弹夹容量|
| **[currentFireInterval](Gameplay.HotWeaponFireComponent.md#currentfireinterval)**(): `number` <br> 获取开火间隙|
| **[currentFireModel](Gameplay.HotWeaponFireComponent.md#currentfiremodel)**(): [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) <br> 获取当前的开火模式|
| **[currentMultipleShot](Gameplay.HotWeaponFireComponent.md#currentmultipleshot)**(): `number` <br> 获取一次开火发射的子弹数量|
| **[isFireOnScreenCenter](Gameplay.HotWeaponFireComponent.md#isfireonscreencenter)**(): `boolean` <br> 获取是否在屏幕中心开火|
| **[isFullAutoMode](Gameplay.HotWeaponFireComponent.md#isfullautomode)**(): `boolean` <br> 获取当前状态下 isInFullAuto 的值，一般用于处理全自动开火模式下的自动换弹|
| **[offsetOfFireOnScreenCenter](Gameplay.HotWeaponFireComponent.md#offsetoffireonscreencenter)**(): [`Vector`](Type.Vector.md) <br> 获取屏幕中心开火时的偏移|

| Methods |
| :-----|
| **[hadAnimationGuid](Gameplay.HotWeaponFireComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画GUID|
| **[isFiring](Gameplay.HotWeaponFireComponent.md#isfiring)**(): `boolean` <br> 获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹|

## Properties

### onEndContinuousFireServer

• **onEndContinuousFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器完成一次连发射击周期时执行绑定函数

___

### onEndFireClient

• **onEndFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端停止开火时执行绑定函数

___

### onEndFireServer

• **onEndFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器停止开火时执行绑定函数

___

### onStartFireClient

• **onStartFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始开火时执行绑定函数

___

### onStartFireServer

• **onStartFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始开火时执行绑定函数

## Accessors

### animationGuid

• `get` **animationGuid**(): `string`

**`Description`**

绑定的动画GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画 GUID

• `set` **animationGuid**(`guid`): `void`

**`Description`**

设置动画 GUID

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  需要设置的蒙太奇动画 guid |

#### Returns

`void`

___

### currentBulletSize

• `get` **currentBulletSize**(): `number`

**`Description`**

获取当前弹夹中子弹数量

**`Effect`**

调用端生效

#### Returns

`number`

当前弹夹中子弹数量

• `set` **currentBulletSize**(`value`): `void`

**`Description`**

设置当前弹夹中子弹数量

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新弹夹中子弹数量 |

#### Returns

`void`

___

### currentClipSize

• `get` **currentClipSize**(): `number`

**`Description`**

获取当前弹夹容量

**`Effect`**

调用端生效

#### Returns

`number`

当前弹夹容量

• `set` **currentClipSize**(`value`): `void`

**`Description`**

设置当前弹夹容量

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  当前弹夹容量 |

#### Returns

`void`

___

### currentFireInterval

• `get` **currentFireInterval**(): `number`

**`Description`**

获取开火间隙

**`Effect`**

调用端生效

#### Returns

`number`

开火间隙

• `set` **currentFireInterval**(`interval`): `void`

**`Description`**

设置开火间隙

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | `number` |  开火间隙 |

#### Returns

`void`

___

### currentFireModel

• `get` **currentFireModel**(): [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)

**`Description`**

获取当前的开火模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)

当前的开火模式

___

### currentMultipleShot

• `get` **currentMultipleShot**(): `number`

**`Description`**

获取一次开火发射的子弹数量

**`Effect`**

调用端生效

#### Returns

`number`

一次开火发射的子弹数量

• `set` **currentMultipleShot**(`count`): `void`

**`Description`**

设置一次开火发射的子弹数量

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` |  一次开火发射的子弹数量 |

#### Returns

`void`

___

### isFireOnScreenCenter

• `get` **isFireOnScreenCenter**(): `boolean`

**`Description`**

获取是否在屏幕中心开火

**`Effect`**

调用端生效

#### Returns

`boolean`

是否在屏幕中心开火

• `set` **isFireOnScreenCenter**(`value`): `void`

**`Description`**

设置是否在屏幕中心开火

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  是否在屏幕中心开火 |

#### Returns

`void`

___

### isFullAutoMode

• `get` **isFullAutoMode**(): `boolean`

**`Description`**

获取当前状态下 isInFullAuto 的值，一般用于处理全自动开火模式下的自动换弹

**`Effect`**

调用端生效

#### Returns

`boolean`

当前状态下 isInFullAuto

• `set` **isFullAutoMode**(`isInFullAuto`): `void`

**`Description`**

设置当前状态下isInFullAuto的值

**`Effect`**

客户端调用自动广播

**`Precautions`**

一般用于处理全自动开火模式下的自动换弹

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isInFullAuto` | `boolean` |  当前状态下isInFullAuto的值 |

#### Returns

`void`

___

### offsetOfFireOnScreenCenter

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](Type.Vector.md)

**`Description`**

获取屏幕中心开火时的偏移

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Vector.md)

屏幕中心开火时的偏移

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void`

**`Description`**

设置屏幕中心开火时的偏移

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`Vector`](Type.Vector.md) |  屏幕中心开火时的偏移 |

#### Returns

`void`

## Methods

### hadAnimationGuid

▸ **hadAnimationGuid**(): `boolean`

**`Description`**

是否有动画GUID

**`Effect`**

调用端生效

#### Returns

`boolean`

是否有动画GUID

___

### isFiring

▸ **isFiring**(): `boolean`

**`Description`**

获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹

**`Effect`**

调用端生效

#### Returns

`boolean`

当前弹夹中子弹数量
