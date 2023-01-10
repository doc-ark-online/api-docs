[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1Face

# HumanoidV1Face <Badge type="tip" text="Class" /> <Score text="HumanoidV1Face" />

**`Description`**

人形对象V1脸部接口

## Implements

- [`IPart`](../interfaces/Gameplay.IPart.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.HumanoidV1Face.md#getmesh)**(): `string` <br> 获取脸部模型|
| **[setMesh](Gameplay.HumanoidV1Face.md#setmesh)**(`string`, `boolean`): `void` <br> 设置脸部模型|

## Methods

### getMesh <Score text="getMesh" /> 

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取脸部模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IPart](../interfaces/Gameplay.IPart.md).[getMesh](../interfaces/Gameplay.IPart.md#getmesh)

___

### setMesh <Score text="setMesh" /> 

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置脸部模型

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
