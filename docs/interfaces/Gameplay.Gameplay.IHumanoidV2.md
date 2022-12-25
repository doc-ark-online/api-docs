[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / IHumanoidV2

# Interface: IHumanoidV2

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).IHumanoidV2

**`Description`**

人形对象 V2 插槽和外形加载

**`Author`**

guang.deng

## Implemented by

- [`HumanoidV2`](../classes/Gameplay.Gameplay.HumanoidV2.md)

## Table of contents

### Methods

- [appearanceSync](Gameplay.Gameplay.IHumanoidV2.md#appearancesync)
- [attach](Gameplay.Gameplay.IHumanoidV2.md#attach)
- [changeSomatotype](Gameplay.Gameplay.IHumanoidV2.md#changesomatotype)
- [clearAppearance](Gameplay.Gameplay.IHumanoidV2.md#clearappearance)
- [detach](Gameplay.Gameplay.IHumanoidV2.md#detach)
- [getGoods](Gameplay.Gameplay.IHumanoidV2.md#getgoods)
- [getSlotWorldPosition](Gameplay.Gameplay.IHumanoidV2.md#getslotworldposition)
- [getSomatotype](Gameplay.Gameplay.IHumanoidV2.md#getsomatotype)
- [setAppearanceData](Gameplay.Gameplay.IHumanoidV2.md#setappearancedata)
- [setSlot](Gameplay.Gameplay.IHumanoidV2.md#setslot)
- [setSomatotype](Gameplay.Gameplay.IHumanoidV2.md#setsomatotype)
- [setSuit](Gameplay.Gameplay.IHumanoidV2.md#setsuit)

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

#### Defined in

Gameplay/index.d.ts:2893

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

| Name         | Type                                                 | Description                           |
| :----------- | :--------------------------------------------------- | :------------------------------------ |
| `gameObject` | `GameObject`                                         | usage: 被附着的物体                   |
| `slotName`   | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage: 插槽名字，被附着到指定的插槽名 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2839

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

#### Defined in

Gameplay/index.d.ts:2862

---

### clearAppearance

▸ **clearAppearance**(): `void`

**`Description`**

清空角色形象数据

**`Effect`**

双端

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2887

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

| Name         | Type         | Description           |
| :----------- | :----------- | :-------------------- |
| `gameObject` | `GameObject` | usage:物体 GameObject |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2846

---

### getGoods

▸ **getGoods**(`guid`): [`string`, `string`][]

**`Description`**

获取插槽文件里面的数据，Array<[string, string]>：Array<[物品资源 Id, 插入的插槽名]>

**`Effect`**

双端

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `guid` | `string` | usage:Slot Guid |

#### Returns

[`string`, `string`][]

插槽数据中物品 Guid 数组

#### Defined in

Gameplay/index.d.ts:2831

---

### getSlotWorldPosition

▸ **getSlotWorldPosition**(`slotName`): [`Vector`](../classes/Type.Type.Vector.md)

**`Description`**

获取 Slot 世界坐标位置,V2 物品预览的插槽使用

**`Effect`**

双端

#### Parameters

| Name       | Type                                                 | Description    |
| :--------- | :--------------------------------------------------- | :------------- |
| `slotName` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage:插槽名字 |

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)

坐标位置

#### Defined in

Gameplay/index.d.ts:2853

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

#### Defined in

Gameplay/index.d.ts:2868

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

| Name        | Type                                                             | Description                       |
| :---------- | :--------------------------------------------------------------- | :-------------------------------- |
| `guidArray` | `string`[]                                                       | usage:换装数据 GuidArray          |
| `callback`  | [`EmptyCallback`](../modules/Gameplay.Gameplay.md#emptycallback) | usage:加载完成的回调 default:null |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2882

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

#### Defined in

Gameplay/index.d.ts:2824

---

### setSomatotype

▸ **setSomatotype**(`somatotype`): `void`

**`Description`**

设置形象(如果没有预加载对应的 GUID，则是异步的,监听 onLoadAppearanceDataAllCompleted 获取加载完成回调)

**`Effect`**

客户端

#### Parameters

| Name         | Type                                                         | Description    |
| :----------- | :----------------------------------------------------------- | :------------- |
| `somatotype` | [`SomatotypeV2`](../enums/Gameplay.Gameplay.SomatotypeV2.md) | usage:角色类型 |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:2874

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

#### Defined in

Gameplay/index.d.ts:2907
