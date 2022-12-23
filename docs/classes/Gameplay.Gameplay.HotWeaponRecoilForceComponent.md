[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponRecoilForceComponent

# Class: HotWeaponRecoilForceComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponRecoilForceComponent

**`Description`**

热武器 - 后坐力组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#constructor)

### Properties

- [delegateStartRecoilForceOnClient](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#delegatestartrecoilforceonclient)
- [delegateStartRecoilForceOnServer](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#delegatestartrecoilforceonserver)

### Accessors

- [maxHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaljitter)
- [maxHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaloffset)
- [maxVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxverticaljitter)
- [maxVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxverticaloffset)
- [minHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaljitter)
- [minHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaloffset)
- [minVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minverticaljitter)
- [minVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minverticaloffset)

### Methods

- [getDeepJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getdeepjitter)
- [getHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaljitter)
- [getHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaloffset)
- [getVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getverticaljitter)
- [getVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getverticaloffset)

## Constructors

### constructor

• **new HotWeaponRecoilForceComponent**()

## Properties

### delegateStartRecoilForceOnClient

• **delegateStartRecoilForceOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端后坐力开始广播

#### Defined in

Gameplay/index.d.ts:12048

___

### delegateStartRecoilForceOnServer

• **delegateStartRecoilForceOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器后坐力开始广播

#### Defined in

Gameplay/index.d.ts:12042

## Accessors

### maxHorizontalJitter

• `get` **maxHorizontalJitter**(): `number`

**`Description`**

获取相机水平抖动最大值

**`Effect`**

调用端生效

#### Returns

`number`

相机水平抖动最大值

#### Defined in

Gameplay/index.d.ts:12126

• `set` **maxHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 相机水平抖动最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12120

___

### maxHorizontalOffset

• `get` **maxHorizontalOffset**(): `number`

**`Description`**

获取水平偏移最大值

**`Effect`**

调用端生效

#### Returns

`number`

水平偏移最大值

#### Defined in

Gameplay/index.d.ts:12074

• `set` **maxHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最大值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 水平偏移最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12068

___

### maxVerticalJitter

• `get` **maxVerticalJitter**(): `number`

**`Description`**

获取相机垂直抖动最大值

**`Effect`**

调用端生效

#### Returns

`number`

相机垂直抖动最大值

#### Defined in

Gameplay/index.d.ts:12152

• `set` **maxVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 新相机垂直抖动最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12146

___

### maxVerticalOffset

• `get` **maxVerticalOffset**(): `number`

**`Description`**

获取垂直偏移最大值

**`Effect`**

调用端生效

#### Returns

`number`

垂直偏移最大值

#### Defined in

Gameplay/index.d.ts:12100

• `set` **maxVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 垂直偏移最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12094

___

### minHorizontalJitter

• `get` **minHorizontalJitter**(): `number`

**`Description`**

获取相机水平抖动最小值

**`Effect`**

调用端生效

#### Returns

`number`

相机水平抖动最小值

#### Defined in

Gameplay/index.d.ts:12113

• `set` **minHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 新相机水平抖动最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12107

___

### minHorizontalOffset

• `get` **minHorizontalOffset**(): `number`

**`Description`**

获取水平偏移最小值

**`Effect`**

调用端生效

#### Returns

`number`

水平偏移最小值

#### Defined in

Gameplay/index.d.ts:12062

• `set` **minHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最小值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 水平偏移最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12056

___

### minVerticalJitter

• `get` **minVerticalJitter**(): `number`

**`Description`**

获取相机垂直抖动最小值

**`Effect`**

调用端生效

#### Returns

`number`

相机垂直抖动最小值

#### Defined in

Gameplay/index.d.ts:12139

• `set` **minVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 新相机垂直抖动最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12133

___

### minVerticalOffset

• `get` **minVerticalOffset**(): `number`

**`Description`**

获取垂直偏移最小值

**`Effect`**

调用端生效

#### Returns

`number`

垂直偏移最小值

#### Defined in

Gameplay/index.d.ts:12087

• `set` **minVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 垂直偏移最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:12081

## Methods

### getDeepJitter

▸ **getDeepJitter**(): `number`

**`Description`**

获取深度抖动值

**`Effect`**

调用端生效

#### Returns

`number`

深度抖动值

#### Defined in

Gameplay/index.d.ts:12182

___

### getHorizontalJitter

▸ **getHorizontalJitter**(): `number`

**`Description`**

获取水平抖动值

**`Effect`**

调用端生效

#### Returns

`number`

水平抖动值

#### Defined in

Gameplay/index.d.ts:12170

___

### getHorizontalOffset

▸ **getHorizontalOffset**(): `number`

**`Description`**

获取水平偏移值

**`Effect`**

调用端生效

#### Returns

`number`

水平偏移值

#### Defined in

Gameplay/index.d.ts:12158

___

### getVerticalJitter

▸ **getVerticalJitter**(): `number`

**`Description`**

获取垂直抖动值

**`Effect`**

调用端生效

#### Returns

`number`

垂直抖动值

#### Defined in

Gameplay/index.d.ts:12176

___

### getVerticalOffset

▸ **getVerticalOffset**(): `number`

**`Description`**

获取垂直偏移值

**`Effect`**

调用端生效

#### Returns

`number`

垂直偏移值

#### Defined in

Gameplay/index.d.ts:12164
