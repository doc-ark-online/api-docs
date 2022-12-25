[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Matrix4x4

# Class: Matrix4x4

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Matrix4x4

**`Author`**

ChenYuHao

**`Description`**

四维矩阵

**`Precautions`**

列矩阵

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.Matrix4x4.md#constructor)

### Properties

- [m00](Type.Type.Matrix4x4.md#m00)
- [m01](Type.Type.Matrix4x4.md#m01)
- [m02](Type.Type.Matrix4x4.md#m02)
- [m03](Type.Type.Matrix4x4.md#m03)
- [m10](Type.Type.Matrix4x4.md#m10)
- [m11](Type.Type.Matrix4x4.md#m11)
- [m12](Type.Type.Matrix4x4.md#m12)
- [m13](Type.Type.Matrix4x4.md#m13)
- [m20](Type.Type.Matrix4x4.md#m20)
- [m21](Type.Type.Matrix4x4.md#m21)
- [m22](Type.Type.Matrix4x4.md#m22)
- [m23](Type.Type.Matrix4x4.md#m23)
- [m30](Type.Type.Matrix4x4.md#m30)
- [m31](Type.Type.Matrix4x4.md#m31)
- [m32](Type.Type.Matrix4x4.md#m32)
- [m33](Type.Type.Matrix4x4.md#m33)

### Accessors

- [identity](Type.Type.Matrix4x4.md#identity)

### Methods

- [add](Type.Type.Matrix4x4.md#add)
- [clone](Type.Type.Matrix4x4.md#clone)
- [determinant](Type.Type.Matrix4x4.md#determinant)
- [equals](Type.Type.Matrix4x4.md#equals)
- [fromQuaternion](Type.Type.Matrix4x4.md#fromquaternion)
- [fromRTS](Type.Type.Matrix4x4.md#fromrts)
- [getRotation](Type.Type.Matrix4x4.md#getrotation)
- [getScale](Type.Type.Matrix4x4.md#getscale)
- [getTranslation](Type.Type.Matrix4x4.md#gettranslation)
- [identity](Type.Type.Matrix4x4.md#identity-1)
- [invert](Type.Type.Matrix4x4.md#invert)
- [multiply](Type.Type.Matrix4x4.md#multiply)
- [rotate](Type.Type.Matrix4x4.md#rotate)
- [scale](Type.Type.Matrix4x4.md#scale)
- [set](Type.Type.Matrix4x4.md#set)
- [strictEquals](Type.Type.Matrix4x4.md#strictequals)
- [subtract](Type.Type.Matrix4x4.md#subtract)
- [toString](Type.Type.Matrix4x4.md#tostring)
- [translate](Type.Type.Matrix4x4.md#translate)
- [transpose](Type.Type.Matrix4x4.md#transpose)
- [zero](Type.Type.Matrix4x4.md#zero)
- [clone](Type.Type.Matrix4x4.md#clone-1)
- [invert](Type.Type.Matrix4x4.md#invert-1)
- [transformAffine](Type.Type.Matrix4x4.md#transformaffine)
- [transformAffine4](Type.Type.Matrix4x4.md#transformaffine4)
- [transformVector](Type.Type.Matrix4x4.md#transformvector)
- [transformVector2](Type.Type.Matrix4x4.md#transformvector2)
- [transformVector4](Type.Type.Matrix4x4.md#transformvector4)
- [transpose](Type.Type.Matrix4x4.md#transpose-1)

## Constructors

### constructor

• **new Matrix4x4**(`other`)

**`Description`**

用给定的 other 构建一个新的 Matrix4x4

#### Parameters

| Name    | Type                                  | Description                 |
| :------ | :------------------------------------ | :-------------------------- |
| `other` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:给定的 Matrix4x4 对象 |

#### Defined in

Type/index.d.ts:1720

• **new Matrix4x4**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`)

**`Description`**

用给定的元素构建一个新的 Matrix4x4

#### Parameters

| Name   | Type     | Description                          |
| :----- | :------- | :----------------------------------- |
| `m00?` | `number` | usage:第 0 列第 0 行的元素 default:1 |
| `m01?` | `number` | usage:第 0 列第 1 行的元素 default:0 |
| `m02?` | `number` | usage:第 0 列第 2 行的元素 default:0 |
| `m03?` | `number` | usage:第 0 列第 3 行的元素 default:0 |
| `m10?` | `number` | usage:第 1 列第 0 行的元素 default:0 |
| `m11?` | `number` | usage:第 1 列第 1 行的元素 default:1 |
| `m12?` | `number` | usage:第 1 列第 2 行的元素 default:0 |
| `m13?` | `number` | usage:第 1 列第 3 行的元素 default:0 |
| `m20?` | `number` | usage:第 2 列第 0 行的元素 default:0 |
| `m21?` | `number` | usage:第 2 列第 1 行的元素 default:0 |
| `m22?` | `number` | usage:第 2 列第 2 行的元素 default:1 |
| `m23?` | `number` | usage:第 2 列第 3 行的元素 default:0 |
| `m30?` | `number` | usage:第 3 列第 0 行的元素 default:0 |
| `m31?` | `number` | usage:第 3 列第 1 行的元素 default:0 |
| `m32?` | `number` | usage:第 3 列第 2 行的元素 default:0 |
| `m33?` | `number` | usage:第 3 列第 3 行的元素 default:1 |

#### Defined in

Type/index.d.ts:1740

## Properties

### m00

• **m00**: `number`

**`Description`**

矩阵第 0 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1580

---

### m01

• **m01**: `number`

**`Description`**

矩阵第 0 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1584

---

### m02

• **m02**: `number`

**`Description`**

矩阵第 0 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1588

---

### m03

• **m03**: `number`

**`Description`**

矩阵第 0 列第 3 行的元素。

#### Defined in

Type/index.d.ts:1592

---

### m10

• **m10**: `number`

**`Description`**

矩阵第 1 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1596

---

### m11

• **m11**: `number`

**`Description`**

矩阵第 1 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1600

---

### m12

• **m12**: `number`

**`Description`**

矩阵第 1 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1604

---

### m13

• **m13**: `number`

**`Description`**

矩阵第 1 列第 3 行的元素。

#### Defined in

Type/index.d.ts:1608

---

### m20

• **m20**: `number`

**`Description`**

矩阵第 2 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1612

---

### m21

• **m21**: `number`

**`Description`**

矩阵第 2 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1616

---

### m22

• **m22**: `number`

**`Description`**

矩阵第 2 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1620

---

### m23

• **m23**: `number`

**`Description`**

矩阵第 2 列第 3 行的元素。

#### Defined in

Type/index.d.ts:1624

---

### m30

• **m30**: `number`

**`Description`**

矩阵第 3 列第 0 行的元素。

#### Defined in

Type/index.d.ts:1628

---

### m31

• **m31**: `number`

**`Description`**

矩阵第 3 列第 1 行的元素。

#### Defined in

Type/index.d.ts:1632

---

### m32

• **m32**: `number`

**`Description`**

矩阵第 3 列第 2 行的元素。

#### Defined in

Type/index.d.ts:1636

---

### m33

• **m33**: `number`

**`Description`**

矩阵第 3 列第 3 行的元素。

#### Defined in

Type/index.d.ts:1640

## Accessors

### identity

• `Static` `get` **identity**(): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

获得一个默认矩阵

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

#### Defined in

Type/index.d.ts:1576

## Methods

### add

▸ **add**(`mat`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                  | Description      |
| :---- | :------------------------------------ | :--------------- |
| `mat` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:相加的矩阵 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1863

---

### clone

▸ **clone**(): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

克隆当前矩阵。

**`Effect`**

调用端生效

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

新的 Matrix4x4 对象

#### Defined in

Type/index.d.ts:1763

---

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

Type/index.d.ts:1856

---

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前矩阵是否在误差范围内与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                  | Description                                |
| :--------- | :------------------------------------ | :----------------------------------------- |
| `other`    | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:比对的矩阵                           |
| `epsilon?` | `number`                              | usage:误差值 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

返回矩阵比对的结果

#### Defined in

Type/index.d.ts:1817

---

### fromQuaternion

▸ **fromQuaternion**(`q`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

重置当前矩阵的值，使其表示指定四元数表示的旋转变换。

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                    | Description            |
| :--- | :-------------------------------------- | :--------------------- |
| `q`  | [`Quaternion`](Type.Type.Quaternion.md) | usage:旋转数据的四元数 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1947

---

### fromRTS

▸ **fromRTS**(`q`, `v`, `s`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                    | Description            |
| :--- | :-------------------------------------- | :--------------------- |
| `q`  | [`Quaternion`](Type.Type.Quaternion.md) | usage:旋转数据的四元数 |
| `v`  | [`Vector`](Type.Type.Vector.md)         | usage:位移数据的向量   |
| `s`  | [`Vector`](Type.Type.Vector.md)         | usage:缩放数据的向量   |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1940

---

### getRotation

▸ **getRotation**(`outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                    | Description                                        |
| :------- | :-------------------------------------- | :------------------------------------------------- |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | usage:接收旋转数据的 Quaternion 对象, default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

记录旋转数据的 Quaternion 对象

#### Defined in

Type/index.d.ts:1931

---

### getScale

▸ **getScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收缩放数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

缩放数据

#### Defined in

Type/index.d.ts:1923

---

### getTranslation

▸ **getTranslation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收位移数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位移数据

#### Defined in

Type/index.d.ts:1915

---

### identity

▸ **identity**(): `void`

**`Description`**

将当前矩阵设为单位矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1835

---

### invert

▸ **invert**(): `void`

**`Description`**

将当前矩阵变为逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1850

---

### multiply

▸ **multiply**(`mat`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                  | Description      |
| :---- | :------------------------------------ | :--------------- |
| `mat` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:相乘的矩阵 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1877

▸ **multiply**(`scalar`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name     | Type     | Description              |
| :------- | :------- | :----------------------- |
| `scalar` | `number` | usage:对矩阵整体缩放的数 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1884

---

### rotate

▸ **rotate**(`axis`, `rad`, `epsilon?`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description                                 |
| :--------- | :------------------------------ | :------------------------------------------ |
| `axis`     | [`Vector`](Type.Type.Vector.md) | usage:绕的旋转轴                            |
| `rad`      | `number`                        | usage:旋转的弧度                            |
| `epsilon?` | `number`                        | usage:最小误差数 default:MathDefine.EPSILON |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1907

---

### scale

▸ **scale**(`vec`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                            | Description          |
| :---- | :------------------------------ | :------------------- |
| `vec` | [`Vector`](Type.Type.Vector.md) | usage:缩放矩阵的向量 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1898

---

### set

▸ **set**(`other`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

设置当前矩阵使其与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                  | Description    |
| :------ | :------------------------------------ | :------------- |
| `other` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:矩阵数据 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1770

▸ **set**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

设置当前矩阵指定元素值。

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description                          |
| :----- | :------- | :----------------------------------- |
| `m00?` | `number` | usage:第 0 列第 0 行的元素 default:1 |
| `m01?` | `number` | usage:第 0 列第 1 行的元素 default:0 |
| `m02?` | `number` | usage:第 0 列第 2 行的元素 default:0 |
| `m03?` | `number` | usage:第 0 列第 3 行的元素 default:0 |
| `m10?` | `number` | usage:第 1 列第 0 行的元素 default:0 |
| `m11?` | `number` | usage:第 1 列第 1 行的元素 default:1 |
| `m12?` | `number` | usage:第 1 列第 2 行的元素 default:0 |
| `m13?` | `number` | usage:第 1 列第 3 行的元素 default:0 |
| `m20?` | `number` | usage:第 2 列第 0 行的元素 default:0 |
| `m21?` | `number` | usage:第 2 列第 1 行的元素 default:0 |
| `m22?` | `number` | usage:第 2 列第 2 行的元素 default:1 |
| `m23?` | `number` | usage:第 2 列第 3 行的元素 default:0 |
| `m30?` | `number` | usage:第 3 列第 0 行的元素 default:0 |
| `m31?` | `number` | usage:第 3 列第 1 行的元素 default:0 |
| `m32?` | `number` | usage:第 3 列第 2 行的元素 default:0 |
| `m33?` | `number` | usage:第 3 列第 3 行的元素 default:1 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1792

---

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前矩阵是否与指定矩阵相等。

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                  | Description      |
| :------ | :------------------------------------ | :--------------- |
| `other` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:比对的矩阵 |

#### Returns

`boolean`

返回矩阵比对的结果

#### Defined in

Type/index.d.ts:1824

---

### subtract

▸ **subtract**(`mat`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                                  | Description      |
| :---- | :------------------------------------ | :--------------- |
| `mat` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:相减的矩阵 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1870

---

### toString

▸ **toString**(): `string`

**`Description`**

返回当前矩阵的字符串表示。

**`Effect`**

调用端生效

#### Returns

`string`

当前矩阵的字符串表示。

#### Defined in

Type/index.d.ts:1830

---

### translate

▸ **translate**(`vec`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                            | Description      |
| :---- | :------------------------------ | :--------------- |
| `vec` | [`Vector`](Type.Type.Vector.md) | usage:转换的向量 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

this

#### Defined in

Type/index.d.ts:1891

---

### transpose

▸ **transpose**(): `void`

**`Description`**

将当前矩阵变为转置矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1845

---

### zero

▸ **zero**(): `void`

**`Description`**

将当前矩阵设为 0 矩阵。

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Type/index.d.ts:1840

---

### clone

▸ `Static` **clone**(`a`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

获得指定矩阵的拷贝

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                  | Description            |
| :--- | :------------------------------------ | :--------------------- |
| `a`  | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:被克隆的四维矩阵 |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

返回克隆的新矩阵

#### Defined in

Type/index.d.ts:1647

---

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                                  |
| :------- | :------------------------------------ | :------------------------------------------- |
| `a`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:原矩阵                                 |
| `outer?` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

求逆后的矩阵

#### Defined in

Type/index.d.ts:1715

---

### transformAffine

▸ `Static` **transformAffine**(`m`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向量仿射变换

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                               |
| :------- | :------------------------------------ | :---------------------------------------- |
| `m`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:四维矩阵                            |
| `a`      | [`Vector`](Type.Type.Vector.md)       | usage:三维向量                            |
| `outer?` | [`Vector`](Type.Type.Vector.md)       | usage:接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

仿射变换后得到的向量

#### Defined in

Type/index.d.ts:1677

---

### transformAffine4

▸ `Static` **transformAffine4**(`m`, `a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

四维向量仿射变换

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `m`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:四维矩阵                             |
| `a`      | [`Vector4`](Type.Type.Vector4.md)     | usage:四维向量                             |
| `outer?` | [`Vector4`](Type.Type.Vector4.md)     | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

仿射变换后得到的四维向量

#### Defined in

Type/index.d.ts:1697

---

### transformVector

▸ `Static` **transformVector**(`m`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向量与四维矩阵乘法，默认向量第四位为 0。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                               |
| :------- | :------------------------------------ | :---------------------------------------- |
| `m`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:被乘的四维矩阵                      |
| `a`      | [`Vector`](Type.Type.Vector.md)       | usage:乘以矩阵的三维向量                  |
| `outer?` | [`Vector`](Type.Type.Vector.md)       | usage:接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

转化后得到的向量

#### Defined in

Type/index.d.ts:1667

---

### transformVector2

▸ `Static` **transformVector2**(`m`, `a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector2 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `m`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:被乘的四维矩阵                       |
| `a`      | [`Vector2`](Type.Type.Vector2.md)     | usage:乘以矩阵的二维向量                   |
| `outer?` | [`Vector2`](Type.Type.Vector2.md)     | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回变换后的新二维向量

#### Defined in

Type/index.d.ts:1657

---

### transformVector4

▸ `Static` **transformVector4**(`m`, `a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

四维向量与四维矩阵乘法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                                |
| :------- | :------------------------------------ | :----------------------------------------- |
| `m`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:被乘的四维矩阵                       |
| `a`      | [`Vector4`](Type.Type.Vector4.md)     | usage:乘以矩阵的四维向量                   |
| `outer?` | [`Vector4`](Type.Type.Vector4.md)     | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

转换后得到的四维向量

#### Defined in

Type/index.d.ts:1687

---

### transpose

▸ `Static` **transpose**(`a`, `outer?`): [`Matrix4x4`](Type.Type.Matrix4x4.md)

**`Description`**

转置矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                                  |
| :------- | :------------------------------------ | :------------------------------------------- |
| `a`      | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:被转置的原矩阵                         |
| `outer?` | [`Matrix4x4`](Type.Type.Matrix4x4.md) | usage:接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](Type.Type.Matrix4x4.md)

转置矩阵

#### Defined in

Type/index.d.ts:1706
