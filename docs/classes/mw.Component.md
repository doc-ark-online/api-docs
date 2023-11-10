[mw](../modules/Core.mw.md) / Component

# Component <Badge type="tip" text="Class" /> <Score text="Component" />

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[guid](mw.Component.md#guid)**(): `string`  |
| :----- |
| **[useUpdate](mw.Component.md#useupdate)**(): `boolean`   |
| 设置对象是否使用更新|

### Methods <Score text="Methods" /> 
| **[isRunningClient](mw.Component.md#isrunningclient)**(): `boolean`   |
| :-----|
| 是否为客户端|
| **[onDestroy](mw.Component.md#ondestroy)**(): `void`   |
| 周期函数 被销毁时调用|
| **[onStart](mw.Component.md#onstart)**(): `void`   |
| 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.Component.md#onupdate)**(`dt`: `number`): `void`   |
| 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|

## Accessors

### guid <Score text="guid" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **guid**(): `string`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


#### Returns

| `string` |  |
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


获取对象是否使用更新

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


设置对象是否使用更新

#### Parameters

| `v` | `boolean` |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### isRunningClient <Score text="isRunningClient" /> 

• **isRunningClient**(): `boolean` 

是否为客户端

#### Returns

| `boolean` | true为客户端 |
| :------ | :------ |

___

### onDestroy <Score text="onDestroy" /> 

• `Protected` **onDestroy**(): `void` 

周期函数 被销毁时调用


___

### onStart <Score text="onStart" /> 

• `Protected` **onStart**(): `void` 

周期函数 脚本开始执行时调用


___

### onUpdate <Score text="onUpdate" /> 

• `Protected` **onUpdate**(`dt`): `void` 

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

#### Parameters

| `dt` `number` | 与上一帧的延迟 单位:秒 |
| :------ | :------ |

