[GAMEPLAY](../groups/Core.GAMEPLAY.md) / Response

# Response <Badge type="tip" text="Interface" /> <Score text="Response" />

<span class="content-big">

HTTP响应信息的对象

</span>

## Table of contents

### Properties <Score text="Properties" /> 
| **[headers](mw.Response.md#headers)**: `Map`<`string`, `string`\>  |
| :-----|
| 响应头|
| **[ok](mw.Response.md#ok)**: `boolean`  |
| 是否成功（状态码是否为200）|
| **[status](mw.Response.md#status)**: `number`  |
| 响应状态码|
| **[type](mw.Response.md#type)**: `string`  |
| 响应类型|
| **[url](mw.Response.md#url)**: `string`  |
| 响应URL|

### Methods <Score text="Methods" /> 
| **[json](mw.Response.md#json)**<`T`: \>(): `Promise`<`T`: \>  |
| :-----|
| 数据返回json|
| **[text](mw.Response.md#text)**(): `Promise`<`string`\>  |
| 数据返回文本|

## Properties

### headers <Score text="headers" /> 

• **headers**: `Map`<`string`, `string`\>

响应头

___

### ok <Score text="ok" /> 

• **ok**: `boolean`

是否成功（状态码是否为200）

___

### status <Score text="status" /> 

• **status**: `number`

响应状态码

___

### type <Score text="type" /> 

• **type**: `string`

响应类型

___

### url <Score text="url" /> 

• **url**: `string`

响应URL

## Methods

### json <Score text="json" /> 

• **json**<`T`\>(): `Promise`<`T`\> 

数据返回json

#### Returns

| `Promise`<`T`\> | 数据返回json |
| :------ | :------ |


#### Type parameters

| Name |
| :------ |
| `T` |

___

### text <Score text="text" /> 

• **text**(): `Promise`<`string`\> 

数据返回文本

#### Returns

| `Promise`<`string`\> | 数据返回文本 |
| :------ | :------ |

