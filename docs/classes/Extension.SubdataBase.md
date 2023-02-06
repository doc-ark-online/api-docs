[Extension](../modules/Extension.Extension.md) / SubdataBase

# SubdataBase<T\> <Badge type="tip" text="Class" /> <Score text="SubdataBase<T\>" />

数据控制类的基类

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DataInfo`](Extension.DataInfo.md) |

## Hierarchy

- **`SubdataBase`**

  ↳ [`Subdata`](Extension.Subdata.md)

## Table of contents

| Properties |
| :-----|
| **[onDataChange](Extension.SubdataBase.md#ondatachange)**: [`Action`](Type.Action.md) <br> 数据变化的委托|

| Accessors |
| :-----|
| **[currentVersion](Extension.SubdataBase.md#currentversion)**(): `number` <br> 当前数据版本号，和version配合使用，可实现数据升级|
| **[dataInfo](Extension.SubdataBase.md#datainfo)**(): `T` <br> 数据体|
| **[version](Extension.SubdataBase.md#version)**(): `number` <br> 数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级|

| Methods |
| :-----|
| **[initDefaultData](Extension.SubdataBase.md#initdefaultdata)**(): `void` <br> 初始化默认数据，需要请复写|
| **[onDataInit](Extension.SubdataBase.md#ondatainit)**(): `void` <br> 数据初始化完成调用，需要请复写，可在这个方法中实现数据升级|
| **[save](Extension.SubdataBase.md#save)**(`boolean`): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <br> 保存数据|
| **[syncToClient](Extension.SubdataBase.md#synctoclient)**(): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <br> 向客户端同步数据|

构造方法

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DataInfo`](Extension.DataInfo.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DataInfoClass` | [`Class`](../interfaces/Type.Class.md)<`T`\> |  数据体类型 |

## Properties

### onDataChange <Score text="onDataChange" /> 

• `Readonly` **onDataChange**: [`Action`](Type.Action.md)

数据变化的委托

## Accessors

### currentVersion <Score text="currentVersion" /> 

• `Protected` `get` **currentVersion**(): `number`

当前数据版本号，和version配合使用，可实现数据升级

#### Returns

`number`

• `Protected` `set` **currentVersion**(`value`): `void`

当前数据版本号，和version配合使用，可实现数据升级

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### dataInfo <Score text="dataInfo" /> 

• `Protected` `get` **dataInfo**(): `T`

数据体

#### Returns

`T`

___

### version <Score text="version" /> 

• `Protected` `get` **version**(): `number`

数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级

#### Returns

`number`

## Methods

### initDefaultData <Score text="initDefaultData" /> 

• `Protected` **initDefaultData**(): `void` <Badge type="tip" text="other" />

初始化默认数据，需要请复写



___

### onDataInit <Score text="onDataInit" /> 

• `Protected` **onDataInit**(): `void` <Badge type="tip" text="other" />

数据初始化完成调用，需要请复写，可在这个方法中实现数据升级

::: warning Precautions

这个方法调用完成后，你需要保证currentVersion和version是相等的

:::



___

### save <Score text="save" /> 

• **save**(`syncToClient`): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <Badge type="tip" text="other" />

保存数据

服只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `syncToClient` | `boolean` |  是否同步给客户端 |

#### Returns

[`SubdataBase`](Extension.SubdataBase.md)<`T`\>

自身

___

### syncToClient <Score text="syncToClient" /> 

• **syncToClient**(): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <Badge type="tip" text="other" />

向客户端同步数据


#### Returns

[`SubdataBase`](Extension.SubdataBase.md)<`T`\>

自身
