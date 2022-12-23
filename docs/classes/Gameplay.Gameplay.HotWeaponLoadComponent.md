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

- [delegateEndLoadOnClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#delegateendloadonclient)
- [delegateEndLoadOnServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#delegateendloadonserver)
- [delegateStartLoadOnClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#delegatestartloadonclient)
- [delegateStartLoadOnServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#delegatestartloadonserver)

### Accessors

- [isEnabledLoadAfterFire](Gameplay.Gameplay.HotWeaponLoadComponent.md#isenabledloadafterfire)
- [loadDuration](Gameplay.Gameplay.HotWeaponLoadComponent.md#loadduration)

### Methods

- [getAnimationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#getanimationguid)
- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#hadanimationguid)
- [setAnimationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#setanimationguid)

## Constructors

### constructor

• **new HotWeaponLoadComponent**()

## Properties

### delegateEndLoadOnClient

• **delegateEndLoadOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端上膛结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11986

___

### delegateEndLoadOnServer

• **delegateEndLoadOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器上膛结束时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11982

___

### delegateStartLoadOnClient

• **delegateStartLoadOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始上膛时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11978

___

### delegateStartLoadOnServer

• **delegateStartLoadOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始上膛时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11974

## Accessors

### isEnabledLoadAfterFire

• `get` **isEnabledLoadAfterFire**(): `boolean`

**`Description`**

获取是否开启开火后自动上膛的功能

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启开火后自动上膛的功能

#### Defined in

Gameplay/index.d.ts:12017

• `set` **isEnabledLoadAfterFire**(`enable`): `void`

**`Description`**

设置是否开启开火后自动上膛的功能

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | usage: 是否开启开火后自动上膛的功能 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12011

___

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

Gameplay/index.d.ts:12029

• `set` **loadDuration**(`time`): `void`

**`Description`**

设置上膛时间

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | usage: 上膛时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12023

## Methods

### getAnimationGuid

▸ **getAnimationGuid**(): `string`

**`Description`**

获取绑定的动画GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画GUID

#### Defined in

Gameplay/index.d.ts:11998

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

Gameplay/index.d.ts:12004

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

Gameplay/index.d.ts:11992
