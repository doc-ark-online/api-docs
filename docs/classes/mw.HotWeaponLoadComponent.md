[Gameplay](../groups/Core.Gameplay.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponLoadComponent" />

热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑

使用示例: 创建一个名为"HotWeaponLoadSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开启上膛组件并设置参数，添加委托的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponLoadSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.loadEnable = true;
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

| Properties |
| :-----|
| **[onEndLoad](mw.HotWeaponLoadComponent.md#onendload)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[onStartLoad](mw.HotWeaponLoadComponent.md#onstartload)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|

| Accessors |
| :-----|
| **[animationAssetId](mw.HotWeaponLoadComponent.md#animationassetid)**(): `string` <br> 获取绑定的动画GUID。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadAfterFireEnabled](mw.HotWeaponLoadComponent.md#loadafterfireenabled)**(): `boolean` <br> 获取是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadDuration](mw.HotWeaponLoadComponent.md#loadduration)**(): `number` <br> 获取上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例|

| Methods |
| :-----|

## Properties

### onEndLoad <Score text="onEndLoad" /> 

• **onEndLoad**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

___

### onStartLoad <Score text="onStartLoad" /> 

• **onStartLoad**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

## Accessors

### animationAssetId <Score text="animationAssetId" /> 

• `get` **animationAssetId**(): `string` 

获取绑定的动画GUID。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

`string`

绑定的动画GUID

• `set` **animationAssetId**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID。使用示例见类 HotWeaponLoadComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### loadAfterFireEnabled <Score text="loadAfterFireEnabled" /> 

• `get` **loadAfterFireEnabled**(): `boolean` 

获取是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

`boolean`

是否开启开火后自动上膛的功能

• `set` **loadAfterFireEnabled**(`enable`): `void` <Badge type="tip" text="other" />

设置是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` |  是否开启开火后自动上膛的功能 |


___

### loadDuration <Score text="loadDuration" /> 

• `get` **loadDuration**(): `number` 

获取上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

`number`

上膛时间

• `set` **loadDuration**(`time`): `void` 

设置上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例


::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  上膛时间 |


## Methods