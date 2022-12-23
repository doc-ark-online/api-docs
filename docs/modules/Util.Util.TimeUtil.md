[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / TimeUtil

# Namespace: TimeUtil

[Util](Util.md).[Util](Util.Util.md).TimeUtil

**`Author`**

huipeng.jia & xiangkun.sun

**`Description`**

时间工具

## Table of contents

### Variables

- [onEnterFrame](Util.Util.TimeUtil.md#onenterframe)
- [traceFrameTime](Util.Util.TimeUtil.md#traceframetime)

### Functions

- [clear](Util.Util.TimeUtil.md#clear)
- [clearDelayExecute](Util.Util.TimeUtil.md#cleardelayexecute)
- [clearInterval](Util.Util.TimeUtil.md#clearinterval)
- [delayExecute](Util.Util.TimeUtil.md#delayexecute)
- [delaySecond](Util.Util.TimeUtil.md#delaysecond)
- [delayTime](Util.Util.TimeUtil.md#delaytime)
- [elapsedTime](Util.Util.TimeUtil.md#elapsedtime)
- [getExecuteTime](Util.Util.TimeUtil.md#getexecutetime)
- [parseTime](Util.Util.TimeUtil.md#parsetime)
- [setInterval](Util.Util.TimeUtil.md#setinterval)
- [time](Util.Util.TimeUtil.md#time)

## Variables

### onEnterFrame

• `Const` **onEnterFrame**: [`Action1`](../classes/Type.Type.FunctionType.Action1.md)<`number`\>

**`Description`**

进入帧事件时执行绑定函数(参数deltaTime)

#### Defined in

Util/index.d.ts:517

___

### traceFrameTime

• **traceFrameTime**: `boolean`

**`Description`**

是否输出每帧的执行时间

#### Defined in

Util/index.d.ts:521

## Functions

### clear

▸ **clear**(): `void`

**`Description`**

清除所有

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Util/index.d.ts:579

___

### clearDelayExecute

▸ **clearDelayExecute**(`id`): `void`

**`Description`**

清除delayExecute

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | usage: delayExecute方法返回的ID |

#### Returns

`void`

#### Defined in

Util/index.d.ts:541

___

### clearInterval

▸ **clearInterval**(`id`): `void`

**`Description`**

清除setInterval

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | usage: setInterval方法返回的ID |

#### Returns

`void`

#### Defined in

Util/index.d.ts:560

___

### delayExecute

▸ **delayExecute**(`handler`, `frameNum?`): `number`

**`Description`**

延迟一定帧数执行方法

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | usage: 执行的方法 |
| `frameNum?` | `number` | usage: 要延迟的帧数 default: 1 |

#### Returns

`number`

用于停止的ID

#### Defined in

Util/index.d.ts:535

___

### delaySecond

▸ **delaySecond**(`second`): `Promise`<`void`\>

**`Description`**

延迟一定秒数,用于异步方法中间的等待，不可取消

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `number` | usage: 时间(单位：秒) |

#### Returns

`Promise`<`void`\>

Promise

#### Defined in

Util/index.d.ts:567

___

### delayTime

▸ **delayTime**(): `number`

**`Description`**

每一帧经过的时间 (单位：秒)

**`Effect`**

调用端生效

#### Returns

`number`

number（单位：秒）

#### Defined in

Util/index.d.ts:527

___

### elapsedTime

▸ **elapsedTime**(): `number`

**`Description`**

返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。

**`Effect`**

调用端生效

**`Precautions`**

在 MetaWorld Editor 中，该数值是从每次开始运行起计算，而非从打开 Editor 场景起计算。

#### Returns

`number`

自游戏运行后所经过的总时长。

#### Defined in

Util/index.d.ts:505

___

### getExecuteTime

▸ **getExecuteTime**(`fn`): `number`

**`Description`**

获取一个方法的执行时间

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | usage: 方法 |

#### Returns

`number`

时间(毫秒)

#### Defined in

Util/index.d.ts:574

___

### parseTime

▸ **parseTime**(`timeData`, `format?`): `string`

**`Description`**

格式化时间戳

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeData` | `Date` | usage:标准时间, 时间戳等 |
| `format?` | `string` | usage:日期字符造串 default:outer |

#### Returns

`string`

格式化后时间字符串

#### Defined in

Util/index.d.ts:513

___

### setInterval

▸ **setInterval**(`handler`, `timeout`, `exitJudge?`): `number`

**`Description`**

按一定时间间隔执行方法

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` | usage: 要执行的方法 |
| `timeout` | `number` | usage: 间隔时间（最小时间为两帧时间差 单位：毫秒） |
| `exitJudge?` | () => `boolean` | usage: 退出的判断方法 返回true停止 default: null |

#### Returns

`number`

用于停止的ID

#### Defined in

Util/index.d.ts:550

___

### time

▸ **time**(): `number`

**`Description`**

返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。

**`Effect`**

调用端生效

**`Precautions`**

UNIX 纪元的开始日期为 1970 年 1 月 1 日。

#### Returns

`number`

（UNIX 纪元）开始所经过的秒数。

#### Defined in

Util/index.d.ts:498
