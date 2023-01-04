[Gameplay](../modules/Gameplay.Gameplay.md) / Equipment

# Equipment <Badge type="tip" text="Class" />

**`Description`**

装备对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Equipment`**

## Table of contents

| Properties |
| :-----|
| **[onDiscardEquipment](Gameplay.Equipment.md#ondiscardequipment)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\> <br> 丢弃装备事件|
| **[onHoldEquipment](Gameplay.Equipment.md#onholdequipment)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\> <br> 持有装备事件|
| **[onPickupEquipment](Gameplay.Equipment.md#onpickupequipment)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\> <br> 拾取装备事件|
| **[onUnholdEquipment](Gameplay.Equipment.md#onunholdequipment)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\> <br> 收起装备事件|

| Accessors |
| :-----|
| **[autoHoldEquipment](Gameplay.Equipment.md#autoholdequipment)**(): `boolean` <br> 自动持有装备|
| **[autoPickup](Gameplay.Equipment.md#autopickup)**(): `boolean` <br> 自动拾取|
| **[autoPlayPickupAnimation](Gameplay.Equipment.md#autoplaypickupanimation)**(): `boolean` <br> 自动播放拾取动画|
| **[discardAnimation](Gameplay.Equipment.md#discardanimation)**(): `string` <br> 丢弃动画|
| **[equipmentSlot](Gameplay.Equipment.md#equipmentslot)**(): `string` <br> 装备插槽|
| **[equipmentStatus](Gameplay.Equipment.md#equipmentstatus)**(): [`EquipmentStatus`](../enums/Gameplay.EquipmentStatus.md) <br> 装备状态|
| **[holdAnimation](Gameplay.Equipment.md#holdanimation)**(): `string` <br> 拿出动画|
| **[holdEquipmentStance](Gameplay.Equipment.md#holdequipmentstance)**(): `string` <br> 持有装备的姿态资源|
| **[pickupAnimation](Gameplay.Equipment.md#pickupanimation)**(): `string` <br> 拾取动画|
| **[pickupTrigger](Gameplay.Equipment.md#pickuptrigger)**(): `string` <br> 获取绑定触发器的guid|
| **[unholdAnimation](Gameplay.Equipment.md#unholdanimation)**(): `string` <br> 收起动画|
| **[unholdSlot](Gameplay.Equipment.md#unholdslot)**(): `string` <br> 携带插槽|

| Methods |
| :-----|
| **[discardEquipment](Gameplay.Equipment.md#discardequipment)**(): `void` <br> 丢弃装备|
| **[getCurrentOwner](Gameplay.Equipment.md#getcurrentowner)**(): [`CharacterBase`](Gameplay.CharacterBase.md) <br> 获取装备的所有者|
| **[holdEquipment](Gameplay.Equipment.md#holdequipment)**(): `void` <br> 持有装备|
| **[pickupEquipment](Gameplay.Equipment.md#pickupequipment)**([`CharacterBase`](Gameplay.CharacterBase.md), `boolean`): `void` <br> 拾取装备|
| **[unholdEquipment](Gameplay.Equipment.md#unholdequipment)**(): `void` <br> 收起装备|

## Properties

### onDiscardEquipment

• **onDiscardEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

丢弃装备事件

___

### onHoldEquipment

• **onHoldEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

持有装备事件

___

### onPickupEquipment

• **onPickupEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

拾取装备事件

___

### onUnholdEquipment

• **onUnholdEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

收起装备事件

## Accessors

### autoHoldEquipment

• `get` **autoHoldEquipment**(): `boolean`

**`Description`**

自动持有装备

#### Returns

`boolean`

• `set` **autoHoldEquipment**(`bValue`): `void`

**`Description`**

自动持有装备

#### Parameters

| Name | Type |
| :------ | :------ |
| `bValue` | `boolean` |

#### Returns

`void`

___

### autoPickup

• `get` **autoPickup**(): `boolean`

**`Description`**

自动拾取

#### Returns

`boolean`

• `set` **autoPickup**(`bValue`): `void`

**`Description`**

自动拾取

#### Parameters

| Name | Type |
| :------ | :------ |
| `bValue` | `boolean` |

#### Returns

`void`

___

### autoPlayPickupAnimation

• `get` **autoPlayPickupAnimation**(): `boolean`

**`Description`**

自动播放拾取动画

#### Returns

`boolean`

• `set` **autoPlayPickupAnimation**(`bValue`): `void`

**`Description`**

自动播放拾取动画

#### Parameters

| Name | Type |
| :------ | :------ |
| `bValue` | `boolean` |

#### Returns

`void`

___

### discardAnimation

• `get` **discardAnimation**(): `string`

**`Description`**

丢弃动画

#### Returns

`string`

• `set` **discardAnimation**(`sValue`): `void`

**`Description`**

丢弃动画

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`

