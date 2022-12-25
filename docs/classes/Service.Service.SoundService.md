[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / SoundService

# Class: SoundService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).SoundService

**`Author`**

huipeng.jia

**`Instance`**

**`Description`**

音效管理器

**`Precautions`**

单例类，请使用 getInstance 获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.SoundService.md#constructor)

### Properties

- [onPlaySoundComplete](Service.Service.SoundService.md#onplaysoundcomplete)

### Accessors

- [BGMVolumeScale](Service.Service.SoundService.md#bgmvolumescale)
- [volumeScale](Service.Service.SoundService.md#volumescale)

### Methods

- [clearAll](Service.Service.SoundService.md#clearall)
- [get3DSoundGameObject](Service.Service.SoundService.md#get3dsoundgameobject)
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

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Type.Action1.md)<`string` \| `number`\>

**`Description`**

播放声音完成的委托(2D 声音是 string 代表 resId, 3D 声音是 playId 代表播放 id)

#### Defined in

Service/index.d.ts:1121

## Accessors

### BGMVolumeScale

• `get` **BGMVolumeScale**(): `number`

**`Description`**

BGM 音量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

#### Defined in

Service/index.d.ts:1216

• `set` **BGMVolumeScale**(`value`): `void`

**`Description`**

BGM 音量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1211

---

### volumeScale

• `get` **volumeScale**(): `number`

**`Description`**

音效的音量

**`Precautions`**

取值范围 0-1

**`Effect`**

只在客户端调用生效

#### Returns

`number`

#### Defined in

Service/index.d.ts:1206

• `set` **volumeScale**(`value`): `void`

**`Description`**

音效的音量

**`Precautions`**

取值范围 0-1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1200

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有音效和 BGM，并释放所有音效和 BGM 资源

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Service/index.d.ts:1126

---

### get3DSoundGameObject

▸ **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

**`Description`**

根据播放 id 获取一个 Sound

**`Effect`**

客户端生效

#### Parameters

| Name     | Type     | Description    |
| :------- | :------- | :------------- |
| `playId` | `number` | usage: 播放 id |

#### Returns

`Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

Sound 对象的 gameObject

#### Defined in

Service/index.d.ts:1189

---

### play3DSound

▸ **play3DSound**(`resId`, `target`, `loopNum?`, `volume?`, `playParam?`): `number`

**`Description`**

在目标播放 3D 音效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name         | Type                                                        | Description                                                    |
| :----------- | :---------------------------------------------------------- | :------------------------------------------------------------- |
| `resId`      | `string`                                                    | usage: 资源 Id                                                 |
| `target`     | `string` \| `GameObject` \| [`Vector`](Type.Type.Vector.md) | usage: 播放目标 (GameObject 的 guid \| GameObject \| 世界坐标) |
| `loopNum?`   | `number`                                                    | usage: 循环次数 default: 1                                     |
| `volume?`    | `number`                                                    | usage: 音量 default: 1                                         |
| `playParam?` | `any`                                                       | usage: 播放参数: {radius:半径} default: {}                     |

#### Returns

`number`

播放 ID，播放声音的唯一标识，可用于停止声音

#### Defined in

Service/index.d.ts:1170

---

### playBGM

▸ **playBGM**(`resId`, `volume?`): `void`

**`Description`**

播放背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `resId`   | `string` | usage: 资源 Id         |
| `volume?` | `number` | usage: 音量 default: 1 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1154

---

### playSound

▸ **playSound**(`resId`, `loopNum?`, `volume?`): `string`

**`Description`**

根据资源 Id 播放声音

**`Effect`**

调用端生效|服务端调用自动广播

**`Precautions`**

不可叠加

#### Parameters

| Name       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `resId`    | `string` | usage: 资源 Id                     |
| `loopNum?` | `number` | usage: 循环次数(0 无限) default: 1 |
| `volume?`  | `number` | usage: 音量 default: 1             |

#### Returns

`string`

资源 ID

#### Defined in

Service/index.d.ts:1136

---

### stop3DSound

▸ **stop3DSound**(`playId`): `void`

**`Description`**

停止 3D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name     | Type     | Description               |
| :------- | :------- | :------------------------ |
| `playId` | `number` | usage: 播放声音的唯一标识 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1182

---

### stopAll3DSound

▸ **stopAll3DSound**(): `void`

**`Description`**

停止一切 3D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1194

---

### stopAllSound

▸ **stopAllSound**(): `void`

**`Description`**

停止除 BGM 以外的一切 2D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1147

---

### stopBGM

▸ **stopBGM**(): `void`

**`Description`**

停止背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

#### Defined in

Service/index.d.ts:1159

---

### stopSound

▸ **stopSound**(`resId`): `void`

**`Description`**

根据资源 Id 停止声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name    | Type     | Description    |
| :------ | :------- | :------------- |
| `resId` | `string` | usage: 资源 Id |

#### Returns

`void`

#### Defined in

Service/index.d.ts:1142

---

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

Service/index.d.ts:1117
