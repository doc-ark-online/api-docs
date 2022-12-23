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
- [getOnTapGesture](MobileEditor.MobileEditor.md#getontapgesture)
- [getOneFignerMoveGesture](MobileEditor.MobileEditor.md#getonefignermovegesture)
- [getPinchGesture](MobileEditor.MobileEditor.md#getpinchgesture)
- [getTouchBeganGesture](MobileEditor.MobileEditor.md#gettouchbegangesture)
- [getTouchData](MobileEditor.MobileEditor.md#gettouchdata)
- [getTouchEndGesture](MobileEditor.MobileEditor.md#gettouchendgesture)
- [getTouchMoveGesture](MobileEditor.MobileEditor.md#gettouchmovegesture)
- [getTwoFignerMoveGesture](MobileEditor.MobileEditor.md#gettwofignermovegesture)
- [mobileReleaseGame](MobileEditor.MobileEditor.md#mobilereleasegame)
- [recordingCharacterGif](MobileEditor.MobileEditor.md#recordingcharactergif)
- [redo](MobileEditor.MobileEditor.md#redo)
- [saveProject](MobileEditor.MobileEditor.md#saveproject)
- [saveScreenShot](MobileEditor.MobileEditor.md#savescreenshot)
- [screenShot](MobileEditor.MobileEditor.md#screenshot)
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
| `target` | `any` | usage: 目标 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:12

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
| `input` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:输入值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:389

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
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) | usage: 镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage: 镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage: 截图尺寸 |
| `bShowOnly` | `boolean` | usage: true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` | usage: 视场; |
| `fileName` | `string` | usage: 文件名 |

#### Returns

`Promise`<`string`\>

生成的截图的本地绝对路径

#### Defined in

MobileEditor/index.d.ts:673

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

#### Defined in

MobileEditor/index.d.ts:590

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
| `target` | [`Base`](../classes/Core.Core.Base.md) | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:545

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
| `target` | [`Base`](../classes/Core.Core.Base.md) | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:567

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
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) | usage: 镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage: 镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0); |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage: 截图尺寸 |
| `bShowOnly` | `boolean` | usage: true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` | usage: 视场; |
| `fileName` | `string` | usage: 文件名 |
| `callback` | (`dataString`: `string`) => `void` | usage: 获取本地截图路径 default:null |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:651

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
| `target` | [`Base`](../classes/Core.Core.Base.md) | usage:记录的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:551

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
| `target` | [`Base`](../classes/Core.Core.Base.md) | usage:记录的对象 |
| `bIsGizmoActor?` | `boolean` | usage:是否是gizmo actor default:false |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:574

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

#### Defined in

MobileEditor/index.d.ts:443

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

#### Defined in

MobileEditor/index.d.ts:437

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
| `character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) | usage: 镜头相对位置 |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage: 镜头相对旋转 |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage: 截图尺寸 |
| `bShowOnly` | `boolean` | usage: true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` | usage: 视场; |
| `fileName` | `string` | usage: 文件名 |
| `callback` | (`dataString`: `string`) => `void` | usage: 获取本地截图路径 default:null |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:694

___

### getOnTapGesture

▸ **getOnTapGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

获取点击事件的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`SelectType`: [`SelectTapType`](../enums/MobileEditor.MobileEditor.SelectTapType.md), `location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回的代理

#### Defined in

MobileEditor/index.d.ts:451

___

### getOneFignerMoveGesture

▸ **getOneFignerMoveGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回单指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回单指滑动的代理

#### Defined in

MobileEditor/index.d.ts:459

___

### getPinchGesture

▸ **getPinchGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

**`Description`**

返回挤压手势的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`Distance`: `number`) => `void`\>

返回挤压手势的代理

#### Defined in

MobileEditor/index.d.ts:475

___

### getTouchBeganGesture

▸ **getTouchBeganGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

有手指在屏幕按下了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指按下时的代理

#### Defined in

MobileEditor/index.d.ts:483

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

#### Defined in

MobileEditor/index.d.ts:537

___

### getTouchEndGesture

▸ **getTouchEndGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

**`Description`**

有手指抬起了

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\>

返回抬起手指时候的代理

#### Defined in

MobileEditor/index.d.ts:499

___

### getTouchMoveGesture

▸ **getTouchMoveGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

手指在屏幕滑动

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回手指滑动的代理

#### Defined in

MobileEditor/index.d.ts:491

___

### getTwoFignerMoveGesture

▸ **getTwoFignerMoveGesture**(): [`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

**`Description`**

返回双指滑动的代理

**`Effect`**

只在客户端调用生效

#### Returns

[`MulticastDelegate`](../classes/Type.Type.MulticastDelegate.md)<(`location`: [`Vector2`](../classes/Type.Type.Vector2.md)) => `void`\>

返回双指滑动的代理

#### Defined in

MobileEditor/index.d.ts:467

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
| `InGameName` | `string` | usage:游戏名称 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:596

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
| `Character` | [`CharacterBase`](../classes/Gameplay.Gameplay.CharacterBase.md) | usage: 指定截取GIF的Character |
| `relativeLocation` | [`Vector`](../classes/Type.Type.Vector.md) | usage: 镜头相对位置 ScreenShot()中默认为Vector(35, 0, 50) |
| `relativeRotation` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage: 镜头相对旋转 ScreenShot()中默认为Rotation(0, 180, 0) |
| `resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage: 截图尺寸 |
| `bShowOnly` | `boolean` | usage: true时只截取角色，背景Alpha值置为0 |
| `fov` | `number` | usage: 镜头FOV值 |
| `picNum` | `number` | usage: 截取图像张数 |
| `recordingTime` | `number` | usage: 截取持续时长 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:745

___

### redo

▸ **redo**(): `void`

**`Description`**

执行恢复操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:561

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

#### Defined in

MobileEditor/index.d.ts:583

___

### saveScreenShot

▸ **saveScreenShot**(`gender`, `portraitPath`, `fullPicPath`, `callbackURL?`): `void`

**`Description`**

保存角色头像到服务器后发送到MGS

**`Effect`**

只在客户端调用生效

**`Precautions`**

Playza定制接口

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gender` | `number` | usage:1-男 2-女 0-未知 |
| `portraitPath` | `string` | usage:头像照路径 |
| `fullPicPath` | `string` | usage:全身照路径 |
| `callbackURL?` | (`porURL`: `string`, `bodyURL`: `string`) => `void` | usage:获取上传后在服务器中的URL default:null |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:713

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
| `Resolution` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:分辨率 |
| `StartPoint` | [`Vector2`](../classes/Type.Type.Vector2.md) | usage:截图区域的左上角起始点(屏幕左上角即为(0,0)点) |
| `Width` | `number` | usage:截图区域的宽度 |
| `Height` | `number` | usage:截图区域的高度 |
| `callback` | (`dataString`: `string`) => `void` | usage: 获取本地截图路径 default:null |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:632

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
| `absPath` | `string` | usage: 分享截图的绝对路径 |
| `shareId` | `string` | usage: 分享的角色数据id,可为空 |
| `bShowUuid` | `boolean` | usage: 是否在显示账户的Uuid |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:727

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
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | usage:编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:424

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
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:输入值 |

#### Returns

`boolean`

bool 是否设置成功

#### Defined in

MobileEditor/index.d.ts:417

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
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | usage:编辑器摄像机会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:431

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
| `input` | [`Vector`](../classes/Type.Type.Vector.md) | usage:编辑器人物会被设置到的位置 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:403

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
| `input` | [`Rotation`](../classes/Type.Type.Rotation.md) | usage:输入值 |

#### Returns

`boolean`

bool 是否设置成功

#### Defined in

MobileEditor/index.d.ts:396

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
| `input` | [`Transform`](../classes/Type.Type.Transform.md) | usage:编辑器人物会被设置到的位置旋转缩放 |

#### Returns

`boolean`

返回是否设置成功 - 场景中无编辑器人物时会失败

#### Defined in

MobileEditor/index.d.ts:410

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
| `time` | `number` | usage: 双指移动限定的时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:525

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
| `time` | `number` | usage: 偏差角度 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:519

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
| `time` | `number` | usage: 单指移动的限定时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:513

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
| `time` | `number` | usage: 偏差值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:531

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
| `time` | `number` | usage: tap限定的时间 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:507

___

### undo

▸ **undo**(): `void`

**`Description`**

执行撤销操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:556
