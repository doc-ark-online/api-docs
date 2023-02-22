[Gameplay](../modules/Gameplay.Gameplay.md) / IPart

# IPart <Badge type="tip" text="Interface" /> <Score text="IPart" />

部位基类

**`Groups`**

AVATAR

## Hierarchy

- **`IPart`**

  ↳ [`IHumanoidV2ClothPart`](Gameplay.IHumanoidV2ClothPart.md)

  ↳ [`IHumanoidV2HairPart`](Gameplay.IHumanoidV2HairPart.md)

  ↳ [`IHumanoidV2HeadPart`](Gameplay.IHumanoidV2HeadPart.md)

## Implemented by

- [`HumanoidV1Part`](../classes/Gameplay.HumanoidV1Part.md)

## Table of contents

| Methods |
| :-----|
| **[getMesh](Gameplay.IPart.md#getmesh)**(): `string` <br> 获取部位模型|
| **[setMesh](Gameplay.IPart.md#setmesh)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置部位模型|

## Methods

### getMesh <Score text="getMesh" /> 

• **getMesh**(): `string` 

获取部位模型


#### Returns

`string`

模型GUID

___

### setMesh <Score text="setMesh" /> 

• **setMesh**(`GUID`, `sync`): `void` 

设置部位模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |

