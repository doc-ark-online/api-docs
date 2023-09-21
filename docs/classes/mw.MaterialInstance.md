[GAMEPLAY](../groups/Core.GAMEPLAY.md) / MaterialInstance

# MaterialInstance <Badge type="tip" text="Class" /> <Score text="MaterialInstance" />

<p class="content-big"> 材质实例类 </p>

<p style="font-size: 14px;"> 使用示例:创建一个名为"MaterialExample"的脚本,把脚本挂载到一个模型对象下,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到动态设置材质的效果.代码如下: </p>

```ts
@Component
export default class MaterialExample extends Script {
    protected onStart(): void {
        if (this.gameObject instanceof mw.Model){
            // 获取当前Mesh上的材质
            const mis = this.gameObject.getMaterialInstance();
            mis.forEach(mi => {
            // 获取当前材质的浮点参数
                let aspns = mi.getAllScalarParameterName();
                aspns.forEach(aspn => {
                    // 设置当前材质的浮点参数
                    mi.setScalarParameterValue(aspn, 1);
                });
                // 获取当前材质的颜色参数
                let avpns = mi.getAllVectorParameterName();
                avpns.forEach(avpn => {
                    // 设置当前材质的颜色参数
                    mi.setVectorParameterValue(avpn, LinearColor.red);
                });
                // 获取当前材质的贴图参数
                let atpns = mi.getAllTextureParameterName();
                atpns.forEach(atpn => {
                    // 设置当前材质的贴图参数，确保设置的资源被加载了
                    mi.setTextureParameterValue(atpn, "26512");
                });
            });
        }
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new MaterialInstance**()  |
| :----- |

### Methods <Score text="Methods" /> 
| **[getAllScalarParameterName](mw.MaterialInstance.md#getallscalarparametername)**(): `string`[]  |
| :-----|
| 返回所有的浮点材质参数|
| **[getAllTextureParameterName](mw.MaterialInstance.md#getalltextureparametername)**(): `string`[]  |
| 返回所有的贴图材质参数|
| **[getAllVectorParameterName](mw.MaterialInstance.md#getallvectorparametername)**(): `string`[]  |
| 返回所有的颜色材质参数|
| **[getScalarParameterValue](mw.MaterialInstance.md#getscalarparametervalue)**(`parameterName`: `string`): `number`  |
| 获取浮点参数值|
| **[getTextureParameterValue](mw.MaterialInstance.md#gettextureparametervalue)**(`parameterName`: `string`): `string`  |
| 获取贴图参数值|
| **[getVectorParameterValue](mw.MaterialInstance.md#getvectorparametervalue)**(`parameterName`: `string`): [`LinearColor`](mw.LinearColor.md)  |
| 获取颜色参数值|
| **[setScalarParameterValue](mw.MaterialInstance.md#setscalarparametervalue)**(`parameterName`: `string`, `value`: `number`): `void`  |
| 设置浮点参数值|
| **[setTextureParameterValue](mw.MaterialInstance.md#settextureparametervalue)**(`parameterName`: `string`, `value`: `string`): `void`  |
| 设置贴图参数值|
| **[setVectorParameterValue](mw.MaterialInstance.md#setvectorparametervalue)**(`parameterName`: `string`, `value`: [`LinearColor`](mw.LinearColor.md)): `void`  |
| 设置颜色参数值|

## Methods

### getAllScalarParameterName <Score text="getAllScalarParameterName" /> 

• **getAllScalarParameterName**(): `string`[] 

返回所有的浮点材质参数

#### Returns

| `string`[] | 材质参数数组 |
| :------ | :------ |


___

### getAllTextureParameterName <Score text="getAllTextureParameterName" /> 

• **getAllTextureParameterName**(): `string`[] 

返回所有的贴图材质参数

#### Returns

| `string`[] | 材质参数数组 |
| :------ | :------ |


___

### getAllVectorParameterName <Score text="getAllVectorParameterName" /> 

• **getAllVectorParameterName**(): `string`[] 

返回所有的颜色材质参数

#### Returns

| `string`[] | 材质参数数组 |
| :------ | :------ |


___

### getScalarParameterValue <Score text="getScalarParameterValue" /> 

• **getScalarParameterValue**(`parameterName`): `number` 

获取浮点参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |

#### Returns

| `number` | 参数值 |
| :------ | :------ |


___

### getTextureParameterValue <Score text="getTextureParameterValue" /> 

• **getTextureParameterValue**(`parameterName`): `string` 

获取贴图参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |

#### Returns

| `string` | 参数值 |
| :------ | :------ |


___

### getVectorParameterValue <Score text="getVectorParameterValue" /> 

• **getVectorParameterValue**(`parameterName`): [`LinearColor`](mw.LinearColor.md) 

获取颜色参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |

#### Returns

| [`LinearColor`](mw.LinearColor.md) | 参数值 |
| :------ | :------ |


___

### setScalarParameterValue <Score text="setScalarParameterValue" /> 

• **setScalarParameterValue**(`parameterName`, `value`): `void` 

设置浮点参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |
| `value` `number` |  参数值 |



___

### setTextureParameterValue <Score text="setTextureParameterValue" /> 

• **setTextureParameterValue**(`parameterName`, `value`): `void` 

设置贴图参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |
| `value` `string` |  参数值 |



___

### setVectorParameterValue <Score text="setVectorParameterValue" /> 

• **setVectorParameterValue**(`parameterName`, `value`): `void` 

设置颜色参数值

#### Parameters

| `parameterName` `string` |  参数名称 |
| :------ | :------ |
| `value` [`LinearColor`](mw.LinearColor.md) |  参数值 |


