[服务](../groups/服务.服务.md) / AdsService

# AdsService <Badge type="tip" text="Class" /> <Score text="AdsService" />

广告服务

::: warning Precautions

需先在开发者后台“游戏服务”中接入广告，才能正常播出。请注意，广告只能在真机上播放，开发环境无法播放。

:::

## Table of contents

### Methods <Score text="Methods" /> 
| **[isReady](mw.AdsService.md#isready)**(`callback`: (`isReady`: `boolean`) => `void`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 广告是否准备好|

## Methods

___

### isReady <Score text="isReady" /> 

• `Static` **isReady**(`callback`): `void` <Badge type="tip" text="client" />

广告是否准备好

#### Parameters

| `callback` (`isReady`: `boolean`) => `void` |  接收广告事件的回调 |
| :------ | :------ |


::: warning Precautions

结果不准确，可能在广告准备好的情况返回false
