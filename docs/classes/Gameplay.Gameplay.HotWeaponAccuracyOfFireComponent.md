[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponAccuracyOfFireComponent

# Class: HotWeaponAccuracyOfFireComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponAccuracyOfFireComponent

**`Description`**

热武器射击精度组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#constructor)

### Properties

- [onCurrentDispersionChangedClient](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#oncurrentdispersionchangedclient)

### Accessors

- [defaultDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#defaultdispersionhalfangle)
- [dispersionHalfAngleDecreaseSpeed](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangledecreasespeed)
- [dispersionHalfAngleIncreasePerShot](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasepershot)
- [dispersionHalfAngleIncreaseSpeed](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasespeed)
- [maxDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#maxdispersionhalfangle)
- [minDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#mindispersionhalfangle)

### Methods

- [bindOpenAccuracyOfFireComponentDelegates](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#bindopenaccuracyoffirecomponentdelegates)
- [getCurrentDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#getcurrentdispersionhalfangle)
- [getRandomShootDir](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#getrandomshootdir)
- [getTargetDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#gettargetdispersionhalfangle)

## Constructors

### constructor

• **new HotWeaponAccuracyOfFireComponent**()

## Properties

### onCurrentDispersionChangedClient

• **onCurrentDispersionChangedClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端实际射击精度值发生变化时执行绑定函数

#### Defined in

Gameplay/index.d.ts:11257

## Accessors

### defaultDispersionHalfAngle

• `get` **defaultDispersionHalfAngle**(): `number`

**`Description`**

Get 子弹随机发散范围的默认半径

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径值

#### Defined in

Gameplay/index.d.ts:11285

• `set` **defaultDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的默认半径

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径值 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11279

---

### dispersionHalfAngleDecreaseSpeed

• `get` **dispersionHalfAngleDecreaseSpeed**(): `number`

**`Description`**

Get 子弹随机发散范围半径的收缩速度

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径每秒变化量

#### Defined in

Gameplay/index.d.ts:11323

• `set` **dispersionHalfAngleDecreaseSpeed**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径的收缩速度

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                                    |
| :--------- | :------- | :--------------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径每秒变化量 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11317

---

### dispersionHalfAngleIncreasePerShot

• `get` **dispersionHalfAngleIncreasePerShot**(): `number`

**`Description`**

Get 子弹随机发散范围半径在每次射击后的扩张值

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径增量

#### Defined in

Gameplay/index.d.ts:11349

• `set` **dispersionHalfAngleIncreasePerShot**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径在每次射击后的扩张值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                              |
| :--------- | :------- | :--------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径增量 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11343

---

### dispersionHalfAngleIncreaseSpeed

• `get` **dispersionHalfAngleIncreaseSpeed**(): `number`

**`Description`**

Get 子弹随机发散范围半径的扩张速度

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径每秒变化量

#### Defined in

Gameplay/index.d.ts:11336

• `set` **dispersionHalfAngleIncreaseSpeed**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径的扩张速度

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                                    |
| :--------- | :------- | :--------------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径每秒变化量 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11330

---

### maxDispersionHalfAngle

• `get` **maxDispersionHalfAngle**(): `number`

**`Description`**

Get 子弹随机发散范围的最大半径

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径值

#### Defined in

Gameplay/index.d.ts:11297

• `set` **maxDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的最大半径

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径值 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11291

---

### minDispersionHalfAngle

• `get` **minDispersionHalfAngle**(): `number`

**`Description`**

Get 子弹随机发散范围的最小半径

**`Effect`**

调用端生效

#### Returns

`number`

圆型范围半径值

#### Defined in

Gameplay/index.d.ts:11310

• `set` **minDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的最小半径

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `NewValue` | `number` | usage: 新设置的圆型范围半径值 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11304

## Methods

### bindOpenAccuracyOfFireComponentDelegates

▸ **bindOpenAccuracyOfFireComponentDelegates**(): `void`

**`Description`**

客户端 绑定射击精度组件代理

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11264

---

### getCurrentDispersionHalfAngle

▸ **getCurrentDispersionHalfAngle**(): `number`

**`Description`**

Get 当前子弹随机发散范围半径实际值

**`Effect`**

调用端生效

#### Returns

`number`

当前子弹发散范围半径

#### Defined in

Gameplay/index.d.ts:11355

---

### getRandomShootDir

▸ **getRandomShootDir**(`ShootDirNoDispersion`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度）

**`Precautions`**

以屏幕中心处生成子弹，可直接套用该矢量
以预设位置处生成子弹，需要以 预设位置+该矢量+最大射击距离 决定着弹点，再计算实际三维空间中子弹的飞行方向

**`Effect`**

调用端生效

#### Parameters

| Name                   | Type                            | Description                                  |
| :--------------------- | :------------------------------ | :------------------------------------------- |
| `ShootDirNoDispersion` | [`Vector`](Type.Type.Vector.md) | usage: 未发生偏移的最初子弹飞行方向 default: |

#### Returns

[`Vector`](Type.Type.Vector.md)

随机屏幕偏移坐标

#### Defined in

Gameplay/index.d.ts:11273

---

### getTargetDispersionHalfAngle

▸ **getTargetDispersionHalfAngle**(): `number`

**`Description`**

Get 目标子弹随机发散范围半径实际值

**`Effect`**

调用端生效

#### Returns

`number`

目标子弹发散范围半径

#### Defined in

Gameplay/index.d.ts:11361
