[TYPE](../groups/Core.TYPE.md) / Gizmo

# Gizmo <Badge type="tip" text="Class" /> <Score text="Gizmo" />

<span class="content-big">

Gizmo

</span>

**`Instance`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[axisXColor](mw.Gizmo.md#axisxcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| :-----|
| 设置X轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisXYColor](mw.Gizmo.md#axisxycolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置XZ平面的颜色|
| **[axisXZColor](mw.Gizmo.md#axisxzcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置XZ平面的颜色|
| **[axisYColor](mw.Gizmo.md#axisycolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置y轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[axisYZColor](mw.Gizmo.md#axisyzcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置YZ平面的颜色|
| **[axisZColor](mw.Gizmo.md#axiszcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置z轴的颜色,位移.旋转.缩放三者的X轴保持一致|
| **[currentCoordinateAxis](mw.Gizmo.md#currentcoordinateaxis)**(): [`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md)  |
| 获取当前选中的轴|
| **[enablePositionAdsorb](mw.Gizmo.md#enablepositionadsorb)**(`enable`: `boolean`): `void`  |
| 设置是否开启位移吸附|
| **[enablePositionSnapToGrid](mw.Gizmo.md#enablepositionsnaptogrid)**(`enable`: `boolean`): `void`  |
| 设置是否开启位移网格|
| **[enableProportionalScale](mw.Gizmo.md#enableproportionalscale)**(`enable`: `boolean`): `void`  |
| 设置是否开启等比缩放|
| **[enableRotatorSnapToGrid](mw.Gizmo.md#enablerotatorsnaptogrid)**(`enable`: `boolean`): `void`  |
| 设置是否开启旋转网格|
| **[enableScaleSnapToGrid](mw.Gizmo.md#enablescalesnaptogrid)**(`enable`: `boolean`): `void`  |
| 设置是否开启缩放网格|
| **[gizmoActorRotation](mw.Gizmo.md#gizmoactorrotation)**(`NewRotation`: [`Rotation`](mw.Rotation.md)): `void`  |
| 设置坐标轴旋转|
| **[isPositionAdsorbEnabled](mw.Gizmo.md#ispositionadsorbenabled)**(): `boolean`  |
| 获取是否开启位移吸附|
| **[isPositionSnapToGridEnabled](mw.Gizmo.md#ispositionsnaptogridenabled)**(): `boolean`  |
| 获取是否开启位移网格|
| **[isProportionalScaleEnabled](mw.Gizmo.md#isproportionalscaleenabled)**(): `boolean`  |
| 获取是否开启等比缩放|
| **[isRotatorSnapToGridEnabled](mw.Gizmo.md#isrotatorsnaptogridenabled)**(): `boolean`  |
| 获取是否开启旋转网格|
| **[isScaleSnapToGridEnabled](mw.Gizmo.md#isscalesnaptogridenabled)**(): `boolean`  |
| 获取是否开启缩放网格|
| **[positionAdsorbDistance](mw.Gizmo.md#positionadsorbdistance)**(): `number`  |
| 修改位移吸附距离|
| **[positionGizmoAxisLength](mw.Gizmo.md#positiongizmoaxislength)**(): `number`  |
| 设置位移轴长度|
| **[positionSnapGridSize](mw.Gizmo.md#positionsnapgridsize)**(): `number`  |
| 设置位移网格大小|
| **[rotatorSnapGridSize](mw.Gizmo.md#rotatorsnapgridsize)**(): `number`  |
| 设置旋转网格大小|
| **[rotatorXSurfaceColor](mw.Gizmo.md#rotatorxsurfacecolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置X轴旋转面的颜色|
| **[rotatorYSurfaceColor](mw.Gizmo.md#rotatorysurfacecolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置y轴旋转面的颜色|
| **[rotatorZSurfaceColor](mw.Gizmo.md#rotatorzsurfacecolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置z轴旋转面的颜色|
| **[scaleGizmoAxisLength](mw.Gizmo.md#scalegizmoaxislength)**(): `number`  |
| 设置缩放轴长度|
| **[scaleGizmoBoundary](mw.Gizmo.md#scalegizmoboundary)**(`boundary`: `number`): `void`  |
| 设置gizmo缩放时候的边界,在缩放到达这个数值的时候会直接设置到目标数值|
| **[scaleGizmoStepNumber](mw.Gizmo.md#scalegizmostepnumber)**(`stepNumber`: `number`): `void`  |
| 设置gizmo到目标的帧数,具体计算方式为 (1/当前帧delta)/stepNumber|
| **[scaleSnapGridSize](mw.Gizmo.md#scalesnapgridsize)**(): `number`  |
| 设置缩放网格大小|

### Methods <Score text="Methods" /> 
| **[addIgnoreActor](mw.Gizmo.md#addignoreactor)**(`actor`: [`GameObject`](mw.GameObject.md)  `Base`): `void`  |
| :-----|
| 添加需要被坐标轴忽略的object|
| **[attachActorToGizmo](mw.Gizmo.md#attachactortogizmo)**(`Actor`: [`GameObject`](mw.GameObject.md), `IsRecordChange?`: `boolean`): `void`  |
| 附加物体到坐标轴|
| **[detachActorFormGizmo](mw.Gizmo.md#detachactorformgizmo)**(`Actor`: [`GameObject`](mw.GameObject.md)): `void`  |
| 移除物体到坐标轴|
| **[onAttachChanged](mw.Gizmo.md#onattachchanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\>): `void`  |
| 附加代理|
| **[onGizemoSelectStatusChanged](mw.Gizmo.md#ongizemoselectstatuschanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\>): `void`  |
| 附加代理|
| **[onGizmoVisibleChanged](mw.Gizmo.md#ongizmovisiblechanged)**(`Delegate`: [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\>): `void`  |
| 坐标轴隐藏显示代理|
| **[setGizmoActorLocation](mw.Gizmo.md#setgizmoactorlocation)**(`NewLocation`: [`Vector`](mw.Vector.md), `IsRecordChange?`: `boolean`): `void`  |
| 设置坐标轴位置|
| **[setGizmoActorLocationAndRotation](mw.Gizmo.md#setgizmoactorlocationandrotation)**(`NewLocation`: [`Vector`](mw.Vector.md), `NewRotation`: [`Rotation`](mw.Rotation.md)): `void`  |
| 设置坐标轴旋转和缩放|
| **[setGizmoHighlightColor](mw.Gizmo.md#setgizmohighlightcolor)**(`InHighlightColor`: [`LinearColor`](mw.LinearColor.md)): `void`  |
| 设置坐标轴选中时的高亮颜色|
| **[setGizmoScaleOffset](mw.Gizmo.md#setgizmoscaleoffset)**(`InOffset`: `number`): `void`  |
| 设置坐标轴模型整体缩放倍数|
| **[showGizmoActor](mw.Gizmo.md#showgizmoactor)**(`[showGizmoActor](mw.Gizmo.md#showgizmoactor)`): `void`  |
| 设置坐标轴隐藏或者显示|
| **[switchGizmoMode](mw.Gizmo.md#switchgizmomode)**(`GizmoMode`: [`GizmoModeType`](../enums/mw.GizmoModeType.md)): `void`  |
| 切换坐标轴模式|

## Accessors

### axisXColor <Score text="axisXColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisXColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisXColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取x轴旋的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置X轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### axisXYColor <Score text="axisXYColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisXYColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisXYColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取XZ平面的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取xy轴旋的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置XZ平面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### axisXZColor <Score text="axisXZColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisXZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisXZColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取XZ平面的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取xz轴旋的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置XZ平面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### axisYColor <Score text="axisYColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisYColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisYColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取y轴旋的颜色, 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置y轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### axisYZColor <Score text="axisYZColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisYZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisYZColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取YZ平面的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取yz轴旋的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置YZ平面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### axisZColor <Score text="axisZColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **axisZColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **axisZColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取z轴旋的颜色, 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置z轴的颜色,位移.旋转.缩放三者的X轴保持一致


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### currentCoordinateAxis <Score text="currentCoordinateAxis" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **currentCoordinateAxis**(): [`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md) <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取当前选中的轴


#### Returns

| [`GizmoCoordinateType`](../enums/mw.GizmoCoordinateType.md) |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### enablePositionAdsorb <Score text="enablePositionAdsorb" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **enablePositionAdsorb**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否开启位移吸附


#### Parameters

| `enable` `boolean` |  是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### enablePositionSnapToGrid <Score text="enablePositionSnapToGrid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **enablePositionSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否开启位移网格


#### Parameters

| `enable` `boolean` |  是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### enableProportionalScale <Score text="enableProportionalScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **enableProportionalScale**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否开启等比缩放


#### Parameters

| `enable` `boolean` |  是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### enableRotatorSnapToGrid <Score text="enableRotatorSnapToGrid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **enableRotatorSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否开启旋转网格


#### Parameters

| `enable` `boolean` |  是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### enableScaleSnapToGrid <Score text="enableScaleSnapToGrid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **enableScaleSnapToGrid**(`enable`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否开启缩放网格


#### Parameters

| `enable` `boolean` |  是否开启 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### gizmoActorRotation <Score text="gizmoActorRotation" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **gizmoActorRotation**(`NewRotation`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置坐标轴旋转


#### Parameters

| `NewRotation` [`Rotation`](mw.Rotation.md) | 新的旋转 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### isPositionAdsorbEnabled <Score text="isPositionAdsorbEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isPositionAdsorbEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启位移吸附


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isPositionSnapToGridEnabled <Score text="isPositionSnapToGridEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isPositionSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启位移网格


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isProportionalScaleEnabled <Score text="isProportionalScaleEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isProportionalScaleEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启等比缩放


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isRotatorSnapToGridEnabled <Score text="isRotatorSnapToGridEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isRotatorSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启旋转网格


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### isScaleSnapToGridEnabled <Score text="isScaleSnapToGridEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isScaleSnapToGridEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启缩放网格


#### Returns

| `boolean` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### positionAdsorbDistance <Score text="positionAdsorbDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **positionAdsorbDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **positionAdsorbDistance**(`distance`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取位移吸附距离


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


修改位移吸附距离


#### Parameters

| `distance` `number` |  位移吸附距离 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### positionGizmoAxisLength <Score text="positionGizmoAxisLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **positionGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **positionGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取位移轴长度


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置位移轴长度


#### Parameters

| `length` `number` |  长度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### positionSnapGridSize <Score text="positionSnapGridSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **positionSnapGridSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **positionSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取位移网格大小


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置位移网格大小


#### Parameters

| `size` `number` |  位移网格大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rotatorSnapGridSize <Score text="rotatorSnapGridSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotatorSnapGridSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **rotatorSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取旋转网格大小


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置旋转网格大小


#### Parameters

| `size` `number` |  旋转网格大小 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rotatorXSurfaceColor <Score text="rotatorXSurfaceColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotatorXSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="other" />

</th>
<th style="text-align: left">

• `set` **rotatorXSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取X轴旋转面的颜色

只在客户端调用生效 类型 LinearColor 范围 0-1

#### Returns

| [`LinearColor`](mw.LinearColor.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置X轴旋转面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rotatorYSurfaceColor <Score text="rotatorYSurfaceColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotatorYSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **rotatorYSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取y轴旋转面的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取y轴旋转面的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置y轴旋转面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### rotatorZSurfaceColor <Score text="rotatorZSurfaceColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **rotatorZSurfaceColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **rotatorZSurfaceColor**(`color`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取z轴旋转面的颜色


#### Returns

| [`LinearColor`](mw.LinearColor.md) | 获取z轴旋转面的颜色 类型 LinearColor 范围 0-1 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置z轴旋转面的颜色


#### Parameters

| `color` [`LinearColor`](mw.LinearColor.md) |  设置的颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scaleGizmoAxisLength <Score text="scaleGizmoAxisLength" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scaleGizmoAxisLength**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scaleGizmoAxisLength**(`length`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取缩放轴长度


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置缩放轴长度


#### Parameters

| `length` `number` |  长度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scaleGizmoBoundary <Score text="scaleGizmoBoundary" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **scaleGizmoBoundary**(`boundary`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置gizmo缩放时候的边界,在缩放到达这个数值的时候会直接设置到目标数值


#### Parameters

| `boundary` `number` |  边界 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scaleGizmoStepNumber <Score text="scaleGizmoStepNumber" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `set` **scaleGizmoStepNumber**(`stepNumber`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置gizmo到目标的帧数,具体计算方式为 (1/当前帧delta)/stepNumber


#### Parameters

| `stepNumber` `number` |  设置到目标缩放值的数值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scaleSnapGridSize <Score text="scaleSnapGridSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scaleSnapGridSize**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **scaleSnapGridSize**(`size`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取缩放网格大小


#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置缩放网格大小


#### Parameters

| `size` `number` |  缩放网格大小 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### addIgnoreActor <Score text="addIgnoreActor" /> 

• **addIgnoreActor**(`actor`): `void` <Badge type="tip" text="client" />

添加需要被坐标轴忽略的object

#### Parameters

| `actor` [`GameObject`](mw.GameObject.md)  `Base` | 忽略的object |
| :------ | :------ |



___

### attachActorToGizmo <Score text="attachActorToGizmo" /> 

• **attachActorToGizmo**(`Actor`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

附加物体到坐标轴

#### Parameters

| `Actor` [`GameObject`](mw.GameObject.md) |  附加到的actor |
| :------ | :------ |
| `IsRecordChange?` `boolean` |  是否支持撤销 default:false |



___

### detachActorFormGizmo <Score text="detachActorFormGizmo" /> 

• **detachActorFormGizmo**(`Actor`): `void` <Badge type="tip" text="client" />

移除物体到坐标轴

#### Parameters

| `Actor` [`GameObject`](mw.GameObject.md) | 移除的actor |
| :------ | :------ |



___

### onAttachChanged <Score text="onAttachChanged" /> 

• **onAttachChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理

#### Parameters

| `Delegate` [`MulticastDelegate`](mw.MulticastDelegate.md)<(`Content`: [`GameObject`](mw.GameObject.md)) => `void`\> | 有actor 附加到gizmo的时候触发的代理 |
| :------ | :------ |



___

### onGizemoSelectStatusChanged <Score text="onGizemoSelectStatusChanged" /> 

• **onGizemoSelectStatusChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

附加代理

#### Parameters

| `Delegate` [`MulticastDelegate`](mw.MulticastDelegate.md)<(`bSelected`: `boolean`) => `void`\> | 当前是否 选中坐标轴的回调,true为点击选中 false为抬起手指取消选中 |
| :------ | :------ |



___

### onGizmoVisibleChanged <Score text="onGizmoVisibleChanged" /> 

• **onGizmoVisibleChanged**(`Delegate`): `void` <Badge type="tip" text="client" />

坐标轴隐藏显示代理

#### Parameters

| `Delegate` [`MulticastDelegate`](mw.MulticastDelegate.md)<(`IsVisible`: `boolean`) => `void`\> | gizmo actor隐藏显示的代理 |
| :------ | :------ |



___

### setGizmoActorLocation <Score text="setGizmoActorLocation" /> 

• **setGizmoActorLocation**(`NewLocation`, `IsRecordChange?`): `void` <Badge type="tip" text="client" />

设置坐标轴位置

#### Parameters

| `NewLocation` [`Vector`](mw.Vector.md) | 坐标轴位置 |
| :------ | :------ |
| `IsRecordChange?` `boolean` | 是否记录本次坐标轴位置变动 default:true |



___

### setGizmoActorLocationAndRotation <Score text="setGizmoActorLocationAndRotation" /> 

• **setGizmoActorLocationAndRotation**(`NewLocation`, `NewRotation`): `void` <Badge type="tip" text="client" />

设置坐标轴旋转和缩放

#### Parameters

| `NewLocation` [`Vector`](mw.Vector.md) |  位置 |
| :------ | :------ |
| `NewRotation` [`Rotation`](mw.Rotation.md) |  旋转 |



___

### setGizmoHighlightColor <Score text="setGizmoHighlightColor" /> 

• **setGizmoHighlightColor**(`InHighlightColor`): `void` <Badge type="tip" text="client" />

设置坐标轴选中时的高亮颜色

#### Parameters

| `InHighlightColor` [`LinearColor`](mw.LinearColor.md) |  高亮颜色 ,类型 LinearColor 范围 0-1 |
| :------ | :------ |



___

### setGizmoScaleOffset <Score text="setGizmoScaleOffset" /> 

• **setGizmoScaleOffset**(`InOffset`): `void` <Badge type="tip" text="client" />

设置坐标轴模型整体缩放倍数

#### Parameters

| `InOffset` `number` |  缩放倍数 |
| :------ | :------ |



___

### showGizmoActor <Score text="showGizmoActor" /> 

• **showGizmoActor**(`showGizmoActor`): `void` <Badge type="tip" text="client" />

设置坐标轴隐藏或者显示

#### Parameters

| `showGizmoActor` `boolean` | 显隐坐标轴 |
| :------ | :------ |



___

### switchGizmoMode <Score text="switchGizmoMode" /> 

• **switchGizmoMode**(`GizmoMode`): `void` <Badge type="tip" text="client" />

切换坐标轴模式

#### Parameters

| `GizmoMode` [`GizmoModeType`](../enums/mw.GizmoModeType.md) | 模式 |
| :------ | :------ |


