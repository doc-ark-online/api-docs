[TYPE](../groups/Core.TYPE.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" /> <Score text="MulticastGameObjectDelegate" />

广播代理

## Table of contents

| Methods |
| :-----|
| **[add](mw.MulticastGameObjectDelegate.md#add)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 添加代理事件|
| **[broadcast](mw.MulticastGameObjectDelegate.md#broadcast)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 触发代理事件|
| **[clear](mw.MulticastGameObjectDelegate.md#clear)**(): `void` <br> 清空代理事件（危险操作，请注意您所清空的是哪些代理事件）|
| **[remove](mw.MulticastGameObjectDelegate.md#remove)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 删除代理事件|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  事件回调函数 default: |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`obj`): `void` 

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](mw.GameObject.md) |  触发物体对象 |


___

### clear <Score text="clear" /> 

• **clear**(): `void` 

清空代理事件（危险操作，请注意您所清空的是哪些代理事件）



___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  事件回调函数 |

