[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Character

# Class: Character

#### extend [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md)

<br>**`简介`**

- 是人形角色的控制类
- 角色是具有一套行为能力的模型。游戏世界中，角色分为非玩家角色和玩家角色。
- 【玩家角色】：由玩家控制的角色，大部分的玩家角色都是游戏剧情的关键或是主角。
- 【非玩家角色】：非玩家角色也被称为 NPC，指的是在游戏中不受真人玩家控制的游戏角色。NPC 一般由计算机人工智能控制，拥有一套行为模式的角色。NPC 通常分为剧情 NPC，战斗 NPC，服务 NPC 以及兼具多种功能的 NPC 等。
- Character 拥有 CharacterBase 的所有功能，并且额外附带了 CameraSystem，是由玩家控制的角色，通常被内置的输入系统所操作
- 你可以在场景的 Player 面板中修改 Character 的初始化配置

<br>**`如何获取`**

- Character 可以通过[Player](../modules/Player.md)对象获取`player.character`
- 通过 getAllPlayers 可以获取到
- Character 无法被用户主动实例化，根据当前 Player 的数量由世界自动生成，不可通过 new 创建

<br>**`注意事项`**

- 频繁更改 location、rotation 等可能会导致性能问题
- 部分 API 是仅单端可调用，部分是自动同步双端，请参考具体的函数说明
- 从 019 版本开始，Character 的移动逻辑会受到客户端玩家的控制，尽量不要在服务器上去设置玩家角色的位置、角度，这导致会多一次 RPC 的调用，并且多出一次网络帧的延迟
- 后续版本会提供更多可选择的移动逻辑，你可以根据不同游戏的特性来选择这些

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Character.md#constructor)

### Properties

- [player](Gameplay.Gameplay.Character.md#player)

### Accessors

- [airControl](Gameplay.Gameplay.Character.md#aircontrol)
- [animationStance](Gameplay.Gameplay.Character.md#animationstance)
- [appearance](Gameplay.Gameplay.Character.md#appearance)

### Methods

- [addMoveInput](Gameplay.Gameplay.Character.md#addmoveinput)
- [attach](Gameplay.Gameplay.Character.md#attach)

## Constructors

### constructor

• **new Character**()

#### extend [CharacterBase](Gameplay.Gameplay.CharacterBase.md).[constructor](Gameplay.Gameplay.CharacterBase.md#constructor)

## Properties

### player

#### extend [CharacterBase](Gameplay.Gameplay.CharacterBase.md).[player](Gameplay.Gameplay.CharacterBase.md#player)

• **player**: [`Player`](Gameplay.Gameplay.Player.md)

玩家对象

## Accessors

### airControl

• `get` **airControl**(): `number`

#### extend CharacterBase.airControl

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions
范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制
:::

• `set` **airControl**(`InAirControl` : `number`): `void`

#### extend CharacterBase.airControl

角色在空中时, 控制水平方向移动的灵活度

::: warning Precautions
范围:0~1, 0 表示不能控制, 1 表示能按地面最大移动速率完全控制
:::

### animationStance

• `get` **animationStance**(): `string`

#### extend CharacterBase.animationStance

动画姿态

::: warning Precautions
动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态
:::

• `set` **animationStance**(`StanceGuid` : `string`): `void`

#### extend CharacterBase.animationStance

动画姿态

::: warning Precautions
动画姿态是更多样的预制动画状态机, 它可以和基础姿态进行上下半身的动画混合, 传入动画姿态资源的 guid 进行动画姿态的切换, 传入空字符串时, 清除动画姿态
:::

---

### appearance

• `get` **appearance**(): [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

#### extend CharacterBase.appearance

当前外观修改对象

---

### baseShadowLocationOffset

• `get` **baseShadowLocationOffset**(): [`Vector2`](Type.Type.Vector2.md)

#### extend CharacterBase.baseShadowLocationOffset

模拟阴影相对于角色脚底中心的位置偏移

• `set` **baseShadowLocationOffset**(`InLocationOffset` : [`Vector2`](Type.Type.Vector2.md)): `void`

#### extend CharacterBase.baseShadowLocationOffset

模拟阴影相对于角色脚底中心的位置偏移

## Methods

### addMoveInput

▸ **addMoveInput**(`direction` : [`Vector`](Type.Type.Vector.md)): `void`

#### extend [CharacterBase](Gameplay.Gameplay.CharacterBase.md).[addMoveInput](Gameplay.Gameplay.CharacterBase.md#addmoveinput)

```ts
/**
 * @param direction usage:输入的方向
 */
addMoveInput(direction: Type.Vector): void;
```

沿着给定的方向向量添加移动输入

::: warning Precautions
效果受 movementDirection 属性影响
:::

---

### attach

▸ **attach**(`gameObject` : `GameObject`, `slotName` : [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `void`

#### extend [CharacterBase](Gameplay.Gameplay.CharacterBase.md).[attach](Gameplay.Gameplay.CharacterBase.md#attach)

```ts
/**
 * @param gameObject usage:物体
 * @param slotName usage:插槽类型
 */
attach(gameObject: Core.GameObject, slotName: SlotType): void;
```

将物体附着到人物角色的指定插槽
