[DATA](../groups/DATA.DATA.md) / Subdata

# Subdata <Badge type="tip" text="Class" /> <Score text="Subdata" />

数据控制类的基类

## Table of contents

| Properties |
| :-----|
| **[onDataChange](Extension.Subdata.md#ondatachange)**: [`Action`](Type.Action.md) <br> 数据变化的委托|

| Accessors |
| :-----|
| **[currentVersion](Extension.Subdata.md#currentversion)**(): `number` <br> 当前数据版本号，和version配合使用，可实现数据升级|
| **[version](Extension.Subdata.md#version)**(): `number` <br> 数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级|

| Methods |
| :-----|
| **[getSavedProperty](Extension.Subdata.md#getsavedproperty)**<`T`\>(`propertyName`: `string`): `T` <br> 通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)|
| **[initDefaultData](Extension.Subdata.md#initdefaultdata)**(): `void` <br> 初始化默认数据，需要请复写|
| **[onDataInit](Extension.Subdata.md#ondatainit)**(): `void` <br> 数据初始化完成调用，需要请复写，可在这个方法中实现数据升级|
| **[save](Extension.Subdata.md#save)**(`syncToClient`: `boolean`): [`Subdata`](Extension.Subdata.md) <br> 保存数据|
| **[syncToClient](Extension.Subdata.md#synctoclient)**(): [`Subdata`](Extension.Subdata.md) <br> 向客户端同步数据|

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

### version <Score text="version" /> 

• `Protected` `get` **version**(): `number`

数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级

#### Returns

`number`

## Methods

### getSavedProperty <Score text="getSavedProperty" /> 

• `Protected` **getSavedProperty**<`T`\>(`propertyName`): `T` 

通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)


#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` |  属性名 |

#### Returns

`T`

属性值

___

### initDefaultData <Score text="initDefaultData" /> 

• `Protected` **initDefaultData**(): `void` 

初始化默认数据，需要请复写



___

### onDataInit <Score text="onDataInit" /> 

• `Protected` **onDataInit**(): `void` 

数据初始化完成调用，需要请复写，可在这个方法中实现数据升级

::: warning Precautions

这个方法调用完成后，你需要保证currentVersion和version是相等的

:::



___

### save <Score text="save" /> 

• **save**(`syncToClient`): [`Subdata`](Extension.Subdata.md) <Badge type="tip" text="server" />

保存数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `syncToClient` | `boolean` |  是否同步给客户端 |

#### Returns

[`Subdata`](Extension.Subdata.md)

自身

___

### syncToClient <Score text="syncToClient" /> 

• **syncToClient**(): [`Subdata`](Extension.Subdata.md) <Badge type="tip" text="server" />

向客户端同步数据


#### Returns

[`Subdata`](Extension.Subdata.md)

自身
