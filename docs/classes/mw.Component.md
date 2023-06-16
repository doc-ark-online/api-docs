[mw](../modules/Core.mw.md) / Component

# Component <Badge type="tip" text="Class" /> <Score text="Component" />

## Table of contents

| Accessors |
| :-----|
| **[guid](mw.Component.md#guid)**(): `string` <br> |
| **[useUpdate](mw.Component.md#useupdate)**(): `boolean` <br> 获取对象是否使用更新|

| Methods |
| :-----|
| **[isRunningClient](mw.Component.md#isrunningclient)**(): `boolean` <br> 是否为客户端|
| **[onDestroy](mw.Component.md#ondestroy)**(): `void` <br> 周期函数 被销毁时调用|
| **[onStart](mw.Component.md#onstart)**(): `void` <br> 周期函数 脚本开始执行时调用|
| **[onUpdate](mw.Component.md#onupdate)**(`dt`: `number`): `void` <br> 周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行|

## Accessors

### guid <Score text="guid" /> 

• `get` **guid**(): `string`

#### Returns

`string`

___

### useUpdate <Score text="useUpdate" /> 

• `get` **useUpdate**(): `boolean` 

获取对象是否使用更新


#### Returns

`boolean`

• `set` **useUpdate**(`v`): `void` 

设置对象是否使用更新


#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |


## Methods

### isRunningClient <Score text="isRunningClient" /> 

• **isRunningClient**(): `boolean` 

是否为客户端


#### Returns

`boolean`

true为客户端

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | 与上一帧的延迟 单位:秒 |

