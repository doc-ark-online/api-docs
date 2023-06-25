[Sound](../groups/Core.Sound.md) / Sound

# Sound <Badge type="tip" text="Class" /> <Score text="Sound" />

音效组件

使用示例:创建一个名为"SoundExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你可以听到音效的声音.代码如下:
```ts
@Core.Class
export default class SoundExample extends Script {

    private readonly sound = {
        assetID: "14929",
        object: null as Sound,
    };

    protected onStart(): void {
        this.createSound();
    }

    @Core.Function(Core.Client)
    public async createSound(): Promise<void> {
        const success = await AssetUtil.asyncDownloadAsset(this.sound.assetID);
            if (success) {
                // 下载完毕创建音效
                this.sound.object = await GameObject.asyncSpawnGameObject(this.sound.assetID) as Sound;

                // 设置音效transform
                const transform = new Transform(new Vector(500, 0, 0), new Rotation(0, 0, 0), new Vector(1, 1, 1));
                this.sound.object.setTransform(transform);

                // 设置音效为空间音效
                this.sound.object.isUISound = false;
                this.sound.object.isSpatialization = true;
                // 设置UI音效形状为球形
                this.sound.object.attenuationShape = AttenuationShape.Sphere;
                // 设置音效范围100
                this.sound.object.shapeExtents = Vector(100,0,0);
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

| Properties |
| :-----|
| **[onSoundFinished](mw.Sound.md#onsoundfinished)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 声音结束事件|
| **[onSoundPaused](mw.Sound.md#onsoundpaused)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 声音暂停事件|
| **[onSoundStarted](mw.Sound.md#onsoundstarted)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 声音开始事件|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[attenuationDistanceModel](mw.Sound.md#attenuationdistancemodel)**(): [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) <br> 获取音效的衰减方式|
| **[attenuationShape](mw.Sound.md#attenuationshape)**(): [`AttenuationShape`](../enums/mw.AttenuationShape.md) <br> 获取音效的形状|
| **[falloffDistance](mw.Sound.md#falloffdistance-1)**(): `number` <br> 获取衰减距离|
| **[isLoop](mw.Sound.md#isloop)**(): `boolean` <br> 获取是否循环播放|
| **[isSpatialization](mw.Sound.md#isspatialization)**(): `boolean` <br> 获取音效空间化|
| **[isUISound](mw.Sound.md#isuisound)**(): `boolean` <br> 获取是否是UI音效|
| **[playState](mw.Sound.md#playstate)**(): [`AudioPlayState`](../enums/mw.AudioPlayState.md) <br> 获取音效播放状态|
| **[shapeExtents](mw.Sound.md#shapeextents)**(): [`Vector`](mw.Vector.md) <br> 获取音效形状范围|
| **[timePosition](mw.Sound.md#timeposition)**(): `number` <br> 获取当前已播放时长|
| **[timelength](mw.Sound.md#timelength)**(): `number` <br> 获取音效时长|
| **[volume](mw.Sound.md#volume)**(): `number` <br> 获取音量比例|


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
| **[pause](mw.Sound.md#pause)**(`bPause?`: `boolean`): `void` <br> 暂停播放音效|
| **[play](mw.Sound.md#play)**(`starttime?`: `number`, `OnSuccess?`: () => `void`): `void` <br> 播放音效|
| **[setAudioAssetByGuid](mw.Sound.md#setaudioassetbyguid)**(`assetGUID`: `string`): `void` <br> 通过GUID设置音效|
| **[stop](mw.Sound.md#stop)**(): `void` <br> 停止播放音效|


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


### onSoundFinished <Score text="onSoundFinished" /> 

• **onSoundFinished**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

声音结束事件

___

### onSoundPaused <Score text="onSoundPaused" /> 

• **onSoundPaused**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

声音暂停事件

___

### onSoundStarted <Score text="onSoundStarted" /> 

• **onSoundStarted**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

声音开始事件

## Accessors

### attenuationDistanceModel <Score text="attenuationDistanceModel" /> 

• `get` **attenuationDistanceModel**(): [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) <Badge type="tip" text="client" />

获取音效的衰减方式


#### Returns

[`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md)

衰减方式

• `set` **attenuationDistanceModel**(`model`): `void` <Badge type="tip" text="other" />

设置音效的衰减方式

param model usage:衰减方式

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`AttenuationDistanceModel`](../enums/mw.AttenuationDistanceModel.md) |


___

### attenuationShape <Score text="attenuationShape" /> 

• `get` **attenuationShape**(): [`AttenuationShape`](../enums/mw.AttenuationShape.md) <Badge type="tip" text="client" />

