[Type](../modules/Type.Type.md) / Transform

# Transform <Badge type="tip" text="Class" /> <Score text="Transform" />

Transform 由缩放、旋转和平移组成

::: warning Precautions

按以下顺序应用位置向量变换：缩放->旋转->平移, 方向向量的变换按以下顺序应用：缩放->旋转

:::

## Table of contents

| Properties |
| :-----|
| **[location](Type.Transform.md#location)**: [`Vector`](Type.Vector.md) <br> 坐标信息|
| **[rotation](Type.Transform.md#rotation)**: [`Rotation`](Type.Rotation.md) <br> 旋转信息|
| **[scale](Type.Transform.md#scale)**: [`Vector`](Type.Vector.md) <br> 缩放信息|

| Accessors |
| :-----|
| **[identity](Type.Transform.md#identity)**(): [`Transform`](Type.Transform.md) <br> 获取一个单位 Transform|

| Methods |
| :-----|
| **[clone](Type.Transform.md#clone)**(): [`Transform`](Type.Transform.md) <br> 克隆一个新的 Transform|
| **[fromString](Type.Transform.md#fromstring)**(`string`, [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 读取字符串数据创建或者写入一个 Transform|
| **[getForwardVector](Type.Transform.md#getforwardvector)**(): [`Vector`](Type.Vector.md) <br> 返回 Transform 的向前方向向量|
| **[getRightVector](Type.Transform.md#getrightvector)**(): [`Vector`](Type.Vector.md) <br> 返回 Transform 的向右方向向量|
| **[getUpVector](Type.Transform.md#getupvector)**(): [`Vector`](Type.Vector.md) <br> 返回 Transform 的向上方向向量|
| **[inverseTransformDirection](Type.Transform.md#inversetransformdirection)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 将世界方向转化为本地方向|
| **[inverseTransformLocation](Type.Transform.md#inversetransformlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 将世界坐标转化为本地坐标|
| **[lookAt](Type.Transform.md#lookat)**([`Vector`](Type.Vector.md)): `void` <br> Transform面向目标方向|
| **[rotate](Type.Transform.md#rotate)**([`Vector`](Type.Vector.md), `number`): `void` <br> Transform绕指定轴旋转|
| **[toString](Type.Transform.md#tostring)**(): `string` <br> 输出为一个有格式的字符串|
| **[transformDirection](Type.Transform.md#transformdirection)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 将本地方向转化为世界方向|
| **[transformLocation](Type.Transform.md#transformlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 本地坐标转化为世界坐标|
| **[fromString](Type.Transform.md#fromstring-1)**(`string`, [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 读取字符串数据创建或者写入一个 Transform|

返回一个新的 Transform

• **new Transform**(`location`, `rotation`, `scale`)

用给定的 location 或 rotation 或 scale 值设定给 Transform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 坐标信息 |
| `rotation` | [`Rotation`](Type.Rotation.md) | 旋转信息 |
| `scale` | [`Vector`](Type.Vector.md) | 缩放信息 |

• **new Transform**(`newTransform`)

复制给定的 Transform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTransform` | [`Transform`](Type.Transform.md) | Transform 对象 |

## Properties

### location <Score text="location" /> 

• **location**: [`Vector`](Type.Vector.md)

坐标信息

___

### rotation <Score text="rotation" /> 

• **rotation**: [`Rotation`](Type.Rotation.md)

旋转信息

___

### scale <Score text="scale" /> 

• **scale**: [`Vector`](Type.Vector.md)

缩放信息

## Accessors

### identity <Score text="identity" /> 

• `Static` `get` **identity**(): [`Transform`](Type.Transform.md)

获取一个单位 Transform

::: warning Precautions

Transform( Location(0, 0, 0), Rotation(0, 0, 0), Scale(1, 1, 1) )

:::

#### Returns

[`Transform`](Type.Transform.md)

## Methods

### clone <Score text="clone" /> 

• **clone**(): [`Transform`](Type.Transform.md) <Badge type="tip" text="other" />

克隆一个新的 Transform


#### Returns

[`Transform`](Type.Transform.md)

新的数据相同的 Transform

___

### fromString <Score text="fromString" /> 

• **fromString**(`str`): `void` <Badge type="tip" text="other" />

读取字符串数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 读取的字符串数据 |


___

### getForwardVector <Score text="getForwardVector" /> 

• **getForwardVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回 Transform 的向前方向向量


#### Returns

[`Vector`](Type.Vector.md)

Transform 的向前方向向量

___

### getRightVector <Score text="getRightVector" /> 

• **getRightVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回 Transform 的向右方向向量


#### Returns

[`Vector`](Type.Vector.md)

Transform 的向右方向向量

___

### getUpVector <Score text="getUpVector" /> 

• **getUpVector**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

返回 Transform 的向上方向向量


#### Returns

[`Vector`](Type.Vector.md)

Transform 的向上方向向量

___

### inverseTransformDirection <Score text="inverseTransformDirection" /> 

• **inverseTransformDirection**(`location`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

将世界方向转化为本地方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 世界方向 |

#### Returns

[`Vector`](Type.Vector.md)

本地方向

___

### inverseTransformLocation <Score text="inverseTransformLocation" /> 

• **inverseTransformLocation**(`location`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

将世界坐标转化为本地坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 世界坐标 |

#### Returns

[`Vector`](Type.Vector.md)

本地坐标

___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` <Badge type="tip" text="other" />

Transform面向目标方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Vector`](Type.Vector.md) | 世界坐标 |


___

### rotate <Score text="rotate" /> 

• **rotate**(`axis`, `angle`): `void` <Badge type="tip" text="other" />

Transform绕指定轴旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector`](Type.Vector.md) | 旋转轴 |
| `angle` | `number` | 旋转的角度值 |


___

### toString <Score text="toString" /> 

• **toString**(): `string` <Badge type="tip" text="other" />

输出为一个有格式的字符串


#### Returns

`string`

字符串

___

### transformDirection <Score text="transformDirection" /> 

• **transformDirection**(`location`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

将本地方向转化为世界方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 本地方向 |

#### Returns

[`Vector`](Type.Vector.md)

世界方向

___

### transformLocation <Score text="transformLocation" /> 

• **transformLocation**(`location`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

本地坐标转化为世界坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Vector.md) | 本地坐标 |

#### Returns

[`Vector`](Type.Vector.md)

世界坐标

___

### fromString <Score text="fromString" /> 

• `Static` **fromString**(`str`, `outer?`): [`Transform`](Type.Transform.md) <Badge type="tip" text="other" />

读取字符串数据创建或者写入一个 Transform


::: warning Precautions

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 读取的字符串数据 |
| `outer?` | [`Transform`](Type.Transform.md) | 接受结果的Transform default:null |

#### Returns

[`Transform`](Type.Transform.md)

创建或读取自字符串的 Transform 对象
