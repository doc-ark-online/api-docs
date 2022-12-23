[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Matrix3x3

# Class: Matrix3x3

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Matrix3x3

**`Author`**

ChenYuHao

**`Description`**

三维矩阵

**`Precautions`**

列矩阵

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.Matrix3x3.md#constructor)

### Properties

- [m00](Type.Type.Matrix3x3.md#m00)
- [m01](Type.Type.Matrix3x3.md#m01)
- [m02](Type.Type.Matrix3x3.md#m02)
- [m10](Type.Type.Matrix3x3.md#m10)
- [m11](Type.Type.Matrix3x3.md#m11)
- [m12](Type.Type.Matrix3x3.md#m12)
- [m20](Type.Type.Matrix3x3.md#m20)
- [m21](Type.Type.Matrix3x3.md#m21)
- [m22](Type.Type.Matrix3x3.md#m22)

### Accessors

- [identity](Type.Type.Matrix3x3.md#identity)

### Methods

- [add](Type.Type.Matrix3x3.md#add)
- [clone](Type.Type.Matrix3x3.md#clone)
- [determinant](Type.Type.Matrix3x3.md#determinant)
- [equals](Type.Type.Matrix3x3.md#equals)
- [identity](Type.Type.Matrix3x3.md#identity-1)
- [invert](Type.Type.Matrix3x3.md#invert)
- [multiply](Type.Type.Matrix3x3.md#multiply)
- [rotate](Type.Type.Matrix3x3.md#rotate)
- [scale](Type.Type.Matrix3x3.md#scale)
- [set](Type.Type.Matrix3x3.md#set)
- [strictEquals](Type.Type.Matrix3x3.md#strictequals)
- [subtract](Type.Type.Matrix3x3.md#subtract)
- [toString](Type.Type.Matrix3x3.md#tostring)
- [transpose](Type.Type.Matrix3x3.md#transpose)
- [add](Type.Type.Matrix3x3.md#add-1)
- [clone](Type.Type.Matrix3x3.md#clone-1)
- [determinant](Type.Type.Matrix3x3.md#determinant-1)
- [equals](Type.Type.Matrix3x3.md#equals-1)
- [fromMat4](Type.Type.Matrix3x3.md#frommat4)
- [fromRotation](Type.Type.Matrix3x3.md#fromrotation)
- [fromScaling](Type.Type.Matrix3x3.md#fromscaling)
- [fromTranslation](Type.Type.Matrix3x3.md#fromtranslation)
- [fromViewUp](Type.Type.Matrix3x3.md#fromviewup)
- [inverseTransposeMat4](Type.Type.Matrix3x3.md#inversetransposemat4)
- [invert](Type.Type.Matrix3x3.md#invert-1)
- [multiply](Type.Type.Matrix3x3.md#multiply-1)
- [rotate](Type.Type.Matrix3x3.md#rotate-1)
- [scale](Type.Type.Matrix3x3.md#scale-1)
- [strictEquals](Type.Type.Matrix3x3.md#strictequals-1)
- [subtract](Type.Type.Matrix3x3.md#subtract-1)
- [transformVector](Type.Type.Matrix3x3.md#transformvector)
- [transformVector2](Type.Type.Matrix3x3.md#transformvector2)
- [transpose](Type.Type.Matrix3x3.md#transpose-1)

## Constructors

### constructor

• **new Matrix3x3**(`other`)

**`Description`**

用给定的 Matrix3x3 构建一个新的 Matrix3x3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:给定的 Matrix3x3 对象 |

#### Defined in

Type/index.d.ts:1450

• **new Matrix3x3**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`)

**`Description`**

用给定的元素构建一个新的 Matrix3x3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m00?` | `number` | usage:第 0 列第 0 行的元素 default:1 |
| `m01?` | `number` | usage:第 0 列第 1 行的元素 default:0 |
| `m02?` | `number` | usage:第 0 列第 2 行的元素 default:0 |
| `m10?` | `number` | usage:第 1 列第 0 行的元素 default:0 |
| `m11?` | `number` | usage:第 1 列第 1 行的元素 default:1 |
| `m12?` | `number` | usage:第 1 列第 2 行的元素 default:0 |
| `m20?` | `number` | usage:第 2 列第 0 行的元素 default:0 |
| `m21?` | `number` | usage:第 2 列第 1 行的元素 default:0 |
| `m22?` | `number` | usage:第 2 列第 2 行的元素 default:1 |

#### Defined in

Type/index.d.ts:1463

## Properties

### m00

• **m00**: `number`

**`Description`**

矩阵第 0 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1413

___

### m01

• **m01**: `number`

**`Description`**

矩阵第 0 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1417

___

### m02

• **m02**: `number`

**`Description`**

矩阵第 0 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1421

___

### m10

• **m10**: `number`

**`Description`**

矩阵第 1 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1425

___

### m11

• **m11**: `number`

**`Description`**

矩阵第 1 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1429

___

### m12

• **m12**: `number`

**`Description`**

矩阵第 1 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1433

___

### m20

• **m20**: `number`

**`Description`**

矩阵第 2 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1437

___

### m21

• **m21**: `number`

**`Description`**

矩阵第 2 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1441

___

### m22

• **m22**: `number`

**`Description`**

矩阵第 2 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1445

## Accessors

### identity

• `Static` `get` **identity**(): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

获得一个默认矩阵

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

#### Defined in

Type/index.d.ts:1209

## Methods

### add

▸ **add**(`mat`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

矩阵逐元素相加。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1560

___

### clone

▸ **clone**(): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

克隆当前矩阵。

**`Effect`**

调用端生效

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

克隆的新矩阵

#### Defined in

Type/index.d.ts:1479

___

### determinant

▸ **determinant**(): `number`

**`Description`**

计算当前矩阵的行列式。

**`Effect`**

调用端生效

#### Returns

`number`

当前矩阵的行列式。

#### Defined in

Type/index.d.ts:1553

___

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前矩阵是否在误差范围内与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:比对的矩阵 |
| `epsilon?` | `number` | usage:误差值 default:1.e-7 |

#### Returns

`boolean`

比对的结果

#### Defined in

Type/index.d.ts:1519

___

### identity

▸ **identity**(): `void`

**`Description`**

将当前矩阵设为单位矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1537

___

### invert

▸ **invert**(): `void`

**`Description`**

将当前矩阵计算为其逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1547

___

### multiply

▸ **multiply**(`mat`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1574

▸ **multiply**(`v`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | usage:数 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1581

___

### rotate

▸ **rotate**(`rad`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | usage:旋转的弧度 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1595

___

### scale

▸ **scale**(`vec`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](Type.Type.Vector.md) | usage:对矩阵缩放的向量 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1588

___

### set

▸ **set**(`other`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

设置当前矩阵使其与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:指定矩阵 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1486

▸ **set**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

设置当前矩阵指定元素值。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m00?` | `number` | usage:第0行第0列的元素 default:1 |
| `m01?` | `number` | usage:第0行第1列的元素 default:0 |
| `m02?` | `number` | usage:第0行第2列的元素 default:0 |
| `m10?` | `number` | usage:第1行第0列的元素 default:0 |
| `m11?` | `number` | usage:第1行第1列的元素 default:1 |
| `m12?` | `number` | usage:第1行第2列的元素 default:0 |
| `m20?` | `number` | usage:第2行第0列的元素 default:0 |
| `m21?` | `number` | usage:第2行第1列的元素 default:0 |
| `m22?` | `number` | usage:第2行第2列的元素 default:1 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1501

___

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前矩阵是否与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:比对的矩阵 |

#### Returns

`boolean`

比对的结果

#### Defined in

Type/index.d.ts:1526

___

### subtract

▸ **subtract**(`mat`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

当前矩阵逐元素减去参数矩阵

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

this

#### Defined in

Type/index.d.ts:1567

___

### toString

▸ **toString**(): `string`

**`Description`**

返回当前矩阵的字符串表示。

**`Effect`**

调用端生效

#### Returns

`string`

返回矩阵的字符串信息

#### Defined in

Type/index.d.ts:1532

___

### transpose

▸ **transpose**(): `void`

**`Description`**

将当前矩阵计算为其转置矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1542

___

### add

▸ `Static` **add**(`a`, `b`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

逐元素矩阵加法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵b |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的矩阵

#### Defined in

Type/index.d.ts:1352

___

### clone

▸ `Static` **clone**(`a`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

获得指定矩阵的拷贝

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:指定矩阵 |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

一个新的矩阵

#### Defined in

Type/index.d.ts:1216

___

### determinant

▸ `Static` **determinant**(`a`): `number`

**`Description`**

求目标矩阵行列式

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:目标矩阵 |

#### Returns

`number`

行列式的结果

#### Defined in

Type/index.d.ts:1241

___

### equals

▸ `Static` **equals**(`a`, `b`, `epsilon?`): `boolean`

**`Description`**

排除浮点数误差的矩阵近似等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵b |
| `epsilon?` | `number` | usage:误差值 default:1.e-7 |

#### Returns

`boolean`

返回比对结果

#### Defined in

Type/index.d.ts:1409

___

### fromMat4

▸ `Static` **fromMat4**(`a`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

取四阶矩阵的前三阶

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:源四阶矩阵 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

提取后的三维矩阵

#### Defined in

Type/index.d.ts:1290

___

### fromRotation

▸ `Static` **fromRotation**(`rad`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

计算旋转矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rad` | `number` | usage:旋转弧度 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

含旋转信息的三维矩阵

#### Defined in

Type/index.d.ts:1333

___

### fromScaling

▸ `Static` **fromScaling**(`v`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

计算缩放矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Type.Vector2.md) | usage:缩放信息的二维向量 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

含缩放信息的三维矩阵

#### Defined in

Type/index.d.ts:1324

___

### fromTranslation

▸ `Static` **fromTranslation**(`v`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

计算位移矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Type.Vector2.md) | usage:位移的二维向量 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

含位移信息的三维矩阵

#### Defined in

Type/index.d.ts:1315

___

### fromViewUp

▸ `Static` **fromViewUp**(`view`, `up?`, `outer?`, `epsilon?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

根据视口前方向和上方向计算矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`Vector`](Type.Type.Vector.md) | usage:视口向量 |
| `up?` | [`Vector`](Type.Type.Vector.md) | usage:视口的上向量 default:null |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |
| `epsilon?` | `number` | usage:最小误差数 default:MathDefine.EPSILON |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的三维矩阵

#### Defined in

Type/index.d.ts:1301

___

### inverseTransposeMat4

▸ `Static` **inverseTransposeMat4**(`a`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

计算指定四阶矩阵的逆转置三维矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:四阶矩阵 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

逆转置后的三维矩阵

#### Defined in

Type/index.d.ts:1342

___

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

将目标矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:目标矩阵 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:写入数据的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

求逆后的矩阵

#### Defined in

Type/index.d.ts:1234

___

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

矩阵乘法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵b |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的矩阵

#### Defined in

Type/index.d.ts:1372

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

取四阶矩阵的前三阶，与三维矩阵相乘

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:矩阵b |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的矩阵

#### Defined in

Type/index.d.ts:1382

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

矩阵标量乘法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | `number` | usage:数字b |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的矩阵

#### Defined in

Type/index.d.ts:1392

___

### rotate

▸ `Static` **rotate**(`a`, `rad`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

在给定矩阵变换基础上加入新旋转变换

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:需要变换的矩阵 |
| `rad` | `number` | usage:旋转弧度 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

旋转后的三维矩阵

#### Defined in

Type/index.d.ts:1281

___

### scale

▸ `Static` **scale**(`a`, `v`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

在给定矩阵变换基础上加入新缩放变换

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:三维矩阵 |
| `v` | [`Vector`](Type.Type.Vector.md) | usage:缩放矩阵的三维向量 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果三维矩阵对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

缩放后的三维矩阵

#### Defined in

Type/index.d.ts:1271

___

### strictEquals

▸ `Static` **strictEquals**(`a`, `b`): `boolean`

**`Description`**

矩阵等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵b |

#### Returns

`boolean`

返回比对结果

#### Defined in

Type/index.d.ts:1400

___

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

逐元素矩阵减法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵a |
| `b` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:矩阵b |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:接收结果的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

计算后的矩阵

#### Defined in

Type/index.d.ts:1362

___

### transformVector

▸ `Static` **transformVector**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向量与三维矩阵乘法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:三维矩阵 |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:三维向量 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:被写入的三维向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

变换后的三维向量

#### Defined in

Type/index.d.ts:1261

___

### transformVector2

▸ `Static` **transformVector2**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

向量与三维矩阵乘法，默认向量第三位为 1。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:三维矩阵 |
| `b` | [`Vector2`](Type.Type.Vector2.md) | usage:二维向量 |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:被写入的二维向量 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

变换后的二维向量

#### Defined in

Type/index.d.ts:1251

___

### transpose

▸ `Static` **transpose**(`a`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

将目标矩阵变为转置矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:目标矩阵 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | usage:写入数据的矩阵 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

转置后的矩阵

#### Defined in

Type/index.d.ts:1225
