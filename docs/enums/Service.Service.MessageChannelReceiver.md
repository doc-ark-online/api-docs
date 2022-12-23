[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / MessageChannelReceiver

# Enumeration: MessageChannelReceiver

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).MessageChannelReceiver

**`Description`**

枚举各个通道的使用与接收方

## Table of contents

### Enumeration Members

- [Client](Service.Service.MessageChannelReceiver.md#client)
- [MGS](Service.Service.MessageChannelReceiver.md#mgs)
- [MetaWorld](Service.Service.MessageChannelReceiver.md#metaworld)
- [TS](Service.Service.MessageChannelReceiver.md#ts)
- [WebSocket](Service.Service.MessageChannelReceiver.md#websocket)

## Enumeration Members

### Client

• **Client** = ``1``

平台层，根据移动端平台可能是Android、PC或iOS

#### Defined in

Service/index.d.ts:273

___

### MGS

• **MGS** = ``3``

预留MGS对象，暂时没有实际接入通道

#### Defined in

Service/index.d.ts:277

___

### MetaWorld

• **MetaWorld** = ``0``

C++层，MetaWorld引擎

#### Defined in

Service/index.d.ts:271

___

### TS

• **TS** = ``2``

TS层，游戏项目

#### Defined in

Service/index.d.ts:275

___

### WebSocket

• **WebSocket** = ``4``

Web层，Room manager（并非DS）

#### Defined in

Service/index.d.ts:279
