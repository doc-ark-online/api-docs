[基础类型](../groups/基础类型.基础类型.md) / MessageChannelReceiver

# MessageChannelReceiver <Badge type="tip" text="Enumeration" /> <Score text="MessageChannelReceiver" />

枚举各个通道的使用与接收方

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Client](mw.MessageChannelReceiver.md#client)** = ``1``  |
| :----- |
| **[MGS](mw.MessageChannelReceiver.md#mgs)** = ``3`` |
| **[MetaWorld](mw.MessageChannelReceiver.md#metaworld)** = ``0`` |
| **[TS](mw.MessageChannelReceiver.md#ts)** = ``2`` |
| **[WebSocket](mw.MessageChannelReceiver.md#websocket)** = ``4`` |

## Enumeration Members

### Client <Score text="Client" /> 

• **Client** = ``1``

平台层，根据移动端平台可能是Android、PC或iOS

___

### MGS <Score text="MGS" /> 

• **MGS** = ``3``

预留MGS对象，暂时没有实际接入通道

___

### MetaWorld <Score text="MetaWorld" /> 

• **MetaWorld** = ``0``

C++层，MetaWorld引擎

___

### TS <Score text="TS" /> 

• **TS** = ``2``

TS层，游戏项目

___

### WebSocket <Score text="WebSocket" /> 

• **WebSocket** = ``4``

Web层，Room manager（并非DS）
