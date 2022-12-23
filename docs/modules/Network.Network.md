[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Network](Network.md) / Network

# Namespace: Network

[Network](Network.md).Network

**`Author`**

tengxiao.li

**`Description`**

暴露给用户使用的Http请求接口,用户可选的是网络身份(服务器,客户端)

## Table of contents

### Enumerations

- [HttpRequestURL](../enums/Network.Network.HttpRequestURL.md)

### Interfaces

- [RequestInit](../interfaces/Network.Network.RequestInit.md)
- [Response](../interfaces/Network.Network.Response.md)

### Type Aliases

- [HttpResponse](Network.Network.md#httpresponse)
- [TransactionType](Network.Network.md#transactiontype)

### Functions

- [clientHttpGet](Network.Network.md#clienthttpget)
- [clientHttpPost](Network.Network.md#clienthttppost)
- [clientHttpRequest](Network.Network.md#clienthttprequest)
- [fetch](Network.Network.md#fetch)
- [generalHttpRequest](Network.Network.md#generalhttprequest)
- [getUrlParameter](Network.Network.md#geturlparameter)
- [httpRequestTransmitData](Network.Network.md#httprequesttransmitdata)
- [serverHttpGet](Network.Network.md#serverhttpget)
- [serverHttpPost](Network.Network.md#serverhttppost)
- [serverHttpRequest](Network.Network.md#serverhttprequest)
- [urlDecode](Network.Network.md#urldecode)
- [urlEncode](Network.Network.md#urlencode)

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
| `result` | `boolean` | usage: 请求否成功 |
| `content` | `string` | usage: 消息内容 |
| `responseCode` | `number` | usage: 状态码 |

##### Returns

`void`

#### Defined in

Network/index.d.ts:144

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
| `isSuccess` | `boolean` | usage: 通信结果 |
| `content` | `string` | usage: 消息内容 |

##### Returns

`void`

#### Defined in

Network/index.d.ts:154

## Functions

### clientHttpGet

▸ **clientHttpGet**(`response`, `requestUrl`, `param`, `jsonContent`): `boolean`

**`Author`**

李腾骁

**`Description`**

Get请求,外部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Get请求
```
clientHttpGet(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:185

___

### clientHttpPost

▸ **clientHttpPost**(`response`, `requestUrl`, `param`, `jsonContent`): `boolean`

**`Author`**

李腾骁

**`Description`**

Post请求,外部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Post请求
```
clientHttpPost(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:206

___

### clientHttpRequest

▸ **clientHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean`

**`Author`**

李腾骁

**`Description`**

Http请求,外部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Http请求
```
clientHttpRequest(Response,Url,Param,JsonContent,0/1)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |
| `requestType` | `number` | usage:number |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:270

___

### fetch

▸ **fetch**(`url`, `init?`): `Promise`<[`Response`](../interfaces/Network.Network.Response.md)\>

**`Description`**

HTTP请求

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | usage:url |
| `init?` | [`RequestInit`](../interfaces/Network.Network.RequestInit.md) | usage:请求信息 default:请求信息 |

#### Returns

`Promise`<[`Response`](../interfaces/Network.Network.Response.md)\>

响应信息

#### Defined in

Network/index.d.ts:55

___

### generalHttpRequest

▸ **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean`

**`Author`**

李腾骁

**`Description`**

通用Http请求

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Http请求
```
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |
| `requestType` | `number` | usage:number |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:316

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
| `url` | `string` | usage:url |
| `parameterName` | `string` | usage:参数名 |

#### Returns

`string`

参数值

#### Defined in

Network/index.d.ts:77

___

### httpRequestTransmitData

▸ **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType?`): `boolean`

**`Description`**

Http请求接口

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage: 请求的回调 |
| `paramUrl` | `string` | usage: 请求的参数和值 |
| `jsonContent` | `string` | usage: 请求数据内容，json格式 |
| `requestType?` | `number` | usage: 请求类型。 0-GET，1-POST。 default: 0 |

#### Returns

`boolean`

请求是否发送成功

#### Defined in

Network/index.d.ts:164

___

### serverHttpGet

▸ **serverHttpGet**(`response`, `requestUrl`, `param`, `jsonContent`): `boolean`

**`Author`**

李腾骁

**`Description`**

Get请求,内部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Get请求
```
serverHttpGet(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:227

___

### serverHttpPost

▸ **serverHttpPost**(`response`, `requestUrl`, `param`, `jsonContent`): `boolean`

**`Author`**

李腾骁

**`Description`**

Post请求,外部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Post请求
```
serverHttpPost(Response,Url,Param,JsonContent)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:248

___

### serverHttpRequest

▸ **serverHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean`

**`Author`**

李腾骁

**`Description`**

Http请求,内部发送

**`Effect`**

调用端生效

**`Example`**

使用示例:发送Http请求
```
serverHttpRequest(Response,Url,Param,JsonContent,0/1)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`HttpResponse`](Network.Network.md#httpresponse) | usage:OnHttpResponse |
| `requestUrl` | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md) | usage:EHttpRequestURL |
| `param` | `string` | usage:string |
| `jsonContent` | `any` | usage:any |
| `requestType` | `number` | usage:number |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:293

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
| `str` | `string` | usage:内容 |

#### Returns

`string`

解码后的内容

#### Defined in

Network/index.d.ts:69

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
| `str` | `string` | usage:内容 |

#### Returns

`string`

转码后的内容

#### Defined in

Network/index.d.ts:62
