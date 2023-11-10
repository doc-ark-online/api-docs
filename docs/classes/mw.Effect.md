[场景](../groups/场景.场景.md) / Effect

# Effect <Badge type="tip" text="Class" /> <Score text="Effect" />

特效

通常用于游戏场景中的效果表现，如火焰，水流，武器拖尾等，当编辑器细节面板勾选自动启用时，运行游戏会自动播放特效。

如需精确控制特效的播放与停止，请使用 play 和 stop 方法。不同特效有不同的生命周期，部分特效可通过细节面板中参数调节。

<span style="font-size: 14px;">
使用示例:创建一个名为"EffectExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到粒子特效炸裂的效果.代码如下:
</span>

```ts
@Component
export default class EffectExample extends Script {

    private readonly effect = {
        assetID: "145884",
        object: null as mw.Effect,
    };

    protected onStart(): void {
        this.createEffect();
    }

    @RemoteFunction(Client)
    public async createEffect(): `Promise`<`void`\> {
        const success = await mw.AssetUtil.asyncDownloadAsset(this.effect.assetID);
            if (success) {
                // 下载完毕创建特效
                this.effect.object = await mw.GameObject.asyncSpawn(this.effect.assetID) as mw.Effect;

                // 设置特效transform
                const transform = new mw.Transform(new mw.Vector(500, 0, 0), new mw.Rotation(0, 0, 0), new mw.Vector(1, 1, 1));
                this.effect.object.localTransform = transform;

                // 播放特效
                this.effect.object.play();
                // 设置特效参数Life标量值
                this.effect.object.setFloat("LifeTime", 10);
                // 设置特效参数Speed向量值
                this.effect.object.setVector("Speed", new mw.Vector(0,0,150));
                // 设置特效参数Color颜色值
                this.effect.object.setColor("Color", new mw.LinearColor(1,0,0,1));
            }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Effect`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onFinish](mw.Effect.md#onfinish)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 特效播放完毕事件|


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[loopCount](mw.Effect.md#loopcount)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| 设置特效循环次数，仅对非永久循环特效有效|
| **[maskcolor](mw.Effect.md#maskcolor)**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />  |
| 设置特效遮罩颜色|
| **[timeLength](mw.Effect.md#timelength)**(): `number` <Badge type="tip" text="client" />  |
| 获取特效时长(ms)|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`   |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`   |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`   |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`   |
| 设置物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)   |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)   |
| 设置父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`   |
| 设置当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[forceStop](mw.Effect.md#forcestop)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 强制停止特效，所有粒子全部销毁|
| **[play](mw.Effect.md#play)**(`onSuccess?`: () => `void`): `void` <Badge type="tip" text="client" />  |
| 播放特效|
| **[setColor](mw.Effect.md#setcolor)**(`parameterName`: `string`, `value`: [`LinearColor`](mw.LinearColor.md)): `void` <Badge type="tip" text="client" />  |
| 设置特效颜色参数值|
| **[setColorRandom](mw.Effect.md#setcolorrandom)**(`parameterName`: `string`, `maxValue`: [`LinearColor`](mw.LinearColor.md), `minValue`: [`LinearColor`](mw.LinearColor.md)): `void` <Badge type="tip" text="client" />  |
| 设置特效颜色参数随机|
| **[setCullDistance](mw.Effect.md#setculldistance)**(`inCullDistance`: `number`): `void` <Badge type="tip" text="client" />  |
| 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[setFloat](mw.Effect.md#setfloat)**(`parameterName`: `string`, `value`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置特效标量参数值|
| **[setFloatRandom](mw.Effect.md#setfloatrandom)**(`parameterName`: `string`, `maxValue`: `number`, `minValue`: `number`): `void` <Badge type="tip" text="client" />  |
| 设置特效标量参数随机|
| **[setVector](mw.Effect.md#setvector)**(`parameterName`: `string`, `value`: [`Vector`](mw.Vector.md)): `void` <Badge type="tip" text="client" />  |
| 设置特效向量参数值|
| **[setVectorRandom](mw.Effect.md#setvectorrandom)**(`parameterName`: `string`, `maxValue`: [`Vector`](mw.Vector.md), `minValue`: [`Vector`](mw.Vector.md)): `void` <Badge type="tip" text="client" />  |
| 设置特效向量参数范围随机，在一定范围内取向量的随机值|
| **[stop](mw.Effect.md#stop)**(): `void` <Badge type="tip" text="client" />  |
| 停止特效，不影响已经生成的粒子|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[addComponent](mw.GameObject.md#addcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>, `bInReplicates?`: `boolean`): `T`: extends [`Script`](mw.Script.md)<`T`\>  |
| :-----|
| 添加一个脚本组件|
| **[addScriptToObject](mw.GameObject.md#addscripttoobject)**(`script`: [`Script`](mw.Script.md)): `void`   |
| 附加脚本|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)   |
| 复制对象|
| **[delScriptFromObject](mw.GameObject.md#delscriptfromobject)**(`script`: [`Script`](mw.Script.md)): `void`   |
| 移除脚本|
| **[destroy](mw.GameObject.md#destroy)**(): `void`   |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`   |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]   |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找所有的子物体|
| **[getComponent](mw.GameObject.md#getcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`): `T`: extends [`Script`](mw.Script.md)<`T`\> |
| **[getComponentPropertys](mw.GameObject.md#getcomponentpropertys)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `Map`<`string`, `IPropertyOptions`\>  |
| 获取脚本组件属性|
| **[getComponents](mw.GameObject.md#getcomponents)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`): `T`: extends [`Script`](mw.Script.md)<`T`\>[] |
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`   |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`   |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>   |
| 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>   |
| 构造一个物体|
:::


## Properties

___

### onFinish <Score text="onFinish" /> 

• **onFinish**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

特效播放完毕事件

## Accessors

___

### loopCount <Score text="loopCount" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **loopCount**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **loopCount**(`NewLoopCount`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取特效循环次数，仅对非永久循环特效有效

#### Returns

| `number` | 循环的次数 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置特效循环次数，仅对非永久循环特效有效

#### Parameters

| `NewLoopCount` `number` | 循环的次数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maskcolor <Score text="maskcolor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maskcolor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **maskcolor**(`effectColor`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取特效遮罩颜色

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 特效当前遮罩颜色 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置特效遮罩颜色

#### Parameters

| `effectColor` | [`LinearColor`](mw.LinearColor.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### timeLength <Score text="timeLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **timeLength**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取特效时长(ms)

#### Returns

</td>
</tr></tbody>
</table>

| `number` | 特效实际播放时长 |
| :------ | :------ |

## Methods

___

### forceStop <Score text="forceStop" /> 

• **forceStop**(): `void` <Badge type="tip" text="client" />

强制停止特效，所有粒子全部销毁


___

### play <Score text="play" /> 

• **play**(`onSuccess?`): `void` <Badge type="tip" text="client" />

播放特效

#### Parameters

| `onSuccess?` () => `void` | 特效播放完成后回调 default: null |
| :------ | :------ |


___

### setColor <Score text="setColor" /> 

• **setColor**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效颜色参数值

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `value` [`LinearColor`](mw.LinearColor.md) | 颜色变量 |


___

### setColorRandom <Score text="setColorRandom" /> 

• **setColorRandom**(`parameterName`, `maxValue`, `minValue`): `void` <Badge type="tip" text="client" />

设置特效颜色参数随机

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `maxValue` [`LinearColor`](mw.LinearColor.md) | 颜色变量最大值 |
| `minValue` [`LinearColor`](mw.LinearColor.md) | 颜色变量最小值 |


___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

#### Parameters

| `inCullDistance` `number` | 裁剪距离 |
| :------ | :------ |


::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

___

### setFloat <Score text="setFloat" /> 

• **setFloat**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效标量参数值

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `value` `number` | 标量值 |


___

### setFloatRandom <Score text="setFloatRandom" /> 

• **setFloatRandom**(`parameterName`, `maxValue`, `minValue`): `void` <Badge type="tip" text="client" />

设置特效标量参数随机

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `maxValue` `number` | 标量最大值 |
| `minValue` `number` | 标量最小值 |


___

### setVector <Score text="setVector" /> 

• **setVector**(`parameterName`, `value`): `void` <Badge type="tip" text="client" />

设置特效向量参数值

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `value` [`Vector`](mw.Vector.md) | 向量值 |


___

### setVectorRandom <Score text="setVectorRandom" /> 

• **setVectorRandom**(`parameterName`, `maxValue`, `minValue`): `void` <Badge type="tip" text="client" />

设置特效向量参数范围随机，在一定范围内取向量的随机值

#### Parameters

| `parameterName` `string` | 参数名 |
| :------ | :------ |
| `maxValue` [`Vector`](mw.Vector.md) | 向量最大值 |
| `minValue` [`Vector`](mw.Vector.md) | 向量最小值 |


___

### stop <Score text="stop" /> 

• **stop**(): `void` <Badge type="tip" text="client" />

停止特效，不影响已经生成的粒子

