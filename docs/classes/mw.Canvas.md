[Ui](../groups/Core.Ui.md) / Canvas

# Canvas <Badge type="tip" text="Class" /> <Score text="Canvas" />

可挂载叶子节点的根节点，以及提供各种自动布局功能

## Hierarchy

- [`PanelWidget`](mw.PanelWidget.md)

  ↳ **`Canvas`**

## Table of contents

| Accessors |
| :-----|
| **[autoLayoutContainerRule](mw.Canvas.md#autolayoutcontainerrule)**(): [`UILayoutType`](../enums/mw.UILayoutType.md) <br> 获取自动布局排版规则-容器类型|
| **[autoLayoutEnable](mw.Canvas.md#autolayoutenable)**(): `boolean` <br> 获取是否时自动布局|
| **[autoLayoutHugContent](mw.Canvas.md#autolayouthugcontent)**(): [`UIHugContent`](mw.UIHugContent.md) <br> 获取宽高随内容大小还是固定大小|
| **[autoLayoutPacketRule](mw.Canvas.md#autolayoutpacketrule)**(): [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) <br> 获取自动布局排版规则-排列规则|
| **[autoLayoutPadding](mw.Canvas.md#autolayoutpadding)**(): [`Margin`](mw.Margin.md) <br> 获取边缘间距|
| **[autoLayoutRule](mw.Canvas.md#autolayoutrule)**(): [`UILayout`](mw.UILayout.md) <br> 获取完整的布局规则|
| **[autoLayoutSpacing](mw.Canvas.md#autolayoutspacing)**(): `number` <br> 获取自动布局间隔|
| **[clipEnable](mw.Canvas.md#clipenable)**(): `boolean` <br> 获取是否裁剪|


::: details 点击查看继承
| Accessors |
| :-----|
:::


| Methods |
| :-----|
| **[newObject](mw.Canvas.md#newobject)**(`parent?`: [`Canvas`](mw.Canvas.md), `inName?`: `string`): [`Canvas`](mw.Canvas.md) <br> 创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|


::: details 点击查看继承
| Methods |
| :-----|
| **[addChild](mw.PanelWidget.md#addchild)**(`child`: [`Widget`](mw.Widget.md)): `void` <br> 添加子节点|
| **[findChildByPath](mw.PanelWidget.md#findchildbypath)**(`inPath`: `string`): [`Widget`](mw.Widget.md) <br> 通过相对路径查找节点|
| **[getChildAt](mw.PanelWidget.md#getchildat)**(`index`: `number`): [`Widget`](mw.Widget.md) <br> 获取第几位子节点|
| **[getChildByName](mw.PanelWidget.md#getchildbyname)**<`T`: extends [`Widget`](mw.Widget.md)<`T`\>\>(`name`: `string`): `T`: extends [`Widget`](mw.Widget.md)<`T`\> <br> 通过名字查找节点|
| **[getChildrenCount](mw.PanelWidget.md#getchildrencount)**(): `number` <br> 获取子节点数量|
| **[removeAllChildren](mw.PanelWidget.md#removeallchildren)**(): `void` <br> 清除所有子节点,会销毁UI无法再使用|
| **[removeChild](mw.PanelWidget.md#removechild)**(`child`: [`Widget`](mw.Widget.md)): `void` <br> 移除节点,会销毁UI无法在使用|
| **[removeChildAt](mw.PanelWidget.md#removechildat)**(`index`: `number`): `void` <br> 移除第几个节点,会销毁UI无法再使用|
:::


### autoLayoutContainerRule <Score text="autoLayoutContainerRule" /> 

• `get` **autoLayoutContainerRule**(): [`UILayoutType`](../enums/mw.UILayoutType.md) <Badge type="tip" text="client" />

获取自动布局排版规则-容器类型


#### Returns

[`UILayoutType`](../enums/mw.UILayoutType.md)

自动布局排版规则-容器类型

• `set` **autoLayoutContainerRule**(`inRule`): `void` <Badge type="tip" text="client" />

设置自动布局排版规则-容器类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutType`](../enums/mw.UILayoutType.md) | 自动布局排版规则-容器类型 |


___

### autoLayoutEnable <Score text="autoLayoutEnable" /> 

• `get` **autoLayoutEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否时自动布局


#### Returns

`boolean`

是否自动布局

• `set` **autoLayoutEnable**(`inAutoLayout`): `void` <Badge type="tip" text="client" />

设置是否自动布局


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoLayout` | `boolean` | 是否自动布局 |


___

### autoLayoutHugContent <Score text="autoLayoutHugContent" /> 

• `get` **autoLayoutHugContent**(): [`UIHugContent`](mw.UIHugContent.md) <Badge type="tip" text="client" />

获取宽高随内容大小还是固定大小


#### Returns

[`UIHugContent`](mw.UIHugContent.md)

宽高大小规则

• `set` **autoLayoutHugContent**(`inRule`): `void` <Badge type="tip" text="client" />

设置宽高随内容大小还是固定大小


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UIHugContent`](mw.UIHugContent.md) | 宽高大小规则 |


___

### autoLayoutPacketRule <Score text="autoLayoutPacketRule" /> 

• `get` **autoLayoutPacketRule**(): [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) <Badge type="tip" text="client" />

获取自动布局排版规则-排列规则


#### Returns

[`UILayoutPacket`](../enums/mw.UILayoutPacket.md)

自动布局排版规则-排列规则

• `set` **autoLayoutPacketRule**(`inRule`): `void` <Badge type="tip" text="client" />

设置自动布局排版规则-排列规则


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) | 自动布局排版规则-排列规则 |


___

### autoLayoutPadding <Score text="autoLayoutPadding" /> 

• `get` **autoLayoutPadding**(): [`Margin`](mw.Margin.md) <Badge type="tip" text="client" />

获取边缘间距


#### Returns

[`Margin`](mw.Margin.md)

获取填充

• `set` **autoLayoutPadding**(`inPadding`): `void` <Badge type="tip" text="client" />

设置边缘间距


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPadding` | [`Margin`](mw.Margin.md) | 填充 |


___

### autoLayoutRule <Score text="autoLayoutRule" /> 

• `get` **autoLayoutRule**(): [`UILayout`](mw.UILayout.md) <Badge type="tip" text="client" />

获取完整的布局规则


#### Returns

[`UILayout`](mw.UILayout.md)

布局规则

• `set` **autoLayoutRule**(`layout`): `void` <Badge type="tip" text="client" />

设置完整的布局规则


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | [`UILayout`](mw.UILayout.md) | 布局规则 |


___

### autoLayoutSpacing <Score text="autoLayoutSpacing" /> 

• `get` **autoLayoutSpacing**(): `number` <Badge type="tip" text="client" />

获取自动布局间隔


#### Returns

`number`

自动布局间隔

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void` <Badge type="tip" text="client" />

设置自动布局间隔


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSpaceInItem` | `number` | 自动布局间隔 |


___

### clipEnable <Score text="clipEnable" /> 

• `get` **clipEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否裁剪


#### Returns

`boolean`

是否裁剪

• `set` **clipEnable**(`clip`): `void` <Badge type="tip" text="client" />

设置是否裁剪


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `boolean` | 是否裁剪 |



## Methods
___

### newObject <Score text="newObject" /> 

• `Static` **newObject**(`parent?`, `inName?`): [`Canvas`](mw.Canvas.md) <Badge type="tip" text="client" />

创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](mw.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Canvas`](mw.Canvas.md)

返回创建的对象
