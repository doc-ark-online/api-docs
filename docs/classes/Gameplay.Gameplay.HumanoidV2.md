[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2

# HumanoidV2 <Badge type="tip" text="Class" />

**`Description`**

人形对象 V2 接口

## Hierarchy

- [`SomatotypeBase`](Gameplay.Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV2`**

## Implements

- [`IHumanoidV2MaterialStyle`](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md)
- [`IHumanoidV2`](../interfaces/Gameplay.Gameplay.IHumanoidV2.md)

## Table of contents

| Properties                                                                                                                                          |
| :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[behindHair](Gameplay.Gameplay.HumanoidV2.md#behindhair)**: [`HumanoidV2BehindHairPart`](Gameplay.Gameplay.HumanoidV2BehindHairPart.md) <br> 后发 |
| **[enableOutline](Gameplay.Gameplay.HumanoidV2.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边                                           |
| **[frontHair](Gameplay.Gameplay.HumanoidV2.md#fronthair)**: [`HumanoidV2FrontHairPart`](Gameplay.Gameplay.HumanoidV2FrontHairPart.md) <br> 前发     |
| **[gloves](Gameplay.Gameplay.HumanoidV2.md#gloves)**: [`HumanoidV2GlovesPart`](Gameplay.Gameplay.HumanoidV2GlovesPart.md) <br> 手套                 |
| **[head](Gameplay.Gameplay.HumanoidV2.md#head)**: [`HumanoidV2HeadPart`](Gameplay.Gameplay.HumanoidV2HeadPart.md) <br> 头                           |
| **[lowerCloth](Gameplay.Gameplay.HumanoidV2.md#lowercloth)**: [`HumanoidV2LowerClothPart`](Gameplay.Gameplay.HumanoidV2LowerClothPart.md) <br> 下衣 |
| **[postProcessObj](Gameplay.Gameplay.HumanoidV2.md#postprocessobj)**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md) <br> 后处理对象             |
| **[shape](Gameplay.Gameplay.HumanoidV2.md#shape)**: [`HumanoidV2Shape`](Gameplay.Gameplay.HumanoidV2Shape.md) <br> 体型                             |
| **[shoe](Gameplay.Gameplay.HumanoidV2.md#shoe)**: [`HumanoidV2ShoePart`](Gameplay.Gameplay.HumanoidV2ShoePart.md) <br> 鞋子                         |
| **[upperCloth](Gameplay.Gameplay.HumanoidV2.md#uppercloth)**: [`HumanoidV2UpperClothPart`](Gameplay.Gameplay.HumanoidV2UpperClothPart.md) <br> 上衣 |

| Methods                                                                                                                                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[appearanceSync](Gameplay.Gameplay.HumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端                                                                                                                                     |
| **[attach](Gameplay.Gameplay.HumanoidV2.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `void` <br> 将物体附着到 V2 人物角色的指定插槽                                                                             |
| **[changeSomatotype](Gameplay.Gameplay.HumanoidV2.md#changesomatotype)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md), `boolean`): `void` <br> 切换角色主 Mesh                                                                       |
| **[clearAppearance](Gameplay.Gameplay.HumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据                                                                                                                                               |
| **[detach](Gameplay.Gameplay.HumanoidV2.md#detach)**(`GameObject`): `void` <br> V2 的将物体从人物身上附着的物品预览插槽中分离                                                                                                                        |
| **[enablePostProcess](Gameplay.Gameplay.HumanoidV2.md#enablepostprocess)**(`boolean`, [`LinearColor`](Type.Type.LinearColor.md), `number`): `void` <br> 后处理开关                                                                                   |
| **[getBodyTattooColor](Gameplay.Gameplay.HumanoidV2.md#getbodytattoocolor)**(`number`): [`LinearColor`](Type.Type.LinearColor.md) <br> 获取纹身颜色                                                                                                  |
| **[getBodyTattooPositionX](Gameplay.Gameplay.HumanoidV2.md#getbodytattoopositionx)**(`number`): `number` <br> 获取纹身位置左右偏移                                                                                                                   |
| **[getBodyTattooPositionY](Gameplay.Gameplay.HumanoidV2.md#getbodytattoopositiony)**(`number`): `number` <br> 获取身体纹身位置上下位置                                                                                                               |
| **[getBodyTattooRotation](Gameplay.Gameplay.HumanoidV2.md#getbodytattoorotation)**(`number`): `number` <br> 获取纹身旋转值                                                                                                                           |
| **[getBodyTattooType](Gameplay.Gameplay.HumanoidV2.md#getbodytattootype)**(`number`): `string` <br> 获取纹身贴图 guid                                                                                                                                |
| **[getBodyTattooZoom](Gameplay.Gameplay.HumanoidV2.md#getbodytattoozoom)**(`number`): `number` <br> 获取身体纹身位置缩放                                                                                                                             |
| **[getGoods](Gameplay.Gameplay.HumanoidV2.md#getgoods)**(`string`): [`string`, `string`][] <br> 通过插槽 Guid 加载数据                                                                                                                               |
| **[getSkinColor](Gameplay.Gameplay.HumanoidV2.md#getskincolor)**(): [`LinearColor`](Type.Type.LinearColor.md) <br> 设置皮肤颜色                                                                                                                      |
| **[getSkinTexture](Gameplay.Gameplay.HumanoidV2.md#getskintexture)**(): `string` <br> 获取皮肤贴图                                                                                                                                                   |
| **[getSlotWorldPosition](Gameplay.Gameplay.HumanoidV2.md#getslotworldposition)**([`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): [`Vector`](Type.Type.Vector.md) <br> 获取 Slot 世界坐标位置,V2 物品预览的插槽使用                            |
| **[getSomatotype](Gameplay.Gameplay.HumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) <br> 获取当前的主 Mesh                                                                                            |
| **[setAppearanceData](Gameplay.Gameplay.HumanoidV2.md#setappearancedata)**(`string`[], [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过 Guid 加载数据另存为角色数据                                               |
| **[setBodyTattooColor](Gameplay.Gameplay.HumanoidV2.md#setbodytattoocolor)**(`number`, [`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 身体纹身颜色                                                                               |
| **[setBodyTattooPositionX](Gameplay.Gameplay.HumanoidV2.md#setbodytattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置左右偏移                                                                                                |
| **[setBodyTattooPositionY](Gameplay.Gameplay.HumanoidV2.md#setbodytattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置上下位置                                                                                                |
| **[setBodyTattooRotation](Gameplay.Gameplay.HumanoidV2.md#setbodytattoorotation)**(`number`, `number`, `boolean`): `void` <br> 身体纹旋转                                                                                                            |
| **[setBodyTattooType](Gameplay.Gameplay.HumanoidV2.md#setbodytattootype)**(`number`, `string`, `boolean`): `void` <br> 身体纹身种类                                                                                                                  |
| **[setBodyTattooZoom](Gameplay.Gameplay.HumanoidV2.md#setbodytattoozoom)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置缩放                                                                                                              |
| **[setOutline](Gameplay.Gameplay.HumanoidV2.md#setoutline)**(`boolean`): `boolean` <br> 描边开关                                                                                                                                                     |
| **[setOutlineAdvance](Gameplay.Gameplay.HumanoidV2.md#setoutlineadvance)**(`boolean`, `number`): `void` <br> 后处理描边开关                                                                                                                          |
| **[setSkinColor](Gameplay.Gameplay.HumanoidV2.md#setskincolor)**([`LinearColor`](Type.Type.LinearColor.md), `boolean`): `void` <br> 设置皮肤颜色                                                                                                     |
| **[setSkinTexture](Gameplay.Gameplay.HumanoidV2.md#setskintexture)**(`string`, `boolean`): `void` <br> 设置皮肤贴图                                                                                                                                  |
| **[setSlot](Gameplay.Gameplay.HumanoidV2.md#setslot)**(`string`, `boolean`): `void` <br> 通过插槽 Guid 加载数据                                                                                                                                      |
| **[setSomatotype](Gameplay.Gameplay.HumanoidV2.md#setsomatotype)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md)): `void` <br> 设置形象(如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调) |
| **[setSuit](Gameplay.Gameplay.HumanoidV2.md#setsuit)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md), `string`, `string`, `string`, `string`, `string`, `string`, `string`): `void` <br> 加载一套角色数据                             |

**`Description`**

构造函数

#### Parameters

| Name        | Type                                                  | Description |
| :---------- | :---------------------------------------------------- | :---------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | 角色        |

## Properties

### behindHair

• **behindHair**: [`HumanoidV2BehindHairPart`](Gameplay.Gameplay.HumanoidV2BehindHairPart.md)

**`Description`**

后发

---

### enableOutline

• `Protected` **enableOutline**: `boolean`

**`Description`**

是否启动遮挡时角色描边

---

### frontHair

• **frontHair**: [`HumanoidV2FrontHairPart`](Gameplay.Gameplay.HumanoidV2FrontHairPart.md)

**`Description`**

前发

---

### gloves

• **gloves**: [`HumanoidV2GlovesPart`](Gameplay.Gameplay.HumanoidV2GlovesPart.md)

**`Description`**

手套

---

### head

• **head**: [`HumanoidV2HeadPart`](Gameplay.Gameplay.HumanoidV2HeadPart.md)

**`Description`**

头

---

### lowerCloth

• **lowerCloth**: [`HumanoidV2LowerClothPart`](Gameplay.Gameplay.HumanoidV2LowerClothPart.md)

**`Description`**

下衣

---

### postProcessObj

• `Protected` **postProcessObj**: [`PostProcess`](Gameplay.Gameplay.PostProcess.md)

**`Description`**

后处理对象

---

### shape

• **shape**: [`HumanoidV2Shape`](Gameplay.Gameplay.HumanoidV2Shape.md)

**`Description`**

体型

---

### shoe

• **shoe**: [`HumanoidV2ShoePart`](Gameplay.Gameplay.HumanoidV2ShoePart.md)

**`Description`**

鞋子

---

### upperCloth

• **upperCloth**: [`HumanoidV2UpperClothPart`](Gameplay.Gameplay.HumanoidV2UpperClothPart.md)

**`Description`**

上衣

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

---

### attach

▸ **attach**(`gameObject`, `slotName`): `void`

**`Description`**

将物体附着到 V2 人物角色的指定插槽

**`Effect`**

双端都可以使用

**`Precautions`**

1.只适用于 V2 角色，人形对象

#### Parameters

| Name         | Type                                                 | Description                    |
| :----------- | :--------------------------------------------------- | :----------------------------- |
| `gameObject` | `GameObject`                                         | 被附着的物体                   |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽名字，被附着到指定的插槽名 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[attach](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#attach)

---

### changeSomatotype

▸ **changeSomatotype**(`value`, `sync`): `void`

**`Description`**

切换角色主 Mesh

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                                         | Description                      |
| :------ | :----------------------------------------------------------- | :------------------------------- |
| `value` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | 主 Mesh 类型："None"不能作为参数 |
| `sync`  | `boolean`                                                    | true 同步; false 不同步          |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[changeSomatotype](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#changesomatotype)

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

| Name         | Type         | Description     |
| :----------- | :----------- | :-------------- |
| `gameObject` | `GameObject` | 物体 GameObject |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[detach](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#detach)

---

### enablePostProcess

▸ **enablePostProcess**(`usedPostProcess`, `newOutlineColor`, `newOutlineWidth`): `void`

**`Description`**

后处理开关

**`Effect`**

客户端调用生效

#### Parameters

| Name              | Type                                      | Description        |
| :---------------- | :---------------------------------------- | :----------------- |
| `usedPostProcess` | `boolean`                                 | 是否使用后处理功能 |
| `newOutlineColor` | [`LinearColor`](Type.Type.LinearColor.md) | Outline 颜色       |
| `newOutlineWidth` | `number`                                  | Outline 宽度       |

#### Returns

`void`

---

### getBodyTattooColor

▸ **getBodyTattooColor**(`index`): [`LinearColor`](Type.Type.LinearColor.md)

**`Description`**

获取纹身颜色

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 Index  |

#### Returns

[`LinearColor`](Type.Type.LinearColor.md)

纹身颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoocolor)

---

### getBodyTattooPositionX

▸ **getBodyTattooPositionX**(`index`): `number`

**`Description`**

获取纹身位置左右偏移

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身左右位置偏移值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositionx)

---

### getBodyTattooPositionY

▸ **getBodyTattooPositionY**(`index`): `number`

**`Description`**

获取身体纹身位置上下位置

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身上线位置值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoopositiony)

---

### getBodyTattooRotation

▸ **getBodyTattooRotation**(`index`): `number`

**`Description`**

获取纹身旋转值

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身旋转值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoorotation)

---

### getBodyTattooType

▸ **getBodyTattooType**(`index`): `string`

**`Description`**

获取纹身贴图 guid

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 Index  |

#### Returns

`string`

纹身贴图 guid

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattootype)

---

### getBodyTattooZoom

▸ **getBodyTattooZoom**(`index`): `number`

**`Description`**

获取身体纹身位置缩放

**`Effect`**

客户端生效

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `index` | `number` | 纹身 index  |

#### Returns

`number`

纹身缩放值

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[getBodyTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#getbodytattoozoom)

---

### getGoods

▸ **getGoods**(`guid`): [`string`, `string`][]

**`Description`**

通过插槽 Guid 加载数据

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | Slot Guid   |

#### Returns

[`string`, `string`][]

插槽数据中物品 Guid Slot 数组

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[getGoods](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#getgoods)

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

---

### getSlotWorldPosition

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取 Slot 世界坐标位置,V2 物品预览的插槽使用

**`Effect`**

双端

#### Parameters

| Name       | Type                                                 | Description |
| :--------- | :--------------------------------------------------- | :---------- |
| `slotName` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽名字    |

#### Returns

[`Vector`](Type.Type.Vector.md)

坐标位置

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[getSlotWorldPosition](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#getslotworldposition)

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

| Name        | Type                                                             | Description                 |
| :---------- | :--------------------------------------------------------------- | :-------------------------- |
| `guidArray` | `string`[]                                                       | 换装数据 GuidArray          |
| `callback?` | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setAppearanceData](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setappearancedata)

---

### setBodyTattooColor

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void`

**`Description`**

身体纹身颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description             |
| :------ | :---------------------------------------- | :---------------------- |
| `index` | `number`                                  | 纹身 index              |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色值                  |
| `sync`  | `boolean`                                 | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)

---

### setBodyTattooPositionX

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置左右偏移

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 偏移值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionX](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)

---

### setBodyTattooPositionY

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置上下位置

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 偏移值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionY](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)

---

### setBodyTattooRotation

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹旋转

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 旋转值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooRotation](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)

---

### setBodyTattooType

▸ **setBodyTattooType**(`index`, `guid`, `sync`): `void`

**`Description`**

身体纹身种类

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 index              |
| `guid`  | `string`  | 类型贴图 guid           |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooType](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)

---

### setBodyTattooZoom

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void`

**`Description`**

身体纹身位置缩放

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type      | Description             |
| :------ | :-------- | :---------------------- |
| `index` | `number`  | 纹身 Index              |
| `value` | `number`  | 缩放值                  |
| `sync`  | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooZoom](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)

---

### setOutline

▸ **setOutline**(`usedOutline`): `boolean`

**`Description`**

描边开关

**`Effect`**

调用调用生效

#### Parameters

| Name          | Type      | Description      |
| :------------ | :-------- | :--------------- |
| `usedOutline` | `boolean` | 是否使用描边功能 |

#### Returns

`boolean`

是否成功

---

### setOutlineAdvance

▸ **setOutlineAdvance**(`newEnableOutline`, `newOutlineColorIndex`): `void`

**`Description`**

后处理描边开关

**`Effect`**

调用端调用生效

#### Parameters

| Name                   | Type      | Description      |
| :--------------------- | :-------- | :--------------- |
| `newEnableOutline`     | `boolean` | 是否开启描边功能 |
| `newOutlineColorIndex` | `number`  | 描边的颜色       |

#### Returns

`void`

---

### setSkinColor

▸ **setSkinColor**(`color`, `sync`): `void`

**`Description`**

设置皮肤颜色

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name    | Type                                      | Description             |
| :------ | :---------------------------------------- | :---------------------- |
| `color` | [`LinearColor`](Type.Type.LinearColor.md) | 颜色                    |
| `sync`  | `boolean`                                 | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setSkinColor](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)

---

### setSkinTexture

▸ **setSkinTexture**(`guid`, `sync`): `void`

**`Description`**

设置皮肤贴图

**`Effect`**

sync = false:客户端;
sync = true:双端

#### Parameters

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | 模型 Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md).[setSkinTexture](../interfaces/Gameplay.Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)

---

### setSlot

▸ **setSlot**(`guid`, `sync`): `void`

**`Description`**

通过插槽 Guid 加载数据

**`Effect`**

双端

#### Parameters

| Name   | Type      | Description             |
| :----- | :-------- | :---------------------- |
| `guid` | `string`  | Slot Guid               |
| `sync` | `boolean` | true 同步; false 不同步 |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSlot](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setslot)

---

### setSomatotype

▸ **setSomatotype**(`somatotype`): `void`

**`Description`**

设置形象(如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调)

**`Effect`**

客户端

#### Parameters

| Name         | Type                                                         | Description |
| :----------- | :----------------------------------------------------------- | :---------- |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | 角色类型    |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSomatotype](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setsomatotype)

---

### setSuit

▸ **setSuit**(`somatotype`, `head`, `upperCloth`, `lowerCloth`, `gloves`, `shoe`, `frontHair`, `behindHair`): `void`

**`Description`**

加载一套角色数据

**`Effect`**

只在客户端调用生效

**`Precautions`**

如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调

#### Parameters

| Name         | Type                                                         | Description                                       |
| :----------- | :----------------------------------------------------------- | :------------------------------------------------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | 主 Mesh 类型："None"不能作为参数                  |
| `head`       | `string`                                                     | 头部资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `upperCloth` | `string`                                                     | 上衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `lowerCloth` | `string`                                                     | 下衣资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `gloves`     | `string`                                                     | 手套资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `shoe`       | `string`                                                     | 鞋子资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `frontHair`  | `string`                                                     | 前发资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |
| `behindHair` | `string`                                                     | 后发资源的 GUID(MWEditor 左侧资源列表里面的 GUID) |

#### Returns

`void`

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.Gameplay.IHumanoidV2.md).[setSuit](../interfaces/Gameplay.Gameplay.IHumanoidV2.md#setsuit)
