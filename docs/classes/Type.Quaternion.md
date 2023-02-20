[Type](../modules/Type.Type.md) / Quaternion

# Quaternion <Badge type="tip" text="Class" /> <Score text="Quaternion" />

**`Groups`**

DATA

四元数

## Table of contents

| Properties |
| :-----|
| **[w](Type.Quaternion.md#w)**: `number` <br> w 分量。|
| **[x](Type.Quaternion.md#x)**: `number` <br> x 分量。|
| **[y](Type.Quaternion.md#y)**: `number` <br> y 分量。|
| **[z](Type.Quaternion.md#z)**: `number` <br> z 分量。|
| **[halfToRad](Type.Quaternion.md#halftorad)**: `any` <br> 获取一个半弧度系数|

| Accessors |
| :-----|
| **[conjugated](Type.Quaternion.md#conjugated)**(): [`Quaternion`](Type.Quaternion.md) <br> 返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效|
| **[inverted](Type.Quaternion.md#inverted)**(): [`Quaternion`](Type.Quaternion.md) <br> 返回当前四元数的逆|
| **[length](Type.Quaternion.md#length)**(): `number` <br> 求四元数长度|
| **[normalized](Type.Quaternion.md#normalized)**(): [`Quaternion`](Type.Quaternion.md) <br> 返回一个当前四元数归一后的新四元数|
| **[sqrLength](Type.Quaternion.md#sqrlength)**(): `number` <br> 求四元数长度平方|
| **[identity](Type.Quaternion.md#identity)**(): [`Quaternion`](Type.Quaternion.md) <br> 获取一个单位四元数|

| Methods |
| :-----|
| **[clone](Type.Quaternion.md#clone)**(): [`Quaternion`](Type.Quaternion.md) <br> 克隆当前四元数。|
| **[equals](Type.Quaternion.md#equals)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), `number`): `boolean` <br> 排除浮点数误差的四元数近似等价判断|
| **[fromRotation](Type.Quaternion.md#fromrotation)**([`Rotation`](Type.Rotation.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 读取旋转角数据创建或者写入一个四元数|
| **[getAxisX](Type.Quaternion.md#getaxisx)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 返回定义此四元数的坐标系 X 轴向量|
| **[getAxisY](Type.Quaternion.md#getaxisy)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 返回定义此四元数的坐标系 Y 轴向量|
| **[getAxisZ](Type.Quaternion.md#getaxisz)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 返回定义此四元数的坐标系 Z 轴向量|
| **[getEuler](Type.Quaternion.md#geteuler)**(`boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX|
| **[getEulerAngles](Type.Quaternion.md#geteulerangles)**(): [`Vector`](Type.Vector.md) <br> 返回当前四元数转化的欧拉角（x-y-z）。|
| **[normalize](Type.Quaternion.md#normalize)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 归一化四元数|
| **[set](Type.Quaternion.md#set)**([`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 设置当前四元数使其与指定四元数相等。|
| **[setEulerAngles](Type.Quaternion.md#seteulerangles)**([`Vector`](Type.Vector.md)): `void` <br> 设置欧拉角|
| **[strictEquals](Type.Quaternion.md#strictequals)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): `boolean` <br> 四元数等价判断|
| **[toRotation](Type.Quaternion.md#torotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取一个当前四元数的旋转数据|
| **[toString](Type.Quaternion.md#tostring)**(): `string` <br> 输出为字符串|
| **[calculateW](Type.Quaternion.md#calculatew)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据 xyz 分量计算 w 分量，默认已归一化|
| **[conjugate](Type.Quaternion.md#conjugate)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 求共轭四元数，对单位四元数与求逆等价，但更高效|
| **[dot](Type.Quaternion.md#dot)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): `number` <br> 四元数点积（数量积）|
| **[equals](Type.Quaternion.md#equals-1)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), `number`): `boolean` <br> 排除浮点数误差的四元数近似等价判断|
| **[fromAngleZ](Type.Quaternion.md#fromanglez)**(`number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据 2D 角度（0, 0, z）计算四元数|
| **[fromAxes](Type.Quaternion.md#fromaxes)**([`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直|
| **[fromAxisAngle](Type.Quaternion.md#fromaxisangle)**([`Vector`](Type.Vector.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据旋转轴和旋转弧度计算四元数|
| **[fromMatrix3x3](Type.Quaternion.md#frommatrix3x3)**([`Matrix3x3`](Type.Matrix3x3.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息|
| **[fromRotation](Type.Quaternion.md#fromrotation-1)**([`Rotation`](Type.Rotation.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 读取旋转角数据创建或者写入一个四元数|
| **[fromViewUp](Type.Quaternion.md#fromviewup)**([`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 根据视口的前方向和上方向计算四元数|
| **[getAxis](Type.Quaternion.md#getaxis)**([`Quaternion`](Type.Quaternion.md), [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取四元数的旋转轴|
| **[getAxisAngle](Type.Quaternion.md#getaxisangle)**([`Quaternion`](Type.Quaternion.md)): `number` <br> 获取四元数的旋转弧度|
| **[invert](Type.Quaternion.md#invert)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 四元数求逆|
| **[lerp](Type.Quaternion.md#lerp)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 逐元素线性插值： A + t * (B - A)|
| **[multiply](Type.Quaternion.md#multiply)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 四元数乘法|
| **[multiplyVector](Type.Quaternion.md#multiplyvector)**([`Vector`](Type.Vector.md), [`Quaternion`](Type.Quaternion.md), [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 四元数乘以一个三维向量(通常用于向量通过四元数旋转)|
| **[normalize](Type.Quaternion.md#normalize-1)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 归一化四元数|
| **[rotateAround](Type.Quaternion.md#rotatearound)**([`Quaternion`](Type.Quaternion.md), [`Vector`](Type.Vector.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 绕世界空间下指定轴旋转四元数|
| **[rotateAroundLocal](Type.Quaternion.md#rotatearoundlocal)**([`Quaternion`](Type.Quaternion.md), [`Vector`](Type.Vector.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 绕本地空间下指定轴旋转四元数|
| **[rotateX](Type.Quaternion.md#rotatex)**([`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 绕 X 轴旋转指定四元数|
| **[rotateY](Type.Quaternion.md#rotatey)**([`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 绕 Y 轴旋转指定四元数|
| **[rotateZ](Type.Quaternion.md#rotatez)**([`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 绕 Z 轴旋转指定四元数|
| **[rotationTo](Type.Quaternion.md#rotationto)**([`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化|
| **[slerp](Type.Quaternion.md#slerp)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 四元数球面插值|
| **[sqlerp](Type.Quaternion.md#sqlerp)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md), `number`, [`Quaternion`](Type.Quaternion.md)): [`Quaternion`](Type.Quaternion.md) <br> 带两个控制点的四元数球面插值|
| **[strictEquals](Type.Quaternion.md#strictequals-1)**([`Quaternion`](Type.Quaternion.md), [`Quaternion`](Type.Quaternion.md)): `boolean` <br> 四元数等价判断|
| **[toMatrix3x3](Type.Quaternion.md#tomatrix3x3)**([`Quaternion`](Type.Quaternion.md), [`Matrix3x3`](Type.Matrix3x3.md)): [`Matrix3x3`](Type.Matrix3x3.md) <br> 根据四元数旋转信息计算矩阵|

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Quaternion`](Type.Quaternion.md) | 四元素 |

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |
| `w?` | `number` | w分量 default:1 |

## Properties

### w <Score text="w" /> 

• **w**: `number`

w 分量。

___

### x <Score text="x" /> 

• **x**: `number`

x 分量。

___

### y <Score text="y" /> 

• **y**: `number`

y 分量。

___

### z <Score text="z" /> 

• **z**: `number`

z 分量。

___

### halfToRad <Score text="halfToRad" /> 

▪ `Static` `Private` **halfToRad**: `any`

获取一个半弧度系数

## Accessors

### conjugated <Score text="conjugated" /> 

• `get` **conjugated**(): [`Quaternion`](Type.Quaternion.md)

返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效

#### Returns

[`Quaternion`](Type.Quaternion.md)

___

### inverted <Score text="inverted" /> 

• `get` **inverted**(): [`Quaternion`](Type.Quaternion.md)

返回当前四元数的逆

#### Returns

[`Quaternion`](Type.Quaternion.md)

___

### length <Score text="length" /> 

• `get` **length**(): `number`

求四元数长度

#### Returns

`number`

___

### normalized <Score text="normalized" /> 

• `get` **normalized**(): [`Quaternion`](Type.Quaternion.md)

返回一个当前四元数归一后的新四元数

#### Returns

[`Quaternion`](Type.Quaternion.md)

___

### sqrLength <Score text="sqrLength" /> 

• `get` **sqrLength**(): `number`

求四元数长度平方

#### Returns

`number`

___

### identity <Score text="identity" /> 

• `Static` `get` **identity**(): [`Quaternion`](Type.Quaternion.md)

获取一个单位四元数

::: warning Precautions

Quaternion(0,0,0,1)

:::

#### Returns

[`Quaternion`](Type.Quaternion.md)

## Methods

### clone <Score text="clone" /> 

• **clone**(): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

克隆当前四元数。


#### Returns

[`Quaternion`](Type.Quaternion.md)

四元数

___

### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

判断当前四元数是否在误差范围内与指定向量相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Quaternion.md) | 比对的目标四元数 |
| `epsilon?` | `number` | 容差值 default:MathDefine.EPSILON |

#### Returns

`boolean`

比对后的结果

___

### fromRotation <Score text="fromRotation" /> 

• **fromRotation**(`v`): `void` <Badge type="tip" text="other" />

当前四元数读取一个旋转数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Rotation.md) | 读取的旋转数据 |


___

### getAxisX <Score text="getAxisX" /> 

• **getAxisX**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回定义此四元数的坐标系 X 轴向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

此四元数的坐标系 X 轴向量

___

### getAxisY <Score text="getAxisY" /> 

• **getAxisY**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回定义此四元数的坐标系 Y 轴向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

此四元数的坐标系 Y 轴向量

___

### getAxisZ <Score text="getAxisZ" /> 

• **getAxisZ**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回定义此四元数的坐标系 Z 轴向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

此四元数的坐标系 Z 轴向量

___

### getEuler <Score text="getEuler" /> 

• **getEuler**(`outerZ?`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outerZ?` | `boolean` | 将z值范围更改为[-180，-90]U[90，180] default:false |
| `outer?` | [`Vector`](Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

欧拉角

___

### getEulerAngles <Score text="getEulerAngles" /> 

• **getEulerAngles**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回当前四元数转化的欧拉角（x-y-z）。


#### Returns

[`Vector`](Type.Vector.md)

欧拉角

___

### normalize <Score text="normalize" /> 

• **normalize**(): `void` <Badge type="tip" text="other" />

将当前四元数归一化



___

### set <Score text="set" /> 

• **set**(`other`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

设置当前四元数使其与指定四元数相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Quaternion.md) | 四元数数据 |

#### Returns

[`Quaternion`](Type.Quaternion.md)

`this`

• **set**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

设置当前四元数指定元素值。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | 四元数的x分量 default:0 |
| `y?` | `number` | 四元数的y分量 default:0 |
| `z?` | `number` | 四元数的z分量 default:0 |
| `w?` | `number` | 四元数的w分量 default:0 |

#### Returns

[`Quaternion`](Type.Quaternion.md)

`this`

___

### setEulerAngles <Score text="setEulerAngles" /> 

• **setEulerAngles**(`euler`): `void` <Badge type="tip" text="other" />

设置欧拉角


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `euler` | [`Vector`](Type.Vector.md) | 传入的欧拉角 |


___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` <Badge type="tip" text="other" />

判断当前四元数是否与指定四元数相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Quaternion`](Type.Quaternion.md) | 比对的目标四元数 |

#### Returns

`boolean`

比对后的结果

___

### toRotation <Score text="toRotation" /> 

• **toRotation**(): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

获取一个当前四元数的旋转数据


#### Returns

[`Rotation`](Type.Rotation.md)

旋转数据

___

### toString <Score text="toString" /> 

• **toString**(): `string` <Badge type="tip" text="other" />

输出为字符串


#### Returns

`string`

四元数值字符串

___

### calculateW <Score text="calculateW" /> 

• `Static` **calculateW**(`a`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据 xyz 分量计算 w 分量，默认已归一化


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 目标四元数 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### conjugate <Score text="conjugate" /> 

• `Static` **conjugate**(`a`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

求共轭四元数，对单位四元数与求逆等价，但更高效


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` <Badge type="tip" text="other" />

四元数点积（数量积）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |

#### Returns

`number`

返回一个结果数

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

排除浮点数误差的四元数近似等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

返回是否相等的结果

___

### fromAngleZ <Score text="fromAngleZ" /> 

• `Static` **fromAngleZ**(`z`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据 2D 角度（0, 0, z）计算四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `z` | `number` | 绕z旋转的角度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### fromAxes <Score text="fromAxes" /> 

• `Static` **fromAxes**(`xAxis`, `yAxis`, `zAxis`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xAxis` | [`Vector`](Type.Vector.md) | x轴的向量值 |
| `yAxis` | [`Vector`](Type.Vector.md) | y轴的向量值 |
| `zAxis` | [`Vector`](Type.Vector.md) | z轴的向量值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### fromAxisAngle <Score text="fromAxisAngle" /> 

• `Static` **fromAxisAngle**(`axis`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据旋转轴和旋转弧度计算四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector`](Type.Vector.md) | 旋转轴 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### fromMatrix3x3 <Score text="fromMatrix" /> 

• `Static` **fromMatrix3x3**(`m`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | [`Matrix3x3`](Type.Matrix3x3.md) | 三维矩阵 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### fromRotation <Score text="fromRotation" /> 

• `Static` **fromRotation**(`v`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

读取旋转角数据创建或者写入一个四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Rotation.md) | 读取的字符串数据 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### fromViewUp <Score text="fromViewUp" /> 

• `Static` **fromViewUp**(`view`, `up?`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

根据视口的前方向和上方向计算四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`Vector`](Type.Vector.md) | 视口的前向量 |
| `up?` | [`Vector`](Type.Vector.md) | 上方向量 default:null |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### getAxis <Score text="getAxis" /> 

• `Static` **getAxis**(`q`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

获取四元数的旋转轴


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Quaternion.md) | 目标四元数 |
| `outer?` | [`Vector`](Type.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

返回一个三维向量

___

### getAxisAngle <Score text="getAxisAngle" /> 

• `Static` **getAxisAngle**(`q`): `number` <Badge type="tip" text="other" />

获取四元数的旋转弧度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Quaternion.md) | 目标四元数 |

#### Returns

`number`

返回一个弧度值

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

四元数求逆


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

逐元素线性插值： A + t * (B - A)


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

四元数乘法


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### multiplyVector <Score text="multiplyVector" /> 

• `Static` **multiplyVector**(`a`, `q`, `outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

四元数乘以一个三维向量(通常用于向量通过四元数旋转)


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Vector.md) | 目标向量 |
| `q` | [`Quaternion`](Type.Quaternion.md) | 四元数 |
| `outer?` | [`Vector`](Type.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Vector.md)

返回一个旋转后的三维向量

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

归一化四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotateAround <Score text="rotateAround" /> 

• `Static` **rotateAround**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

绕世界空间下指定轴旋转四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rot` | [`Quaternion`](Type.Quaternion.md) | 被旋转的四元数 |
| `axis` | [`Vector`](Type.Vector.md) | 代表旋转轴的三维向量 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotateAroundLocal <Score text="rotateAroundLocal" /> 

• `Static` **rotateAroundLocal**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

绕本地空间下指定轴旋转四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rot` | [`Quaternion`](Type.Quaternion.md) | 需要变换的四元数 |
| `axis` | [`Vector`](Type.Vector.md) | 代表旋转轴的三维向量 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotateX <Score text="rotateX" /> 

• `Static` **rotateX**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

绕 X 轴旋转指定四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotateY <Score text="rotateY" /> 

• `Static` **rotateY**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

绕 Y 轴旋转指定四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotateZ <Score text="rotateZ" /> 

• `Static` **rotateZ**(`a`, `rad`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

绕 Z 轴旋转指定四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数 |
| `rad` | `number` | 弧度值 |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### rotationTo <Score text="rotationTo" /> 

• `Static` **rotationTo**(`a`, `b`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Vector.md) | 向量b |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### slerp <Score text="slerp" /> 

• `Static` **slerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

四元数球面插值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### sqlerp <Score text="sqlerp" /> 

• `Static` **sqlerp**(`a`, `b`, `c`, `d`, `t`, `outer?`): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

带两个控制点的四元数球面插值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |
| `c` | [`Quaternion`](Type.Quaternion.md) | 四元数c |
| `d` | [`Quaternion`](Type.Quaternion.md) | 四元数d |
| `t` | `number` | 插值（通常为0-1之间) |
| `outer?` | [`Quaternion`](Type.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

[`Quaternion`](Type.Quaternion.md)

返回一个四元数

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` <Badge type="tip" text="other" />

四元数等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Quaternion`](Type.Quaternion.md) | 四元数a |
| `b` | [`Quaternion`](Type.Quaternion.md) | 四元数b |

#### Returns

`boolean`

返回是否相等的结果

___

### toMatrix3x3 <Score text="toMatrix" /> 

• `Static` **toMatrix3x3**(`q`, `outer?`): [`Matrix3x3`](Type.Matrix3x3.md) <Badge type="tip" text="other" />

根据四元数旋转信息计算矩阵


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Type.Quaternion.md) | 四元数信息 |
| `outer?` | [`Matrix3x3`](Type.Matrix3x3.md) | 被写入的 Matrix3x3 对象 default:null |

#### Returns

[`Matrix3x3`](Type.Matrix3x3.md)

返回一个三维矩阵
