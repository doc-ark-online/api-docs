[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponFireComponent

# HotWeaponFireComponent <Badge type="tip" text="Class" /> 

**`Description`**

热武器开火组件

## Table of contents

| Properties |
| :-----|
| **[onEndContinuousFireServer](Gameplay.HotWeaponFireComponent.md#onendcontinuousfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器完成一次连发射击周期时执行绑定函数|
| **[onEndFireClient](Gameplay.HotWeaponFireComponent.md#onendfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端停止开火时执行绑定函数|
| **[onEndFireServer](Gameplay.HotWeaponFireComponent.md#onendfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器停止开火时执行绑定函数|
| **[onStartFireClient](Gameplay.HotWeaponFireComponent.md#onstartfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始开火时执行绑定函数|
| **[onStartFireServer](Gameplay.HotWeaponFireComponent.md#onstartfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始开火时执行绑定函数|

| Accessors |
| :-----|
| **[animationGuid](Gameplay.HotWeaponFireComponent.md#animationguid)**(): `string` <br> 绑定的动画GUID|
| **[currentBulletSize](Gameplay.HotWeaponFireComponent.md#currentbulletsize)**(): `number` <br> 获取当前弹夹中子弹数量|
| **[currentClipSize](Gameplay.HotWeaponFireComponent.md#currentclipsize)**(): `number` <br> 获取当前弹夹容量|
| **[currentFireInterval](Gameplay.HotWeaponFireComponent.md#currentfireinterval)**(): `number` <br> 获取开火间隙|
| **[currentFireModel](Gameplay.HotWeaponFireComponent.md#currentfiremodel)**(): [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) <br> 获取当前的开火模式|
| **[currentMultipleShot](Gameplay.HotWeaponFireComponent.md#currentmultipleshot)**(): `number` <br> 获取一次开火发射的子弹数量|
| **[isFireOnScreenCenter](Gameplay.HotWeaponFireComponent.md#isfireonscreencenter)**(): `boolean` <br> 获取是否在屏幕中心开火|
| **[isFullAutoMode](Gameplay.HotWeaponFireComponent.md#isfullautomode)**(): `boolean` <br> 获取当前状态下 isInFullAuto 的值，一般用于处理全自动开火模式下的自动换弹|
| **[offsetOfFireOnScreenCenter](Gameplay.HotWeaponFireComponent.md#offsetoffireonscreencenter)**(): [`Vector`](Type.Vector.md) <br> 获取屏幕中心开火时的偏移|

| Methods |
| :-----|
| **[hadAnimationGuid](Gameplay.HotWeaponFireComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画GUID|
| **[isFiring](Gameplay.HotWeaponFireComponent.md#isfiring)**(): `boolean` <br> 获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹|

## Properties

### onEndContinuousFireServer  

• **onEndContinuousFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器完成一次连发射击周期时执行绑定函数

___

### onEndFireClient  

• **onEndFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端停止开火时执行绑定函数

___

### onEndFireServer  

• **onEndFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器停止开火时执行绑定函数

___

### onStartFireClient  

• **onStartFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始开火时执行绑定函数

___

### onStartFireServer  

• **onStartFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器开始开火时执行绑定函数

## Accessors

### animationGuid  

• `get` **animationGuid**(): `string` <Badge type="tip" text="other" />

**`Description`**

绑定的动画GUID


#### Returns

`string`

绑定的动画 GUID

• `set` **animationGuid**(`GUID`): `void` <Badge type="tip" text="other" />

**`Description`**

设置动画 GUID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### currentBulletSize  

• `get` **currentBulletSize**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取当前弹夹中子弹数量


#### Returns

`number`

当前弹夹中子弹数量

• `set` **currentBulletSize**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前弹夹中子弹数量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新弹夹中子弹数量 |


___

### currentClipSize  

• `get` **currentClipSize**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取当前弹夹容量


#### Returns

`number`

当前弹夹容量

• `set` **currentClipSize**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前弹夹容量


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  当前弹夹容量 |


___

### currentFireInterval  

• `get` **currentFireInterval**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取开火间隙


#### Returns

`number`

开火间隙

• `set` **currentFireInterval**(`interval`): `void` <Badge type="tip" text="other" />

**`Description`**

设置开火间隙


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | `number` |  开火间隙 |


___

### currentFireModel  

• `get` **currentFireModel**(): [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) <Badge type="tip" text="other" />

**`Description`**

获取当前的开火模式


#### Returns

[`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)

当前的开火模式

___

### currentMultipleShot  

• `get` **currentMultipleShot**(): `number` <Badge type="tip" text="other" />

**`Description`**

获取一次开火发射的子弹数量


#### Returns

`number`

一次开火发射的子弹数量

• `set` **currentMultipleShot**(`count`): `void` <Badge type="tip" text="other" />

**`Description`**

设置一次开火发射的子弹数量


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` |  一次开火发射的子弹数量 |


___

### isFireOnScreenCenter  

• `get` **isFireOnScreenCenter**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取是否在屏幕中心开火


#### Returns

`boolean`

是否在屏幕中心开火

• `set` **isFireOnScreenCenter**(`value`): `void` <Badge type="tip" text="other" />

**`Description`**

设置是否在屏幕中心开火


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  是否在屏幕中心开火 |


___

### isFullAutoMode  

• `get` **isFullAutoMode**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取当前状态下 isInFullAuto 的值，一般用于处理全自动开火模式下的自动换弹


#### Returns

`boolean`

当前状态下 isInFullAuto

• `set` **isFullAutoMode**(`isInFullAuto`): `void` <Badge type="tip" text="other" />

**`Description`**

设置当前状态下isInFullAuto的值


::: warning Precautions

一般用于处理全自动开火模式下的自动换弹

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isInFullAuto` | `boolean` |  当前状态下isInFullAuto的值 |


___

### offsetOfFireOnScreenCenter  

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

**`Description`**

获取屏幕中心开火时的偏移


#### Returns

[`Vector`](Type.Vector.md)

屏幕中心开火时的偏移

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void` <Badge type="tip" text="other" />

**`Description`**

设置屏幕中心开火时的偏移


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`Vector`](Type.Vector.md) |  屏幕中心开火时的偏移 |


## Methods

### hadAnimationGuid  

▸ **hadAnimationGuid**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

是否有动画GUID


#### Returns

`boolean`

是否有动画GUID

___

### isFiring  

▸ **isFiring**(): `boolean` <Badge type="tip" text="other" />

**`Description`**

获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹


#### Returns

`boolean`

当前弹夹中子弹数量
