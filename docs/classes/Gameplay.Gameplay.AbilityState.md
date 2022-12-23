[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / AbilityState

# Class: AbilityState

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).AbilityState

**`Author`**

Hanbaoqiang

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

- [beginControllAbility](Gameplay.Gameplay.AbilityState.md#begincontrollability)
- [cancelControllAbility](Gameplay.Gameplay.AbilityState.md#cancelcontrollability)
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

资源GUID

#### Defined in

Gameplay/index.d.ts:8190

• `set` **animation**(`AnimGuid`): `void`

**`Description`**

设置动画资源

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AnimGuid` | `string` | usage:资源GUID |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8196

___

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

Gameplay/index.d.ts:8160

___

### executeTime

• `get` **executeTime**(): `number`

**`Description`**

获取释放状态可执行时间

**`Effect`**

调用端生效

#### Returns

`number`

获取释放状态可执行时间

#### Defined in

Gameplay/index.d.ts:8166

• `set` **executeTime**(`Time`): `void`

**`Description`**

设置释放状态可执行时间

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` | usage:设置释放状态可执行时间 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8172

___

### loop

• `get` **loop**(): `boolean`

**`Description`**

获取释放状态是否可循环isLoop

**`Effect`**

调用端生效

#### Returns

`boolean`

true或false

#### Defined in

Gameplay/index.d.ts:8178

• `set` **loop**(`LoopState`): `void`

**`Description`**

设置释放状态是否循环

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LoopState` | `boolean` | usage:true或false |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8184

## Methods

### beginControllAbility

▸ **beginControllAbility**(`ControlType`): `void`

**`Description`**

添加释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | usage:技能状态控制枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8202

___

### cancelControllAbility

▸ **cancelControllAbility**(`ControlType`): `void`

**`Description`**

取消释放状态的控制性

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.Gameplay.AbilityStateControlType.md) | usage:技能状态控制枚举 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8208

___

### enableJump

▸ **enableJump**(): `boolean`

**`Description`**

是否可跳跃

**`Effect`**

调用端生效

#### Returns

`boolean`

true或false

#### Defined in

Gameplay/index.d.ts:8226

___

### enableMove

▸ **enableMove**(): `boolean`

**`Description`**

是否可移动

**`Effect`**

调用端生效

#### Returns

`boolean`

true或false

#### Defined in

Gameplay/index.d.ts:8214

___

### enableTurn

▸ **enableTurn**(): [`MoveControlMode`](../enums/Gameplay.Gameplay.MoveControlMode.md)

**`Description`**

是否可转向

**`Effect`**

调用端生效

#### Returns

[`MoveControlMode`](../enums/Gameplay.Gameplay.MoveControlMode.md)

true或false

#### Defined in

Gameplay/index.d.ts:8220
