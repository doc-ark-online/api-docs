[Monetization](../groups/Core.Monetization.md) / AdsState

# AdsState <Badge type="tip" text="Enumeration" /> <Score text="AdsState" />

广告状态，调用show方法的时候可能返回的广告状态

## Table of contents

| Enumeration Members |
| :-----|
| **[Click](mw.AdsState.md#click)** = ``3`` <br> |
| **[Close](mw.AdsState.md#close)** = ``1`` <br> |
| **[Fail](mw.AdsState.md#fail)** = ``-1`` <br> |
| **[Reward](mw.AdsState.md#reward)** = ``4`` <br> |
| **[Skip](mw.AdsState.md#skip)** = ``2`` <br> |
| **[Success](mw.AdsState.md#success)** = ``0`` <br> |
| **[Timeout](mw.AdsState.md#timeout)** = ``5`` <br> |

## Enumeration Members

### Click <Score text="Click" /> 

• **Click** = ``3``

用户点击。 用户点击了广告里面的内容的时候，无论是否完成广告播放。 看广告时点击了广告里的内容会有这个回调。 一般不会在这加逻辑

___

### Close <Score text="Close" /> 

• **Close** = ``1``

用户关闭。 用户关闭广告界面的时候回调，无论是否完成广告播放。 这里是广告正常播放情况下最后一个状态，因此在这里进行奖励判断是比较合适的。 由于用户关闭广告后回游戏需要一定的时间，建议在if (state == 1) `{ 这里面加上适当的延迟 }` ，以免因放广告时的游戏挂起卡顿，导致后续某些游戏逻辑失效。

___

### Fail <Score text="Fail" /> 

• **Fail** = ``-1``

展示失败。 展示广告失败的时候回调，一般是网络卡顿。 建议在这里做容错

___

### Reward <Score text="Reward" /> 

• **Reward** = ``4``

获得奖励。 只有激励广告才会返回这个,用户播放广告完成了，无论是否点击了关闭广告界面。 可以在广告播放前设置一个变量CanGetReward，来决定玩家是否可以获得奖励： if (state == 4) `{在这个回调出现时，里面修改CanGetReward的值}`， 以便在 state == 1 用户关闭广告的时候进行奖励。 尽量不要在这给奖励，因为回调state==4的时候，玩家大概率还在放广告阶段，还没有回到mw游戏里。

___

### Skip <Score text="Skip" /> 

• **Skip** = ``2``

用户跳过。 用户点击了跳过广告的时候回调，无论是否完成广告播放。 某些广告快看完的时候，会给一个跳过按钮，点击跳过会有这个回调。 一般不会在这加逻辑。

___

### Success <Score text="Success" /> 

• **Success** = ``0``

开始展示。 开始展示广告的时候回调，无论是否完成广告播放。 这里可以用来“保护”玩家，顺利开始播放广告后玩家客户端处在一个“挂起”的状态。 如有需要，可在此处加一些保护逻辑，例如在放广告的时候玩家暂时被传送走，等state==1关闭广告后再切回来。

___

### Timeout <Score text="Timeout" /> 

• **Timeout** = ``5``

播放广告超时，通常发生的情况是广告API的版本过低，这里可以提示用户升级233版本
