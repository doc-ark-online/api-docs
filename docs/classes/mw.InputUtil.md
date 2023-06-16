[Utility](../groups/Core.Utility.md) / InputUtil

# InputUtil <Badge type="tip" text="Class" /> <Score text="InputUtil" />

使用示例:创建一个名为"InputExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,点击键盘1键及屏幕，你将看到Input相关效果.代码如下:
```ts
@Core.Class
export default class InputExample extends Script {
    protected onStart(): void {
        InputUtil.onKeyDown(Keys.One, () => {
            console.error(`===>onKeyDown: Keys.One`);
        });
        InputUtil.onKeyUp(Keys.One, () => {
            console.error(`===>onKeyUp: Keys.One`);
        });
        InputUtil.onKeyPress(Keys.One, () => {
            console.error(`===>onKeyPress: Keys.One`);
        });
        InputUtil.onTouch((index: number, location: Vector2, touchType: TouchInputType) => {
            console.error(`===>onTouch: ${index}, ${location}, ${touchType}`);
        });
        InputUtil.onTouchBegin((index: number, location: Vector2, touchType: TouchInputType) => {
            console.error(`===>onTouchBegin: ${index}, ${location}, ${touchType}`);
        });
        InputUtil.onTouchMove((index: number, location: Vector2, touchType: TouchInputType) => {
            console.error(`===>onTouchMove: ${index}, ${location}, ${touchType}`);
        });
        InputUtil.onTouchEnd((index: number, location: Vector2, touchType: TouchInputType) => {
            console.error(`===>onTouchEnd: ${index}, ${location}, ${touchType}`);
        });
    }
}
```

## Table of contents

