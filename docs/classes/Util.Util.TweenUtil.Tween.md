[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](../modules/Util.md) / [Util](../modules/Util.Util.md) / [TweenUtil](../modules/Util.Util.TweenUtil.md) / Tween

# Class: Tween<T\>

[Util](../modules/Util.Util.md).[TweenUtil](../modules/Util.Util.TweenUtil.md).Tween

**`Author`**

huipeng.jia

**`Description`**

补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。
你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，
补间引擎将负责计算从起始点到结束点的值。

**`Network Status`**

usage: 双端

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops) |

## Table of contents

### Constructors

- [constructor](Util.Util.TweenUtil.Tween.md#constructor)

### Methods

- [chain](Util.Util.TweenUtil.Tween.md#chain)
- [delay](Util.Util.TweenUtil.Tween.md#delay)
- [duration](Util.Util.TweenUtil.Tween.md#duration)
- [easing](Util.Util.TweenUtil.Tween.md#easing)
- [end](Util.Util.TweenUtil.Tween.md#end)
- [getID](Util.Util.TweenUtil.Tween.md#getid)
- [group](Util.Util.TweenUtil.Tween.md#group)
- [interpolation](Util.Util.TweenUtil.Tween.md#interpolation)
- [isPaused](Util.Util.TweenUtil.Tween.md#ispaused)
- [isPlaying](Util.Util.TweenUtil.Tween.md#isplaying)
- [onComplete](Util.Util.TweenUtil.Tween.md#oncomplete)
- [onRepeat](Util.Util.TweenUtil.Tween.md#onrepeat)
- [onStart](Util.Util.TweenUtil.Tween.md#onstart)
- [onStop](Util.Util.TweenUtil.Tween.md#onstop)
- [onUpdate](Util.Util.TweenUtil.Tween.md#onupdate)
- [pause](Util.Util.TweenUtil.Tween.md#pause)
- [repeat](Util.Util.TweenUtil.Tween.md#repeat)
- [repeatDelay](Util.Util.TweenUtil.Tween.md#repeatdelay)
- [resume](Util.Util.TweenUtil.Tween.md#resume)
- [start](Util.Util.TweenUtil.Tween.md#start)
- [stop](Util.Util.TweenUtil.Tween.md#stop)
- [stopChainedTweens](Util.Util.TweenUtil.Tween.md#stopchainedtweens)
- [to](Util.Util.TweenUtil.Tween.md#to)
- [update](Util.Util.TweenUtil.Tween.md#update)
- [yoyo](Util.Util.TweenUtil.Tween.md#yoyo)

## Constructors

### constructor

• **new Tween**<`T`\>(`obj`, `group?`)

**`Description`**

补间构造函数

**`Effect`**

调用端生效

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | usage: 要创建补间的对象类型 |
| `group?` | ``false`` \| [`Group`](Util.Util.TweenUtil.Group.md) | usage: 要创建的补间对象的分组 default: mainGroup |

#### Defined in

Util/index.d.ts:785

## Methods

### chain

▸ **chain**(`...tweens`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

将（多个）补间对象链接到当前补间对象。在当前补间结束的时候立即启动链接的补间

**`Effect`**

调用端生效

**`Example`**

使用示例: 示例
```
// A结束后启动B
tweenA.chain(tweenB)

// A-B循环
tweenA.chain(tweenB)
tweenB.chain(tweenA)

// A结束后同时启动B,C
tweenA.chain(tweenB, tweenC)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tweens` | [`Tween`](Util.Util.TweenUtil.Tween.md)<`any`\>[] | usage: 要链接的补间对象（数组） |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:937

___

### delay

▸ **delay**(`amount?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

延迟启动

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | usage: 延迟时间，单位：ms。 default: 0 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:874

___

### duration

▸ **duration**(`d?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置完成补间需要的时间（周期）

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d?` | `number` | usage: 完成补间需要的时间，单位：ms。 default: 1000 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:818

___

### easing

▸ **easing**(`easingFunction?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置缓动函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `easingFunction?` | [`EasingFunction`](../modules/Util.Util.TweenUtil.md#easingfunction) | usage: 缓动函数 default: Easing.Linear.None |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:910

___

### end

▸ **end**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

将当前补间置为目标状态

**`Effect`**

调用端生效

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:838

___

### getID

▸ **getID**(): `number`

**`Description`**

获取当前补间对象的ID

**`Effect`**

调用端生效

#### Returns

`number`

当前补间对象的ID

#### Defined in

Util/index.d.ts:791

___

### group

▸ **group**(`group?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置当前补间对象的分组

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group?` | [`Group`](Util.Util.TweenUtil.Group.md) | usage: 新的分组 default: mainGroup |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:867

___

### interpolation

▸ **interpolation**(`interpolationFunction?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置插值函数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `interpolationFunction?` | [`InterpolationFunction`](../modules/Util.Util.TweenUtil.md#interpolationfunction) | usage: 插值函数 default: Interpolation.Linear |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:917

___

### isPaused

▸ **isPaused**(): `boolean`

**`Description`**

获取当前补间对象是否为暂停状态。

**`Effect`**

调用端生效

#### Returns

`boolean`

true-暂停；false-在补间。

#### Defined in

Util/index.d.ts:803

___

### isPlaying

▸ **isPlaying**(): `boolean`

**`Description`**

获取当前补间对象是否在补间过程。没结束补间的情况下，即使暂停，也会返回true。

**`Effect`**

调用端生效

#### Returns

`boolean`

true-在补间过程中；false-不在补间过程，未开始或已结束。

#### Defined in

Util/index.d.ts:797

___

### onComplete

▸ **onComplete**(`callback?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

当补间正常完成（即不停止）时触发，补间对象作为第一个参数传入

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`object`: `T`) => `void` | usage: 要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:969

___

### onRepeat

▸ **onRepeat**(`callback?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

每次补间完成并即将开始下一次重复时触发，补间对象作为第一个参数传入

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`object`: `T`) => `void` | usage: 要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:962

___

### onStart

▸ **onStart**(`callback?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

在补间开始之前触发，补间对象作为第一个参数传入

**`Effect`**

调用端生效

**`Precautions`**

1. 在补间开始之前执行，即在计算之前。
2. 每个补间只能执行一次。当通过 repeat() 重复补间时，它将不会运行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`object`: `T`) => `void` | usage: 要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:947

___

### onStop

▸ **onStop**(`callback?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

当通过 stop() 显式停止补间时触发，补间对象作为第一个参数传入

**`Effect`**

调用端生效

**`Precautions`**

1. 在正常完成时不触发。
2. 在任何可能的链接补间都停止之后才触发。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`object`: `T`) => `void` | usage: 要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:979

___

### onUpdate

▸ **onUpdate**(`callback?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

每次补间更新时触发，补间对象作为第一个参数传入

**`Effect`**

调用端生效

**`Precautions`**

回调触发时，属性已更新完成。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`object`: `T`, `elapsed`: `number`) => `void` | usage: 要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:955

___

### pause

▸ **pause**(`time?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

暂停补间，可以指定暂停生效时间，默认为当前时间

**`Effect`**

调用端生效

**`Precautions`**

接受一个参数 time。如果你使用它，那么暂停不会立即生效，直到特定时刻，否则会尽快暂停（i.e 即在下次调用 update）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` | usage: 暂停生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:846

___

### repeat

▸ **repeat**(`times?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置重复次数, 补间的总次数将是重复参数加上一个初始补间

**`Effect`**

调用端生效

**`Precautions`**

会重置当前的重复次数

**`Example`**

使用示例: 示例
```
tween.repeat(10) // 循环10次
tween.repeat(Infinity) // 无限循环
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `times?` | `number` | usage: 重复次数 default: 0 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:888

___

### repeatDelay

▸ **repeatDelay**(`amount?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置重复补间时的延迟启动时间

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | usage: 延迟时间，单位：ms。 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:895

___

### resume

▸ **resume**(`time?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

恢复补间，可以指定恢复生效时间，默认为当前时间

**`Effect`**

调用端生效

**`Precautions`**

接受一个参数 time。如果你使用它，那么恢复不会立即生效，直到特定时刻，否则会尽快恢复（i.e 即在下次调用 update）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` | usage: 恢复生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:854

___

### start

▸ **start**(`time?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

启动补间，可以指定启动生效时间，默认为当前时间

**`Effect`**

调用端生效

**`Precautions`**

接受一个参数 time。如果你使用它，那么补间不会立即开始，直到特定时刻，否则会尽快启动（i.e 即在下次调用 update）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` | usage: 启动生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:826

___

### stop

▸ **stop**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

停止补间，停止一个从未开始或已经停止的补间没有任何效果。 没有错误被抛出

**`Effect`**

调用端生效

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:832

___

### stopChainedTweens

▸ **stopChainedTweens**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

停止所有链接到当前补间的补间对象

**`Effect`**

调用端生效

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:860

___

### to

▸ **to**(`properties`, `duration?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置补间的目标状态和完成补间需要的时间

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops) | usage: 目标状态 |
| `duration?` | `number` | usage: 完成补间需要的时间，单位：ms。 default: 1000 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:811

___

### update

▸ **update**(`time?`, `autoStart?`): `boolean`

**`Description`**

更新当前的补间。一般来说会由所属的补间组自动调用，无需手动调用。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` | usage: 要绑定的回调函数 default: 当前时间 |
| `autoStart?` | `boolean` | usage: 是否自动开始 default: true |

#### Returns

`boolean`

true-如果当前更新之后尚未结束, false-当前更新之后补间结束

#### Defined in

Util/index.d.ts:987

___

### yoyo

▸ **yoyo**(`yoyo?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

设置往复（悠悠球效果）。这个功能只有在独自使用 repeat 时才有效果。
启用后，补间的行为将像悠悠球一样，会在起始值和结束值之间往复，而不是从头开始重复。

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `yoyo?` | `boolean` | usage: 是否启用yoyo default: false |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

#### Defined in

Util/index.d.ts:903
