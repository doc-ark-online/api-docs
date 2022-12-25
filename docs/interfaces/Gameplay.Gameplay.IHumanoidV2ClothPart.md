[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2ClothPart

# Interface: IHumanoidV2ClothPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2ClothPart

**`Description`**

人形对象 V2 部位

**`Author`**

guang.deng

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2ClothPart`**

## Implemented by

- [`HumanoidV2GlovesPart`](../classes/Gameplay.Gameplay.HumanoidV2GlovesPart.md)
- [`HumanoidV2LowerClothPart`](../classes/Gameplay.Gameplay.HumanoidV2LowerClothPart.md)
- [`HumanoidV2ShoePart`](../classes/Gameplay.Gameplay.HumanoidV2ShoePart.md)
- [`HumanoidV2UpperClothPart`](../classes/Gameplay.Gameplay.HumanoidV2UpperClothPart.md)

## Table of contents

### Methods

- [getAreaCount](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getareacount)
- [getColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getcolor)
- [getDesignAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesignangle)
- [getDesignColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)
- [getDesignTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)
- [getMesh](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getmesh)
- [getPatternAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternangle)
- [getPatternColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)
- [getPatternHeight](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternheight)
- [getPatternIntensity](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)
- [getPatternWidth](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)
- [getTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#gettexture)
- [setColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setcolor)
- [setDesignAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesignangle)
- [setDesignColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)
- [setDesignTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)
- [setMesh](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setmesh)
- [setPatternAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternangle)
- [setPatternColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)
- [setPatternHeight](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternheight)
- [setPatternIntensity](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)
- [setPatternWidth](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)
- [setTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#settexture)

## Methods

### getAreaCount

▸ **getAreaCount**(): `number`

**`Description`**

获取衣服区域数量

**`Effect`**

客户端生效

#### Returns

`number`

区域数量

#### Defined in

Gameplay/index.d.ts:2930

---

### getColor

▸ **getColor**(`areaIndex`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取颜色

**`Effect`**

客户端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `areaIndex` | `number` | usage:区域  |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:2947

---

### getDesignAngle

▸ **getDesignAngle**(`index`): `number`

**`Description`**

获取图案方向

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`number`

方向值

#### Defined in

Gameplay/index.d.ts:3104

---

### getDesignColor

▸ **getDesignColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取图案颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:3087

---

### getDesignTexture

▸ **getDesignTexture**(`index`): `string`

**`Description`**

获取衣服图案

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:3070

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

### getPatternAngle

▸ **getPatternAngle**(`index`): `number`

**`Description`**

获取花纹旋转

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`number`

旋转值

#### Defined in

Gameplay/index.d.ts:3036

---

### getPatternColor

▸ **getPatternColor**(`index`): [`LinearColor`](../classes/Type.Type.LinearColor.md)

**`Description`**

获取花纹颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

#### Defined in

Gameplay/index.d.ts:2985

---

### getPatternHeight

▸ **getPatternHeight**(`index`): `number`

**`Description`**

设置花纹纵向拉伸

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`number`

拉伸值

#### Defined in

Gameplay/index.d.ts:3019

---

### getPatternIntensity

▸ **getPatternIntensity**(`index`): `number`

**`Description`**

获取花纹显示程度

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`number`

显示程度

#### Defined in

Gameplay/index.d.ts:3053

---

### getPatternWidth

▸ **getPatternWidth**(`index`): `number`

**`Description`**

获取花纹横向拉伸

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`number`

拉伸值

#### Defined in

Gameplay/index.d.ts:3002

---

### getTexture

▸ **getTexture**(`index`): `string`

**`Description`**

获取花纹

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

`string`

guid

#### Defined in

Gameplay/index.d.ts:2964

---

### setColor

▸ **setColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `index` | `number`                                             | usage:区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2940

---

### setDesignAngle

▸ **setDesignAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置图案方向

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:区域                    |
| `value` | `number`  | usage:角度 {Min:0,Max:360}    |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3097

---

### setDesignColor

▸ **setDesignColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置图案颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `index` | `number`                                             | usage:区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3080

---

### setDesignTexture

▸ **setDesignTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置衣服图案

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:区域                    |
| `guid`  | `string`  | usage:贴图 Guid               |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3063

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

---

### setPatternAngle

▸ **setPatternAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:区域                    |
| `value` | `number`  | usage:角度 {Min:0,Max:360}    |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3029

---

### setPatternColor

▸ **setPatternColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description                   |
| :------ | :--------------------------------------------------- | :---------------------------- |
| `index` | `number`                                             | usage:区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                            | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2974

---

### setPatternHeight

▸ **setPatternHeight**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹纵向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                       |
| :------ | :-------- | :-------------------------------- |
| `index` | `number`  | usage:区域                        |
| `value` | `number`  | usage:拉伸比例 {Min:0.01,Max:100} |
| `sync`  | `boolean` | usage:true 同步; false 不同步     |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3012

---

### setPatternIntensity

▸ **setPatternIntensity**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹显示程度

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:区域                    |
| `value` | `number`  | usage:强度 {Min:0,Max:1}      |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:3046

---

### setPatternWidth

▸ **setPatternWidth**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹横向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                       |
| :------ | :-------- | :-------------------------------- |
| `index` | `number`  | usage:区域                        |
| `value` | `number`  | usage:拉伸比例 {Min:0.01,Max:100} |
| `sync`  | `boolean` | usage:true 同步; false 不同步     |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2995

---

### setTexture

▸ **setTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置花纹

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:区域                    |
| `guid`  | `string`  | usage:贴图 Guid               |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2957
