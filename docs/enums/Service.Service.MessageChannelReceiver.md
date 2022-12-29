[Service](../modules/Service.Service.md) / MessageChannelReceiver

# MessageChannelReceiver <Badge type="tip" text="Enumeration" />

**`Description`**

枚举各个通道的使用与接收方

## Table of contents

| Enumeration Members                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------ |
| **[Client](Service.Service.MessageChannelReceiver.md#client)** = `1` <br> 平台层，根据移动端平台可能是 Android、PC 或 iOS |
| **[MGS](Service.Service.MessageChannelReceiver.md#mgs)** = `3` <br> 预留 MGS 对象，暂时没有实际接入通道                   |
| **[MetaWorld](Service.Service.MessageChannelReceiver.md#metaworld)** = `0` <br> C++层，MetaWorld 引擎                     |
| **[TS](Service.Service.MessageChannelReceiver.md#ts)** = `2` <br> TS 层，游戏项目                                         |
| **[WebSocket](Service.Service.MessageChannelReceiver.md#websocket)** = `4` <br> Web 层，Room manager（并非 DS）           |

## Enumeration Members

### Client

• **Client** = `1`

平台层，根据移动端平台可能是 Android、PC 或 iOS

---

### MGS

• **MGS** = `3`

预留 MGS 对象，暂时没有实际接入通道

---

### MetaWorld

• **MetaWorld** = `0`

C++层，MetaWorld 引擎

---

### TS

• **TS** = `2`

TS 层，游戏项目

---

### WebSocket

• **WebSocket** = `4`

Web 层，Room manager（并非 DS）
