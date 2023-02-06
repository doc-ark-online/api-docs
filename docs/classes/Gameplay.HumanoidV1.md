[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV1

# HumanoidV1 <Badge type="tip" text="Class" /> <Score text="HumanoidV1" />

人形对象V1接口

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
| **[changeSomatotype](Gameplay.HumanoidV1.md#changesomatotype)**([`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md), `boolean`): `void` <br> 切换角色主Mesh|
| **[getSomatotype](Gameplay.HumanoidV1.md#getsomatotype)**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) <br> 获取当前的主Mesh|
| **[getWholeBody](Gameplay.HumanoidV1.md#getwholebody)**(): `string` <br> 获取全身模型|
| **[setWholeBody](Gameplay.HumanoidV1.md#setwholebody)**(`string`, `boolean`): `void` <br> 设置全身模型|


::: details 点击查看继承
| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`boolean`, [`LinearColor`](Type.LinearColor.md), `number`): `void` <br> 后处理开关|
| **[setOutline](Gameplay.SomatotypeBase.md#setoutline)**(`boolean`): `boolean` <br> 描边开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`boolean`, `number`): `void` <br> 后处理描边开关|
:::


构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |

## Properties

### face <Score text="face" /> 

• **face**: [`HumanoidV1Face`](Gameplay.HumanoidV1Face.md)

脸部

___

### hair <Score text="hair" /> 

• **hair**: [`HumanoidV1Hair`](Gameplay.HumanoidV1Hair.md)

头发


### trunk <Score text="trunk" /> 

• **trunk**: [`HumanoidV1Trunk`](Gameplay.HumanoidV1Trunk.md)

身体

## Methods

### changeSomatotype <Score text="changeSomatotype" /> 

• **changeSomatotype**(`value`, `sync`): `void` <Badge type="tip" text="other" />

切换角色主Mesh

sync = false:客户端,sync = true:双端

使用示例: 角色切换类型1.切换外观类型 appearanceType.设置对应的体型SomatotypeV1 设置模型setWholeBody
```ts
let npc = Core.GameObject.find("FDB21CE8");
npc.appearanceType =Gameplay.AppearanceType.HumanoidV1;
;
npc.appearance.changeSomatotype(Gameplay.SomatotypeV1.HumanoidV1, true);
let Tappearance = npc.appearance as Gameplay.HumanoidV1;
         setTimeout(() => {
            if(Tappearance){
               Tappearance.setWholeBody("137075",true);

             }
        }, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) |  HumanoidV1 的体型，使用枚举SomatotypeV1 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[changeSomatotype](../interfaces/Gameplay.IHumanoidV1.md#changesomatotype)


### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md) <Badge type="tip" text="other" />

获取当前的主Mesh


#### Returns

[`SomatotypeV1`](../enums/Gameplay.SomatotypeV1.md)

获取当前设定的体型枚举SomatotypeV1

#### Implementation of

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[getSomatotype](../interfaces/Gameplay.IHumanoidV1.md#getsomatotype)

___

### getWholeBody <Score text="getWholeBody" /> 

• **getWholeBody**(): `string` <Badge type="tip" text="other" />

获取全身模型


#### Returns

`string`

模型GUID

#### Implementation of

[IHumanoidV1](../interfaces/Gameplay.IHumanoidV1.md).[getWholeBody](../interfaces/Gameplay.IHumanoidV1.md#getwholebody)


### setWholeBody <Score text="setWholeBody" /> 

• **setWholeBody**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

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
