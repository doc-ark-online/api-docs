[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2ClothPart

# IHumanoidV2ClothPart <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2ClothPart" />

**`Description`**

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2ClothPart`**

## Implemented by

- [`HumanoidV2GlovesPart`](../classes/Gameplay.HumanoidV2GlovesPart.md)
- [`HumanoidV2LowerClothPart`](../classes/Gameplay.HumanoidV2LowerClothPart.md)
- [`HumanoidV2ShoePart`](../classes/Gameplay.HumanoidV2ShoePart.md)
- [`HumanoidV2UpperClothPart`](../classes/Gameplay.HumanoidV2UpperClothPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.IHumanoidV2ClothPart.md#getareacount)**(): `number` <br> 获取衣服区域数量|
| **[getColor](Gameplay.IHumanoidV2ClothPart.md#getcolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取颜色|
| **[getDesignAngle](Gameplay.IHumanoidV2ClothPart.md#getdesignangle)**(`number`): `number` <br> 获取图案方向|
| **[getDesignColor](Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取图案颜色|
| **[getDesignTexture](Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)**(`number`): `string` <br> 获取衣服图案|
| **[getPatternAngle](Gameplay.IHumanoidV2ClothPart.md#getpatternangle)**(`number`): `number` <br> 获取花纹旋转|
| **[getPatternColor](Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取花纹颜色|
| **[getPatternHeight](Gameplay.IHumanoidV2ClothPart.md#getpatternheight)**(`number`): `number` <br> 设置花纹纵向拉伸|
| **[getPatternIntensity](Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)**(`number`): `number` <br> 获取花纹显示程度|
| **[getPatternWidth](Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)**(`number`): `number` <br> 获取花纹横向拉伸|
| **[getTexture](Gameplay.IHumanoidV2ClothPart.md#gettexture)**(`number`): `string` <br> 获取花纹|
| **[setColor](Gameplay.IHumanoidV2ClothPart.md#setcolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置颜色|
| **[setDesignAngle](Gameplay.IHumanoidV2ClothPart.md#setdesignangle)**(`number`, `number`, `boolean`): `void` <br> 设置图案方向|
| **[setDesignColor](Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置图案颜色|
| **[setDesignTexture](Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)**(`number`, `string`, `boolean`): `void` <br> 设置衣服图案|
| **[setPatternAngle](Gameplay.IHumanoidV2ClothPart.md#setpatternangle)**(`number`, `number`, `boolean`): `void` <br> 设置花纹旋转|
| **[setPatternColor](Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置花纹颜色|
| **[setPatternHeight](Gameplay.IHumanoidV2ClothPart.md#setpatternheight)**(`number`, `number`, `boolean`): `void` <br> 设置花纹纵向拉伸|
| **[setPatternIntensity](Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)**(`number`, `number`, `boolean`): `void` <br> 设置花纹显示程度|
| **[setPatternWidth](Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)**(`number`, `number`, `boolean`): `void` <br> 设置花纹横向拉伸|
| **[setTexture](Gameplay.IHumanoidV2ClothPart.md#settexture)**(`number`, `string`, `boolean`): `void` <br> 设置花纹|


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|
:::


## Methods

### getAreaCount <Score text="getAreaCount" /> 

▸ **getAreaCount**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取衣服区域数量

客户端生效

#### Returns

`number`

区域数量

___

### getColor <Score text="getColor" /> 

▸ **getColor**(`areaIndex`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIndex` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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

___

### getDesignColor <Score text="getDesignColor" /> 

▸ **getDesignColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取图案颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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

___

### getPatternColor <Score text="getPatternColor" /> 

▸ **getPatternColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取花纹颜色

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


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

