[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Vector4

# Class: Vector4

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Vector4

**`Author`**

SuoWei

**`Description`**

由分量 (x,y,z,w) 组成的4D齐次向量

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.Vector4.md#constructor)

### Properties

- [w](Type.Type.Vector4.md#w)
- [x](Type.Type.Vector4.md#x)
- [y](Type.Type.Vector4.md#y)
- [z](Type.Type.Vector4.md#z)

### Accessors

- [length](Type.Type.Vector4.md#length)
- [magnitude](Type.Type.Vector4.md#magnitude)
- [negative](Type.Type.Vector4.md#negative)
- [normalized](Type.Type.Vector4.md#normalized)
- [sqrLength](Type.Type.Vector4.md#sqrlength)
- [sqrMagnitude](Type.Type.Vector4.md#sqrmagnitude)
- [negOne](Type.Type.Vector4.md#negone)
- [one](Type.Type.Vector4.md#one)
- [zero](Type.Type.Vector4.md#zero)

### Methods

- [add](Type.Type.Vector4.md#add)
- [clone](Type.Type.Vector4.md#clone)
- [divide](Type.Type.Vector4.md#divide)
- [equals](Type.Type.Vector4.md#equals)
- [fromString](Type.Type.Vector4.md#fromstring)
- [multiply](Type.Type.Vector4.md#multiply)
- [normalize](Type.Type.Vector4.md#normalize)
- [strictEquals](Type.Type.Vector4.md#strictequals)
- [subtract](Type.Type.Vector4.md#subtract)
- [toString](Type.Type.Vector4.md#tostring)
- [add](Type.Type.Vector4.md#add-1)
- [ceil](Type.Type.Vector4.md#ceil)
- [clone](Type.Type.Vector4.md#clone-1)
- [copy](Type.Type.Vector4.md#copy)
- [distance](Type.Type.Vector4.md#distance)
- [divide](Type.Type.Vector4.md#divide-1)
- [dot](Type.Type.Vector4.md#dot)
- [equals](Type.Type.Vector4.md#equals-1)
- [floor](Type.Type.Vector4.md#floor)
- [fromString](Type.Type.Vector4.md#fromstring-1)
- [invert](Type.Type.Vector4.md#invert)
- [invertSafe](Type.Type.Vector4.md#invertsafe)
- [lerp](Type.Type.Vector4.md#lerp)
- [magnitude](Type.Type.Vector4.md#magnitude-1)
- [max](Type.Type.Vector4.md#max)
- [min](Type.Type.Vector4.md#min)
- [moveTowards](Type.Type.Vector4.md#movetowards)
- [multiply](Type.Type.Vector4.md#multiply-1)
- [negate](Type.Type.Vector4.md#negate)
- [normalize](Type.Type.Vector4.md#normalize-1)
- [round](Type.Type.Vector4.md#round)
- [set](Type.Type.Vector4.md#set)
- [sqrMagnitude](Type.Type.Vector4.md#sqrmagnitude-1)
- [squaredDistance](Type.Type.Vector4.md#squareddistance)
- [strictEquals](Type.Type.Vector4.md#strictequals-1)
- [subtract](Type.Type.Vector4.md#subtract-1)

## Constructors

### constructor

• **new Vector4**(`x?`)

**`Description`**

用给定的 x 值设定给 x，y，z，w

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | usage:给定的 x 值 default:0.0 |

#### Defined in

Type/index.d.ts:4242

• **new Vector4**(`x`, `y`, `z`, `w`)

**`Description`**

用给定的 x，y，z，w 分量构建一个新的 Vector4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | usage:给定的 x 值 default:0.0 |
| `y` | `number` | usage:给定的 y 值 default:0.0 |
| `z` | `number` | usage:给定的 z 值 default:0.0 |
| `w` | `number` | usage:给定的 w 值 default:0.0 |

#### Defined in

Type/index.d.ts:4250

## Properties

### w

• **w**: `number`

**`Description`**

w 分量

#### Defined in

Type/index.d.ts:4237

___

### x

• **x**: `number`

**`Description`**

x 分量

#### Defined in

Type/index.d.ts:4225

___

### y

• **y**: `number`

**`Description`**

y 分量

#### Defined in

Type/index.d.ts:4229

___

### z

• **z**: `number`

**`Description`**

z 分量

#### Defined in

Type/index.d.ts:4233

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量长度 (模)

#### Returns

`number`

#### Defined in

Type/index.d.ts:4312

___

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

#### Defined in

Type/index.d.ts:4320

___

### negative

• `get` **negative**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

返回各个分量取反的新向量

#### Returns

[`Vector4`](Type.Type.Vector4.md)

#### Defined in

Type/index.d.ts:4324

___

### normalized

• `get` **normalized**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

返回一个归一化的新向量,但不影响本向量.

#### Returns

[`Vector4`](Type.Type.Vector4.md)

#### Defined in

Type/index.d.ts:4328

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

计算向量长度 (模)的平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:4308

___

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:4316

___

### negOne

• `Static` `get` **negOne**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(-1, -1, -1, -1)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

#### Defined in

Type/index.d.ts:3960

___

### one

• `Static` `get` **one**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(1, 1, 1, 1)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

#### Defined in

Type/index.d.ts:3956

___

### zero

• `Static` `get` **zero**(): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

(0, 0, 0, 0)

#### Returns

[`Vector4`](Type.Type.Vector4.md)

#### Defined in

Type/index.d.ts:3952

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
| `v` | [`Vector4`](Type.Type.Vector4.md) | usage:相加的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4257

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

#### Defined in

Type/index.d.ts:4349

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
| `v` | `number` | usage:相除的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4285

▸ **divide**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector4`](Type.Type.Vector4.md) | usage:每个分量除以的参数 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4292

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `epsilon?` | `number` | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:4343

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
| `str` | `string` | usage:读取的字符串 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:4298

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
| `v` | [`Vector4`](Type.Type.Vector4.md) | usage:相乘的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4271

▸ **multiply**(`v`): [`Vector4`](Type.Type.Vector4.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | usage:每个分量乘以的参数 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4278

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

#### Defined in

Type/index.d.ts:4355

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:4335

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
| `v` | [`Vector4`](Type.Type.Vector4.md) | usage:相减的向量对象 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:4264

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

#### Defined in

Type/index.d.ts:4304

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相加的结果 Vector4 对象

#### Defined in

Type/index.d.ts:3979

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向上取整得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4097

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

克隆得到的新 Vector4 对象

#### Defined in

Type/index.d.ts:4036

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

向量a

#### Defined in

Type/index.d.ts:4044

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |

#### Returns

`number`

两向量的欧氏距离

#### Defined in

Type/index.d.ts:4143

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | `number` | usage:数字b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相除的结果 Vector4 对象

#### Defined in

Type/index.d.ts:4019

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相除的结果 Vector4 对象

#### Defined in

Type/index.d.ts:4029

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |

#### Returns

`number`

向量点积

#### Defined in

Type/index.d.ts:4210

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `epsilon?` | `number` | usage:最小误差数 对象 default:1.e-8 |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:4053

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向下取整得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4106

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
| `str` | `string` | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

新创建的 Vector4 对象

#### Defined in

Type/index.d.ts:3969

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4183

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |
| `epsilon?` | `number` | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取倒数得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4193

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `t` | `number` | usage:插值 |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

插值得到的 Vector4 向量

#### Defined in

Type/index.d.ts:4221

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |

#### Returns

`number`

向量长度

#### Defined in

Type/index.d.ts:4158

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取最大值得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4126

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素向量取最小值得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4116

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
| `current` | [`Vector4`](Type.Type.Vector4.md) | usage:当前向量 |
| `target` | [`Vector4`](Type.Type.Vector4.md) | usage:目标向量 |
| `maxDistanceDelta` | `number` | usage:最大平均移动距离 |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

移动后的位置

#### Defined in

Type/index.d.ts:4072

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | `number` | usage:数字b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相乘的结果 Vector4 对象

#### Defined in

Type/index.d.ts:3999

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相乘的结果 Vector4 对象

#### Defined in

Type/index.d.ts:4009

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素取负得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4174

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

归一化后得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4202

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

逐元素四舍五入取整得到的 Vector4 对象

#### Defined in

Type/index.d.ts:4135

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `x` | `number` | usage:x 分量 |
| `y` | `number` | usage:y 分量 |
| `z` | `number` | usage:z 分量 |
| `w` | `number` | usage:w 分量 |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

修改后的向量a

#### Defined in

Type/index.d.ts:4088

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |

#### Returns

`number`

向量长度平方

#### Defined in

Type/index.d.ts:4165

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |

#### Returns

`number`

两向量的欧氏距离平方

#### Defined in

Type/index.d.ts:4151

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:4061

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
| `a` | [`Vector4`](Type.Type.Vector4.md) | usage:向量a |
| `b` | [`Vector4`](Type.Type.Vector4.md) | usage:向量b |
| `outer?` | [`Vector4`](Type.Type.Vector4.md) | usage:接收结果的 Vector4 对象 default:null |

#### Returns

[`Vector4`](Type.Type.Vector4.md)

相减的结果 Vector4 对象

#### Defined in

Type/index.d.ts:3989
