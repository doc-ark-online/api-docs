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

- [delegateAimEndClient](Gameplay.Gameplay.HotWeaponAimComponent.md#delegateaimendclient)
- [delegateAimEndServer](Gameplay.Gameplay.HotWeaponAimComponent.md#delegateaimendserver)
- [delegateAimStartClient](Gameplay.Gameplay.HotWeaponAimComponent.md#delegateaimstartclient)
- [delegateAimStartServer](Gameplay.Gameplay.HotWeaponAimComponent.md#delegateaimstartserver)

### Accessors

- [aimMode](Gameplay.Gameplay.HotWeaponAimComponent.md#aimmode)
- [aimingZoom](Gameplay.Gameplay.HotWeaponAimComponent.md#aimingzoom)
- [cameraOffsetDistanceInThirdPersonMode](Gameplay.Gameplay.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)
- [defaultCameraSpringArmLength](Gameplay.Gameplay.HotWeaponAimComponent.md#defaultcameraspringarmlength)
- [scopeTypeIndex](Gameplay.Gameplay.HotWeaponAimComponent.md#scopetypeindex)

### Methods

- [bindOpenAimComponentDelegates](Gameplay.Gameplay.HotWeaponAimComponent.md#bindopenaimcomponentdelegates)
- [setAiming](Gameplay.Gameplay.HotWeaponAimComponent.md#setaiming)

## Constructors

### constructor

• **new HotWeaponAimComponent**()

## Properties

### delegateAimEndClient

• **delegateAimEndClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端结束瞄准代理

#### Defined in

Gameplay/index.d.ts:11720

___

### delegateAimEndServer

• **delegateAimEndServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端结束瞄准代理

#### Defined in

Gameplay/index.d.ts:11716

___

### delegateAimStartClient

• **delegateAimStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始瞄准代理

#### Defined in

Gameplay/index.d.ts:11712

___

### delegateAimStartServer

• **delegateAimStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端开始瞄准代理

#### Defined in

Gameplay/index.d.ts:11708

## Accessors

### aimMode

• `get` **aimMode**(): [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md)

**`Description`**

Get瞄准时的第一/第三人称模式

**`Effect`**

调用端生效

#### Returns

[`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md)

当前瞄准时的第一/第三人称模式

#### Defined in

Gameplay/index.d.ts:11747

• `set` **aimMode**(`NewAimMode`): `void`

**`Description`**

Set瞄准时的第一/第三人称模式

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimMode` | [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md) | usage: 新设置的瞄准模式 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11741

___

### aimingZoom

• `get` **aimingZoom**(): `number`

**`Description`**

Get第一人称瞄准时的瞄准镜放大倍数

**`Precautions`**

合法范围为[1.0 , 18.0]，对应[0° , 90°]的FOV值每增加1.0，对应FOV增加5°

**`Effect`**

调用端生效

#### Returns

`number`

当前第一人称瞄准时的瞄准镜放大倍数

#### Defined in

Gameplay/index.d.ts:11773

• `set` **aimingZoom**(`newAimingZoom`): `void`

**`Description`**

Set模拟瞄准时的瞄准镜放大倍数

**`Precautions`**

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加1.0，对应FOV增加5°

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAimingZoom` | `number` | usage: 新设置的瞄准镜放大倍数 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11766

___

### cameraOffsetDistanceInThirdPersonMode

• `get` **cameraOffsetDistanceInThirdPersonMode**(): `number`

**`Description`**

Get第三人称瞄准时的连接相机弹簧组件的长度

**`Effect`**

调用端生效

#### Returns

`number`

当前连接相机弹簧组件的长度

#### Defined in

Gameplay/index.d.ts:11786

• `set` **cameraOffsetDistanceInThirdPersonMode**(`NewCameraOffsetDistance`): `void`

**`Description`**

Set第三人称瞄准时的连接相机弹簧组件的长度

**`Precautions`**

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraOffsetDistance` | `number` | usage: 新设置的连接相机弹簧组件的长度 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11780

___

### defaultCameraSpringArmLength

• `get` **defaultCameraSpringArmLength**(): `number`

**`Description`**

Get第三人称常态下相机弹簧组件的默认长度

**`Effect`**

调用端生效

#### Returns

`number`

第三人称常态下相机弹簧组件的默认长度

#### Defined in

Gameplay/index.d.ts:11799

• `set` **defaultCameraSpringArmLength**(`NewCameraArmLength`): `void`

**`Description`**

Set第三人称常态下相机弹簧组件的默认长度

**`Precautions`**

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraArmLength` | `number` | usage: 新设置的连接相机弹簧组件的默认长度 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11793

___

### scopeTypeIndex

• `get` **scopeTypeIndex**(): [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md)

**`Description`**

Get模拟瞄准镜UI种类

**`Effect`**

调用端生效

#### Returns

[`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md)

当前瞄准镜UI种类

#### Defined in

Gameplay/index.d.ts:11759

• `set` **scopeTypeIndex**(`NewScopeTypeIndex`): `void`

**`Description`**

Set模拟瞄准镜UI种类

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewScopeTypeIndex` | [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md) | usage: 新的瞄准镜UI种类 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11753

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

Gameplay/index.d.ts:11725

___

### setAiming

▸ **setAiming**(`NewAimState`): `void`

**`Description`**

打开/关闭瞄准
- 切换持枪姿态
- 切换相机View
- 切换准星UI
- 修改子弹发射精度-上升到用户层，开发者自己在瞄准时设置默认精准度

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimState` | `boolean` | usage: 是否开启瞄准功能 default: |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:11735
