Utility

# Utility <Badge type="tip" text="Groups" /> <Score text="Utility" />

## Table of contents
| Classes |
| :-----|
| [GameObjPool](../classes/Extension.GameObjPool.md) <br> GameObject对象池 |
| [ModuleC](../classes/Extension.ModuleC.md) <br> 客户端模块的基类 |
| [ModuleManager](../classes/Extension.ModuleManager.md) <br> 模块管理 |
| [ModuleS](../classes/Extension.ModuleS.md) <br> 服务端模块的基类 |
| [NetObject](../classes/Extension.NetObject.md) <br> 网络对象 |
| [NetObjectC](../classes/Extension.NetObjectC.md) <br> 客户端的网络对象 |
| [NetObjectS](../classes/Extension.NetObjectS.md) <br> 服务端的网络对象 |
| [ObjPool](../classes/Extension.ObjPool.md) <br> 对象池 |
| [EffectService](../classes/Service.EffectService.md) <br> 特效服务 |
| [SoundService](../classes/Service.SoundService.md) <br> 音效管理器 |
| [Group](../classes/Util.Util.TweenUtil.Group.md) <br> 补间组，用于同时控制多个补间对象 |
| [Sequence](../classes/Util.Util.TweenUtil.Sequence.md) <br> 序列工具类，主要用于获取连续的ID |
| [Tween](../classes/Util.Util.TweenUtil.Tween.md) <br> 补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。 |


| Enums |
| :-----|
| [GameObjPoolSourceType](../enums/Extension.GameObjPoolSourceType.md) <br> GameObjPool对象池资源来源类型，不同类型的资源创建方式不一样，需要正确选择 |
| [RuntimePlatform](../enums/Type.RuntimePlatform.md) <br> 运行平台 |


