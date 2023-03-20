[Gameplay](../groups/Gameplay.Gameplay.md) / Response

# Response <Badge type="tip" text="Interface" /> <Score text="Response" />

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

响应头

zip/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:26

zip1/1e483ed442af11d1e91b2a1437a59429771b89fce086489276f5d8750636d57f/Typing/Network/index.d.ts:26

zip1/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:26

___

### ok <Score text="ok" /> 

• **ok**: `boolean`

是否成功（状态码是否为200）

zip/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:32

zip1/1e483ed442af11d1e91b2a1437a59429771b89fce086489276f5d8750636d57f/Typing/Network/index.d.ts:32

zip1/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:32

___

### status <Score text="status" /> 

• **status**: `number`

响应状态码

zip/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:34

zip1/1e483ed442af11d1e91b2a1437a59429771b89fce086489276f5d8750636d57f/Typing/Network/index.d.ts:34

zip1/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:34

___

### type <Score text="type" /> 

• **type**: `string`

响应类型

zip/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:28

zip1/1e483ed442af11d1e91b2a1437a59429771b89fce086489276f5d8750636d57f/Typing/Network/index.d.ts:28

zip1/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:28

___

### url <Score text="url" /> 

• **url**: `string`

响应URL

zip/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:30

zip1/1e483ed442af11d1e91b2a1437a59429771b89fce086489276f5d8750636d57f/Typing/Network/index.d.ts:30

zip1/def097e0e17f205d1e61fe2446cd4e9dab4e33f4a15189218e874471f346ff44/Typing/Network/index.d.ts:30

## Methods

### json <Score text="json" /> 

• **json**<`T`\>(): `Promise`<`T`\> 

数据返回json


#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

数据返回json

• **json**<`T`\>(): `Promise`<`T`\> 

数据返回json


#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

数据返回json

• **json**<`T`\>(): `Promise`<`T`\>

数据返回json

**`Effect`**


#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

数据返回json

• **json**<`T`\>(): `Promise`<`T`\>

数据返回json

**`Effect`**


#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`<`T`\>

数据返回json

___

### text <Score text="text" /> 

• **text**(): `Promise`<`string`\> 

数据返回文本


#### Returns

`Promise`<`string`\>

数据返回文本

• **text**(): `Promise`<`string`\> 

数据返回文本


#### Returns

`Promise`<`string`\>

数据返回文本

• **text**(): `Promise`<`string`\>

数据返回文本

**`Effect`**


#### Returns

`Promise`<`string`\>

数据返回文本

• **text**(): `Promise`<`string`\>

数据返回文本

**`Effect`**


#### Returns

`Promise`<`string`\>

数据返回文本
