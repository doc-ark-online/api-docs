[Gameplay](../modules/Gameplay.Gameplay.md) / AbilityObject

# AbilityObject <Badge type="tip" text="Class" />

**`Description`**

技能

**`Precautions`**

服务端运行，多数情况客户端运行会自动同步至服务端

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`AbilityObject`**

## Table of contents

| Properties |
| :-----|
| **[onAbilityStateChanged](Gameplay.AbilityObject.md#onabilitystatechanged)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 技能状态改变时发送事件|
| **[onAbilityStateEnter](Gameplay.AbilityObject.md#onabilitystateenter)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 技能状态进入时发送事件|
| **[onAbilityStateExit](Gameplay.AbilityObject.md#onabilitystateexit)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 技能状态退出时发送事件|
| **[onAbilityStatePause](Gameplay.AbilityObject.md#onabilitystatepause)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 技能状态暂停时发送事件|
| **[onAbilityStateResume](Gameplay.AbilityObject.md#onabilitystateresume)**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\> <br> 技能状态继续时发送事件|

| Accessors |
| :-----|
| **[currentAbilityState](Gameplay.AbilityObject.md#currentabilitystate)**(): [`AbilityState`](Gameplay.AbilityState.md) <br> 获取能力状态|
| **[currentAbilityStateIndex](Gameplay.AbilityObject.md#currentabilitystateindex)**(): `number` <br> 获取当前能力状态索引值|
| **[duration](Gameplay.AbilityObject.md#duration)**(): `number` <br> 获取能力对象执行时间|
| **[isAbilityReady](Gameplay.AbilityObject.md#isabilityready)**(): `boolean` <br> 是否进入Ready状态|

| Methods |
| :-----|
| **[activate](Gameplay.AbilityObject.md#activate)**(): `void` <br> 激活能力|
| **[addAbilityState](Gameplay.AbilityObject.md#addabilitystate)**(`string`, `number`, `boolean`, `boolean`, `boolean`, [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md)): `number` <br> 添加能力状态|
| **[bindPlayer](Gameplay.AbilityObject.md#bindplayer)**([`Player`](Gameplay.Player.md)): `boolean` <br> 绑定玩家，特指使用该能力对象的玩家|
| **[deactivate](Gameplay.AbilityObject.md#deactivate)**(): `void` <br> 失活能力|
| **[getAbilityStateByIndex](Gameplay.AbilityObject.md#getabilitystatebyindex)**(`number`): [`AbilityState`](Gameplay.AbilityState.md) <br> 根据索引获取能力状态|
| **[getAllAbilityState](Gameplay.AbilityObject.md#getallabilitystate)**(): [`AbilityState`](Gameplay.AbilityState.md)[] <br> 获取所有能力状态|
| **[pause](Gameplay.AbilityObject.md#pause)**(): `void` <br> 暂停能力|
| **[removeAbilityState](Gameplay.AbilityObject.md#removeabilitystate)**(`number`): `boolean` <br> 删除添加状态|
| **[resume](Gameplay.AbilityObject.md#resume)**(): `void` <br> 唤醒能力|
| **[switchTo](Gameplay.AbilityObject.md#switchto)**(`number`): `void` <br> 跳转能力释放阶段|

## Properties

### onAbilityStateChanged

• **onAbilityStateChanged**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

**`Description`**

技能状态改变时发送事件

___

### onAbilityStateEnter

• **onAbilityStateEnter**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

**`Description`**

技能状态进入时发送事件

___

### onAbilityStateExit

• **onAbilityStateExit**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

**`Description`**

技能状态退出时发送事件

___

### onAbilityStatePause

• **onAbilityStatePause**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

**`Description`**

技能状态暂停时发送事件

___

### onAbilityStateResume

• **onAbilityStateResume**: [`DelegateInterface`](../interfaces/Type.DelegateInterface.md)<(`StateIndex`: `number`, `AbilityState`: [`AbilityState`](Gameplay.AbilityState.md)) => `void`\>

**`Description`**

技能状态继续时发送事件

## Accessors

### currentAbilityState

• `get` **currentAbilityState**(): [`AbilityState`](Gameplay.AbilityState.md)

**`Description`**

获取能力状态

**`Effect`**

调用端生效

#### Returns

[`AbilityState`](Gameplay.AbilityState.md)

获取能力状态

___

### currentAbilityStateIndex

• `get` **currentAbilityStateIndex**(): `number`

**`Description`**

获取当前能力状态索引值

**`Effect`**

客户端调用自动同步至服务端

#### Returns

`number`

索引

___

### duration

• `get` **duration**(): `number`

**`Description`**

获取能力对象执行时间

**`Effect`**

调用端生效

#### Returns

`number`

获取能力对象执行时间


### isAbilityReady

• `get` **isAbilityReady**(): `boolean`

**`Description`**

是否进入Ready状态

**`Effect`**

服务器端调用

#### Returns

`boolean`

true或false


## Methods

### activate

▸ **activate**(): `void`

**`Description`**

激活能力

**`Effect`**

客户端调用自动同步至服务端

#### Returns

`void`

___

### addAbilityState

▸ **addAbilityState**(`animAssetGUID`, `duration?`, `isLoop?`, `canMove?`, `canJump?`, `moveControl?`): `number`

**`Description`**

添加能力状态

**`Effect`**

客户端调用自动同步至服务端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animAssetGUID` | `string` |  动画资源 ，项目未引用过的资源导入会失败 |
| `duration?` | `number` |  持续时间 default: 0.033 |
| `isLoop?` | `boolean` |  是否循环 default: false |
| `canMove?` | `boolean` |  可移动 default: false |
| `canJump?` | `boolean` |  可跳跃 default: false |
| `moveControl?` | [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) |  移动控制模式 default: MoveControlMode.null |

#### Returns

`number`

成功返回技能索引，失败返回-1


### bindPlayer

▸ **bindPlayer**(`player`): `boolean`

**`Description`**

绑定玩家，特指使用该能力对象的玩家

**`Precautions`**

单端调用即可，不需要重复调用。

**`Effect`**

客户端调用自动同步至服务端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](Gameplay.Player.md) |  需要使用技能的角色 |

#### Returns

`boolean`

当有对内部玩家进行赋值时，返回 true


### deactivate

▸ **deactivate**(): `void`

**`Description`**

失活能力

**`Effect`**

客户端调用自动同步至服务端

#### Returns

`void`


### getAbilityStateByIndex

▸ **getAbilityStateByIndex**(`Index`): [`AbilityState`](Gameplay.AbilityState.md)

**`Description`**

根据索引获取能力状态

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 能力状态序号 |

#### Returns

[`AbilityState`](Gameplay.AbilityState.md)

根据索引获取能力状态

___

### getAllAbilityState

▸ **getAllAbilityState**(): [`AbilityState`](Gameplay.AbilityState.md)[]

**`Description`**

获取所有能力状态

**`Effect`**

调用端生效

#### Returns

[`AbilityState`](Gameplay.AbilityState.md)[]

能力状态数组


### pause

▸ **pause**(): `void`

**`Description`**

暂停能力

**`Effect`**

客户端调用自动同步至服务端

#### Returns

`void`


### removeAbilityState

▸ **removeAbilityState**(`Index`): `boolean`

**`Description`**

删除添加状态

**`Effect`**

客户端调用自动同步至服务端

**`Precautions`**

激活状态、未初始化状态、状态个数超过最大值调用失败

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Index` | `number` | 状态序号 |

#### Returns

`boolean`

成功返回true，失败返回false

___

### resume

▸ **resume**(): `void`

**`Description`**

唤醒能力

**`Effect`**

客户端调用自动同步至服务端

#### Returns

`void`


### switchTo

▸ **switchTo**(`StateIndex`): `void`

**`Description`**

跳转能力释放阶段

**`Effect`**

客户端调用自动同步至服务端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StateIndex` | `number` | 能力释放阶段序号 |

#### Returns

`void`
