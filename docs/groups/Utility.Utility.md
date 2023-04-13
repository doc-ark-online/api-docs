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
| **[delayTime](Utility.Utility.md#delaytime)**(): `number` <br> 每一帧经过的时间 (单位：秒)|
| **[drawGameObjectSelectionBox](Utility.Utility.md#drawgameobjectselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `Color`: [`LinearColor`](../classes/Type.LinearColor.md), `DurationTime?`: `number`): `void` <br> 绘制物体选择框|
| **[elapsedTime](Utility.Utility.md#elapsedtime)**(): `number` <br> 返回自游戏运行后所经过的总时长，单位秒，精确到毫秒。|
| **[enableCursorInteractWithUI](Utility.Utility.md#enablecursorinteractwithui)**(`canInteract`: `boolean`): `void` <br> 设置鼠标指针是否能与UI交互|
| **[enableCursorLock](Utility.Utility.md#enablecursorlock)**(`isEnableMouseLock`: `boolean`): `void` <br> 设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。|
| **[fmod](Utility.Utility.md#fmod)**(`x`: `number`, `y`: `number`): `number` <br> 返回 数值x 除以 数值y 的余数|
| **[format](Utility.Utility.md#format)**(`str`: `string`, `...param`: `any`[]): `string` <br> 将`{i}`中的内容依次替换为后续参数。i从0开始，表示第i+2个参数，详细请查看使用示例。|
| **[getGameObjectBySelectionBox](Utility.Utility.md#getgameobjectbyselectionbox)**(`StartPoint`: [`Vector2`](../classes/Type.Vector2.md), `EndPoint`: [`Vector2`](../classes/Type.Vector2.md), `IsIncludeNonCollidingObjects?`: `boolean`, `IsUseObjectsBoundingBox?`: `boolean`): [`HitResult`](../classes/Gameplay.HitResult.md)[] <br> 获取框选屏幕位置的物体|
| **[isAssetExist](Utility.Utility.md#isassetexist)**(`InAssetId`: `string`): `boolean` <br> 资源是否存在|
| **[isAssetLoaded](Utility.Utility.md#isassetloaded)**(`InAssetId`: `string`): `boolean` <br> 资源是否加载|
| **[isCursorInteractiveWithUI](Utility.Utility.md#iscursorinteractivewithui)**(): `boolean` <br> 获取鼠标指针是否能与UI交互|
| **[isCursorLockEnabled](Utility.Utility.md#iscursorlockenabled)**(): `boolean` <br> 获取是否允许通过快捷方式切换鼠标的使用组合模式|
| **[isCursorLocked](Utility.Utility.md#iscursorlocked)**(): `boolean` <br> 获取鼠标指针是否锁定|
| **[isCursorVisible](Utility.Utility.md#iscursorvisible)**(): `boolean` <br> 获取鼠标指针是否可见|
| **[isEmpty](Utility.Utility.md#isempty)**(`str`: `string`): `boolean` <br> 判断字符串是否为空(null或"")|
| **[lerp](Utility.Utility.md#lerp)**(`a`: `number`, `b`: `number`, `alpha`: `number`): `number` <br> 基于 alpha 在 数值a 和 数值b 之间线性插值|
| **[loadAsset](Utility.Utility.md#loadasset)**(`InAssetId`: `string`): `boolean` <br> 资源加载|
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


使用示例:调用方法
```ts
AssetUtil.asyncDownloadAsset("7669").then((result: boolean) => {
    // result为true是资源加载成功;
});
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


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 按键 |
| `Widget` | [`Button`](../classes/UI.Button.md) \| [`StaleButton`](../classes/UI.StaleButton.md) | 绑定的button |

___

### clamp <Score text="clamp" /> 

• **clamp**(`a`, `min`, `max`): `number` 

将传入的数值a限制在min与max范围内，超出部分自动舍弃


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

### clipboardCopy <Score text="clipboardCopy" /> 

• **clipboardCopy**(`text`): `void` <Badge type="tip" text="client" />

文本复制，将字符串复制到剪切板


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 复制到剪切板的文本 |

___

### clipboardPaste <Score text="clipboardPaste" /> 

• **clipboardPaste**(): `string` <Badge type="tip" text="client" />

文本粘贴，获取剪切板的文本


#### Returns

`string`

剪切板的文本
___

### cos <Score text="cos" /> 

• **cos**(`a`): `number` 

计算cos值


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

### drawGameObjectSelectionBox <Score text="drawGameObjectSelectionBox" /> 

• **drawGameObjectSelectionBox**(`StartPoint`, `EndPoint`, `Color`, `DurationTime?`): `void` <Badge type="tip" text="client" />

绘制物体选择框


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

### enableCursorInteractWithUI <Score text="enableCursorInteractWithUI" /> 

• **enableCursorInteractWithUI**(`canInteract`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否能与UI交互


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canInteract` | `boolean` | 可交互 |

___

### enableCursorLock <Score text="enableCursorLock" /> 

• **enableCursorLock**(`isEnableMouseLock`): `void` <Badge type="tip" text="client" />

设置是开启光标锁功能，开启后可以按shift键切换光标是否显示。


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isEnableMouseLock` | `boolean` | 是否开始shift键功能,此函数不会直接设置鼠标状态 |

___

### fmod <Score text="fmod" /> 

• **fmod**(`x`, `y`): `number` 

返回 数值x 除以 数值y 的余数


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


使用示例:格式化字符串用法
```ts
// targetString = "hello world!";
let targetString = Util.StringUtil.format("{0} {1}{2}", "hello", "world", "!");
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

### isAssetExist <Score text="isAssetExist" /> 

• **isAssetExist**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源是否存在


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:assetLoaded

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

不存在将返回false
___

### isAssetLoaded <Score text="isAssetLoaded" /> 

• **isAssetLoaded**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源是否加载


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:assetLoaded

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

未加载将返回false
___

### isCursorInteractiveWithUI <Score text="isCursorInteractiveWithUI" /> 

• **isCursorInteractiveWithUI**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否能与UI交互


#### Returns

`boolean`

是否能与UI交互
___

### isCursorLockEnabled <Score text="isCursorLockEnabled" /> 

• **isCursorLockEnabled**(): `boolean` <Badge type="tip" text="client" />

获取是否允许通过快捷方式切换鼠标的使用组合模式


#### Returns

`boolean`

是否可切换
___

### isCursorLocked <Score text="isCursorLocked" /> 

• **isCursorLocked**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否锁定


#### Returns

`boolean`

是否锁定
___

### isCursorVisible <Score text="isCursorVisible" /> 

• **isCursorVisible**(): `boolean` <Badge type="tip" text="client" />

获取鼠标指针是否可见


#### Returns

`boolean`

是否可见
___

### isEmpty <Score text="isEmpty" /> 

• **isEmpty**(`str`): `boolean` 

判断字符串是否为空(null或"")


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

### loadAsset <Score text="loadAsset" /> 

• **loadAsset**(`InAssetId`): `boolean` <Badge type="tip" text="other" />

资源加载


::: danger Deprecated

info:该接口已废弃，在该接口被删除前会仍保持可用，请尽快使用替换方案以免出现问题 since:022 reason:接口废弃,预计v0.24.0移除该接口 replacement:asyncDownloadAsset

:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InAssetId` | `string` | 资源GUID |

#### Returns

`boolean`

___

### maskWordCheck <Score text="maskWordCheck" /> 

• **maskWordCheck**(`text`): `Promise`<[`maskWordCheckResult`](Util.StringUtil.md#maskwordcheckresult)\> 

屏蔽字检测


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


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLock` | `boolean` | 是否锁定 |

___

### setCursorVisible <Score text="setCursorVisible" /> 

• **setCursorVisible**(`isVisible`): `void` <Badge type="tip" text="client" />

设置鼠标指针是否可见


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


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `can` | `boolean` | 是否可以锁定鼠标 |

___

### sin <Score text="sin" /> 

• **sin**(`a`): `number` 

计算sin值


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

使用示例:获取并显示时间戳
```ts
function test(){
     const time = TimeUtil.time;
     console.log(`time stamp:${time}`);
}

#### Returns

`number`

___

### unbindButton <Score text="unbindButton" /> 

• **unbindButton**(`key`): `void` <Badge type="tip" text="client" />

此操作只会解绑动态绑定的按键无法解除editor下绑定的按键


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Keys`](../enums/Type.Keys.md) | 解除绑定的按键 |
## Modules Variables


## Variables

### TWEEN <Score text="TWEEN" /> 

• `Const` **TWEEN**: [`Group`](../classes/Util.Util.TweenUtil.Group.md)

全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组