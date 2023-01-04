[Service](../modules/Service.Service.md) / RoomService

# RoomService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

MGS以及玩家信息、数据、头像等相关API

## Table of contents

| Methods |
| :-----|
| **[addFriend](Service.RoomService.md#addfriend)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向233发起addFriend并获得回调|
| **[createAndJoinRoom](Service.RoomService.md#createandjoinroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`, `string`, `number`): `void` <br> 游戏方创建好房间后可通过调用createAndJoinRoom进行数据同步，也可通过MGS服务端进行数据同步|
| **[destroySDK](Service.RoomService.md#destroysdk)**(): `void` <br> SDK提供销毁方法，在游戏退出后可以销毁SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作|
| **[dispatchMGSChatMessage](Service.RoomService.md#dispatchmgschatmessage)**(`string`): `void` <br> 分发MGS聊天消息|
| **[getCurrentEnvironment](Service.RoomService.md#getcurrentenvironment)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 获取当前的环境|
| **[getMGSRoomId](Service.RoomService.md#getmgsroomid)**(): `string` <br> 获取MGS平台的RoomId|
| **[getRoomId](Service.RoomService.md#getroomid)**(): `string` <br> 获取MW的RoomMgr分配的RoomId|
| **[initAndLoginMGS](Service.RoomService.md#initandloginmgs)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 初始化MGS|
| **[invokeMGSConfig](Service.RoomService.md#invokemgsconfig)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 用于获取MGS相关配置信息的接口。该接口需要support|
| **[isFriend](Service.RoomService.md#isfriend)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 若需要检测玩家是否好友关系，可通过调用isFriend接口进行查看|
| **[isSupported](Service.RoomService.md#issupported)**(): `boolean` <br> 获取当前环境是否支持MGS功能|
| **[joinAudio](Service.RoomService.md#joinaudio)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）|
| **[joinRoom](Service.RoomService.md#joinroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 游戏方在玩家加入某个房间后，需要通过调用joinRoom进行数据同步|
| **[leaveRoom](Service.RoomService.md#leaveroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 游戏方在玩家离开房间前，需要调用leaveRoom进行数据同步|
| **[queryPlayerAction](Service.RoomService.md#queryplayeraction)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 向233发起queryPlayerAction并获得回调，查询玩家进入游戏时的操作方式|
| **[registerMGSChatMessageEvent](Service.RoomService.md#registermgschatmessageevent)**([`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册聊天回调|
| **[registerMGSEvent](Service.RoomService.md#registermgsevent)**(`string`, [`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册MGS事件的回调|
| **[registerMGSEventListener](Service.RoomService.md#registermgseventlistener)**(`string`): `void` <br> 注册MGS事件监听器|
| **[reportLogInfo](Service.RoomService.md#reportloginfo)**(`string`, `string`, `string`): `void` <br> 游戏方调用reportLogInfo接口上报运营所需的埋点数据|
| **[requestSaveImage](Service.RoomService.md#requestsaveimage)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向233发起imageModify并获得回调|
| **[requestSavePortrait](Service.RoomService.md#requestsaveportrait)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向233发起editProfile并获得回调|
| **[requestShareScreenShot](Service.RoomService.md#requestsharescreenshot)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向233发起shareScreenshot并获得回调|
| **[showExitGameDialog](Service.RoomService.md#showexitgamedialog)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 游戏方可调用showExitGameDialog来显示退出游戏确认框|
| **[showFloatingLayer](Service.RoomService.md#showfloatinglayer)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `number`): `void` <br> 向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能|
| **[showUserProfile](Service.RoomService.md#showuserprofile)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗|
| **[getInstance](Service.RoomService.md#getinstance)**(): [`RoomService`](Service.RoomService.md) <br> 获取API实例进行调用|

## Methods

### addFriend

▸ **addFriend**(`resp`, `friendOpenId`): `void`

**`Description`**

向233发起addFriend并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `friendOpenId` | `string` | 要加的好友Id |

#### Returns

`void`

___

### createAndJoinRoom

▸ **createAndJoinRoom**(`resp`, `roomId`, `roomName`, `roomLimit`): `void`

**`Description`**

游戏方创建好房间后可通过调用createAndJoinRoom进行数据同步，也可通过MGS服务端进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 房间Id |
| `roomName` | `string` | 房间名称 |
| `roomLimit` | `number` | 房间的人数限制 |

#### Returns

`void`

___

### destroySDK

▸ **destroySDK**(): `void`

**`Description`**

SDK提供销毁方法，在游戏退出后可以销毁SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Returns

`void`

___

### dispatchMGSChatMessage

▸ **dispatchMGSChatMessage**(`chatMessage`): `void`

**`Description`**

分发MGS聊天消息

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chatMessage` | `string` | 要分发的聊天消息 |

#### Returns

`void`

___

### getCurrentEnvironment

▸ **getCurrentEnvironment**(`resp`): `void`

**`Description`**

获取当前的环境

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 获取到的当前的环境 |

#### Returns

`void`

___

### getMGSRoomId

▸ **getMGSRoomId**(): `string`

**`Description`**

获取MGS平台的RoomId

**`Effect`**

调用端生效

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

MGS平台的RoomId

___

### getRoomId

▸ **getRoomId**(): `string`

**`Description`**

获取MW的RoomMgr分配的RoomId

**`Effect`**

调用端生效

**`Precautions`**

只在由233拉起生效

#### Returns

`string`

MW的RoomMgr分配的RoomId

___

### initAndLoginMGS

▸ **initAndLoginMGS**(`resp`, `gameID`): `void`

**`Description`**

初始化MGS

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 回调函数 |
| `gameID` | `string` | 发给MGS的gameId |

#### Returns

`void`

___

### invokeMGSConfig

▸ **invokeMGSConfig**(`resp`): `void`

**`Description`**

用于获取MGS相关配置信息的接口。该接口需要support

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |

#### Returns

`void`

___

### isFriend

▸ **isFriend**(`resp`, `friendOpenId`): `void`

**`Description`**

若需要检测玩家是否好友关系，可通过调用isFriend接口进行查看

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `friendOpenId` | `string` | 要确定的好友的Id |

#### Returns

`void`

___

### isSupported

▸ **isSupported**(): `boolean`

**`Description`**

获取当前环境是否支持MGS功能

**`Effect`**

调用端生效

#### Returns

`boolean`

当前环境是否支持MGS功能

___

### joinAudio

▸ **joinAudio**(`resp`): `void`

**`Description`**

游戏方可调用joinAudio加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |

#### Returns

`void`

___

### joinRoom

▸ **joinRoom**(`resp`, `roomId`): `void`

**`Description`**

游戏方在玩家加入某个房间后，需要通过调用joinRoom进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 要加入的房间Id |

#### Returns

`void`

___

### leaveRoom

▸ **leaveRoom**(`resp`, `roomId`): `void`

**`Description`**

游戏方在玩家离开房间前，需要调用leaveRoom进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `roomId` | `string` | 要离开的房间的Id |

#### Returns

`void`

___

### queryPlayerAction

▸ **queryPlayerAction**(`resp`): `void`

**`Description`**

向233发起queryPlayerAction并获得回调，查询玩家进入游戏时的操作方式

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |

#### Returns

`void`

___

### registerMGSChatMessageEvent

▸ **registerMGSChatMessageEvent**(`callback`): `void`

**`Description`**

注册聊天回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 有消息时的触发函数 |

#### Returns

`void`

___

### registerMGSEvent

▸ **registerMGSEvent**(`eventType`, `callback`): `void`

**`Description`**

注册MGS事件的回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | 需要注册的事件 |
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 需要执行的回调函数 |

#### Returns

`void`

___

### registerMGSEventListener

▸ **registerMGSEventListener**(`eventType`): `void`

**`Description`**

注册MGS事件监听器

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventType` | `string` | 需要注册到233的事件类型 |

#### Returns

`void`

___

### reportLogInfo

▸ **reportLogInfo**(`eventName`, `eventDesc`, `jsonData`): `void`

**`Description`**

游戏方调用reportLogInfo接口上报运营所需的埋点数据

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效，数据需要时json格式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名称 |
| `eventDesc` | `string` | 事件描述 |
| `jsonData` | `string` | 发送的json数据 |

#### Returns

`void`

___

### requestSaveImage

▸ **requestSaveImage**(`resp`, `mgsData`): `void`

**`Description`**

向233发起imageModify并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的图片Url地址 |

#### Returns

`void`

___

### requestSavePortrait

▸ **requestSavePortrait**(`resp`, `mgsData`): `void`

**`Description`**

向233发起editProfile并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的mgs数据 |

#### Returns

`void`

___

### requestShareScreenShot

▸ **requestShareScreenShot**(`resp`, `mgsData`): `void`

**`Description`**

向233发起shareScreenshot并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `mgsData` | `string` | 要保存的图片Url地址 |

#### Returns

`void`

___

### showExitGameDialog

▸ **showExitGameDialog**(`resp`): `void`

**`Description`**

游戏方可调用showExitGameDialog来显示退出游戏确认框

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |

#### Returns

`void`

___

### showFloatingLayer

▸ **showFloatingLayer**(`resp`, `tab`): `void`

**`Description`**

向233发起showFloatingLayer来展开悬浮层的内容，可展开聊天/好友功能

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `tab` | `number` | 悬浮层功能位置 取值(0: 聊天 1: 好友) |

#### Returns

`void`

___

### showUserProfile

▸ **showUserProfile**(`resp`, `openId`): `void`

**`Description`**

若需要查看233玩家的资料信息,可通过调用showUserProfile进行查看,SDK会弹出资料卡片弹窗

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233的回调 |
| `openId` | `string` | 要显示的用户的openId |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`RoomService`](Service.RoomService.md)

**`Description`**

获取API实例进行调用

**`Effect`**

获取API实例进行调用

**`Precautions`**

只在由233拉起生效

**`Example`**

使用示例:获取实例并调用函数
```ts
// 通过实例调用函数获取玩家昵称
Service.RoomService.getInstance().getNickName();
```

#### Returns

[`RoomService`](Service.RoomService.md)

返回API实例用以调用相关功能函数
