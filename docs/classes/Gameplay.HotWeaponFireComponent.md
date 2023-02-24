[Avatar](../groups/Avatar.Avatar.md) / HotWeaponFireComponent

# HotWeaponFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponFireComponent" />

热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑

**`Groups`**

GAMEPLAY

## Table of contents

| Properties |
| :-----|
| **[onEndContinuousFireServer](Gameplay.HotWeaponFireComponent.md#onendcontinuousfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 绑定的动画GUID|
| **[onEndFireClient](Gameplay.HotWeaponFireComponent.md#onendfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 绑定的动画GUID|
| **[onEndFireServer](Gameplay.HotWeaponFireComponent.md#onendfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 绑定的动画GUID|
| **[onStartFireClient](Gameplay.HotWeaponFireComponent.md#onstartfireclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 绑定的动画GUID|
| **[onStartFireServer](Gameplay.HotWeaponFireComponent.md#onstartfireserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 绑定的动画GUID|

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

### onEndContinuousFireServer <Score text="onEndContinuousFireServer" /> 

• **onEndContinuousFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器完成一次连发射击周期时执行绑定函数

___

### onEndFireClient <Score text="onEndFireClient" /> 

• **onEndFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端停止开火时执行绑定函数

___

### onEndFireServer <Score text="onEndFireServer" /> 

• **onEndFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器停止开火时执行绑定函数

___

### onStartFireClient <Score text="onStartFireClient" /> 

• **onStartFireClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端开始开火时执行绑定函数

___

### onStartFireServer <Score text="onStartFireServer" /> 

• **onStartFireServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器开始开火时执行绑定函数

## Accessors

### animationGuid <Score text="animationGuid" /> 

• `get` **animationGuid**(): `string` 

绑定的动画GUID


#### Returns

`string`

绑定的动画 GUID

• `set` **animationGuid**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### currentBulletSize <Score text="currentBulletSize" /> 

• `get` **currentBulletSize**(): `number` 

获取当前弹夹中子弹数量


#### Returns

`number`

当前弹夹中子弹数量

• `set` **currentBulletSize**(`value`): `void` <Badge type="tip" text="other" />

设置当前弹夹中子弹数量

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新弹夹中子弹数量 |


___

### currentClipSize <Score text="currentClipSize" /> 

• `get` **currentClipSize**(): `number` 

获取当前弹夹容量


#### Returns

`number`

当前弹夹容量

• `set` **currentClipSize**(`value`): `void` <Badge type="tip" text="other" />

设置当前弹夹容量

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  当前弹夹容量 |


___

### currentFireInterval <Score text="currentFireInterval" /> 

• `get` **currentFireInterval**(): `number` 

获取开火间隙


#### Returns

`number`

开火间隙

• `set` **currentFireInterval**(`interval`): `void` <Badge type="tip" text="other" />

设置开火间隙

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | `number` |  开火间隙 |


___

### currentFireModel <Score text="currentFireModel" /> 

• `get` **currentFireModel**(): [`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md) 

获取当前的开火模式


#### Returns

[`HotWeaponFireMode`](../enums/Gameplay.HotWeaponFireMode.md)

当前的开火模式

___

### currentMultipleShot <Score text="currentMultipleShot" /> 

• `get` **currentMultipleShot**(): `number` 

获取一次开火发射的子弹数量


#### Returns

`number`

一次开火发射的子弹数量

• `set` **currentMultipleShot**(`count`): `void` <Badge type="tip" text="other" />

设置一次开火发射的子弹数量

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` |  一次开火发射的子弹数量 |


___

### isFireOnScreenCenter <Score text="isFireOnScreenCenter" /> 

• `get` **isFireOnScreenCenter**(): `boolean` 

获取是否在屏幕中心开火


#### Returns

`boolean`

是否在屏幕中心开火

• `set` **isFireOnScreenCenter**(`value`): `void` <Badge type="tip" text="other" />

设置是否在屏幕中心开火

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  是否在屏幕中心开火 |


___

### isFullAutoMode <Score text="isFullAutoMode" /> 

• `get` **isFullAutoMode**(): `boolean` 

获取当前状态下 isInFullAuto 的值，一般用于处理全自动开火模式下的自动换弹


#### Returns

`boolean`

当前状态下 isInFullAuto

• `set` **isFullAutoMode**(`isInFullAuto`): `void` <Badge type="tip" text="other" />

设置当前状态下isInFullAuto的值

调用端自动广播

::: warning Precautions

一般用于处理全自动开火模式下的自动换弹

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isInFullAuto` | `boolean` |  当前状态下isInFullAuto的值 |


___

### offsetOfFireOnScreenCenter <Score text="offsetOfFireOnScreenCenter" /> 

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](Type.Vector.md) 

获取屏幕中心开火时的偏移


#### Returns

[`Vector`](Type.Vector.md)

屏幕中心开火时的偏移

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void` <Badge type="tip" text="other" />

设置屏幕中心开火时的偏移

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`Vector`](Type.Vector.md) |  屏幕中心开火时的偏移 |


## Methods

### hadAnimationGuid <Score text="hadAnimationGuid" /> 

• **hadAnimationGuid**(): `boolean` 

是否有动画GUID


#### Returns

`boolean`

是否有动画GUID

___

### isFiring <Score text="isFiring" /> 

• **isFiring**(): `boolean` 

获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹


#### Returns

`boolean`

当前弹夹中子弹数量
