[Type](../modules/Type.Type.md) / Quaternion

# Quaternion <Badge type="tip" text="Class" />

**`Description`**

四元数

## Table of contents

| Properties |
| :-----|
| **[w](Type.Type.Quaternion.md#w)**: `number` <br> w 分量。|
| **[x](Type.Type.Quaternion.md#x)**: `number` <br> x 分量。|
| **[y](Type.Type.Quaternion.md#y)**: `number` <br> y 分量。|
| **[z](Type.Type.Quaternion.md#z)**: `number` <br> z 分量。|
| **[halfToRad](Type.Type.Quaternion.md#halftorad)**: `any` <br> 获取一个半弧度系数|

| Accessors |
| :-----|
| **[conjugated](Type.Type.Quaternion.md#conjugated)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效|
| **[inverted](Type.Type.Quaternion.md#inverted)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 返回当前四元数的逆|
| **[length](Type.Type.Quaternion.md#length)**(): `number` <br> 求四元数长度|
| **[normalized](Type.Type.Quaternion.md#normalized)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 返回一个当前四元数归一后的新四元数|
| **[sqrLength](Type.Type.Quaternion.md#sqrlength)**(): `number` <br> 求四元数长度平方|
| **[identity](Type.Type.Quaternion.md#identity)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 获取一个单位四元数|

| Methods |
| :-----|
| **[clone](Type.Type.Quaternion.md#clone)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 克隆当前四元数。|
| **[equals](Type.Type.Quaternion.md#equals)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), `number`): `boolean` <br> 排除浮点数误差的四元数近似等价判断|
| **[fromRotation](Type.Type.Quaternion.md#fromrotation)**([`Rotation`](Type.Type.Rotation.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 读取旋转角数据创建或者写入一个四元数|
| **[getAxisX](Type.Type.Quaternion.md#getaxisx)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 返回定义此四元数的坐标系 X 轴向量|
| **[getAxisY](Type.Type.Quaternion.md#getaxisy)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 返回定义此四元数的坐标系 Y 轴向量|
| **[getAxisZ](Type.Type.Quaternion.md#getaxisz)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 返回定义此四元数的坐标系 Z 轴向量|
| **[getEuler](Type.Type.Quaternion.md#geteuler)**(`boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX|
| **[getEulerAngles](Type.Type.Quaternion.md#geteulerangles)**(): [`Vector`](Type.Type.Vector.md) <br> 返回当前四元数转化的欧拉角（x-y-z）。|
| **[normalize](Type.Type.Quaternion.md#normalize)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 归一化四元数|
| **[set](Type.Type.Quaternion.md#set)**([`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 设置当前四元数使其与指定四元数相等。|
| **[setEulerAngles](Type.Type.Quaternion.md#seteulerangles)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置欧拉角|
| **[strictEquals](Type.Type.Quaternion.md#strictequals)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): `boolean` <br> 四元数等价判断|
| **[toRotation](Type.Type.Quaternion.md#torotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取一个当前四元数的旋转数据|
| **[toString](Type.Type.Quaternion.md#tostring)**(): `string` <br> 输出为字符串|
| **[calculateW](Type.Type.Quaternion.md#calculatew)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据 xyz 分量计算 w 分量，默认已归一化|
| **[conjugate](Type.Type.Quaternion.md#conjugate)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 求共轭四元数，对单位四元数与求逆等价，但更高效|
| **[dot](Type.Type.Quaternion.md#dot)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): `number` <br> 四元数点积（数量积）|
| **[equals](Type.Type.Quaternion.md#equals-1)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), `number`): `boolean` <br> 排除浮点数误差的四元数近似等价判断|
| **[fromAngleZ](Type.Type.Quaternion.md#fromanglez)**(`number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据 2D 角度（0, 0, z）计算四元数|
| **[fromAxes](Type.Type.Quaternion.md#fromaxes)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直|
| **[fromAxisAngle](Type.Type.Quaternion.md#fromaxisangle)**([`Vector`](Type.Type.Vector.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据旋转轴和旋转弧度计算四元数|
| **[fromMatrix3x3](Type.Type.Quaternion.md#frommatrix3x3)**([`Matrix3x3`](Type.Type.Matrix3x3.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息|
| **[fromRotation](Type.Type.Quaternion.md#fromrotation-1)**([`Rotation`](Type.Type.Rotation.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 读取旋转角数据创建或者写入一个四元数|
| **[fromViewUp](Type.Type.Quaternion.md#fromviewup)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 根据视口的前方向和上方向计算四元数|
| **[getAxis](Type.Type.Quaternion.md#getaxis)**([`Quaternion`](Type.Type.Quaternion.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取四元数的旋转轴|
| **[getAxisAngle](Type.Type.Quaternion.md#getaxisangle)**([`Quaternion`](Type.Type.Quaternion.md)): `number` <br> 获取四元数的旋转弧度|
| **[invert](Type.Type.Quaternion.md#invert)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 四元数求逆|
| **[lerp](Type.Type.Quaternion.md#lerp)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 逐元素线性插值： A + t * (B - A)|
| **[multiply](Type.Type.Quaternion.md#multiply)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 四元数乘法|
| **[multiplyVector](Type.Type.Quaternion.md#multiplyvector)**([`Vector`](Type.Type.Vector.md), [`Quaternion`](Type.Type.Quaternion.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 四元数乘以一个三维向量(通常用于向量通过四元数旋转)|
| **[normalize](Type.Type.Quaternion.md#normalize-1)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 归一化四元数|
| **[rotateAround](Type.Type.Quaternion.md#rotatearound)**([`Quaternion`](Type.Type.Quaternion.md), [`Vector`](Type.Type.Vector.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 绕世界空间下指定轴旋转四元数|
| **[rotateAroundLocal](Type.Type.Quaternion.md#rotatearoundlocal)**([`Quaternion`](Type.Type.Quaternion.md), [`Vector`](Type.Type.Vector.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 绕本地空间下指定轴旋转四元数|
| **[rotateX](Type.Type.Quaternion.md#rotatex)**([`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 绕 X 轴旋转指定四元数|
| **[rotateY](Type.Type.Quaternion.md#rotatey)**([`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 绕 Y 轴旋转指定四元数|
| **[rotateZ](Type.Type.Quaternion.md#rotatez)**([`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 绕 Z 轴旋转指定四元数|
| **[rotationTo](Type.Type.Quaternion.md#rotationto)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化|
| **[slerp](Type.Type.Quaternion.md#slerp)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 四元数球面插值|
| **[sqlerp](Type.Type.Quaternion.md#sqlerp)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md), `number`, [`Quaternion`](Type.Type.Quaternion.md)): [`Quaternion`](Type.Type.Quaternion.md) <br> 带两个控制点的四元数球面插值|
| **[strictEquals](Type.Type.Quaternion.md#strictequals-1)**([`Quaternion`](Type.Type.Quaternion.md), [`Quaternion`](Type.Type.Quaternion.md)): `boolean` <br> 四元数等价判断|
| **[toMatrix3x3](Type.Type.Quaternion.md#tomatrix3x3)**([`Quaternion`](Type.Type.Quaternion.md), [`Matrix3x3`](Type.Type.Matrix3x3.md)): [`Matrix3x3`](Type.Type.Matrix3x3.md) <br> 根据四元数旋转信息计算矩阵|

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Quaternion`](Type.Type.Quaternion.md) | 四元素 |

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |
| `w?` | `number` | w分量 default:1 |

## Properties

### w

• **w**: `number`

**`Description`**

w 分量。

___

### x

• **x**: `number`

**`Description`**

x 分量。

___

### y

• **y**: `number`

**`Description`**

y 分量。

___

### z

• **z**: `number`

**`Description`**

z 分量。

___

### halfToRad

▪ `Static` `Private` **halfToRad**: `any`

**`Description`**

获取一个半弧度系数

## Accessors

### conjugated

• `get` **conjugated**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

___

### inverted

• `get` **inverted**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

返回当前四元数的逆

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

___

### length

• `get` **length**(): `number`

**`Description`**

求四元数长度

#### Returns

`number`

___

### normalized

• `get` **normalized**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

返回一个当前四元数归一后的新四元数

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

求四元数长度平方

#### Returns

`number`

___

### identity

• `Static` `get` **identity**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

获取一个单位四元数

**`Precautions`**

Quaternion(0,0,0,1)

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

## Methods

### clone

▸ **clone**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

克隆当前四元数。

**`Effect`**

调用端生效

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

四元数

___

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前四元数是否在误差范围内与指定向量相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Type.Quaternion.md) | 比对的目标四元数 |
| `epsilon?` | `number` | 容差值 default:MathDefine.EPSILON |

#### Returns

`boolean`

比对后的结果

___

### fromRotation

▸ **fromRotation**(`v`): `void`

**`Description`**

当前四元数读取一个旋转数据

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Type.Rotation.md) | 读取的旋转数据 |

#### Returns

`void`

___

### getAxisX

▸ **getAxisX**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回定义此四元数的坐标系 X 轴向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

此四元数的坐标系 X 轴向量

___

### getAxisY

▸ **getAxisY**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回定义此四元数的坐标系 Y 轴向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

此四元数的坐标系 Y 轴向量

___

### getAxisZ

▸ **getAxisZ**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回定义此四元数的坐标系 Z 轴向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

此四元数的坐标系 Z 轴向量

___

### getEuler

▸ **getEuler**(`outerZ?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outerZ?` | `boolean` | 将z值范围更改为[-180，-90]U[90，180] default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

欧拉角

___

### getEulerAngles

▸ **getEulerAngles**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回当前四元数转化的欧拉角（x-y-z）。

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

欧拉角

___

### normalize

▸ **normalize**(): `void`

**`Description`**

将当前四元数归一化

**`Effect`**

调用端生效

#### Returns

`void`

___

### set

▸ **set**(`other`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

设置当前四元数使其与指定四元数相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数数据 |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

`this`

▸ **set**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

设置当前四元数指定元素值。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | 四元数的x分量 default:0 |
| `y?` | `number` | 四元数的y分量 default:0 |
| `z?` | `number` | 四元数的z分量 default:0 |
| `w?` | `number` | 四元数的w分量 default:0 |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

`this`

___

### setEulerAngles

▸ **setEulerAngles**(`euler`): `void`

**`Description`**

设置欧拉角

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | [`Vector`](Type.Type.Vector.md) | 传入的欧拉角 |

#### Returns

`void`

___

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前四元数是否与指定四元数相等。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Type.Quaternion.md) | 比对的目标四元数 |

#### Returns

`boolean`

比对后的结果

___

### toRotation

▸ **toRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取一个当前四元数的旋转数据

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转数据

___

### toString

▸ **toString**(): `string`

**`Description`**

输出为字符串

**`Effect`**

调用端生效

#### Returns

`string`

四元数值字符串

___

### calculateW

▸ `Static` **calculateW**(`a`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据 xyz 分量计算 w 分量，默认已归一化

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 目标四元数 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### conjugate

▸ `Static` **conjugate**(`a`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

求共轭四元数，对单位四元数与求逆等价，但更高效

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

**`Description`**

四元数点积（数量积）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |

#### Returns

`number`

返回一个结果数

___

### equals

▸ `Static` **equals**(`a`, `b`, `epsilon?`): `boolean`

**`Description`**

排除浮点数误差的四元数近似等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

返回是否相等的结果

___

### fromAngleZ

▸ `Static` **fromAngleZ**(`z`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据 2D 角度（0, 0, z）计算四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z` | `number` | 绕z旋转的角度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### fromAxes

▸ `Static` **fromAxes**(`xAxis`, `yAxis`, `zAxis`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xAxis` | [`Vector`](Type.Type.Vector.md) | x轴的向量值 |
| `yAxis` | [`Vector`](Type.Type.Vector.md) | y轴的向量值 |
| `zAxis` | [`Vector`](Type.Type.Vector.md) | z轴的向量值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### fromAxisAngle

▸ `Static` **fromAxisAngle**(`axis`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据旋转轴和旋转弧度计算四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector`](Type.Type.Vector.md) | 旋转轴 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### fromMatrix3x3

▸ `Static` **fromMatrix3x3**(`m`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | 三维矩阵 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### fromRotation

▸ `Static` **fromRotation**(`v`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

读取旋转角数据创建或者写入一个四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Type.Rotation.md) | 读取的字符串数据 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### fromViewUp

▸ `Static` **fromViewUp**(`view`, `up?`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

根据视口的前方向和上方向计算四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`Vector`](Type.Type.Vector.md) | 视口的前向量 |
| `up?` | [`Vector`](Type.Type.Vector.md) | 上方向量 default:null |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### getAxis

▸ `Static` **getAxis**(`q`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取四元数的旋转轴

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Type.Quaternion.md) | 目标四元数 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

返回一个三维向量

___

### getAxisAngle

▸ `Static` **getAxisAngle**(`q`): `number`

**`Description`**

获取四元数的旋转弧度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Type.Quaternion.md) | 目标四元数 |

#### Returns

`number`

返回一个弧度值

___

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

四元数求逆

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

逐元素线性插值： A + t * (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

四元数乘法

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### multiplyVector

▸ `Static` **multiplyVector**(`a`, `q`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

四元数乘以一个三维向量(通常用于向量通过四元数旋转)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 目标向量 |
| `q` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

返回一个旋转后的三维向量

___

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

归一化四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotateAround

▸ `Static` **rotateAround**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

绕世界空间下指定轴旋转四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rot` | [`Quaternion`](Type.Type.Quaternion.md) | 被旋转的四元数 |
| `axis` | [`Vector`](Type.Type.Vector.md) | 代表旋转轴的三维向量 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotateAroundLocal

▸ `Static` **rotateAroundLocal**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

绕本地空间下指定轴旋转四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rot` | [`Quaternion`](Type.Type.Quaternion.md) | 需要变换的四元数 |
| `axis` | [`Vector`](Type.Type.Vector.md) | 代表旋转轴的三维向量 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotateX

▸ `Static` **rotateX**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

绕 X 轴旋转指定四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotateY

▸ `Static` **rotateY**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

绕 Y 轴旋转指定四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotateZ

▸ `Static` **rotateZ**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

绕 Z 轴旋转指定四元数

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### rotationTo

▸ `Static` **rotationTo**(`a`, `b`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### slerp

▸ `Static` **slerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

四元数球面插值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### sqlerp

▸ `Static` **sqlerp**(`a`, `b`, `c`, `d`, `t`, `outer?`): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

带两个控制点的四元数球面插值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |
| `c` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数c |
| `d` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数d |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

返回一个四元数

___

### strictEquals

▸ `Static` **strictEquals**(`a`, `b`): `boolean`

**`Description`**

四元数等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数b |

#### Returns

`boolean`

返回是否相等的结果

___

### toMatrix3x3

▸ `Static` **toMatrix3x3**(`q`, `outer?`): [`Matrix3x3`](Type.Type.Matrix3x3.md)

**`Description`**

根据四元数旋转信息计算矩阵

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Type.Quaternion.md) | 四元数信息 |
| `outer?` | [`Matrix3x3`](Type.Type.Matrix3x3.md) | 被写入的 Matrix3x3 对象 default:null |

#### Returns

[`Matrix3x3`](Type.Type.Matrix3x3.md)

返回一个三维矩阵
