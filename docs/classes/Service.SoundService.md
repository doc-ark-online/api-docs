[Utility](../groups/Utility.Utility.md) / SoundService

# SoundService <Badge type="tip" text="Class" /> <Score text="SoundService" />

**`Instance`**

音效管理器

::: warning Precautions

单例类，请使用getInstance获取对象

:::

## Table of contents

| Properties |
| :-----|
| **[onPlaySoundComplete](Service.SoundService.md#onplaysoundcomplete)**: [`Action1`](Type.Action1.md)<`string` \| `number`\> <br> 播放声音完成的委托(只支持3D音效，可通过播放id判断是哪个音效播放完成)|

| Accessors |
| :-----|
| **[BGMVolumeScale](Service.SoundService.md#bgmvolumescale)**(): `number` <br> BGM音量|
| **[volumeScale](Service.SoundService.md#volumescale)**(): `number` <br> 音效的音量|

| Methods |
| :-----|
| **[clearAll](Service.SoundService.md#clearall)**(): `void` <br> 停止所有音效和BGM，并释放所有音效和BGM资源|
| **[get3DSoundGameObject](Service.SoundService.md#get3dsoundgameobject)**(`playId`: `number`): `Promise`<[`Sound`](Gameplay.Sound.md)\> <br> 根据播放id获取一个Sound|
| **[play3DSound](Service.SoundService.md#play3dsound)**(`resId`: `string`, `target`: `string` \, `loopNum?`: `number`, `volume?`: `number`, `playParam?`: `any`): `number` <br> 在目标播放3D音效|
| **[playBGM](Service.SoundService.md#playbgm)**(`resId`: `string`, `volume?`: `number`): `void` <br> 播放背景音乐|
| **[playSound](Service.SoundService.md#playsound)**(`resId`: `string`, `loopNum?`: `number`, `volume?`: `number`): `string` <br> 根据资源Id播放声音|
| **[stop3DSound](Service.SoundService.md#stop3dsound)**(`playId`: `number`): `void` <br> 停止3D声音|
| **[stopAll3DSound](Service.SoundService.md#stopall3dsound)**(): `void` <br> 停止一切3D声音|
| **[stopAllSound](Service.SoundService.md#stopallsound)**(): `void` <br> 停止除BGM以外的一切2D声音|
| **[stopBGM](Service.SoundService.md#stopbgm)**(): `void` <br> 停止背景音乐|
| **[stopSound](Service.SoundService.md#stopsound)**(`resId`: `string`): `void` <br> 根据资源Id停止声音|
| **[getInstance](Service.SoundService.md#getinstance)**(): [`SoundService`](Service.SoundService.md) <br> 获取音效管理器全局实例|

## Properties

### onPlaySoundComplete <Score text="onPlaySoundComplete" /> 

• `Readonly` **onPlaySoundComplete**: [`Action1`](Type.Action1.md)<`string` \| `number`\>

播放声音完成的委托(只支持3D音效，可通过播放id判断是哪个音效播放完成)

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会播放一个爆炸音效，播放完成后玩家头顶会生成一个火焰特效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        const fireAssetId = "4330";
        //在玩家当前坐标处播放爆炸音效
        const playId = SoundService.getInstance().play3DSound(boomSoundAssetId, player.character.worldLocation);
        //音效播放完成回调
        SoundService.getInstance().onPlaySoundComplete.add((resId) => {
            if (resId == playId) {
                //如果是3D爆炸音效播放完成，在玩家头顶播放火焰特效
                EffectService.getInstance().playEffectOnPlayer(fireAssetId, player, Gameplay.SlotType.Head, 1);
            }
        })

    }

}
```

## Accessors

### BGMVolumeScale <Score text="BGMVolumeScale" /> 

• `get` **BGMVolumeScale**(): `number` <Badge type="tip" text="client" />

BGM音量


#### Returns

`number`

• `set` **BGMVolumeScale**(`value`): `void` <Badge type="tip" text="client" />

BGM音量


#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |


___

### volumeScale <Score text="volumeScale" /> 

• `get` **volumeScale**(): `number` <Badge type="tip" text="client" />

音效的音量

::: warning Precautions

取值范围0-1

:::


#### Returns

`number`

• `set` **volumeScale**(`value`): `void`

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

### clearAll <Score text="clearAll" /> 

• **clearAll**(): `void` 

停止所有音效和BGM，并释放所有音效和BGM资源


使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会听到多个音效，按下F键会停止所有音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        const boom2SoundAssetId = "13910";
        const boom3SoundAssetId = "13997";
        SoundService.getInstance().play3DSound(boomSoundAssetId, player.character.worldLocation, 0);
        SoundService.getInstance().play3DSound(boom2SoundAssetId, player.character.worldLocation, 0);
        SoundService.getInstance().play3DSound(boom3SoundAssetId, player.character.worldLocation, 0);
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.getInstance().clearAll();
        })
    }

}
```


___

### get3DSoundGameObject <Score text="get" /> 

• **get3DSoundGameObject**(`playId`): `Promise`<[`Sound`](Gameplay.Sound.md)\> <Badge type="tip" text="client" />

根据播放id获取一个Sound


使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会在0点坐标处创建一个方块，并在该位置播放一个3D音效，按下F键该音效会移动到玩家坐标处
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        Core.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new Type.Vector(0, 0, 0);
        })
        let playId = SoundService.getInstance().play3DSound(bgmSoundAssetId, new Type.Vector(0, 0, 0), 0);
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.getInstance().get3DSoundGameObject(playId).then(obj => {
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

`Promise`<[`Sound`](Gameplay.Sound.md)\>

Sound对象的gameObject

___

### play3DSound <Score text="play" /> 

• **play3DSound**(`resId`, `target`, `loopNum?`, `volume?`, `playParam?`): `number` <Badge type="tip" text="other" />

在目标播放3D音效

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        Core.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new Type.Vector(0, 0, 0);
        })
        let isPlay = false;
        let playId = 0;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.getInstance().stop3DSound(playId);
            } else {
                playId = SoundService.getInstance().play3DSound(bgmSoundAssetId, new Type.Vector(0, 0, 0), 0);
            }
            isPlay = !isPlay;
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  资源Id |
| `target` | `string` \| `GameObject` \| [`Vector`](Type.Vector.md) |  播放目标 (GameObject的GUID \| GameObject \| 世界坐标) |
| `loopNum?` | `number` |  循环次数 default: 1 |
| `volume?` | `number` |  音量 default: 1 |
| `playParam?` | `any` |  播放参数: `{ innerRadius: 内部半径(默认值200), falloffDistance: 衰减距离,不包含内部半径(默认值600) }` default: `{}` |

#### Returns

`number`

播放ID，播放声音的唯一标识，可用于停止声音

___

### playBGM <Score text="playBGM" /> 

• **playBGM**(`resId`, `volume?`): `void` <Badge type="tip" text="other" />

播放背景音乐

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会播放一个背景音乐
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        SoundService.getInstance().playBGM(bgmSoundAssetId, 1);
    }

}
```

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

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        InputUtil.onKeyDown(Keys.F, () => {
            SoundService.getInstance().playSound(boomSoundAssetId);
        })
    }

}
```

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

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会在0点坐标处创建一个方块，并在该位置播放一个3D音效，再次按下F键会停止该音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        const cubeId = "7669";
        Core.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
            obj.worldLocation = new Type.Vector(0, 0, 0);
        })
        let isPlay = false;
        let playId = 0;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.getInstance().stop3DSound(playId);
            } else {
                playId = SoundService.getInstance().play3DSound(bgmSoundAssetId, new Type.Vector(0, 0, 0), 0);
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

• **stopAll3DSound**(): `void` <Badge type="tip" text="other" />

停止一切3D声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,会生成10个方块，每个方块播放一个3D音效，按下F键会停止所有3D音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

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
            Core.GameObject.asyncSpawn({ guid: cubeId }).then(obj => {
                obj.worldLocation = new Type.Vector(i * 300, 0, 0);
                SoundService.getInstance().play3DSound(bgmSoundAssetId, obj, 0);
            })
        }
        setTimeout(() => {
            SoundService.getInstance().stopAll3DSound();
        }, 10000);
    }

}
```


___

### stopAllSound <Score text="stopAllSound" /> 

• **stopAllSound**(): `void` <Badge type="tip" text="other" />

停止除BGM以外的一切2D声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会播放两个2D音效，再次按下F键会停止所有音效
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        const boomSoundAssetId2 = "20479";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.getInstance().stopAllSound();
                isPlay = false;
            } else {
                SoundService.getInstance().playSound(boomSoundAssetId, 0);
                SoundService.getInstance().playSound(boomSoundAssetId2, 0);
                isPlay = true;
            }
        })
    }

}
```


___

### stopBGM <Score text="stopBGM" /> 

• **stopBGM**(): `void` <Badge type="tip" text="other" />

停止背景音乐

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏,按下F键会播放一个背景音乐,再次按下F键会停止背景音乐
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const bgmSoundAssetId = "12721";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.getInstance().stopBGM();
            } else {
                SoundService.getInstance().playBGM(bgmSoundAssetId, 1);
            }
            isPlay = !isPlay;
        })
    }

}
```


___

### stopSound <Score text="stopSound" /> 

• **stopSound**(`resId`): `void` <Badge type="tip" text="other" />

根据资源Id停止声音

调用端生效|服务端调用自动广播

使用示例:创建一个名为SoundExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键会播放一个爆炸音效，再次按下F键会停止播放
```ts
@Core.Class
export default class SoundExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        const player = await Gameplay.asyncGetCurrentPlayer();
        const boomSoundAssetId = "13896";
        let isPlay = false;
        InputUtil.onKeyDown(Keys.F, () => {
            if (isPlay) {
                SoundService.getInstance().stopSound(boomSoundAssetId);
                isPlay = false;
            } else {
                SoundService.getInstance().playSound(boomSoundAssetId, 0);
                isPlay = true;
            }
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  资源Id |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`SoundService`](Service.SoundService.md) 

获取音效管理器全局实例


#### Returns

[`SoundService`](Service.SoundService.md)

音效管理器全局实例
