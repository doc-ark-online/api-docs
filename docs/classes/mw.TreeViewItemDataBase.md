[界面](../groups/界面.界面.md) / TreeViewItemDataBase

# TreeViewItemDataBase <Badge type="tip" text="Class" /> <Score text="TreeViewItemDataBase" />

树状视图节点数据基类

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[baseGuid](mw.TreeViewItemDataBase.md#baseguid)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| 该节点数据的唯一标识序号，和位置无关|
| **[children](mw.TreeViewItemDataBase.md#children)**(): [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md)[] <Badge type="tip" text="client" />  |
| 所有子节点|
| **[parent](mw.TreeViewItemDataBase.md#parent)**(): [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md) <Badge type="tip" text="client" />  |
| 父节点|
| **[widgetCanvas](mw.TreeViewItemDataBase.md#widgetcanvas)**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />  |
| 该节点数据对应的UI|

## Accessors

### baseGuid <Score text="baseGuid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **baseGuid**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


该节点数据的唯一标识序号，和位置无关

#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### children <Score text="children" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **children**(): [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md)[] <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **children**(`childrenData`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


所有子节点

#### Returns

| [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md)[] | 返回当前所有子节点 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置子节点

#### Parameters

| `childrenData` [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md)[] | 新的子节点 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### parent <Score text="parent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **parent**(): [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **parent**(`parentData`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


父节点

#### Returns

| [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md) | 返回当前的父节点 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置父节点， 如果存在旧有父节点 或 属于treeView.listItems的根数组中，会从其中移除， 然后加入到新父节点parentData.children最后

#### Parameters

| `parentData` [`TreeViewItemDataBase`](mw.TreeViewItemDataBase.md) | 新的父节点 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### widgetCanvas <Score text="widgetCanvas" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **widgetCanvas**(): [`Widget`](mw.Widget.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


该节点数据对应的UI

#### Returns


</td>
</tr></tbody>
</table>

