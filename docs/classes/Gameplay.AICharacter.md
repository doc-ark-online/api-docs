[Gameplay](../modules/Gameplay.Gameplay.md) / AICharacter

# AICharacter <Badge type="tip" text="Class" />

**`Description`**

人形对象

## Hierarchy

- [`CharacterBase`](Gameplay.CharacterBase.md)

  ↳ **`AICharacter`**

## Table of contents

| Properties |
| :-----|
| **[isV1](Gameplay.CharacterBase.md#isv1)**: `any` <br> 判断当前角色是否是V1版本|
| **[onLoadAppearanceDataAllCompleted](Gameplay.CharacterBase.md#onloadappearancedataallcompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`LoadAppearanceDataAllCompletedCallback`](../modules/Gameplay.Gameplay.md#loadappearancedataallcompletedcallback)\> <br> 加载完角色形象数据后的回调|
| **[onMeshChanged](Gameplay.CharacterBase.md#onmeshchanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色模型切换成功广播|
| **[onMovementStateChanged](Gameplay.CharacterBase.md#onmovementstatechanged)**: [`OnMovementStateChanged`](../modules/Gameplay.Gameplay.md#onmovementstatechanged) <br> 移动状态切换时的回调|
| **[onSetAppearanceDataCompleted](Gameplay.CharacterBase.md#onsetappearancedatacompleted)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`SetAppearanceDataCallback`](../modules/Gameplay.Gameplay.md#setappearancedatacallback)\> <br> 设置一个角色编辑API成功后的回调|
| **[onTextureChanged](Gameplay.CharacterBase.md#ontexturechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<[`onAppearanceDataChanged`](../modules/Gameplay.Gameplay.md#onappearancedatachanged)\> <br> 角色贴图切换成功广播|
| **[player](Gameplay.CharacterBase.md#player)**: [`Player`](Gameplay.Player.md) <br> 玩家对象|


| Accessors |
| :-----|
| **[serverCalculateEnable](Gameplay.AICharacter.md#servercalculateenable)**(`boolean`): `void` <br> 同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算|

| Methods |
| :-----|
| **[setServerMovementEnable](Gameplay.AICharacter.md#setservermovementenable)**(`boolean`): `void` <br> 开关角色的移动计算|

## Properties

## Accessors

### serverCalculateEnable

• `set` **serverCalculateEnable**(`enable`): `void` <Badge type="tip" text="client&server" />

**`Description`**

同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算

::: warning Precautions
针对处于静默状态的ai调用用于降低暂时不必要的计算带来的性能消耗，如果ai角色需要参与到游戏中请开启
:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |


### serverCalculateEnable

• `set` **serverCalculateEnable**(`enable`): `void` <Badge type="info" text="client&server" />

**`Description`**

同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算

::: warning Precautions
针对处于静默状态的ai调用用于降低暂时不必要的计算带来的性能消耗，如果ai角色需要参与到游戏中请开启
:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |



### serverCalculateEnable

• `set` **serverCalculateEnable**(`enable`): `void` <Badge type="info" text="client&server" />

**`Description`**

同时开/关角色的网络同步，角色移动等计算集合，未来可能会添加其他计算

::: danger Precautions
针对处于静默状态的ai调用用于降低暂时不必要的计算带来的性能消耗，如果ai角色需要参与到游戏中请开启
:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  true 开启角色计算 false 关闭角色计算 |






## Methods

### setServerMovementEnable

▸ **setServerMovementEnable**(`value`): `void`

**`Description`**

开关角色的移动计算

**`Effect`**

可双端直接调用

**`Precautions`**

针对处于静默状态的ai调用用于降低移动计算带来的性能消耗，如果ai角色需要参与到游戏中请开启移动计算

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  true 开启角色移动计算 false 关闭角色移动计算 |

#### Returns

`void`
