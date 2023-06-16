[Utility](../groups/Core.Utility.md) / ModuleS

# ModuleS<T, S\> <Badge type="tip" text="Class" /> <Score text="ModuleS<T, S\>" />

服务端模块的基类

::: warning Precautions

所有的服务端模块都必须继承这个类，才能被ModuleManager管理

:::

使用示例:创建一个名为ModuleSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，服务端日志会输出player模块每个生命周期执行的日志，按下F键你将在服务端日志中看到玩家等级的信息
```ts
@Core.Class
export default class ModuleSExample extends Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
    }

}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{
    protected onStart(): void {
        InputUtil.onKeyDown(Keys.F, () => {
            this.server.net_LevelUp();
        })
    }
}
class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerModuleData>{

    protected onAwake(): void {
        console.log("-----------服务端-player模块创建模块-----------");
    }

    protected onStart(): void {
        console.log("-----------服务端-player模块开始-----------");
    }

    protected onPlayerEnterGame(player: Player): void {
        console.log("-----------服务端-player模块玩家进入游戏-----------");
    }

    protected onPlayerJoined(player: Player): void {
        console.log("-----------服务端-player模块玩家加入-----------");
    }

    protected onPlayerLeft(player: Player): void {
        console.log("-----------服务端-player模块玩家离开-----------");
    }

    protected onUpdate(dt: number): void {
        //每帧调用 dt为两帧之间的时间差
        // console.log("-----------服务端-player模块更新-----------"+dt);
    }

    //玩家升级
    public net_LevelUp(): void {
        //调用该函数的客户端玩家数据
        let playerData = this.currentData;
        playerData.levelUp();
        console.log("玩家等级：", playerData.getlevel());
    }
}
class PlayerModuleData extends Subdata {
    @Decorator.saveProperty
    private level: number;

    protected initDefaultData(): void {
        this.level = 0;
    }

    public getlevel(): number {
        return this.level;
    }

    public levelUp(): void {
        this.level++;
        //保存数据
        this.save(true);
    }
}
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `S` | extends [`Subdata`](mw.Subdata.md) |

## Hierarchy

- [`NetObjectS`](mw.NetObjectS.md)<`T`\>

  ↳ **`ModuleS`**

  ↳↳ [`LeaderboardModuleBaseS`](mw.LeaderboardModuleBaseS.md)

## Table of contents

| Accessors |
| :-----|
| **[currentData](mw.ModuleS.md#currentdata)**(): `S` <br> 调用服务器方法的玩家的DataOwner|


::: details 点击查看继承
| Accessors |
| :-----|
| **[currentPlayer](mw.NetObjectS.md#currentplayer)**(): [`Player`](mw.Player.md) <br> 调用服务器方法的玩家|
| **[currentUserId](mw.NetObjectS.md#currentuserid)**(): `string` <br> 获取调用服务器方法的玩家userId|
:::


| Methods |
| :-----|
| **[onAwake](mw.ModuleS.md#onawake)**(): `void` <br> 生命周期方法-创建模块时调用|
| **[onDestroy](mw.ModuleS.md#ondestroy)**(): `void` <br> 生命周期方法-销毁模块调用|
| **[onExecute](mw.ModuleS.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void` <br> 外部调用本模块的某个操作|
| **[onPlayerEnterGame](mw.ModuleS.md#onplayerentergame)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)|
| **[onPlayerJoined](mw.ModuleS.md#onplayerjoined)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)|
| **[onPlayerLeft](mw.ModuleS.md#onplayerleft)**(`player`: [`Player`](mw.Player.md)): `void` <br> 生命周期方法-玩家离开房间|
| **[onStart](mw.ModuleS.md#onstart)**(): `void` <br> 生命周期方法-启动模块时调用|
| **[onUpdate](mw.ModuleS.md#onupdate)**(`dt`: `number`): `void` <br> 生命周期方法-刷新模块调用|


::: details 点击查看继承
| Methods |
| :-----|
| **[getAllClient](mw.NetObjectS.md#getallclient)**(): `T` <br> 获取"全部客户端"调用对象|
| **[getClient](mw.NetObjectS.md#getclient)**(`player`: `number` \): `T` <br> 根据玩家获取"单客户端"调用对象|
:::


### currentData <Score text="currentData" /> 

• `Protected` `get` **currentData**(): `S`

调用服务器方法的玩家的DataOwner

::: warning Precautions

只能在服务端的rpc方法(net_开头的方法)里使用，方法执行完以后会被清除，不要在其他地方用，不要异步使用

:::

#### Returns

`S`


## Methods
___

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="server" />

生命周期方法-创建模块时调用



___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` <Badge type="tip" text="server" />

生命周期方法-销毁模块调用



___

### onExecute <Score text="onExecute" /> 

• `Protected` **onExecute**(`type`, `...params`): `void` <Badge type="tip" text="server" />

外部调用本模块的某个操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` |  操作类型 |
| `...params` | `any`[] |  操作参数 |


___

### onPlayerEnterGame <Score text="onPlayerEnterGame" /> 

• `Protected` **onPlayerEnterGame**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家进入游戏(客户端已就绪，数据就绪，前后端可正常通信)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](mw.Player.md) |  玩家 |


___

### onPlayerJoined <Score text="onPlayerJoined" /> 

• `Protected` **onPlayerJoined**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家进入房间(玩家刚刚连进服务器，数据和前后端通信都还没有就绪)


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](mw.Player.md) |  玩家 |


___

### onPlayerLeft <Score text="onPlayerLeft" /> 

• `Protected` **onPlayerLeft**(`player`): `void` <Badge type="tip" text="server" />

生命周期方法-玩家离开房间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](mw.Player.md) |  玩家 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` <Badge type="tip" text="server" />

生命周期方法-启动模块时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="server" />

生命周期方法-刷新模块调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` |  两帧之间的时间差(单位：秒) |

