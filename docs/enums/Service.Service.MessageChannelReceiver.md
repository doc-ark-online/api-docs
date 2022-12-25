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

• **Client** = `1`

平台层，根据移动端平台可能是 Android、PC 或 iOS

#### Defined in

Service/index.d.ts:268

---

### MGS

• **MGS** = `3`

预留 MGS 对象，暂时没有实际接入通道

#### Defined in

Service/index.d.ts:272

---

### MetaWorld

• **MetaWorld** = `0`

C++层，MetaWorld 引擎

#### Defined in

Service/index.d.ts:266

---

### TS

• **TS** = `2`

TS 层，游戏项目

#### Defined in

Service/index.d.ts:270

---

### WebSocket

• **WebSocket** = `4`

Web 层，Room manager（并非 DS）

#### Defined in

Service/index.d.ts:274
