[Data](../groups/Core.Data.md) / DataCenterS

# DataCenterS <Badge type="tip" text="Class" /> <Score text="DataCenterS" />

服务端数据中心，管理所有玩家的数据

::: warning Precautions

单例类，请使用getInstance获取对象

:::

使用示例:创建一个名为DataCenterSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，玩家加入时会输出当前玩家的等级以及当前所有玩家的等级，玩家离开时当前玩家会升级并且输出（pie上玩家离开需要通过点x键）
```ts
@Core.Class
export default class DataCenterSExample extends Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        if (SystemUtil.isServer()) {
            DataCenterS.getInstance().onPlayerJoined.add(this.onPlayerJoin, this);
            DataCenterS.getInstance().onPlayerLeft.add(this.onPlayerLeave, this);
        }
    }

    //玩家加入且数据就绪
    private onPlayerJoin(player: Player): void {
        let playerData = DataCenterS.getInstance().getData(player, PlayerModuleData);
        console.log("玩家加入，当前玩家等级为：", playerData.getlevel());
        console.log("显示当前所有玩家的等级：");
        const playerIds = DataCenterS.getInstance().getReadyPlayerIds();
        playerIds.forEach(playerId => {
            let playerData = DataCenterS.getInstance().getData(playerId, PlayerModuleData);
            console.log("玩家playerId为：" + playerId, "的等级：", playerData.getlevel());
        });
    }

    //玩家离开
    private onPlayerLeave(player: Player): void {
        let playerData = DataCenterS.getInstance().getData(player, PlayerModuleData);
        playerData.levelUp();
        console.log("玩家离开，等级提升为：", playerData.getlevel());
    }

}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{

}
class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerModuleData>{

}
class PlayerModuleData extends Subdata {
    @Decorator.saveProperty
    private level: number = 0;

    public getlevel(): number {
        return this.level;
    }

    //玩家升级
    public levelUp(): void {
        this.level++;
        //保存数据
        this.save(false);
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onPlayerJoined](mw.DataCenterS.md#onplayerjoined)**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\> <br> 玩家进入游戏的委托，当委托被调用的时候，可以保证玩家的数据是就绪的|
| **[onPlayerLeft](mw.DataCenterS.md#onplayerleft)**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\> <br> 玩家离开游戏的委托，可用作玩家最后的数据处理|

| Methods |
| :-----|
| **[getData](mw.DataCenterS.md#getdata)**<`T`: extends [`Subdata`](mw.Subdata.md)<`T`\>\>(`player`: `string` \, `SubdataType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`\>): `T`: extends [`Subdata`](mw.Subdata.md)<`T`\> <br> 获取玩家的子数据|
| **[getReadyUserIds](mw.DataCenterS.md#getreadyuserids)**(): `string`[] <br> 获取在线且数据就绪的所有玩家ID|
| **[getInstance](mw.DataCenterS.md#getinstance)**(): [`DataCenterS`](mw.DataCenterS.md) <br> 获取服务端数据中心全局实例|

## Properties

### onPlayerJoined <Score text="onPlayerJoined" /> 

• `Readonly` **onPlayerJoined**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>

玩家进入游戏的委托，当委托被调用的时候，可以保证玩家的数据是就绪的

___

### onPlayerLeft <Score text="onPlayerLeft" /> 

• `Readonly` **onPlayerLeft**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>

玩家离开游戏的委托，可用作玩家最后的数据处理

## Methods

### getData <Score text="getData" /> 

• **getData**<`T`\>(`player`, `SubdataType`): `T` <Badge type="tip" text="server" />

获取玩家的子数据


使用示例:创建一个名为DataCenterSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，玩家加入时你将在在服务端日志中看到玩家等级为0的信息
```ts
@Core.Class
export default class DataCenterSExample extends Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        this.traceLevel();
    }

    //服务端等待玩家加入游戏并且输出玩家数据的等级
    public async traceLevel(): Promise<void> {
        if (SystemUtil.isServer()) {
            addPlayerJoinedListener(player => {
                //延迟一帧执行，等待玩家数据加载完成
                setTimeout(() => {
                    let playerData = DataCenterS.getInstance().getData(player, PlayerModuleData);
                    console.log("玩家等级：", playerData.getlevel());
                }, 0);
            })
        }
    }
}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{

}
class PlayerModuleS extends ModuleS<PlayerModuleC, PlayerModuleData>{

}
class PlayerModuleData extends Subdata {
    @Decorator.saveProperty
    private level: number = 0;

    public getlevel(): number {
        return this.level;
    }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Subdata`](mw.Subdata.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `string` \| [`Player`](mw.Player.md) |  玩家\|玩家userId |
| `SubdataType` | [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  数据类 |

#### Returns

`T`

数据对象

___

### getReadyUserIds <Score text="getReadyUserIds" /> 

• **getReadyUserIds**(): `string`[] <Badge type="tip" text="server" />

获取在线且数据就绪的所有玩家ID


#### Returns

`string`[]

玩家userId数组

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`DataCenterS`](mw.DataCenterS.md) <Badge type="tip" text="server" />

获取服务端数据中心全局实例


#### Returns

[`DataCenterS`](mw.DataCenterS.md)

服务端数据中心全局实例
