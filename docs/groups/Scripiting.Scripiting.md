Scripiting

# Scripiting <Badge type="tip" text="Groups" /> <Score text="Scripiting" />

## Table of contents
| Classes |
| :-----|
| [Action](../classes/Type.Action.md) <br> 任意参数的代理 |
| [Action1](../classes/Type.Action1.md) <br> 一个参数的代理 |
| [Action2](../classes/Type.Action2.md) <br> 两个参数的代理 |
| [Action3](../classes/Type.Action3.md) <br> 三个参数的代理 |
| [Delegate](../classes/Type.Delegate.md) <br> 委托 |
| [EditorMode](../classes/MobileEditor.EditorMode.md) <br> 移动编辑器模式切换 |
| [EventListener](../classes/Events.EventListener.md) <br> 事件监听器 |
| [GestureDelegate](../classes/MobileEditor.GestureDelegate.md) <br> 手势代理类 |
| [MessageChannelService](../classes/Service.MessageChannelService.md) <br> 支持各端的通信，233、引擎、Web和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码 |
| [MulticastDelegate](../classes/Type.MulticastDelegate.md) <br> 多播委托接口 |
| [MulticastGameObjectDelegate](../classes/Type.MulticastGameObjectDelegate.md) <br> 广播代理 |
| [UGCService](../classes/Service.UGCService.md) <br> 用户建造服务 |


| Enums |
| :-----|
| [DispatchEventResult](../enums/Events.DispatchEventResult.md) <br> 事件发送的结果 |
| [GizmoCoordinateType](../enums/MobileEditor.GizmoCoordinateType.md) <br> gizmo坐标轴类型 |
| [GizmoModeType](../enums/MobileEditor.GizmoModeType.md) <br> gizmo类型 |
| [MessageChannelReceiver](../enums/Service.MessageChannelReceiver.md) <br> 枚举各个通道的使用与接收方 |
| [SelectTapType](../enums/MobileEditor.SelectTapType.md) <br> UGC 选中的单选或者多选 |


| Interfaces |
| :-----|
| [DelegateInterface](../interfaces/Type.DelegateInterface.md) <br> 委托接口 |
| [MulticastDelegateInterface](../interfaces/Type.MulticastDelegateInterface.md) <br> 多播委托接口 |
| [TypeName](../interfaces/Type.TypeName.md) <br> 类定义，使用这个可以省去类参数繁琐的类型声明    如:fun`<T>`(c:{new():T}) 可以写成 fun`<T>`(c:Class`<T>`) |


