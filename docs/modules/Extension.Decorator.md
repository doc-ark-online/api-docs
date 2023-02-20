[Extension](Extension.Extension.md) / Decorator

# Decorator <Badge type="tip" text="Namespace" /> <Score text="Decorator" />

## Table of contents

| Functions |
| :-----|
| **[autoExecute](Extension.Decorator.md#autoexecute)**(`string`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[noReply](Extension.Decorator.md#noreply)**(`any`, `string`, `PropertyDescriptor`): `void` <br> 方法装饰器-无返回服务器网络方法，用于装饰模块服务端(继承ModuleS的类)中不需要给客户端返回值的net方法|
| **[saveProperty](Extension.Decorator.md#saveproperty)**([`SubdataBase`](../classes/Extension.SubdataBase.md)<`any`\>, `string`): `void` <br> 属性装饰器-永久存储属性|

## Functions

### autoExecute <Score text="autoExecute" /> 

• **autoExecute**(`fnName`): (`target?`: `unknown`) => `void` <Badge type="tip" text="other" />

类装饰器-自动执行某个方法

::: warning Precautions

调用发生在所有游戏脚本的生命周期之前

:::

双端生效

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

• **noReply**(`target`, `funName`, `descriptor`): `void` <Badge type="tip" text="other" />

方法装饰器-无返回服务器网络方法，用于装饰模块服务端(继承ModuleS的类)中不需要给客户端返回值的net方法

服务端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` |  类实例 |
| `funName` | `string` |  方法名 |
| `descriptor` | `PropertyDescriptor` |  属性描述 |


___

### saveProperty <Score text="saveProperty" /> 

• **saveProperty**(`target`, `propertyKey`): `void` <Badge type="tip" text="other" />

属性装饰器-永久存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::

双端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`SubdataBase`](../classes/Extension.SubdataBase.md)<`any`\> |  类实例 |
| `propertyKey` | `string` |  属性名 |

