[Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2

# IHumanoidV2 <Badge type="tip" text="Interface" />

**`Description`**

人形对象 V2 插槽和外形加载

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

| Methods                                                                                                                                                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[appearanceSync](Gameplay.Gameplay.IHumanoidV2.md#appearancesync)**(): `void` <br> 把本地角色形象数据同步到多端                                                                                                                                     |
| **[attach](Gameplay.Gameplay.IHumanoidV2.md#attach)**(`GameObject`, [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): `void` <br> 将物体附着到 V2 人物角色的指定插槽                                                                             |
| **[changeSomatotype](Gameplay.Gameplay.IHumanoidV2.md#changesomatotype)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md), `boolean`): `void` <br> 切换角色主 Mesh                                                                       |
| **[clearAppearance](Gameplay.Gameplay.IHumanoidV2.md#clearappearance)**(): `void` <br> 清空角色形象数据                                                                                                                                               |
| **[detach](Gameplay.Gameplay.IHumanoidV2.md#detach)**(`GameObject`): `void` <br> 将物体从人物身上附着的物品预览插槽中分离                                                                                                                             |
| **[getGoods](Gameplay.Gameplay.IHumanoidV2.md#getgoods)**(`string`): [`string`, `string`][] <br> 获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源 Id, 插入的插槽名]>                                                                  |
| **[getSlotWorldPosition](Gameplay.Gameplay.IHumanoidV2.md#getslotworldposition)**([`SlotType`](../enums/Gameplay.Gameplay.SlotType.md)): [`Vector`](../classes/Type.Type.Vector.md) <br> 获取 Slot 世界坐标位置,V2 物品预览的插槽使用                 |
| **[getSomatotype](Gameplay.Gameplay.IHumanoidV2.md#getsomatotype)**(): [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) <br> 获取当前的主 Mesh                                                                                            |
| **[setAppearanceData](Gameplay.Gameplay.IHumanoidV2.md#setappearancedata)**(`string`[], [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback)): `void` <br> 通过 Guid 加载数据另存为角色数据                                               |
| **[setSlot](Gameplay.Gameplay.IHumanoidV2.md#setslot)**(`string`, `boolean`): `void` <br> 通过插槽 Guid 加载数据                                                                                                                                      |
| **[setSomatotype](Gameplay.Gameplay.IHumanoidV2.md#setsomatotype)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md)): `void` <br> 设置形象(如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调) |
| **[setSuit](Gameplay.Gameplay.IHumanoidV2.md#setsuit)**([`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md), `string`, `string`, `string`, `string`, `string`, `string`, `string`): `void` <br> 加载一套角色数据                             |

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

---

### clearAppearance

▸ **clearAppearance**(): `void`

**`Description`**

清空角色形象数据

**`Effect`**

双端

#### Returns

`void`

---

### detach

▸ **detach**(`gameObject`): `void`

**`Description`**

将物体从人物身上附着的物品预览插槽中分离

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

---

### getGoods

▸ **getGoods**(`guid`): [`string`, `string`][]

**`Description`**

获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源 Id, 插入的插槽名]>

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `guid` | `string` | Slot Guid   |

#### Returns

[`string`, `string`][]

插槽数据中物品 Guid 数组

---

### getSlotWorldPosition

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](../classes/Type.Type.Vector.md)

**`Description`**

获取 Slot 世界坐标位置,V2 物品预览的插槽使用

**`Effect`**

双端

#### Parameters

| Name       | Type                                                 | Description |
| :--------- | :--------------------------------------------------- | :---------- |
| `slotName` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | 插槽名字    |

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)

坐标位置

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

---

### setAppearanceData

▸ **setAppearanceData**(`guidArray`, `callback`): `void`

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
| `callback`  | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | 加载完成的回调 default:null |

#### Returns

`void`

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
