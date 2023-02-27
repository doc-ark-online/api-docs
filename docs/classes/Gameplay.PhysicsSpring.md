[Physics](../groups/Physics.Physics.md) / PhysicsSpring

# PhysicsSpring <Badge type="tip" text="Class" /> <Score text="PhysicsSpring" />

**`Groups`**

PHYSICS

物理弹簧组件

::: warning Precautions

服务器设置，双端自动同步

:::

使用示例:(动态生成)
```ts
let test = Core.GameObject.spawnGameObject(GUID) as Gameplay.PhysicsSpring;
test.constraintTarget1 = obj1.GUID;
test.constraintTarget2 = obj2.GUID;
//参数设置
test.enable = true / false;
test.isLengthLimited = true;
test.maxStretchLength = 100;
test.stiffness = 100;
test.damping = 100;
```

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsSpring`**

## Table of contents

| Accessors |
| :-----|
| **[currentLength](Gameplay.PhysicsSpring.md#currentlength)**(): `number` <br> 获取弹簧当前长度|
| **[damping](Gameplay.PhysicsSpring.md#damping)**(): `number` <br> 获取阻尼参数|
| **[defaultLength](Gameplay.PhysicsSpring.md#defaultlength)**(): `number` <br> 获取弹簧静止长度（无拉伸挤压状态长度）|
| **[enable](Gameplay.PhysicsSpring.md#enable)**(): `boolean` <br> 获取启用状态|
| **[isLengthLimited](Gameplay.PhysicsSpring.md#islengthlimited)**(): `boolean` <br> 获取弹簧运动长度限定状态|
| **[maxStretchLength](Gameplay.PhysicsSpring.md#maxstretchlength)**(): `number` <br> 获取最大伸缩长度|
| **[stiffness](Gameplay.PhysicsSpring.md#stiffness)**(): `number` <br> 获取刚度参数|


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

### currentLength <Score text="currentLength" /> 

• `get` **currentLength**(): `number` <Badge type="tip" text="other" />

获取弹簧当前长度

调用端

#### Returns

`number`

当前长度

___

### damping <Score text="damping" /> 

• `get` **damping**(): `number`

获取阻尼参数

#### Returns

`number`

阻尼参数

• `set` **damping**(`InSpringDamping`): `void`

设定阻尼参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSpringDamping` | `number` | 阻尼参数 |


___

### defaultLength <Score text="defaultLength" /> 

• `get` **defaultLength**(): `number` <Badge type="tip" text="other" />

获取弹簧静止长度（无拉伸挤压状态长度）

调用端

#### Returns

`number`

静止长度

___

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean`

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`EnableState`): `void`

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 启用状态 |



### isLengthLimited <Score text="isLengthLimited" /> 

• `get` **isLengthLimited**(): `boolean`

获取弹簧运动长度限定状态

#### Returns

`boolean`

限定状态

• `set` **isLengthLimited**(`isLimited`): `void`

设定弹簧运动长度限定状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLimited` | `boolean` | 限定状态 |



### maxStretchLength <Score text="maxStretchLength" /> 

• `get` **maxStretchLength**(): `number`

获取最大伸缩长度

#### Returns

`number`

最大伸缩长度

• `set` **maxStretchLength**(`StretchLength`): `void`

设定最大伸缩长度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StretchLength` | `number` | 最大伸缩长度 |



### stiffness <Score text="stiffness" /> 

• `get` **stiffness**(): `number`

获取刚度参数

#### Returns

`number`

刚度参数

• `set` **stiffness**(`InSpringStiffness`): `void`

设定刚度参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSpringStiffness` | `number` | 刚度参数 |



## Methods