[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1

# HumanoidV1 <Badge type="tip" text="Class" /> <Score text="HumanoidV1" />

**`Description`**

人形对象V1接口

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV1`**

## Implements

- [`IHumanoidV1Part`](../interfaces/Gameplay.IHumanoidV1Part.md)

## Table of contents

| Properties |
| :-----|
| **[face](Gameplay.HumanoidV1.md#face)**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md) <br> 脸部|
| **[hair](Gameplay.HumanoidV1.md#hair)**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md) <br> 头发|
| **[trunk](Gameplay.HumanoidV1.md#trunk)**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md) <br> 身体|


::: details 点击查看继承
| Properties |
| :-----|
| **[enableOutline](Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边|
| **[postProcessObj](Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.PostProcess.md) <br> 后处理对象|
:::


| Methods |
| :-----|
| **[getWholeBody](Gameplay.HumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.HumanoidV1.md#setwholebody)**(`string`, `boolean`): `void` <br> 设置全身模型|


::: details 点击查看继承
| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`boolean`, [`LinearColor`](Type.LinearColor.md), `number`): `void` <br> 后处理开关|
| **[setOutline](Gameplay.SomatotypeBase.md#setoutline)**(`boolean`): `boolean` <br> 描边开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`boolean`, `number`): `void` <br> 后处理描边开关|
:::


**`Description`**

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |

## Properties

### face <Score text="face" /> 

• **face**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md)

**`Description`**

脸部

___

### hair <Score text="hair" /> 

• **hair**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md)

**`Description`**

头发


### trunk <Score text="trunk" /> 

• **trunk**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md)

**`Description`**

身体

## Methods

### getWholeBody <Score text="getWholeBody" /> 

▸ **getWholeBody**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取全身模型

双端

#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.IHumanoidV1Part.md).[getWholeBody](../interfaces/Gameplay.IHumanoidV1Part.md#getwholebody)


### setWholeBody <Score text="setWholeBody" /> 

▸ **setWholeBody**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置全身模型

::: warning Precautions

如果模型GUID没有预加载，则本地设置时异步的

:::

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV1Part](../interfaces/Gameplay.IHumanoidV1Part.md).[setWholeBody](../interfaces/Gameplay.IHumanoidV1Part.md#setwholebody)
