[mw](Core.mw.md) / SystemUtil

# SystemUtil <Badge type="tip" text="Namespace" /> <Score text="SystemUtil" />

## Table of contents

| Classes |
| :-----|
| [SystemUtil](../classes/Core.mw.SystemUtil.SystemUtil.md) <br> 系统设置|

| Variables |
| :-----|
| **[currentPlatform](mw.SystemUtil.md#currentplatform)**: [`RuntimePlatform`](../enums/mw.RuntimePlatform.md) <br> 判定当前程序的运行平台,返回值参考Type.RuntimePlatform|
| **[isPIE](mw.SystemUtil.md#ispie)**: `boolean` <br> 判定当前程序的运行环境是否为PIE|

| Functions |
| :-----|
| **[getCurrentEnv](mw.SystemUtil.md#getcurrentenv)**(): `string` <br> 获取当前环境|
| **[getEditorVersion](mw.SystemUtil.md#geteditorversion)**(): `string` <br> 获取编辑器版本号|
| **[getFullEditorVersion](mw.SystemUtil.md#getfulleditorversion)**(): `string` <br> 获取完整编辑器版本号|
| **[getGameId](mw.SystemUtil.md#getgameid)**(): `string` <br> 获取当前游戏GameId|
| **[getVersion](mw.SystemUtil.md#getversion)**(): `string` <br> 获取当前游戏版本|
| **[isClient](mw.SystemUtil.md#isclient)**(): `boolean` <br> 是否客户端运行|
| **[isMobile](mw.SystemUtil.md#ismobile)**(): `boolean` <br> 判断当前是否是移动端|
| **[isServer](mw.SystemUtil.md#isserver)**(): `boolean` <br> 是否服务器运行|

## Variables

### currentPlatform <Score text="currentPlatform" /> 

• `Const` **currentPlatform**: [`RuntimePlatform`](../enums/mw.RuntimePlatform.md) 

判定当前程序的运行平台,返回值参考Type.RuntimePlatform


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前程序的运行平台", SystemUtil.currentPlatform)
    }

}
```

___

### isPIE <Score text="isPIE" /> 

• `Const` **isPIE**: `boolean` 

判定当前程序的运行环境是否为PIE


## Functions

### getCurrentEnv <Score text="getCurrentEnv" /> 

• **getCurrentEnv**(): `string` 

获取当前环境


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前环境", SystemUtil.getCurrentEnv())
    }

}
```

#### Returns

`string`

当前环境,返回值包含(Dev/Test/Meta/Pre/Online/dev-oversea/test-oversea/pre-oversea/online-oversea/tc-sa-saopaulo-playza)

___

### getEditorVersion <Score text="getEditorVersion" /> 

• **getEditorVersion**(): `string` 

获取编辑器版本号


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前编辑器版本号打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前编辑器版本号", SystemUtil.getEditorVersion())
    }

}
```

#### Returns

`string`

当前编辑器版本号

___

### getFullEditorVersion <Score text="getFullEditorVersion" /> 

• **getFullEditorVersion**(): `string` 

获取完整编辑器版本号


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前完整编辑器版本号打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前完整编辑器版本号", SystemUtil.getFullEditorVersion())
    }

}
```

#### Returns

`string`

当前完整编辑器版本号

___

### getGameId <Score text="getGameId" /> 

• **getGameId**(): `string` 

获取当前游戏GameId


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏GameId pc端输出为空，移动端输出为游戏GameId
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        const gameId = SystemUtil.getGameId();
        console.log(`gameId: ${gameId}`);
    }

}
```

#### Returns

`string`

当前游戏GameId

___

### getVersion <Score text="getVersion" /> 

• **getVersion**(): `string` 

获取当前游戏版本


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，输出当前游戏版本 pc端输出为空，移动端输出为游戏版本
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (!SystemUtil.isClient()) return;
        const version = SystemUtil.getVersion();
        console.log(`version: ${version}`);
    }

}
```

#### Returns

`string`

当前游戏版本

___

### isClient <Score text="isClient" /> 

• **isClient**(): `boolean` 

是否客户端运行


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```

#### Returns

`boolean`

是否客户端运行

___

### isMobile <Score text="isMobile" /> 

• **isMobile**(): `boolean` 

判断当前是否是移动端


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前是否是移动端打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        console.log("当前是否是移动端", SystemUtil.isMobile())
    }

}
```

#### Returns

`boolean`

是否是移动端

___

### isServer <Score text="isServer" /> 

• **isServer**(): `boolean` 

是否服务器运行


使用示例:创建一个名为SystemExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将当前运行环境打印到控制台
```ts
@Core.Class
export default class SystemExample extends Script {

    protected onStart(): void {
        this.test();
    }

    private async test(): Promise<void> {
        if (SystemUtil.isClient()) {
            console.log("当前是客户端");
        } else if (SystemUtil.isServer()) {
            console.log("当前是服务端");
        }
    }

}
```

#### Returns

`boolean`

是否服务器运行
