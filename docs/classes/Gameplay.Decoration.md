[Gameplay](../modules/Gameplay.Gameplay.md) / Decoration

# Decoration <Badge type="tip" text="Class" />

**`Description`**

挂件数据

## Table of contents

| Properties |
| :-----|
| **[assetId](Gameplay.Decoration.md#assetid)**: `string` <br> 资源Id|
| **[relativeTransform](Gameplay.Decoration.md#relativetransform)**: [`Transform`](Type.Transform.md) <br> 相对ue slot Transform|
| **[skeletonName](Gameplay.Decoration.md#skeletonname)**: `string` <br> 骨架名字|
| **[slotName](Gameplay.Decoration.md#slotname)**: `string` <br> 插槽名|

| Methods |
| :-----|
| **[deserialize](Gameplay.Decoration.md#deserialize)**(`string`): `void` <br> 反序列化|
| **[equal](Gameplay.Decoration.md#equal)**(`string`): `boolean` <br> 比较是否是一个插槽数据|
| **[serialize](Gameplay.Decoration.md#serialize)**(): `string` <br> 获取序列化String|

## Properties

### assetId

• **assetId**: `string`

**`Description`**

资源Id

___

### relativeTransform

• **relativeTransform**: [`Transform`](Type.Transform.md)

**`Description`**

相对ue slot Transform

___

### skeletonName

• **skeletonName**: `string`

**`Description`**

骨架名字

___

### slotName

• **slotName**: `string`

**`Description`**

插槽名

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

**`Description`**

反序列化

**`Effect`**

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` |  挂件string数据 |

#### Returns

`void`

___

### equal

▸ **equal**(`widgetString`): `boolean`

**`Description`**

比较是否是一个插槽数据

**`Effect`**

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `widgetString` | `string` | 插槽数据 |

#### Returns

`boolean`

是否相等

___

### serialize

▸ **serialize**(): `string`

**`Description`**

获取序列化String

**`Effect`**

双端

#### Returns

`string`

string