| Modules Functions |
| :-----|
| **[UGCEditor](Scripiting.Scripiting.md#ugceditor)**(`target`: `any`): `void` <br> UGC Editor使用的装饰器,避免数据被还原|
| **[addClientListener](Scripiting.Scripiting.md#addclientlistener)**(`eventName`: `string`, `listener`: (`player`: [`Player`](../classes/Gameplay.Player.md), ...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 服务器监听客户端发来的事件|
| **[addEditorPawnPanInputMovement](Scripiting.Scripiting.md#addeditorpawnpaninputmovement)**(`input`: [`Vector2`](../classes/Type.Vector2.md)): `void` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[addExitListener](Scripiting.Scripiting.md#addexitlistener)**(`callback`: () => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加退出游戏时执行的回调函数|
| **[addFocusListener](Scripiting.Scripiting.md#addfocuslistener)**(`callback`: () => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加窗口聚焦时执行的回调函数|
| **[addLocalListener](Scripiting.Scripiting.md#addlocallistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听本地事件|
| **[addOnPauseListener](Scripiting.Scripiting.md#addonpauselistener)**(`callback`: () => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加OnPause开始时执行的回调函数|
| **[addOnResumeListener](Scripiting.Scripiting.md#addonresumelistener)**(`callback`: (`leaveDuration`: `number`) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加OnPause结束时执行的回调函数|
| **[addPlayerJoinedListener](Scripiting.Scripiting.md#addplayerjoinedlistener)**(`listener`: (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听玩家进入room事件|
| **[addPlayerLeftListener](Scripiting.Scripiting.md#addplayerleftlistener)**(`listener`: (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 监听玩家离开room事件|
| **[addServerListener](Scripiting.Scripiting.md#addserverlistener)**(`eventName`: `string`, `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 客户端监听服务器事件|
| **[addUnfocusedListener](Scripiting.Scripiting.md#addunfocusedlistener)**(`callback`: () => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 添加窗口失焦时执行的回调函数|
| **[asyncCaptureAvatar](Scripiting.Scripiting.md#asynccaptureavatar)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`): `Promise`<`string`\> <br> 异步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[asyncGetResourceList](Scripiting.Scripiting.md#asyncgetresourcelist)**(`classification`: `number`, `lastID`: `number`, `pageSize`: `number`): `Promise`<`string`\> <br> 获取资源列表|
| **[asyncSaveProject](Scripiting.Scripiting.md#asyncsaveproject)**(): `Promise`<`boolean`\> <br> 保存当前游戏项目|
| **[autoExecute](Scripiting.Scripiting.md#autoexecute)**(`fnName`): (`target?`: `unknown`) => `void` <br> 类装饰器-自动执行某个方法|
| **[beginActorPropertiesChange](Scripiting.Scripiting.md#beginactorpropertieschange)**(`target`: `Base`): `void` <br> 开始记录撤销恢复的actor属性|
| **[beginActorTransformChange](Scripiting.Scripiting.md#beginactortransformchange)**(`target`: `Base`): `void` <br> 开始记录actor的transform属性|
| **[calculateActorEqualScale](Scripiting.Scripiting.md#calculateactorequalscale)**(`currentScale`: [`Vector`](../classes/Type.Vector.md), `deltaScale`: [`Vector`](../classes/Type.Vector.md)): [`Vector`](../classes/Type.Vector.md) <br> 计算actor的等比缩放|
| **[captureAvatar](Scripiting.Scripiting.md#captureavatar)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 同步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[convertScreenLocationToWorldSpace](Scripiting.Scripiting.md#convertscreenlocationtoworldspace)**(`ScreenX`: `number`, `ScreenY`: `number`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[convertScreenLocationToWorldSpace](Scripiting.Scripiting.md#convertscreenlocationtoworldspace)**(`screenX`: `number`, `screenY`: `number`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[dispatchLocal](Scripiting.Scripiting.md#dispatchlocal)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 发送本地事件|
| **[dispatchToAllClient](Scripiting.Scripiting.md#dispatchtoallclient)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 服务器发送事件给所有客户端|
| **[dispatchToClient](Scripiting.Scripiting.md#dispatchtoclient)**(`player`: [`Player`](../classes/Gameplay.Player.md), `eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 服务器发送事件给指定客户端|
| **[dispatchToServer](Scripiting.Scripiting.md#dispatchtoserver)**(`eventName`: `string`, `...params`: `unknown`[]): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <br> 客户端发送事件给服务器|
| **[endActorPropertiesChange](Scripiting.Scripiting.md#endactorpropertieschange)**(`target`: `Base`): `void` <br> 结束记录actor属性的撤销恢复|
| **[endActorTransformChange](Scripiting.Scripiting.md#endactortransformchange)**(`target`: `Base`, `bIsGizmoActor?`: `boolean`): `void` <br> 结束记录actor的transform|
| **[getEditorPawnLocation](Scripiting.Scripiting.md#geteditorpawnlocation)**(): [`Vector`](../classes/Type.Vector.md) <br> 返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物|
| **[getEditorPawnRotation](Scripiting.Scripiting.md#geteditorpawnrotation)**(): [`Rotation`](../classes/Type.Rotation.md) <br> 返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物|
| **[getGizmo](Scripiting.Scripiting.md#getgizmo)**(): [`Gizmo`](../classes/MobileEditor.Gizmo.md) <br> 获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[getHeadSculpture](Scripiting.Scripiting.md#getheadsculpture)**(`character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `fileName`: `string`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 对指定虚拟角色进行截取后上传到服务器|
| **[getOneFingerMoveGestureDelegate](Scripiting.Scripiting.md#getonefingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取单指滑动的代理|
| **[getPinchGestureDelegate](Scripiting.Scripiting.md#getpinchgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <br> 获取挤压手势的代理|
| **[getSavedDir](Scripiting.Scripiting.md#getsaveddir)**(): `string` <br> 获取截图的保存路径|
| **[getTapGestureDelegate](Scripiting.Scripiting.md#gettapgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取点击事件的代理|
| **[getTouchBeganGestureDelegate](Scripiting.Scripiting.md#gettouchbegangesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取手指按下代理|
| **[getTouchData](Scripiting.Scripiting.md#gettouchdata)**(): [`Vector`](../classes/Type.Vector.md)[] <br> 获取touch的数组|
| **[getTouchEndGestureDelegate](Scripiting.Scripiting.md#gettouchendgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <br> 获取手指抬起代理|
| **[getTouchMoveGestureDelegate](Scripiting.Scripiting.md#gettouchmovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取手指滑动代理|
| **[getTwoFingerMoveGestureDelegate](Scripiting.Scripiting.md#gettwofingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <br> 获取双指滑动的代理|
| **[markActorRenderStateDirty](Scripiting.Scripiting.md#markactorrenderstatedirty)**(`target`: `Base`): `void` <br> 标记Actor所有组件的渲染状态为脏|
| **[mobileReleaseGame](Scripiting.Scripiting.md#mobilereleasegame)**(`InGameName`: `string`, `InExtraData?`: `string`): `Promise`<`boolean`\> <br> 移动端编辑器发布游戏|
| **[projectWorldLocationToWidgetPosition](Scripiting.Scripiting.md#projectworldlocationtowidgetposition)**(`worldLocation`: [`Vector`](../classes/Type.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[recordingCharacterGif](Scripiting.Scripiting.md#recordingcharactergif)**(`Character`: [`CharacterBase`](../classes/Gameplay.CharacterBase.md), `relativeLocation`: [`Vector`](../classes/Type.Vector.md), `relativeRotation`: [`Rotation`](../classes/Type.Rotation.md), `resolution`: [`Vector2`](../classes/Type.Vector2.md), `bShowOnly`: `boolean`, `fov`: `number`, `picNum`: `number`, `recordingTime`: `number`): `void` <br> 连续截图，生成GIF素材发送给服务器|
| **[redo](Scripiting.Scripiting.md#redo)**(): `void` <br> 执行恢复操作|
| **[saveProject](Scripiting.Scripiting.md#saveproject)**(): `void` <br> 保存当前游戏项目|
| **[saveProperty](Scripiting.Scripiting.md#saveproperty)**(`target`: [`Subdata`](../classes/Extension.Subdata.md), `propertyKey`: `string`): `void` <br> 属性装饰器-永久存储属性|
| **[screenShot](Scripiting.Scripiting.md#screenshot)**(`Resolution`: [`Vector2`](../classes/Type.Vector2.md), `StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `Width`: `number`, `Height`: `number`, `callback`: (`dataString`: `string`) => `void`): `void` <br> 屏幕指定区域截图|
| **[screenShotExist](Scripiting.Scripiting.md#screenshotexist)**(`absPath`: `string`): `boolean` <br> 验证绝对路径下截图是否存在|
| **[sendShareId](Scripiting.Scripiting.md#sendshareid)**(`absPath`: `string`, `shareId`: `string`, `bShowUuid`: `boolean`): `void` <br> 将角色数据ID连同角色截图一同发给MGS|
| **[setEditorCameraLocation](Scripiting.Scripiting.md#seteditorcameralocation)**(`input`: [`Vector`](../classes/Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraRotation](Scripiting.Scripiting.md#seteditorcamerarotation)**(`input`: [`Rotation`](../classes/Type.Rotation.md)): `boolean` <br> 添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraTransform](Scripiting.Scripiting.md#seteditorcameratransform)**(`input`: [`Transform`](../classes/Type.Transform.md)): `boolean` <br> 设置编辑器摄像机的空间信息  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorPawnLocation](Scripiting.Scripiting.md#seteditorpawnlocation)**(`input`: [`Vector`](../classes/Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体|
| **[setEditorPawnRotation](Scripiting.Scripiting.md#seteditorpawnrotation)**(`input`: [`Rotation`](../classes/Type.Rotation.md)): `boolean` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[setEditorPawnTransform](Scripiting.Scripiting.md#seteditorpawntransform)**(`input`: [`Transform`](../classes/Type.Transform.md)): `boolean` <br> 设置编辑器人物的空间信息|
| **[setMultiSwipeTime](Scripiting.Scripiting.md#setmultiswipetime)**(`time`: `number`): `void` <br> 双指移动的时间- 必须大于这个时间才执行双指移动事件|
| **[setPinchAngleTolerance](Scripiting.Scripiting.md#setpinchangletolerance)**(`time`: `number`): `void` <br> 挤压手势的偏差角度|
| **[setSingleSwipeTime](Scripiting.Scripiting.md#setsingleswipetime)**(`time`: `number`): `void` <br> 单指移动的时间- 必须大于这个时间才会开始执行单指移动|
| **[setSwipeTolerance](Scripiting.Scripiting.md#setswipetolerance)**(`time`: `number`): `void` <br> 双指移动的偏差量- 值越大误差则可以越大|
| **[setTapTime](Scripiting.Scripiting.md#settaptime)**(`time`: `number`): `void` <br> tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move|
| **[undo](Scripiting.Scripiting.md#undo)**(): `void` <br> 执行撤销操作|
| **[uploadScreenShot](Scripiting.Scripiting.md#uploadscreenshot)**(`filePath`: `string`, `fileType`: `number`, `callbackURL?`: (`responseURL`: `string`) => `void`): `void` <br> 上传角色头像或全身照到服务器后发送到MGS|
| **[uploadScreenShots](Scripiting.Scripiting.md#uploadscreenshots)**(`gender`: `number`, `portraitPath`: `string`, `fullPicPath`: `string`, `callbackURL?`: (`porURL`: `string`, `bodyURL`: `string`) => `void`): `void` <br> 上传角色头像及全身照到服务器后发送到MGS|


## Functions

### UGCEditor <Score text="UGCEditor" /> 

• **UGCEditor**(`target`): `void` <Badge type="tip" text="client" />

UGC Editor使用的装饰器,避免数据被还原

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` |  目标 |

## Functions

### addClientListener <Score text="addClientListener" /> 

• **addClientListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="server" />

服务器监听客户端发来的事件

**`Groups`**

SCRIPITING


::: warning Precautions

应该在服务器端的逻辑里面使用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md), ...`params`: `unknown`[]) => `void` | 监听回调 Player 发送事件的客户端 target 事件内容 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addEditorPawnPanInputMovement <Score text="addEditorPawnPanInputMovement" /> 

• **addEditorPawnPanInputMovement**(`input`): `void` <Badge type="tip" text="client" />

添加对编辑器人物的输入 - 只作用于编辑器人物

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector2`](../classes/Type.Vector2.md) | 输入值 |

___

### addExitListener <Score text="addExitListener" /> 

• **addExitListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

添加退出游戏时执行的回调函数

**`Groups`**

SCRIPITING


::: warning Precautions

只在233悬浮球退出和PIE关闭窗口时生效。

:::

使用示例:调用方法
```ts
let listener = Events.addExitListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addFocusListener <Score text="addFocusListener" /> 

• **addFocusListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

添加窗口聚焦时执行的回调函数

**`Groups`**

SCRIPITING


::: warning Precautions

只在PIE模式下生效。

:::

使用示例:调用方法
```ts
let listener = Events.addFocusListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addLocalListener <Score text="addLocalListener" /> 

• **addLocalListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) 

监听本地事件

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addOnPauseListener <Score text="addOnPauseListener" /> 

• **addOnPauseListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

添加OnPause开始时执行的回调函数

**`Groups`**

SCRIPITING


::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

使用示例:调用方法
```ts
let listener = Events.addOnPauseListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addOnResumeListener <Score text="addOnResumeListener" /> 

• **addOnResumeListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

添加OnPause结束时执行的回调函数

**`Groups`**

SCRIPITING


::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告后回到游戏。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

使用示例:调用方法
```ts
let listener = Events.addOnResumeListener(this.testFunction);
public testFunction(leaveDuration: number) {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`leaveDuration`: `number`) => `void` | 需要触发的回调函数，leaveDuration指OnPause持续时长 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addPlayerJoinedListener <Score text="addPlayerJoinedListener" /> 

• **addPlayerJoinedListener**(`listener`): [`EventListener`](../classes/Events.EventListener.md) 

监听玩家进入room事件

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addPlayerLeftListener <Score text="addPlayerLeftListener" /> 

• **addPlayerLeftListener**(`listener`): [`EventListener`](../classes/Events.EventListener.md) 

监听玩家离开room事件

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`player`: [`Player`](../classes/Gameplay.Player.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addServerListener <Score text="addServerListener" /> 

• **addServerListener**(`eventName`, `listener`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

客户端监听服务器事件

**`Groups`**

SCRIPITING


::: warning Precautions

应在客户端逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 params 事件内容 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### addUnfocusedListener <Score text="addUnfocusedListener" /> 

• **addUnfocusedListener**(`callback`): [`EventListener`](../classes/Events.EventListener.md) <Badge type="tip" text="client" />

添加窗口失焦时执行的回调函数

**`Groups`**

SCRIPITING


::: warning Precautions

只在PIE模式下生效。

:::

使用示例:调用方法
```ts
let listener = Events.addUnfocusedListener(this.testFunction);
public testFunction() {
}
// 移除监听
listener.disconnect();
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | 需要触发的回调函数 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### asyncCaptureAvatar <Score text="asyncCaptureAvatar" /> 

• **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\> <Badge type="tip" text="client" />

异步对指定虚拟角色进行截取，截图保存在本地固定路径下

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING

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

**`Groups`**

SCRIPITING


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

#### Returns

`Promise`<`boolean`\>

保存成功或失败
## Functions

### autoExecute <Score text="autoExecute" /> 

• **autoExecute**(`fnName`): (`target?`: `unknown`) => `void` 

类装饰器-自动执行某个方法

**`Groups`**

SCRIPITING

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

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### beginActorTransformChange <Score text="beginActorTransformChange" /> 

• **beginActorTransformChange**(`target`): `void` <Badge type="tip" text="client" />

开始记录actor的transform属性

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### calculateActorEqualScale <Score text="calculateActorEqualScale" /> 

• **calculateActorEqualScale**(`currentScale`, `deltaScale`): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

计算actor的等比缩放

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• **convertScreenLocationToWorldSpace**(`ScreenX`, `ScreenY`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ScreenX` | `number` |  屏幕X轴坐标值 default: |
| `ScreenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果
___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenX` | `number` |  屏幕X轴坐标值 default: |
| `screenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果
___

### dispatchLocal <Score text="dispatchLocal" /> 

• **dispatchLocal**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) 

发送本地事件

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 事件内容 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回发送本地事件的结果
___

### dispatchToAllClient <Score text="dispatchToAllClient" /> 

• **dispatchToAllClient**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="server" />

服务器发送事件给所有客户端

**`Groups`**

SCRIPITING


::: warning Precautions

应在服务器逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回事件发送结果
___

### dispatchToClient <Score text="dispatchToClient" /> 

• **dispatchToClient**(`player`, `eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="server" />

服务器发送事件给指定客户端

**`Groups`**

SCRIPITING


::: warning Precautions

应在服务器逻辑里调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Player.md) | 客户端 |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

返回事件发送结果
___

### dispatchToServer <Score text="dispatchToServer" /> 

• **dispatchToServer**(`eventName`, `...params`): [`DispatchEventResult`](../enums/Events.DispatchEventResult.md) <Badge type="tip" text="client" />

客户端发送事件给服务器

**`Groups`**

SCRIPITING


::: warning Precautions

应在客户端逻辑里面调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | 事件名 |
| `...params` | `unknown`[] | 可变长参数 |

#### Returns

[`DispatchEventResult`](../enums/Events.DispatchEventResult.md)

___

### endActorPropertiesChange <Score text="endActorPropertiesChange" /> 

• **endActorPropertiesChange**(`target`): `void` <Badge type="tip" text="client" />

结束记录actor属性的撤销恢复

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

___

### endActorTransformChange <Score text="endActorTransformChange" /> 

• **endActorTransformChange**(`target`, `bIsGizmoActor?`): `void` <Badge type="tip" text="client" />

结束记录actor的transform

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |
| `bIsGizmoActor?` | `boolean` | 是否是gizmo actor default:false |

___

### getEditorPawnLocation <Score text="getEditorPawnLocation" /> 

• **getEditorPawnLocation**(): [`Vector`](../classes/Type.Vector.md) <Badge type="tip" text="client" />

返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物

**`Groups`**

SCRIPITING


#### Returns

[`Vector`](../classes/Type.Vector.md)

Vector 返回的位置
___

### getEditorPawnRotation <Score text="getEditorPawnRotation" /> 

• **getEditorPawnRotation**(): [`Rotation`](../classes/Type.Rotation.md) <Badge type="tip" text="client" />

返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物

**`Groups`**

SCRIPITING


#### Returns

[`Rotation`](../classes/Type.Rotation.md)

返回旋转的角度
___

### getGizmo <Score text="getGizmo" /> 

• **getGizmo**(): [`Gizmo`](../classes/MobileEditor.Gizmo.md) <Badge type="tip" text="client" />

获取编辑态的坐标轴,如果在运行态获取会返回空.刚进入游戏初始化主编辑UI时还未创建会返回空

**`Groups`**

SCRIPITING


#### Returns

[`Gizmo`](../classes/MobileEditor.Gizmo.md)

返回编辑态的坐标轴
___

### getHeadSculpture <Score text="getHeadSculpture" /> 

• **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void` <Badge type="tip" text="client" />

对指定虚拟角色进行截取后上传到服务器

**`Groups`**

SCRIPITING


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

### getOneFingerMoveGestureDelegate <Score text="getOneFingerMoveGestureDelegate" /> 

• **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取单指滑动的代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回单指滑动的代理
___

### getPinchGestureDelegate <Score text="getPinchGestureDelegate" /> 

• **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <Badge type="tip" text="client" />

获取挤压手势的代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

返回挤压手势的代理
___

### getSavedDir <Score text="getSavedDir" /> 

• **getSavedDir**(): `string` <Badge type="tip" text="client" />

获取截图的保存路径

**`Groups`**

SCRIPITING


#### Returns

`string`

保存路径的绝对路径
___

### getTapGestureDelegate <Score text="getTapGestureDelegate" /> 

• **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取点击事件的代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回的代理
___

### getTouchBeganGestureDelegate <Score text="getTouchBeganGestureDelegate" /> 

• **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指按下代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回手指按下时的代理
___

### getTouchData <Score text="getTouchData" /> 

• **getTouchData**(): [`Vector`](../classes/Type.Vector.md)[] <Badge type="tip" text="client" />

获取touch的数组

**`Groups`**

SCRIPITING


#### Returns

[`Vector`](../classes/Type.Vector.md)[]

返回一个10维数组Vector, x,y点击的位置,z代表点击的状态 只会出现0,1的情况
___

### getTouchEndGestureDelegate <Score text="getTouchEndGestureDelegate" /> 

• **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />

获取手指抬起代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理
___

### getTouchMoveGestureDelegate <Score text="getTouchMoveGestureDelegate" /> 

• **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指滑动代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回手指滑动的代理
___

### getTwoFingerMoveGestureDelegate <Score text="getTwoFingerMoveGestureDelegate" /> 

• **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取双指滑动的代理

**`Groups`**

SCRIPITING


#### Returns

[`MulticastDelegate`](../classes/Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Vector2.md)) => `void`\>

返回双指滑动的代理
___

### markActorRenderStateDirty <Score text="markActorRenderStateDirty" /> 

• **markActorRenderStateDirty**(`target`): `void` <Badge type="tip" text="client" />

标记Actor所有组件的渲染状态为脏

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 标记的对象 |

___

### mobileReleaseGame <Score text="mobileReleaseGame" /> 

• **mobileReleaseGame**(`InGameName`, `InExtraData?`): `Promise`<`boolean`\> 

移动端编辑器发布游戏

**`Groups`**

SCRIPITING


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGameName` | `string` | 游戏名称 |
| `InExtraData?` | `string` | 游戏扩展数据 default:"" |

#### Returns

`Promise`<`boolean`\>

保存成功或失败
___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldLocation` | [`Vector`](../classes/Type.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO
___

### recordingCharacterGif <Score text="recordingCharacterGif" /> 

• **recordingCharacterGif**(`Character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `picNum`, `recordingTime`): `void` <Badge type="tip" text="client" />

连续截图，生成GIF素材发送给服务器

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


___

### saveProject <Score text="saveProject" /> 

• **saveProject**(): `void` 

保存当前游戏项目

**`Groups`**

SCRIPITING


::: warning Precautions

只在ListenServer模式下调用生效，在PIE模式下无法调用

:::

___

### saveProperty <Score text="saveProperty" /> 

• **saveProperty**(`target`, `propertyKey`): `void` 

**`Groups`**

SCRIPITING

属性装饰器-永久存储属性

::: warning Precautions

用于设置数据类(继承Subdata的类)哪些属性是要永久存储的

:::


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Subdata`](../classes/Extension.Subdata.md) |  类实例 |
| `propertyKey` | `string` |  属性名 |
___

### screenShot <Score text="screenShot" /> 

• **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`): `void` <Badge type="tip" text="client" />

屏幕指定区域截图

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  双指移动限定的时间 |

___

### setPinchAngleTolerance <Score text="setPinchAngleTolerance" /> 

• **setPinchAngleTolerance**(`time`): `void` <Badge type="tip" text="client" />

挤压手势的偏差角度

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差角度 |

___

### setSingleSwipeTime <Score text="setSingleSwipeTime" /> 

• **setSingleSwipeTime**(`time`): `void` <Badge type="tip" text="client" />

单指移动的时间- 必须大于这个时间才会开始执行单指移动

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  单指移动的限定时间 |

___

### setSwipeTolerance <Score text="setSwipeTolerance" /> 

• **setSwipeTolerance**(`time`): `void` <Badge type="tip" text="client" />

双指移动的偏差量- 值越大误差则可以越大

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差值 |

___

### setTapTime <Score text="setTapTime" /> 

• **setTapTime**(`time`): `void` <Badge type="tip" text="client" />

tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move

**`Groups`**

SCRIPITING


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  tap限定的时间 |

___

### undo <Score text="undo" /> 

• **undo**(): `void` <Badge type="tip" text="client" />

执行撤销操作

**`Groups`**

SCRIPITING


___

### uploadScreenShot <Score text="uploadScreenShot" /> 

• **uploadScreenShot**(`filePath`, `fileType`, `callbackURL?`): `void` <Badge type="tip" text="client" />

上传角色头像或全身照到服务器后发送到MGS

**`Groups`**

SCRIPITING


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

**`Groups`**

SCRIPITING


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