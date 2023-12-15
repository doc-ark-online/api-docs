[基础类型](../groups/基础类型.基础类型.md) / Vector

# Vector <Badge type="tip" text="Class" /> <Score text="Vector" />

三维向量

------------------

由分量 (x,y,z) 组成的三维空间中的向量

## Table of contents

### Properties <Score text="Properties" /> 
| **[x](mw.Vector.md#x)**: `number`  |
| :-----|
| X轴坐标|
| **[y](mw.Vector.md#y)**: `number`  |
| Y轴坐标|
| **[z](mw.Vector.md#z)**: `number`  |
| Z轴坐标|

### Accessors <Score text="Accessors" /> 
| **[length](mw.Vector.md#length)**(): `number`  |
| :-----|
| 向量的长度|
| **[magnitude](mw.Vector.md#magnitude)**(`a`: [`Vector`](mw.Vector.md)): `number`   |
| 向量长度|
| **[negative](mw.Vector.md#negative)**(): [`Vector`](mw.Vector.md)  |
| 获取各个分量取反的新向量|
| **[normalized](mw.Vector.md#normalized)**(): [`Vector`](mw.Vector.md)  |
| 获取一个归一化的新向量, 不影响本向量|
| **[sqrLength](mw.Vector.md#sqrlength)**(): `number`  |
| 向量的长度平方|
| **[sqrMagnitude](mw.Vector.md#sqrmagnitude)**(`a`: [`Vector`](mw.Vector.md)): `number`   |
| 向量长度平方|
| **[back](mw.Vector.md#back)**(): [`Vector`](mw.Vector.md)  |
| Vector(-1, 0, 0)|
| **[down](mw.Vector.md#down)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 0, -1)|
| **[forward](mw.Vector.md#forward)**(): [`Vector`](mw.Vector.md)  |
| Vector(1, 0, 0)|
| **[left](mw.Vector.md#left)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, -1, 0)|
| **[negOne](mw.Vector.md#negone)**(): [`Vector`](mw.Vector.md)  |
| Vector(-1, -1, -1)|
| **[one](mw.Vector.md#one)**(): [`Vector`](mw.Vector.md)  |
| Vector(1, 1, 1)|
| **[right](mw.Vector.md#right)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 1, 0)|
| **[unitX](mw.Vector.md#unitx)**(): [`Vector`](mw.Vector.md)  |
| Vector(1, 0, 0)|
| **[unitY](mw.Vector.md#unity)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 1, 0)|
| **[unitZ](mw.Vector.md#unitz)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 0, 1)|
| **[up](mw.Vector.md#up)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 0, 1)|
| **[zero](mw.Vector.md#zero)**(): [`Vector`](mw.Vector.md)  |
| Vector(0, 0, 0)|

### Methods <Score text="Methods" /> 
| **[add](mw.Vector.md#add)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| :-----|
| 两个向量相加|
| **[clone](mw.Vector.md#clone)**(`a`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 克隆向量 a 得到新的 Vector 向量|
| **[divide](mw.Vector.md#divide)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 的每个分量除以标量 b|
| **[equals](mw.Vector.md#equals)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): `boolean`   |
| 判断两向量排除浮点数误差是否近似等价|
| **[fromString](mw.Vector.md#fromstring)**(`str`: `string`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 通过一个字符串创建 Vector|
| **[multiply](mw.Vector.md#multiply)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 的每个分量乘以标量 b|
| **[normalize](mw.Vector.md#normalize)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量归一化|
| **[set](mw.Vector.md#set)**(`outer`: [`Vector`](mw.Vector.md), `x`: `number`, `y`: `number`, `z`: `number`): [`Vector`](mw.Vector.md)   |
| 设置向量的值|
| **[strictEquals](mw.Vector.md#strictequals)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `boolean`   |
| 判断向量是否相等|
| **[subtract](mw.Vector.md#subtract)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 减去向量 b|
| **[toRotation](mw.Vector.md#torotation)**(): [`Rotation`](mw.Rotation.md)   |
| 转换为对应的 Rotation|
| **[toString](mw.Vector.md#tostring)**(): `string`   |
| 输出为字符串|
| **[add](mw.Vector.md#add-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 两个向量相加|
| **[angle](mw.Vector.md#angle)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number`   |
| 向量 a 与向量 b 在 XY 平面投影的夹角角度|
| **[angle3D](mw.Vector.md#angle3d)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number`   |
| 向量 a 与向量 b 的夹角角度|
| **[ceil](mw.Vector.md#ceil)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素向上取整|
| **[clamp](mw.Vector.md#clamp)**(`value`: [`Vector`](mw.Vector.md), `minInclusive`: [`Vector`](mw.Vector.md), `maxInclusive`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 设置当前向量的值，使其各个分量都处于指定的范围内|
| **[clone](mw.Vector.md#clone-1)**(`a`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 克隆向量 a 得到新的 Vector 向量|
| **[copy](mw.Vector.md#copy)**(`a`: [`Vector`](mw.Vector.md), `outer`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获得指定向量的拷贝|
| **[cross](mw.Vector.md#cross)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 叉积|
| **[distance](mw.Vector.md#distance)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number`   |
| 两向量的欧氏距离|
| **[divide](mw.Vector.md#divide-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 的每个分量除以标量 b|
| **[dot](mw.Vector.md#dot)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number`   |
| 点积|
| **[equals](mw.Vector.md#equals-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): `boolean`   |
| 判断两向量排除浮点数误差是否近似等价|
| **[floor](mw.Vector.md#floor)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素向下取整|
| **[fromString](mw.Vector.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 通过一个字符串创建 Vector|
| **[invert](mw.Vector.md#invert)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素取倒数，接近 0 时返回 Infinity|
| **[invertSafe](mw.Vector.md#invertsafe)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md), `epsilon?`: `number`): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素取倒数，接近 0 时返回 0|
| **[lerp](mw.Vector.md#lerp)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `t`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素线性插值： a + t  * (b - a)|
| **[magnitude](mw.Vector.md#magnitude-1)**(`a`: [`Vector`](mw.Vector.md)): `number`   |
| 向量长度|
| **[max](mw.Vector.md#max)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 取两个向量对应x、y元素最小值最大值|
| **[min](mw.Vector.md#min)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 取两个向量对应x、y元素最小值|
| **[moveTowards](mw.Vector.md#movetowards)**(`current`: [`Vector`](mw.Vector.md), `target`: [`Vector`](mw.Vector.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向目标向量移动|
| **[multiply](mw.Vector.md#multiply-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 的每个分量乘以标量 b|
| **[negate](mw.Vector.md#negate)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 每个元素取负|
| **[normalize](mw.Vector.md#normalize-1)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量归一化|
| **[project](mw.Vector.md#project)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 在指定向量上的投影|
| **[projectOnPlane](mw.Vector.md#projectonplane)**(`a`: [`Vector`](mw.Vector.md), `n`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 在指定平面上的投影|
| **[reflect](mw.Vector.md#reflect)**(`inDirection`: [`Vector`](mw.Vector.md), `inNormal`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 反射|
| **[rotateX](mw.Vector.md#rotatex)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 绕 X 轴旋转指定弧度|
| **[rotateY](mw.Vector.md#rotatey)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 绕 Y 轴旋转指定弧度|
| **[rotateZ](mw.Vector.md#rotatez)**(`v`: [`Vector`](mw.Vector.md), `o`: [`Vector`](mw.Vector.md), `a`: `number`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 绕 Z 轴旋转指定弧度|
| **[round](mw.Vector.md#round)**(`a`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 每个元素四舍五入取整|
| **[set](mw.Vector.md#set-1)**(`outer`: [`Vector`](mw.Vector.md), `x`: `number`, `y`: `number`, `z`: `number`): [`Vector`](mw.Vector.md)   |
| 设置向量的值|
| **[sqrMagnitude](mw.Vector.md#sqrmagnitude-1)**(`a`: [`Vector`](mw.Vector.md)): `number`   |
| 向量长度平方|
| **[squaredDistance](mw.Vector.md#squareddistance)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `number`   |
| 两向量的欧氏距离平方|
| **[strictEquals](mw.Vector.md#strictequals-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md)): `boolean`   |
| 判断向量是否相等|
| **[subtract](mw.Vector.md#subtract-1)**(`a`: [`Vector`](mw.Vector.md), `b`: [`Vector`](mw.Vector.md), `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 向量 a 减去向量 b|

用给定的 x, y 和 z 分量构建一个新的 Vector

#### Parameters

| `x?` `number` | x分量 default:0 |
| :------ | :------ |
| `y?` `number` | y分量 default:0 |
| `z?` `number` | z分量 default:0 |

• **new Vector**(`f`)

用给定的 f 值设定给 x, y 和 z

#### Parameters

| `f` `number` | 给定的 f 值 |
| :------ | :------ |

• **new Vector**(`v`)

用给定的 Vector 的值的 x, y 和 z 分量设定给x，y 和 z

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 给定的 Vector |
| :------ | :------ |

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

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **length**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


向量的长度

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

向量的长度

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |


### negative <Score text="negative" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **negative**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取各个分量取反的新向量

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### normalized <Score text="normalized" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalized**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取一个归一化的新向量, 不影响本向量

#### Returns

| [`Vector`](mw.Vector.md) |  |
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


向量的长度平方

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

向量的长度平方

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |


### back <Score text="back" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **back**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(-1, 0, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### down <Score text="down" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **down**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 0, -1)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### forward <Score text="forward" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **forward**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(1, 0, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### left <Score text="left" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **left**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, -1, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### negOne <Score text="negOne" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **negOne**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(-1, -1, -1)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### one <Score text="one" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **one**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(1, 1, 1)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### right <Score text="right" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **right**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 1, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitX <Score text="unitX" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitX**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(1, 0, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitY <Score text="unitY" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitY**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 1, 0)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitZ <Score text="unitZ" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitZ**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 0, 1)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### up <Score text="up" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **up**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 0, 1)

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### zero <Score text="zero" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **zero**(): [`Vector`](mw.Vector.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Vector(0, 0, 0)

#### Returns

</td>
</tr></tbody>
</table>

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector`](mw.Vector.md) 

加一个向量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相加的结果 Vector 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 相加的向量对象 |
| :------ | :------ |
### clone <Score text="clone" /> 

• **clone**(): [`Vector`](mw.Vector.md) 

克隆当前向量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 克隆得到的新 Vector 对象 |
| :------ | :------ |


### divide <Score text="divide" /> 

• **divide**(`v`): [`Vector`](mw.Vector.md) 

除以一个标量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相除的结果 Vector 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 除以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相除的结果 Vector 对象 |
| :------ | :------ |

#### Parameters

| `v` `number` | 每个分量除以的参数 |
| :------ | :------ |
判断当前向量是否在误差范围内与指定向量相等

::: warning Precautions

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

:::

#### Parameters

| `other` [`Vector`](mw.Vector.md) | 指定的向量 |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| `boolean` | 当前向量是否在误差范围内与指定向量相等 |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据

#### Parameters

| `str` `string` | 待转化的 string |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 转化后的 Vector 对象 |
| :------ | :------ |

#### Parameters

| `str` `string` | 读取的字符 |
| :------ | :------ |

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Vector`](mw.Vector.md) 

乘以一个向量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相乘的结果 Vector 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 乘以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相乘的结果 Vector 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 相乘的向量对象 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 修改后的自身对象 |
| :------ | :------ |
| [`Vector`](mw.Vector.md) | 归一化后的向量 |
| :------ | :------ |

___

### set <Score text="set" /> 

• **set**(`other`): [`Vector`](mw.Vector.md) 

设置当前向量使其与指定向量相等

#### Parameters

| `outer` [`Vector`](mw.Vector.md) | 被设置的向量对象 |
| :------ | :------ |
| `x` `number` | x分量 |
| `y` `number` | y分量 |
| `z` `number` | z分量 |

#### Returns

| [`Vector`](mw.Vector.md) | 被设置的 Vector 对象 |
| :------ | :------ |


• **set**(`x?`, `y?`, `z?`): [`Vector`](mw.Vector.md) 

设置当前向量的具体分量值

#### Parameters

| `x?` `number` | x分量 default:0 |
| :------ | :------ |
| `y?` `number` | y分量 default:0 |
| `z?` `number` | z分量 default:0 |

#### Returns

| [`Vector`](mw.Vector.md) | 修改后的自身对象 |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` 

判断当前向量是否与指定向量相等

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `boolean` | 两向量是否相等 |
| :------ | :------ |


| `boolean` 当前向量是否与指定向量相等 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector`](mw.Vector.md) 

减去一个向量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相减的结果 Vector 对象 |
| :------ | :------ |

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 相减的向量对象 |
| :------ | :------ |
### toRotation <Score text="toRotation" /> 

• **toRotation**(): [`Rotation`](mw.Rotation.md) 

转换为对应的 Rotation

#### Returns

| [`Rotation`](mw.Rotation.md) | 新的对应的Rotation对象 |
| :------ | :------ |

___

### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为字符串

#### Returns

| `string` | 向量值字符串 |
| :------ | :------ |

___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

两个向量相加

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相加的结果 Vector 对象 |
| :------ | :------ |

___

### angle <Score text="angle" /> 

• `Static` **angle**(`a`, `b`): `number` 

向量 a 与向量 b 在 XY 平面投影的夹角角度

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `number` | 夹角角度 |
| :------ | :------ |

___

### angle3D <Score text="angle" /> 

• `Static` **angle3D**(`a`, `b`): `number` 

向量 a 与向量 b 的夹角角度

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `number` | 夹角角度 |
| :------ | :------ |

___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素向上取整

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素向上取整的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### clamp <Score text="clamp" /> 

• `Static` **clamp**(`value`, `minInclusive`, `maxInclusive`): [`Vector`](mw.Vector.md) 

设置当前向量的值，使其各个分量都处于指定的范围内

#### Parameters

| `value` [`Vector`](mw.Vector.md) | 当前向量的值 |
| :------ | :------ |
| `minInclusive` [`Vector`](mw.Vector.md) | 允许的最小值 |
| `maxInclusive` [`Vector`](mw.Vector.md) | 允许的最大值 |

#### Returns

| [`Vector`](mw.Vector.md) | 各个分量都处于指定的范围内的向量 |
| :------ | :------ |

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector`](mw.Vector.md) 

克隆向量 a 得到新的 Vector 向量

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 克隆得到的新 Vector 对象 |
| :------ | :------ |

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `outer`): [`Vector`](mw.Vector.md) 

获得指定向量的拷贝

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 目标向量 |
| :------ | :------ |
| `outer` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 克隆得到的新 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### cross <Score text="cross" /> 

• `Static` **cross**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

叉积

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 叉积 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

两向量的欧氏距离

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `number` | 欧氏距离 |
| :------ | :------ |

___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 的每个分量除以标量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相除的结果 Vector 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 除以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相除的结果 Vector 对象 |
| :------ | :------ |

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

点积

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `number` | 点积 |
| :------ | :------ |

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

判断两向量排除浮点数误差是否近似等价

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `epsilon?` `number` | 最小误差数 default:MathDefine.EPSILON |

#### Returns

| `boolean` | 是否等价 |
| :------ | :------ |

___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素向下取整

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素向下取整的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector`](mw.Vector.md) 

通过一个字符串创建 Vector

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `str` `string` | 待转化的 string |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 转化后的 Vector 对象 |
| :------ | :------ |

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素取倒数，接近 0 时返回 Infinity

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素取倒数后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素取倒数，接近 0 时返回 0

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素取倒数后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素线性插值： a + t  * (b - a)

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `t` `number` | 插值 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 线性插值得到的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

向量长度

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

取两个向量对应x、y元素最小值最大值

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素取最大值的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

取两个向量对应x、y元素最小值

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素取最小值后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector`](mw.Vector.md) 

向目标向量移动

#### Parameters

| `current` [`Vector`](mw.Vector.md) | 当前向量 |
| :------ | :------ |
| `target` [`Vector`](mw.Vector.md) | 目标向量 |
| `maxDistanceDelta` `number` | 最大移动分量 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的 Vector 对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 移动后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 的每个分量乘以标量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` `number` | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相乘的结果 Vector 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 乘以向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相乘的结果 Vector 对象 |
| :------ | :------ |

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 每个元素取负

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素取负后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

向量归一化

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 归一化后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### project <Score text="project" /> 

• `Static` **project**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 在指定向量上的投影

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 指定平面的法线 |
| `outer?` [`Vector`](mw.Vector.md) | 接收投影的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 向量a在指定向量上的投影 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### projectOnPlane <Score text="projectOnPlane" /> 

• `Static` **projectOnPlane**(`a`, `n`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 在指定平面上的投影

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `n` [`Vector`](mw.Vector.md) | 指定平面的法线 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 向量a在指定平面上的投影 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### reflect <Score text="reflect" /> 

• `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector`](mw.Vector.md) 

反射

#### Parameters

| `inDirection` [`Vector`](mw.Vector.md) | 入射向量角度 |
| :------ | :------ |
| `inNormal` [`Vector`](mw.Vector.md) | 法线向量 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 反射 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### rotateX <Score text="rotateX" /> 

• `Static` **rotateX**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 X 轴旋转指定弧度

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 旋转向量 |
| :------ | :------ |
| `o` [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` `number` | 旋转弧度 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 绕 X 轴旋转指定弧度后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### rotateY <Score text="rotateY" /> 

• `Static` **rotateY**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 Y 轴旋转指定弧度

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 旋转矢量 |
| :------ | :------ |
| `o` [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` `number` | 旋转弧度 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 绕 Y 轴旋转指定弧度后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### rotateZ <Score text="rotateZ" /> 

• `Static` **rotateZ**(`v`, `o`, `a`, `outer?`): [`Vector`](mw.Vector.md) 

绕 Z 轴旋转指定弧度

#### Parameters

| `v` [`Vector`](mw.Vector.md) | 旋转矢量 |
| :------ | :------ |
| `o` [`Vector`](mw.Vector.md) | 旋转中心 |
| `a` `number` | 旋转弧度 |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 绕 Z 轴旋转指定弧度后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector`](mw.Vector.md) 

每个元素四舍五入取整

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 逐元素四舍五入取整后的 Vector 对象 |
| :------ | :------ |

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

___

### set <Score text="set" /> 

• `Static` **set**(`outer`, `x`, `y`, `z`): [`Vector`](mw.Vector.md) 

设置向量的值

#### Parameters

| `outer` [`Vector`](mw.Vector.md) | 被设置的向量对象 |
| :------ | :------ |
| `x` `number` | x分量 |
| `y` `number` | y分量 |
| `z` `number` | z分量 |

#### Returns

| [`Vector`](mw.Vector.md) | 被设置的 Vector 对象 |
| :------ | :------ |

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

向量长度平方

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

___

### squaredDistance <Score text="squaredDistance" /> 

• `Static` **squaredDistance**(`a`, `b`): `number` 

两向量的欧氏距离平方

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `number` | 欧氏距离平方 |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

判断向量是否相等

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |

#### Returns

| `boolean` | 两向量是否相等 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector`](mw.Vector.md) 

向量 a 减去向量 b

outer 为可选参数。作用是：当传入 outer，计算结果会赋值给 outer。（传入的 outer 向量不能为 null/undefined）

#### Parameters

| `a` [`Vector`](mw.Vector.md) | 向量 a |
| :------ | :------ |
| `b` [`Vector`](mw.Vector.md) | 向量 b |
| `outer?` [`Vector`](mw.Vector.md) | 接收结果的向量对象 default:null |

#### Returns

| [`Vector`](mw.Vector.md) | 相减的结果 Vector 对象 |
| :------ | :------ |
