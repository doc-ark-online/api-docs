[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Rotation

# Class: Rotation

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Rotation

**`Author`**

SuoWei

**`Description`**

由分量 (x,y,z) 组成的三维空间中的旋转量，对应 UE 的 Rotator。

**`Network Status`**

usage:双端

**`Precautions`**

所有旋转值均以度为单位存储

## Table of contents

### Constructors

- [constructor](Type.Type.Rotation.md#constructor)

### Properties

- [x](Type.Type.Rotation.md#x)
- [y](Type.Type.Rotation.md#y)
- [z](Type.Type.Rotation.md#z)

### Accessors

- [zero](Type.Type.Rotation.md#zero)

### Methods

- [add](Type.Type.Rotation.md#add)
- [clone](Type.Type.Rotation.md#clone)
- [equals](Type.Type.Rotation.md#equals)
- [fromQuaternion](Type.Type.Rotation.md#fromquaternion)
- [fromString](Type.Type.Rotation.md#fromstring)
- [fromVector](Type.Type.Rotation.md#fromvector)
- [getForce](Type.Type.Rotation.md#getforce)
- [getInverse](Type.Type.Rotation.md#getinverse)
- [multiply](Type.Type.Rotation.md#multiply)
- [rotateVector](Type.Type.Rotation.md#rotatevector)
- [set](Type.Type.Rotation.md#set)
- [strictEquals](Type.Type.Rotation.md#strictequals)
- [subtract](Type.Type.Rotation.md#subtract)
- [toQuaternion](Type.Type.Rotation.md#toquaternion)
- [toString](Type.Type.Rotation.md#tostring)
- [add](Type.Type.Rotation.md#add-1)
- [copy](Type.Type.Rotation.md#copy)
- [fromQuaternion](Type.Type.Rotation.md#fromquaternion-1)
- [fromString](Type.Type.Rotation.md#fromstring-1)
- [fromVector](Type.Type.Rotation.md#fromvector-1)
- [lerp](Type.Type.Rotation.md#lerp)
- [multiply](Type.Type.Rotation.md#multiply-1)
- [subtract](Type.Type.Rotation.md#subtract-1)

## Constructors

### constructor

• **new Rotation**()

**`Description`**

构建一个新的 Rotation。值为(0, 0, 0)

#### Defined in

Type/index.d.ts:2481

• **new Rotation**(`vector`)

**`Description`**

用给定的 vector 中的 x, y, z 值设定给 x, y, z 。

#### Parameters

| Name     | Type                            | Description         |
| :------- | :------------------------------ | :------------------ |
| `vector` | [`Vector`](Type.Type.Vector.md) | usage:给定的 vector |

#### Defined in

Type/index.d.ts:2486

• **new Rotation**(`forward`, `up`)

**`Description`**

构造一个旋转，将旋转 Vector.FORWARD 以指向给定的前向矢量的方向，向上矢量作为参考。

**`Precautions`**

如果向前和向上指向完全相同 (或相反)的方向，或者其中之一的长度为 0，则返回 (0, 0, 0)。

#### Parameters

| Name      | Type                            | Description    |
| :-------- | :------------------------------ | :------------- |
| `forward` | [`Vector`](Type.Type.Vector.md) | usage:前向矢量 |
| `up`      | [`Vector`](Type.Type.Vector.md) | usage:向上矢量 |

#### Defined in

Type/index.d.ts:2493

• **new Rotation**(`rotation`)

**`Description`**

复制 rotation，并返回一个新的。

#### Parameters

| Name       | Type                                | Description                |
| :--------- | :---------------------------------- | :------------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:复制的 Rotation 对象 |

#### Defined in

Type/index.d.ts:2498

• **new Rotation**(`v`)

**`Description`**

通过四元数构造

#### Parameters

| Name | Type                                    | Description  |
| :--- | :-------------------------------------- | :----------- |
| `v`  | [`Quaternion`](Type.Type.Quaternion.md) | usage:四元数 |

#### Defined in

Type/index.d.ts:2503

• **new Rotation**(`x`, `y`, `z`)

**`Description`**

通过三个分量构造

#### Parameters

| Name | Type     | Description         |
| :--- | :------- | :------------------ |
| `x`  | `number` | usage:旋转的 x 分量 |
| `y`  | `number` | usage:旋转的 y 分量 |
| `z`  | `number` | usage:旋转的 z 分量 |

#### Defined in

Type/index.d.ts:2510

## Properties

### x

• **x**: `number`

**`Description`**

旋转的 x 分量

#### Defined in

Type/index.d.ts:2469

---

### y

• **y**: `number`

**`Description`**

旋转的 y 分量

#### Defined in

Type/index.d.ts:2473

---

### z

• **z**: `number`

**`Description`**

旋转的 z 分量

#### Defined in

Type/index.d.ts:2477

## Accessors

### zero

• `Static` `get` **zero**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取一个空旋转的角度 (0, 0, 0)

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation (0, 0, 0)

#### Defined in

Type/index.d.ts:2438

## Methods

### add

▸ **add**(`a`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量加上一个旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description  |
| :--- | :---------------------------------- | :----------- |
| `a`  | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

#### Defined in

Type/index.d.ts:2585

---

### clone

▸ **clone**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

克隆当前旋转量

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

返回一个新的旋转量

#### Defined in

Type/index.d.ts:2516

---

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前角度是否在误差范围内与指定向量相等。

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description                |
| :--------- | :---------------------------------- | :------------------------- |
| `other`    | [`Rotation`](Type.Type.Rotation.md) | usage:比对的旋转量         |
| `epsilon?` | `number`                            | usage:误差值 default:1.e-7 |

#### Returns

`boolean`

比对的结果

#### Defined in

Type/index.d.ts:2644

---

### fromQuaternion

▸ **fromQuaternion**(`v`): `void`

**`Description`**

当前 Rotation 读取一个四元数

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                    | Description            |
| :--- | :-------------------------------------- | :--------------------- |
| `v`  | [`Quaternion`](Type.Type.Quaternion.md) | usage:读取的四元数数据 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2543

---

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

当前 Rotation 读取一个字符串数据

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description      |
| :---- | :------- | :--------------- |
| `str` | `string` | usage:字符串数据 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2531

---

### fromVector

▸ **fromVector**(`v`): `void`

**`Description`**

当前 Rotation 读取一个 Vector

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description          |
| :--- | :------------------------------ | :------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:读取的向量数据 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2555

---

### getForce

▸ **getForce**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取此旋转后的方向向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                            | Description                                                             |
| :------- | :------------------------------ | :---------------------------------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:被写入数据的向量, 传入的 outer 不能为 null/undefined default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

旋转的方向向量

#### Defined in

Type/index.d.ts:2660

---

### getInverse

▸ **getInverse**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

返回一个新的反向旋转。

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                | Description                           |
| :------- | :---------------------------------- | :------------------------------------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:被写入数据的旋转量 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

反方向的旋转

#### Defined in

Type/index.d.ts:2652

---

### multiply

▸ **multiply**(`v`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量乘以一个旋转量 (相当于四元数叉乘)

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description  |
| :--- | :---------------------------------- | :----------- |
| `v`  | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

#### Defined in

Type/index.d.ts:2599

---

### rotateVector

▸ **rotateVector**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前角度旋转一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description        |
| :--- | :------------------------------ | :----------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:被旋转的向量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

旋转后的向量

#### Defined in

Type/index.d.ts:2578

---

### set

▸ **set**(`v`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量设置为新的旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description  |
| :--- | :---------------------------------- | :----------- |
| `v`  | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转量

#### Defined in

Type/index.d.ts:2562

▸ **set**(`x`, `y`, `z`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

为当前旋转量设置每个分量

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description         |
| :--- | :------- | :------------------ |
| `x`  | `number` | usage:旋转的 x 分量 |
| `y`  | `number` | usage:旋转的 y 分量 |
| `z`  | `number` | usage:旋转的 z 分量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转量

#### Defined in

Type/index.d.ts:2571

---

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前角度是否与指定向量相等。

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                | Description        |
| :------ | :---------------------------------- | :----------------- |
| `other` | [`Rotation`](Type.Type.Rotation.md) | usage:比对的旋转量 |

#### Returns

`boolean`

比对的结果

#### Defined in

Type/index.d.ts:2606

---

### subtract

▸ **subtract**(`a`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量减去一个旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description  |
| :--- | :---------------------------------- | :----------- |
| `a`  | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

#### Defined in

Type/index.d.ts:2592

---

### toQuaternion

▸ **toQuaternion**(): [`Quaternion`](Type.Type.Quaternion.md)

**`Description`**

当前 Rotation 输出为四元数

**`Effect`**

调用端生效

#### Returns

[`Quaternion`](Type.Type.Quaternion.md)

输出的四元数

#### Defined in

Type/index.d.ts:2549

---

### toString

▸ **toString**(): `string`

**`Description`**

当前 Rotation 输出为字符串

**`Effect`**

调用端生效

#### Returns

`string`

输出的字符串数据

#### Defined in

Type/index.d.ts:2537

---

### add

▸ `Static` **add**(`a`, `b`, `outer`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量加上一个旋转量

**`Effect`**

调用端生效

**`Precautions`**

outer 不能为 null/undefined

#### Parameters

| Name    | Type                                | Description            |
| :------ | :---------------------------------- | :--------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 a         |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 b         |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | usage:接收结果的旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相加的结果

#### Defined in

Type/index.d.ts:2616

---

### copy

▸ `Static` **copy**(`a`, `outer`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

复制目标旋转

**`Effect`**

调用端生效

**`Precautions`**

outer 不能为 null/undefined

#### Parameters

| Name    | Type                                | Description          |
| :------ | :---------------------------------- | :------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | usage:目标旋转       |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | usage:接收结果的旋转 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

拷贝得到的新旋转对象

#### Defined in

Type/index.d.ts:2525

---

### fromQuaternion

▸ `Static` **fromQuaternion**(`v`, `outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

转换 Quaternion 为 Rotation

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                    | Description                             |
| :------- | :-------------------------------------- | :-------------------------------------- |
| `v`      | [`Quaternion`](Type.Type.Quaternion.md) | usage:Quaternion                        |
| `outer?` | [`Rotation`](Type.Type.Rotation.md)     | usage:传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

#### Defined in

Type/index.d.ts:2456

---

### fromString

▸ `Static` **fromString**(`v`, `outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

转换字符串数据为 Rotation

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                | Description                             |
| :------- | :---------------------------------- | :-------------------------------------- |
| `v`      | `string`                            | usage:string                            |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

#### Defined in

Type/index.d.ts:2465

---

### fromVector

▸ `Static` **fromVector**(`v`, `outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

转换 Vector 为 Rotation

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                | Description                             |
| :------- | :---------------------------------- | :-------------------------------------- |
| `v`      | [`Vector`](Type.Type.Vector.md)     | usage:MWVector                          |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

#### Defined in

Type/index.d.ts:2447

---

### lerp

▸ `Static` **lerp**(`a`, `b`, `alpha`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

对两个旋转量进行插值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                | Description    |
| :------ | :---------------------------------- | :------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 a |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 b |
| `alpha` | `number`                            | usage:插值     |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

#### Defined in

Type/index.d.ts:2669

---

### multiply

▸ `Static` **multiply**(`a`, `b`, `outer`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量减去一个旋转量

**`Effect`**

调用端生效

**`Precautions`**

outer 不能为 null/undefined

#### Parameters

| Name    | Type                                | Description                |
| :------ | :---------------------------------- | :------------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 a             |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 b             |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | usage:接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相乘的结果

#### Defined in

Type/index.d.ts:2636

---

### subtract

▸ `Static` **subtract**(`a`, `b`, `outer`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量减去一个旋转量

**`Effect`**

调用端生效

**`Precautions`**

outer 不能为 null/undefined

#### Parameters

| Name    | Type                                | Description                |
| :------ | :---------------------------------- | :------------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 a             |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | usage:旋转量 b             |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | usage:接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相减的结果

#### Defined in

Type/index.d.ts:2626
