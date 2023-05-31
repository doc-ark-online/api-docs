[Gameplay](../groups/Gameplay.Gameplay.md) / HotWeaponLoadComponent

# HotWeaponLoadComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponLoadComponent" />

热武器上膛组件，负责维护热武器播放上膛动作的相关参数，和逻辑

使用示例: 创建一个名为"HotWeaponLoadSample1"的脚本,放置在对象管理器中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开启上膛组件并设置参数，添加委托的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponLoadSample1 extends Core.Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as Gameplay.HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.loadEnable = true;
            hotWeapon.loadComponent.loadDuration = 1
            hotWeapon.loadComponent.loadAfterFireEnable = true;
            hotWeapon.loadComponent.animationGuid = "4172";
            hotWeapon.loadComponent.onStartLoadServer.add(() => { console.log("loadComponent.onStartLoadClient") });
            hotWeapon.loadComponent.onEndLoadServer.add(() => { console.log("loadComponent.onEndLoadClient") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.loadComponent.onStartLoadClient.add(() => { console.log("loadComponent.onStartLoadClient") });
            hotWeapon.loadComponent.onEndLoadClient.add(() => { console.log("loadComponent.onEndLoadClient") });
        }
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onEndLoadClient](Gameplay.HotWeaponLoadComponent.md#onendloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[onEndLoadServer](Gameplay.HotWeaponLoadComponent.md#onendloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[onStartLoadClient](Gameplay.HotWeaponLoadComponent.md#onstartloadclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[onStartLoadServer](Gameplay.HotWeaponLoadComponent.md#onstartloadserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例|

| Accessors |
| :-----|
| **[animationGuid](Gameplay.HotWeaponLoadComponent.md#animationguid)**(): `string` <br> 获取绑定的动画GUID。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadAfterFireEnable](Gameplay.HotWeaponLoadComponent.md#loadafterfireenable)**(): `boolean` <br> 获取是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例|
| **[loadDuration](Gameplay.HotWeaponLoadComponent.md#loadduration)**(): `number` <br> 获取上膛时间。使用示例见类 HotWeaponLoadComponent 使用示例|

| Methods |
| :-----|
| **[hadAnimationGuid](Gameplay.HotWeaponLoadComponent.md#hadanimationguid)**(): `boolean` <br> 是否有动画GUID|

## Properties

### onEndLoadClient <Score text="onEndLoadClient" /> 

• **onEndLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

___

### onEndLoadServer <Score text="onEndLoadServer" /> 

• **onEndLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器上膛结束时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

___

### onStartLoadClient <Score text="onStartLoadClient" /> 

• **onStartLoadClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

___

### onStartLoadServer <Score text="onStartLoadServer" /> 

• **onStartLoadServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器开始上膛时执行绑定函数。使用示例见类 HotWeaponLoadComponent 使用示例

## Accessors

### animationGuid <Score text="animationGuid" /> 

• `get` **animationGuid**(): `string` 

获取绑定的动画GUID。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

`string`

绑定的动画GUID

• `set` **animationGuid**(`GUID`): `void` <Badge type="tip" text="other" />

设置动画 GUID。使用示例见类 HotWeaponLoadComponent 使用示例

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  需要设置的蒙太奇动画 GUID |


___

### loadAfterFireEnable <Score text="loadAfterFireEnable" /> 

• `get` **loadAfterFireEnable**(): `boolean` 

获取是否开启开火后自动上膛的功能。使用示例见类 HotWeaponLoadComponent 使用示例


#### Returns

`boolean`

是否开启开火后自动上膛的功能

• `set` **loadAfterFireEnable**(`enable`): `void` <Badge type="tip" text="other" />

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

### hadAnimationGuid <Score text="hadAnimationGuid" /> 

• **hadAnimationGuid**(): `boolean` 

是否有动画GUID


#### Returns

`boolean`

是否有动画GUID
