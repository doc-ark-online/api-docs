[GAMEPLAY](../groups/Core.GAMEPLAY.md) / HotWeapon

# HotWeapon <Badge type="tip" text="Class" /> <Score text="HotWeapon" />

<p class="content-big">

热武器

</p>

<p class="content-big">

热武器功能是指游戏中武器的使用和管理机制，它使得玩家可以在战斗中使用各种类型的武器。

</p>

<p class="content-big">

我们可以将热武器功能类比为现实生活中的枪械。想象你正在玩一款真实的射击游戏。你手持一把火力强大的热武器，可以进行射击。当你按下射击按钮时，武器会发射子弹，产生火花和声音效果，仿佛你真的在战斗中。

</p>

<p class="content-big">

射击并不是无限制的。你的武器需要装填弹药才能进行射击。所以，你需要按下上膛按钮来将新的弹药装入武器。这样，你就能够继续射击，而不必担心弹药用尽。

</p>

<p class="content-big">

当你的弹药接近用尽时，你需要进行换弹操作。你按下换弹按钮，角色会迅速将弹夹从武器中取出，并插入一新的装满子弹的弹夹。这样，你就能够继续战斗，而不必等待重新装填现有弹夹。

</p>

<p class="content-big">

在射击过程中，你会感受到武器的后坐力效果。后坐力是由于子弹离开枪口时的反冲所产生的力量。你会感觉到武器稍微后退，仿佛你真的在使用真实的武器。这为游戏增添了一定的现实感和沉浸感。

</p>

<p class="content-big">

热武器功能为玩家提供了更多的战术选择和策略性。

</p>

<p class="content-big">

总之

</p>

<p class="content-big">

1. 射击 - 玩家按下开火键,武器会射出子弹或光线。

</p>

<p class="content-big">

2. 上膛 - 每次射击后,都需要加载下一发弹药进入膛室。

</p>

<p class="content-big">

3. 换弹 - 当弹夹为空时,需要更换新的弹夹。

</p>

<p class="content-big">

4. 后坐力 - 射击时会产生后坐力,让准星会稍稍偏移。

</p>

<p class="content-big">

equip是热武器的核心函数，人物和热武器交互的通道。当热武器实例调用equip接口，并传入角色及角色插槽相关参数，传入的角色才可与热武器交互。

</p>

<p class="content-big">

HotWeapon类内部已封装好，这些功能都可以当你创建出一个HotWeapon对象时使用。创建出一个热武器实例后，可调用HotWeapon类中accuracyOfFireComponent、aimComponent、fireComponent等变量，调节功能细节。

</p>

::: warning Precautions

当装备上玩家时，此对象的功能才能生效。

:::

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample1"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,在本地资源库中搜索80484、4172、4171动画资源,拖入对象管理器中的优先加载目录。运行游戏,按键1、2、3、4你将在场景中看到一个热武器设置参数，添加委托，绑定按键，以及人物换弹的效果,代码如下:

</p>

