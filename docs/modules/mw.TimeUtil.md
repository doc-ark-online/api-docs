[mw](Core.mw.md) / TimeUtil

# TimeUtil <Badge type="tip" text="Namespace" /> <Score text="TimeUtil" />

时间工具

## Table of contents

| Variables |
| :-----|
| **[onEnterFrame](mw.TimeUtil.md#onenterframe)**: [`Action1`](../classes/mw.Action1.md)<`number`\> <br> 帧刷新事件(参数deltaTime)|
| **[traceFrameTime](mw.TimeUtil.md#traceframetime)**: `boolean` <br> 是否输出每帧的执行时间|

| Functions |
| :-----|
| **[clearDelayExecute](mw.TimeUtil.md#cleardelayexecute)**(`id`: `number`): `void` <br> 清除delayExecute|
| **[clearInterval](mw.TimeUtil.md#clearinterval)**(`id`: `number`): `void` <br> 清除setInterval|
| **[delayExecute](mw.TimeUtil.md#delayexecute)**(`handler`: () => `void`, `frameNum?`: `number`): `number` <br> 延迟一定帧数执行方法|
| **[delaySecond](mw.TimeUtil.md#delaysecond)**(`second`: `number`): `Promise`<`void`\> <br> 延迟一定秒数,用于异步方法中间的等待|
| **[elapsedTime](mw.TimeUtil.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[parseTime](mw.TimeUtil.md#parsetime)**(`timeData`: `Date`, `format?`: `string`): `string` <br> 格式化时间戳|
| **[setInterval](mw.TimeUtil.md#setinterval)**(`handler`: () => `void`, `timeout`: `number`, `exitJudge?`: () => `boolean`): `number` <br> 按一定时间间隔执行方法|
| **[time](mw.TimeUtil.md#time)**(): `number` <br> 返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。|

## Variables

### onEnterFrame <Score text="onEnterFrame" /> 

• `Const` **onEnterFrame**: [`Action1`](../classes/mw.Action1.md)<`number`\>

帧刷新事件(参数deltaTime)

::: warning Precautions

每次update自动执行所绑定的方法

:::

使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会每帧输出dt
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        TimeUtil.onEnterFrame.add(this.onEnterFrame, this);
    }

    private onEnterFrame(dt: number): void {
        console.log("dt", dt);
    }

}
```

___

### traceFrameTime <Score text="traceFrameTime" /> 

• **traceFrameTime**: `boolean`

是否输出每帧的执行时间

## Functions

### clearDelayExecute <Score text="clearDelayExecute" /> 

• **clearDelayExecute**(`id`): `void` 

清除delayExecute


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，原本会延迟600帧执行，现在不会执行
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        let id = TimeUtil.delayExecute(() => {
            //延迟600帧执行 pie环境大概10s
            console.log("delay 600execute");
        }, 600)
        TimeUtil.clearDelayExecute(id);
//清除延迟执行
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` |  delayExecute方法返回的ID |


___

### clearInterval <Score text="clearInterval" /> 

• **clearInterval**(`id`): `void` 

清除setInterval


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，原本会每隔2秒执行一次输出id 直到id>5，按下F键后会提前停止
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        let isInterval = false;
        let id = 0;
        let ineterval = TimeUtil.setInterval(() => {
            console.log(id);
            id++;
            if (id > 5) {
                isInterval = true;
            }
        }, 2, () => {
            return isInterval;
        })
        InputUtil.onKeyDown(Keys.F, () => {
            TimeUtil.clearInterval(ineterval);
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` |  setInterval方法返回的ID |


___

### delayExecute <Score text="delayExecute" /> 

• **delayExecute**(`handler`, `frameNum?`): `number` 

延迟一定帧数执行方法


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会延迟600帧执行
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        TimeUtil.delayExecute(() => {
            //延迟600帧执行 pie环境大概10s
            console.log("delay 600execute");
        }, 600)
    }
}
```

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


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会5秒后输出5 seconds later
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        TimeUtil.delaySecond(5).then(() => {
            console.log("5 seconds later");
        })
    }

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

### elapsedTime <Score text="elapsedTime" /> 

• **elapsedTime**(): `number` 

返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。


::: warning Precautions

在 MetaWorld Editor 中，该数值是从每次开始运行起计算，而非从打开 Editor 场景起计算。

:::

使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按F键会输出游戏运行的总时长
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        InputUtil.onKeyDown(Keys.F, () => {
            const elapsedTime = TimeUtil.elapsedTime();
            console.log(`The game ran for ${elapsedTime} seconds`);
        });
    }

}
```

#### Returns

`number`

自游戏运行后所经过的总时长。

___

### parseTime <Score text="parseTime" /> 

• **parseTime**(`timeData`, `format?`): `string` 

格式化时间戳


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出当前时间
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
       this.test();
    }

    private async test(): Promise<void> {
       if (!SystemUtil.isClient()) return;
       const time = TimeUtil.parseTime(new Date());
       console.log(`time:${time}`);
    }

}
```

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


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会每隔2秒执行一次输出id 直到id>5
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        let isInterval = false;
        let id = 0;
        TimeUtil.setInterval(() => {
            console.log(id);
            id++;
            if (id > 5) {
                isInterval = true;
            }
        }, 2, () => {
            return isInterval;
        })
    }

}
```

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

使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出当前时间戳
```ts
@Core.Class
export default class TimeExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        const time = TimeUtil.time();
        console.log(`time stamp:${time}`);
    }

}
```

#### Returns

`number`

（UNIX 纪元）开始所经过的秒数。
