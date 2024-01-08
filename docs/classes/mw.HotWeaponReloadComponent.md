[玩法](../groups/玩法.玩法.md) / HotWeaponReloadComponent

# HotWeaponReloadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponReloadComponent" />

热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑

<span style="font-size: 14px;">
使用示例: 创建一个名为"HotWeaponReloadSample1"的脚本，放置在对象管理器中，打开脚本，输入以下代码保存，运行游戏，代码如下：
</span>

```ts
@Component
export default class HotWeaponReloadSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {

            hotWeapon.reloadEnabled = true;
            hotWeapon.reloadComponent.reloadDuration = 2;
            hotWeapon.reloadComponent.animationAssetId = "4171";

            hotWeapon.reloadComponent.onStartReload.add(() => { console.log("reloadComponent.onStartReload Server") });
            hotWeapon.reloadComponent.onEndReload.add(() => { console.log("reloadComponent.onEndReload Server") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.reloadComponent.onStartReload.add(() => { console.log("reloadComponent.onStartReload Client") });
            hotWeapon.reloadComponent.onEndReload.add(() => { console.log("reloadComponent.onEndReload Client") });
        }
    }
}
```

## Table of contents

### Properties <Score text="Properties" /> 
| **[onEndReload](mw.HotWeaponReloadComponent.md#onendreload)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 结束换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例|
| **[onStartReload](mw.HotWeaponReloadComponent.md#onstartreload)**: `MulticastDelegateInterface`<() => `void`\>  |
| 开始换弹时执行绑定函数。|

### Accessors <Score text="Accessors" /> 
| **[animationAssetId](mw.HotWeaponReloadComponent.md#animationassetid)**(): `string`   |
| :-----|
| 获取绑定的动画GUID。|
| **[reloadDuration](mw.HotWeaponReloadComponent.md#reloadduration)**(): `number`   |
| 获取换弹时间。|

## Properties

### onEndReload <Score text="onEndReload" /> 

• **onEndReload**: `MulticastDelegateInterface`<() => `void`\>

结束换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例

___

### onStartReload <Score text="onStartReload" /> 

• **onStartReload**: `MulticastDelegateInterface`<() => `void`\>

开始换弹时执行绑定函数。

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


获取绑定的动画GUID。

#### Returns

| `string` | 绑定的动画GUID |
| :------ | :------ |


</td>
<td style="text-align: left">


设置动画 GUID。

#### Parameters

| `GUID` `string` |  需要设置的蒙太奇动画 GUID<br> range: 依据资源 ID 长度而定 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### reloadDuration <Score text="reloadDuration" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **reloadDuration**(): `number` 

</th>
<th style="text-align: left">

• `set` **reloadDuration**(`time`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取换弹时间。

#### Returns

| `number` | 是换弹时间 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置换弹时间。

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `time` `number` |  新换弹时间  <br> default:  0.1  <br> range: [0.01, 10]<br> type:浮点数 |
| :------ | :------ |


</td>
</tr></tbody>
</table>

