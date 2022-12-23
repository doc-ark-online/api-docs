[test](../README.md) / asyncSetPlayerData

# asyncSetPlayerData

function asyncSetPlayerData(player: Gameplay.Player, data: unknown): Promise<DataStorageResultCode>;

**`Description`**

异步设置自定义数据

**`effect`**

只在服务端调用生效

**`precautions`**

每个玩家在每一个游戏中允许最多存储16Kb的编码数据。超过此限制的任何数据都不能保证被存储。
  
**`param`**

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Gameplay.Player` | usage: 玩家对象 |
| `data` | `unknown` | usage:要保存的数据 |

**`returns`**
  
设置操作结果

**`example`**  
  
```ts
  
```  
