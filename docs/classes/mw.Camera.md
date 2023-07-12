[GAMEPLAY](../groups/Core.GAMEPLAY.md) / Camera

# Camera <Badge type="tip" text="Class" /> <Score text="Camera" />

摄像机

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`Camera`**

## Table of contents

| Properties |
| :-----|
| **[onSwitchComplete](mw.Camera.md#onswitchcomplete)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 切换摄像机完成的回调|
| **[springArm](mw.Camera.md#springarm)**: [`SpringArm`](mw.SpringArm.md) <br> 弹簧臂|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
:::


| Accessors |
| :-----|
| **[downAngleLimit](mw.Camera.md#downanglelimit)**(): `number` <br> 获取摄像机向下角度限制|
| **[fixedElevation](mw.Camera.md#fixedelevation)**(): `boolean` <br> 固定摄像机高度|
| **[fov](mw.Camera.md#fov)**(): `number` <br> 获取摄像机视场|
| **[maxLagDistance](mw.Camera.md#maxlagdistance)**(): `number` <br> 位置最大延迟距离|
| **[positionLagEnabled](mw.Camera.md#positionlagenabled)**(): `boolean` <br> 启用位置延迟|
| **[positionLagSpeed](mw.Camera.md#positionlagspeed)**(): `number` <br> 位置延迟速度|
| **[positionMode](mw.Camera.md#positionmode)**(): [`CameraLocationMode`](../enums/mw.CameraLocationMode.md) <br> 位置模式|
| **[preset](mw.Camera.md#preset)**(`value`: [`CameraPreset`](../enums/mw.CameraPreset.md)): `void` <br> 设置摄像机预设|
| **[rotationLagEnabled](mw.Camera.md#rotationlagenabled)**(): `boolean` <br> 启用旋转延迟|
| **[rotationLagSpeed](mw.Camera.md#rotationlagspeed)**(): `number` <br> 旋转延迟速度|
| **[rotationMode](mw.Camera.md#rotationmode)**(): [`CameraRotationMode`](../enums/mw.CameraRotationMode.md) <br> 旋转模式|
| **[upAngleLimit](mw.Camera.md#upanglelimit)**(): `number` <br> 向上角度限制|
| **[currentCamera](mw.Camera.md#currentcamera)**(): [`Camera`](mw.Camera.md) <br> 当前摄像机|


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
| **[lock](mw.Camera.md#lock)**(`target`: [`GameObject`](mw.GameObject.md), `val?`: `Object`): `void` <br> 相机锁定目标|
| **[lookAt](mw.Camera.md#lookat)**(`target`: [`GameObject`](mw.GameObject.md) \): `void` <br> 摄像机朝向目标|
| **[unlock](mw.Camera.md#unlock)**(): `void` <br> 取消锁定目标|
| **[shake](mw.Camera.md#shake)**(`[shake](mw.Camera.md#shake)Data`, `duration?`: `number`): `void` <br> 开始摄像机抖动|
| **[stopShake](mw.Camera.md#stopshake)**(): `void` <br> 停止摄像机抖动|
| **[switch](mw.Camera.md#switch)**(`newCamera`: [`Camera`](mw.Camera.md), `blendTime?`: `number`, `blendFunc?`: [`SwitchCameraBlendFunction`](../enums/mw.SwitchCameraBlendFunction.md), `blendExp?`: `number`): [`Camera`](mw.Camera.md) <br> 切换摄像机|


::: details 点击查看继承
| Methods |
| :-----|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> GameObject准备好后返回|
| **[attachToGameObject](mw.GameObject.md#attachtogameobject)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 将物体附着到指定物体上|
| **[clone](mw.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): [`GameObject`](mw.GameObject.md) <br> 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachFromGameObject](mw.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
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
| **[onDestroy](mw.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](mw.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](mw.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[asyncFindGameObjectByGuid](mw.GameObject.md#asyncfindgameobjectbyguid)**(`guid`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过guid异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings..setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\> <br> 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`spawnInfo`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[findGameObjectByGuid](mw.GameObject.md#findgameobjectbyguid)**(`guid`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过guid查找GameObject|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): `undefined` \| [`GameObject`](mw.GameObject.md) <br> 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[] <br> 通过自定义tag获取GameObject|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md) <br> 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`guid`: `string`, `position?`: [`Vector`](mw.Vector.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\> <br> 构造一个 GameObject|
:::


### onSwitchComplete <Score text="onSwitchComplete" /> 

• **onSwitchComplete**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

切换摄像机完成的回调


::: warning Precautions

切换到当前摄像机完成执行绑定函数

:::

使用示例:创建一个名为"Example_Camera_FixedElevation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在场景中随机创建5个摄像机.按下键盘“1”，切换摄像机.按下键盘“2”，切换回默认摄像机.你将在场景中看到摄像机切换时的效果.代码如下:
```ts
@Class
export default class CameraExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            let curCameraIndex = -1;
            // 在场景中随机创建5个摄像机
            let cameraArray = new Array<Camera>();
            for (let i = 0;
i < 5;
i++) {
                let camera = GameObject.spawn({guid: "PlacedCamera"}) as Camera;
                camera.worldTransform.position = new Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldTransform.rotation = new Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-150, 150));
                cameraArray.push(camera);
                camera.onSwitchComplete.add(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                });
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, SwitchCameraBlendFunction.Linear);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Keys.Two, () => {
                console.log("Switch Default Camera");
                Camera.switch(myCamera);
            });
        }
    }
}
```

___

### springArm <Score text="springArm" /> 

• **springArm**: [`SpringArm`](mw.SpringArm.md) <Badge type="tip" text="client" />

弹簧臂


::: warning Precautions

摄像机系统由弹簧臂和摄像机组成，实际挂点是弹簧臂负责，而摄像机是挂载弹簧臂尾端。

:::

使用示例:将使用到的资源:"26950"拖入优先加载栏创建一个名为"Example_Camera_SpringArm"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中生成10根柱子用作触发摄像机弹簧杆碰撞，按下键盘“1”，启用/禁用摄像机弹簧杆碰撞，按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测。你可以看到禁用这些属性产生的不同的效果.代码如下:
```ts
@Class
export default class Example_Camera_SpringArm extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Transform(new Vector(100, i * 100, 0), Rotation.zero, Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.springArm.movementCollisionDetectionEnabled = !myCamera.springArm.movementCollisionDetectionEnabled;
                console.log("摄像机弹簧臂移动碰撞检测 " + myCamera.springArm.movementCollisionDetectionEnabled);
            });
        }
    }
}
```

## Accessors

### downAngleLimit <Score text="downAngleLimit" /> 

• `get` **downAngleLimit**(): `number` <Badge type="tip" text="client" />

获取摄像机向下角度限制


::: warning Precautions

摄像机向下旋转时的最大角度使用范围在0-90之间。

:::

使用示例: 创建一个名为"Example_Camera_DownAngleLimit"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,置摄像机角度限制,上抬最大角度为30，下旋最大角度为10.你将在场景中看到摄像机旋转受限的效果.代码如下:
```ts
@Class
export default class Example_Camera_DownAngleLimit extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **downAngleLimit**(`value`): `void` <Badge type="tip" text="client" />

设置摄像机向下角度限制


::: warning Precautions

摄像机向下旋转时的最大角度使用范围在0-90之间。

:::

使用示例: 创建一个名为"Example_Camera_DownAngleLimit"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,置摄像机角度限制,上抬最大角度为30，下旋最大角度为10.你将在场景中看到摄像机旋转受限的效果.代码如下:
```ts
@Class
export default class Example_Camera_DownAngleLimit extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度限制 |


___

### fixedElevation <Score text="fixedElevation" /> 

• `get` **fixedElevation**(): `boolean` <Badge type="tip" text="client" />

固定摄像机高度


::: warning Precautions

无论挂点如何移动摄像机位置的z轴值不会被改变。

:::

使用示例: 创建一个名为"Example_Camera_FixedElevation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，固定摄像机高度后跳跃.你将在场景中看到角色跳跃时摄像机跟随角色高度的效果.代码如下:
```ts
@Class
export default class Example_Camera_FixedElevation extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **fixedElevation**(`value`): `void` <Badge type="tip" text="client" />

固定摄像机高度


::: warning Precautions

无论挂点如何移动摄像机位置的z轴值不会被改变。

:::

使用示例: 创建一个名为"Example_Camera_FixedElevation"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，固定摄像机高度后跳跃.你将在场景中看到角色跳跃时摄像机跟随角色高度的效果.代码如下:
```ts
@Class
export default class Example_Camera_FixedElevation extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否固定 |


___

### fov <Score text="fov" /> 

• `get` **fov**(): `number` <Badge type="tip" text="client" />

获取摄像机视场


::: warning Precautions

FOV，也就是透视模式下的水平视野角度，FOV越大，可见的视野角度越大

:::

使用示例: 创建一个名为"Example_Camera_FOV"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按住键盘“2”，增大摄像机FOV,按住键盘“3”，减少摄像机FOV.你将在场景中看到摄像机FOV变化的效果.代码如下:
```ts
@Class
export default class Example_Camera_FOV extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **fov**(`value`): `void` <Badge type="tip" text="client" />

设置摄像机视场


::: warning Precautions

FOV，也就是透视模式下的水平视野角度，FOV越大，可见的视野角度越大

:::

使用示例: 创建一个名为"Example_Camera_FOV"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按住键盘“2”，增大摄像机FOV,按住键盘“3”，减少摄像机FOV.你将在场景中看到摄像机FOV变化的效果.代码如下:
```ts
@Class
export default class Example_Camera_FOV extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 视场 |


___

### maxLagDistance <Score text="maxLagDistance" /> 

• `get` **maxLagDistance**(): `number` <Badge type="tip" text="client" />

位置最大延迟距离


::: warning Precautions

控制人物在位移时，摄像机与挂点的最大距离

:::

使用示例: 创建一个名为"Example_Camera_MaxLagDistance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启位置延迟后设置最大位置延迟距离为200,你将在场景中看到摄像机位置延迟后摄像机最远只延迟200cm的效果.代码如下:
```ts
@Class
export default class Example_Camera_MaxLagDistance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **maxLagDistance**(`value`): `void` <Badge type="tip" text="client" />

位置最大延迟距离


::: warning Precautions

控制人物在位移时，摄像机与挂点的最大距离

:::

使用示例: 创建一个名为"Example_Camera_MaxLagDistance"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启位置延迟后设置最大位置延迟距离为200,你将在场景中看到摄像机位置延迟后摄像机最远只延迟200cm的效果.代码如下:
```ts
@Class
export default class Example_Camera_MaxLagDistance extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 延迟最大距离 |


___

### positionLagEnabled <Score text="positionLagEnabled" /> 

• `get` **positionLagEnabled**(): `boolean` <Badge type="tip" text="client" />

启用位置延迟


::: warning Precautions

开启后在人物位移时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 创建一个名为"Example_Camera_PositionLagEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到摄像机位置延迟的效果.代码如下:
```ts
@Class
export default class Example_Camera_PositionLagEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **positionLagEnabled**(`value`): `void` <Badge type="tip" text="client" />

启用位置延迟


::: warning Precautions

开启后在人物位移时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 创建一个名为"Example_Camera_PositionLagEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到摄像机位置延迟的效果.代码如下:
```ts
@Class
export default class Example_Camera_PositionLagEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启 |


___

### positionLagSpeed <Score text="positionLagSpeed" /> 

• `get` **positionLagSpeed**(): `number` <Badge type="tip" text="client" />

位置延迟速度


::: warning Precautions

控制人物在位移时，摄像机抵达目标位置的速度

:::

使用示例: 创建一个名为"Example_Camera_PositionLagSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启位置延迟后设置位置延迟恢复速度为1,你将在场景中看到摄像机位置延迟后摄像机缓慢恢复位置的效果.代码如下:
```ts
@Class
export default class Example_Camera_PositionLagSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **positionLagSpeed**(`value`): `void` <Badge type="tip" text="client" />

设置摄像机位置延迟速度


::: warning Precautions

控制人物在位移时，摄像机抵达目标位置的速度

:::

使用示例: 创建一个名为"Example_Camera_PositionLagSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启位置延迟后设置位置延迟恢复速度为1,你将在场景中看到摄像机位置延迟后摄像机缓慢恢复位置的效果.代码如下:
```ts
@Class
export default class Example_Camera_PositionLagSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 延迟速度 |


___

### positionMode <Score text="positionMode" /> 

• `get` **positionMode**(): [`CameraLocationMode`](../enums/mw.CameraLocationMode.md) <Badge type="tip" text="client" />

位置模式


::: warning Precautions

摄像机的位置模式。固定模式:摄像机固定在某一位置，不可移动。跟随模式:摄像机跟随某个物体(默认是人物角色)一直移动。

:::

使用示例: 创建一个名为"Example_Camera_PositionMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏按下键盘“2”，切换摄像机的位置模式.你将在场景中看到摄像机不同位置模式的效果并在控制台看到打印的摄像机当前位置模式.代码如下:
```ts
@Class
export default class Example_Camera_PositionMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 打印当前角色摄像机的位置模式和旋转模式
            console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            let preset = 0;
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.preset = (preset + 1) % 6;
                console.log("当前角色相机预设 " + CameraPreset[preset]);
                preset++;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Returns

[`CameraLocationMode`](../enums/mw.CameraLocationMode.md)

• `set` **positionMode**(`value`): `void` <Badge type="tip" text="client" />

位置模式


::: warning Precautions

摄像机的位置模式。固定模式:摄像机固定在某一位置，不可移动。跟随模式:摄像机跟随某个物体(默认是人物角色)一直移动。

:::

使用示例: 创建一个名为"Example_Camera_PositionMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏按下键盘“2”，切换摄像机的位置模式.你将在场景中看到摄像机不同位置模式的效果并在控制台看到打印的摄像机当前位置模式.代码如下:
```ts
@Class
export default class Example_Camera_PositionMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 打印当前角色摄像机的位置模式和旋转模式
            console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            let preset = 0;
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.preset = (preset + 1) % 6;
                console.log("当前角色相机预设 " + CameraPreset[preset]);
                preset++;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraLocationMode`](../enums/mw.CameraLocationMode.md) | 位置模式 |


___

### preset <Score text="preset" /> 

• `set` **preset**(`value`): `void`

设置摄像机预设

::: warning Precautions

摄像机提供预设视角模式。第一人称，第三人称，俯视角，默认，TPS过肩视角，FPS射击视角。

:::

使用示例: 创建一个名为"Example_Camera_Preset"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,按下键盘“1”，切换摄像机预设.你将在场景中看到摄像机不同预设的效果.代码如下:
```ts
@Class
export default class Example_Camera_Preset extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 打印当前角色摄像机的位置模式和旋转模式
            console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            let preset = 0;
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.preset = (preset + 1) % 6;
                console.log("当前角色相机预设 " + CameraPreset[preset]);
                preset++;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraPreset`](../enums/mw.CameraPreset.md) | 预设 |


___

### rotationLagEnabled <Score text="rotationLagEnabled" /> 

• `get` **rotationLagEnabled**(): `boolean` <Badge type="tip" text="client" />

启用旋转延迟


::: warning Precautions

开启后在视角旋转时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 创建一个名为"Example_Camera_RotationLagEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启摄像机旋转延迟,你将在场景中看到摄像机旋转时延迟的效果.代码如下:
```ts
@Class
export default class RotationLagEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`boolean`

• `set` **rotationLagEnabled**(`value`): `void` <Badge type="tip" text="client" />

启用旋转延迟


::: warning Precautions

开启后在视角旋转时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 创建一个名为"Example_Camera_RotationLagEnabled"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启摄像机旋转延迟,你将在场景中看到摄像机旋转时延迟的效果.代码如下:
```ts
@Class
export default class RotationLagEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否开启 |


___

### rotationLagSpeed <Score text="rotationLagSpeed" /> 

• `get` **rotationLagSpeed**(): `number` <Badge type="tip" text="client" />

旋转延迟速度


::: warning Precautions

控制视角在旋转时，摄像机抵达目标位置的角速度

:::

使用示例: 创建一个名为"Example_Camera_RotationLagSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启摄像机旋转延迟,你将在场景中看到摄像机旋转时延迟的效果.代码如下:
```ts
@Class
export default class Example_Camera_RotationLagSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **rotationLagSpeed**(`value`): `void` <Badge type="tip" text="client" />

旋转延迟速度


::: warning Precautions

控制视角在旋转时，摄像机抵达目标位置的角速度

:::

使用示例: 创建一个名为"Example_Camera_RotationLagSpeed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏开启摄像机旋转延迟,你将在场景中看到摄像机旋转时延迟的效果.代码如下:
```ts
@Class
export default class Example_Camera_RotationLagSpeed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 延迟速度 |


___

### rotationMode <Score text="rotationMode" /> 

• `get` **rotationMode**(): [`CameraRotationMode`](../enums/mw.CameraRotationMode.md) <Badge type="tip" text="client" />

旋转模式


::: warning Precautions

摄像机旋转模式。固定朝向:摄像机固定朝向某一个方向。跟随朝向:摄像机跟随目标面朝方向。控制朝向:摄像机的朝向受到输入控制。

:::

使用示例: 创建一个名为"Example_Camera_RotationMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏按下键盘“3”，切换摄像机的旋转模式.你将在场景中看到摄像机不同旋转模式的效果并在控制台看到打印的摄像机当前旋转模式.代码如下:
```ts
@Class
export default class Example_Camera_RotationMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 打印当前角色摄像机的位置模式和旋转模式
            console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            let preset = 0;
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.preset = (preset + 1) % 6;
                console.log("当前角色相机预设 " + CameraPreset[preset]);
                preset++;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Returns

[`CameraRotationMode`](../enums/mw.CameraRotationMode.md)

• `set` **rotationMode**(`value`): `void` <Badge type="tip" text="client" />

旋转模式


::: warning Precautions

摄像机旋转模式。固定朝向:摄像机固定朝向某一个方向。跟随朝向:摄像机跟随目标面朝方向。控制朝向:摄像机的朝向受到输入控制。

:::

使用示例: 创建一个名为"Example_Camera_RotationMode"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏按下键盘“3”，切换摄像机的旋转模式.你将在场景中看到摄像机不同旋转模式的效果并在控制台看到打印的摄像机当前旋转模式.代码如下:
```ts
@Class
export default class Example_Camera_RotationMode extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家控制的角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 打印当前角色摄像机的位置模式和旋转模式
            console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            let preset = 0;
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.preset = (preset + 1) % 6;
                console.log("当前角色相机预设 " + CameraPreset[preset]);
                preset++;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前角色摄像机的位置模式 " + CameraLocationMode[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前角色摄像机的旋转模式 " + CameraRotationMode[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraRotationMode`](../enums/mw.CameraRotationMode.md) | 旋转模式 |


___

### upAngleLimit <Score text="upAngleLimit" /> 

• `get` **upAngleLimit**(): `number` <Badge type="tip" text="client" />

向上角度限制


::: warning Precautions

摄像机向上旋转时的最大角度使用范围在0-90之间。

:::

使用示例: 创建一个名为"Example_Camera_UpAngleLimit"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,置摄像机角度限制,上抬最大角度为30，下旋最大角度为10.你将在场景中看到摄像机旋转受限的效果.代码如下:
```ts
@Class
export default class Example_Camera_UpAngleLimit extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Returns

`number`

• `set` **upAngleLimit**(`value`): `void` <Badge type="tip" text="client" />

向上角度限制


::: warning Precautions

摄像机向上旋转时的最大角度使用范围在0-91之间。

:::

使用示例: 创建一个名为"Example_Camera_UpAngleLimit"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,置摄像机角度限制,上抬最大角度为30，下旋最大角度为10.你将在场景中看到摄像机旋转受限的效果.代码如下:
```ts
@Class
export default class Example_Camera_UpAngleLimit extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取玩家角色
            let myCharacter = myPlayer.character;
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 开启摄像机位置延迟
            myCamera.positionLagEnabled = true;
            // 位置延迟恢复速度1
            myCamera.positionLagSpeed = 1;
            // 最大位置延迟距离200
            myCamera.maxLagDistance = 200;
            // 开启摄像机旋转延迟
            myCamera.rotationLagEnabled = true;
            // 旋转延迟恢复速度2
            myCamera.rotationLagSpeed = 2;
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 1000);
            });
            // 添加一个按键方法：按住键盘“2”，增大摄像机FOV
            InputUtil.onKeyPress(Keys.Two, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“3”，减少摄像机FOV
            InputUtil.onKeyPress(Keys.Three, () => {
                myCamera.fov -= 1;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度限制 |


___

### currentCamera <Score text="currentCamera" /> 

• `Static` `get` **currentCamera**(): [`Camera`](mw.Camera.md) <Badge type="tip" text="client" />

当前摄像机


::: warning Precautions

当前正在使用的摄像机

:::

使用示例:创建一个名为"Example_Camera_CurrentCamera"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在场景中随机创建5个摄像机.按下键盘“1”，切换摄像机.按下键盘“2”，切换回默认摄像机.你将在场景中看到摄像机切换时的效果.代码如下:
```ts
@Class
export default class Example_Camera_CurrentCamera extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            let curCameraIndex = -1;
            // 在场景中随机创建5个摄像机
            let cameraArray = new Array<Camera>();
            for (let i = 0;
i < 5;
i++) {
                let camera = GameObject.spawn({guid: "PlacedCamera"}) as Camera;
                camera.worldTransform.position = new Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldTransform.rotation = new Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-150, 150));
                cameraArray.push(camera);
                camera.onSwitchComplete.add(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                });
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, SwitchCameraBlendFunction.Linear);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Keys.Two, () => {
                console.log("Switch Default Camera");
                Camera.switch(myCamera);
            });
        }
    }
}
```

#### Returns

[`Camera`](mw.Camera.md)

## Methods
___

### lock <Score text="lock" /> 

• **lock**(`target`, `val?`): `void` <Badge type="tip" text="client" />

相机锁定目标


::: warning Precautions

当前摄像机按照参数设置锁定目标对象。

:::

使用示例:创建一个名为"Example_Camera_Lock"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,创建一个敌方角色作为锁定目标.敌方角色会持续追踪玩家角色。按下键盘“1”，锁定敌方角色.按下键盘“2”，手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程.按下键盘“3”，角色摄像机朝向目标（无追踪效果）.你将在场景中看到锁定切换时的效果.代码如下:
```ts
@Class
export default class Example_Camera_Lock extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家角色
            let myCharacter = myPlayer.character;
            // 创建一个敌方角色作为锁定目标
            let enemy = Player.spawnDefaultCharacter();
            enemy.switchToFlying()
            enemy.worldTransform.position = new Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Vector.subtract(myCharacter.worldTransform.position, enemy.worldTransform.position);
                if(distance.length < 200) {
                    enemy.addMovement(new Vector(0, 0, 5));
                } else {
                    let dir = distance.normalized;
                    enemy.addMovement(dir);
                    enemy.worldTransform.rotation = distance.toRotation();
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, {lockInterval:0, lockSpeed: 0, lockRange: 500, lockDistance: 5000, lockOffset: new Vector(0, 0, 80), bPause: true});
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“3”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Keys.Three, () => {
                let myCamera = Camera.currentCamera;
                myCamera.lookAt(enemy);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) | 目标物体 |
| `val?` | `Object` | lockInterval,lockSpeed,lockRange,lockDistance,lockOffset,bPause参数集合。 default:null |
| `val.bPause?` | `boolean` | - |
| `val.bRotateCameraByPitch?` | `boolean` | - |
| `val.bRotateCameraByYaw?` | `boolean` | - |
| `val.lockDistance?` | `number` | - |
| `val.lockInterval?` | `number` | - |
| `val.lockOffset?` | [`Vector`](mw.Vector.md) | - |
| `val.lockRange?` | `number` | - |
| `val.lockSpeed?` | `number` | - |


___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` <Badge type="tip" text="client" />

摄像机朝向目标


使用示例:创建一个名为"Example_Camera_LookAt"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,创建一个敌方角色作为锁定目标.敌方角色会持续追踪玩家角色。按下键盘“1”，锁定敌方角色.按下键盘“2”，手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程.按下键盘“3”，角色摄像机朝向目标（无追踪效果）.你将在场景中看到锁定切换时的效果.代码如下:
```ts
@Class
export default class Example_Camera_LookAt extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家角色
            let myCharacter = myPlayer.character;
            // 创建一个敌方角色作为锁定目标
            let enemy = Player.spawnDefaultCharacter();
            enemy.switchToFlying()
            enemy.worldTransform.position = new Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Vector.subtract(myCharacter.worldTransform.position, enemy.worldTransform.position);
                if(distance.length < 200) {
                    enemy.addMovement(new Vector(0, 0, 5));
                } else {
                    let dir = distance.normalized;
                    enemy.addMovement(dir);
                    enemy.worldTransform.rotation = distance.toRotation();
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, {lockInterval:0, lockSpeed: 0, lockRange: 500, lockDistance: 5000, lockOffset: new Vector(0, 0, 80), bPause: true});
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“3”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Keys.Three, () => {
                let myCamera = Camera.currentCamera;
                myCamera.lookAt(enemy);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) \| [`Vector`](mw.Vector.md) | 目标 |


___

### unlock <Score text="unlock" /> 

• **unlock**(): `void` <Badge type="tip" text="client" />

取消锁定目标


使用示例:创建一个名为"Example_Camera_Unlock"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,创建一个敌方角色作为锁定目标.敌方角色会持续追踪玩家角色。按下键盘“1”，锁定敌方角色.按下键盘“2”，手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程.按下键盘“3”，角色摄像机朝向目标（无追踪效果）.你将在场景中看到锁定切换时的效果.代码如下:
```ts
@Class
export default class Example_Camera_Unlock extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端的玩家(自己)
            let myPlayer = Player.localPlayer;
            // 获取当前玩家角色
            let myCharacter = myPlayer.character;
            // 创建一个敌方角色作为锁定目标
            let enemy = Player.spawnDefaultCharacter();
            enemy.switchToFlying()
            enemy.worldTransform.position = new Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Vector.subtract(myCharacter.worldTransform.position, enemy.worldTransform.position);
                if(distance.length < 200) {
                    enemy.addMovement(new Vector(0, 0, 5));
                } else {
                    let dir = distance.normalized;
                    enemy.addMovement(dir);
                    enemy.worldTransform.rotation = distance.toRotation();
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, {lockInterval:0, lockSpeed: 0, lockRange: 500, lockDistance: 5000, lockOffset: new Vector(0, 0, 80), bPause: true});
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“3”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Keys.Three, () => {
                let myCamera = Camera.currentCamera;
                myCamera.lookAt(enemy);
            });
        }
    }
}
```


___

### shake <Score text="shake" /> 

• `Static` **shake**(`shakeData`, `duration?`): `void` <Badge type="tip" text="client" />

开始摄像机抖动


使用示例:创建一个名为"Example_Camera_Shake"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，抖动相机5秒.按下键盘“2”，停止相机抖动.你将在场景中看到摄像机镜头抖动时的效果.代码如下:
```ts
@Class
export default class Example_Camera_Shake extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法:按下键盘“1”，抖动相机5秒
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("Start Shake ");
                Camera.shake({positionYAmplitude: 1, positionYFrequency: 0.5, positionZAmplitude: 1, positionZFrequency: 1}, 5);
            });
            // 添加一个按键方法:按下键盘“2”，停止相机抖动
            InputUtil.onKeyUp(Keys.Two, () => {
                console.log("Stop Shake ");
                Camera.stopShake();
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shakeData` | [`ShakeData`](../interfaces/mw.ShakeData.md) |  抖动数据 |
| `duration?` | `number` |  持续时间(秒) default: 1 |


___

### stopShake <Score text="stopShake" /> 

• `Static` **stopShake**(): `void` <Badge type="tip" text="client" />

停止摄像机抖动


使用示例:创建一个名为"Example_Camera_StopShake"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏.按下键盘“1”，抖动相机5秒.按下键盘“2”，停止相机抖动.你将在场景中看到摄像机镜头抖动时的效果.代码如下:
```ts
@Class
export default class Example_Camera_StopShake extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法:按下键盘“1”，抖动相机5秒
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("Start Shake ");
                Camera.shake({positionYAmplitude: 1, positionYFrequency: 0.5, positionZAmplitude: 1, positionZFrequency: 1}, 5);
            });
            // 添加一个按键方法:按下键盘“2”，停止相机抖动
            InputUtil.onKeyUp(Keys.Two, () => {
                console.log("Stop Shake ");
                Camera.stopShake();
            });
        }
    }
}
```


___

### switch <Score text="switch" /> 

• `Static` **switch**(`newCamera`, `blendTime?`, `blendFunc?`, `blendExp?`): [`Camera`](mw.Camera.md) <Badge type="tip" text="client" />

切换摄像机


使用示例:创建一个名为"Example_Camera_Switch"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在场景中随机创建5个摄像机.按下键盘“1”，切换摄像机.按下键盘“2”，切换回默认摄像机.你将在场景中看到摄像机切换时的效果.代码如下:
```ts
@Class
export default class Example_Camera_Switch extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            let curCameraIndex = -1;
            // 在场景中随机创建5个摄像机
            let cameraArray = new Array<Camera>();
            for (let i = 0;
i < 5;
i++) {
                let camera = GameObject.spawn({guid: "PlacedCamera"}) as Camera;
                camera.worldTransform.position = new Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldTransform.rotation = new Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-150, 150));
                cameraArray.push(camera);
                camera.onSwitchComplete.add(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                });
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, SwitchCameraBlendFunction.Linear);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Keys.Two, () => {
                console.log("Switch Default Camera");
                Camera.switch(myCamera);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newCamera` | [`Camera`](mw.Camera.md) |  想要切换的目标摄像机对象,当传入的参数类型为Transform时会使用该Transform的位置跟旋转生成一个Camera再进行切换 |
| `blendTime?` | `number` |  混合时间(秒) default: 0 |
| `blendFunc?` | [`SwitchCameraBlendFunction`](../enums/mw.SwitchCameraBlendFunction.md) |  切换时用到的混合函数 default: Linear |
| `blendExp?` | `number` |  混合额外变量,用于控制混合时的快慢程度,具体作用看枚举SwitchCameraBlendFunction default: 0 |

#### Returns

[`Camera`](mw.Camera.md)

目标camera对象
