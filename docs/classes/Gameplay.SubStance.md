[Gameplay](../modules/Gameplay.Gameplay.md) / SubStance

# SubStance <Badge type="tip" text="Class" />

**`Description`**

二级姿态

**`Example`**

使用示例: 在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态
```ts
this.stanceProxy = this.character.loadStance("49096", true);
// 修改姿态的混合模式为全身
this.stanceProxy.blendMode = Gameplay.StanceBlendMode.WholeBody;
// 播放这个姿态
this.stanceProxy.play();
//当你想停止它时, 可以执行下面的代码
this.stanceProxy.stop();
```

## Hierarchy

- [`Stance`](Gameplay.Stance.md)

  ↳ **`SubStance`**

## Table of contents

| Accessors |
| :-----|
| **[blendMode](Gameplay.SubStance.md#blendmode)**(): [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md) <br> 姿态的混合模式|

| Methods |
| :-----|

**`Description`**

构造函数

**`Effect`**

双端函数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `character` | [`CharacterBase`](Gameplay.CharacterBase.md) | 角色 |
| `sync` | `boolean` | 是否自动同步 |

## Accessors

### blendMode

• `get` **blendMode**(): [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md)

**`Description`**

姿态的混合模式

**`Precautions`**

可以理解为姿态的播放位置(上半身, 下半身, 全身), 无法对正常播放的姿态进行修改
如果这个姿态是通过预制姿态资源GUID创建的, 那么它的默认值为StanceBlendMode.None(临时 预计021删除这个值), 它会按照资源上的blendMode参数指定混合模式;
如果是通过动画资源GUID创建的, 那么它的默认值为StanceBlendMode.WholeBody.
不应该把动画资源GUID创建的姿态的混合模式置为StanceBlendMode.None(临时 预计021删除这个值), 因为动画资源没有blendMode参数. 虽然不会报错, 但它确实会创建出一个姿态, 而且看不到任何表现.

**`Example`**

```ts
stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendLower;
```

#### Returns

[`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md)

• `set` **blendMode**(`newBlendMode`): `void`

**`Description`**

姿态的混合模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `newBlendMode` | [`StanceBlendMode`](../enums/Gameplay.StanceBlendMode.md) |

#### Returns

`void`

## Methods