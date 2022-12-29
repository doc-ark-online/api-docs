# MobileEditor <Badge type="tip" text="Namespace" />

## Table of contents

| Enumerations |
| :-----|
| [GizmoModeType](../enums/MobileEditor.MobileEditor.GizmoModeType.md) <br> gizmo类型|
| [SelectTapType](../enums/MobileEditor.MobileEditor.SelectTapType.md) <br> UGC 选中的单选或者多选|

| Classes |
| :-----|
| [EditorMode](../classes/MobileEditor.MobileEditor.EditorMode.md) <br> 移动编辑器模式切换|

| Functions |
| :-----|
| **[UGCEditor](MobileEditor.MobileEditor.md#ugceditor)**(`any`): `void` <br> UGC Editor使用的装饰器,避免数据被还原|
| **[addEditorPawnPanInputMovement](MobileEditor.MobileEditor.md#addeditorpawnpaninputmovement)**([`Vector2`](../classes/Type.Type.Vector2.md)): `void` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[asyncCaptureAvatar](MobileEditor.MobileEditor.md#asynccaptureavatar)**([`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md), [`Vector`](../classes/Type.Type.Vector.md), [`Rotation`](../classes/Type.Type.Rotation.md), [`Vector2`](../classes/Type.Type.Vector2.md), `boolean`, `number`, `string`): `Promise`<`string`\> <br> 异步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[asyncSaveProject](MobileEditor.MobileEditor.md#asyncsaveproject)**(): `Promise`<`boolean`\> <br> 保存当前游戏项目|
| **[beginActorPropertiesChange](MobileEditor.MobileEditor.md#beginactorpropertieschange)**(`Base`): `void` <br> 开始记录撤销恢复的actor属性|
| **[beginActorTransformChange](MobileEditor.MobileEditor.md#beginactortransformchange)**(`Base`): `void` <br> 开始记录actor的transform属性|
| **[captureAvatar](MobileEditor.MobileEditor.md#captureavatar)**([`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md), [`Vector`](../classes/Type.Type.Vector.md), [`Rotation`](../classes/Type.Type.Rotation.md), [`Vector2`](../classes/Type.Type.Vector2.md), `boolean`, `number`, `string`, (`dataString`: `string`) => `void`): `void` <br> 同步对指定虚拟角色进行截取，截图保存在本地固定路径下|
| **[endActorPropertiesChange](MobileEditor.MobileEditor.md#endactorpropertieschange)**(`Base`): `void` <br> 结束记录actor属性的撤销恢复|
| **[endActorTransformChange](MobileEditor.MobileEditor.md#endactortransformchange)**(`Base`, `boolean`): `void` <br> 结束记录actor的transform|
| **[getEditorPawnLocation](MobileEditor.MobileEditor.md#geteditorpawnlocation)**(): [`Vector`](../classes/Type.Type.Vector.md) <br> 返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物|
| **[getEditorPawnRotation](MobileEditor.MobileEditor.md#geteditorpawnrotation)**(): [`Rotation`](../classes/Type.Type.Rotation.md) <br> 返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物|
| **[getHeadSculpture](MobileEditor.MobileEditor.md#getheadsculpture)**([`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md), [`Vector`](../classes/Type.Type.Vector.md), [`Rotation`](../classes/Type.Type.Rotation.md), [`Vector2`](../classes/Type.Type.Vector2.md), `boolean`, `number`, `string`, (`dataString`: `string`) => `void`): `void` <br> 对指定虚拟角色进行截取后上传到服务器|
| **[getOneFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#getonefingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\> <br> 返回单指滑动的代理|
| **[getPinchGestureDelegate](MobileEditor.MobileEditor.md#getpinchgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\> <br> 返回挤压手势的代理|
| **[getSavedDir](MobileEditor.MobileEditor.md#getsaveddir)**(): `string` <br> 获取截图的保存路径|
| **[getTapGestureDelegate](MobileEditor.MobileEditor.md#gettapgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\> <br> 获取点击事件的代理|
| **[getTouchBeganGestureDelegate](MobileEditor.MobileEditor.md#gettouchbegangesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\> <br> 有手指在屏幕按下了|
| **[getTouchData](MobileEditor.MobileEditor.md#gettouchdata)**(): [`Vector`](../classes/Type.Type.Vector.md)[] <br> 获取touch的数组|
| **[getTouchEndGestureDelegate](MobileEditor.MobileEditor.md#gettouchendgesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <br> 有手指抬起了|
| **[getTouchMoveGestureDelegate](MobileEditor.MobileEditor.md#gettouchmovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\> <br> 手指在屏幕滑动|
| **[getTwoFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#gettwofingermovegesturedelegate)**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\> <br> 返回双指滑动的代理|
| **[mobileReleaseGame](MobileEditor.MobileEditor.md#mobilereleasegame)**(`string`): `void` <br> 移动端编辑器发布游戏|
| **[recordingCharacterGif](MobileEditor.MobileEditor.md#recordingcharactergif)**([`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md), [`Vector`](../classes/Type.Type.Vector.md), [`Rotation`](../classes/Type.Type.Rotation.md), [`Vector2`](../classes/Type.Type.Vector2.md), `boolean`, `number`, `number`, `number`): `void` <br> 连续截图，生成GIF素材发送给服务器|
| **[redo](MobileEditor.MobileEditor.md#redo)**(): `void` <br> 执行恢复操作|
| **[saveProject](MobileEditor.MobileEditor.md#saveproject)**(): `void` <br> 保存当前游戏项目|
| **[screenShot](MobileEditor.MobileEditor.md#screenshot)**([`Vector2`](../classes/Type.Type.Vector2.md), [`Vector2`](../classes/Type.Type.Vector2.md), `number`, `number`, (`dataString`: `string`) => `void`): `void` <br> 屏幕指定区域截图|
| **[screenShotExist](MobileEditor.MobileEditor.md#screenshotexist)**(`string`): `boolean` <br> 验证绝对路径下截图是否存在|
| **[sendShareId](MobileEditor.MobileEditor.md#sendshareid)**(`string`, `string`, `boolean`): `void` <br> 将角色数据ID连同角色截图一同发给MGS|
| **[setEditorCameraLocation](MobileEditor.MobileEditor.md#seteditorcameralocation)**([`Vector`](../classes/Type.Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraRotation](MobileEditor.MobileEditor.md#seteditorcamerarotation)**([`Rotation`](../classes/Type.Type.Rotation.md)): `boolean` <br> 添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorCameraTransform](MobileEditor.MobileEditor.md#seteditorcameratransform)**([`Transform`](../classes/Type.Type.Transform.md)): `boolean` <br> 设置编辑器摄像机的空间信息  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body|
| **[setEditorPawnLocation](MobileEditor.MobileEditor.md#seteditorpawnlocation)**([`Vector`](../classes/Type.Type.Vector.md)): `boolean` <br> 设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体|
| **[setEditorPawnRotation](MobileEditor.MobileEditor.md#seteditorpawnrotation)**([`Rotation`](../classes/Type.Type.Rotation.md)): `boolean` <br> 添加对编辑器人物的输入 - 只作用于编辑器人物|
| **[setEditorPawnTransform](MobileEditor.MobileEditor.md#seteditorpawntransform)**([`Transform`](../classes/Type.Type.Transform.md)): `boolean` <br> 设置编辑器人物的空间信息|
| **[setMultiSwipeTime](MobileEditor.MobileEditor.md#setmultiswipetime)**(`number`): `void` <br> 双指移动的时间- 必须大于这个时间才执行双指移动事件|
| **[setPinchAngleTolerance](MobileEditor.MobileEditor.md#setpinchangletolerance)**(`number`): `void` <br> 挤压手势的偏差角度|
| **[setSingleSwipeTime](MobileEditor.MobileEditor.md#setsingleswipetime)**(`number`): `void` <br> 单指移动的时间- 必须大于这个时间才会开始执行单指移动|
| **[setSwipeTolerance](MobileEditor.MobileEditor.md#setswipetolerance)**(`number`): `void` <br> 双指移动的偏差量- 值越大误差则可以越大|
| **[setTapTime](MobileEditor.MobileEditor.md#settaptime)**(`number`): `void` <br> tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move|
| **[undo](MobileEditor.MobileEditor.md#undo)**(): `void` <br> 执行撤销操作|
| **[uploadScreenShot](MobileEditor.MobileEditor.md#uploadscreenshot)**(`string`, `number`, (`responseURL`: `string`) => `void`): `void` <br> 上传角色头像或全身照到服务器后发送到MGS|
| **[uploadScreenShots](MobileEditor.MobileEditor.md#uploadscreenshots)**(`number`, `string`, `string`, (`porURL`: `string`, `bodyURL`: `string`) => `void`): `void` <br> 上传角色头像及全身照到服务器后发送到MGS|

## Functions

### UGCEditor

▸ **UGCEditor**(`target`): `void`

**`Description`**

UGC Editor使用的装饰器,避免数据被还原

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` |  目标 |

#### Returns

`void`

___

### addEditorPawnPanInputMovement

▸ **addEditorPawnPanInputMovement**(`input`): `void`

**`Description`**

添加对编辑器人物的输入 - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector2`](../classes/Type.Type.Vector2.md) | 输入值 |

#### Returns

`void`

___

### asyncCaptureAvatar

▸ **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\>

**`Description`**

异步对指定虚拟角色进行截取，截图保存在本地固定路径下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |

#### Returns

`Promise`<`string`\>

生成的截图的本地绝对路径

___

### asyncSaveProject

▸ **asyncSaveProject**(): `Promise`<`boolean`\>

**`Description`**

保存当前游戏项目

**`Effect`**

只在ListenServer模式下调用生效

**`Precautions`**

在PIE模式下无法调用

#### Returns

`Promise`<`boolean`\>

保存成功或失败

___

### beginActorPropertiesChange

▸ **beginActorPropertiesChange**(`target`): `void`

**`Description`**

开始记录撤销恢复的actor属性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

#### Returns

`void`

___

### beginActorTransformChange

▸ **beginActorTransformChange**(`target`): `void`

**`Description`**

开始记录actor的transform属性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

#### Returns

`void`

___

### captureAvatar

▸ **captureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void`

**`Description`**

同步对指定虚拟角色进行截取，截图保存在本地固定路径下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

#### Returns

`void`

___

### endActorPropertiesChange

▸ **endActorPropertiesChange**(`target`): `void`

**`Description`**

结束记录actor属性的撤销恢复

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |

#### Returns

`void`

___

### endActorTransformChange

▸ **endActorTransformChange**(`target`, `bIsGizmoActor?`): `void`

**`Description`**

结束记录actor的transform

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Base` | 记录的对象 |
| `bIsGizmoActor?` | `boolean` | 是否是gizmo actor default:false |

#### Returns

`void`

___

### getEditorPawnLocation

▸ **getEditorPawnLocation**(): [`Vector`](../classes/Type.Type.Vector.md)

**`Description`**

返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)

Vector 返回的位置

___

### getEditorPawnRotation

▸ **getEditorPawnRotation**(): [`Rotation`](../classes/Type.Type.Rotation.md)

**`Description`**

返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应Pitch , Yaw, Roll) - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Returns

[`Rotation`](../classes/Type.Type.Rotation.md)

返回旋转的角度

___

### getHeadSculpture

▸ **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void`

**`Description`**

对指定虚拟角色进行截取后上传到服务器

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) |  镜头相对位置 |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) |  镜头相对旋转 |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  视场; |
| `fileName` | `string` |  文件名 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

#### Returns

`void`

___

### getOneFingerMoveGestureDelegate

▸ **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回单指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回单指滑动的代理

___

### getPinchGestureDelegate

▸ **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

**`Description`**

返回挤压手势的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

返回挤压手势的代理

___

### getSavedDir

▸ **getSavedDir**(): `string`

**`Description`**

获取截图的保存路径

**`Effect`**

只在客户端调用生效

#### Returns

`string`

保存路径的绝对路径

___

### getTapGestureDelegate

▸ **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

获取点击事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回的代理

___

### getTouchBeganGestureDelegate

▸ **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

有手指在屏幕按下了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指按下时的代理

___

### getTouchData

▸ **getTouchData**(): [`Vector`](../classes/Type.Type.Vector.md)[]

**`Description`**

获取touch的数组

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)[]

返回一个10维数组Vector, x,y点击的位置,z代表点击的状态 只会出现0,1的情况

___

### getTouchEndGestureDelegate

▸ **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

**`Description`**

有手指抬起了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理

___

### getTouchMoveGestureDelegate

▸ **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

手指在屏幕滑动

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指滑动的代理

___

### getTwoFingerMoveGestureDelegate

▸ **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回双指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回双指滑动的代理

___

### mobileReleaseGame

▸ **mobileReleaseGame**(`InGameName`): `void`

**`Description`**

移动端编辑器发布游戏

**`Effect`**

只在ListenServer模式下调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InGameName` | `string` | 游戏名称 |

#### Returns

`void`

___

### recordingCharacterGif

▸ **recordingCharacterGif**(`Character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `picNum`, `recordingTime`): `void`

**`Description`**

连续截图，生成GIF素材发送给服务器

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza定制接口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) |  指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) |  镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) |  镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0) |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) |  截图尺寸 |
| `bShowOnly` | `boolean` |  true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` |  镜头FOV值 |
| `picNum` | `number` |  截取图像张数 |
| `recordingTime` | `number` |  截取持续时长 |

#### Returns

`void`

___

### redo

▸ **redo**(): `void`

**`Description`**

执行恢复操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### saveProject

▸ **saveProject**(): `void`

**`Description`**

保存当前游戏项目

**`Effect`**

只在ListenServer模式下调用生效

**`Precautions`**

在PIE模式下无法调用

#### Returns

`void`

___

### screenShot

▸ **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`): `void`

**`Description`**

屏幕指定区域截图

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | 分辨率 |
| `StartPoint` | [`Vector2`](../classes/Type.Type.Vector2.md) | 截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
| `Width` | `number` | 截图区域的宽度 |
| `Height` | `number` | 截图区域的高度 |
| `callback` | (`dataString`: `string`) => `void` |  获取本地截图路径 default:null |

#### Returns

`void`

___

### screenShotExist

▸ **screenShotExist**(`absPath`): `boolean`

**`Description`**

验证绝对路径下截图是否存在

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` |  图片的绝对路径 |

#### Returns

`boolean`

该文件是否存在

___

### sendShareId

▸ **sendShareId**(`absPath`, `shareId`, `bShowUuid`): `void`

**`Description`**

将角色数据ID连同角色截图一同发给MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza定制接口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absPath` | `string` |  分享截图的绝对路径 |
| `shareId` | `string` |  分享的角色数据id,可为空 |
| `bShowUuid` | `boolean` |  是否在显示账户的Uuid |

#### Returns

`void`

___

### setEditorCameraLocation

▸ **setEditorCameraLocation**(`input`): `boolean`

**`Description`**

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | 编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorCameraRotation

▸ **setEditorCameraRotation**(`input`): `boolean`

**`Description`**

添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | 输入值 |

#### Returns

`boolean`

bool 是否设置成功

___

### setEditorCameraTransform

▸ **setEditorCameraTransform**(`input`): `boolean`

**`Description`**

设置编辑器摄像机的空间信息  - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | 编辑器摄像机会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorPawnLocation

▸ **setEditorPawnLocation**(`input`): `boolean`

**`Description`**

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | 编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setEditorPawnRotation

▸ **setEditorPawnRotation**(`input`): `boolean`

**`Description`**

添加对编辑器人物的输入 - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | 输入值 |

#### Returns

`boolean`

bool 是否设置成功

___

### setEditorPawnTransform

▸ **setEditorPawnTransform**(`input`): `boolean`

**`Description`**

设置编辑器人物的空间信息

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | 编辑器人物会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

___

### setMultiSwipeTime

▸ **setMultiSwipeTime**(`time`): `void`

**`Description`**

双指移动的时间- 必须大于这个时间才执行双指移动事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  双指移动限定的时间 |

#### Returns

`void`

___

### setPinchAngleTolerance

▸ **setPinchAngleTolerance**(`time`): `void`

**`Description`**

挤压手势的偏差角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差角度 |

#### Returns

`void`

___

### setSingleSwipeTime

▸ **setSingleSwipeTime**(`time`): `void`

**`Description`**

单指移动的时间- 必须大于这个时间才会开始执行单指移动

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  单指移动的限定时间 |

#### Returns

`void`

___

### setSwipeTolerance

▸ **setSwipeTolerance**(`time`): `void`

**`Description`**

双指移动的偏差量- 值越大误差则可以越大

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  偏差值 |

#### Returns

`void`

___

### setTapTime

▸ **setTapTime**(`time`): `void`

**`Description`**

tap点击的时间间隔- 如果在这个时间以内算tap，大于这个时间则是move

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` |  tap限定的时间 |

#### Returns

`void`

___

### undo

▸ **undo**(): `void`

**`Description`**

执行撤销操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### uploadScreenShot

▸ **uploadScreenShot**(`filePath`, `fileType`, `callbackURL?`): `void`

**`Description`**

上传角色头像或全身照到服务器后发送到MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza定制接口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | 图片路径 |
| `fileType` | `number` | 图片类型 default:0-全身照,1-男性头像 2-女性头像 |
| `callbackURL?` | (`responseURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |

#### Returns

`void`

___

### uploadScreenShots

▸ **uploadScreenShots**(`gender`, `portraitPath`, `fullPicPath`, `callbackURL?`): `void`

**`Description`**

上传角色头像及全身照到服务器后发送到MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza定制接口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gender` | `number` | 角色性别，1-男 2-女 0-未知 |
| `portraitPath` | `string` | 头像照路径 |
| `fullPicPath` | `string` | 全身照路径 |
| `callbackURL?` | (`porURL`: `string`, `bodyURL`: `string`) => `void` | 获取上传后在服务器中的URL default:null，可选参数 |

#### Returns

`void`
