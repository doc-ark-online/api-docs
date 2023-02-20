[MobileEditor](../modules/MobileEditor.MobileEditor.md) / EditorMode

# EditorMode <Badge type="tip" text="Class" /> <Score text="EditorMode" />

**`Groups`**

SCRIPITING

**`Instance`**

移动编辑器模式切换

::: warning Precautions

单例类，请使用instance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onMobileEditorStateChanged](MobileEditor.EditorMode.md#onmobileeditorstatechanged)**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\> <br> 代理通知状态改变|

| Accessors |
| :-----|
| **[gizmoActor](MobileEditor.EditorMode.md#gizmoactor)**(): `MWMobileGizmoActor` <br> 获取坐标轴Actor|
| **[gizmoActorRotation](MobileEditor.EditorMode.md#gizmoactorrotation)**([`Rotation`](Type.Rotation.md)): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[isMobileEditor](MobileEditor.EditorMode.md#ismobileeditor)**(): `boolean` <br> 获取当前移动编辑器模式|
| **[isPermanentMobileEditor](MobileEditor.EditorMode.md#ispermanentmobileeditor)**(): `boolean` <br> 获取初始化时候的状态|
| **[mobileEditorGizmo](MobileEditor.EditorMode.md#mobileeditorgizmo)**(): [`Gizmo`](MobileEditor.Gizmo.md) <br> 获取编辑态的坐标轴,如果在非编辑态获取会返回null.刚进入游戏初始化主编辑UI时还未创建会返回空|
| **[selectedActor](MobileEditor.EditorMode.md#selectedactor)**(): `GameObject` <br> 获取当前选中的对象|

| Methods |
| :-----|
| **[addEditorCharacterCameraFlexInput](MobileEditor.EditorMode.md#addeditorcharactercameraflexinput)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.|
| **[addEditorCharacterDeltaOffset](MobileEditor.EditorMode.md#addeditorcharacterdeltaoffset)**([`Vector`](Type.Vector.md), `number`): `void` <br> 设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterPitch](MobileEditor.EditorMode.md#addeditorcharacterpitch)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口|
| **[addEditorCharacterYaw](MobileEditor.EditorMode.md#addeditorcharacteryaw)**(`number`): `void` <br> 设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口|
| **[attachActorToGizmo](MobileEditor.EditorMode.md#attachactortogizmo)**(`GameObject`, `boolean`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[beginActorTransformChange](MobileEditor.EditorMode.md#beginactortransformchange)**(`GameObject`): `void` <br> 开始记录位置改变操作|
| **[beginAttachChange](MobileEditor.EditorMode.md#beginattachchange)**(`GameObject`, `GameObject`): `void` <br> 记录附加记录|
| **[beginCombineActorChange](MobileEditor.EditorMode.md#begincombineactorchange)**(): `void` <br> 开始记录打组操作|
| **[beginDeleteActorChange](MobileEditor.EditorMode.md#begindeleteactorchange)**(): `void` <br> 开始记录删除操作|
| **[beginMaterialsChange](MobileEditor.EditorMode.md#beginmaterialschange)**([`StaticMesh`](Gameplay.StaticMesh.md)): `void` <br> 开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉|
| **[beginMaterialsChangeMulti](MobileEditor.EditorMode.md#beginmaterialschangemulti)**([`StaticMesh`](Gameplay.StaticMesh.md)[]): `void` <br> 开始记录材质变换操作（支持记录多个StaticMesh）|
| **[beginMaterialsColorChange](MobileEditor.EditorMode.md#beginmaterialscolorchange)**([`StaticMesh`](Gameplay.StaticMesh.md), [`LinearColor`](Type.LinearColor.md)): `void` <br> 开始记录材质颜色变换操作|
| **[beginSpawnActorChange](MobileEditor.EditorMode.md#beginspawnactorchange)**(): `void` <br> 开始记录创建操作|
| **[beginUncombinedActorChange](MobileEditor.EditorMode.md#beginuncombinedactorchange)**(): `void` <br> 开始记录解组操作|
| **[detachActorFormGizmo](MobileEditor.EditorMode.md#detachactorformgizmo)**(`GameObject`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
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
| **[onAttachChanged](MobileEditor.EditorMode.md#onattachchanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\>): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[onAttachRedoChanged](MobileEditor.EditorMode.md#onattachredochanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\>): `void` <br> 附加代理|
| **[onDeleteActorRedo](MobileEditor.EditorMode.md#ondeleteactorredo)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\>): `void` <br> Redo删除操作代理，会返回被删除的ActorID 和 资源ID|
| **[onDeleteActorUndo](MobileEditor.EditorMode.md#ondeleteactorundo)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `OldGUID`: `string`, `NewString`: `string`) => `void`\>): `void` <br> 撤销删除操作代理，会返回被删除的Actor|
| **[onGizmoVisibleChanged](MobileEditor.EditorMode.md#ongizmovisiblechanged)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\>): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[onSelectActor](MobileEditor.EditorMode.md#onselectactor)**([`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\>): `void` <br> 选择物体代理|
| **[saveProject](MobileEditor.EditorMode.md#saveproject)**(): `void` <br> 保存当前场景|
| **[setAdsorbDistance](MobileEditor.EditorMode.md#setadsorbdistance)**(`number`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setGizmoActorLocation](MobileEditor.EditorMode.md#setgizmoactorlocation)**([`Vector`](Type.Vector.md), `boolean`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setGizmoActorLocationAndRotation](MobileEditor.EditorMode.md#setgizmoactorlocationandrotation)**([`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md)): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setGizmoAxisColor](MobileEditor.EditorMode.md#setgizmoaxiscolor)**(`string`, [`LinearColor`](Type.LinearColor.md)): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setGizmoHighlightColor](MobileEditor.EditorMode.md#setgizmohighlightcolor)**([`LinearColor`](Type.LinearColor.md)): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setGizmoScaleOffset](MobileEditor.EditorMode.md#setgizmoscaleoffset)**(`number`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[setIsAdsorb](MobileEditor.EditorMode.md#setisadsorb)**(`boolean`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[showGizmoActor](MobileEditor.EditorMode.md#showgizmoactor)**(`[showGizmoActor](MobileEditor.EditorMode.md#showgizmoactor)`): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[switchGizmoMode](MobileEditor.EditorMode.md#switchgizmomode)**([`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md)): `void` <br> since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取|
| **[getInstance](MobileEditor.EditorMode.md#getinstance)**(): [`EditorMode`](MobileEditor.EditorMode.md) <br> 获取editorMode的单例|

## Properties

### onMobileEditorStateChanged <Score text="onMobileEditorStateChanged" /> 

• **onMobileEditorStateChanged**: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsMobileEditor`: `boolean`) => `void`\>

代理通知状态改变

## Accessors

### gizmoActor <Score text="gizmoActor" /> 

• `get` **gizmoActor**(): `MWMobileGizmoActor` <Badge type="tip" text="other" />

获取坐标轴Actor


#### Returns

`MWMobileGizmoActor`

返回gizmoActor

___

### gizmoActorRotation <Score text="gizmoActorRotation" /> 

• `set` **gizmoActorRotation**(`NewRotation`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewRotation` | [`Rotation`](Type.Rotation.md) | 新的旋转 |


___

### isMobileEditor <Score text="isMobileEditor" /> 

• `get` **isMobileEditor**(): `boolean` <Badge type="tip" text="other" />

获取当前移动编辑器模式


#### Returns

`boolean`

是否是编辑器模式

• `set` **isMobileEditor**(`bIsMobileEditor`): `void` <Badge type="tip" text="other" />

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

• `get` **isPermanentMobileEditor**(): `boolean` <Badge type="tip" text="other" />

获取初始化时候的状态


#### Returns

`boolean`

获取工程是否初始化时可以启动编辑器模式

___

### mobileEditorGizmo <Score text="mobileEditorGizmo" /> 

• `get` **mobileEditorGizmo**(): [`Gizmo`](MobileEditor.Gizmo.md) <Badge type="tip" text="other" />

获取编辑态的坐标轴,如果在非编辑态获取会返回null.刚进入游戏初始化主编辑UI时还未创建会返回空


#### Returns

[`Gizmo`](MobileEditor.Gizmo.md)

___

### selectedActor <Score text="selectedActor" /> 

• `get` **selectedActor**(): `GameObject` <Badge type="tip" text="other" />

获取当前选中的对象


#### Returns

`GameObject`

返回选中的actor

## Methods

### addEditorCharacterCameraFlexInput <Score text="addEditorCharacterCameraFlexInput" /> 

• **addEditorCharacterCameraFlexInput**(`Scale`): `void` <Badge type="tip" text="other" />

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Scale` | `number` |  输入数值 |


___

### addEditorCharacterDeltaOffset <Score text="addEditorCharacterDeltaOffset" /> 

• **addEditorCharacterDeltaOffset**(`Delta`, `Scale`): `void` <Badge type="tip" text="other" />

设置移动编辑器Editor Mode下人物的位置输入,仅在Editor Mode模式下生效.Play Mode 使用gamePlay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delta` | [`Vector`](Type.Vector.md) |  偏移delta |
| `Scale` | `number` |  缩放值 |


___

### addEditorCharacterPitch <Score text="addEditorCharacterPitch" /> 

• **addEditorCharacterPitch**(`Pitch`): `void` <Badge type="tip" text="other" />

设置移动编辑器Editor Mode下人物的Pitch值输入,仅在Editor Mode模式下生效. Play Mode 使用gamePlay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Pitch` | `number` | 输入数值 |


___

### addEditorCharacterYaw <Score text="addEditorCharacterYaw" /> 

• **addEditorCharacterYaw**(`Yaw`): `void` <Badge type="tip" text="other" />

设置移动编辑器Editor Mode下人物的Yaw值输入,仅在Editor Mode模式下生效.Play Mode 使用gameplay提供的接口


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Yaw` | `number` |  输入数值 |


___

### attachActorToGizmo <Score text="attachActorToGizmo" /> 

• **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

附加物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` |  附加到的actor |
| `IsRecordChange?` | `boolean` |  是否支持撤销 default:false |


___

### beginActorTransformChange <Score text="beginActorTransformChange" /> 

• **beginActorTransformChange**(`Actor`): `void` <Badge type="tip" text="other" />

开始记录位置改变操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` |  记录的位置大小actor |


___

### beginAttachChange <Score text="beginAttachChange" /> 

• **beginAttachChange**(`LastActor`, `NewActor`): `void` <Badge type="tip" text="other" />

记录附加记录


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LastActor` | `GameObject` | 上一个对象 |
| `NewActor` | `GameObject` | 新的对象 |


___

### beginCombineActorChange <Score text="beginCombineActorChange" /> 

• **beginCombineActorChange**(): `void` <Badge type="tip" text="other" />

开始记录打组操作



___

### beginDeleteActorChange <Score text="beginDeleteActorChange" /> 

• **beginDeleteActorChange**(): `void` <Badge type="tip" text="other" />

开始记录删除操作



___

### beginMaterialsChange <Score text="beginMaterialsChange" /> 

• **beginMaterialsChange**(`Actor`): `void` <Badge type="tip" text="other" />

开始记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录材质属性改变的actor |


___

### beginMaterialsChangeMulti <Score text="beginMaterialsChangeMulti" /> 

• **beginMaterialsChangeMulti**(`Array`): `void` <Badge type="tip" text="other" />

开始记录材质变换操作（支持记录多个StaticMesh）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`StaticMesh`](Gameplay.StaticMesh.md)[] |  多个对象 |


___

### beginMaterialsColorChange <Score text="beginMaterialsColorChange" /> 

• **beginMaterialsColorChange**(`Actor`, `Color`): `void` <Badge type="tip" text="other" />

开始记录材质颜色变换操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录的对象 |
| `Color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |


___

### beginSpawnActorChange <Score text="beginSpawnActorChange" /> 

• **beginSpawnActorChange**(): `void` <Badge type="tip" text="other" />

开始记录创建操作



___

### beginUncombinedActorChange <Score text="beginUncombinedActorChange" /> 

• **beginUncombinedActorChange**(): `void` <Badge type="tip" text="other" />

开始记录解组操作



___

### detachActorFormGizmo <Score text="detachActorFormGizmo" /> 

• **detachActorFormGizmo**(`Actor`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

移除物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 移除的actor |


___

### enableSelectActor <Score text="enableSelectActor" /> 

• **enableSelectActor**(`IsEnable`): `void` <Badge type="tip" text="other" />

设置是否可以选中物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsEnable` | `boolean` | 是否可以选中 |


___

### endActorTransformChange <Score text="endActorTransformChange" /> 

• **endActorTransformChange**(`Actor`): `void` <Badge type="tip" text="other" />

结束记录位置改变操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 记录的位置大小actor |


___

### endCombineActorChange <Score text="endCombineActorChange" /> 

• **endCombineActorChange**(`Actor`): `void` <Badge type="tip" text="other" />

结束记录打组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 打组后的锚点actor |


___

### endDeleteActorChange <Score text="endDeleteActorChange" /> 

• **endDeleteActorChange**(): `void` <Badge type="tip" text="other" />

结束记录删除操作



___

### endMaterialsChange <Score text="endMaterialsChange" /> 

• **endMaterialsChange**(`Actor`, `MaterialID`): `void` <Badge type="tip" text="other" />

结束记录材质变换操作(仅支持记录单个StaticMesh)，新工程更新后接口可废弃删掉


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录材质属性的actor |
| `MaterialID` | `string` | 材质ID |


___

### endMaterialsChangeMulti <Score text="endMaterialsChangeMulti" /> 

• **endMaterialsChangeMulti**(`Array`, `MaterialID`): `void` <Badge type="tip" text="other" />

结束记录材质变换操作（支持记录多个StaticMesh）


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | [`StaticMesh`](Gameplay.StaticMesh.md)[] | 操作的对象数组 |
| `MaterialID` | `string` | 材质ID |


___

### endMaterialsColorChange <Score text="endMaterialsColorChange" /> 

• **endMaterialsColorChange**(`Actor`, `Color`): `void` <Badge type="tip" text="other" />

结束记录材质颜色变换操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | [`StaticMesh`](Gameplay.StaticMesh.md) | 记录的actor |
| `Color` | [`LinearColor`](Type.LinearColor.md) | 颜色 |


___

### endMultiCombineActorChange <Score text="endMultiCombineActorChange" /> 

• **endMultiCombineActorChange**(`Actor`, `Array`): `void` <Badge type="tip" text="other" />

结束记录多组合并打组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 合并打组后的锚点actor |
| `Array` | `GameObject`[] | 合并打组前所有组锚点（或者单个物体）的actor数组 |


___

### endSpawnActorChange <Score text="endSpawnActorChange" /> 

• **endSpawnActorChange**(`Actor`): `void` <Badge type="tip" text="other" />

结束记录创建操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 记录的actor |


___

### endUncombinedActorChange <Score text="endUncombinedActorChange" /> 

• **endUncombinedActorChange**(`Array`): `void` <Badge type="tip" text="other" />

结束记录解组操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Array` | `GameObject`[] | 解组前所有组的锚点actor的数组 |


___

### focusToActors <Score text="focusToActors" /> 

• **focusToActors**(`Actors`): `void` <Badge type="tip" text="other" />

聚焦到物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actors` | [`GameObject`] | 对象actor |


___

### focusToGizmo <Score text="focusToGizmo" /> 

• **focusToGizmo**(): `void` <Badge type="tip" text="other" />

聚焦到坐标轴



___

### isRedoEmpty <Score text="isRedoEmpty" /> 

• **isRedoEmpty**(): `boolean` <Badge type="tip" text="other" />

是否可执行Redo操作true:表示当前没有可执行的步数，无法执行重做操作


#### Returns

`boolean`

是否可执行Redo操作

___

### isUndoEmpty <Score text="isUndoEmpty" /> 

• **isUndoEmpty**(): `boolean` <Badge type="tip" text="other" />

是否可执行Undo操作 true:表示当前没有可执行的步数，无法执行撤销操作


#### Returns

`boolean`

是否可执行Undo操作

___

### onAppendChange <Score text="onAppendChange" /> 

• **onAppendChange**(`Delegate`): `void` <Badge type="tip" text="other" />

主要用于设置撤销恢复按钮的可用性，如果有的话，可以配合IsUndoEmpty 和 IsRedoEmpty 函数来判断当前是否可以执行撤销恢复操作


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> | 记录撤销恢复代理 |


___

### onAttachChanged <Score text="onAttachChanged" /> 

• **onAttachChanged**(`Delegate`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | 有actor 附加到gizmo的时候触发的代理 |


___

### onAttachRedoChanged <Score text="onAttachRedoChanged" /> 

• **onAttachRedoChanged**(`Delegate`): `void` <Badge type="tip" text="other" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | attach 撤销的代理 |


___

### onDeleteActorRedo <Score text="onDeleteActorRedo" /> 

• **onDeleteActorRedo**(`Delegate`): `void` <Badge type="tip" text="other" />

Redo删除操作代理，会返回被删除的ActorID 和 资源ID


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`AssetGUID`: `string`, `ActorGUID`: `string`) => `void`\> | 返回被删除的actor代理 |


___

### onDeleteActorUndo <Score text="onDeleteActorUndo" /> 

• **onDeleteActorUndo**(`Delegate`): `void` <Badge type="tip" text="other" />

撤销删除操作代理，会返回被删除的Actor


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `OldGUID`: `string`, `NewString`: `string`) => `void`\> | 返回被删除的actor代理 |


___

### onGizmoVisibleChanged <Score text="onGizmoVisibleChanged" /> 

• **onGizmoVisibleChanged**(`Delegate`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

坐标轴隐藏显示代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | gizmo actor隐藏显示的代理 |


___

### onSelectActor <Score text="onSelectActor" /> 

• **onSelectActor**(`Delegate`): `void` <Badge type="tip" text="other" />

选择物体代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`, `IsGizmoActor`: `boolean`, `IsBlock`: `boolean`) => `void`\> | 选中actor的代理 |


___

### saveProject <Score text="saveProject" /> 

• **saveProject**(): `void` <Badge type="tip" text="other" />

保存当前场景



___

### setAdsorbDistance <Score text="setAdsorbDistance" /> 

• **setAdsorbDistance**(`InDistance`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置吸附距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDistance` | `number` |  吸附距离 |


___

### setGizmoActorLocation <Score text="setGizmoActorLocation" /> 

• **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Vector.md) | 坐标轴位置 |
| `IsRecordChange?` | `boolean` | 是否记录本次坐标轴位置变动 default:true |


___

### setGizmoActorLocationAndRotation <Score text="setGizmoActorLocationAndRotation" /> 

• **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴旋转和缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Vector.md) |  位置 |
| `NewRotation` | [`Rotation`](Type.Rotation.md) |  旋转 |


___

### setGizmoAxisColor <Score text="setGizmoAxisColor" /> 

• **setGizmoAxisColor**(`InAxis`, `InAxisColor`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAxis` | `string` |  单个坐标轴 |
| `InAxisColor` | [`LinearColor`](Type.LinearColor.md) |  颜色 |


___

### setGizmoHighlightColor <Score text="setGizmoHighlightColor" /> 

• **setGizmoHighlightColor**(`InHighlightColor`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴选中时的高亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InHighlightColor` | [`LinearColor`](Type.LinearColor.md) |  高亮颜色 |


___

### setGizmoScaleOffset <Score text="setGizmoScaleOffset" /> 

• **setGizmoScaleOffset**(`InOffset`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴模型整体缩放倍数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOffset` | `number` |  缩放倍数 |


___

### setIsAdsorb <Score text="setIsAdsorb" /> 

• **setIsAdsorb**(`InIsAdsorb`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置是否吸附


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InIsAdsorb` | `boolean` |  是否吸附 |


___

### showGizmoActor <Score text="showGizmoActor" /> 

• **showGizmoActor**(`showGizmoActor`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

设置坐标轴隐藏或者显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `showGizmoActor` | `boolean` | 显隐坐标轴 |


___

### switchGizmoMode <Score text="switchGizmoMode" /> 

• **switchGizmoMode**(`GizmoMode`): `void` <Badge type="tip" text="other" />

**`Deprecated`**

since:021 reason:更换接口到gizmo replacement:使用MobileEditor.getGizmo()获取

切换坐标轴模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GizmoMode` | [`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md) | 模式 |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`EditorMode`](MobileEditor.EditorMode.md) <Badge type="tip" text="other" />

获取editorMode的单例


#### Returns

[`EditorMode`](MobileEditor.EditorMode.md)

模式切换的单例
