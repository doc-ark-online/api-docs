[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2BehindHairPart

# HumanoidV2BehindHairPart <Badge type="tip" text="Class" />

**`Description`**

人形对象 V2 后发部位接口

## Implements

- [`IHumanoidV2HairPart`](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md)

## Table of contents

| Methods                                                                                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#getcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发颜色                                        |
| **[getGradientColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#getgradientcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发渐变染色                    |
| **[getGradientIntensity](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#getgradientintensity)**(): `number` <br> 获取头发渐变区域                                             |
| **[getHighlightColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#gethighlightcolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取头发高光颜色                  |
| **[getHighlightMask](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#gethighlightmask)**(): `string` <br> 获取头发高光形状                                                     |
| **[getMesh](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#getmesh)**(): `string` <br> 获取后发部位模型                                                                       |
| **[setColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#setcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发颜色                       |
| **[setGradientColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#setgradientcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发渐变染色   |
| **[setGradientIntensity](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#setgradientintensity)**(`number`, `boolean`): `void` <br> 设置头发渐变区域                            |
| **[setHighlightColor](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#sethighlightcolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置头发高光颜色 |
| **[setHighlightMask](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#sethighlightmask)**(`string`, `boolean`): `void` <br> 设置头发高光形状                                    |
| **[setMesh](Gameplay.Gameplay.HumanoidV2BehindHairPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置后发部位模型                                                      |

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

---

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getgradientintensity)

---

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

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#gethighlightmask)

---

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取后发部位模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#getmesh)

---

### setColor

▸ **setColor**(`color`, `sync`): `void`

**`Description`**

设置头发颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description             |
| :------ | :---------------------------------------- | :---------------------- |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                 | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setcolor)

---

### setGradientColor

▸ **setGradientColor**(`color`, `sync`): `void`

**`Description`**

设置头发渐变染色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description             |
| :------ | :---------------------------------------- | :---------------------- |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                 | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientcolor)

---

### setGradientIntensity

▸ **setGradientIntensity**(`intensity`, `sync`): `void`

**`Description`**

设置头发渐变区域

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name        | Type      | Description             |
| :---------- | :-------- | :---------------------- |
| `intensity` | `number`  | 强度                    |
| `sync`      | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setGradientIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setgradientintensity)

---

### setHighlightColor

▸ **setHighlightColor**(`color`, `sync`): `void`

**`Description`**

设置头发高光颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description             |
| :------ | :---------------------------------------- | :---------------------- |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                 | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightColor](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightcolor)

---

### setHighlightMask

▸ **setHighlightMask**(`guid`, `sync`): `void`

**`Description`**

设置头发高光形状

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | 贴图 Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setHighlightMask](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#sethighlightmask)

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置后发部位模型

**`Precautions`**

如果模型 Guid 没有预加载，则 v2 本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | 模型 Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2HairPart](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2HairPart.md#setmesh)
