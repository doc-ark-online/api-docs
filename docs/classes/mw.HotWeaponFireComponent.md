[玩法](../groups/玩法.玩法.md) / HotWeaponFireComponent

# HotWeaponFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponFireComponent" />

热武器开火组件，负责维护热武器射击的主要参数，及核心逻辑

<span style="font-size: 14px;">
使用示例: 创建一个名为"HotWeaponFireSample1"的脚本，放置在对象管理器热武器的子节点中，打开脚本，输入以下代码保存，运行游戏，代码如下：
</span>

```ts
 @Component
 export default class HotWeaponFireSample1 extends Script {
     protected onStart(): void {
         // 构造
         const hotWeapon = this.gameObject as HotWeapon;

         if (SystemUtil.isServer()) {
             hotWeapon.fireComponent.isFireOnScreenCenter = false;
             hotWeapon.fireComponent.clipSize = 50;
             hotWeapon.fireComponent.fireInterval = 0;
             hotWeapon.fireComponent.multipleShot = 3;
             hotWeapon.fireComponent.isFireOnScreenCenter = false;
             hotWeapon.fireComponent.offsetOfFireOnScreenCenter = new Vector(100, 30, 0);
             // 设置参数
             hotWeapon.fireComponent.animationAssetId = "80484";
             hotWeapon.fireComponent.onStartFire.add(() => { console.log("fireComponent.onStartFireClient") });
             hotWeapon.fireComponent.onEndFire.add(() => { console.log("fireComponent.onEndFireClient") });
             hotWeapon.fireComponent.onEndContinuousFire.add(() => { console.log("fireComponent.onEndFireClient") });
         }
     }
 }
```

## Table of contents

