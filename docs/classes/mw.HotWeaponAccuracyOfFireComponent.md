[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeaponAccuracyOfFireComponent

# HotWeaponAccuracyOfFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAccuracyOfFireComponent" />

热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度

使用示例: 创建一个名为"HotWeaponAofSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开启射击精度组件，并设置参数，添加委托的效果,代码如下:
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

| Properties |
| :-----|
| **[onCurrentDispersionChange](mw.HotWeaponAccuracyOfFireComponent.md#oncurrentdispersionchange)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端实际射击精度值发生变化时执行绑定函数。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|

| Accessors |
| :-----|
| **[defaultDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#defaultdispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleDecreaseSpeed](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangledecreasespeed)**(): `number` <br> Get子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleIncreasePerShot](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasepershot)**(): `number` <br> Get子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[dispersionHalfAngleIncreaseSpeed](mw.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasespeed)**(): `number` <br> Get子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[maxDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#maxdispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[minDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#mindispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例|

| Methods |
| :-----|
| **[getCurrentDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#getcurrentdispersionhalfangle)**(): `number` <br> Get当前子弹随机发散范围半径实际值|
| **[getRandomShootDir](mw.HotWeaponAccuracyOfFireComponent.md#getrandomshootdir)**(`shootDir`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）|
| **[getTargetDispersionHalfAngle](mw.HotWeaponAccuracyOfFireComponent.md#gettargetdispersionhalfangle)**(): `number` <br> Get目标子弹随机发散范围半径实际值|

## Properties

### onCurrentDispersionChange <Score text="onCurrentDispersionChange" /> 

• **onCurrentDispersionChange**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

客户端实际射击精度值发生变化时执行绑定函数。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

## Accessors

### defaultDispersionHalfAngle <Score text="defaultDispersionHalfAngle" /> 

• `get` **defaultDispersionHalfAngle**(): `number` 

Get子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径值

• `set` **defaultDispersionHalfAngle**(`NewValue`): `void` 

Set子弹随机发散范围的默认半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


___

### dispersionHalfAngleDecreaseSpeed <Score text="dispersionHalfAngleDecreaseSpeed" /> 

• `get` **dispersionHalfAngleDecreaseSpeed**(): `number` 

Get子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径每秒变化量

• `set` **dispersionHalfAngleDecreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径的收缩速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径每秒变化量 default: |


___

### dispersionHalfAngleIncreasePerShot <Score text="dispersionHalfAngleIncreasePerShot" /> 

• `get` **dispersionHalfAngleIncreasePerShot**(): `number` 

Get子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径增量

• `set` **dispersionHalfAngleIncreasePerShot**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径在每次射击后的扩张值。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径增量 default: |


___

### dispersionHalfAngleIncreaseSpeed <Score text="dispersionHalfAngleIncreaseSpeed" /> 

• `get` **dispersionHalfAngleIncreaseSpeed**(): `number` 

Get子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径每秒变化量

• `set` **dispersionHalfAngleIncreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径的扩张速度。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径每秒变化量 default: |


___

### maxDispersionHalfAngle <Score text="maxDispersionHalfAngle" /> 

• `get` **maxDispersionHalfAngle**(): `number` 

Get子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径值

• `set` **maxDispersionHalfAngle**(`NewValue`): `void` 

Set子弹随机发散范围的最大半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


___

### minDispersionHalfAngle <Score text="minDispersionHalfAngle" /> 

• `get` **minDispersionHalfAngle**(): `number` 

Get子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`number`

圆型范围半径值

• `set` **minDispersionHalfAngle**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围的最小半径。使用示例见类 HotWeaponAccuracyOfFireComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


## Methods

### getCurrentDispersionHalfAngle <Score text="getCurrentDispersionHalfAngle" /> 

• **getCurrentDispersionHalfAngle**(): `number` 

Get当前子弹随机发散范围半径实际值


#### Returns

`number`

当前子弹发散范围半径

___

### getRandomShootDir <Score text="getRandomShootDir" /> 

• **getRandomShootDir**(`shootDir`): [`Vector`](mw.Vector.md) 

获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）

::: warning Precautions

以屏幕中心处生成子弹，可直接套用该矢量
以预设位置处生成子弹，需要以 预设位置+该矢量+最大射击距离 决定着弹点，再计算实际三维空间中子弹的飞行方向

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shootDir` | [`Vector`](mw.Vector.md) |  未发生偏移的最初子弹飞行方向 default: |

#### Returns

[`Vector`](mw.Vector.md)

随机屏幕偏移坐标

___

### getTargetDispersionHalfAngle <Score text="getTargetDispersionHalfAngle" /> 

• **getTargetDispersionHalfAngle**(): `number` 

Get目标子弹随机发散范围半径实际值


#### Returns

`number`

目标子弹发散范围半径
