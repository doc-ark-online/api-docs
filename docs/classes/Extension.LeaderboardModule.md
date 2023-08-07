[UTILITY](../groups/UTILITY.UTILITY.md) / LeaderboardModule

# LeaderboardModule <Badge type="tip" text="Class" /> <Score text="LeaderboardModule" />

**`Instance`**

编辑器内置排行榜

## Table of contents

| Accessors |
| :-----|
| **[instance](Extension.LeaderboardModule.md#instance)**(): `any` <br> 获取排行榜全局实例|

| Methods |
| :-----|
| **[addField](Extension.LeaderboardModule.md#addfield)**(`fieldId`: `number`, `fieldName`: `string`, `valueStyle?`: `string`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <br> 添加一个字段|
| **[addPlayer](Extension.LeaderboardModule.md#addplayer)**(`player`: `number` \, `data?`: `any`): `void` <br> 向排行榜添加一个玩家|
| **[clear](Extension.LeaderboardModule.md#clear)**(): `void` <br> 清除排行榜|
| **[hidePanel](Extension.LeaderboardModule.md#hidepanel)**(): `void` <br> 隐藏UI|
| **[removePlayer](Extension.LeaderboardModule.md#removeplayer)**(`player`: `number` \): `void` <br> 从排行榜移除一个玩家|
| **[setPlayerValue](Extension.LeaderboardModule.md#setplayervalue)**(`player`: `number` \, `fieldId`: `number`, `value`: `string` \): `void` <br> 设置一个玩家的一个字段值|
| **[setSortFields](Extension.LeaderboardModule.md#setsortfields)**(`...fieldIds`: `number`[]): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <br> 设置排序字段，可以设置多字段排序，只支持从大到小排序|
| **[setSortMethod](Extension.LeaderboardModule.md#setsortmethod)**(`fn`: (`dataList`: [`LeaderboardPlayerData`](../modules/Extension.Extension.md#leaderboardplayerdata)[]) => [`LeaderboardPlayerData`](../modules/Extension.Extension.md#leaderboardplayerdata)[]): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <br> 设置排序的方法|
| **[setStyle](Extension.LeaderboardModule.md#setstyle)**(`title`: `string`, `fieldsAutoLayout`: `boolean`, `showPlayerNum`: `number`, `itemSpacing`: `number`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <br> 设置样式|
| **[showPanel](Extension.LeaderboardModule.md#showpanel)**(`hideCallback?`: () => `void`): `void` <br> 显示UI|
| **[showRankField](Extension.LeaderboardModule.md#showrankfield)**(`fieldName`: `string`, `valueStyle?`: `string`, `notListed?`: `string`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <br> 显示排名|

## Accessors

### instance <Score text="instance" /> 

• `Static` `Private` `get` **instance**(): `any` 

获取排行榜全局实例


#### Returns

`any`

排行榜全局实例

## Methods

### addField <Score text="addField" /> 

• `Static` **addField**(`fieldId`, `fieldName`, `valueStyle?`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) 

添加一个字段


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldId` | `number` |  字段ID |
| `fieldName` | `string` |  字段名 |
| `valueStyle?` | `string` |  显示内容样式(例：`{0}`分) default: null |

#### Returns

typeof [`LeaderboardModule`](Extension.LeaderboardModule.md)

返回自己，可用于链式调用

___

### addPlayer <Score text="addPlayer" /> 

• `Static` **addPlayer**(`player`, `data?`): `void` 

向排行榜添加一个玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  玩家对象\|玩家id |
| `data?` | `any` |  玩家数据 default: `{}` |


___

### clear <Score text="clear" /> 

• `Static` **clear**(): `void` 

清除排行榜



___

### hidePanel <Score text="hidePanel" /> 

• `Static` **hidePanel**(): `void` <Badge type="tip" text="client" />

隐藏UI



___

### removePlayer <Score text="removePlayer" /> 

• `Static` **removePlayer**(`player`): `void` 

从排行榜移除一个玩家


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  玩家对象\|玩家id |


___

### setPlayerValue <Score text="setPlayerValue" /> 

• `Static` **setPlayerValue**(`player`, `fieldId`, `value`): `void` 

设置一个玩家的一个字段值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `number` \| [`Player`](Gameplay.Player.md) |  玩家对象\|玩家id |
| `fieldId` | `number` |  字段的ID |
| `value` | `string` \| `number` |  字段的值 |


___

### setSortFields <Score text="setSortFields" /> 

• `Static` **setSortFields**(`...fieldIds`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) 

设置排序字段，可以设置多字段排序，只支持从大到小排序


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fieldIds` | `number`[] |  排序字段 |

#### Returns

typeof [`LeaderboardModule`](Extension.LeaderboardModule.md)

返回自己，可用于链式调用

___

### setSortMethod <Score text="setSortMethod" /> 

• `Static` **setSortMethod**(`fn`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) <Badge type="tip" text="client" />

设置排序的方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`dataList`: [`LeaderboardPlayerData`](../modules/Extension.Extension.md#leaderboardplayerdata)[]) => [`LeaderboardPlayerData`](../modules/Extension.Extension.md#leaderboardplayerdata)[] |  方法 |

#### Returns

typeof [`LeaderboardModule`](Extension.LeaderboardModule.md)

返回自己，可用于链式调用

___

### setStyle <Score text="setStyle" /> 

• `Static` **setStyle**(`title`, `fieldsAutoLayout`, `showPlayerNum`, `itemSpacing`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) 

设置样式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` |  界面标题 |
| `fieldsAutoLayout` | `boolean` |  字段是否自动布局，均匀分布 |
| `showPlayerNum` | `number` |  最多显示的玩家数量 |
| `itemSpacing` | `number` |  每条数据的间距 |

#### Returns

typeof [`LeaderboardModule`](Extension.LeaderboardModule.md)

返回自己，可用于链式调用

___

### showPanel <Score text="showPanel" /> 

• `Static` **showPanel**(`hideCallback?`): `void` <Badge type="tip" text="client" />

显示UI


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hideCallback?` | () => `void` |  Panel关闭的回调 default: null |


___

### showRankField <Score text="showRankField" /> 

• `Static` **showRankField**(`fieldName`, `valueStyle?`, `notListed?`): typeof [`LeaderboardModule`](Extension.LeaderboardModule.md) 

显示排名


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` |  字段名 |
| `valueStyle?` | `string` |  字段值样式 default: null |
| `notListed?` | `string` |  未上榜(如果未上榜也显示名次请填写null) default: null |

#### Returns

typeof [`LeaderboardModule`](Extension.LeaderboardModule.md)

返回自己，可用于链式调用
