[SCRIPTING](../groups/Core.SCRIPTING.md) / Script

# Script <Badge type="tip" text="Class" /> <Score text="Script" />

脚本管理

## Hierarchy

- `Component`

  ↳ **`Script`**

  ↳↳ [`PlayerState`](mw.PlayerState.md)

## Table of contents

| Properties |
| :-----|
| **[bIsDestroy](mw.Script.md#bisdestroy)**: `any` <br> |
| **[getNetStatus](mw.Script.md#getnetstatus)**: `any` <br> |
| **[mwRepObj](mw.Script.md#mwrepobj)**: `any` <br> |

| Accessors |
| :-----|
| **[gameObject](mw.Script.md#gameobject)**(): [`GameObject`](mw.GameObject.md) <br> 脚本对应的GameObject|
| **[name](mw.Script.md#name)**(): `string` <br> |

| Methods |
| :-----|
| **[destroy](mw.Script.md#destroy)**(): `void` <br> |
| **[spawnScript](mw.Script.md#spawnscript)**<`T`: extends [`Script`](mw.Script.md)<`T`\>\>(`scriptClass`: (...`args`: `unknown`[]) => `T`, `bInReplicates?`: `boolean`): `Promise`<`T`: extends [`Script`](mw.Script.md)<`T`\>\> <br> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ActorInfo` |

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

• `get` **gameObject**(): [`GameObject`](mw.GameObject.md) 

脚本对应的GameObject


#### Returns

[`GameObject`](mw.GameObject.md)

• `set` **gameObject**(`target`): `void` 

脚本对应的GameObject


#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`GameObject`](mw.GameObject.md) |


___

### name <Score text="name" /> 

• `get` **name**(): `string`

#### Returns

`string`

## Methods

### destroy <Score text="destroy" /> 

• **destroy**(): `void`


___

### spawnScript <Score text="spawnScript" /> 

• `Static` **spawnScript**<`T`\>(`scriptClass`, `bInReplicates?`): `Promise`<`T`\>

动态创建脚本

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Script`](mw.Script.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scriptClass` | (...`args`: `unknown`[]) => `T` | - |
| `bInReplicates?` | `boolean` | `{boolean}` 是否同步 |

#### Returns

`Promise`<`T`\>

脚本对象

• `Static` **spawnScript**<`T`\>(`scriptAssetId`, `bInReplicates?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Script`](mw.Script.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptAssetId` | `string` |
| `bInReplicates?` | `boolean` |

#### Returns

`Promise`<`T`\>

• `Static` **spawnScript**<`T`\>(`scriptClass`, `bInReplicates?`, `target?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Script`](mw.Script.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptClass` | (...`args`: `unknown`[]) => `T` |
| `bInReplicates?` | `boolean` |
| `target?` | [`GameObject`](mw.GameObject.md) |

#### Returns

`Promise`<`T`\>

• `Static` **spawnScript**<`T`\>(`scriptAssetId`, `bInReplicates?`, `target?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Script`](mw.Script.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptAssetId` | `string` |
| `bInReplicates?` | `boolean` |
| `target?` | [`GameObject`](mw.GameObject.md) |

#### Returns

`Promise`<`T`\>
