[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / PurchaseService

# Class: PurchaseService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).PurchaseService

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

应用内购服务

**`Precautions`**

单例类，请使用instance获取对象

**`Network Status`**

usage: 客户端

## Table of contents

### Constructors

- [constructor](Service.Service.PurchaseService.md#constructor)

### Accessors

- [onArkBalanceUpdated](Service.Service.PurchaseService.md#onarkbalanceupdated)
- [onOrderDelivered](Service.Service.PurchaseService.md#onorderdelivered)

### Methods

- [getArkBalance](Service.Service.PurchaseService.md#getarkbalance)
- [placeOrder](Service.Service.PurchaseService.md#placeorder)
- [getInstance](Service.Service.PurchaseService.md#getinstance)

## Constructors

### constructor

• **new PurchaseService**()

## Accessors

### onArkBalanceUpdated

• `get` **onArkBalanceUpdated**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnArkBalanceUpdatedDelegate`](../modules/Service.Service.md#onarkbalanceupdateddelegate)\>

**`Description`**

获取Ark币余额更新的委托

**`Effect`**

只在客户端调用生效

**`Precautions`**

只在支持IAP的233/Playza/口袋方舟内使用时生效

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnArkBalanceUpdatedDelegate`](../modules/Service.Service.md#onarkbalanceupdateddelegate)\>

Ark币余额更新的委托

#### Defined in

Service/index.d.ts:419

___

### onOrderDelivered

• `get` **onOrderDelivered**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnOrderDeliveredDelegate`](../modules/Service.Service.md#onorderdelivereddelegate)\>

**`Description`**

获取订单发货的委托

**`Effect`**

只在服务端调用生效

**`Precautions`**

1. 只在支持IAP的233/Playza/口袋方舟内使用时生效
2. 仅在服务端有效。暂未考虑单机模式，使用需谨慎

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<[`OnOrderDeliveredDelegate`](../modules/Service.Service.md#onorderdelivereddelegate)\>

订单发货的委托

#### Defined in

Service/index.d.ts:441

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

#### Defined in

Service/index.d.ts:412

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
| `commodityId` | `string` | usage: 商品Id |
| `amount` | `number` | usage: 数量 |
| `placeOrderResult` | (`status`: `number`, `msg`: `string`) => `void` | usage: 订单状态回调，status = 200时表示订单支付成功。msg描述订单状态或者错误信息 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:428

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

#### Defined in

Service/index.d.ts:406
