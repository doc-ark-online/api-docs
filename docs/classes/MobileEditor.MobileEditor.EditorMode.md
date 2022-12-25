[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [MobileEditor](../modules/MobileEditor.md) / [MobileEditor](../modules/MobileEditor.MobileEditor.md) / EditorMode

# Class: EditorMode

[MobileEditor](../modules/MobileEditor.md).[MobileEditor](../modules/MobileEditor.MobileEditor.md).EditorMode

**`Author`**

jie.wu

**`Instance`**

**`Description`**

移动编辑器模式切换

**`Precautions`**

单例类，请使用 instance 获取对象

**`Network Status`**

usage:客户端

## Table of contents

### Constructors

- [constructor](MobileEditor.MobileEditor.EditorMode.md#constructor)

### Properties

- [onMobileEditorStateChanged](MobileEditor.MobileEditor.EditorMode.md#onmobileeditorstatechanged)

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
- [beginUncombinedActorChange](MobileEditor.MobileEditor.EditorMode.md#beginuncombinedactorchange)
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
- [endUncombinedActorChange](MobileEditor.MobileEditor.EditorMode.md#enduncombinedactorchange)
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
- [setAdsorbDistance](MobileEditor.MobileEditor.EditorMode.md#setadsorbdistance)
- [setGizmoActorLocation](MobileEditor.MobileEditor.EditorMode.md#setgizmoactorlocation)
- [setGizmoActorLocationAndRotation](MobileEditor.MobileEditor.EditorMode.md#setgizmoactorlocationandrotation)
- [setGizmoAxisColor](MobileEditor.MobileEditor.EditorMode.md#setgizmoaxiscolor)
- [setGizmoHighlightColor](MobileEditor.MobileEditor.EditorMode.md#setgizmohighlightcolor)
- [setGizmoScaleOffset](MobileEditor.MobileEditor.EditorMode.md#setgizmoscaleoffset)
- [setIsAdsorb](MobileEditor.MobileEditor.EditorMode.md#setisadsorb)
- [showGizmoActor](MobileEditor.MobileEditor.EditorMode.md#showgizmoactor)
- [switchGizmoMode](MobileEditor.MobileEditor.EditorMode.md#switchgizmomode)
- [getInstance](MobileEditor.MobileEditor.EditorMode.md#getinstance)

## Constructors

### constructor

• **new EditorMode**()

## Properties

### onMobileEditorStateChanged

• **onMobileEditorStateChanged**: [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\>

**`Description`**

代理通知状态改变

#### Defined in

MobileEditor/index.d.ts:30

## Accessors

### gizmoActor

• `get` **gizmoActor**(): `MWMobileGizmoActor`

**`Description`**

获取坐标轴 Actor

**`Effect`**

只在客户端调用生效

#### Returns

`MWMobileGizmoActor`

返回 gizmoActor

#### Defined in

MobileEditor/index.d.ts:338

---

### gizmoActorRotation

• `set` **gizmoActorRotation**(`NewRotation`): `void`

**`Description`**

设置坐标轴旋转

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                | Description    |
| :------------ | :---------------------------------- | :------------- |
| `NewRotation` | [`Rotation`](Type.Type.Rotation.md) | usage:新的旋转 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:109

---

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

MobileEditor/index.d.ts:385

• `set` **isMobileEditor**(`bIsMobileEditor`): `void`

**`Description`**

切换移动编辑器模式

**`Effect`**

只在客户端调用生效

**`Precautions`**

不能添加空枚举 如 export enum test {},会影响数据还原

#### Parameters

| Name              | Type      | Description                                         |
| :---------------- | :-------- | :-------------------------------------------------- |
| `bIsMobileEditor` | `boolean` | usage: true 则进 Editor Mode , false 进入 Play Mode |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:392

---

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

---

### selectedActor

• `get` **selectedActor**(): `GameObject`

**`Description`**

获取当前选中的对象

**`Effect`**

只在客户端调用生效

#### Returns

`GameObject`

返回选中的 actor

#### Defined in

MobileEditor/index.d.ts:355

## Methods

### addEditorCharacterCameraFlexInput

▸ **addEditorCharacterCameraFlexInput**(`Scale`): `void`

**`Description`**

设置移动编辑器 Editor Mode 下人物的位置输入,仅在 Editor Mode 模式下生效.

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description     |
| :------ | :------- | :-------------- |
| `Scale` | `number` | usage: 输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:68

---

### addEditorCharacterDeltaOffset

▸ **addEditorCharacterDeltaOffset**(`Delta`, `Scale`): `void`

**`Description`**

设置移动编辑器 Editor Mode 下人物的位置输入,仅在 Editor Mode 模式下生效.Play Mode 使用 gamePlay 提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                            | Description       |
| :------ | :------------------------------ | :---------------- |
| `Delta` | [`Vector`](Type.Type.Vector.md) | usage: 偏移 delta |
| `Scale` | `number`                        | usage: 缩放值     |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:62

---

### addEditorCharacterPitch

▸ **addEditorCharacterPitch**(`Pitch`): `void`

**`Description`**

设置移动编辑器 Editor Mode 下人物的 Pitch 值输入,仅在 Editor Mode 模式下生效. Play Mode 使用 gamePlay 提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `Pitch` | `number` | usage:输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:55

---

### addEditorCharacterYaw

▸ **addEditorCharacterYaw**(`Yaw`): `void`

**`Description`**

设置移动编辑器 Editor Mode 下人物的 Yaw 值输入,仅在 Editor Mode 模式下生效.Play Mode 使用 gameplay 提供的接口

**`Effect`**

只在客户端调用生效

#### Parameters

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `Yaw` | `number` | usage: 输入数值 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:49

---

### attachActorToGizmo

▸ **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void`

**`Description`**

附加物体到坐标轴

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type         | Description                       |
| :---------------- | :----------- | :-------------------------------- |
| `Actor`           | `GameObject` | usage: 附加到的 actor             |
| `IsRecordChange?` | `boolean`    | usage: 是否支持撤销 default:false |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:81

---

### beginActorTransformChange

▸ **beginActorTransformChange**(`Actor`): `void`

**`Description`**

开始记录位置改变操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type         | Description                 |
| :------ | :----------- | :-------------------------- |
| `Actor` | `GameObject` | usage: 记录的位置大小 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:156

---

### beginAttachChange

▸ **beginAttachChange**(`LastActor`, `NewActor`): `void`

**`Description`**

记录附加记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type         | Description      |
| :---------- | :----------- | :--------------- |
| `LastActor` | `GameObject` | usage:上一个对象 |
| `NewActor`  | `GameObject` | usage:新的对象   |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:329

---

### beginCombineActorChange

▸ **beginCombineActorChange**(): `void`

**`Description`**

开始记录打组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:200

---

### beginDeleteActorChange

▸ **beginDeleteActorChange**(): `void`

**`Description`**

开始记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:167

---

### beginMaterialsChange

▸ **beginMaterialsChange**(`Actor`): `void`

**`Description`**

开始记录材质变换操作(仅支持记录单个 StaticMesh)，新工程更新后接口可废弃删掉

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                            | Description                    |
| :------ | :---------------------------------------------- | :----------------------------- |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录材质属性改变的 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:189

---

### beginMaterialsChangeMulti

▸ **beginMaterialsChangeMulti**(`Array`): `void`

**`Description`**

开始记录材质变换操作（支持记录多个 StaticMesh）

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                              | Description     |
| :------ | :------------------------------------------------ | :-------------- |
| `Array` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)[] | usage: 多个对象 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:195

---

### beginMaterialsColorChange

▸ **beginMaterialsColorChange**(`Actor`, `Color`): `void`

**`Description`**

开始记录材质颜色变换操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                            | Description      |
| :------ | :---------------------------------------------- | :--------------- |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录的对象 |
| `Color` | [`LinearColor`](Type.Type.LinearColor.md)       | usage:颜色       |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:251

---

### beginSpawnActorChange

▸ **beginSpawnActorChange**(): `void`

**`Description`**

开始记录创建操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:177

---

### beginUncombinedActorChange

▸ **beginUncombinedActorChange**(): `void`

**`Description`**

开始记录解组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:221

---

### detachActorFormGizmo

▸ **detachActorFormGizmo**(`Actor`): `void`

**`Description`**

移除物体到坐标轴

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type         | Description        |
| :------ | :----------- | :----------------- |
| `Actor` | `GameObject` | usage:移除的 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:87

---

### enableSelectActor

▸ **enableSelectActor**(`IsEnable`): `void`

**`Description`**

设置是否可以选中物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description        |
| :--------- | :-------- | :----------------- |
| `IsEnable` | `boolean` | usage:是否可以选中 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:349

---

### endActorTransformChange

▸ **endActorTransformChange**(`Actor`): `void`

**`Description`**

结束记录位置改变操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type         | Description                |
| :------ | :----------- | :------------------------- |
| `Actor` | `GameObject` | usage:记录的位置大小 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:162

---

### endCombineActorChange

▸ **endCombineActorChange**(`Actor`): `void`

**`Description`**

结束记录打组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type         | Description              |
| :------ | :----------- | :----------------------- |
| `Actor` | `GameObject` | usage:打组后的锚点 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:206

---

### endDeleteActorChange

▸ **endDeleteActorChange**(): `void`

**`Description`**

结束记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:172

---

### endMaterialsChange

▸ **endMaterialsChange**(`Actor`, `MaterialID`): `void`

**`Description`**

结束记录材质变换操作(仅支持记录单个 StaticMesh)，新工程更新后接口可废弃删掉

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                            | Description                |
| :----------- | :---------------------------------------------- | :------------------------- |
| `Actor`      | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录材质属性的 actor |
| `MaterialID` | `string`                                        | usage:材质 ID              |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:234

---

### endMaterialsChangeMulti

▸ **endMaterialsChangeMulti**(`Array`, `MaterialID`): `void`

**`Description`**

结束记录材质变换操作（支持记录多个 StaticMesh）

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                              | Description          |
| :----------- | :------------------------------------------------ | :------------------- |
| `Array`      | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md)[] | usage:操作的对象数组 |
| `MaterialID` | `string`                                          | usage:材质 ID        |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:241

---

### endMaterialsColorChange

▸ **endMaterialsColorChange**(`Actor`, `Color`): `void`

**`Description`**

结束记录材质颜色变换操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                                            | Description        |
| :------ | :---------------------------------------------- | :----------------- |
| `Actor` | [`StaticMesh`](Gameplay.Gameplay.StaticMesh.md) | usage:记录的 actor |
| `Color` | [`LinearColor`](Type.Type.LinearColor.md)       | usage:颜色         |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:261

---

### endMultiCombineActorChange

▸ **endMultiCombineActorChange**(`Actor`, `Array`): `void`

**`Description`**

结束记录多组合并打组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type           | Description                                             |
| :------ | :------------- | :------------------------------------------------------ |
| `Actor` | `GameObject`   | usage:合并打组后的锚点 actor                            |
| `Array` | `GameObject`[] | usage:合并打组前所有组锚点（或者单个物体）的 actor 数组 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:213

---

### endSpawnActorChange

▸ **endSpawnActorChange**(`Actor`): `void`

**`Description`**

结束记录创建操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type         | Description        |
| :------ | :----------- | :----------------- |
| `Actor` | `GameObject` | usage:记录的 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:183

---

### endUncombinedActorChange

▸ **endUncombinedActorChange**(`Array`): `void`

**`Description`**

结束记录解组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type           | Description                           |
| :------ | :------------- | :------------------------------------ |
| `Array` | `GameObject`[] | usage:解组前所有组的锚点 actor 的数组 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:227

---

### focusToActors

▸ **focusToActors**(`Actors`): `void`

**`Description`**

聚焦到物体

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type           | Description      |
| :------- | :------------- | :--------------- |
| `Actors` | [`GameObject`] | usage:对象 actor |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:379

---

### focusToGizmo

▸ **focusToGizmo**(): `void`

**`Description`**

聚焦到坐标轴

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:343

---

### isRedoEmpty

▸ **isRedoEmpty**(): `boolean`

**`Description`**

是否可执行 Redo 操作 true:表示当前没有可执行的步数，无法执行重做操作

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可执行 Redo 操作

#### Defined in

MobileEditor/index.d.ts:367

---

### isUndoEmpty

▸ **isUndoEmpty**(): `boolean`

**`Description`**

是否可执行 Undo 操作 true:表示当前没有可执行的步数，无法执行撤销操作

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否可执行 Undo 操作

#### Defined in

MobileEditor/index.d.ts:361

---

### onAppendChange

▸ **onAppendChange**(`Delegate`): `void`

**`Description`**

主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合 IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                 | Description            |
| :--------- | :------------------------------------------------------------------- | :--------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> | usage:记录撤销恢复代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:373

---

### onAttachChanged

▸ **onAttachChanged**(`Delegate`): `void`

**`Description`**

附加代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                        | Description                                  |
| :--------- | :------------------------------------------------------------------------------------------ | :------------------------------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | usage:有 actor 附加到 gizmo 的时候触发的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:320

---

### onAttachRedoChanged

▸ **onAttachRedoChanged**(`Delegate`): `void`

**`Description`**

附加代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                        | Description             |
| :--------- | :------------------------------------------------------------------------------------------ | :---------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | usage:attach 撤销的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:290

---

### onDeleteActorRedo

▸ **onDeleteActorRedo**(`Delegate`): `void`

**`Description`**

Redo 删除操作代理，会返回被删除的 ActorID 和 资源 ID

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                                             | Description                   |
| :--------- | :--------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\> | usage:返回被删除的 actor 代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:280

---

### onDeleteActorUndo

▸ **onDeleteActorUndo**(`Delegate`): `void`

**`Description`**

撤销删除操作代理，会返回被删除的 Actor

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                                                                    | Description                   |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: `GameObject`, `OldGUID`: `string`, `NewString`: `string`) => `void`\> | usage:返回被删除的 actor 代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:270

---

### onGizmoVisibleChanged

▸ **onGizmoVisibleChanged**(`Delegate`): `void`

**`Description`**

坐标轴隐藏显示代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                       | Description                      |
| :--------- | :----------------------------------------------------------------------------------------- | :------------------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | usage:gizmo actor 隐藏显示的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:312

---

### onSelectActor

▸ **onSelectActor**(`Delegate`): `void`

**`Description`**

选择物体代理

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type                                                                                                                                         | Description             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| `Delegate` | [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<(`Content`: `GameObject`, `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\> | usage:选中 actor 的代理 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:298

---

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

---

### setAdsorbDistance

▸ **setAdsorbDistance**(`InDistance`): `void`

**`Description`**

设置吸附距离

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type     | Description     |
| :----------- | :------- | :-------------- |
| `InDistance` | `number` | usage: 吸附距离 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:150

---

### setGizmoActorLocation

▸ **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void`

**`Description`**

设置坐标轴位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                            | Description                                   |
| :---------------- | :------------------------------ | :-------------------------------------------- |
| `NewLocation`     | [`Vector`](Type.Type.Vector.md) | usage:坐标轴位置                              |
| `IsRecordChange?` | `boolean`                       | usage:是否记录本次坐标轴位置变动 default:true |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:100

---

### setGizmoActorLocationAndRotation

▸ **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void`

**`Description`**

设置坐标轴旋转和缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                | Description |
| :------------ | :---------------------------------- | :---------- |
| `NewLocation` | [`Vector`](Type.Type.Vector.md)     | usage: 位置 |
| `NewRotation` | [`Rotation`](Type.Type.Rotation.md) | usage: 旋转 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:116

---

### setGizmoAxisColor

▸ **setGizmoAxisColor**(`InAxis`, `InAxisColor`): `void`

**`Description`**

设置坐标轴颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                      | Description       |
| :------------ | :---------------------------------------- | :---------------- |
| `InAxis`      | `string`                                  | usage: 单个坐标轴 |
| `InAxisColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 颜色       |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:126

---

### setGizmoHighlightColor

▸ **setGizmoHighlightColor**(`InHighlightColor`): `void`

**`Description`**

设置坐标轴选中时的高亮颜色

**`Effect`**

只在客户端调用生效

#### Parameters

| Name               | Type                                      | Description     |
| :----------------- | :---------------------------------------- | :-------------- |
| `InHighlightColor` | [`LinearColor`](Type.Type.LinearColor.md) | usage: 高亮颜色 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:132

---

### setGizmoScaleOffset

▸ **setGizmoScaleOffset**(`InOffset`): `void`

**`Description`**

设置坐标轴模型整体缩放倍数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description     |
| :--------- | :------- | :-------------- |
| `InOffset` | `number` | usage: 缩放倍数 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:138

---

### setIsAdsorb

▸ **setIsAdsorb**(`InIsAdsorb`): `void`

**`Description`**

设置是否吸附

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type      | Description     |
| :----------- | :-------- | :-------------- |
| `InIsAdsorb` | `boolean` | usage: 是否吸附 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:144

---

### showGizmoActor

▸ **showGizmoActor**(`showGizmoActor`): `void`

**`Description`**

设置坐标轴隐藏或者显示

**`Effect`**

只在客户端调用生效

#### Parameters

| Name             | Type      | Description      |
| :--------------- | :-------- | :--------------- |
| `showGizmoActor` | `boolean` | usage:显隐坐标轴 |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:74

---

### switchGizmoMode

▸ **switchGizmoMode**(`GizmoMode`): `void`

**`Description`**

切换坐标轴模式

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type                                                                   | Description |
| :---------- | :--------------------------------------------------------------------- | :---------- |
| `GizmoMode` | [`GizmoModeType`](../enums/MobileEditor.MobileEditor.GizmoModeType.md) | usage:模式  |

#### Returns

`void`

#### Defined in

MobileEditor/index.d.ts:93

---

### getInstance

▸ `Static` **getInstance**(): [`EditorMode`](MobileEditor.MobileEditor.EditorMode.md)

**`Description`**

获取 editorMode 的单例

**`Effect`**

只在客户端调用生效

#### Returns

[`EditorMode`](MobileEditor.MobileEditor.EditorMode.md)

模式切换的单例

#### Defined in

MobileEditor/index.d.ts:26
