[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / PostProcess

# Class: PostProcess

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).PostProcess

**`Author`**

baoqiang.han

**`Description`**

后处理对象

**`Network Status`**

usage:双端

## Hierarchy

- `GameObject`

  ↳ **`PostProcess`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.PostProcess.md#constructor)

### Accessors

- [ambientOcclusionIntensity](Gameplay.Gameplay.PostProcess.md#ambientocclusionintensity)
- [ambientOcclusionRadius](Gameplay.Gameplay.PostProcess.md#ambientocclusionradius)
- [autoExposureBias](Gameplay.Gameplay.PostProcess.md#autoexposurebias)
- [autoExposureMaxBrightness](Gameplay.Gameplay.PostProcess.md#autoexposuremaxbrightness)
- [autoExposureMinBrightness](Gameplay.Gameplay.PostProcess.md#autoexposureminbrightness)
- [bloomIntensity](Gameplay.Gameplay.PostProcess.md#bloomintensity)
- [forwardVector](Gameplay.Gameplay.PostProcess.md#forwardvector)
- [globalContrast](Gameplay.Gameplay.PostProcess.md#globalcontrast)
- [globalGamma](Gameplay.Gameplay.PostProcess.md#globalgamma)
- [globalSaturation](Gameplay.Gameplay.PostProcess.md#globalsaturation)
- [guid](Gameplay.Gameplay.PostProcess.md#guid)
- [hDRContrast](Gameplay.Gameplay.PostProcess.md#hdrcontrast)
- [hDRGamma](Gameplay.Gameplay.PostProcess.md#hdrgamma)
- [hDRSaturation](Gameplay.Gameplay.PostProcess.md#hdrsaturation)
- [lDR2HDRThreshold](Gameplay.Gameplay.PostProcess.md#ldr2hdrthreshold)
- [lDRContrast](Gameplay.Gameplay.PostProcess.md#ldrcontrast)
- [lDRGamma](Gameplay.Gameplay.PostProcess.md#ldrgamma)
- [lDRSaturation](Gameplay.Gameplay.PostProcess.md#ldrsaturation)
- [lUTBlend](Gameplay.Gameplay.PostProcess.md#lutblend)
- [lUTTextureAssetByGuid](Gameplay.Gameplay.PostProcess.md#luttextureassetbyguid)
- [lockStatus](Gameplay.Gameplay.PostProcess.md#lockstatus)
- [motionBlur](Gameplay.Gameplay.PostProcess.md#motionblur)
- [name](Gameplay.Gameplay.PostProcess.md#name)
- [netStatus](Gameplay.Gameplay.PostProcess.md#netstatus)
- [occlusionBlend](Gameplay.Gameplay.PostProcess.md#occlusionblend)
- [outlineWidth](Gameplay.Gameplay.PostProcess.md#outlinewidth)
- [parent](Gameplay.Gameplay.PostProcess.md#parent)
- [relativeLocation](Gameplay.Gameplay.PostProcess.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.PostProcess.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.PostProcess.md#relativescale)
- [rightVector](Gameplay.Gameplay.PostProcess.md#rightvector)
- [staticStatus](Gameplay.Gameplay.PostProcess.md#staticstatus)
- [tag](Gameplay.Gameplay.PostProcess.md#tag)
- [toneBlackClip](Gameplay.Gameplay.PostProcess.md#toneblackclip)
- [toneCurveAmount](Gameplay.Gameplay.PostProcess.md#tonecurveamount)
- [toneShoulder](Gameplay.Gameplay.PostProcess.md#toneshoulder)
- [toneSlope](Gameplay.Gameplay.PostProcess.md#toneslope)
- [toneToe](Gameplay.Gameplay.PostProcess.md#tonetoe)
- [toneWhiteClip](Gameplay.Gameplay.PostProcess.md#tonewhiteclip)
- [transform](Gameplay.Gameplay.PostProcess.md#transform)
- [upVector](Gameplay.Gameplay.PostProcess.md#upvector)
- [useUpdate](Gameplay.Gameplay.PostProcess.md#useupdate)
- [visible](Gameplay.Gameplay.PostProcess.md#visible)
- [worldLocation](Gameplay.Gameplay.PostProcess.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.PostProcess.md#worldrotation)
- [worldScale](Gameplay.Gameplay.PostProcess.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.PostProcess.md#adddestroycallback)
- [addOutlineColor](Gameplay.Gameplay.PostProcess.md#addoutlinecolor)
- [asyncGetScriptByName](Gameplay.Gameplay.PostProcess.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.PostProcess.md#attachtogameobject)
- [clone](Gameplay.Gameplay.PostProcess.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.PostProcess.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.PostProcess.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.PostProcess.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.PostProcess.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.PostProcess.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.PostProcess.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.PostProcess.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.PostProcess.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.PostProcess.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.PostProcess.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.PostProcess.md#getforwardvector)
- [getRelativeLocation](Gameplay.Gameplay.PostProcess.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.PostProcess.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.PostProcess.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.PostProcess.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.PostProcess.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.PostProcess.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.PostProcess.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.PostProcess.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.PostProcess.md#gettransform)
- [getUpVector](Gameplay.Gameplay.PostProcess.md#getupvector)
- [getVisibility](Gameplay.Gameplay.PostProcess.md#getvisibility)
- [getWorldLocation](Gameplay.Gameplay.PostProcess.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.PostProcess.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.PostProcess.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.PostProcess.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.PostProcess.md#ondestroy)
- [onStart](Gameplay.Gameplay.PostProcess.md#onstart)
- [onUpdate](Gameplay.Gameplay.PostProcess.md#onupdate)
- [ready](Gameplay.Gameplay.PostProcess.md#ready)
- [setCollision](Gameplay.Gameplay.PostProcess.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.PostProcess.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.PostProcess.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.PostProcess.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.PostProcess.md#setrelativescale)
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

Core.GameObject.constructor

## Accessors

### ambientOcclusionIntensity

• `get` **ambientOcclusionIntensity**(): `number`

**`Description`**

获取环境光遮蔽强度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9239

• `set` **ambientOcclusionIntensity**(`Value`): `void`

**`Description`**

设置环境光遮蔽强度（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9233

---

### ambientOcclusionRadius

• `get` **ambientOcclusionRadius**(): `number`

**`Description`**

获取环境光遮蔽半径

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9251

• `set` **ambientOcclusionRadius**(`Value`): `void`

**`Description`**

设置环境光遮蔽半径（0.1 ~ 500.0）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9245

---

### autoExposureBias

• `get` **autoExposureBias**(): `number`

**`Description`**

获取曝光补偿

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9359

• `set` **autoExposureBias**(`Value`): `void`

**`Description`**

设置曝光补偿（-15 ~ 15）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9353

---

### autoExposureMaxBrightness

• `get` **autoExposureMaxBrightness**(): `number`

**`Description`**

获取曝光最大亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9383

• `set` **autoExposureMaxBrightness**(`Value`): `void`

**`Description`**

设置曝光最大亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9377

---

### autoExposureMinBrightness

• `get` **autoExposureMinBrightness**(): `number`

**`Description`**

获取曝光最小亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9371

• `set` **autoExposureMinBrightness**(`Value`): `void`

**`Description`**

设置曝光最小亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9365

---

### bloomIntensity

• `get` **bloomIntensity**(): `number`

**`Description`**

获取泛光

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9107

• `set` **bloomIntensity**(`Value`): `void`

**`Description`**

设置泛光（0 ~ 8）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9101

---

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

Core/index.d.ts:409

---

### globalContrast

• `get` **globalContrast**(): `number`

**`Description`**

获取全局对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9131

• `set` **globalContrast**(`Value`): `void`

**`Description`**

设置全局对比度 （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9125

---

### globalGamma

• `get` **globalGamma**(): `number`

**`Description`**

获取全局伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9143

• `set` **globalGamma**(`Value`): `void`

**`Description`**

设置全局伽马值（0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9137

---

### globalSaturation

• `get` **globalSaturation**(): `number`

**`Description`**

获取全局饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9119

• `set` **globalSaturation**(`Value`): `void`

**`Description`**

设置全局饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9113

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的 guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:39

---

### hDRContrast

• `get` **hDRContrast**(): `number`

**`Description`**

获取 HDR 对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9203

• `set` **hDRContrast**(`Value`): `void`

**`Description`**

设置 HDR 对比度 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9197

---

### hDRGamma

• `get` **hDRGamma**(): `number`

**`Description`**

获取 HDR 伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9215

• `set` **hDRGamma**(`Value`): `void`

**`Description`**

设置 HDR 伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9209

---

### hDRSaturation

• `get` **hDRSaturation**(): `number`

**`Description`**

获取 HDR 饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9191

• `set` **hDRSaturation**(`Value`): `void`

**`Description`**

设置 HDR 饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9185

---

### lDR2HDRThreshold

• `get` **lDR2HDRThreshold**(): `number`

**`Description`**

获取 LDR 与 HDR 阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9287

• `set` **lDR2HDRThreshold**(`Value`): `void`

**`Description`**

设置 LDR 与 HDR 阈值 （-1 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9281

---

### lDRContrast

• `get` **lDRContrast**(): `number`

**`Description`**

获取 LDR 对比度 Contrast

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9167

• `set` **lDRContrast**(`Value`): `void`

**`Description`**

设置 LDR 对比度 Contrast （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9161

---

### lDRGamma

• `get` **lDRGamma**(): `number`

**`Description`**

获取 LDR 伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9179

• `set` **lDRGamma**(`Value`): `void`

**`Description`**

设置 LDR 伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9173

---

### lDRSaturation

• `get` **lDRSaturation**(): `number`

**`Description`**

获取 LDR 饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9155

• `set` **lDRSaturation**(`Value`): `void`

**`Description`**

设置 LDR 饱和度（0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9149

---

### lUTBlend

• `get` **lUTBlend**(): `number`

**`Description`**

获取 LUT 百分比

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9227

• `set` **lUTBlend**(`Value`): `void`

**`Description`**

设置 LUT 百分比 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9221

---

### lUTTextureAssetByGuid

• `get` **lUTTextureAssetByGuid**(): `string`

**`Description`**

获取 LUT 贴图资源 Guid

**`Effect`**

调用端生效

#### Returns

`string`

获取当前 LUT 贴图的 Guid 值

#### Defined in

Gameplay/index.d.ts:9263

• `set` **lUTTextureAssetByGuid**(`Value`): `void`

**`Description`**

设置 LUT 贴图资源通过 Guid

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `Value` | `string` | usage:需要设置的贴图 Guid |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9257

---

### lockStatus

• `get` **lockStatus**(): `boolean`

**`Description`**

获取对象是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:456

• `set` **lockStatus**(`v`): `void`

**`Description`**

设置对象是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockStatus

#### Defined in

Core/index.d.ts:451

---

### motionBlur

• `get` **motionBlur**(): `number`

**`Description`**

获取动态模糊

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9275

• `set` **motionBlur**(`Value`): `void`

**`Description`**

设置动态模糊 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9269

---

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

Core/index.d.ts:171

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description          |
| :----- | :------- | :------------------- |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:177

---

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

Core/index.d.ts:513

---

### occlusionBlend

• `get` **occlusionBlend**(): `number`

**`Description`**

获取被遮挡融合比例

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9407

• `set` **occlusionBlend**(`Value`): `void`

**`Description`**

设置被遮挡融合比例（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9401

---

### outlineWidth

• `get` **outlineWidth**(): `number`

**`Description`**

获取描边宽度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9395

• `set` **outlineWidth**(`Value`): `void`

**`Description`**

设置描边宽度 （0 ~ 4）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9389

---

### parent

• `get` **parent**(): `GameObject`

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

`GameObject`

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:462

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newParent` | `GameObject` |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:467

---

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

Core/index.d.ts:308

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:314

---

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

Core/index.d.ts:334

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:340

---

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

Core/index.d.ts:360

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description |
| :------ | :------------------------------ | :---------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放  |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:366

---

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

Core/index.d.ts:423

---

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取对象是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:446

---

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的 Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:189

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的 Tag

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `tag` | `string` | usage:Tag   |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:183

---

### toneBlackClip

• `get` **toneBlackClip**(): `number`

**`Description`**

获取色调映射暗部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9335

• `set` **toneBlackClip**(`Value`): `void`

**`Description`**

设置色调映射暗部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9329

---

### toneCurveAmount

• `get` **toneCurveAmount**(): `number`

**`Description`**

获取当前色调映射

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9095

• `set` **toneCurveAmount**(`Value`): `void`

**`Description`**

设置色调映射 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9089

---

### toneShoulder

• `get` **toneShoulder**(): `number`

**`Description`**

获取色调映射高位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9323

• `set` **toneShoulder**(`Value`): `void`

**`Description`**

设置色调映射高位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9317

---

### toneSlope

• `get` **toneSlope**(): `number`

**`Description`**

获取色调映射斜率

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9299

• `set` **toneSlope**(`Value`): `void`

**`Description`**

设置色调映射斜率 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9293

---

### toneToe

• `get` **toneToe**(): `number`

**`Description`**

获取色调映射低位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9311

• `set` **toneToe**(`Value`): `void`

**`Description`**

设置色调映射低位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9305

---

### toneWhiteClip

• `get` **toneWhiteClip**(): `number`

**`Description`**

获取色调映射亮部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

#### Defined in

Gameplay/index.d.ts:9347

• `set` **toneWhiteClip**(`Value`): `void`

**`Description`**

设置色调映射亮部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description  |
| :------ | :------- | :----------- |
| `Value` | `number` | usage:设置值 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:9341

---

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:209

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description              |
| :---------- | :------------------------------------ | :----------------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的 transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:215

---

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

Core/index.d.ts:396

---

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

获取对象是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:441

• `set` **useUpdate**(`v`): `void`

**`Description`**

设置对象是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `v`  | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:436

---

### visible

• `get` **visible**(): `boolean`

**`Deprecated`**

since:v0.20.0 reason:api 重构 replacement:getVisibility()

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.visible

#### Defined in

Core/index.d.ts:507

---

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

Core/index.d.ts:234

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:239

---

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

Core/index.d.ts:258

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:264

---

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

Core/index.d.ts:283

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `v`  | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:288

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.addDestroyCallback

#### Defined in

Core/index.d.ts:627

---

### addOutlineColor

▸ **addOutlineColor**(`newOutlineColor`): `number`

**`Description`**

添加一个描边颜色并返回对应的索引

**`Effect`**

调用端生效

#### Parameters

| Name              | Type                                      | Description              |
| :---------------- | :---------------------------------------- | :----------------------- |
| `newOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值

#### Defined in

Gameplay/index.d.ts:9414

---

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

Core.GameObject.asyncGetScriptByName

#### Defined in

Core/index.d.ts:574

---

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description |
| :---- | :----------- | :---------- |
| `obj` | `GameObject` | usage:物体  |

#### Returns

`void`

#### Inherited from

Core.GameObject.attachToGameObject

#### Defined in

Core/index.d.ts:594

---

### clone

▸ **clone**(`inReplicates?`): `GameObject`

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                 |
| :-------------- | :-------- | :-------------------------- |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

`GameObject`

克隆的对象

#### Inherited from

Core.GameObject.clone

#### Defined in

Core/index.d.ts:554

---

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体 Destroy 事件回调

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                              | Description    |
| :--------- | :-------------------------------- | :------------- |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

Core.GameObject.deleteDestroyCallback

#### Defined in

Core/index.d.ts:633

---

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.destroy

#### Defined in

Core/index.d.ts:150

---

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.detachFromGameObject

#### Defined in

Core/index.d.ts:599

---

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name                      | Type                            | Description                                        |
| :------------------------ | :------------------------------ | :------------------------------------------------- |
| `nonColliding?`           | `boolean`                       | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean`                       | usage:如果为 true，则递归子物体 default:false      |
| `outer?`                  | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null      |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getBoundingBoxSize

#### Defined in

Core/index.d.ts:609

---

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取 GameObject 边界

**`Effect`**

调用端生效

#### Parameters

| Name                      | Type                            | Description                                      |
| :------------------------ | :------------------------------ | :----------------------------------------------- |
| `onlyCollidingComponents` | `boolean`                       | usage:是否只包含有碰撞的组件。                   |
| `OriginOuter`             | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 的中心点坐标。 |
| `BoxExtentOuter`          | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为 GameObject 尺寸的一半。   |
| `includeFromChildActors?` | `boolean`                       | usage:是否递归包含子物体 default:undefined       |

#### Returns

`void`

#### Inherited from

Core.GameObject.getBounds

#### Defined in

Core/index.d.ts:198

---

### getChildByGuid

▸ **getChildByGuid**(`guid`): `GameObject`

**`Description`**

根据 Guid 查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByGuid

#### Defined in

Core/index.d.ts:547

---

### getChildByName

▸ **getChildByName**(`name`): `GameObject`

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名称  |

#### Returns

`GameObject`

查找的物体

#### Inherited from

Core.GameObject.getChildByName

#### Defined in

Core/index.d.ts:540

---

### getChildren

▸ **getChildren**(): `GameObject`[]

**`Description`**

获取 Children，客户端不维系父子关系。推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.getChildren

#### Defined in

Core/index.d.ts:533

---

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

Core.GameObject.getChildrenBoxCenter

#### Defined in

Core/index.d.ts:621

---

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

Core.GameObject.getCollision

#### Defined in

Core/index.d.ts:484

---

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getForwardVector

#### Defined in

Core/index.d.ts:417

---

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.getRelativeLocation

#### Defined in

Core/index.d.ts:322

---

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.getRelativeRotation

#### Defined in

Core/index.d.ts:348

---

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.getRelativeScale

#### Defined in

Core/index.d.ts:374

---

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getRightVector

#### Defined in

Core/index.d.ts:431

---

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | usage:guid  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByGuid

#### Defined in

Core/index.d.ts:581

---

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`Script`

Script

#### Inherited from

Core.GameObject.getScriptByName

#### Defined in

Core/index.d.ts:567

---

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用 Find 替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array`<Script>`

#### Inherited from

Core.GameObject.getScripts

#### Defined in

Core/index.d.ts:560

---

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的 GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的 GUID

#### Inherited from

Core.GameObject.getSourceAssetGuid

#### Defined in

Core/index.d.ts:639

---

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体 Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                                  | Description                                      |
| :------- | :------------------------------------ | :----------------------------------------------- |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

Core.GameObject.getTransform

#### Defined in

Core/index.d.ts:223

---

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.getUpVector

#### Defined in

Core/index.d.ts:403

---

### getVisibility

▸ **getVisibility**(): `boolean`

**`Description`**

获取 GameObject 是否被显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.getVisibility

#### Defined in

Core/index.d.ts:490

---

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

Core.GameObject.getWorldLocation

#### Defined in

Core/index.d.ts:247

---

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name     | Type                                | Description                                     |
| :------- | :---------------------------------- | :---------------------------------------------- |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

Core.GameObject.getWorldRotation

#### Defined in

Core/index.d.ts:272

---

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name     | Type                            | Description                                   |
| :------- | :------------------------------ | :-------------------------------------------- |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

Core.GameObject.getWorldScale

#### Defined in

Core/index.d.ts:296

---

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true 为客户端

#### Inherited from

Core.GameObject.isRunningClient

#### Defined in

Core/index.d.ts:50

---

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.onDestroy

#### Defined in

Core/index.d.ts:18

---

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

Core.GameObject.onStart

#### Defined in

Core/index.d.ts:13

---

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为 false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type     | Description                  |
| :--- | :------- | :--------------------------- |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

Core.GameObject.onUpdate

#### Defined in

Core/index.d.ts:24

---

### ready

▸ **ready**(): `Promise`<[`PostProcess`](Gameplay.Gameplay.PostProcess.md)\>

**`Description`**

GameObject 准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`PostProcess`](Gameplay.Gameplay.PostProcess.md)\>

准备好的对象

#### Inherited from

Core.GameObject.ready

#### Defined in

Core/index.d.ts:126

---

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name                   | Type                                                                                                                   | Description                                                      |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean`                                                                                                              | usage: 是否传递给子节点 default: false                           |

#### Returns

`void`

#### Inherited from

Core.GameObject.setCollision

#### Defined in

Core/index.d.ts:475

---

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description    |
| :--------- | :---------------------------------- | :------------- |
| `location` | [`Vector`](Type.Type.Vector.md)     | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setLocationAndRotation

#### Defined in

Core/index.d.ts:387

---

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                            | Description |
| :--------- | :------------------------------ | :---------- |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeLocation

#### Defined in

Core/index.d.ts:328

---

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description |
| :--------- | :---------------------------------- | :---------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转  |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeRotation

#### Defined in

Core/index.d.ts:354

---

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                            | Description            |
| :------ | :------------------------------ | :--------------------- |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setRelativeScale

#### Defined in

Core/index.d.ts:380

---

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体 transform

**`Effect`**

调用端生效

#### Parameters

| Name        | Type                                  | Description     |
| :---------- | :------------------------------------ | :-------------- |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.setTransform

#### Defined in

Core/index.d.ts:229

---

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置 GameObject 是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                                                     | Description                         |
| :--------------------- | :------------------------------------------------------- | :---------------------------------- |
| `status`               | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态                          |
| `propagateToChildren?` | `boolean`                                                | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

Core.GameObject.setVisibility

#### Defined in

Core/index.d.ts:497

---

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description             |
| :--- | :------------------------------ | :---------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldLocation

#### Defined in

Core/index.d.ts:253

---

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name       | Type                                | Description            |
| :--------- | :---------------------------------- | :--------------------- |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldRotation

#### Defined in

Core/index.d.ts:278

---

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type                            | Description            |
| :--- | :------------------------------ | :--------------------- |
| `v`  | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.setWorldScale

#### Defined in

Core/index.d.ts:302

---

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<`GameObject`\>

**`Description`**

通过 guid 异步查找 GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 guid |

#### Returns

`Promise`<`GameObject`\>

Guid 对应的物体

#### Inherited from

Core.GameObject.asyncFind

#### Defined in

Core/index.d.ts:165

---

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<`GameObject`\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<`GameObject`\>

构造的 GameObject

#### Inherited from

Core.GameObject.asyncSpawnGameObject

#### Defined in

Core/index.d.ts:142

---

### find

▸ `Static` **find**(`guid`): `GameObject`

**`Description`**

通过 Guid 查找 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `guid` | `string` | usage:物体的 Guid |

#### Returns

`GameObject`

Guid 对应的物体

#### Inherited from

Core.GameObject.find

#### Defined in

Core/index.d.ts:157

---

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): `GameObject`[]

**`Description`**

通过自定义 Tag 获取 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `InTag` | `string` | usage:自定义 Tag |

#### Returns

`GameObject`[]

Array`<GameObject>`

#### Inherited from

Core.GameObject.findGameObjectByTag

#### Defined in

Core/index.d.ts:588

---

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): `GameObject`

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

Core.GameObject.getGameObjectByName

#### Defined in

Core/index.d.ts:527

---

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): `GameObject`[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description    |
| :----- | :------- | :------------- |
| `name` | `string` | usage:物体名字 |

#### Returns

`GameObject`[]

返回所有查找到的对象

#### Inherited from

Core.GameObject.getGameObjectsByName

#### Defined in

Core/index.d.ts:520

---

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): `GameObject`

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name            | Type      | Description                           |
| :-------------- | :-------- | :------------------------------------ |
| `assetId`       | `string`  | usage:资源的 GUID                     |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`GameObject`

构造的 GameObject

#### Inherited from

Core.GameObject.spawnGameObject

#### Defined in

Core/index.d.ts:134
