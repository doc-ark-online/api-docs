[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponAimComponent

# Class: HotWeaponAimComponent

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).HotWeaponAimComponent

**`Description`**

热武器瞄准组件

**`Network Status`**

usage: 双端

**`Author`**

jun.zhang

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.HotWeaponAimComponent.md#constructor)

### Properties

- [onAimEndClient](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimendclient)
- [onAimEndServer](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimendserver)
- [onAimStartClient](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimstartclient)
- [onAimStartServer](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimstartserver)

### Accessors

- [aimMode](Gameplay.Gameplay.HotWeaponAimComponent.md#aimmode)
- [aimingZoom](Gameplay.Gameplay.HotWeaponAimComponent.md#aimingzoom)
- [cameraOffsetDistanceInThirdPersonMode](Gameplay.Gameplay.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)
- [defaultCameraSpringArmLength](Gameplay.Gameplay.HotWeaponAimComponent.md#defaultcameraspringarmlength)
- [scopeTypeIndex](Gameplay.Gameplay.HotWeaponAimComponent.md#scopetypeindex)

### Methods

- [bindOpenAimComponentDelegates](Gameplay.Gameplay.HotWeaponAimComponent.md#bindopenaimcomponentdelegates)
- [enableAiming](Gameplay.Gameplay.HotWeaponAimComponent.md#enableaiming)

## Constructors

### constructor

• **new HotWeaponAimComponent**()

## Properties

### onAimEndClient

• **onAimEndClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端结束瞄准代理

#### Defined in

Gameplay/index.d.ts:11408

---

### onAimEndServer

• **onAimEndServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端结束瞄准代理

#### Defined in

Gameplay/index.d.ts:11404

---

### onAimStartClient

• **onAimStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始瞄准代理

#### Defined in

Gameplay/index.d.ts:11400

---

### onAimStartServer

• **onAimStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端开始瞄准代理

#### Defined in

Gameplay/index.d.ts:11396

## Accessors

### aimMode

• `get` **aimMode**(): [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md)

**`Description`**

Get 瞄准时的第一/第三人称模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md)

当前瞄准时的第一/第三人称模式

#### Defined in

Gameplay/index.d.ts:11435

• `set` **aimMode**(`NewAimMode`): `void`

**`Description`**

Set 瞄准时的第一/第三人称模式

**`Effect`**

客户端调用自动广播

#### Parameters

| Name         | Type                                                                 | Description                      |
| :----------- | :------------------------------------------------------------------- | :------------------------------- |
| `NewAimMode` | [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md) | usage: 新设置的瞄准模式 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11429

---

### aimingZoom

• `get` **aimingZoom**(): `number`

**`Description`**

Get 第一人称瞄准时的瞄准镜放大倍数

**`Precautions`**

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加 1.0，对应 FOV 增加 5°

**`Effect`**

调用端生效

#### Returns

`number`

当前第一人称瞄准时的瞄准镜放大倍数

#### Defined in

Gameplay/index.d.ts:11461

• `set` **aimingZoom**(`newAimingZoom`): `void`

**`Description`**

Set 模拟瞄准时的瞄准镜放大倍数

**`Precautions`**

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加 1.0，对应 FOV 增加 5°

**`Effect`**

客户端调用自动广播

#### Parameters

| Name            | Type     | Description                            |
| :-------------- | :------- | :------------------------------------- |
| `newAimingZoom` | `number` | usage: 新设置的瞄准镜放大倍数 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11454

---

### cameraOffsetDistanceInThirdPersonMode

• `get` **cameraOffsetDistanceInThirdPersonMode**(): `number`

**`Description`**

Get 第三人称瞄准时的连接相机弹簧组件的长度

**`Effect`**

调用端生效

#### Returns

`number`

当前连接相机弹簧组件的长度

#### Defined in

Gameplay/index.d.ts:11474

• `set` **cameraOffsetDistanceInThirdPersonMode**(`NewCameraOffsetDistance`): `void`

**`Description`**

Set 第三人称瞄准时的连接相机弹簧组件的长度

**`Precautions`**

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离 Character 太近导致穿模，太远则没有必要

**`Effect`**

客户端调用自动广播

#### Parameters

| Name                      | Type     | Description                                    |
| :------------------------ | :------- | :--------------------------------------------- |
| `NewCameraOffsetDistance` | `number` | usage: 新设置的连接相机弹簧组件的长度 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11468

---

### defaultCameraSpringArmLength

• `get` **defaultCameraSpringArmLength**(): `number`

**`Description`**

Get 第三人称常态下相机弹簧组件的默认长度

**`Effect`**

调用端生效

#### Returns

`number`

第三人称常态下相机弹簧组件的默认长度

#### Defined in

Gameplay/index.d.ts:11487

• `set` **defaultCameraSpringArmLength**(`NewCameraArmLength`): `void`

**`Description`**

Set 第三人称常态下相机弹簧组件的默认长度

**`Precautions`**

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离 Character 太近导致穿模，太远则没有必要

**`Effect`**

客户端调用自动广播

#### Parameters

| Name                 | Type     | Description                                        |
| :------------------- | :------- | :------------------------------------------------- |
| `NewCameraArmLength` | `number` | usage: 新设置的连接相机弹簧组件的默认长度 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11481

---

### scopeTypeIndex

• `get` **scopeTypeIndex**(): [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md)

**`Description`**

Get 模拟瞄准镜 UI 种类

**`Effect`**

调用端生效

#### Returns

[`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md)

当前瞄准镜 UI 种类

#### Defined in

Gameplay/index.d.ts:11447

• `set` **scopeTypeIndex**(`NewScopeTypeIndex`): `void`

**`Description`**

Set 模拟瞄准镜 UI 种类

**`Effect`**

客户端调用自动广播

#### Parameters

| Name                | Type                                                                             | Description                        |
| :------------------ | :------------------------------------------------------------------------------- | :--------------------------------- |
| `NewScopeTypeIndex` | [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md) | usage: 新的瞄准镜 UI 种类 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11441

## Methods

### bindOpenAimComponentDelegates

▸ **bindOpenAimComponentDelegates**(): `void`

**`Description`**

绑定瞄准组件代理

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11413

---

### enableAiming

▸ **enableAiming**(`NewAimState`): `void`

**`Description`**

打开/关闭瞄准

- 切换持枪姿态
- 切换相机 View
- 切换准星 UI
- 修改子弹发射精度-上升到用户层，开发者自己在瞄准时设置默认精准度

**`Effect`**

客户端调用自动广播

#### Parameters

| Name          | Type      | Description                      |
| :------------ | :-------- | :------------------------------- |
| `NewAimState` | `boolean` | usage: 是否开启瞄准功能 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11423
