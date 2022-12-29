[Service](../modules/Service.Service.md) / PurchaseService

# PurchaseService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

应用内购服务

**`Precautions`**

单例类，请使用instance获取对象

## Table of contents

| Accessors |
| :-----|
| **[onArkBalanceUpdated](Service.Service.PurchaseService.md#onarkbalanceupdated)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\> <br> 获取Ark币余额更新的委托|
| **[onOrderDelivered](Service.Service.PurchaseService.md#onorderdelivered)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\> <br> 获取订单发货的委托|

| Methods |
| :-----|
| **[getArkBalance](Service.Service.PurchaseService.md#getarkbalance)**(): `void` <br> 获取Ark币余额|
| **[placeOrder](Service.Service.PurchaseService.md#placeorder)**(`string`, `number`, `[placeOrder](Service.Service.PurchaseService.md#placeorder)Result`): `void` <br> 下单指定数量的指定商品|
| **[getInstance](Service.Service.PurchaseService.md#getinstance)**(): [`PurchaseService`](Service.Service.PurchaseService.md) <br> 获取应用内购管理器全局实例|

## Accessors

### onArkBalanceUpdated

• `get` **onArkBalanceUpdated**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\>

**`Description`**

获取Ark币余额更新的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在支持IAP的233/Playza/口袋方舟内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnArkBalanceUpdated`](../modules/Service.Service.md#onarkbalanceupdated)\>

Ark币余额更新的委托

___

### onOrderDelivered

• `get` **onOrderDelivered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\>

**`Description`**

获取订单发货的委托

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 只在支持IAP的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnOrderDelivered`](../modules/Service.Service.md#onorderdelivered)\>

订单发货的委托

## Methods

### getArkBalance

▸ **getArkBalance**(): `void`

**`Description`**

获取Ark币余额

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在支持IAP的233/Playza/口袋方舟内使用时生效

#### Returns

`void`

___

### placeOrder

▸ **placeOrder**(`commodityId`, `amount`, `placeOrderResult`): `void`

**`Description`**

下单指定数量的指定商品

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在支持IAP的233/Playza/口袋方舟内使用时生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commodityId` | `string` |  商品Id |
| `amount` | `number` |  数量 |
| `placeOrderResult` | (`status`: `number`, `msg`: `string`) => `void` |  订单状态回调，status = 200时表示订单支付成功。msg描述订单状态或者错误信息 |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`PurchaseService`](Service.Service.PurchaseService.md)

**`Description`**

获取应用内购管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`PurchaseService`](Service.Service.PurchaseService.md)

应用内购管理器全局实例
