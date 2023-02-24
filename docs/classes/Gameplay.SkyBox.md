[Avatar](../groups/Avatar.Avatar.md) / SkyBox

# SkyBox <Badge type="tip" text="Class" /> <Score text="SkyBox" />

**`Groups`**

LIGHTING

天空球

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`SkyBox`**

## Table of contents

| Accessors |
| :-----|
| **[cloudDensity](Gameplay.SkyBox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudEnable](Gameplay.SkyBox.md#cloudenable)**(`value`: `boolean`): `void` <br> 设置是否开启云|
| **[cloudEnabled](Gameplay.SkyBox.md#cloudenabled)**(): `boolean` <br> 获取是否开启云|
| **[cloudOpacity](Gameplay.SkyBox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](Gameplay.SkyBox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureAssetByID](Gameplay.SkyBox.md#cloudtextureassetbyid)**(`value`: `string`): `void` <br> 设置云贴图资源ID|
| **[cloudTint](Gameplay.SkyBox.md#cloudtint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取云颜色|
| **[moonEnable](Gameplay.SkyBox.md#moonenable)**(): `boolean` <br> 获取是否开启月亮|
| **[moonIntensity](Gameplay.SkyBox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](Gameplay.SkyBox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureAssetByID](Gameplay.SkyBox.md#moontextureassetbyid)**(`value`: `string`): `void` <br> 设置月亮贴图资源ID|
| **[moonTint](Gameplay.SkyBox.md#moontint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取月亮颜色|
| **[skyDomeBotTint](Gameplay.SkyBox.md#skydomebottint)**(): [`LinearColor`](Type.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnable](Gameplay.SkyBox.md#skydomegradientenable)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](Gameplay.SkyBox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeHorizontalTint](Gameplay.SkyBox.md#skydomehorizontaltint)**(): [`LinearColor`](Type.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeIntensity](Gameplay.SkyBox.md#skydomeintensity)**(): `number` <br> 获取天空球亮度|
| **[skyDomeTextureAssetByID](Gameplay.SkyBox.md#skydometextureassetbyid)**(`value`: `string`): `void` <br> 设置天空球贴图|
| **[skyDomeTint](Gameplay.SkyBox.md#skydometint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取天空球颜色|
| **[skyDomeTopTint](Gameplay.SkyBox.md#skydometoptint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取天空顶层颜色|
| **[skyPreset](Gameplay.SkyBox.md#skypreset)**(): `number` <br> 获取预设|
| **[starEnable](Gameplay.SkyBox.md#starenable)**(): `boolean` <br> 获取是否开启星星|
| **[starIntensity](Gameplay.SkyBox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureAssetByID](Gameplay.SkyBox.md#startextureassetbyid)**(`value`: `string`): `void` <br> 设置星星贴图资源ID|
| **[starTiling](Gameplay.SkyBox.md#startiling)**(): `number` <br> 获取星星密度|
| **[sunEnable](Gameplay.SkyBox.md#sunenable)**(): `boolean` <br> 获取是否开启太阳|
| **[sunIntensity](Gameplay.SkyBox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](Gameplay.SkyBox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureAssetByID](Gameplay.SkyBox.md#suntextureassetbyid)**(`value`: `string`): `void` <br> 设置太阳贴图资源ID|
| **[sunTint](Gameplay.SkyBox.md#suntint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取太阳颜色|


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
| **[refresh](Gameplay.SkyBox.md#refresh)**(): `void` <br> 天空球刷新|
| **[reset](Gameplay.SkyBox.md#reset)**(): `void` <br> 重置为默认参数|


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
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
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
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
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

• `set` **cloudEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启云


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启云 |


___

### cloudEnabled <Score text="cloudEnabled" /> 

• `get` **cloudEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启云


#### Returns

`boolean`

是否开启云

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

• `get` **cloudTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取云颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

云颜色

• `set` **cloudTint**(`value`): `void` <Badge type="tip" text="client" />

设置云颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 云颜色 |



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

• `get` **moonTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取月亮颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

月亮颜色

• `set` **moonTint**(`value`): `void` <Badge type="tip" text="client" />

设置月亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 月亮颜色 |



### skyDomeBotTint <Score text="skyDomeBotTint" /> 

• `get` **skyDomeBotTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

天空下层颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

天空下层颜色

• `set` **skyDomeBotTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空下层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空下层颜色值 |


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

• `get` **skyDomeHorizontalTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

天空中层颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

天空中层颜色

• `set` **skyDomeHorizontalTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空中层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空中层颜色值 |


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

• `get` **skyDomeTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取天空球颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

天空球颜色

• `set` **skyDomeTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空球颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空球颜色值 |


___

### skyDomeTopTint <Score text="skyDomeTopTint" /> 

• `get` **skyDomeTopTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取天空顶层颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

天空顶层颜色

• `set` **skyDomeTopTint**(`value`): `void` <Badge type="tip" text="client" />

设置天空顶层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空顶层颜色值 |


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
| `NewPreset` | [`SkyPreset`](../enums/Gameplay.SkyPreset.md) | 预设枚举 |


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

• `get` **sunTint**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取太阳颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

太阳颜色

• `set` **sunTint**(`value`): `void` <Badge type="tip" text="client" />

设置太阳颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 太阳颜色 |



## Methods

### refresh <Score text="refresh" /> 

• **refresh**(): `void` <Badge type="tip" text="client" />

天空球刷新



___

### reset <Score text="reset" /> 

• **reset**(): `void` <Badge type="tip" text="client" />

重置为默认参数


