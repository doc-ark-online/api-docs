[玩法](../groups/玩法.玩法.md) / IKAnchor

# IKAnchor <Badge type="tip" text="Class" /> <Score text="IKAnchor" />

IK锚点

## Hierarchy

- [`GameObject`](mw.GameObject.md)

  ↳ **`IKAnchor`**

## Table of contents

### Properties <Score text="Properties" /> 
| **[onActivate](mw.IKAnchor.md#onactivate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| :-----|
| IK启用完成委托|
| **[onDeactivate](mw.IKAnchor.md#ondeactivate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>  |
| IK关闭完成委托|


::: details click
### Properties <Score text="Properties" /> 
| **[onDestroyDelegate](mw.GameObject.md#ondestroydelegate)**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>   |
| :-----|
| 物体销毁后事件回调|
:::


### Accessors <Score text="Accessors" /> 
| **[anchorType](mw.IKAnchor.md#anchortype)**(): [`IKPart`](../enums/mw.IKPart.md)   |
| :-----|
| 获取IK锚点类型|
| **[blendInTime](mw.IKAnchor.md#blendintime)**(): `number`   |
| 获取混入时间|
| **[blendOutTime](mw.IKAnchor.md#blendouttime)**(): `number`   |
| 获取混出时间|
| **[jointTarget](mw.IKAnchor.md#jointtarget)**(): [`Vector`](mw.Vector.md)   |
| 获取关节朝向|
| **[target](mw.IKAnchor.md#target)**(): `MWSysCharacter`   |
| 获取IK锚点激活的对象|
| **[weight](mw.IKAnchor.md#weight)**(): `number`   |
| 获取权重|


::: details click
### Accessors <Score text="Accessors" /> 
| **[assetId](mw.GameObject.md#assetid)**(): `string`   |
| :-----|
| 获取当前物体使用资源的GUID|
| **[gameObjectId](mw.GameObject.md#gameobjectid)**(): `string`   |
| 获取物体的唯一标识（唯一标识一个对象的字符串）。|
| **[isReady](mw.GameObject.md#isready)**(): `boolean`   |
| 当前物体状态|
| **[localTransform](mw.GameObject.md#localtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体本地变换|
| **[name](mw.GameObject.md#name)**(): `string`   |
| 返回当前物体名称|
| **[netStatus](mw.GameObject.md#netstatus)**(): [`NetStatus`](../enums/mw.NetStatus.md)   |
| 获取当前物体同步状态|
| **[parent](mw.GameObject.md#parent)**(): [`GameObject`](mw.GameObject.md)   |
| 获取当前父物体|
| **[tag](mw.GameObject.md#tag)**(): `string`   |
| 获取当前物体的标签|
| **[worldTransform](mw.GameObject.md#worldtransform)**(): [`Transform`](mw.Transform.md)   |
| 当前物体世界变换|
:::


### Methods <Score text="Methods" /> 
| **[active](mw.IKAnchor.md#active)**(`target`: [`Character`](mw.Character.md)): `void`   |
| :-----|
| 给指定用户激活IK功能|
| **[deactivate](mw.IKAnchor.md#deactivate)**(): `void`   |
| 关闭IK功能|
| **[autoEnableIK](mw.IKAnchor.md#autoenableik)**(`target`: [`Character`](mw.Character.md), `value`: `boolean`): `void`   |
| 设置指定角色对象自动IK状态|


::: details click
### Methods <Score text="Methods" /> 
| **[addComponent](mw.GameObject.md#addcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>, `bInReplicates?`: `boolean`): `T`: extends [`Script`](mw.Script.md)<`T`\>   |
| :-----|
| 添加一个脚本组件|
| **[asyncGetChildByName](mw.GameObject.md#asyncgetchildbyname)**(`name`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 异步根据名称查找子物体|
| **[asyncReady](mw.GameObject.md#asyncready)**(): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 物体准备好后返回|
| **[clone](mw.GameObject.md#clone)**(`gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): [`GameObject`](mw.GameObject.md)   |
| 复制对象|
| **[destroy](mw.GameObject.md#destroy)**(): `void`   |
| 删除对象|
| **[getBoundingBoxExtent](mw.GameObject.md#getboundingboxextent)**(`nonColliding?`: `boolean`, `includeFromChild?`: `boolean`, `outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取物体包围盒大小|
| **[getBounds](mw.GameObject.md#getbounds)**(`onlyCollidingComponents`: `boolean`, `originOuter`: [`Vector`](mw.Vector.md), `boxExtentOuter`: [`Vector`](mw.Vector.md), `includeFromChild?`: `boolean`): `void`   |
| 获取物体边界|
| **[getChildByGameObjectId](mw.GameObject.md#getchildbygameobjectid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据 gameObjectId 查找子物体|
| **[getChildByName](mw.GameObject.md#getchildbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据名称查找子物体|
| **[getChildByPath](mw.GameObject.md#getchildbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 根据路径查找子物体|
| **[getChildren](mw.GameObject.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]   |
| 获取子物体|
| **[getChildrenBoundingBoxCenter](mw.GameObject.md#getchildrenboundingboxcenter)**(`outer?`: [`Vector`](mw.Vector.md)): [`Vector`](mw.Vector.md)   |
| 获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])|
| **[getChildrenByName](mw.GameObject.md#getchildrenbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找所有的子物体|
| **[getComponent](mw.GameObject.md#getcomponent)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `T`: extends [`Script`](mw.Script.md)<`T`\>   |
| 获取指定类型的组件|
| **[getComponentPropertys](mw.GameObject.md#getcomponentpropertys)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `Map`<`string`, `IPropertyOptions`\>   |
| 获取脚本组件属性|
| **[getComponents](mw.GameObject.md#getcomponents)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`constructor?`: (...`args`: `unknown`[]) => `T`: extends [`Script`](mw.Script.md)<`T`\>): `T`: extends [`Script`](mw.Script.md)<`T`\>[]   |
| 获取指定类型的所有组件|
| **[getVisibility](mw.GameObject.md#getvisibility)**(): `boolean`   |
| 获取物体是否被显示|
| **[setAbsolute](mw.GameObject.md#setabsolute)**(`absolutePosition?`: `boolean`, `absoluteRotation?`: `boolean`, `absoluteScale?`: `boolean`): `void`   |
| 设置物体localTransform是相对于父物体或者世界|
| **[setVisibility](mw.GameObject.md#setvisibility)**(`status`: `boolean`  [`PropertyStatus`](../enums/mw.PropertyStatus.md), `propagateToChildren?`: `boolean`): `void`   |
| 设置物体是否被显示|
| **[asyncFindGameObjectById](mw.GameObject.md#asyncfindgameobjectbyid)**(`gameObjectId`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过 gameObjectId 异步查找 GameObject|
| **[asyncGetGameObjectByPath](mw.GameObject.md#asyncgetgameobjectbypath)**(`path`: `string`): `Promise`<[`GameObject`](mw.GameObject.md)\>   |
| 通过路径异步查找物体|
| **[asyncSpawn](mw.GameObject.md#asyncspawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `Promise`<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>   |
| 异步构造一个物体|
| **[findGameObjectById](mw.GameObject.md#findgameobjectbyid)**(`gameObjectId`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过 gameObjectId 查找物体|
| **[findGameObjectByName](mw.GameObject.md#findgameobjectbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过名字查找物体|
| **[findGameObjectsByName](mw.GameObject.md#findgameobjectsbyname)**(`name`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过名字查找物体|
| **[findGameObjectsByTag](mw.GameObject.md#findgameobjectsbytag)**(`tag`: `string`): [`GameObject`](mw.GameObject.md)[]   |
| 通过自定义标签获取物体|
| **[getGameObjectByPath](mw.GameObject.md#getgameobjectbypath)**(`path`: `string`): [`GameObject`](mw.GameObject.md)   |
| 通过路径查找物体|
| **[spawn](mw.GameObject.md#spawn)**<`T`: extends [`GameObject`](mw.GameObject.md)<`T`\>\>(`assetId`: `string`, `gameObjectInfo?`: [`GameObjectInfo`](../interfaces/mw.GameObjectInfo.md)): `T`: extends [`GameObject`](mw.GameObject.md)<`T`\>   |
| 构造一个物体|
:::


## Properties

### onActivate <Score text="onActivate" /> 

• **onActivate**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

IK启用完成委托

___

### onDeactivate <Score text="onDeactivate" /> 

• **onDeactivate**: [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

IK关闭完成委托

## Accessors

### anchorType <Score text="anchorType" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **anchorType**(): [`IKPart`](../enums/mw.IKPart.md) 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取IK锚点类型

#### Returns

| [`IKPart`](../enums/mw.IKPart.md) | IK锚点类型 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### blendInTime <Score text="blendInTime" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **blendInTime**(): `number` 

</th>
<th style="text-align: left">

• `set` **blendInTime**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取混入时间

#### Returns

| `number` | 混入时间 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置混入时间

#### Parameters

| `value` `number` | 混入时间 range: [0,99999] type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### blendOutTime <Score text="blendOutTime" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **blendOutTime**(): `number` 

</th>
<th style="text-align: left">

• `set` **blendOutTime**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取混出时间

#### Returns

| `number` | 混出时间 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置混入时间

#### Parameters

| `value` `number` | 混入时间 range: [0,99999] type:浮点数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### jointTarget <Score text="jointTarget" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **jointTarget**(): [`Vector`](mw.Vector.md) 

</th>
<th style="text-align: left">

• `set` **jointTarget**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取关节朝向

#### Returns

| [`Vector`](mw.Vector.md) | 关节朝向 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置关节朝向

#### Parameters

| `value` [`Vector`](mw.Vector.md) | 关节朝向 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### target <Score text="target" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **target**(): `MWSysCharacter` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取IK锚点激活的对象

**`Retuns`**

IK锚点激活的对象

#### Returns

| `MWSysCharacter` |  |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### weight <Score text="weight" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **weight**(): `number` 

</th>
<th style="text-align: left">

• `set` **weight**(`value`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取权重

#### Returns

| `number` | 权重 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置权重

#### Parameters

| `value` `number` | 权重 range: [0,1] type:浮点数 |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### active <Score text="active" /> 

• **active**(`target`): `void` 

给指定用户激活IK功能

#### Parameters

| `target` [`Character`](mw.Character.md) | IK指定角色对象 |
| :------ | :------ |


___

### deactivate <Score text="deactivate" /> 

• **deactivate**(): `void` 

关闭IK功能


___

### autoEnableIK <Score text="autoEnableIK" /> 

• `Static` **autoEnableIK**(`target`, `value`): `void` 

设置指定角色对象自动IK状态

#### Parameters

| `target` [`Character`](mw.Character.md) | 指定角色对象 |
| :------ | :------ |
| `value` `boolean` | 自动IK激活状态 |

