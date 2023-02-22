Social

# Social <Badge type="tip" text="Groups" /> <Score text="Social" />

## Table of contents
| Classes |
| :-----|
| [AccountService](../classes/Service.AccountService.md) <br> 用户账号信息管理相关服务 |
| [RoomService](../classes/Service.RoomService.md) <br> MGS以及玩家信息、数据、头像等相关API |
| [RouteService](../classes/Service.RouteService.md) <br> 游戏管理器 |


| Modules Type Aliases |
| :-----|
| **[OnRecvChatMessage](../modules/Gameplay.Gameplay.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[BoolResponse](../modules/Service.Service.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[DownloadDataResponse](../modules/Service.Service.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[MGSEvent](../modules/Service.Service.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](../modules/Service.Service.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnViewLayoutSwitched](../modules/Service.Service.md#onviewlayoutswitched)**: (`newState`: `number`) => `void` <br> 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](../modules/Service.Service.md#onviewrefreshed)**: () => `void` <br> 233中窗口刷新的消息格式|
| **[StringResponse](../modules/Service.Service.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TeamMatchFailureInfo](../modules/Service.Service.md#teammatchfailureinfo)**: `Object` <br> 下载角色形象的回调消息格式|
| **[UploadDataResponse](../modules/Service.Service.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VoidResponse](../modules/Service.Service.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](../modules/Service.Service.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|

