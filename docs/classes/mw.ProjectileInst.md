[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / ProjectileInst

# ProjectileInst <Badge type="tip" text="Class" /> <Score text="ProjectileInst" />

投掷物发射器专用实例对象

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`ProjectileInst`**

## Table of contents

### Properties <Score text="Properties" /> 


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[owner](mw.ProjectileInst.md#owner)**(): [`Player`](mw.Player.md)  |
| :-----|
| 发射的玩家|
| **[velocity](mw.ProjectileInst.md#velocity)**(): [`Vector`](mw.Vector.md)  |
| 设置当前速度|


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

### owner <Score text="owner" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **owner**(): [`Player`](mw.Player.md)

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


发射的玩家

#### Returns

| [`Player`](mw.Player.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### velocity <Score text="velocity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **velocity**(): [`Vector`](mw.Vector.md)

</th>
<th style="text-align: left">

• `set` **velocity**(`newVelocity`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前速度


</td>
<td style="text-align: left">


设置当前速度

::: warning Precautions

不会自动 rpc 到服务端，如在客户端调用且需同步，请自行到服务端调用

:::

#### Parameters

| `newVelocity` | [`Vector`](mw.Vector.md) |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个脚本放置在对象栏中.在脚本中复制下列"Example_ObjectLauncher_Acceleration"的代码保存,运行游戏,场景中将会生成一个对象发射器和用于发射的火箭。按下按键”1“，发射火箭。设置对象代码如下:

</span>

```ts
@Component
 export default class Example_ObjectLauncher_Acceleration extends Script {

     protected async onStart(): Promise<void> {

         // 下列逻辑在服务端执行
         if(SystemUtil.isServer()) {
             // 在世界坐标（200，0，25）异步生成一个火箭
             let rocket = await GameObject.asyncSpawn("162807") as Model;
             rocket.worldTransform.position = new Vector(2000, 0, 25);

             // 异步生成对象发射器
             let myLauncher = await GameObject.asyncSpawn("ObjectLauncher") as ObjectLauncher;

             // 设置发射初始速度为1
             myLauncher.initialSpeed = 1;
             // 设置发射最大速度为1000
             myLauncher.maxSpeed = 1000;
             // 设置发射加速度为200
             myLauncher.acceleration = 200;
             // 设置碰撞半径为25
             myLauncher.capsuleRadius = 25;
             // 设置碰撞半长为25
             myLauncher.capsuleHalfLength = 25;
             // 开启反弹
             myLauncher.isShouldBounce = true;
             // 设置重力缩放为0
             myLauncher.gravityScale = 0;
             // 设置旋转不跟随速度方向
             myLauncher.isRotationFollowsVelocity = false;
             // 运动时间为10s
             myLauncher.lifeSpan = 10;

             // 添加客户端发送的”LAUNCH“事件监听器，将火箭朝上方发射。
             Event.addClientListener("LAUNCH", () => {
                 let velRocket = myLauncher.spawnProjectileInstanceLaunch(rocket.gameObjectId, rocket.worldTransform.position, new Vector(0, 0, 1));
                 console.log("Rocket velocity is: " + velRocket.velocity);
                 rocket.localTransform.rotation = new Rotation(0, 90, 0);
             });
         }

         // 下列逻辑在客户端执行
         if(SystemUtil.isClient()) {
             // 添加一个按键方法：按下按键”1“，向服务端派送一个”LAUNCH“事件，发射一个球。
             InputUtil.onKeyDown(Keys.One, () => {
                 Event.dispatchToServer("LAUNCH");
             });
         }
     }
 }

#### Returns

| [`Vector`](mw.Vector.md) |  |
| :------ | :------ |



## Methods
