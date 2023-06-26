Avatar

# Avatar <Badge type="tip" text="Groups" /> <Score text="Avatar" />

## Table of contents
| Classes |
| :-----|
| [Character](../classes/Gameplay.Character.md) <br> 在CharacterBase上派生的玩家操控对象,该对象是玩家加入游戏之后,在服务器上根据配置生成,并同步到客户端的. |
| [CharacterBase](../classes/Gameplay.CharacterBase.md) <br> 角色基类,派生自GameObject,在GameObject的基础上提供对角色的高级封装,是玩家角色跟非玩家角色的基类,该对象是基类,无法使用构造函数创建此对象.主要功能分三大块:形象设置,动画,移动. |
| [Decoration](../classes/Gameplay.Decoration.md) <br> 平台形象特有的挂件数据格式 |
| [DefaultData](../classes/Gameplay.DefaultData.md) <br> 角色数据类型 |
| [FourFootStandard](../classes/Gameplay.FourFootStandard.md) <br> 四足外观形象对象,用于四足外观的设置. |
| [HumanoidV1](../classes/Gameplay.HumanoidV1.md) <br> 人形外观形象对象,用于基础人形外观的设置. |
| [HumanoidV1Face](../classes/Gameplay.HumanoidV1Face.md) <br> 人形对象V1脸部接口 |
| [HumanoidV1Hair](../classes/Gameplay.HumanoidV1Hair.md) <br> 人形对象V1头发接口 |
| [HumanoidV1Part](../classes/Gameplay.HumanoidV1Part.md) <br> 人形对象V1头发接口 |
| [HumanoidV1Trunk](../classes/Gameplay.HumanoidV1Trunk.md) <br> 人形对象V1身体接口 |
| [HumanoidV2](../classes/Gameplay.HumanoidV2.md) <br> 人形外观形象对象,用于高级人形外观的设置. |
| [HumanoidV2BehindHairPart](../classes/Gameplay.HumanoidV2BehindHairPart.md) <br> 人形对象V2后发部位接口 |
| [HumanoidV2ClothPart](../classes/Gameplay.HumanoidV2ClothPart.md) <br> 人形对象V2上衣部位接口 |
| [HumanoidV2FrontHairPart](../classes/Gameplay.HumanoidV2FrontHairPart.md) <br> 人形对象V2前发部位接口 |
| [HumanoidV2GlovesPart](../classes/Gameplay.HumanoidV2GlovesPart.md) <br> 人形对象V2手套部位接口 |
| [HumanoidV2HairPart](../classes/Gameplay.HumanoidV2HairPart.md) <br> 人形对象V2前发部位接口 |
| [HumanoidV2HeadPart](../classes/Gameplay.HumanoidV2HeadPart.md) <br> 人形对象V2头部位接口 |
| [HumanoidV2LowerClothPart](../classes/Gameplay.HumanoidV2LowerClothPart.md) <br> 人形对象V2下衣部位接口 |
| [HumanoidV2Shape](../classes/Gameplay.HumanoidV2Shape.md) <br> 人形对象V2体型 |
| [HumanoidV2ShoePart](../classes/Gameplay.HumanoidV2ShoePart.md) <br> 人形对象V2鞋子部位接口 |
| [HumanoidV2UpperClothPart](../classes/Gameplay.HumanoidV2UpperClothPart.md) <br> 人形对象V2上衣部位接口 |
| [NPC](../classes/Gameplay.NPC.md) <br> NPC 是在CharacterBase上派生的非玩家对象,不限定形象的角色对象,该对象通常被用户用于实现拥有自主功能的角色对象.生成方式:可以通过将非玩家对象(NPC)放置在场景中,由场景反序列化生成对象,也可以通过代码动态生成:Core.GameObject.spawnGameObject("NPC") as NPC; |


| Enums |
| :-----|
| [AppearanceType](../enums/Gameplay.AppearanceType.md) <br> 形象类型 |
| [BasicStanceType](../enums/Gameplay.BasicStanceType.md) <br> 基础姿态风格 |
| [BodyPartTypeV1](../enums/Gameplay.BodyPartTypeV1.md) <br> V1角色部位 |
| [CustomShapeType](../enums/Gameplay.CustomShapeType.md) <br> 碰撞体形状类型 |
| [EInitialOscillatorOffset](../enums/Gameplay.EInitialOscillatorOffset.md) <br> 定义如何开始(从零开始，或者从随机值开始) |
| [EOscillatorWaveform](../enums/Gameplay.EOscillatorWaveform.md) <br> 振荡器波形 |
| [ExpressionType](../enums/Gameplay.ExpressionType.md) <br> 表情类型 |
| [MoveControlMode](../enums/Gameplay.MoveControlMode.md) <br> 移动控制模式 |
| [MoveFacingDirection](../enums/Gameplay.MoveFacingDirection.md) <br> 运动时面朝方向 |
| [MovementDirection](../enums/Gameplay.MovementDirection.md) <br> 运动时依据的正方向 |
| [MovementMode](../enums/Gameplay.MovementMode.md) <br> 角色状态 |
| [SlotType](../enums/Gameplay.SlotType.md) <br> 人形角色插槽类型 |
| [SomatotypeFourFootStandard](../enums/Gameplay.SomatotypeFourFootStandard.md) <br> 四足体型 |
| [SomatotypeV1](../enums/Gameplay.SomatotypeV1.md) <br> V1角色体型 |
| [SomatotypeV2](../enums/Gameplay.SomatotypeV2.md) <br> 角色体型 |


| Interfaces |
| :-----|
| [IFourFootStandard](../interfaces/Gameplay.IFourFootStandard.md) <br> 标准四足接口 |
| [IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md) <br> 人形对象V1接口 |
| [IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md) <br> 人形对象V2插槽和外形加载 |
| [IHumanoidV2ClothPart](../interfaces/Gameplay.IHumanoidV2ClothPart.md) <br> 人形对象V2部位 |
| [IHumanoidV2HairPart](../interfaces/Gameplay.IHumanoidV2HairPart.md) <br> 人形对象V2部位 |
| [IHumanoidV2HeadPart](../interfaces/Gameplay.IHumanoidV2HeadPart.md) <br> 人形对象V2部位 |
| [IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md) <br> 人形对象V2材质风格 |
| [IHumanoidV2Shape](../interfaces/Gameplay.IHumanoidV2Shape.md) <br> 人形对象V2形体修改 |
| [IPart](../interfaces/Gameplay.IPart.md) <br> 部位基类 |

