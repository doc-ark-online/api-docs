[Service](../modules/Service.Service.md) / EffectService

# EffectService <Badge type="tip" text="Class" /> <Score text="EffectService" />

**`Instance`**

**`Groups`**

UTILITY

特效服务

## Table of contents

| Methods |
| :-----|
| **[clearAll](Service.EffectService.md#clearall)**(): `void` <br> 停止所有特效，并释放所有特效资源|
| **[getEffectGameObject](Service.EffectService.md#geteffectgameobject)**(`number`): `Promise`<[`Particle`](Gameplay.Particle.md)\> <br> 根据播放id获取一个特效对象|
| **[playEffectAtLocation](Service.EffectService.md#playeffectatlocation)**(`string`, [`Vector`](Type.Vector.md), `number`, [`Rotation`](Type.Rotation.md), [`Vector`](Type.Vector.md)): `number` <br> 在指定位置播放特效|
| **[playEffectOnGameObject](Service.EffectService.md#playeffectongameobject)**(`string`, `GameObject`, `number`, [`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md), [`Vector`](Type.Vector.md)): `number` <br> 在一个GameObject上播放特效|
| **[playEffectOnPlayer](Service.EffectService.md#playeffectonplayer)**(`string`, [`Player`](Gameplay.Player.md) \, [`SlotType`](../enums/Gameplay.SlotType.md), `number`, [`Vector`](Type.Vector.md), [`Rotation`](Type.Rotation.md), [`Vector`](Type.Vector.md)): `number` <br> 在一个角色的挂点上播放特效|
| **[stopAllEffect](Service.EffectService.md#stopalleffect)**(): `void` <br> 停止所有特效|
| **[stopEffect](Service.EffectService.md#stopeffect)**(`number`): `void` <br> 停止一个正在播放的特效|
| **[stopEffectFromHost](Service.EffectService.md#stopeffectfromhost)**(`string`, `GameObject` \): `void` <br> 停止目标对象上所有资源Id的特效|
| **[getInstance](Service.EffectService.md#getinstance)**(): [`EffectService`](Service.EffectService.md) <br> 获取特效管理器全局实例|

## Methods

### clearAll <Score text="clearAll" /> 

• **clearAll**(): `void` <Badge type="tip" text="other" />

停止所有特效，并释放所有特效资源



___

### getEffectGameObject <Score text="getEffectGameObject" /> 

• **getEffectGameObject**(`playId`): `Promise`<[`Particle`](Gameplay.Particle.md)\> <Badge type="tip" text="other" />

根据播放id获取一个特效对象


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

___

### playEffectOnGameObject <Score text="playEffectOnGameObject" /> 

• **playEffectOnGameObject**(`source`, `target`, `loop?`, `offset?`, `rotation?`, `scale?`): `number` <Badge type="tip" text="other" />

在一个GameObject上播放特效

调用端生效|服务端调用自动广播

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，可以是资源GUID，也可以是场景对象的节点路径(xxx/xxx的形式，最少有一层路径，不能放在根节点) |
| `target` | [`Player`](Gameplay.Player.md) \| [`Humanoid`](Gameplay.Humanoid.md) |  玩家\|npc |
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


___

### stopEffect <Score text="stopEffect" /> 

• **stopEffect**(`playId`): `void` <Badge type="tip" text="other" />

停止一个正在播放的特效

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放的唯一标识 |


___

### stopEffectFromHost <Score text="stopEffectFromHost" /> 

• **stopEffectFromHost**(`source`, `target?`): `void` <Badge type="tip" text="other" />

停止目标对象上所有资源Id的特效

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` |  特效源，playEffect的第一个参数 |
| `target?` | `GameObject` \| [`Player`](Gameplay.Player.md) \| [`Humanoid`](Gameplay.Humanoid.md) |  目标对象(Player或者Humanoid或者GameObject) default: undefined |


___

### getInstance <Score text="getInstance" /> 

• `Static` **getInstance**(): [`EffectService`](Service.EffectService.md) <Badge type="tip" text="other" />

获取特效管理器全局实例


#### Returns

[`EffectService`](Service.EffectService.md)

特效管理器全局实例
