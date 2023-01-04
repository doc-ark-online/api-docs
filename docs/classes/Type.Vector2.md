[Type](../modules/Type.Type.md) / Vector2

# Vector2 <Badge type="tip" text="Class" />

**`Description`**

由分量 (x,y) 组成的二维空间中的向量

## Table of contents

| Properties |
| :-----|
| **[x](Type.Vector2.md#x)**: `number` <br> 向量的 x 分量|
| **[y](Type.Vector2.md#y)**: `number` <br> 向量的 y 分量|

| Accessors |
| :-----|
| **[length](Type.Vector2.md#length)**(): `number` <br> 计算向量的长度|
| **[magnitude](Type.Vector2.md#magnitude)**([`Vector2`](Type.Vector2.md)): `number` <br> 求向量长度|
| **[negative](Type.Vector2.md#negative)**(): [`Vector2`](Type.Vector2.md) <br> 返回各个分量取反的新 Vector2 对象|
| **[normalized](Type.Vector2.md#normalized)**(): [`Vector2`](Type.Vector2.md) <br> 返回一个新的 Vector2 对象|
| **[sqrLength](Type.Vector2.md#sqrlength)**(): `number` <br> 向量长度的平方|
| **[sqrMagnitude](Type.Vector2.md#sqrmagnitude)**([`Vector2`](Type.Vector2.md)): `number` <br> 求向量长度平方|
| **[negOne](Type.Vector2.md#negone)**(): [`Vector2`](Type.Vector2.md) <br> (-1, -1)|
| **[one](Type.Vector2.md#one)**(): [`Vector2`](Type.Vector2.md) <br> (1, 1)|
| **[unitX](Type.Vector2.md#unitx)**(): [`Vector2`](Type.Vector2.md) <br> (1, 0)|
| **[unitY](Type.Vector2.md#unity)**(): [`Vector2`](Type.Vector2.md) <br> (0, 1)|
| **[zero](Type.Vector2.md#zero)**(): [`Vector2`](Type.Vector2.md) <br> (0, 0)|

| Methods |
| :-----|
| **[add](Type.Vector2.md#add)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算ab两个向量相加|
| **[clone](Type.Vector2.md#clone)**([`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 克隆向量a得到的新 Vector2 向量|
| **[divide](Type.Vector2.md#divide)**([`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 遍历向量a的每个分量除以b|
| **[equals](Type.Vector2.md#equals)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[fromString](Type.Vector2.md#fromstring)**(`string`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 通过一个字符串创建 Vector2 对象|
| **[multiply](Type.Vector2.md#multiply)**([`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 遍历向量a的每个分量乘以b|
| **[normalize](Type.Vector2.md#normalize)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 归一化向量|
| **[set](Type.Vector2.md#set)**([`Vector2`](Type.Vector2.md), `number`, `number`): [`Vector2`](Type.Vector2.md) <br> 设置向量a的值|
| **[strictEquals](Type.Vector2.md#strictequals)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Vector2.md#subtract)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算向量a减去向量b|
| **[toString](Type.Vector2.md#tostring)**(): `string` <br> 输出为字符串|
| **[add](Type.Vector2.md#add-1)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算ab两个向量相加|
| **[angle](Type.Vector2.md#angle)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 求两向量夹角角度|
| **[ceil](Type.Vector2.md#ceil)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量向上取整|
| **[clamp](Type.Vector2.md#clamp)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 设置当前向量的值, 使其各个分量都处于指定的范围内|
| **[clone](Type.Vector2.md#clone-1)**([`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 克隆向量a得到的新 Vector2 向量|
| **[copy](Type.Vector2.md#copy)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 获得指定向量的拷贝|
| **[cross](Type.Vector2.md#cross)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 向量叉积 (向量积)|
| **[distance](Type.Vector2.md#distance)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 求两向量的欧氏距离|
| **[divide](Type.Vector2.md#divide-1)**([`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 遍历向量a的每个分量除以b|
| **[dot](Type.Vector2.md#dot)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 向量点积 (数量积)|
| **[equals](Type.Vector2.md#equals-1)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), `number`): `boolean` <br> 排除浮点数误差的向量近似等价判断|
| **[floor](Type.Vector2.md#floor)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量向下取整|
| **[fromString](Type.Vector2.md#fromstring-1)**(`string`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 通过一个字符串创建 Vector2 对象|
| **[fromUEVector2D](Type.Vector2.md#fromuevector2d)**(`Vector2D`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 通过一个UE向量创建 Vector2 对象|
| **[invert](Type.Vector2.md#invert)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量取倒数, 接近 0 时返回 Infinity|
| **[invertSafe](Type.Vector2.md#invertsafe)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), `number`): [`Vector2`](Type.Vector2.md) <br> 逐元素向量取倒数, 接近 0 时返回 0|
| **[lerp](Type.Vector2.md#lerp)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量线性插值： A + t  * (B - A)|
| **[magnitude](Type.Vector2.md#magnitude-1)**([`Vector2`](Type.Vector2.md)): `number` <br> 求向量长度|
| **[max](Type.Vector2.md#max)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量最大值|
| **[min](Type.Vector2.md#min)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量最小值|
| **[moveTowards](Type.Vector2.md#movetowards)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 向目标移动|
| **[multiply](Type.Vector2.md#multiply-1)**([`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 遍历向量a的每个分量乘以b|
| **[negate](Type.Vector2.md#negate)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量取负|
| **[normalize](Type.Vector2.md#normalize-1)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 归一化向量|
| **[project](Type.Vector2.md#project)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算向量a在向量b上的投影向量|
| **[random](Type.Vector2.md#random)**(`number`): [`Vector2`](Type.Vector2.md) <br> 生成一个在单位圆上均匀分布的随机 Vector2 对象|
| **[reflect](Type.Vector2.md#reflect)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 求反射角|
| **[rotate](Type.Vector2.md#rotate)**([`Vector2`](Type.Vector2.md), `number`, [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算向量a旋转radians度后的向量|
| **[round](Type.Vector2.md#round)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 逐元素向量四舍五入取整|
| **[set](Type.Vector2.md#set-1)**([`Vector2`](Type.Vector2.md), `number`, `number`): [`Vector2`](Type.Vector2.md) <br> 设置向量a的值|
| **[signAngle](Type.Vector2.md#signangle)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 获取向量a和向量b之间的有符号角度|
| **[sqrMagnitude](Type.Vector2.md#sqrmagnitude-1)**([`Vector2`](Type.Vector2.md)): `number` <br> 求向量长度平方|
| **[squaredDistance](Type.Vector2.md#squareddistance)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `number` <br> 求两向量的欧氏距离平方|
| **[strictEquals](Type.Vector2.md#strictequals-1)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): `boolean` <br> 向量等价判断|
| **[subtract](Type.Vector2.md#subtract-1)**([`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md), [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 计算向量a减去向量b|

**`Description`**

用给定的 x, y 分量构建一个新的 Vector2

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x分量 default:0 |
| `y?` | `number` | y分量 default:0 |

• **new Vector2**(`f`)

**`Description`**

用给定的 f 值设定给 x, y

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | 给定的 f 值 |

## Properties

### x

• **x**: `number`

**`Description`**

向量的 x 分量

___

### y

• **y**: `number`

**`Description`**

向量的 y 分量

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

向量的长度

___

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

向量的长度

___

### negative

• `get` **negative**(): [`Vector2`](Type.Vector2.md)

**`Description`**

返回各个分量取反的新 Vector2 对象

#### Returns

[`Vector2`](Type.Vector2.md)

各个分量取反的新 Vector2 对象

___

### normalized

• `get` **normalized**(): [`Vector2`](Type.Vector2.md)

**`Description`**

返回一个新的 Vector2 对象

**`Description`**

其大小为1, 但仍指向相同的方向 如果向量太小而无法归一化, 则返回 (0, 0)

#### Returns

[`Vector2`](Type.Vector2.md)

返回一个新的 Vector2 对象

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

向量长度的平方

#### Returns

`number`

向量长度的平方

___

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

向量的长度平方

___

### negOne

• `Static` `get` **negOne**(): [`Vector2`](Type.Vector2.md)

**`Description`**

(-1, -1)

#### Returns

[`Vector2`](Type.Vector2.md)

___

### one

• `Static` `get` **one**(): [`Vector2`](Type.Vector2.md)

**`Description`**

(1, 1)

#### Returns

[`Vector2`](Type.Vector2.md)

___

### unitX

• `Static` `get` **unitX**(): [`Vector2`](Type.Vector2.md)

**`Description`**

(1, 0)

#### Returns

[`Vector2`](Type.Vector2.md)

___

### unitY

• `Static` `get` **unitY**(): [`Vector2`](Type.Vector2.md)

**`Description`**

(0, 1)

#### Returns

[`Vector2`](Type.Vector2.md)

___

### zero

• `Static` `get` **zero**(): [`Vector2`](Type.Vector2.md)

**`Description`**

(0, 0)

#### Returns

[`Vector2`](Type.Vector2.md)

## Methods

### add

▸ **add**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

加一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 相加的向量对象 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

___

### clone

▸ **clone**(): [`Vector2`](Type.Vector2.md)

**`Description`**

克隆当前向量

**`Effect`**

调用端生效

#### Returns

[`Vector2`](Type.Vector2.md)

克隆得到的新Vector2对象

___

### divide

▸ **divide**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

每个分量除以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 相除的向量对象 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

▸ **divide**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 每个分量除以的参数 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

___

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前向量是否在误差范围内与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](Type.Vector2.md) | 指定向量 |
| `epsilon?` | `number` | 最小误差数 default:1.e-8 |

#### Returns

`boolean`

两向量是否相等

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

▸ **multiply**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

乘以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 相乘的向量对象 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

▸ **multiply**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 每个分量乘以的参数 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

___

### normalize

▸ **normalize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

将当前向量归一化

**`Effect`**

调用端生效

#### Returns

[`Vector2`](Type.Vector2.md)

归一化后的自身对象

___

### set

▸ **set**(`other`): [`Vector2`](Type.Vector2.md)

**`Description`**

设置当前向量使其与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](Type.Vector2.md) | 指定的向量 |

#### Returns

[`Vector2`](Type.Vector2.md)

`this`

▸ **set**(`x?`, `y?`): [`Vector2`](Type.Vector2.md)

**`Description`**

设置当前向量的具体分量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | x 分量 default:0.0 |
| `y?` | `number` | y 分量 default:0.0 |

#### Returns

[`Vector2`](Type.Vector2.md)

`this`

___

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前向量是否与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Vector2`](Type.Vector2.md) | 指定向量 |

#### Returns

`boolean`

两向量是否相等

___

### subtract

▸ **subtract**(`v`): [`Vector2`](Type.Vector2.md)

**`Description`**

减去一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 相减的向量对象 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的自身对象

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

▸ `Static` **add**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算ab两个向量相加

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相加的结果 Vector2 对象

___

### angle

▸ `Static` **angle**(`a`, `b`): `number`

**`Description`**

求两向量夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

#### Returns

`number`

向量a与向量b的夹角角度

___

### ceil

▸ `Static` **ceil**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量向上取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素向上取整后的 Vector2 对象

___

### clamp

▸ `Static` **clamp**(`v`, `min`, `max`): [`Vector2`](Type.Vector2.md)

**`Description`**

设置当前向量的值, 使其各个分量都处于指定的范围内

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 向量v |
| `min` | [`Vector2`](Type.Vector2.md) | 最小值 |
| `max` | [`Vector2`](Type.Vector2.md) | 最大值 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的向量v

___

### clone

▸ `Static` **clone**(`a`): [`Vector2`](Type.Vector2.md)

**`Description`**

克隆向量a得到的新 Vector2 向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |

#### Returns

[`Vector2`](Type.Vector2.md)

克隆得到的新 Vector2 向量

___

### copy

▸ `Static` **copy**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

获得指定向量的拷贝

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

拷贝得到的 Vector2 向量

___

### cross

▸ `Static` **cross**(`a`, `b`): `number`

**`Description`**

向量叉积 (向量积)

**`Effect`**

调用端生效

**`Precautions`**

注意二维向量的叉积为与 Z 轴平行的三维向量, 此处以向量的模长表示

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

#### Returns

`number`

叉积

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

#### Returns

`number`

两向量的欧氏距离

___

### divide

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

遍历向量a的每个分量除以b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相除的结果 Vector2 对象

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算向量a除以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相除的结果 Vector2 对象

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

___

### floor

▸ `Static` **floor**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量向下取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素向下取整后的 Vector2 对象

___

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

通过一个字符串创建 Vector2 对象

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 传入的字符串 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

创建的 Vector2 对象

___

### fromUEVector2D

▸ `Static` **fromUEVector2D**(`v`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

通过一个UE向量创建 Vector2 对象

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Vector2D` | UE.Vector |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

创建的 Vector2 对象

___

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量取倒数, 接近 0 时返回 Infinity

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素取倒数得到的 Vector2 对象

___

### invertSafe

▸ `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量取倒数, 接近 0 时返回 0

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |
| `epsilon?` | `number` | 最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素取倒数得到的 Vector2 对象

___

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量线性插值： A + t  * (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `t` | `number` | 插值 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

线性插值得到的 Vector2 对象

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |

#### Returns

`number`

向量长度

___

### max

▸ `Static` **max**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量最大值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素取最大值后的 Vector2 对象

___

### min

▸ `Static` **min**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量最小值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素取最小值后的 Vector2 对象

___

### moveTowards

▸ `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

向目标移动

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `current` | [`Vector2`](Type.Vector2.md) | 当前向量 |
| `target` | [`Vector2`](Type.Vector2.md) | 目标向量 |
| `maxDistanceDelta` | `number` | 最大移动距离 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

移动后的得到的 Vector2 对象

___

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

遍历向量a的每个分量乘以b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | `number` | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相乘的结果 Vector2 对象

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算向量a乘以向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相乘的结果 Vector2 对象

___

### negate

▸ `Static` **negate**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量取负

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐元素向量取负得到的 Vector2 对象

___

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

归一化向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

归一化后得到的 Vector2 对象

___

### project

▸ `Static` **project**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算向量a在向量b上的投影向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

投影向量

___

### random

▸ `Static` **random**(`range?`): [`Vector2`](Type.Vector2.md)

**`Description`**

生成一个在单位圆上均匀分布的随机 Vector2 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `range?` | `number` | 范围 default:1.0 |

#### Returns

[`Vector2`](Type.Vector2.md)

得到的随机 Vector2 对象

___

### reflect

▸ `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

求反射角

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inDirection` | [`Vector2`](Type.Vector2.md) | 入射向量 |
| `inNormal` | [`Vector2`](Type.Vector2.md) | 法线向量 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

反射角

___

### rotate

▸ `Static` **rotate**(`v`, `radians`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算向量a旋转radians度后的向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Type.Vector2.md) | 向量v |
| `radians` | `number` | 旋转角度 |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

旋转后的 Vector2 对象

___

### round

▸ `Static` **round**(`a`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

逐元素向量四舍五入取整

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

逐逐元素向量四舍五入取整后的 Vector2 对象

___

### set

▸ `Static` **set**(`a`, `x`, `y`): [`Vector2`](Type.Vector2.md)

**`Description`**

设置向量a的值

**`Effect`**

调用端生效

**`Precautions`**

向量a不能为空对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `x` | `number` | 修改的 x 值 |
| `y` | `number` | 修改的 y 值 |

#### Returns

[`Vector2`](Type.Vector2.md)

修改后的 Vector2 对象

___

### signAngle

▸ `Static` **signAngle**(`a`, `b`): `number`

**`Description`**

获取向量a和向量b之间的有符号角度

**`Effect`**

调用端生效

**`Precautions`**

有符号角度的取值范围为 (-180, 180], 当前向量可以通过逆时针旋转有符号角度与指定向量同向 <br/>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

#### Returns

`number`

向量a和向量b之间的有符号角度

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

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
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |

#### Returns

`boolean`

是否相等

___

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Vector2`](Type.Vector2.md)

**`Description`**

计算向量a减去向量b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Type.Vector2.md) | 向量a |
| `b` | [`Vector2`](Type.Vector2.md) | 向量b |
| `outer?` | [`Vector2`](Type.Vector2.md) | 接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Vector2.md)

相减的结果 Vector2 对象
