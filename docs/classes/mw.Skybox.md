[LIGHTING](../groups/Core.LIGHTING.md) / Skybox

# Skybox <Badge type="tip" text="Class" /> <Score text="Skybox" />

天空盒

使用示例: 可按如下操作控制编辑器天空盒实时效果
创建一个名为"SkyboxExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过+和-键控制天空盒的亮度 *键切换预设
```ts
@Core.Class
export default class SkyboxExample extends mw.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if(Util.SystemUtil.isClient())
        {
            mw.InputUtil.onKeyDown(Type.Keys.Add,()=>{
                // 小键盘+建，增加天空盒亮度,依次递增1个单位
                Skybox.skyDomeIntensity = Skybox.skyDomeIntensity + 0.2;
                console.log("当前天空盒亮度:" + Skybox.skyDomeIntensity);
            });
            mw.InputUtil.onKeyDown(Type.Keys.Subtract,()=>{
                // 小键盘-建，降低天空盒亮度,依次递减1个单位
                Skybox.skyDomeIntensity = Skybox.skyDomeIntensity - 0.2;
                console.log("当前天空盒亮度:" + Skybox.skyDomeIntensity);
            });
            mw.InputUtil.onKeyDown(Type.Keys.Multiply,()=>{
                // 小键盘*建，切换天空盒预设
                Skybox.preset =7 % (Skybox.preset + 1);
            });
        }
    }
}
```

## Table of contents

