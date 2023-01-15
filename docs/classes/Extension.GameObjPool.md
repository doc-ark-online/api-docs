[Extension](../modules/Extension.Extension.md) / GameObjPool

# GameObjPool <Badge type="tip" text="Class" /> <Score text="GameObjPool" />

**`Instance`**

GameObject对象池

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[clear](Extension.GameObjPool.md#clear)**(`string`): `void` <br> 清除对象池中该GUID对应的所有对象|
| **[despawn](Extension.GameObjPool.md#despawn)**(`GameObject`): `void` <br> 归还一个对象|
| **[destroy](Extension.GameObjPool.md#destroy)**(): `void` <br> 销毁对象池全局实例|
| **[spawn](Extension.GameObjPool.md#spawn)**<`T`\>(`string`): `T` <br> 生成一个对象|
| **[getInstance](Extension.GameObjPool.md#getinstance)**(): [`GameObjPool`](Extension.GameObjPool.md) <br> 获取对象池全局实例|

## Methods

### clear <Score text="clear" /> 

▸ **clear**(`GUID`): `void` <Badge type="tip" text="other" />

清除对象池中该GUID对应的所有对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  要清除对象的GUID |


___

### despawn <Score text="despawn" /> 

▸ **despawn**(`obj`): `void` <Badge type="tip" text="other" />

归还一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` |  要归还的对象 |


___

### destroy <Score text="destroy" /> 

▸ **destroy**(): `void` <Badge type="tip" text="other" />

销毁对象池全局实例



___

### spawn <Score text="spawn" /> 

▸ **spawn**<`T`\>(`GUID`): `T` <Badge type="tip" text="other" />

生成一个对象


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `GUID` | `string` |  场景对象的GUID \| 资源的GUID \| prefab的GUID |

#### Returns

`T`

生成的对象

___

### getInstance <Score text="getInstance" /> 

▸ `Static` **getInstance**(): [`GameObjPool`](Extension.GameObjPool.md) <Badge type="tip" text="other" />

获取对象池全局实例


#### Returns

[`GameObjPool`](Extension.GameObjPool.md)

对象池全局实例
