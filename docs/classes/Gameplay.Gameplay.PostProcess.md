[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / PostProcess

# Class: PostProcess

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).PostProcess

**`Author`**

Hanbaoqiang

**`Description`**

后处理对象

**`Network Status`**

usage:双端

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`PostProcess`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.PostProcess.md#constructor)

### Accessors

- [forwardVector](Gameplay.Gameplay.PostProcess.md#forwardvector)
- [guid](Gameplay.Gameplay.PostProcess.md#guid)
- [isVisible](Gameplay.Gameplay.PostProcess.md#isvisible)
- [lockState](Gameplay.Gameplay.PostProcess.md#lockstate)
- [name](Gameplay.Gameplay.PostProcess.md#name)
- [netStatus](Gameplay.Gameplay.PostProcess.md#netstatus)
- [parent](Gameplay.Gameplay.PostProcess.md#parent)
- [relativeLocation](Gameplay.Gameplay.PostProcess.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.PostProcess.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.PostProcess.md#relativescale)
- [rightVector](Gameplay.Gameplay.PostProcess.md#rightvector)
- [staticStatus](Gameplay.Gameplay.PostProcess.md#staticstatus)
- [tag](Gameplay.Gameplay.PostProcess.md#tag)
- [transform](Gameplay.Gameplay.PostProcess.md#transform)
- [upVector](Gameplay.Gameplay.PostProcess.md#upvector)
- [useUpdate](Gameplay.Gameplay.PostProcess.md#useupdate)
- [worldLocation](Gameplay.Gameplay.PostProcess.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.PostProcess.md#worldrotation)
- [worldScale](Gameplay.Gameplay.PostProcess.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.PostProcess.md#adddestroycallback)
- [addOutLineColor](Gameplay.Gameplay.PostProcess.md#addoutlinecolor)
- [asyncGetScriptByName](Gameplay.Gameplay.PostProcess.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.PostProcess.md#attachtogameobject)
- [clone](Gameplay.Gameplay.PostProcess.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.PostProcess.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.PostProcess.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.PostProcess.md#detachfromgameobject)
- [getAmbientOcclusionIntensity](Gameplay.Gameplay.PostProcess.md#getambientocclusionintensity)
- [getAmbientOcclusionRadius](Gameplay.Gameplay.PostProcess.md#getambientocclusionradius)
- [getAutoExposureBias](Gameplay.Gameplay.PostProcess.md#getautoexposurebias)
- [getAutoExposureMaxBrightness](Gameplay.Gameplay.PostProcess.md#getautoexposuremaxbrightness)
- [getAutoExposureMinBrightness](Gameplay.Gameplay.PostProcess.md#getautoexposureminbrightness)
- [getBloomIntensity](Gameplay.Gameplay.PostProcess.md#getbloomintensity)
- [getBoundingBoxSize](Gameplay.Gameplay.PostProcess.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.PostProcess.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.PostProcess.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.PostProcess.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.PostProcess.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.PostProcess.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.PostProcess.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.PostProcess.md#getforwardvector)
- [getGlobalContrast](Gameplay.Gameplay.PostProcess.md#getglobalcontrast)
- [getGlobalGamma](Gameplay.Gameplay.PostProcess.md#getglobalgamma)
- [getGlobalSaturation](Gameplay.Gameplay.PostProcess.md#getglobalsaturation)
- [getHDRContrast](Gameplay.Gameplay.PostProcess.md#gethdrcontrast)
- [getHDRGamma](Gameplay.Gameplay.PostProcess.md#gethdrgamma)
- [getHDRSaturation](Gameplay.Gameplay.PostProcess.md#gethdrsaturation)
- [getLDR2HDRThreshold](Gameplay.Gameplay.PostProcess.md#getldr2hdrthreshold)
- [getLDRContrast](Gameplay.Gameplay.PostProcess.md#getldrcontrast)
- [getLDRGamma](Gameplay.Gameplay.PostProcess.md#getldrgamma)
- [getLDRSaturation](Gameplay.Gameplay.PostProcess.md#getldrsaturation)
- [getLUTBlend](Gameplay.Gameplay.PostProcess.md#getlutblend)
- [getLUTTextureAssetByGuid](Gameplay.Gameplay.PostProcess.md#getluttextureassetbyguid)
- [getMotionBlur](Gameplay.Gameplay.PostProcess.md#getmotionblur)
- [getOccluderBlend](Gameplay.Gameplay.PostProcess.md#getoccluderblend)
- [getOutlineWidth](Gameplay.Gameplay.PostProcess.md#getoutlinewidth)
- [getRelativeLocation](Gameplay.Gameplay.PostProcess.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.PostProcess.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.PostProcess.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.PostProcess.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.PostProcess.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.PostProcess.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.PostProcess.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.PostProcess.md#getsourceassetguid)
- [getToneBlackClip](Gameplay.Gameplay.PostProcess.md#gettoneblackclip)
- [getToneCurveAmount](Gameplay.Gameplay.PostProcess.md#gettonecurveamount)
- [getToneShoulder](Gameplay.Gameplay.PostProcess.md#gettoneshoulder)
- [getToneSlope](Gameplay.Gameplay.PostProcess.md#gettoneslope)
- [getToneToe](Gameplay.Gameplay.PostProcess.md#gettonetoe)
- [getToneWhiteClip](Gameplay.Gameplay.PostProcess.md#gettonewhiteclip)
- [getTransform](Gameplay.Gameplay.PostProcess.md#gettransform)
- [getUpVector](Gameplay.Gameplay.PostProcess.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.PostProcess.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.PostProcess.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.PostProcess.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.PostProcess.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.PostProcess.md#ondestroy)
- [onStart](Gameplay.Gameplay.PostProcess.md#onstart)
- [onUpdate](Gameplay.Gameplay.PostProcess.md#onupdate)
- [ready](Gameplay.Gameplay.PostProcess.md#ready)
- [setAmbientOcclusionIntensity](Gameplay.Gameplay.PostProcess.md#setambientocclusionintensity)
- [setAmbientOcclusionRadius](Gameplay.Gameplay.PostProcess.md#setambientocclusionradius)
- [setAutoExposureBias](Gameplay.Gameplay.PostProcess.md#setautoexposurebias)
- [setAutoExposureMaxBrightness](Gameplay.Gameplay.PostProcess.md#setautoexposuremaxbrightness)
- [setAutoExposureMinBrightness](Gameplay.Gameplay.PostProcess.md#setautoexposureminbrightness)
- [setBloomIntensity](Gameplay.Gameplay.PostProcess.md#setbloomintensity)
- [setCollision](Gameplay.Gameplay.PostProcess.md#setcollision)
- [setGlobalContrast](Gameplay.Gameplay.PostProcess.md#setglobalcontrast)
- [setGlobalGamma](Gameplay.Gameplay.PostProcess.md#setglobalgamma)
- [setGlobalSaturation](Gameplay.Gameplay.PostProcess.md#setglobalsaturation)
- [setHDRContrast](Gameplay.Gameplay.PostProcess.md#sethdrcontrast)
- [setHDRGamma](Gameplay.Gameplay.PostProcess.md#sethdrgamma)
- [setHDRSaturation](Gameplay.Gameplay.PostProcess.md#sethdrsaturation)
- [setLDR2HDRThreshold](Gameplay.Gameplay.PostProcess.md#setldr2hdrthreshold)
- [setLDRContrast](Gameplay.Gameplay.PostProcess.md#setldrcontrast)
- [setLDRGamma](Gameplay.Gameplay.PostProcess.md#setldrgamma)
- [setLDRSaturation](Gameplay.Gameplay.PostProcess.md#setldrsaturation)
- [setLUTBlend](Gameplay.Gameplay.PostProcess.md#setlutblend)
- [setLUTTextureAssetByGuid](Gameplay.Gameplay.PostProcess.md#setluttextureassetbyguid)
- [setLocationAndRotation](Gameplay.Gameplay.PostProcess.md#setlocationandrotation)
- [setMotionBlur](Gameplay.Gameplay.PostProcess.md#setmotionblur)
- [setOccluderBlend](Gameplay.Gameplay.PostProcess.md#setoccluderblend)
- [setOutlineWidth](Gameplay.Gameplay.PostProcess.md#setoutlinewidth)
- [setRelativeLocation](Gameplay.Gameplay.PostProcess.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.PostProcess.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.PostProcess.md#setrelativescale)
- [setToneBlackClip](Gameplay.Gameplay.PostProcess.md#settoneblackclip)
- [setToneCurveAmount](Gameplay.Gameplay.PostProcess.md#settonecurveamount)
- [setToneShoulder](Gameplay.Gameplay.PostProcess.md#settoneshoulder)
- [setToneSlope](Gameplay.Gameplay.PostProcess.md#settoneslope)
- [setToneToe](Gameplay.Gameplay.PostProcess.md#settonetoe)
- [setToneWhiteClip](Gameplay.Gameplay.PostProcess.md#settonewhiteclip)
- [setTransform](Gameplay.Gameplay.PostProcess.md#settransform)
- [setVisibility](Gameplay.Gameplay.PostProcess.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.PostProcess.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.PostProcess.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.PostProcess.md#setworldscale)
- [asyncFind](Gameplay.Gameplay.PostProcess.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.PostProcess.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.PostProcess.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.PostProcess.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.PostProcess.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.PostProcess.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.PostProcess.md#spawngameobject)

## Constructors

### constructor

• **new PostProcess**()

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

### addOutLineColor

▸ **addOutLineColor**(`newOutLineColor`): `number`

**`Description`**

添加一个描边颜色并返回对应的索引

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOutLineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值

#### Defined in

Gameplay/index.d.ts:9309

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

### getAmbientOcclusionIntensity

▸ **getAmbientOcclusionIntensity**(): `number`

**`Description`**

获取环境光遮蔽强度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9134

___

### getAmbientOcclusionRadius

▸ **getAmbientOcclusionRadius**(): `number`

**`Description`**

获取环境光遮蔽半径

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9146

___

### getAutoExposureBias

▸ **getAutoExposureBias**(): `number`

**`Description`**

获取曝光补偿

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9254

___

### getAutoExposureMaxBrightness

▸ **getAutoExposureMaxBrightness**(): `number`

**`Description`**

获取曝光最大亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9278

___

### getAutoExposureMinBrightness

▸ **getAutoExposureMinBrightness**(): `number`

**`Description`**

获取曝光最小亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9266

___

### getBloomIntensity

▸ **getBloomIntensity**(): `number`

**`Description`**

获取泛光

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9002

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

### getGlobalContrast

▸ **getGlobalContrast**(): `number`

**`Description`**

获取全局对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9026

___

### getGlobalGamma

▸ **getGlobalGamma**(): `number`

**`Description`**

获取全局伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9038

___

### getGlobalSaturation

▸ **getGlobalSaturation**(): `number`

**`Description`**

获取全局饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9014

___

### getHDRContrast

▸ **getHDRContrast**(): `number`

**`Description`**

获取HDR对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9098

___

### getHDRGamma

▸ **getHDRGamma**(): `number`

**`Description`**

获取HDR伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9110

___

### getHDRSaturation

▸ **getHDRSaturation**(): `number`

**`Description`**

获取HDR饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9086

___

### getLDR2HDRThreshold

▸ **getLDR2HDRThreshold**(): `number`

**`Description`**

获取LDR与HDR阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9182

___

### getLDRContrast

▸ **getLDRContrast**(): `number`

**`Description`**

获取LDR对比度Contrast

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9062

___

### getLDRGamma

▸ **getLDRGamma**(): `number`

**`Description`**

获取LDR伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9074

___

### getLDRSaturation

▸ **getLDRSaturation**(): `number`

**`Description`**

获取LDR饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9050

___

### getLUTBlend

▸ **getLUTBlend**(): `number`

**`Description`**

获取LUT百分比

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9122

___

### getLUTTextureAssetByGuid

▸ **getLUTTextureAssetByGuid**(): `string`

**`Description`**

获取LUT贴图资源Guid

**`Effect`**

调用端生效

#### Returns

`string`

获取当前LUT贴图的Guid值

#### Defined in

Gameplay/index.d.ts:9158

___

### getMotionBlur

▸ **getMotionBlur**(): `number`

**`Description`**

获取动态模糊

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9170

___

### getOccluderBlend

▸ **getOccluderBlend**(): `number`

**`Description`**

获取被遮挡融合比例

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9302

___

### getOutlineWidth

▸ **getOutlineWidth**(): `number`

**`Description`**

获取描边宽度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9290

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

### getToneBlackClip

▸ **getToneBlackClip**(): `number`

**`Description`**

获取色调映射暗部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9230

___

### getToneCurveAmount

▸ **getToneCurveAmount**(): `number`

**`Description`**

获取当前色调映射

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:8990

___

### getToneShoulder

▸ **getToneShoulder**(): `number`

**`Description`**

获取色调映射高位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9218

___

### getToneSlope

▸ **getToneSlope**(): `number`

**`Description`**

获取色调映射斜率

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9194

___

### getToneToe

▸ **getToneToe**(): `number`

**`Description`**

获取色调映射低位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9206

___

### getToneWhiteClip

▸ **getToneWhiteClip**(): `number`

**`Description`**

获取色调映射亮部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9242

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

▸ **ready**(): `Promise`<[`PostProcess`](Gameplay.Gameplay.PostProcess.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`PostProcess`](Gameplay.Gameplay.PostProcess.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

___

### setAmbientOcclusionIntensity

▸ **setAmbientOcclusionIntensity**(`Value`): `void`

**`Description`**

设置环境光遮蔽强度（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9128

___

### setAmbientOcclusionRadius

▸ **setAmbientOcclusionRadius**(`Value`): `void`

**`Description`**

设置环境光遮蔽半径（0.1 ~ 500.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9140

___

### setAutoExposureBias

▸ **setAutoExposureBias**(`Value`): `void`

**`Description`**

设置曝光补偿（-15 ~ 15）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9248

___

### setAutoExposureMaxBrightness

▸ **setAutoExposureMaxBrightness**(`Value`): `void`

**`Description`**

设置曝光最大亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9272

___

### setAutoExposureMinBrightness

▸ **setAutoExposureMinBrightness**(`Value`): `void`

**`Description`**

设置曝光最小亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9260

___

### setBloomIntensity

▸ **setBloomIntensity**(`Value`): `void`

**`Description`**

设置泛光（0 ~ 8）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8996

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

### setGlobalContrast

▸ **setGlobalContrast**(`Value`): `void`

**`Description`**

设置全局对比度 （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9020

___

### setGlobalGamma

▸ **setGlobalGamma**(`Value`): `void`

**`Description`**

设置全局伽马值（0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9032

___

### setGlobalSaturation

▸ **setGlobalSaturation**(`Value`): `void`

**`Description`**

设置全局饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9008

___

### setHDRContrast

▸ **setHDRContrast**(`Value`): `void`

**`Description`**

设置HDR对比度 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9092

___

### setHDRGamma

▸ **setHDRGamma**(`Value`): `void`

**`Description`**

设置HDR伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9104

___

### setHDRSaturation

▸ **setHDRSaturation**(`Value`): `void`

**`Description`**

设置HDR饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9080

___

### setLDR2HDRThreshold

▸ **setLDR2HDRThreshold**(`Value`): `void`

**`Description`**

设置LDR与HDR阈值 （-1 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9176

___

### setLDRContrast

▸ **setLDRContrast**(`Value`): `void`

**`Description`**

设置LDR对比度Contrast （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9056

___

### setLDRGamma

▸ **setLDRGamma**(`Value`): `void`

**`Description`**

设置LDR伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9068

___

### setLDRSaturation

▸ **setLDRSaturation**(`Value`): `void`

**`Description`**

设置LDR饱和度（0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9044

___

### setLUTBlend

▸ **setLUTBlend**(`Value`): `void`

**`Description`**

设置LUT百分比 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9116

___

### setLUTTextureAssetByGuid

▸ **setLUTTextureAssetByGuid**(`Value`): `void`

**`Description`**

设置LUT贴图资源通过Guid

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `string` | usage:需要设置的贴图Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9152

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

### setMotionBlur

▸ **setMotionBlur**(`Value`): `void`

**`Description`**

设置动态模糊 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9164

___

### setOccluderBlend

▸ **setOccluderBlend**(`Value`): `void`

**`Description`**

设置被遮挡融合比例（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9296

___

### setOutlineWidth

▸ **setOutlineWidth**(`Value`): `void`

**`Description`**

设置描边宽度 （0 ~ 4）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9284

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

### setToneBlackClip

▸ **setToneBlackClip**(`Value`): `void`

**`Description`**

设置色调映射暗部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9224

___

### setToneCurveAmount

▸ **setToneCurveAmount**(`Value`): `void`

**`Description`**

设置色调映射 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8984

___

### setToneShoulder

▸ **setToneShoulder**(`Value`): `void`

**`Description`**

设置色调映射高位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9212

___

### setToneSlope

▸ **setToneSlope**(`Value`): `void`

**`Description`**

设置色调映射斜率 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9188

___

### setToneToe

▸ **setToneToe**(`Value`): `void`

**`Description`**

设置色调映射低位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9200

___

### setToneWhiteClip

▸ **setToneWhiteClip**(`Value`): `void`

**`Description`**

设置色调映射亮部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9236

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
