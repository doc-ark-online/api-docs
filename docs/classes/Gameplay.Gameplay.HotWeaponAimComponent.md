[Gameplay](../modules/Gameplay.Gameplay.md) / HotWeaponAimComponent

# HotWeaponAimComponent <Badge type="tip" text="Class" />

**`Description`**

热武器瞄准组件

## Table of contents

| Properties |
| :-----|
| **[onAimEndClient](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimendclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端结束瞄准代理|
| **[onAimEndServer](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimendserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端结束瞄准代理|
| **[onAimStartClient](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimstartclient)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始瞄准代理|
| **[onAimStartServer](Gameplay.Gameplay.HotWeaponAimComponent.md#onaimstartserver)**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端开始瞄准代理|

| Accessors |
| :-----|
| **[aimMode](Gameplay.Gameplay.HotWeaponAimComponent.md#aimmode)**(): [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md) <br> Get瞄准时的第一/第三人称模式|
| **[aimingZoom](Gameplay.Gameplay.HotWeaponAimComponent.md#aimingzoom)**(): `number` <br> Get第一人称瞄准时的瞄准镜放大倍数|
| **[cameraOffsetDistanceInThirdPersonMode](Gameplay.Gameplay.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)**(): `number` <br> Get第三人称瞄准时的连接相机弹簧组件的长度|
| **[defaultCameraSpringArmLength](Gameplay.Gameplay.HotWeaponAimComponent.md#defaultcameraspringarmlength)**(): `number` <br> Get第三人称常态下相机弹簧组件的默认长度|
| **[scopeTypeIndex](Gameplay.Gameplay.HotWeaponAimComponent.md#scopetypeindex)**(): [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md) <br> Get模拟瞄准镜UI种类|

| Methods |
| :-----|
| **[bindOpenAimComponentDelegates](Gameplay.Gameplay.HotWeaponAimComponent.md#bindopenaimcomponentdelegates)**(): `void` <br> 绑定瞄准组件代理|
| **[enableAiming](Gameplay.Gameplay.HotWeaponAimComponent.md#enableaiming)**(`boolean`): `void` <br> 打开/关闭瞄准|

## Properties

### onAimEndClient

• **onAimEndClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端结束瞄准代理

___

### onAimEndServer

• **onAimEndServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端结束瞄准代理

___

### onAimStartClient

• **onAimStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

客户端开始瞄准代理

___

### onAimStartServer

• **onAimStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.Type.MulticastDelegateInterface.md)<() => `void`\>

**`Description`**

服务器端开始瞄准代理

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

• `set` **aimMode**(`NewAimMode`): `void`

**`Description`**

Set瞄准时的第一/第三人称模式

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimMode` | [`HotWeaponAimMode`](../enums/Gameplay.Gameplay.HotWeaponAimMode.md) |  新设置的瞄准模式 default: |

#### Returns

`void`

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
| `newAimingZoom` | `number` |  新设置的瞄准镜放大倍数 default: |

#### Returns

`void`

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
| `NewCameraOffsetDistance` | `number` |  新设置的连接相机弹簧组件的长度 default: |

#### Returns

`void`

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
| `NewCameraArmLength` | `number` |  新设置的连接相机弹簧组件的默认长度 default: |

#### Returns

`void`

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

• `set` **scopeTypeIndex**(`NewScopeTypeIndex`): `void`

**`Description`**

Set模拟瞄准镜UI种类

**`Effect`**

客户端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewScopeTypeIndex` | [`HotWeaponCrossHairType`](../enums/Gameplay.Gameplay.HotWeaponCrossHairType.md) |  新的瞄准镜UI种类 default: |

#### Returns

`void`

## Methods

### bindOpenAimComponentDelegates

▸ **bindOpenAimComponentDelegates**(): `void`

**`Description`**

绑定瞄准组件代理

**`Effect`**

调用端生效

#### Returns

`void`

___

### enableAiming

▸ **enableAiming**(`NewAimState`): `void`

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
| `NewAimState` | `boolean` |  是否开启瞄准功能 default: |

#### Returns

`void`
