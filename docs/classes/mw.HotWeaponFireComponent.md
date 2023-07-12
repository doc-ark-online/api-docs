[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponFireComponent

# HotWeaponFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponFireComponent" />

热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑

使用示例: 创建一个名为"HotWeaponFireSample1"的脚本,放置在对象管理器热武器的子节点中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器并设置开火参数，添加委托的效果,代码如下:
```ts
@Class
export default class HotWeaponFireSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.fireComponent.isFireOnScreenCenter = false;
            hotWeapon.fireComponent.currentClipSize = 50;
            hotWeapon.fireComponent.currentFireInterval = 0;
            hotWeapon.fireComponent.currentMultipleShot = 3;
            hotWeapon.fireComponent.isFireOnScreenCenter = false;
            hotWeapon.fireComponent.isFullAutoMode = false;
            hotWeapon.fireComponent.offsetOfFireOnScreenCenter = new Vector(100, 30, 0);
            // 设置参数
            hotWeapon.fireComponent.animationGuid = "80484";
            hotWeapon.fireComponent.onStartFireServer.add(() => { console.log("fireComponent.onStartFireClient") });
            hotWeapon.fireComponent.onEndFireServer.add(() => { console.log("fireComponent.onEndFireClient") });
            hotWeapon.fireComponent.onEndContinuousFireServer.add(() => { console.log("fireComponent.onEndFireClient") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.fireComponent.onStartFireClient.add(() => { console.log("fireComponent.onStartFireClient") });
            hotWeapon.fireComponent.onEndFireClient.add(() => { console.log("fireComponent.onEndFireClient") });
        }
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onEndContinuousFireServer](mw.HotWeaponFireComponent.md#onendcontinuousfireserver)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器完成一次连发射击周期时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|
| **[onEndFire](mw.HotWeaponFireComponent.md#onendfire)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器停止开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|
| **[onStartFire](mw.HotWeaponFireComponent.md#onstartfire)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|

| Accessors |
| :-----|
| **[animationAssetId](mw.HotWeaponFireComponent.md#animationassetid)**(): `string` <br> 绑定的动画GUID。使用示例见类 HotWeaponFireComponent 使用示例|
| **[clipSize](mw.HotWeaponFireComponent.md#clipsize)**(): `number` <br> 获取当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[currentBullet](mw.HotWeaponFireComponent.md#currentbullet)**(): `number` <br> 获取当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[fireInterval](mw.HotWeaponFireComponent.md#fireinterval)**(): `number` <br> 获取开火间隙。使用示例见类 HotWeaponFireComponent 使用示例|
| **[fireMode](mw.HotWeaponFireComponent.md#firemode)**(): [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) <br> 获取当前的开火模式|
| **[isFireOnScreenCenter](mw.HotWeaponFireComponent.md#isfireonscreencenter)**(): `boolean` <br> 获取是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例|
| **[multipleShot](mw.HotWeaponFireComponent.md#multipleshot)**(): `number` <br> 获取一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[offsetOfFireOnScreenCenter](mw.HotWeaponFireComponent.md#offsetoffireonscreencenter)**(): [`Vector`](mw.Vector.md) <br> 获取屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例|

| Methods |
| :-----|
| **[isFiring](mw.HotWeaponFireComponent.md#isfiring)**(): `boolean` <br> 获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹|

## Properties

### onEndContinuousFireServer <Score text="onEndContinuousFireServer" /> 

• **onEndContinuousFireServer**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器完成一次连发射击周期时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

___

### onEndFire <Score text="onEndFire" /> 

• **onEndFire**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器停止开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

___

### onStartFire <Score text="onStartFire" /> 

• **onStartFire**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器开始开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

## Accessors

### animationAssetId <Score text="animationAssetId" /> 

• `get` **animationAssetId**(): `string` 

绑定的动画GUID。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`string`

绑定的动画 GUID

• `set` **animationAssetId**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### clipSize <Score text="clipSize" /> 

• `get` **clipSize**(): `number` 

获取当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`number`

当前弹夹容量

• `set` **clipSize**(`value`): `void` <Badge type="tip" text="other" />

设置当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  当前弹夹容量 |


___

### currentBullet <Score text="currentBullet" /> 

• `get` **currentBullet**(): `number` 

获取当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`number`

当前弹夹中子弹数量

• `set` **currentBullet**(`value`): `void` <Badge type="tip" text="other" />

设置当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新弹夹中子弹数量 |


___

### fireInterval <Score text="fireInterval" /> 

• `get` **fireInterval**(): `number` 

获取开火间隙。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`number`

开火间隙

• `set` **fireInterval**(`interval`): `void` <Badge type="tip" text="other" />

设置开火间隙。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interval` | `number` |  开火间隙 |


___

### fireMode <Score text="fireMode" /> 

• `get` **fireMode**(): [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) 

获取当前的开火模式


#### Returns

[`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md)

当前的开火模式

___

### isFireOnScreenCenter <Score text="isFireOnScreenCenter" /> 

• `get` **isFireOnScreenCenter**(): `boolean` 

获取是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`boolean`

是否在屏幕中心开火

• `set` **isFireOnScreenCenter**(`value`): `void` <Badge type="tip" text="other" />

设置是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  是否在屏幕中心开火 |


___

### multipleShot <Score text="multipleShot" /> 

• `get` **multipleShot**(): `number` 

获取一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

`number`

一次开火发射的子弹数量

• `set` **multipleShot**(`count`): `void` <Badge type="tip" text="other" />

设置一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` |  一次开火发射的子弹数量 |


___

### offsetOfFireOnScreenCenter <Score text="offsetOfFireOnScreenCenter" /> 

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](mw.Vector.md) 

获取屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例


#### Returns

[`Vector`](mw.Vector.md)

屏幕中心开火时的偏移

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void` <Badge type="tip" text="other" />

设置屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | [`Vector`](mw.Vector.md) |  屏幕中心开火时的偏移 |


## Methods

### isFiring <Score text="isFiring" /> 

• **isFiring**(): `boolean` 

获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹


#### Returns

`boolean`

当前弹夹中子弹数量
