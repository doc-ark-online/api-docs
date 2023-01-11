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

▸ **getMesh**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取部位模型

双端

#### Returns

`string`

模型GUID

___

### setMesh  

▸ **setMesh**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置部位模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |

