[UTILITY](../groups/Core.UTILITY.md) / AnalyticsService

# AnalyticsService <Badge type="tip" text="Class" /> <Score text="AnalyticsService" />

**`Instance`**

分析服务

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[googleEventTracking](mw.AnalyticsService.md#googleeventtracking)**(`eventName`: `string`, `eventParams?`: `Object`): `void` <br> 埋点|
| **[googleInit](mw.AnalyticsService.md#googleinit)**(`mId`: `string`): `void` <br> Initialize Google Analytics client|

## Methods

### googleEventTracking <Score text="googleEventTracking" /> 

• `Static` **googleEventTracking**(`eventName`, `eventParams?`): `void` 

埋点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 埋点名 |
| `eventParams?` | `Object` | 埋点参数 default:选填 |


___

### googleInit <Score text="googleInit" /> 

• `Static` **googleInit**(`mId`): `void` 

Initialize Google Analytics client


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mId` | `string` | Google Analytics measurement ID |

