[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsCylinder

# PhysicsCylinder <Badge type="tip" text="Class" />

**`Description`**

物理圆柱组件

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsCylinder`**

## Table of contents

| Accessors |
| :-----|
| **[angularLimit](Gameplay.PhysicsCylinder.md#angularlimit)**(): [`Vector`](Type.Vector.md) <br> 获取限制角度|
| **[angularStrength](Gameplay.PhysicsCylinder.md#angularstrength)**(): `number` <br> 获取角力度|
| **[angularVelocity](Gameplay.PhysicsCylinder.md#angularvelocity)**(): [`Vector`](Type.Vector.md) <br> 获取最大角速度|
| **[enable](Gameplay.PhysicsCylinder.md#enable)**(): `boolean` <br> 获取启用状态|
| **[linearLimit](Gameplay.PhysicsCylinder.md#linearlimit)**(): `number` <br> 获取限制距离|
| **[linearStrength](Gameplay.PhysicsCylinder.md#linearstrength)**(): `number` <br> 获取加速度|
| **[linearVelocity](Gameplay.PhysicsCylinder.md#linearvelocity)**(): [`Vector`](Type.Vector.md) <br> 获取最大速度|
| **[restitution](Gameplay.PhysicsCylinder.md#restitution)**(): `number` <br> 获取反弹力|

| Methods |
| :-----|
| **[getAngularLimitType](Gameplay.PhysicsCylinder.md#getangularlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md)): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取旋转类型|
| **[getLinearLimitType](Gameplay.PhysicsCylinder.md#getlinearlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md)): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取滑动类型|
| **[setAngularLimitType](Gameplay.PhysicsCylinder.md#setangularlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md), [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置旋转类型|
| **[setLinearLimitType](Gameplay.PhysicsCylinder.md#setlinearlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md), [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置滑动类型|

## Accessors

### angularLimit

• `get` **angularLimit**(): [`Vector`](Type.Vector.md)

**`Description`**

获取限制角度

#### Returns

[`Vector`](Type.Vector.md)

限制角度

• `set` **angularLimit**(`Value`): `void`

**`Description`**

设置限制角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | [`Vector`](Type.Vector.md) | 三个轴的角度值 |

#### Returns

`void`

___

### angularStrength

• `get` **angularStrength**(): `number`

**`Description`**

获取角力度

#### Returns

`number`

力度

• `set` **angularStrength**(`Acceleration`): `void`

**`Description`**

设置角力度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Acceleration` | `number` | 力度 |

#### Returns

`void`

___

### angularVelocity

• `get` **angularVelocity**(): [`Vector`](Type.Vector.md)

**`Description`**

获取最大角速度

#### Returns

[`Vector`](Type.Vector.md)

最大角速度

• `set` **angularVelocity**(`Velocity`): `void`

**`Description`**

设置最大角速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Velocity` | [`Vector`](Type.Vector.md) | 最大角速度 |

#### Returns

`void`


### enable

• `get` **enable**(): `boolean`

**`Description`**

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`EnableState`): `void`

**`Description`**

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 启用状态 |

#### Returns

`void`


### linearLimit

• `get` **linearLimit**(): `number`

**`Description`**

获取限制距离

#### Returns

`number`

限制距离

• `set` **linearLimit**(`Distance`): `void`

**`Description`**

设置限制距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Distance` | `number` | 限制距离 |

#### Returns

`void`

___

### linearStrength

• `get` **linearStrength**(): `number`

**`Description`**

获取加速度

#### Returns

`number`

加速度

• `set` **linearStrength**(`Strength`): `void`

**`Description`**

设置加速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Strength` | `number` | 加速度 |

#### Returns

`void`

___

### linearVelocity

• `get` **linearVelocity**(): [`Vector`](Type.Vector.md)

**`Description`**

获取最大速度

#### Returns

[`Vector`](Type.Vector.md)

最大速度

• `set` **linearVelocity**(`Velocity`): `void`

**`Description`**

设置最大速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Velocity` | [`Vector`](Type.Vector.md) | 最大速度 |

#### Returns

`void`


### restitution

• `get` **restitution**(): `number`

**`Description`**

获取反弹力

#### Returns

`number`

反弹力

• `set` **restitution**(`Value`): `void`

**`Description`**

设置反弹力

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 反弹力 |

#### Returns

`void`


## Methods

### getAngularLimitType

▸ **getAngularLimitType**(`Axis`): [`LimitType`](../enums/Gameplay.LimitType.md)

**`Description`**

获取旋转类型

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 轴向 |

#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

旋转类型


### getLinearLimitType

▸ **getLinearLimitType**(`Axis`): [`LimitType`](../enums/Gameplay.LimitType.md)

**`Description`**

获取滑动类型

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 轴向 |

#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

限制类型


### setAngularLimitType

▸ **setAngularLimitType**(`Axis`, `Type`): `void`

**`Description`**

设置旋转类型

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 轴向 |
| `Type` | [`LimitType`](../enums/Gameplay.LimitType.md) | 限制类型 |

#### Returns

`void`


### setLinearLimitType

▸ **setLinearLimitType**(`Axis`, `Type`): `void`

**`Description`**

设置滑动类型

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 轴向 |
| `Type` | [`LimitType`](../enums/Gameplay.LimitType.md) | 限制类型 |

#### Returns

`void`
