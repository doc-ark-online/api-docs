Scripting

# Scripting <Badge type="tip" text="Groups" /> <Score text="Scripting" />

## Table of contents
| Classes |
| :-----|
| [Event](../classes/mw.Event.md) <br> 事件 |
| [EventListener](../classes/mw.EventListener.md) <br> 事件监听器 |


| Enums |
| :-----|
| [DispatchEventResult](../enums/mw.DispatchEventResult.md) <br> 事件发送的结果 |
| [GizmoCoordinateType](../enums/mw.GizmoCoordinateType.md) <br> gizmo坐标轴类型 |
| [GizmoModeType](../enums/mw.GizmoModeType.md) <br> gizmo模式 |
| [GizmoSpaceType](../enums/mw.GizmoSpaceType.md) <br> gizmo空间 |
| [MessageChannelReceiver](../enums/mw.MessageChannelReceiver.md) <br> 枚举各个通道的使用与接收方 |
| [ReleaseStatus](../enums/mw.ReleaseStatus.md) <br> UGC 发布的状态 |
| [SelectTapType](../enums/mw.SelectTapType.md) <br> UGC 选中的单选或者多选 |


| Modules Functions |
| :-----|
| **[asyncCaptureAvatar](Scripting.Scripting.md#asynccaptureavatar)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`): `Promise`<`string`\> <br> 异步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[asyncGetQualityGameList](Scripting.Scripting.md#asyncgetqualitygamelist)**(`resourceId`: `number`, `pageIndex`: `number`): `Promise`<`string`\> <br> 获取优质作品列表|
| **[asyncGetReleaseGameData](Scripting.Scripting.md#asyncgetreleasegamedata)**(`gameId`: `string`, `version?`: `string`): `Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\> <br> 通过指定的消费态游戏ID和版本号获取已发布的游戏数据|
| **[asyncGetResourceList](Scripting.Scripting.md#asyncgetresourcelist)**(`classification`: `number`, `lastID`: `number`, `pageSize`: `number`): `Promise`<`string`\> <br> 获取资源列表|
| **[asyncSaveProject](Scripting.Scripting.md#asyncsaveproject)**(): `Promise`<`boolean`\> <br> 保存当前游戏项目|
| **[autoExecute](Scripting.Scripting.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[beginActorPropertiesChange](Scripting.Scripting.md#beginactorpropertieschange)**(`target`: `Base`): `void` <br> 开始记录撤销恢复的actor属性|
| **[beginActorTransformChange](Scripting.Scripting.md#beginactortransformchange)**(`target`: `Base`): `void` <br> 开始记录actor的transform属性|
| **[calculateActorEqualScale](Scripting.Scripting.md#calculateactorequalscale)**(`currentScale`: [`Vector`](../classes/mw.Vector.md), `deltaScale`: [`Vector`](../classes/mw.Vector.md)): [`Vector`](../classes/mw.Vector.md) <br> 计算actor的等比缩放|
| **[captureAvatar](Scripting.Scripting.md#captureavatar)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 同步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[clearUselessLocalMaterials](Scripting.Scripting.md#clearuselesslocalmaterials)**(`IgnoreMatGuids?`: `string`[]): `void` <br> 清除项目中没有引用的本地材质资源|
| **[convertScreenLocationToWorldSpace](Scripting.Scripting.md#convertscreenlocationtoworldspace)**(`ScreenX`: `number`, `ScreenY`: `number`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[endActorPropertiesChange](Scripting.Scripting.md#endactorpropertieschange)**(`target`: `Base`): `void` <br> 结束记录actor属性的撤销恢复|
| **[endActorTransformChange](Scripting.Scripting.md#endactortransformchange)**(`target`: `Base`, `bIsGizmoActor?`: `boolean`): `void` <br> 结束记录actor的transform|
| **[getCurrentProjectPath](Scripting.Scripting.md#getcurrentprojectpath)**(): `string` <br> 获取当前工程的路径|
| **[getGizmo](Scripting.Scripting.md#getgizmo)**(): [`Gizmo`](../classes/mw.Gizmo.md) <br> 获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[getHeadSculpture](Scripting.Scripting.md#getheadsculpture)**(`character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 对指定虚拟角色进行截取后上传到服务器|
| **[getLocalMaterialsCount](Scripting.Scripting.md#getlocalmaterialscount)**(): `number` <br> 获取创建的本地材质数量|
| **[getOneFingerMoveGestureDelegate](Scripting.Scripting.md#getonefingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <br> 获取单指滑动的代理|
| **[getPinchGestureDelegate](Scripting.Scripting.md#getpinchgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <br> 获取挤压手势的代理|
| **[getSavedDir](Scripting.Scripting.md#getsaveddir)**(): `string` <br> 获取截图的保存路径|
| **[getTapGestureDelegate](Scripting.Scripting.md#gettapgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <br> 获取点击事件的代理|
| **[getTouchBeganGestureDelegate](Scripting.Scripting.md#gettouchbegangesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <br> 获取手指按下代理|
| **[getTouchData](Scripting.Scripting.md#gettouchdata)**(): [`Vector`](../classes/mw.Vector.md)[] <br> 获取touch的数组|
| **[getTouchEndGestureDelegate](Scripting.Scripting.md#gettouchendgesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <br> 获取手指抬起代理|
| **[getTouchMoveGestureDelegate](Scripting.Scripting.md#gettouchmovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <br> 获取手指滑动代理|
| **[getTwoFingerMoveGestureDelegate](Scripting.Scripting.md#gettwofingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <br> 获取双指滑动的代理|
| **[markActorRenderStateDirty](Scripting.Scripting.md#markactorrenderstatedirty)**(`target`: `Base`): `void` <br> 标记Actor所有组件的渲染状态为脏|
| **[mobileReleaseGame](Scripting.Scripting.md#mobilereleasegame)**(`InGameName`: `string`, `InExtraData?`: `string`): `Promise`<[`ReleaseStatus`](../enums/mw.ReleaseStatus.md)\> <br> 移动端编辑器发布游戏|
| **[persistence](Scripting.Scripting.md#persistence)**(`name?`): (`target`: [`Subdata`](../classes/mw.Subdata.md), `propertyKey`: `string`) => `void` <br> 属性装饰器-持久化存储属性|
| **[projectWorldLocationToWidgetPosition](Scripting.Scripting.md#projectworldlocationtowidgetposition)**(`player`: [`Player`](../classes/mw.Player.md), `worldLocation`: [`Vector`](../classes/mw.Vector.md), `outScreenPosition`: [`Vector2`](../classes/mw.Vector2.md), `isPlayerViewportRelative`: `boolean`): `boolean` <br> 获取投影世界到播放器的屏幕位置，然后将其转换为控件位置，考虑任何质量缩放。|
| **[recordingCharacterGif](Scripting.Scripting.md#recordingcharactergif)**(`Character`: [`Character`](../classes/mw.Character.md), `relativeLocation`: [`Vector`](../classes/mw.Vector.md), `relativeRotation`: [`Rotation`](../classes/mw.Rotation.md), `resolution`: [`Vector2`](../classes/mw.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `picNum`: `number`, `recordingTime`: `number`): `void` <br> 连续截图，生成GIF素材发送给服务器|
| **[redo](Scripting.Scripting.md#redo)**(): `void` <br> 执行恢复操作|
| **[saveProject](Scripting.Scripting.md#saveproject)**(): `void` <br> 保存当前游戏项目|
| **[screenShot](Scripting.Scripting.md#screenshot)**(`Resolution`: [`Vector2`](../classes/mw.Vector2.md), `StartPoint`: [`Vector2`](../classes/mw.Vector2.md), `Width`: `number`, `Height`: `number`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 屏幕指定区域截图|
| **[screenShotExist](Scripting.Scripting.md#screenshotexist)**(`absPath`: `string`): `boolean` <br> 验证绝对路径下截图是否存在|
| **[sendShareId](Scripting.Scripting.md#sendshareid)**(`absPath`: `string`, `shareId`: `string`, `bShowUuid`: `boolean`): `void` <br> 将角色数据ID连同角色截图一同发给MGS|
| **[setMultiSwipeTime](Scripting.Scripting.md#setmultiswipetime)**(`time`: `number`): `void` <br> 双指移动的时间- 必须大于这个时间才执行双指移动事件|
| **[setPinchAngleTolerance](Scripting.Scripting.md#setpinchangletolerance)**(`time`: `number`): `void` <br> 挤压手势的偏差角度|
| **[setSingleSwipeTime](Scripting.Scripting.md#setsingleswipetime)**(`time`: `number`): `void` <br> 单指移动的时间- 必须大于这个时间才会开始执行单指移动|
| **[setSwipeTolerance](Scripting.Scripting.md#setswipetolerance)**(`time`: `number`): `void` <br> 双指移动的偏差量- 值越大误差则可以越大|
| **[setTapTime](Scripting.Scripting.md#settaptime)**(`time`: `number`): `void` <br> tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move|
| **[undo](Scripting.Scripting.md#undo)**(): `void` <br> 执行撤销操作|
| **[uploadScreenShot](Scripting.Scripting.md#uploadscreenshot)**(`filePath`: `string`, `fileType`: `number`, `callbackURL?`: (`responseURL`: `string`) => `void`): `void` <br> 上传角色头像或全身照到服务器后发送到MGS|
| **[uploadScreenShots](Scripting.Scripting.md#uploadscreenshots)**(`gender`: `number`, `portraitPath`: `string`, `fullPicPath`: `string`, `callbackURL?`: (`porURL`: `string`, `bodyURL`: `string`) => `void`): `void` <br> 上传角色头像及全身照到服务器后发送到MGS|


| Modules Type Aliases |
| :-----|
| **[LocalUGCGameInfo](Scripting.Scripting.md#localugcgameinfo)**: `Object` <br> 本地工程信息。如果该工程发布过UGC消费态的游戏，那gameId不为空。|
| **[PublishedUGCGameInfo](Scripting.Scripting.md#publishedugcgameinfo)**: `Object` <br> 发布成功的UGC消费态游戏信息|
| **[UGCTemplateInfo](Scripting.Scripting.md#ugctemplateinfo)**: `Object` <br> UGC模板信息|


## Modules Functions


___

### asyncCaptureAvatar <Score text="asyncCaptureAvatar" /> 

• **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\> <Badge type="tip" text="client" />

异步对指定虚拟角色进行截取，截图保存在本地固定路径下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |

#### Returns

`Promise`<`string`\>

生成的截图的本地绝对路径
___

### asyncGetQualityGameList <Score text="asyncGetQualityGameList" /> 

• **asyncGetQualityGameList**(`resourceId`, `pageIndex`): `Promise`<`string`\> <Badge type="tip" text="client" />

获取优质作品列表


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceId` | `number` | T台Id |
| `pageIndex` | `number` | 分页索引 |

#### Returns

`Promise`<`string`\>

请求结果(Json字符串)
___

### asyncGetReleaseGameData <Score text="asyncGetReleaseGameData" /> 

• **asyncGetReleaseGameData**(`gameId`, `version?`): `Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\> <Badge type="tip" text="client" />

通过指定的消费态游戏ID和版本号获取已发布的游戏数据


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameId` | `string` | 消费态游戏Id |
| `version?` | `string` | 消费态游戏版本号 default:" " |

#### Returns

`Promise`<[`ReleaseGameData`](Core.mw.md#releasegamedata)\>

请求结果(结构体对象：`{游戏名称：gameName, 游戏封面路径：gameCover}`)
___

### asyncGetResourceList <Score text="asyncGetResourceList" /> 

• **asyncGetResourceList**(`classification`, `lastID`, `pageSize`): `Promise`<`string`\> <Badge type="tip" text="client" />

获取资源列表


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `classification` | `number` | 分类id |
| `lastID` | `number` | 查询偏移量 |
| `pageSize` | `number` | 每页查询大小 |

#### Returns

`Promise`<`string`\>

请求结果(Json字符串)
___

### asyncSaveProject <Score text="asyncSaveProject" /> 

• **asyncSaveProject**(): `Promise`<`boolean`\> 

保存当前游戏项目


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

#### Returns

`Promise`<`boolean`\>

保存成功或失败
___

### autoExecute <Score text="autoExecute" /> 

• **autoExecute**(`fnName`): (`target?`: `unknown`) => `void` 

类装饰器-自动执行某个方法

::: warning Precautions

调用发生在所有游戏脚本的生命周期之前

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fnName` | `string` |  要自动执行的方法名 |

#### Returns

`fn`

装饰器方法体

• (`target?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `unknown` |

##### Returns

`void`
___

### beginActorPropertiesChange <Score text="beginActorPropertiesChange" /> 

• **beginActorPropertiesChange**(`target`): `void` <Badge type="tip" text="client" />

开始记录撤销恢复的actor属性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### beginActorTransformChange <Score text="beginActorTransformChange" /> 

• **beginActorTransformChange**(`target`): `void` <Badge type="tip" text="client" />

开始记录actor的transform属性


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### calculateActorEqualScale <Score text="calculateActorEqualScale" /> 

• **calculateActorEqualScale**(`currentScale`, `deltaScale`): [`Vector`](../classes/mw.Vector.md) <Badge type="tip" text="client" />

计算actor的等比缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentScale` | [`Vector`](../classes/mw.Vector.md) | 当前缩放值 |
| `deltaScale` | [`Vector`](../classes/mw.Vector.md) | 缩放值增量 |

#### Returns

[`Vector`](../classes/mw.Vector.md)

计算后的缩放值
___

### captureAvatar <Score text="captureAvatar" /> 

• **captureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

同步对指定虚拟角色进行截取，截图保存在本地固定路径下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

___

### clearUselessLocalMaterials <Score text="clearUselessLocalMaterials" /> 

• **clearUselessLocalMaterials**(`IgnoreMatGuids?`): `void` 

清除项目中没有引用的本地材质资源


::: warning Precautions

只在MobileEditor模式下调用生效

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IgnoreMatGuids?` | `string`[] | 清除时即使未使用也不清除的材质资源Guid default:[] |

___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• **convertScreenLocationToWorldSpace**(`ScreenX`, `ScreenY`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ScreenX` | `number` |  屏幕X轴坐标值 default: |
| `ScreenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md)

屏幕坐标转换结果
___

### endActorPropertiesChange <Score text="endActorPropertiesChange" /> 

• **endActorPropertiesChange**(`target`): `void` <Badge type="tip" text="client" />

结束记录actor属性的撤销恢复


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### endActorTransformChange <Score text="endActorTransformChange" /> 

• **endActorTransformChange**(`target`, `bIsGizmoActor?`): `void` <Badge type="tip" text="client" />

结束记录actor的transform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |
| `bIsGizmoActor?` | `boolean` | 是否是gizmo actor default:false |

___

### getCurrentProjectPath <Score text="getCurrentProjectPath" /> 

• **getCurrentProjectPath**(): `string` 

获取当前工程的路径


#### Returns

`string`

返回当前工程的路径
___

### getGizmo <Score text="getGizmo" /> 

• **getGizmo**(): [`Gizmo`](../classes/mw.Gizmo.md) <Badge type="tip" text="client" />

获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空


#### Returns

[`Gizmo`](../classes/mw.Gizmo.md)

返回编辑态的坐标轴
___

### getHeadSculpture <Score text="getHeadSculpture" /> 

• **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

对指定虚拟角色进行截取后上传到服务器


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 |
| `relativeRotation` | [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 |
| `resolution` | [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

___

### getLocalMaterialsCount <Score text="getLocalMaterialsCount" /> 

• **getLocalMaterialsCount**(): `number` 

获取创建的本地材质数量


::: warning Precautions

只在MobileEditor模式下调用生效

:::

#### Returns

`number`

本地材质数量
___

### getOneFingerMoveGestureDelegate <Score text="getOneFingerMoveGestureDelegate" /> 

• **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取单指滑动的代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\>

返回单指滑动的代理
___

### getPinchGestureDelegate <Score text="getPinchGestureDelegate" /> 

• **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <Badge type="tip" text="client" />

获取挤压手势的代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

返回挤压手势的代理
___

### getSavedDir <Score text="getSavedDir" /> 

• **getSavedDir**(): `string` <Badge type="tip" text="client" />

获取截图的保存路径


#### Returns

`string`

保存路径的绝对路径
___

### getTapGestureDelegate <Score text="getTapGestureDelegate" /> 

• **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取点击事件的代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/mw.SelectTapType.md), `location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\>

返回的代理
___

### getTouchBeganGestureDelegate <Score text="getTouchBeganGestureDelegate" /> 

• **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指按下代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\>

返回手指按下时的代理
___

### getTouchData <Score text="getTouchData" /> 

• **getTouchData**(): [`Vector`](../classes/mw.Vector.md)[] <Badge type="tip" text="client" />

获取touch的数组


#### Returns

[`Vector`](../classes/mw.Vector.md)[]

返回一个10维数组Vector, x,y点击的位置,z代表点击的状态 只会出现0,1的情况
___

### getTouchEndGestureDelegate <Score text="getTouchEndGestureDelegate" /> 

• **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />

获取手指抬起代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理
___

### getTouchMoveGestureDelegate <Score text="getTouchMoveGestureDelegate" /> 

• **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指滑动代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\>

返回手指滑动的代理
___

### getTwoFingerMoveGestureDelegate <Score text="getTwoFingerMoveGestureDelegate" /> 

• **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取双指滑动的代理


#### Returns

[`MulticastDelegate`](../classes/mw.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/mw.Vector2.md)) => `void`\>

返回双指滑动的代理
___

### markActorRenderStateDirty <Score text="markActorRenderStateDirty" /> 

• **markActorRenderStateDirty**(`target`): `void` <Badge type="tip" text="client" />

标记Actor所有组件的渲染状态为脏


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 标记的对象 |

___

### mobileReleaseGame <Score text="mobileReleaseGame" /> 

• **mobileReleaseGame**(`InGameName`, `InExtraData?`): `Promise`<[`ReleaseStatus`](../enums/mw.ReleaseStatus.md)\> 

移动端编辑器发布游戏


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用,发布游戏会自动保存一次工程

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGameName` | `string` | 游戏名称 |
| `InExtraData?` | `string` | 游戏扩展数据 default:"" |

#### Returns

`Promise`<[`ReleaseStatus`](../enums/mw.ReleaseStatus.md)\>

保存成功或失败
___

### persistence <Score text="persistence" /> 

• **persistence**(`name?`): (`target`: [`Subdata`](../classes/mw.Subdata.md), `propertyKey`: `string`) => `void` 

属性装饰器-持久化存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` |  持久化后的属性名，不写会用变量名存储 default: undefined |

#### Returns

`fn`

装饰器方法体

• (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Subdata`](../classes/mw.Subdata.md) |
| `propertyKey` | `string` |

##### Returns

___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• **projectWorldLocationToWidgetPosition**(`player`, `worldLocation`, `outScreenPosition`, `isPlayerViewportRelative`): `boolean` <Badge type="tip" text="client" />

获取投影世界到播放器的屏幕位置，然后将其转换为控件位置，考虑任何质量缩放。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/mw.Player.md) | 玩家在游戏世界中的位置投射到屏幕上的控制器 |
| `worldLocation` | [`Vector`](../classes/mw.Vector.md) | 要投射的世界位置 |
| `outScreenPosition` | [`Vector2`](../classes/mw.Vector2.md) | 在视口的位置 |
| `isPlayerViewportRelative` | `boolean` | 是否与玩家视口子区域相关(当在分屏中使用玩家附加的小部件或当宽度比受限时有用)如果位置投射到屏幕上，返回true |

#### Returns

`boolean`

boolean

• **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md)

获取角色在世界中的位置，投射到屏幕上

**`Effect`**


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldLocation` | [`Vector`](../classes/mw.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/mw.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO
___

### recordingCharacterGif <Score text="recordingCharacterGif" /> 

• **recordingCharacterGif**(`Character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `picNum`, `recordingTime`): `void` <Badge type="tip" text="client" />

连续截图，生成GIF素材发送给服务器


::: warning Precautions

Playza定制接口

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Character` | [`Character`](../classes/mw.Character.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/mw.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/mw.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0) |
| `resolution` | [`Vector2`](../classes/mw.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  镜头FOV值 |
| `picNum` | `number` |  截取图像张数 |
| `recordingTime` | `number` |  截取持续时长 |

___

### redo <Score text="redo" /> 

• **redo**(): `void` <Badge type="tip" text="client" />

执行恢复操作


___

### saveProject <Score text="saveProject" /> 

• **saveProject**(): `void` 

保存当前游戏项目


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

___

### screenShot <Score text="screenShot" /> 

• **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`): `void` <Badge type="tip" text="client" />

屏幕指定区域截图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Resolution` | [`Vector2`](../classes/mw.Vector2.md) | 分辨率 |
| `StartPoint` | [`Vector2`](../classes/mw.Vector2.md) | 截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
| `Width` | `number` | 截图区域的宽度 |
| `Height` | `number` | 截图区域的高度 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

___

### screenShotExist <Score text="screenShotExist" /> 

• **screenShotExist**(`absPath`): `boolean` <Badge type="tip" text="client" />

验证绝对路径下截图是否存在


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` |  图片的绝对路径 |

#### Returns

`boolean`

该文件是否存在
___

### sendShareId <Score text="sendShareId" /> 

• **sendShareId**(`absPath`, `shareId`, `bShowUuid`): `void` <Badge type="tip" text="client" />

将角色数据ID连同角色截图一同发给MGS


::: warning Precautions

Playza定制接口

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` |  分享截图的绝对路径 |
| `shareId` | `string` |  分享的角色数据id,可为空 |
| `bShowUuid` | `boolean` |  是否在显示账户的Uuid |

___

### setMultiSwipeTime <Score text="setMultiSwipeTime" /> 

• **setMultiSwipeTime**(`time`): `void` <Badge type="tip" text="client" />

双指移动的时间- 必须大于这个时间才执行双指移动事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  双指移动限定的时间 |

___

### setPinchAngleTolerance <Score text="setPinchAngleTolerance" /> 

• **setPinchAngleTolerance**(`time`): `void` <Badge type="tip" text="client" />

挤压手势的偏差角度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差角度 |

___

### setSingleSwipeTime <Score text="setSingleSwipeTime" /> 

• **setSingleSwipeTime**(`time`): `void` <Badge type="tip" text="client" />

单指移动的时间- 必须大于这个时间才会开始执行单指移动


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  单指移动的限定时间 |

___

### setSwipeTolerance <Score text="setSwipeTolerance" /> 

• **setSwipeTolerance**(`time`): `void` <Badge type="tip" text="client" />

双指移动的偏差量- 值越大误差则可以越大


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差值 |

___

### setTapTime <Score text="setTapTime" /> 

• **setTapTime**(`time`): `void` <Badge type="tip" text="client" />

tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  tap限定的时间 |

___

### undo <Score text="undo" /> 

• **undo**(): `void` <Badge type="tip" text="client" />

执行撤销操作


___

### uploadScreenShot <Score text="uploadScreenShot" /> 

• **uploadScreenShot**(`filePath`, `fileType`, `callbackURL?`): `void` <Badge type="tip" text="client" />

上传角色头像或全身照到服务器后发送到MGS


::: warning Precautions

Playza定制接口

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | 图片路径 |
| `fileType` | `number` | 图片类型 default:0-全身照,1-男性头像 2-女性头像 |
| `callbackURL?` | (`responseURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |

___

### uploadScreenShots <Score text="uploadScreenShots" /> 

• **uploadScreenShots**(`gender`, `portraitPath`, `fullPicPath`, `callbackURL?`): `void` <Badge type="tip" text="client" />

上传角色头像及全身照到服务器后发送到MGS


::: warning Precautions

Playza定制接口

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gender` | `number` | 角色性别，1-男 2-女 0-未知 |
| `portraitPath` | `string` | 头像照路径 |
| `fullPicPath` | `string` | 全身照路径 |
| `callbackURL?` | (`porURL`: `string`, `bodyURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |

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