```ts
 @Component
 export default class HotWeaponSample1 extends Script {
     protected onStart(): void {
         // 构造
         const hotWeapon = this.gameObject as HotWeapon;

         if (SystemUtil.isServer()) {
             hotWeapon.fireComponent.isFireOnScreenCenter = false
             hotWeapon.fireComponent.clipSize = 50
             hotWeapon.fireComponent.fireInterval = 0
             hotWeapon.fireComponent.multipleShot = 3
             hotWeapon.fireComponent.isFireOnScreenCenter = false
             hotWeapon.fireComponent.offsetOfFireOnScreenCenter = new Vector(100, 30, 0);
             // 设置参数
             hotWeapon.fireComponent.animationAssetId = "80484";
             hotWeapon.fireComponent.fireMode = HotWeaponFireMode.SingleFire;

             hotWeapon.aimEnabled = true;
             // 切换瞄准时的 第一/第三 人称
             hotWeapon.aimComponent.aimMode = HotWeaponAimMode.ThirdPerson;
             // 设置模拟瞄准时的倍镜放大倍数(仅第一人称瞄准时生效，范围1~18)
             hotWeapon.aimComponent.aimingZoom = 16;
             hotWeapon.aimComponent.cameraOffsetDistanceInThirdPersonMode = 300;

             hotWeapon.loadEnabled = true;
             hotWeapon.loadComponent.loadDuration = 1
             hotWeapon.loadComponent.loadAfterFireEnabled = true;
             hotWeapon.loadComponent.animationAssetId = "4172";

             hotWeapon.reloadEnabled = true;
             hotWeapon.reloadComponent.reloadDuration = 2;
             hotWeapon.reloadComponent.animationAssetId = "4171";

             hotWeapon.recoilForceEnabled = true;
             hotWeapon.recoilForceComponent.minHorizontalOffset = 1;
             hotWeapon.recoilForceComponent.maxHorizontalOffset = 1;
             hotWeapon.recoilForceComponent.minVerticalOffset = 1;
             hotWeapon.recoilForceComponent.maxVerticalOffset = 1;
             hotWeapon.recoilForceComponent.minHorizontalJitter = 1;
             hotWeapon.recoilForceComponent.maxHorizontalJitter = 1;
             hotWeapon.recoilForceComponent.minVerticalJitter = 1;
             hotWeapon.recoilForceComponent.maxVerticalJitter = 1;

             hotWeapon.accuracyOfFireEnabled = true;
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

             hotWeapon.onEquip.add((owner) => { console.log("热武器装备好了后会在服务器端触发回调") });
             hotWeapon.onUnequip.add(() => { console.log("onUnequippedServer") });

             hotWeapon.fireComponent.onStartFire.add(() => { console.log("fireComponent.onStartFireClient") });
             hotWeapon.fireComponent.onEndFire.add(() => { console.log("fireComponent.onEndFireClient") });
             hotWeapon.fireComponent.onEndContinuousFire.add(() => { console.log("fireComponent.onEndFireClient") });

             hotWeapon.loadComponent.onStartLoad.add(() => { console.log("loadComponent.onStartLoadClient") });
             hotWeapon.loadComponent.onEndLoad.add(() => { console.log("loadComponent.onEndLoadClient") });

             hotWeapon.recoilForceComponent.onStartRecoil.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });

             hotWeapon.reloadComponent.onStartReload.add(() => { console.log("reloadComponent.onStartReloadClient") });
             hotWeapon.reloadComponent.onEndReload.add(() => { console.log("reloadComponent.onEndReloadClient") });

             hotWeapon.aimComponent.onStartAim.add(() => { console.log("aimComponent.onAimStartClient") });
             hotWeapon.aimComponent.onEndAim.add(() => { console.log("aimComponent.onAimEndClient") });

             mw.Event.addClientListener("weaponEquipment", (player) => {
                 // 目前装备方法只能在服务端调用
                 hotWeapon.equip(player.character, HumanoidSlotType.RightHand);
             });
         } else if (SystemUtil.isClient()) {
             hotWeapon.onEquip.add(() => { console.log("onEquippedClient") });
             hotWeapon.onUnequip.add(() => { console.log("onUnequippedClient") });

             hotWeapon.fireComponent.onStartFire.add(() => { console.log("fireComponent.onStartFireClient") });
             hotWeapon.fireComponent.onEndFire.add(() => { console.log("fireComponent.onEndFireClient") });

             hotWeapon.loadComponent.onStartLoad.add(() => { console.log("loadComponent.onStartLoadClient") });
             hotWeapon.loadComponent.onEndLoad.add(() => { console.log("loadComponent.onEndLoadClient") });

             hotWeapon.recoilForceComponent.onStartRecoil.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });

             hotWeapon.reloadComponent.onStartReload.add(() => { console.log("reloadComponent.onStartReloadClient") });
             hotWeapon.reloadComponent.onEndReload.add(() => { console.log("reloadComponent.onEndReloadClient") });

             hotWeapon.accuracyOfFireComponent.onCurrentDispersionChange.add(() => { console.log("accuracyOfFireComponent.onCurrentDispersionChangedClient") });

             hotWeapon.aimComponent.onStartAim.add(() => { console.log("aimComponent.onAimStartClient") });
             hotWeapon.aimComponent.onEndAim.add(() => { console.log("aimComponent.onAimEndClient") });

             // 装备
             InputUtil.onKeyDown(Keys.One, () => {
                 mw.Event.dispatchToServer("weaponEquipment");
             });

             InputUtil.onKeyDown(Keys.Two, () => {
                 // 开始执行操作
                 if (hotWeapon.getCurrentState() == HotWeaponState.Firing) {
                     hotWeapon.stopFire();
                 } else {
                     hotWeapon.startFire();
                 }
             });

               InputUtil.onKeyDown(Keys.Three, () => {
                 // 开始执行操作
                 if (hotWeapon.getCurrentState() == HotWeaponState.Reloading) {
                     hotWeapon.breakReload();
                 } else {
                     hotWeapon.reload(30);
                 }
             });

             InputUtil.onKeyDown(Keys.Four, () => {
                 // 开始执行操作
                 if (hotWeapon.getCurrentState() == HotWeaponState.Loading) {
                     hotWeapon.breakLoad();
                 } else {
                     hotWeapon.load();
                 }
             });
         }
     }
 }
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`HotWeapon`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new GameObject**()  |
| :----- |
:::


### Properties <Score text="Properties" /> 
| **[accuracyOfFireComponent](mw.HotWeapon.md#accuracyoffirecomponent)**: [`HotWeaponAccuracyOfFireComponent`](mw.HotWeaponAccuracyOfFireComponent.md)  |
| :-----|
| 射击精度功能。使用示例见类 HotWeaponAccuracyOfFireComponent|
| **[aimComponent](mw.HotWeapon.md#aimcomponent)**: [`HotWeaponAimComponent`](mw.HotWeaponAimComponent.md)  |
| 瞄准功能。使用示例见类 HotWeaponAimComponent|
| **[fireComponent](mw.HotWeapon.md#firecomponent)**: [`HotWeaponFireComponent`](mw.HotWeaponFireComponent.md)  |
| 射击功能。使用示例见类 HotWeaponFireComponent|
| **[loadComponent](mw.HotWeapon.md#loadcomponent)**: [`HotWeaponLoadComponent`](mw.HotWeaponLoadComponent.md)  |
| 上膛功能。使用示例见类 HotWeaponLoadComponent|
| **[onEquip](mw.HotWeapon.md#onequip)**: `MulticastDelegateInterface`<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>  |
| 服务器装备时执行绑定函数|
| **[onUnequip](mw.HotWeapon.md#onunequip)**: `MulticastDelegateInterface`<() => `void`\>  |
| 服务器卸载时执行绑定函数。使用示例见属性 onEquipped|
| **[recoilForceComponent](mw.HotWeapon.md#recoilforcecomponent)**: [`HotWeaponRecoilForceComponent`](mw.HotWeaponRecoilForceComponent.md)  |
| 后坐力功能。使用示例见类 HotWeaponRecoilForceComponent|
| **[reloadComponent](mw.HotWeapon.md#reloadcomponent)**: [`HotWeaponReloadComponent`](mw.HotWeaponReloadComponent.md)  |
| 换弹功能。使用示例见类 HotWeaponReloadComponent|


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[accuracyOfFireEnabled](mw.HotWeapon.md#accuracyoffireenabled)**(): `boolean`  |
| :-----|
| 设置是否开启射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[aimEnabled](mw.HotWeapon.md#aimenabled)**(): `boolean`  |
| 设置是否开启瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例|
| **[loadEnabled](mw.HotWeapon.md#loadenabled)**(): `boolean`  |
| 设置是否开启上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例|
| **[recoilForceEnabled](mw.HotWeapon.md#recoilforceenabled)**(): `boolean`  |
| 设置是否开启后座力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例|
| **[reloadEnabled](mw.HotWeapon.md#reloadenabled)**(): `boolean`  |
| 设置是否开启换弹组件。启用/关闭后坐力组件示例代码见类 HotWeaponReloadComponent 使用示例|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`  |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`  |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`  |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`  |
| 设置物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)  |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)  |
| 设置父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`  |
| 设置当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[breakLoad](mw.HotWeapon.md#breakload)**(): `void`  |
| :-----|
| 打断上膛。使用示例见方法 reload 使用示例|
| **[breakReload](mw.HotWeapon.md#breakreload)**(): `void`  |
| 打断换弹。使用示例见方法 reload 使用示例|
| **[cloneComponentsData](mw.HotWeapon.md#clonecomponentsdata)**(`otherHotWeapon`: [`HotWeapon`](mw.HotWeapon.md)): `void`  |
| 从传入的热武器逻辑对象中拷贝所有组件数据|
| **[equip](mw.HotWeapon.md#equip)**(`character`: [`Character`](mw.Character.md), `slotName`: [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md)): `void`  |
| 装备热武器到目标角色的指定插槽位置|
| **[getBulletLocWhileSpawnOnScreenCenter](mw.HotWeapon.md#getbulletlocwhilespawnonscreencenter)**(): [`Vector`](mw.Vector.md)  |
| 使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location|
| **[getCurrentOwner](mw.HotWeapon.md#getcurrentowner)**(): [`Character`](mw.Character.md)  |
| 获取当前热武器的所有者|
| **[getCurrentState](mw.HotWeapon.md#getcurrentstate)**(): [`HotWeaponState`](../enums/mw.HotWeaponState.md)  |
| 获取当前热武器状态|
| **[getDefaultCrossHairSize](mw.HotWeapon.md#getdefaultcrosshairsize)**(`maxShootRange`: `number`): `number`  |
| 传入Player和最大射程，获取默认准星大小|
| **[getShootDirWithDispersion](mw.HotWeapon.md#getshootdirwithdispersion)**(`StartLoc`: [`Vector`](mw.Vector.md), `ShootRange`: `number`): [`Vector`](mw.Vector.md)  |
| 非屏幕中心生成子弹模式下，获取子弹飞行方向|
| **[load](mw.HotWeapon.md#load)**(): `void`  |
| 上膛|
| **[reload](mw.HotWeapon.md#reload)**(`bulletSize`: `number`): `void`  |
| 换弹|
| **[startFire](mw.HotWeapon.md#startfire)**(): `void`  |
| 开火|
| **[stopFire](mw.HotWeapon.md#stopfire)**(): `void`  |
| 停止开火。使用示例见方法 startFire 使用示例|
| **[unequip](mw.HotWeapon.md#unequip)**(): `void`  |
| 卸载热武器。使用示例见方法 equipment|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| :-----|
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)  |
| 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void`  |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`  |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]  |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): [`Script`](mw.Script.md)[]  |
| 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`  |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void`  |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>  |
| 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>  |
| 构造一个物体|
:::


## Properties

### accuracyOfFireComponent <Score text="accuracyOfFireComponent" /> 

• **accuracyOfFireComponent**: [`HotWeaponAccuracyOfFireComponent`](mw.HotWeaponAccuracyOfFireComponent.md)

射击精度功能。使用示例见类 HotWeaponAccuracyOfFireComponent

___

### aimComponent <Score text="aimComponent" /> 

• **aimComponent**: [`HotWeaponAimComponent`](mw.HotWeaponAimComponent.md)

瞄准功能。使用示例见类 HotWeaponAimComponent

___

### fireComponent <Score text="fireComponent" /> 

• **fireComponent**: [`HotWeaponFireComponent`](mw.HotWeaponFireComponent.md)

射击功能。使用示例见类 HotWeaponFireComponent

___

### loadComponent <Score text="loadComponent" /> 

• **loadComponent**: [`HotWeaponLoadComponent`](mw.HotWeaponLoadComponent.md)

上膛功能。使用示例见类 HotWeaponLoadComponent

___

### onEquip <Score text="onEquip" /> 

• **onEquip**: `MulticastDelegateInterface`<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

服务器装备时执行绑定函数

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample2"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器添加装备委托的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample2 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.onEquipped.add((owner) => { console.log("热武器装备好了后会在服务器端触发回调") });
            hotWeapon.onUnequipped.add(() => { console.log("onUnequippedServer") });
        } else if (SystemUtil.isClient()) {
            hotWeapon.onEquipped.add(() => { console.log("onEquipped Client") });
            hotWeapon.onUnequipped.add(() => { console.log("onUnequipped Client") });
        }
    }
}
```

___

### onUnequip <Score text="onUnequip" /> 

• **onUnequip**: `MulticastDelegateInterface`<() => `void`\>

服务器卸载时执行绑定函数。使用示例见属性 onEquipped

___

### recoilForceComponent <Score text="recoilForceComponent" /> 

• **recoilForceComponent**: [`HotWeaponRecoilForceComponent`](mw.HotWeaponRecoilForceComponent.md)

后坐力功能。使用示例见类 HotWeaponRecoilForceComponent

___

### reloadComponent <Score text="reloadComponent" /> 

• **reloadComponent**: [`HotWeaponReloadComponent`](mw.HotWeaponReloadComponent.md)

换弹功能。使用示例见类 HotWeaponReloadComponent

## Accessors

### accuracyOfFireEnabled <Score text="accuracyOfFireEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **accuracyOfFireEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **accuracyOfFireEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启了射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

| `boolean` | 是否开启了射击精度组件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| `isEnabled` `boolean` |  射击精度组件启用状态 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### aimEnabled <Score text="aimEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **aimEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **aimEnabled**(`value`): `void` <Badge type="tip" text="server" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启了瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例


#### Returns

| `boolean` | 是否开启了瞄准组件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| `value` `boolean` |  瞄准组件启用状态 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### loadEnabled <Score text="loadEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **loadEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **loadEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启了上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例


#### Returns

| `boolean` | 是否开启了上膛组件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| `isEnabled` `boolean` |  上膛组件启用状态 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### recoilForceEnabled <Score text="recoilForceEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **recoilForceEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **recoilForceEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启了后坐力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

| `boolean` | 是否开启了后坐力组件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启后座力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| `isEnabled` `boolean` |  后座力组件启用状态 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### reloadEnabled <Score text="reloadEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **reloadEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **reloadEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否开启了换弹组件。启用/关闭换弹组件示例代码见类 HotWeaponReloadComponent 使用示例


#### Returns

| `boolean` | 是否开启了换弹组件 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启换弹组件。启用/关闭后坐力组件示例代码见类 HotWeaponReloadComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| `isEnabled` `boolean` |  换弹组件启用状态 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods
___

### breakLoad <Score text="breakLoad" /> 

• **breakLoad**(): `void` <Badge type="tip" text="other" />

打断上膛。使用示例见方法 reload 使用示例


调用端自动广播

___

### breakReload <Score text="breakReload" /> 

• **breakReload**(): `void` <Badge type="tip" text="other" />

打断换弹。使用示例见方法 reload 使用示例


调用端自动广播

___

### cloneComponentsData <Score text="cloneComponentsData" /> 

• **cloneComponentsData**(`otherHotWeapon`): `void` <Badge type="tip" text="server" />

从传入的热武器逻辑对象中拷贝所有组件数据

#### Parameters

| `otherHotWeapon` [`HotWeapon`](mw.HotWeapon.md) |  数据源 |
| :------ | :------ |



::: warning Precautions

无法拷贝代理委托绑定事件，完成拷贝后，数据同步到客户端有较短延迟

:::

___

### equip <Score text="equip" /> 

• **equip**(`character`, `slotName`): `void` <Badge type="tip" text="other" />

装备热武器到目标角色的指定插槽位置

#### Parameters

| `character` [`Character`](mw.Character.md) |  该武器的装备对象 default: |
| :------ | :------ |
| `slotName` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) |  要装备的插槽名称 default: |


调用端自动广播

::: warning Precautions

- S端调用可完成整个装备流程
 - C端调用主要目的是刷新热武器TS层对象中关于持有者的数据
 - 请确保TS层热武器构造完成之后再调用该函数，否则可能出现C端没有成功获取到持有者数据的问题
 - 热武器GameObject加载完毕后会有回调，请在客户端能异步获取新构造的热武器后，在Ready()这个异步方法中填写后续逻辑

:::

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample7"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器装备到角色的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample7 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isServer()) {
           mw.Event.addClientListener("weaponEquipment", (player) => {
               // 目前装备方法只能在服务端调用
               hotWeapon.equip(player.character, HumanoidSlotType.RightHand);
           });
       } else if (SystemUtil.isClient()) {
           // 装备
           InputUtil.onKeyDown(Keys.One, () => {
               mw.Event.dispatchEventToServer("weaponEquipment");
           });
           InputUtil.onKeyDown(Keys.Two, () => {
               hotWeapon.unequipHotWeapon();
           });
       }
    }
}
```

___

### getBulletLocWhileSpawnOnScreenCenter <Score text="getBulletLocWhileSpawnOnScreenCenter" /> 

• **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location

#### Returns

| [`Vector`](mw.Vector.md) | 子弹投掷物生成的location |
| :------ | :------ |


::: warning Precautions

服务器没有角色相机组件

:::

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample5"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器调用当前方法的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample5 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;
        if (SystemUtil.isClient()) {
            const bulletLoc = hotWeapon.getBulletLocWhileSpawnOnScreenCenter()
            // 省略：生成投掷物
        }
    }
}
```

___

### getCurrentOwner <Score text="getCurrentOwner" /> 

• **getCurrentOwner**(): [`Character`](mw.Character.md) 

获取当前热武器的所有者

#### Returns

| [`Character`](mw.Character.md) | 当前热武器的所有者 |
| :------ | :------ |


<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample6"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器调用当前方法的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample6 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;
        const hotWeaponOwner = hotWeapon.getCurrentOwner()
    }
}
```

___

### getCurrentState <Score text="getCurrentState" /> 

• **getCurrentState**(): [`HotWeaponState`](../enums/mw.HotWeaponState.md) 

获取当前热武器状态

#### Returns

| [`HotWeaponState`](../enums/mw.HotWeaponState.md) | 当前热武器状态 |
| :------ | :------ |


<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample11"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个获取热武器状态的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample11 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       // 热武器需要先装备上，见方法 equipment
       const status = hotWeapon.getCurrentState();
    }
}
```

___

### getDefaultCrossHairSize <Score text="getDefaultCrossHairSize" /> 

• **getDefaultCrossHairSize**(`maxShootRange`): `number` <Badge type="tip" text="client" />

传入Player和最大射程，获取默认准星大小

#### Parameters

| `maxShootRange` `number` |  最大射程 default: |
| :------ | :------ |

#### Returns

| `number` | 默认准星大小(射击精度半角值) |
| :------ | :------ |


<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample3"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到热武器调用当前方法的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample3 extends mw.Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as mw.HotWeapon;
        if (SystemUtil.isClient()) {
            // 传入射程，得到准心扩散大小
            const crossHairSize = hotWeapon.getDefaultCrossHairSize(1000)
            // 省略：更新 UI 准心位置
        }
    }
}
```

___

### getShootDirWithDispersion <Score text="getShootDirWithDispersion" /> 

• **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

非屏幕中心生成子弹模式下，获取子弹飞行方向

#### Parameters

| `StartLoc` [`Vector`](mw.Vector.md) |  子弹生成位置 default: |
| :------ | :------ |
| `ShootRange` `number` |  最大射程 default: |

#### Returns

| [`Vector`](mw.Vector.md) | 子弹的实际飞行方向 |
| :------ | :------ |

::: warning Precautions

该函数可传入经偏移了的屏幕中心发出的射线方向

:::


::: warning Precautions

服务器没有角色相机组件

:::

___

### load <Score text="load" /> 

• **load**(): `void` <Badge type="tip" text="other" />

上膛


调用端自动广播

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample10"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器上膛、停止上膛的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample10 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Keys.Two, () => {
               // 开始执行操作
               if (hotWeapon.getCurrentState() == HotWeaponState.Loading) {
                   hotWeapon.breakLoad();
               } else {
                   hotWeapon.load();
               }
           });
       }
    }
}
```

___

### reload <Score text="reload" /> 

• **reload**(`bulletSize`): `void` <Badge type="tip" text="other" />

换弹

#### Parameters

| `bulletSize` `number` |  子弹数 |
| :------ | :------ |


调用端自动广播

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample9"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器换弹，中止换弹的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample9 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Keys.Two, () => {
               // 开始执行操作
               if (hotWeapon.getCurrentState() == HotWeaponState.Reloading) {
                   hotWeapon.breakReload();
               } else {
                   hotWeapon.reload(30);
               }
           });
       }
    }
}
```

___

### startFire <Score text="startFire" /> 

• **startFire**(): `void` <Badge type="tip" text="other" />

开火


调用端自动广播

<p style="font-size: 14px;">

使用示例: 创建一个名为"HotWeaponSample8"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开火，停止开火的效果,代码如下:

</p>

```ts
@Component
export default class HotWeaponSample8 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Keys.Two, () => {
               // 开始执行操作
               if (hotWeapon.getCurrentState() == HotWeaponState.Firing) {
                   hotWeapon.stopFire();
               } else {
                   hotWeapon.startFire();
               }
           });
       }
    }
}
```

___

### stopFire <Score text="stopFire" /> 

• **stopFire**(): `void` <Badge type="tip" text="other" />

停止开火。使用示例见方法 startFire 使用示例


调用端自动广播

___

### unequip <Score text="unequip" /> 

• **unequip**(): `void` <Badge type="tip" text="other" />

卸载热武器。使用示例见方法 equipment


调用端自动广播
