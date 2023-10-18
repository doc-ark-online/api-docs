[INPUT](../groups/Core.INPUT.md) / InputUtil

# InputUtil <Badge type="tip" text="Class" /> <Score text="InputUtil" />

<span class="content-big">

输入事件工具

</span>

<span style="font-size: 14px;">

使用示例:创建一个名为"InputExample"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,点击键盘1键及屏幕，你将看到Input相关效果.代码如下:

</span>

```ts
@Component
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

### Constructors <Score text="Constructors" /> 
| **new InputUtil**()  |
| :----- |

### Accessors <Score text="Accessors" /> 
| **[enableCursorInteractWithUI](mw.InputUtil.md#enablecursorinteractwithui)**(`canInteract`: `boolean`): `void`  |
| :-----|
| 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](mw.InputUtil.md#enablecursorlock)**(`isEnableMouseLock`: `boolean`): `void`  |
| 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[isCursorInteractiveWithUI](mw.InputUtil.md#iscursorinteractivewithui)**(): `boolean`  |
| 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](mw.InputUtil.md#iscursorlockenabled)**(): `boolean`  |
| 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](mw.InputUtil.md#iscursorlocked)**(): `boolean`  |
| 获取鼠标指针是否锁定|
| **[isCursorVisible](mw.InputUtil.md#iscursorvisible)**(): `boolean`  |
| 获取鼠标指针是否可见|
| **[setCursorLocked](mw.InputUtil.md#setcursorlocked)**(`isLock`: `boolean`): `void`  |
| 设置鼠标指针是否锁定|
| **[setCursorVisible](mw.InputUtil.md#setcursorvisible)**(`isVisible`: `boolean`): `void`  |
| 设置鼠标指针是否可见|
| **[setMouseLockable](mw.InputUtil.md#setmouselockable)**(`can`: `boolean`): `void`  |
| 设置是否可以锁定鼠标|

### Methods <Score text="Methods" /> 
| **[bindButton](mw.InputUtil.md#bindbutton)**(`key`: [`Keys`](../enums/mw.Keys.md), `Widget`: [`StaleButton`](mw.StaleButton.md) \): `void`  |
| :-----|
| 绑定按键|
| **[convertScreenLocationToWorldSpace](mw.InputUtil.md#convertscreenlocationtoworldspace)**(`screenX`: `number`, `screenY`: `number`): [`ConvertScreenResult`](mw.ConvertScreenResult.md)  |
| 将二维屏幕位置转换为世界空间三维位置和方向|
| **[onKeyDown](mw.InputUtil.md#onkeydown)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)  |
| 键盘输入事件-点击|
| **[onKeyPress](mw.InputUtil.md#onkeypress)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)  |
| 键盘输入事件-按压|
| **[onKeyUp](mw.InputUtil.md#onkeyup)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)  |
| 键盘输入事件-抬起|
| **[onTouch](mw.InputUtil.md#ontouch)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md)  |
| 触摸事件|
| **[onTouchBegin](mw.InputUtil.md#ontouchbegin)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md)  |
| 触摸开始事件|
| **[onTouchEnd](mw.InputUtil.md#ontouchend)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md)  |
| 触摸结束事件|
| **[onTouchMove](mw.InputUtil.md#ontouchmove)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md)  |
| 触摸移动事件|
| **[projectWorldPositionToWidgetPosition](mw.InputUtil.md#projectworldpositiontowidgetposition)**(`worldLocation`: [`Vector`](mw.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](mw.ConvertScreenResult.md)  |
| 获取角色在世界中的位置，投射到屏幕上|
| **[unbindButton](mw.InputUtil.md#unbindbutton)**(`key`: [`Keys`](../enums/mw.Keys.md)): `void`  |
| 此操作只会解绑动态绑定的按键无法解除editor下绑定的按键|

## Accessors

### enableCursorInteractWithUI <Score text="enableCursorInteractWithUI" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `set` **enableCursorInteractWithUI**(`canInteract`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置鼠标指针是否能与UI交互



#### Parameters

| `canInteract` `boolean` | 可交互 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效

</span>

```ts
@Component
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
___

### enableCursorLock <Score text="enableCursorLock" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `set` **enableCursorLock**(`isEnableMouseLock`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。



#### Parameters

| `isEnableMouseLock` `boolean` | 是否开始shift键功能,此函数不会直接设置鼠标状态 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示

</span>

