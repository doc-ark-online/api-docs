[SOUND](../groups/Core.SOUND.md) / SoundService

# SoundService <Badge type="tip" text="Class" /> <Score text="SoundService" />

**`Instance`**

音效管理器

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|

| Accessors |
| :-----|
| **[BGMVolumeScale](mw.SoundService.md#bgmvolumescale)**(): `number` <br> BGM音量|
| **[BGMVolumeScale](mw.SoundService.md#bgmvolumescale-1)**(): `number` <br> BGM音量|
| **[volumeScale](mw.SoundService.md#volumescale-1)**(): `number` <br> 音效的音量|

| Methods |
| :-----|
| **[get3DSound](mw.SoundService.md#get3dsound)**(`playId`: `number`): `Promise`<[`Sound`](mw.Sound.md)\> <br> 根据播放id获取一个3DSound|
| **[play3DSound](mw.SoundService.md#play3dsound-1)**(`assetId`: `string`, `target`: `string` \, `loopCount?`: `number`, `volume?`: `number`, `params?`: `Object`): `number` <br> 在目标播放3D音效|
| **[playBGM](mw.SoundService.md#playbgm-1)**(`assetId`: `string`, `volume?`: `number`): `void` <br> 播放背景音乐|
| **[playSound](mw.SoundService.md#playsound-1)**(`assetId`: `string`, `loopCount?`: `number`, `volume?`: `number`): `string` <br> 根据资源Id播放声音|
| **[stop3DSound](mw.SoundService.md#stop3dsound-1)**(`playId`: `number`): `void` <br> 停止3D声音|
| **[stopAll3DSound](mw.SoundService.md#stopall3dsound-1)**(): `void` <br> 停止一切3D声音|
| **[stopAllSound](mw.SoundService.md#stopallsound-1)**(): `void` <br> 停止除BGM以外的一切2D声音|
| **[stopBGM](mw.SoundService.md#stopbgm-1)**(): `void` <br> 停止背景音乐|
| **[stopSound](mw.SoundService.md#stopsound-1)**(`assetId`: `string`): `void` <br> 根据资源Id停止声音|

## Properties

### BGMVolumeScale <Score text="BGMVolumeScale" /> 

• `Static` `get` **BGMVolumeScale**(): `number` <Badge type="tip" text="client" />

BGM音量

::: warning Precautions

取值范围0-1

:::


#### Returns

`number`

• `Static` `set` **BGMVolumeScale**(`value`): `void`

BGM音量

::: warning Precautions

取值范围0-1

:::

**`Effect`**


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### volumeScale <Score text="volumeScale" /> 

• `Static` `get` **volumeScale**(): `number` <Badge type="tip" text="client" />

音效的音量

::: warning Precautions

取值范围0-1

:::


#### Returns

`number`

• `Static` `set` **volumeScale**(`value`): `void`

音效的音量

::: warning Precautions

取值范围0-1

:::

**`Effect`**


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


## Methods

### get3DSound <Score text="get" /> 

• `Static` **get3DSound**(`playId`): `Promise`<[`Sound`](mw.Sound.md)\> <Badge type="tip" text="client" />

根据播放id获取一个3DSound


使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会在0点坐标处创建一个方块，并在该位置播放一个3D音效，按下F键该音效会移动到玩家坐标处
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await mw.asyncGetCurrentPlayer();
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        mw.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new mw.Vector(0, 0, 0);
        })
        let playId = SoundService.play3DSound(bgmSoundAssetId, new mw.Vector(0, 0, 0), 0);
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.get3DSound(playId).then(obj => {
                obj.worldLocation = player.character.worldLocation;
            })
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放id |

#### Returns

`Promise`<[`Sound`](mw.Sound.md)\>

Sound对象的gameObject

___

### play3DSound <Score text="play" /> 

• `Static` **play3DSound**(`assetId`, `target`, `loopCount?`, `volume?`, `params?`): `number` <Badge type="tip" text="other" />

在目标播放3D音效

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        mw.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new mw.Vector(0, 0, 0);
        })
        let isPlay = false;
        let playId = 0;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.stop3DSound(playId);
            } else {
                playId = SoundService.play3DSound(bgmSoundAssetId, new mw.Vector(0, 0, 0), 0);
            }
            isPlay = !isPlay;
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源Id |
| `target` | `string` \| [`GameObject`](mw.GameObject.md) \| [`Vector`](mw.Vector.md) |  播放目标 (GameObject的GUID \| GameObject \| 世界坐标) |
| `loopCount?` | `number` |  循环次数 default: 1 |
| `volume?` | `number` |  音量 default: 1 |
| `params?` | `Object` |  播放参数: `{ radius: 内部半径(default 200), falloffDistance: 衰减距离,不包含内部半径(default 600) }` default: undefined |
| `params.falloffDistance?` | `number` | - |
| `params.radius?` | `number` | - |

#### Returns

`number`

播放ID，播放声音的唯一标识，可用于停止声音

___

### playBGM <Score text="playBGM" /> 

• `Static` **playBGM**(`assetId`, `volume?`): `void` <Badge type="tip" text="other" />

播放背景音乐

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会播放一个背景音乐
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        SoundService.playBGM(bgmSoundAssetId, 1);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源Id |
| `volume?` | `number` |  音量 default: 1 |


___

### playSound <Score text="playSound" /> 

• `Static` **playSound**(`assetId`, `loopCount?`, `volume?`): `string` <Badge type="tip" text="other" />

根据资源Id播放声音

调用端生效|服务端调用自动广播

::: warning Precautions

不可叠加

:::

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await mw.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.playSound(boomSoundAssetId);
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源id |
| `loopCount?` | `number` |  循环次数(0无限) default: 1 |
| `volume?` | `number` |  音量 default: 1 |

#### Returns

`string`

资源id

___

### stop3DSound <Score text="stop" /> 

• `Static` **stop3DSound**(`playId`): `void` <Badge type="tip" text="other" />

停止3D声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        mw.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new mw.Vector(0, 0, 0);
        })
        let isPlay = false;
        let playId = 0;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.stop3DSound(playId);
            } else {
                playId = SoundService.play3DSound(bgmSoundAssetId, new mw.Vector(0, 0, 0), 0);
            }
            isPlay = !isPlay;
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放声音的唯一标识 |


___

### stopAll3DSound <Score text="stopAll" /> 

• `Static` **stopAll3DSound**(): `void` <Badge type="tip" text="other" />

停止一切3D声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会生成10个方块，每个方块播放一个3D音效，10秒后会自动停止所有3D音效
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        for (let i = 0;
i < 10;
i++) {
            mw.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
                obj.worldLocation = new mw.Vector(i * 300, 0, 0);
                SoundService.play3DSound(bgmSoundAssetId, obj, 0);
            })
        }
        setTimeout(() => {
            SoundService.stopAll3DSound();
        }, 10000);
    }

}
```


___

### stopAllSound <Score text="stopAllSound" /> 

• `Static` **stopAllSound**(): `void` <Badge type="tip" text="other" />

停止除BGM以外的一切2D声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会播放两个2D音效，再次按下F键会停止所有音效
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await mw.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        const boomSoundAssetId2 = "20479";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.stopAllSound();
                isPlay = false;
            } else {
                SoundService.playSound(boomSoundAssetId, 0);
                SoundService.playSound(boomSoundAssetId2, 0);
                isPlay = true;
            }
        })
    }

}
```


___

### stopBGM <Score text="stopBGM" /> 

• `Static` **stopBGM**(): `void` <Badge type="tip" text="other" />

停止背景音乐

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会播放一个背景音乐,再次按下F键会停止背景音乐
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.stopBGM();
            } else {
                SoundService.playBGM(bgmSoundAssetId, 1);
            }
            isPlay = !isPlay;
        })
    }

}
```


___

### stopSound <Score text="stopSound" /> 

• `Static` **stopSound**(`assetId`): `void` <Badge type="tip" text="other" />

根据资源Id停止声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效，再次按下F键会停止播放
```ts
@Core.Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await mw.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.stopSound(boomSoundAssetId);
                isPlay = false;
            } else {
                SoundService.playSound(boomSoundAssetId, 0);
                isPlay = true;
            }
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  资源Id |

