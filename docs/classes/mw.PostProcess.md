[LIGHTING](../groups/Core.LIGHTING.md) / PostProcess

# PostProcess <Badge type="tip" text="Class" /> <Score text="PostProcess" />

后处理

使用示例: 可按如下操作控制编辑器后处理实时效果
创建一个名为"PostProcessExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过+和-键控制后处理的伽马值
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

| Accessors |
| :-----|
| **[bloom](mw.PostProcess.md#bloom)**(): `number` <br> 获取泛光|
| **[config](mw.PostProcess.md#config)**(): [`PostProcessConfig`](mw.PostProcessConfig.md) <br> 获取后处理属性配置|
| **[contrast](mw.PostProcess.md#contrast)**(): `number` <br> 获取全局对比度|
| **[preset](mw.PostProcess.md#preset)**(`newPreset`: [`PostProcessPreset`](../enums/mw.PostProcessPreset.md)): `void` <br> 设置预设|
| **[saturation](mw.PostProcess.md#saturation)**(): `number` <br> 获取全局饱和度|

## Accessors

### bloom <Score text="bloom" /> 

• `Static` `get` **bloom**(): `number` 

获取泛光


#### Returns

`number`

获取值

• `Static` `set` **bloom**(`Value`): `void` 

设置泛光（0 ~ 8）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### config <Score text="config" /> 

• `Static` `get` **config**(): [`PostProcessConfig`](mw.PostProcessConfig.md) 

获取后处理属性配置


#### Returns

[`PostProcessConfig`](mw.PostProcessConfig.md)

获取值

• `Static` `set` **config**(`newConfig`): `void` 

设置后处理属性配置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newConfig` | [`PostProcessConfig`](mw.PostProcessConfig.md) | 设置值 |


___

### contrast <Score text="contrast" /> 

• `Static` `get` **contrast**(): `number` 

获取全局对比度


#### Returns

`number`

获取值

• `Static` `set` **contrast**(`Value`): `void` 

设置全局对比度 （0.2 ~ 5.0）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |


___

### preset <Score text="preset" /> 

• `Static` `set` **preset**(`newPreset`): `void` <Badge type="tip" text="client" />

设置预设


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPreset` | [`PostProcessPreset`](../enums/mw.PostProcessPreset.md) | 预设枚举 |


___

### saturation <Score text="saturation" /> 

• `Static` `get` **saturation**(): `number` 

获取全局饱和度


#### Returns

`number`

获取值

• `Static` `set` **saturation**(`Value`): `void` 

设置全局饱和度 （0 ~ 2）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | `number` | 设置值 |

