[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HairPart

# IHumanoidV2HairPart <Badge type="tip" text="Interface" />

**`Description`**

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2HairPart`**

## Implemented by

- [`HumanoidV2BehindHairPart`](../classes/Gameplay.Gameplay.HumanoidV2BehindHairPart.md)
- [`HumanoidV2FrontHairPart`](../classes/Gameplay.Gameplay.HumanoidV2FrontHairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.Gameplay.IHumanoidV2HairPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#setcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)**([`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.Gameplay.IHumanoidV2HairPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|

## Methods

### getColor

▸ **getColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

___

### getGradientColor

▸ **getGradientColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发渐变染色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

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

▸ **getHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发高光颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

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

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

___

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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
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
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色 |
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

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
