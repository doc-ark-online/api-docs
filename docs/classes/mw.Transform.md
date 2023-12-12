[基础类型](../groups/基础类型.基础类型.md) / Transform

# Transform <Badge type="tip" text="Class" /> <Score text="Transform" />

三维变换

-----------------------

Transform 由平移、旋转和缩放组成。

平移用于确定物体的位置，旋转用于确定物体的朝向，缩放用于确定物体的大小。

按以下顺序应用位置向量变换：缩放->旋转->平移, 方向向量的变换按以下顺序应用：缩放->旋转

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[position](mw.Transform.md#position)**(): [`Vector`](mw.Vector.md)  |
| :-----|
| 设置位置信息|
| **[rotation](mw.Transform.md#rotation)**(): [`Rotation`](mw.Rotation.md)  |
| 设置旋转信息|
| **[scale](mw.Transform.md#scale)**(): [`Vector`](mw.Vector.md)  |
| 设置缩放信息|
| **[identity](mw.Transform.md#identity)**(): [`Transform`](mw.Transform.md)  |
| 位置：(0, 0, 0)，旋转：(0, 0, 0)，缩放：(1, 1, 1)|

### Methods <Score text="Methods" /> 
| **[clone](mw.Transform.md#clone)**(): [`Transform`](mw.Transform.md)   |
| :-----|
| 克隆一个新的 Transform|
| **[fromString](mw.Transform.md#fromstring)**(`str`: `string`, `outer?`: [`Transform`](mw.Transform.md)): [`Transform`](mw.Transform.md)   |
| 如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined|
| [getForwardVector](mw.Transform.md#getforwardvector)  |
| :----- |
| **[getRightVector](mw.Transform.md#getrightvector)**(): [`Vector`](mw.Vector.md)   |
| 获取 Transform 的 向右 方向向量|
| **[getUpVector](mw.Transform.md#getupvector)**(): [`Vector`](mw.Vector.md)   |
| 获取 Transform 的 向上 方向向量|
| **[inverseTransformDirection](mw.Transform.md#inversetransformdirection)**(`location`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 世界方向转化为本地方向|
| **[inverseTransformPosition](mw.Transform.md#inversetransformposition)**(`location`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 世界坐标转化为本地坐标|
| **[lookAt](mw.Transform.md#lookat)**(`target`: [`Vector`](mw.Vector.md)): `void`   |
| 面向目标方向|
| **[rotate](mw.Transform.md#rotate)**(`axis`: [`Vector`](mw.Vector.md), `angle`: `number`): `void`   |
| 绕指定轴旋转|
| **[toString](mw.Transform.md#tostring)**(): `string`   |
| 输出为一个有格式的字符串|
| **[transformDirection](mw.Transform.md#transformdirection)**(`location`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 本地方向转化为世界方向|
| **[transformPosition](mw.Transform.md#transformposition)**(`location`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 本地坐标转化为世界坐标|
| **[fromString](mw.Transform.md#fromstring-1)**(`str`: `string`, `outer?`: [`Transform`](mw.Transform.md)): [`Transform`](mw.Transform.md)   |
| 如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined|

返回一个新的 Transform

• **new Transform**(`location`, `rotation`, `scale`)

用给定的 Position 或 rotation 或 scale 值设定给 Transform

#### Parameters

| `location` [`Vector`](mw.Vector.md) | 坐标信息 |
| :------ | :------ |
| `rotation` [`Rotation`](mw.Rotation.md) | 旋转信息 |
| `scale` [`Vector`](mw.Vector.md) | 缩放信息 |

• **new Transform**(`newTransform`)

复制给定的 Transform

#### Parameters

| `newTransform` [`Transform`](mw.Transform.md) | Transform 对象 |
| :------ | :------ |

## Accessors

### position <Score text="position" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **position**(): [`Vector`](mw.Vector.md)

</th>
<th style="text-align: left">

• `set` **position**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取位置信息

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置位置信息

#### Parameters

| `v` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rotation <Score text="rotation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotation**(): [`Rotation`](mw.Rotation.md)

</th>
<th style="text-align: left">

• `set` **rotation**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取旋转信息

#### Returns

| [`Rotation`](mw.Rotation.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置旋转信息

#### Parameters

| `v` | [`Rotation`](mw.Rotation.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scale <Score text="scale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scale**(): [`Vector`](mw.Vector.md)

</th>
<th style="text-align: left">

• `set` **scale**(`v`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取缩放信息

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置缩放信息

#### Parameters

| `v` | [`Vector`](mw.Vector.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### identity <Score text="identity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **identity**(): [`Transform`](mw.Transform.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取一个单位 Transform

位置：(0, 0, 0)，旋转：(0, 0, 0)，缩放：(1, 1, 1)

#### Returns

</td>
</tr></tbody>
</table>

| [`Transform`](mw.Transform.md) |  |
| :------ | :------ |

## Methods

### clone <Score text="clone" /> 

• **clone**(): [`Transform`](mw.Transform.md) 

克隆一个新的 Transform

#### Returns

| [`Transform`](mw.Transform.md) | 新的数据相同的 Transform |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` 

读取字符串数据

#### Parameters

| `str` `string` | 读取的字符串数据 |
| :------ | :------ |
| `outer?` [`Transform`](mw.Transform.md) | 接受结果的Transform default:null |

#### Returns

| [`Transform`](mw.Transform.md) | 创建或读取自字符串的 Transform 对象 |
| :------ | :------ |

#### Parameters

| `str` `string` | 读取的字符串数据 |
| :------ | :------ |


获取 Transform 的 向前 方向向量

#### Returns

| [`Vector`](mw.Vector.md) | Transform 的向前方向向量 |
| :------ | :------ |

___

### getRightVector <Score text="getRightVector" /> 

• **getRightVector**(): [`Vector`](mw.Vector.md) 

获取 Transform 的 向右 方向向量

#### Returns

| [`Vector`](mw.Vector.md) | Transform 的向右方向向量 |
| :------ | :------ |

___

### getUpVector <Score text="getUpVector" /> 

• **getUpVector**(): [`Vector`](mw.Vector.md) 

获取 Transform 的 向上 方向向量

#### Returns

| [`Vector`](mw.Vector.md) | Transform 的向上方向向量 |
| :------ | :------ |

___

### inverseTransformDirection <Score text="inverseTransformDirection" /> 

• **inverseTransformDirection**(`location`): [`Vector`](mw.Vector.md) 

世界方向转化为本地方向

#### Parameters

| `location` [`Vector`](mw.Vector.md) | 世界方向 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 本地方向 |
| :------ | :------ |

___

### inverseTransformPosition <Score text="inverseTransformPosition" /> 

• **inverseTransformPosition**(`location`): [`Vector`](mw.Vector.md) 

世界坐标转化为本地坐标

#### Parameters

| `location` [`Vector`](mw.Vector.md) | 世界坐标 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 本地坐标 |
| :------ | :------ |

___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` 

面向目标方向

#### Parameters

| `target` [`Vector`](mw.Vector.md) | 世界坐标 |
| :------ | :------ |


___

### rotate <Score text="rotate" /> 

• **rotate**(`axis`, `angle`): `void` 

绕指定轴旋转

#### Parameters

| `axis` [`Vector`](mw.Vector.md) | 旋转轴 |
| :------ | :------ |
| `angle` `number` | 旋转的角度值 |


___

### toString <Score text="toString" /> 

• **toString**(): `string` 

输出为一个有格式的字符串

#### Returns

| `string` | 字符串 |
| :------ | :------ |

___

### transformDirection <Score text="transformDirection" /> 

• **transformDirection**(`location`): [`Vector`](mw.Vector.md) 

本地方向转化为世界方向

#### Parameters

| `location` [`Vector`](mw.Vector.md) | 本地方向 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 世界方向 |
| :------ | :------ |

___

### transformPosition <Score text="transformPosition" /> 

• **transformPosition**(`location`): [`Vector`](mw.Vector.md) 

本地坐标转化为世界坐标

#### Parameters

| `location` [`Vector`](mw.Vector.md) | 本地坐标 |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 世界坐标 |
| :------ | :------ |

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Transform`](mw.Transform.md) 

通过字符串创建一个 Transform

字符串格式为：0.000000,0.000000,0.000000|0.000000,0.000000,0.000000|1.000000,1.000000,1.000000

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| `str` `string` | 读取的字符串数据 |
| :------ | :------ |
| `outer?` [`Transform`](mw.Transform.md) | 接受结果的Transform default:null |

#### Returns

| [`Transform`](mw.Transform.md) | 创建或读取自字符串的 Transform 对象 |
| :------ | :------ |
