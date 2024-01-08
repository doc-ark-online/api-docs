[工具](../groups/工具.工具.md) / QueryUtil

# QueryUtil <Badge type="tip" text="Class" /> <Score text="QueryUtil" />

射线检测工具

## Table of contents

### Methods <Score text="Methods" /> 
| **[boxOverlap](mw.QueryUtil.md#boxoverlap)**(`boxCenter`: [`Vector`](mw.Vector.md), `boxExtent`: [`Vector`](mw.Vector.md), `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`GameObject`](mw.GameObject.md)[]   |
| :-----|
| 矩形范围检测|
| **[boxTrace](mw.QueryUtil.md#boxtrace)**(`start`: [`Vector`](mw.Vector.md), `end`: [`Vector`](mw.Vector.md), `halfSize`: [`Vector`](mw.Vector.md), `orientation`: [`Rotation`](mw.Rotation.md), `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`HitResult`](mw.HitResult.md)[]   |
| 盒体射线检测|
| **[capsuleOverlap](mw.QueryUtil.md#capsuleoverlap)**(`capsuleCenter`: [`Vector`](mw.Vector.md), `radius`: `number`, `halfHeight`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`GameObject`](mw.GameObject.md)[]   |
| 胶囊体范围检测|
| **[capsuleTrace](mw.QueryUtil.md#capsuletrace)**(`start`: [`Vector`](mw.Vector.md), `end`: [`Vector`](mw.Vector.md), `radius`: `number`, `halfHeight`: `number`, `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`HitResult`](mw.HitResult.md)[]   |
| 胶囊体射线检测|
| **[lineTrace](mw.QueryUtil.md#linetrace)**(`start`: [`Vector`](mw.Vector.md), `end`: [`Vector`](mw.Vector.md), `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `traceSkeletonOnly?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`HitResult`](mw.HitResult.md)[]   |
| 射线检测|
| **[sphereOverlap](mw.QueryUtil.md#sphereoverlap)**(`sphereCenter`: [`Vector`](mw.Vector.md), `sphereRadius`: `number`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`GameObject`](mw.GameObject.md)[]   |
| 球形范围检测|
| **[sphereTrace](mw.QueryUtil.md#spheretrace)**(`start`: [`Vector`](mw.Vector.md), `end`: [`Vector`](mw.Vector.md), `radius`: `number`, `multiTrace?`: `boolean`, `drawDebug?`: `boolean`, `objectsToIgnore?`: `string`[], `ignoreByType?`: `boolean`, `source?`: [`GameObject`](mw.GameObject.md)): [`HitResult`](mw.HitResult.md)[]   |
| 球体射线检测|

## Methods

### boxOverlap <Score text="boxOverlap" /> 

• `Static` **boxOverlap**(`boxCenter`, `boxExtent`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](mw.GameObject.md)[] 

矩形范围检测

#### Parameters

| `boxCenter` [`Vector`](mw.Vector.md) | 矩形中心位置 |
| :------ | :------ |
| `boxExtent` [`Vector`](mw.Vector.md) | 盒体的大小 |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象的GUID数组  <br> default: []<br> range:不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | GameObject数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用矩形范围检测的基本流程
</span>

```ts
const goList = QueryUtil.boxOverlap(new mw.Vector(0,0,0), new mw.Vector(1000,0,0), true);
for (const item of goList) {
    // item: 检测到的对象
}
```

___

### boxTrace <Score text="boxTrace" /> 

• `Static` **boxTrace**(`start`, `end`, `halfSize`, `orientation`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`HitResult`](mw.HitResult.md)[] 

盒体射线检测

#### Parameters

| `start` [`Vector`](mw.Vector.md) | 起始位置 |
| :------ | :------ |
| `end` [`Vector`](mw.Vector.md) | 结束位置 |
| `halfSize` [`Vector`](mw.Vector.md) | 盒体半长宽高 |
| `orientation` [`Rotation`](mw.Rotation.md) | 盒体朝向 |
| `multiTrace?` `boolean` | 是否穿透检测  <br> default: false |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象 guid 数组  <br> default: []<br> range: 不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`HitResult`](mw.HitResult.md)[] | HitResult数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用盒体射线检测的基本流程
</span>

```ts
const ResultList = QueryUtil.boxTrace(new mw.Vector(0,0,0), new mw.Vector(300,0,0), new mw.Vector(10,10,10), new mw.Rotation(0,0,0), true, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

___

### capsuleOverlap <Score text="capsuleOverlap" /> 

• `Static` **capsuleOverlap**(`capsuleCenter`, `radius`, `halfHeight`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](mw.GameObject.md)[] 

胶囊体范围检测

#### Parameters

| `capsuleCenter` [`Vector`](mw.Vector.md) | 胶囊体中心位置 |
| :------ | :------ |
| `radius` `number` | 胶囊体半径<br> range: 不做限制，但是请使用合适的半径尺度。<br> type: 浮点型 |
| `halfHeight` `number` | 胶囊体半高<br> range: 不做限制，但是请使用合适的尺度。<br> type: 浮点型 |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象的GUID数组  <br> default: []<br> range: 不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | GameObject数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用圆柱范围检测的基本流程
</span>

```ts
const ResultList = QueryUtil.capsuleOverlap(new mw.Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

___

### capsuleTrace <Score text="capsuleTrace" /> 

• `Static` **capsuleTrace**(`start`, `end`, `radius`, `halfHeight`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`HitResult`](mw.HitResult.md)[] 

胶囊体射线检测

#### Parameters

| `start` [`Vector`](mw.Vector.md) | 起始位置 |
| :------ | :------ |
| `end` [`Vector`](mw.Vector.md) | 结束位置 |
| `radius` `number` | 胶囊体半径<br> range: 不做限制，但是请使用合适的半径尺度。<br> type: 浮点型 |
| `halfHeight` `number` | 胶囊体半高<br> range: 不做限制，但是请使用合适的尺度。<br> type: 浮点型 |
| `multiTrace?` `boolean` | 是否穿透检测  <br> default: false |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象guid数组  <br> default: []<br> range: 不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`HitResult`](mw.HitResult.md)[] | HitResult数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用胶囊体射线检测的基本流程
</span>

```ts
const ResultList = QueryUtil.capsuleTrace(new mw.Vector(0,0,0), new mw.Vector(300,0,0), 5, 10, true, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

___

### lineTrace <Score text="lineTrace" /> 

• `Static` **lineTrace**(`start`, `end`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `traceSkeletonOnly?`, `source?`): [`HitResult`](mw.HitResult.md)[] 

射线检测

#### Parameters

| `start` [`Vector`](mw.Vector.md) | 起始位置 |
| :------ | :------ |
| `end` [`Vector`](mw.Vector.md) | 结束位置 |
| `multiTrace?` `boolean` | 是否穿透检测  <br> default: false |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象 guid 数组  <br> default: []<br> range: 不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `traceSkeletonOnly?` `boolean` | 是否进行具体部位的检测  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`HitResult`](mw.HitResult.md)[] | HitResult数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用射线检测的基本流程
</span>

```ts
const ResultList = QueryUtil.lineTrace(new mw.Vector(0,0,0), new mw.Vector(300,0,0), true, false, [], false, gameObject, false);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

___

### sphereOverlap <Score text="sphereOverlap" /> 

• `Static` **sphereOverlap**(`sphereCenter`, `sphereRadius`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`GameObject`](mw.GameObject.md)[] 

球形范围检测

#### Parameters

| `sphereCenter` [`Vector`](mw.Vector.md) | 球体中心位置 |
| :------ | :------ |
| `sphereRadius` `number` | 球体半径<br> range: 不做限制，但是请使用合适的半径尺度。<br> type: 浮点型 |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象的GUID数组  <br> default: []<br> range:不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`GameObject`](mw.GameObject.md)[] | GameObject数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用球形范围检测的基本流程
</span>

```ts
const ResultList = QueryUtil.sphereOverlap(new mw.Vector(0,0,0), 100, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```

___

### sphereTrace <Score text="sphereTrace" /> 

• `Static` **sphereTrace**(`start`, `end`, `radius`, `multiTrace?`, `drawDebug?`, `objectsToIgnore?`, `ignoreByType?`, `source?`): [`HitResult`](mw.HitResult.md)[] 

球体射线检测

#### Parameters

| `start` [`Vector`](mw.Vector.md) | 起始位置 |
| :------ | :------ |
| `end` [`Vector`](mw.Vector.md) | 结束位置 |
| `radius` `number` | 球体半径<br> range: [0, +∞] 但是请使用合适的半径尺度。<br> type: 浮点型 |
| `multiTrace?` `boolean` | 是否穿透检测  <br> default: false |
| `drawDebug?` `boolean` | 是否可视化绘制  <br> default: false |
| `objectsToIgnore?` `string`[] | 屏蔽对象guid数组  <br> default: []<br> range: 不做限制 |
| `ignoreByType?` `boolean` | 是否按传入对象的类型进行屏蔽  <br> default: false |
| `source?` [`GameObject`](mw.GameObject.md) | 发起检测的对象（检测源不参与检测）  <br> default: null |

#### Returns

| [`HitResult`](mw.HitResult.md)[] | HitResult数组 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例: 如下示例展示使用球体射线检测的基本流程
</span>

```ts
const ResultList = QueryUtil.sphereTrace(new mw.Vector(0,0,0), new mw.Vector(300,0,0), 5, true, false, [], false, gameObject);
for (const item of ResultList) {
    // item: 检测到的对象
}
```
