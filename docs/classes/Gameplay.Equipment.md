[Gameplay](../modules/Gameplay.Gameplay.md) / Equipment

# Equipment <Badge type="tip" text="Class" /> <Score text="Equipment" />

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
| **[pickupTrigger](Gameplay.Equipment.md#pickuptrigger)**(): `string` <br> 获取绑定触发器的GUID|
| **[unholdAnimation](Gameplay.Equipment.md#unholdanimation)**(): `string` <br> 收起动画|
| **[unholdSlot](Gameplay.Equipment.md#unholdslot)**(): `string` <br> 携带插槽|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[visible](Gameplay.GameObject.md#visible)**(): `boolean` <br> since:v0.20.0 reason:api重构 replacement:getVisibility()|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[discardEquipment](Gameplay.Equipment.md#discardequipment)**(): `void` <br> 丢弃装备|
| **[getCurrentOwner](Gameplay.Equipment.md#getcurrentowner)**(): [`CharacterBase`](Gameplay.CharacterBase.md) <br> 获取装备的所有者|
| **[holdEquipment](Gameplay.Equipment.md#holdequipment)**(): `void` <br> 持有装备|
| **[pickupEquipment](Gameplay.Equipment.md#pickupequipment)**([`CharacterBase`](Gameplay.CharacterBase.md), `boolean`): `void` <br> 拾取装备|
| **[unholdEquipment](Gameplay.Equipment.md#unholdequipment)**(): `void` <br> 收起装备|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`boolean`): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**((...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`boolean`, `boolean`, [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`boolean`, [`Vector`](Type.Vector.md), [`Vector`](Type.Vector.md), `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`string`): `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`string`): `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`string`): `Script` <br> 获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `Script`[] <br> 获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**([`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**([`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**([`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**([`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**([`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**([`PropertyStatus`](../enums/Type.PropertyStatus.md), `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**([`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawnGameObject](Gameplay.GameObject.md#asyncspawngameobject)**(`string`, `boolean`): `Promise`<`GameObject`\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`string`): `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawnGameObject](Gameplay.GameObject.md#spawngameobject)**(`string`, `boolean`): `GameObject` <br> 构造一个 GameObject|
:::


## Properties

### onDiscardEquipment <Score text="onDiscardEquipment" /> 

• **onDiscardEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

丢弃装备事件

___

### onHoldEquipment <Score text="onHoldEquipment" /> 

• **onHoldEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

持有装备事件

___

### onPickupEquipment <Score text="onPickupEquipment" /> 

• **onPickupEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

拾取装备事件

___

### onUnholdEquipment <Score text="onUnholdEquipment" /> 

• **onUnholdEquipment**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`EquipOwner`: `$Nullable`<`MWActor`\>) => `void`\>

**`Description`**

收起装备事件

## Accessors

### autoHoldEquipment <Score text="autoHoldEquipment" /> 

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


___

### autoPickup <Score text="autoPickup" /> 

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


___

### autoPlayPickupAnimation <Score text="autoPlayPickupAnimation" /> 

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


___

### discardAnimation <Score text="discardAnimation" /> 

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


___

### equipmentSlot <Score text="equipmentSlot" /> 

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


___

### equipmentStatus <Score text="equipmentStatus" /> 

• `get` **equipmentStatus**(): [`EquipmentStatus`](../enums/Gameplay.EquipmentStatus.md)

**`Description`**

装备状态

#### Returns

[`EquipmentStatus`](../enums/Gameplay.EquipmentStatus.md)


### holdAnimation <Score text="holdAnimation" /> 

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


___

### holdEquipmentStance <Score text="holdEquipmentStance" /> 

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



### pickupAnimation <Score text="pickupAnimation" /> 

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


___

### pickupTrigger <Score text="pickupTrigger" /> 

• `get` **pickupTrigger**(): `string`

**`Description`**

获取绑定触发器的GUID

#### Returns

`string`

• `set` **pickupTrigger**(`TriggerGuid`): `void`

**`Description`**

触发器

#### Parameters

| Name | Type |
| :------ | :------ |
| `TriggerGuid` | `string` |



### unholdAnimation <Score text="unholdAnimation" /> 

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


___

### unholdSlot <Score text="unholdSlot" /> 

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



## Methods

### discardEquipment <Score text="discardEquipment" /> 

▸ **discardEquipment**(): `void` <Badge type="tip" text="other" />

**`Description`**

丢弃装备

自动同步



### getCurrentOwner <Score text="getCurrentOwner" /> 

▸ **getCurrentOwner**(): [`CharacterBase`](Gameplay.CharacterBase.md) <Badge type="tip" text="other" />

**`Description`**

获取装备的所有者


#### Returns

[`CharacterBase`](Gameplay.CharacterBase.md)

装备所有角色


### holdEquipment <Score text="holdEquipment" /> 

▸ **holdEquipment**(): `void` <Badge type="tip" text="other" />

**`Description`**

持有装备

自动同步



### pickupEquipment <Score text="pickupEquipment" /> 

▸ **pickupEquipment**(`character`, `autoHold`): `void` <Badge type="tip" text="other" />

**`Description`**

拾取装备

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |
| `autoHold` | `boolean` | 自动拿起 |



### unholdEquipment <Score text="unholdEquipment" /> 

▸ **unholdEquipment**(): `void` <Badge type="tip" text="other" />

**`Description`**

收起装备

自动同步

