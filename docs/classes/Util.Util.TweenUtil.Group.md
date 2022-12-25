[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Util](../modules/Util.md) / [Util](../modules/Util.Util.md) / [TweenUtil](../modules/Util.Util.TweenUtil.md) / Group

# Class: Group

[Util](../modules/Util.Util.md).[TweenUtil](../modules/Util.Util.TweenUtil.md).Group

**`Author`**

huipeng.jia

**`Description`**

补间组，用于同时控制多个补间对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Util.Util.TweenUtil.Group.md#constructor)

### Methods

- [add](Util.Util.TweenUtil.Group.md#add)
- [getAll](Util.Util.TweenUtil.Group.md#getall)
- [remove](Util.Util.TweenUtil.Group.md#remove)
- [removeAll](Util.Util.TweenUtil.Group.md#removeall)
- [update](Util.Util.TweenUtil.Group.md#update)

## Constructors

### constructor

• **new Group**()

## Methods

### add

▸ **add**(`tween`): `void`

**`Description`**

将指定补间对象加入当前补间组

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                                                                                       | Description             |
| :------ | :--------------------------------------------------------------------------------------------------------- | :---------------------- |
| `tween` | [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops)\> | usage: 要添加的补间对象 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:898

---

### getAll

▸ **getAll**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops)\>[]

**`Description`**

获取当前补间组中所有补间对象

**`Effect`**

调用端生效

#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops)\>[]

补间对象数组

#### Defined in

Util/index.d.ts:886

---

### remove

▸ **remove**(`tween`): `void`

**`Description`**

将指定补间对象移出当前补间组并删除

**`Effect`**

调用端生效

#### Parameters

| Name    | Type                                                                                                       | Description                   |
| :------ | :--------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `tween` | [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.Util.TweenUtil.md#unknownprops)\> | usage: 要移出并删除的补间对象 |

#### Returns

`void`

#### Defined in

Util/index.d.ts:904

---

### removeAll

▸ **removeAll**(): `void`

**`Description`**

移除当前补间组中所有补间对象

**`Effect`**

调用端生效

**`Precautions`**

按照当前函数的实现，只是从补间组中移除补间对象，并未删除

#### Returns

`void`

#### Defined in

Util/index.d.ts:892

---

### update

▸ **update**(`time?`, `preserve?`): `boolean`

**`Description`**

更新补间组

**`Effect`**

调用端生效

**`Example`**

使用示例: 一般来说，调用时使用默认参数即可使之正常运行。

```
// 更新自定义补间组
const group = new Extension.TweenUtil.Group()
group.update()

// 更新全局补间组
Extension.TweenUtil.TWEEN.update()
```

#### Parameters

| Name        | Type      | Description                                                                       |
| :---------- | :-------- | :-------------------------------------------------------------------------------- |
| `time?`     | `number`  | usage: 要为当前补间组中所有补间对象设置的时间，不是 deltaTime。 default: 当前时间 |
| `preserve?` | `boolean` | usage: 已经结束的补间对象，是否在补间组中继续保留 default: false                  |

#### Returns

`boolean`

是否还有补间对象未结束。true-有未结束的补间对象；false-均已结束

#### Defined in

Util/index.d.ts:922
