[GAMEPLAY](../groups/Core.GAMEPLAY.md) / NavModifierType

# NavModifierType <Badge type="tip" text="Enumeration" /> <Score text="NavModifierType" />

<p class="content-big"> 寻路动态修饰区类型，不同类型在寻路计算中成本不同，影响寻路结果 </p>

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Default](mw.NavModifierType.md#default)** = ``1``  |
| :----- |
| **[LowHeight](mw.NavModifierType.md#lowheight)** = ``2`` |
| **[Null](mw.NavModifierType.md#null)** = ``0`` |
| **[Obstacle](mw.NavModifierType.md#obstacle)** = ``3`` |

## Enumeration Members

### Default <Score text="Default" /> 

• **Default** = ``1``

默认，常规导航区域，默认应用于整个导航数据

___

### LowHeight <Score text="LowHeight" /> 

• **LowHeight** = ``2``

高度限定，在上面自由高度不足的空间中可以产生的特殊区域。任何人都不能穿越

___

### Null <Score text="Null" /> 

• **Null** = ``0``

无效，通常代表一个空区域，任何人都不能穿越

___

### Obstacle <Score text="Obstacle" /> 

• **Obstacle** = ``3``

低优先级，通常代表高成本区域，除非没有其他路径存在，否则任何人都不应该穿越该区域
