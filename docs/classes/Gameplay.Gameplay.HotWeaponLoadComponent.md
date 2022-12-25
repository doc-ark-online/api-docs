[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponLoadComponent

# Class: HotWeaponLoadComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponLoadComponent

**`Description`**

热武器上膛组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponLoadComponent.md#constructor)

### Properties

- [onEndLoadClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#onendloadclient)
- [onEndLoadServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#onendloadserver)
- [onStartLoadClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#onstartloadclient)
- [onStartLoadServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#onstartloadserver)

### Accessors

- [animationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#animationguid)
- [loadAfterFireEnable](Gameplay.Gameplay.HotWeaponLoadComponent.md#loadafterfireenable)
- [loadDuration](Gameplay.Gameplay.HotWeaponLoadComponent.md#loadduration)

### Methods

- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#hadanimationguid)

## Constructors

### constructor

• **new HotWeaponLoadComponent**()

## Properties

### onEndLoadClient

• **onEndLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端上膛结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11672

---

### onEndLoadServer

• **onEndLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器上膛结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11668

---

### onStartLoadClient

• **onStartLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始上膛时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11664

---

### onStartLoadServer

• **onStartLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始上膛时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11660

## Accessors

### animationGuid

• `get` **animationGuid**(): `string`

**`Description`**

获取绑定的动画 GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画 GUID

#### Defined in

Gameplay/index.d.ts:11684

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

Gameplay/index.d.ts:11678

---

### loadAfterFireEnable

• `get` **loadAfterFireEnable**(): `boolean`

**`Description`**

获取是否开启开火后自动上膛的功能

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启开火后自动上膛的功能

#### Defined in

Gameplay/index.d.ts:11703

• `set` **loadAfterFireEnable**(`enable`): `void`

**`Description`**

设置是否开启开火后自动上膛的功能

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name     | Type      | Description                         |
| :------- | :-------- | :---------------------------------- |
| `enable` | `boolean` | usage: 是否开启开火后自动上膛的功能 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11697

---

### loadDuration

• `get` **loadDuration**(): `number`

**`Description`**

获取上膛时间

**`Effect`**

调用端生效

#### Returns

`number`

上膛时间

#### Defined in

Gameplay/index.d.ts:11715

• `set` **loadDuration**(`time`): `void`

**`Description`**

设置上膛时间

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `time` | `number` | usage: 上膛时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11709

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

Gameplay/index.d.ts:11690
