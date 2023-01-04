[Gameplay](../modules/Gameplay.Gameplay.md) / BlockingAreaManager

# BlockingAreaManager <Badge type="tip" text="Class" />

**`Description`**

禁行区管理类,用于调用禁行区的全局方法

**`Precautions`**

该对象由服务器生成同步到客户端

**`Example`**

使用示例:单例
```ts
// 无需主动生成
```

## Table of contents

| Methods |
| :-----|
| **[setPlayerPassableForArea](Gameplay.BlockingAreaManager.md#setplayerpassableforarea)**(`MWActor`, `boolean`, `number`): `void` <br> 设置所有禁行区对某个玩家的通过权限|

## Methods

### setPlayerPassableForArea

▸ `Static` **setPlayerPassableForArea**(`Target`, `CanPass`, `Guid`): `void`

**`Description`**

设置所有禁行区对某个玩家的通过权限

**`Effect`**

调用端生效

**`Example`**

使用示例:setPlayerPassableWithAllArea
```ts
setPlayerPassableForArea(player,true,player.getPlayerID())
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | `MWActor` | 对应Actor |
| `CanPass` | `boolean` | 是否能够通过 |
| `Guid` | `number` | Guid |

#### Returns

`void`
