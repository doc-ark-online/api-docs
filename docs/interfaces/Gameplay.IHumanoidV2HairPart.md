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


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|
:::


## Methods

### getColor  

▸ **getColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发颜色

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientColor  

▸ **getGradientColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发渐变染色

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientIntensity  

▸ **getGradientIntensity**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取头发渐变区域

客户端生效

#### Returns

`number`

强度

___

### getHighlightColor  

▸ **getHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发高光颜色

客户端生效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHighlightMask  

▸ **getHighlightMask**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取头发高光形状

客户端生效

#### Returns

`string`

GUID


### setColor  

▸ **setColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setGradientColor  

▸ **setGradientColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发渐变染色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setGradientIntensity  

▸ **setGradientIntensity**(`intensity`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发渐变区域

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intensity` | `number` | 强度 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setHighlightColor  

▸ **setHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发高光颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


___

### setHighlightMask  

▸ **setHighlightMask**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发高光形状

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |

