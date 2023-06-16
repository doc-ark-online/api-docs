[Settings](../groups/Core.Settings.md) / RoomSettings

# RoomSettings <Badge type="tip" text="Class" /> <Score text="RoomSettings" />

房间设置

使用示例:创建一个名为"ClassExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，你将在服务器Log中看到对应方法调用信息。代码如下：
```ts
@Core.Class
export default class ClassExample extends Script {

    protected onStart(): void {
         this.RoomSettings();
    }

    @Core.Function(Core.Server)
    public RoomSettings(){
        //设置玩家是否可以中途加入游戏
        RoomSettings.enableJoiningMidgame(true);

        let joinPeople = RoomSettings.isJoiningMidgameEnabled();
        console.log("玩家是否可以中途加入游戏：" + joinPeople);

        let players = RoomSettings.getMaxPlayers();
        console.log("游戏中玩家数量上限是：" + players + "人。");

        let resEnable = RoomSettings.isPlayerReserveEnabled();
        console.log("服务器预留玩家是否开启：" + resEnable);

        let resPlayers = RoomSettings.getReservedPlayers();
        console.log("服务器预留玩家数量是：" + resPlayers + "人。");
    }
}
```

## Table of contents

| Methods |
| :-----|
| **[enableJoiningMidgame](mw.RoomSettings.md#enablejoiningmidgame)**(`isEnable`: `boolean`): `void` <br> 设置中途加入开关|
| **[getMaxPlayers](mw.RoomSettings.md#getmaxplayers)**(): `number` <br> 获取玩家数量上限|
| **[getReservedPlayers](mw.RoomSettings.md#getreservedplayers)**(): `number` <br> 获取服务器预留玩家数量|
| **[isJoiningMidgameEnabled](mw.RoomSettings.md#isjoiningmidgameenabled)**(): `boolean` <br> 获取是否开启中途加入|
| **[isPlayerReserveEnabled](mw.RoomSettings.md#isplayerreserveenabled)**(): `boolean` <br> 获取服务器预留玩家是否开启|

## Methods

### enableJoiningMidgame <Score text="enableJoiningMidgame" /> 

• `Static` **enableJoiningMidgame**(`isEnable`): `void` <Badge type="tip" text="server" />

设置中途加入开关


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnable` | `boolean` | -true:开启中途加入 -false:关闭中途加入 |


___

### getMaxPlayers <Score text="getMaxPlayers" /> 

• `Static` **getMaxPlayers**(): `number` <Badge type="tip" text="server" />

获取玩家数量上限


#### Returns

`number`

DS房间玩家数量上限。如果返回值为undefined，请检查是否在服务端调用或者玩家数量上限是否为空

___

### getReservedPlayers <Score text="getReservedPlayers" /> 

• `Static` **getReservedPlayers**(): `number` <Badge type="tip" text="server" />

获取服务器预留玩家数量


#### Returns

`number`

服务器预留玩家数量。如果返回值为undefined，请检查是否在服务端调用或者预留玩家数量是否为空

___

### isJoiningMidgameEnabled <Score text="isJoiningMidgameEnabled" /> 

• `Static` **isJoiningMidgameEnabled**(): `boolean` <Badge type="tip" text="server" />

获取是否开启中途加入


#### Returns

`boolean`

true:开启中途加入 false:关闭中途加入。如果返回值为undefined，请检查是否在服务端调用

___

### isPlayerReserveEnabled <Score text="isPlayerReserveEnabled" /> 

• `Static` **isPlayerReserveEnabled**(): `boolean` <Badge type="tip" text="server" />

获取服务器预留玩家是否开启


#### Returns

`boolean`

预留玩家功能是否开启。如果返回值为undefined，请检查是否在服务端调用或者预留玩家是否为空
