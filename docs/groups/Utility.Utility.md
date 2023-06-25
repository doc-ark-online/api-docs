Utility

# Utility <Badge type="tip" text="Groups" /> <Score text="Utility" />

## Table of contents
| Classes |
| :-----|
| [AnalyticsService](../classes/mw.AnalyticsService.md) <br> 分析服务 |
| [GameObjPool](../classes/mw.GameObjPool.md) <br> GameObject对象池 |
| [LeaderboardItemPanelBase](../classes/mw.LeaderboardItemPanelBase.md) <br> 排行榜主界面中的子UI，用来显示一条记录 |
| [LeaderboardMainPaneBase](../classes/mw.LeaderboardMainPaneBase.md) <br> 排行榜主界面 |
| [LeaderboardModule](../classes/mw.LeaderboardModule.md) <br> 编辑器内置排行榜 |
| [LeaderboardModuleBaseC](../classes/mw.LeaderboardModuleBaseC.md) <br> 排行榜模块-客户端 |
| [LeaderboardModuleBaseS](../classes/mw.LeaderboardModuleBaseS.md) <br> 排行榜模块-服务端 |
| [ModuleC](../classes/mw.ModuleC.md) <br> 客户端模块的基类 |
| [ModuleManager](../classes/mw.ModuleManager.md) <br> 模块管理 |
| [ModuleS](../classes/mw.ModuleS.md) <br> 服务端模块的基类 |
| [ObjPool](../classes/mw.ObjPool.md) <br> 对象池 |
| [SystemUtil](../classes/Core.mw.SystemUtil.SystemUtil.md) <br> 系统设置 |
| [WindowUtil](../classes/mw.WindowUtil.md) <br> 窗口设置 |


