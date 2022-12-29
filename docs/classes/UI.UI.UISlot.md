[UI](../modules/UI.UI.md) / UISlot

# UISlot <Badge type="tip" text="Class" />

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

UI 插槽

## Table of contents

| Accessors                                                                                                                                                                                 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[autoSizeEnable](UI.UI.UISlot.md#autosizeenable)**(): `boolean` <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                       |
| **[constraints](UI.UI.UISlot.md#constraints)**(): [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息 |
| **[position](UI.UI.UISlot.md#position)**(): [`Vector2`](Type.Type.Vector2.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                           |
| **[size](UI.UI.UISlot.md#size)**(): [`Vector2`](Type.Type.Vector2.md) <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                   |
| **[transform](UI.UI.UISlot.md#transform)**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\> <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息        |
| **[zOrder](UI.UI.UISlot.md#zorder)**(): `number` <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息                                                        |

| Methods                                                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[equal](UI.UI.UISlot.md#equal)**([`UISlot`](UI.UI.UISlot.md)): `boolean` <br> since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息 |

## Accessors

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description      |
| :--------- | :-------- | :--------------- |
| `autoSize` | `boolean` | 是否自动设置大小 |

#### Returns

`void`

---

### constraints

• `get` **constraints**(): [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取 Slot 布局(Figma 布局)

**`Effect`**

只在客户端调用生效

#### Returns

[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)

Slot 布局

• `set` **constraints**(`ininconstraints`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 Slot 布局(figma 布局)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  |
| :---------------- | :---------------------------------------------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) |

#### Returns

`void`

---

### position

• `get` **position**(): [`Vector2`](Type.Type.Vector2.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

• `set` **position**(`inFigmaPosition`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 Slot 位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description |
| :---------------- | :-------------------------------- | :---------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | Slot 位置   |

#### Returns

`void`

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

• `set` **size**(`inSize`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description |
| :------- | :-------------------------------- | :---------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | size        |

#### Returns

`void`

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

得到 Slot 大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

Slot 大小和位置

• `set` **transform**(`inTransform`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 Slot 大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description |
| :------------ | :------------------------------------ | :---------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | 大小位置    |

#### Returns

`void`

---

### zOrder

• `get` **zOrder**(): `number`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取 zOrder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zOrder

• `set` **zOrder**(`InZOrder`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 zOrder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description    |
| :--------- | :------- | :------------- |
| `InZOrder` | `number` | 值越大在越上层 |

#### Returns

`void`

## Methods

### equal

▸ **equal**(`that`): `boolean`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

判断是不是同一个 Slot

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description             |
| :----- | :-------------------------- | :---------------------- |
| `that` | [`UISlot`](UI.UI.UISlot.md) | 需要比较的另外一个 Slot |

#### Returns

`boolean`

是否相同
