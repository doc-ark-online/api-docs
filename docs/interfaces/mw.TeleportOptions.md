[数据处理](../groups/数据处理.数据处理.md) / TeleportOptions

# TeleportOptions <Badge type="tip" text="Interface" /> <Score text="TeleportOptions" />

传送时可额外提供的信息

## Table of contents

### Properties <Score text="Properties" /> 
| **[createNewPrivateRoom](mw.TeleportOptions.md#createnewprivateroom)**: `boolean`  |
| :-----|
| 是否进入全新房间且不允许未通过userId[]指定的玩家加入（可选）|
| **[teleportData](mw.TeleportOptions.md#teleportdata)**: [`TeleportData`](../modules/Core.mw.md#teleportdata)  |
| 传送时携带的数据（可选）|

## Properties

### createNewPrivateRoom <Score text="createNewPrivateRoom" /> 

• `Optional` **createNewPrivateRoom**: `boolean`

是否进入全新房间且不允许未通过userId[]指定的玩家加入（可选）

true - 进入全新房间，且不允许未通过userId[]指定的玩家加入。

false - 优先进入已有的房间，如果没有满足条件的房间才进入新的。未指定的玩家可以进入。

::: warning Precautions

传true也有可能会因为服务器压力过大而创建失败。建议关注接口的TeleportResult并作处理

:::

___

### teleportData <Score text="teleportData" /> 

• `Optional` **teleportData**: [`TeleportData`](../modules/Core.mw.md#teleportdata)

传送时携带的数据（可选）
