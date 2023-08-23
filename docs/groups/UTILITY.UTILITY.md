UTILITY

# UTILITY <Badge type="tip" text="Groups" /> <Score text="UTILITY" />

## Table of contents
| Classes |
| :-----|
| [AnalyticsService](../classes/mw.AnalyticsService.md) <br> 分析服务 |
| [AssetUtil](../classes/mw.AssetUtil.md) <br> 资源工具类 |
| [MathUtil](../classes/mw.MathUtil.md) <br> 数学库工具类 |
| [SelectionUtil](../classes/mw.SelectionUtil.md) <br> 选择物体时，描边绘制相关功能 |
| [StringUtil](../classes/mw.StringUtil.md) <br> 字符串工具 |
| [SystemUtil](../classes/mw.SystemUtil.md) <br> 系统设置 |
| [TimeUtil](../classes/mw.TimeUtil.md) <br> 时间工具 |
| [TweenGroup](../classes/mw.TweenGroup.md) <br> 补间组，用于同时控制多个补间对象 |
| [TweenSequence](../classes/mw.TweenSequence.md) <br> 序列工具类，主要用于获取连续的ID |
| [TweenUtil](../classes/mw.TweenUtil.md) <br> 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 |
| [WindowUtil](../classes/mw.WindowUtil.md) <br> 窗口设置 |


| Enums |
| :-----|
| [GameObjPoolSourceType](../enums/mwext.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择 |


| Interfaces |
| :-----|
| [ILeaderboardItemView](../interfaces/mwext.ILeaderboardItemView.md) <br> 一条数据的View接口 |
| [ILeaderboardPanelView](../interfaces/mwext.ILeaderboardPanelView.md) <br> 主面板View接口 |


| Modules Type Aliases |
| :-----|
| **[LeaderboardPlayerData](UTILITY.UTILITY.md#leaderboardplayerdata)**: `Object` <br> 排行榜玩家数据类型|


## Modules Type Aliases


___

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `{ `[fieldId: number]`: `number` \| `string`;  }` | 玩家数据，是一个key-value的结构 |