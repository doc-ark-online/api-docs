[GAMEPLAY](../groups/GAMEPLAY.GAMEPLAY.md) / Navigation

# Navigation <Badge type="tip" text="Class" /> <Score text="Navigation" />

寻路

寻路就像是给游戏角色一张地图和一套指导，让它们知道如何从一个地方走到另一个地方，避开障碍物。

想象一下，你在一个迷宫中，需要找到出口。寻路系统就是你的助手，告诉你应该往哪个方向走，以便最快地找到出口。

在游戏中，角色需要在游戏世界中移动，而寻路功能帮助角色计算出最佳路径。它会考虑地图上的可行走区域和障碍物，然后找到一条避开障碍物、最短的路径来到目的地。

寻路就像是一个聪明的导航系统。它会检查周围的地形，看看哪里是可以走的，哪里是被阻挡的。然后，它会计算出一条路径，告诉角色应该朝着哪个方向移动，以及在每个点上应该转向多少度。

这样，角色就可以根据寻路给出的指引，沿着可行走的路径前进，避开障碍物，并最终到达目的地。

如何使用寻路功能呢 ?

左侧栏中寻路区域逻辑对象拖入场景中，可绘制出一个寻路区域，在此区域可实现寻路功能。

运行时寻路数据并不是动态生成的，而是随项目发布的本地寻路数据，寻路数据在场景初始化完成后加载。

当在设置项“寻路设置”中的动态寻路开启时，开启半动态寻路，仅可通过控制寻路修饰区，来达到运行时自定义的寻路效果。

## Table of contents

