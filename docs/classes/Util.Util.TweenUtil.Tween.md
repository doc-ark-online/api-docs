[Util](../modules/Util.Util.md) / [TweenUtil](../modules/Util.Util.TweenUtil.md) / Tween

# Tween<T\> <Badge type="tip" text="Class" />

**`Description`**

补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。
你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，
补间引擎将负责计算从起始点到结束点的值。

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops) |

## Table of contents

| Methods |
| :-----|
| **[chain](Util.Util.TweenUtil.Tween.md#chain)**([`Tween`](Util.Util.TweenUtil.Tween.md)<`any`\>[]): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 将（多个）补间对象链接到当前补间对象。在当前补间结束的时候立即启动链接的补间|
| **[delay](Util.Util.TweenUtil.Tween.md#delay)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 延迟启动|
| **[duration](Util.Util.TweenUtil.Tween.md#duration)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置完成补间需要的时间（周期）|
| **[easing](Util.Util.TweenUtil.Tween.md#easing)**(`[easing](Util.Util.TweenUtil.Tween.md#easing)Function?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置缓动函数|
| **[end](Util.Util.TweenUtil.Tween.md#end)**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 将当前补间置为目标状态|
| **[getID](Util.Util.TweenUtil.Tween.md#getid)**(): `number` <br> 获取当前补间对象的ID|
| **[group](Util.Util.TweenUtil.Tween.md#group)**(`[group](Util.Util.TweenUtil.Tween.md#group)?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置当前补间对象的分组|
| **[interpolation](Util.Util.TweenUtil.Tween.md#interpolation)**(`[interpolation](Util.Util.TweenUtil.Tween.md#interpolation)Function?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置插值函数|
| **[isPaused](Util.Util.TweenUtil.Tween.md#ispaused)**(): `boolean` <br> 获取当前补间对象是否为暂停状态。|
| **[isPlaying](Util.Util.TweenUtil.Tween.md#isplaying)**(): `boolean` <br> 获取当前补间对象是否在补间过程。没结束补间的情况下，即使暂停，也会返回true。|
| **[onComplete](Util.Util.TweenUtil.Tween.md#oncomplete)**((`object`: `T`) => `void`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 当补间正常完成（即不停止）时触发，补间对象作为第一个参数传入|
| **[onRepeat](Util.Util.TweenUtil.Tween.md#onrepeat)**((`object`: `T`) => `void`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 每次补间完成并即将开始下一次重复时触发，补间对象作为第一个参数传入|
| **[onStart](Util.Util.TweenUtil.Tween.md#onstart)**((`object`: `T`) => `void`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 在补间开始之前触发，补间对象作为第一个参数传入|
| **[onStop](Util.Util.TweenUtil.Tween.md#onstop)**((`object`: `T`) => `void`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 当通过 stop() 显式停止补间时触发，补间对象作为第一个参数传入|
| **[onUpdate](Util.Util.TweenUtil.Tween.md#onupdate)**((`object`: `T`, `elapsed`: `number`) => `void`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 每次补间更新时触发，补间对象作为第一个参数传入|
| **[pause](Util.Util.TweenUtil.Tween.md#pause)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 暂停补间，可以指定暂停生效时间，默认为当前时间|
| **[repeat](Util.Util.TweenUtil.Tween.md#repeat)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置重复次数, 补间的总次数将是重复参数加上一个初始补间|
| **[repeatDelay](Util.Util.TweenUtil.Tween.md#repeatdelay)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置重复补间时的延迟启动时间|
| **[resume](Util.Util.TweenUtil.Tween.md#resume)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 恢复补间，可以指定恢复生效时间，默认为当前时间|
| **[start](Util.Util.TweenUtil.Tween.md#start)**(`number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 启动补间，可以指定启动生效时间，默认为当前时间|
| **[stop](Util.Util.TweenUtil.Tween.md#stop)**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 停止补间，停止一个从未开始或已经停止的补间没有任何效果。 没有错误被抛出|
| **[stopChainedTweens](Util.Util.TweenUtil.Tween.md#stopchainedtweens)**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 停止所有链接到当前补间的补间对象|
| **[to](Util.Util.TweenUtil.Tween.md#to)**([`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops), `number`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置补间的目标状态和完成补间需要的时间|
| **[update](Util.Util.TweenUtil.Tween.md#update)**(`number`, `boolean`): `boolean` <br> 更新当前的补间。一般来说会由所属的补间组自动调用，无需手动调用。|
| **[yoyo](Util.Util.TweenUtil.Tween.md#yoyo)**(`[yoyo](Util.Util.TweenUtil.Tween.md#yoyo)?`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\> <br> 设置往复（悠悠球效果）。这个功能只有在独自使用 repeat 时才有效果。|

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
| `obj` | `T` |  要创建补间的对象类型 |
| `group?` | ``false`` \| [`Group`](Util.Util.TweenUtil.Group.md) |  要创建的补间对象的分组 default: mainGroup |

## Methods

### chain

▸ **chain**(`...tweens`): [`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

**`Description`**

将（多个）补间对象链接到当前补间对象。在当前补间结束的时候立即启动链接的补间

**`Effect`**

调用端生效

**`Example`**

使用示例: 示例
```ts
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
| `...tweens` | [`Tween`](Util.Util.TweenUtil.Tween.md)<`any`\>[] |  要链接的补间对象（数组） |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `amount?` | `number` |  延迟时间，单位：ms。 default: 0 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `d?` | `number` |  完成补间需要的时间，单位：ms。 default: 1000 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `easingFunction?` | [`EasingFunction`](../modules/Util.Util.TweenUtil.md#easingfunction) |  缓动函数 default: Easing.Linear.None |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `group?` | [`Group`](Util.Util.TweenUtil.Group.md) |  新的分组 default: mainGroup |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `interpolationFunction?` | [`InterpolationFunction`](../modules/Util.Util.TweenUtil.md#interpolationfunction) |  插值函数 default: Interpolation.Linear |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `callback?` | (`object`: `T`) => `void` |  要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `callback?` | (`object`: `T`) => `void` |  要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `callback?` | (`object`: `T`) => `void` |  要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `callback?` | (`object`: `T`) => `void` |  要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `callback?` | (`object`: `T`, `elapsed`: `number`) => `void` |  要绑定的回调函数 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `time?` | `number` |  暂停生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
```ts
tween.repeat(10) // 循环10次
tween.repeat(Infinity) // 无限循环
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `times?` | `number` |  重复次数 default: 0 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `amount?` | `number` |  延迟时间，单位：ms。 default: undefined |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `time?` | `number` |  恢复生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `time?` | `number` |  启动生效时间 default: 当前时间 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `properties` | [`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops) |  目标状态 |
| `duration?` | `number` |  完成补间需要的时间，单位：ms。 default: 1000 |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用

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
| `time?` | `number` |  要绑定的回调函数 default: 当前时间 |
| `autoStart?` | `boolean` |  是否自动开始 default: true |

#### Returns

`boolean`

true-如果当前更新之后尚未结束, false-当前更新之后补间结束

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
| `yoyo?` | `boolean` |  是否启用yoyo default: false |

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<`T`\>

当前补间对象，可链式调用
