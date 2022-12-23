[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [MobileEditor](../modules/MobileEditor.md) / [MobileEditor](../modules/MobileEditor.MobileEditor.md) / EditorMode

# Class: EditorMode

[MobileEditor](../modules/MobileEditor.md).[MobileEditor](../modules/MobileEditor.MobileEditor.md).EditorMode

**`Author`**

wujie

**`Instance`**

**`Description`**

移动编辑器模式切换

**`Precautions`**

单例类，请使用instance获取对象

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](MobileEditor.MobileEditor.EditorMode.md#constructor)

### Properties

- [OnMobileEditorStateChangedDelegate](MobileEditor.MobileEditor.EditorMode.md#onmobileeditorstatechangeddelegate)

### Accessors

- [gizmoActor](MobileEditor.MobileEditor.EditorMode.md#gizmoactor)
- [gizmoActorRotation](MobileEditor.MobileEditor.EditorMode.md#gizmoactorrotation)
- [isMobileEditor](MobileEditor.MobileEditor.EditorMode.md#ismobileeditor)
- [isPermanentMobileEditor](MobileEditor.MobileEditor.EditorMode.md#ispermanentmobileeditor)
- [selectedActor](MobileEditor.MobileEditor.EditorMode.md#selectedactor)

### Methods

- [addEditorCharacterCameraFlexInput](MobileEditor.MobileEditor.EditorMode.md#addeditorcharactercameraflexinput)
- [addEditorCharacterDeltaOffset](MobileEditor.MobileEditor.EditorMode.md#addeditorcharacterdeltaoffset)
- [addEditorCharacterPitch](MobileEditor.MobileEditor.EditorMode.md#addeditorcharacterpitch)
- [addEditorCharacterYaw](MobileEditor.MobileEditor.EditorMode.md#addeditorcharacteryaw)
- [attachActorToGizmo](MobileEditor.MobileEditor.EditorMode.md#attachactortogizmo)
- [beginActorTransformChange](MobileEditor.MobileEditor.EditorMode.md#beginactortransformchange)
- [beginAttachChange](MobileEditor.MobileEditor.EditorMode.md#beginattachchange)
- [beginCombineActorChange](MobileEditor.MobileEditor.EditorMode.md#begincombineactorchange)
- [beginDeleteActorChange](MobileEditor.MobileEditor.EditorMode.md#begindeleteactorchange)
- [beginMaterialsChange](MobileEditor.MobileEditor.EditorMode.md#beginmaterialschange)
- [beginMaterialsChangeMulti](MobileEditor.MobileEditor.EditorMode.md#beginmaterialschangemulti)
- [beginMaterialsColorChange](MobileEditor.MobileEditor.EditorMode.md#beginmaterialscolorchange)
- [beginSpawnActorChange](MobileEditor.MobileEditor.EditorMode.md#beginspawnactorchange)
- [beginUnCombineActorChange](MobileEditor.MobileEditor.EditorMode.md#beginuncombineactorchange)
- [detachActorFormGizmo](MobileEditor.MobileEditor.EditorMode.md#detachactorformgizmo)
- [enableSelectActor](MobileEditor.MobileEditor.EditorMode.md#enableselectactor)
- [endActorTransformChange](MobileEditor.MobileEditor.EditorMode.md#endactortransformchange)
- [endCombineActorChange](MobileEditor.MobileEditor.EditorMode.md#endcombineactorchange)
- [endDeleteActorChange](MobileEditor.MobileEditor.EditorMode.md#enddeleteactorchange)
- [endMaterialsChange](MobileEditor.MobileEditor.EditorMode.md#endmaterialschange)
- [endMaterialsChangeMulti](MobileEditor.MobileEditor.EditorMode.md#endmaterialschangemulti)
- [endMaterialsColorChange](MobileEditor.MobileEditor.EditorMode.md#endmaterialscolorchange)
- [endMultiCombineActorChange](MobileEditor.MobileEditor.EditorMode.md#endmulticombineactorchange)
- [endSpawnActorChange](MobileEditor.MobileEditor.EditorMode.md#endspawnactorchange)
- [endUnCombineActorChange](MobileEditor.MobileEditor.EditorMode.md#enduncombineactorchange)
- [focusToActors](MobileEditor.MobileEditor.EditorMode.md#focustoactors)
- [focusToGizmo](MobileEditor.MobileEditor.EditorMode.md#focustogizmo)
- [isRedoEmpty](MobileEditor.MobileEditor.EditorMode.md#isredoempty)
- [isUndoEmpty](MobileEditor.MobileEditor.EditorMode.md#isundoempty)
- [onAppendChange](MobileEditor.MobileEditor.EditorMode.md#onappendchange)
- [onAttachChanged](MobileEditor.MobileEditor.EditorMode.md#onattachchanged)
- [onAttachRedoChanged](MobileEditor.MobileEditor.EditorMode.md#onattachredochanged)
- [onDeleteActorRedo](MobileEditor.MobileEditor.EditorMode.md#ondeleteactorredo)
- [onDeleteActorUndo](MobileEditor.MobileEditor.EditorMode.md#ondeleteactorundo)
- [onGizmoVisibleChanged](MobileEditor.MobileEditor.EditorMode.md#ongizmovisiblechanged)
- [onSelectActor](MobileEditor.MobileEditor.EditorMode.md#onselectactor)
- [saveProject](MobileEditor.MobileEditor.EditorMode.md#saveproject)
- [setGizmoActorLocation](MobileEditor.MobileEditor.EditorMode.md#setgizmoactorlocation)
- [setGizmoActorLocationAndRotation](MobileEditor.MobileEditor.EditorMode.md#setgizmoactorlocationandrotation)
- [setGizmoAxisColor](MobileEditor.MobileEditor.EditorMode.md#setgizmoaxiscolor)
- [setGizmoHighlightColor](MobileEditor.MobileEditor.EditorMode.md#setgizmohighlightcolor)
- [setGizmoScaleOffset](MobileEditor.MobileEditor.EditorMode.md#setgizmoscaleoffset)
- [showGizmoActor](MobileEditor.MobileEditor.EditorMode.md#showgizmoactor)
- [switchGizmoMode](MobileEditor.MobileEditor.EditorMode.md#switchgizmomode)
- [getInstance](MobileEditor.MobileEditor.EditorMode.md#getinstance)

## Constructors

### constructor

• **new EditorMode**()

## Properties

### OnMobileEditorStateChangedDelegate

• **OnMobileEditorStateChangedDelegate**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\>

**`Description`**

代理通知状态改变

#### Defined in

MobileEditor/index.d.ts:30

## Accessors

### gizmoActor

• `get` **gizmoActor**(): `MWMobileGizmoActor`

**`Description`**

获取坐标轴Actor

**`Effect`**

只在客户端调用生效

#### Returns

`MWMobileGizmoActor`

返回gizmoActor

#### Defined in

MobileEditor/index.d.ts:326

___

### gizmoActorRotation

• `set` **gizmoActorRotation**(`NewRotation`): `void`

**`Description`**

设置坐标轴旋转

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewRotation` | [`Rotation`](Type.Type.Rotation.md) | usage:新的旋转 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:109

___

### isMobileEditor

• `get` **isMobileEditor**(): `boolean`

**`Description`**

获取当前移动编辑器模式

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否是编辑器模式

#### Defined in

MobileEditor/index.d.ts:373

• `set` **isMobileEditor**(`bIsMobileEditor`): `void`

**`Description`**

切换移动编辑器模式

**`Effect`**

只在客户端调用生效

**`Precautions`**

不能添加空枚举 如 export enum test {},会影响数据还原

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bIsMobileEditor` | `boolean` | usage: true 则进 Editor Mode , false 进入 Play Mode |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:380

___

### isPermanentMobileEditor

• `get` **isPermanentMobileEditor**(): `boolean`

**`Description`**

获取初始化时候的状态

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

获取工程是否初始化时可以启动编辑器模式

#### Defined in

MobileEditor/index.d.ts:43

___

### selectedActor

• `get` **selectedActor**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前选中的对象

**`Effect`**

只在客户端调用生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回选中的actor

#### Defined in

MobileEditor/index.d.ts:343

## Methods

### addEditorCharacterCameraFlexInput

▸ **addEditorCharacterCameraFlexInput**(`Scale`): `void`

**`Description`**

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Scale` | `number` | usage: 输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:68

___

### addEditorCharacterDeltaOffset

▸ **addEditorCharacterDeltaOffset**(`Delta`, `Scale`): `void`

**`Description`**

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delta` | [`Vector`](Type.Type.Vector.md) | usage: 偏移delta |
| `Scale` | `number` | usage: 缩放值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:62

___

### addEditorCharacterPitch

▸ **addEditorCharacterPitch**(`Pitch`): `void`

**`Description`**

设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pitch` | `number` | usage:输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:55

___

### addEditorCharacterYaw

▸ **addEditorCharacterYaw**(`Yaw`): `void`

**`Description`**

设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Yaw` | `number` | usage: 输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:49

___

### attachActorToGizmo

▸ **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void`

**`Description`**

附加物体到坐标轴

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage: 附加到的actor |
| `IsRecordChange?` | `boolean` | usage: 是否支持撤销 default:false |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:81

___

### beginActorTransformChange

▸ **beginActorTransformChange**(`Actor`): `void`

**`Description`**

开始记录位置改变操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage: 记录的位置大小actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:144

___

### beginAttachChange

▸ **beginAttachChange**(`LastActor`, `NewActor`): `void`

**`Description`**

记录附加记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LastActor` | [`GameObject`](Core.Core.GameObject.md) | usage:上一个对象 |
| `NewActor` | [`GameObject`](Core.Core.GameObject.md) | usage:新的对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:317

___

### beginCombineActorChange

▸ **beginCombineActorChange**(): `void`

**`Description`**

开始记录打组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:188

___

### beginDeleteActorChange

▸ **beginDeleteActorChange**(): `void`

**`Description`**

开始记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:155

___

### beginMaterialsChange

▸ **beginMaterialsChange**(`Actor`): `void`

**`Description`**

开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录材质属性改变的actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:177

___

### beginMaterialsChangeMulti

▸ **beginMaterialsChangeMulti**(`Array`): `void`

**`Description`**

开始记录材质变换操作（支持记录多个StaticMesh）

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)[] | usage: 多个对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:183

___

### beginMaterialsColorChange

▸ **beginMaterialsColorChange**(`Actor`, `Color`): `void`

**`Description`**

开始记录材质颜色变换操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录的对象 |
| `Color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:239

___

### beginSpawnActorChange

▸ **beginSpawnActorChange**(): `void`

**`Description`**

开始记录创建操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:165

___

### beginUnCombineActorChange

▸ **beginUnCombineActorChange**(): `void`

**`Description`**

开始记录解组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:209

___

### detachActorFormGizmo

▸ **detachActorFormGizmo**(`Actor`): `void`

**`Description`**

移除物体到坐标轴

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage:移除的actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:87

___

### enableSelectActor

▸ **enableSelectActor**(`IsEnable`): `void`

**`Description`**

设置是否可以选中物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsEnable` | `boolean` | usage:是否可以选中 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:337

___

### endActorTransformChange

▸ **endActorTransformChange**(`Actor`): `void`

**`Description`**

结束记录位置改变操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage:记录的位置大小actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:150

___

### endCombineActorChange

▸ **endCombineActorChange**(`Actor`): `void`

**`Description`**

结束记录打组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage:打组后的锚点actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:194

___

### endDeleteActorChange

▸ **endDeleteActorChange**(): `void`

**`Description`**

结束记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:160

___

### endMaterialsChange

▸ **endMaterialsChange**(`Actor`, `MaterialID`): `void`

**`Description`**

结束记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录材质属性的actor |
| `MaterialID` | `string` | usage:材质ID |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:222

___

### endMaterialsChangeMulti

▸ **endMaterialsChangeMulti**(`Array`, `MaterialID`): `void`

**`Description`**

结束记录材质变换操作（支持记录多个StaticMesh）

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)[] | usage:操作的对象数组 |
| `MaterialID` | `string` | usage:材质ID |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:229

___

### endMaterialsColorChange

▸ **endMaterialsColorChange**(`Actor`, `Color`): `void`

**`Description`**

结束记录材质颜色变换操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录的actor |
| `Color` | [`LinearColor`](Type.Type.LinearColor.md) | usage:颜色 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:249

___

### endMultiCombineActorChange

▸ **endMultiCombineActorChange**(`Actor`, `Array`): `void`

**`Description`**

结束记录多组合并打组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage:合并打组后的锚点actor |
| `Array` | [`GameObject`](Core.Core.GameObject.md)[] | usage:合并打组前所有组锚点（或者单个物体）的actor数组 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:201

___

### endSpawnActorChange

▸ **endSpawnActorChange**(`Actor`): `void`

**`Description`**

结束记录创建操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](Core.Core.GameObject.md) | usage:记录的actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:171

___

### endUnCombineActorChange

▸ **endUnCombineActorChange**(`Array`): `void`

**`Description`**

结束记录解组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`GameObject`](Core.Core.GameObject.md)[] | usage:解组前所有组的锚点actor的数组 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:215

___

### focusToActors

▸ **focusToActors**(`Actors`): `void`

**`Description`**

聚焦到物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actors` | [[`GameObject`](Core.Core.GameObject.md)] | usage:对象actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:367

___

### focusToGizmo

▸ **focusToGizmo**(): `void`

**`Description`**

聚焦到坐标轴

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:331

___

### isRedoEmpty

▸ **isRedoEmpty**(): `boolean`

**`Description`**

是否可执行Redo操作true:表示当前没有可执行的步数，无法执行重做操作

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可执行Redo操作

#### Defined in

MobileEditor/index.d.ts:355

___

### isUndoEmpty

▸ **isUndoEmpty**(): `boolean`

**`Description`**

是否可执行Undo操作 true:表示当前没有可执行的步数，无法执行撤销操作

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可执行Undo操作

#### Defined in

MobileEditor/index.d.ts:349

___

### onAppendChange

▸ **onAppendChange**(`Delegate`): `void`

**`Description`**

主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> | usage:记录撤销恢复代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:361

___

### onAttachChanged

▸ **onAttachChanged**(`Delegate`): `void`

**`Description`**

附加代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`GameObject`](Core.Core.GameObject.md)) => `void`\> | usage:有actor 附加到gizmo的时候触发的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:308

___

### onAttachRedoChanged

▸ **onAttachRedoChanged**(`Delegate`): `void`

**`Description`**

附加代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`GameObject`](Core.Core.GameObject.md)) => `void`\> | usage:attach 撤销的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:278

___

### onDeleteActorRedo

▸ **onDeleteActorRedo**(`Delegate`): `void`

**`Description`**

Redo删除操作代理，会返回被删除的ActorID 和 资源ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\> | usage:返回被删除的actor代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:268

___

### onDeleteActorUndo

▸ **onDeleteActorUndo**(`Delegate`): `void`

**`Description`**

撤销删除操作代理，会返回被删除的Actor

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`GameObject`](Core.Core.GameObject.md), `OldGUID`: `string`, `NewString`: `string`) => `void`\> | usage:返回被删除的actor代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:258

___

### onGizmoVisibleChanged

▸ **onGizmoVisibleChanged**(`Delegate`): `void`

**`Description`**

坐标轴隐藏显示代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | usage:gizmo actor隐藏显示的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:300

___

### onSelectActor

▸ **onSelectActor**(`Delegate`): `void`

**`Description`**

选择物体代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: [`GameObject`](Core.Core.GameObject.md), `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\> | usage:选中actor的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:286

___

### saveProject

▸ **saveProject**(): `void`

**`Description`**

保存当前场景

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:37

___

### setGizmoActorLocation

▸ **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void`

**`Description`**

设置坐标轴位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Type.Vector.md) | usage:坐标轴位置 |
| `IsRecordChange?` | `boolean` | usage:是否记录本次坐标轴位置变动 default:true |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:100

___

### setGizmoActorLocationAndRotation

▸ **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void`

**`Description`**

设置坐标轴旋转和缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Type.Vector.md) | usage: 位置 |
| `NewRotation` | [`Rotation`](Type.Type.Rotation.md) | usage: 旋转 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:116

___

### setGizmoAxisColor

▸ **setGizmoAxisColor**(`InAxis`, `InAxisColor`): `void`

**`Description`**

设置坐标轴颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAxis` | `string` | usage: 单个坐标轴 |
| `InAxisColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 颜色 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:126

___

### setGizmoHighlightColor

▸ **setGizmoHighlightColor**(`InHighlightColor`): `void`

**`Description`**

设置坐标轴选中时的高亮颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InHighlightColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 高亮颜色 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:132

___

### setGizmoScaleOffset

▸ **setGizmoScaleOffset**(`InOffset`): `void`

**`Description`**

设置坐标轴模型整体缩放倍数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOffset` | `number` | usage: 缩放倍数 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:138

___

### showGizmoActor

▸ **showGizmoActor**(`showGizmoActor`): `void`

**`Description`**

设置坐标轴隐藏或者显示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `showGizmoActor` | `boolean` | usage:显隐坐标轴 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:74

___

### switchGizmoMode

▸ **switchGizmoMode**(`GizmoMode`): `void`

**`Description`**

切换坐标轴模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GizmoMode` | [`GizmoModeType`](../enums/MobileEditor.MobileEditor.GizmoModeType.md) | usage:模式 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:93

___

### getInstance

▸ `Static` **getInstance**(): [`EditorMode`](MobileEditor.MobileEditor.EditorMode.md)

**`Description`**

获取editorMode的单例

**`Effect`**

只在客户端调用生效

#### Returns

[`EditorMode`](MobileEditor.MobileEditor.EditorMode.md)

模式切换的单例

#### Defined in

MobileEditor/index.d.ts:26
