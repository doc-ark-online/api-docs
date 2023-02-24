[Scripiting](../groups/Scripiting.Scripiting.md) / UGCScripiting

# UGCService <Badge type="tip" text="Class" /> <Score text="UGCService" />

**`Groups`**

SCRIPITING

**`Instance`**

用户建造服务

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[createNewLocalGameFromTemplate](Service.UGCService.md#createnewlocalgamefromtemplate)**(`targetTemplateData`: `Record`<`string`, `unknown`\>): `Promise`<`Record`<`string`, `unknown`\>\> <br> 以指定模板创建本地工程，并获取工程路径|
| **[requestLocalUGCGameList](Service.UGCService.md#requestlocalugcgamelist)**(): `Promise`<`Record`<`string`, `unknown`\>[]\> <br> 获取当前手机本地的UGC工程列表|
| **[requestPublishedUGCGameList](Service.UGCService.md#requestpublishedugcgamelist)**(`lastId?`: `string`): `Promise`<`Record`<`string`, `unknown`\>\> <br> 获取当前玩家已发布的UGC游戏列表|
| **[requestUGCTemplateList](Service.UGCService.md#requestugctemplatelist)**(`lastId?`: `string`): `Promise`<`Record`<`string`, `unknown`\>[]\> <br> 获取模板列表，可以分页方式查询|
| **[getInstance](Service.UGCService.md#getinstance)**(): [`UGCService`](Service.UGCService.md) <br> 获取用户建造管理器全局实例|

## Methods

### createNewLocalGameFromTemplate <Score text="createNewLocalGameFromTemplate" /> 

• **createNewLocalGameFromTemplate**(`targetTemplateData`): `Promise`<`Record`<`string`, `unknown`\>\> <Badge type="tip" text="client" />

以指定模板创建本地工程，并获取工程路径


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: 模板信息包含如下字段:
```ts
path: "data/data/local",
parentId: "1564654", // 父模板id，当编辑本地工程时，需要用该id而非gameId。
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetTemplateData` | `Record`<`string`, `unknown`\> |  想要创建的模板游戏信息 |

#### Returns

`Promise`<`Record`<`string`, `unknown`\>\>

复制好的本地工程信息

___

### requestLocalUGCGameList <Score text="requestLocalUGCGameList" /> 

• **requestLocalUGCGameList**(): `Promise`<`Record`<`string`, `unknown`\>[]\> <Badge type="tip" text="client" />

获取当前手机本地的UGC工程列表


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖

:::

使用示例: 模板信息包含如下字段:
```ts
gameId: "T_33567fc94226c80922af3faf366fe4d1093f6a3c", // 游戏id
path: "data/data/local",
parentId: "1564654", // 父模板id，当编辑本地工程时，需要用该id而非gameId。
```

#### Returns

`Promise`<`Record`<`string`, `unknown`\>[]\>

当前手机本地的UGC工程列表。只列出来发布过的游戏，未发布过的工程用不到

___

### requestPublishedUGCGameList <Score text="requestPublishedUGCGameList" /> 

• **requestPublishedUGCGameList**(`lastId?`): `Promise`<`Record`<`string`, `unknown`\>\> <Badge type="tip" text="client" />

获取当前玩家已发布的UGC游戏列表


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: 模板信息包含如下字段:
```ts
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
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lastId?` | `string` |  上一页的最后一个id, 如果是第一页传null。 default: null |

#### Returns

`Promise`<`Record`<`string`, `unknown`\>\>

玩家已发布的UGC游戏列表，两个字段：end-表示是否最后一页；games-游戏信息数组

___

### requestUGCTemplateList <Score text="requestUGCTemplateList" /> 

• **requestUGCTemplateList**(`lastId?`): `Promise`<`Record`<`string`, `unknown`\>[]\> <Badge type="tip" text="client" />

获取模板列表，可以分页方式查询


::: warning Precautions

1. 只在233内使用时生效
2. 与[ requestUGCTemplateList ][ requestPublishedUGCGameList ]
[ requestLocalUGCGameList ][ requestCreateNewLocalGameFromTemplate ]互斥。
在上一次调用收到回调前交叉调用或者重复调用，只有最后一次调用能产生回调，之前的被覆盖。

:::

使用示例: 模板信息包含如下字段:
```ts
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

`Promise`<`Record`<`string`, `unknown`\>[]\>

模板列表，数组形式。

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`UGCService`](Service.UGCService.md) 

获取用户建造管理器全局实例


#### Returns

[`UGCService`](Service.UGCService.md)

用户建造管理器全局实例
