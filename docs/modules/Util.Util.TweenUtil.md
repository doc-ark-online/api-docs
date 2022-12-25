[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](Util.md) / [Util](Util.Util.md) / TweenUtil

# Namespace: TweenUtil

[Util](Util.md).[Util](Util.Util.md).TweenUtil

**`Author`**

huipeng.jia

**`Description`**

补间(动画)（来自 in-between）是一个概念，允许你以平滑的方式更改对象的属性。
你只需告诉它哪些属性要更改，当补间结束运行时它们应该具有哪些最终值，以及这需要多长时间，
补间引擎将负责计算从起始点到结束点的值。

**`Network Status`**

usage: 双端

**`Example`**

使用示例: 示例

```
// 例如，position对象拥有x和y两个坐标:
var position = {x: 100, y: 0};

// 如果你想将x坐标的值从100变成200，首先为位置创建一个补间(tween)
var tween = new Extension.TweenUtil.Tween(position)

// 然后告诉 tween 我们想要在1000毫秒内以动画的形式移动 x 的位置
tween.to({x: 200}, 1000)

// tween 已经被创建了，但是它还没被激活(使用)，你需要这样启动：
tween.start()

// 最后，想要成功的完成这种效果，你需要在主函数中调用TWEEN.update
onUpdate() {
   // [...]
   Extension.TweenUtil.TWEEN.update()
   // [...]
}

// tween 可以链式调用！ 每个tween函数都会返回tween实例，所以你可以重写创建tween的代码：
var tween = new Extension.TweenUtil.Tween(position).to({x: 200}, 1000).start()
```

## Table of contents

### Classes

- [Group](../classes/Util.Util.TweenUtil.Group.md)
- [Sequence](../classes/Util.Util.TweenUtil.Sequence.md)
- [Tween](../classes/Util.Util.TweenUtil.Tween.md)

### Type Aliases

- [EasingFunction](Util.Util.TweenUtil.md#easingfunction)
- [InterpolationFunction](Util.Util.TweenUtil.md#interpolationfunction)
- [UnknownProps](Util.Util.TweenUtil.md#unknownprops)

### Variables

- [TWEEN](Util.Util.TweenUtil.md#tween)

### Functions

- [nextId](Util.Util.TweenUtil.md#nextid)

## Type Aliases

### EasingFunction

Ƭ **EasingFunction**: (`amount`: `number`) => `number`

#### Type declaration

▸ (`amount`): `number`

**`Description`**

缓动函数的类型定义

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `amount` | `number` |

##### Returns

`number`

#### Defined in

Util/index.d.ts:927

---

### InterpolationFunction

Ƭ **InterpolationFunction**: (`v`: `number`[], `k`: `number`) => `number`

#### Type declaration

▸ (`v`, `k`): `number`

**`Description`**

插值函数的类型定义

##### Parameters

| Name | Type       |
| :--- | :--------- |
| `v`  | `number`[] |
| `k`  | `number`   |

##### Returns

`number`

#### Defined in

Util/index.d.ts:853

---

### UnknownProps

Ƭ **UnknownProps**: `Record`<`string`, `any`\>

**`Description`**

补间属性的定义，用户可以自由扩展

#### Defined in

Util/index.d.ts:1213

## Variables

### TWEEN

• `Const` **TWEEN**: [`Group`](../classes/Util.Util.TweenUtil.Group.md)

**`Description`**

全局补间组单例。在创建补间时，如不特别指定，默认添加到该补间组

#### Defined in

Util/index.d.ts:1223

## Functions

### nextId

▸ **nextId**(): `number`

**`Description`**

获取下一个 ID 的全局方法

**`Effect`**

调用端生效

#### Returns

`number`

下一个 ID

#### Defined in

Util/index.d.ts:848
