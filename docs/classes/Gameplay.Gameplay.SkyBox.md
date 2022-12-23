[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / SkyBox

# Class: SkyBox

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).SkyBox

**`Author`**

Hanbaoqiang

**`Description`**

天空球

**`Network Status`**

usage:客户端

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`SkyBox`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.SkyBox.md#constructor)

### Accessors

- [forwardVector](Gameplay.Gameplay.SkyBox.md#forwardvector)
- [guid](Gameplay.Gameplay.SkyBox.md#guid)
- [isVisible](Gameplay.Gameplay.SkyBox.md#isvisible)
- [lockState](Gameplay.Gameplay.SkyBox.md#lockstate)
- [name](Gameplay.Gameplay.SkyBox.md#name)
- [netStatus](Gameplay.Gameplay.SkyBox.md#netstatus)
- [parent](Gameplay.Gameplay.SkyBox.md#parent)
- [relativeLocation](Gameplay.Gameplay.SkyBox.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.SkyBox.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.SkyBox.md#relativescale)
- [rightVector](Gameplay.Gameplay.SkyBox.md#rightvector)
- [staticStatus](Gameplay.Gameplay.SkyBox.md#staticstatus)
- [tag](Gameplay.Gameplay.SkyBox.md#tag)
- [transform](Gameplay.Gameplay.SkyBox.md#transform)
- [upVector](Gameplay.Gameplay.SkyBox.md#upvector)
- [useUpdate](Gameplay.Gameplay.SkyBox.md#useupdate)
- [worldLocation](Gameplay.Gameplay.SkyBox.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.SkyBox.md#worldrotation)
- [worldScale](Gameplay.Gameplay.SkyBox.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.SkyBox.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.SkyBox.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.SkyBox.md#attachtogameobject)
- [clone](Gameplay.Gameplay.SkyBox.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.SkyBox.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.SkyBox.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.SkyBox.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.SkyBox.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.SkyBox.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.SkyBox.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.SkyBox.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.SkyBox.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.SkyBox.md#getchildrenboxcenter)
- [getCloudDensity](Gameplay.Gameplay.SkyBox.md#getclouddensity)
- [getCloudOpacity](Gameplay.Gameplay.SkyBox.md#getcloudopacity)
- [getCloudSpeed](Gameplay.Gameplay.SkyBox.md#getcloudspeed)
- [getCloudTextureAssetID](Gameplay.Gameplay.SkyBox.md#getcloudtextureassetid)
- [getCloudTint](Gameplay.Gameplay.SkyBox.md#getcloudtint)
- [getCollision](Gameplay.Gameplay.SkyBox.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.SkyBox.md#getforwardvector)
- [getIsCloudEnabled](Gameplay.Gameplay.SkyBox.md#getiscloudenabled)
- [getIsEnableMoon](Gameplay.Gameplay.SkyBox.md#getisenablemoon)
- [getIsEnableSkyDomeGradient](Gameplay.Gameplay.SkyBox.md#getisenableskydomegradient)
- [getIsEnableStar](Gameplay.Gameplay.SkyBox.md#getisenablestar)
- [getIsEnableSun](Gameplay.Gameplay.SkyBox.md#getisenablesun)
- [getMoonIntensity](Gameplay.Gameplay.SkyBox.md#getmoonintensity)
- [getMoonSize](Gameplay.Gameplay.SkyBox.md#getmoonsize)
- [getMoonTextureAssetID](Gameplay.Gameplay.SkyBox.md#getmoontextureassetid)
- [getMoonTint](Gameplay.Gameplay.SkyBox.md#getmoontint)
- [getRelativeLocation](Gameplay.Gameplay.SkyBox.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.SkyBox.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.SkyBox.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.SkyBox.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.SkyBox.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.SkyBox.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.SkyBox.md#getscripts)
- [getSkyDomeBotTint](Gameplay.Gameplay.SkyBox.md#getskydomebottint)
- [getSkyDomeHorizontalFallOff](Gameplay.Gameplay.SkyBox.md#getskydomehorizontalfalloff)
- [getSkyDomeHorizontalTint](Gameplay.Gameplay.SkyBox.md#getskydomehorizontaltint)
- [getSkyDomeIntensity](Gameplay.Gameplay.SkyBox.md#getskydomeintensity)
- [getSkyDomeTextureAssetID](Gameplay.Gameplay.SkyBox.md#getskydometextureassetid)
- [getSkyDomeTint](Gameplay.Gameplay.SkyBox.md#getskydometint)
- [getSkyDomeTopTint](Gameplay.Gameplay.SkyBox.md#getskydometoptint)
- [getSkyPreset](Gameplay.Gameplay.SkyBox.md#getskypreset)
- [getSourceAssetGuid](Gameplay.Gameplay.SkyBox.md#getsourceassetguid)
- [getStarIntensity](Gameplay.Gameplay.SkyBox.md#getstarintensity)
- [getStarTextureAssetID](Gameplay.Gameplay.SkyBox.md#getstartextureassetid)
- [getStarTiling](Gameplay.Gameplay.SkyBox.md#getstartiling)
- [getSunIntensity](Gameplay.Gameplay.SkyBox.md#getsunintensity)
- [getSunSize](Gameplay.Gameplay.SkyBox.md#getsunsize)
- [getSunTextureAssetID](Gameplay.Gameplay.SkyBox.md#getsuntextureassetid)
- [getSunTint](Gameplay.Gameplay.SkyBox.md#getsuntint)
- [getTransform](Gameplay.Gameplay.SkyBox.md#gettransform)
- [getUpVector](Gameplay.Gameplay.SkyBox.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.SkyBox.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.SkyBox.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.SkyBox.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.SkyBox.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.SkyBox.md#ondestroy)
- [onStart](Gameplay.Gameplay.SkyBox.md#onstart)
- [onUpdate](Gameplay.Gameplay.SkyBox.md#onupdate)
- [ready](Gameplay.Gameplay.SkyBox.md#ready)
- [refresh](Gameplay.Gameplay.SkyBox.md#refresh)
- [reset](Gameplay.Gameplay.SkyBox.md#reset)
- [setCloudDensity](Gameplay.Gameplay.SkyBox.md#setclouddensity)
- [setCloudOpacity](Gameplay.Gameplay.SkyBox.md#setcloudopacity)
- [setCloudSpeed](Gameplay.Gameplay.SkyBox.md#setcloudspeed)
- [setCloudTextureAssetByID](Gameplay.Gameplay.SkyBox.md#setcloudtextureassetbyid)
- [setCollision](Gameplay.Gameplay.SkyBox.md#setcollision)
- [setDaSetCloudTintyTime](Gameplay.Gameplay.SkyBox.md#setdasetcloudtintytime)
- [setIsEnableCloud](Gameplay.Gameplay.SkyBox.md#setisenablecloud)
- [setIsEnableMoon](Gameplay.Gameplay.SkyBox.md#setisenablemoon)
- [setIsEnableSkyDomeGradient](Gameplay.Gameplay.SkyBox.md#setisenableskydomegradient)
- [setIsEnableStar](Gameplay.Gameplay.SkyBox.md#setisenablestar)
- [setIsEnableSun](Gameplay.Gameplay.SkyBox.md#setisenablesun)
- [setLocationAndRotation](Gameplay.Gameplay.SkyBox.md#setlocationandrotation)
- [setMoonIntensity](Gameplay.Gameplay.SkyBox.md#setmoonintensity)
- [setMoonSize](Gameplay.Gameplay.SkyBox.md#setmoonsize)
- [setMoonTextureAssetByID](Gameplay.Gameplay.SkyBox.md#setmoontextureassetbyid)
- [setMoonTint](Gameplay.Gameplay.SkyBox.md#setmoontint)
- [setRelativeLocation](Gameplay.Gameplay.SkyBox.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.SkyBox.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.SkyBox.md#setrelativescale)
- [setSkyDomeBotTint](Gameplay.Gameplay.SkyBox.md#setskydomebottint)
- [setSkyDomeHorizontalFallOff](Gameplay.Gameplay.SkyBox.md#setskydomehorizontalfalloff)
- [setSkyDomeHorizontalTint](Gameplay.Gameplay.SkyBox.md#setskydomehorizontaltint)
- [setSkyDomeIntensity](Gameplay.Gameplay.SkyBox.md#setskydomeintensity)
- [setSkyDomeTextureAssetByID](Gameplay.Gameplay.SkyBox.md#setskydometextureassetbyid)
- [setSkyDomeTint](Gameplay.Gameplay.SkyBox.md#setskydometint)
- [setSkyDomeTopTint](Gameplay.Gameplay.SkyBox.md#setskydometoptint)
- [setSkyPreset](Gameplay.Gameplay.SkyBox.md#setskypreset)
- [setStarIntensity](Gameplay.Gameplay.SkyBox.md#setstarintensity)
- [setStarTextureAssetByID](Gameplay.Gameplay.SkyBox.md#setstartextureassetbyid)
- [setStarTiling](Gameplay.Gameplay.SkyBox.md#setstartiling)
- [setSunIntensity](Gameplay.Gameplay.SkyBox.md#setsunintensity)
- [setSunSize](Gameplay.Gameplay.SkyBox.md#setsunsize)
- [setSunTextureAssetByID](Gameplay.Gameplay.SkyBox.md#setsuntextureassetbyid)
- [setSunTint](Gameplay.Gameplay.SkyBox.md#setsuntint)
- [setTransform](Gameplay.Gameplay.SkyBox.md#settransform)
- [setVisibility](Gameplay.Gameplay.SkyBox.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.SkyBox.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.SkyBox.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.SkyBox.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.SkyBox.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.SkyBox.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.SkyBox.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.SkyBox.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.SkyBox.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.SkyBox.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.SkyBox.md#spawngameobject)

## Constructors

### constructor

• **new SkyBox**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Accessors

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:405

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:38

___

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.isVisible

#### Defined in

Core/index.d.ts:496

___

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:447

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

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:173

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

#### Inherited from

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:502

___

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:463

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

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:310

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

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:336

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

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:362

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

#### Inherited from

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:419

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:442

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

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | usage:Tag |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:179

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

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:211

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

#### Inherited from

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:392

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:432

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:230

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

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:235

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:260

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:279

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

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:284

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
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

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
| `name` | `string` | usage:名字 |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

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
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

___

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

#### Defined in

Core/index.d.ts:543

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
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

#### Defined in

Core/index.d.ts:146

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

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
| `nonColliding?` | `boolean` | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | usage:如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取Gameobject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | usage:是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | usage:是否递归包含子物体 default:undefined |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

#### Defined in

Core/index.d.ts:194

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

___

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名称 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

___

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取Children 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

#### Defined in

Core/index.d.ts:522

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

___

### getCloudDensity

▸ **getCloudDensity**(): `number`

**`Description`**

获取云密度

**`Effect`**

客户端生效

#### Returns

`number`

云密度

#### Defined in

Gameplay/index.d.ts:9679

___

### getCloudOpacity

▸ **getCloudOpacity**(): `number`

**`Description`**

获取云的透明度

**`Effect`**

客户端生效

#### Returns

`number`

云的透明度

#### Defined in

Gameplay/index.d.ts:9655

___

### getCloudSpeed

▸ **getCloudSpeed**(): `number`

**`Description`**

获取云速度

**`Effect`**

客户端生效

#### Returns

`number`

云速度

#### Defined in

Gameplay/index.d.ts:9691

___

### getCloudTextureAssetID

▸ **getCloudTextureAssetID**(): `string`

**`Description`**

获取云贴图资源ID

**`Effect`**

客户端生效

#### Returns

`string`

云贴图资源ID

#### Defined in

Gameplay/index.d.ts:9643

___

### getCloudTint

▸ **getCloudTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取云颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

云颜色

#### Defined in

Gameplay/index.d.ts:9667

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

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

___

### getIsCloudEnabled

▸ **getIsCloudEnabled**(): `boolean`

**`Description`**

获取是否开启云

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启云

#### Defined in

Gameplay/index.d.ts:9631

___

### getIsEnableMoon

▸ **getIsEnableMoon**(): `boolean`

**`Description`**

获取是否开启月亮

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启月亮

#### Defined in

Gameplay/index.d.ts:9571

___

### getIsEnableSkyDomeGradient

▸ **getIsEnableSkyDomeGradient**(): `boolean`

**`Description`**

获取是否开启渐变效果

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启渐变效果

#### Defined in

Gameplay/index.d.ts:9403

___

### getIsEnableStar

▸ **getIsEnableStar**(): `boolean`

**`Description`**

获取是否开启星星

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启星星

#### Defined in

Gameplay/index.d.ts:9463

___

### getIsEnableSun

▸ **getIsEnableSun**(): `boolean`

**`Description`**

获取是否开启太阳

**`Effect`**

客户端生效

#### Returns

`boolean`

是否开启太阳

#### Defined in

Gameplay/index.d.ts:9511

___

### getMoonIntensity

▸ **getMoonIntensity**(): `number`

**`Description`**

获取月亮亮度

**`Effect`**

客户端生效

#### Returns

`number`

月亮亮度

#### Defined in

Gameplay/index.d.ts:9595

___

### getMoonSize

▸ **getMoonSize**(): `number`

**`Description`**

获取月亮大小

**`Effect`**

客户端生效

#### Returns

`number`

月亮大小

#### Defined in

Gameplay/index.d.ts:9619

___

### getMoonTextureAssetID

▸ **getMoonTextureAssetID**(): `string`

**`Description`**

获取月亮贴图资源ID

**`Effect`**

客户端生效

#### Returns

`string`

月亮贴图资源ID

#### Defined in

Gameplay/index.d.ts:9583

___

### getMoonTint

▸ **getMoonTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取月亮颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

月亮颜色

#### Defined in

Gameplay/index.d.ts:9607

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

#### Defined in

Core/index.d.ts:427

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
| `guid` | `string` | usage:guid |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

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
| `name` | `string` | usage:名字 |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array<Script>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

___

### getSkyDomeBotTint

▸ **getSkyDomeBotTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

天空下层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空下层颜色

#### Defined in

Gameplay/index.d.ts:9439

___

### getSkyDomeHorizontalFallOff

▸ **getSkyDomeHorizontalFallOff**(): `number`

**`Description`**

获取地平线渐出值

**`Effect`**

客户端生效

#### Returns

`number`

地平线渐出值

#### Defined in

Gameplay/index.d.ts:9451

___

### getSkyDomeHorizontalTint

▸ **getSkyDomeHorizontalTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

天空中层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空中层颜色

#### Defined in

Gameplay/index.d.ts:9427

___

### getSkyDomeIntensity

▸ **getSkyDomeIntensity**(): `number`

**`Description`**

获取天空球亮度

**`Effect`**

客户端生效

#### Returns

`number`

天空球亮度

#### Defined in

Gameplay/index.d.ts:9379

___

### getSkyDomeTextureAssetID

▸ **getSkyDomeTextureAssetID**(): `string`

**`Description`**

获取天空球贴图ID

**`Effect`**

客户端生效

#### Returns

`string`

天空球贴图

#### Defined in

Gameplay/index.d.ts:9367

___

### getSkyDomeTint

▸ **getSkyDomeTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取天空球颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空球颜色

#### Defined in

Gameplay/index.d.ts:9391

___

### getSkyDomeTopTint

▸ **getSkyDomeTopTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取天空顶层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

天空顶层颜色

#### Defined in

Gameplay/index.d.ts:9415

___

### getSkyPreset

▸ **getSkyPreset**(): `number`

**`Description`**

获取预设

**`Effect`**

客户端生效

#### Returns

`number`

返回预设

#### Defined in

Gameplay/index.d.ts:9345

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

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

___

### getStarIntensity

▸ **getStarIntensity**(): `number`

**`Description`**

获取星星亮度

**`Effect`**

客户端生效

#### Returns

`number`

星星亮度

#### Defined in

Gameplay/index.d.ts:9487

___

### getStarTextureAssetID

▸ **getStarTextureAssetID**(): `string`

**`Description`**

获取星星贴图资源ID

**`Effect`**

客户端生效

#### Returns

`string`

星星贴图资源ID

#### Defined in

Gameplay/index.d.ts:9475

___

### getStarTiling

▸ **getStarTiling**(): `number`

**`Description`**

获取星星密度

**`Effect`**

客户端生效

#### Returns

`number`

星星密度

#### Defined in

Gameplay/index.d.ts:9499

___

### getSunIntensity

▸ **getSunIntensity**(): `number`

**`Description`**

获取太阳光亮度

**`Effect`**

客户端生效

#### Returns

`number`

太阳光亮度

#### Defined in

Gameplay/index.d.ts:9535

___

### getSunSize

▸ **getSunSize**(): `number`

**`Description`**

获取太阳大小

**`Effect`**

客户端生效

#### Returns

`number`

太阳大小

#### Defined in

Gameplay/index.d.ts:9559

___

### getSunTextureAssetID

▸ **getSunTextureAssetID**(): `string`

**`Description`**

获取太阳贴图资源ID

**`Effect`**

客户端生效

#### Returns

`string`

太阳贴图资源ID

#### Defined in

Gameplay/index.d.ts:9523

___

### getSunTint

▸ **getSunTint**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取太阳颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

太阳颜色

#### Defined in

Gameplay/index.d.ts:9547

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
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

#### Defined in

Core/index.d.ts:219

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

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
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

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
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

#### Defined in

Core/index.d.ts:292

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

#### Inherited from

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

#### Defined in

Core/index.d.ts:17

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

#### Defined in

Core/index.d.ts:12

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
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

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

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

___

### refresh

▸ **refresh**(): `void`

**`Description`**

天空球刷新

**`Effect`**

客户端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9356

___

### reset

▸ **reset**(): `void`

**`Description`**

重置为默认参数

**`Effect`**

客户端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9361

___

### setCloudDensity

▸ **setCloudDensity**(`value`): `void`

**`Description`**

设置云密度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:云密度(0~1) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9685

___

### setCloudOpacity

▸ **setCloudOpacity**(`value`): `void`

**`Description`**

设置云的透明度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:云的透明度(0~1) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9661

___

### setCloudSpeed

▸ **setCloudSpeed**(`value`): `void`

**`Description`**

设置云速度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:云速度(0~10) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9697

___

### setCloudTextureAssetByID

▸ **setCloudTextureAssetByID**(`value`): `void`

**`Description`**

设置云贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | usage:云贴图资源ID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9649

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` | usage: 是否传递给子节点 default: false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

#### Defined in

Core/index.d.ts:471

___

### setDaSetCloudTintyTime

▸ **setDaSetCloudTintyTime**(`value`): `void`

**`Description`**

设置云颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:云颜色 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9673

___

### setIsEnableCloud

▸ **setIsEnableCloud**(`value`): `void`

**`Description`**

设置是否开启云

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否开启云 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9637

___

### setIsEnableMoon

▸ **setIsEnableMoon**(`value`): `void`

**`Description`**

设置是否开启月亮

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否开启月亮 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9577

___

### setIsEnableSkyDomeGradient

▸ **setIsEnableSkyDomeGradient**(`value`): `void`

**`Description`**

设置是否开启渐变效果

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否开启渐变效果 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9409

___

### setIsEnableStar

▸ **setIsEnableStar**(`value`): `void`

**`Description`**

设置是否开启星星

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否开启星星 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9469

___

### setIsEnableSun

▸ **setIsEnableSun**(`value`): `void`

**`Description`**

设置是否开启太阳

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | usage:是否开启太阳 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9517

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
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

___

### setMoonIntensity

▸ **setMoonIntensity**(`value`): `void`

**`Description`**

设置月亮亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:月亮亮度(0~2000) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9601

___

### setMoonSize

▸ **setMoonSize**(`value`): `void`

**`Description`**

设置月亮大小

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:月亮大小(0~100) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9625

___

### setMoonTextureAssetByID

▸ **setMoonTextureAssetByID**(`value`): `void`

**`Description`**

设置月亮贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | usage:月亮贴图资源ID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9589

___

### setMoonTint

▸ **setMoonTint**(`value`): `void`

**`Description`**

设置月亮颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:月亮颜色 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9613

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
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

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
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

___

### setSkyDomeBotTint

▸ **setSkyDomeBotTint**(`value`): `void`

**`Description`**

设置天空下层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:天空下层颜色值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9445

___

### setSkyDomeHorizontalFallOff

▸ **setSkyDomeHorizontalFallOff**(`value`): `void`

**`Description`**

设置地平线渐出值

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:地平线渐出值(1~20) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9457

___

### setSkyDomeHorizontalTint

▸ **setSkyDomeHorizontalTint**(`value`): `void`

**`Description`**

设置天空中层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:天空中层颜色值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9433

___

### setSkyDomeIntensity

▸ **setSkyDomeIntensity**(`value`): `void`

**`Description`**

设置天空球亮度3

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:天空球亮度值(0~100) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9385

___

### setSkyDomeTextureAssetByID

▸ **setSkyDomeTextureAssetByID**(`value`): `void`

**`Description`**

设置天空球贴图

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | usage:贴图ID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9373

___

### setSkyDomeTint

▸ **setSkyDomeTint**(`value`): `void`

**`Description`**

设置天空球颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:天空球颜色值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9397

___

### setSkyDomeTopTint

▸ **setSkyDomeTopTint**(`value`): `void`

**`Description`**

设置天空顶层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:天空顶层颜色值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9421

___

### setSkyPreset

▸ **setSkyPreset**(`NewPreset`): `void`

**`Description`**

设置预设

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewPreset` | [`SkyPreset`](../enums/Gameplay.Gameplay.SkyPreset.md) | usage:预设枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9351

___

### setStarIntensity

▸ **setStarIntensity**(`value`): `void`

**`Description`**

设置星星亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:星星亮度(0~1) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9493

___

### setStarTextureAssetByID

▸ **setStarTextureAssetByID**(`value`): `void`

**`Description`**

设置星星贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | usage:星星贴图资源ID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9481

___

### setStarTiling

▸ **setStarTiling**(`value`): `void`

**`Description`**

设置星星密度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:星星密度(0~100) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9505

___

### setSunIntensity

▸ **setSunIntensity**(`value`): `void`

**`Description`**

设置太阳光亮度

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:太阳光亮度(0~2000) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9541

___

### setSunSize

▸ **setSunSize**(`value`): `void`

**`Description`**

设置太阳大小

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | usage:太阳大小(0~100) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9565

___

### setSunTextureAssetByID

▸ **setSunTextureAssetByID**(`value`): `void`

**`Description`**

设置太阳贴图资源ID

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | usage:太阳贴图资源ID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9529

___

### setSunTint

▸ **setSunTint**(`value`): `void`

**`Description`**

设置太阳颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.Type.LinearColor.md) | usage:太阳颜色 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9553

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
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

#### Defined in

Core/index.d.ts:225

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
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态 |
| `propagateToChildren?` | `boolean` | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

#### Defined in

Core/index.d.ts:487

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

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
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

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
| `v` | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过guid异步查找Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

#### Defined in

Core/index.d.ts:161

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

___

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过Guid查找Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

#### Defined in

Core/index.d.ts:153

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | usage:自定义Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130
