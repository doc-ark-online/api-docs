[Gameplay](../modules/Gameplay.Gameplay.md) / PhysicsIntegratedMover

# PhysicsIntegratedMover <Badge type="tip" text="Class" /> <Score text="PhysicsIntegratedMover" />

**`Description`**

运动器组件

## Hierarchy

- [`PhysicsConstraintBase`](Gameplay.PhysicsConstraintBase.md)

  ↳ **`PhysicsIntegratedMover`**

## Table of contents

| Accessors |
| :-----|
| **[enable](Gameplay.PhysicsIntegratedMover.md#enable)**(): `boolean` <br> 获取启用状态|
| **[linearRepeat](Gameplay.PhysicsIntegratedMover.md#linearrepeat)**(): `boolean` <br> 获取线性重复运动状态|
| **[linearRepeatDelay](Gameplay.PhysicsIntegratedMover.md#linearrepeatdelay)**(): `number` <br> 获取线性重复运动间隔|
| **[linearRepeatTime](Gameplay.PhysicsIntegratedMover.md#linearrepeattime)**(): `number` <br> 获取线性重复运动时间|
| **[linearSpeed](Gameplay.PhysicsIntegratedMover.md#linearspeed)**(): [`Vector`](Type.Vector.md) <br> 获取线性速度大小|
| **[rotationRepeat](Gameplay.PhysicsIntegratedMover.md#rotationrepeat)**(): `boolean` <br> 获取旋转重复运动状态|
| **[rotationRepeatDelay](Gameplay.PhysicsIntegratedMover.md#rotationrepeatdelay)**(): `number` <br> 获取旋转重复运动间隔|
| **[rotationRepeatTime](Gameplay.PhysicsIntegratedMover.md#rotationrepeattime)**(): `number` <br> 获取旋转重复运动时间|
| **[rotationSpeed](Gameplay.PhysicsIntegratedMover.md#rotationspeed)**(): [`Vector`](Type.Vector.md) <br> 获取线性速度大小|
| **[smooth](Gameplay.PhysicsIntegratedMover.md#smooth)**(): `boolean` <br> 获取平滑设置|
| **[swingAngle](Gameplay.PhysicsIntegratedMover.md#swingangle)**(): `number` <br> 获取摆动最大角度|
| **[swingSpeed](Gameplay.PhysicsIntegratedMover.md#swingspeed)**(): [`Vector`](Type.Vector.md) <br> 获取摆动运动速度|


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

### enable <Score text="enable" /> 

• `get` **enable**(): `boolean`

**`Description`**

获取启用状态

#### Returns

`boolean`

启用状态

• `set` **enable**(`newEnable`): `void`

**`Description`**

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newEnable` | `boolean` | 启用状态 |



### linearRepeat <Score text="linearRepeat" /> 

• `get` **linearRepeat**(): `boolean`

**`Description`**

获取线性重复运动状态

#### Returns

`boolean`

线性重复运动状态

• `set` **linearRepeat**(`newRepeat`): `void`

**`Description`**

设置线性重复运动状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 线性重复运动状态 |


___

### linearRepeatDelay <Score text="linearRepeatDelay" /> 

• `get` **linearRepeatDelay**(): `number`

**`Description`**

获取线性重复运动间隔

#### Returns

`number`

线性重复运动间隔

• `set` **linearRepeatDelay**(`newDelay`): `void`

**`Description`**

设置线性重复运动间隔

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 线性重复运动间隔 |


___

### linearRepeatTime <Score text="linearRepeatTime" /> 

• `get` **linearRepeatTime**(): `number`

**`Description`**

获取线性重复运动时间

#### Returns

`number`

线性重复运动时间

• `set` **linearRepeatTime**(`newTime`): `void`

**`Description`**

设置线性重复运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 线性重复运动时间 |


___

### linearSpeed <Score text="linearSpeed" /> 

• `get` **linearSpeed**(): [`Vector`](Type.Vector.md)

**`Description`**

获取线性速度大小

#### Returns

[`Vector`](Type.Vector.md)

线性速度大小

• `set` **linearSpeed**(`newSpeed`): `void`

**`Description`**

设置线性速度大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 线性速度大小 |



### rotationRepeat <Score text="rotationRepeat" /> 

• `get` **rotationRepeat**(): `boolean`

**`Description`**

获取旋转重复运动状态

#### Returns

`boolean`

旋转重复运动状态

• `set` **rotationRepeat**(`newRepeat`): `void`

**`Description`**

设置旋转重复运动状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRepeat` | `boolean` | 旋转重复运动状态 |


___

### rotationRepeatDelay <Score text="rotationRepeatDelay" /> 

• `get` **rotationRepeatDelay**(): `number`

**`Description`**

获取旋转重复运动间隔

#### Returns

`number`

旋转重复运动间隔

• `set` **rotationRepeatDelay**(`newDelay`): `void`

**`Description`**

设置旋转重复运动间隔

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newDelay` | `number` | 旋转重复运动间隔 |


___

### rotationRepeatTime <Score text="rotationRepeatTime" /> 

• `get` **rotationRepeatTime**(): `number`

**`Description`**

获取旋转重复运动时间

#### Returns

`number`

旋转重复运动时间

• `set` **rotationRepeatTime**(`newTime`): `void`

**`Description`**

设置旋转重复运动时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newTime` | `number` | 旋转重复运动时间 |


___

### rotationSpeed <Score text="rotationSpeed" /> 

• `get` **rotationSpeed**(): [`Vector`](Type.Vector.md)

**`Description`**

获取线性速度大小

#### Returns

[`Vector`](Type.Vector.md)

旋转速度大小

• `set` **rotationSpeed**(`newSpeed`): `void`

**`Description`**

设置旋转速度大小

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 旋转速度大小 |


___

### smooth <Score text="smooth" /> 

• `get` **smooth**(): `boolean`

**`Description`**

获取平滑设置

#### Returns

`boolean`

平滑设置状态

• `set` **smooth**(`newSmooth`): `void`

**`Description`**

设置启用状态

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSmooth` | `boolean` | 启用状态 |



### swingAngle <Score text="swingAngle" /> 

• `get` **swingAngle**(): `number`

**`Description`**

获取摆动最大角度

#### Returns

`number`

摆动最大角度

• `set` **swingAngle**(`newAngle`): `void`

**`Description`**

设置摆动最大角度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAngle` | `number` | 摆动最大角度 |


___

### swingSpeed <Score text="swingSpeed" /> 

• `get` **swingSpeed**(): [`Vector`](Type.Vector.md)

**`Description`**

获取摆动运动速度

#### Returns

[`Vector`](Type.Vector.md)

摆动运动速度

• `set` **swingSpeed**(`newSpeed`): `void`

**`Description`**

设置摆动运动速度

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSpeed` | [`Vector`](Type.Vector.md) | 摆动运动速度 |



## Methods