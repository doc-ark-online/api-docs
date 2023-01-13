[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponRecoilForceComponent" />

热武器 - 后坐力组件

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

• `get` **maxHorizontalJitter**(): `number` <Badge type="tip" text="other" />

获取相机水平抖动最大值


#### Returns

`number`

相机水平抖动最大值

• `set` **maxHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最大值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  相机水平抖动最大值 |


___

### maxHorizontalOffset <Score text="maxHorizontalOffset" /> 

• `get` **maxHorizontalOffset**(): `number` <Badge type="tip" text="other" />

获取水平偏移最大值


#### Returns

`number`

水平偏移最大值

• `set` **maxHorizontalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置水平偏移最大值

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  水平偏移最大值 |


___

### maxVerticalJitter <Score text="maxVerticalJitter" /> 

• `get` **maxVerticalJitter**(): `number` <Badge type="tip" text="other" />

获取相机垂直抖动最大值


#### Returns

`number`

相机垂直抖动最大值

• `set` **maxVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最大值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机垂直抖动最大值 |


___

### maxVerticalOffset <Score text="maxVerticalOffset" /> 

• `get` **maxVerticalOffset**(): `number` <Badge type="tip" text="other" />

获取垂直偏移最大值


#### Returns

`number`

垂直偏移最大值

• `set` **maxVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最大值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  垂直偏移最大值 |


___

### minHorizontalJitter <Score text="minHorizontalJitter" /> 

• `get` **minHorizontalJitter**(): `number` <Badge type="tip" text="other" />

获取相机水平抖动最小值


#### Returns

`number`

相机水平抖动最小值

• `set` **minHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最小值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机水平抖动最小值 |


___

### minHorizontalOffset <Score text="minHorizontalOffset" /> 

• `get` **minHorizontalOffset**(): `number` <Badge type="tip" text="other" />

获取水平偏移最小值


#### Returns

`number`

水平偏移最小值

• `set` **minHorizontalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置水平偏移最小值

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  水平偏移最小值 |


___

### minVerticalJitter <Score text="minVerticalJitter" /> 

• `get` **minVerticalJitter**(): `number` <Badge type="tip" text="other" />

获取相机垂直抖动最小值


#### Returns

`number`

相机垂直抖动最小值

• `set` **minVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最小值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  新相机垂直抖动最小值 |


___

### minVerticalOffset <Score text="minVerticalOffset" /> 

• `get` **minVerticalOffset**(): `number` <Badge type="tip" text="other" />

获取垂直偏移最小值


#### Returns

`number`

垂直偏移最小值

• `set` **minVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最小值


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  垂直偏移最小值 |


## Methods

### getDeepJitter <Score text="getDeepJitter" /> 

▸ **getDeepJitter**(): `number` <Badge type="tip" text="other" />

获取深度抖动值


#### Returns

`number`

深度抖动值

___

### getHorizontalJitter <Score text="getHorizontalJitter" /> 

▸ **getHorizontalJitter**(): `number` <Badge type="tip" text="other" />

获取水平抖动值


#### Returns

`number`

水平抖动值

___

### getHorizontalOffset <Score text="getHorizontalOffset" /> 

▸ **getHorizontalOffset**(): `number` <Badge type="tip" text="other" />

获取水平偏移值


#### Returns

`number`

水平偏移值

___

### getVerticalJitter <Score text="getVerticalJitter" /> 

▸ **getVerticalJitter**(): `number` <Badge type="tip" text="other" />

获取垂直抖动值


#### Returns

`number`

垂直抖动值

___

### getVerticalOffset <Score text="getVerticalOffset" /> 

▸ **getVerticalOffset**(): `number` <Badge type="tip" text="other" />

获取垂直偏移值


#### Returns

`number`

垂直偏移值
