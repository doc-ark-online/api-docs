[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UISlot

# Class: UISlot

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UISlot

**`Author`**

wujie

**`Description`**

UI插槽

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UISlot.md#constructor)

### Accessors

- [constraints](UI.UI.UISlot.md#constraints)
- [enableAutoSize](UI.UI.UISlot.md#enableautosize)
- [isAutoSizeEnabled](UI.UI.UISlot.md#isautosizeenabled)
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

### constraints

• `get` **constraints**(): [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)

**`Description`**

获取Slot布局(Figma布局)

**`Effect`**

只在客户端调用生效

#### Returns

[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)

Slot布局

#### Defined in

UI/index.d.ts:3259

• `set` **constraints**(`inConstraints`): `void`

**`Description`**

设置Slot布局(figma布局)

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inConstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:Slot布局 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3253

___

### enableAutoSize

• `set` **enableAutoSize**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3301

___

### isAutoSizeEnabled

• `get` **isAutoSizeEnabled**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Defined in

UI/index.d.ts:3307

___

### position

• `get` **position**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取位置

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Defined in

UI/index.d.ts:3271

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置Slot位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:Slot位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3265

___

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Defined in

UI/index.d.ts:3283

• `set` **size**(`inSize`): `void`

**`Description`**

设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:size |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3277

___

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

获取Slot大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

Slot大小和位置

#### Defined in

UI/index.d.ts:3247

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置Slot大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3241

___

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取zOrder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zOrder

#### Defined in

UI/index.d.ts:3295

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置zOder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Defined in

UI/index.d.ts:3289

## Methods

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个Slot

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | [`UISlot`](UI.UI.UISlot.md) | usage:需要比较的另外一个Slot |

#### Returns

`boolean`

是否相同

#### Defined in

UI/index.d.ts:3235
