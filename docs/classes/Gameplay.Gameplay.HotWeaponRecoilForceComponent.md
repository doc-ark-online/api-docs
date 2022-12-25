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

- [onStartRecoilForceClient](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceclient)
- [onStartRecoilForceServer](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceserver)

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

### onStartRecoilForceClient

• **onStartRecoilForceClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端后坐力开始广播

#### Defined in

Gameplay/index.d.ts:11732

---

### onStartRecoilForceServer

• **onStartRecoilForceServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器后坐力开始广播

#### Defined in

Gameplay/index.d.ts:11728

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

Gameplay/index.d.ts:11808

• `set` **maxHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `value` | `number` | usage: 相机水平抖动最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11802

---

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

Gameplay/index.d.ts:11756

• `set` **maxHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最大值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | usage: 水平偏移最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11750

---

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

Gameplay/index.d.ts:11834

• `set` **maxVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `value` | `number` | usage: 新相机垂直抖动最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11828

---

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

Gameplay/index.d.ts:11782

• `set` **maxVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | usage: 垂直偏移最大值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11776

---

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

Gameplay/index.d.ts:11795

• `set` **minHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `value` | `number` | usage: 新相机水平抖动最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11789

---

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

Gameplay/index.d.ts:11744

• `set` **minHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最小值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | usage: 水平偏移最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11738

---

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

Gameplay/index.d.ts:11821

• `set` **minVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `value` | `number` | usage: 新相机垂直抖动最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11815

---

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

Gameplay/index.d.ts:11769

• `set` **minVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | usage: 垂直偏移最小值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11763

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

Gameplay/index.d.ts:11864

---

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

Gameplay/index.d.ts:11852

---

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

Gameplay/index.d.ts:11840

---

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

Gameplay/index.d.ts:11858

---

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

Gameplay/index.d.ts:11846
