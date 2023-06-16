[Physics](../groups/Core.Physics.md) / IntegratedMover

# IntegratedMover <Badge type="tip" text="Class" /> <Score text="IntegratedMover" />

运动器组件

使用示例:创建一个名为"IMExample1"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别以开启和不开启平滑运动的方式做重复线性运动.代码如下:
```ts
@Core.Class
export default class IMExample1 extends Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
      if (Util.SystemUtil.isClient()) {
          // 创建一个长方体
          this.Obj1 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
          // 设置起始位置
          this.Obj1.setWorldLocation(new Vector(300.0, -100.0, 300.0));
          // 设置起始缩放
          this.Obj1.setWorldScale(new Vector(0.5, 2.0, 0.5));

          // 创建一个运动器，并将运动器挂载到长方体上
          this.IM1 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
          this.IM1.attachToGameObject(this.Obj1);

          // 测试启用状态
          console.log("Enable status: " + this.IM1.enable);
          this.IM1.enable = true;
          console.log("New enable status: " + this.IM1.enable);

          // 添加一个线性运动
          this.IM1.linearSpeed = new Vector(0.0, 100.0, 0.0);
          this.IM1.linearRepeat = true;
          this.IM1.linearRepeatTime = 2.0;
          this.IM1.linearRepeatDelay = 0.0;
          this.IM1.linearReturnDelay = 0.0;

          // 用同样的方式创建第二个长方体与第二个运动器
          this.Obj2 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
          this.Obj2.setWorldLocation(new Vector(300.0, -100.0, 150.0));
          this.Obj2.setWorldScale(new Vector(0.5, 2.0, 0.5));
          this.IM2 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
          this.IM2.attachToGameObject(this.Obj2);
          this.IM2.enable = true;

          // 给第二个运动器开启平滑运动
          console.log("Smooth status: " + this.IM2.smooth);
          this.IM2.smooth = true;
          console.log("New smooth status: " + this.IM2.smooth);

          // 添加一个同样的线性运动
          this.IM2.linearSpeed = new Vector(0.0, 100.0, 0.0);
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

- [`GameObject`](mw.GameObject.md)

  ↳ **`IntegratedMover`**

## Table of contents

| Properties |
| :-----|
| **[onLinearEnable](mw.IntegratedMover.md#onlinearenable)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onLinearReturn](mw.IntegratedMover.md#onlinearreturn)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onLinearStart](mw.IntegratedMover.md#onlinearstart)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码|
| **[onRotationEnable](mw.IntegratedMover.md#onrotationenable)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onRotationReturn](mw.IntegratedMover.md#onrotationreturn)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onRotationStart](mw.IntegratedMover.md#onrotationstart)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码|
| **[onScaleEnable](mw.IntegratedMover.md#onscaleenable)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onScaleReturn](mw.IntegratedMover.md#onscalereturn)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onScaleStart](mw.IntegratedMover.md#onscalestart)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码|
| **[onSwingEnable](mw.IntegratedMover.md#onswingenable)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 摆动：延迟启动回调，使用示例详见swingSpeed的getter中的示例代码|


::: details 点击查看继承
| Properties |
| :-----|
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 物体Destroy事件回调|
| **[scriptNumberPropPathMap](mw.GameObject.md#scriptnumberproppathmap)**: `any` <br> |
| **[scriptPropPathNumberMap](mw.GameObject.md#scriptproppathnumbermap)**: `any` <br> |
:::


| Accessors |
| :-----|
| **[enable](mw.IntegratedMover.md#enable)**(): `boolean` <br> 获取启用状态|
| **[linearDelayStartTime](mw.IntegratedMover.md#lineardelaystarttime)**(): `number` <br> 获取延时启动平移运行时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeat](mw.IntegratedMover.md#linearrepeat)**(): `boolean` <br> 获取平移重复运动状态，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeatDelay](mw.IntegratedMover.md#linearrepeatdelay)**(): `number` <br> 获取平移到达后停顿时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearRepeatTime](mw.IntegratedMover.md#linearrepeattime)**(): `number` <br> 获取平移单程运动时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearReturnDelay](mw.IntegratedMover.md#linearreturndelay)**(): `number` <br> 获取平移返程后停顿时间，使用示例详见linearSpeed的getter中的示例代码|
| **[linearSpeed](mw.IntegratedMover.md#linearspeed)**(): [`Vector`](mw.Vector.md) <br> 获取平移速度大小|
| **[motionCoordinate](mw.IntegratedMover.md#motioncoordinate)**(): [`MotionAxis`](../enums/mw.MotionAxis.md) <br> 获取运动坐标系|
| **[rotationDelayStartTime](mw.IntegratedMover.md#rotationdelaystarttime)**(): `number` <br> 获取延时启动旋转运行时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeat](mw.IntegratedMover.md#rotationrepeat)**(): `boolean` <br> 获取旋转重复运动状态，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeatDelay](mw.IntegratedMover.md#rotationrepeatdelay)**(): `number` <br> 获取旋转到达后停顿时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationRepeatTime](mw.IntegratedMover.md#rotationrepeattime)**(): `number` <br> 获取旋转单程运动时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationReturnDelay](mw.IntegratedMover.md#rotationreturndelay)**(): `number` <br> 获取旋转返程后停顿时间，使用示例详见rotationSpeed的getter中的示例代码|
| **[rotationSpeed](mw.IntegratedMover.md#rotationspeed)**(): [`Vector`](mw.Vector.md) <br> 获取旋转速度大小|
| **[scaleDelayStartTime](mw.IntegratedMover.md#scaledelaystarttime)**(): `number` <br> 获取延时启动缩放运行时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeat](mw.IntegratedMover.md#scalerepeat)**(): `boolean` <br> 获取缩放重复运动状态，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeatDelay](mw.IntegratedMover.md#scalerepeatdelay)**(): `number` <br> 获取缩放到达后停顿时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleRepeatTime](mw.IntegratedMover.md#scalerepeattime)**(): `number` <br> 获取缩放单程运动时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleReturnDelay](mw.IntegratedMover.md#scalereturndelay)**(): `number` <br> 获取缩放返程后停顿时间，使用示例详见scaleSpeed的getter中的示例代码|
| **[scaleSpeed](mw.IntegratedMover.md#scalespeed)**(): [`Vector`](mw.Vector.md) <br> 获取缩放速度大小|
| **[smooth](mw.IntegratedMover.md#smooth)**(): `boolean` <br> 获取平滑状态|
| **[swingAngle](mw.IntegratedMover.md#swingangle)**(): `number` <br> 获取摆动最大角度，使用示例详见swingSpeed的getter中的示例代码|
| **[swingDelayStartTime](mw.IntegratedMover.md#swingdelaystarttime)**(): `number` <br> 获取延时启动摆动运行时间，使用示例详见swingSpeed的getter中的示例代码|
| **[swingSpeed](mw.IntegratedMover.md#swingspeed)**(): [`Vector`](mw.Vector.md) <br> 获取摆动运动速度|


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
| **[moverReset](mw.IntegratedMover.md#moverreset)**(`OnReset?`: () => `void`): `void` <br> 将运动器状态重置，运动对象同时回到初始位置，使用示例详见linearSpeed、rotationSpeed等getter中的示例代码|


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


### onLinearEnable <Score text="onLinearEnable" /> 

• **onLinearEnable**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

平移运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onLinearReturn <Score text="onLinearReturn" /> 

• **onLinearReturn**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

平移运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onLinearStart <Score text="onLinearStart" /> 

• **onLinearStart**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

平移运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见linearSpeed的getter中的示例代码

___

### onRotationEnable <Score text="onRotationEnable" /> 

• **onRotationEnable**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

旋转运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onRotationReturn <Score text="onRotationReturn" /> 

• **onRotationReturn**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

旋转运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onRotationStart <Score text="onRotationStart" /> 

• **onRotationStart**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

旋转运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见rotationSpeed的getter中的示例代码

___

### onScaleEnable <Score text="onScaleEnable" /> 

• **onScaleEnable**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

缩放运动首次延迟启动时回调，延迟启动时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onScaleReturn <Score text="onScaleReturn" /> 

• **onScaleReturn**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

缩放运动到达终点停顿时回调，到达后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onScaleStart <Score text="onScaleStart" /> 

• **onScaleStart**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

缩放运动返回起点停顿时回调，到返程后停顿时间为0时表现不启用，无法获得回调事件，使用示例详见scaleSpeed的getter中的示例代码

___

### onSwingEnable <Score text="onSwingEnable" /> 

• **onSwingEnable**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

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


___

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

• `get` **linearSpeed**(): [`Vector`](mw.Vector.md)

获取平移速度大小

使用示例:创建一个名为"IMExample2"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的非重复线性运动，以及有无起点终点停顿的重复线性运动.代码如下:
```ts
@Core.Class
export default class IMExample2 extends Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            this.Obj2 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Vector(300.0, 0.0, 300.0));
            this.Obj2.setWorldLocation(new Vector(300.0, 0.0, 150.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的运动速度，运动器2设置延迟五秒启动
            this.IM1.linearSpeed = new Vector(0.0, 100.0, 0.0);
            this.IM1.linearRepeat = false;
            this.IM1.linearDelayStartTime = 0.0;

            this.IM2.linearSpeed = new Vector(0.0, 100.0, 0.0);
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

[`Vector`](mw.Vector.md)

平移速度大小

• `set` **linearSpeed**(`newSpeed`): `void`

设置平移速度大小，使用示例详见linearSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](mw.Vector.md) | 平移速度大小 |


___

### motionCoordinate <Score text="motionCoordinate" /> 

• `get` **motionCoordinate**(): [`MotionAxis`](../enums/mw.MotionAxis.md)

获取运动坐标系

#### Returns

[`MotionAxis`](../enums/mw.MotionAxis.md)

运动坐标系

• `set` **motionCoordinate**(`newMotionCoordinate`): `void`

设置运动坐标系

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newMotionCoordinate` | [`MotionAxis`](../enums/mw.MotionAxis.md) | 运动坐标系 |


___

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

• `get` **rotationSpeed**(): [`Vector`](mw.Vector.md)

获取旋转速度大小

使用示例:创建一个名为"IMExample3"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的非重复旋转，以及有无起点终点停顿的重复旋转.代码如下:
```ts
@Core.Class
export default class IMExample3 extends Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            this.Obj2 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的旋转速度，运动器2设置延迟五秒启动
            this.IM1.rotationSpeed = new Vector(90.0, 0.0, 0.0);
            this.IM1.rotationRepeat = false;
            this.IM1.rotationDelayStartTime = 0.0;

            this.IM2.rotationSpeed = new Vector(90.0, 0.0, 0.0);
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

[`Vector`](mw.Vector.md)

旋转速度大小

• `set` **rotationSpeed**(`newSpeed`): `void`

设置旋转速度大小，使用示例详见rotationSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](mw.Vector.md) | 旋转速度大小 |


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

