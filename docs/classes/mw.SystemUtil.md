[工具](../groups/工具.工具.md) / SystemUtil

# SystemUtil <Badge type="tip" text="Class" /> <Score text="SystemUtil" />

状态信息获取工具

判断当前环境状态是否是客户端、服务端、移动端。获取版本号等信息

## Table of contents

### Properties <Score text="Properties" /> 
| **[currentPlatform](mw.SystemUtil.md#currentplatform)**: [`RuntimePlatform`](../enums/mw.RuntimePlatform.md)   |
| :-----|
| 判定当前程序的运行平台,返回值参考Type.RuntimePlatform|
| **[isPIE](mw.SystemUtil.md#ispie)**: `boolean`   |
| 判断当前是否是编辑器运行模式|

### Accessors <Score text="Accessors" /> 
| **[onExit](mw.SystemUtil.md#onexit)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| :-----|
| 添加退出游戏时执行的回调函数|
| **[onPause](mw.SystemUtil.md#onpause)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />  |
| 添加OnPause开始时执行的回调函数|
| **[onResume](mw.SystemUtil.md#onresume)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`leaveDuration`: `any`) => `void`\> <Badge type="tip" text="client" />  |
| 添加OnPause结束时执行的回调函数|

### Methods <Score text="Methods" /> 
| **[getCurrentEnv](mw.SystemUtil.md#getcurrentenv)**(): `string`   |
| :-----|
| 获取当前环境|
| **[getEditorVersion](mw.SystemUtil.md#geteditorversion)**(): `string`   |
| 获取编辑器版本号|
| **[getFullEditorVersion](mw.SystemUtil.md#getfulleditorversion)**(): `string`   |
| 获取完整编辑器版本号|
| **[getGameId](mw.SystemUtil.md#getgameid)**(): `string`   |
| 获取当前游戏GameId|
| **[getVersion](mw.SystemUtil.md#getversion)**(): `string`   |
| 获取当前游戏版本|
| **[isClient](mw.SystemUtil.md#isclient)**(): `boolean`   |
| 是否客户端运行|
| **[isMobile](mw.SystemUtil.md#ismobile)**(): `boolean`   |
| 判断当前是否是移动端|
| **[isServer](mw.SystemUtil.md#isserver)**(): `boolean`   |
| 是否服务器运行|

## Properties

### currentPlatform <Score text="currentPlatform" /> 

▪ `Static` **currentPlatform**: [`RuntimePlatform`](../enums/mw.RuntimePlatform.md) 

判定当前程序的运行平台,返回值参考Type.RuntimePlatform

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        console.log("当前程序的运行平台", SystemUtil.currentPlatform)
    }

}
```

___

### isPIE <Score text="isPIE" /> 

▪ `Static` **isPIE**: `boolean` 

判断当前是否是编辑器运行模式

## Accessors

### onExit <Score text="onExit" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onExit**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


添加退出游戏时执行的回调函数

::: warning Precautions

只在233悬浮球退出和PIE关闭窗口时生效。悬浮球退出会计时5s，5s后会强制杀进程.

:::

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回一个事件监听器 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onPause <Score text="onPause" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onPause**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


添加OnPause开始时执行的回调函数

::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> | 返回一个事件监听器 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

___

### onResume <Score text="onResume" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **onResume**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`leaveDuration`: `any`) => `void`\> <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


添加OnPause结束时执行的回调函数

::: warning Precautions

只在Android和IOS生效。触发时机有切入后台、息屏和播广告后回到游戏。
             部分机型切入后台不会暂停游戏所以不会触发该回调或暂停时间很短，可以通过游戏背景音乐是否持续播放来判断。

:::

#### Returns

</td>
</tr></tbody>
</table>

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`leaveDuration`: `any`) => `void`\> | 返回一个事件监听器 |
| :------ | :------ |

## Methods

### getCurrentEnv <Score text="getCurrentEnv" /> 

• `Static` **getCurrentEnv**(): `string` 

获取当前环境

#### Returns

| `string` | 当前环境,返回值包含(Dev/Test/Meta/Pre/Online/dev-oversea/test-oversea/pre-oversea/online-oversea/tc-sa-saopaulo-playza) |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前环境打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        console.log("当前环境", SystemUtil.getCurrentEnv())
    }

}
```

___

### getEditorVersion <Score text="getEditorVersion" /> 

• `Static` **getEditorVersion**(): `string` 

获取编辑器版本号

#### Returns

| `string` | 当前编辑器版本号 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前编辑器版本号打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        console.log("当前编辑器版本号", SystemUtil.getEditorVersion())
    }

}
```

___

### getFullEditorVersion <Score text="getFullEditorVersion" /> 

• `Static` **getFullEditorVersion**(): `string` 

获取完整编辑器版本号

#### Returns

| `string` | 当前完整编辑器版本号 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前完整编辑器版本号打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        console.log("当前完整编辑器版本号", SystemUtil.getFullEditorVersion())
    }

}
```

___

### getGameId <Score text="getGameId" /> 

• `Static` **getGameId**(): `string` 

获取当前游戏GameId

#### Returns

| `string` | 当前游戏GameId |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏GameId pc端输出为空，移动端输出为游戏GameId
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        if (!SystemUtil.isClient()) return;
        const gameId = SystemUtil.getGameId();
        console.log(`gameId: ${gameId}`);
    }

}
```

___

### getVersion <Score text="getVersion" /> 

• `Static` **getVersion**(): `string` 

获取当前游戏版本

#### Returns

| `string` | 当前游戏版本 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏版本 pc端输出为空，移动端输出为游戏版本
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        if (!SystemUtil.isClient()) return;
        const version = SystemUtil.getVersion();
        console.log(`version: ${version}`);
    }

}
```

___

### isClient <Score text="isClient" /> 

• `Static` **isClient**(): `boolean` 

是否客户端运行

#### Returns

| `boolean` | 是否客户端运行 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```

___

### isMobile <Score text="isMobile" /> 

• `Static` **isMobile**(): `boolean` 

判断当前是否是移动端

#### Returns

| `boolean` | 是否是移动端 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前是否是移动端打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        console.log("当前是否是移动端", SystemUtil.isMobile())
    }

}
```

___

### isServer <Score text="isServer" /> 

• `Static` **isServer**(): `boolean` 

是否服务器运行

#### Returns

| `boolean` | 是否服务器运行 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
</span>

```ts
@Component
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```
