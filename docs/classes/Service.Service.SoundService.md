[Service](../modules/Service.Service.md) / SoundService

# SoundService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

音效管理器

**`Precautions`**

单例类，请使用getInstance获取对象

## Table of contents

| Properties |
| :-----|
| **[onPlaySoundComplete](Service.Service.SoundService.md#onplaysoundcomplete)**: [`Action1`](Type.Type.Action1.md)<`string` \| `number`\> <br> 播放声音完成的委托(2D声音是string代表resId, 3D声音是playId代表播放id)|

| Accessors |
| :-----|
| **[BGMVolumeScale](Service.Service.SoundService.md#bgmvolumescale)**(): `number` <br> BGM音量|
| **[volumeScale](Service.Service.SoundService.md#volumescale)**(): `number` <br> 音效的音量|

| Methods |
| :-----|
| **[clearAll](Service.Service.SoundService.md#clearall)**(): `void` <br> 停止所有音效和BGM，并释放所有音效和BGM资源|
| **[get3DSoundGameObject](Service.Service.SoundService.md#get3dsoundgameobject)**(`number`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\> <br> 根据播放id获取一个Sound|
| **[play3DSound](Service.Service.SoundService.md#play3dsound)**(`string`, `string` \, `number`, `number`, `any`): `number` <br> 在目标播放3D音效|
| **[playBGM](Service.Service.SoundService.md#playbgm)**(`string`, `number`): `void` <br> 播放背景音乐|
| **[playSound](Service.Service.SoundService.md#playsound)**(`string`, `number`, `number`): `string` <br> 根据资源Id播放声音|
| **[stop3DSound](Service.Service.SoundService.md#stop3dsound)**(`number`): `void` <br> 停止3D声音|
| **[stopAll3DSound](Service.Service.SoundService.md#stopall3dsound)**(): `void` <br> 停止一切3D声音|
| **[stopAllSound](Service.Service.SoundService.md#stopallsound)**(): `void` <br> 停止除BGM以外的一切2D声音|
| **[stopBGM](Service.Service.SoundService.md#stopbgm)**(): `void` <br> 停止背景音乐|
| **[stopSound](Service.Service.SoundService.md#stopsound)**(`string`): `void` <br> 根据资源Id停止声音|
| **[getInstance](Service.Service.SoundService.md#getinstance)**(): [`SoundService`](Service.Service.SoundService.md) <br> 获取音效管理器全局实例|

## Properties

### onPlaySoundComplete

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Type.Action1.md)<`string` \| `number`\>

**`Description`**

播放声音完成的委托(2D声音是string代表resId, 3D声音是playId代表播放id)

## Accessors

### BGMVolumeScale

• `get` **BGMVolumeScale**(): `number`

**`Description`**

BGM音量

**`Effect`**

只在客户端调用生效

#### Returns

`number`

• `set` **BGMVolumeScale**(`value`): `void`

**`Description`**

BGM音量

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### volumeScale

• `get` **volumeScale**(): `number`

**`Description`**

音效的音量

**`Precautions`**

取值范围0-1

**`Effect`**

只在客户端调用生效

#### Returns

`number`

• `set` **volumeScale**(`value`): `void`

**`Description`**

音效的音量

**`Precautions`**

取值范围0-1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有音效和BGM，并释放所有音效和BGM资源

**`Effect`**

调用端生效

#### Returns

`void`

___

### get3DSoundGameObject

▸ **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

**`Description`**

根据播放id获取一个Sound

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放id |

#### Returns

`Promise`<[`Sound`](Gameplay.Gameplay.Sound.md)\>

Sound对象的gameObject

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
| `resId` | `string` |  资源Id |
| `target` | `string` \| `GameObject` \| [`Vector`](Type.Type.Vector.md) |  播放目标 (GameObject的guid \| GameObject \| 世界坐标) |
| `loopNum?` | `number` |  循环次数 default: 1 |
| `volume?` | `number` |  音量 default: 1 |
| `playParam?` | `any` |  播放参数: {radius:半径} default: {} |

#### Returns

`number`

播放ID，播放声音的唯一标识，可用于停止声音

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
| `resId` | `string` |  资源Id |
| `volume?` | `number` |  音量 default: 1 |

#### Returns

`void`

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
| `resId` | `string` |  资源Id |
| `loopNum?` | `number` |  循环次数(0无限) default: 1 |
| `volume?` | `number` |  音量 default: 1 |

#### Returns

`string`

资源ID

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
| `playId` | `number` |  播放声音的唯一标识 |

#### Returns

`void`

___

### stopAll3DSound

▸ **stopAll3DSound**(): `void`

**`Description`**

停止一切3D声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

___

### stopAllSound

▸ **stopAllSound**(): `void`

**`Description`**

停止除BGM以外的一切2D声音

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

___

### stopBGM

▸ **stopBGM**(): `void`

**`Description`**

停止背景音乐

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

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
| `resId` | `string` |  资源Id |

#### Returns

`void`

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
