[Gameplay](../modules/Gameplay.Gameplay.md) / Particle

# Particle <Badge type="tip" text="Class" />

**`Description`**

特效对象

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`Particle`**

## Table of contents

| Accessors |
| :-----|
| **[color](Gameplay.Particle.md#color)**([`LinearColor`](Type.LinearColor.md)): `void` <br> 设置特效颜色|
| **[loop](Gameplay.Particle.md#loop)**(): `boolean` <br> 获取特效是否是循环|
| **[loopCount](Gameplay.Particle.md#loopcount)**(): `number` <br> 获取特效循环次数|
| **[particleLength](Gameplay.Particle.md#particlelength)**(): `number` <br> 获取特效时长|

| Methods |
| :-----|
| **[play](Gameplay.Particle.md#play)**(() => `void`): `void` <br> 播放特效|
| **[setCullDistance](Gameplay.Particle.md#setculldistance)**(`number`): `void` <br> 与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)|
| **[stop](Gameplay.Particle.md#stop)**(): `void` <br> 停止特效|

## Accessors

### color

• `set` **color**(`EffectColor`): `void`

**`Description`**

设置特效颜色

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `EffectColor` | [`LinearColor`](Type.LinearColor.md) | 特效颜色（当前并不能保证与设置颜色一致） |

#### Returns

`void`


### loop

• `get` **loop**(): `boolean`

**`Description`**

获取特效是否是循环

**`Effect`**

客户端生效

#### Returns

`boolean`

是否循环

• `set` **loop**(`NewLoop`): `void`

**`Description`**

设置特效循环

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLoop` | `boolean` | 是否循环 |

#### Returns

`void`

___

### loopCount

• `get` **loopCount**(): `number`

**`Description`**

获取特效循环次数

**`Effect`**

客户端生效

#### Returns

`number`

循环的次数

• `set` **loopCount**(`NewLoopCount`): `void`

**`Description`**

设置特效循环次数

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewLoopCount` | `number` | 循环的次数 |

#### Returns

`void`


### particleLength

• `get` **particleLength**(): `number`

**`Description`**

获取特效时长

**`Effect`**

客户端生效

#### Returns

`number`

-1：未获取到值


## Methods

### play

▸ **play**(`OnSuccess?`): `void`

**`Description`**

播放特效

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `OnSuccess?` | () => `void` | 特效播放完成后回调 default: null |

#### Returns

`void`


### setCullDistance

▸ **setCullDistance**(`inCullDistance`): `void`

**`Description`**

与玩家之间超出此距离的对象将被剪裁，最终的裁剪距离会和画质等级有关；修改此属性≤0时，裁剪距离会根据对象尺寸自动调整(自动启用CullDistanceVolume功能)

**`Effect`**

只在客户端调用生效

**`Precautions`**

最终的裁剪距离会和画质等级有关

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCullDistance` | `number` | 裁剪距离 |

#### Returns

`void`


### stop

▸ **stop**(): `void`

**`Description`**

停止特效

**`Effect`**

客户端生效

#### Returns

`void`
