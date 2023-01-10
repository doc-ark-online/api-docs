[Network](../modules/Network.Network.md) / Response

# Response <Badge type="tip" text="Interface" /> <Score text="Response" />

**`Description`**

HTTP响应信息的对象

## Table of contents

| Properties |
| :-----|
| **[headers](Network.Response.md#headers)**: `Map`<`string`, `string`\> <br> 响应头|
| **[ok](Network.Response.md#ok)**: `boolean` <br> 是否成功（状态码是否为200）|
| **[status](Network.Response.md#status)**: `number` <br> 响应状态码|
| **[type](Network.Response.md#type)**: `string` <br> 响应类型|
| **[url](Network.Response.md#url)**: `string` <br> 响应URL|

| Methods |
| :-----|
| **[json](Network.Response.md#json)**<`T`\>(): `Promise`<`T`\> <br> 数据返回json|
| **[text](Network.Response.md#text)**(): `Promise`<`string`\> <br> 数据返回文本|

## Properties

### headers <Score text="headers" /> 

• **headers**: `Map`<`string`, `string`\>

**`Description`**

响应头

___

### ok <Score text="ok" /> 

• **ok**: `boolean`

**`Description`**

是否成功（状态码是否为200）

___

### status <Score text="status" /> 

• **status**: `number`

**`Description`**

响应状态码

___

### type <Score text="type" /> 

• **type**: `string`

**`Description`**

响应类型

___

### url <Score text="url" /> 

• **url**: `string`

**`Description`**

响应URL

## Methods

### json <Score text="json" /> 

▸ **json**<`T`\>(): `Promise`<`T`\>

**`Description`**

数据返回json <Badge type="tip" text="other" />


#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

数据返回json

___

### text <Score text="text" /> 

▸ **text**(): `Promise`<`string`\> <Badge type="tip" text="other" />

**`Description`**

数据返回文本


#### Returns

`Promise`<`string`\>

数据返回文本