### Methods <Score text="Methods" /> 
| **[findPath](mw.Navigation.md#findpath)**(`startPos`: [`Vector`](mw.Vector.md), `endPos`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)[]  |
| :-----|
| 查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点|
| **[follow](mw.Navigation.md#follow)**(`relatedObject`: [`GameObject`](mw.GameObject.md), `target`: [`GameObject`](mw.GameObject.md), `radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void`  |
| 跟随目标|
| **[navigateTo](mw.Navigation.md#navigateto)**(`relatedObject`: [`GameObject`](mw.GameObject.md), `position`: [`Vector`](mw.Vector.md), `radius?`: `number`, `OnSuccess?`: () => `void`, `OnFail?`: () => `void`): `void`  |
| 寻路移动|
| **[stopFollow](mw.Navigation.md#stopfollow)**(`relatedObject`: [`GameObject`](mw.GameObject.md)): `void`  |
| 停止跟随|
| **[stopNavigateTo](mw.Navigation.md#stopnavigateto)**(`relatedObject`: [`GameObject`](mw.GameObject.md)): `void`  |
| 导航停止|

## Methods

### findPath <Score text="findPath" /> 

• `Static` **findPath**(`startPos`, `endPos`): [`Vector`](mw.Vector.md)[] 

查找起点与终点之间的最短移动路径，并以数组的方式返回主要路径点

#### Parameters

| `startPos` [`Vector`](mw.Vector.md) | 起点 |
| :------ | :------ |
| `endPos` [`Vector`](mw.Vector.md) | 终点 |

#### Returns

| [`Vector`](mw.Vector.md)[] | 主要路径点 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:在场景中拖入一个寻路区域，坐标为（0， 0， 0），缩放为（50， 10， 3）.同时拖入三个缩放为（1，7，1）的立方体，并分别放置在坐标（400，-150，0），（1000, 150, 0)和（1700， -450，0）。最后拖入一个目标对象关闭碰撞后放置在坐标（2400，-400，0）.创建一个脚本挂载在目标对象下方.在脚本中复制下列"Example_Navigation_FindPath"的代码保存,运行游戏,按下按键”1“，角色寻路移动至目标位置，按下按键“2”，角色停止寻路。代码如下:
</span>

```ts

**`Component`**

export default class Example_Navigation_FindPath extends Script {

     protected onStart(): void {
         // 下列逻辑仅在客户端执行
         if(SystemUtil.isClient()) {
             //获取目标对象
             let signs = this.gameObject;
             //获取当前玩家角色
             let myChara = Player.localPlayer.character;

             //添加一个按键方法：按下按键“1”，生成角色寻路轨迹
             InputUtil.onKeyDown(Keys.One, () => {
                 let points = Navigation.findPath(myChara.worldTransform.position, signs.worldTransform.position);
                 points.forEach((v,i) => {
                     console.error("loc " + v);
                     GameObject.asyncSpawn("84121").then((obj: Model) => {
                         obj.worldTransform.position = v;
                         obj.worldTransform.scale = new Vector(0.2, 0.2, 0.2);
                         obj.setCollision(CollisionStatus.Off);
                     });
                 });
             });
         }
     }
 }
```

___

### follow <Score text="follow" /> 

• `Static` **follow**(`relatedObject`, `target`, `radius?`, `OnSuccess?`, `OnFail?`): `void` 

跟随目标

#### Parameters

| `relatedObject` [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| :------ | :------ |
| `target` [`GameObject`](mw.GameObject.md) | 被跟随目标 |
| `radius?` `number` | 距目标半径 default:0 |
| `OnSuccess?` () => `void` | 成功回调 default:null |
| `OnFail?` () => `void` | 失败回调 default:null |



<span style="font-size: 14px;">
使用示例:在场景中拖入一个寻路区域，坐标为（0， 0， 0），缩放为（50， 10， 3）.同时拖入三个缩放为（1，7，1）的立方体，并分别放置在坐标（400，-150，0），（1000, 150, 0)和（1700， -450，0）。在坐标（2400，-400，0）处生成一个npc.创建一个脚本挂载在目标对象下.在脚本中复制下列"Example_Navigation_Follow"的代码保存,运行游戏,按下按键”1“，npc寻路跟随玩家，按下按键“2”，npc停止跟随。代码如下:
</span>

```ts
 @Component
 export default class Example_Navigation_Follow extends Script {

     protected async onStart(): Promise<void> {

         // 下列逻辑仅在服务端执行
         if(SystemUtil.isServer()) {
             // 开启每帧周期函数
             this.useUpdate = true;
             // 生成NPC
             let npc = await Player.spawnDefaultCharacter().asyncReady();
             npc.worldTransform.position = new Vector(2400, -400, 130)

             // 添加一个客户端事件”FOLLOW“的监听器，让npc寻路跟随客户端玩家角色（NPC寻路需要在服务器调用，玩家角色无法使用Follow）
             Event.addClientListener("FOLLOW", (player) => {
                 Navigation.follow(npc, player.character, 50, () => `{ EffectService.playOnGameObject("151570", npc, {slotType: HumanoidSlotType.Rings}`)});
             });

             // 添加一个客户端事件”STOPFOLLOW“的监听器，让npc停止跟随
             Event.addClientListener("STOPFOLLOW", (player) => {
                 Navigation.stopFollow(npc);
             });

         }
         // 下列逻辑仅在客户端执行
         if(SystemUtil.isClient()) {

             //添加一个按键方法：按下按键“1”，向服务端发送”FOLLOW“事件
             InputUtil.onKeyDown(Keys.One, () => {
                 Event.dispatchToServer("FOLLOW");
             });

             //添加一个按键方法：按下按键“2”，向服务端发送”STOPFOLLOW“事件
             InputUtil.onKeyDown(Keys.Two, () => {
                 Event.dispatchToServer("STOPFOLLOW");
             });
         }
     }
 }
```

___

### navigateTo <Score text="navigateTo" /> 

• `Static` **navigateTo**(`relatedObject`, `position`, `radius?`, `OnSuccess?`, `OnFail?`): `void` 

寻路移动

#### Parameters

| `relatedObject` [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| :------ | :------ |
| `position` [`Vector`](mw.Vector.md) | 目标位置 |
| `radius?` `number` | 距目标半径 default:0 |
| `OnSuccess?` () => `void` | 成功回调 default:null |
| `OnFail?` () => `void` | 失败回调 default:null |



<span style="font-size: 14px;">
使用示例:在场景中拖入一个寻路区域，坐标为（0， 0， 0），缩放为（50， 10， 3）.同时拖入三个缩放为（1，7，1）的立方体，并分别放置在坐标（400，-150，0），（1000, 150, 0)和（1700， -450，0）。最后拖入一个目标对象关闭碰撞后放置在坐标（2400，-400，0）.创建一个脚本挂载在目标对象下方.在脚本中复制下列"Example_Navigation_NavigateTo"的代码保存,运行游戏,按下按键”1“，角色寻路移动至目标位置，按下按键“2”，角色停止寻路。代码如下:
</span>

```ts
@Component
  export default class Example_Navigation_NavigateTo extends Script {

      protected async onStart(): Promise<void> {

          // 下列逻辑仅在客户端执行
          if(SystemUtil.isClient()) {
              //获取目标对象
              let signs = this.gameObject;
              //获取当前玩家角色
              let myChara = Player.localPlayer.character;

              //添加一个按键方法：按下按键“1”，角色寻路至目标位置,并播放一个特效
              InputUtil.onKeyDown(Keys.One, () => {
                  Navigation.navigateTo(myChara, signs.worldTransform.position, 50, () => `{ EffectService.playOnGameObject("151570", myChara, {slotType: HumanoidSlotType.Rings}`)});
              });

              //添加一个按键方法：按下按键“2”，角色停止寻路
              InputUtil.onKeyDown(Keys.Two, () => {
                  Navigation.stopNavigateTo(myChara);
              });
          }
      }
  }
```

___

### stopFollow <Score text="stopFollow" /> 

• `Static` **stopFollow**(`relatedObject`): `void` 

停止跟随

#### Parameters

| `relatedObject` [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:在场景中拖入一个寻路区域，坐标为（0， 0， 0），缩放为（50， 10， 3）.同时拖入三个缩放为（1，7，1）的立方体，并分别放置在坐标（400，-150，0），（1000, 150, 0)和（1700， -450，0）。在坐标（2400，-400，0）处生成一个npc.创建一个脚本挂载在目标对象下.在脚本中复制下列"Example_Navigation_Follow"的代码保存,运行游戏,按下按键”1“，npc寻路跟随玩家，按下按键“2”，npc停止跟随。代码如下:
</span>

```ts
 @Component
 export default class Example_Navigation_Follow extends Script {

     protected async onStart(): Promise<void> {

         // 下列逻辑仅在服务端执行
         if(SystemUtil.isServer()) {
             // 开启每帧周期函数
             this.useUpdate = true;
             // 生成NPC
             let npc = await Player.spawnDefaultCharacter().asyncReady();
             npc.worldTransform.position = new Vector(2400, -400, 130)

             // 添加一个客户端事件”FOLLOW“的监听器，让npc寻路跟随客户端玩家角色（NPC寻路需要在服务器调用，玩家角色无法使用Follow）
             Event.addClientListener("FOLLOW", (player) => {
                 Navigation.follow(npc, player.character, 50, () => `{ EffectService.playOnGameObject("151570", npc, {slotType: HumanoidSlotType.Rings}`)});
             });

             // 添加一个客户端事件”STOPFOLLOW“的监听器，让npc停止跟随
             Event.addClientListener("STOPFOLLOW", (player) => {
                 Navigation.stopFollow(npc);
             });

         }
         // 下列逻辑仅在客户端执行
         if(SystemUtil.isClient()) {

             //添加一个按键方法：按下按键“1”，向服务端发送”FOLLOW“事件
             InputUtil.onKeyDown(Keys.One, () => {
                 Event.dispatchToServer("FOLLOW");
             });

             //添加一个按键方法：按下按键“2”，向服务端发送”STOPFOLLOW“事件
             InputUtil.onKeyDown(Keys.Two, () => {
                 Event.dispatchToServer("STOPFOLLOW");
             });
         }
     }
 }
```

___

### stopNavigateTo <Score text="stopNavigateTo" /> 

• `Static` **stopNavigateTo**(`relatedObject`): `void` 

导航停止

#### Parameters

| `relatedObject` [`GameObject`](mw.GameObject.md) | 寻路作用对象 |
| :------ | :------ |



<span style="font-size: 14px;">
使用示例:在场景中拖入一个寻路区域，坐标为（0， 0， 0），缩放为（50， 10， 3）.同时拖入三个缩放为（1，7，1）的立方体，并分别放置在坐标（400，-150，0），（1000, 150, 0)和（1700， -450，0）。最后拖入一个目标对象关闭碰撞后放置在坐标（2400，-400，0）.创建一个脚本挂载在目标对象下方.在脚本中复制下列"Example_Navigation_NavigateTo"的代码保存,运行游戏,按下按键”1“，角色寻路移动至目标位置，按下按键“2”，角色停止寻路。代码如下:
</span>

```ts
@Component
  export default class Example_Navigation_NavigateTo extends Script {

      protected async onStart(): Promise<void> {

          // 下列逻辑仅在客户端执行
          if(SystemUtil.isClient()) {
              //获取目标对象
              let signs = this.gameObject;
              //获取当前玩家角色
              let myChara = Player.localPlayer.character;

              //添加一个按键方法：按下按键“1”，角色寻路至目标位置,并播放一个特效
              InputUtil.onKeyDown(Keys.One, () => {
                  Navigation.navigateTo(myChara, signs.worldTransform.position, 50, () => `{ EffectService.playOnGameObject("151570", myChara, {slotType: HumanoidSlotType.Rings}`)});
              });

              //添加一个按键方法：按下按键“2”，角色停止寻路
              InputUtil.onKeyDown(Keys.Two, () => {
                  Navigation.stopNavigateTo(myChara);
              });
          }
      }
  }
```
