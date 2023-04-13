[Util](Util.Util.md) / TimeUtil

# TimeUtil <Badge type="tip" text="Namespace" /> <Score text="TimeUtil" />

时间工具

## Table of contents

| Variables |
| :-----|
| **[onEnterFrame](Util.TimeUtil.md#onenterframe)**: [`Action1`](../classes/Type.Action1.md)<`number`\> <br> 帧刷新事件(参数deltaTime)|
| **[traceFrameTime](Util.TimeUtil.md#traceframetime)**: `boolean` <br> 是否输出每帧的执行时间|

| Functions |
| :-----|
| **[clearDelayExecute](Util.TimeUtil.md#cleardelayexecute)**(`id`: `number`): `void` <br> 清除delayExecute|
| **[clearInterval](Util.TimeUtil.md#clearinterval)**(`id`: `number`): `void` <br> 清除setInterval|
| **[delayExecute](Util.TimeUtil.md#delayexecute)**(`handler`: () => `void`, `frameNum?`: `number`): `number` <br> 延迟一定帧数执行方法|
| **[delaySecond](Util.TimeUtil.md#delaysecond)**(`second`: `number`): `Promise`<`void`\> <br> 延迟一定秒数,用于异步方法中间的等待|
| **[delayTime](Util.TimeUtil.md#delaytime)**(): `number` <br> 每一帧经过的时间 (单位：秒)|
| **[elapsedTime](Util.TimeUtil.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[parseTime](Util.TimeUtil.md#parsetime)**(`timeData`: `Date`, `format?`: `string`): `string` <br> 格式化时间戳|
| **[setInterval](Util.TimeUtil.md#setinterval)**(`handler`: () => `void`, `timeout`: `number`, `exitJudge?`: () => `boolean`): `number` <br> 按一定时间间隔执行方法|
| **[time](Util.TimeUtil.md#time)**(): `number` <br> 返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。|

## Variables

### onEnterFrame <Score text="onEnterFrame" /> 

• `Const` **onEnterFrame**: [`Action1`](../classes/Type.Action1.md)<`number`\>

帧刷新事件(参数deltaTime)

::: warning Precautions

每次update自动执行所绑定的方法

:::

使用示例:绑定函数
```ts
onEnterFrame.add((dt : number) =>{
     console.log("dt:" + dt);
});
```

___

### traceFrameTime <Score text="traceFrameTime" /> 

• **traceFrameTime**: `boolean`

是否输出每帧的执行时间

## Functions

### clearDelayExecute <Score text="clearDelayExecute" /> 

• **clearDelayExecute**(`id`): `void` 

清除delayExecute


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` |  delayExecute方法返回的ID |


___

### clearInterval <Score text="clearInterval" /> 

• **clearInterval**(`id`): `void` 

清除setInterval


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` |  setInterval方法返回的ID |


___

### delayExecute <Score text="delayExecute" /> 

• **delayExecute**(`handler`, `frameNum?`): `number` 

延迟一定帧数执行方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` |  执行的方法 |
| `frameNum?` | `number` |  要延迟的帧数 default: 1 |

#### Returns

`number`

用于停止的ID

___

### delaySecond <Score text="delaySecond" /> 

• **delaySecond**(`second`): `Promise`<`void`\> 

延迟一定秒数,用于异步方法中间的等待


使用示例:延迟处理
```ts
async test(): Promise<void> {
     console.log("Do something 1");
     await delaySecond(0.5);
//延迟0.5秒
     console.log("Do something 2");
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `second` | `number` |  时间(单位：秒) |

#### Returns

`Promise`<`void`\>

Promise

___

### delayTime <Score text="delayTime" /> 

• **delayTime**(): `number` 

::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:023 reason:接口废弃,预计v0.25.0移除该接口 replacement:

:::

每一帧经过的时间 (单位：秒)

::: warning Precautions

调用这个函数之前两次Update函数调用之间的间隔时间

:::


#### Returns

`number`

number（单位：秒）

___

### elapsedTime <Score text="elapsedTime" /> 

• **elapsedTime**(): `number` 

返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。


::: warning Precautions

在 MetaWorld Editor 中，该数值是从每次开始运行起计算，而非从打开 Editor 场景起计算。

:::

使用示例:获取并显示游戏运行的总时长
```ts
function test(){
     const elapsedTime = TimeUtil.elapsedTime;
     console.log(`The game ran for ${elapsedTime} seconds`);
}
```

#### Returns

`number`

自游戏运行后所经过的总时长。

___

### parseTime <Score text="parseTime" /> 

• **parseTime**(`timeData`, `format?`): `string` 

格式化时间戳


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeData` | `Date` | 标准时间, 时间戳等 |
| `format?` | `string` | 日期字符造串 default:outer |

#### Returns

`string`

格式化后时间字符串

___

### setInterval <Score text="setInterval" /> 

• **setInterval**(`handler`, `timeout`, `exitJudge?`): `number` 

按一定时间间隔执行方法


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | () => `void` |  要执行的方法 |
| `timeout` | `number` |  间隔时间（最小时间为两帧时间差 单位：秒） |
| `exitJudge?` | () => `boolean` |  退出的判断方法 返回true停止 default: null |

#### Returns

`number`

用于停止的ID

___

### time <Score text="time" /> 

• **time**(): `number` 

返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。


::: warning Precautions

UNIX 纪元的开始日期为 1970 年 1 月 1 日。

:::

使用示例:获取并显示时间戳
```ts
function test(){
     const time = TimeUtil.time;
     console.log(`time stamp:${time}`);
}

#### Returns

`number`

（UNIX 纪元）开始所经过的秒数。
