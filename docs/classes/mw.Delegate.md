[TYPE](../groups/Core.TYPE.md) / Delegate

# Delegate<T\> <Badge type="tip" text="Class" /> <Score text="Delegate<T\>" />

<span class="content-big">

委托

</span>

<span class="content-big">

----------------------------------------

</span>

<span class="content-big">

委托代表了一组特定的任务，并且可以调用指定的函数来完成这些任务。委托提供了一种灵活的方式，让你可以将任务分配给不同的函数，并且可以在运行时动态地添加或删除任务。

</span>

<span class="content-big">

编辑器已为您封装好了可以直接使用的委托函数，分为三种委托类型：

</span>

<span class="content-big">

1. Delegate 为单播委托，指的是只能绑定一个函数的委托，实现一对一的通知。

</span>

<span class="content-big">

2. MulticastDelegate 多播委托，指的是能绑定多个函数的委托，实现一对多的通知。

</span>

<span class="content-big">

3. MulticastGameObjectDelegate 与GameObject联系在一起的多播委拖，可以一对多的通知。

</span>

<span class="content-big">

如何理解委托 ？

</span>

<span class="content-big">

一种直击灵魂的理解是: 它把函数变成一个像"对象"一样的东西, 并且可以用变量保存。

</span>

<span class="content-big">

常见的方式是事件, 比如在输入事件中放一个回调。

</span>

<span class="content-big">

函数跟对象不同, 对象可以通过实例化, 在内存中复制许多不同的实体, 函数在程序启动后, 内存就只有一份, 非静态函数的实现方法是在第一个参数里增加一个this作为参数传进去, 这样就实现了绑定关系。

</span>

<span class="content-big">

Delegate的实现方案, 其实就是制造了一个对象去链接函数的地址, 可以是单个函数地址, 也可以是函数地址集, 当调用时就去调用这些函数, 链接的过程如果涉及到函数的对象, 就把对象的实例存在Delegate中。

</span>

<span class="content-big">

委托与代理有什么区别 ?

</span>

<span class="content-big">

- 代理是一种用来解决问题的方法。提供一种“一个类对另外一个类的控制权。”是类与类之间关系。

</span>

<span class="content-big">

- 委托是一种应用方法的类型。委托提供了“一种方法的执行会同时执行加载在上面的方法”。是方法与方法之间的关系。

</span>

<span class="content-big">

- 委托可以代替代理，但是代理不能代替委托。

</span>

<span class="content-big">

- 委托可以动态加载方法，代理不能实现。

</span>

**`Effect`**


<span style="font-size: 14px;">

使用示例: 创建一个名为"DelExample"的脚本,打开脚本,输入以下代码保存,运行游戏，打印输出 5 。

</span>

```ts
@Component
 export default class DelExample extends Script {

     // 示例函数，满足 DelegateFuncType 约束
     public addNumbers(a: number, b: number): number {
         return a + b;
     }
     protected onStart(): void {

         // 实例化 Delegate 类
         const delegateInstance = new Delegate<typeof this.addNumbers>();
         // 绑定 Delegate 实例的方法
         delegateInstance.bind(this.addNumbers);
         // 调用 Delegate 实例的方法
         const result = delegateInstance.execute(2,3);
         // 输出：5
         console.log(result);
     }
 }
```

## Type parameters

| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |
| :------ | :------ |

## Implements

- `DelegateInterface`<`T`\>

## Table of contents

### Methods <Score text="Methods" /> 
| **[bind](mw.Delegate.md#bind)**(`func`: `T`): `void`  |
| :-----|
| 绑定事件|
| **[execute](mw.Delegate.md#execute)**(`...arg`: `Parameters`<`T`\>): `ReturnType`<`T`\>  |
| 执行绑定事件|
| **[isBound](mw.Delegate.md#isbound)**(): `boolean`  |
| 是否绑定事件|
| **[unbind](mw.Delegate.md#unbind)**(): `void`  |
| 解绑事件|

#### Type parameters

| `T` | extends [`DelegateFuncType`](../modules/Core.mw.md#delegatefunctype) |
| :------ | :------ |

## Methods

### bind <Score text="bind" /> 

• **bind**(`func`): `void` 

绑定事件

#### Parameters

| `func` `T` |  绑定的函数 default: |
| :------ | :------ |


#### Implementation of

DelegateInterface.bind


___

### execute <Score text="execute" /> 

• **execute**(`...arg`): `ReturnType`<`T`\> 

执行绑定事件

#### Parameters

| `...arg` `Parameters`<`T`\> |  执行参数 |
| :------ | :------ |

#### Returns

| `ReturnType`<`T`\> | DelegateInterface.execute |
| :------ | :------ |


___

### isBound <Score text="isBound" /> 

• **isBound**(): `boolean` 

是否绑定事件

#### Returns

| `boolean` | DelegateInterface.isBound |
| :------ | :------ |


___

### unbind <Score text="unbind" /> 

• **unbind**(): `void` 

解绑事件


#### Implementation of

DelegateInterface.unbind

