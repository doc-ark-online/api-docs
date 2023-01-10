[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2GlovesPart

# HumanoidV2GlovesPart <Badge type="tip" text="Class" /> <Score text="HumanoidV2GlovesPart" />

**`Description`**

人形对象V2手套部位接口

## Implements

- [`IHumanoidV2ClothPart`](../interfaces/Gameplay.IHumanoidV2ClothPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.HumanoidV2GlovesPart.md#getareacount)**(): `number` <br> 获取衣服区域数量|
| **[getColor](Gameplay.HumanoidV2GlovesPart.md#getcolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取颜色|
| **[getDesignAngle](Gameplay.HumanoidV2GlovesPart.md#getdesignangle)**(`number`): `number` <br> 获取图案方向|
| **[getDesignColor](Gameplay.HumanoidV2GlovesPart.md#getdesigncolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取图案颜色|
| **[getDesignTexture](Gameplay.HumanoidV2GlovesPart.md#getdesigntexture)**(`number`): `string` <br> 获取衣服图案|
| **[getMesh](Gameplay.HumanoidV2GlovesPart.md#getmesh)**(): `string` <br> 获取手套模型|
| **[getPatternAngle](Gameplay.HumanoidV2GlovesPart.md#getpatternangle)**(`number`): `number` <br> 获取花纹旋转|
| **[getPatternColor](Gameplay.HumanoidV2GlovesPart.md#getpatterncolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取花纹颜色|
| **[getPatternHeight](Gameplay.HumanoidV2GlovesPart.md#getpatternheight)**(`number`): `number` <br> 设置花纹纵向拉伸|
| **[getPatternIntensity](Gameplay.HumanoidV2GlovesPart.md#getpatternintensity)**(`number`): `number` <br> 获取花纹显示程度|
| **[getPatternWidth](Gameplay.HumanoidV2GlovesPart.md#getpatternwidth)**(`number`): `number` <br> 获取花纹横向拉伸|
| **[getTexture](Gameplay.HumanoidV2GlovesPart.md#gettexture)**(`number`): `string` <br> 获取花纹|
| **[setColor](Gameplay.HumanoidV2GlovesPart.md#setcolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置颜色|
| **[setDesignAngle](Gameplay.HumanoidV2GlovesPart.md#setdesignangle)**(`number`, `number`, `boolean`): `void` <br> 设置图案方向|
| **[setDesignColor](Gameplay.HumanoidV2GlovesPart.md#setdesigncolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置图案颜色|
| **[setDesignTexture](Gameplay.HumanoidV2GlovesPart.md#setdesigntexture)**(`number`, `string`, `boolean`): `void` <br> 设置衣服图案|
| **[setMesh](Gameplay.HumanoidV2GlovesPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置手套模型|
| **[setPatternAngle](Gameplay.HumanoidV2GlovesPart.md#setpatternangle)**(`number`, `number`, `boolean`): `void` <br> 设置花纹旋转|
| **[setPatternColor](Gameplay.HumanoidV2GlovesPart.md#setpatterncolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置花纹颜色|
| **[setPatternHeight](Gameplay.HumanoidV2GlovesPart.md#setpatternheight)**(`number`, `number`, `boolean`): `void` <br> 设置花纹纵向拉伸|
| **[setPatternIntensity](Gameplay.HumanoidV2GlovesPart.md#setpatternintensity)**(`number`, `number`, `boolean`): `void` <br> 设置花纹显示程度|
| **[setPatternWidth](Gameplay.HumanoidV2GlovesPart.md#setpatternwidth)**(`number`, `number`, `boolean`): `void` <br> 设置花纹横向拉伸|
| **[setTexture](Gameplay.HumanoidV2GlovesPart.md#settexture)**(`number`, `string`, `boolean`): `void` <br> 设置花纹|

## Methods

### getAreaCount <Score text="getAreaCount" /> 

▸ **getAreaCount**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取衣服区域数量

客户端生效

#### Returns

`number`

区域数量

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getAreaCount](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getareacount)

___

### getColor <Score text="getColor" /> 

▸ **getColor**(`areaIndex`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIndex` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getcolor)

___

### getDesignAngle <Score text="getDesignAngle" /> 

▸ **getDesignAngle**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取图案方向

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

方向值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesignangle)

___

### getDesignColor <Score text="getDesignColor" /> 

▸ **getDesignColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取图案颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)

___

### getDesignTexture <Score text="getDesignTexture" /> 

▸ **getDesignTexture**(`index`): `string` <Badge type="tip" text="other" />

**`Description`**

获取衣服图案

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)

___

### getMesh <Score text="getMesh" /> 

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取手套模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getmesh)

___

### getPatternAngle <Score text="getPatternAngle" /> 

▸ **getPatternAngle**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取花纹旋转

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

旋转值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternangle)

___

### getPatternColor <Score text="getPatternColor" /> 

▸ **getPatternColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取花纹颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)

___

### getPatternHeight <Score text="getPatternHeight" /> 

▸ **getPatternHeight**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

设置花纹纵向拉伸

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternHeight](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternheight)

___

### getPatternIntensity <Score text="getPatternIntensity" /> 

▸ **getPatternIntensity**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取花纹显示程度

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

显示程度

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternIntensity](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)

___

### getPatternWidth <Score text="getPatternWidth" /> 

▸ **getPatternWidth**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取花纹横向拉伸

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternWidth](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)

___

### getTexture <Score text="getTexture" /> 

▸ **getTexture**(`index`): `string` <Badge type="tip" text="other" />

**`Description`**

获取花纹

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

GUID

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#gettexture)

___

### setColor <Score text="setColor" /> 

▸ **setColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setcolor)

___

### setDesignAngle <Score text="setDesignAngle" /> 

▸ **setDesignAngle**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置图案方向

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 {Min:0,Max:360} |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesignangle)

___

### setDesignColor <Score text="setDesignColor" /> 

▸ **setDesignColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置图案颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)

___

### setDesignTexture <Score text="setDesignTexture" /> 

▸ **setDesignTexture**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置衣服图案

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)

___

### setMesh <Score text="setMesh" /> 

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置手套模型

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

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setmesh)

___

### setPatternAngle <Score text="setPatternAngle" /> 

▸ **setPatternAngle**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 {Min:0,Max:360} |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternangle)

___

### setPatternColor <Score text="setPatternColor" /> 

▸ **setPatternColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)

___

### setPatternHeight <Score text="setPatternHeight" /> 

▸ **setPatternHeight**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹纵向拉伸

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 {Min:0.01,Max:100} |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternHeight](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternheight)

___

### setPatternIntensity <Score text="setPatternIntensity" /> 

▸ **setPatternIntensity**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹显示程度

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 强度 {Min:0,Max:1} |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternIntensity](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)

___

### setPatternWidth <Score text="setPatternWidth" /> 

▸ **setPatternWidth**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹横向拉伸

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 {Min:0.01,Max:100} |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternWidth](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)

___

### setTexture <Score text="setTexture" /> 

▸ **setTexture**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置花纹

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#settexture)
