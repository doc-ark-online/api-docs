[Utility](../groups/Core.Utility.md) / NetObjectC

# NetObjectC<T\> <Badge type="tip" text="Class" /> <Score text="NetObjectC<T\>" />

客户端的网络对象

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`NetObject`](mw.NetObject.md)

  ↳ **`NetObjectC`**

  ↳↳ [`ModuleC`](mw.ModuleC.md)

## Table of contents

| Accessors |
| :-----|
| **[currentPlayer](mw.NetObjectC.md#currentplayer)**(): [`Player`](mw.Player.md) <br> 获取当前玩家|
| **[currentUserId](mw.NetObjectC.md#currentuserid)**(): `string` <br> 获取当前玩家userId|
| **[server](mw.NetObjectC.md#server)**(): `T` <br> 和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法|

### currentPlayer <Score text="currentPlayer" /> 

• `Protected` `get` **currentPlayer**(): [`Player`](mw.Player.md) <Badge type="tip" text="client" />

获取当前玩家


#### Returns

[`Player`](mw.Player.md)

当前玩家

___

### currentUserId <Score text="currentUserId" /> 

• `Protected` `get` **currentUserId**(): `string` <Badge type="tip" text="client" />

获取当前玩家userId


#### Returns

`string`

当前玩家ID

___

### server <Score text="server" /> 

• `Protected` `get` **server**(): `T` <Badge type="tip" text="client" />

和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法


#### Returns

`T`

服务端对象
