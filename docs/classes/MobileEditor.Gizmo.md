[Gameplay](../groups/Gameplay.Gameplay.md) / Gizmo

# Gizmo <Badge type="tip" text="Class" /> <Score text="Gizmo" />

Gizmo

**`Groups`**

GAMEPLAY

**`Instance`**

## Table of contents

| Accessors |
| :-----|
| **[axisXColor](MobileEditor.Gizmo.md#axisxcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取X轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisXYColor](MobileEditor.Gizmo.md#axisxycolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取XZ平面的颜色|
| **[axisXZColor](MobileEditor.Gizmo.md#axisxzcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取XZ平面的颜色|
| **[axisYColor](MobileEditor.Gizmo.md#axisycolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取y轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisYZColor](MobileEditor.Gizmo.md#axisyzcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取YZ平面的颜色|
| **[axisZColor](MobileEditor.Gizmo.md#axiszcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取z轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[currentCoordinateAxis](MobileEditor.Gizmo.md#currentcoordinateaxis)**(): [`GizmoCoordinateType`](../enums/MobileEditor.GizmoCoordinateType.md) <br> 获取当前选中的轴|
| **[gizmoActorRotation](MobileEditor.Gizmo.md#gizmoactorrotation)**(`NewRotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置坐标轴旋转|
| **[positionGizmoAxisLength](MobileEditor.Gizmo.md#positiongizmoaxislength)**(): `number` <br> 获取位移轴长度|
| **[rotatorXSurfaceColor](MobileEditor.Gizmo.md#rotatorxsurfacecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取X轴旋转面的颜色|
| **[rotatorYSurfaceColor](MobileEditor.Gizmo.md#rotatorysurfacecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取y轴旋转面的颜色|
| **[rotatorZSurfaceColor](MobileEditor.Gizmo.md#rotatorzsurfacecolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取z轴旋转面的颜色|
| **[scaleEqualRatioEnable](MobileEditor.Gizmo.md#scaleequalratioenable)**(): `boolean` <br> 获取是否开启等比缩放功能|
| **[scaleGizmoAxisLength](MobileEditor.Gizmo.md#scalegizmoaxislength)**(): `number` <br> 获取缩放轴长度|

| Methods |
| :-----|
| **[addIgnoreActor](MobileEditor.Gizmo.md#addignoreactor)**(`actor`: `Base` \): `void` <br> 添加需要被坐标轴忽略的object|
| **[attachActorToGizmo](MobileEditor.Gizmo.md#attachactortogizmo)**(`Actor`: `GameObject`, `IsRecordChange?`: `boolean`): `void` <br> 附加物体到坐标轴|
| **[detachActorFormGizmo](MobileEditor.Gizmo.md#detachactorformgizmo)**(`Actor`: `GameObject`): `void` <br> 移除物体到坐标轴|
| **[onAttachChanged](MobileEditor.Gizmo.md#onattachchanged)**(`Delegate`: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\>): `void` <br> 附加代理|
| **[onGizemoSelectStatusChanged](MobileEditor.Gizmo.md#ongizemoselectstatuschanged)**(`Delegate`: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\>): `void` <br> 附加代理|
| **[onGizmoVisibleChanged](MobileEditor.Gizmo.md#ongizmovisiblechanged)**(`Delegate`: [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\>): `void` <br> 坐标轴隐藏显示代理|
| **[setAdsorbDistance](MobileEditor.Gizmo.md#setadsorbdistance)**(`InDistance`: `number`): `void` <br> 设置吸附距离|
| **[setGizmoActorLocation](MobileEditor.Gizmo.md#setgizmoactorlocation)**(`NewLocation`: [`Vector`](Type.Vector.md), `IsRecordChange?`: `boolean`): `void` <br> 设置坐标轴位置|
| **[setGizmoActorLocationAndRotation](MobileEditor.Gizmo.md#setgizmoactorlocationandrotation)**(`NewLocation`: [`Vector`](Type.Vector.md), `NewRotation`: [`Rotation`](Type.Rotation.md)): `void` <br> 设置坐标轴旋转和缩放|
| **[setGizmoHighlightColor](MobileEditor.Gizmo.md#setgizmohighlightcolor)**(`InHighlightColor`: [`LinearColor`](Type.LinearColor.md)): `void` <br> 设置坐标轴选中时的高亮颜色|
| **[setGizmoScaleOffset](MobileEditor.Gizmo.md#setgizmoscaleoffset)**(`InOffset`: `number`): `void` <br> 设置坐标轴模型整体缩放倍数|
| **[setIsAdsorb](MobileEditor.Gizmo.md#setisadsorb)**(`InIsAdsorb`: `boolean`): `void` <br> 设置是否吸附|
| **[showGizmoActor](MobileEditor.Gizmo.md#showgizmoactor)**(`[showGizmoActor](MobileEditor.Gizmo.md#showgizmoactor)`): `void` <br> 设置坐标轴隐藏或者显示|
| **[switchGizmoMode](MobileEditor.Gizmo.md#switchgizmomode)**(`GizmoMode`: [`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md)): `void` <br> 切换坐标轴模式|

## Accessors

### axisXColor <Score text="axisXColor" /> 

• `get` **axisXColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取x轴旋的颜色 ,类型 LinearColor 范围 0-1

• `set` **axisXColor**(`color`): `void` <Badge type="tip" text="client" />

设置X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisXYColor <Score text="axisXYColor" /> 

• `get` **axisXYColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取XZ平面的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取xy轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisXYColor**(`color`): `void` <Badge type="tip" text="client" />

设置XZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisXZColor <Score text="axisXZColor" /> 

• `get` **axisXZColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取XZ平面的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取xz轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisXZColor**(`color`): `void` <Badge type="tip" text="client" />

设置XZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisYColor <Score text="axisYColor" /> 

• `get` **axisYColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取y轴旋的颜色, 类型 LinearColor 范围 0-1

• `set` **axisYColor**(`color`): `void` <Badge type="tip" text="client" />

设置y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisYZColor <Score text="axisYZColor" /> 

• `get` **axisYZColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取YZ平面的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取yz轴旋的颜色 类型 LinearColor 范围 0-1

• `set` **axisYZColor**(`color`): `void` <Badge type="tip" text="client" />

设置YZ平面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### axisZColor <Score text="axisZColor" /> 

• `get` **axisZColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取z轴旋的颜色, 类型 LinearColor 范围 0-1

• `set` **axisZColor**(`color`): `void` <Badge type="tip" text="client" />

设置z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### currentCoordinateAxis <Score text="currentCoordinateAxis" /> 

• `get` **currentCoordinateAxis**(): [`GizmoCoordinateType`](../enums/MobileEditor.GizmoCoordinateType.md) <Badge type="tip" text="client" />

获取当前选中的轴


#### Returns

[`GizmoCoordinateType`](../enums/MobileEditor.GizmoCoordinateType.md)

___

### gizmoActorRotation <Score text="gizmoActorRotation" /> 

• `set` **gizmoActorRotation**(`NewRotation`): `void` <Badge type="tip" text="client" />

设置坐标轴旋转


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewRotation` | [`Rotation`](Type.Rotation.md) | 新的旋转 |


___

### positionGizmoAxisLength <Score text="positionGizmoAxisLength" /> 

• `get` **positionGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

获取位移轴长度


#### Returns

`number`

• `set` **positionGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

设置位移轴长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` |  长度 |


___

### rotatorXSurfaceColor <Score text="rotatorXSurfaceColor" /> 

• `get` **rotatorXSurfaceColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="other" />

获取X轴旋转面的颜色

只在客户端调用生效 类型 LinearColor 范围 0-1

#### Returns

[`LinearColor`](Type.LinearColor.md)

• `set` **rotatorXSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置X轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 类型 LinearColor 范围 0-1 |


___

### rotatorYSurfaceColor <Score text="rotatorYSurfaceColor" /> 

• `get` **rotatorYSurfaceColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取y轴旋转面的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取y轴旋转面的颜色 类型 LinearColor 范围 0-1

• `set` **rotatorYSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置y轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### rotatorZSurfaceColor <Score text="rotatorZSurfaceColor" /> 

• `get` **rotatorZSurfaceColor**(): [`LinearColor`](Type.LinearColor.md) <Badge type="tip" text="client" />

获取z轴旋转面的颜色


#### Returns

[`LinearColor`](Type.LinearColor.md)

获取z轴旋转面的颜色 类型 LinearColor 范围 0-1

• `set` **rotatorZSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

设置z轴旋转面的颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`LinearColor`](Type.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |


___

### scaleEqualRatioEnable <Score text="scaleEqualRatioEnable" /> 

• `get` **scaleEqualRatioEnable**(): `boolean` <Badge type="tip" text="client" />

获取是否开启等比缩放功能


#### Returns

`boolean`

• `set` **scaleEqualRatioEnable**(`InEnable`): `void` <Badge type="tip" text="client" />

设置是否开启等比缩放功能


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InEnable` | `boolean` |  是否开启 |


___

### scaleGizmoAxisLength <Score text="scaleGizmoAxisLength" /> 

• `get` **scaleGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

获取缩放轴长度


#### Returns

`number`

• `set` **scaleGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

设置缩放轴长度


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` |  长度 |


## Methods

### addIgnoreActor <Score text="addIgnoreActor" /> 

• **addIgnoreActor**(`actor`): `void` <Badge type="tip" text="client" />

添加需要被坐标轴忽略的object


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actor` | `Base` \| `GameObject` | 忽略的object |


___

### attachActorToGizmo <Score text="attachActorToGizmo" /> 

• **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

附加物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` |  附加到的actor |
| `IsRecordChange?` | `boolean` |  是否支持撤销 default:false |


___

### detachActorFormGizmo <Score text="detachActorFormGizmo" /> 

• **detachActorFormGizmo**(`Actor`): `void` <Badge type="tip" text="client" />

移除物体到坐标轴


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Actor` | `GameObject` | 移除的actor |


___

### onAttachChanged <Score text="onAttachChanged" /> 

• **onAttachChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`Content`: `GameObject`) => `void`\> | 有actor 附加到gizmo的时候触发的代理 |


___

### onGizemoSelectStatusChanged <Score text="onGizemoSelectStatusChanged" /> 

• **onGizemoSelectStatusChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\> | 当前是否 选中坐标轴的回调,true为点击选中 false为抬起手指取消选中 |


___

### onGizmoVisibleChanged <Score text="onGizmoVisibleChanged" /> 

• **onGizmoVisibleChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

坐标轴隐藏显示代理


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Delegate` | [`MulticastDelegate`](Type.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | gizmo actor隐藏显示的代理 |


___

### setAdsorbDistance <Score text="setAdsorbDistance" /> 

• **setAdsorbDistance**(`InDistance`): `void` <Badge type="tip" text="client" />

设置吸附距离


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InDistance` | `number` |  吸附距离 |


___

### setGizmoActorLocation <Score text="setGizmoActorLocation" /> 

• **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

设置坐标轴位置


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Vector.md) | 坐标轴位置 |
| `IsRecordChange?` | `boolean` | 是否记录本次坐标轴位置变动 default:true |


___

### setGizmoActorLocationAndRotation <Score text="setGizmoActorLocationAndRotation" /> 

• **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void` <Badge type="tip" text="client" />

设置坐标轴旋转和缩放


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLocation` | [`Vector`](Type.Vector.md) |  位置 |
| `NewRotation` | [`Rotation`](Type.Rotation.md) |  旋转 |


___

### setGizmoHighlightColor <Score text="setGizmoHighlightColor" /> 

• **setGizmoHighlightColor**(`InHighlightColor`): `void` <Badge type="tip" text="client" />

设置坐标轴选中时的高亮颜色


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InHighlightColor` | [`LinearColor`](Type.LinearColor.md) |  高亮颜色 ,类型 LinearColor 范围 0-1 |


___

### setGizmoScaleOffset <Score text="setGizmoScaleOffset" /> 

• **setGizmoScaleOffset**(`InOffset`): `void` <Badge type="tip" text="client" />

设置坐标轴模型整体缩放倍数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InOffset` | `number` |  缩放倍数 |


___

### setIsAdsorb <Score text="setIsAdsorb" /> 

• **setIsAdsorb**(`InIsAdsorb`): `void` <Badge type="tip" text="client" />

设置是否吸附


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InIsAdsorb` | `boolean` |  是否吸附 |


___

### showGizmoActor <Score text="showGizmoActor" /> 

• **showGizmoActor**(`showGizmoActor`): `void` <Badge type="tip" text="client" />

设置坐标轴隐藏或者显示


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `showGizmoActor` | `boolean` | 显隐坐标轴 |


___

### switchGizmoMode <Score text="switchGizmoMode" /> 

• **switchGizmoMode**(`GizmoMode`): `void` <Badge type="tip" text="client" />

切换坐标轴模式


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GizmoMode` | [`GizmoModeType`](../enums/MobileEditor.GizmoModeType.md) | 模式 |

