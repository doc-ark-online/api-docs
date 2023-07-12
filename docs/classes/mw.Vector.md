[TYPE](../groups/Core.TYPE.md) / Vector

# Vector <Badge type="tip" text="Class" /> <Score text="Vector" />

由分量 (x,y,z) 组成的三维空间中的向量

## Table of contents

| Properties |
| :-----|
| **[x](mw.Vector.md#x)**: `number` <br> X轴坐标|
| **[y](mw.Vector.md#y)**: `number` <br> Y轴坐标|
| **[z](mw.Vector.md#z)**: `number` <br> Z轴坐标|

| Accessors |
| :-----|
| **[length](mw.Vector.md#length)**(): `number` <br> 计算向量的长度|
| **[magnitude](mw.Vector.md#magnitude)**(`a`: [`Vector`](mw.Vector.md)): `number` <br> 求向量长度|
| **[negative](mw.Vector.md#negative)**(): [`Vector`](mw.Vector.md) <br> 返回各个分量取反的新向量|
| **[normalized](mw.Vector.md#normalized)**(): [`Vector`](mw.Vector.md) <br> 返回一个归一化的新向量, 不影响本向量|
| **[sqrLength](mw.Vector.md#sqrlength)**(): `number` <br> 计算向量的长度平方|
| **[sqrMagnitude](mw.Vector.md#sqrmagnitude)**(`a`: [`Vector`](mw.Vector.md)): `number` <br> 求向量长度平方|
| **[back](mw.Vector.md#back)**(): [`Vector`](mw.Vector.md) <br> Vector(-1, 0, 0)|
| **[down](mw.Vector.md#down)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 0, -1)|
| **[forward](mw.Vector.md#forward)**(): [`Vector`](mw.Vector.md) <br> Vector(1, 0, 0)|
| **[left](mw.Vector.md#left)**(): [`Vector`](mw.Vector.md) <br> Vector(0, -1, 0)|
| **[negOne](mw.Vector.md#negone)**(): [`Vector`](mw.Vector.md) <br> Vector(-1, -1, -1)|
| **[one](mw.Vector.md#one)**(): [`Vector`](mw.Vector.md) <br> Vector(1, 1, 1)|
| **[right](mw.Vector.md#right)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 1, 0)|
| **[unitX](mw.Vector.md#unitx)**(): [`Vector`](mw.Vector.md) <br> Vector(1, 0, 0)|
| **[unitY](mw.Vector.md#unity)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 1, 0)|
| **[unitZ](mw.Vector.md#unitz)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 0, 1)|
| **[up](mw.Vector.md#up)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 0, 1)|
| **[zero](mw.Vector.md#zero)**(): [`Vector`](mw.Vector.md) <br> Vector(0, 0, 0)|

| Methods |
| :-----|
| **[add](mw.Vector.md#add)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算ab两个向量相加|
| **[clone](mw.Vector.md#clone)**(`a`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获得指定向量的拷贝|
| **[divide](mw.Vector.md#divide)**(`a`: [`Vector`](mw.Vector.md), `b`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 遍历向量a的每个分量除以b|
| **[equals](mw.Vector.md#equals)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[fromString](mw.Vector.md#fromstring)**(`str`: `string`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 通过一个字符串创建 Vector|
| **[multiply](mw.Vector.md#multiply)**(`a`: [`Vector`](mw.Vector.md), `b`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 遍历向量a的每个分量乘以b|
| **[normalize](mw.Vector.md#normalize)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 归一化向量|
| **[set](mw.Vector.md#set)**(`outer`: [`Vector`](mw.Vector.md), `x`: `number`, `y`: `number`, `z`: `number`): [`Vector`](mw.Vector.md) <br> 设置向量值|
| **[strictEquals](mw.Vector.md#strictequals)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `boolean` <br> 向量等价判断|
| **[subtract](mw.Vector.md#subtract)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算向量a减去向量b|
| **[toRotation](mw.Vector.md#torotation)**(): [`Rotation`](mw.Rotation.md) <br> 转换为对应的Rotation|
| **[toString](mw.Vector.md#tostring)**(): `string` <br> 输出为字符串|
| **[add](mw.Vector.md#add-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算ab两个向量相加|
| **[angle](mw.Vector.md#angle)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number` <br> 求向量a与向量b在XY平面投影的夹角角度|
| **[angle3D](mw.Vector.md#angle3d)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number` <br> 求向量a与向量b的夹角角度|
| **[ceil](mw.Vector.md#ceil)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 将向量a逐元素向量向上取整|
| **[clamp](mw.Vector.md#clamp)**(`value`: [`Vector`](mw.Vector.md), `minInclusive`: [`Vector`](mw.Vector.md), `maxInclusive`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 设置当前向量的值，使其各个分量都处于指定的范围内|
| **[clone](mw.Vector.md#clone-1)**(`a`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获得指定向量的拷贝|
| **[copy](mw.Vector.md#copy)**(`a`: [`Vector`](mw.Vector.md), `outer`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 复制目标向量|
| **[cross](mw.Vector.md#cross)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 向量叉积 (向量积)|
| **[distance](mw.Vector.md#distance)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number` <br> 求两向量的欧氏距离|
| **[divide](mw.Vector.md#divide-1)**(`a`: [`Vector`](mw.Vector.md), `b`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 遍历向量a的每个分量除以b|
| **[dot](mw.Vector.md#dot)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number` <br> 向量点积 (数量积)|
| **[equals](mw.Vector.md#equals-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[floor](mw.Vector.md#floor)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 将向量a逐元素向量向下取整|
| **[fromString](mw.Vector.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 通过一个字符串创建 Vector|
| **[invert](mw.Vector.md#invert)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 将向量a逐元素向量取倒数，接近 0 时返回 Infinity|
| **[invertSafe](mw.Vector.md#invertsafe)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): [`Vector`](mw.Vector.md) <br> 将向量a逐元素向量取倒数，接近 0 时返回 0|
| **[lerp](mw.Vector.md#lerp)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `t`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 逐元素向量线性插值： A + t * (B - A)|
| **[magnitude](mw.Vector.md#magnitude-1)**(`a`: [`Vector`](mw.Vector.md)): `number` <br> 求向量长度|
| **[max](mw.Vector.md#max)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 逐元素向量最大值|
| **[min](mw.Vector.md#min)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 逐元素向量最小值|
| **[moveTowards](mw.Vector.md#movetowards)**(`current`: [`Vector`](mw.Vector.md), `target`: [`Vector`](mw.Vector.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 向目标向量移动|
| **[multiply](mw.Vector.md#multiply-1)**(`a`: [`Vector`](mw.Vector.md), `b`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 遍历向量a的每个分量乘以b|
| **[negate](mw.Vector.md#negate)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 求向量a逐元素向量取负|
| **[normalize](mw.Vector.md#normalize-1)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 归一化向量|
| **[project](mw.Vector.md#project)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算向量a在指定向量上的投影|
| **[projectOnPlane](mw.Vector.md#projectonplane)**(`a`: [`Vector`](mw.Vector.md), `n`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算向量a在指定平面上的投影|
| **[reflect](mw.Vector.md#reflect)**(`inDirection`: [`Vector`](mw.Vector.md), `inNormal`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 求反射角|
| **[rotateX](mw.Vector.md#rotatex)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 绕 X 轴旋转向量指定弧度|
| **[rotateY](mw.Vector.md#rotatey)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 绕 Y 轴旋转向量指定弧度|
| **[rotateZ](mw.Vector.md#rotatez)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 绕 Z 轴旋转向量指定弧度|
| **[round](mw.Vector.md#round)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 将向量a逐元素向量四舍五入取整|
| **[set](mw.Vector.md#set-1)**(`outer`: [`Vector`](mw.Vector.md), `x`: `number`, `y`: `number`, `z`: `number`): [`Vector`](mw.Vector.md) <br> 设置向量值|
| **[sqrMagnitude](mw.Vector.md#sqrmagnitude-1)**(`a`: [`Vector`](mw.Vector.md)): `number` <br> 求向量长度平方|
| **[squaredDistance](mw.Vector.md#squareddistance)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number` <br> 求两向量的欧氏距离平方|
| **[strictEquals](mw.Vector.md#strictequals-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `boolean` <br> 向量等价判断|
| **[subtract](mw.Vector.md#subtract-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 计算向量a减去向量b|

用给定的 x, y 和 z 分量构建一个新的 Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |

• **new Vector**(`f`)

用给定的 f 值设定给 x, y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | 给定的 f 值 |

• **new Vector**(`v`)

用给定的 Vector 的值的 x, y 和 z 分量设定给x，y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 给定的 Vector |

## Properties

### x <Score text="x" /> 

• **x**: `number`

X轴坐标

___

### y <Score text="y" /> 

• **y**: `number`

Y轴坐标

___

### z <Score text="z" /> 

• **z**: `number`

Z轴坐标

## Accessors

### length <Score text="length" /> 

• `get` **length**(): `number`

计算向量的长度

#### Returns

`number`

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

向量的长度

#### Returns

`number`

___

### negative <Score text="negative" /> 

• `get` **negative**(): [`Vector`](mw.Vector.md)

返回各个分量取反的新向量

#### Returns

[`Vector`](mw.Vector.md)

___

### normalized <Score text="normalized" /> 

• `get` **normalized**(): [`Vector`](mw.Vector.md)

返回一个归一化的新向量, 不影响本向量

#### Returns

[`Vector`](mw.Vector.md)

___

### sqrLength <Score text="sqrLength" /> 

• `get` **sqrLength**(): `number`

计算向量的长度平方

#### Returns

`number`

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

计算向量的长度平方

#### Returns

`number`

___

### back <Score text="back" /> 

• `Static` `get` **back**(): [`Vector`](mw.Vector.md)

Vector(-1, 0, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### down <Score text="down" /> 

• `Static` `get` **down**(): [`Vector`](mw.Vector.md)

Vector(0, 0, -1)

#### Returns

[`Vector`](mw.Vector.md)

___

### forward <Score text="forward" /> 

• `Static` `get` **forward**(): [`Vector`](mw.Vector.md)

Vector(1, 0, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### left <Score text="left" /> 

• `Static` `get` **left**(): [`Vector`](mw.Vector.md)

Vector(0, -1, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### negOne <Score text="negOne" /> 

• `Static` `get` **negOne**(): [`Vector`](mw.Vector.md)

Vector(-1, -1, -1)

#### Returns

[`Vector`](mw.Vector.md)

___

### one <Score text="one" /> 

• `Static` `get` **one**(): [`Vector`](mw.Vector.md)

Vector(1, 1, 1)

#### Returns

[`Vector`](mw.Vector.md)

___

### right <Score text="right" /> 

• `Static` `get` **right**(): [`Vector`](mw.Vector.md)

Vector(0, 1, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### unitX <Score text="unitX" /> 

• `Static` `get` **unitX**(): [`Vector`](mw.Vector.md)

Vector(1, 0, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### unitY <Score text="unitY" /> 

• `Static` `get` **unitY**(): [`Vector`](mw.Vector.md)

Vector(0, 1, 0)

#### Returns

[`Vector`](mw.Vector.md)

___

### unitZ <Score text="unitZ" /> 

• `Static` `get` **unitZ**(): [`Vector`](mw.Vector.md)

Vector(0, 0, 1)

#### Returns

[`Vector`](mw.Vector.md)

___

### up <Score text="up" /> 

• `Static` `get` **up**(): [`Vector`](mw.Vector.md)

Vector(0, 0, 1)

#### Returns

[`Vector`](mw.Vector.md)

___

### zero <Score text="zero" /> 

• `Static` `get` **zero**(): [`Vector`](mw.Vector.md)

Vector(0, 0, 0)

#### Returns

[`Vector`](mw.Vector.md)

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector`](mw.Vector.md) 

加一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 相加的向量对象 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

___

### clone <Score text="clone" /> 

• **clone**(): [`Vector`](mw.Vector.md) 

克隆当前向量


#### Returns

[`Vector`](mw.Vector.md)

克隆的新向量

___

### divide <Score text="divide" /> 

• **divide**(`v`): [`Vector`](mw.Vector.md) 

每个分量除以参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量除以的参数 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

• **divide**(`v`): [`Vector`](mw.Vector.md) 

除以一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 除以的向量对象 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

___

### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean` 

判断当前向量是否在误差范围内与指定向量相等


::: warning Precautions

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](mw.Vector.md) | 指定的向量 |
| `epsilon?` | `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

`boolean`

当前向量是否在误差范围内与指定向量相等

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 读取的字符 |


___

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Vector`](mw.Vector.md) 

乘以一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 相乘的向量对象 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

• **multiply**(`v`): [`Vector`](mw.Vector.md) 

每个分量乘以参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量乘以的参数 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

___

### normalize <Score text="normalize" /> 

• **normalize**(): [`Vector`](mw.Vector.md) 

将当前向量归一化


#### Returns

[`Vector`](mw.Vector.md)

归一化后的向量

___

### set <Score text="set" /> 

• **set**(`other`): [`Vector`](mw.Vector.md) 

设置当前向量使其与指定向量相等


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](mw.Vector.md) | 指定的向量 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

• **set**(`x?`, `y?`, `z?`): [`Vector`](mw.Vector.md) 

设置当前向量的具体分量值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |
| `z?` | `number` | z分量 default:0 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` 

判断当前向量是否与指定向量相等


::: warning Precautions

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector`](mw.Vector.md) | 指定的向量 |

#### Returns

`boolean`

当前向量是否与指定向量相等

___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector`](mw.Vector.md) 

减去一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 相减的向量对象 |

#### Returns

[`Vector`](mw.Vector.md)

修改后的自身对象

___

### toRotation <Score text="toRotation" /> 

• **toRotation**(): [`Rotation`](mw.Rotation.md) 

转换为对应的Rotation


#### Returns

[`Rotation`](mw.Rotation.md)

新的对应的Rotation对象

___

### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为字符串


#### Returns

`string`

向量值字符串

___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

计算ab两个向量相加


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相加的结果 Vector 对象

___

### angle <Score text="angle" /> 

• `Static` **angle**(`a`, `b`): `number` 

求向量a与向量b在XY平面投影的夹角角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`number`

夹角角度

___

### angle3D <Score text="angle" /> 

• `Static` **angle3D**(`a`, `b`): `number` 

求向量a与向量b的夹角角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`number`

夹角角度

___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

将向量a逐元素向量向上取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素向上取整的 Vector 对象

___

### clamp <Score text="clamp" /> 

• `Static` **clamp**(`value`, `minInclusive`, `maxInclusive`): [`Vector`](mw.Vector.md) 

设置当前向量的值，使其各个分量都处于指定的范围内


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector`](mw.Vector.md) | 当前向量的值 |
| `minInclusive` | [`Vector`](mw.Vector.md) | 允许的最小值 |
| `maxInclusive` | [`Vector`](mw.Vector.md) | 允许的最大值 |

#### Returns

[`Vector`](mw.Vector.md)

各个分量都处于指定的范围内的向量

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector`](mw.Vector.md) 

获得指定向量的拷贝


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |

#### Returns

[`Vector`](mw.Vector.md)

克隆得到的新 Vector 对象

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `outer`): [`Vector`](mw.Vector.md) 

复制目标向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 目标向量 |
| `outer` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

克隆得到的新 Vector 对象

___

### cross <Score text="cross" /> 

• `Static` **cross**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量叉积 (向量积)


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

叉积 Vector 对象

___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

求两向量的欧氏距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`number`

欧氏距离

___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

遍历向量a的每个分量除以b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相除的结果 Vector 对象

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相除的结果 Vector 对象

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

向量点积 (数量积)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`number`

点积

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的向量近似等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `epsilon?` | `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

是否等价

___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

将向量a逐元素向量向下取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素向下取整的 Vector 对象

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector`](mw.Vector.md) 

通过一个字符串创建 Vector


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 待转化的 string |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

转化后的 Vector 对象

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

将向量a逐元素向量取倒数，接近 0 时返回 Infinity


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素取倒数后的 Vector 对象

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector`](mw.Vector.md) 

将向量a逐元素向量取倒数，接近 0 时返回 0


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |
| `epsilon?` | `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

[`Vector`](mw.Vector.md)

逐元素取倒数后的 Vector 对象

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector`](mw.Vector.md) 

逐元素向量线性插值： A + t * (B - A)


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `t` | `number` | 插值 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

线性插值得到的 Vector 对象

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

求向量长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |

#### Returns

`number`

向量长度

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

逐元素向量最大值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素取最大值的 Vector 对象

___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

逐元素向量最小值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素取最小值后的 Vector 对象

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector`](mw.Vector.md) 

向目标向量移动


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | [`Vector`](mw.Vector.md) | 当前向量 |
| `target` | [`Vector`](mw.Vector.md) | 目标向量 |
| `maxDistanceDelta` | `number` | 最大移动分量 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

移动后的 Vector 对象

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

遍历向量a的每个分量乘以b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相乘的结果 Vector 对象

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相乘的结果 Vector 对象

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

求向量a逐元素向量取负


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素取负后的 Vector 对象

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

归一化向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

归一化后的 Vector 对象

___

### project <Score text="project" /> 

• `Static` **project**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

计算向量a在指定向量上的投影


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 指定平面的法线 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收投影的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

向量a在指定向量上的投影

___

### projectOnPlane <Score text="projectOnPlane" /> 

• `Static` **projectOnPlane**(`a`, `n`, `outer?`): [`Vector`](mw.Vector.md) 

计算向量a在指定平面上的投影


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `n` | [`Vector`](mw.Vector.md) | 指定平面的法线 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

向量a在指定平面上的投影

___

### reflect <Score text="reflect" /> 

• `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector`](mw.Vector.md) 

求反射角


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDirection` | [`Vector`](mw.Vector.md) | 入射向量角度 |
| `inNormal` | [`Vector`](mw.Vector.md) | 法线向量 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

反射角

___

### rotateX <Score text="rotateX" /> 

• `Static` **rotateX**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 X 轴旋转向量指定弧度


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

绕 X 轴旋转指定弧度后的 Vector 对象

___

### rotateY <Score text="rotateY" /> 

• `Static` **rotateY**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 Y 轴旋转向量指定弧度


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

绕 Y 轴旋转指定弧度后的 Vector 对象

___

### rotateZ <Score text="rotateZ" /> 

• `Static` **rotateZ**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 Z 轴旋转向量指定弧度


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) | 旋转矢量 |
| `o` | [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` | `number` | 旋转弧度 |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

绕 Z 轴旋转指定弧度后的 Vector 对象

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

将向量a逐元素向量四舍五入取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

[`Vector`](mw.Vector.md)

逐元素四舍五入取整后的 Vector 对象

___

### set <Score text="set" /> 

• `Static` **set**(`outer`, `x`, `y`, `z`): [`Vector`](mw.Vector.md) 

设置向量值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer` | [`Vector`](mw.Vector.md) | 被设置的向量对象 |
| `x` | `number` | x分量 |
| `y` | `number` | y分量 |
| `z` | `number` | z分量 |

#### Returns

[`Vector`](mw.Vector.md)

被设置的 Vector 对象

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

求向量长度平方


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |

#### Returns

`number`

向量长度平方

___

### squaredDistance <Score text="squaredDistance" /> 

• `Static` **squaredDistance**(`a`, `b`): `number` 

求两向量的欧氏距离平方


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`number`

欧氏距离平方

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

向量等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |

#### Returns

`boolean`

两向量是否相等

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

计算向量a减去向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector`](mw.Vector.md) | 向量a |
| `b` | [`Vector`](mw.Vector.md) | 向量b |
| `outer?` | [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

[`Vector`](mw.Vector.md)

相减的结果 Vector 对象
