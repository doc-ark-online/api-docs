[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2

# Class: HumanoidV2

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HumanoidV2

**`Description`**

人形对象 V2 接口

**`Author`**

邓广

**`Network Status`**

usage:双端

## Hierarchy

- [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV2`**

## Implements

- [`IHumanoidV2MaterialStyle`](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md)
- [`IHumanoidV2`](../interfaces/Gameplay.Gameplay.IHumanoidV2.md)

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HumanoidV2.md#constructor)

### Properties

- [behindHair](Gameplay.Gameplay.HumanoidV2.md#behindhair)
- [enableOutLine](Gameplay.Gameplay.HumanoidV2.md#enableoutline)
- [frontHair](Gameplay.Gameplay.HumanoidV2.md#fronthair)
- [gloves](Gameplay.Gameplay.HumanoidV2.md#gloves)
- [head](Gameplay.Gameplay.HumanoidV2.md#head)
- [lowerCloth](Gameplay.Gameplay.HumanoidV2.md#lowercloth)
- [postProcessObj](Gameplay.Gameplay.HumanoidV2.md#postprocessobj)
- [shape](Gameplay.Gameplay.HumanoidV2.md#shape)
- [shoe](Gameplay.Gameplay.HumanoidV2.md#shoe)
- [upperCloth](Gameplay.Gameplay.HumanoidV2.md#uppercloth)

### Methods

- [appearanceSync](Gameplay.Gameplay.HumanoidV2.md#appearancesync)
- [attach](Gameplay.Gameplay.HumanoidV2.md#attach)
- [changeSomatotype](Gameplay.Gameplay.HumanoidV2.md#changesomatotype)
- [clearAppearance](Gameplay.Gameplay.HumanoidV2.md#clearappearance)
- [detach](Gameplay.Gameplay.HumanoidV2.md#detach)
- [enablePostProcess](Gameplay.Gameplay.HumanoidV2.md#enablepostprocess)
- [getBodyTattooColor](Gameplay.Gameplay.HumanoidV2.md#getbodytattoocolor)
- [getBodyTattooPositionX](Gameplay.Gameplay.HumanoidV2.md#getbodytattoopositionx)
- [getBodyTattooPositionY](Gameplay.Gameplay.HumanoidV2.md#getbodytattoopositiony)
- [getBodyTattooRotation](Gameplay.Gameplay.HumanoidV2.md#getbodytattoorotation)
- [getBodyTattooType](Gameplay.Gameplay.HumanoidV2.md#getbodytattootype)
- [getBodyTattooZoom](Gameplay.Gameplay.HumanoidV2.md#getbodytattoozoom)
- [getGoods](Gameplay.Gameplay.HumanoidV2.md#getgoods)
- [getSkinColor](Gameplay.Gameplay.HumanoidV2.md#getskincolor)
- [getSkinTexture](Gameplay.Gameplay.HumanoidV2.md#getskintexture)
- [getSlotWorldPosition](Gameplay.Gameplay.HumanoidV2.md#getslotworldposition)
- [getSomatotype](Gameplay.Gameplay.HumanoidV2.md#getsomatotype)
- [setAppearanceData](Gameplay.Gameplay.HumanoidV2.md#setappearancedata)
- [setBodyTattooColor](Gameplay.Gameplay.HumanoidV2.md#setbodytattoocolor)
- [setBodyTattooPositionX](Gameplay.Gameplay.HumanoidV2.md#setbodytattoopositionx)
- [setBodyTattooPositionY](Gameplay.Gameplay.HumanoidV2.md#setbodytattoopositiony)
- [setBodyTattooRotation](Gameplay.Gameplay.HumanoidV2.md#setbodytattoorotation)
- [setBodyTattooType](Gameplay.Gameplay.HumanoidV2.md#setbodytattootype)
- [setBodyTattooZoom](Gameplay.Gameplay.HumanoidV2.md#setbodytattoozoom)
- [setOutLine](Gameplay.Gameplay.HumanoidV2.md#setoutline)
- [setOutlineAdvance](Gameplay.Gameplay.HumanoidV2.md#setoutlineadvance)
- [setSkinColor](Gameplay.Gameplay.HumanoidV2.md#setskincolor)
- [setSkinTexture](Gameplay.Gameplay.HumanoidV2.md#setskintexture)
- [setSlot](Gameplay.Gameplay.HumanoidV2.md#setslot)
- [setSomatotype](Gameplay.Gameplay.HumanoidV2.md#setsomatotype)
- [setSuit](Gameplay.Gameplay.HumanoidV2.md#setsuit)

## Constructors

### constructor

• **new HumanoidV2**(`character`)

**`Description`**

构造函数

#### Parameters

| Name        | Type                                                  | Description |
| :---------- | :---------------------------------------------------- | :---------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色  |

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[constructor](Gameplay.Gameplay.SomatotypeBase.md#constructor)

#### Defined in

Gameplay/index.d.ts:2591

## Properties

### behindHair

• **behindHair**: [`HumanoidV2BehindHairPart`](Gameplay.Gameplay.HumanoidV2BehindHairPart.md)

**`Description`**

后发

#### Defined in

Gameplay/index.d.ts:5053

---

### enableOutLine

• `Protected` **enableOutLine**: `boolean`

**`Description`**

是否启动遮挡时角色描边

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[enableOutLine](Gameplay.Gameplay.SomatotypeBase.md#enableoutline)

#### Defined in

Gameplay/index.d.ts:2586

---

### frontHair

• **frontHair**: [`HumanoidV2FrontHairPart`](Gameplay.Gameplay.HumanoidV2FrontHairPart.md)

**`Description`**

前发

#### Defined in

Gameplay/index.d.ts:5049

---

### gloves

• **gloves**: [`HumanoidV2GlovesPart`](Gameplay.Gameplay.HumanoidV2GlovesPart.md)

**`Description`**

手套

#### Defined in

Gameplay/index.d.ts:5069

---

### head

• **head**: [`HumanoidV2HeadPart`](Gameplay.Gameplay.HumanoidV2HeadPart.md)

**`Description`**

头

#### Defined in

Gameplay/index.d.ts:5057

---

### lowerCloth

• **lowerCloth**: [`HumanoidV2LowerClothPart`](Gameplay.Gameplay.HumanoidV2LowerClothPart.md)

**`Description`**

下衣

#### Defined in

Gameplay/index.d.ts:5065

---

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[postProcessObj](Gameplay.Gameplay.SomatotypeBase.md#postprocessobj)

#### Defined in

Gameplay/index.d.ts:2582

---

### shape

• **shape**: [`HumanoidV2Shape`](Gameplay.Gameplay.HumanoidV2Shape.md)

**`Description`**

体型

#### Defined in

Gameplay/index.d.ts:5077

---

### shoe

• **shoe**: [`HumanoidV2ShoePart`](Gameplay.Gameplay.HumanoidV2ShoePart.md)

**`Description`**

鞋子

#### Defined in

Gameplay/index.d.ts:5073

---

### upperCloth

• **upperCloth**: [`HumanoidV2UpperClothPart`](Gameplay.Gameplay.HumanoidV2UpperClothPart.md)

**`Description`**

上衣

#### Defined in

Gameplay/index.d.ts:5061

## Methods

### appearanceSync

▸ **appearanceSync**(): `void`

**`Description`**

把本地角色形象数据同步到多端

**`Effect`**

调用端生效

**`Precautions`**

不要频繁调用，等本地角色编辑完成后再使用

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[appearanceSync](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#appearancesync)

#### Defined in

Gameplay/index.d.ts:5295

---

### attach

▸ **attach**(`gameObject`, `slotName`): `void`

attachGameObjectToCharacterSlot

**`Description`**

将物体附着到 V2 人物角色的指定插槽

**`Effect`**

双端都可以使用

**`Precautions`**

1.只适用于 V2 角色，人形对象

#### Parameters

| Name         | Type                                                 | Description                           |
| :----------- | :--------------------------------------------------- | :------------------------------------ |
| `gameObject` | [`GameObject`](Core.Core.GameObject.md)              | usage: 被附着的物体                   |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage: 插槽名字，被附着到指定的插槽名 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[attach](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#attach)

#### Defined in

Gameplay/index.d.ts:5253

---

### changeSomatotype

▸ **changeSomatotype**(`value`, `sync`): `void`

**`Description`**

切换角色主 Mesh

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                         | Description                             |
| :------ | :----------------------------------------------------------- | :-------------------------------------- |
| `value` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | usage: 主 Mesh 类型："None"不能作为参数 |
| `sync`  | `boolean`                                                    | usage:true 同步; false 不同步           |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[changeSomatotype](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#changesomatotype)

#### Defined in

Gameplay/index.d.ts:5086

---

### clearAppearance

▸ **clearAppearance**(): `void`

**`Description`**

清空角色形象数据

**`Effect`**

双端

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[clearAppearance](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#clearappearance)

#### Defined in

Gameplay/index.d.ts:5289

---

### detach

▸ **detach**(`gameObject`): `void`

**`Description`**

V2 的将物体从人物身上附着的物品预览插槽中分离

**`Effect`**

双端

**`Precautions`**

带同步

#### Parameters

| Name         | Type                                    | Description           |
| :----------- | :-------------------------------------- | :-------------------- |
| `gameObject` | [`GameObject`](Core.Core.GameObject.md) | usage:物体 GameObject |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[detach](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#detach)

#### Defined in

Gameplay/index.d.ts:5260

---

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutLineColor`, `newOutLineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name              | Type                                      | Description              |
| :---------------- | :---------------------------------------- | :----------------------- |
| `usedPostProcess` | `boolean`                                 | usage:是否使用后处理功能 |
| `newOutLineColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage:Outline 颜色       |
| `newOutLineWidth` | `number`                                  | usage:Outline 宽度       |

#### Returns

`void`

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[enablePostProcess](Gameplay.Gameplay.SomatotypeBase.md#enablepostprocess)

#### Defined in

Gameplay/index.d.ts:2599

---

### getBodyTattooColor

▸ **getBodyTattooColor**(`index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取纹身颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 Index |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

纹身颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)

#### Defined in

Gameplay/index.d.ts:5143

---

### getBodyTattooPositionX

▸ **getBodyTattooPositionX**(`index`): `number`

**`Description`**

获取纹身位置左右偏移

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 index |

#### Returns

`number`

纹身左右位置偏移值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)

#### Defined in

Gameplay/index.d.ts:5178

---

### getBodyTattooPositionY

▸ **getBodyTattooPositionY**(`index`): `number`

**`Description`**

获取身体纹身位置上下位置

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 index |

#### Returns

`number`

纹身上线位置值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)

#### Defined in

Gameplay/index.d.ts:5195

---

### getBodyTattooRotation

▸ **getBodyTattooRotation**(`index`): `number`

**`Description`**

获取纹身旋转值

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 index |

#### Returns

`number`

纹身旋转值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)

#### Defined in

Gameplay/index.d.ts:5229

---

### getBodyTattooType

▸ **getBodyTattooType**(`index`): `string`

**`Description`**

获取纹身贴图 guid

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 Index |

#### Returns

`string`

纹身贴图 guid

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)

#### Defined in

Gameplay/index.d.ts:5161

---

### getBodyTattooZoom

▸ **getBodyTattooZoom**(`index`): `number`

**`Description`**

获取身体纹身位置缩放

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `index` | `number` | usage:纹身 index |

#### Returns

`number`

纹身缩放值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)

#### Defined in

Gameplay/index.d.ts:5212

---

### getGoods

▸ **getGoods**(`guid`): [`string`, `string`][]

**`Description`**

通过插槽 Guid 加载数据

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `guid` | `string` | usage:Slot Guid |

#### Returns

[`string`, `string`][]

插槽数据中物品 Guid Slot 数组

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[getGoods](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#getgoods)

#### Defined in

Gameplay/index.d.ts:5244

---

### getSkinColor

▸ **getSkinColor**(): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

设置皮肤颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getSkinColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)

#### Defined in

Gameplay/index.d.ts:5107

---

### getSkinTexture

▸ **getSkinTexture**(): `string`

**`Description`**

获取皮肤贴图

**`Effect`**

客户端生效

#### Returns

`string`

皮肤贴图 guid

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getSkinTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)

#### Defined in

Gameplay/index.d.ts:5122

---

### getSlotWorldPosition

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取 Slot 世界坐标位置,V2 物品预览的插槽使用

**`Effect`**

双端

#### Parameters

| Name       | Type                                                 | Description    |
| :--------- | :--------------------------------------------------- | :------------- |
| `slotName` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽名字 |

#### Returns

[`Vector`](Type.Type.Vector.md)

坐标位置

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[getSlotWorldPosition](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#getslotworldposition)

#### Defined in

Gameplay/index.d.ts:5267

---

### getSomatotype

▸ **getSomatotype**(): [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md)

**`Description`**

获取当前的主 Mesh

**`Effect`**

双端

#### Returns

[`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md)

主 Mesh

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[getSomatotype](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#getsomatotype)

#### Defined in

Gameplay/index.d.ts:5092

---

### setAppearanceData

▸ **setAppearanceData**(`guidArray`, `callback?`): `void`

**`Description`**

通过 Guid 加载数据另存为角色数据

**`Effect`**

双端

**`Precautions`**

客户端：如果角色 GUID 没有被预加载，则是异步的，需要再 callback 里再触发下一次加载 。双端：接口数据是叠加的；只有当前端生效，要同步到多端，请调用同步接口；使用前可以使用重置接口清空之前的数据

#### Parameters

| Name        | Type                                                                     | Description                       |
| :---------- | :----------------------------------------------------------------------- | :-------------------------------- |
| `guidArray` | `string`[]                                                               | usage:换装数据 GuidArray          |
| `callback?` | [`EmptyCallbackFunc`](../modules/Gameplay.Gameplay.md#emptycallbackfunc) | usage:加载完成的回调 default:null |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setAppearanceData](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setappearancedata)

#### Defined in

Gameplay/index.d.ts:5281

---

### setBodyTattooColor

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

身体纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description                   |
| :------ | :---------------------------------------- | :---------------------------- |
| `index` | `number`                                  | usage: 纹身 index             |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 颜色值                 |
| `sync`  | `boolean`                                 | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)

#### Defined in

Gameplay/index.d.ts:5132

---

### setBodyTattooPositionX

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置左右偏移

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身 Index              |
| `value` | `number`  | usage:偏移值                  |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)

#### Defined in

Gameplay/index.d.ts:5171

---

### setBodyTattooPositionY

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身 Index              |
| `value` | `number`  | usage:偏移值                  |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)

#### Defined in

Gameplay/index.d.ts:5188

---

### setBodyTattooRotation

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身 Index              |
| `value` | `number`  | usage:旋转值                  |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)

#### Defined in

Gameplay/index.d.ts:5222

---

### setBodyTattooType

▸ **setBodyTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

身体纹身种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身 index              |
| `guid`  | `string`  | usage:类型贴图 guid           |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)

