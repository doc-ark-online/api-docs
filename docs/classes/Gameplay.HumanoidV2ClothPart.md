[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2ClothPart

# HumanoidV2ClothPart <Badge type="tip" text="Class" /> <Score text="HumanoidV2ClothPart" />

人形对象V2上衣部位接口

**`Groups`**

AVATAR

## Hierarchy

- **`HumanoidV2ClothPart`**

  ↳ [`HumanoidV2GlovesPart`](Gameplay.HumanoidV2GlovesPart.md)

  ↳ [`HumanoidV2LowerClothPart`](Gameplay.HumanoidV2LowerClothPart.md)

  ↳ [`HumanoidV2ShoePart`](Gameplay.HumanoidV2ShoePart.md)

  ↳ [`HumanoidV2UpperClothPart`](Gameplay.HumanoidV2UpperClothPart.md)

## Implements

- [`IHumanoidV2ClothPart`](../interfaces/Gameplay.IHumanoidV2ClothPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.HumanoidV2ClothPart.md#getareacount)**(): `number` <br> 获取衣服区域数量|
| **[getColor](Gameplay.HumanoidV2ClothPart.md#getcolor)**(`areaIndex`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取颜色|
| **[getDesignAngle](Gameplay.HumanoidV2ClothPart.md#getdesignangle)**(`index`: `number`): `number` <br> 获取图案方向|
| **[getDesignColor](Gameplay.HumanoidV2ClothPart.md#getdesigncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取图案颜色|
| **[getDesignTexture](Gameplay.HumanoidV2ClothPart.md#getdesigntexture)**(`index`: `number`): `string` <br> 获取衣服图案|
| **[getMesh](Gameplay.HumanoidV2ClothPart.md#getmesh)**(): `string` <br> 获取衣服模型|
| **[getPatternAngle](Gameplay.HumanoidV2ClothPart.md#getpatternangle)**(`index`: `number`): `number` <br> 获取花纹旋转|
| **[getPatternColor](Gameplay.HumanoidV2ClothPart.md#getpatterncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取花纹颜色|
| **[getPatternHeight](Gameplay.HumanoidV2ClothPart.md#getpatternheight)**(`index`: `number`): `number` <br> 设置花纹纵向拉伸|
| **[getPatternIntensity](Gameplay.HumanoidV2ClothPart.md#getpatternintensity)**(`index`: `number`): `number` <br> 获取花纹显示程度|
| **[getPatternWidth](Gameplay.HumanoidV2ClothPart.md#getpatternwidth)**(`index`: `number`): `number` <br> 获取花纹横向拉伸|
| **[getTexture](Gameplay.HumanoidV2ClothPart.md#gettexture)**(`index`: `number`): `string` <br> 获取花纹|
| **[setColor](Gameplay.HumanoidV2ClothPart.md#setcolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置颜色|
| **[setDesignAngle](Gameplay.HumanoidV2ClothPart.md#setdesignangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置图案方向|
| **[setDesignColor](Gameplay.HumanoidV2ClothPart.md#setdesigncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置图案颜色|
| **[setDesignTexture](Gameplay.HumanoidV2ClothPart.md#setdesigntexture)**(`index`: `number`, `guid`: `string`, `sync`: `boolean`): `void` <br> 设置衣服图案|
| **[setMesh](Gameplay.HumanoidV2ClothPart.md#setmesh)**(`guid`: `string`, `sync`: `boolean`): `void` <br> 设置衣服模型|
| **[setPatternAngle](Gameplay.HumanoidV2ClothPart.md#setpatternangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹旋转|
| **[setPatternColor](Gameplay.HumanoidV2ClothPart.md#setpatterncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置花纹颜色|
| **[setPatternHeight](Gameplay.HumanoidV2ClothPart.md#setpatternheight)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹纵向拉伸|
| **[setPatternIntensity](Gameplay.HumanoidV2ClothPart.md#setpatternintensity)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹显示程度|
| **[setPatternWidth](Gameplay.HumanoidV2ClothPart.md#setpatternwidth)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹横向拉伸|
| **[setTexture](Gameplay.HumanoidV2ClothPart.md#settexture)**(`index`: `number`, `guid`: `string`, `sync`: `boolean`): `void` <br> 设置花纹|

## Methods

### getAreaCount <Score text="getAreaCount" /> 

• **getAreaCount**(): `number` <Badge type="tip" text="client" />

获取衣服区域数量


#### Returns

`number`

区域数量

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getAreaCount](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getareacount)

___

### getColor <Score text="getColor" /> 

• **getColor**(`areaIndex`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取颜色


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

• **getDesignAngle**(`index`): `number` <Badge type="tip" text="client" />

获取图案方向


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

• **getDesignColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取图案颜色


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

• **getDesignTexture**(`index`): `string` <Badge type="tip" text="client" />

获取衣服图案


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)

___

### getMesh <Score text="getMesh" /> 

• **getMesh**(): `string` 

获取衣服模型


#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getmesh)

___

### getPatternAngle <Score text="getPatternAngle" /> 

• **getPatternAngle**(`index`): `number` <Badge type="tip" text="client" />

获取花纹旋转


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

• **getPatternColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取花纹颜色


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

• **getPatternHeight**(`index`): `number` <Badge type="tip" text="client" />

设置花纹纵向拉伸


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

• **getPatternIntensity**(`index`): `number` <Badge type="tip" text="client" />

获取花纹显示程度


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

• **getPatternWidth**(`index`): `number` <Badge type="tip" text="client" />

获取花纹横向拉伸


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

• **getTexture**(`index`): `string` <Badge type="tip" text="client" />

获取花纹


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#gettexture)

___

### setColor <Score text="setColor" /> 

• **setColor**(`index`, `color`, `sync`): `void` 

设置颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setcolor)

___

### setDesignAngle <Score text="setDesignAngle" /> 

• **setDesignAngle**(`index`, `value`, `sync`): `void` 

设置图案方向

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 `{Min:0,Max:360}` |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesignangle)

___

### setDesignColor <Score text="setDesignColor" /> 

• **setDesignColor**(`index`, `color`, `sync`): `void` 

设置图案颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)

___

### setDesignTexture <Score text="setDesignTexture" /> 

• **setDesignTexture**(`index`, `guid`, `sync`): `void` 

设置衣服图案

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)

___

### setMesh <Score text="setMesh" /> 

• **setMesh**(`guid`, `sync`): `void` 

设置衣服模型

::: warning Precautions

如果模型Guid没有预加载，则v2本地设置时异步的

:::

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setmesh)

___

### setPatternAngle <Score text="setPatternAngle" /> 

• **setPatternAngle**(`index`, `value`, `sync`): `void` 

设置花纹旋转

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 `{Min:0,Max:360}` |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternangle)

___

### setPatternColor <Score text="setPatternColor" /> 

• **setPatternColor**(`index`, `color`, `sync`): `void` 

设置花纹颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)

___

### setPatternHeight <Score text="setPatternHeight" /> 

• **setPatternHeight**(`index`, `value`, `sync`): `void` 

设置花纹纵向拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 `{Min:0.01,Max:100}` |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternHeight](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternheight)

___

### setPatternIntensity <Score text="setPatternIntensity" /> 

• **setPatternIntensity**(`index`, `value`, `sync`): `void` 

设置花纹显示程度

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 强度 `{Min:0,Max:1}` |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternIntensity](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)

___

### setPatternWidth <Score text="setPatternWidth" /> 

• **setPatternWidth**(`index`, `value`, `sync`): `void` 

设置花纹横向拉伸

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 `{Min:0.01,Max:100}` |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternWidth](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)

___

### setTexture <Score text="setTexture" /> 

• **setTexture**(`index`, `guid`, `sync`): `void` 

设置花纹

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#settexture)
