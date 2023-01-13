[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsCable

# PhysicsCable <Badge type="tip" text="Class" /> <Score text="PhysicsCable" />

物理绳组件

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsCable`**

## Table of contents

| Accessors |
| :-----|
| **[collisionEnable](Gameplay.PhysicsCable.md#collisionenable)**(): `boolean` <br> 获取禁用碰撞|
| **[currentLength](Gameplay.PhysicsCable.md#currentlength)**(): `number` <br> 获取绳子当前长度|
| **[maxLength](Gameplay.PhysicsCable.md#maxlength)**(): `number` <br> 获取绳子最大长度|


::: details 点击查看继承
| Accessors |
| :-----|
| **[constraintTarget1](Gameplay.PhysicsConstraintBase.md#constrainttarget1)**(): `string` <br> 获取约束对象1|
| **[constraintTarget2](Gameplay.PhysicsConstraintBase.md#constrainttarget2)**(): `string` <br> 获取约束对象2|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
:::


## Accessors

### collisionEnable <Score text="collisionEnable" /> 

• `get` **collisionEnable**(): `boolean`

获取禁用碰撞

#### Returns

`boolean`

是否禁用碰撞

• `set` **collisionEnable**(`value`): `void` <Badge type="tip" text="other" />

设置禁用碰撞

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否禁用碰撞 |



### currentLength <Score text="currentLength" /> 

• `get` **currentLength**(): `number`

获取绳子当前长度

#### Returns

`number`

当前长度


### maxLength <Score text="maxLength" /> 

• `get` **maxLength**(): `number`

获取绳子最大长度

#### Returns

`number`

最大长度

• `set` **maxLength**(`value`): `void` <Badge type="tip" text="other" />

设置绳子最大长度

自动同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 最大长度 |



## Methods