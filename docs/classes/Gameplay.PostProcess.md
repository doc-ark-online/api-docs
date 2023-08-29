[LIGHTING](../groups/LIGHTING.LIGHTING.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" /> <Score text="PostProcess" />

后处理对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PostProcess`**

## Table of contents

| Properties |
| :-----|
| **[postProcessConfig](Gameplay.PostProcess.md#postprocessconfig)**: [`PostProcessConfig`](Gameplay.PostProcessConfig.md) <br> 后处理批量配置参数|

| Accessors |
| :-----|


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
| **[addOutlineColor](Gameplay.PostProcess.md#addoutlinecolor-1)**(`newOutlineColor`: [`LinearColor`](Type.LinearColor.md)): `number` <br> 添加一个描边颜色并返回对应的索引|
| **[getAmbientOcclusionIntensity](Gameplay.PostProcess.md#getambientocclusionintensity)**(): `number` <br> 获取环境光遮蔽强度|
| **[getAmbientOcclusionRadius](Gameplay.PostProcess.md#getambientocclusionradius)**(): `number` <br> 获取环境光遮蔽半径|
| **[getAutoExposureBias](Gameplay.PostProcess.md#getautoexposurebias)**(): `number` <br> 获取曝光补偿|
| **[getAutoExposureMaxBrightness](Gameplay.PostProcess.md#getautoexposuremaxbrightness)**(): `number` <br> 获取曝光最大亮度|
| **[getAutoExposureMinBrightness](Gameplay.PostProcess.md#getautoexposureminbrightness)**(): `number` <br> 获取曝光最小亮度|
| **[getBloomIntensity](Gameplay.PostProcess.md#getbloomintensity)**(): `number` <br> 获取泛光|
| **[getConfig](Gameplay.PostProcess.md#getconfig)**(): [`PostProcessConfig`](Gameplay.PostProcessConfig.md) <br> 获取后处理属性配置|
| **[getGlobalContrast](Gameplay.PostProcess.md#getglobalcontrast)**(): `number` <br> 获取全局对比度|
| **[getGlobalGamma](Gameplay.PostProcess.md#getglobalgamma)**(): `number` <br> 获取全局伽马值|
| **[getGlobalSaturation](Gameplay.PostProcess.md#getglobalsaturation)**(): `number` <br> 获取全局饱和度|
| **[getHDRContrast](Gameplay.PostProcess.md#gethdrcontrast)**(): `number` <br> 获取HDR对比度|
| **[getHDRGamma](Gameplay.PostProcess.md#gethdrgamma)**(): `number` <br> 获取HDR伽马值|
| **[getHDRSaturation](Gameplay.PostProcess.md#gethdrsaturation)**(): `number` <br> 获取HDR饱和度|
| **[getInstance](Gameplay.PostProcess.md#getinstance)**(): [`PostProcess`](Gameplay.PostProcess.md) <br> 获取后处理实例|
| **[getLDR2HDRThreshold](Gameplay.PostProcess.md#getldr2hdrthreshold)**(): `number` <br> 获取LDR与HDR阈值|
| **[getLDRContrast](Gameplay.PostProcess.md#getldrcontrast)**(): `number` <br> 获取LDR对比度Contrast|
| **[getLDRGamma](Gameplay.PostProcess.md#getldrgamma)**(): `number` <br> 获取LDR伽马值|
| **[getLDRSaturation](Gameplay.PostProcess.md#getldrsaturation)**(): `number` <br> 获取LDR饱和度|
| **[getLUTBlend](Gameplay.PostProcess.md#getlutblend)**(): `number` <br> 获取LUT百分比|
| **[getLUTTextureAssetByGuid](Gameplay.PostProcess.md#getluttextureassetbyguid)**(): `string` <br> 获取LUT贴图资源GUID|
| **[getMotionBlur](Gameplay.PostProcess.md#getmotionblur)**(): `number` <br> 获取动态模糊|
| **[getOcclusionBlend](Gameplay.PostProcess.md#getocclusionblend)**(): `number` <br> 获取被遮挡融合比例|
| **[getOutlineCoveredAlpha](Gameplay.PostProcess.md#getoutlinecoveredalpha)**(): `number` <br> 获取被遮挡部分高亮透明度|
| **[getOutlineCoveredEdgeAlpha](Gameplay.PostProcess.md#getoutlinecoverededgealpha)**(): `number` <br> 获取被遮挡部分描边透明度|
| **[getOutlineNotCoveredAlpha](Gameplay.PostProcess.md#getoutlinenotcoveredalpha)**(): `number` <br> 获取未被遮挡部分高亮透明度|
| **[getOutlineNotCoveredEdgeAlpha](Gameplay.PostProcess.md#getoutlinenotcoverededgealpha)**(): `number` <br> 获取未被遮挡部分描边透明度|
| **[getOutlineWidth](Gameplay.PostProcess.md#getoutlinewidth)**(): `number` <br> 获取描边宽度|
| **[getToneBlackClip](Gameplay.PostProcess.md#gettoneblackclip)**(): `number` <br> 获取色调映射暗部裁剪|
| **[getToneCurveAmount](Gameplay.PostProcess.md#gettonecurveamount)**(): `number` <br> 获取当前色调映射|
| **[getToneShoulder](Gameplay.PostProcess.md#gettoneshoulder)**(): `number` <br> 获取色调映射高位阈值|
| **[getToneSlope](Gameplay.PostProcess.md#gettoneslope)**(): `number` <br> 获取色调映射斜率|
| **[getToneToe](Gameplay.PostProcess.md#gettonetoe)**(): `number` <br> 获取色调映射低位阈值|
| **[getToneWhiteClip](Gameplay.PostProcess.md#gettonewhiteclip)**(): `number` <br> 获取色调映射亮部裁剪|
| **[setAmbientOcclusionIntensity](Gameplay.PostProcess.md#setambientocclusionintensity)**(`Value`: `number`): `void` <br> 设置环境光遮蔽强度（0 ~ 1）|
| **[setAmbientOcclusionRadius](Gameplay.PostProcess.md#setambientocclusionradius)**(`Value`: `number`): `void` <br> 设置环境光遮蔽半径（0.1 ~ 500.0）|
| **[setAutoExposureBias](Gameplay.PostProcess.md#setautoexposurebias)**(`Value`: `number`): `void` <br> 设置曝光补偿（-15 ~ 15）|
| **[setAutoExposureMaxBrightness](Gameplay.PostProcess.md#setautoexposuremaxbrightness)**(`Value`: `number`): `void` <br> 设置曝光最大亮度（-10 ~ 20）|
| **[setAutoExposureMinBrightness](Gameplay.PostProcess.md#setautoexposureminbrightness)**(`Value`: `number`): `void` <br> 设置曝光最小亮度（-10 ~ 20）|
| **[setBloomIntensity](Gameplay.PostProcess.md#setbloomintensity)**(`Value`: `number`): `void` <br> 设置泛光（0 ~ 8）|
| **[setConfig](Gameplay.PostProcess.md#setconfig)**(`newConfig`: [`PostProcessConfig`](Gameplay.PostProcessConfig.md)): `void` <br> 设置后处理属性配置|
| **[setGlobalContrast](Gameplay.PostProcess.md#setglobalcontrast)**(`Value`: `number`): `void` <br> 设置全局对比度 （0.2 ~ 5.0）|
| **[setGlobalGamma](Gameplay.PostProcess.md#setglobalgamma)**(`Value`: `number`): `void` <br> 设置全局伽马值（0 ~ 5）|
| **[setGlobalSaturation](Gameplay.PostProcess.md#setglobalsaturation)**(`Value`: `number`): `void` <br> 设置全局饱和度 （0 ~ 2）|
| **[setHDRContrast](Gameplay.PostProcess.md#sethdrcontrast)**(`Value`: `number`): `void` <br> 设置HDR对比度 （0 ~ 5）|
| **[setHDRGamma](Gameplay.PostProcess.md#sethdrgamma)**(`Value`: `number`): `void` <br> 设置HDR伽马值 （0 ~ 5）|
| **[setHDRSaturation](Gameplay.PostProcess.md#sethdrsaturation)**(`Value`: `number`): `void` <br> 设置HDR饱和度 （0 ~ 2）|
| **[setLDR2HDRThreshold](Gameplay.PostProcess.md#setldr2hdrthreshold)**(`Value`: `number`): `void` <br> 设置LDR与HDR阈值 （-1 ~ 1）|
| **[setLDRContrast](Gameplay.PostProcess.md#setldrcontrast)**(`Value`: `number`): `void` <br> 设置LDR对比度Contrast （0.2 ~ 5.0）|
| **[setLDRGamma](Gameplay.PostProcess.md#setldrgamma)**(`Value`: `number`): `void` <br> 设置LDR伽马值 （0 ~ 5）|
| **[setLDRSaturation](Gameplay.PostProcess.md#setldrsaturation)**(`Value`: `number`): `void` <br> 设置LDR饱和度（0 ~ 2）|
| **[setLUTBlend](Gameplay.PostProcess.md#setlutblend)**(`Value`: `number`): `void` <br> 设置LUT百分比 （0 ~ 100）|
| **[setLUTTextureAssetByGuid](Gameplay.PostProcess.md#setluttextureassetbyguid)**(`Value`: `string`): `void` <br> 设置LUT贴图资源通过GUID|
| **[setMotionBlur](Gameplay.PostProcess.md#setmotionblur)**(`Value`: `number`): `void` <br> 设置动态模糊 （0 ~ 1）|
| **[setOcclusionBlend](Gameplay.PostProcess.md#setocclusionblend)**(`Value`: `number`): `void` <br> 设置被遮挡融合比例（0 ~ 1）|
| **[setOutlineCoveredAlpha](Gameplay.PostProcess.md#setoutlinecoveredalpha)**(`Value`: `number`): `void` <br> 设置被遮挡部分高亮透明度（0 ~ 1）|
| **[setOutlineCoveredEdgeAlpha](Gameplay.PostProcess.md#setoutlinecoverededgealpha)**(`Value`: `number`): `void` <br> 设置被遮挡部分描边透明度（0 ~ 1）|
| **[setOutlineNotCoveredAlpha](Gameplay.PostProcess.md#setoutlinenotcoveredalpha)**(`Value`: `number`): `void` <br> 设置未被遮挡部分高亮透明度（0 ~ 1）|
| **[setOutlineNotCoveredEdgeAlpha](Gameplay.PostProcess.md#setoutlinenotcoverededgealpha)**(`Value`: `number`): `void` <br> 设置未被遮挡部分描边透明度（0 ~ 1）|
| **[setOutlineWidth](Gameplay.PostProcess.md#setoutlinewidth)**(`Value`: `number`): `void` <br> 设置描边宽度（0 ~ 10）|
| **[setPreset](Gameplay.PostProcess.md#setpreset)**(`newPreset`: [`PostProcessPreset`](../enums/Gameplay.PostProcessPreset.md)): `void` <br> 设置预设|
| **[setToneBlackClip](Gameplay.PostProcess.md#settoneblackclip)**(`Value`: `number`): `void` <br> 设置色调映射暗部裁剪（0 ~ 1）|
| **[setToneCurveAmount](Gameplay.PostProcess.md#settonecurveamount)**(`Value`: `number`): `void` <br> 设置色调映射 （0 ~ 100）|
| **[setToneShoulder](Gameplay.PostProcess.md#settoneshoulder)**(`Value`: `number`): `void` <br> 设置色调映射高位阈值（0 ~ 1）|
| **[setToneSlope](Gameplay.PostProcess.md#settoneslope)**(`Value`: `number`): `void` <br> 设置色调映射斜率 （0 ~ 1）|
| **[setToneToe](Gameplay.PostProcess.md#settonetoe)**(`Value`: `number`): `void` <br> 设置色调映射低位阈值（0 ~ 1）|
| **[setToneWhiteClip](Gameplay.PostProcess.md#settonewhiteclip)**(`Value`: `number`): `void` <br> 设置色调映射亮部裁剪（0 ~ 1）|


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


### postProcessConfig <Score text="postProcessConfig" /> 

• **postProcessConfig**: [`PostProcessConfig`](Gameplay.PostProcessConfig.md)

后处理批量配置参数

## Accessors

## Methods
___

### addOutlineColor <Score text="addOutlineColor" /> 

• `Static` **addOutlineColor**(`newOutlineColor`): `number` 

添加一个描边颜色并返回对应的索引


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值

___

### getAmbientOcclusionIntensity <Score text="getAmbientOcclusionIntensity" /> 

• `Static` **getAmbientOcclusionIntensity**(): `number` 

获取环境光遮蔽强度


#### Returns

`number`

获取值

___

### getAmbientOcclusionRadius <Score text="getAmbientOcclusionRadius" /> 

• `Static` **getAmbientOcclusionRadius**(): `number` 

获取环境光遮蔽半径


#### Returns

`number`

获取值

___

### getAutoExposureBias <Score text="getAutoExposureBias" /> 

• `Static` **getAutoExposureBias**(): `number` 

获取曝光补偿


#### Returns

`number`

获取值

___

### getAutoExposureMaxBrightness <Score text="getAutoExposureMaxBrightness" /> 

• `Static` **getAutoExposureMaxBrightness**(): `number` 

获取曝光最大亮度


#### Returns

`number`

获取值

___

### getAutoExposureMinBrightness <Score text="getAutoExposureMinBrightness" /> 

• `Static` **getAutoExposureMinBrightness**(): `number` 

获取曝光最小亮度


#### Returns

`number`

获取值

___

### getBloomIntensity <Score text="getBloomIntensity" /> 

• `Static` **getBloomIntensity**(): `number` 

获取泛光


#### Returns

`number`

获取值

___

### getConfig <Score text="getConfig" /> 

• `Static` **getConfig**(): [`PostProcessConfig`](Gameplay.PostProcessConfig.md) 

获取后处理属性配置


#### Returns

[`PostProcessConfig`](Gameplay.PostProcessConfig.md)

获取值

___

### getGlobalContrast <Score text="getGlobalContrast" /> 

• `Static` **getGlobalContrast**(): `number` 

获取全局对比度


#### Returns

`number`

获取值

___

### getGlobalGamma <Score text="getGlobalGamma" /> 

• `Static` **getGlobalGamma**(): `number` 

获取全局伽马值


#### Returns

`number`

获取值

___

### getGlobalSaturation <Score text="getGlobalSaturation" /> 

• `Static` **getGlobalSaturation**(): `number` 

获取全局饱和度


#### Returns

`number`

获取值

___

### getHDRContrast <Score text="getHDRContrast" /> 

• `Static` **getHDRContrast**(): `number` 

获取HDR对比度


#### Returns

`number`

获取值

___

### getHDRGamma <Score text="getHDRGamma" /> 

• `Static` **getHDRGamma**(): `number` 

获取HDR伽马值


#### Returns

`number`

获取值

___

### getHDRSaturation <Score text="getHDRSaturation" /> 

• `Static` **getHDRSaturation**(): `number` 

获取HDR饱和度


#### Returns

`number`

获取值

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`PostProcess`](Gameplay.PostProcess.md) 

获取后处理实例


#### Returns

[`PostProcess`](Gameplay.PostProcess.md)

后处理实例

___

### getLDR2HDRThreshold <Score text="getLDR" /> 

• `Static` **getLDR2HDRThreshold**(): `number` 

获取LDR与HDR阈值


#### Returns

`number`

获取值

___

### getLDRContrast <Score text="getLDRContrast" /> 

• `Static` **getLDRContrast**(): `number` 

获取LDR对比度Contrast


#### Returns

`number`

获取值

___

### getLDRGamma <Score text="getLDRGamma" /> 

• `Static` **getLDRGamma**(): `number` 

获取LDR伽马值


#### Returns

`number`

获取值

___

### getLDRSaturation <Score text="getLDRSaturation" /> 

• `Static` **getLDRSaturation**(): `number` 

获取LDR饱和度


#### Returns

`number`

获取值

___

### getLUTBlend <Score text="getLUTBlend" /> 

• `Static` **getLUTBlend**(): `number` 

获取LUT百分比


#### Returns

`number`

获取值

___

### getLUTTextureAssetByGuid <Score text="getLUTTextureAssetByGuid" /> 

• `Static` **getLUTTextureAssetByGuid**(): `string` 

获取LUT贴图资源GUID


#### Returns

`string`

获取当前LUT贴图的GUID值

___

### getMotionBlur <Score text="getMotionBlur" /> 

• `Static` **getMotionBlur**(): `number` 

获取动态模糊


#### Returns

`number`

获取值

___

### getOcclusionBlend <Score text="getOcclusionBlend" /> 

• `Static` **getOcclusionBlend**(): `number` 

获取被遮挡融合比例


#### Returns

`number`

获取值

___

### getOutlineCoveredAlpha <Score text="getOutlineCoveredAlpha" /> 

• `Static` **getOutlineCoveredAlpha**(): `number` 

获取被遮挡部分高亮透明度


#### Returns

`number`

获取值

___

### getOutlineCoveredEdgeAlpha <Score text="getOutlineCoveredEdgeAlpha" /> 

• `Static` **getOutlineCoveredEdgeAlpha**(): `number` 

获取被遮挡部分描边透明度


#### Returns

`number`

获取值

___

### getOutlineNotCoveredAlpha <Score text="getOutlineNotCoveredAlpha" /> 

• `Static` **getOutlineNotCoveredAlpha**(): `number` 

获取未被遮挡部分高亮透明度


#### Returns

`number`

获取值

___

### getOutlineNotCoveredEdgeAlpha <Score text="getOutlineNotCoveredEdgeAlpha" /> 

• `Static` **getOutlineNotCoveredEdgeAlpha**(): `number` 

获取未被遮挡部分描边透明度


#### Returns

`number`

获取值

___

### getOutlineWidth <Score text="getOutlineWidth" /> 

• `Static` **getOutlineWidth**(): `number` 

获取描边宽度


#### Returns

`number`

获取值

___

### getToneBlackClip <Score text="getToneBlackClip" /> 

• `Static` **getToneBlackClip**(): `number` 

获取色调映射暗部裁剪


#### Returns

`number`

获取值

___

### getToneCurveAmount <Score text="getToneCurveAmount" /> 

• `Static` **getToneCurveAmount**(): `number` 

获取当前色调映射


#### Returns

`number`

获取值

___

### getToneShoulder <Score text="getToneShoulder" /> 

• `Static` **getToneShoulder**(): `number` 

获取色调映射高位阈值


#### Returns

`number`

获取值

___

### getToneSlope <Score text="getToneSlope" /> 

• `Static` **getToneSlope**(): `number` 

获取色调映射斜率


#### Returns

`number`

获取值

___

### getToneToe <Score text="getToneToe" /> 

• `Static` **getToneToe**(): `number` 

获取色调映射低位阈值


#### Returns

`number`

获取值

___

### getToneWhiteClip <Score text="getToneWhiteClip" /> 

• `Static` **getToneWhiteClip**(): `number` 

获取色调映射亮部裁剪


#### Returns

`number`

获取值

___

### setAmbientOcclusionIntensity <Score text="setAmbientOcclusionIntensity" /> 

• `Static` **setAmbientOcclusionIntensity**(`Value`): `void` 

设置环境光遮蔽强度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setAmbientOcclusionRadius <Score text="setAmbientOcclusionRadius" /> 

• `Static` **setAmbientOcclusionRadius**(`Value`): `void` 

设置环境光遮蔽半径（0.1 ~ 500.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setAutoExposureBias <Score text="setAutoExposureBias" /> 

• `Static` **setAutoExposureBias**(`Value`): `void` 

设置曝光补偿（-15 ~ 15）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setAutoExposureMaxBrightness <Score text="setAutoExposureMaxBrightness" /> 

• `Static` **setAutoExposureMaxBrightness**(`Value`): `void` 

设置曝光最大亮度（-10 ~ 20）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setAutoExposureMinBrightness <Score text="setAutoExposureMinBrightness" /> 

• `Static` **setAutoExposureMinBrightness**(`Value`): `void` 

设置曝光最小亮度（-10 ~ 20）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setBloomIntensity <Score text="setBloomIntensity" /> 

• `Static` **setBloomIntensity**(`Value`): `void` 

设置泛光（0 ~ 8）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setConfig <Score text="setConfig" /> 

• `Static` **setConfig**(`newConfig`): `void` 

设置后处理属性配置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newConfig` | [`PostProcessConfig`](Gameplay.PostProcessConfig.md) | 设置值 |


___

### setGlobalContrast <Score text="setGlobalContrast" /> 

• `Static` **setGlobalContrast**(`Value`): `void` 

设置全局对比度 （0.2 ~ 5.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setGlobalGamma <Score text="setGlobalGamma" /> 

• `Static` **setGlobalGamma**(`Value`): `void` 

设置全局伽马值（0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setGlobalSaturation <Score text="setGlobalSaturation" /> 

• `Static` **setGlobalSaturation**(`Value`): `void` 

设置全局饱和度 （0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setHDRContrast <Score text="setHDRContrast" /> 

• `Static` **setHDRContrast**(`Value`): `void` 

设置HDR对比度 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setHDRGamma <Score text="setHDRGamma" /> 

• `Static` **setHDRGamma**(`Value`): `void` 

设置HDR伽马值 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setHDRSaturation <Score text="setHDRSaturation" /> 

• `Static` **setHDRSaturation**(`Value`): `void` 

设置HDR饱和度 （0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLDR2HDRThreshold <Score text="setLDR" /> 

• `Static` **setLDR2HDRThreshold**(`Value`): `void` 

设置LDR与HDR阈值 （-1 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLDRContrast <Score text="setLDRContrast" /> 

• `Static` **setLDRContrast**(`Value`): `void` 

设置LDR对比度Contrast （0.2 ~ 5.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLDRGamma <Score text="setLDRGamma" /> 

• `Static` **setLDRGamma**(`Value`): `void` 

设置LDR伽马值 （0 ~ 5）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLDRSaturation <Score text="setLDRSaturation" /> 

• `Static` **setLDRSaturation**(`Value`): `void` 

设置LDR饱和度（0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLUTBlend <Score text="setLUTBlend" /> 

• `Static` **setLUTBlend**(`Value`): `void` 

设置LUT百分比 （0 ~ 100）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setLUTTextureAssetByGuid <Score text="setLUTTextureAssetByGuid" /> 

• `Static` **setLUTTextureAssetByGuid**(`Value`): `void` 

设置LUT贴图资源通过GUID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `string` | 需要设置的贴图GUID |


___

### setMotionBlur <Score text="setMotionBlur" /> 

• `Static` **setMotionBlur**(`Value`): `void` 

设置动态模糊 （0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOcclusionBlend <Score text="setOcclusionBlend" /> 

• `Static` **setOcclusionBlend**(`Value`): `void` 

设置被遮挡融合比例（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOutlineCoveredAlpha <Score text="setOutlineCoveredAlpha" /> 

• `Static` **setOutlineCoveredAlpha**(`Value`): `void` 

设置被遮挡部分高亮透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOutlineCoveredEdgeAlpha <Score text="setOutlineCoveredEdgeAlpha" /> 

• `Static` **setOutlineCoveredEdgeAlpha**(`Value`): `void` 

设置被遮挡部分描边透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOutlineNotCoveredAlpha <Score text="setOutlineNotCoveredAlpha" /> 

• `Static` **setOutlineNotCoveredAlpha**(`Value`): `void` 

设置未被遮挡部分高亮透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOutlineNotCoveredEdgeAlpha <Score text="setOutlineNotCoveredEdgeAlpha" /> 

• `Static` **setOutlineNotCoveredEdgeAlpha**(`Value`): `void` 

设置未被遮挡部分描边透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setOutlineWidth <Score text="setOutlineWidth" /> 

• `Static` **setOutlineWidth**(`Value`): `void` 

设置描边宽度（0 ~ 10）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setPreset <Score text="setPreset" /> 

• `Static` **setPreset**(`newPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPreset` | [`PostProcessPreset`](../enums/Gameplay.PostProcessPreset.md) | 预设枚举 |


___

### setToneBlackClip <Score text="setToneBlackClip" /> 

• `Static` **setToneBlackClip**(`Value`): `void` 

设置色调映射暗部裁剪（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setToneCurveAmount <Score text="setToneCurveAmount" /> 

• `Static` **setToneCurveAmount**(`Value`): `void` 

设置色调映射 （0 ~ 100）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setToneShoulder <Score text="setToneShoulder" /> 

• `Static` **setToneShoulder**(`Value`): `void` 

设置色调映射高位阈值（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setToneSlope <Score text="setToneSlope" /> 

• `Static` **setToneSlope**(`Value`): `void` 

设置色调映射斜率 （0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setToneToe <Score text="setToneToe" /> 

• `Static` **setToneToe**(`Value`): `void` 

设置色调映射低位阈值（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### setToneWhiteClip <Score text="setToneWhiteClip" /> 

• `Static` **setToneWhiteClip**(`Value`): `void` 

设置色调映射亮部裁剪（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

