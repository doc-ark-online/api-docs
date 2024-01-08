[玩法](../groups/玩法.玩法.md) / ProjectileMovementConfig

# ProjectileMovementConfig <Badge type="tip" text="Interface" /> <Score text="ProjectileMovementConfig" />

投掷物配置类型

## Implemented by

- [`ProjectileMovement`](../classes/mw.ProjectileMovement.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[acceleration](mw.ProjectileMovementConfig.md#acceleration)**: `number`  |
| :-----|
| 投掷物运动的加速度（cm/s），正值会使投掷物加速，负值减速。 <br> default:  0，range: [-10000,10000]|
| **[gravityScale](mw.ProjectileMovementConfig.md#gravityscale)**: `number`  |
| 投掷物受世界重力影响的倍率，正值会使投掷物下坠，负值上升，0可以使投掷物以直线运动。 <br> default:  1，range: [-10, 10]|
| **[homingAcceleration](mw.ProjectileMovementConfig.md#homingacceleration)**: `number`  |
| 朝向目标对象的加速度（cm/s）。 <br> default:  10000。range: [0, 10000]。|
| **[homingTarget](mw.ProjectileMovementConfig.md#homingtarget)**: [`GameObject`](../classes/mw.GameObject.md)  |
| 投掷物追踪的目标对象，当目标对象不为空时，对象会向目标加速。 <br> default:  null。|
| **[initialSpeed](mw.ProjectileMovementConfig.md#initialspeed)**: `number`  |
| 投掷物的初始运动速度（cm/s）， <br> default:  5000，range: [1,100000]|
| **[isRotationFollowsVelocity](mw.ProjectileMovementConfig.md#isrotationfollowsvelocity)**: `boolean`  |
| 投掷物的正方向（以及挂载对象）是否始终跟随运动方向。true：跟随。false：不跟随。 <br> default:  true。|
| **[lifeSpan](mw.ProjectileMovementConfig.md#lifespan)**: `number`  |
| 投掷物存在的最长时间（s），0意味着没有限制。 <br> default:  10。range: [0, 1000]|
| **[maxSpeed](mw.ProjectileMovementConfig.md#maxspeed)**: `number`  |
| 投掷物的最大运动速度（cm/s），0意味着没有限制。 <br> default:  0，range: [0,100000]|
| **[speedRetention](mw.ProjectileMovementConfig.md#speedretention)**: `number`  |
| 碰撞后投掷物保持原来速度的比例。0表示。 <br> default:  0.6。range: [0, 1]|

## Properties

### acceleration <Score text="acceleration" /> 

• `Optional` **acceleration**: `number`

投掷物运动的加速度（cm/s），正值会使投掷物加速，负值减速。 <br> default:  0，range: [-10000,10000]

___

### gravityScale <Score text="gravityScale" /> 

• `Optional` **gravityScale**: `number`

投掷物受世界重力影响的倍率，正值会使投掷物下坠，负值上升，0可以使投掷物以直线运动。 <br> default:  1，range: [-10, 10]

___

### homingAcceleration <Score text="homingAcceleration" /> 

• `Optional` **homingAcceleration**: `number`

朝向目标对象的加速度（cm/s）。 <br> default:  10000。range: [0, 10000]。

___

### homingTarget <Score text="homingTarget" /> 

• `Optional` **homingTarget**: [`GameObject`](../classes/mw.GameObject.md)

投掷物追踪的目标对象，当目标对象不为空时，对象会向目标加速。 <br> default:  null。

___

### initialSpeed <Score text="initialSpeed" /> 

• `Optional` **initialSpeed**: `number`

投掷物的初始运动速度（cm/s）， <br> default:  5000，range: [1,100000]

___

### isRotationFollowsVelocity <Score text="isRotationFollowsVelocity" /> 

• `Optional` **isRotationFollowsVelocity**: `boolean`

投掷物的正方向（以及挂载对象）是否始终跟随运动方向。true：跟随。false：不跟随。 <br> default:  true。

___

### lifeSpan <Score text="lifeSpan" /> 

• `Optional` **lifeSpan**: `number`

投掷物存在的最长时间（s），0意味着没有限制。 <br> default:  10。range: [0, 1000]

___

### maxSpeed <Score text="maxSpeed" /> 

• `Optional` **maxSpeed**: `number`

投掷物的最大运动速度（cm/s），0意味着没有限制。 <br> default:  0，range: [0,100000]

___

### speedRetention <Score text="speedRetention" /> 

• `Optional` **speedRetention**: `number`

碰撞后投掷物保持原来速度的比例。0表示。 <br> default:  0.6。range: [0, 1]
