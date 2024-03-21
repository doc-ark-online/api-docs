[服务](../groups/服务.服务.md) / AnalyticsService

# AnalyticsService <Badge type="tip" text="Class" /> <Score text="AnalyticsService" />

分析服务

## Table of contents

### Methods <Score text="Methods" /> 
| **[googleEventTracking](mw.AnalyticsService.md#googleeventtracking)**(`eventName`: `string`, `eventParams?`: `Object`): `void`   |
| :-----|
| 埋点|
| **[googleInit](mw.AnalyticsService.md#googleinit)**(`mId`: `string`): `void`   |
| 谷歌分析工具 （Initialize Google Analytics client）|

## Methods

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

