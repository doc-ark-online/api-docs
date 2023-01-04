[Gameplay](../modules/Gameplay.Gameplay.md) / VehicleCameraSetting

# VehicleCameraSetting <Badge type="tip" text="Class" />

**`Description`**

载具摄像机

## Hierarchy

- [`GameObject`](Gameplay.GameObject.md)

  ↳ **`VehicleCameraSetting`**

## Table of contents

| Accessors |
| :-----|

| Methods |
| :-----|
| **[applyClientSettings](Gameplay.VehicleCameraSetting.md#applyclientsettings)**([`CameraSystem`](Gameplay.CameraSystem.md)): `void` <br> 应用面板的摄像机配置数据|
| **[getSettings](Gameplay.VehicleCameraSetting.md#getsettings)**(): [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata) <br> 获取存储的摄像机配置数据|
| **[saveSettings](Gameplay.VehicleCameraSetting.md#savesettings)**(): `void` <br> 存储面板的摄像机配置数据|

## Accessors

## Methods

### applyClientSettings

▸ **applyClientSettings**(`cameraSystem`): `void`

**`Description`**

应用面板的摄像机配置数据

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraSystem` | [`CameraSystem`](Gameplay.CameraSystem.md) | 摄像机系统对象 |

#### Returns

`void`


### getSettings

▸ **getSettings**(): [`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)

**`Description`**

获取存储的摄像机配置数据

**`Effect`**

只在客户端调用生效

#### Returns

[`CameraSystemData`](../modules/Gameplay.Gameplay.md#camerasystemdata)

摄像机配置数据


### saveSettings

▸ **saveSettings**(): `void`

**`Description`**

存储面板的摄像机配置数据

**`Effect`**

只在客户端调用生效

#### Returns

`void`
