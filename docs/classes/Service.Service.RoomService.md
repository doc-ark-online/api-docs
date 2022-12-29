[Service](../modules/Service.Service.md) / RoomService

# RoomService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

MGS 以及玩家信息、数据、头像等相关 API

## Table of contents

| Methods                                                                                                                                                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addFriend](Service.Service.RoomService.md#addfriend)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向 233 发起 addFriend 并获得回调                                                                                                 |
| **[createAndJoinRoom](Service.Service.RoomService.md#createandjoinroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`, `string`, `number`): `void` <br> 游戏方创建好房间后可通过调用 createAndJoinRoom 进行数据同步，也可通过 MGS 服务端进行数据同步 |
| **[destroySDK](Service.Service.RoomService.md#destroysdk)**(): `void` <br> SDK 提供销毁方法，在游戏退出后可以销毁 SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作                                                                                               |
| **[dispatchMGSChatMessage](Service.Service.RoomService.md#dispatchmgschatmessage)**(`string`): `void` <br> 分发 MGS 聊天消息                                                                                                                                                  |
| **[getCurrentEnvironment](Service.Service.RoomService.md#getcurrentenvironment)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 获取当前的环境                                                                                                     |
| **[getMGSRoomId](Service.Service.RoomService.md#getmgsroomid)**(): `string` <br> 获取 MGS 平台的 RoomId                                                                                                                                                                       |
| **[getRoomId](Service.Service.RoomService.md#getroomid)**(): `string` <br> 获取 MW 的 RoomMgr 分配的 RoomId                                                                                                                                                                   |
| **[initAndLoginMGS](Service.Service.RoomService.md#initandloginmgs)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 初始化 MGS                                                                                                           |
| **[invokeMGSConfig](Service.Service.RoomService.md#invokemgsconfig)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 用于获取 MGS 相关配置信息的接口。该接口需要 support                                                                            |
| **[isFriend](Service.Service.RoomService.md#isfriend)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 若需要检测玩家是否好友关系，可通过调用 isFriend 接口进行查看                                                                       |
| **[isSupported](Service.Service.RoomService.md#issupported)**(): `boolean` <br> 获取当前环境是否支持 MGS 功能                                                                                                                                                                 |
| **[joinAudio](Service.Service.RoomService.md#joinaudio)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 游戏方可调用 joinAudio 加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）                                              |
| **[joinRoom](Service.Service.RoomService.md#joinroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 游戏方在玩家加入某个房间后，需要通过调用 joinRoom 进行数据同步                                                                     |
| **[leaveRoom](Service.Service.RoomService.md#leaveroom)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 游戏方在玩家离开房间前，需要调用 leaveRoom 进行数据同步                                                                          |
| **[queryPlayerAction](Service.Service.RoomService.md#queryplayeraction)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 向 233 发起 queryPlayerAction 并获得回调，查询玩家进入游戏时的操作方式                                                     |
| **[registerMGSChatMessageEvent](Service.Service.RoomService.md#registermgschatmessageevent)**([`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册聊天回调                                                                                                 |
| **[registerMGSEvent](Service.Service.RoomService.md#registermgsevent)**(`string`, [`MGSEvent`](../modules/Service.Service.md#mgsevent)): `void` <br> 注册 MGS 事件的回调                                                                                                      |
| **[registerMGSEventListener](Service.Service.RoomService.md#registermgseventlistener)**(`string`): `void` <br> 注册 MGS 事件监听器                                                                                                                                            |
| **[reportLogInfo](Service.Service.RoomService.md#reportloginfo)**(`string`, `string`, `string`): `void` <br> 游戏方调用 reportLogInfo 接口上报运营所需的埋点数据                                                                                                              |
| **[requestSaveImage](Service.Service.RoomService.md#requestsaveimage)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向 233 发起 imageModify 并获得回调                                                                                 |
| **[requestSavePortrait](Service.Service.RoomService.md#requestsaveportrait)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向 233 发起 editProfile 并获得回调                                                                           |
| **[requestShareScreenShot](Service.Service.RoomService.md#requestsharescreenshot)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 向 233 发起 shareScreenshot 并获得回调                                                                 |
| **[showExitGameDialog](Service.Service.RoomService.md#showexitgamedialog)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse)): `void` <br> 游戏方可调用 showExitGameDialog 来显示退出游戏确认框                                                                     |
| **[showFloatingLayer](Service.Service.RoomService.md#showfloatinglayer)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `number`): `void` <br> 向 233 发起 showFloatingLayer 来展开悬浮层的内容，可展开聊天/好友功能                                            |
| **[showUserProfile](Service.Service.RoomService.md#showuserprofile)**([`MGSResponse`](../modules/Service.Service.md#mgsresponse), `string`): `void` <br> 若需要查看 233 玩家的资料信息,可通过调用 showUserProfile 进行查看,SDK 会弹出资料卡片弹窗                             |
| **[getInstance](Service.Service.RoomService.md#getinstance)**(): [`RoomService`](Service.Service.RoomService.md) <br> 获取 API 实例进行调用                                                                                                                                   |

## Methods

### addFriend

▸ **addFriend**(`resp`, `friendOpenId`): `void`

**`Description`**

向 233 发起 addFriend 并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name           | Type                                                       | Description   |
| :------------- | :--------------------------------------------------------- | :------------ |
| `resp`         | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调    |
| `friendOpenId` | `string`                                                   | 要加的好友 Id |

#### Returns

`void`

---

### createAndJoinRoom

▸ **createAndJoinRoom**(`resp`, `roomId`, `roomName`, `roomLimit`): `void`

**`Description`**

游戏方创建好房间后可通过调用 createAndJoinRoom 进行数据同步，也可通过 MGS 服务端进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name        | Type                                                       | Description    |
| :---------- | :--------------------------------------------------------- | :------------- |
| `resp`      | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调     |
| `roomId`    | `string`                                                   | 房间 Id        |
| `roomName`  | `string`                                                   | 房间名称       |
| `roomLimit` | `number`                                                   | 房间的人数限制 |

#### Returns

`void`

---

### destroySDK

▸ **destroySDK**(): `void`

**`Description`**

SDK 提供销毁方法，在游戏退出后可以销毁 SDK，释放相应的内存。下次再调用其他接口需要再次进行初始化操作

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Returns

`void`

---

### dispatchMGSChatMessage

▸ **dispatchMGSChatMessage**(`chatMessage`): `void`

**`Description`**

分发 MGS 聊天消息

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name          | Type     | Description      |
| :------------ | :------- | :--------------- |
| `chatMessage` | `string` | 要分发的聊天消息 |

#### Returns

`void`

---

### getCurrentEnvironment

▸ **getCurrentEnvironment**(`resp`): `void`

**`Description`**

获取当前的环境

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description        |
| :----- | :--------------------------------------------------------- | :----------------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 获取到的当前的环境 |

#### Returns

`void`

---

### getMGSRoomId

▸ **getMGSRoomId**(): `string`

**`Description`**

获取 MGS 平台的 RoomId

**`Effect`**

调用端生效

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

MGS 平台的 RoomId

---

### getRoomId

▸ **getRoomId**(): `string`

**`Description`**

获取 MW 的 RoomMgr 分配的 RoomId

**`Effect`**

调用端生效

**`Precautions`**

只在由 233 拉起生效

#### Returns

`string`

MW 的 RoomMgr 分配的 RoomId

---

### initAndLoginMGS

▸ **initAndLoginMGS**(`resp`, `gameID`): `void`

**`Description`**

初始化 MGS

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name     | Type                                                       | Description        |
| :------- | :--------------------------------------------------------- | :----------------- |
| `resp`   | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 回调函数           |
| `gameID` | `string`                                                   | 发给 MGS 的 gameId |

#### Returns

`void`

---

### invokeMGSConfig

▸ **invokeMGSConfig**(`resp`): `void`

**`Description`**

用于获取 MGS 相关配置信息的接口。该接口需要 support

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description |
| :----- | :--------------------------------------------------------- | :---------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调  |

#### Returns

`void`

---

### isFriend

▸ **isFriend**(`resp`, `friendOpenId`): `void`

**`Description`**

若需要检测玩家是否好友关系，可通过调用 isFriend 接口进行查看

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name           | Type                                                       | Description       |
| :------------- | :--------------------------------------------------------- | :---------------- |
| `resp`         | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调        |
| `friendOpenId` | `string`                                                   | 要确定的好友的 Id |

#### Returns

`void`

---

### isSupported

▸ **isSupported**(): `boolean`

**`Description`**

获取当前环境是否支持 MGS 功能

**`Effect`**

调用端生效

#### Returns

`boolean`

当前环境是否支持 MGS 功能

---

### joinAudio

▸ **joinAudio**(`resp`): `void`

**`Description`**

游戏方可调用 joinAudio 加入语音频道，游戏用户可使用语音服务（可说话、可听到其他游戏用户声音）

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description |
| :----- | :--------------------------------------------------------- | :---------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调  |

#### Returns

`void`

---

### joinRoom

▸ **joinRoom**(`resp`, `roomId`): `void`

**`Description`**

游戏方在玩家加入某个房间后，需要通过调用 joinRoom 进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name     | Type                                                       | Description     |
| :------- | :--------------------------------------------------------- | :-------------- |
| `resp`   | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调      |
| `roomId` | `string`                                                   | 要加入的房间 Id |

#### Returns

`void`

---

### leaveRoom

▸ **leaveRoom**(`resp`, `roomId`): `void`

**`Description`**

游戏方在玩家离开房间前，需要调用 leaveRoom 进行数据同步

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name     | Type                                                       | Description       |
| :------- | :--------------------------------------------------------- | :---------------- |
| `resp`   | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调        |
| `roomId` | `string`                                                   | 要离开的房间的 Id |

#### Returns

`void`

---

### queryPlayerAction

▸ **queryPlayerAction**(`resp`): `void`

**`Description`**

向 233 发起 queryPlayerAction 并获得回调，查询玩家进入游戏时的操作方式

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description |
| :----- | :--------------------------------------------------------- | :---------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调  |

#### Returns

`void`

---

### registerMGSChatMessageEvent

▸ **registerMGSChatMessageEvent**(`callback`): `void`

**`Description`**

注册聊天回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name       | Type                                                 | Description        |
| :--------- | :--------------------------------------------------- | :----------------- |
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 有消息时的触发函数 |

#### Returns

`void`

---

### registerMGSEvent

▸ **registerMGSEvent**(`eventType`, `callback`): `void`

**`Description`**

注册 MGS 事件的回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name        | Type                                                 | Description        |
| :---------- | :--------------------------------------------------- | :----------------- |
| `eventType` | `string`                                             | 需要注册的事件     |
| `callback`  | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | 需要执行的回调函数 |

#### Returns

`void`

---

### registerMGSEventListener

▸ **registerMGSEventListener**(`eventType`): `void`

**`Description`**

注册 MGS 事件监听器

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name        | Type     | Description               |
| :---------- | :------- | :------------------------ |
| `eventType` | `string` | 需要注册到 233 的事件类型 |

#### Returns

`void`

---

### reportLogInfo

▸ **reportLogInfo**(`eventName`, `eventDesc`, `jsonData`): `void`

**`Description`**

游戏方调用 reportLogInfo 接口上报运营所需的埋点数据

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效，数据需要时 json 格式

#### Parameters

| Name        | Type     | Description      |
| :---------- | :------- | :--------------- |
| `eventName` | `string` | 事件名称         |
| `eventDesc` | `string` | 事件描述         |
| `jsonData`  | `string` | 发送的 json 数据 |

#### Returns

`void`

---

### requestSaveImage

▸ **requestSaveImage**(`resp`, `mgsData`): `void`

**`Description`**

向 233 发起 imageModify 并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name      | Type                                                       | Description           |
| :-------- | :--------------------------------------------------------- | :-------------------- |
| `resp`    | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调            |
| `mgsData` | `string`                                                   | 要保存的图片 Url 地址 |

#### Returns

`void`

---

### requestSavePortrait

▸ **requestSavePortrait**(`resp`, `mgsData`): `void`

**`Description`**

向 233 发起 editProfile 并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name      | Type                                                       | Description       |
| :-------- | :--------------------------------------------------------- | :---------------- |
| `resp`    | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调        |
| `mgsData` | `string`                                                   | 要保存的 mgs 数据 |

#### Returns

`void`

---

### requestShareScreenShot

▸ **requestShareScreenShot**(`resp`, `mgsData`): `void`

**`Description`**

向 233 发起 shareScreenshot 并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name      | Type                                                       | Description           |
| :-------- | :--------------------------------------------------------- | :-------------------- |
| `resp`    | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调            |
| `mgsData` | `string`                                                   | 要保存的图片 Url 地址 |

#### Returns

`void`

---

### showExitGameDialog

▸ **showExitGameDialog**(`resp`): `void`

**`Description`**

游戏方可调用 showExitGameDialog 来显示退出游戏确认框

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description |
| :----- | :--------------------------------------------------------- | :---------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调  |

#### Returns

`void`

---

### showFloatingLayer

▸ **showFloatingLayer**(`resp`, `tab`): `void`

**`Description`**

向 233 发起 showFloatingLayer 来展开悬浮层的内容，可展开聊天/好友功能

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name   | Type                                                       | Description                          |
| :----- | :--------------------------------------------------------- | :----------------------------------- |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调                           |
| `tab`  | `number`                                                   | 悬浮层功能位置 取值(0: 聊天 1: 好友) |

#### Returns

`void`

---

### showUserProfile

▸ **showUserProfile**(`resp`, `openId`): `void`

**`Description`**

若需要查看 233 玩家的资料信息,可通过调用 showUserProfile 进行查看,SDK 会弹出资料卡片弹窗

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由 233 拉起生效

#### Parameters

| Name     | Type                                                       | Description           |
| :------- | :--------------------------------------------------------- | :-------------------- |
| `resp`   | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | 233 的回调            |
| `openId` | `string`                                                   | 要显示的用户的 openId |

#### Returns

`void`

---

### getInstance

▸ `Static` **getInstance**(): [`RoomService`](Service.Service.RoomService.md)

**`Description`**

获取 API 实例进行调用

**`Effect`**

获取 API 实例进行调用

**`Precautions`**

只在由 233 拉起生效

**`Example`**

使用示例:获取实例并调用函数

```ts
// 通过实例调用函数获取玩家昵称
Service.RoomService.getInstance().getNickName();
```

#### Returns

[`RoomService`](Service.Service.RoomService.md)

返回 API 实例用以调用相关功能函数