| Enums |
| :-----|
| [GameObjPoolSourceType](../enums/mw.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择 |


| Modules Functions |
| :-----|
| **[assetLoaded](Utility.Utility.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[asyncDownloadAsset](Utility.Utility.md#asyncdownloadasset)**(`InAssetId`: `string`): `Promise`<`boolean`\> <br> 资源下载并加载|
| **[clamp](Utility.Utility.md#clamp)**(`a`: `number`, `min`: `number`, `max`: `number`): `number` <br> 将传入的数值a限制在min与max范围内，超出部分自动舍弃|
| **[clearDelayExecute](Utility.Utility.md#cleardelayexecute)**(`id`: `number`): `void` <br> 清除delayExecute|
| **[clearInterval](Utility.Utility.md#clearinterval)**(`id`: `number`): `void` <br> 清除setInterval|
| **[clipboardCopy](Utility.Utility.md#clipboardcopy)**(`text`: `string`): `void` <br> 文本复制，将字符串复制到剪切板|
| **[clipboardPaste](Utility.Utility.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本|
| **[cos](Utility.Utility.md#cos)**(`a`: `number`): `number` <br> 计算cos值|
| **[degreesToRadians](Utility.Utility.md#degreestoradians)**(`a`: `number`): `number` <br> 根据输入的度数返回弧度值|
| **[delayExecute](Utility.Utility.md#delayexecute)**(`handler`: () => `void`, `frameNum?`: `number`): `number` <br> 延迟一定帧数执行方法|
| **[delaySecond](Utility.Utility.md#delaysecond)**(`second`: `number`): `Promise`<`void`\> <br> 延迟一定秒数,用于异步方法中间的等待|
| **[drawGameObjectSelectionBox](Utility.Utility.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](../classes/mw.Vector2.md), `EndPoint`: [`Vector2`](../classes/mw.Vector2.md), `Color`: [`LinearColor`](../classes/mw.LinearColor.md), `DurationTime?`: `number`): `void` <br> 绘制物体选择框|
| **[elapsedTime](Utility.Utility.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[fmod](Utility.Utility.md#fmod)**(`x`: `number`, `y`: `number`): `number` <br> 返回 数值x 除以 数值y 的余数|
| **[format](Utility.Utility.md#format)**(`str`: `string`, `...param`: `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[getGameObjectBySelectionBox](Utility.Utility.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](../classes/mw.Vector2.md), `EndPoint`: [`Vector2`](../classes/mw.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](../classes/mw.HitResult.md)[] <br> 获取框选屏幕位置的物体|
| **[isEmpty](Utility.Utility.md#isempty)**(`str`: `string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[lerp](Utility.Utility.md#lerp)**(`a`: `number`, `b`: `number`, `alpha`: `number`): `number` <br> 基于 alpha 在 数值a 和 数值b 之间线性插值|
| **[maskWordCheck](Utility.Utility.md#maskwordcheck)**(`text`: `string`): `Promise`<[`[maskWordCheck](Utility.Utility.md#maskwordcheck)Result`](Utility.Utility.md#maskwordcheckresult)\> <br> 屏蔽字检测|
| **[parseTime](Utility.Utility.md#parsetime)**(`timeData`: `Date`, `format?`: `string`): `string` <br> 格式化时间戳|
| **[radiansToDegrees](Utility.Utility.md#radianstodegrees)**(`a`: `number`): `number` <br> 根据输入的弧度值返回度数|
| **[randomFloat](Utility.Utility.md#randomfloat)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内浮点数[包含min, 不包含max)|
| **[randomInt](Utility.Utility.md#randomint)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内整数[包含min, 不包含max)|
| **[setGlobalOutlineParams](Utility.Utility.md#setglobaloutlineparams)**(`Width?`: `number`, `CoveredAlpha?`: `number`, `CoveredEdgeAlpha?`: `number`, `NotCoveredAlpha?`: `number`, `NotCoveredEdgeAlpha?`: `number`): `void` <br> 设置全局描边参数|
| **[setInterval](Utility.Utility.md#setinterval)**(`handler`: () => `void`, `timeout`: `number`, `exitJudge?`: () => `boolean`): `number` <br> 按一定时间间隔执行方法|
| **[sin](Utility.Utility.md#sin)**(`a`: `number`): `number` <br> 计算sin值|
| **[tan](Utility.Utility.md#tan)**(`a`: `number`): `number` <br> 计算tan值|
| **[time](Utility.Utility.md#time)**(): `number` <br> 返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。|


| Modules Type Aliases |
| :-----|
| **[LeaderboardPlayerData](Utility.Utility.md#leaderboardplayerdata)**: `Object` <br> 排行榜玩家数据类型|


## Modules Functions


___

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` 

资源是否加载


使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯
```ts
@Core.Class
export default class AssetExample extends Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Vector(0, 0, 0);
            });
        }
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false
___

### asyncDownloadAsset <Score text="asyncDownloadAsset" /> 

• **asyncDownloadAsset**(`InAssetId`): `Promise`<`boolean`\> 

资源下载并加载


使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯
```ts
@Core.Class
export default class AssetExample extends Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Vector(0, 0, 0);
            });
        }
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`Promise`<`boolean`\>

___

### clamp <Score text="clamp" /> 

• **clamp**(`a`, `min`, `max`): `number` 

将传入的数值a限制在min与max范围内，超出部分自动舍弃


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出20的最大值为10的值。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let clamp = MathUtil.clamp(20, 0, 10);
        console.log(`clamp: ${clamp}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 数值a |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

计算结果
___

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

### clipboardCopy <Score text="clipboardCopy" /> 

• **clipboardCopy**(`text`): `void` <Badge type="tip" text="client" />

文本复制，将字符串复制到剪切板


使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将hello world!文本复制到剪切板，此时可以在其他地方粘贴
```ts
@Core.Class
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        StringUtil.clipboardCopy("hello world!");
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |

___

### clipboardPaste <Score text="clipboardPaste" /> 

• **clipboardPaste**(): `string` <Badge type="tip" text="client" />

文本粘贴，获取剪切板的文本


使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会将剪切板的文本打印到控制台
```ts
@Core.Class
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let text = StringUtil.clipboardPaste();
        console.log("clipboardPaste", text);
    }

}
```

#### Returns

`string`

剪切板的文本
___

### cos <Score text="cos" /> 

• **cos**(`a`): `number` 

计算cos值


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出cos值-1。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    //输出弧度制的cos值
    private async test(): Promise<void> {
        let cos = MathUtil.cos(Math.PI);
        console.log(`cos: ${cos}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待计算的数值a |

#### Returns

`number`

cos值
___

### degreesToRadians <Score text="degreesToRadians" /> 

• **degreesToRadians**(`a`): `number` 

根据输入的度数返回弧度值


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出180度角的弧度值。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let degree = 180;
        let radians = MathUtil.degreesToRadians(degree);
        console.log(`degreesToRadians: ${radians}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 度数 |

#### Returns

`number`

弧度值
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

### drawGameObjectSelectionBox <Score text="drawGameObjectSelectionBox" /> 

• **drawGameObjectSelectionBox**(`StartPoint`, `EndPoint`, `Color`, `DurationTime?`): `void` <Badge type="tip" text="client" />

绘制物体选择框


使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会绘制出选择框
```ts
@Core.Class
export default class SelectionExample extends Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<HitResult> = [];
    touch: TouchInput;

    async onStart() {
        this.touch = new TouchInput();
        await asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            }
            else if (type == TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            }
        })
        this.touch.setPlayerController();
    }

    // 开始触摸屏幕，记录初始位置
    onTouchBegin(index: number, location: Vector2) {
        this.touchIndexesStart.set(index, location);
    }

    // 触摸移动, 绘制选择框
    onTouchMove(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        SelectionUtil.drawGameObjectSelectionBox(start, location, LinearColor.red, 0.03);
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/mw.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/mw.Vector2.md) | 鼠标结束位置 |
| `Color` | [`LinearColor`](../classes/mw.LinearColor.md) | 选择框颜色 |
| `DurationTime?` | `number` | 显示时间 default:0.1 |

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

### fmod <Score text="fmod" /> 

• **fmod**(`x`, `y`): `number` 

返回 数值x 除以 数值y 的余数


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出20除以3的余数。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let fmod = MathUtil.fmod(20, 3);
        console.log(`fmod: ${fmod}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 数值x |
| `y` | `number` | 数值y |

#### Returns

`number`

数值x 除以 数值y 的余数
___

### format <Score text="format" /> 

• **format**(`str`, `...param`): `string` 

将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。


使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出hello world!
```ts
@Core.Class
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let targetString = StringUtil.format("{0} {1}{2}", "hello", "world", "!");
        console.log(targetString);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要处理的字符串 |
| `...param` | `any`[] |  替换序列 |

#### Returns

`string`

新的字符串
___

### getGameObjectBySelectionBox <Score text="getGameObjectBySelectionBox" /> 

• **getGameObjectBySelectionBox**(`StartPoint`, `EndPoint`, `IsIncludeNonCollidingObjects?`, `IsUseObjectsBoundingBox?`): [`HitResult`](../classes/mw.HitResult.md)[] <Badge type="tip" text="client" />

获取框选屏幕位置的物体


使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会将框选的物体描边
```ts
@Core.Class
export default class SelectionExample extends Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<HitResult> = [];
    touch: TouchInput;

    async onStart() {
        this.creatObjs();
        this.touch = new TouchInput();
        await asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            } else if (type == TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            } else if (type == TouchInputType.TouchEnd) {
                this.onTouchEnd(index, location);
            }
        })
        this.touch.setPlayerController();
    }

    //在场景中随机生成一些物体，用于框选
    private creatObjs() {
        const cubeAssetId = "7669";
        for (let i = 0;
i < 50;
i++) {
            GameObject.asyncSpawn({ guid: cubeAssetId }).then(obj => {
                obj.worldLocation = new Vector(MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500));
            })
        }
    }

    // 开始触摸屏幕，记录初始位置
    private onTouchBegin(index: number, location: Vector2) {
        this.touchIndexesStart.set(index, location);
    }

    // 触摸移动, 绘制选择框
    private onTouchMove(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        SelectionUtil.drawGameObjectSelectionBox(start, location, LinearColor.red, 0.03);
    }

    // 触摸结束，框选对象
    private onTouchEnd(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        // 取消上一次框选对象的描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Mesh;
            mesh.setOutlineAndColor(false, 1);
        })
        // 框选对象
        this.selectedGoes = SelectionUtil.getGameObjectBySelectionBox(start, location, false, false).filter(result => (result.gameObject instanceof StaticMesh));
        // 未框选对象添加描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Mesh;
            mesh.setOutlineAndColor(true, 1);
            //Gameplay.addOutlineEffect(result.gameObject, LinearColor.red, 1, 0, 1, false, false);
        })
        SelectionUtil.setGlobalOutlineParams(4, 0, 0, 0, 1);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/mw.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/mw.Vector2.md) | 鼠标结束位置 |
| `IsIncludeNonCollidingObjects?` | `boolean` | 是否包含物体非碰撞组件 default:false |
| `IsUseObjectsBoundingBox?` | `boolean` | 是否使用物体包围盒 default:false |

#### Returns

[`HitResult`](../classes/mw.HitResult.md)[]

框选的物体
___

### isEmpty <Score text="isEmpty" /> 

• **isEmpty**(`str`): `boolean` 

判断字符串是否为空(null或"")


使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出isEmpty1: false
```ts
@Core.Class
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let isEmpty1 = StringUtil.isEmpty("hello world!");
        console.log("isEmpty1: " + isEmpty1);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  要判断的字符串 |

#### Returns

`boolean`

结果
___

### lerp <Score text="lerp" /> 

• **lerp**(`a`, `b`, `alpha`): `number` 

基于 alpha 在 数值a 和 数值b 之间线性插值


::: warning Precautions

alpha=0 时 数值a 的 100% 和 alpha=1 时 数值b 的 100%

:::

使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出1和10之间的中间值。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let lerp = MathUtil.lerp(1, 10, 0.5);
        console.log(`lerp: ${lerp}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 数值a |
| `b` | `number` | 数值b |
| `alpha` | `number` | 插值 |

#### Returns

`number`

计算结果
___

### maskWordCheck <Score text="maskWordCheck" /> 

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](mw.StringUtil.md#maskwordcheckresult)\> 

屏蔽字检测


::: warning Precautions

接口中遇到异常情况会返回reject，使用该接口需要用catch处理这种异常情况

:::

使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出屏蔽字检测不通过
```ts
@Core.Class
export default class StringExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        StringUtil.maskWordCheck("自杀之王").then(result => {
            if (!result.result) {
                console.log("屏蔽字检测不通过");
                console.log("命中的文本：" + result.hits);
            }
        }).catch(error => {
            console.log("屏蔽字检测出错");
            console.log(error);
        });
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  要检测的文本 |

#### Returns

`Promise`<[`maskWordCheckResult`](mw.StringUtil.md#maskwordcheckresult)\>

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

### radiansToDegrees <Score text="radiansToDegrees" /> 

• **radiansToDegrees**(`a`): `number` 

根据输入的弧度值返回度数


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出π的度数。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let radian = Math.PI;
        let degrees = MathUtil.radiansToDegrees(radian);
        console.log(`radiansToDegrees: ${degrees}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 弧度值 |

#### Returns

`number`

度数
___

### randomFloat <Score text="randomFloat" /> 

• **randomFloat**(`min`, `max`): `number` 

获取随机范围内浮点数[包含min, 不包含max)


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出1和10之间的随机浮点数。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let randomFloat = MathUtil.randomFloat(1, 10);
        console.log(`randomFloat: ${randomFloat}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

随机范围内的浮点数
___

### randomInt <Score text="randomInt" /> 

• **randomInt**(`min`, `max`): `number` 

获取随机范围内整数[包含min, 不包含max)


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出1和10之间的随机整数。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let randomInt = MathUtil.randomInt(1, 10);
        console.log(`randomInt: ${randomInt}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

随机范围内的整数
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

### sin <Score text="sin" /> 

• **sin**(`a`): `number` 

计算sin值


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出sin值1。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    //输出弧度制的sin值
    private async test(): Promise<void> {
        let sin = MathUtil.sin(Math.PI / 2);
        console.log(`sin: ${sin}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待计算的数值a |

#### Returns

`number`

sin值
___

### tan <Score text="tan" /> 

• **tan**(`a`): `number` 

计算tan值


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出Math.PI / 4的tan值。
```ts
@Core.Class
export default class MathExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    //输出弧度制的tan值
    private async test(): Promise<void> {
        let tan = MathUtil.tan(Math.PI / 4);
        console.log(`tan: ${tan}`);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待计算的数值a |

#### Returns

`number`

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

## Modules Type Aliases


___

### LeaderboardPlayerData <Score text="LeaderboardPlayerData" /> 

Ƭ **LeaderboardPlayerData**: `Object`

排行榜玩家数据类型

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `{ `[fieldId: number]`: `number` \| `string`;  }` | 玩家数据，是一个key-value的结构 |
| `playerId` | `number` | 玩家id |