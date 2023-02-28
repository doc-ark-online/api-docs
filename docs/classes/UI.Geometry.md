[Gui](../groups/Gui.Gui.md) / Geometry

# Geometry <Badge type="tip" text="Class" /> <Score text="Geometry" />

几何坐标信息

## Table of contents

| Methods |
| :-----|
| **[getAbsolutePosition](UI.Geometry.md#getabsoluteposition)**(): [`Vector2`](Type.Vector2.md) <br> 获取绝对坐标|
| **[getAbsolutePositionAtCoordinates](UI.Geometry.md#getabsolutepositionatcoordinates)**(`Coordinate`: [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 获取基于Coordinate的绝对坐标|
| **[getAbsoluteSize](UI.Geometry.md#getabsolutesize)**(): [`Vector2`](Type.Vector2.md) <br> 获取绝对大小|
| **[getLocalPositionAtCoordinates](UI.Geometry.md#getlocalpositionatcoordinates)**(`Coordinate`: [`Vector2`](Type.Vector2.md)): [`Vector2`](Type.Vector2.md) <br> 获取基于Coordinate的相对坐标|
| **[getLocalSize](UI.Geometry.md#getlocalsize)**(): [`Vector2`](Type.Vector2.md) <br> 获取相对大小|
| **[isUnderLocation](UI.Geometry.md#isunderlocation)**(`AbsoluteCoordinate`: [`Vector2`](Type.Vector2.md)): `boolean` <br> 判断该Geometry 是否在AbsoluteCoordinate坐标下|

默认构造

## Methods

### getAbsolutePosition <Score text="getAbsolutePosition" /> 

• **getAbsolutePosition**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取绝对坐标


#### Returns

[`Vector2`](Type.Vector2.md)

返回绝对坐标

___

### getAbsolutePositionAtCoordinates <Score text="getAbsolutePositionAtCoordinates" /> 

• **getAbsolutePositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取基于Coordinate的绝对坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Coordinate` | [`Vector2`](Type.Vector2.md) | 绝对基础点 |

#### Returns

[`Vector2`](Type.Vector2.md)

返回Coordinate的绝对坐标

___

### getAbsoluteSize <Score text="getAbsoluteSize" /> 

• **getAbsoluteSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取绝对大小


#### Returns

[`Vector2`](Type.Vector2.md)

返回绝对大小

___

### getLocalPositionAtCoordinates <Score text="getLocalPositionAtCoordinates" /> 

• **getLocalPositionAtCoordinates**(`Coordinate`): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取基于Coordinate的相对坐标


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Coordinate` | [`Vector2`](Type.Vector2.md) | 相对基础点 |

#### Returns

[`Vector2`](Type.Vector2.md)

返回Coordinate的相对坐标

___

### getLocalSize <Score text="getLocalSize" /> 

• **getLocalSize**(): [`Vector2`](Type.Vector2.md) <Badge type="tip" text="client" />

获取相对大小


#### Returns

[`Vector2`](Type.Vector2.md)

返回相对大小

___

### isUnderLocation <Score text="isUnderLocation" /> 

• **isUnderLocation**(`AbsoluteCoordinate`): `boolean` <Badge type="tip" text="client" />

判断该Geometry 是否在AbsoluteCoordinate坐标下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AbsoluteCoordinate` | [`Vector2`](Type.Vector2.md) | 坐标 |

#### Returns

`boolean`

返回是否在AbsoluteCoordinate坐标下