| Methods |
| :-----|
| **[bindButton](mw.InputUtil.md#bindbutton)**(`key`: [`Keys`](../enums/mw.Keys.md), `Widget`: [`Button`](mw.Button.md) \): `void` <br> 绑定按键|
| **[convertScreenLocationToWorldSpace](mw.InputUtil.md#convertscreenlocationtoworldspace)**(`screenX`: `number`, `screenY`: `number`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) <br> 将二维屏幕位置转换为世界空间三维位置和方向|
| **[enableCursorInteractWithUI](mw.InputUtil.md#enablecursorinteractwithui)**(`canInteract`: `boolean`): `void` <br> 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](mw.InputUtil.md#enablecursorlock)**(`isEnableMouseLock`: `boolean`): `void` <br> 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[isCursorInteractiveWithUI](mw.InputUtil.md#iscursorinteractivewithui)**(): `boolean` <br> 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](mw.InputUtil.md#iscursorlockenabled)**(): `boolean` <br> 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](mw.InputUtil.md#iscursorlocked)**(): `boolean` <br> 获取鼠标指针是否锁定|
| **[isCursorVisible](mw.InputUtil.md#iscursorvisible)**(): `boolean` <br> 获取鼠标指针是否可见|
| **[onKeyDown](mw.InputUtil.md#onkeydown)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md) <br> 键盘输入事件-点击|
| **[onKeyPress](mw.InputUtil.md#onkeypress)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md) <br> 键盘输入事件-按压|
| **[onKeyUp](mw.InputUtil.md#onkeyup)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md) <br> 键盘输入事件-抬起|
| **[onTouch](mw.InputUtil.md#ontouch)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <br> 触摸事件|
| **[onTouchBegin](mw.InputUtil.md#ontouchbegin)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <br> 触摸开始事件|
| **[onTouchEnd](mw.InputUtil.md#ontouchend)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <br> 触摸结束事件|
| **[onTouchMove](mw.InputUtil.md#ontouchmove)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <br> 触摸移动事件|
| **[projectWorldLocationToWidgetPosition](mw.InputUtil.md#projectworldlocationtowidgetposition)**(`worldLocation`: [`Vector`](mw.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[setCursorLocked](mw.InputUtil.md#setcursorlocked)**(`isLock`: `boolean`): `void` <br> 设置鼠标指针是否锁定|
| **[setCursorVisible](mw.InputUtil.md#setcursorvisible)**(`isVisible`: `boolean`): `void` <br> 设置鼠标指针是否可见|
| **[setMouseLockable](mw.InputUtil.md#setmouselockable)**(`can`: `boolean`): `void` <br> 设置是否可以锁定鼠标|
| **[unbindButton](mw.InputUtil.md#unbindbutton)**(`key`: [`Keys`](../enums/mw.Keys.md)): `void` <br> 此操作只会解绑动态绑定的按键无法解除editor下绑定的按键|

## Methods

### bindButton <Score text="bindButton" /> 

• `Static` **bindButton**(`key`, `Widget`): `void` <Badge type="tip" text="client" />

绑定按键


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑
```ts
@Core.Class
export default class InputExample extends Script {

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
    public button: StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = Canvas.newObject();
        rootCanvas.size = new Vector2(1920, 1080);
        rootCanvas.position = Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = StaleButton.newObject(rootCanvas);
        this.button.position = new Vector2(1700, 310);
        this.button.size = new Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = LinearColor.red;
        this.button.visibility = SlateVisibility.Visible;

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
| `key` | [`Keys`](../enums/mw.Keys.md) | 按键 |
| `Widget` | [`Button`](mw.Button.md) \| [`StaleButton`](mw.StaleButton.md) | 绑定的button |


___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• `Static` **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以在屏幕中心位置发出一条射线，射线方向为屏幕中心位置指向屏幕外1000米处
```ts
@Core.Class
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        InputUtil.onKeyDown(Keys.F, () => {
            const result = InputUtil.convertScreenLocationToWorldSpace(960, 540);
            const startLoc = result.worldLocation;
            const dir = result.worldDirection;
            const endLoc = Vector.add(startLoc, dir.multiply(1000));
            lineTrace(startLoc, endLoc, true, true);
        })
    }

}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenX` | `number` |  屏幕X轴坐标值 default: |
| `screenY` | `number` |  屏幕Y轴坐标值 |

#### Returns

[`ConvertScreenResult`](mw.ConvertScreenResult.md)

屏幕坐标转换结果

___

### enableCursorInteractWithUI <Score text="enableCursorInteractWithUI" /> 

• `Static` **enableCursorInteractWithUI**(`canInteract`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否能与UI交互


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效
```ts
@Core.Class
export default class InputExample extends Script {

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

• `Static` **enableCursorLock**(`isEnableMouseLock`): `void` <Badge type="tip" text="client" />

设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示
```ts
@Core.Class
export default class InputExample extends Script {

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

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

• `Static` **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否能与UI交互


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效
```ts
@Core.Class
export default class InputExample extends Script {

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

• `Static` **isCursorLockEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否允许通过快捷方式切换鼠标的使用组合模式


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示
```ts
@Core.Class
export default class InputExample extends Script {

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

• `Static` **isCursorLocked**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否锁定


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外
```ts
@Core.Class
export default class InputExample extends Script {

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

• `Static` **isCursorVisible**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否可见


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见
```ts
@Core.Class
export default class InputExample extends Script {

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

### onKeyDown <Score text="onKeyDown" /> 

• `Static` **onKeyDown**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-点击


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按下的情况
```ts
@Core.Class
export default class InputExample extends Script {

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
| `Key` | [`Keys`](../enums/mw.Keys.md) | 按键值 |
| `listener` | () => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onKeyPress <Score text="onKeyPress" /> 

• `Static` **onKeyPress**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-按压


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按压的情况
```ts
@Core.Class
export default class InputExample extends Script {

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
| `Key` | [`Keys`](../enums/mw.Keys.md) | 按键值 |
| `listener` | () => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onKeyUp <Score text="onKeyUp" /> 

• `Static` **onKeyUp**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-抬起


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被抬起的情况
```ts
@Core.Class
export default class InputExample extends Script {

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
| `Key` | [`Keys`](../enums/mw.Keys.md) | 按键值 |
| `listener` | () => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onTouch <Score text="onTouch" /> 

• `Static` **onTouch**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onTouchBegin <Score text="onTouchBegin" /> 

• `Static` **onTouchBegin**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸开始事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onTouchEnd <Score text="onTouchEnd" /> 

• `Static` **onTouchEnd**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸结束事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### onTouchMove <Score text="onTouchMove" /> 

• `Static` **onTouchMove**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸移动事件


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |

#### Returns

[`EventListener`](mw.EventListener.md)

返回一个事件监听器

___

### projectWorldLocationToWidgetPosition <Score text="projectWorldLocationToWidgetPosition" /> 

• `Static` **projectWorldLocationToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以将按钮移动到玩家所在位置
```ts
@Core.Class
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.onKeyDown(Keys.F, async () => {
            let playerPos = (await asyncGetCurrentPlayer()).character.worldLocation;
            let result = InputUtil.projectWorldLocationToWidgetPosition(playerPos);
            if (result) {
                btn.button.position = result.screenPosition;
            }
        })
    }

}

class ButtonUI {
    public button: StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = Canvas.newObject();
        rootCanvas.size = new Vector2(1920, 1080);
        rootCanvas.position = Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = StaleButton.newObject(rootCanvas);
        this.button.position = new Vector2(1700, 310);
        this.button.size = new Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = LinearColor.red;
        this.button.visibility = SlateVisibility.Visible;

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
| `worldLocation` | [`Vector`](mw.Vector.md) |  世界坐标 |
| `playerViewportRelative?` | `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

[`ConvertScreenResult`](mw.ConvertScreenResult.md)

屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO

___

### setCursorLocked <Score text="setCursorLocked" /> 

• `Static` **setCursorLocked**(`isLock`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否锁定


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外
```ts
@Core.Class
export default class InputExample extends Script {

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

• `Static` **setCursorVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否可见


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见
```ts
@Core.Class
export default class InputExample extends Script {

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

### setMouseLockable <Score text="setMouseLockable" /> 

• `Static` **setMouseLockable**(`can`): `void` <Badge type="tip" text="client" />

设置是否可以锁定鼠标


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以通过shift锁定鼠标，按下G键，不可以通过shift锁定鼠标
```ts
@Core.Class
export default class InputExample extends Script {

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

### unbindButton <Score text="unbindButton" /> 

• `Static` **unbindButton**(`key`): `void` <Badge type="tip" text="client" />

此操作只会解绑动态绑定的按键无法解除editor下绑定的按键


使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑
```ts
@Core.Class
export default class InputExample extends Script {

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
    public button: StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = Canvas.newObject();
        rootCanvas.size = new Vector2(1920, 1080);
        rootCanvas.position = Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = StaleButton.newObject(rootCanvas);
        this.button.position = new Vector2(1700, 310);
        this.button.size = new Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = LinearColor.red;
        this.button.visibility = SlateVisibility.Visible;

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
| `key` | [`Keys`](../enums/mw.Keys.md) | 解除绑定的按键 |

