[GAMEPLAY](../groups/Core.GAMEPLAY.md) / ProjectileMovementConfig

# ProjectileMovementConfig <Badge type="tip" text="Interface" /> <Score text="ProjectileMovementConfig" />

<p class="content-big"> 投掷物配置类型 </p>

## Implemented by

- [`ProjectileMovement`](../classes/mw.ProjectileMovement.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[acceleration](mw.ProjectileMovementConfig.md#acceleration)**: `number`  |
| :-----|
| 加速度值，正值加速，负值减速|
| **[gravityScale](mw.ProjectileMovementConfig.md#gravityscale)**: `number`  |
| 重力倍数，正值重力向下，负值重力向上|
| **[homingAcceleration](mw.ProjectileMovementConfig.md#homingacceleration)**: `number`  |
| 追踪加速度值|
| **[homingTarget](mw.ProjectileMovementConfig.md#homingtarget)**: [`GameObject`](../classes/mw.GameObject.md)  |
| 投掷物追踪的目标|
| **[initialSpeed](mw.ProjectileMovementConfig.md#initialspeed)**: `number`  |
| 投掷物发射的初始速度|
| **[isRotationFollowsVelocity](mw.ProjectileMovementConfig.md#isrotationfollowsvelocity)**: `boolean`  |
| 投掷物操作的对象的朝向是否跟随速度方向|
| **[lifeSpan](mw.ProjectileMovementConfig.md#lifespan)**: `number`  |
| 投掷物的运动时间，超出后投掷物不再运动。|
| **[maxSpeed](mw.ProjectileMovementConfig.md#maxspeed)**: `number`  |
| 投掷物运动的最大速度|
| **[speedRetention](mw.ProjectileMovementConfig.md#speedretention)**: `number`  |
| 投掷物每次碰撞后维持速度的比例（0-1）|

## Properties

### acceleration <Score text="acceleration" /> 

• **acceleration**: `number`

加速度值，正值加速，负值减速

___

### gravityScale <Score text="gravityScale" /> 

• **gravityScale**: `number`

重力倍数，正值重力向下，负值重力向上

___

### homingAcceleration <Score text="homingAcceleration" /> 

• **homingAcceleration**: `number`

追踪加速度值

___

### homingTarget <Score text="homingTarget" /> 

• **homingTarget**: [`GameObject`](../classes/mw.GameObject.md)

投掷物追踪的目标

___

### initialSpeed <Score text="initialSpeed" /> 

• **initialSpeed**: `number`

投掷物发射的初始速度

___

### isRotationFollowsVelocity <Score text="isRotationFollowsVelocity" /> 

• **isRotationFollowsVelocity**: `boolean`

投掷物操作的对象的朝向是否跟随速度方向

___

### lifeSpan <Score text="lifeSpan" /> 

• **lifeSpan**: `number`

投掷物的运动时间，超出后投掷物不再运动。

___

### maxSpeed <Score text="maxSpeed" /> 

• **maxSpeed**: `number`

投掷物运动的最大速度

___

### speedRetention <Score text="speedRetention" /> 

• **speedRetention**: `number`

投掷物每次碰撞后维持速度的比例（0-1）
