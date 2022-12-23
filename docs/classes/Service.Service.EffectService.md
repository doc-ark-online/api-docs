[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / EffectService

# Class: EffectService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).EffectService

**`Instance`**

**`Author`**

huipeng.jia & shilong.wang

**`Description`**

特效管理器

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.EffectService.md#constructor)

### Methods

- [clearAll](Service.Service.EffectService.md#clearall)
- [init](Service.Service.EffectService.md#init)
- [playEffectAtLocation](Service.Service.EffectService.md#playeffectatlocation)
- [playEffectOnGameObject](Service.Service.EffectService.md#playeffectongameobject)
- [playEffectOnPlayer](Service.Service.EffectService.md#playeffectonplayer)
- [stopAllEffect](Service.Service.EffectService.md#stopalleffect)
- [stopEffect](Service.Service.EffectService.md#stopeffect)
- [stopEffectFromHost](Service.Service.EffectService.md#stopeffectfromhost)
- [getInstance](Service.Service.EffectService.md#getinstance)

## Constructors

### constructor

• `Private` **new EffectService**()

#### Defined in

Service/index.d.ts:763

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有特效，并释放所有特效资源

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:774

___

### init

▸ **init**(): `void`

**`Description`**

初始化

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:779

___

### playEffectAtLocation

▸ **playEffectAtLocation**(`resId`, `location`, `loop?`, `rotation?`, `scale?`): `number`

**`Description`**

在指定位置播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 特效资源Id |
| `location` | [`Vector`](Type.Type.Vector.md) | usage: 世界坐标 |
| `loop?` | `number` | usage: 循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) | usage: 旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) | usage: 缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

#### Defined in

Service/index.d.ts:830

___

### playEffectOnGameObject

▸ **playEffectOnGameObject**(`resId`, `target`, `loop?`, `offset?`, `rotation?`, `scale?`): `number`

**`Description`**

在一个GameObject上播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 特效资源Id |
| `target` | [`GameObject`](Core.Core.GameObject.md) | usage: 目标GameObject \| 目标GameObject的guid |
| `loop?` | `number` | usage: 循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Type.Vector.md) | usage: 坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) | usage: 旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) | usage: 缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

#### Defined in

Service/index.d.ts:812

___

### playEffectOnPlayer

▸ **playEffectOnPlayer**(`resId`, `target`, `socketType`, `loop?`, `offset?`, `rotation?`, `scale?`): `number`

**`Description`**

在一个角色的挂点上播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 特效资源Id |
| `target` | [`Player`](Gameplay.Gameplay.Player.md) \| [`Humanoid`](Gameplay.Gameplay.Humanoid.md) | usage: 玩家\|npc |
| `socketType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) | usage: 挂点类型 |
| `loop?` | `number` | usage: 循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Type.Vector.md) | usage: 坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) | usage: 旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) | usage: 缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

#### Defined in

Service/index.d.ts:792

___

### stopAllEffect

▸ **stopAllEffect**(): `void`

**`Description`**

停止所有特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:857

___

### stopEffect

▸ **stopEffect**(`playId`): `void`

**`Description`**

停止一个特效的播放

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` | usage: 播放的唯一标识 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:852

___

### stopEffectFromHost

▸ **stopEffectFromHost**(`resId`, `target?`): `void`

**`Description`**

停止目标对象上所有资源Id的特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 特效资源Id |
| `target?` | [`GameObject`](Core.Core.GameObject.md) \| [`Player`](Gameplay.Gameplay.Player.md) \| [`Humanoid`](Gameplay.Gameplay.Humanoid.md) | usage: 目标对象(Player或者GameObject) default: undefined |

#### Returns

`void`

#### Defined in

Service/index.d.ts:843

___

### getInstance

▸ `Static` **getInstance**(): [`EffectService`](Service.Service.EffectService.md)

**`Description`**

获取特效管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`EffectService`](Service.Service.EffectService.md)

特效管理器全局实例

#### Defined in

Service/index.d.ts:769
