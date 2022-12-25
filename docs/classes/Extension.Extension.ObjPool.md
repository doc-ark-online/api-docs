[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Extension](../modules/Extension.md) / [Extension](../modules/Extension.Extension.md) / ObjPool

# Class: ObjPool<T\>

[Extension](../modules/Extension.md).[Extension](../modules/Extension.Extension.md).ObjPool

**`Author`**

huipeng.jia

**`Description`**

对象池

**`Network Status`**

usage: 双端

## Type parameters

| Name |
| :--- |
| `T`  |

## Table of contents

### Constructors

- [constructor](Extension.Extension.ObjPool.md#constructor)

### Methods

- [clear](Extension.Extension.ObjPool.md#clear)
- [despawn](Extension.Extension.ObjPool.md#despawn)
- [spawn](Extension.Extension.ObjPool.md#spawn)

## Constructors

### constructor

• **new ObjPool**<`T`\>(`createObj`, `onReset`, `onDestroy`, `initNum?`)

**`Description`**

构造一个对象池

**`Effect`**

调用端生效

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                   | Description                        |
| :---------- | :--------------------- | :--------------------------------- |
| `createObj` | () => `T`              | usage: 创建新对象的回调            |
| `onReset`   | (`obj`: `T`) => `void` | usage: 重置对象的回调              |
| `onDestroy` | (`obj`: `T`) => `void` | usage: 销毁对象的回调              |
| `initNum?`  | `number`               | usage: 默认缓存对象数量 default: 2 |

#### Defined in

Extension/index.d.ts:55

## Methods

### clear

▸ **clear**(): `void`

**`Description`**

清除池中对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Extension/index.d.ts:77

---

### despawn

▸ **despawn**(`obj`): `void`

**`Description`**

归还一个对象

**`Effect`**

调用端生效

#### Parameters

| Name  | Type | Description |
| :---- | :--- | :---------- |
| `obj` | `T`  | usage: 对象 |

#### Returns

`void`

#### Defined in

Extension/index.d.ts:72

---

### spawn

▸ **spawn**(): `T`

**`Description`**

生成一个对象

**`Effect`**

调用端生效

#### Returns

`T`

对象

#### Defined in

Extension/index.d.ts:66
