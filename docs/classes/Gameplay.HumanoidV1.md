[AVATAR](../groups/AVATAR.AVATAR.md) / HumanoidV1

# HumanoidV1 <Badge type="tip" text="Class" /> <Score text="HumanoidV1" />

人形外观形象对象,用于基础人形外观的设置.

::: warning Precautions

目前玩家角色对象,NPC 默认使用HumanoidV2(高级人形形象).当项目使用非HumanoidV1(基础人形外观)时,需要切换类型到HumanoidV1形象.获取HumanoidV1(let humanoidV1 = npc.getAppearance<Gameplay.HumanoidV1>()),进行形象更新.

:::

使用示例:(关于示例的描述、说明)
```ts
1.切换Character为HumanoidV1外观类型：character.appearanceType = Gameplay.AppearanceType.HumanoidV1;
2.获取对应的外观对象： let appearance = npc.getAppearance<Gameplay.HumanoidV1>();
3.使用相关的换装能力：appearance.API()
```

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV1`**

## Implements

- [`IHumanoidV1`](../interfaces/Gameplay.IHumanoidV1.md)

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
| **[getSomatotype](Gameplay.HumanoidV1.md#getsomatotype)**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) <br> 获取当前的主Mesh|
| **[getWholeBody](Gameplay.HumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.HumanoidV1.md#setwholebody)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置全身模型|


::: details 点击查看继承
| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`usedPostProcess`: `boolean`, `newOutlineColor`: [`LinearColor`](Type.LinearColor.md), `newOutlineWidth`: `number`): `void` <br> 后处理开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`newEnableOutline`: `boolean`, `newOutlineColorIndex`: `number`): `void` <br> 后处理描边开关|
:::


### face <Score text="face" /> 

• **face**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md)

脸部

___

### hair <Score text="hair" /> 

• **hair**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md)

头发

___

### trunk <Score text="trunk" /> 

• **trunk**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md)

身体

## Methods
___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) 

获取当前的主Mesh


#### Returns

[`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md)

获取当前设定的体型枚举SomatotypeV1

#### Implementation of

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[getSomatotype](../interfaces/Gameplay.IHumanoidV1.md#getsomatotype)

___

### getWholeBody <Score text="getWholeBody" /> 

• **getWholeBody**(): `string` 

获取全身模型


#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[getWholeBody](../interfaces/Gameplay.IHumanoidV1.md#getwholebody)

___

### setWholeBody <Score text="setWholeBody" /> 

• **setWholeBody**(`GUID`, `sync`): `void` 

设置全身模型

::: warning Precautions

如果模型GUID没有预加载，则本地设置时异步的

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

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[setWholeBody](../interfaces/Gameplay.IHumanoidV1.md#setwholebody)
