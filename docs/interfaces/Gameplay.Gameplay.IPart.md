[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IPart

# Interface: IPart

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IPart

**`Description`**

部位基类

**`Author`**

邓广

## Hierarchy

- **`IPart`**

  ↳ [`IHumanoidV2ClothPart`](Gameplay.Gameplay.IHumanoidV2ClothPart.md)

  ↳ [`IHumanoidV2HairPart`](Gameplay.Gameplay.IHumanoidV2HairPart.md)

  ↳ [`IHumanoidV2HeadPart`](Gameplay.Gameplay.IHumanoidV2HeadPart.md)

## Implemented by

- [`HumanoidV1Face`](../classes/Gameplay.Gameplay.HumanoidV1Face.md)
- [`HumanoidV1Hair`](../classes/Gameplay.Gameplay.HumanoidV1Hair.md)
- [`HumanoidV1Trunk`](../classes/Gameplay.Gameplay.HumanoidV1Trunk.md)

## Table of contents

### Methods

- [getMesh](Gameplay.Gameplay.IPart.md#getmesh)
- [setMesh](Gameplay.Gameplay.IPart.md#setmesh)

## Methods

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取部位模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Defined in

Gameplay/index.d.ts:2644

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置部位模型

**`Precautions`**

如果模型 Guid 没有预加载，则 v2 本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:模型 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2638
