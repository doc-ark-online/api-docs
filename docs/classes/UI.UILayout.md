[Gui](../groups/Gui.Gui.md) / UILayout

# UILayout <Badge type="tip" text="Class" /> <Score text="UILayout" />

**`Groups`**

GUI

容器自动布局规则

## Table of contents

| Properties |
| :-----|
| **[autoLayout](UI.UILayout.md#autolayout)**: `boolean` <br> 四边边距|
| **[autoWrap](UI.UILayout.md#autowrap)**: `boolean` <br> 四边边距|
| **[childCollation](UI.UILayout.md#childcollation)**: [`UIChildCollation`](UI.UIChildCollation.md) <br> 四边边距|
| **[hugContent](UI.UILayout.md#hugcontent)**: [`UIHugContent`](UI.UIHugContent.md) <br> 四边边距|
| **[layout](UI.UILayout.md#layout)**: [`UILayoutType`](../enums/UI.UILayoutType.md) <br> 四边边距|
| **[layoutPacket](UI.UILayout.md#layoutpacket)**: [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) <br> 四边边距|
| **[layoutSpace](UI.UILayout.md#layoutspace)**: `number` <br> 四边边距|
| **[padding](UI.UILayout.md#padding)**: [`Margin`](UI.Margin.md) <br> 四边边距|

构造函数，传入每一个值

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InLayoutSpace` | `number` | 排列间隔 |
| `InPadding` | [`Margin`](UI.Margin.md) | 四边边距 |
| `InLayout` | [`UILayoutType`](../enums/UI.UILayoutType.md) | 自动布局规则 |
| `InLayoutPacket` | [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent` | [`UIHugContent`](UI.UIHugContent.md) | 容器布局适应规则 |
| `InAutoLayout` | `boolean` | 是否自动布局 |
| `InAutoWrap` | `boolean` | 是否网格模式 |

• **new UILayout**(`InLayoutSpace`, `InPadding`, `InLayout`, `InLayoutPacket`, `InHugContent`, `InAutoLayout`, `InAutoWrap`, `InChildCollation`)

构造函数，传入每一个值

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InLayoutSpace` | `number` | 排列间隔 |
| `InPadding` | [`Margin`](UI.Margin.md) | 四边边距 |
| `InLayout` | [`UILayoutType`](../enums/UI.UILayoutType.md) | 自动布局规则 |
| `InLayoutPacket` | [`UILayoutPacket`](../enums/UI.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent` | [`UIHugContent`](UI.UIHugContent.md) | 容器布局适应规则 |
| `InAutoLayout` | `boolean` | 是否自动布局 |
| `InAutoWrap` | `boolean` | 是否网格模式 |
| `InChildCollation` | [`UIChildCollation`](UI.UIChildCollation.md) | 子项排序规则 |

## Properties

### autoLayout <Score text="autoLayout" /> 

• **autoLayout**: `boolean`

是否自动布局

___

### autoWrap <Score text="autoWrap" /> 

• **autoWrap**: `boolean`

是否网格模式

___

### childCollation <Score text="childCollation" /> 

• **childCollation**: [`UIChildCollation`](UI.UIChildCollation.md)

子项布局规则

___

### hugContent <Score text="hugContent" /> 

• **hugContent**: [`UIHugContent`](UI.UIHugContent.md)

容器布局适应规则

___

### layout <Score text="layout" /> 

• **layout**: [`UILayoutType`](../enums/UI.UILayoutType.md)

自动布局规则

___

### layoutPacket <Score text="layoutPacket" /> 

• **layoutPacket**: [`UILayoutPacket`](../enums/UI.UILayoutPacket.md)

自动布局节点排列规则

___

### layoutSpace <Score text="layoutSpace" /> 

• **layoutSpace**: `number`

排列间隔

___

### padding <Score text="padding" /> 

• **padding**: [`Margin`](UI.Margin.md)

四边边距
