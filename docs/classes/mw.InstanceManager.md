[mw](../modules/Core.mw.md) / InstanceManager

# InstanceManager <Badge type="tip" text="Class" /> <Score text="InstanceManager" />

## Table of contents

| Properties |
| :-----|
| **[quenueNum](mw.InstanceManager.md#quenuenum)**: `number` <br> |
| **[updateFrequency](mw.InstanceManager.md#updatefrequency)**: `number` <br> |

| Methods |
| :-----|
| **[asyncNewOrAddISM](mw.InstanceManager.md#asyncneworaddism)**(`gameObject`: [`GameObject`](mw.GameObject.md), `targetTransform`: [`Transform`](mw.Transform.md)): `Promise`<`string`\> <br> 异步生成Instance|
| **[asyncRemoveInstance](mw.InstanceManager.md#asyncremoveinstance)**(`instanceGUID`: `string`): `Promise`<`boolean`\> <br> 异步删除Instance|
| **[asyncSetInstanceTransform](mw.InstanceManager.md#asyncsetinstancetransform)**(`instanceGUID`: `string`, `targetTransform`: [`Transform`](mw.Transform.md)): `Promise`<`boolean`\> <br> 异步设置InstanceTransform|
| **[convertInstance](mw.InstanceManager.md#convertinstance)**(`instanceGUID`: `string`, `convertParent?`: `boolean`): `void` <br> 转换Instance为GameObject|
| **[getInstanceChildGUID](mw.InstanceManager.md#getinstancechildguid)**(`parentGUID`: `string`): `string`[] <br> |
| **[newOrAddISM](mw.InstanceManager.md#neworaddism)**(`gameObject`: [`GameObject`](mw.GameObject.md), `targetTransform`: [`Transform`](mw.Transform.md)): `string` <br> 生成Instance|
| **[refreshChildInstance](mw.InstanceManager.md#refreshchildinstance)**(`parentGUID`: `string`): `boolean` <br> |
| **[removeInstance](mw.InstanceManager.md#removeinstance)**(`instanceGUID`: `string`): `boolean` <br> 删除Instance|
| **[setInstanceTransform](mw.InstanceManager.md#setinstancetransform)**(`instanceGUID`: `string`, `targetTransform`: [`Transform`](mw.Transform.md)): `boolean` <br> 设置InstanceTransform|

## Properties

### quenueNum <Score text="quenueNum" /> 

▪ `Static` **quenueNum**: `number`

___

### updateFrequency <Score text="updateFrequency" /> 

▪ `Static` **updateFrequency**: `number`

## Methods

### asyncNewOrAddISM <Score text="asyncNewOrAddISM" /> 

• `Static` **asyncNewOrAddISM**(`gameObject`, `targetTransform`): `Promise`<`string`\> 

异步生成Instance


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | [`GameObject`](mw.GameObject.md) | 源GameObejct （StaticMesh） |
| `targetTransform` | [`Transform`](mw.Transform.md) | 目标Transform |

#### Returns

`Promise`<`string`\>

___

### asyncRemoveInstance <Score text="asyncRemoveInstance" /> 

• `Static` **asyncRemoveInstance**(`instanceGUID`): `Promise`<`boolean`\> 

异步删除Instance


#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceGUID` | `string` |

#### Returns

`Promise`<`boolean`\>

___

### asyncSetInstanceTransform <Score text="asyncSetInstanceTransform" /> 

• `Static` **asyncSetInstanceTransform**(`instanceGUID`, `targetTransform`): `Promise`<`boolean`\> 

异步设置InstanceTransform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceGUID` | `string` |  |
| `targetTransform` | [`Transform`](mw.Transform.md) | 目标Transform |

#### Returns

`Promise`<`boolean`\>

___

### convertInstance <Score text="convertInstance" /> 

• `Static` **convertInstance**(`instanceGUID`, `convertParent?`): `void` 

转换Instance为GameObject


#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceGUID` | `string` |
| `convertParent?` | `boolean` |


___

### getInstanceChildGUID <Score text="getInstanceChildGUID" /> 

• `Static` **getInstanceChildGUID**(`parentGUID`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentGUID` | `string` |

#### Returns

`string`[]

___

### newOrAddISM <Score text="newOrAddISM" /> 

• `Static` **newOrAddISM**(`gameObject`, `targetTransform`): `string` 

生成Instance


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | [`GameObject`](mw.GameObject.md) | 源GameObejct （StaticMesh） |
| `targetTransform` | [`Transform`](mw.Transform.md) | 目标Transform |

#### Returns

`string`

___

### refreshChildInstance <Score text="refreshChildInstance" /> 

• `Static` **refreshChildInstance**(`parentGUID`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentGUID` | `string` |

#### Returns

`boolean`

___

### removeInstance <Score text="removeInstance" /> 

• `Static` **removeInstance**(`instanceGUID`): `boolean` 

删除Instance


#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceGUID` | `string` |

#### Returns

`boolean`

___

### setInstanceTransform <Score text="setInstanceTransform" /> 

• `Static` **setInstanceTransform**(`instanceGUID`, `targetTransform`): `boolean` 

设置InstanceTransform


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instanceGUID` | `string` |  |
| `targetTransform` | [`Transform`](mw.Transform.md) | 目标Transform |

#### Returns

`boolean`
