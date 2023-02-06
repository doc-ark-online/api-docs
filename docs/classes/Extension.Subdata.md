[Extension](../modules/Extension.Extension.md) / Subdata

# Subdata <Badge type="tip" text="Class" /> <Score text="Subdata" />

数据的基类

## Hierarchy

- [`SubdataBase`](Extension.SubdataBase.md)<`any`\>

  ↳ **`Subdata`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDataChange](Extension.SubdataBase.md#ondatachange)**: [`Action`](Type.Action.md) <br> 数据变化的委托|
:::


| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[currentVersion](Extension.SubdataBase.md#currentversion)**(): `number` <br> 当前数据版本号，和version配合使用，可实现数据升级|
| **[dataInfo](Extension.SubdataBase.md#datainfo)**(): `T` <br> 数据体|
| **[version](Extension.SubdataBase.md#version)**(): `number` <br> 数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级|
:::


| Methods |
| :-----|
| **[getSavedProperty](Extension.Subdata.md#getsavedproperty)**<`T`\>(`string`): `T` <br> 通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)|


::: details 点击查看继承
| Methods |
| :-----|
| **[initDefaultData](Extension.SubdataBase.md#initdefaultdata)**(): `void` <br> 初始化默认数据，需要请复写|
| **[onDataInit](Extension.SubdataBase.md#ondatainit)**(): `void` <br> 数据初始化完成调用，需要请复写，可在这个方法中实现数据升级|
| **[save](Extension.SubdataBase.md#save)**(`boolean`): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <br> 保存数据|
| **[syncToClient](Extension.SubdataBase.md#synctoclient)**(): [`SubdataBase`](Extension.SubdataBase.md)<`T`\> <br> 向客户端同步数据|
:::


构造方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DataInfoClass` | [`Class`](../interfaces/Type.Class.md)<`any`\> |  数据体类型 |

## Properties

## Accessors

## Methods

### getSavedProperty <Score text="getSavedProperty" /> 

• `Protected` **getSavedProperty**<`T`\>(`propertyName`): `T` <Badge type="tip" text="other" />

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
