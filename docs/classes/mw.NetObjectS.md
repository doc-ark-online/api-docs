[Utility](../groups/Core.Utility.md) / NetObjectS

# NetObjectS<T\> <Badge type="tip" text="Class" /> <Score text="NetObjectS<T\>" />

服务端的网络对象

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`NetObject`](mw.NetObject.md)

  ↳ **`NetObjectS`**

  ↳↳ [`ModuleS`](mw.ModuleS.md)

## Table of contents

| Accessors |
| :-----|
| **[currentPlayer](mw.NetObjectS.md#currentplayer)**(): [`Player`](mw.Player.md) <br> 调用服务器方法的玩家|
| **[currentUserId](mw.NetObjectS.md#currentuserid)**(): `string` <br> 获取调用服务器方法的玩家userId|

| Methods |
| :-----|
| **[getAllClient](mw.NetObjectS.md#getallclient)**(): `T` <br> 获取"全部客户端"调用对象|
| **[getClient](mw.NetObjectS.md#getclient)**(`player`: `number` \): `T` <br> 根据玩家获取"单客户端"调用对象|

### currentPlayer <Score text="currentPlayer" /> 

• `Protected` `get` **currentPlayer**(): [`Player`](mw.Player.md) <Badge type="tip" text="server" />

调用服务器方法的玩家

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::


#### Returns

[`Player`](mw.Player.md)

___

### currentUserId <Score text="currentUserId" /> 

• `Protected` `get` **currentUserId**(): `string` <Badge type="tip" text="server" />

获取调用服务器方法的玩家userId

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::


#### Returns

`string`

## Methods

### getAllClient <Score text="getAllClient" /> 

• `Protected` **getAllClient**(): `T` <Badge type="tip" text="server" />

获取"全部客户端"调用对象


#### Returns

`T`

"全部客户端"调用对象

___

### getClient <Score text="getClient" /> 

• `Protected` **getClient**(`player`): `T` <Badge type="tip" text="server" />

根据玩家获取"单客户端"调用对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](mw.Player.md) |  目标玩家\|目标玩家id |

#### Returns

`T`

"单客户端"调用对象
