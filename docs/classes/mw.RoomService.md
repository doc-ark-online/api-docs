[服务](../groups/服务.服务.md) / RoomService

# RoomService <Badge type="tip" text="Class" /> <Score text="RoomService" />

MGS以及玩家信息、数据、头像等相关API。
MGS = Meta Game Service, 是编辑器提供给开发者的一些原生服务，如发布游戏后的左上角聊天、好友相关信息服务。

## Table of contents

### Methods <Score text="Methods" /> 
| **[getCurrentEnvironment](mw.RoomService.md#getcurrentenvironment)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void`   |
| :-----|
| 获取当前的环境|
| **[getMGSRoomId](mw.RoomService.md#getmgsroomid)**(): `string`   |
| 获取 MGS 平台的 RoomId|
| **[getRoomId](mw.RoomService.md#getroomid)**(): `string`   |
| 获取游戏的RoomMgr分配的RoomId|
| **[isSupported](mw.RoomService.md#issupported)**(): `boolean`   |
| 获取当前环境是否支持MGS功能|
| **[joinAudio](mw.RoomService.md#joinaudio)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void`   |
| 游戏方可调用 joinAudio 加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）|
| **[kick](mw.RoomService.md#kick)**(`player`: `number`  [`Player`](mw.Player.md), `message?`: `string`): `void` <Badge type="tip" text="server" />  |
| 将某一玩家踢下线|
| **[registerMGSChatMessageEvent](mw.RoomService.md#registermgschatmessageevent)**(`callback`: [`MGSEvent`](../modules/Core.mw.md#mgsevent)): `void`   |
| 注册聊天回调|
| **[reportLogInfo](mw.RoomService.md#reportloginfo)**(`eventName`: `string`, `eventDesc`: `string`, `jsonData`: `string`): `void`   |
| 游戏方调用 reportLogInfo 接口上报运营所需的埋点数据|
| **[requestSaveImage](mw.RoomService.md#requestsaveimage)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void`   |
| 向233发起imageModify并获得回调|
| **[requestSavePortrait](mw.RoomService.md#requestsaveportrait)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void`   |
| 向233发起editProfile并获得回调|
| **[requestShareScreenShot](mw.RoomService.md#requestsharescreenshot)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void`   |
| 向 233 发起 shareScreenshot 并获得回调|
| **[showExitGameDialog](mw.RoomService.md#showexitgamedialog)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void`   |
| 游戏方可调用 showExitGameDialog 来显示退出游戏确认框|
| **[showFloatingLayer](mw.RoomService.md#showfloatinglayer)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `tab`: `number`): `void`   |
| 向 233 发起 showFloatingLayer 来展开悬浮层的内容，可展开聊天/好友功能|
| **[showUserProfile](mw.RoomService.md#showuserprofile)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `userId`: `string`): `void`   |
| 若需要查看 233 玩家的资料信息，可通过调用 showUserProfile 进行查看， SDK 会弹出资料卡片弹窗|

## Methods

### getCurrentEnvironment <Score text="getCurrentEnvironment" /> 

• `Static` **getCurrentEnvironment**(`resp`): `void` 

获取当前的环境

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 获取到的当前的环境 |
| :------ | :------ |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### getMGSRoomId <Score text="getMGSRoomId" /> 

• `Static` **getMGSRoomId**(): `string` 

获取 MGS 平台的 RoomId

#### Returns

| `string` | MGS 平台的 RoomId |
| :------ | :------ |

::: warning Precautions

只在由 233 拉起生效

:::

<span style="font-size: 14px;">
使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出MGS平台的RoomId，PC环境下输出undefined
</span>

```ts
@Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("获取MGS平台的RoomId", RoomService.getMGSRoomId());
    }

}
```

___

### getRoomId <Score text="getRoomId" /> 

• `Static` **getRoomId**(): `string` 

获取游戏的RoomMgr分配的RoomId

#### Returns

| `string` | 游戏的RoomMgr分配的RoomId |
| :------ | :------ |

::: warning Precautions

只在由233拉起生效

:::

<span style="font-size: 14px;">
使用示例:创建一个名为 RoomExample 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出游戏的RoomMgr分配的RoomId，PC环境下输出undefined
</span>

```ts
@Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("获取当前游戏的RoomMgr分配的RoomId", RoomService.getRoomId());
    }

}
```

___

### isSupported <Score text="isSupported" /> 

• `Static` **isSupported**(): `boolean` 

获取当前环境是否支持MGS功能

#### Returns

| `boolean` | 当前环境是否支持MGS功能 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前环境是否支持MGS功能
</span>

```ts
@Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("当前环境是否支持MGS功能:", RoomService.isSupported());
    }

}
```

___

### joinAudio <Score text="joinAudio" /> 

• `Static` **joinAudio**(`resp`): `void` 

游戏方可调用 joinAudio 加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### kick <Score text="kick" /> 

• `Static` **kick**(`player`, `message?`): `void` <Badge type="tip" text="server" />

将某一玩家踢下线

#### Parameters

| `player` `number`  [`Player`](mw.Player.md) |  踢下线的 Player |
| :------ | :------ |
| `message?` `string` |  踢出玩家时触发退出 UI 弹出的信息 default:null range: 提示适合长度的信息即可 |


<span style="font-size: 14px;">
使用示例: 创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下 G 键，踢出角色。
</span>

```ts
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isServer()) {
            Player.spawnDefaultCharacter();
        }

       let player = await mw.Player.asyncGetLocalPlayer();

        if(SystemUtil.isClient()) {
           mw.InputUtil.onKeyDown(Keys.G,()=>{
             mw.Event.dispatchToServer(`AddPlayerPassable`,player);
           })
        }
       if(SystemUtil.isServer()) {
           mw.Event.addClientListener(`AddPlayerPassable`,(player : Player)=>{
              RoomService.kick(player);
           })
        }
   }
}
```

___

### registerMGSChatMessageEvent <Score text="registerMGSChatMessageEvent" /> 

• `Static` **registerMGSChatMessageEvent**(`callback`): `void` 

注册聊天回调

#### Parameters

| `callback` [`MGSEvent`](../modules/Core.mw.md#mgsevent) | 有消息时的触发函数 |
| :------ | :------ |


::: warning Precautions

只在移动端由233拉起生效

:::

<span style="font-size: 14px;">
使用示例: 创建一个名为 NewScript 的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下 G 键，踢出角色。
</span>

```ts
@Component
export default class NewScript extends Script {

    protected onStart(): void {
        if(SystemUtil.isClient()){
         const callback = (receivedMsg: string) =>{
             console.log("we received Chat message"+ receivedMsg +"from MGS");
         };
         RoomService.registerMGSChatMessageEvent(callback);
       }
   }
}
```

___

### reportLogInfo <Score text="reportLogInfo" /> 

• `Static` **reportLogInfo**(`eventName`, `eventDesc`, `jsonData`): `void` 

游戏方调用 reportLogInfo 接口上报运营所需的埋点数据

#### Parameters

| `eventName` `string` | 事件名称 range:字符串长度不做限制，制定适合长度的字符串即可 |
| :------ | :------ |
| `eventDesc` `string` | 事件描述 range:字符串长度不做限制，制定适合长度的字符串即可 |
| `jsonData` `string` | 发送的 json 数据 range:字符串长度不做限制，制定适合长度的字符串即可 |


::: warning Precautions

只在移动端由233拉起生效，数据需要时json格式

:::

___

### requestSaveImage <Score text="requestSaveImage" /> 

• `Static` **requestSaveImage**(`resp`, `mgsData`): `void` 

向233发起imageModify并获得回调

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |
| `mgsData` `string` | 要保存的图片 Url 地址 range:地址 |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### requestSavePortrait <Score text="requestSavePortrait" /> 

• `Static` **requestSavePortrait**(`resp`, `mgsData`): `void` 

向233发起editProfile并获得回调

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |
| `mgsData` `string` | 要保存的 mgs 数据 range:制定适合长度的字符串数据即可 |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### requestShareScreenShot <Score text="requestShareScreenShot" /> 

• `Static` **requestShareScreenShot**(`resp`, `mgsData`): `void` 

向 233 发起 shareScreenshot 并获得回调

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |
| `mgsData` `string` | 要保存的图片 Url 地址 range:地址 |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### showExitGameDialog <Score text="showExitGameDialog" /> 

• `Static` **showExitGameDialog**(`resp`): `void` 

游戏方可调用 showExitGameDialog 来显示退出游戏确认框

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |


::: warning Precautions

只在移动端由233拉起生效

:::

___

### showFloatingLayer <Score text="showFloatingLayer" /> 

• `Static` **showFloatingLayer**(`resp`, `tab`): `void` 

向 233 发起 showFloatingLayer 来展开悬浮层的内容，可展开聊天/好友功能

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |
| `tab` `number` | 悬浮层功能位置 range:取值(0: 聊天 1: 好友) type:整数 |


::: warning Precautions

只在移动端由 233 拉起生效

:::

___

### showUserProfile <Score text="showUserProfile" /> 

• `Static` **showUserProfile**(`resp`, `userId`): `void` 

若需要查看 233 玩家的资料信息，可通过调用 showUserProfile 进行查看， SDK 会弹出资料卡片弹窗

#### Parameters

| `resp` [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| :------ | :------ |
| `userId` `string` | 要显示的用户的 userId range: 依据 userid 长度而定 |


::: warning Precautions

只在移动端由233拉起生效
