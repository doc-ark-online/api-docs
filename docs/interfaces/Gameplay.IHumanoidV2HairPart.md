[Avatar](../groups/Avatar.Avatar.md) / IHumanoidV2HairPart

# IHumanoidV2HairPart <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2HairPart" />

人形对象V2部位

**`Groups`**

AVATAR

## Hierarchy

- [`IPart`](Gameplay.IPart.md)

  ↳ **`IHumanoidV2HairPart`**

## Implemented by

- [`HumanoidV2HairPart`](../classes/Gameplay.HumanoidV2HairPart.md)

## Table of contents

| Methods |
| :-----|
| **[getColor](Gameplay.IHumanoidV2HairPart.md#getcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发颜色|
| **[getGradientColor](Gameplay.IHumanoidV2HairPart.md#getgradientcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发渐变染色|
| **[getGradientIntensity](Gameplay.IHumanoidV2HairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域|
| **[getHighlightColor](Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)**(): [`LinearColor`](../classes/Type.LinearColor.md) <br> 获取头发高光颜色|
| **[getHighlightMask](Gameplay.IHumanoidV2HairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状|
| **[setColor](Gameplay.IHumanoidV2HairPart.md#setcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发颜色|
| **[setGradientColor](Gameplay.IHumanoidV2HairPart.md#setgradientcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发渐变染色|
| **[setGradientIntensity](Gameplay.IHumanoidV2HairPart.md#setgradientintensity)**(`intensity`: `number`, `sync`: `boolean`): `void` <br> 设置头发渐变区域|
| **[setHighlightColor](Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)**(`color`: [`LinearColor`](../classes/Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置头发高光颜色|
| **[setHighlightMask](Gameplay.IHumanoidV2HairPart.md#sethighlightmask)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置头发高光形状|


::: details 点击查看继承
| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置部位模型|
:::


## Methods

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

**`Groups`**

AVATAR

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

