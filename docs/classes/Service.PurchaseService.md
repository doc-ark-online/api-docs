[MONETIZATION](../groups/MONETIZATION.MONETIZATION.md) / PurchaseService

# PurchaseService <Badge type="tip" text="Class" /> <Score text="PurchaseService" />

**`Instance`**

应用内购服务

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Accessors |
| :-----|
| **[onArkBalanceUpdated](Service.PurchaseService.md#onarkbalanceupdated)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\> <br> 获取Ark币余额更新的委托|
| **[onOrderDelivered](Service.PurchaseService.md#onorderdelivered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\> <br> 获取订单发货的委托|
| **[onPremiumMemberOrderDelivered](Service.PurchaseService.md#onpremiummemberorderdelivered)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Service.Service.md#onkeyconsume)\> <br> 获取订单发货的委托|
| **[onPremiumMemberStatusUpdate](Service.PurchaseService.md#onpremiummemberstatusupdate)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`result`: `boolean`) => `void`\> <br> 获取大会员状态更新时触发的委托|

| Methods |
| :-----|
| **[consumeKey](Service.PurchaseService.md#consumekey)**(`boxId`: `string`, `number`: `number`, `keyType`: `number`, `placeOrderResult`: (`status`: [`consumeKeyStatus`](../enums/Service.consumeKeyStatus.md)) => `void`): `void` <br> 大会员开宝箱消耗金钥匙|
| **[findKeyUsageHistory](Service.PurchaseService.md#findkeyusagehistory)**(`currentPage`: `number`, `pageSize`: `number`, `historyResult`: (`total`: `number`, `currentPage`: `number`, `bill`: [`keyUsageInfo`](../modules/Service.Service.md#keyusageinfo)[]) => `void`): `void` <br> 分页查询大会员使用钥匙的历史记录|
| **[getArkBalance](Service.PurchaseService.md#getarkbalance)**(): `void` <br> 获取Ark币余额|
| **[getUserKeyNumber](Service.PurchaseService.md#getuserkeynumber)**(`[getUserKeyNumber](Service.PurchaseService.md#getuserkeynumber)Result`, `keyType?`: `number`): `void` <br> 获取用户剩余钥匙数量|
| **[isPremiumMember](Service.PurchaseService.md#ispremiummember)**(`[isPremiumMember](Service.PurchaseService.md#ispremiummember)Result`): `void` <br> 获取用户是否是大会员|
| **[isPremiumMemberSupported](Service.PurchaseService.md#ispremiummembersupported)**(`isSupportedResult`: (`result`: `boolean`) => `void`): `void` <br> 获取用户使用软件版本是否有大会员功能|
| **[openPremiumMemberPurchasePage](Service.PurchaseService.md#openpremiummemberpurchasepage)**(): `void` <br> 跳转会员充值页面|
| **[placeOrder](Service.PurchaseService.md#placeorder)**(`commodityId`: `string`, `amount`: `number`, `[placeOrder](Service.PurchaseService.md#placeorder)Result`): `void` <br> 下单指定数量的指定商品|
| **[getInstance](Service.PurchaseService.md#getinstance)**(): [`PurchaseService`](Service.PurchaseService.md) <br> 获取应用内购管理器全局实例|

## Accessors

### onArkBalanceUpdated <Score text="onArkBalanceUpdated" /> 

• `get` **onArkBalanceUpdated**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\> <Badge type="tip" text="client" />

获取Ark币余额更新的委托


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\>

Ark币余额更新的委托

___

### onOrderDelivered <Score text="onOrderDelivered" /> 

• `get` **onOrderDelivered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\> <Badge type="tip" text="server" />

获取订单发货的委托


::: warning Precautions

1. 只在支持IAP的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\>

订单发货的委托

___

### onPremiumMemberOrderDelivered <Score text="onPremiumMemberOrderDelivered" /> 

• `get` **onPremiumMemberOrderDelivered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Service.Service.md#onkeyconsume)\> <Badge type="tip" text="server" />

获取订单发货的委托


::: warning Precautions

1. 只在支持大会员的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnKeyConsume`](../modules/Service.Service.md#onkeyconsume)\>

订单发货的委托

___

### onPremiumMemberStatusUpdate <Score text="onPremiumMemberStatusUpdate" /> 

• `get` **onPremiumMemberStatusUpdate**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<(`result`: `boolean`) => `void`\> <Badge type="tip" text="client" />

获取大会员状态更新时触发的委托


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<(`result`: `boolean`) => `void`\>

大会员状态更新时触发的委托

## Methods

### consumeKey <Score text="consumeKey" /> 

• **consumeKey**(`boxId`, `number`, `keyType`, `placeOrderResult`): `void` <Badge type="tip" text="client" />

大会员开宝箱消耗金钥匙


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

使用示例: 需要先在服务端监听发货信息，扣除钥匙时会判断服务端是否监听
```ts
if (Util.SystemUtil.isServer()) {
     console.log("监听发货");
     //发货监听
     Service.PurchaseService.getInstance().onPremiumMemberOrderDelivered.add((
          playerController: Gameplay.Player,
          orderId: string,
          boxId: string,
          amount: number,
          confirmOrder: (bReceived: boolean) => void
     ) => {
          Events.dispatchToClient(playerController, SHIP_ORDER, orderId, boxId, amount);
          //确认收货
          confirmOrder(true);
     });
}

// 扣除钥匙
Service.PurchaseService.getInstance().consumeKey("1000", 1, 1, (status : Service.consumeKeyStatus) => {
     console.log("consumeKey status : " + status);
     if (status == Service.consumeKeyStatus.Success) {
          console.log("下单成功");
     } else if (status == Service.consumeKeyStatus.PremiumMemberNotSupported) {
          console.log("不支持大会员");
     } else if (status == Service.consumeKeyStatus.NotPremiumMember) {
          console.log("不是大会员");
     } else if (status == Service.consumeKeyStatus.InsufficientKeys) {
          console.log("钥匙不足");
     } else if (status == Service.consumeKeyStatus.Error) {
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
| `placeOrderResult` | (`status`: [`consumeKeyStatus`](../enums/Service.consumeKeyStatus.md)) => `void` | 订单结果。status大会员扣除钥匙下单状态 |


___

### findKeyUsageHistory <Score text="findKeyUsageHistory" /> 

• **findKeyUsageHistory**(`currentPage`, `pageSize`, `historyResult`): `void` 

分页查询大会员使用钥匙的历史记录


使用示例:将代码片段放入脚本中即可
```ts
Service.PurchaseService.getInstance().findKeyUsageHistory(1, 100, (total : number, currentPage : number, bills : Service.keyUsageInfo[]) => {
    console.log("bill len : " + bills.length);
    for(let bill of bills)
    {
        console.log("bill orderId : " + bill.orderId);
        console.log("bill boxId : " + bill.boxId);
        console.log("bill number : " + bill.numbe);
        console.log("bill consumeTime : " + bill.consumeTime);
    }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentPage` | `number` | 查找第几页 type:整形 range:1-65535 |
| `pageSize` | `number` | 每页大小 type:整形 range:1-100 |
| `historyResult` | (`total`: `number`, `currentPage`: `number`, `bill`: [`keyUsageInfo`](../modules/Service.Service.md#keyusageinfo)[]) => `void` | 查询结果回调函数，total总页数为-1时表示查找失败，currentPage查找第几页，bill查询结果 |


___

### getArkBalance <Score text="getArkBalance" /> 

• **getArkBalance**(): `void` <Badge type="tip" text="client" />

获取Ark币余额


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::


___

### getUserKeyNumber <Score text="getUserKeyNumber" /> 

• **getUserKeyNumber**(`getUserKeyNumberResult`, `keyType?`): `void` <Badge type="tip" text="client" />

获取用户剩余钥匙数量


::: warning Precautions

暂未考虑单机模式，只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getUserKeyNumberResult` | (`keyNumber`: `number`) => `void` | 结果回调，查询到结果后执行回调函数。keyNumber : 剩余钥匙数量 |
| `keyType?` | `number` | 搜索的钥匙类型，暂时只有类型1 default: 1 |


___

### isPremiumMember <Score text="isPremiumMember" /> 

• **isPremiumMember**(`isPremiumMemberResult`): `void` <Badge type="tip" text="client" />

获取用户是否是大会员


::: warning Precautions

暂未考虑单机模式，第一次结果会通过异步回调的方式返回（构造时自动请求），后续会通过缓存直接执行回调函数（同步），
只在支持大会员的233/Playza/口袋方舟内使用时生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isPremiumMemberResult` | (`result`: `boolean`) => `void` | 结果回调，查询到结果后执行回调函数。true:是大会员，false:不是大会员 |


___

### isPremiumMemberSupported <Score text="isPremiumMemberSupported" /> 

• **isPremiumMemberSupported**(`isSupportedResult`): `void` <Badge type="tip" text="client" />

获取用户使用软件版本是否有大会员功能


::: warning Precautions

暂未考虑单机模式，第一次结果会通过异步回调的方式返回（构造时自动请求），后续会通过缓存直接执行回调函数（同步）

:::

使用示例:接口使用方式
```ts
Service.PurchaseService.getInstance().isPremiumMemberSupported((result: boolean) => {
  if (result) {
    console.log("支持大会员");
  } else {
    console.log("不支持大会员");
  }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isSupportedResult` | (`result`: `boolean`) => `void` | 结果回调，查询到结果后执行回调函数。true:支持大会员功能，false:不支持大会员功能 |


___

### openPremiumMemberPurchasePage <Score text="openPremiumMemberPurchasePage" /> 

• **openPremiumMemberPurchasePage**(): `void` <Badge type="tip" text="client" />

跳转会员充值页面



___

### placeOrder <Score text="placeOrder" /> 

• **placeOrder**(`commodityId`, `amount`, `placeOrderResult`): `void` <Badge type="tip" text="client" />

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


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`PurchaseService`](Service.PurchaseService.md) 

获取应用内购管理器全局实例


#### Returns

[`PurchaseService`](Service.PurchaseService.md)

应用内购管理器全局实例
