[UTILITY](../groups/Core.UTILITY.md) / TweenGroup

# TweenGroup <Badge type="tip" text="Class" /> <Score text="TweenGroup" />

补间组，用于同时控制多个补间对象

## Table of contents

| Methods |
| :-----|
| **[add](mw.TweenGroup.md#add)**(`tween`: `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\>): `void` <br> 将指定补间对象加入当前补间组|
| **[getAll](mw.TweenGroup.md#getall)**(): `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\>[] <br> 获取当前补间组中所有补间对象|
| **[remove](mw.TweenGroup.md#remove)**(`tween`: `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\>): `void` <br> 将指定补间对象移出当前补间组并删除|
| **[removeAll](mw.TweenGroup.md#removeall)**(): `void` <br> 移除当前补间组中所有补间对象|
| **[update](mw.TweenGroup.md#update)**(`time?`: `number`, `preserve?`: `boolean`): `boolean` <br> 更新补间组|

## Methods

### add <Score text="add" /> 

• **add**(`tween`): `void` 

将指定补间对象加入当前补间组


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\> |  要添加的补间对象 |


___

### getAll <Score text="getAll" /> 

• **getAll**(): `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\>[] 

获取当前补间组中所有补间对象


#### Returns

`Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\>[]

补间对象数组

___

### remove <Score text="remove" /> 

• **remove**(`tween`): `void` 

将指定补间对象移出当前补间组并删除


#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tween` | `Tween`<[`TweenUnknownProps`](../modules/Core.mw.md#tweenunknownprops)\> |  要移出并删除的补间对象 |


___

### removeAll <Score text="removeAll" /> 

• **removeAll**(): `void` 

移除当前补间组中所有补间对象


::: warning Precautions

按照当前函数的实现，只是从补间组中移除补间对象，并未删除

:::


___

### update <Score text="update" /> 

• **update**(`time?`, `preserve?`): `boolean` 

更新补间组


使用示例: 一般来说，调用时使用默认参数即可使之正常运行。
```ts
// 更新自定义补间组
const group = new mw.TweenUtil.Group()
group.update()

// 更新全局补间组
mw.TweenUtil.TWEEN.update()
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `number` |  要为当前补间组中所有补间对象设置的时间，不是deltaTime。 default: 当前时间 |
| `preserve?` | `boolean` |  已经结束的补间对象，是否在补间组中继续保留 default: false |

#### Returns

`boolean`

是否还有补间对象未结束。true-有未结束的补间对象；false-均已结束
