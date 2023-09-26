[TYPE](../groups/Core.TYPE.md) / Vector4

# Vector4 <Badge type="tip" text="Class" /> <Score text="Vector4" />

<p class="content-big">

由分量 (x,y,z,w) 组成的4D齐次向量

</p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new Vector4**(`x?`: `number`)  |
| :-----|
| 用给定的 x，y，z，w 分量构建一个新的 Vector4|

### Properties <Score text="Properties" /> 
| **[w](mw.Vector4.md#w)**: `number`  |
| :-----|
| w 分量|
| **[x](mw.Vector4.md#x)**: `number`  |
| x 分量|
| **[y](mw.Vector4.md#y)**: `number`  |
| y 分量|
| **[z](mw.Vector4.md#z)**: `number`  |
| z 分量|

### Accessors <Score text="Accessors" /> 
| **[length](mw.Vector4.md#length)**(): `number`  |
| :-----|
| 计算向量长度 (模)|
| **[magnitude](mw.Vector4.md#magnitude)**(`a`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求向量长度|
| [negative](mw.Vector4.md#negative) |
| **[normalized](mw.Vector4.md#normalized)**(): [`Vector4`](mw.Vector4.md)  |
| 返回一个归一化的新向量,但不影响本向量.|
| **[sqrLength](mw.Vector4.md#sqrlength)**(): `number`  |
| 计算向量长度 (模)的平方|
| **[sqrMagnitude](mw.Vector4.md#sqrmagnitude)**(`a`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求向量长度平方|
| [negOne](mw.Vector4.md#negone) |
| **[one](mw.Vector4.md#one)**(): [`Vector4`](mw.Vector4.md)  |
| (1, 1, 1, 1)|
| **[zero](mw.Vector4.md#zero)**(): [`Vector4`](mw.Vector4.md)  |
| (0, 0, 0, 0)|

### Methods <Score text="Methods" /> 
| **[add](mw.Vector4.md#add)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| :-----|
| 计算ab两个向量相加|
| **[clone](mw.Vector4.md#clone)**(`a`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 获得指定向量的拷贝|
| **[divide](mw.Vector4.md#divide)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a除以向量b|
| **[equals](mw.Vector4.md#equals)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的向量近似等价判断|
| **[fromString](mw.Vector4.md#fromstring)**(`str`: `string`, `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 通过一个字符串创建 Vector4 对象|
| **[multiply](mw.Vector4.md#multiply)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a乘以向量b|
| **[normalize](mw.Vector4.md#normalize)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 归一化向量|
| **[strictEquals](mw.Vector4.md#strictequals)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): `boolean`  |
| 向量等价判断|
| **[subtract](mw.Vector4.md#subtract)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a减去向量b|
| **[toString](mw.Vector4.md#tostring)**(): `string`  |
| 输出为格式化字符串|
| **[add](mw.Vector4.md#add-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算ab两个向量相加|
| **[ceil](mw.Vector4.md#ceil)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量向上取整|
| **[clone](mw.Vector4.md#clone-1)**(`a`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 获得指定向量的拷贝|
| **[copy](mw.Vector4.md#copy)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 将向量a的值赋给向量b|
| **[distance](mw.Vector4.md#distance)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求两向量的欧氏距离|
| **[divide](mw.Vector4.md#divide-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a除以向量b|
| **[dot](mw.Vector4.md#dot)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): `number`  |
| 向量点积 (数量积)|
| **[equals](mw.Vector4.md#equals-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `epsilon?`: `number`): `boolean`  |
| 排除浮点数误差的向量近似等价判断|
| **[floor](mw.Vector4.md#floor)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量向下取整|
| **[fromString](mw.Vector4.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 通过一个字符串创建 Vector4 对象|
| **[invert](mw.Vector4.md#invert)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量取倒数，接近 0 时返回 Infinity|
| **[invertSafe](mw.Vector4.md#invertsafe)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md), `epsilon?`: `number`): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量取倒数，接近 0 时返回 0|
| **[lerp](mw.Vector4.md#lerp)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `t`: `number`, `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量线性插值： A + t * (B - A)|
| **[magnitude](mw.Vector4.md#magnitude-1)**(`a`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求向量长度|
| **[max](mw.Vector4.md#max)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量最大值|
| **[min](mw.Vector4.md#min)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量最小值|
| **[moveTowards](mw.Vector4.md#movetowards)**(`current`: [`Vector4`](mw.Vector4.md), `target`: [`Vector4`](mw.Vector4.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 向目标向量移动|
| **[multiply](mw.Vector4.md#multiply-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a乘以向量b|
| **[negate](mw.Vector4.md#negate)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量取负|
| **[normalize](mw.Vector4.md#normalize-1)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 归一化向量|
| **[round](mw.Vector4.md#round)**(`a`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 逐元素向量四舍五入取整|
| **[set](mw.Vector4.md#set)**(`a`: [`Vector4`](mw.Vector4.md), `x`: `number`, `y`: `number`, `z`: `number`, `w`: `number`): [`Vector4`](mw.Vector4.md)  |
| 设置向量值|
| **[sqrMagnitude](mw.Vector4.md#sqrmagnitude-1)**(`a`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求向量长度平方|
| **[squaredDistance](mw.Vector4.md#squareddistance)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): `number`  |
| 求两向量的欧氏距离平方|
| **[strictEquals](mw.Vector4.md#strictequals-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md)): `boolean`  |
| 向量等价判断|
| **[subtract](mw.Vector4.md#subtract-1)**(`a`: [`Vector4`](mw.Vector4.md), `b`: [`Vector4`](mw.Vector4.md), `outer?`: [`Vector4`](mw.Vector4.md)): [`Vector4`](mw.Vector4.md)  |
| 计算向量a减去向量b|

用给定的 x 值设定给 x，y，z，w

#### Parameters

| `x?` `number` | 给定的 x 值 default:0.0 |
| :------ | :------ |

• **new Vector4**(`x`, `y`, `z`, `w`)

用给定的 x，y，z，w 分量构建一个新的 Vector4

#### Parameters

| `x` `number` | 给定的 x 值 default:0.0 |
| :------ | :------ |
| `y` `number` | 给定的 y 值 default:0.0 |
| `z` `number` | 给定的 z 值 default:0.0 |
| `w` `number` | 给定的 w 值 default:0.0 |

## Properties

### w <Score text="w" /> 

• **w**: `number`

w 分量

___

### x <Score text="x" /> 

• **x**: `number`

x 分量

___

### y <Score text="y" /> 

• **y**: `number`

y 分量

___

### z <Score text="z" /> 

• **z**: `number`

z 分量

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


计算向量长度 (模)

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

计算向量的长度

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

#### Returns

| `number` |  |
| :------ | :------ |


返回各个分量取反的新向量

#### Returns

| [`Vector4`](mw.Vector4.md) |  |
| :------ | :------ |

___

### normalized <Score text="normalized" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **normalized**(): [`Vector4`](mw.Vector4.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


返回一个归一化的新向量,但不影响本向量.

#### Returns

| [`Vector4`](mw.Vector4.md) |  |
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


计算向量长度 (模)的平方

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

计算向量的长度平方

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

#### Returns

| `number` |  |
| :------ | :------ |


(-1, -1, -1, -1)

#### Returns

| [`Vector4`](mw.Vector4.md) |  |
| :------ | :------ |

___

### one <Score text="one" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **one**(): [`Vector4`](mw.Vector4.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(1, 1, 1, 1)

#### Returns

| [`Vector4`](mw.Vector4.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### zero <Score text="zero" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **zero**(): [`Vector4`](mw.Vector4.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


(0, 0, 0, 0)

#### Returns

</td>
</tr></tbody>
</table>

| [`Vector4`](mw.Vector4.md) |  |
| :------ | :------ |

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector4`](mw.Vector4.md) 

加一个向量

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相加的结果 Vector4 对象 |
| :------ | :------ |


#### Parameters

| `v` [`Vector4`](mw.Vector4.md) | 相加的向量对象 |
| :------ | :------ |
### clone <Score text="clone" /> 

• **clone**(): [`Vector4`](mw.Vector4.md)

克隆当前向量

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| [`Vector4`](mw.Vector4.md) | 克隆得到的新 Vector4 对象 |
| :------ | :------ |



### divide <Score text="divide" /> 

• **divide**(`v`): [`Vector4`](mw.Vector4.md) <Badge type="tip" text="other" />

每个分量除以参数

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` `number` | 数字b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相除的结果 Vector4 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相除的结果 Vector4 对象 |
| :------ | :------ |

**`Effect`**


#### Parameters

| `v` `number` | 相除的向量对象 |
| :------ | :------ |
判断当前向量是否在误差范围内与向量a相等

**`Effect`**


#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据

#### Parameters

| `str` `string` | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 新创建的 Vector4 对象 |
| :------ | :------ |


#### Parameters

| `str` `string` | 读取的字符串 |
| :------ | :------ |

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Vector4`](mw.Vector4.md)

乘以一个向量

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` `number` | 数字b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相乘的结果 Vector4 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相乘的结果 Vector4 对象 |
| :------ | :------ |

**`Effect`**


#### Parameters

| `v` [`Vector4`](mw.Vector4.md) | 相乘的向量对象 |
| :------ | :------ |
将当前向量归一化

**`Effect`**


#### Returns

| [`Vector4`](mw.Vector4.md) | 归一化后的自身对象 |
| :------ | :------ |

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`a`): `boolean`

判断当前向量是否与向量a相等

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |





___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector4`](mw.Vector4.md) <Badge type="tip" text="other" /> 

减去一个向量

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相减的结果 Vector4 对象 |
| :------ | :------ |


#### Parameters

| `v` [`Vector4`](mw.Vector4.md) | 相减的向量对象 |
| :------ | :------ |
### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为格式化字符串

#### Returns

| `string` | Vector4 对象值的字符串 |
| :------ | :------ |


___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算ab两个向量相加


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相加的结果 Vector4 对象 |
| :------ | :------ |

___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量向上取整

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素向上取整得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector4`](mw.Vector4.md) 

获得指定向量的拷贝


#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| [`Vector4`](mw.Vector4.md) | 克隆得到的新 Vector4 对象 |
| :------ | :------ |

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `b`): [`Vector4`](mw.Vector4.md) 

将向量a的值赋给向量b

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |


___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

求两向量的欧氏距离

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| `number` | 两向量的欧氏距离 |
| :------ | :------ |


___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

遍历向量a的每个分量除以数字b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` `number` | 数字b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相除的结果 Vector4 对象 |
| :------ | :------ |

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相除的结果 Vector4 对象 |
| :------ | :------ |

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

向量点积 (数量积)

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| `number` | 向量点积 |
| :------ | :------ |


___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的向量近似等价判断

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `epsilon?` `number` | 最小误差数 对象 default:1.e-8 |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |


___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量向下取整

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素向下取整得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector4`](mw.Vector4.md) 

通过一个字符串创建 Vector4 对象


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `str` `string` | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 新创建的 Vector4 对象 |
| :------ | :------ |

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量取倒数，接近 0 时返回 Infinity

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素取倒数得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector4`](mw.Vector4.md) 

逐元素向量取倒数，接近 0 时返回 0

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |
| `epsilon?` `number` | 最小误差数 default:mw.MathUtil.EPSILON |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素取倒数得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量线性插值： A + t * (B - A)

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `t` `number` | 插值 |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 插值得到的 Vector4 向量 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

求向量长度


#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度 |
| :------ | :------ |

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量最大值

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素取最大值得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量最小值

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素向量取最小值得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector4`](mw.Vector4.md) 

向目标向量移动

#### Parameters

| `current` [`Vector4`](mw.Vector4.md) | 当前向量 |
| :------ | :------ |
| `target` [`Vector4`](mw.Vector4.md) | 目标向量 |
| `maxDistanceDelta` `number` | 最大平均移动距离 |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 移动后的位置 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

遍历向量a的每个分量乘以数字b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` `number` | 数字b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相乘的结果 Vector4 对象 |
| :------ | :------ |

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相乘的结果 Vector4 对象 |
| :------ | :------ |

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量取负

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素取负得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

归一化向量

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 归一化后得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector4`](mw.Vector4.md) 

逐元素向量四舍五入取整

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 逐元素四舍五入取整得到的 Vector4 对象 |
| :------ | :------ |


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

___

### set <Score text="set" /> 

• `Static` **set**(`a`, `x`, `y`, `z`, `w`): [`Vector4`](mw.Vector4.md) 

设置向量值

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `x` `number` | x 分量 |
| `y` `number` | y 分量 |
| `z` `number` | z 分量 |
| `w` `number` | w 分量 |

#### Returns

| [`Vector4`](mw.Vector4.md) | 修改后的向量a |
| :------ | :------ |


___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

求向量长度平方


#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |

#### Returns

| `number` | 向量长度平方 |
| :------ | :------ |

___

### squaredDistance <Score text="squaredDistance" /> 

• `Static` **squaredDistance**(`a`, `b`): `number` 

求两向量的欧氏距离平方

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| `number` | 两向量的欧氏距离平方 |
| :------ | :------ |


___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

向量等价判断


#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |

#### Returns

| `boolean` | 是否相等 |
| :------ | :------ |

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector4`](mw.Vector4.md) 

计算向量a减去向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| `a` [`Vector4`](mw.Vector4.md) | 向量a |
| :------ | :------ |
| `b` [`Vector4`](mw.Vector4.md) | 向量b |
| `outer?` [`Vector4`](mw.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

| [`Vector4`](mw.Vector4.md) | 相减的结果 Vector4 对象 |
| :------ | :------ |
