[GAMEPLAY](../groups/Core.GAMEPLAY.md) / ObjectLauncher

# ObjectLauncher <Badge type="tip" text="Class" /> <Score text="ObjectLauncher" />

投掷物发射器，作为发射终端，维护投掷物发射相关的参数，发射的投掷物只在客户端存在，且以主控端的事件为主

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`ObjectLauncher`**

## Table of contents

| Properties |
| :-----|
| **[onProjectileHit](mw.ObjectLauncher.md#onprojectilehit)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md), `hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\> <br> 投掷物击中物体时触发绑定函数|
| **[onProjectileHomingFailed](mw.ObjectLauncher.md#onprojectilehomingfailed)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\> <br> 投掷物追踪目标失败(即为被销毁时)触发绑定函数|
| **[onProjectileLifeEnd](mw.ObjectLauncher.md#onprojectilelifeend)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\> <br> 投掷物生命周期结束（即速度降为0、LifeSpan 到期）时触发绑定函数|
| **[onProjectileLifeStart](mw.ObjectLauncher.md#onprojectilelifestart)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\> <br> 投掷物生成实例时触发绑定函数，此时实例还没有开始移动|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[acceleration](mw.ObjectLauncher.md#acceleration)**(): `number` <br> 加速度值，正值加速，负值减速|
| **[capsuleHalfLength](mw.ObjectLauncher.md#capsulehalflength)**(): `number` <br> 投掷物检测碰撞的长度|
| **[capsuleRadius](mw.ObjectLauncher.md#capsuleradius)**(): `number` <br> 投掷物检测碰撞的半径|
| **[collisionVelocityRetention](mw.ObjectLauncher.md#collisionvelocityretention)**(): `number` <br> 投掷物每次执行碰撞后速度衰减的系数，系数为正，每次碰撞后速度减少，系数为负，每次碰撞后速度增加。|
| **[gravityScale](mw.ObjectLauncher.md#gravityscale)**(): `number` <br> 重力值，正值重力向下，负值重力向上|
| **[initialSpeed](mw.ObjectLauncher.md#initialspeed)**(): `number` <br> 投掷物发射的初始速度|
| **[isRotationFollowsVelocity](mw.ObjectLauncher.md#isrotationfollowsvelocity)**(): `boolean` <br> 投掷物操作的对象的朝向是否跟随速度方向|
| **[isShouldBounce](mw.ObjectLauncher.md#isshouldbounce)**(): `boolean` <br> 投掷物碰撞后是否反弹，false为穿透|
| **[isShouldReplicateDelegates](mw.ObjectLauncher.md#isshouldreplicatedelegates)**(): `boolean` <br> 是否应该将事件广播到所有客户端|
| **[lifeSpan](mw.ObjectLauncher.md#lifespan)**(): `number` <br> 投掷物运动持续时间，超出后投掷物不再运动。|
| **[maxSpeed](mw.ObjectLauncher.md#maxspeed)**(): `number` <br> 投掷物发射后的最大速度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[predictedTrajectory](mw.ObjectLauncher.md#predictedtrajectory)**(`startLocation`: [`Vector`](mw.Vector.md), `startDirection`: [`Vector`](mw.Vector.md), `density`: `number`, `duration`: `number`): [`Vector`](mw.Vector.md)[] <br> 获取路径预测的轨迹|
| **[spawnProjectileInstanceLaunch](mw.ObjectLauncher.md#spawnprojectileinstancelaunch)**(`childObjectId`: `string`, `startLocation?`: [`Vector`](mw.Vector.md), `direction?`: [`Vector`](mw.Vector.md), `isAllClientLaunch?`: `boolean`): [`ProjectileInst`](mw.ProjectileInst.md) <br> 发射子弹实例|
| **[spawnProjectileInstanceLaunchToTarget](mw.ObjectLauncher.md#spawnprojectileinstancelaunchtotarget)**(`childObjectId`: `string`, `target`: [`GameObject`](mw.GameObject.md), `targetingAcceleration?`: `number`, `startLocation?`: [`Vector`](mw.Vector.md), `direction?`: [`Vector`](mw.Vector.md), `isAllClientLaunch?`: `boolean`): [`ProjectileInst`](mw.ProjectileInst.md) <br> 发射子弹实例|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### onProjectileHit <Score text="onProjectileHit" /> 

• **onProjectileHit**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md), `hitGameObject`: [`GameObject`](mw.GameObject.md), `hitResult`: [`HitResult`](mw.HitResult.md)) => `void`\>

投掷物击中物体时触发绑定函数

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectileLauncher.onProjectileHit.add((projectile: ProjectileInst, hitGameObject: mw.GameObject, hitResult: mw.HitResult) => {
    // projectile: 投掷物实例
    // hitGameObject: 投掷物击中的物体
    // hitResult: 碰撞击中信息
})
```

___

### onProjectileHomingFailed <Score text="onProjectileHomingFailed" /> 

• **onProjectileHomingFailed**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\>

投掷物追踪目标失败(即为被销毁时)触发绑定函数

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectileLauncher.onProjectileHomingFailed.add((projectile: ProjectileInst) => {
    // projectile: 投掷物实例
})
```

___

### onProjectileLifeEnd <Score text="onProjectileLifeEnd" /> 

• **onProjectileLifeEnd**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\>

投掷物生命周期结束（即速度降为0、LifeSpan 到期）时触发绑定函数

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数；客户端添加的回调，在发射双端对象时，此委托触发时无法保证实例是否依然存在

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectileLauncher.onProjectileLifeEnd.add((projectile: ProjectileInst) => {
    // projectile: 投掷物实例
})
```

___

### onProjectileLifeStart <Score text="onProjectileLifeStart" /> 

• **onProjectileLifeStart**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`projectile`: [`ProjectileInst`](mw.ProjectileInst.md)) => `void`\>

投掷物生成实例时触发绑定函数，此时实例还没有开始移动

::: warning Precautions

所有投掷物都是使用的同一个回调，请不要循环添加事件绑定函数

:::

使用示例: 如下示例展示此委托的参数的含义和使用方法
```ts
projectile.onProjectileLifeStart.add((projectile: ProjectileInst) => {
    // projectile: 生成的示例，用户可以操作这个实例的属性和附着对象
})
```

## Accessors

### acceleration <Score text="acceleration" /> 

• `get` **acceleration**(): `number`

加速度值，正值加速，负值减速

#### Returns

`number`

• `set` **acceleration**(`value`): `void`

加速度值，正值加速，负值减速

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### capsuleHalfLength <Score text="capsuleHalfLength" /> 

• `get` **capsuleHalfLength**(): `number`

投掷物检测碰撞的长度

#### Returns

`number`

• `set` **capsuleHalfLength**(`value`): `void`

投掷物检测碰撞的长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### capsuleRadius <Score text="capsuleRadius" /> 

• `get` **capsuleRadius**(): `number`

投掷物检测碰撞的半径

#### Returns

`number`

• `set` **capsuleRadius**(`value`): `void`

投掷物检测碰撞的半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### collisionVelocityRetention <Score text="collisionVelocityRetention" /> 

• `get` **collisionVelocityRetention**(): `number`

投掷物每次执行碰撞后速度衰减的系数，系数为正，每次碰撞后速度减少，系数为负，每次碰撞后速度增加。

#### Returns

`number`

• `set` **collisionVelocityRetention**(`value`): `void`

投掷物每次执行碰撞后速度衰减的系数，系数为正，每次碰撞后速度减少，系数为负，每次碰撞后速度增加。

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### gravityScale <Score text="gravityScale" /> 

• `get` **gravityScale**(): `number`

重力值，正值重力向下，负值重力向上

#### Returns

`number`

• `set` **gravityScale**(`value`): `void`

重力值，正值重力向下，负值重力向上

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### initialSpeed <Score text="initialSpeed" /> 

• `get` **initialSpeed**(): `number`

投掷物发射的初始速度

#### Returns

`number`

• `set` **initialSpeed**(`value`): `void`

投掷物发射的初始速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### isRotationFollowsVelocity <Score text="isRotationFollowsVelocity" /> 

• `get` **isRotationFollowsVelocity**(): `boolean`

投掷物操作的对象的朝向是否跟随速度方向

#### Returns

`boolean`

• `set` **isRotationFollowsVelocity**(`value`): `void`

投掷物操作的对象的朝向是否跟随速度方向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### isShouldBounce <Score text="isShouldBounce" /> 

• `get` **isShouldBounce**(): `boolean`

投掷物碰撞后是否反弹，false为穿透

#### Returns

`boolean`

• `set` **isShouldBounce**(`value`): `void`

投掷物碰撞后是否反弹，false为穿透

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### isShouldReplicateDelegates <Score text="isShouldReplicateDelegates" /> 

• `get` **isShouldReplicateDelegates**(): `boolean`

是否应该将事件广播到所有客户端

#### Returns

`boolean`

• `set` **isShouldReplicateDelegates**(`value`): `void`

是否应该将事件广播到所有客户端

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |


___

### lifeSpan <Score text="lifeSpan" /> 

• `get` **lifeSpan**(): `number`

投掷物运动持续时间，超出后投掷物不再运动。

#### Returns

`number`

• `set` **lifeSpan**(`value`): `void`

投掷物运动持续时间，超出后投掷物不再运动。值小于等于 0 时清空延时

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### maxSpeed <Score text="maxSpeed" /> 

• `get` **maxSpeed**(): `number`

投掷物发射后的最大速度

#### Returns

`number`

• `set` **maxSpeed**(`value`): `void`

投掷物发射后的最大速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |



## Methods
___

### predictedTrajectory <Score text="predictedTrajectory" /> 

• **predictedTrajectory**(`startLocation`, `startDirection`, `density`, `duration`): [`Vector`](mw.Vector.md)[] 

获取路径预测的轨迹


::: warning Precautions

如果返回的数组长度为1，可能投掷物被卡住了

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startLocation` | [`Vector`](mw.Vector.md) |  发射起始位置 |
| `startDirection` | [`Vector`](mw.Vector.md) |  发射起始方向 |
| `density` | `number` |  预测结果的点密度（个/秒），值越大路径点越细，性能消耗越大 |
| `duration` | `number` |  预测的时长 |

#### Returns

[`Vector`](mw.Vector.md)[]

路径轨迹点，预测结果的点的最大数量为 density * duration + 1

___

### spawnProjectileInstanceLaunch <Score text="spawnProjectileInstanceLaunch" /> 

• **spawnProjectileInstanceLaunch**(`childObjectId`, `startLocation?`, `direction?`, `isAllClientLaunch?`): [`ProjectileInst`](mw.ProjectileInst.md) 

发射子弹实例

::: warning Precautions

发射后再更新其他属性无法对本次发射的子弹产生影响

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `childObjectId` | `string` |  发射对象的 id |
| `startLocation?` | [`Vector`](mw.Vector.md) |  发射起始位置 default: 发射对象的位置 |
| `direction?` | [`Vector`](mw.Vector.md) |  发射起始方向 default: 发射对象的正前方 |
| `isAllClientLaunch?` | `boolean` |  仅在发射单客户端对象是有效, 是否广播到所有客户端发射实例 default: false |

#### Returns

[`ProjectileInst`](mw.ProjectileInst.md)

投掷物实例

___

### spawnProjectileInstanceLaunchToTarget <Score text="spawnProjectileInstanceLaunchToTarget" /> 

• **spawnProjectileInstanceLaunchToTarget**(`childObjectId`, `target`, `targetingAcceleration?`, `startLocation?`, `direction?`, `isAllClientLaunch?`): [`ProjectileInst`](mw.ProjectileInst.md) 

发射子弹实例

::: warning Precautions

发射后再更新其他属性无法对本次发射的子弹产生影响;
当在服务端调用方法广播，追踪模式发射时，会自带一个追踪的加速度，速度表现和预期会有差异

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `childObjectId` | `string` |  发射对象的 id |
| `target` | [`GameObject`](mw.GameObject.md) |  追踪目标 |
| `targetingAcceleration?` | `number` |  追踪加速度 default: 1000 |
| `startLocation?` | [`Vector`](mw.Vector.md) |  发射起始位置 default: 发射对象的位置 |
| `direction?` | [`Vector`](mw.Vector.md) |  发射起始方向 default: 发射对象的正前方 |
| `isAllClientLaunch?` | `boolean` |  仅在发射单客户端对象是有效, 是否广播到所有客户端发射实例 default: false |

#### Returns

[`ProjectileInst`](mw.ProjectileInst.md)

投掷物实例
