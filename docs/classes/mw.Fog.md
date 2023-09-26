[LIGHTING](../groups/Core.LIGHTING.md) / Fog

# Fog <Badge type="tip" text="Class" /> <Score text="Fog" />

<p class="content-big">

环境雾

</p>

<p class="content-big">

----------------------------------

</p>

<p class="content-big">

环境雾是一种大气效果，可以模拟雾、大气灰尘等渲染真实的大气效果，在场景中制造云雾缭绕的氛围感。

</p>

<p class="content-big">

环境雾中的属性与方法均为 static ， Fog 直接调用即可设置环境雾。其中比较常用的有：

</p>

<p class="content-big">

- enabled 静态属性开启设为 TRUE 才可使用环境雾功能。

</p>

<p class="content-big">

- directionalInscatteringColor 静态属性表示雾的颜色。

</p>

<p class="content-big">

- density 静态属性表示雾的密度。

</p>

<p class="content-big">

- startDistance 静态属性表示雾与摄像机的距离。

</p>

## Table of contents

### Constructors <Score text="Constructors" /> 
| **new Fog**()  |
| :----- |

### Accessors <Score text="Accessors" /> 
| **[density](mw.Fog.md#density)**(): `number`  |
| :-----|
| 设置雾密度|
| **[directionalInscatteringColor](mw.Fog.md#directionalinscatteringcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.|
| **[directionalInscatteringExponent](mw.Fog.md#directionalinscatteringexponent)**(): `number`  |
| 设置太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.|
| **[directionalInscatteringStartDistance](mw.Fog.md#directionalinscatteringstartdistance)**(): `number`  |
| 设置太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.|
| **[enabled](mw.Fog.md#enabled)**(): `boolean`  |
| 设置是否启用环境雾|
| **[height](mw.Fog.md#height)**(): `number`  |
| 设置雾高度|
| **[heightFalloff](mw.Fog.md#heightfalloff)**(): `number`  |
| 设置雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)|
| **[inscatteringColor](mw.Fog.md#inscatteringcolor)**(): [`LinearColor`](mw.LinearColor.md)  |
| 设置雾散射颜色|
| **[maxOpacity](mw.Fog.md#maxopacity)**(): `number`  |
| 设置雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)|
| **[startDistance](mw.Fog.md#startdistance)**(): `number`  |
| 设置雾起始距离(到摄像机的距离)|

### Methods <Score text="Methods" /> 
| **[setPreset](mw.Fog.md#setpreset)**(`presetIndex`: [`FogPreset`](../enums/mw.FogPreset.md)): `void`  |
| :-----|
| 设置雾预设|

## Accessors

### density <Score text="density" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **density**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **density**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾密度



#### Returns

| `number` | 雾密度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾密度



#### Parameters

| `value` `number` | 雾密度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾密度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾密度
                Fog.density += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾密度
                Fog.density -= 1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾密度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾密度
                Fog.density += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾密度
                Fog.density -= 1;
            });
        }
    }
}
```
___

### directionalInscatteringColor <Score text="directionalInscatteringColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **directionalInscatteringColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **directionalInscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.



#### Returns

| [`LinearColor`](mw.LinearColor.md) | 太阳光散射颜色 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.



#### Parameters

| `value` [`LinearColor`](mw.LinearColor.md) | 太阳光散射颜色 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1键控制太阳光散射颜色
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 太阳光散射颜色
                Fog.directionalInscatteringColor = LinearColor.red;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1键控制太阳光散射颜色
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 太阳光散射颜色
                Fog.directionalInscatteringColor = LinearColor.red;
            });
        }
    }
}
```
___

### directionalInscatteringExponent <Score text="directionalInscatteringExponent" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **directionalInscatteringExponent**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **directionalInscatteringExponent**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.



#### Returns

| `number` | 太阳光散射指数 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.



#### Parameters

| `value` `number` | 太阳光散射指数 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制太阳光散射指数
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加太阳光散射指数
                Fog.directionalInscatteringExponent += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少太阳光散射指数
                Fog.directionalInscatteringExponent -= 0.1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制太阳光散射指数
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加太阳光散射指数
                Fog.directionalInscatteringExponent += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少太阳光散射指数
                Fog.directionalInscatteringExponent -= 0.1;
            });
        }
    }
}
```
___

### directionalInscatteringStartDistance <Score text="directionalInscatteringStartDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **directionalInscatteringStartDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **directionalInscatteringStartDistance**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.



#### Returns

| `number` | 太阳光散射初始距离 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.



#### Parameters

| `value` `number` | 太阳光散射初始距离 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制太阳光散射初始距离
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加太阳光散射初始距离
                Fog.directionalInscatteringStartDistance += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少太阳光散射初始距离
                Fog.directionalInscatteringStartDistance -= 0.1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制太阳光散射初始距离
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加太阳光散射初始距离
                Fog.directionalInscatteringStartDistance += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少太阳光散射初始距离
                Fog.directionalInscatteringStartDistance -= 0.1;
            });
        }
    }
}
```
___

