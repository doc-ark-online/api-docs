[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / ButtonPressMethod

# Enumeration: ButtonPressMethod

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).ButtonPressMethod

**`Description`**

按钮按压响应规则

## Table of contents

### Enumeration Members

- [ButtonPress](UI.UI.ButtonPressMethod.md#buttonpress)
- [ButtonRelease](UI.UI.ButtonPressMethod.md#buttonrelease)
- [DownAndUp](UI.UI.ButtonPressMethod.md#downandup)

## Enumeration Members

### ButtonPress

• **ButtonPress** = `1`

按下按钮后，单击将立即触发。

#### Defined in

UI/index.d.ts:3551

---

### ButtonRelease

• **ButtonRelease** = `2`

当焦点按钮上发生按钮释放时，始终会触发单击，
即使聚焦时没有按下按钮。

#### Defined in

UI/index.d.ts:3556

---

### DownAndUp

• **DownAndUp** = `0`

用户必须按下按钮，然后在按钮具有焦点时释放，以触发单击。
这是最常见的按钮类型。

#### Defined in

UI/index.d.ts:3547
