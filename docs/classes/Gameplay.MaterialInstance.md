[Gameplay](../groups/Gameplay.Gameplay.md) / MaterialInstance

# MaterialInstance <Badge type="tip" text="Class" /> <Score text="MaterialInstance" />

材质实例类

## Table of contents

| Methods |
| :-----|
| **[getAllScalarParameterName](Gameplay.MaterialInstance.md#getallscalarparametername)**(): `string`[] <br> 返回所有的浮点材质参数|
| **[getAllTextureParameterName](Gameplay.MaterialInstance.md#getalltextureparametername)**(): `string`[] <br> 返回所有的贴图材质参数|
| **[getAllVectorParameterName](Gameplay.MaterialInstance.md#getallvectorparametername)**(): `string`[] <br> 返回所有的颜色材质参数|
| **[getScalarParameterValue](Gameplay.MaterialInstance.md#getscalarparametervalue)**(`parameterName`: `string`): `number` <br> 获取浮点参数值|
| **[getTextureParameterValue](Gameplay.MaterialInstance.md#gettextureparametervalue)**(`parameterName`: `string`): `string` <br> 获取贴图参数值|
| **[getVectorParameterValue](Gameplay.MaterialInstance.md#getvectorparametervalue)**(`parameterName`: `string`): [`LinearColor`](Type.LinearColor.md) <br> 获取颜色参数值|
| **[setScalarParameterValue](Gameplay.MaterialInstance.md#setscalarparametervalue)**(`parameterName`: `string`, `value`: `number`): `void` <br> 设置浮点参数值|
| **[setTextureParameterValue](Gameplay.MaterialInstance.md#settextureparametervalue)**(`parameterName`: `string`, `value`: `string`): `void` <br> 设置贴图参数值|
| **[setVectorParameterValue](Gameplay.MaterialInstance.md#setvectorparametervalue)**(`parameterName`: `string`, `value`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置颜色参数值|

## Methods

### getAllScalarParameterName <Score text="getAllScalarParameterName" /> 

• **getAllScalarParameterName**(): `string`[] 

返回所有的浮点材质参数


#### Returns

`string`[]

材质参数数组

___

### getAllTextureParameterName <Score text="getAllTextureParameterName" /> 

• **getAllTextureParameterName**(): `string`[] 

返回所有的贴图材质参数


#### Returns

`string`[]

材质参数数组

___

### getAllVectorParameterName <Score text="getAllVectorParameterName" /> 

• **getAllVectorParameterName**(): `string`[] 

返回所有的颜色材质参数


#### Returns

`string`[]

材质参数数组

___

### getScalarParameterValue <Score text="getScalarParameterValue" /> 

• **getScalarParameterValue**(`parameterName`): `number` 

获取浮点参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |

#### Returns

`number`

参数值

___

### getTextureParameterValue <Score text="getTextureParameterValue" /> 

• **getTextureParameterValue**(`parameterName`): `string` 

获取贴图参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |

#### Returns

`string`

参数值

___

### getVectorParameterValue <Score text="getVectorParameterValue" /> 

• **getVectorParameterValue**(`parameterName`): [`LinearColor`](Type.LinearColor.md) 

获取颜色参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |

#### Returns

[`LinearColor`](Type.LinearColor.md)

参数值

___

### setScalarParameterValue <Score text="setScalarParameterValue" /> 

• **setScalarParameterValue**(`parameterName`, `value`): `void` 

设置浮点参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |
| `value` | `number` |  参数值 |


___

### setTextureParameterValue <Score text="setTextureParameterValue" /> 

• **setTextureParameterValue**(`parameterName`, `value`): `void` 

设置贴图参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |
| `value` | `string` |  参数值 |


___

### setVectorParameterValue <Score text="setVectorParameterValue" /> 

• **setVectorParameterValue**(`parameterName`, `value`): `void` 

设置颜色参数值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameterName` | `string` |  参数名称 |
| `value` | [`LinearColor`](Type.LinearColor.md) |  参数值 |

```ts
// 从023开始,我们设置材质的颜色,是这么处理的
// 1. 先通过guid获取到需要改颜色的游戏物体
Gameplay.GameObject.asyncFind("需改颜色模型的guid").then(go => {
    // 2. 将go的“游戏物体”类型 转换为 “静态模型”类型 后，赋值给sm
    let sm = go as Gameplay.StaticMesh
    // 3. 获取到sm的材质示例
    // getMaterialInstance()[0]这里我是去获取对象的第一个材质实例
    // 4. MWMainColor是设置主颜色相关的参数名
    // new Type.LinearColor(1, 0, 0)，r=1,g=0,b=0 为正红色  
    sm.getMaterialInstance()[0].setVectorParameterValue("MW_MlainColor", new Type.LinearColor(1, 0, 0))
})
```
