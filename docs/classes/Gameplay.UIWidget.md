[Gameplay](../modules/Gameplay.Gameplay.md) / UIWidget

# UIWidget <Badge type="tip" text="Class" />

**`Description`**

世界UI组件

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`UIWidget`**

## Table of contents

| Accessors |
| :-----|
| **[cylinderArcAngle](Gameplay.UIWidget.md#cylinderarcangle)**(): `number` <br> 获取圆柱体弧形角度|
| **[distanceScaleFactor](Gameplay.UIWidget.md#distancescalefactor)**(): `number` <br> 获取缩放距离系数|
| **[drawSize](Gameplay.UIWidget.md#drawsize)**(): [`Vector2`](Type.Vector2.md) <br> 获取实际渲染大小|
| **[geometryMode](Gameplay.UIWidget.md#geometrymode)**(): [`WidgetGeometryMode`](../enums/Gameplay.WidgetGeometryMode.md) <br> 获取几何体模式|
| **[headUIMaxVisibleDistance](Gameplay.UIWidget.md#headuimaxvisibledistance)**(): `number` <br> 获取最大头顶UI可见距离|
| **[hideByDistanceEnable](Gameplay.UIWidget.md#hidebydistanceenable)**(): `boolean` <br> 获取是否启用最大可见距离|
| **[interaction](Gameplay.UIWidget.md#interaction)**(): `boolean` <br> 获取世界UI交互状态|
| **[isEnemy](Gameplay.UIWidget.md#isenemy)**(): `boolean` <br> 获取是否作为敌方玩家，敌方玩家不显示头顶UI|
| **[occlusionEnable](Gameplay.UIWidget.md#occlusionenable)**(): `boolean` <br> 获取是否可被遮挡|
| **[pivot](Gameplay.UIWidget.md#pivot)**(): [`Vector2`](Type.Vector2.md) <br> 获取锚点位置|
| **[scaledByDistanceEnable](Gameplay.UIWidget.md#scaledbydistanceenable)**(): `boolean` <br> 获取是否开启近大远小|
| **[selfOcclusion](Gameplay.UIWidget.md#selfocclusion)**(): `boolean` <br> 获取是否可被自己遮挡|
| **[widgetSpace](Gameplay.UIWidget.md#widgetspace)**(): [`WidgetSpaceMode`](../enums/Gameplay.WidgetSpaceMode.md) <br> 获取显示方式|

| Methods |
| :-----|
| **[getUI](Gameplay.UIWidget.md#getui)**(): [`UserWidget`](UI.UserWidget.md) <br> 获取UI对象|
| **[refresh](Gameplay.UIWidget.md#refresh)**(): `void` <br> 请求重新绘制|
| **[setTargetUIWidget](Gameplay.UIWidget.md#settargetuiwidget)**([`UserWidget`](UI.UserWidget.md)): `void` <br> 设置UI|
| **[setUI](Gameplay.UIWidget.md#setui)**(`string`): `void` <br> 通过guid设置UI|

## Accessors

### cylinderArcAngle

• `get` **cylinderArcAngle**(): `number`

**`Description`**

获取圆柱体弧形角度

#### Returns

`number`

角度

• `set` **cylinderArcAngle**(`inCylinderArcAngle`): `void`

**`Description`**

设置圆柱体弧形角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCylinderArcAngle` | `number` | 角度 |

#### Returns

`void`

___

### distanceScaleFactor

• `get` **distanceScaleFactor**(): `number`

**`Description`**

获取缩放距离系数

#### Returns

`number`

距离系数

• `set` **distanceScaleFactor**(`Value`): `void`

**`Description`**

设置缩放距离系数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 距离系数 |

#### Returns

`void`

___

### drawSize

• `get` **drawSize**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取实际渲染大小

#### Returns

[`Vector2`](Type.Vector2.md)

渲染大小2D

• `set` **drawSize**(`newSize`): `void`

**`Description`**

设置实际渲染大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSize` | [`Vector2`](Type.Vector2.md) | 渲染大小2D |

#### Returns

`void`


### geometryMode

• `get` **geometryMode**(): [`WidgetGeometryMode`](../enums/Gameplay.WidgetGeometryMode.md)

**`Description`**

获取几何体模式

#### Returns

[`WidgetGeometryMode`](../enums/Gameplay.WidgetGeometryMode.md)

几何体模式枚举

• `set` **geometryMode**(`inGeometryMode`): `void`

**`Description`**

设置几何体模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inGeometryMode` | [`WidgetGeometryMode`](../enums/Gameplay.WidgetGeometryMode.md) | 几何体模式枚举 |

#### Returns

`void`


### headUIMaxVisibleDistance

• `get` **headUIMaxVisibleDistance**(): `number`

**`Description`**

获取最大头顶UI可见距离

#### Returns

`number`

可见距离

• `set` **headUIMaxVisibleDistance**(`Value`): `void`

**`Description`**

设置最大头顶UI可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 可见距离 |

#### Returns

`void`

___

### hideByDistanceEnable

• `get` **hideByDistanceEnable**(): `boolean`

**`Description`**

获取是否启用最大可见距离

#### Returns

`boolean`

true：开启

• `set` **hideByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否启用最大可见距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### interaction

• `get` **interaction**(): `boolean`

**`Description`**

获取世界UI交互状态

**`Precautions`**

对世界UI，头顶UI生效

**`Effect`**

客户端生效

#### Returns

`boolean`

是否可交互

• `set` **interaction**(`inInteraction`): `void`

**`Description`**

设置世界UI交互状态

**`Precautions`**

对世界UI，头顶UI生效

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inInteraction` | `boolean` | 是否可交互 |

#### Returns

`void`

是否设置成功

___

### isEnemy

• `get` **isEnemy**(): `boolean`

**`Description`**

获取是否作为敌方玩家，敌方玩家不显示头顶UI

#### Returns

`boolean`

布尔值

• `set` **isEnemy**(`Value`): `void`

**`Description`**

设置是否作为敌方玩家，敌方玩家不显示头顶UI

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`


### occlusionEnable

• `get` **occlusionEnable**(): `boolean`

**`Description`**

获取是否可被遮挡

#### Returns

`boolean`

true：可被遮挡

• `set` **occlusionEnable**(`Value`): `void`

**`Description`**

设置是否可被遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`


### pivot

• `get` **pivot**(): [`Vector2`](Type.Vector2.md)

**`Description`**

获取锚点位置

#### Returns

[`Vector2`](Type.Vector2.md)

位置信息

• `set` **pivot**(`position`): `void`

**`Description`**

设置锚点位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`Vector2`](Type.Vector2.md) | 位置信息 |

#### Returns

`void`


### scaledByDistanceEnable

• `get` **scaledByDistanceEnable**(): `boolean`

**`Description`**

获取是否开启近大远小

#### Returns

`boolean`

true：开启

• `set` **scaledByDistanceEnable**(`Value`): `void`

**`Description`**

设置是否开启近大远小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`

___

### selfOcclusion

• `get` **selfOcclusion**(): `boolean`

**`Description`**

获取是否可被自己遮挡

#### Returns

`boolean`

布尔值

• `set` **selfOcclusion**(`Value`): `void`

**`Description`**

设置是否可被自己遮挡

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `boolean` | 布尔值 |

#### Returns

`void`


### widgetSpace

• `get` **widgetSpace**(): [`WidgetSpaceMode`](../enums/Gameplay.WidgetSpaceMode.md)

**`Description`**

获取显示方式

#### Returns

[`WidgetSpaceMode`](../enums/Gameplay.WidgetSpaceMode.md)

显示方式枚举

• `set` **widgetSpace**(`newSpace`): `void`

**`Description`**

设置显示方式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpace` | [`WidgetSpaceMode`](../enums/Gameplay.WidgetSpaceMode.md) | 显示方式 |

#### Returns

`void`


## Methods

### getUI

▸ **getUI**(): [`UserWidget`](UI.UserWidget.md)

**`Description`**

获取UI对象

**`Effect`**

客户端生效

#### Returns

[`UserWidget`](UI.UserWidget.md)

UI对象


### refresh

▸ **refresh**(): `void`

**`Description`**

请求重新绘制

**`Effect`**

客户端生效

#### Returns

`void`


### setTargetUIWidget

▸ **setTargetUIWidget**(`uiUserWidget`): `void`

**`Description`**

设置UI

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uiUserWidget` | [`UserWidget`](UI.UserWidget.md) | UI对象 |

#### Returns

`void`


### setUI

▸ **setUI**(`guid`): `void`

**`Description`**

通过guid设置UI

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | UI的Guid |

#### Returns

`void`
