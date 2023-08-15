[SOCIAL](../groups/SOCIAL.SOCIAL.md) / RoomService

# RoomService <Badge type="tip" text="Class" /> <Score text="RoomService" />

**`Instance`**

MGS以及玩家信息、数据、头像等相关API

## Table of contents

| Methods |
| :-----|
| **[getCurrentEnvironment](Service.RoomService.md#getcurrentenvironment)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 获取当前的环境|
| **[getMGSRoomId](Service.RoomService.md#getmgsroomid)**(): `string` <br> 获取MGS平台的RoomId|
| **[getRoomId](Service.RoomService.md#getroomid)**(): `string` <br> 获取游戏的RoomMgr分配的RoomId|
| **[isSupported](Service.RoomService.md#issupported)**(): `boolean` <br> 获取当前环境是否支持MGS功能|
| **[registerMGSChatMessageEvent](Service.RoomService.md#registermgschatmessageevent)**(`callback`: [`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册聊天回调|
| **[registerMGSEvent](Service.RoomService.md#registermgsevent)**(`eventType`: `string`, `callback`: [`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册MGS事件的回调|
| **[registerMGSEventListener](Service.RoomService.md#registermgseventlistener)**(`eventType`: `string`): `void` <br> 注册MGS事件监听器|
| **[reportLogInfo](Service.RoomService.md#reportloginfo)**(`eventName`: `string`, `eventDesc`: `string`, `jsonData`: `string`): `void` <br> 游戏方调用reportLogInfo接口上报运营所需的埋点数据|
| **[requestSaveImage](Service.RoomService.md#requestsaveimage)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起imageModify并获得回调|
| **[requestSavePortrait](Service.RoomService.md#requestsaveportrait)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起editProfile并获得回调|
| **[requestShareScreenShot](Service.RoomService.md#requestsharescreenshot)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起shareScreenshot并获得回调|
| **[showExitGameDialog](Service.RoomService.md#showexitgamedialog)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 游戏方可调用showExitGameDialog来显示退出游戏确认框|
| **[showFloatingLayer](Service.RoomService.md#showfloatinglayer)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse), `tab`: `number`): `void` <br> 向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能|
| **[showUserProfile](Service.RoomService.md#showuserprofile)**(`resp`: [`MGSResponse`](../modules/Service.Service.md#mgsresponse), `openId`: `string`): `void` <br> 若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗|
| **[getInstance](Service.RoomService.md#getinstance)**(): [`RoomService`](Service.RoomService.md) <br> 获取API实例进行调用|

## Methods

### getCurrentEnvironment <Score text="getCurrentEnvironment" /> 

• **getCurrentEnvironment**(`resp`): `void` 

获取当前的环境


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 获取到的当前的环境 |


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
export default class RoomExample extends Core.Script {

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
export default class RoomExample extends Core.Script {

    protected onStart(): void {
        console.log("获取当前游戏的RoomMgr分配的RoomId", RoomService.getInstance().getRoomId());
    }

}
```

#### Returns

`string`

游戏的RoomMgr分配的RoomId

___

### isSupported <Score text="isSupported" /> 

• **isSupported**(): `boolean` 

获取当前环境是否支持MGS功能


#### Returns

`boolean`

当前环境是否支持MGS功能

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
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 有消息时的触发函数 |


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
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 需要执行的回调函数 |


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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |


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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `openId` | `string` | 要显示的用户的openId |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`RoomService`](Service.RoomService.md) 

获取API实例进行调用


::: warning Precautions

只在由233拉起生效

:::

使用示例:获取实例并调用函数
```ts
// 通过实例调用函数获取玩家昵称
Service.RoomService.getInstance().getNickName();
```

#### Returns

[`RoomService`](Service.RoomService.md)

返回API实例用以调用相关功能函数
