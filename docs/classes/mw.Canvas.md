[UI](../groups/Core.UI.md) / Canvas

# Canvas <Badge type="tip" text="Class" /> <Score text="Canvas" />

<span class="content-big">

可挂载叶子节点的根节点，以及提供各种自动布局功能

</span>

## Hierarchy

- [`PanelWidget`](mw.PanelWidget.md)

  ↳ **`Canvas`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[autoLayoutContainerRule](mw.Canvas.md#autolayoutcontainerrule)**(): [`UILayoutType`](../enums/mw.UILayoutType.md)  |
| :-----|
| 设置自动布局排版规则-容器类型|
| **[autoLayoutEnable](mw.Canvas.md#autolayoutenable)**(): `boolean`  |
| 设置是否自动布局|
| **[autoLayoutHugContent](mw.Canvas.md#autolayouthugcontent)**(): [`UIHugContent`](mw.UIHugContent.md)  |
| 设置宽高随内容大小还是固定大小|
| **[autoLayoutPacketRule](mw.Canvas.md#autolayoutpacketrule)**(): [`UILayoutPacket`](../enums/mw.UILayoutPacket.md)  |
| 设置自动布局排版规则-排列规则|
| **[autoLayoutPadding](mw.Canvas.md#autolayoutpadding)**(): [`Margin`](mw.Margin.md)  |
| 设置边缘间距|
| **[autoLayoutRule](mw.Canvas.md#autolayoutrule)**(): [`UILayout`](mw.UILayout.md)  |
| 设置完整的布局规则|
| **[autoLayoutSpacing](mw.Canvas.md#autolayoutspacing)**(): `number`  |
| 设置自动布局间隔|
| **[clipEnable](mw.Canvas.md#clipenable)**(): `boolean`  |
| 设置是否裁剪|

### Methods <Score text="Methods" /> 
| **[newObject](mw.Canvas.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Canvas`](mw.Canvas.md)  |
| :-----|
| 创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[addChild](mw.PanelWidget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void`  |
| :-----|
| 添加子节点|
| **[findChildByPath](mw.PanelWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md)  |
| 通过相对路径查找节点|
| **[getChildAt](mw.PanelWidget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md)  |
| 获取第几位子节点|
| **[getChildByName](mw.PanelWidget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\>  |
| 通过名字查找节点|
| **[getChildrenCount](mw.PanelWidget.md#getchildrencount)**(): `number`  |
| 获取子节点数量|
| **[removeAllChildren](mw.PanelWidget.md#removeallchildren)**(): `void`  |
| 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.PanelWidget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void`  |
| 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.PanelWidget.md#removechildat)**(`index`: `number`): `void`  |
| 移除第几个节点,会销毁UI无法再使用|
:::


## Accessors

### autoLayoutContainerRule <Score text="autoLayoutContainerRule" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutContainerRule**(): [`UILayoutType`](../enums/mw.UILayoutType.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutContainerRule**(`inRule`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取自动布局排版规则-容器类型


#### Returns

| [`UILayoutType`](../enums/mw.UILayoutType.md) | 自动布局排版规则-容器类型 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置自动布局排版规则-容器类型


#### Parameters

| `inRule` [`UILayoutType`](../enums/mw.UILayoutType.md) | 自动布局排版规则-容器类型 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutEnable <Score text="autoLayoutEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutEnable**(`inAutoLayout`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否时自动布局


#### Returns

| `boolean` | 是否自动布局 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否自动布局


#### Parameters

| `inAutoLayout` `boolean` | 是否自动布局 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutHugContent <Score text="autoLayoutHugContent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutHugContent**(): [`UIHugContent`](mw.UIHugContent.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutHugContent**(`inRule`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取宽高随内容大小还是固定大小


#### Returns

| [`UIHugContent`](mw.UIHugContent.md) | 宽高大小规则 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置宽高随内容大小还是固定大小


#### Parameters

| `inRule` [`UIHugContent`](mw.UIHugContent.md) | 宽高大小规则 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutPacketRule <Score text="autoLayoutPacketRule" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutPacketRule**(): [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutPacketRule**(`inRule`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取自动布局排版规则-排列规则


#### Returns

| [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) | 自动布局排版规则-排列规则 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置自动布局排版规则-排列规则


#### Parameters

| `inRule` [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) | 自动布局排版规则-排列规则 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutPadding <Score text="autoLayoutPadding" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutPadding**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutPadding**(`inPadding`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取边缘间距


#### Returns

| [`Margin`](mw.Margin.md) | 获取填充 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置边缘间距


#### Parameters

| `inPadding` [`Margin`](mw.Margin.md) | 填充 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutRule <Score text="autoLayoutRule" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutRule**(): [`UILayout`](mw.UILayout.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutRule**(`layout`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取完整的布局规则


#### Returns

| [`UILayout`](mw.UILayout.md) | 布局规则 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置完整的布局规则


#### Parameters

| `layout` [`UILayout`](mw.UILayout.md) | 布局规则 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### autoLayoutSpacing <Score text="autoLayoutSpacing" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **autoLayoutSpacing**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取自动布局间隔


#### Returns

| `number` | 自动布局间隔 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置自动布局间隔


#### Parameters

| `inSpaceInItem` `number` | 自动布局间隔 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### clipEnable <Score text="clipEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **clipEnable**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **clipEnable**(`clip`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否裁剪


#### Returns

| `boolean` | 是否裁剪 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否裁剪


#### Parameters

| `clip` `boolean` | 是否裁剪 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

#### Parameters

| `parent?` [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| :------ | :------ |
| `inName?` `string` | 创建控件的名称 default:null |

#### Returns

| [`Canvas`](mw.Canvas.md) | 返回创建的对象 |
| :------ | :------ |

