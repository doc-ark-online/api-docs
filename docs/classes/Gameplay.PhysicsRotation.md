[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsRotation

# PhysicsRotation <Badge type="tip" text="Class" />

**`Description`**

物理旋转轴

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsRotation`**

## Table of contents

| Accessors |
| :-----|
| **[angularLimit](Gameplay.PhysicsRotation.md#angularlimit)**(): [`Vector`](Type.Vector.md) <br> 获取角度限制值|
| **[angularVelocity](Gameplay.PhysicsRotation.md#angularvelocity)**(): [`Vector`](Type.Vector.md) <br> 获取速度向量|
| **[enable](Gameplay.PhysicsRotation.md#enable)**(): `boolean` <br> 获取旋转轴约束组件是否开启|
| **[strength](Gameplay.PhysicsRotation.md#strength)**(): `number` <br> 获取最大加速度|

| Methods |
| :-----|
| **[getAngularLimitType](Gameplay.PhysicsRotation.md#getangularlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md)): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取限制类型|
| **[setAngularLimitType](Gameplay.PhysicsRotation.md#setangularlimittype)**([`AxisType`](../enums/Gameplay.AxisType.md), [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置旋转类型|

## Accessors

### angularLimit

• `get` **angularLimit**(): [`Vector`](Type.Vector.md)

**`Description`**

获取角度限制值

#### Returns

[`Vector`](Type.Vector.md)

• `set` **angularLimit**(`LimitValue`): `void`

**`Description`**

设置角度限制值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LimitValue` | [`Vector`](Type.Vector.md) | 限制值 |

#### Returns

`void`

___

### angularVelocity

• `get` **angularVelocity**(): [`Vector`](Type.Vector.md)

**`Description`**

获取速度向量

#### Returns

[`Vector`](Type.Vector.md)

速度向量

• `set` **angularVelocity**(`Velocity`): `void`

**`Description`**

设置速度向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Velocity` | [`Vector`](Type.Vector.md) | 速度向量 |

#### Returns

`void`


### enable

• `get` **enable**(): `boolean`

**`Description`**

获取旋转轴约束组件是否开启

#### Returns

`boolean`

组件是否开启

• `set` **enable**(`EnableState`): `void`

**`Description`**

启用或关闭旋转轴约束组件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 要设置的激活状态 |

#### Returns

`void`


### strength

• `get` **strength**(): `number`

**`Description`**

获取最大加速度

#### Returns

`number`

最大加速度

• `set` **strength**(`Strength`): `void`

**`Description`**

设置最大加速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Strength` | `number` | 最大加速度 |

#### Returns

`void`


## Methods

### getAngularLimitType

▸ **getAngularLimitType**(`Axis`): [`LimitType`](../enums/Gameplay.LimitType.md)

**`Description`**

获取限制类型

**`Effect`**

调用端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 要获取限制角度类型的轴 |

#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

限制类型


### setAngularLimitType

▸ **setAngularLimitType**(`Axis`, `rotationType`): `void`

**`Description`**

设置旋转类型

**`Effect`**

调用端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Axis` | [`AxisType`](../enums/Gameplay.AxisType.md) | 轴类型 |
| `rotationType` | [`LimitType`](../enums/Gameplay.LimitType.md) | 旋转类型向量，顺序为x，y，z |

#### Returns

`void`
