[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / AreaClass

# Enumeration: AreaClass

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).AreaClass

**`Description`**

寻路区域屏障寻路计算类型

## Table of contents

### Enumeration Members

- [Default](Gameplay.Gameplay.AreaClass.md#default)
- [LowHeight](Gameplay.Gameplay.AreaClass.md#lowheight)
- [Null](Gameplay.Gameplay.AreaClass.md#null)
- [Obstacle](Gameplay.Gameplay.AreaClass.md#obstacle)

## Enumeration Members

### Default

• **Default** = `1`

默认，常规导航区域，默认应用于整个导航数据

#### Defined in

Gameplay/index.d.ts:12076

---

### LowHeight

• **LowHeight** = `2`

高度限定，在上面自由高度不足的空间中可以产生的特殊区域。任何人都不能穿越

#### Defined in

Gameplay/index.d.ts:12078

---

### Null

• **Null** = `0`

无效，通常代表一个空区域，任何人都不能穿越

#### Defined in

Gameplay/index.d.ts:12074

---

### Obstacle

• **Obstacle** = `3`

低优先级，通常代表高成本区域，除非没有其他路径存在，否则任何人都不应该穿越该区域

#### Defined in

Gameplay/index.d.ts:12080
