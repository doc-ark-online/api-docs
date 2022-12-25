[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Vector2

# Class: Vector2

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Vector2

**`Author`**

SuoWei

**`Description`**

由分量 (x,y) 组成的二维空间中的向量

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.Vector2.md#constructor)

### Properties

- [x](Type.Type.Vector2.md#x)
- [y](Type.Type.Vector2.md#y)

### Accessors

- [length](Type.Type.Vector2.md#length)
- [magnitude](Type.Type.Vector2.md#magnitude)
- [negative](Type.Type.Vector2.md#negative)
- [normalized](Type.Type.Vector2.md#normalized)
- [sqrLength](Type.Type.Vector2.md#sqrlength)
- [sqrMagnitude](Type.Type.Vector2.md#sqrmagnitude)
- [negOne](Type.Type.Vector2.md#negone)
- [one](Type.Type.Vector2.md#one)
- [unitX](Type.Type.Vector2.md#unitx)
- [unitY](Type.Type.Vector2.md#unity)
- [zero](Type.Type.Vector2.md#zero)

### Methods

- [add](Type.Type.Vector2.md#add)
- [clone](Type.Type.Vector2.md#clone)
- [divide](Type.Type.Vector2.md#divide)
- [equals](Type.Type.Vector2.md#equals)
- [fromString](Type.Type.Vector2.md#fromstring)
- [multiply](Type.Type.Vector2.md#multiply)
- [normalize](Type.Type.Vector2.md#normalize)
- [set](Type.Type.Vector2.md#set)
- [strictEquals](Type.Type.Vector2.md#strictequals)
- [subtract](Type.Type.Vector2.md#subtract)
- [toString](Type.Type.Vector2.md#tostring)
- [add](Type.Type.Vector2.md#add-1)
- [angle](Type.Type.Vector2.md#angle)
- [ceil](Type.Type.Vector2.md#ceil)
- [clamp](Type.Type.Vector2.md#clamp)
- [clone](Type.Type.Vector2.md#clone-1)
- [copy](Type.Type.Vector2.md#copy)
- [cross](Type.Type.Vector2.md#cross)
- [distance](Type.Type.Vector2.md#distance)
- [divide](Type.Type.Vector2.md#divide-1)
- [dot](Type.Type.Vector2.md#dot)
- [equals](Type.Type.Vector2.md#equals-1)
- [floor](Type.Type.Vector2.md#floor)
- [fromString](Type.Type.Vector2.md#fromstring-1)
- [fromUEVector2D](Type.Type.Vector2.md#fromuevector2d)
- [invert](Type.Type.Vector2.md#invert)
- [invertSafe](Type.Type.Vector2.md#invertsafe)
- [lerp](Type.Type.Vector2.md#lerp)
- [magnitude](Type.Type.Vector2.md#magnitude-1)
- [max](Type.Type.Vector2.md#max)
- [min](Type.Type.Vector2.md#min)
- [moveTowards](Type.Type.Vector2.md#movetowards)
- [multiply](Type.Type.Vector2.md#multiply-1)
- [negate](Type.Type.Vector2.md#negate)
- [normalize](Type.Type.Vector2.md#normalize-1)
- [project](Type.Type.Vector2.md#project)
- [random](Type.Type.Vector2.md#random)
- [reflect](Type.Type.Vector2.md#reflect)
- [rotate](Type.Type.Vector2.md#rotate)
- [round](Type.Type.Vector2.md#round)
- [set](Type.Type.Vector2.md#set-1)
- [signAngle](Type.Type.Vector2.md#signangle)
- [sqrMagnitude](Type.Type.Vector2.md#sqrmagnitude-1)
- [squaredDistance](Type.Type.Vector2.md#squareddistance)
- [strictEquals](Type.Type.Vector2.md#strictequals-1)
- [subtract](Type.Type.Vector2.md#subtract-1)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`)

**`Description`**

用给定的 x, y 分量构建一个新的 Vector2

#### Parameters

| Name | Type     | Description            |
| :--- | :------- | :--------------------- |
| `x?` | `number` | usage:x 分量 default:0 |
| `y?` | `number` | usage:y 分量 default:0 |

#### Defined in

Type/index.d.ts:3774

• **new Vector2**(`f`)

**`Description`**

用给定的 f 值设定给 x, y

#### Parameters

| Name | Type     | Description       |
| :--- | :------- | :---------------- |
| `f`  | `number` | usage:给定的 f 值 |

#### Defined in

Type/index.d.ts:3779

## Properties

### x

• **x**: `number`

**`Description`**

向量的 x 分量

#### Defined in

Type/index.d.ts:3764

---

### y

• **y**: `number`

**`Description`**

向量的 y 分量

#### Defined in

Type/index.d.ts:3768

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

向量的长度

#### Defined in

Type/index.d.ts:3858

---

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

向量的长度

#### Defined in

Type/index.d.ts:3868

---

### negative

• `get` **negative**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

返回各个分量取反的新 Vector2 对象

#### Returns

[`Vector2`](Type.Type.Vector2.md)

各个分量取反的新 Vector2 对象

#### Defined in

Type/index.d.ts:3873

---

### normalized

• `get` **normalized**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

返回一个新的 Vector2 对象

**`Description`**

其大小为 1, 但仍指向相同的方向 如果向量太小而无法归一化, 则返回 (0, 0)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回一个新的 Vector2 对象

#### Defined in

Type/index.d.ts:3879

---

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

向量长度的平方

#### Returns

`number`

向量长度的平方

#### Defined in

Type/index.d.ts:3853

---

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

向量的长度平方

#### Defined in

Type/index.d.ts:3863

---

### negOne

• `Static` `get` **negOne**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

(-1, -1)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Type/index.d.ts:3408

---

### one

• `Static` `get` **one**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

(1, 1)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Type/index.d.ts:3404

---

### unitX

• `Static` `get` **unitX**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

(1, 0)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Type/index.d.ts:3412

---

### unitY

• `Static` `get` **unitY**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

(0, 1)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Type/index.d.ts:3416

---

### zero

• `Static` `get` **zero**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

(0, 0)

#### Returns

[`Vector2`](Type.Type.Vector2.md)

#### Defined in

Type/index.d.ts:3400

## Methods

### add

▸ **add**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

加一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description          |
| :--- | :-------------------------------- | :------------------- |
| `v`  | [`Vector2`](Type.Type.Vector2.md) | usage:相加的向量对象 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3801

---

### clone

▸ **clone**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

克隆当前向量

**`Effect`**

调用端生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

克隆得到的新 Vector2 对象

#### Defined in

Type/index.d.ts:3900

---

### divide

▸ **divide**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

每个分量除以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description          |
| :--- | :------- | :------------------- |
| `v`  | `number` | usage:相除的向量对象 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3829

▸ **divide**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description              |
| :--- | :-------------------------------- | :----------------------- |
| `v`  | [`Vector2`](Type.Type.Vector2.md) | usage:每个分量除以的参数 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3836

---

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前向量是否在误差范围内与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description                    |
| :--------- | :-------------------------------- | :----------------------------- |
| `other`    | [`Vector2`](Type.Type.Vector2.md) | usage:指定向量                 |
| `epsilon?` | `number`                          | usage:最小误差数 default:1.e-8 |

#### Returns

`boolean`

两向量是否相等

#### Defined in

Type/index.d.ts:3894

---

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

读取字符串数据

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description      |
| :---- | :------- | :--------------- |
| `str` | `string` | usage:读取的字符 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:3842

---

### multiply

▸ **multiply**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

乘以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description          |
| :--- | :-------------------------------- | :------------------- |
| `v`  | [`Vector2`](Type.Type.Vector2.md) | usage:相乘的向量对象 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3815

▸ **multiply**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `v`  | `number` | usage:每个分量乘以的参数 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3822

---

### normalize

▸ **normalize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

将当前向量归一化

**`Effect`**

调用端生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

归一化后的自身对象

#### Defined in

Type/index.d.ts:3906

---

### set

▸ **set**(`other`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

设置当前向量使其与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                              | Description      |
| :------ | :-------------------------------- | :--------------- |
| `other` | [`Vector2`](Type.Type.Vector2.md) | usage:指定的向量 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

`this`

#### Defined in

Type/index.d.ts:3786

▸ **set**(`x?`, `y?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

设置当前向量的具体分量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `x?` | `number` | usage:x 分量 default:0.0 |
| `y?` | `number` | usage:y 分量 default:0.0 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

`this`

#### Defined in

Type/index.d.ts:3794

---

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前向量是否与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `other` | [`Vector2`](Type.Type.Vector2.md) | usage:指定向量 |

#### Returns

`boolean`

两向量是否相等

#### Defined in

Type/index.d.ts:3886

---

### subtract

▸ **subtract**(`v`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

减去一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description          |
| :--- | :-------------------------------- | :------------------- |
| `v`  | [`Vector2`](Type.Type.Vector2.md) | usage:相减的向量对象 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3808

---

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

Type/index.d.ts:3848

---

### add

▸ `Static` **add**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算 ab 两个向量相加

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相加的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3444

---

### angle

▸ `Static` **angle**(`a`, `b`): `number`

**`Description`**

求两向量夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

向量 a 与向量 b 的夹角角度

#### Defined in

Type/index.d.ts:3722

---

### ceil

▸ `Static` **ceil**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量向上取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素向上取整后的 Vector2 对象

#### Defined in

Type/index.d.ts:3546

---

### clamp

▸ `Static` **clamp**(`v`, `min`, `max`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

设置当前向量的值, 使其各个分量都处于指定的范围内

**`Effect`**

调用端生效

#### Parameters

| Name  | Type                              | Description  |
| :---- | :-------------------------------- | :----------- |
| `v`   | [`Vector2`](Type.Type.Vector2.md) | usage:向量 v |
| `min` | [`Vector2`](Type.Type.Vector2.md) | usage:最小值 |
| `max` | [`Vector2`](Type.Type.Vector2.md) | usage:最大值 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的向量 v

#### Defined in

Type/index.d.ts:3760

---

### clone

▸ `Static` **clone**(`a`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

克隆向量 a 得到的新 Vector2 向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

克隆得到的新 Vector2 向量

#### Defined in

Type/index.d.ts:3501

---

### copy

▸ `Static` **copy**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获得指定向量的拷贝

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

拷贝得到的 Vector2 向量

#### Defined in

Type/index.d.ts:3510

---

### cross

▸ `Static` **cross**(`a`, `b`): `number`

**`Description`**

向量叉积 (向量积)

**`Effect`**

调用端生效

**`Precautions`**

注意二维向量的叉积为与 Z 轴平行的三维向量, 此处以向量的模长表示

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

叉积

#### Defined in

Type/index.d.ts:3666

---

### distance

▸ `Static` **distance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

两向量的欧氏距离

#### Defined in

Type/index.d.ts:3590

---

### divide

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

遍历向量 a 的每个分量除以 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | `number`                          | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相除的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3484

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算向量 a 除以向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相除的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3494

---

### dot

▸ `Static` **dot**(`a`, `b`): `number`

**`Description`**

向量点积 (数量积)

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

点积

#### Defined in

Type/index.d.ts:3657

---

### equals

▸ `Static` **equals**(`a`, `b`, `epsilon?`): `boolean`

**`Description`**

排除浮点数误差的向量近似等价判断

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description                                    |
| :--------- | :-------------------------------- | :--------------------------------------------- |
| `a`        | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                                   |
| `b`        | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                                   |
| `epsilon?` | `number`                          | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:3519

---

### floor

▸ `Static` **floor**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量向下取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素向下取整后的 Vector2 对象

#### Defined in

Type/index.d.ts:3555

---

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

通过一个字符串创建 Vector2 对象

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `str`    | `string`                          | usage:传入的字符串                         |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

创建的 Vector2 对象

#### Defined in

Type/index.d.ts:3434

---

### fromUEVector2D

▸ `Static` **fromUEVector2D**(`v`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

通过一个 UE 向量创建 Vector2 对象

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `v`      | `Vector2D`                        | usage:UE.Vector                            |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

创建的 Vector2 对象

#### Defined in

Type/index.d.ts:3425

---

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量取倒数, 接近 0 时返回 Infinity

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素取倒数得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3630

---

### invertSafe

▸ `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量取倒数, 接近 0 时返回 0

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name       | Type                              | Description                                    |
| :--------- | :-------------------------------- | :--------------------------------------------- |
| `a`        | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                                   |
| `outer?`   | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null     |
| `epsilon?` | `number`                          | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素取倒数得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3640

---

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量线性插值： A + t \* (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `t`      | `number`                          | usage:插值                                 |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

线性插值得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3677

---

### magnitude

▸ `Static` **magnitude**(`a`): `number`

**`Description`**

求向量长度

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |

#### Returns

`number`

向量长度

#### Defined in

Type/index.d.ts:3605

---

### max

▸ `Static` **max**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量最大值

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素取最大值后的 Vector2 对象

#### Defined in

Type/index.d.ts:3574

---

### min

▸ `Static` **min**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量最小值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素取最小值后的 Vector2 对象

#### Defined in

Type/index.d.ts:3565

---

### moveTowards

▸ `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

向目标移动

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name               | Type                              | Description                                |
| :----------------- | :-------------------------------- | :----------------------------------------- |
| `current`          | [`Vector2`](Type.Type.Vector2.md) | usage:当前向量                             |
| `target`           | [`Vector2`](Type.Type.Vector2.md) | usage:目标向量                             |
| `maxDistanceDelta` | `number`                          | usage:最大移动距离                         |
| `outer?`           | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

移动后的得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3688

---

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

遍历向量 a 的每个分量乘以 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | `number`                          | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相乘的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3464

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算向量 a 乘以向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相乘的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3474

---

### negate

▸ `Static` **negate**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量取负

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐元素向量取负得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3621

---

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

归一化向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

归一化后得到的 Vector2 对象

#### Defined in

Type/index.d.ts:3649

---

### project

▸ `Static` **project**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算向量 a 在向量 b 上的投影向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

投影向量

#### Defined in

Type/index.d.ts:3751

---

### random

▸ `Static` **random**(`range?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

生成一个在单位圆上均匀分布的随机 Vector2 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type     | Description            |
| :------- | :------- | :--------------------- |
| `range?` | `number` | usage:范围 default:1.0 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

得到的随机 Vector2 对象

#### Defined in

Type/index.d.ts:3714

---

### reflect

▸ `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

求反射角

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name          | Type                              | Description                                |
| :------------ | :-------------------------------- | :----------------------------------------- |
| `inDirection` | [`Vector2`](Type.Type.Vector2.md) | usage:入射向量                             |
| `inNormal`    | [`Vector2`](Type.Type.Vector2.md) | usage:法线向量                             |
| `outer?`      | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

反射角

#### Defined in

Type/index.d.ts:3703

---

### rotate

▸ `Static` **rotate**(`v`, `radians`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算向量 a 旋转 radians 度后的向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name      | Type                              | Description                                |
| :-------- | :-------------------------------- | :----------------------------------------- |
| `v`       | [`Vector2`](Type.Type.Vector2.md) | usage:向量 v                               |
| `radians` | `number`                          | usage:旋转角度                             |
| `outer?`  | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

旋转后的 Vector2 对象

#### Defined in

Type/index.d.ts:3741

---

### round

▸ `Static` **round**(`a`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

逐元素向量四舍五入取整

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

逐逐元素向量四舍五入取整后的 Vector2 对象

#### Defined in

Type/index.d.ts:3582

---

### set

▸ `Static` **set**(`a`, `x`, `y`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

设置向量 a 的值

**`Effect`**

调用端生效

**`Precautions`**

向量 a 不能为空对象

#### Parameters

| Name | Type                              | Description       |
| :--- | :-------------------------------- | :---------------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a      |
| `x`  | `number`                          | usage:修改的 x 值 |
| `y`  | `number`                          | usage:修改的 y 值 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

修改后的 Vector2 对象

#### Defined in

Type/index.d.ts:3537

---

### signAngle

▸ `Static` **signAngle**(`a`, `b`): `number`

**`Description`**

获取向量 a 和向量 b 之间的有符号角度

**`Effect`**

调用端生效

**`Precautions`**

有符号角度的取值范围为 (-180, 180], 当前向量可以通过逆时针旋转有符号角度与指定向量同向 <br/>

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

向量 a 和向量 b 之间的有符号角度

#### Defined in

Type/index.d.ts:3731

---

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`a`): `number`

**`Description`**

求向量长度平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |

#### Returns

`number`

向量长度平方

#### Defined in

Type/index.d.ts:3612

---

### squaredDistance

▸ `Static` **squaredDistance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`number`

两向量的欧氏距离平方

#### Defined in

Type/index.d.ts:3598

---

### strictEquals

▸ `Static` **strictEquals**(`a`, `b`): `boolean`

**`Description`**

向量等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type                              | Description  |
| :--- | :-------------------------------- | :----------- |
| `a`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a |
| `b`  | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b |

#### Returns

`boolean`

是否相等

#### Defined in

Type/index.d.ts:3527

---

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

计算向量 a 减去向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                              | Description                                |
| :------- | :-------------------------------- | :----------------------------------------- |
| `a`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 a                               |
| `b`      | [`Vector2`](Type.Type.Vector2.md) | usage:向量 b                               |
| `outer?` | [`Vector2`](Type.Type.Vector2.md) | usage:接收结果的 Vector2 对象 default:null |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

相减的结果 Vector2 对象

#### Defined in

Type/index.d.ts:3454
