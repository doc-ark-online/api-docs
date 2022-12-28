[Gameplay](../modules/Gameplay.Gameplay.md) / Animation

# Animation <Badge type="tip" text="Class" />

**`简介`**

动画类

**`注意事项`**

请不要直接使用 new 创建

**`案例`**

创建方式

```ts
Gameplay.asyncGetCurrentPlayer().then((player) => {
  let Anim = player.character.playAnimation(animGuid);
  Anim = player.character.loadAnimation(animGuid);
});
```

## Table of contents

### constructor

• **new Animation**()

| Accessors                                                                                                                                                                                                                  |
| :----- |
| `get` **[isPlaying](Gameplay.Gameplay.Animation.md#isplaying)**(): `boolean` <br> 是否正在播放 |
| `get` **[length](Gameplay.Gameplay.Animation.md#length)**(): `number` <br> 动画长度,单位为秒,只读 |
| `get` **[loop](Gameplay.Gameplay.Animation.md#loop)**(): `number` <br> Auto 模式表示循环播放次数，Custom 模式表示是否循环 非 1:是，1:否 |
| `set` **[loop](Gameplay.Gameplay.Animation.md#loop)**(`loopCount`): `void` <br> 循环播放次数,不同步，Custom 模式支持取消循环 |
| `get` **[onAnimFinished](Gameplay.Gameplay.Animation.md#onanimfinished)**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\> <br> 动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发) |
| `get` **[rate](Gameplay.Gameplay.Animation.md#rate)**(): `number` <br> 获取动画播放速率 |
| `set` **[rate](Gameplay.Gameplay.Animation.md#rate)**(`number`): `void` <br> 设置播放速率(动画切换时有融合时间,动画太短，当 rate=1 时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, rate 为 1 表示原始速率,默认值为 1。设置该值不会改变播放的起点. |


| Methods                                                                                                                                                                                                                  |
| :----- |
| **[pause](Gameplay.Gameplay.Animation.md#pause)**(): `boolean` <br> 暂停动画,不会触发 onAnimFinished 委托 |
| **[play](Gameplay.Gameplay.Animation.md#play)**(): `boolean` <br> 从动画资源的起点播放动画 |
| **[resume](Gameplay.Gameplay.Animation.md#resume)**(): `boolean` <br> 从当前位置继续动画播放 |
| **[stop](Gameplay.Gameplay.Animation.md#stop)**(): `boolean` <br> 停止播放,不会触发 onAnimFinished 委托 |


## Accessors

### isPlaying

• `get` **isPlaying**(): `boolean`

是否正在播放

**`Example`**

判断是否该动画对象是否播放中

```ts
if (anim.isPlaying) {
   do Something
} else {
   do something else
}
```

---

### length

• `get` **length**(): `number`

动画长度,单位为秒,只读

**`Example`**

获取对象时长

```ts
let anim = player.character.playAnimation(animGuid);
console.log(anim.length)
```

---

### loop

• `get` **loop**(): `number`

Auto 模式表示循环播放次数，Custom 模式表示是否循环 非 1:是，1:否

**`Example`**

获取循环次数

```ts
let anim = player.character.playAnimation(animGuid);
console.log(anim.loop)
```

• `set` **loop**(`loopCount`): `void`

循环播放次数,不同步，Custom 模式支持取消循环

**`Example`**

设置循环次数

```ts
let anim = player.character.playAnimation(animGuid);
anim.loop = 23333;
```

---

### onAnimFinished

• `get` **onAnimFinished**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)

**`Example`**

动画播放结束后执行逻辑

```ts
anim.onAnimFinished.add(()=>{
       do something
})
```

---

### rate

• `get` **rate**(): `number`

获取动画播放速率

**`Example`**

获取速率

```ts
let anim = player.character.playAnimation(animGuid);
console.log(anim.rate);
```

• `set` **rate**(`number`): `void`

设置播放速率(动画切换时有融合时间,动画太短，当 rate=1 时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, rate 为 1 表示原始速率,默认值为 1。设置该值不会改变播放的起点.

**`Example`**

动画播放方式
```ts
// 两倍速播放
let anim = player.character.loadAnimation(animGuid);
anim.rate = 2;
anim.play();
// 动画播放加速/减慢成 n 秒
this.Anim = player.character.loadAnimation(this.AnimList[0]);
this.Anim.rate = this.Anim.length/n;
this.Anim.play();
```

## Methods

### pause

▸ **pause**(): `boolean`

暂停动画,不会触发 onAnimFinished 委托

**`Returns`**

true 成功，false 失败

**`Effect`**

与角色创建方式绑定

**`Example`**

暂停动画

```ts
let anim = player.character.loadAnimation(animGuid);
anim.play();
// .......
anim.pause();
```

---

### play

▸ **play**(): `boolean`

从动画资源的起点播放动画

**`Returns`**

true 成功，false 失败

**`Effect`**

与角色创建方式绑定

**`Example`**

播放动画

```ts
let anim = player.character.loadAnimation(animGuid);
anim.play();
```

---

### resume

▸ **resume**(): `boolean`

从当前位置继续动画播放

**`Returns`**

true 成功，false 失败

**`Effect`**

与角色创建方式绑定

**`Example`**

恢复播放

```ts
let anim = player.character.loadAnimation(animGuid);
anim.play();
...
anim.resume();
```

---

### stop

▸ **stop**(): `boolean`

停止播放,不会触发 onAnimFinished 委托

**`Returns`**

true 成功，false 失败

**`Effect`**

与角色创建方式绑定

**`Example`**

暂停播放

```ts
let anim = player.character.loadAnimation(animGuid);
anim.play();
...
anim.stop();
```
