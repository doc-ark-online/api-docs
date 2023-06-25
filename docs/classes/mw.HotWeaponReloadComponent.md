[Gameplay](../groups/Core.Gameplay.md) / HotWeaponReloadComponent

# HotWeaponReloadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponReloadComponent" />

热武器换弹组件，负责维护热武器换弹动作的相关参数和逻辑

使用示例: 创建一个名为"HotWeaponReloadSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器启用了换弹组件，设置参数，添加委托的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponReloadSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {

            hotWeapon.reloadEnable = true;
            hotWeapon.reloadComponent.reloadDuration = 2;
            hotWeapon.reloadComponent.animationGuid = "4171";

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

| Properties |
| :-----|
| **[onEndReload](mw.HotWeaponReloadComponent.md#onendreload)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 结束换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例|
| **[onStartReload](mw.HotWeaponReloadComponent.md#onstartreload)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 开始换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例|

| Accessors |
| :-----|
| **[animationAssetId](mw.HotWeaponReloadComponent.md#animationassetid)**(): `string` <br> 获取绑定的动画GUID。使用示例见类 HotWeaponReloadComponent 使用示例|
| **[reloadDuration](mw.HotWeaponReloadComponent.md#reloadduration)**(): `number` <br> 获取换弹时间。使用示例见类 HotWeaponReloadComponent 使用示例|

| Methods |
| :-----|

## Properties

### onEndReload <Score text="onEndReload" /> 

• **onEndReload**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

结束换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例

___

### onStartReload <Score text="onStartReload" /> 

• **onStartReload**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

开始换弹时执行绑定函数。使用示例见类 HotWeaponReloadComponent 使用示例

## Accessors

### animationAssetId <Score text="animationAssetId" /> 

• `get` **animationAssetId**(): `string` 

获取绑定的动画GUID。使用示例见类 HotWeaponReloadComponent 使用示例


#### Returns

`string`

绑定的动画GUID

• `set` **animationAssetId**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID。使用示例见类 HotWeaponReloadComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### reloadDuration <Score text="reloadDuration" /> 

• `get` **reloadDuration**(): `number` 

获取换弹时间。使用示例见类 HotWeaponReloadComponent 使用示例


#### Returns

`number`

是换弹时间

• `set` **reloadDuration**(`time`): `void` <Badge type="tip" text="other" />

设置换弹时间。使用示例见类 HotWeaponReloadComponent 使用示例

调用端自动广播

::: warning Precautions

装备热武器前仅服务器调用，装备后双端都可调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  新换弹时间 |


## Methods