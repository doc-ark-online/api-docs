[Utility](../groups/Utility.Utility.md) / EffectService

# EffectService <Badge type="tip" text="Class" /> <Score text="EffectService" />

**`Instance`**

特效服务

## Table of contents

| Methods |
| :-----|
| **[clearAll](Service.EffectService.md#clearall)**(): `void` <br> 停止所有特效，并释放所有特效资源|
| **[getEffectGameObject](Service.EffectService.md#geteffectgameobject)**(`playId`: `number`): `Promise`<[`Particle`](Gameplay.Particle.md)\> <br> 根据播放id获取一个特效对象|
| **[playEffectAtLocation](Service.EffectService.md#playeffectatlocation)**(`source`: `string`, `location`: [`Vector`](Type.Vector.md), `loop?`: `number`, `rotation?`: [`Rotation`](Type.Rotation.md), `scale?`: [`Vector`](Type.Vector.md)): `number` <br> 在指定位置播放特效|
| **[playEffectOnGameObject](Service.EffectService.md#playeffectongameobject)**(`source`: `string`, `target`: `GameObject`, `loop?`: `number`, `offset?`: [`Vector`](Type.Vector.md), `rotation?`: [`Rotation`](Type.Rotation.md), `scale?`: [`Vector`](Type.Vector.md)): `number` <br> 在一个GameObject上播放特效|
| **[playEffectOnPlayer](Service.EffectService.md#playeffectonplayer)**(`source`: `string`, `target`: [`Player`](Gameplay.Player.md) \, `slotType`: [`SlotType`](../enums/Gameplay.SlotType.md), `loop?`: `number`, `offset?`: [`Vector`](Type.Vector.md), `rotation?`: [`Rotation`](Type.Rotation.md), `scale?`: [`Vector`](Type.Vector.md)): `number` <br> 在一个角色的挂点上播放特效|
| **[stopAllEffect](Service.EffectService.md#stopalleffect)**(): `void` <br> 停止所有特效|
| **[stopEffect](Service.EffectService.md#stopeffect)**(`playId`: `number`): `void` <br> 停止一个正在播放的特效|
| **[stopEffectFromHost](Service.EffectService.md#stopeffectfromhost)**(`source`: `string`, `target?`: `GameObject` \): `void` <br> 停止目标对象上所有资源Id的特效|
| **[getInstance](Service.EffectService.md#getinstance)**(): [`EffectService`](Service.EffectService.md) <br> 获取特效管理器全局实例|

## Methods

### clearAll <Score text="clearAll" /> 

• **clearAll**(): `void` 

停止所有特效，并释放所有特效资源


使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会产生10个火焰特效，5秒后移除所有特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const effectAssetId = "4330";
        //生成10个特效 且位置不重叠
        for (let i = 0;
i < 10;
i++) {
            const pos = new Type.Vector(i * 100, 0, 0);
            const effect = EffectService.getInstance().playEffectAtLocation(effectAssetId, pos, 0);
        }
        setTimeout(() => {
            //移除特效
            EffectService.getInstance().clearAll();
        }, 5000);
    }
}
```


___

### getEffectGameObject <Score text="getEffectGameObject" /> 

• **getEffectGameObject**(`playId`): `Promise`<[`Particle`](Gameplay.Particle.md)\> <Badge type="tip" text="client" />

根据播放id获取一个特效对象


使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后获取该特效对象并移动到(200, 0, 200)位置
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(0, 0, 200), 0, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        // 5秒后移动该特效到(200, 0, 200)位置
        TimeUtil.delaySecond(5).then(() => {
            EffectService.getInstance().getEffectGameObject(playId).then((effect) => {
                effect.worldLocation = new Type.Vector(200, 0, 200);
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

`Promise`<[`Particle`](Gameplay.Particle.md)\>

Particle对象的gameObject

___

### playEffectAtLocation <Score text="playEffectAtLocation" /> 

• **playEffectAtLocation**(`source`, `location`, `loop?`, `rotation?`, `scale?`): `number` <Badge type="tip" text="other" />

在指定位置播放特效

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `location` | [`Vector`](Type.Vector.md) |  世界坐标 |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `rotation?` | [`Rotation`](Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止
使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在坐标(0, 0, 200)处播放一个火焰特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(0, 0, 200), 1, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
    }
}
```

___

### playEffectOnGameObject <Score text="playEffectOnGameObject" /> 

• **playEffectOnGameObject**(`source`, `target`, `loop?`, `offset?`, `rotation?`, `scale?`): `number` <Badge type="tip" text="other" />

在一个GameObject上播放特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在所有玩家的身上播放一个火焰特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        Gameplay.getAllPlayers().forEach((player) => {
            const playId = EffectService.getInstance().playEffectOnGameObject(fireAssetId, player.character, 1, new Type.Vector(0, 0, 0), new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        })
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `target` | `GameObject` |  目标GameObject |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Vector.md) |  坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

___

### playEffectOnPlayer <Score text="playEffectOnPlayer" /> 

• **playEffectOnPlayer**(`source`, `target`, `slotType`, `loop?`, `offset?`, `rotation?`, `scale?`): `number` <Badge type="tip" text="other" />

在一个角色的挂点上播放特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在所有玩家的头上播放一个火焰特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        Gameplay.getAllPlayers().forEach((player) => {
            const playId = EffectService.getInstance().playEffectOnPlayer(fireAssetId, player, Gameplay.SlotType.Head, 1, new Type.Vector(0, 0, 0), new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        })
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `target` | [`Player`](Gameplay.Player.md) \| [`Character`](Gameplay.Character.md) |  玩家\|npc |
| `slotType` | [`SlotType`](../enums/Gameplay.SlotType.md) |  挂点类型 |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Vector.md) |  坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

___

### stopAllEffect <Score text="stopAllEffect" /> 

• **stopAllEffect**(): `void` <Badge type="tip" text="other" />

停止所有特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放三个火焰特效，5秒后停止所有特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(0, 0, 200), 0, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        const playId2 = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(200, 0, 200), 0, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        const playId3 = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(400, 0, 200), 0, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        // 5秒后停止所有特效
        TimeUtil.delaySecond(5).then(() => {
            EffectService.getInstance().stopAllEffect();
        })
    }
}
```


___

### stopEffect <Score text="stopEffect" /> 

• **stopEffect**(`playId`): `void` <Badge type="tip" text="other" />

停止一个正在播放的特效

调用端生效|服务端调用自动广播

使用示例: 创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在场景中播放一个火焰特效，5秒后停止特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const playId = EffectService.getInstance().playEffectAtLocation(fireAssetId, new Type.Vector(0, 0, 200), 0, new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        // 5秒后停止特效
        TimeUtil.delaySecond(5).then(() => {
            EffectService.getInstance().stopEffect(playId);
        })
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放的唯一标识 |


___

### stopEffectFromHost <Score text="stopEffectFromHost" /> 

• **stopEffectFromHost**(`source`, `target?`): `void` <Badge type="tip" text="other" />

停止目标对象上所有资源Id的特效

调用端生效|服务端调用自动广播

使用示例:创建一个名为EffectExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会在所有玩家的身上播放一个火焰特效和光环特效，按下F键后，会停止所有玩家身上的火焰特效，按下G键后，会停止所有玩家身上的光环特效
```ts
@Core.Class
export default class EffectExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        const fireAssetId = "4330";
        const roundAssetId = "4336";
        Gameplay.getAllPlayers().forEach(player => {
            EffectService.getInstance().playEffectOnGameObject(fireAssetId, player.character, 0, new Type.Vector(0, 0, 100), new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
            EffectService.getInstance().playEffectOnGameObject(roundAssetId, player.character, 0, new Type.Vector(0, 0, -50), new Type.Rotation(0, 0, 0), new Type.Vector(1, 1, 1));
        });
        InputUtil.onKeyDown(Keys.F, () => {
            Gameplay.getAllPlayers().forEach(player => {
                EffectService.getInstance().stopEffectFromHost(fireAssetId, player.character);
            });
        });
        InputUtil.onKeyDown(Keys.G, () => {
            Gameplay.getAllPlayers().forEach(player => {
                EffectService.getInstance().stopEffectFromHost(roundAssetId, player.character);
            });
        });
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，playEffect的第一个参数 |
| `target?` | `GameObject` \| [`Player`](Gameplay.Player.md) \| [`Character`](Gameplay.Character.md) |  目标对象(Player或者Humanoid或者GameObject) default: undefined |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`EffectService`](Service.EffectService.md) 

获取特效管理器全局实例


#### Returns

[`EffectService`](Service.EffectService.md)

特效管理器全局实例
