[UI](../modules/UI.UI.md) / Geometry

# Geometry <Badge type="tip" text="Class" />

**`Description`**

几何坐标信息

## Table of contents

| Methods                                                                                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getAbsolutePosition](UI.UI.Geometry.md#getabsoluteposition)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取绝对坐标                                                                              |
| **[getAbsolutePositionAtCoordinates](UI.UI.Geometry.md#getabsolutepositionatcoordinates)**([`Vector2`](Type.Type.Vector2.md)): [`Vector2`](Type.Type.Vector2.md) <br> 获取基于 Coordinate 的绝对坐标 |
| **[getAbsoluteSize](UI.UI.Geometry.md#getabsolutesize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取绝对大小                                                                                      |
| **[getLocalPositionAtCoordinates](UI.UI.Geometry.md#getlocalpositionatcoordinates)**([`Vector2`](Type.Type.Vector2.md)): [`Vector2`](Type.Type.Vector2.md) <br> 获取基于 Coordinate 的相对坐标       |
| **[getLocalSize](UI.UI.Geometry.md#getlocalsize)**(): [`Vector2`](Type.Type.Vector2.md) <br> 获取相对大小                                                                                            |
| **[isUnderLocation](UI.UI.Geometry.md#isunderlocation)**([`Vector2`](Type.Type.Vector2.md)): `boolean` <br> 判断该 Geometry 是否在 AbsoluteCoordinate 坐标下                                         |

**`Description`**

默认构造

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

---

### getAbsolutePositionAtCoordinates

▸ **getAbsolutePositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取基于 Coordinate 的绝对坐标

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                              | Description |
| :----------- | :-------------------------------- | :---------- |
| `Coordinate` | [`Vector2`](Type.Type.Vector2.md) | 绝对基础点  |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回 Coordinate 的绝对坐标

---

### getAbsoluteSize

▸ **getAbsoluteSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取绝对大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回绝对大小

---

### getLocalPositionAtCoordinates

▸ **getLocalPositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取基于 Coordinate 的相对坐标

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                              | Description |
| :----------- | :-------------------------------- | :---------- |
| `Coordinate` | [`Vector2`](Type.Type.Vector2.md) | 相对基础点  |

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回 Coordinate 的相对坐标

---

### getLocalSize

▸ **getLocalSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取相对大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回相对大小

---

### isUnderLocation

▸ **isUnderLocation**(`AbsoluteCoordinate`): `boolean`

**`Description`**

判断该 Geometry 是否在 AbsoluteCoordinate 坐标下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name                 | Type                              | Description |
| :------------------- | :-------------------------------- | :---------- |
| `AbsoluteCoordinate` | [`Vector2`](Type.Type.Vector2.md) | 坐标        |

#### Returns

`boolean`

返回是否在 AbsoluteCoordinate 坐标下
