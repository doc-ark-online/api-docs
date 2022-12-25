[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / AnalyticsService

# Class: AnalyticsService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).AnalyticsService

**`Author`**

xiangkun.sun

**`Instance`**

**`Description`**

分析服务

**`Precautions`**

单例类，请使用 instance 获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.AnalyticsService.md#constructor)

### Methods

- [getInstance](Service.Service.AnalyticsService.md#getinstance)
- [googleEventTracking](Service.Service.AnalyticsService.md#googleeventtracking)
- [googleInit](Service.Service.AnalyticsService.md#googleinit)

## Constructors

### constructor

• **new AnalyticsService**()

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

#### Defined in

Service/index.d.ts:239

---

### googleEventTracking

▸ `Static` **googleEventTracking**(`eventName`, `eventParams?`): `void`

**`Description`**

埋点

**`Effect`**

调用端生效

#### Parameters

| Name           | Type     | Description                 |
| :------------- | :------- | :-------------------------- |
| `eventName`    | `string` | usage:埋点名                |
| `eventParams?` | `Object` | usage:埋点参数 default:选填 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:252

---

### googleInit

▸ `Static` **googleInit**(`mId`): `void`

**`Description`**

Initialize Google Analytics client

**`Effect`**

调用端生效

#### Parameters

| Name  | Type     | Description                           |
| :---- | :------- | :------------------------------------ |
| `mId` | `string` | usage:Google Analytics measurement ID |

#### Returns

`void`

#### Defined in

Service/index.d.ts:245
