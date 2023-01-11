[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2

# IHumanoidV2 <Badge type="tip" text="Interface" /> 

**`Description`**

人形对象V2插槽和外形加载

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.HumanoidV2.md)

## Table of contents

| Methods |
| :-----|
| **[appearanceSync](Gameplay.IHumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端|
| **[attach](Gameplay.IHumanoidV2.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.SlotType.md)): `void` <br> 将物体附着到V2人物角色的指定插槽|
| **[changeSomatotype](Gameplay.IHumanoidV2.md#changesomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `boolean`): `void` <br> 切换角色主Mesh|
| **[clearAppearance](Gameplay.IHumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据|
| **[detach](Gameplay.IHumanoidV2.md#detach)**(`GameObject`): `void` <br> 将物体从人物身上附着的物品预览插槽中分离|
| **[getGoods](Gameplay.IHumanoidV2.md#getgoods)**(`string`): [`string`, `string`][] <br> 获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源Id, 插入的插槽名]>|
| **[getSlotWorldPosition](Gameplay.IHumanoidV2.md#getslotworldposition)**([`SlotType`](../enums/Gameplay.SlotType.md)): [`Vector`](../classes/Type.Vector.md) <br> 获取Slot世界坐标位置,V2物品预览的插槽使用|
| **[getSomatotype](Gameplay.IHumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <br> 获取当前的主Mesh|
| **[setAppearanceData](Gameplay.IHumanoidV2.md#setappearancedata)**(`string`[], [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过GUID加载数据另存为角色数据|
| **[setSlot](Gameplay.IHumanoidV2.md#setslot)**(`string`, `boolean`): `void` <br> 通过插槽GUID加载数据|
| **[setSomatotype](Gameplay.IHumanoidV2.md#setsomatotype)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)): `void` <br> 设置形象(如果没有预加载对应的GUID，则是异步的,监听onLoadAppearanceDataAllCompleted获取加载完成回调)|
| **[setSuit](Gameplay.IHumanoidV2.md#setsuit)**([`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md), `string`, `string`, `string`, `string`, `string`, `string`, `string`): `void` <br> 加载一套角色数据|

## Methods

### appearanceSync  

▸ **appearanceSync**(): `void` <Badge type="tip" text="other" />

**`Description`**

把本地角色形象数据同步到多端


::: warning Precautions

不要频繁调用，等本地角色编辑完成后再使用

:::


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


___

### clearAppearance  

▸ **clearAppearance**(): `void` <Badge type="tip" text="other" />

**`Description`**

清空角色形象数据

双端


___

### detach  

▸ **detach**(`gameObject`): `void` <Badge type="tip" text="other" />

**`Description`**

将物体从人物身上附着的物品预览插槽中分离

双端

::: warning Precautions

带同步

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | `GameObject` | 物体GameObject |


___

### getGoods  

▸ **getGoods**(`GUID`): [`string`, `string`][] <Badge type="tip" text="other" />

**`Description`**

获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源Id, 插入的插槽名]>

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` | Slot GUID |

#### Returns

[`string`, `string`][]

插槽数据中物品GUID数组

___

### getSlotWorldPosition  

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取Slot世界坐标位置,V2物品预览的插槽使用

双端

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slotName` | [`SlotType`](../enums/Gameplay.SlotType.md) | 插槽名字 |

#### Returns

[`Vector`](../classes/Type.Vector.md)

坐标位置

___

### getSomatotype  

▸ **getSomatotype**(): [`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md) <Badge type="tip" text="other" />

**`Description`**

获取当前的主Mesh

双端

#### Returns

[`SomatotypeV2`](../enums/Gameplay.SomatotypeV2.md)

主Mesh

___

### setAppearanceData  

▸ **setAppearanceData**(`GUIDArray`, `callback`): `void` <Badge type="tip" text="other" />

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
| `callback` | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |


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

