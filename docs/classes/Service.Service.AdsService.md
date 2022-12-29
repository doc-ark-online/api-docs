[Service](../modules/Service.Service.md) / AdsService

# AdsService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

广告服务，支持激励/插屏类型

**`Precautions`**

单例类，请使用getInstance获取对象

## Table of contents

| Methods |
| :-----|
| **[isActive](Service.Service.AdsService.md#isactive)**([`AdsType`](../enums/Service.Service.AdsType.md)): `boolean` <br> 广告是否激活|
| **[isReady](Service.Service.AdsService.md#isready)**([`AdsType`](../enums/Service.Service.AdsType.md), (`isReady`: `boolean`) => `void`): `void` <br> 广告是否准备好|
| **[show](Service.Service.AdsService.md#show)**([`AdsType`](../enums/Service.Service.AdsType.md), (`state`: [`AdsState`](../enums/Service.Service.AdsState.md)) => `void`): `void` <br> 展示广告|
| **[getInstance](Service.Service.AdsService.md#getinstance)**(): [`AdsService`](Service.Service.AdsService.md) <br> 获取广告服务管理器全局实例|

## Methods

### isActive

▸ **isActive**(`adsType`): `boolean`

**`Description`**

广告是否激活

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) |  广告类型 |

#### Returns

`boolean`

true:该类型广告已激活，false:该类型广告未激活

___

### isReady

▸ **isReady**(`adsType`, `callback`): `void`

**`Description`**

广告是否准备好

**`Effect`**

只在客户端调用生效

**`Precautions`**

结果不准确，可能在广告准备好的情况返回false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) |  广告类型 |
| `callback` | (`isReady`: `boolean`) => `void` |  接收广告事件的回调 |

#### Returns

`void`

___

### show

▸ **show**(`adsType`, `callback`): `void`

**`Description`**

展示广告

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) |  广告类型 |
| `callback` | (`state`: [`AdsState`](../enums/Service.Service.AdsState.md)) => `void` |  广告播放结果回调 |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`AdsService`](Service.Service.AdsService.md)

**`Description`**

获取广告服务管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`AdsService`](Service.Service.AdsService.md)

广告服务管理器全局实例