#### Defined in

Gameplay/index.d.ts:5153

---

### setBodyTattooZoom

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description                   |
| :------ | :-------- | :---------------------------- |
| `index` | `number`  | usage:纹身 Index              |
| `value` | `number`  | usage: 缩放值                 |
| `sync`  | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)

#### Defined in

Gameplay/index.d.ts:5205

---

### setOutLine

▸ **setOutLine**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name          | Type      | Description            |
| :------------ | :-------- | :--------------------- |
| `usedOutline` | `boolean` | usage:是否使用描边功能 |

#### Returns

`boolean`

是否成功

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[setOutLine](Gameplay.Gameplay.SomatotypeBase.md#setoutline)

#### Defined in

Gameplay/index.d.ts:2610

---

### setOutlineAdvance

▸ **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void`

**`Description`**

后处理描边开关

**`Effect`**

调用端调用生效

#### Parameters

| Name                   | Type      | Description            |
| :--------------------- | :-------- | :--------------------- |
| `newEnableOutline`     | `boolean` | usage:是否开启描边功能 |
| `newOutlineColorIndex` | `number`  | usage:描边的颜色       |

#### Returns

`void`

#### Inherited from

[SomatotypeBase](Gameplay.Gameplay.SomatotypeBase.md).[setOutlineAdvance](Gameplay.Gameplay.SomatotypeBase.md#setoutlineadvance)

#### Defined in

Gameplay/index.d.ts:2617

---

### setSkinColor

▸ **setSkinColor**(`color`, `sync`): `void`

**`Description`**

设置皮肤颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description                   |
| :------ | :---------------------------------------- | :---------------------------- |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 颜色                   |
| `sync`  | `boolean`                                 | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setSkinColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)

#### Defined in

Gameplay/index.d.ts:5101

---

### setSkinTexture

▸ **setSkinTexture**(`guid`, `sync`): `void`

**`Description`**

设置皮肤贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:模型 Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setSkinTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)

#### Defined in

Gameplay/index.d.ts:5116

---

### setSlot

▸ **setSlot**(`guid`, `sync`): `void`

**`Description`**

通过插槽 Guid 加载数据

**`Effect`**

双端

#### Parameters

| Name   | Type      | Description                   |
| :----- | :-------- | :---------------------------- |
| `guid` | `string`  | usage:Slot Guid               |
| `sync` | `boolean` | usage:true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSlot](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setslot)

#### Defined in

Gameplay/index.d.ts:5237

---

### setSomatotype

▸ **setSomatotype**(`somatotype`): `void`

**`Description`**

设置形象(如果没有预加载对应的 GUID，则是异步的,监听 loadAppearanceDataAllCompletedDelegate 获取加载完成回调)

**`Effect`**

客户端

#### Parameters

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | usage:角色类型 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSomatotype](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setsomatotype)

#### Defined in

Gameplay/index.d.ts:5273

---

### setSuit

▸ **setSuit**(`somatotype`, `head`, `upperCloth`, `lowerCloth`, `gloves`, `shoe`, `frontHair`, `behindHair`): `void`

**`Description`**

加载一套角色数据

**`Effect`**

只在客户端调用生效

**`Precautions`**

如果没有预加载对应的 GUID，则是异步的,监听 loadAppearanceDataAllCompletedDelegate 获取加载完成回调

#### Parameters

| Name         | Type                                                         | Description                                              |
| :----------- | :----------------------------------------------------------- | :------------------------------------------------------- |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | usage: 主 Mesh 类型："None"不能作为参数                  |
| `head`       | `string`                                                     | usage: 头部资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `upperCloth` | `string`                                                     | usage: 上衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `lowerCloth` | `string`                                                     | usage: 下衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `gloves`     | `string`                                                     | usage: 手套资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `shoe`       | `string`                                                     | usage: 鞋子资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `frontHair`  | `string`                                                     | usage: 前发资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `behindHair` | `string`                                                     | usage: 后发资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSuit](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setsuit)

#### Defined in

Gameplay/index.d.ts:5309
