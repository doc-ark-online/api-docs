[玩法](../groups/玩法.玩法.md) / ProjectileMovement

# ProjectileMovement <Badge type="tip" text="Class" /> <Score text="ProjectileMovement" />

投掷物移动功能类

ProjectileMovement 是一种功能组件，用于处理游戏中的飞行物体，比如子弹、火箭、投掷物等。

想象一下，你在游戏中控制着一个角色，你想让他发射一颗子弹。这时，你可以使用 ProjectileMovement 组件来处理子弹的移动。

这个组件的作用就像是给子弹贴上一个引擎，让它能够自动进行飞行。你只需要设置子弹的速度和方向，组件就会根据这些参数自动计算子弹的轨迹，并将其移动到正确的位置。这样，你就不需要手动编写复杂的移动逻辑，而是交给 ProjectileMovement 来处理。

除了基本的移动功能，ProjectileMovement 还提供了一些其他的特性。例如，你可以设置子弹的最大飞行距离或生命周期，超过这个距离或时间后，子弹会自动销毁。还可以设置子弹的碰撞检测，当子弹与其他物体碰撞时，可以触发相应的效果或伤害。

绑定的逻辑对象请自行关闭物理模拟，运动过程中会忽略相机、禁行区、功能类不考虑移动同步。

## Implements

