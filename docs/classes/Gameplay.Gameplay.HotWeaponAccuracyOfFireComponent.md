[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponAccuracyOfFireComponent

# HotWeaponAccuracyOfFireComponent <Badge type="tip" text="Class" />

**`Description`**

热武器射击精度组件

## Table of contents

| Properties                                                                                                                                                                                                                                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[onCurrentDispersionChangedClient](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#oncurrentdispersionchangedclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端实际射击精度值发生变化时执行绑定函数 |

| Accessors                                                                                                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[defaultDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#defaultdispersionhalfangle)**(): `number` <br> Get 子弹随机发散范围的默认半径                               |
| **[dispersionHalfAngleDecreaseSpeed](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangledecreasespeed)**(): `number` <br> Get 子弹随机发散范围半径的收缩速度               |
| **[dispersionHalfAngleIncreasePerShot](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasepershot)**(): `number` <br> Get 子弹随机发散范围半径在每次射击后的扩张值 |
| **[dispersionHalfAngleIncreaseSpeed](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#dispersionhalfangleincreasespeed)**(): `number` <br> Get 子弹随机发散范围半径的扩张速度               |
| **[maxDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#maxdispersionhalfangle)**(): `number` <br> Get 子弹随机发散范围的最大半径                                       |
| **[minDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#mindispersionhalfangle)**(): `number` <br> Get 子弹随机发散范围的最小半径                                       |

| Methods                                                                                                                                                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[bindOpenAccuracyOfFireComponentDelegates](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#bindopenaccuracyoffirecomponentdelegates)**(): `void` <br> 客户端 绑定射击精度组件代理                                                        |
| **[getCurrentDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#getcurrentdispersionhalfangle)**(): `number` <br> Get 当前子弹随机发散范围半径实际值                                                                     |
| **[getRandomShootDir](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#getrandomshootdir)**([`Vector`](Type.Type.Vector.md)): [`Vector`](Type.Type.Vector.md) <br> 获取根据射击精度角度范围定义的圆锥空间中的随机射击单位矢量（以屏幕角度） |
| **[getTargetDispersionHalfAngle](Gameplay.Gameplay.HotWeaponAccuracyOfFireComponent.md#gettargetdispersionhalfangle)**(): `number` <br> Get 目标子弹随机发散范围半径实际值                                                                       |

## Properties

### onCurrentDispersionChangedClient

• **onCurrentDispersionChangedClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端实际射击精度值发生变化时执行绑定函数

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

• `set` **defaultDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的默认半径

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `NewValue` | `number` | 新设置的圆型范围半径值 default: |

#### Returns

`void`

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

• `set` **dispersionHalfAngleDecreaseSpeed**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径的收缩速度

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `NewValue` | `number` | 新设置的圆型范围半径每秒变化量 default: |

#### Returns

`void`

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

• `set` **dispersionHalfAngleIncreasePerShot**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径在每次射击后的扩张值

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `NewValue` | `number` | 新设置的圆型范围半径增量 default: |

#### Returns

`void`

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

• `set` **dispersionHalfAngleIncreaseSpeed**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围半径的扩张速度

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `NewValue` | `number` | 新设置的圆型范围半径每秒变化量 default: |

#### Returns

`void`

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

• `set` **maxDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的最大半径

**`Effect`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `NewValue` | `number` | 新设置的圆型范围半径值 default: |

#### Returns

`void`

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

• `set` **minDispersionHalfAngle**(`NewValue`): `void`

**`Description`**

Set 子弹随机发散范围的最小半径

**`Effect`**

客户端调用自动广播

**`Precautions`**

装备热武器前仅服务器调用，装备后双端都可调用

#### Parameters

| Name       | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `NewValue` | `number` | 新设置的圆型范围半径值 default: |

#### Returns

`void`

## Methods

### bindOpenAccuracyOfFireComponentDelegates

▸ **bindOpenAccuracyOfFireComponentDelegates**(): `void`

**`Description`**

客户端 绑定射击精度组件代理

**`Effect`**

调用端生效

#### Returns

`void`

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

| Name                   | Type                            | Description                           |
| :--------------------- | :------------------------------ | :------------------------------------ |
| `ShootDirNoDispersion` | [`Vector`](Type.Type.Vector.md) | 未发生偏移的最初子弹飞行方向 default: |

#### Returns

[`Vector`](Type.Type.Vector.md)

随机屏幕偏移坐标

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
