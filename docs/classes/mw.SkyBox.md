[LIGHTING](../groups/Core.LIGHTING.md) / SkyBox

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
:::


| Accessors |
| :-----|
| **[cloudColor](mw.SkyBox.md#cloudcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取云颜色|
| **[cloudDensity](mw.SkyBox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudOpacity](mw.SkyBox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](mw.SkyBox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureID](mw.SkyBox.md#cloudtextureid)**(`value`: `string`): `void` <br> 设置云贴图资源ID|
| **[cloudVisible](mw.SkyBox.md#cloudvisible)**(): `boolean` <br> 获取是否开启云|
| **[moonColor](mw.SkyBox.md#mooncolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取月亮颜色|
| **[moonIntensity](mw.SkyBox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](mw.SkyBox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureID](mw.SkyBox.md#moontextureid)**(`value`: `string`): `void` <br> 设置月亮贴图资源ID|
| **[moonVisible](mw.SkyBox.md#moonvisible)**(): `boolean` <br> 获取是否开启月亮|
| **[preset](mw.SkyBox.md#preset)**(): `number` <br> 获取预设|
| **[skyDomeBaseColor](mw.SkyBox.md#skydomebasecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空球颜色|
| **[skyDomeBottomColor](mw.SkyBox.md#skydomebottomcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnabled](mw.SkyBox.md#skydomegradientenabled)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](mw.SkyBox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeIntensity](mw.SkyBox.md#skydomeintensity)**(): `number` <br> 获取天空球亮度|
| **[skyDomeMiddleColor](mw.SkyBox.md#skydomemiddlecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeTextureID](mw.SkyBox.md#skydometextureid)**(`value`: `string`): `void` <br> 设置天空球贴图|
| **[skyDomeTopColor](mw.SkyBox.md#skydometopcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空顶层颜色|
| **[starDensity](mw.SkyBox.md#stardensity)**(): `number` <br> 获取星星密度|
| **[starIntensity](mw.SkyBox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureID](mw.SkyBox.md#startextureid)**(`value`: `string`): `void` <br> 设置星星贴图资源ID|
| **[starVisible](mw.SkyBox.md#starvisible)**(): `boolean` <br> 获取是否开启星星|
| **[sunColor](mw.SkyBox.md#suncolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取太阳颜色|
| **[sunIntensity](mw.SkyBox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](mw.SkyBox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureID](mw.SkyBox.md#suntextureid)**(`value`: `string`): `void` <br> 设置太阳贴图资源ID|
| **[sunVisible](mw.SkyBox.md#sunvisible)**(): `boolean` <br> 获取是否开启太阳|


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
| **[refresh](mw.SkyBox.md#refresh)**(): `void` <br> 天空球刷新|
| **[reset](mw.SkyBox.md#reset)**(): `void` <br> 重置为默认参数|


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


## Accessors

### cloudColor <Score text="cloudColor" /> 

• `get` **cloudColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取云颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

云颜色

• `set` **cloudColor**(`value`): `void` <Badge type="tip" text="client" />

设置云颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 云颜色 |


___

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

### cloudTextureID <Score text="cloudTextureID" /> 

• `set` **cloudTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置云贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 云贴图资源ID |


___

### cloudVisible <Score text="cloudVisible" /> 

• `get` **cloudVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启云


#### Returns

`boolean`

是否开启云

• `set` **cloudVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启云


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启云 |


___

### moonColor <Score text="moonColor" /> 

• `get` **moonColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取月亮颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

月亮颜色

• `set` **moonColor**(`value`): `void` <Badge type="tip" text="client" />

设置月亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 月亮颜色 |


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

### moonTextureID <Score text="moonTextureID" /> 

• `set` **moonTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置月亮贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 月亮贴图资源ID |


___

### moonVisible <Score text="moonVisible" /> 

• `get` **moonVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启月亮


#### Returns

`boolean`

是否开启月亮

• `set` **moonVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启月亮


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启月亮 |


___

### preset <Score text="preset" /> 

• `get` **preset**(): `number` <Badge type="tip" text="client" />

获取预设


#### Returns

`number`

返回预设

• `set` **preset**(`NewPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewPreset` | [`SkyPreset`](../enums/mw.SkyPreset.md) | 预设枚举 |


___

### skyDomeBaseColor <Score text="skyDomeBaseColor" /> 

• `get` **skyDomeBaseColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空球颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空球颜色

• `set` **skyDomeBaseColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空球颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空球颜色值 |


___

### skyDomeBottomColor <Score text="skyDomeBottomColor" /> 

• `get` **skyDomeBottomColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空下层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空下层颜色

• `set` **skyDomeBottomColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空下层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空下层颜色值 |


___

### skyDomeGradientEnabled <Score text="skyDomeGradientEnabled" /> 

• `get` **skyDomeGradientEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启渐变效果


#### Returns

`boolean`

是否开启渐变效果

• `set` **skyDomeGradientEnabled**(`value`): `void` <Badge type="tip" text="client" />

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

### skyDomeMiddleColor <Score text="skyDomeMiddleColor" /> 

• `get` **skyDomeMiddleColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空中层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空中层颜色

• `set` **skyDomeMiddleColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空中层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空中层颜色值 |


___

### skyDomeTextureID <Score text="skyDomeTextureID" /> 

• `set` **skyDomeTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置天空球贴图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 贴图ID |


___

### skyDomeTopColor <Score text="skyDomeTopColor" /> 

• `get` **skyDomeTopColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空顶层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空顶层颜色

• `set` **skyDomeTopColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空顶层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空顶层颜色值 |


___

### starDensity <Score text="starDensity" /> 

• `get` **starDensity**(): `number` <Badge type="tip" text="client" />

获取星星密度


#### Returns

`number`

星星密度

• `set` **starDensity**(`value`): `void` <Badge type="tip" text="client" />

设置星星密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星密度(0~100) |


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

### starTextureID <Score text="starTextureID" /> 

• `set` **starTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置星星贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 星星贴图资源ID |


___

### starVisible <Score text="starVisible" /> 

• `get` **starVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启星星


#### Returns

`boolean`

是否开启星星

• `set` **starVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启星星


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启星星 |


___

### sunColor <Score text="sunColor" /> 

• `get` **sunColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取太阳颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

太阳颜色

• `set` **sunColor**(`value`): `void` <Badge type="tip" text="client" />

设置太阳颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 太阳颜色 |


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

### sunTextureID <Score text="sunTextureID" /> 

• `set` **sunTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置太阳贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 太阳贴图资源ID |


___

### sunVisible <Score text="sunVisible" /> 

• `get` **sunVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启太阳


#### Returns

`boolean`

是否开启太阳

• `set` **sunVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启太阳


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启太阳 |



## Methods
___

### refresh <Score text="refresh" /> 

• **refresh**(): `void` <Badge type="tip" text="client" />

天空球刷新



___

### reset <Score text="reset" /> 

• **reset**(): `void` <Badge type="tip" text="client" />

重置为默认参数


