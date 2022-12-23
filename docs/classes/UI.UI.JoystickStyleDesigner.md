[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / JoystickStyleDesigner

# Class: JoystickStyleDesigner

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).JoystickStyleDesigner

**`Author`**

wujie

**`Description`**

摇杆信息

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](UI.UI.JoystickStyleDesigner.md#constructor)

### Properties

- [disable](UI.UI.JoystickStyleDesigner.md#disable)
- [normal](UI.UI.JoystickStyleDesigner.md#normal)
- [touch](UI.UI.JoystickStyleDesigner.md#touch)

## Constructors

### constructor

• **new JoystickStyleDesigner**(`NormalGuid`, `TouchGuid`, `DisableGuid`)

**`Description`**

指定内容构造对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NormalGuid` | `string` | usage:普通资源 |
| `TouchGuid` | `string` | usage:按压资源 |
| `DisableGuid` | `string` | usage:禁用资源 |

#### Defined in

UI/index.d.ts:3989

## Properties

### disable

• **disable**: [`SlateBrushWithGuid`](UI.UI.SlateBrushWithGuid.md)

**`Description`**

禁用资源

#### Defined in

UI/index.d.ts:3995

___

### normal

• **normal**: [`SlateBrushWithGuid`](UI.UI.SlateBrushWithGuid.md)

**`Description`**

普通资源

#### Defined in

UI/index.d.ts:3991

___

### touch

• **touch**: [`SlateBrushWithGuid`](UI.UI.SlateBrushWithGuid.md)

**`Description`**

按压资源

#### Defined in

UI/index.d.ts:3993
