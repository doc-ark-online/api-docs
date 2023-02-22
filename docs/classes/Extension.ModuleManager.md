[Extension](../modules/Extension.Extension.md) / ModuleManager

# ModuleManager <Badge type="tip" text="Class" /> <Score text="ModuleManager" />

**`Groups`**

UTILITY

模块管理

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Accessors |
| :-----|
| **[isReady](Extension.ModuleManager.md#isready)**(): `any` <br> 判断ModuleManager是否就绪|

| Methods |
| :-----|
| **[callExecut](Extension.ModuleManager.md#callexecut)**<`T`: extends [`ModuleS`](Extension.ModuleS.md)<`any`, `any`\> \\>(`ModuleClass`: [`TypeName`](../interfaces/Type.TypeName.md)<`T`\>, `type?`: `number`, `...params`: `any`[]): `any` <br> 调用一个模块的onExcut方法|
| **[getModule](Extension.ModuleManager.md#getmodule)**<`T`: extends [`ModuleS`](Extension.ModuleS.md)<`any`, `any`\> \\>(`ModuleClass`: [`TypeName`](../interfaces/Type.TypeName.md)<`T`\>): `T`: extends [`ModuleS`](Extension.ModuleS.md)<`any`, `any`\> \ <br> 根据类型获取一个模块|
| **[getUpdateTimeLog](Extension.ModuleManager.md#getupdatetimelog)**(): `string` <br> 获取各模块update方法的执行时长，以字符串的形式返回，需要自己显示或打印出来|
| **[ready](Extension.ModuleManager.md#ready)**(): `Promise`<`void`\> <br> 判断ModuleManager是否就绪的异步方法|
| **[registerModule](Extension.ModuleManager.md#registermodule)**(`ServerModuleType`: [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleS`](Extension.ModuleS.md)<`any`, `any`\>\>, `ClientModuleType`: [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleC`](Extension.ModuleC.md)<`any`, `any`\>\>, `ModuleDataType?`: [`TypeName`](../interfaces/Type.TypeName.md)<[`Subdata`](Extension.Subdata.md)\>): [`ModuleManager`](Extension.ModuleManager.md) <br> 注册模块|
| **[setClientFirstStartModule](Extension.ModuleManager.md#setclientfirststartmodule)**(`ModuleClass`: [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleC`](Extension.ModuleC.md)<`any`, `any`\>\>): [`ModuleManager`](Extension.ModuleManager.md) <br> 设置客户端第一个要启动的模块|
| **[getInstance](Extension.ModuleManager.md#getinstance)**(): [`ModuleManager`](Extension.ModuleManager.md) <br> 获取模块管理全局实例|

## Accessors

### isReady <Score text="isReady" /> 

• `Private` `get` **isReady**(): `any` 

判断ModuleManager是否就绪


#### Returns

`any`

ModuleManager是否就绪

## Methods

### callExecut <Score text="callExecut" /> 

• **callExecut**<`T`\>(`ModuleClass`, `type?`, `...params`): `any` 

调用一个模块的onExcut方法


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ModuleS`](Extension.ModuleS.md)<`any`, `any`\> \| [`ModuleC`](Extension.ModuleC.md)<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ModuleClass` | [`TypeName`](../interfaces/Type.TypeName.md)<`T`\> |  模块 |
| `type?` | `number` |  给onExcut方法传递的操作类型，需要各个模块自己定义 default: 0 |
| `...params` | `any`[] |  给onExcut方法传递的参数，需要各个模块自己定义 |

#### Returns

`any`

onExcut方法return的结果

___

### getModule <Score text="getModule" /> 

• **getModule**<`T`\>(`ModuleClass`): `T` 

根据类型获取一个模块


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ModuleS`](Extension.ModuleS.md)<`any`, `any`\> \| [`ModuleC`](Extension.ModuleC.md)<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ModuleClass` | [`TypeName`](../interfaces/Type.TypeName.md)<`T`\> |  模块类型 |

#### Returns

`T`

模块对象

___

### getUpdateTimeLog <Score text="getUpdateTimeLog" /> 

• **getUpdateTimeLog**(): `string` 

获取各模块update方法的执行时长，以字符串的形式返回，需要自己显示或打印出来


::: warning Precautions

本方法只有开启ModuleManager的debug才会生效，此方法有性能消耗，只用作性能分析，正式版本不要使用

:::

#### Returns

`string`

log字符串

___

### ready <Score text="ready" /> 

• **ready**(): `Promise`<`void`\> 

判断ModuleManager是否就绪的异步方法


#### Returns

`Promise`<`void`\>

异步操作的Promise

___

### registerModule <Score text="registerModule" /> 

• **registerModule**(`ServerModuleType`, `ClientModuleType`, `ModuleDataType?`): [`ModuleManager`](Extension.ModuleManager.md) 

注册模块


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ServerModuleType` | [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleS`](Extension.ModuleS.md)<`any`, `any`\>\> |  模块的服务端类型 |
| `ClientModuleType` | [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleC`](Extension.ModuleC.md)<`any`, `any`\>\> |  模块的客户端类型 |
| `ModuleDataType?` | [`TypeName`](../interfaces/Type.TypeName.md)<[`Subdata`](Extension.Subdata.md)\> |  模块的数据类型 default: null |

#### Returns

[`ModuleManager`](Extension.ModuleManager.md)

ModuleManager自身，可用作链式调用

___

### setClientFirstStartModule <Score text="setClientFirstStartModule" /> 

• **setClientFirstStartModule**(`ModuleClass`): [`ModuleManager`](Extension.ModuleManager.md) <Badge type="tip" text="client" />

设置客户端第一个要启动的模块


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ModuleClass` | [`TypeName`](../interfaces/Type.TypeName.md)<[`ModuleC`](Extension.ModuleC.md)<`any`, `any`\>\> |  模块类 |

#### Returns

[`ModuleManager`](Extension.ModuleManager.md)

ModuleManager自身，可用作链式调用

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`ModuleManager`](Extension.ModuleManager.md) 

获取模块管理全局实例


#### Returns

[`ModuleManager`](Extension.ModuleManager.md)

全局实例
