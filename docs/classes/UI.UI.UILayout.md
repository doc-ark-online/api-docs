[UI](../modules/UI.UI.md) / UILayout

# UILayout <Badge type="tip" text="Class" />

**`Description`**

容器自动布局规则

## Table of contents

| Properties                                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------- |
| **[autoLayout](UI.UI.UILayout.md#autolayout)**: `boolean` <br> 是否自动布局                                                        |
| **[autoWrap](UI.UI.UILayout.md#autowrap)**: `boolean` <br> 是否网格模式                                                            |
| **[childCollation](UI.UI.UILayout.md#childcollation)**: [`UIChildCollation`](UI.UI.UIChildCollation.md) <br> 子项布局规则          |
| **[hugContent](UI.UI.UILayout.md#hugcontent)**: [`UIHugContent`](UI.UI.UIHugContent.md) <br> 容器布局适应规则                      |
| **[layout](UI.UI.UILayout.md#layout)**: [`UILayoutType`](../enums/UI.UI.UILayoutType.md) <br> 自动布局规则                         |
| **[layoutPacket](UI.UI.UILayout.md#layoutpacket)**: [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) <br> 自动布局节点排列规则 |
| **[layoutSpace](UI.UI.UILayout.md#layoutspace)**: `number` <br> 排列间隔                                                           |
| **[padding](UI.UI.UILayout.md#padding)**: [`Margin`](UI.UI.Margin.md) <br> 四边边距                                                |

**`Description`**

构造函数，传入每一个值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                                 | Description          |
| :--------------- | :--------------------------------------------------- | :------------------- |
| `InLayoutSpace`  | `number`                                             | 排列间隔             |
| `InPadding`      | [`Margin`](UI.UI.Margin.md)                          | 四边边距             |
| `InLayout`       | [`UILayoutType`](../enums/UI.UI.UILayoutType.md)     | 自动布局规则         |
| `InLayoutPacket` | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent`   | [`UIHugContent`](UI.UI.UIHugContent.md)              | 容器布局适应规则     |
| `InAutoLayout`   | `boolean`                                            | 是否自动布局         |
| `InAutoWrap`     | `boolean`                                            | 是否网格模式         |

• **new UILayout**(`InLayoutSpace`, `InPadding`, `InLayout`, `InLayoutPacket`, `InHugContent`, `InAutoLayout`, `InAutoWrap`, `InChildCollation`)

**`Description`**

构造函数，传入每一个值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                                 | Description          |
| :----------------- | :--------------------------------------------------- | :------------------- |
| `InLayoutSpace`    | `number`                                             | 排列间隔             |
| `InPadding`        | [`Margin`](UI.UI.Margin.md)                          | 四边边距             |
| `InLayout`         | [`UILayoutType`](../enums/UI.UI.UILayoutType.md)     | 自动布局规则         |
| `InLayoutPacket`   | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | 自动布局节点排列规则 |
| `InHugContent`     | [`UIHugContent`](UI.UI.UIHugContent.md)              | 容器布局适应规则     |
| `InAutoLayout`     | `boolean`                                            | 是否自动布局         |
| `InAutoWrap`       | `boolean`                                            | 是否网格模式         |
| `InChildCollation` | [`UIChildCollation`](UI.UI.UIChildCollation.md)      | 子项排序规则         |

## Properties

### autoLayout

• **autoLayout**: `boolean`

**`Description`**

是否自动布局

---

### autoWrap

• **autoWrap**: `boolean`

**`Description`**

是否网格模式

---

### childCollation

• **childCollation**: [`UIChildCollation`](UI.UI.UIChildCollation.md)

**`Description`**

子项布局规则

---

### hugContent

• **hugContent**: [`UIHugContent`](UI.UI.UIHugContent.md)

**`Description`**

容器布局适应规则

---

### layout

• **layout**: [`UILayoutType`](../enums/UI.UI.UILayoutType.md)

**`Description`**

自动布局规则

---

### layoutPacket

• **layoutPacket**: [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md)

**`Description`**

自动布局节点排列规则

---

### layoutSpace

• **layoutSpace**: `number`

**`Description`**

排列间隔

---

### padding

• **padding**: [`Margin`](UI.UI.Margin.md)

**`Description`**

四边边距
