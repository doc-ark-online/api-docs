[SCRIPTING](../groups/SCRIPTING.SCRIPTING.md) / ScriptManager

# ScriptManager <Badge type="tip" text="Class" /> <Score text="ScriptManager" />

脚本管理类

## Table of contents

### Methods <Score text="Methods" /> 
| **[asyncFindScript](mw.ScriptManager.md#asyncfindscript)**(`guid`: `string`): `Promise`<[`Script`](mw.Script.md)\>  |
| :----- |
| **[findScript](mw.ScriptManager.md#findscript)**(`guid`: `string`): [`Script`](mw.Script.md) |

## Methods

### asyncFindScript <Score text="asyncFindScript" /> 

• `Static` **asyncFindScript**(`guid`): `Promise`<[`Script`](mw.Script.md)\>

根据GUID异步获得脚本实例

#### Parameters

| `guid` | `string` |
| :------ | :------ |

#### Returns

| `Promise`<[`Script`](mw.Script.md)\> |  |
| :------ | :------ |

___

### findScript <Score text="findScript" /> 

• `Static` **findScript**(`guid`): [`Script`](mw.Script.md)

根据GUID获得脚本实例

#### Parameters

| `guid` | `string` |
| :------ | :------ |

#### Returns

| [`Script`](mw.Script.md) |  |
| :------ | :------ |
