[Type](../modules/Type.Type.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" /> <Score text="MulticastGameObjectDelegate" />

**`Groups`**

SCRIPITING

广播代理

## Table of contents

| Methods |
| :-----|
| **[add](Type.MulticastGameObjectDelegate.md#add)**(`GameObjectDelegateFuncType`): `void` <br> 添加回调函数|
| **[broadcast](Type.MulticastGameObjectDelegate.md#broadcast)**(`GameObject`): `void` <br> 触发代理事件|
| **[remove](Type.MulticastGameObjectDelegate.md#remove)**(`GameObjectDelegateFuncType`): `void` <br> 删除回调函数|

## Methods

### add <Score text="add" /> 

• **add**(`func`): `void` <Badge type="tip" text="other" />

添加回调函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  回调函数 default: |


___

### broadcast <Score text="broadcast" /> 

• **broadcast**(`obj`): `void` <Badge type="tip" text="other" />

触发代理事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` |  触发物体对象 |


___

### remove <Score text="remove" /> 

• **remove**(`func`): `void` <Badge type="tip" text="other" />

删除回调函数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` |  回调函数 |

