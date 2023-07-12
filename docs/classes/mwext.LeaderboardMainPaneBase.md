[EXTENSION](../groups/Extension.EXTENSION.md) / LeaderboardMainPaneBase

# LeaderboardMainPaneBase<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardMainPaneBase<T\>" />

排行榜主界面

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IPanelView` |

## Hierarchy

- [`BasePanel`](mwext.BasePanel.md)<`T`\>

  ↳ **`LeaderboardMainPaneBase`**

## Table of contents

| Properties |
| :-----|
| **[onClose](mwext.LeaderboardMainPaneBase.md#onclose)**: [`Action`](mw.Action.md) <br> 当关闭的时候调用的事件|

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[size](mwext.BasePanel.md#size)**(): [`Vector2`](mw.Vector2.md) <br> 面板尺寸|
| **[view](mwext.BasePanel.md#view)**(): `T` <br> 面板所控制的界面|
:::


| Methods |
| :-----|
| **[addField](mwext.LeaderboardMainPaneBase.md#addfield)**(`fieldId`: `number`, `fieldName`: `string`, `valueStyle?`: `string`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <br> 添加一个字段|
| **[creatItem](mwext.LeaderboardMainPaneBase.md#creatitem)**(): [`LeaderboardItemPanelBase`](mwext.LeaderboardItemPanelBase.md)<`IItemView`\> <br> 创建用于显示一条排行信息的item子UI|
| **[onHide](mwext.LeaderboardMainPaneBase.md#onhide)**(): `void` <br> 当UI隐藏调用|
| **[onSelfFieldSet](mwext.LeaderboardMainPaneBase.md#onselffieldset)**(`rankIndex`: `number`, `fieldId`: `number`, `fieldValue`: `string` \, `textBlockIndex`: `number`, `textBlock`: [`TextBlock`](mw.TextBlock.md)): `void` <br> 设置自己的字段内容后调用，需要请复写|
| **[onShow](mwext.LeaderboardMainPaneBase.md#onshow)**(`playerDataList`: [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[]): `void` <br> 当UI显示调用|
| **[setSortFields](mwext.LeaderboardMainPaneBase.md#setsortfields)**(`...fieldIds`: `number`[]): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <br> 设置排序字段ID，可以设置多字段排序，只支持从大到小排序|
| **[setSortMethod](mwext.LeaderboardMainPaneBase.md#setsortmethod)**(`fn`: (`dataList`: [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[]) => [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[]): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <br> 设置排序的方法|
| **[setStyle](mwext.LeaderboardMainPaneBase.md#setstyle)**(`title`: `string`, `fieldsAutoLayout`: `boolean`, `showPlayerNum`: `number`, `itemSpacing`: `number`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <br> 设置排行榜样式|
| **[showRankField](mwext.LeaderboardMainPaneBase.md#showrankfield)**(`fieldName`: `string`, `valueStyle?`: `string`, `notListed?`: `string`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <br> 显示"名次"字段，默认不显示，调用这个方法后才会显示|


::: details 点击查看继承
| Methods |
| :-----|
| **[onAdded](mwext.BasePanel.md#onadded)**(): `void` <br> 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](mwext.BasePanel.md#onawake)**(): `void` <br> 生命周期方法-构建面板自动触发，只会调用一次|
:::


### onClose <Score text="onClose" /> 

• `Readonly` **onClose**: [`Action`](mw.Action.md)

当关闭的时候调用的事件

## Accessors

## Methods

### addField <Score text="addField" /> 

• **addField**(`fieldId`, `fieldName`, `valueStyle?`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <Badge type="tip" text="client" />

添加一个字段


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldId` | `number` |  字段ID |
| `fieldName` | `string` |  字段的标题 |
| `valueStyle?` | `string` |  字段值的展示样式 (例：`{0}`分) default: null |

#### Returns

[`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\>

返回自己，可用于链式调用

___

### creatItem <Score text="creatItem" /> 

• `Protected` `Abstract` **creatItem**(): [`LeaderboardItemPanelBase`](mwext.LeaderboardItemPanelBase.md)<`IItemView`\> <Badge type="tip" text="client" />

创建用于显示一条排行信息的item子UI


#### Returns

[`LeaderboardItemPanelBase`](mwext.LeaderboardItemPanelBase.md)<`IItemView`\>

一条排行信息的item子UI

___

### onHide <Score text="onHide" /> 

• `Protected` **onHide**(): `void` <Badge type="tip" text="client" />

当UI隐藏调用

::: warning Precautions

如果要复写此方法，记得调用super.onHide()

:::



___

### onSelfFieldSet <Score text="onSelfFieldSet" /> 

• `Protected` **onSelfFieldSet**(`rankIndex`, `fieldId`, `fieldValue`, `textBlockIndex`, `textBlock`): `void` <Badge type="tip" text="client" />

设置自己的字段内容后调用，需要请复写


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rankIndex` | `number` |  名次索引(0开始) |
| `fieldId` | `number` |  字段索引 (如果是排行字段，此参数为mull) |
| `fieldValue` | `string` \| `number` |  字段显示内容 |
| `textBlockIndex` | `number` |  文本控件索引 |
| `textBlock` | [`TextBlock`](mw.TextBlock.md) |  文本控件 |


___

### onShow <Score text="onShow" /> 

• `Protected` **onShow**(`playerDataList`): `void` <Badge type="tip" text="client" />

当UI显示调用

::: warning Precautions

如果要复写此方法，记得调用super.onShow()

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playerDataList` | [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[] |  玩家数据列表 |


___

### setSortFields <Score text="setSortFields" /> 

• **setSortFields**(`...fieldIds`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <Badge type="tip" text="client" />

设置排序字段ID，可以设置多字段排序，只支持从大到小排序


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fieldIds` | `number`[] |  排序字段 |

#### Returns

[`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\>

返回自己，可用于链式调用

___

### setSortMethod <Score text="setSortMethod" /> 

• **setSortMethod**(`fn`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <Badge type="tip" text="client" />

设置排序的方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`dataList`: [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[]) => [`LeaderboardPlayerData`](../modules/Extension.mwext.md#leaderboardplayerdata)[] |  排序方法 |

#### Returns

[`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\>

返回自己，可用于链式调用

___

### setStyle <Score text="setStyle" /> 

• **setStyle**(`title`, `fieldsAutoLayout`, `showPlayerNum`, `itemSpacing`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <Badge type="tip" text="client" />

设置排行榜样式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` |  UI标题 |
| `fieldsAutoLayout` | `boolean` |  字段是否自动布局(true-均匀分布, false-所摆即所得） |
| `showPlayerNum` | `number` |  最多显示的玩家数量 |
| `itemSpacing` | `number` |  每条数据的间距 |

#### Returns

[`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\>

返回自己，可用于链式调用

___

### showRankField <Score text="showRankField" /> 

• **showRankField**(`fieldName`, `valueStyle?`, `notListed?`): [`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\> <Badge type="tip" text="client" />

显示"名次"字段，默认不显示，调用这个方法后才会显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` |  字段标题 |
| `valueStyle?` | `string` |  字段值样式 default: null |
| `notListed?` | `string` |  未上榜(如果未上榜也显示"名次"请填写null) default: null |

#### Returns

[`LeaderboardMainPaneBase`](mwext.LeaderboardMainPaneBase.md)<`T`\>

返回自己，可用于链式调用
