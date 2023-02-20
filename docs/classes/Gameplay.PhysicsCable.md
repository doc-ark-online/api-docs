[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsCable

# PhysicsCable <Badge type="tip" text="Class" /> <Score text="PhysicsCable" />

**`Groups`**

PHYSICS

物理绳组件

::: warning Precautions

服务器设置，双端自动同步

:::

使用示例:(动态生成)
```ts
let test = Core.GameObject.spawnGameObject(GUID) as Gameplay.PhysicsCable;
test.constraintTarget1 = obj1.GUID;
test.constraintTarget2 = obj2.GUID;
//参数设置
test.maxLength = 10000;
```

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

调用端自动广播

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

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 最大长度 |



## Methods