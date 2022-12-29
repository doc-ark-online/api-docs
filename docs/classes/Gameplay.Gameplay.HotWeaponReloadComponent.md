[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponReloadComponent

# HotWeaponReloadComponent <Badge type="tip" text="Class" />

**`Description`**

热武器换弹组件

## Table of contents

| Properties                                                                                                                                                                                                                              |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[onEndReloadClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#onendreloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> [客户端] 结束换弹时执行绑定函数     |
| **[onEndReloadServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#onendreloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> [服务端] 结束换弹时执行绑定函数     |
| **[onStartReloadClient](Gameplay.Gameplay.HotWeaponReloadComponent.md#onstartreloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> [客户端] 开始换弹时执行绑定函数 |
| **[onStartReloadServer](Gameplay.Gameplay.HotWeaponReloadComponent.md#onstartreloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> [服务端] 开始换弹时执行绑定函数 |

| Accessors                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------- |
| **[animationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#animationguid)**(): `string` <br> 获取绑定的动画 GUID |
| **[reloadDuration](Gameplay.Gameplay.HotWeaponReloadComponent.md#reloadduration)**(): `number` <br> 获取换弹时间      |

| Methods                                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------- |
| **[hadAnimationGuid](Gameplay.Gameplay.HotWeaponReloadComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画 GUID |

## Properties

### onEndReloadClient

• **onEndReloadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 结束换弹时执行绑定函数

---

### onEndReloadServer

• **onEndReloadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 结束换弹时执行绑定函数

---

### onStartReloadClient

• **onStartReloadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[客户端] 开始换弹时执行绑定函数

---

### onStartReloadServer

• **onStartReloadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

[服务端] 开始换弹时执行绑定函数

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

• `set` **animationGuid**(`guid`): `void`

**`Description`**

设置动画 GUID

**`Effect`**

客户端调用自动广播

#### Parameters

| Name   | Type     | Description               |
| :----- | :------- | :------------------------ |
| `guid` | `string` | 需要设置的蒙太奇动画 guid |

#### Returns

`void`

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

• `set` **reloadDuration**(`time`): `void`

**`Description`**

设置换弹时间

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `time` | `number` | 新换弹时间  |

#### Returns

`void`

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
