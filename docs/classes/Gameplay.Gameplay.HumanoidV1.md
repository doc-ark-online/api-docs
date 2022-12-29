[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1

# HumanoidV1 <Badge type="tip" text="Class" />

**`Description`**

人形对象V1接口

## Hierarchy

- [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV1`**

## Implements

- [`IHumanoidV1Part`](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md)

## Table of contents

| Properties |
| :-----|
| **[enableOutline](Gameplay.Gameplay.HumanoidV1.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边|
| **[face](Gameplay.Gameplay.HumanoidV1.md#face)**: [`HumanoidV1Face`](Gameplay.Gameplay.HumanoidV1Face.md) <br> 脸部|
| **[hair](Gameplay.Gameplay.HumanoidV1.md#hair)**: [`HumanoidV1Hair`](Gameplay.Gameplay.HumanoidV1Hair.md) <br> 头发|
| **[postProcessObj](Gameplay.Gameplay.HumanoidV1.md#postprocessobj)**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md) <br> 后处理对象|
| **[trunk](Gameplay.Gameplay.HumanoidV1.md#trunk)**: [`HumanoidV1Trunk`](Gameplay.Gameplay.HumanoidV1Trunk.md) <br> 身体|

| Methods |
| :-----|
| **[enablePostProcess](Gameplay.Gameplay.HumanoidV1.md#enablepostprocess)**(`boolean`, [`LinearColor`](Type.Type.LinearColor.md), `number`): `void` <br> 后处理开关|
| **[getWholeBody](Gameplay.Gameplay.HumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setOutline](Gameplay.Gameplay.HumanoidV1.md#setoutline)**(`boolean`): `boolean` <br> 描边开关|
| **[setOutlineAdvance](Gameplay.Gameplay.HumanoidV1.md#setoutlineadvance)**(`boolean`, `number`): `void` <br> 后处理描边开关|
| **[setWholeBody](Gameplay.Gameplay.HumanoidV1.md#setwholebody)**(`string`, `boolean`): `void` <br> 设置全身模型|

**`Description`**

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | 角色 |

## Properties

### enableOutline

• `Protected` **enableOutline**: `boolean`

**`Description`**

是否启动遮挡时角色描边

___

### face

• **face**: [`HumanoidV1Face`](Gameplay.Gameplay.HumanoidV1Face.md)

**`Description`**

脸部

___

### hair

• **hair**: [`HumanoidV1Hair`](Gameplay.Gameplay.HumanoidV1Hair.md)

**`Description`**

头发

___

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

___

### trunk

• **trunk**: [`HumanoidV1Trunk`](Gameplay.Gameplay.HumanoidV1Trunk.md)

**`Description`**

身体

## Methods

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutlineColor`, `newOutlineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedPostProcess` | `boolean` | 是否使用后处理功能 |
| `newOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | Outline颜色 |
| `newOutlineWidth` | `number` | Outline宽度 |

#### Returns

`void`

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

___

### setOutline

▸ **setOutline**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedOutline` | `boolean` | 是否使用描边功能 |

#### Returns

`boolean`

是否成功

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
| `newEnableOutline` | `boolean` | 是否开启描边功能 |
| `newOutlineColorIndex` | `number` | 描边的颜色 |

#### Returns

`void`

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
| `guid` | `string` | 模型Guid |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md).[setWholeBody](../interfaces/Gameplay.Gameplay.IHumanoidV1Part.md#setwholebody)
