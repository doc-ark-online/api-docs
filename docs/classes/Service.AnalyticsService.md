[Service](../modules/Service.Service.md) / AnalyticsService

# AnalyticsService <Badge type="tip" text="Class" /> <Score text="AnalyticsService" />

**`Groups`**

DEBUGGING

**`Instance`**

分析服务

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[getInstance](Service.AnalyticsService.md#getinstance)**(): [`AnalyticsService`](Service.AnalyticsService.md) <br> 分析服务全局实例|
| **[googleEventTracking](Service.AnalyticsService.md#googleeventtracking)**(`string`, `Object`): `void` <br> 埋点|
| **[googleInit](Service.AnalyticsService.md#googleinit)**(`string`): `void` <br> Initialize Google Analytics client|

## Methods

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`AnalyticsService`](Service.AnalyticsService.md) <Badge type="tip" text="other" />

分析服务全局实例


#### Returns

[`AnalyticsService`](Service.AnalyticsService.md)

分析服务全局实例

___

### googleEventTracking <Score text="googleEventTracking" /> 

• `Static` **googleEventTracking**(`eventName`, `eventParams?`): `void` <Badge type="tip" text="other" />

埋点


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 埋点名 |
| `eventParams?` | `Object` | 埋点参数 default:选填 |


___

### googleInit <Score text="googleInit" /> 

• `Static` **googleInit**(`mId`): `void` <Badge type="tip" text="other" />

Initialize Google Analytics client


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mId` | `string` | Google Analytics measurement ID |

