[Gameplay](../groups/Core.Gameplay.md) / AdvancedVehicle

# AdvancedVehicle <Badge type="tip" text="Class" /> <Score text="AdvancedVehicle" />

四轮载具逻辑对象。基于物理模拟的四轮载具，具有载具常见的参数，质量，档位，驱动方式等。

::: warning Precautions

注意事项
1. 在未设置有效的owner之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由set owner时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在5个以内。

:::

使用示例: 通过脚本动态创建载具并绑定控制逻辑。
创建一个名为"VehicleExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏。
按下 Q 键创建载具，走到触发器范围自动上车，WASD 进行驾驶，F 键下车。
代码如下:
```ts
enum VehicleEvents {
    createVehicle_C2S = "createVehicle_C2S",
    createVehicle_S2C = "createVehicle_S2C",
    outOfVehicle_local = "outOfVehicle_local",
}

@Core.Class
export default class VehicleSample extends Script {

    // 该属性暴露在属性面板中，可以方便的进行调整。
    @Core.Property({ displayName: "载具生成位置", hideInEditor: false })
    private vehicleSpawnLoc: Vector = new Vector(100, 100, 200);

    // 当前控制的载具。
    private vehicle: AdvancedVehicle = null;

    // 当前载具下面的交互物。
    private interactor: Interactor = null;

    // 当前载具下面的触发器，用于上下车。
    private trigger: Trigger = null;

    // 当前绑定的按钮事件handle，用于下车时解除绑定。
    private controlEventsHandle: EventListener[] = [];

    // 当脚本被实例后，会在第一帧更新前调用此函数。
    protected onStart(): void {
        AssetUtil.asyncDownloadAsset("14015");

        this.bindCreationEvents();
    }

    // 绑定载具创建的事件
    private bindCreationEvents(): void {
        if (Util.SystemUtil.isServer()) {
            addClientListener(VehicleEvents.createVehicle_C2S, async (player: Player) => {
                // 创建载具。
                const spanwInfo_vehicle: SpawnInfo = {
                    guid: "Vehicle4W",
                    replicates: true,
                    transform: new Transform(this.vehicleSpawnLoc, new Rotation(0, 0, 0), new Vector(1)),
                }
                this.vehicle = await GameObject.asyncSpawn(spanwInfo_vehicle) as AdvancedVehicle;

                // 创建触发器。
                const spanwInfo_trigger: SpawnInfo = {
                    guid: "Trigger",
                    replicates: true,
                }
                this.trigger = await GameObject.asyncSpawn(spanwInfo_trigger) as Trigger;

                // 创建交互物。
                const spanwInfo_interactor: SpawnInfo = {
                    guid: "Interactor",
                    replicates: true,
                }
                this.interactor = await GameObject.asyncSpawn(spanwInfo_interactor) as Interactor;

                // 创建一个Box，作为车身。
                const spanwInfo_mesh: SpawnInfo = {
                    guid: "7669",
                    replicates: true,
                }
                const vehicleMesh = await GameObject.asyncSpawn(spanwInfo_mesh) as Mesh;

                // 设置父子级关系。
                this.interactor.attachToGameObject(this.vehicle);
                this.trigger.attachToGameObject(this.vehicle);
                vehicleMesh.attachToGameObject(this.vehicle);

                // 调整相对位置，使得玩家上车时刚好坐在Box上，下车时在触发器旁边。
                this.interactor.relativeLocation = new Vector(0, 0, 150);
                this.trigger.relativeLocation = new Vector(0, -100, 0);
                vehicleMesh.relativeLocation = new Vector(0, 0, 50);

                // 通知发起请求的客户端，载具已经创建完成。因为我们只通知了发起请求的客户端，所以每个客户端只能驾驶自己请求创建的载具。
                dispatchToClient(player, VehicleEvents.createVehicle_S2C, [
                    this.vehicle.guid,
                    this.trigger.guid,
                    this.interactor.guid,
                ])
            })
        } else {
            InputUtil.onKeyDown(Type.Keys.Q, () => {
                // 通过RPC调用，在服务器上动态生成载具以及触发器，交互物。
                dispatchToServer(VehicleEvents.createVehicle_C2S);
            })

            // 客户端监听服务器生成完毕的消息，绑定触发器的事件，实现上下车功能。
            addServerListener(VehicleEvents.createVehicle_S2C, async (info: string[]) => {
                const [vehicleGUID, triggerGUID, interactorGUID] = info;
                console.log(`vehicleGUID = [${vehicleGUID}], triggerGUID = [${triggerGUID}], interactorGUID = [${interactorGUID}]`);

                this.vehicle = await GameObject.asyncFind(vehicleGUID) as AdvancedVehicle;
                this.trigger = await GameObject.asyncFind(triggerGUID) as Trigger;
                this.interactor = await GameObject.asyncFind(interactorGUID) as Interactor;

                this.bindInOutVehicleEvents();
            })
        }
    }

    // 绑定触发器的事件，实现上下车功能。
    private bindInOutVehicleEvents(): void {
        // 通过触发器自动上车
        this.trigger.onEnter.add(async (chara: Character) => {
            // 判断是否是玩家角色触碰的触发器，且是当前玩家。
            if (chara && chara.player == await asyncGetCurrentPlayer()) {
                // 关闭角色碰撞，避免与载具发生相互作用。
                chara.collisionEnable = false;
                // 激活交互物，让角色坐在车上。
                this.interactor.startInteract(chara, InteractiveSlot.Buns, "14015");
                // 设置载具的驾驶员，此时开始模拟物理，可以驾驶。
                this.vehicle.owner = chara.player;
                // 调整一些参数。
                this.adjustVehicleParams();

                this.VehicleKeyEvents();
            }
        })

        // 监听下车事件。
        addLocalListener(VehicleEvents.outOfVehicle_local, async () => {
            const player = await asyncGetCurrentPlayer();
            // 设置下车位置在触发器左边。
            const outOfVehicleLoc = this.trigger.worldLocation.add(new Vector(0, -100, 50));
            // 结束交互，角色下车。
            this.interactor.endInteract(outOfVehicleLoc);
            // 开启角色碰撞，避免掉下地面和其它碰撞不正确的问题。
            player.character.collisionEnable = true;
            // 清空载具驾驶员，此时依然会模拟物理，但无法继续控制。
            this.vehicle.owner = null;

            this.clearControlEvents();
        })
    }

    // 通过按钮控制载具移动。
    private VehicleKeyEvents() {
        this.clearControlEvents();

        //按下UP键，载具加油前进；
        const handle_up_1 = InputUtil.onKeyDown(Type.Keys.W, () => {
            this.vehicle.throttleInput = 1;
        });
        const handle_up_0 = InputUtil.onKeyUp(Type.Keys.W, () => {
            this.vehicle.throttleInput = 0;
        });
        this.controlEventsHandle.push(handle_up_1, handle_up_0);

        //按下Down键，载具减速后退；
        const handle_down_1 = InputUtil.onKeyDown(Type.Keys.S, () => {
            this.vehicle.throttleInput = -1;
        });
        const handle_down_0 = InputUtil.onKeyUp(Type.Keys.S, () => {
            this.vehicle.throttleInput = 0;
        });
        this.controlEventsHandle.push(handle_down_1, handle_down_0);

        //按下LEFT键，载具左转；
        const handle_left_1 = InputUtil.onKeyDown(Type.Keys.A, () => {
            this.vehicle.steeringInput = -1;
        });
        const handle_left_0 = InputUtil.onKeyUp(Type.Keys.A, () => {
            this.vehicle.steeringInput = 0;
        });
        this.controlEventsHandle.push(handle_left_1, handle_left_0);

        //按下RIGHT键，载具右转；
        const handle_right_1 = InputUtil.onKeyDown(Type.Keys.D, () => {
            this.vehicle.steeringInput = 1;
        });
        const handle_right_0 = InputUtil.onKeyUp(Type.Keys.D, () => {
            this.vehicle.steeringInput = 0;
        });
        this.controlEventsHandle.push(handle_right_1, handle_right_0);

        //按下SpaceBar键，载具刹车；
        const handle_spaceBar_1 = InputUtil.onKeyDown(Type.Keys.SpaceBar, () => {
            this.vehicle.handbrakeInputEnable = true;
        });
        const handle_spaceBar_0 = InputUtil.onKeyUp(Type.Keys.SpaceBar, () => {
            this.vehicle.handbrakeInputEnable = false;
        });
        this.controlEventsHandle.push(handle_spaceBar_1, handle_spaceBar_0);

        //按下F键，下车。
        const handle_f = InputUtil.onKeyDown(Type.Keys.F, () => {
            dispatchLocal(VehicleEvents.outOfVehicle_local);
        });
        this.controlEventsHandle.push(handle_f);
    }

    // 解除绑定的按钮事件。
    private clearControlEvents(): void {
        for (const handle of this.controlEventsHandle) {
            handle.isConnected && handle.disconnect();
        }

        this.controlEventsHandle = [];
    }

    // 调整载具参数。
    private adjustVehicleParams(): void {
        // 将质量从 1500 改成 10000 Kg。
        this.vehicle.mass = 10000;
    }
}
```

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`AdvancedVehicle`**

