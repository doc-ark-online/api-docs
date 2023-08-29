[AVATAR](../groups/AVATAR.AVATAR.md) / FourFootStandard

# FourFootStandard <Badge type="tip" text="Class" /> <Score text="FourFootStandard" />

四足外观形象对象,用于四足外观的设置.

::: warning Precautions

目前玩家角色对象,NPC 默认使用HumanoidV2(高级人形形象).当项目使用非FourFootStandard(四足外观)时,需要切换类型到FourFootStandard形象.再获取FourFootStandard(let fourfootftandard = npc.getAppearance<Gameplay.FourFootStandard>())对象,进行形象更新.

:::

使用示例:(关于示例的描述、说明)
```ts
1.切换Character为FourFootStandard外观类型：npc.appearanceType = Gameplay.AppearanceType.FourFootStandard;
2.获取对应的外观对象： let appearance = npc.getAppearance<Gameplay.FourFootStandard>();
3.使用相关的换装能力：appearance.API()
```

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`FourFootStandard`**

## Implements

- [`IFourFootStandard`](../interfaces/Gameplay.IFourFootStandard.md)

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[enableOutline](Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边|
| **[postProcessObj](Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.PostProcess.md) <br> 后处理对象|
:::


| Methods |
| :-----|
| **[getSomatotype](Gameplay.FourFootStandard.md#getsomatotype)**(): [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md) <br> 获取当前的体型类型|
| **[getWholeBody](Gameplay.FourFootStandard.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.FourFootStandard.md#setwholebody)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置模型|


::: details 点击查看继承
| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`usedPostProcess`: `boolean`, `newOutlineColor`: [`LinearColor`](Type.LinearColor.md), `newOutlineWidth`: `number`): `void` <br> 后处理开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`newEnableOutline`: `boolean`, `newOutlineColorIndex`: `number`): `void` <br> 后处理描边开关|
:::


## Methods
___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md) 

获取当前的体型类型


#### Returns

[`SomatotypeFourFootStandard`](../enums/Gameplay.SomatotypeFourFootStandard.md)

体型类型 SomatotypeFourFootStandard

#### Implementation of

[IFourFootStandard](../interfaces/Gameplay.IFourFootStandard.md).[getSomatotype](../interfaces/Gameplay.IFourFootStandard.md#getsomatotype)

___

### getWholeBody <Score text="getWholeBody" /> 

• **getWholeBody**(): `string` 

获取全身模型


#### Returns

`string`

模型GUID

#### Implementation of

[IFourFootStandard](../interfaces/Gameplay.IFourFootStandard.md).[getWholeBody](../interfaces/Gameplay.IFourFootStandard.md#getwholebody)

___

### setWholeBody <Score text="setWholeBody" /> 

• **setWholeBody**(`GUID`, `sync`): `void` 

设置模型

::: warning Precautions

如果模型GUID没有预加载，则v2本地设置时异步的

:::

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IFourFootStandard](../interfaces/Gameplay.IFourFootStandard.md).[setWholeBody](../interfaces/Gameplay.IFourFootStandard.md#setwholebody)
