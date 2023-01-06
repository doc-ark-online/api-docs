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

#### Returns

`void`


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
