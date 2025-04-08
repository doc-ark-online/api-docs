[动画](../groups/动画.动画.md) / Stance

# Stance <Badge type="tip" text="Class" /> <Score text="Stance" />

基础姿态

-------------------------

基础姿态包含了地面, 飞行和游泳的动画状态机。当你不进行任何修改直接进入游戏时, 角色的走跑跳等各种动作都是由它表现的。

基础姿态资源是一个外部资源，你可以在本地资源库中的基础姿态分类下查找并下载它们。

Stance 如何工作的呢？

- 想要播放基础姿态， 首先需要执行Character类中的 loadStance 方法。加载一个基础姿态对象。

- 可以修改这个基础姿态对象的一些属性, 调用 play 方法。基础姿态资源会在调用 play 时进行异步的下载加载。

- 想要停止一个基础姿态对象, 可以直接对基础姿态对象调用 stop。

## Hierarchy

- `StanceBase`

  ↳ **`Stance`**

## Table of contents

### Accessors <Score text="Accessors" /> 
| **[aimOffsetEnabled](mw.Stance.md#aimoffsetenabled)**(): `boolean`   |
| :-----|
| 启用瞄准偏移|
| **[assetId](mw.Stance.md#assetid)**(): `string`  |
| 姿态资源GUID|

### Methods <Score text="Methods" /> 
| **[getNumberParameter](mw.Stance.md#getnumberparameter)**(`key`: [`StanceParam`](../enums/mw.StanceParam.md)): `number`   |
| :-----|
| 获取姿态的数值类参数|
| **[getStringParameter](mw.Stance.md#getstringparameter)**(`key`: [`StanceParam`](../enums/mw.StanceParam.md)): `string`   |
| 获取姿态的字符串参数|
| **[play](mw.Stance.md#play)**(): `boolean`   |
| 播放姿态|
| **[setNumberParameter](mw.Stance.md#setnumberparameter)**(`key`: [`StanceParam`](../enums/mw.StanceParam.md), `value`: `number`): `void`   |
| 设置姿态的数值类参数，比如修改某个姿态的播放速率。|
| **[setStringParameter](mw.Stance.md#setstringparameter)**(`key`: [`StanceParam`](../enums/mw.StanceParam.md), `value`: `string`): `void`   |
| 设置姿态的字符串参数，比如修改某个姿态的动画资源。|
| **[stop](mw.Stance.md#stop)**(): `boolean`   |
| 停止姿态|

## Accessors

### aimOffsetEnabled <Score text="aimOffsetEnabled" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **aimOffsetEnabled**(): `boolean` 

</th>
<th style="text-align: left">

• `set` **aimOffsetEnabled**(`value`): `void`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


启用瞄准偏移

::: warning Precautions

角色是否启用瞄准偏移。true表示启用，false表示禁用。瞄准偏移用于创建多方向武器瞄准混合结构，然后叠加应用到默认的瞄准姿势。

:::

#### Returns

| `boolean` |  |
| :------ | :------ |


</td>
<td style="text-align: left">


启用瞄准偏移

::: warning Precautions

角色是否启用瞄准偏移。true表示启用，false表示禁用。瞄准偏移用于创建多方向武器瞄准混合结构，然后叠加应用到默认的瞄准姿势。

:::


#### Parameters

| `value` | `boolean` |
| :------ | :------ |



</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"234423,216081"拖入优先加载栏。创建一个名为"Example_Stance_AimOffsetEnabled"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态，按下键盘“1”， 切换播放二次元男性基础姿态和二次元女性基础姿态。你将在场景中看到角色不同姿态的效果。按下键盘“2”， 停止播放基础姿态。代码如下：
</span>

```ts
@Component
export default class Example_Stance_AimOffsetEnabled extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("234423");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("216081");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```
___

### assetId <Score text="assetId" /> 

<table class="get-set-table">
<thead><tr>
<th style="text-align: left">

• `get` **assetId**(): `string`

</th>
</tr></thead>
<tbody><tr>
<td style="text-align: left">


姿态资源GUID


#### Returns

</td>
</tr></tbody>
</table>

<span style="font-size: 14px;">
使用示例:将使用到的资源:"234423,216081"拖入优先加载栏。创建一个名为"Example_Stance_AssetId"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态，按下键盘“1”， 切换播放二次元男性基础姿态和二次元女性基础姿态。你将在场景中看到角色不同姿态的效果。按下键盘“2”， 停止播放基础姿态。代码如下：
</span>

```ts
@Component
export default class Example_Stance_AssetId extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("234423");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("216081");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```
| `string` |  |
| :------ | :------ |

## Methods

### getNumberParameter <Score text="getNumberParameter" /> 

• **getNumberParameter**(`key`): `number` 

获取姿态的数值类参数

#### Parameters

| `key` [`StanceParam`](../enums/mw.StanceParam.md) |  要查询的参数 |
| :------ | :------ |

#### Returns

| `number` | 对应参数的值，查询不到则返回undefined |
| :------ | :------ |

___

### getStringParameter <Score text="getStringParameter" /> 

• **getStringParameter**(`key`): `string` 

获取姿态的字符串参数

#### Parameters

| `key` [`StanceParam`](../enums/mw.StanceParam.md) |  要查询的参数 |
| :------ | :------ |

#### Returns

| `string` | 对应参数的值，查询不到则返回undefined |
| :------ | :------ |

___

### play <Score text="play" /> 

• **play**(): `boolean` 

播放姿态

#### Returns

| `boolean` | 播放结果，当未进行资源加载时，会返回false，但内部会进行资源异步加载，并在完成后播放。 |
| :------ | :------ |

::: warning Precautions

播放这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"234423,216081"拖入优先加载栏。创建一个名为"Example_Stance_Play"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态，按下键盘“1”， 切换播放二次元男性基础姿态和二次元女性基础姿态。你将在场景中看到角色不同姿态的效果。按下键盘“2”， 停止播放基础姿态。代码如下：
</span>

```ts
@Component
export default class Example_Stance_Play extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("234423");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("216081");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```

___

### setNumberParameter <Score text="setNumberParameter" /> 

• **setNumberParameter**(`key`, `value`): `void` 

设置姿态的数值类参数，比如修改某个姿态的播放速率。

#### Parameters

| `key` [`StanceParam`](../enums/mw.StanceParam.md) |  要设置的参数 |
| :------ | :------ |
| `value` `number` |  要设置的值 type: 浮点型 range: 无 |


___

### setStringParameter <Score text="setStringParameter" /> 

• **setStringParameter**(`key`, `value`): `void` 

设置姿态的字符串参数，比如修改某个姿态的动画资源。

#### Parameters

| `key` [`StanceParam`](../enums/mw.StanceParam.md) |  要设置的参数 |
| :------ | :------ |
| `value` `string` |  要设置的AssetId range: 无 |


___

### stop <Score text="stop" /> 

• **stop**(): `boolean` 

停止姿态

#### Returns

| `boolean` | 停止结果 |
| :------ | :------ |

::: warning Precautions

停止这个姿态对象, 并返回执行结果. 这个操作是否会自动同步多端, 取决于调用端，服务端广播生效，客户端本地生效。

:::

<span style="font-size: 14px;">
使用示例:将使用到的资源:"234423,216081"拖入优先加载栏。创建一个名为"Example_Stance_Stop"的脚本，放置在对象栏中，打开脚本，输入以下代码保存，运行游戏，在玩家角色上加载一个二次元男性基础姿态和二次元女性基础姿态，按下键盘“1”， 切换播放二次元男性基础姿态和二次元女性基础姿态。你将在场景中看到角色不同姿态的效果。按下键盘“2”， 停止播放基础姿态。代码如下：
</span>

```ts
@Component
export default class Example_Stance_Stop extends Script {
    // 当脚本被实例后，会在第一帧更新前调用此函数
    protected onStart(): void {
        // 下列代码仅在客户端执行
        if(SystemUtil.isClient()) {
            // 获取当前客户端玩家
            let myPlayer = Player.localPlayer;
            // 获取玩家控制角色
            let myCharacter = myPlayer.character;
            // 给角色加载一个二次元男性基础姿态
            let animeManStance = myCharacter.loadStance("234423");
            console.log("animeManStance assetId " + animeManStance.assetId);
            // 给角色加载一个二次元女性基础姿态（默认）,关闭瞄准偏移
            let animeWomanStance = myCharacter.loadStance("216081");
            animeWomanStance.aimOffsetEnabled = false;
            console.log("animeWomanStance assetId " + animeWomanStance.assetId);
            // 添加一个按键方法：按下键盘“1”，切换播放二次元男性基础姿态和二次元女性基础姿态
            InputUtil.onKeyDown(Keys.One, () => {
                if(myCharacter.currentStance == animeWomanStance) {
                    animeManStance.play();
                    // 开启瞄准偏移
                    animeManStance.aimOffsetEnabled = true;
                } else {
                    animeWomanStance.play();
                    // 关闭瞄准偏移
                    animeWomanStance.aimOffsetEnabled = false;
                }
            });
            // 添加一个按键方法：按下键盘“2”，停止播放基础姿态
            InputUtil.onKeyDown(Keys.Two, () => {
                if(myCharacter.currentStance) {
                    myCharacter.currentStance.stop();
                }
            });
        }
    }
}
```
