[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / BlockingAreaManager

# Class: BlockingAreaManager

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).BlockingAreaManager

**`Author`**

tengxiao.li

**`Description`**

禁行区管理类,用于调用禁行区的全局方法

**`Network Status`**

usage:双端

**`Precautions`**

该对象由服务器生成同步到客户端

**`Example`**

使用示例:单例

```
// 无需主动生成
```

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.BlockingAreaManager.md#constructor)

### Methods

- [setPlayerPassableForArea](Gameplay.Gameplay.BlockingAreaManager.md#setplayerpassableforarea)

## Constructors

### constructor

• **new BlockingAreaManager**()

## Methods

### setPlayerPassableForArea

▸ `Static` **setPlayerPassableForArea**(`Target`, `CanPass`, `Guid`): `void`

**`Author`**

tengxiao.li

**`Description`**

设置所有禁行区对某个玩家的通过权限

**`Effect`**

调用端生效

**`Example`**

使用示例:setPlayerPassableWithAllArea

```
setPlayerPassableForArea(player,true,player.getPlayerID())
```

#### Parameters

| Name      | Type      | Description        |
| :-------- | :-------- | :----------------- |
| `Target`  | `MWActor` | usage:对应 Actor   |
| `CanPass` | `boolean` | usage:是否能够通过 |
| `Guid`    | `number`  | usage:Guid         |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8541
