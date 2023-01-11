[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1Trunk

# HumanoidV1Trunk <Badge type="tip" text="Class" /> 

**`Description`**

人形对象V1身体接口

## Implements

- [`IPart`](../interfaces/Gameplay.IPart.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.HumanoidV1Trunk.md#getmesh)**(): `string` <br> 获取身体模型|
| **[setMesh](Gameplay.HumanoidV1Trunk.md#setmesh)**(`string`, `boolean`): `void` <br> 设置身体模型|

## Methods

### getMesh  

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取身体模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IPart](../interfaces/Gameplay.IPart.md).[getMesh](../interfaces/Gameplay.IPart.md#getmesh)

___

### setMesh  

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置身体模型

::: warning Precautions

如果模型GUID没有预加载, 则本地设置时异步的, 需要监听onMeshChanged回调

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IPart](../interfaces/Gameplay.IPart.md).[setMesh](../interfaces/Gameplay.IPart.md#setmesh)
