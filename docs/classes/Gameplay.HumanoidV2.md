[Gameplay](../modules/Gameplay.Gameplay.md) / HumanoidV2

# HumanoidV2 <Badge type="tip" text="Class" /> 

**`Description`**

人形对象V2接口

## Hierarchy

- [`SomatotypeBase`](Gameplay.SomatotypeBase.md)

  ↳ **`HumanoidV2`**

## Implements

- [`IHumanoidV2MaterialStyle`](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md)
- [`IHumanoidV2`](../interfaces/Gameplay.IHumanoidV2.md)

## Table of contents

| Properties |
| :-----|
| **[behindHair](Gameplay.HumanoidV2.md#behindhair)**: [`HumanoidV2BehindHairPart`](Gameplay.HumanoidV2BehindHairPart.md) <br> 后发|
| **[frontHair](Gameplay.HumanoidV2.md#fronthair)**: [`HumanoidV2FrontHairPart`](Gameplay.HumanoidV2FrontHairPart.md) <br> 前发|
| **[gloves](Gameplay.HumanoidV2.md#gloves)**: [`HumanoidV2GlovesPart`](Gameplay.HumanoidV2GlovesPart.md) <br> 手套|
| **[head](Gameplay.HumanoidV2.md#head)**: [`HumanoidV2HeadPart`](Gameplay.HumanoidV2HeadPart.md) <br> 头|
| **[lowerCloth](Gameplay.HumanoidV2.md#lowercloth)**: [`HumanoidV2LowerClothPart`](Gameplay.HumanoidV2LowerClothPart.md) <br> 下衣|
| **[shape](Gameplay.HumanoidV2.md#shape)**: [`HumanoidV2Shape`](Gameplay.HumanoidV2Shape.md) <br> 体型|
| **[shoe](Gameplay.HumanoidV2.md#shoe)**: [`HumanoidV2ShoePart`](Gameplay.HumanoidV2ShoePart.md) <br> 鞋子|
| **[upperCloth](Gameplay.HumanoidV2.md#uppercloth)**: [`HumanoidV2UpperClothPart`](Gameplay.HumanoidV2UpperClothPart.md) <br> 上衣|


::: details 点击查看继承
| Properties |
| :-----|
| **[enableOutline](Gameplay.SomatotypeBase.md#enableoutline)**: `boolean` <br> 是否启动遮挡时角色描边|
| **[postProcessObj](Gameplay.SomatotypeBase.md#postprocessobj)**: [`PostProcess`](Gameplay.PostProcess.md) <br> 后处理对象|
:::


| Methods |
| :-----|
| **[appearanceSync](Gameplay.HumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端|
| **[attach](Gameplay.HumanoidV2.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到V2人物角色的指定插槽|
| **[changeSomatotype](Gameplay.HumanoidV2.md#changesomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `boolean`): `void` <br> 切换角色主Mesh|
| **[clearAppearance](Gameplay.HumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据|
| **[detach](Gameplay.HumanoidV2.md#detach)**(`GameObject`): `void` <br> V2的将物体从人物身上附着的物品预览插槽中分离|
| **[getBodyTattooColor](Gameplay.HumanoidV2.md#getbodytattoocolor)**(`number`): [`LinearColor`](Type.LinearColor.md) <br> 获取纹身颜色|
| **[getBodyTattooPositionX](Gameplay.HumanoidV2.md#getbodytattoopositionx)**(`number`): `number` <br> 获取纹身位置左右偏移|
| **[getBodyTattooPositionY](Gameplay.HumanoidV2.md#getbodytattoopositiony)**(`number`): `number` <br> 获取身体纹身位置上下位置|
| **[getBodyTattooRotation](Gameplay.HumanoidV2.md#getbodytattoorotation)**(`number`): `number` <br> 获取纹身旋转值|
| **[getBodyTattooType](Gameplay.HumanoidV2.md#getbodytattootype)**(`number`): `string` <br> 获取纹身贴图 GUID|
| **[getBodyTattooZoom](Gameplay.HumanoidV2.md#getbodytattoozoom)**(`number`): `number` <br> 获取身体纹身位置缩放|
| **[getGoods](Gameplay.HumanoidV2.md#getgoods)**(`string`): [`string`, `string`][] <br> 通过插槽GUID加载数据|
| **[getSkinColor](Gameplay.HumanoidV2.md#getskincolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 设置皮肤颜色|
| **[getSkinTexture](Gameplay.HumanoidV2.md#getskintexture)**(): `string` <br> 获取皮肤贴图|
| **[getSlotWorldPosition](Gameplay.HumanoidV2.md#getslotworldposition)**([`SlotType`](../enums/Gameplay.SlotType.md)): [`Vector`](Type.Vector.md) <br> 获取Slot世界坐标位置,V2物品预览的插槽使用|
| **[getSomatotype](Gameplay.HumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <br> 获取当前的主Mesh|
| **[setAppearanceData](Gameplay.HumanoidV2.md#setappearancedata)**(`string`[], [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过GUID加载数据另存为角色数据|
| **[setBodyTattooColor](Gameplay.HumanoidV2.md#setbodytattoocolor)**(`number`, [`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 身体纹身颜色|
| **[setBodyTattooPositionX](Gameplay.HumanoidV2.md#setbodytattoopositionx)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置左右偏移|
| **[setBodyTattooPositionY](Gameplay.HumanoidV2.md#setbodytattoopositiony)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置上下位置|
| **[setBodyTattooRotation](Gameplay.HumanoidV2.md#setbodytattoorotation)**(`number`, `number`, `boolean`): `void` <br> 身体纹旋转|
| **[setBodyTattooType](Gameplay.HumanoidV2.md#setbodytattootype)**(`number`, `string`, `boolean`): `void` <br> 身体纹身种类|
| **[setBodyTattooZoom](Gameplay.HumanoidV2.md#setbodytattoozoom)**(`number`, `number`, `boolean`): `void` <br> 身体纹身位置缩放|
| **[setSkinColor](Gameplay.HumanoidV2.md#setskincolor)**([`LinearColor`](Type.LinearColor.md), `boolean`): `void` <br> 设置皮肤颜色|
| **[setSkinTexture](Gameplay.HumanoidV2.md#setskintexture)**(`string`, `boolean`): `void` <br> 设置皮肤贴图|
| **[setSlot](Gameplay.HumanoidV2.md#setslot)**(`string`, `boolean`): `void` <br> 通过插槽GUID加载数据|
| **[setSomatotype](Gameplay.HumanoidV2.md#setsomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)): `void` <br> 设置形象(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)|
| **[setSuit](Gameplay.HumanoidV2.md#setsuit)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `string`, `string`, `string`, `string`, `string`, `string`, `string`): `void` <br> 加载一套角色数据|


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

### behindHair  

• **behindHair**: [`HumanoidV2BehindHairPart`](Gameplay.HumanoidV2BehindHairPart.md)

**`Description`**

后发


### frontHair  

• **frontHair**: [`HumanoidV2FrontHairPart`](Gameplay.HumanoidV2FrontHairPart.md)

**`Description`**

前发

___

### gloves  

• **gloves**: [`HumanoidV2GlovesPart`](Gameplay.HumanoidV2GlovesPart.md)

**`Description`**

手套

___

### head  

• **head**: [`HumanoidV2HeadPart`](Gameplay.HumanoidV2HeadPart.md)

**`Description`**

头

___

### lowerCloth  

• **lowerCloth**: [`HumanoidV2LowerClothPart`](Gameplay.HumanoidV2LowerClothPart.md)

**`Description`**

下衣


### shape  

• **shape**: [`HumanoidV2Shape`](Gameplay.HumanoidV2Shape.md)

**`Description`**

体型

___

### shoe  

• **shoe**: [`HumanoidV2ShoePart`](Gameplay.HumanoidV2ShoePart.md)

**`Description`**

鞋子

___

### upperCloth  

• **upperCloth**: [`HumanoidV2UpperClothPart`](Gameplay.HumanoidV2UpperClothPart.md)

**`Description`**

上衣

## Methods

### appearanceSync  

▸ **appearanceSync**(): `void` <Badge type="tip" text="other" />

**`Description`**

把本地角色形象数据同步到多端


::: warning Precautions

不要频繁调用，等本地角色编辑完成后再使用

:::


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[appearanceSync](../interfaces/Gameplay.IHumanoidV2.md#appearancesync)

___

### attach  

▸ **attach**(`gameObject`, `slotName`): `void` <Badge type="tip" text="other" />

**`Description`**

将物体附着到V2人物角色的指定插槽

双端都可以使用

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

### changeSomatotype  

▸ **changeSomatotype**(`value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

切换角色主Mesh

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) |  主Mesh类型："None"不能作为参数 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[changeSomatotype](../interfaces/Gameplay.IHumanoidV2.md#changesomatotype)

___

### clearAppearance  

▸ **clearAppearance**(): `void` <Badge type="tip" text="other" />

**`Description`**

清空角色形象数据

双端


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[clearAppearance](../interfaces/Gameplay.IHumanoidV2.md#clearappearance)

___

### detach  

▸ **detach**(`gameObject`): `void` <Badge type="tip" text="other" />

**`Description`**

V2的将物体从人物身上附着的物品预览插槽中分离

双端

::: warning Precautions

带同步

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体GameObject |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[detach](../interfaces/Gameplay.IHumanoidV2.md#detach)


### getBodyTattooColor  

▸ **getBodyTattooColor**(`index`): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

获取纹身颜色

客户端生效

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

### getBodyTattooPositionX  

▸ **getBodyTattooPositionX**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取纹身位置左右偏移

客户端生效

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

### getBodyTattooPositionY  

▸ **getBodyTattooPositionY**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取身体纹身位置上下位置

客户端生效

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

### getBodyTattooRotation  

▸ **getBodyTattooRotation**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取纹身旋转值

客户端生效

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

### getBodyTattooType  

▸ **getBodyTattooType**(`index`): `string` <Badge type="tip" text="other" />

**`Description`**

获取纹身贴图 GUID

sync = false:客户端;
sync = true:双端

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

### getBodyTattooZoom  

▸ **getBodyTattooZoom**(`index`): `number` <Badge type="tip" text="other" />

**`Description`**

获取身体纹身位置缩放

客户端生效

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

### getGoods  

▸ **getGoods**(`GUID`): [`string`, `string`][] <Badge type="tip" text="other" />

**`Description`**

通过插槽GUID加载数据

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |

#### Returns

[`string`, `string`][]

插槽数据中物品GUID Slot数组

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[getGoods](../interfaces/Gameplay.IHumanoidV2.md#getgoods)

___

### getSkinColor  

▸ **getSkinColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

**`Description`**

设置皮肤颜色

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

颜色

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getSkinColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getskincolor)

___

### getSkinTexture  

▸ **getSkinTexture**(): `string` <Badge type="tip" text="other" />

**`Description`**

获取皮肤贴图

客户端生效

#### Returns

`string`

皮肤贴图GUID

#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[getSkinTexture](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#getskintexture)

___

### getSlotWorldPosition  

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取Slot世界坐标位置,V2物品预览的插槽使用

双端

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

### getSomatotype  

▸ **getSomatotype**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <Badge type="tip" text="other" />

**`Description`**

获取当前的主Mesh

双端

#### Returns

[`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)

主Mesh

#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[getSomatotype](../interfaces/Gameplay.IHumanoidV2.md#getsomatotype)

___

### setAppearanceData  

▸ **setAppearanceData**(`GUIDArray`, `callback?`): `void` <Badge type="tip" text="other" />

**`Description`**

通过GUID加载数据另存为角色数据

双端

::: warning Precautions

客户端：如果角色GUID没有被预加载，则是异步的，需要再callback里再触发下一次加载 。双端：接口数据是叠加的；只有当前端生效，要同步到多端，请调用同步接口；使用前可以使用重置接口清空之前的数据

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUIDArray` | `string`[] | 换装数据GUIDArray |
| `callback?` | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setAppearanceData](../interfaces/Gameplay.IHumanoidV2.md#setappearancedata)

___

### setBodyTattooColor  

▸ **setBodyTattooColor**(`index`, `color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` |  纹身index |
| `color` | [`LinearColor`](Type.LinearColor.md) |  颜色值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoocolor)

___

### setBodyTattooPositionX  

▸ **setBodyTattooPositionX**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置左右偏移

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionX](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositionx)

___

### setBodyTattooPositionY  

▸ **setBodyTattooPositionY**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置上下位置

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 偏移值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooPositionY](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoopositiony)

___

### setBodyTattooRotation  

▸ **setBodyTattooRotation**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹旋转

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` | 旋转值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooRotation](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoorotation)

___

### setBodyTattooType  

▸ **setBodyTattooType**(`index`, `GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身种类

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身index |
| `GUID` | `string` | 类型贴图GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooType](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattootype)

___

### setBodyTattooZoom  

▸ **setBodyTattooZoom**(`index`, `value`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

身体纹身位置缩放

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 纹身Index |
| `value` | `number` |  缩放值 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setBodyTattooZoom](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setbodytattoozoom)


### setSkinColor  

▸ **setSkinColor**(`color`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置皮肤颜色

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  颜色 |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setSkinColor](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setskincolor)

___

### setSkinTexture  

▸ **setSkinTexture**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

设置皮肤贴图

sync = false:客户端;
sync = true:双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | 模型GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2MaterialStyle](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md).[setSkinTexture](../interfaces/Gameplay.IHumanoidV2MaterialStyle.md#setskintexture)

___

### setSlot  

▸ **setSlot**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

**`Description`**

通过插槽GUID加载数据

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |
| `sync` | `boolean` | true 同步; false 不同步 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSlot](../interfaces/Gameplay.IHumanoidV2.md#setslot)

___

### setSomatotype  

▸ **setSomatotype**(`somatotype`): `void` <Badge type="tip" text="other" />

**`Description`**

设置形象(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)

客户端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) | 角色类型 |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSomatotype](../interfaces/Gameplay.IHumanoidV2.md#setsomatotype)

___

### setSuit  

▸ **setSuit**(`somatotype`, `head`, `upperCloth`, `lowerCloth`, `gloves`, `shoe`, `frontHair`, `behindHair`): `void` <Badge type="tip" text="other" />

**`Description`**

加载一套角色数据


::: warning Precautions

如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) |  主Mesh类型："None"不能作为参数 |
| `head` | `string` |  头部资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `upperCloth` | `string` |  上衣资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `lowerCloth` | `string` |  下衣资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `gloves` | `string` |  手套资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `shoe` | `string` |  鞋子资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `frontHair` | `string` |  前发资源的GUID(MWEditor左侧资源列表里面的GUID) |
| `behindHair` | `string` |  后发资源的GUID(MWEditor左侧资源列表里面的GUID) |


#### Implementation of

[IHumanoidV2](../interfaces/Gameplay.IHumanoidV2.md).[setSuit](../interfaces/Gameplay.IHumanoidV2.md#setsuit)
