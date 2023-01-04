[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsAngularMotor

# PhysicsAngularMotor <Badge type="tip" text="Class" />

**`Description`**

物理力矩发动机

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsAngularMotor`**

## Table of contents

| Accessors |
| :-----|
| **[enable](Gameplay.PhysicsAngularMotor.md#enable)**(): `boolean` <br> 获取激活状态|
| **[torque](Gameplay.PhysicsAngularMotor.md#torque)**(): [`Vector`](Type.Vector.md) <br> 获取旋转最大速度|
| **[torqueStrength](Gameplay.PhysicsAngularMotor.md#torquestrength)**(): `number` <br> 获取加速度|

| Methods |
| :-----|

## Accessors

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取激活状态

**`Effect`**

调用端生效

#### Returns

`boolean`

激活状态

• `set` **enable**(`EnableState`): `void`

**`Description`**

设置激活状态

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 激活状态 |

#### Returns

`void`


### torque

• `get` **torque**(): [`Vector`](Type.Vector.md)

**`Description`**

获取旋转最大速度

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Vector.md)

旋转最大速度

• `set` **torque**(`vector`): `void`

**`Description`**

设置旋转最大速度

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector`](Type.Vector.md) | 旋转最大速度 |

#### Returns

`void`

___

### torqueStrength

• `get` **torqueStrength**(): `number`

**`Description`**

获取加速度

**`Effect`**

调用端生效

#### Returns

`number`

加速度

• `set` **torqueStrength**(`strength`): `void`

**`Description`**

设置加速度

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strength` | `number` | 加速度 |

#### Returns

`void`


## Methods