[Extension](Extension.Extension.md) / Decorator

# Decorator <Badge type="tip" text="Namespace" /> <Score text="Decorator" />

## Table of contents

| Functions |
| :-----|
| **[autoExecute](Extension.Decorator.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[saveProperty](Extension.Decorator.md#saveproperty)**(`target`: [`Subdata`](../classes/Extension.Subdata.md), `propertyKey`: `string`): `void` <br> 属性装饰器-永久存储属性|

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

### saveProperty <Score text="saveProperty" /> 

• **saveProperty**(`target`, `propertyKey`): `void` 

属性装饰器-永久存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Subdata`](../classes/Extension.Subdata.md) |  类实例 |
| `propertyKey` | `string` |  属性名 |

