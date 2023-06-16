[Monetization](../groups/Core.Monetization.md) / AdsService

# AdsService <Badge type="tip" text="Class" /> <Score text="AdsService" />

**`Instance`**

广告服务，支持激励/插屏类型

::: warning Precautions

单例类，请使用getInstance获取对象。 纯C端脚本，不支持在双端或者S端调用。 目前仅支持233app运行游戏后播放广告，不支持在pc上运行PIE播放。 且需先在开发者后台->游戏服务里接入广告，才能播出广告

:::

## Table of contents

| Accessors |
| :-----|
| **[showTimeout](mw.AdsService.md#showtimeout)**(): `number` <br> 获取广告超时时间|

| Methods |
| :-----|
| **[isActive](mw.AdsService.md#isactive)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md)): `boolean` <br> 广告是否激活,PC上始终返回false|
| **[isReady](mw.AdsService.md#isready)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md), `callback`: (`isReady`: `boolean`) => `void`): `void` <br> 广告是否准备好|
| **[showAd](mw.AdsService.md#showad)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md), `callback`: (`isSuccess`: `boolean`) => `void`): `void` <br> 展示广告，手机会进入Pause状态，可以用Events.addOnPauseListener来进行捕获|
| **[getInstance](mw.AdsService.md#getinstance)**(): [`AdsService`](mw.AdsService.md) <br> 获取广告服务管理器全局实例|

## Accessors

### showTimeout <Score text="showTimeout" /> 

• `get` **showTimeout**(): `number` <Badge type="tip" text="client" />

获取广告超时时间


#### Returns

`number`

广告超时时长，单位为秒

• `set` **showTimeout**(`time`): `void` <Badge type="tip" text="client" />

设置广告超时时间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  超时时长，单位为秒 |


## Methods

### isActive <Score text="isActive" /> 

• **isActive**(`adsType`): `boolean` <Badge type="tip" text="client" />

广告是否激活,PC上始终返回false


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |

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
| `adsType` | [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |
| `callback` | (`isReady`: `boolean`) => `void` |  接收广告事件的回调 |


___

### showAd <Score text="showAd" /> 

• **showAd**(`adsType`, `callback`): `void` <Badge type="tip" text="client" />

展示广告，手机会进入Pause状态，可以用Events.addOnPauseListener来进行捕获


使用示例:创建一个名为AdsExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏并关联广告位，手机上运行游戏，每10秒会自动播放一次广告，并会在玩家头顶显示广告播放状态与结果
```ts
@Core.Class
export default class AdsExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        await TimeUtil.delaySecond(10);
        this.playAd(AdsType.Reward);
    }

    //播放广告
    private async playAd(type: AdsType): Promise<void> {
        let player = await asyncGetCurrentPlayer();
        if (!AdsService.getInstance().isActive(type)) {
            player.character.characterName = type == AdsType.Reward ? "激励广告未激活" : "插屏广告未激活";
            return;
        }
        AdsService.getInstance().isReady(type, (isReady) => {
            if (!isReady) {
                player.character.characterName = type == AdsType.Reward ? "激励广告未准备好" : "插屏广告未准备好";
                return;
            }
            AdsService.getInstance().showAd(type, async (isSuccess) => {
                if (isSuccess) player.character.characterName = type == AdsType.Reward ? "激励广告播放成功" : "插屏广告播放成功";
                await TimeUtil.delaySecond(10);
                type == AdsType.Reward ? this.playAd(AdsType.Interstitial) : this.playAd(AdsType.Reward);
            });
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `adsType` | [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |
| `callback` | (`isSuccess`: `boolean`) => `void` |  广告播放结果回调 |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`AdsService`](mw.AdsService.md) 

获取广告服务管理器全局实例


#### Returns

[`AdsService`](mw.AdsService.md)

广告服务管理器全局实例
