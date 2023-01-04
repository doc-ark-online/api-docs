[Extension](../modules/Extension.Extension.md) / GameObjPool

# GameObjPool <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

GameObject对象池

**`Precautions`**

单例类，请使用getInstance获取对象

## Table of contents

| Methods |
| :-----|
| **[clear](Extension.GameObjPool.md#clear)**(`string`): `void` <br> 清除对象池中该guid对应的所有对象|
| **[despawn](Extension.GameObjPool.md#despawn)**(`GameObject`): `void` <br> 归还一个对象|
| **[destroy](Extension.GameObjPool.md#destroy)**(): `void` <br> 销毁对象池全局实例|
| **[spawn](Extension.GameObjPool.md#spawn)**<extends `GameObject`<`T`\> |\>(`string`): extends `GameObject`<`T`\> | <br> 生成一个对象|
| **[getInstance](Extension.GameObjPool.md#getinstance)**(): [`GameObjPool`](Extension.GameObjPool.md) <br> 获取对象池全局实例|

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
| `guid` | `string` |  要清除对象的guid |

#### Returns

`void`

___

### despawn

▸ **despawn**(`obj`): `void`

**`Description`**

归还一个对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` |  要归还的对象 |

#### Returns

`void`

___

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁对象池全局实例

**`Effect`**

调用端生效

#### Returns

`void`

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
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  场景对象的guid \| 资源的guid \| prefab的guid |

#### Returns

`T`

生成的对象

___

### getInstance

▸ `Static` **getInstance**(): [`GameObjPool`](Extension.GameObjPool.md)

**`Description`**

获取对象池全局实例

**`Effect`**

调用端生效

#### Returns

[`GameObjPool`](Extension.GameObjPool.md)

对象池全局实例
