[LIGHTING](../groups/Core.LIGHTING.md) / PostProcessObject

# PostProcessObject <Badge type="tip" text="Class" /> <Score text="PostProcessObject" />

后处理对象

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`PostProcessObject`**

## Table of contents

| Properties |
| :-----|
| **[postProcessConfig](mw.PostProcessObject.md#postprocessconfig)**: [`PostProcessConfig`](mw.PostProcessConfig.md) <br> 后处理批量配置参数|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[bloomIntensity](mw.PostProcessObject.md#bloomintensity)**(): `number` <br> 获取泛光|
| **[globalContrast](mw.PostProcessObject.md#globalcontrast)**(): `number` <br> 获取全局对比度|
| **[globalGamma](mw.PostProcessObject.md#globalgamma)**(): `number` <br> 获取全局伽马值|
| **[globalSaturation](mw.PostProcessObject.md#globalsaturation)**(): `number` <br> 获取全局饱和度|
| **[lUTBlend](mw.PostProcessObject.md#lutblend)**(): `number` <br> 获取LUT百分比|
| **[lUTTextureAssetByGuid](mw.PostProcessObject.md#luttextureassetbyguid)**(): `string` <br> 获取LUT贴图资源GUID|
| **[occlusionBlend](mw.PostProcessObject.md#occlusionblend)**(): `number` <br> 获取被遮挡融合比例|
| **[outlineCoveredAlpha](mw.PostProcessObject.md#outlinecoveredalpha)**(): `number` <br> 获取被遮挡部分高亮透明度|
| **[outlineCoveredEdgeAlpha](mw.PostProcessObject.md#outlinecoverededgealpha)**(): `number` <br> 获取被遮挡部分描边透明度|
| **[outlineNotCoveredAlpha](mw.PostProcessObject.md#outlinenotcoveredalpha)**(): `number` <br> 获取未被遮挡部分高亮透明度|
| **[outlineNotCoveredEdgeAlpha](mw.PostProcessObject.md#outlinenotcoverededgealpha)**(): `number` <br> 获取未被遮挡部分描边透明度|
| **[outlineWidth](mw.PostProcessObject.md#outlinewidth)**(): `number` <br> 获取描边宽度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[addOutlineColor](mw.PostProcessObject.md#addoutlinecolor)**(`newOutlineColor`: [`LinearColor`](mw.LinearColor.md)): `number` <br> 添加一个描边颜色并返回对应的索引|
| **[getConfig](mw.PostProcessObject.md#getconfig)**(): [`PostProcessConfig`](mw.PostProcessConfig.md) <br> 获取后处理属性配置|
| **[setConfig](mw.PostProcessObject.md#setconfig)**(`newConfig`: [`PostProcessConfig`](mw.PostProcessConfig.md)): `void` <br> 设置后处理属性配置|
| **[setPreset](mw.PostProcessObject.md#setpreset)**(`newPreset`: [`PostProcessPreset`](../enums/mw.PostProcessPreset.md)): `void` <br> 设置预设|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### postProcessConfig <Score text="postProcessConfig" /> 

• **postProcessConfig**: [`PostProcessConfig`](mw.PostProcessConfig.md)

后处理批量配置参数

## Accessors

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


___

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


___

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

### outlineCoveredAlpha <Score text="outlineCoveredAlpha" /> 

• `get` **outlineCoveredAlpha**(): `number` 

获取被遮挡部分高亮透明度


#### Returns

`number`

获取值

• `set` **outlineCoveredAlpha**(`Value`): `void` 

设置被遮挡部分高亮透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### outlineCoveredEdgeAlpha <Score text="outlineCoveredEdgeAlpha" /> 

• `get` **outlineCoveredEdgeAlpha**(): `number` 

获取被遮挡部分描边透明度


#### Returns

`number`

获取值

• `set` **outlineCoveredEdgeAlpha**(`Value`): `void` 

设置被遮挡部分描边透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### outlineNotCoveredAlpha <Score text="outlineNotCoveredAlpha" /> 

• `get` **outlineNotCoveredAlpha**(): `number` 

获取未被遮挡部分高亮透明度


#### Returns

`number`

获取值

• `set` **outlineNotCoveredAlpha**(`Value`): `void` 

设置未被遮挡部分高亮透明度（0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### outlineNotCoveredEdgeAlpha <Score text="outlineNotCoveredEdgeAlpha" /> 

• `get` **outlineNotCoveredEdgeAlpha**(): `number` 

获取未被遮挡部分描边透明度


#### Returns

`number`

获取值

• `set` **outlineNotCoveredEdgeAlpha**(`Value`): `void` 

设置未被遮挡部分描边透明度（0 ~ 1）


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

设置描边宽度（0 ~ 10）


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
| `newOutlineColor` | [`LinearColor`](mw.LinearColor.md) | 需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值

___

### getConfig <Score text="getConfig" /> 

• **getConfig**(): [`PostProcessConfig`](mw.PostProcessConfig.md) 

获取后处理属性配置


#### Returns

[`PostProcessConfig`](mw.PostProcessConfig.md)

获取值

___

### setConfig <Score text="setConfig" /> 

• **setConfig**(`newConfig`): `void` 

设置后处理属性配置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newConfig` | [`PostProcessConfig`](mw.PostProcessConfig.md) | 设置值 |


___

### setPreset <Score text="setPreset" /> 

• **setPreset**(`newPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPreset` | [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) | 预设枚举 |

