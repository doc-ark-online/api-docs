[Gameplay](../modules/Gameplay.Gameplay.md) / SmoothSync

# SmoothSync <Badge type="tip" text="Class" />

**`Description`**

平滑组件

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`SmoothSync`**

## Table of contents

| Accessors |
| :-----|
| **[extrapolationTimeLint](Gameplay.SmoothSync.md#extrapolationtimelint)**(): `number` <br> 获取一个非拥有的对象可以推测到未来多长时间|
| **[positionSnapThreshold](Gameplay.SmoothSync.md#positionsnapthreshold)**(): `number` <br> 如果一个同步对象的位置超过目标位置的positionSnapThreshold单位，它将立即跳到目标位置而不是线性插值。|
| **[rotationSnapThreshold](Gameplay.SmoothSync.md#rotationsnapthreshold)**(): `number` <br> 如果一个同步对象的旋转大于目标旋转的rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值|
| **[scaleSnapThreshold](Gameplay.SmoothSync.md#scalesnapthreshold)**(): `number` <br> 如果一个同步对象的规模超过目标规模的scaleSnapThreshold单位，它将立即跳转到目标规模而不是线性插值。|
| **[sceneComponentToSync](Gameplay.SmoothSync.md#scenecomponenttosync)**(`GameObject`): `void` <br> 设置在平滑同步上要同步的物体|
| **[sendRate](Gameplay.SmoothSync.md#sendrate)**(): `number` <br> 获取每秒发送网络更新的次数|
| **[syncPositionEnable](Gameplay.SmoothSync.md#syncpositionenable)**(): `boolean` <br> 获取是否同步位置|
| **[syncRotationEnable](Gameplay.SmoothSync.md#syncrotationenable)**(): `boolean` <br> 获取是否同步旋转|
| **[syncScaleEnable](Gameplay.SmoothSync.md#syncscaleenable)**(): `boolean` <br> 获取是否同步缩放|
| **[timeSmoothing](Gameplay.SmoothSync.md#timesmoothing)**(): `number` <br> 获取要花多少时间才能使所有者平滑|

| Methods |
| :-----|

## Accessors

### extrapolationTimeLint

• `get` **extrapolationTimeLint**(): `number`

**`Description`**

获取一个非拥有的对象可以推测到未来多长时间

**`Effect`**

调用端生效

#### Returns

`number`

extrapolationTimeLint

• `set` **extrapolationTimeLint**(`value`): `void`

**`Description`**

设置一个非拥有的对象可以推测到未来多长时间

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 时间 |

#### Returns

`void`


### positionSnapThreshold

• `get` **positionSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的位置超过目标位置的positionSnapThreshold单位，它将立即跳到目标位置而不是线性插值。

**`Effect`**

调用端生效

#### Returns

`number`

positionSnapThreshold

• `set` **positionSnapThreshold**(`value`): `void`

**`Description`**

设置positionSnapThreshold值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置positionSnapThreshold值 |

#### Returns

`void`


### rotationSnapThreshold

• `get` **rotationSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的旋转大于目标旋转的rotationSnapThreshold，它将立即跳转到目标旋转而不是线性插值

**`Effect`**

调用端生效

#### Returns

`number`

rotationSnapThreshold

• `set` **rotationSnapThreshold**(`value`): `void`

**`Description`**

设置RotationSnapThreshold值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置RotationSnapThreshold值 |

#### Returns

`void`

___

### scaleSnapThreshold

• `get` **scaleSnapThreshold**(): `number`

**`Description`**

如果一个同步对象的规模超过目标规模的scaleSnapThreshold单位，它将立即跳转到目标规模而不是线性插值。

**`Effect`**

调用端生效

#### Returns

`number`

scaleSnapThreshold值

• `set` **scaleSnapThreshold**(`value`): `void`

**`Description`**

设置ScaleSnapThreshold值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置ScaleSnapThreshold值 |

#### Returns

`void`

___

### sceneComponentToSync

• `set` **sceneComponentToSync**(`object`): `void`

**`Description`**

设置在平滑同步上要同步的物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `GameObject` | 使用平滑组件的物体 |

#### Returns

`void`

___

### sendRate

• `get` **sendRate**(): `number`

**`Description`**

获取每秒发送网络更新的次数

**`Effect`**

调用端生效

#### Returns

`number`

每秒发送网络更新的次数

• `set` **sendRate**(`value`): `void`

**`Description`**

设置每秒发送网络更新的次数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置每秒发送网络更新的次数 |

#### Returns

`void`


### syncPositionEnable

• `get` **syncPositionEnable**(): `boolean`

**`Description`**

获取是否同步位置

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步位置

false : 不同步位置

• `set` **syncPositionEnable**(`value`): `void`

**`Description`**

设置是否同步位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否同步位置 |

#### Returns

`void`

___

### syncRotationEnable

• `get` **syncRotationEnable**(): `boolean`

**`Description`**

获取是否同步旋转

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步旋转，false : 不同步旋转

• `set` **syncRotationEnable**(`value`): `void`

**`Description`**

设置是否同步旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 设置是否同步旋转 |

#### Returns

`void`

___

### syncScaleEnable

• `get` **syncScaleEnable**(): `boolean`

**`Description`**

获取是否同步缩放

**`Effect`**

调用端生效

#### Returns

`boolean`

true : 同步缩放

false : 不同步缩放

• `set` **syncScaleEnable**(`value`): `void`

**`Description`**

设置是否同步缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 设置是否同步缩放 |

#### Returns

`void`


### timeSmoothing

• `get` **timeSmoothing**(): `number`

**`Description`**

获取要花多少时间才能使所有者平滑

**`Effect`**

调用端生效

#### Returns

`number`

要花费的时间

• `set` **timeSmoothing**(`value`): `void`

**`Description`**

设置timeSmoothing值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 设置timeSmoothing值 |

#### Returns

`void`


## Methods