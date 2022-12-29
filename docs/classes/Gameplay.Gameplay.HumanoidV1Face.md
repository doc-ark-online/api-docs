[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1Face

# HumanoidV1Face <Badge type="tip" text="Class" />

**`Description`**

人形对象V1脸部接口

## Implements

- [`IPart`](../interfaces/Gameplay.Gameplay.IPart.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.Gameplay.HumanoidV1Face.md#getmesh)**(): `string` <br> 获取脸部模型|
| **[setMesh](Gameplay.Gameplay.HumanoidV1Face.md#setmesh)**(`string`, `boolean`): `void` <br> 设置脸部模型|

## Methods

### getMesh

▸ **getMesh**(): `string`

**`Description`**

获取脸部模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IPart](../interfaces/Gameplay.Gameplay.IPart.md).[getMesh](../interfaces/Gameplay.Gameplay.IPart.md#getmesh)

___

### setMesh

▸ **setMesh**(`guid`, `sync`): `void`

**`Description`**

设置脸部模型

**`Precautions`**

如果模型Guid没有预加载, 则本地设置时异步的, 需要监听onMeshChanged回调

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

[IPart](../interfaces/Gameplay.Gameplay.IPart.md).[setMesh](../interfaces/Gameplay.Gameplay.IPart.md#setmesh)
