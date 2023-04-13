[Avatar](../groups/Avatar.Avatar.md) / HumanoidV2HairPart

# HumanoidV2HairPart <Badge type="tip" text="Class" /> <Score text="HumanoidV2HairPart" />

人形对象V2前发部位接口

## Hierarchy

- **`HumanoidV2HairPart`**

  ↳ [`HumanoidV2BehindHairPart`](Gameplay.HumanoidV2BehindHairPart.md)

  ↳ [`HumanoidV2FrontHairPart`](Gameplay.HumanoidV2FrontHairPart.md)

## Implements

- [`IHumanoidV2HairPart`](../interfaces/Gameplay.IHumanoidV2HairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.HumanoidV2HairPart.md#getareacount)**(): `number` <br> 获取头发区域数量|
| **[getColor](Gameplay.HumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.HumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.HumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHeaddressColor](Gameplay.HumanoidV2HairPart.md#getheaddresscolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰颜色|
| **[getHeaddressDesignColor](Gameplay.HumanoidV2HairPart.md#getheaddressdesigncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰图案颜色|
| **[getHeaddressDesignRotation](Gameplay.HumanoidV2HairPart.md#getheaddressdesignrotation)**(`index`: `number`): `number` <br> 获取头饰图案旋转|
| **[getHeaddressDesignTexture](Gameplay.HumanoidV2HairPart.md#getheaddressdesigntexture)**(`index`: `number`): `string` <br> 获取头饰图案贴图|
| **[getHeaddressDesignZoom](Gameplay.HumanoidV2HairPart.md#getheaddressdesignzoom)**(`index`: `number`): `number` <br> 获取头饰图案缩放|
| **[getHeaddressPatternAngle](Gameplay.HumanoidV2HairPart.md#getheaddresspatternangle)**(`index`: `number`): `number` <br> 获取头饰花纹旋转|
| **[getHeaddressPatternColor](Gameplay.HumanoidV2HairPart.md#getheaddresspatterncolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取头饰花纹颜色|
| **[getHeaddressPatternHeight](Gameplay.HumanoidV2HairPart.md#getheaddresspatternheight)**(`index`: `number`): `number` <br> 获取头饰花纹纵向拉伸|
| **[getHeaddressPatternIntensity](Gameplay.HumanoidV2HairPart.md#getheaddresspatternintensity)**(`index`: `number`): `number` <br> 获取头饰花纹显示程度|
| **[getHeaddressPatternTexture](Gameplay.HumanoidV2HairPart.md#getheaddresspatterntexture)**(`index`: `number`): `string` <br> 获取头饰花纹贴图|
| **[getHeaddressPatternWidth](Gameplay.HumanoidV2HairPart.md#getheaddresspatternwidth)**(`index`: `number`): `number` <br> 获取头饰花纹横向拉伸|
| **[getHighlightColor](Gameplay.HumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.HumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.HumanoidV2HairPart.md#getmesh)**(): `string` <br> 获取前发部位模型|
| **[setColor](Gameplay.HumanoidV2HairPart.md#setcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.HumanoidV2HairPart.md#setgradientcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.HumanoidV2HairPart.md#setgradientintensity)**(`value`: `number`, `sync`: `boolean`): `void` <br> 设置头发渐变区域|
| **[setHeaddressColor](Gameplay.HumanoidV2HairPart.md#setheaddresscolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰颜色|
| **[setHeaddressDesignColor](Gameplay.HumanoidV2HairPart.md#setheaddressdesigncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰图案颜色|
| **[setHeaddressDesignRotation](Gameplay.HumanoidV2HairPart.md#setheaddressdesignrotation)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案旋转|
| **[setHeaddressDesignTexture](Gameplay.HumanoidV2HairPart.md#setheaddressdesigntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰图案贴图|
| **[setHeaddressDesignZoom](Gameplay.HumanoidV2HairPart.md#setheaddressdesignzoom)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰图案缩放|
| **[setHeaddressPatternAngle](Gameplay.HumanoidV2HairPart.md#setheaddresspatternangle)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹旋转|
| **[setHeaddressPatternColor](Gameplay.HumanoidV2HairPart.md#setheaddresspatterncolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头饰花纹颜色|
| **[setHeaddressPatternHeight](Gameplay.HumanoidV2HairPart.md#setheaddresspatternheight)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹纵向拉伸|
| **[setHeaddressPatternIntensity](Gameplay.HumanoidV2HairPart.md#setheaddresspatternintensity)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹显示程度|
| **[setHeaddressPatternTexture](Gameplay.HumanoidV2HairPart.md#setheaddresspatterntexture)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头饰花纹贴图|
| **[setHeaddressPatternWidth](Gameplay.HumanoidV2HairPart.md#setheaddresspatternwidth)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 设置头饰花纹横向拉伸|
| **[setHighlightColor](Gameplay.HumanoidV2HairPart.md#sethighlightcolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.HumanoidV2HairPart.md#sethighlightmask)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.HumanoidV2HairPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置前发部位模型|

## Methods

### getAreaCount <Score text="getAreaCount" /> 

• **getAreaCount**(): `number` <Badge type="tip" text="client" />

获取头发区域数量


#### Returns

`number`

区域数量

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getAreaCount](../interfaces/Gameplay.IHumanoidV2HairPart.md#getareacount)

___

### getColor <Score text="getColor" /> 

• **getColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getcolor)

___

### getGradientColor <Score text="getGradientColor" /> 

• **getGradientColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发渐变染色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientcolor)

___

### getGradientIntensity <Score text="getGradientIntensity" /> 

• **getGradientIntensity**(): `number` <Badge type="tip" text="client" />

获取头发渐变区域


#### Returns

`number`

强度

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

___

### getHeaddressColor <Score text="getHeaddressColor" /> 

• **getHeaddressColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresscolor)

___

### getHeaddressDesignColor <Score text="getHeaddressDesignColor" /> 

• **getHeaddressDesignColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰图案颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressDesignColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddressdesigncolor)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressDesignRotation](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddressdesignrotation)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressDesignTexture](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddressdesigntexture)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressDesignZoom](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddressdesignzoom)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternAngle](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatternangle)

___

### getHeaddressPatternColor <Score text="getHeaddressPatternColor" /> 

• **getHeaddressPatternColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头饰花纹颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  区域index |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatterncolor)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternHeight](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatternheight)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatternintensity)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternTexture](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatterntexture)

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHeaddressPatternWidth](../interfaces/Gameplay.IHumanoidV2HairPart.md#getheaddresspatternwidth)

___

### getHighlightColor <Score text="getHighlightColor" /> 

• **getHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取头发高光颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)

___

### getHighlightMask <Score text="getHighlightMask" /> 

• **getHighlightMask**(): `string` <Badge type="tip" text="client" />

获取头发高光形状


#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

___

### getMesh <Score text="getMesh" /> 

• **getMesh**(): `string` 

获取前发部位模型


#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2HairPart.md#getmesh)

___

### setColor <Score text="setColor" /> 

• **setColor**(`color`, `sync`): `void` 

设置头发颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setcolor)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setGradientColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setgradientcolor)

___

### setGradientIntensity <Score text="setGradientIntensity" /> 

• **setGradientIntensity**(`value`, `sync`): `void` 

设置头发渐变区域

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setGradientIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#setgradientintensity)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresscolor)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressDesignColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddressdesigncolor)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressDesignRotation](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddressdesignrotation)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressDesignTexture](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddressdesigntexture)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressDesignZoom](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddressdesignzoom)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternAngle](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatternangle)

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
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatterncolor)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternHeight](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatternheight)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatternintensity)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternTexture](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatterntexture)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHeaddressPatternWidth](../interfaces/Gameplay.IHumanoidV2HairPart.md#setheaddresspatternwidth)

___

### setHighlightColor <Score text="setHighlightColor" /> 

• **setHighlightColor**(`color`, `sync`): `void` 

设置头发高光颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHighlightColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)

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


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setHighlightMask](../interfaces/Gameplay.IHumanoidV2HairPart.md#sethighlightmask)

___

### setMesh <Score text="setMesh" /> 

• **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="client" /> 

设置前发部位模型


::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2HairPart.md#setmesh)
