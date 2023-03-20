[Gameplay](../groups/Gameplay.Gameplay.md) / HotWeaponAimComponent

# HotWeaponAimComponent <Badge type="tip" text="Class" /> <Score text="HotWeaponAimComponent" />

热武器瞄准组件，瞄准状态下持枪角色的视角会拉近

使用示例: 如下示例展示热武器瞄准组件组件使用的基本流程
```ts
// 已有名为 hotWeapon 的热武器功能对象的示例
hotWeapon.aimEnable = true;
hotWeapon.aimComponent.onAimStartServer.add(() => {
    // 服务端开始瞄准时触发的回调
});
// 修改参数
hotWeapon.aimComponent.aimingZoom = 3;
```

## Table of contents

| Properties |
| :-----|
| **[onAimEndClient](Gameplay.HotWeaponAimComponent.md#onaimendclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端结束瞄准代理|
| **[onAimEndServer](Gameplay.HotWeaponAimComponent.md#onaimendserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端结束瞄准代理|
| **[onAimStartClient](Gameplay.HotWeaponAimComponent.md#onaimstartclient)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 客户端开始瞄准代理|
| **[onAimStartServer](Gameplay.HotWeaponAimComponent.md#onaimstartserver)**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\> <br> 服务器端开始瞄准代理|

| Accessors |
| :-----|
| **[aimMode](Gameplay.HotWeaponAimComponent.md#aimmode)**(): [`HotWeaponAimMode`](../enums/Gameplay.HotWeaponAimMode.md) <br> Get瞄准时的第一/第三人称模式|
| **[aimingZoom](Gameplay.HotWeaponAimComponent.md#aimingzoom)**(): `number` <br> Get第一人称瞄准时的瞄准镜放大倍数|
| **[cameraOffsetDistanceInThirdPersonMode](Gameplay.HotWeaponAimComponent.md#cameraoffsetdistanceinthirdpersonmode)**(): `number` <br> Get第三人称瞄准时的连接相机弹簧组件的长度|
| **[defaultCameraSpringArmLength](Gameplay.HotWeaponAimComponent.md#defaultcameraspringarmlength)**(): `number` <br> Get第三人称常态下相机弹簧组件的默认长度|
| **[scopeTypeIndex](Gameplay.HotWeaponAimComponent.md#scopetypeindex)**(): [`HotWeaponCrossHairType`](../enums/Gameplay.HotWeaponCrossHairType.md) <br> Get模拟瞄准镜UI种类|

| Methods |
| :-----|
| **[bindOpenAimComponentDelegates](Gameplay.HotWeaponAimComponent.md#bindopenaimcomponentdelegates)**(): `void` <br> 绑定瞄准组件代理|
| **[enableAiming](Gameplay.HotWeaponAimComponent.md#enableaiming)**(`NewAimState`: `boolean`): `void` <br> 打开/关闭瞄准|

## Properties

### onAimEndClient <Score text="onAimEndClient" /> 

• **onAimEndClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端结束瞄准代理

___

### onAimEndServer <Score text="onAimEndServer" /> 

• **onAimEndServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器端结束瞄准代理

___

### onAimStartClient <Score text="onAimStartClient" /> 

• **onAimStartClient**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

客户端开始瞄准代理

___

### onAimStartServer <Score text="onAimStartServer" /> 

• **onAimStartServer**: [`MulticastDelegateInterface`](../interfaces/Type.MulticastDelegateInterface.md)<() => `void`\>

服务器端开始瞄准代理

## Accessors

### aimMode <Score text="aimMode" /> 

• `get` **aimMode**(): [`HotWeaponAimMode`](../enums/Gameplay.HotWeaponAimMode.md) 

Get瞄准时的第一/第三人称模式


#### Returns

[`HotWeaponAimMode`](../enums/Gameplay.HotWeaponAimMode.md)

当前瞄准时的第一/第三人称模式

• `set` **aimMode**(`NewAimMode`): `void` <Badge type="tip" text="other" />

Set瞄准时的第一/第三人称模式

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimMode` | [`HotWeaponAimMode`](../enums/Gameplay.HotWeaponAimMode.md) |  新设置的瞄准模式 default: |


___

### aimingZoom <Score text="aimingZoom" /> 

• `get` **aimingZoom**(): `number` 

Get第一人称瞄准时的瞄准镜放大倍数

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的FOV值每增加1.0，对应FOV增加5°

:::


#### Returns

`number`

当前第一人称瞄准时的瞄准镜放大倍数

• `set` **aimingZoom**(`newAimingZoom`): `void`

Set模拟瞄准时的瞄准镜放大倍数

::: warning Precautions

合法范围为[1.0 , 18.0]，对应[0° , 90°]的 FOV 值每增加1.0，对应FOV增加5°

:::

**`Effect`**

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAimingZoom` | `number` |  新设置的瞄准镜放大倍数 default: |


___

### cameraOffsetDistanceInThirdPersonMode <Score text="cameraOffsetDistanceInThirdPersonMode" /> 

• `get` **cameraOffsetDistanceInThirdPersonMode**(): `number` 

Get第三人称瞄准时的连接相机弹簧组件的长度


#### Returns

`number`

当前连接相机弹簧组件的长度

• `set` **cameraOffsetDistanceInThirdPersonMode**(`NewCameraOffsetDistance`): `void` <Badge type="tip" text="other" />

Set第三人称瞄准时的连接相机弹簧组件的长度

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraOffsetDistance` | `number` |  新设置的连接相机弹簧组件的长度 default: |


___

### defaultCameraSpringArmLength <Score text="defaultCameraSpringArmLength" /> 

• `get` **defaultCameraSpringArmLength**(): `number` 

Get第三人称常态下相机弹簧组件的默认长度


#### Returns

`number`

第三人称常态下相机弹簧组件的默认长度

• `set` **defaultCameraSpringArmLength**(`NewCameraArmLength`): `void` <Badge type="tip" text="other" />

Set第三人称常态下相机弹簧组件的默认长度

::: warning Precautions

相机弹簧组件长度有一个闭区间范围，目的是为了防止相机离Character太近导致穿模，太远则没有必要

:::

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewCameraArmLength` | `number` |  新设置的连接相机弹簧组件的默认长度 default: |


___

### scopeTypeIndex <Score text="scopeTypeIndex" /> 

• `get` **scopeTypeIndex**(): [`HotWeaponCrossHairType`](../enums/Gameplay.HotWeaponCrossHairType.md) 

Get模拟瞄准镜UI种类


#### Returns

[`HotWeaponCrossHairType`](../enums/Gameplay.HotWeaponCrossHairType.md)

当前瞄准镜UI种类

• `set` **scopeTypeIndex**(`NewScopeTypeIndex`): `void` <Badge type="tip" text="other" />

Set模拟瞄准镜UI种类

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewScopeTypeIndex` | [`HotWeaponCrossHairType`](../enums/Gameplay.HotWeaponCrossHairType.md) |  新的瞄准镜UI种类 default: |


## Methods

### bindOpenAimComponentDelegates <Score text="bindOpenAimComponentDelegates" /> 

• **bindOpenAimComponentDelegates**(): `void` 

绑定瞄准组件代理



___

### enableAiming <Score text="enableAiming" /> 

• **enableAiming**(`NewAimState`): `void` <Badge type="tip" text="other" />

打开/关闭瞄准
- 切换持枪姿态
- 切换相机View
- 切换准星UI
- 修改子弹发射精度-上升到用户层，开发者自己在瞄准时设置默认精准度

调用端自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NewAimState` | `boolean` |  是否开启瞄准功能 default: |

