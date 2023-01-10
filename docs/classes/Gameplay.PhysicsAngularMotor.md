[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsAngularMotor

# PhysicsAngularMotor <Badge type="tip" text="Class" /> <Score text="PhysicsAngularMotor" />

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


::: details 点击查看继承
| Accessors |
| :-----|
| **[constraintTarget1](Gameplay.PhysicsConstraintBase.md#constrainttarget1)**(): `string` <br> 获取约束对象1|
| **[constraintTarget2](Gameplay.PhysicsConstraintBase.md#constrainttarget2)**(): `string` <br> 获取约束对象2|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
:::


## Accessors

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取激活状态


#### Returns

`boolean`

激活状态

• `set` **enable**(`EnableState`): `void` <Badge type="tip" text="other" />

**`Description`**

设置激活状态

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 激活状态 |



### torque <Score text="torque" /> 

• `get` **torque**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取旋转最大速度


#### Returns

[`Vector`](Type.Vector.md)

旋转最大速度

• `set` **torque**(`vector`): `void` <Badge type="tip" text="other" />

**`Description`**

设置旋转最大速度

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Vector`](Type.Vector.md) | 旋转最大速度 |


___

### torqueStrength <Score text="torqueStrength" /> 

• `get` **torqueStrength**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取加速度


#### Returns

`number`

加速度

• `set` **torqueStrength**(`strength`): `void` <Badge type="tip" text="other" />

**`Description`**

设置加速度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strength` | `number` | 加速度 |



## Methods