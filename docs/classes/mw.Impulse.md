[Physics](../groups/Core.Physics.md) / Impulse

# Impulse <Badge type="tip" text="Class" /> <Score text="Impulse" />

冲量对象

使用示例:创建一个名为"ImpulseSample"的脚本,放置在对象管理器中冲量对象的子级,将冲量对象相对缩放改为（5.00,5.00,0.50）,放置在合适的位置,可以在与冲量对象重叠区域放置一个Cube,Cube大小缩放与冲量对象相同.打开脚本,输入以下代码保存,运行游戏,你将在场景中看到人物在Cube上蹦床的效果,代码如下:
（示例代码中impulseId = "1602E908"中的1602E908替换方式为右键冲量对象，复制对象ID。更换为你的冲量对象ID即可）
```ts
@Core.Class
export default class ImpulseSample extends Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
        // 先设置为 false，玩家进入范围后再设置为 true，会有玩家突然凭空被弹开的效果
        impulse.enable = true;
        // 绝对冲量应用时会先清空物体自身速度，相对冲量会将冲量和物体当前速度叠加
        impulse.impulseType = ImpulseType.Absolute;
        // 只有为矢量力的情况下，impulseVector 属性才有意义
        impulse.impulseForceType = ImpulseForceType.VectorForce;
        // 设置为自定义的带方向的冲量值
        impulse.impulseVector = new Vector(0, 0, 2000);
        impulse.onImpulseEnter.add(()=>{
             console.log("Impulse onImpulseEnter")
        })
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Impulse`**

## Table of contents

| Properties |
| :-----|
| **[onImpulseEnter](mw.Impulse.md#onimpulseenter)**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md) <br> 发生冲量碰撞后的回调函数|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
| **[scriptNumberPropPathMap](mw.GameObject.md#scriptnumberproppathmap)**: `any` <br> |
| **[scriptPropPathNumberMap](mw.GameObject.md#scriptproppathnumbermap)**: `any` <br> |
:::


| Accessors |
| :-----|
| **[enable](mw.Impulse.md#enable)**(): `boolean` <br> 获取是否启用冲量|
| **[impulseForceType](mw.Impulse.md#impulseforcetype)**(): [`ImpulseForceType`](../enums/mw.ImpulseForceType.md) <br> 获取当前冲量力类型|
| **[impulseRadialForce](mw.Impulse.md#impulseradialforce)**(): `number` <br> 获取径向力的冲量值|
| **[impulseType](mw.Impulse.md#impulsetype)**(): [`ImpulseType`](../enums/mw.ImpulseType.md) <br> 获取冲量应用方式，绝对或相对|
| **[impulseVector](mw.Impulse.md#impulsevector)**(): [`Vector`](mw.Vector.md) <br> 获取矢量力的冲量向量|


::: details 点击查看继承
| Accessors |
| :-----|
| **[guid](mw.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isLocked](mw.GameObject.md#islocked)**(): `boolean` <br> 获取对象是否锁定|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[isStatic](mw.GameObject.md#isstatic)**(): `boolean` <br> 获取对象是否静态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[sourceAssetGuid](mw.GameObject.md#sourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[useUpdate](mw.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[follow](mw.GameObject.md#follow)**(`Target`: [`GameObject`](mw.GameObject.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[getBoundingBoxSize](mw.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](mw.Vector.md), `BoxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](mw.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): `undefined` \| [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoxCenter](mw.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScriptByGuid](mw.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[navigateTo](mw.GameObject.md#navigateto)**(`Location`: [`Vector`](mw.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 向目标点进行寻路移动|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[stopFollow](mw.GameObject.md#stopfollow)**(): `void` <br> 停止跟随|
| **[stopNavigateTo](mw.GameObject.md#stopnavigateto)**(): `void` <br> 停止向目标点寻路移动|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`[spawn](mw.GameObject.md#spawn)Info`): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### onImpulseEnter <Score text="onImpulseEnter" /> 

• **onImpulseEnter**: [`MulticastGameObjectDelegate`](mw.MulticastGameObjectDelegate.md)

发生冲量碰撞后的回调函数

使用示例:创建一个名为"ImpulseOnEnterSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果,代码如下:
```ts
@Core.Class
export default class ImpulseOnEnterSample extends Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
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
```ts
@Core.Class
export default class ImpulseSample extends Script {
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
        // 先设置为 false，玩家进入范围后再设置为 true，会有玩家突然凭空被弹开的效果
        impulse.enable = true;
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseEnabled` | `boolean` |  是否启用冲量的应用，设置为 false 后依然会有碰撞事件，但不会应用冲量 |


___

### impulseForceType <Score text="impulseForceType" /> 

• `get` **impulseForceType**(): [`ImpulseForceType`](../enums/mw.ImpulseForceType.md) 

获取当前冲量力类型


#### Returns

[`ImpulseForceType`](../enums/mw.ImpulseForceType.md)

冲量力类型

• `set` **impulseForceType**(`impulseCollisionType`): `void` <Badge type="tip" text="other" />

设置冲量力类型。使用示例详见属性 impulseRadialForce 和 impulseVector 中示例代码。

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseCollisionType` | [`ImpulseForceType`](../enums/mw.ImpulseForceType.md) |  冲量力类型 |


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
```ts
@Core.Class
export default class ImpulseRadialForceSample extends Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
        // 只有为径向力的情况下，impulseRadialForce 属性才有意义
        impulse.impulseForceType = ImpulseForceType.RadialForce;
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

• `get` **impulseType**(): [`ImpulseType`](../enums/mw.ImpulseType.md) 

获取冲量应用方式，绝对或相对


#### Returns

[`ImpulseType`](../enums/mw.ImpulseType.md)

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
export default class ImpulseTypeSample extends Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
        // 绝对冲量应用时会先清空物体自身速度，相对冲量会将冲量和物体当前速度叠加
        impulse.impulseType = ImpulseType.Absolute;
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseType` | [`ImpulseType`](../enums/mw.ImpulseType.md) |  冲量应用方式 |


___

### impulseVector <Score text="impulseVector" /> 

• `get` **impulseVector**(): [`Vector`](mw.Vector.md) 

获取矢量力的冲量向量


#### Returns

[`Vector`](mw.Vector.md)

当前冲量类型

• `set` **impulseVector**(`vec`): `void` <Badge type="tip" text="other" />

设置矢量力的冲量向量

调用端自动广播

使用示例:创建一个名为"ImpulseVectorSample"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个蹦床的效果，玩家走到蹦床上被弹起的高度有变化，代码如下:
```ts
@Core.Class
export default class ImpulseVectorSample extends Script {
    // 场景中冲量对象的 id
    impulseId = "1602E908";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        const impulse = (await GameObject.asyncFind(this.impulseId)) as Impulse;
        // 只有为矢量力的情况下，impulseVector 属性才有意义
        impulse.impulseForceType = ImpulseForceType.VectorForce;
        // 设置为自定义的带方向的冲量值
        impulse.impulseVector = new Vector(0, 0, 2000);
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](mw.Vector.md) |  冲量力向量 |



## Methods