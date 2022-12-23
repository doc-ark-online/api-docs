[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Extension](../modules/Extension.md) / [Extension](../modules/Extension.Extension.md) / GoPool

# Class: GoPool

[Extension](../modules/Extension.md).[Extension](../modules/Extension.Extension.md).GoPool

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

GameObject对象池

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Extension.Extension.GoPool.md#constructor)

### Methods

- [clear](Extension.Extension.GoPool.md#clear)
- [destroy](Extension.Extension.GoPool.md#destroy)
- [spawn](Extension.Extension.GoPool.md#spawn)
- [unSpawn](Extension.Extension.GoPool.md#unspawn)
- [getInstance](Extension.Extension.GoPool.md#getinstance)

## Constructors

### constructor

• **new GoPool**()

## Methods

### clear

▸ **clear**(`guid`): `void`

**`Description`**

清除对象池中该guid对应的所有对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage: 要清除对象的guid |

#### Returns

`void`

#### Defined in

Extension/index.d.ts:39

___

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

___

### spawn

▸ **spawn**<`T`\>(`guid`): `T`

**`Description`**

生成一个对象

**`Effect`**

调用端生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](Core.Core.GameObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage: 场景对象的guid \| 资源的guid \| prefab的guid |

#### Returns

`T`

生成的对象

#### Defined in

Extension/index.d.ts:27

___

### unSpawn

▸ **unSpawn**(`obj`): `void`

**`Description`**

归还一个对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage: 要归还的对象 |

#### Returns

`void`

#### Defined in

Extension/index.d.ts:33

___

### getInstance

▸ `Static` **getInstance**(): [`GoPool`](Extension.Extension.GoPool.md)

**`Description`**

获取对象池全局实例

**`Effect`**

调用端生效

#### Returns

[`GoPool`](Extension.Extension.GoPool.md)

对象池全局实例

#### Defined in

Extension/index.d.ts:15
