[Gameplay](../groups/Gameplay.Gameplay.md) / SwitchCameraBlendFunction

# SwitchCameraBlendFunction <Badge type="tip" text="Enumeration" /> <Score text="SwitchCameraBlendFunction" />

切换摄像机时运用的混合函数

## Table of contents

| Enumeration Members |
| :-----|
| **[Cubic](Gameplay.SwitchCameraBlendFunction.md#cubic)** = ``1`` <br> |
| **[EaseIn](Gameplay.SwitchCameraBlendFunction.md#easein)** = ``2`` <br> |
| **[EaseInOut](Gameplay.SwitchCameraBlendFunction.md#easeinout)** = ``4`` <br> |
| **[EaseOut](Gameplay.SwitchCameraBlendFunction.md#easeout)** = ``3`` <br> |
| **[Linear](Gameplay.SwitchCameraBlendFunction.md#linear)** = ``0`` <br> |

## Enumeration Members

### Cubic <Score text="Cubic" /> 

• **Cubic** = ``1``

有轻微的缓入和缓出,但缓和程度无法调整

___

### EaseIn <Score text="EaseIn" /> 

• **EaseIn** = ``2``

立即加速,但平稳减速到目标,由blendExp参数控制的缓和程度

___

### EaseInOut <Score text="EaseInOut" /> 

• **EaseInOut** = ``4``

相机平稳地加速和减速,由 BlendExp 控制缓和程度

___

### EaseOut <Score text="EaseOut" /> 

• **EaseOut** = ``3``

相机平稳加速,但不会减速到目标,由blendExp参数控制的缓和程度

___

### Linear <Score text="Linear" /> 

• **Linear** = ``0``

简单的线性插值
