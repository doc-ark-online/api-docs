[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2HairPart

# Interface: IHumanoidV2HairPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2HairPart

**`Description`**

人形对象 V2 部位

**`Author`**

guang.deng

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2HairPart`**

## Implemented by

- [`HumanoidV2BehindHairPart`](../classes/Gameplay.Gameplay.HumanoidV2BehindHairPart.md)
- [`HumanoidV2FrontHairPart`](../classes/Gameplay.Gameplay.HumanoidV2FrontHairPart.md)

## Table of contents

### Methods

- [getColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#getcolor)
- [getGradientColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientcolor)
- [getGradientIntensity](Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientintensity)
- [getHighlightColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightcolor)
- [getHighlightMask](Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightmask)
- [getMesh](Gameplay.Gameplay.IHumanoidV2HairPart.md#getmesh)
- [setColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#setcolor)
- [setGradientColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientcolor)
- [setGradientIntensity](Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientintensity)
- [setHighlightColor](Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)
- [setHighlightMask](Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightmask)
- [setMesh](Gameplay.Gameplay.IHumanoidV2HairPart.md#setmesh)

## Methods

### getColor

▸ **getColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3127

---

### getGradientColor

▸ **getGradientColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发渐变染色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3142

---

### getGradientIntensity

▸ **getGradientIntensity**(): `number`

**`Description`**

获取头发渐变区域

**`Effect`**

客户端生效

#### Returns

`number`

强度

#### Defined in

Gameplay/index.d.ts:3157

---

### getHighlightColor

▸ **getHighlightColor**(): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取头发高光颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3187

---

### getHighlightMask

▸ **getHighlightMask**(): `string`

**`Description`**

获取头发高光形状

**`Effect`**

客户端生效

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3172

---

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[getMesh](Gameplay.Gameplay.IPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:2784

---

### setColor

▸ **setColor**(`color`, `sync`): `void`

**`Description`**

设置头发颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3121

---

### setGradientColor

▸ **setGradientColor**(`color`, `sync`): `void`

**`Description`**

设置头发渐变染色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3136

---

### setGradientIntensity

▸ **setGradientIntensity**(`intensity`, `sync`): `void`

**`Description`**

设置头发渐变区域

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name        | Type      | Description                   |
| :---------- | :-------- | :---------------------------- |
| `intensity` | `number`  | usage:强度                    |
| `sync`      | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3151

---

### setHighlightColor

▸ **setHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置头发高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3181

---

### setHighlightMask

▸ **setHighlightMask**(`guid`, `sync`): `void`

**`Description`**

设置头发高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:贴图 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3166

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型 Guid 没有预加载，则 v2 本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:模型 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Inherited from

[IPart](Gameplay.Gameplay.IPart.md).[setMesh](Gameplay.Gameplay.IPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:2778
