[TYPE](../groups/Core.TYPE.md) / Action2

# Action2<T, S\> <Badge type="tip" text="Class" /> <Score text="Action2<T, S\>" />

两个参数的代理

## Type parameters

| Name |
| :------ |
| `T` |
| `S` |

## Hierarchy

- [`Action`](mw.Action.md)

  ↳ **`Action2`**

## Table of contents

| Accessors |
| :-----|


::: details 点击查看继承
| Accessors |
| :-----|
| **[count](mw.Action.md#count)**(): `number` <br> 监听方法的数量|
:::


| Methods |
| :-----|


::: details 点击查看继承
| Methods |
| :-----|
| **[add](mw.Action.md#add)**(`fn`: `Function`, `thisArg?`: `any`): `number` <br> 添加一个监听方法(有重复过滤)|
| **[call](mw.Action.md#call)**(`...params`: `any`): `void` <br> 执行|
| **[clear](mw.Action.md#clear)**(): `void` <br> 清除所有监听|
| **[includes](mw.Action.md#includes)**(`fn`: `Function`, `thisArg`: `any`): `boolean` <br> 判断是否包含某个监听方法|
| **[remove](mw.Action.md#remove)**(`fn`: `number` \, `thisArg?`: `any`): `void` <br> 移除一个监听方法|
:::


## Methods