| Modules Functions |
| :-----|
| **[assetLoaded](../modules/Util.Util.AssetUtil.md#assetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[bindButton](../modules/Util.Util.InputUtil.md#bindbutton)**(`key`: [`Keys`](../enums/Type.Type.Keys.md), `Widget`: [`Button`](../classes/UI.UI.Button.md) \): `void` <br> 绑定按键|
| **[enableCursorInteractWithUI](../modules/Util.Util.InputUtil.md#enablecursorinteractwithui)**(`canInteract`: `boolean`): `void` <br> 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](../modules/Util.Util.InputUtil.md#enablecursorlock)**(`isEnableMouseLock`: `boolean`): `void` <br> 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[isCursorInteractiveWithUI](../modules/Util.Util.InputUtil.md#iscursorinteractivewithui)**(): `boolean` <br> 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](../modules/Util.Util.InputUtil.md#iscursorlockenabled)**(): `boolean` <br> 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](../modules/Util.Util.InputUtil.md#iscursorlocked)**(): `boolean` <br> 获取鼠标指针是否锁定|
| **[isCursorVisible](../modules/Util.Util.InputUtil.md#iscursorvisible)**(): `boolean` <br> 获取鼠标指针是否可见|
| **[onKeyDown](../modules/Util.Util.InputUtil.md#onkeydown)**(`Key`: [`Keys`](../enums/Type.Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.Events.EventListener.md) <br> 键盘输入事件-点击|
| **[onKeyPress](../modules/Util.Util.InputUtil.md#onkeypress)**(`Key`: [`Keys`](../enums/Type.Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.Events.EventListener.md) <br> 键盘输入事件-按压|
| **[onKeyUp](../modules/Util.Util.InputUtil.md#onkeyup)**(`Key`: [`Keys`](../enums/Type.Type.Keys.md), `listener`: (...`params`: `unknown`[]) => `void`): [`EventListener`](../classes/Events.Events.EventListener.md) <br> 键盘输入事件-抬起|
| **[projectWorldLocationToWidgetPosition](../modules/Util.Util.InputUtil.md#projectworldlocationtowidgetposition)**(`worldLocation`: [`Vector`](../classes/Type.Type.Vector.md), `playerViewportRelative?`: `boolean`): [`ConvertScreenResult`](../classes/Type.Type.ConvertScreenResult.md) <br> 获取角色在世界中的位置，投射到屏幕上|
| **[setCursorLocked](../modules/Util.Util.InputUtil.md#setcursorlocked)**(`isLock`: `boolean`): `void` <br> 设置鼠标指针是否锁定|
| **[setCursorVisible](../modules/Util.Util.InputUtil.md#setcursorvisible)**(`isVisible`: `boolean`): `void` <br> 设置鼠标指针是否可见|
| **[setMouseLockable](../modules/Util.Util.InputUtil.md#setmouselockable)**(`can`: `boolean`): `void` <br> 设置是否可以锁定鼠标|
| **[unbindButton](../modules/Util.Util.InputUtil.md#unbindbutton)**(`key`: [`Keys`](../enums/Type.Type.Keys.md)): `void` <br> 此操作只会解绑动态绑定的按键无法解除editor下绑定的按键|
| **[clamp](../modules/Util.Util.MathUtil.md#clamp)**(`a`: `number`, `min`: `number`, `max`: `number`): `number` <br> 数值a在最小值和最大值之间，包括最小值和最大值|
| **[cos](../modules/Util.Util.MathUtil.md#cos)**(`a`: `number`): `number` <br> 计算cos值|
| **[degreesToRadians](../modules/Util.Util.MathUtil.md#degreestoradians)**(`a`: `number`): `number` <br> 根据输入的度数返回弧度值|
| **[fmod](../modules/Util.Util.MathUtil.md#fmod)**(`x`: `number`, `y`: `number`): `number` <br> 返回 数值x 除以 数值y 的余数|
| **[lerp](../modules/Util.Util.MathUtil.md#lerp)**(`a`: `number`, `b`: `number`, `alpha`: `number`): `number` <br> 基于 alpha 在 数值a 和 数值b 之间线性插值|
| **[radiansToDegrees](../modules/Util.Util.MathUtil.md#radianstodegrees)**(`a`: `number`): `number` <br> 根据输入的弧度值返回度数|
| **[randomFloat](../modules/Util.Util.MathUtil.md#randomfloat)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内浮点数[包含min, 不包含max)|
| **[randomInt](../modules/Util.Util.MathUtil.md#randomint)**(`min`: `number`, `max`: `number`): `number` <br> 获取随机范围内整数[包含min, 不包含max)|
| **[sin](../modules/Util.Util.MathUtil.md#sin)**(`a`: `number`): `number` <br> 计算sin值|
| **[tan](../modules/Util.Util.MathUtil.md#tan)**(`a`: `number`): `number` <br> 计算tan值|
| **[clipboardCopy](../modules/Util.Util.StringUtil.md#clipboardcopy)**(`text`: `string`): `void` <br> 文本复制，将字符串复制到剪切板|
| **[clipboardPaste](../modules/Util.Util.StringUtil.md#clipboardpaste)**(): `string` <br> 文本粘贴，获取剪切板的文本|
| **[format](../modules/Util.Util.StringUtil.md#format)**(`str`: `string`, `...param`: `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[isEmpty](../modules/Util.Util.StringUtil.md#isempty)**(`str`: `string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[maskWordCheck](../modules/Util.Util.StringUtil.md#maskwordcheck)**(`text`: `string`): `Promise`<[`[maskWordCheck](../modules/Util.Util.StringUtil.md#maskwordcheck)Result`](../modules/Util.Util.StringUtil.md#maskwordcheckresult)\> <br> 屏蔽字检测|
| **[clearDelayExecute](../modules/Util.Util.TimeUtil.md#cleardelayexecute)**(`id`: `number`): `void` <br> 清除delayExecute|
| **[clearInterval](../modules/Util.Util.TimeUtil.md#clearinterval)**(`id`: `number`): `void` <br> 清除setInterval|
| **[delayExecute](../modules/Util.Util.TimeUtil.md#delayexecute)**(`handler`: () => `void`, `frameNum?`: `number`): `number` <br> 延迟一定帧数执行方法|
| **[delaySecond](../modules/Util.Util.TimeUtil.md#delaysecond)**(`second`: `number`): `Promise`<`void`\> <br> 延迟一定秒数,用于异步方法中间的等待，不可取消|
| **[delayTime](../modules/Util.Util.TimeUtil.md#delaytime)**(): `number` <br> 每一帧经过的时间 (单位：秒)|
| **[elapsedTime](../modules/Util.Util.TimeUtil.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[parseTime](../modules/Util.Util.TimeUtil.md#parsetime)**(`timeData`: `Date`, `format?`: `string`): `string` <br> 格式化时间戳|
| **[setInterval](../modules/Util.Util.TimeUtil.md#setinterval)**(`handler`: () => `void`, `timeout`: `number`, `exitJudge?`: () => `boolean`): `number` <br> 按一定时间间隔执行方法|
| **[time](../modules/Util.Util.TimeUtil.md#time)**(): `number` <br> 返回当前本地会话所在的电脑自 UNIX Epoch（UNIX 纪元）开始所经过的时间（以秒为单位）。|
| **[nextId](../modules/Util.Util.TweenUtil.md#nextid)**(): `number` <br> 获取下一个ID的全局方法|


| Modules Type Aliases |
| :-----|
| **[maskWordCheckResult](../modules/Util.Util.StringUtil.md#maskwordcheckresult)**: `Object` <br> 文本复制，将字符串复制到剪切板|
| **[EasingFunction](../modules/Util.Util.TweenUtil.md#easingfunction)**: (`amount`: `number`) => `number` <br> 缓动函数的类型定义|
| **[InterpolationFunction](../modules/Util.Util.TweenUtil.md#interpolationfunction)**: (`v`: `number`[], `k`: `number`) => `number` <br> 插值函数的类型定义|
| **[UnknownProps](../modules/Util.Util.TweenUtil.md#unknownprops)**: `Record`<`string`, `any`\> <br> 获取下一个ID的全局方法|


| Modules Variables |
| :-----|
| **[TWEEN](../modules/Util.Util.TweenUtil.md#tween)**: [`Group`](../classes/Util.Util.TweenUtil.Group.md) <br> 获取下一个ID的全局方法|

