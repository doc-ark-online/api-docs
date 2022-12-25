[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Decoration

# Class: Decoration

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Decoration

**`Description`**

挂件数据

**`Author`**

guang.deng

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Decoration.md#constructor)

### Properties

- [assetId](Gameplay.Gameplay.Decoration.md#assetid)
- [relativeTransform](Gameplay.Gameplay.Decoration.md#relativetransform)
- [skeletonName](Gameplay.Gameplay.Decoration.md#skeletonname)
- [slotName](Gameplay.Gameplay.Decoration.md#slotname)

### Methods

- [deserialize](Gameplay.Gameplay.Decoration.md#deserialize)
- [equal](Gameplay.Gameplay.Decoration.md#equal)
- [serialize](Gameplay.Gameplay.Decoration.md#serialize)

## Constructors

### constructor

• **new Decoration**()

## Properties

### assetId

• **assetId**: `string`

**`Description`**

资源 Id

#### Defined in

Gameplay/index.d.ts:1574

---

### relativeTransform

• **relativeTransform**: [`Transform`](Type.Type.Transform.md)

**`Description`**

相对 ue slot Transform

#### Defined in

Gameplay/index.d.ts:1582

---

### skeletonName

• **skeletonName**: `string`

**`Description`**

骨架名字

#### Defined in

Gameplay/index.d.ts:1570

---

### slotName

• **slotName**: `string`

**`Description`**

插槽名

#### Defined in

Gameplay/index.d.ts:1578

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

**`Description`**

反序列化

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description             |
| :----- | :------- | :---------------------- |
| `data` | `string` | usage: 挂件 string 数据 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1594

---

### equal

▸ **equal**(`widgetString`): `boolean`

**`Description`**

比较是否是一个插槽数据

**`Effect`**

双端

#### Parameters

| Name           | Type     | Description    |
| :------------- | :------- | :------------- |
| `widgetString` | `string` | usage:插槽数据 |

#### Returns

`boolean`

是否相等

#### Defined in

Gameplay/index.d.ts:1601

---

### serialize

▸ **serialize**(): `string`

**`Description`**

获取序列化 String

**`Effect`**

双端

#### Returns

`string`

string

#### Defined in

Gameplay/index.d.ts:1588
