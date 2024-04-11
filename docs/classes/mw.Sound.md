[场景](../groups/场景.场景.md) / Sound

# Sound <Badge type="tip" text="Class" /> <Score text="Sound" />

音效

<span style="font-size: 14px;">
使用示例:创建一个名为"SoundExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你可以听到音效的声音。代码如下：
</span>

```ts
@Component
export default class SoundExample extends Script {

    private readonly sound = {
        assetID: "14929",
        object: null as mw.Sound,
    };

    protected onStart(): void {
        this.createSound();
    }

    @mw.RemoteFunction(mw.Client)
    public async createSound(): Promise<void> {
        const success = await AssetUtil.asyncDownloadAsset(this.sound.assetID);
            if (success) {
                // 下载完毕创建音效
                this.sound.object = await GameObject.asyncSpawn<mw.Sound>(this.sound.assetID);

                // 设置音效transform
                const transform = new Transform(new Vector(0, 0, 0), new Rotation(0, 0, 0), new Vector(1, 1, 1));
                this.sound.object.worldTransform = transform;

                // 设置音效为空间音效
                this.sound.object.isUISound = false;
                this.sound.object.isSpatialization = true;
                // 设置UI音效形状为球形
                this.sound.object.attenuationShape = AttenuationShape.Sphere;
                // 设置音效范围100
                this.sound.object.attenuationShapeExtents = new Vector(100,0,0);
                // 设置音效衰减距离为200
                this.sound.object.falloffDistance = 200;
                // 设置音效音量
                this.sound.object.volume = 1;
                // 开启音效循环
                this.sound.object.isLoop = true;
                // 播放音效
                this.sound.object.play();
            }
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Sound`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onFinish](mw.Sound.md#onfinish)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 声音结束事件|
| **[onPause](mw.Sound.md#onpause)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 声音暂停事件|
| **[onPlay](mw.Sound.md#onplay)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| 声音开始事件|


::: details click
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[attenuationDistanceModel](mw.Sound.md#attenuationdistancemodel)**(): [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) <Badge type="tip" text="client" />  |
| :-----|
| 获取音效的衰减方式|
| **[attenuationShape](mw.Sound.md#attenuationshape)**(): [`AttenuationShape`](../enums/mw.AttenuationShape.md) <Badge type="tip" text="client" />  |
| 获取音效的形状|
| **[attenuationShapeExtents](mw.Sound.md#attenuationshapeextents)**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />  |
| 获取音效形状范围|
| **[falloffDistance](mw.Sound.md#falloffdistance)**(): `number` <Badge type="tip" text="client" />  |
| 获取衰减距离|
| **[isLoop](mw.Sound.md#isloop)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否循环播放|
| **[isSpatialization](mw.Sound.md#isspatialization)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取音效空间化|
| **[isUISound](mw.Sound.md#isuisound)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否是UI音效|
| **[playState](mw.Sound.md#playstate)**(): [`SoundPlayState`](../enums/mw.SoundPlayState.md) <Badge type="tip" text="client" />  |
| 获取音效播放状态|
| **[timeLength](mw.Sound.md#timelength)**(): `number` <Badge type="tip" text="client" />  |
| 获取音效时长|
| **[timePosition](mw.Sound.md#timeposition)**(): `number` <Badge type="tip" text="client" />  |
| 获取当前已播放时长|
| **[volume](mw.Sound.md#volume)**(): `number` <Badge type="tip" text="client" />  |
| 获取音量比例|


::: details click
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
| 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)   |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)   |
| 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`   |
| 获取当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[pause](mw.Sound.md#pause)**(`bPause?`: `boolean`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 暂停播放音效|
| **[play](mw.Sound.md#play)**(`startTime?`: `number`, `onSuccess?`: () => `void`): `void` <Badge type="tip" text="client" />  |
| 播放音效|
| **[setSoundAsset](mw.Sound.md#setsoundasset)**(`assetGUID`: `string`): `void` <Badge type="tip" text="client" />  |
| 通过 GUID 设置音效|
| **[stop](mw.Sound.md#stop)**(): `void` <Badge type="tip" text="client" />  |
| 停止播放音效|


::: details click
### Methods <Score text="Methods" /> 
| **[addComponent](mw.GameObject.md#addcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>, `bInReplicates?`: `boolean`): `T`: extends [`Script`](mw.Script.md)<`T`\>   |
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
| 根据 gameObjectId 查找子物体|
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
| **[getComponent](mw.GameObject.md#getcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `T`: extends [`Script`](mw.Script.md)<`T`\>   |
| 获取指定类型的组件|
| **[getComponentPropertys](mw.GameObject.md#getcomponentpropertys)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `Map`<`string`, `IPropertyOptions`\>   |
| 获取脚本组件属性|
| **[getComponents](mw.GameObject.md#getcomponents)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `T`: extends [`Script`](mw.Script.md)<`T`\>[]   |
| 获取指定类型的所有组件|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`   |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`   |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过 gameObjectId 异步查找 GameObject|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>   |
| 异步构造一个物体|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过 gameObjectId 查找物体|
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

声音结束事件

___

### onPause <Score text="onPause" /> 

• **onPause**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

声音暂停事件

___

### onPlay <Score text="onPlay" /> 

• **onPlay**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

声音开始事件

## Accessors

___

### attenuationDistanceModel <Score text="attenuationDistanceModel" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **attenuationDistanceModel**(): [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **attenuationDistanceModel**(`model`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音效的衰减方式

#### Returns

| [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) | 衰减方式 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置音效的衰减方式

#### Parameters

| `model` | [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### attenuationShape <Score text="attenuationShape" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **attenuationShape**(): [`AttenuationShape`](../enums/mw.AttenuationShape.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **attenuationShape**(`shape`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音效的形状

#### Returns

| [`AttenuationShape`](../enums/mw.AttenuationShape.md) | 形状 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置音效的形状

#### Parameters

| `shape` | [`AttenuationShape`](../enums/mw.AttenuationShape.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### attenuationShapeExtents <Score text="attenuationShapeExtents" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **attenuationShapeExtents**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **attenuationShapeExtents**(`ShapeExtents`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音效形状范围

#### Returns

| [`Vector`](mw.Vector.md) | 音效范围 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置音效形状范围 用于衰减形状的尺寸，每个形状的值解释不同。
球体 X是球体半径，Y和Z未使用
胶囊 X是半高，Y是半径，Z未使用
长方体 X、Y和Z是长方体的尺寸
圆锥体 X是圆锥体半径，Y是圆锥体角度，Z是圆锥体衰减角度

#### Parameters

| `ShapeExtents` [`Vector`](mw.Vector.md) | 设置形状范围 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### falloffDistance <Score text="falloffDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **falloffDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **falloffDistance**(`fallOffDistance`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取衰减距离

#### Returns

| `number` | 距离 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置衰减距离

#### Parameters

| `fallOffDistance` `number` | 距离 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isLoop <Score text="isLoop" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isLoop**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **isLoop**(`Loop`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否循环播放

#### Returns

| `boolean` | 是否循环 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置循环播放

#### Parameters

| `Loop` `boolean` | 设置是否开启循环 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isSpatialization <Score text="isSpatialization" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isSpatialization**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **isSpatialization**(`spatialization`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音效空间化

#### Returns

| `boolean` | 是否开启音效空间化 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置音效空间化，若是，则开启空间传播衰减

#### Parameters

| `spatialization` `boolean` | 设置开启音效空间化 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isUISound <Score text="isUISound" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isUISound**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **isUISound**(`isUISound`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否是UI音效

#### Returns

| `boolean` | boolean |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否是UI音效，注意：UI音效不依赖游戏逻辑

#### Parameters

| `isUISound` `boolean` | 是否用于UI |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### playState <Score text="playState" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **playState**(): [`SoundPlayState`](../enums/mw.SoundPlayState.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音效播放状态

#### Returns

| [`SoundPlayState`](../enums/mw.SoundPlayState.md) | 是否正在播放 |
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


获取音效时长

#### Returns

| `number` | 音效时长(ms) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### timePosition <Score text="timePosition" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **timePosition**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前已播放时长

#### Returns

| `number` | 已播放时长 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### volume <Score text="volume" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **volume**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **volume**(`volume`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取音量比例

#### Returns

| `number` | 音量比例 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置音量 0~1

#### Parameters

| `volume` `number` | 音量比例 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### pause <Score text="pause" /> 

• **pause**(`bPause?`): `void` <Badge type="tip" text="client" />

暂停播放音效

#### Parameters

| `bPause?` `boolean` | 设置暂停状态 default:true |
| :------ | :------ |


___

### play <Score text="play" /> 

• **play**(`startTime?`, `onSuccess?`): `void` <Badge type="tip" text="client" />

播放音效

#### Parameters

| `startTime?` `number` | 设置起始播放时间 default:0 range: 不大于音效的时长 type: 浮点数 |
| :------ | :------ |
| `onSuccess?` () => `void` | 播放完成后回调 default: null |


___

### setSoundAsset <Score text="setSoundAsset" /> 

• **setSoundAsset**(`assetGUID`): `void` <Badge type="tip" text="client" />

通过 GUID 设置音效

#### Parameters

| `assetGUID` `string` | 音效资源 ID range: 依据 ID 长度而定 |
| :------ | :------ |


___

### stop <Score text="stop" /> 

• **stop**(): `void` <Badge type="tip" text="client" />

停止播放音效

