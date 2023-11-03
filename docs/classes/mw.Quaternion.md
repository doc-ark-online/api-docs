[TYPE](../groups/TYPE.TYPE.md) / Quaternion

# Quaternion <Badge type="tip" text="Class" /> <Score text="Quaternion" />

四元数

----------------------------

用于表示 3D 旋转的单位四元数。

四元数与 Transform 类似，实现了旋转的矩阵表示。与存储旋转、缩放和剪切的 Transform 不同，四元数仅存储旋转。

四元数可以使用轴角对或欧拉角进行参数化。由于它们的紧凑性以及它们在内存中的存储方式，某些操作对于浮点错误的处理更加高效。

## Table of contents

### Properties <Score text="Properties" /> 
| **[w](mw.Quaternion.md#w)**: `number`  |
| :-----|
| w 分量。|
| **[x](mw.Quaternion.md#x)**: `number`  |
| x 分量。|
| **[y](mw.Quaternion.md#y)**: `number`  |
| y 分量。|
| **[z](mw.Quaternion.md#z)**: `number`  |
| z 分量。|
| **[halfToRad](mw.Quaternion.md#halftorad)**: `any`  |
| 获取一个半弧度系数|

### Accessors <Score text="Accessors" /> 
| **[conjugated](mw.Quaternion.md#conjugated)**(): [`Quaternion`](mw.Quaternion.md)  |
| :-----|
| 返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效|
| **[inverted](mw.Quaternion.md#inverted)**(): [`Quaternion`](mw.Quaternion.md)  |
| 返回当前四元数的逆|
| **[length](mw.Quaternion.md#length)**(): `number`  |
| 求四元数长度|
| **[normalized](mw.Quaternion.md#normalized)**(): [`Quaternion`](mw.Quaternion.md)  |
| 返回一个当前四元数归一后的新四元数|
| **[sqrLength](mw.Quaternion.md#sqrlength)**(): `number`  |
| 求四元数长度平方|
| **[identity](mw.Quaternion.md#identity)**(): [`Quaternion`](mw.Quaternion.md)  |
| 获取一个单位四元数|

### Methods <Score text="Methods" /> 
| **[clone](mw.Quaternion.md#clone)**(): [`Quaternion`](mw.Quaternion.md)  |
| :-----|
| 克隆当前四元数。|
| **[equals](mw.Quaternion.md#equals)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的四元数近似等价判断|
| **[fromRotation](mw.Quaternion.md#fromrotation)**(`v`: [`Rotation`](mw.Rotation.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 读取旋转角数据创建或者写入一个四元数|
| **[getAxisX](mw.Quaternion.md#getaxisx)**(`outer?`): [`Vector`](mw.Vector.md)  |
| 返回定义此四元数的坐标系 X 轴向量|
| **[getAxisY](mw.Quaternion.md#getaxisy)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 返回定义此四元数的坐标系 Y 轴向量|
| **[getAxisZ](mw.Quaternion.md#getaxisz)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 返回定义此四元数的坐标系 Z 轴向量|
| **[getEuler](mw.Quaternion.md#geteuler)**(`outerZ?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX|
| **[getEulerAngles](mw.Quaternion.md#geteulerangles)**(): [`Vector`](mw.Vector.md)  |
| 返回当前四元数转化的欧拉角（x-y-z）。|
| **[normalize](mw.Quaternion.md#normalize)**(`a`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 归一化四元数|
| [set](mw.Quaternion.md#set)  |
| :----- |
| **[setEulerAngles](mw.Quaternion.md#seteulerangles)**(`euler`: [`Vector`](mw.Vector.md)): `void`  |
| 设置欧拉角|
| **[strictEquals](mw.Quaternion.md#strictequals)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md)): `boolean`  |
| 四元数等价判断|
| **[toRotation](mw.Quaternion.md#torotation)**(): [`Rotation`](mw.Rotation.md)  |
| 获取一个当前四元数的旋转数据|
| **[toString](mw.Quaternion.md#tostring)**(): `string`  |
| 输出为字符串|
| **[calculateW](mw.Quaternion.md#calculatew)**(`a`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据 xyz 分量计算 w 分量，默认已归一化|
| **[conjugate](mw.Quaternion.md#conjugate)**(`a`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 求共轭四元数，对单位四元数与求逆等价，但更高效|
| **[dot](mw.Quaternion.md#dot)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md)): `number`  |
| 四元数点积（数量积）|
| **[equals](mw.Quaternion.md#equals-1)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的四元数近似等价判断|
| **[fromAngleZ](mw.Quaternion.md#fromanglez)**(`z`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据 2D 角度（0, 0, z）计算四元数|
| **[fromAxes](mw.Quaternion.md#fromaxes)**(`xAxis`: [`Vector`](mw.Vector.md), `yAxis`: [`Vector`](mw.Vector.md), `zAxis`: [`Vector`](mw.Vector.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直|
| **[fromAxisAngle](mw.Quaternion.md#fromaxisangle)**(`axis`: [`Vector`](mw.Vector.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据旋转轴和旋转弧度计算四元数|
| **[fromMatrix3x3](mw.Quaternion.md#frommatrix3x3)**(`m`: [`Matrix3x3`](mw.Matrix3x3.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息|
| **[fromRotation](mw.Quaternion.md#fromrotation-1)**(`v`: [`Rotation`](mw.Rotation.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 读取旋转角数据创建或者写入一个四元数|
| **[fromViewUp](mw.Quaternion.md#fromviewup)**(`view`: [`Vector`](mw.Vector.md), `up?`: [`Vector`](mw.Vector.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 根据视口的前方向和上方向计算四元数|
| **[getAxis](mw.Quaternion.md#getaxis)**(`q`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取四元数的旋转轴|
| **[getAxisAngle](mw.Quaternion.md#getaxisangle)**(`q`: [`Quaternion`](mw.Quaternion.md)): `number`  |
| 获取四元数的旋转弧度|
| **[invert](mw.Quaternion.md#invert)**(`a`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 四元数求逆|
| **[lerp](mw.Quaternion.md#lerp)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `t`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 逐元素线性插值： A + t * (B - A)|
| **[multiply](mw.Quaternion.md#multiply)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 四元数乘法|
| **[multiplyVector](mw.Quaternion.md#multiplyvector)**(`a`: [`Vector`](mw.Vector.md), `q`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 四元数乘以一个三维向量(通常用于向量通过四元数旋转)|
| **[normalize](mw.Quaternion.md#normalize-1)**(`a`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 归一化四元数|
| **[rotateAround](mw.Quaternion.md#rotatearound)**(`rot`: [`Quaternion`](mw.Quaternion.md), `axis`: [`Vector`](mw.Vector.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 绕世界空间下指定轴旋转四元数|
| **[rotateAroundLocal](mw.Quaternion.md#rotatearoundlocal)**(`rot`: [`Quaternion`](mw.Quaternion.md), `axis`: [`Vector`](mw.Vector.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 绕本地空间下指定轴旋转四元数|
| **[rotateX](mw.Quaternion.md#rotatex)**(`a`: [`Quaternion`](mw.Quaternion.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 绕 X 轴旋转指定四元数|
| **[rotateY](mw.Quaternion.md#rotatey)**(`a`: [`Quaternion`](mw.Quaternion.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 绕 Y 轴旋转指定四元数|
| **[rotateZ](mw.Quaternion.md#rotatez)**(`a`: [`Quaternion`](mw.Quaternion.md), `rad`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 绕 Z 轴旋转指定四元数|
| **[rotationTo](mw.Quaternion.md#rotationto)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化|
| **[slerp](mw.Quaternion.md#slerp)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `t`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 四元数球面插值|
| **[sqlerp](mw.Quaternion.md#sqlerp)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md), `c`: [`Quaternion`](mw.Quaternion.md), `d`: [`Quaternion`](mw.Quaternion.md), `t`: `number`, `outer?`: [`Quaternion`](mw.Quaternion.md)): [`Quaternion`](mw.Quaternion.md)  |
| 带两个控制点的四元数球面插值|
| **[strictEquals](mw.Quaternion.md#strictequals-1)**(`a`: [`Quaternion`](mw.Quaternion.md), `b`: [`Quaternion`](mw.Quaternion.md)): `boolean`  |
| 四元数等价判断|
| **[toMatrix3x3](mw.Quaternion.md#tomatrix3x3)**(`q`: [`Quaternion`](mw.Quaternion.md), `outer?`: [`Matrix3x3`](mw.Matrix3x3.md)): [`Matrix3x3`](mw.Matrix3x3.md)  |
| 根据四元数旋转信息计算矩阵|

• **new Quaternion**(`v`)

#### Parameters

| `v` [`Quaternion`](mw.Quaternion.md) | 四元素 |
| :------ | :------ |

• **new Quaternion**(`x`, `y`, `z`, `w`)

#### Parameters

| `x` `number` | x分量 default:0 |
| :------ | :------ |
| `y` `number` | y分量 default:0 |
| `z` `number` | z分量 default:0 |
| `w` `number` | w分量 default:1 |

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

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **conjugated**(): [`Quaternion`](mw.Quaternion.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回当前四元数的共轭四元数，对单位四元数与求逆等价，但更高效

#### Returns

| [`Quaternion`](mw.Quaternion.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### inverted <Score text="inverted" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **inverted**(): [`Quaternion`](mw.Quaternion.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回当前四元数的逆

#### Returns

| [`Quaternion`](mw.Quaternion.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### length <Score text="length" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **length**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


求四元数长度

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### normalized <Score text="normalized" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalized**(): [`Quaternion`](mw.Quaternion.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回一个当前四元数归一后的新四元数

#### Returns

| [`Quaternion`](mw.Quaternion.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrLength <Score text="sqrLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **sqrLength**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


求四元数长度平方

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### identity <Score text="identity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **identity**(): [`Quaternion`](mw.Quaternion.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取一个单位四元数

::: warning Precautions

Quaternion(0,0,0,1)

:::

#### Returns

</td>
</tr></tbody>
</table>

| [`Quaternion`](mw.Quaternion.md) |  |
| :------ | :------ |

## Methods

### clone <Score text="clone" /> 

• **clone**(): [`Quaternion`](mw.Quaternion.md) 

克隆当前四元数。

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 四元数 |
| :------ | :------ |


___

### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean`

判断当前四元数是否在误差范围内与指定向量相等。

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `epsilon?` `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

| `boolean` | 返回是否相等的结果 |
| :------ | :------ |





___

### fromRotation <Score text="fromRotation" /> 

• **fromRotation**(`v`): `void` <Badge type="tip" text="other" /> 

当前四元数读取一个旋转数据

#### Parameters

| `v` [`Rotation`](mw.Rotation.md) | 读取的字符串数据 |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


#### Parameters

| `v` [`Rotation`](mw.Rotation.md) | 读取的旋转数据 |
| :------ | :------ |

### getAxisX <Score text="getAxisX" /> 

• **getAxisX**(`outer?`): [`Vector`](mw.Vector.md) 

返回定义此四元数的坐标系 X 轴向量

#### Parameters

| `outer?` [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 此四元数的坐标系 X 轴向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getAxisY <Score text="getAxisY" /> 

• **getAxisY**(`outer?`): [`Vector`](mw.Vector.md) 

返回定义此四元数的坐标系 Y 轴向量

#### Parameters

| `outer?` [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 此四元数的坐标系 Y 轴向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getAxisZ <Score text="getAxisZ" /> 

• **getAxisZ**(`outer?`): [`Vector`](mw.Vector.md) 

返回定义此四元数的坐标系 Z 轴向量

#### Parameters

| `outer?` [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 此四元数的坐标系 Z 轴向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getEuler <Score text="getEuler" /> 

• **getEuler**(`outerZ?`, `outer?`): [`Vector`](mw.Vector.md) 

根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX

#### Parameters

| `outerZ?` `boolean` | 将z值范围更改为[-180，-90]U[90，180] default:false |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 欧拉角 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getEulerAngles <Score text="getEulerAngles" /> 

• **getEulerAngles**(): [`Vector`](mw.Vector.md) 

返回当前四元数转化的欧拉角（x-y-z）。

#### Returns

| [`Vector`](mw.Vector.md) | 欧拉角 |
| :------ | :------ |


___

### normalize <Score text="normalize" /> 

• **normalize**(): `void` 

将当前四元数归一化

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |



设置当前四元数使其与指定四元数相等。

**`Effect`**


#### Parameters

| `other` [`Quaternion`](mw.Quaternion.md) | 四元数数据 |
| :------ | :------ |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | `this` |
| :------ | :------ |

• **set**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](mw.Quaternion.md)

设置当前四元数指定元素值。

**`Effect`**


#### Parameters

| `x?` `number` | 四元数的x分量 default:0 |
| :------ | :------ |
| `y?` `number` | 四元数的y分量 default:0 |
| `z?` `number` | 四元数的z分量 default:0 |
| `w?` `number` | 四元数的w分量 default:0 |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | `this` |
| :------ | :------ |

___

### setEulerAngles <Score text="setEulerAngles" /> 

• **setEulerAngles**(`euler`): `void` 

设置欧拉角

#### Parameters

| `euler` [`Vector`](mw.Vector.md) | 传入的欧拉角 |
| :------ | :------ |



___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean`

判断当前四元数是否与指定四元数相等。

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |

#### Returns

| `boolean` | 返回是否相等的结果 |
| :------ | :------ |





___

### toRotation <Score text="toRotation" /> 

• **toRotation**(): [`Rotation`](mw.Rotation.md) <Badge type="tip" text="other" /> 

获取一个当前四元数的旋转数据

#### Returns

| [`Rotation`](mw.Rotation.md) | 旋转数据 |
| :------ | :------ |


___

### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为字符串

#### Returns

| `string` | 四元数值字符串 |
| :------ | :------ |


___

### calculateW <Score text="calculateW" /> 

• `Static` **calculateW**(`a`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据 xyz 分量计算 w 分量，默认已归一化

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 目标四元数 |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### conjugate <Score text="conjugate" /> 

• `Static` **conjugate**(`a`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

求共轭四元数，对单位四元数与求逆等价，但更高效

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

四元数点积（数量积）

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |

#### Returns

| `number` | 返回一个结果数 |
| :------ | :------ |


___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的四元数近似等价判断


#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `epsilon?` `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

| `boolean` | 返回是否相等的结果 |
| :------ | :------ |

___

### fromAngleZ <Score text="fromAngleZ" /> 

• `Static` **fromAngleZ**(`z`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据 2D 角度（0, 0, z）计算四元数

#### Parameters

| `z` `number` | 绕z旋转的角度值 |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromAxes <Score text="fromAxes" /> 

• `Static` **fromAxes**(`xAxis`, `yAxis`, `zAxis`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直

#### Parameters

| `xAxis` [`Vector`](mw.Vector.md) | x轴的向量值 |
| :------ | :------ |
| `yAxis` [`Vector`](mw.Vector.md) | y轴的向量值 |
| `zAxis` [`Vector`](mw.Vector.md) | z轴的向量值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromAxisAngle <Score text="fromAxisAngle" /> 

• `Static` **fromAxisAngle**(`axis`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据旋转轴和旋转弧度计算四元数

#### Parameters

| `axis` [`Vector`](mw.Vector.md) | 旋转轴 |
| :------ | :------ |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromMatrix3x3 <Score text="fromMatrix" /> 

• `Static` **fromMatrix3x3**(`m`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息

#### Parameters

| `m` [`Matrix3x3`](mw.Matrix3x3.md) | 三维矩阵 |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromRotation <Score text="fromRotation" /> 

• `Static` **fromRotation**(`v`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

读取旋转角数据创建或者写入一个四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `v` [`Rotation`](mw.Rotation.md) | 读取的字符串数据 |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |

___

### fromViewUp <Score text="fromViewUp" /> 

• `Static` **fromViewUp**(`view`, `up?`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

根据视口的前方向和上方向计算四元数

#### Parameters

| `view` [`Vector`](mw.Vector.md) | 视口的前向量 |
| :------ | :------ |
| `up?` [`Vector`](mw.Vector.md) | 上方向量 default:null |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getAxis <Score text="getAxis" /> 

• `Static` **getAxis**(`q`, `outer?`): [`Vector`](mw.Vector.md) 

获取四元数的旋转轴

#### Parameters

| `q` [`Quaternion`](mw.Quaternion.md) | 目标四元数 |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 返回一个三维向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### getAxisAngle <Score text="getAxisAngle" /> 

• `Static` **getAxisAngle**(`q`): `number` 

获取四元数的旋转弧度

#### Parameters

| `q` [`Quaternion`](mw.Quaternion.md) | 目标四元数 |
| :------ | :------ |

#### Returns

| `number` | 返回一个弧度值 |
| :------ | :------ |


___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

四元数求逆

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

逐元素线性插值： A + t * (B - A)

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `t` `number` | 插值（通常为0-1之间) |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

四元数乘法

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### multiplyVector <Score text="multiplyVector" /> 

• `Static` **multiplyVector**(`a`, `q`, `outer?`): [`Vector`](mw.Vector.md) 

四元数乘以一个三维向量(通常用于向量通过四元数旋转)

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 目标向量 |
| :------ | :------ |
| `q` [`Quaternion`](mw.Quaternion.md) | 四元数 |
| `outer?` [`Vector`](mw.Vector.md) | 被写入的 Vector 对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 返回一个旋转后的三维向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

归一化四元数


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |

___

### rotateAround <Score text="rotateAround" /> 

• `Static` **rotateAround**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

绕世界空间下指定轴旋转四元数

#### Parameters

| `rot` [`Quaternion`](mw.Quaternion.md) | 被旋转的四元数 |
| :------ | :------ |
| `axis` [`Vector`](mw.Vector.md) | 代表旋转轴的三维向量 |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotateAroundLocal <Score text="rotateAroundLocal" /> 

• `Static` **rotateAroundLocal**(`rot`, `axis`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

绕本地空间下指定轴旋转四元数

#### Parameters

| `rot` [`Quaternion`](mw.Quaternion.md) | 需要变换的四元数 |
| :------ | :------ |
| `axis` [`Vector`](mw.Vector.md) | 代表旋转轴的三维向量 |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotateX <Score text="rotateX" /> 

• `Static` **rotateX**(`a`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

绕 X 轴旋转指定四元数

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数 |
| :------ | :------ |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotateY <Score text="rotateY" /> 

• `Static` **rotateY**(`a`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

绕 Y 轴旋转指定四元数

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数 |
| :------ | :------ |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotateZ <Score text="rotateZ" /> 

• `Static` **rotateZ**(`a`, `rad`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

绕 Z 轴旋转指定四元数

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数 |
| :------ | :------ |
| `rad` `number` | 弧度值 |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotationTo <Score text="rotationTo" /> 

• `Static` **rotationTo**(`a`, `b`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

设置四元数为两向量a和b间的最短路径旋转，默认两向量都已归一化

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量b |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### slerp <Score text="slerp" /> 

• `Static` **slerp**(`a`, `b`, `t`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

四元数球面插值

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `t` `number` | 插值（通常为0-1之间) |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### sqlerp <Score text="sqlerp" /> 

• `Static` **sqlerp**(`a`, `b`, `c`, `d`, `t`, `outer?`): [`Quaternion`](mw.Quaternion.md) 

带两个控制点的四元数球面插值

#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |
| `c` [`Quaternion`](mw.Quaternion.md) | 四元数c |
| `d` [`Quaternion`](mw.Quaternion.md) | 四元数d |
| `t` `number` | 插值（通常为0-1之间) |
| `outer?` [`Quaternion`](mw.Quaternion.md) | 接收结果的 Quaternion 对象 default:null |

#### Returns

| [`Quaternion`](mw.Quaternion.md) | 返回一个四元数 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Quaternion 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

四元数等价判断


#### Parameters

| `a` [`Quaternion`](mw.Quaternion.md) | 四元数a |
| :------ | :------ |
| `b` [`Quaternion`](mw.Quaternion.md) | 四元数b |

#### Returns

| `boolean` | 返回是否相等的结果 |
| :------ | :------ |

___

### toMatrix3x3 <Score text="toMatrix" /> 

• `Static` **toMatrix3x3**(`q`, `outer?`): [`Matrix3x3`](mw.Matrix3x3.md) 

根据四元数旋转信息计算矩阵

#### Parameters

| `q` [`Quaternion`](mw.Quaternion.md) | 四元数信息 |
| :------ | :------ |
| `outer?` [`Matrix3x3`](mw.Matrix3x3.md) | 被写入的 Matrix3x3 对象 default:null |

#### Returns

| [`Matrix3x3`](mw.Matrix3x3.md) | 返回一个三维矩阵 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Matrix3x3 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined
