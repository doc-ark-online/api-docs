[Animations](../groups/Animations.Animations.md) / Animation

# Animation <Badge type="tip" text="Class" /> <Score text="Animation" />

**`Groups`**

ANIMATIONS

动画类

::: warning Precautions

请不要直接使用new创建，playAnimation是个快速实现功能的接口,可配置参数有限，loadAnimation可以返回动画,以进行更加精细的动画控制

:::

使用示例:创建方式
```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
  let Anim = player.character.playAnimation(animGUID);
  Anim = player.character.loadAnimation(animGUID);
});
```

## Table of contents

| Accessors |
| :-----|
| **[isPlaying](Gameplay.Animation.md#isplaying)**(): `boolean` <br> 是否正在播放|
| **[length](Gameplay.Animation.md#length)**(): `number` <br> 动画长度,单位为秒,只读|
| **[loop](Gameplay.Animation.md#loop)**(): `number` <br> Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否|
| **[onAnimFinished](Gameplay.Animation.md#onanimfinished)**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\> <br> 动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)|
| **[rate](Gameplay.Animation.md#rate)**(): `number` <br> 获取动画播放速率|
| **[slot](Gameplay.Animation.md#slot)**(): [`AnimSlot`](../enums/Gameplay.AnimSlot.md) <br> 获取动画播放插槽|

| Methods |
| :-----|
| **[pause](Gameplay.Animation.md#pause)**(): `boolean` <br> 暂停动画,不会触发onAnimFinished委托|
| **[play](Gameplay.Animation.md#play)**(): `boolean` <br> 从动画资源的起点播放动画|
| **[resume](Gameplay.Animation.md#resume)**(): `boolean` <br> 从当前位置继续动画播放|
| **[stop](Gameplay.Animation.md#stop)**(): `boolean` <br> 停止播放,不会触发onAnimFinished委托|

## Accessors

### isPlaying <Score text="isPlaying" /> 

• `get` **isPlaying**(): `boolean`

是否正在播放

使用示例:判断是否该动画对象是否播放中
```ts
if (anim.isPlaying) {
   do Something
} else {
   do something else
}
```

#### Returns

`boolean`

___

### length <Score text="length" /> 

• `get` **length**(): `number`

动画长度,单位为秒,只读

使用示例:获取对象时长
```ts
let anim = player.character.playAnimation(animGUID);
console.log(anim.length)
```

#### Returns

`number`

___

### loop <Score text="loop" /> 

• `get` **loop**(): `number`

Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否

使用示例:获取循环次数
```ts
let anim = player.character.playAnimation(animGUID);
console.log(anim.loop)
```

#### Returns

`number`

• `set` **loop**(`loopCount`): `void`

循环播放次数,不同步，Custom模式支持取消循环

使用示例:设置循环次数
```ts
let anim = player.character.playAnimation(animGUID);
anim.loop = 23333;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loopCount` | `number` |


___

### onAnimFinished <Score text="onAnimFinished" /> 

• `get` **onAnimFinished**(): [`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)

::: warning Precautions

性能限制，服务器不播放动画，请在客户端使用该委托。有几种情况下不会触发该委托 1 调用pause方法 2 调用stop方法 3 该动画正在播放，调用play接口或者调用playAnimation接口

:::

使用示例:动画播放结束后执行逻辑
```ts
anim.onAnimFinished.add(()=>{
       do something
})
```

#### Returns

[`MulticastDelegate`](Type.MulticastDelegate.md)<() => `void`\>

___

### rate <Score text="rate" /> 

• `get` **rate**(): `number`

获取动画播放速率

使用示例:获取速率
```ts
let anim = player.character.playAnimation(animGUID);
console.log(anim.rate);
```

#### Returns

`number`

• `set` **rate**(`animRate`): `void`

设置播放速率(动画切换时有融合时间,动画太短，当rate=1时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, rate为1表示原始速率,默认值为1。设置该值不会改变播放的起点.

使用示例:动画播放方式
```ts
// 两倍速播放
let anim = player.character.loadAnimation(animGUID);
anim.rate = 2;
anim.play();
// 动画播放加速/减慢成n秒
this.Anim = player.character.loadAnimation(this.AnimList[0]);
this.Anim.rate = this.Anim.length/n;
this.Anim.play();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `animRate` | `number` |


___

### slot <Score text="slot" /> 

• `get` **slot**(): [`AnimSlot`](../enums/Gameplay.AnimSlot.md)

获取动画播放插槽

使用示例:获取动画播放插槽
```ts
let anim = player.character.loadAnimation(animGUID);
console.log(anim.slot);
```

#### Returns

[`AnimSlot`](../enums/Gameplay.AnimSlot.md)

• `set` **slot**(`animslot`): `void`

设置动画播放插槽

使用示例:动画播放插槽
```ts
// 让动画只在上半身播放
let anim = player.character.loadAnimation(animGUID);
anim.slot = Gameplay.AnimSlot.Upper;
anim.play();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `animslot` | [`AnimSlot`](../enums/Gameplay.AnimSlot.md) |


## Methods

### pause <Score text="pause" /> 

• **pause**(): `boolean` 

暂停动画,不会触发onAnimFinished委托


::: warning Precautions

生效范围与角色创建方式绑定

:::

使用示例:暂停动画
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
.......
anim.pause();
```

#### Returns

`boolean`

true 成功，false 失败

___

### play <Score text="play" /> 

• **play**(): `boolean` 

从动画资源的起点播放动画


::: warning Precautions

生效范围与角色创建方式绑定

:::

使用示例:播放动画
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
```

#### Returns

`boolean`

true 成功，false 失败

___

### resume <Score text="resume" /> 

• **resume**(): `boolean` 

从当前位置继续动画播放


::: warning Precautions

生效范围与角色创建方式绑定

:::

使用示例:恢复播放
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
...
anim.resume();
```

#### Returns

`boolean`

true 成功，false 失败

___

### stop <Score text="stop" /> 

• **stop**(): `boolean` 

停止播放,不会触发onAnimFinished委托


::: warning Precautions

生效范围与角色创建方式绑定

:::

使用示例:暂停播放
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
...
anim.stop();
```

#### Returns

`boolean`

true 成功，false 失败
