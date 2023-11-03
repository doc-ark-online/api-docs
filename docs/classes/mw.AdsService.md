[MONETIZATION](../groups/MONETIZATION.MONETIZATION.md) / AdsService

# AdsService <Badge type="tip" text="Class" /> <Score text="AdsService" />

广告服务，支持激励/插屏类型

::: warning Precautions

需先在开发者后台“游戏服务”中接入广告，才能正常播出。请注意，广告只能在真机上播放，开发环境无法播放。

:::

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[showTimeout](mw.AdsService.md#showtimeout)**(): `number`  |
| :-----|
| 设置广告超时时间|

### Methods <Score text="Methods" /> 
| **[isActive](mw.AdsService.md#isactive)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md)): `boolean`  |
| :-----|
| 广告是否激活,PC上始终返回false|
| **[isReady](mw.AdsService.md#isready)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md), `callback`: (`isReady`: `boolean`) => `void`): `void`  |
| 广告是否准备好|
| **[showAd](mw.AdsService.md#showad)**(`adsType`: [`AdsType`](../enums/mw.AdsType.md), `callback`: (`isSuccess`: `boolean`) => `void`): `void`  |
| 展示广告，手机会进入Pause状态，可以用Events.addOnPauseListener来进行捕获|

## Accessors

### showTimeout <Score text="showTimeout" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **showTimeout**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **showTimeout**(`time`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取广告超时时间


#### Returns

| `number` | 广告超时时长，单位为秒 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置广告超时时间


#### Parameters

| `time` `number` |  超时时长，单位为秒 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### isActive <Score text="isActive" /> 

• `Static` **isActive**(`adsType`): `boolean` <Badge type="tip" text="client" />

广告是否激活,PC上始终返回false

#### Parameters

| `adsType` [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |
| :------ | :------ |

#### Returns

| `boolean` | true:该类型广告已激活，false:该类型广告未激活 |
| :------ | :------ |


___

### isReady <Score text="isReady" /> 

• `Static` **isReady**(`adsType`, `callback`): `void` <Badge type="tip" text="client" />

广告是否准备好

#### Parameters

| `adsType` [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |
| :------ | :------ |
| `callback` (`isReady`: `boolean`) => `void` |  接收广告事件的回调 |



::: warning Precautions

结果不准确，可能在广告准备好的情况返回false

:::

___

### showAd <Score text="showAd" /> 

• `Static` **showAd**(`adsType`, `callback`): `void` <Badge type="tip" text="client" />

展示广告，手机会进入Pause状态，可以用Events.addOnPauseListener来进行捕获

#### Parameters

| `adsType` [`AdsType`](../enums/mw.AdsType.md) |  广告类型 |
| :------ | :------ |
| `callback` (`isSuccess`: `boolean`) => `void` |  广告播放结果回调 |



<span style="font-size: 14px;">
使用示例:创建一个名为AdsExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏并关联广告位，手机上运行游戏，每10秒会自动播放一次广告，并会在玩家头顶显示广告播放状态与结果
</span>

```ts
@Component
export default class AdsExample extends mw.Script {

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
        let player = await mw.Player.localPlayer;
        if (!AdsService.isActive(type)) {
            player.character.name = type == AdsType.Reward ? "激励广告未激活" : "插屏广告未激活";
            return;
        }
        AdsService.isReady(type, (isReady) => {
            if (!isReady) {
                player.character.name = type == AdsType.Reward ? "激励广告未准备好" : "插屏广告未准备好";
                return;
            }
            AdsService.showAd(type, async (isSuccess) => {
                if (isSuccess) player.character.name = type == AdsType.Reward ? "激励广告播放成功" : "插屏广告播放成功";
                await TimeUtil.delaySecond(10);
                type == AdsType.Reward ? this.playAd(AdsType.Interstitial) : this.playAd(AdsType.Reward);
            });
        })
    }

}
```
