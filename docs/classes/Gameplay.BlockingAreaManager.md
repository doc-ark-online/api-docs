[Gameplay](../groups/Gameplay.Gameplay.md) / BlockingAreaManager

# BlockingAreaManager <Badge type="tip" text="Class" /> <Score text="BlockingAreaManager" />

::: danger Deprecated

since:022 reason:删除 replacement:请直接使用函数setPlayerPassableForAllArea()

:::

禁行区管理类,用于调用禁行区的全局方法

::: warning Precautions

该对象由服务器生成同步到客户端

:::

使用示例:单例
```ts
// 无需主动生成
```

## Table of contents

| Methods |
| :-----|
| **[setPlayerPassableForArea](Gameplay.BlockingAreaManager.md#setplayerpassableforarea)**(`Target`: `MWActor`, `CanPass`: `boolean`, `Guid`: `number`): `void` <br> 设置所有禁行区对某个玩家的通过权限|

## Methods

### setPlayerPassableForArea <Score text="setPlayerPassableForArea" /> 

• `Static` **setPlayerPassableForArea**(`Target`, `CanPass`, `Guid`): `void` 

设置所有禁行区对某个玩家的通过权限


使用示例:setPlayerPassableWithAllArea
```ts
setPlayerPassableForArea(player,true,player.getPlayerID())
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Target` | `MWActor` | 对应Actor |
| `CanPass` | `boolean` | 是否能够通过 |
| `Guid` | `number` | GUID |

