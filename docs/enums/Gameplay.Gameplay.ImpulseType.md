[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / ImpulseType

# Enumeration: ImpulseType

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).ImpulseType

**`Description`**

冲量的应用方式

## Table of contents

### Enumeration Members

- [Absolute](Gameplay.Gameplay.ImpulseType.md#absolute)
- [Relative](Gameplay.Gameplay.ImpulseType.md#relative)

## Enumeration Members

### Absolute

• **Absolute** = `0`

绝对冲量，为冲量功能对象设定一个绝对方向的冲量值，
当被施力对象与冲量功能对象发生碰撞时，将冲量力直接应用到被施力对象上。

#### Defined in

Gameplay/index.d.ts:12623

---

### Relative

• **Relative** = `1`

相对冲量，为冲量功能对象设定一个相对方向的冲量值，当被施力对象与冲量功能对象发生碰撞时，
会将被施力对象的矢量值叠加到冲量对象上，计算一个新的冲量值应用到被施力对象上。

#### Defined in

Gameplay/index.d.ts:12627
