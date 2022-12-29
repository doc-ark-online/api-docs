[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" />

**`Description`**

热武器上膛组件

## Table of contents

| Properties |
| :-----|
| **[onEndLoadClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#onendloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端上膛结束时执行绑定函数|
| **[onEndLoadServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#onendloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器上膛结束时执行绑定函数|
| **[onStartLoadClient](Gameplay.Gameplay.HotWeaponLoadComponent.md#onstartloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始上膛时执行绑定函数|
| **[onStartLoadServer](Gameplay.Gameplay.HotWeaponLoadComponent.md#onstartloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始上膛时执行绑定函数|

| Accessors |
| :-----|
| **[animationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#animationguid)**(): `string` <br> 获取绑定的动画GUID|
| **[loadAfterFireEnable](Gameplay.Gameplay.HotWeaponLoadComponent.md#loadafterfireenable)**(): `boolean` <br> 获取是否开启开火后自动上膛的功能|
| **[loadDuration](Gameplay.Gameplay.HotWeaponLoadComponent.md#loadduration)**(): `number` <br> 获取上膛时间|

| Methods |
| :-----|
| **[hadAnimationGuid](Gameplay.Gameplay.HotWeaponLoadComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画GUID|

## Properties

### onEndLoadClient

• **onEndLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端上膛结束时执行绑定函数

___

### onEndLoadServer

• **onEndLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器上膛结束时执行绑定函数

___

### onStartLoadClient

• **onStartLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始上膛时执行绑定函数

___

### onStartLoadServer

• **onStartLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始上膛时执行绑定函数

## Accessors

### animationGuid

• `get` **animationGuid**(): `string`

**`Description`**

获取绑定的动画GUID

**`Effect`**

调用端生效

#### Returns

`string`

绑定的动画GUID

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

### loadAfterFireEnable

• `get` **loadAfterFireEnable**(): `boolean`

**`Description`**

获取是否开启开火后自动上膛的功能

**`Effect`**

调用端生效

#### Returns

`boolean`

是否开启开火后自动上膛的功能

• `set` **loadAfterFireEnable**(`enable`): `void`

**`Description`**

设置是否开启开火后自动上膛的功能

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启开火后自动上膛的功能 |

#### Returns

`void`

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

• `set` **loadDuration**(`time`): `void`

**`Description`**

设置上膛时间

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  上膛时间 |

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
