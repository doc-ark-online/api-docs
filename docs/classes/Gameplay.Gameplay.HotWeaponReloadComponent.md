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

- [onEndReloadClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#onendreloadclient)
- [onEndReloadServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#onendreloadserver)
- [onStartReloadClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#onstartreloadclient)
- [onStartReloadServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#onstartreloadserver)

### Accessors

- [animationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#animationguid)
- [reloadDuration](Gameplay.Gameplay.HotWeaponReloadComponent.md#reloadduration)

### Methods

- [hadAnimationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#hadanimationguid)

## Constructors

### constructor

• **new HotWeaponReloadComponent**()

## Properties

### onEndReloadClient

• **onEndReloadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 结束换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11889

---

### onEndReloadServer

• **onEndReloadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 结束换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11885

---

### onStartReloadClient

• **onStartReloadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 开始换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11881

---

### onStartReloadServer

• **onStartReloadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 开始换弹时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11877

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

Gameplay/index.d.ts:11901

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

Gameplay/index.d.ts:11895

---

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

Gameplay/index.d.ts:11920

• `set` **reloadDuration**(`time`): `void`

**`Description`**

设置换弹时间

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `time` | `number` | usage: 新换弹时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11914

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

Gameplay/index.d.ts:11907
