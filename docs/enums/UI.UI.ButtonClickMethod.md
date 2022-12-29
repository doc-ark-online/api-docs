[UI](../modules/UI.UI.md) / ButtonClickMethod

# ButtonClickMethod <Badge type="tip" text="Enumeration" />

**`Description`**

按钮点击响应规则

## Table of contents

| Enumeration Members |
| :-----|
| **[DownAndUp](UI.UI.ButtonClickMethod.md#downandup)** = ``0`` <br> 用户必须按下按钮，然后在按钮上方释放以触发单击。|
| **[MouseDown](UI.UI.ButtonClickMethod.md#mousedown)** = ``1`` <br> 单击将在鼠标按下时立即触发，并且不会捕获鼠标。|
| **[MouseUp](UI.UI.ButtonClickMethod.md#mouseup)** = ``2`` <br> 当鼠标按钮在按钮上释放时，总是会触发单击，|
| **[PreciseClick](UI.UI.ButtonClickMethod.md#preciseclick)** = ``3`` <br> 在列表中，只能通过精确点击按钮。|

## Enumeration Members

### DownAndUp

• **DownAndUp** = ``0``

用户必须按下按钮，然后在按钮上方释放以触发单击。
这是最常见的按钮类型。

___

### MouseDown

• **MouseDown** = ``1``

单击将在鼠标按下时立即触发，并且不会捕获鼠标。

___

### MouseUp

• **MouseUp** = ``2``

当鼠标按钮在按钮上释放时，总是会触发单击，
即使没有按下按钮。

___

### PreciseClick

• **PreciseClick** = ``3``

在列表中，只能通过精确点击按钮。
移动指针将滚动列表，还允许拖动可拖放按钮。
