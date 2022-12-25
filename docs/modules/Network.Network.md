[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Network](Network.md) / Network

# Namespace: Network

[Network](Network.md).Network

**`Author`**

tengxiao.li

**`Description`**

暴露给用户使用的 Http 请求接口,用户可选的是网络身份(服务器,客户端)

## Table of contents

### Enumerations

- [HttpRequestType](../enums/Network.Network.HttpRequestType.md)
- [HttpRequestURL](../enums/Network.Network.HttpRequestURL.md)

### Interfaces

- [RequestInit](../interfaces/Network.Network.RequestInit.md)
- [Response](../interfaces/Network.Network.Response.md)

### Type Aliases

- [HttpResponse](Network.Network.md#httpresponse)
- [TransactionType](Network.Network.md#transactiontype)

### Functions

- [fetch](Network.Network.md#fetch)
- [generalHttpRequest](Network.Network.md#generalhttprequest)
- [getUrlParameter](Network.Network.md#geturlparameter)
- [httpRequestTransmitData](Network.Network.md#httprequesttransmitdata)
- [urlDecode](Network.Network.md#urldecode)
- [urlEncode](Network.Network.md#urlencode)

## Type Aliases

### HttpResponse

Ƭ **HttpResponse**: (`result`: `boolean`, `content`: `string`, `responseCode`: `number`) => `void`

#### Type declaration

▸ (`result`, `content`, `responseCode`): `void`

**`Description`**

Http 请求的回调消息格式

**`Precautions`**

无需主动销毁，生命周期由 UObject 管理

##### Parameters

| Name           | Type      | Description       |
| :------------- | :-------- | :---------------- |
| `result`       | `boolean` | usage: 请求否成功 |
| `content`      | `string`  | usage: 消息内容   |
| `responseCode` | `number`  | usage: 状态码     |

##### Returns

`void`

#### Defined in

Network/index.d.ts:157

---

### TransactionType

Ƭ **TransactionType**: (`isSuccess`: `boolean`, `content`: `string`) => `void`

#### Type declaration

▸ (`isSuccess`, `content`): `void`

**`Description`**

商城通信回调消息格式

##### Parameters

| Name        | Type      | Description     |
| :---------- | :-------- | :-------------- |
| `isSuccess` | `boolean` | usage: 通信结果 |
| `content`   | `string`  | usage: 消息内容 |

##### Returns

`void`

#### Defined in

Network/index.d.ts:167

## Functions

### fetch

▸ **fetch**(`url`, `init?`): `Promise`<[`Response`](../interfaces/Network.Network.Response.md)\>

**`Description`**

HTTP 请求

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                                          | Description                     |
| :------ | :------------------------------------------------------------ | :------------------------------ |
| `url`   | `string`                                                      | usage:url                       |
| `init?` | [`RequestInit`](../interfaces/Network.Network.RequestInit.md) | usage:请求信息 default:请求信息 |

#### Returns

`Promise`<[`Response`](../interfaces/Network.Network.Response.md)\>

响应信息

#### Defined in

Network/index.d.ts:55

---

### generalHttpRequest

▸ **generalHttpRequest**(`response`, `requestUrl`, `param`, `jsonContent`, `requestType`): `boolean`

**`Author`**

tengxiao.li

**`Description`**

通用 Http 请求

**`Effect`**

调用端生效

**`Example`**

使用示例:发送 Http 请求

```
generalHttpRequest(Response,Url,Param,JsonContent)
```

#### Parameters

| Name          | Type                                                             | Description              |
| :------------ | :--------------------------------------------------------------- | :----------------------- |
| `response`    | [`HttpResponse`](Network.Network.md#httpresponse)                | usage:OnHttpResponse     |
| `requestUrl`  | [`HttpRequestURL`](../enums/Network.Network.HttpRequestURL.md)   | usage:EHttpRequestURL    |
| `param`       | `string`                                                         | usage:string             |
| `jsonContent` | `any`                                                            | usage:any                |
| `requestType` | [`HttpRequestType`](../enums/Network.Network.HttpRequestType.md) | usage:0 是 Get 1 是 Post |

#### Returns

`boolean`

bool

#### Defined in

Network/index.d.ts:199

---

### getUrlParameter

▸ **getUrlParameter**(`url`, `parameterName`): `string`

**`Description`**

获取 url 参数

**`Effect`**

调用端生效

#### Parameters

| Name            | Type     | Description  |
| :-------------- | :------- | :----------- |
| `url`           | `string` | usage:url    |
| `parameterName` | `string` | usage:参数名 |

#### Returns

`string`

参数值

#### Defined in

Network/index.d.ts:77

---

### httpRequestTransmitData

▸ **httpRequestTransmitData**(`response`, `paramUrl`, `jsonContent`, `requestType`): `boolean`

**`Description`**

Http 请求接口

**`Effect`**

调用端生效

#### Parameters

| Name          | Type                                                             | Description                             |
| :------------ | :--------------------------------------------------------------- | :-------------------------------------- |
| `response`    | [`HttpResponse`](Network.Network.md#httpresponse)                | usage: 请求的回调                       |
| `paramUrl`    | `string`                                                         | usage: 请求的参数和值                   |
| `jsonContent` | `string`                                                         | usage: 请求数据内容，json 格式          |
| `requestType` | [`HttpRequestType`](../enums/Network.Network.HttpRequestType.md) | usage: 请求类型。HttpRequestType 枚举值 |

#### Returns

`boolean`

请求是否发送成功

#### Defined in

Network/index.d.ts:177

---

### urlDecode

▸ **urlDecode**(`str`): `string`

**`Description`**

url 解码

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `str` | `string` | usage:内容  |

#### Returns

`string`

解码后的内容

#### Defined in

Network/index.d.ts:69

---

### urlEncode

▸ **urlEncode**(`str`): `string`

**`Description`**

url 转码

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description |
| :---- | :------- | :---------- |
| `str` | `string` | usage:内容  |

#### Returns

`string`

转码后的内容

#### Defined in

Network/index.d.ts:62
