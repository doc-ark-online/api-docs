[Lighting](../groups/Lighting.Lighting.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" /> <Score text="PostProcess" />

后处理对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PostProcess`**

## Table of contents

| Accessors |
| :-----|
| **[ambientOcclusionIntensity](Gameplay.PostProcess.md#ambientocclusionintensity)**(): `number` <br> 获取环境光遮蔽强度|
| **[ambientOcclusionRadius](Gameplay.PostProcess.md#ambientocclusionradius)**(): `number` <br> 获取环境光遮蔽半径|
| **[autoExposureBias](Gameplay.PostProcess.md#autoexposurebias)**(): `number` <br> 获取曝光补偿|
| **[autoExposureMaxBrightness](Gameplay.PostProcess.md#autoexposuremaxbrightness)**(): `number` <br> 获取曝光最大亮度|
| **[autoExposureMinBrightness](Gameplay.PostProcess.md#autoexposureminbrightness)**(): `number` <br> 获取曝光最小亮度|
| **[bloomIntensity](Gameplay.PostProcess.md#bloomintensity)**(): `number` <br> 获取泛光|
| **[globalContrast](Gameplay.PostProcess.md#globalcontrast)**(): `number` <br> 获取全局对比度|
| **[globalGamma](Gameplay.PostProcess.md#globalgamma)**(): `number` <br> 获取全局伽马值|
| **[globalSaturation](Gameplay.PostProcess.md#globalsaturation)**(): `number` <br> 获取全局饱和度|
| **[hDRContrast](Gameplay.PostProcess.md#hdrcontrast)**(): `number` <br> 获取HDR对比度|
| **[hDRGamma](Gameplay.PostProcess.md#hdrgamma)**(): `number` <br> 获取HDR伽马值|
| **[hDRSaturation](Gameplay.PostProcess.md#hdrsaturation)**(): `number` <br> 获取HDR饱和度|
| **[lDR2HDRThreshold](Gameplay.PostProcess.md#ldr2hdrthreshold)**(): `number` <br> 获取LDR与HDR阈值|
| **[lDRContrast](Gameplay.PostProcess.md#ldrcontrast)**(): `number` <br> 获取LDR对比度Contrast|
| **[lDRGamma](Gameplay.PostProcess.md#ldrgamma)**(): `number` <br> 获取LDR伽马值|
| **[lDRSaturation](Gameplay.PostProcess.md#ldrsaturation)**(): `number` <br> 获取LDR饱和度|
| **[lUTBlend](Gameplay.PostProcess.md#lutblend)**(): `number` <br> 获取LUT百分比|
| **[lUTTextureAssetByGuid](Gameplay.PostProcess.md#luttextureassetbyguid)**(): `string` <br> 获取LUT贴图资源GUID|
| **[motionBlur](Gameplay.PostProcess.md#motionblur)**(): `number` <br> 获取动态模糊|
| **[occlusionBlend](Gameplay.PostProcess.md#occlusionblend)**(): `number` <br> 获取被遮挡融合比例|
| **[outlineWidth](Gameplay.PostProcess.md#outlinewidth)**(): `number` <br> 获取描边宽度|
| **[toneBlackClip](Gameplay.PostProcess.md#toneblackclip)**(): `number` <br> 获取色调映射暗部裁剪|
| **[toneCurveAmount](Gameplay.PostProcess.md#tonecurveamount)**(): `number` <br> 获取当前色调映射|
| **[toneShoulder](Gameplay.PostProcess.md#toneshoulder)**(): `number` <br> 获取色调映射高位阈值|
| **[toneSlope](Gameplay.PostProcess.md#toneslope)**(): `number` <br> 获取色调映射斜率|
| **[toneToe](Gameplay.PostProcess.md#tonetoe)**(): `number` <br> 获取色调映射低位阈值|
| **[toneWhiteClip](Gameplay.PostProcess.md#tonewhiteclip)**(): `number` <br> 获取色调映射亮部裁剪|


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
| **[addOutlineColor](Gameplay.PostProcess.md#addoutlinecolor)**(`newOutlineColor`: [`LinearColor`](Type.LinearColor.md)): `number` <br> 添加一个描边颜色并返回对应的索引|


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


## Accessors

### ambientOcclusionIntensity <Score text="ambientOcclusionIntensity" /> 

• `get` **ambientOcclusionIntensity**(): `number` 

获取环境光遮蔽强度


#### Returns

`number`

获取值

• `set` **ambientOcclusionIntensity**(`Value`): `void` 

设置环境光遮蔽强度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### ambientOcclusionRadius <Score text="ambientOcclusionRadius" /> 

• `get` **ambientOcclusionRadius**(): `number` 

获取环境光遮蔽半径


#### Returns

`number`

获取值

• `set` **ambientOcclusionRadius**(`Value`): `void` 

设置环境光遮蔽半径（0.1 ~ 500.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### autoExposureBias <Score text="autoExposureBias" /> 

• `get` **autoExposureBias**(): `number` 

获取曝光补偿


#### Returns

`number`

获取值

• `set` **autoExposureBias**(`Value`): `void` 

设置曝光补偿（-15 ~ 15）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### autoExposureMaxBrightness <Score text="autoExposureMaxBrightness" /> 

• `get` **autoExposureMaxBrightness**(): `number` 

获取曝光最大亮度


#### Returns

`number`

获取值

• `set` **autoExposureMaxBrightness**(`Value`): `void` 

设置曝光最大亮度（-10 ~ 20）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### autoExposureMinBrightness <Score text="autoExposureMinBrightness" /> 

• `get` **autoExposureMinBrightness**(): `number` 

获取曝光最小亮度


#### Returns

`number`

获取值

• `set` **autoExposureMinBrightness**(`Value`): `void` 

设置曝光最小亮度（-10 ~ 20）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### bloomIntensity <Score text="bloomIntensity" /> 

• `get` **bloomIntensity**(): `number` 

获取泛光


#### Returns

`number`

获取值

• `set` **bloomIntensity**(`Value`): `void` 

设置泛光（0 ~ 8）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |



### globalContrast <Score text="globalContrast" /> 

• `get` **globalContrast**(): `number` 

获取全局对比度


#### Returns

`number`

获取值

• `set` **globalContrast**(`Value`): `void` 

设置全局对比度 （0.2 ~ 5.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### globalGamma <Score text="globalGamma" /> 

• `get` **globalGamma**(): `number` 

获取全局伽马值


#### Returns

`number`

获取值

• `set` **globalGamma**(`Value`): `void` 

设置全局伽马值（0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### globalSaturation <Score text="globalSaturation" /> 

• `get` **globalSaturation**(): `number` 

获取全局饱和度


#### Returns

`number`

获取值

• `set` **globalSaturation**(`Value`): `void` 

设置全局饱和度 （0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |



### hDRContrast <Score text="hDRContrast" /> 

• `get` **hDRContrast**(): `number` 

获取HDR对比度


#### Returns

`number`

获取值

• `set` **hDRContrast**(`Value`): `void` 

设置HDR对比度 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### hDRGamma <Score text="hDRGamma" /> 

• `get` **hDRGamma**(): `number` 

获取HDR伽马值


#### Returns

`number`

获取值

• `set` **hDRGamma**(`Value`): `void` 

设置HDR伽马值 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### hDRSaturation <Score text="hDRSaturation" /> 

• `get` **hDRSaturation**(): `number` 

获取HDR饱和度


#### Returns

`number`

获取值

• `set` **hDRSaturation**(`Value`): `void` 

设置HDR饱和度 （0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lDR2HDRThreshold <Score text="lDR" /> 

• `get` **lDR2HDRThreshold**(): `number` 

获取LDR与HDR阈值


#### Returns

`number`

获取值

• `set` **lDR2HDRThreshold**(`Value`): `void` 

设置LDR与HDR阈值 （-1 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lDRContrast <Score text="lDRContrast" /> 

• `get` **lDRContrast**(): `number` 

获取LDR对比度Contrast


#### Returns

`number`

获取值

• `set` **lDRContrast**(`Value`): `void` 

设置LDR对比度Contrast （0.2 ~ 5.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lDRGamma <Score text="lDRGamma" /> 

• `get` **lDRGamma**(): `number` 

获取LDR伽马值


#### Returns

`number`

获取值

• `set` **lDRGamma**(`Value`): `void` 

设置LDR伽马值 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lDRSaturation <Score text="lDRSaturation" /> 

• `get` **lDRSaturation**(): `number` 

获取LDR饱和度


#### Returns

`number`

获取值

• `set` **lDRSaturation**(`Value`): `void` 

设置LDR饱和度（0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lUTBlend <Score text="lUTBlend" /> 

• `get` **lUTBlend**(): `number` 

获取LUT百分比


#### Returns

`number`

获取值

• `set` **lUTBlend**(`Value`): `void` 

设置LUT百分比 （0 ~ 100）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### lUTTextureAssetByGuid <Score text="lUTTextureAssetByGuid" /> 

• `get` **lUTTextureAssetByGuid**(): `string` 

获取LUT贴图资源GUID


#### Returns

`string`

获取当前LUT贴图的GUID值

• `set` **lUTTextureAssetByGuid**(`Value`): `void` 

设置LUT贴图资源通过GUID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `string` | 需要设置的贴图GUID |



### motionBlur <Score text="motionBlur" /> 

• `get` **motionBlur**(): `number` 

获取动态模糊


#### Returns

`number`

获取值

• `set` **motionBlur**(`Value`): `void` 

设置动态模糊 （0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |



### occlusionBlend <Score text="occlusionBlend" /> 

• `get` **occlusionBlend**(): `number` 

获取被遮挡融合比例


#### Returns

`number`

获取值

• `set` **occlusionBlend**(`Value`): `void` 

设置被遮挡融合比例（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### outlineWidth <Score text="outlineWidth" /> 

• `get` **outlineWidth**(): `number` 

获取描边宽度


#### Returns

`number`

获取值

• `set` **outlineWidth**(`Value`): `void` 

设置描边宽度 （0 ~ 4）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |



### toneBlackClip <Score text="toneBlackClip" /> 

• `get` **toneBlackClip**(): `number` 

获取色调映射暗部裁剪


#### Returns

`number`

获取值

• `set` **toneBlackClip**(`Value`): `void` 

设置色调映射暗部裁剪（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### toneCurveAmount <Score text="toneCurveAmount" /> 

• `get` **toneCurveAmount**(): `number` 

获取当前色调映射


#### Returns

`number`

获取值

• `set` **toneCurveAmount**(`Value`): `void` 

设置色调映射 （0 ~ 100）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### toneShoulder <Score text="toneShoulder" /> 

• `get` **toneShoulder**(): `number` 

获取色调映射高位阈值


#### Returns

`number`

获取值

• `set` **toneShoulder**(`Value`): `void` 

设置色调映射高位阈值（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### toneSlope <Score text="toneSlope" /> 

• `get` **toneSlope**(): `number` 

获取色调映射斜率


#### Returns

`number`

获取值

• `set` **toneSlope**(`Value`): `void` 

设置色调映射斜率 （0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### toneToe <Score text="toneToe" /> 

• `get` **toneToe**(): `number` 

获取色调映射低位阈值


#### Returns

`number`

获取值

• `set` **toneToe**(`Value`): `void` 

设置色调映射低位阈值（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### toneWhiteClip <Score text="toneWhiteClip" /> 

• `get` **toneWhiteClip**(): `number` 

获取色调映射亮部裁剪


#### Returns

`number`

获取值

• `set` **toneWhiteClip**(`Value`): `void` 

设置色调映射亮部裁剪（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |



## Methods

### addOutlineColor <Score text="addOutlineColor" /> 

• **addOutlineColor**(`newOutlineColor`): `number` 

添加一个描边颜色并返回对应的索引


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值
