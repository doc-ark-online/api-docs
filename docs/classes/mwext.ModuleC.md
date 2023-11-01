[EXTENSION](../groups/Extension.EXTENSION.md) / ModuleC

# ModuleC<T, S\> <Badge type="tip" text="Class" /> <Score text="ModuleC<T, S\>" />

客户端模块的基类

::: warning Precautions

所有的客户端模块都必须继承这个类，才能被ModuleService管理

:::

<span style="font-size: 14px;">

使用示例:创建一个名为ModuleCExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，客户端日志会输出player模块每个生命周期执行的日志，按下F键你将在客户端以及服务端日志中看到玩家等级的信息

</span>

```ts
@Component
export default class ModuleCExample extends Script {

    protected onStart(): void {
        ModuleService.registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
    }

}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{

    protected onAwake(): void {
        console.log("-----------player模块创建模块-----------");
    }

    protected onStart(): void {
        console.log("-----------player模块开始-----------");
        //输出当前玩家的等级
        let playerData = this.data;
        console.log("玩家等级：", playerData.getlevel());
        playerData.onDataChange.add(() => {
            //玩家数据发生变化时，输出当前玩家的等级
            console.log("玩家等级：", playerData.getlevel());
        })
        InputUtil.onKeyDown(Keys.F, () => {
            this.server.net_LevelUp();
        })
    }

    protected onEnterScene(sceneType: number): void {
        console.log("-----------player模块进入场景-----------");
    }

    protected onUpdate(dt: number): void {
        //每帧调用 dt为两帧之间的时间差
        // console.log("-----------player模块更新-----------"+dt);
    }

    protected onDestroy(): void {
        console.log("-----------player模块销毁-----------");
    }

}
class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerModuleData>{
    //玩家升级
    public net_LevelUp(): void {
        //调用该函数的客户端玩家
        let player = this.currentPlayer;
        //调用该函数的客户端玩家id
        let playerId = this.currentPlayerId;
        //调用该函数的客户端玩家数据
        let playerData = this.currentData;
        playerData.levelUp();
        console.log("玩家等级：", playerData.getlevel());
    }
}
class PlayerModuleData extends Subdata {
    @Decorator.persistence()
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

| `T` | `T` |
| :------ | :------ |
| `S` | extends [`Subdata`](mwext.Subdata.md) |

## Hierarchy

- **`ModuleC`**

  ↳ [`LeaderboardModuleBaseC`](mwext.LeaderboardModuleBaseC.md)

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[data](mwext.ModuleC.md#data)**(): `S`  |
| :-----|
| 本地玩家的模块数据|
| **[localPlayer](mwext.ModuleC.md#localplayer)**(): [`Player`](mw.Player.md)  |
| 获取当前玩家|
| **[localPlayerId](mwext.ModuleC.md#localplayerid)**(): `number`  |
| 获取当前玩家ID|
| **[server](mwext.ModuleC.md#server)**(): `T`  |
| 和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法|

### Methods <Score text="Methods" /> 
| **[onAwake](mwext.ModuleC.md#onawake)**(): `void`  |
| :-----|
| 生命周期方法-创建模块时调用|
| **[onDestroy](mwext.ModuleC.md#ondestroy)**(): `void`  |
| 生命周期方法-销毁模块调用|
| **[onEnterScene](mwext.ModuleC.md#onenterscene)**(`sceneType`: `number`): `void`  |
| 生命周期方法-进入场景调用|
| **[onExecute](mwext.ModuleC.md#onexecute)**(`type`: `number`, `...params`: `any`[]): `void`  |
| 外部调用本模块的某个操作|
| **[onStart](mwext.ModuleC.md#onstart)**(): `void`  |
| 生命周期方法-启动模块时调用|
| **[onUpdate](mwext.ModuleC.md#onupdate)**(`dt`: `number`): `void`  |
| 生命周期方法-刷新模块调用|

#### Type parameters

| `T` | `T` |
| :------ | :------ |
| `S` | extends [`Subdata`](mwext.Subdata.md)<`S`\> |

## Accessors

### data <Score text="data" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **data**(): `S`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


本地玩家的模块数据

#### Returns

| `S` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### localPlayer <Score text="localPlayer" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **localPlayer**(): [`Player`](mw.Player.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前玩家


#### Returns

| [`Player`](mw.Player.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### localPlayerId <Score text="localPlayerId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **localPlayerId**(): `number` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前玩家ID


#### Returns

| `number` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### server <Score text="server" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Protected` `get` **server**(): `T` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


和自己绑定的服务端模块，可通过此对象直接调用net_开头的服务端方法


#### Returns

</td>
</tr></tbody>
</table>

| `T` |  |
| :------ | :------ |

## Methods

### onAwake <Score text="onAwake" /> 

• `Protected` **onAwake**(): `void` <Badge type="tip" text="client" />

生命周期方法-创建模块时调用



___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` <Badge type="tip" text="client" />

生命周期方法-销毁模块调用



___

### onEnterScene <Score text="onEnterScene" /> 

• `Protected` **onEnterScene**(`sceneType`): `void` <Badge type="tip" text="client" />

生命周期方法-进入场景调用

#### Parameters

| `sceneType` `number` |  场景类型(预留) |
| :------ | :------ |



___

### onExecute <Score text="onExecute" /> 

• `Protected` **onExecute**(`type`, `...params`): `void` <Badge type="tip" text="client" />

外部调用本模块的某个操作

#### Parameters

| `type` `number` |  操作类型 |
| :------ | :------ |
| `...params` `any`[] |  操作参数 |



___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` <Badge type="tip" text="client" />

生命周期方法-启动模块时调用



___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="client" />

生命周期方法-刷新模块调用

#### Parameters

| `dt` `number` |  两帧之间的时间差(单位：秒) |
| :------ | :------ |


