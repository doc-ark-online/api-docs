[Type](../modules/Type.Type.md) / Rotation

# Rotation <Badge type="tip" text="Class" />

**`Description`**

由分量 (x,y,z) 组成的三维空间中的旋转量，对应 UE 的 Rotator。

**`Precautions`**

所有旋转值均以度为单位存储

## Table of contents

| Properties                                                    |
| :------------------------------------------------------------ |
| **[x](Type.Type.Rotation.md#x)**: `number` <br> 旋转的 x 分量 |
| **[y](Type.Type.Rotation.md#y)**: `number` <br> 旋转的 y 分量 |
| **[z](Type.Type.Rotation.md#z)**: `number` <br> 旋转的 z 分量 |

| Accessors                                                                                                         |
| :---------------------------------------------------------------------------------------------------------------- |
| **[zero](Type.Type.Rotation.md#zero)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取一个空旋转的角度 (0, 0, 0) |

| Methods                                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[add](Type.Type.Rotation.md#add)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量加上一个旋转量             |
| **[clone](Type.Type.Rotation.md#clone)**(): [`Rotation`](Type.Type.Rotation.md) <br> 克隆当前旋转量                                                                                                                                |
| **[equals](Type.Type.Rotation.md#equals)**([`Rotation`](Type.Type.Rotation.md), `number`): `boolean` <br> 判断当前角度是否在误差范围内与指定向量相等。                                                                             |
| **[fromQuaternion](Type.Type.Rotation.md#fromquaternion)**([`Quaternion`](Type.Type.Quaternion.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换 Quaternion 为 Rotation                     |
| **[fromString](Type.Type.Rotation.md#fromstring)**(`string`, [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换字符串数据为 Rotation                                                              |
| **[fromVector](Type.Type.Rotation.md#fromvector)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换 Vector 为 Rotation                                         |
| **[getForce](Type.Type.Rotation.md#getforce)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取此旋转后的方向向量                                                                                       |
| **[getInverse](Type.Type.Rotation.md#getinverse)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 返回一个新的反向旋转。                                                                           |
| **[multiply](Type.Type.Rotation.md#multiply)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量减去一个旋转量   |
| **[rotateVector](Type.Type.Rotation.md#rotatevector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 当前角度旋转一个向量                                                                                 |
| **[set](Type.Type.Rotation.md#set)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量设置为新的旋转量                                                                                     |
| **[strictEquals](Type.Type.Rotation.md#strictequals)**([`Rotation`](Type.Type.Rotation.md)): `boolean` <br> 判断当前角度是否与指定向量相等。                                                                                       |
| **[subtract](Type.Type.Rotation.md#subtract)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量减去一个旋转量   |
| **[toQuaternion](Type.Type.Rotation.md#toquaternion)**(): [`Quaternion`](Type.Type.Quaternion.md) <br> 当前 Rotation 输出为四元数                                                                                                  |
| **[toString](Type.Type.Rotation.md#tostring)**(): `string` <br> 当前 Rotation 输出为字符串                                                                                                                                         |
| **[add](Type.Type.Rotation.md#add-1)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量加上一个旋转量           |
| **[copy](Type.Type.Rotation.md#copy)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 复制目标旋转                                                            |
| **[fromQuaternion](Type.Type.Rotation.md#fromquaternion-1)**([`Quaternion`](Type.Type.Quaternion.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换 Quaternion 为 Rotation                   |
| **[fromString](Type.Type.Rotation.md#fromstring-1)**(`string`, [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换字符串数据为 Rotation                                                            |
| **[fromVector](Type.Type.Rotation.md#fromvector-1)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 转换 Vector 为 Rotation                                       |
| **[lerp](Type.Type.Rotation.md#lerp)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), `number`): [`Rotation`](Type.Type.Rotation.md) <br> 对两个旋转量进行插值                                          |
| **[multiply](Type.Type.Rotation.md#multiply-1)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量减去一个旋转量 |
| **[subtract](Type.Type.Rotation.md#subtract-1)**([`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md), [`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 当前旋转量减去一个旋转量 |

**`Description`**

构建一个新的 Rotation。值为(0, 0, 0)

• **new Rotation**(`vector`)

**`Description`**

用给定的 vector 中的 x, y, z 值设定给 x, y, z 。

#### Parameters

| Name     | Type                            | Description   |
| :------- | :------------------------------ | :------------ |
| `vector` | [`Vector`](Type.Type.Vector.md) | 给定的 vector |

• **new Rotation**(`forward`, `up`)

**`Description`**

构造一个旋转，将旋转 Vector.FORWARD 以指向给定的前向矢量的方向，向上矢量作为参考。

**`Precautions`**

如果向前和向上指向完全相同 (或相反)的方向，或者其中之一的长度为 0，则返回 (0, 0, 0)。

#### Parameters

| Name      | Type                            | Description |
| :-------- | :------------------------------ | :---------- |
| `forward` | [`Vector`](Type.Type.Vector.md) | 前向矢量    |
| `up`      | [`Vector`](Type.Type.Vector.md) | 向上矢量    |

• **new Rotation**(`rotation`)

**`Description`**

复制 rotation，并返回一个新的。

#### Parameters

| Name       | Type                                | Description          |
| :--------- | :---------------------------------- | :------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 复制的 Rotation 对象 |

• **new Rotation**(`v`)

**`Description`**

通过四元数构造

#### Parameters

| Name | Type                                    | Description |
| :--- | :-------------------------------------- | :---------- |
| `v`  | [`Quaternion`](Type.Type.Quaternion.md) | 四元数      |

• **new Rotation**(`x`, `y`, `z`)

**`Description`**

通过三个分量构造

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `x`  | `number` | 旋转的 x 分量 |
| `y`  | `number` | 旋转的 y 分量 |
| `z`  | `number` | 旋转的 z 分量 |

## Properties

### x

• **x**: `number`

**`Description`**

旋转的 x 分量

---

### y

• **y**: `number`

**`Description`**

旋转的 y 分量

---

### z

• **z**: `number`

**`Description`**

旋转的 z 分量

## Accessors

### zero

• `Static` `get` **zero**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取一个空旋转的角度 (0, 0, 0)

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation (0, 0, 0)

## Methods

### add

▸ **add**(`a`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量加上一个旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description |
| :--- | :---------------------------------- | :---------- |
| `a`  | [`Rotation`](Type.Type.Rotation.md) | 旋转量      |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

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

---

### equals

▸ **equals**(`other`, `epsilon?`): `boolean`

**`Description`**

判断当前角度是否在误差范围内与指定向量相等。

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description          |
| :--------- | :---------------------------------- | :------------------- |
| `other`    | [`Rotation`](Type.Type.Rotation.md) | 比对的旋转量         |
| `epsilon?` | `number`                            | 误差值 default:1.e-7 |

#### Returns

`boolean`

比对的结果

---

### fromQuaternion

▸ **fromQuaternion**(`v`): `void`

**`Description`**

当前 Rotation 读取一个四元数

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                    | Description      |
| :--- | :-------------------------------------- | :--------------- |
| `v`  | [`Quaternion`](Type.Type.Quaternion.md) | 读取的四元数数据 |

#### Returns

`void`

---

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

当前 Rotation 读取一个字符串数据

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `str` | `string` | 字符串数据  |

#### Returns

`void`

---

### fromVector

▸ **fromVector**(`v`): `void`

**`Description`**

当前 Rotation 读取一个 Vector

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description    |
| :--- | :------------------------------ | :------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 读取的向量数据 |

#### Returns

`void`

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

| Name     | Type                            | Description                                                       |
| :------- | :------------------------------ | :---------------------------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 被写入数据的向量, 传入的 outer 不能为 null/undefined default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

旋转的方向向量

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

| Name     | Type                                | Description                     |
| :------- | :---------------------------------- | :------------------------------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 被写入数据的旋转量 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

反方向的旋转

---

### multiply

▸ **multiply**(`v`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量乘以一个旋转量 (相当于四元数叉乘)

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description |
| :--- | :---------------------------------- | :---------- |
| `v`  | [`Rotation`](Type.Type.Rotation.md) | 旋转量      |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

---

### rotateVector

▸ **rotateVector**(`v`): [`Vector`](Type.Type.Vector.md)

**`Description`**

当前角度旋转一个向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description  |
| :--- | :------------------------------ | :----------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | 被旋转的向量 |

#### Returns

[`Vector`](Type.Type.Vector.md)

旋转后的向量

---

### set

▸ **set**(`v`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量设置为新的旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description |
| :--- | :---------------------------------- | :---------- |
| `v`  | [`Rotation`](Type.Type.Rotation.md) | 旋转量      |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转量

▸ **set**(`x`, `y`, `z`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

为当前旋转量设置每个分量

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description   |
| :--- | :------- | :------------ |
| `x`  | `number` | 旋转的 x 分量 |
| `y`  | `number` | 旋转的 y 分量 |
| `z`  | `number` | 旋转的 z 分量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转量

---

### strictEquals

▸ **strictEquals**(`other`): `boolean`

**`Description`**

判断当前角度是否与指定向量相等。

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                | Description  |
| :------ | :---------------------------------- | :----------- |
| `other` | [`Rotation`](Type.Type.Rotation.md) | 比对的旋转量 |

#### Returns

`boolean`

比对的结果

---

### subtract

▸ **subtract**(`a`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

当前旋转量减去一个旋转量

**`Effect`**

调用端生效

#### Parameters

| Name | Type                                | Description |
| :--- | :---------------------------------- | :---------- |
| `a`  | [`Rotation`](Type.Type.Rotation.md) | 旋转量      |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

this

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

| Name    | Type                                | Description      |
| :------ | :---------------------------------- | :--------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 a         |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 b         |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | 接收结果的旋转量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相加的结果

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

| Name    | Type                                | Description    |
| :------ | :---------------------------------- | :------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | 目标旋转       |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | 接收结果的旋转 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

拷贝得到的新旋转对象

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

| Name     | Type                                    | Description                       |
| :------- | :-------------------------------------- | :-------------------------------- |
| `v`      | [`Quaternion`](Type.Type.Quaternion.md) | Quaternion                        |
| `outer?` | [`Rotation`](Type.Type.Rotation.md)     | 传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

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

| Name     | Type                                | Description                       |
| :------- | :---------------------------------- | :-------------------------------- |
| `v`      | `string`                            | string                            |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

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

| Name     | Type                                | Description                       |
| :------- | :---------------------------------- | :-------------------------------- |
| `v`      | [`Vector`](Type.Type.Vector.md)     | MWVector                          |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 传入的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

---

### lerp

▸ `Static` **lerp**(`a`, `b`, `alpha`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

对两个旋转量进行插值

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                | Description |
| :------ | :---------------------------------- | :---------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 a    |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 b    |
| `alpha` | `number`                            | 插值        |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

Rotation

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

| Name    | Type                                | Description          |
| :------ | :---------------------------------- | :------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 a             |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 b             |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | 接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相乘的结果

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

| Name    | Type                                | Description          |
| :------ | :---------------------------------- | :------------------- |
| `a`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 a             |
| `b`     | [`Rotation`](Type.Type.Rotation.md) | 旋转量 b             |
| `outer` | [`Rotation`](Type.Type.Rotation.md) | 接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

相减的结果
