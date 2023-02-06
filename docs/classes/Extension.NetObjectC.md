[Extension](../modules/Extension.Extension.md) / NetObjectC

# NetObjectC<T\> <Badge type="tip" text="Class" /> <Score text="NetObjectC<T\>" />

客户端的网络对象

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`NetObject`](Extension.NetObject.md)

  ↳ **`NetObjectC`**

  ↳↳ [`ModuleC`](Extension.ModuleC.md)

## Table of contents

| Accessors |
| :-----|
| **[currentPlayer](Extension.NetObjectC.md#currentplayer)**(): [`Player`](Gameplay.Player.md) <br> 获取当前玩家|
| **[currentPlayerId](Extension.NetObjectC.md#currentplayerid)**(): `number` <br> 获取当前玩家ID|
| **[server](Extension.NetObjectC.md#server)**(): `T` <br> 和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法|

#### Type parameters

| Name |
| :------ |
| `T` |

## Accessors

### currentPlayer <Score text="currentPlayer" /> 

• `Protected` `get` **currentPlayer**(): [`Player`](Gameplay.Player.md) <Badge type="tip" text="other" />

获取当前玩家


#### Returns

[`Player`](Gameplay.Player.md)

当前玩家

___

### currentPlayerId <Score text="currentPlayerId" /> 

• `Protected` `get` **currentPlayerId**(): `number` <Badge type="tip" text="other" />

获取当前玩家ID

客户端端生效

#### Returns

`number`

当前玩家ID

___

### server <Score text="server" /> 

• `Protected` `get` **server**(): `T` <Badge type="tip" text="other" />

和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法


#### Returns

`T`

服务端对象
