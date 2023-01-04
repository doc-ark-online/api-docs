[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsConstraintBase

# PhysicsConstraintBase <Badge type="tip" text="Class" />

**`Description`**

物理约束基类对象

**`Precautions`**

服务器设置，双端自动同步

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PhysicsConstraintBase`**

  ↳↳ [`PhysicsAngularMotor`](Gameplay.PhysicsAngularMotor.md)

  ↳↳ [`PhysicsCable`](Gameplay.PhysicsCable.md)

  ↳↳ [`PhysicsCylinder`](Gameplay.PhysicsCylinder.md)

  ↳↳ [`PhysicsPrism`](Gameplay.PhysicsPrism.md)

  ↳↳ [`PhysicsRotation`](Gameplay.PhysicsRotation.md)

  ↳↳ [`PhysicsSpring`](Gameplay.PhysicsSpring.md)

  ↳↳ [`PhysicsStick`](Gameplay.PhysicsStick.md)

  ↳↳ [`PhysicsIntegratedMover`](Gameplay.PhysicsIntegratedMover.md)

  ↳↳ [`PhysicsLinearMotor`](Gameplay.PhysicsLinearMotor.md)

## Table of contents

| Accessors |
| :-----|
| **[constraintTarget1](Gameplay.PhysicsConstraintBase.md#constrainttarget1)**(): `string` <br> 获取约束对象1|
| **[constraintTarget2](Gameplay.PhysicsConstraintBase.md#constrainttarget2)**(): `string` <br> 获取约束对象2|

| Methods |
| :-----|

## Accessors

### constraintTarget1

• `get` **constraintTarget1**(): `string`

**`Description`**

获取约束对象1

#### Returns

`string`

• `set` **constraintTarget1**(`guid`): `void`

**`Description`**

设置约束对象1

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 约束对象1的GUID |

#### Returns

`void`

___

### constraintTarget2

• `get` **constraintTarget2**(): `string`

**`Description`**

获取约束对象2

#### Returns

`string`

• `set` **constraintTarget2**(`guid`): `void`

**`Description`**

设置约束对象2

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 约束对象2的GUID |

#### Returns

`void`


## Methods