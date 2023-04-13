[Gameplay](../groups/Gameplay.Gameplay.md) / AbilityState

# AbilityState <Badge type="tip" text="Class" /> <Score text="AbilityState" />

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:024 reason: Gameplay模块优化方案 replacement: 无

:::

能力状态，用于读取/配置能力对象的能力相关的属性

::: warning Precautions

服务端运行，多数情况客户端运行会自动同步至服务端

:::

## Table of contents

| Accessors |
| :-----|
| **[animation](Gameplay.AbilityState.md#animation)**(): `string` <br> 获取动画资源|
| **[duration](Gameplay.AbilityState.md#duration)**(): `number` <br> 获取释放状态当前执行时间|
| **[executeTime](Gameplay.AbilityState.md#executetime)**(): `number` <br> 获取释放状态可执行总时长时间|
| **[jumpEnable](Gameplay.AbilityState.md#jumpenable)**(): `boolean` <br> 获取对象是否可跳跃|
| **[loop](Gameplay.AbilityState.md#loop)**(): `boolean` <br> 获取释放状态是否可循环isLoop|
| **[moveEnable](Gameplay.AbilityState.md#moveenable)**(): `boolean` <br> 获取对象是否可移动|
| **[turnEnable](Gameplay.AbilityState.md#turnenable)**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) <br> 获取对象是否可转向|

| Methods |
| :-----|
| **[addControlAbility](Gameplay.AbilityState.md#addcontrolability)**(`ControlType`: [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md)): `void` <br> 添加释放状态的控制性|
| **[cancelControlAbility](Gameplay.AbilityState.md#cancelcontrolability)**(`ControlType`: [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md)): `void` <br> 取消释放状态的控制性|
| **[enableJump](Gameplay.AbilityState.md#enablejump)**(): `boolean` <br> 获取对象是否可跳跃|
| **[enableMove](Gameplay.AbilityState.md#enablemove)**(): `boolean` <br> 获取对象是否可移动|
| **[enableTurn](Gameplay.AbilityState.md#enableturn)**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) <br> 获取对象是否可转向|

## Accessors

### animation <Score text="animation" /> 

• `get` **animation**(): `string` 

获取动画资源


#### Returns

`string`

资源GUID

• `set` **animation**(`AnimGuid`): `void` 

设置动画资源


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `AnimGuid` | `string` | 资源GUID |


___

### duration <Score text="duration" /> 

• `get` **duration**(): `number` 

获取释放状态当前执行时间


#### Returns

`number`

获取释放状态当前执行时间

___

### executeTime <Score text="executeTime" /> 

• `get` **executeTime**(): `number` 

获取释放状态可执行总时长时间

::: warning Precautions

状态执行的时间，小于0为无限（根据Cell耗时最长的来确定），否则按配置时间进行结束

:::


#### Returns

`number`

获取释放状态可执行总时长时间

• `set` **executeTime**(`Time`): `void`

设置释放状态可执行总时长时间

::: warning Precautions

状态执行的时间，小于0为无限（根据Cell耗时最长的来确定），否则按配置时间进行结束

:::

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Time` | `number` | 设置释放状态可执行总时长时间 |


___

### jumpEnable <Score text="jumpEnable" /> 

• `get` **jumpEnable**(): `boolean` 

获取对象是否可跳跃


#### Returns

`boolean`

支持跳跃时返回 true，否则 false

___

### loop <Score text="loop" /> 

• `get` **loop**(): `boolean` 

获取释放状态是否可循环isLoop


#### Returns

`boolean`

true或false

• `set` **loop**(`LoopState`): `void` 

设置释放状态是否循环


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LoopState` | `boolean` | true或false |


___

### moveEnable <Score text="moveEnable" /> 

• `get` **moveEnable**(): `boolean` 

获取对象是否可移动


#### Returns

`boolean`

支持移动时返回 true，否则 false

___

### turnEnable <Score text="turnEnable" /> 

• `get` **turnEnable**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) 

获取对象是否可转向


#### Returns

[`MoveControlMode`](../enums/Gameplay.MoveControlMode.md)

当前配置的移动模式

## Methods

### addControlAbility <Score text="addControlAbility" /> 

• **addControlAbility**(`ControlType`): `void` 

添加释放状态的控制性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |


___

### cancelControlAbility <Score text="cancelControlAbility" /> 

• **cancelControlAbility**(`ControlType`): `void` 

取消释放状态的控制性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ControlType` | [`AbilityStateControlType`](../enums/Gameplay.AbilityStateControlType.md) | 技能状态控制枚举 |


___

### enableJump <Score text="enableJump" /> 

• **enableJump**(): `boolean` 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: jumpEnable

:::

获取对象是否可跳跃


#### Returns

`boolean`

支持跳跃时返回 true，否则 false

___

### enableMove <Score text="enableMove" /> 

• **enableMove**(): `boolean` 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: moveEnable

:::

获取对象是否可移动


#### Returns

`boolean`

支持移动时返回 true，否则 false

___

### enableTurn <Score text="enableTurn" /> 

• **enableTurn**(): [`MoveControlMode`](../enums/Gameplay.MoveControlMode.md) 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason: API 注释命名优化 replacement: turnEnable

:::

获取对象是否可转向


#### Returns

[`MoveControlMode`](../enums/Gameplay.MoveControlMode.md)

当前配置的移动模式
