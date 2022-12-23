[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponFireComponent

# Class: HotWeaponFireComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponFireComponent

**`Description`**

热武器开火组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponFireComponent.md#constructor)

### Properties

- [delegateEndContinuousFireOnServer](Gameplay.Gameplay.HotWeaponFireComponent.md#delegateendcontinuousfireonserver)
- [delegateEndFireOnClient](Gameplay.Gameplay.HotWeaponFireComponent.md#delegateendfireonclient)
- [delegateEndFireOnServer](Gameplay.Gameplay.HotWeaponFireComponent.md#delegateendfireonserver)
- [delegateStartFireOnClient](Gameplay.Gameplay.HotWeaponFireComponent.md#delegatestartfireonclient)
- [delegateStartFireOnServer](Gameplay.Gameplay.HotWeaponFireComponent.md#delegatestartfireonserver)

### Accessors

- [currentBulletSize](Gameplay.Gameplay.HotWeaponFireComponent.md#currentbulletsize)
- [currentClipSize](Gameplay.Gameplay.HotWeaponFireComponent.md#currentclipsize)
- [currentFireInterval](Gameplay.Gameplay.HotWeaponFireComponent.md#currentfireinterval)
- [currentMultipleShot](Gameplay.Gameplay.HotWeaponFireComponent.md#currentmultipleshot)
- [isFireOnScreenCenter](Gameplay.Gameplay.HotWeaponFireComponent.md#isfireonscreencenter)
- [isFullAutoMode](Gameplay.Gameplay.HotWeaponFireComponent.md#isfullautomode)
- [offsetOfFireOnScreenCenter](Gameplay.Gameplay.HotWeaponFireComponent.md#offsetoffireonscreencenter)

### Methods

- [getAnimationGuid](Gameplay.Gameplay.HotWeaponFireComponent.md#getanimationguid)
- [getCurrentFireModel](Gameplay.Gameplay.HotWeaponFireComponent.md#getcurrentfiremodel)
- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponFireComponent.md#hadanimationguid)
- [isFiring](Gameplay.Gameplay.HotWeaponFireComponent.md#isfiring)
- [setAnimationGuid](Gameplay.Gameplay.HotWeaponFireComponent.md#setanimationguid)

## Constructors

### constructor

• **new HotWeaponFireComponent**()

## Properties

### delegateEndContinuousFireOnServer

• **delegateEndContinuousFireOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器完成一次连发射击周期时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11839

___

### delegateEndFireOnClient

• **delegateEndFireOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端停止开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11835

___

### delegateEndFireOnServer

• **delegateEndFireOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器停止开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11831

___

### delegateStartFireOnClient

• **delegateStartFireOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11827

___

### delegateStartFireOnServer

• **delegateStartFireOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11823

## Accessors

### currentBulletSize

• `get` **currentBulletSize**(): `number`

**`Description`**

获取当前弹夹中子弹数量

**`Effect`**

调用端生效

#### Returns

`number`

当前弹夹中子弹数量

#### Defined in

Gameplay/index.d.ts:11948

• `set` **currentBulletSize**(`value`): `void`

**`Description`**

设置当前弹夹中子弹数量

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 新弹夹中子弹数量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11942

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

#### Defined in

Gameplay/index.d.ts:11929

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
| `value` | `number` | usage: 当前弹夹容量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11936

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

#### Defined in

Gameplay/index.d.ts:11923

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
| `interval` | `number` | usage: 开火间隙 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11917

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

#### Defined in

Gameplay/index.d.ts:11910

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
| `count` | `number` | usage: 一次开火发射的子弹数量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11904

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

#### Defined in

Gameplay/index.d.ts:11884

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
| `value` | `boolean` | usage: 是否在屏幕中心开火 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11878

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

#### Defined in

Gameplay/index.d.ts:11954

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
| `isInFullAuto` | `boolean` | usage: 当前状态下isInFullAuto的值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11961

___

### offsetOfFireOnScreenCenter

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取屏幕中心开火时的偏移

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

屏幕中心开火时的偏移

#### Defined in

Gameplay/index.d.ts:11897

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
| `offset` | [`Vector`](Type.Type.Vector.md) | usage: 屏幕中心开火时的偏移 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11891

## Methods

### getAnimationGuid

▸ **getAnimationGuid**(): `string`

**`Description`**

绑定的动画GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画 GUID

#### Defined in

Gameplay/index.d.ts:11853

___

### getCurrentFireModel

▸ **getCurrentFireModel**(): [`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md)

**`Description`**

获取当前的开火模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md)

当前的开火模式

#### Defined in

Gameplay/index.d.ts:11865

___

### hadAnimationGuid

▸ **hadAnimationGuid**(): `boolean`

**`Description`**

是否有动画GUID

**`Effect`**

调用端生效

#### Returns

`boolean`

是否有动画GUID

#### Defined in

Gameplay/index.d.ts:11859

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

#### Defined in

Gameplay/index.d.ts:11871

___

### setAnimationGuid

▸ **setAnimationGuid**(`guid`): `void`

**`Description`**

设置动画 GUID

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage: 需要设置的蒙太奇动画 guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11847
