[Gameplay](../groups/Core.Gameplay.md) / HotWeapon

# HotWeapon <Badge type="tip" text="Class" /> <Score text="HotWeapon" />

热武器功能对象，提供对发射类武器常用的射击，上膛，换弹，后坐力，瞄准和射击精度控制等功能的封装。

::: warning Precautions

当装备上玩家时，此对象的功能才能生效。

:::

使用示例: 创建一个名为"HotWeaponSample1"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,在本地资源库中搜索80484、4172、4171动画资源,拖入对象管理器中的优先加载目录。运行游戏,按键1、2、3、4你将在场景中看到一个热武器设置参数，添加委托，绑定按键，以及人物换弹的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample1 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;

        if (SystemUtil.isServer()) {
            hotWeapon.fireComponent.isFireOnScreenCenter = false
            hotWeapon.fireComponent.currentClipSize = 50
            hotWeapon.fireComponent.currentFireInterval = 0
            hotWeapon.fireComponent.currentMultipleShot = 3
            hotWeapon.fireComponent.isFireOnScreenCenter = false
            hotWeapon.fireComponent.offsetOfFireOnScreenCenter = new Vector(100, 30, 0);
            // 设置参数
            hotWeapon.fireComponent.animationGuid = "80484";
            hotWeapon.setCurrentFireModel(Gameplay.HotWeaponFireMode.SingleFire);

            hotWeapon.aimEnable = true;
            // 切换瞄准时的 第一/第三 人称
            hotWeapon.aimComponent.aimMode = HotWeaponAimMode.ThirdPerson;
            // 切换模拟瞄准时的瞄准镜UI(仅第一人称瞄准时生效)
            hotWeapon.aimComponent.scopeTypeIndex = HotWeaponCrossHairType.ThirdPersonCrossHair;
            // 设置模拟瞄准时的倍镜放大倍数(仅第一人称瞄准时生效，范围1~18)
            hotWeapon.aimComponent.aimingZoom = 16;
            hotWeapon.aimComponent.cameraOffsetDistanceInThirdPersonMode = 300;

            hotWeapon.loadEnable = true;
            hotWeapon.loadComponent.loadDuration = 1
            hotWeapon.loadComponent.loadAfterFireEnable = true;
            hotWeapon.loadComponent.animationGuid = "4172";

            hotWeapon.reloadEnable = true;
            hotWeapon.reloadComponent.reloadDuration = 2;
            hotWeapon.reloadComponent.animationGuid = "4171";

            hotWeapon.recoilForceEnable = true;
            hotWeapon.recoilForceComponent.minHorizontalOffset = 1;
            hotWeapon.recoilForceComponent.maxHorizontalOffset = 1;
            hotWeapon.recoilForceComponent.minVerticalOffset = 1;
            hotWeapon.recoilForceComponent.maxVerticalOffset = 1;
            hotWeapon.recoilForceComponent.minHorizontalJitter = 1;
            hotWeapon.recoilForceComponent.maxHorizontalJitter = 1;
            hotWeapon.recoilForceComponent.minVerticalJitter = 1;
            hotWeapon.recoilForceComponent.maxVerticalJitter = 1;

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

            hotWeapon.onEquippedServer.add((owner) => { console.log("热武器装备好了后会在服务器端触发回调") });
            hotWeapon.onUnequippedServer.add(() => { console.log("onUnequippedServer") });

            hotWeapon.fireComponent.onStartFireServer.add(() => { console.log("fireComponent.onStartFireClient") });
            hotWeapon.fireComponent.onEndFireServer.add(() => { console.log("fireComponent.onEndFireClient") });
            hotWeapon.fireComponent.onEndContinuousFireServer.add(() => { console.log("fireComponent.onEndFireClient") });

            hotWeapon.loadComponent.onStartLoadServer.add(() => { console.log("loadComponent.onStartLoadClient") });
            hotWeapon.loadComponent.onEndLoadServer.add(() => { console.log("loadComponent.onEndLoadClient") });

            hotWeapon.recoilForceComponent.onStartRecoilForceServer.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });

            hotWeapon.reloadComponent.onStartReloadServer.add(() => { console.log("reloadComponent.onStartReloadClient") });
            hotWeapon.reloadComponent.onEndReloadServer.add(() => { console.log("reloadComponent.onEndReloadClient") });

            hotWeapon.aimComponent.onAimStartServer.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndServer.add(() => { console.log("aimComponent.onAimEndClient") });

            addClientListener("weaponEquipment", (player) => {
                // 目前装备方法只能在服务端调用
                hotWeapon.equipment(player.character, "Right_Hand");
            });
        } else if (SystemUtil.isClient()) {
            hotWeapon.onEquippedClient.add(() => { console.log("onEquippedClient") });
            hotWeapon.onUnequippedClient.add(() => { console.log("onUnequippedClient") });

            hotWeapon.fireComponent.onStartFireClient.add(() => { console.log("fireComponent.onStartFireClient") });
            hotWeapon.fireComponent.onEndFireClient.add(() => { console.log("fireComponent.onEndFireClient") });

            hotWeapon.loadComponent.onStartLoadClient.add(() => { console.log("loadComponent.onStartLoadClient") });
            hotWeapon.loadComponent.onEndLoadClient.add(() => { console.log("loadComponent.onEndLoadClient") });

            hotWeapon.recoilForceComponent.onStartRecoilForceClient.add(() => { console.log("recoilForceComponent.onStartRecoilForceClient") });

            hotWeapon.reloadComponent.onStartReloadClient.add(() => { console.log("reloadComponent.onStartReloadClient") });
            hotWeapon.reloadComponent.onEndReloadClient.add(() => { console.log("reloadComponent.onEndReloadClient") });

            hotWeapon.accuracyOfFireComponent.onCurrentDispersionChangedClient.add(() => { console.log("accuracyOfFireComponent.onCurrentDispersionChangedClient") });

            hotWeapon.aimComponent.onAimStartClient.add(() => { console.log("aimComponent.onAimStartClient") });
            hotWeapon.aimComponent.onAimEndClient.add(() => { console.log("aimComponent.onAimEndClient") });

            // 装备
            InputUtil.onKeyDown(Type.Keys.One, () => {
                dispatchToServer("weaponEquipment");
            });

            InputUtil.onKeyDown(Type.Keys.Two, () => {
                // 开始执行操作
                if (hotWeapon.getCurrentState() == HotWeaponState.Firing) {
                    hotWeapon.stopFire();
                } else {
                    hotWeapon.startFire();
                }
            });

            InputUtil.onKeyDown(Type.Keys.Three, () => {
                // 开始执行操作
                if (hotWeapon.getCurrentState() == HotWeaponState.Reloading) {
                    hotWeapon.breakReload();
                } else {
                    hotWeapon.reload(30);
                }
            });

            InputUtil.onKeyDown(Type.Keys.Four, () => {
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

| Properties |
| :-----|
| **[accuracyOfFireComponent](mw.HotWeapon.md#accuracyoffirecomponent)**: [`HotWeaponAccuracyOfFireComponent`](mw.HotWeaponAccuracyOfFireComponent.md) <br> 射击精度功能。使用示例见类 HotWeaponAccuracyOfFireComponent|
| **[aimComponent](mw.HotWeapon.md#aimcomponent)**: [`HotWeaponAimComponent`](mw.HotWeaponAimComponent.md) <br> 瞄准功能。使用示例见类 HotWeaponAimComponent|
| **[fireComponent](mw.HotWeapon.md#firecomponent)**: [`HotWeaponFireComponent`](mw.HotWeaponFireComponent.md) <br> 射击功能。使用示例见类 HotWeaponFireComponent|
| **[loadComponent](mw.HotWeapon.md#loadcomponent)**: [`HotWeaponLoadComponent`](mw.HotWeaponLoadComponent.md) <br> 上膛功能。使用示例见类 HotWeaponLoadComponent|
| **[onEquipped](mw.HotWeapon.md#onequipped)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\> <br> 服务器装备时执行绑定函数|
| **[onUnequipped](mw.HotWeapon.md#onunequipped)**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器卸载时执行绑定函数。使用示例见属性 onEquipped|
| **[recoilForceComponent](mw.HotWeapon.md#recoilforcecomponent)**: [`HotWeaponRecoilForceComponent`](mw.HotWeaponRecoilForceComponent.md) <br> 后坐力功能。使用示例见类 HotWeaponRecoilForceComponent|
| **[reloadComponent](mw.HotWeapon.md#reloadcomponent)**: [`HotWeaponReloadComponent`](mw.HotWeaponReloadComponent.md) <br> 换弹功能。使用示例见类 HotWeaponReloadComponent|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[accuracyOfFireEnabled](mw.HotWeapon.md#accuracyoffireenabled)**(): `boolean` <br> 是否开启了射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例|
| **[aimEnabled](mw.HotWeapon.md#aimenabled)**(): `boolean` <br> 是否开启了瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例|
| **[loadEnabled](mw.HotWeapon.md#loadenabled)**(): `boolean` <br> 是否开启了上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例|
| **[recoilForceEnabled](mw.HotWeapon.md#recoilforceenabled)**(): `boolean` <br> 是否开启了后坐力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例|
| **[reloadEnabled](mw.HotWeapon.md#reloadenabled)**(): `boolean` <br> 是否开启了换弹组件。启用/关闭换弹组件示例代码见类 HotWeaponReloadComponent 使用示例|


::: details 点击查看继承
| Accessors |
| :-----|
| **[guid](mw.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[isLocked](mw.GameObject.md#islocked)**(): `boolean` <br> 获取对象是否锁定|
| **[isReady](mw.GameObject.md#isready)**(): `boolean` <br> 当前物体状态|
| **[isStatic](mw.GameObject.md#isstatic)**(): `boolean` <br> 获取对象是否静态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体本地transform|
| **[name](mw.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前父物体|
| **[sourceAssetGuid](mw.GameObject.md#sourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[tag](mw.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[useUpdate](mw.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md) <br> 当前物体世界transform|
:::


| Methods |
| :-----|
| **[breakLoad](mw.HotWeapon.md#breakload)**(): `void` <br> 打断上膛。使用示例见方法 reload 使用示例|
| **[breakReload](mw.HotWeapon.md#breakreload)**(): `void` <br> 打断换弹。使用示例见方法 reload 使用示例|
| **[cloneComponentsData](mw.HotWeapon.md#clonecomponentsdata)**(`otherHotWeapon`: [`HotWeapon`](mw.HotWeapon.md)): `void` <br> 从传入的热武器逻辑对象中拷贝所有组件数据|
| **[equip](mw.HotWeapon.md#equip)**(`character`: [`Character`](mw.Character.md), `slotName`: [`SlotType`](../enums/mw.SlotType.md)): `void` <br> 装备热武器到目标角色的指定插槽位置|
| **[getBulletLocWhileSpawnOnScreenCenter](mw.HotWeapon.md#getbulletlocwhilespawnonscreencenter)**(): [`Vector`](mw.Vector.md) <br> 使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location|
| **[getCurrentOwner](mw.HotWeapon.md#getcurrentowner)**(): [`Character`](mw.Character.md) <br> 获取当前热武器的所有者|
| **[getCurrentState](mw.HotWeapon.md#getcurrentstate)**(): [`HotWeaponState`](../enums/mw.HotWeaponState.md) <br> 获取当前热武器状态|
| **[getDefaultCrossHairSize](mw.HotWeapon.md#getdefaultcrosshairsize)**(`maxShootRange`: `number`): `number` <br> 传入Player和最大射程，获取默认准星大小|
| **[getShootDirWithDispersion](mw.HotWeapon.md#getshootdirwithdispersion)**(`StartLoc`: [`Vector`](mw.Vector.md), `ShootRange`: `number`): [`Vector`](mw.Vector.md) <br> 非屏幕中心生成子弹模式下，获取子弹飞行方向|
| **[load](mw.HotWeapon.md#load)**(): `void` <br> 上膛|
| **[reload](mw.HotWeapon.md#reload)**(`bulletSize`: `number`): `void` <br> 换弹|
| **[setCurrentFireModel](mw.HotWeapon.md#setcurrentfiremodel)**(`FireMode`: [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md)): `void` <br> 切换设置当前开火模式|
| **[startFire](mw.HotWeapon.md#startfire)**(): `void` <br> 开火|
| **[stopFire](mw.HotWeapon.md#stopfire)**(): `void` <br> 停止开火。使用示例见方法 startFire 使用示例|
| **[unequip](mw.HotWeapon.md#unequip)**(): `void` <br> 卸载热武器。使用示例见方法 equipment|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[follow](mw.GameObject.md#follow)**(`Target`: [`GameObject`](mw.GameObject.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 跟随目标|
| **[getBoundingBoxSize](mw.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](mw.Vector.md), `BoxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](mw.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据GUID查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): `undefined` \| [`GameObject`](mw.GameObject.md)[] <br> 获取Children|
| **[getChildrenBoxCenter](mw.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找所有的子物体|
| **[getScriptByGuid](mw.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[isRunningClient](mw.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[navigateTo](mw.GameObject.md#navigateto)**(`Location`: [`Vector`](mw.Vector.md), `Radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void` <br> 向目标点进行寻路移动|
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[stopFollow](mw.GameObject.md#stopfollow)**(): `void` <br> 停止跟随|
| **[stopNavigateTo](mw.GameObject.md#stopnavigateto)**(): `void` <br> 停止向目标点寻路移动|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`[spawn](mw.GameObject.md#spawn)Info`): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


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

### onEquipped <Score text="onEquipped" /> 

• **onEquipped**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<(`EquipOwner`: `$Nullable`<`Actor`\>) => `void`\>

服务器装备时执行绑定函数

使用示例: 创建一个名为"HotWeaponSample2"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器添加装备委托的效果,代码如下:
```ts
@Core.Class
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

### onUnequipped <Score text="onUnequipped" /> 

• **onUnequipped**: [`MulticastDelegateInterface`](../interfaces/mw.MulticastDelegateInterface.md)<() => `void`\>

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

• `get` **accuracyOfFireEnabled**(): `boolean` 

是否开启了射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例


#### Returns

`boolean`

是否开启了射击精度组件

• `set` **accuracyOfFireEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启射击精度组件。启用/关闭射击精度组件示例代码见类 HotWeaponAccuracyOfFireComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  射击精度组件启用状态 |


___

### aimEnabled <Score text="aimEnabled" /> 

• `get` **aimEnabled**(): `boolean` 

是否开启了瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例


#### Returns

`boolean`

是否开启了瞄准组件

• `set` **aimEnabled**(`value`): `void` <Badge type="tip" text="server" />

设置是否开启瞄准组件。启用/关闭瞄准组件示例代码见类 HotWeaponAimComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` |  瞄准组件启用状态 |


___

### loadEnabled <Score text="loadEnabled" /> 

• `get` **loadEnabled**(): `boolean` 

是否开启了上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例


#### Returns

`boolean`

是否开启了上膛组件

• `set` **loadEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启上膛组件。启用/关闭上膛组件示例代码见类 HotWeaponLoadComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  上膛组件启用状态 |


___

### recoilForceEnabled <Score text="recoilForceEnabled" /> 

• `get` **recoilForceEnabled**(): `boolean` 

是否开启了后坐力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例


#### Returns

`boolean`

是否开启了后坐力组件

• `set` **recoilForceEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启后座力组件。启用/关闭后坐力组件示例代码见类 HotWeaponRecoilForceComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  后座力组件启用状态 |


___

### reloadEnabled <Score text="reloadEnabled" /> 

• `get` **reloadEnabled**(): `boolean` 

是否开启了换弹组件。启用/关闭换弹组件示例代码见类 HotWeaponReloadComponent 使用示例


#### Returns

`boolean`

是否开启了换弹组件

• `set` **reloadEnabled**(`isEnabled`): `void` <Badge type="tip" text="server" />

设置是否开启换弹组件。启用/关闭后坐力组件示例代码见类 HotWeaponReloadComponent 使用示例

::: warning Precautions

默认开启

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnabled` | `boolean` |  换弹组件启用状态 |



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


::: warning Precautions

无法拷贝代理委托绑定事件，完成拷贝后，数据同步到客户端有较短延迟

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherHotWeapon` | [`HotWeapon`](mw.HotWeapon.md) |  数据源 |


___

### equip <Score text="equip" /> 

• **equip**(`character`, `slotName`): `void` <Badge type="tip" text="other" />

装备热武器到目标角色的指定插槽位置

调用端自动广播

::: warning Precautions

- S端调用可完成整个装备流程
 - C端调用主要目的是刷新热武器TS层对象中关于持有者的数据
 - 请确保TS层热武器构造完成之后再调用该函数，否则可能出现C端没有成功获取到持有者数据的问题
 - 热武器GameObject加载完毕后会有回调，请在客户端能异步获取新构造的热武器后，在Ready()这个异步方法中填写后续逻辑

:::

使用示例: 创建一个名为"HotWeaponSample7"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器装备到角色的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample7 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isServer()) {
           addClientListener("weaponEquipment", (player) => {
               // 目前装备方法只能在服务端调用
               hotWeapon.equipment(player.character, "Right_Hand");
           });
       } else if (SystemUtil.isClient()) {
           // 装备
           InputUtil.onKeyDown(Type.Keys.One, () => {
               dispatchToServer("weaponEquipment");
           });
           InputUtil.onKeyDown(Type.Keys.Two, () => {
               hotWeapon.unequipHotWeapon();
           });
       }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](mw.Character.md) |  该武器的装备对象 default: |
| `slotName` | [`SlotType`](../enums/mw.SlotType.md) |  要装备的插槽名称 default: |


___

### getBulletLocWhileSpawnOnScreenCenter <Score text="getBulletLocWhileSpawnOnScreenCenter" /> 

• **getBulletLocWhileSpawnOnScreenCenter**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

使用屏幕中心生成子弹投掷物模式时，获取子弹投掷物生成的location


::: warning Precautions

服务器没有角色相机组件

:::

使用示例: 创建一个名为"HotWeaponSample5"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器调用当前方法的效果,代码如下:
```ts
@Core.Class
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

#### Returns

[`Vector`](mw.Vector.md)

子弹投掷物生成的location

___

### getCurrentOwner <Score text="getCurrentOwner" /> 

• **getCurrentOwner**(): [`Character`](mw.Character.md) 

获取当前热武器的所有者


使用示例: 创建一个名为"HotWeaponSample6"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器调用当前方法的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample6 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;
        const hotWeaponOwner = hotWeapon.getCurrentOwner()
    }
}
```

#### Returns

[`Character`](mw.Character.md)

当前热武器的所有者

___

### getCurrentState <Score text="getCurrentState" /> 

• **getCurrentState**(): [`HotWeaponState`](../enums/mw.HotWeaponState.md) 

获取当前热武器状态


使用示例: 创建一个名为"HotWeaponSample11"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个获取热武器状态的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample11 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       // 热武器需要先装备上，见方法 equipment
       const status = hotWeapon.getCurrentState();
    }
}
```

#### Returns

[`HotWeaponState`](../enums/mw.HotWeaponState.md)

当前热武器状态

___

### getDefaultCrossHairSize <Score text="getDefaultCrossHairSize" /> 

• **getDefaultCrossHairSize**(`maxShootRange`): `number` <Badge type="tip" text="client" />

传入Player和最大射程，获取默认准星大小


使用示例: 创建一个名为"HotWeaponSample3"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到热武器调用当前方法的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample3 extends Script {
    protected onStart(): void {
        // 构造
        const hotWeapon = this.gameObject as HotWeapon;
        if (SystemUtil.isClient()) {
            // 传入射程，得到准心扩散大小
            const crossHairSize = hotWeapon.getDefaultCrossHairSize(1000)
            // 省略：更新 UI 准心位置
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxShootRange` | `number` |  最大射程 default: |

#### Returns

`number`

默认准星大小(射击精度半角值)

___

### getShootDirWithDispersion <Score text="getShootDirWithDispersion" /> 

• **getShootDirWithDispersion**(`StartLoc`, `ShootRange`): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

非屏幕中心生成子弹模式下，获取子弹飞行方向

::: warning Precautions

该函数可传入经偏移了的屏幕中心发出的射线方向

:::


::: warning Precautions

服务器没有角色相机组件

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartLoc` | [`Vector`](mw.Vector.md) |  子弹生成位置 default: |
| `ShootRange` | `number` |  最大射程 default: |

#### Returns

[`Vector`](mw.Vector.md)

子弹的实际飞行方向

___

### load <Score text="load" /> 

• **load**(): `void` <Badge type="tip" text="other" />

上膛

调用端自动广播

使用示例: 创建一个名为"HotWeaponSample10"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器上膛、停止上膛的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample10 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Type.Keys.Two, () => {
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

调用端自动广播

使用示例: 创建一个名为"HotWeaponSample9"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器换弹，中止换弹的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample9 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Type.Keys.Two, () => {
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bulletSize` | `number` |  子弹数 |


___

### setCurrentFireModel <Score text="setCurrentFireModel" /> 

• **setCurrentFireModel**(`FireMode`): `void` 

切换设置当前开火模式


::: warning Precautions

装备前只能在服务器调用，装备后可在客户端调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `FireMode` | [`HotWeaponFireMode`](../enums/mw.HotWeaponFireMode.md) |  新的热武器开火模式 |


___

### startFire <Score text="startFire" /> 

• **startFire**(): `void` <Badge type="tip" text="other" />

开火

调用端自动广播

使用示例: 创建一个名为"HotWeaponSample8"的脚本,放置在对象管理器中热武器对象子级，打开脚本,输入以下代码保存,运行游戏,你将在场景中看到一个热武器开火，停止开火的效果,代码如下:
```ts
@Core.Class
export default class HotWeaponSample8 extends Script {
    protected onStart(): void {
       const hotWeapon = this.gameObject as HotWeapon;
       if (SystemUtil.isClient()) {
           // 热武器需要先装备上，见方法 equipment
           InputUtil.onKeyDown(Type.Keys.Two, () => {
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

