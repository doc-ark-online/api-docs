[Gameplay](../modules/Gameplay.Gameplay.md) / Sound

# Sound <Badge type="tip" text="Class" /> <Score text="Sound" />

**`Groups`**

SOUNDS

音效组件

使用示例:常用接口示例
```ts
Sound.uiSound        // UI音效不受场景因素影响，不受游戏暂停影响
Sound.spatialization // 音效空间化，为真则开启空间传播衰减
Sound.innerRadius    // 内径，此范围内不受空间传播衰减影响
Sound.outerRadius    // 外径，由内径外边界至外径范围内随attenuationDistanceModel衰减
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
| **[audioAsset](Gameplay.Sound.md#audioasset)**(`string` |): `void` <br> 设置音效|
| **[autoPlay](Gameplay.Sound.md#autoplay)**(): `boolean` <br> 获取是否自动播放|
| **[currentProgress](Gameplay.Sound.md#currentprogress)**(): `number` <br> 获取当前播放时长进度|
| **[drawInnerBounds](Gameplay.Sound.md#drawinnerbounds)**(): `boolean` <br> since:022 reason: 删除接口 replacement:|
| **[duration](Gameplay.Sound.md#duration)**(): `number` <br> 获取音效时长|
| **[innerRadius](Gameplay.Sound.md#innerradius)**(): `number` <br> 获取音量内部半径|
| **[loop](Gameplay.Sound.md#loop)**(): `boolean` <br> 获取是否循环播放|
| **[outerRadius](Gameplay.Sound.md#outerradius)**(): `number` <br> 获取衰减距离|
| **[playState](Gameplay.Sound.md#playstate)**(): `boolean` <br> 获取音效播放状态|
| **[spatialization](Gameplay.Sound.md#spatialization)**(): `boolean` <br> 获取音效空间化|
| **[uiSound](Gameplay.Sound.md#uisound)**(): `boolean` <br> 获取是否是UI音效|
| **[volumeMultiplier](Gameplay.Sound.md#volumemultiplier)**(): `number` <br> 获取音量比例|


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
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:020 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[getIsDrawInnerBounds](Gameplay.Sound.md#getisdrawinnerbounds)**(): `boolean` <br> since:022 reason: 删除接口 replacement:|
| **[pause](Gameplay.Sound.md#pause)**(): `void` <br> 暂停播放特效|
| **[play](Gameplay.Sound.md#play)**(): `void` <br> 播放音效|
| **[setSoundSphere](Gameplay.Sound.md#setsoundsphere)**(`number`, `number`, `boolean`, [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)): `void` <br> since:022 reason: 删除接口 replacement:|
| **[stop](Gameplay.Sound.md#stop)**(): `void` <br> 停止播放特效|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`Component`, `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`string`, `unknown`, `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<extends `GameObject`<`T`\> |\>([`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<extends `GameObject`<`T`\> |\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`, [`Transform`](Type.Transform.md)): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<extends `GameObject`<`T`\> |\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): extends `GameObject`<`T`\> | <br> 构造一个 GameObject|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`, [`Transform`](Type.Transform.md)): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

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

• `get` **attenuationDistanceModel**(): [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) <Badge type="tip" text="other" />

获取音效的衰减方式


#### Returns

