[Effects](../groups/Core.Effects.md) / Effect

# Effect <Badge type="tip" text="Class" /> <Score text="Effect" />

特效对象,通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。如需精确控制特效的播放与停止，请使用play()和stop()。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。

使用示例:创建一个名为"EffectExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到粒子特效炸裂的效果.代码如下:
```ts
@Core.Class
export default class EffectExample extends Script {

    private readonly effect = {
        assetID: "145884",
        object: null as Effect,
    };

    protected onStart(): void {
        this.createEffect();
    }

    @Core.Function(Core.Client)
    public async createEffect(): Promise<void> {
        const success = await AssetUtil.asyncDownloadAsset(this.effect.assetID);
            if (success) {
                // 下载完毕创建特效
                this.effect.object = await GameObject.asyncSpawnGameObject(this.effect.assetID) as Effect;

                // 设置特效transform
                const transform = new Transform(new Vector(500, 0, 0), new Rotation(0, 0, 0), new Vector(1, 1, 1));
                this.effect.object.setTransform(transform);

                // 播放特效
                this.effect.object.play();
                // 设置特效参数Life标量值
                this.effect.object.setFloat("LifeTime", 10);
                // 设置特效参数Speed向量值
                this.effect.object.setVector("Speed", new Vector(0,0,150));
                // 设置特效参数Color颜色值
                this.effect.object.setColor("Color", new LinearColor(1,0,0,1));
            }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Effect`**

## Table of contents

| Properties |
| :-----|
| **[onFinished](mw.Effect.md#onfinished)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 特效播放完毕事件|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
| **[scriptNumberPropPathMap](mw.GameObject.md#scriptnumberproppathmap)**: `any` <br> |
| **[scriptPropPathNumberMap](mw.GameObject.md#scriptproppathnumbermap)**: `any` <br> |
:::


| Accessors |
| :-----|
| **[timeLength](mw.Effect.md#timelength)**(): `number` <br> 获取特效时长(ms)|
| **[translucentSortPriority](mw.Effect.md#translucentsortpriority)**(): `number` <br> 获取渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方|


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
| **[forceStop](mw.Effect.md#forcestop)**(): `void` <br> 强制停止特效，所有粒子全部销毁|
| **[play](mw.Effect.md#play)**(`OnSuccess?`: () => `void`): `void` <br> 播放特效|
| **[setColor](mw.Effect.md#setcolor)**(`parameterName`: `string`, `value`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 设置特效颜色参数值|
| **[setColorRandom](mw.Effect.md#setcolorrandom)**(`parameterName`: `string`, `valueMax`: [`LinearColor`](mw.LinearColor.md), `valueMin`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 设置特效颜色参数随机|
| **[setCullDistance](mw.Effect.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setFloat](mw.Effect.md#setfloat)**(`parameterName`: `string`, `value`: `number`): `void` <br> 设置特效标量参数值|
| **[setFloatRandom](mw.Effect.md#setfloatrandom)**(`parameterName`: `string`, `valueMax`: `number`, `valueMin`: `number`): `void` <br> 设置特效标量参数随机|
| **[setVector](mw.Effect.md#setvector)**(`parameterName`: `string`, `value`: [`Vector`](mw.Vector.md)): `void` <br> 设置特效向量参数值|
| **[setVectorRandom](mw.Effect.md#setvectorrandom)**(`parameterName`: `string`, `valueMax`: [`Vector`](mw.Vector.md), `valueMin`: [`Vector`](mw.Vector.md)): `void` <br> 设置特效向量参数范围随机，在一定范围内取向量的随机值|


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


### onFinished <Score text="onFinished" /> 

• **onFinished**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

特效播放完毕事件

## Accessors
___

### timeLength <Score text="timeLength" /> 

• `get` **timeLength**(): `number` <Badge type="tip" text="client" />

获取特效时长(ms)


#### Returns

`number`

特效实际播放时长

___

### translucentSortPriority <Score text="translucentSortPriority" /> 

• `get` **translucentSortPriority**(): `number` <Badge type="tip" text="client" />

获取渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Returns

`number`

• `set` **translucentSortPriority**(`value`): `void` <Badge type="tip" text="client" />

设置渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新的渲染层级，值范围为 [0, 31] |



## Methods
___

### forceStop <Score text="forceStop" /> 

• **forceStop**(): `void` <Badge type="tip" text="client" />

强制停止特效，所有粒子全部销毁



___

### play <Score text="play" /> 

• **play**(`OnSuccess?`): `void` <Badge type="tip" text="client" />

播放特效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `OnSuccess?` | () => `void` | 特效播放完成后回调 default: null |


___

### setColor <Score text="setColor" /> 

• **setColor**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效颜色参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | [`LinearColor`](mw.LinearColor.md) | 颜色变量 |


___

### setColorRandom <Score text="setColorRandom" /> 

• **setColorRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效颜色参数随机


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | [`LinearColor`](mw.LinearColor.md) | 颜色变量最大值 |
| `valueMin` | [`LinearColor`](mw.LinearColor.md) | 颜色变量最小值 |


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


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | `number` | 标量值 |


___

### setFloatRandom <Score text="setFloatRandom" /> 

• **setFloatRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效标量参数随机


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | `number` | 标量最大值 |
| `valueMin` | `number` | 标量最小值 |


___

### setVector <Score text="setVector" /> 

• **setVector**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效向量参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `value` | [`Vector`](mw.Vector.md) | 向量值 |


___

### setVectorRandom <Score text="setVectorRandom" /> 

• **setVectorRandom**(`parameterName`, `valueMax`, `valueMin`): `void` <Badge type="tip" text="client" />

设置特效向量参数范围随机，在一定范围内取向量的随机值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` | 参数名 |
| `valueMax` | [`Vector`](mw.Vector.md) | 向量最大值 |
| `valueMin` | [`Vector`](mw.Vector.md) | 向量最小值 |

