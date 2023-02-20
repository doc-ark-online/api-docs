[Service](../modules/Service.Service.md) / PurchaseService

# PurchaseService <Badge type="tip" text="Class" /> <Score text="PurchaseService" />

**`Groups`**

MONETIZATION

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

| Methods |
| :-----|
| **[getArkBalance](Service.PurchaseService.md#getarkbalance)**(): `void` <br> 获取Ark币余额|
| **[placeOrder](Service.PurchaseService.md#placeorder)**(`string`, `number`, `[placeOrder](Service.PurchaseService.md#placeorder)Result`): `void` <br> 下单指定数量的指定商品|
| **[getInstance](Service.PurchaseService.md#getinstance)**(): [`PurchaseService`](Service.PurchaseService.md) <br> 获取应用内购管理器全局实例|

## Accessors

### onArkBalanceUpdated <Score text="onArkBalanceUpdated" /> 

• `get` **onArkBalanceUpdated**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\> <Badge type="tip" text="other" />

获取Ark币余额更新的委托


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\>

Ark币余额更新的委托

___

### onOrderDelivered <Score text="onOrderDelivered" /> 

• `get` **onOrderDelivered**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\> <Badge type="tip" text="other" />

获取订单发货的委托


::: warning Precautions

1. 只在支持IAP的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

:::

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\>

订单发货的委托

## Methods

### getArkBalance <Score text="getArkBalance" /> 

• **getArkBalance**(): `void` <Badge type="tip" text="other" />

获取Ark币余额


::: warning Precautions

只在支持IAP的233/Playza/口袋方舟内使用时生效

:::


___

### placeOrder <Score text="placeOrder" /> 

• **placeOrder**(`commodityId`, `amount`, `placeOrderResult`): `void` <Badge type="tip" text="other" />

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

• `Static` **getInstance**(): [`PurchaseService`](Service.PurchaseService.md) <Badge type="tip" text="other" />

获取应用内购管理器全局实例


#### Returns

[`PurchaseService`](Service.PurchaseService.md)

应用内购管理器全局实例
