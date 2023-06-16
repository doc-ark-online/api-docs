[Lighting](../groups/Core.Lighting.md) / SkyBox

# SkyBox <Badge type="tip" text="Class" /> <Score text="SkyBox" />

天空球

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`SkyBox`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
| **[scriptNumberPropPathMap](mw.GameObject.md#scriptnumberproppathmap)**: `any` <br> |
| **[scriptPropPathNumberMap](mw.GameObject.md#scriptproppathnumbermap)**: `any` <br> |
:::


| Accessors |
| :-----|
| **[cloudDensity](mw.SkyBox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudEnable](mw.SkyBox.md#cloudenable)**(): `boolean` <br> 获取是否开启云|
| **[cloudOpacity](mw.SkyBox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](mw.SkyBox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureAssetByID](mw.SkyBox.md#cloudtextureassetbyid)**(`value`: `string`): `void` <br> 设置云贴图资源ID|
| **[cloudTint](mw.SkyBox.md#cloudtint)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取云颜色|
| **[moonEnable](mw.SkyBox.md#moonenable)**(): `boolean` <br> 获取是否开启月亮|
| **[moonIntensity](mw.SkyBox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](mw.SkyBox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureAssetByID](mw.SkyBox.md#moontextureassetbyid)**(`value`: `string`): `void` <br> 设置月亮贴图资源ID|
| **[moonTint](mw.SkyBox.md#moontint)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取月亮颜色|
| **[skyDomeBotTint](mw.SkyBox.md#skydomebottint)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnable](mw.SkyBox.md#skydomegradientenable)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](mw.SkyBox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeHorizontalTint](mw.SkyBox.md#skydomehorizontaltint)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeIntensity](mw.SkyBox.md#skydomeintensity)**(): `number` <br> 获取天空球亮度|
| **[skyDomeTextureAssetByID](mw.SkyBox.md#skydometextureassetbyid)**(`value`: `string`): `void` <br> 设置天空球贴图|
| **[skyDomeTint](mw.SkyBox.md#skydometint)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空球颜色|
| **[skyDomeTopTint](mw.SkyBox.md#skydometoptint)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空顶层颜色|
| **[skyPreset](mw.SkyBox.md#skypreset)**(): `number` <br> 获取预设|
| **[starEnable](mw.SkyBox.md#starenable)**(): `boolean` <br> 获取是否开启星星|
| **[starIntensity](mw.SkyBox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureAssetByID](mw.SkyBox.md#startextureassetbyid)**(`value`: `string`): `void` <br> 设置星星贴图资源ID|
| **[starTiling](mw.SkyBox.md#startiling)**(): `number` <br> 获取星星密度|
| **[sunEnable](mw.SkyBox.md#sunenable)**(): `boolean` <br> 获取是否开启太阳|
| **[sunIntensity](mw.SkyBox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](mw.SkyBox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureAssetByID](mw.SkyBox.md#suntextureassetbyid)**(`value`: `string`): `void` <br> 设置太阳贴图资源ID|
| **[sunTint](mw.SkyBox.md#suntint)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取太阳颜色|


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
| **[refresh](mw.SkyBox.md#refresh)**(): `void` <br> 天空球刷新|
| **[reset](mw.SkyBox.md#reset)**(): `void` <br> 重置为默认参数|


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


## Accessors

### cloudDensity <Score text="cloudDensity" /> 

• `get` **cloudDensity**(): `number` <Badge type="tip" text="client" />

获取云密度


#### Returns

`number`

云密度

• `set` **cloudDensity**(`value`): `void` <Badge type="tip" text="client" />

设置云密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云密度(0~1) |


___

### cloudEnable <Score text="cloudEnable" /> 

• `get` **cloudEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启云


#### Returns

`boolean`

是否开启云

• `set` **cloudEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启云


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启云 |


___

### cloudOpacity <Score text="cloudOpacity" /> 

• `get` **cloudOpacity**(): `number` <Badge type="tip" text="client" />

获取云的透明度


#### Returns

`number`

云的透明度

• `set` **cloudOpacity**(`value`): `void` <Badge type="tip" text="client" />

设置云的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云的透明度(0~1) |


___

### cloudSpeed <Score text="cloudSpeed" /> 

• `get` **cloudSpeed**(): `number` <Badge type="tip" text="client" />

获取云速度


#### Returns

`number`

云速度

• `set` **cloudSpeed**(`value`): `void` <Badge type="tip" text="client" />

设置云速度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云速度(0~10) |


___

### cloudTextureAssetByID <Score text="cloudTextureAssetByID" /> 

• `set` **cloudTextureAssetByID**(`value`): `void` <Badge type="tip" text="client" />

设置云贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 云贴图资源ID |


___

### cloudTint <Score text="cloudTint" /> 

• `get` **cloudTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取云颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

云颜色

• `set` **cloudTint**(`value`): `void` <Badge type="tip" text="client" />

设置云颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 云颜色 |


___

### moonEnable <Score text="moonEnable" /> 

• `get` **moonEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启月亮


#### Returns

`boolean`

是否开启月亮

• `set` **moonEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启月亮


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启月亮 |


___

### moonIntensity <Score text="moonIntensity" /> 

• `get` **moonIntensity**(): `number` <Badge type="tip" text="client" />

获取月亮亮度


#### Returns

`number`

月亮亮度

• `set` **moonIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置月亮亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮亮度(0~2000) |


___

### moonSize <Score text="moonSize" /> 

• `get` **moonSize**(): `number` <Badge type="tip" text="client" />

获取月亮大小


#### Returns

`number`

月亮大小

• `set` **moonSize**(`value`): `void` <Badge type="tip" text="client" />

设置月亮大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮大小(0~100) |


___

### moonTextureAssetByID <Score text="moonTextureAssetByID" /> 

• `set` **moonTextureAssetByID**(`value`): `void` <Badge type="tip" text="client" />

设置月亮贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 月亮贴图资源ID |


___

### moonTint <Score text="moonTint" /> 

• `get` **moonTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取月亮颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

月亮颜色

• `set` **moonTint**(`value`): `void` <Badge type="tip" text="client" />

设置月亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 月亮颜色 |


___

### skyDomeBotTint <Score text="skyDomeBotTint" /> 

• `get` **skyDomeBotTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空下层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空下层颜色

• `set` **skyDomeBotTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空下层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空下层颜色值 |


___

### skyDomeGradientEnable <Score text="skyDomeGradientEnable" /> 

• `get` **skyDomeGradientEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启渐变效果


#### Returns

`boolean`

是否开启渐变效果

• `set` **skyDomeGradientEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启渐变效果


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启渐变效果 |


___

### skyDomeHorizontalFallOff <Score text="skyDomeHorizontalFallOff" /> 

• `get` **skyDomeHorizontalFallOff**(): `number` <Badge type="tip" text="client" />

获取地平线渐出值


#### Returns

`number`

地平线渐出值

• `set` **skyDomeHorizontalFallOff**(`value`): `void` <Badge type="tip" text="client" />

设置地平线渐出值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 地平线渐出值(1~20) |


___

### skyDomeHorizontalTint <Score text="skyDomeHorizontalTint" /> 

• `get` **skyDomeHorizontalTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空中层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空中层颜色

• `set` **skyDomeHorizontalTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空中层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空中层颜色值 |


___

### skyDomeIntensity <Score text="skyDomeIntensity" /> 

• `get` **skyDomeIntensity**(): `number` <Badge type="tip" text="client" />

获取天空球亮度


#### Returns

`number`

天空球亮度

• `set` **skyDomeIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置天空球亮度3


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 天空球亮度值(0~100) |


___

### skyDomeTextureAssetByID <Score text="skyDomeTextureAssetByID" /> 

• `set` **skyDomeTextureAssetByID**(`value`): `void` <Badge type="tip" text="client" />

设置天空球贴图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 贴图ID |


___

### skyDomeTint <Score text="skyDomeTint" /> 

• `get` **skyDomeTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空球颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空球颜色

• `set` **skyDomeTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空球颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空球颜色值 |


___

### skyDomeTopTint <Score text="skyDomeTopTint" /> 

• `get` **skyDomeTopTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空顶层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空顶层颜色

• `set` **skyDomeTopTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空顶层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空顶层颜色值 |


___

### skyPreset <Score text="skyPreset" /> 

• `get` **skyPreset**(): `number` <Badge type="tip" text="client" />

获取预设


#### Returns

`number`

返回预设

• `set` **skyPreset**(`NewPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewPreset` | [`SkyPreset`](../enums/mw.SkyPreset.md) | 预设枚举 |


___

### starEnable <Score text="starEnable" /> 

• `get` **starEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启星星


#### Returns

`boolean`

是否开启星星

• `set` **starEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启星星


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启星星 |


___

### starIntensity <Score text="starIntensity" /> 

• `get` **starIntensity**(): `number` <Badge type="tip" text="client" />

获取星星亮度


#### Returns

`number`

星星亮度

• `set` **starIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置星星亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星亮度(0~1) |


___

### starTextureAssetByID <Score text="starTextureAssetByID" /> 

• `set` **starTextureAssetByID**(`value`): `void` <Badge type="tip" text="client" />

设置星星贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 星星贴图资源ID |


___

### starTiling <Score text="starTiling" /> 

• `get` **starTiling**(): `number` <Badge type="tip" text="client" />

获取星星密度


#### Returns

`number`

星星密度

• `set` **starTiling**(`value`): `void` <Badge type="tip" text="client" />

设置星星密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星密度(0~100) |


___

### sunEnable <Score text="sunEnable" /> 

• `get` **sunEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启太阳


#### Returns

`boolean`

是否开启太阳

• `set` **sunEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启太阳


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启太阳 |


___

### sunIntensity <Score text="sunIntensity" /> 

• `get` **sunIntensity**(): `number` <Badge type="tip" text="client" />

获取太阳光亮度


#### Returns

`number`

太阳光亮度

• `set` **sunIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置太阳光亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光亮度(0~2000) |


___

### sunSize <Score text="sunSize" /> 

• `get` **sunSize**(): `number` <Badge type="tip" text="client" />

获取太阳大小


#### Returns

`number`

太阳大小

• `set` **sunSize**(`value`): `void` <Badge type="tip" text="client" />

设置太阳大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳大小(0~100) |


___

### sunTextureAssetByID <Score text="sunTextureAssetByID" /> 

• `set` **sunTextureAssetByID**(`value`): `void` <Badge type="tip" text="client" />

设置太阳贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 太阳贴图资源ID |


___

### sunTint <Score text="sunTint" /> 

• `get` **sunTint**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取太阳颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

太阳颜色

• `set` **sunTint**(`value`): `void` <Badge type="tip" text="client" />

设置太阳颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 太阳颜色 |



## Methods
___

### refresh <Score text="refresh" /> 

• **refresh**(): `void` <Badge type="tip" text="client" />

天空球刷新



___

### reset <Score text="reset" /> 

• **reset**(): `void` <Badge type="tip" text="client" />

重置为默认参数


