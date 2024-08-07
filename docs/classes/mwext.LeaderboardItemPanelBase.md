[拓展](../groups/Extension.拓展.md) / LeaderboardItemPanelBase

# LeaderboardItemPanelBase<T\> <Badge type="tip" text="Class" /> <Score text="LeaderboardItemPanelBase<T\>" />

排行榜主界面中的子UI，用来显示一条记录

## Type parameters

| `T` | extends [`ILeaderboardItemView`](../interfaces/mwext.ILeaderboardItemView.md) |
| :------ | :------ |

## Hierarchy

- [`BasePanel`](mwext.BasePanel.md)<`T`\>

  ↳ **`LeaderboardItemPanelBase`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[playerId](mwext.LeaderboardItemPanelBase.md#playerid)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| 当前显示对象的playerId|


::: details click
### Accessors <Score text="Accessors" /> 
| **[size](mwext.BasePanel.md#size)**(): [`Vector2`](mw.Vector2.md)  |
| :-----|
| 面板尺寸|
| **[view](mwext.BasePanel.md#view)**(): `T`  |
| 面板所控制的界面|
:::


### Methods <Score text="Methods" /> 
| **[onAddToCanvas](mwext.LeaderboardItemPanelBase.md#onaddtocanvas)**(`playerId`: `number`, `rankIndex`: `number`): `void` <Badge type="tip" text="client" />  |
| :-----|
| 显示在画布上调用，需要请复写|
| **[onFieldSet](mwext.LeaderboardItemPanelBase.md#onfieldset)**(`playerId`: `number`, `rankIndex`: `number`, `fieldId`: `number`, `fieldValue`: `string`  `number`, `textBlockIndex`: `number`, `textBlock`: [`TextBlock`](mw.TextBlock.md)): `void` <Badge type="tip" text="client" />  |
| 设置字段内容后调用，需要请复写|


::: details click
### Methods <Score text="Methods" /> 
| **[onAdded](mwext.BasePanel.md#onadded)**(): `void` <Badge type="tip" text="client" />  |
| :-----|
| 生命周期-被添加到父节点时候触发，可能会多次调用|
| **[onAwake](mwext.BasePanel.md#onawake)**(): `void` <Badge type="tip" text="client" />  |
| 生命周期方法-构建面板自动触发，只会调用一次|
:::


构造方法

#### Type parameters

| `T` | extends [`ILeaderboardItemView`](../interfaces/mwext.ILeaderboardItemView.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `viewClass` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  界面类 |
| :------ | :------ |

#### Overrides

[BasePanel](mwext.BasePanel.md).[constructor](mwext.BasePanel.md#constructor)

## Accessors

___

### playerId <Score text="playerId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **playerId**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


当前显示对象的playerId

#### Returns

</td>
</tr></tbody>
</table>

| `number` |  |
| :------ | :------ |

## Methods

___

### onAddToCanvas <Score text="onAddToCanvas" /> 

• `Protected` **onAddToCanvas**(`playerId`, `rankIndex`): `void` <Badge type="tip" text="client" />

显示在画布上调用，需要请复写

#### Parameters

| `playerId` `number` |  玩家 id range: 依据玩家 ID 而定 type:整数 |
| :------ | :------ |
| `rankIndex` `number` |  排名(0开始) range: 合理即可 type:整数 |


___

### onFieldSet <Score text="onFieldSet" /> 

• `Protected` **onFieldSet**(`playerId`, `rankIndex`, `fieldId`, `fieldValue`, `textBlockIndex`, `textBlock`): `void` <Badge type="tip" text="client" />

设置字段内容后调用，需要请复写

#### Parameters

| `playerId` `number` |  玩家id <br> range: 根据 ID 长度而定 type:整数 |
| :------ | :------ |
| `rankIndex` `number` |  名次索引(0开始) <br> range: 合理即可 type:整数 |
| `fieldId` `number` |  字段索引 (如果是排行字段，此参数为mull) <br> range: 合理即可 type:整数 |
| `fieldValue` `string`  `number` |  字段显示内容 <br> range: 合理即可，不做限制 type:整数 |
| `textBlockIndex` `number` |  文本控件索引 <br> range: 合理即可，不做限制 type:整数 |
| `textBlock` [`TextBlock`](mw.TextBlock.md) |  文本控件 |

