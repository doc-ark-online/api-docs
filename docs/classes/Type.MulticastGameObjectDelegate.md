[Scripiting](../groups/Scripiting.Scripiting.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" /> <Score text="MulticastGameObjectDelegate" />

广播代理

## Table of contents

| Methods |
| :-----|
| **[add](Type.MulticastGameObjectDelegate.md#add)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 添加回调函数|
| **[broadcast](Type.MulticastGameObjectDelegate.md#broadcast)**(`obj`: `GameObject`): `void` <br> 触发代理事件|
| **[remove](Type.MulticastGameObjectDelegate.md#remove)**(`func`: `GameObjectDelegateFuncType`): `void` <br> 删除回调函数|

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
| `obj` | `GameObject` |  触发物体对象 |


___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` 

删除回调函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  回调函数 |

