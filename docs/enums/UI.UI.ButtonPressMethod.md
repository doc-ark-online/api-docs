[UI](../modules/UI.UI.md) / ButtonPressMethod

# ButtonPressMethod <Badge type="tip" text="Enumeration" />

**`Description`**

按钮按压响应规则

## Table of contents

| Enumeration Members                                                                                                       |
| :------------------------------------------------------------------------------------------------------------------------ |
| **[ButtonPress](UI.UI.ButtonPressMethod.md#buttonpress)** = `1` <br> 按下按钮后，单击将立即触发。                         |
| **[ButtonRelease](UI.UI.ButtonPressMethod.md#buttonrelease)** = `2` <br> 当焦点按钮上发生按钮释放时，始终会触发单击，     |
| **[DownAndUp](UI.UI.ButtonPressMethod.md#downandup)** = `0` <br> 用户必须按下按钮，然后在按钮具有焦点时释放，以触发单击。 |

## Enumeration Members

### ButtonPress

• **ButtonPress** = `1`

按下按钮后，单击将立即触发。

---

### ButtonRelease

• **ButtonRelease** = `2`

当焦点按钮上发生按钮释放时，始终会触发单击，
即使聚焦时没有按下按钮。

---

### DownAndUp

• **DownAndUp** = `0`

用户必须按下按钮，然后在按钮具有焦点时释放，以触发单击。
这是最常见的按钮类型。
