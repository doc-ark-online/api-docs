[Gameplay](../modules/Gameplay.Gameplay.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" />

**`Description`**

后处理对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PostProcess`**

## Table of contents

| Accessors |
| :-----|
| **[ambientOcclusionIntensity](Gameplay.PostProcess.md#ambientocclusionintensity)**(): `number` <br> 获取环境光遮蔽强度|
| **[ambientOcclusionRadius](Gameplay.PostProcess.md#ambientocclusionradius)**(): `number` <br> 获取环境光遮蔽半径|
| **[autoExposureBias](Gameplay.PostProcess.md#autoexposurebias)**(): `number` <br> 获取曝光补偿|
| **[autoExposureMaxBrightness](Gameplay.PostProcess.md#autoexposuremaxbrightness)**(): `number` <br> 获取曝光最大亮度|
| **[autoExposureMinBrightness](Gameplay.PostProcess.md#autoexposureminbrightness)**(): `number` <br> 获取曝光最小亮度|
| **[bloomIntensity](Gameplay.PostProcess.md#bloomintensity)**(): `number` <br> 获取泛光|
| **[globalContrast](Gameplay.PostProcess.md#globalcontrast)**(): `number` <br> 获取全局对比度|
| **[globalGamma](Gameplay.PostProcess.md#globalgamma)**(): `number` <br> 获取全局伽马值|
| **[globalSaturation](Gameplay.PostProcess.md#globalsaturation)**(): `number` <br> 获取全局饱和度|
| **[hDRContrast](Gameplay.PostProcess.md#hdrcontrast)**(): `number` <br> 获取HDR对比度|
| **[hDRGamma](Gameplay.PostProcess.md#hdrgamma)**(): `number` <br> 获取HDR伽马值|
| **[hDRSaturation](Gameplay.PostProcess.md#hdrsaturation)**(): `number` <br> 获取HDR饱和度|
| **[lDR2HDRThreshold](Gameplay.PostProcess.md#ldr2hdrthreshold)**(): `number` <br> 获取LDR与HDR阈值|
| **[lDRContrast](Gameplay.PostProcess.md#ldrcontrast)**(): `number` <br> 获取LDR对比度Contrast|
| **[lDRGamma](Gameplay.PostProcess.md#ldrgamma)**(): `number` <br> 获取LDR伽马值|
| **[lDRSaturation](Gameplay.PostProcess.md#ldrsaturation)**(): `number` <br> 获取LDR饱和度|
| **[lUTBlend](Gameplay.PostProcess.md#lutblend)**(): `number` <br> 获取LUT百分比|
| **[lUTTextureAssetByGuid](Gameplay.PostProcess.md#luttextureassetbyguid)**(): `string` <br> 获取LUT贴图资源Guid|
| **[motionBlur](Gameplay.PostProcess.md#motionblur)**(): `number` <br> 获取动态模糊|
| **[occlusionBlend](Gameplay.PostProcess.md#occlusionblend)**(): `number` <br> 获取被遮挡融合比例|
| **[outlineWidth](Gameplay.PostProcess.md#outlinewidth)**(): `number` <br> 获取描边宽度|
| **[toneBlackClip](Gameplay.PostProcess.md#toneblackclip)**(): `number` <br> 获取色调映射暗部裁剪|
| **[toneCurveAmount](Gameplay.PostProcess.md#tonecurveamount)**(): `number` <br> 获取当前色调映射|
| **[toneShoulder](Gameplay.PostProcess.md#toneshoulder)**(): `number` <br> 获取色调映射高位阈值|
| **[toneSlope](Gameplay.PostProcess.md#toneslope)**(): `number` <br> 获取色调映射斜率|
| **[toneToe](Gameplay.PostProcess.md#tonetoe)**(): `number` <br> 获取色调映射低位阈值|
| **[toneWhiteClip](Gameplay.PostProcess.md#tonewhiteclip)**(): `number` <br> 获取色调映射亮部裁剪|

| Methods |
| :-----|
| **[addOutlineColor](Gameplay.PostProcess.md#addoutlinecolor)**([`LinearColor`](Type.LinearColor.md)): `number` <br> 添加一个描边颜色并返回对应的索引|

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

• `set` **ambientOcclusionIntensity**(`Value`): `void`

**`Description`**

设置环境光遮蔽强度（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### ambientOcclusionRadius

• `get` **ambientOcclusionRadius**(): `number`

**`Description`**

获取环境光遮蔽半径

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **ambientOcclusionRadius**(`Value`): `void`

**`Description`**

设置环境光遮蔽半径（0.1 ~ 500.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### autoExposureBias

• `get` **autoExposureBias**(): `number`

**`Description`**

获取曝光补偿

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **autoExposureBias**(`Value`): `void`

**`Description`**

设置曝光补偿（-15 ~ 15）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### autoExposureMaxBrightness

• `get` **autoExposureMaxBrightness**(): `number`

**`Description`**

获取曝光最大亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **autoExposureMaxBrightness**(`Value`): `void`

**`Description`**

设置曝光最大亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### autoExposureMinBrightness

• `get` **autoExposureMinBrightness**(): `number`

**`Description`**

获取曝光最小亮度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **autoExposureMinBrightness**(`Value`): `void`

**`Description`**

设置曝光最小亮度（-10 ~ 20）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### bloomIntensity

• `get` **bloomIntensity**(): `number`

**`Description`**

获取泛光

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **bloomIntensity**(`Value`): `void`

**`Description`**

设置泛光（0 ~ 8）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`


### globalContrast

• `get` **globalContrast**(): `number`

**`Description`**

获取全局对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **globalContrast**(`Value`): `void`

**`Description`**

设置全局对比度 （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### globalGamma

• `get` **globalGamma**(): `number`

**`Description`**

获取全局伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **globalGamma**(`Value`): `void`

**`Description`**

设置全局伽马值（0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### globalSaturation

• `get` **globalSaturation**(): `number`

**`Description`**

获取全局饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **globalSaturation**(`Value`): `void`

**`Description`**

设置全局饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`


### hDRContrast

• `get` **hDRContrast**(): `number`

**`Description`**

获取HDR对比度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **hDRContrast**(`Value`): `void`

**`Description`**

设置HDR对比度 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### hDRGamma

• `get` **hDRGamma**(): `number`

**`Description`**

获取HDR伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **hDRGamma**(`Value`): `void`

**`Description`**

设置HDR伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### hDRSaturation

• `get` **hDRSaturation**(): `number`

**`Description`**

获取HDR饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **hDRSaturation**(`Value`): `void`

**`Description`**

设置HDR饱和度 （0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lDR2HDRThreshold

• `get` **lDR2HDRThreshold**(): `number`

**`Description`**

获取LDR与HDR阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **lDR2HDRThreshold**(`Value`): `void`

**`Description`**

设置LDR与HDR阈值 （-1 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lDRContrast

• `get` **lDRContrast**(): `number`

**`Description`**

获取LDR对比度Contrast

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **lDRContrast**(`Value`): `void`

**`Description`**

设置LDR对比度Contrast （0.2 ~ 5.0）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lDRGamma

• `get` **lDRGamma**(): `number`

**`Description`**

获取LDR伽马值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **lDRGamma**(`Value`): `void`

**`Description`**

设置LDR伽马值 （0 ~ 5）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lDRSaturation

• `get` **lDRSaturation**(): `number`

**`Description`**

获取LDR饱和度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **lDRSaturation**(`Value`): `void`

**`Description`**

设置LDR饱和度（0 ~ 2）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lUTBlend

• `get` **lUTBlend**(): `number`

**`Description`**

获取LUT百分比

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **lUTBlend**(`Value`): `void`

**`Description`**

设置LUT百分比 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### lUTTextureAssetByGuid

• `get` **lUTTextureAssetByGuid**(): `string`

**`Description`**

获取LUT贴图资源Guid

**`Effect`**

调用端生效

#### Returns

`string`

获取当前LUT贴图的Guid值

• `set` **lUTTextureAssetByGuid**(`Value`): `void`

**`Description`**

设置LUT贴图资源通过Guid

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `string` | 需要设置的贴图Guid |

#### Returns

`void`


### motionBlur

• `get` **motionBlur**(): `number`

**`Description`**

获取动态模糊

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **motionBlur**(`Value`): `void`

**`Description`**

设置动态模糊 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`


### occlusionBlend

• `get` **occlusionBlend**(): `number`

**`Description`**

获取被遮挡融合比例

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **occlusionBlend**(`Value`): `void`

**`Description`**

设置被遮挡融合比例（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### outlineWidth

• `get` **outlineWidth**(): `number`

**`Description`**

获取描边宽度

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **outlineWidth**(`Value`): `void`

**`Description`**

设置描边宽度 （0 ~ 4）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`


### toneBlackClip

• `get` **toneBlackClip**(): `number`

**`Description`**

获取色调映射暗部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneBlackClip**(`Value`): `void`

**`Description`**

设置色调映射暗部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### toneCurveAmount

• `get` **toneCurveAmount**(): `number`

**`Description`**

获取当前色调映射

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneCurveAmount**(`Value`): `void`

**`Description`**

设置色调映射 （0 ~ 100）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### toneShoulder

• `get` **toneShoulder**(): `number`

**`Description`**

获取色调映射高位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneShoulder**(`Value`): `void`

**`Description`**

设置色调映射高位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### toneSlope

• `get` **toneSlope**(): `number`

**`Description`**

获取色调映射斜率

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneSlope**(`Value`): `void`

**`Description`**

设置色调映射斜率 （0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### toneToe

• `get` **toneToe**(): `number`

**`Description`**

获取色调映射低位阈值

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneToe**(`Value`): `void`

**`Description`**

设置色调映射低位阈值（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`

___

### toneWhiteClip

• `get` **toneWhiteClip**(): `number`

**`Description`**

获取色调映射亮部裁剪

**`Effect`**

调用端生效

#### Returns

`number`

获取值

• `set` **toneWhiteClip**(`Value`): `void`

**`Description`**

设置色调映射亮部裁剪（0 ~ 1）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

#### Returns

`void`


## Methods

### addOutlineColor

▸ **addOutlineColor**(`newOutlineColor`): `number`

**`Description`**

添加一个描边颜色并返回对应的索引

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newOutlineColor` | [`LinearColor`](Type.LinearColor.md) | 需要添加的新颜色值 |

#### Returns

`number`

颜色对应的索引值
