[UI](../groups/Core.UI.md) / ButtonPressMethod

# ButtonPressMethod <Badge type="tip" text="Enumeration" /> <Score text="ButtonPressMethod" />

<p class="content-big">

按钮按压响应规则

</p>

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[ButtonPress](mw.ButtonPressMethod.md#buttonpress)** = ``1``  |
| :----- |
| **[ButtonRelease](mw.ButtonPressMethod.md#buttonrelease)** = ``2`` |
| **[DownAndUp](mw.ButtonPressMethod.md#downandup)** = ``0`` |

## Enumeration Members

### ButtonPress <Score text="ButtonPress" /> 

• **ButtonPress** = ``1``

按下按钮后，单击将立即触发。

___

### ButtonRelease <Score text="ButtonRelease" /> 

• **ButtonRelease** = ``2``

当焦点按钮上发生按钮释放时，始终会触发单击，
即使聚焦时没有按下按钮。

___

### DownAndUp <Score text="DownAndUp" /> 

• **DownAndUp** = ``0``

用户必须按下按钮，然后在按钮具有焦点时释放，以触发单击。
这是最常见的按钮类型。
