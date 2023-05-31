Utility

# Utility <Badge type="tip" text="Groups" /> <Score text="Utility" />

## Table of contents
| Classes |
| :-----|
| [EffectService](../classes/Service.EffectService.md) <br> 特效服务 |
| [GameObjPool](../classes/Extension.GameObjPool.md) <br> GameObject对象池 |
| [Group](../classes/Util.Util.TweenUtil.Group.md) <br> 补间组，用于同时控制多个补间对象 |
| [ModuleC](../classes/Extension.ModuleC.md) <br> 客户端模块的基类 |
| [ModuleManager](../classes/Extension.ModuleManager.md) <br> 模块管理 |
| [ModuleS](../classes/Extension.ModuleS.md) <br> 服务端模块的基类 |
| [NetObject](../classes/Extension.NetObject.md) <br> 网络对象 |
| [NetObjectC](../classes/Extension.NetObjectC.md) <br> 客户端的网络对象 |
| [NetObjectS](../classes/Extension.NetObjectS.md) <br> 服务端的网络对象 |
| [ObjPool](../classes/Extension.ObjPool.md) <br> 对象池 |
| [Sequence](../classes/Util.Util.TweenUtil.Sequence.md) <br> 序列工具类，主要用于获取连续的ID |
| [SoundService](../classes/Service.SoundService.md) <br> 音效管理器 |
| [Tween](../classes/Util.Util.TweenUtil.Tween.md) <br> 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 |


