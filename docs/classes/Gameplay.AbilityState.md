[Gameplay](../modules/Gameplay.Gameplay.md) / AbilityState

# AbilityState <Badge type="tip" text="Class" /> <Score text="AbilityState" />

**`Description`**

技能状态

::: warning Precautions

服务端运行，多数情况客户端运行会自动同步至服务端

:::

## Table of contents

| Accessors |
| :-----|
| **[animation](Gameplay.AbilityState.md#animation)**(): `string` <br> 获取动画资源|
| **[duration](Gameplay.AbilityState.md#duration)**(): `number` <br> 获取释放状态当前执行时间|
| **[executeTime](Gameplay.AbilityState.md#executetime)**(): `number` <br> 获取释放状态可执行总时长时间|
| **[loop](Gameplay.AbilityState.md#loop)**(): `boolean` <br> 获取释放状态是否可循环isLoop|

| Methods |
| :-----|
| **[addControlAbility](Gameplay.AbilityState.md#addcontrolability)**([`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md)): `void` <br> 添加释放状态的控制性|
| **[cancelControlAbility](Gameplay.AbilityState.md#cancelcontrolability)**([`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md)): `void` <br> 取消释放状态的控制性|
| **[enableJump](Gameplay.AbilityState.md#enablejump)**(): `boolean` <br> 获取对象是否可跳跃|
| **[enableMove](Gameplay.AbilityState.md#enablemove)**(): `boolean` <br> 获取对象是否可移动|
| **[enableTurn](Gameplay.AbilityState.md#enableturn)**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) <br> 获取对象是否可转向|

## Accessors

### animation <Score text="animation" /> 

• `get` **animation**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取动画资源


#### Returns

`string`

资源GUID

• `set` **animation**(`AnimGuid`): `void` <Badge type="tip" text="other" />

**`Description`**

设置动画资源


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AnimGuid` | `string` | 资源GUID |


___

### duration <Score text="duration" /> 

• `get` **duration**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取释放状态当前执行时间


#### Returns

`number`

获取释放状态当前执行时间

___

### executeTime <Score text="executeTime" /> 

• `get` **executeTime**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取释放状态可执行总时长时间

::: warning Precautions

状态执行的时间，小于0为无限（根据Cell耗时最长的来确定），否则按配置时间进行结束

:::


#### Returns

`number`

获取释放状态可执行总时长时间

• `set` **executeTime**(`Time`): `void` <Badge type="tip" text="other" />

**`Description`**

设置释放状态可执行总时长时间

::: warning Precautions

状态执行的时间，小于0为无限（根据Cell耗时最长的来确定），否则按配置时间进行结束

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` | 设置释放状态可执行总时长时间 |


___

### loop <Score text="loop" /> 

• `get` **loop**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取释放状态是否可循环isLoop


#### Returns

`boolean`

true或false

• `set` **loop**(`LoopState`): `void` <Badge type="tip" text="other" />

**`Description`**

设置释放状态是否循环


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LoopState` | `boolean` | true或false |


## Methods

### addControlAbility <Score text="addControlAbility" /> 

▸ **addControlAbility**(`ControlType`): `void` <Badge type="tip" text="other" />

**`Description`**

添加释放状态的控制性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |


___

### cancelControlAbility <Score text="cancelControlAbility" /> 

▸ **cancelControlAbility**(`ControlType`): `void` <Badge type="tip" text="other" />

**`Description`**

取消释放状态的控制性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |


___

### enableJump <Score text="enableJump" /> 

▸ **enableJump**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取对象是否可跳跃


#### Returns

`boolean`

true或false

___

### enableMove <Score text="enableMove" /> 

▸ **enableMove**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取对象是否可移动


#### Returns

`boolean`

true或false

___

### enableTurn <Score text="enableTurn" /> 

▸ **enableTurn**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) <Badge type="tip" text="other" />

**`Description`**

获取对象是否可转向


#### Returns

[`MoveControlMode`](../enums/Gameplay.MoveControlMode.md)

true或false
