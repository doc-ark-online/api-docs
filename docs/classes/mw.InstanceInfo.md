[mw](../modules/Core.mw.md) / InstanceInfo

# InstanceInfo <Badge type="tip" text="Class" /> <Score text="InstanceInfo" />

## Table of contents

### Properties <Score text="Properties" /> 
| **[assetId](mw.InstanceInfo.md#assetid)**: `string`  |
| :----- |
| **[children](mw.InstanceInfo.md#children)**: `string`[] |
| **[collision](mw.InstanceInfo.md#collision)**: `any` |
| **[collisionStatus](mw.InstanceInfo.md#collisionstatus)**: `any` |
| **[guid](mw.InstanceInfo.md#guid)**: `string` |
| **[iTag](mw.InstanceInfo.md#itag)**: `string` |
| **[iname](mw.InstanceInfo.md#iname)**: `string` |
| **[localTransform](mw.InstanceInfo.md#localtransform)**: [`Transform`](mw.Transform.md) |
| **[netStatus](mw.InstanceInfo.md#netstatus)**: [`NetStatus`](../enums/mw.NetStatus.md) |
| **[parent](mw.InstanceInfo.md#parent)**: `undefined`  [`GameObject`](mw.GameObject.md) |
| **[privateActor](mw.InstanceInfo.md#privateactor)**: `Actor` |
| **[relativeLocation](mw.InstanceInfo.md#relativelocation)**: [`Vector`](mw.Vector.md) |
| **[relativeRotation](mw.InstanceInfo.md#relativerotation)**: [`Rotation`](mw.Rotation.md) |
| **[relativeScale](mw.InstanceInfo.md#relativescale)**: [`Vector`](mw.Vector.md) |
| **[visible](mw.InstanceInfo.md#visible)**: `boolean` |
| **[visibleStatus](mw.InstanceInfo.md#visiblestatus)**: `any` |
| **[worldLocation](mw.InstanceInfo.md#worldlocation)**: [`Vector`](mw.Vector.md) |
| **[worldRotation](mw.InstanceInfo.md#worldrotation)**: [`Rotation`](mw.Rotation.md) |
| **[worldScale](mw.InstanceInfo.md#worldscale)**: [`Vector`](mw.Vector.md) |
| **[worldTransform](mw.InstanceInfo.md#worldtransform)**: [`Transform`](mw.Transform.md) |

### Accessors <Score text="Accessors" /> 
| **[name](mw.InstanceInfo.md#name)**(): `string`  |
| :----- |
| **[tag](mw.InstanceInfo.md#tag)**(): `string` |

### Methods <Score text="Methods" /> 
| **[getChildren](mw.InstanceInfo.md#getchildren)**(): [`GameObject`](mw.GameObject.md)[]  |
| :----- |
| **[getCollision](mw.InstanceInfo.md#getcollision)**(): [`PropertyStatus`](../enums/mw.PropertyStatus.md)  [`CollisionStatus`](../enums/mw.CollisionStatus.md) |
| **[getVisibility](mw.InstanceInfo.md#getvisibility)**(): `boolean` |
| **[initGroupProp](mw.InstanceInfo.md#initgroupprop)**(`mwInstanceInfo`: `MWInstanceInfo`): `void` |
| **[initParent](mw.InstanceInfo.md#initparent)**(): [`GameObject`](mw.GameObject.md) |

#### Parameters

| `mwInstanceInfo?` | `any` |
| :------ | :------ |
| `actor?` | `any` |

## Properties

### assetId <Score text="assetId" /> 

• **assetId**: `string`

___

### children <Score text="children" /> 

• **children**: `string`[]

___

### collision <Score text="collision" /> 

• **collision**: `any`

___

### collisionStatus <Score text="collisionStatus" /> 

• **collisionStatus**: `any`

___

### guid <Score text="guid" /> 

• **guid**: `string`

___

### iTag <Score text="iTag" /> 

• **iTag**: `string`

___

### iname <Score text="iname" /> 

• **iname**: `string`

___

### localTransform <Score text="localTransform" /> 

• **localTransform**: [`Transform`](mw.Transform.md)

___

### netStatus <Score text="netStatus" /> 

• **netStatus**: [`NetStatus`](../enums/mw.NetStatus.md)

___

### parent <Score text="parent" /> 

• **parent**: `undefined`  [`GameObject`](mw.GameObject.md)

___

### privateActor <Score text="privateActor" /> 

• **privateActor**: `Actor`

___

### relativeLocation <Score text="relativeLocation" /> 

• **relativeLocation**: [`Vector`](mw.Vector.md)

___

### relativeRotation <Score text="relativeRotation" /> 

• **relativeRotation**: [`Rotation`](mw.Rotation.md)

___

### relativeScale <Score text="relativeScale" /> 

• **relativeScale**: [`Vector`](mw.Vector.md)

___

### visible <Score text="visible" /> 

• **visible**: `boolean`

___

### visibleStatus <Score text="visibleStatus" /> 

• **visibleStatus**: `any`

___

### worldLocation <Score text="worldLocation" /> 

• **worldLocation**: [`Vector`](mw.Vector.md)

___

### worldRotation <Score text="worldRotation" /> 

• **worldRotation**: [`Rotation`](mw.Rotation.md)

___

### worldScale <Score text="worldScale" /> 

• **worldScale**: [`Vector`](mw.Vector.md)

___

### worldTransform <Score text="worldTransform" /> 

• **worldTransform**: [`Transform`](mw.Transform.md)

## Accessors

### name <Score text="name" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **name**(): `string`

</th>
<th style="text-align: left">

• `set` **name**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `string` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `value` | `string` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### tag <Score text="tag" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Private` `get` **tag**(): `string`

</th>
<th style="text-align: left">

• `Private` `set` **tag**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `string` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `value` | `string` |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### getChildren <Score text="getChildren" /> 

• **getChildren**(): [`GameObject`](mw.GameObject.md)[]

#### Returns

| [`GameObject`](mw.GameObject.md)[] |  |
| :------ | :------ |

___

### getCollision <Score text="getCollision" /> 

• **getCollision**(): [`PropertyStatus`](../enums/mw.PropertyStatus.md)  [`CollisionStatus`](../enums/mw.CollisionStatus.md)

#### Returns

| [`PropertyStatus`](../enums/mw.PropertyStatus.md)  [`CollisionStatus`](../enums/mw.CollisionStatus.md) |  |
| :------ | :------ |

___

### getVisibility <Score text="getVisibility" /> 

• **getVisibility**(): `boolean`

#### Returns

| `boolean` |  |
| :------ | :------ |

___

### initGroupProp <Score text="initGroupProp" /> 

• **initGroupProp**(`mwInstanceInfo`): `void`

#### Parameters

| `mwInstanceInfo` | `MWInstanceInfo` |
| :------ | :------ |


___

### initParent <Score text="initParent" /> 

• **initParent**(): [`GameObject`](mw.GameObject.md)

#### Returns

| [`GameObject`](mw.GameObject.md) |  |
| :------ | :------ |
