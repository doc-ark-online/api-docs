[Service](../modules/Service.Service.md) / SoundService

# SoundService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

音效管理器

**`Precautions`**

单例类，请使用 getInstance 获取对象

## Table of contents

| Properties                                                                                                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[onPlaySoundComplete](Service.Service.SoundService.md#onplaysoundcomplete)**: [`Action1`](Type.Type.Action1.md)<`string` \| `number`\> <br> 播放声音完成的委托(2D 声音是 string 代表 resId, 3D 声音是 playId 代表播放 id) |

| Accessors                                                                                      |
| :--------------------------------------------------------------------------------------------- |
| **[BGMVolumeScale](Service.Service.SoundService.md#bgmvolumescale)**(): `number` <br> BGM 音量 |
| **[volumeScale](Service.Service.SoundService.md#volumescale)**(): `number` <br> 音效的音量     |

| Methods                                                                                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[clearAll](Service.Service.SoundService.md#clearall)**(): `void` <br> 停止所有音效和 BGM，并释放所有音效和 BGM 资源                                                         |
| **[get3DSoundGameObject](Service.Service.SoundService.md#get3dsoundgameobject)**(`number`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\> <br> 根据播放 id 获取一个 Sound |
| **[play3DSound](Service.Service.SoundService.md#play3dsound)**(`string`, `string` \, `number`, `number`, `any`): `number` <br> 在目标播放 3D 音效                             |
| **[playBGM](Service.Service.SoundService.md#playbgm)**(`string`, `number`): `void` <br> 播放背景音乐                                                                          |
| **[playSound](Service.Service.SoundService.md#playsound)**(`string`, `number`, `number`): `string` <br> 根据资源 Id 播放声音                                                  |
| **[stop3DSound](Service.Service.SoundService.md#stop3dsound)**(`number`): `void` <br> 停止 3D 声音                                                                            |
| **[stopAll3DSound](Service.Service.SoundService.md#stopall3dsound)**(): `void` <br> 停止一切 3D 声音                                                                          |
| **[stopAllSound](Service.Service.SoundService.md#stopallsound)**(): `void` <br> 停止除 BGM 以外的一切 2D 声音                                                                 |
| **[stopBGM](Service.Service.SoundService.md#stopbgm)**(): `void` <br> 停止背景音乐                                                                                            |
| **[stopSound](Service.Service.SoundService.md#stopsound)**(`string`): `void` <br> 根据资源 Id 停止声音                                                                        |
| **[getInstance](Service.Service.SoundService.md#getinstance)**(): [`SoundService`](Service.Service.SoundService.md) <br> 获取音效管理器全局实例                               |

## Properties

### onPlaySoundComplete

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Type.Action1.md)<`string` \| `number`\>

**`Description`**

播放声音完成的委托(2D 声音是 string 代表 resId, 3D 声音是 playId 代表播放 id)

## Accessors

### BGMVolumeScale

• `get` **BGMVolumeScale**(): `number`

**`Description`**

BGM 音量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

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

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有音效和 BGM，并释放所有音效和 BGM 资源

**`Effect`**

调用端生效

#### Returns

`void`

---

### get3DSoundGameObject

▸ **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

**`Description`**

根据播放 id 获取一个 Sound

**`Effect`**

客户端生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `playId` | `number` | 播放 id     |

#### Returns

`Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

Sound 对象的 gameObject

---

### play3DSound

▸ **play3DSound**(`resId`, `target`, `loopNum?`, `volume?`, `playParam?`): `number`

**`Description`**

在目标播放 3D 音效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name         | Type                                                        | Description                                             |
| :----------- | :---------------------------------------------------------- | :------------------------------------------------------ |
| `resId`      | `string`                                                    | 资源 Id                                                 |
| `target`     | `string` \| `GameObject` \| [`Vector`](Type.Type.Vector.md) | 播放目标 (GameObject 的 guid \| GameObject \| 世界坐标) |
| `loopNum?`   | `number`                                                    | 循环次数 default: 1                                     |
| `volume?`    | `number`                                                    | 音量 default: 1                                         |
| `playParam?` | `any`                                                       | 播放参数: {radius:半径} default: {}                     |

#### Returns

`number`

播放 ID，播放声音的唯一标识，可用于停止声音

---

### playBGM

▸ **playBGM**(`resId`, `volume?`): `void`

**`Description`**

播放背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name      | Type     | Description     |
| :-------- | :------- | :-------------- |
| `resId`   | `string` | 资源 Id         |
| `volume?` | `number` | 音量 default: 1 |

#### Returns

`void`

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

| Name       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `resId`    | `string` | 资源 Id                     |
| `loopNum?` | `number` | 循环次数(0 无限) default: 1 |
| `volume?`  | `number` | 音量 default: 1             |

#### Returns

`string`

资源 ID

---

### stop3DSound

▸ **stop3DSound**(`playId`): `void`

**`Description`**

停止 3D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name     | Type     | Description        |
| :------- | :------- | :----------------- |
| `playId` | `number` | 播放声音的唯一标识 |

#### Returns

`void`

---

### stopAll3DSound

▸ **stopAll3DSound**(): `void`

**`Description`**

停止一切 3D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

---

### stopAllSound

▸ **stopAllSound**(): `void`

**`Description`**

停止除 BGM 以外的一切 2D 声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

---

### stopBGM

▸ **stopBGM**(): `void`

**`Description`**

停止背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

---

### stopSound

▸ **stopSound**(`resId`): `void`

**`Description`**

根据资源 Id 停止声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `resId` | `string` | 资源 Id     |

#### Returns

`void`

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
