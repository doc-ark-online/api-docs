[GAMEPLAY](../groups/Core.GAMEPLAY.md) / ProjectileMovement

# ProjectileMovement <Badge type="tip" text="Class" /> <Score text="ProjectileMovement" />

<p class="content-big"> 投掷物功能类，绑定的逻辑对象请自行关闭物理模拟，运动过程中会忽略相机、禁行区、功能类不考虑移动同步 </p>

## Implements

- [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md)

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new ProjectileMovement**(`relatedGameObject`: [`GameObject`](mw.GameObject.md), `config?`: [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md))  |
| :-----|
| 设置新的关联的逻辑对象|

### Properties <Score text="Properties" /> 
| **[onProjectileHit](mw.ProjectileMovement.md#onprojectilehit)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\>  |
| :-----|
| 投掷物击中物体时触发绑定函数|
| **[onProjectileHomingFailed](mw.ProjectileMovement.md#onprojectilehomingfailed)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 投掷物追踪失败触发绑定函数（追踪失败特指追踪目标消失，当且仅当这个情况触发一次）|
| **[onProjectileLifeEnd](mw.ProjectileMovement.md#onprojectilelifeend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 投掷物结束运动周期时触发绑定函数|
| **[owner](mw.ProjectileMovement.md#owner)**: [`Character`](mw.Character.md)  |
| 投掷物的owner|

### Accessors <Score text="Accessors" /> 
| **[acceleration](mw.ProjectileMovement.md#acceleration)**(): `number`  |
| :-----|
| 加速度值，正值加速，负值减速|
| **[gravityScale](mw.ProjectileMovement.md#gravityscale)**(): `number`  |
| 重力倍数，正值重力向下，负值重力向上|
| **[homingAcceleration](mw.ProjectileMovement.md#homingacceleration)**(): `number`  |
| 追踪加速度值|
| **[homingTarget](mw.ProjectileMovement.md#homingtarget)**(): [`GameObject`](mw.GameObject.md)  |
| 投掷物追踪的目标|
| **[initialSpeed](mw.ProjectileMovement.md#initialspeed)**(): `number`  |
| 投掷物发射的初始速度，发射之后设置不会生效|
| **[isRotationFollowsVelocity](mw.ProjectileMovement.md#isrotationfollowsvelocity)**(): `boolean`  |
| 投掷物操作的对象的朝向是否跟随速度方向|
| **[lifeSpan](mw.ProjectileMovement.md#lifespan)**(): `number`  |
| 投掷物的运动时间，超出后投掷物不再运动。值小于等于 0 时清空延时|
| **[maxSpeed](mw.ProjectileMovement.md#maxspeed)**(): `number`  |
| 投掷物运动的最大速度|
| **[speedRetention](mw.ProjectileMovement.md#speedretention)**(): `number`  |
| 投掷物每次碰撞后维持速度的比例 [0, 1]|
| **[status](mw.ProjectileMovement.md#status)**(): [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md)  |
| 投掷物当前状态|

### Methods <Score text="Methods" /> 
| **[destroy](mw.ProjectileMovement.md#destroy)**(`[destroy](mw.ProjectileMovement.md#destroy)WithObject`): `void`  |
| :-----|
| 销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。|
| **[getRelatedGameObject](mw.ProjectileMovement.md#getrelatedgameobject)**(): [`GameObject`](mw.GameObject.md)  |
| 过去新的关联的逻辑对象|
| **[getTrajectory](mw.ProjectileMovement.md#gettrajectory)**(`startDirection`: [`Vector`](mw.Vector.md), `density`: `number`, `duration`: `number`): [`Vector`](mw.Vector.md)[]  |
| 获取预测出的运动轨迹|
| **[getVelocity](mw.ProjectileMovement.md#getvelocity)**(): [`Vector`](mw.Vector.md)  |
| 获取当前速度|
| **[launch](mw.ProjectileMovement.md#launch)**(`direction`: [`Vector`](mw.Vector.md)): `void`  |
| 发射|
| **[pause](mw.ProjectileMovement.md#pause)**(): `void`  |
| 暂停运动，将由 Launched 状态切换到 Ready 状态|
| **[resume](mw.ProjectileMovement.md#resume)**(): `void`  |
| 继续运动，将由 Ready 状态切换到 Launched 状态|
| **[setRelatedGameObject](mw.ProjectileMovement.md#setrelatedgameobject)**(`value`: [`GameObject`](mw.GameObject.md)): `void`  |
| 设置新的关联的逻辑对象|
| **[setVelocity](mw.ProjectileMovement.md#setvelocity)**(`v`: [`Vector`](mw.Vector.md)): `void`  |
| 设置当前速度|

设置新的关联的逻辑对象


#### Parameters

| `relatedGameObject` [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，将为之生成组件 |
| :------ | :------ |
| `config?` [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md) |  批量读取配置 default: null |

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

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **acceleration**(): `number`

</th>
<th style="text-align: left">

• `set` **acceleration**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


加速度值，正值加速，负值减速

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[acceleration](../interfaces/mw.ProjectileMovementConfig.md#acceleration) |
| :------ | :------ |


</td>
<td style="text-align: left">


加速度值，正值加速，负值减速

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[acceleration](../interfaces/mw.ProjectileMovementConfig.md#acceleration)


</td>
</tr></tbody>
</table>

___

### gravityScale <Score text="gravityScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gravityScale**(): `number`

</th>
<th style="text-align: left">

• `set` **gravityScale**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


重力倍数，正值重力向下，负值重力向上

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[gravityScale](../interfaces/mw.ProjectileMovementConfig.md#gravityscale) |
| :------ | :------ |


</td>
<td style="text-align: left">


重力倍数，正值重力向下，负值重力向上

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[gravityScale](../interfaces/mw.ProjectileMovementConfig.md#gravityscale)


</td>
</tr></tbody>
</table>

___

### homingAcceleration <Score text="homingAcceleration" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **homingAcceleration**(): `number`

</th>
<th style="text-align: left">

• `set` **homingAcceleration**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


追踪加速度值

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingAcceleration](../interfaces/mw.ProjectileMovementConfig.md#homingacceleration) |
| :------ | :------ |


</td>
<td style="text-align: left">


追踪加速度值

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingAcceleration](../interfaces/mw.ProjectileMovementConfig.md#homingacceleration)


</td>
</tr></tbody>
</table>

___

### homingTarget <Score text="homingTarget" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **homingTarget**(): [`GameObject`](mw.GameObject.md)

</th>
<th style="text-align: left">

• `set` **homingTarget**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物追踪的目标

#### Returns

| [`GameObject`](mw.GameObject.md) | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingTarget](../interfaces/mw.ProjectileMovementConfig.md#homingtarget) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物追踪的目标

#### Parameters

| `value` | [`GameObject`](mw.GameObject.md) |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingTarget](../interfaces/mw.ProjectileMovementConfig.md#homingtarget)


</td>
</tr></tbody>
</table>

___

### initialSpeed <Score text="initialSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **initialSpeed**(): `number`

</th>
<th style="text-align: left">

• `set` **initialSpeed**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物发射的初始速度，发射之后设置不会生效

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[initialSpeed](../interfaces/mw.ProjectileMovementConfig.md#initialspeed) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物发射的初始速度，发射之后设置不会生效

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[initialSpeed](../interfaces/mw.ProjectileMovementConfig.md#initialspeed)


</td>
</tr></tbody>
</table>

___

### isRotationFollowsVelocity <Score text="isRotationFollowsVelocity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isRotationFollowsVelocity**(): `boolean`

</th>
<th style="text-align: left">

• `set` **isRotationFollowsVelocity**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物操作的对象的朝向是否跟随速度方向

#### Returns

| `boolean` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[isRotationFollowsVelocity](../interfaces/mw.ProjectileMovementConfig.md#isrotationfollowsvelocity) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物操作的对象的朝向是否跟随速度方向

#### Parameters

| `value` | `boolean` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[isRotationFollowsVelocity](../interfaces/mw.ProjectileMovementConfig.md#isrotationfollowsvelocity)


</td>
</tr></tbody>
</table>

___

### lifeSpan <Score text="lifeSpan" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **lifeSpan**(): `number`

</th>
<th style="text-align: left">

• `set` **lifeSpan**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物的运动时间，超出后投掷物不再运动。注意，返回的值是上次设置的值或默认值，而不是还剩的运行时长

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[lifeSpan](../interfaces/mw.ProjectileMovementConfig.md#lifespan) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物的运动时间，超出后投掷物不再运动。值小于等于 0 时清空延时

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[lifeSpan](../interfaces/mw.ProjectileMovementConfig.md#lifespan)


</td>
</tr></tbody>
</table>

___

### maxSpeed <Score text="maxSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxSpeed**(): `number`

</th>
<th style="text-align: left">

• `set` **maxSpeed**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物运动的最大速度

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[maxSpeed](../interfaces/mw.ProjectileMovementConfig.md#maxspeed) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物运动的最大速度

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[maxSpeed](../interfaces/mw.ProjectileMovementConfig.md#maxspeed)


</td>
</tr></tbody>
</table>

___

### speedRetention <Score text="speedRetention" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **speedRetention**(): `number`

</th>
<th style="text-align: left">

• `set` **speedRetention**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物每次碰撞后维持速度的比例 [0, 1]

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[speedRetention](../interfaces/mw.ProjectileMovementConfig.md#speedretention) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物每次碰撞后维持速度的比例 [0, 1]

#### Parameters

| `value` | `number` |
| :------ | :------ |


#### Implementation of

[ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[speedRetention](../interfaces/mw.ProjectileMovementConfig.md#speedretention)


</td>
</tr></tbody>
</table>

___

### status <Score text="status" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **status**(): [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


投掷物当前状态

#### Returns

</td>
</tr></tbody>
</table>

| [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md) |  |
| :------ | :------ |

## Methods

### destroy <Score text="destroy" /> 

• **destroy**(`destroyWithObject`): `void` 

销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。

#### Parameters

| `destroyWithObject` `boolean` |  是否与对象一起删除 default: true |
| :------ | :------ |



___

### getRelatedGameObject <Score text="getRelatedGameObject" /> 

• **getRelatedGameObject**(): [`GameObject`](mw.GameObject.md) 

过去新的关联的逻辑对象

#### Returns

| [`GameObject`](mw.GameObject.md) | 新的关联的逻辑对象，设置后，移动组件和碰撞都将重新附加到此对象上 |
| :------ | :------ |


___

### getTrajectory <Score text="getTrajectory" /> 

• **getTrajectory**(`startDirection`, `density`, `duration`): [`Vector`](mw.Vector.md)[] 

获取预测出的运动轨迹

#### Parameters

| `startDirection` [`Vector`](mw.Vector.md) |  发射方向 |
| :------ | :------ |
| `density` `number` |  预测点密度，等同于模拟的帧率，值越大轨迹越精细，性能消耗越大 |
| `duration` `number` |  预测时长，等同于模拟时长，值越大轨迹轨迹越长，性能消耗越大 |

#### Returns

| [`Vector`](mw.Vector.md)[] | 轨迹点坐标数组 |
| :------ | :------ |

::: warning Precautions

Launched 状态调用时不生效

:::


___

### getVelocity <Score text="getVelocity" /> 

• **getVelocity**(): [`Vector`](mw.Vector.md) 

获取当前速度

#### Returns

| [`Vector`](mw.Vector.md) | 当前速度 |
| :------ | :------ |


___

### launch <Score text="launch" /> 

• **launch**(`direction`): `void` 

发射

#### Parameters

| `direction` [`Vector`](mw.Vector.md) |  发射方向，direction 如果是 (0,0,0), 会被重置为默认值 default: (1,0,0) |
| :------ | :------ |


::: warning Precautions

能在 Ready 状态下调用

:::


___

### pause <Score text="pause" /> 

• **pause**(): `void` 

暂停运动，将由 Launched 状态切换到 Ready 状态


::: warning Precautions

非 Launched 状态调用时不生效

:::


___

### resume <Score text="resume" /> 

• **resume**(): `void` 

继续运动，将由 Ready 状态切换到 Launched 状态


::: warning Precautions

对应 pause 方法，还没有发射的对象调用也不会运动

:::


___

### setRelatedGameObject <Score text="setRelatedGameObject" /> 

• **setRelatedGameObject**(`value`): `void` 

设置新的关联的逻辑对象

#### Parameters

| `value` [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，设置后，移动组件和碰撞都将重新附加到此对象上 |
| :------ | :------ |



___

### setVelocity <Score text="setVelocity" /> 

• **setVelocity**(`v`): `void` 

设置当前速度

#### Parameters

| `v` [`Vector`](mw.Vector.md) |  速度 |
| :------ | :------ |


::: warning Precautions

能在 Launched 状态和 Ready 状态下调用

:::

