[Gameplay](../groups/Gameplay.Gameplay.md) / Camera

# Camera <Badge type="tip" text="Class" /> <Score text="Camera" />

摄像机

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Camera`**

## Table of contents

| Properties |
| :-----|
| **[onSwitchCompleted](Gameplay.Camera.md#onswitchcompleted)**: [`Delegate`](Type.Delegate.md)<() => `void`\> <br> 切换摄像机完成的回调|
| **[springArm](Gameplay.Camera.md#springarm)**: [`SpringArm`](Gameplay.SpringArm.md) <br> 弹簧臂|

| Accessors |
| :-----|
| **[downAngleLimit](Gameplay.Camera.md#downanglelimit)**(): `number` <br> 获取摄像机向下角度限制|
| **[fixedElevation](Gameplay.Camera.md#fixedelevation)**(): `boolean` <br> 固定摄像机高度|
| **[fov](Gameplay.Camera.md#fov)**(): `number` <br> 获取摄像机视场|
| **[localTransform](Gameplay.Camera.md#localtransform)**(): [`Transform`](Type.Transform.md) <br> 获取摄像机相对变换|
| **[maxLagDistance](Gameplay.Camera.md#maxlagdistance)**(): `number` <br> 位置最大延迟距离|
| **[offset](Gameplay.Camera.md#offset)**(): [`Vector`](Type.Vector.md) <br> 摄像机位置偏移|
| **[positionLagEnabled](Gameplay.Camera.md#positionlagenabled)**(): `boolean` <br> 启用位置延迟|
| **[positionLagSpeed](Gameplay.Camera.md#positionlagspeed)**(): `number` <br> 位置延迟速度|
| **[positionMode](Gameplay.Camera.md#positionmode)**(): [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) <br> 位置模式|
| **[preset](Gameplay.Camera.md#preset)**(`value`: [`CameraPreset`](../enums/Gameplay.CameraPreset.md)): `void` <br> 设置摄像机预设|
| **[rotationLagEnabled](Gameplay.Camera.md#rotationlagenabled)**(): `boolean` <br> 启用旋转延迟|
| **[rotationLagSpeed](Gameplay.Camera.md#rotationlagspeed)**(): `number` <br> 旋转延迟速度|
| **[rotationMode](Gameplay.Camera.md#rotationmode)**(): [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) <br> 旋转模式|
| **[upAngleLimit](Gameplay.Camera.md#upanglelimit)**(): `number` <br> 向上角度限制|
| **[worldTransform](Gameplay.Camera.md#worldtransform)**(): [`Transform`](Type.Transform.md) <br> 获取摄像机世界变换|
| **[currentCamera](Gameplay.Camera.md#currentcamera)**(): [`Camera`](Gameplay.Camera.md) <br> 当前摄像机|


::: details 点击查看继承
| Accessors |
| :-----|
| **[forwardVector](Gameplay.GameObject.md#forwardvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[guid](Gameplay.GameObject.md#guid)**(): `string` <br> 获取对象的GUID（唯一标识一个对象的字符串）。|
| **[lockStatus](Gameplay.GameObject.md#lockstatus)**(): `boolean` <br> 获取对象是否锁定|
| **[name](Gameplay.GameObject.md#name)**(): `string` <br> 返回当前物体名称|
| **[netStatus](Gameplay.GameObject.md#netstatus)**(): [`NetStatus`](../enums/Type.NetStatus.md) <br> 获取当前物体同步状态|
| **[parent](Gameplay.GameObject.md#parent)**(): `GameObject` <br> 获取当前父物体|
| **[relativeLocation](Gameplay.GameObject.md#relativelocation)**(): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[relativeRotation](Gameplay.GameObject.md#relativerotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[relativeScale](Gameplay.GameObject.md#relativescale)**(): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[rightVector](Gameplay.GameObject.md#rightvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[staticStatus](Gameplay.GameObject.md#staticstatus)**(): `boolean` <br> 获取对象是否静态|
| **[tag](Gameplay.GameObject.md#tag)**(): `string` <br> 获取当前物体的Tag|
| **[transform](Gameplay.GameObject.md#transform)**(): [`Transform`](Type.Transform.md) <br> 返回当前物体transform|
| **[upVector](Gameplay.GameObject.md#upvector)**(): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[useUpdate](Gameplay.GameObject.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|
| **[worldLocation](Gameplay.GameObject.md#worldlocation)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[worldRotation](Gameplay.GameObject.md#worldrotation)**(): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[worldScale](Gameplay.GameObject.md#worldscale)**(): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
:::


| Methods |
| :-----|
| **[lock](Gameplay.Camera.md#lock)**(`target`: `GameObject`, `[lock](Gameplay.Camera.md#lock)Interval?`, `[lock](Gameplay.Camera.md#lock)Speed?`, `[lock](Gameplay.Camera.md#lock)Range?`, `[lock](Gameplay.Camera.md#lock)Distance?`, `[lock](Gameplay.Camera.md#lock)Offset?`, `bPause?`: `boolean`): `void` <br> 相机锁定目标|
| **[lookAt](Gameplay.Camera.md#lookat)**(`target`: `GameObject` \): `void` <br> 摄像机朝向目标|
| **[unlock](Gameplay.Camera.md#unlock)**(): `void` <br> 取消锁定目标|
| **[shake](Gameplay.Camera.md#shake)**(`[shake](Gameplay.Camera.md#shake)Data`, `duration?`: `number`): `void` <br> 开始摄像机抖动|
| **[stopShake](Gameplay.Camera.md#stopshake)**(): `void` <br> 停止摄像机抖动|
| **[switch](Gameplay.Camera.md#switch)**(`newCamera`: [`Camera`](Gameplay.Camera.md), `blendTime?`: `number`, `blendFunc?`: [`SwitchCameraBlendFunction`](../enums/Gameplay.SwitchCameraBlendFunction.md), `blendExp?`: `number`): [`Camera`](Gameplay.Camera.md) <br> 切换摄像机|


::: details 点击查看继承
| Methods |
| :-----|
| **[addDestroyCallback](Gameplay.GameObject.md#adddestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 添加物体Destroy事件回调|
| **[asyncGetScriptByName](Gameplay.GameObject.md#asyncgetscriptbyname)**(`name`: `string`): `Promise`<`Script`\> <br> 异步获得当前物体下的指定脚本 客户端不维系父子关系|
| **[attachComponent](Gameplay.GameObject.md#attachcomponent)**(`component`: `Component`, `isStatic?`: `boolean`): `boolean` <br> 附加组件|
| **[attachToGameObject](Gameplay.GameObject.md#attachtogameobject)**(`obj`: `GameObject`): `void` <br> 将物体附着到指定物体上|
| **[clone](Gameplay.GameObject.md#clone)**(`spawnInfo?`: `boolean` \): `GameObject` <br> 复制对象|
| **[deleteDestroyCallback](Gameplay.GameObject.md#deletedestroycallback)**(`callback`: (...`arg`: `unknown`[]) => `void`): `void` <br> 移除物体Destroy事件回调|
| **[destroy](Gameplay.GameObject.md#destroy)**(): `void` <br> 删除对象|
| **[detachComponent](Gameplay.GameObject.md#detachcomponent)**(`component`: `string` \): `void` <br> 移除组件|
| **[detachFromGameObject](Gameplay.GameObject.md#detachfromgameobject)**(): `void` <br> 将此物体与当前附着的物体分离|
| **[getBoundingBoxSize](Gameplay.GameObject.md#getboundingboxsize)**(`nonColliding?`: `boolean`, `includeFromChildActors?`: `boolean`, `outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体包围盒大小|
| **[getBounds](Gameplay.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `OriginOuter`: [`Vector`](Type.Vector.md), `BoxExtentOuter`: [`Vector`](Type.Vector.md), `includeFromChildActors?`: `boolean`): `void` <br> 获取GameObject边界|
| **[getChildByGuid](Gameplay.GameObject.md#getchildbyguid)**(`GUID`: `string`): `undefined` \| `GameObject` <br> 根据GUID查找子物体|
| **[getChildByName](Gameplay.GameObject.md#getchildbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 根据名称查找子物体|
| **[getChildren](Gameplay.GameObject.md#getchildren)**(): `undefined` \| `GameObject`[] <br> 获取Children，客户端不维系父子关系。推荐使用Find替代|
| **[getChildrenBoxCenter](Gameplay.GameObject.md#getchildrenboxcenter)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getCollision](Gameplay.GameObject.md#getcollision)**(): [`PropertyStatus`](../enums/Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.CollisionStatus.md) <br> 返回碰撞状态|
| **[getForwardVector](Gameplay.GameObject.md#getforwardvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向前向量|
| **[getRelativeLocation](Gameplay.GameObject.md#getrelativelocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对位置|
| **[getRelativeRotation](Gameplay.GameObject.md#getrelativerotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取相对旋转|
| **[getRelativeScale](Gameplay.GameObject.md#getrelativescale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取相对缩放|
| **[getRightVector](Gameplay.GameObject.md#getrightvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向右向量|
| **[getScriptByGuid](Gameplay.GameObject.md#getscriptbyguid)**(`GUID`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScriptByName](Gameplay.GameObject.md#getscriptbyname)**(`name`: `string`): `undefined` \| `Script` <br> 获得当前物体下的指定脚本|
| **[getScripts](Gameplay.GameObject.md#getscripts)**(): `undefined` \| `Script`[] <br> 获得当前物体下的所有脚本|
| **[getSourceAssetGuid](Gameplay.GameObject.md#getsourceassetguid)**(): `string` <br> 获取当前物体使用资源的GUID|
| **[getTransform](Gameplay.GameObject.md#gettransform)**(`outer?`: [`Transform`](Type.Transform.md)): [`Transform`](Type.Transform.md) <br> 返回当前物体Transform|
| **[getUpVector](Gameplay.GameObject.md#getupvector)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取当前物体的向上向量|
| **[getVisibility](Gameplay.GameObject.md#getvisibility)**(): `boolean` <br> 获取GameObject是否被显示|
| **[getWorldLocation](Gameplay.GameObject.md#getworldlocation)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界坐标|
| **[getWorldRotation](Gameplay.GameObject.md#getworldrotation)**(`outer?`: [`Rotation`](Type.Rotation.md)): [`Rotation`](Type.Rotation.md) <br> 获取物体的世界旋转|
| **[getWorldScale](Gameplay.GameObject.md#getworldscale)**(`outer?`: [`Vector`](Type.Vector.md)): [`Vector`](Type.Vector.md) <br> 获取物体的世界缩放|
| **[isRunningClient](Gameplay.GameObject.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](Gameplay.GameObject.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onReplicated](Gameplay.GameObject.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <br> 属性被同步事件 ClientOnly|
| **[onStart](Gameplay.GameObject.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](Gameplay.GameObject.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|
| **[ready](Gameplay.GameObject.md#ready)**(): `Promise`<[`GameObject`](Gameplay.GameObject.md)\> <br> GameObject准备好后返回|
| **[setCollision](Gameplay.GameObject.md#setcollision)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md) \, `propagateToChildren?`: `boolean`): `void` <br> 设置碰撞状态|
| **[setLocationAndRotation](Gameplay.GameObject.md#setlocationandrotation)**(`location`: [`Vector`](Type.Vector.md), `rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 同时设置物体的世界位置与旋转|
| **[setRelativeLocation](Gameplay.GameObject.md#setrelativelocation)**(`location`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对位置|
| **[setRelativeRotation](Gameplay.GameObject.md#setrelativerotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置相对旋转|
| **[setRelativeScale](Gameplay.GameObject.md#setrelativescale)**(`scale`: [`Vector`](Type.Vector.md)): `void` <br> 设置相对缩放|
| **[setTransform](Gameplay.GameObject.md#settransform)**(`transform`: [`Transform`](Type.Transform.md)): `void` <br> 设置当前物体transform|
| **[setVisibility](Gameplay.GameObject.md#setvisibility)**(`status`: [`PropertyStatus`](../enums/Type.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void` <br> 设置GameObject是否被显示|
| **[setWorldLocation](Gameplay.GameObject.md#setworldlocation)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界坐标|
| **[setWorldRotation](Gameplay.GameObject.md#setworldrotation)**(`rotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置物体的世界旋转|
| **[setWorldScale](Gameplay.GameObject.md#setworldscale)**(`v`: [`Vector`](Type.Vector.md)): `void` <br> 设置物体的世界缩放|
| **[asyncFind](Gameplay.GameObject.md#asyncfind)**(`GUID`: `string`): `Promise`<`GameObject`\> <br> 通过GUID异步查找GameObject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);|
| **[asyncSpawn](Gameplay.GameObject.md#asyncspawn)**<`T`: extends `GameObject`<`T`\>\>(`spawnInfo`: [`SpawnInfo`](../interfaces/Type.SpawnInfo.md)): `Promise`<`T`: extends `GameObject`<`T`\>\> <br> 异步构造一个 GameObject 资源不存在会先去下载资源再去创建|
| **[find](Gameplay.GameObject.md#find)**(`GUID`: `string`): `GameObject` <br> 通过GUID查找GameObject|
| **[findGameObjectByTag](Gameplay.GameObject.md#findgameobjectbytag)**(`InTag`: `string`): `GameObject`[] <br> 通过自定义Tag获取GameObject|
| **[getGameObjectByName](Gameplay.GameObject.md#getgameobjectbyname)**(`name`: `string`): `undefined` \| `GameObject` <br> 通过名字查找物体|
| **[getGameObjectsByName](Gameplay.GameObject.md#getgameobjectsbyname)**(`name`: `string`): `GameObject`[] <br> 通过名字查找物体|
| **[spawn](Gameplay.GameObject.md#spawn)**<`T`: extends `GameObject`<`T`\>\>(`[spawn](Gameplay.GameObject.md#spawn)Info`): `T`: extends `GameObject`<`T`\> <br> 构造一个 GameObject|
:::


## Properties

### onSwitchCompleted <Score text="onSwitchCompleted" /> 

• **onSwitchCompleted**: [`Delegate`](Type.Delegate.md)<() => `void`\> <Badge type="tip" text="client" />

切换摄像机完成的回调


::: warning Precautions

切换到当前摄像机完成执行绑定函数

:::

使用示例:在场景中随机创建5个摄像机，提供按键方法切换摄像机。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
                let camera = GameObject.spawn({guid: "Camera"}) as Camera;
                camera.worldLocation = new Type.Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldRotation = new Type.Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-180, 180));
                cameraArray.push(camera);
                camera.onSwitchCompleted.bind(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                })
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, newCamera);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                console.log("Switch Default Camera");
                Camera.switch(myCamera);
            });
        }
    }
}
```

___

### springArm <Score text="springArm" /> 

• **springArm**: [`SpringArm`](Gameplay.SpringArm.md) <Badge type="tip" text="client" />

弹簧臂


::: warning Precautions

摄像机系统由弹簧臂和摄像机组成，实际挂点是弹簧臂负责，而摄像机是挂载弹簧臂尾端。

:::

使用示例:生成10根柱子用作摄像机弹簧杆碰撞，提供按键方法操作弹簧臂的碰撞效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
// 预加载使用到的资源
@Core.Property()
preloadAssets = "26950";
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        if(SystemUtil.isServer()) {
            // 生成10根柱子用作摄像机弹簧杆碰撞
            for (let i = 0;
i < 10;
i++) {
                GameObject.spawn({guid: "26950", transform: new Type.Transform(new Type.Vector(100, i * 20), Type.Rotation.zero, Type.Vector.one)});
            }
        }
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前摄像机
            let myCamera = Camera.currentCamera;
            // 摄像机y轴偏移-200
            myCamera.offset = new Type.Vector(0, -200, 0);
            // 添加一个按键方法：按下键盘“1”，启用/禁用摄像机弹簧杆碰撞
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.springArm.collisionEnabled = !myCamera.springArm.collisionEnabled;
                console.log("摄像机弹簧臂的碰撞 " + myCamera.springArm.collisionEnabled);
            });
            // 添加一个按键方法：按下键盘“2”，启用/禁用摄像机弹簧杆移动碰撞检测
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 16;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 17;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 18;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 19;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否固定 |



### fov <Score text="fov" /> 

• `get` **fov**(): `number` <Badge type="tip" text="client" />

获取摄像机视场


::: warning Precautions

FOV，也就是透视模式下的水平视野角度，FOV越大，可见的视野角度越大

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 2;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 视场 |



### localTransform <Score text="localTransform" /> 

• `get` **localTransform**(): [`Transform`](Type.Transform.md)

获取摄像机相对变换

#### Returns

[`Transform`](Type.Transform.md)

• `set` **localTransform**(`value`): `void`

设置摄像机相对变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](Type.Transform.md) | 变换 |



### maxLagDistance <Score text="maxLagDistance" /> 

• `get` **maxLagDistance**(): `number` <Badge type="tip" text="client" />

位置最大延迟距离


::: warning Precautions

控制人物在位移时，摄像机与挂点的最大距离

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 6;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 7;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 延迟最大距离 |



### offset <Score text="offset" /> 

• `get` **offset**(): [`Vector`](Type.Vector.md) <Badge type="tip" text="client" />

摄像机位置偏移


::: warning Precautions

以摄像机镜头位置进行的偏移

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 12;
            });
        }
    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

• `set` **offset**(`value`): `void` <Badge type="tip" text="client" />

摄像机位置偏移


::: warning Precautions

以摄像机镜头位置进行的偏移

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 13;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector`](Type.Vector.md) | 位置偏移 |



### positionLagEnabled <Score text="positionLagEnabled" /> 

• `get` **positionLagEnabled**(): `boolean` <Badge type="tip" text="client" />

启用位置延迟


::: warning Precautions

开启后在人物位移时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 2;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 3;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 4;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 5;
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

• `get` **positionMode**(): [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) <Badge type="tip" text="client" />

位置模式


::: warning Precautions

摄像机的位置模式。固定模式：摄像机固定在某一位置，不可移动。跟随模式：摄像机跟随某个物体(默认是人物角色)一直移动。

:::

使用示例:提供按键方法切换摄像机预设，位置模式和旋转模式查看效果。
```ts
@Core.Class
export default class CameraSetExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.preset = (myCamera.preset + 1) % 6;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前摄像机的位置模式 " + MoveFacingDirection[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 4;
                console.log("当前摄像机的旋转模式 " + MoveFacingDirection[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Returns

[`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md)

• `set` **positionMode**(`value`): `void` <Badge type="tip" text="client" />

位置模式


::: warning Precautions

摄像机的位置模式。固定模式：摄像机固定在某一位置，不可移动。跟随模式：摄像机跟随某个物体(默认是人物角色)一直移动。

:::

使用示例:提供按键方法切换摄像机预设，位置模式和旋转模式查看效果。
```ts
@Core.Class
export default class CameraSetExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.preset = (myCamera.preset + 1) % 6;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前摄像机的位置模式 " + MoveFacingDirection[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 5;
                console.log("当前摄像机的旋转模式 " + MoveFacingDirection[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraLocationMode`](../enums/Gameplay.CameraLocationMode.md) | 位置模式 |


___

### preset <Score text="preset" /> 

• `set` **preset**(`value`): `void`

设置摄像机预设

::: warning Precautions

摄像机提供预设视角模式。第一人称，第三人称，俯视角，默认，TPS过肩视角，FPS射击视角。

:::

使用示例:提供按键方法切换摄像机预设，位置模式和旋转模式查看效果。
```ts
@Core.Class
export default class CameraSetExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.preset = (myCamera.preset + 1) % 6;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前摄像机的位置模式 " + MoveFacingDirection[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 3;
                console.log("当前摄像机的旋转模式 " + MoveFacingDirection[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraPreset`](../enums/Gameplay.CameraPreset.md) | 预设 |



### rotationLagEnabled <Score text="rotationLagEnabled" /> 

• `get` **rotationLagEnabled**(): `boolean` <Badge type="tip" text="client" />

启用旋转延迟


::: warning Precautions

开启后在视角旋转时，对摄像机跟随人物的运动进行延迟，关闭则没有延迟效果

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 8;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 9;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 10;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 11;
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

• `get` **rotationMode**(): [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) <Badge type="tip" text="client" />

旋转模式


::: warning Precautions

摄像机旋转模式。固定朝向：摄像机固定朝向某一个方向。跟随朝向：摄像机跟随目标面朝方向。控制朝向：摄像机的朝向受到输入控制。

:::

使用示例:提供按键方法切换摄像机预设，位置模式和旋转模式查看效果。
```ts
@Core.Class
export default class CameraSetExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.preset = (myCamera.preset + 1) % 6;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前摄像机的位置模式 " + MoveFacingDirection[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 6;
                console.log("当前摄像机的旋转模式 " + MoveFacingDirection[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Returns

[`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md)

• `set` **rotationMode**(`value`): `void` <Badge type="tip" text="client" />

旋转模式


::: warning Precautions

摄像机旋转模式。固定朝向：摄像机固定朝向某一个方向。跟随朝向：摄像机跟随目标面朝方向。控制朝向：摄像机的朝向受到输入控制。

:::

使用示例:提供按键方法切换摄像机预设，位置模式和旋转模式查看效果。
```ts
@Core.Class
export default class CameraSetExample extends Core.Script {
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
            // 添加一个按键方法：按下键盘“1”，切换摄像机预设
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.preset = (myCamera.preset + 1) % 6;
            });
            // 添加一个按键方法：按下键盘“2”，切换摄像机的位置模式
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                myCamera.positionMode = (myCamera.positionMode + 1) % 2;
                console.log("当前摄像机的位置模式 " + MoveFacingDirection[myCamera.positionMode]);
            });
            // 添加一个按键方法：按下键盘“3”，切换摄像机的旋转模式
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                myCamera.rotationMode = (myCamera.rotationMode + 1) % 7;
                console.log("当前摄像机的旋转模式 " + MoveFacingDirection[myCamera.rotationMode]);
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`CameraRotationMode`](../enums/Gameplay.CameraRotationMode.md) | 旋转模式 |



### upAngleLimit <Score text="upAngleLimit" /> 

• `get` **upAngleLimit**(): `number` <Badge type="tip" text="client" />

向上角度限制


::: warning Precautions

摄像机向上旋转时的最大角度使用范围在0-90之间。

:::

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 14;
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

使用示例: 获取当前摄像机，开启摄像机旋转延迟和位置延迟并设置相关参数，设置摄像机位置偏移，设置摄像机角度限制。提供按键方法固定摄像机高度和调整摄像机FOV，查看效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            // 开启摄像机旋转延迟和位置延迟并设置相关参数
            myCamera.positionLagEnabled = true;
            myCamera.rotationLagEnabled = true;
            myCamera.positionLagSpeed = 10;
// 位置延迟恢复速度10
            myCamera.maxLagDistance = 60;
// 最大位置延迟距离60
            myCamera.rotationLagSpeed = 20;
// 旋转延迟恢复速度10
            // 设置摄像机位置偏移（0，0，100）抬高摄像机
            myCamera.offset = new Type.Vector(0, 0, 100);
            // 设置摄像机角度限制
            myCamera.upAngleLimit = 30
            myCamera.downAngleLimit = 10;
            // 添加一个按键方法：按下键盘“1”，固定摄像机高度后跳跃
            InputUtil.onKeyDown(Type.Keys.One, () => {
                myCamera.fixedElevation = true;
                myCharacter.jump();
                setTimeout(() => {
                    myCamera.fixedElevation = false;
                }, 50);
            });
            // 添加一个按键方法：按住键盘“UP”，增大摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Up, () => {
                myCamera.fov += 1;
            });
            // 添加一个按键方法：按住键盘“Down”，减少摄像机FOV
            InputUtil.onKeyPress(Type.Keys.Down, () => {
                myCamera.fov -= 15;
            });
        }
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度限制 |



### worldTransform <Score text="worldTransform" /> 

• `get` **worldTransform**(): [`Transform`](Type.Transform.md)

获取摄像机世界变换

#### Returns

[`Transform`](Type.Transform.md)

• `set` **worldTransform**(`value`): `void`

设置摄像机世界变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Transform`](Type.Transform.md) | 变换 |


___

### currentCamera <Score text="currentCamera" /> 

• `Static` `get` **currentCamera**(): [`Camera`](Gameplay.Camera.md) <Badge type="tip" text="client" />

当前摄像机


::: warning Precautions

当前正在使用的摄像机

:::

使用示例:在场景中随机创建5个摄像机，提供按键方法切换摄像机。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
                let camera = GameObject.spawn({guid: "Camera"}) as Camera;
                camera.worldLocation = new Type.Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldRotation = new Type.Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-180, 180));
                cameraArray.push(camera);
                camera.onSwitchCompleted.bind(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                })
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, newCamera);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                console.log("Switch Default Camera");
                Camera.switch(myCamera);
            });
        }
    }
}
```

#### Returns

[`Camera`](Gameplay.Camera.md)

## Methods

### lock <Score text="lock" /> 

• **lock**(`target`, `lockInterval?`, `lockSpeed?`, `lockRange?`, `lockDistance?`, `lockOffset?`, `bPause?`): `void` <Badge type="tip" text="client" />

相机锁定目标


::: warning Precautions

当前摄像机按照参数设置锁定目标对象。

:::

使用示例:创建一个敌方角色作为锁定目标，敌方角色四处移动追踪玩家角色，提供按键方法锁定和解锁敌方角色以及看向角色，查看不同的效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            enemy.worldLocation = new Type.Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Type.Vector.subtract(enemy.worldLocation, myCharacter.worldLocation);
                if(distance.length < 200) {
                    if(enemy.worldLocation.z < 300) {
                        enemy.addMovement(new Type.Vector(0, 0, 5));
                    }
                } else {
                    let dir = distance.normalized;
                    enemy.worldRotation = dir.toRotation();
                    dir.z += MathUtil.randomFloat(0, 2);
                    enemy.addMovement(dir.multiply(10));
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, 0, 0, 100, 1000, new Type.Vector(0, 0, 80), true);
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“3”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Type.Keys.Three, () => {
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
| `target` | `GameObject` | 目标物体 |
| `lockInterval?` | `number` | 锁定间隔(间隔多少秒暂停/恢复锁定) default:0 |
| `lockSpeed?` | `number` | 锁定速度(决定摄像机多久旋转至目标朝向，参数值越大越快,范围0-5，但0是直接旋转至目标朝向) default:1.3 |
| `lockRange?` | `number` | 锁定范围(以屏幕坐标中心为圆心，这个值表示半径) default:100 |
| `lockDistance?` | `number` | 锁定距离(目标到摄像机的距离) default:1000 |
| `lockOffset?` | [`Vector`](Type.Vector.md) | 锁定偏移 default:Type.Vector.zero |
| `bPause?` | `boolean` | 决定超出范围/距离后锁定是暂停/取消，为true是暂停 default:true |


___

### lookAt <Score text="lookAt" /> 

• **lookAt**(`target`): `void` <Badge type="tip" text="client" />

摄像机朝向目标


使用示例:创建一个敌方角色作为锁定目标，敌方角色四处移动追踪玩家角色，提供按键方法锁定和解锁敌方角色以及看向角色，查看不同的效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            enemy.worldLocation = new Type.Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Type.Vector.subtract(enemy.worldLocation, myCharacter.worldLocation);
                if(distance.length < 200) {
                    if(enemy.worldLocation.z < 300) {
                        enemy.addMovement(new Type.Vector(0, 0, 5));
                    }
                } else {
                    let dir = distance.normalized;
                    enemy.worldRotation = dir.toRotation();
                    dir.z += MathUtil.randomFloat(0, 2);
                    enemy.addMovement(dir.multiply(10));
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, 0, 0, 100, 1000, new Type.Vector(0, 0, 80), true);
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“5”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Type.Keys.Three, () => {
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
| `target` | `GameObject` \| [`Vector`](Type.Vector.md) | 目标 |



### unlock <Score text="unlock" /> 

• **unlock**(): `void` <Badge type="tip" text="client" />

取消锁定目标


使用示例:创建一个敌方角色作为锁定目标，敌方角色四处移动追踪玩家角色，提供按键方法锁定和解锁敌方角色以及看向角色，查看不同的效果。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
            enemy.worldLocation = new Type.Vector(1000, 500, 130);
            // 敌方角色追踪玩家角色
            TimeUtil.setInterval(() => {
                let distance = Type.Vector.subtract(enemy.worldLocation, myCharacter.worldLocation);
                if(distance.length < 200) {
                    if(enemy.worldLocation.z < 300) {
                        enemy.addMovement(new Type.Vector(0, 0, 5));
                    }
                } else {
                    let dir = distance.normalized;
                    enemy.worldRotation = dir.toRotation();
                    dir.z += MathUtil.randomFloat(0, 2);
                    enemy.addMovement(dir.multiply(10));
                }
            }, 0.02)
            // 添加一个按键方法：按下键盘“1”，锁定敌方角色
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.error("Start Lock");
                let myCamera = Camera.currentCamera;
                myCamera.lock(enemy, 0, 0, 100, 1000, new Type.Vector(0, 0, 80), true);
            });
            // 添加一个按键方法：按下键盘“2”,手动取消锁定：当bPause参数true时，需要手动取消锁定才能结束锁定流程
            InputUtil.onKeyDown(Type.Keys.Two, () => {
                let myCamera = Camera.currentCamera;
                myCamera.unlock();
            });
            // 添加一个按键方法：按下键盘“4”,角色看向目标（无追踪效果）
            InputUtil.onKeyDown(Type.Keys.Three, () => {
                let myCamera = Camera.currentCamera;
                myCamera.lookAt(enemy);
            });
        }
    }
}
```



### shake <Score text="shake" /> 

• `Static` **shake**(`shakeData`, `duration?`): `void` <Badge type="tip" text="client" />

开始摄像机抖动


使用示例:提供按键方法开始和停止摄像机抖动
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，抖动相机5秒
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.log("Start Shake ");
                Camera.shake({positionYAmplitude: 1, positionYFrequency: 0.5, positionZAmplitude: 1, positionZFrequency: 1}, 5);
            });
            // 添加一个按键方法：按下键盘“2”，停止相机抖动
            InputUtil.onKeyUp(Type.Keys.Two, () => {
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
| `shakeData` | [`ShakeData`](../interfaces/Gameplay.ShakeData.md) |  抖动数据 |
| `duration?` | `number` |  持续时间(秒) default: 1 |



### stopShake <Score text="stopShake" /> 

• `Static` **stopShake**(): `void` <Badge type="tip" text="client" />

停止摄像机抖动


使用示例:提供按键方法开始和停止摄像机抖动
```ts
@Core.Class
export default class CameraExample extends Core.Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 添加一个按键方法：按下键盘“1”，抖动相机5秒
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.log("Start Shake ");
                Camera.shake({positionYAmplitude: 1, positionYFrequency: 0.5, positionZAmplitude: 1, positionZFrequency: 1}, 5);
            });
            // 添加一个按键方法：按下键盘“3”，停止相机抖动
            InputUtil.onKeyUp(Type.Keys.Two, () => {
                console.log("Stop Shake ");
                Camera.stopShake();
            });
        }
    }
}
```


___

### switch <Score text="switch" /> 

• `Static` **switch**(`newCamera`, `blendTime?`, `blendFunc?`, `blendExp?`): [`Camera`](Gameplay.Camera.md) <Badge type="tip" text="client" />

切换摄像机


使用示例:在场景中随机创建5个摄像机，提供按键方法切换摄像机。
```ts
@Core.Class
export default class CameraExample extends Core.Script {
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
                let camera = GameObject.spawn({guid: "Camera"}) as Camera;
                camera.worldLocation = new Type.Vector(MathUtil.randomInt(-1000, 1000), MathUtil.randomInt(-1000, 1000),MathUtil.randomInt(0, 1000));
                camera.worldRotation = new Type.Rotation(MathUtil.randomInt(-90, 90), MathUtil.randomInt(-30, 30),MathUtil.randomInt(-180, 180));
                cameraArray.push(camera);
                camera.onSwitchCompleted.bind(() => {
                    console.log("当前摄像机序号 " + i);
                    curCameraIndex = i;
                })
            }
            // 添加一个按键方法：按下键盘“1”，切换摄像机
            InputUtil.onKeyDown(Type.Keys.One, () => {
                console.log("Switch Camera");
                let newCamera = (curCameraIndex + 1) % 5;
                Camera.switch(cameraArray[newCamera], 5, newCamera);
            });
            // 添加一个按键方法：按下键盘“2”，切换回默认摄像机
            InputUtil.onKeyDown(Type.Keys.Two, () => {
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
| `newCamera` | [`Camera`](Gameplay.Camera.md) |  想要切换的目标摄像机对象,当传入的参数类型为Transform时会使用该Transform的位置跟旋转生成一个Camera再进行切换 |
| `blendTime?` | `number` |  混合时间(秒) default: 0 |
| `blendFunc?` | [`SwitchCameraBlendFunction`](../enums/Gameplay.SwitchCameraBlendFunction.md) |  切换时用到的混合函数 default: Linear |
| `blendExp?` | `number` |  混合额外变量,用于控制混合时的快慢程度,具体作用看枚举SwitchCameraBlendFunction default: 0 |

#### Returns

[`Camera`](Gameplay.Camera.md)

目标camera对象
