[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2MaterialStyle

# IHumanoidV2MaterialStyle <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2MaterialStyle" />

人形对象V2材质风格

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.HumanoidV2.md)

## Table of contents

| Methods |
| :-----|
| **[getBodyTattooColor](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)**(`number`): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取纹身颜色|
| **[getBodyTattooPositionX](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)**(`number`): `number` <br> 获取纹身位置左右偏移|
| **[getBodyTattooPositionY](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)**(`number`): `number` <br> 获取身体纹身位置上下位置|
| **[getBodyTattooRotation](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)**(`number`): `number` <br> 获取纹身旋转值|
| **[getBodyTattooType](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)**(`number`): `string` <br> 获取纹身贴图 GUID|
| **[getBodyTattooZoom](Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)**(`number`): `number` <br> 获取身体纹身位置缩放|
| **[getSkinColor](Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 设置皮肤颜色|
| **[getSkinTexture](Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)**(): `string` <br> 获取皮肤贴图|
| **[setBodyTattooColor](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)**(`number`, [`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 身体纹身颜色|
| **[setBodyTattooPositionX](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置左右偏移|
| **[setBodyTattooPositionY](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置上下位置|
| **[setBodyTattooRotation](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)**(`number`, `number`, `boolean`): `void` <br> 身体纹旋转|
| **[setBodyTattooType](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)**(`number`, `string`, `boolean`): `void` <br> 身体纹身种类|
| **[setBodyTattooZoom](Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置缩放|
| **[setSkinColor](Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)**([`LinearColor`](../classes/Type.LinearColor.md), `boolean`): `void` <br> 设置皮肤颜色|
| **[setSkinTexture](Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)**(`string`, `boolean`): `void` <br> 设置皮肤贴图|

## Methods

### getBodyTattooColor <Score text="getBodyTattooColor" /> 

• **getBodyTattooColor**(`index`): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

获取纹身颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

纹身颜色

___

### getBodyTattooPositionX <Score text="getBodyTattooPositionX" /> 

• **getBodyTattooPositionX**(`index`): `number` <Badge type="tip" text="other" />

获取纹身位置左右偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身左右位置偏移值

___

### getBodyTattooPositionY <Score text="getBodyTattooPositionY" /> 

• **getBodyTattooPositionY**(`index`): `number` <Badge type="tip" text="other" />

获取身体纹身位置上下位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身上线位置值

___

### getBodyTattooRotation <Score text="getBodyTattooRotation" /> 

• **getBodyTattooRotation**(`index`): `number` <Badge type="tip" text="other" />

获取纹身旋转值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身旋转值

___

### getBodyTattooType <Score text="getBodyTattooType" /> 

• **getBodyTattooType**(`index`): `string` <Badge type="tip" text="other" />

获取纹身贴图 GUID

客户端有效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

`string`

纹身贴图GUID

___

### getBodyTattooZoom <Score text="getBodyTattooZoom" /> 

• **getBodyTattooZoom**(`index`): `number` <Badge type="tip" text="other" />

获取身体纹身位置缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身缩放值

___

### getSkinColor <Score text="getSkinColor" /> 

• **getSkinColor**(): [`LinearColor`](../classes/Type.LinearColor.md) <Badge type="tip" text="other" />

设置皮肤颜色

客户端有效

#### Returns

[`LinearColor`](../classes/Type.LinearColor.md)

颜色

___

### getSkinTexture <Score text="getSkinTexture" /> 

• **getSkinTexture**(): `string` <Badge type="tip" text="other" />

获取皮肤贴图


#### Returns

`string`

皮肤贴图GUID

___

### setBodyTattooColor <Score text="setBodyTattooColor" /> 

• **setBodyTattooColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

身体纹身颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  纹身index |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) |  颜色值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBodyTattooPositionX <Score text="setBodyTattooPositionX" /> 

• **setBodyTattooPositionX**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

身体纹身位置左右偏移

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBodyTattooPositionY <Score text="setBodyTattooPositionY" /> 

• **setBodyTattooPositionY**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

身体纹身位置上下位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBodyTattooRotation <Score text="setBodyTattooRotation" /> 

• **setBodyTattooRotation**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

身体纹旋转

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 旋转值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBodyTattooType <Score text="setBodyTattooType" /> 

• **setBodyTattooType**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

身体纹身种类

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |
| `GUID` | `string` | 类型贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setBodyTattooZoom <Score text="setBodyTattooZoom" /> 

• **setBodyTattooZoom**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

身体纹身位置缩放

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` |  缩放值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setSkinColor <Score text="setSkinColor" /> 

• **setSkinColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

设置皮肤颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](../classes/Type.LinearColor.md) |  颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setSkinTexture <Score text="setSkinTexture" /> 

• **setSkinTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

设置皮肤贴图

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |

