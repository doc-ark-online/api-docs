[Service](../modules/Service.Service.md) / SoundService

# SoundService <Badge type="tip" text="Class" /> <Score text="SoundService" />

**`Instance`**

音效管理器

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onPlaySoundComplete](Service.SoundService.md#onplaysoundcomplete)**: [`Action1`](Type.Action1.md)<`string` \| `number`\> <br> 播放声音完成的委托(2D声音是string代表resId, 3D声音是playId代表播放id)|

| Accessors |
| :-----|
| **[BGMVolumeScale](Service.SoundService.md#bgmvolumescale)**(): `number` <br> BGM音量|
| **[volumeScale](Service.SoundService.md#volumescale)**(): `number` <br> 音效的音量|

| Methods |
| :-----|
| **[clearAll](Service.SoundService.md#clearall)**(): `void` <br> 停止所有音效和BGM，并释放所有音效和BGM资源|
| **[get3DSoundGameObject](Service.SoundService.md#get3dsoundgameobject)**(`number`): `Promise`<[`Sound`](Gameplay.Sound.md)\> <br> 根据播放id获取一个Sound|
| **[play3DSound](Service.SoundService.md#play3dsound)**(`string`, `string` \, `number`, `number`, `any`): `number` <br> 在目标播放3D音效|
| **[playBGM](Service.SoundService.md#playbgm)**(`string`, `number`): `void` <br> 播放背景音乐|
| **[playSound](Service.SoundService.md#playsound)**(`string`, `number`, `number`): `string` <br> 根据资源Id播放声音|
| **[stop3DSound](Service.SoundService.md#stop3dsound)**(`number`): `void` <br> 停止3D声音|
| **[stopAll3DSound](Service.SoundService.md#stopall3dsound)**(): `void` <br> 停止一切3D声音|
| **[stopAllSound](Service.SoundService.md#stopallsound)**(): `void` <br> 停止除BGM以外的一切2D声音|
| **[stopBGM](Service.SoundService.md#stopbgm)**(): `void` <br> 停止背景音乐|
| **[stopSound](Service.SoundService.md#stopsound)**(`string`): `void` <br> 根据资源Id停止声音|
| **[getInstance](Service.SoundService.md#getinstance)**(): [`SoundService`](Service.SoundService.md) <br> 获取音效管理器全局实例|

## Properties

### onPlaySoundComplete <Score text="onPlaySoundComplete" /> 

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Action1.md)<`string` \| `number`\> <Badge type="tip" text="other" /> <Badge type="tip" text="other" />

播放声音完成的委托(2D声音是string代表resId, 3D声音是playId代表播放id)

## Accessors

### BGMVolumeScale <Score text="BGMVolumeScale" /> 

• `get` **BGMVolumeScale**(): `number`

BGM音量


#### Returns

`number`

• `set` **BGMVolumeScale**(`value`): `void`

BGM音量


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### volumeScale <Score text="volumeScale" /> 

• `get` **volumeScale**(): `number` <Badge type="tip" text="other" />

音效的音量

::: warning Precautions

取值范围0-1

:::


#### Returns

`number`

• `set` **volumeScale**(`value`): `void` <Badge type="tip" text="other" />

音效的音量

::: warning Precautions

取值范围0-1

:::


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


## Methods

### clearAll <Score text="clearAll" /> 

• **clearAll**(): `void` <Badge type="tip" text="other" />

停止所有音效和BGM，并释放所有音效和BGM资源



___

### get3DSoundGameObject <Score text="get" /> 

• **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Sound.md)\> <Badge type="tip" text="other" />

根据播放id获取一个Sound


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放id |

#### Returns

`Promise`<[`Sound`](Gameplay.Sound.md)\>

Sound对象的gameObject

___

### play3DSound <Score text="play" /> 

• **play3DSound**(`resId`, `target`, `loopNum?`, `volume?`, `playParam?`): `number` <Badge type="tip" text="other" />

在目标播放3D音效

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  资源Id |
| `target` | `string` \| `GameObject` \| [`Vector`](Type.Vector.md) |  播放目标 (GameObject的GUID \| GameObject \| 世界坐标) |
| `loopNum?` | `number` |  循环次数 default: 1 |
| `volume?` | `number` |  音量 default: 1 |
| `playParam?` | `any` |  播放参数: `{ innerRadius: 内部半径(默认值200), maxDistance: 衰减距离,不包含内部半径(默认值600) }` default: `{}` |

#### Returns

`number`

播放ID，播放声音的唯一标识，可用于停止声音

___

### playBGM <Score text="playBGM" /> 

• **playBGM**(`resId`, `volume?`): `void` <Badge type="tip" text="other" />

播放背景音乐

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  资源Id |
| `volume?` | `number` |  音量 default: 1 |


___

### playSound <Score text="playSound" /> 

• **playSound**(`resId`, `loopNum?`, `volume?`): `string` <Badge type="tip" text="other" />

根据资源Id播放声音

调用端生效|服务端调用自动广播

::: warning Precautions

不可叠加

:::

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

### stop3DSound <Score text="stop" /> 

• **stop3DSound**(`playId`): `void` <Badge type="tip" text="other" />

停止3D声音

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放声音的唯一标识 |


___

### stopAll3DSound <Score text="stopAll" /> 

• **stopAll3DSound**(): `void` <Badge type="tip" text="other" />

停止一切3D声音

调用端生效|服务端调用自动广播


___

### stopAllSound <Score text="stopAllSound" /> 

• **stopAllSound**(): `void` <Badge type="tip" text="other" />

停止除BGM以外的一切2D声音

调用端生效|服务端调用自动广播


___

### stopBGM <Score text="stopBGM" /> 

• **stopBGM**(): `void` <Badge type="tip" text="other" />

停止背景音乐

调用端生效|服务端调用自动广播


___

### stopSound <Score text="stopSound" /> 

• **stopSound**(`resId`): `void` <Badge type="tip" text="other" />

根据资源Id停止声音

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  资源Id |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`SoundService`](Service.SoundService.md) <Badge type="tip" text="other" />

获取音效管理器全局实例


#### Returns

[`SoundService`](Service.SoundService.md)

音效管理器全局实例
