[Service](../modules/Service.Service.md) / MessageChannelReceiver

# MessageChannelReceiver <Badge type="tip" text="Enumeration" /> 

**`Description`**

枚举各个通道的使用与接收方

## Table of contents

| Enumeration Members |
| :-----|
| **[Client](Service.MessageChannelReceiver.md#client)** = ``1`` <br> 平台层，根据移动端平台可能是Android、PC或iOS|
| **[MGS](Service.MessageChannelReceiver.md#mgs)** = ``3`` <br> 预留MGS对象，暂时没有实际接入通道|
| **[MetaWorld](Service.MessageChannelReceiver.md#metaworld)** = ``0`` <br> C++层，MetaWorld引擎|
| **[TS](Service.MessageChannelReceiver.md#ts)** = ``2`` <br> TS层，游戏项目|
| **[WebSocket](Service.MessageChannelReceiver.md#websocket)** = ``4`` <br> Web层，Room manager（并非DS）|

## Enumeration Members

### Client  

• **Client** = ``1``

平台层，根据移动端平台可能是Android、PC或iOS

___

### MGS  

• **MGS** = ``3``

预留MGS对象，暂时没有实际接入通道

___

### MetaWorld  

• **MetaWorld** = ``0``

C++层，MetaWorld引擎

___

### TS  

• **TS** = ``2``

TS层，游戏项目

___

### WebSocket  

• **WebSocket** = ``4``

Web层，Room manager（并非DS）