___

### equipmentSlot

• `get` **equipmentSlot**(): `string`

**`Description`**

装备插槽

#### Returns

`string`

• `set` **equipmentSlot**(`sValue`): `void`

**`Description`**

设置装备插槽

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`

___

### equipmentStatus

• `get` **equipmentStatus**(): [`EquipmentStatus`](../enums/Gameplay.EquipmentStatus.md)

**`Description`**

装备状态

#### Returns

[`EquipmentStatus`](../enums/Gameplay.EquipmentStatus.md)


### holdAnimation

• `get` **holdAnimation**(): `string`

**`Description`**

拿出动画

#### Returns

`string`

• `set` **holdAnimation**(`sValue`): `void`

**`Description`**

拿出动画

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`

___

### holdEquipmentStance

• `get` **holdEquipmentStance**(): `string`

**`Description`**

持有装备的姿态资源

#### Returns

`string`

• `set` **holdEquipmentStance**(`sValue`): `void`

**`Description`**

持有装备的姿态资源

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`


### pickupAnimation

• `get` **pickupAnimation**(): `string`

**`Description`**

拾取动画

#### Returns

`string`

• `set` **pickupAnimation**(`sValue`): `void`

**`Description`**

拾取动画

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`

___

### pickupTrigger

• `get` **pickupTrigger**(): `string`

**`Description`**

获取绑定触发器的guid

#### Returns

`string`

• `set` **pickupTrigger**(`TriggerGuid`): `void`

**`Description`**

触发器

#### Parameters

| Name | Type |
| :------ | :------ |
| `TriggerGuid` | `string` |

#### Returns

`void`


### unholdAnimation

• `get` **unholdAnimation**(): `string`

**`Description`**

收起动画

#### Returns

`string`

• `set` **unholdAnimation**(`sValue`): `void`

**`Description`**

收起动画

#### Parameters

| Name | Type |
| :------ | :------ |
| `sValue` | `string` |

#### Returns

`void`

___

### unholdSlot

• `get` **unholdSlot**(): `string`

**`Description`**

携带插槽

#### Returns

`string`

• `set` **unholdSlot**(`slotName`): `void`

**`Description`**

设置携带插槽

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotName` | `string` |

#### Returns

`void`


## Methods

### discardEquipment

▸ **discardEquipment**(): `void`

**`Description`**

丢弃装备

**`Effect`**

自动同步

#### Returns

`void`


### getCurrentOwner

▸ **getCurrentOwner**(): [`CharacterBase`](Gameplay.CharacterBase.md)

**`Description`**

获取装备的所有者

**`Effect`**

调用端生效

#### Returns

[`CharacterBase`](Gameplay.CharacterBase.md)

装备所有角色


### holdEquipment

▸ **holdEquipment**(): `void`

**`Description`**

持有装备

**`Effect`**

自动同步

#### Returns

`void`


### pickupEquipment

▸ **pickupEquipment**(`character`, `autoHold`): `void`

**`Description`**

拾取装备

**`Effect`**

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |
| `autoHold` | `boolean` | 自动拿起 |

#### Returns

`void`


### unholdEquipment

▸ **unholdEquipment**(): `void`

**`Description`**

收起装备

**`Effect`**

自动同步

#### Returns

`void`
