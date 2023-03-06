[Gameplay](../groups/Gameplay.Gameplay.md) / AbilityObject

# AbilityObject <Badge type="tip" text="Class" /> <Score text="AbilityObject" />

能力对象，提供角色按指定一系列的能力序列进行动画自动切换的功能。
 能力即为角色执行某一个包含一系列状态变更的动作，由一个动画为主体，并在动画播放过程实时控制角色的是否可移动，可跳跃，可转向等状态。

::: warning Precautions

服务端运行，客户端的属性等无法保证实时更新，请在服务端获取相关的参数

:::

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`AbilityObject`**

## Table of contents

| Properties |
| :-----|
| **[onAbilityStateChanged](Gameplay.AbilityObject.md#onabilitystatechanged)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 获取能力状态|
| **[onAbilityStateEnter](Gameplay.AbilityObject.md#onabilitystateenter)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 获取能力状态|
| **[onAbilityStateExit](Gameplay.AbilityObject.md#onabilitystateexit)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 获取能力状态|
| **[onAbilityStatePause](Gameplay.AbilityObject.md#onabilitystatepause)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 获取能力状态|
| **[onAbilityStateResume](Gameplay.AbilityObject.md#onabilitystateresume)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 获取能力状态|

| Accessors |
| :-----|
| **[currentAbilityState](Gameplay.AbilityObject.md#currentabilitystate)**(): [`AbilityState`](Gameplay.AbilityState.md) <br> 获取能力状态|
| **[currentAbilityStateIndex](Gameplay.AbilityObject.md#currentabilitystateindex)**(): `number` <br> 获取当前能力状态索引值|
| **[duration](Gameplay.AbilityObject.md#duration)**(): `number` <br> 获取能力对象执行时间|
| **[isAbilityReady](Gameplay.AbilityObject.md#isabilityready)**(): `boolean` <br> 是否进入Ready状态|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> 获取当前物体是否显示|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[activate](Gameplay.AbilityObject.md#activate)**(): `void` <br> 激活能力|
| **[addAbilityState](Gameplay.AbilityObject.md#addabilitystate)**(`animAssetGUID`: `string`, `duration?`: `number`, `isLoop?`: `boolean`, `canMove?`: `boolean`, `canJump?`: `boolean`, `moveControl?`: [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md)): `number` <br> 添加能力状态|
| **[bindPlayer](Gameplay.AbilityObject.md#bindplayer)**(`player`: [`Player`](Gameplay.Player.md)): `boolean` <br> 绑定玩家，特指使用该能力对象的玩家|
| **[deactivate](Gameplay.AbilityObject.md#deactivate)**(): `void` <br> 失活能力|
| **[getAbilityStateByIndex](Gameplay.AbilityObject.md#getabilitystatebyindex)**(`Index`: `number`): [`AbilityState`](Gameplay.AbilityState.md) <br> 根据索引获取能力状态|
| **[getAllAbilityState](Gameplay.AbilityObject.md#getallabilitystate)**(): [`AbilityState`](Gameplay.AbilityState.md)[] <br> 获取所有能力状态|
| **[pause](Gameplay.AbilityObject.md#pause)**(): `void` <br> 暂停能力|
| **[removeAbilityState](Gameplay.AbilityObject.md#removeabilitystate)**(`Index`: `number`): `boolean` <br> 删除添加状态|
| **[resume](Gameplay.AbilityObject.md#resume)**(): `void` <br> 唤醒能力|
| **[switchTo](Gameplay.AbilityObject.md#switchto)**(`StateIndex`: `number`): `void` <br> 跳转能力释放阶段|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onAbilityStateChanged <Score text="onAbilityStateChanged" /> 

• **onAbilityStateChanged**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

技能状态改变时发送事件

___

### onAbilityStateEnter <Score text="onAbilityStateEnter" /> 

• **onAbilityStateEnter**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

技能状态进入时发送事件

___

### onAbilityStateExit <Score text="onAbilityStateExit" /> 

• **onAbilityStateExit**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

技能状态退出时发送事件

___

### onAbilityStatePause <Score text="onAbilityStatePause" /> 

• **onAbilityStatePause**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

技能状态暂停时发送事件

___

### onAbilityStateResume <Score text="onAbilityStateResume" /> 

• **onAbilityStateResume**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

技能状态继续时发送事件

## Accessors

### currentAbilityState <Score text="currentAbilityState" /> 

• `get` **currentAbilityState**(): [`AbilityState`](Gameplay.AbilityState.md) 

获取能力状态


#### Returns

[`AbilityState`](Gameplay.AbilityState.md)

获取能力状态

___

### currentAbilityStateIndex <Score text="currentAbilityStateIndex" /> 

• `get` **currentAbilityStateIndex**(): `number` <Badge type="tip" text="other" />

获取当前能力状态索引值

调用端自动广播

#### Returns

`number`

索引

___

### duration <Score text="duration" /> 

• `get` **duration**(): `number` 

获取能力对象执行时间


#### Returns

`number`

获取能力对象执行时间


### isAbilityReady <Score text="isAbilityReady" /> 

• `get` **isAbilityReady**(): `boolean` <Badge type="tip" text="server" />

是否进入Ready状态


#### Returns

`boolean`

true或false


## Methods

### activate <Score text="activate" /> 

• **activate**(): `void` <Badge type="tip" text="other" />

激活能力

调用端自动广播


___

### addAbilityState <Score text="addAbilityState" /> 

• **addAbilityState**(`animAssetGUID`, `duration?`, `isLoop?`, `canMove?`, `canJump?`, `moveControl?`): `number` <Badge type="tip" text="other" />

添加能力状态

调用端自动广播

使用示例: 如下示例展示此方法的参数的含义和使用方法
```ts
const abilityObj = Core.GameObject.find("");
abilityObj.addAbilityState("<动画资源 id>", 0.4, false, false, false, Gameplay.MoveControlMode.null);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animAssetGUID` | `string` |  动画资源 ，项目未引用过的资源导入会失败 |
| `duration?` | `number` |  持续时间 default: 0.033 |
| `isLoop?` | `boolean` |  是否循环 default: false |
| `canMove?` | `boolean` |  可移动 default: false |
| `canJump?` | `boolean` |  可跳跃 default: false |
| `moveControl?` | [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) |  移动控制模式 default: Gameplay.MoveControlMode.null |

#### Returns

`number`

服务端调用成功则返回当前技能索引，否则返回-1


### bindPlayer <Score text="bindPlayer" /> 

• **bindPlayer**(`player`): `boolean` <Badge type="tip" text="other" />

绑定玩家，特指使用该能力对象的玩家

::: warning Precautions

单端调用即可，不需要重复调用。

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  需要使用技能的角色 |

#### Returns

`boolean`

当有对内部玩家进行赋值时，返回 true


### deactivate <Score text="deactivate" /> 

• **deactivate**(): `void` <Badge type="tip" text="other" />

失活能力

调用端自动广播



### getAbilityStateByIndex <Score text="getAbilityStateByIndex" /> 

• **getAbilityStateByIndex**(`Index`): [`AbilityState`](Gameplay.AbilityState.md) 

根据索引获取能力状态


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 能力状态序号 |

#### Returns

[`AbilityState`](Gameplay.AbilityState.md)

根据索引获取能力状态

___

### getAllAbilityState <Score text="getAllAbilityState" /> 

• **getAllAbilityState**(): [`AbilityState`](Gameplay.AbilityState.md)[] 

获取所有能力状态


#### Returns

[`AbilityState`](Gameplay.AbilityState.md)[]

能力状态数组


### pause <Score text="pause" /> 

• **pause**(): `void` <Badge type="tip" text="other" />

暂停能力

调用端自动广播



### removeAbilityState <Score text="removeAbilityState" /> 

• **removeAbilityState**(`Index`): `boolean` <Badge type="tip" text="other" />

删除添加状态

调用端自动广播

::: warning Precautions

激活状态、未初始化状态、状态个数超过最大值调用失败

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 状态序号 |

#### Returns

`boolean`

成功返回true，失败返回false

___

### resume <Score text="resume" /> 

• **resume**(): `void` <Badge type="tip" text="other" />

唤醒能力

调用端自动广播



### switchTo <Score text="switchTo" /> 

• **switchTo**(`StateIndex`): `void` <Badge type="tip" text="other" />

跳转能力释放阶段

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StateIndex` | `number` | 能力释放阶段序号 |

