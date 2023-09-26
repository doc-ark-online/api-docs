[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponAccuracyOfFireComponent

# HotWeaponAccuracyOfFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAccuracyOfFireComponent" />

<p class="content-big">

热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度

</p>

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponAofSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开启射击精度组件，并设置参数，添加委托的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponAofSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.accuracyOfFireEnable = true;
            // 影响射击精度的子弹偏移半角的最大值(范围Min~88)
            hotWeapon.accuracyOfFireComponent.maxDispersionHalfAngle = 4;
            // 影响射击精度的子弹偏移半角的最小值(范围0~Max)
            hotWeapon.accuracyOfFireComponent.minDispersionHalfAngle = 0.01;
            // 默认影响射击精度的子弹偏移半角(范围Min~Max)
            hotWeapon.accuracyOfFireComponent.defaultDispersionHalfAngle = 1;
            // 影响射击精度的子弹偏移半角的每秒扩张速度(范围0~88)
            hotWeapon.accuracyOfFireComponent.dispersionHalfAngleIncreaseSpeed = 5;
            // 影响射击精度的子弹偏移半角的每秒收缩速度(范围0~88)
            hotWeapon.accuracyOfFireComponent.dispersionHalfAngleDecreaseSpeed = 10;
            // 影响射击精度的子弹偏移半角的每次开火扩张值(范围0~88)
            hotWeapon.accuracyOfFireComponent.dispersionHalfAngleIncreasePerShot = 1;
        } else if (SystemUtil.isClient()) {
            hotWeapon.accuracyOfFireComponent.onCurrentDispersionChangedClient.add(() => { console.log("accuracyOfFireComponent.onCurrentDispersionChangedClient") });
        }
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new HotWeaponAccuracyOfFireComponent**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[onCurrentDispersionChange](mw.HotWeaponAccuracyOfFireComponent.md#oncurrentdispersionchange)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 客户端实际射击精度值发生变化时执行绑定函数。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|

### Accessors <Score text="Accessors" /> 
| **[defaultDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#defaultdispersionhalfangle)**(): `number`  |
| :-----|
| Set子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleDecreaseSpeed](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangledecreasespeed)**(): `number`  |
| Set子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleIncreasePerShot](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasepershot)**(): `number`  |
| Set子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleIncreaseSpeed](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasespeed)**(): `number`  |
| Set子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[maxDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#maxdispersionhalfangle)**(): `number`  |
| Set子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[minDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#mindispersionhalfangle)**(): `number`  |
| Set子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|

### Methods <Score text="Methods" /> 
| **[getCurrentDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#getcurrentdispersionhalfangle)**(): `number`  |
| :-----|
| Get当前子弹随机发散范围半径实际值|
| **[getRandomShootDir](mw.HotWeaponAccuracyOfFireComponent.md#getrandomshootdir)**(`shootDir`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）|
| **[getTargetDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#gettargetdispersionhalfangle)**(): `number`  |
| Get目标子弹随机发散范围半径实际值|

## Properties

### onCurrentDispersionChange <Score text="onCurrentDispersionChange" /> 

• **onCurrentDispersionChange**: `MulticastDelegateInterface`<() => `void`\>

客户端实际射击精度值发生变化时执行绑定函数。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

## Accessors

### defaultDispersionHalfAngle <Score text="defaultDispersionHalfAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **defaultDispersionHalfAngle**(): `number` 

</th>
<th style="text-align: left">

• `set` **defaultDispersionHalfAngle**(`NewValue`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径值 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径值 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### dispersionHalfAngleDecreaseSpeed <Score text="dispersionHalfAngleDecreaseSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **dispersionHalfAngleDecreaseSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **dispersionHalfAngleDecreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径每秒变化量 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径每秒变化量 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### dispersionHalfAngleIncreasePerShot <Score text="dispersionHalfAngleIncreasePerShot" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **dispersionHalfAngleIncreasePerShot**(): `number` 

</th>
<th style="text-align: left">

• `set` **dispersionHalfAngleIncreasePerShot**(`NewValue`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径增量 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径增量 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### dispersionHalfAngleIncreaseSpeed <Score text="dispersionHalfAngleIncreaseSpeed" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **dispersionHalfAngleIncreaseSpeed**(): `number` 

</th>
<th style="text-align: left">

• `set` **dispersionHalfAngleIncreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径每秒变化量 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径每秒变化量 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maxDispersionHalfAngle <Score text="maxDispersionHalfAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxDispersionHalfAngle**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxDispersionHalfAngle**(`NewValue`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径值 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径值 default: |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### minDispersionHalfAngle <Score text="minDispersionHalfAngle" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **minDispersionHalfAngle**(): `number` 

</th>
<th style="text-align: left">

• `set` **minDispersionHalfAngle**(`NewValue`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


Get子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `number` | 圆型范围半径值 |
| :------ | :------ |


</td>
<td style="text-align: left">


Set子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `NewValue` `number` |  新设置的圆型范围半径值 default: |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### getCurrentDispersionHalfAngle <Score text="getCurrentDispersionHalfAngle" /> 

• **getCurrentDispersionHalfAngle**(): `number` 

Get当前子弹随机发散范围半径实际值

#### Returns

| `number` | 当前子弹发散范围半径 |
| :------ | :------ |


___

### getRandomShootDir <Score text="getRandomShootDir" /> 

• **getRandomShootDir**(`shootDir`): [`Vector`](mw.Vector.md) 

获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）

#### Parameters

| `shootDir` [`Vector`](mw.Vector.md) |  未发生偏移的最初子弹飞行方向 default: |
| :------ | :------ |

#### Returns

| [`Vector`](mw.Vector.md) | 随机屏幕偏移坐标 |
| :------ | :------ |

::: warning Precautions

以屏幕中心处生成子弹，可直接套用该矢量
以预设位置处生成子弹，需要以 预设位置+该矢量+最大射击距离 决定着弹点，再计算实际三维空间中子弹的飞行方向

:::


___

### getTargetDispersionHalfAngle <Score text="getTargetDispersionHalfAngle" /> 

• **getTargetDispersionHalfAngle**(): `number` 

Get目标子弹随机发散范围半径实际值

#### Returns

| `number` | 目标子弹发散范围半径 |
| :------ | :------ |

