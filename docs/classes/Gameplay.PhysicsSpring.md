[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsSpring

# PhysicsSpring <Badge type="tip" text="Class" />

**`Description`**

物理弹簧组件

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

| Methods |
| :-----|

## Accessors

### currentLength

• `get` **currentLength**(): `number`

**`Description`**

获取弹簧当前长度

**`Effect`**

调用端

#### Returns

`number`

当前长度

___

### damping

• `get` **damping**(): `number`

**`Description`**

获取阻尼参数

#### Returns

`number`

阻尼参数

• `set` **damping**(`InSpringDamping`): `void`

**`Description`**

设定阻尼参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSpringDamping` | `number` | 阻尼参数 |

#### Returns

`void`

___

### defaultLength

• `get` **defaultLength**(): `number`

**`Description`**

获取弹簧静止长度（无拉伸挤压状态长度）

**`Effect`**

调用端

#### Returns

`number`

静止长度

___

### enable

• `get` **enable**(): `boolean`

**`Description`**

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`EnableState`): `void`

**`Description`**

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EnableState` | `boolean` | 启用状态 |

#### Returns

`void`


### isLengthLimited

• `get` **isLengthLimited**(): `boolean`

**`Description`**

获取弹簧运动长度限定状态

#### Returns

`boolean`

限定状态

• `set` **isLengthLimited**(`isLimited`): `void`

**`Description`**

设定弹簧运动长度限定状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLimited` | `boolean` | 限定状态 |

#### Returns

`void`


### maxStretchLength

• `get` **maxStretchLength**(): `number`

**`Description`**

获取最大伸缩长度

#### Returns

`number`

最大伸缩长度

• `set` **maxStretchLength**(`StretchLength`): `void`

**`Description`**

设定最大伸缩长度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StretchLength` | `number` | 最大伸缩长度 |

#### Returns

`void`


### stiffness

• `get` **stiffness**(): `number`

**`Description`**

获取刚度参数

#### Returns

`number`

刚度参数

• `set` **stiffness**(`InSpringStiffness`): `void`

**`Description`**

设定刚度参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InSpringStiffness` | `number` | 刚度参数 |

#### Returns

`void`


## Methods