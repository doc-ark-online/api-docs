[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent <Badge type="tip" text="Class" />

**`Description`**

热武器 - 后坐力组件

## Table of contents

| Properties                                                                                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[onStartRecoilForceClient](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端后坐力开始广播 |
| **[onStartRecoilForceServer](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器后坐力开始广播 |

| Accessors                                                                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------- |
| **[maxHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaljitter)**(): `number` <br> 获取相机水平抖动最大值 |
| **[maxHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaloffset)**(): `number` <br> 获取水平偏移最大值     |
| **[maxVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxverticaljitter)**(): `number` <br> 获取相机垂直抖动最大值     |
| **[maxVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#maxverticaloffset)**(): `number` <br> 获取垂直偏移最大值         |
| **[minHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaljitter)**(): `number` <br> 获取相机水平抖动最小值 |
| **[minHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaloffset)**(): `number` <br> 获取水平偏移最小值     |
| **[minVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minverticaljitter)**(): `number` <br> 获取相机垂直抖动最小值     |
| **[minVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#minverticaloffset)**(): `number` <br> 获取垂直偏移最小值         |

| Methods                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| **[getDeepJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getdeepjitter)**(): `number` <br> 获取深度抖动值             |
| **[getHorizontalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaljitter)**(): `number` <br> 获取水平抖动值 |
| **[getHorizontalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaloffset)**(): `number` <br> 获取水平偏移值 |
| **[getVerticalJitter](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getverticaljitter)**(): `number` <br> 获取垂直抖动值     |
| **[getVerticalOffset](Gameplay.Gameplay.HotWeaponRecoilForceComponent.md#getverticaloffset)**(): `number` <br> 获取垂直偏移值     |

## Properties

### onStartRecoilForceClient

• **onStartRecoilForceClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端后坐力开始广播

---

### onStartRecoilForceServer

• **onStartRecoilForceServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器后坐力开始广播

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

• `set` **maxHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description        |
| :------ | :------- | :----------------- |
| `value` | `number` | 相机水平抖动最大值 |

#### Returns

`void`

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

• `set` **maxHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最大值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `value` | `number` | 水平偏移最大值 |

#### Returns

`void`

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

• `set` **maxVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description          |
| :------ | :------- | :------------------- |
| `value` | `number` | 新相机垂直抖动最大值 |

#### Returns

`void`

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

• `set` **maxVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最大值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `value` | `number` | 垂直偏移最大值 |

#### Returns

`void`

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

• `set` **minHorizontalJitter**(`value`): `void`

**`Description`**

设置相机水平抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description          |
| :------ | :------- | :------------------- |
| `value` | `number` | 新相机水平抖动最小值 |

#### Returns

`void`

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

• `set` **minHorizontalOffset**(`value`): `void`

**`Description`**

设置水平偏移最小值

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `value` | `number` | 水平偏移最小值 |

#### Returns

`void`

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

• `set` **minVerticalJitter**(`value`): `void`

**`Description`**

设置相机垂直抖动最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description          |
| :------ | :------- | :------------------- |
| `value` | `number` | 新相机垂直抖动最小值 |

#### Returns

`void`

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

• `set` **minVerticalOffset**(`value`): `void`

**`Description`**

设置垂直偏移最小值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `value` | `number` | 垂直偏移最小值 |

#### Returns

`void`

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
