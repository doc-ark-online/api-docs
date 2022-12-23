[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponReloadComponent

# Class: HotWeaponReloadComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponReloadComponent

**`Description`**

热武器换弹组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponReloadComponent.md#constructor)

### Properties

- [delegateEndReloadOnClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#delegateendreloadonclient)
- [delegateEndReloadOnServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#delegateendreloadonserver)
- [delegateStartReloadOnClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#delegatestartreloadonclient)
- [delegateStartReloadOnServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#delegatestartreloadonserver)

### Accessors

- [reloadDuration](Gameplay.Gameplay.HotWeaponReloadComponent.md#reloadduration)

### Methods

- [getAnimationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#getanimationguid)
- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#hadanimationguid)
- [setAnimationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#setanimationguid)

## Constructors

### constructor

• **new HotWeaponReloadComponent**()

## Properties

### delegateEndReloadOnClient

• **delegateEndReloadOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 结束换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:12207

___

### delegateEndReloadOnServer

• **delegateEndReloadOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 结束换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:12203

___

### delegateStartReloadOnClient

• **delegateStartReloadOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 开始换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:12199

___

### delegateStartReloadOnServer

• **delegateStartReloadOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 开始换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:12195

## Accessors

### reloadDuration

• `get` **reloadDuration**(): `number`

**`Description`**

获取换弹时间

**`Effect`**

调用端生效

#### Returns

`number`

是换弹时间

#### Defined in

Gameplay/index.d.ts:12238

• `set` **reloadDuration**(`time`): `void`

**`Description`**

设置换弹时间

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | usage: 新换弹时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12232

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

Gameplay/index.d.ts:12219

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

Gameplay/index.d.ts:12225

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

Gameplay/index.d.ts:12213
