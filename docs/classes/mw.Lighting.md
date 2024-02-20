[LIGHTING](../groups/LIGHTING.LIGHTING.md) / Lighting

# Lighting <Badge type="tip" text="Class" /> <Score text="Lighting" />

光照

-------------------------

光照是指模拟现实世界中的光源对物体的照射和影响。

在三维渲染中，光照用于计算物体的明暗、阴影和反射等效果，以增加场景的真实感和立体感。

光照模型通常包括光源的类型、颜色、强度以及物体表面的材质属性等因素。常见的光照模型有平行光、点光源等。

它包括一系列可调整的属性，您可以使用这些静态属性和方法来更改照明的显示方式以及与其他对象的交互方式，如照明属性中所概述。

<span style="font-size: 14px;">
使用示例: 可按如下操作控制编辑器后处理实时效果
</span>

创建一个名为"LightingExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过+和-键控制光照亮度
```ts
@Component
export default class LightingExample extends mw.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if(SystemUtil.isClient())
        {
            mw.InputUtil.onKeyDown(Keys.Add,()=>{
                // 小键盘+建，增加光照亮度,依次递增1个单位
                Lighting.brightness = Lighting.brightness + 1;
                console.log("当前光源亮度:" + Lighting.brightness);
                // 同时改变直射光角度,依次递增5（角度）
                Lighting.pitchAngle = Lighting.pitchAngle + 5;
                console.log("当前直射光角度:" + Lighting.pitchAngle);
            });
            mw.InputUtil.onKeyDown(Keys.Subtract,()=>{
                // 小键盘-建，降低光照亮度,依次递减1个单位
                Lighting.brightness = Lighting.brightness - 1;
                // 同时改变直射光角度,依次递减5（角度）
                Lighting.pitchAngle = Lighting.pitchAngle - 5;
                console.log("当前直射光角度:" + Lighting.pitchAngle);
            });
        }
    }
}
```

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[brightness](mw.Lighting.md#brightness)**(): `number`  |
| :-----|
| 设置光照强度 （0 ~ 1）|
| **[castShadowsEnabled](mw.Lighting.md#castshadowsenabled)**(): `boolean`  |
| 设置是否开启阴影|
| **[ev100](mw.Lighting.md#ev100)**(): `number`  |
| 设置曝光值|
| **[lightColor](mw.Lighting.md#lightcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置偏色值|
| **[pitchAngle](mw.Lighting.md#pitchangle)**(): `number`  |
| 设置俯仰角度 （-90 ~ 90）|
| **[shadowsDistance](mw.Lighting.md#shadowsdistance)**(): `number`  |
| 设置阴影距离|
| **[temperature](mw.Lighting.md#temperature)**(): `number`  |
| 设置色温 （1000 ~ 14000）|
| **[temperatureEnabled](mw.Lighting.md#temperatureenabled)**(): `boolean`  |
| 设置是否开启色温|
| **[yawAngle](mw.Lighting.md#yawangle)**(): `number`  |
| 设置朝向角度 （-180 ~ 180）|

## Accessors

### brightness <Score text="brightness" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **brightness**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **brightness**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取光照强度


#### Returns

| `number` | 光照强度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置光照强度 （0 ~ 1）


#### Parameters

| `value` `number` | 强度浮点值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### castShadowsEnabled <Score text="castShadowsEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **castShadowsEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **castShadowsEnabled**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启阴影


#### Returns

| `boolean` | true或false |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启阴影


#### Parameters

| `value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### ev100 <Score text="ev" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **ev100**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **ev100**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取曝光值


#### Returns

| `number` | 曝光浮点值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置曝光值


#### Parameters

| `value` `number` | 曝光浮点值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### lightColor <Score text="lightColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **lightColor**(): [`LinearColor`](mw.LinearColor.md) 

</th>
<th style="text-align: left">

• `Static` `set` **lightColor**(`newLightColor`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取偏色值


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 偏色值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置偏色值


#### Parameters

| `newLightColor` [`LinearColor`](mw.LinearColor.md) | 新偏色值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pitchAngle <Score text="pitchAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **pitchAngle**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **pitchAngle**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取俯仰角度


#### Returns

| `number` | 俯仰角度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置俯仰角度 （-90 ~ 90）


#### Parameters

| `value` `number` | 角度浮点值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### shadowsDistance <Score text="shadowsDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **shadowsDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **shadowsDistance**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取阴影距离


#### Returns

| `number` | 阴影距离(cm) |
| :------ | :------ |


</td>
<td style="text-align: left">


设置阴影距离


#### Parameters

| `value` `number` | 距离(cm) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### temperature <Score text="temperature" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **temperature**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **temperature**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取色温


#### Returns

| `number` | true或false |
| :------ | :------ |


</td>
<td style="text-align: left">


设置色温 （1000 ~ 14000）


#### Parameters

| `value` `number` | 色温浮点值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### temperatureEnabled <Score text="temperatureEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **temperatureEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **temperatureEnabled**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启色温


#### Returns

| `boolean` | true或false |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启色温


#### Parameters

| `value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### yawAngle <Score text="yawAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **yawAngle**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **yawAngle**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取朝向角度


#### Returns

| `number` | 朝向角度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置朝向角度 （-180 ~ 180）


#### Parameters

| `value` `number` | 角度浮点值 |
| :------ | :------ |


</td>
</tr></tbody>
</table>

