[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Vector

# Class: Vector

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Vector

**`Author`**

SuoWei

**`Description`**

由分量 (x,y,z) 组成的三维空间中的向量

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.Vector.md#constructor)

### Properties

- [x](Type.Type.Vector.md#x)
- [y](Type.Type.Vector.md#y)
- [z](Type.Type.Vector.md#z)

### Accessors

- [length](Type.Type.Vector.md#length)
- [magnitude](Type.Type.Vector.md#magnitude)
- [negative](Type.Type.Vector.md#negative)
- [normalized](Type.Type.Vector.md#normalized)
- [sqrLength](Type.Type.Vector.md#sqrlength)
- [sqrMagnitude](Type.Type.Vector.md#sqrmagnitude)
- [back](Type.Type.Vector.md#back)
- [down](Type.Type.Vector.md#down)
- [forward](Type.Type.Vector.md#forward)
- [left](Type.Type.Vector.md#left)
- [negOne](Type.Type.Vector.md#negone)
- [one](Type.Type.Vector.md#one)
- [right](Type.Type.Vector.md#right)
- [unitX](Type.Type.Vector.md#unitx)
- [unitY](Type.Type.Vector.md#unity)
- [unitZ](Type.Type.Vector.md#unitz)
- [up](Type.Type.Vector.md#up)
- [zero](Type.Type.Vector.md#zero)

### Methods

- [add](Type.Type.Vector.md#add)
- [clone](Type.Type.Vector.md#clone)
- [divide](Type.Type.Vector.md#divide)
- [equals](Type.Type.Vector.md#equals)
- [fromString](Type.Type.Vector.md#fromstring)
- [multiply](Type.Type.Vector.md#multiply)
- [normalize](Type.Type.Vector.md#normalize)
- [set](Type.Type.Vector.md#set)
- [strictEquals](Type.Type.Vector.md#strictequals)
- [subtract](Type.Type.Vector.md#subtract)
- [toRotation](Type.Type.Vector.md#torotation)
- [toString](Type.Type.Vector.md#tostring)
- [add](Type.Type.Vector.md#add-1)
- [angle](Type.Type.Vector.md#angle)
- [angle3D](Type.Type.Vector.md#angle3d)
- [ceil](Type.Type.Vector.md#ceil)
- [clamp](Type.Type.Vector.md#clamp)
- [clone](Type.Type.Vector.md#clone-1)
- [copy](Type.Type.Vector.md#copy)
- [cross](Type.Type.Vector.md#cross)
- [distance](Type.Type.Vector.md#distance)
- [divide](Type.Type.Vector.md#divide-1)
- [dot](Type.Type.Vector.md#dot)
- [equals](Type.Type.Vector.md#equals-1)
- [floor](Type.Type.Vector.md#floor)
- [fromString](Type.Type.Vector.md#fromstring-1)
- [invert](Type.Type.Vector.md#invert)
- [invertSafe](Type.Type.Vector.md#invertsafe)
- [lerp](Type.Type.Vector.md#lerp)
- [magnitude](Type.Type.Vector.md#magnitude-1)
- [max](Type.Type.Vector.md#max)
- [min](Type.Type.Vector.md#min)
- [moveTowards](Type.Type.Vector.md#movetowards)
- [multiply](Type.Type.Vector.md#multiply-1)
- [negate](Type.Type.Vector.md#negate)
- [normalize](Type.Type.Vector.md#normalize-1)
- [project](Type.Type.Vector.md#project)
- [projectOnPlane](Type.Type.Vector.md#projectonplane)
- [reflect](Type.Type.Vector.md#reflect)
- [rotateX](Type.Type.Vector.md#rotatex)
- [rotateY](Type.Type.Vector.md#rotatey)
- [rotateZ](Type.Type.Vector.md#rotatez)
- [round](Type.Type.Vector.md#round)
- [set](Type.Type.Vector.md#set-1)
- [sqrMagnitude](Type.Type.Vector.md#sqrmagnitude-1)
- [squaredDistance](Type.Type.Vector.md#squareddistance)
- [strictEquals](Type.Type.Vector.md#strictequals-1)
- [subtract](Type.Type.Vector.md#subtract-1)

## Constructors

### constructor

• **new Vector**(`x?`, `y?`, `z?`)

**`Description`**

用给定的 x, y 和 z 分量构建一个新的 Vector3

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | usage:x分量 default:0 |
| `y?` | `number` | usage:y分量 default:0 |
| `z?` | `number` | usage:z分量 default:0 |

#### Defined in

Type/index.d.ts:3279

• **new Vector**(`f`)

**`Description`**

用给定的 f 值设定给 x, y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `number` | usage:给定的 f 值 |

#### Defined in

Type/index.d.ts:3284

• **new Vector**(`v`)

**`Description`**

用给定的 Vector 的值的 x, y 和 z 分量设定给x，y 和 z

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage:给定的 Vector |

#### Defined in

Type/index.d.ts:3289

## Properties

### x

• **x**: `number`

**`Description`**

X轴坐标

#### Defined in

Type/index.d.ts:2897

___

### y

• **y**: `number`

**`Description`**

Y轴坐标

#### Defined in

Type/index.d.ts:2901

___

### z

• **z**: `number`

**`Description`**

Z轴坐标

#### Defined in

Type/index.d.ts:2905

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

#### Defined in

Type/index.d.ts:3367

___

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

向量的长度

#### Returns

`number`

#### Defined in

Type/index.d.ts:3375

___

### negative

• `get` **negative**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回各个分量取反的新向量

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:3379

___

### normalized

• `get` **normalized**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回一个归一化的新向量, 不影响本向量

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:3383

___

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:3363

___

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:3371

___

### back

• `Static` `get` **back**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2881

___

### down

• `Static` `get` **down**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2873

___

### forward

• `Static` `get` **forward**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2877

___

### left

• `Static` `get` **left**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, -1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2865

___

### negOne

• `Static` `get` **negOne**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, -1, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2893

___

### one

• `Static` `get` **one**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 1, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2889

___

### right

• `Static` `get` **right**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2861

___

### unitX

• `Static` `get` **unitX**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2849

___

### unitY

• `Static` `get` **unitY**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2853

___

### unitZ

• `Static` `get` **unitZ**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2857

___

### up

• `Static` `get` **up**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2869

___

### zero

• `Static` `get` **zero**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2885

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:相加的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3312

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

#### Defined in

Type/index.d.ts:3406

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
| `v` | `number` | usage:每个分量除以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3340

▸ **divide**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage:除以的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3347

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
| `other` | [`Vector`](Type.Type.Vector.md) | usage:指定的向量 |
| `epsilon?` | `number` | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

当前向量是否在误差范围内与指定向量相等

#### Defined in

Type/index.d.ts:3400

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
| `str` | `string` | usage:读取的字符 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:3353

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:相乘的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3326

▸ **multiply**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | usage:每个分量乘以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3333

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

#### Defined in

Type/index.d.ts:3412

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
| `other` | [`Vector`](Type.Type.Vector.md) | usage:指定的向量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3296

▸ **set**(`x?`, `y?`, `z?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量的具体分量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | usage:x分量 default:0 |
| `y?` | `number` | usage:y分量 default:0 |
| `z?` | `number` | usage:z分量 default:0 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3305

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
| `other` | [`Vector`](Type.Type.Vector.md) | usage:指定的向量 |

#### Returns

`boolean`

当前向量是否与指定向量相等

#### Defined in

Type/index.d.ts:3391

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:相减的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3319

___

### toRotation

▸ **toRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取新的对应的Rotation

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

新的对应的Rotation对象

#### Defined in

Type/index.d.ts:3418

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

#### Defined in

Type/index.d.ts:3359

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相加的结果 Vector 对象

#### Defined in

Type/index.d.ts:2924

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`number`

夹角角度

#### Defined in

Type/index.d.ts:3239

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`number`

夹角角度

#### Defined in

Type/index.d.ts:3231

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向上取整的 Vector 对象

#### Defined in

Type/index.d.ts:3048

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
| `value` | [`Vector`](Type.Type.Vector.md) | usage:当前向量的值 |
| `minInclusive` | [`Vector`](Type.Type.Vector.md) | usage:允许的最小值 |
| `maxInclusive` | [`Vector`](Type.Type.Vector.md) | usage:允许的最大值 |

#### Returns

[`Vector`](Type.Type.Vector.md)

各个分量都处于指定的范围内的向量

#### Defined in

Type/index.d.ts:3268

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

#### Defined in

Type/index.d.ts:2981

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:目标向量 |
| `outer` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

#### Defined in

Type/index.d.ts:2990

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

叉积 Vector 对象

#### Defined in

Type/index.d.ts:3171

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`number`

欧氏距离

#### Defined in

Type/index.d.ts:3094

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | `number` | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

#### Defined in

Type/index.d.ts:2964

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

#### Defined in

Type/index.d.ts:2974

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`number`

点积

#### Defined in

Type/index.d.ts:3161

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `epsilon?` | `number` | usage:最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

是否等价

#### Defined in

Type/index.d.ts:2999

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向下取整的 Vector 对象

#### Defined in

Type/index.d.ts:3057

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
| `str` | `string` | usage:待转化的 string |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

转化后的 Vector 对象

#### Defined in

Type/index.d.ts:2914

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

#### Defined in

Type/index.d.ts:3134

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |
| `epsilon?` | `number` | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

#### Defined in

Type/index.d.ts:3144

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `t` | `number` | usage:插值 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

线性插值得到的 Vector 对象

#### Defined in

Type/index.d.ts:3182

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |

#### Returns

`number`

向量长度

#### Defined in

Type/index.d.ts:3109

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最大值的 Vector 对象

#### Defined in

Type/index.d.ts:3077

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最小值后的 Vector 对象

#### Defined in

Type/index.d.ts:3067

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
| `current` | [`Vector`](Type.Type.Vector.md) | usage:当前向量 |
| `target` | [`Vector`](Type.Type.Vector.md) | usage:目标向量 |
| `maxDistanceDelta` | `number` | usage:最大移动分量 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

移动后的 Vector 对象

#### Defined in

Type/index.d.ts:3010

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | `number` | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

#### Defined in

Type/index.d.ts:2944

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

#### Defined in

Type/index.d.ts:2954

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取负后的 Vector 对象

#### Defined in

Type/index.d.ts:3125

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

归一化后的 Vector 对象

#### Defined in

Type/index.d.ts:3153

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:指定平面的法线 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收投影的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量a在指定向量上的投影

#### Defined in

Type/index.d.ts:3259

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `n` | [`Vector`](Type.Type.Vector.md) | usage:指定平面的法线 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量a在指定平面上的投影

#### Defined in

Type/index.d.ts:3249

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
| `inDirection` | [`Vector`](Type.Type.Vector.md) | usage:入射向量角度 |
| `inNormal` | [`Vector`](Type.Type.Vector.md) | usage:法线向量 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

反射角

#### Defined in

Type/index.d.ts:3025

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | usage:旋转中心 |
| `a` | `number` | usage:旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 X 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3193

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | usage:旋转中心 |
| `a` | `number` | usage:旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Y 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3204

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量 |
| `o` | [`Vector`](Type.Type.Vector.md) | usage:旋转中心 |
| `a` | `number` | usage:旋转弧度 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Z 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3215

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素四舍五入取整后的 Vector 对象

#### Defined in

Type/index.d.ts:3086

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
| `outer` | [`Vector`](Type.Type.Vector.md) | usage:被设置的向量对象 |
| `x` | `number` | usage:x分量 |
| `y` | `number` | usage:y分量 |
| `z` | `number` | usage:z分量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

被设置的 Vector 对象

#### Defined in

Type/index.d.ts:3039

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |

#### Returns

`number`

向量长度平方

#### Defined in

Type/index.d.ts:3116

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`number`

欧氏距离平方

#### Defined in

Type/index.d.ts:3102

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |

#### Returns

`boolean`

两向量是否相等

#### Defined in

Type/index.d.ts:3223

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
| `a` | [`Vector`](Type.Type.Vector.md) | usage:向量a |
| `b` | [`Vector`](Type.Type.Vector.md) | usage:向量b |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相减的结果 Vector 对象

#### Defined in

Type/index.d.ts:2934
