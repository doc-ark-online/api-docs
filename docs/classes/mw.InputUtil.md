[输入](../groups/输入.输入.md) / InputUtil

# InputUtil <Badge type="tip" text="Class" /> <Score text="InputUtil" />

输入事件工具

<span style="font-size: 14px;">
使用示例:创建一个名为"InputExample"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，点击键盘1键及屏幕，你将看到Input相关效果。代码如下：
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

### Accessors <Score text="Accessors" /> 
| **[isCursorInteractiveWithUI](mw.InputUtil.md#iscursorinteractivewithui)**(): `boolean` <Badge type="tip" text="client" />  |
| :-----|
| 获取鼠标指针是否能与 UI 交互|
| **[isCursorLockEnabled](mw.InputUtil.md#iscursorlockenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](mw.InputUtil.md#iscursorlocked)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取鼠标指针是否锁定|
| **[isCursorVisible](mw.InputUtil.md#iscursorvisible)**(): `boolean` <Badge type="tip" text="client" />  |
| 获取鼠标指针是否可见|
| **[isLockMouse](mw.InputUtil.md#islockmouse)**(): `boolean` <Badge type="tip" text="client" />  |
| 设置鼠标指针是否可以自由移动或是被锁定|
| **[mouseLockOptionEnabled](mw.InputUtil.md#mouselockoptionenabled)**(): `boolean` <Badge type="tip" text="client" />  |
| 玩家是否可以使用shift,切换鼠标锁定状态|

### Methods <Score text="Methods" /> 
| **[convertScreenLocationToWorldSpace](mw.InputUtil.md#convertscreenlocationtoworldspace)**(`screenX`: `number`, `screenY`: `number`): [`ConvertScreenResult`](mw.ConvertScreenResult.md)   |
| :-----|
| 将二维屏幕位置转换为世界空间三维位置和方向|
| **[onKeyDown](mw.InputUtil.md#onkeydown)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)   |
| 键盘输入事件-点击|
| **[onKeyPress](mw.InputUtil.md#onkeypress)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)   |
| 键盘输入事件-按压|
| **[onKeyUp](mw.InputUtil.md#onkeyup)**(`Key`: [`Keys`](../enums/mw.Keys.md), `listener`: () => `void`): [`EventListener`](mw.EventListener.md)   |
| 键盘输入事件-抬起|
| **[onRawTouchBegin](mw.InputUtil.md#onrawtouchbegin)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指按下代理,不被UI等影响的输入事件|
| **[onRawTouchEnd](mw.InputUtil.md#onrawtouchend)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指抬起代理,不被UI等影响的输入事件|
| **[onRawTouchMove](mw.InputUtil.md#onrawtouchmove)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />  |
| 获取手指滑动代理,不被UI等影响的输入事件|
| **[onTouch](mw.InputUtil.md#ontouch)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />  |
| 触摸事件|
| **[onTouchBegin](mw.InputUtil.md#ontouchbegin)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />  |
| 触摸开始事件|
| **[onTouchEnd](mw.InputUtil.md#ontouchend)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />  |
| 触摸结束事件|
| **[onTouchMove](mw.InputUtil.md#ontouchmove)**(`listener`: (`index`: `number`, `location`: [`Vector2`](mw.Vector2.md), `touchType`: [`TouchInputType`](../enums/mw.TouchInputType.md)) => `void`): [`EventListener`](mw.EventListener.md) <Badge type="tip" text="client" />  |
| 触摸移动事件|
| **[projectWorldPositionToWidgetPosition](mw.InputUtil.md#projectworldpositiontowidgetposition)**(`worldLocation`: [`Vector`](mw.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](mw.ConvertScreenResult.md)   |
| 获取角色在世界中的位置，投射到屏幕上|

## Accessors

___

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **isCursorInteractiveWithUI**(`canInteract`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否能与 UI 交互


#### Returns

| `boolean` | 是否能与 UI 交互 |
| :------ | :------ |


</td>
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

    private async test(): `Promise`<`void`\> {
        //按下F键，修改鼠标是否可与屏幕UI交互
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorInteractWithUI = !InputUtil.isCursorInteractiveWithUI;
        })
    }

}
```
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

    private async test(): `Promise`<`void`\> {
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
<th style="text-align: left">

• `Static` `set` **isCursorLockEnabled**(`isEnableMouseLock`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否允许通过快捷方式切换鼠标的使用组合模式


#### Returns

| `boolean` | 是否可切换 |
| :------ | :------ |


</td>
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

    private async test(): `Promise`<`void`\> {
        //按下F键，修改shift是否可控制光标显示
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorLock(!InputUtil.isCursorLockEnabled());
        })
    }

}
```
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

    private async test(): `Promise`<`void`\> {
        //按下F键，修改shift是否可控制光标显示
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.enableCursorLock = !InputUtil.isCursorLockEnabled;
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
<th style="text-align: left">

• `Static` `set` **isCursorLocked**(`isLock`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否锁定


#### Returns

| `boolean` | 是否锁定 |
| :------ | :------ |


</td>
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

    private async test(): `Promise`<`void`\> {
        //按下F键，锁定/解锁鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorLocked(!InputUtil.isCursorLocked());
        })
    }

}
```
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

    private async test(): `Promise`<`void`\> {
        //按下F键，锁定/解锁鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorLocked = !InputUtil.isCursorLocked;
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
<th style="text-align: left">

• `Static` `set` **isCursorVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取鼠标指针是否可见


#### Returns

| `boolean` | 是否可见 |
| :------ | :------ |


</td>
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

    private async test(): `Promise`<`void`\> {
        //按下F键，显示/隐藏鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorVisible(!InputUtil.isCursorVisible());
        })
    }

}
```
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

    private async test(): `Promise`<`void`\> {
        //按下F键，显示/隐藏鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.setCursorVisible = !InputUtil.isCursorVisible;
        })
    }

}
```
___

### isLockMouse <Score text="isLockMouse" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **isLockMouse**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **isLockMouse**(`b`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


设置鼠标指针是否可以自由移动或是被锁定

#### Returns

| `boolean` | 鼠标指针是否可以自由移动或是被锁定 |
| :------ | :------ |


</td>
<td style="text-align: left">


决定玩家的鼠标是否可以自由移动或是被锁定

#### Parameters

| `b` `boolean` | false 自由移动 true:锁定 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

___

### mouseLockOptionEnabled <Score text="mouseLockOptionEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **mouseLockOptionEnabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **mouseLockOptionEnabled**(`b`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


玩家是否可以使用shift,切换鼠标锁定状态

#### Returns

| `boolean` | 是否可以让玩家用shift切换鼠标状态 |
| :------ | :------ |


</td>
<td style="text-align: left">


玩家是否可以使用shift,切换鼠标锁定状态


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

    private async test(): `Promise`<`void`\> {
        //按下F键，可以通过shift锁定鼠标
        InputUtil.onKeyDown(Keys.F, () => {
            InputUtil.mouseLockOptionEnabled = true;
        })
        //按下G键，不可以通过shift锁定鼠标
        InputUtil.onKeyDown(Keys.G, () => {
            InputUtil.mouseLockOptionEnabled = false;
        })
    }

}

#### Parameters

| `b` `boolean` | 如果为True，玩家在游戏中按下鼠标锁定按键（默认shift）后，玩家可以自行切换鼠标锁定状态 |
| :------ | :------ |


## Methods

___

### convertScreenLocationToWorldSpace <Score text="convertScreenLocationToWorldSpace" /> 

• `Static` **convertScreenLocationToWorldSpace**(`screenX`, `screenY`): [`ConvertScreenResult`](mw.ConvertScreenResult.md) 

将二维屏幕位置转换为世界空间三维位置和方向

#### Parameters

| `screenX` `number` |  屏幕 X 轴坐标值 default:null range:不超过屏幕坐标，关于屏幕坐标详情请看 class Vector2 type: 浮点数 |
| :------ | :------ |
| `screenY` `number` |  屏幕 Y 轴坐标值 default:null range:不超过屏幕坐标，关于屏幕坐标详情请看 class Vector2 type: 浮点数 |

#### Returns

| [`ConvertScreenResult`](mw.ConvertScreenResult.md) | 屏幕坐标转换结果 |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下 F 键，可以在屏幕中心位置发出一条射线，射线方向为屏幕中心位置指向屏幕外1000米处
</span>

```
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        InputUtil.onKeyDown(Keys.F, () => {
            const result = InputUtil.convertScreenLocationToWorldSpace(960, 540);
            const startLoc = result.worldPosition;
            const dir = result.worldDirection;
            const endLoc = Vector.add(startLoc, dir.multiply(1000));
            mw.QueryUtil.lineTrace(startLoc, endLoc, true, true);
        })
    }

}
```ts

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

```
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        InputUtil.onKeyDown(Keys.F, () => {
            console.log("F key pressed");
        })
    }

}
```ts

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

```
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        InputUtil.onKeyPress(Keys.F, () => {
            console.log("F key up");
        })
    }
}
```ts

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

```
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        InputUtil.onKeyUp(Keys.F, () => {
            console.log("F key up");
        })
    }

}
```ts

___

### onRawTouchBegin <Score text="onRawTouchBegin" /> 

• `Static` **onRawTouchBegin**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指按下代理,不被UI等影响的输入事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> | 返回手指按下时的代理 |
| :------ | :------ |

___

### onRawTouchEnd <Score text="onRawTouchEnd" /> 

• `Static` **onRawTouchEnd**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> <Badge type="tip" text="client" />

获取手指抬起代理,不被UI等影响的输入事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`) => `void`\> | 返回抬起手指时候的代理 |
| :------ | :------ |

___

### onRawTouchMove <Score text="onRawTouchMove" /> 

• `Static` **onRawTouchMove**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> <Badge type="tip" text="client" />

获取手指滑动代理,不被UI等影响的输入事件

#### Returns

| [`MulticastDelegate`](mw.MulticastDelegate.md)<(`FingerIndex`: `number`, `Position`: [`Vector2`](mw.Vector2.md)) => `void`\> | 返回手指滑动的代理 |
| :------ | :------ |

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

| [`ConvertScreenResult`](mw.ConvertScreenResult.md) | 屏幕坐标转换结果，默认值为 Vector.ZERO |
| :------ | :------ |

<span style="font-size: 14px;">
使用示例:创建一个名为InputExample的脚本，放置在对象栏中，打开脚本，将原本内容修改为如下内容，保存并运行游戏，按下F键，可以将按钮移动到玩家所在位置
</span>

```
@Component
export default class InputExample extends Script {

    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.test();
    }

    private async test(): `Promise`<`void`\> {
        let btn = new ButtonUI();
        InputUtil.onKeyDown(Keys.F, async () => {
            let playerPos = Player.localPlayer.character.worldTransform.position;
            let result = InputUtil.projectWorldPositionToWidgetPosition(playerPos);
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
```ts