| Accessors |
| :-----|
| **[cloudColor](mw.Skybox.md#cloudcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取云颜色|
| **[cloudDensity](mw.Skybox.md#clouddensity)**(): `number` <br> 获取云密度|
| **[cloudOpacity](mw.Skybox.md#cloudopacity)**(): `number` <br> 获取云的透明度|
| **[cloudSpeed](mw.Skybox.md#cloudspeed)**(): `number` <br> 获取云速度|
| **[cloudTextureID](mw.Skybox.md#cloudtextureid)**(`value`: `string`): `void` <br> 设置云贴图资源ID|
| **[cloudVisible](mw.Skybox.md#cloudvisible)**(): `boolean` <br> 获取是否开启云|
| **[moonColor](mw.Skybox.md#mooncolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取月亮颜色|
| **[moonIntensity](mw.Skybox.md#moonintensity)**(): `number` <br> 获取月亮亮度|
| **[moonSize](mw.Skybox.md#moonsize)**(): `number` <br> 获取月亮大小|
| **[moonTextureID](mw.Skybox.md#moontextureid)**(`value`: `string`): `void` <br> 设置月亮贴图资源ID|
| **[moonVisible](mw.Skybox.md#moonvisible)**(): `boolean` <br> 获取是否开启月亮|
| **[preset](mw.Skybox.md#preset)**(): [`SkyPreset`](../enums/mw.SkyPreset.md) <br> 获取预设|
| **[skyDomeBaseColor](mw.Skybox.md#skydomebasecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空盒颜色|
| **[skyDomeBottomColor](mw.Skybox.md#skydomebottomcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空下层颜色|
| **[skyDomeGradientEnabled](mw.Skybox.md#skydomegradientenabled)**(): `boolean` <br> 获取是否开启渐变效果|
| **[skyDomeHorizontalFallOff](mw.Skybox.md#skydomehorizontalfalloff)**(): `number` <br> 获取地平线渐出值|
| **[skyDomeIntensity](mw.Skybox.md#skydomeintensity)**(): `number` <br> 获取天空盒亮度|
| **[skyDomeMiddleColor](mw.Skybox.md#skydomemiddlecolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 天空中层颜色|
| **[skyDomeTextureID](mw.Skybox.md#skydometextureid)**(`value`: `string`): `void` <br> 设置天空盒贴图|
| **[skyDomeTopColor](mw.Skybox.md#skydometopcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取天空顶层颜色|
| **[starDensity](mw.Skybox.md#stardensity)**(): `number` <br> 获取星星密度|
| **[starIntensity](mw.Skybox.md#starintensity)**(): `number` <br> 获取星星亮度|
| **[starTextureID](mw.Skybox.md#startextureid)**(`value`: `string`): `void` <br> 设置星星贴图资源ID|
| **[starVisible](mw.Skybox.md#starvisible)**(): `boolean` <br> 获取是否开启星星|
| **[sunColor](mw.Skybox.md#suncolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取太阳颜色|
| **[sunIntensity](mw.Skybox.md#sunintensity)**(): `number` <br> 获取太阳光亮度|
| **[sunSize](mw.Skybox.md#sunsize)**(): `number` <br> 获取太阳大小|
| **[sunTextureID](mw.Skybox.md#suntextureid)**(`value`: `string`): `void` <br> 设置太阳贴图资源ID|
| **[sunVisible](mw.Skybox.md#sunvisible)**(): `boolean` <br> 获取是否开启太阳|

| Methods |
| :-----|
| **[refresh](mw.Skybox.md#refresh)**(): `void` <br> 天空盒刷新|
| **[reset](mw.Skybox.md#reset)**(): `void` <br> 重置为默认参数|

## Accessors

### cloudColor <Score text="cloudColor" /> 

• `Static` `get` **cloudColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取云颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

云颜色

• `Static` `set` **cloudColor**(`value`): `void` <Badge type="tip" text="client" />

设置云颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 云颜色 |


___

### cloudDensity <Score text="cloudDensity" /> 

• `Static` `get` **cloudDensity**(): `number` <Badge type="tip" text="client" />

获取云密度


#### Returns

`number`

云密度

• `Static` `set` **cloudDensity**(`value`): `void` <Badge type="tip" text="client" />

设置云密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云密度(0~1) |


___

### cloudOpacity <Score text="cloudOpacity" /> 

• `Static` `get` **cloudOpacity**(): `number` <Badge type="tip" text="client" />

获取云的透明度


#### Returns

`number`

云的透明度

• `Static` `set` **cloudOpacity**(`value`): `void` <Badge type="tip" text="client" />

设置云的透明度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云的透明度(0~1) |


___

### cloudSpeed <Score text="cloudSpeed" /> 

• `Static` `get` **cloudSpeed**(): `number` <Badge type="tip" text="client" />

获取云速度


#### Returns

`number`

云速度

• `Static` `set` **cloudSpeed**(`value`): `void` <Badge type="tip" text="client" />

设置云速度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 云速度(0~10) |


___

### cloudTextureID <Score text="cloudTextureID" /> 

• `Static` `set` **cloudTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置云贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 云贴图资源ID |


___

### cloudVisible <Score text="cloudVisible" /> 

• `Static` `get` **cloudVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启云


#### Returns

`boolean`

是否开启云

• `Static` `set` **cloudVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启云


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启云 |


___

### moonColor <Score text="moonColor" /> 

• `Static` `get` **moonColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取月亮颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

月亮颜色

• `Static` `set` **moonColor**(`value`): `void` <Badge type="tip" text="client" />

设置月亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 月亮颜色 |


___

### moonIntensity <Score text="moonIntensity" /> 

• `Static` `get` **moonIntensity**(): `number` <Badge type="tip" text="client" />

获取月亮亮度


#### Returns

`number`

月亮亮度

• `Static` `set` **moonIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置月亮亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮亮度(0~2000) |


___

### moonSize <Score text="moonSize" /> 

• `Static` `get` **moonSize**(): `number` <Badge type="tip" text="client" />

获取月亮大小


#### Returns

`number`

月亮大小

• `Static` `set` **moonSize**(`value`): `void` <Badge type="tip" text="client" />

设置月亮大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 月亮大小(0~100) |


___

### moonTextureID <Score text="moonTextureID" /> 

• `Static` `set` **moonTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置月亮贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 月亮贴图资源ID |


___

### moonVisible <Score text="moonVisible" /> 

• `Static` `get` **moonVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启月亮


#### Returns

`boolean`

是否开启月亮

• `Static` `set` **moonVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启月亮


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启月亮 |


___

### preset <Score text="preset" /> 

• `Static` `get` **preset**(): [`SkyPreset`](../enums/mw.SkyPreset.md) <Badge type="tip" text="client" />

获取预设


#### Returns

[`SkyPreset`](../enums/mw.SkyPreset.md)

返回预设

• `Static` `set` **preset**(`NewPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewPreset` | [`SkyPreset`](../enums/mw.SkyPreset.md) | 预设枚举 |


___

### skyDomeBaseColor <Score text="skyDomeBaseColor" /> 

• `Static` `get` **skyDomeBaseColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空盒颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空盒颜色

• `Static` `set` **skyDomeBaseColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空盒颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空盒颜色值 |


___

### skyDomeBottomColor <Score text="skyDomeBottomColor" /> 

• `Static` `get` **skyDomeBottomColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空下层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空下层颜色

• `Static` `set` **skyDomeBottomColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空下层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空下层颜色值 |


___

### skyDomeGradientEnabled <Score text="skyDomeGradientEnabled" /> 

• `Static` `get` **skyDomeGradientEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启渐变效果


#### Returns

`boolean`

是否开启渐变效果

• `Static` `set` **skyDomeGradientEnabled**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启渐变效果


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启渐变效果 |


___

### skyDomeHorizontalFallOff <Score text="skyDomeHorizontalFallOff" /> 

• `Static` `get` **skyDomeHorizontalFallOff**(): `number` <Badge type="tip" text="client" />

获取地平线渐出值


#### Returns

`number`

地平线渐出值

• `Static` `set` **skyDomeHorizontalFallOff**(`value`): `void` <Badge type="tip" text="client" />

设置地平线渐出值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 地平线渐出值(1~20) |


___

### skyDomeIntensity <Score text="skyDomeIntensity" /> 

• `Static` `get` **skyDomeIntensity**(): `number` <Badge type="tip" text="client" />

获取天空盒亮度


#### Returns

`number`

天空盒亮度

• `Static` `set` **skyDomeIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置天空盒亮度3


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 天空盒亮度值(0~100) |


___

### skyDomeMiddleColor <Score text="skyDomeMiddleColor" /> 

• `Static` `get` **skyDomeMiddleColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

天空中层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空中层颜色

• `Static` `set` **skyDomeMiddleColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空中层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空中层颜色值 |


___

### skyDomeTextureID <Score text="skyDomeTextureID" /> 

• `Static` `set` **skyDomeTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置天空盒贴图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 贴图ID |


___

### skyDomeTopColor <Score text="skyDomeTopColor" /> 

• `Static` `get` **skyDomeTopColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取天空顶层颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

天空顶层颜色

• `Static` `set` **skyDomeTopColor**(`value`): `void` <Badge type="tip" text="client" />

设置天空顶层颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 天空顶层颜色值 |


___

### starDensity <Score text="starDensity" /> 

• `Static` `get` **starDensity**(): `number` <Badge type="tip" text="client" />

获取星星密度


#### Returns

`number`

星星密度

• `Static` `set` **starDensity**(`value`): `void` <Badge type="tip" text="client" />

设置星星密度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星密度(0~100) |


___

### starIntensity <Score text="starIntensity" /> 

• `Static` `get` **starIntensity**(): `number` <Badge type="tip" text="client" />

获取星星亮度


#### Returns

`number`

星星亮度

• `Static` `set` **starIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置星星亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 星星亮度(0~1) |


___

### starTextureID <Score text="starTextureID" /> 

• `Static` `set` **starTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置星星贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 星星贴图资源ID |


___

### starVisible <Score text="starVisible" /> 

• `Static` `get` **starVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启星星


#### Returns

`boolean`

是否开启星星

• `Static` `set` **starVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启星星


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启星星 |


___

### sunColor <Score text="sunColor" /> 

• `Static` `get` **sunColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取太阳颜色


#### Returns

[`LinearColor`](mw.LinearColor.md)

太阳颜色

• `Static` `set` **sunColor**(`value`): `void` <Badge type="tip" text="client" />

设置太阳颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 太阳颜色 |


___

### sunIntensity <Score text="sunIntensity" /> 

• `Static` `get` **sunIntensity**(): `number` <Badge type="tip" text="client" />

获取太阳光亮度


#### Returns

`number`

太阳光亮度

• `Static` `set` **sunIntensity**(`value`): `void` <Badge type="tip" text="client" />

设置太阳光亮度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光亮度(0~2000) |


___

### sunSize <Score text="sunSize" /> 

• `Static` `get` **sunSize**(): `number` <Badge type="tip" text="client" />

获取太阳大小


#### Returns

`number`

太阳大小

• `Static` `set` **sunSize**(`value`): `void` <Badge type="tip" text="client" />

设置太阳大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳大小(0~100) |


___

### sunTextureID <Score text="sunTextureID" /> 

• `Static` `set` **sunTextureID**(`value`): `void` <Badge type="tip" text="client" />

设置太阳贴图资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | 太阳贴图资源ID |


___

### sunVisible <Score text="sunVisible" /> 

• `Static` `get` **sunVisible**(): `boolean` <Badge type="tip" text="client" />

获取是否开启太阳


#### Returns

`boolean`

是否开启太阳

• `Static` `set` **sunVisible**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启太阳


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启太阳 |


## Methods

### refresh <Score text="refresh" /> 

• `Static` **refresh**(): `void` <Badge type="tip" text="client" />

天空盒刷新



___

### reset <Score text="reset" /> 

• `Static` **reset**(): `void` <Badge type="tip" text="client" />

重置为默认参数


