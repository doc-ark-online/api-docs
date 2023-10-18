[UI](../groups/Core.UI.md) / UILayout

# UILayout <Badge type="tip" text="Class" /> <Score text="UILayout" />

<span class="content-big">

容器自动布局规则

</span>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new UILayout**(`InLayoutSpace`: `number`, `InPadding`: [`Margin`](mw.Margin.md), `InLayout`: [`UILayoutType`](../enums/mw.UILayoutType.md), `InLayoutPacket`: [`UILayoutPacket`](../enums/mw.UILayoutPacket.md), `InHugContent`: [`UIHugContent`](mw.UIHugContent.md), `InAutoLayout`: `boolean`, `InAutoWrap`: `boolean`)  |
| :-----|
| 构造函数，传入每一个值|

### Properties <Score text="Properties" /> 
| **[autoLayout](mw.UILayout.md#autolayout)**: `boolean`  |
| :-----|
| 是否自动布局|
| **[autoWrap](mw.UILayout.md#autowrap)**: `boolean`  |
| 是否网格模式|
| **[childCollation](mw.UILayout.md#childcollation)**: [`UIChildCollation`](mw.UIChildCollation.md)  |
| 子项布局规则|
| **[hugContent](mw.UILayout.md#hugcontent)**: [`UIHugContent`](mw.UIHugContent.md)  |
| 容器布局适应规则|
| **[layout](mw.UILayout.md#layout)**: [`UILayoutType`](../enums/mw.UILayoutType.md)  |
| 自动布局规则|
| **[layoutPacket](mw.UILayout.md#layoutpacket)**: [`UILayoutPacket`](../enums/mw.UILayoutPacket.md)  |
| 自动布局节点排列规则|
| **[layoutSpace](mw.UILayout.md#layoutspace)**: `number`  |
| 排列间隔|
| **[padding](mw.UILayout.md#padding)**: [`Margin`](mw.Margin.md)  |
| 四边边距|

构造函数，传入每一个值


#### Parameters

| `InLayoutSpace` `number` | 排列间隔 |
| :------ | :------ |
| `InPadding` [`Margin`](mw.Margin.md) | 四边边距 |
| `InLayout` [`UILayoutType`](../enums/mw.UILayoutType.md) | 自动布局规则 |
| `InLayoutPacket` [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent` [`UIHugContent`](mw.UIHugContent.md) | 容器布局适应规则 |
| `InAutoLayout` `boolean` | 是否自动布局 |
| `InAutoWrap` `boolean` | 是否网格模式 |

• **new UILayout**(`InLayoutSpace`, `InPadding`, `InLayout`, `InLayoutPacket`, `InHugContent`, `InAutoLayout`, `InAutoWrap`, `InChildCollation`)

构造函数，传入每一个值

**`Effect`**


#### Parameters

| `InLayoutSpace` `number` | 排列间隔 |
| :------ | :------ |
| `InPadding` [`Margin`](mw.Margin.md) | 四边边距 |
| `InLayout` [`UILayoutType`](../enums/mw.UILayoutType.md) | 自动布局规则 |
| `InLayoutPacket` [`UILayoutPacket`](../enums/mw.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent` [`UIHugContent`](mw.UIHugContent.md) | 容器布局适应规则 |
| `InAutoLayout` `boolean` | 是否自动布局 |
| `InAutoWrap` `boolean` | 是否网格模式 |
| `InChildCollation` [`UIChildCollation`](mw.UIChildCollation.md) | 子项排序规则 |

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

• **childCollation**: [`UIChildCollation`](mw.UIChildCollation.md)

子项布局规则

___

### hugContent <Score text="hugContent" /> 

• **hugContent**: [`UIHugContent`](mw.UIHugContent.md)

容器布局适应规则

___

### layout <Score text="layout" /> 

• **layout**: [`UILayoutType`](../enums/mw.UILayoutType.md)

自动布局规则

___

### layoutPacket <Score text="layoutPacket" /> 

• **layoutPacket**: [`UILayoutPacket`](../enums/mw.UILayoutPacket.md)

自动布局节点排列规则

___

### layoutSpace <Score text="layoutSpace" /> 

• **layoutSpace**: `number`

排列间隔

___

### padding <Score text="padding" /> 

• **padding**: [`Margin`](mw.Margin.md)

四边边距
