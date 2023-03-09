[Monetization](../groups/Monetization.Monetization.md) / AdsService

# AdsService <Badge type="tip" text="Class" /> <Score text="AdsService" />

**`Instance`**

广告服务，支持激励/插屏类型

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[isActive](Service.AdsService.md#isactive)**(`adsType`: [`AdsType`](../enums/Service.AdsType.md)): `boolean` <br> 广告是否激活,PC和PIE上始终返回false|
| **[isReady](Service.AdsService.md#isready)**(`adsType`: [`AdsType`](../enums/Service.AdsType.md), `callback`: (`isReady`: `boolean`) => `void`): `void` <br> 广告是否准备好|
| **[show](Service.AdsService.md#show)**(`adsType`: [`AdsType`](../enums/Service.AdsType.md), `callback`: (`state`: [`AdsState`](../enums/Service.AdsState.md)) => `void`): `void` <br> 展示广告|
| **[getInstance](Service.AdsService.md#getinstance)**(): [`AdsService`](Service.AdsService.md) <br> 获取广告服务管理器全局实例|

## Methods

### isActive <Score text="isActive" /> 

• **isActive**(`adsType`): `boolean` <Badge type="tip" text="client" />

广告是否激活,PC和PIE上始终返回false


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.AdsType.md) |  广告类型 |

#### Returns

`boolean`

true:该类型广告已激活，false:该类型广告未激活

___

### isReady <Score text="isReady" /> 

• **isReady**(`adsType`, `callback`): `void` <Badge type="tip" text="client" />

广告是否准备好


::: warning Precautions

结果不准确，可能在广告准备好的情况返回false

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.AdsType.md) |  广告类型 |
| `callback` | (`isReady`: `boolean`) => `void` |  接收广告事件的回调 |


___

### show <Score text="show" /> 

• **show**(`adsType`, `callback`): `void` <Badge type="tip" text="client" />

展示广告

::: warning Precautions

展示广告，手机会进入Pause状态，可以用Events.addOnPauseListener来进行捕获

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/Service.AdsType.md) |  广告类型 |
| `callback` | (`state`: [`AdsState`](../enums/Service.AdsState.md)) => `void` |  广告播放结果回调 |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`AdsService`](Service.AdsService.md) 

获取广告服务管理器全局实例


#### Returns

[`AdsService`](Service.AdsService.md)

广告服务管理器全局实例
