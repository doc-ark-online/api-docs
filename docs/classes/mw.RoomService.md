[SOCIAL](../groups/Core.SOCIAL.md) / RoomService

# RoomService <Badge type="tip" text="Class" /> <Score text="RoomService" />

**`Instance`**

MGS以及玩家信息、数据、头像等相关API

## Table of contents

| Methods |
| :-----|
| **[getCurrentEnvironment](mw.RoomService.md#getcurrentenvironment)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 获取当前的环境|
| **[getMGSRoomId](mw.RoomService.md#getmgsroomid)**(): `string` <br> 获取MGS平台的RoomId|
| **[getRoomId](mw.RoomService.md#getroomid)**(): `string` <br> 获取游戏的RoomMgr分配的RoomId|
| **[isSupported](mw.RoomService.md#issupported)**(): `boolean` <br> 获取当前环境是否支持MGS功能|
| **[joinAudio](mw.RoomService.md#joinaudio)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）|
| **[registerMGSChatMessageEvent](mw.RoomService.md#registermgschatmessageevent)**(`callback`: [`MGSEvent`](../modules/Core.mw.md#mgsevent)): `void` <br> 注册聊天回调|
| **[reportLogInfo](mw.RoomService.md#reportloginfo)**(`eventName`: `string`, `eventDesc`: `string`, `jsonData`: `string`): `void` <br> 游戏方调用reportLogInfo接口上报运营所需的埋点数据|
| **[requestSaveImage](mw.RoomService.md#requestsaveimage)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起imageModify并获得回调|
| **[requestSavePortrait](mw.RoomService.md#requestsaveportrait)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起editProfile并获得回调|
| **[requestShareScreenShot](mw.RoomService.md#requestsharescreenshot)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `mgsData`: `string`): `void` <br> 向233发起shareScreenshot并获得回调|
| **[showExitGameDialog](mw.RoomService.md#showexitgamedialog)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse)): `void` <br> 游戏方可调用showExitGameDialog来显示退出游戏确认框|
| **[showFloatingLayer](mw.RoomService.md#showfloatinglayer)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `tab`: `number`): `void` <br> 向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能|
| **[showUserProfile](mw.RoomService.md#showuserprofile)**(`resp`: [`MGSResponse`](../modules/Core.mw.md#mgsresponse), `openId`: `string`): `void` <br> 若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗|

## Methods

### getCurrentEnvironment <Score text="getCurrentEnvironment" /> 

• `Static` **getCurrentEnvironment**(`resp`): `void` 

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

• `Static` **getMGSRoomId**(): `string` 

获取MGS平台的RoomId


::: warning Precautions

只在由233拉起生效

:::

使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出MGS平台的RoomId，PC环境下输出undefined
```ts
@Core.Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("获取MGS平台的RoomId", RoomService.getMGSRoomId());
    }

}
```

#### Returns

`string`

MGS平台的RoomId

___

### getRoomId <Score text="getRoomId" /> 

• `Static` **getRoomId**(): `string` 

获取游戏的RoomMgr分配的RoomId


::: warning Precautions

只在由233拉起生效

:::

使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出游戏的RoomMgr分配的RoomId，PC环境下输出undefined
```ts
@Core.Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("获取当前游戏的RoomMgr分配的RoomId", RoomService.getRoomId());
    }

}
```

#### Returns

`string`

游戏的RoomMgr分配的RoomId

___

### isSupported <Score text="isSupported" /> 

• `Static` **isSupported**(): `boolean` 

获取当前环境是否支持MGS功能


使用示例:创建一个名为RoomExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前环境是否支持MGS功能
```ts
@Core.Component
export default class RoomExample extends mw.Script {

    protected onStart(): void {
        console.log("当前环境是否支持MGS功能:", RoomService.isSupported());
    }

}
```

#### Returns

`boolean`

当前环境是否支持MGS功能

___

### joinAudio <Score text="joinAudio" /> 

• `Static` **joinAudio**(`resp`): `void` 

游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |


___

### registerMGSChatMessageEvent <Score text="registerMGSChatMessageEvent" /> 

• `Static` **registerMGSChatMessageEvent**(`callback`): `void` 

注册聊天回调


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`MGSEvent`](../modules/Core.mw.md#mgsevent) | 有消息时的触发函数 |


___

### reportLogInfo <Score text="reportLogInfo" /> 

• `Static` **reportLogInfo**(`eventName`, `eventDesc`, `jsonData`): `void` 

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

• `Static` **requestSaveImage**(`resp`, `mgsData`): `void` 

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

• `Static` **requestSavePortrait**(`resp`, `mgsData`): `void` 

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

• `Static` **requestShareScreenShot**(`resp`, `mgsData`): `void` 

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

• `Static` **showExitGameDialog**(`resp`): `void` 

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

• `Static` **showFloatingLayer**(`resp`, `tab`): `void` 

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

• `Static` **showUserProfile**(`resp`, `openId`): `void` 

若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗


::: warning Precautions

只在移动端由233拉起生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Core.mw.md#mgsresponse) | 233的回调 |
| `openId` | `string` | 要显示的用户的openId |

