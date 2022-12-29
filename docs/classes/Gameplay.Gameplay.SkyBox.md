[Gameplay](../modules/Gameplay.Gameplay.md) / SkyBox

# SkyBox <Badge type="tip" text="Class" />

**`Description`**

天空球

## Hierarchy

- `GameObject`

  ↳ **`SkyBox`**

## Table of contents

| Accessors |
| :-----|
| **[cloudDensity](Gameplay.Gameplay.SkyBox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudEnable](Gameplay.Gameplay.SkyBox.md#cloudenable)**(`boolean`): `void` <br> 设置是否开启云|
| **[cloudEnabled](Gameplay.Gameplay.SkyBox.md#cloudenabled)**(): `boolean` <br> 获取是否开启云|
| **[cloudOpacity](Gameplay.Gameplay.SkyBox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](Gameplay.Gameplay.SkyBox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureAssetByID](Gameplay.Gameplay.SkyBox.md#cloudtextureassetbyid)**(`string`): `void` <br> 设置云贴图资源ID|
| **[cloudTint](Gameplay.Gameplay.SkyBox.md#cloudtint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取云颜色|
| **[forwardVector](Gameplay.Gameplay.SkyBox.md#forwardvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.Gameplay.SkyBox.md#guid)**(): `string` <br> 获取对象的guid（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.Gameplay.SkyBox.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[moonEnable](Gameplay.Gameplay.SkyBox.md#moonenable)**(): `boolean` <br> 获取是否开启月亮|
| **[moonIntensity](Gameplay.Gameplay.SkyBox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](Gameplay.Gameplay.SkyBox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureAssetByID](Gameplay.Gameplay.SkyBox.md#moontextureassetbyid)**(`string`): `void` <br> 设置月亮贴图资源ID|
| **[moonTint](Gameplay.Gameplay.SkyBox.md#moontint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取月亮颜色|
| **[name](Gameplay.Gameplay.SkyBox.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.Gameplay.SkyBox.md#netstatus)**(): [`NetStatus`](../enums/Type.Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.Gameplay.SkyBox.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.Gameplay.SkyBox.md#relativelocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.Gameplay.SkyBox.md#relativerotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.Gameplay.SkyBox.md#relativescale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.Gameplay.SkyBox.md#rightvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[skyDomeBotTint](Gameplay.Gameplay.SkyBox.md#skydomebottint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnable](Gameplay.Gameplay.SkyBox.md#skydomegradientenable)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](Gameplay.Gameplay.SkyBox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeHorizontalTint](Gameplay.Gameplay.SkyBox.md#skydomehorizontaltint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeIntensity](Gameplay.Gameplay.SkyBox.md#skydomeintensity)**(): `number` <br> 获取天空球亮度|
| **[skyDomeTextureAssetByID](Gameplay.Gameplay.SkyBox.md#skydometextureassetbyid)**(`string`): `void` <br> 设置天空球贴图|
| **[skyDomeTint](Gameplay.Gameplay.SkyBox.md#skydometint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取天空球颜色|
| **[skyDomeTopTint](Gameplay.Gameplay.SkyBox.md#skydometoptint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取天空顶层颜色|
| **[skyPreset](Gameplay.Gameplay.SkyBox.md#skypreset)**(): `number` <br> 获取预设|
| **[starEnable](Gameplay.Gameplay.SkyBox.md#starenable)**(): `boolean` <br> 获取是否开启星星|
| **[starIntensity](Gameplay.Gameplay.SkyBox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureAssetByID](Gameplay.Gameplay.SkyBox.md#startextureassetbyid)**(`string`): `void` <br> 设置星星贴图资源ID|
| **[starTiling](Gameplay.Gameplay.SkyBox.md#startiling)**(): `number` <br> 获取星星密度|
| **[staticStatus](Gameplay.Gameplay.SkyBox.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[sunEnable](Gameplay.Gameplay.SkyBox.md#sunenable)**(): `boolean` <br> 获取是否开启太阳|
| **[sunIntensity](Gameplay.Gameplay.SkyBox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](Gameplay.Gameplay.SkyBox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureAssetByID](Gameplay.Gameplay.SkyBox.md#suntextureassetbyid)**(`string`): `void` <br> 设置太阳贴图资源ID|
| **[sunTint](Gameplay.Gameplay.SkyBox.md#suntint)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取太阳颜色|
| **[tag](Gameplay.Gameplay.SkyBox.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.Gameplay.SkyBox.md#transform)**(): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.Gameplay.SkyBox.md#upvector)**(): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.Gameplay.SkyBox.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.Gameplay.SkyBox.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.Gameplay.SkyBox.md#worldlocation)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.Gameplay.SkyBox.md#worldrotation)**(): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.Gameplay.SkyBox.md#worldscale)**(): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|

| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.Gameplay.SkyBox.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.Gameplay.SkyBox.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.Gameplay.SkyBox.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.Gameplay.SkyBox.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.Gameplay.SkyBox.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.Gameplay.SkyBox.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.Gameplay.SkyBox.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.Gameplay.SkyBox.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.Gameplay.SkyBox.md#getbounds)**(`boolean`, [`Vector`](Type.Type.Vector.md), [`Vector`](Type.Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.Gameplay.SkyBox.md#getchildbyguid)**(`string`): `GameObject` <br> 根据Guid查找子物体|
| **[getChildByName](Gameplay.Gameplay.SkyBox.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.Gameplay.SkyBox.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.Gameplay.SkyBox.md#getchildrenboxcenter)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.Gameplay.SkyBox.md#getcollision)**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.Gameplay.SkyBox.md#getforwardvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.Gameplay.SkyBox.md#getrelativelocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.Gameplay.SkyBox.md#getrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.Gameplay.SkyBox.md#getrelativescale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.Gameplay.SkyBox.md#getrightvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.Gameplay.SkyBox.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.Gameplay.SkyBox.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.Gameplay.SkyBox.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.Gameplay.SkyBox.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.Gameplay.SkyBox.md#gettransform)**([`Transform`](Type.Type.Transform.md)): [`Transform`](Type.Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.Gameplay.SkyBox.md#getupvector)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.Gameplay.SkyBox.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.Gameplay.SkyBox.md#getworldlocation)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.Gameplay.SkyBox.md#getworldrotation)**([`Rotation`](Type.Type.Rotation.md)): [`Rotation`](Type.Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.Gameplay.SkyBox.md#getworldscale)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.Gameplay.SkyBox.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.Gameplay.SkyBox.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.Gameplay.SkyBox.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.Gameplay.SkyBox.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.Gameplay.SkyBox.md#ready)**(): `Promise`<[`SkyBox`](Gameplay.Gameplay.SkyBox.md)\> <br> GameObject准备好后返回|
| **[refresh](Gameplay.Gameplay.SkyBox.md#refresh)**(): `void` <br> 天空球刷新|
| **[reset](Gameplay.Gameplay.SkyBox.md#reset)**(): `void` <br> 重置为默认参数|
| **[setCollision](Gameplay.Gameplay.SkyBox.md#setcollision)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.Gameplay.SkyBox.md#setlocationandrotation)**([`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.Gameplay.SkyBox.md#setrelativelocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.Gameplay.SkyBox.md#setrelativerotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.Gameplay.SkyBox.md#setrelativescale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.Gameplay.SkyBox.md#settransform)**([`Transform`](Type.Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.Gameplay.SkyBox.md#setvisibility)**([`PropertyStatus`](../enums/Type.Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.Gameplay.SkyBox.md#setworldlocation)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.Gameplay.SkyBox.md#setworldrotation)**([`Rotation`](Type.Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.Gameplay.SkyBox.md#setworldscale)**([`Vector`](Type.Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.Gameplay.SkyBox.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.Gameplay.SkyBox.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.Gameplay.SkyBox.md#find)**(`string`): `GameObject` <br> 通过Guid查找GameObject|
| **[findGameObjectByTag](Gameplay.Gameplay.SkyBox.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.Gameplay.SkyBox.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.Gameplay.SkyBox.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.Gameplay.SkyBox.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|

## Accessors

### cloudDensity

• `get` **cloudDensity**(): `number`

**`Description`**

获取云密度

**`Effect`**

客户端生效

#### Returns

`number`

云密度

• `set` **cloudDensity**(`value`): `void`

**`Description`**

设置云密度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云密度(0~1) |

#### Returns

`void`

___

### cloudEnable

• `set` **cloudEnable**(`value`): `void`

**`Description`**

设置是否开启云

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启云 |

#### Returns

`void`

___

### cloudEnabled

• `get` **cloudEnabled**(): `boolean`

**`Description`**

获取是否开启云

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启云

___

### cloudOpacity

• `get` **cloudOpacity**(): `number`

**`Description`**

获取云的透明度

**`Effect`**

客户端生效

#### Returns

`number`

云的透明度

• `set` **cloudOpacity**(`value`): `void`

**`Description`**

设置云的透明度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云的透明度(0~1) |

#### Returns

`void`

___

### cloudSpeed

• `get` **cloudSpeed**(): `number`

**`Description`**

获取云速度

**`Effect`**

客户端生效

#### Returns

`number`

云速度

• `set` **cloudSpeed**(`value`): `void`

**`Description`**

设置云速度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云速度(0~10) |

#### Returns

`void`

___

### cloudTextureAssetByID

• `set` **cloudTextureAssetByID**(`value`): `void`

**`Description`**

设置云贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 云贴图资源ID |

#### Returns

`void`

___

### cloudTint

• `get` **cloudTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取云颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

云颜色

• `set` **cloudTint**(`value`): `void`

**`Description`**

设置云颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 云颜色 |

#### Returns

`void`

___

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

___

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### moonEnable

• `get` **moonEnable**(): `boolean`

**`Description`**

获取是否开启月亮

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启月亮

• `set` **moonEnable**(`value`): `void`

**`Description`**

设置是否开启月亮

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启月亮 |

#### Returns

`void`

___

### moonIntensity

• `get` **moonIntensity**(): `number`

**`Description`**

获取月亮亮度

**`Effect`**

客户端生效

#### Returns

`number`

月亮亮度

• `set` **moonIntensity**(`value`): `void`

**`Description`**

设置月亮亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮亮度(0~2000) |

#### Returns

`void`

___

### moonSize

• `get` **moonSize**(): `number`

**`Description`**

获取月亮大小

**`Effect`**

客户端生效

#### Returns

`number`

月亮大小

• `set` **moonSize**(`value`): `void`

**`Description`**

设置月亮大小

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮大小(0~100) |

#### Returns

`void`

___

### moonTextureAssetByID

• `set` **moonTextureAssetByID**(`value`): `void`

**`Description`**

设置月亮贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 月亮贴图资源ID |

#### Returns

`void`

___

### moonTint

• `get` **moonTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取月亮颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

月亮颜色

• `set` **moonTint**(`value`): `void`

**`Description`**

设置月亮颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 月亮颜色 |

#### Returns

`void`

___

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 需要设置的名称 |

#### Returns

`void`

___

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

___

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | `GameObject` |

#### Returns

`void`

___

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 缩放 |

#### Returns

`void`

___

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### skyDomeBotTint

• `get` **skyDomeBotTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

天空下层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空下层颜色

• `set` **skyDomeBotTint**(`value`): `void`

**`Description`**

设置天空下层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 天空下层颜色值 |

#### Returns

`void`

___

### skyDomeGradientEnable

• `get` **skyDomeGradientEnable**(): `boolean`

**`Description`**

获取是否开启渐变效果

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启渐变效果

• `set` **skyDomeGradientEnable**(`value`): `void`

**`Description`**

设置是否开启渐变效果

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启渐变效果 |

#### Returns

`void`

___

### skyDomeHorizontalFallOff

• `get` **skyDomeHorizontalFallOff**(): `number`

**`Description`**

获取地平线渐出值

**`Effect`**

客户端生效

#### Returns

`number`

地平线渐出值

• `set` **skyDomeHorizontalFallOff**(`value`): `void`

**`Description`**

设置地平线渐出值

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 地平线渐出值(1~20) |

#### Returns

`void`

___

### skyDomeHorizontalTint

• `get` **skyDomeHorizontalTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

天空中层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空中层颜色

• `set` **skyDomeHorizontalTint**(`value`): `void`

**`Description`**

设置天空中层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 天空中层颜色值 |

#### Returns

`void`

___

### skyDomeIntensity

• `get` **skyDomeIntensity**(): `number`

**`Description`**

获取天空球亮度

**`Effect`**

客户端生效

#### Returns

`number`

天空球亮度

• `set` **skyDomeIntensity**(`value`): `void`

**`Description`**

设置天空球亮度3

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 天空球亮度值(0~100) |

#### Returns

`void`

___

### skyDomeTextureAssetByID

• `set` **skyDomeTextureAssetByID**(`value`): `void`

**`Description`**

设置天空球贴图

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 贴图ID |

#### Returns

`void`

___

### skyDomeTint

• `get` **skyDomeTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取天空球颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空球颜色

• `set` **skyDomeTint**(`value`): `void`

**`Description`**

设置天空球颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 天空球颜色值 |

#### Returns

`void`

___

### skyDomeTopTint

• `get` **skyDomeTopTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取天空顶层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空顶层颜色

• `set` **skyDomeTopTint**(`value`): `void`

**`Description`**

设置天空顶层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 天空顶层颜色值 |

#### Returns

`void`

___

### skyPreset

• `get` **skyPreset**(): `number`

**`Description`**

获取预设

**`Effect`**

客户端生效

#### Returns

`number`

返回预设

• `set` **skyPreset**(`NewPreset`): `void`

**`Description`**

设置预设

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewPreset` | [`SkyPreset`](../enums/Gameplay.Gameplay.SkyPreset.md) | 预设枚举 |

#### Returns

`void`

___

### starEnable

• `get` **starEnable**(): `boolean`

**`Description`**

获取是否开启星星

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启星星

• `set` **starEnable**(`value`): `void`

**`Description`**

设置是否开启星星

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启星星 |

#### Returns

`void`

___

### starIntensity

• `get` **starIntensity**(): `number`

**`Description`**

获取星星亮度

**`Effect`**

客户端生效

#### Returns

`number`

星星亮度

• `set` **starIntensity**(`value`): `void`

**`Description`**

设置星星亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星亮度(0~1) |

#### Returns

`void`

___

### starTextureAssetByID

• `set` **starTextureAssetByID**(`value`): `void`

**`Description`**

设置星星贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 星星贴图资源ID |

#### Returns

`void`

___

### starTiling

• `get` **starTiling**(): `number`

**`Description`**

获取星星密度

**`Effect`**

客户端生效

#### Returns

`number`

星星密度

• `set` **starTiling**(`value`): `void`

**`Description`**

设置星星密度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星密度(0~100) |

#### Returns

`void`

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

___

### sunEnable

• `get` **sunEnable**(): `boolean`

**`Description`**

获取是否开启太阳

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启太阳

• `set` **sunEnable**(`value`): `void`

**`Description`**

设置是否开启太阳

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启太阳 |

#### Returns

`void`

___

### sunIntensity

• `get` **sunIntensity**(): `number`

**`Description`**

获取太阳光亮度

**`Effect`**

客户端生效

#### Returns

`number`

太阳光亮度

• `set` **sunIntensity**(`value`): `void`

**`Description`**

设置太阳光亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光亮度(0~2000) |

#### Returns

`void`

___

### sunSize

• `get` **sunSize**(): `number`

**`Description`**

获取太阳大小

**`Effect`**

客户端生效

#### Returns

`number`

太阳大小

• `set` **sunSize**(`value`): `void`

**`Description`**

设置太阳大小

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳大小(0~100) |

#### Returns

`void`

___

### sunTextureAssetByID

• `set` **sunTextureAssetByID**(`value`): `void`

**`Description`**

设置太阳贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 太阳贴图资源ID |

#### Returns

`void`

___

### sunTint

• `get` **sunTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取太阳颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

太阳颜色

• `set` **sunTint**(`value`): `void`

**`Description`**

设置太阳颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | 太阳颜色 |

#### Returns

`void`

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | Tag |

#### Returns

`void`

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | 要设置的transform |

#### Returns

`void`

___

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

___

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Promise`<`Script`\>

Script

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` | 物体 |

#### Returns

`void`

___

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | 是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | 回调事件 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | 表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | 如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取GameObject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | 是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | 传出参数，设置为GameObject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | 是否递归包含子物体 default:undefined |

#### Returns

`void`

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`GameObject`

查找的物体

___

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名称 |

#### Returns

`GameObject`

查找的物体

___

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取Children，客户端不维系父子关系。推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

___

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | guid |

#### Returns

`Script`

Script

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 名字 |

#### Returns

`Script`

Script

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | 接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

___

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取GameObject是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | 接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | 接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

#### Returns

`void`

___

### ready

▸ **ready**(): `Promise`<[`SkyBox`](Gameplay.Gameplay.SkyBox.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`SkyBox`](Gameplay.Gameplay.SkyBox.md)\>

准备好的对象

___

### refresh

▸ **refresh**(): `void`

**`Description`**

天空球刷新

**`Effect`**

客户端生效

#### Returns

`void`

___

### reset

▸ **reset**(): `void`

**`Description`**

重置为默认参数

**`Effect`**

客户端生效

#### Returns

`void`

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) |  碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` |  是否传递给子节点 default: false |

#### Returns

`void`

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 世界旋转 |

#### Returns

`void`

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | 位置 |

#### Returns

`void`

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 旋转 |

#### Returns

`void`

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | 要设置的相对缩放 |

#### Returns

`void`

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | transform |

#### Returns

`void`

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置GameObject是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | 状态 |
| `propagateToChildren?` | `boolean` |  是否设置子物体 default:false |

#### Returns

`void`

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |  要设置的世界坐标 |

#### Returns

`void`

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | 要设置的世界旋转 |

#### Returns

`void`

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | 要设置的世界缩放 |

#### Returns

`void`

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的guid |

#### Returns

`Promise`<`GameObject`\>

Guid对应的物体

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的GameObject

___

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过Guid查找GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 物体的Guid |

#### Returns

`GameObject`

Guid对应的物体

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | 自定义Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | 资源的GUID |
| `inReplicates?` | `boolean` | 是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的GameObject
