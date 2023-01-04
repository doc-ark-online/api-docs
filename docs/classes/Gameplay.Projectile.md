[Gameplay](../modules/Gameplay.Gameplay.md) / Projectile

# Projectile <Badge type="tip" text="Class" />

**`Description`**

投掷物逻辑对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Projectile`**

## Table of contents

| Properties |
| :-----|
| **[onProjectileBeginOverlap](Gameplay.Projectile.md#onprojectilebeginoverlap)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`, `fromSweep`: `boolean`, `sweepResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\> <br> 当投掷物与其他物体开始接触重叠时执行绑定函数|
| **[onProjectileBounce](Gameplay.Projectile.md#onprojectilebounce)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`impactResult`: [`HitResult`](Gameplay.HitResult.md), `impactVelocity`: [`Vector`](Type.Vector.md), `bounceNum`: `number`) => `void`\> <br> 当投掷物发生弹跳时执行绑定函数|
| **[onProjectileEndOverlap](Gameplay.Projectile.md#onprojectileendoverlap)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`) => `void`\> <br> 当投掷物与其他物体结束接触重叠时执行绑定函数|
| **[onProjectileHit](Gameplay.Projectile.md#onprojectilehit)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `normalImpulse`: [`Vector`](Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\> <br> 当投掷物发生碰撞时执行绑定函数|
| **[onProjectileInterrupt](Gameplay.Projectile.md#onprojectileinterrupt)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 当投掷物自动终止时执行绑定函数|

| Accessors |
| :-----|
| **[collisionLength](Gameplay.Projectile.md#collisionlength)**(): `number` <br> 包围盒高度|
| **[collisionRadius](Gameplay.Projectile.md#collisionradius)**(): `number` <br> 包围盒半径|
| **[flyRange](Gameplay.Projectile.md#flyrange)**(): `number` <br> 飞行距离|
| **[gravityScale](Gameplay.Projectile.md#gravityscale)**(): `number` <br> 重力缩放值|
| **[initialSpeed](Gameplay.Projectile.md#initialspeed)**(): `number` <br> 初始速度|
| **[maxBounceCount](Gameplay.Projectile.md#maxbouncecount)**(): `number` <br> 最大弹跳|
| **[simulatePhysics](Gameplay.Projectile.md#simulatephysics)**(): `boolean` <br> 模拟物理|

| Methods |
| :-----|
| **[bindPlayer](Gameplay.Projectile.md#bindplayer)**([`Player`](Gameplay.Player.md)): `boolean` <br> 绑定玩家，需要使用该接口在Server绑定具体的Player|
| **[init](Gameplay.Projectile.md#init)**(`number`, `number`, `number`, `number`, `number`, `boolean`): `void` <br> 子弹初始化,只有在客户端调用时会自动绑定当前角色|
| **[launch](Gameplay.Projectile.md#launch)**(): `void` <br> 发射投掷物，将目前射程清零|
| **[pause](Gameplay.Projectile.md#pause)**(): `void` <br> 暂停投掷物|
| **[resume](Gameplay.Projectile.md#resume)**(): `void` <br> 唤醒投掷物|

## Properties

### onProjectileBeginOverlap

• **onProjectileBeginOverlap**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`, `fromSweep`: `boolean`, `sweepResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\>

**`Description`**

当投掷物与其他物体开始接触重叠时执行绑定函数

___

### onProjectileBounce

• **onProjectileBounce**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`impactResult`: [`HitResult`](Gameplay.HitResult.md), `impactVelocity`: [`Vector`](Type.Vector.md), `bounceNum`: `number`) => `void`\>

**`Description`**

当投掷物发生弹跳时执行绑定函数

___

### onProjectileEndOverlap

• **onProjectileEndOverlap**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `otherBodyIndex`: `number`) => `void`\>

**`Description`**

当投掷物与其他物体结束接触重叠时执行绑定函数

___

### onProjectileHit

• **onProjectileHit**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<(`hitGameObject`: `GameObject`, `normalImpulse`: [`Vector`](Type.Vector.md), `hitResult`: [`HitResult`](Gameplay.HitResult.md)) => `void`\>

**`Description`**

当投掷物发生碰撞时执行绑定函数

___

### onProjectileInterrupt

• **onProjectileInterrupt**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

当投掷物自动终止时执行绑定函数

## Accessors

### collisionLength

• `get` **collisionLength**(): `number`

**`Description`**

包围盒高度

#### Returns

`number`

• `set` **collisionLength**(`length`): `void`

**`Description`**

包围盒高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`void`

___

### collisionRadius

• `get` **collisionRadius**(): `number`

**`Description`**

包围盒半径

#### Returns

`number`

• `set` **collisionRadius**(`radius`): `void`

**`Description`**

包围盒半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

___

### flyRange

• `get` **flyRange**(): `number`

**`Description`**

飞行距离

#### Returns

`number`

• `set` **flyRange**(`range`): `void`

**`Description`**

飞行距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `number` |

#### Returns

`void`


### gravityScale

• `get` **gravityScale**(): `number`

**`Description`**

重力缩放值

#### Returns

`number`

• `set` **gravityScale**(`scale`): `void`

**`Description`**

重力缩放值

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`void`


### initialSpeed

• `get` **initialSpeed**(): `number`

**`Description`**

初始速度

#### Returns

`number`

• `set` **initialSpeed**(`value`): `void`

**`Description`**

初始速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`


### maxBounceCount

• `get` **maxBounceCount**(): `number`

**`Description`**

最大弹跳

#### Returns

`number`

• `set` **maxBounceCount**(`bounceCount`): `void`

**`Description`**

最大弹跳

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounceCount` | `number` |

#### Returns

`void`


### simulatePhysics

• `get` **simulatePhysics**(): `boolean`

**`Description`**

模拟物理

#### Returns

`boolean`

• `set` **simulatePhysics**(`isSimulated`): `void`

**`Description`**

模拟物理

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSimulated` | `boolean` |

#### Returns

`void`


## Methods

### bindPlayer

▸ **bindPlayer**(`player`): `boolean`

**`Description`**

绑定玩家，需要使用该接口在Server绑定具体的Player

**`Precautions`**

单端调用即可，不需要重复调用。

**`Effect`**

客户端调用自动同步至服务端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  需要使用投掷物的角色 |

#### Returns

`boolean`

当有对内部玩家进行赋值时，返回 true


### init

▸ **init**(`Speed?`, `CollisionLength?`, `CollisionRadius?`, `FlyRange?`, `GravityScale?`, `SimulatePhysics?`): `void`

**`Description`**

子弹初始化,只有在客户端调用时会自动绑定当前角色

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Speed?` | `number` |  初始速度 default: 1000 |
| `CollisionLength?` | `number` |  碰撞胶囊长度 default: 0.5 |
| `CollisionRadius?` | `number` |  碰撞胶囊半径 default: 0.5 |
| `FlyRange?` | `number` |  飞行范围 default: 10000 |
| `GravityScale?` | `number` |  重力设置 default: 0 |
| `SimulatePhysics?` | `boolean` |  是否模拟物理 default: false |

#### Returns

`void`


### launch

▸ **launch**(): `void`

**`Description`**

发射投掷物，将目前射程清零

**`Precautions`**

请先 bindPlayer 后再调用
在客户端调用时，如果已经调用过init同时更新了当前player，此函数在一定时间内调用会因RPC延时导致失败

**`Effect`**

客户端调用自动广播

#### Returns

`void`

▸ **launch**(`fromLoc`, `toLoc`): `void`

**`Description`**

发射投掷物，将目前射程清零

**`Precautions`**

- 请先 bindPlayer 后再调用
 - 在客户端调用时，如果已经调用过init同时更新了当前player，此函数在一定时间内调用会因RPC延时导致失败
 - 在关闭物理模拟时，会限制最大飞行距离为起点和终点之间的距离；开启物理后，将不限制距离，请注意及时手动停止

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromLoc` | [`Vector`](Type.Vector.md) |  发射点 |
| `toLoc` | [`Vector`](Type.Vector.md) |  目标点（开启物理，有重力时，投掷物呈抛物线运动，不保证能到达目标点） |

#### Returns

`void`


### pause

▸ **pause**(): `void`

**`Description`**

暂停投掷物

**`Effect`**

客户端调用自动广播

#### Returns

`void`


### resume

▸ **resume**(): `void`

**`Description`**

唤醒投掷物

**`Effect`**

客户端调用自动广播

#### Returns

`void`
