[Type](../modules/Type.Type.md) / Rotation

# Rotation <Badge type="tip" text="Class" /> <Score text="Rotation" />

由分量 (x,y,z) 组成的三维空间中的旋转量，对应UE的Rotator。

::: warning Precautions

所有旋转值均以度为单位存储

:::

## Table of contents

| Properties |
| :-----|
| **[x](Type.Rotation.md#x)**: `number` <br> 旋转的 x 分量|
| **[y](Type.Rotation.md#y)**: `number` <br> 旋转的 y 分量|
| **[z](Type.Rotation.md#z)**: `number` <br> 旋转的 z 分量|

| Accessors |
| :-----|
| **[zero](Type.Rotation.md#zero)**(): [`Rotation`](Type.Rotation.md) <br> 获取一个空旋转的角度 (0, 0, 0)|

| Methods |
| :-----|
| **[add](Type.Rotation.md#add)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量加上一个旋转量|
| **[clone](Type.Rotation.md#clone)**(): [`Rotation`](Type.Rotation.md) <br> 克隆当前旋转量|
| **[equals](Type.Rotation.md#equals)**([`Rotation`](Type.Rotation.md), `number`): `boolean` <br> 判断当前角度是否在误差范围内与指定向量相等。|
| **[fromQuaternion](Type.Rotation.md#fromquaternion)**([`Quaternion`](Type.Quaternion.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换Quaternion为Rotation|
| **[fromString](Type.Rotation.md#fromstring)**(`string`, [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换字符串数据为Rotation|
| **[fromVector](Type.Rotation.md#fromvector)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换Vector为Rotation|
| **[getForce](Type.Rotation.md#getforce)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取此旋转后的方向向量|
| **[getInverse](Type.Rotation.md#getinverse)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 返回一个新的反向旋转。|
| **[multiply](Type.Rotation.md#multiply)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量减去一个旋转量|
| **[rotateVector](Type.Rotation.md#rotatevector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 当前角度旋转一个向量|
| **[set](Type.Rotation.md#set)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量设置为新的旋转量|
| **[strictEquals](Type.Rotation.md#strictequals)**([`Rotation`](Type.Rotation.md)): `boolean` <br> 判断当前角度是否与指定向量相等。|
| **[subtract](Type.Rotation.md#subtract)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量减去一个旋转量|
| **[toQuaternion](Type.Rotation.md#toquaternion)**(): [`Quaternion`](Type.Quaternion.md) <br> 当前Rotation输出为四元数|
| **[toString](Type.Rotation.md#tostring)**(): `string` <br> 当前Rotation输出为字符串|
| **[add](Type.Rotation.md#add-1)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量加上一个旋转量|
| **[copy](Type.Rotation.md#copy)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 复制目标旋转|
| **[fromQuaternion](Type.Rotation.md#fromquaternion-1)**([`Quaternion`](Type.Quaternion.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换Quaternion为Rotation|
| **[fromString](Type.Rotation.md#fromstring-1)**(`string`, [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换字符串数据为Rotation|
| **[fromVector](Type.Rotation.md#fromvector-1)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 转换Vector为Rotation|
| **[lerp](Type.Rotation.md#lerp)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), `number`): [`Rotation`](Type.Rotation.md) <br> 对两个旋转量进行插值|
| **[multiply](Type.Rotation.md#multiply-1)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量减去一个旋转量|
| **[subtract](Type.Rotation.md#subtract-1)**([`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md), [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 当前旋转量减去一个旋转量|

构建一个新的 Rotation。值为(0, 0, 0)

• **new Rotation**(`vector`)

用给定的 vector 中的x, y, z值设定给 x, y, z 。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector`](Type.Vector.md) | 给定的 vector |

• **new Rotation**(`forward`, `up`)

构造一个旋转，将旋转 Vector.FORWARD 以指向给定的前向矢量的方向，向上矢量作为参考。

::: warning Precautions

如果向前和向上指向完全相同 (或相反)的方向，或者其中之一的长度为 0，则返回 (0, 0, 0)。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forward` | [`Vector`](Type.Vector.md) | 前向矢量 |
| `up` | [`Vector`](Type.Vector.md) | 向上矢量 |

• **new Rotation**(`rotation`)

复制rotation，并返回一个新的。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Rotation.md) | 复制的 Rotation 对象 |

• **new Rotation**(`v`)

通过四元数构造

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Quaternion`](Type.Quaternion.md) | 四元数 |

• **new Rotation**(`x`, `y`, `z`)

通过三个分量构造

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 旋转的 x 分量 |
| `y` | `number` | 旋转的 y 分量 |
| `z` | `number` | 旋转的 z 分量 |

## Properties

### x <Score text="x" /> 

• **x**: `number`

旋转的 x 分量

___

### y <Score text="y" /> 

• **y**: `number`

旋转的 y 分量

___

### z <Score text="z" /> 

• **z**: `number`

旋转的 z 分量

## Accessors

### zero <Score text="zero" /> 

• `Static` `get` **zero**(): [`Rotation`](Type.Rotation.md)

获取一个空旋转的角度 (0, 0, 0)

#### Returns

[`Rotation`](Type.Rotation.md)

Rotation (0, 0, 0)

## Methods

### add <Score text="add" /> 

• **add**(`a`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量加上一个旋转量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量 |

#### Returns

[`Rotation`](Type.Rotation.md)

this

___

### clone <Score text="clone" /> 

• **clone**(): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

克隆当前旋转量


#### Returns

[`Rotation`](Type.Rotation.md)

返回一个新的旋转量

___

### equals <Score text="equals" /> 

• **equals**(`other`, `epsilon?`): `boolean` <Badge type="tip" text="other" />

判断当前角度是否在误差范围内与指定向量相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Rotation`](Type.Rotation.md) | 比对的旋转量 |
| `epsilon?` | `number` | 误差值 default:1.e-7 |

#### Returns

`boolean`

比对的结果

___

### fromQuaternion <Score text="fromQuaternion" /> 

• **fromQuaternion**(`v`): `void` <Badge type="tip" text="other" />

当前Rotation读取一个四元数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Quaternion`](Type.Quaternion.md) | 读取的四元数数据 |


___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` <Badge type="tip" text="other" />

当前Rotation读取一个字符串数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 字符串数据 |


___

### fromVector <Score text="fromVector" /> 

• **fromVector**(`v`): `void` <Badge type="tip" text="other" />

当前Rotation读取一个Vector


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | 读取的向量数据 |


___

### getForce <Score text="getForce" /> 

• **getForce**(`outer?`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

获取此旋转后的方向向量


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Vector.md) | 被写入数据的向量, 传入的 outer 不能为null/undefined default:null |

#### Returns

[`Vector`](Type.Vector.md)

旋转的方向向量

___

### getInverse <Score text="getInverse" /> 

• **getInverse**(`outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

返回一个新的反向旋转。


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Rotation.md) | 被写入数据的旋转量 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

反方向的旋转

___

### multiply <Score text="multiply" /> 

• **multiply**(`v`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量乘以一个旋转量 (相当于四元数叉乘)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Rotation.md) | 旋转量 |

#### Returns

[`Rotation`](Type.Rotation.md)

this

___

### rotateVector <Score text="rotateVector" /> 

• **rotateVector**(`v`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

当前角度旋转一个向量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | 被旋转的向量 |

#### Returns

[`Vector`](Type.Vector.md)

旋转后的向量

___

### set <Score text="set" /> 

• **set**(`v`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量设置为新的旋转量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Rotation`](Type.Rotation.md) | 旋转量 |

#### Returns

[`Rotation`](Type.Rotation.md)

旋转量

• **set**(`x`, `y`, `z`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

为当前旋转量设置每个分量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 旋转的 x 分量 |
| `y` | `number` | 旋转的 y 分量 |
| `z` | `number` | 旋转的 z 分量 |

#### Returns

[`Rotation`](Type.Rotation.md)

旋转量

___

### strictEquals <Score text="strictEquals" /> 

• **strictEquals**(`other`): `boolean` <Badge type="tip" text="other" />

判断当前角度是否与指定向量相等。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Rotation`](Type.Rotation.md) | 比对的旋转量 |

#### Returns

`boolean`

比对的结果

___

### subtract <Score text="subtract" /> 

• **subtract**(`a`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量减去一个旋转量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量 |

#### Returns

[`Rotation`](Type.Rotation.md)

this

___

### toQuaternion <Score text="toQuaternion" /> 

• **toQuaternion**(): [`Quaternion`](Type.Quaternion.md) <Badge type="tip" text="other" />

当前Rotation输出为四元数


#### Returns

[`Quaternion`](Type.Quaternion.md)

输出的四元数

___

### toString <Score text="toString" /> 

• **toString**(): `string` <Badge type="tip" text="other" />

当前Rotation输出为字符串


#### Returns

`string`

输出的字符串数据

___

### add <Score text="add" /> 

• `Static` **add**(`a`, `b`, `outer`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量加上一个旋转量


::: warning Precautions

outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量a |
| `b` | [`Rotation`](Type.Rotation.md) | 旋转量b |
| `outer` | [`Rotation`](Type.Rotation.md) | 接收结果的旋转量 |

#### Returns

[`Rotation`](Type.Rotation.md)

相加的结果

___

### copy <Score text="copy" /> 

• `Static` **copy**(`a`, `outer`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

复制目标旋转


::: warning Precautions

outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 目标旋转 |
| `outer` | [`Rotation`](Type.Rotation.md) | 接收结果的旋转 |

#### Returns

[`Rotation`](Type.Rotation.md)

拷贝得到的新旋转对象

___

### fromQuaternion <Score text="fromQuaternion" /> 

• `Static` **fromQuaternion**(`v`, `outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

转换Quaternion为Rotation


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Quaternion`](Type.Quaternion.md) | Quaternion |
| `outer?` | [`Rotation`](Type.Rotation.md) | 传入的Rotation对象 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

Rotation

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`v`, `outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

转换字符串数据为Rotation


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `string` | string |
| `outer?` | [`Rotation`](Type.Rotation.md) | 传入的Rotation对象 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

Rotation

___

### fromVector <Score text="fromVector" /> 

• `Static` **fromVector**(`v`, `outer?`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

转换Vector为Rotation


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Vector.md) | MWVector |
| `outer?` | [`Rotation`](Type.Rotation.md) | 传入的Rotation对象 default:null |

#### Returns

[`Rotation`](Type.Rotation.md)

Rotation

___

### lerp <Score text="lerp" /> 

• `Static` **lerp**(`a`, `b`, `alpha`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

对两个旋转量进行插值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量a |
| `b` | [`Rotation`](Type.Rotation.md) | 旋转量b |
| `alpha` | `number` | 插值 |

#### Returns

[`Rotation`](Type.Rotation.md)

Rotation

___

### multiply <Score text="multiply" /> 

• `Static` **multiply**(`a`, `b`, `outer`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量减去一个旋转量


::: warning Precautions

outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量a |
| `b` | [`Rotation`](Type.Rotation.md) | 旋转量b |
| `outer` | [`Rotation`](Type.Rotation.md) | 接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Rotation.md)

相乘的结果

___

### subtract <Score text="subtract" /> 

• `Static` **subtract**(`a`, `b`, `outer`): [`Rotation`](Type.Rotation.md) <Badge type="tip" text="other" />

当前旋转量减去一个旋转量


::: warning Precautions

outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Rotation`](Type.Rotation.md) | 旋转量a |
| `b` | [`Rotation`](Type.Rotation.md) | 旋转量b |
| `outer` | [`Rotation`](Type.Rotation.md) | 接收结果的旋转量变量 |

#### Returns

[`Rotation`](Type.Rotation.md)

相减的结果
