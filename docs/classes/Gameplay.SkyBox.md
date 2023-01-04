[Gameplay](../modules/Gameplay.Gameplay.md) / SkyBox

# SkyBox <Badge type="tip" text="Class" />

**`Description`**

天空球

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`SkyBox`**

## Table of contents

| Accessors |
| :-----|
| **[cloudDensity](Gameplay.SkyBox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudEnable](Gameplay.SkyBox.md#cloudenable)**(`boolean`): `void` <br> 设置是否开启云|
| **[cloudEnabled](Gameplay.SkyBox.md#cloudenabled)**(): `boolean` <br> 获取是否开启云|
| **[cloudOpacity](Gameplay.SkyBox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](Gameplay.SkyBox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureAssetByID](Gameplay.SkyBox.md#cloudtextureassetbyid)**(`string`): `void` <br> 设置云贴图资源ID|
| **[cloudTint](Gameplay.SkyBox.md#cloudtint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取云颜色|
| **[moonEnable](Gameplay.SkyBox.md#moonenable)**(): `boolean` <br> 获取是否开启月亮|
| **[moonIntensity](Gameplay.SkyBox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](Gameplay.SkyBox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureAssetByID](Gameplay.SkyBox.md#moontextureassetbyid)**(`string`): `void` <br> 设置月亮贴图资源ID|
| **[moonTint](Gameplay.SkyBox.md#moontint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取月亮颜色|
| **[skyDomeBotTint](Gameplay.SkyBox.md#skydomebottint)**(): [`LinearColor`](Type.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnable](Gameplay.SkyBox.md#skydomegradientenable)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](Gameplay.SkyBox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeHorizontalTint](Gameplay.SkyBox.md#skydomehorizontaltint)**(): [`LinearColor`](Type.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeIntensity](Gameplay.SkyBox.md#skydomeintensity)**(): `number` <br> 获取天空球亮度|
| **[skyDomeTextureAssetByID](Gameplay.SkyBox.md#skydometextureassetbyid)**(`string`): `void` <br> 设置天空球贴图|
| **[skyDomeTint](Gameplay.SkyBox.md#skydometint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取天空球颜色|
| **[skyDomeTopTint](Gameplay.SkyBox.md#skydometoptint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取天空顶层颜色|
| **[skyPreset](Gameplay.SkyBox.md#skypreset)**(): `number` <br> 获取预设|
| **[starEnable](Gameplay.SkyBox.md#starenable)**(): `boolean` <br> 获取是否开启星星|
| **[starIntensity](Gameplay.SkyBox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureAssetByID](Gameplay.SkyBox.md#startextureassetbyid)**(`string`): `void` <br> 设置星星贴图资源ID|
| **[starTiling](Gameplay.SkyBox.md#startiling)**(): `number` <br> 获取星星密度|
| **[sunEnable](Gameplay.SkyBox.md#sunenable)**(): `boolean` <br> 获取是否开启太阳|
| **[sunIntensity](Gameplay.SkyBox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](Gameplay.SkyBox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureAssetByID](Gameplay.SkyBox.md#suntextureassetbyid)**(`string`): `void` <br> 设置太阳贴图资源ID|
| **[sunTint](Gameplay.SkyBox.md#suntint)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取太阳颜色|

| Methods |
| :-----|
| **[refresh](Gameplay.SkyBox.md#refresh)**(): `void` <br> 天空球刷新|
| **[reset](Gameplay.SkyBox.md#reset)**(): `void` <br> 重置为默认参数|

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

• `get` **cloudTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取云颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

云颜色

• `set` **cloudTint**(`value`): `void`

**`Description`**

设置云颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 云颜色 |

#### Returns

`void`


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

• `get` **moonTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取月亮颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

月亮颜色

• `set` **moonTint**(`value`): `void`

**`Description`**

设置月亮颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 月亮颜色 |

#### Returns

`void`


### skyDomeBotTint

• `get` **skyDomeBotTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

天空下层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

天空下层颜色

• `set` **skyDomeBotTint**(`value`): `void`

**`Description`**

设置天空下层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空下层颜色值 |

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

• `get` **skyDomeHorizontalTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

天空中层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

天空中层颜色

• `set` **skyDomeHorizontalTint**(`value`): `void`

**`Description`**

设置天空中层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空中层颜色值 |

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

• `get` **skyDomeTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取天空球颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

天空球颜色

• `set` **skyDomeTint**(`value`): `void`

**`Description`**

设置天空球颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空球颜色值 |

#### Returns

`void`

___

### skyDomeTopTint

• `get` **skyDomeTopTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取天空顶层颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

天空顶层颜色

• `set` **skyDomeTopTint**(`value`): `void`

**`Description`**

设置天空顶层颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 天空顶层颜色值 |

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
| `NewPreset` | [`SkyPreset`](../enums/Gameplay.SkyPreset.md) | 预设枚举 |

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

• `get` **sunTint**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取太阳颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

太阳颜色

• `set` **sunTint**(`value`): `void`

**`Description`**

设置太阳颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](Type.LinearColor.md) | 太阳颜色 |

#### Returns

`void`


## Methods

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
