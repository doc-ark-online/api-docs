[MobileEditor](../modules/MobileEditor.MobileEditor.md) / EditorMode

# EditorMode <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

移动编辑器模式切换

**`Precautions`**

单例类，请使用instance获取对象

## Table of contents

| Properties |
| :-----|
| **[onMobileEditorStateChanged](MobileEditor.EditorMode.md#onmobileeditorstatechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\> <br> 代理通知状态改变|

| Accessors |
| :-----|
| **[gizmoActor](MobileEditor.EditorMode.md#gizmoactor)**(): `MWMobileGizmoActor` <br> 获取坐标轴Actor|
| **[gizmoActorRotation](MobileEditor.EditorMode.md#gizmoactorrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> 设置坐标轴旋转|
| **[isMobileEditor](MobileEditor.EditorMode.md#ismobileeditor)**(): `boolean` <br> 获取当前移动编辑器模式|
| **[isPermanentMobileEditor](MobileEditor.EditorMode.md#ispermanentmobileeditor)**(): `boolean` <br> 获取初始化时候的状态|
| **[selectedActor](MobileEditor.EditorMode.md#selectedactor)**(): `GameObject` <br> 获取当前选中的对象|

| Methods |
| :-----|
| **[addEditorCharacterCameraFlexInput](MobileEditor.EditorMode.md#addeditorcharactercameraflexinput)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.|
| **[addEditorCharacterDeltaOffset](MobileEditor.EditorMode.md#addeditorcharacterdeltaoffset)**([`Vector`](Type.Vector.md), `number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterPitch](MobileEditor.EditorMode.md#addeditorcharacterpitch)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterYaw](MobileEditor.EditorMode.md#addeditorcharacteryaw)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口|
| **[attachActorToGizmo](MobileEditor.EditorMode.md#attachactortogizmo)**(`GameObject`, `boolean`): `void` <br> 附加物体到坐标轴|
| **[beginActorTransformChange](MobileEditor.EditorMode.md#beginactortransformchange)**(`GameObject`): `void` <br> 开始记录位置改变操作|
| **[beginAttachChange](MobileEditor.EditorMode.md#beginattachchange)**(`GameObject`, `GameObject`): `void` <br> 记录附加记录|
| **[beginCombineActorChange](MobileEditor.EditorMode.md#begincombineactorchange)**(): `void` <br> 开始记录打组操作|
| **[beginDeleteActorChange](MobileEditor.EditorMode.md#begindeleteactorchange)**(): `void` <br> 开始记录删除操作|
| **[beginMaterialsChange](MobileEditor.EditorMode.md#beginmaterialschange)**([`StaticMesh`](Gameplay.StaticMesh.md)): `void` <br> 开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉|
| **[beginMaterialsChangeMulti](MobileEditor.EditorMode.md#beginmaterialschangemulti)**([`StaticMesh`](Gameplay.StaticMesh.md)[]): `void` <br> 开始记录材质变换操作（支持记录多个StaticMesh）|
| **[beginMaterialsColorChange](MobileEditor.EditorMode.md#beginmaterialscolorchange)**([`StaticMesh`](Gameplay.StaticMesh.md), [`LinearColor`](Type.LinearColor.md)): `void` <br> 开始记录材质颜色变换操作|
| **[beginSpawnActorChange](MobileEditor.EditorMode.md#beginspawnactorchange)**(): `void` <br> 开始记录创建操作|
| **[beginUncombinedActorChange](MobileEditor.EditorMode.md#beginuncombinedactorchange)**(): `void` <br> 开始记录解组操作|
| **[detachActorFormGizmo](MobileEditor.EditorMode.md#detachactorformgizmo)**(`GameObject`): `void` <br> 移除物体到坐标轴|
| **[enableSelectActor](MobileEditor.EditorMode.md#enableselectactor)**(`boolean`): `void` <br> 设置是否可以选中物体|
| **[endActorTransformChange](MobileEditor.EditorMode.md#endactortransformchange)**(`GameObject`): `void` <br> 结束记录位置改变操作|
| **[endCombineActorChange](MobileEditor.EditorMode.md#endcombineactorchange)**(`GameObject`): `void` <br> 结束记录打组操作|
| **[endDeleteActorChange](MobileEditor.EditorMode.md#enddeleteactorchange)**(): `void` <br> 结束记录删除操作|
| **[endMaterialsChange](MobileEditor.EditorMode.md#endmaterialschange)**([`StaticMesh`](Gameplay.StaticMesh.md), `string`): `void` <br> 结束记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉|
| **[endMaterialsChangeMulti](MobileEditor.EditorMode.md#endmaterialschangemulti)**([`StaticMesh`](Gameplay.StaticMesh.md)[], `string`): `void` <br> 结束记录材质变换操作（支持记录多个StaticMesh）|
| **[endMaterialsColorChange](MobileEditor.EditorMode.md#endmaterialscolorchange)**([`StaticMesh`](Gameplay.StaticMesh.md), [`LinearColor`](Type.LinearColor.md)): `void` <br> 结束记录材质颜色变换操作|
| **[endMultiCombineActorChange](MobileEditor.EditorMode.md#endmulticombineactorchange)**(`GameObject`, `GameObject`[]): `void` <br> 结束记录多组合并打组操作|
| **[endSpawnActorChange](MobileEditor.EditorMode.md#endspawnactorchange)**(`GameObject`): `void` <br> 结束记录创建操作|
| **[endUncombinedActorChange](MobileEditor.EditorMode.md#enduncombinedactorchange)**(`GameObject`[]): `void` <br> 结束记录解组操作|
| **[focusToActors](MobileEditor.EditorMode.md#focustoactors)**([`GameObject`]): `void` <br> 聚焦到物体|
| **[focusToGizmo](MobileEditor.EditorMode.md#focustogizmo)**(): `void` <br> 聚焦到坐标轴|
| **[isRedoEmpty](MobileEditor.EditorMode.md#isredoempty)**(): `boolean` <br> 是否可执行Redo操作true:表示当前没有可执行的步数，无法执行重做操作|
| **[isUndoEmpty](MobileEditor.EditorMode.md#isundoempty)**(): `boolean` <br> 是否可执行Undo操作 true:表示当前没有可执行的步数，无法执行撤销操作|
| **[onAppendChange](MobileEditor.EditorMode.md#onappendchange)**([`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>): `void` <br> 主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作|
| **[onAttachChanged](MobileEditor.EditorMode.md#onattachchanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\>): `void` <br> 附加代理|
| **[onAttachRedoChanged](MobileEditor.EditorMode.md#onattachredochanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\>): `void` <br> 附加代理|
| **[onDeleteActorRedo](MobileEditor.EditorMode.md#ondeleteactorredo)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\>): `void` <br> Redo删除操作代理，会返回被删除的ActorID 和 资源ID|
| **[onDeleteActorUndo](MobileEditor.EditorMode.md#ondeleteactorundo)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `OldGUID`: `string`, `NewString`: `string`) => `void`\>): `void` <br> 撤销删除操作代理，会返回被删除的Actor|
| **[onGizmoVisibleChanged](MobileEditor.EditorMode.md#ongizmovisiblechanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\>): `void` <br> 坐标轴隐藏显示代理|
| **[onSelectActor](MobileEditor.EditorMode.md#onselectactor)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\>): `void` <br> 选择物体代理|
| **[saveProject](MobileEditor.EditorMode.md#saveproject)**(): `void` <br> 保存当前场景|
| **[setAdsorbDistance](MobileEditor.EditorMode.md#setadsorbdistance)**(`number`): `void` <br> 设置吸附距离|
| **[setGizmoActorLocation](MobileEditor.EditorMode.md#setgizmoactorlocation)**([`Vector`](Type.Vector.md), `boolean`): `void` <br> 设置坐标轴位置|
| **[setGizmoActorLocationAndRotation](MobileEditor.EditorMode.md#setgizmoactorlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> 设置坐标轴旋转和缩放|
| **[setGizmoAxisColor](MobileEditor.EditorMode.md#setgizmoaxiscolor)**(`string`, [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置坐标轴颜色|
| **[setGizmoHighlightColor](MobileEditor.EditorMode.md#setgizmohighlightcolor)**([`LinearColor`](Type.LinearColor.md)): `void` <br> 设置坐标轴选中时的高亮颜色|
| **[setGizmoScaleOffset](MobileEditor.EditorMode.md#setgizmoscaleoffset)**(`number`): `void` <br> 设置坐标轴模型整体缩放倍数|
| **[setIsAdsorb](MobileEditor.EditorMode.md#setisadsorb)**(`boolean`): `void` <br> 设置是否吸附|
| **[showGizmoActor](MobileEditor.EditorMode.md#showgizmoactor)**(`[showGizmoActor](MobileEditor.EditorMode.md#showgizmoactor)`): `void` <br> 设置坐标轴隐藏或者显示|
| **[switchGizmoMode](MobileEditor.EditorMode.md#switchgizmomode)**([`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md)): `void` <br> 切换坐标轴模式|
| **[getInstance](MobileEditor.EditorMode.md#getinstance)**(): [`EditorMode`](MobileEditor.EditorMode.md) <br> 获取editorMode的单例|

## Properties

### onMobileEditorStateChanged

• **onMobileEditorStateChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\>

**`Description`**

代理通知状态改变

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
| `NewRotation` | [`Rotation`](Type.Rotation.md) | 新的旋转 |

#### Returns

`void`

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
| `bIsMobileEditor` | `boolean` |  true 则进 Editor Mode , false 进入 Play Mode |

#### Returns

`void`

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

___

### selectedActor

• `get` **selectedActor**(): `GameObject`

**`Description`**

获取当前选中的对象

**`Effect`**

只在客户端调用生效

#### Returns

`GameObject`

返回选中的actor

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
| `Scale` | `number` |  输入数值 |

#### Returns

`void`

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
| `Delta` | [`Vector`](Type.Vector.md) |  偏移delta |
| `Scale` | `number` |  缩放值 |

#### Returns

`void`

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
| `Pitch` | `number` | 输入数值 |

#### Returns

`void`

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
| `Yaw` | `number` |  输入数值 |

#### Returns

`void`

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
| `Actor` | `GameObject` |  附加到的actor |
| `IsRecordChange?` | `boolean` |  是否支持撤销 default:false |

#### Returns

`void`

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
| `Actor` | `GameObject` |  记录的位置大小actor |

#### Returns

`void`

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
| `LastActor` | `GameObject` | 上一个对象 |
| `NewActor` | `GameObject` | 新的对象 |

#### Returns

`void`

___

### beginCombineActorChange

▸ **beginCombineActorChange**(): `void`

**`Description`**

开始记录打组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### beginDeleteActorChange

▸ **beginDeleteActorChange**(): `void`

**`Description`**

开始记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录材质属性改变的actor |

#### Returns

`void`

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
| `Array` | [`StaticMesh`](Gameplay.StaticMesh.md)[] |  多个对象 |

#### Returns

`void`

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
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录的对象 |
| `Color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |

#### Returns

`void`

___

### beginSpawnActorChange

▸ **beginSpawnActorChange**(): `void`

**`Description`**

开始记录创建操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### beginUncombinedActorChange

▸ **beginUncombinedActorChange**(): `void`

**`Description`**

开始记录解组操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `Actor` | `GameObject` | 移除的actor |

#### Returns

`void`

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
| `IsEnable` | `boolean` | 是否可以选中 |

#### Returns

`void`

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
| `Actor` | `GameObject` | 记录的位置大小actor |

#### Returns

`void`

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
| `Actor` | `GameObject` | 打组后的锚点actor |

#### Returns

`void`

___

### endDeleteActorChange

▸ **endDeleteActorChange**(): `void`

**`Description`**

结束记录删除操作

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录材质属性的actor |
| `MaterialID` | `string` | 材质ID |

#### Returns

`void`

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
| `Array` | [`StaticMesh`](Gameplay.StaticMesh.md)[] | 操作的对象数组 |
| `MaterialID` | `string` | 材质ID |

#### Returns

`void`

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
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录的actor |
| `Color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |

#### Returns

`void`

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
| `Actor` | `GameObject` | 合并打组后的锚点actor |
| `Array` | `GameObject`[] | 合并打组前所有组锚点（或者单个物体）的actor数组 |

#### Returns

`void`

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
| `Actor` | `GameObject` | 记录的actor |

#### Returns

`void`

___

### endUncombinedActorChange

▸ **endUncombinedActorChange**(`Array`): `void`

**`Description`**

结束记录解组操作

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | `GameObject`[] | 解组前所有组的锚点actor的数组 |

#### Returns

`void`

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
| `Actors` | [`GameObject`] | 对象actor |

#### Returns

`void`

___

### focusToGizmo

▸ **focusToGizmo**(): `void`

**`Description`**

聚焦到坐标轴

**`Effect`**

只在客户端调用生效

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> | 记录撤销恢复代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | 有actor 附加到gizmo的时候触发的代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | attach 撤销的代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\> | 返回被删除的actor代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `OldGUID`: `string`, `NewString`: `string`) => `void`\> | 返回被删除的actor代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | gizmo actor隐藏显示的代理 |

#### Returns

`void`

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
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\> | 选中actor的代理 |

#### Returns

`void`

___

### saveProject

▸ **saveProject**(): `void`

**`Description`**

保存当前场景

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### setAdsorbDistance

▸ **setAdsorbDistance**(`InDistance`): `void`

**`Description`**

设置吸附距离

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDistance` | `number` |  吸附距离 |

#### Returns

`void`

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
| `NewLocation` | [`Vector`](Type.Vector.md) | 坐标轴位置 |
| `IsRecordChange?` | `boolean` | 是否记录本次坐标轴位置变动 default:true |

#### Returns

`void`

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
| `NewLocation` | [`Vector`](Type.Vector.md) |  位置 |
| `NewRotation` | [`Rotation`](Type.Rotation.md) |  旋转 |

#### Returns

`void`

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
| `InAxis` | `string` |  单个坐标轴 |
| `InAxisColor` | [`LinearColor`](Type.LinearColor.md) |  颜色 |

#### Returns

`void`

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
| `InHighlightColor` | [`LinearColor`](Type.LinearColor.md) |  高亮颜色 |

#### Returns

`void`

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
| `InOffset` | `number` |  缩放倍数 |

#### Returns

`void`

___

### setIsAdsorb

▸ **setIsAdsorb**(`InIsAdsorb`): `void`

**`Description`**

设置是否吸附

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InIsAdsorb` | `boolean` |  是否吸附 |

#### Returns

`void`

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
| `showGizmoActor` | `boolean` | 显隐坐标轴 |

#### Returns

`void`

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
| `GizmoMode` | [`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md) | 模式 |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`EditorMode`](MobileEditor.EditorMode.md)

**`Description`**

获取editorMode的单例

**`Effect`**

只在客户端调用生效

#### Returns

[`EditorMode`](MobileEditor.EditorMode.md)

模式切换的单例
