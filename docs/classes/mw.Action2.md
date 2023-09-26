[TYPE](../groups/Core.TYPE.md) / Action2

# Action2<T1, T2\> <Badge type="tip" text="Class" /> <Score text="Action2<T1, T2\>" />

<p class="content-big">

两个参数的代理

</p>

## Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

## Hierarchy

- [`Action`](mw.Action.md)

  ↳ **`Action2`**

## Table of contents

### Constructors <Score text="Constructors" /> 


::: details 点击查看继承
### Constructors <Score text="Constructors" /> 
| **new Action**()  |
| :----- |
:::


### Accessors <Score text="Accessors" /> 


::: details 点击查看继承
### Accessors <Score text="Accessors" /> 
| **[count](mw.Action.md#count)**(): `number`  |
| :-----|
| 监听方法的数量|
:::


### Methods <Score text="Methods" /> 


::: details 点击查看继承
### Methods <Score text="Methods" /> 
| **[add](mw.Action.md#add)**(`fn`: `Function`, `thisArg?`: `any`): `number`  |
| :-----|
| 添加一个监听方法(有重复过滤)|
| **[call](mw.Action.md#call)**(`...params`: `any`): `void`  |
| 执行|
| **[clear](mw.Action.md#clear)**(): `void`  |
| 清除所有监听|
| **[includes](mw.Action.md#includes)**(`fn`: `Function`, `thisArg`: `any`): `boolean`  |
| 判断是否包含某个监听方法|
| **[remove](mw.Action.md#remove)**(`fn`: `number` \, `thisArg?`: `any`): `void`  |
| 移除一个监听方法|
:::


## Accessors

## Methods