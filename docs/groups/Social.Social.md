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
| **[BoolResponse](Social.Social.md#boolresponse)**: (`success`: `boolean`) => `void` <br> 返回bool的回调|
| **[DownloadDataResponse](Social.Social.md#downloaddataresponse)**: () => `void` <br> 下载角色形象的回调，无参数|
| **[MGSEvent](Social.Social.md#mgsevent)**: (`jsonData`: `string`) => `void` <br> 收到MGS事件调用|
| **[MGSResponse](Social.Social.md#mgsresponse)**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void` <br> 收到233回复|
| **[OnRecvChatMessage](Social.Social.md#onrecvchatmessage)**: (`nCount`: `number`, `ChatContent`: `string`) => `void` <br> 接收聊天信息回调方法类型|
| **[OnViewLayoutSwitched](Social.Social.md#onviewlayoutswitched)**: (`newState`: `number`) => `void` <br> 233中窗口显示模式切换的消息格式|
| **[OnViewRefreshed](Social.Social.md#onviewrefreshed)**: () => `void` <br> 233中窗口刷新的消息格式|
| **[StringResponse](Social.Social.md#stringresponse)**: (`dataString`: `string`) => `void` <br> 返回string的回调|
| **[TeamMatchFailureInfo](Social.Social.md#teammatchfailureinfo)**: `Object` <br> 下载角色形象的回调消息格式|
| **[UploadDataResponse](Social.Social.md#uploaddataresponse)**: (`success`: `boolean`) => `void` <br> 下载角色形象的回调消息格式|
| **[VoidResponse](Social.Social.md#voidresponse)**: () => `void` <br> 返回无参数的回调|
| **[downloadCharacterDataStringCallback](Social.Social.md#downloadcharacterdatastringcallback)**: (`dataString`: `string`) => `void` <br> 下载平台数据回调|


## Type Aliases

### BoolResponse <Score text="BoolResponse" /> 

Ƭ **BoolResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

返回bool的回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `success` | `boolean` |

##### Returns

`void`
___

### DownloadDataResponse <Score text="DownloadDataResponse" /> 

Ƭ **DownloadDataResponse**: () => `void`

#### Type declaration

• (): `void`

下载角色形象的回调，无参数

**`Groups`**

SOCIAL

##### Returns

`void`
___

### MGSEvent <Score text="MGSEvent" /> 

Ƭ **MGSEvent**: (`jsonData`: `string`) => `void`

#### Type declaration

• (`jsonData`): `void`

收到MGS事件调用

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `string` |

##### Returns

`void`
___

### MGSResponse <Score text="MGSResponse" /> 

Ƭ **MGSResponse**: (`isSuccess`: `boolean`, `jsonData`: `string`) => `void`

#### Type declaration

• (`isSuccess`, `jsonData`): `void`

收到233回复

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `isSuccess` | `boolean` |
| `jsonData` | `string` |

##### Returns

`void`
___

### OnRecvChatMessage <Score text="OnRecvChatMessage" /> 

Ƭ **OnRecvChatMessage**: (`nCount`: `number`, `ChatContent`: `string`) => `void`

#### Type declaration

• (`nCount`, `ChatContent`): `void`

接收聊天信息回调方法类型

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `nCount` | `number` |
| `ChatContent` | `string` |

##### Returns

`void`
___

### OnViewLayoutSwitched <Score text="OnViewLayoutSwitched" /> 

Ƭ **OnViewLayoutSwitched**: (`newState`: `number`) => `void`

#### Type declaration

• (`newState`): `void`

233中窗口显示模式切换的消息格式

**`Groups`**

SOCIAL

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newState` | `number` |  新的窗口模式。1 为“角色展示模式”，2 为“角色编辑模式” |

##### Returns

`void`
___

### OnViewRefreshed <Score text="OnViewRefreshed" /> 

Ƭ **OnViewRefreshed**: () => `void`

#### Type declaration

• (): `void`

233中窗口刷新的消息格式

**`Groups`**

SOCIAL

##### Returns

`void`
___

### StringResponse <Score text="StringResponse" /> 

Ƭ **StringResponse**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

返回string的回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns

`void`
___

### TeamMatchFailureInfo <Score text="TeamMatchFailureInfo" /> 

Ƭ **TeamMatchFailureInfo**: `Object`

组队跳游戏请求失败回调

**`Groups`**

SOCIAL

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `failedReason` | `string` | 失败原因 |
| `playerIds` | `number`[] | 组队玩家的playerId数组 |
___

### UploadDataResponse <Score text="UploadDataResponse" /> 

Ƭ **UploadDataResponse**: (`success`: `boolean`) => `void`

#### Type declaration

• (`success`): `void`

下载角色形象的回调消息格式

**`Groups`**

SOCIAL

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `success` | `boolean` |  上传是否成功 |

##### Returns

`void`
___

### VoidResponse <Score text="VoidResponse" /> 

Ƭ **VoidResponse**: () => `void`

#### Type declaration

• (): `void`

返回无参数的回调

**`Groups`**

SOCIAL

##### Returns

`void`
___

### downloadCharacterDataStringCallback <Score text="downloadCharacterDataStringCallback" /> 

Ƭ **downloadCharacterDataStringCallback**: (`dataString`: `string`) => `void`

#### Type declaration

• (`dataString`): `void`

下载平台数据回调

**`Groups`**

SOCIAL

##### Parameters

| Name | Type |
| :------ | :------ |
| `dataString` | `string` |

##### Returns