• `get` **scaleSpeed**(): [`Vector`](mw.Vector.md)

获取缩放速度大小

使用示例:创建一个名为"IMExample4"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个正方体,分别演示有无延迟启动的非重复缩放，以及有无起点终点停顿的重复缩放.代码如下:
```ts
@Core.Class
export default class IMExample4 extends Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            this.Obj2 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Vector(1.0, 1.0, 1.0));
            this.Obj2.setWorldScale(new Vector(1.0, 1.0, 1.0));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的缩放速度，运动器2设置延迟五秒启动
            this.IM1.scaleSpeed = new Vector(-0.1, -0.1, -0.1);
            this.IM1.scaleRepeat = false;
            this.IM1.scaleDelayStartTime = 0.0;

            this.IM2.scaleSpeed = new Vector(-0.1, -0.1, -0.1);
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

[`Vector`](mw.Vector.md)

缩放速度大小

• `set` **scaleSpeed**(`newSpeed`): `void`

设置缩放速度大小，使用示例详见scaleSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](mw.Vector.md) | 缩放速度大小 |


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


___

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

• `get` **swingSpeed**(): [`Vector`](mw.Vector.md)

获取摆动运动速度

使用示例:创建一个名为"IMExample5"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,你将在场景中看到两个长方体,分别演示有无延迟启动的单摆运动.代码如下:
```ts
@Core.Class
export default class IMExample5 extends Script {

