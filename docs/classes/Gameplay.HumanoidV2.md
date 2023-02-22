[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2

# HumanoidV2 <Badge type="tip" text="Class" /> <Score text="HumanoidV2" />

人形外观形象对象,用于高级人形外观的设置.

**`Groups`**

AVATAR

::: warning Precautions

目前玩家角色对象,NPC 默认使用HumanoidV2(高级人形形象).当项目默认使用HumanoidV2形象时,可直接获取HumanoidV2(let humanoidV2 = npc.getAppearance<Gameplay.HumanoidV2>()) 进行形象的更新,若非HumanoidV2形象，需要切换类型到HumanoidV2形象.

:::

使用示例:(关于示例的描述、说明)
```ts
1.切换Character为HumanoidV2外观类型：character.appearanceType = Gameplay.AppearanceType.HumanoidV2;
2.获取对应的外观对象： let appearance = npc.getAppearance<Gameplay.HumanoidV2>();
3.使用相关的换装能力：appearance.API()
```

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV2`**

## Implements

- [`IHumanoidV2MaterialStyle`](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md)
- [`IHumanoidV2`](../interfaces/Gameplay.IHumanoidV2.md)

## Table of contents

| Properties |
| :-----|
| **[behindHair](Gameplay.HumanoidV2.md#behindhair)**: [`HumanoidV2BehindHairPart`](Gameplay.HumanoidV2BehindHairPart.md) <br> 把本地角色形象数据同步到多端|
| **[frontHair](Gameplay.HumanoidV2.md#fronthair)**: [`HumanoidV2FrontHairPart`](Gameplay.HumanoidV2FrontHairPart.md) <br> 把本地角色形象数据同步到多端|
| **[gloves](Gameplay.HumanoidV2.md#gloves)**: [`HumanoidV2GlovesPart`](Gameplay.HumanoidV2GlovesPart.md) <br> 把本地角色形象数据同步到多端|
| **[head](Gameplay.HumanoidV2.md#head)**: [`HumanoidV2HeadPart`](Gameplay.HumanoidV2HeadPart.md) <br> 把本地角色形象数据同步到多端|
| **[lowerCloth](Gameplay.HumanoidV2.md#lowercloth)**: [`HumanoidV2LowerClothPart`](Gameplay.HumanoidV2LowerClothPart.md) <br> 把本地角色形象数据同步到多端|
| **[shape](Gameplay.HumanoidV2.md#shape)**: [`HumanoidV2Shape`](Gameplay.HumanoidV2Shape.md) <br> 把本地角色形象数据同步到多端|
| **[shoe](Gameplay.HumanoidV2.md#shoe)**: [`HumanoidV2ShoePart`](Gameplay.HumanoidV2ShoePart.md) <br> 把本地角色形象数据同步到多端|
| **[upperCloth](Gameplay.HumanoidV2.md#uppercloth)**: [`HumanoidV2UpperClothPart`](Gameplay.HumanoidV2UpperClothPart.md) <br> 把本地角色形象数据同步到多端|


::: details 点击查看继承
| Properties |
| :-----|
| **[enableOutline](Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 后处理开关|
| **[postProcessObj](Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.PostProcess.md) <br> 后处理开关|
:::


| Methods |
| :-----|
| **[appearanceSync](Gameplay.HumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端|
| **[attach](Gameplay.HumanoidV2.md#attach)**(`gameObject`: `GameObject`, `slotName`: [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到V2人物角色的指定插槽|
| **[changeSomatotype](Gameplay.HumanoidV2.md#changesomatotype)**(`value`: [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `sync`: `boolean`): `void` <br> 切换角色体型,举例：二次元美术风格中男女就有不同体型，表现就是相同服饰在男的体型上会大一些，在女的体型上会小一些。|
| **[clearAppearance](Gameplay.HumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据|
| **[detach](Gameplay.HumanoidV2.md#detach)**(`gameObject`: `GameObject`): `void` <br> V2的将物体从人物身上附着的物品预览插槽中分离|
| **[getBodyTattooColor](Gameplay.HumanoidV2.md#getbodytattoocolor)**(`index`: `number`): [`LinearColor`](Type.LinearColor.md) <br> 获取纹身颜色|
| **[getBodyTattooPositionX](Gameplay.HumanoidV2.md#getbodytattoopositionx)**(`index`: `number`): `number` <br> 获取纹身位置左右偏移|
| **[getBodyTattooPositionY](Gameplay.HumanoidV2.md#getbodytattoopositiony)**(`index`: `number`): `number` <br> 获取身体纹身位置上下位置|
| **[getBodyTattooRotation](Gameplay.HumanoidV2.md#getbodytattoorotation)**(`index`: `number`): `number` <br> 获取纹身旋转值|
| **[getBodyTattooType](Gameplay.HumanoidV2.md#getbodytattootype)**(`index`: `number`): `string` <br> 获取纹身贴图 GUID|
| **[getBodyTattooZoom](Gameplay.HumanoidV2.md#getbodytattoozoom)**(`index`: `number`): `number` <br> 获取身体纹身位置缩放|
| **[getGoods](Gameplay.HumanoidV2.md#getgoods)**(`GUID`: `string`): [`string`, `string`][] <br> 工程内容下角色文件中的文件GUID 为参数，加载出文件中的插槽数据|
| **[getSkinColor](Gameplay.HumanoidV2.md#getskincolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 设置皮肤颜色|
| **[getSkinTexture](Gameplay.HumanoidV2.md#getskintexture)**(): `string` <br> 获取皮肤贴图|
| **[getSlotWorldPosition](Gameplay.HumanoidV2.md#getslotworldposition)**(`slotName`: [`SlotType`](../enums/Gameplay.SlotType.md)): [`Vector`](Type.Vector.md) <br> 获取Slot世界坐标位置,V2物品预览的插槽使用|
| **[getSomatotype](Gameplay.HumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <br> 获取当前体型类型|
| **[getVertexPosition](Gameplay.HumanoidV2.md#getvertexposition)**(`index`: `number`): [`Vector`](Type.Vector.md) <br> 通过头部模型顶点index实时获取顶点位置|
| **[setAppearanceData](Gameplay.HumanoidV2.md#setappearancedata)**(`GUIDArray`: `string`[], `callback?`: [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过GUID加载数据另存为角色数据|
| **[setBodyTattooColor](Gameplay.HumanoidV2.md#setbodytattoocolor)**(`index`: `number`, `color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 身体纹身颜色|
| **[setBodyTattooPositionX](Gameplay.HumanoidV2.md#setbodytattoopositionx)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 身体纹身位置左右偏移|
| **[setBodyTattooPositionY](Gameplay.HumanoidV2.md#setbodytattoopositiony)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 身体纹身位置上下位置|
| **[setBodyTattooRotation](Gameplay.HumanoidV2.md#setbodytattoorotation)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 身体纹旋转|
| **[setBodyTattooType](Gameplay.HumanoidV2.md#setbodytattootype)**(`index`: `number`, `GUID`: `string`, `sync`: `boolean`): `void` <br> 身体纹身种类|
| **[setBodyTattooZoom](Gameplay.HumanoidV2.md#setbodytattoozoom)**(`index`: `number`, `value`: `number`, `sync`: `boolean`): `void` <br> 身体纹身位置缩放|
| **[setSkinColor](Gameplay.HumanoidV2.md#setskincolor)**(`color`: [`LinearColor`](Type.LinearColor.md), `sync`: `boolean`): `void` <br> 设置皮肤颜色|
| **[setSkinTexture](Gameplay.HumanoidV2.md#setskintexture)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 设置皮肤贴图|
| **[setSlot](Gameplay.HumanoidV2.md#setslot)**(`GUID`: `string`, `sync`: `boolean`): `void` <br> 通过插槽GUID加载数据|
| **[setSomatotype](Gameplay.HumanoidV2.md#setsomatotype)**(`somatotype`: [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)): `void` <br> 设置一套默认外观形象，比如默认二次元女性，默认二次元男性等(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)|
| **[setSuit](Gameplay.HumanoidV2.md#setsuit)**(`somatotype`: [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `head`: `string`, `upperCloth`: `string`, `lowerCloth`: `string`, `gloves`: `string`, `shoe`: `string`, `frontHair`: `string`, `behindHair`: `string`): `void` <br> 加载一套角色数据|


::: details 点击查看继承
| Methods |
| :-----|
| **[enablePostProcess](Gameplay.SomatotypeBase.md#enablepostprocess)**(`usedPostProcess`: `boolean`, `newOutlineColor`: [`LinearColor`](Type.LinearColor.md), `newOutlineWidth`: `number`): `void` <br> 后处理开关|
| **[setOutline](Gameplay.SomatotypeBase.md#setoutline)**(`usedOutline`: `boolean`): `boolean` <br> 描边开关|
| **[setOutlineAdvance](Gameplay.SomatotypeBase.md#setoutlineadvance)**(`newEnableOutline`: `boolean`, `newOutlineColorIndex`: `number`): `void` <br> 后处理描边开关|
:::


构造函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |

## Properties

### behindHair <Score text="behindHair" /> 

• **behindHair**: [`HumanoidV2BehindHairPart`](Gameplay.HumanoidV2BehindHairPart.md)

后发


### frontHair <Score text="frontHair" /> 

• **frontHair**: [`HumanoidV2FrontHairPart`](Gameplay.HumanoidV2FrontHairPart.md)

前发

___

### gloves <Score text="gloves" /> 

• **gloves**: [`HumanoidV2GlovesPart`](Gameplay.HumanoidV2GlovesPart.md)

手套

___

### head <Score text="head" /> 

• **head**: [`HumanoidV2HeadPart`](Gameplay.HumanoidV2HeadPart.md)

头

___

### lowerCloth <Score text="lowerCloth" /> 

• **lowerCloth**: [`HumanoidV2LowerClothPart`](Gameplay.HumanoidV2LowerClothPart.md)

下衣


### shape <Score text="shape" /> 

• **shape**: [`HumanoidV2Shape`](Gameplay.HumanoidV2Shape.md)

体型

___

### shoe <Score text="shoe" /> 

• **shoe**: [`HumanoidV2ShoePart`](Gameplay.HumanoidV2ShoePart.md)

鞋子

___

### upperCloth <Score text="upperCloth" /> 

• **upperCloth**: [`HumanoidV2UpperClothPart`](Gameplay.HumanoidV2UpperClothPart.md)

上衣

## Methods

### appearanceSync <Score text="appearanceSync" /> 

• **appearanceSync**(): `void` 

把本地角色形象数据同步到多端


::: warning Precautions

不要频繁调用，等本地角色编辑完成后再使用

:::


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[appearanceSync](../interfaces/Gameplay.IHumanoidV2.md#appearancesync)

___

### attach <Score text="attach" /> 

• **attach**(`gameObject`, `slotName`): `void` 

将物体附着到V2人物角色的指定插槽


::: warning Precautions

1.只适用于V2角色，人形对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` |  被附着的物体 |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) |  插槽名字，被附着到指定的插槽名 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[attach](../interfaces/Gameplay.IHumanoidV2.md#attach)

___

### changeSomatotype <Score text="changeSomatotype" /> 

• **changeSomatotype**(`value`, `sync`): `void` 

切换角色体型,举例：二次元美术风格中男女就有不同体型，表现就是相同服饰在男的体型上会大一些，在女的体型上会小一些。

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


使用示例: 角色切换类型1.切换外观类型 appearanceType 设置对应的体型 SomatotypeV2 设置模型setWholeBody
```ts
let npc = Core.GameObject.find("FDB21CE8");
npc.appearanceType =Gameplay.AppearanceType.HumanoidV2;
;
npc.appearance.changeSomatotype(Gameplay.SomatotypeV2.AnimeFemale, true);
let Tappearance = npc.appearance as Gameplay.HumanoidV1;
         setTimeout(() => {
            if(Tappearance){
               Tappearance.upperCloth.setMesh("60982",true);
                 Tappearance.lowerCloth.setMesh("64554",true);
                  Tappearance.gloves.setMesh("60991",true);
                  Tappearance.frontHair.setMesh("62540",true);
                 Tappearance.behindHair.setMesh("62786",true);
                  Tappearance.shoe.setMesh("63297",true);
                  Tappearance.head.setMesh("76618",true);
             }
        }, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) |  体型枚举; SomatotypeV2 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[changeSomatotype](../interfaces/Gameplay.IHumanoidV2.md#changesomatotype)

___

### clearAppearance <Score text="clearAppearance" /> 

• **clearAppearance**(): `void` 

清空角色形象数据



#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[clearAppearance](../interfaces/Gameplay.IHumanoidV2.md#clearappearance)

___

### detach <Score text="detach" /> 

• **detach**(`gameObject`): `void` 

V2的将物体从人物身上附着的物品预览插槽中分离


::: warning Precautions

带同步

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体GameObject |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[detach](../interfaces/Gameplay.IHumanoidV2.md#detach)


### getBodyTattooColor <Score text="getBodyTattooColor" /> 

• **getBodyTattooColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取纹身颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

[`LinearColor`](Type.LinearColor.md)

纹身颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)

___

### getBodyTattooPositionX <Score text="getBodyTattooPositionX" /> 

• **getBodyTattooPositionX**(`index`): `number` <Badge type="tip" text="client" />

获取纹身位置左右偏移


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身左右位置偏移值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionX](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)

___

### getBodyTattooPositionY <Score text="getBodyTattooPositionY" /> 

• **getBodyTattooPositionY**(`index`): `number` <Badge type="tip" text="client" />

获取身体纹身位置上下位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身上线位置值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionY](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)

___

### getBodyTattooRotation <Score text="getBodyTattooRotation" /> 

• **getBodyTattooRotation**(`index`): `number` <Badge type="tip" text="client" />

获取纹身旋转值


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身旋转值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooRotation](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)

___

### getBodyTattooType <Score text="getBodyTattooType" /> 

• **getBodyTattooType**(`index`): `string` 

获取纹身贴图 GUID

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |

#### Returns

`string`

纹身贴图GUID

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooType](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)

___

### getBodyTattooZoom <Score text="getBodyTattooZoom" /> 

• **getBodyTattooZoom**(`index`): `number` <Badge type="tip" text="client" />

获取身体纹身位置缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |

#### Returns

`number`

纹身缩放值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooZoom](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)

___

### getGoods <Score text="getGoods" /> 

• **getGoods**(`GUID`): [`string`, `string`][] 

工程内容下角色文件中的文件GUID 为参数，加载出文件中的插槽数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 本地角色文件 GUID |

#### Returns

[`string`, `string`][]

插槽数据物品GUID Slot数组： Array<[本地资源库中的AssetId, 插槽名字]>

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[getGoods](../interfaces/Gameplay.IHumanoidV2.md#getgoods)

___

### getSkinColor <Score text="getSkinColor" /> 

• **getSkinColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

设置皮肤颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getSkinColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)

___

### getSkinTexture <Score text="getSkinTexture" /> 

• **getSkinTexture**(): `string` <Badge type="tip" text="client" />

获取皮肤贴图


#### Returns

`string`

皮肤贴图GUID

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getSkinTexture](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)

___

### getSlotWorldPosition <Score text="getSlotWorldPosition" /> 

• **getSlotWorldPosition**(`slotName`): [`Vector`](Type.Vector.md) 

获取Slot世界坐标位置,V2物品预览的插槽使用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名字 |

#### Returns

[`Vector`](Type.Vector.md)

坐标位置

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[getSlotWorldPosition](../interfaces/Gameplay.IHumanoidV2.md#getslotworldposition)

___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) 

获取当前体型类型


#### Returns

[`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)

当前HunmaoidV2体型枚举SomatotypeV2值

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[getSomatotype](../interfaces/Gameplay.IHumanoidV2.md#getsomatotype)

___

### getVertexPosition <Score text="getVertexPosition" /> 

• **getVertexPosition**(`index`): [`Vector`](Type.Vector.md) 

通过头部模型顶点index实时获取顶点位置
             注意:目前顶点index只能从内部工程中查看


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 模型顶点index |

#### Returns

[`Vector`](Type.Vector.md)

坐标位置

___

### setAppearanceData <Score text="setAppearanceData" /> 

• **setAppearanceData**(`GUIDArray`, `callback?`): `void` 

通过GUID加载数据另存为角色数据


::: warning Precautions

客户端：如果角色GUID没有被预加载，则是异步的，需要再callback里再触发下一次加载 。双端：接口数据是叠加的；只有当前端生效，要同步到多端，请调用同步接口；使用前可以使用重置接口清空之前的数据

:::

使用示例:(角色加载角色数据)
```ts
let guidarray = new Array<string>()
guidarray.add("角色文件guid1");
guidarray.add("角色文件guid2")
let appearance = character.getAppearance<Gameplay.HumanoidV2>();
appearance.setAppearanceData(guidarray);
character.syncAppearanceData();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUIDArray` | `string`[] | 换装数据GUIDArray |
| `callback?` | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setAppearanceData](../interfaces/Gameplay.IHumanoidV2.md#setappearancedata)

___

### setBodyTattooColor <Score text="setBodyTattooColor" /> 

• **setBodyTattooColor**(`index`, `color`, `sync`): `void` 

身体纹身颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  纹身index |
| `color` | [`LinearColor`](Type.LinearColor.md) |  颜色值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)

___

### setBodyTattooPositionX <Score text="setBodyTattooPositionX" /> 

• **setBodyTattooPositionX**(`index`, `value`, `sync`): `void` 

身体纹身位置左右偏移

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionX](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)

___

### setBodyTattooPositionY <Score text="setBodyTattooPositionY" /> 

• **setBodyTattooPositionY**(`index`, `value`, `sync`): `void` 

身体纹身位置上下位置

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionY](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)

___

### setBodyTattooRotation <Score text="setBodyTattooRotation" /> 

• **setBodyTattooRotation**(`index`, `value`, `sync`): `void` 

身体纹旋转

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 旋转值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooRotation](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)

___

### setBodyTattooType <Score text="setBodyTattooType" /> 

• **setBodyTattooType**(`index`, `GUID`, `sync`): `void` 

身体纹身种类

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |
| `GUID` | `string` | 类型贴图GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooType](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)

___

### setBodyTattooZoom <Score text="setBodyTattooZoom" /> 

• **setBodyTattooZoom**(`index`, `value`, `sync`): `void` 

身体纹身位置缩放

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` |  缩放值 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooZoom](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)


### setSkinColor <Score text="setSkinColor" /> 

• **setSkinColor**(`color`, `sync`): `void` 

设置皮肤颜色

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  颜色 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setSkinColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)

___

### setSkinTexture <Score text="setSkinTexture" /> 

• **setSkinTexture**(`GUID`, `sync`): `void` 

设置皮肤贴图

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setSkinTexture](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)

___

### setSlot <Score text="setSlot" /> 

• **setSlot**(`GUID`, `sync`): `void` 

通过插槽GUID加载数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSlot](../interfaces/Gameplay.IHumanoidV2.md#setslot)

___

### setSomatotype <Score text="setSomatotype" /> 

• **setSomatotype**(`somatotype`): `void` <Badge type="tip" text="client" />

设置一套默认外观形象，比如默认二次元女性，默认二次元男性等(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) | 角色类型 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSomatotype](../interfaces/Gameplay.IHumanoidV2.md#setsomatotype)

___

### setSuit <Score text="setSuit" /> 

• **setSuit**(`somatotype`, `head`, `upperCloth`, `lowerCloth`, `gloves`, `shoe`, `frontHair`, `behindHair`): `void` 

加载一套角色数据


::: warning Precautions

如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调

:::

使用示例:(角色加载各部位数据)
```ts
let appearance = character.getAppearance<Gameplay.HumanoidV2>();
appearance.setSuit(SomatotypeV2.LowpolyAdultMale,"76618"，“59857”，“62790”，“63307”,"60117","62548","62785");
character.syncAppearanceData();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) |  主Mesh类型："None"不能作为参数 |
| `head` | `string` |  头部资源的GUID(Editor左侧资源列表里面的GUID) |
| `upperCloth` | `string` |  上衣资源的GUID(Editor左侧资源列表里面的GUID) |
| `lowerCloth` | `string` |  下衣资源的GUID(Editor左侧资源列表里面的GUID) |
| `gloves` | `string` |  手套资源的GUID(Editor左侧资源列表里面的GUID) |
| `shoe` | `string` |  鞋子资源的GUID(Editor左侧资源列表里面的GUID) |
| `frontHair` | `string` |  前发资源的GUID(Editor左侧资源列表里面的GUID) |
| `behindHair` | `string` |  后发资源的GUID(Editor左侧资源列表里面的GUID) |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSuit](../interfaces/Gameplay.IHumanoidV2.md#setsuit)
