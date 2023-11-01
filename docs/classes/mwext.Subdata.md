[EXTENSION](../groups/Extension.EXTENSION.md) / Subdata

# Subdata <Badge type="tip" text="Class" /> <Score text="Subdata" />

数据控制类的基类

## Table of contents

### Properties <Score text="Properties" /> 
| **[onDataChange](mwext.Subdata.md#ondatachange)**: [`Action`](mw.Action.md)  |
| :-----|
| 数据变化的委托|

### Accessors <Score text="Accessors" /> 
| **[currentVersion](mwext.Subdata.md#currentversion)**(): `number`  |
| :-----|
| 当前数据版本号，和version配合使用，可实现数据升级|
| **[version](mwext.Subdata.md#version)**(): `number`  |
| 数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级|

### Methods <Score text="Methods" /> 
| **[getSavedProperty](mwext.Subdata.md#getsavedproperty)**<`T`: \>(`propertyName`: `string`): `T`:   |
| :-----|
| 通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)|
| **[initDefaultData](mwext.Subdata.md#initdefaultdata)**(): `void`  |
| 初始化默认数据，需要请复写|
| **[onDataInit](mwext.Subdata.md#ondatainit)**(): `void`  |
| 数据初始化完成调用，需要请复写，可在这个方法中实现数据升级|
| **[save](mwext.Subdata.md#save)**(`syncToClient`: `boolean`): [`Subdata`](mwext.Subdata.md)  |
| 保存数据|
| **[syncToClient](mwext.Subdata.md#synctoclient)**(): [`Subdata`](mwext.Subdata.md)  |
| 向客户端同步数据|

## Properties

### onDataChange <Score text="onDataChange" /> 

• `Readonly` **onDataChange**: [`Action`](mw.Action.md)

数据变化的委托

## Accessors

### currentVersion <Score text="currentVersion" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **currentVersion**(): `number`

</th>
<th style="text-align: left">

• `Protected` `set` **currentVersion**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前数据版本号，和version配合使用，可实现数据升级

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


当前数据版本号，和version配合使用，可实现数据升级

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### version <Score text="version" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **version**(): `number`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级

#### Returns

</td>
</tr></tbody>
</table>

| `number` |  |
| :------ | :------ |

## Methods

### getSavedProperty <Score text="getSavedProperty" /> 

• `Protected` **getSavedProperty**<`T`\>(`propertyName`): `T` 

通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)

#### Parameters

| `propertyName` `string` |  属性名 |
| :------ | :------ |

#### Returns

| `T` | 属性值 |
| :------ | :------ |


#### Type parameters

| Name |
| :------ |
| `T` |

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

• **save**(`syncToClient`): [`Subdata`](mwext.Subdata.md) <Badge type="tip" text="server" />

保存数据

#### Parameters

| `syncToClient` `boolean` |  是否同步给客户端 |
| :------ | :------ |

#### Returns

| [`Subdata`](mwext.Subdata.md) | 自身 |
| :------ | :------ |


___

### syncToClient <Score text="syncToClient" /> 

• **syncToClient**(): [`Subdata`](mwext.Subdata.md) <Badge type="tip" text="server" />

向客户端同步数据

#### Returns

| [`Subdata`](mwext.Subdata.md) | 自身 |
| :------ | :------ |

