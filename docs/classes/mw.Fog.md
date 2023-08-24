[LIGHTING](../groups/Core.LIGHTING.md) / Fog

# Fog <Badge type="tip" text="Class" /> <Score text="Fog" />

环境雾

## Table of contents

| Accessors |
| :-----|
| **[density](mw.Fog.md#density)**(): `number` <br> 获取雾密度|
| **[directionalInscatteringColor](mw.Fog.md#directionalinscatteringcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.|
| **[directionalInscatteringExponent](mw.Fog.md#directionalinscatteringexponent)**(): `number` <br> 获取太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.|
| **[directionalInscatteringStartDistance](mw.Fog.md#directionalinscatteringstartdistance)**(): `number` <br> 获取太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.|
| **[enabled](mw.Fog.md#enabled)**(): `boolean` <br> 获取是否启用环境雾|
| **[height](mw.Fog.md#height)**(): `number` <br> 获取雾高度|
| **[heightFalloff](mw.Fog.md#heightfalloff)**(): `number` <br> 获取雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)|
| **[inscatteringColor](mw.Fog.md#inscatteringcolor)**(): [`LinearColor`](mw.LinearColor.md) <br> 获取雾散射颜色|
| **[maxOpacity](mw.Fog.md#maxopacity)**(): `number` <br> 获取雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)|
| **[startDistance](mw.Fog.md#startdistance)**(): `number` <br> 获取雾起始距离(到摄像机的距离)|

| Methods |
| :-----|
| **[setPreset](mw.Fog.md#setpreset)**(`presetIndex`: [`FogPreset`](../enums/mw.FogPreset.md)): `void` <br> 设置雾预设|

## Accessors

### density <Score text="density" /> 

• `Static` `get` **density**(): `number` <Badge type="tip" text="client" />

获取雾密度


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

雾密度

• `Static` `set` **density**(`value`): `void` <Badge type="tip" text="client" />

设置雾密度


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾密度 |


___

### directionalInscatteringColor <Score text="directionalInscatteringColor" /> 

• `Static` `get` **directionalInscatteringColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

[`LinearColor`](mw.LinearColor.md)

太阳光散射颜色

• `Static` `set` **directionalInscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

设置太阳光散射颜色,控制定向散射的颜色,该颜色用于近似太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 太阳光散射颜色 |


___

### directionalInscatteringExponent <Score text="directionalInscatteringExponent" /> 

• `Static` `get` **directionalInscatteringExponent**(): `number` <Badge type="tip" text="client" />

获取太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

太阳光散射指数

• `Static` `set` **directionalInscatteringExponent**(`value`): `void` <Badge type="tip" text="client" />

设置太阳光散射指数,控制定向散射锥的大小,该圆锥用于近似来自太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光散射指数 |


___

### directionalInscatteringStartDistance <Score text="directionalInscatteringStartDistance" /> 

• `Static` `get` **directionalInscatteringStartDistance**(): `number` <Badge type="tip" text="client" />

获取太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

太阳光散射初始距离

• `Static` `set` **directionalInscatteringStartDistance**(`value`): `void` <Badge type="tip" text="client" />

设置太阳光散射初始距离,控制与定向散射查看器的起始距离,定向散射用于近似太阳光的散射.


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 太阳光散射初始距离 |


___

### enabled <Score text="enabled" /> 

• `Static` `get` **enabled**(): `boolean` <Badge type="tip" text="client" />

获取是否启用环境雾


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`boolean`

是否启用

• `Static` `set` **enabled**(`value`): `void` <Badge type="tip" text="client" />

设置是否启用环境雾


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用 |


___

### height <Score text="height" /> 

• `Static` `get` **height**(): `number` <Badge type="tip" text="client" />

获取雾高度


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

雾高度

• `Static` `set` **height**(`value`): `void` <Badge type="tip" text="client" />

设置雾高度


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾高度 |


___

### heightFalloff <Score text="heightFalloff" /> 

• `Static` `get` **heightFalloff**(): `number` <Badge type="tip" text="client" />

获取雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

雾衰弱高度

• `Static` `set` **heightFalloff**(`value`): `void` <Badge type="tip" text="client" />

设置雾衰弱高度(控制密度如何随着高度的降低而增加.值越小,可见过渡越大.)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾衰弱高度 |


___

### inscatteringColor <Score text="inscatteringColor" /> 

• `Static` `get` **inscatteringColor**(): [`LinearColor`](mw.LinearColor.md) <Badge type="tip" text="client" />

获取雾散射颜色


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

[`LinearColor`](mw.LinearColor.md)

雾散射颜色

• `Static` `set` **inscatteringColor**(`value`): `void` <Badge type="tip" text="client" />

设置雾散射颜色


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`LinearColor`](mw.LinearColor.md) | 雾散射颜色 |


___

### maxOpacity <Score text="maxOpacity" /> 

• `Static` `get` **maxOpacity**(): `number` <Badge type="tip" text="client" />

获取雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

雾最大透明度

• `Static` `set` **maxOpacity**(`value`): `void` <Badge type="tip" text="client" />

设置雾最大透明度(值为1表示雾可以在远处变得完全不透明并完全替换场景颜色,值为0表示根本不会考虑雾颜色.)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾最大透明度 |


___

### startDistance <Score text="startDistance" /> 

• `Static` `get` **startDistance**(): `number` <Badge type="tip" text="client" />

获取雾起始距离(到摄像机的距离)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Returns

`number`

雾起始距离

• `Static` `set` **startDistance**(`value`): `void` <Badge type="tip" text="client" />

设置雾起始距离(到摄像机的距离)


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 雾起始距离 |


## Methods

### setPreset <Score text="setPreset" /> 

• `Static` **setPreset**(`presetIndex`): `void` <Badge type="tip" text="client" />

设置雾预设


使用示例: 可按如下操作控制编辑器后处理实时效果
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `presetIndex` | [`FogPreset`](../enums/mw.FogPreset.md) |

