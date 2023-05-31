[Physics](../groups/Physics.Physics.md) / Impulse

# Impulse <Badge type="tip" text="Class" /> <Score text="Impulse" />

冲量对象

使用示例:创建一个名为"ImpulseSample"的脚本,放置在对象管理器中冲量对象的子级,将冲量对象相对缩放改为（5.00,5.00,0.50）,放置在合适的位置,可以在与冲量对象重叠区域放置一个Cube,Cube大小缩放与冲量对象相同.打开脚本,输入以下代码保存,运行游戏,你将在场景中看到人物在Cube上蹦床的效果,代码如下:
（示例代码中impulseId = "1602E908"中的1602E908替换方式为右键冲量对象，复制对象ID。更换为你的冲量对象ID即可）
```typescript
@Core.Class
export default class ImpulseSample extends Core.Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        // 先设置为 false，玩家进入范围后再设置为 true，会有玩家突然凭空被弹开的效果
        impulse.enable = true;
        // 绝对冲量应用时会先清空物体自身速度，相对冲量会将冲量和物体当前速度叠加
        impulse.impulseType = Gameplay.ImpulseType.Absolute;
        // 只有为矢量力的情况下，impulseVector 属性才有意义
        impulse.impulseForceType = Gameplay.ImpulseForceType.VectorForce;
        // 设置为自定义的带方向的冲量值
        impulse.impulseVector = new Type.Vector(0, 0, 2000);
        impulse.onImpulseEnter.add(()=>{
             console.log("Impulse onImpulseEnter")
        })
    }
}
```ts

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Impulse`**

## Table of contents

| Properties |
| :-----|
| **[onImpulseEnter](Gameplay.Impulse.md#onimpulseenter)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 发生冲量碰撞后的回调函数|

| Accessors |
| :-----|
| **[enable](Gameplay.Impulse.md#enable)**(): `boolean` <br> 获取是否启用冲量|
| **[impulseForceType](Gameplay.Impulse.md#impulseforcetype)**(): [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md) <br> 获取当前冲量力类型|
| **[impulseRadialForce](Gameplay.Impulse.md#impulseradialforce)**(): `number` <br> 获取径向力的冲量值|
| **[impulseType](Gameplay.Impulse.md#impulsetype)**(): [`ImpulseType`](../enums/Gameplay.ImpulseType.md) <br> 获取冲量应用方式，绝对或相对|
| **[impulseVector](Gameplay.Impulse.md#impulsevector)**(): [`Vector`](Type.Vector.md) <br> 获取矢量力的冲量向量|


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
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|


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
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
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
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
:::


## Properties

### onImpulseEnter <Score text="onImpulseEnter" /> 

• **onImpulseEnter**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

发生冲量碰撞后的回调函数

使用示例:创建一个名为"ImpulseOnEnterSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果,代码如下:
```typescript
@Core.Class
export default class ImpulseOnEnterSample extends Core.Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        impulse.onImpulseEnter.add(()=>{
             console.log("Impulse onImpulseEnter")
        })
    }
}
```

## Accessors

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean` 

获取是否启用冲量


#### Returns

`boolean`

是否启用冲量

• `set` **enable**(`impulseEnabled`): `void` <Badge type="tip" text="other" />

设置是否启用冲量，禁用状态下，不会应用冲量到物体上

调用端自动广播

使用示例:创建一个名为"ImpulseSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果,代码如下:
```typescript
@Core.Class
export default class ImpulseSample extends Core.Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        // 先设置为 false，玩家进入范围后再设置为 true，会有玩家突然凭空被弹开的效果
        impulse.enable = true;
    }
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseEnabled` | `boolean` |  是否启用冲量的应用，设置为 false 后依然会有碰撞事件，但不会应用冲量 |



### impulseForceType <Score text="impulseForceType" /> 

• `get` **impulseForceType**(): [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md) 

获取当前冲量力类型


#### Returns

[`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md)

冲量力类型

• `set` **impulseForceType**(`impulseCollisionType`): `void` <Badge type="tip" text="other" />

设置冲量力类型。使用示例详见属性 impulseRadialForce 和 impulseVector 中示例代码。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseCollisionType` | [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md) |  冲量力类型 |


___

### impulseRadialForce <Score text="impulseRadialForce" /> 

• `get` **impulseRadialForce**(): `number` 

获取径向力的冲量值


#### Returns

`number`

径向力时的冲量值

• `set` **impulseRadialForce**(`value`): `void` <Badge type="tip" text="other" />

设置径向力的冲量值

调用端自动广播

使用示例:创建一个名为"ImpulseRadialForceSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果，玩家走到蹦床上被飞的距离相比默认情况时有变化，代码如下:
```typescript
@Core.Class
export default class ImpulseRadialForceSample extends Core.Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        // 只有为径向力的情况下，impulseRadialForce 属性才有意义
        impulse.impulseForceType = Gameplay.ImpulseForceType.RadialForce;
        impulse.impulseRadialForce = 500;
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### impulseType <Score text="impulseType" /> 

• `get` **impulseType**(): [`ImpulseType`](../enums/Gameplay.ImpulseType.md) 

获取冲量应用方式，绝对或相对


#### Returns

[`ImpulseType`](../enums/Gameplay.ImpulseType.md)

当前冲量应用方式

• `set` **impulseType**(`impulseType`): `void` <Badge type="tip" text="other" />

设置冲量应用方式

::: warning Precautions

在编辑器中使用会自动更新箭头方向

:::

调用端自动广播

使用示例:创建一个名为"ImpulseTypeSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果，玩家走到蹦床上被弹起的高度有变化，代码如下:
```ts
@Core.Class
export default class ImpulseTypeSample extends Core.Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        // 绝对冲量应用时会先清空物体自身速度，相对冲量会将冲量和物体当前速度叠加
        impulse.impulseType = Gameplay.ImpulseType.Absolute;
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseType` | [`ImpulseType`](../enums/Gameplay.ImpulseType.md) |  冲量应用方式 |


___

### impulseVector <Score text="impulseVector" /> 

• `get` **impulseVector**(): [`Vector`](Type.Vector.md) 

获取矢量力的冲量向量


#### Returns

[`Vector`](Type.Vector.md)

当前冲量类型

• `set` **impulseVector**(`vec`): `void` <Badge type="tip" text="other" />

设置矢量力的冲量向量

调用端自动广播

使用示例:创建一个名为"ImpulseVectorSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果，玩家走到蹦床上被弹起的高度有变化，代码如下:
```typescript
@Core.Class
export default class ImpulseVectorSample extends Core.Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await Core.GameObject.asyncFind(this.impulseId)) as Gameplay.Impulse;
        // 只有为矢量力的情况下，impulseVector 属性才有意义
        impulse.impulseForceType = Gameplay.ImpulseForceType.VectorForce;
        // 设置为自定义的带方向的冲量值
        impulse.impulseVector = new Type.Vector(0, 0, 2000);
    }
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](Type.Vector.md) |  冲量力向量 |



## Methods