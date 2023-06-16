[Scripting](../groups/Core.Scripting.md) / EditorMode

# EditorMode <Badge type="tip" text="Class" /> <Score text="EditorMode" />

**`Instance`**

移动编辑器模式切换

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onMobileEditorStateChanged](mw.EditorMode.md#onmobileeditorstatechanged)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\> <br> 代理通知状态改变|
| **[playerHasJoined](mw.EditorMode.md#playerhasjoined)**: `boolean` <br> 记录游戏初始化完成|

| Accessors |
| :-----|
| **[gizmoActor](mw.EditorMode.md#gizmoactor)**(): `MWMobileGizmoActor` <br> 获取坐标轴Actor|
| **[isMobileEditor](mw.EditorMode.md#ismobileeditor)**(): `boolean` <br> 获取当前移动编辑器模式|
| **[isPermanentMobileEditor](mw.EditorMode.md#ispermanentmobileeditor)**(): `boolean` <br> 获取初始化时候的状态|
| **[mobileEditorGizmo](mw.EditorMode.md#mobileeditorgizmo)**(): [`Gizmo`](mw.Gizmo.md) <br> 获取编辑态的坐标轴,如果在非编辑态获取会返回null.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[selectedActor](mw.EditorMode.md#selectedactor)**(): [`GameObject`](mw.GameObject.md) <br> 获取当前选中的对象|

| Methods |
| :-----|
| **[addEditorCharacterCameraFlexInput](mw.EditorMode.md#addeditorcharactercameraflexinput)**(`Scale`: `number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.|
| **[addEditorCharacterDeltaOffset](mw.EditorMode.md#addeditorcharacterdeltaoffset)**(`Delta`: [`Vector`](mw.Vector.md), `Scale`: `number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterPitch](mw.EditorMode.md#addeditorcharacterpitch)**(`Pitch`: `number`): `void` <br> 设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterYaw](mw.EditorMode.md#addeditorcharacteryaw)**(`Yaw`: `number`): `void` <br> 设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口|
| **[beginActorTransformChange](mw.EditorMode.md#beginactortransformchange)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void` <br> 开始记录位置改变操作|
| **[beginAttachChange](mw.EditorMode.md#beginattachchange)**(`LastActor`: [`GameObject`](mw.GameObject.md), `NewActor`: [`GameObject`](mw.GameObject.md)): `void` <br> 记录附加记录|
| **[beginCombineActorChange](mw.EditorMode.md#begincombineactorchange)**(): `void` <br> 开始记录打组操作|
| **[beginDeleteActorChange](mw.EditorMode.md#begindeleteactorchange)**(): `void` <br> 开始记录删除操作|
| **[beginMaterialsChange](mw.EditorMode.md#beginmaterialschange)**(`Actor`: [`Mesh`](Core.mw.Mesh.md)): `void` <br> 开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉|
| **[beginMaterialsChangeMulti](mw.EditorMode.md#beginmaterialschangemulti)**(`Array`: [`Mesh`](Core.mw.Mesh.md)[]): `void` <br> 开始记录材质变换操作（支持记录多个StaticMesh）|
| **[beginMaterialsColorChange](mw.EditorMode.md#beginmaterialscolorchange)**(`Actor`: [`Mesh`](Core.mw.Mesh.md), `Color`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 开始记录材质颜色变换操作|
| **[beginSpawnActorChange](mw.EditorMode.md#beginspawnactorchange)**(): `void` <br> 开始记录创建操作|
| **[beginUncombinedActorChange](mw.EditorMode.md#beginuncombinedactorchange)**(): `void` <br> 开始记录解组操作|
| **[changeLevelGameObjectToStatic](mw.EditorMode.md#changelevelgameobjecttostatic)**(`isStatic?`: `boolean`, `ignores?`: `string`[]): `void` <br> 修改场景中的物体为静态/非静态|
| **[enableSelectActor](mw.EditorMode.md#enableselectactor)**(`IsEnable`: `boolean`): `void` <br> 设置是否可以选中物体|
| **[endActorTransformChange](mw.EditorMode.md#endactortransformchange)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void` <br> 结束记录位置改变操作|
| **[endCombineActorChange](mw.EditorMode.md#endcombineactorchange)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void` <br> 结束记录打组操作|
| **[endDeleteActorChange](mw.EditorMode.md#enddeleteactorchange)**(): `void` <br> 结束记录删除操作|
| **[endMaterialsChange](mw.EditorMode.md#endmaterialschange)**(`Actor`: [`Mesh`](Core.mw.Mesh.md), `MaterialID`: `string`): `void` <br> 结束记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉|
| **[endMaterialsChangeMulti](mw.EditorMode.md#endmaterialschangemulti)**(`Array`: [`Mesh`](Core.mw.Mesh.md)[], `MaterialID`: `string`): `void` <br> 结束记录材质变换操作（支持记录多个StaticMesh）|
| **[endMaterialsColorChange](mw.EditorMode.md#endmaterialscolorchange)**(`Actor`: [`Mesh`](Core.mw.Mesh.md), `Color`: [`LinearColor`](mw.LinearColor.md)): `void` <br> 结束记录材质颜色变换操作|
| **[endMultiCombineActorChange](mw.EditorMode.md#endmulticombineactorchange)**(`Actor`: [`GameObject`](mw.GameObject.md), `Array`: [`GameObject`](mw.GameObject.md)[]): `void` <br> 结束记录多组合并打组操作|
| **[endSpawnActorChange](mw.EditorMode.md#endspawnactorchange)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void` <br> 结束记录创建操作|
| **[endUncombinedActorChange](mw.EditorMode.md#enduncombinedactorchange)**(`Array`: [`GameObject`](mw.GameObject.md)[]): `void` <br> 结束记录解组操作|
| **[focusToActors](mw.EditorMode.md#focustoactors)**(`Actors`: [`GameObject`](mw.GameObject.md)[]): `void` <br> 聚焦到物体|
| **[focusToGizmo](mw.EditorMode.md#focustogizmo)**(): `void` <br> 聚焦到坐标轴|
| **[getGizmoMode](mw.EditorMode.md#getgizmomode)**(): [`GizmoModeType`](../enums/mw.GizmoModeType.md) <br> 获取坐标轴模式|
| **[getGizmoSpace](mw.EditorMode.md#getgizmospace)**(): [`GizmoSpaceType`](../enums/mw.GizmoSpaceType.md) <br> 获取坐标轴空间|
| **[isRedoEmpty](mw.EditorMode.md#isredoempty)**(): `boolean` <br> 是否可执行Redo操作true:表示当前没有可执行的步数，无法执行重做操作|
| **[isUndoEmpty](mw.EditorMode.md#isundoempty)**(): `boolean` <br> 是否可执行Undo操作 true:表示当前没有可执行的步数，无法执行撤销操作|
| **[onAppendChange](mw.EditorMode.md#onappendchange)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>): `void` <br> 主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作|
| **[onAttachRedoChanged](mw.EditorMode.md#onattachredochanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\>): `void` <br> 附加代理|
| **[onDeleteActorRedo](mw.EditorMode.md#ondeleteactorredo)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\>): `void` <br> Redo删除操作代理，会返回被删除的ActorID 和 资源ID|
| **[onDeleteActorUndo](mw.EditorMode.md#ondeleteactorundo)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md), `OldGUID`: `string`, `NewString`: `string`) => `void`\>): `void` <br> 撤销删除操作代理，会返回被删除的Actor|
| **[onSelectActor](mw.EditorMode.md#onselectactor)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md), `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\>): `void` <br> 选择物体代理|
| **[saveProject](mw.EditorMode.md#saveproject)**(): `void` <br> 保存当前场景|
| **[switchGizmoSpace](mw.EditorMode.md#switchgizmospace)**(`GizmoSpace`: [`GizmoSpaceType`](../enums/mw.GizmoSpaceType.md)): `void` <br> 切换坐标轴空间|
| **[getInstance](mw.EditorMode.md#getinstance)**(): [`EditorMode`](mw.EditorMode.md) <br> 获取editorMode的单例|

## Properties

### onMobileEditorStateChanged <Score text="onMobileEditorStateChanged" /> 

• **onMobileEditorStateChanged**: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\>

代理通知状态改变

___

### playerHasJoined <Score text="playerHasJoined" /> 

• **playerHasJoined**: `boolean`

记录游戏初始化完成

## Accessors

### gizmoActor <Score text="gizmoActor" /> 

• `get` **gizmoActor**(): `MWMobileGizmoActor` <Badge type="tip" text="client" />

获取坐标轴Actor


#### Returns

`MWMobileGizmoActor`

返回gizmoActor

___

### isMobileEditor <Score text="isMobileEditor" /> 

• `get` **isMobileEditor**(): `boolean` <Badge type="tip" text="client" />

获取当前移动编辑器模式


#### Returns

`boolean`

是否是编辑器模式

• `set` **isMobileEditor**(`bIsMobileEditor`): `void` <Badge type="tip" text="client" />

切换移动编辑器模式


::: warning Precautions

不能添加空枚举 如 export enum test `{}`,会影响数据还原

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bIsMobileEditor` | `boolean` |  true 则进 Editor Mode , false 进入 Play Mode |


___

### isPermanentMobileEditor <Score text="isPermanentMobileEditor" /> 

• `get` **isPermanentMobileEditor**(): `boolean` <Badge type="tip" text="client" />

获取初始化时候的状态


#### Returns

`boolean`

获取工程是否初始化时可以启动编辑器模式

___

### mobileEditorGizmo <Score text="mobileEditorGizmo" /> 

• `get` **mobileEditorGizmo**(): [`Gizmo`](mw.Gizmo.md) <Badge type="tip" text="client" />

获取编辑态的坐标轴,如果在非编辑态获取会返回null.刚进入游戏初始化主编辑UI时还未创建会返回空


#### Returns

[`Gizmo`](mw.Gizmo.md)

___

### selectedActor <Score text="selectedActor" /> 

• `get` **selectedActor**(): [`GameObject`](mw.GameObject.md) <Badge type="tip" text="client" />

获取当前选中的对象


#### Returns

[`GameObject`](mw.GameObject.md)

返回选中的actor

## Methods

### addEditorCharacterCameraFlexInput <Score text="addEditorCharacterCameraFlexInput" /> 

• **addEditorCharacterCameraFlexInput**(`Scale`): `void` <Badge type="tip" text="client" />

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Scale` | `number` |  输入数值 |


___

### addEditorCharacterDeltaOffset <Score text="addEditorCharacterDeltaOffset" /> 

• **addEditorCharacterDeltaOffset**(`Delta`, `Scale`): `void` <Badge type="tip" text="client" />

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delta` | [`Vector`](mw.Vector.md) |  偏移delta |
| `Scale` | `number` |  缩放值 |


___

### addEditorCharacterPitch <Score text="addEditorCharacterPitch" /> 

• **addEditorCharacterPitch**(`Pitch`): `void` <Badge type="tip" text="client" />

设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pitch` | `number` | 输入数值 |


___

### addEditorCharacterYaw <Score text="addEditorCharacterYaw" /> 

• **addEditorCharacterYaw**(`Yaw`): `void` <Badge type="tip" text="client" />

设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Yaw` | `number` |  输入数值 |


___

### beginActorTransformChange <Score text="beginActorTransformChange" /> 

• **beginActorTransformChange**(`Actor`): `void` <Badge type="tip" text="client" />

开始记录位置改变操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) |  记录的位置大小actor |


___

### beginAttachChange <Score text="beginAttachChange" /> 

• **beginAttachChange**(`LastActor`, `NewActor`): `void` <Badge type="tip" text="client" />

记录附加记录


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LastActor` | [`GameObject`](mw.GameObject.md) | 上一个对象 |
| `NewActor` | [`GameObject`](mw.GameObject.md) | 新的对象 |


___

### beginCombineActorChange <Score text="beginCombineActorChange" /> 

• **beginCombineActorChange**(): `void` <Badge type="tip" text="client" />

开始记录打组操作



___

### beginDeleteActorChange <Score text="beginDeleteActorChange" /> 

• **beginDeleteActorChange**(): `void` <Badge type="tip" text="client" />

开始记录删除操作



___

### beginMaterialsChange <Score text="beginMaterialsChange" /> 

• **beginMaterialsChange**(`Actor`): `void` <Badge type="tip" text="client" />

开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`Mesh`](Core.mw.Mesh.md) | 记录材质属性改变的actor |


___

### beginMaterialsChangeMulti <Score text="beginMaterialsChangeMulti" /> 

• **beginMaterialsChangeMulti**(`Array`): `void` <Badge type="tip" text="client" />

开始记录材质变换操作（支持记录多个StaticMesh）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`Mesh`](Core.mw.Mesh.md)[] |  多个对象 |


___

### beginMaterialsColorChange <Score text="beginMaterialsColorChange" /> 

• **beginMaterialsColorChange**(`Actor`, `Color`): `void` <Badge type="tip" text="client" />

开始记录材质颜色变换操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`Mesh`](Core.mw.Mesh.md) | 记录的对象 |
| `Color` | [`LinearColor`](mw.LinearColor.md) | 颜色 |


___

### beginSpawnActorChange <Score text="beginSpawnActorChange" /> 

• **beginSpawnActorChange**(): `void` <Badge type="tip" text="client" />

开始记录创建操作



___

### beginUncombinedActorChange <Score text="beginUncombinedActorChange" /> 

• **beginUncombinedActorChange**(): `void` <Badge type="tip" text="client" />

开始记录解组操作



___

### changeLevelGameObjectToStatic <Score text="changeLevelGameObjectToStatic" /> 

• **changeLevelGameObjectToStatic**(`isStatic?`, `ignores?`): `void` <Badge type="tip" text="client" />

修改场景中的物体为静态/非静态


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isStatic?` | `boolean` |  true为静态，false为非静态 default:true |
| `ignores?` | `string`[] |  设置忽略物体,物体guid数组 default:[] |


___

### enableSelectActor <Score text="enableSelectActor" /> 

• **enableSelectActor**(`IsEnable`): `void` <Badge type="tip" text="client" />

设置是否可以选中物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsEnable` | `boolean` | 是否可以选中 |


___

### endActorTransformChange <Score text="endActorTransformChange" /> 

• **endActorTransformChange**(`Actor`): `void` <Badge type="tip" text="client" />

结束记录位置改变操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) | 记录的位置大小actor |


___

### endCombineActorChange <Score text="endCombineActorChange" /> 

• **endCombineActorChange**(`Actor`): `void` <Badge type="tip" text="client" />

结束记录打组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) | 打组后的锚点actor |


___

### endDeleteActorChange <Score text="endDeleteActorChange" /> 

• **endDeleteActorChange**(): `void` <Badge type="tip" text="client" />

结束记录删除操作



___

### endMaterialsChange <Score text="endMaterialsChange" /> 

• **endMaterialsChange**(`Actor`, `MaterialID`): `void` <Badge type="tip" text="client" />

结束记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`Mesh`](Core.mw.Mesh.md) | 记录材质属性的actor |
| `MaterialID` | `string` | 材质ID |


___

### endMaterialsChangeMulti <Score text="endMaterialsChangeMulti" /> 

• **endMaterialsChangeMulti**(`Array`, `MaterialID`): `void` <Badge type="tip" text="client" />

结束记录材质变换操作（支持记录多个StaticMesh）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`Mesh`](Core.mw.Mesh.md)[] | 操作的对象数组 |
| `MaterialID` | `string` | 材质ID |


___

### endMaterialsColorChange <Score text="endMaterialsColorChange" /> 

• **endMaterialsColorChange**(`Actor`, `Color`): `void` <Badge type="tip" text="client" />

结束记录材质颜色变换操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`Mesh`](Core.mw.Mesh.md) | 记录的actor |
| `Color` | [`LinearColor`](mw.LinearColor.md) | 颜色 |


___

### endMultiCombineActorChange <Score text="endMultiCombineActorChange" /> 

• **endMultiCombineActorChange**(`Actor`, `Array`): `void` <Badge type="tip" text="client" />

结束记录多组合并打组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) | 合并打组后的锚点actor |
| `Array` | [`GameObject`](mw.GameObject.md)[] | 合并打组前所有组锚点（或者单个物体）的actor数组 |


___

### endSpawnActorChange <Score text="endSpawnActorChange" /> 

• **endSpawnActorChange**(`Actor`): `void` <Badge type="tip" text="client" />

结束记录创建操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`GameObject`](mw.GameObject.md) | 记录的actor |


___

### endUncombinedActorChange <Score text="endUncombinedActorChange" /> 

• **endUncombinedActorChange**(`Array`): `void` <Badge type="tip" text="client" />

结束记录解组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`GameObject`](mw.GameObject.md)[] | 解组前所有组的锚点actor的数组 |


___

### focusToActors <Score text="focusToActors" /> 

• **focusToActors**(`Actors`): `void` <Badge type="tip" text="client" />

聚焦到物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actors` | [`GameObject`](mw.GameObject.md)[] | 对象actor |


___

### focusToGizmo <Score text="focusToGizmo" /> 

• **focusToGizmo**(): `void` <Badge type="tip" text="client" />

聚焦到坐标轴



___

### getGizmoMode <Score text="getGizmoMode" /> 

• **getGizmoMode**(): [`GizmoModeType`](../enums/mw.GizmoModeType.md) <Badge type="tip" text="client" />

获取坐标轴模式


#### Returns

[`GizmoModeType`](../enums/mw.GizmoModeType.md)

返回坐标轴模式

___

### getGizmoSpace <Score text="getGizmoSpace" /> 

• **getGizmoSpace**(): [`GizmoSpaceType`](../enums/mw.GizmoSpaceType.md) <Badge type="tip" text="client" />

获取坐标轴空间


#### Returns

[`GizmoSpaceType`](../enums/mw.GizmoSpaceType.md)

返回坐标轴空间

___

### isRedoEmpty <Score text="isRedoEmpty" /> 

• **isRedoEmpty**(): `boolean` <Badge type="tip" text="client" />

是否可执行Redo操作true:表示当前没有可执行的步数，无法执行重做操作


#### Returns

`boolean`

是否可执行Redo操作

___

### isUndoEmpty <Score text="isUndoEmpty" /> 

• **isUndoEmpty**(): `boolean` <Badge type="tip" text="client" />

是否可执行Undo操作 true:表示当前没有可执行的步数，无法执行撤销操作


#### Returns

`boolean`

是否可执行Undo操作

___

### onAppendChange <Score text="onAppendChange" /> 

• **onAppendChange**(`Delegate`): `void` <Badge type="tip" text="client" />

主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 记录撤销恢复代理 |


___

### onAttachRedoChanged <Score text="onAttachRedoChanged" /> 

• **onAttachRedoChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\> | attach 撤销的代理 |


___

### onDeleteActorRedo <Score text="onDeleteActorRedo" /> 

• **onDeleteActorRedo**(`Delegate`): `void` <Badge type="tip" text="client" />

Redo删除操作代理，会返回被删除的ActorID 和 资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\> | 返回被删除的actor代理 |


___

### onDeleteActorUndo <Score text="onDeleteActorUndo" /> 

• **onDeleteActorUndo**(`Delegate`): `void` <Badge type="tip" text="client" />

撤销删除操作代理，会返回被删除的Actor


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md), `OldGUID`: `string`, `NewString`: `string`) => `void`\> | 返回被删除的actor代理 |


___

### onSelectActor <Score text="onSelectActor" /> 

• **onSelectActor**(`Delegate`): `void` <Badge type="tip" text="client" />

选择物体代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md), `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\> | 选中actor的代理 |


___

### saveProject <Score text="saveProject" /> 

• **saveProject**(): `void` <Badge type="tip" text="client" />

保存当前场景



___

### switchGizmoSpace <Score text="switchGizmoSpace" /> 

• **switchGizmoSpace**(`GizmoSpace`): `void` <Badge type="tip" text="client" />

切换坐标轴空间


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GizmoSpace` | [`GizmoSpaceType`](../enums/mw.GizmoSpaceType.md) | 空间 |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`EditorMode`](mw.EditorMode.md) <Badge type="tip" text="client" />

获取editorMode的单例


#### Returns

[`EditorMode`](mw.EditorMode.md)

模式切换的单例
