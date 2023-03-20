[Gameplay](../groups/Gameplay.Gameplay.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponRecoilForceComponent" />

热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复）

使用示例: 如下示例展示热武器后坐力组件使用的基本流程
```ts
// 已有名为 hotWeapon 的热武器功能对象的示例

hotWeapon.recoilForceComponent.onStartRecoilForceServer.add(() => {
    // 开始时应用后坐力效果时在服务端触发
});
// 修改参数
hotWeapon.recoilForceComponent.minHorizontalJitter = 3;
// 验证参数修改效果
hotWeapon.startFire();
```

## Table of contents

| Properties |
| :-----|
| **[onStartRecoilForceClient](Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端后坐力开始广播|
| **[onStartRecoilForceServer](Gameplay.HotWeaponRecoilForceComponent.md#onstartrecoilforceserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器后坐力开始广播|

| Accessors |
| :-----|
| **[maxHorizontalJitter](Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaljitter)**(): `number` <br> 获取相机水平抖动最大值|
| **[maxHorizontalOffset](Gameplay.HotWeaponRecoilForceComponent.md#maxhorizontaloffset)**(): `number` <br> 获取水平偏移最大值|
| **[maxVerticalJitter](Gameplay.HotWeaponRecoilForceComponent.md#maxverticaljitter)**(): `number` <br> 获取相机垂直抖动最大值|
| **[maxVerticalOffset](Gameplay.HotWeaponRecoilForceComponent.md#maxverticaloffset)**(): `number` <br> 获取垂直偏移最大值|
| **[minHorizontalJitter](Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaljitter)**(): `number` <br> 获取相机水平抖动最小值|
| **[minHorizontalOffset](Gameplay.HotWeaponRecoilForceComponent.md#minhorizontaloffset)**(): `number` <br> 获取水平偏移最小值|
| **[minVerticalJitter](Gameplay.HotWeaponRecoilForceComponent.md#minverticaljitter)**(): `number` <br> 获取相机垂直抖动最小值|
| **[minVerticalOffset](Gameplay.HotWeaponRecoilForceComponent.md#minverticaloffset)**(): `number` <br> 获取垂直偏移最小值|

| Methods |
| :-----|
| **[getDeepJitter](Gameplay.HotWeaponRecoilForceComponent.md#getdeepjitter)**(): `number` <br> 获取深度抖动值|
| **[getHorizontalJitter](Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaljitter)**(): `number` <br> 获取水平抖动值|
| **[getHorizontalOffset](Gameplay.HotWeaponRecoilForceComponent.md#gethorizontaloffset)**(): `number` <br> 获取水平偏移值|
| **[getVerticalJitter](Gameplay.HotWeaponRecoilForceComponent.md#getverticaljitter)**(): `number` <br> 获取垂直抖动值|
| **[getVerticalOffset](Gameplay.HotWeaponRecoilForceComponent.md#getverticaloffset)**(): `number` <br> 获取垂直偏移值|

## Properties

### onStartRecoilForceClient <Score text="onStartRecoilForceClient" /> 

• **onStartRecoilForceClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端后坐力开始广播

___

### onStartRecoilForceServer <Score text="onStartRecoilForceServer" /> 

• **onStartRecoilForceServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器后坐力开始广播

## Accessors

### maxHorizontalJitter <Score text="maxHorizontalJitter" /> 

• `get` **maxHorizontalJitter**(): `number` 

获取相机水平抖动最大值


#### Returns

`number`

相机水平抖动最大值

• `set` **maxHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最大值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  相机水平抖动最大值 |


___

### maxHorizontalOffset <Score text="maxHorizontalOffset" /> 

• `get` **maxHorizontalOffset**(): `number` 

获取水平偏移最大值


#### Returns

`number`

水平偏移最大值

• `set` **maxHorizontalOffset**(`value`): `void` 

设置水平偏移最大值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  水平偏移最大值 |


___

### maxVerticalJitter <Score text="maxVerticalJitter" /> 

• `get` **maxVerticalJitter**(): `number` 

获取相机垂直抖动最大值


#### Returns

`number`

相机垂直抖动最大值

• `set` **maxVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最大值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机垂直抖动最大值 |


___

### maxVerticalOffset <Score text="maxVerticalOffset" /> 

• `get` **maxVerticalOffset**(): `number` 

获取垂直偏移最大值


#### Returns

`number`

垂直偏移最大值

• `set` **maxVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最大值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  垂直偏移最大值 |


___

### minHorizontalJitter <Score text="minHorizontalJitter" /> 

• `get` **minHorizontalJitter**(): `number` 

获取相机水平抖动最小值


#### Returns

`number`

相机水平抖动最小值

• `set` **minHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最小值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机水平抖动最小值 |


___

### minHorizontalOffset <Score text="minHorizontalOffset" /> 

• `get` **minHorizontalOffset**(): `number` 

获取水平偏移最小值


#### Returns

`number`

水平偏移最小值

• `set` **minHorizontalOffset**(`value`): `void` 

设置水平偏移最小值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  水平偏移最小值 |


___

### minVerticalJitter <Score text="minVerticalJitter" /> 

• `get` **minVerticalJitter**(): `number` 

获取相机垂直抖动最小值


#### Returns

`number`

相机垂直抖动最小值

• `set` **minVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最小值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机垂直抖动最小值 |


___

### minVerticalOffset <Score text="minVerticalOffset" /> 

• `get` **minVerticalOffset**(): `number` 

获取垂直偏移最小值


#### Returns

`number`

垂直偏移最小值

• `set` **minVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最小值

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  垂直偏移最小值 |


## Methods

### getDeepJitter <Score text="getDeepJitter" /> 

• **getDeepJitter**(): `number` 

获取深度抖动值


#### Returns

`number`

深度抖动值

___

### getHorizontalJitter <Score text="getHorizontalJitter" /> 

• **getHorizontalJitter**(): `number` 

获取水平抖动值


#### Returns

`number`

水平抖动值

___

### getHorizontalOffset <Score text="getHorizontalOffset" /> 

• **getHorizontalOffset**(): `number` 

获取水平偏移值


#### Returns

`number`

水平偏移值

___

### getVerticalJitter <Score text="getVerticalJitter" /> 

• **getVerticalJitter**(): `number` 

获取垂直抖动值


#### Returns

`number`

垂直抖动值

___

### getVerticalOffset <Score text="getVerticalOffset" /> 

• **getVerticalOffset**(): `number` 

获取垂直偏移值


#### Returns

`number`

垂直偏移值
