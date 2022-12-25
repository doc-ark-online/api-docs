[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UISlot

# Class: UISlot

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UISlot

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Author`**

jie.wu

**`Description`**

UI 插槽

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UISlot.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.UISlot.md#autosizeenable)
- [constraints](UI.UI.UISlot.md#constraints)
- [position](UI.UI.UISlot.md#position)
- [size](UI.UI.UISlot.md#size)
- [transform](UI.UI.UISlot.md#transform)
- [zOrder](UI.UI.UISlot.md#zorder)

### Methods

- [equal](UI.UI.UISlot.md#equal)

## Constructors

### constructor

• **new UISlot**()

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

#### Defined in

UI/index.d.ts:3316

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3309

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

#### Defined in

UI/index.d.ts:3260

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

#### Defined in

UI/index.d.ts:3253

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

#### Defined in

UI/index.d.ts:3274

• `set` **position**(`inFigmaPosition`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 Slot 位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description     |
| :---------------- | :-------------------------------- | :-------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:Slot 位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3267

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

#### Defined in

UI/index.d.ts:3288

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
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size  |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3281

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

#### Defined in

UI/index.d.ts:3246

• `set` **transform**(`inTransform`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 Slot 大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3239

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

#### Defined in

UI/index.d.ts:3302

• `set` **zOrder**(`InZOrder`): `void`

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

设置 zOrder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3295

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

| Name   | Type                        | Description                   |
| :----- | :-------------------------- | :---------------------------- |
| `that` | [`UISlot`](UI.UI.UISlot.md) | usage:需要比较的另外一个 Slot |

#### Returns

`boolean`

是否相同

#### Defined in

UI/index.d.ts:3232
