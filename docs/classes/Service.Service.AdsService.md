[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / AdsService

# Class: AdsService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).AdsService

**`Author`**

huipeng.jia & lei.zhao

**`Instance`**

**`Description`**

广告服务，支持激励/插屏类型

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage: 客户端

## Table of contents

### Constructors

- [constructor](Service.Service.AdsService.md#constructor)

### Methods

- [isActive](Service.Service.AdsService.md#isactive)
- [isReady](Service.Service.AdsService.md#isready)
- [show](Service.Service.AdsService.md#show)
- [getInstance](Service.Service.AdsService.md#getinstance)

## Constructors

### constructor

• **new AdsService**()

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
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) | usage: 广告类型 |

#### Returns

`boolean`

boolean

#### Defined in

Service/index.d.ts:215

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
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) | usage: 广告类型 |
| `callback` | (`isReady`: `boolean`) => `void` | usage: 接收广告事件的回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:208

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
| `adsType` | [`AdsType`](../enums/Service.Service.AdsType.md) | usage: 广告类型 |
| `callback` | (`state`: [`AdsState`](../enums/Service.Service.AdsState.md)) => `void` | usage: 广告播放结果回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:227

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

#### Defined in

Service/index.d.ts:200