| Enums |
| :-----|
| [GameObjPoolSourceType](../enums/Extension.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择 |


| Modules Functions |
| :-----|
| **[assetLoaded](Utility.Utility.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[asyncDownloadAsset](Utility.Utility.md#asyncdownloadasset)**(`InAssetId`: `string`): `Promise`<`boolean`\> <br> 资源下载并加载|
| **[bindButton](Utility.Utility.md#bindbutton)**(`key`: [`Keys`](../enums/Type.Keys.md), `Widget`: [`Button`](../classes/UI.Button.md) \): `void` <br> 绑定按键|
| **[clamp](Utility.Utility.md#clamp)**(`a`: `number`, `min`: `number`, `max`: `number`): `number` <br> 将传入的数值a限制在min与max范围内，超出部分自动舍弃|
| **[clearDelayExecute](Utility.Utility.md#cleardelayexecute)**(`id`: `number`): `void` <br> 清除delayExecute|
| **[clearInterval](Utility.Utility.md#clearinterval)**(`id`: `number`): `void` <br> 清除setInterval|
| **[clipboardCopy](Utility.Utility.md#clipboardcopy)**(`text`: `string`): `void` <br> 文本复制，将字符串复制到剪切板|
| **[clipboardPaste](Utility.Utility.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本|
| **[cos](Utility.Utility.md#cos)**(`a`: `number`): `number` <br> 计算cos值|
| **[degreesToRadians](Utility.Utility.md#degreestoradians)**(`a`: `number`): `number` <br> 根据输入的度数返回弧度值|
| **[delayExecute](Utility.Utility.md#delayexecute)**(`handler`: () => `void`, `frameNum?`: `number`): `number` <br> 延迟一定帧数执行方法|
| **[delaySecond](Utility.Utility.md#delaysecond)**(`second`: `number`): `Promise`<`void`\> <br> 延迟一定秒数,用于异步方法中间的等待|
| **[drawGameObjectSelectionBox](Utility.Utility.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `Color`: [`LinearColor`](../classes/Type.LinearColor.md), `DurationTime?`: `number`): `void` <br> 绘制物体选择框|
| **[elapsedTime](Utility.Utility.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[enableCursorInteractWithUI](Utility.Utility.md#enablecursorinteractwithui)**(`canInteract`: `boolean`): `void` <br> 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](Utility.Utility.md#enablecursorlock)**(`isEnableMouseLock`: `boolean`): `void` <br> 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[fmod](Utility.Utility.md#fmod)**(`x`: `number`, `y`: `number`): `number` <br> 返回 数值x 除以 数值y 的余数|
| **[format](Utility.Utility.md#format)**(`str`: `string`, `...param`: `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[getGameObjectBySelectionBox](Utility.Utility.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取框选屏幕位置的物体|
| **[isCursorInteractiveWithUI](Utility.Utility.md#iscursorinteractivewithui)**(): `boolean` <br> 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](Utility.Utility.md#iscursorlockenabled)**(): `boolean` <br> 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](Utility.Utility.md#iscursorlocked)**(): `boolean` <br> 获取鼠标指针是否锁定|
| **[isCursorVisible](Utility.Utility.md#iscursorvisible)**(): `boolean` <br> 获取鼠标指针是否可见|
| **[isEmpty](Utility.Utility.md#isempty)**(`str`: `string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[lerp](Utility.Utility.md#lerp)**(`a`: `number`, `b`: `number`, `alpha`: `number`): `number` <br> 基于 alpha 在 数值a 和 数值b 之间线性插值|
| **[maskWordCheck](Utility.Utility.md#maskwordcheck)**(`text`: `string`): `Promise`<[`[maskWordCheck](Utility.Utility.md#maskwordcheck)Result`](Utility.Utility.md#maskwordcheckresult)\> <br> 屏蔽字检测|
| **[nextId](Utility.Utility.md#nextid)**(): `number` <br> 获取下一个ID的全局方法|
| **[onKeyDown](Utility.Utility.md#onkeydown)**(`Key`: [`Keys`](../enums/Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-点击|
| **[onKeyPress](Utility.Utility.md#onkeypress)**(`Key`: [`Keys`](../enums/Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-按压|
| **[onKeyUp](Utility.Utility.md#onkeyup)**(`Key`: [`Keys`](../enums/Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.EventListener.md) <br> 键盘输入事件-抬起|
| **[parseTime](Utility.Utility.md#parsetime)**(`timeData`: `Date`, `format?`: `string`): `string` <br> 格式化时间戳|
| **[projectWorldLocationToWidgetPosition](Utility.Utility.md#projectworldlocationtowidgetposition)**(`worldLocation`: [`Vector`](../classes/Type.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[radiansToDegrees](Utility.Utility.md#radianstodegrees)**(`a`: `number`): `number` <br> 根据输入的弧度值返回度数|
| **[randomFloat](Utility.Utility.md#randomfloat)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内浮点数[包含min, 不包含max)|
| **[randomInt](Utility.Utility.md#randomint)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内整数[包含min, 不包含max)|
| **[setCursorLocked](Utility.Utility.md#setcursorlocked)**(`isLock`: `boolean`): `void` <br> 设置鼠标指针是否锁定|
| **[setCursorVisible](Utility.Utility.md#setcursorvisible)**(`isVisible`: `boolean`): `void` <br> 设置鼠标指针是否可见|
| **[setGlobalOutlineParams](Utility.Utility.md#setglobaloutlineparams)**(`Width?`: `number`, `CoveredAlpha?`: `number`, `CoveredEdgeAlpha?`: `number`, `NotCoveredAlpha?`: `number`, `NotCoveredEdgeAlpha?`: `number`): `void` <br> 设置全局描边参数|
| **[setInterval](Utility.Utility.md#setinterval)**(`handler`: () => `void`, `timeout`: `number`, `exitJudge?`: () => `boolean`): `number` <br> 按一定时间间隔执行方法|
| **[setMouseLockable](Utility.Utility.md#setmouselockable)**(`can`: `boolean`): `void` <br> 设置是否可以锁定鼠标|
| **[sin](Utility.Utility.md#sin)**(`a`: `number`): `number` <br> 计算sin值|
| **[tan](Utility.Utility.md#tan)**(`a`: `number`): `number` <br> 计算tan值|
| **[time](Utility.Utility.md#time)**(): `number` <br> 返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。|
| **[unbindButton](Utility.Utility.md#unbindbutton)**(`key`: [`Keys`](../enums/Type.Keys.md)): `void` <br> 此操作只会解绑动态绑定的按键无法解除editor下绑定的按键|


| Modules Variables |
| :-----|
| **[TWEEN](Utility.Utility.md#tween)**: [`Group`](../classes/Util.Util.TweenUtil.Group.md) <br> 全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组|


## Modules Functions


___

### assetLoaded <Score text="assetLoaded" /> 

• **assetLoaded**(`InAssetId`): `boolean` 

资源是否加载


使用示例:创建一个名为AssetExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出7711资源id是否加载的情况，并且会在资源加载完成后在原点处生成一个楼梯
```ts
@Core.Class
export default class AssetExample extends Core.Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = Core.GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Type.Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = Core.GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Type.Vector(0, 0, 0);
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
export default class AssetExample extends Core.Script {

    protected onStart(): void {
        const cubeAssetId = "7711";
        if (AssetUtil.assetLoaded(cubeAssetId)) {
            console.log("AssetExample: Cube asset is already loaded.");
            let obj = Core.GameObject.spawn({ guid: cubeAssetId });
            obj.worldLocation = new Type.Vector(0, 0, 0);
        } else {
            console.log("AssetExample: Cube asset is not loaded, downloading...");
            AssetUtil.asyncDownloadAsset(cubeAssetId).then(() => {
                let obj = Core.GameObject.spawn({ guid: cubeAssetId });
                obj.worldLocation = new Type.Vector(0, 0, 0);
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

下载失败将返回false
___

### bindButton <Score text="bindButton" /> 

• **bindButton**(`key`, `Widget`): `void` <Badge type="tip" text="client" />

绑定按键


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.bindButton(Keys.SpaceBar, btn.button);
        setTimeout(() => {
            InputUtil.unbindButton(Keys.SpaceBar);
        }, 5000);
    }

}

class ButtonUI {
    public button: UI.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UI.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = UI.Canvas.newObject();
        rootCanvas.size = new Type.Vector2(1920, 1080);
        rootCanvas.position = Type.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = UI.StaleButton.newObject(rootCanvas);
        this.button.position = new Type.Vector2(1700, 310);
        this.button.size = new Type.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = Type.LinearColor.red;
        this.button.visibility = UI.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 按键 |
| `Widget` | [`Button`](../classes/UI.Button.md) \| [`StaleButton`](../classes/UI.StaleButton.md) | 绑定的button |

___

### clamp <Score text="clamp" /> 

• **clamp**(`a`, `min`, `max`): `number` 

将传入的数值a限制在min与max范围内，超出部分自动舍弃


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出20的最大值为10的值。
```ts
@Core.Class
export default class MathExample extends Core.Script {

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
export default class TimeExample extends Core.Script {

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
export default class TimeExample extends Core.Script {

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
export default class StringExample extends Core.Script {

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
export default class StringExample extends Core.Script {

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
export default class MathExample extends Core.Script {

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
| `a` | `number` | 待机算的数值a |

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
export default class MathExample extends Core.Script {

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
export default class TimeExample extends Core.Script {

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
export default class TimeExample extends Core.Script {

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
export default class SelectionExample extends Core.Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<Gameplay.HitResult> = [];
    touch: Gameplay.TouchInput;

    async onStart() {
        this.touch = new Gameplay.TouchInput();
        await Gameplay.asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == Gameplay.TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            }
            else if (type == Gameplay.TouchInputType.TouchMove) {
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
        SelectionUtil.drawGameObjectSelectionBox(start, location, Type.LinearColor.red, 0.03);
    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `Color` | [`LinearColor`](../classes/Type.LinearColor.md) | 选择框颜色 |
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
export default class TimeExample extends Core.Script {

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

### enableCursorInteractWithUI <Score text="enableCursorInteractWithUI" /> 

• **enableCursorInteractWithUI**(`canInteract`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否能与UI交互


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，修改鼠标是否可与屏幕UI交互
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorInteractWithUI(!InputUtil.isCursorInteractiveWithUI());
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canInteract` | `boolean` | 可交互 |

___

### enableCursorLock <Score text="enableCursorLock" /> 

• **enableCursorLock**(`isEnableMouseLock`): `void` <Badge type="tip" text="client" />

设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，修改shift是否可控制光标显示
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorLock(!InputUtil.isCursorLockEnabled());
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnableMouseLock` | `boolean` | 是否开始shift键功能,此函数不会直接设置鼠标状态 |

___

### fmod <Score text="fmod" /> 

• **fmod**(`x`, `y`): `number` 

返回 数值x 除以 数值y 的余数


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出20除以3的余数。
```ts
@Core.Class
export default class MathExample extends Core.Script {

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
export default class StringExample extends Core.Script {

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

• **getGameObjectBySelectionBox**(`StartPoint`, `EndPoint`, `IsIncludeNonCollidingObjects?`, `IsUseObjectsBoundingBox?`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <Badge type="tip" text="client" />

获取框选屏幕位置的物体


使用示例:创建一个名为SelectionExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，鼠标左键框选物体，会将框选的物体描边
```ts
@Core.Class
export default class SelectionExample extends Core.Script {

    touchIndexesStart: Map<number, Vector2> = new Map<number, Vector2>();
    selectedGoes: Array<Gameplay.HitResult> = [];
    touch: Gameplay.TouchInput;

    async onStart() {
        this.creatObjs();
        this.touch = new Gameplay.TouchInput();
        await Gameplay.asyncGetCurrentPlayer();
        this.touch.onTouch.add((index, location, type) => {
            console.log("ontouch", index, location, type);
            if (type == Gameplay.TouchInputType.TouchBegin) {
                this.onTouchBegin(index, location);
            } else if (type == Gameplay.TouchInputType.TouchMove) {
                this.onTouchMove(index, location);
            } else if (type == Gameplay.TouchInputType.TouchEnd) {
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
            Core.GameObject.asyncSpawn({ guid: cubeAssetId }).then(obj => {
                obj.worldLocation = new Type.Vector(MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500), MathUtil.randomInt(-500, 500));
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
        SelectionUtil.drawGameObjectSelectionBox(start, location, Type.LinearColor.red, 0.03);
    }

    // 触摸结束，框选对象
    private onTouchEnd(index: number, location: Vector2) {
        let start = this.touchIndexesStart.get(index);
        if (!start) { return;
}
        // 取消上一次框选对象的描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Gameplay.Mesh;
            mesh.setOutlineAndColor(false, 1);
        })
        // 框选对象
        this.selectedGoes = SelectionUtil.getGameObjectBySelectionBox(start, location, false, false).filter(result => (result.gameObject instanceof Gameplay.StaticMesh));
        // 未框选对象添加描边
        this.selectedGoes.forEach(result => {
            let mesh = result.gameObject as Gameplay.Mesh;
            mesh.setOutlineAndColor(true, 1);
            //Gameplay.addOutlineEffect(result.gameObject, Type.LinearColor.red, 1, 0, 1, false, false);
        })
        SelectionUtil.setGlobalOutlineParams(4, 0, 0, 0, 1);
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `StartPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标开始位置 |
| `EndPoint` | [`Vector2`](../classes/Type.Vector2.md) | 鼠标结束位置 |
| `IsIncludeNonCollidingObjects?` | `boolean` | 是否包含物体非碰撞组件 default:false |
| `IsUseObjectsBoundingBox?` | `boolean` | 是否使用物体包围盒 default:false |

#### Returns

[`HitResult`](../classes/Gameplay.HitResult.md)[]

框选的物体
___

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

• **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否能与UI交互


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，修改鼠标是否可与屏幕UI交互
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorInteractWithUI(!InputUtil.isCursorInteractiveWithUI());
        })
    }

}
```

#### Returns

`boolean`

是否能与UI交互
___

### isCursorLockEnabled <Score text="isCursorLockEnabled" /> 

• **isCursorLockEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否允许通过快捷方式切换鼠标的使用组合模式


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，修改shift是否可控制光标显示
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorLock(!InputUtil.isCursorLockEnabled());
        })
    }

}
```

#### Returns

`boolean`

是否可切换
___

### isCursorLocked <Score text="isCursorLocked" /> 

• **isCursorLocked**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否锁定


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，锁定/解锁鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorLocked(!InputUtil.isCursorLocked());
        })
    }

}
```

#### Returns

`boolean`

是否锁定
___

### isCursorVisible <Score text="isCursorVisible" /> 

• **isCursorVisible**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否可见


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，显示/隐藏鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorVisible(!InputUtil.isCursorVisible());
        })
    }

}
```

#### Returns

`boolean`

是否可见
___

### isEmpty <Score text="isEmpty" /> 

• **isEmpty**(`str`): `boolean` 

判断字符串是否为空(null或"")


使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出isEmpty1: false
```ts
@Core.Class
export default class StringExample extends Core.Script {

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
export default class MathExample extends Core.Script {

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

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\> 

屏蔽字检测


::: warning Precautions

接口中遇到异常情况会返回reject，使用该接口需要用catch处理这种异常情况

:::

使用示例:创建一个名为StringExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出屏蔽字检测不通过
```ts
@Core.Class
export default class StringExample extends Core.Script {

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

`Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\>

___

### nextId <Score text="nextId" /> 

• **nextId**(): `number` 

获取下一个ID的全局方法


#### Returns

`number`

___

### onKeyDown <Score text="onKeyDown" /> 

• **onKeyDown**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) 

键盘输入事件-点击


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按下的情况
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        InputUtil.onKeyDown(Keys.F, () => {
            console.log("F key pressed");
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### onKeyPress <Score text="onKeyPress" /> 

• **onKeyPress**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) 

键盘输入事件-按压


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按压的情况
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        InputUtil.onKeyPress(Keys.F, () => {
            console.log("F key up");
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### onKeyUp <Score text="onKeyUp" /> 

• **onKeyUp**(`Key`, `listener`): [`EventListener`](../classes/Events.EventListener.md) 

键盘输入事件-抬起


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被抬起的情况
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        InputUtil.onKeyUp(Keys.F, () => {
            console.log("F key up");
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | [`Keys`](../enums/Type.Keys.md) | 按键值 |
| `listener` | (...`params`: `unknown`[]) => `void` | 监听回调 |

#### Returns

[`EventListener`](../classes/Events.EventListener.md)

返回一个事件监听器
___

### parseTime <Score text="parseTime" /> 

• **parseTime**(`timeData`, `format?`): `string` 

格式化时间戳


使用示例:创建一个名为TimeExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，会输出当前时间
```ts
@Core.Class
export default class TimeExample extends Core.Script {

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

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以将按钮移动到玩家所在位置
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.onKeyDown(Keys.F, async () => {
            let playerPos = (await Gameplay.asyncGetCurrentPlayer()).character.worldLocation;
            let result = InputUtil.projectWorldLocationToWidgetPosition(playerPos);
            if (result) {
                btn.button.position = result.screenPosition;
            }
        })
    }

}

class ButtonUI {
    public button: UI.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UI.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = UI.Canvas.newObject();
        rootCanvas.size = new Type.Vector2(1920, 1080);
        rootCanvas.position = Type.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = UI.StaleButton.newObject(rootCanvas);
        this.button.position = new Type.Vector2(1700, 310);
        this.button.size = new Type.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = Type.LinearColor.red;
        this.button.visibility = UI.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldLocation` | [`Vector`](../classes/Type.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](../classes/Type.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO
___

### radiansToDegrees <Score text="radiansToDegrees" /> 

• **radiansToDegrees**(`a`): `number` 

根据输入的弧度值返回度数


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出π的度数。
```ts
@Core.Class
export default class MathExample extends Core.Script {

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
export default class MathExample extends Core.Script {

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
export default class MathExample extends Core.Script {

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

### setCursorLocked <Score text="setCursorLocked" /> 

• **setCursorLocked**(`isLock`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否锁定


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，锁定/解锁鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorLocked(!InputUtil.isCursorLocked());
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLock` | `boolean` | 是否锁定 |

___

### setCursorVisible <Score text="setCursorVisible" /> 

• **setCursorVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否可见


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，显示/隐藏鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorVisible(!InputUtil.isCursorVisible());
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isVisible` | `boolean` | 是否可见 |

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
export default class TimeExample extends Core.Script {

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

### setMouseLockable <Score text="setMouseLockable" /> 

• **setMouseLockable**(`can`): `void` <Badge type="tip" text="client" />

设置是否可以锁定鼠标


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以通过shift锁定鼠标，按下G键，不可以通过shift锁定鼠标
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        //按下F键，可以通过shift锁定鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setMouseLockable(true);
        })
        //按下G键，不可以通过shift锁定鼠标
        InputUtil.onKeyDown(Keys.G, () => {
            InputUtil.setMouseLockable(false);
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `can` | `boolean` | 是否可以锁定鼠标 |

___

### sin <Score text="sin" /> 

• **sin**(`a`): `number` 

计算sin值


使用示例:创建一个名为MathExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出sin值1。
```ts
@Core.Class
export default class MathExample extends Core.Script {

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
| `a` | `number` | 待机算的数值a |

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
export default class MathExample extends Core.Script {

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
| `a` | `number` | 待机算的数值a |

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
export default class TimeExample extends Core.Script {

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

___

### unbindButton <Score text="unbindButton" /> 

• **unbindButton**(`key`): `void` <Badge type="tip" text="client" />

此操作只会解绑动态绑定的按键无法解除editor下绑定的按键


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑
```ts
@Core.Class
export default class InputExample extends Core.Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.bindButton(Keys.SpaceBar, btn.button);
        setTimeout(() => {
            InputUtil.unbindButton(Keys.SpaceBar);
        }, 5000);
    }

}

class ButtonUI {
    public button: UI.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UI.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = UI.Canvas.newObject();
        rootCanvas.size = new Type.Vector2(1920, 1080);
        rootCanvas.position = Type.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = UI.StaleButton.newObject(rootCanvas);
        this.button.position = new Type.Vector2(1700, 310);
        this.button.size = new Type.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = Type.LinearColor.red;
        this.button.visibility = UI.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 解除绑定的按键 |
## Modules Variables


## Variables

### TWEEN <Score text="TWEEN" /> 

• `Const` **TWEEN**: [`Group`](../classes/Util.Util.TweenUtil.Group.md)

全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组