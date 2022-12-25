[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / AbilityState

# Class: AbilityState

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).AbilityState

**`Author`**

baoqiang.han

**`Description`**

技能状态

**`Network Status`**

usage:双端

**`Precautions`**

服务端运行，多数情况客户端运行会自动同步至服务端

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.AbilityState.md#constructor)

### Accessors

- [animation](Gameplay.Gameplay.AbilityState.md#animation)
- [duration](Gameplay.Gameplay.AbilityState.md#duration)
- [executeTime](Gameplay.Gameplay.AbilityState.md#executetime)
- [loop](Gameplay.Gameplay.AbilityState.md#loop)

### Methods

- [addControlAbility](Gameplay.Gameplay.AbilityState.md#addcontrolability)
- [cancelControlAbility](Gameplay.Gameplay.AbilityState.md#cancelcontrolability)
- [enableJump](Gameplay.Gameplay.AbilityState.md#enablejump)
- [enableMove](Gameplay.Gameplay.AbilityState.md#enablemove)
- [enableTurn](Gameplay.Gameplay.AbilityState.md#enableturn)

## Constructors

### constructor

• **new AbilityState**()

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

#### Defined in

Gameplay/index.d.ts:8330

• `set` **animation**(`AnimGuid`): `void`

**`Description`**

设置动画资源

**`Effect`**

调用端生效

#### Parameters

| Name       | Type     | Description     |
| :--------- | :------- | :-------------- |
| `AnimGuid` | `string` | usage:资源 GUID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8336

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

#### Defined in

Gameplay/index.d.ts:8298

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

#### Defined in

Gameplay/index.d.ts:8305

• `set` **executeTime**(`Time`): `void`

**`Description`**

设置释放状态可执行总时长时间

**`Precautions`**

状态执行的时间，小于 0 为无限（根据 Cell 耗时最长的来确定），否则按配置时间进行结束

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description                        |
| :----- | :------- | :--------------------------------- |
| `Time` | `number` | usage:设置释放状态可执行总时长时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8312

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

#### Defined in

Gameplay/index.d.ts:8318

• `set` **loop**(`LoopState`): `void`

**`Description`**

设置释放状态是否循环

**`Effect`**

调用端生效

#### Parameters

| Name        | Type      | Description         |
| :---------- | :-------- | :------------------ |
| `LoopState` | `boolean` | usage:true 或 false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8324

## Methods

### addControlAbility

▸ **addControlAbility**(`ControlType`): `void`

**`Description`**

添加释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name          | Type                                                                               | Description            |
| :------------ | :--------------------------------------------------------------------------------- | :--------------------- |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | usage:技能状态控制枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8342

---

### cancelControlAbility

▸ **cancelControlAbility**(`ControlType`): `void`

**`Description`**

取消释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name          | Type                                                                               | Description            |
| :------------ | :--------------------------------------------------------------------------------- | :--------------------- |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | usage:技能状态控制枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8348

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

#### Defined in

Gameplay/index.d.ts:8366

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

#### Defined in

Gameplay/index.d.ts:8354

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

#### Defined in

Gameplay/index.d.ts:8360
