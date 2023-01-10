[Gameplay](../modules/Gameplay.Gameplay.md) / Animation

# Animation <Badge type="tip" text="Class" /> <Score text="Animation" />

**`Description`**

动画类

::: warning Precautions

请不要直接使用new创建

:::

**`Example`**

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

| Methods |
| :-----|
| **[pause](Gameplay.Animation.md#pause)**(): `boolean` <br> 暂停动画,不会触发onAnimFinished委托|
| **[play](Gameplay.Animation.md#play)**(): `boolean` <br> 从动画资源的起点播放动画|
| **[resume](Gameplay.Animation.md#resume)**(): `boolean` <br> 从当前位置继续动画播放|
| **[stop](Gameplay.Animation.md#stop)**(): `boolean` <br> 停止播放,不会触发onAnimFinished委托|

## Accessors

### isPlaying <Score text="isPlaying" /> 

• `get` **isPlaying**(): `boolean`

**`Description`**

是否正在播放

**`Example`**

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

**`Description`**

动画长度,单位为秒,只读

**`Example`**

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

**`Description`**

Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否

**`Example`**

使用示例:获取循环次数
```ts
let anim = player.character.playAnimation(animGUID);
console.log(anim.loop)
```

#### Returns

`number`

• `set` **loop**(`loopCount`): `void`

**`Description`**

循环播放次数,不同步，Custom模式支持取消循环

**`Example`**

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

**`Description`**

动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)

**`Example`**

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

**`Description`**

获取动画播放速率

**`Example`**

使用示例:获取速率
```ts
let anim = player.character.playAnimation(animGUID);
console.log(anim.rate);
```

#### Returns

`number`

• `set` **rate**(`animRate`): `void`

**`Description`**

设置播放速率(动画切换时有融合时间,动画太短，当rate=1时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, rate为1表示原始速率,默认值为1。设置该值不会改变播放的起点.

**`Example`**

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


## Methods

### pause <Score text="pause" /> 

▸ **pause**(): `boolean`

**`Description`**

暂停动画,不会触发onAnimFinished委托

与角色创建方式绑定

**`Example`**

使用示例:暂停动画
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
.......
anim.pause(); <Badge type="tip" text="other" />
```

#### Returns

`boolean`

true 成功，false 失败

___

### play <Score text="play" /> 

▸ **play**(): `boolean`

**`Description`**

从动画资源的起点播放动画

与角色创建方式绑定

**`Example`**

使用示例:播放动画
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play(); <Badge type="tip" text="other" />
```

#### Returns

`boolean`

true 成功，false 失败

___

### resume <Score text="resume" /> 

▸ **resume**(): `boolean`

**`Description`**

从当前位置继续动画播放

与角色创建方式绑定

**`Example`**

使用示例:恢复播放
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
...
anim.resume(); <Badge type="tip" text="other" />
```

#### Returns

`boolean`

true 成功，false 失败

___

### stop <Score text="stop" /> 

▸ **stop**(): `boolean`

**`Description`**

停止播放,不会触发onAnimFinished委托

与角色创建方式绑定

**`Example`**

使用示例:暂停播放
```ts
let anim = player.character.loadAnimation(animGUID);
anim.play();
...
anim.stop(); <Badge type="tip" text="other" />
```

#### Returns

`boolean`

true 成功，false 失败
