[Lighting](../groups/Core.Lighting.md) / DirectionalLight

# DirectionalLight <Badge type="tip" text="Class" /> <Score text="DirectionalLight" />

平行光

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`DirectionalLight`**

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
| **[castShadowsEnable](mw.DirectionalLight.md#castshadowsenable)**(): `boolean` <br> 获取是否开启阴影|
| **[intensity](mw.DirectionalLight.md#intensity)**(): `number` <br> 获取光照强度|
| **[lightColor](mw.DirectionalLight.md#lightcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取光照颜色|
| **[pitchAngle](mw.DirectionalLight.md#pitchangle)**(): `number` <br> 获取俯仰角度|
| **[temperature](mw.DirectionalLight.md#temperature)**(): `number` <br> 获取色温|
| **[temperatureEnable](mw.DirectionalLight.md#temperatureenable)**(): `boolean` <br> 获取是否开启色温|
| **[yawAngle](mw.DirectionalLight.md#yawangle)**(): `number` <br> 获取朝向角度|


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

### castShadowsEnable <Score text="castShadowsEnable" /> 

• `get` **castShadowsEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启阴影


#### Returns

`boolean`

true或false

• `set` **castShadowsEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启阴影


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |


___

### intensity <Score text="intensity" /> 

• `get` **intensity**(): `number` <Badge type="tip" text="client" />

获取光照强度


#### Returns

`number`

光照强度

• `set` **intensity**(`value`): `void` <Badge type="tip" text="client" />

设置光照强度 （0 ~ 100）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度浮点值 |


___

### lightColor <Score text="lightColor" /> 

• `get` **lightColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取光照颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

光照颜色

• `set` **lightColor**(`newLightColor`): `void` <Badge type="tip" text="client" />

设置光照颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newLightColor` | [`LinearColor`](mw.LinearColor.md) | 颜色值 |


___

### pitchAngle <Score text="pitchAngle" /> 

• `get` **pitchAngle**(): `number` <Badge type="tip" text="client" />

获取俯仰角度


#### Returns

`number`

俯仰角度

• `set` **pitchAngle**(`value`): `void` <Badge type="tip" text="client" />

设置俯仰角度 （-90 ~ 90）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |


___

### temperature <Score text="temperature" /> 

• `get` **temperature**(): `number` <Badge type="tip" text="client" />

获取色温


#### Returns

`number`

true或false

• `set` **temperature**(`value`): `void` <Badge type="tip" text="client" />

设置色温 （1000 ~ 14000）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 色温浮点值 |


___

### temperatureEnable <Score text="temperatureEnable" /> 

• `get` **temperatureEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启色温


#### Returns

`boolean`

true或false

• `set` **temperatureEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启色温


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |


___

### yawAngle <Score text="yawAngle" /> 

• `get` **yawAngle**(): `number` <Badge type="tip" text="client" />

获取朝向角度


#### Returns

`number`

朝向角度

• `set` **yawAngle**(`value`): `void` <Badge type="tip" text="client" />

设置朝向角度 （-180 ~ 180）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |


## Methods