Network

# Network <Badge type="tip" text="Namespace" />

**`Description`**

暴露给用户使用的Http请求接口,用户可选的是网络身份(服务器,客户端)

## Table of contents

| Enumerations |
| :-----|
| [HttpRequestType](../enums/Network.HttpRequestType.md) <br> 开发给用户用的Http请求类型枚举|
| [HttpRequestURL](../enums/Network.HttpRequestURL.md) <br> 开发给用户用的URL枚举，需要与C++层的枚举对应|

| Interfaces |
| :-----|
| [RequestInit](../interfaces/Network.RequestInit.md) <br> HTTP请求信息的对象|
| [Response](../interfaces/Network.Response.md) <br> HTTP响应信息的对象|

| Type Aliases |
| :-----|
| **[HttpResponse](Network.Network.md#httpresponse)**: (`boolean`: `boolean`, `string`: `string`, `number`: `number`) => `void` <br> ▸ (`result`, `content`, `responseCode`): `void`|
| **[TransactionType](Network.Network.md#transactiontype)**: (`boolean`: `boolean`, `string`: `string`) => `void` <br> ▸ (`isSuccess`, `content`): `void`|

| Functions |
| :-----|
| **[fetch](Network.Network.md#fetch)**(`string`, [`RequestInit`](../interfaces/Network.RequestInit.md)): `Promise`<[`Response`](../interfaces/Network.Response.md)\> <br> HTTP请求|
| **[generalHttpRequest](Network.Network.md#generalhttprequest)**([`HttpResponse`](Network.Network.md#httpresponse), [`HttpRequestURL`](../enums/Network.HttpRequestURL.md), `string`, `any`, [`HttpRequestType`](../enums/Network.HttpRequestType.md)): `boolean` <br> 通用Http请求|
| **[getUrlParameter](Network.Network.md#geturlparameter)**(`string`, `string`): `string` <br> 获取url参数|
| **[httpRequestTransmitData](Network.Network.md#httprequesttransmitdata)**([`HttpResponse`](Network.Network.md#httpresponse), `string`, `string`, [`HttpRequestType`](../enums/Network.HttpRequestType.md)): `boolean` <br> Http请求接口|
| **[urlDecode](Network.Network.md#urldecode)**(`string`): `string` <br> url解码|
| **[urlEncode](Network.Network.md#urlencode)**(`string`): `string` <br> url转码|

## Type Aliases

### HttpResponse

Ƭ **HttpResponse**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void`

#### Type declaration

▸ (`result`, `content`, `responseCode`): `void`

**`Description`**

Http请求的回调消息格式

**`Precautions`**

无需主动销毁，生命周期由UObject管理

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `boolean` |  请求否成功 |
| `content` | `string` |  消息内容 |
| `responseCode` | `number` |  状态码 |

##### Returns

`void`

___

### TransactionType

Ƭ **TransactionType**: (`isSuccess`: `boolean`, `content`: `string`) => `void`

#### Type declaration

▸ (`isSuccess`, `content`): `void`

**`Description`**

商城通信回调消息格式

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSuccess` | `boolean` |  通信结果 |
| `content` | `string` |  消息内容 |

##### Returns

`void`

## Functions

### fetch

▸ **fetch**(`url`, `init?`): `Promise`<[`Response`](../interfaces/Network.Response.md)\>

**`Description`**

HTTP请求

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `init?` | [`RequestInit`](../interfaces/Network.RequestInit.md) | 请求信息 default:请求信息 |

#### Returns

`Promise`<[`Response`](../interfaces/Network.Response.md)\>

响应信息

___

### generalHttpRequest

▸ **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean`

**`Description`**

通用Http请求

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Http请求
```ts
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.HttpRequestURL.md) | EHttpRequestURL |
| `param` | `string` | string |
| `jsonContent` | `any` | any |
| `requestType` | [`HttpRequestType`](../enums/Network.HttpRequestType.md) | 0是Get 1是Post |

#### Returns

`boolean`

bool

___

### getUrlParameter

▸ **getUrlParameter**(`url`, `parameterName`): `string`

**`Description`**

获取url参数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url |
| `parameterName` | `string` | 参数名 |

#### Returns

`string`

参数值

___

### httpRequestTransmitData

▸ **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType`): `boolean`

**`Description`**

Http请求接口

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) |  请求的回调 |
| `paramUrl` | `string` |  请求的参数和值 |
| `jsonContent` | `string` |  请求数据内容，json格式 |
| `requestType` | [`HttpRequestType`](../enums/Network.HttpRequestType.md) |  请求类型。HttpRequestType枚举值 |

#### Returns

`boolean`

请求是否发送成功

___

### urlDecode

▸ **urlDecode**(`str`): `string`

**`Description`**

url解码

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

解码后的内容

___

### urlEncode

▸ **urlEncode**(`str`): `string`

**`Description`**

url转码

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 内容 |

#### Returns

`string`

转码后的内容
