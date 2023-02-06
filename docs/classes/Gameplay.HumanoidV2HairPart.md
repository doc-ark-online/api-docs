[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2HairPart

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
| **[getColor](Gameplay.HumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.HumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.HumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.HumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.HumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[getMesh](Gameplay.HumanoidV2HairPart.md#getmesh)**(): `string` <br> 获取前发部位模型|
| **[setColor](Gameplay.HumanoidV2HairPart.md#setcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.HumanoidV2HairPart.md#setgradientcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.HumanoidV2HairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.HumanoidV2HairPart.md#sethighlightcolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.HumanoidV2HairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状|
| **[setMesh](Gameplay.HumanoidV2HairPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置前发部位模型|

## Methods

### getColor <Score text="getColor" /> 

• **getColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取头发颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getcolor)

___

### getGradientColor <Score text="getGradientColor" /> 

• **getGradientColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取头发渐变染色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientcolor)

___

### getGradientIntensity <Score text="getGradientIntensity" /> 

• **getGradientIntensity**(): `number` <Badge type="tip" text="other" />

获取头发渐变区域


#### Returns

`number`

强度

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

___

### getHighlightColor <Score text="getHighlightColor" /> 

• **getHighlightColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取头发高光颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightColor](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)

___

### getHighlightMask <Score text="getHighlightMask" /> 

• **getHighlightMask**(): `string` <Badge type="tip" text="other" />

获取头发高光形状


#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

___

### getMesh <Score text="getMesh" /> 

• **getMesh**(): `string` <Badge type="tip" text="other" />

获取前发部位模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2HairPart.md#getmesh)

___

### setColor <Score text="setColor" /> 

• **setColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

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

• **setGradientColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

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

• **setGradientIntensity**(`value`, `sync`): `void` <Badge type="tip" text="other" />

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

### setHighlightColor <Score text="setHighlightColor" /> 

• **setHighlightColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

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

• **setHighlightMask**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

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

• **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" /> <Badge type="tip" text="other" />

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
