[SCRIPTING](../groups/SCRIPTING.SCRIPTING.md) / Script

# Script <Badge type="tip" text="Class" /> <Score text="Script" />

脚本的基类

## Hierarchy

- `Base`

  ↳ **`Script`**

  ↳↳ [`PlayerState`](mw.PlayerState.md)

## Table of contents

### Properties <Score text="Properties" /> 
| **[scriptGuid](mw.Script.md#scriptguid)**: `any`  |
| :----- |
| **[target](mw.Script.md#target)**: `any` |

### Accessors <Score text="Accessors" /> 
| **[gameObject](mw.Script.md#gameobject)**(): [`GameObject`](mw.GameObject.md)  |
| :----- |
| **[guid](mw.Script.md#guid)**(): `string` |
| **[useUpdate](mw.Script.md#useupdate)**(): `boolean`   |
| 设置组件是否使用更新|

### Methods <Score text="Methods" /> 
| **[destroy](mw.Script.md#destroy)**(): `void` <Badge type="tip" text="other" />  |
| :----- |
| **[onDestroy](mw.Script.md#ondestroy)**(): `void` <Badge type="tip" text="other" />  |
| 周期函数 被销毁时调用|
| **[onReplicated](mw.Script.md#onreplicated)**(`path`: `string`, `value`: `unknown`, `oldVal`: `unknown`): `void` <Badge type="tip" text="other" />  |
| 属性被同步事件 ClientOnly|
| **[onStart](mw.Script.md#onstart)**(): `void` <Badge type="tip" text="other" />  |
| 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.Script.md#onupdate)**(`dt`: `number`): `void` <Badge type="tip" text="other" />  |
| 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|

#### Parameters

| `dataComponent` | `MWActorScriptComponent` |
| :------ | :------ |

#### Overrides

mw.Base.constructor

## Properties

### scriptGuid <Score text="scriptGuid" /> 

• `Private` **scriptGuid**: `any`

___

### target <Score text="target" /> 

• `Private` **target**: `any`

## Accessors

### gameObject <Score text="gameObject" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **gameObject**(): [`GameObject`](mw.GameObject.md)

</th>
<th style="text-align: left">

• `set` **gameObject**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| [`GameObject`](mw.GameObject.md) |  |
| :------ | :------ |


</td>
<td style="text-align: left">


#### Parameters

| `value` | [`GameObject`](mw.GameObject.md) |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### guid <Score text="guid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **guid**(): `string`

</th>
<th style="text-align: left">

• `set` **guid**(`value`): `void`

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

### useUpdate <Score text="useUpdate" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **useUpdate**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **useUpdate**(`v`): `void` 

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取组件是否使用更新

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置组件是否使用更新

#### Parameters

| `v` | `boolean` |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### destroy <Score text="destroy" /> 

• **destroy**(): `void` <Badge type="tip" text="other" />

@description销毁组件对象

___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` <Badge type="tip" text="other" />

周期函数 被销毁时调用


___

### onReplicated <Score text="onReplicated" /> 

• `Protected` **onReplicated**(`path`, `value`, `oldVal`): `void` <Badge type="tip" text="other" />

属性被同步事件 ClientOnly

#### Parameters

| `path` `string` | 属性路径 |
| :------ | :------ |
| `value` `unknown` | 属性值 |
| `oldVal` `unknown` | 同步前的值 |


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` <Badge type="tip" text="other" />

周期函数 脚本开始执行时调用


___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` <Badge type="tip" text="other" />

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

#### Parameters

| `dt` `number` | 与上一帧的延迟 单位:秒 |
| :------ | :------ |

