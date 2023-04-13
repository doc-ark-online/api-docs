MobileEditor

# MobileEditor <Badge type="tip" text="Namespace" /> <Score text="MobileEditor" />

## Table of contents

| Enumerations |
| :-----|
| [GizmoCoordinateType](../enums/MobileEditor.GizmoCoordinateType.md) <br> gizmo坐标轴类型|
| [GizmoModeType](../enums/MobileEditor.GizmoModeType.md) <br> gizmo模式|
| [GizmoSpaceType](../enums/MobileEditor.GizmoSpaceType.md) <br> gizmo空间|
| [ReleaseStatus](../enums/MobileEditor.ReleaseStatus.md) <br> UGC 发布的状态|
| [SelectTapType](../enums/MobileEditor.SelectTapType.md) <br> UGC 选中的单选或者多选|

| Classes |
| :-----|
| [EditorMode](../classes/MobileEditor.EditorMode.md) <br> 移动编辑器模式切换|
| [GestureDelegate](../classes/MobileEditor.GestureDelegate.md) <br> 手势代理类|
| [Gizmo](../classes/MobileEditor.Gizmo.md) <br> Gizmo|

| Functions |
| :-----|
| **[UGCEditor](MobileEditor.MobileEditor.md#ugceditor)**(`target`: `any`): `void` <br> UGC Editor使用的装饰器,避免数据被还原|
| **[addEditorPawnPanInputMovement](MobileEditor.MobileEditor.md#addeditorpawnpaninputmovement)**(`input`: [`Vector2`](../classes/Type.Vector2.md)): `void` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[addLikeContent](MobileEditor.MobileEditor.md#addlikecontent)**(`UGCID`: `string`, `contentId`: `string`, `contentType`: `number`): `void` <br> 点赞内容|
| **[addMessage](MobileEditor.MobileEditor.md#addmessage)**(`UGCID`: `string`, `Content`: `string`): `void` <br> 添加留言|
| **[addReplyMessage](MobileEditor.MobileEditor.md#addreplymessage)**(`UGCID`: `string`, `CommentID`: `string`, `Content`: `string`): `void` <br> 添加回复的消息|
| **[asyncCaptureAvatar](MobileEditor.MobileEditor.md#asynccaptureavatar)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`): `Promise`<`string`\> <br> 异步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[asyncGetResourceList](MobileEditor.MobileEditor.md#asyncgetresourcelist)**(`classification`: `number`, `lastID`: `number`, `pageSize`: `number`): `Promise`<`string`\> <br> 获取资源列表|
| **[asyncSaveProject](MobileEditor.MobileEditor.md#asyncsaveproject)**(): `Promise`<`boolean`\> <br> 保存当前游戏项目|
| **[beginActorPropertiesChange](MobileEditor.MobileEditor.md#beginactorpropertieschange)**(`target`: `Base`): `void` <br> 开始记录撤销恢复的actor属性|
| **[beginActorTransformChange](MobileEditor.MobileEditor.md#beginactortransformchange)**(`target`: `Base`): `void` <br> 开始记录actor的transform属性|
| **[calculateActorEqualScale](MobileEditor.MobileEditor.md#calculateactorequalscale)**(`currentScale`: [`Vector`](../classes/Type.Vector.md), `deltaScale`: [`Vector`](../classes/Type.Vector.md)): [`Vector`](../classes/Type.Vector.md) <br> 计算actor的等比缩放|
| **[captureAvatar](MobileEditor.MobileEditor.md#captureavatar)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 同步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[clearUselessLocalMaterials](MobileEditor.MobileEditor.md#clearuselesslocalmaterials)**(`IgnoreMatGuids?`: `string`[]): `void` <br> 清除项目中没有引用的本地材质资源|
| **[convertScreenLocationToWorldSpace](MobileEditor.MobileEditor.md#convertscreenlocationtoworldspace)**(`ScreenX`: `number`, `ScreenY`: `number`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[deleteLikeContent](MobileEditor.MobileEditor.md#deletelikecontent)**(`UGCID`: `string`, `contentId`: `string`, `contentType`: `number`): `void` <br> 取消点赞内容|
| **[deleteMessage](MobileEditor.MobileEditor.md#deletemessage)**(`UGCID`: `string`, `CommentID`: `string`): `void` <br> 删除留言板数据|
| **[endActorPropertiesChange](MobileEditor.MobileEditor.md#endactorpropertieschange)**(`target`: `Base`): `void` <br> 结束记录actor属性的撤销恢复|
| **[endActorTransformChange](MobileEditor.MobileEditor.md#endactortransformchange)**(`target`: `Base`, `bIsGizmoActor?`: `boolean`): `void` <br> 结束记录actor的transform|
| **[getCurrentProjectPath](MobileEditor.MobileEditor.md#getcurrentprojectpath)**(): `string` <br> 获取当前工程的路径|
| **[getEditorPawnLocation](MobileEditor.MobileEditor.md#geteditorpawnlocation)**(): [`Vector`](../classes/Type.Vector.md) <br> 返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物|
| **[getEditorPawnRotation](MobileEditor.MobileEditor.md#geteditorpawnrotation)**(): [`Rotation`](../classes/Type.Rotation.md) <br> 返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物|
| **[getGizmo](MobileEditor.MobileEditor.md#getgizmo)**(): [`Gizmo`](../classes/MobileEditor.Gizmo.md) <br> 获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[getHeadSculpture](MobileEditor.MobileEditor.md#getheadsculpture)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 对指定虚拟角色进行截取后上传到服务器|
| **[getLocalMaterialsCount](MobileEditor.MobileEditor.md#getlocalmaterialscount)**(): `number` <br> 获取创建的本地材质数量|
| **[getObjectWithGuid](MobileEditor.MobileEditor.md#getobjectwithguid)**(`guid`: `string`): `Core.Script` <br> 查找需要在ugc编辑器中调用的gameobject, 第一次查找会触发onstart 和 反序列化 之后不再触发,避免数据还原需要加上类装饰器ugcEditor|
| **[getOneFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#getonefingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取单指滑动的代理|
| **[getPinchGestureDelegate](MobileEditor.MobileEditor.md#getpinchgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <br> 获取挤压手势的代理|
| **[getSavedDir](MobileEditor.MobileEditor.md#getsaveddir)**(): `string` <br> 获取截图的保存路径|
| **[getTapGestureDelegate](MobileEditor.MobileEditor.md#gettapgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取点击事件的代理|
| **[getTouchBeganGestureDelegate](MobileEditor.MobileEditor.md#gettouchbegangesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取手指按下代理|
| **[getTouchData](MobileEditor.MobileEditor.md#gettouchdata)**(): [`Vector`](../classes/Type.Vector.md)[] <br> 获取touch的数组|
| **[getTouchEndGestureDelegate](MobileEditor.MobileEditor.md#gettouchendgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <br> 获取手指抬起代理|
| **[getTouchMoveGestureDelegate](MobileEditor.MobileEditor.md#gettouchmovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取手指滑动代理|
| **[getTwoFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#gettwofingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取双指滑动的代理|
| **[markActorRenderStateDirty](MobileEditor.MobileEditor.md#markactorrenderstatedirty)**(`target`: `Base`): `void` <br> 标记Actor所有组件的渲染状态为脏|
| **[mobileReleaseGame](MobileEditor.MobileEditor.md#mobilereleasegame)**(`InGameName`: `string`, `InExtraData?`: `string`): `Promise`<[`ReleaseStatus`](../enums/MobileEditor.ReleaseStatus.md)\> <br> 移动端编辑器发布游戏|
| **[projectWorldLocationToWidgetPosition](MobileEditor.MobileEditor.md#projectworldlocationtowidgetposition)**(`worldLocation`: [`Vector`](../classes/Type.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[queryGameOwnerShip](MobileEditor.MobileEditor.md#querygameownership)**(`UGCID`: `string`): `Promise`<`boolean`\> <br> 是否是自己发布的游戏|
| **[queryMessageBoard](MobileEditor.MobileEditor.md#querymessageboard)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询留言板数据|
| **[queryReplyMessage](MobileEditor.MobileEditor.md#queryreplymessage)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `CommentID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询回复的数据|
| **[queryViewRecord](MobileEditor.MobileEditor.md#queryviewrecord)**(`Delegate`: [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\>, `UGCID`: `string`, `PageNum`: `number`, `PageSize`: `number`): `void` <br> 查询浏览的记录|
| **[recordingCharacterGif](MobileEditor.MobileEditor.md#recordingcharactergif)**(`Character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `picNum`: `number`, `recordingTime`: `number`): `void` <br> 连续截图，生成GIF素材发送给服务器|
| **[redo](MobileEditor.MobileEditor.md#redo)**(): `void` <br> 执行恢复操作|
| **[saveProject](MobileEditor.MobileEditor.md#saveproject)**(): `void` <br> 保存当前游戏项目|
| **[saveViewRecord](MobileEditor.MobileEditor.md#saveviewrecord)**(`UGCID`: `string`): `void` <br> 保存留言|
| **[screenShot](MobileEditor.MobileEditor.md#screenshot)**(`Resolution`: [`Vector2`](../classes/Type.Vector2.md), `StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `Width`: `number`, `Height`: `number`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 屏幕指定区域截图|
| **[screenShotExist](MobileEditor.MobileEditor.md#screenshotexist)**(`absPath`: `string`): `boolean` <br> 验证绝对路径下截图是否存在|
| **[sendShareId](MobileEditor.MobileEditor.md#sendshareid)**(`absPath`: `string`, `shareId`: `string`, `bShowUuid`: `boolean`): `void` <br> 将角色数据ID连同角色截图一同发给MGS|
| **[setEditorCameraLocation](MobileEditor.MobileEditor.md#seteditorcameralocation)**(`input`: [`Vector`](../classes/Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraRotation](MobileEditor.MobileEditor.md#seteditorcamerarotation)**(`input`: [`Rotation`](../classes/Type.Rotation.md)): `boolean` <br> 添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraTransform](MobileEditor.MobileEditor.md#seteditorcameratransform)**(`input`: [`Transform`](../classes/Type.Transform.md)): `boolean` <br> 设置编辑器摄像机的空间信息  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorPawnLocation](MobileEditor.MobileEditor.md#seteditorpawnlocation)**(`input`: [`Vector`](../classes/Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体|
| **[setEditorPawnRotation](MobileEditor.MobileEditor.md#seteditorpawnrotation)**(`input`: [`Rotation`](../classes/Type.Rotation.md)): `boolean` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[setEditorPawnTransform](MobileEditor.MobileEditor.md#seteditorpawntransform)**(`input`: [`Transform`](../classes/Type.Transform.md)): `boolean` <br> 设置编辑器人物的空间信息|
| **[setMultiSwipeTime](MobileEditor.MobileEditor.md#setmultiswipetime)**(`time`: `number`): `void` <br> 双指移动的时间- 必须大于这个时间才执行双指移动事件|
| **[setPinchAngleTolerance](MobileEditor.MobileEditor.md#setpinchangletolerance)**(`time`: `number`): `void` <br> 挤压手势的偏差角度|
| **[setScriptObjectData](MobileEditor.MobileEditor.md#setscriptobjectdata)**(`target`: `Script`, `key`: `string`, `data`: `string` \): `boolean` <br> 设置脚本内容,不会验证是否有对应变量|
| **[setSingleSwipeTime](MobileEditor.MobileEditor.md#setsingleswipetime)**(`time`: `number`): `void` <br> 单指移动的时间- 必须大于这个时间才会开始执行单指移动|
| **[setSwipeTolerance](MobileEditor.MobileEditor.md#setswipetolerance)**(`time`: `number`): `void` <br> 双指移动的偏差量- 值越大误差则可以越大|
| **[setTapTime](MobileEditor.MobileEditor.md#settaptime)**(`time`: `number`): `void` <br> tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move|
| **[undo](MobileEditor.MobileEditor.md#undo)**(): `void` <br> 执行撤销操作|
| **[uploadScreenShot](MobileEditor.MobileEditor.md#uploadscreenshot)**(`filePath`: `string`, `fileType`: `number`, `callbackURL?`: (`responseURL`: `string`) => `void`): `void` <br> 上传角色头像或全身照到服务器后发送到MGS|
| **[uploadScreenShots](MobileEditor.MobileEditor.md#uploadscreenshots)**(`gender`: `number`, `portraitPath`: `string`, `fullPicPath`: `string`, `callbackURL?`: (`porURL`: `string`, `bodyURL`: `string`) => `void`): `void` <br> 上传角色头像及全身照到服务器后发送到MGS|

## Functions

### UGCEditor <Score text="UGCEditor" /> 

• **UGCEditor**(`target`): `void` <Badge type="tip" text="client" />

UGC Editor使用的装饰器,避免数据被还原


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` |  目标 |


___

### addEditorPawnPanInputMovement <Score text="addEditorPawnPanInputMovement" /> 

• **addEditorPawnPanInputMovement**(`input`): `void` <Badge type="tip" text="client" />

添加对编辑器人物的输入 - 只作用于编辑器人物


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector2`](../classes/Type.Vector2.md) | 输入值 |


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

### asyncCaptureAvatar <Score text="asyncCaptureAvatar" /> 

• **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\> <Badge type="tip" text="client" />

异步对指定虚拟角色进行截取，截图保存在本地固定路径下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |

#### Returns

`Promise`<`string`\>

生成的截图的本地绝对路径

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

• **calculateActorEqualScale**(`currentScale`, `deltaScale`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

计算actor的等比缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentScale` | [`Vector`](../classes/Type.Vector.md) | 当前缩放值 |
| `deltaScale` | [`Vector`](../classes/Type.Vector.md) | 缩放值增量 |

#### Returns

[`Vector`](../classes/Type.Vector.md)

计算后的缩放值

___

### captureAvatar <Score text="captureAvatar" /> 

• **captureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

同步对指定虚拟角色进行截取，截图保存在本地固定路径下


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Vector2.md) |  截图尺寸 |
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

• **convertScreenLocationToWorldSpace**(`ScreenX`, `ScreenY`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ScreenX` | `number` |  屏幕X轴坐标值 default: |
| `ScreenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果

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

### getEditorPawnLocation <Score text="getEditorPawnLocation" /> 

• **getEditorPawnLocation**(): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物


#### Returns

[`Vector`](../classes/Type.Vector.md)

Vector 返回的位置

___

### getEditorPawnRotation <Score text="getEditorPawnRotation" /> 

• **getEditorPawnRotation**(): [`Rotation`](../classes/Type.Rotation.md) <Badge type="tip" text="client" />

返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物


#### Returns

[`Rotation`](../classes/Type.Rotation.md)

返回旋转的角度

___

### getGizmo <Score text="getGizmo" /> 

• **getGizmo**(): [`Gizmo`](../classes/MobileEditor.Gizmo.md) <Badge type="tip" text="client" />

获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空


#### Returns

[`Gizmo`](../classes/MobileEditor.Gizmo.md)

返回编辑态的坐标轴

___

### getHeadSculpture <Score text="getHeadSculpture" /> 

• **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

对指定虚拟角色进行截取后上传到服务器


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Vector.md) |  镜头相对位置 |
| `relativeRotation` | [`Rotation`](../classes/Type.Rotation.md) |  镜头相对旋转 |
| `resolution` | [`Vector2`](../classes/Type.Vector2.md) |  截图尺寸 |
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

### getObjectWithGuid <Score text="getObjectWithGuid" /> 

• **getObjectWithGuid**(`guid`): `Core.Script` <Badge type="tip" text="client" />

查找需要在ugc编辑器中调用的gameobject, 第一次查找会触发onstart 和 反序列化 之后不再触发,避免数据还原需要加上类装饰器ugcEditor


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | 查找的对象id |

#### Returns

`Core.Script`

返回查找的对象,可能为空

___

### getOneFingerMoveGestureDelegate <Score text="getOneFingerMoveGestureDelegate" /> 

• **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取单指滑动的代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回单指滑动的代理

___

### getPinchGestureDelegate <Score text="getPinchGestureDelegate" /> 

• **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <Badge type="tip" text="client" />

获取挤压手势的代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

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

• **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取点击事件的代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回的代理

___

### getTouchBeganGestureDelegate <Score text="getTouchBeganGestureDelegate" /> 

• **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指按下代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回手指按下时的代理

___

### getTouchData <Score text="getTouchData" /> 

• **getTouchData**(): [`Vector`](../classes/Type.Vector.md)[] <Badge type="tip" text="client" />

获取touch的数组


#### Returns

[`Vector`](../classes/Type.Vector.md)[]

返回一个10维数组Vector, x,y点击的位置,z代表点击的状态 只会出现0,1的情况

___

### getTouchEndGestureDelegate <Score text="getTouchEndGestureDelegate" /> 

• **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />

获取手指抬起代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理

___

### getTouchMoveGestureDelegate <Score text="getTouchMoveGestureDelegate" /> 

• **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指滑动代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回手指滑动的代理

___

### getTwoFingerMoveGestureDelegate <Score text="getTwoFingerMoveGestureDelegate" /> 

• **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取双指滑动的代理


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

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

• **mobileReleaseGame**(`InGameName`, `InExtraData?`): `Promise`<[`ReleaseStatus`](../enums/MobileEditor.ReleaseStatus.md)\> 

移动端编辑器发布游戏


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGameName` | `string` | 游戏名称 |
| `InExtraData?` | `string` | 游戏扩展数据 default:"" |

#### Returns

`Promise`<[`ReleaseStatus`](../enums/MobileEditor.ReleaseStatus.md)\>

保存成功或失败

___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldLocation` | [`Vector`](../classes/Type.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO

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
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 代理返回留言板json数据 |
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
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回http返回的json |
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
| `Delegate` | [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Content`: `string`) => `void`\> | 返回浏览记录的json |
| `UGCID` | `string` | UGC唯一标识 |
| `PageNum` | `number` | 查询的页面数量 |
| `PageSize` | `number` | 查询的页面大小 |


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
| `Character` | [`CharacterBase`](../classes/Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0) |
| `resolution` | [`Vector2`](../classes/Type.Vector2.md) |  截图尺寸 |
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

### saveViewRecord <Score text="saveViewRecord" /> 

• **saveViewRecord**(`UGCID`): `void` <Badge type="tip" text="client" />

保存留言


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `UGCID` | `string` | UGC唯一标识 |


___

### screenShot <Score text="screenShot" /> 

• **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`): `void` <Badge type="tip" text="client" />

屏幕指定区域截图


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Resolution` | [`Vector2`](../classes/Type.Vector2.md) | 分辨率 |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
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

### setEditorCameraLocation <Score text="setEditorCameraLocation" /> 

• **setEditorCameraLocation**(`input`): `boolean` <Badge type="tip" text="client" />

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector`](../classes/Type.Vector.md) | 编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorCameraRotation <Score text="setEditorCameraRotation" /> 

• **setEditorCameraRotation**(`input`): `boolean` <Badge type="tip" text="client" />

添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Rotation`](../classes/Type.Rotation.md) | 输入值 |

#### Returns

`boolean`

bool 是否设置成功

___

### setEditorCameraTransform <Score text="setEditorCameraTransform" /> 

• **setEditorCameraTransform**(`input`): `boolean` <Badge type="tip" text="client" />

设置编辑器摄像机的空间信息  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Transform`](../classes/Type.Transform.md) | 编辑器摄像机会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorPawnLocation <Score text="setEditorPawnLocation" /> 

• **setEditorPawnLocation**(`input`): `boolean` <Badge type="tip" text="client" />

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector`](../classes/Type.Vector.md) | 编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorPawnRotation <Score text="setEditorPawnRotation" /> 

• **setEditorPawnRotation**(`input`): `boolean` <Badge type="tip" text="client" />

添加对编辑器人物的输入 - 只作用于编辑器人物


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Rotation`](../classes/Type.Rotation.md) | 输入值 |

#### Returns

`boolean`

bool 是否设置成功

___

### setEditorPawnTransform <Score text="setEditorPawnTransform" /> 

• **setEditorPawnTransform**(`input`): `boolean` <Badge type="tip" text="client" />

设置编辑器人物的空间信息


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Transform`](../classes/Type.Transform.md) | 编辑器人物会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

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

### setScriptObjectData <Score text="setScriptObjectData" /> 

• **setScriptObjectData**(`target`, `key`, `data`): `boolean` <Badge type="tip" text="client" />

设置脚本内容,不会验证是否有对应变量


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Script` | 设置对象 |
| `key` | `string` | 键值 |
| `data` | `string` \| `number` \| `boolean` | 数据 |

#### Returns

`boolean`

是否设置成功

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

