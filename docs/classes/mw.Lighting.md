[LIGHTING](../groups/Core.LIGHTING.md) / Lighting

# Lighting <Badge type="tip" text="Class" /> <Score text="Lighting" />

光照

使用示例: 可按如下操作控制编辑器后处理实时效果
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

| Accessors |
| :-----|
| **[ev100](mw.Lighting.md#ev100)**(): `number` <br> 获取曝光值|
| **[brightness](mw.Lighting.md#brightness)**(): `number` <br> 获取光照强度|
| **[castShadowsEnabled](mw.Lighting.md#castshadowsenabled)**(): `boolean` <br> 获取是否开启阴影|
| **[lightColor](mw.Lighting.md#lightcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取偏色值|
| **[pitchAngle](mw.Lighting.md#pitchangle)**(): `number` <br> 获取俯仰角度|
| **[shadowsDistance](mw.Lighting.md#shadowsdistance)**(): `number` <br> 获取阴影距离|
| **[temperature](mw.Lighting.md#temperature)**(): `number` <br> 获取色温|
| **[temperatureEnabled](mw.Lighting.md#temperatureenabled)**(): `boolean` <br> 获取是否开启色温|
| **[yawAngle](mw.Lighting.md#yawangle)**(): `number` <br> 获取朝向角度|

## Accessors

### ev100 <Score text="ev" /> 

• `get` **ev100**(): `number` <Badge type="tip" text="client" />

获取曝光值


#### Returns

`number`

曝光浮点值

• `set` **ev100**(`value`): `void` <Badge type="tip" text="client" />

设置曝光值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 曝光浮点值 |


___

### brightness <Score text="brightness" /> 

• `Static` `get` **brightness**(): `number` <Badge type="tip" text="client" />

获取光照强度


#### Returns

`number`

光照强度

• `Static` `set` **brightness**(`value`): `void` <Badge type="tip" text="client" />

设置光照强度 （0 ~ 1）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度浮点值 |


___

### castShadowsEnabled <Score text="castShadowsEnabled" /> 

• `Static` `get` **castShadowsEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启阴影


#### Returns

`boolean`

true或false

• `Static` `set` **castShadowsEnabled**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启阴影


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |


___

### lightColor <Score text="lightColor" /> 

• `Static` `get` **lightColor**(): [`LinearColor`](mw.LinearColor.md) 

获取偏色值


#### Returns

[`LinearColor`](mw.LinearColor.md)

偏色值

• `Static` `set` **lightColor**(`newLightColor`): `void` 

设置偏色值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newLightColor` | [`LinearColor`](mw.LinearColor.md) | 新偏色值 |


___

### pitchAngle <Score text="pitchAngle" /> 

• `Static` `get` **pitchAngle**(): `number` <Badge type="tip" text="client" />

获取俯仰角度


#### Returns

`number`

俯仰角度

• `Static` `set` **pitchAngle**(`value`): `void` <Badge type="tip" text="client" />

设置俯仰角度 （-90 ~ 90）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |


___

### shadowsDistance <Score text="shadowsDistance" /> 

• `Static` `get` **shadowsDistance**(): `number` <Badge type="tip" text="client" />

获取阴影距离


#### Returns

`number`

阴影距离(cm)

• `Static` `set` **shadowsDistance**(`value`): `void` <Badge type="tip" text="client" />

设置阴影距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 距离(cm) |


___

### temperature <Score text="temperature" /> 

• `Static` `get` **temperature**(): `number` <Badge type="tip" text="client" />

获取色温


#### Returns

`number`

true或false

• `Static` `set` **temperature**(`value`): `void` <Badge type="tip" text="client" />

设置色温 （1000 ~ 14000）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 色温浮点值 |


___

### temperatureEnabled <Score text="temperatureEnabled" /> 

• `Static` `get` **temperatureEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否开启色温


#### Returns

`boolean`

true或false

• `Static` `set` **temperatureEnabled**(`value`): `void` <Badge type="tip" text="client" />

设置是否开启色温


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |


___

### yawAngle <Score text="yawAngle" /> 

• `Static` `get` **yawAngle**(): `number` <Badge type="tip" text="client" />

获取朝向角度


#### Returns

`number`

朝向角度

• `Static` `set` **yawAngle**(`value`): `void` <Badge type="tip" text="client" />

设置朝向角度 （-180 ~ 180）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |

