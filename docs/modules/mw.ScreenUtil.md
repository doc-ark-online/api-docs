[mw](Core.mw.md) / ScreenUtil

# ScreenUtil <Badge type="tip" text="Namespace" /> <Score text="ScreenUtil" />

## Table of contents

| Functions |
| :-----|
| **[getGameObjectByScreenPosition](mw.ScreenUtil.md#getgameobjectbyscreenposition)**(`SceneX`: `number`, `SceneY`: `number`, `Distance?`: `number`, `multiTrace?`: `boolean`, `onRay?`: `boolean`): [`HitResult`](../classes/mw.HitResult.md)[] <br> 获取视口相应位置的物体|
| **[getSightBeadLocation](mw.ScreenUtil.md#getsightbeadlocation)**(): [`Vector`](../classes/mw.Vector.md) <br> 获取相机中心点所瞄准的世界位置|

## Functions

### getGameObjectByScreenPosition <Score text="getGameObjectByScreenPosition" /> 

• **getGameObjectByScreenPosition**(`SceneX`, `SceneY`, `Distance?`, `multiTrace?`, `onRay?`): [`HitResult`](../classes/mw.HitResult.md)[] <Badge type="tip" text="client" />

获取视口相应位置的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `SceneX` | `number` | 视口坐标X |
| `SceneY` | `number` | 视口坐标Y |
| `Distance?` | `number` | 检测距离 default:100000 |
| `multiTrace?` | `boolean` | 是否获取多个GameObject default:false |
| `onRay?` | `boolean` | 是否开启射线显示效果 default:false |

#### Returns

[`HitResult`](../classes/mw.HitResult.md)[]

点击位置的物体

___

### getSightBeadLocation <Score text="getSightBeadLocation" /> 

• **getSightBeadLocation**(): [`Vector`](../classes/mw.Vector.md) <Badge type="tip" text="client" />

获取相机中心点所瞄准的世界位置


#### Returns

[`Vector`](../classes/mw.Vector.md)

目标点世界位置
