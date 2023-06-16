[Datatype](../groups/Core.Datatype.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" /> <Score text="MulticastGameObjectDelegate" />

广播代理

## Table of contents

| Methods |
| :-----|
| **[add](mw.MulticastGameObjectDelegate.md#add)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 添加回调函数|
| **[broadcast](mw.MulticastGameObjectDelegate.md#broadcast)**(`obj`: [`GameObject`](mw.GameObject.md)): `void` <br> 触发代理事件|
| **[remove](mw.MulticastGameObjectDelegate.md#remove)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 删除回调函数|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` 

添加回调函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  回调函数 default: |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`obj`): `void` 

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](mw.GameObject.md) |  触发物体对象 |


___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除回调函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  回调函数 |

