[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2FrontHairPart

# Class: HumanoidV2FrontHairPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HumanoidV2FrontHairPart

**`Description`**

人形对象V2前发部位接口

**`Author`**

邓广

**`Network Status`**

usage:双端

## Implements

- [`IHumanoidV2HairPart`](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#constructor)

### Methods

- [getColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getcolor)
- [getGradientColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getgradientcolor)
- [getGradientIntensity](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getgradientintensity)
- [getHighlightColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#gethighlightcolor)
- [getHighlightMask](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#gethighlightmask)
- [getMesh](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#getmesh)
- [setColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setcolor)
- [setGradientColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setgradientcolor)
- [setGradientIntensity](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setgradientintensity)
- [setHighlightColor](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#sethighlightcolor)
- [setHighlightMask](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#sethighlightmask)
- [setMesh](Gameplay.Gameplay.HumanoidV2FrontHairPart.md#setmesh)

## Constructors

### constructor

• **new HumanoidV2FrontHairPart**()

## Methods

### getColor

▸ **getColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getcolor)

#### Defined in

Gameplay/index.d.ts:5458

___

### getGradientColor

▸ **getGradientColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发渐变染色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getGradientColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientcolor)

#### Defined in

Gameplay/index.d.ts:5473

___

### getGradientIntensity

▸ **getGradientIntensity**(): `number`

**`Description`**

获取头发渐变区域

**`Effect`**

客户端生效

#### Returns

`number`

强度

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

#### Defined in

Gameplay/index.d.ts:5488

___

### getHighlightColor

▸ **getHighlightColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取头发高光颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)

#### Defined in

Gameplay/index.d.ts:5518

___

### getHighlightMask

▸ **getHighlightMask**(): `string`

**`Description`**

获取头发高光形状

**`Effect`**

客户端生效

#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

#### Defined in

Gameplay/index.d.ts:5503

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取前发部位模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:5443

___

### setColor

▸ **setColor**(`color`, `sync`): `void`

**`Description`**

设置头发颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setcolor)

#### Defined in

Gameplay/index.d.ts:5452

___

### setGradientColor

▸ **setGradientColor**(`color`, `sync`): `void`

**`Description`**

设置头发渐变染色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientcolor)

#### Defined in

Gameplay/index.d.ts:5467

___

### setGradientIntensity

▸ **setGradientIntensity**(`value`, `sync`): `void`

**`Description`**

设置头发渐变区域

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:强度 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientintensity)

#### Defined in

Gameplay/index.d.ts:5482

___

### setHighlightColor

▸ **setHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置头发高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色 |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)

#### Defined in

Gameplay/index.d.ts:5512

___

### setHighlightMask

▸ **setHighlightMask**(`guid`, `sync`): `void`

**`Description`**

设置头发高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:贴图Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightmask)

#### Defined in

Gameplay/index.d.ts:5497

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置前发部位模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:模型Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:5437
