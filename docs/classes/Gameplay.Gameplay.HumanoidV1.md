[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1

# Class: HumanoidV1

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HumanoidV1

**`Description`**

人形对象V1接口

**`Author`**

邓广 任雨辰

**`Network Status`**

usage:双端

## Hierarchy

- [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV1`**

## Implements

- [`IHumanoidV1Part`](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HumanoidV1.md#constructor)

### Properties

- [enableOutLine](Gameplay.Gameplay.HumanoidV1.md#enableoutline)
- [face](Gameplay.Gameplay.HumanoidV1.md#face)
- [hair](Gameplay.Gameplay.HumanoidV1.md#hair)
- [postProcessObj](Gameplay.Gameplay.HumanoidV1.md#postprocessobj)
- [trunk](Gameplay.Gameplay.HumanoidV1.md#trunk)

### Methods

- [enablePostProcess](Gameplay.Gameplay.HumanoidV1.md#enablepostprocess)
- [getWholeBody](Gameplay.Gameplay.HumanoidV1.md#getwholebody)
- [setOutLine](Gameplay.Gameplay.HumanoidV1.md#setoutline)
- [setOutlineAdvance](Gameplay.Gameplay.HumanoidV1.md#setoutlineadvance)
- [setWholeBody](Gameplay.Gameplay.HumanoidV1.md#setwholebody)

## Constructors

### constructor

• **new HumanoidV1**(`character`)

**`Description`**

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色 |

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[constructor](Gameplay.Gameplay.SomatotypeBase.md#constructor)

#### Defined in

Gameplay/index.d.ts:2591

## Properties

### enableOutLine

• `Protected` **enableOutLine**: `boolean`

**`Description`**

是否启动遮挡时角色描边

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[enableOutLine](Gameplay.Gameplay.SomatotypeBase.md#enableoutline)

#### Defined in

Gameplay/index.d.ts:2586

___

### face

• **face**: [`HumanoidV1Face`](Gameplay.Gameplay.HumanoidV1Face.md)

**`Description`**

脸部

#### Defined in

Gameplay/index.d.ts:4938

___

### hair

• **hair**: [`HumanoidV1Hair`](Gameplay.Gameplay.HumanoidV1Hair.md)

**`Description`**

头发

#### Defined in

Gameplay/index.d.ts:4934

___

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[postProcessObj](Gameplay.Gameplay.SomatotypeBase.md#postprocessobj)

#### Defined in

Gameplay/index.d.ts:2582

___

### trunk

• **trunk**: [`HumanoidV1Trunk`](Gameplay.Gameplay.HumanoidV1Trunk.md)

**`Description`**

身体

#### Defined in

Gameplay/index.d.ts:4942

## Methods

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutLineColor`, `newOutLineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedPostProcess` | `boolean` | usage:是否使用后处理功能 |
| `newOutLineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:Outline颜色 |
| `newOutLineWidth` | `number` | usage:Outline宽度 |

#### Returns

`void`

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[enablePostProcess](Gameplay.Gameplay.SomatotypeBase.md#enablepostprocess)

#### Defined in

Gameplay/index.d.ts:2599

___

### getWholeBody

▸ **getWholeBody**(): `string`

**`Description`**

获取全身模型

**`Effect`**

双端

#### Returns

`string`

模型Guid

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md).[getWholeBody](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md#getwholebody)

#### Defined in

Gameplay/index.d.ts:4958

___

### setOutLine

▸ **setOutLine**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedOutline` | `boolean` | usage:是否使用描边功能 |

#### Returns

`boolean`

是否成功

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[setOutLine](Gameplay.Gameplay.SomatotypeBase.md#setoutline)

#### Defined in

Gameplay/index.d.ts:2610

___

### setOutlineAdvance

▸ **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void`

**`Description`**

后处理描边开关

**`Effect`**

调用端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newEnableOutline` | `boolean` | usage:是否开启描边功能 |
| `newOutlineColorIndex` | `number` | usage:描边的颜色 |

#### Returns

`void`

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[setOutlineAdvance](Gameplay.Gameplay.SomatotypeBase.md#setoutlineadvance)

#### Defined in

Gameplay/index.d.ts:2617

___

### setWholeBody

▸ **setWholeBody**(`guid`, `sync`): `void`

**`Description`**

设置全身模型

**`Precautions`**

如果模型Guid没有预加载，则本地设置时异步的

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:模型Guid |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md).[setWholeBody](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md#setwholebody)

#### Defined in

Gameplay/index.d.ts:4952
