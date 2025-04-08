[服务](../groups/服务.服务.md) / AnalyticsService

# AnalyticsService <Badge type="tip" text="Class" /> <Score text="AnalyticsService" />

分析服务

## Table of contents

### Methods <Score text="Methods" /> 
| **[create](mw.AnalyticsService.md#create)**(`event`: `string`): [`EventWrapper`](mw.EventWrapper.md) <Badge type="tip" text="client" />  |
| :-----|
| 创建事件埋点|
| **[googleEventTracking](mw.AnalyticsService.md#googleeventtracking)**(`eventName`: `string`, `eventParams?`: `Object`): `void`   |
| 埋点|
| **[googleInit](mw.AnalyticsService.md#googleinit)**(`mId`: `string`): `void`   |
| 谷歌分析工具 （Initialize Google Analytics client）|

## Methods

### create <Score text="create" /> 

• `Static` **create**(`event`): [`EventWrapper`](mw.EventWrapper.md) <Badge type="tip" text="client" />

创建事件埋点

#### Parameters

| `event` `string` | 埋点事件名 range: 在服务端注册过的埋点 |
| :------ | :------ |

#### Returns

| [`EventWrapper`](mw.EventWrapper.md) | 事件埋点对象 |
| :------ | :------ |

::: warning Precautions

埋点名和参数需要与服务端注册的保持一致，不一致的会被丢弃，影响最终数据。

:::

<span style="font-size: 14px;">
使用示例: 在客户端执行如下代码，即可上报玩家登录的埋点事件（需要先在服务端注册该埋点事件）
</span>

```ts
AnalyticsService
      .create('user_signup')
      .put('username', 'john')
      .put('age', 30)
      .put('isPremium', true)
      .send();
```

___

### googleEventTracking <Score text="googleEventTracking" /> 

• `Static` **googleEventTracking**(`eventName`, `eventParams?`): `void` 

埋点

#### Parameters

| `eventName` `string` | 埋点名 range: 不做限制，合理即可 |
| :------ | :------ |
| `eventParams?` `Object` | 埋点参数 default:null range: 不做限制，合理即可 |


___

### googleInit <Score text="googleInit" /> 

• `Static` **googleInit**(`mId`): `void` 

谷歌分析工具 （Initialize Google Analytics client）

#### Parameters

| `mId` `string` |  谷歌分析 ID （Google Analytics measurement ID） range:字符串长度谷歌注册的账号 ID 而定 |
| :------ | :------ |