获取音效的形状


#### Returns

[`AttenuationShape`](../enums/mw.AttenuationShape.md)

形状

• `set` **attenuationShape**(`shape`): `void` <Badge type="tip" text="other" />

设置音效的形状

param model usage:形状

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`AttenuationShape`](../enums/mw.AttenuationShape.md) |


___

### falloffDistance <Score text="falloffDistance" /> 

• `get` **falloffDistance**(): `number` <Badge type="tip" text="client" />

获取衰减距离


#### Returns

`number`

距离

• `set` **falloffDistance**(`fallOffDistance`): `void` <Badge type="tip" text="client" />

设置衰减距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallOffDistance` | `number` | 距离 |


___

### isLoop <Score text="isLoop" /> 

• `get` **isLoop**(): `boolean` <Badge type="tip" text="client" />

获取是否循环播放


#### Returns

`boolean`

是否循环

• `set` **isLoop**(`Loop`): `void` <Badge type="tip" text="client" />

设置循环播放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Loop` | `boolean` | 设置是否开启循环 |


___

### isSpatialization <Score text="isSpatialization" /> 

• `get` **isSpatialization**(): `boolean` <Badge type="tip" text="client" />

获取音效空间化


#### Returns

`boolean`

是否开启音效空间化

• `set` **isSpatialization**(`spatialization`): `void` <Badge type="tip" text="client" />

设置音效空间化，若是，则开启空间传播衰减


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spatialization` | `boolean` | 设置开启音效空间化 |


___

### isUISound <Score text="isUISound" /> 

• `get` **isUISound**(): `boolean` <Badge type="tip" text="client" />

获取是否是UI音效


#### Returns

`boolean`

boolean

• `set` **isUISound**(`isUISound`): `void` <Badge type="tip" text="client" />

设置是否是UI音效，注意：UI音效不依赖游戏逻辑


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isUISound` | `boolean` | 是否用于UI |


___

### playState <Score text="playState" /> 

• `get` **playState**(): [`AudioPlayState`](../enums/mw.AudioPlayState.md) <Badge type="tip" text="client" />

获取音效播放状态


#### Returns

[`AudioPlayState`](../enums/mw.AudioPlayState.md)

是否正在播放

___

### shapeExtents <Score text="shapeExtents" /> 

• `get` **shapeExtents**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

获取音效形状范围


#### Returns

[`Vector`](mw.Vector.md)

音效范围

• `set` **shapeExtents**(`ShapeExtents`): `void` <Badge type="tip" text="client" />

设置音效形状范围 用于衰减形状的尺寸，每个形状的值解释不同。
球体 X是球体半径，Y和Z未使用
胶囊 X是半高，Y是半径，Z未使用
长方体 X、Y和Z是长方体的尺寸
圆锥体 X是圆锥体半径，Y是圆锥体角度，Z是圆锥体衰减角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShapeExtents` | [`Vector`](mw.Vector.md) | 设置形状范围 |


___

### timePosition <Score text="timePosition" /> 

• `get` **timePosition**(): `number` <Badge type="tip" text="client" />

获取当前已播放时长


#### Returns

`number`

已播放时长

___

### timelength <Score text="timelength" /> 

• `get` **timelength**(): `number` <Badge type="tip" text="client" />

获取音效时长


#### Returns

`number`

音效时长(ms)

___

### volume <Score text="volume" /> 

• `get` **volume**(): `number` <Badge type="tip" text="client" />

获取音量比例


#### Returns

`number`

音量比例

• `set` **volume**(`volume`): `void` <Badge type="tip" text="client" />

设置音量 0~1


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | 音量比例 |



## Methods
___

### pause <Score text="pause" /> 

• **pause**(`bPause?`): `void` <Badge type="tip" text="client" />

暂停播放音效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bPause?` | `boolean` | 设置暂停状态 default:true |


___

### play <Score text="play" /> 

• **play**(`starttime?`, `OnSuccess?`): `void` <Badge type="tip" text="client" />

播放音效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `starttime?` | `number` | 设置起始播放时间 default:0 |
| `OnSuccess?` | () => `void` | 播放完成后回调 default: null |


___

### setAudioAssetByGuid <Score text="setAudioAssetByGuid" /> 

• **setAudioAssetByGuid**(`assetGUID`): `void` <Badge type="tip" text="client" />

通过GUID设置音效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetGUID` | `string` | 音效资源ID |


___

### stop <Score text="stop" /> 

• **stop**(): `void` <Badge type="tip" text="client" />

停止播放音效


