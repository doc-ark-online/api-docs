[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / SoundService

# Class: SoundService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).SoundService

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

音效管理器

**`Precautions`**

单例类，请使用getInstance获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.SoundService.md#constructor)

### Properties

- [onPlaySoundComplete](Service.Service.SoundService.md#onplaysoundcomplete)

### Accessors

- [bgmVolumeScale](Service.Service.SoundService.md#bgmvolumescale)
- [volumeScale](Service.Service.SoundService.md#volumescale)

### Methods

- [clearAll](Service.Service.SoundService.md#clearall)
- [get3DSoundGameObject](Service.Service.SoundService.md#get3dsoundgameobject)
- [init](Service.Service.SoundService.md#init)
- [play3DSound](Service.Service.SoundService.md#play3dsound)
- [playBGM](Service.Service.SoundService.md#playbgm)
- [playSound](Service.Service.SoundService.md#playsound)
- [stop3DSound](Service.Service.SoundService.md#stop3dsound)
- [stopAll3DSound](Service.Service.SoundService.md#stopall3dsound)
- [stopAllSound](Service.Service.SoundService.md#stopallsound)
- [stopBGM](Service.Service.SoundService.md#stopbgm)
- [stopSound](Service.Service.SoundService.md#stopsound)
- [getInstance](Service.Service.SoundService.md#getinstance)

## Constructors

### constructor

• **new SoundService**()

## Properties

### onPlaySoundComplete

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Type.FunctionType.Action1.md)<`string` \| `number`\>

**`Description`**

播放声音完成的委托(2D声音是string代表resId, 3D声音是playId代表播放id)

#### Defined in

Service/index.d.ts:1107

## Accessors

### bgmVolumeScale

• `get` **bgmVolumeScale**(): `number`

**`Description`**

BGM音量

**`Precautions`**

只在客户端调用生效

#### Returns

`number`

#### Defined in

Service/index.d.ts:1205

• `set` **bgmVolumeScale**(`value`): `void`

**`Description`**

BGM音量

**`Precautions`**

只在客户端调用生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1200

___

### volumeScale

• `get` **volumeScale**(): `number`

**`Description`**

音效的音量

**`Precautions`**

只在客户端调用生效

#### Returns

`number`

#### Defined in

Service/index.d.ts:1195

• `set` **volumeScale**(`value`): `void`

**`Description`**

音效的音量

**`Precautions`**

只在客户端调用生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1190

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有音效和BGM，并释放所有音效和BGM资源

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:1112

___

### get3DSoundGameObject

▸ **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

**`Description`**

根据播放id获取一个Sound

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` | usage: 播放id |

#### Returns

`Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

Sound对象的gameObject

#### Defined in

Service/index.d.ts:1180

___

### init

▸ **init**(): `void`

**`Description`**

初始化

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:1117

___

### play3DSound

▸ **play3DSound**(`resId`, `target`, `loopNum?`, `volume?`, `playParam?`): `number`

**`Description`**

在目标播放3D音效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 资源Id |
| `target` | `string` \| [`GameObject`](Core.Core.GameObject.md) \| [`Vector`](Type.Type.Vector.md) | usage: 播放目标 (GameObject的guid \| GameObject \| 世界坐标) |
| `loopNum?` | `number` | usage: 循环次数 default: 1 |
| `volume?` | `number` | usage: 音量 default: 1 |
| `playParam?` | `any` | usage: 播放参数: {radius:半径} default: {} |

#### Returns

`number`

播放ID，播放声音的唯一标识，可用于停止声音

#### Defined in

Service/index.d.ts:1161

___

### playBGM

▸ **playBGM**(`resId`, `volume?`): `void`

**`Description`**

播放背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 资源Id |
| `volume?` | `number` | usage: 音量 default: 1 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1145

___

### playSound

▸ **playSound**(`resId`, `loopNum?`, `volume?`): `string`

**`Description`**

根据资源Id播放声音

**`Effect`**

调用端生效|服务端调用自动广播

**`Precautions`**

不可叠加

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 资源Id |
| `loopNum?` | `number` | usage: 循环次数(0无限) default: 1 |
| `volume?` | `number` | usage: 音量 default: 1 |

#### Returns

`string`

资源ID

#### Defined in

Service/index.d.ts:1127

___

### stop3DSound

▸ **stop3DSound**(`playId`): `void`

**`Description`**

停止3D声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` | usage: 播放声音的唯一标识 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1173

___

### stopAll3DSound

▸ **stopAll3DSound**(): `void`

**`Description`**

停止一切3D声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1185

___

### stopAllSound

▸ **stopAllSound**(): `void`

**`Description`**

停止除BGM以外的一切2D声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1138

___

### stopBGM

▸ **stopBGM**(): `void`

**`Description`**

停止背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1150

___

### stopSound

▸ **stopSound**(`resId`): `void`

**`Description`**

根据资源Id停止声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` | usage: 资源Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1133

___

### getInstance

▸ `Static` **getInstance**(): [`SoundService`](Service.Service.SoundService.md)

**`Description`**

获取音效管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`SoundService`](Service.Service.SoundService.md)

音效管理器全局实例

#### Defined in

Service/index.d.ts:1103
