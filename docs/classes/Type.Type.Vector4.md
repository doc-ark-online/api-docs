[Type](../modules/Type.Type.md) / Vector4

# Vector4 <Badge type="tip" text="Class" />

**`Description`**

由分量 (x,y,z,w) 组成的4D齐次向量

## Table of contents

| Properties |
| :-----|
| **[w](Type.Type.Vector4.md#w)**: `number` <br> w 分量|
| **[x](Type.Type.Vector4.md#x)**: `number` <br> x 分量|
| **[y](Type.Type.Vector4.md#y)**: `number` <br> y 分量|
| **[z](Type.Type.Vector4.md#z)**: `number` <br> z 分量|

| Accessors |
| :-----|
| **[length](Type.Type.Vector4.md#length)**(): `number` <br> 计算向量长度 (模)|
| **[magnitude](Type.Type.Vector4.md#magnitude)**([`Vector4`](Type.Type.Vector4.md)): `number` <br> 求向量长度|
| **[negative](Type.Type.Vector4.md#negative)**(): [`Vector4`](Type.Type.Vector4.md) <br> 返回各个分量取反的新向量|
| **[normalized](Type.Type.Vector4.md#normalized)**(): [`Vector4`](Type.Type.Vector4.md) <br> 返回一个归一化的新向量,但不影响本向量.|
| **[sqrLength](Type.Type.Vector4.md#sqrlength)**(): `number` <br> 计算向量长度 (模)的平方|
| **[sqrMagnitude](Type.Type.Vector4.md#sqrmagnitude)**([`Vector4`](Type.Type.Vector4.md)): `number` <br> 求向量长度平方|
| **[negOne](Type.Type.Vector4.md#negone)**(): [`Vector4`](Type.Type.Vector4.md) <br> (-1, -1, -1, -1)|
| **[one](Type.Type.Vector4.md#one)**(): [`Vector4`](Type.Type.Vector4.md) <br> (1, 1, 1, 1)|
| **[zero](Type.Type.Vector4.md#zero)**(): [`Vector4`](Type.Type.Vector4.md) <br> (0, 0, 0, 0)|

| Methods |
| :-----|
| **[add](Type.Type.Vector4.md#add)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 计算ab两个向量相加|
| **[clone](Type.Type.Vector4.md#clone)**([`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 获得指定向量的拷贝|
| **[divide](Type.Type.Vector4.md#divide)**([`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 遍历向量a的每个分量除以数字b|
| **[equals](Type.Type.Vector4.md#equals)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[fromString](Type.Type.Vector4.md#fromstring)**(`string`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 通过一个字符串创建 Vector4 对象|
| **[multiply](Type.Type.Vector4.md#multiply)**([`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 遍历向量a的每个分量乘以数字b|
| **[normalize](Type.Type.Vector4.md#normalize)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 归一化向量|
| **[strictEquals](Type.Type.Vector4.md#strictequals)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Type.Vector4.md#subtract)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 计算向量a减去向量b|
| **[toString](Type.Type.Vector4.md#tostring)**(): `string` <br> 输出为格式化字符串|
| **[add](Type.Type.Vector4.md#add-1)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 计算ab两个向量相加|
| **[ceil](Type.Type.Vector4.md#ceil)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量向上取整|
| **[clone](Type.Type.Vector4.md#clone-1)**([`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 获得指定向量的拷贝|
| **[copy](Type.Type.Vector4.md#copy)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 将向量a的值赋给向量b|
| **[distance](Type.Type.Vector4.md#distance)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): `number` <br> 求两向量的欧氏距离|
| **[divide](Type.Type.Vector4.md#divide-1)**([`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 遍历向量a的每个分量除以数字b|
| **[dot](Type.Type.Vector4.md#dot)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): `number` <br> 向量点积 (数量积)|
| **[equals](Type.Type.Vector4.md#equals-1)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[floor](Type.Type.Vector4.md#floor)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量向下取整|
| **[fromString](Type.Type.Vector4.md#fromstring-1)**(`string`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 通过一个字符串创建 Vector4 对象|
| **[invert](Type.Type.Vector4.md#invert)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量取倒数，接近 0 时返回 Infinity|
| **[invertSafe](Type.Type.Vector4.md#invertsafe)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), `number`): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量取倒数，接近 0 时返回 0|
| **[lerp](Type.Type.Vector4.md#lerp)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量线性插值： A + t * (B - A)|
| **[magnitude](Type.Type.Vector4.md#magnitude-1)**([`Vector4`](Type.Type.Vector4.md)): `number` <br> 求向量长度|
| **[max](Type.Type.Vector4.md#max)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量最大值|
| **[min](Type.Type.Vector4.md#min)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量最小值|
| **[moveTowards](Type.Type.Vector4.md#movetowards)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 向目标向量移动|
| **[multiply](Type.Type.Vector4.md#multiply-1)**([`Vector4`](Type.Type.Vector4.md), `number`, [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 遍历向量a的每个分量乘以数字b|
| **[negate](Type.Type.Vector4.md#negate)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量取负|
| **[normalize](Type.Type.Vector4.md#normalize-1)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 归一化向量|
| **[round](Type.Type.Vector4.md#round)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 逐元素向量四舍五入取整|
| **[set](Type.Type.Vector4.md#set)**([`Vector4`](Type.Type.Vector4.md), `number`, `number`, `number`, `number`): [`Vector4`](Type.Type.Vector4.md) <br> 设置向量值|
| **[sqrMagnitude](Type.Type.Vector4.md#sqrmagnitude-1)**([`Vector4`](Type.Type.Vector4.md)): `number` <br> 求向量长度平方|
| **[squaredDistance](Type.Type.Vector4.md#squareddistance)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): `number` <br> 求两向量的欧氏距离平方|
| **[strictEquals](Type.Type.Vector4.md#strictequals-1)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Type.Vector4.md#subtract-1)**([`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md), [`Vector4`](Type.Type.Vector4.md)): [`Vector4`](Type.Type.Vector4.md) <br> 计算向量a减去向量b|

**`Description`**

用给定的 x 值设定给 x，y，z，w

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | 给定的 x 值 default:0.0 |

• **new Vector4**(`x`, `y`, `z`, `w`)

**`Description`**

用给定的 x，y，z，w 分量构建一个新的 Vector4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 给定的 x 值 default:0.0 |
| `y` | `number` | 给定的 y 值 default:0.0 |
| `z` | `number` | 给定的 z 值 default:0.0 |
| `w` | `number` | 给定的 w 值 default:0.0 |

## Properties

### w

• **w**: `number`

**`Description`**

w 分量

___

### x

• **x**: `number`

**`Description`**

x 分量

___

### y

• **y**: `number`

**`Description`**

y 分量

___

### z

• **z**: `number`

**`Description`**

z 分量

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量长度 (模)

#### Returns

`number`

___

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

___

### negative

• `get` **negative**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

返回各个分量取反的新向量

#### Returns

[`Vector4`](Type.Type.Vector4.md)

___

### normalized

• `get` **normalized**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

返回一个归一化的新向量,但不影响本向量.

#### Returns

[`Vector4`](Type.Type.Vector4.md)

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

计算向量长度 (模)的平方

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

### negOne

• `Static` `get` **negOne**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(-1, -1, -1, -1)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

___

### one

• `Static` `get` **one**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(1, 1, 1, 1)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

___

### zero

• `Static` `get` **zero**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(0, 0, 0, 0)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

## Methods

### add

▸ **add**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

加一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Type.Vector4.md) | 相加的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

___

### clone

▸ **clone**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

克隆当前向量

**`Effect`**

调用端生效

#### Returns

[`Vector4`](Type.Type.Vector4.md)

克隆的到的新 Vector4 对象

___

### divide

▸ **divide**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

每个分量除以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 相除的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

▸ **divide**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Type.Vector4.md) | 每个分量除以的参数 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

___

### equals

▸ **equals**(`a`, `epsilon?`): `boolean`

**`Description`**

判断当前向量是否在误差范围内与向量a相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

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
| `str` | `string` | 读取的字符串 |

#### Returns

`void`

___

### multiply

▸ **multiply**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

乘以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Type.Vector4.md) | 相乘的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

▸ **multiply**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量乘以的参数 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

___

### normalize

▸ **normalize**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

将当前向量归一化

**`Effect`**

调用端生效

#### Returns

[`Vector4`](Type.Type.Vector4.md)

归一化后的自身对象

___

### strictEquals

▸ **strictEquals**(`a`): `boolean`

**`Description`**

判断当前向量是否与向量a相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |

#### Returns

`boolean`

是否相等

___

### subtract

▸ **subtract**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

减去一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Type.Vector4.md) | 相减的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

___

### toString

▸ **toString**(): `string`

**`Description`**

输出为格式化字符串

**`Effect`**

调用端生效

#### Returns

`string`

Vector4 对象值的字符串

___

### add

▸ `Static` **add**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

计算ab两个向量相加

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相加的结果 Vector4 对象

___

### ceil

▸ `Static` **ceil**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量向上取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向上取整得到的 Vector4 对象

___

### clone

▸ `Static` **clone**(`a`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

获得指定向量的拷贝

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

克隆得到的新 Vector4 对象

___

### copy

▸ `Static` **copy**(`a`, `b`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

将向量a的值赋给向量b

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

向量a

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |

#### Returns

`number`

两向量的欧氏距离

___

### divide

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

遍历向量a的每个分量除以数字b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | `number` | 数字b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相除的结果 Vector4 对象

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

计算向量a除以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相除的结果 Vector4 对象

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |

#### Returns

`number`

向量点积

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `epsilon?` | `number` | 最小误差数 对象 default:1.e-8 |

#### Returns

`boolean`

是否相等

___

### floor

▸ `Static` **floor**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量向下取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向下取整得到的 Vector4 对象

___

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

通过一个字符串创建 Vector4 对象

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

新创建的 Vector4 对象

___

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量取倒数，接近 0 时返回 Infinity

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

___

### invertSafe

▸ `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量取倒数，接近 0 时返回 0

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

___

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量线性插值： A + t * (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `t` | `number` | 插值 |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

插值得到的 Vector4 向量

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |

#### Returns

`number`

向量长度

___

### max

▸ `Static` **max**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量最大值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取最大值得到的 Vector4 对象

___

### min

▸ `Static` **min**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量最小值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向量取最小值得到的 Vector4 对象

___

### moveTowards

▸ `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

向目标向量移动

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | [`Vector4`](Type.Type.Vector4.md) | 当前向量 |
| `target` | [`Vector4`](Type.Type.Vector4.md) | 目标向量 |
| `maxDistanceDelta` | `number` | 最大平均移动距离 |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

移动后的位置

___

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

遍历向量a的每个分量乘以数字b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | `number` | 数字b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相乘的结果 Vector4 对象

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

计算向量a乘以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相乘的结果 Vector4 对象

___

### negate

▸ `Static` **negate**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量取负

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取负得到的 Vector4 对象

___

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

归一化向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

归一化后得到的 Vector4 对象

___

### round

▸ `Static` **round**(`a`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

逐元素向量四舍五入取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素四舍五入取整得到的 Vector4 对象

___

### set

▸ `Static` **set**(`a`, `x`, `y`, `z`, `w`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

设置向量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `x` | `number` | x 分量 |
| `y` | `number` | y 分量 |
| `z` | `number` | z 分量 |
| `w` | `number` | w 分量 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的向量a

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |

#### Returns

`number`

两向量的欧氏距离平方

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |

#### Returns

`boolean`

是否相等

___

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

计算向量a减去向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector4`](Type.Type.Vector4.md) | 向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | 向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | 接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相减的结果 Vector4 对象
