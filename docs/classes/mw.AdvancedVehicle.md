[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / AdvancedVehicle

# AdvancedVehicle <Badge type="tip" text="Class" /> <Score text="AdvancedVehicle" />

四轮载具

四轮载具是指模拟四个车轮的交通工具，例如汽车、卡车等。它们被设计成能够在游戏中自由移动、加速和转向，给玩家带来真实的驾驶体验。

四轮载具通过模拟真实的物理来提供逼真的驾驶感觉。它们会考虑到车辆的重量、引擎的动力、车轮的摩擦力等因素。当你加速时，引擎会产生动力，四个轮子会转动，并且车辆会加速。当你转动方向时，车辆会根据轮子的转向角度来改变方向。

1. 载具由什么组成的呢 ？

载具模型简单来说可以总结为车身 + 轮胎 + 弹簧的模型。

- 车身位置额外存在一个带有一定偏移的质心（质量中心简称质心，指物质系统上被认为质量集中于此的一个假想点。）属性，表示整个车的刚体质量中心；

- 轮胎也就是车身下面不考虑自身质量的物体，每个轮胎相较于车身的质心也有一个偏移值；

- 弹簧指的是轮胎将车身承载起来的效果，也就是将现实载具的悬浮功能转化为一个弹簧模型。

车身主要用于储存基础属性，包括质量、车辆骨骼模型、车辆形状等；轮胎主要负责计算轮胎力，也就是与地面平行的平面上的力，包括横向力与纵向力；弹簧则主要负责计算垂直于地面的悬浮力，实现跟现实载具一样的效果。

在车辆行驶的过程中，轮胎力是主要贡献：轮胎的纵向力使得车辆能够前进，而轮胎的横向力让车辆能够正常的转弯。悬浮力的主要功能是让车辆不会掉到地上，而是“飘”在空中，也就像是分摊承载着车辆的重量；并且在车辆有加减速或是转弯等总加速度会产生让车身倾斜的扭矩的情况下，能够正常表现出“颠簸”的感觉。

2. 载具如何使用呢 ？

左侧栏从逻辑对象列表直接用鼠标拖一个高级轮式载具对象进入场景或对象管理器，即可生成一个四轮载具；当然你也可以动态生成一个载具逻辑对象。

高级轮式载具会自带一个触发器和一个交互物逻辑对象。用来触发交互事件，并绑定交互对象及开车动画。运行时进入触发器范围即可开启驾驶模式。WASD控制车身行驶，F下车。

3. 如何DIY自己的车辆 ？

在左侧栏中搜索车辆模型及挂件，放入高级轮式载具子级。

点击高级轮式载具属性面板，在载具属性动力轮组中绑定车轮吸附车轮模型。

::: warning Precautions

注意事项
1. 在未设置有效的owner之前，载具不会进行物理模拟，可能会遇到悬空等现象。
2. 载具由set owner时指定的玩家客户端控制。如果想设置载具位置，仅在服务器端设置位置是无效的，需要主控端一起修改。
3. 应注意同一客户端同时控制的载具数量，数量过大会影响载具的同步。建议在5个以内。

:::

<span style="font-size: 14px;">

使用示例: 通过脚本动态创建载具并绑定控制逻辑。创建一个名为"VehicleExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏。按下 Q 键创建载具，走到触发器范围自动上车，WASD 进行驾驶，F 键下车。代码如下:

</span>

```ts
enum VehicleEvents {
    createVehicle_C2S = "createVehicle_C2S",
    createVehicle_S2C = "createVehicle_S2C",
    outOfVehicle_local = "outOfVehicle_local",
}

@Component
export default class VehicleSample extends Script {

    // 该属性暴露在属性面板中，可以方便的进行调整。
    @Property({ displayName: "载具生成位置", hideInEditor: false })
    private vehicleSpawnLoc: Vector = new Vector(100, 100, 200);

    // 当前控制的载具。
    private vehicle: AdvancedVehicle = null;

    // 当前载具下面的交互物。
    private interactor: Interactor = null;

    // 当前载具下面的触发器，用于上下车。
    private trigger: Trigger = null;

    // 当前绑定的按钮事件handle，用于下车时解除绑定。
    private controlEventsHandle: mw.EventListener[] = [];

    // 当脚本被实例后，会在第一帧更新前调用此函数。
    protected onStart(): void {
        AssetUtil.asyncDownloadAsset("14015");

        this.bindCreationEvents();
    }

    // 绑定载具创建的事件
    private bindCreationEvents(): void {
        if (SystemUtil.isServer()) {
            mw.Event.addClientListener(VehicleEvents.createVehicle_C2S, async (player: Player) => {
                // 创建载具。
                this.vehicle = await mw.GameObject.asyncSpawn<mw.AdvancedVehicle> ("Vehicle4W", {
                    replicates: true,
                    transform: new Transform(this.vehicleSpawnLoc, new Rotation(0, 0, 0), new Vector(1)),
                })

                // 创建触发器。
                this.trigger = await mw.GameObject.asyncSpawn<mw.Trigger> ("Trigger", {
                    replicates: true,
                })

                // 创建交互物。
                this.interactor = await mw.GameObject.asyncSpawn<mw.Interactor>("Interactor", {
                    replicates: true,
                })

                // 创建一个Box，作为车身。
                const vehicleMesh = await mw.GameObject.asyncSpawn<mw.Model>("197386", {
                    replicates: true,
                })

                // 设置父子级关系。
                this.interactor.parent = this.vehicle;
                this.trigger.parent = this.vehicle;
                vehicleMesh.parent = this.vehicle;

                // 调整相对位置，使得玩家上车时刚好坐在Box上，下车时在触发器旁边。
                this.interactor.localTransform.position = new mw.Vector(0, 0, 150);
                this.trigger.localTransform.position = new mw.Vector(0, -100, 0);
                vehicleMesh.localTransform.position= new mw.Vector(0, 0, 50);

                // 通知发起请求的客户端，载具已经创建完成。因为我们只通知了发起请求的客户端，所以每个客户端只能驾驶自己请求创建的载具。
                mw.Event.dispatchToClient(player, VehicleEvents.createVehicle_S2C, [
                    this.vehicle.gameObjectId,
                    this.trigger.gameObjectId,
                    this.interactor.gameObjectId,
                ])
            })
        } else {
            InputUtil.onKeyDown(Keys.Q, () => {
                // 通过RPC调用，在服务器上动态生成载具以及触发器，交互物。
                mw.Event.dispatchToServer(VehicleEvents.createVehicle_C2S);
            })

            // 客户端监听服务器生成完毕的消息，绑定触发器的事件，实现上下车功能。
            mw.Event.addServerListener(VehicleEvents.createVehicle_S2C, async (info: string[]) => {
                const [vehicleGUID, triggerGUID, interactorGUID] = info;
                console.log(`vehicleGUID = [${vehicleGUID}], triggerGUID = [${triggerGUID}], interactorGUID = [${interactorGUID}]`);

                this.vehicle = await GameObject.asyncFindGameObjectById(vehicleGUID) as AdvancedVehicle;
                this.trigger = await GameObject.asyncFindGameObjectById(triggerGUID) as Trigger;
                this.interactor = await GameObject.asyncFindGameObjectById(interactorGUID) as Interactor;

                this.bindInOutVehicleEvents();
            })
        }
    }

    // 绑定触发器的事件，实现上下车功能。
    private bindInOutVehicleEvents(): void {
        // 通过触发器自动上车
        this.trigger.onEnter.add(async (chara: Character) => {
            // 判断是否是玩家角色触碰的触发器，且是当前玩家。
            if (chara && chara.player == await mw.Player.asyncGetLocalPlayer()) {
                // 关闭角色碰撞，避免与载具发生相互作用。
                chara.setCollision(CollisionStatus.On);
                // 激活交互物，让角色坐在车上。
                this.interactor.enter(chara, mw.HumanoidSlotType.Buttocks, "14015");
                // 设置载具的驾驶员，此时开始模拟物理，可以驾驶。
                this.vehicle.owner = chara.player;
                // 调整一些参数。
                this.adjustVehicleParams();

                this.VehicleKeyEvents();
            }
        })

        // 监听下车事件。
        mw.Event.addLocalListener(VehicleEvents.outOfVehicle_local, async () => {
            const player = await Player.asyncGetLocalPlayer();
            // 设置下车位置在触发器左边。
            const outOfVehicleLoc = this.trigger.worldTransform.position.add(new Vector(0, -100, 50));
            // 结束交互，角色下车。
            this.interactor.leave(outOfVehicleLoc);
            // 开启角色碰撞，避免掉下地面和其它碰撞不正确的问题。
            player.character.setCollision(CollisionStatus.On);
            // 清空载具驾驶员，此时依然会模拟物理，但无法继续控制。
            this.vehicle.owner = null;

            this.clearControlEvents();
        })
    }

    // 通过按钮控制载具移动。
    private VehicleKeyEvents() {
        this.clearControlEvents();

        //按下UP键，载具加油前进；
        const handle_up_1 = InputUtil.onKeyDown(Keys.W, () => {
            this.vehicle.throttleInput = 1;
        });
        const handle_up_0 = InputUtil.onKeyUp(Keys.W, () => {
            this.vehicle.throttleInput = 0;
        });
        this.controlEventsHandle.push(handle_up_1, handle_up_0);

        //按下Down键，载具减速后退；
        const handle_down_1 = InputUtil.onKeyDown(Keys.S, () => {
            this.vehicle.throttleInput = -1;
        });
        const handle_down_0 = InputUtil.onKeyUp(Keys.S, () => {
            this.vehicle.throttleInput = 0;
        });
        this.controlEventsHandle.push(handle_down_1, handle_down_0);

        //按下LEFT键，载具左转；
        const handle_left_1 = InputUtil.onKeyDown(Keys.A, () => {
            this.vehicle.steeringInput = -1;
        });
        const handle_left_0 = InputUtil.onKeyUp(Keys.A, () => {
            this.vehicle.steeringInput = 0;
        });
        this.controlEventsHandle.push(handle_left_1, handle_left_0);

        //按下RIGHT键，载具右转；
        const handle_right_1 = InputUtil.onKeyDown(Keys.D, () => {
            this.vehicle.steeringInput = 1;
        });
        const handle_right_0 = InputUtil.onKeyUp(Keys.D, () => {
            this.vehicle.steeringInput = 0;
        });
        this.controlEventsHandle.push(handle_right_1, handle_right_0);

        //按下SpaceBar键，载具刹车；
        const handle_spaceBar_1 = InputUtil.onKeyDown(Keys.SpaceBar, () => {
            this.vehicle.handbrakeInputEnable = true;
        });
        const handle_spaceBar_0 = InputUtil.onKeyUp(Keys.SpaceBar, () => {
            this.vehicle.handbrakeInputEnable = false;
        });
        this.controlEventsHandle.push(handle_spaceBar_1, handle_spaceBar_0);

        //按下F键，下车。
        const handle_f = InputUtil.onKeyDown(Keys.F, () => {
            mw.Event.dispatchToLocal(VehicleEvents.outOfVehicle_local);
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

### Properties <Score text="Properties" /> 


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[brakingTorque](mw.AdvancedVehicle.md#brakingtorque)**(): `number`  |
| :-----|
| 获取当前制动力矩，单位：牛*米（N*m）。|
| **[currentGearLevel](mw.AdvancedVehicle.md#currentgearlevel)**(): `number`  |
| 设置当前档位级别。|
| **[driveMode](mw.AdvancedVehicle.md#drivemode)**(): [`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md)  |
| 获取载具驱动模式。|
| **[friction](mw.AdvancedVehicle.md#friction)**(): `number`  |
| 获取载具摩擦力系数。|
| **[handbrakeInputEnable](mw.AdvancedVehicle.md#handbrakeinputenable)**(`useHandbrake`: `boolean`): `void`  |
| 是否进行手刹，true-进行制动, false-取消制动。|
| **[mass](mw.AdvancedVehicle.md#mass)**(): `number`  |
| 设置载具质量，单位：千克（kg）。|
| **[maxEngineRPM](mw.AdvancedVehicle.md#maxenginerpm)**(): `number`  |
| 获取最大发动机转速，单位：转/分（r/min）。|
| **[maxGearLevel](mw.AdvancedVehicle.md#maxgearlevel)**(): `number`  |
| 获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。|
| **[owner](mw.AdvancedVehicle.md#owner)**(`inOwner`: [`Player`](mw.Player.md)): `void`  |
| 设置载具驾驶员。只有驾驶员才可以操作载具。|
| **[simulatePhysics](mw.AdvancedVehicle.md#simulatephysics)**(`shouldSimulate`: `boolean`): `void`  |
| 设置四轮载具是否开启物理模拟计算，需要在客户端调用。|
| **[steeringInput](mw.AdvancedVehicle.md#steeringinput)**(`newInput`: `number`): `void`  |
| 控制载具左/右转向，设置转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。|
| **[throttleInput](mw.AdvancedVehicle.md#throttleinput)**(`newInput`: `number`): `void`  |
| 控制载具前进/后退，设置油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。|
| **[velocity](mw.AdvancedVehicle.md#velocity)**(): `number`  |
| 获取当前行驶速度，单位：米/秒（m/s）。|
| **[wheelNum](mw.AdvancedVehicle.md#wheelnum)**(): `number`  |
| 获取车轮数量。|


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
| **[gearDown](mw.AdvancedVehicle.md#geardown)**(): `void`  |
| :-----|
| 降一档，立即切换。|
| **[gearUp](mw.AdvancedVehicle.md#gearup)**(): `void`  |
| 升一档，立即切换。|
| **[getGearData](mw.AdvancedVehicle.md#getgeardata)**(`gearLevel`: `number`): [`VehicleGearDataNew`](../modules/Core.mw.md#vehiclegeardatanew)  |
| 获取指定档位属性|
| **[getWheelMaxSteerAngle](mw.AdvancedVehicle.md#getwheelmaxsteerangle)**(`wheelId`: `number`): `number`  |
| 获取车轮最大转向角度，单位：度（°）。|
| **[getWheelModel](mw.AdvancedVehicle.md#getwheelmodel)**(`wheelId`: `number`): `string`  |
| 获取轮胎绑定对象。|
| **[getWheelRadius](mw.AdvancedVehicle.md#getwheelradius)**(`wheelId`: `number`): `number`  |
| 获取车轮半径，单位：厘米（cm）。|
| **[setCullDistance](mw.AdvancedVehicle.md#setculldistance)**(`inCullDistance`: `number`): `void`  |
| 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|


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
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`  |
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

## Accessors

___

### brakingTorque <Score text="brakingTorque" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **brakingTorque**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前制动力矩，单位：牛*米（N*m）。

**`Info`**

车辆制动力矩是指应用于车辆制动系统的力矩，用于减速或停止车辆运动。它是制动系统产生的力矩，通过制动器（如刹车盘和刹车片）施加到车轮上，从而减少车轮的旋转速度。


#### Returns

| `number` | 当前制动力矩 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### currentGearLevel <Score text="currentGearLevel" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentGearLevel**(): `number` 

</th>
<th style="text-align: left">

• `set` **currentGearLevel**(`level`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前档位级别。


#### Returns

| `number` | 当前档位级别 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置当前档位级别。


**`Range`**

[-1, 设定的最大档位]

::: warning Precautions

1. 注意输入参数的取值范围。
2. 设置与当前车速不匹配的档位，会自动调整到匹配的档位。如当前车速适应1档，直接设置3档，会逐级（3-2-1）降到1档。

:::

#### Parameters

| `level` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### driveMode <Score text="driveMode" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **driveMode**(): [`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取载具驱动模式。


#### Returns

| [`VehicleDriveMode4WNew`](../enums/mw.VehicleDriveMode4WNew.md) | 载具驱动模式 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### friction <Score text="friction" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **friction**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取载具摩擦力系数。


#### Returns

| `number` | 载具摩擦力系数 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### handbrakeInputEnable <Score text="handbrakeInputEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **handbrakeInputEnable**(`useHandbrake`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


是否进行手刹，true-进行制动, false-取消制动。


::: warning Precautions

输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::

#### Parameters

| `useHandbrake` `boolean` |  是否进行手刹，true-进行制动, false-取消制动。 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### mass <Score text="mass" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **mass**(): `number` 

</th>
<th style="text-align: left">

• `set` **mass**(`mass`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取质量。


#### Returns

| `number` | 载具质量，单位：千克（kg） |
| :------ | :------ |


</td>
<td style="text-align: left">


设置载具质量，单位：千克（kg）。


**`Range`**

[0.01, 100000]

::: warning Precautions

1. 注意输入参数的取值范围。设置较小的质量，会出现载具抖动等非预期表现。
2. 运行时设置质量，会重新初始化载具，清除任何运行状态。如载具在行驶，设置质量后会停在原地。

:::

#### Parameters

| `mass` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### maxEngineRPM <Score text="maxEngineRPM" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxEngineRPM**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取最大发动机转速，单位：转/分（r/min）。


#### Returns

| `number` | 载具发动机转速 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### maxGearLevel <Score text="maxGearLevel" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **maxGearLevel**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取最大档位级别。如返回值为4，则表示有[-1, 0, 1, 2, 3, 4]这些档位。

::: warning Precautions

最大可切换到的档位。如获取当前档位，请使用getCurrentGearLevel

:::


#### Returns

| `number` | 最大档位级别 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### owner <Score text="owner" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **owner**(`inOwner`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置载具驾驶员。只有驾驶员才可以操作载具。


#### Parameters

| `inOwner` | [`Player`](mw.Player.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### simulatePhysics <Score text="simulatePhysics" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **simulatePhysics**(`shouldSimulate`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置四轮载具是否开启物理模拟计算，需要在客户端调用。


::: warning Precautions

四轮载具只在set owner成功后才会进行物理模拟。此时关闭物理模拟将无法继续驱动载具移动。

:::

#### Parameters

| `shouldSimulate` `boolean` |  是否启用物理模拟。true-启用，false-不启用 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### steeringInput <Score text="steeringInput" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **steeringInput**(`newInput`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


控制载具左/右转向，设置转向幅度，取值范围[-1,1]，大于0时右转，小于0则左转。


**`Range`**

[-1, 1]，大于0时右转，小于0则左转。

::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::


#### Parameters

| `newInput` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例: 用按钮和摇杆控制载具

</span>

```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.setThrottleInput(1);
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.setThrottleInput(0);
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: mw.Vector2) => {
       // 控制油门
       vehicle.setThrottleInput(vec.y);
       // 控制转向
       vehicle.setSteeringInput(vec.x);
   })
```
___

### throttleInput <Score text="throttleInput" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **throttleInput**(`newInput`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


控制载具前进/后退，设置油门大小，取值范围[-1,1]，大于0时加速，小于0则减速。


**`Range`**

[-1, 1]，大于0时加速，小于0则减速。

::: warning Precautions

1. 注意输入参数的取值范围。输入100和1没有区别。
2. 输入值发生变化时，调用一次即可。输入值会保持，不需要持续调用。

:::


#### Parameters

| `newInput` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例: 用按钮和摇杆控制载具

</span>

```ts
   // 通过按钮控制载具油门
   this.btn_forward.onPressed.add(() => {
       vehicle.throttleInput = 1;
   })

   this.btn_forward.onReleased.add(() => {
       vehicle.throttleInput = 0;
   })

   // 通过摇杆控制载具，摇杆会同时提供两个轴向(x, y)的输入
   this.joystick.onInputDir.add((vec: mw.Vector2) => {
       // 控制油门
       vehicle.throttleInput = vec.y;
       // 控制转向
       vehicle.steeringInput = vec.x;
   })
```
___

### velocity <Score text="velocity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **velocity**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前行驶速度，单位：米/秒（m/s）。


#### Returns

| `number` | 当前行驶速度 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### wheelNum <Score text="wheelNum" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **wheelNum**(): `number` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取车轮数量。


#### Returns

</td>
</tr></tbody>
</table>

| `number` | 车轮数量 |
| :------ | :------ |

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

#### Parameters

| `gearLevel` `number` |  指定档位级别 |
| :------ | :------ |

#### Returns

| [`VehicleGearDataNew`](../modules/Core.mw.md#vehiclegeardatanew) | 指定档位属性 |
| :------ | :------ |


::: warning Precautions

注意输入参数的取值范围

:::

___

### getWheelMaxSteerAngle <Score text="getWheelMaxSteerAngle" /> 

• **getWheelMaxSteerAngle**(`wheelId`): `number` 

获取车轮最大转向角度，单位：度（°）。

#### Parameters

| `wheelId` `number` |  根据序号指定车轮 |
| :------ | :------ |

#### Returns

| `number` | 指定车轮最大转向角度 |
| :------ | :------ |


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

___

### getWheelModel <Score text="getWheelModel" /> 

• **getWheelModel**(`wheelId`): `string` 

获取轮胎绑定对象。

#### Parameters

| `wheelId` `number` |  根据序号指定车轮 |
| :------ | :------ |

#### Returns

| `string` | 指定轮胎绑定对象GUID |
| :------ | :------ |


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

___

### getWheelRadius <Score text="getWheelRadius" /> 

• **getWheelRadius**(`wheelId`): `number` 

获取车轮半径，单位：厘米（cm）。

#### Parameters

| `wheelId` `number` |  根据序号指定车轮 |
| :------ | :------ |

#### Returns

| `number` | 指定车轮半径 |
| :------ | :------ |


::: warning Precautions

注意输入参数的取值范围。当前为四轮载具，[0, 1, 2, 3]分别对应[左前, 右前, 左后, 右后]。

:::

___

### setCullDistance <Score text="setCullDistance" /> 

• **setCullDistance**(`inCullDistance`): `void` <Badge type="tip" text="client" />

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

#### Parameters

| `inCullDistance` `number` | 裁剪距离 |
| :------ | :------ |



::: warning Precautions

最终的裁剪距离会和画质等级有关
