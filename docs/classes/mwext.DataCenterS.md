[EXTENSION](../groups/Extension.EXTENSION.md) / DataCenterS

# DataCenterS <Badge type="tip" text="Class" /> <Score text="DataCenterS" />

<span class="content-big">

服务端数据中心，管理所有玩家的数据

</span>

<span style="font-size: 14px;">

使用示例:创建一个名为DataCenterSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，玩家加入时会输出当前玩家的等级以及当前所有玩家的等级，玩家离开时当前玩家会升级并且输出（pie上玩家离开需要通过点x键）

</span>

```ts
@Component
export default class DataCenterSExample extends Script {

    protected onStart(): void {
        if (SystemUtil.isServer()) {
            DataCenterS.onPlayerJoin.add(this.onPlayerJoin, this);
            DataCenterS.onPlayerLeave.add(this.onPlayerLeave, this);
        }
    }

    //玩家加入且数据就绪
    private onPlayerJoin(player: mw.Player): void {
        let playerData = DataCenterS.getData(player, PlayerModuleData);
        console.log("玩家加入，当前玩家等级为：", playerData.getlevel());
        console.log("显示当前所有玩家的等级：");
        const playerIds = DataCenterS.getReadyPlayerIds();
        playerIds.forEach(playerId => {
            let playerData = DataCenterS.getData(playerId, PlayerModuleData);
            console.log("玩家playerId为：" + playerId, "的等级：", playerData.getlevel());
        });
    }

    //玩家离开
    private onPlayerLeave(player: mw.Player): void {
        let playerData = DataCenterS.getData(player, PlayerModuleData);
        playerData.levelUp();
        console.log("玩家离开，等级提升为：", playerData.getlevel());
    }

}

class PlayerModuleData extends Subdata {
    @Decorator.persistence()
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

### Properties <Score text="Properties" /> 
| **[onPlayerJoin](mwext.DataCenterS.md#onplayerjoin)**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>  |
| :-----|
| 玩家进入游戏的委托，当委托被调用的时候，可以保证玩家的数据是就绪的|
| **[onPlayerLeave](mwext.DataCenterS.md#onplayerleave)**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>  |
| 玩家离开游戏的委托，可用作玩家最后的数据处理|

### Methods <Score text="Methods" /> 
| **[getData](mwext.DataCenterS.md#getdata)**<`T`: extends [`Subdata`](mwext.Subdata.md)<`T`\>\>(`player`: `string` \, `SubdataType`: [`TypeName`](../interfaces/mw.TypeName.md)<`T`: extends [`Subdata`](mwext.Subdata.md)<`T`\>\>): `T`: extends [`Subdata`](mwext.Subdata.md)<`T`\>  |
| :-----|
| 获取玩家的子数据|
| **[getReadyPlayerIds](mwext.DataCenterS.md#getreadyplayerids)**(): `number`[]  |
| 获取在线且数据就绪的所有玩家ID|
| **[setDataSource](mwext.DataCenterS.md#setdatasource)**(`gameId`: `string`): `void`  |
| 设置数据来源|

## Properties

### onPlayerJoin <Score text="onPlayerJoin" /> 

▪ `Static` `Readonly` **onPlayerJoin**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>

玩家进入游戏的委托，当委托被调用的时候，可以保证玩家的数据是就绪的

___

### onPlayerLeave <Score text="onPlayerLeave" /> 

▪ `Static` `Readonly` **onPlayerLeave**: [`Action1`](mw.Action1.md)<[`Player`](mw.Player.md)\>

玩家离开游戏的委托，可用作玩家最后的数据处理

## Methods

### getData <Score text="getData" /> 

• `Static` **getData**<`T`\>(`player`, `SubdataType`): `T` <Badge type="tip" text="server" />

获取玩家的子数据

#### Parameters

| `player` `string` \| `number` \| [`Player`](mw.Player.md) |  玩家\|玩家userId\|玩家instanceId |
| :------ | :------ |
| `SubdataType` [`TypeName`](../interfaces/mw.TypeName.md)<`T`\> |  数据类 |

#### Returns

| `T` | 数据对象 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为DataCenterSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，玩家加入时你将在在服务端日志中看到玩家等级为0的信息

</span>

```ts
@Component
export default class DataCenterSExample extends Script {

 protected onStart(): void {
     if (SystemUtil.isServer()) {
         DataCenterS.onPlayerJoin.add((player)=>{
             let playerData = DataCenterS.getData(player, PlayerModuleData);
             console.log("玩家等级：", playerData.getlevel());
         });
     }
   }
}

class PlayerModuleData extends Subdata {
    @Decorator.persistence()
    private level: number = 0;

    public getlevel(): number {
        return this.level;
    }
}
```

#### Type parameters

| `T` | extends [`Subdata`](mwext.Subdata.md)<`T`\> |
| :------ | :------ |

___

### getReadyPlayerIds <Score text="getReadyPlayerIds" /> 

• `Static` **getReadyPlayerIds**(): `number`[] <Badge type="tip" text="server" />

获取在线且数据就绪的所有玩家ID

#### Returns

| `number`[] | 玩家id数组 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为DataCenterSExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F健你将在在服务端日志中看到所有数据就绪的玩家的playerid以及等级

</span>

```ts
@Component
export default class DataCenterSExample extends Script {

    protected onStart(): void {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.F, () => {
                this.traceAllLevel();
            })
        }
    }

    //测试输出所有数据就绪的玩家的等级
    @mw.RemoteFunction(mw.Server)
    public traceAllLevel(): void {
        if (SystemUtil.isServer()) {
            const playerIds = DataCenterS.getReadyPlayerIds();
            playerIds.forEach(playerId => {
                let playerData = DataCenterS.getData(playerId, PlayerModuleData);
                console.log("玩家playerId为：" + playerId, "的等级：", playerData.getlevel());
            });
        }
    }
}

class PlayerModuleData extends Subdata {
    @Decorator.persistence()
    private level: number = 0;

    public getlevel(): number {
        return this.level;
    }
}
```

___

### setDataSource <Score text="setDataSource" /> 

• `Static` **setDataSource**(`gameId`): `void` <Badge type="tip" text="server" />

设置数据来源

#### Parameters

| `gameId` `string` |  数据源的gameId，需要在开发者后台进行授权 |
| :------ | :------ |


