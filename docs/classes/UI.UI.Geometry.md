[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / Geometry

# Class: Geometry

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).Geometry

**`Author`**

wujie

**`Description`**

几何坐标信息

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.Geometry.md#constructor)

### Methods

- [getAbsolutePosition](UI.UI.Geometry.md#getabsoluteposition)
- [getAbsolutePositionAtCoordinates](UI.UI.Geometry.md#getabsolutepositionatcoordinates)
- [getAbsoluteSize](UI.UI.Geometry.md#getabsolutesize)
- [getLocalPositionAtCoordinates](UI.UI.Geometry.md#getlocalpositionatcoordinates)
- [getLocalSize](UI.UI.Geometry.md#getlocalsize)
- [isUnderLocation](UI.UI.Geometry.md#isunderlocation)

## Constructors

### constructor

• `Private` **new Geometry**()

**`Description`**

默认构造

#### Defined in

UI/index.d.ts:4021

## Methods

### getAbsolutePosition

▸ **getAbsolutePosition**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取绝对坐标

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回绝对坐标

#### Defined in

UI/index.d.ts:4041

___

### getAbsolutePositionAtCoordinates

▸ **getAbsolutePositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取基于Coordinate的绝对坐标

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Coordinate` | [`Vector2`](Type.Type.Vector2.md) | usage:绝对基础点 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回Coordinate的绝对坐标

#### Defined in

UI/index.d.ts:4035

___

### getAbsoluteSize

▸ **getAbsoluteSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取绝对大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回绝对大小

#### Defined in

UI/index.d.ts:4053

___

### getLocalPositionAtCoordinates

▸ **getLocalPositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取基于Coordinate的相对坐标

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Coordinate` | [`Vector2`](Type.Type.Vector2.md) | usage:相对基础点 |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回Coordinate的相对坐标

#### Defined in

UI/index.d.ts:4028

___

### getLocalSize

▸ **getLocalSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取相对大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回相对大小

#### Defined in

UI/index.d.ts:4047

___

### isUnderLocation

▸ **isUnderLocation**(`AbsoluteCoordinate`): `boolean`

**`Description`**

判断该Geometry 是否在AbsoluteCoordinate坐标下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AbsoluteCoordinate` | [`Vector2`](Type.Type.Vector2.md) | usage:坐标 |

#### Returns

`boolean`

返回是否在AbsoluteCoordinate坐标下

#### Defined in

UI/index.d.ts:4060
