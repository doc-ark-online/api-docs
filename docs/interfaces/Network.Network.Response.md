[Network](../modules/Network.Network.md) / Response

# Response <Badge type="tip" text="Interface" />

**`Description`**

HTTP 响应信息的对象

## Table of contents

| Properties                                                                                 |
| :----------------------------------------------------------------------------------------- |
| **[headers](Network.Network.Response.md#headers)**: `Map`<`string`, `string`\> <br> 响应头 |
| **[ok](Network.Network.Response.md#ok)**: `boolean` <br> 是否成功（状态码是否为 200）      |
| **[status](Network.Network.Response.md#status)**: `number` <br> 响应状态码                 |
| **[type](Network.Network.Response.md#type)**: `string` <br> 响应类型                       |
| **[url](Network.Network.Response.md#url)**: `string` <br> 响应 URL                         |

| Methods                                                                                  |
| :--------------------------------------------------------------------------------------- |
| **[json](Network.Network.Response.md#json)**<`T`\>(): `Promise`<`T`\> <br> 数据返回 json |
| **[text](Network.Network.Response.md#text)**(): `Promise`<`string`\> <br> 数据返回文本   |

## Properties

### headers

• **headers**: `Map`<`string`, `string`\>

**`Description`**

响应头

---

### ok

• **ok**: `boolean`

**`Description`**

是否成功（状态码是否为 200）

---

### status

• **status**: `number`

**`Description`**

响应状态码

---

### type

• **type**: `string`

**`Description`**

响应类型

---

### url

• **url**: `string`

**`Description`**

响应 URL

## Methods

### json

▸ **json**<`T`\>(): `Promise`<`T`\>

**`Description`**

数据返回 json

**`Effect`**

调用端生效

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Returns

`Promise`<`T`\>

数据返回 json

---

### text

▸ **text**(): `Promise`<`string`\>

**`Description`**

数据返回文本

**`Effect`**

调用端生效

#### Returns

`Promise`<`string`\>

数据返回文本
