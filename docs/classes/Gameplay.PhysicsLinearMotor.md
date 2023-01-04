[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsLinearMotor

# PhysicsLinearMotor <Badge type="tip" text="Class" />

**`Description`**

物理线性发动机组件

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsLinearMotor`**

## Table of contents

| Accessors |
| :-----|
| **[enable](Gameplay.PhysicsLinearMotor.md#enable)**(): `boolean` <br> 获取激活状态|
| **[maxVelocity](Gameplay.PhysicsLinearMotor.md#maxvelocity)**(): [`Vector`](Type.Vector.md) <br> 获取最大速度|
| **[strength](Gameplay.PhysicsLinearMotor.md#strength)**(): `number` <br> 获取加速度|

| Methods |
| :-----|

## Accessors

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取激活状态

#### Returns

`boolean`

激活状态

• `set` **enable**(`value`): `void`

**`Description`**

设置激活状态

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 激活状态 |

#### Returns

`void`


### maxVelocity

• `get` **maxVelocity**(): [`Vector`](Type.Vector.md)

**`Description`**

获取最大速度

#### Returns

[`Vector`](Type.Vector.md)

最大速度

• `set` **maxVelocity**(`maxSpeed`): `void`

**`Description`**

设置最大速度

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSpeed` | [`Vector`](Type.Vector.md) | 最大速度 |

#### Returns

`void`


### strength

• `get` **strength**(): `number`

**`Description`**

获取加速度

#### Returns

`number`

加速度

• `set` **strength**(`acceleration`): `void`

**`Description`**

设置加速度

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `acceleration` | `number` | 加速度 |

#### Returns

`void`


## Methods