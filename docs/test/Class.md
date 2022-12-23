[test](../README.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent

**`Description`**

热武器 - 后坐力组件

**`Network Status`**

usage: 双端

## Constructors

• **new HotWeaponRecoilForceComponent**()

## Properties

### delegateStartRecoilForceOnClient

• **delegateStartRecoilForceOnClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端后坐力开始广播

___

### delegateStartRecoilForceOnServer

• **delegateStartRecoilForceOnServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage: 相机水平抖动最大值 |

#### Returns

`void`

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


