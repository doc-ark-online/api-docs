[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2UpperClothPart

# Class: HumanoidV2UpperClothPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HumanoidV2UpperClothPart

**`Description`**

人形对象 V2 上衣部位接口

**`Author`**

guang.deng

**`Network Status`**

usage:双端

## Implements

- [`IHumanoidV2ClothPart`](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#constructor)

### Methods

- [getAreaCount](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getareacount)
- [getColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getcolor)
- [getDesignAngle](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getdesignangle)
- [getDesignColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getdesigncolor)
- [getDesignTexture](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getdesigntexture)
- [getMesh](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getmesh)
- [getPatternAngle](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getpatternangle)
- [getPatternColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getpatterncolor)
- [getPatternHeight](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getpatternheight)
- [getPatternIntensity](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getpatternintensity)
- [getPatternWidth](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#getpatternwidth)
- [getTexture](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#gettexture)
- [setColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setcolor)
- [setDesignAngle](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setdesignangle)
- [setDesignColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setdesigncolor)
- [setDesignTexture](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setdesigntexture)
- [setMesh](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setmesh)
- [setPatternAngle](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setpatternangle)
- [setPatternColor](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setpatterncolor)
- [setPatternHeight](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setpatternheight)
- [setPatternIntensity](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setpatternintensity)
- [setPatternWidth](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#setpatternwidth)
- [setTexture](Gameplay.Gameplay.HumanoidV2UpperClothPart.md#settexture)

## Constructors

### constructor

• **new HumanoidV2UpperClothPart**()

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getAreaCount](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getareacount)

#### Defined in

Gameplay/index.d.ts:8071

---

### getColor

▸ **getColor**(`areaIndex`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取颜色

**`Effect`**

客户端生效

#### Parameters

| Name        | Type     | Description |
| :---------- | :------- | :---------- |
| `areaIndex` | `number` | usage:区域  |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getcolor)

#### Defined in

Gameplay/index.d.ts:8088

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getDesignAngle](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesignangle)

#### Defined in

Gameplay/index.d.ts:8245

---

### getDesignColor

▸ **getDesignColor**(`index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取图案颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getDesignColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)

#### Defined in

Gameplay/index.d.ts:8228

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getDesignTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)

#### Defined in

Gameplay/index.d.ts:8211

---

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取上衣模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:8065

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getPatternAngle](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternangle)

#### Defined in

Gameplay/index.d.ts:8177

---

### getPatternColor

▸ **getPatternColor**(`index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取花纹颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | usage:区域  |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getPatternColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)

#### Defined in

Gameplay/index.d.ts:8126

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getPatternHeight](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternheight)

#### Defined in

Gameplay/index.d.ts:8160

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getPatternIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)

#### Defined in

Gameplay/index.d.ts:8194

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getPatternWidth](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)

#### Defined in

Gameplay/index.d.ts:8143

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[getTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#gettexture)

#### Defined in

Gameplay/index.d.ts:8105

---

### setColor

▸ **setColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description                   |
| :------ | :---------------------------------------- | :---------------------------- |
| `index` | `number`                                  | usage:区域                    |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                 | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setcolor)

#### Defined in

Gameplay/index.d.ts:8081

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setDesignAngle](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesignangle)

#### Defined in

Gameplay/index.d.ts:8238

---

### setDesignColor

▸ **setDesignColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置图案颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description                   |
| :------ | :---------------------------------------- | :---------------------------- |
| `index` | `number`                                  | usage:区域                    |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                 | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setDesignColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)

#### Defined in

Gameplay/index.d.ts:8221

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setDesignTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)

#### Defined in

Gameplay/index.d.ts:8204

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置上衣模型

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:8059

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setPatternAngle](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternangle)

#### Defined in

Gameplay/index.d.ts:8170

---

### setPatternColor

▸ **setPatternColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description                   |
| :------ | :---------------------------------------- | :---------------------------- |
| `index` | `number`                                  | usage:区域                    |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色                    |
| `sync`  | `boolean`                                 | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setPatternColor](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)

#### Defined in

Gameplay/index.d.ts:8115

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setPatternHeight](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternheight)

#### Defined in

Gameplay/index.d.ts:8153

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setPatternIntensity](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)

#### Defined in

Gameplay/index.d.ts:8187

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setPatternWidth](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)

#### Defined in

Gameplay/index.d.ts:8136

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

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md).[setTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2ClothPart.md#settexture)

#### Defined in

Gameplay/index.d.ts:8098
