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

- [onEndContinuousFireServer](Gameplay.Gameplay.HotWeaponFireComponent.md#onendcontinuousfireserver)
- [onEndFireClient](Gameplay.Gameplay.HotWeaponFireComponent.md#onendfireclient)
- [onEndFireServer](Gameplay.Gameplay.HotWeaponFireComponent.md#onendfireserver)
- [onStartFireClient](Gameplay.Gameplay.HotWeaponFireComponent.md#onstartfireclient)
- [onStartFireServer](Gameplay.Gameplay.HotWeaponFireComponent.md#onstartfireserver)

### Accessors

- [animationGuid](Gameplay.Gameplay.HotWeaponFireComponent.md#animationguid)
- [currentBulletSize](Gameplay.Gameplay.HotWeaponFireComponent.md#currentbulletsize)
- [currentClipSize](Gameplay.Gameplay.HotWeaponFireComponent.md#currentclipsize)
- [currentFireInterval](Gameplay.Gameplay.HotWeaponFireComponent.md#currentfireinterval)
- [currentFireModel](Gameplay.Gameplay.HotWeaponFireComponent.md#currentfiremodel)
- [currentMultipleShot](Gameplay.Gameplay.HotWeaponFireComponent.md#currentmultipleshot)
- [isFireOnScreenCenter](Gameplay.Gameplay.HotWeaponFireComponent.md#isfireonscreencenter)
- [isFullAutoMode](Gameplay.Gameplay.HotWeaponFireComponent.md#isfullautomode)
- [offsetOfFireOnScreenCenter](Gameplay.Gameplay.HotWeaponFireComponent.md#offsetoffireonscreencenter)

### Methods

- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponFireComponent.md#hadanimationguid)
- [isFiring](Gameplay.Gameplay.HotWeaponFireComponent.md#isfiring)

## Constructors

### constructor

• **new HotWeaponFireComponent**()

## Properties

### onEndContinuousFireServer

• **onEndContinuousFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器完成一次连发射击周期时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11527

---

### onEndFireClient

• **onEndFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端停止开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11523

---

### onEndFireServer

• **onEndFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器停止开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11519

---

### onStartFireClient

• **onStartFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11515

---

### onStartFireServer

• **onStartFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始开火时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11511

## Accessors

### animationGuid

• `get` **animationGuid**(): `string`

**`Description`**

绑定的动画 GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画 GUID

#### Defined in

Gameplay/index.d.ts:11539

• `set` **animationGuid**(`guid`): `void`

**`Description`**

设置动画 GUID

**`Effect`**

客户端调用自动广播

#### Parameters

| Name   | Type     | Description                      |
| :----- | :------- | :------------------------------- |
| `guid` | `string` | usage: 需要设置的蒙太奇动画 guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11533

---

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

Gameplay/index.d.ts:11634

• `set` **currentBulletSize**(`value`): `void`

**`Description`**

设置当前弹夹中子弹数量

**`Effect`**

客户端调用自动广播

#### Parameters

| Name    | Type     | Description             |
| :------ | :------- | :---------------------- |
| `value` | `number` | usage: 新弹夹中子弹数量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11628

---

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

Gameplay/index.d.ts:11615

• `set` **currentClipSize**(`value`): `void`

**`Description`**

设置当前弹夹容量

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description         |
| :------ | :------- | :------------------ |
| `value` | `number` | usage: 当前弹夹容量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11622

---

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

Gameplay/index.d.ts:11609

• `set` **currentFireInterval**(`interval`): `void`

**`Description`**

设置开火间隙

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description     |
| :--------- | :------- | :-------------- |
| `interval` | `number` | usage: 开火间隙 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11603

---

### currentFireModel

• `get` **currentFireModel**(): [`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md)

**`Description`**

获取当前的开火模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponFireMode`](../enums/Gameplay.Gameplay.HotWeaponFireMode.md)

当前的开火模式

#### Defined in

Gameplay/index.d.ts:11551

---

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

Gameplay/index.d.ts:11596

• `set` **currentMultipleShot**(`count`): `void`

**`Description`**

设置一次开火发射的子弹数量

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description                   |
| :------ | :------- | :---------------------------- |
| `count` | `number` | usage: 一次开火发射的子弹数量 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11590

---

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

Gameplay/index.d.ts:11570

• `set` **isFireOnScreenCenter**(`value`): `void`

**`Description`**

设置是否在屏幕中心开火

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type      | Description               |
| :------ | :-------- | :------------------------ |
| `value` | `boolean` | usage: 是否在屏幕中心开火 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11564

---

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

Gameplay/index.d.ts:11640

• `set` **isFullAutoMode**(`isInFullAuto`): `void`

**`Description`**

设置当前状态下 isInFullAuto 的值

**`Effect`**

客户端调用自动广播

**`Precautions`**

一般用于处理全自动开火模式下的自动换弹

#### Parameters

| Name           | Type      | Description                         |
| :------------- | :-------- | :---------------------------------- |
| `isInFullAuto` | `boolean` | usage: 当前状态下 isInFullAuto 的值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11647

---

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

Gameplay/index.d.ts:11583

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void`

**`Description`**

设置屏幕中心开火时的偏移

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name     | Type                            | Description                 |
| :------- | :------------------------------ | :-------------------------- |
| `offset` | [`Vector`](Type.Type.Vector.md) | usage: 屏幕中心开火时的偏移 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11577

## Methods

### hadAnimationGuid

▸ **hadAnimationGuid**(): `boolean`

**`Description`**

是否有动画 GUID

**`Effect`**

调用端生效

#### Returns

`boolean`

是否有动画 GUID

#### Defined in

Gameplay/index.d.ts:11545

---

### isFiring

▸ **isFiring**(): `boolean`

**`Description`**

获取当前状态下 bFiring 的值，一般用于处理全自动开火模式下的自动换弹

**`Effect`**

调用端生效

#### Returns

`boolean`

当前弹夹中子弹数量

#### Defined in

Gameplay/index.d.ts:11557
