[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2FrontHairPart

# HumanoidV2FrontHairPart <Badge type="tip" text="Class" /> 

**`Description`**

人形对象V2前发部位接口

## Implements

- [`IHumanoidV2HairPart`](../interfaces/Gameplay.IHumanoidV2HairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getColor](Gameplay.HumanoidV2FrontHairPart.md#getcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.HumanoidV2FrontHairPart.md#getgradientcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.HumanoidV2FrontHairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.HumanoidV2FrontHairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.HumanoidV2FrontHairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.HumanoidV2FrontHairPart.md#getmesh)**(): `string` <br> 获取前发部位模型|
| **[setColor](Gameplay.HumanoidV2FrontHairPart.md#setcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.HumanoidV2FrontHairPart.md#setgradientcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.HumanoidV2FrontHairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.HumanoidV2FrontHairPart.md#sethighlightcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.HumanoidV2FrontHairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.HumanoidV2FrontHairPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置前发部位模型|

## Methods

### getColor  

▸ **getColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发颜色

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getcolor)

___

### getGradientColor  

▸ **getGradientColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发渐变染色

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientcolor)

___

### getGradientIntensity  

▸ **getGradientIntensity**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取头发渐变区域

客户端生效

#### Returns

`number`

强度

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

___

### getHighlightColor  

▸ **getHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取头发高光颜色

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)

___

### getHighlightMask  

▸ **getHighlightMask**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取头发高光形状

客户端生效

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

___

### getMesh  

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取前发部位模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2HairPart.md#getmesh)

___

### setColor  

▸ **setColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setcolor)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setGradientColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setgradientcolor)

___

### setGradientIntensity  

▸ **setGradientIntensity**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置头发渐变区域

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setGradientIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#setgradientintensity)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHighlightColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHighlightMask](../interfaces/Gameplay.IHumanoidV2HairPart.md#sethighlightmask)

___

### setMesh  

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置前发部位模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2HairPart.md#setmesh)
