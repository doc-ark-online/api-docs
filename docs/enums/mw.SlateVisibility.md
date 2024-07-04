[界面](../groups/界面.界面.md) / SlateVisibility

# SlateVisibility <Badge type="tip" text="Enumeration" /> <Score text="SlateVisibility" />

UI节点显示规则

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Collapsed](mw.SlateVisibility.md#collapsed)** = ``1``  |
| :----- |
| **[Hidden](mw.SlateVisibility.md#hidden)** = ``2`` |
| **[HitTestInvisible](mw.SlateVisibility.md#hittestinvisible)** = ``3`` |
| **[SelfHitTestInvisible](mw.SlateVisibility.md#selfhittestinvisible)** = ``4`` |
| **[Visible](mw.SlateVisibility.md#visible)** = ``0`` |

## Enumeration Members

### Collapsed <Score text="Collapsed" /> 

• **Collapsed** = ``1``

折叠 使用该模式将不显示自身以及子节点，并且在整个布局中将不占用任何空间（可看作完全不再存在）

___

### Hidden <Score text="Hidden" /> 

• **Hidden** = ``2``

隐藏 使用该模式将不显示自身以及子节点，但是仍会根据已计算出的大小占用对应的布局位置

___

### HitTestInvisible <Score text="HitTestInvisible" /> 

• **HitTestInvisible** = ``3``

可见 自身以及子节点不可响应事件

___

### SelfHitTestInvisible <Score text="SelfHitTestInvisible" /> 

• **SelfHitTestInvisible** = ``4``

可见 自身不可响应事件

___

### Visible <Score text="Visible" /> 

• **Visible** = ``0``

可见
