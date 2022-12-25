[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV1Part

# Interface: IHumanoidV1Part

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV1Part

**`Description`**

人形对象 V1 部位

**`Author`**

guang.deng

## Implemented by

- [`HumanoidV1`](../classes/Gameplay.Gameplay.HumanoidV1.md)

## Table of contents

### Methods

- [getWholeBody](Gameplay.Gameplay.IHumanoidV1Part.md#getwholebody)
- [setWholeBody](Gameplay.Gameplay.IHumanoidV1Part.md#setwholebody)

## Methods

### getWholeBody

▸ **getWholeBody**(): `string`

**`Description`**

获取全身模型

**`Effect`**

双端

#### Returns

`string`

模型 Guid

#### Defined in

Gameplay/index.d.ts:2808

---

### setWholeBody

▸ **setWholeBody**(`guid`, `sync`): `void`

**`Description`**

设置全身模型

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

Gameplay/index.d.ts:2802
