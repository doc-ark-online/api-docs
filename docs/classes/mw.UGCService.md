[Scripting](../groups/Core.Scripting.md) / UGCService

# UGCService <Badge type="tip" text="Class" /> <Score text="UGCService" />

**`Instance`**

用户建造服务

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[createNewLocalGameFromTemplate](mw.UGCService.md#createnewlocalgamefromtemplate)**(`targetTemplateData`: [`UGCTemplateInfo`](../modules/Core.mw.md#ugctemplateinfo)): `Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)\> <br> 以指定模板创建本地工程，并获取工程路径|
| **[requestLocalUGCGameList](mw.UGCService.md#requestlocalugcgamelist)**(): `Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)[]\> <br> 获取当前手机本地的UGC工程列表|
| **[requestPublishedUGCGameList](mw.UGCService.md#requestpublishedugcgamelist)**(`lastId?`: `string`): `Promise`<[`PublishedUGCGameInfo`](../modules/Core.mw.md#publishedugcgameinfo)\> <br> 获取当前玩家已发布的UGC游戏列表|
| **[requestUGCTemplateList](mw.UGCService.md#requestugctemplatelist)**(`lastId?`: `string`): `Promise`<[`UGCTemplateInfo`](../modules/Core.mw.md#ugctemplateinfo)[]\> <br> 获取模板列表，可以分页方式查询|
| **[getInstance](mw.UGCService.md#getinstance)**(): [`UGCService`](mw.UGCService.md) <br> 获取用户建造管理器全局实例|

## Methods

### createNewLocalGameFromTemplate <Score text="createNewLocalGameFromTemplate" /> 

• **createNewLocalGameFromTemplate**(`targetTemplateData`): `Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)\> <Badge type="tip" text="client" />

以指定模板创建本地工程，并获取工程路径


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: UGC工程信息包含如下字段:
```json
{
     "gameId": "", // 新创建的工程该值为空
     "path": "data/data/local",
     "parentId": "1564654", // 父模板id，当编辑本地工程时，需要用该id而非gameId。
}
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetTemplateData` | [`UGCTemplateInfo`](../modules/Core.mw.md#ugctemplateinfo) |  想要创建的模板游戏信息 |

#### Returns

`Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)\>

复制好的本地工程信息

___

### requestLocalUGCGameList <Score text="requestLocalUGCGameList" /> 

• **requestLocalUGCGameList**(): `Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)[]\> <Badge type="tip" text="client" />

获取当前手机本地的UGC工程列表


::: warning Precautions

1. 本地工程目录列表, 只有发布过的工程才会在返回数据中
2. 加了过滤器, gameId=null, 或者 path=null, 都不返回
3. 只在233内使用时生效
4. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖

:::

使用示例: UGC工程信息包含如下字段:
```json
{
     "gameId": "T_33567fc94226c80922af3faf366fe4d1093f6a3c", // 游戏id
     "path": "data/data/local",
     "parentId": "1564654", // 父模板id，当编辑本地工程时，需要用该id而非gameId。
}
```

#### Returns

`Promise`<[`LocalUGCGameInfo`](../modules/Core.mw.md#localugcgameinfo)[]\>

当前手机本地的UGC工程列表。

___

### requestPublishedUGCGameList <Score text="requestPublishedUGCGameList" /> 

• **requestPublishedUGCGameList**(`lastId?`): `Promise`<[`PublishedUGCGameInfo`](../modules/Core.mw.md#publishedugcgameinfo)\> <Badge type="tip" text="client" />

获取当前玩家已发布的UGC游戏列表


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: UGC游戏列表信息包含如下字段:
```json
"end": true,
"games": [
    {
        "id": 4611686018427392183,
        "packageName": "15478c55.8da73da.274ffe90.b79d989c",
        "ugcGameName": "发布7",
        "banner": "https://ugc-game-qn.233leyuan.com/pre/meta-ugc-game-repository-center/dea54321cbae42c38167bb0baf4f135d.webp",
        "loveQuantity": 3,
        "likeIt": false
    }
]
```ts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lastId?` | `string` |  上一页的最后一个id, 如果是第一页传null。 default: null |

#### Returns

`Promise`<[`PublishedUGCGameInfo`](../modules/Core.mw.md#publishedugcgameinfo)\>

玩家已发布的UGC游戏列表，两个字段：end-表示是否最后一页；games-游戏信息数组

___

### requestUGCTemplateList <Score text="requestUGCTemplateList" /> 

• **requestUGCTemplateList**(`lastId?`): `Promise`<[`UGCTemplateInfo`](../modules/Core.mw.md#ugctemplateinfo)[]\> <Badge type="tip" text="client" />

获取模板列表，可以分页方式查询


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: 模板信息包含如下字段:
```json
{
    "id": 1001579,// 分页用的id
    "gid": "680244",
    "packageName": "com.metaverse.gwcobq.iaakm.nhzv.elyn",
    "gameIdentity": "T_33567fc94226c80922af3faf366fe4d1093f6a3c",
    "name": "game9",
    "version": "1.0.0",
    "icon": "https://game0.233xyx.com/game/check/temporaryStorage/62e9c40873f0c439b0c7581f7cb3d625.png",
    "fileUrl": {
        "zipUrl": "https://cdn-meta-verse-flow.233niu.cn/GameRelease/T_33567fc94226c80922af3faf366fe4d1093f6a3c/1.0.0/2546449/eed2577b17b523a7d2bf2b7b0527859f3d4200a1",
        "assetDataListUrl": "https://cdn-meta-verse-flow.233niu.cn/GameRelease/T_33567fc94226c80922af3faf366fe4d1093f6a3c/1.0.0/651230/a2ad7acac72722be0282c4109c58025d9751ddd1"
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lastId?` | `string` |  上一页的最后一个id, 如果是第一页传null。 default: null |

#### Returns

`Promise`<[`UGCTemplateInfo`](../modules/Core.mw.md#ugctemplateinfo)[]\>

模板列表，数组形式。

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`UGCService`](mw.UGCService.md) 

获取用户建造管理器全局实例


#### Returns

[`UGCService`](mw.UGCService.md)

用户建造管理器全局实例
