[Type](../groups/Core.Type.md) / Matrix4x4

# Matrix4x4 <Badge type="tip" text="Class" /> <Score text="Matrix4x4" />

四维矩阵

::: warning Precautions

列矩阵

:::

## Table of contents

| Properties |
| :-----|
| **[m00](mw.Matrix4x4.md#m00)**: `number` <br> 矩阵第 0 列第 0 行的元素。|
| **[m01](mw.Matrix4x4.md#m01)**: `number` <br> 矩阵第 0 列第 1 行的元素。|
| **[m02](mw.Matrix4x4.md#m02)**: `number` <br> 矩阵第 0 列第 2 行的元素。|
| **[m03](mw.Matrix4x4.md#m03)**: `number` <br> 矩阵第 0 列第 3 行的元素。|
| **[m10](mw.Matrix4x4.md#m10)**: `number` <br> 矩阵第 1 列第 0 行的元素。|
| **[m11](mw.Matrix4x4.md#m11)**: `number` <br> 矩阵第 1 列第 1 行的元素。|
| **[m12](mw.Matrix4x4.md#m12)**: `number` <br> 矩阵第 1 列第 2 行的元素。|
| **[m13](mw.Matrix4x4.md#m13)**: `number` <br> 矩阵第 1 列第 3 行的元素。|
| **[m20](mw.Matrix4x4.md#m20)**: `number` <br> 矩阵第 2 列第 0 行的元素。|
| **[m21](mw.Matrix4x4.md#m21)**: `number` <br> 矩阵第 2 列第 1 行的元素。|
| **[m22](mw.Matrix4x4.md#m22)**: `number` <br> 矩阵第 2 列第 2 行的元素。|
| **[m23](mw.Matrix4x4.md#m23)**: `number` <br> 矩阵第 2 列第 3 行的元素。|
| **[m30](mw.Matrix4x4.md#m30)**: `number` <br> 矩阵第 3 列第 0 行的元素。|
| **[m31](mw.Matrix4x4.md#m31)**: `number` <br> 矩阵第 3 列第 1 行的元素。|
| **[m32](mw.Matrix4x4.md#m32)**: `number` <br> 矩阵第 3 列第 2 行的元素。|
| **[m33](mw.Matrix4x4.md#m33)**: `number` <br> 矩阵第 3 列第 3 行的元素。|

| Accessors |
| :-----|
| **[identity](mw.Matrix4x4.md#identity)**(): `void` <br> 将当前矩阵设为单位矩阵。|

| Methods |
| :-----|
| **[add](mw.Matrix4x4.md#add)**(`mat`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。|
| **[clone](mw.Matrix4x4.md#clone)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 获得指定矩阵的拷贝|
| **[determinant](mw.Matrix4x4.md#determinant)**(): `number` <br> 计算当前矩阵的行列式。|
| **[equals](mw.Matrix4x4.md#equals)**(`other`: [`Matrix4x4`](mw.Matrix4x4.md), `epsilon?`: `number`): `boolean` <br> 判断当前矩阵是否在误差范围内与指定矩阵相等。|
| **[fromQuaternion](mw.Matrix4x4.md#fromquaternion)**(`q`: [`Quaternion`](mw.Quaternion.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。|
| **[fromRTS](mw.Matrix4x4.md#fromrts)**(`q`: [`Quaternion`](mw.Quaternion.md), `v`: [`Vector`](mw.Vector.md), `s`: [`Vector`](mw.Vector.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。|
| **[getRotation](mw.Matrix4x4.md#getrotation)**(`outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md) <br> 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。|
| **[getScale](mw.Matrix4x4.md#getscale)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。|
| **[getTranslation](mw.Matrix4x4.md#gettranslation)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。|
| **[identity](mw.Matrix4x4.md#identity-1)**(): `void` <br> 将当前矩阵设为单位矩阵。|
| **[invert](mw.Matrix4x4.md#invert)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[multiply](mw.Matrix4x4.md#multiply)**(`mat`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。|
| **[rotate](mw.Matrix4x4.md#rotate)**(`axis`: [`Vector`](mw.Vector.md), `rad`: `number`, `epsilon?`: `number`): [`Matrix4x4`](mw.Matrix4x4.md) <br> 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。|
| **[scale](mw.Matrix4x4.md#scale)**(`vec`: [`Vector`](mw.Vector.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。|
| **[set](mw.Matrix4x4.md#set)**(`other`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 设置当前矩阵使其与指定矩阵相等。|
| **[strictEquals](mw.Matrix4x4.md#strictequals)**(`other`: [`Matrix4x4`](mw.Matrix4x4.md)): `boolean` <br> 判断当前矩阵是否与指定矩阵相等。|
| **[subtract](mw.Matrix4x4.md#subtract)**(`mat`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。|
| **[toString](mw.Matrix4x4.md#tostring)**(): `string` <br> 返回当前矩阵的字符串表示。|
| **[translate](mw.Matrix4x4.md#translate)**(`vec`: [`Vector`](mw.Vector.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。|
| **[transpose](mw.Matrix4x4.md#transpose)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 转置矩阵|
| **[zero](mw.Matrix4x4.md#zero)**(): `void` <br> 将当前矩阵设为 0矩阵。|
| **[clone](mw.Matrix4x4.md#clone-1)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 获得指定矩阵的拷贝|
| **[invert](mw.Matrix4x4.md#invert-1)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[transformAffine](mw.Matrix4x4.md#transformaffine)**(`m`: [`Matrix4x4`](mw.Matrix4x4.md), `a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 向量仿射变换|
| **[transformAffine4](mw.Matrix4x4.md#transformaffine4)**(`m`: [`Matrix4x4`](mw.Matrix4x4.md), `a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md) <br> 四维向量仿射变换|
| **[transformVector](mw.Matrix4x4.md#transformvector)**(`m`: [`Matrix4x4`](mw.Matrix4x4.md), `a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 向量与四维矩阵乘法，默认向量第四位为 0。|
| **[transformVector2](mw.Matrix4x4.md#transformvector2)**(`m`: [`Matrix4x4`](mw.Matrix4x4.md), `a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md) <br> 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。|
| **[transformVector4](mw.Matrix4x4.md#transformvector4)**(`m`: [`Matrix4x4`](mw.Matrix4x4.md), `a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md) <br> 四维向量与四维矩阵乘法|
| **[transpose](mw.Matrix4x4.md#transpose-1)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix4x4`](mw.Matrix4x4.md)): [`Matrix4x4`](mw.Matrix4x4.md) <br> 转置矩阵|

用给定的 other 构建一个新的 Matrix4x4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](mw.Matrix4x4.md) | 给定的 Matrix4x4 对象 |

• **new Matrix4x4**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`)

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

### m00 <Score text="m" /> 

• **m00**: `number`

矩阵第 0 列第 0 行的元素。

___

### m01 <Score text="m" /> 

• **m01**: `number`

矩阵第 0 列第 1 行的元素。

___

### m02 <Score text="m" /> 

• **m02**: `number`

矩阵第 0 列第 2 行的元素。

___

### m03 <Score text="m" /> 

• **m03**: `number`

矩阵第 0 列第 3 行的元素。

___

### m10 <Score text="m" /> 

• **m10**: `number`

矩阵第 1 列第 0 行的元素。

___

### m11 <Score text="m" /> 

• **m11**: `number`

矩阵第 1 列第 1 行的元素。

___

### m12 <Score text="m" /> 

• **m12**: `number`

矩阵第 1 列第 2 行的元素。

___

### m13 <Score text="m" /> 

• **m13**: `number`

矩阵第 1 列第 3 行的元素。

___

### m20 <Score text="m" /> 

• **m20**: `number`

矩阵第 2 列第 0 行的元素。

___

### m21 <Score text="m" /> 

• **m21**: `number`

矩阵第 2 列第 1 行的元素。

___

### m22 <Score text="m" /> 

• **m22**: `number`

矩阵第 2 列第 2 行的元素。

___

### m23 <Score text="m" /> 

• **m23**: `number`

矩阵第 2 列第 3 行的元素。

___

### m30 <Score text="m" /> 

• **m30**: `number`

矩阵第 3 列第 0 行的元素。

___

### m31 <Score text="m" /> 

• **m31**: `number`

矩阵第 3 列第 1 行的元素。

___

### m32 <Score text="m" /> 

• **m32**: `number`

矩阵第 3 列第 2 行的元素。

___

### m33 <Score text="m" /> 

• **m33**: `number`

矩阵第 3 列第 3 行的元素。

## Accessors

### identity <Score text="identity" /> 

• `Static` `get` **identity**(): [`Matrix4x4`](mw.Matrix4x4.md)

获得一个默认矩阵

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

## Methods

### add <Score text="add" /> 

• **add**(`mat`): [`Matrix4x4`](mw.Matrix4x4.md) 

矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](mw.Matrix4x4.md) | 相加的矩阵 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### clone <Score text="clone" /> 

• **clone**(): [`Matrix4x4`](mw.Matrix4x4.md) 

克隆当前矩阵。


#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

新的 Matrix4x4 对象

___

### determinant <Score text="determinant" /> 

• **determinant**(): `number` 

计算当前矩阵的行列式。


#### Returns

`number`

当前矩阵的行列式。

___

### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean` 

判断当前矩阵是否在误差范围内与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](mw.Matrix4x4.md) | 比对的矩阵 |
| `epsilon?` | `number` | 误差值 default:MathUtil.EPSILON |

#### Returns

`boolean`

返回矩阵比对的结果

___

### fromQuaternion <Score text="fromQuaternion" /> 

• **fromQuaternion**(`q`): [`Matrix4x4`](mw.Matrix4x4.md) 

重置当前矩阵的值，使其表示指定四元数表示的旋转变换。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](mw.Quaternion.md) | 旋转数据的四元数 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### fromRTS <Score text="fromRTS" /> 

• **fromRTS**(`q`, `v`, `s`): [`Matrix4x4`](mw.Matrix4x4.md) 

重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](mw.Quaternion.md) | 旋转数据的四元数 |
| `v` | [`Vector`](mw.Vector.md) | 位移数据的向量 |
| `s` | [`Vector`](mw.Vector.md) | 缩放数据的向量 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### getRotation <Score text="getRotation" /> 

• **getRotation**(`outer?`): [`Quaternion`](mw.Quaternion.md) 

从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Quaternion`](mw.Quaternion.md) | 接收旋转数据的 Quaternion 对象, default:null |

#### Returns

[`Quaternion`](mw.Quaternion.md)

记录旋转数据的Quaternion 对象

___

### getScale <Score text="getScale" /> 

• **getScale**(`outer?`): [`Vector`](mw.Vector.md) 

从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](mw.Vector.md) | 接收缩放数据的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

缩放数据

___

### getTranslation <Score text="getTranslation" /> 

• **getTranslation**(`outer?`): [`Vector`](mw.Vector.md) 

从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](mw.Vector.md) | 接收位移数据的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

位移数据

___

### identity <Score text="identity" /> 

• **identity**(): `void` 

将当前矩阵设为单位矩阵。



___

### invert <Score text="invert" /> 

• **invert**(): `void` 

将当前矩阵变为逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。



___

### multiply <Score text="multiply" /> 

• **multiply**(`mat`): [`Matrix4x4`](mw.Matrix4x4.md) 

矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](mw.Matrix4x4.md) | 相乘的矩阵 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

• **multiply**(`scalar`): [`Matrix4x4`](mw.Matrix4x4.md) 

矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | 对矩阵整体缩放的数 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### rotate <Score text="rotate" /> 

• **rotate**(`axis`, `rad`, `epsilon?`): [`Matrix4x4`](mw.Matrix4x4.md) 

将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector`](mw.Vector.md) | 绕的旋转轴 |
| `rad` | `number` | 旋转的弧度 |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### scale <Score text="scale" /> 

• **scale**(`vec`): [`Matrix4x4`](mw.Matrix4x4.md) 

将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](mw.Vector.md) | 缩放矩阵的向量 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### set <Score text="set" /> 

• **set**(`other`): [`Matrix4x4`](mw.Matrix4x4.md) 

设置当前矩阵使其与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](mw.Matrix4x4.md) | 矩阵数据 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

• **set**(`m00?`, `m01?`, `m02?`, `m03?`, `m10?`, `m11?`, `m12?`, `m13?`, `m20?`, `m21?`, `m22?`, `m23?`, `m30?`, `m31?`, `m32?`, `m33?`): [`Matrix4x4`](mw.Matrix4x4.md) 

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

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` 

判断当前矩阵是否与指定矩阵相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix4x4`](mw.Matrix4x4.md) | 比对的矩阵 |

#### Returns

`boolean`

返回矩阵比对的结果

___

### subtract <Score text="subtract" /> 

• **subtract**(`mat`): [`Matrix4x4`](mw.Matrix4x4.md) 

计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix4x4`](mw.Matrix4x4.md) | 相减的矩阵 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### toString <Score text="toString" /> 

• **toString**(): `string` 

返回当前矩阵的字符串表示。


#### Returns

`string`

当前矩阵的字符串表示。

___

### translate <Score text="translate" /> 

• **translate**(`vec`): [`Matrix4x4`](mw.Matrix4x4.md) 

将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](mw.Vector.md) | 转换的向量 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

this

___

### transpose <Score text="transpose" /> 

• **transpose**(): `void` 

将当前矩阵变为转置矩阵。



___

### zero <Score text="zero" /> 

• **zero**(): `void` 

将当前矩阵设为 0矩阵。



___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Matrix4x4`](mw.Matrix4x4.md) 

获得指定矩阵的拷贝


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](mw.Matrix4x4.md) | 被克隆的四维矩阵 |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

返回克隆的新矩阵

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Matrix4x4`](mw.Matrix4x4.md) 

矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](mw.Matrix4x4.md) | 原矩阵 |
| `outer?` | [`Matrix4x4`](mw.Matrix4x4.md) | 接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

求逆后的矩阵

___

### transformAffine <Score text="transformAffine" /> 

• `Static` **transformAffine**(`m`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

向量仿射变换


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](mw.Matrix4x4.md) | 四维矩阵 |
| `a` | [`Vector`](mw.Vector.md) | 三维向量 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

仿射变换后得到的向量

___

### transformAffine4 <Score text="transformAffine" /> 

• `Static` **transformAffine4**(`m`, `a`, `outer?`): [`Vector4`](mw.Vector4.md) 

四维向量仿射变换


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](mw.Matrix4x4.md) | 四维矩阵 |
| `a` | [`Vector4`](mw.Vector4.md) | 四维向量 |
| `outer?` | [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](mw.Vector4.md)

仿射变换后得到的四维向量

___

### transformVector <Score text="transformVector" /> 

• `Static` **transformVector**(`m`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

向量与四维矩阵乘法，默认向量第四位为 0。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](mw.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector`](mw.Vector.md) | 乘以矩阵的三维向量 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

转化后得到的向量

___

### transformVector2 <Score text="transformVector" /> 

• `Static` **transformVector2**(`m`, `a`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector2 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](mw.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector2`](mw.Vector2.md) | 乘以矩阵的二维向量 |
| `outer?` | [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](mw.Vector2.md)

返回变换后的新二维向量

___

### transformVector4 <Score text="transformVector" /> 

• `Static` **transformVector4**(`m`, `a`, `outer?`): [`Vector4`](mw.Vector4.md) 

四维向量与四维矩阵乘法


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix4x4`](mw.Matrix4x4.md) | 被乘的四维矩阵 |
| `a` | [`Vector4`](mw.Vector4.md) | 乘以矩阵的四维向量 |
| `outer?` | [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](mw.Vector4.md)

转换后得到的四维向量

___

### transpose <Score text="transpose" /> 

• `Static` **transpose**(`a`, `outer?`): [`Matrix4x4`](mw.Matrix4x4.md) 

转置矩阵


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix4x4 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Matrix4x4`](mw.Matrix4x4.md) | 被转置的原矩阵 |
| `outer?` | [`Matrix4x4`](mw.Matrix4x4.md) | 接收结果的 Matrix4x4 对象 default:null |

#### Returns

[`Matrix4x4`](mw.Matrix4x4.md)

转置矩阵
