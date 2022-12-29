[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2ClothPart

# IHumanoidV2ClothPart <Badge type="tip" text="Interface" />

**`Description`**

人形对象 V2 部位

## Hierarchy

- [`IPart`](Gameplay.Gameplay.IPart.md)

  ↳ **`IHumanoidV2ClothPart`**

## Implemented by

- [`HumanoidV2GlovesPart`](../classes/Gameplay.Gameplay.HumanoidV2GlovesPart.md)
- [`HumanoidV2LowerClothPart`](../classes/Gameplay.Gameplay.HumanoidV2LowerClothPart.md)
- [`HumanoidV2ShoePart`](../classes/Gameplay.Gameplay.HumanoidV2ShoePart.md)
- [`HumanoidV2UpperClothPart`](../classes/Gameplay.Gameplay.HumanoidV2UpperClothPart.md)

## Table of contents

| Methods                                                                                                                                                                               |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[getAreaCount](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getareacount)**(): `number` <br> 获取衣服区域数量                                                                          |
| **[getColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getcolor)**(`number`): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取颜色                                      |
| **[getDesignAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesignangle)**(`number`): `number` <br> 获取图案方向                                                                  |
| **[getDesignColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)**(`number`): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取图案颜色                      |
| **[getDesignTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)**(`number`): `string` <br> 获取衣服图案                                                              |
| **[getMesh](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getmesh)**(): `string` <br> 获取部位模型                                                                                        |
| **[getPatternAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternangle)**(`number`): `number` <br> 获取花纹旋转                                                                |
| **[getPatternColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)**(`number`): [`LinearColor`](../classes/Type.Type.LinearColor.md) <br> 获取花纹颜色                    |
| **[getPatternHeight](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternheight)**(`number`): `number` <br> 设置花纹纵向拉伸                                                          |
| **[getPatternIntensity](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)**(`number`): `number` <br> 获取花纹显示程度                                                    |
| **[getPatternWidth](Gameplay.Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)**(`number`): `number` <br> 获取花纹横向拉伸                                                            |
| **[getTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#gettexture)**(`number`): `string` <br> 获取花纹                                                                              |
| **[setColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setcolor)**(`number`, [`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置颜色                   |
| **[setDesignAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesignangle)**(`number`, `number`, `boolean`): `void` <br> 设置图案方向                                               |
| **[setDesignColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)**(`number`, [`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置图案颜色   |
| **[setDesignTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)**(`number`, `string`, `boolean`): `void` <br> 设置衣服图案                                           |
| **[setMesh](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型                                                                       |
| **[setPatternAngle](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternangle)**(`number`, `number`, `boolean`): `void` <br> 设置花纹旋转                                             |
| **[setPatternColor](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)**(`number`, [`LinearColor`](../classes/Type.Type.LinearColor.md), `boolean`): `void` <br> 设置花纹颜色 |
| **[setPatternHeight](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternheight)**(`number`, `number`, `boolean`): `void` <br> 设置花纹纵向拉伸                                       |
| **[setPatternIntensity](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)**(`number`, `number`, `boolean`): `void` <br> 设置花纹显示程度                                 |
| **[setPatternWidth](Gameplay.Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)**(`number`, `number`, `boolean`): `void` <br> 设置花纹横向拉伸                                         |
| **[setTexture](Gameplay.Gameplay.IHumanoidV2ClothPart.md#settexture)**(`number`, `string`, `boolean`): `void` <br> 设置花纹                                                           |

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
| `areaIndex` | `number` | 区域        |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

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
| `index` | `number` | 区域        |

#### Returns

`number`

方向值

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
| `index` | `number` | 区域        |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

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
| `index` | `number` | 区域        |

#### Returns

`string`

guid

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
| `index` | `number` | 区域        |

#### Returns

`number`

旋转值

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
| `index` | `number` | 区域        |

#### Returns

[`LinearColor`](../classes/Type.Type.LinearColor.md)

颜色

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
| `index` | `number` | 区域        |

#### Returns

`number`

拉伸值

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
| `index` | `number` | 区域        |

#### Returns

`number`

显示程度

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
| `index` | `number` | 区域        |

#### Returns

`number`

拉伸值

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
| `index` | `number` | 区域        |

#### Returns

`string`

guid

---

### setColor

▸ **setColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description             |
| :------ | :--------------------------------------------------- | :---------------------- |
| `index` | `number`                                             | 区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                            | true 同步; false 不同步 |

#### Returns

`void`

---

### setDesignAngle

▸ **setDesignAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置图案方向

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 区域                    |
| `value` | `number`  | 角度 {Min:0,Max:360}    |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setDesignColor

▸ **setDesignColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置图案颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description             |
| :------ | :--------------------------------------------------- | :---------------------- |
| `index` | `number`                                             | 区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                            | true 同步; false 不同步 |

#### Returns

`void`

---

### setDesignTexture

▸ **setDesignTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置衣服图案

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 区域                    |
| `guid`  | `string`  | 贴图 Guid               |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

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

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | 模型 Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPatternAngle

▸ **setPatternAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 区域                    |
| `value` | `number`  | 角度 {Min:0,Max:360}    |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPatternColor

▸ **setPatternColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                 | Description             |
| :------ | :--------------------------------------------------- | :---------------------- |
| `index` | `number`                                             | 区域                    |
| `color` | [`LinearColor`](../classes/Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                            | true 同步; false 不同步 |

#### Returns

`void`

---

### setPatternHeight

▸ **setPatternHeight**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹纵向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                 |
| :------ | :-------- | :-------------------------- |
| `index` | `number`  | 区域                        |
| `value` | `number`  | 拉伸比例 {Min:0.01,Max:100} |
| `sync`  | `boolean` | true 同步; false 不同步     |

#### Returns

`void`

---

### setPatternIntensity

▸ **setPatternIntensity**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹显示程度

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 区域                    |
| `value` | `number`  | 强度 {Min:0,Max:1}      |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

---

### setPatternWidth

▸ **setPatternWidth**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹横向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                 |
| :------ | :-------- | :-------------------------- |
| `index` | `number`  | 区域                        |
| `value` | `number`  | 拉伸比例 {Min:0.01,Max:100} |
| `sync`  | `boolean` | true 同步; false 不同步     |

#### Returns

`void`

---

### setTexture

▸ **setTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置花纹

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 区域                    |
| `guid`  | `string`  | 贴图 Guid               |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`
