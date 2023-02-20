[Extension](../modules/Extension.Extension.md) / GameObjPool

# GameObjPool <Badge type="tip" text="Class" /> <Score text="GameObjPool" />

**`Groups`**

UTILITY

GameObject对象池

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Methods |
| :-----|
| **[asyncSpawn](Extension.GameObjPool.md#asyncspawn)**<extends `GameObject`<`T`\> |\>(`string`, [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md)): `Promise`<extends `GameObject`<`T`\> |\> <br> 异步生成一个对象|
| **[clear](Extension.GameObjPool.md#clear)**(`string`, [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md)): `void` <br> 清除对象池中该GUID对应的所有对象|
| **[clearAll](Extension.GameObjPool.md#clearall)**(): `void` <br> 清除对象池里的所有对象|
| **[despawn](Extension.GameObjPool.md#despawn)**(`GameObject`): `void` <br> 归还一个对象|
| **[destroy](Extension.GameObjPool.md#destroy)**(): `void` <br> 销毁对象池全局实例|
| **[find](Extension.GameObjPool.md#find)**(`string`): `GameObject` <br> 找一个对象|
| **[spawn](Extension.GameObjPool.md#spawn)**<extends `GameObject`<`T`\> |\>(`string`, [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md)): extends `GameObject`<`T`\> | <br> 生成一个对象|
| **[getInstance](Extension.GameObjPool.md#getinstance)**(): [`GameObjPool`](Extension.GameObjPool.md) <br> 获取对象池全局实例|

## Methods

### asyncSpawn <Score text="asyncSpawn" /> 

• **asyncSpawn**<`T`\>(`guid`, `type?`): `Promise`<`T`\> <Badge type="tip" text="other" />

异步生成一个对象

::: warning Precautions

注意需要把原始资源预加载

:::


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |

#### Returns

`Promise`<`T`\>

生成的对象

___

### clear <Score text="clear" /> 

• **clear**(`guid`, `type?`): `void` <Badge type="tip" text="other" />

清除对象池中该GUID对应的所有对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |


___

### clearAll <Score text="clearAll" /> 

• **clearAll**(): `void` <Badge type="tip" text="other" />

清除对象池里的所有对象



___

### despawn <Score text="despawn" /> 

• **despawn**(`obj`): `void` <Badge type="tip" text="other" />

归还一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `GameObject` |  要归还的对象 |


___

### destroy <Score text="destroy" /> 

• **destroy**(): `void` <Badge type="tip" text="other" />

销毁对象池全局实例



___

### find <Score text="find" /> 

• **find**(`name`): `GameObject` <Badge type="tip" text="other" />

找一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` |  对象名 |

#### Returns

`GameObject`

对象

___

### spawn <Score text="spawn" /> 

• **spawn**<`T`\>(`guid`, `type?`): `T` <Badge type="tip" text="other" />

生成一个对象

::: warning Precautions

注意如果是资源库中的资源，需要把原始资源预加载

:::


#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `GameObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` |  资源GUID |
| `type?` | [`GameObjPoolSourceType`](../enums/Extension.GameObjPoolSourceType.md) |  资源类型 default: 资源库中的资源 |

#### Returns

`T`

生成的对象

___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`GameObjPool`](Extension.GameObjPool.md) <Badge type="tip" text="other" />

获取对象池全局实例


#### Returns

[`GameObjPool`](Extension.GameObjPool.md)

对象池全局实例
