[Physics](../groups/Physics.Physics.md) / IntegratedMover

# IntegratedMover <Badge type="tip" text="Class" /> <Score text="IntegratedMover" />

运动器组件

使用示例:创建一个名为"IMExample1"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别以开启和不开启平滑运动的方式做重复线性运动.代码如下:
```ts
@Core.Class
export default class IMExample1 extends Core.Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
      if (Util.SystemUtil.isClient()) {
          // 创建一个长方体
          this.Obj1 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
          // 设置起始位置
          this.Obj1.setWorldLocation(new Type.Vector(300.0, -100.0, 300.0));
          // 设置起始缩放
          this.Obj1.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));

          // 创建一个运动器，并将运动器挂载到长方体上
          this.IM1 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
          this.IM1.attachToGameObject(this.Obj1);

          // 测试启用状态
          console.log("Enable status: " + this.IM1.enable);
          this.IM1.enable = true;
          console.log("New enable status: " + this.IM1.enable);

          // 添加一个线性运动
          this.IM1.linearSpeed = new Type.Vector(0.0, 100.0, 0.0);
          this.IM1.linearRepeat = true;
          this.IM1.linearRepeatTime = 2.0;
          this.IM1.linearRepeatDelay = 0.0;
          this.IM1.linearReturnDelay = 0.0;

          // 用同样的方式创建第二个长方体与第二个运动器
          this.Obj2 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
          this.Obj2.setWorldLocation(new Type.Vector(300.0, -100.0, 150.0));
          this.Obj2.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));
          this.IM2 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
          this.IM2.attachToGameObject(this.Obj2);
          this.IM2.enable = true;

          // 给第二个运动器开启平滑运动
          console.log("Smooth status: " + this.IM2.smooth);
          this.IM2.smooth = true;
          console.log("New smooth status: " + this.IM2.smooth);

          // 添加一个同样的线性运动
          this.IM2.linearSpeed = new Type.Vector(0.0, 100.0, 0.0);
          this.IM2.linearRepeat = true;
          this.IM2.linearRepeatTime = 2.0;
          this.IM2.linearRepeatDelay = 0.0;
          this.IM2.linearReturnDelay = 0.0;
      }
  }

   // 周期函数 每帧执行
   // 此函数执行需要将this.useUpdate赋值为true
   // @param dt 当前帧与上一帧的延迟 / 秒
   protected onUpdate(dt: number): void {

   }

   // 脚本被销毁时最后一帧执行完调用此函数
   protected onDestroy(): void {

   }
}
```

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`IntegratedMover`**

## Table of contents

