[场景](../groups/场景.场景.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" /> <Score text="PostProcess" />

后处理

----------------------------------

后处理是指在渲染完成后对图像进行处理的一系列技术和效果。后处理通常用于增强或修改最终渲染图像的对比度、饱和度等特性，以达到特定的视觉效果或风格。

<span style="font-size: 14px;">
使用示例: 可按如下操作控制编辑器后处理实时效果
</span>

创建一个名为"PostProcessExample"的脚本，放置在对象栏中，打开脚本，输入以下代码，运行游戏，你将可以通过+和-键控制后处理的伽马值
```ts
@Component
export default class PostProcessExample extends mw.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if(SystemUtil.isClient())
        {
            mw.InputUtil.onKeyDown(Keys.Add,()=>{
                // 小键盘+建，增加后处理饱和度,依次递增1个单位
                PostProcess.saturation = PostProcess.saturation + 1;
                console.log("当前后处理饱和度:" + PostProcess.saturation);
            });
            InputUtil.onKeyDown(Keys.Subtract,()=>{
                // 小键盘-建，降低后处理饱和度,依次递减1个单位
                PostProcess.saturation = PostProcess.saturation - 1;
                console.log("当前后处理饱和度:" + PostProcess.saturation);
            });
        }
    }
}
```

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[ambientOcclusionIntensity](mw.PostProcess.md#ambientocclusionintensity)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| 获取环境光遮蔽强度|
| **[ambientOcclusionRadius](mw.PostProcess.md#ambientocclusionradius)**(): `number` <Badge type="tip" text="client" />  |
| 获取环境光遮蔽半径|
| **[bloom](mw.PostProcess.md#bloom)**(): `number` <Badge type="tip" text="client" />  |
| 获取泛光|
| **[bloomExposureFactor](mw.PostProcess.md#bloomexposurefactor)**(): `number` <Badge type="tip" text="client" />  |
| 获取泛光曝光系数|
| **[bloomRange](mw.PostProcess.md#bloomrange)**(): `number` <Badge type="tip" text="client" />  |
| 获取泛光范围|
| **[bloomSpread](mw.PostProcess.md#bloomspread)**(): `number` <Badge type="tip" text="client" />  |
| 获取泛光扩散度|
| **[blurEnabled](mw.PostProcess.md#blurenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取模糊|
| **[blurIntensity](mw.PostProcess.md#blurintensity)**(): `number` <Badge type="tip" text="client" />  |
| 获取模糊强度|
| **[config](mw.PostProcess.md#config)**(): [`PostProcessConfig`](mw.PostProcessConfig.md) <Badge type="tip" text="client" />  |
| 获取后处理属性配置|
| **[contrast](mw.PostProcess.md#contrast)**(): `number` <Badge type="tip" text="client" />  |
| 获取全局对比度|
| **[depthOfFieldEnabled](mw.PostProcess.md#depthoffieldenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取景深开关|
| **[depthOfFieldIntensity](mw.PostProcess.md#depthoffieldintensity)**(): `number` <Badge type="tip" text="client" />  |
| 获取景深强度|
| **[focusDistance](mw.PostProcess.md#focusdistance)**(): `number` <Badge type="tip" text="client" />  |
| 获取焦距距离|
| **[focusPosition](mw.PostProcess.md#focusposition)**(): `number` <Badge type="tip" text="client" />  |
| 获取焦距位置|
| **[preset](mw.PostProcess.md#preset)**(): [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) <Badge type="tip" text="client" />  |
| 获取预设|
| **[saturation](mw.PostProcess.md#saturation)**(): `number` <Badge type="tip" text="client" />  |
| 获取全局饱和度|

## Accessors

### ambientOcclusionIntensity <Score text="ambientOcclusionIntensity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **ambientOcclusionIntensity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **ambientOcclusionIntensity**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取环境光遮蔽强度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置环境光遮蔽强度（0 ~ 1）数值越大,强度越大

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### ambientOcclusionRadius <Score text="ambientOcclusionRadius" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **ambientOcclusionRadius**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **ambientOcclusionRadius**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取环境光遮蔽半径

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置环境光遮蔽半径（0.1 ~ 500.0）数值越小半径越小

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### bloom <Score text="bloom" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bloom**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **bloom**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取泛光

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置泛光

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### bloomExposureFactor <Score text="bloomExposureFactor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bloomExposureFactor**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **bloomExposureFactor**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取泛光曝光系数

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置泛光曝光系数

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### bloomRange <Score text="bloomRange" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bloomRange**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **bloomRange**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取泛光范围

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置泛光范围

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### bloomSpread <Score text="bloomSpread" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **bloomSpread**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **bloomSpread**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取泛光扩散度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置泛光扩散度

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### blurEnabled <Score text="blurEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **blurEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **blurEnabled**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取模糊

#### Returns

| `boolean` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


开关模糊

#### Parameters

| `Value` `boolean` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### blurIntensity <Score text="blurIntensity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **blurIntensity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **blurIntensity**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取模糊强度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


模糊强度开关

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### config <Score text="config" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **config**(): [`PostProcessConfig`](mw.PostProcessConfig.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **config**(`newConfig`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取后处理属性配置

#### Returns

| [`PostProcessConfig`](mw.PostProcessConfig.md) | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置后处理属性配置

#### Parameters

| `newConfig` [`PostProcessConfig`](mw.PostProcessConfig.md) | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### contrast <Score text="contrast" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **contrast**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **contrast**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取全局对比度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置全局对比度 （0.2 ~ 5.0）

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### depthOfFieldEnabled <Score text="depthOfFieldEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **depthOfFieldEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **depthOfFieldEnabled**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取景深开关

#### Returns

| `boolean` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


开关景深

#### Parameters

| `Value` `boolean` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### depthOfFieldIntensity <Score text="depthOfFieldIntensity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **depthOfFieldIntensity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **depthOfFieldIntensity**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取景深强度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置景深强度

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### focusDistance <Score text="focusDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **focusDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **focusDistance**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取焦距距离

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置焦距距离

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### focusPosition <Score text="focusPosition" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **focusPosition**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **focusPosition**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取焦距位置

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置焦距位置

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### preset <Score text="preset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **preset**(): [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **preset**(`newPreset`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取预设

#### Returns

| [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) | 预设枚举 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置预设

#### Parameters

| `newPreset` [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) | 预设枚举 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### saturation <Score text="saturation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **saturation**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **saturation**(`Value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取全局饱和度

#### Returns

| `number` | 获取值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置全局饱和度 （0 ~ 2）

#### Parameters

| `Value` `number` | 设置值 |
| :------ | :------ |


</td>
</tr></tbody>
</table>

