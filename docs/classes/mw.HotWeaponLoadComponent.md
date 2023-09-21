[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponLoadComponent" />

<p class="content-big"> 热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑 </p>

<p style="font-size: 14px;"> 使用示例: 创建一个名为"HotWeaponLoadSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开启上膛组件并设置参数，添加委托的效果,代码如下: </p>

```ts
@Component
export default class HotWeaponLoadSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.loadEnabled = true;
            hotWeapon.loadComponent.loadDuration = 1
            hotWeapon.loadComponent.loadAfterFireEnabled = true;
            hotWeapon.loadComponent.animationAssetId = "4172";
            hotWeapon.loadComponent.onStartLoad.add(() => { console.log("loadComponent.onStartLoad Server") });
            hotWeapon.loadComponent.onEndLoad.add(() => { console.log("loadComponent.onEndLoad Server") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.loadComponent.onStartLoad.add(() => { console.log("loadComponent.onStartLoad Client") });
            hotWeapon.loadComponent.onEndLoad.add(() => { console.log("loadComponent.onEndLoad Client") });
        }
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new HotWeaponLoadComponent**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[onEndLoad](mw.HotWeaponLoadComponent.md#onendload)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[onStartLoad](mw.HotWeaponLoadComponent.md#onstartload)**: `MulticastDelegateInterface`<() => `void`\>  |
| 服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|

### Accessors <Score text="Accessors" /> 
| **[animationAssetId](mw.HotWeaponLoadComponent.md#animationassetid)**(): `string`  |
| :-----|
| 设置动画 GUID。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadAfterFireEnabled](mw.HotWeaponLoadComponent.md#loadafterfireenabled)**(): `boolean`  |
| 设置是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadDuration](mw.HotWeaponLoadComponent.md#loadduration)**(): `number`  |
| 设置上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例|

## Properties

### onEndLoad <Score text="onEndLoad" /> 

• **onEndLoad**: `MulticastDelegateInterface`<() => `void`\>

服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

___

### onStartLoad <Score text="onStartLoad" /> 

• **onStartLoad**: `MulticastDelegateInterface`<() => `void`\>

服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

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


获取绑定的动画GUID。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

| `string` | 绑定的动画GUID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置动画 GUID。使用示例见类 HotWeaponLoadComponent 使用示例

调用端自动广播

#### Parameters

| `GUID` `string` |  需要设置的蒙太奇动画 GUID |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### loadAfterFireEnabled <Score text="loadAfterFireEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **loadAfterFireEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **loadAfterFireEnabled**(`enable`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

| `boolean` | 是否开启开火后自动上膛的功能 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `enable` `boolean` |  是否开启开火后自动上膛的功能 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### loadDuration <Score text="loadDuration" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **loadDuration**(): `number` 

</th>
<th style="text-align: left">

• `set` **loadDuration**(`time`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

| `number` | 上膛时间 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `time` `number` |  上膛时间 |
| :------ | :------ |


</td>
</tr></tbody>
</table>

