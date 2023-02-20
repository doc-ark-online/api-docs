[Extension](../modules/Extension.Extension.md) / ObjPool

# ObjPool<T\> <Badge type="tip" text="Class" /> <Score text="ObjPool<T\>" />

对象池

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

| Accessors |
| :-----|
| **[size](Extension.ObjPool.md#size)**(): `number` <br> 获取对象池中空闲对象的数量|

| Methods |
| :-----|
| **[clear](Extension.ObjPool.md#clear)**(): `void` <br> 清除池中对象|
| **[despawn](Extension.ObjPool.md#despawn)**(`T`): `void` <br> 归还一个对象|
| **[spawn](Extension.ObjPool.md#spawn)**(): `T` <br> 生成一个对象|

构造一个对象池

**`Effect`**


#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createObj` | () => `T` |  创建新对象的回调 |
| `onReset` | (`obj`: `T`) => `void` |  重置对象的回调 |
| `onDestroy` | (`obj`: `T`) => `void` |  销毁对象的回调 |
| `initNum?` | `number` |  默认缓存对象数量 default: 2 |

## Accessors

### size <Score text="size" /> 

• `get` **size**(): `number` <Badge type="tip" text="other" />

获取对象池中空闲对象的数量


#### Returns

`number`

## Methods

### clear <Score text="clear" /> 

• **clear**(): `void` <Badge type="tip" text="other" />

清除池中对象



___

### despawn <Score text="despawn" /> 

• **despawn**(`obj`): `void` <Badge type="tip" text="other" />

归还一个对象


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` |  对象 |


___

### spawn <Score text="spawn" /> 

• **spawn**(): `T` <Badge type="tip" text="other" />

生成一个对象


#### Returns

`T`

对象
