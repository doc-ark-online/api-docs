[Type](../modules/Type.Type.md) / Matrix4x4

# Matrix4x4 <Badge type="tip" text="Class" /> 

**`Description`**

四维矩阵

::: warning Precautions

列矩阵

:::

## Table of contents

| Properties |
| :-----|
| **[m00](Type.Matrix4x4.md#m00)**: `number` <br> 矩阵第 0 列第 0 行的元素。|
| **[m01](Type.Matrix4x4.md#m01)**: `number` <br> 矩阵第 0 列第 1 行的元素。|
| **[m02](Type.Matrix4x4.md#m02)**: `number` <br> 矩阵第 0 列第 2 行的元素。|
| **[m03](Type.Matrix4x4.md#m03)**: `number` <br> 矩阵第 0 列第 3 行的元素。|
| **[m10](Type.Matrix4x4.md#m10)**: `number` <br> 矩阵第 1 列第 0 行的元素。|
| **[m11](Type.Matrix4x4.md#m11)**: `number` <br> 矩阵第 1 列第 1 行的元素。|
| **[m12](Type.Matrix4x4.md#m12)**: `number` <br> 矩阵第 1 列第 2 行的元素。|
| **[m13](Type.Matrix4x4.md#m13)**: `number` <br> 矩阵第 1 列第 3 行的元素。|
| **[m20](Type.Matrix4x4.md#m20)**: `number` <br> 矩阵第 2 列第 0 行的元素。|
| **[m21](Type.Matrix4x4.md#m21)**: `number` <br> 矩阵第 2 列第 1 行的元素。|
| **[m22](Type.Matrix4x4.md#m22)**: `number` <br> 矩阵第 2 列第 2 行的元素。|
| **[m23](Type.Matrix4x4.md#m23)**: `number` <br> 矩阵第 2 列第 3 行的元素。|
| **[m30](Type.Matrix4x4.md#m30)**: `number` <br> 矩阵第 3 列第 0 行的元素。|
| **[m31](Type.Matrix4x4.md#m31)**: `number` <br> 矩阵第 3 列第 1 行的元素。|
| **[m32](Type.Matrix4x4.md#m32)**: `number` <br> 矩阵第 3 列第 2 行的元素。|
| **[m33](Type.Matrix4x4.md#m33)**: `number` <br> 矩阵第 3 列第 3 行的元素。|

| Accessors |
| :-----|
| **[identity](Type.Matrix4x4.md#identity)**(): `void` <br> 将当前矩阵设为单位矩阵。|

| Methods |
| :-----|
| **[add](Type.Matrix4x4.md#add)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。|
| **[clone](Type.Matrix4x4.md#clone)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 获得指定矩阵的拷贝|
| **[determinant](Type.Matrix4x4.md#determinant)**(): `number` <br> 计算当前矩阵的行列式。|
| **[equals](Type.Matrix4x4.md#equals)**([`Matrix4x4`](Type.Matrix4x4.md), `number`): `boolean` <br> 判断当前矩阵是否在误差范围内与指定矩阵相等。|
| **[fromQuaternion](Type.Matrix4x4.md#fromquaternion)**([`Quaternion`](Type.Quaternion.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。|
| **[fromRTS](Type.Matrix4x4.md#fromrts)**([`Quaternion`](Type.Quaternion.md), [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。|
| **[getRotation](Type.Matrix4x4.md#getrotation)**([`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。|
| **[getScale](Type.Matrix4x4.md#getscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。|
| **[getTranslation](Type.Matrix4x4.md#gettranslation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。|
| **[identity](Type.Matrix4x4.md#identity-1)**(): `void` <br> 将当前矩阵设为单位矩阵。|
| **[invert](Type.Matrix4x4.md#invert)**([`Matrix4x4`](Type.Matrix4x4.md), [`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[multiply](Type.Matrix4x4.md#multiply)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。|
| **[rotate](Type.Matrix4x4.md#rotate)**([`Vector`](Type.Vector.md), `number`, `number`): [`Matrix4x4`](Type.Matrix4x4.md) <br> 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。|
| **[scale](Type.Matrix4x4.md#scale)**([`Vector`](Type.Vector.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。|
| **[set](Type.Matrix4x4.md#set)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 设置当前矩阵使其与指定矩阵相等。|
| **[strictEquals](Type.Matrix4x4.md#strictequals)**([`Matrix4x4`](Type.Matrix4x4.md)): `boolean` <br> 判断当前矩阵是否与指定矩阵相等。|
| **[subtract](Type.Matrix4x4.md#subtract)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。|
| **[toString](Type.Matrix4x4.md#tostring)**(): `string` <br> 返回当前矩阵的字符串表示。|
| **[translate](Type.Matrix4x4.md#translate)**([`Vector`](Type.Vector.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。|
| **[transpose](Type.Matrix4x4.md#transpose)**([`Matrix4x4`](Type.Matrix4x4.md), [`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 转置矩阵|
| **[zero](Type.Matrix4x4.md#zero)**(): `void` <br> 将当前矩阵设为 0矩阵。|
| **[clone](Type.Matrix4x4.md#clone-1)**([`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 获得指定矩阵的拷贝|
| **[invert](Type.Matrix4x4.md#invert-1)**([`Matrix4x4`](Type.Matrix4x4.md), [`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[transformAffine](Type.Matrix4x4.md#transformaffine)**([`Matrix4x4`](Type.Matrix4x4.md), [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 向量仿射变换|
| **[transformAffine4](Type.Matrix4x4.md#transformaffine4)**([`Matrix4x4`](Type.Matrix4x4.md), [`Vector4`](Type.Vector4.md), [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 四维向量仿射变换|
| **[transformVector](Type.Matrix4x4.md#transformvector)**([`Matrix4x4`](Type.Matrix4x4.md), [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 向量与四维矩阵乘法，默认向量第四位为 0。|
| **[transformVector2](Type.Matrix4x4.md#transformvector2)**([`Matrix4x4`](Type.Matrix4x4.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。|
| **[transformVector4](Type.Matrix4x4.md#transformvector4)**([`Matrix4x4`](Type.Matrix4x4.md), [`Vector4`](Type.Vector4.md), [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 四维向量与四维矩阵乘法|
| **[transpose](Type.Matrix4x4.md#transpose-1)**([`Matrix4x4`](Type.Matrix4x4.md), [`Matrix4x4`](Type.Matrix4x4.md)): [`Matrix4x4`](Type.Matrix4x4.md) <br> 转置矩阵|

**`Description`**

用给定的 other 构建一个新的 Matrix4x4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](Type.Matrix4x4.md) | 给定的 Matrix4x4 对象 |

• **new Matrix4x4**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`)

**`Description`**

用给定的元素构建一个新的 Matrix4x4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m00?` | `number` | 第 0 列第 0 行的元素 default:1 |
| `m01?` | `number` | 第 0 列第 1 行的元素 default:0 |
| `m02?` | `number` | 第 0 列第 2 行的元素 default:0 |
| `m03?` | `number` | 第 0 列第 3 行的元素 default:0 |
| `m10?` | `number` | 第 1 列第 0 行的元素 default:0 |
| `m11?` | `number` | 第 1 列第 1 行的元素 default:1 |
| `m12?` | `number` | 第 1 列第 2 行的元素 default:0 |
| `m13?` | `number` | 第 1 列第 3 行的元素 default:0 |
| `m20?` | `number` | 第 2 列第 0 行的元素 default:0 |
| `m21?` | `number` | 第 2 列第 1 行的元素 default:0 |
| `m22?` | `number` | 第 2 列第 2 行的元素 default:1 |
| `m23?` | `number` | 第 2 列第 3 行的元素 default:0 |
| `m30?` | `number` | 第 3 列第 0 行的元素 default:0 |
| `m31?` | `number` | 第 3 列第 1 行的元素 default:0 |
| `m32?` | `number` | 第 3 列第 2 行的元素 default:0 |
| `m33?` | `number` | 第 3 列第 3 行的元素 default:1 |

## Properties

### m00  

• **m00**: `number`

**`Description`**

矩阵第 0 列第 0 行的元素。

___

### m01  

• **m01**: `number`

**`Description`**

矩阵第 0 列第 1 行的元素。

___

### m02  

• **m02**: `number`

**`Description`**

矩阵第 0 列第 2 行的元素。

___

### m03  

• **m03**: `number`

**`Description`**

矩阵第 0 列第 3 行的元素。

___

### m10  

• **m10**: `number`

**`Description`**

矩阵第 1 列第 0 行的元素。

___

### m11  

• **m11**: `number`

**`Description`**

矩阵第 1 列第 1 行的元素。

___

### m12  

• **m12**: `number`

**`Description`**

矩阵第 1 列第 2 行的元素。

___

### m13  

• **m13**: `number`

**`Description`**

矩阵第 1 列第 3 行的元素。

___

### m20  

• **m20**: `number`

**`Description`**

矩阵第 2 列第 0 行的元素。

___

### m21  

• **m21**: `number`

**`Description`**

矩阵第 2 列第 1 行的元素。

___

### m22  

• **m22**: `number`

**`Description`**

矩阵第 2 列第 2 行的元素。

___

### m23  

• **m23**: `number`

**`Description`**

矩阵第 2 列第 3 行的元素。

___

### m30  

• **m30**: `number`

**`Description`**

矩阵第 3 列第 0 行的元素。

___

### m31  

• **m31**: `number`

**`Description`**

矩阵第 3 列第 1 行的元素。

___

### m32  

• **m32**: `number`

**`Description`**

矩阵第 3 列第 2 行的元素。

___

### m33  

• **m33**: `number`

**`Description`**

矩阵第 3 列第 3 行的元素。

## Accessors

### identity  

• `Static` `get` **identity**(): [`Matrix4x4`](Type.Matrix4x4.md)

**`Description`**

获得一个默认矩阵

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

## Methods

### add  

▸ **add**(`mat`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](Type.Matrix4x4.md) | 相加的矩阵 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### clone  

▸ **clone**(): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

克隆当前矩阵。


#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

新的 Matrix4x4 对象

___

### determinant  

▸ **determinant**(): `number` <Badge type="tip" text="other" />

**`Description`**

计算当前矩阵的行列式。


#### Returns

`number`

当前矩阵的行列式。

___

### equals  

▸ **equals**(`other`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

**`Description`**

判断当前矩阵是否在误差范围内与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](Type.Matrix4x4.md) | 比对的矩阵 |
| `epsilon?` | `number` | 误差值 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

返回矩阵比对的结果

___

### fromQuaternion  

▸ **fromQuaternion**(`q`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

重置当前矩阵的值，使其表示指定四元数表示的旋转变换。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Quaternion.md) | 旋转数据的四元数 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### fromRTS  

▸ **fromRTS**(`q`, `v`, `s`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Quaternion.md) | 旋转数据的四元数 |
| `v` | [`Vector`](Type.Vector.md) | 位移数据的向量 |
| `s` | [`Vector`](Type.Vector.md) | 缩放数据的向量 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### getRotation  

▸ **getRotation**(`outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

**`Description`**

从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收旋转数据的 Quaternion 对象, default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

记录旋转数据的Quaternion 对象

___

### getScale  

▸ **getScale**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收缩放数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

缩放数据

___

### getTranslation  

▸ **getTranslation**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收位移数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

位移数据

___

### identity  

▸ **identity**(): `void` <Badge type="tip" text="other" />

**`Description`**

将当前矩阵设为单位矩阵。



___

### invert  

▸ **invert**(): `void` <Badge type="tip" text="other" />

**`Description`**

将当前矩阵变为逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。



___

### multiply  

▸ **multiply**(`mat`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](Type.Matrix4x4.md) | 相乘的矩阵 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

▸ **multiply**(`scalar`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 对矩阵整体缩放的数 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### rotate  

▸ **rotate**(`axis`, `rad`, `epsilon?`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector`](Type.Vector.md) | 绕的旋转轴 |
| `rad` | `number` | 旋转的弧度 |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### scale  

▸ **scale**(`vec`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](Type.Vector.md) | 缩放矩阵的向量 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### set  

▸ **set**(`other`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

设置当前矩阵使其与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](Type.Matrix4x4.md) | 矩阵数据 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

▸ **set**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

设置当前矩阵指定元素值。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m00?` | `number` | 第 0 列第 0 行的元素 default:1 |
| `m01?` | `number` | 第 0 列第 1 行的元素 default:0 |
| `m02?` | `number` | 第 0 列第 2 行的元素 default:0 |
| `m03?` | `number` | 第 0 列第 3 行的元素 default:0 |
| `m10?` | `number` | 第 1 列第 0 行的元素 default:0 |
| `m11?` | `number` | 第 1 列第 1 行的元素 default:1 |
| `m12?` | `number` | 第 1 列第 2 行的元素 default:0 |
| `m13?` | `number` | 第 1 列第 3 行的元素 default:0 |
| `m20?` | `number` | 第 2 列第 0 行的元素 default:0 |
| `m21?` | `number` | 第 2 列第 1 行的元素 default:0 |
| `m22?` | `number` | 第 2 列第 2 行的元素 default:1 |
| `m23?` | `number` | 第 2 列第 3 行的元素 default:0 |
| `m30?` | `number` | 第 3 列第 0 行的元素 default:0 |
| `m31?` | `number` | 第 3 列第 1 行的元素 default:0 |
| `m32?` | `number` | 第 3 列第 2 行的元素 default:0 |
| `m33?` | `number` | 第 3 列第 3 行的元素 default:1 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### strictEquals  

▸ **strictEquals**(`other`): `boolean` <Badge type="tip" text="other" />

**`Description`**

判断当前矩阵是否与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](Type.Matrix4x4.md) | 比对的矩阵 |

#### Returns

`boolean`

返回矩阵比对的结果

___

### subtract  

▸ **subtract**(`mat`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](Type.Matrix4x4.md) | 相减的矩阵 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### toString  

▸ **toString**(): `string` <Badge type="tip" text="other" />

**`Description`**

返回当前矩阵的字符串表示。


#### Returns

`string`

当前矩阵的字符串表示。

___

### translate  

▸ **translate**(`vec`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](Type.Vector.md) | 转换的向量 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

this

___

### transpose  

▸ **transpose**(): `void` <Badge type="tip" text="other" />

**`Description`**

将当前矩阵变为转置矩阵。



___

### zero  

▸ **zero**(): `void` <Badge type="tip" text="other" />

**`Description`**

将当前矩阵设为 0矩阵。



___

### clone  

▸ `Static` **clone**(`a`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

获得指定矩阵的拷贝


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](Type.Matrix4x4.md) | 被克隆的四维矩阵 |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

返回克隆的新矩阵

___

### invert  

▸ `Static` **invert**(`a`, `outer?`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](Type.Matrix4x4.md) | 原矩阵 |
| `outer?` | [`Matrix4x4`](Type.Matrix4x4.md) | 接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

求逆后的矩阵

___

### transformAffine  

▸ `Static` **transformAffine**(`m`, `a`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

向量仿射变换


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](Type.Matrix4x4.md) | 四维矩阵 |
| `a` | [`Vector`](Type.Vector.md) | 三维向量 |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

仿射变换后得到的向量

___

### transformAffine4  

▸ `Static` **transformAffine4**(`m`, `a`, `outer?`): [`Vector4`](Type.Vector4.md) <Badge type="tip" text="other" />

**`Description`**

四维向量仿射变换


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](Type.Matrix4x4.md) | 四维矩阵 |
| `a` | [`Vector4`](Type.Vector4.md) | 四维向量 |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

仿射变换后得到的四维向量

___

### transformVector  

▸ `Static` **transformVector**(`m`, `a`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

向量与四维矩阵乘法，默认向量第四位为 0。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](Type.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector`](Type.Vector.md) | 乘以矩阵的三维向量 |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

转化后得到的向量

___

### transformVector2  

▸ `Static` **transformVector2**(`m`, `a`, `outer?`): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="other" />

**`Description`**

向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector2 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](Type.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector2`](Type.Vector2.md) | 乘以矩阵的二维向量 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

返回变换后的新二维向量

___

### transformVector4  

▸ `Static` **transformVector4**(`m`, `a`, `outer?`): [`Vector4`](Type.Vector4.md) <Badge type="tip" text="other" />

**`Description`**

四维向量与四维矩阵乘法


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](Type.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector4`](Type.Vector4.md) | 乘以矩阵的四维向量 |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

转换后得到的四维向量

___

### transpose  

▸ `Static` **transpose**(`a`, `outer?`): [`Matrix4x4`](Type.Matrix4x4.md) <Badge type="tip" text="other" />

**`Description`**

转置矩阵


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](Type.Matrix4x4.md) | 被转置的原矩阵 |
| `outer?` | [`Matrix4x4`](Type.Matrix4x4.md) | 接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](Type.Matrix4x4.md)

转置矩阵
