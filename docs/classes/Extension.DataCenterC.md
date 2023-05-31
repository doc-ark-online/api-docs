[Data](../groups/Data.Data.md) / DataCenterC

# DataCenterC <Badge type="tip" text="Class" /> <Score text="DataCenterC" />

客户端数据中心，里面存放着当前玩家的数据

::: warning Precautions

单例类，请使用getInstance获取对象

:::

使用示例:创建一个名为DataCenterCExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，你将在客户端日志中看到玩家数据就绪以及玩家等级为0的信息
```ts
@Core.Class
export default class DataCenterCExample extends Core.Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        this.traceLevel();
    }

    //等待玩家数据准备好并输出玩家数据的等级
    public async traceLevel(): Promise<void> {
        if (SystemUtil.isClient()) {
            //等待玩家数据准备好
            await DataCenterC.getInstance().ready();
            console.log("玩家数据就绪");
            let playerData = DataCenterC.getInstance().getData(PlayerModuleData);
            console.log("玩家等级：", playerData.getlevel());
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

## Table of contents

| Methods |
| :-----|
| **[getData](Extension.DataCenterC.md#getdata)**<`T`: extends [`Subdata`](Extension.Subdata.md)<`T`\>\>(`SubdataType`: [`TypeName`](../interfaces/Type.TypeName.md)<`T`\>): `T`: extends [`Subdata`](Extension.Subdata.md)<`T`\> <br> 获取当前玩家的一个数据|
| **[ready](Extension.DataCenterC.md#ready)**(): `Promise`<`void`\> <br> 判断数据是否就绪|
| **[getInstance](Extension.DataCenterC.md#getinstance)**(): [`DataCenterC`](Extension.DataCenterC.md) <br> 获取客户端数据中心全局实例|

## Methods

### getData <Score text="getData" /> 

• **getData**<`T`\>(`SubdataType`): `T` <Badge type="tip" text="client" />

获取当前玩家的一个数据


使用示例:创建一个名为DataCenterCExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，你将在客户端日志中看到玩家等级为0的信息
```ts
@Core.Class
export default class DataCenterCExample extends Core.Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        this.traceLevel();
    }

    //等待玩家数据准备好并输出玩家数据的等级
    public async traceLevel(): Promise<void> {
        if (SystemUtil.isClient()) {
            //等待玩家数据准备好
            await DataCenterC.getInstance().ready();
            let playerData = DataCenterC.getInstance().getData(PlayerModuleData);
            console.log("玩家等级：", playerData.getlevel());
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
| `T` | extends [`Subdata`](Extension.Subdata.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SubdataType` | [`TypeName`](../interfaces/Type.TypeName.md)<`T`\> |  数据类型 |

#### Returns

`T`

数据对象

___

### ready <Score text="ready" /> 

• **ready**(): `Promise`<`void`\> <Badge type="tip" text="client" />

判断数据是否就绪


使用示例:创建一个名为DataCenterCExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，你将在客户端日志中看到玩家数据就绪以及玩家等级为0的信息
```ts
@Core.Class
export default class DataCenterCExample extends Core.Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
        this.traceLevel();
    }

    //等待玩家数据准备好并输出玩家数据的等级
    public async traceLevel(): Promise<void> {
        if (SystemUtil.isClient()) {
            //等待玩家数据准备好
            await DataCenterC.getInstance().ready();
            console.log("玩家数据就绪");
            let playerData = DataCenterC.getInstance().getData(PlayerModuleData);
            console.log("玩家等级：", playerData.getlevel());
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

#### Returns

`Promise`<`void`\>

true-就绪 false-未就绪

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`DataCenterC`](Extension.DataCenterC.md) <Badge type="tip" text="client" />

获取客户端数据中心全局实例


#### Returns

[`DataCenterC`](Extension.DataCenterC.md)

客户端数据中心全局实例