| Properties |
| :-----|
| **[onLinearEnable](Gameplay.IntegratedMover.md#onlinearenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onLinearReturn](Gameplay.IntegratedMover.md#onlinearreturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onLinearStart](Gameplay.IntegratedMover.md#onlinearstart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onRotationEnable](Gameplay.IntegratedMover.md#onrotationenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onRotationReturn](Gameplay.IntegratedMover.md#onrotationreturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onRotationStart](Gameplay.IntegratedMover.md#onrotationstart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onScaleEnable](Gameplay.IntegratedMover.md#onscaleenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onScaleReturn](Gameplay.IntegratedMover.md#onscalereturn)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onScaleStart](Gameplay.IntegratedMover.md#onscalestart)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onSwingEnable](Gameplay.IntegratedMover.md#onswingenable)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 摆动：延迟启动回调，使用示例详见swingSpeed的getter中的示例代码|

| Accessors |
| :-----|
| **[enable](Gameplay.IntegratedMover.md#enable)**(): `boolean` <br> 获取启用状态|
| **[linearDelayStartTime](Gameplay.IntegratedMover.md#lineardelaystarttime)**(): `number` <br> 获取延时启动平移运行时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeat](Gameplay.IntegratedMover.md#linearrepeat)**(): `boolean` <br> 获取平移重复运动状态，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeatDelay](Gameplay.IntegratedMover.md#linearrepeatdelay)**(): `number` <br> 获取平移到达后停顿时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeatTime](Gameplay.IntegratedMover.md#linearrepeattime)**(): `number` <br> 获取平移单程运动时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearReturnDelay](Gameplay.IntegratedMover.md#linearreturndelay)**(): `number` <br> 获取平移返程后停顿时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearSpeed](Gameplay.IntegratedMover.md#linearspeed)**(): [`Vector`](Type.Vector.md) <br> 获取平移速度大小|
| **[rotationDelayStartTime](Gameplay.IntegratedMover.md#rotationdelaystarttime)**(): `number` <br> 获取延时启动旋转运行时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeat](Gameplay.IntegratedMover.md#rotationrepeat)**(): `boolean` <br> 获取旋转重复运动状态，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeatDelay](Gameplay.IntegratedMover.md#rotationrepeatdelay)**(): `number` <br> 获取旋转到达后停顿时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeatTime](Gameplay.IntegratedMover.md#rotationrepeattime)**(): `number` <br> 获取旋转单程运动时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationReturnDelay](Gameplay.IntegratedMover.md#rotationreturndelay)**(): `number` <br> 获取旋转返程后停顿时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationSpeed](Gameplay.IntegratedMover.md#rotationspeed)**(): [`Vector`](Type.Vector.md) <br> 获取旋转速度大小|
| **[scaleDelayStartTime](Gameplay.IntegratedMover.md#scaledelaystarttime)**(): `number` <br> 获取延时启动缩放运行时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeat](Gameplay.IntegratedMover.md#scalerepeat)**(): `boolean` <br> 获取缩放重复运动状态，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeatDelay](Gameplay.IntegratedMover.md#scalerepeatdelay)**(): `number` <br> 获取缩放到达后停顿时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeatTime](Gameplay.IntegratedMover.md#scalerepeattime)**(): `number` <br> 获取缩放单程运动时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleReturnDelay](Gameplay.IntegratedMover.md#scalereturndelay)**(): `number` <br> 获取缩放返程后停顿时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleSpeed](Gameplay.IntegratedMover.md#scalespeed)**(): [`Vector`](Type.Vector.md) <br> 获取缩放速度大小|
| **[smooth](Gameplay.IntegratedMover.md#smooth)**(): `boolean` <br> 获取平滑状态|
| **[swingAngle](Gameplay.IntegratedMover.md#swingangle)**(): `number` <br> 获取摆动最大角度，使用示例详见swingSpeed的getter中的示例代码|
| **[swingDelayStartTime](Gameplay.IntegratedMover.md#swingdelaystarttime)**(): `number` <br> 获取延时启动摆动运行时间，使用示例详见swingSpeed的getter中的示例代码|
| **[swingSpeed](Gameplay.IntegratedMover.md#swingspeed)**(): [`Vector`](Type.Vector.md) <br> 获取摆动运动速度|


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
| **[moverReset](Gameplay.IntegratedMover.md#moverreset)**(`OnReset?`: () => `void`): `void` <br> 将运动器状态重置，运动对象同时回到初始位置，使用示例详见linearSpeed、rotationSpeed等getter中的示例代码|


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

### onLinearEnable <Score text="onLinearEnable" /> 

• **onLinearEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onLinearReturn <Score text="onLinearReturn" /> 

• **onLinearReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onLinearStart <Score text="onLinearStart" /> 

• **onLinearStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onRotationEnable <Score text="onRotationEnable" /> 

• **onRotationEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onRotationReturn <Score text="onRotationReturn" /> 

• **onRotationReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onRotationStart <Score text="onRotationStart" /> 

• **onRotationStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onScaleEnable <Score text="onScaleEnable" /> 

• **onScaleEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onScaleReturn <Score text="onScaleReturn" /> 

• **onScaleReturn**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onScaleStart <Score text="onScaleStart" /> 

• **onScaleStart**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onSwingEnable <Score text="onSwingEnable" /> 

• **onSwingEnable**: [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

摆动：延迟启动回调，使用示例详见swingSpeed的getter中的示例代码

## Accessors

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean`

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`newEnable`): `void`

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newEnable` | `boolean` | 启用状态 |



### linearDelayStartTime <Score text="linearDelayStartTime" /> 

• `get` **linearDelayStartTime**(): `number`

获取延时启动平移运行时间，使用示例详见linearSpeed的getter中的示例代码

#### Returns

`number`

延时启动时间

• `set` **linearDelayStartTime**(`newDelay`): `void`

设置延时启动平移运动时间，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### linearRepeat <Score text="linearRepeat" /> 

• `get` **linearRepeat**(): `boolean`

获取平移重复运动状态，使用示例详见linearSpeed的getter中的示例代码

#### Returns

`boolean`

平移重复运动状态

• `set` **linearRepeat**(`newRepeat`): `void`

设置平移重复运动状态，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 平移重复运动状态 |


___

### linearRepeatDelay <Score text="linearRepeatDelay" /> 

• `get` **linearRepeatDelay**(): `number`

获取平移到达后停顿时间，使用示例详见linearSpeed的getter中的示例代码

#### Returns

`number`

平移到达后停顿时间

• `set` **linearRepeatDelay**(`newDelay`): `void`

设置平移到达后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 平移到达后停顿时间 |


___

### linearRepeatTime <Score text="linearRepeatTime" /> 

• `get` **linearRepeatTime**(): `number`

获取平移单程运动时间，使用示例详见linearSpeed的getter中的示例代码

#### Returns

`number`

平移单程运动时间

• `set` **linearRepeatTime**(`newTime`): `void`

设置平移单程运动时间，该属性需要重复运动状态为true时才会生效，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 平移单程运动时间 |


___

### linearReturnDelay <Score text="linearReturnDelay" /> 

• `get` **linearReturnDelay**(): `number`

获取平移返程后停顿时间，使用示例详见linearSpeed的getter中的示例代码

#### Returns

`number`

平移返程后停顿时间

• `set` **linearReturnDelay**(`newDelay`): `void`

设置平移返程后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type |
| :------ | :------ |
| `newDelay` | `number` |


平移返程后停顿时间

___

### linearSpeed <Score text="linearSpeed" /> 

• `get` **linearSpeed**(): [`Vector`](Type.Vector.md)

获取平移速度大小

使用示例:创建一个名为"IMExample2"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的非重复线性运动，以及有无起点终点停顿的重复线性运动.代码如下:
```ts
@Core.Class
export default class IMExample2 extends Core.Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            this.Obj2 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Type.Vector(300.0, 0.0, 300.0));
            this.Obj2.setWorldLocation(new Type.Vector(300.0, 0.0, 150.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的运动速度，运动器2设置延迟五秒启动
            this.IM1.linearSpeed = new Type.Vector(0.0, 100.0, 0.0);
            this.IM1.linearRepeat = false;
            this.IM1.linearDelayStartTime = 0.0;

            this.IM2.linearSpeed = new Type.Vector(0.0, 100.0, 0.0);
            this.IM2.linearRepeat = false;
            this.IM2.linearDelayStartTime = 5.0;
            // 运动器2绑定延迟启动回调
            this.IM2.onLinearEnable.add(() => {
                console.log("IM2 enabled with a delay");
            })

            // 等待十秒后，将长方体1和2归位，重新设置运动器1和2，让它们变成重复运动模式，且运动器2在起点和终点设置两秒延迟
            setTimeout(() => {
                this.IM1.moverReset();
                this.IM2.moverReset();

                this.IM1.linearRepeat = true;
                this.IM1.linearRepeatTime = 2.0;
                this.IM1.linearDelayStartTime = 0.0;
                this.IM1.linearRepeatDelay = 0.0;
                this.IM1.linearReturnDelay = 0.0;

                this.IM2.linearRepeat = true;
                this.IM2.linearRepeatTime = 2.0;
                this.IM2.linearDelayStartTime = 0.0;
                this.IM2.linearRepeatDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onLinearReturn.add(() => {
                    console.log("IM2 paused at end point");
                })
                this.IM2.linearReturnDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onLinearStart.add(() => {
                    console.log("IM2 paused at start point");
                })
            }, 10000);
        }
    }

    //
    // 周期函数 每帧执行
    // 此函数执行需要将this.useUpdate赋值为true
    // @param dt 当前帧与上一帧的延迟 / 秒
    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

平移速度大小

• `set` **linearSpeed**(`newSpeed`): `void`

设置平移速度大小，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 平移速度大小 |



### rotationDelayStartTime <Score text="rotationDelayStartTime" /> 

• `get` **rotationDelayStartTime**(): `number`

获取延时启动旋转运行时间，使用示例详见rotationSpeed的getter中的示例代码

#### Returns

`number`

延时启动时间

• `set` **rotationDelayStartTime**(`newDelay`): `void`

设置延时启动旋转运动时间，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### rotationRepeat <Score text="rotationRepeat" /> 

• `get` **rotationRepeat**(): `boolean`

获取旋转重复运动状态，使用示例详见rotationSpeed的getter中的示例代码

#### Returns

`boolean`

旋转重复运动状态

• `set` **rotationRepeat**(`newRepeat`): `void`

设置旋转重复运动状态，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 旋转重复运动状态 |


___

### rotationRepeatDelay <Score text="rotationRepeatDelay" /> 

• `get` **rotationRepeatDelay**(): `number`

获取旋转到达后停顿时间，使用示例详见rotationSpeed的getter中的示例代码

#### Returns

`number`

旋转到达后停顿时间

• `set` **rotationRepeatDelay**(`newDelay`): `void`

设置旋转到达后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 旋转到达后停顿时间 |


___

### rotationRepeatTime <Score text="rotationRepeatTime" /> 

• `get` **rotationRepeatTime**(): `number`

获取旋转单程运动时间，使用示例详见rotationSpeed的getter中的示例代码

#### Returns

`number`

旋转单程运动时间

• `set` **rotationRepeatTime**(`newTime`): `void`

设置旋转单程运动时间，该属性需要重复运动状态为true时才会生效，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 旋转单程运动时间 |


___

### rotationReturnDelay <Score text="rotationReturnDelay" /> 

• `get` **rotationReturnDelay**(): `number`

获取旋转返程后停顿时间，使用示例详见rotationSpeed的getter中的示例代码

#### Returns

`number`

返程后停顿时间

• `set` **rotationReturnDelay**(`newDelay`): `void`

设置旋转返程后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 返程后停顿时间 |


___

### rotationSpeed <Score text="rotationSpeed" /> 

• `get` **rotationSpeed**(): [`Vector`](Type.Vector.md)

获取旋转速度大小

使用示例:创建一个名为"IMExample3"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的非重复旋转，以及有无起点终点停顿的重复旋转.代码如下:
```ts
@Core.Class
export default class IMExample3 extends Core.Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            this.Obj2 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Type.Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Type.Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的旋转速度，运动器2设置延迟五秒启动
            this.IM1.rotationSpeed = new Type.Vector(90.0, 0.0, 0.0);
            this.IM1.rotationRepeat = false;
            this.IM1.rotationDelayStartTime = 0.0;

            this.IM2.rotationSpeed = new Type.Vector(90.0, 0.0, 0.0);
            this.IM2.rotationRepeat = false;
            this.IM2.rotationDelayStartTime = 5.0;
            // 运动器2绑定延迟启动回调
            this.IM2.onRotationEnable.add(() => {
                console.log("IM2 enabled with a delay");
            })

            // 等待十秒后，将长方体1和2归位，重新设置运动器1和2，让它们变成重复运动模式，且运动器2在起点和终点设置两秒延迟
            setTimeout(() => {
                this.IM1.moverReset();
                this.IM2.moverReset();

                this.IM1.rotationRepeat = true;
                this.IM1.rotationRepeatTime = 2.0;
                this.IM1.rotationDelayStartTime = 0.0;
                this.IM1.rotationRepeatDelay = 0.0;
                this.IM1.rotationReturnDelay = 0.0;

                this.IM2.rotationRepeat = true;
                this.IM2.rotationRepeatTime = 2.0;
                this.IM2.rotationDelayStartTime = 0.0;
                this.IM2.rotationRepeatDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onRotationReturn.add(() => {
                    console.log("IM2 paused at end point");
                })
                this.IM2.rotationReturnDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onRotationStart.add(() => {
                    console.log("IM2 paused at start point");
                })
            }, 10000);
        }
    }

    //
    // 周期函数 每帧执行
    // 此函数执行需要将this.useUpdate赋值为true
    // @param dt 当前帧与上一帧的延迟 / 秒
    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

旋转速度大小

• `set` **rotationSpeed**(`newSpeed`): `void`

设置旋转速度大小，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 旋转速度大小 |


___

### scaleDelayStartTime <Score text="scaleDelayStartTime" /> 

• `get` **scaleDelayStartTime**(): `number`

获取延时启动缩放运行时间，使用示例详见scaleSpeed的getter中的示例代码

#### Returns

`number`

延时启动时间

• `set` **scaleDelayStartTime**(`newDelay`): `void`

设置延时启动缩放运动时间，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### scaleRepeat <Score text="scaleRepeat" /> 

• `get` **scaleRepeat**(): `boolean`

获取缩放重复运动状态，使用示例详见scaleSpeed的getter中的示例代码

#### Returns

`boolean`

重复运动状态

• `set` **scaleRepeat**(`newRepeat`): `void`

设置缩放重复运动状态，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 重复运动状态 |


___

### scaleRepeatDelay <Score text="scaleRepeatDelay" /> 

• `get` **scaleRepeatDelay**(): `number`

获取缩放到达后停顿时间，使用示例详见scaleSpeed的getter中的示例代码

#### Returns

`number`

到达后停顿时间

• `set` **scaleRepeatDelay**(`newDelay`): `void`

设置缩放到达后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 到达后停顿时间 |


___

### scaleRepeatTime <Score text="scaleRepeatTime" /> 

• `get` **scaleRepeatTime**(): `number`

获取缩放单程运动时间，使用示例详见scaleSpeed的getter中的示例代码

#### Returns

`number`

单程运动时间

• `set` **scaleRepeatTime**(`newTime`): `void`

设置缩放单程运动时间，该属性需要重复运动状态为true时才会生效，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 单程运动时间 |


___

### scaleReturnDelay <Score text="scaleReturnDelay" /> 

• `get` **scaleReturnDelay**(): `number`

获取缩放返程后停顿时间，使用示例详见scaleSpeed的getter中的示例代码

#### Returns

`number`

返程后停顿时间

• `set` **scaleReturnDelay**(`newDelay`): `void`

设置缩放返程后停顿时间，该属性需要重复运动状态为true时才会生效，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 返程后停顿时间 |


___

### scaleSpeed <Score text="scaleSpeed" /> 

• `get` **scaleSpeed**(): [`Vector`](Type.Vector.md)

获取缩放速度大小

使用示例:创建一个名为"IMExample4"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个正方体,分别演示有无延迟启动的非重复缩放，以及有无起点终点停顿的重复缩放.代码如下:
```ts
@Core.Class
export default class IMExample4 extends Core.Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            this.Obj2 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Type.Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Type.Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Type.Vector(1.0, 1.0, 1.0));
            this.Obj2.setWorldScale(new Type.Vector(1.0, 1.0, 1.0));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的缩放速度，运动器2设置延迟五秒启动
            this.IM1.scaleSpeed = new Type.Vector(-0.1, -0.1, -0.1);
            this.IM1.scaleRepeat = false;
            this.IM1.scaleDelayStartTime = 0.0;

            this.IM2.scaleSpeed = new Type.Vector(-0.1, -0.1, -0.1);
            this.IM2.scaleRepeat = false;
            this.IM2.scaleDelayStartTime = 5.0;
            // 运动器2绑定延迟启动回调
            this.IM2.onScaleEnable.add(() => {
                console.log("IM2 enabled with a delay");
            })

            // 等待十秒后，将长方体1和2归位，重新设置运动器1和2，让它们变成重复运动模式，且运动器2在起点和终点设置两秒延迟
            setTimeout(() => {
                this.IM1.moverReset();
                this.IM2.moverReset();

                this.IM1.scaleRepeat = true;
                this.IM1.scaleRepeatTime = 2.0;
                this.IM1.scaleDelayStartTime = 0.0;
                this.IM1.scaleRepeatDelay = 0.0;
                this.IM1.scaleReturnDelay = 0.0;

                this.IM2.scaleRepeat = true;
                this.IM2.scaleRepeatTime = 2.0;
                this.IM2.scaleDelayStartTime = 0.0;
                this.IM2.scaleRepeatDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onScaleReturn.add(() => {
                    console.log("IM2 paused at end point");
                })
                this.IM2.scaleReturnDelay = 2.0;
                // 运动器2绑定终点停顿回调
                this.IM2.onScaleStart.add(() => {
                    console.log("IM2 paused at start point");
                })
            }, 10000);
        }
    }

    //
    // 周期函数 每帧执行
    // 此函数执行需要将this.useUpdate赋值为true
    // @param dt 当前帧与上一帧的延迟 / 秒
    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

缩放速度大小

• `set` **scaleSpeed**(`newSpeed`): `void`

设置缩放速度大小，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 缩放速度大小 |


___

### smooth <Score text="smooth" /> 

• `get` **smooth**(): `boolean`

获取平滑状态

#### Returns

`boolean`

平滑状态

• `set` **smooth**(`newSmooth`): `void`

设置平滑状态，启用后运动速度会由慢逐渐加快，直到最大值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSmooth` | `boolean` | 平滑状态 |



### swingAngle <Score text="swingAngle" /> 

• `get` **swingAngle**(): `number`

获取摆动最大角度，使用示例详见swingSpeed的getter中的示例代码

#### Returns

`number`

摆动最大角度

• `set` **swingAngle**(`newAngle`): `void`

设置摆动最大角度，使用示例详见swingSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAngle` | `number` | 摆动最大角度 |


___

### swingDelayStartTime <Score text="swingDelayStartTime" /> 

• `get` **swingDelayStartTime**(): `number`

获取延时启动摆动运行时间，使用示例详见swingSpeed的getter中的示例代码

#### Returns

`number`

延时启动时间

• `set` **swingDelayStartTime**(`newDelay`): `void`

设置延时启动摆动运动时间，使用示例详见swingSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 延时启动时间 |


___

### swingSpeed <Score text="swingSpeed" /> 

• `get` **swingSpeed**(): [`Vector`](Type.Vector.md)

获取摆动运动速度

使用示例:创建一个名为"IMExample5"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的单摆运动.代码如下:
```ts
@Core.Class
export default class IMExample5 extends Core.Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            this.Obj2 = await Gameplay.GameObject.asyncSpawn({guid: "7669"}) as Core.GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Type.Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Type.Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Type.Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await Gameplay.GameObject.asyncSpawn({guid: "PhysicsSports"}) as Gameplay.IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的单摆速度和角度，运动器2设置延迟五秒启动
            this.IM1.swingSpeed = new Type.Vector(1.0, 0.0, 0.0);
            this.IM1.swingAngle = 90.0;
            this.IM1.swingDelayStartTime = 0.0;

            this.IM2.swingSpeed = new Type.Vector(1.0, 0.0, 0.0);
            this.IM2.swingAngle = 90.0;
            this.IM2.swingDelayStartTime = 5.0;
            // 运动器2绑定延迟启动回调
            this.IM2.onSwingEnable.add(() => {
                console.log("IM2 enabled with a delay");
            })
        }
    }

    //
    // 周期函数 每帧执行
    // 此函数执行需要将this.useUpdate赋值为true
    // @param dt 当前帧与上一帧的延迟 / 秒
    protected onUpdate(dt: number): void {

    }

    // 脚本被销毁时最后一帧执行完调用此函数
    protected onDestroy(): void {

    }
}
```

#### Returns

[`Vector`](Type.Vector.md)

摆动运动速度

• `set` **swingSpeed**(`newSpeed`): `void`

设置摆动运动速度，使用示例详见swingSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 摆动运动速度 |



## Methods

### moverReset <Score text="moverReset" /> 

• **moverReset**(`OnReset?`): `void` 

将运动器状态重置，运动对象同时回到初始位置，使用示例详见linearSpeed、rotationSpeed等getter中的示例代码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `OnReset?` | () => `void` | 执行回调 default:null |

