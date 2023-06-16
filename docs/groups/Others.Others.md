Others

# Others <Badge type="tip" text="Groups" /> <Score text="Others" />

## Table of contents
| Classes |
| :-----|
| [Sound](../classes/mw.Sound.md) <br> 音效组件 |


| Modules Functions |
| :-----|
| **[addLikeContent](Others.Others.md#addlikecontent)**(`UGCID`: `string`, `contentId`: `string`, `contentType`: `number`): `void` <br> 点赞内容|
| **[addMessage](Others.Others.md#addmessage)**(`UGCID`: `string`, `Content`: `string`): `void` <br> 添加留言|
| **[addReplyMessage](Others.Others.md#addreplymessage)**(`UGCID`: `string`, `CommentID`: `string`, `Content`: `string`): `void` <br> 添加回复的消息|
| **[deleteLikeContent](Others.Others.md#deletelikecontent)**(`UGCID`: `string`, `contentId`: `string`, `contentType`: `number`): `void` <br> 取消点赞内容|
| **[deleteMessage](Others.Others.md#deletemessage)**(`UGCID`: `string`, `CommentID`: `string`): `void` <br> 删除留言板数据|
| **[queryGameOwnerShip](Others.Others.md#querygameownership)**(`UGCID`: `string`): `Promise`<`boolean`\> <br> 是否是自己发布的游戏|
| **[queryMessageBoard](Others.Others.md#querymessageboard)**(`Delegate`: [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询留言板数据|
| **[queryReplyMessage](Others.Others.md#queryreplymessage)**(`Delegate`: [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `CommentID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询回复的数据|
| **[queryViewRecord](Others.Others.md#queryviewrecord)**(`Delegate`: [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询浏览的记录|
| **[saveViewRecord](Others.Others.md#saveviewrecord)**(`UGCID`: `string`): `void` <br> 保存留言|


## Modules Functions


___

### addLikeContent <Score text="addLikeContent" /> 

• **addLikeContent**(`UGCID`, `contentId`, `contentType`): `void` <Badge type="tip" text="client" />

点赞内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` |  UGC唯一标识 |
| `contentId` | `string` | 内容ID |
| `contentType` | `number` | 内容类型:1游戏; 2用户; 3樱校; 4ugc |

___

### addMessage <Score text="addMessage" /> 

• **addMessage**(`UGCID`, `Content`): `void` <Badge type="tip" text="client" />

添加留言


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |
| `Content` | `string` | 留言的内容 |

___

### addReplyMessage <Score text="addReplyMessage" /> 

• **addReplyMessage**(`UGCID`, `CommentID`, `Content`): `void` <Badge type="tip" text="client" />

添加回复的消息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |
| `CommentID` | `string` | 需要回复的会话ID |
| `Content` | `string` | 回复的内容 |

___

### deleteLikeContent <Score text="deleteLikeContent" /> 

• **deleteLikeContent**(`UGCID`, `contentId`, `contentType`): `void` <Badge type="tip" text="client" />

取消点赞内容


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` |  UGC唯一标识 |
| `contentId` | `string` | 内容ID |
| `contentType` | `number` | 内容类型:1游戏; 2用户; 3樱校; 4ugc |

___

### deleteMessage <Score text="deleteMessage" /> 

• **deleteMessage**(`UGCID`, `CommentID`): `void` <Badge type="tip" text="client" />

删除留言板数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |
| `CommentID` | `string` | 需要删除的留言ID |

___

### queryGameOwnerShip <Score text="queryGameOwnerShip" /> 

• **queryGameOwnerShip**(`UGCID`): `Promise`<`boolean`\> <Badge type="tip" text="client" />

是否是自己发布的游戏


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |

#### Returns

`Promise`<`boolean`\>

是否是自己发布的游戏
___

### queryMessageBoard <Score text="queryMessageBoard" /> 

• **queryMessageBoard**(`Delegate`, `UGCID`, `PageNum`, `PageSize`): `void` <Badge type="tip" text="client" />

查询留言板数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 代理返回留言板json数据 |
| `UGCID` | `string` | UGC唯一标识 |
| `PageNum` | `number` | 查询的页面数量 |
| `PageSize` | `number` | 查询的页面大小 |

___

### queryReplyMessage <Score text="queryReplyMessage" /> 

• **queryReplyMessage**(`Delegate`, `UGCID`, `CommentID`, `PageNum`, `PageSize`): `void` <Badge type="tip" text="client" />

查询回复的数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回http返回的json |
| `UGCID` | `string` | UGC唯一标识 |
| `CommentID` | `string` | 需要查询的会话ID |
| `PageNum` | `number` | 需要查询的页面数量 |
| `PageSize` | `number` | 需要查询的页面大小 |

___

### queryViewRecord <Score text="queryViewRecord" /> 

• **queryViewRecord**(`Delegate`, `UGCID`, `PageNum`, `PageSize`): `void` <Badge type="tip" text="client" />

查询浏览的记录


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回浏览记录的json |
| `UGCID` | `string` | UGC唯一标识 |
| `PageNum` | `number` | 查询的页面数量 |
| `PageSize` | `number` | 查询的页面大小 |

___

### saveViewRecord <Score text="saveViewRecord" /> 

• **saveViewRecord**(`UGCID`): `void` <Badge type="tip" text="client" />

保存留言


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |
