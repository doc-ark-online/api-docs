[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponRecoilForceComponent" />

<p class="content-big"> 热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复） </p>

<p style="font-size: 14px;"> 使用示例: 创建一个名为"HotWeaponRecoilForceSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器启用后坐力组件，设置组件参数，并添加委托的效果,代码如下: </p>

```ts
@Component
export default class HotWeaponRecoilForceSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.recoilForceEnable = true;
            hotWeapon.recoilForceComponent.minHorizontalOffset = 1
            hotWeapon.recoilForceComponent.maxHorizontalOffset = 1
            hotWeapon.recoilForceComponent.minVerticalOffset = 1
            hotWeapon.recoilForceComponent.maxVerticalOffset = 1
            hotWeapon.recoilForceComponent.minHorizontalJitter = 1;
            hotWeapon.recoilForceComponent.maxHorizontalJitter = 1;
            hotWeapon.recoilForceComponent.minVerticalJitter = 1;
            hotWeapon.recoilForceComponent.maxVerticalJitter = 1;
        }
        hotWeapon.recoilForceComponent.onStartRecoilForce.add(() => { console.log("recoilForceComponent.onStartRecoilForce") });
    }
}
```

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new HotWeaponRecoilForceComponent**()  |
| :----- |

### Properties <Score text="Properties" /> 
| **[onStartRecoil](mw.HotWeaponRecoilForceComponent.md#onstartrecoil)**: `MulticastDelegateInterface`<() => `void`\>  |
| :-----|
| 后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例|

### Accessors <Score text="Accessors" /> 
| **[maxHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#maxhorizontaljitter)**(): `number`  |
| :-----|
| 设置相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#maxhorizontaloffset)**(): `number`  |
| 设置水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxVerticalJitter](mw.HotWeaponRecoilForceComponent.md#maxverticaljitter)**(): `number`  |
| 设置相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxVerticalOffset](mw.HotWeaponRecoilForceComponent.md#maxverticaloffset)**(): `number`  |
| 设置垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#minhorizontaljitter)**(): `number`  |
| 设置相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#minhorizontaloffset)**(): `number`  |
| 设置水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minVerticalJitter](mw.HotWeaponRecoilForceComponent.md#minverticaljitter)**(): `number`  |
| 设置相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minVerticalOffset](mw.HotWeaponRecoilForceComponent.md#minverticaloffset)**(): `number`  |
| 设置垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|

### Methods <Score text="Methods" /> 
| **[getDeepJitter](mw.HotWeaponRecoilForceComponent.md#getdeepjitter)**(): `number`  |
| :-----|
| 获取深度抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#gethorizontaljitter)**(): `number`  |
| 获取水平抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#gethorizontaloffset)**(): `number`  |
| 获取水平偏移值|
| **[getVerticalJitter](mw.HotWeaponRecoilForceComponent.md#getverticaljitter)**(): `number`  |
| 获取垂直抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getVerticalOffset](mw.HotWeaponRecoilForceComponent.md#getverticaloffset)**(): `number`  |
| 获取垂直偏移值。使用示例见方法 getHorizontalOffset 使用示例|

## Properties

### onStartRecoil <Score text="onStartRecoil" /> 

• **onStartRecoil**: `MulticastDelegateInterface`<() => `void`\>

后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例

## Accessors

### maxHorizontalJitter <Score text="maxHorizontalJitter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxHorizontalJitter**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 相机水平抖动最大值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  相机水平抖动最大值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maxHorizontalOffset <Score text="maxHorizontalOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxHorizontalOffset**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxHorizontalOffset**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 水平偏移最大值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  水平偏移最大值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maxVerticalJitter <Score text="maxVerticalJitter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxVerticalJitter**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 相机垂直抖动最大值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  新相机垂直抖动最大值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maxVerticalOffset <Score text="maxVerticalOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxVerticalOffset**(): `number` 

</th>
<th style="text-align: left">

• `set` **maxVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 垂直偏移最大值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  垂直偏移最大值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### minHorizontalJitter <Score text="minHorizontalJitter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **minHorizontalJitter**(): `number` 

</th>
<th style="text-align: left">

• `set` **minHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 相机水平抖动最小值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  新相机水平抖动最小值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### minHorizontalOffset <Score text="minHorizontalOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **minHorizontalOffset**(): `number` 

</th>
<th style="text-align: left">

• `set` **minHorizontalOffset**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 水平偏移最小值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  水平偏移最小值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### minVerticalJitter <Score text="minVerticalJitter" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **minVerticalJitter**(): `number` 

</th>
<th style="text-align: left">

• `set` **minVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 相机垂直抖动最小值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  新相机垂直抖动最小值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### minVerticalOffset <Score text="minVerticalOffset" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **minVerticalOffset**(): `number` 

</th>
<th style="text-align: left">

• `set` **minVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `number` | 垂直偏移最小值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| `value` `number` |  垂直偏移最小值 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### getDeepJitter <Score text="getDeepJitter" /> 

• **getDeepJitter**(): `number` 

获取深度抖动值。使用示例见方法 getHorizontalOffset 使用示例

#### Returns

| `number` | 深度抖动值 |
| :------ | :------ |


___

### getHorizontalJitter <Score text="getHorizontalJitter" /> 

• **getHorizontalJitter**(): `number` 

获取水平抖动值。使用示例见方法 getHorizontalOffset 使用示例

#### Returns

| `number` | 水平抖动值 |
| :------ | :------ |


___

### getHorizontalOffset <Score text="getHorizontalOffset" /> 

• **getHorizontalOffset**(): `number` 

获取水平偏移值

#### Returns

| `number` | 水平偏移值 |
| :------ | :------ |


<p style="font-size: 14px;"> 使用示例: 创建一个名为"HotWeaponRecoilForceSample2"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器后坐力组件获取当前关键状态的效果,代码如下: </p>

```ts
@Component
export default class HotWeaponRecoilForceSample2 extends mw.Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as mw.HotWeapon;

        const horizontalOffset = hotWeapon.recoilForceComponent.getHorizontalOffset();
        const verticalOffset = hotWeapon.recoilForceComponent.getVerticalOffset();
        const horizontalJitter = hotWeapon.recoilForceComponent.getHorizontalJitter();
        const verticalJitter = hotWeapon.recoilForceComponent.getVerticalJitter();
        const deepJitter = hotWeapon.recoilForceComponent.getDeepJitter();
    }
}
```

___

### getVerticalJitter <Score text="getVerticalJitter" /> 

• **getVerticalJitter**(): `number` 

获取垂直抖动值。使用示例见方法 getHorizontalOffset 使用示例

#### Returns

| `number` | 垂直抖动值 |
| :------ | :------ |


___

### getVerticalOffset <Score text="getVerticalOffset" /> 

• **getVerticalOffset**(): `number` 

获取垂直偏移值。使用示例见方法 getHorizontalOffset 使用示例

#### Returns

| `number` | 垂直偏移值 |
| :------ | :------ |