## Table of contents

| Properties |
| :-----|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[brakingTorque](mw.AdvancedVehicle.md#brakingtorque)**(): `number` <br> 获取当前制动力矩，单位：牛*米（N*m）。|
| **[currentGearLevel](mw.AdvancedVehicle.md#currentgearlevel)**(): `number` <br> 获取当前档位级别。|
| **[driveMode](mw.AdvancedVehicle.md#drivemode)**(): [`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md) <br> 获取载具驱动模式。|
| **[friction](mw.AdvancedVehicle.md#friction)**(): `number` <br> 获取载具摩擦力系数。|
| **[handbrakeInputEnable](mw.AdvancedVehicle.md#handbrakeinputenable)**(`useHandbrake`: `boolean`): `void` <br> 是否进行手刹，true-进行制动, false-取消制动。|
| **[mass](mw.AdvancedVehicle.md#mass)**(): `number` <br> 获取质量。|
| **[maxEngineRPM](mw.AdvancedVehicle.md#maxenginerpm)**(): `number` <br> 获取最大发动机转速，单位：转/分（r/min）。|
| **[maxGearLevel](mw.AdvancedVehicle.md#maxgearlevel)**(): `number` <br> 获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。|
| **[owner](mw.AdvancedVehicle.md#owner)**(`inOwner`: [`Player`](mw.Player.md)): `void` <br> 设置载具驾驶员。只有驾驶员才可以操作载具。|
| **[simulatePhysics](mw.AdvancedVehicle.md#simulatephysics)**(`shouldSimulate`: `boolean`): `void` <br> 设置四轮载具是否开启物理模拟计算，需要在客户端调用。|
| **[steeringInput](mw.AdvancedVehicle.md#steeringinput)**(`newInput`: `number`): `void` <br> 控制载具左/右转向，设置转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。|
| **[throttleInput](mw.AdvancedVehicle.md#throttleinput)**(`newInput`: `number`): `void` <br> 控制载具前进/后退，设置油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。|
| **[velocity](mw.AdvancedVehicle.md#velocity)**(): `number` <br> 获取当前行驶速度，单位：米/秒（m/s）。|
| **[wheelNum](mw.AdvancedVehicle.md#wheelnum)**(): `number` <br> 获取车轮数量。|


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
| **[gearDown](mw.AdvancedVehicle.md#geardown)**(): `void` <br> 降一档，立即切换。|
| **[gearUp](mw.AdvancedVehicle.md#gearup)**(): `void` <br> 升一档，立即切换。|
| **[getGearData](mw.AdvancedVehicle.md#getgeardata)**(`gearLevel`: `number`): [`VehicleGearDataNew`](../modules/Core.mw.md#vehiclegeardatanew) <br> 获取指定档位属性|
| **[getWheelMaxSteerAngle](mw.AdvancedVehicle.md#getwheelmaxsteerangle)**(`wheelId`: `number`): `number` <br> 获取车轮最大转向角度，单位：度（°）。|
| **[getWheelModel](mw.AdvancedVehicle.md#getwheelmodel)**(`wheelId`: `number`): `string` <br> 获取轮胎绑定对象。|
| **[getWheelRadius](mw.AdvancedVehicle.md#getwheelradius)**(`wheelId`: `number`): `number` <br> 获取车轮半径，单位：厘米（cm）。|
| **[setCullDistance](mw.AdvancedVehicle.md#setculldistance)**(`inCullDistance`: `number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|


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


## Accessors

### brakingTorque <Score text="brakingTorque" /> 

• `get` **brakingTorque**(): `number` 

获取当前制动力矩，单位：牛*米（N*m）。


#### Returns

`number`

当前制动力矩

___

### currentGearLevel <Score text="currentGearLevel" /> 

• `get` **currentGearLevel**(): `number` 

获取当前档位级别。


#### Returns

`number`

当前档位级别

• `set` **currentGearLevel**(`level`): `void` <Badge type="tip" text="client" />

设置当前档位级别。


**`Range`**

[-1, 设定的最大档位]

::: warning Precautions

1. 注意输入参数的取值范围。
2. 设置与当前车速不匹配的档位，会自动调整到匹配的档位。如当前车速适应1档，直接设置3档，会逐级（3-2-1）降到1档。

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | `number` |


___

### driveMode <Score text="driveMode" /> 

• `get` **driveMode**(): [`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md) 

获取载具驱动模式。


#### Returns

[`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md)

载具驱动模式

___

### friction <Score text="friction" /> 

• `get` **friction**(): `number` 

获取载具摩擦力系数。


#### Returns

`number`

载具摩擦力系数

___

### handbrakeInputEnable <Score text="handbrakeInputEnable" /> 

• `set` **handbrakeInputEnable**(`useHandbrake`): `void` <Badge type="tip" text="client" />

是否进行手刹，true-进行制动, false-取消制动。


::: warning Precautions

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `useHandbrake` | `boolean` |  是否进行手刹，true-进行制动, false-取消制动。 |


___

### mass <Score text="mass" /> 

• `get` **mass**(): `number` 

获取质量。


#### Returns

`number`

载具质量，单位：千克（kg）

• `set` **mass**(`mass`): `void` <Badge type="tip" text="client" />

设置载具质量，单位：千克（kg）。


**`Range`**

[0.01, 100000]

::: warning Precautions

1. 注意输入参数的取值范围。设置较小的质量，会出现载具抖动等非预期表现。
2. 运行时设置质量，会重新初始化载具，清除任何运行状态。如载具在行驶，设置质量后会停在原地。

:::

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |


___

### maxEngineRPM <Score text="maxEngineRPM" /> 

• `get` **maxEngineRPM**(): `number` 

获取最大发动机转速，单位：转/分（r/min）。


#### Returns

`number`

载具发动机转速

___

### maxGearLevel <Score text="maxGearLevel" /> 

• `get` **maxGearLevel**(): `number` 

获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

::: warning Precautions

最大可切换到的档位。如获取当前档位，请使用getCurrentGearLevel

:::


#### Returns

`number`

最大档位级别

___

### owner <Score text="owner" /> 

• `set` **owner**(`inOwner`): `void` <Badge type="tip" text="client" />

设置载具驾驶员。只有驾驶员才可以操作载具。


#### Parameters

| Name | Type |
| :------ | :------ |
| `inOwner` | [`Player`](mw.Player.md) |


___

### simulatePhysics <Score text="simulatePhysics" /> 

• `set` **simulatePhysics**(`shouldSimulate`): `void` <Badge type="tip" text="client" />

设置四轮载具是否开启物理模拟计算，需要在客户端调用。


::: warning Precautions

四轮载具只在set owner成功后才会进行物理模拟。此时关闭物理模拟将无法继续驱动载具移动。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldSimulate` | `boolean` |  是否启用物理模拟。true-启用，false-不启用 |


___

### steeringInput <Score text="steeringInput" /> 

• `set` **steeringInput**(`newInput`): `void` <Badge type="tip" text="client" />

控制载具左/右转向，设置转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。


**`Range`**

[-1, 1]，大于0时右转，小于0则左转。

::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

使用示例: 用按钮和摇杆控制载具
```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.setThrottleInput(1);
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.setThrottleInput(0);
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: Vector2) => {
       // 控制油门
       vehicle.setThrottleInput(vec.y);
       // 控制转向
       vehicle.setSteeringInput(vec.x);
   })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newInput` | `number` |


___

### throttleInput <Score text="throttleInput" /> 

• `set` **throttleInput**(`newInput`): `void` <Badge type="tip" text="client" />

控制载具前进/后退，设置油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。


**`Range`**

[-1, 1]，大于0时加速，小于0则减速。

::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

使用示例: 用按钮和摇杆控制载具
```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.throttleInput = 1;
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.throttleInput = 0;
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: Vector2) => {
       // 控制油门
       vehicle.throttleInput = vec.y;
       // 控制转向
       vehicle.steeringInput = vec.x;
   })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `newInput` | `number` |


___

### velocity <Score text="velocity" /> 

• `get` **velocity**(): `number` 

获取当前行驶速度，单位：米/秒（m/s）。


#### Returns

`number`

当前行驶速度

___

### wheelNum <Score text="wheelNum" /> 

• `get` **wheelNum**(): `number` 

获取车轮数量。


#### Returns

`number`

车轮数量


## Methods
___

### gearDown <Score text="gearDown" /> 

• **gearDown**(): `void` <Badge type="tip" text="client" />

降一档，立即切换。



___

### gearUp <Score text="gearUp" /> 

• **gearUp**(): `void` <Badge type="tip" text="client" />

升一档，立即切换。



___

### getGearData <Score text="getGearData" /> 

• **getGearData**(`gearLevel`): [`VehicleGearDataNew`](../modules/Core.mw.md#vehiclegeardatanew) 

获取指定档位属性


::: warning Precautions

注意输入参数的取值范围

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gearLevel` | `number` |  指定档位级别 |

#### Returns

[`VehicleGearDataNew`](../modules/Core.mw.md#vehiclegeardatanew)

指定档位属性

___

### getWheelMaxSteerAngle <Score text="getWheelMaxSteerAngle" /> 

• **getWheelMaxSteerAngle**(`wheelId`): `number` 

获取车轮最大转向角度，单位：度（°）。


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮最大转向角度

___

### getWheelModel <Score text="getWheelModel" /> 

• **getWheelModel**(`wheelId`): `string` 

获取轮胎绑定对象。


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`string`

指定轮胎绑定对象GUID

___

### getWheelRadius <Score text="getWheelRadius" /> 

• **getWheelRadius**(`wheelId`): `number` 

获取车轮半径，单位：厘米（cm）。


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wheelId` | `number` |  根据序号指定车轮 |

#### Returns

`number`

指定车轮半径

___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)


::: warning Precautions

最终的裁剪距离会和画质等级有关

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |

