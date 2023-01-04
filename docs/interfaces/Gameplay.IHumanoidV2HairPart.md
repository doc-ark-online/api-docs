[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HairPart

# IHumanoidV2HairPart <Badge type="tip" text="Interface" />

**`Description`**

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2HairPart`**

## Implemented by

- [`HumanoidV2BehindHairPart`](../classes/Gameplay.HumanoidV2BehindHairPart.md)
- [`HumanoidV2FrontHairPart`](../classes/Gameplay.HumanoidV2FrontHairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getColor](Gameplay.IHumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.IHumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.IHumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.IHumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[setColor](Gameplay.IHumanoidV2HairPart.md#setcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.IHumanoidV2HairPart.md#setgradientcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.IHumanoidV2HairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.IHumanoidV2HairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状|

## Methods

### getColor

▸ **getColor**(): [`LinearColor`](../classes/Type.LinearColor.md)

**`Description`**

获取头发颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientColor

▸ **getGradientColor**(): [`LinearColor`](../classes/Type.LinearColor.md)

**`Description`**

获取头发渐变染色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientIntensity

▸ **getGradientIntensity**(): `number`

**`Description`**

获取头发渐变区域

**`Effect`**

客户端生效

#### Returns

`number`

强度

___

### getHighlightColor

▸ **getHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md)

**`Description`**

获取头发高光颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHighlightMask

▸ **getHighlightMask**(): `string`

**`Description`**

获取头发高光形状

**`Effect`**

客户端生效

#### Returns

`string`

guid


### setColor

▸ **setColor**(`color`, `sync`): `void`

**`Description`**

设置头发颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setGradientColor

▸ **setGradientColor**(`color`, `sync`): `void`

**`Description`**

设置头发渐变染色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setGradientIntensity

▸ **setGradientIntensity**(`intensity`, `sync`): `void`

**`Description`**

设置头发渐变区域

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intensity` | `number` | 强度 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setHighlightColor

▸ **setHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置头发高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

___

### setHighlightMask

▸ **setHighlightMask**(`guid`, `sync`): `void`

**`Description`**

设置头发高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
