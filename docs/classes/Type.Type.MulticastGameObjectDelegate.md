[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Type](../modules/Type.md) / [Type](../modules/Type.Type.md) / MulticastGameObjectDelegate

# Class: MulticastGameObjectDelegate

[Type](../modules/Type.md).[Type](../modules/Type.Type.md).MulticastGameObjectDelegate

**`Author`**

吴思

**`Description`**

广播代理

**`Network Status`**

usage:双端

## Table of contents

### Constructors

- [constructor](Type.Type.MulticastGameObjectDelegate.md#constructor)

### Methods

- [add](Type.Type.MulticastGameObjectDelegate.md#add)
- [broadcast](Type.Type.MulticastGameObjectDelegate.md#broadcast)
- [remove](Type.Type.MulticastGameObjectDelegate.md#remove)

## Constructors

### constructor

• **new MulticastGameObjectDelegate**()

## Methods

### add

▸ **add**(`func`): `void`

**`Description`**

添加回调函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` | usage: 回调函数 default: |

#### Returns

`void`

#### Defined in

Type/index.d.ts:159

___

### broadcast

▸ **broadcast**(`obj`): `void`

**`Description`**

触发代理事件

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage: 触发物体对象 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:171

___

### remove

▸ **remove**(`func`): `void`

**`Description`**

删除回调函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `GameObjectDelegateFuncType` | usage: 回调函数 |

#### Returns

`void`

#### Defined in

Type/index.d.ts:165
