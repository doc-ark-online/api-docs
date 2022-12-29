[Type](../modules/Type.Type.md) / Vector

# Vector <Badge type="tip" text="Class" />

**`Description`**

由分量 (x,y,z) 组成的三维空间中的向量

## Table of contents

| Properties |
| :-----|
| **[x](Type.Type.Vector.md#x)**: `number` <br> X轴坐标|
| **[y](Type.Type.Vector.md#y)**: `number` <br> Y轴坐标|
| **[z](Type.Type.Vector.md#z)**: `number` <br> Z轴坐标|

| Accessors |
| :-----|
| **[length](Type.Type.Vector.md#length)**(): `number` <br> 计算向量的长度|
| **[magnitude](Type.Type.Vector.md#magnitude)**([`Vector`](Type.Type.Vector.md)): `number` <br> 求向量长度|
| **[negative](Type.Type.Vector.md#negative)**(): [`Vector`](Type.Type.Vector.md) <br> 返回各个分量取反的新向量|
| **[normalized](Type.Type.Vector.md#normalized)**(): [`Vector`](Type.Type.Vector.md) <br> 返回一个归一化的新向量, 不影响本向量|
| **[sqrLength](Type.Type.Vector.md#sqrlength)**(): `number` <br> 计算向量的长度平方|
| **[sqrMagnitude](Type.Type.Vector.md#sqrmagnitude)**([`Vector`](Type.Type.Vector.md)): `number` <br> 求向量长度平方|
| **[back](Type.Type.Vector.md#back)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(-1, 0, 0)|
| **[down](Type.Type.Vector.md#down)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 0, -1)|
| **[forward](Type.Type.Vector.md#forward)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(1, 0, 0)|
| **[left](Type.Type.Vector.md#left)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, -1, 0)|
| **[negOne](Type.Type.Vector.md#negone)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(-1, -1, -1)|
| **[one](Type.Type.Vector.md#one)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(1, 1, 1)|
| **[right](Type.Type.Vector.md#right)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 1, 0)|
| **[unitX](Type.Type.Vector.md#unitx)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(1, 0, 0)|
| **[unitY](Type.Type.Vector.md#unity)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 1, 0)|
| **[unitZ](Type.Type.Vector.md#unitz)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 0, 1)|
| **[up](Type.Type.Vector.md#up)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 0, 1)|
| **[zero](Type.Type.Vector.md#zero)**(): [`Vector`](Type.Type.Vector.md) <br> Vector(0, 0, 0)|

| Methods |
| :-----|
| **[add](Type.Type.Vector.md#add)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算ab两个向量相加|
| **[clone](Type.Type.Vector.md#clone)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获得指定向量的拷贝|
| **[divide](Type.Type.Vector.md#divide)**([`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 遍历向量a的每个分量除以b|
| **[equals](Type.Type.Vector.md#equals)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[fromString](Type.Type.Vector.md#fromstring)**(`string`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 通过一个字符串创建 Vector|
| **[multiply](Type.Type.Vector.md#multiply)**([`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 遍历向量a的每个分量乘以b|
| **[normalize](Type.Type.Vector.md#normalize)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 归一化向量|
| **[set](Type.Type.Vector.md#set)**([`Vector`](Type.Type.Vector.md), `number`, `number`, `number`): [`Vector`](Type.Type.Vector.md) <br> 设置向量值|
| **[strictEquals](Type.Type.Vector.md#strictequals)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Type.Vector.md#subtract)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算向量a减去向量b|
| **[toRotation](Type.Type.Vector.md#torotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 转换为对应的Rotation|
| **[toString](Type.Type.Vector.md#tostring)**(): `string` <br> 输出为字符串|
| **[add](Type.Type.Vector.md#add-1)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算ab两个向量相加|
| **[angle](Type.Type.Vector.md#angle)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 求向量a与向量b在XY平面投影的夹角角度|
| **[angle3D](Type.Type.Vector.md#angle3d)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 求向量a与向量b的夹角角度|
| **[ceil](Type.Type.Vector.md#ceil)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 将向量a逐元素向量向上取整|
| **[clamp](Type.Type.Vector.md#clamp)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 设置当前向量的值，使其各个分量都处于指定的范围内|
| **[clone](Type.Type.Vector.md#clone-1)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获得指定向量的拷贝|
| **[copy](Type.Type.Vector.md#copy)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 复制目标向量|
| **[cross](Type.Type.Vector.md#cross)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 向量叉积 (向量积)|
| **[distance](Type.Type.Vector.md#distance)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 求两向量的欧氏距离|
| **[divide](Type.Type.Vector.md#divide-1)**([`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 遍历向量a的每个分量除以b|
| **[dot](Type.Type.Vector.md#dot)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 向量点积 (数量积)|
| **[equals](Type.Type.Vector.md#equals-1)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[floor](Type.Type.Vector.md#floor)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 将向量a逐元素向量向下取整|
| **[fromString](Type.Type.Vector.md#fromstring-1)**(`string`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 通过一个字符串创建 Vector|
| **[invert](Type.Type.Vector.md#invert)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 将向量a逐元素向量取倒数，接近 0 时返回 Infinity|
| **[invertSafe](Type.Type.Vector.md#invertsafe)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`): [`Vector`](Type.Type.Vector.md) <br> 将向量a逐元素向量取倒数，接近 0 时返回 0|
| **[lerp](Type.Type.Vector.md#lerp)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 逐元素向量线性插值： A + t * (B - A)|
| **[magnitude](Type.Type.Vector.md#magnitude-1)**([`Vector`](Type.Type.Vector.md)): `number` <br> 求向量长度|
| **[max](Type.Type.Vector.md#max)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 逐元素向量最大值|
| **[min](Type.Type.Vector.md#min)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 逐元素向量最小值|
| **[moveTowards](Type.Type.Vector.md#movetowards)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 向目标向量移动|
| **[multiply](Type.Type.Vector.md#multiply-1)**([`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 遍历向量a的每个分量乘以b|
| **[negate](Type.Type.Vector.md#negate)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 求向量a逐元素向量取负|
| **[normalize](Type.Type.Vector.md#normalize-1)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 归一化向量|
| **[project](Type.Type.Vector.md#project)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算向量a在指定向量上的投影|
| **[projectOnPlane](Type.Type.Vector.md#projectonplane)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算向量a在指定平面上的投影|
| **[reflect](Type.Type.Vector.md#reflect)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 求反射角|
| **[rotateX](Type.Type.Vector.md#rotatex)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 绕 X 轴旋转向量指定弧度|
| **[rotateY](Type.Type.Vector.md#rotatey)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 绕 Y 轴旋转向量指定弧度|
| **[rotateZ](Type.Type.Vector.md#rotatez)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `number`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 绕 Z 轴旋转向量指定弧度|
| **[round](Type.Type.Vector.md#round)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 将向量a逐元素向量四舍五入取整|
| **[set](Type.Type.Vector.md#set-1)**([`Vector`](Type.Type.Vector.md), `number`, `number`, `number`): [`Vector`](Type.Type.Vector.md) <br> 设置向量值|
| **[sqrMagnitude](Type.Type.Vector.md#sqrmagnitude-1)**([`Vector`](Type.Type.Vector.md)): `number` <br> 求向量长度平方|
| **[squaredDistance](Type.Type.Vector.md#squareddistance)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 求两向量的欧氏距离平方|
| **[strictEquals](Type.Type.Vector.md#strictequals-1)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Type.Vector.md#subtract-1)**([`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 计算向量a减去向量b|

**`Description`**

用给定的 x, y 和 z 分量构建一个新的 Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |

• **new Vector**(`f`)

**`Description`**

用给定的 f 值设定给 x, y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | 给定的 f 值 |

• **new Vector**(`v`)

**`Description`**

用给定的 Vector 的值的 x, y 和 z 分量设定给x，y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 给定的 Vector |

## Properties

### x

• **x**: `number`

**`Description`**

X轴坐标

___

### y

• **y**: `number`

**`Description`**

Y轴坐标

___

### z

• **z**: `number`

**`Description`**

Z轴坐标

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

___

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

向量的长度

#### Returns

`number`

___

### negative

• `get` **negative**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回各个分量取反的新向量

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### normalized

• `get` **normalized**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回一个归一化的新向量, 不影响本向量

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

___

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

___

### back

• `Static` `get` **back**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### down

• `Static` `get` **down**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### forward

• `Static` `get` **forward**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### left

• `Static` `get` **left**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, -1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### negOne

• `Static` `get` **negOne**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, -1, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### one

• `Static` `get` **one**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 1, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### right

• `Static` `get` **right**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### unitX

• `Static` `get` **unitX**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### unitY

• `Static` `get` **unitY**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### unitZ

• `Static` `get` **unitZ**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### up

• `Static` `get` **up**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

___

### zero

• `Static` `get` **zero**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

## Methods

### add

▸ **add**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

加一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 相加的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

___

### clone

▸ **clone**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

克隆当前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆的新向量

___

### divide

▸ **divide**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

每个分量除以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量除以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

▸ **divide**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 除以的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

___

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前向量是否在误差范围内与指定向量相等

**`Effect`**

调用端生效

**`Precautions`**

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](Type.Type.Vector.md) | 指定的向量 |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

当前向量是否在误差范围内与指定向量相等

___

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

读取字符串数据

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 读取的字符 |

#### Returns

`void`

___

### multiply

▸ **multiply**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

乘以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 相乘的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

▸ **multiply**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量乘以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

___

### normalize

▸ **normalize**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

将当前向量归一化

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

归一化后的向量

___

### set

▸ **set**(`other`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量使其与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](Type.Type.Vector.md) | 指定的向量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

▸ **set**(`x?`, `y?`, `z?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量的具体分量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

___

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前向量是否与指定向量相等

**`Effect`**

调用端生效

**`Precautions`**

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](Type.Type.Vector.md) | 指定的向量 |

#### Returns

`boolean`

当前向量是否与指定向量相等

___

### subtract

▸ **subtract**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

减去一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 相减的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

___

### toRotation

▸ **toRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

转换为对应的Rotation

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

新的对应的Rotation对象

___

### toString

▸ **toString**(): `string`

**`Description`**

输出为字符串

**`Effect`**

调用端生效

#### Returns

`string`

向量值字符串

___

### add

▸ `Static` **add**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算ab两个向量相加

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相加的结果 Vector 对象

___

### angle

▸ `Static` **angle**(`a`, `b`): `number`

**`Description`**

求向量a与向量b在XY平面投影的夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`number`

夹角角度

___

### angle3D

▸ `Static` **angle3D**(`a`, `b`): `number`

**`Description`**

求向量a与向量b的夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`number`

夹角角度

___

### ceil

▸ `Static` **ceil**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量a逐元素向量向上取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向上取整的 Vector 对象

___

### clamp

▸ `Static` **clamp**(`value`, `minInclusive`, `maxInclusive`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量的值，使其各个分量都处于指定的范围内

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector`](Type.Type.Vector.md) | 当前向量的值 |
| `minInclusive` | [`Vector`](Type.Type.Vector.md) | 允许的最小值 |
| `maxInclusive` | [`Vector`](Type.Type.Vector.md) | 允许的最大值 |

#### Returns

[`Vector`](Type.Type.Vector.md)

各个分量都处于指定的范围内的向量

___

### clone

▸ `Static` **clone**(`a`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获得指定向量的拷贝

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

___

### copy

▸ `Static` **copy**(`a`, `outer`): [`Vector`](Type.Type.Vector.md)

**`Description`**

复制目标向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 目标向量 |
| `outer` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

___

### cross

▸ `Static` **cross**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向量叉积 (向量积)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

叉积 Vector 对象

___

### distance

▸ `Static` **distance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`number`

欧氏距离

___

### divide

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

遍历向量a的每个分量除以b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量a除以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

**`Description`**

向量点积 (数量积)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`number`

点积

___

### equals

▸ `Static` **equals**(`a`, `b`, `epsilon?`): `boolean`

**`Description`**

排除浮点数误差的向量近似等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

是否等价

___

### floor

▸ `Static` **floor**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量a逐元素向量向下取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向下取整的 Vector 对象

___

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

通过一个字符串创建 Vector

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 待转化的 string |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

转化后的 Vector 对象

___

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量a逐元素向量取倒数，接近 0 时返回 Infinity

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

___

### invertSafe

▸ `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量a逐元素向量取倒数，接近 0 时返回 0

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

___

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量线性插值： A + t * (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `t` | `number` | 插值 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

线性插值得到的 Vector 对象

___

### magnitude

▸ `Static` **magnitude**(`a`): `number`

**`Description`**

求向量长度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |

#### Returns

`number`

向量长度

___

### max

▸ `Static` **max**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量最大值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最大值的 Vector 对象

___

### min

▸ `Static` **min**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量最小值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最小值后的 Vector 对象

___

### moveTowards

▸ `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向目标向量移动

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | [`Vector`](Type.Type.Vector.md) | 当前向量 |
| `target` | [`Vector`](Type.Type.Vector.md) | 目标向量 |
| `maxDistanceDelta` | `number` | 最大移动分量 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

移动后的 Vector 对象

___

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

遍历向量a的每个分量乘以b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量a乘以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

___

### negate

▸ `Static` **negate**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

求向量a逐元素向量取负

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取负后的 Vector 对象

___

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

归一化向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

归一化后的 Vector 对象

___

### project

▸ `Static` **project**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量a在指定向量上的投影

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 指定平面的法线 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收投影的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量a在指定向量上的投影

___

### projectOnPlane

▸ `Static` **projectOnPlane**(`a`, `n`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量a在指定平面上的投影

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `n` | [`Vector`](Type.Type.Vector.md) | 指定平面的法线 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量a在指定平面上的投影

___

### reflect

▸ `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

求反射角

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDirection` | [`Vector`](Type.Type.Vector.md) | 入射向量角度 |
| `inNormal` | [`Vector`](Type.Type.Vector.md) | 法线向量 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

反射角

___

### rotateX

▸ `Static` **rotateX**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 X 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 X 轴旋转指定弧度后的 Vector 对象

___

### rotateY

▸ `Static` **rotateY**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 Y 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Y 轴旋转指定弧度后的 Vector 对象

___

### rotateZ

▸ `Static` **rotateZ**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 Z 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Z 轴旋转指定弧度后的 Vector 对象

___

### round

▸ `Static` **round**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量a逐元素向量四舍五入取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素四舍五入取整后的 Vector 对象

___

### set

▸ `Static` **set**(`outer`, `x`, `y`, `z`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置向量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer` | [`Vector`](Type.Type.Vector.md) | 被设置的向量对象 |
| `x` | `number` | x分量 |
| `y` | `number` | y分量 |
| `z` | `number` | z分量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

被设置的 Vector 对象

___

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`a`): `number`

**`Description`**

求向量长度平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |

#### Returns

`number`

向量长度平方

___

### squaredDistance

▸ `Static` **squaredDistance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`number`

欧氏距离平方

___

### strictEquals

▸ `Static` **strictEquals**(`a`, `b`): `boolean`

**`Description`**

向量等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |

#### Returns

`boolean`

两向量是否相等

___

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量a减去向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](Type.Type.Vector.md) | 向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | 向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相减的结果 Vector 对象
