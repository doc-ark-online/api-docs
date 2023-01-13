[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsLinearMotor

# PhysicsLinearMotor <Badge type="tip" text="Class" /> <Score text="PhysicsLinearMotor" />

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

• `get` **enable**(): `boolean`

获取激活状态

#### Returns

`boolean`

激活状态

• `set` **enable**(`value`): `void` <Badge type="tip" text="other" />

设置激活状态

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 激活状态 |



### maxVelocity <Score text="maxVelocity" /> 

• `get` **maxVelocity**(): [`Vector`](Type.Vector.md)

获取最大速度

#### Returns

[`Vector`](Type.Vector.md)

最大速度

• `set` **maxVelocity**(`maxSpeed`): `void` <Badge type="tip" text="other" />

设置最大速度

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSpeed` | [`Vector`](Type.Vector.md) | 最大速度 |



### strength <Score text="strength" /> 

• `get` **strength**(): `number`

获取加速度

#### Returns

`number`

加速度

• `set` **strength**(`acceleration`): `void` <Badge type="tip" text="other" />

设置加速度

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `acceleration` | `number` | 加速度 |



## Methods