### enabled <Score text="enabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **enabled**(): `boolean` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **enabled**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取是否启用环境雾



#### Returns

| `boolean` | 是否启用 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置是否启用环境雾



#### Parameters

| `value` `boolean` | 是否启用 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾开启关闭
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 开启雾效
                Fog.enabled = true;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 关闭雾效
                Fog.enabled = false;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾开启关闭
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 开启雾效
                Fog.enabled = true;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 关闭雾效
                Fog.enabled = false;
            });
        }
    }
}
```
___

### height <Score text="height" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **height**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **height**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾高度



#### Returns

| `number` | 雾高度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾高度



#### Parameters

| `value` `number` | 雾高度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾高度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾高度
                Fog.height += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾高度
                Fog.height -= 1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾高度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾高度
                Fog.height += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾高度
                Fog.height -= 1;
            });
        }
    }
}
```
___

### heightFalloff <Score text="heightFalloff" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **heightFalloff**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **heightFalloff**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)



#### Returns

| `number` | 雾衰弱高度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)



#### Parameters

| `value` `number` | 雾衰弱高度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾衰弱高度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾衰弱高度
                Fog.heightFalloff += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾衰弱高度
                Fog.heightFalloff -= 1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾衰弱高度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾衰弱高度
                Fog.heightFalloff += 1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾衰弱高度
                Fog.heightFalloff -= 1;
            });
        }
    }
}
```
___

### inscatteringColor <Score text="inscatteringColor" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **inscatteringColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **inscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾散射颜色



#### Returns

| [`LinearColor`](mw.LinearColor.md) | 雾散射颜色 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾散射颜色



#### Parameters

| `value` [`LinearColor`](mw.LinearColor.md) | 雾散射颜色 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1键控制雾散射颜色
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 设置雾散射颜色
                Fog.inscatteringColor = LinearColor.red;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1键控制雾散射颜色
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 设置雾散射颜色
                Fog.inscatteringColor = LinearColor.red;
            });
        }
    }
}
```
___

### maxOpacity <Score text="maxOpacity" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **maxOpacity**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **maxOpacity**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)



#### Returns

| `number` | 雾最大透明度 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)



#### Parameters

| `value` `number` | 雾最大透明度 |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾最大透明度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾最大透明度
                Fog.maxOpacity += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾最大透明度
                Fog.maxOpacity -= 0.1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾最大透明度
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾最大透明度
                Fog.maxOpacity += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾最大透明度
                Fog.maxOpacity -= 0.1;
            });
        }
    }
}
```
___

### startDistance <Score text="startDistance" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `Static` `get` **startDistance**(): `number` <Badge type="tip" text="client" />

</th>
<th style="text-align: left">

• `Static` `set` **startDistance**(`value`): `void` <Badge type="tip" text="client" />

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


获取雾起始距离(到摄像机的距离)



#### Returns

| `number` | 雾起始距离 |
| :------ | :------ |


</td>
<td style="text-align: left">


设置雾起始距离(到摄像机的距离)



#### Parameters

| `value` `number` | 雾起始距离 |
| :------ | :------ |

</td>
</tr></tbody>
</table>

<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾起始距离
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾起始距离
                Fog.startDistance += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾起始距离
                Fog.startDistance -= 0.1;
            });
        }
    }
}
```
<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1和2键控制雾起始距离
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 增加雾起始距离
                Fog.startDistance += 0.1;
            });
            InputUtil.onKeyDown(Keys.Two, () => {
                // 减少雾起始距离
                Fog.startDistance -= 0.1;
            });
        }
    }
}
```


## Methods

### setPreset <Score text="setPreset" /> 

• `Static` **setPreset**(`presetIndex`): `void` <Badge type="tip" text="client" />

设置雾预设

#### Parameters

| `presetIndex` | [`FogPreset`](../enums/mw.FogPreset.md) |
| :------ | :------ |



<p style="font-size: 14px;">

使用示例: 可按如下操作控制编辑器后处理实时效果

</p>

创建一个名为"FogExample"的脚本,放置在对象栏中,打开脚本,输入以下代码,运行游戏,你将可以通过1键控制雾预设
```ts
@Component
export default class FogExample extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected async onStart(): Promise<void> {
        if (SystemUtil.isClient()) {
            InputUtil.onKeyDown(Keys.One, () => {
                // 雾预设
                Fog.setPreset(FogPreset.NearFog)
            });
        }
    }
}
```
