[ANIMATIONS](../groups/Core.ANIMATIONS.md) / Animation

# Animation <Badge type="tip" text="Class" /> <Score text="Animation" />

动画类(测试信息!!!)

::: warning Precautions

请不要直接使用new创建，playAnimation是个快速实现功能的接口,可配置参数有限，loadAnimation可以返回动画,以进行更加精细的动画控制

:::

使用示例:创建方式
```ts
mw.asyncGetCurrentPlayer().then((player) => {
  let Anim = player.character.playAnimation(animGUID);
  Anim = player.character.loadAnimation(animGUID);
});
```

## Table of contents

| Accessors |
| :-----|
| **[isPlaying](mw.Animation.md#isplaying)**(): `boolean` <br> 是否播放|
| **[length](mw.Animation.md#length)**(): `number` <br> 动画长度|
| **[loop](mw.Animation.md#loop)**(): `number` <br> 循环次数|
| **[onFinish](mw.Animation.md#onfinish)**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <br> 播放结束委托|
| **[slot](mw.Animation.md#slot)**(): [`AnimSlot`](../enums/mw.AnimSlot.md) <br> 获取动画播放插槽|
| **[speed](mw.Animation.md#speed)**(): `number` <br> 播放速率|

| Methods |
| :-----|
| **[pause](mw.Animation.md#pause)**(): `boolean` <br> 暂停动画|
| **[play](mw.Animation.md#play)**(): `boolean` <br> 播放动画|
| **[resume](mw.Animation.md#resume)**(): `boolean` <br> 恢复播放动画|
| **[stop](mw.Animation.md#stop)**(): `boolean` <br> 停止播放动画|

## Accessors

### isPlaying <Score text="isPlaying" /> 

• `get` **isPlaying**(): `boolean` 

是否播放


::: warning Precautions

是否播放，true表示动画对象的正在播放，false表示动画对象未播放。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_IsPlaying"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_IsPlaying extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`boolean`

___

### length <Score text="length" /> 

• `get` **length**(): `number`

动画长度

::: warning Precautions

当前动画对象中关联的动画的时长以秒为单位

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Length"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Length extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`number`

___

### loop <Score text="loop" /> 

• `get` **loop**(): `number` 

循环次数


::: warning Precautions

动画的播放次数，Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Loop"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Loop extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **loop**(`loopCount`): `void` 

循环次数


::: warning Precautions

动画的播放次数，Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，2:否

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Loop"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Loop extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loopCount` | `number` |


___

### onFinish <Score text="onFinish" /> 

• `get` **onFinish**(): [`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\> <Badge type="tip" text="client" />

播放结束委托


::: warning Precautions

动画播放结束时(在动画不被中断且正常播放完成情况下)执行绑定函数。性能限制，服务器不播放动画，仅客户端触发，请在客户端使用该委托。有几种情况下不会触发该委托 1 调用pause方法 2 调用stop方法 3 该动画正在播放，调用play接口。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_OnFinish"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_OnFinish extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

[`MulticastDelegate`](mw.MulticastDelegate.md)<() => `void`\>

___

### slot <Score text="slot" /> 

• `get` **slot**(): [`AnimSlot`](../enums/mw.AnimSlot.md)

获取动画播放插槽

使用示例:获取动画播放插槽
```ts
let anim = player.character.loadAnimation(animGUID);
console.log(anim.slot);
```

#### Returns

[`AnimSlot`](../enums/mw.AnimSlot.md)

• `set` **slot**(`animslot`): `void`

设置动画播放插槽

使用示例:动画播放插槽
```ts
// 让动画只在上半身播放
let anim = player.character.loadAnimation(animGUID);
anim.slot = mw.AnimSlot.Upper;
anim.play();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `animslot` | [`AnimSlot`](../enums/mw.AnimSlot.md) |


___

### speed <Score text="speed" /> 

• `get` **speed**(): `number` 

播放速率


::: warning Precautions

设置播放速率(动画切换时有融合时间,动画太短，当speed=1时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, speed为1表示原始速率,默认值为2。设置该值不会改变播放的起点.

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Speed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Speed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`number`

• `set` **speed**(`speed`): `void` 

播放速率


::: warning Precautions

设置播放速率(动画切换时有融合时间,动画太短，当speed=1时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, speed为1表示原始速率,默认值为1。设置该值不会改变播放的起点.

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Speed"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Speed extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `speed` | `number` |


## Methods

### pause <Score text="pause" /> 

• **pause**(): `boolean` 

暂停动画


::: warning Precautions

不会触发onFinish委托。生效范围与角色创建方式绑定。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Pause"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Pause extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`boolean`

暂停结果

___

### play <Score text="play" /> 

• **play**(): `boolean` 

播放动画


::: warning Precautions

从动画资源的起点播放动画。生效范围与角色创建方式绑定。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Play"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Play extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`boolean`

播放结果

___

### resume <Score text="resume" /> 

• **resume**(): `boolean` 

恢复播放动画


::: warning Precautions

从当前位置继续动画播放。生效范围与角色创建方式绑定。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Resume"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Resume extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`boolean`

继续结果

___

### stop <Score text="stop" /> 

• **stop**(): `boolean` 

停止播放动画


::: warning Precautions

不触发动画结束回调。生效范围与角色创建方式绑定。

:::

使用示例:将使用到的资源:"14700,20380"拖入优先加载栏。创建一个名为"Example_Animation_Stop"的脚本,放置在对象栏中,打开脚本,输入以下代码保存,运行游戏,在玩家角色上加载舞蹈动画,并修改循环次数为10，播放速度为2倍。给【动画完成】委托添加函数，播放一个升级特效。按下键盘“1”, 开始播放动画.按下键盘“2”, 暂停播放动画.按下键盘“3”, 继续播放动画.按下键盘“4”, 停止播放动画.代码如下:
```ts
@Class
export default class Example_Animation_Stop extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个舞蹈动画
            let danceAnimation = myCharacter.loadAnimation("14700");
            // 动画的属性
            console.log("动画时长 " + danceAnimation.length);
            // 循环播放10次
            danceAnimation.loop = 10;
            // 2倍播放速度
            danceAnimation.speed = 2;
            // 给【动画完成】委托添加函数，播放一个升级特效
            danceAnimation.onFinish.add(() => {
                EffectService.playOnGameObject("20380", myCharacter, {slotType: HumanoidType.Root});
            });
            // 添加一个按键方法:按下键盘“1”，开始播放
            InputUtil.onKeyDown(Keys.One, () => {
                danceAnimation.play();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“2”，暂停播放
            InputUtil.onKeyDown(Keys.Two, () => {
                danceAnimation.pause();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“3”，继续播放
            InputUtil.onKeyDown(Keys.Three, () => {
                danceAnimation.resume();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
            // 添加一个按键方法:按下键盘“4”，停止播放
            InputUtil.onKeyDown(Keys.Four, () => {
                danceAnimation.stop();
                console.log("动画播放 " + danceAnimation.isPlaying);
            });
        }
    }
}
```

#### Returns

`boolean`

停止结果
