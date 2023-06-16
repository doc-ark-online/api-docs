[Social](../groups/Core.Social.md) / RoomService

# RoomService <Badge type="tip" text="Class" /> <Score text="RoomService" />

**`Instance`**

MGS以及玩家信息、数据、头像等相关API

## Table of contents

| Methods |
| :-----|
| **[createAndJoinRoom](mw.RoomService.md#createandjoinroom)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `roomId`: `string`, `roomName`: `string`, `roomLimit`: `number`): `void` <br> 游戏方创建好房间后可通过调用createAndJoinRoom进行数据同步，也可通过MGS服务端进行数据同步|
| **[destroySDK](mw.RoomService.md#destroysdk)**(): `void` <br> SDK提供销毁方法，在游戏退出后可以销毁SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作|
| **[dispatchMGSChatMessage](mw.RoomService.md#dispatchmgschatmessage)**(`chatMessage`: `string`): `void` <br> 分发MGS聊天消息|
| **[getCurrentEnvironment](mw.RoomService.md#getcurrentenvironment)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 获取当前的环境|
| **[getMGSRoomId](mw.RoomService.md#getmgsroomid)**(): `string` <br> 获取MGS平台的RoomId|
| **[getRoomId](mw.RoomService.md#getroomid)**(): `string` <br> 获取游戏的RoomMgr分配的RoomId|
| **[initAndLoginMGS](mw.RoomService.md#initandloginmgs)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `gameID`: `string`): `void` <br> 初始化MGS|
| **[invokeMGSConfig](mw.RoomService.md#invokemgsconfig)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 用于获取MGS相关配置信息的接口。该接口需要support|
| **[isSupported](mw.RoomService.md#issupported)**(): `boolean` <br> 获取当前环境是否支持MGS功能|
| **[joinAudio](mw.RoomService.md#joinaudio)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）|
| **[joinRoom](mw.RoomService.md#joinroom)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `roomId`: `string`): `void` <br> 游戏方在玩家加入某个房间后，需要通过调用joinRoom进行数据同步|
| **[leaveRoom](mw.RoomService.md#leaveroom)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `roomId`: `string`): `void` <br> 游戏方在玩家离开房间前，需要调用leaveRoom进行数据同步|
| **[queryPlayerAction](mw.RoomService.md#queryplayeraction)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 向233发起queryPlayerAction并获得回调，查询玩家进入游戏时的操作方式|
| **[registerMGSChatMessageEvent](mw.RoomService.md#registermgschatmessageevent)**(`callback`: [`MGSEvent`](../modules/Core.mw.md#mgsevent)): `void` <br> 注册聊天回调|
| **[registerMGSEvent](mw.RoomService.md#registermgsevent)**(`eventType`: `string`, `callback`: [`MGSEvent`](../modules/Core.mw.md#mgsevent)): `void` <br> 注册MGS事件的回调|
| **[registerMGSEventListener](mw.RoomService.md#registermgseventlistener)**(`eventType`: `string`): `void` <br> 注册MGS事件监听器|
| **[reportLogInfo](mw.RoomService.md#reportloginfo)**(`eventName`: `string`, `eventDesc`: `string`, `jsonData`: `string`): `void` <br> 游戏方调用reportLogInfo接口上报运营所需的埋点数据|
| **[requestSaveImage](mw.RoomService.md#requestsaveimage)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起imageModify并获得回调|
| **[requestSavePortrait](mw.RoomService.md#requestsaveportrait)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起editProfile并获得回调|
| **[requestShareScreenShot](mw.RoomService.md#requestsharescreenshot)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起shareScreenshot并获得回调|
| **[showExitGameDialog](mw.RoomService.md#showexitgamedialog)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 游戏方可调用showExitGameDialog来显示退出游戏确认框|
| **[showFloatingLayer](mw.RoomService.md#showfloatinglayer)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `tab`: `number`): `void` <br> 向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能|
| **[showUserProfile](mw.RoomService.md#showuserprofile)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `openId`: `string`): `void` <br> 若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗|
| **[getInstance](mw.RoomService.md#getinstance)**(): [`RoomService`](mw.RoomService.md) <br> 获取API实例进行调用|

## Methods

### createAndJoinRoom <Score text="createAndJoinRoom" /> 

• **createAndJoinRoom**(`resp`, `roomId`, `roomName`, `roomLimit`): `void` 

游戏方创建好房间后可通过调用createAndJoinRoom进行数据同步，也可通过MGS服务端进行数据同步


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 房间Id |
| `roomName` | `string` | 房间名称 |
| `roomLimit` | `number` | 房间的人数限制 |


___

### destroySDK <Score text="destroySDK" /> 

• **destroySDK**(): `void` 

SDK提供销毁方法，在游戏退出后可以销毁SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作


::: warning Precautions

只在移动端由233拉起生效

:::


___

### dispatchMGSChatMessage <Score text="dispatchMGSChatMessage" /> 

• **dispatchMGSChatMessage**(`chatMessage`): `void` 

分发MGS聊天消息


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chatMessage` | `string` | 要分发的聊天消息 |


___

### getCurrentEnvironment <Score text="getCurrentEnvironment" /> 

• **getCurrentEnvironment**(`resp`): `void` 

获取当前的环境


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 获取到的当前的环境 |


___

### getMGSRoomId <Score text="getMGSRoomId" /> 

• **getMGSRoomId**(): `string` 

获取MGS平台的RoomId


::: warning Precautions

只在由233拉起生效

:::

使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出MGS平台的RoomId，PC环境下输出undefined
```ts
@Core.Class
export default class RoomExample extends Script {

    protected onStart(): void {
        console.log("获取MGS平台的RoomId", RoomService.getInstance().getMGSRoomId());
    }

}
```

#### Returns

`string`

MGS平台的RoomId

___

### getRoomId <Score text="getRoomId" /> 

• **getRoomId**(): `string` 

获取游戏的RoomMgr分配的RoomId


::: warning Precautions

只在由233拉起生效

:::

使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出游戏的RoomMgr分配的RoomId，PC环境下输出undefined
```ts
@Core.Class
export default class RoomExample extends Script {

    protected onStart(): void {
        console.log("获取当前游戏的RoomMgr分配的RoomId", RoomService.getInstance().getRoomId());
    }

}
```

#### Returns

`string`

游戏的RoomMgr分配的RoomId

___

### initAndLoginMGS <Score text="initAndLoginMGS" /> 

• **initAndLoginMGS**(`resp`, `gameID`): `void` 

初始化MGS


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 回调函数 |
| `gameID` | `string` | 发给MGS的gameId |


___

### invokeMGSConfig <Score text="invokeMGSConfig" /> 

• **invokeMGSConfig**(`resp`): `void` 

用于获取MGS相关配置信息的接口。该接口需要support


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |


___

### isSupported <Score text="isSupported" /> 

• **isSupported**(): `boolean` 

获取当前环境是否支持MGS功能


使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前环境是否支持MGS功能
```ts
@Core.Class
export default class RoomExample extends Script {

    protected onStart(): void {
        console.log("当前环境是否支持MGS功能:", RoomService.getInstance().isSupported());
    }

}
```

#### Returns

`boolean`

当前环境是否支持MGS功能

___

### joinAudio <Score text="joinAudio" /> 

• **joinAudio**(`resp`): `void` 

游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |


___

### joinRoom <Score text="joinRoom" /> 

• **joinRoom**(`resp`, `roomId`): `void` 

游戏方在玩家加入某个房间后，需要通过调用joinRoom进行数据同步


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 要加入的房间Id |


___

### leaveRoom <Score text="leaveRoom" /> 

• **leaveRoom**(`resp`, `roomId`): `void` 

游戏方在玩家离开房间前，需要调用leaveRoom进行数据同步


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 要离开的房间的Id |


___

### queryPlayerAction <Score text="queryPlayerAction" /> 

• **queryPlayerAction**(`resp`): `void` 

向233发起queryPlayerAction并获得回调，查询玩家进入游戏时的操作方式


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |


___

### registerMGSChatMessageEvent <Score text="registerMGSChatMessageEvent" /> 

• **registerMGSChatMessageEvent**(`callback`): `void` 

注册聊天回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`MGSEvent`](../modules/Core.mw.md#mgsevent) | 有消息时的触发函数 |


___

### registerMGSEvent <Score text="registerMGSEvent" /> 

• **registerMGSEvent**(`eventType`, `callback`): `void` 

注册MGS事件的回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | 需要注册的事件 |
| `callback` | [`MGSEvent`](../modules/Core.mw.md#mgsevent) | 需要执行的回调函数 |


___

### registerMGSEventListener <Score text="registerMGSEventListener" /> 

• **registerMGSEventListener**(`eventType`): `void` 

注册MGS事件监听器


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | 需要注册到233的事件类型 |


___

### reportLogInfo <Score text="reportLogInfo" /> 

• **reportLogInfo**(`eventName`, `eventDesc`, `jsonData`): `void` 

游戏方调用reportLogInfo接口上报运营所需的埋点数据


::: warning Precautions

只在移动端由233拉起生效，数据需要时json格式

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名称 |
| `eventDesc` | `string` | 事件描述 |
| `jsonData` | `string` | 发送的json数据 |


___

### requestSaveImage <Score text="requestSaveImage" /> 

• **requestSaveImage**(`resp`, `mgsData`): `void` 

向233发起imageModify并获得回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的图片Url地址 |


___

### requestSavePortrait <Score text="requestSavePortrait" /> 

• **requestSavePortrait**(`resp`, `mgsData`): `void` 

向233发起editProfile并获得回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的mgs数据 |


___

### requestShareScreenShot <Score text="requestShareScreenShot" /> 

• **requestShareScreenShot**(`resp`, `mgsData`): `void` 

向233发起shareScreenshot并获得回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的图片Url地址 |


___

### showExitGameDialog <Score text="showExitGameDialog" /> 

• **showExitGameDialog**(`resp`): `void` 

游戏方可调用showExitGameDialog来显示退出游戏确认框


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |


___

### showFloatingLayer <Score text="showFloatingLayer" /> 

• **showFloatingLayer**(`resp`, `tab`): `void` 

向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `tab` | `number` | 悬浮层功能位置 取值(0: 聊天 1: 好友) |


___

### showUserProfile <Score text="showUserProfile" /> 

• **showUserProfile**(`resp`, `openId`): `void` 

若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `openId` | `string` | 要显示的用户的openId |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`RoomService`](mw.RoomService.md) 

获取API实例进行调用


::: warning Precautions

只在由233拉起生效

:::

使用示例:获取实例并调用函数
```ts
// 通过实例调用函数获取玩家昵称
RoomService.getInstance().getNickName();
```

#### Returns

[`RoomService`](mw.RoomService.md)

返回API实例用以调用相关功能函数
