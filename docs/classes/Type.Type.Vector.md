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

| Name | Type     | Description            |
| :--- | :------- | :--------------------- |
| `x?` | `number` | usage:x 分量 default:0 |
| `y?` | `number` | usage:y 分量 default:0 |
| `z?` | `number` | usage:z 分量 default:0 |

#### Defined in

Type/index.d.ts:3246

• **new Vector**(`f`)

**`Description`**

用给定的 f 值设定给 x, y 和 z

#### Parameters

| Name | Type     | Description       |
| :--- | :------- | :---------------- |
| `f`  | `number` | usage:给定的 f 值 |

#### Defined in

Type/index.d.ts:3251

• **new Vector**(`v`)

**`Description`**

用给定的 Vector 的值的 x, y 和 z 分量设定给 x，y 和 z

#### Parameters

| Name | Type                            | Description         |
| :--- | :------------------------------ | :------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:给定的 Vector |

#### Defined in

Type/index.d.ts:3256

## Properties

### x

• **x**: `number`

**`Description`**

X 轴坐标

#### Defined in

Type/index.d.ts:2864

---

### y

• **y**: `number`

**`Description`**

Y 轴坐标

#### Defined in

Type/index.d.ts:2868

---

### z

• **z**: `number`

**`Description`**

Z 轴坐标

#### Defined in

Type/index.d.ts:2872

## Accessors

### length

• `get` **length**(): `number`

**`Description`**

计算向量的长度

#### Returns

`number`

#### Defined in

Type/index.d.ts:3334

---

### magnitude

• `get` **magnitude**(): `number`

**`Description`**

向量的长度

#### Returns

`number`

#### Defined in

Type/index.d.ts:3342

---

### negative

• `get` **negative**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回各个分量取反的新向量

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:3346

---

### normalized

• `get` **normalized**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回一个归一化的新向量, 不影响本向量

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:3350

---

### sqrLength

• `get` **sqrLength**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:3330

---

### sqrMagnitude

• `get` **sqrMagnitude**(): `number`

**`Description`**

计算向量的长度平方

#### Returns

`number`

#### Defined in

Type/index.d.ts:3338

---

### back

• `Static` `get` **back**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2848

---

### down

• `Static` `get` **down**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2840

---

### forward

• `Static` `get` **forward**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2844

---

### left

• `Static` `get` **left**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, -1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2832

---

### negOne

