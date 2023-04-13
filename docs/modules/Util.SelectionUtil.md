[Util](Util.Util.md) / SelectionUtil

# SelectionUtil <Badge type="tip" text="Namespace" /> <Score text="SelectionUtil" />

## Table of contents

| Functions |
| :-----|
| **[drawGameObjectSelectionBox](Util.SelectionUtil.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `Color`: [`LinearColor`](../classes/Type.LinearColor.md), `DurationTime?`: `number`): `void` <br> 绘制物体选择框|
| **[getGameObjectBySelectionBox](Util.SelectionUtil.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取框选屏幕位置的物体|
| **[setGlobalOutlineParams](Util.SelectionUtil.md#setglobaloutlineparams)**(`Width?`: `number`, `CoveredAlpha?`: `number`, `CoveredEdgeAlpha?`: `number`, `NotCoveredAlpha?`: `number`, `NotCoveredEdgeAlpha?`: `number`): `void` <br> 设置全局描边参数|

## Functions

### drawGameObjectSelectionBox <Score text="drawGameObjectSelectionBox" /> 

• **drawGameObjectSelectionBox**(`StartPoint`, `EndPoint`, `Color`, `DurationTime?`): `void` <Badge type="tip" text="client" />

绘制物体选择框


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `Color` | [`LinearColor`](../classes/Type.LinearColor.md) | 选择框颜色 |
| `DurationTime?` | `number` | 显示时间 default:0.1 |


___

### getGameObjectBySelectionBox <Score text="getGameObjectBySelectionBox" /> 

• **getGameObjectBySelectionBox**(`StartPoint`, `EndPoint`, `IsIncludeNonCollidingObjects?`, `IsUseObjectsBoundingBox?`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="client" />

获取框选屏幕位置的物体


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `IsIncludeNonCollidingObjects?` | `boolean` | 是否包含物体非碰撞组件 default:false |
| `IsUseObjectsBoundingBox?` | `boolean` | 是否使用物体包围盒 default:false |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

框选的物体

___

### setGlobalOutlineParams <Score text="setGlobalOutlineParams" /> 

• **setGlobalOutlineParams**(`Width?`, `CoveredAlpha?`, `CoveredEdgeAlpha?`, `NotCoveredAlpha?`, `NotCoveredEdgeAlpha?`): `void` <Badge type="tip" text="client" />

设置全局描边参数


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Width?` | `number` | 描边宽度（0 ~ 4） default:2 |
| `CoveredAlpha?` | `number` | 被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `CoveredEdgeAlpha?` | `number` | 被遮挡部分描边透明度（0 ~ 1） default:1 |
| `NotCoveredAlpha?` | `number` | 未被遮挡部分高亮透明度（0 ~ 1） default:0 |
| `NotCoveredEdgeAlpha?` | `number` | 未被遮挡部分描边透明度（0 ~ 1） default:1 |

