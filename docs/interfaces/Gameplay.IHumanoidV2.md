[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2

# IHumanoidV2 <Badge type="tip" text="Interface" /> <Score text="IHumanoidV2" />

人形对象V2插槽和外形加载

**`Groups`**

AVATAR

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.HumanoidV2.md)

## Table of contents

| Methods |
| :-----|
| **[appearanceSync](Gameplay.IHumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端|
| **[attach](Gameplay.IHumanoidV2.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到V2人物角色的指定插槽|
| **[changeSomatotype](Gameplay.IHumanoidV2.md#changesomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `boolean`): `void` <br> 切换体型|
| **[clearAppearance](Gameplay.IHumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据|
| **[detach](Gameplay.IHumanoidV2.md#detach)**(`GameObject`): `void` <br> 将物体从人物身上附着的物品预览插槽中分离|
| **[getGoods](Gameplay.IHumanoidV2.md#getgoods)**(`string`): [`string`, `string`][] <br> 获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源Id, 插入的插槽名]>|
| **[getSlotWorldPosition](Gameplay.IHumanoidV2.md#getslotworldposition)**([`SlotType`](../enums/Gameplay.SlotType.md)): [`Vector`](../classes/Type.Vector.md) <br> 获取Slot世界坐标位置,V2物品预览的插槽使用|
| **[getSomatotype](Gameplay.IHumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <br> 获取当前的体型类型|
| **[setAppearanceData](Gameplay.IHumanoidV2.md#setappearancedata)**(`string`[], [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过GUID加载数据另存为角色数据|
| **[setSlot](Gameplay.IHumanoidV2.md#setslot)**(`string`, `boolean`): `void` <br> 通过插槽GUID加载数据|
| **[setSomatotype](Gameplay.IHumanoidV2.md#setsomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)): `void` <br> 设置形象(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)|
| **[setSuit](Gameplay.IHumanoidV2.md#setsuit)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `string`, `string`, `string`, `string`, `string`, `string`, `string`): `void` <br> 加载一套角色数据|

## Methods

### appearanceSync <Score text="appearanceSync" /> 

• **appearanceSync**(): `void` <Badge type="tip" text="other" />

把本地角色形象数据同步到多端


::: warning Precautions

不要频繁调用，等本地角色编辑完成后再使用

:::


___

### attach <Score text="attach" /> 

• **attach**(`gameObject`, `slotName`): `void` <Badge type="tip" text="other" />

将物体附着到V2人物角色的指定插槽


::: warning Precautions

1.只适用于V2角色，人形对象

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` |  被附着的物体 |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) |  插槽名字，被附着到指定的插槽名 |


___

### changeSomatotype <Score text="changeSomatotype" /> 

• **changeSomatotype**(`value`, `sync`): `void` <Badge type="tip" text="other" />

切换体型

::: warning Precautions

当 sync = true 对象是单端对象，调用仅本地客户端有效

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) |  体型类型枚举 SomatotypeV2 |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### clearAppearance <Score text="clearAppearance" /> 

• **clearAppearance**(): `void` <Badge type="tip" text="other" />

清空角色形象数据

调用端自动广播


___

### detach <Score text="detach" /> 

• **detach**(`gameObject`): `void` <Badge type="tip" text="other" />

将物体从人物身上附着的物品预览插槽中分离


::: warning Precautions

带同步

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体GameObject |


___

### getGoods <Score text="getGoods" /> 

• **getGoods**(`GUID`): [`string`, `string`][] <Badge type="tip" text="other" />

获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源Id, 插入的插槽名]>


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |

#### Returns

[`string`, `string`][]

插槽数据中物品GUID数组

___

### getSlotWorldPosition <Score text="getSlotWorldPosition" /> 

• **getSlotWorldPosition**(`slotName`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="other" />

获取Slot世界坐标位置,V2物品预览的插槽使用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名字 |

#### Returns

[`Vector`](../classes/Type.Vector.md)

坐标位置

___

### getSomatotype <Score text="getSomatotype" /> 

• **getSomatotype**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <Badge type="tip" text="other" />

获取当前的体型类型


#### Returns

[`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)

体型类型 SomatotypeV1

___

### setAppearanceData <Score text="setAppearanceData" /> 

• **setAppearanceData**(`GUIDArray`, `callback`): `void` <Badge type="tip" text="other" />

通过GUID加载数据另存为角色数据

调用端自动广播

::: warning Precautions

客户端：如果角色GUID没有被预加载，则是异步的，需要再callback里再触发下一次加载 。双端：接口数据是叠加的；只有当前端生效，要同步到多端，请调用同步接口；使用前可以使用重置接口清空之前的数据

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUIDArray` | `string`[] | 换装数据GUIDArray |
| `callback` | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |


___

### setSlot <Score text="setSlot" /> 

• **setSlot**(`GUID`, `sync`): `void` <Badge type="tip" text="other" />

通过插槽GUID加载数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |
| `sync` | `boolean` | sync = false:本地客户端有效; sync = true :调用时同步到服务端，广播给所有客户端 |


___

### setSomatotype <Score text="setSomatotype" /> 

• **setSomatotype**(`somatotype`): `void` <Badge type="tip" text="other" />

设置形象(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) | 角色类型 |


___

### setSuit <Score text="setSuit" /> 

• **setSuit**(`somatotype`, `head`, `upperCloth`, `lowerCloth`, `gloves`, `shoe`, `frontHair`, `behindHair`): `void` <Badge type="tip" text="other" />

加载一套角色数据


::: warning Precautions

如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调

:::

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

