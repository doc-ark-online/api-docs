[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsRotator

# PhysicsRotator <Badge type="tip" text="Class" />

**`Description`**

旋转轴

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PhysicsRotator`**

## Table of contents

| Properties |
| :-----|
| **[onRotationStart](Gameplay.PhysicsRotator.md#onrotationstart)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 旋转轴开始事件|
| **[onRotationStop](Gameplay.PhysicsRotator.md#onrotationstop)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 旋转轴停止事件|

| Accessors |
| :-----|
| **[limitAngle](Gameplay.PhysicsRotator.md#limitangle)**(): `number` <br> 获取最大可旋转角度|
| **[limitEnable](Gameplay.PhysicsRotator.md#limitenable)**(): `boolean` <br> 获取是否开启约束旋转角度|
| **[limitType](Gameplay.PhysicsRotator.md#limittype)**(): [`AxisType`](../enums/Gameplay.AxisType.md) <br> 获取旋转轴限制类型|
| **[maxRotationalAngularVelocity](Gameplay.PhysicsRotator.md#maxrotationalangularvelocity)**(): `number` <br> 最大旋转角速度Get|
| **[physicsEnable](Gameplay.PhysicsRotator.md#physicsenable)**(): `boolean` <br> 获取是否启用物理旋转|
| **[recoveryStrength](Gameplay.PhysicsRotator.md#recoverystrength)**(): `number` <br> 获取回复强度|
| **[rotationalAngularAcceleration](Gameplay.PhysicsRotator.md#rotationalangularacceleration)**(): `number` <br> 旋转角加速度Get|
| **[rotationalAngularVelocity](Gameplay.PhysicsRotator.md#rotationalangularvelocity)**(): `number` <br> 旋转角速度Get|

| Methods |
| :-----|
| **[getConstraintTargetGUID](Gameplay.PhysicsRotator.md#getconstrainttargetguid)**(): `string` <br> 获取约束对象GUID|
| **[reverse](Gameplay.PhysicsRotator.md#reverse)**(): `void` <br> 激活旋转轴非物理旋转，此时会触发OnRotationRun代理|
| **[setConstraintTargetByGUID](Gameplay.PhysicsRotator.md#setconstrainttargetbyguid)**(`string`): `void` <br> 设置约束对象GUID|
| **[start](Gameplay.PhysicsRotator.md#start)**(): `void` <br> Running|
| **[stop](Gameplay.PhysicsRotator.md#stop)**(): `void` <br> 停止旋转轴非物理旋转，此时会触发OnRotationStop代理|

## Properties

### onRotationStart

• **onRotationStart**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

旋转轴开始事件

___

### onRotationStop

• **onRotationStop**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

旋转轴停止事件

## Accessors

### limitAngle

• `get` **limitAngle**(): `number`

**`Description`**

获取最大可旋转角度

#### Returns

`number`

最大可旋转角度

• `set` **limitAngle**(`value`): `void`

**`Description`**

设置最大可旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 最大可旋转角度 |

#### Returns

`void`

___

### limitEnable

• `get` **limitEnable**(): `boolean`

**`Description`**

获取是否开启约束旋转角度

#### Returns

`boolean`

是否开启约束旋转角度

• `set` **limitEnable**(`value`): `void`

**`Description`**

设置是否开启约束旋转角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启约束旋转角度 |

#### Returns

`void`

___

### limitType

• `get` **limitType**(): [`AxisType`](../enums/Gameplay.AxisType.md)

**`Description`**

获取旋转轴限制类型

**`Effect`**

调用端生效

#### Returns

[`AxisType`](../enums/Gameplay.AxisType.md)

旋转轴限制类型

• `set` **limitType**(`value`): `void`

**`Description`**

设置旋转轴限制类型

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`AxisType`](../enums/Gameplay.AxisType.md) | 旋转轴限制类型 |

#### Returns

`void`


### maxRotationalAngularVelocity

• `get` **maxRotationalAngularVelocity**(): `number`

**`Description`**

最大旋转角速度Get

**`Effect`**

调用端生效

#### Returns

`number`

最大旋转角速度

• `set` **maxRotationalAngularVelocity**(`value`): `void`

**`Description`**

最大旋转角速度Set

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 最大旋转角速度 |

#### Returns

`void`


### physicsEnable

• `get` **physicsEnable**(): `boolean`

**`Description`**

获取是否启用物理旋转

#### Returns

`boolean`

是否启用物理旋转

• `set` **physicsEnable**(`value`): `void`

**`Description`**

设置是否启用物理旋转

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用物理旋转 |

#### Returns

`void`

___

### recoveryStrength

• `get` **recoveryStrength**(): `number`

**`Description`**

获取回复强度

#### Returns

`number`

回复强度

• `set` **recoveryStrength**(`value`): `void`

**`Description`**

设置回复强度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 回复强度 |

#### Returns

`void`


### rotationalAngularAcceleration

• `get` **rotationalAngularAcceleration**(): `number`

**`Description`**

旋转角加速度Get

**`Effect`**

调用端生效

#### Returns

`number`

角加速度

• `set` **rotationalAngularAcceleration**(`value`): `void`

**`Description`**

旋转角加速度Set

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角加速度 |

#### Returns

`void`

___

### rotationalAngularVelocity

• `get` **rotationalAngularVelocity**(): `number`

**`Description`**

旋转角速度Get

**`Effect`**

调用端生效

#### Returns

`number`

角速度

• `set` **rotationalAngularVelocity**(`value`): `void`

**`Description`**

旋转角速度Set

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角速度 |

#### Returns

`void`


## Methods

### getConstraintTargetGUID

▸ **getConstraintTargetGUID**(): `string`

**`Description`**

获取约束对象GUID

**`Effect`**

调用端生效

#### Returns

`string`

对象GUID


### reverse

▸ **reverse**(): `void`

**`Description`**

激活旋转轴非物理旋转，此时会触发OnRotationRun代理

**`Effect`**

调用端生效

#### Returns

`void`


### setConstraintTargetByGUID

▸ **setConstraintTargetByGUID**(`value`): `void`

**`Description`**

设置约束对象GUID

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 对象GUID |

#### Returns

`void`


### start

▸ **start**(): `void`

**`Description`**

Running

**`Effect`**

调用端生效

#### Returns

`void`

___

### stop

▸ **stop**(): `void`

**`Description`**

停止旋转轴非物理旋转，此时会触发OnRotationStop代理

**`Effect`**

调用端生效

#### Returns

`void`
