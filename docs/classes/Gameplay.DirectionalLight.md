[Gameplay](../modules/Gameplay.Gameplay.md) / DirectionalLight

# DirectionalLight <Badge type="tip" text="Class" />

**`Description`**

平行光

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`DirectionalLight`**

## Table of contents

| Accessors |
| :-----|
| **[baseShadowEnable](Gameplay.DirectionalLight.md#baseshadowenable)**(): `boolean` <br> 启用/禁用所有角色的模拟阴影|
| **[castShadowsEnable](Gameplay.DirectionalLight.md#castshadowsenable)**(): `boolean` <br> 获取是否开启阴影|
| **[intensity](Gameplay.DirectionalLight.md#intensity)**(): `number` <br> 获取光照强度|
| **[lightColor](Gameplay.DirectionalLight.md#lightcolor)**(): [`LinearColor`](Type.LinearColor.md) <br> 获取光照颜色|
| **[pitchAngle](Gameplay.DirectionalLight.md#pitchangle)**(): `number` <br> 获取俯仰角度|
| **[temperature](Gameplay.DirectionalLight.md#temperature)**(): `number` <br> 获取色温|
| **[temperatureEnable](Gameplay.DirectionalLight.md#temperatureenable)**(): `boolean` <br> 获取是否开启色温|
| **[yawAngle](Gameplay.DirectionalLight.md#yawangle)**(): `number` <br> 获取朝向角度|

| Methods |
| :-----|

## Accessors

### baseShadowEnable

• `get` **baseShadowEnable**(): `boolean`

**`Description`**

启用/禁用所有角色的模拟阴影

**`Precautions`**

模拟阴影是一个位于角色脚底的假阴影, 会根据角色离地高度产生简单的明暗变化, 性能很好. 注意: 这是一个慢方法, 不要在tick内对阴影进行连续开关

#### Returns

`boolean`

• `set` **baseShadowEnable**(`enable`): `void`

**`Description`**

启用/禁用所有角色的模拟阴影

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

___

### castShadowsEnable

• `get` **castShadowsEnable**(): `boolean`

**`Description`**

获取是否开启阴影

**`Effect`**

客户端生效

#### Returns

`boolean`

true或false

• `set` **castShadowsEnable**(`value`): `void`

**`Description`**

设置是否开启阴影

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |

#### Returns

`void`


### intensity

• `get` **intensity**(): `number`

**`Description`**

获取光照强度

**`Effect`**

客户端生效

#### Returns

`number`

光照强度

• `set` **intensity**(`value`): `void`

**`Description`**

设置光照强度 （0 ~ 100）

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 强度浮点值 |

#### Returns

`void`

___

### lightColor

• `get` **lightColor**(): [`LinearColor`](Type.LinearColor.md)

**`Description`**

获取光照颜色

**`Effect`**

客户端生效

#### Returns

[`LinearColor`](Type.LinearColor.md)

光照颜色

• `set` **lightColor**(`newLightColor`): `void`

**`Description`**

设置光照颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newLightColor` | [`LinearColor`](Type.LinearColor.md) | 颜色值 |

#### Returns

`void`


### pitchAngle

• `get` **pitchAngle**(): `number`

**`Description`**

获取俯仰角度

**`Effect`**

客户端生效

#### Returns

`number`

俯仰角度

• `set` **pitchAngle**(`value`): `void`

**`Description`**

设置俯仰角度 （-90 ~ 90）

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |

#### Returns

`void`


### temperature

• `get` **temperature**(): `number`

**`Description`**

获取色温

**`Effect`**

客户端生效

#### Returns

`number`

true或false

• `set` **temperature**(`value`): `void`

**`Description`**

设置色温 （1000 ~ 14000）

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 色温浮点值 |

#### Returns

`void`

___

### temperatureEnable

• `get` **temperatureEnable**(): `boolean`

**`Description`**

获取是否开启色温

**`Effect`**

客户端生效

#### Returns

`boolean`

true或false

• `set` **temperatureEnable**(`value`): `void`

**`Description`**

设置是否开启色温

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 布尔值 |

#### Returns

`void`


### yawAngle

• `get` **yawAngle**(): `number`

**`Description`**

获取朝向角度

**`Effect`**

客户端生效

#### Returns

`number`

朝向角度

• `set` **yawAngle**(`value`): `void`

**`Description`**

设置朝向角度 （-180 ~ 180）

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 角度浮点值 |

#### Returns

`void`

## Methods