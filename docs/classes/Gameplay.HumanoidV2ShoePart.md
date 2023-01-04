[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2ShoePart

# HumanoidV2ShoePart <Badge type="tip" text="Class" />

**`Description`**

人形对象V2鞋子部位接口

## Implements

- [`IHumanoidV2ClothPart`](../interfaces/Gameplay.IHumanoidV2ClothPart.md)

## Table of contents

| Methods |
| :-----|
| **[getAreaCount](Gameplay.HumanoidV2ShoePart.md#getareacount)**(): `number` <br> 获取衣服区域数量|
| **[getColor](Gameplay.HumanoidV2ShoePart.md#getcolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取颜色|
| **[getDesignAngle](Gameplay.HumanoidV2ShoePart.md#getdesignangle)**(`number`): `number` <br> 获取图案方向|
| **[getDesignColor](Gameplay.HumanoidV2ShoePart.md#getdesigncolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取图案颜色|
| **[getDesignTexture](Gameplay.HumanoidV2ShoePart.md#getdesigntexture)**(`number`): `string` <br> 获取衣服图案|
| **[getMesh](Gameplay.HumanoidV2ShoePart.md#getmesh)**(): `string` <br> 获取鞋子模型|
| **[getPatternAngle](Gameplay.HumanoidV2ShoePart.md#getpatternangle)**(`number`): `number` <br> 获取花纹旋转|
| **[getPatternColor](Gameplay.HumanoidV2ShoePart.md#getpatterncolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取花纹颜色|
| **[getPatternHeight](Gameplay.HumanoidV2ShoePart.md#getpatternheight)**(`number`): `number` <br> 设置花纹纵向拉伸|
| **[getPatternIntensity](Gameplay.HumanoidV2ShoePart.md#getpatternintensity)**(`number`): `number` <br> 获取花纹显示程度|
| **[getPatternWidth](Gameplay.HumanoidV2ShoePart.md#getpatternwidth)**(`number`): `number` <br> 获取花纹横向拉伸|
| **[getTexture](Gameplay.HumanoidV2ShoePart.md#gettexture)**(`number`): `string` <br> 获取花纹|
| **[setColor](Gameplay.HumanoidV2ShoePart.md#setcolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置颜色|
| **[setDesignAngle](Gameplay.HumanoidV2ShoePart.md#setdesignangle)**(`number`, `number`, `boolean`): `void` <br> 设置图案方向|
| **[setDesignColor](Gameplay.HumanoidV2ShoePart.md#setdesigncolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置图案颜色|
| **[setDesignTexture](Gameplay.HumanoidV2ShoePart.md#setdesigntexture)**(`number`, `string`, `boolean`): `void` <br> 设置衣服图案|
| **[setMesh](Gameplay.HumanoidV2ShoePart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置鞋子模型|
| **[setPatternAngle](Gameplay.HumanoidV2ShoePart.md#setpatternangle)**(`number`, `number`, `boolean`): `void` <br> 设置花纹旋转|
| **[setPatternColor](Gameplay.HumanoidV2ShoePart.md#setpatterncolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置花纹颜色|
| **[setPatternHeight](Gameplay.HumanoidV2ShoePart.md#setpatternheight)**(`number`, `number`, `boolean`): `void` <br> 设置花纹纵向拉伸|
| **[setPatternIntensity](Gameplay.HumanoidV2ShoePart.md#setpatternintensity)**(`number`, `number`, `boolean`): `void` <br> 设置花纹显示程度|
| **[setPatternWidth](Gameplay.HumanoidV2ShoePart.md#setpatternwidth)**(`number`, `number`, `boolean`): `void` <br> 设置花纹横向拉伸|
| **[setTexture](Gameplay.HumanoidV2ShoePart.md#settexture)**(`number`, `string`, `boolean`): `void` <br> 设置花纹|

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

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getAreaCount](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getareacount)

___

### getColor

▸ **getColor**(`areaIndex`): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `areaIndex` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getcolor)

___

### getDesignAngle

▸ **getDesignAngle**(`index`): `number`

**`Description`**

获取图案方向

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

方向值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesignangle)

___

### getDesignColor

▸ **getDesignColor**(`index`): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取图案颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesigncolor)

___

### getDesignTexture

▸ **getDesignTexture**(`index`): `string`

**`Description`**

获取衣服图案

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getdesigntexture)

___

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取鞋子模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getmesh)

___

### getPatternAngle

▸ **getPatternAngle**(`index`): `number`

**`Description`**

获取花纹旋转

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

旋转值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternangle)

___

### getPatternColor

▸ **getPatternColor**(`index`): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取花纹颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatterncolor)

___

### getPatternHeight

▸ **getPatternHeight**(`index`): `number`

**`Description`**

设置花纹纵向拉伸

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternHeight](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternheight)

___

### getPatternIntensity

▸ **getPatternIntensity**(`index`): `number`

**`Description`**

获取花纹显示程度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

显示程度

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternIntensity](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternintensity)

___

### getPatternWidth

▸ **getPatternWidth**(`index`): `number`

**`Description`**

获取花纹横向拉伸

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`number`

拉伸值

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getPatternWidth](../interfaces/Gameplay.IHumanoidV2ClothPart.md#getpatternwidth)

___

### getTexture

▸ **getTexture**(`index`): `string`

**`Description`**

获取花纹

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |

#### Returns

`string`

guid

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[getTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#gettexture)

___

### setColor

▸ **setColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setcolor)

___

### setDesignAngle

▸ **setDesignAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置图案方向

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 {Min:0,Max:360} |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesignangle)

___

### setDesignColor

▸ **setDesignColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置图案颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigncolor)

___

### setDesignTexture

▸ **setDesignTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置衣服图案

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setDesignTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setdesigntexture)

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置鞋子模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setMesh](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setmesh)

___

### setPatternAngle

▸ **setPatternAngle**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 角度 {Min:0,Max:360} |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternAngle](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternangle)

___

### setPatternColor

▸ **setPatternColor**(`index`, `color`, `sync`): `void`

**`Description`**

设置花纹颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternColor](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatterncolor)

___

### setPatternHeight

▸ **setPatternHeight**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹纵向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 {Min:0.01,Max:100} |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternHeight](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternheight)

___

### setPatternIntensity

▸ **setPatternIntensity**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹显示程度

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 强度 {Min:0,Max:1} |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternIntensity](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternintensity)

___

### setPatternWidth

▸ **setPatternWidth**(`index`, `value`, `sync`): `void`

**`Description`**

设置花纹横向拉伸

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `value` | `number` | 拉伸比例 {Min:0.01,Max:100} |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setPatternWidth](../interfaces/Gameplay.IHumanoidV2ClothPart.md#setpatternwidth)

___

### setTexture

▸ **setTexture**(`index`, `guid`, `sync`): `void`

**`Description`**

设置花纹

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 区域 |
| `guid` | `string` | 贴图Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md).[setTexture](../interfaces/Gameplay.IHumanoidV2ClothPart.md#settexture)
