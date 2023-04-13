[Effects](../groups/Effects.Effects.md) / Particle

# Particle <Badge type="tip" text="Class" /> <Score text="Particle" />

特效对象,通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。如需精确控制特效的播放与停止，请使用play()和stop()。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。

使用示例: 动态创建特效
```ts
// 按ID加载资源
Util.AssetUtil.asyncDownloadAsset(AssetID).then((success: boolean) => {
       if (success) {
           // 下载完毕创建特效
           Core.GameObject.asyncSpawnGameObject(AssetID).then((particle: Core.GameObject) => {
               // 播放特效
               particle.play();
           });
       });
```

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Particle`**

## Table of contents

| Properties |
| :-----|
| **[onFinished](Gameplay.Particle.md#onfinished)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 特效播放完毕事件|

| Accessors |
| :-----|
| **[color](Gameplay.Particle.md#color)**(`effectColor`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置特效颜色，不再生效|
| **[loop](Gameplay.Particle.md#loop)**(): `boolean` <br> 获取特效是否是循环，不再生效|
| **[loopCount](Gameplay.Particle.md#loopcount)**(): `number` <br> 获取特效循环次数，不再生效|
| **[particleLength](Gameplay.Particle.md#particlelength)**(): `number` <br> 获取特效时长(ms)|
| **[timeLength](Gameplay.Particle.md#timelength)**(): `number` <br> 获取特效时长(ms)|


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
| **[forceStop](Gameplay.Particle.md#forcestop)**(): `void` <br> 强制停止特效，所有粒子全部销毁|
| **[play](Gameplay.Particle.md#play)**(`OnSuccess?`: () => `void`): `void` <br> 播放特效|
| **[setColor](Gameplay.Particle.md#setcolor)**(`parameterName`: `string`, `value`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置特效颜色参数值|
| **[setColorRandom](Gameplay.Particle.md#setcolorrandom)**(`parameterName`: `string`, `valueMax`: [`LinearColor`](Type.LinearColor.md), `valueMin`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置特效颜色参数随机|
| **[setCullDistance](Gameplay.Particle.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setFloat](Gameplay.Particle.md#setfloat)**(`parameterName`: `string`, `value`: `number`): `void` <br> 设置特效标量参数值|
| **[setFloatRandom](Gameplay.Particle.md#setfloatrandom)**(`parameterName`: `string`, `valueMax`: `number`, `valueMin`: `number`): `void` <br> 设置特效标量参数随机|
| **[setVector](Gameplay.Particle.md#setvector)**(`parameterName`: `string`, `value`: [`Vector`](Type.Vector.md)): `void` <br> 设置特效向量参数值|
| **[setVectorRandom](Gameplay.Particle.md#setvectorrandom)**(`parameterName`: `string`, `valueMax`: [`Vector`](Type.Vector.md), `valueMin`: [`Vector`](Type.Vector.md)): `void` <br> 设置特效向量参数范围随机，在一定范围内取向量的随机值|
| **[stop](Gameplay.Particle.md#stop)**(): `void` <br> 停止特效，不影响已经生成的粒子|


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
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`assetId`: `string`, `inReplicates?`: `boolean`, `transform?`: [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onFinished <Score text="onFinished" /> 

• **onFinished**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

特效播放完毕事件

## Accessors

### color <Score text="color" /> 

• `set` **color**(`effectColor`): `void`

设置特效颜色，不再生效

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement: 请使用setColor

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `effectColor` | [`LinearColor`](Type.LinearColor.md) |



### loop <Score text="loop" /> 

• `get` **loop**(): `boolean` <Badge type="tip" text="other" />

获取特效是否是循环，不再生效


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement:

:::

#### Returns

`boolean`

是否循环

• `set` **loop**(`NewLoop`): `void` <Badge type="tip" text="other" />

设置特效循环，不再生效


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement:不再生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLoop` | `boolean` | 是否循环 |


___

### loopCount <Score text="loopCount" /> 

• `get` **loopCount**(): `number` <Badge type="tip" text="other" />

