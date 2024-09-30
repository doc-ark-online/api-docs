[玩法](../groups/玩法.玩法.md) / LinkClassType

# LinkClassType <Badge type="tip" text="Enumeration" /> <Score text="LinkClassType" />

设置链接区域的寻路类型

## Table of contents

### Enumeration Members <Score text="Enumeration" /> 
| **[Default](mw.LinkClassType.md#default)** = ``0``  |
| :----- |
| **[LowHeight](mw.LinkClassType.md#lowheight)** = ``1`` |
| **[Null](mw.LinkClassType.md#null)** = ``2`` |
| **[Obstacle](mw.LinkClassType.md#obstacle)** = ``3`` |

## Enumeration Members

### Default <Score text="Default" /> 

• **Default** = ``0``

默认：默认情况下，该区域与寻路区域有同样的效果

___

### LowHeight <Score text="LowHeight" /> 

• **LowHeight** = ``1``

高度限定：表示匹配遍历条件的区域，其中包含防止人形对象遍历的较低高度。寻路区域不会在此体积内生成寻路数据

___

### Null <Score text="Null" /> 

• **Null** = ``2``

无效：表示体积内的空白区域，寻路区域不会在此体积内生成寻路数据

___

### Obstacle <Score text="Obstacle" /> 

• **Obstacle** = ``3``

低优先级：将屏障区域内的寻路计算成本设置高于寻路区域的成本
