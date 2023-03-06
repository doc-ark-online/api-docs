[Avatar](../groups/Avatar.Avatar.md) / MovementDirection

# MovementDirection <Badge type="tip" text="Enumeration" /> <Score text="MovementDirection" />

运动时依据的正方向
             不同的模式会决定运动时依据的实际轴向修改方式
             AxisDirection模式下,可以修改character的movementAxisDirection决定移动轴向
             ViewDirection模式下,移动轴向会随着视口的旋转自动变化
             ControllerDirection模式下,移动轴向会随着控制器的旋转自动变化

             例：
             1.调用addMoveInput接口,传入参数为Type.Vector.forward
               当运动时依据的实际轴向为世界前方向(Type.Vector.forward)时,实际运动方向为世界前方向(Type.Vector.forward)
               当运动时依据的实际轴向为世界右方向(Type.Vector.right)时,实际运动方向为世界正方向(Type.Vector.right)

             2.调用addMoveInput接口,传入参数为Type.Vector.right
               当运动时依据的实际轴向为世界前方向(Type.Vector.forward)时,实际运动方向为世界右方向(Type.Vector.right)
               当运动时依据的实际轴向为世界右方向(Type.Vector.right)时,实际运动方向为世界后方向(Type.Vector.back)

## Table of contents

| Enumeration Members |
| :-----|
| **[AxisDirection](Gameplay.MovementDirection.md#axisdirection)** = ``0`` <br> |
| **[ControllerDirection](Gameplay.MovementDirection.md#controllerdirection)** = ``2`` <br> |
| **[ViewDirection](Gameplay.MovementDirection.md#viewdirection)** = ``1`` <br> |

## Enumeration Members

### AxisDirection <Score text="AxisDirection" /> 

• **AxisDirection** = ``0``

给定轴方向

___

### ControllerDirection <Score text="ControllerDirection" /> 

• **ControllerDirection** = ``2``

控制器方向

___

### ViewDirection <Score text="ViewDirection" /> 

• **ViewDirection** = ``1``

视口方向
