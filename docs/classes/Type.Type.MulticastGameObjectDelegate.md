[Type](../modules/Type.Type.md) / MulticastGameObjectDelegate

# MulticastGameObjectDelegate <Badge type="tip" text="Class" />

**`Description`**

广播代理

## Table of contents

| Methods                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------- |
| **[add](Type.Type.MulticastGameObjectDelegate.md#add)**(`GameObjectDelegateFuncType`): `void` <br> 添加回调函数       |
| **[broadcast](Type.Type.MulticastGameObjectDelegate.md#broadcast)**(`GameObject`): `void` <br> 触发代理事件           |
| **[remove](Type.Type.MulticastGameObjectDelegate.md#remove)**(`GameObjectDelegateFuncType`): `void` <br> 删除回调函数 |

## Methods

### add

▸ **add**(`func`): `void`

**`Description`**

添加回调函数

**`Effect`**

调用端生效

#### Parameters

| Name   | Type                         | Description       |
| :----- | :--------------------------- | :---------------- |
| `func` | `GameObjectDelegateFuncType` | 回调函数 default: |

#### Returns

`void`

---

### broadcast

▸ **broadcast**(`obj`): `void`

**`Description`**

触发代理事件

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description  |
| :---- | :----------- | :----------- |
| `obj` | `GameObject` | 触发物体对象 |

#### Returns

`void`

---

### remove

▸ **remove**(`func`): `void`

**`Description`**

删除回调函数

**`Effect`**

调用端生效

#### Parameters

| Name   | Type                         | Description |
| :----- | :--------------------------- | :---------- |
| `func` | `GameObjectDelegateFuncType` | 回调函数    |

#### Returns

`void`
