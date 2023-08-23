[mwext](Extension.mwext.md) / Decorator

# Decorator <Badge type="tip" text="Namespace" /> <Score text="Decorator" />

Decorator

## Table of contents

| Functions |
| :-----|
| **[autoExecute](mwext.Decorator.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[noReply](mwext.Decorator.md#noreply)**(): (`target`: [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\>, `fnName`: `string`, `descriptor`: `PropertyDescriptor`) => `void` <br> 方法注解-被注解的net方法不需要回复客户端|
| **[persistence](mwext.Decorator.md#persistence)**(`name?`): (`target`: [`Subdata`](../classes/mwext.Subdata.md), `propertyKey`: `string`) => `void` <br> 属性注解-持久化存储属性|

## Functions

### autoExecute <Score text="autoExecute" /> 

• **autoExecute**(`fnName`): (`target?`: `unknown`) => `void` 

类装饰器-自动执行某个方法

::: warning Precautions

调用发生在所有游戏脚本的生命周期之前

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fnName` | `string` |  要自动执行的方法名 |

#### Returns

`fn`

装饰器方法体

• (`target?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `unknown` |

##### Returns

`void`

___

### noReply <Score text="noReply" /> 

• **noReply**(): (`target`: [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\>, `fnName`: `string`, `descriptor`: `PropertyDescriptor`) => `void` <Badge type="tip" text="server" />

方法注解-被注解的net方法不需要回复客户端


#### Returns

`fn`

注解方法

• (`target`, `fnName`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`ModuleS`](../classes/mwext.ModuleS.md)<`any`, `any`\> |
| `fnName` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

___

### persistence <Score text="persistence" /> 

• **persistence**(`name?`): (`target`: [`Subdata`](../classes/mwext.Subdata.md), `propertyKey`: `string`) => `void` 

属性注解-持久化存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` |  持久化后的属性名，不写会用变量名存储 default: undefined |

#### Returns

`fn`

注解方法

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Subdata`](../classes/mwext.Subdata.md) |
| `propertyKey` | `string` |

##### Returns

`void`
