[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponAccuracyOfFireComponent

# HotWeaponAccuracyOfFireComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAccuracyOfFireComponent" />

热武器射击精度组件，控制热武器发射时，子弹的发散程度，默认状态下为最小发散程度

**`Groups`**

GAMEPLAY

使用示例: 如下示例展示热武器射击精度组件使用的基本流程
```ts
// 已有名为 hotWeapon 的热武器功能对象的示例

hotWeapon.accuracyOfFireComponent.onCurrentDispersionChangedClient.add(() => {
    // 客户端实际射击精度值发生变化时
});
// 修改参数
hotWeapon.accuracyOfFireComponent.defaultDispersionHalfAngle = 3;
// 验证参数修改效果
hotWeapon.startFire();
```ts

## Table of contents

| Properties |
| :-----|
| **[onCurrentDispersionChangedClient](Gameplay.HotWeaponAccuracyOfFireComponent.md#oncurrentdispersionchangedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端实际射击精度值发生变化时执行绑定函数|

| Accessors |
| :-----|
| **[defaultDispersionHalfAngle](Gameplay.HotWeaponAccuracyOfFireComponent.md#defaultdispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的默认半径|
| **[dispersionHalfAngleDecreaseSpeed](Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangledecreasespeed)**(): `number` <br> Get子弹随机发散范围半径的收缩速度|
| **[dispersionHalfAngleIncreasePerShot](Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasepershot)**(): `number` <br> Get子弹随机发散范围半径在每次射击后的扩张值|
| **[dispersionHalfAngleIncreaseSpeed](Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasespeed)**(): `number` <br> Get子弹随机发散范围半径的扩张速度|
| **[maxDispersionHalfAngle](Gameplay.HotWeaponAccuracyOfFireComponent.md#maxdispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的最大半径|
| **[minDispersionHalfAngle](Gameplay.HotWeaponAccuracyOfFireComponent.md#mindispersionhalfangle)**(): `number` <br> Get子弹随机发散范围的最小半径|

| Methods |
| :-----|
| **[bindOpenAccuracyOfFireComponentDelegates](Gameplay.HotWeaponAccuracyOfFireComponent.md#bindopenaccuracyoffirecomponentdelegates)**(): `void` <br> 客户端 绑定射击精度组件代理|
| **[getCurrentDispersionHalfAngle](Gameplay.HotWeaponAccuracyOfFireComponent.md#getcurrentdispersionhalfangle)**(): `number` <br> Get当前子弹随机发散范围半径实际值|
| **[getRandomShootDir](Gameplay.HotWeaponAccuracyOfFireComponent.md#getrandomshootdir)**([`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）|
| **[getTargetDispersionHalfAngle](Gameplay.HotWeaponAccuracyOfFireComponent.md#gettargetdispersionhalfangle)**(): `number` <br> Get目标子弹随机发散范围半径实际值|

## Properties

### onCurrentDispersionChangedClient <Score text="onCurrentDispersionChangedClient" /> 

• **onCurrentDispersionChangedClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端实际射击精度值发生变化时执行绑定函数

## Accessors

### defaultDispersionHalfAngle <Score text="defaultDispersionHalfAngle" /> 

• `get` **defaultDispersionHalfAngle**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围的默认半径


#### Returns

`number`

圆型范围半径值

• `set` **defaultDispersionHalfAngle**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围的默认半径


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


___

### dispersionHalfAngleDecreaseSpeed <Score text="dispersionHalfAngleDecreaseSpeed" /> 

• `get` **dispersionHalfAngleDecreaseSpeed**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围半径的收缩速度


#### Returns

`number`

圆型范围半径每秒变化量

• `set` **dispersionHalfAngleDecreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径的收缩速度

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

• `get` **dispersionHalfAngleIncreasePerShot**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围半径在每次射击后的扩张值


#### Returns

`number`

圆型范围半径增量

• `set` **dispersionHalfAngleIncreasePerShot**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径在每次射击后的扩张值

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

• `get` **dispersionHalfAngleIncreaseSpeed**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围半径的扩张速度


#### Returns

`number`

圆型范围半径每秒变化量

• `set` **dispersionHalfAngleIncreaseSpeed**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围半径的扩张速度

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

• `get` **maxDispersionHalfAngle**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围的最大半径


#### Returns

`number`

圆型范围半径值

• `set` **maxDispersionHalfAngle**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围的最大半径


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


___

### minDispersionHalfAngle <Score text="minDispersionHalfAngle" /> 

• `get` **minDispersionHalfAngle**(): `number` <Badge type="tip" text="other" />

Get子弹随机发散范围的最小半径


#### Returns

`number`

圆型范围半径值

• `set` **minDispersionHalfAngle**(`NewValue`): `void` <Badge type="tip" text="other" />

Set子弹随机发散范围的最小半径

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewValue` | `number` |  新设置的圆型范围半径值 default: |


## Methods

### bindOpenAccuracyOfFireComponentDelegates <Score text="bindOpenAccuracyOfFireComponentDelegates" /> 

• **bindOpenAccuracyOfFireComponentDelegates**(): `void` <Badge type="tip" text="other" />

客户端 绑定射击精度组件代理



___

### getCurrentDispersionHalfAngle <Score text="getCurrentDispersionHalfAngle" /> 

• **getCurrentDispersionHalfAngle**(): `number` <Badge type="tip" text="other" />

Get当前子弹随机发散范围半径实际值


#### Returns

`number`

当前子弹发散范围半径

___

### getRandomShootDir <Score text="getRandomShootDir" /> 

• **getRandomShootDir**(`ShootDirNoDispersion`): [`Vector`](Type.Vector.md) <Badge type="tip" text="other" />

获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）

::: warning Precautions

以屏幕中心处生成子弹，可直接套用该矢量
以预设位置处生成子弹，需要以 预设位置+该矢量+最大射击距离 决定着弹点，再计算实际三维空间中子弹的飞行方向

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ShootDirNoDispersion` | [`Vector`](Type.Vector.md) |  未发生偏移的最初子弹飞行方向 default: |

#### Returns

[`Vector`](Type.Vector.md)

随机屏幕偏移坐标

___

### getTargetDispersionHalfAngle <Score text="getTargetDispersionHalfAngle" /> 

• **getTargetDispersionHalfAngle**(): `number` <Badge type="tip" text="other" />

Get目标子弹随机发散范围半径实际值


#### Returns

`number`

目标子弹发散范围半径
