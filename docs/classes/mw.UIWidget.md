[UI](../groups/Core.UI.md) / UIWidget

# UIWidget <Badge type="tip" text="Class" /> <Score text="UIWidget" />

<p class="content-big">

世界UI组件

</p>

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`UIWidget`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new GameObject**()  |
| :----- |
:::


### Properties <Score text="Properties" /> 


::: details 点击查看继承
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[distanceScaleFactor](mw.UIWidget.md#distancescalefactor)**(): `number`  |
| :-----|
| 设置缩放距离系数|
| **[drawSize](mw.UIWidget.md#drawsize)**(): [`Vector2`](mw.Vector2.md)  |
| 设置实际渲染大小|
| **[extraParam](mw.UIWidget.md#extraparam)**(): `string`  |
| 设置扩展参数|
| **[headUIMaxVisibleDistance](mw.UIWidget.md#headuimaxvisibledistance)**(): `number`  |
| 设置最大头顶UI可见距离|
| **[hideByDistanceEnable](mw.UIWidget.md#hidebydistanceenable)**(): `boolean`  |
| 设置是否启用最大可见距离|
| **[interaction](mw.UIWidget.md#interaction)**(): `boolean`  |
| 设置世界UI交互状态|
| **[isEnemy](mw.UIWidget.md#isenemy)**(): `boolean`  |
| 设置是否作为敌方玩家，敌方玩家不显示头顶UI|
| **[occlusionEnable](mw.UIWidget.md#occlusionenable)**(): `boolean`  |
| 设置是否可被遮挡|
| **[pivot](mw.UIWidget.md#pivot)**(): [`Vector2`](mw.Vector2.md)  |
| 设置锚点位置|
| **[scaledByDistanceEnable](mw.UIWidget.md#scaledbydistanceenable)**(): `boolean`  |
| 设置是否开启近大远小|
| **[selfOcclusion](mw.UIWidget.md#selfocclusion)**(): `boolean`  |
| 设置是否可被自己遮挡|
| **[translucentSortPriority](mw.UIWidget.md#translucentsortpriority)**(): `number`  |
| 设置渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方|
| **[widgetSpace](mw.UIWidget.md#widgetspace)**(): [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md)  |
| 设置显示方式|


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`  |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`  |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`  |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`  |
| 设置物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)  |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)  |
| 设置父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`  |
| 设置当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)  |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[getTargetUIWidget](mw.UIWidget.md#gettargetuiwidget)**(): [`UserWidget`](mw.UserWidget.md)  |
| :-----|
| 获取UI对象资源|
| **[refresh](mw.UIWidget.md#refresh)**(): `void`  |
| 请求重新绘制|
| **[setTargetUIWidget](mw.UIWidget.md#settargetuiwidget)**(`uiUserWidget`: [`UserWidget`](mw.UserWidget.md)): `void`  |
| 设置UI，可以对当前的UI设置UI资源，UI资源可以从路径获取或直接取其他UI组件引用的资源|
| **[setUIbyID](mw.UIWidget.md#setuibyid)**(`ID`: `string`): `void`  |
| 通过GUID设置UI|


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| :-----|
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)  |
| 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void`  |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`  |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据gameObjectId查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]  |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)  |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找所有的子物体|
| **[getScript](mw.GameObject.md#getscript)**(`id`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScriptByName](mw.GameObject.md#getscriptbyname)**(`name`: `string`): [`Script`](mw.Script.md)  |
| 获得当前物体下的指定脚本|
| **[getScripts](mw.GameObject.md#getscripts)**(): [`Script`](mw.Script.md)[]  |
| 获得当前物体下的所有脚本|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`  |
| 获取物体是否被显示|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean` \, `propagateToChildren?`: `boolean`): `void`  |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过gameObjectId异步查找GameObject,默认是10秒,可以通过 `ScriptingSettings.setGlobalAsyncOverTime(1000 * 10);|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>  |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>  |
| 异步构造一个物体，资源不存在会先去下载资源再去创建|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过gameObjectId查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]  |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)  |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>  |
| 构造一个物体|
:::


## Properties

## Accessors
___

### distanceScaleFactor <Score text="distanceScaleFactor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **distanceScaleFactor**(): `number`

</th>
<th style="text-align: left">

• `set` **distanceScaleFactor**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取缩放距离系数

#### Returns

| `number` | 距离系数 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置缩放距离系数

#### Parameters

| `Value` `number` | 距离系数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### drawSize <Score text="drawSize" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **drawSize**(): [`Vector2`](mw.Vector2.md)

</th>
<th style="text-align: left">

• `set` **drawSize**(`newSize`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取实际渲染大小

#### Returns

| [`Vector2`](mw.Vector2.md) | 渲染大小2D |
| :------ | :------ |


</td>
<td style="text-align: left">


设置实际渲染大小

#### Parameters

| `newSize` [`Vector2`](mw.Vector2.md) | 渲染大小2D |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### extraParam <Score text="extraParam" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **extraParam**(): `string`

</th>
<th style="text-align: left">

• `set` **extraParam**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取扩展参数

#### Returns

| `string` | 扩展参数 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置扩展参数

#### Parameters

| `Value` `string` | 扩展参数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### headUIMaxVisibleDistance <Score text="headUIMaxVisibleDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **headUIMaxVisibleDistance**(): `number`

</th>
<th style="text-align: left">

• `set` **headUIMaxVisibleDistance**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取最大头顶UI可见距离

#### Returns

| `number` | 可见距离 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置最大头顶UI可见距离

#### Parameters

| `Value` `number` | 可见距离 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### hideByDistanceEnable <Score text="hideByDistanceEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **hideByDistanceEnable**(): `boolean`

</th>
<th style="text-align: left">

• `set` **hideByDistanceEnable**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否启用最大可见距离

#### Returns

| `boolean` | true：开启 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否启用最大可见距离

#### Parameters

| `Value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### interaction <Score text="interaction" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **interaction**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **interaction**(`inInteraction`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取世界UI交互状态

::: warning Precautions

对世界UI，头顶UI生效

:::


#### Returns

| `boolean` | 是否可交互 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置世界UI交互状态

::: warning Precautions

对世界UI，头顶UI生效

:::

**`Effect`**


#### Parameters

| `inInteraction` `boolean` | 是否可交互 |
| :------ | :------ |


是否设置成功


</td>
</tr></tbody>
</table>

___

### isEnemy <Score text="isEnemy" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **isEnemy**(): `boolean`

</th>
<th style="text-align: left">

• `set` **isEnemy**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否作为敌方玩家，敌方玩家不显示头顶UI

#### Returns

| `boolean` | 布尔值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否作为敌方玩家，敌方玩家不显示头顶UI

#### Parameters

| `Value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### occlusionEnable <Score text="occlusionEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **occlusionEnable**(): `boolean`

</th>
<th style="text-align: left">

• `set` **occlusionEnable**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否可被遮挡

#### Returns

| `boolean` | true：可被遮挡 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否可被遮挡

#### Parameters

| `Value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### pivot <Score text="pivot" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **pivot**(): [`Vector2`](mw.Vector2.md)

</th>
<th style="text-align: left">

• `set` **pivot**(`position`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取锚点位置

#### Returns

| [`Vector2`](mw.Vector2.md) | 位置信息 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置锚点位置

#### Parameters

| `position` [`Vector2`](mw.Vector2.md) | 位置信息 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### scaledByDistanceEnable <Score text="scaledByDistanceEnable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **scaledByDistanceEnable**(): `boolean`

</th>
<th style="text-align: left">

• `set` **scaledByDistanceEnable**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否开启近大远小

#### Returns

| `boolean` | true：开启 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否开启近大远小

#### Parameters

| `Value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### selfOcclusion <Score text="selfOcclusion" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **selfOcclusion**(): `boolean`

</th>
<th style="text-align: left">

• `set` **selfOcclusion**(`Value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否可被自己遮挡

#### Returns

| `boolean` | 布尔值 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否可被自己遮挡

#### Parameters

| `Value` `boolean` | 布尔值 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### translucentSortPriority <Score text="translucentSortPriority" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **translucentSortPriority**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `set` **translucentSortPriority**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置渲染层级，较高渲染层级的对象会优先显示在离视线较近的地方


::: warning Precautions

请在客户端调用

:::

#### Parameters

| `value` `number` |  新的渲染层级，值范围为 [0, 31] |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### widgetSpace <Score text="widgetSpace" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **widgetSpace**(): [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md)

</th>
<th style="text-align: left">

• `set` **widgetSpace**(`newSpace`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取显示方式

#### Returns

| [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md) | 显示方式枚举 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置显示方式

#### Parameters

| `newSpace` [`WidgetSpaceMode`](../enums/mw.WidgetSpaceMode.md) | 显示方式 |
| :------ | :------ |


</td>
</tr></tbody>
</table>



## Methods
___

### getTargetUIWidget <Score text="getTargetUIWidget" /> 

• **getTargetUIWidget**(): [`UserWidget`](mw.UserWidget.md) <Badge type="tip" text="client" />

获取UI对象资源

#### Returns

| [`UserWidget`](mw.UserWidget.md) | UI对象资源 |
| :------ | :------ |


___

### refresh <Score text="refresh" /> 

• **refresh**(): `void` <Badge type="tip" text="client" />

请求重新绘制



___

### setTargetUIWidget <Score text="setTargetUIWidget" /> 

• **setTargetUIWidget**(`uiUserWidget`): `void` <Badge type="tip" text="client" />

设置UI，可以对当前的UI设置UI资源，UI资源可以从路径获取或直接取其他UI组件引用的资源

#### Parameters

| `uiUserWidget` [`UserWidget`](mw.UserWidget.md) | UI资源对象 |
| :------ | :------ |



___

### setUIbyID <Score text="setUIbyID" /> 

• **setUIbyID**(`ID`): `void` <Badge type="tip" text="client" />

通过GUID设置UI

#### Parameters

| `ID` `string` | UI的ID |
| :------ | :------ |


