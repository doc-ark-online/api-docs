[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UIHugContent

# Class: UIHugContent

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UIHugContent

**`Author`**

jie.wu

**`Description`**

容器自动布局大小适应规则

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UIHugContent.md#constructor)

### Properties

- [hugContentH](UI.UI.UIHugContent.md#hugcontenth)
- [hugContentW](UI.UI.UIHugContent.md#hugcontentw)

## Constructors

### constructor

• **new UIHugContent**(`w`, `h`)

**`Description`**

构造具体规则方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type                                                                     | Description        |
| :--- | :----------------------------------------------------------------------- | :----------------- |
| `w`  | [`UIHugContentHorizontally`](../enums/UI.UI.UIHugContentHorizontally.md) | usage:水平应用规则 |
| `h`  | [`UIHugContentVertically`](../enums/UI.UI.UIHugContentVertically.md)     | usage:垂直使用规则 |

#### Defined in

UI/index.d.ts:3788

## Properties

### hugContentH

• **hugContentH**: [`UIHugContentVertically`](../enums/UI.UI.UIHugContentVertically.md)

**`Description`**

垂直适应规则

#### Defined in

UI/index.d.ts:3792

---

### hugContentW

• **hugContentW**: [`UIHugContentHorizontally`](../enums/UI.UI.UIHugContentHorizontally.md)

**`Description`**

水平适应规则

#### Defined in

UI/index.d.ts:3790
