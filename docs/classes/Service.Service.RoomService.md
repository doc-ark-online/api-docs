[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / RoomService

# Class: RoomService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).RoomService

**`Author`**

zifei.wu, huipeng.jia

**`Instance`**

**`Description`**

MGS以及玩家信息、数据、头像等相关API

**`Network Status`**

usage: 客户端

## Table of contents

### Constructors

- [constructor](Service.Service.RoomService.md#constructor)

### Methods

- [addFriend](Service.Service.RoomService.md#addfriend)
- [createAndJoinRoom](Service.Service.RoomService.md#createandjoinroom)
- [destroySDK](Service.Service.RoomService.md#destroysdk)
- [dispatchMGSChatMessage](Service.Service.RoomService.md#dispatchmgschatmessage)
- [getCurrentEnvironment](Service.Service.RoomService.md#getcurrentenvironment)
- [getMGSRoomId](Service.Service.RoomService.md#getmgsroomid)
- [getRoomId](Service.Service.RoomService.md#getroomid)
- [initAndLoginMGS](Service.Service.RoomService.md#initandloginmgs)
- [invokeMGSConfig](Service.Service.RoomService.md#invokemgsconfig)
- [isFriendShip](Service.Service.RoomService.md#isfriendship)
- [isSupported](Service.Service.RoomService.md#issupported)
- [joinAudio](Service.Service.RoomService.md#joinaudio)
- [joinRoom](Service.Service.RoomService.md#joinroom)
- [leaveRoom](Service.Service.RoomService.md#leaveroom)
- [queryPlayerAction](Service.Service.RoomService.md#queryplayeraction)
- [registerMGSChatMessageEvent](Service.Service.RoomService.md#registermgschatmessageevent)
- [registerMGSEvent](Service.Service.RoomService.md#registermgsevent)
- [registerMGSEventListener](Service.Service.RoomService.md#registermgseventlistener)
- [reportLogInfo](Service.Service.RoomService.md#reportloginfo)
- [requestSaveImage](Service.Service.RoomService.md#requestsaveimage)
- [requestSavePortrait](Service.Service.RoomService.md#requestsaveportrait)
- [requestShareScreenShot](Service.Service.RoomService.md#requestsharescreenshot)
- [showExitGameDialog](Service.Service.RoomService.md#showexitgamedialog)
- [showFloatingLayer](Service.Service.RoomService.md#showfloatinglayer)
- [showUserProfile](Service.Service.RoomService.md#showuserprofile)
- [getInstance](Service.Service.RoomService.md#getinstance)

## Constructors

### constructor

• **new RoomService**()

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `friendOpenId` | `string` | usage:要加的好友Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:966

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `roomId` | `string` | usage:房间Id |
| `roomName` | `string` | usage:房间名称 |
| `roomLimit` | `number` | usage:房间的人数限制 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:937

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

#### Defined in

Service/index.d.ts:1057

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
| `chatMessage` | `string` | usage:要分发的聊天消息 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1086

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:获取到的当前的环境 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1051

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

#### Defined in

Service/index.d.ts:912

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

#### Defined in

Service/index.d.ts:905

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:回调函数 |
| `gameID` | `string` | usage:发给MGS的gameId |

#### Returns

`void`

#### Defined in

Service/index.d.ts:920

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1035

___

### isFriendShip

▸ **isFriendShip**(`resp`, `friendOpenId`): `void`

**`Description`**

若需要检测玩家是否好友关系，可通过调用isFriendShip接口进行查看

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `friendOpenId` | `string` | usage:要确定的好友的Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:982

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

#### Defined in

Service/index.d.ts:898

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1004

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `roomId` | `string` | usage:要加入的房间Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:950

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `roomId` | `string` | usage:要离开的房间的Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:958

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:927

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
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | usage:有消息时的触发函数 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1079

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
| `eventType` | `string` | usage:需要注册的事件 |
| `callback` | [`MGSEvent`](../modules/Service.Service.md#mgsevent) | usage:需要执行的回调函数 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1072

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
| `eventType` | `string` | usage:需要注册到233的事件类型 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1064

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
| `eventName` | `string` | usage:事件名称 |
| `eventDesc` | `string` | usage:事件描述 |
| `jsonData` | `string` | usage:发送的json数据 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1044

___

### requestSaveImage

▸ **requestSaveImage**(`resp`, `mgsdata`): `void`

**`Description`**

向233发起imageModify并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `mgsdata` | `string` | usage:要保存的图片Url地址 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1020

___

### requestSavePortrait

▸ **requestSavePortrait**(`resp`, `mgsdata`): `void`

**`Description`**

向233发起editProfile并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `mgsdata` | `string` | usage:要保存的mgs数据 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1012

___

### requestShareScreenShot

▸ **requestShareScreenShot**(`resp`, `mgsdata`): `void`

**`Description`**

向233发起shareScreenshot并获得回调

**`Effect`**

调用端生效

**`Precautions`**

只在移动端由233拉起生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `mgsdata` | `string` | usage:要保存的图片Url地址 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1028

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:997

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `tab` | `number` | usage:悬浮层功能位置 取值(0: 聊天 1: 好友) |

#### Returns

`void`

#### Defined in

Service/index.d.ts:990

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
| `resp` | [`MGSResponse`](../modules/Service.Service.md#mgsresponse) | usage:233的回调 |
| `openId` | `string` | usage:要显示的用户的openId |

#### Returns

`void`

#### Defined in

Service/index.d.ts:974

___

### getInstance

▸ `Static` **getInstance**(): [`RoomService`](Service.Service.RoomService.md)

**`Description`**

获取API实例进行调用

**`Effect`**

获取API实例进行调用

**`Precautions`**

只在由233拉起生效

**`Example`**

使用示例:获取实例并调用函数
```
通过实例调用函数获取玩家昵称
Service.RoomService.getInstance().getNickName();
```

#### Returns

[`RoomService`](Service.Service.RoomService.md)

返回API实例用以调用相关功能函数

#### Defined in

Service/index.d.ts:892
