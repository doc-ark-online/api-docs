[场景](../groups/场景.场景.md) / EffectService

# EffectService <Badge type="tip" text="Class" /> <Score text="EffectService" />

特效管理器

Effect 通常用于增强游戏画面、呈现视觉效果或传达特定的情感或信息。特效可以是各种形式的视觉效果，如粒子效果、光影效果、爆炸效果、烟雾效果等。MW编辑器在左侧特效栏中提供了大量的粒子特效，您可以任意的拖动特效到场景中查看并使用。

EffectService 中很多静态方法可直接调用，其中：

- playAtPosition、 playOnGameObject 方法控制粒子特效播放位置。

- stop 方法控制粒子特效停止播放。

## Table of contents

### Properties <Score text="Properties" /> 
| **[checkPlayParams](mw.EffectService.md#checkplayparams)**: `any`  |
| :-----|
| 检查玩家参数|

### Methods <Score text="Methods" /> 
| **[getEffectById](mw.EffectService.md#geteffectbyid)**(`playId`: `number`): `Promise`<[`Effect`](mw.Effect.md)\> <Badge type="tip" text="client" />  |
| :-----|
| 根据播放id获取一个特效对象|
| **[playAtPosition](mw.EffectService.md#playatposition)**(`assetId`: `string`, `position`: [`Vector`](mw.Vector.md), `params?`: `Object`): `number` <Badge type="tip" text="other" />  |
| 在一个位置播放特效|
| **[playOnGameObject](mw.EffectService.md#playongameobject)**(`assetId`: `string`, `target`: [`GameObject`](mw.GameObject.md), `params?`: `Object`): `number` <Badge type="tip" text="other" />  |
| 在一个GameObject上播放特效|
| **[stop](mw.EffectService.md#stop)**(`playId`: `number`): `void` <Badge type="tip" text="other" />  |
| 停止一个正在播放的特效|
| **[stopAll](mw.EffectService.md#stopall)**(): `void` <Badge type="tip" text="other" />  |
| 停止所有特效|
| **[stopEffectFromHost](mw.EffectService.md#stopeffectfromhost)**(`source`: `string`, `target`: [`Player`](mw.Player.md)  [`GameObject`](mw.GameObject.md)): `void` <Badge type="tip" text="other" />  |
| 停止目标对象上所有资源 Id 的特效|

## Properties

### checkPlayParams <Score text="checkPlayParams" /> 

▪ `Static` `Private` **checkPlayParams**: `any`

检查玩家参数

## Methods

### getEffectById <Score text="getEffectById" /> 

• `Static` **getEffectById**(`playId`): `Promise`<[`Effect`](mw.Effect.md)\> <Badge type="tip" text="client" />

根据播放id获取一个特效对象

#### Parameters

| `playId` `number` |  播放的唯一标识，音效资源 ID，等同于 assetId。区别是 playId 传递的是 number 类型，如：4330；assetId 传字符串类型 "4330" 即可。 range: 字符串长度依据资源 ID 长度而定 type:整数 |
| :------ | :------ |

#### Returns

| `Promise`<[`Effect`](mw.Effect.md)\> | Particle对象的gameObject |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后获取该特效对象并移动到(200, 0, 200)位置
</span>

```ts
@Component
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.playAtPosition(fireAssetId, new Vector(0, 0, 200), { loopCount: 0});
        // 5秒后移动该特效到(200, 0, 200)位置
        TimeUtil.delaySecond(5).then(() => {
            EffectService.getEffectById(playId).then((effect) => {
                effect.worldTransform.position = new Vector(200, 0, 200);
            });
        });
    }
}
```

___

### playAtPosition <Score text="playAtPosition" /> 

• `Static` **playAtPosition**(`assetId`, `position`, `params?`): `number` <Badge type="tip" text="other" />

在一个位置播放特效

#### Parameters

| `assetId` `string` |  播放的唯一标识，音效资源 ID，等同于 playId。区别是 playId 传递的是 number 类型，如：4330；assetId 传字符串类型 "4330" 即可。 range: 字符串长度依据资源 ID 长度而定 |
| :------ | :------ |
| `position` [`Vector`](mw.Vector.md) |  世界坐标 |
| `params?` `Object` |  播放参数 <br> default: 查看以下数值 |
| `params.duration?` `number` | - |
| `params.loopCount?` `number` | - |
| `params.rotation?` [`Rotation`](mw.Rotation.md) | - |
| `params.scale?` [`Vector`](mw.Vector.md) | - |

#### Returns

| `number` | 本次播放的唯一标识，可用于停止播放，如果返回0，说明参数错误，播放失败 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在坐标(0, 0, 200)处播放一个火焰特效
</span>

```ts
@Component
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.playAtPosition(fireAssetId, new mw.Vector(0, 0, 200), { loopCount: 0});
    }
}
```

___

### playOnGameObject <Score text="playOnGameObject" /> 

• `Static` **playOnGameObject**(`assetId`, `target`, `params?`): `number` <Badge type="tip" text="other" />

在一个GameObject上播放特效

#### Parameters

| `assetId` `string` |  播放的唯一标识，音效资源 ID，等同于 playId。区别是 playId 传递的是 number 类型，如：4330；assetId 传字符串类型 "4330" 即可。 range: 字符串长度依据资源 ID 长度而定 |
| :------ | :------ |
| `target` [`GameObject`](mw.GameObject.md) |  目标GameObject |
| `params?` `Object` |  播放参数，slotType-挂点类型(默认null)，loopCount-循环次数(默认1)，duration-播放时长（单位:秒，默认0，设置此字段将忽略loopCount），position-坐标偏移(默认Vector.zero)，rotation-旋转偏移(默认Rotation.zero)，scale-缩放(Vector.one) default: undefined |
| `params.duration?` `number` | - |
| `params.loopCount?` `number` | - |
| `params.position?` [`Vector`](mw.Vector.md) | - |
| `params.rotation?` [`Rotation`](mw.Rotation.md) | - |
| `params.scale?` [`Vector`](mw.Vector.md) | - |
| `params.slotType?` [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) | - |

#### Returns

| `number` | 本次播放的唯一标识，可用于停止播放，如果返回0，说明参数错误，播放失败 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在所有玩家的身上播放一个火焰特效
</span>

```ts
@Component
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        mw.Player.getAllPlayers().forEach((player) => {
            const playId = EffectService.playOnGameObject(fireAssetId, player.character, { loopCount: 0});
        })
    }
}
```

___

### stop <Score text="stop" /> 

• `Static` **stop**(`playId`): `void` <Badge type="tip" text="other" />

停止一个正在播放的特效

#### Parameters

| `playId` `number` |  播放的唯一标识，音效资源 ID，等同于 assetId。区别是 playId 传递的是 number 类型，如：4330；assetId 传字符串类型 "4330" 即可。 range: 字符串长度依据资源 ID 长度而定 type:整数 |
| :------ | :------ |


<span style="font-size: 14px;">
使用示例: 创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后停止特效
</span>

```ts
@Component
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.playAtPosition(fireAssetId, new mw.Vector(0, 0, 200), { loopCount: 0});
        // 5秒后停止特效
        TimeUtil.delaySecond(5).then(() => {
            EffectService.stop(playId);
        })
    }
}
```

___

### stopAll <Score text="stopAll" /> 

• `Static` **stopAll**(): `void` <Badge type="tip" text="other" />

停止所有特效


<span style="font-size: 14px;">
使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放三个火焰特效，5秒后停止所有特效
</span>

```ts
@Component
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId1 = EffectService.playAtPosition(fireAssetId, new mw.Vector(0, 0, 200), { loopCount: 0});
        const playId2 = EffectService.playAtPosition(fireAssetId, new mw.Vector(200, 0, 200), { loopCount: 0});
        const playId3 = EffectService.playAtPosition(fireAssetId, new mw.Vector(400, 0, 200), { loopCount: 0});
        // 5秒后停止所有特效
        TimeUtil.delaySecond(5).then(() => {
            EffectService.stopAll();
        })
    }
}
```

___

### stopEffectFromHost <Score text="stopEffectFromHost" /> 

• `Static` **stopEffectFromHost**(`source`, `target`): `void` <Badge type="tip" text="other" />

停止目标对象上所有资源 Id 的特效

#### Parameters

| `source` `string` |  特效源，playEffect 的第一个参数。range: |
| :------ | :------ |
| `target` [`Player`](mw.Player.md)  [`GameObject`](mw.GameObject.md) |  目标对象(Player或NPC或GameObject) |

