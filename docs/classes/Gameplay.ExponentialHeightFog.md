[LIGHTING](../groups/LIGHTING.LIGHTING.md) / ExponentialHeightFog

# ExponentialHeightFog <Badge type="tip" text="Class" /> <Score text="ExponentialHeightFog" />

环境雾

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`ExponentialHeightFog`**

## Table of contents

| Accessors |
| :-----|
| **[directionalInscatteringColor](Gameplay.ExponentialHeightFog.md#directionalinscatteringcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.|
| **[directionalInscatteringExponent](Gameplay.ExponentialHeightFog.md#directionalinscatteringexponent)**(): `number` <br> 太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.|
| **[directionalInscatteringStartDistance](Gameplay.ExponentialHeightFog.md#directionalinscatteringstartdistance)**(): `number` <br> 太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.|
| **[fogDensity](Gameplay.ExponentialHeightFog.md#fogdensity)**(): `number` <br> 获取雾密度|
| **[fogEnable](Gameplay.ExponentialHeightFog.md#fogenable)**(): `boolean` <br> 获取是否启用环境雾|
| **[fogHeight](Gameplay.ExponentialHeightFog.md#fogheight)**(): `number` <br> 获取雾高度|
| **[fogHeightFalloff](Gameplay.ExponentialHeightFog.md#fogheightfalloff)**(): `number` <br> 获取雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)|
| **[fogInscatteringColor](Gameplay.ExponentialHeightFog.md#foginscatteringcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取雾散射颜色|
| **[fogMaxOpacity](Gameplay.ExponentialHeightFog.md#fogmaxopacity)**(): `number` <br> 获取雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)|
| **[startDistance](Gameplay.ExponentialHeightFog.md#startdistance)**(): `number` <br> 获取雾起始距离(到摄像机的距离)|


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
| **[setPresetByIndex](Gameplay.ExponentialHeightFog.md#setpresetbyindex)**(`presetIndex`: [`FogPreset`](../enums/Gameplay.FogPreset.md)): `void` <br> 设置环境雾预设|


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


### directionalInscatteringColor <Score text="directionalInscatteringColor" /> 

• `get` **directionalInscatteringColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.


#### Returns

[`LinearColor`](Type.LinearColor.md)

太阳光散射颜色

• `set` **directionalInscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 太阳光散射颜色 |


___

### directionalInscatteringExponent <Score text="directionalInscatteringExponent" /> 

• `get` **directionalInscatteringExponent**(): `number` <Badge type="tip" text="client" />

太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.


#### Returns

`number`

太阳光散射指数

• `set` **directionalInscatteringExponent**(`value`): `void` <Badge type="tip" text="client" />

太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光散射指数 |


___

### directionalInscatteringStartDistance <Score text="directionalInscatteringStartDistance" /> 

• `get` **directionalInscatteringStartDistance**(): `number` <Badge type="tip" text="client" />

太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.


#### Returns

`number`

太阳光散射初始距离

• `set` **directionalInscatteringStartDistance**(`value`): `void` <Badge type="tip" text="client" />

太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光散射初始距离 |


___

### fogDensity <Score text="fogDensity" /> 

• `get` **fogDensity**(): `number` <Badge type="tip" text="client" />

获取雾密度


#### Returns

`number`

雾密度

• `set` **fogDensity**(`value`): `void` <Badge type="tip" text="client" />

设置雾密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾密度 |


___

### fogEnable <Score text="fogEnable" /> 

• `get` **fogEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否启用环境雾


#### Returns

`boolean`

是否启用

• `set` **fogEnable**(`value`): `void` <Badge type="tip" text="client" />

设置是否启用环境雾


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用 |


___

### fogHeight <Score text="fogHeight" /> 

• `get` **fogHeight**(): `number` <Badge type="tip" text="client" />

获取雾高度


#### Returns

`number`

雾高度

• `set` **fogHeight**(`value`): `void` <Badge type="tip" text="client" />

设置雾高度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾高度 |


___

### fogHeightFalloff <Score text="fogHeightFalloff" /> 

• `get` **fogHeightFalloff**(): `number` <Badge type="tip" text="client" />

获取雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)


#### Returns

`number`

雾衰弱高度

• `set` **fogHeightFalloff**(`value`): `void` <Badge type="tip" text="client" />

设置雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾衰弱高度 |


___

### fogInscatteringColor <Score text="fogInscatteringColor" /> 

• `get` **fogInscatteringColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取雾散射颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

雾散射颜色

• `set` **fogInscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

设置雾散射颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 雾散射颜色 |


___

### fogMaxOpacity <Score text="fogMaxOpacity" /> 

• `get` **fogMaxOpacity**(): `number` <Badge type="tip" text="client" />

获取雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)


#### Returns

`number`

雾最大透明度

• `set` **fogMaxOpacity**(`value`): `void` <Badge type="tip" text="client" />

设置雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾最大透明度 |


___

### startDistance <Score text="startDistance" /> 

• `get` **startDistance**(): `number` <Badge type="tip" text="client" />

获取雾起始距离(到摄像机的距离)


#### Returns

`number`

雾起始距离

• `set` **startDistance**(`value`): `void` <Badge type="tip" text="client" />

设置雾起始距离(到摄像机的距离)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾起始距离 |



## Methods
___

### setPresetByIndex <Score text="setPresetByIndex" /> 

• **setPresetByIndex**(`presetIndex`): `void` <Badge type="tip" text="client" />

设置环境雾预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `presetIndex` | [`FogPreset`](../enums/Gameplay.FogPreset.md) |  预设枚举索引 |

