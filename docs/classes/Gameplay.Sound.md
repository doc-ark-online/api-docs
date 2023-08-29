[OTHERS](../groups/OTHERS.OTHERS.md) / Sound

# Sound <Badge type="tip" text="Class" /> <Score text="Sound" />

音效组件

使用示例:常用接口示例
```ts
Sound.uiSound        // UI音效不受场景因素影响，不受游戏暂停影响
Sound.spatialization // 音效空间化，为真则开启空间传播衰减
```

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Sound`**

## Table of contents

| Properties |
| :-----|
| **[onSoundFinished](Gameplay.Sound.md#onsoundfinished)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音结束事件|
| **[onSoundPaused](Gameplay.Sound.md#onsoundpaused)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音暂停事件|
| **[onSoundStarted](Gameplay.Sound.md#onsoundstarted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 声音开始事件|

| Accessors |
| :-----|
| **[attenuationDistanceModel](Gameplay.Sound.md#attenuationdistancemodel)**(): [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) <br> 获取音效的衰减方式|
| **[attenuationShape](Gameplay.Sound.md#attenuationshape)**(): [`AttenuationShape`](../enums/Gameplay.AttenuationShape.md) <br> 获取音效的形状|
| **[falloffDistance](Gameplay.Sound.md#falloffdistance-1)**(): `number` <br> 获取衰减距离|
| **[isAutoPlay](Gameplay.Sound.md#isautoplay)**(): `boolean` <br> 获取是否自动播放|
| **[isLoop](Gameplay.Sound.md#isloop)**(): `boolean` <br> 获取是否循环播放|
| **[isSpatialization](Gameplay.Sound.md#isspatialization)**(): `boolean` <br> 获取音效空间化|
| **[isUISound](Gameplay.Sound.md#isuisound)**(): `boolean` <br> 获取是否是UI音效|
| **[playState](Gameplay.Sound.md#playstate)**(): [`AudioPlayState`](../enums/Gameplay.AudioPlayState.md) <br> 获取音效播放状态|
| **[shapeExtents](Gameplay.Sound.md#shapeextents)**(): [`Vector`](Type.Vector.md) <br> 获取音效形状范围|
| **[timePosition](Gameplay.Sound.md#timeposition)**(): `number` <br> 获取当前已播放时长|
| **[timelength](Gameplay.Sound.md#timelength)**(): `number` <br> 获取音效时长|
| **[volume](Gameplay.Sound.md#volume)**(): `number` <br> 获取音量比例|


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
| **[pause](Gameplay.Sound.md#pause)**(`bPause?`: `boolean`): `void` <br> 暂停播放特效|
| **[play](Gameplay.Sound.md#play)**(`starttime?`: `number`, `OnSuccess?`: () => `void`): `void` <br> 播放音效|
| **[setAudioAssetByGuid](Gameplay.Sound.md#setaudioassetbyguid)**(`assetGUID`: `string`): `void` <br> 通过GUID设置音效|
| **[stop](Gameplay.Sound.md#stop)**(): `void` <br> 停止播放特效|


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


### onSoundFinished <Score text="onSoundFinished" /> 

• **onSoundFinished**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

声音结束事件

___

### onSoundPaused <Score text="onSoundPaused" /> 

• **onSoundPaused**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

声音暂停事件

___

### onSoundStarted <Score text="onSoundStarted" /> 

• **onSoundStarted**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

声音开始事件

## Accessors

### attenuationDistanceModel <Score text="attenuationDistanceModel" /> 

• `get` **attenuationDistanceModel**(): [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) <Badge type="tip" text="client" />

获取音效的衰减方式


#### Returns

[`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)

衰减方式

• `set` **attenuationDistanceModel**(`model`): `void` <Badge type="tip" text="other" />

设置音效的衰减方式

param model usage:衰减方式

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) |


___

### attenuationShape <Score text="attenuationShape" /> 

• `get` **attenuationShape**(): [`AttenuationShape`](../enums/Gameplay.AttenuationShape.md) <Badge type="tip" text="client" />

获取音效的形状


#### Returns

[`AttenuationShape`](../enums/Gameplay.AttenuationShape.md)

形状

• `set` **attenuationShape**(`shape`): `void` <Badge type="tip" text="other" />

设置音效的形状

param model usage:形状

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`AttenuationShape`](../enums/Gameplay.AttenuationShape.md) |


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

### isAutoPlay <Score text="isAutoPlay" /> 

• `get` **isAutoPlay**(): `boolean` <Badge type="tip" text="client" />

获取是否自动播放


#### Returns

`boolean`

是否自动播放

• `set` **isAutoPlay**(`isAutoPlay`): `void` <Badge type="tip" text="client" />

设置是否自动播放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isAutoPlay` | `boolean` | 是否自动播放 |


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

• `get` **playState**(): [`AudioPlayState`](../enums/Gameplay.AudioPlayState.md) <Badge type="tip" text="client" />

获取音效播放状态


#### Returns

[`AudioPlayState`](../enums/Gameplay.AudioPlayState.md)

是否正在播放

___

### shapeExtents <Score text="shapeExtents" /> 

• `get` **shapeExtents**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="client" />

获取音效形状范围


#### Returns

[`Vector`](Type.Vector.md)

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
| `ShapeExtents` | [`Vector`](Type.Vector.md) | 设置形状范围 |


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

暂停播放特效


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

停止播放特效


