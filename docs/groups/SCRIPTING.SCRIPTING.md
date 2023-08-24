SCRIPTING

# SCRIPTING <Badge type="tip" text="Groups" /> <Score text="SCRIPTING" />

## Table of contents
| Classes |
| :-----|
| [Event](../classes/mw.Event.md) <br> 事件 |
| [EventListener](../classes/mw.EventListener.md) <br> 事件监听器 |
| [Script](../classes/mw.Script.md) <br> 脚本管理 |


| Enums |
| :-----|
| [DispatchEventResult](../enums/mw.DispatchEventResult.md) <br> 事件发送的结果 |
| [MessageChannelReceiver](../enums/mw.MessageChannelReceiver.md) <br> 枚举各个通道的使用与接收方 |


| Modules Functions |
| :-----|
| **[Property](SCRIPTING.SCRIPTING.md#property)**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void` <br> 属性支持同步|
| **[RemoteFunction](SCRIPTING.SCRIPTING.md#remotefunction)**(`...options`): (`target`: `unknown`, `propertyKey`: `string`) => `void` <br> 函数支持Rpc调用|
| **[Serializable](SCRIPTING.SCRIPTING.md#serializable)**<`T`: extends `ConstructorType`\>(`type`: `T`): `T`: extends `ConstructorType` <br> 类型支持属性同步|


| Modules Type Aliases |
| :-----|
| **[LocalUGCGameInfo](SCRIPTING.SCRIPTING.md#localugcgameinfo)**: `Object` <br> 本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。|
| **[PublishedUGCGameInfo](SCRIPTING.SCRIPTING.md#publishedugcgameinfo)**: `Object` <br> 发布成功的UGC消费态游戏信息|
| **[UGCTemplateInfo](SCRIPTING.SCRIPTING.md#ugctemplateinfo)**: `Object` <br> UGC模板信息|


| Modules Variables |
| :-----|
| **[Client](SCRIPTING.SCRIPTING.md#client)**: `FunctionOption` <br> 客户端|
| **[Multicast](SCRIPTING.SCRIPTING.md#multicast)**: `FunctionOption` <br> 多播|
| **[Server](SCRIPTING.SCRIPTING.md#server)**: `FunctionOption` <br> 服务端|


## Modules Functions


___

### Property <Score text="Property" /> 

• **Property**(`option?`): (`target`: `unknown`, `propertyKey`: `string`) => `void` 

属性支持同步


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option?` | `IPropertyOptions` | 配置 default:配置 |

#### Returns

`fn`

自定义属性

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`
___

### RemoteFunction <Score text="RemoteFunction" /> 

• **RemoteFunction**(`...options`): (`target`: `unknown`, `propertyKey`: `string`) => `void` 

函数支持Rpc调用


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...options` | `FunctionOption`[] | Rpc调用方式 |

#### Returns

`fn`

自定义函数

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `propertyKey` | `string` |

##### Returns

`void`
___

### Serializable <Score text="Serializable" /> 

• **Serializable**<`T`\>(`type`): `T` 

类型支持属性同步


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ConstructorType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | 自定义类 |

#### Returns

`T`

自定义类
## Modules Type Aliases


___

### LocalUGCGameInfo <Score text="LocalUGCGameInfo" /> 

Ƭ **LocalUGCGameInfo**: `Object`

本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | UGC消费态游戏的MW侧gameId，"U_xxx" 格式 |
| `parentId` | `string` | 父模板游戏的内容库gameId |
| `path` | `string` | 本地工程路径，不需要做拼接，直接传给其他接口即可 |
___

### PublishedUGCGameInfo <Score text="PublishedUGCGameInfo" /> 

Ƭ **PublishedUGCGameInfo**: `Object`

发布成功的UGC消费态游戏信息

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | `boolean` | 接口data为空/网络请求失败时，end会返回true |
| `games` | [`{ `banner`: `string` ; `id`: `string` ; `likeIt`: `boolean` ; `loveQuantity`: `number` ; `packageName`: `string` ; `ugcGameName`: `string`  }`] | 接口data为空/网络请求失败时，games会返回空列表 |
___

### UGCTemplateInfo <Score text="UGCTemplateInfo" /> 

Ƭ **UGCTemplateInfo**: `Object`

UGC模板信息

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileUrl` | `{ `assetDataListUrl`: `string` ; `zipUrl`: `string`  }` | 下载链接 |
| `fileUrl.assetDataListUrl` | `string` | 模板assetDataList文件下载链接 |
| `fileUrl.zipUrl` | `string` | 模板工程下载链接 |
| `gameIdentity` | `string` | MW侧gameId |
| `gid` | `string` | 内容库gameId |
| `icon` | `string` | 模板Icon下载链接 |
| `id` | `number` | 分页用的id |
| `name` | `string` | 模板名称 |
| `packageName` | `string` | 模板包名 |
| `version` | `string` | 模板版本号 |
## Modules Variables


## Variables

### Client <Score text="Client" /> 

• `Const` **Client**: `FunctionOption` 

客户端

___

### Multicast <Score text="Multicast" /> 

• `Const` **Multicast**: `FunctionOption` 

多播

___

### Server <Score text="Server" /> 

• `Const` **Server**: `FunctionOption` 

服务端
