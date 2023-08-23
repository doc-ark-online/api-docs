[GAMEPLAY](../groups/Core.GAMEPLAY.md) / ProjectileMovement

# ProjectileMovement <Badge type="tip" text="Class" /> <Score text="ProjectileMovement" />

投掷物功能类，绑定的逻辑对象请自行关闭物理模拟，运动过程中会忽略相机、禁行区、功能类不考虑移动同步

## Implements

- [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md)

## Table of contents

| Properties |
| :-----|
| **[onProjectileHit](mw.ProjectileMovement.md#onprojectilehit)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\> <br> 投掷物击中物体时触发绑定函数|
| **[onProjectileHomingFailed](mw.ProjectileMovement.md#onprojectilehomingfailed)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 投掷物追踪失败触发绑定函数（追踪失败特指追踪目标消失，当且仅当这个情况触发一次）|
| **[onProjectileLifeEnd](mw.ProjectileMovement.md#onprojectilelifeend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 投掷物结束运动周期时触发绑定函数|
| **[owner](mw.ProjectileMovement.md#owner)**: [`Character`](mw.Character.md) <br> 投掷物的owner|

| Accessors |
| :-----|
| **[acceleration](mw.ProjectileMovement.md#acceleration)**(): `number` <br> 加速度值，正值加速，负值减速|
| **[gravityScale](mw.ProjectileMovement.md#gravityscale)**(): `number` <br> 重力倍数，正值重力向下，负值重力向上|
| **[homingAcceleration](mw.ProjectileMovement.md#homingacceleration)**(): `number` <br> 追踪加速度值|
| **[homingTarget](mw.ProjectileMovement.md#homingtarget)**(): [`GameObject`](mw.GameObject.md) <br> 投掷物追踪的目标|
| **[initialSpeed](mw.ProjectileMovement.md#initialspeed)**(): `number` <br> 投掷物发射的初始速度，发射之后设置不会生效|
| **[isRotationFollowsVelocity](mw.ProjectileMovement.md#isrotationfollowsvelocity)**(): `boolean` <br> 投掷物操作的对象的朝向是否跟随速度方向|
| **[lifeSpan](mw.ProjectileMovement.md#lifespan)**(): `number` <br> 投掷物的运动时间，超出后投掷物不再运动。注意，返回的值是上次设置的值或默认值，而不是还剩的运行时长|
| **[maxSpeed](mw.ProjectileMovement.md#maxspeed)**(): `number` <br> 投掷物运动的最大速度|
| **[speedRetention](mw.ProjectileMovement.md#speedretention)**(): `number` <br> 投掷物每次碰撞后维持速度的比例 [0, 1]|
| **[status](mw.ProjectileMovement.md#status)**(): [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md) <br> 投掷物当前状态|

| Methods |
| :-----|
| **[destroy](mw.ProjectileMovement.md#destroy)**(`[destroy](mw.ProjectileMovement.md#destroy)WithObject`): `void` <br> 销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。|
| **[getRelatedGameObject](mw.ProjectileMovement.md#getrelatedgameobject)**(): [`GameObject`](mw.GameObject.md) <br> 过去新的关联的逻辑对象|
| **[getTrajectory](mw.ProjectileMovement.md#gettrajectory)**(`startDirection`: [`Vector`](mw.Vector.md), `density`: `number`, `duration`: `number`): [`Vector`](mw.Vector.md)[] <br> 获取预测出的运动轨迹|
| **[getVelocity](mw.ProjectileMovement.md#getvelocity)**(): [`Vector`](mw.Vector.md) <br> 获取当前速度|
| **[launch](mw.ProjectileMovement.md#launch)**(`direction`: [`Vector`](mw.Vector.md)): `void` <br> 发射|
| **[pause](mw.ProjectileMovement.md#pause)**(): `void` <br> 暂停运动，将由 Launched 状态切换到 Paused 状态|
| **[resume](mw.ProjectileMovement.md#resume)**(): `void` <br> 继续运动，将由 Paused 状态切换到 Launched 状态|
| **[setRelatedGameObject](mw.ProjectileMovement.md#setrelatedgameobject)**(`value`: [`GameObject`](mw.GameObject.md)): `void` <br> 设置新的关联的逻辑对象|
| **[setVelocity](mw.ProjectileMovement.md#setvelocity)**(`v`: [`Vector`](mw.Vector.md)): `void` <br> 设置当前速度|

设置新的关联的逻辑对象

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relatedGameObject` | [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，将为之生成组件 |
| `config?` | [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md) |  批量读取配置 default: null |

## Properties

### onProjectileHit <Score text="onProjectileHit" /> 

• **onProjectileHit**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\>

投掷物击中物体时触发绑定函数

___

### onProjectileHomingFailed <Score text="onProjectileHomingFailed" /> 

• **onProjectileHomingFailed**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

投掷物追踪失败触发绑定函数（追踪失败特指追踪目标消失，当且仅当这个情况触发一次）

___

### onProjectileLifeEnd <Score text="onProjectileLifeEnd" /> 

• **onProjectileLifeEnd**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

投掷物结束运动周期时触发绑定函数

___

### owner <Score text="owner" /> 

• **owner**: [`Character`](mw.Character.md)

投掷物的owner

## Accessors

### acceleration <Score text="acceleration" /> 

• `get` **acceleration**(): `number`

加速度值，正值加速，负值减速

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[acceleration](../interfaces/mw.ProjectileMovementConfig.md#acceleration)

• `set` **acceleration**(`value`): `void`

加速度值，正值加速，负值减速

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[acceleration](../interfaces/mw.ProjectileMovementConfig.md#acceleration)

___

### gravityScale <Score text="gravityScale" /> 

• `get` **gravityScale**(): `number`

重力倍数，正值重力向下，负值重力向上

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[gravityScale](../interfaces/mw.ProjectileMovementConfig.md#gravityscale)

• `set` **gravityScale**(`value`): `void`

重力倍数，正值重力向下，负值重力向上

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[gravityScale](../interfaces/mw.ProjectileMovementConfig.md#gravityscale)

___

### homingAcceleration <Score text="homingAcceleration" /> 

• `get` **homingAcceleration**(): `number`

追踪加速度值

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingAcceleration](../interfaces/mw.ProjectileMovementConfig.md#homingacceleration)

• `set` **homingAcceleration**(`value`): `void`

追踪加速度值

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingAcceleration](../interfaces/mw.ProjectileMovementConfig.md#homingacceleration)

___

### homingTarget <Score text="homingTarget" /> 

• `get` **homingTarget**(): [`GameObject`](mw.GameObject.md)

投掷物追踪的目标

#### Returns

[`GameObject`](mw.GameObject.md)

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingTarget](../interfaces/mw.ProjectileMovementConfig.md#homingtarget)

• `set` **homingTarget**(`value`): `void`

投掷物追踪的目标

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GameObject`](mw.GameObject.md) |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingTarget](../interfaces/mw.ProjectileMovementConfig.md#homingtarget)

___

### initialSpeed <Score text="initialSpeed" /> 

• `get` **initialSpeed**(): `number`

投掷物发射的初始速度，发射之后设置不会生效

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[initialSpeed](../interfaces/mw.ProjectileMovementConfig.md#initialspeed)

• `set` **initialSpeed**(`value`): `void`

投掷物发射的初始速度，发射之后设置不会生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[initialSpeed](../interfaces/mw.ProjectileMovementConfig.md#initialspeed)

___

### isRotationFollowsVelocity <Score text="isRotationFollowsVelocity" /> 

• `get` **isRotationFollowsVelocity**(): `boolean`

投掷物操作的对象的朝向是否跟随速度方向

#### Returns

`boolean`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[isRotationFollowsVelocity](../interfaces/mw.ProjectileMovementConfig.md#isrotationfollowsvelocity)

• `set` **isRotationFollowsVelocity**(`value`): `void`

投掷物操作的对象的朝向是否跟随速度方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[isRotationFollowsVelocity](../interfaces/mw.ProjectileMovementConfig.md#isrotationfollowsvelocity)

___

### lifeSpan <Score text="lifeSpan" /> 

• `get` **lifeSpan**(): `number`

投掷物的运动时间，超出后投掷物不再运动。注意，返回的值是上次设置的值或默认值，而不是还剩的运行时长

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[lifeSpan](../interfaces/mw.ProjectileMovementConfig.md#lifespan)

• `set` **lifeSpan**(`value`): `void`

投掷物的运动时间，超出后投掷物不再运动。值小于等于 0 时清空延时

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[lifeSpan](../interfaces/mw.ProjectileMovementConfig.md#lifespan)

___

### maxSpeed <Score text="maxSpeed" /> 

• `get` **maxSpeed**(): `number`

投掷物运动的最大速度

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[maxSpeed](../interfaces/mw.ProjectileMovementConfig.md#maxspeed)

• `set` **maxSpeed**(`value`): `void`

投掷物运动的最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[maxSpeed](../interfaces/mw.ProjectileMovementConfig.md#maxspeed)

___

### speedRetention <Score text="speedRetention" /> 

• `get` **speedRetention**(): `number`

投掷物每次碰撞后维持速度的比例 [0, 1]

#### Returns

`number`

#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[speedRetention](../interfaces/mw.ProjectileMovementConfig.md#speedretention)

• `set` **speedRetention**(`value`): `void`

投掷物每次碰撞后维持速度的比例 [0, 1]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[speedRetention](../interfaces/mw.ProjectileMovementConfig.md#speedretention)

___

### status <Score text="status" /> 

• `get` **status**(): [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md)

投掷物当前状态

#### Returns

[`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md)

## Methods

### destroy <Score text="destroy" /> 

• **destroy**(`destroyWithObject`): `void` 

销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyWithObject` | `boolean` |  是否与对象一起删除 default: true |


___

### getRelatedGameObject <Score text="getRelatedGameObject" /> 

• **getRelatedGameObject**(): [`GameObject`](mw.GameObject.md) 

过去新的关联的逻辑对象


#### Returns

[`GameObject`](mw.GameObject.md)

新的关联的逻辑对象，设置后，移动组件和碰撞都将重新附加到此对象上

___

### getTrajectory <Score text="getTrajectory" /> 

• **getTrajectory**(`startDirection`, `density`, `duration`): [`Vector`](mw.Vector.md)[] 

获取预测出的运动轨迹

::: warning Precautions

Launched 状态调用时不生效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startDirection` | [`Vector`](mw.Vector.md) |  发射方向 |
| `density` | `number` |  预测点密度，等同于模拟的帧率，值越大轨迹越精细，性能消耗越大 |
| `duration` | `number` |  预测时长，等同于模拟时长，值越大轨迹轨迹越长，性能消耗越大 |

#### Returns

[`Vector`](mw.Vector.md)[]

轨迹点坐标数组

___

### getVelocity <Score text="getVelocity" /> 

• **getVelocity**(): [`Vector`](mw.Vector.md) 

获取当前速度


#### Returns

[`Vector`](mw.Vector.md)

当前速度

___

### launch <Score text="launch" /> 

• **launch**(`direction`): `void` 

发射

::: warning Precautions

能在 Ready 状态和 Paused 状态下调用

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | [`Vector`](mw.Vector.md) |  发射方向，direction 如果是 (0,0,0), 会被重置为默认值 default: (1,0,0) |


___

### pause <Score text="pause" /> 

• **pause**(): `void` 

暂停运动，将由 Launched 状态切换到 Paused 状态

::: warning Precautions

非 Launched 状态调用时不生效

:::



___

### resume <Score text="resume" /> 

• **resume**(): `void` 

继续运动，将由 Paused 状态切换到 Launched 状态

::: warning Precautions

非 Paused 状态调用时不生效

:::



___

### setRelatedGameObject <Score text="setRelatedGameObject" /> 

• **setRelatedGameObject**(`value`): `void` 

设置新的关联的逻辑对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，设置后，移动组件和碰撞都将重新附加到此对象上 |


___

### setVelocity <Score text="setVelocity" /> 

• **setVelocity**(`v`): `void` 

设置当前速度

::: warning Precautions

能在 Launched 状态和 Paused 状态下调用

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](mw.Vector.md) |  速度 |

