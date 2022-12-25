[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / ButtonClickMethod

# Enumeration: ButtonClickMethod

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).ButtonClickMethod

**`Description`**

按钮点击响应规则

## Table of contents

### Enumeration Members

- [DownAndUp](UI.UI.ButtonClickMethod.md#downandup)
- [MouseDown](UI.UI.ButtonClickMethod.md#mousedown)
- [MouseUp](UI.UI.ButtonClickMethod.md#mouseup)
- [PreciseClick](UI.UI.ButtonClickMethod.md#preciseclick)

## Enumeration Members

### DownAndUp

• **DownAndUp** = `0`

用户必须按下按钮，然后在按钮上方释放以触发单击。
这是最常见的按钮类型。

#### Defined in

UI/index.d.ts:3505

---

### MouseDown

• **MouseDown** = `1`

单击将在鼠标按下时立即触发，并且不会捕获鼠标。

#### Defined in

UI/index.d.ts:3509

---

### MouseUp

• **MouseUp** = `2`

当鼠标按钮在按钮上释放时，总是会触发单击，
即使没有按下按钮。

#### Defined in

UI/index.d.ts:3514

---

### PreciseClick

• **PreciseClick** = `3`

在列表中，只能通过精确点击按钮。
移动指针将滚动列表，还允许拖动可拖放按钮。

#### Defined in

UI/index.d.ts:3519