    // 声明变量
    Obj1;
    Obj2;
    IM1;
    IM2;

    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (Util.SystemUtil.isClient()) {
            // 创建长方体1和长方体2
            this.Obj1 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            this.Obj2 = await GameObject.asyncSpawn({guid: "7669"}) as GameObject;
            // 设置起始位置
            this.Obj1.setWorldLocation(new Vector(300.0, 200.0, 200.0));
            this.Obj2.setWorldLocation(new Vector(300.0, -200.0, 200.0));
            // 设置起始缩放
            this.Obj1.setWorldScale(new Vector(0.5, 2.0, 0.5));
            this.Obj2.setWorldScale(new Vector(0.5, 2.0, 0.5));

            // 创建运动器1和运动器2，并将运动器挂载到对应长方体上
            this.IM1 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM1.attachToGameObject(this.Obj1);
            this.IM1.enable = true;

            this.IM2 = await GameObject.asyncSpawn({guid: "PhysicsSports"}) as IntegratedMover;
            this.IM2.attachToGameObject(this.Obj2);
            this.IM2.enable = true;

            // 运动器1和2都设置同样的单摆速度和角度，运动器2设置延迟五秒启动
            this.IM1.swingSpeed = new Vector(1.0, 0.0, 0.0);
            this.IM1.swingAngle = 90.0;
            this.IM1.swingDelayStartTime = 0.0;

            this.IM2.swingSpeed = new Vector(1.0, 0.0, 0.0);
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

[`Vector`](mw.Vector.md)

摆动运动速度

• `set` **swingSpeed**(`newSpeed`): `void`

设置摆动运动速度，使用示例详见swingSpeed的getter中的示例代码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](mw.Vector.md) | 摆动运动速度 |



## Methods
___

### moverReset <Score text="moverReset" /> 

• **moverReset**(`OnReset?`): `void` 

将运动器状态重置，运动对象同时回到初始位置，使用示例详见linearSpeed、rotationSpeed等getter中的示例代码


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `OnReset?` | () => `void` | 执行回调 default:null |

