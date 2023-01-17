[Service](../modules/Service.Service.md) / AdsState

# AdsState <Badge type="tip" text="Enumeration" /> <Score text="AdsState" />

广告状态

## Table of contents

| Enumeration Members |
| :-----|
| **[Fail](Service.AdsState.md#fail)** = ``-1`` <br> 展示失败|
| **[Success](Service.AdsState.md#success)** = ``0`` <br> 开始展示|
| **[Close](Service.AdsState.md#close)** = ``1`` <br> 用户关闭|
| **[Skip](Service.AdsState.md#skip)** = ``2`` <br> 用户跳过(不常用)|
| **[Click](Service.AdsState.md#click)** = ``3`` <br> 用户点击(不常用)|
| **[Reward](Service.AdsState.md#reward)** = ``4`` <br> 获得奖励|

::: warning Precautions

播广告过程中每发生一次state改变，
就会回调并走一遍(state: Service.AdsState) =>{这里的内容}。
正常看广告的流程下，state的变化是：0→4→1。
建议根据回调的state来判断是否可以给奖励了。

:::


## Enumeration Members

### Fail <Score text="Fail" /> 

• **Fail** = ``-1``

展示失败。
展示广告失败的时候回调，一般是网络卡顿。
建议在这里做容错，例如播放失败时维持广告播放按钮，提示玩家再点一次试试。


___

### Success <Score text="Success" /> 

• **Success** = ``0``

开始展示。
开始展示广告的时候回调，无论是否完成广告播放。
这里可以用来“保护”玩家，顺利开始播放广告后玩家客户端处在一个“挂起”的状态。
如有需要，可在此处加一些保护逻辑，例如在放广告的时候玩家暂时被传送走，等state==1关闭广告后再切回来。


___

### Close <Score text="Close" /> 

• **Close** = ``1``

用户关闭。
用户关闭广告界面的时候回调，无论是否完成广告播放。
这里是广告正常播放情况下最后一个状态，因此在这里进行奖励判断是比较合适的。
由于用户关闭广告后回游戏需要一定的时间，建议在if (state == 1) { 这里面加上适当的延迟 } ，以免因放广告时的游戏挂起卡顿，导致后续某些游戏逻辑失效。

___

### Skip(不常用) <Score text="Skip" /> 

• **Skip** = ``2``

用户跳过(不常用)。
用户点击了跳过广告的时候回调，无论是否完成广告播放。
某些广告快看完的时候，会给一个跳过按钮，点击跳过会有这个回调。
一般不会在这加逻辑。

___

### Click(不常用) <Score text="Click" /> 

• **Click** = ``3``

用户点击(不常用)。
用户点击了广告里面的内容的时候，无论是否完成广告播放。
看广告时点击了广告里的内容会有这个回调。
一般不会在这加逻辑。

___


### Reward <Score text="Reward" /> 

• **Reward** = ``4``

获得奖励。
用户播放广告完成了，无论是否点击了关闭广告界面。
可以在广告播放前设置一个变量CanGetReward，来决定玩家是否可以获得奖励：
if (state == 4) {在这个回调出现时，里面修改CanGetReward的值}，
以便在 state == 1 用户关闭广告的时候进行奖励。
尽量不要在这给奖励，因为回调state==4的时候，玩家大概率还在放广告阶段，还没有回到mw游戏里。




