[Service](../modules/Service.Service.md) / AnalyticsService

# AnalyticsService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

分析服务

**`Precautions`**

单例类，请使用instance获取对象

## Table of contents

| Methods |
| :-----|
| **[getInstance](Service.Service.AnalyticsService.md#getinstance)**(): [`AnalyticsService`](Service.Service.AnalyticsService.md) <br> 分析服务全局实例|
| **[googleEventTracking](Service.Service.AnalyticsService.md#googleeventtracking)**(`string`, `Object`): `void` <br> 埋点|
| **[googleInit](Service.Service.AnalyticsService.md#googleinit)**(`string`): `void` <br> Initialize Google Analytics client|

## Methods

### getInstance

▸ `Static` **getInstance**(): [`AnalyticsService`](Service.Service.AnalyticsService.md)

**`Description`**

分析服务全局实例

**`Effect`**

调用端生效

#### Returns

[`AnalyticsService`](Service.Service.AnalyticsService.md)

分析服务全局实例

___

### googleEventTracking

▸ `Static` **googleEventTracking**(`eventName`, `eventParams?`): `void`

**`Description`**

埋点

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 埋点名 |
| `eventParams?` | `Object` | 埋点参数 default:选填 |

#### Returns

`void`

___

### googleInit

▸ `Static` **googleInit**(`mId`): `void`

**`Description`**

Initialize Google Analytics client

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mId` | `string` | Google Analytics measurement ID |

#### Returns

`void`
