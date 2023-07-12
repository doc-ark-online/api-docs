[EFFECTS](../groups/Core.EFFECTS.md) / EffectService

# EffectService <Badge type="tip" text="Class" /> <Score text="EffectService" />

**`Instance`**

特效服务

## Table of contents

| Methods |
| :-----|
| **[getEffectById](mw.EffectService.md#geteffectbyid)**(`playId`: `number`): `Promise`<[`Effect`](mw.Effect.md)\> <br> 根据播放id获取一个特效对象|
| **[playAtPosition](mw.EffectService.md#playatposition)**(`assetId`: `string`, `position`: [`Vector`](mw.Vector.md), `params?`: `Object`): `number` <br> 在一个GameObject上播放特效|
| **[playOnGameObject](mw.EffectService.md#playongameobject)**(`assetId`: `string`, `target`: [`GameObject`](mw.GameObject.md), `params?`: `Object`): `number` <br> 在一个GameObject上播放特效|
| **[stop](mw.EffectService.md#stop)**(`playId`: `number`): `void` <br> 停止一个正在播放的特效|
| **[stopAll](mw.EffectService.md#stopall)**(): `void` <br> 停止所有特效|

## Methods

### getEffectById <Score text="getEffectById" /> 

• `Static` **getEffectById**(`playId`): `Promise`<[`Effect`](mw.Effect.md)\> <Badge type="tip" text="client" />

根据播放id获取一个特效对象


使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后获取该特效对象并移动到(200, 0, 200)位置
```ts
@Class
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.playAtPosition(fireAssetId, new mw.Vector(0, 0, 200), { loopCount: 0});
        // 5秒后移动该特效到(200, 0, 200)位置
        TimeUtil.delaySecond(5).then(() => {
            EffectService.getEffectById(playId).then((effect) => {
                effect.worldLocation = new mw.Vector(200, 0, 200);
            });
        });
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放id |

#### Returns

`Promise`<[`Effect`](mw.Effect.md)\>

Particle对象的gameObject

___

### playAtPosition <Score text="playAtPosition" /> 

• `Static` **playAtPosition**(`assetId`, `position`, `params?`): `number` <Badge type="tip" text="other" />

在一个GameObject上播放特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在坐标(0, 0, 200)处播放一个火焰特效
```ts
@Class
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.playAtPosition(fireAssetId, new mw.Vector(0, 0, 200), { loopCount: 0});
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `position` | [`Vector`](mw.Vector.md) |  世界坐标 |
| `params?` | `Object` |  播放参数，loopCount-循环次数(默认1)，duration-播放时长（单位:秒，默认0，设置此字段将忽略loopCount），rotation-旋转偏移(默认Rotation.zero)，scale-缩放(Vector.one) default: undefined |
| `params.duration?` | `number` | - |
| `params.loopCount?` | `number` | - |
| `params.rotation?` | [`Rotation`](mw.Rotation.md) | - |
| `params.scale?` | [`Vector`](mw.Vector.md) | - |

#### Returns

`number`

本次播放的唯一标识，可用于停止播放

___

### playOnGameObject <Score text="playOnGameObject" /> 

• `Static` **playOnGameObject**(`assetId`, `target`, `params?`): `number` <Badge type="tip" text="other" />

在一个GameObject上播放特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在所有玩家的身上播放一个火焰特效
```ts
@Class
export default class EffectExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        mw.getAllPlayers().forEach((player) => {
            const playId = EffectService.playOnGameObject(fireAssetId, player.character, { loopCount: 0});
        })
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `target` | [`GameObject`](mw.GameObject.md) |  目标GameObject |
| `params?` | `Object` |  播放参数，slotType-挂点类型(默认null)，loopCount-循环次数(默认1)，duration-播放时长（单位:秒，默认0，设置此字段将忽略loopCount），position-坐标偏移(默认Vector.zero)，rotation-旋转偏移(默认Rotation.zero)，scale-缩放(Vector.one) default: undefined |
| `params.duration?` | `number` | - |
| `params.loopCount?` | `number` | - |
| `params.position?` | [`Vector`](mw.Vector.md) | - |
| `params.rotation?` | [`Rotation`](mw.Rotation.md) | - |
| `params.scale?` | [`Vector`](mw.Vector.md) | - |
| `params.slotType?` | [`HumanoidSlotType`](../enums/mw.HumanoidSlotType.md) | - |

#### Returns

`number`

本次播放的唯一标识，可用于停止播放

___

### stop <Score text="stop" /> 

• `Static` **stop**(`playId`): `void` <Badge type="tip" text="other" />

停止一个正在播放的特效

调用端生效|服务端调用自动广播

使用示例: 创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后停止特效
```ts
@Class
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放的唯一标识 |


___

### stopAll <Score text="stopAll" /> 

• `Static` **stopAll**(): `void` <Badge type="tip" text="other" />

停止所有特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放三个火焰特效，5秒后停止所有特效
```ts
@Class
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

