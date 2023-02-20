[UI](../modules/UI.UI.md) / Canvas

# Canvas <Badge type="tip" text="Class" /> <Score text="Canvas" />

可挂载叶子节点的根节点，以及提供各种自动布局功能

## Hierarchy

- [`PanelWidget`](UI.PanelWidget.md)

  ↳ **`Canvas`**

## Table of contents

| Accessors |
| :-----|
| **[autoLayoutContainerRule](UI.Canvas.md#autolayoutcontainerrule)**(): [`UILayoutType`](../enums/UI.UILayoutType.md) <br> 获取自动布局规则(Figma布局)|
| **[autoLayoutEnable](UI.Canvas.md#autolayoutenable)**(): `boolean` <br> 获取是否时自动布局|
| **[autoLayoutHugContent](UI.Canvas.md#autolayouthugcontent)**(): [`UIHugContent`](UI.UIHugContent.md) <br> 获取宽高随内容大小还是固定大小|
| **[autoLayoutPacketRule](UI.Canvas.md#autolayoutpacketrule)**(): [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) <br> 获取自动排版规则|
| **[autoLayoutPadding](UI.Canvas.md#autolayoutpadding)**(): `Readonly`<[`Margin`](UI.Margin.md)\> <br> 获取边缘间距|
| **[autoLayoutRule](UI.Canvas.md#autolayoutrule)**(): [`UILayout`](UI.UILayout.md) <br> 获取完整的布局规则|
| **[autoLayoutSpacing](UI.Canvas.md#autolayoutspacing)**(): `number` <br> 获取自动布局间隔|
| **[clipEnable](UI.Canvas.md#clipenable)**(): `boolean` <br> 获取是否裁剪|


::: details 点击查看继承
| Accessors |
| :-----|
:::


| Methods |
| :-----|
| **[newObject](UI.Canvas.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`Canvas`](UI.Canvas.md) <br> 创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[addChild](UI.PanelWidget.md#addchild)**([`Widget`](UI.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](UI.PanelWidget.md#findchildbypath)**(`string`): [`Widget`](UI.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](UI.PanelWidget.md#getchildat)**(`number`): [`Widget`](UI.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](UI.PanelWidget.md#getchildbyname)**<extends [`Widget`](UI.Widget.md)<`T`\> |\>(`string`): extends [`Widget`](UI.Widget.md)<`T`\> | <br> 通过名字查找节点|
| **[getChildrenCount](UI.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](UI.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](UI.PanelWidget.md#removechild)**([`Widget`](UI.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](UI.PanelWidget.md#removechildat)**(`number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
:::


## Accessors

### autoLayoutContainerRule <Score text="autoLayoutContainerRule" /> 

• `get` **autoLayoutContainerRule**(): [`UILayoutType`](../enums/UI.UILayoutType.md) <Badge type="tip" text="other" />

获取自动布局规则(Figma布局)


#### Returns

[`UILayoutType`](../enums/UI.UILayoutType.md)

自动布局规则

• `set` **autoLayoutContainerRule**(`inRule`): `void` <Badge type="tip" text="other" />

设置自动布局规则(Figma布局)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutType`](../enums/UI.UILayoutType.md) | 自动布局规则 |


___

### autoLayoutEnable <Score text="autoLayoutEnable" /> 

• `get` **autoLayoutEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否时自动布局


#### Returns

`boolean`

是否自动布局

• `set` **autoLayoutEnable**(`inAutoLayout`): `void` <Badge type="tip" text="other" />

设置是否自动布局


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoLayout` | `boolean` | 是否自动布局 |


___

### autoLayoutHugContent <Score text="autoLayoutHugContent" /> 

• `get` **autoLayoutHugContent**(): [`UIHugContent`](UI.UIHugContent.md) <Badge type="tip" text="other" />

获取宽高随内容大小还是固定大小


#### Returns

[`UIHugContent`](UI.UIHugContent.md)

宽高大小规则

• `set` **autoLayoutHugContent**(`inRule`): `void` <Badge type="tip" text="other" />

设置宽高随内容大小还是固定大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UIHugContent`](UI.UIHugContent.md) | 宽高大小规则 |


___

### autoLayoutPacketRule <Score text="autoLayoutPacketRule" /> 

• `get` **autoLayoutPacketRule**(): [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) <Badge type="tip" text="other" />

获取自动排版规则


#### Returns

[`UILayoutPacket`](../enums/UI.UILayoutPacket.md)

自动排版规则

• `set` **autoLayoutPacketRule**(`inRule`): `void` <Badge type="tip" text="other" />

设置自动排版规则


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) | 自动排版规则 |


___

### autoLayoutPadding <Score text="autoLayoutPadding" /> 

• `get` **autoLayoutPadding**(): `Readonly`<[`Margin`](UI.Margin.md)\> <Badge type="tip" text="other" />

获取边缘间距


#### Returns

`Readonly`<[`Margin`](UI.Margin.md)\>

获取填充

• `set` **autoLayoutPadding**(`inPadding`): `void` <Badge type="tip" text="other" />

设置边缘间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPadding` | [`Margin`](UI.Margin.md) | 填充 |


___

### autoLayoutRule <Score text="autoLayoutRule" /> 

• `get` **autoLayoutRule**(): [`UILayout`](UI.UILayout.md) <Badge type="tip" text="other" />

获取完整的布局规则


#### Returns

[`UILayout`](UI.UILayout.md)

布局规则

• `set` **autoLayoutRule**(`layout`): `void` <Badge type="tip" text="other" />

设置完整的布局规则


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | [`UILayout`](UI.UILayout.md) | 布局规则 |


___

### autoLayoutSpacing <Score text="autoLayoutSpacing" /> 

• `get` **autoLayoutSpacing**(): `number` <Badge type="tip" text="other" />

获取自动布局间隔


#### Returns

`number`

自动布局间隔

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void` <Badge type="tip" text="other" />

设置自动布局间隔


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSpaceInItem` | `number` | 自动布局间隔 |



### clipEnable <Score text="clipEnable" /> 

• `get` **clipEnable**(): `boolean` <Badge type="tip" text="other" />

获取是否裁剪


#### Returns

`boolean`

是否裁剪

• `set` **clipEnable**(`clip`): `void` <Badge type="tip" text="other" />

设置是否裁剪


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `boolean` | 是否裁剪 |



## Methods

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Canvas`](UI.Canvas.md) <Badge type="tip" text="other" />

创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Canvas`](UI.Canvas.md)

返回创建的对象
