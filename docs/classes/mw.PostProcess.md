[LIGHTING](../groups/Core.LIGHTING.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" /> <Score text="PostProcess" />

后处理对象

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`PostProcess`**

## Table of contents

| Properties |
| :-----|
| **[postProcessConfig](mw.PostProcess.md#postprocessconfig)**: [`PostProcessConfig`](mw.PostProcessConfig.md) <br> 后处理批量配置参数|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|


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
| **[addOutlineColor](mw.PostProcess.md#addoutlinecolor-1)**(`newOutlineColor`: [`LinearColor`](mw.LinearColor.md)): `number` <br> 添加一个描边颜色并返回对应的索引|
| **[getAmbientOcclusionIntensity](mw.PostProcess.md#getambientocclusionintensity)**(): `number` <br> 获取环境光遮蔽强度|
| **[getAmbientOcclusionRadius](mw.PostProcess.md#getambientocclusionradius)**(): `number` <br> 获取环境光遮蔽半径|
| **[getAutoExposureBias](mw.PostProcess.md#getautoexposurebias)**(): `number` <br> 获取曝光补偿|
| **[getAutoExposureMaxBrightness](mw.PostProcess.md#getautoexposuremaxbrightness)**(): `number` <br> 获取曝光最大亮度|
| **[getAutoExposureMinBrightness](mw.PostProcess.md#getautoexposureminbrightness)**(): `number` <br> 获取曝光最小亮度|
| **[getBloomIntensity](mw.PostProcess.md#getbloomintensity)**(): `number` <br> 获取泛光|
| **[getConfig](mw.PostProcess.md#getconfig)**(): [`PostProcessConfig`](mw.PostProcessConfig.md) <br> 获取后处理属性配置|
| **[getGlobalContrast](mw.PostProcess.md#getglobalcontrast)**(): `number` <br> 获取全局对比度|
| **[getGlobalGamma](mw.PostProcess.md#getglobalgamma)**(): `number` <br> 获取全局伽马值|
| **[getGlobalSaturation](mw.PostProcess.md#getglobalsaturation)**(): `number` <br> 获取全局饱和度|
| **[getHDRContrast](mw.PostProcess.md#gethdrcontrast)**(): `number` <br> 获取HDR对比度|
| **[getHDRGamma](mw.PostProcess.md#gethdrgamma)**(): `number` <br> 获取HDR伽马值|
| **[getHDRSaturation](mw.PostProcess.md#gethdrsaturation)**(): `number` <br> 获取HDR饱和度|
| **[getInstance](mw.PostProcess.md#getinstance)**(): [`PostProcess`](mw.PostProcess.md) <br> 获取后处理实例|
| **[getLDR2HDRThreshold](mw.PostProcess.md#getldr2hdrthreshold)**(): `number` <br> 获取LDR与HDR阈值|
| **[getLDRContrast](mw.PostProcess.md#getldrcontrast)**(): `number` <br> 获取LDR对比度Contrast|
| **[getLDRGamma](mw.PostProcess.md#getldrgamma)**(): `number` <br> 获取LDR伽马值|
| **[getLDRSaturation](mw.PostProcess.md#getldrsaturation)**(): `number` <br> 获取LDR饱和度|
| **[getLUTBlend](mw.PostProcess.md#getlutblend)**(): `number` <br> 获取LUT百分比|
| **[getLUTTextureAssetByGuid](mw.PostProcess.md#getluttextureassetbyguid)**(): `string` <br> 获取LUT贴图资源GUID|
| **[getMotionBlur](mw.PostProcess.md#getmotionblur)**(): `number` <br> 获取动态模糊|
| **[getOcclusionBlend](mw.PostProcess.md#getocclusionblend)**(): `number` <br> 获取被遮挡融合比例|
| **[getOutlineCoveredAlpha](mw.PostProcess.md#getoutlinecoveredalpha)**(): `number` <br> 获取被遮挡部分高亮透明度|
| **[getOutlineCoveredEdgeAlpha](mw.PostProcess.md#getoutlinecoverededgealpha)**(): `number` <br> 获取被遮挡部分描边透明度|
| **[getOutlineNotCoveredAlpha](mw.PostProcess.md#getoutlinenotcoveredalpha)**(): `number` <br> 获取未被遮挡部分高亮透明度|
| **[getOutlineNotCoveredEdgeAlpha](mw.PostProcess.md#getoutlinenotcoverededgealpha)**(): `number` <br> 获取未被遮挡部分描边透明度|
| **[getOutlineWidth](mw.PostProcess.md#getoutlinewidth)**(): `number` <br> 获取描边宽度|
| **[getToneBlackClip](mw.PostProcess.md#gettoneblackclip)**(): `number` <br> 获取色调映射暗部裁剪|
| **[getToneCurveAmount](mw.PostProcess.md#gettonecurveamount)**(): `number` <br> 获取当前色调映射|
| **[getToneShoulder](mw.PostProcess.md#gettoneshoulder)**(): `number` <br> 获取色调映射高位阈值|
| **[getToneSlope](mw.PostProcess.md#gettoneslope)**(): `number` <br> 获取色调映射斜率|
| **[getToneToe](mw.PostProcess.md#gettonetoe)**(): `number` <br> 获取色调映射低位阈值|
| **[getToneWhiteClip](mw.PostProcess.md#gettonewhiteclip)**(): `number` <br> 获取色调映射亮部裁剪|
| **[setAmbientOcclusionIntensity](mw.PostProcess.md#setambientocclusionintensity)**(`Value`: `number`): `void` <br> 设置环境光遮蔽强度（0 ~ 1）|
| **[setAmbientOcclusionRadius](mw.PostProcess.md#setambientocclusionradius)**(`Value`: `number`): `void` <br> 设置环境光遮蔽半径（0.1 ~ 500.0）|
| **[setAutoExposureBias](mw.PostProcess.md#setautoexposurebias)**(`Value`: `number`): `void` <br> 设置曝光补偿（-15 ~ 15）|
| **[setAutoExposureMaxBrightness](mw.PostProcess.md#setautoexposuremaxbrightness)**(`Value`: `number`): `void` <br> 设置曝光最大亮度（-10 ~ 20）|
| **[setAutoExposureMinBrightness](mw.PostProcess.md#setautoexposureminbrightness)**(`Value`: `number`): `void` <br> 设置曝光最小亮度（-10 ~ 20）|
| **[setBloomIntensity](mw.PostProcess.md#setbloomintensity)**(`Value`: `number`): `void` <br> 设置泛光（0 ~ 8）|
| **[setConfig](mw.PostProcess.md#setconfig)**(`newConfig`: [`PostProcessConfig`](mw.PostProcessConfig.md)): `void` <br> 设置后处理属性配置|
| **[setGlobalContrast](mw.PostProcess.md#setglobalcontrast)**(`Value`: `number`): `void` <br> 设置全局对比度 （0.2 ~ 5.0）|
| **[setGlobalGamma](mw.PostProcess.md#setglobalgamma)**(`Value`: `number`): `void` <br> 设置全局伽马值（0 ~ 5）|
| **[setGlobalSaturation](mw.PostProcess.md#setglobalsaturation)**(`Value`: `number`): `void` <br> 设置全局饱和度 （0 ~ 2）|
| **[setHDRContrast](mw.PostProcess.md#sethdrcontrast)**(`Value`: `number`): `void` <br> 设置HDR对比度 （0 ~ 5）|
| **[setHDRGamma](mw.PostProcess.md#sethdrgamma)**(`Value`: `number`): `void` <br> 设置HDR伽马值 （0 ~ 5）|
| **[setHDRSaturation](mw.PostProcess.md#sethdrsaturation)**(`Value`: `number`): `void` <br> 设置HDR饱和度 （0 ~ 2）|
| **[setLDR2HDRThreshold](mw.PostProcess.md#setldr2hdrthreshold)**(`Value`: `number`): `void` <br> 设置LDR与HDR阈值 （-1 ~ 1）|
| **[setLDRContrast](mw.PostProcess.md#setldrcontrast)**(`Value`: `number`): `void` <br> 设置LDR对比度Contrast （0.2 ~ 5.0）|
| **[setLDRGamma](mw.PostProcess.md#setldrgamma)**(`Value`: `number`): `void` <br> 设置LDR伽马值 （0 ~ 5）|
| **[setLDRSaturation](mw.PostProcess.md#setldrsaturation)**(`Value`: `number`): `void` <br> 设置LDR饱和度（0 ~ 2）|
| **[setLUTBlend](mw.PostProcess.md#setlutblend)**(`Value`: `number`): `void` <br> 设置LUT百分比 （0 ~ 100）|
| **[setLUTTextureAssetByGuid](mw.PostProcess.md#setluttextureassetbyguid)**(`Value`: `string`): `void` <br> 设置LUT贴图资源通过GUID|
| **[setMotionBlur](mw.PostProcess.md#setmotionblur)**(`Value`: `number`): `void` <br> 设置动态模糊 （0 ~ 1）|
| **[setOcclusionBlend](mw.PostProcess.md#setocclusionblend)**(`Value`: `number`): `void` <br> 设置被遮挡融合比例（0 ~ 1）|
| **[setOutlineCoveredAlpha](mw.PostProcess.md#setoutlinecoveredalpha)**(`Value`: `number`): `void` <br> 设置被遮挡部分高亮透明度（0 ~ 1）|
| **[setOutlineCoveredEdgeAlpha](mw.PostProcess.md#setoutlinecoverededgealpha)**(`Value`: `number`): `void` <br> 设置被遮挡部分描边透明度（0 ~ 1）|
| **[setOutlineNotCoveredAlpha](mw.PostProcess.md#setoutlinenotcoveredalpha)**(`Value`: `number`): `void` <br> 设置未被遮挡部分高亮透明度（0 ~ 1）|
| **[setOutlineNotCoveredEdgeAlpha](mw.PostProcess.md#setoutlinenotcoverededgealpha)**(`Value`: `number`): `void` <br> 设置未被遮挡部分描边透明度（0 ~ 1）|
| **[setOutlineWidth](mw.PostProcess.md#setoutlinewidth)**(`Value`: `number`): `void` <br> 设置描边宽度（0 ~ 10）|
| **[setPreset](mw.PostProcess.md#setpreset)**(`newPreset`: [`PostProcessPreset`](../enums/mw.PostProcessPreset.md)): `void` <br> 设置预设|
| **[setToneBlackClip](mw.PostProcess.md#settoneblackclip)**(`Value`: `number`): `void` <br> 设置色调映射暗部裁剪（0 ~ 1）|
| **[setToneCurveAmount](mw.PostProcess.md#settonecurveamount)**(`Value`: `number`): `void` <br> 设置色调映射 （0 ~ 100）|
| **[setToneShoulder](mw.PostProcess.md#settoneshoulder)**(`Value`: `number`): `void` <br> 设置色调映射高位阈值（0 ~ 1）|
| **[setToneSlope](mw.PostProcess.md#settoneslope)**(`Value`: `number`): `void` <br> 设置色调映射斜率 （0 ~ 1）|
| **[setToneToe](mw.PostProcess.md#settonetoe)**(`Value`: `number`): `void` <br> 设置色调映射低位阈值（0 ~ 1）|
| **[setToneWhiteClip](mw.PostProcess.md#settonewhiteclip)**(`Value`: `number`): `void` <br> 设置色调映射亮部裁剪（0 ~ 1）|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
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
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`guid`: `string`, `position?`: [`Vector`](mw.Vector.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### postProcessConfig <Score text="postProcessConfig" /> 

• **postProcessConfig**: [`PostProcessConfig`](mw.PostProcessConfig.md)

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
| `newOutlineColor` | [`LinearColor`](mw.LinearColor.md) | 需要添加的新颜色值 |

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

• `Static` **getConfig**(): [`PostProcessConfig`](mw.PostProcessConfig.md) 

获取后处理属性配置


#### Returns

[`PostProcessConfig`](mw.PostProcessConfig.md)

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

• `Static` **getInstance**(): [`PostProcess`](mw.PostProcess.md) 

获取后处理实例


#### Returns

[`PostProcess`](mw.PostProcess.md)

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
| `newConfig` | [`PostProcessConfig`](mw.PostProcessConfig.md) | 设置值 |


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
| `newPreset` | [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) | 预设枚举 |


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

