[GAMEPLAY](../groups/Core.GAMEPLAY.md) / ScreenUtil

# ScreenUtil <Badge type="tip" text="Class" /> <Score text="ScreenUtil" />

屏幕视口设置相关的接口

## Table of contents

| Methods |
| :-----|
| **[getGameObjectByScreenPosition](mw.ScreenUtil.md#getgameobjectbyscreenposition)**(`SceneX`: `number`, `SceneY`: `number`, `Distance?`: `number`, `multiTrace?`: `boolean`, `onRay?`: `boolean`): [`HitResult`](mw.HitResult.md)[] <br> 获取视口相应位置的物体|
| **[getSightBeadLocation](mw.ScreenUtil.md#getsightbeadlocation)**(): [`Vector`](mw.Vector.md) <br> 获取相机中心点所瞄准的世界位置|
| **[projectWorldLocationToWidgetPosition](mw.ScreenUtil.md#projectworldlocationtowidgetposition)**(`player`: [`Player`](mw.Player.md), `worldLocation`: [`Vector`](mw.Vector.md), `outScreenPosition`: [`Vector2`](mw.Vector2.md), `isPlayerViewportRelative`: `boolean`): `boolean` <br> 获取投影世界到播放器的屏幕位置，然后将其转换为控件位置，考虑任何质量缩放。|

## Methods

### getGameObjectByScreenPosition <Score text="getGameObjectByScreenPosition" /> 

• `Static` **getGameObjectByScreenPosition**(`SceneX`, `SceneY`, `Distance?`, `multiTrace?`, `onRay?`): [`HitResult`](mw.HitResult.md)[] <Badge type="tip" text="client" />

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

[`HitResult`](mw.HitResult.md)[]

点击位置的物体

___

### getSightBeadLocation <Score text="getSightBeadLocation" /> 

• `Static` **getSightBeadLocation**(): [`Vector`](mw.Vector.md) <Badge type="tip" text="client" />

获取相机中心点所瞄准的世界位置


#### Returns

[`Vector`](mw.Vector.md)

目标点世界位置

___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• `Static` **projectWorldLocationToWidgetPosition**(`player`, `worldLocation`, `outScreenPosition`, `isPlayerViewportRelative`): `boolean` <Badge type="tip" text="client" />

获取投影世界到播放器的屏幕位置，然后将其转换为控件位置，考虑任何质量缩放。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](mw.Player.md) | 玩家在游戏世界中的位置投射到屏幕上的控制器 |
| `worldLocation` | [`Vector`](mw.Vector.md) | 要投射的世界位置 |
| `outScreenPosition` | [`Vector2`](mw.Vector2.md) | 在视口的位置 |
| `isPlayerViewportRelative` | `boolean` | 是否与玩家视口子区域相关(当在分屏中使用玩家附加的小部件或当宽度比受限时有用)如果位置投射到屏幕上，返回true |

#### Returns

`boolean`

boolean
