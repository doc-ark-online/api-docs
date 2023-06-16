[Gameplay](../groups/Core.Gameplay.md) / HotWeaponRecoilForceComponent

# HotWeaponRecoilForceComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponRecoilForceComponent" />

热武器后坐力组件，用于在发射时控制角色的视角的抖动（会自动恢复）和偏移（不会自动恢复）

使用示例: 创建一个名为"HotWeaponRecoilForceSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器启用后坐力组件，设置组件参数，并添加委托的效果,代码如下:
```ts
@Core.Class
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

            hotWeapon.recoilForceComponent.onStartRecoilForceServer.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.recoilForceComponent.onStartRecoilForceClient.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });
        }
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onStartRecoilForceClient](mw.HotWeaponRecoilForceComponent.md#onstartrecoilforceclient)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[onStartRecoilForceServer](mw.HotWeaponRecoilForceComponent.md#onstartrecoilforceserver)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例|

| Accessors |
| :-----|
| **[maxHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#maxhorizontaljitter)**(): `number` <br> 获取相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#maxhorizontaloffset)**(): `number` <br> 获取水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxVerticalJitter](mw.HotWeaponRecoilForceComponent.md#maxverticaljitter)**(): `number` <br> 获取相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[maxVerticalOffset](mw.HotWeaponRecoilForceComponent.md#maxverticaloffset)**(): `number` <br> 获取垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#minhorizontaljitter)**(): `number` <br> 获取相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#minhorizontaloffset)**(): `number` <br> 获取水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minVerticalJitter](mw.HotWeaponRecoilForceComponent.md#minverticaljitter)**(): `number` <br> 获取相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|
| **[minVerticalOffset](mw.HotWeaponRecoilForceComponent.md#minverticaloffset)**(): `number` <br> 获取垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例|

| Methods |
| :-----|
| **[getDeepJitter](mw.HotWeaponRecoilForceComponent.md#getdeepjitter)**(): `number` <br> 获取深度抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getHorizontalJitter](mw.HotWeaponRecoilForceComponent.md#gethorizontaljitter)**(): `number` <br> 获取水平抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getHorizontalOffset](mw.HotWeaponRecoilForceComponent.md#gethorizontaloffset)**(): `number` <br> 获取水平偏移值|
| **[getVerticalJitter](mw.HotWeaponRecoilForceComponent.md#getverticaljitter)**(): `number` <br> 获取垂直抖动值。使用示例见方法 getHorizontalOffset 使用示例|
| **[getVerticalOffset](mw.HotWeaponRecoilForceComponent.md#getverticaloffset)**(): `number` <br> 获取垂直偏移值。使用示例见方法 getHorizontalOffset 使用示例|

## Properties

### onStartRecoilForceClient <Score text="onStartRecoilForceClient" /> 

• **onStartRecoilForceClient**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

客户端后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例

___

### onStartRecoilForceServer <Score text="onStartRecoilForceServer" /> 

• **onStartRecoilForceServer**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器后坐力开始广播。使用示例见类 HotWeaponRecoilForceComponent 使用示例

## Accessors

### maxHorizontalJitter <Score text="maxHorizontalJitter" /> 

• `get` **maxHorizontalJitter**(): `number` 

获取相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

相机水平抖动最大值

• `set` **maxHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

水平偏移最大值

• `set` **maxHorizontalOffset**(`value`): `void` 

设置水平偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


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

获取相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

相机垂直抖动最大值

• `set` **maxVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

垂直偏移最大值

• `set` **maxVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最大值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

相机水平抖动最小值

• `set` **minHorizontalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机水平抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

水平偏移最小值

• `set` **minHorizontalOffset**(`value`): `void` 

设置水平偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


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

获取相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

相机垂直抖动最小值

• `set` **minVerticalJitter**(`value`): `void` <Badge type="tip" text="other" />

设置相机垂直抖动最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`number`

垂直偏移最小值

• `set` **minVerticalOffset**(`value`): `void` <Badge type="tip" text="other" />

设置垂直偏移最小值。使用示例见类 HotWeaponRecoilForceComponent 使用示例

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

获取深度抖动值。使用示例见方法 getHorizontalOffset 使用示例


#### Returns

`number`

深度抖动值

___

### getHorizontalJitter <Score text="getHorizontalJitter" /> 

• **getHorizontalJitter**(): `number` 

获取水平抖动值。使用示例见方法 getHorizontalOffset 使用示例


#### Returns

`number`

水平抖动值

___

### getHorizontalOffset <Score text="getHorizontalOffset" /> 

• **getHorizontalOffset**(): `number` 

获取水平偏移值


使用示例: 创建一个名为"HotWeaponRecoilForceSample2"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器后坐力组件获取当前关键状态的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponRecoilForceSample2 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        const horizontalOffset = hotWeapon.recoilForceComponent.getHorizontalOffset();
        const verticalOffset = hotWeapon.recoilForceComponent.getVerticalOffset();
        const horizontalJitter = hotWeapon.recoilForceComponent.getHorizontalJitter();
        const verticalJitter = hotWeapon.recoilForceComponent.getVerticalJitter();
        const deepJitter = hotWeapon.recoilForceComponent.getDeepJitter();
    }
}
```

#### Returns

`number`

水平偏移值

___

### getVerticalJitter <Score text="getVerticalJitter" /> 

• **getVerticalJitter**(): `number` 

获取垂直抖动值。使用示例见方法 getHorizontalOffset 使用示例


#### Returns

`number`

垂直抖动值

___

### getVerticalOffset <Score text="getVerticalOffset" /> 

• **getVerticalOffset**(): `number` 

获取垂直偏移值。使用示例见方法 getHorizontalOffset 使用示例


#### Returns

`number`

垂直偏移值
