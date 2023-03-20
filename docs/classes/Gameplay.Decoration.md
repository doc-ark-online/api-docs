[Avatar](../groups/Avatar.Avatar.md) / Decoration

# Decoration <Badge type="tip" text="Class" /> <Score text="Decoration" />

平台形象特有的挂件数据格式

## Table of contents

| Properties |
| :-----|
| **[assetId](Gameplay.Decoration.md#assetid)**: `string` <br> 资源Id|
| **[relativeTransform](Gameplay.Decoration.md#relativetransform)**: [`Transform`](Type.Transform.md) <br> 相对ue slot Transform|
| **[skeletonName](Gameplay.Decoration.md#skeletonname)**: `string` <br> 骨架名字|
| **[slotName](Gameplay.Decoration.md#slotname)**: `string` <br> 插槽名|

| Methods |
| :-----|
| **[deserialize](Gameplay.Decoration.md#deserialize)**(`data`: `string`): `void` <br> 反序列化|
| **[equal](Gameplay.Decoration.md#equal)**(`widgetString`: `string`): `boolean` <br> 比较是否是一个插槽数据|
| **[serialize](Gameplay.Decoration.md#serialize)**(): `string` <br> 获取序列化String|

## Properties

### assetId <Score text="assetId" /> 

• **assetId**: `string`

资源Id

___

### relativeTransform <Score text="relativeTransform" /> 

• **relativeTransform**: [`Transform`](Type.Transform.md)

相对ue slot Transform

___

### skeletonName <Score text="skeletonName" /> 

• **skeletonName**: `string`

骨架名字

___

### slotName <Score text="slotName" /> 

• **slotName**: `string`

插槽名

## Methods

### deserialize <Score text="deserialize" /> 

• **deserialize**(`data`): `void` 

反序列化


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` |  挂件string数据 |


___

### equal <Score text="equal" /> 

• **equal**(`widgetString`): `boolean` 

比较是否是一个插槽数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `widgetString` | `string` | 插槽数据 |

#### Returns

`boolean`

是否相等

___

### serialize <Score text="serialize" /> 

• **serialize**(): `string` 

获取序列化String


#### Returns

`string`

string
