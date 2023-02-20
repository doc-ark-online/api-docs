[Gameplay](../modules/Gameplay.Gameplay.md) / AreaClass

# AreaClass <Badge type="tip" text="Enumeration" /> <Score text="AreaClass" />

寻路区域屏障寻路计算类型

**`Groups`**

GAMEPLAY

## Table of contents

| Enumeration Members |
| :-----|
| **[Default](Gameplay.AreaClass.md#default)** = ``1`` <br> 默认，常规导航区域，默认应用于整个导航数据|
| **[LowHeight](Gameplay.AreaClass.md#lowheight)** = ``2`` <br> 高度限定，在上面自由高度不足的空间中可以产生的特殊区域。任何人都不能穿越|
| **[Null](Gameplay.AreaClass.md#null)** = ``0`` <br> 无效，通常代表一个空区域，任何人都不能穿越|
| **[Obstacle](Gameplay.AreaClass.md#obstacle)** = ``3`` <br> 低优先级，通常代表高成本区域，除非没有其他路径存在，否则任何人都不应该穿越该区域|

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
