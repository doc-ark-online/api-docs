[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponAimComponent

# HotWeaponAimComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAimComponent" />

<p class="content-big"> 热武器瞄准组件，瞄准状态下持枪角色的视角会拉近 </p>

<p style="font-size: 14px;"> 使用示例: 创建一个名为"HotWeaponAimSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器的启用了瞄准组件并设置参数，添加委托的效果,代码如下: </p>

```ts
@Component
export default class HotWeaponAimSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.aimEnable = true;
            hotWeapon.aimComponent.aimMode = HotWeaponAimMode.ThirdPerson;
            hotWeapon.aimComponent.scopeTypeIndex = HotWeaponCrossHairType.ThirdPersonCrossHair;
            hotWeapon.aimComponent.aimingZoom = 16;
            hotWeapon.aimComponent.cameraOffsetDistanceInThirdPersonMode = 300;
            hotWeapon.aimComponent.onAimStartServer.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndServer.add(() => { console.log("aimComponent.onAimEndClient") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.aimComponent.onAimStartClient.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndClient.add(() => { console.log("aimComponent.onAimEndClient") });
        }
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new HotWeaponAimComponent**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[onEndAim](mw.HotWeaponAimComponent.md#onendaim)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例|
| **[onStartAim](mw.HotWeaponAimComponent.md#onstartaim)**: `MulticastDelegateInterface`<() => `void`\>  |
| 服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例|

### Accessors <Score text="Accessors" /> 
| **[aimMode](mw.HotWeaponAimComponent.md#aimmode)**(): [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md)  |
| :-----|
| Set瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例|
| **[aimingZoom](mw.HotWeaponAimComponent.md#aimingzoom)**(): `number`  |
| Set模拟瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例|
| **[cameraOffsetDistanceInThirdPersonMode](mw.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)**(): `number`  |
| Set第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例|
| **[defaultCameraSpringArmLength](mw.HotWeaponAimComponent.md#defaultcameraspringarmlength)**(): `number`  |
| Set第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例|

### Methods <Score text="Methods" /> 
| **[enableAiming](mw.HotWeaponAimComponent.md#enableaiming)**(`enabled`: `boolean`): `void`  |
| :-----|
| 打开/关闭瞄准|

## Properties

### onEndAim <Score text="onEndAim" /> 

• **onEndAim**: `MulticastDelegateInterface`<() => `void`\>

服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例

___

### onStartAim <Score text="onStartAim" /> 

• **onStartAim**: `MulticastDelegateInterface`<() => `void`\>

服务器端开始瞄准代理。使用示例见类 HotWeaponAimComponent 使用示例

## Accessors

### aimMode <Score text="aimMode" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **aimMode**(): [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) 

</th>
<th style="text-align: left">

• `set` **aimMode**(`NewAimMode`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

| [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) | 当前瞄准时的第一/第三人称模式 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set瞄准时的第一/第三人称模式。使用示例见类 HotWeaponAimComponent 使用示例

调用端自动广播

#### Parameters

| `NewAimMode` [`HotWeaponAimMode`](../enums/mw.HotWeaponAimMode.md) |  新设置的瞄准模式 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### aimingZoom <Score text="aimingZoom" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **aimingZoom**(): `number` 

</th>
<th style="text-align: left">

• `set` **aimingZoom**(`newAimingZoom`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get第一人称瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的FOV值每增加1.0，对应FOV增加5°

:::


#### Returns

| `number` | 当前第一人称瞄准时的瞄准镜放大倍数 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set模拟瞄准时的瞄准镜放大倍数。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加1.0，对应FOV增加5°

:::

**`Effect`**

调用端自动广播

#### Parameters

| `newAimingZoom` `number` |  新设置的瞄准镜放大倍数 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### cameraOffsetDistanceInThirdPersonMode <Score text="cameraOffsetDistanceInThirdPersonMode" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **cameraOffsetDistanceInThirdPersonMode**(): `number` 

</th>
<th style="text-align: left">

• `set` **cameraOffsetDistanceInThirdPersonMode**(`NewCameraOffsetDistance`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

| `number` | 当前连接相机弹簧组件的长度 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set第三人称瞄准时的连接相机弹簧组件的长度。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| `NewCameraOffsetDistance` `number` |  新设置的连接相机弹簧组件的长度 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### defaultCameraSpringArmLength <Score text="defaultCameraSpringArmLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **defaultCameraSpringArmLength**(): `number` 

</th>
<th style="text-align: left">

• `set` **defaultCameraSpringArmLength**(`NewCameraArmLength`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例


#### Returns

| `number` | 第三人称常态下相机弹簧组件的默认长度 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set第三人称常态下相机弹簧组件的默认长度。使用示例见类 HotWeaponAimComponent 使用示例

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| `NewCameraArmLength` `number` |  新设置的连接相机弹簧组件的默认长度 default: |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### enableAiming <Score text="enableAiming" /> 

• **enableAiming**(`enabled`): `void` <Badge type="tip" text="other" />

打开/关闭瞄准

#### Parameters

| `enabled` `boolean` |  是否开启瞄准功能 default: |
| :------ | :------ |


- 切换相机View
- 切换准星UI
- 修改子弹发射精度-上升到用户层，开发者自己在瞄准时设置默认精准度

调用端自动广播
