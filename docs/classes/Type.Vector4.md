[Data](../groups/Data.Data.md) / Vector4

# Vector4 <Badge type="tip" text="Class" /> <Score text="Vector4" />

由分量 (x,y,z,w) 组成的4D齐次向量

## Table of contents

| Properties |
| :-----|
| **[w](Type.Vector4.md#w)**: `number` <br> w 分量|
| **[x](Type.Vector4.md#x)**: `number` <br> x 分量|
| **[y](Type.Vector4.md#y)**: `number` <br> y 分量|
| **[z](Type.Vector4.md#z)**: `number` <br> z 分量|

| Accessors |
| :-----|
| **[length](Type.Vector4.md#length)**(): `number` <br> 计算向量长度 (模)|
| **[magnitude](Type.Vector4.md#magnitude)**(`a`: [`Vector4`](Type.Vector4.md)): `number` <br> 求向量长度|
| **[negative](Type.Vector4.md#negative)**(): [`Vector4`](Type.Vector4.md) <br> 返回各个分量取反的新向量|
| **[normalized](Type.Vector4.md#normalized)**(): [`Vector4`](Type.Vector4.md) <br> 返回一个归一化的新向量,但不影响本向量.|
| **[sqrLength](Type.Vector4.md#sqrlength)**(): `number` <br> 计算向量长度 (模)的平方|
| **[sqrMagnitude](Type.Vector4.md#sqrmagnitude)**(`a`: [`Vector4`](Type.Vector4.md)): `number` <br> 求向量长度平方|
| **[negOne](Type.Vector4.md#negone)**(): [`Vector4`](Type.Vector4.md) <br> (-1, -1, -1, -1)|
| **[one](Type.Vector4.md#one)**(): [`Vector4`](Type.Vector4.md) <br> (1, 1, 1, 1)|
| **[zero](Type.Vector4.md#zero)**(): [`Vector4`](Type.Vector4.md) <br> (0, 0, 0, 0)|

| Methods |
| :-----|
| **[add](Type.Vector4.md#add)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 计算ab两个向量相加|
| **[clone](Type.Vector4.md#clone)**(`a`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 获得指定向量的拷贝|
| **[divide](Type.Vector4.md#divide)**(`a`: [`Vector4`](Type.Vector4.md), `b`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 遍历向量a的每个分量除以数字b|
| **[equals](Type.Vector4.md#equals)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `epsilon?`: `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[fromString](Type.Vector4.md#fromstring)**(`str`: `string`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 通过一个字符串创建 Vector4 对象|
| **[multiply](Type.Vector4.md#multiply)**(`a`: [`Vector4`](Type.Vector4.md), `b`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 遍历向量a的每个分量乘以数字b|
| **[normalize](Type.Vector4.md#normalize)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 归一化向量|
| **[strictEquals](Type.Vector4.md#strictequals)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Vector4.md#subtract)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 计算向量a减去向量b|
| **[toString](Type.Vector4.md#tostring)**(): `string` <br> 输出为格式化字符串|
| **[add](Type.Vector4.md#add-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 计算ab两个向量相加|
| **[ceil](Type.Vector4.md#ceil)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量向上取整|
| **[clone](Type.Vector4.md#clone-1)**(`a`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 获得指定向量的拷贝|
| **[copy](Type.Vector4.md#copy)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 将向量a的值赋给向量b|
| **[distance](Type.Vector4.md#distance)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): `number` <br> 求两向量的欧氏距离|
| **[divide](Type.Vector4.md#divide-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 遍历向量a的每个分量除以数字b|
| **[dot](Type.Vector4.md#dot)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): `number` <br> 向量点积 (数量积)|
| **[equals](Type.Vector4.md#equals-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `epsilon?`: `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[floor](Type.Vector4.md#floor)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量向下取整|
| **[fromString](Type.Vector4.md#fromstring-1)**(`str`: `string`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 通过一个字符串创建 Vector4 对象|
| **[invert](Type.Vector4.md#invert)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量取倒数，接近 0 时返回 Infinity|
| **[invertSafe](Type.Vector4.md#invertsafe)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md), `epsilon?`: `number`): [`Vector4`](Type.Vector4.md) <br> 逐元素向量取倒数，接近 0 时返回 0|
| **[lerp](Type.Vector4.md#lerp)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `t`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量线性插值： A + t * (B - A)|
| **[magnitude](Type.Vector4.md#magnitude-1)**(`a`: [`Vector4`](Type.Vector4.md)): `number` <br> 求向量长度|
| **[max](Type.Vector4.md#max)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量最大值|
| **[min](Type.Vector4.md#min)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量最小值|
| **[moveTowards](Type.Vector4.md#movetowards)**(`current`: [`Vector4`](Type.Vector4.md), `target`: [`Vector4`](Type.Vector4.md), `maxDistanceDelta`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 向目标向量移动|
| **[multiply](Type.Vector4.md#multiply-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: `number`, `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 遍历向量a的每个分量乘以数字b|
| **[negate](Type.Vector4.md#negate)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量取负|
| **[normalize](Type.Vector4.md#normalize-1)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 归一化向量|
| **[round](Type.Vector4.md#round)**(`a`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 逐元素向量四舍五入取整|
| **[set](Type.Vector4.md#set)**(`a`: [`Vector4`](Type.Vector4.md), `x`: `number`, `y`: `number`, `z`: `number`, `w`: `number`): [`Vector4`](Type.Vector4.md) <br> 设置向量值|
| **[sqrMagnitude](Type.Vector4.md#sqrmagnitude-1)**(`a`: [`Vector4`](Type.Vector4.md)): `number` <br> 求向量长度平方|
| **[squaredDistance](Type.Vector4.md#squareddistance)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): `number` <br> 求两向量的欧氏距离平方|
| **[strictEquals](Type.Vector4.md#strictequals-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Vector4.md#subtract-1)**(`a`: [`Vector4`](Type.Vector4.md), `b`: [`Vector4`](Type.Vector4.md), `outer?`: [`Vector4`](Type.Vector4.md)): [`Vector4`](Type.Vector4.md) <br> 计算向量a减去向量b|

用给定的 x 值设定给 x，y，z，w

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | 给定的 x 值 default:0.0 |

• **new Vector4**(`x`, `y`, `z`, `w`)

用给定的 x，y，z，w 分量构建一个新的 Vector4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 给定的 x 值 default:0.0 |
| `y` | `number` | 给定的 y 值 default:0.0 |
| `z` | `number` | 给定的 z 值 default:0.0 |
| `w` | `number` | 给定的 w 值 default:0.0 |

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

• `get` **length**(): `number`

计算向量长度 (模)

#### Returns

`number`

___

### magnitude <Score text="magnitude" /> 

• `get` **magnitude**(): `number`

计算向量的长度

#### Returns

`number`

___

### negative <Score text="negative" /> 

• `get` **negative**(): [`Vector4`](Type.Vector4.md)

返回各个分量取反的新向量

#### Returns

[`Vector4`](Type.Vector4.md)

___

### normalized <Score text="normalized" /> 

• `get` **normalized**(): [`Vector4`](Type.Vector4.md)

返回一个归一化的新向量,但不影响本向量.

#### Returns

[`Vector4`](Type.Vector4.md)

___

### sqrLength <Score text="sqrLength" /> 

• `get` **sqrLength**(): `number`

计算向量长度 (模)的平方

#### Returns

`number`

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `get` **sqrMagnitude**(): `number`

计算向量的长度平方

#### Returns

`number`

___

### negOne <Score text="negOne" /> 

• `Static` `get` **negOne**(): [`Vector4`](Type.Vector4.md)

(-1, -1, -1, -1)

#### Returns

[`Vector4`](Type.Vector4.md)

___

### one <Score text="one" /> 

• `Static` `get` **one**(): [`Vector4`](Type.Vector4.md)

(1, 1, 1, 1)

#### Returns

[`Vector4`](Type.Vector4.md)

___

### zero <Score text="zero" /> 

• `Static` `get` **zero**(): [`Vector4`](Type.Vector4.md)

(0, 0, 0, 0)

#### Returns

[`Vector4`](Type.Vector4.md)

## Methods

### add <Score text="add" /> 

• **add**(`v`): [`Vector4`](Type.Vector4.md) 

加一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Vector4.md) | 相加的向量对象 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

___

### clone <Score text="clone" /> 

• **clone**(): [`Vector4`](Type.Vector4.md) 

克隆当前向量


#### Returns

[`Vector4`](Type.Vector4.md)

克隆的到的新 Vector4 对象

___

### divide <Score text="divide" /> 

• **divide**(`v`): [`Vector4`](Type.Vector4.md) 

每个分量除以参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 相除的向量对象 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

• **divide**(`v`): [`Vector4`](Type.Vector4.md) 

除以一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Vector4.md) | 每个分量除以的参数 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

___

### equals <Score text="equals" /> 

• **equals**(`a`, `epsilon?`): `boolean` 

判断当前向量是否在误差范围内与向量a相等


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 读取的字符串 |


___

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Vector4`](Type.Vector4.md) 

乘以一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Vector4.md) | 相乘的向量对象 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

• **multiply**(`v`): [`Vector4`](Type.Vector4.md) 

每个分量乘以参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量乘以的参数 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

___

### normalize <Score text="normalize" /> 

• **normalize**(): [`Vector4`](Type.Vector4.md) 

将当前向量归一化


#### Returns

[`Vector4`](Type.Vector4.md)

归一化后的自身对象

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`a`): `boolean` 

判断当前向量是否与向量a相等


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |

#### Returns

`boolean`

是否相等

___

### subtract <Score text="subtract" /> 

• **subtract**(`v`): [`Vector4`](Type.Vector4.md) 

减去一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Vector4.md) | 相减的向量对象 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的自身对象

___

### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为格式化字符串


#### Returns

`string`

Vector4 对象值的字符串

___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

计算ab两个向量相加


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相加的结果 Vector4 对象

___

### ceil <Score text="ceil" /> 

• `Static` **ceil**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量向上取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素向上取整得到的 Vector4 对象

___

### clone <Score text="clone" /> 

• `Static` **clone**(`a`): [`Vector4`](Type.Vector4.md) 

获得指定向量的拷贝


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |

#### Returns

[`Vector4`](Type.Vector4.md)

克隆得到的新 Vector4 对象

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `b`): [`Vector4`](Type.Vector4.md) 

将向量a的值赋给向量b


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |

#### Returns

[`Vector4`](Type.Vector4.md)

向量a

___

### distance <Score text="distance" /> 

• `Static` **distance**(`a`, `b`): `number` 

求两向量的欧氏距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |

#### Returns

`number`

两向量的欧氏距离

___

### divide <Score text="divide" /> 

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

遍历向量a的每个分量除以数字b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | `number` | 数字b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相除的结果 Vector4 对象

• `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

计算向量a除以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相除的结果 Vector4 对象

___

### dot <Score text="dot" /> 

• `Static` **dot**(`a`, `b`): `number` 

向量点积 (数量积)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |

#### Returns

`number`

向量点积

___

### equals <Score text="equals" /> 

• `Static` **equals**(`a`, `b`, `epsilon?`): `boolean` 

排除浮点数误差的向量近似等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `epsilon?` | `number` | 最小误差数 对象 default:1.e-8 |

#### Returns

`boolean`

是否相等

___

### floor <Score text="floor" /> 

• `Static` **floor**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量向下取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素向下取整得到的 Vector4 对象

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Vector4`](Type.Vector4.md) 

通过一个字符串创建 Vector4 对象


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

新创建的 Vector4 对象

___

### invert <Score text="invert" /> 

• `Static` **invert**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量取倒数，接近 0 时返回 Infinity


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

___

### invertSafe <Score text="invertSafe" /> 

• `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector4`](Type.Vector4.md) 

逐元素向量取倒数，接近 0 时返回 0


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量线性插值： A + t * (B - A)


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `t` | `number` | 插值 |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

插值得到的 Vector4 向量

___

### magnitude <Score text="magnitude" /> 

• `Static` **magnitude**(`a`): `number` 

求向量长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |

#### Returns

`number`

向量长度

___

### max <Score text="max" /> 

• `Static` **max**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量最大值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素取最大值得到的 Vector4 对象

___

### min <Score text="min" /> 

• `Static` **min**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量最小值


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素向量取最小值得到的 Vector4 对象

___

### moveTowards <Score text="moveTowards" /> 

• `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector4`](Type.Vector4.md) 

向目标向量移动


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | [`Vector4`](Type.Vector4.md) | 当前向量 |
| `target` | [`Vector4`](Type.Vector4.md) | 目标向量 |
| `maxDistanceDelta` | `number` | 最大平均移动距离 |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

移动后的位置

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

遍历向量a的每个分量乘以数字b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | `number` | 数字b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相乘的结果 Vector4 对象

• `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

计算向量a乘以向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相乘的结果 Vector4 对象

___

### negate <Score text="negate" /> 

• `Static` **negate**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量取负


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素取负得到的 Vector4 对象

___

### normalize <Score text="normalize" /> 

• `Static` **normalize**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

归一化向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

归一化后得到的 Vector4 对象

___

### round <Score text="round" /> 

• `Static` **round**(`a`, `outer?`): [`Vector4`](Type.Vector4.md) 

逐元素向量四舍五入取整


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

逐元素四舍五入取整得到的 Vector4 对象

___

### set <Score text="set" /> 

• `Static` **set**(`a`, `x`, `y`, `z`, `w`): [`Vector4`](Type.Vector4.md) 

设置向量值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `x` | `number` | x 分量 |
| `y` | `number` | y 分量 |
| `z` | `number` | z 分量 |
| `w` | `number` | w 分量 |

#### Returns

[`Vector4`](Type.Vector4.md)

修改后的向量a

___

### sqrMagnitude <Score text="sqrMagnitude" /> 

• `Static` **sqrMagnitude**(`a`): `number` 

求向量长度平方


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |

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
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |

#### Returns

`number`

两向量的欧氏距离平方

___

### strictEquals <Score text="strictEquals" /> 

• `Static` **strictEquals**(`a`, `b`): `boolean` 

向量等价判断


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |

#### Returns

`boolean`

是否相等

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer?`): [`Vector4`](Type.Vector4.md) 

计算向量a减去向量b


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Vector4.md)

相减的结果 Vector4 对象
