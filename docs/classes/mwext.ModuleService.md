[基类](../groups/Extension.基类.md) / ModuleService

# ModuleService <Badge type="tip" text="Class" /> <Score text="ModuleService" />

服务端客户端及数据模块管理

当你真正使用口袋方舟开始开发一个联机游戏时发现，客户端服务端总是需要你去考虑的。多人游戏的实现并不简单，如果你想在游戏中加入多人游戏，应该尽早在设计和开发中考虑妥当。

1. 为什么要分为客户端服务端？

在游戏开发中，将游戏分为客户端和服务端有以下几个主要原因：

![Module](https://cdn.233xyx.com/online/Ny9vZo8dRAHV1701435586204.png)

- 分工合作：客户端和服务端各自负责不同的任务和功能。客户端主要处理玩家的输入、渲染和展示游戏画面，而服务端负责处理游戏的逻辑、数据存储和多玩家之间的通信。这种分工合作可以提高游戏的性能和效率。

- 安全性和防作弊：将游戏逻辑和关键数据处理放在服务端可以提高游戏的安全性。客户端只负责输入和显示，而服务端拥有最终决策权，可以防止客户端作弊和修改游戏规则。通过服务端验证和控制玩家的操作，可以维护游戏的公平性和防止外挂的出现。

- 同步和协调：服务端作为游戏的主控制中心，负责同步和协调多个客户端之间的状态和行为。通过服务端的统一控制，可以确保多个客户端之间的游戏体验始终保持一致性。例如，在多人对战游戏中，服务端负责接收和处理玩家的操作，并将结果广播给所有客户端，从而实现玩家之间的同步和互动。

- 网络通信：客户端和服务端之间通过网络进行通信，实现玩家之间的互动。服务端充当中间人的角色，接收和处理客户端的请求，并将相应的信息传递给其他客户端，实现玩家之间的实时交流和互动。通过服务端的网络架构，可以确保游戏在不同玩家之间的流畅运行，并处理网络延迟和连接问题。

- 扩展性和灵活性：将游戏逻辑和数据处理分离到服务端，可以使游戏具有更好的扩展性和灵活性。通过对服务端进行修改和增强，可以轻松地引入新的功能和扩展游戏的规模。客户端可以更专注于用户界面和交互体验，而服务端则负责处理游戏的核心逻辑和数据管理。

2. 客户端和服务端之间如何通信？

编辑器默认为多人游戏。并采用客户端-服务器模型运行。口袋方舟服务器是维护体验状态的最终权威，负责将所有连接的客户端与服务器保持同步。

- 从服务器到一个特定客户端的通信。例如，新玩家加入游戏，服务器会用一组物品填充该玩家的背包。

![Module](https://cdn.233xyx.com/online/wVrPfW2rClRK1701435672610.png)

- 从任何客户端到服务器的通信。例如，玩家按P键喝下隐形药水，并告诉服务器使该玩家的角色对所有其他玩家隐形。

![Module](https://cdn.233xyx.com/online/vZeLfP3Ex5yG1701435716734.png)

- 服务器和所有连接的客户端之间的通信。例如，服务端会通知所有玩家某个玩家使用了隐形药水。

![Module](https://cdn.233xyx.com/online/dgEIk8mdMj461701435757560.png)

这里不需要你考虑HTTP、websocket或RPC等复杂的通信方式，只需要按照一定的格式搭建你的客户端服务端代码即可。

服务端开发费用通常是多人游戏开发成本的重要组成部分，可能占到总体开发费用的30%到50%甚至更多，具体比例会因游戏的特点而有所不同，口袋方舟会免费为您提供多人游戏服务器。

3. 哪些逻辑写在客户端哪些逻辑写在服务端？

当新建一个脚本时，默认是双端的，也就是说，你在 onStart() 中写一段代码，服务端也会执行，客户端也会执行。刚开始时，你可能没有意识到需要调用 if(SystemUtil.isClient())``{...}`` 或 if(SystemUtil.isServer())``{...}`` 。这是用来选择你的代码是在服务端还是客户端执行的一种手段。

客户端只负责渲染画面。客户端接收着服务端传来的数据，包含玩家角色的各种属性和状态，如施放技能、移动、血量、魔法值等。然而，客户端只是根据服务端发送的消息来重放这些属性数值变化。

例如，当玩家角色要施放技能，整个过程是这样的：

首先，客户端向服务端发送“释放技能”的指令。服务端回应客户端：“在某地以某个方向释放了某个技能”。

然后，客户端根据这些信息创建出特效，并让特效沿着指定方向飞行。服务端则会运用碰撞检测逻辑来判断技能是否与敌方英雄碰撞。

当技能与敌方英雄相撞时，服务端将告知客户端，客户端便立即删除特效，并按照服务端的指示，为被击中的英雄减血，同时播放受击特效。

总之，客户端的主要任务是根据服务端传来的数据来呈现游戏的结果，而无法对游戏核心逻辑进行实质性的改变。这样的设计确保了游戏的一致性，使得所有玩家在游戏世界中都能享受相同的游戏体验。

4. 游戏中的数据如何处理？

请看 subdata 类。

5. 使用步骤：

->（1）编写模块C端和模块S端以及模块数据

<span style="font-size: 14px;">
使用示例: C&S 代码架构。
</span>

```ts
// 模块C（客户端）
export class MyModuleC extends ModuleC<MyModuleS, MyModuleData> {

}

// 模块S（服务端）
export class MyModuleS extends ModuleS<MyModuleC, MyModuleData> {

}

// 模块数据
export class MyModuleData extends Subdata {
    @Decorator.persistence()
    myName: string;

    setMyName(name: string) {
        this.myName = name;
        this.save(true);
    }
}
```

->（2）注册模块

<span style="font-size: 14px;">
使用示例: C&S 注册模块。
</span>

```ts
@Component
export default class GameStart extends Script {

    protected onStart(): void {
        ModuleService.registerModule(MyModuleS, MyModuleC, MyModuleData);
    }
}
```

以下一个非常简单例子，告诉你 ModuleService 如何管理 C&S 代码。

![Module](https://cdn.233xyx.com/online/oJafgxHSRWF31701254464484.png)

<span style="font-size: 14px;">
使用示例: C&S 代码示例。
</span>

```ts
@Component
export default class GameStart extends Script {

    protected onStart(): void {
        ModuleService.registerModule(AppleModS,AppleModC,null);
    }
}

class AppleModS extends ModuleS<AppleModC,null> {

    public net_appleChange(player:Player) {
        this.getClient(player).net_addApple();
        this.getClient(this.currentPlayer).net_removeApple();
    }
}
class AppleModC extends ModuleC<AppleModS,null> {

    public appleNum : number;
    public npc:Player;

    protected onStart(): void {
        this.appleNum = 10;
        InputUtil.onKeyDown(Keys.P,()=>{
            Player.getAllPlayers().forEach((element)=>{
                    this.npc = element;
            });
            ModuleService.getModule(AppleModC).sendApple(this.npc);
        });
    }
    public net_removeApple() {
        this.appleNum -= 1;
        console.log("The current number of apples the player has is:" + this.appleNum);
    }
    public net_addApple() {
        this.appleNum += 1;
        console.log("The current number of apples the player has is:" + this.appleNum);
    }
    public sendApple(player:Player) {
        this.server.net_appleChange(player);
    }
}
```

注：这里只是初步探讨 ModuleService ModuleC ModuleS 的使用方法，考虑到真实做游戏时，需要数据（苹果数量）单独存储，存在客户端容易发生作弊；完整示例请看 Subdata 。

不使用 ModuleService 时，同样的功能书写为下：

<span style="font-size: 14px;">
使用示例: 不使用 C&S 代码架构的使用示例。
</span>

```ts
@Component
export default class GameStartTwo extends Script {

    public npc:Player;
    public Apple:number = 10;

    protected onStart(): void {

        if(SystemUtil.isClient()){
            Event.addServerListener("remove", () => {
                this.removeApple();
            });
            Event.addServerListener("add",()=>{
                this.addApple();
            })

            InputUtil.onKeyDown(Keys.P,()=>{
                Player.getAllPlayers().forEach((element)=>{
                        this.npc = element;
                });
                this.sendApple(this.npc, Player.localPlayer);
            })
        }
        if(SystemUtil.isServer()){
            Event.addClientListener("send",(loca:Player, play:Player)=>{
                Event.dispatchToClient(play, "add");
                Event.dispatchToClient(loca, "remove");
            })
        }
    }
    public removeApple(){
        this.Apple -= 1;
        console.log("The current number of apples the player has is:" + this.Apple);
    }

    public addApple(){
        this.Apple += 1;
        console.log("The current number of apples the player has is:" + this.Apple);
    }

    public sendApple(player:Player, loca:Player){
        Event.dispatchToServer("send", player, loca);
    }
}
```

可以看到，使用模块管理时，代码得到了以下改善：

- 客户端和服务端分开编写，避免端与端代码难以区分的问题。

- 不再需要来回监听和派发事件，只需要在方法前面加上net_即可完成通信事件的调用。

- 代码由原来的一个脚本拆成了两个模块，降低了耦合度，方便多人开发与管理。

<span style="font-size: 14px;">
使用示例:创建一个名为ModuleExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，客户端日志会先输出hud模块开始的日志，再输出player模块开始的日志，按下F键和G键你在客户端日志都会看到player模块的信息
</span>

```ts
@Component
export default class ModuleExample extends Script {

    protected onStart(): void {
        ModuleService.setClientFirstStartModule(HudModuleC);
        ModuleService.registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        ModuleService.registerModule(HudModuleS, HudModuleC, HudModuleData);
    }

}

class HudModuleC extends ModuleC<HudModuleS, HudModuleData>{
    protected onStart(): void {
        console.log("-----------客户端-hud模块开始-----------");
    }
    protected onExecute(type: number, ...params: any[]): void {
        switch (type) {
            case 0:
                //优先启动模块需要在onExecute中type为0调用该函数,编辑器会等待fun执行完毕后再执行其他模块的onStart
                this.onExecuteStart(params[0]);
                break;
            case 1:
                this.traceHudExecute(params[0], params[1], params[2]);
                break;
        }
    }
    //优先启动模块需要在onExecute中调用该函数,编辑器会等待fun执行完毕后再执行其他模块的onStart
    protected async onExecuteStart(fun: Function): Promise<void> {
        await TimeUtil.delaySecond(1);
        console.log("-----------客户端-hud模块准备结束-----------");
        fun();
    }

    //通过callExecute调用
    private traceHudExecute(testNum: number, testPos: Vector, testString: string): void {
        console.log("-----------客户端-hud模块被调用-----------");
        console.log("testNum:" + testNum);
        console.log("testPos:" + testPos.x, testPos.y, testPos.z);
        console.log("testString:" + testString);
    }

    //直接调用
    public traceHud(testNum: number, testPos: Vector, testString: string): void {
        console.log("-----------客户端-hud模块被调用-----------");
        console.log("testNum:" + testNum);
        console.log("testPos:" + testPos.x, testPos.y, testPos.z);
        console.log("testString:" + testString);
    }

}

class HudModuleS extends ModuleS<HudModuleC, HudModuleData>{

}

class HudModuleData extends Subdata {

}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{
    protected onStart(): void {
        console.log("-----------客户端-player模块开始-----------");
        InputUtil.onKeyDown(Keys.F, () => {
            let playerData = this.data;
            ModuleService.callExecute(HudModuleC, 1, playerData.getLevel(), playerData.getPos(), playerData.getName());
        })
        InputUtil.onKeyDown(Keys.G, () => {
            let playerData = this.data;
            let hudModuleC = ModuleService.getModule(HudModuleC);
            hudModuleC.traceHud(playerData.getLevel(), playerData.getPos(), playerData.getName());
        })
    }
}
class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerModuleData>{

}
class PlayerModuleData extends Subdata {
    @Decorator.persistence()
    private level: number = 1;
    @Decorator.persistence()
    private pos: Vector = new Vector(0, 0, 0);
    @Decorator.persistence()
    private name: string = "test";

    public getLevel(): number {
        return this.level;
    }

    public getPos(): Vector {
        return this.pos;
    }

    public getName(): string {
        return this.name;
    }
}
```

## Table of contents

### Methods <Score text="Methods" /> 
| **[callExecute](mwext.ModuleService.md#callexecute)**<`T`: extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>(`moduleClass`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`: extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>, `type?`: `number`, `...params`: `any`[]): `any`   |
| :-----|
| 调用一个模块的 onExecute 方法|
| **[getModule](mwext.ModuleService.md#getmodule)**<`T`: extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>(`ModuleClass`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`: extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>): `T`: extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>   |
| 根据类型获取一个模块。|
| **[getUpdateTimeLog](mwext.ModuleService.md#getupdatetimelog)**(): `string`   |
| 获取各模块update方法的执行时长，以字符串的形式返回，需要自己显示或打印出来|
| **[ready](mwext.ModuleService.md#ready)**(): `Promise`<`void`\>   |
| 注册的模块是否就绪|
| **[registerModule](mwext.ModuleService.md#registermodule)**(`ServerModuleType`: [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>\>, `ClientModuleType`: [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>, `ModuleDataType?`: [`TypeName`](../interfaces/mw.TypeName.md)<[`Subdata`](mwext.Subdata.md)\>): [`ModuleService`](mwext.ModuleService.md)   |
| 注册模块是 ModuleService 核心功能。|
| **[setClientFirstStartModule](mwext.ModuleService.md#setclientfirststartmodule)**(`ModuleClass`: [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\>): [`ModuleService`](mwext.ModuleService.md) <Badge type="tip" text="client" />  |
| 设置客户端第一个要启动的模块|

## Methods

### callExecute <Score text="callExecute" /> 

• `Static` **callExecute**<`T`\>(`moduleClass`, `type?`, `...params`): `any` 

调用一个模块的 onExecute 方法

#### Parameters

| `moduleClass` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  模块 |
| :------ | :------ |
| `type?` `number` |  给 onExecute 方法传递的操作类型，需要各个模块自己定义 default: 0 range: type: |
| `...params` `any`[] |  给 onExecute 方法传递的参数，需要各个模块自己定义 |

#### Returns

| `any` | onExecute方法return的结果 |
| :------ | :------ |

#### Type parameters

| `T` | extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\> |
| :------ | :------ |

___

### getModule <Score text="getModule" /> 

• `Static` **getModule**<`T`\>(`ModuleClass`): `T` 

根据类型获取一个模块。

#### Parameters

| `ModuleClass` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  模块类型 |
| :------ | :------ |

#### Returns

| `T` | 模块对象 |
| :------ | :------ |

1. 实现跨模块调用（模块之间相互调用其方法）。

2. 让外部代码进行调用（比如在UI脚本里需要使用到模块里的方法）。

#### Type parameters

| `T` | extends [`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>  [`ModuleC`](mwext.ModuleC.md)<`any`, `any`\> |
| :------ | :------ |

___

### getUpdateTimeLog <Score text="getUpdateTimeLog" /> 

• `Static` **getUpdateTimeLog**(): `string` 

获取各模块update方法的执行时长，以字符串的形式返回，需要自己显示或打印出来

#### Returns

| `string` | log字符串 |
| :------ | :------ |

::: warning Precautions

本方法只有开启ModuleService的debug才会生效，此方法有性能消耗，只用作性能分析，正式版本不要使用

:::

___

### ready <Score text="ready" /> 

• `Static` **ready**(): `Promise`<`void`\> 

注册的模块是否就绪

#### Returns

| `Promise`<`void`\> | 异步操作的Promise |
| :------ | :------ |

::: warning Precautions

只有在onStart生命周期注册的模块才会有效，而且不能是异步等待后注册的模块

:::

___

### registerModule <Score text="registerModule" /> 

• `Static` **registerModule**(`ServerModuleType`, `ClientModuleType`, `ModuleDataType?`): [`ModuleService`](mwext.ModuleService.md) 

注册模块是 ModuleService 核心功能。

#### Parameters

| `ServerModuleType` [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleS`](mwext.ModuleS.md)<`any`, `any`\>\> |  模块的服务端类型 |
| :------ | :------ |
| `ClientModuleType` [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\> |  模块的客户端类型 |
| `ModuleDataType?` [`TypeName`](../interfaces/mw.TypeName.md)<[`Subdata`](mwext.Subdata.md)\> |  模块的数据类型 default:null |

#### Returns

| [`ModuleService`](mwext.ModuleService.md) | ModuleService 自身，可用作链式调用 |
| :------ | :------ |

1. 将各个模块都添加到ModuleService中，方便获取和管理。

2. 按注册顺序依次执行各个模块的onAwake、onStart、onEnterScene。

3. 将由"net_"开头的方法注册成网络方法。

4. 让C和S关联同一份数据（数据由S端获取，玩家上线以及每次服务端save数据的时候，会同步给客户端）。

___

### setClientFirstStartModule <Score text="setClientFirstStartModule" /> 

• `Static` **setClientFirstStartModule**(`ModuleClass`): [`ModuleService`](mwext.ModuleService.md) <Badge type="tip" text="client" />

设置客户端第一个要启动的模块

#### Parameters

| `ModuleClass` [`TypeName`](../interfaces/mw.TypeName.md)<[`ModuleC`](mwext.ModuleC.md)<`any`, `any`\>\> |  模块类 |
| :------ | :------ |

#### Returns

| [`ModuleService`](mwext.ModuleService.md) | ModuleService自身，可用作链式调用 |
| :------ | :------ |
