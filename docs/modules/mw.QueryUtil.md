[mw](Core.mw.md) / QueryUtil

# QueryUtil <Badge type="tip" text="Namespace" /> <Score text="QueryUtil" />

## Table of contents

| Functions |
| :-----|
| **[boxOverlap](mw.QueryUtil.md#boxoverlap)**(`boxCenter`: [`Vector`](../classes/mw.Vector.md), `boxExtent`: [`Vector`](../classes/mw.Vector.md), `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 矩形范围检测|
| **[capsuleOverlap](mw.QueryUtil.md#capsuleoverlap)**(`capsuleCenter`: [`Vector`](../classes/mw.Vector.md), `capsuleRadius`: `number`, `halfHeight`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 胶囊体范围检测|
| **[lineTrace](mw.QueryUtil.md#linetrace)**(`start`: [`Vector`](../classes/mw.Vector.md), `end`: [`Vector`](../classes/mw.Vector.md), `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `traceSkeletonOnly?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`HitResult`](../classes/mw.HitResult.md)[] <br> 射线检测|
| **[sphereOverlap](mw.QueryUtil.md#sphereoverlap)**(`sphereCenter`: [`Vector`](../classes/mw.Vector.md), `sphereRadius`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](../classes/mw.GameObject.md)): [`GameObject`](../classes/mw.GameObject.md)[] <br> 球形范围检测|

## Functions

### boxOverlap <Score text="boxOverlap" /> 

• **boxOverlap**(`boxCenter`, `boxExtent`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

矩形范围检测


使用示例: 如下示例展示使用矩形范围检测的基本流程
```ts
const goList = boxOverlap(new Vector(0,0,0), new Vector(1000,0,0), 10, 10, true);
for (const item of goList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boxCenter` | [`Vector`](../classes/mw.Vector.md) | 矩形中心位置 |
| `boxExtent` | [`Vector`](../classes/mw.Vector.md) | 结束位置 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

GameObject数组

___

### capsuleOverlap <Score text="capsuleOverlap" /> 

• **capsuleOverlap**(`capsuleCenter`, `capsuleRadius`, `halfHeight`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

胶囊体范围检测


使用示例: 如下示例展示使用圆柱范围检测的基本流程
```ts
const ResultList = capsuleOverlap(new Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `capsuleCenter` | [`Vector`](../classes/mw.Vector.md) | 胶囊体中心位置 |
| `capsuleRadius` | `number` | 胶囊体半径 |
| `halfHeight` | `number` | 胶囊体半高 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

GameObject数组

___

### lineTrace <Score text="lineTrace" /> 

• **lineTrace**(`start`, `end`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `traceSkeletonOnly?`, `source?`): [`HitResult`](../classes/mw.HitResult.md)[] 

射线检测


使用示例: 如下示例展示使用射线检测的基本流程
```ts
const ResultList = lineTrace(new Vector(0,0,0), new Vector(300,0,0), true, false, [], false, gameObject, false);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Vector`](../classes/mw.Vector.md) | 起始位置 |
| `end` | [`Vector`](../classes/mw.Vector.md) | 结束位置 |
| `multiTrace?` | `boolean` | 是否穿透检测 default:false |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象guid数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `traceSkeletonOnly?` | `boolean` | 是否进行具体部位的检测 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`HitResult`](../classes/mw.HitResult.md)[]

HitResult数组

___

### sphereOverlap <Score text="sphereOverlap" /> 

• **sphereOverlap**(`sphereCenter`, `sphereRadius`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](../classes/mw.GameObject.md)[] 

球形范围检测


使用示例: 如下示例展示使用球形范围检测的基本流程
```ts
const ResultList = sphereOverlap(new Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sphereCenter` | [`Vector`](../classes/mw.Vector.md) | 球体中心位置 |
| `sphereRadius` | `number` | 球体半径 |
| `drawDebug?` | `boolean` | 是否可视化绘制 default:false |
| `objectsToIgnore?` | `string`[] | 屏蔽对象的GUID数组 default:[] |
| `ignoreByType?` | `boolean` | 是否按传入对象的类型进行屏蔽 default:false |
| `source?` | [`GameObject`](../classes/mw.GameObject.md) | 发起检测的对象（检测源不参与检测） default:null |

#### Returns

[`GameObject`](../classes/mw.GameObject.md)[]

GameObject数组
