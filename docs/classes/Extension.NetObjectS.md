[Extension](../modules/Extension.Extension.md) / NetObjectS

# NetObjectS<T\> <Badge type="tip" text="Class" /> <Score text="NetObjectS<T\>" />

**`Groups`**

UTILITY

服务端的网络对象

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`NetObject`](Extension.NetObject.md)

  ↳ **`NetObjectS`**

  ↳↳ [`ModuleS`](Extension.ModuleS.md)

## Table of contents

| Accessors |
| :-----|
| **[currentPlayer](Extension.NetObjectS.md#currentplayer)**(): [`Player`](Gameplay.Player.md) <br> 调用服务器方法的玩家|
| **[currentPlayerId](Extension.NetObjectS.md#currentplayerid)**(): `number` <br> 获取调用服务器方法的玩家ID|

| Methods |
| :-----|
| **[getAllClient](Extension.NetObjectS.md#getallclient)**(): `T` <br> 获取"全部客户端"调用对象|
| **[getClient](Extension.NetObjectS.md#getclient)**(`number` \): `T` <br> 根据玩家获取"单客户端"调用对象|

#### Type parameters

| Name |
| :------ |
| `T` |

## Accessors

### currentPlayer <Score text="currentPlayer" /> 

• `Protected` `get` **currentPlayer**(): [`Player`](Gameplay.Player.md) <Badge type="tip" text="other" />

调用服务器方法的玩家

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::


#### Returns

[`Player`](Gameplay.Player.md)

___

### currentPlayerId <Score text="currentPlayerId" /> 

• `Protected` `get` **currentPlayerId**(): `number` <Badge type="tip" text="other" />

获取调用服务器方法的玩家ID

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::


#### Returns

`number`

## Methods

### getAllClient <Score text="getAllClient" /> 

• `Protected` **getAllClient**(): `T` <Badge type="tip" text="other" />

获取"全部客户端"调用对象


#### Returns

`T`

"全部客户端"调用对象

___

### getClient <Score text="getClient" /> 

• `Protected` **getClient**(`player`): `T` <Badge type="tip" text="other" />

根据玩家获取"单客户端"调用对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  目标玩家\|目标玩家id |

#### Returns

`T`

"单客户端"调用对象
