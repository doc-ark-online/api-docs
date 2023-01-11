[Util](../modules/Util.Util.md) / [TweenUtil](../modules/Util.TweenUtil.md) / Group

# Group <Badge type="tip" text="Class" /> 

**`Description`**

补间组，用于同时控制多个补间对象

## Table of contents

| Methods |
| :-----|
| **[add](Util.Util.TweenUtil.Group.md#add)**([`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\>): `void` <br> 将指定补间对象加入当前补间组|
| **[getAll](Util.Util.TweenUtil.Group.md#getall)**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\>[] <br> 获取当前补间组中所有补间对象|
| **[remove](Util.Util.TweenUtil.Group.md#remove)**([`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\>): `void` <br> 将指定补间对象移出当前补间组并删除|
| **[removeAll](Util.Util.TweenUtil.Group.md#removeall)**(): `void` <br> 移除当前补间组中所有补间对象|
| **[update](Util.Util.TweenUtil.Group.md#update)**(`number`, `boolean`): `boolean` <br> 更新补间组|

## Methods

### add  

▸ **add**(`tween`): `void` <Badge type="tip" text="other" />

**`Description`**

将指定补间对象加入当前补间组


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\> |  要添加的补间对象 |


___

### getAll  

▸ **getAll**(): [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\>[] <Badge type="tip" text="other" />

**`Description`**

获取当前补间组中所有补间对象


#### Returns

[`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\>[]

补间对象数组

___

### remove  

▸ **remove**(`tween`): `void` <Badge type="tip" text="other" />

**`Description`**

将指定补间对象移出当前补间组并删除


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | [`Tween`](Util.Util.TweenUtil.Tween.md)<[`UnknownProps`](../modules/Util.TweenUtil.md#unknownprops)\> |  要移出并删除的补间对象 |


___

### removeAll  

▸ **removeAll**(): `void` <Badge type="tip" text="other" />

**`Description`**

移除当前补间组中所有补间对象


::: warning Precautions

按照当前函数的实现，只是从补间组中移除补间对象，并未删除

:::


___

### update  

▸ **update**(`time?`, `preserve?`): `boolean`

**`Description`**

更新补间组


**`Example`**

使用示例: 一般来说，调用时使用默认参数即可使之正常运行。
```ts
// 更新自定义补间组
const group = new Extension.TweenUtil.Group()
group.update()

// 更新全局补间组
Extension.TweenUtil.TWEEN.update() <Badge type="tip" text="other" />
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` |  要为当前补间组中所有补间对象设置的时间，不是deltaTime。 default: 当前时间 |
| `preserve?` | `boolean` |  已经结束的补间对象，是否在补间组中继续保留 default: false |

#### Returns

`boolean`

是否还有补间对象未结束。true-有未结束的补间对象；false-均已结束
