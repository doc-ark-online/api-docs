[Gameplay](../modules/Gameplay.Gameplay.md) / IPart

# IPart <Badge type="tip" text="Interface" />

**`Description`**

部位基类

## Hierarchy

- **`IPart`**

  ↳ [`IHumanoidV2ClothPart`](Gameplay.IHumanoidV2ClothPart.md)

  ↳ [`IHumanoidV2HairPart`](Gameplay.IHumanoidV2HairPart.md)

  ↳ [`IHumanoidV2HeadPart`](Gameplay.IHumanoidV2HeadPart.md)

## Implemented by

- [`HumanoidV1Face`](../classes/Gameplay.HumanoidV1Face.md)
- [`HumanoidV1Hair`](../classes/Gameplay.HumanoidV1Hair.md)
- [`HumanoidV1Trunk`](../classes/Gameplay.HumanoidV1Trunk.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`string`, `boolean`): `void` <br> 设置部位模型|

## Methods

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型Guid没有预加载，则v2本地设置时异步的

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