### Properties <Score text="Properties" /> 
| **[onEndContinuousFire](mw.HotWeaponFireComponent.md#onendcontinuousfire)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 服务器完成一次连发射击周期时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|
| **[onEndFire](mw.HotWeaponFireComponent.md#onendfire)**: `MulticastDelegateInterface`<() => `void`\>  |
| 服务器停止开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|
| **[onStartFire](mw.HotWeaponFireComponent.md#onstartfire)**: `MulticastDelegateInterface`<() => `void`\>  |
| 服务器开始开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例|

### Accessors <Score text="Accessors" /> 
| **[animationAssetId](mw.HotWeaponFireComponent.md#animationassetid)**(): `string`   |
| :-----|
| 绑定的动画GUID。使用示例见类 HotWeaponFireComponent 使用示例|
| **[clipSize](mw.HotWeaponFireComponent.md#clipsize)**(): `number`   |
| 获取当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[currentBullet](mw.HotWeaponFireComponent.md#currentbullet)**(): `number`   |
| 获取当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[fireInterval](mw.HotWeaponFireComponent.md#fireinterval)**(): `number`   |
| 获取开火间隙。使用示例见类 HotWeaponFireComponent 使用示例|
| **[fireMode](mw.HotWeaponFireComponent.md#firemode)**(): [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md)   |
| 获取当前的开火模式|
| **[isFireOnScreenCenter](mw.HotWeaponFireComponent.md#isfireonscreencenter)**(): `boolean`   |
| 获取是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例|
| **[multipleShot](mw.HotWeaponFireComponent.md#multipleshot)**(): `number`   |
| 获取一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例|
| **[offsetOfFireOnScreenCenter](mw.HotWeaponFireComponent.md#offsetoffireonscreencenter)**(): [`Vector`](mw.Vector.md)   |
| 获取屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例|

### Methods <Score text="Methods" /> 
| **[isFiring](mw.HotWeaponFireComponent.md#isfiring)**(): `boolean`   |
| :-----|
| 获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹|

## Properties

### onEndContinuousFire <Score text="onEndContinuousFire" /> 

• **onEndContinuousFire**: `MulticastDelegateInterface`<() => `void`\>

服务器完成一次连发射击周期时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

___

### onEndFire <Score text="onEndFire" /> 

• **onEndFire**: `MulticastDelegateInterface`<() => `void`\>

服务器停止开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

___

### onStartFire <Score text="onStartFire" /> 

• **onStartFire**: `MulticastDelegateInterface`<() => `void`\>

服务器开始开火时执行绑定函数。使用示例见类 HotWeaponFireComponent 使用示例

## Accessors

### animationAssetId <Score text="animationAssetId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **animationAssetId**(): `string` 

</th>
<th style="text-align: left">

• `set` **animationAssetId**(`GUID`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


绑定的动画GUID。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `string` | 绑定的动画 GUID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置动画 GUID。使用示例见类 HotWeaponFireComponent 使用示例

#### Parameters

| `GUID` `string` |  需要设置的蒙太奇动画 GUID |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### clipSize <Score text="clipSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **clipSize**(): `number` 

</th>
<th style="text-align: left">

• `set` **clipSize**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `number` | 当前弹夹容量 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前弹夹容量。使用示例见类 HotWeaponFireComponent 使用示例

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  当前弹夹容量 <br> default: 30 <br> range: [1, 1000] |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### currentBullet <Score text="currentBullet" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentBullet**(): `number` 

</th>
<th style="text-align: left">

• `set` **currentBullet**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `number` | 当前弹夹中子弹数量 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前弹夹中子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

#### Parameters

| `value` `number` |  新弹夹中子弹数量 <br> default: 0 <br> range: [0, clipSize] |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fireInterval <Score text="fireInterval" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fireInterval**(): `number` 

</th>
<th style="text-align: left">

• `set` **fireInterval**(`interval`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取开火间隙。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `number` | 开火间隙 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置开火间隙。使用示例见类 HotWeaponFireComponent 使用示例

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `interval` `number` |  开火间隙 <br> default: 0.1 <br> range: [0.01, 10] |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### fireMode <Score text="fireMode" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **fireMode**(): [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) 

</th>
<th style="text-align: left">

• `set` **fireMode**(`newFireMode`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前的开火模式

#### Returns

| [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) | 当前的开火模式 |
| :------ | :------ |


</td>
<td style="text-align: left">


切换设置当前开火模式

::: warning Precautions

装备前只能在服务器调用，装备后可在客户端调用

:::

#### Parameters

| `newFireMode` [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) |  新的热武器开火模式 <br> default: 默认为单发 HotWeaponFireMode.SingleFire |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isFireOnScreenCenter <Score text="isFireOnScreenCenter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isFireOnScreenCenter**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **isFireOnScreenCenter**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `boolean` | 是否在屏幕中心开火 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否在屏幕中心开火。使用示例见类 HotWeaponFireComponent 使用示例

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `boolean` |  是否在屏幕中心开火 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### multipleShot <Score text="multipleShot" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **multipleShot**(): `number` 

</th>
<th style="text-align: left">

• `set` **multipleShot**(`count`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| `number` | 一次开火发射的子弹数量 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置一次开火发射的子弹数量。使用示例见类 HotWeaponFireComponent 使用示例

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `count` `number` |  一次开火发射的子弹数量 <br> default: 1 <br> range: [1, 100] |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### offsetOfFireOnScreenCenter <Score text="offsetOfFireOnScreenCenter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **offsetOfFireOnScreenCenter**(): [`Vector`](mw.Vector.md) 

</th>
<th style="text-align: left">

• `set` **offsetOfFireOnScreenCenter**(`offset`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例

#### Returns

| [`Vector`](mw.Vector.md) | 屏幕中心开火时的偏移 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置屏幕中心开火时的偏移。使用示例见类 HotWeaponFireComponent 使用示例

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `offset` [`Vector`](mw.Vector.md) |  屏幕中心开火时的偏移 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### isFiring <Score text="isFiring" /> 

• **isFiring**(): `boolean` 

获取当前状态下bFiring的值，一般用于处理全自动开火模式下的自动换弹

#### Returns

| `boolean` | 当前弹夹中子弹数量 |
| :------ | :------ |
