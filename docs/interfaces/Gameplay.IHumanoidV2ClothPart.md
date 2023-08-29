[AVATAR](../groups/AVATAR.AVATAR.md) / IHumanoidV2ClothPart

# IHumanoidV2ClothPart <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2ClothPart" />

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2ClothPart`**

## Implemented by

- [`HumanoidV2ClothPart`](../classes/Gameplay.HumanoidV2ClothPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.IHumanoidV2ClothPart.md#getareacount)**(): `number` <br> 获取衣服区域数量|
| **[getColor](Gameplay.IHumanoidV2ClothPart.md#getcolor)**(`areaIndex`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取颜色|
| **[getDesignAngle](Gameplay.IHumanoidV2ClothPart.md#getdesignangle)**(`index`: `number`): `number` <br> 获取图案方向|
| **[getDesignColor](Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)**(`index`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取图案颜色|
| **[getDesignTexture](Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)**(`index`: `number`): `string` <br> 获取衣服图案|
| **[getPatternAngle](Gameplay.IHumanoidV2ClothPart.md#getpatternangle)**(`index`: `number`): `number` <br> 获取花纹旋转|
| **[getPatternColor](Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)**(`index`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取花纹颜色|
| **[getPatternHeight](Gameplay.IHumanoidV2ClothPart.md#getpatternheight)**(`index`: `number`): `number` <br> 设置花纹纵向拉伸|
| **[getPatternIntensity](Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)**(`index`: `number`): `number` <br> 获取花纹显示程度|
| **[getPatternWidth](Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)**(`index`: `number`): `number` <br> 获取花纹横向拉伸|
| **[getTexture](Gameplay.IHumanoidV2ClothPart.md#gettexture)**(`index`: `number`): `string` <br> 获取花纹|
| **[setColor](Gameplay.IHumanoidV2ClothPart.md#setcolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置颜色|
| **[setDesignAngle](Gameplay.IHumanoidV2ClothPart.md#setdesignangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置图案方向|
| **[setDesignColor](Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置图案颜色|
| **[setDesignTexture](Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置衣服图案|
| **[setPatternAngle](Gameplay.IHumanoidV2ClothPart.md#setpatternangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹旋转|
| **[setPatternColor](Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置花纹颜色|
| **[setPatternHeight](Gameplay.IHumanoidV2ClothPart.md#setpatternheight)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹纵向拉伸|
| **[setPatternIntensity](Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹显示程度|
| **[setPatternWidth](Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置花纹横向拉伸|
| **[setTexture](Gameplay.IHumanoidV2ClothPart.md#settexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置花纹|


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置部位模型|
:::


## Methods

### getAreaCount <Score text="getAreaCount" /> 

• **getAreaCount**(): `number` 

获取衣服区域数量


#### Returns

`number`

区域数量

___

### getColor <Score text="getColor" /> 

• **getColor**(`areaIndex`): [`LinearColor`](../classes/Type.LinearColor.md) 

获取颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIndex` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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

___

### getDesignColor <Score text="getDesignColor" /> 

• **getDesignColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取图案颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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

GUID

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

___

### getPatternColor <Score text="getPatternColor" /> 

• **getPatternColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取花纹颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

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

___

### getTexture <Score text="getTexture" /> 

• **getTexture**(`index`): `string` 

获取花纹


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

GUID

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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setDesignTexture <Score text="setDesignTexture" /> 

• **setDesignTexture**(`index`, `GUID`, `sync`): `void` 

设置衣服图案

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


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
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


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


___

### setTexture <Score text="setTexture" /> 

• **setTexture**(`index`, `GUID`, `sync`): `void` 

设置花纹

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |

