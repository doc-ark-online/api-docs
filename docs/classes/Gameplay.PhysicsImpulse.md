[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsImpulse

# PhysicsImpulse <Badge type="tip" text="Class" />

**`Description`**

冲量对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`PhysicsImpulse`**

## Table of contents

| Properties |
| :-----|
| **[onImpulseEnter](Gameplay.PhysicsImpulse.md#onimpulseenter)**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md) <br> 发生冲量碰撞后的回调函数|

| Accessors |
| :-----|
| **[enable](Gameplay.PhysicsImpulse.md#enable)**(): `boolean` <br> 获取是否启用冲量|
| **[impulseForceType](Gameplay.PhysicsImpulse.md#impulseforcetype)**(): [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md) <br> 获取当前冲量力类型|
| **[impulseRadialForce](Gameplay.PhysicsImpulse.md#impulseradialforce)**(): `number` <br> 获取径向力的冲量值|
| **[impulseType](Gameplay.PhysicsImpulse.md#impulsetype)**(): [`ImpulseType`](../enums/Gameplay.ImpulseType.md) <br> 获取冲量应用方式，绝对或相对|
| **[impulseVector](Gameplay.PhysicsImpulse.md#impulsevector)**(): [`Vector`](Type.Vector.md) <br> 获取矢量力的冲量向量|

| Methods |
| :-----|

## Properties

### onImpulseEnter

• **onImpulseEnter**: [`MulticastGameObjectDelegate`](Type.MulticastGameObjectDelegate.md)

**`Description`**

发生冲量碰撞后的回调函数

## Accessors

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取是否启用冲量

**`Effect`**

调用端生效

#### Returns

`boolean`

是否启用冲量

• `set` **enable**(`impulseEnabled`): `void`

**`Description`**

设置是否启用冲量，禁用状态下，不会应用冲量到物体上

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseEnabled` | `boolean` |  是否启用冲量的应用，设置为 false 后依然会有碰撞事件，但不会应用冲量 |

#### Returns

`void`


### impulseForceType

• `get` **impulseForceType**(): [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md)

**`Description`**

获取当前冲量力类型

**`Effect`**

调用端生效

#### Returns

[`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md)

冲量力类型

• `set` **impulseForceType**(`impulseCollisionType`): `void`

**`Description`**

设置冲量力类型

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseCollisionType` | [`ImpulseForceType`](../enums/Gameplay.ImpulseForceType.md) |  冲量力类型 |

#### Returns

`void`

___

### impulseRadialForce

• `get` **impulseRadialForce**(): `number`

**`Description`**

获取径向力的冲量值

**`Effect`**

调用端生效

#### Returns

`number`

径向力时的冲量值

• `set` **impulseRadialForce**(`value`): `void`

**`Description`**

设置径向力的冲量值

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### impulseType

• `get` **impulseType**(): [`ImpulseType`](../enums/Gameplay.ImpulseType.md)

**`Description`**

获取冲量应用方式，绝对或相对

**`Effect`**

调用端生效

#### Returns

[`ImpulseType`](../enums/Gameplay.ImpulseType.md)

当前冲量应用方式

• `set` **impulseType**(`impulseType`): `void`

**`Description`**

设置冲量应用方式

**`Precautions`**

在编辑器中使用会自动更新箭头方向

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impulseType` | [`ImpulseType`](../enums/Gameplay.ImpulseType.md) |  冲量应用方式 |

#### Returns

`void`

___

### impulseVector

• `get` **impulseVector**(): [`Vector`](Type.Vector.md)

**`Description`**

获取矢量力的冲量向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Vector.md)

当前冲量类型

• `set` **impulseVector**(`vec`): `void`

**`Description`**

设置矢量力的冲量向量

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | [`Vector`](Type.Vector.md) |  冲量力向量 |

#### Returns

`void`


## Methods