[`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md)

衰减方式

___

### audioAsset <Score text="audioAsset" /> 

• `set` **audioAsset**(`assetGuid`): `void`

设置音效

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetGuid` | `string` |


___

### autoPlay <Score text="autoPlay" /> 

• `get` **autoPlay**(): `boolean`

获取是否自动播放

#### Returns

`boolean`

是否自动播放

• `set` **autoPlay**(`autoPlay`): `void`

设置是否自动播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoPlay` | `boolean` | 是否自动播放 |


___

### currentProgress <Score text="currentProgress" /> 

• `get` **currentProgress**(): `number`

获取当前播放时长进度

#### Returns

`number`

播放时长进度

___

### drawInnerBounds <Score text="drawInnerBounds" /> 

• `get` **drawInnerBounds**(): `boolean`

**`Deprecated`**

since:022 reason: 删除接口 replacement:

获取是否绘制Bounds辅助线

#### Returns

`boolean`

是否绘制

• `set` **drawInnerBounds**(`drawInnerBounds`): `void`

**`Deprecated`**

since:022 reason: 删除接口 replacement:

设置是否绘制Bounds辅助线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `drawInnerBounds` | `boolean` | 是否绘制 |


___

### duration <Score text="duration" /> 

• `get` **duration**(): `number` <Badge type="tip" text="other" />

获取音效时长


#### Returns

`number`

音效时长(ms)


### innerRadius <Score text="innerRadius" /> 

• `get` **innerRadius**(): `number`

获取音量内部半径

#### Returns

`number`

音量内部半径

• `set` **innerRadius**(`innerRadius`): `void`

设置音量内部半径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `innerRadius` | `number` | 设置半径 |



### loop <Score text="loop" /> 

• `get` **loop**(): `boolean`

获取是否循环播放

#### Returns

`boolean`

是否循环

• `set` **loop**(`Loop`): `void`

设置循环播放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Loop` | `boolean` | 设置是否开启循环 |



### outerRadius <Score text="outerRadius" /> 

• `get` **outerRadius**(): `number`

获取衰减距离

#### Returns

`number`

距离

• `set` **outerRadius**(`outerRadius`): `void`

设置外部半径（衰减距离）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outerRadius` | `number` | 距离 |



### playState <Score text="playState" /> 

• `get` **playState**(): `boolean` <Badge type="tip" text="other" />

获取音效播放状态


#### Returns

`boolean`

是否正在播放


### spatialization <Score text="spatialization" /> 

• `get` **spatialization**(): `boolean`

获取音效空间化

#### Returns

`boolean`

是否开启音效空间化

• `set` **spatialization**(`spatialization`): `void`

设置音效空间化，若是，则开启空间传播衰减

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spatialization` | `boolean` | 设置开启音效空间化 |



### uiSound <Score text="uiSound" /> 

• `get` **uiSound**(): `boolean` <Badge type="tip" text="other" />

获取是否是UI音效


#### Returns

`boolean`

Vector XYZ 0-1

• `set` **uiSound**(`uiSound`): `void` <Badge type="tip" text="other" />

设置是否是UI音效


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uiSound` | `boolean` | 是否用于UI |



### volumeMultiplier <Score text="volumeMultiplier" /> 

• `get` **volumeMultiplier**(): `number`

获取音量比例

#### Returns

`number`

音量比例

• `set` **volumeMultiplier**(`volumeMultiplier`): `void`

设置音量比例

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volumeMultiplier` | `number` | 音量比例 |



## Methods

### getIsDrawInnerBounds <Score text="getIsDrawInnerBounds" /> 

• **getIsDrawInnerBounds**(): `boolean` <Badge type="tip" text="other" />

**`Deprecated`**

since:022 reason: 删除接口 replacement:

获取是否启用Bounds辅助线


#### Returns

`boolean`

是否启用


### pause <Score text="pause" /> 

• **pause**(): `void` <Badge type="tip" text="other" />

暂停播放特效



___

### play <Score text="play" /> 

• **play**(): `void` <Badge type="tip" text="other" />

播放音效




### setSoundSphere <Score text="setSoundSphere" /> 

• **setSoundSphere**(`radius`, `volume`, `drawBoundLine`, `newFunction`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:022 reason: 删除接口 replacement:

设置音效.复合函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | 半径 |
| `volume` | `number` | 音量大小 |
| `drawBoundLine` | `boolean` | 是否画辅助线 |
| `newFunction` | [`AttenuationDistanceModel`](../enums/Gameplay.AttenuationDistanceModel.md) | 音效衰减类型 |



### stop <Score text="stop" /> 

• **stop**(): `void` <Badge type="tip" text="other" />

停止播放特效


