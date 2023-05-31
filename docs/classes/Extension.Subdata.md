[Data](../groups/Data.Data.md) / Subdata

# Subdata <Badge type="tip" text="Class" /> <Score text="Subdata" />

数据控制类的基类

使用示例:创建一个名为SubDataExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键你将在客户端以及服务端日志中看到玩家等级的信息，按下G键你可以在服务端看到玩家等级，客户端收不到
```ts
@Core.Class
export default class SubDataExample extends Core.Script {

    protected onStart(): void {
        ModuleManager.getInstance().registerModule(PlayerModuleS, PlayerModuleC, PlayerModuleData);
    }

}

class PlayerModuleC extends ModuleC<PlayerModuleS, PlayerModuleData>{

    protected onStart(): void {
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
        InputUtil.onKeyDown(Keys.G, () => {
            this.server.net_LevelClear();
        })
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
        console.log("玩家升级后等级：", playerData.getlevel());
    }
    //玩家等级清零
    public net_LevelClear(): void {
        //调用该函数的客户端玩家数据
        let playerData = this.currentData;
        playerData.levelClear();
        console.log("玩家清零后等级：", playerData.getlevel());
    }
}
class PlayerModuleData extends Subdata {
    @Decorator.saveProperty
    private level: number;

    protected initDefaultData(): void {
        console.log("当前版本");
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

    //等级清零 只保存不同步给客户端
    public levelClear(): void {
        this.level = 0;
        //保存数据
        this.save(false);
    }

    //数据初始化，在这里判断数据版本号，如果和当前版本号不同则修改数据，然后设置新的版本号
    protected override onDataInit(): void {
        while (this.currentVersion != this.version) {
            switch (this.currentVersion) {
                case 1:
                    //设置当前版本
                    this.currentVersion = 2;
                    //赋值新的数据
                    this.level = 0;
                    break;
                case 2:
                    //设置当前版本
                    this.currentVersion = 3;
                    //赋值新的数据
                    this.level = 1;
                    break;
                default:
                    console.log("未处理的数据版本~");
            }
        }
    }
    //当前最新的版本号(默认是1，升级数据需要重写)
    protected override get version() {
        return 1;
    }
}
```

## Table of contents

| Properties |
| :-----|
| **[onDataChange](Extension.Subdata.md#ondatachange)**: [`Action`](Type.Action.md) <br> 数据变化的委托|

| Accessors |
| :-----|
| **[currentVersion](Extension.Subdata.md#currentversion)**(): `number` <br> 当前数据版本号，和version配合使用，可实现数据升级|
| **[version](Extension.Subdata.md#version)**(): `number` <br> 数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级|

| Methods |
| :-----|
| **[getSavedProperty](Extension.Subdata.md#getsavedproperty)**<`T`\>(`propertyName`: `string`): `T` <br> 通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)|
| **[initDefaultData](Extension.Subdata.md#initdefaultdata)**(): `void` <br> 初始化默认数据，需要请复写|
| **[onDataInit](Extension.Subdata.md#ondatainit)**(): `void` <br> 数据初始化完成调用，需要请复写，可在这个方法中实现数据升级|
| **[save](Extension.Subdata.md#save)**(`syncToClient`: `boolean`): [`Subdata`](Extension.Subdata.md) <br> 保存数据|
| **[syncToClient](Extension.Subdata.md#synctoclient)**(): [`Subdata`](Extension.Subdata.md) <br> 向客户端同步数据|

## Properties

### onDataChange <Score text="onDataChange" /> 

• `Readonly` **onDataChange**: [`Action`](Type.Action.md)

数据变化的委托

## Accessors

### currentVersion <Score text="currentVersion" /> 

• `Protected` `get` **currentVersion**(): `number`

当前数据版本号，和version配合使用，可实现数据升级

#### Returns

`number`

• `Protected` `set` **currentVersion**(`value`): `void`

当前数据版本号，和version配合使用，可实现数据升级

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### version <Score text="version" /> 

• `Protected` `get` **version**(): `number`

数据版本号，数据有变化需要重写，和currentVersion配合使用，可实现数据升级

#### Returns

`number`

## Methods

### getSavedProperty <Score text="getSavedProperty" /> 

• `Protected` **getSavedProperty**<`T`\>(`propertyName`): `T` 

通过属性名获取存储的属性值(用作数据升级，读取之前已经存储的数据)


#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` |  属性名 |

#### Returns

`T`

属性值

___

### initDefaultData <Score text="initDefaultData" /> 

• `Protected` **initDefaultData**(): `void` 

初始化默认数据，需要请复写



___

### onDataInit <Score text="onDataInit" /> 

• `Protected` **onDataInit**(): `void` 

数据初始化完成调用，需要请复写，可在这个方法中实现数据升级

::: warning Precautions

这个方法调用完成后，你需要保证currentVersion和version是相等的

:::



___

### save <Score text="save" /> 

• **save**(`syncToClient`): [`Subdata`](Extension.Subdata.md) <Badge type="tip" text="server" />

保存数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `syncToClient` | `boolean` |  是否同步给客户端 |

#### Returns

[`Subdata`](Extension.Subdata.md)

自身

___

### syncToClient <Score text="syncToClient" /> 

• **syncToClient**(): [`Subdata`](Extension.Subdata.md) <Badge type="tip" text="server" />

向客户端同步数据


#### Returns

[`Subdata`](Extension.Subdata.md)

自身
