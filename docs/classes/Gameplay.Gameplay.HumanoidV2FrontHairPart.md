[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2FrontHairPart

# HumanoidV2FrontHairPart <Badge type="tip" text="Class" />

**`Description`**

人形对象V2前发部位接口

## Implements

- [`IHumanoidV2HairPart`](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getgradientcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getmesh)**(): `string` <br> 获取前发部位模型|
| **[setColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setgradientcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#sethighlightcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置前发部位模型|

## Methods

### getColor

▸ **getColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getcolor)

___

### getGradientColor

▸ **getGradientColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发渐变染色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getGradientColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientcolor)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

___

### getHighlightColor

▸ **getHighlightColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发高光颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取前发部位模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getmesh)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setcolor)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientcolor)

___

### setGradientIntensity

▸ **setGradientIntensity**(`value`, `sync`): `void`

**`Description`**

设置头发渐变区域

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientintensity)

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
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightmask)

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置前发部位模型

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setmesh)
