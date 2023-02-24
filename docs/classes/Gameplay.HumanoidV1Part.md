[Avatar](../groups/Avatar.Avatar.md) / HumanoidV1Part

# HumanoidV1Part <Badge type="tip" text="Class" /> <Score text="HumanoidV1Part" />

人形对象V1头发接口

**`Groups`**

AVATAR

## Hierarchy

- **`HumanoidV1Part`**

  ↳ [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md)

  ↳ [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md)

  ↳ [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md)

## Implements

- [`IPart`](../interfaces/Gameplay.IPart.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.HumanoidV1Part.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.HumanoidV1Part.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置衣服模型|

## Methods

### getMesh <Score text="getMesh" /> 

• **getMesh**(): `string` 

获取部位模型


#### Returns

`string`

模型GUID

#### Implementation of

[IPart](../interfaces/Gameplay.IPart.md).[getMesh](../interfaces/Gameplay.IPart.md#getmesh)

___

### setMesh <Score text="setMesh" /> 

• **setMesh**(`GUID`, `sync`): `void` 

设置衣服模型

::: warning Precautions

如果模型Guid没有预加载，则本地设置时异步的

:::

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型资源的GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IPart](../interfaces/Gameplay.IPart.md).[setMesh](../interfaces/Gameplay.IPart.md#setmesh)
