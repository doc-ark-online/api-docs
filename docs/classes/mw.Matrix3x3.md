[基础类型](../groups/基础类型.基础类型.md) / Matrix3x3

# Matrix3x3 <Badge type="tip" text="Class" /> <Score text="Matrix3x3" />

三维矩阵

-------------------

::: warning Precautions

列矩阵

:::

## Table of contents

### Properties <Score text="Properties" /> 
| **[m00](mw.Matrix3x3.md#m00)**: `number`  |
| :-----|
| 矩阵第 0 列第 0 行的元素。|
| **[m01](mw.Matrix3x3.md#m01)**: `number`  |
| 矩阵第 0 列第 1 行的元素。|
| **[m02](mw.Matrix3x3.md#m02)**: `number`  |
| 矩阵第 0 列第 2 行的元素。|
| **[m10](mw.Matrix3x3.md#m10)**: `number`  |
| 矩阵第 1 列第 0 行的元素。|
| **[m11](mw.Matrix3x3.md#m11)**: `number`  |
| 矩阵第 1 列第 1 行的元素。|
| **[m12](mw.Matrix3x3.md#m12)**: `number`  |
| 矩阵第 1 列第 2 行的元素。|
| **[m20](mw.Matrix3x3.md#m20)**: `number`  |
| 矩阵第 2 列第 0 行的元素。|
| **[m21](mw.Matrix3x3.md#m21)**: `number`  |
| 矩阵第 2 列第 1 行的元素。|
| **[m22](mw.Matrix3x3.md#m22)**: `number`  |
| 矩阵第 2 列第 2 行的元素。|

### Accessors <Score text="Accessors" /> 
| **[identity](mw.Matrix3x3.md#identity)**(): `void`   |
| :-----|
| 将当前矩阵设为单位矩阵。|

### Methods <Score text="Methods" /> 
| **[add](mw.Matrix3x3.md#add)**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md)   |
| :-----|
| 逐元素矩阵加法|
| **[clone](mw.Matrix3x3.md#clone)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 获得指定矩阵的拷贝|
| **[determinant](mw.Matrix3x3.md#determinant)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md)): `number`   |
| 求目标矩阵行列式|
| **[equals](mw.Matrix3x3.md#equals)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md), `epsilon?`: `number`): `boolean`   |
| 排除浮点数误差的矩阵近似等价判断|
| **[identity](mw.Matrix3x3.md#identity-1)**(): `void`   |
| 将当前矩阵设为单位矩阵。|
| **[invert](mw.Matrix3x3.md#invert)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 将目标矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[multiply](mw.Matrix3x3.md#multiply)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: `number`, `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 矩阵乘法|
| **[rotate](mw.Matrix3x3.md#rotate)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `rad`: `number`, `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 在给定矩阵变换基础上加入新旋转变换|
| **[scale](mw.Matrix3x3.md#scale)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `v`: [`Vector`](mw.Vector.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 在给定矩阵变换基础上加入新缩放变换|
| **[set](mw.Matrix3x3.md#set)**(`other`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 设置当前矩阵使其与指定矩阵相等。|
| **[strictEquals](mw.Matrix3x3.md#strictequals)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md)): `boolean`   |
| 矩阵等价判断|
| **[subtract](mw.Matrix3x3.md#subtract)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 逐元素矩阵减法|
| **[toString](mw.Matrix3x3.md#tostring)**(): `string`   |
| 返回当前矩阵的字符串表示。|
| **[transpose](mw.Matrix3x3.md#transpose)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 将目标矩阵变为转置矩阵|
| **[add](mw.Matrix3x3.md#add-1)**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 逐元素矩阵加法|
| **[clone](mw.Matrix3x3.md#clone-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 获得指定矩阵的拷贝|
| **[determinant](mw.Matrix3x3.md#determinant-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md)): `number`   |
| 求目标矩阵行列式|
| **[equals](mw.Matrix3x3.md#equals-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md), `epsilon?`: `number`): `boolean`   |
| 排除浮点数误差的矩阵近似等价判断|
| **[fromMat4](mw.Matrix3x3.md#frommat4)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 取四阶矩阵的前三阶|
| **[fromRotation](mw.Matrix3x3.md#fromrotation)**(`rad`: `number`, `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 计算旋转矩阵|
| **[fromScaling](mw.Matrix3x3.md#fromscaling)**(`v`: [`Vector2`](mw.Vector2.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 计算缩放矩阵|
| **[fromTranslation](mw.Matrix3x3.md#fromtranslation)**(`v`: [`Vector2`](mw.Vector2.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 计算位移矩阵|
| **[fromViewUp](mw.Matrix3x3.md#fromviewup)**(`view`: [`Vector`](mw.Vector.md), `up?`: [`Vector`](mw.Vector.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md), `epsilon?`: `number`): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 根据视口前方向和上方向计算矩阵|
| **[inverseTransposeMat4](mw.Matrix3x3.md#inversetransposemat4)**(`a`: [`Matrix4x4`](mw.Matrix4x4.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 计算指定四阶矩阵的逆转置三维矩阵|
| **[invert](mw.Matrix3x3.md#invert-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 将目标矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。|
| **[multiply](mw.Matrix3x3.md#multiply-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: `number`, `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 矩阵乘法|
| **[rotate](mw.Matrix3x3.md#rotate-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `rad`: `number`, `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 在给定矩阵变换基础上加入新旋转变换|
| **[scale](mw.Matrix3x3.md#scale-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `v`: [`Vector`](mw.Vector.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 在给定矩阵变换基础上加入新缩放变换|
| **[strictEquals](mw.Matrix3x3.md#strictequals-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md)): `boolean`   |
| 矩阵等价判断|
| **[subtract](mw.Matrix3x3.md#subtract-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 逐元素矩阵减法|
| **[transformVector](mw.Matrix3x3.md#transformvector)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量与三维矩阵乘法|
| **[transformVector2](mw.Matrix3x3.md#transformvector2)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)   |
| 向量与三维矩阵乘法，默认向量第三位为 1。|
| **[transpose](mw.Matrix3x3.md#transpose-1)**(`a`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)   |
| 将目标矩阵变为转置矩阵|

用给定的 Matrix3x3 构建一个新的 Matrix3x3

#### Parameters

| `other` [`Matrix3x3`](mw.Matrix3x3.md) | 给定的 Matrix3x3 对象 |
| :------ | :------ |

• **new Matrix3x3**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`)

用给定的元素构建一个新的 Matrix3x3

#### Parameters

| `m00?` `number` | 第 0 列第 0 行的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |
| :------ | :------ |
| `m01?` `number` | 第 0 列第 1 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m02?` `number` | 第 0 列第 2 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m10?` `number` | 第 1 列第 0 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m11?` `number` | 第 1 列第 1 行的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |
| `m12?` `number` | 第 1 列第 2 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m20?` `number` | 第 2 列第 0 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m21?` `number` | 第 2 列第 1 行的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m22?` `number` | 第 2 列第 2 行的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |

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

## Accessors

### identity <Score text="identity" /> 

• `Static` `get` **identity**(): [`Matrix3x3`](mw.Matrix3x3.md)

获得一个默认矩阵


## Methods

### add <Score text="add" /> 

• **add**(`mat`): [`Matrix3x3`](mw.Matrix3x3.md) 

矩阵逐元素相加。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |



___

### clone <Score text="clone" /> 

• **clone**(): [`Matrix3x3`](mw.Matrix3x3.md) 

克隆当前矩阵。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 指定矩阵 |
| :------ | :------ |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 一个新的矩阵 |
| :------ | :------ |


### determinant <Score text="determinant" /> 

• **determinant**(): `number` 

计算当前矩阵的行列式。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |

#### Returns

| `number` | 行列式的结果 |
| :------ | :------ |


### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean` 

判断当前矩阵是否在误差范围内与指定矩阵相等。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `epsilon?` `number` | 误差值  <br> default: 1.e-7  <br> range: 建议传入小于 1 的值。<br> type:浮点数 |

#### Returns

| `boolean` | 返回比对结果 |
| :------ | :------ |




___

### identity <Score text="identity" /> 

• **identity**(): `void` 

将当前矩阵设为单位矩阵。


___

### invert <Score text="invert" /> 

• **invert**(): `void` 

将当前矩阵计算为其逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 写入数据的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 求逆后的矩阵 |
| :------ | :------ |

### multiply <Score text="multiply" /> 

• **multiply**(`mat`): [`Matrix3x3`](mw.Matrix3x3.md) 

矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

取四阶矩阵的前三阶，与三维矩阵相乘

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix4x4`](mw.Matrix4x4.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

矩阵标量乘法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` `number` | 数字b  <br> range: 无限制<br> type:浮点数 |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |



___

### scale <Score text="scale" /> 

• **scale**(`vec`): [`Matrix3x3`](mw.Matrix3x3.md) 

将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 三维矩阵 |
| :------ | :------ |
| `v` [`Vector`](mw.Vector.md) | 缩放矩阵的三维向量 |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 缩放后的三维矩阵 |
| :------ | :------ |



___

### set <Score text="set" /> 

• **set**(`other`): [`Matrix3x3`](mw.Matrix3x3.md) 

设置当前矩阵使其与指定矩阵相等。

#### Parameters

| `other` [`Matrix3x3`](mw.Matrix3x3.md) | 指定矩阵 |
| :------ | :------ |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | this |
| :------ | :------ |

• **set**(`m00?`, `m01?`, `m02?`, `m10?`, `m11?`, `m12?`, `m20?`, `m21?`, `m22?`): [`Matrix3x3`](mw.Matrix3x3.md) 

设置当前矩阵指定元素值。

#### Parameters

| `m00?` `number` | 第 0 行第 0 列的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |
| :------ | :------ |
| `m01?` `number` | 第 0 行第 1 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m02?` `number` | 第 0 行第 2 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m10?` `number` | 第 1 行第 0 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m11?` `number` | 第 1 行第 1 列的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |
| `m12?` `number` | 第 1 行第 2 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m20?` `number` | 第 2 行第 0 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m21?` `number` | 第 2 行第 1 列的元素  <br> default: 0<br> range:不做限制<br> type: 浮点数 |
| `m22?` `number` | 第 2 行第 2 列的元素  <br> default: 1<br> range:不做限制<br> type: 浮点数 |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | this |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` 

判断当前矩阵是否与指定矩阵相等。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |

#### Returns

| `boolean` | 返回比对结果 |
| :------ | :------ |




___

### subtract <Score text="subtract" /> 

• **subtract**(`mat`): [`Matrix3x3`](mw.Matrix3x3.md) 

当前矩阵逐元素减去参数矩阵

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |



___

### toString <Score text="toString" /> 

• **toString**(): `string` 

返回当前矩阵的字符串表示。

#### Returns

| `string` | 返回矩阵的字符串信息 |
| :------ | :------ |

___

### transpose <Score text="transpose" /> 

• **transpose**(): `void` 

将当前矩阵计算为其转置矩阵。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 写入数据的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 转置后的矩阵 |
| :------ | :------ |

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

逐元素矩阵加法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Matrix3x3`](mw.Matrix3x3.md) 

获得指定矩阵的拷贝

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 指定矩阵 |
| :------ | :------ |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 一个新的矩阵 |
| :------ | :------ |

___

### determinant <Score text="determinant" /> 

• `Static` **determinant**(`a`): `number` 

求目标矩阵行列式

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |

#### Returns

| `number` | 行列式的结果 |
| :------ | :------ |

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的矩阵近似等价判断

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `epsilon?` `number` | 误差值  <br> default: 1.e-7  <br> range: 建议传入小于 1 的值。<br> type:浮点数 |

#### Returns

| `boolean` | 返回比对结果 |
| :------ | :------ |

___

### fromMat4 <Score text="fromMat" /> 

• `Static` **fromMat4**(`a`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

取四阶矩阵的前三阶

#### Parameters

| `a` [`Matrix4x4`](mw.Matrix4x4.md) | 源四阶矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 提取后的三维矩阵 |
| :------ | :------ |

___

### fromRotation <Score text="fromRotation" /> 

• `Static` **fromRotation**(`rad`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

计算旋转矩阵

#### Parameters

| `rad` `number` | 旋转弧度  <br> range: 无限制<br> type:浮点数 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 含旋转信息的三维矩阵 |
| :------ | :------ |

___

### fromScaling <Score text="fromScaling" /> 

• `Static` **fromScaling**(`v`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

计算缩放矩阵

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 缩放信息的二维向量 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 含缩放信息的三维矩阵 |
| :------ | :------ |

___

### fromTranslation <Score text="fromTranslation" /> 

• `Static` **fromTranslation**(`v`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

计算位移矩阵

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 位移的二维向量 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 含位移信息的三维矩阵 |
| :------ | :------ |

___

### fromViewUp <Score text="fromViewUp" /> 

• `Static` **fromViewUp**(`view`, `up?`, `outer?`, `epsilon?`): [`Matrix3x3`](mw.Matrix3x3.md) 

根据视口前方向和上方向计算矩阵

#### Parameters

| `view` [`Vector`](mw.Vector.md) | 视口向量 |
| :------ | :------ |
| `up?` [`Vector`](mw.Vector.md) | 视口的上向量  <br> default: null |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |
| `epsilon?` `number` | 最小误差数  <br> default: MathDefine.EPSILON  <br> range: 建议传入小于 1 的值。<br> type:浮点数 |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的三维矩阵 |
| :------ | :------ |

___

### inverseTransposeMat4 <Score text="inverseTransposeMat" /> 

• `Static` **inverseTransposeMat4**(`a`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

计算指定四阶矩阵的逆转置三维矩阵

#### Parameters

| `a` [`Matrix4x4`](mw.Matrix4x4.md) | 四阶矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 逆转置后的三维矩阵 |
| :------ | :------ |

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

将目标矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 写入数据的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 求逆后的矩阵 |
| :------ | :------ |

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

矩阵乘法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

取四阶矩阵的前三阶，与三维矩阵相乘

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix4x4`](mw.Matrix4x4.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

矩阵标量乘法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` `number` | 数字b  <br> range: 无限制<br> type:浮点数 |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

___

### rotate <Score text="rotate" /> 

• `Static` **rotate**(`a`, `rad`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

在给定矩阵变换基础上加入新旋转变换

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 需要变换的矩阵 |
| :------ | :------ |
| `rad` `number` | 旋转弧度  <br> range: 无限制<br> type:浮点数 |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 旋转后的三维矩阵 |
| :------ | :------ |

___

### scale <Score text="scale" /> 

• `Static` **scale**(`a`, `v`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

在给定矩阵变换基础上加入新缩放变换

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 三维矩阵 |
| :------ | :------ |
| `v` [`Vector`](mw.Vector.md) | 缩放矩阵的三维向量 |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果三维矩阵对象  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 缩放后的三维矩阵 |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

矩阵等价判断

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |

#### Returns

| `boolean` | 返回比对结果 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

逐元素矩阵减法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 a |
| :------ | :------ |
| `b` [`Matrix3x3`](mw.Matrix3x3.md) | 矩阵 b |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 接收结果的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 计算后的矩阵 |
| :------ | :------ |

___

### transformVector <Score text="transformVector" /> 

• `Static` **transformVector**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量与三维矩阵乘法

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 三维矩阵 |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 三维向量 |
| `outer?` [`Vector`](mw.Vector.md) | 被写入的三维向量  <br> default: null |

#### Returns

| [`Vector`](mw.Vector.md) | 变换后的三维向量 |
| :------ | :------ |

___

### transformVector2 <Score text="transformVector" /> 

• `Static` **transformVector2**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

向量与三维矩阵乘法，默认向量第三位为 1。

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 三维矩阵 |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 二维向量 |
| `outer?` [`Vector2`](mw.Vector2.md) | 被写入的二维向量  <br> default: null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 变换后的二维向量 |
| :------ | :------ |

___

### transpose <Score text="transpose" /> 

• `Static` **transpose**(`a`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

将目标矩阵变为转置矩阵

#### Parameters

| `a` [`Matrix3x3`](mw.Matrix3x3.md) | 目标矩阵 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 写入数据的矩阵  <br> default: null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 转置后的矩阵 |
| :------ | :------ |
