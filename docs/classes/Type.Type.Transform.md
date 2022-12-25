[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / Transform

# Class: Transform

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).Transform

**`Author`**

SuoWei

**`Description`**

Transform 由缩放、旋转和平移组成

**`Network Status`**

usage:双端

**`Precautions`**

按以下顺序应用位置向量变换：缩放->旋转->平移, 方向向量的变换按以下顺序应用：缩放->旋转

## Table of contents

### Constructors

- [constructor](Type.Type.Transform.md#constructor)

### Properties

- [location](Type.Type.Transform.md#location)
- [rotation](Type.Type.Transform.md#rotation)
- [scale](Type.Type.Transform.md#scale)

### Accessors

- [identity](Type.Type.Transform.md#identity)

### Methods

- [clone](Type.Type.Transform.md#clone)
- [fromString](Type.Type.Transform.md#fromstring)
- [getForwardVector](Type.Type.Transform.md#getforwardvector)
- [getRightVector](Type.Type.Transform.md#getrightvector)
- [getUpVector](Type.Type.Transform.md#getupvector)
- [inverseTransformDirection](Type.Type.Transform.md#inversetransformdirection)
- [inverseTransformLocation](Type.Type.Transform.md#inversetransformlocation)
- [lookAt](Type.Type.Transform.md#lookat)
- [rotate](Type.Type.Transform.md#rotate)
- [toString](Type.Type.Transform.md#tostring)
- [transformDirection](Type.Type.Transform.md#transformdirection)
- [transformLocation](Type.Type.Transform.md#transformlocation)
- [fromString](Type.Type.Transform.md#fromstring-1)

## Constructors

### constructor

• **new Transform**()

**`Description`**

返回一个新的 Transform

#### Defined in

Type/index.d.ts:2714

• **new Transform**(`location`, `rotation`, `scale`)

**`Description`**

用给定的 location 或 rotation 或 scale 值设定给 Transform

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:坐标信息 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转信息 |
| `scale`    | [`Vector`](Type.Type.Vector.md)     | usage:缩放信息 |

#### Defined in

Type/index.d.ts:2721

• **new Transform**(`newTransform`)

**`Description`**

复制给定的 Transform

#### Parameters

| Name           | Type                                  | Description          |
| :------------- | :------------------------------------ | :------------------- |
| `newTransform` | [`Transform`](Type.Type.Transform.md) | usage:Transform 对象 |

#### Defined in

Type/index.d.ts:2726

## Properties

### location

• **location**: [`Vector`](Type.Type.Vector.md)

**`Description`**

坐标信息

#### Defined in

Type/index.d.ts:2701

---

### rotation

• **rotation**: [`Rotation`](Type.Type.Rotation.md)

**`Description`**

旋转信息

#### Defined in

Type/index.d.ts:2705

---

### scale

• **scale**: [`Vector`](Type.Type.Vector.md)

**`Description`**

缩放信息

#### Defined in

Type/index.d.ts:2709

## Accessors

### identity

• `Static` `get` **identity**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

获取一个单位 Transform

**`Precautions`**

Transform( Location(0, 0, 0), Rotation(0, 0, 0), Scale(1, 1, 1) )

#### Returns

[`Transform`](Type.Type.Transform.md)

#### Defined in

Type/index.d.ts:2688

## Methods

### clone

▸ **clone**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

克隆一个新的 Transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

新的数据相同的 Transform

#### Defined in

Type/index.d.ts:2732

---

### fromString

▸ **fromString**(`str`): `void`

**`Description`**

读取字符串数据

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description            |
| :---- | :------- | :--------------------- |
| `str` | `string` | usage:读取的字符串数据 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2738

---

### getForwardVector

▸ **getForwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回 Transform 的向前方向向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Transform 的向前方向向量

#### Defined in

Type/index.d.ts:2750

---

### getRightVector

▸ **getRightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回 Transform 的向右方向向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Transform 的向右方向向量

#### Defined in

Type/index.d.ts:2756

---

### getUpVector

▸ **getUpVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

返回 Transform 的向上方向向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Transform 的向上方向向量

#### Defined in

Type/index.d.ts:2762

---

### inverseTransformDirection

▸ **inverseTransformDirection**(`location`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将世界方向转化为本地方向

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description    |
| :--------- | :------------------------------ | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界方向 |

#### Returns

[`Vector`](Type.Type.Vector.md)

本地方向

#### Defined in

Type/index.d.ts:2776

---

### inverseTransformLocation

▸ **inverseTransformLocation**(`location`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将世界坐标转化为本地坐标

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description    |
| :--------- | :------------------------------ | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界坐标 |

#### Returns

[`Vector`](Type.Type.Vector.md)

本地坐标

#### Defined in

Type/index.d.ts:2769

---

### lookAt

▸ **lookAt**(`target`): `void`

**`Description`**

Transform 面向目标方向

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description    |
| :------- | :------------------------------ | :------------- |
| `target` | [`Vector`](Type.Type.Vector.md) | usage:世界坐标 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2796

---

### rotate

▸ **rotate**(`axis`, `angle`): `void`

**`Description`**

Transform 绕指定轴旋转

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description        |
| :------ | :------------------------------ | :----------------- |
| `axis`  | [`Vector`](Type.Type.Vector.md) | usage:旋转轴       |
| `angle` | `number`                        | usage:旋转的角度值 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:2803

---

### toString

▸ **toString**(): `string`

**`Description`**

输出为一个有格式的字符串

**`Effect`**

调用端生效

#### Returns

`string`

字符串

#### Defined in

Type/index.d.ts:2744

---

### transformDirection

▸ **transformDirection**(`location`): [`Vector`](Type.Type.Vector.md)

**`Description`**

将本地方向转化为世界方向

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description    |
| :--------- | :------------------------------ | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:本地方向 |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界方向

#### Defined in

Type/index.d.ts:2790

---

### transformLocation

▸ **transformLocation**(`location`): [`Vector`](Type.Type.Vector.md)

**`Description`**

本地坐标转化为世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description    |
| :--------- | :------------------------------ | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:本地坐标 |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界坐标

#### Defined in

Type/index.d.ts:2783

---

### fromString

▸ `Static` **fromString**(`str`, `outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

读取字符串数据创建或者写入一个 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象, 建议传入 outer 来减少 new 对象且 outer 不能为 null/undefined

#### Parameters

| Name     | Type                                  | Description                             |
| :------- | :------------------------------------ | :-------------------------------------- |
| `str`    | `string`                              | usage:读取的字符串数据                  |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接受结果的 Transform default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

创建或读取自字符串的 Transform 对象

#### Defined in

Type/index.d.ts:2697
