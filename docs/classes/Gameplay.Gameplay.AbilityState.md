[Gameplay](../modules/Gameplay.Gameplay.md) / AbilityState

# AbilityState <Badge type="tip" text="Class" />

**`Description`**

技能状态

**`Precautions`**

服务端运行，多数情况客户端运行会自动同步至服务端

## Table of contents

| Accessors                                                                                                      |
| :------------------------------------------------------------------------------------------------------------- |
| **[animation](Gameplay.Gameplay.AbilityState.md#animation)**(): `string` <br> 获取动画资源                     |
| **[duration](Gameplay.Gameplay.AbilityState.md#duration)**(): `number` <br> 获取释放状态当前执行时间           |
| **[executeTime](Gameplay.Gameplay.AbilityState.md#executetime)**(): `number` <br> 获取释放状态可执行总时长时间 |
| **[loop](Gameplay.Gameplay.AbilityState.md#loop)**(): `boolean` <br> 获取释放状态是否可循环 isLoop             |

| Methods                                                                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addControlAbility](Gameplay.Gameplay.AbilityState.md#addcontrolability)**([`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md)): `void` <br> 添加释放状态的控制性       |
| **[cancelControlAbility](Gameplay.Gameplay.AbilityState.md#cancelcontrolability)**([`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md)): `void` <br> 取消释放状态的控制性 |
| **[enableJump](Gameplay.Gameplay.AbilityState.md#enablejump)**(): `boolean` <br> 获取对象是否可跳跃                                                                                                      |
| **[enableMove](Gameplay.Gameplay.AbilityState.md#enablemove)**(): `boolean` <br> 获取对象是否可移动                                                                                                      |
| **[enableTurn](Gameplay.Gameplay.AbilityState.md#enableturn)**(): [`MoveControlMode`](../enums/Gameplay.Gameplay.MoveControlMode.md) <br> 获取对象是否可转向                                             |

## Accessors

### animation

• `get` **animation**(): `string`

**`Description`**

获取动画资源

**`Effect`**

调用端生效

#### Returns

`string`

资源 GUID

• `set` **animation**(`AnimGuid`): `void`

**`Description`**

设置动画资源

**`Effect`**

调用端生效

#### Parameters

| Name       | Type     | Description |
| :--------- | :------- | :---------- |
| `AnimGuid` | `string` | 资源 GUID   |

#### Returns

`void`

---

### duration

• `get` **duration**(): `number`

**`Description`**

获取释放状态当前执行时间

**`Effect`**

调用端生效

#### Returns

`number`

获取释放状态当前执行时间

---

### executeTime

• `get` **executeTime**(): `number`

**`Description`**

获取释放状态可执行总时长时间

**`Precautions`**

状态执行的时间，小于 0 为无限（根据 Cell 耗时最长的来确定），否则按配置时间进行结束

**`Effect`**

调用端生效

#### Returns

`number`

获取释放状态可执行总时长时间

• `set` **executeTime**(`Time`): `void`

**`Description`**

设置释放状态可执行总时长时间

**`Precautions`**

状态执行的时间，小于 0 为无限（根据 Cell 耗时最长的来确定），否则按配置时间进行结束

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description                  |
| :----- | :------- | :--------------------------- |
| `Time` | `number` | 设置释放状态可执行总时长时间 |

#### Returns

`void`

---

### loop

• `get` **loop**(): `boolean`

**`Description`**

获取释放状态是否可循环 isLoop

**`Effect`**

调用端生效

#### Returns

`boolean`

true 或 false

• `set` **loop**(`LoopState`): `void`

**`Description`**

设置释放状态是否循环

**`Effect`**

调用端生效

#### Parameters

| Name        | Type      | Description   |
| :---------- | :-------- | :------------ |
| `LoopState` | `boolean` | true 或 false |

#### Returns

`void`

## Methods

### addControlAbility

▸ **addControlAbility**(`ControlType`): `void`

**`Description`**

添加释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name          | Type                                                                               | Description      |
| :------------ | :--------------------------------------------------------------------------------- | :--------------- |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |

#### Returns

`void`

---

### cancelControlAbility

▸ **cancelControlAbility**(`ControlType`): `void`

**`Description`**

取消释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name          | Type                                                                               | Description      |
| :------------ | :--------------------------------------------------------------------------------- | :--------------- |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |

#### Returns

`void`

---

### enableJump

▸ **enableJump**(): `boolean`

**`Description`**

获取对象是否可跳跃

**`Effect`**

调用端生效

#### Returns

`boolean`

true 或 false

---

### enableMove

▸ **enableMove**(): `boolean`

**`Description`**

获取对象是否可移动

**`Effect`**

调用端生效

#### Returns

`boolean`

true 或 false

---

### enableTurn

▸ **enableTurn**(): [`MoveControlMode`](../enums/Gameplay.Gameplay.MoveControlMode.md)

**`Description`**

获取对象是否可转向

**`Effect`**

调用端生效

#### Returns

[`MoveControlMode`](../enums/Gameplay.Gameplay.MoveControlMode.md)

true 或 false
