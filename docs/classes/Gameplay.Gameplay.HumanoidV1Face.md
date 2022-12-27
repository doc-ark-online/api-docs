[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1Face

# Class: HumanoidV1Face

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HumanoidV1Face

**`Description`**

人形对象 V1 脸部接口

**`Author`**

guang.deng yuchen.ren

**`Network Status`**

usage:双端

## Implements

- [`IPart`](../interfaces/Gameplay.Gameplay.IPart.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HumanoidV1Face.md#constructor)

### Methods

- [getMesh](Gameplay.Gameplay.HumanoidV1Face.md#getmesh)
- [setMesh](Gameplay.Gameplay.HumanoidV1Face.md#setmesh)

## Constructors

### constructor

• **new HumanoidV1Face**()

## Methods

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取脸部模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Implementation of

[IPart](../interfaces/Gameplay.Gameplay.IPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IPart.md#getmesh)

#### Defined in

Gameplay/index.d.ts:5120

---

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置脸部模型

**`Precautions`**

如果模型 Guid 没有预加载, 则本地设置时异步的, 需要监听 onMeshChanged 回调

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

#### Implementation of

[IPart](../interfaces/Gameplay.Gameplay.IPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IPart.md#setmesh)

#### Defined in

Gameplay/index.d.ts:5114