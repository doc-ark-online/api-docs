[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / Animation

# Class: Animation

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).Animation

**`Author`**

Jiamin.Guo

**`Description`**

动画类

**`Network Status`**

usage:客户端

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

从动画的开始播放动画

#### Returns

`boolean`

#### Defined in

Gameplay/index.d.ts:670

___

### length

• `get` **length**(): `number`

**`Description`**

动画长度,单位为秒,只读

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:650

___

### loop

• `get` **loop**(): `number`

**`Description`**

Auto模式表示循环播放次数，Custom模式表示是否循环  非1:是，1:否

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:654

• `set` **loop**(`loopCount`): `void`

**`Description`**

循环播放次数,不同步，Custom模式支持取消循环

#### Parameters

| Name | Type |
| :------ | :------ |
| `loopCount` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:658

___

### onAnimFinished

• `get` **onAnimFinished**(): [`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

**`Description`**

动画结束回调(在动画不被中断且正常播放完成情况下仅客户端触发)

#### Returns

[`MulticastDelegate`](Type.Type.MulticastDelegate.md)<() => `void`\>

#### Defined in

Gameplay/index.d.ts:674

___

### rate

• `get` **rate**(): `number`

**`Description`**

获取动画播放速率

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:666

• `set` **rate**(`animRate`): `void`

**`Description`**

设置动画播放速率，无范围限制，速率的符号表示播放方向，正表示正向播放，负表示逆向播放, 1表示原始速率,默认值为1

#### Parameters

| Name | Type |
| :------ | :------ |
| `animRate` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:662

## Methods

### pause

▸ **pause**(): `boolean`

**`Description`**

暂停动画

**`Effect`**

与角色创建方式绑定

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:686

___

### play

▸ **play**(): `boolean`

**`Description`**

从动画资源的起点播放动画

**`Effect`**

与角色创建方式绑定

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:680

___

### resume

▸ **resume**(): `boolean`

**`Description`**

从当前位置继续动画播放

**`Effect`**

与角色创建方式绑定

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:692

___

### stop

▸ **stop**(): `boolean`

**`Description`**

停止播放

**`Effect`**

与角色创建方式绑定

#### Returns

`boolean`

true 成功，false 失败

#### Defined in

Gameplay/index.d.ts:698
