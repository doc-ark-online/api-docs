[TYPE](../groups/Core.TYPE.md) / Vector2

# Vector2 <Badge type="tip" text="Class" /> <Score text="Vector2" />

<span class="content-big">

由分量 (x,y) 组成的二维空间中的向量

</span>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new Vector2**(`x?`: `number`, `y?`: `number`)  |
| :-----|
| 用给定的 f 值设定给 x, y|

### Properties <Score text="Properties" /> 
| **[x](mw.Vector2.md#x)**: `number`  |
| :-----|
| 向量的 x 分量|
| **[y](mw.Vector2.md#y)**: `number`  |
| 向量的 y 分量|

### Accessors <Score text="Accessors" /> 
| **[length](mw.Vector2.md#length)**(): `number`  |
| :-----|
| 计算向量的长度|
| **[magnitude](mw.Vector2.md#magnitude)**(`a`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求向量长度|
| [negative](mw.Vector2.md#negative) |
| **[normalized](mw.Vector2.md#normalized)**(): [`Vector2`](mw.Vector2.md)  |
| 其大小为1, 但仍指向相同的方向 如果向量太小而无法归一化, 则返回 (0, 0)|
| **[sqrLength](mw.Vector2.md#sqrlength)**(): `number`  |
| 向量长度的平方|
| **[sqrMagnitude](mw.Vector2.md#sqrmagnitude)**(`a`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求向量长度平方|
| [negOne](mw.Vector2.md#negone) |
| **[one](mw.Vector2.md#one)**(): [`Vector2`](mw.Vector2.md)  |
| (1, 1)|
| **[unitX](mw.Vector2.md#unitx)**(): [`Vector2`](mw.Vector2.md)  |
| (1, 0)|
| **[unitY](mw.Vector2.md#unity)**(): [`Vector2`](mw.Vector2.md)  |
| (0, 1)|
| **[zero](mw.Vector2.md#zero)**(): [`Vector2`](mw.Vector2.md)  |
| (0, 0)|

### Methods <Score text="Methods" /> 
| **[add](mw.Vector2.md#add)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| :-----|
| 计算ab两个向量相加|
| **[clone](mw.Vector2.md#clone)**(`a`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 克隆向量a得到的新 Vector2 向量|
| **[divide](mw.Vector2.md#divide)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a除以向量b|
| **[equals](mw.Vector2.md#equals)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的向量近似等价判断|
| **[fromString](mw.Vector2.md#fromstring)**(`str`: `string`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 通过一个字符串创建 Vector2 对象|
| **[multiply](mw.Vector2.md#multiply)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a乘以向量b|
| **[normalize](mw.Vector2.md#normalize)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 归一化向量|
| **[set](mw.Vector2.md#set)**(`a`: [`Vector2`](mw.Vector2.md), `x`: `number`, `y`: `number`): [`Vector2`](mw.Vector2.md)  |
| 设置向量a的值|
| **[strictEquals](mw.Vector2.md#strictequals)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `boolean`  |
| 向量等价判断|
| **[subtract](mw.Vector2.md#subtract)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a减去向量b|
| **[toString](mw.Vector2.md#tostring)**(): `string`  |
| 输出为字符串|
| **[add](mw.Vector2.md#add-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算ab两个向量相加|
| **[angle](mw.Vector2.md#angle)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求两向量夹角角度|
| **[ceil](mw.Vector2.md#ceil)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量向上取整|
| **[clamp](mw.Vector2.md#clamp)**(`v`: [`Vector2`](mw.Vector2.md), `min`: [`Vector2`](mw.Vector2.md), `max`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 设置当前向量的值, 使其各个分量都处于指定的范围内|
| **[clone](mw.Vector2.md#clone-1)**(`a`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 克隆向量a得到的新 Vector2 向量|
| **[copy](mw.Vector2.md#copy)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 获得指定向量的拷贝|
| **[cross](mw.Vector2.md#cross)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 向量叉积 (向量积)|
| **[distance](mw.Vector2.md#distance)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求两向量的欧氏距离|
| **[divide](mw.Vector2.md#divide-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a除以向量b|
| **[dot](mw.Vector2.md#dot)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 向量点积 (数量积)|
| **[equals](mw.Vector2.md#equals-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的向量近似等价判断|
| **[floor](mw.Vector2.md#floor)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量向下取整|
| **[fromString](mw.Vector2.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 通过一个字符串创建 Vector2 对象|
| **[fromUEVector2D](mw.Vector2.md#fromuevector2d)**(`v`: `Vector2D`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 通过一个UE向量创建 Vector2 对象|
| **[invert](mw.Vector2.md#invert)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量取倒数, 接近 0 时返回 Infinity|
| **[invertSafe](mw.Vector2.md#invertsafe)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md), `epsilon?`: `number`): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量取倒数, 接近 0 时返回 0|
| **[lerp](mw.Vector2.md#lerp)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `t`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量线性插值： A + t  * (B - A)|
| **[magnitude](mw.Vector2.md#magnitude-1)**(`a`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求向量长度|
| **[max](mw.Vector2.md#max)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量最大值|
| **[min](mw.Vector2.md#min)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量最小值|
| **[moveTowards](mw.Vector2.md#movetowards)**(`current`: [`Vector2`](mw.Vector2.md), `target`: [`Vector2`](mw.Vector2.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 向目标移动|
| **[multiply](mw.Vector2.md#multiply-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a乘以向量b|
| **[negate](mw.Vector2.md#negate)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量取负|
| **[normalize](mw.Vector2.md#normalize-1)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 归一化向量|
| **[project](mw.Vector2.md#project)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a在向量b上的投影向量|
| **[random](mw.Vector2.md#random)**(`range?`: `number`): [`Vector2`](mw.Vector2.md)  |
| 生成一个在单位圆上均匀分布的随机 Vector2 对象|
| **[reflect](mw.Vector2.md#reflect)**(`inDirection`: [`Vector2`](mw.Vector2.md), `inNormal`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 求反射角|
| **[rotate](mw.Vector2.md#rotate)**(`v`: [`Vector2`](mw.Vector2.md), `radians`: `number`, `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a旋转radians度后的向量|
| **[round](mw.Vector2.md#round)**(`a`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 逐元素向量四舍五入取整|
| **[set](mw.Vector2.md#set-1)**(`a`: [`Vector2`](mw.Vector2.md), `x`: `number`, `y`: `number`): [`Vector2`](mw.Vector2.md)  |
| 设置向量a的值|
| **[signAngle](mw.Vector2.md#signangle)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 获取向量a和向量b之间的有符号角度|
| **[sqrMagnitude](mw.Vector2.md#sqrmagnitude-1)**(`a`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求向量长度平方|
| **[squaredDistance](mw.Vector2.md#squareddistance)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `number`  |
| 求两向量的欧氏距离平方|
| **[strictEquals](mw.Vector2.md#strictequals-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md)): `boolean`  |
| 向量等价判断|
| **[subtract](mw.Vector2.md#subtract-1)**(`a`: [`Vector2`](mw.Vector2.md), `b`: [`Vector2`](mw.Vector2.md), `outer?`: [`Vector2`](mw.Vector2.md)): [`Vector2`](mw.Vector2.md)  |
| 计算向量a减去向量b|

用给定的 x, y 分量构建一个新的 Vector2

#### Parameters

| `x?` `number` | x分量 default:0 |
| :------ | :------ |
| `y?` `number` | y分量 default:0 |

• **new Vector2**(`f`)

用给定的 f 值设定给 x, y

#### Parameters

| `f` `number` | 给定的 f 值 |
| :------ | :------ |

## Properties

### x <Score text="x" /> 

• **x**: `number`

向量的 x 分量

___

### y <Score text="y" /> 

• **y**: `number`

向量的 y 分量

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


计算向量的长度

#### Returns

| `number` | 向量的长度 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

计算向量的长度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

#### Returns

| `number` | 向量的长度 |
| :------ | :------ |


返回各个分量取反的新 Vector2 对象

#### Returns

| [`Vector2`](mw.Vector2.md) | 各个分量取反的新 Vector2 对象 |
| :------ | :------ |

___

### normalized <Score text="normalized" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalized**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回一个新的 Vector2 对象

其大小为1, 但仍指向相同的方向 如果向量太小而无法归一化, 则返回 (0, 0)

#### Returns

| [`Vector2`](mw.Vector2.md) | 返回一个新的 Vector2 对象 |
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


向量长度的平方

#### Returns

| `number` | 向量长度的平方 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

计算向量的长度平方

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

#### Returns

| `number` | 向量的长度平方 |
| :------ | :------ |


(-1, -1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

___

### one <Score text="one" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **one**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(1, 1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitX <Score text="unitX" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitX**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(1, 0)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### unitY <Score text="unitY" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **unitY**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(0, 1)

#### Returns

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### zero <Score text="zero" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **zero**(): [`Vector2`](mw.Vector2.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(0, 0)

#### Returns

</td>
</tr></tbody>
</table>

| [`Vector2`](mw.Vector2.md) |  |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector2`](mw.Vector2.md) 

加一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相加的结果 Vector2 对象 |
| :------ | :------ |


#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相加的向量对象 |
| :------ | :------ |
### clone <Score text="clone" /> 

• **clone**(): [`Vector2`](mw.Vector2.md)

克隆当前向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 克隆得到的新 Vector2 向量 |
| :------ | :------ |



### divide <Score text="divide" /> 

• **divide**(`v`): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="other" />

每个分量除以参数

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` `number` | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

**`Effect`**


#### Parameters

| `v` `number` | 相除的向量对象 |
| :------ | :------ |
判断当前向量是否在误差范围内与指定向量相等

**`Effect`**


#### Parameters

| `other` [`Vector2`](mw.Vector2.md) | 指定向量 |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数 default:1.e-8 |

#### Returns

| `boolean` | 两向量是否相等 |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据

#### Parameters

| `str` `string` | 传入的字符串 |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 创建的 Vector2 对象 |
| :------ | :------ |


#### Parameters

| `str` `string` | 读取的字符 |
| :------ | :------ |

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Vector2`](mw.Vector2.md)

乘以一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` `number` | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

**`Effect`**


#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相乘的向量对象 |
| :------ | :------ |
将当前向量归一化

**`Effect`**


#### Returns

| [`Vector2`](mw.Vector2.md) | 归一化后的自身对象 |
| :------ | :------ |

___

### set <Score text="set" /> 

• **set**(`other`): [`Vector2`](mw.Vector2.md) 

设置当前向量使其与指定向量相等

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `x` `number` | 修改的 x 值 |
| `y` `number` | 修改的 y 值 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的 Vector2 对象 |
| :------ | :------ |


#### Parameters

| `other` [`Vector2`](mw.Vector2.md) | 指定的向量 |
| :------ | :------ |
设置当前向量的具体分量值

**`Effect`**


#### Parameters

| `x?` `number` | x 分量 default:0.0 |
| :------ | :------ |
| `y?` `number` | y 分量 default:0.0 |

#### Returns

| [`Vector2`](mw.Vector2.md) | `this` |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean`

判断当前向量是否与指定向量相等

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |





___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector2`](mw.Vector2.md) <Badge type="tip" text="other" /> 

减去一个向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相减的结果 Vector2 对象 |
| :------ | :------ |


#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 相减的向量对象 |
| :------ | :------ |
### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为字符串

#### Returns

| `string` | 向量值字符串 |
| :------ | :------ |


___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算ab两个向量相加


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相加的结果 Vector2 对象 |
| :------ | :------ |

___

### angle <Score text="angle" /> 

• `Static` **angle**(`a`, `b`): `number` 

求两向量夹角角度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 向量a与向量b的夹角角度 |
| :------ | :------ |


___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量向上取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向上取整后的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### clamp <Score text="clamp" /> 

• `Static` **clamp**(`v`, `min`, `max`): [`Vector2`](mw.Vector2.md) 

设置当前向量的值, 使其各个分量都处于指定的范围内

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 向量v |
| :------ | :------ |
| `min` [`Vector2`](mw.Vector2.md) | 最小值 |
| `max` [`Vector2`](mw.Vector2.md) | 最大值 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的向量v |
| :------ | :------ |


___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector2`](mw.Vector2.md) 

克隆向量a得到的新 Vector2 向量


#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 克隆得到的新 Vector2 向量 |
| :------ | :------ |

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

获得指定向量的拷贝

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 拷贝得到的 Vector2 向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### cross <Score text="cross" /> 

• `Static` **cross**(`a`, `b`): `number` 

向量叉积 (向量积)

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 叉积 |
| :------ | :------ |


::: warning Precautions

注意二维向量的叉积为与 Z 轴平行的三维向量, 此处以向量的模长表示

:::

___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

求两向量的欧氏距离

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 两向量的欧氏距离 |
| :------ | :------ |


___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

遍历向量a的每个分量除以b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` `number` | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相除的结果 Vector2 对象 |
| :------ | :------ |

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

向量点积 (数量积)

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 点积 |
| :------ | :------ |


___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的向量近似等价判断

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |


___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量向下取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向下取整后的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector2`](mw.Vector2.md) 

通过一个字符串创建 Vector2 对象


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `str` `string` | 传入的字符串 |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 创建的 Vector2 对象 |
| :------ | :------ |

___

### fromUEVector2D <Score text="fromUEVector" /> 

• `Static` **fromUEVector2D**(`v`, `outer?`): [`Vector2`](mw.Vector2.md) 

通过一个UE向量创建 Vector2 对象

#### Parameters

| `v` `Vector2D` | UE.Vector |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 创建的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量取倒数, 接近 0 时返回 Infinity

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取倒数得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector2`](mw.Vector2.md) 

逐元素向量取倒数, 接近 0 时返回 0

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取倒数得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量线性插值： A + t  * (B - A)

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `t` `number` | 插值 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 线性插值得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

求向量长度


#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量最大值

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取最大值后的 Vector2 对象 |
| :------ | :------ |


___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量最小值

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素取最小值后的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector2`](mw.Vector2.md) 

向目标移动

#### Parameters

| `current` [`Vector2`](mw.Vector2.md) | 当前向量 |
| :------ | :------ |
| `target` [`Vector2`](mw.Vector2.md) | 目标向量 |
| `maxDistanceDelta` `number` | 最大移动距离 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 移动后的得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

遍历向量a的每个分量乘以b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` `number` | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相乘的结果 Vector2 对象 |
| :------ | :------ |

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量取负

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐元素向量取负得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

归一化向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 归一化后得到的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### project <Score text="project" /> 

• `Static` **project**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a在向量b上的投影向量

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 投影向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### random <Score text="random" /> 

• `Static` **random**(`range?`): [`Vector2`](mw.Vector2.md) 

生成一个在单位圆上均匀分布的随机 Vector2 对象

#### Parameters

| `range?` `number` | 范围 default:1.0 |
| :------ | :------ |

#### Returns

| [`Vector2`](mw.Vector2.md) | 得到的随机 Vector2 对象 |
| :------ | :------ |


___

### reflect <Score text="reflect" /> 

• `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector2`](mw.Vector2.md) 

求反射角

#### Parameters

| `inDirection` [`Vector2`](mw.Vector2.md) | 入射向量 |
| :------ | :------ |
| `inNormal` [`Vector2`](mw.Vector2.md) | 法线向量 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 反射角 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### rotate <Score text="rotate" /> 

• `Static` **rotate**(`v`, `radians`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a旋转radians度后的向量

#### Parameters

| `v` [`Vector2`](mw.Vector2.md) | 向量v |
| :------ | :------ |
| `radians` `number` | 旋转角度 |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 旋转后的 Vector2 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector2`](mw.Vector2.md) 

逐元素向量四舍五入取整

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 逐逐元素向量四舍五入取整后的 Vector2 对象 |
| :------ | :------ |


___

### set <Score text="set" /> 

• `Static` **set**(`a`, `x`, `y`): [`Vector2`](mw.Vector2.md) 

设置向量a的值


::: warning Precautions

向量a不能为空对象

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `x` `number` | 修改的 x 值 |
| `y` `number` | 修改的 y 值 |

#### Returns

| [`Vector2`](mw.Vector2.md) | 修改后的 Vector2 对象 |
| :------ | :------ |

___

### signAngle <Score text="signAngle" /> 

• `Static` **signAngle**(`a`, `b`): `number` 

获取向量a和向量b之间的有符号角度

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 向量a和向量b之间的有符号角度 |
| :------ | :------ |


::: warning Precautions

有符号角度的取值范围为 (-180, 180], 当前向量可以通过逆时针旋转有符号角度与指定向量同向 <br/>

:::

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

求向量长度平方


#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

___

### squaredDistance <Score text="squaredDistance" /> 

• `Static` **squaredDistance**(`a`, `b`): `number` 

求两向量的欧氏距离平方

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `number` | 两向量的欧氏距离平方 |
| :------ | :------ |


___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

向量等价判断


#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector2`](mw.Vector2.md) 

计算向量a减去向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector2`](mw.Vector2.md) | 向量a |
| :------ | :------ |
| `b` [`Vector2`](mw.Vector2.md) | 向量b |
| `outer?` [`Vector2`](mw.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

| [`Vector2`](mw.Vector2.md) | 相减的结果 Vector2 对象 |
| :------ | :------ |
