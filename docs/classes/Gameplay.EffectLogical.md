[Gameplay](../modules/Gameplay.Gameplay.md) / EffectLogical

# EffectLogical <Badge type="tip" text="Class" />

**`Description`**

效果逻辑对象

**`Precautions`**

范围双端，效果仅客户端

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`EffectLogical`**

## Table of contents

| Accessors |
| :-----|
| **[circleRadius](Gameplay.EffectLogical.md#circleradius)**(): `number` <br> 获取圆形半径|
| **[cubeHeight](Gameplay.EffectLogical.md#cubeheight)**(): `number` <br> 获取立方体宽度|
| **[cubeLength](Gameplay.EffectLogical.md#cubelength)**(): `number` <br> 获取立方体高度|
| **[cubeWidget](Gameplay.EffectLogical.md#cubewidget)**(): `number` <br> 获取立方体长度|
| **[effectRangeShape](Gameplay.EffectLogical.md#effectrangeshape)**(): [`EffectRangeShape3D`](../enums/Gameplay.EffectRangeShape3D.md) <br> 获取效果形状|
| **[effectRangeType](Gameplay.EffectLogical.md#effectrangetype)**(): [`EffectRangeType`](../enums/Gameplay.EffectRangeType.md) <br> 获取效果类型|
| **[rectangleHeight](Gameplay.EffectLogical.md#rectangleheight)**(): `number` <br> 获取矩形宽度|
| **[rectangleWidget](Gameplay.EffectLogical.md#rectanglewidget)**(): `number` <br> 获取矩形长度|
| **[sectorAngle](Gameplay.EffectLogical.md#sectorangle)**(): `number` <br> 获取扇形角度|
| **[sectorRadius](Gameplay.EffectLogical.md#sectorradius)**(): `number` <br> 获取扇形半径|
| **[segmentAngle](Gameplay.EffectLogical.md#segmentangle)**(): `number` <br> 获取扇形体角度|
| **[segmentHeight](Gameplay.EffectLogical.md#segmentheight)**(): `number` <br> 获取扇形体高度|
| **[segmentRadius](Gameplay.EffectLogical.md#segmentradius)**(): `number` <br> 获取扇形半径|
| **[sphereRadius](Gameplay.EffectLogical.md#sphereradius)**(): `number` <br> 获取球形半径|

| Methods |
| :-----|
| **[getInRangeAllActor](Gameplay.EffectLogical.md#getinrangeallactor)**(): `GameObject`[] <br> 获取范围内的所有GameObject|
| **[startPlay](Gameplay.EffectLogical.md#startplay)**(): `void` <br> 播放效果|
| **[stopPlay](Gameplay.EffectLogical.md#stopplay)**(): `void` <br> 停止效果|

## Accessors

### circleRadius

• `get` **circleRadius**(): `number`

**`Description`**

获取圆形半径

#### Returns

`number`

• `set` **circleRadius**(`inCircleRadius`): `void`

**`Description`**

设置圆形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCircleRadius` | `number` |

#### Returns

`void`

___

### cubeHeight

• `get` **cubeHeight**(): `number`

**`Description`**

获取立方体宽度

#### Returns

`number`

• `set` **cubeHeight**(`inCubeHeight`): `void`

**`Description`**

设置立方体宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeHeight` | `number` |

#### Returns

`void`

___

### cubeLength

• `get` **cubeLength**(): `number`

**`Description`**

获取立方体高度

#### Returns

`number`

• `set` **cubeLength**(`inCubeLength`): `void`

**`Description`**

设置立方体高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeLength` | `number` |

#### Returns

`void`

___

### cubeWidget

• `get` **cubeWidget**(): `number`

**`Description`**

获取立方体长度

#### Returns

`number`

• `set` **cubeWidget**(`inCubeWidget`): `void`

**`Description`**

设置立方体长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeWidget` | `number` |

#### Returns

`void`

___

### effectRangeShape

• `get` **effectRangeShape**(): [`EffectRangeShape3D`](../enums/Gameplay.EffectRangeShape3D.md)

**`Description`**

获取效果形状

#### Returns

[`EffectRangeShape3D`](../enums/Gameplay.EffectRangeShape3D.md)

• `set` **effectRangeShape**(`inEffectRangeShape`): `void`

**`Description`**

设置效果形状3D

#### Parameters

| Name | Type |
| :------ | :------ |
| `inEffectRangeShape` | [`EffectRangeShape3D`](../enums/Gameplay.EffectRangeShape3D.md) |

#### Returns

`void`

___

### effectRangeType

• `get` **effectRangeType**(): [`EffectRangeType`](../enums/Gameplay.EffectRangeType.md)

**`Description`**

获取效果类型

#### Returns

[`EffectRangeType`](../enums/Gameplay.EffectRangeType.md)

• `set` **effectRangeType**(`inEffectRangeType`): `void`

**`Description`**

设置效果类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `inEffectRangeType` | [`EffectRangeType`](../enums/Gameplay.EffectRangeType.md) |

#### Returns

`void`


### rectangleHeight

• `get` **rectangleHeight**(): `number`

**`Description`**

获取矩形宽度

#### Returns

`number`

• `set` **rectangleHeight**(`rectangleHeight`): `void`

**`Description`**

设置矩形宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `rectangleHeight` | `number` |

#### Returns

`void`

___

### rectangleWidget

• `get` **rectangleWidget**(): `number`

**`Description`**

获取矩形长度

#### Returns

`number`

• `set` **rectangleWidget**(`inRectangleWidget`): `void`

**`Description`**

设置矩形长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inRectangleWidget` | `number` |

#### Returns

`void`


### sectorAngle

• `get` **sectorAngle**(): `number`

**`Description`**

获取扇形角度

#### Returns

`number`

• `set` **sectorAngle**(`inSectorAngle`): `void`

**`Description`**

设置扇形角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSectorAngle` | `number` |

#### Returns

`void`

___

### sectorRadius

• `get` **sectorRadius**(): `number`

**`Description`**

获取扇形半径

#### Returns

`number`

• `set` **sectorRadius**(`inSectorRadius`): `void`

**`Description`**

设置扇形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSectorRadius` | `number` |

#### Returns

`void`

___

### segmentAngle

• `get` **segmentAngle**(): `number`

**`Description`**

获取扇形体角度

#### Returns

`number`

• `set` **segmentAngle**(`inSegmentAngle`): `void`

**`Description`**

设置扇形体角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentAngle` | `number` |

#### Returns

`void`

___

### segmentHeight

• `get` **segmentHeight**(): `number`

**`Description`**

获取扇形体高度

#### Returns

`number`

• `set` **segmentHeight**(`inSegmentHeight`): `void`

**`Description`**

设置扇形体高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentHeight` | `number` |

#### Returns

`void`

___

### segmentRadius

• `get` **segmentRadius**(): `number`

**`Description`**

获取扇形半径

#### Returns

`number`

• `set` **segmentRadius**(`inSegmentRadius`): `void`

**`Description`**

设置扇形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentRadius` | `number` |

#### Returns

`void`

___

### sphereRadius

• `get` **sphereRadius**(): `number`

**`Description`**

获取球形半径

#### Returns

`number`

• `set` **sphereRadius**(`inSphereRadius`): `void`

**`Description`**

设置球形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSphereRadius` | `number` |

#### Returns

`void`


## Methods

### getInRangeAllActor

▸ **getInRangeAllActor**(): `GameObject`[]

**`Description`**

获取范围内的所有GameObject

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

GameObject数组


### startPlay

▸ **startPlay**(): `void`

**`Description`**

播放效果

**`Effect`**

调用端生效

#### Returns

`void`

___

### stopPlay

▸ **stopPlay**(): `void`

**`Description`**

停止效果

**`Effect`**

调用端生效

#### Returns

`void`