获取特效循环次数，不再生效


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement:

:::

#### Returns

`number`

循环的次数

• `set` **loopCount**(`NewLoopCount`): `void` <Badge type="tip" text="other" />

设置特效循环次数，不再生效


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement:

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLoopCount` | `number` | 循环的次数 |



### particleLength <Score text="particleLength" /> 

• `get` **particleLength**(): `number` <Badge type="tip" text="other" />

获取特效时长(ms)


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 删除接口 replacement: timeLength

:::

#### Returns

`number`


### timeLength <Score text="timeLength" /> 

• `get` **timeLength**(): `number` <Badge type="tip" text="client" />

获取特效时长(ms)


#### Returns

`number`

特效实际播放时长


## Methods

### forceStop <Score text="forceStop" /> 

• **forceStop**(): `void` <Badge type="tip" text="client" />

强制停止特效，所有粒子全部销毁


使用示例: 简单调用
```ts
Particle.forceStop()
```



### play <Score text="play" /> 

• **play**(`OnSuccess?`): `void` <Badge type="tip" text="client" />

播放特效


使用示例: 简单调用
```ts
Particle.play()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `OnSuccess?` | () => `void` | 特效播放完成后回调 default: null |



### setColor <Score text="setColor" /> 

• **setColor**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效颜色参数值


使用示例: 简单调用
```ts
// 设置Key值为"Color"的参数为纯红色 *Type.LinearColor各参数分别代表红、绿、蓝和透明度
Particle.setColor("Color", new Type.LinearColor(1,0,0,1))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | [`LinearColor`](Type.LinearColor.md) | 颜色变量 |


___

### setColorRandom <Score text="setColorRandom" /> 

• **setColorRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效颜色参数随机


使用示例: 简单调用
```ts
// 设置Key值为"Color"的参数从纯白色至纯黑色随机取值 *Type.LinearColor各参数分别代表红、绿、蓝和透明度
Particle.setColorRandom("Color", new Type.LinearColor(1,1,1,1),new Type.LinearColor(0,0,0,0))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | [`LinearColor`](Type.LinearColor.md) | 颜色变量最大值 |
| `valueMin` | [`LinearColor`](Type.LinearColor.md) | 颜色变量最小值 |


___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)


::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |


___

### setFloat <Score text="setFloat" /> 

• **setFloat**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效标量参数值


使用示例: 简单调用
```ts
// 设置Key值为"LifeTime"的参数的值为10
Particle.setFloat("LifeTime", 10)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | `number` | 标量值 |


___

### setFloatRandom <Score text="setFloatRandom" /> 

• **setFloatRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效标量参数随机


使用示例: 简单调用
```ts
// 设置Key值为"LifeTime"的参数的值在10~100之间随机取值
Particle.setFloatRandom("LifeTime", 100, 10)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | `number` | 标量最大值 |
| `valueMin` | `number` | 标量最小值 |



### setVector <Score text="setVector" /> 

• **setVector**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效向量参数值


使用示例: 简单调用
```ts
// 设置Key值为"Speed"的参数的Z轴方向的值为50
Particle.setVector("Speed", new Type.Vector(0,0,50))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | [`Vector`](Type.Vector.md) | 向量值 |


___

### setVectorRandom <Score text="setVectorRandom" /> 

• **setVectorRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效向量参数范围随机，在一定范围内取向量的随机值


使用示例: 简单调用
```ts
// 设置Key值为"Speed"的参数的X方向在-50到50之间随机取值
Particle.setVectorRandom("Speed", new Type.Vector(50,0,0)，new Type.Vector(-50,0,0))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | [`Vector`](Type.Vector.md) | 向量最大值 |
| `valueMin` | [`Vector`](Type.Vector.md) | 向量最小值 |



### stop <Score text="stop" /> 

• **stop**(): `void` <Badge type="tip" text="client" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since: 024 reason: 接口功能替换 replacement: forceStop

:::

停止特效，不影响已经生成的粒子


使用示例: 简单调用
```ts
Particle.stop()
```

