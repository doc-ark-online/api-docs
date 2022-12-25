[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [MobileEditor](MobileEditor.md) / MobileEditor

# Namespace: MobileEditor

[MobileEditor](MobileEditor.md).MobileEditor

## Table of contents

### Enumerations

- [GizmoModeType](../enums/MobileEditor.MobileEditor.GizmoModeType.md)
- [SelectTapType](../enums/MobileEditor.MobileEditor.SelectTapType.md)

### Classes

- [EditorMode](../classes/MobileEditor.MobileEditor.EditorMode.md)

### Functions

- [UGCEditor](MobileEditor.MobileEditor.md#ugceditor)
- [addEditorPawnPanInputMovement](MobileEditor.MobileEditor.md#addeditorpawnpaninputmovement)
- [asyncCaptureAvatar](MobileEditor.MobileEditor.md#asynccaptureavatar)
- [asyncSaveProject](MobileEditor.MobileEditor.md#asyncsaveproject)
- [beginActorPropertiesChange](MobileEditor.MobileEditor.md#beginactorpropertieschange)
- [beginActorTransformChange](MobileEditor.MobileEditor.md#beginactortransformchange)
- [captureAvatar](MobileEditor.MobileEditor.md#captureavatar)
- [endActorPropertiesChange](MobileEditor.MobileEditor.md#endactorpropertieschange)
- [endActorTransformChange](MobileEditor.MobileEditor.md#endactortransformchange)
- [getEditorPawnLocation](MobileEditor.MobileEditor.md#geteditorpawnlocation)
- [getEditorPawnRotation](MobileEditor.MobileEditor.md#geteditorpawnrotation)
- [getHeadSculpture](MobileEditor.MobileEditor.md#getheadsculpture)
- [getOneFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#getonefingermovegesturedelegate)
- [getPinchGestureDelegate](MobileEditor.MobileEditor.md#getpinchgesturedelegate)
- [getSavedDir](MobileEditor.MobileEditor.md#getsaveddir)
- [getTapGestureDelegate](MobileEditor.MobileEditor.md#gettapgesturedelegate)
- [getTouchBeganGestureDelegate](MobileEditor.MobileEditor.md#gettouchbegangesturedelegate)
- [getTouchData](MobileEditor.MobileEditor.md#gettouchdata)
- [getTouchEndGestureDelegate](MobileEditor.MobileEditor.md#gettouchendgesturedelegate)
- [getTouchMoveGestureDelegate](MobileEditor.MobileEditor.md#gettouchmovegesturedelegate)
- [getTwoFingerMoveGestureDelegate](MobileEditor.MobileEditor.md#gettwofingermovegesturedelegate)
- [mobileReleaseGame](MobileEditor.MobileEditor.md#mobilereleasegame)
- [recordingCharacterGif](MobileEditor.MobileEditor.md#recordingcharactergif)
- [redo](MobileEditor.MobileEditor.md#redo)
- [saveProject](MobileEditor.MobileEditor.md#saveproject)
- [screenShot](MobileEditor.MobileEditor.md#screenshot)
- [screenShotExist](MobileEditor.MobileEditor.md#screenshotexist)
- [sendShareId](MobileEditor.MobileEditor.md#sendshareid)
- [setEditorCameraLocation](MobileEditor.MobileEditor.md#seteditorcameralocation)
- [setEditorCameraRotation](MobileEditor.MobileEditor.md#seteditorcamerarotation)
- [setEditorCameraTransform](MobileEditor.MobileEditor.md#seteditorcameratransform)
- [setEditorPawnLocation](MobileEditor.MobileEditor.md#seteditorpawnlocation)
- [setEditorPawnRotation](MobileEditor.MobileEditor.md#seteditorpawnrotation)
- [setEditorPawnTransform](MobileEditor.MobileEditor.md#seteditorpawntransform)
- [setMultiSwipeTime](MobileEditor.MobileEditor.md#setmultiswipetime)
- [setPinchAngleTolerance](MobileEditor.MobileEditor.md#setpinchangletolerance)
- [setSingleSwipeTime](MobileEditor.MobileEditor.md#setsingleswipetime)
- [setSwipeTolerance](MobileEditor.MobileEditor.md#setswipetolerance)
- [setTapTime](MobileEditor.MobileEditor.md#settaptime)
- [undo](MobileEditor.MobileEditor.md#undo)
- [uploadScreenShot](MobileEditor.MobileEditor.md#uploadscreenshot)
- [uploadScreenShots](MobileEditor.MobileEditor.md#uploadscreenshots)

## Functions

### UGCEditor

▸ **UGCEditor**(`target`): `void`

**`Description`**

UGC Editor 使用的装饰器,避免数据被还原

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type  | Description |
| :------- | :---- | :---------- |
| `target` | `any` | usage: 目标 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:12

---

### addEditorPawnPanInputMovement

▸ **addEditorPawnPanInputMovement**(`input`): `void`

**`Description`**

添加对编辑器人物的输入 - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                         | Description  |
| :------ | :------------------------------------------- | :----------- |
| `input` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:输入值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:401

---

### asyncCaptureAvatar

▸ **asyncCaptureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`): `Promise`<`string`\>

**`Description`**

异步对指定虚拟角色进行截取，截图保存在本地固定路径下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                                             | Description                                                   |
| :----------------- | :--------------------------------------------------------------- | :------------------------------------------------------------ |
| `character`        | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取 GIF 的 Character                              |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md)                       | usage: 镜头相对位置 ScreenShot()中默认为 Vector(35, 0, 50)    |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md)                   | usage: 镜头相对旋转 ScreenShot()中默认为 Rotation(0, 180, 0); |
| `resolution`       | [`Vector2`](../classes/Type.Type.Vector2.md)                     | usage: 截图尺寸                                               |
| `bShowOnly`        | `boolean`                                                        | usage: true 时只截取角色，背景 Alpha 值置为 0                 |
| `fov`              | `number`                                                         | usage: 视场;                                                  |
| `fileName`         | `string`                                                         | usage: 文件名                                                 |

#### Returns

`Promise`<`string`\>

生成的截图的本地绝对路径

#### Defined in

MobileEditor/index.d.ts:685

---

### asyncSaveProject

▸ **asyncSaveProject**(): `Promise`<`boolean`\>

**`Description`**

保存当前游戏项目

**`Effect`**

只在 ListenServer 模式下调用生效

**`Precautions`**

在 PIE 模式下无法调用

#### Returns

`Promise`<`boolean`\>

保存成功或失败

#### Defined in

MobileEditor/index.d.ts:602

---

### beginActorPropertiesChange

▸ **beginActorPropertiesChange**(`target`): `void`

**`Description`**

开始记录撤销恢复的 actor 属性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type   | Description      |
| :------- | :----- | :--------------- |
| `target` | `Base` | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:557

---

### beginActorTransformChange

▸ **beginActorTransformChange**(`target`): `void`

**`Description`**

开始记录 actor 的 transform 属性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type   | Description      |
| :------- | :----- | :--------------- |
| `target` | `Base` | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:579

---

### captureAvatar

▸ **captureAvatar**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void`

**`Description`**

同步对指定虚拟角色进行截取，截图保存在本地固定路径下

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                                             | Description                                                   |
| :----------------- | :--------------------------------------------------------------- | :------------------------------------------------------------ |
| `character`        | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取 GIF 的 Character                              |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md)                       | usage: 镜头相对位置 ScreenShot()中默认为 Vector(35, 0, 50)    |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md)                   | usage: 镜头相对旋转 ScreenShot()中默认为 Rotation(0, 180, 0); |
| `resolution`       | [`Vector2`](../classes/Type.Type.Vector2.md)                     | usage: 截图尺寸                                               |
| `bShowOnly`        | `boolean`                                                        | usage: true 时只截取角色，背景 Alpha 值置为 0                 |
| `fov`              | `number`                                                         | usage: 视场;                                                  |
| `fileName`         | `string`                                                         | usage: 文件名                                                 |
| `callback`         | (`dataString`: `string`) => `void`                               | usage: 获取本地截图路径 default:null                          |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:663

---

### endActorPropertiesChange

▸ **endActorPropertiesChange**(`target`): `void`

**`Description`**

结束记录 actor 属性的撤销恢复

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type   | Description      |
| :------- | :----- | :--------------- |
| `target` | `Base` | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:563

---

### endActorTransformChange

▸ **endActorTransformChange**(`target`, `bIsGizmoActor?`): `void`

**`Description`**

结束记录 actor 的 transform

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type      | Description                            |
| :--------------- | :-------- | :------------------------------------- |
| `target`         | `Base`    | usage:记录的对象                       |
| `bIsGizmoActor?` | `boolean` | usage:是否是 gizmo actor default:false |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:586

---

### getEditorPawnLocation

▸ **getEditorPawnLocation**(): [`Vector`](../classes/Type.Type.Vector.md)

**`Description`**

返回编辑器人物摄像机和人物位置(为同一个) - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)

Vector 返回的位置

#### Defined in

MobileEditor/index.d.ts:455

---

### getEditorPawnRotation

▸ **getEditorPawnRotation**(): [`Rotation`](../classes/Type.Type.Rotation.md)

**`Description`**

返回编辑器人物摄像机和人物旋转(为同一个,x,y, z 对应 Pitch , Yaw, Roll) - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Returns

[`Rotation`](../classes/Type.Type.Rotation.md)

返回旋转的角度

#### Defined in

MobileEditor/index.d.ts:449

---

### getHeadSculpture

▸ **getHeadSculpture**(`character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `fileName`, `callback`): `void`

**`Description`**

对指定虚拟角色进行截取后上传到服务器

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                                             | Description                                   |
| :----------------- | :--------------------------------------------------------------- | :-------------------------------------------- |
| `character`        | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取 GIF 的 Character              |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md)                       | usage: 镜头相对位置                           |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md)                   | usage: 镜头相对旋转                           |
| `resolution`       | [`Vector2`](../classes/Type.Type.Vector2.md)                     | usage: 截图尺寸                               |
| `bShowOnly`        | `boolean`                                                        | usage: true 时只截取角色，背景 Alpha 值置为 0 |
| `fov`              | `number`                                                         | usage: 视场;                                  |
| `fileName`         | `string`                                                         | usage: 文件名                                 |
| `callback`         | (`dataString`: `string`) => `void`                               | usage: 获取本地截图路径 default:null          |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:706

---

### getOneFingerMoveGestureDelegate

▸ **getOneFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回单指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回单指滑动的代理

#### Defined in

MobileEditor/index.d.ts:471

---

### getPinchGestureDelegate

▸ **getPinchGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

**`Description`**

返回挤压手势的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

返回挤压手势的代理

#### Defined in

MobileEditor/index.d.ts:487

---

### getSavedDir

▸ **getSavedDir**(): `string`

**`Description`**

获取截图的保存路径

**`Effect`**

只在客户端调用生效

#### Returns

`string`

保存路径的绝对路径

#### Defined in

MobileEditor/index.d.ts:756

---

### getTapGestureDelegate

▸ **getTapGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

获取点击事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回的代理

#### Defined in

MobileEditor/index.d.ts:463

---

### getTouchBeganGestureDelegate

▸ **getTouchBeganGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

有手指在屏幕按下了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指按下时的代理

#### Defined in

MobileEditor/index.d.ts:495

---

### getTouchData

▸ **getTouchData**(): [`Vector`](../classes/Type.Type.Vector.md)[]

**`Description`**

获取 touch 的数组

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector`](../classes/Type.Type.Vector.md)[]

返回一个 10 维数组 Vector, x,y 点击的位置,z 代表点击的状态 只会出现 0,1 的情况

#### Defined in

MobileEditor/index.d.ts:549

---

### getTouchEndGestureDelegate

▸ **getTouchEndGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

**`Description`**

有手指抬起了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理

#### Defined in

MobileEditor/index.d.ts:511

---

### getTouchMoveGestureDelegate

▸ **getTouchMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

手指在屏幕滑动

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指滑动的代理

#### Defined in

MobileEditor/index.d.ts:503

---

### getTwoFingerMoveGestureDelegate

▸ **getTwoFingerMoveGestureDelegate**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回双指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回双指滑动的代理

#### Defined in

MobileEditor/index.d.ts:479

---

### mobileReleaseGame

▸ **mobileReleaseGame**(`InGameName`): `void`

**`Description`**

移动端编辑器发布游戏

**`Effect`**

只在 ListenServer 模式下调用生效

#### Parameters

| Name         | Type     | Description    |
| :----------- | :------- | :------------- |
| `InGameName` | `string` | usage:游戏名称 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:608

---

### recordingCharacterGif

▸ **recordingCharacterGif**(`Character`, `relativeLocation`, `relativeRotation`, `resolution`, `bShowOnly`, `fov`, `picNum`, `recordingTime`): `void`

**`Description`**

连续截图，生成 GIF 素材发送给服务器

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza 定制接口

#### Parameters

| Name               | Type                                                             | Description                                                  |
| :----------------- | :--------------------------------------------------------------- | :----------------------------------------------------------- |
| `Character`        | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取 GIF 的 Character                             |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md)                       | usage: 镜头相对位置 ScreenShot()中默认为 Vector(35, 0, 50)   |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md)                   | usage: 镜头相对旋转 ScreenShot()中默认为 Rotation(0, 180, 0) |
| `resolution`       | [`Vector2`](../classes/Type.Type.Vector2.md)                     | usage: 截图尺寸                                              |
| `bShowOnly`        | `boolean`                                                        | usage: true 时只截取角色，背景 Alpha 值置为 0                |
| `fov`              | `number`                                                         | usage: 镜头 FOV 值                                           |
| `picNum`           | `number`                                                         | usage: 截取图像张数                                          |
| `recordingTime`    | `number`                                                         | usage: 截取持续时长                                          |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:783

---

### redo

▸ **redo**(): `void`

**`Description`**

执行恢复操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:573

---

### saveProject

▸ **saveProject**(): `void`

**`Description`**

保存当前游戏项目

**`Effect`**

只在 ListenServer 模式下调用生效

**`Precautions`**

在 PIE 模式下无法调用

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:595

---

### screenShot

▸ **screenShot**(`Resolution`, `StartPoint`, `Width`, `Height`, `callback`): `void`

**`Description`**

屏幕指定区域截图

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                         | Description                                         |
| :----------- | :------------------------------------------- | :-------------------------------------------------- |
| `Resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:分辨率                                        |
| `StartPoint` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
| `Width`      | `number`                                     | usage:截图区域的宽度                                |
| `Height`     | `number`                                     | usage:截图区域的高度                                |
| `callback`   | (`dataString`: `string`) => `void`           | usage: 获取本地截图路径 default:null                |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:644

---

### screenShotExist

▸ **screenShotExist**(`absPath`): `boolean`

**`Description`**

验证绝对路径下截图是否存在

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `absPath` | `string` | usage: 图片的绝对路径 |

#### Returns

`boolean`

该文件是否存在

#### Defined in

MobileEditor/index.d.ts:750

---

### sendShareId

▸ **sendShareId**(`absPath`, `shareId`, `bShowUuid`): `void`

**`Description`**

将角色数据 ID 连同角色截图一同发给 MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza 定制接口

#### Parameters

| Name        | Type      | Description                     |
| :---------- | :-------- | :------------------------------ |
| `absPath`   | `string`  | usage: 分享截图的绝对路径       |
| `shareId`   | `string`  | usage: 分享的角色数据 id,可为空 |
| `bShowUuid` | `boolean` | usage: 是否在显示账户的 Uuid    |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:765

---

### setEditorCameraLocation

▸ **setEditorCameraLocation**(`input`): `boolean`

**`Description`**

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物 body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                       | Description                      |
| :------ | :----------------------------------------- | :------------------------------- |
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | usage:编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:436

---

### setEditorCameraRotation

▸ **setEditorCameraRotation**(`input`): `boolean`

**`Description`**

添加对编辑器摄像机的输入 - 只作用于编辑器 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物 body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                           | Description  |
| :------ | :--------------------------------------------- | :----------- |
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:输入值 |

#### Returns

`boolean`

bool 是否设置成功

#### Defined in

MobileEditor/index.d.ts:429

---

### setEditorCameraTransform

▸ **setEditorCameraTransform**(`input`): `boolean`

**`Description`**

设置编辑器摄像机的空间信息 - 目前编辑器人物和相机是一体的,设置摄像机和人物效果都相同 因为并无实体的人物 body

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                             | Description                                |
| :------ | :----------------------------------------------- | :----------------------------------------- |
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | usage:编辑器摄像机会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:443

---

### setEditorPawnLocation

▸ **setEditorPawnLocation**(`input`): `boolean`

**`Description`**

设置编辑器人物的位置,瞬移不会扫描途中可碰撞物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                       | Description                      |
| :------ | :----------------------------------------- | :------------------------------- |
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | usage:编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:415

---

### setEditorPawnRotation

▸ **setEditorPawnRotation**(`input`): `boolean`

**`Description`**

添加对编辑器人物的输入 - 只作用于编辑器人物

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                           | Description  |
| :------ | :--------------------------------------------- | :----------- |
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:输入值 |

#### Returns

`boolean`

bool 是否设置成功

#### Defined in

MobileEditor/index.d.ts:408

---

### setEditorPawnTransform

▸ **setEditorPawnTransform**(`input`): `boolean`

**`Description`**

设置编辑器人物的空间信息

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                             | Description                              |
| :------ | :----------------------------------------------- | :--------------------------------------- |
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | usage:编辑器人物会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:422

---

### setMultiSwipeTime

▸ **setMultiSwipeTime**(`time`): `void`

**`Description`**

双指移动的时间- 必须大于这个时间才执行双指移动事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description               |
| :----- | :------- | :------------------------ |
| `time` | `number` | usage: 双指移动限定的时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:537

---

### setPinchAngleTolerance

▸ **setPinchAngleTolerance**(`time`): `void`

**`Description`**

挤压手势的偏差角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description     |
| :----- | :------- | :-------------- |
| `time` | `number` | usage: 偏差角度 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:531

---

### setSingleSwipeTime

▸ **setSingleSwipeTime**(`time`): `void`

**`Description`**

单指移动的时间- 必须大于这个时间才会开始执行单指移动

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description               |
| :----- | :------- | :------------------------ |
| `time` | `number` | usage: 单指移动的限定时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:525

---

### setSwipeTolerance

▸ **setSwipeTolerance**(`time`): `void`

**`Description`**

双指移动的偏差量- 值越大误差则可以越大

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description   |
| :----- | :------- | :------------ |
| `time` | `number` | usage: 偏差值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:543

---

### setTapTime

▸ **setTapTime**(`time`): `void`

**`Description`**

tap 点击的时间间隔- 如果在这个时间以内算 tap，大于这个时间则是 move

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description           |
| :----- | :------- | :-------------------- |
| `time` | `number` | usage: tap 限定的时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:519

---

### undo

▸ **undo**(): `void`

**`Description`**

执行撤销操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:568

---

### uploadScreenShot

▸ **uploadScreenShot**(`filePath`, `fileType`, `callbackURL?`): `void`

**`Description`**

上传角色头像或全身照到服务器后发送到 MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza 定制接口

#### Parameters

| Name           | Type                                | Description                                             |
| :------------- | :---------------------------------- | :------------------------------------------------------ |
| `filePath`     | `string`                            | usage:图片路径                                          |
| `fileType`     | `number`                            | usage:图片类型 default:0-全身照,1-男性头像 2-女性头像   |
| `callbackURL?` | (`responseURL`: `string`) => `void` | usage:获取上传后在服务器中的 URL default:null，可选参数 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:739

---

### uploadScreenShots

▸ **uploadScreenShots**(`gender`, `portraitPath`, `fullPicPath`, `callbackURL?`): `void`

**`Description`**

上传角色头像及全身照到服务器后发送到 MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza 定制接口

#### Parameters

| Name           | Type                                                | Description                                             |
| :------------- | :-------------------------------------------------- | :------------------------------------------------------ |
| `gender`       | `number`                                            | usage:角色性别，1-男 2-女 0-未知                        |
| `portraitPath` | `string`                                            | usage:头像照路径                                        |
| `fullPicPath`  | `string`                                            | usage:全身照路径                                        |
| `callbackURL?` | (`porURL`: `string`, `bodyURL`: `string`) => `void` | usage:获取上传后在服务器中的 URL default:null，可选参数 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:725
