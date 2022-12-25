[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Extension](../modules/Extension.md) / [Extension](../modules/Extension.Extension.md) / GameObjPool

# Class: GameObjPool

[Extension](../modules/Extension.md).[Extension](../modules/Extension.Extension.md).GameObjPool

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

GameObject 对象池

**`Precautions`**

单例类，请使用 getInstance 获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Extension.Extension.GameObjPool.md#constructor)

### Methods

- [clear](Extension.Extension.GameObjPool.md#clear)
- [despawn](Extension.Extension.GameObjPool.md#despawn)
- [destroy](Extension.Extension.GameObjPool.md#destroy)
- [spawn](Extension.Extension.GameObjPool.md#spawn)
- [getInstance](Extension.Extension.GameObjPool.md#getinstance)

## Constructors

### constructor

• **new GameObjPool**()

## Methods

### clear

▸ **clear**(`guid`): `void`

**`Description`**

清除对象池中该 guid 对应的所有对象

**`Effect`**

调用端生效

#### Parameters

| Name   | Type     | Description              |
| :----- | :------- | :----------------------- |
| `guid` | `string` | usage: 要清除对象的 guid |

#### Returns

`void`

#### Defined in

Extension/index.d.ts:39

---

### despawn

▸ **despawn**(`obj`): `void`

**`Description`**

归还一个对象

**`Effect`**

调用端生效

#### Parameters

| Name  | Type         | Description         |
| :---- | :----------- | :------------------ |
| `obj` | `GameObject` | usage: 要归还的对象 |

#### Returns

`void`

#### Defined in

Extension/index.d.ts:33

---

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁对象池全局实例

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Extension/index.d.ts:20

---

### spawn

▸ **spawn**<`T`\>(`guid`): `T`

**`Description`**

生成一个对象

**`Effect`**

调用端生效

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `T`  | extends `GameObject`<`T`\> |

#### Parameters

| Name   | Type     | Description                                             |
| :----- | :------- | :------------------------------------------------------ |
| `guid` | `string` | usage: 场景对象的 guid \| 资源的 guid \| prefab 的 guid |

#### Returns

`T`

生成的对象

#### Defined in

Extension/index.d.ts:27

---

### getInstance

▸ `Static` **getInstance**(): [`GameObjPool`](Extension.Extension.GameObjPool.md)

**`Description`**

获取对象池全局实例

**`Effect`**

调用端生效

#### Returns

[`GameObjPool`](Extension.Extension.GameObjPool.md)

对象池全局实例

#### Defined in

Extension/index.d.ts:15
