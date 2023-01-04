[UI](../modules/UI.UI.md) / Canvas

# Canvas <Badge type="tip" text="Class" />

**`Description`**

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

| Methods |
| :-----|
| **[newObject](UI.Canvas.md#newobject)**([`Canvas`](UI.Canvas.md), `string`): [`Canvas`](UI.Canvas.md) <br> 创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁|

## Accessors

### autoLayoutContainerRule

• `get` **autoLayoutContainerRule**(): [`UILayoutType`](../enums/UI.UILayoutType.md)

**`Description`**

获取自动布局规则(Figma布局)

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayoutType`](../enums/UI.UILayoutType.md)

自动布局规则

• `set` **autoLayoutContainerRule**(`inRule`): `void`

**`Description`**

设置自动布局规则(Figma布局)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutType`](../enums/UI.UILayoutType.md) | 自动布局规则 |

#### Returns

`void`

___

### autoLayoutEnable

• `get` **autoLayoutEnable**(): `boolean`

**`Description`**

获取是否时自动布局

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动布局

• `set` **autoLayoutEnable**(`inAutoLayout`): `void`

**`Description`**

设置是否自动布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inAutoLayout` | `boolean` | 是否自动布局 |

#### Returns

`void`

___

### autoLayoutHugContent

• `get` **autoLayoutHugContent**(): [`UIHugContent`](UI.UIHugContent.md)

**`Description`**

获取宽高随内容大小还是固定大小

**`Effect`**

只在客户端调用生效

#### Returns

[`UIHugContent`](UI.UIHugContent.md)

宽高大小规则

• `set` **autoLayoutHugContent**(`inRule`): `void`

**`Description`**

设置宽高随内容大小还是固定大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UIHugContent`](UI.UIHugContent.md) | 宽高大小规则 |

#### Returns

`void`

___

### autoLayoutPacketRule

• `get` **autoLayoutPacketRule**(): [`UILayoutPacket`](../enums/UI.UILayoutPacket.md)

**`Description`**

获取自动排版规则

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayoutPacket`](../enums/UI.UILayoutPacket.md)

自动排版规则

• `set` **autoLayoutPacketRule**(`inRule`): `void`

**`Description`**

设置自动排版规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inRule` | [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) | 自动排版规则 |

#### Returns

`void`

___

### autoLayoutPadding

• `get` **autoLayoutPadding**(): `Readonly`<[`Margin`](UI.Margin.md)\>

**`Description`**

获取边缘间距

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Margin`](UI.Margin.md)\>

获取填充

• `set` **autoLayoutPadding**(`inPadding`): `void`

**`Description`**

设置边缘间距

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPadding` | [`Margin`](UI.Margin.md) | 填充 |

#### Returns

`void`

___

### autoLayoutRule

• `get` **autoLayoutRule**(): [`UILayout`](UI.UILayout.md)

**`Description`**

获取完整的布局规则

**`Effect`**

只在客户端调用生效

#### Returns

[`UILayout`](UI.UILayout.md)

布局规则

• `set` **autoLayoutRule**(`layout`): `void`

**`Description`**

设置完整的布局规则

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | [`UILayout`](UI.UILayout.md) | 布局规则 |

#### Returns

`void`

___

### autoLayoutSpacing

• `get` **autoLayoutSpacing**(): `number`

**`Description`**

获取自动布局间隔

**`Effect`**

只在客户端调用生效

#### Returns

`number`

自动布局间隔

• `set` **autoLayoutSpacing**(`inSpaceInItem`): `void`

**`Description`**

设置自动布局间隔

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSpaceInItem` | `number` | 自动布局间隔 |

#### Returns

`void`


### clipEnable

• `get` **clipEnable**(): `boolean`

**`Description`**

获取是否裁剪

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否裁剪

• `set` **clipEnable**(`clip`): `void`

**`Description`**

设置是否裁剪

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `boolean` | 是否裁剪 |

#### Returns

`void`


## Methods

### newObject

▸ `Static` **newObject**(`parent?`, `inName?`): [`Canvas`](UI.Canvas.md)

**`Description`**

创建Canvas控件 当parent和inName与已有的对象相同时，旧的对象会被销毁

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent?` | [`Canvas`](UI.Canvas.md) | 创建控件的外parent对象 default:null |
| `inName?` | `string` | 创建控件的名称 default:null |

#### Returns

[`Canvas`](UI.Canvas.md)

返回创建的对象
