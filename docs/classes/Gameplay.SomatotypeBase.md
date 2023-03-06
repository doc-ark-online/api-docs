[Gameplay](../groups/Gameplay.Gameplay.md) / SomatotypeBase

# SomatotypeBase <Badge type="tip" text="Class" /> <Score text="SomatotypeBase" />

体型基类

## Hierarchy

- **`SomatotypeBase`**

  ↳ [`FourFootStandard`](Gameplay.FourFootStandard.md)

  ↳ [`HumanoidV1`](Gameplay.HumanoidV1.md)

  ↳ [`HumanoidV2`](Gameplay.HumanoidV2.md)

## Table of contents

| Properties |
| :-----|
| **[enableOutline](Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 后处理开关|
| **[postProcessObj](Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.PostProcess.md) <br> 后处理开关|

| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`usedPostProcess`: `boolean`, `newOutlineColor`: [`LinearColor`](Type.LinearColor.md), `newOutlineWidth`: `number`): `void` <br> 后处理开关|
| **[setOutline](Gameplay.SomatotypeBase.md#setoutline)**(`usedOutline`: `boolean`): `boolean` <br> 描边开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`newEnableOutline`: `boolean`, `newOutlineColorIndex`: `number`): `void` <br> 后处理描边开关|

构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |

## Properties

### enableOutline <Score text="enableOutline" /> 

• `Protected` **enableOutline**: `boolean`

是否启动遮挡时角色描边

___

### postProcessObj <Score text="postProcessObj" /> 

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.PostProcess.md)

后处理对象

## Methods

### enablePostProcess <Score text="enablePostProcess" /> 

• **enablePostProcess**(`usedPostProcess`, `newOutlineColor`, `newOutlineWidth`): `void` <Badge type="tip" text="client" />

后处理开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedPostProcess` | `boolean` | 是否使用后处理功能 |
| `newOutlineColor` | [`LinearColor`](Type.LinearColor.md) | Outline颜色 |
| `newOutlineWidth` | `number` | Outline宽度 |


___

### setOutline <Score text="setOutline" /> 

• **setOutline**(`usedOutline`): `boolean` 

描边开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `usedOutline` | `boolean` | 是否使用描边功能 |

#### Returns

`boolean`

是否成功

___

### setOutlineAdvance <Score text="setOutlineAdvance" /> 

• **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void` 

后处理描边开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newEnableOutline` | `boolean` | 是否开启描边功能 |
| `newOutlineColorIndex` | `number` | 描边的颜色 |

