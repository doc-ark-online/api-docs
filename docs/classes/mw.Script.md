[SCRIPTING](../groups/SCRIPTING.SCRIPTING.md) / Script

# Script <Badge type="tip" text="Class" /> <Score text="Script" />

脚本管理

## Hierarchy

- `Component`

  ↳ **`Script`**

  ↳↳ [`PlayerState`](mw.PlayerState.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[bIsDestroy](mw.Script.md#bisdestroy)**: `any`  |
| :----- |
| **[getNetStatus](mw.Script.md#getnetstatus)**: `any` |
| **[mwRepObj](mw.Script.md#mwrepobj)**: `any` |

### Accessors <Score text="Accessors" /> 
| **[gameObject](mw.Script.md#gameobject)**(): [`GameObject`](mw.GameObject.md)  |
| :-----|
| 脚本对应的GameObject|
| **[name](mw.Script.md#name)**(): `string` |

### Methods <Score text="Methods" /> 
| **[destroy](mw.Script.md#destroy)**(): `void`  |
| :----- |
| **[spawnScript](mw.Script.md#spawnscript)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`scriptClass`: (...`args`: `unknown`[]) => `T`, `bInReplicates?`: `boolean`): `Promise`<`T`: extends [`Script`](mw.Script.md)<`T`\>\> |

#### Parameters

| `data` | `ActorInfo` |
| :------ | :------ |

#### Overrides

mw.Component.constructor

## Properties

### bIsDestroy <Score text="bIsDestroy" /> 

• `Private` **bIsDestroy**: `any`

___

### getNetStatus <Score text="getNetStatus" /> 

• `Private` **getNetStatus**: `any`

___

### mwRepObj <Score text="mwRepObj" /> 

• `Private` **mwRepObj**: `any`

## Accessors

### gameObject <Score text="gameObject" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gameObject**(): [`GameObject`](mw.GameObject.md) 

</th>
<th style="text-align: left">

• `set` **gameObject**(`target`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


脚本对应的GameObject


#### Returns

| [`GameObject`](mw.GameObject.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


脚本对应的GameObject


#### Parameters

| `target` | [`GameObject`](mw.GameObject.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### name <Score text="name" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **name**(): `string`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

</td>
</tr></tbody>
</table>

| `string` |  |
| :------ | :------ |

## Methods

### destroy <Score text="destroy" /> 

• **destroy**(): `void`


___

### spawnScript <Score text="spawnScript" /> 

• `Static` **spawnScript**<`T`\>(`scriptClass`, `bInReplicates?`): `Promise`<`T`\>

动态创建脚本

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `scriptClass` (...`args`: `unknown`[]) => `T` | - |
| :------ | :------ |
| `bInReplicates?` `boolean` | `{boolean}` 是否同步 |

#### Returns

| `Promise`<`T`\> | 脚本对象 |
| :------ | :------ |

• `Static` **spawnScript**<`T`\>(`scriptAssetId`, `bInReplicates?`): `Promise`<`T`\>

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `scriptAssetId` | `string` |
| :------ | :------ |
| `bInReplicates?` | `boolean` |

#### Returns

| `Promise`<`T`\> |  |
| :------ | :------ |

• `Static` **spawnScript**<`T`\>(`scriptClass`, `bInReplicates?`, `target?`): `Promise`<`T`\>

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `scriptClass` | (...`args`: `unknown`[]) => `T` |
| :------ | :------ |
| `bInReplicates?` | `boolean` |
| `target?` | [`GameObject`](mw.GameObject.md) |

#### Returns

| `Promise`<`T`\> |  |
| :------ | :------ |

• `Static` **spawnScript**<`T`\>(`scriptAssetId`, `bInReplicates?`, `target?`): `Promise`<`T`\>

#### Type parameters

| `T` | extends [`Script`](mw.Script.md)<`T`\> |
| :------ | :------ |

#### Parameters

| `scriptAssetId` | `string` |
| :------ | :------ |
| `bInReplicates?` | `boolean` |
| `target?` | [`GameObject`](mw.GameObject.md) |

#### Returns

| `Promise`<`T`\> |  |
| :------ | :------ |
