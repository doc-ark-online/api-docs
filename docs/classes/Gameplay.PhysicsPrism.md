[Avatar](../groups/Avatar.Avatar.md) / PhysicsPrism

# PhysicsPrism <Badge type="tip" text="Class" /> <Score text="PhysicsPrism" />

**`Groups`**

PHYSICS

物理棱柱组件

::: warning Precautions

服务器设置，双端自动同步

:::

使用示例:(动态生成)
```ts
let test = Core.GameObject.spawnGameObject(GUID) as Gameplay.PhysicsPrism;
test.constraintTarget1 = obj1.GUID;
test.constraintTarget2 = obj2.GUID;
//参数设置
test.enable = true / false;
test.setAxisXLinearType(Gameplay.LimitType.Free);
test.linearLimit = 100;
test.restitution = 100;
test.linearVelocity = new Type.Vector(100,100,100);
test.strength = 100;
```

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsPrism`**

## Table of contents

| Accessors |
| :-----|
| **[enable](Gameplay.PhysicsPrism.md#enable)**(): `boolean` <br> 获取激活状态|
| **[linearLimit](Gameplay.PhysicsPrism.md#linearlimit)**(): `number` <br> 获取限制距离|
| **[linearVelocity](Gameplay.PhysicsPrism.md#linearvelocity)**(): [`Vector`](Type.Vector.md) <br> 获取最大速度|
| **[restitution](Gameplay.PhysicsPrism.md#restitution)**(): `number` <br> 获取反弹力|
| **[strength](Gameplay.PhysicsPrism.md#strength)**(): `number` <br> 获取加速度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[constraintTarget1](Gameplay.PhysicsConstraintBase.md#constrainttarget1)**(): `string` <br> 获取约束对象1|
| **[constraintTarget2](Gameplay.PhysicsConstraintBase.md#constrainttarget2)**(): `string` <br> 获取约束对象2|
:::


| Methods |
| :-----|
| **[getAxisXLinearType](Gameplay.PhysicsPrism.md#getaxisxlineartype)**(): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取X轴滑动类型|
| **[getAxisYLinearType](Gameplay.PhysicsPrism.md#getaxisylineartype)**(): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取Y轴滑动类型|
| **[getAxisZLinearType](Gameplay.PhysicsPrism.md#getaxiszlineartype)**(): [`LimitType`](../enums/Gameplay.LimitType.md) <br> 获取Z轴滑动类型|
| **[setAxisXLinearType](Gameplay.PhysicsPrism.md#setaxisxlineartype)**(`LimitType`: [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置X轴滑动类型|
| **[setAxisYLinearType](Gameplay.PhysicsPrism.md#setaxisylineartype)**(`LimitType`: [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置Y轴滑动类型|
| **[setAxisZLinearType](Gameplay.PhysicsPrism.md#setaxiszlineartype)**(`LimitType`: [`LimitType`](../enums/Gameplay.LimitType.md)): `void` <br> 设置Z轴滑动类型|


::: details 点击查看继承
| Methods |
| :-----|
:::


## Accessors

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean`

获取激活状态

#### Returns

`boolean`

激活状态

• `set` **enable**(`EnableState`): `void`

设置激活状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 激活状态 |



### linearLimit <Score text="linearLimit" /> 

• `get` **linearLimit**(): `number`

获取限制距离

#### Returns

`number`

限制距离

• `set` **linearLimit**(`Limit`): `void`

设置限制距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Limit` | `number` | 限制距离 |


___

### linearVelocity <Score text="linearVelocity" /> 

• `get` **linearVelocity**(): [`Vector`](Type.Vector.md)

获取最大速度

#### Returns

[`Vector`](Type.Vector.md)

最大速度

• `set` **linearVelocity**(`Velocity`): `void`

设置最大速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Velocity` | [`Vector`](Type.Vector.md) | 最大速度 |



### restitution <Score text="restitution" /> 

• `get` **restitution**(): `number`

获取反弹力

#### Returns

`number`

反弹力

• `set` **restitution**(`restitution`): `void`

设置反弹力

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `restitution` | `number` | 反弹力 |



### strength <Score text="strength" /> 

• `get` **strength**(): `number`

获取加速度

#### Returns

`number`

加速度

• `set` **strength**(`strength`): `void`

设置加速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strength` | `number` | 加速度 |



## Methods

### getAxisXLinearType <Score text="getAxisXLinearType" /> 

• **getAxisXLinearType**(): [`LimitType`](../enums/Gameplay.LimitType.md) 

获取X轴滑动类型


#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

X轴滑动类型

___

### getAxisYLinearType <Score text="getAxisYLinearType" /> 

• **getAxisYLinearType**(): [`LimitType`](../enums/Gameplay.LimitType.md) 

获取Y轴滑动类型


#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

Y轴滑动类型

___

### getAxisZLinearType <Score text="getAxisZLinearType" /> 

• **getAxisZLinearType**(): [`LimitType`](../enums/Gameplay.LimitType.md) 

获取Z轴滑动类型


#### Returns

[`LimitType`](../enums/Gameplay.LimitType.md)

Z轴滑动类型


### setAxisXLinearType <Score text="setAxisXLinearType" /> 

• **setAxisXLinearType**(`LimitType`): `void` 

设置X轴滑动类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LimitType` | [`LimitType`](../enums/Gameplay.LimitType.md) | X轴滑动类型 |


___

### setAxisYLinearType <Score text="setAxisYLinearType" /> 

• **setAxisYLinearType**(`LimitType`): `void` 

设置Y轴滑动类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LimitType` | [`LimitType`](../enums/Gameplay.LimitType.md) | Y轴滑动类型 |


___

### setAxisZLinearType <Score text="setAxisZLinearType" /> 

• **setAxisZLinearType**(`LimitType`): `void` 

设置Z轴滑动类型


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `LimitType` | [`LimitType`](../enums/Gameplay.LimitType.md) | Z轴滑动类型 |

