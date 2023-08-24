[MONETIZATION](../groups/Core.MONETIZATION.md) / PurchaseService

# PurchaseService <Badge type="tip" text="Class" /> <Score text="PurchaseService" />

应用内购服务

## Table of contents

| Accessors |
| :-----|
| **[onArkBalanceUpdated](mw.PurchaseService.md#onarkbalanceupdated)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Core.mw.md#onarkbalanceupdated)\> <br> 获取Ark币余额更新的委托|
| **[onOrderDelivered](mw.PurchaseService.md#onorderdelivered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Core.mw.md#onorderdelivered)\> <br> 获取订单发货的委托|
| **[onPremiumMemberOrderDelivered](mw.PurchaseService.md#onpremiummemberorderdelivered)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Core.mw.md#onkeyconsume)\> <br> 获取订单发货的委托|
| **[onPremiumMemberStatusUpdate](mw.PurchaseService.md#onpremiummemberstatusupdate)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`result`: `boolean`) => `void`\> <br> 获取大会员状态更新时触发的委托|

| Methods |
| :-----|
| **[consumeKey](mw.PurchaseService.md#consumekey)**(`boxId`: `string`, `number`: `number`, `keyType`: `number`, `placeOrderResult`: (`status`: [`consumeKeyStatus`](../enums/mw.consumeKeyStatus.md)) => `void`): `void` <br> 大会员开宝箱消耗金钥匙|
| **[findKeyUsageHistory](mw.PurchaseService.md#findkeyusagehistory)**(`currentPage`: `number`, `pageSize`: `number`, `historyResult`: (`total`: `number`, `currentPage`: `number`, `bill`: [`keyUsageInfo`](../modules/Core.mw.md#keyusageinfo)[]) => `void`): `void` <br> 分页查询大会员使用钥匙的历史记录|
| **[getArkBalance](mw.PurchaseService.md#getarkbalance)**(): `void` <br> 获取Ark币余额|
| **[getUserKeyNumber](mw.PurchaseService.md#getuserkeynumber)**(`[getUserKeyNumber](mw.PurchaseService.md#getuserkeynumber)Result`, `keyType?`: `number`): `void` <br> 获取用户剩余钥匙数量|
| **[isPremiumMember](mw.PurchaseService.md#ispremiummember)**(`[isPremiumMember](mw.PurchaseService.md#ispremiummember)Result`): `void` <br> 获取用户是否是大会员|
| **[isPremiumMemberSupported](mw.PurchaseService.md#ispremiummembersupported)**(`isSupportedResult`: (`result`: `boolean`) => `void`): `void` <br> 获取用户使用软件版本是否有大会员功能|
| **[openPremiumMemberPurchasePage](mw.PurchaseService.md#openpremiummemberpurchasepage)**(): `void` <br> 跳转会员充值页面|
| **[placeOrder](mw.PurchaseService.md#placeorder)**(`commodityId`: `string`, `amount`: `number`, `[placeOrder](mw.PurchaseService.md#placeorder)Result`): `void` <br> 下单指定数量的指定商品|

## Accessors

### onArkBalanceUpdated <Score text="onArkBalanceUpdated" /> 

• `Static` `get` **onArkBalanceUpdated**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Core.mw.md#onarkbalanceupdated)\> <Badge type="tip" text="client" />

获取Ark币余额更新的委托


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Core.mw.md#onarkbalanceupdated)\>

Ark币余额更新的委托

___

### onOrderDelivered <Score text="onOrderDelivered" /> 

• `Static` `get` **onOrderDelivered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Core.mw.md#onorderdelivered)\> <Badge type="tip" text="server" />

获取订单发货的委托


::: warning Precautions

1. 只在支持IAP的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

:::

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Core.mw.md#onorderdelivered)\>

订单发货的委托

___

### onPremiumMemberOrderDelivered <Score text="onPremiumMemberOrderDelivered" /> 

• `Static` `get` **onPremiumMemberOrderDelivered**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Core.mw.md#onkeyconsume)\> <Badge type="tip" text="server" />

获取订单发货的委托


::: warning Precautions

1. 只在支持大会员的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

:::

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Core.mw.md#onkeyconsume)\>

订单发货的委托

___

### onPremiumMemberStatusUpdate <Score text="onPremiumMemberStatusUpdate" /> 

• `Static` `get` **onPremiumMemberStatusUpdate**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`result`: `boolean`) => `void`\> <Badge type="tip" text="client" />

获取大会员状态更新时触发的委托


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<(`result`: `boolean`) => `void`\>

大会员状态更新时触发的委托

## Methods

### consumeKey <Score text="consumeKey" /> 

• `Static` **consumeKey**(`boxId`, `number`, `keyType`, `placeOrderResult`): `void` <Badge type="tip" text="client" />

大会员开宝箱消耗金钥匙


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

使用示例: 需要先在服务端监听发货信息，扣除钥匙时会判断服务端是否监听
```ts
if (SystemUtil.isServer()) {
     console.log("监听发货");
     //发货监听
     mw.PurchaseService.onPremiumMemberOrderDelivered.add((
          playerController: mw.Player,
          orderId: string,
          boxId: string,
          amount: number,
          confirmOrder: (bReceived: boolean) => void
     ) => {
          mw.Event.dispatchToClient(playerController, orderId, boxId, amount);
          //确认收货
          confirmOrder(true);
     });
}

// 扣除钥匙
mw.PurchaseService.consumeKey("1000", 1, 1, (status : mw.consumeKeyStatus) => {
     console.log("consumeKey status : " + status);
     if (status == mw.consumeKeyStatus.Success) {
          console.log("下单成功");
     } else if (status == mw.consumeKeyStatus.PremiumMemberNotSupported) {
          console.log("不支持大会员");
     } else if (status == mw.consumeKeyStatus.NotPremiumMember) {
          console.log("不是大会员");
     } else if (status == mw.consumeKeyStatus.InsufficientKeys) {
          console.log("钥匙不足");
     } else if (status == mw.consumeKeyStatus.Error) {
          console.log("扣除失败");
     }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boxId` | `string` | 宝箱ID，代表一种福利，暂时自定义id。后续会在开发者平台配制 |
| `number` | `number` | 领取的宝箱数量 default: 1 |
| `keyType` | `number` | 钥匙类型，当前只有一种钥匙类型值为1 default: 1 |
| `placeOrderResult` | (`status`: [`consumeKeyStatus`](../enums/mw.consumeKeyStatus.md)) => `void` | 订单结果。status大会员扣除钥匙下单状态 |


___

### findKeyUsageHistory <Score text="findKeyUsageHistory" /> 

• `Static` **findKeyUsageHistory**(`currentPage`, `pageSize`, `historyResult`): `void` 

分页查询大会员使用钥匙的历史记录


使用示例:将代码片段放入脚本中即可
```ts
mw.PurchaseService.findKeyUsageHistory(1, 100, (total : number, currentPage : number, bills : mw.keyUsageInfo[]) => {
    console.log("bill len : " + bills.length);
    for(let bill of bills)
    {
        console.log("bill orderId : " + bill.orderId);
        console.log("bill boxId : " + bill.boxId);
        console.log("bill number : " + bill.number);
        console.log("bill consumeTime : " + bill.consumeTime);
    }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentPage` | `number` | 查找第几页 type:整形 range:1-65535 |
| `pageSize` | `number` | 每页大小 type:整形 range:1-100 |
| `historyResult` | (`total`: `number`, `currentPage`: `number`, `bill`: [`keyUsageInfo`](../modules/Core.mw.md#keyusageinfo)[]) => `void` | 查询结果回调函数，total总页数为-1时表示查找失败，currentPage查找第几页，bill查询结果 |


___

### getArkBalance <Score text="getArkBalance" /> 

• `Static` **getArkBalance**(): `void` <Badge type="tip" text="client" />

获取Ark币余额


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::

使用示例:创建一个名为PurchaseExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，5秒后会显示Ark币余额
```ts
@Component
export default class PurchaseExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await  mw.Player.localPlayer;
        await TimeUtil.delaySecond(5);
        let arkCount = PurchaseService.getArkBalance();
        player.character.name = "ArkCount: " + arkCount;
    }
}
`


___

### getUserKeyNumber <Score text="getUserKeyNumber" /> 

• `Static` **getUserKeyNumber**(`getUserKeyNumberResult`, `keyType?`): `void` <Badge type="tip" text="client" />

获取用户剩余钥匙数量


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

使用示例:创建一个名为PurchaseExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，可以看到当前用户剩余钥匙数量
```
@Component
export default class PurchaseExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        PurchaseService.getUserKeyNumber(keyNumber => {
            player.character.characterName = "当前用户剩余钥匙数量：", keyNumber.toString();
        })
    }
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getUserKeyNumberResult` | (`keyNumber`: `number`) => `void` | 结果回调，查询到结果后执行回调函数。keyNumber : 剩余钥匙数量 |
| `keyType?` | `number` | 搜索的钥匙类型，暂时只有类型1 default: 1 |


___

### isPremiumMember <Score text="isPremiumMember" /> 

• `Static` **isPremiumMember**(`isPremiumMemberResult`): `void` <Badge type="tip" text="client" />

获取用户是否是大会员


::: warning Precautions

暂未考虑单机模式，第一次结果会通过异步回调的方式返回（构造时自动请求），后续会通过缓存直接执行回调函数（同步），
只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

使用示例:创建一个名为PurchaseExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，可以看到当前用户是否是大会员
```
@Component
export default class PurchaseExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        PurchaseService.isPremiumMember(isSupport => {
            player.character.characterName = isSupport ? "当前玩家是大会员" : "当前玩家不是大会员";
        })
    }
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isPremiumMemberResult` | (`result`: `boolean`) => `void` | 结果回调，查询到结果后执行回调函数。true:是大会员，false:不是大会员 |


___

### isPremiumMemberSupported <Score text="isPremiumMemberSupported" /> 

• `Static` **isPremiumMemberSupported**(`isSupportedResult`): `void` <Badge type="tip" text="client" />

获取用户使用软件版本是否有大会员功能


::: warning Precautions

暂未考虑单机模式，第一次结果会通过异步回调的方式返回（构造时自动请求），后续会通过缓存直接执行回调函数（同步）。老版本的233乐园可能出现无回调的情况，需要自行判断超时

:::

使用示例:创建一个名为PurchaseExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，可以看到当前app是否支持大会员功能
```
@Component
export default class PurchaseExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let player = await mw.asyncGetCurrentPlayer();
        PurchaseService.isPremiumMemberSupported(isSupport => {
            player.character.characterName = isSupport ? "当前app支持大会员功能" : "当前app不支持大会员功能";
        })
    }
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSupportedResult` | (`result`: `boolean`) => `void` | 结果回调，查询到结果后执行回调函数。true:支持大会员功能，false:不支持大会员功能 |


___

### openPremiumMemberPurchasePage <Score text="openPremiumMemberPurchasePage" /> 

• `Static` **openPremiumMemberPurchasePage**(): `void` <Badge type="tip" text="client" />

跳转会员充值页面


使用示例:创建一个名为PurchaseExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，发布游戏在移动端测试，10秒后会自动打开会员充值页面。
```
@Component
export default class PurchaseExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        await TimeUtil.delaySecond(10);
        PurchaseService.openPremiumMemberPurchasePage();
    }
}
```ts


___

### placeOrder <Score text="placeOrder" /> 

• `Static` **placeOrder**(`commodityId`, `amount`, `placeOrderResult`): `void` <Badge type="tip" text="client" />

下单指定数量的指定商品


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commodityId` | `string` |  商品Id |
| `amount` | `number` |  数量 |
| `placeOrderResult` | (`status`: `number`, `msg`: `string`) => `void` |  订单状态回调，status = 200时表示订单支付成功。msg描述订单状态或者错误信息 |