```ts
@Component
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
___

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否能与UI交互



#### Returns

| `boolean` | 是否能与UI交互 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可与屏幕UI交互，不可交互时，点击跳跃按钮无效

</span>

```ts
@Component
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
___

### isCursorLockEnabled <Score text="isCursorLockEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isCursorLockEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否允许通过快捷方式切换鼠标的使用组合模式



#### Returns

| `boolean` | 是否可切换 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换shift键是否可以控制光标显示

</span>

```ts
@Component
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
___

### isCursorLocked <Score text="isCursorLocked" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isCursorLocked**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否锁定



#### Returns

| `boolean` | 是否锁定 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外

</span>

```ts
@Component
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
___

### isCursorVisible <Score text="isCursorVisible" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isCursorVisible**(): `boolean` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否可见



#### Returns

| `boolean` | 是否可见 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见

</span>

```ts
@Component
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
___

### setCursorLocked <Score text="setCursorLocked" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `set` **setCursorLocked**(`isLock`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置鼠标指针是否锁定



#### Parameters

| `isLock` `boolean` | 是否锁定 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否锁定，锁定后鼠标不可出到游戏窗口外

</span>

```ts
@Component
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
___

### setCursorVisible <Score text="setCursorVisible" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `set` **setCursorVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置鼠标指针是否可见



#### Parameters

| `isVisible` `boolean` | 是否可见 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以切换鼠标是否可见

</span>

```ts
@Component
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
___

### setMouseLockable <Score text="setMouseLockable" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `set` **setMouseLockable**(`can`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置是否可以锁定鼠标



#### Parameters

| `can` `boolean` | 是否可以锁定鼠标 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以通过shift锁定鼠标，按下G键，不可以通过shift锁定鼠标

</span>

```ts
@Component
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


## Methods

### bindButton <Score text="bindButton" /> 

• `Static` **bindButton**(`key`, `Widget`): `void` <Badge type="tip" text="client" />

绑定按键

#### Parameters

| `key` [`Keys`](../enums/mw.Keys.md) | 按键 |
| :------ | :------ |
| `Widget` [`StaleButton`](mw.StaleButton.md) \| [`Button`](mw.Button.md) | 绑定的button |



<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑

</span>

```ts
@Component
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
    public button: mw.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = mw.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = mw.Canvas.newObject();
        rootCanvas.size = new mw.Vector2(1920, 1080);
        rootCanvas.position = mw.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = mw.StaleButton.newObject(rootCanvas);
        this.button.position = new mw.Vector2(1700, 310);
        this.button.size = new mw.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = mw.LinearColor.red;
        this.button.visibility = mw.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```

___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• `Static` **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向

#### Parameters

| `screenX` `number` |  屏幕X轴坐标值 default: |
| :------ | :------ |
| `screenY` `number` |  屏幕Y轴坐标值 |

#### Returns

| [`ConvertScreenResult`](mw.ConvertScreenResult.md) | 屏幕坐标转换结果 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以在屏幕中心位置发出一条射线，射线方向为屏幕中心位置指向屏幕外1000米处

</span>

```ts
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        InputUtil.onKeyDown(Keys.F, () => {
            const result = InputUtil.convertScreenLocationToWorldSpace(960, 540);
            const startLoc = result.worldPosition;
            const dir = result.worldDirection;
            const endLoc = Vector.add(startLoc, dir.multiply(1000));
            mw.QueryUtil.lineTrace(startLoc, endLoc, true, true);
        })
    }

}
```

___

### onKeyDown <Score text="onKeyDown" /> 

• `Static` **onKeyDown**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-点击

#### Parameters

| `Key` [`Keys`](../enums/mw.Keys.md) | 按键值 |
| :------ | :------ |
| `listener` () => `void` | 监听回调 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按下的情况

</span>

```ts
@Component
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

___

### onKeyPress <Score text="onKeyPress" /> 

• `Static` **onKeyPress**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-按压

#### Parameters

| `Key` [`Keys`](../enums/mw.Keys.md) | 按键值 |
| :------ | :------ |
| `listener` () => `void` | 监听回调 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被按压的情况

</span>

```ts
@Component
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

___

### onKeyUp <Score text="onKeyUp" /> 

• `Static` **onKeyUp**(`Key`, `listener`): [`EventListener`](mw.EventListener.md) 

键盘输入事件-抬起

#### Parameters