• `Static` `get` **negOne**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(-1, -1, -1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2860

---

### one

• `Static` `get` **one**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 1, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2856

---

### right

• `Static` `get` **right**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2828

---

### unitX

• `Static` `get` **unitX**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(1, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2816

---

### unitY

• `Static` `get` **unitY**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 1, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2820

---

### unitZ

• `Static` `get` **unitZ**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2824

---

### up

• `Static` `get` **up**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 1)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2836

---

### zero

• `Static` `get` **zero**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

Vector(0, 0, 0)

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Defined in

Type/index.d.ts:2852

## Methods

### add

▸ **add**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

加一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description          |
| :--- | :------------------------------ | :------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:相加的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3279

---

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

Type/index.d.ts:3373

---

### divide

▸ **divide**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

每个分量除以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `v`  | `number` | usage:每个分量除以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3307

▸ **divide**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

除以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description          |
| :--- | :------------------------------ | :------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:除以的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3314

---

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前向量是否在误差范围内与指定向量相等

**`Effect`**

调用端生效

**`Precautions`**

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

#### Parameters

| Name       | Type                            | Description                                    |
| :--------- | :------------------------------ | :--------------------------------------------- |
| `other`    | [`Vector`](Type.Type.Vector.md) | usage:指定的向量                               |
| `epsilon?` | `number`                        | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

`boolean`

当前向量是否在误差范围内与指定向量相等

#### Defined in

Type/index.d.ts:3367

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

Type/index.d.ts:3320

---

### multiply

▸ **multiply**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

乘以一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description          |
| :--- | :------------------------------ | :------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:相乘的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3293

▸ **multiply**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

每个分量乘以参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `v`  | `number` | usage:每个分量乘以的参数 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3300

---

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

Type/index.d.ts:3379

---

### set

▸ **set**(`other`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量使其与指定向量相等

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description      |
| :------ | :------------------------------ | :--------------- |
| `other` | [`Vector`](Type.Type.Vector.md) | usage:指定的向量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3263

▸ **set**(`x?`, `y?`, `z?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量的具体分量值

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description            |
| :--- | :------- | :--------------------- |
| `x?` | `number` | usage:x 分量 default:0 |
| `y?` | `number` | usage:y 分量 default:0 |
| `z?` | `number` | usage:z 分量 default:0 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3272

---

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前向量是否与指定向量相等

**`Effect`**

调用端生效

**`Precautions`**

当两个向量的分量在指定的误差范围内相等时, 返回 true, 否则返回 false

#### Parameters

| Name    | Type                            | Description      |
| :------ | :------------------------------ | :--------------- |
| `other` | [`Vector`](Type.Type.Vector.md) | usage:指定的向量 |

#### Returns

`boolean`

当前向量是否与指定向量相等

#### Defined in

Type/index.d.ts:3358

---

### subtract

▸ **subtract**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

减去一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description          |
| :--- | :------------------------------ | :------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:相减的向量对象 |

#### Returns

[`Vector`](Type.Type.Vector.md)

修改后的自身对象

#### Defined in

Type/index.d.ts:3286

---

### toRotation

▸ **toRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

转换为对应的 Rotation

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

新的对应的 Rotation 对象

#### Defined in

Type/index.d.ts:3385

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

Type/index.d.ts:3326

---

### add

▸ `Static` **add**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算 ab 两个向量相加

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相加的结果 Vector 对象

#### Defined in

Type/index.d.ts:2891

---

### angle

▸ `Static` **angle**(`a`, `b`): `number`

**`Description`**

求向量 a 与向量 b 在 XY 平面投影的夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`number`

夹角角度

#### Defined in

Type/index.d.ts:3206

---

### angle3D

▸ `Static` **angle3D**(`a`, `b`): `number`

**`Description`**

求向量 a 与向量 b 的夹角角度

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`number`

夹角角度

#### Defined in

Type/index.d.ts:3198

---

### ceil

▸ `Static` **ceil**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量 a 逐元素向量向上取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向上取整的 Vector 对象

#### Defined in

Type/index.d.ts:3015

---

### clamp

▸ `Static` **clamp**(`value`, `minInclusive`, `maxInclusive`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置当前向量的值，使其各个分量都处于指定的范围内

**`Effect`**

调用端生效

#### Parameters

| Name           | Type                            | Description        |
| :------------- | :------------------------------ | :----------------- |
| `value`        | [`Vector`](Type.Type.Vector.md) | usage:当前向量的值 |
| `minInclusive` | [`Vector`](Type.Type.Vector.md) | usage:允许的最小值 |
| `maxInclusive` | [`Vector`](Type.Type.Vector.md) | usage:允许的最大值 |

#### Returns

[`Vector`](Type.Type.Vector.md)

各个分量都处于指定的范围内的向量

#### Defined in

Type/index.d.ts:3235

---

### clone

▸ `Static` **clone**(`a`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获得指定向量的拷贝

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

#### Defined in

Type/index.d.ts:2948

---

### copy

▸ `Static` **copy**(`a`, `outer`): [`Vector`](Type.Type.Vector.md)

**`Description`**

复制目标向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name    | Type                            | Description                       |
| :------ | :------------------------------ | :-------------------------------- |
| `a`     | [`Vector`](Type.Type.Vector.md) | usage:目标向量                    |
| `outer` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

克隆得到的新 Vector 对象

#### Defined in

Type/index.d.ts:2957

---

### cross

▸ `Static` **cross**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向量叉积 (向量积)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

叉积 Vector 对象

#### Defined in

Type/index.d.ts:3138

---

### distance

▸ `Static` **distance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`number`

欧氏距离

#### Defined in

Type/index.d.ts:3061

---

### divide

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

遍历向量 a 的每个分量除以 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | `number`                        | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

#### Defined in

Type/index.d.ts:2931

▸ `Static` **divide**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量 a 除以向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相除的结果 Vector 对象

#### Defined in

Type/index.d.ts:2941

---

### dot

▸ `Static` **dot**(`a`, `b`): `number`

**`Description`**

向量点积 (数量积)

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`number`

点积

#### Defined in

Type/index.d.ts:3128

---

### equals

▸ `Static` **equals**(`a`, `b`, `epsilon?`): `boolean`

**`Description`**

排除浮点数误差的向量近似等价判断

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description                                 |
| :--------- | :------------------------------ | :------------------------------------------ |
| `a`        | [`Vector`](Type.Type.Vector.md) | usage:向量 a                                |
| `b`        | [`Vector`](Type.Type.Vector.md) | usage:向量 b                                |
| `epsilon?` | `number`                        | usage:最小误差数 default:MathDefine.EPSILON |

#### Returns

`boolean`

是否等价

#### Defined in

Type/index.d.ts:2966

---

### floor

▸ `Static` **floor**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量 a 逐元素向量向下取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素向下取整的 Vector 对象

#### Defined in

Type/index.d.ts:3024

---

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

通过一个字符串创建 Vector

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `str`    | `string`                        | usage:待转化的 string                 |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

转化后的 Vector 对象

#### Defined in

Type/index.d.ts:2881

---

### invert

▸ `Static` **invert**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量 a 逐元素向量取倒数，接近 0 时返回 Infinity

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

#### Defined in

Type/index.d.ts:3101

---

### invertSafe

▸ `Static` **invertSafe**(`a`, `outer?`, `epsilon?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量 a 逐元素向量取倒数，接近 0 时返回 0

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name       | Type                            | Description                                    |
| :--------- | :------------------------------ | :--------------------------------------------- |
| `a`        | [`Vector`](Type.Type.Vector.md) | usage:向量 a                                   |
| `outer?`   | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null              |
| `epsilon?` | `number`                        | usage:最小误差数 default:Util.MathUtil.EPSILON |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取倒数后的 Vector 对象

#### Defined in

Type/index.d.ts:3111

---

### lerp

▸ `Static` **lerp**(`a`, `b`, `t`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量线性插值： A + t \* (B - A)

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                      |
| `t`      | `number`                        | usage:插值                        |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

线性插值得到的 Vector 对象

#### Defined in

Type/index.d.ts:3149

---

### magnitude

▸ `Static` **magnitude**(`a`): `number`

**`Description`**

求向量长度

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |

#### Returns

`number`

向量长度

#### Defined in

Type/index.d.ts:3076

---

### max

▸ `Static` **max**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量最大值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最大值的 Vector 对象

#### Defined in

Type/index.d.ts:3044

---

### min

▸ `Static` **min**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

逐元素向量最小值

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取最小值后的 Vector 对象

#### Defined in

Type/index.d.ts:3034

---

### moveTowards

▸ `Static` **moveTowards**(`current`, `target`, `maxDistanceDelta`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

向目标向量移动

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name               | Type                            | Description                               |
| :----------------- | :------------------------------ | :---------------------------------------- |
| `current`          | [`Vector`](Type.Type.Vector.md) | usage:当前向量                            |
| `target`           | [`Vector`](Type.Type.Vector.md) | usage:目标向量                            |
| `maxDistanceDelta` | `number`                        | usage:最大移动分量                        |
| `outer?`           | [`Vector`](Type.Type.Vector.md) | usage:接收结果的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

移动后的 Vector 对象

#### Defined in

Type/index.d.ts:2977

---

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

遍历向量 a 的每个分量乘以 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | `number`                        | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

#### Defined in

Type/index.d.ts:2911

▸ `Static` **multiply**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量 a 乘以向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相乘的结果 Vector 对象

#### Defined in

Type/index.d.ts:2921

---

### negate

▸ `Static` **negate**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

求向量 a 逐元素向量取负

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素取负后的 Vector 对象

#### Defined in

Type/index.d.ts:3092

---

### normalize

▸ `Static` **normalize**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

归一化向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

归一化后的 Vector 对象

#### Defined in

Type/index.d.ts:3120

---

### project

▸ `Static` **project**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量 a 在指定向量上的投影

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:指定平面的法线                  |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收投影的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量 a 在指定向量上的投影

#### Defined in

Type/index.d.ts:3226

---

### projectOnPlane

▸ `Static` **projectOnPlane**(`a`, `n`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量 a 在指定平面上的投影

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `n`      | [`Vector`](Type.Type.Vector.md) | usage:指定平面的法线              |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

向量 a 在指定平面上的投影

#### Defined in

Type/index.d.ts:3216

---

### reflect

▸ `Static` **reflect**(`inDirection`, `inNormal`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

求反射角

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name          | Type                            | Description                       |
| :------------ | :------------------------------ | :-------------------------------- |
| `inDirection` | [`Vector`](Type.Type.Vector.md) | usage:入射向量角度                |
| `inNormal`    | [`Vector`](Type.Type.Vector.md) | usage:法线向量                    |
| `outer?`      | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

反射角

#### Defined in

Type/index.d.ts:2992

---

### rotateX

▸ `Static` **rotateX**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 X 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `v`      | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量                    |
| `o`      | [`Vector`](Type.Type.Vector.md) | usage:旋转中心                    |
| `a`      | `number`                        | usage:旋转弧度                    |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 X 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3160

---

### rotateY

▸ `Static` **rotateY**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 Y 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `v`      | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量                    |
| `o`      | [`Vector`](Type.Type.Vector.md) | usage:旋转中心                    |
| `a`      | `number`                        | usage:旋转弧度                    |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Y 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3171

---

### rotateZ

▸ `Static` **rotateZ**(`v`, `o`, `a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

绕 Z 轴旋转向量指定弧度

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `v`      | [`Vector`](Type.Type.Vector.md) | usage:旋转矢量                    |
| `o`      | [`Vector`](Type.Type.Vector.md) | usage:旋转中心                    |
| `a`      | `number`                        | usage:旋转弧度                    |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

绕 Z 轴旋转指定弧度后的 Vector 对象

#### Defined in

Type/index.d.ts:3182

---

### round

▸ `Static` **round**(`a`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将向量 a 逐元素向量四舍五入取整

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                       |
| :------- | :------------------------------ | :-------------------------------- |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                      |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

逐元素四舍五入取整后的 Vector 对象

#### Defined in

Type/index.d.ts:3053

---

### set

▸ `Static` **set**(`outer`, `x`, `y`, `z`): [`Vector`](Type.Type.Vector.md)

**`Description`**

设置向量值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `outer` | [`Vector`](Type.Type.Vector.md) | usage:被设置的向量对象 |
| `x`     | `number`                        | usage:x 分量           |
| `y`     | `number`                        | usage:y 分量           |
| `z`     | `number`                        | usage:z 分量           |

#### Returns

[`Vector`](Type.Type.Vector.md)

被设置的 Vector 对象

#### Defined in

Type/index.d.ts:3006

---

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`a`): `number`

**`Description`**

求向量长度平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |

#### Returns

`number`

向量长度平方

#### Defined in

Type/index.d.ts:3083

---

### squaredDistance

▸ `Static` **squaredDistance**(`a`, `b`): `number`

**`Description`**

求两向量的欧氏距离平方

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`number`

欧氏距离平方

#### Defined in

Type/index.d.ts:3069

---

### strictEquals

▸ `Static` **strictEquals**(`a`, `b`): `boolean`

**`Description`**

向量等价判断

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `a`  | [`Vector`](Type.Type.Vector.md) | usage:向量 a |
| `b`  | [`Vector`](Type.Type.Vector.md) | usage:向量 b |

#### Returns

`boolean`

两向量是否相等

#### Defined in

Type/index.d.ts:3190

---

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

计算向量 a 减去向量 b

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                           |
| :------- | :------------------------------ | :------------------------------------ |
| `a`      | [`Vector`](Type.Type.Vector.md) | usage:向量 a                          |
| `b`      | [`Vector`](Type.Type.Vector.md) | usage:向量 b                          |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收结果的向量对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相减的结果 Vector 对象

#### Defined in

Type/index.d.ts:2901
