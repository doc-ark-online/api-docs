[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UILayout

# Class: UILayout

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UILayout

**`Author`**

jie.wu

**`Description`**

容器自动布局规则

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UILayout.md#constructor)

### Properties

- [autoLayout](UI.UI.UILayout.md#autolayout)
- [autoWrap](UI.UI.UILayout.md#autowrap)
- [childCollation](UI.UI.UILayout.md#childcollation)
- [hugContent](UI.UI.UILayout.md#hugcontent)
- [layout](UI.UI.UILayout.md#layout)
- [layoutPacket](UI.UI.UILayout.md#layoutpacket)
- [layoutSpace](UI.UI.UILayout.md#layoutspace)
- [padding](UI.UI.UILayout.md#padding)

## Constructors

### constructor

• **new UILayout**(`InLayoutSpace`, `InPadding`, `InLayout`, `InLayoutPacket`, `InHugContent`, `InAutoLayout`, `InAutoWrap`)

**`Description`**

构造函数，传入每一个值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type                                                 | Description                |
| :--------------- | :--------------------------------------------------- | :------------------------- |
| `InLayoutSpace`  | `number`                                             | usage:排列间隔             |
| `InPadding`      | [`Margin`](UI.UI.Margin.md)                          | usage:四边边距             |
| `InLayout`       | [`UILayoutType`](../enums/UI.UI.UILayoutType.md)     | usage:自动布局规则         |
| `InLayoutPacket` | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | usage:自动布局节点排列规则 |
| `InHugContent`   | [`UIHugContent`](UI.UI.UIHugContent.md)              | usage:容器布局适应规则     |
| `InAutoLayout`   | `boolean`                                            | usage:是否自动布局         |
| `InAutoWrap`     | `boolean`                                            | usage:是否网格模式         |

#### Defined in

UI/index.d.ts:3829

• **new UILayout**(`InLayoutSpace`, `InPadding`, `InLayout`, `InLayoutPacket`, `InHugContent`, `InAutoLayout`, `InAutoWrap`, `InChildCollation`)

**`Description`**

构造函数，传入每一个值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                                 | Description                |
| :----------------- | :--------------------------------------------------- | :------------------------- |
| `InLayoutSpace`    | `number`                                             | usage:排列间隔             |
| `InPadding`        | [`Margin`](UI.UI.Margin.md)                          | usage:四边边距             |
| `InLayout`         | [`UILayoutType`](../enums/UI.UI.UILayoutType.md)     | usage:自动布局规则         |
| `InLayoutPacket`   | [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md) | usage:自动布局节点排列规则 |
| `InHugContent`     | [`UIHugContent`](UI.UI.UIHugContent.md)              | usage:容器布局适应规则     |
| `InAutoLayout`     | `boolean`                                            | usage:是否自动布局         |
| `InAutoWrap`       | `boolean`                                            | usage:是否网格模式         |
| `InChildCollation` | [`UIChildCollation`](UI.UI.UIChildCollation.md)      | usage:子项排序规则         |

#### Defined in

UI/index.d.ts:3850

## Properties

### autoLayout

• **autoLayout**: `boolean`

**`Description`**

是否自动布局

#### Defined in

UI/index.d.ts:3869

---

### autoWrap

• **autoWrap**: `boolean`

**`Description`**

是否网格模式

#### Defined in

UI/index.d.ts:3875

---

### childCollation

• **childCollation**: [`UIChildCollation`](UI.UI.UIChildCollation.md)

**`Description`**

子项布局规则

#### Defined in

UI/index.d.ts:3873

---

### hugContent

• **hugContent**: [`UIHugContent`](UI.UI.UIHugContent.md)

**`Description`**

容器布局适应规则

#### Defined in

UI/index.d.ts:3871

---

### layout

• **layout**: [`UILayoutType`](../enums/UI.UI.UILayoutType.md)

**`Description`**

自动布局规则

#### Defined in

UI/index.d.ts:3865

---

### layoutPacket

• **layoutPacket**: [`UILayoutPacket`](../enums/UI.UI.UILayoutPacket.md)

**`Description`**

自动布局节点排列规则

#### Defined in

UI/index.d.ts:3867

---

### layoutSpace

• **layoutSpace**: `number`

**`Description`**

排列间隔

#### Defined in

UI/index.d.ts:3861

---

### padding

• **padding**: [`Margin`](UI.UI.Margin.md)

**`Description`**

四边边距

#### Defined in

UI/index.d.ts:3863
