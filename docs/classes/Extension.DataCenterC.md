[Data](../groups/Data.Data.md) / DataCenterC

# DataCenterC <Badge type="tip" text="Class" /> <Score text="DataCenterC" />

客户端数据中心，里面存放着当前玩家的数据

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[getData](Extension.DataCenterC.md#getdata)**<`T`: extends [`Subdata`](Extension.Subdata.md)<`T`\>\>(`SubdataType`: [`TypeName`](../interfaces/Type.TypeName.md)<`T`\>): `T`: extends [`Subdata`](Extension.Subdata.md)<`T`\> <br> 获取当前玩家的一个数据|
| **[ready](Extension.DataCenterC.md#ready)**(): `Promise`<`void`\> <br> 判断数据是否就绪|
| **[getInstance](Extension.DataCenterC.md#getinstance)**(): [`DataCenterC`](Extension.DataCenterC.md) <br> 获取客户端数据中心全局实例|

## Methods

### getData <Score text="getData" /> 

• **getData**<`T`\>(`SubdataType`): `T` <Badge type="tip" text="client" />

获取当前玩家的一个数据


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Subdata`](Extension.Subdata.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SubdataType` | [`TypeName`](../interfaces/Type.TypeName.md)<`T`\> |  数据类型 |

#### Returns

`T`

数据对象

___

### ready <Score text="ready" /> 

• **ready**(): `Promise`<`void`\> <Badge type="tip" text="client" />

判断数据是否就绪


#### Returns

`Promise`<`void`\>

true-就绪 false-未就绪

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`DataCenterC`](Extension.DataCenterC.md) <Badge type="tip" text="client" />

获取客户端数据中心全局实例


#### Returns

[`DataCenterC`](Extension.DataCenterC.md)

客户端数据中心全局实例