- [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[onProjectileHit](mw.ProjectileMovement.md#onprojectilehit)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\>  |
| :-----|
| 投掷物击中物体时触发绑定函数|
| **[onProjectileHomingFail](mw.ProjectileMovement.md#onprojectilehomingfail)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 投掷物追踪失败触发绑定函数（追踪失败特指追踪目标消失，当且仅当这个情况触发一次）|
| **[onProjectileLifeEnd](mw.ProjectileMovement.md#onprojectilelifeend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 投掷物结束运动周期时触发绑定函数|
| **[owner](mw.ProjectileMovement.md#owner)**: [`Character`](mw.Character.md)  |
| 投掷物对象的持有人，便于用户指定发射的角色对象。|

### Accessors <Score text="Accessors" /> 
| **[acceleration](mw.ProjectileMovement.md#acceleration)**(): `number`  |
| :-----|
| 投掷物运动的加速度（cm/s），正值会使投掷物加速，负值减速。default: 0，range: [-10000,10000]。|
| **[gravityScale](mw.ProjectileMovement.md#gravityscale)**(): `number`  |
| 投掷物受世界重力影响的倍率，正值会使投掷物下坠，负值上升，0可以使投掷物以直线运动。default: 1，range: [-10, 10]。|
| **[homingAcceleration](mw.ProjectileMovement.md#homingacceleration)**(): `number`  |
| 朝向目标对象的加速度（cm/s）。default: 10000。range: [0, 10000]。|
| **[homingTarget](mw.ProjectileMovement.md#homingtarget)**(): [`GameObject`](mw.GameObject.md)  |
| 投掷物追踪的目标对象，当目标对象不为空时，对象会向目标加速。default: null。|
| **[initialSpeed](mw.ProjectileMovement.md#initialspeed)**(): `number`  |
| 投掷物的初始运动速度（cm/s），default: 5000，range: [1,100000]，发射之后设置不会生效|
| **[isRotationFollowsVelocity](mw.ProjectileMovement.md#isrotationfollowsvelocity)**(): `boolean`  |
| 投掷物的正方向（以及挂载对象）是否始终跟随运动方向。true：跟随。false：不跟随。default: true。|
| **[lifeSpan](mw.ProjectileMovement.md#lifespan)**(): `number`  |
| 投掷物存在的最长时间（s），0意味着没有限制。default: 10。range: [0, 1000]。|
| **[maxSpeed](mw.ProjectileMovement.md#maxspeed)**(): `number`  |
| 投掷物的最大运动速度（cm/s），0意味着没有限制。default: 0，range: [0,100000]。|
| **[speedRetention](mw.ProjectileMovement.md#speedretention)**(): `number`  |
| 碰撞后投掷物保持原来速度的比例。0表示碰撞后速度直接清零。default: 0.6。range: [0, 1]。|
| **[status](mw.ProjectileMovement.md#status)**(): [`ProjectileMovementStatus`](../enums/mw.ProjectileMovementStatus.md)  |
| 投掷物当前状态|

### Methods <Score text="Methods" /> 
| **[destroy](mw.ProjectileMovement.md#destroy)**(`[destroy](mw.ProjectileMovement.md#destroy)WithObject?`): `void`   |
| :-----|
| 销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。|
| **[getRelatedGameObject](mw.ProjectileMovement.md#getrelatedgameobject)**(): [`GameObject`](mw.GameObject.md)   |
| 获取关联的逻辑对象|
| **[getTrajectory](mw.ProjectileMovement.md#gettrajectory)**(`startDirection`: [`Vector`](mw.Vector.md), `density`: `number`, `duration`: `number`): [`Vector`](mw.Vector.md)[]   |
| 获取预测出的运动轨迹|
| **[getVelocity](mw.ProjectileMovement.md#getvelocity)**(): [`Vector`](mw.Vector.md)   |
| 获取当前速度|
| **[launch](mw.ProjectileMovement.md#launch)**(`direction`: [`Vector`](mw.Vector.md)): `void`   |
| 发射|
| **[pause](mw.ProjectileMovement.md#pause)**(): `void`   |
| 暂停运动，将由 Launched 状态切换到 Ready 状态|
| **[resume](mw.ProjectileMovement.md#resume)**(): `void`   |
| 继续运动，将由 Ready 状态切换到 Launched 状态|
| **[setRelatedGameObject](mw.ProjectileMovement.md#setrelatedgameobject)**(`value`: [`GameObject`](mw.GameObject.md)): `void`   |
| 设置新的关联的逻辑对象|
| **[setVelocity](mw.ProjectileMovement.md#setvelocity)**(`v`: [`Vector`](mw.Vector.md)): `void`   |
| 设置当前速度|

通过配置对象构造功能类

#### Parameters

| `relatedGameObject` [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，将为之生成组件 |
| :------ | :------ |
| `config?` [`ProjectileMovementConfig`](../interfaces/mw.ProjectileMovementConfig.md) |  批量读取配置 default: null |

## Properties

### onProjectileHit <Score text="onProjectileHit" /> 

• **onProjectileHit**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\>

投掷物击中物体时触发绑定函数

___

### onProjectileHomingFail <Score text="onProjectileHomingFail" /> 

• **onProjectileHomingFail**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

投掷物追踪失败触发绑定函数（追踪失败特指追踪目标消失，当且仅当这个情况触发一次）

___

### onProjectileLifeEnd <Score text="onProjectileLifeEnd" /> 

• **onProjectileLifeEnd**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

投掷物结束运动周期时触发绑定函数

___

### owner <Score text="owner" /> 

• **owner**: [`Character`](mw.Character.md)

投掷物对象的持有人，便于用户指定发射的角色对象。

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


投掷物运动的加速度（cm/s），正值会使投掷物加速，负值减速。default: 0，range: [-10000,10000]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[acceleration](../interfaces/mw.ProjectileMovementConfig.md#acceleration) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物运动的加速度（cm/s），正值会使投掷物加速，负值减速。default: 0，range: [-10000,10000]。

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


投掷物受世界重力影响的倍率，正值会使投掷物下坠，负值上升，0可以使投掷物以直线运动。default: 1，range: [-10, 10]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[gravityScale](../interfaces/mw.ProjectileMovementConfig.md#gravityscale) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物受世界重力影响的倍率，正值会使投掷物下坠，负值上升，0可以使投掷物以直线运动。default: 1，range: [-10, 10]。

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


朝向目标对象的加速度（cm/s）。default: 10000。range: [0, 10000]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingAcceleration](../interfaces/mw.ProjectileMovementConfig.md#homingacceleration) |
| :------ | :------ |


</td>
<td style="text-align: left">


朝向目标对象的加速度（cm/s）。default: 10000。range: [0, 10000]。

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


投掷物追踪的目标对象，当目标对象不为空时，对象会向目标加速。default: null。

#### Returns

| [`GameObject`](mw.GameObject.md) | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[homingTarget](../interfaces/mw.ProjectileMovementConfig.md#homingtarget) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物追踪的目标对象，当目标对象不为空时，对象会向目标加速。default: null。

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


投掷物的初始运动速度（cm/s），default: 5000，range: [1,100000]，发射之后设置不会生效

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[initialSpeed](../interfaces/mw.ProjectileMovementConfig.md#initialspeed) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物的初始运动速度（cm/s），default: 5000，range: [1,100000]，发射之后设置不会生效

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


投掷物的正方向（以及挂载对象）是否始终跟随运动方向。true：跟随。false：不跟随。default: true。

#### Returns

| `boolean` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[isRotationFollowsVelocity](../interfaces/mw.ProjectileMovementConfig.md#isrotationfollowsvelocity) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物的正方向（以及挂载对象）是否始终跟随运动方向。true：跟随。false：不跟随。default: true。

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


投掷物存在的最长时间（s），0意味着没有限制。default: 10。range: [0, 1000]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[lifeSpan](../interfaces/mw.ProjectileMovementConfig.md#lifespan) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物存在的最长时间（s），0意味着没有限制。default: 10。range: [0, 1000]。

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


投掷物的最大运动速度（cm/s），0意味着没有限制。default: 0，range: [0,100000]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[maxSpeed](../interfaces/mw.ProjectileMovementConfig.md#maxspeed) |
| :------ | :------ |


</td>
<td style="text-align: left">


投掷物的最大运动速度（cm/s），0意味着没有限制。default: 0，range: [0,100000]。

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


碰撞后投掷物保持原来速度的比例。0表示碰撞后速度直接清零。default: 0.6。range: [0, 1]。

#### Returns

| `number` | [ProjectileMovementConfig](../interfaces/mw.ProjectileMovementConfig.md).[speedRetention](../interfaces/mw.ProjectileMovementConfig.md#speedretention) |
| :------ | :------ |


</td>
<td style="text-align: left">


碰撞后投掷物保持原来速度的比例。0表示碰撞后速度直接清零。default: 0.6。range: [0, 1]。

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

• **destroy**(`destroyWithObject?`): `void` 

销毁投掷物，即销毁对象下的移动组件和碰撞组件。可以选择是否和关联的对象一起销毁。

#### Parameters

| `destroyWithObject?` `boolean` |  是否与对象一起删除 default: true |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement_Destroy"的代码保存,运行游戏,场景中将会生成5个用于发射的球。给发射器对应事件的委托绑定函数。按下按键”1“，发射投掷物关联的球对象。按下按键”2“，切换投掷物关联的球对象并删除上一个。注意需等球停止后再切换，否则会提前切换投掷物关联的球对象；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement_Destroy extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 创建一个模型数组balls和标识curBall。
           let balls = new Array<Model>();
           let curBall = 0;

           // 在前方异步生成5个球，放入数组balls中。
           for (let i = 0;
i < 5;
i++) {
               let ball = await GameObject.asyncSpawn("84121") as Model;
               ball.worldTransform.position = new Vector(200, i * 100, 25);
               ball.name = "ball" + i;
               ball.setCollision(CollisionStatus.QueryCollisionOnly);
               balls.push(ball);
           }

           // 创建投掷物。
           let projectile = new ProjectileMovement(balls[curBall]);

           // 设置初始发射速度为1000。
           projectile.initialSpeed = 1000;

           // 给击中委托绑定一个函数，当击中对象是目标时，播放一个击中特效，0.5s后删除目标。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               EffectService.playAtPosition("99599", HitResult.impactPoint, {scale: new Vector(5, 5, 5)});
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球右前方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               projectile.launch(new Vector(1, 1, 1));
           });

           // 添加客户端发送的”DESTROY“事件监听器，从数组里面删除球对象，并切换投掷物关联的对象。
           Event.addClientListener("DESTROY", async (player: Player) => {
               console.error("DESTROY");
               let deleteBall = projectile.getRelatedGameObject() as Model;
               let deleteIndex = balls.indexOf(deleteBall);
               balls.splice(deleteIndex, 1);
               if(balls.length > 0) {
                   curBall = (deleteIndex) % balls.length;
                   projectile.setRelatedGameObject(balls[curBall]);
                   deleteBall.destroy();
               } else {
                   projectile.destroy(true);
               }
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球。
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”DESTROY“事件，切换至下一个球并删除上一个。
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("DESTROY");
           });
       }
   }
}
```

___

### getRelatedGameObject <Score text="getRelatedGameObject" /> 

• **getRelatedGameObject**(): [`GameObject`](mw.GameObject.md) 

获取关联的逻辑对象

#### Returns

| [`GameObject`](mw.GameObject.md) | 关联的逻辑对象 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement"的代码保存,运行游戏,场景中将会生成5个用于发射的球。给发射器对应事件的委托绑定函数。按下按键”1“，发射投掷物关联的球对象。按下按键”2“，切换投掷物关联的球对象并删除上一个。注意需等球停止后再切换，否则会提前切换投掷物关联的球对象；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 创建一个模型数组balls和标识curBall。
           let balls = new Array<Model>();
           let curBall = 0;

           // 在前方异步生成5个球，放入数组balls中。
           for (let i = 0;
i < 5;
i++) {
               let ball = await GameObject.asyncSpawn("84121") as Model;
               ball.worldTransform.position = new Vector(200, i * 100, 25);
               ball.name = "ball" + i;
               ball.setCollision(CollisionStatus.QueryCollisionOnly);
               balls.push(ball);
           }

           // 创建投掷物。
           let projectile = new ProjectileMovement(balls[curBall]);

           // 设置初始发射速度为1000。
           projectile.initialSpeed = 1000;

           // 给击中委托绑定一个函数，当击中对象是目标时，播放一个击中特效，0.5s后删除目标。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               EffectService.playAtPosition("99599", HitResult.impactPoint, {scale: new Vector(5, 5, 5)});
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球右前方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               projectile.launch(new Vector(1, 1, 1));
           });

           // 添加客户端发送的”DESTROY“事件监听器，从数组里面删除球对象，并切换投掷物关联的对象。
           Event.addClientListener("DESTROY", async (player: Player) => {
               console.error("DESTROY");
               let deleteBall = projectile.getRelatedGameObject() as Model;
               let deleteIndex = balls.indexOf(deleteBall);
               balls.splice(deleteIndex, 1);
               if(balls.length > 0) {
                   curBall = (deleteIndex) % balls.length;
                   projectile.setRelatedGameObject(balls[curBall]);
                   deleteBall.destroy();
               } else {
                   projectile.destroy(true);
               }
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球。
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”DESTROY“事件，切换至下一个球并删除上一个。
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("DESTROY");
           });
       }
   }
}
```

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

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement"的代码保存,运行游戏。按下按键”1“，发射一颗火箭。设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 在r(2000, 0, 0)生成一个火箭模型。
           let rocket = await GameObject.asyncSpawn("162807") as Model;
           rocket.worldTransform.position = new Vector(2000, 0, 0);

           // 将火箭的碰撞状态修改为无碰撞
           rocket.setCollision(CollisionStatus.Off);

           // 创建投掷物。
           let projectile = new ProjectileMovement(rocket);

           // 设置初始发射速度为1。
           projectile.initialSpeed = 1;
           // 设置最大速度为1000。
           projectile.maxSpeed = 1000;
           // 设置发射加速度为200
           projectile.acceleration = 200;
           // 设置重力缩放为0。
           projectile.gravityScale = 0;
           // 设置投掷物旋转不跟随速度方向。
           projectile.isRotationFollowsVelocity = false;
           // 设置投掷物运动时间10秒。
           projectile.lifeSpan = 10;

           // 添加客户端发送的”LAUNCH“事件监听器，将火箭朝上方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               projectile.launch(new Vector(0, 0, 1));
               // 广播客户端给火箭挂载尾焰特效
               Event.dispatchToAllClient("TAIL", rocket.gameObjectId);
               // 每0.1秒都会给客户端广播火箭当前速度
               let scaleInterval = TimeUtil.setInterval(() => {
                   if(projectile.getVelocity().length > 999) {
                       projectile.setVelocity(Vector.zero);
                       TimeUtil.clearInterval(scaleInterval);
                       rocket.worldTransform.position = new Vector(2000, 0, 0);
                   }
                   Event.dispatchToAllClient("SCALING", rocket.gameObjectId, projectile.getVelocity());
               }, 0.1);
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射火箭
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加服务端发送的”TAIL“事件监听器，给火箭挂载尾焰。
           Event.addServerListener("TAIL", async (rocketId: string) => {
               let rocket = await GameObject.asyncFindGameObjectById(rocketId);
               if(typeof(rocket.getChildByName("tail")) != "undefined") {
                   return;
               }
               let tail = await GameObject.asyncSpawn("144098") as Effect;
               tail.name = "tail";
               tail.parent = rocket;
               tail.localTransform.position = Vector.zero;
           });

           // 添加服务端发送的”SCALING“事件监听器，根据速度对尾焰进行缩放
           Event.addServerListener("SCALING", async (rocketId: string, velocity: Vector) => {
               let rocket = await GameObject.asyncFindGameObjectById(rocketId);
               let tail = rocket.getChildByName("tail");
               if(tail) {
                   tail.worldTransform.scale = Vector.one.multiply(velocity.length / 250);
               }
           });
       }
   }
}
```

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

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement_Launch"的代码保存,运行游戏,场景中将会生成一个用于发射的球以及用于碰撞的墙壁。给发射器对应事件的委托绑定函数。按下按键”1“，发射球；按下按键”2“，暂停球的运动；按下按键”3“，恢复球的运动；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement_Launch extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 在世界坐标（200，0，25）异步生成一个球
           let ball = await GameObject.asyncSpawn("84121") as Model;
           ball.worldTransform.position = new Vector(200, 0, 25);
           ball.name = "ball";
           ball.setCollision(CollisionStatus.QueryCollisionOnly);

           // 在世界坐标（1000，0，0）异步生成一面墙
           let wall = await GameObject.asyncSpawn("197386") as Model;
           wall.worldTransform.position = new Vector(1000, 0, 0);
           wall.worldTransform.scale = new Vector(1, 5, 5);
           wall.name = "wall";

           // 创建投掷物。
           let projectile = new ProjectileMovement(ball);

           // 设置初始发射速度为1500。
           projectile.initialSpeed = 1500;
           // 设置重力缩放为1。
           projectile.gravityScale = 1;
           // 设置投掷物旋转跟随速度方向。
           projectile.isRotationFollowsVelocity = true;
           // 设置投掷物碰撞维持速度比例为0.4。
           projectile.speedRetention = 0.4;

           // 给击中委托绑定一个函数，打印击中信息：角色X 发射 对象Y 击中 对象Z，并播放一个击中特效。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               console.log( "Projectile " + projectile.getRelatedGameObject().name + " thrown by Character " + projectile.owner.displayName + " hits the " + hitGameObject.name);
               EffectService.playAtPosition("99599", HitResult.impactPoint);
           });

           // 给投掷物生命结束委托绑定一个函数，播放一个销毁特效。
           projectile.onProjectileLifeEnd.add(() => {
               EffectService.playAtPosition("133276", ball.worldTransform.position);
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球朝上方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               // 设置owner为玩家角色。
               projectile.owner = player.character;
               projectile.launch(new Vector(1, 0, 1));
           });

           // 添加客户端发送的”PAUSE“事件监听器，将暂停投掷物运动并打印状态。
           Event.addClientListener("PAUSE", async (player: Player) => {
               projectile.pause();
               console.log("Projectile status " + projectile.status);
           });

           // 添加客户端发送的”RESUME“事件监听器，将恢复投掷物运动并打印状态。
           Event.addClientListener("RESUME", async (player: Player) => {
               projectile.resume();
               console.log("Projectile status " + projectile.status);
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”PAUSE“事件，发射球
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("PAUSE");
           });

           // 添加一个按键方法：按下按键”3“，向服务端派送一个”RESUME“事件，发射球
           InputUtil.onKeyDown(Keys.Three, () => {
               Event.dispatchToServer("RESUME");
           });
       }
   }
}
```

___

### pause <Score text="pause" /> 

• **pause**(): `void` 

暂停运动，将由 Launched 状态切换到 Ready 状态


::: warning Precautions

非 Launched 状态调用时不生效

:::

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement_Launch"的代码保存,运行游戏,场景中将会生成一个用于发射的球以及用于碰撞的墙壁。给发射器对应事件的委托绑定函数。按下按键”1“，发射球；按下按键”2“，暂停球的运动；按下按键”3“，恢复球的运动；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement_Launch extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 在世界坐标（200，0，25）异步生成一个球
           let ball = await GameObject.asyncSpawn("84121") as Model;
           ball.worldTransform.position = new Vector(200, 0, 25);
           ball.name = "ball";
           ball.setCollision(CollisionStatus.QueryCollisionOnly);

           // 在世界坐标（1000，0，0）异步生成一面墙
           let wall = await GameObject.asyncSpawn("197386") as Model;
           wall.worldTransform.position = new Vector(1000, 0, 0);
           wall.worldTransform.scale = new Vector(1, 5, 5);
           wall.name = "wall";

           // 创建投掷物。
           let projectile = new ProjectileMovement(ball);

           // 设置初始发射速度为1500。
           projectile.initialSpeed = 1500;
           // 设置重力缩放为1。
           projectile.gravityScale = 1;
           // 设置投掷物旋转跟随速度方向。
           projectile.isRotationFollowsVelocity = true;
           // 设置投掷物碰撞维持速度比例为0.4。
           projectile.speedRetention = 0.4;

           // 给击中委托绑定一个函数，打印击中信息：角色X 发射 对象Y 击中 对象Z，并播放一个击中特效。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               console.log( "Projectile " + projectile.getRelatedGameObject().name + " thrown by Character " + projectile.owner.displayName + " hits the " + hitGameObject.name);
               EffectService.playAtPosition("99599", HitResult.impactPoint);
           });

           // 给投掷物生命结束委托绑定一个函数，播放一个销毁特效。
           projectile.onProjectileLifeEnd.add(() => {
               EffectService.playAtPosition("133276", ball.worldTransform.position);
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球朝上方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               // 设置owner为玩家角色。
               projectile.owner = player.character;
               projectile.launch(new Vector(1, 0, 1));
           });

           // 添加客户端发送的”PAUSE“事件监听器，将暂停投掷物运动并打印状态。
           Event.addClientListener("PAUSE", async (player: Player) => {
               projectile.pause();
               console.log("Projectile status " + projectile.status);
           });

           // 添加客户端发送的”RESUME“事件监听器，将恢复投掷物运动并打印状态。
           Event.addClientListener("RESUME", async (player: Player) => {
               projectile.resume();
               console.log("Projectile status " + projectile.status);
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”PAUSE“事件，发射球
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("PAUSE");
           });

           // 添加一个按键方法：按下按键”3“，向服务端派送一个”RESUME“事件，发射球
           InputUtil.onKeyDown(Keys.Three, () => {
               Event.dispatchToServer("RESUME");
           });
       }
   }
}
```

___

### resume <Score text="resume" /> 

• **resume**(): `void` 

继续运动，将由 Ready 状态切换到 Launched 状态


::: warning Precautions

对应 pause 方法，还没有发射的对象调用也不会运动

:::

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement_Launch"的代码保存,运行游戏,场景中将会生成一个用于发射的球以及用于碰撞的墙壁。给发射器对应事件的委托绑定函数。按下按键”1“，发射球；按下按键”2“，暂停球的运动；按下按键”3“，恢复球的运动；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement_Launch extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 在世界坐标（200，0，25）异步生成一个球
           let ball = await GameObject.asyncSpawn("84121") as Model;
           ball.worldTransform.position = new Vector(200, 0, 25);
           ball.name = "ball";
           ball.setCollision(CollisionStatus.QueryCollisionOnly);

           // 在世界坐标（1000，0，0）异步生成一面墙
           let wall = await GameObject.asyncSpawn("197386") as Model;
           wall.worldTransform.position = new Vector(1000, 0, 0);
           wall.worldTransform.scale = new Vector(1, 5, 5);
           wall.name = "wall";

           // 创建投掷物。
           let projectile = new ProjectileMovement(ball);

           // 设置初始发射速度为1500。
           projectile.initialSpeed = 1500;
           // 设置重力缩放为1。
           projectile.gravityScale = 1;
           // 设置投掷物旋转跟随速度方向。
           projectile.isRotationFollowsVelocity = true;
           // 设置投掷物碰撞维持速度比例为0.4。
           projectile.speedRetention = 0.4;

           // 给击中委托绑定一个函数，打印击中信息：角色X 发射 对象Y 击中 对象Z，并播放一个击中特效。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               console.log( "Projectile " + projectile.getRelatedGameObject().name + " thrown by Character " + projectile.owner.displayName + " hits the " + hitGameObject.name);
               EffectService.playAtPosition("99599", HitResult.impactPoint);
           });

           // 给投掷物生命结束委托绑定一个函数，播放一个销毁特效。
           projectile.onProjectileLifeEnd.add(() => {
               EffectService.playAtPosition("133276", ball.worldTransform.position);
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球朝上方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               // 设置owner为玩家角色。
               projectile.owner = player.character;
               projectile.launch(new Vector(1, 0, 1));
           });

           // 添加客户端发送的”PAUSE“事件监听器，将暂停投掷物运动并打印状态。
           Event.addClientListener("PAUSE", async (player: Player) => {
               projectile.pause();
               console.log("Projectile status " + projectile.status);
           });

           // 添加客户端发送的”RESUME“事件监听器，将恢复投掷物运动并打印状态。
           Event.addClientListener("RESUME", async (player: Player) => {
               projectile.resume();
               console.log("Projectile status " + projectile.status);
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”PAUSE“事件，发射球
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("PAUSE");
           });

           // 添加一个按键方法：按下按键”3“，向服务端派送一个”RESUME“事件，发射球
           InputUtil.onKeyDown(Keys.Three, () => {
               Event.dispatchToServer("RESUME");
           });
       }
   }
}
```

___

### setRelatedGameObject <Score text="setRelatedGameObject" /> 

• **setRelatedGameObject**(`value`): `void` 

设置新的关联的逻辑对象

#### Parameters

| `value` [`GameObject`](mw.GameObject.md) |  新的关联的逻辑对象，设置后，移动组件会重新生成并附加到此对象上 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement"的代码保存,运行游戏,场景中将会生成5个用于发射的球。给发射器对应事件的委托绑定函数。按下按键”1“，发射投掷物关联的球对象。按下按键”2“，切换投掷物关联的球对象并删除上一个。注意需等球停止后再切换，否则会提前切换投掷物关联的球对象；设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 创建一个模型数组balls和标识curBall。
           let balls = new Array<Model>();
           let curBall = 0;

           // 在前方异步生成5个球，放入数组balls中。
           for (let i = 0;
i < 5;
i++) {
               let ball = await GameObject.asyncSpawn("84121") as Model;
               ball.worldTransform.position = new Vector(200, i * 100, 25);
               ball.name = "ball" + i;
               ball.setCollision(CollisionStatus.QueryCollisionOnly);
               balls.push(ball);
           }

           // 创建投掷物。
           let projectile = new ProjectileMovement(balls[curBall]);

           // 设置初始发射速度为1000。
           projectile.initialSpeed = 1000;

           // 给击中委托绑定一个函数，当击中对象是目标时，播放一个击中特效，0.5s后删除目标。
           projectile.onProjectileHit.add((hitGameObject, HitResult) => {
               EffectService.playAtPosition("99599", HitResult.impactPoint, {scale: new Vector(5, 5, 5)});
           });

           // 添加客户端发送的”LAUNCH“事件监听器，将球右前方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               projectile.launch(new Vector(1, 1, 1));
           });

           // 添加客户端发送的”DESTROY“事件监听器，从数组里面删除球对象，并切换投掷物关联的对象。
           Event.addClientListener("DESTROY", async (player: Player) => {
               console.error("DESTROY");
               let deleteBall = projectile.getRelatedGameObject() as Model;
               let deleteIndex = balls.indexOf(deleteBall);
               balls.splice(deleteIndex, 1);
               if(balls.length > 0) {
                   curBall = (deleteIndex) % balls.length;
                   projectile.setRelatedGameObject(balls[curBall]);
                   deleteBall.destroy();
               } else {
                   projectile.destroy(true);
               }
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射球。
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加一个按键方法：按下按键”2“，向服务端派送一个”DESTROY“事件，切换至下一个球并删除上一个。
           InputUtil.onKeyDown(Keys.Two, () => {
               Event.dispatchToServer("DESTROY");
           });
       }
   }
}
```

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

<span style="font-size: 14px;">
使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ProjectileMovement"的代码保存,运行游戏。按下按键”1“，发射一颗火箭。设置对象代码如下:
</span>

```ts
@Component
export default class Example_ProjectileMovement extends Script {

   protected async onStart(): `Promise`<`void`\> {

       // 下列逻辑在服务端执行
       if(SystemUtil.isServer()) {

           // 在r(2000, 0, 0)生成一个火箭模型。
           let rocket = await GameObject.asyncSpawn("162807") as Model;
           rocket.worldTransform.position = new Vector(2000, 0, 0);

           // 将火箭的碰撞状态修改为无碰撞
           rocket.setCollision(CollisionStatus.Off);

           // 创建投掷物。
           let projectile = new ProjectileMovement(rocket);

           // 设置初始发射速度为1。
           projectile.initialSpeed = 1;
           // 设置最大速度为1000。
           projectile.maxSpeed = 1000;
           // 设置发射加速度为200
           projectile.acceleration = 200;
           // 设置重力缩放为0。
           projectile.gravityScale = 0;
           // 设置投掷物旋转不跟随速度方向。
           projectile.isRotationFollowsVelocity = false;
           // 设置投掷物运动时间10秒。
           projectile.lifeSpan = 10;

           // 添加客户端发送的”LAUNCH“事件监听器，将火箭朝上方发射。
           Event.addClientListener("LAUNCH", async (player: Player) => {
               projectile.launch(new Vector(0, 0, 1));
               // 广播客户端给火箭挂载尾焰特效
               Event.dispatchToAllClient("TAIL", rocket.gameObjectId);
               // 每0.1秒都会给客户端广播火箭当前速度
               let scaleInterval = TimeUtil.setInterval(() => {
                   if(projectile.getVelocity().length > 999) {
                       projectile.setVelocity(Vector.zero);
                       TimeUtil.clearInterval(scaleInterval);
                       rocket.worldTransform.position = new Vector(2000, 0, 0);
                   }
                   Event.dispatchToAllClient("SCALING", rocket.gameObjectId, projectile.getVelocity());
               }, 0.1);
           });
       }

       // 下列逻辑在客户端执行
       if(SystemUtil.isClient()) {
           // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射火箭
           InputUtil.onKeyDown(Keys.One, () => {
               Event.dispatchToServer("LAUNCH");
           });

           // 添加服务端发送的”TAIL“事件监听器，给火箭挂载尾焰。
           Event.addServerListener("TAIL", async (rocketId: string) => {
               let rocket = await GameObject.asyncFindGameObjectById(rocketId);
               if(typeof(rocket.getChildByName("tail")) != "undefined") {
                   return;
               }
               let tail = await GameObject.asyncSpawn("144098") as Effect;
               tail.name = "tail";
               tail.parent = rocket;
               tail.localTransform.position = Vector.zero;
           });

           // 添加服务端发送的”SCALING“事件监听器，根据速度对尾焰进行缩放
           Event.addServerListener("SCALING", async (rocketId: string, velocity: Vector) => {
               let rocket = await GameObject.asyncFindGameObjectById(rocketId);
               let tail = rocket.getChildByName("tail");
               if(tail) {
                   tail.worldTransform.scale = Vector.one.multiply(velocity.length / 250);
               }
           });
       }
   }
}
```
