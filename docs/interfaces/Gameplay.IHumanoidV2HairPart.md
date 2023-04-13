[Avatar](../groups/Avatar.Avatar.md) / IHumanoidV2HairPart

# IHumanoidV2HairPart <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2HairPart" />

人形对象V2部位

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2HairPart`**

## Implemented by

- [`HumanoidV2HairPart`](../classes/Gameplay.HumanoidV2HairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.IHumanoidV2HairPart.md#getareacount)**(): `number` <br> 获取头发区域数量|
| **[getColor](Gameplay.IHumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.IHumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.IHumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHeaddressColor](Gameplay.IHumanoidV2HairPart.md#getheaddresscolor)**(`index`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头饰颜色|
| **[getHeaddressDesignColor](Gameplay.IHumanoidV2HairPart.md#getheaddressdesigncolor)**(`index`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头饰图案颜色|
| **[getHeaddressDesignRotation](Gameplay.IHumanoidV2HairPart.md#getheaddressdesignrotation)**(`index`: `number`): `number` <br> 获取头饰图案旋转|
| **[getHeaddressDesignTexture](Gameplay.IHumanoidV2HairPart.md#getheaddressdesigntexture)**(`index`: `number`): `string` <br> 获取头饰图案贴图|
| **[getHeaddressDesignZoom](Gameplay.IHumanoidV2HairPart.md#getheaddressdesignzoom)**(`index`: `number`): `number` <br> 获取头饰图案缩放|
| **[getHeaddressPatternAngle](Gameplay.IHumanoidV2HairPart.md#getheaddresspatternangle)**(`index`: `number`): `number` <br> 获取头饰花纹旋转|
| **[getHeaddressPatternColor](Gameplay.IHumanoidV2HairPart.md#getheaddresspatterncolor)**(`index`: `number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头饰花纹颜色|
| **[getHeaddressPatternHeight](Gameplay.IHumanoidV2HairPart.md#getheaddresspatternheight)**(`index`: `number`): `number` <br> 获取头饰花纹纵向拉伸|
| **[getHeaddressPatternIntensity](Gameplay.IHumanoidV2HairPart.md#getheaddresspatternintensity)**(`index`: `number`): `number` <br> 获取头饰花纹显示程度|
| **[getHeaddressPatternTexture](Gameplay.IHumanoidV2HairPart.md#getheaddresspatterntexture)**(`index`: `number`): `string` <br> 获取头饰花纹贴图|
| **[getHeaddressPatternWidth](Gameplay.IHumanoidV2HairPart.md#getheaddresspatternwidth)**(`index`: `number`): `number` <br> 获取头饰花纹横向拉伸|
| **[getHighlightColor](Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.IHumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[setColor](Gameplay.IHumanoidV2HairPart.md#setcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.IHumanoidV2HairPart.md#setgradientcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.IHumanoidV2HairPart.md#setgradientintensity)**(`intensity`: `number`, `sync`: `boolean`): `void` <br> 设置头发渐变区域|
| **[setHeaddressColor](Gameplay.IHumanoidV2HairPart.md#setheaddresscolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰颜色|
| **[setHeaddressDesignColor](Gameplay.IHumanoidV2HairPart.md#setheaddressdesigncolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰图案颜色|
| **[setHeaddressDesignRotation](Gameplay.IHumanoidV2HairPart.md#setheaddressdesignrotation)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案旋转|
| **[setHeaddressDesignTexture](Gameplay.IHumanoidV2HairPart.md#setheaddressdesigntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰图案贴图|
| **[setHeaddressDesignZoom](Gameplay.IHumanoidV2HairPart.md#setheaddressdesignzoom)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案缩放|
| **[setHeaddressPatternAngle](Gameplay.IHumanoidV2HairPart.md#setheaddresspatternangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹旋转|
| **[setHeaddressPatternColor](Gameplay.IHumanoidV2HairPart.md#setheaddresspatterncolor)**(`index`: `number`, `color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰花纹颜色|
| **[setHeaddressPatternHeight](Gameplay.IHumanoidV2HairPart.md#setheaddresspatternheight)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹纵向拉伸|
| **[setHeaddressPatternIntensity](Gameplay.IHumanoidV2HairPart.md#setheaddresspatternintensity)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹显示程度|
| **[setHeaddressPatternTexture](Gameplay.IHumanoidV2HairPart.md#setheaddresspatterntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰花纹贴图|
| **[setHeaddressPatternWidth](Gameplay.IHumanoidV2HairPart.md#setheaddresspatternwidth)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹横向拉伸|
| **[setHighlightColor](Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.IHumanoidV2HairPart.md#sethighlightmask)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头发高光形状|


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置部位模型|
:::


## Methods

### getAreaCount <Score text="getAreaCount" /> 

• **getAreaCount**(): `number` <Badge type="tip" text="client" />

获取头发区域数量


#### Returns

`number`

区域数量

___

### getColor <Score text="getColor" /> 

• **getColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发颜色


#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientColor <Score text="getGradientColor" /> 

• **getGradientColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发渐变染色


#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getGradientIntensity <Score text="getGradientIntensity" /> 

• **getGradientIntensity**(): `number` <Badge type="tip" text="client" />

获取头发渐变区域


#### Returns

`number`

强度

___

### getHeaddressColor <Score text="getHeaddressColor" /> 

• **getHeaddressColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHeaddressDesignColor <Score text="getHeaddressDesignColor" /> 

• **getHeaddressDesignColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰图案颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHeaddressDesignRotation <Score text="getHeaddressDesignRotation" /> 

• **getHeaddressDesignRotation**(`index`): `number` <Badge type="tip" text="client" />

获取头饰图案旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

`number`

旋转值

___

### getHeaddressDesignTexture <Score text="getHeaddressDesignTexture" /> 

• **getHeaddressDesignTexture**(`index`): `string` <Badge type="tip" text="client" />

获取头饰图案贴图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

`string`

GUID

___

### getHeaddressDesignZoom <Score text="getHeaddressDesignZoom" /> 

• **getHeaddressDesignZoom**(`index`): `number` <Badge type="tip" text="client" />

获取头饰图案缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

`number`

缩放值

___

### getHeaddressPatternAngle <Score text="getHeaddressPatternAngle" /> 

• **getHeaddressPatternAngle**(`index`): `number` <Badge type="tip" text="client" />

获取头饰花纹旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

旋转值

___

### getHeaddressPatternColor <Score text="getHeaddressPatternColor" /> 

• **getHeaddressPatternColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰花纹颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHeaddressPatternHeight <Score text="getHeaddressPatternHeight" /> 

• **getHeaddressPatternHeight**(`index`): `number` <Badge type="tip" text="client" />

获取头饰花纹纵向拉伸


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

___

### getHeaddressPatternIntensity <Score text="getHeaddressPatternIntensity" /> 

• **getHeaddressPatternIntensity**(`index`): `number` <Badge type="tip" text="client" />

获取头饰花纹显示程度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

显示程度

___

### getHeaddressPatternTexture <Score text="getHeaddressPatternTexture" /> 

• **getHeaddressPatternTexture**(`index`): `string` <Badge type="tip" text="client" />

获取头饰花纹贴图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

`string`

GUID

___

### getHeaddressPatternWidth <Score text="getHeaddressPatternWidth" /> 

• **getHeaddressPatternWidth**(`index`): `number` <Badge type="tip" text="client" />

获取头饰花纹横向拉伸


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

___

### getHighlightColor <Score text="getHighlightColor" /> 

• **getHighlightColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发高光颜色


#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getHighlightMask <Score text="getHighlightMask" /> 

• **getHighlightMask**(): `string` <Badge type="tip" text="client" />

获取头发高光形状


#### Returns

`string`

GUID


### setColor <Score text="setColor" /> 

• **setColor**(`color`, `sync`): `void` 

设置头发颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setGradientColor <Score text="setGradientColor" /> 

• **setGradientColor**(`color`, `sync`): `void` 

设置头发渐变染色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setGradientIntensity <Score text="setGradientIntensity" /> 

• **setGradientIntensity**(`intensity`, `sync`): `void` 

设置头发渐变区域


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intensity` | `number` | 强度 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressColor <Score text="setHeaddressColor" /> 

• **setHeaddressColor**(`index`, `color`, `sync`): `void` 

设置头饰颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressDesignColor <Score text="setHeaddressDesignColor" /> 

• **setHeaddressDesignColor**(`index`, `color`, `sync`): `void` 

设置头饰图案颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressDesignRotation <Score text="setHeaddressDesignRotation" /> 

• **setHeaddressDesignRotation**(`index`, `value`, `sync`): `void` 

设置头饰图案旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `value` | `number` | 旋转值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressDesignTexture <Score text="setHeaddressDesignTexture" /> 

• **setHeaddressDesignTexture**(`index`, `GUID`, `sync`): `void` 

设置头饰图案贴图

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressDesignZoom <Score text="setHeaddressDesignZoom" /> 

• **setHeaddressDesignZoom**(`index`, `value`, `sync`): `void` 

设置头饰图案缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `value` | `number` | 缩放值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressPatternAngle <Score text="setHeaddressPatternAngle" /> 

• **setHeaddressPatternAngle**(`index`, `value`, `sync`): `void` 

设置头饰花纹旋转

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

### setHeaddressPatternColor <Score text="setHeaddressPatternColor" /> 

• **setHeaddressPatternColor**(`index`, `color`, `sync`): `void` 

设置头饰花纹颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressPatternHeight <Score text="setHeaddressPatternHeight" /> 

• **setHeaddressPatternHeight**(`index`, `value`, `sync`): `void` 

设置头饰花纹纵向拉伸

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

### setHeaddressPatternIntensity <Score text="setHeaddressPatternIntensity" /> 

• **setHeaddressPatternIntensity**(`index`, `value`, `sync`): `void` 

设置头饰花纹显示程度

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

### setHeaddressPatternTexture <Score text="setHeaddressPatternTexture" /> 

• **setHeaddressPatternTexture**(`index`, `GUID`, `sync`): `void` 

设置头饰花纹贴图

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHeaddressPatternWidth <Score text="setHeaddressPatternWidth" /> 

• **setHeaddressPatternWidth**(`index`, `value`, `sync`): `void` 

设置头饰花纹横向拉伸

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

### setHighlightColor <Score text="setHighlightColor" /> 

• **setHighlightColor**(`color`, `sync`): `void` 

设置头发高光颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setHighlightMask <Score text="setHighlightMask" /> 

• **setHighlightMask**(`GUID`, `sync`): `void` 

设置头发高光形状

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |

