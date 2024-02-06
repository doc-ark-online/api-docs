[场景](../groups/场景.场景.md) / SoundService

# SoundService <Badge type="tip" text="Class" /> <Score text="SoundService" />

音效管理器

## Table of contents

### Properties <Score text="Properties" /> 
| **[onPlaySoundComplete](mw.SoundService.md#onplaysoundcomplete)**: [`Action1`](mw.Action1.md)<`string`  `number`\>  |
| :-----|
| 播放声音完成的委托(2D声音是string代表assetId, 3D声音是playId代表播放id)|

### Accessors <Score text="Accessors" /> 
| **[BGMVolumeScale](mw.SoundService.md#bgmvolumescale)**(): `number` <Badge type="tip" text="client" />  |
| :-----|
| BGM音量|
| **[volumeScale](mw.SoundService.md#volumescale)**(): `number` <Badge type="tip" text="client" />  |
| 音效的音量|

### Methods <Score text="Methods" /> 
| **[get3DSoundById](mw.SoundService.md#get3dsoundbyid)**(`playId`: `number`): `Promise`<[`Sound`](mw.Sound.md)\> <Badge type="tip" text="client" />  |
| :-----|
| 根据播放id获取一个3DSound|
| **[play3DSound](mw.SoundService.md#play3dsound)**(`assetId`: `string`, `target`: `string`  [`GameObject`](mw.GameObject.md)  [`Vector`](mw.Vector.md), `loopCount?`: `number`, `volume?`: `number`, `params?`: `Object`): `number` <Badge type="tip" text="other" />  |
| 在目标播放3D音效|
| **[playBGM](mw.SoundService.md#playbgm)**(`assetId`: `string`, `volume?`: `number`): `void` <Badge type="tip" text="other" />  |
| 播放背景音乐|
| **[playSound](mw.SoundService.md#playsound)**(`assetId`: `string`, `loopCount?`: `number`, `volume?`: `number`): `string` <Badge type="tip" text="other" />  |
| 根据资源Id播放声音|
| **[stop3DSound](mw.SoundService.md#stop3dsound)**(`playId`: `number`): `void` <Badge type="tip" text="other" />  |
| 停止3D声音|
| **[stopAll3DSound](mw.SoundService.md#stopall3dsound)**(): `void` <Badge type="tip" text="other" />  |
| 停止一切3D声音|
| **[stopAllSound](mw.SoundService.md#stopallsound)**(): `void` <Badge type="tip" text="other" />  |
| 停止除BGM以外的一切2D声音|
| **[stopBGM](mw.SoundService.md#stopbgm)**(): `void` <Badge type="tip" text="other" />  |
| 停止背景音乐|
| **[stopSound](mw.SoundService.md#stopsound)**(`assetId`: `string`): `void` <Badge type="tip" text="other" />  |
| 根据资源Id停止声音|

## Properties

### onPlaySoundComplete <Score text="onPlaySoundComplete" /> 

▪ `Static` `Readonly` **onPlaySoundComplete**: [`Action1`](mw.Action1.md)<`string`  `number`\>

播放声音完成的委托(2D声音是string代表assetId, 3D声音是playId代表播放id)

<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会播放一个爆炸音效，播放完成后玩家头顶会生成一个火焰特效
</span>

```ts
@Component
export default class SoundExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const player = await Player.asyncGetLocalPlayer();
        const boomSoundAssetId = "13896";
        //在玩家当前坐标处播放爆炸音效
        const playId = SoundService.play3DSound(boomSoundAssetId, player.character.worldLocation);
        //音效播放完成回调
        SoundService.onPlaySoundComplete.add((resId) => {
            if (resId == playId) {
                //打印声音播放完成
                console.log("Play sound complete.")
            }
        });
    }
}
```

## Accessors

### BGMVolumeScale <Score text="BGMVolumeScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **BGMVolumeScale**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **BGMVolumeScale**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


BGM音量

::: warning Precautions

取值范围0-1

:::

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


BGM音量

::: warning Precautions

取值范围0-1

:::

#### Parameters

| `value` | `number` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### volumeScale <Score text="volumeScale" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **volumeScale**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **volumeScale**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


音效的音量

::: warning Precautions

取值范围0-1

:::

#### Returns

| `number` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


音效的音量

::: warning Precautions

取值范围0-1

:::

#### Parameters

| `value` | `number` |
| :------ | :------ |

</td>
</tr></tbody>
</table>



## Methods

### get3DSoundById <Score text="get" /> 

• `Static` **get3DSoundById**(`playId`): `Promise`<[`Sound`](mw.Sound.md)\> <Badge type="tip" text="client" />

根据播放id获取一个3DSound

#### Parameters

| `playId` `number` |  播放id |
| :------ | :------ |

#### Returns

| `Promise`<[`Sound`](mw.Sound.md)\> | Sound对象的gameObject |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在0点坐标处创建一个方块，并在该位置播放一个3D音效，按下F键该音效会移动到玩家坐标处
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const player = await mw.asyncGetLocalPlayer();
        const bgmSoundAssetId = "12721";
        const cubeId = "197386";
        mw.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new mw.Vector(0, 0, 0);
        })
        let playId = SoundService.play3DSound(bgmSoundAssetId, new mw.Vector(0, 0, 0), 0);
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.get3DSoundById(playId).then(obj => {
                obj.worldLocation = player.character.worldLocation;
            })
        })
    }

}
```

___

### play3DSound <Score text="play" /> 

• `Static` **play3DSound**(`assetId`, `target`, `loopCount?`, `volume?`, `params?`): `number` <Badge type="tip" text="other" />

在目标播放3D音效

#### Parameters

| `assetId` `string` |  资源Id |
| :------ | :------ |
| `target` `string`  [`GameObject`](mw.GameObject.md)  [`Vector`](mw.Vector.md) |  播放目标 (GameObject的GUID  GameObject  世界坐标) |
| `loopCount?` `number` |  循环次数 default: 1 |
| `volume?` `number` |  音量 default: 1 |
| `params?` `Object` |  播放参数: `{ radius: 内部半径(default 200), falloffDistance: 衰减距离,不包含内部半径(default 600) }` default: undefined |
| `params.falloffDistance?` `number` | - |
| `params.radius?` `number` | - |

#### Returns

| `number` | 播放ID，播放声音的唯一标识，可用于停止声音 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const bgmSoundAssetId = "12721";
        const cubeId = "197386";
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

___

### playBGM <Score text="playBGM" /> 

• `Static` **playBGM**(`assetId`, `volume?`): `void` <Badge type="tip" text="other" />

播放背景音乐

#### Parameters

| `assetId` `string` |  资源Id |
| :------ | :------ |
| `volume?` `number` |  音量 default: 1 |


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会播放一个背景音乐
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const bgmSoundAssetId = "12721";
        SoundService.playBGM(bgmSoundAssetId, 1);
    }

}
```

___

### playSound <Score text="playSound" /> 

• `Static` **playSound**(`assetId`, `loopCount?`, `volume?`): `string` <Badge type="tip" text="other" />

根据资源Id播放声音

#### Parameters

| `assetId` `string` |  资源id |
| :------ | :------ |
| `loopCount?` `number` |  循环次数(0无限) default: 1 |
| `volume?` `number` |  音量 default: 1 |

#### Returns

| `string` | 资源id |
| :------ | :------ |

::: warning Precautions

不可叠加

:::

<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const player = await mw.asyncGetLocalPlayer();
        const boomSoundAssetId = "13896";
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.playSound(boomSoundAssetId);
        })
    }

}
```

___

### stop3DSound <Score text="stop" /> 

• `Static` **stop3DSound**(`playId`): `void` <Badge type="tip" text="other" />

停止3D声音

#### Parameters

| `playId` `number` |  播放声音的唯一标识 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const bgmSoundAssetId = "12721";
        const cubeId = "197386";
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

___

### stopAll3DSound <Score text="stopAll" /> 

• `Static` **stopAll3DSound**(): `void` <Badge type="tip" text="other" />

停止一切3D声音


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会生成10个方块，每个方块播放一个3D音效，10秒后会自动停止所有3D音效
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const bgmSoundAssetId = "12721";
        const cubeId = "197386";
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


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放两个2D音效，再次按下F键会停止所有音效
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const player = await mw.asyncGetLocalPlayer();
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


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个背景音乐,再次按下F键会停止背景音乐
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
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

#### Parameters

| `assetId` `string` |  资源Id |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效，再次按下F键会停止播放
</span>

```ts
@Component
export default class SoundExample extends mw.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        const player = await mw.asyncGetLocalPlayer();
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
