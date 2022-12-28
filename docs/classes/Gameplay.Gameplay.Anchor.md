[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Animation

# Class: Animation

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Animation

**`Author`**

jiamin.guo

**`Description`**

动画类

**`Network Status`**

usage:客户端

**`Precautions`**

请不要直接使用new创建

**`Example`**

使用示例:创建方式
```
Gameplay.asyncGetCurrentPlayer().then((player) => {
  let Anim = player.character.playAnimation(animGuid);
  Anim = player.character.loadAnimation(animGuid);
});
```

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.Animation.md#constructor)

### Accessors

- [isPlaying](Gameplay.Gameplay.Animation.md#isplaying)
- [length](Gameplay.Gameplay.Animation.md#length)
- [loop](Gameplay.Gameplay.Animation.md#loop)
- [onAnimFinished](Gameplay.Gameplay.Animation.md#onanimfinished)
- [rate](Gameplay.Gameplay.Animation.md#rate)

### Methods

- [pause](Gameplay.Gameplay.Animation.md#pause)
- [play](Gameplay.Gameplay.Animation.md#play)
- [resume](Gameplay.Gameplay.Animation.md#resume)
- [stop](Gameplay.Gameplay.Animation.md#stop)

## Constructors

### constructor

• **new Animation**()

## Accessors

### isPlaying

• `get` **isPlaying**(): `boolean`

**`Description`**

是否正在播放

**`Example`**

判断是否该动画对象是否播放中
```
if (anim.isPlaying) {
   do Something
} else {
   do something else
}
```

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:714

___

### length

• `get` **length**(): `number`

**`Description`**

动画长度,单位为秒,只读

**`Example`**

获取对象时长
```
let anim = player.character.playAnimation(animGuid);
console.log(anim.length)
```

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:653

___

### loop

• `get` **loop**(): `number`

**`Description`**

Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否

**`Example`**

获取循环次数
```
let anim = player.character.playAnimation(animGuid);
console.log(anim.loop)
```

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:663

• `set` **loop**(`loopCount`): `void`

**`Description`**

循环播放次数,不同步，Custom模式支持取消循环

**`Example`**

设置循环次数
```
let anim = player.character.playAnimation(animGuid);
anim.loop = 23333;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `loopCount` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:673

___

### onAnimFinished

• `get` **onAnimFinished**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)

**`Example`**

动画播放结束后执行逻辑
```
anim.onAnimFinished.add(()=>{
       do something
})
```

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:725

___

### rate

• `get` **rate**(): `number`

**`Description`**

获取动画播放速率

**`Example`**

获取速率
```
let anim = player.character.playAnimation(animGuid);
console.log(anim.rate);
```

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:701

• `set` **rate**(`animRate`): `void`

**`Description`**

设置播放速率(动画切换时有融合时间,动画太短，当rate=1时 动画可能不明显) ,数值无范围限制，速率的符号表示播放方向，正表示正向播放，
负表示逆向播放, rate为1表示原始速率,默认值为1。设置该值不会改变播放的起点.

**`Example`**

两倍速播放
```
let anim = player.character.loadAnimation(animGuid);
anim.rate = 2;
anim.play();
```
动画播放加速/减慢成n秒
```
this.Anim = player.character.loadAnimation(this.AnimList[0]);
this.Anim.rate = this.Anim.length/n;
this.Anim.play();
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `animRate` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:691

## Methods

### pause

▸ **pause**(): `boolean`

**`Description`**

暂停动画,不会触发onAnimFinished委托

**`Effect`**

与角色创建方式绑定

**`Example`**

使用示例:暂停动画
```
let anim = player.character.loadAnimation(animGuid);
anim.play();
.......
anim.pause();
```

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:751

___

### play

▸ **play**(): `boolean`

**`Description`**

从动画资源的起点播放动画

**`Effect`**

与角色创建方式绑定

**`Example`**

使用示例:播放动画
```
let anim = player.character.loadAnimation(animGuid);
anim.play();
```

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:737

___

### resume

▸ **resume**(): `boolean`

**`Description`**

从当前位置继续动画播放

**`Effect`**

与角色创建方式绑定

**`Example`**

使用示例:恢复播放
```
let anim = player.character.loadAnimation(animGuid);
anim.play();
...
anim.resume();
```

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:765

___

### stop

▸ **stop**(): `boolean`

**`Description`**

停止播放,不会触发onAnimFinished委托

**`Effect`**

与角色创建方式绑定

**`Example`**

使用示例:暂停播放
```
let anim = player.character.loadAnimation(animGuid);
anim.play();
...
anim.stop();
```

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:779
