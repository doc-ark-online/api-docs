[Gameplay](../modules/Gameplay.Gameplay.md) / Decoration

# Decoration <Badge type="tip" text="Class" />

**`Description`**

挂件数据

## Table of contents

| Properties                                                                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **[assetId](Gameplay.Gameplay.Decoration.md#assetid)**: `string` <br> 资源 Id                                                                 |
| **[relativeTransform](Gameplay.Gameplay.Decoration.md#relativetransform)**: [`Transform`](Type.Type.Transform.md) <br> 相对 ue slot Transform |
| **[skeletonName](Gameplay.Gameplay.Decoration.md#skeletonname)**: `string` <br> 骨架名字                                                      |
| **[slotName](Gameplay.Gameplay.Decoration.md#slotname)**: `string` <br> 插槽名                                                                |

| Methods                                                                                             |
| :-------------------------------------------------------------------------------------------------- |
| **[deserialize](Gameplay.Gameplay.Decoration.md#deserialize)**(`string`): `void` <br> 反序列化      |
| **[equal](Gameplay.Gameplay.Decoration.md#equal)**(`string`): `boolean` <br> 比较是否是一个插槽数据 |
| **[serialize](Gameplay.Gameplay.Decoration.md#serialize)**(): `string` <br> 获取序列化 String       |

## Properties

### assetId

• **assetId**: `string`

**`Description`**

资源 Id

---

### relativeTransform

• **relativeTransform**: [`Transform`](Type.Type.Transform.md)

**`Description`**

相对 ue slot Transform

---

### skeletonName

• **skeletonName**: `string`

**`Description`**

骨架名字

---

### slotName

• **slotName**: `string`

**`Description`**

插槽名

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

**`Description`**

反序列化

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description      |
| :----- | :------- | :--------------- |
| `data` | `string` | 挂件 string 数据 |

#### Returns

`void`

---

### equal

▸ **equal**(`widgetString`): `boolean`

**`Description`**

比较是否是一个插槽数据

**`Effect`**

双端

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `widgetString` | `string` | 插槽数据    |

#### Returns

`boolean`

是否相等

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
