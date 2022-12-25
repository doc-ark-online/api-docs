# AbilityStateControlType <Badge type="tip" text="Enumeration" />

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).AbilityStateControlType

## 样例一

技能状态控制枚举

## Enumeration Members

### CanJump

• **CanJump** = `2`

可跳跃

---

### CanMove

• **CanMove** = `1`

可移动

---

### CanTurn

• **CanTurn** = `4`

可转向

---

### None

• **None** = `0`

默认值

## 样例二

技能状态控制枚举

```ts
    enum AbilityStateControlType {
        /** 默认值 */
        None = 0,
        /** 可移动 */
        CanMove = 1,
        /** 可跳跃 */
        CanJump = 2,
        /** 可转向 */
        CanTurn = 4
```
