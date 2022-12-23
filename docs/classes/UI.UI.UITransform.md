[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UITransform

# Class: UITransform

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UITransform

**`Author`**

wujie

**`Description`**

节点Transform

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.UITransform.md#constructor)

### Properties

- [position](UI.UI.UITransform.md#position)
- [size](UI.UI.UITransform.md#size)

## Constructors

### constructor

• **new UITransform**(`x`, `y`, `w`, `h`)

**`Description`**

构造每一个值

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | usage:位置 Position.X |
| `y` | `number` | usage: 位置 Position.Y |
| `w` | `number` | usage:大小 Size.W 宽 |
| `h` | `number` | usage:大小 Size.H 高 |

#### Defined in

UI/index.d.ts:3882

• **new UITransform**(`xy`, `wh`)

**`Description`**

通过点构造

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xy` | [`Vector2`](Type.Type.Vector2.md) | usage:位置 |
| `wh` | [`Vector2`](Type.Type.Vector2.md) | usage:大小 |

#### Defined in

UI/index.d.ts:3889

## Properties

### position

• **position**: [`Vector2`](Type.Type.Vector2.md)

**`Description`**

位置

#### Defined in

UI/index.d.ts:3891

___

### size

• **size**: [`Vector2`](Type.Type.Vector2.md)

**`Description`**

大小

#### Defined in

UI/index.d.ts:3893