| `Key` [`Keys`](../enums/mw.Keys.md) | 按键值 |
| :------ | :------ |
| `listener` () => `void` | 监听回调 |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，日志会输出F键是否被抬起的情况

</span>

```ts
@Component
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

___

### onTouch <Score text="onTouch" /> 

• `Static` **onTouch**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸事件

#### Parameters

| `listener` (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |
| :------ | :------ |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


___

### onTouchBegin <Score text="onTouchBegin" /> 

• `Static` **onTouchBegin**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸开始事件

#### Parameters

| `listener` (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |
| :------ | :------ |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


___

### onTouchEnd <Score text="onTouchEnd" /> 

• `Static` **onTouchEnd**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸结束事件

#### Parameters

| `listener` (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |
| :------ | :------ |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


___

### onTouchMove <Score text="onTouchMove" /> 

• `Static` **onTouchMove**(`listener`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />

触摸移动事件

#### Parameters

| `listener` (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void` | 监听回调 |
| :------ | :------ |

#### Returns

| [`EventListener`](mw.EventListener.md) | 返回一个事件监听器 |
| :------ | :------ |


___

### projectWorldPositionToWidgetPosition <Score text="projectWorldPositionToWidgetPosition" /> 

• `Static` **projectWorldPositionToWidgetPosition**(`worldLocation`, `playerViewportRelative?`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) 

获取角色在世界中的位置，投射到屏幕上

#### Parameters

| `worldLocation` [`Vector`](mw.Vector.md) |  世界坐标 |
| :------ | :------ |
| `playerViewportRelative?` `boolean` |  这是否应该相对于播放器视口子区域（在分割屏幕中使用播放器附加的小部件或纵横比受限时有用）default:false |

#### Returns

| [`ConvertScreenResult`](mw.ConvertScreenResult.md) | 屏幕坐标转换结果，无WorldDirection，为默认值Type.Vector.ZERO |
| :------ | :------ |


<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以将按钮移动到玩家所在位置

</span>

```ts
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): Promise<void> {
        let btn = new ButtonUI();
        InputUtil.onKeyDown(Keys.F, async () => {
            let playerPos = (await mw.asyncGetCurrentPlayer()).character.worldLocation;
            let result = InputUtil.projectWorldPositionToWidgetPosition(playerPos);
            if (result) {
                btn.button.position = result.screenPosition;
            }
        })
    }

}

class ButtonUI {
    public button: mw.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = mw.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = mw.Canvas.newObject();
        rootCanvas.size = new mw.Vector2(1920, 1080);
        rootCanvas.position = mw.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = mw.StaleButton.newObject(rootCanvas);
        this.button.position = new mw.Vector2(1700, 310);
        this.button.size = new mw.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = mw.LinearColor.red;
        this.button.visibility = mw.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```

___

### unbindButton <Score text="unbindButton" /> 

• `Static` **unbindButton**(`key`): `void` <Badge type="tip" text="client" />

此操作只会解绑动态绑定的按键无法解除editor下绑定的按键

#### Parameters

| `key` [`Keys`](../enums/mw.Keys.md) | 解除绑定的按键 |
| :------ | :------ |



<span style="font-size: 14px;">

使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下空格键，可以看到按钮变红，5秒后空格键解绑

</span>

```ts
@Component
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
    public button: mw.StaleButton;

    constructor(fun: Function = null) {
        this.creatUI(fun);
    }

    private creatUI(fun: Function = null) {
        // 创建一个UI对象
        let ui = mw.UserWidget.newObject();
        // 将UI添加到屏幕上
        ui.addToViewport(1);
        // 创建一个画布组件
        let rootCanvas = mw.Canvas.newObject();
        rootCanvas.size = new mw.Vector2(1920, 1080);
        rootCanvas.position = mw.Vector2.zero;
        // 将Ui的根画布设置为rootCanvas
        ui.rootContent = rootCanvas;
        // 创建一个按钮
        this.button = mw.StaleButton.newObject(rootCanvas);
        this.button.position = new mw.Vector2(1700, 310);
        this.button.size = new mw.Vector2(150, 50);
        this.button.text = "按下变红";
        this.button.transitionEnable = true;
        this.button.pressedImagColor = mw.LinearColor.red;
        this.button.visibility = mw.SlateVisibility.Visible;

        this.button.onClicked.add(() => {
            if (fun) {
                fun();
            }
        })

    }
}
```
