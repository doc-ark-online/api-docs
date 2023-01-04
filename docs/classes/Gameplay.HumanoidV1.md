[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1

# HumanoidV1 <Badge type="tip" text="Class" />

**`Description`**

人形对象V1接口

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV1`**

## Implements

- [`IHumanoidV1Part`](../interfaces/Gameplay.IHumanoidV1Part.md)

## Table of contents

| Properties |
| :-----|
| **[face](Gameplay.HumanoidV1.md#face)**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md) <br> 脸部|
| **[hair](Gameplay.HumanoidV1.md#hair)**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md) <br> 头发|
| **[trunk](Gameplay.HumanoidV1.md#trunk)**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md) <br> 身体|

| Methods |
| :-----|
| **[getWholeBody](Gameplay.HumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.HumanoidV1.md#setwholebody)**(`string`, `boolean`): `void` <br> 设置全身模型|

**`Description`**

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |

## Properties

### face

• **face**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md)

**`Description`**

脸部

___

### hair

• **hair**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md)

**`Description`**

头发


### trunk

• **trunk**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md)

**`Description`**

身体

## Methods

### getWholeBody

▸ **getWholeBody**(): `string`

**`Description`**

获取全身模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.IHumanoidV1Part.md).[getWholeBody](../interfaces/Gameplay.IHumanoidV1Part.md#getwholebody)


### setWholeBody

▸ **setWholeBody**(`guid`, `sync`): `void`

**`Description`**

设置全身模型

**`Precautions`**

如果模型Guid没有预加载，则本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.IHumanoidV1Part.md).[setWholeBody](../interfaces/Gameplay.IHumanoidV1Part.md#setwholebody)
